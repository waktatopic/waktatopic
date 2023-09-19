if (!Array.prototype.fill) {
  Array.prototype.fill = function(value) {

    // Шаги 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);

    // Шаги 3-5.
    var len = O.length >>> 0;

    // Шаги 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0;

    // Шаг 8.
    var k = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Шаги 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ?
      len : end >> 0;

    // Шаг 11.
    var final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Шаг 12.
    while (k < final) {
      O[k] = value;
      k++;
    }

    // Шаг 13.
    return O;
  };
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     'use strict';
     if (this == null) {
       throw new TypeError('Array.prototype.find called on null or undefined');
     }
     if (typeof predicate !== 'function') {
       throw new TypeError('predicate must be a function');
     }
     var list = Object(this);
     var length = list.length >>> 0;
     var thisArg = arguments[1];
     var value;

     for (var i = 0; i < length; i++) {
       value = list[i];
       if (predicate.call(thisArg, value, i, list)) {
         return value;
       }
     }
     return undefined;
    }
  });
}

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

if (!Object.values) {
	Object.values = function values(O) {
		return Object.keys(O).map((name)=>O[name]) || [];
	};
}

if(!RegExp.escape) {
  RegExp.escape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  };
}

if(!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(search, replace) {
    return this.replace(new RegExp(RegExp.escape(search), 'g'), replace);
  };
}

if(!String.prototype.fb3dQFilter) {
  String.prototype.fb3dQFilter = function() {
    return this.replace(/(\n|\t|  )/g, '');
  };
}
