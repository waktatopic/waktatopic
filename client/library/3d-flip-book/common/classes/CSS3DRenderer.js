import {THREE} from '../libs';

THREE.CSS3DObject = class CSS3DObject extends THREE.Object3D {
  constructor(element=undefined) {
    super();

    if(element) {
      this.set(element);
    }
  }

  set(element) {
    this.element = element;
  	this.element.style.position = 'absolute';

  	this.addEventListener('removed', function() {
  		if (this.element.parentNode !== null) {
  			this.element.parentNode.removeChild(this.element);
  		}
  	});
  }
};

THREE.CSS3DSprite = class CSS3DSprite extends THREE.CSS3DObject {
  constructor(element) {
    super(element);
  }
};

THREE.CSS3DRenderer = class CSS3DRenderer {
  constructor() {

  	var _width, _height;
  	var _widthHalf, _heightHalf;

  	var matrix = new THREE.Matrix4();

  	var cache = {
  		camera: { fov: 0, style: '' },
  		objects: {}
  	};

  	var domElement = document.createElement( 'div');
  	domElement.style.overflow = 'hidden';

  	this.domElement = domElement;

  	var cameraElement = document.createElement( 'div');

  	cameraElement.style.WebkitTransformStyle = 'preserve-3d';
  	cameraElement.style.MozTransformStyle = 'preserve-3d';
  	cameraElement.style.transformStyle = 'preserve-3d';

  	domElement.appendChild( cameraElement);

  	var isIE = 1;///Trident/i.test( navigator.userAgent);

  	this.setClearColor = function () {};

  	this.getSize = function () {

  		return {
  			width: _width,
  			height: _height
  		};

  	};

  	this.setSize = function(width, height) {

  		_width = width;
  		_height = height;
  		_widthHalf = _width / 2;
  		_heightHalf = _height / 2;

  		domElement.style.width = width + 'px';
  		domElement.style.height = height + 'px';

  		cameraElement.style.width = width + 'px';
  		cameraElement.style.height = height + 'px';

  	};

  	function epsilon( value) {
      let r;
      //r=Math.abs( value) < 1e-6 ? 0 : value;
      r=Math.round((value + Number.EPSILON) * 1e5) / 1e5;
  		return r;

  	}

  	function getCameraCSSMatrix( matrix) {

  		var elements = matrix.elements;
  		return 'matrix3d(' + [
  			epsilon( elements[ 0 ]),
  			epsilon( - elements[ 1 ]),
  			epsilon( elements[ 2 ]),
  			epsilon( elements[ 3 ]),
  			epsilon( elements[ 4 ]),
  			epsilon( - elements[ 5 ]),
  			epsilon( elements[ 6 ]),
  			epsilon( elements[ 7 ]),
  			epsilon( elements[ 8 ]),
  			epsilon( - elements[ 9 ]),
  			epsilon( elements[ 10 ]),
  			epsilon( elements[ 11 ]),
  			epsilon( elements[ 12 ]),
  			epsilon( - elements[ 13 ]),
  			epsilon( elements[ 14 ]),
  			epsilon( elements[ 15 ])
      ].join(',') +')';

  	}

  	function getObjectCSSMatrix( matrix, cameraCSSMatrix) {

  		var elements = matrix.elements;
  		var matrix3d = 'matrix3d(' + [
  			epsilon( elements[ 0 ]),
  			epsilon( elements[ 1 ]),
  			epsilon( elements[ 2 ]),
  			epsilon( elements[ 3 ]),
  			epsilon( - elements[ 4 ]),
  			epsilon( - elements[ 5 ]),
  			epsilon( - elements[ 6 ]),
  			epsilon( - elements[ 7 ]),
  			epsilon( elements[ 8 ]),
  			epsilon( elements[ 9 ]),
  			epsilon( elements[ 10 ]),
  			epsilon( elements[ 11 ]),
  			epsilon( elements[ 12 ]),
  			epsilon( elements[ 13 ]),
  			epsilon( elements[ 14 ]),
  			epsilon( elements[ 15 ])
  		].join(',') +')';

  		if(isIE) {

  			return 'translate(-50%,-50%)' +
  				'translate(' + _widthHalf + 'px,' + _heightHalf + 'px)' +
  				cameraCSSMatrix +
  				matrix3d;

  		}

  		return 'translate(-50%,-50%)' + matrix3d;

  	}

  	function renderObject( object, camera, cameraCSSMatrix) {

  		if(object instanceof THREE.CSS3DObject) {

  			var style;

  			if(object instanceof THREE.CSS3DSprite) {
  				matrix.copy( camera.matrixWorldInverse);
  				matrix.transpose();
  				matrix.copyPosition( object.matrixWorld);
  				matrix.scale( object.scale);

  				matrix.elements[ 3 ] = 0;
  				matrix.elements[ 7 ] = 0;
  				matrix.elements[ 11 ] = 0;
  				matrix.elements[ 15 ] = 1;

  				style = getObjectCSSMatrix( matrix, cameraCSSMatrix);

  			} else {

  				style = getObjectCSSMatrix( object.matrixWorld, cameraCSSMatrix);

  			}

  			var element = object.element;
  			var cachedStyle = cache.objects[ object.id ] && cache.objects[ object.id ].style;

  			if(cachedStyle === undefined || cachedStyle !== style) {
  				element.style.WebkitTransform = style;
  				element.style.MozTransform = style;
  				element.style.transform = style;

  				cache.objects[ object.id ] = { style: style };
  				if(isIE) {
  					cache.objects[ object.id ].distanceToCameraSquared = getDistanceToSquared( camera, object);
  				}
  			}

  			if(element.parentNode !== cameraElement) {
  				cameraElement.appendChild( element);
  			}
  		}

  		for(var i = 0, l = object.children.length; i < l; i ++) {

  			renderObject( object.children[ i ], camera, cameraCSSMatrix);

  		}

  	}

  	var getDistanceToSquared = function () {

  		var a = new THREE.Vector3();
  		var b = new THREE.Vector3();

  		return function(object1, object2) {

  			a.setFromMatrixPosition( object1.matrixWorld);
  			b.setFromMatrixPosition( object2.matrixWorld);

  			return a.distanceToSquared( b);

  		};

  	}();

  	function zOrder( scene) {

  		var order = Object.keys( cache.objects).sort( function(a, b) {

  			return cache.objects[ a ].distanceToCameraSquared - cache.objects[ b ].distanceToCameraSquared;

  		});
  		var zMax = order.length;

  		scene.traverse( function(object) {

  			var index = order.indexOf( object.id + '');

  			if(index !== - 1) {

  				object.element.style.zIndex = zMax - index;

  			}

  		});

  	}

  	this.render = function(scene, camera) {

  		var fov = camera.projectionMatrix.elements[ 5 ] * _heightHalf;

  		if(cache.camera.fov !== fov) {

  			domElement.style.WebkitPerspective = fov + 'px';
  			domElement.style.MozPerspective = fov + 'px';
  			domElement.style.perspective = fov + 'px';

  			cache.camera.fov = fov;

  		}

  		scene.updateMatrixWorld();

  		if(camera.parent === null) camera.updateMatrixWorld();

  		var cameraCSSMatrix = 'translateZ(' + fov + 'px)' +
  			getCameraCSSMatrix( camera.matrixWorldInverse);

  		var style = cameraCSSMatrix +
  			'translate(' + _widthHalf + 'px,' + _heightHalf + 'px)';

  		if(cache.camera.style !== style && ! isIE) {

  			cameraElement.style.WebkitTransform = style;
  			cameraElement.style.MozTransform = style;
  			cameraElement.style.transform = style;

  			cache.camera.style = style;

  		}

  		renderObject( scene, camera, cameraCSSMatrix);

  		if(isIE) {

  			// IE10 and 11 does not support 'preserve-3d'.
  			// Thus, z-order in 3D will not work.
  			// We have to calc z-order manually and set CSS z-index for IE.
  			// FYI: z-index can't handle object intersection
  			zOrder( scene);

  		}

  	};
  }
};

export default THREE.CSS3DRenderer;

const _CSS3DObject = THREE.CSS3DObject, _CSS3DSprite = THREE.CSS3DSprite;
export {
  _CSS3DObject as CSS3DObject,
  _CSS3DSprite as CSS3DSprite
};
