/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
!(function webpackUniversalModuleDefinition(t, r) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = r())
		: "function" == typeof define && define.amd
		? define("pdfjs-dist/build/pdf", [], r)
		: "object" == typeof exports
		? (exports["pdfjs-dist/build/pdf"] = r())
		: (t["pdfjs-dist/build/pdf"] = t.pdfjsLib = r());
})(this, function () {
	return (function (t) {
		var r = {};
		function __w_pdfjs_require__(a) {
			if (r[a]) return r[a].exports;
			var o = (r[a] = { i: a, l: !1, exports: {} });
			return t[a].call(o.exports, o, o.exports, __w_pdfjs_require__), (o.l = !0), o.exports;
		}
		return (
			(__w_pdfjs_require__.m = t),
			(__w_pdfjs_require__.c = r),
			(__w_pdfjs_require__.d = function (t, r, a) {
				__w_pdfjs_require__.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: a });
			}),
			(__w_pdfjs_require__.r = function (t) {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(t, "__esModule", { value: !0 });
			}),
			(__w_pdfjs_require__.t = function (t, r) {
				if ((1 & r && (t = __w_pdfjs_require__(t)), 8 & r)) return t;
				if (4 & r && "object" == typeof t && t && t.__esModule) return t;
				var a = Object.create(null);
				if (
					(__w_pdfjs_require__.r(a),
					Object.defineProperty(a, "default", { enumerable: !0, value: t }),
					2 & r && "string" != typeof t)
				)
					for (var o in t)
						__w_pdfjs_require__.d(
							a,
							o,
							function (r) {
								return t[r];
							}.bind(null, o)
						);
				return a;
			}),
			(__w_pdfjs_require__.n = function (t) {
				var r =
					t && t.__esModule
						? function getDefault() {
								return t.default;
						  }
						: function getModuleExports() {
								return t;
						  };
				return __w_pdfjs_require__.d(r, "a", r), r;
			}),
			(__w_pdfjs_require__.o = function (t, r) {
				return Object.prototype.hasOwnProperty.call(t, r);
			}),
			(__w_pdfjs_require__.p = ""),
			__w_pdfjs_require__((__w_pdfjs_require__.s = 0))
		);
	})([
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }),
				Object.defineProperty(r, "addLinkAttributes", {
					enumerable: !0,
					get: function get() {
						return o.addLinkAttributes;
					},
				}),
				Object.defineProperty(r, "getFilenameFromUrl", {
					enumerable: !0,
					get: function get() {
						return o.getFilenameFromUrl;
					},
				}),
				Object.defineProperty(r, "LinkTarget", {
					enumerable: !0,
					get: function get() {
						return o.LinkTarget;
					},
				}),
				Object.defineProperty(r, "loadScript", {
					enumerable: !0,
					get: function get() {
						return o.loadScript;
					},
				}),
				Object.defineProperty(r, "PDFDateString", {
					enumerable: !0,
					get: function get() {
						return o.PDFDateString;
					},
				}),
				Object.defineProperty(r, "RenderingCancelledException", {
					enumerable: !0,
					get: function get() {
						return o.RenderingCancelledException;
					},
				}),
				Object.defineProperty(r, "build", {
					enumerable: !0,
					get: function get() {
						return i.build;
					},
				}),
				Object.defineProperty(r, "getDocument", {
					enumerable: !0,
					get: function get() {
						return i.getDocument;
					},
				}),
				Object.defineProperty(r, "LoopbackPort", {
					enumerable: !0,
					get: function get() {
						return i.LoopbackPort;
					},
				}),
				Object.defineProperty(r, "PDFDataRangeTransport", {
					enumerable: !0,
					get: function get() {
						return i.PDFDataRangeTransport;
					},
				}),
				Object.defineProperty(r, "PDFWorker", {
					enumerable: !0,
					get: function get() {
						return i.PDFWorker;
					},
				}),
				Object.defineProperty(r, "version", {
					enumerable: !0,
					get: function get() {
						return i.version;
					},
				}),
				Object.defineProperty(r, "CMapCompressionType", {
					enumerable: !0,
					get: function get() {
						return l.CMapCompressionType;
					},
				}),
				Object.defineProperty(r, "createObjectURL", {
					enumerable: !0,
					get: function get() {
						return l.createObjectURL;
					},
				}),
				Object.defineProperty(r, "createPromiseCapability", {
					enumerable: !0,
					get: function get() {
						return l.createPromiseCapability;
					},
				}),
				Object.defineProperty(r, "createValidAbsoluteUrl", {
					enumerable: !0,
					get: function get() {
						return l.createValidAbsoluteUrl;
					},
				}),
				Object.defineProperty(r, "InvalidPDFException", {
					enumerable: !0,
					get: function get() {
						return l.InvalidPDFException;
					},
				}),
				Object.defineProperty(r, "MissingPDFException", {
					enumerable: !0,
					get: function get() {
						return l.MissingPDFException;
					},
				}),
				Object.defineProperty(r, "OPS", {
					enumerable: !0,
					get: function get() {
						return l.OPS;
					},
				}),
				Object.defineProperty(r, "PasswordResponses", {
					enumerable: !0,
					get: function get() {
						return l.PasswordResponses;
					},
				}),
				Object.defineProperty(r, "PermissionFlag", {
					enumerable: !0,
					get: function get() {
						return l.PermissionFlag;
					},
				}),
				Object.defineProperty(r, "removeNullCharacters", {
					enumerable: !0,
					get: function get() {
						return l.removeNullCharacters;
					},
				}),
				Object.defineProperty(r, "shadow", {
					enumerable: !0,
					get: function get() {
						return l.shadow;
					},
				}),
				Object.defineProperty(r, "UnexpectedResponseException", {
					enumerable: !0,
					get: function get() {
						return l.UnexpectedResponseException;
					},
				}),
				Object.defineProperty(r, "UNSUPPORTED_FEATURES", {
					enumerable: !0,
					get: function get() {
						return l.UNSUPPORTED_FEATURES;
					},
				}),
				Object.defineProperty(r, "Util", {
					enumerable: !0,
					get: function get() {
						return l.Util;
					},
				}),
				Object.defineProperty(r, "VerbosityLevel", {
					enumerable: !0,
					get: function get() {
						return l.VerbosityLevel;
					},
				}),
				Object.defineProperty(r, "AnnotationLayer", {
					enumerable: !0,
					get: function get() {
						return u.AnnotationLayer;
					},
				}),
				Object.defineProperty(r, "apiCompatibilityParams", {
					enumerable: !0,
					get: function get() {
						return c.apiCompatibilityParams;
					},
				}),
				Object.defineProperty(r, "GlobalWorkerOptions", {
					enumerable: !0,
					get: function get() {
						return d.GlobalWorkerOptions;
					},
				}),
				Object.defineProperty(r, "renderTextLayer", {
					enumerable: !0,
					get: function get() {
						return h.renderTextLayer;
					},
				}),
				Object.defineProperty(r, "SVGGraphics", {
					enumerable: !0,
					get: function get() {
						return p.SVGGraphics;
					},
				});
			var o = a(1),
				i = a(198),
				l = a(5),
				u = a(209),
				c = a(200),
				d = a(203),
				h = a(210),
				p = a(211);
			if (a(7).isNodeJS) {
				var m = a(212).PDFNodeStream;
				(0, i.setPDFNetworkStreamFactory)(function (t) {
					return new m(t);
				});
			} else {
				var v,
					g = a(215).PDFNetworkStream;
				(0, o.isFetchSupported)() && (v = a(216).PDFFetchStream),
					(0, i.setPDFNetworkStreamFactory)(function (t) {
						return v && (0, o.isValidFetchUrl)(t.url) ? new v(t) : new g(t);
					});
			}
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }),
				(r.addLinkAttributes = function addLinkAttributes(t) {
					var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						a = r.url,
						o = r.target,
						u = r.rel,
						c = r.enabled,
						d = void 0 === c || c;
					(0, i.assert)(
						a && "string" == typeof a,
						'addLinkAttributes: A valid "url" parameter must provided.'
					);
					var h = (0, i.removeNullCharacters)(a);
					d
						? (t.href = t.title = h)
						: ((t.href = ""),
						  (t.title = "Disabled: ".concat(h)),
						  (t.onclick = function () {
								return !1;
						  }));
					var p = "";
					switch (o) {
						case v.NONE:
							break;
						case v.SELF:
							p = "_self";
							break;
						case v.BLANK:
							p = "_blank";
							break;
						case v.PARENT:
							p = "_parent";
							break;
						case v.TOP:
							p = "_top";
					}
					(t.target = p), (t.rel = "string" == typeof u ? u : l);
				}),
				(r.getFilenameFromUrl = function getFilenameFromUrl(t) {
					var r = t.indexOf("#"),
						a = t.indexOf("?"),
						o = Math.min(r > 0 ? r : t.length, a > 0 ? a : t.length);
					return t.substring(t.lastIndexOf("/", o) + 1, o);
				}),
				(r.isFetchSupported = isFetchSupported),
				(r.isValidFetchUrl = isValidFetchUrl),
				(r.loadScript = function loadScript(t) {
					return new Promise(function (r, a) {
						var o = document.createElement("script");
						(o.src = t),
							(o.onload = r),
							(o.onerror = function () {
								a(new Error("Cannot load script at: ".concat(o.src)));
							}),
							(document.head || document.documentElement).appendChild(o);
					});
				}),
				(r.deprecated = function deprecated(t) {
					console.log("Deprecated API usage: " + t);
				}),
				(r.PDFDateString =
					r.StatTimer =
					r.DOMSVGFactory =
					r.DOMCMapReaderFactory =
					r.DOMCanvasFactory =
					r.DEFAULT_LINK_REL =
					r.LinkTarget =
					r.RenderingCancelledException =
					r.PageViewport =
						void 0);
			var o = (function _interopRequireDefault(t) {
					return t && t.__esModule ? t : { default: t };
				})(a(2)),
				i = a(5);
			function _createForOfIteratorHelper(t, r) {
				var a;
				if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
					if (
						Array.isArray(t) ||
						(a = (function _unsupportedIterableToArray(t, r) {
							if (!t) return;
							if ("string" == typeof t) return _arrayLikeToArray(t, r);
							var a = Object.prototype.toString.call(t).slice(8, -1);
							"Object" === a && t.constructor && (a = t.constructor.name);
							if ("Map" === a || "Set" === a) return Array.from(t);
							if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
								return _arrayLikeToArray(t, r);
						})(t)) ||
						(r && t && "number" == typeof t.length)
					) {
						a && (t = a);
						var o = 0,
							i = function F() {};
						return {
							s: i,
							n: function n() {
								return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
							},
							e: function e(t) {
								throw t;
							},
							f: i,
						};
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				}
				var l,
					u = !0,
					c = !1;
				return {
					s: function s() {
						a = t[Symbol.iterator]();
					},
					n: function n() {
						var t = a.next();
						return (u = t.done), t;
					},
					e: function e(t) {
						(c = !0), (l = t);
					},
					f: function f() {
						try {
							u || null == a.return || a.return();
						} finally {
							if (c) throw l;
						}
					},
				};
			}
			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o;
			}
			function _typeof(t) {
				return (_typeof =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function _typeof(t) {
								return typeof t;
						  }
						: function _typeof(t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  })(t);
			}
			function _setPrototypeOf(t, r) {
				return (_setPrototypeOf =
					Object.setPrototypeOf ||
					function _setPrototypeOf(t, r) {
						return (t.__proto__ = r), t;
					})(t, r);
			}
			function _createSuper(t) {
				var r = (function _isNativeReflectConstruct() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
					} catch (t) {
						return !1;
					}
				})();
				return function _createSuperInternal() {
					var a,
						o = _getPrototypeOf(t);
					if (r) {
						var i = _getPrototypeOf(this).constructor;
						a = Reflect.construct(o, arguments, i);
					} else a = o.apply(this, arguments);
					return _possibleConstructorReturn(this, a);
				};
			}
			function _possibleConstructorReturn(t, r) {
				return !r || ("object" !== _typeof(r) && "function" != typeof r)
					? (function _assertThisInitialized(t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: r;
			}
			function _getPrototypeOf(t) {
				return (_getPrototypeOf = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function _getPrototypeOf(t) {
							return t.__proto__ || Object.getPrototypeOf(t);
					  })(t);
			}
			function asyncGeneratorStep(t, r, a, o, i, l, u) {
				try {
					var c = t[l](u),
						d = c.value;
				} catch (t) {
					return void a(t);
				}
				c.done ? r(d) : Promise.resolve(d).then(o, i);
			}
			function _asyncToGenerator(t) {
				return function () {
					var r = this,
						a = arguments;
					return new Promise(function (o, i) {
						var l = t.apply(r, a);
						function _next(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "next", t);
						}
						function _throw(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "throw", t);
						}
						_next(void 0);
					});
				};
			}
			function _classCallCheck(t, r) {
				if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _createClass(t, r, a) {
				return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
			}
			var l = "noopener noreferrer nofollow";
			r.DEFAULT_LINK_REL = l;
			var u = "http://www.w3.org/2000/svg",
				c = (function () {
					function DOMCanvasFactory() {
						_classCallCheck(this, DOMCanvasFactory);
					}
					return (
						_createClass(DOMCanvasFactory, [
							{
								key: "create",
								value: function create(t, r) {
									if (t <= 0 || r <= 0) throw new Error("Invalid canvas size");
									var a = document.createElement("canvas"),
										o = a.getContext("2d", { willReadFrequently: !0 });
									return (a.width = t), (a.height = r), { canvas: a, context: o };
								},
							},
							{
								key: "reset",
								value: function reset(t, r, a) {
									if (!t.canvas) throw new Error("Canvas is not specified");
									if (r <= 0 || a <= 0) throw new Error("Invalid canvas size");
									(t.canvas.width = r), (t.canvas.height = a);
								},
							},
							{
								key: "destroy",
								value: function destroy(t) {
									if (!t.canvas) throw new Error("Canvas is not specified");
									(t.canvas.width = 0), (t.canvas.height = 0), (t.canvas = null), (t.context = null);
								},
							},
						]),
						DOMCanvasFactory
					);
				})();
			r.DOMCanvasFactory = c;
			var d = (function () {
				function DOMCMapReaderFactory(t) {
					var r = t.baseUrl,
						a = void 0 === r ? null : r,
						o = t.isCompressed,
						i = void 0 !== o && o;
					_classCallCheck(this, DOMCMapReaderFactory), (this.baseUrl = a), (this.isCompressed = i);
				}
				return (
					_createClass(DOMCMapReaderFactory, [
						{
							key: "fetch",
							value: (function (t) {
								function fetch(r) {
									return t.apply(this, arguments);
								}
								return (
									(fetch.toString = function () {
										return t.toString();
									}),
									fetch
								);
							})(
								(function () {
									var t = _asyncToGenerator(
										o.default.mark(function _callee2(t) {
											var r,
												a,
												l,
												u = this;
											return o.default.wrap(
												function _callee2$(c) {
													for (;;)
														switch ((c.prev = c.next)) {
															case 0:
																if (((r = t.name), this.baseUrl)) {
																	c.next = 3;
																	break;
																}
																throw new Error(
																	'The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'
																);
															case 3:
																if (r) {
																	c.next = 5;
																	break;
																}
																throw new Error("CMap name must be specified.");
															case 5:
																if (
																	((a =
																		this.baseUrl +
																		r +
																		(this.isCompressed ? ".bcmap" : "")),
																	(l = this.isCompressed
																		? i.CMapCompressionType.BINARY
																		: i.CMapCompressionType.NONE),
																	!isFetchSupported() ||
																		!isValidFetchUrl(a, document.baseURI))
																) {
																	c.next = 9;
																	break;
																}
																return c.abrupt(
																	"return",
																	fetch(a)
																		.then(
																			(function () {
																				var t = _asyncToGenerator(
																					o.default.mark(function _callee(t) {
																						var r;
																						return o.default.wrap(
																							function _callee$(a) {
																								for (;;)
																									switch (
																										(a.prev =
																											a.next)
																									) {
																										case 0:
																											if (t.ok) {
																												a.next = 2;
																												break;
																											}
																											throw new Error(
																												t.statusText
																											);
																										case 2:
																											if (
																												!u.isCompressed
																											) {
																												a.next = 10;
																												break;
																											}
																											return (
																												(a.t0 =
																													Uint8Array),
																												(a.next = 6),
																												t.arrayBuffer()
																											);
																										case 6:
																											(a.t1 =
																												a.sent),
																												(r =
																													new a.t0(
																														a.t1
																													)),
																												(a.next = 15);
																											break;
																										case 10:
																											return (
																												(a.t2 =
																													i.stringToBytes),
																												(a.next = 13),
																												t.text()
																											);
																										case 13:
																											(a.t3 =
																												a.sent),
																												(r = (0,
																												a.t2)(
																													a.t3
																												));
																										case 15:
																											return a.abrupt(
																												"return",
																												{
																													cMapData:
																														r,
																													compressionType:
																														l,
																												}
																											);
																										case 16:
																										case "end":
																											return a.stop();
																									}
																							},
																							_callee
																						);
																					})
																				);
																				return function (r) {
																					return t.apply(this, arguments);
																				};
																			})()
																		)
																		.catch(function (t) {
																			throw new Error(
																				"Unable to load ".concat(
																					u.isCompressed ? "binary " : ""
																				) + "CMap at: ".concat(a)
																			);
																		})
																);
															case 9:
																return c.abrupt(
																	"return",
																	new Promise(function (t, r) {
																		var o = new XMLHttpRequest();
																		o.open("GET", a, !0),
																			u.isCompressed &&
																				(o.responseType = "arraybuffer"),
																			(o.onreadystatechange = function () {
																				if (
																					o.readyState === XMLHttpRequest.DONE
																				) {
																					var a;
																					if (
																						200 === o.status ||
																						0 === o.status
																					)
																						if (
																							(u.isCompressed &&
																							o.response
																								? (a = new Uint8Array(
																										o.response
																								  ))
																								: !u.isCompressed &&
																								  o.responseText &&
																								  (a = (0,
																								  i.stringToBytes)(
																										o.responseText
																								  )),
																							a)
																						)
																							return void t({
																								cMapData: a,
																								compressionType: l,
																							});
																					r(new Error(o.statusText));
																				}
																			}),
																			o.send(null);
																	}).catch(function (t) {
																		throw new Error(
																			"Unable to load ".concat(
																				u.isCompressed ? "binary " : ""
																			) + "CMap at: ".concat(a)
																		);
																	})
																);
															case 10:
															case "end":
																return c.stop();
														}
												},
												_callee2,
												this
											);
										})
									);
									return function (r) {
										return t.apply(this, arguments);
									};
								})()
							),
						},
					]),
					DOMCMapReaderFactory
				);
			})();
			r.DOMCMapReaderFactory = d;
			var h = (function () {
				function DOMSVGFactory() {
					_classCallCheck(this, DOMSVGFactory);
				}
				return (
					_createClass(DOMSVGFactory, [
						{
							key: "create",
							value: function create(t, r) {
								(0, i.assert)(t > 0 && r > 0, "Invalid SVG dimensions");
								var a = document.createElementNS(u, "svg:svg");
								return (
									a.setAttribute("version", "1.1"),
									a.setAttribute("width", t + "px"),
									a.setAttribute("height", r + "px"),
									a.setAttribute("preserveAspectRatio", "none"),
									a.setAttribute("viewBox", "0 0 " + t + " " + r),
									a
								);
							},
						},
						{
							key: "createElement",
							value: function createElement(t) {
								return (
									(0, i.assert)("string" == typeof t, "Invalid SVG element type"),
									document.createElementNS(u, t)
								);
							},
						},
					]),
					DOMSVGFactory
				);
			})();
			r.DOMSVGFactory = h;
			var p = (function () {
				function PageViewport(t) {
					var r = t.viewBox,
						a = t.scale,
						o = t.rotation,
						i = t.offsetX,
						l = void 0 === i ? 0 : i,
						u = t.offsetY,
						c = void 0 === u ? 0 : u,
						d = t.dontFlip,
						h = void 0 !== d && d;
					_classCallCheck(this, PageViewport),
						(this.viewBox = r),
						(this.scale = a),
						(this.rotation = o),
						(this.offsetX = l),
						(this.offsetY = c);
					var p,
						m,
						v,
						g,
						y,
						b,
						_,
						S,
						A = (r[2] + r[0]) / 2,
						C = (r[3] + r[1]) / 2;
					switch ((o = (o %= 360) < 0 ? o + 360 : o)) {
						case 180:
							(p = -1), (m = 0), (v = 0), (g = 1);
							break;
						case 90:
							(p = 0), (m = 1), (v = 1), (g = 0);
							break;
						case 270:
							(p = 0), (m = -1), (v = -1), (g = 0);
							break;
						case 0:
							(p = 1), (m = 0), (v = 0), (g = -1);
							break;
						default:
							throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
					}
					h && ((v = -v), (g = -g)),
						0 === p
							? ((y = Math.abs(C - r[1]) * a + l),
							  (b = Math.abs(A - r[0]) * a + c),
							  (_ = Math.abs(r[3] - r[1]) * a),
							  (S = Math.abs(r[2] - r[0]) * a))
							: ((y = Math.abs(A - r[0]) * a + l),
							  (b = Math.abs(C - r[1]) * a + c),
							  (_ = Math.abs(r[2] - r[0]) * a),
							  (S = Math.abs(r[3] - r[1]) * a)),
						(this.transform = [
							p * a,
							m * a,
							v * a,
							g * a,
							y - p * a * A - v * a * C,
							b - m * a * A - g * a * C,
						]),
						(this.width = _),
						(this.height = S);
				}
				return (
					_createClass(PageViewport, [
						{
							key: "clone",
							value: function clone() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									r = t.scale,
									a = void 0 === r ? this.scale : r,
									o = t.rotation,
									i = void 0 === o ? this.rotation : o,
									l = t.offsetX,
									u = void 0 === l ? this.offsetX : l,
									c = t.offsetY,
									d = void 0 === c ? this.offsetY : c,
									h = t.dontFlip,
									p = void 0 !== h && h;
								return new PageViewport({
									viewBox: this.viewBox.slice(),
									scale: a,
									rotation: i,
									offsetX: u,
									offsetY: d,
									dontFlip: p,
								});
							},
						},
						{
							key: "convertToViewportPoint",
							value: function convertToViewportPoint(t, r) {
								return i.Util.applyTransform([t, r], this.transform);
							},
						},
						{
							key: "convertToViewportRectangle",
							value: function convertToViewportRectangle(t) {
								var r = i.Util.applyTransform([t[0], t[1]], this.transform),
									a = i.Util.applyTransform([t[2], t[3]], this.transform);
								return [r[0], r[1], a[0], a[1]];
							},
						},
						{
							key: "convertToPdfPoint",
							value: function convertToPdfPoint(t, r) {
								return i.Util.applyInverseTransform([t, r], this.transform);
							},
						},
					]),
					PageViewport
				);
			})();
			r.PageViewport = p;
			var m = (function (t) {
				!(function _inherits(t, r) {
					if ("function" != typeof r && null !== r)
						throw new TypeError("Super expression must either be null or a function");
					(t.prototype = Object.create(r && r.prototype, {
						constructor: { value: t, writable: !0, configurable: !0 },
					})),
						r && _setPrototypeOf(t, r);
				})(RenderingCancelledException, t);
				var r = _createSuper(RenderingCancelledException);
				function RenderingCancelledException(t, a) {
					var o;
					return _classCallCheck(this, RenderingCancelledException), ((o = r.call(this, t)).type = a), o;
				}
				return RenderingCancelledException;
			})(i.BaseException);
			r.RenderingCancelledException = m;
			var v = { NONE: 0, SELF: 1, BLANK: 2, PARENT: 3, TOP: 4 };
			r.LinkTarget = v;
			var g,
				y = (function () {
					function StatTimer() {
						_classCallCheck(this, StatTimer), (this.started = Object.create(null)), (this.times = []);
					}
					return (
						_createClass(StatTimer, [
							{
								key: "time",
								value: function time(t) {
									t in this.started && (0, i.warn)("Timer is already running for ".concat(t)),
										(this.started[t] = Date.now());
								},
							},
							{
								key: "timeEnd",
								value: function timeEnd(t) {
									t in this.started || (0, i.warn)("Timer has not been started for ".concat(t)),
										this.times.push({ name: t, start: this.started[t], end: Date.now() }),
										delete this.started[t];
								},
							},
							{
								key: "toString",
								value: function toString() {
									var t,
										r = [],
										a = 0,
										o = _createForOfIteratorHelper(this.times);
									try {
										for (o.s(); !(t = o.n()).done; ) {
											var i = t.value.name;
											i.length > a && (a = i.length);
										}
									} catch (t) {
										o.e(t);
									} finally {
										o.f();
									}
									var l,
										u = _createForOfIteratorHelper(this.times);
									try {
										for (u.s(); !(l = u.n()).done; ) {
											var c = l.value,
												d = c.end - c.start;
											r.push("".concat(c.name.padEnd(a), " ").concat(d, "ms\n"));
										}
									} catch (t) {
										u.e(t);
									} finally {
										u.f();
									}
									return r.join("");
								},
							},
						]),
						StatTimer
					);
				})();
			function isFetchSupported() {
				return (
					"undefined" != typeof fetch &&
					"undefined" != typeof Response &&
					"body" in Response.prototype &&
					"undefined" != typeof ReadableStream
				);
			}
			function isValidFetchUrl(t, r) {
				try {
					var a = (r ? new URL(t, r) : new URL(t)).protocol;
					return "http:" === a || "https:" === a;
				} catch (t) {
					return !1;
				}
			}
			r.StatTimer = y;
			var b = (function () {
				function PDFDateString() {
					_classCallCheck(this, PDFDateString);
				}
				return (
					_createClass(PDFDateString, null, [
						{
							key: "toDateObject",
							value: function toDateObject(t) {
								if (!t || !(0, i.isString)(t)) return null;
								g ||
									(g = new RegExp(
										"^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"
									));
								var r = g.exec(t);
								if (!r) return null;
								var a = parseInt(r[1], 10),
									o = parseInt(r[2], 10);
								o = o >= 1 && o <= 12 ? o - 1 : 0;
								var l = parseInt(r[3], 10);
								l = l >= 1 && l <= 31 ? l : 1;
								var u = parseInt(r[4], 10);
								u = u >= 0 && u <= 23 ? u : 0;
								var c = parseInt(r[5], 10);
								c = c >= 0 && c <= 59 ? c : 0;
								var d = parseInt(r[6], 10);
								d = d >= 0 && d <= 59 ? d : 0;
								var h = r[7] || "Z",
									p = parseInt(r[8], 10);
								p = p >= 0 && p <= 23 ? p : 0;
								var m = parseInt(r[9], 10) || 0;
								return (
									(m = m >= 0 && m <= 59 ? m : 0),
									"-" === h ? ((u += p), (c += m)) : "+" === h && ((u -= p), (c -= m)),
									new Date(Date.UTC(a, o, l, u, c, d))
								);
							},
						},
					]),
					PDFDateString
				);
			})();
			r.PDFDateString = b;
		},
		function (t, r, a) {
			"use strict";
			t.exports = a(3);
		},
		function (t, r, a) {
			"use strict";
			(function (t) {
				function _typeof(t) {
					return (_typeof =
						"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
							? function _typeof(t) {
									return typeof t;
							  }
							: function _typeof(t) {
									return t &&
										"function" == typeof Symbol &&
										t.constructor === Symbol &&
										t !== Symbol.prototype
										? "symbol"
										: typeof t;
							  })(t);
				}
				var r = (function (t) {
					var r,
						a = Object.prototype,
						o = a.hasOwnProperty,
						i = "function" == typeof Symbol ? Symbol : {},
						l = i.iterator || "@@iterator",
						u = i.asyncIterator || "@@asyncIterator",
						c = i.toStringTag || "@@toStringTag";
					function wrap(t, r, a, o) {
						var i = r && r.prototype instanceof Generator ? r : Generator,
							l = Object.create(i.prototype),
							u = new Context(o || []);
						return (
							(l._invoke = (function makeInvokeMethod(t, r, a) {
								var o = d;
								return function invoke(i, l) {
									if (o === p) throw new Error("Generator is already running");
									if (o === m) {
										if ("throw" === i) throw l;
										return doneResult();
									}
									for (a.method = i, a.arg = l; ; ) {
										var u = a.delegate;
										if (u) {
											var c = maybeInvokeDelegate(u, a);
											if (c) {
												if (c === v) continue;
												return c;
											}
										}
										if ("next" === a.method) a.sent = a._sent = a.arg;
										else if ("throw" === a.method) {
											if (o === d) throw ((o = m), a.arg);
											a.dispatchException(a.arg);
										} else "return" === a.method && a.abrupt("return", a.arg);
										o = p;
										var g = tryCatch(t, r, a);
										if ("normal" === g.type) {
											if (((o = a.done ? m : h), g.arg === v)) continue;
											return { value: g.arg, done: a.done };
										}
										"throw" === g.type && ((o = m), (a.method = "throw"), (a.arg = g.arg));
									}
								};
							})(t, a, u)),
							l
						);
					}
					function tryCatch(t, r, a) {
						try {
							return { type: "normal", arg: t.call(r, a) };
						} catch (t) {
							return { type: "throw", arg: t };
						}
					}
					t.wrap = wrap;
					var d = "suspendedStart",
						h = "suspendedYield",
						p = "executing",
						m = "completed",
						v = {};
					function Generator() {}
					function GeneratorFunction() {}
					function GeneratorFunctionPrototype() {}
					var g = {};
					g[l] = function () {
						return this;
					};
					var y = Object.getPrototypeOf,
						b = y && y(y(values([])));
					b && b !== a && o.call(b, l) && (g = b);
					var _ = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(g));
					function defineIteratorMethods(t) {
						["next", "throw", "return"].forEach(function (r) {
							t[r] = function (t) {
								return this._invoke(r, t);
							};
						});
					}
					function AsyncIterator(t, r) {
						function invoke(a, i, l, u) {
							var c = tryCatch(t[a], t, i);
							if ("throw" !== c.type) {
								var d = c.arg,
									h = d.value;
								return h && "object" === _typeof(h) && o.call(h, "__await")
									? r.resolve(h.__await).then(
											function (t) {
												invoke("next", t, l, u);
											},
											function (t) {
												invoke("throw", t, l, u);
											}
									  )
									: r.resolve(h).then(
											function (t) {
												(d.value = t), l(d);
											},
											function (t) {
												return invoke("throw", t, l, u);
											}
									  );
							}
							u(c.arg);
						}
						var a;
						this._invoke = function enqueue(t, o) {
							function callInvokeWithMethodAndArg() {
								return new r(function (r, a) {
									invoke(t, o, r, a);
								});
							}
							return (a = a
								? a.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
								: callInvokeWithMethodAndArg());
						};
					}
					function maybeInvokeDelegate(t, a) {
						var o = t.iterator[a.method];
						if (o === r) {
							if (((a.delegate = null), "throw" === a.method)) {
								if (
									t.iterator.return &&
									((a.method = "return"),
									(a.arg = r),
									maybeInvokeDelegate(t, a),
									"throw" === a.method)
								)
									return v;
								(a.method = "throw"),
									(a.arg = new TypeError("The iterator does not provide a 'throw' method"));
							}
							return v;
						}
						var i = tryCatch(o, t.iterator, a.arg);
						if ("throw" === i.type) return (a.method = "throw"), (a.arg = i.arg), (a.delegate = null), v;
						var l = i.arg;
						return l
							? l.done
								? ((a[t.resultName] = l.value),
								  (a.next = t.nextLoc),
								  "return" !== a.method && ((a.method = "next"), (a.arg = r)),
								  (a.delegate = null),
								  v)
								: l
							: ((a.method = "throw"),
							  (a.arg = new TypeError("iterator result is not an object")),
							  (a.delegate = null),
							  v);
					}
					function pushTryEntry(t) {
						var r = { tryLoc: t[0] };
						1 in t && (r.catchLoc = t[1]),
							2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
							this.tryEntries.push(r);
					}
					function resetTryEntry(t) {
						var r = t.completion || {};
						(r.type = "normal"), delete r.arg, (t.completion = r);
					}
					function Context(t) {
						(this.tryEntries = [{ tryLoc: "root" }]), t.forEach(pushTryEntry, this), this.reset(!0);
					}
					function values(t) {
						if (t) {
							var a = t[l];
							if (a) return a.call(t);
							if ("function" == typeof t.next) return t;
							if (!isNaN(t.length)) {
								var i = -1,
									u = function next() {
										for (; ++i < t.length; )
											if (o.call(t, i)) return (next.value = t[i]), (next.done = !1), next;
										return (next.value = r), (next.done = !0), next;
									};
								return (u.next = u);
							}
						}
						return { next: doneResult };
					}
					function doneResult() {
						return { value: r, done: !0 };
					}
					return (
						(GeneratorFunction.prototype = _.constructor = GeneratorFunctionPrototype),
						(GeneratorFunctionPrototype.constructor = GeneratorFunction),
						(GeneratorFunctionPrototype[c] = GeneratorFunction.displayName = "GeneratorFunction"),
						(t.isGeneratorFunction = function (t) {
							var r = "function" == typeof t && t.constructor;
							return (
								!!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name))
							);
						}),
						(t.mark = function (t) {
							return (
								Object.setPrototypeOf
									? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
									: ((t.__proto__ = GeneratorFunctionPrototype),
									  c in t || (t[c] = "GeneratorFunction")),
								(t.prototype = Object.create(_)),
								t
							);
						}),
						(t.awrap = function (t) {
							return { __await: t };
						}),
						defineIteratorMethods(AsyncIterator.prototype),
						(AsyncIterator.prototype[u] = function () {
							return this;
						}),
						(t.AsyncIterator = AsyncIterator),
						(t.async = function (r, a, o, i, l) {
							void 0 === l && (l = Promise);
							var u = new AsyncIterator(wrap(r, a, o, i), l);
							return t.isGeneratorFunction(a)
								? u
								: u.next().then(function (t) {
										return t.done ? t.value : u.next();
								  });
						}),
						defineIteratorMethods(_),
						(_[c] = "Generator"),
						(_[l] = function () {
							return this;
						}),
						(_.toString = function () {
							return "[object Generator]";
						}),
						(t.keys = function (t) {
							var r = [];
							for (var a in t) r.push(a);
							return (
								r.reverse(),
								function next() {
									for (; r.length; ) {
										var a = r.pop();
										if (a in t) return (next.value = a), (next.done = !1), next;
									}
									return (next.done = !0), next;
								}
							);
						}),
						(t.values = values),
						(Context.prototype = {
							constructor: Context,
							reset: function reset(t) {
								if (
									((this.prev = 0),
									(this.next = 0),
									(this.sent = this._sent = r),
									(this.done = !1),
									(this.delegate = null),
									(this.method = "next"),
									(this.arg = r),
									this.tryEntries.forEach(resetTryEntry),
									!t)
								)
									for (var a in this)
										"t" === a.charAt(0) && o.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = r);
							},
							stop: function stop() {
								this.done = !0;
								var t = this.tryEntries[0].completion;
								if ("throw" === t.type) throw t.arg;
								return this.rval;
							},
							dispatchException: function dispatchException(t) {
								if (this.done) throw t;
								var a = this;
								function handle(o, i) {
									return (
										(u.type = "throw"),
										(u.arg = t),
										(a.next = o),
										i && ((a.method = "next"), (a.arg = r)),
										!!i
									);
								}
								for (var i = this.tryEntries.length - 1; i >= 0; --i) {
									var l = this.tryEntries[i],
										u = l.completion;
									if ("root" === l.tryLoc) return handle("end");
									if (l.tryLoc <= this.prev) {
										var c = o.call(l, "catchLoc"),
											d = o.call(l, "finallyLoc");
										if (c && d) {
											if (this.prev < l.catchLoc) return handle(l.catchLoc, !0);
											if (this.prev < l.finallyLoc) return handle(l.finallyLoc);
										} else if (c) {
											if (this.prev < l.catchLoc) return handle(l.catchLoc, !0);
										} else {
											if (!d) throw new Error("try statement without catch or finally");
											if (this.prev < l.finallyLoc) return handle(l.finallyLoc);
										}
									}
								}
							},
							abrupt: function abrupt(t, r) {
								for (var a = this.tryEntries.length - 1; a >= 0; --a) {
									var i = this.tryEntries[a];
									if (i.tryLoc <= this.prev && o.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
										var l = i;
										break;
									}
								}
								l &&
									("break" === t || "continue" === t) &&
									l.tryLoc <= r &&
									r <= l.finallyLoc &&
									(l = null);
								var u = l ? l.completion : {};
								return (
									(u.type = t),
									(u.arg = r),
									l ? ((this.method = "next"), (this.next = l.finallyLoc), v) : this.complete(u)
								);
							},
							complete: function complete(t, r) {
								if ("throw" === t.type) throw t.arg;
								return (
									"break" === t.type || "continue" === t.type
										? (this.next = t.arg)
										: "return" === t.type
										? ((this.rval = this.arg = t.arg),
										  (this.method = "return"),
										  (this.next = "end"))
										: "normal" === t.type && r && (this.next = r),
									v
								);
							},
							finish: function finish(t) {
								for (var r = this.tryEntries.length - 1; r >= 0; --r) {
									var a = this.tryEntries[r];
									if (a.finallyLoc === t)
										return this.complete(a.completion, a.afterLoc), resetTryEntry(a), v;
								}
							},
							catch: function _catch(t) {
								for (var r = this.tryEntries.length - 1; r >= 0; --r) {
									var a = this.tryEntries[r];
									if (a.tryLoc === t) {
										var o = a.completion;
										if ("throw" === o.type) {
											var i = o.arg;
											resetTryEntry(a);
										}
										return i;
									}
								}
								throw new Error("illegal catch attempt");
							},
							delegateYield: function delegateYield(t, a, o) {
								return (
									(this.delegate = { iterator: values(t), resultName: a, nextLoc: o }),
									"next" === this.method && (this.arg = r),
									v
								);
							},
						}),
						t
					);
				})("object" === _typeof(t) ? t.exports : {});
				try {
					regeneratorRuntime = r;
				} catch (t) {
					Function("r", "regeneratorRuntime = r")(r);
				}
			}).call(this, a(4)(t));
		},
		function (t, r, a) {
			"use strict";
			t.exports = function (t) {
				return (
					t.webpackPolyfill ||
						((t.deprecate = function () {}),
						(t.paths = []),
						t.children || (t.children = []),
						Object.defineProperty(t, "loaded", {
							enumerable: !0,
							get: function get() {
								return t.l;
							},
						}),
						Object.defineProperty(t, "id", {
							enumerable: !0,
							get: function get() {
								return t.i;
							},
						}),
						(t.webpackPolyfill = 1)),
					t
				);
			};
		},
		function (t, r, a) {
			"use strict";
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _typeof(t) {
				return (_typeof =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function _typeof(t) {
								return typeof t;
						  }
						: function _typeof(t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  })(t);
			}
			function _classCallCheck(t, r) {
				if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
			}
			function _inherits(t, r) {
				if ("function" != typeof r && null !== r)
					throw new TypeError("Super expression must either be null or a function");
				(t.prototype = Object.create(r && r.prototype, {
					constructor: { value: t, writable: !0, configurable: !0 },
				})),
					r && _setPrototypeOf(t, r);
			}
			function _setPrototypeOf(t, r) {
				return (_setPrototypeOf =
					Object.setPrototypeOf ||
					function _setPrototypeOf(t, r) {
						return (t.__proto__ = r), t;
					})(t, r);
			}
			function _createSuper(t) {
				var r = (function _isNativeReflectConstruct() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
					} catch (t) {
						return !1;
					}
				})();
				return function _createSuperInternal() {
					var a,
						o = _getPrototypeOf(t);
					if (r) {
						var i = _getPrototypeOf(this).constructor;
						a = Reflect.construct(o, arguments, i);
					} else a = o.apply(this, arguments);
					return _possibleConstructorReturn(this, a);
				};
			}
			function _possibleConstructorReturn(t, r) {
				return !r || ("object" !== _typeof(r) && "function" != typeof r)
					? (function _assertThisInitialized(t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: r;
			}
			function _getPrototypeOf(t) {
				return (_getPrototypeOf = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function _getPrototypeOf(t) {
							return t.__proto__ || Object.getPrototypeOf(t);
					  })(t);
			}
			Object.defineProperty(r, "__esModule", { value: !0 }),
				(r.arrayByteLength = arrayByteLength),
				(r.arraysToBytes = function arraysToBytes(t) {
					var r = t.length;
					if (1 === r && t[0] instanceof Uint8Array) return t[0];
					for (var a = 0, o = 0; o < r; o++) a += arrayByteLength(t[o]);
					for (var i = 0, l = new Uint8Array(a), u = 0; u < r; u++) {
						var c = t[u];
						c instanceof Uint8Array || (c = "string" == typeof c ? stringToBytes(c) : new Uint8Array(c));
						var d = c.byteLength;
						l.set(c, i), (i += d);
					}
					return l;
				}),
				(r.assert = assert),
				(r.bytesToString = function bytesToString(t) {
					assert(
						null !== t && "object" === _typeof(t) && void 0 !== t.length,
						"Invalid argument for bytesToString"
					);
					var r = t.length,
						a = 8192;
					if (r < a) return String.fromCharCode.apply(null, t);
					for (var o = [], i = 0; i < r; i += a) {
						var l = Math.min(i + a, r),
							u = t.subarray(i, l);
						o.push(String.fromCharCode.apply(null, u));
					}
					return o.join("");
				}),
				(r.createPromiseCapability = function createPromiseCapability() {
					var t = Object.create(null),
						r = !1;
					return (
						Object.defineProperty(t, "settled", {
							get: function get() {
								return r;
							},
						}),
						(t.promise = new Promise(function (a, o) {
							(t.resolve = function (t) {
								(r = !0), a(t);
							}),
								(t.reject = function (t) {
									(r = !0), o(t);
								});
						})),
						t
					);
				}),
				(r.getVerbosityLevel = function getVerbosityLevel() {
					return i;
				}),
				(r.info = function info(t) {
					i >= o.INFOS && console.log("Info: ".concat(t));
				}),
				(r.isArrayBuffer = function isArrayBuffer(t) {
					return "object" === _typeof(t) && null !== t && void 0 !== t.byteLength;
				}),
				(r.isArrayEqual = function isArrayEqual(t, r) {
					if (t.length !== r.length) return !1;
					return t.every(function (t, a) {
						return t === r[a];
					});
				}),
				(r.isBool = function isBool(t) {
					return "boolean" == typeof t;
				}),
				(r.isEmptyObj = function isEmptyObj(t) {
					for (var r in t) return !1;
					return !0;
				}),
				(r.isNum = function isNum(t) {
					return "number" == typeof t;
				}),
				(r.isString = function isString(t) {
					return "string" == typeof t;
				}),
				(r.isSameOrigin = function isSameOrigin(t, r) {
					var a;
					try {
						if (!(a = new URL(t)).origin || "null" === a.origin) return !1;
					} catch (t) {
						return !1;
					}
					var o = new URL(r, a);
					return a.origin === o.origin;
				}),
				(r.createValidAbsoluteUrl = function createValidAbsoluteUrl(t, r) {
					if (!t) return null;
					try {
						var a = r ? new URL(t, r) : new URL(t);
						if (
							(function _isValidProtocol(t) {
								if (!t) return !1;
								switch (t.protocol) {
									case "http:":
									case "https:":
									case "ftp:":
									case "mailto:":
									case "tel:":
										return !0;
									default:
										return !1;
								}
							})(a)
						)
							return a;
					} catch (t) {}
					return null;
				}),
				(r.removeNullCharacters = function removeNullCharacters(t) {
					if ("string" != typeof t) return warn("The argument for removeNullCharacters must be a string."), t;
					return t.replace(g, "");
				}),
				(r.setVerbosityLevel = function setVerbosityLevel(t) {
					Number.isInteger(t) && (i = t);
				}),
				(r.shadow = shadow),
				(r.string32 = function string32(t) {
					return String.fromCharCode((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, 255 & t);
				}),
				(r.stringToBytes = stringToBytes),
				(r.stringToPDFString = function stringToPDFString(t) {
					var r = t.length,
						a = [];
					if ("þ" === t[0] && "ÿ" === t[1])
						for (var o = 2; o < r; o += 2)
							a.push(String.fromCharCode((t.charCodeAt(o) << 8) | t.charCodeAt(o + 1)));
					else if ("ÿ" === t[0] && "þ" === t[1])
						for (var i = 2; i < r; i += 2)
							a.push(String.fromCharCode((t.charCodeAt(i + 1) << 8) | t.charCodeAt(i)));
					else
						for (var l = 0; l < r; ++l) {
							var u = A[t.charCodeAt(l)];
							a.push(u ? String.fromCharCode(u) : t.charAt(l));
						}
					return a.join("");
				}),
				(r.stringToUTF8String = function stringToUTF8String(t) {
					return decodeURIComponent(escape(t));
				}),
				(r.utf8StringToString = function utf8StringToString(t) {
					return unescape(encodeURIComponent(t));
				}),
				(r.warn = warn),
				(r.unreachable = unreachable),
				(r.IsEvalSupportedCached =
					r.IsLittleEndianCached =
					r.createObjectURL =
					r.FormatError =
					r.Util =
					r.UnknownErrorException =
					r.UnexpectedResponseException =
					r.TextRenderingMode =
					r.StreamType =
					r.PermissionFlag =
					r.PasswordResponses =
					r.PasswordException =
					r.MissingPDFException =
					r.InvalidPDFException =
					r.AbortException =
					r.CMapCompressionType =
					r.ImageKind =
					r.FontType =
					r.AnnotationType =
					r.AnnotationStateModelType =
					r.AnnotationReviewState =
					r.AnnotationReplyType =
					r.AnnotationMarkedState =
					r.AnnotationFlag =
					r.AnnotationFieldFlag =
					r.AnnotationBorderStyleType =
					r.UNSUPPORTED_FEATURES =
					r.VerbosityLevel =
					r.OPS =
					r.IDENTITY_MATRIX =
					r.FONT_IDENTITY_MATRIX =
					r.BaseException =
						void 0),
				a(6);
			r.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
			r.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
			r.PermissionFlag = {
				PRINT: 4,
				MODIFY_CONTENTS: 8,
				COPY: 16,
				MODIFY_ANNOTATIONS: 32,
				FILL_INTERACTIVE_FORMS: 256,
				COPY_FOR_ACCESSIBILITY: 512,
				ASSEMBLE: 1024,
				PRINT_HIGH_QUALITY: 2048,
			};
			r.TextRenderingMode = {
				FILL: 0,
				STROKE: 1,
				FILL_STROKE: 2,
				INVISIBLE: 3,
				FILL_ADD_TO_PATH: 4,
				STROKE_ADD_TO_PATH: 5,
				FILL_STROKE_ADD_TO_PATH: 6,
				ADD_TO_PATH: 7,
				FILL_STROKE_MASK: 3,
				ADD_TO_PATH_FLAG: 4,
			};
			r.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 };
			r.AnnotationType = {
				TEXT: 1,
				LINK: 2,
				FREETEXT: 3,
				LINE: 4,
				SQUARE: 5,
				CIRCLE: 6,
				POLYGON: 7,
				POLYLINE: 8,
				HIGHLIGHT: 9,
				UNDERLINE: 10,
				SQUIGGLY: 11,
				STRIKEOUT: 12,
				STAMP: 13,
				CARET: 14,
				INK: 15,
				POPUP: 16,
				FILEATTACHMENT: 17,
				SOUND: 18,
				MOVIE: 19,
				WIDGET: 20,
				SCREEN: 21,
				PRINTERMARK: 22,
				TRAPNET: 23,
				WATERMARK: 24,
				THREED: 25,
				REDACT: 26,
			};
			r.AnnotationStateModelType = { MARKED: "Marked", REVIEW: "Review" };
			r.AnnotationMarkedState = { MARKED: "Marked", UNMARKED: "Unmarked" };
			r.AnnotationReviewState = {
				ACCEPTED: "Accepted",
				REJECTED: "Rejected",
				CANCELLED: "Cancelled",
				COMPLETED: "Completed",
				NONE: "None",
			};
			r.AnnotationReplyType = { GROUP: "Group", REPLY: "R" };
			r.AnnotationFlag = {
				INVISIBLE: 1,
				HIDDEN: 2,
				PRINT: 4,
				NOZOOM: 8,
				NOROTATE: 16,
				NOVIEW: 32,
				READONLY: 64,
				LOCKED: 128,
				TOGGLENOVIEW: 256,
				LOCKEDCONTENTS: 512,
			};
			r.AnnotationFieldFlag = {
				READONLY: 1,
				REQUIRED: 2,
				NOEXPORT: 4,
				MULTILINE: 4096,
				PASSWORD: 8192,
				NOTOGGLETOOFF: 16384,
				RADIO: 32768,
				PUSHBUTTON: 65536,
				COMBO: 131072,
				EDIT: 262144,
				SORT: 524288,
				FILESELECT: 1048576,
				MULTISELECT: 2097152,
				DONOTSPELLCHECK: 4194304,
				DONOTSCROLL: 8388608,
				COMB: 16777216,
				RICHTEXT: 33554432,
				RADIOSINUNISON: 33554432,
				COMMITONSELCHANGE: 67108864,
			};
			r.AnnotationBorderStyleType = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 };
			r.StreamType = {
				UNKNOWN: "UNKNOWN",
				FLATE: "FLATE",
				LZW: "LZW",
				DCT: "DCT",
				JPX: "JPX",
				JBIG: "JBIG",
				A85: "A85",
				AHX: "AHX",
				CCF: "CCF",
				RLX: "RLX",
			};
			r.FontType = {
				UNKNOWN: "UNKNOWN",
				TYPE1: "TYPE1",
				TYPE1C: "TYPE1C",
				CIDFONTTYPE0: "CIDFONTTYPE0",
				CIDFONTTYPE0C: "CIDFONTTYPE0C",
				TRUETYPE: "TRUETYPE",
				CIDFONTTYPE2: "CIDFONTTYPE2",
				TYPE3: "TYPE3",
				OPENTYPE: "OPENTYPE",
				TYPE0: "TYPE0",
				MMTYPE1: "MMTYPE1",
			};
			var o = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
			r.VerbosityLevel = o;
			r.CMapCompressionType = { NONE: 0, BINARY: 1, STREAM: 2 };
			r.OPS = {
				dependency: 1,
				setLineWidth: 2,
				setLineCap: 3,
				setLineJoin: 4,
				setMiterLimit: 5,
				setDash: 6,
				setRenderingIntent: 7,
				setFlatness: 8,
				setGState: 9,
				save: 10,
				restore: 11,
				transform: 12,
				moveTo: 13,
				lineTo: 14,
				curveTo: 15,
				curveTo2: 16,
				curveTo3: 17,
				closePath: 18,
				rectangle: 19,
				stroke: 20,
				closeStroke: 21,
				fill: 22,
				eoFill: 23,
				fillStroke: 24,
				eoFillStroke: 25,
				closeFillStroke: 26,
				closeEOFillStroke: 27,
				endPath: 28,
				clip: 29,
				eoClip: 30,
				beginText: 31,
				endText: 32,
				setCharSpacing: 33,
				setWordSpacing: 34,
				setHScale: 35,
				setLeading: 36,
				setFont: 37,
				setTextRenderingMode: 38,
				setTextRise: 39,
				moveText: 40,
				setLeadingMoveText: 41,
				setTextMatrix: 42,
				nextLine: 43,
				showText: 44,
				showSpacedText: 45,
				nextLineShowText: 46,
				nextLineSetSpacingShowText: 47,
				setCharWidth: 48,
				setCharWidthAndBounds: 49,
				setStrokeColorSpace: 50,
				setFillColorSpace: 51,
				setStrokeColor: 52,
				setStrokeColorN: 53,
				setFillColor: 54,
				setFillColorN: 55,
				setStrokeGray: 56,
				setFillGray: 57,
				setStrokeRGBColor: 58,
				setFillRGBColor: 59,
				setStrokeCMYKColor: 60,
				setFillCMYKColor: 61,
				shadingFill: 62,
				beginInlineImage: 63,
				beginImageData: 64,
				endInlineImage: 65,
				paintXObject: 66,
				markPoint: 67,
				markPointProps: 68,
				beginMarkedContent: 69,
				beginMarkedContentProps: 70,
				endMarkedContent: 71,
				beginCompat: 72,
				endCompat: 73,
				paintFormXObjectBegin: 74,
				paintFormXObjectEnd: 75,
				beginGroup: 76,
				endGroup: 77,
				beginAnnotations: 78,
				endAnnotations: 79,
				beginAnnotation: 80,
				endAnnotation: 81,
				paintJpegXObject: 82,
				paintImageMaskXObject: 83,
				paintImageMaskXObjectGroup: 84,
				paintImageXObject: 85,
				paintInlineImageXObject: 86,
				paintInlineImageXObjectGroup: 87,
				paintImageXObjectRepeat: 88,
				paintImageMaskXObjectRepeat: 89,
				paintSolidColorImageMask: 90,
				constructPath: 91,
			};
			r.UNSUPPORTED_FEATURES = {
				unknown: "unknown",
				forms: "forms",
				javaScript: "javaScript",
				smask: "smask",
				shadingPattern: "shadingPattern",
				font: "font",
				errorTilingPattern: "errorTilingPattern",
				errorExtGState: "errorExtGState",
				errorXObject: "errorXObject",
				errorFontLoadType3: "errorFontLoadType3",
				errorFontState: "errorFontState",
				errorFontMissing: "errorFontMissing",
				errorFontTranslate: "errorFontTranslate",
				errorColorSpace: "errorColorSpace",
				errorOperatorList: "errorOperatorList",
				errorFontToUnicode: "errorFontToUnicode",
				errorFontLoadNative: "errorFontLoadNative",
				errorFontGetPath: "errorFontGetPath",
			};
			r.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
			var i = o.WARNINGS;
			function warn(t) {
				i >= o.WARNINGS && console.log("Warning: ".concat(t));
			}
			function unreachable(t) {
				throw new Error(t);
			}
			function assert(t, r) {
				t || unreachable(r);
			}
			function shadow(t, r, a) {
				return Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !1 }), a;
			}
			var l = (function BaseExceptionClosure() {
				function BaseException(t) {
					this.constructor === BaseException && unreachable("Cannot initialize BaseException."),
						(this.message = t),
						(this.name = this.constructor.name);
				}
				return (
					(BaseException.prototype = new Error()), (BaseException.constructor = BaseException), BaseException
				);
			})();
			r.BaseException = l;
			var u = (function (t) {
				_inherits(PasswordException, t);
				var r = _createSuper(PasswordException);
				function PasswordException(t, a) {
					var o;
					return _classCallCheck(this, PasswordException), ((o = r.call(this, t)).code = a), o;
				}
				return PasswordException;
			})(l);
			r.PasswordException = u;
			var c = (function (t) {
				_inherits(UnknownErrorException, t);
				var r = _createSuper(UnknownErrorException);
				function UnknownErrorException(t, a) {
					var o;
					return _classCallCheck(this, UnknownErrorException), ((o = r.call(this, t)).details = a), o;
				}
				return UnknownErrorException;
			})(l);
			r.UnknownErrorException = c;
			var d = (function (t) {
				_inherits(InvalidPDFException, t);
				var r = _createSuper(InvalidPDFException);
				function InvalidPDFException() {
					return _classCallCheck(this, InvalidPDFException), r.apply(this, arguments);
				}
				return InvalidPDFException;
			})(l);
			r.InvalidPDFException = d;
			var h = (function (t) {
				_inherits(MissingPDFException, t);
				var r = _createSuper(MissingPDFException);
				function MissingPDFException() {
					return _classCallCheck(this, MissingPDFException), r.apply(this, arguments);
				}
				return MissingPDFException;
			})(l);
			r.MissingPDFException = h;
			var p = (function (t) {
				_inherits(UnexpectedResponseException, t);
				var r = _createSuper(UnexpectedResponseException);
				function UnexpectedResponseException(t, a) {
					var o;
					return _classCallCheck(this, UnexpectedResponseException), ((o = r.call(this, t)).status = a), o;
				}
				return UnexpectedResponseException;
			})(l);
			r.UnexpectedResponseException = p;
			var m = (function (t) {
				_inherits(FormatError, t);
				var r = _createSuper(FormatError);
				function FormatError() {
					return _classCallCheck(this, FormatError), r.apply(this, arguments);
				}
				return FormatError;
			})(l);
			r.FormatError = m;
			var v = (function (t) {
				_inherits(AbortException, t);
				var r = _createSuper(AbortException);
				function AbortException() {
					return _classCallCheck(this, AbortException), r.apply(this, arguments);
				}
				return AbortException;
			})(l);
			r.AbortException = v;
			var g = /\x00/g;
			function stringToBytes(t) {
				assert("string" == typeof t, "Invalid argument for stringToBytes");
				for (var r = t.length, a = new Uint8Array(r), o = 0; o < r; ++o) a[o] = 255 & t.charCodeAt(o);
				return a;
			}
			function arrayByteLength(t) {
				return void 0 !== t.length
					? t.length
					: (assert(void 0 !== t.byteLength, "arrayByteLength - invalid argument."), t.byteLength);
			}
			var y = {
				get value() {
					return shadow(
						this,
						"value",
						(function isLittleEndian() {
							var t = new Uint8Array(4);
							return (t[0] = 1), 1 === new Uint32Array(t.buffer, 0, 1)[0];
						})()
					);
				},
			};
			r.IsLittleEndianCached = y;
			var b = {
				get value() {
					return shadow(
						this,
						"value",
						(function isEvalSupported() {
							try {
								return new Function(""), !0;
							} catch (t) {
								return !1;
							}
						})()
					);
				},
			};
			r.IsEvalSupportedCached = b;
			var _ = ["rgb(", 0, ",", 0, ",", 0, ")"],
				S = (function () {
					function Util() {
						_classCallCheck(this, Util);
					}
					return (
						(function _createClass(t, r, a) {
							return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
						})(Util, null, [
							{
								key: "makeCssRgb",
								value: function makeCssRgb(t, r, a) {
									return (_[1] = t), (_[3] = r), (_[5] = a), _.join("");
								},
							},
							{
								key: "transform",
								value: function transform(t, r) {
									return [
										t[0] * r[0] + t[2] * r[1],
										t[1] * r[0] + t[3] * r[1],
										t[0] * r[2] + t[2] * r[3],
										t[1] * r[2] + t[3] * r[3],
										t[0] * r[4] + t[2] * r[5] + t[4],
										t[1] * r[4] + t[3] * r[5] + t[5],
									];
								},
							},
							{
								key: "applyTransform",
								value: function applyTransform(t, r) {
									return [t[0] * r[0] + t[1] * r[2] + r[4], t[0] * r[1] + t[1] * r[3] + r[5]];
								},
							},
							{
								key: "applyInverseTransform",
								value: function applyInverseTransform(t, r) {
									var a = r[0] * r[3] - r[1] * r[2];
									return [
										(t[0] * r[3] - t[1] * r[2] + r[2] * r[5] - r[4] * r[3]) / a,
										(-t[0] * r[1] + t[1] * r[0] + r[4] * r[1] - r[5] * r[0]) / a,
									];
								},
							},
							{
								key: "getAxialAlignedBoundingBox",
								value: function getAxialAlignedBoundingBox(t, r) {
									var a = Util.applyTransform(t, r),
										o = Util.applyTransform(t.slice(2, 4), r),
										i = Util.applyTransform([t[0], t[3]], r),
										l = Util.applyTransform([t[2], t[1]], r);
									return [
										Math.min(a[0], o[0], i[0], l[0]),
										Math.min(a[1], o[1], i[1], l[1]),
										Math.max(a[0], o[0], i[0], l[0]),
										Math.max(a[1], o[1], i[1], l[1]),
									];
								},
							},
							{
								key: "inverseTransform",
								value: function inverseTransform(t) {
									var r = t[0] * t[3] - t[1] * t[2];
									return [
										t[3] / r,
										-t[1] / r,
										-t[2] / r,
										t[0] / r,
										(t[2] * t[5] - t[4] * t[3]) / r,
										(t[4] * t[1] - t[5] * t[0]) / r,
									];
								},
							},
							{
								key: "apply3dTransform",
								value: function apply3dTransform(t, r) {
									return [
										t[0] * r[0] + t[1] * r[1] + t[2] * r[2],
										t[3] * r[0] + t[4] * r[1] + t[5] * r[2],
										t[6] * r[0] + t[7] * r[1] + t[8] * r[2],
									];
								},
							},
							{
								key: "singularValueDecompose2dScale",
								value: function singularValueDecompose2dScale(t) {
									var r = [t[0], t[2], t[1], t[3]],
										a = t[0] * r[0] + t[1] * r[2],
										o = t[0] * r[1] + t[1] * r[3],
										i = t[2] * r[0] + t[3] * r[2],
										l = t[2] * r[1] + t[3] * r[3],
										u = (a + l) / 2,
										c = Math.sqrt((a + l) * (a + l) - 4 * (a * l - i * o)) / 2,
										d = u + c || 1,
										h = u - c || 1;
									return [Math.sqrt(d), Math.sqrt(h)];
								},
							},
							{
								key: "normalizeRect",
								value: function normalizeRect(t) {
									var r = t.slice(0);
									return (
										t[0] > t[2] && ((r[0] = t[2]), (r[2] = t[0])),
										t[1] > t[3] && ((r[1] = t[3]), (r[3] = t[1])),
										r
									);
								},
							},
							{
								key: "intersect",
								value: function intersect(t, r) {
									function compare(t, r) {
										return t - r;
									}
									var a = [t[0], t[2], r[0], r[2]].sort(compare),
										o = [t[1], t[3], r[1], r[3]].sort(compare),
										i = [];
									return (
										(t = Util.normalizeRect(t)),
										(r = Util.normalizeRect(r)),
										(a[0] === t[0] && a[1] === r[0]) || (a[0] === r[0] && a[1] === t[0])
											? ((i[0] = a[1]),
											  (i[2] = a[2]),
											  (o[0] === t[1] && o[1] === r[1]) || (o[0] === r[1] && o[1] === t[1])
													? ((i[1] = o[1]), (i[3] = o[2]), i)
													: null)
											: null
									);
								},
							},
						]),
						Util
					);
				})();
			r.Util = S;
			var A = [
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731,
				730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224,
				8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482,
				64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364,
			];
			var C = (function createObjectURLClosure() {
				var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				return function createObjectURL(r, a) {
					var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					if (!o && URL.createObjectURL) {
						var i = new Blob([r], { type: a });
						return URL.createObjectURL(i);
					}
					for (var l = "data:".concat(a, ";base64,"), u = 0, c = r.length; u < c; u += 3) {
						var d = 255 & r[u],
							h = 255 & r[u + 1],
							p = 255 & r[u + 2],
							m = d >> 2,
							v = ((3 & d) << 4) | (h >> 4),
							g = u + 1 < c ? ((15 & h) << 2) | (p >> 6) : 64,
							y = u + 2 < c ? 63 & p : 64;
						l += t[m] + t[v] + t[g] + t[y];
					}
					return l;
				};
			})();
			r.createObjectURL = C;
		},
		function (t, r, a) {
			"use strict";
			var o = a(7);
			function _typeof(t) {
				return (_typeof =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function _typeof(t) {
								return typeof t;
						  }
						: function _typeof(t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  })(t);
			}
			if ("undefined" == typeof globalThis || !globalThis._pdfjsCompatibilityChecked) {
				("undefined" != typeof globalThis && globalThis.Math === Math) || (globalThis = a(8)),
					(globalThis._pdfjsCompatibilityChecked = !0);
				var i =
						"object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) &&
						"object" === ("undefined" == typeof document ? "undefined" : _typeof(document)),
					l = ("undefined" != typeof navigator && navigator.userAgent) || "",
					u = /Trident/.test(l);
				!(function checkNodeBtoa() {
					!globalThis.btoa &&
						o.isNodeJS &&
						(globalThis.btoa = function (t) {
							return Buffer.from(t, "binary").toString("base64");
						});
				})(),
					(function checkNodeAtob() {
						!globalThis.atob &&
							o.isNodeJS &&
							(globalThis.atob = function (t) {
								return Buffer.from(t, "base64").toString("binary");
							});
					})(),
					(function checkChildNodeRemove() {
						i &&
							void 0 === Element.prototype.remove &&
							(Element.prototype.remove = function () {
								this.parentNode && this.parentNode.removeChild(this);
							});
					})(),
					(function checkDOMTokenListAddRemove() {
						if (i && !o.isNodeJS) {
							var t = document.createElement("div");
							if (
								(t.classList.add("testOne", "testTwo"),
								!0 !== t.classList.contains("testOne") || !0 !== t.classList.contains("testTwo"))
							) {
								var r = DOMTokenList.prototype.add,
									a = DOMTokenList.prototype.remove;
								(DOMTokenList.prototype.add = function () {
									for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
										a[o] = arguments[o];
									for (var i = 0, l = a; i < l.length; i++) {
										var u = l[i];
										r.call(this, u);
									}
								}),
									(DOMTokenList.prototype.remove = function () {
										for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
											r[o] = arguments[o];
										for (var i = 0, l = r; i < l.length; i++) {
											var u = l[i];
											a.call(this, u);
										}
									});
							}
						}
					})(),
					(function checkDOMTokenListToggle() {
						i &&
							!o.isNodeJS &&
							!1 !== document.createElement("div").classList.toggle("test", 0) &&
							(DOMTokenList.prototype.toggle = function (t) {
								var r = arguments.length > 1 ? !!arguments[1] : !this.contains(t);
								return this[r ? "add" : "remove"](t), r;
							});
					})(),
					(function checkWindowHistoryPushStateReplaceState() {
						if (i && u) {
							var t = window.history.pushState,
								r = window.history.replaceState;
							(window.history.pushState = function (r, a, o) {
								var i = void 0 === o ? [r, a] : [r, a, o];
								t.apply(this, i);
							}),
								(window.history.replaceState = function (t, a, o) {
									var i = void 0 === o ? [t, a] : [t, a, o];
									r.apply(this, i);
								});
						}
					})(),
					(function checkStringStartsWith() {
						String.prototype.startsWith || a(53);
					})(),
					(function checkStringEndsWith() {
						String.prototype.endsWith || a(64);
					})(),
					(function checkStringIncludes() {
						String.prototype.includes || a(66);
					})(),
					(function checkArrayIncludes() {
						Array.prototype.includes || a(68);
					})(),
					(function checkArrayFrom() {
						Array.from || a(76);
					})(),
					(function checkObjectAssign() {
						Object.assign || a(98);
					})(),
					(function checkMathLog2() {
						Math.log2 || (Math.log2 = a(101));
					})(),
					(function checkNumberIsNaN() {
						Number.isNaN || (Number.isNaN = a(103));
					})(),
					(function checkNumberIsInteger() {
						Number.isInteger || (Number.isInteger = a(105));
					})(),
					(function checkTypedArraySlice() {
						Uint8Array.prototype.slice || a(108);
					})(),
					(function checkPromise() {
						(globalThis.Promise && globalThis.Promise.allSettled) || (globalThis.Promise = a(113));
					})(),
					(function checkURL() {
						globalThis.URL = a(136);
					})(),
					(function checkReadableStream() {
						var t = !1;
						if ("undefined" != typeof ReadableStream)
							try {
								new ReadableStream({
									start: function start(t) {
										t.close();
									},
								}),
									(t = !0);
							} catch (t) {}
						t || (globalThis.ReadableStream = a(143).ReadableStream);
					})(),
					(function checkMapEntries() {
						(globalThis.Map && globalThis.Map.prototype.entries) || (globalThis.Map = a(144));
					})(),
					(function checkSetEntries() {
						(globalThis.Set && globalThis.Set.prototype.entries) || (globalThis.Set = a(151));
					})(),
					(function checkWeakMap() {
						globalThis.WeakMap || (globalThis.WeakMap = a(153));
					})(),
					(function checkWeakSet() {
						globalThis.WeakSet || (globalThis.WeakSet = a(159));
					})(),
					(function checkStringCodePointAt() {
						String.prototype.codePointAt || a(161);
					})(),
					(function checkStringFromCodePoint() {
						String.fromCodePoint || (String.fromCodePoint = a(163));
					})(),
					(function checkSymbol() {
						globalThis.Symbol || a(165);
					})(),
					(function checkStringPadStart() {
						String.prototype.padStart || a(188);
					})(),
					(function checkStringPadEnd() {
						String.prototype.padEnd || a(193);
					})(),
					(function checkObjectValues() {
						Object.values || (Object.values = a(195));
					})();
			}
		},
		function (t, r, a) {
			"use strict";
			function _typeof(t) {
				return (_typeof =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function _typeof(t) {
								return typeof t;
						  }
						: function _typeof(t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  })(t);
			}
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.isNodeJS = void 0);
			var o =
				"object" === ("undefined" == typeof process ? "undefined" : _typeof(process)) &&
				process + "" == "[object process]" &&
				!process.versions.nw &&
				!process.versions.electron;
			r.isNodeJS = o;
		},
		function (t, r, a) {
			a(9), (t.exports = a(11));
		},
		function (t, r, a) {
			a(10)({ global: !0 }, { globalThis: a(11) });
		},
		function (t, r, a) {
			var o = a(11),
				i = a(12).f,
				l = a(26),
				u = a(29),
				c = a(30),
				d = a(40),
				h = a(52);
			t.exports = function (t, r) {
				var a,
					p,
					m,
					v,
					g,
					y = t.target,
					b = t.global,
					_ = t.stat;
				if ((a = b ? o : _ ? o[y] || c(y, {}) : (o[y] || {}).prototype))
					for (p in r) {
						if (
							((v = r[p]),
							(m = t.noTargetGet ? (g = i(a, p)) && g.value : a[p]),
							!h(b ? p : y + (_ ? "." : "#") + p, t.forced) && void 0 !== m)
						) {
							if (typeof v == typeof m) continue;
							d(v, m);
						}
						(t.sham || (m && m.sham)) && l(v, "sham", !0), u(a, p, v, t);
					}
			};
		},
		function (t, r) {
			var check = function (t) {
				return t && t.Math == Math && t;
			};
			t.exports =
				check("object" == typeof globalThis && globalThis) ||
				check("object" == typeof window && window) ||
				check("object" == typeof self && self) ||
				check("object" == typeof global && global) ||
				Function("return this")();
		},
		function (t, r, a) {
			var o = a(13),
				i = a(15),
				l = a(16),
				u = a(17),
				c = a(21),
				d = a(23),
				h = a(24),
				p = Object.getOwnPropertyDescriptor;
			r.f = o
				? p
				: function getOwnPropertyDescriptor(t, r) {
						if (((t = u(t)), (r = c(r, !0)), h))
							try {
								return p(t, r);
							} catch (t) {}
						if (d(t, r)) return l(!i.f.call(t, r), t[r]);
				  };
		},
		function (t, r, a) {
			var o = a(14);
			t.exports = !o(function () {
				return (
					7 !=
					Object.defineProperty({}, 1, {
						get: function () {
							return 7;
						},
					})[1]
				);
			});
		},
		function (t, r) {
			t.exports = function (t) {
				try {
					return !!t();
				} catch (t) {
					return !0;
				}
			};
		},
		function (t, r, a) {
			"use strict";
			var o = {}.propertyIsEnumerable,
				i = Object.getOwnPropertyDescriptor,
				l = i && !o.call({ 1: 2 }, 1);
			r.f = l
				? function propertyIsEnumerable(t) {
						var r = i(this, t);
						return !!r && r.enumerable;
				  }
				: o;
		},
		function (t, r) {
			t.exports = function (t, r) {
				return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: r };
			};
		},
		function (t, r, a) {
			var o = a(18),
				i = a(20);
			t.exports = function (t) {
				return o(i(t));
			};
		},
		function (t, r, a) {
			var o = a(14),
				i = a(19),
				l = "".split;
			t.exports = o(function () {
				return !Object("z").propertyIsEnumerable(0);
			})
				? function (t) {
						return "String" == i(t) ? l.call(t, "") : Object(t);
				  }
				: Object;
		},
		function (t, r) {
			var a = {}.toString;
			t.exports = function (t) {
				return a.call(t).slice(8, -1);
			};
		},
		function (t, r) {
			t.exports = function (t) {
				if (null == t) throw TypeError("Can't call method on " + t);
				return t;
			};
		},
		function (t, r, a) {
			var o = a(22);
			t.exports = function (t, r) {
				if (!o(t)) return t;
				var a, i;
				if (r && "function" == typeof (a = t.toString) && !o((i = a.call(t)))) return i;
				if ("function" == typeof (a = t.valueOf) && !o((i = a.call(t)))) return i;
				if (!r && "function" == typeof (a = t.toString) && !o((i = a.call(t)))) return i;
				throw TypeError("Can't convert object to primitive value");
			};
		},
		function (t, r) {
			t.exports = function (t) {
				return "object" == typeof t ? null !== t : "function" == typeof t;
			};
		},
		function (t, r) {
			var a = {}.hasOwnProperty;
			t.exports = function (t, r) {
				return a.call(t, r);
			};
		},
		function (t, r, a) {
			var o = a(13),
				i = a(14),
				l = a(25);
			t.exports =
				!o &&
				!i(function () {
					return (
						7 !=
						Object.defineProperty(l("div"), "a", {
							get: function () {
								return 7;
							},
						}).a
					);
				});
		},
		function (t, r, a) {
			var o = a(11),
				i = a(22),
				l = o.document,
				u = i(l) && i(l.createElement);
			t.exports = function (t) {
				return u ? l.createElement(t) : {};
			};
		},
		function (t, r, a) {
			var o = a(13),
				i = a(27),
				l = a(16);
			t.exports = o
				? function (t, r, a) {
						return i.f(t, r, l(1, a));
				  }
				: function (t, r, a) {
						return (t[r] = a), t;
				  };
		},
		function (t, r, a) {
			var o = a(13),
				i = a(24),
				l = a(28),
				u = a(21),
				c = Object.defineProperty;
			r.f = o
				? c
				: function defineProperty(t, r, a) {
						if ((l(t), (r = u(r, !0)), l(a), i))
							try {
								return c(t, r, a);
							} catch (t) {}
						if ("get" in a || "set" in a) throw TypeError("Accessors not supported");
						return "value" in a && (t[r] = a.value), t;
				  };
		},
		function (t, r, a) {
			var o = a(22);
			t.exports = function (t) {
				if (!o(t)) throw TypeError(String(t) + " is not an object");
				return t;
			};
		},
		function (t, r, a) {
			var o = a(11),
				i = a(26),
				l = a(23),
				u = a(30),
				c = a(31),
				d = a(33),
				h = d.get,
				p = d.enforce,
				m = String(String).split("String");
			(t.exports = function (t, r, a, c) {
				var d = !!c && !!c.unsafe,
					h = !!c && !!c.enumerable,
					v = !!c && !!c.noTargetGet;
				"function" == typeof a &&
					("string" != typeof r || l(a, "name") || i(a, "name", r),
					(p(a).source = m.join("string" == typeof r ? r : ""))),
					t !== o
						? (d ? !v && t[r] && (h = !0) : delete t[r], h ? (t[r] = a) : i(t, r, a))
						: h
						? (t[r] = a)
						: u(r, a);
			})(Function.prototype, "toString", function toString() {
				return ("function" == typeof this && h(this).source) || c(this);
			});
		},
		function (t, r, a) {
			var o = a(11),
				i = a(26);
			t.exports = function (t, r) {
				try {
					i(o, t, r);
				} catch (a) {
					o[t] = r;
				}
				return r;
			};
		},
		function (t, r, a) {
			var o = a(32),
				i = Function.toString;
			"function" != typeof o.inspectSource &&
				(o.inspectSource = function (t) {
					return i.call(t);
				}),
				(t.exports = o.inspectSource);
		},
		function (t, r, a) {
			var o = a(11),
				i = a(30),
				l = "__core-js_shared__",
				u = o[l] || i(l, {});
			t.exports = u;
		},
		function (t, r, a) {
			var o,
				i,
				l,
				u = a(34),
				c = a(11),
				d = a(22),
				h = a(26),
				p = a(23),
				m = a(35),
				v = a(39),
				g = c.WeakMap;
			if (u) {
				var y = new g(),
					b = y.get,
					_ = y.has,
					S = y.set;
				(o = function (t, r) {
					return S.call(y, t, r), r;
				}),
					(i = function (t) {
						return b.call(y, t) || {};
					}),
					(l = function (t) {
						return _.call(y, t);
					});
			} else {
				var A = m("state");
				(v[A] = !0),
					(o = function (t, r) {
						return h(t, A, r), r;
					}),
					(i = function (t) {
						return p(t, A) ? t[A] : {};
					}),
					(l = function (t) {
						return p(t, A);
					});
			}
			t.exports = {
				set: o,
				get: i,
				has: l,
				enforce: function (t) {
					return l(t) ? i(t) : o(t, {});
				},
				getterFor: function (t) {
					return function (r) {
						var a;
						if (!d(r) || (a = i(r)).type !== t)
							throw TypeError("Incompatible receiver, " + t + " required");
						return a;
					};
				},
			};
		},
		function (t, r, a) {
			var o = a(11),
				i = a(31),
				l = o.WeakMap;
			t.exports = "function" == typeof l && /native code/.test(i(l));
		},
		function (t, r, a) {
			var o = a(36),
				i = a(38),
				l = o("keys");
			t.exports = function (t) {
				return l[t] || (l[t] = i(t));
			};
		},
		function (t, r, a) {
			var o = a(37),
				i = a(32);
			(t.exports = function (t, r) {
				return i[t] || (i[t] = void 0 !== r ? r : {});
			})("versions", []).push({
				version: "3.6.5",
				mode: o ? "pure" : "global",
				copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
			});
		},
		function (t, r) {
			t.exports = !1;
		},
		function (t, r) {
			var a = 0,
				o = Math.random();
			t.exports = function (t) {
				return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++a + o).toString(36);
			};
		},
		function (t, r) {
			t.exports = {};
		},
		function (t, r, a) {
			var o = a(23),
				i = a(41),
				l = a(12),
				u = a(27);
			t.exports = function (t, r) {
				for (var a = i(r), c = u.f, d = l.f, h = 0; h < a.length; h++) {
					var p = a[h];
					o(t, p) || c(t, p, d(r, p));
				}
			};
		},
		function (t, r, a) {
			var o = a(42),
				i = a(44),
				l = a(51),
				u = a(28);
			t.exports =
				o("Reflect", "ownKeys") ||
				function ownKeys(t) {
					var r = i.f(u(t)),
						a = l.f;
					return a ? r.concat(a(t)) : r;
				};
		},
		function (t, r, a) {
			var o = a(43),
				i = a(11),
				aFunction = function (t) {
					return "function" == typeof t ? t : void 0;
				};
			t.exports = function (t, r) {
				return arguments.length < 2
					? aFunction(o[t]) || aFunction(i[t])
					: (o[t] && o[t][r]) || (i[t] && i[t][r]);
			};
		},
		function (t, r, a) {
			var o = a(11);
			t.exports = o;
		},
		function (t, r, a) {
			var o = a(45),
				i = a(50).concat("length", "prototype");
			r.f =
				Object.getOwnPropertyNames ||
				function getOwnPropertyNames(t) {
					return o(t, i);
				};
		},
		function (t, r, a) {
			var o = a(23),
				i = a(17),
				l = a(46).indexOf,
				u = a(39);
			t.exports = function (t, r) {
				var a,
					c = i(t),
					d = 0,
					h = [];
				for (a in c) !o(u, a) && o(c, a) && h.push(a);
				for (; r.length > d; ) o(c, (a = r[d++])) && (~l(h, a) || h.push(a));
				return h;
			};
		},
		function (t, r, a) {
			var o = a(17),
				i = a(47),
				l = a(49),
				createMethod = function (t) {
					return function (r, a, u) {
						var c,
							d = o(r),
							h = i(d.length),
							p = l(u, h);
						if (t && a != a) {
							for (; h > p; ) if ((c = d[p++]) != c) return !0;
						} else for (; h > p; p++) if ((t || p in d) && d[p] === a) return t || p || 0;
						return !t && -1;
					};
				};
			t.exports = { includes: createMethod(!0), indexOf: createMethod(!1) };
		},
		function (t, r, a) {
			var o = a(48),
				i = Math.min;
			t.exports = function (t) {
				return t > 0 ? i(o(t), 9007199254740991) : 0;
			};
		},
		function (t, r) {
			var a = Math.ceil,
				o = Math.floor;
			t.exports = function (t) {
				return isNaN((t = +t)) ? 0 : (t > 0 ? o : a)(t);
			};
		},
		function (t, r, a) {
			var o = a(48),
				i = Math.max,
				l = Math.min;
			t.exports = function (t, r) {
				var a = o(t);
				return a < 0 ? i(a + r, 0) : l(a, r);
			};
		},
		function (t, r) {
			t.exports = [
				"constructor",
				"hasOwnProperty",
				"isPrototypeOf",
				"propertyIsEnumerable",
				"toLocaleString",
				"toString",
				"valueOf",
			];
		},
		function (t, r) {
			r.f = Object.getOwnPropertySymbols;
		},
		function (t, r, a) {
			var o = a(14),
				i = /#|\.prototype\./,
				isForced = function (t, r) {
					var a = u[l(t)];
					return a == d || (a != c && ("function" == typeof r ? o(r) : !!r));
				},
				l = (isForced.normalize = function (t) {
					return String(t).replace(i, ".").toLowerCase();
				}),
				u = (isForced.data = {}),
				c = (isForced.NATIVE = "N"),
				d = (isForced.POLYFILL = "P");
			t.exports = isForced;
		},
		function (t, r, a) {
			a(54);
			var o = a(61);
			t.exports = o("String", "startsWith");
		},
		function (t, r, a) {
			"use strict";
			var o,
				i = a(10),
				l = a(12).f,
				u = a(47),
				c = a(55),
				d = a(20),
				h = a(60),
				p = a(37),
				m = "".startsWith,
				v = Math.min,
				g = h("startsWith");
			i(
				{
					target: "String",
					proto: !0,
					forced: !!(p || g || ((o = l(String.prototype, "startsWith")), !o || o.writable)) && !g,
				},
				{
					startsWith: function startsWith(t) {
						var r = String(d(this));
						c(t);
						var a = u(v(arguments.length > 1 ? arguments[1] : void 0, r.length)),
							o = String(t);
						return m ? m.call(r, o, a) : r.slice(a, a + o.length) === o;
					},
				}
			);
		},
		function (t, r, a) {
			var o = a(56);
			t.exports = function (t) {
				if (o(t)) throw TypeError("The method doesn't accept regular expressions");
				return t;
			};
		},
		function (t, r, a) {
			var o = a(22),
				i = a(19),
				l = a(57)("match");
			t.exports = function (t) {
				var r;
				return o(t) && (void 0 !== (r = t[l]) ? !!r : "RegExp" == i(t));
			};
		},
		function (t, r, a) {
			var o = a(11),
				i = a(36),
				l = a(23),
				u = a(38),
				c = a(58),
				d = a(59),
				h = i("wks"),
				p = o.Symbol,
				m = d ? p : (p && p.withoutSetter) || u;
			t.exports = function (t) {
				return l(h, t) || (c && l(p, t) ? (h[t] = p[t]) : (h[t] = m("Symbol." + t))), h[t];
			};
		},
		function (t, r, a) {
			var o = a(14);
			t.exports =
				!!Object.getOwnPropertySymbols &&
				!o(function () {
					return !String(Symbol());
				});
		},
		function (t, r, a) {
			var o = a(58);
			t.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator;
		},
		function (t, r, a) {
			var o = a(57)("match");
			t.exports = function (t) {
				var r = /./;
				try {
					"/./"[t](r);
				} catch (a) {
					try {
						return (r[o] = !1), "/./"[t](r);
					} catch (t) {}
				}
				return !1;
			};
		},
		function (t, r, a) {
			var o = a(11),
				i = a(62),
				l = Function.call;
			t.exports = function (t, r, a) {
				return i(l, o[t].prototype[r], a);
			};
		},
		function (t, r, a) {
			var o = a(63);
			t.exports = function (t, r, a) {
				if ((o(t), void 0 === r)) return t;
				switch (a) {
					case 0:
						return function () {
							return t.call(r);
						};
					case 1:
						return function (a) {
							return t.call(r, a);
						};
					case 2:
						return function (a, o) {
							return t.call(r, a, o);
						};
					case 3:
						return function (a, o, i) {
							return t.call(r, a, o, i);
						};
				}
				return function () {
					return t.apply(r, arguments);
				};
			};
		},
		function (t, r) {
			t.exports = function (t) {
				if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
				return t;
			};
		},
		function (t, r, a) {
			a(65);
			var o = a(61);
			t.exports = o("String", "endsWith");
		},
		function (t, r, a) {
			"use strict";
			var o,
				i = a(10),
				l = a(12).f,
				u = a(47),
				c = a(55),
				d = a(20),
				h = a(60),
				p = a(37),
				m = "".endsWith,
				v = Math.min,
				g = h("endsWith");
			i(
				{
					target: "String",
					proto: !0,
					forced: !!(p || g || ((o = l(String.prototype, "endsWith")), !o || o.writable)) && !g,
				},
				{
					endsWith: function endsWith(t) {
						var r = String(d(this));
						c(t);
						var a = arguments.length > 1 ? arguments[1] : void 0,
							o = u(r.length),
							i = void 0 === a ? o : v(u(a), o),
							l = String(t);
						return m ? m.call(r, l, i) : r.slice(i - l.length, i) === l;
					},
				}
			);
		},
		function (t, r, a) {
			a(67);
			var o = a(61);
			t.exports = o("String", "includes");
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(55),
				l = a(20);
			o(
				{ target: "String", proto: !0, forced: !a(60)("includes") },
				{
					includes: function includes(t) {
						return !!~String(l(this)).indexOf(i(t), arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			);
		},
		function (t, r, a) {
			a(69);
			var o = a(61);
			t.exports = o("Array", "includes");
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(46).includes,
				l = a(70);
			o(
				{ target: "Array", proto: !0, forced: !a(75)("indexOf", { ACCESSORS: !0, 1: 0 }) },
				{
					includes: function includes(t) {
						return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			),
				l("includes");
		},
		function (t, r, a) {
			var o = a(57),
				i = a(71),
				l = a(27),
				u = o("unscopables"),
				c = Array.prototype;
			null == c[u] && l.f(c, u, { configurable: !0, value: i(null) }),
				(t.exports = function (t) {
					c[u][t] = !0;
				});
		},
		function (t, r, a) {
			var o,
				i = a(28),
				l = a(72),
				u = a(50),
				c = a(39),
				d = a(74),
				h = a(25),
				p = a(35),
				m = p("IE_PROTO"),
				EmptyConstructor = function () {},
				scriptTag = function (t) {
					return "<script>" + t + "</" + "script>";
				},
				NullProtoObject = function () {
					try {
						o = document.domain && new ActiveXObject("htmlfile");
					} catch (t) {}
					var t, r;
					NullProtoObject = o
						? (function (t) {
								t.write(scriptTag("")), t.close();
								var r = t.parentWindow.Object;
								return (t = null), r;
						  })(o)
						: (((r = h("iframe")).style.display = "none"),
						  d.appendChild(r),
						  (r.src = String("javascript:")),
						  (t = r.contentWindow.document).open(),
						  t.write(scriptTag("document.F=Object")),
						  t.close(),
						  t.F);
					for (var a = u.length; a--; ) delete NullProtoObject.prototype[u[a]];
					return NullProtoObject();
				};
			(c[m] = !0),
				(t.exports =
					Object.create ||
					function create(t, r) {
						var a;
						return (
							null !== t
								? ((EmptyConstructor.prototype = i(t)),
								  (a = new EmptyConstructor()),
								  (EmptyConstructor.prototype = null),
								  (a[m] = t))
								: (a = NullProtoObject()),
							void 0 === r ? a : l(a, r)
						);
					});
		},
		function (t, r, a) {
			var o = a(13),
				i = a(27),
				l = a(28),
				u = a(73);
			t.exports = o
				? Object.defineProperties
				: function defineProperties(t, r) {
						l(t);
						for (var a, o = u(r), c = o.length, d = 0; c > d; ) i.f(t, (a = o[d++]), r[a]);
						return t;
				  };
		},
		function (t, r, a) {
			var o = a(45),
				i = a(50);
			t.exports =
				Object.keys ||
				function keys(t) {
					return o(t, i);
				};
		},
		function (t, r, a) {
			var o = a(42);
			t.exports = o("document", "documentElement");
		},
		function (t, r, a) {
			var o = a(13),
				i = a(14),
				l = a(23),
				u = Object.defineProperty,
				c = {},
				thrower = function (t) {
					throw t;
				};
			t.exports = function (t, r) {
				if (l(c, t)) return c[t];
				r || (r = {});
				var a = [][t],
					d = !!l(r, "ACCESSORS") && r.ACCESSORS,
					h = l(r, 0) ? r[0] : thrower,
					p = l(r, 1) ? r[1] : void 0;
				return (c[t] =
					!!a &&
					!i(function () {
						if (d && !o) return !0;
						var t = { length: -1 };
						d ? u(t, 1, { enumerable: !0, get: thrower }) : (t[1] = 1), a.call(t, h, p);
					}));
			};
		},
		function (t, r, a) {
			a(77), a(89);
			var o = a(43);
			t.exports = o.Array.from;
		},
		function (t, r, a) {
			"use strict";
			var o = a(78).charAt,
				i = a(33),
				l = a(79),
				u = "String Iterator",
				c = i.set,
				d = i.getterFor(u);
			l(
				String,
				"String",
				function (t) {
					c(this, { type: u, string: String(t), index: 0 });
				},
				function next() {
					var t,
						r = d(this),
						a = r.string,
						i = r.index;
					return i >= a.length
						? { value: void 0, done: !0 }
						: ((t = o(a, i)), (r.index += t.length), { value: t, done: !1 });
				}
			);
		},
		function (t, r, a) {
			var o = a(48),
				i = a(20),
				createMethod = function (t) {
					return function (r, a) {
						var l,
							u,
							c = String(i(r)),
							d = o(a),
							h = c.length;
						return d < 0 || d >= h
							? t
								? ""
								: void 0
							: (l = c.charCodeAt(d)) < 55296 ||
							  l > 56319 ||
							  d + 1 === h ||
							  (u = c.charCodeAt(d + 1)) < 56320 ||
							  u > 57343
							? t
								? c.charAt(d)
								: l
							: t
							? c.slice(d, d + 2)
							: u - 56320 + ((l - 55296) << 10) + 65536;
					};
				};
			t.exports = { codeAt: createMethod(!1), charAt: createMethod(!0) };
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(80),
				l = a(82),
				u = a(87),
				c = a(85),
				d = a(26),
				h = a(29),
				p = a(57),
				m = a(37),
				v = a(86),
				g = a(81),
				y = g.IteratorPrototype,
				b = g.BUGGY_SAFARI_ITERATORS,
				_ = p("iterator"),
				S = "keys",
				A = "values",
				C = "entries",
				returnThis = function () {
					return this;
				};
			t.exports = function (t, r, a, p, g, R, k) {
				i(a, r, p);
				var P,
					w,
					x,
					getIterationMethod = function (t) {
						if (t === g && D) return D;
						if (!b && t in O) return O[t];
						switch (t) {
							case S:
								return function keys() {
									return new a(this, t);
								};
							case A:
								return function values() {
									return new a(this, t);
								};
							case C:
								return function entries() {
									return new a(this, t);
								};
						}
						return function () {
							return new a(this);
						};
					},
					T = r + " Iterator",
					E = !1,
					O = t.prototype,
					I = O[_] || O["@@iterator"] || (g && O[g]),
					D = (!b && I) || getIterationMethod(g),
					L = ("Array" == r && O.entries) || I;
				if (
					(L &&
						((P = l(L.call(new t()))),
						y !== Object.prototype &&
							P.next &&
							(m || l(P) === y || (u ? u(P, y) : "function" != typeof P[_] && d(P, _, returnThis)),
							c(P, T, !0, !0),
							m && (v[T] = returnThis))),
					g == A &&
						I &&
						I.name !== A &&
						((E = !0),
						(D = function values() {
							return I.call(this);
						})),
					(m && !k) || O[_] === D || d(O, _, D),
					(v[r] = D),
					g)
				)
					if (
						((w = {
							values: getIterationMethod(A),
							keys: R ? D : getIterationMethod(S),
							entries: getIterationMethod(C),
						}),
						k)
					)
						for (x in w) (b || E || !(x in O)) && h(O, x, w[x]);
					else o({ target: r, proto: !0, forced: b || E }, w);
				return w;
			};
		},
		function (t, r, a) {
			"use strict";
			var o = a(81).IteratorPrototype,
				i = a(71),
				l = a(16),
				u = a(85),
				c = a(86),
				returnThis = function () {
					return this;
				};
			t.exports = function (t, r, a) {
				var d = r + " Iterator";
				return (t.prototype = i(o, { next: l(1, a) })), u(t, d, !1, !0), (c[d] = returnThis), t;
			};
		},
		function (t, r, a) {
			"use strict";
			var o,
				i,
				l,
				u = a(82),
				c = a(26),
				d = a(23),
				h = a(57),
				p = a(37),
				m = h("iterator"),
				v = !1;
			[].keys && ("next" in (l = [].keys()) ? (i = u(u(l))) !== Object.prototype && (o = i) : (v = !0)),
				null == o && (o = {}),
				p ||
					d(o, m) ||
					c(o, m, function () {
						return this;
					}),
				(t.exports = { IteratorPrototype: o, BUGGY_SAFARI_ITERATORS: v });
		},
		function (t, r, a) {
			var o = a(23),
				i = a(83),
				l = a(35),
				u = a(84),
				c = l("IE_PROTO"),
				d = Object.prototype;
			t.exports = u
				? Object.getPrototypeOf
				: function (t) {
						return (
							(t = i(t)),
							o(t, c)
								? t[c]
								: "function" == typeof t.constructor && t instanceof t.constructor
								? t.constructor.prototype
								: t instanceof Object
								? d
								: null
						);
				  };
		},
		function (t, r, a) {
			var o = a(20);
			t.exports = function (t) {
				return Object(o(t));
			};
		},
		function (t, r, a) {
			var o = a(14);
			t.exports = !o(function () {
				function F() {}
				return (F.prototype.constructor = null), Object.getPrototypeOf(new F()) !== F.prototype;
			});
		},
		function (t, r, a) {
			var o = a(27).f,
				i = a(23),
				l = a(57)("toStringTag");
			t.exports = function (t, r, a) {
				t && !i((t = a ? t : t.prototype), l) && o(t, l, { configurable: !0, value: r });
			};
		},
		function (t, r) {
			t.exports = {};
		},
		function (t, r, a) {
			var o = a(28),
				i = a(88);
			t.exports =
				Object.setPrototypeOf ||
				("__proto__" in {}
					? (function () {
							var t,
								r = !1,
								a = {};
							try {
								(t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(a, []),
									(r = a instanceof Array);
							} catch (t) {}
							return function setPrototypeOf(a, l) {
								return o(a), i(l), r ? t.call(a, l) : (a.__proto__ = l), a;
							};
					  })()
					: void 0);
		},
		function (t, r, a) {
			var o = a(22);
			t.exports = function (t) {
				if (!o(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
				return t;
			};
		},
		function (t, r, a) {
			var o = a(10),
				i = a(90);
			o(
				{
					target: "Array",
					stat: !0,
					forced: !a(97)(function (t) {
						Array.from(t);
					}),
				},
				{ from: i }
			);
		},
		function (t, r, a) {
			"use strict";
			var o = a(62),
				i = a(83),
				l = a(91),
				u = a(92),
				c = a(47),
				d = a(93),
				h = a(94);
			t.exports = function from(t) {
				var r,
					a,
					p,
					m,
					v,
					g,
					y = i(t),
					b = "function" == typeof this ? this : Array,
					_ = arguments.length,
					S = _ > 1 ? arguments[1] : void 0,
					A = void 0 !== S,
					C = h(y),
					R = 0;
				if ((A && (S = o(S, _ > 2 ? arguments[2] : void 0, 2)), null == C || (b == Array && u(C))))
					for (a = new b((r = c(y.length))); r > R; R++) (g = A ? S(y[R], R) : y[R]), d(a, R, g);
				else
					for (v = (m = C.call(y)).next, a = new b(); !(p = v.call(m)).done; R++)
						(g = A ? l(m, S, [p.value, R], !0) : p.value), d(a, R, g);
				return (a.length = R), a;
			};
		},
		function (t, r, a) {
			var o = a(28);
			t.exports = function (t, r, a, i) {
				try {
					return i ? r(o(a)[0], a[1]) : r(a);
				} catch (r) {
					var l = t.return;
					throw (void 0 !== l && o(l.call(t)), r);
				}
			};
		},
		function (t, r, a) {
			var o = a(57),
				i = a(86),
				l = o("iterator"),
				u = Array.prototype;
			t.exports = function (t) {
				return void 0 !== t && (i.Array === t || u[l] === t);
			};
		},
		function (t, r, a) {
			"use strict";
			var o = a(21),
				i = a(27),
				l = a(16);
			t.exports = function (t, r, a) {
				var u = o(r);
				u in t ? i.f(t, u, l(0, a)) : (t[u] = a);
			};
		},
		function (t, r, a) {
			var o = a(95),
				i = a(86),
				l = a(57)("iterator");
			t.exports = function (t) {
				if (null != t) return t[l] || t["@@iterator"] || i[o(t)];
			};
		},
		function (t, r, a) {
			var o = a(96),
				i = a(19),
				l = a(57)("toStringTag"),
				u =
					"Arguments" ==
					i(
						(function () {
							return arguments;
						})()
					);
			t.exports = o
				? i
				: function (t) {
						var r, a, o;
						return void 0 === t
							? "Undefined"
							: null === t
							? "Null"
							: "string" ==
							  typeof (a = (function (t, r) {
									try {
										return t[r];
									} catch (t) {}
							  })((r = Object(t)), l))
							? a
							: u
							? i(r)
							: "Object" == (o = i(r)) && "function" == typeof r.callee
							? "Arguments"
							: o;
				  };
		},
		function (t, r, a) {
			var o = {};
			(o[a(57)("toStringTag")] = "z"), (t.exports = "[object z]" === String(o));
		},
		function (t, r, a) {
			var o = a(57)("iterator"),
				i = !1;
			try {
				var l = 0,
					u = {
						next: function () {
							return { done: !!l++ };
						},
						return: function () {
							i = !0;
						},
					};
				(u[o] = function () {
					return this;
				}),
					Array.from(u, function () {
						throw 2;
					});
			} catch (t) {}
			t.exports = function (t, r) {
				if (!r && !i) return !1;
				var a = !1;
				try {
					var l = {};
					(l[o] = function () {
						return {
							next: function () {
								return { done: (a = !0) };
							},
						};
					}),
						t(l);
				} catch (t) {}
				return a;
			};
		},
		function (t, r, a) {
			a(99);
			var o = a(43);
			t.exports = o.Object.assign;
		},
		function (t, r, a) {
			var o = a(10),
				i = a(100);
			o({ target: "Object", stat: !0, forced: Object.assign !== i }, { assign: i });
		},
		function (t, r, a) {
			"use strict";
			var o = a(13),
				i = a(14),
				l = a(73),
				u = a(51),
				c = a(15),
				d = a(83),
				h = a(18),
				p = Object.assign,
				m = Object.defineProperty;
			t.exports =
				!p ||
				i(function () {
					if (
						o &&
						1 !==
							p(
								{ b: 1 },
								p(
									m({}, "a", {
										enumerable: !0,
										get: function () {
											m(this, "b", { value: 3, enumerable: !1 });
										},
									}),
									{ b: 2 }
								)
							).b
					)
						return !0;
					var t = {},
						r = {},
						a = Symbol(),
						i = "abcdefghijklmnopqrst";
					return (
						(t[a] = 7),
						i.split("").forEach(function (t) {
							r[t] = t;
						}),
						7 != p({}, t)[a] || l(p({}, r)).join("") != i
					);
				})
					? function assign(t, r) {
							for (var a = d(t), i = arguments.length, p = 1, m = u.f, v = c.f; i > p; )
								for (
									var g, y = h(arguments[p++]), b = m ? l(y).concat(m(y)) : l(y), _ = b.length, S = 0;
									_ > S;

								)
									(g = b[S++]), (o && !v.call(y, g)) || (a[g] = y[g]);
							return a;
					  }
					: p;
		},
		function (t, r, a) {
			a(102);
			var o = a(43);
			t.exports = o.Math.log2;
		},
		function (t, r, a) {
			var o = a(10),
				i = Math.log,
				l = Math.LN2;
			o(
				{ target: "Math", stat: !0 },
				{
					log2: function log2(t) {
						return i(t) / l;
					},
				}
			);
		},
		function (t, r, a) {
			a(104);
			var o = a(43);
			t.exports = o.Number.isNaN;
		},
		function (t, r, a) {
			a(10)(
				{ target: "Number", stat: !0 },
				{
					isNaN: function isNaN(t) {
						return t != t;
					},
				}
			);
		},
		function (t, r, a) {
			a(106);
			var o = a(43);
			t.exports = o.Number.isInteger;
		},
		function (t, r, a) {
			a(10)({ target: "Number", stat: !0 }, { isInteger: a(107) });
		},
		function (t, r, a) {
			var o = a(22),
				i = Math.floor;
			t.exports = function isInteger(t) {
				return !o(t) && isFinite(t) && i(t) === t;
			};
		},
		function (t, r, a) {
			a(109);
		},
		function (t, r, a) {
			"use strict";
			var o = a(110),
				i = a(112),
				l = a(14),
				u = o.aTypedArray,
				c = o.aTypedArrayConstructor,
				d = o.exportTypedArrayMethod,
				h = [].slice;
			d(
				"slice",
				function slice(t, r) {
					for (
						var a = h.call(u(this), t, r),
							o = i(this, this.constructor),
							l = 0,
							d = a.length,
							p = new (c(o))(d);
						d > l;

					)
						p[l] = a[l++];
					return p;
				},
				l(function () {
					new Int8Array(1).slice();
				})
			);
		},
		function (t, r, a) {
			"use strict";
			var o,
				i = a(111),
				l = a(13),
				u = a(11),
				c = a(22),
				d = a(23),
				h = a(95),
				p = a(26),
				m = a(29),
				v = a(27).f,
				g = a(82),
				y = a(87),
				b = a(57),
				_ = a(38),
				S = u.Int8Array,
				A = S && S.prototype,
				C = u.Uint8ClampedArray,
				R = C && C.prototype,
				k = S && g(S),
				P = A && g(A),
				w = Object.prototype,
				x = w.isPrototypeOf,
				T = b("toStringTag"),
				E = _("TYPED_ARRAY_TAG"),
				O = i && !!y && "Opera" !== h(u.opera),
				I = !1,
				D = {
					Int8Array: 1,
					Uint8Array: 1,
					Uint8ClampedArray: 1,
					Int16Array: 2,
					Uint16Array: 2,
					Int32Array: 4,
					Uint32Array: 4,
					Float32Array: 4,
					Float64Array: 8,
				},
				isTypedArray = function (t) {
					return c(t) && d(D, h(t));
				};
			for (o in D) u[o] || (O = !1);
			if (
				(!O || "function" != typeof k || k === Function.prototype) &&
				((k = function TypedArray() {
					throw TypeError("Incorrect invocation");
				}),
				O)
			)
				for (o in D) u[o] && y(u[o], k);
			if ((!O || !P || P === w) && ((P = k.prototype), O)) for (o in D) u[o] && y(u[o].prototype, P);
			if ((O && g(R) !== P && y(R, P), l && !d(P, T)))
				for (o in ((I = !0),
				v(P, T, {
					get: function () {
						return c(this) ? this[E] : void 0;
					},
				}),
				D))
					u[o] && p(u[o], E, o);
			t.exports = {
				NATIVE_ARRAY_BUFFER_VIEWS: O,
				TYPED_ARRAY_TAG: I && E,
				aTypedArray: function (t) {
					if (isTypedArray(t)) return t;
					throw TypeError("Target is not a typed array");
				},
				aTypedArrayConstructor: function (t) {
					if (y) {
						if (x.call(k, t)) return t;
					} else
						for (var r in D)
							if (d(D, o)) {
								var a = u[r];
								if (a && (t === a || x.call(a, t))) return t;
							}
					throw TypeError("Target is not a typed array constructor");
				},
				exportTypedArrayMethod: function (t, r, a) {
					if (l) {
						if (a)
							for (var o in D) {
								var i = u[o];
								i && d(i.prototype, t) && delete i.prototype[t];
							}
						(P[t] && !a) || m(P, t, a ? r : (O && A[t]) || r);
					}
				},
				exportTypedArrayStaticMethod: function (t, r, a) {
					var o, i;
					if (l) {
						if (y) {
							if (a) for (o in D) (i = u[o]) && d(i, t) && delete i[t];
							if (k[t] && !a) return;
							try {
								return m(k, t, a ? r : (O && S[t]) || r);
							} catch (t) {}
						}
						for (o in D) !(i = u[o]) || (i[t] && !a) || m(i, t, r);
					}
				},
				isView: function isView(t) {
					var r = h(t);
					return "DataView" === r || d(D, r);
				},
				isTypedArray: isTypedArray,
				TypedArray: k,
				TypedArrayPrototype: P,
			};
		},
		function (t, r) {
			t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
		},
		function (t, r, a) {
			var o = a(28),
				i = a(63),
				l = a(57)("species");
			t.exports = function (t, r) {
				var a,
					u = o(t).constructor;
				return void 0 === u || null == (a = o(u)[l]) ? r : i(a);
			};
		},
		function (t, r, a) {
			a(114), a(77), a(116), a(119), a(134), a(135);
			var o = a(43);
			t.exports = o.Promise;
		},
		function (t, r, a) {
			var o = a(96),
				i = a(29),
				l = a(115);
			o || i(Object.prototype, "toString", l, { unsafe: !0 });
		},
		function (t, r, a) {
			"use strict";
			var o = a(96),
				i = a(95);
			t.exports = o
				? {}.toString
				: function toString() {
						return "[object " + i(this) + "]";
				  };
		},
		function (t, r, a) {
			var o = a(11),
				i = a(117),
				l = a(118),
				u = a(26),
				c = a(57),
				d = c("iterator"),
				h = c("toStringTag"),
				p = l.values;
			for (var m in i) {
				var v = o[m],
					g = v && v.prototype;
				if (g) {
					if (g[d] !== p)
						try {
							u(g, d, p);
						} catch (t) {
							g[d] = p;
						}
					if ((g[h] || u(g, h, m), i[m]))
						for (var y in l)
							if (g[y] !== l[y])
								try {
									u(g, y, l[y]);
								} catch (t) {
									g[y] = l[y];
								}
				}
			}
		},
		function (t, r) {
			t.exports = {
				CSSRuleList: 0,
				CSSStyleDeclaration: 0,
				CSSValueList: 0,
				ClientRectList: 0,
				DOMRectList: 0,
				DOMStringList: 0,
				DOMTokenList: 1,
				DataTransferItemList: 0,
				FileList: 0,
				HTMLAllCollection: 0,
				HTMLCollection: 0,
				HTMLFormElement: 0,
				HTMLSelectElement: 0,
				MediaList: 0,
				MimeTypeArray: 0,
				NamedNodeMap: 0,
				NodeList: 1,
				PaintRequestList: 0,
				Plugin: 0,
				PluginArray: 0,
				SVGLengthList: 0,
				SVGNumberList: 0,
				SVGPathSegList: 0,
				SVGPointList: 0,
				SVGStringList: 0,
				SVGTransformList: 0,
				SourceBufferList: 0,
				StyleSheetList: 0,
				TextTrackCueList: 0,
				TextTrackList: 0,
				TouchList: 0,
			};
		},
		function (t, r, a) {
			"use strict";
			var o = a(17),
				i = a(70),
				l = a(86),
				u = a(33),
				c = a(79),
				d = "Array Iterator",
				h = u.set,
				p = u.getterFor(d);
			(t.exports = c(
				Array,
				"Array",
				function (t, r) {
					h(this, { type: d, target: o(t), index: 0, kind: r });
				},
				function () {
					var t = p(this),
						r = t.target,
						a = t.kind,
						o = t.index++;
					return !r || o >= r.length
						? ((t.target = void 0), { value: void 0, done: !0 })
						: "keys" == a
						? { value: o, done: !1 }
						: "values" == a
						? { value: r[o], done: !1 }
						: { value: [o, r[o]], done: !1 };
				},
				"values"
			)),
				(l.Arguments = l.Array),
				i("keys"),
				i("values"),
				i("entries");
		},
		function (t, r, a) {
			"use strict";
			var o,
				i,
				l,
				u,
				c = a(10),
				d = a(37),
				h = a(11),
				p = a(42),
				m = a(120),
				v = a(29),
				g = a(121),
				y = a(85),
				b = a(122),
				_ = a(22),
				S = a(63),
				A = a(123),
				C = a(19),
				R = a(31),
				k = a(124),
				P = a(97),
				w = a(112),
				x = a(125).set,
				T = a(128),
				E = a(129),
				O = a(131),
				I = a(130),
				D = a(132),
				L = a(33),
				W = a(52),
				M = a(57),
				j = a(133),
				N = M("species"),
				B = "Promise",
				q = L.get,
				G = L.set,
				U = L.getterFor(B),
				z = m,
				H = h.TypeError,
				Y = h.document,
				X = h.process,
				V = p("fetch"),
				Q = I.f,
				K = Q,
				J = "process" == C(X),
				$ = !!(Y && Y.createEvent && h.dispatchEvent),
				Z = "unhandledrejection",
				ee = W(B, function () {
					if (!(R(z) !== String(z))) {
						if (66 === j) return !0;
						if (!J && "function" != typeof PromiseRejectionEvent) return !0;
					}
					if (d && !z.prototype.finally) return !0;
					if (j >= 51 && /native code/.test(z)) return !1;
					var t = z.resolve(1),
						FakePromise = function (t) {
							t(
								function () {},
								function () {}
							);
						};
					return ((t.constructor = {})[N] = FakePromise), !(t.then(function () {}) instanceof FakePromise);
				}),
				te =
					ee ||
					!P(function (t) {
						z.all(t).catch(function () {});
					}),
				isThenable = function (t) {
					var r;
					return !(!_(t) || "function" != typeof (r = t.then)) && r;
				},
				notify = function (t, r, a) {
					if (!r.notified) {
						r.notified = !0;
						var o = r.reactions;
						T(function () {
							for (var i = r.value, l = 1 == r.state, u = 0; o.length > u; ) {
								var c,
									d,
									h,
									p = o[u++],
									m = l ? p.ok : p.fail,
									v = p.resolve,
									g = p.reject,
									y = p.domain;
								try {
									m
										? (l || (2 === r.rejection && onHandleUnhandled(t, r), (r.rejection = 1)),
										  !0 === m ? (c = i) : (y && y.enter(), (c = m(i)), y && (y.exit(), (h = !0))),
										  c === p.promise
												? g(H("Promise-chain cycle"))
												: (d = isThenable(c))
												? d.call(c, v, g)
												: v(c))
										: g(i);
								} catch (t) {
									y && !h && y.exit(), g(t);
								}
							}
							(r.reactions = []), (r.notified = !1), a && !r.rejection && onUnhandled(t, r);
						});
					}
				},
				dispatchEvent = function (t, r, a) {
					var o, i;
					$
						? (((o = Y.createEvent("Event")).promise = r),
						  (o.reason = a),
						  o.initEvent(t, !1, !0),
						  h.dispatchEvent(o))
						: (o = { promise: r, reason: a }),
						(i = h["on" + t]) ? i(o) : t === Z && O("Unhandled promise rejection", a);
				},
				onUnhandled = function (t, r) {
					x.call(h, function () {
						var a,
							o = r.value;
						if (
							isUnhandled(r) &&
							((a = D(function () {
								J ? X.emit("unhandledRejection", o, t) : dispatchEvent(Z, t, o);
							})),
							(r.rejection = J || isUnhandled(r) ? 2 : 1),
							a.error)
						)
							throw a.value;
					});
				},
				isUnhandled = function (t) {
					return 1 !== t.rejection && !t.parent;
				},
				onHandleUnhandled = function (t, r) {
					x.call(h, function () {
						J ? X.emit("rejectionHandled", t) : dispatchEvent("rejectionhandled", t, r.value);
					});
				},
				bind = function (t, r, a, o) {
					return function (i) {
						t(r, a, i, o);
					};
				},
				internalReject = function (t, r, a, o) {
					r.done || ((r.done = !0), o && (r = o), (r.value = a), (r.state = 2), notify(t, r, !0));
				},
				internalResolve = function (t, r, a, o) {
					if (!r.done) {
						(r.done = !0), o && (r = o);
						try {
							if (t === a) throw H("Promise can't be resolved itself");
							var i = isThenable(a);
							i
								? T(function () {
										var o = { done: !1 };
										try {
											i.call(a, bind(internalResolve, t, o, r), bind(internalReject, t, o, r));
										} catch (a) {
											internalReject(t, o, a, r);
										}
								  })
								: ((r.value = a), (r.state = 1), notify(t, r, !1));
						} catch (a) {
							internalReject(t, { done: !1 }, a, r);
						}
					}
				};
			ee &&
				((z = function Promise(t) {
					A(this, z, B), S(t), o.call(this);
					var r = q(this);
					try {
						t(bind(internalResolve, this, r), bind(internalReject, this, r));
					} catch (t) {
						internalReject(this, r, t);
					}
				}),
				((o = function Promise(t) {
					G(this, {
						type: B,
						done: !1,
						notified: !1,
						parent: !1,
						reactions: [],
						rejection: !1,
						state: 0,
						value: void 0,
					});
				}).prototype = g(z.prototype, {
					then: function then(t, r) {
						var a = U(this),
							o = Q(w(this, z));
						return (
							(o.ok = "function" != typeof t || t),
							(o.fail = "function" == typeof r && r),
							(o.domain = J ? X.domain : void 0),
							(a.parent = !0),
							a.reactions.push(o),
							0 != a.state && notify(this, a, !1),
							o.promise
						);
					},
					catch: function (t) {
						return this.then(void 0, t);
					},
				})),
				(i = function () {
					var t = new o(),
						r = q(t);
					(this.promise = t),
						(this.resolve = bind(internalResolve, t, r)),
						(this.reject = bind(internalReject, t, r));
				}),
				(I.f = Q =
					function (t) {
						return t === z || t === l ? new i(t) : K(t);
					}),
				d ||
					"function" != typeof m ||
					((u = m.prototype.then),
					v(
						m.prototype,
						"then",
						function then(t, r) {
							var a = this;
							return new z(function (t, r) {
								u.call(a, t, r);
							}).then(t, r);
						},
						{ unsafe: !0 }
					),
					"function" == typeof V &&
						c(
							{ global: !0, enumerable: !0, forced: !0 },
							{
								fetch: function fetch(t) {
									return E(z, V.apply(h, arguments));
								},
							}
						))),
				c({ global: !0, wrap: !0, forced: ee }, { Promise: z }),
				y(z, B, !1, !0),
				b(B),
				(l = p(B)),
				c(
					{ target: B, stat: !0, forced: ee },
					{
						reject: function reject(t) {
							var r = Q(this);
							return r.reject.call(void 0, t), r.promise;
						},
					}
				),
				c(
					{ target: B, stat: !0, forced: d || ee },
					{
						resolve: function resolve(t) {
							return E(d && this === l ? z : this, t);
						},
					}
				),
				c(
					{ target: B, stat: !0, forced: te },
					{
						all: function all(t) {
							var r = this,
								a = Q(r),
								o = a.resolve,
								i = a.reject,
								l = D(function () {
									var a = S(r.resolve),
										l = [],
										u = 0,
										c = 1;
									k(t, function (t) {
										var d = u++,
											h = !1;
										l.push(void 0),
											c++,
											a.call(r, t).then(function (t) {
												h || ((h = !0), (l[d] = t), --c || o(l));
											}, i);
									}),
										--c || o(l);
								});
							return l.error && i(l.value), a.promise;
						},
						race: function race(t) {
							var r = this,
								a = Q(r),
								o = a.reject,
								i = D(function () {
									var i = S(r.resolve);
									k(t, function (t) {
										i.call(r, t).then(a.resolve, o);
									});
								});
							return i.error && o(i.value), a.promise;
						},
					}
				);
		},
		function (t, r, a) {
			var o = a(11);
			t.exports = o.Promise;
		},
		function (t, r, a) {
			var o = a(29);
			t.exports = function (t, r, a) {
				for (var i in r) o(t, i, r[i], a);
				return t;
			};
		},
		function (t, r, a) {
			"use strict";
			var o = a(42),
				i = a(27),
				l = a(57),
				u = a(13),
				c = l("species");
			t.exports = function (t) {
				var r = o(t),
					a = i.f;
				u &&
					r &&
					!r[c] &&
					a(r, c, {
						configurable: !0,
						get: function () {
							return this;
						},
					});
			};
		},
		function (t, r) {
			t.exports = function (t, r, a) {
				if (!(t instanceof r)) throw TypeError("Incorrect " + (a ? a + " " : "") + "invocation");
				return t;
			};
		},
		function (t, r, a) {
			var o = a(28),
				i = a(92),
				l = a(47),
				u = a(62),
				c = a(94),
				d = a(91),
				Result = function (t, r) {
					(this.stopped = t), (this.result = r);
				};
			(t.exports = function (t, r, a, h, p) {
				var m,
					v,
					g,
					y,
					b,
					_,
					S,
					A = u(r, a, h ? 2 : 1);
				if (p) m = t;
				else {
					if ("function" != typeof (v = c(t))) throw TypeError("Target is not iterable");
					if (i(v)) {
						for (g = 0, y = l(t.length); y > g; g++)
							if ((b = h ? A(o((S = t[g]))[0], S[1]) : A(t[g])) && b instanceof Result) return b;
						return new Result(!1);
					}
					m = v.call(t);
				}
				for (_ = m.next; !(S = _.call(m)).done; )
					if ("object" == typeof (b = d(m, A, S.value, h)) && b && b instanceof Result) return b;
				return new Result(!1);
			}).stop = function (t) {
				return new Result(!0, t);
			};
		},
		function (t, r, a) {
			var o,
				i,
				l,
				u = a(11),
				c = a(14),
				d = a(19),
				h = a(62),
				p = a(74),
				m = a(25),
				v = a(126),
				g = u.location,
				y = u.setImmediate,
				b = u.clearImmediate,
				_ = u.process,
				S = u.MessageChannel,
				A = u.Dispatch,
				C = 0,
				R = {},
				k = "onreadystatechange",
				run = function (t) {
					if (R.hasOwnProperty(t)) {
						var r = R[t];
						delete R[t], r();
					}
				},
				runner = function (t) {
					return function () {
						run(t);
					};
				},
				listener = function (t) {
					run(t.data);
				},
				post = function (t) {
					u.postMessage(t + "", g.protocol + "//" + g.host);
				};
			(y && b) ||
				((y = function setImmediate(t) {
					for (var r = [], a = 1; arguments.length > a; ) r.push(arguments[a++]);
					return (
						(R[++C] = function () {
							("function" == typeof t ? t : Function(t)).apply(void 0, r);
						}),
						o(C),
						C
					);
				}),
				(b = function clearImmediate(t) {
					delete R[t];
				}),
				"process" == d(_)
					? (o = function (t) {
							_.nextTick(runner(t));
					  })
					: A && A.now
					? (o = function (t) {
							A.now(runner(t));
					  })
					: S && !v
					? ((l = (i = new S()).port2), (i.port1.onmessage = listener), (o = h(l.postMessage, l, 1)))
					: !u.addEventListener ||
					  "function" != typeof postMessage ||
					  u.importScripts ||
					  c(post) ||
					  "file:" === g.protocol
					? (o =
							k in m("script")
								? function (t) {
										p.appendChild(m("script")).onreadystatechange = function () {
											p.removeChild(this), run(t);
										};
								  }
								: function (t) {
										setTimeout(runner(t), 0);
								  })
					: ((o = post), u.addEventListener("message", listener, !1))),
				(t.exports = { set: y, clear: b });
		},
		function (t, r, a) {
			var o = a(127);
			t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(o);
		},
		function (t, r, a) {
			var o = a(42);
			t.exports = o("navigator", "userAgent") || "";
		},
		function (t, r, a) {
			var o,
				i,
				l,
				u,
				c,
				d,
				h,
				p,
				m = a(11),
				v = a(12).f,
				g = a(19),
				y = a(125).set,
				b = a(126),
				_ = m.MutationObserver || m.WebKitMutationObserver,
				S = m.process,
				A = m.Promise,
				C = "process" == g(S),
				R = v(m, "queueMicrotask"),
				k = R && R.value;
			k ||
				((o = function () {
					var t, r;
					for (C && (t = S.domain) && t.exit(); i; ) {
						(r = i.fn), (i = i.next);
						try {
							r();
						} catch (t) {
							throw (i ? u() : (l = void 0), t);
						}
					}
					(l = void 0), t && t.enter();
				}),
				C
					? (u = function () {
							S.nextTick(o);
					  })
					: _ && !b
					? ((c = !0),
					  (d = document.createTextNode("")),
					  new _(o).observe(d, { characterData: !0 }),
					  (u = function () {
							d.data = c = !c;
					  }))
					: A && A.resolve
					? ((h = A.resolve(void 0)),
					  (p = h.then),
					  (u = function () {
							p.call(h, o);
					  }))
					: (u = function () {
							y.call(m, o);
					  })),
				(t.exports =
					k ||
					function (t) {
						var r = { fn: t, next: void 0 };
						l && (l.next = r), i || ((i = r), u()), (l = r);
					});
		},
		function (t, r, a) {
			var o = a(28),
				i = a(22),
				l = a(130);
			t.exports = function (t, r) {
				if ((o(t), i(r) && r.constructor === t)) return r;
				var a = l.f(t);
				return (0, a.resolve)(r), a.promise;
			};
		},
		function (t, r, a) {
			"use strict";
			var o = a(63),
				PromiseCapability = function (t) {
					var r, a;
					(this.promise = new t(function (t, o) {
						if (void 0 !== r || void 0 !== a) throw TypeError("Bad Promise constructor");
						(r = t), (a = o);
					})),
						(this.resolve = o(r)),
						(this.reject = o(a));
				};
			t.exports.f = function (t) {
				return new PromiseCapability(t);
			};
		},
		function (t, r, a) {
			var o = a(11);
			t.exports = function (t, r) {
				var a = o.console;
				a && a.error && (1 === arguments.length ? a.error(t) : a.error(t, r));
			};
		},
		function (t, r) {
			t.exports = function (t) {
				try {
					return { error: !1, value: t() };
				} catch (t) {
					return { error: !0, value: t };
				}
			};
		},
		function (t, r, a) {
			var o,
				i,
				l = a(11),
				u = a(127),
				c = l.process,
				d = c && c.versions,
				h = d && d.v8;
			h
				? (i = (o = h.split("."))[0] + o[1])
				: u && (!(o = u.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = u.match(/Chrome\/(\d+)/)) && (i = o[1]),
				(t.exports = i && +i);
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(63),
				l = a(130),
				u = a(132),
				c = a(124);
			o(
				{ target: "Promise", stat: !0 },
				{
					allSettled: function allSettled(t) {
						var r = this,
							a = l.f(r),
							o = a.resolve,
							d = a.reject,
							h = u(function () {
								var a = i(r.resolve),
									l = [],
									u = 0,
									d = 1;
								c(t, function (t) {
									var i = u++,
										c = !1;
									l.push(void 0),
										d++,
										a.call(r, t).then(
											function (t) {
												c ||
													((c = !0), (l[i] = { status: "fulfilled", value: t }), --d || o(l));
											},
											function (t) {
												c ||
													((c = !0), (l[i] = { status: "rejected", reason: t }), --d || o(l));
											}
										);
								}),
									--d || o(l);
							});
						return h.error && d(h.value), a.promise;
					},
				}
			);
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(37),
				l = a(120),
				u = a(14),
				c = a(42),
				d = a(112),
				h = a(129),
				p = a(29);
			o(
				{
					target: "Promise",
					proto: !0,
					real: !0,
					forced:
						!!l &&
						u(function () {
							l.prototype.finally.call({ then: function () {} }, function () {});
						}),
				},
				{
					finally: function (t) {
						var r = d(this, c("Promise")),
							a = "function" == typeof t;
						return this.then(
							a
								? function (a) {
										return h(r, t()).then(function () {
											return a;
										});
								  }
								: t,
							a
								? function (a) {
										return h(r, t()).then(function () {
											throw a;
										});
								  }
								: t
						);
					},
				}
			),
				i ||
					"function" != typeof l ||
					l.prototype.finally ||
					p(l.prototype, "finally", c("Promise").prototype.finally);
		},
		function (t, r, a) {
			a(137), a(142), a(140);
			var o = a(43);
			t.exports = o.URL;
		},
		function (t, r, a) {
			"use strict";
			a(77);
			var o,
				i = a(10),
				l = a(13),
				u = a(138),
				c = a(11),
				d = a(72),
				h = a(29),
				p = a(123),
				m = a(23),
				v = a(100),
				g = a(90),
				y = a(78).codeAt,
				b = a(139),
				_ = a(85),
				S = a(140),
				A = a(33),
				C = c.URL,
				R = S.URLSearchParams,
				k = S.getState,
				P = A.set,
				w = A.getterFor("URL"),
				x = Math.floor,
				T = Math.pow,
				E = "Invalid scheme",
				O = "Invalid host",
				I = "Invalid port",
				D = /[A-Za-z]/,
				L = /[\d+-.A-Za-z]/,
				W = /\d/,
				M = /^(0x|0X)/,
				j = /^[0-7]+$/,
				N = /^\d+$/,
				B = /^[\dA-Fa-f]+$/,
				q = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
				G = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
				U = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
				z = /[\u0009\u000A\u000D]/g,
				parseHost = function (t, r) {
					var a, o, i;
					if ("[" == r.charAt(0)) {
						if ("]" != r.charAt(r.length - 1)) return O;
						if (!(a = parseIPv6(r.slice(1, -1)))) return O;
						t.host = a;
					} else if (isSpecial(t)) {
						if (((r = b(r)), q.test(r))) return O;
						if (null === (a = parseIPv4(r))) return O;
						t.host = a;
					} else {
						if (G.test(r)) return O;
						for (a = "", o = g(r), i = 0; i < o.length; i++) a += percentEncode(o[i], H);
						t.host = a;
					}
				},
				parseIPv4 = function (t) {
					var r,
						a,
						o,
						i,
						l,
						u,
						c,
						d = t.split(".");
					if ((d.length && "" == d[d.length - 1] && d.pop(), (r = d.length) > 4)) return t;
					for (a = [], o = 0; o < r; o++) {
						if ("" == (i = d[o])) return t;
						if (
							((l = 10),
							i.length > 1 &&
								"0" == i.charAt(0) &&
								((l = M.test(i) ? 16 : 8), (i = i.slice(8 == l ? 1 : 2))),
							"" === i)
						)
							u = 0;
						else {
							if (!(10 == l ? N : 8 == l ? j : B).test(i)) return t;
							u = parseInt(i, l);
						}
						a.push(u);
					}
					for (o = 0; o < r; o++)
						if (((u = a[o]), o == r - 1)) {
							if (u >= T(256, 5 - r)) return null;
						} else if (u > 255) return null;
					for (c = a.pop(), o = 0; o < a.length; o++) c += a[o] * T(256, 3 - o);
					return c;
				},
				parseIPv6 = function (t) {
					var r,
						a,
						o,
						i,
						l,
						u,
						c,
						d = [0, 0, 0, 0, 0, 0, 0, 0],
						h = 0,
						p = null,
						m = 0,
						char = function () {
							return t.charAt(m);
						};
					if (":" == char()) {
						if (":" != t.charAt(1)) return;
						(m += 2), (p = ++h);
					}
					for (; char(); ) {
						if (8 == h) return;
						if (":" != char()) {
							for (r = a = 0; a < 4 && B.test(char()); ) (r = 16 * r + parseInt(char(), 16)), m++, a++;
							if ("." == char()) {
								if (0 == a) return;
								if (((m -= a), h > 6)) return;
								for (o = 0; char(); ) {
									if (((i = null), o > 0)) {
										if (!("." == char() && o < 4)) return;
										m++;
									}
									if (!W.test(char())) return;
									for (; W.test(char()); ) {
										if (((l = parseInt(char(), 10)), null === i)) i = l;
										else {
											if (0 == i) return;
											i = 10 * i + l;
										}
										if (i > 255) return;
										m++;
									}
									(d[h] = 256 * d[h] + i), (2 != ++o && 4 != o) || h++;
								}
								if (4 != o) return;
								break;
							}
							if (":" == char()) {
								if ((m++, !char())) return;
							} else if (char()) return;
							d[h++] = r;
						} else {
							if (null !== p) return;
							m++, (p = ++h);
						}
					}
					if (null !== p)
						for (u = h - p, h = 7; 0 != h && u > 0; ) (c = d[h]), (d[h--] = d[p + u - 1]), (d[p + --u] = c);
					else if (8 != h) return;
					return d;
				},
				serializeHost = function (t) {
					var r, a, o, i;
					if ("number" == typeof t) {
						for (r = [], a = 0; a < 4; a++) r.unshift(t % 256), (t = x(t / 256));
						return r.join(".");
					}
					if ("object" == typeof t) {
						for (
							r = "",
								o = (function (t) {
									for (var r = null, a = 1, o = null, i = 0, l = 0; l < 8; l++)
										0 !== t[l]
											? (i > a && ((r = o), (a = i)), (o = null), (i = 0))
											: (null === o && (o = l), ++i);
									return i > a && ((r = o), (a = i)), r;
								})(t),
								a = 0;
							a < 8;
							a++
						)
							(i && 0 === t[a]) ||
								(i && (i = !1),
								o === a
									? ((r += a ? ":" : "::"), (i = !0))
									: ((r += t[a].toString(16)), a < 7 && (r += ":")));
						return "[" + r + "]";
					}
					return t;
				},
				H = {},
				Y = v({}, H, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
				X = v({}, Y, { "#": 1, "?": 1, "{": 1, "}": 1 }),
				V = v({}, X, { "/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1 }),
				percentEncode = function (t, r) {
					var a = y(t, 0);
					return a > 32 && a < 127 && !m(r, t) ? t : encodeURIComponent(t);
				},
				Q = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
				isSpecial = function (t) {
					return m(Q, t.scheme);
				},
				includesCredentials = function (t) {
					return "" != t.username || "" != t.password;
				},
				cannotHaveUsernamePasswordPort = function (t) {
					return !t.host || t.cannotBeABaseURL || "file" == t.scheme;
				},
				isWindowsDriveLetter = function (t, r) {
					var a;
					return 2 == t.length && D.test(t.charAt(0)) && (":" == (a = t.charAt(1)) || (!r && "|" == a));
				},
				startsWithWindowsDriveLetter = function (t) {
					var r;
					return (
						t.length > 1 &&
						isWindowsDriveLetter(t.slice(0, 2)) &&
						(2 == t.length || "/" === (r = t.charAt(2)) || "\\" === r || "?" === r || "#" === r)
					);
				},
				shortenURLsPath = function (t) {
					var r = t.path,
						a = r.length;
					!a || ("file" == t.scheme && 1 == a && isWindowsDriveLetter(r[0], !0)) || r.pop();
				},
				isSingleDot = function (t) {
					return "." === t || "%2e" === t.toLowerCase();
				},
				K = {},
				J = {},
				$ = {},
				Z = {},
				ee = {},
				te = {},
				re = {},
				ne = {},
				ae = {},
				oe = {},
				ie = {},
				se = {},
				le = {},
				ue = {},
				ce = {},
				de = {},
				fe = {},
				he = {},
				pe = {},
				me = {},
				ve = {},
				parseURL = function (t, r, a, i) {
					var l,
						u,
						c,
						d,
						h,
						p = a || K,
						v = 0,
						y = "",
						b = !1,
						_ = !1,
						S = !1;
					for (
						a ||
							((t.scheme = ""),
							(t.username = ""),
							(t.password = ""),
							(t.host = null),
							(t.port = null),
							(t.path = []),
							(t.query = null),
							(t.fragment = null),
							(t.cannotBeABaseURL = !1),
							(r = r.replace(U, ""))),
							r = r.replace(z, ""),
							l = g(r);
						v <= l.length;

					) {
						switch (((u = l[v]), p)) {
							case K:
								if (!u || !D.test(u)) {
									if (a) return E;
									p = $;
									continue;
								}
								(y += u.toLowerCase()), (p = J);
								break;
							case J:
								if (u && (L.test(u) || "+" == u || "-" == u || "." == u)) y += u.toLowerCase();
								else {
									if (":" != u) {
										if (a) return E;
										(y = ""), (p = $), (v = 0);
										continue;
									}
									if (
										a &&
										(isSpecial(t) != m(Q, y) ||
											("file" == y && (includesCredentials(t) || null !== t.port)) ||
											("file" == t.scheme && !t.host))
									)
										return;
									if (((t.scheme = y), a))
										return void (isSpecial(t) && Q[t.scheme] == t.port && (t.port = null));
									(y = ""),
										"file" == t.scheme
											? (p = ue)
											: isSpecial(t) && i && i.scheme == t.scheme
											? (p = Z)
											: isSpecial(t)
											? (p = ne)
											: "/" == l[v + 1]
											? ((p = ee), v++)
											: ((t.cannotBeABaseURL = !0), t.path.push(""), (p = pe));
								}
								break;
							case $:
								if (!i || (i.cannotBeABaseURL && "#" != u)) return E;
								if (i.cannotBeABaseURL && "#" == u) {
									(t.scheme = i.scheme),
										(t.path = i.path.slice()),
										(t.query = i.query),
										(t.fragment = ""),
										(t.cannotBeABaseURL = !0),
										(p = ve);
									break;
								}
								p = "file" == i.scheme ? ue : te;
								continue;
							case Z:
								if ("/" != u || "/" != l[v + 1]) {
									p = te;
									continue;
								}
								(p = ae), v++;
								break;
							case ee:
								if ("/" == u) {
									p = oe;
									break;
								}
								p = he;
								continue;
							case te:
								if (((t.scheme = i.scheme), u == o))
									(t.username = i.username),
										(t.password = i.password),
										(t.host = i.host),
										(t.port = i.port),
										(t.path = i.path.slice()),
										(t.query = i.query);
								else if ("/" == u || ("\\" == u && isSpecial(t))) p = re;
								else if ("?" == u)
									(t.username = i.username),
										(t.password = i.password),
										(t.host = i.host),
										(t.port = i.port),
										(t.path = i.path.slice()),
										(t.query = ""),
										(p = me);
								else {
									if ("#" != u) {
										(t.username = i.username),
											(t.password = i.password),
											(t.host = i.host),
											(t.port = i.port),
											(t.path = i.path.slice()),
											t.path.pop(),
											(p = he);
										continue;
									}
									(t.username = i.username),
										(t.password = i.password),
										(t.host = i.host),
										(t.port = i.port),
										(t.path = i.path.slice()),
										(t.query = i.query),
										(t.fragment = ""),
										(p = ve);
								}
								break;
							case re:
								if (!isSpecial(t) || ("/" != u && "\\" != u)) {
									if ("/" != u) {
										(t.username = i.username),
											(t.password = i.password),
											(t.host = i.host),
											(t.port = i.port),
											(p = he);
										continue;
									}
									p = oe;
								} else p = ae;
								break;
							case ne:
								if (((p = ae), "/" != u || "/" != y.charAt(v + 1))) continue;
								v++;
								break;
							case ae:
								if ("/" != u && "\\" != u) {
									p = oe;
									continue;
								}
								break;
							case oe:
								if ("@" == u) {
									b && (y = "%40" + y), (b = !0), (c = g(y));
									for (var A = 0; A < c.length; A++) {
										var C = c[A];
										if (":" != C || S) {
											var R = percentEncode(C, V);
											S ? (t.password += R) : (t.username += R);
										} else S = !0;
									}
									y = "";
								} else if (u == o || "/" == u || "?" == u || "#" == u || ("\\" == u && isSpecial(t))) {
									if (b && "" == y) return "Invalid authority";
									(v -= g(y).length + 1), (y = ""), (p = ie);
								} else y += u;
								break;
							case ie:
							case se:
								if (a && "file" == t.scheme) {
									p = de;
									continue;
								}
								if (":" != u || _) {
									if (u == o || "/" == u || "?" == u || "#" == u || ("\\" == u && isSpecial(t))) {
										if (isSpecial(t) && "" == y) return O;
										if (a && "" == y && (includesCredentials(t) || null !== t.port)) return;
										if ((d = parseHost(t, y))) return d;
										if (((y = ""), (p = fe), a)) return;
										continue;
									}
									"[" == u ? (_ = !0) : "]" == u && (_ = !1), (y += u);
								} else {
									if ("" == y) return O;
									if ((d = parseHost(t, y))) return d;
									if (((y = ""), (p = le), a == se)) return;
								}
								break;
							case le:
								if (!W.test(u)) {
									if (
										u == o ||
										"/" == u ||
										"?" == u ||
										"#" == u ||
										("\\" == u && isSpecial(t)) ||
										a
									) {
										if ("" != y) {
											var k = parseInt(y, 10);
											if (k > 65535) return I;
											(t.port = isSpecial(t) && k === Q[t.scheme] ? null : k), (y = "");
										}
										if (a) return;
										p = fe;
										continue;
									}
									return I;
								}
								y += u;
								break;
							case ue:
								if (((t.scheme = "file"), "/" == u || "\\" == u)) p = ce;
								else {
									if (!i || "file" != i.scheme) {
										p = he;
										continue;
									}
									if (u == o) (t.host = i.host), (t.path = i.path.slice()), (t.query = i.query);
									else if ("?" == u)
										(t.host = i.host), (t.path = i.path.slice()), (t.query = ""), (p = me);
									else {
										if ("#" != u) {
											startsWithWindowsDriveLetter(l.slice(v).join("")) ||
												((t.host = i.host), (t.path = i.path.slice()), shortenURLsPath(t)),
												(p = he);
											continue;
										}
										(t.host = i.host),
											(t.path = i.path.slice()),
											(t.query = i.query),
											(t.fragment = ""),
											(p = ve);
									}
								}
								break;
							case ce:
								if ("/" == u || "\\" == u) {
									p = de;
									break;
								}
								i &&
									"file" == i.scheme &&
									!startsWithWindowsDriveLetter(l.slice(v).join("")) &&
									(isWindowsDriveLetter(i.path[0], !0) ? t.path.push(i.path[0]) : (t.host = i.host)),
									(p = he);
								continue;
							case de:
								if (u == o || "/" == u || "\\" == u || "?" == u || "#" == u) {
									if (!a && isWindowsDriveLetter(y)) p = he;
									else if ("" == y) {
										if (((t.host = ""), a)) return;
										p = fe;
									} else {
										if ((d = parseHost(t, y))) return d;
										if (("localhost" == t.host && (t.host = ""), a)) return;
										(y = ""), (p = fe);
									}
									continue;
								}
								y += u;
								break;
							case fe:
								if (isSpecial(t)) {
									if (((p = he), "/" != u && "\\" != u)) continue;
								} else if (a || "?" != u)
									if (a || "#" != u) {
										if (u != o && ((p = he), "/" != u)) continue;
									} else (t.fragment = ""), (p = ve);
								else (t.query = ""), (p = me);
								break;
							case he:
								if (
									u == o ||
									"/" == u ||
									("\\" == u && isSpecial(t)) ||
									(!a && ("?" == u || "#" == u))
								) {
									if (
										(".." === (h = (h = y).toLowerCase()) ||
										"%2e." === h ||
										".%2e" === h ||
										"%2e%2e" === h
											? (shortenURLsPath(t),
											  "/" == u || ("\\" == u && isSpecial(t)) || t.path.push(""))
											: isSingleDot(y)
											? "/" == u || ("\\" == u && isSpecial(t)) || t.path.push("")
											: ("file" == t.scheme &&
													!t.path.length &&
													isWindowsDriveLetter(y) &&
													(t.host && (t.host = ""), (y = y.charAt(0) + ":")),
											  t.path.push(y)),
										(y = ""),
										"file" == t.scheme && (u == o || "?" == u || "#" == u))
									)
										for (; t.path.length > 1 && "" === t.path[0]; ) t.path.shift();
									"?" == u ? ((t.query = ""), (p = me)) : "#" == u && ((t.fragment = ""), (p = ve));
								} else y += percentEncode(u, X);
								break;
							case pe:
								"?" == u
									? ((t.query = ""), (p = me))
									: "#" == u
									? ((t.fragment = ""), (p = ve))
									: u != o && (t.path[0] += percentEncode(u, H));
								break;
							case me:
								a || "#" != u
									? u != o &&
									  ("'" == u && isSpecial(t)
											? (t.query += "%27")
											: (t.query += "#" == u ? "%23" : percentEncode(u, H)))
									: ((t.fragment = ""), (p = ve));
								break;
							case ve:
								u != o && (t.fragment += percentEncode(u, Y));
						}
						v++;
					}
				},
				ge = function URL(t) {
					var r,
						a,
						o = p(this, ge, "URL"),
						i = arguments.length > 1 ? arguments[1] : void 0,
						u = String(t),
						c = P(o, { type: "URL" });
					if (void 0 !== i)
						if (i instanceof ge) r = w(i);
						else if ((a = parseURL((r = {}), String(i)))) throw TypeError(a);
					if ((a = parseURL(c, u, null, r))) throw TypeError(a);
					var d = (c.searchParams = new R()),
						h = k(d);
					h.updateSearchParams(c.query),
						(h.updateURL = function () {
							c.query = String(d) || null;
						}),
						l ||
							((o.href = serializeURL.call(o)),
							(o.origin = getOrigin.call(o)),
							(o.protocol = getProtocol.call(o)),
							(o.username = getUsername.call(o)),
							(o.password = getPassword.call(o)),
							(o.host = getHost.call(o)),
							(o.hostname = getHostname.call(o)),
							(o.port = getPort.call(o)),
							(o.pathname = getPathname.call(o)),
							(o.search = getSearch.call(o)),
							(o.searchParams = getSearchParams.call(o)),
							(o.hash = getHash.call(o)));
				},
				ye = ge.prototype,
				serializeURL = function () {
					var t = w(this),
						r = t.scheme,
						a = t.username,
						o = t.password,
						i = t.host,
						l = t.port,
						u = t.path,
						c = t.query,
						d = t.fragment,
						h = r + ":";
					return (
						null !== i
							? ((h += "//"),
							  includesCredentials(t) && (h += a + (o ? ":" + o : "") + "@"),
							  (h += serializeHost(i)),
							  null !== l && (h += ":" + l))
							: "file" == r && (h += "//"),
						(h += t.cannotBeABaseURL ? u[0] : u.length ? "/" + u.join("/") : ""),
						null !== c && (h += "?" + c),
						null !== d && (h += "#" + d),
						h
					);
				},
				getOrigin = function () {
					var t = w(this),
						r = t.scheme,
						a = t.port;
					if ("blob" == r)
						try {
							return new URL(r.path[0]).origin;
						} catch (t) {
							return "null";
						}
					return "file" != r && isSpecial(t)
						? r + "://" + serializeHost(t.host) + (null !== a ? ":" + a : "")
						: "null";
				},
				getProtocol = function () {
					return w(this).scheme + ":";
				},
				getUsername = function () {
					return w(this).username;
				},
				getPassword = function () {
					return w(this).password;
				},
				getHost = function () {
					var t = w(this),
						r = t.host,
						a = t.port;
					return null === r ? "" : null === a ? serializeHost(r) : serializeHost(r) + ":" + a;
				},
				getHostname = function () {
					var t = w(this).host;
					return null === t ? "" : serializeHost(t);
				},
				getPort = function () {
					var t = w(this).port;
					return null === t ? "" : String(t);
				},
				getPathname = function () {
					var t = w(this),
						r = t.path;
					return t.cannotBeABaseURL ? r[0] : r.length ? "/" + r.join("/") : "";
				},
				getSearch = function () {
					var t = w(this).query;
					return t ? "?" + t : "";
				},
				getSearchParams = function () {
					return w(this).searchParams;
				},
				getHash = function () {
					var t = w(this).fragment;
					return t ? "#" + t : "";
				},
				accessorDescriptor = function (t, r) {
					return { get: t, set: r, configurable: !0, enumerable: !0 };
				};
			if (
				(l &&
					d(ye, {
						href: accessorDescriptor(serializeURL, function (t) {
							var r = w(this),
								a = String(t),
								o = parseURL(r, a);
							if (o) throw TypeError(o);
							k(r.searchParams).updateSearchParams(r.query);
						}),
						origin: accessorDescriptor(getOrigin),
						protocol: accessorDescriptor(getProtocol, function (t) {
							var r = w(this);
							parseURL(r, String(t) + ":", K);
						}),
						username: accessorDescriptor(getUsername, function (t) {
							var r = w(this),
								a = g(String(t));
							if (!cannotHaveUsernamePasswordPort(r)) {
								r.username = "";
								for (var o = 0; o < a.length; o++) r.username += percentEncode(a[o], V);
							}
						}),
						password: accessorDescriptor(getPassword, function (t) {
							var r = w(this),
								a = g(String(t));
							if (!cannotHaveUsernamePasswordPort(r)) {
								r.password = "";
								for (var o = 0; o < a.length; o++) r.password += percentEncode(a[o], V);
							}
						}),
						host: accessorDescriptor(getHost, function (t) {
							var r = w(this);
							r.cannotBeABaseURL || parseURL(r, String(t), ie);
						}),
						hostname: accessorDescriptor(getHostname, function (t) {
							var r = w(this);
							r.cannotBeABaseURL || parseURL(r, String(t), se);
						}),
						port: accessorDescriptor(getPort, function (t) {
							var r = w(this);
							cannotHaveUsernamePasswordPort(r) ||
								("" == (t = String(t)) ? (r.port = null) : parseURL(r, t, le));
						}),
						pathname: accessorDescriptor(getPathname, function (t) {
							var r = w(this);
							r.cannotBeABaseURL || ((r.path = []), parseURL(r, t + "", fe));
						}),
						search: accessorDescriptor(getSearch, function (t) {
							var r = w(this);
							"" == (t = String(t))
								? (r.query = null)
								: ("?" == t.charAt(0) && (t = t.slice(1)), (r.query = ""), parseURL(r, t, me)),
								k(r.searchParams).updateSearchParams(r.query);
						}),
						searchParams: accessorDescriptor(getSearchParams),
						hash: accessorDescriptor(getHash, function (t) {
							var r = w(this);
							"" != (t = String(t))
								? ("#" == t.charAt(0) && (t = t.slice(1)), (r.fragment = ""), parseURL(r, t, ve))
								: (r.fragment = null);
						}),
					}),
				h(
					ye,
					"toJSON",
					function toJSON() {
						return serializeURL.call(this);
					},
					{ enumerable: !0 }
				),
				h(
					ye,
					"toString",
					function toString() {
						return serializeURL.call(this);
					},
					{ enumerable: !0 }
				),
				C)
			) {
				var be = C.createObjectURL,
					_e = C.revokeObjectURL;
				be &&
					h(ge, "createObjectURL", function createObjectURL(t) {
						return be.apply(C, arguments);
					}),
					_e &&
						h(ge, "revokeObjectURL", function revokeObjectURL(t) {
							return _e.apply(C, arguments);
						});
			}
			_(ge, "URL"), i({ global: !0, forced: !u, sham: !l }, { URL: ge });
		},
		function (t, r, a) {
			var o = a(14),
				i = a(57),
				l = a(37),
				u = i("iterator");
			t.exports = !o(function () {
				var t = new URL("b?a=1&b=2&c=3", "http://a"),
					r = t.searchParams,
					a = "";
				return (
					(t.pathname = "c%20d"),
					r.forEach(function (t, o) {
						r.delete("b"), (a += o + t);
					}),
					(l && !t.toJSON) ||
						!r.sort ||
						"http://a/c%20d?a=1&c=3" !== t.href ||
						"3" !== r.get("c") ||
						"a=1" !== String(new URLSearchParams("?a=1")) ||
						!r[u] ||
						"a" !== new URL("https://a@b").username ||
						"b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
						"xn--e1aybc" !== new URL("http://тест").host ||
						"#%D0%B1" !== new URL("http://a#б").hash ||
						"a1c3" !== a ||
						"x" !== new URL("http://x", void 0).host
				);
			});
		},
		function (t, r, a) {
			"use strict";
			var o = 2147483647,
				i = /[^\0-\u007E]/,
				l = /[.\u3002\uFF0E\uFF61]/g,
				u = "Overflow: input needs wider integers to process",
				c = Math.floor,
				d = String.fromCharCode,
				digitToBasic = function (t) {
					return t + 22 + 75 * (t < 26);
				},
				adapt = function (t, r, a) {
					var o = 0;
					for (t = a ? c(t / 700) : t >> 1, t += c(t / r); t > 455; o += 36) t = c(t / 35);
					return c(o + (36 * t) / (t + 38));
				},
				encode = function (t) {
					var r,
						a,
						i = [],
						l = (t = (function (t) {
							for (var r = [], a = 0, o = t.length; a < o; ) {
								var i = t.charCodeAt(a++);
								if (i >= 55296 && i <= 56319 && a < o) {
									var l = t.charCodeAt(a++);
									56320 == (64512 & l)
										? r.push(((1023 & i) << 10) + (1023 & l) + 65536)
										: (r.push(i), a--);
								} else r.push(i);
							}
							return r;
						})(t)).length,
						h = 128,
						p = 0,
						m = 72;
					for (r = 0; r < t.length; r++) (a = t[r]) < 128 && i.push(d(a));
					var v = i.length,
						g = v;
					for (v && i.push("-"); g < l; ) {
						var y = o;
						for (r = 0; r < t.length; r++) (a = t[r]) >= h && a < y && (y = a);
						var b = g + 1;
						if (y - h > c((o - p) / b)) throw RangeError(u);
						for (p += (y - h) * b, h = y, r = 0; r < t.length; r++) {
							if ((a = t[r]) < h && ++p > o) throw RangeError(u);
							if (a == h) {
								for (var _ = p, S = 36; ; S += 36) {
									var A = S <= m ? 1 : S >= m + 26 ? 26 : S - m;
									if (_ < A) break;
									var C = _ - A,
										R = 36 - A;
									i.push(d(digitToBasic(A + (C % R)))), (_ = c(C / R));
								}
								i.push(d(digitToBasic(_))), (m = adapt(p, b, g == v)), (p = 0), ++g;
							}
						}
						++p, ++h;
					}
					return i.join("");
				};
			t.exports = function (t) {
				var r,
					a,
					o = [],
					u = t.toLowerCase().replace(l, ".").split(".");
				for (r = 0; r < u.length; r++) (a = u[r]), o.push(i.test(a) ? "xn--" + encode(a) : a);
				return o.join(".");
			};
		},
		function (t, r, a) {
			"use strict";
			a(118);
			var o = a(10),
				i = a(42),
				l = a(138),
				u = a(29),
				c = a(121),
				d = a(85),
				h = a(80),
				p = a(33),
				m = a(123),
				v = a(23),
				g = a(62),
				y = a(95),
				b = a(28),
				_ = a(22),
				S = a(71),
				A = a(16),
				C = a(141),
				R = a(94),
				k = a(57),
				P = i("fetch"),
				w = i("Headers"),
				x = k("iterator"),
				T = "URLSearchParams",
				E = "URLSearchParamsIterator",
				O = p.set,
				I = p.getterFor(T),
				D = p.getterFor(E),
				L = /\+/g,
				W = Array(4),
				percentSequence = function (t) {
					return W[t - 1] || (W[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"));
				},
				percentDecode = function (t) {
					try {
						return decodeURIComponent(t);
					} catch (r) {
						return t;
					}
				},
				deserialize = function (t) {
					var r = t.replace(L, " "),
						a = 4;
					try {
						return decodeURIComponent(r);
					} catch (t) {
						for (; a; ) r = r.replace(percentSequence(a--), percentDecode);
						return r;
					}
				},
				M = /[!'()~]|%20/g,
				j = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" },
				replacer = function (t) {
					return j[t];
				},
				serialize = function (t) {
					return encodeURIComponent(t).replace(M, replacer);
				},
				parseSearchParams = function (t, r) {
					if (r)
						for (var a, o, i = r.split("&"), l = 0; l < i.length; )
							(a = i[l++]).length &&
								((o = a.split("=")),
								t.push({ key: deserialize(o.shift()), value: deserialize(o.join("=")) }));
				},
				updateSearchParams = function (t) {
					(this.entries.length = 0), parseSearchParams(this.entries, t);
				},
				validateArgumentsLength = function (t, r) {
					if (t < r) throw TypeError("Not enough arguments");
				},
				N = h(
					function Iterator(t, r) {
						O(this, { type: E, iterator: C(I(t).entries), kind: r });
					},
					"Iterator",
					function next() {
						var t = D(this),
							r = t.kind,
							a = t.iterator.next(),
							o = a.value;
						return (
							a.done || (a.value = "keys" === r ? o.key : "values" === r ? o.value : [o.key, o.value]), a
						);
					}
				),
				B = function URLSearchParams() {
					m(this, B, T);
					var t,
						r,
						a,
						o,
						i,
						l,
						u,
						c,
						d,
						h = arguments.length > 0 ? arguments[0] : void 0,
						p = this,
						g = [];
					if (
						(O(p, {
							type: T,
							entries: g,
							updateURL: function () {},
							updateSearchParams: updateSearchParams,
						}),
						void 0 !== h)
					)
						if (_(h))
							if ("function" == typeof (t = R(h)))
								for (a = (r = t.call(h)).next; !(o = a.call(r)).done; ) {
									if (
										(u = (l = (i = C(b(o.value))).next).call(i)).done ||
										(c = l.call(i)).done ||
										!l.call(i).done
									)
										throw TypeError("Expected sequence with length 2");
									g.push({ key: u.value + "", value: c.value + "" });
								}
							else for (d in h) v(h, d) && g.push({ key: d, value: h[d] + "" });
						else
							parseSearchParams(
								g,
								"string" == typeof h ? ("?" === h.charAt(0) ? h.slice(1) : h) : h + ""
							);
				},
				q = B.prototype;
			c(
				q,
				{
					append: function append(t, r) {
						validateArgumentsLength(arguments.length, 2);
						var a = I(this);
						a.entries.push({ key: t + "", value: r + "" }), a.updateURL();
					},
					delete: function (t) {
						validateArgumentsLength(arguments.length, 1);
						for (var r = I(this), a = r.entries, o = t + "", i = 0; i < a.length; )
							a[i].key === o ? a.splice(i, 1) : i++;
						r.updateURL();
					},
					get: function get(t) {
						validateArgumentsLength(arguments.length, 1);
						for (var r = I(this).entries, a = t + "", o = 0; o < r.length; o++)
							if (r[o].key === a) return r[o].value;
						return null;
					},
					getAll: function getAll(t) {
						validateArgumentsLength(arguments.length, 1);
						for (var r = I(this).entries, a = t + "", o = [], i = 0; i < r.length; i++)
							r[i].key === a && o.push(r[i].value);
						return o;
					},
					has: function has(t) {
						validateArgumentsLength(arguments.length, 1);
						for (var r = I(this).entries, a = t + "", o = 0; o < r.length; )
							if (r[o++].key === a) return !0;
						return !1;
					},
					set: function set(t, r) {
						validateArgumentsLength(arguments.length, 1);
						for (
							var a, o = I(this), i = o.entries, l = !1, u = t + "", c = r + "", d = 0;
							d < i.length;
							d++
						)
							(a = i[d]).key === u && (l ? i.splice(d--, 1) : ((l = !0), (a.value = c)));
						l || i.push({ key: u, value: c }), o.updateURL();
					},
					sort: function sort() {
						var t,
							r,
							a,
							o = I(this),
							i = o.entries,
							l = i.slice();
						for (i.length = 0, a = 0; a < l.length; a++) {
							for (t = l[a], r = 0; r < a; r++)
								if (i[r].key > t.key) {
									i.splice(r, 0, t);
									break;
								}
							r === a && i.push(t);
						}
						o.updateURL();
					},
					forEach: function forEach(t) {
						for (
							var r,
								a = I(this).entries,
								o = g(t, arguments.length > 1 ? arguments[1] : void 0, 3),
								i = 0;
							i < a.length;

						)
							o((r = a[i++]).value, r.key, this);
					},
					keys: function keys() {
						return new N(this, "keys");
					},
					values: function values() {
						return new N(this, "values");
					},
					entries: function entries() {
						return new N(this, "entries");
					},
				},
				{ enumerable: !0 }
			),
				u(q, x, q.entries),
				u(
					q,
					"toString",
					function toString() {
						for (var t, r = I(this).entries, a = [], o = 0; o < r.length; )
							(t = r[o++]), a.push(serialize(t.key) + "=" + serialize(t.value));
						return a.join("&");
					},
					{ enumerable: !0 }
				),
				d(B, T),
				o({ global: !0, forced: !l }, { URLSearchParams: B }),
				l ||
					"function" != typeof P ||
					"function" != typeof w ||
					o(
						{ global: !0, enumerable: !0, forced: !0 },
						{
							fetch: function fetch(t) {
								var r,
									a,
									o,
									i = [t];
								return (
									arguments.length > 1 &&
										(_((r = arguments[1])) &&
											((a = r.body),
											y(a) === T &&
												((o = r.headers ? new w(r.headers) : new w()).has("content-type") ||
													o.set(
														"content-type",
														"application/x-www-form-urlencoded;charset=UTF-8"
													),
												(r = S(r, { body: A(0, String(a)), headers: A(0, o) })))),
										i.push(r)),
									P.apply(this, i)
								);
							},
						}
					),
				(t.exports = { URLSearchParams: B, getState: I });
		},
		function (t, r, a) {
			var o = a(28),
				i = a(94);
			t.exports = function (t) {
				var r = i(t);
				if ("function" != typeof r) throw TypeError(String(t) + " is not iterable");
				return o(r.call(t));
			};
		},
		function (t, r, a) {
			"use strict";
			a(10)(
				{ target: "URL", proto: !0, enumerable: !0 },
				{
					toJSON: function toJSON() {
						return URL.prototype.toString.call(this);
					},
				}
			);
		},
		function (t, r, a) {
			!(function (t) {
				"use strict";
				var r =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? Symbol
						: function (t) {
								return "Symbol(" + t + ")";
						  };
				function noop() {}
				var a =
						Number.isNaN ||
						function (t) {
							return t != t;
						},
					o = noop;
				function typeIsObject(t) {
					return ("object" == typeof t && null !== t) || "function" == typeof t;
				}
				function createArrayFromList(t) {
					return t.slice();
				}
				function ArrayBufferCopy(t, r, a, o, i) {
					new Uint8Array(t).set(new Uint8Array(a, o, i), r);
				}
				function IsFiniteNonNegativeNumber(t) {
					return !1 !== IsNonNegativeNumber(t) && t !== 1 / 0;
				}
				function IsNonNegativeNumber(t) {
					return !("number" != typeof t || a(t) || t < 0);
				}
				function Call(t, r, a) {
					if ("function" != typeof t) throw new TypeError("Argument is not a function");
					return Function.prototype.apply.call(t, r, a);
				}
				function CreateAlgorithmFromUnderlyingMethod(t, r, a, o) {
					var i = t[r];
					if (void 0 !== i) {
						if ("function" != typeof i) throw new TypeError(i + " is not a method");
						switch (a) {
							case 0:
								return function () {
									return PromiseCall(i, t, o);
								};
							case 1:
								return function (r) {
									var a = [r].concat(o);
									return PromiseCall(i, t, a);
								};
						}
					}
					return function () {
						return promiseResolvedWith(void 0);
					};
				}
				function InvokeOrNoop(t, r, a) {
					var o = t[r];
					if (void 0 !== o) return Call(o, t, a);
				}
				function PromiseCall(t, r, a) {
					try {
						return promiseResolvedWith(Call(t, r, a));
					} catch (t) {
						return promiseRejectedWith(t);
					}
				}
				function TransferArrayBuffer(t) {
					return t;
				}
				function IsDetachedBuffer(t) {
					return !1;
				}
				function ValidateAndNormalizeHighWaterMark(t) {
					if (((t = Number(t)), a(t) || t < 0))
						throw new RangeError(
							"highWaterMark property of a queuing strategy must be non-negative and non-NaN"
						);
					return t;
				}
				function MakeSizeAlgorithmFromSizeFunction(t) {
					if (void 0 === t)
						return function () {
							return 1;
						};
					if ("function" != typeof t)
						throw new TypeError("size property of a queuing strategy must be a function");
					return function (r) {
						return t(r);
					};
				}
				var i = Promise,
					l = Promise.prototype.then,
					u = Promise.resolve.bind(i),
					c = Promise.reject.bind(i);
				function newPromise(t) {
					return new i(t);
				}
				function promiseResolvedWith(t) {
					return u(t);
				}
				function promiseRejectedWith(t) {
					return c(t);
				}
				function PerformPromiseThen(t, r, a) {
					return l.call(t, r, a);
				}
				function uponPromise(t, r, a) {
					PerformPromiseThen(PerformPromiseThen(t, r, a), void 0, o);
				}
				function uponFulfillment(t, r) {
					uponPromise(t, r);
				}
				function uponRejection(t, r) {
					uponPromise(t, void 0, r);
				}
				function transformPromiseWith(t, r, a) {
					return PerformPromiseThen(t, r, a);
				}
				function setPromiseIsHandledToTrue(t) {
					PerformPromiseThen(t, void 0, o);
				}
				var d = 16384,
					h = (function () {
						function SimpleQueue() {
							(this._cursor = 0),
								(this._size = 0),
								(this._front = { _elements: [], _next: void 0 }),
								(this._back = this._front),
								(this._cursor = 0),
								(this._size = 0);
						}
						return (
							Object.defineProperty(SimpleQueue.prototype, "length", {
								get: function () {
									return this._size;
								},
								enumerable: !0,
								configurable: !0,
							}),
							(SimpleQueue.prototype.push = function (t) {
								var r = this._back,
									a = r;
								r._elements.length === d - 1 && (a = { _elements: [], _next: void 0 }),
									r._elements.push(t),
									a !== r && ((this._back = a), (r._next = a)),
									++this._size;
							}),
							(SimpleQueue.prototype.shift = function () {
								var t = this._front,
									r = t,
									a = this._cursor,
									o = a + 1,
									i = t._elements,
									l = i[a];
								return (
									o === d && ((r = t._next), (o = 0)),
									--this._size,
									(this._cursor = o),
									t !== r && (this._front = r),
									(i[a] = void 0),
									l
								);
							}),
							(SimpleQueue.prototype.forEach = function (t) {
								for (
									var r = this._cursor, a = this._front, o = a._elements;
									!(
										(r === o.length && void 0 === a._next) ||
										(r === o.length && ((r = 0), 0 === (o = (a = a._next)._elements).length))
									);

								)
									t(o[r]), ++r;
							}),
							(SimpleQueue.prototype.peek = function () {
								var t = this._front,
									r = this._cursor;
								return t._elements[r];
							}),
							SimpleQueue
						);
					})();
				function ReadableStreamCreateReadResult(t, r, a) {
					var o = null;
					!0 === a && (o = Object.prototype);
					var i = Object.create(o);
					return (i.value = t), (i.done = r), i;
				}
				function ReadableStreamReaderGenericInitialize(t, r) {
					(t._forAuthorCode = !0),
						(t._ownerReadableStream = r),
						(r._reader = t),
						"readable" === r._state
							? defaultReaderClosedPromiseInitialize(t)
							: "closed" === r._state
							? defaultReaderClosedPromiseInitializeAsResolved(t)
							: defaultReaderClosedPromiseInitializeAsRejected(t, r._storedError);
				}
				function ReadableStreamReaderGenericCancel(t, r) {
					return ReadableStreamCancel(t._ownerReadableStream, r);
				}
				function ReadableStreamReaderGenericRelease(t) {
					"readable" === t._ownerReadableStream._state
						? defaultReaderClosedPromiseReject(
								t,
								new TypeError(
									"Reader was released and can no longer be used to monitor the stream's closedness"
								)
						  )
						: defaultReaderClosedPromiseResetToRejected(
								t,
								new TypeError(
									"Reader was released and can no longer be used to monitor the stream's closedness"
								)
						  ),
						(t._ownerReadableStream._reader = void 0),
						(t._ownerReadableStream = void 0);
				}
				function readerLockException(t) {
					return new TypeError("Cannot " + t + " a stream using a released reader");
				}
				function defaultReaderClosedPromiseInitialize(t) {
					t._closedPromise = newPromise(function (r, a) {
						(t._closedPromise_resolve = r), (t._closedPromise_reject = a);
					});
				}
				function defaultReaderClosedPromiseInitializeAsRejected(t, r) {
					defaultReaderClosedPromiseInitialize(t), defaultReaderClosedPromiseReject(t, r);
				}
				function defaultReaderClosedPromiseInitializeAsResolved(t) {
					defaultReaderClosedPromiseInitialize(t), defaultReaderClosedPromiseResolve(t);
				}
				function defaultReaderClosedPromiseReject(t, r) {
					setPromiseIsHandledToTrue(t._closedPromise),
						t._closedPromise_reject(r),
						(t._closedPromise_resolve = void 0),
						(t._closedPromise_reject = void 0);
				}
				function defaultReaderClosedPromiseResetToRejected(t, r) {
					defaultReaderClosedPromiseInitializeAsRejected(t, r);
				}
				function defaultReaderClosedPromiseResolve(t) {
					t._closedPromise_resolve(void 0),
						(t._closedPromise_resolve = void 0),
						(t._closedPromise_reject = void 0);
				}
				var p = r("[[CancelSteps]]"),
					m = r("[[PullSteps]]");
				function AcquireReadableStreamDefaultReader(t, r) {
					void 0 === r && (r = !1);
					var a = new y(t);
					return (a._forAuthorCode = r), a;
				}
				function ReadableStreamAddReadRequest(t) {
					return newPromise(function (r, a) {
						var o = { _resolve: r, _reject: a };
						t._reader._readRequests.push(o);
					});
				}
				function ReadableStreamFulfillReadRequest(t, r, a) {
					var o = t._reader;
					o._readRequests.shift()._resolve(ReadableStreamCreateReadResult(r, a, o._forAuthorCode));
				}
				function ReadableStreamGetNumReadRequests(t) {
					return t._reader._readRequests.length;
				}
				function ReadableStreamHasDefaultReader(t) {
					var r = t._reader;
					return void 0 !== r && !!IsReadableStreamDefaultReader(r);
				}
				var v,
					g,
					y = (function () {
						function ReadableStreamDefaultReader(t) {
							if (!1 === IsReadableStream(t))
								throw new TypeError(
									"ReadableStreamDefaultReader can only be constructed with a ReadableStream instance"
								);
							if (!0 === IsReadableStreamLocked(t))
								throw new TypeError(
									"This stream has already been locked for exclusive reading by another reader"
								);
							ReadableStreamReaderGenericInitialize(this, t), (this._readRequests = new h());
						}
						return (
							Object.defineProperty(ReadableStreamDefaultReader.prototype, "closed", {
								get: function () {
									return IsReadableStreamDefaultReader(this)
										? this._closedPromise
										: promiseRejectedWith(defaultReaderBrandCheckException("closed"));
								},
								enumerable: !0,
								configurable: !0,
							}),
							(ReadableStreamDefaultReader.prototype.cancel = function (t) {
								return IsReadableStreamDefaultReader(this)
									? void 0 === this._ownerReadableStream
										? promiseRejectedWith(readerLockException("cancel"))
										: ReadableStreamReaderGenericCancel(this, t)
									: promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
							}),
							(ReadableStreamDefaultReader.prototype.read = function () {
								return IsReadableStreamDefaultReader(this)
									? void 0 === this._ownerReadableStream
										? promiseRejectedWith(readerLockException("read from"))
										: ReadableStreamDefaultReaderRead(this)
									: promiseRejectedWith(defaultReaderBrandCheckException("read"));
							}),
							(ReadableStreamDefaultReader.prototype.releaseLock = function () {
								if (!IsReadableStreamDefaultReader(this))
									throw defaultReaderBrandCheckException("releaseLock");
								if (void 0 !== this._ownerReadableStream) {
									if (this._readRequests.length > 0)
										throw new TypeError(
											"Tried to release a reader lock when that reader has pending read() calls un-settled"
										);
									ReadableStreamReaderGenericRelease(this);
								}
							}),
							ReadableStreamDefaultReader
						);
					})();
				function IsReadableStreamDefaultReader(t) {
					return !!typeIsObject(t) && !!Object.prototype.hasOwnProperty.call(t, "_readRequests");
				}
				function ReadableStreamDefaultReaderRead(t) {
					var r = t._ownerReadableStream;
					return (
						(r._disturbed = !0),
						"closed" === r._state
							? promiseResolvedWith(ReadableStreamCreateReadResult(void 0, !0, t._forAuthorCode))
							: "errored" === r._state
							? promiseRejectedWith(r._storedError)
							: r._readableStreamController[m]()
					);
				}
				function defaultReaderBrandCheckException(t) {
					return new TypeError(
						"ReadableStreamDefaultReader.prototype." +
							t +
							" can only be used on a ReadableStreamDefaultReader"
					);
				}
				"symbol" == typeof r.asyncIterator &&
					(((v = {})[r.asyncIterator] = function () {
						return this;
					}),
					(g = v),
					Object.defineProperty(g, r.asyncIterator, { enumerable: !1 }));
				var b = {
					next: function () {
						if (!1 === IsReadableStreamAsyncIterator(this))
							return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
						var t = this._asyncIteratorReader;
						return void 0 === t._ownerReadableStream
							? promiseRejectedWith(readerLockException("iterate"))
							: transformPromiseWith(ReadableStreamDefaultReaderRead(t), function (r) {
									var a = r.done;
									return (
										a && ReadableStreamReaderGenericRelease(t),
										ReadableStreamCreateReadResult(r.value, a, !0)
									);
							  });
					},
					return: function (t) {
						if (!1 === IsReadableStreamAsyncIterator(this))
							return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
						var r = this._asyncIteratorReader;
						if (void 0 === r._ownerReadableStream)
							return promiseRejectedWith(readerLockException("finish iterating"));
						if (r._readRequests.length > 0)
							return promiseRejectedWith(
								new TypeError(
									"Tried to release a reader lock when that reader has pending read() calls un-settled"
								)
							);
						if (!1 === this._preventCancel) {
							var a = ReadableStreamReaderGenericCancel(r, t);
							return (
								ReadableStreamReaderGenericRelease(r),
								transformPromiseWith(a, function () {
									return ReadableStreamCreateReadResult(t, !0, !0);
								})
							);
						}
						return (
							ReadableStreamReaderGenericRelease(r),
							promiseResolvedWith(ReadableStreamCreateReadResult(t, !0, !0))
						);
					},
				};
				function AcquireReadableStreamAsyncIterator(t, r) {
					void 0 === r && (r = !1);
					var a = AcquireReadableStreamDefaultReader(t),
						o = Object.create(b);
					return (o._asyncIteratorReader = a), (o._preventCancel = Boolean(r)), o;
				}
				function IsReadableStreamAsyncIterator(t) {
					return !!typeIsObject(t) && !!Object.prototype.hasOwnProperty.call(t, "_asyncIteratorReader");
				}
				function streamAsyncIteratorBrandCheckException(t) {
					return new TypeError(
						"ReadableStreamAsyncIterator." + t + " can only be used on a ReadableSteamAsyncIterator"
					);
				}
				function DequeueValue(t) {
					var r = t._queue.shift();
					return (t._queueTotalSize -= r.size), t._queueTotalSize < 0 && (t._queueTotalSize = 0), r.value;
				}
				function EnqueueValueWithSize(t, r, a) {
					if (!IsFiniteNonNegativeNumber((a = Number(a))))
						throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
					t._queue.push({ value: r, size: a }), (t._queueTotalSize += a);
				}
				function PeekQueueValue(t) {
					return t._queue.peek().value;
				}
				function ResetQueue(t) {
					(t._queue = new h()), (t._queueTotalSize = 0);
				}
				void 0 !== g && Object.setPrototypeOf(b, g),
					Object.defineProperty(b, "next", { enumerable: !1 }),
					Object.defineProperty(b, "return", { enumerable: !1 });
				var _ = r("[[AbortSteps]]"),
					S = r("[[ErrorSteps]]"),
					A = (function () {
						function WritableStream(t, r) {
							void 0 === t && (t = {}), void 0 === r && (r = {}), InitializeWritableStream(this);
							var a = r.size,
								o = r.highWaterMark;
							if (void 0 !== t.type) throw new RangeError("Invalid type is specified");
							var i = MakeSizeAlgorithmFromSizeFunction(a);
							void 0 === o && (o = 1),
								SetUpWritableStreamDefaultControllerFromUnderlyingSink(
									this,
									t,
									(o = ValidateAndNormalizeHighWaterMark(o)),
									i
								);
						}
						return (
							Object.defineProperty(WritableStream.prototype, "locked", {
								get: function () {
									if (!1 === IsWritableStream(this)) throw streamBrandCheckException("locked");
									return IsWritableStreamLocked(this);
								},
								enumerable: !0,
								configurable: !0,
							}),
							(WritableStream.prototype.abort = function (t) {
								return !1 === IsWritableStream(this)
									? promiseRejectedWith(streamBrandCheckException("abort"))
									: !0 === IsWritableStreamLocked(this)
									? promiseRejectedWith(
											new TypeError("Cannot abort a stream that already has a writer")
									  )
									: WritableStreamAbort(this, t);
							}),
							(WritableStream.prototype.close = function () {
								return !1 === IsWritableStream(this)
									? promiseRejectedWith(streamBrandCheckException("close"))
									: !0 === IsWritableStreamLocked(this)
									? promiseRejectedWith(
											new TypeError("Cannot close a stream that already has a writer")
									  )
									: !0 === WritableStreamCloseQueuedOrInFlight(this)
									? promiseRejectedWith(new TypeError("Cannot close an already-closing stream"))
									: WritableStreamClose(this);
							}),
							(WritableStream.prototype.getWriter = function () {
								if (!1 === IsWritableStream(this)) throw streamBrandCheckException("getWriter");
								return AcquireWritableStreamDefaultWriter(this);
							}),
							WritableStream
						);
					})();
				function AcquireWritableStreamDefaultWriter(t) {
					return new C(t);
				}
				function CreateWritableStream(t, r, a, o, i, l) {
					void 0 === i && (i = 1),
						void 0 === l &&
							(l = function () {
								return 1;
							});
					var u = Object.create(A.prototype);
					return (
						InitializeWritableStream(u),
						SetUpWritableStreamDefaultController(u, Object.create(R.prototype), t, r, a, o, i, l),
						u
					);
				}
				function InitializeWritableStream(t) {
					(t._state = "writable"),
						(t._storedError = void 0),
						(t._writer = void 0),
						(t._writableStreamController = void 0),
						(t._writeRequests = new h()),
						(t._inFlightWriteRequest = void 0),
						(t._closeRequest = void 0),
						(t._inFlightCloseRequest = void 0),
						(t._pendingAbortRequest = void 0),
						(t._backpressure = !1);
				}
				function IsWritableStream(t) {
					return !!typeIsObject(t) && !!Object.prototype.hasOwnProperty.call(t, "_writableStreamController");
				}
				function IsWritableStreamLocked(t) {
					return void 0 !== t._writer;
				}
				function WritableStreamAbort(t, r) {
					var a = t._state;
					if ("closed" === a || "errored" === a) return promiseResolvedWith(void 0);
					if (void 0 !== t._pendingAbortRequest) return t._pendingAbortRequest._promise;
					var o = !1;
					"erroring" === a && ((o = !0), (r = void 0));
					var i = newPromise(function (a, i) {
						t._pendingAbortRequest = {
							_promise: void 0,
							_resolve: a,
							_reject: i,
							_reason: r,
							_wasAlreadyErroring: o,
						};
					});
					return (t._pendingAbortRequest._promise = i), !1 === o && WritableStreamStartErroring(t, r), i;
				}
				function WritableStreamClose(t) {
					var r = t._state;
					if ("closed" === r || "errored" === r)
						return promiseRejectedWith(
							new TypeError(
								"The stream (in " + r + " state) is not in the writable state and cannot be closed"
							)
						);
					var a = newPromise(function (r, a) {
							var o = { _resolve: r, _reject: a };
							t._closeRequest = o;
						}),
						o = t._writer;
					return (
						void 0 !== o &&
							!0 === t._backpressure &&
							"writable" === r &&
							defaultWriterReadyPromiseResolve(o),
						WritableStreamDefaultControllerClose(t._writableStreamController),
						a
					);
				}
				function WritableStreamAddWriteRequest(t) {
					return newPromise(function (r, a) {
						var o = { _resolve: r, _reject: a };
						t._writeRequests.push(o);
					});
				}
				function WritableStreamDealWithRejection(t, r) {
					"writable" !== t._state ? WritableStreamFinishErroring(t) : WritableStreamStartErroring(t, r);
				}
				function WritableStreamStartErroring(t, r) {
					var a = t._writableStreamController;
					(t._state = "erroring"), (t._storedError = r);
					var o = t._writer;
					void 0 !== o && WritableStreamDefaultWriterEnsureReadyPromiseRejected(o, r),
						!1 === WritableStreamHasOperationMarkedInFlight(t) &&
							!0 === a._started &&
							WritableStreamFinishErroring(t);
				}
				function WritableStreamFinishErroring(t) {
					(t._state = "errored"), t._writableStreamController[S]();
					var r = t._storedError;
					if (
						(t._writeRequests.forEach(function (t) {
							t._reject(r);
						}),
						(t._writeRequests = new h()),
						void 0 !== t._pendingAbortRequest)
					) {
						var a = t._pendingAbortRequest;
						if (((t._pendingAbortRequest = void 0), !0 === a._wasAlreadyErroring))
							return a._reject(r), void WritableStreamRejectCloseAndClosedPromiseIfNeeded(t);
						uponPromise(
							t._writableStreamController[_](a._reason),
							function () {
								a._resolve(), WritableStreamRejectCloseAndClosedPromiseIfNeeded(t);
							},
							function (r) {
								a._reject(r), WritableStreamRejectCloseAndClosedPromiseIfNeeded(t);
							}
						);
					} else WritableStreamRejectCloseAndClosedPromiseIfNeeded(t);
				}
				function WritableStreamFinishInFlightWrite(t) {
					t._inFlightWriteRequest._resolve(void 0), (t._inFlightWriteRequest = void 0);
				}
				function WritableStreamFinishInFlightWriteWithError(t, r) {
					t._inFlightWriteRequest._reject(r),
						(t._inFlightWriteRequest = void 0),
						WritableStreamDealWithRejection(t, r);
				}
				function WritableStreamFinishInFlightClose(t) {
					t._inFlightCloseRequest._resolve(void 0),
						(t._inFlightCloseRequest = void 0),
						"erroring" === t._state &&
							((t._storedError = void 0),
							void 0 !== t._pendingAbortRequest &&
								(t._pendingAbortRequest._resolve(), (t._pendingAbortRequest = void 0))),
						(t._state = "closed");
					var r = t._writer;
					void 0 !== r && defaultWriterClosedPromiseResolve(r);
				}
				function WritableStreamFinishInFlightCloseWithError(t, r) {
					t._inFlightCloseRequest._reject(r),
						(t._inFlightCloseRequest = void 0),
						void 0 !== t._pendingAbortRequest &&
							(t._pendingAbortRequest._reject(r), (t._pendingAbortRequest = void 0)),
						WritableStreamDealWithRejection(t, r);
				}
				function WritableStreamCloseQueuedOrInFlight(t) {
					return void 0 !== t._closeRequest || void 0 !== t._inFlightCloseRequest;
				}
				function WritableStreamHasOperationMarkedInFlight(t) {
					return void 0 !== t._inFlightWriteRequest || void 0 !== t._inFlightCloseRequest;
				}
				function WritableStreamMarkCloseRequestInFlight(t) {
					(t._inFlightCloseRequest = t._closeRequest), (t._closeRequest = void 0);
				}
				function WritableStreamMarkFirstWriteRequestInFlight(t) {
					t._inFlightWriteRequest = t._writeRequests.shift();
				}
				function WritableStreamRejectCloseAndClosedPromiseIfNeeded(t) {
					void 0 !== t._closeRequest && (t._closeRequest._reject(t._storedError), (t._closeRequest = void 0));
					var r = t._writer;
					void 0 !== r && defaultWriterClosedPromiseReject(r, t._storedError);
				}
				function WritableStreamUpdateBackpressure(t, r) {
					var a = t._writer;
					void 0 !== a &&
						r !== t._backpressure &&
						(!0 === r ? defaultWriterReadyPromiseReset(a) : defaultWriterReadyPromiseResolve(a)),
						(t._backpressure = r);
				}
				var C = (function () {
					function WritableStreamDefaultWriter(t) {
						if (!1 === IsWritableStream(t))
							throw new TypeError(
								"WritableStreamDefaultWriter can only be constructed with a WritableStream instance"
							);
						if (!0 === IsWritableStreamLocked(t))
							throw new TypeError(
								"This stream has already been locked for exclusive writing by another writer"
							);
						(this._ownerWritableStream = t), (t._writer = this);
						var r = t._state;
						if ("writable" === r)
							!1 === WritableStreamCloseQueuedOrInFlight(t) && !0 === t._backpressure
								? defaultWriterReadyPromiseInitialize(this)
								: defaultWriterReadyPromiseInitializeAsResolved(this),
								defaultWriterClosedPromiseInitialize(this);
						else if ("erroring" === r)
							defaultWriterReadyPromiseInitializeAsRejected(this, t._storedError),
								defaultWriterClosedPromiseInitialize(this);
						else if ("closed" === r)
							defaultWriterReadyPromiseInitializeAsResolved(this),
								defaultWriterClosedPromiseInitializeAsResolved(this);
						else {
							var a = t._storedError;
							defaultWriterReadyPromiseInitializeAsRejected(this, a),
								defaultWriterClosedPromiseInitializeAsRejected(this, a);
						}
					}
					return (
						Object.defineProperty(WritableStreamDefaultWriter.prototype, "closed", {
							get: function () {
								return !1 === IsWritableStreamDefaultWriter(this)
									? promiseRejectedWith(defaultWriterBrandCheckException("closed"))
									: this._closedPromise;
							},
							enumerable: !0,
							configurable: !0,
						}),
						Object.defineProperty(WritableStreamDefaultWriter.prototype, "desiredSize", {
							get: function () {
								if (!1 === IsWritableStreamDefaultWriter(this))
									throw defaultWriterBrandCheckException("desiredSize");
								if (void 0 === this._ownerWritableStream)
									throw defaultWriterLockException("desiredSize");
								return WritableStreamDefaultWriterGetDesiredSize(this);
							},
							enumerable: !0,
							configurable: !0,
						}),
						Object.defineProperty(WritableStreamDefaultWriter.prototype, "ready", {
							get: function () {
								return !1 === IsWritableStreamDefaultWriter(this)
									? promiseRejectedWith(defaultWriterBrandCheckException("ready"))
									: this._readyPromise;
							},
							enumerable: !0,
							configurable: !0,
						}),
						(WritableStreamDefaultWriter.prototype.abort = function (t) {
							return !1 === IsWritableStreamDefaultWriter(this)
								? promiseRejectedWith(defaultWriterBrandCheckException("abort"))
								: void 0 === this._ownerWritableStream
								? promiseRejectedWith(defaultWriterLockException("abort"))
								: WritableStreamDefaultWriterAbort(this, t);
						}),
						(WritableStreamDefaultWriter.prototype.close = function () {
							if (!1 === IsWritableStreamDefaultWriter(this))
								return promiseRejectedWith(defaultWriterBrandCheckException("close"));
							var t = this._ownerWritableStream;
							return void 0 === t
								? promiseRejectedWith(defaultWriterLockException("close"))
								: !0 === WritableStreamCloseQueuedOrInFlight(t)
								? promiseRejectedWith(new TypeError("Cannot close an already-closing stream"))
								: WritableStreamDefaultWriterClose(this);
						}),
						(WritableStreamDefaultWriter.prototype.releaseLock = function () {
							if (!1 === IsWritableStreamDefaultWriter(this))
								throw defaultWriterBrandCheckException("releaseLock");
							void 0 !== this._ownerWritableStream && WritableStreamDefaultWriterRelease(this);
						}),
						(WritableStreamDefaultWriter.prototype.write = function (t) {
							return !1 === IsWritableStreamDefaultWriter(this)
								? promiseRejectedWith(defaultWriterBrandCheckException("write"))
								: void 0 === this._ownerWritableStream
								? promiseRejectedWith(defaultWriterLockException("write to"))
								: WritableStreamDefaultWriterWrite(this, t);
						}),
						WritableStreamDefaultWriter
					);
				})();
				function IsWritableStreamDefaultWriter(t) {
					return !!typeIsObject(t) && !!Object.prototype.hasOwnProperty.call(t, "_ownerWritableStream");
				}
				function WritableStreamDefaultWriterAbort(t, r) {
					return WritableStreamAbort(t._ownerWritableStream, r);
				}
				function WritableStreamDefaultWriterClose(t) {
					return WritableStreamClose(t._ownerWritableStream);
				}
				function WritableStreamDefaultWriterCloseWithErrorPropagation(t) {
					var r = t._ownerWritableStream,
						a = r._state;
					return !0 === WritableStreamCloseQueuedOrInFlight(r) || "closed" === a
						? promiseResolvedWith(void 0)
						: "errored" === a
						? promiseRejectedWith(r._storedError)
						: WritableStreamDefaultWriterClose(t);
				}
				function WritableStreamDefaultWriterEnsureClosedPromiseRejected(t, r) {
					"pending" === t._closedPromiseState
						? defaultWriterClosedPromiseReject(t, r)
						: defaultWriterClosedPromiseResetToRejected(t, r);
				}
				function WritableStreamDefaultWriterEnsureReadyPromiseRejected(t, r) {
					"pending" === t._readyPromiseState
						? defaultWriterReadyPromiseReject(t, r)
						: defaultWriterReadyPromiseResetToRejected(t, r);
				}
				function WritableStreamDefaultWriterGetDesiredSize(t) {
					var r = t._ownerWritableStream,
						a = r._state;
					return "errored" === a || "erroring" === a
						? null
						: "closed" === a
						? 0
						: WritableStreamDefaultControllerGetDesiredSize(r._writableStreamController);
				}
				function WritableStreamDefaultWriterRelease(t) {
					var r = t._ownerWritableStream,
						a = new TypeError(
							"Writer was released and can no longer be used to monitor the stream's closedness"
						);
					WritableStreamDefaultWriterEnsureReadyPromiseRejected(t, a),
						WritableStreamDefaultWriterEnsureClosedPromiseRejected(t, a),
						(r._writer = void 0),
						(t._ownerWritableStream = void 0);
				}
				function WritableStreamDefaultWriterWrite(t, r) {
					var a = t._ownerWritableStream,
						o = a._writableStreamController,
						i = WritableStreamDefaultControllerGetChunkSize(o, r);
					if (a !== t._ownerWritableStream)
						return promiseRejectedWith(defaultWriterLockException("write to"));
					var l = a._state;
					if ("errored" === l) return promiseRejectedWith(a._storedError);
					if (!0 === WritableStreamCloseQueuedOrInFlight(a) || "closed" === l)
						return promiseRejectedWith(
							new TypeError("The stream is closing or closed and cannot be written to")
						);
					if ("erroring" === l) return promiseRejectedWith(a._storedError);
					var u = WritableStreamAddWriteRequest(a);
					return WritableStreamDefaultControllerWrite(o, r, i), u;
				}
				var R = (function () {
					function WritableStreamDefaultController() {
						throw new TypeError("WritableStreamDefaultController cannot be constructed explicitly");
					}
					return (
						(WritableStreamDefaultController.prototype.error = function (t) {
							if (!1 === IsWritableStreamDefaultController(this))
								throw new TypeError(
									"WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController"
								);
							"writable" === this._controlledWritableStream._state &&
								WritableStreamDefaultControllerError(this, t);
						}),
						(WritableStreamDefaultController.prototype[_] = function (t) {
							var r = this._abortAlgorithm(t);
							return WritableStreamDefaultControllerClearAlgorithms(this), r;
						}),
						(WritableStreamDefaultController.prototype[S] = function () {
							ResetQueue(this);
						}),
						WritableStreamDefaultController
					);
				})();
				function IsWritableStreamDefaultController(t) {
					return !!typeIsObject(t) && !!Object.prototype.hasOwnProperty.call(t, "_controlledWritableStream");
				}
				function SetUpWritableStreamDefaultController(t, r, a, o, i, l, u, c) {
					(r._controlledWritableStream = t),
						(t._writableStreamController = r),
						(r._queue = void 0),
						(r._queueTotalSize = void 0),
						ResetQueue(r),
						(r._started = !1),
						(r._strategySizeAlgorithm = c),
						(r._strategyHWM = u),
						(r._writeAlgorithm = o),
						(r._closeAlgorithm = i),
						(r._abortAlgorithm = l);
					var d = WritableStreamDefaultControllerGetBackpressure(r);
					WritableStreamUpdateBackpressure(t, d),
						uponPromise(
							promiseResolvedWith(a()),
							function () {
								(r._started = !0), WritableStreamDefaultControllerAdvanceQueueIfNeeded(r);
							},
							function (a) {
								(r._started = !0), WritableStreamDealWithRejection(t, a);
							}
						);
				}
				function SetUpWritableStreamDefaultControllerFromUnderlyingSink(t, r, a, o) {
					var i = Object.create(R.prototype);
					function startAlgorithm() {
						return InvokeOrNoop(r, "start", [i]);
					}
					var l = CreateAlgorithmFromUnderlyingMethod(r, "write", 1, [i]),
						u = CreateAlgorithmFromUnderlyingMethod(r, "close", 0, []),
						c = CreateAlgorithmFromUnderlyingMethod(r, "abort", 1, []);
					SetUpWritableStreamDefaultController(t, i, startAlgorithm, l, u, c, a, o);
				}
				function WritableStreamDefaultControllerClearAlgorithms(t) {
					(t._writeAlgorithm = void 0),
						(t._closeAlgorithm = void 0),
						(t._abortAlgorithm = void 0),
						(t._strategySizeAlgorithm = void 0);
				}
				function WritableStreamDefaultControllerClose(t) {
					EnqueueValueWithSize(t, "close", 0), WritableStreamDefaultControllerAdvanceQueueIfNeeded(t);
				}
				function WritableStreamDefaultControllerGetChunkSize(t, r) {
					try {
						return t._strategySizeAlgorithm(r);
					} catch (r) {
						return WritableStreamDefaultControllerErrorIfNeeded(t, r), 1;
					}
				}
				function WritableStreamDefaultControllerGetDesiredSize(t) {
					return t._strategyHWM - t._queueTotalSize;
				}
				function WritableStreamDefaultControllerWrite(t, r, a) {
					var o = { chunk: r };
					try {
						EnqueueValueWithSize(t, o, a);
					} catch (r) {
						return void WritableStreamDefaultControllerErrorIfNeeded(t, r);
					}
					var i = t._controlledWritableStream;
					!1 === WritableStreamCloseQueuedOrInFlight(i) &&
						"writable" === i._state &&
						WritableStreamUpdateBackpressure(i, WritableStreamDefaultControllerGetBackpressure(t)),
						WritableStreamDefaultControllerAdvanceQueueIfNeeded(t);
				}
				function WritableStreamDefaultControllerAdvanceQueueIfNeeded(t) {
					var r = t._controlledWritableStream;
					if (!1 !== t._started && void 0 === r._inFlightWriteRequest)
						if ("erroring" !== r._state) {
							if (0 !== t._queue.length) {
								var a = PeekQueueValue(t);
								"close" === a
									? WritableStreamDefaultControllerProcessClose(t)
									: WritableStreamDefaultControllerProcessWrite(t, a.chunk);
							}
						} else WritableStreamFinishErroring(r);
				}
				function WritableStreamDefaultControllerErrorIfNeeded(t, r) {
					"writable" === t._controlledWritableStream._state && WritableStreamDefaultControllerError(t, r);
				}
				function WritableStreamDefaultControllerProcessClose(t) {
					var r = t._controlledWritableStream;
					WritableStreamMarkCloseRequestInFlight(r), DequeueValue(t);
					var a = t._closeAlgorithm();
					WritableStreamDefaultControllerClearAlgorithms(t),
						uponPromise(
							a,
							function () {
								WritableStreamFinishInFlightClose(r);
							},
							function (t) {
								WritableStreamFinishInFlightCloseWithError(r, t);
							}
						);
				}
				function WritableStreamDefaultControllerProcessWrite(t, r) {
					var a = t._controlledWritableStream;
					WritableStreamMarkFirstWriteRequestInFlight(a),
						uponPromise(
							t._writeAlgorithm(r),
							function () {
								WritableStreamFinishInFlightWrite(a);
								var r = a._state;
								if (
									(DequeueValue(t), !1 === WritableStreamCloseQueuedOrInFlight(a) && "writable" === r)
								) {
									var o = WritableStreamDefaultControllerGetBackpressure(t);
									WritableStreamUpdateBackpressure(a, o);
								}
								WritableStreamDefaultControllerAdvanceQueueIfNeeded(t);
							},
							function (r) {
								"writable" === a._state && WritableStreamDefaultControllerClearAlgorithms(t),
									WritableStreamFinishInFlightWriteWithError(a, r);
							}
						);
				}
				function WritableStreamDefaultControllerGetBackpressure(t) {
					return WritableStreamDefaultControllerGetDesiredSize(t) <= 0;
				}
				function WritableStreamDefaultControllerError(t, r) {
					var a = t._controlledWritableStream;
					WritableStreamDefaultControllerClearAlgorithms(t), WritableStreamStartErroring(a, r);
				}
				function streamBrandCheckException(t) {
					return new TypeError("WritableStream.prototype." + t + " can only be used on a WritableStream");
				}
				function defaultWriterBrandCheckException(t) {
					return new TypeError(
						"WritableStreamDefaultWriter.prototype." +
							t +
							" can only be used on a WritableStreamDefaultWriter"
					);
				}
				function defaultWriterLockException(t) {
					return new TypeError("Cannot " + t + " a stream using a released writer");
				}
				function defaultWriterClosedPromiseInitialize(t) {
					t._closedPromise = newPromise(function (r, a) {
						(t._closedPromise_resolve = r),
							(t._closedPromise_reject = a),
							(t._closedPromiseState = "pending");
					});
				}
				function defaultWriterClosedPromiseInitializeAsRejected(t, r) {
					defaultWriterClosedPromiseInitialize(t), defaultWriterClosedPromiseReject(t, r);
				}
				function defaultWriterClosedPromiseInitializeAsResolved(t) {
					defaultWriterClosedPromiseInitialize(t), defaultWriterClosedPromiseResolve(t);
				}
				function defaultWriterClosedPromiseReject(t, r) {
					setPromiseIsHandledToTrue(t._closedPromise),
						t._closedPromise_reject(r),
						(t._closedPromise_resolve = void 0),
						(t._closedPromise_reject = void 0),
						(t._closedPromiseState = "rejected");
				}
				function defaultWriterClosedPromiseResetToRejected(t, r) {
					defaultWriterClosedPromiseInitializeAsRejected(t, r);
				}
				function defaultWriterClosedPromiseResolve(t) {
					t._closedPromise_resolve(void 0),
						(t._closedPromise_resolve = void 0),
						(t._closedPromise_reject = void 0),
						(t._closedPromiseState = "resolved");
				}
				function defaultWriterReadyPromiseInitialize(t) {
					(t._readyPromise = newPromise(function (r, a) {
						(t._readyPromise_resolve = r), (t._readyPromise_reject = a);
					})),
						(t._readyPromiseState = "pending");
				}
				function defaultWriterReadyPromiseInitializeAsRejected(t, r) {
					defaultWriterReadyPromiseInitialize(t), defaultWriterReadyPromiseReject(t, r);
				}
				function defaultWriterReadyPromiseInitializeAsResolved(t) {
					defaultWriterReadyPromiseInitialize(t), defaultWriterReadyPromiseResolve(t);
				}
				function defaultWriterReadyPromiseReject(t, r) {
					setPromiseIsHandledToTrue(t._readyPromise),
						t._readyPromise_reject(r),
						(t._readyPromise_resolve = void 0),
						(t._readyPromise_reject = void 0),
						(t._readyPromiseState = "rejected");
				}
				function defaultWriterReadyPromiseReset(t) {
					defaultWriterReadyPromiseInitialize(t);
				}
				function defaultWriterReadyPromiseResetToRejected(t, r) {
					defaultWriterReadyPromiseInitializeAsRejected(t, r);
				}
				function defaultWriterReadyPromiseResolve(t) {
					t._readyPromise_resolve(void 0),
						(t._readyPromise_resolve = void 0),
						(t._readyPromise_reject = void 0),
						(t._readyPromiseState = "fulfilled");
				}
				function isAbortSignal(t) {
					if ("object" != typeof t || null === t) return !1;
					try {
						return "boolean" == typeof t.aborted;
					} catch (t) {
						return !1;
					}
				}
				var k = "undefined" != typeof DOMException ? DOMException : void 0;
				function isDOMExceptionConstructor(t) {
					if ("function" != typeof t && "object" != typeof t) return !1;
					try {
						return new t(), !0;
					} catch (t) {
						return !1;
					}
				}
				function createDOMExceptionPolyfill() {
					var t = function DOMException(t, r) {
						(this.message = t || ""),
							(this.name = r || "Error"),
							Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
					};
					return (
						(t.prototype = Object.create(Error.prototype)),
						Object.defineProperty(t.prototype, "constructor", { value: t, writable: !0, configurable: !0 }),
						t
					);
				}
				var P = isDOMExceptionConstructor(k) ? k : createDOMExceptionPolyfill();
				function ReadableStreamPipeTo(t, r, a, o, i, l) {
					var u = AcquireReadableStreamDefaultReader(t),
						c = AcquireWritableStreamDefaultWriter(r);
					t._disturbed = !0;
					var d = !1,
						h = promiseResolvedWith(void 0);
					return newPromise(function (p, m) {
						var v;
						if (void 0 !== l) {
							if (
								((v = function () {
									var a = new P("Aborted", "AbortError"),
										l = [];
									!1 === o &&
										l.push(function () {
											return "writable" === r._state
												? WritableStreamAbort(r, a)
												: promiseResolvedWith(void 0);
										}),
										!1 === i &&
											l.push(function () {
												return "readable" === t._state
													? ReadableStreamCancel(t, a)
													: promiseResolvedWith(void 0);
											}),
										shutdownWithAction(
											function () {
												return Promise.all(
													l.map(function (t) {
														return t();
													})
												);
											},
											!0,
											a
										);
								}),
								!0 === l.aborted)
							)
								return void v();
							l.addEventListener("abort", v);
						}
						function pipeLoop() {
							return newPromise(function (t, r) {
								function next(a) {
									a ? t() : PerformPromiseThen(pipeStep(), next, r);
								}
								next(!1);
							});
						}
						function pipeStep() {
							return !0 === d
								? promiseResolvedWith(!0)
								: PerformPromiseThen(c._readyPromise, function () {
										return PerformPromiseThen(ReadableStreamDefaultReaderRead(u), function (t) {
											return (
												!0 === t.done ||
												((h = PerformPromiseThen(
													WritableStreamDefaultWriterWrite(c, t.value),
													void 0,
													noop
												)),
												!1)
											);
										});
								  });
						}
						if (
							(isOrBecomesErrored(t, u._closedPromise, function (t) {
								!1 === o
									? shutdownWithAction(
											function () {
												return WritableStreamAbort(r, t);
											},
											!0,
											t
									  )
									: shutdown(!0, t);
							}),
							isOrBecomesErrored(r, c._closedPromise, function (r) {
								!1 === i
									? shutdownWithAction(
											function () {
												return ReadableStreamCancel(t, r);
											},
											!0,
											r
									  )
									: shutdown(!0, r);
							}),
							isOrBecomesClosed(t, u._closedPromise, function () {
								!1 === a
									? shutdownWithAction(function () {
											return WritableStreamDefaultWriterCloseWithErrorPropagation(c);
									  })
									: shutdown();
							}),
							!0 === WritableStreamCloseQueuedOrInFlight(r) || "closed" === r._state)
						) {
							var g = new TypeError(
								"the destination writable stream closed before all data could be piped to it"
							);
							!1 === i
								? shutdownWithAction(
										function () {
											return ReadableStreamCancel(t, g);
										},
										!0,
										g
								  )
								: shutdown(!0, g);
						}
						function waitForWritesToFinish() {
							var t = h;
							return PerformPromiseThen(h, function () {
								return t !== h ? waitForWritesToFinish() : void 0;
							});
						}
						function isOrBecomesErrored(t, r, a) {
							"errored" === t._state ? a(t._storedError) : uponRejection(r, a);
						}
						function isOrBecomesClosed(t, r, a) {
							"closed" === t._state ? a() : uponFulfillment(r, a);
						}
						function shutdownWithAction(t, a, o) {
							function doTheRest() {
								uponPromise(
									t(),
									function () {
										return finalize(a, o);
									},
									function (t) {
										return finalize(!0, t);
									}
								);
							}
							!0 !== d &&
								((d = !0),
								"writable" === r._state && !1 === WritableStreamCloseQueuedOrInFlight(r)
									? uponFulfillment(waitForWritesToFinish(), doTheRest)
									: doTheRest());
						}
						function shutdown(t, a) {
							!0 !== d &&
								((d = !0),
								"writable" === r._state && !1 === WritableStreamCloseQueuedOrInFlight(r)
									? uponFulfillment(waitForWritesToFinish(), function () {
											return finalize(t, a);
									  })
									: finalize(t, a));
						}
						function finalize(t, r) {
							WritableStreamDefaultWriterRelease(c),
								ReadableStreamReaderGenericRelease(u),
								void 0 !== l && l.removeEventListener("abort", v),
								t ? m(r) : p(void 0);
						}
						setPromiseIsHandledToTrue(pipeLoop());
					});
				}
				var w = (function () {
					function ReadableStreamDefaultController() {
						throw new TypeError();
					}
					return (
						Object.defineProperty(ReadableStreamDefaultController.prototype, "desiredSize", {
							get: function () {
								if (!1 === IsReadableStreamDefaultController(this))
									throw defaultControllerBrandCheckException("desiredSize");
								return ReadableStreamDefaultControllerGetDesiredSize(this);
							},
							enumerable: !0,
							configurable: !0,
						}),
						(ReadableStreamDefaultController.prototype.close = function () {
							if (!1 === IsReadableStreamDefaultController(this))
								throw defaultControllerBrandCheckException("close");
							if (!1 === ReadableStreamDefaultControllerCanCloseOrEnqueue(this))
								throw new TypeError("The stream is not in a state that permits close");
							ReadableStreamDefaultControllerClose(this);
						}),
						(ReadableStreamDefaultController.prototype.enqueue = function (t) {
							if (!1 === IsReadableStreamDefaultController(this))
								throw defaultControllerBrandCheckException("enqueue");
							if (!1 === ReadableStreamDefaultControllerCanCloseOrEnqueue(this))
								throw new TypeError("The stream is not in a state that permits enqueue");
							return ReadableStreamDefaultControllerEnqueue(this, t);
						}),
						(ReadableStreamDefaultController.prototype.error = function (t) {
							if (!1 === IsReadableStreamDefaultController(this))
								throw defaultControllerBrandCheckException("error");
							ReadableStreamDefaultControllerError(this, t);
						}),
						(ReadableStreamDefaultController.prototype[p] = function (t) {
							ResetQueue(this);
							var r = this._cancelAlgorithm(t);
							return ReadableStreamDefaultControllerClearAlgorithms(this), r;
						}),
						(ReadableStreamDefaultController.prototype[m] = function () {
							var t = this._controlledReadableStream;
							if (this._queue.length > 0) {
								var r = DequeueValue(this);
								return (
									!0 === this._closeRequested && 0 === this._queue.length
										? (ReadableStreamDefaultControllerClearAlgorithms(this), ReadableStreamClose(t))
										: ReadableStreamDefaultControllerCallPullIfNeeded(this),
									promiseResolvedWith(ReadableStreamCreateReadResult(r, !1, t._reader._forAuthorCode))
								);
							}
							var a = ReadableStreamAddReadRequest(t);
							return ReadableStreamDefaultControllerCallPullIfNeeded(this), a;
						}),
						ReadableStreamDefaultController
					);
				})();
				function IsReadableStreamDefaultController(t) {
					return !!typeIsObject(t) && !!Object.prototype.hasOwnProperty.call(t, "_controlledReadableStream");
				}
				function ReadableStreamDefaultControllerCallPullIfNeeded(t) {
					!1 !== ReadableStreamDefaultControllerShouldCallPull(t) &&
						(!0 !== t._pulling
							? ((t._pulling = !0),
							  uponPromise(
									t._pullAlgorithm(),
									function () {
										(t._pulling = !1),
											!0 === t._pullAgain &&
												((t._pullAgain = !1),
												ReadableStreamDefaultControllerCallPullIfNeeded(t));
									},
									function (r) {
										ReadableStreamDefaultControllerError(t, r);
									}
							  ))
							: (t._pullAgain = !0));
				}
				function ReadableStreamDefaultControllerShouldCallPull(t) {
					var r = t._controlledReadableStream;
					return (
						!1 !== ReadableStreamDefaultControllerCanCloseOrEnqueue(t) &&
						!1 !== t._started &&
						((!0 === IsReadableStreamLocked(r) && ReadableStreamGetNumReadRequests(r) > 0) ||
							ReadableStreamDefaultControllerGetDesiredSize(t) > 0)
					);
				}
				function ReadableStreamDefaultControllerClearAlgorithms(t) {
					(t._pullAlgorithm = void 0), (t._cancelAlgorithm = void 0), (t._strategySizeAlgorithm = void 0);
				}
				function ReadableStreamDefaultControllerClose(t) {
					var r = t._controlledReadableStream;
					(t._closeRequested = !0),
						0 === t._queue.length &&
							(ReadableStreamDefaultControllerClearAlgorithms(t), ReadableStreamClose(r));
				}
				function ReadableStreamDefaultControllerEnqueue(t, r) {
					var a = t._controlledReadableStream;
					if (!0 === IsReadableStreamLocked(a) && ReadableStreamGetNumReadRequests(a) > 0)
						ReadableStreamFulfillReadRequest(a, r, !1);
					else {
						var o = void 0;
						try {
							o = t._strategySizeAlgorithm(r);
						} catch (r) {
							throw (ReadableStreamDefaultControllerError(t, r), r);
						}
						try {
							EnqueueValueWithSize(t, r, o);
						} catch (r) {
							throw (ReadableStreamDefaultControllerError(t, r), r);
						}
					}
					ReadableStreamDefaultControllerCallPullIfNeeded(t);
				}
				function ReadableStreamDefaultControllerError(t, r) {
					var a = t._controlledReadableStream;
					"readable" === a._state &&
						(ResetQueue(t), ReadableStreamDefaultControllerClearAlgorithms(t), ReadableStreamError(a, r));
				}
				function ReadableStreamDefaultControllerGetDesiredSize(t) {
					var r = t._controlledReadableStream._state;
					return "errored" === r ? null : "closed" === r ? 0 : t._strategyHWM - t._queueTotalSize;
				}
				function ReadableStreamDefaultControllerHasBackpressure(t) {
					return !0 !== ReadableStreamDefaultControllerShouldCallPull(t);
				}
				function ReadableStreamDefaultControllerCanCloseOrEnqueue(t) {
					var r = t._controlledReadableStream._state;
					return !1 === t._closeRequested && "readable" === r;
				}
				function SetUpReadableStreamDefaultController(t, r, a, o, i, l, u) {
					(r._controlledReadableStream = t),
						(r._queue = void 0),
						(r._queueTotalSize = void 0),
						ResetQueue(r),
						(r._started = !1),
						(r._closeRequested = !1),
						(r._pullAgain = !1),
						(r._pulling = !1),
						(r._strategySizeAlgorithm = u),
						(r._strategyHWM = l),
						(r._pullAlgorithm = o),
						(r._cancelAlgorithm = i),
						(t._readableStreamController = r),
						uponPromise(
							promiseResolvedWith(a()),
							function () {
								(r._started = !0), ReadableStreamDefaultControllerCallPullIfNeeded(r);
							},
							function (t) {
								ReadableStreamDefaultControllerError(r, t);
							}
						);
				}
				function SetUpReadableStreamDefaultControllerFromUnderlyingSource(t, r, a, o) {
					var i = Object.create(w.prototype);
					function startAlgorithm() {
						return InvokeOrNoop(r, "start", [i]);
					}
					var l = CreateAlgorithmFromUnderlyingMethod(r, "pull", 0, [i]),
						u = CreateAlgorithmFromUnderlyingMethod(r, "cancel", 1, []);
					SetUpReadableStreamDefaultController(t, i, startAlgorithm, l, u, a, o);
				}
				function defaultControllerBrandCheckException(t) {
					return new TypeError(
						"ReadableStreamDefaultController.prototype." +
							t +
							" can only be used on a ReadableStreamDefaultController"
					);
				}
				function ReadableStreamTee(t, r) {
					var a,
						o,
						i,
						l,
						u,
						c = AcquireReadableStreamDefaultReader(t),
						d = !1,
						h = !1,
						p = !1,
						m = newPromise(function (t) {
							u = t;
						});
					function pullAlgorithm() {
						return (
							!0 === d ||
								((d = !0),
								setPromiseIsHandledToTrue(
									transformPromiseWith(ReadableStreamDefaultReaderRead(c), function (t) {
										if (((d = !1), !0 === t.done))
											return (
												!1 === h &&
													ReadableStreamDefaultControllerClose(i._readableStreamController),
												void (
													!1 === p &&
													ReadableStreamDefaultControllerClose(l._readableStreamController)
												)
											);
										var r = t.value,
											a = r,
											o = r;
										!1 === h &&
											ReadableStreamDefaultControllerEnqueue(i._readableStreamController, a),
											!1 === p &&
												ReadableStreamDefaultControllerEnqueue(l._readableStreamController, o);
									})
								)),
							promiseResolvedWith(void 0)
						);
					}
					function cancel1Algorithm(r) {
						if (((h = !0), (a = r), !0 === p)) {
							var i = createArrayFromList([a, o]),
								l = ReadableStreamCancel(t, i);
							u(l);
						}
						return m;
					}
					function cancel2Algorithm(r) {
						if (((p = !0), (o = r), !0 === h)) {
							var i = createArrayFromList([a, o]),
								l = ReadableStreamCancel(t, i);
							u(l);
						}
						return m;
					}
					function startAlgorithm() {}
					return (
						(i = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm)),
						(l = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm)),
						uponRejection(c._closedPromise, function (t) {
							ReadableStreamDefaultControllerError(i._readableStreamController, t),
								ReadableStreamDefaultControllerError(l._readableStreamController, t);
						}),
						[i, l]
					);
				}
				var x =
						Number.isInteger ||
						function (t) {
							return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
						},
					T = (function () {
						function ReadableStreamBYOBRequest() {
							throw new TypeError("ReadableStreamBYOBRequest cannot be used directly");
						}
						return (
							Object.defineProperty(ReadableStreamBYOBRequest.prototype, "view", {
								get: function () {
									if (!1 === IsReadableStreamBYOBRequest(this))
										throw byobRequestBrandCheckException("view");
									return this._view;
								},
								enumerable: !0,
								configurable: !0,
							}),
							(ReadableStreamBYOBRequest.prototype.respond = function (t) {
								if (!1 === IsReadableStreamBYOBRequest(this))
									throw byobRequestBrandCheckException("respond");
								if (void 0 === this._associatedReadableByteStreamController)
									throw new TypeError("This BYOB request has been invalidated");
								IsDetachedBuffer(this._view.buffer),
									ReadableByteStreamControllerRespond(
										this._associatedReadableByteStreamController,
										t
									);
							}),
							(ReadableStreamBYOBRequest.prototype.respondWithNewView = function (t) {
								if (!1 === IsReadableStreamBYOBRequest(this))
									throw byobRequestBrandCheckException("respond");
								if (void 0 === this._associatedReadableByteStreamController)
									throw new TypeError("This BYOB request has been invalidated");
								if (!ArrayBuffer.isView(t))
									throw new TypeError("You can only respond with array buffer views");
								IsDetachedBuffer(t.buffer),
									ReadableByteStreamControllerRespondWithNewView(
										this._associatedReadableByteStreamController,
										t
									);
							}),
							ReadableStreamBYOBRequest
						);
					})(),
					E = (function () {
						function ReadableByteStreamController() {
							throw new TypeError("ReadableByteStreamController constructor cannot be used directly");
						}
						return (
							Object.defineProperty(ReadableByteStreamController.prototype, "byobRequest", {
								get: function () {
									if (!1 === IsReadableByteStreamController(this))
										throw byteStreamControllerBrandCheckException("byobRequest");
									if (void 0 === this._byobRequest && this._pendingPullIntos.length > 0) {
										var t = this._pendingPullIntos.peek(),
											r = new Uint8Array(
												t.buffer,
												t.byteOffset + t.bytesFilled,
												t.byteLength - t.bytesFilled
											),
											a = Object.create(T.prototype);
										SetUpReadableStreamBYOBRequest(a, this, r), (this._byobRequest = a);
									}
									return this._byobRequest;
								},
								enumerable: !0,
								configurable: !0,
							}),
							Object.defineProperty(ReadableByteStreamController.prototype, "desiredSize", {
								get: function () {
									if (!1 === IsReadableByteStreamController(this))
										throw byteStreamControllerBrandCheckException("desiredSize");
									return ReadableByteStreamControllerGetDesiredSize(this);
								},
								enumerable: !0,
								configurable: !0,
							}),
							(ReadableByteStreamController.prototype.close = function () {
								if (!1 === IsReadableByteStreamController(this))
									throw byteStreamControllerBrandCheckException("close");
								if (!0 === this._closeRequested)
									throw new TypeError("The stream has already been closed; do not close it again!");
								var t = this._controlledReadableByteStream._state;
								if ("readable" !== t)
									throw new TypeError(
										"The stream (in " +
											t +
											" state) is not in the readable state and cannot be closed"
									);
								ReadableByteStreamControllerClose(this);
							}),
							(ReadableByteStreamController.prototype.enqueue = function (t) {
								if (!1 === IsReadableByteStreamController(this))
									throw byteStreamControllerBrandCheckException("enqueue");
								if (!0 === this._closeRequested) throw new TypeError("stream is closed or draining");
								var r = this._controlledReadableByteStream._state;
								if ("readable" !== r)
									throw new TypeError(
										"The stream (in " +
											r +
											" state) is not in the readable state and cannot be enqueued to"
									);
								if (!ArrayBuffer.isView(t))
									throw new TypeError(
										"You can only enqueue array buffer views when using a ReadableByteStreamController"
									);
								IsDetachedBuffer(t.buffer), ReadableByteStreamControllerEnqueue(this, t);
							}),
							(ReadableByteStreamController.prototype.error = function (t) {
								if (!1 === IsReadableByteStreamController(this))
									throw byteStreamControllerBrandCheckException("error");
								ReadableByteStreamControllerError(this, t);
							}),
							(ReadableByteStreamController.prototype[p] = function (t) {
								this._pendingPullIntos.length > 0 && (this._pendingPullIntos.peek().bytesFilled = 0),
									ResetQueue(this);
								var r = this._cancelAlgorithm(t);
								return ReadableByteStreamControllerClearAlgorithms(this), r;
							}),
							(ReadableByteStreamController.prototype[m] = function () {
								var t = this._controlledReadableByteStream;
								if (this._queueTotalSize > 0) {
									var r = this._queue.shift();
									(this._queueTotalSize -= r.byteLength),
										ReadableByteStreamControllerHandleQueueDrain(this);
									var a = void 0;
									try {
										a = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
									} catch (t) {
										return promiseRejectedWith(t);
									}
									return promiseResolvedWith(
										ReadableStreamCreateReadResult(a, !1, t._reader._forAuthorCode)
									);
								}
								var o = this._autoAllocateChunkSize;
								if (void 0 !== o) {
									var i = void 0;
									try {
										i = new ArrayBuffer(o);
									} catch (t) {
										return promiseRejectedWith(t);
									}
									var l = {
										buffer: i,
										byteOffset: 0,
										byteLength: o,
										bytesFilled: 0,
										elementSize: 1,
										ctor: Uint8Array,
										readerType: "default",
									};
									this._pendingPullIntos.push(l);
								}
								var u = ReadableStreamAddReadRequest(t);
								return ReadableByteStreamControllerCallPullIfNeeded(this), u;
							}),
							ReadableByteStreamController
						);
					})();
				function IsReadableByteStreamController(t) {
					return (
						!!typeIsObject(t) && !!Object.prototype.hasOwnProperty.call(t, "_controlledReadableByteStream")
					);
				}
				function IsReadableStreamBYOBRequest(t) {
					return (
						!!typeIsObject(t) &&
						!!Object.prototype.hasOwnProperty.call(t, "_associatedReadableByteStreamController")
					);
				}
				function ReadableByteStreamControllerCallPullIfNeeded(t) {
					!1 !== ReadableByteStreamControllerShouldCallPull(t) &&
						(!0 !== t._pulling
							? ((t._pulling = !0),
							  uponPromise(
									t._pullAlgorithm(),
									function () {
										(t._pulling = !1),
											!0 === t._pullAgain &&
												((t._pullAgain = !1), ReadableByteStreamControllerCallPullIfNeeded(t));
									},
									function (r) {
										ReadableByteStreamControllerError(t, r);
									}
							  ))
							: (t._pullAgain = !0));
				}
				function ReadableByteStreamControllerClearPendingPullIntos(t) {
					ReadableByteStreamControllerInvalidateBYOBRequest(t), (t._pendingPullIntos = new h());
				}
				function ReadableByteStreamControllerCommitPullIntoDescriptor(t, r) {
					var a = !1;
					"closed" === t._state && (a = !0);
					var o = ReadableByteStreamControllerConvertPullIntoDescriptor(r);
					"default" === r.readerType
						? ReadableStreamFulfillReadRequest(t, o, a)
						: ReadableStreamFulfillReadIntoRequest(t, o, a);
				}
				function ReadableByteStreamControllerConvertPullIntoDescriptor(t) {
					var r = t.bytesFilled,
						a = t.elementSize;
					return new t.ctor(t.buffer, t.byteOffset, r / a);
				}
				function ReadableByteStreamControllerEnqueueChunkToQueue(t, r, a, o) {
					t._queue.push({ buffer: r, byteOffset: a, byteLength: o }), (t._queueTotalSize += o);
				}
				function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(t, r) {
					var a = r.elementSize,
						o = r.bytesFilled - (r.bytesFilled % a),
						i = Math.min(t._queueTotalSize, r.byteLength - r.bytesFilled),
						l = r.bytesFilled + i,
						u = l - (l % a),
						c = i,
						d = !1;
					u > o && ((c = u - r.bytesFilled), (d = !0));
					for (var h = t._queue; c > 0; ) {
						var p = h.peek(),
							m = Math.min(c, p.byteLength),
							v = r.byteOffset + r.bytesFilled;
						ArrayBufferCopy(r.buffer, v, p.buffer, p.byteOffset, m),
							p.byteLength === m ? h.shift() : ((p.byteOffset += m), (p.byteLength -= m)),
							(t._queueTotalSize -= m),
							ReadableByteStreamControllerFillHeadPullIntoDescriptor(t, m, r),
							(c -= m);
					}
					return d;
				}
				function ReadableByteStreamControllerFillHeadPullIntoDescriptor(t, r, a) {
					ReadableByteStreamControllerInvalidateBYOBRequest(t), (a.bytesFilled += r);
				}
				function ReadableByteStreamControllerHandleQueueDrain(t) {
					0 === t._queueTotalSize && !0 === t._closeRequested
						? (ReadableByteStreamControllerClearAlgorithms(t),
						  ReadableStreamClose(t._controlledReadableByteStream))
						: ReadableByteStreamControllerCallPullIfNeeded(t);
				}
				function ReadableByteStreamControllerInvalidateBYOBRequest(t) {
					void 0 !== t._byobRequest &&
						((t._byobRequest._associatedReadableByteStreamController = void 0),
						(t._byobRequest._view = void 0),
						(t._byobRequest = void 0));
				}
				function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(t) {
					for (; t._pendingPullIntos.length > 0; ) {
						if (0 === t._queueTotalSize) return;
						var r = t._pendingPullIntos.peek();
						!0 === ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(t, r) &&
							(ReadableByteStreamControllerShiftPendingPullInto(t),
							ReadableByteStreamControllerCommitPullIntoDescriptor(t._controlledReadableByteStream, r));
					}
				}
				function ReadableByteStreamControllerPullInto(t, r) {
					var a = t._controlledReadableByteStream,
						o = 1;
					r.constructor !== DataView && (o = r.constructor.BYTES_PER_ELEMENT);
					var i = r.constructor,
						l = {
							buffer: TransferArrayBuffer(r.buffer),
							byteOffset: r.byteOffset,
							byteLength: r.byteLength,
							bytesFilled: 0,
							elementSize: o,
							ctor: i,
							readerType: "byob",
						};
					if (t._pendingPullIntos.length > 0)
						return t._pendingPullIntos.push(l), ReadableStreamAddReadIntoRequest(a);
					if ("closed" === a._state)
						return promiseResolvedWith(
							ReadableStreamCreateReadResult(
								new i(l.buffer, l.byteOffset, 0),
								!0,
								a._reader._forAuthorCode
							)
						);
					if (t._queueTotalSize > 0) {
						if (!0 === ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(t, l)) {
							var u = ReadableByteStreamControllerConvertPullIntoDescriptor(l);
							return (
								ReadableByteStreamControllerHandleQueueDrain(t),
								promiseResolvedWith(ReadableStreamCreateReadResult(u, !1, a._reader._forAuthorCode))
							);
						}
						if (!0 === t._closeRequested) {
							var c = new TypeError("Insufficient bytes to fill elements in the given buffer");
							return ReadableByteStreamControllerError(t, c), promiseRejectedWith(c);
						}
					}
					t._pendingPullIntos.push(l);
					var d = ReadableStreamAddReadIntoRequest(a);
					return ReadableByteStreamControllerCallPullIfNeeded(t), d;
				}
				function ReadableByteStreamControllerRespondInClosedState(t, r) {
					r.buffer = TransferArrayBuffer(r.buffer);
					var a = t._controlledReadableByteStream;
					if (!0 === ReadableStreamHasBYOBReader(a))
						for (; ReadableStreamGetNumReadIntoRequests(a) > 0; )
							ReadableByteStreamControllerCommitPullIntoDescriptor(
								a,
								ReadableByteStreamControllerShiftPendingPullInto(t)
							);
				}
				function ReadableByteStreamControllerRespondInReadableState(t, r, a) {
					if (a.bytesFilled + r > a.byteLength) throw new RangeError("bytesWritten out of range");
					if (
						(ReadableByteStreamControllerFillHeadPullIntoDescriptor(t, r, a),
						!(a.bytesFilled < a.elementSize))
					) {
						ReadableByteStreamControllerShiftPendingPullInto(t);
						var o = a.bytesFilled % a.elementSize;
						if (o > 0) {
							var i = a.byteOffset + a.bytesFilled,
								l = a.buffer.slice(i - o, i);
							ReadableByteStreamControllerEnqueueChunkToQueue(t, l, 0, l.byteLength);
						}
						(a.buffer = TransferArrayBuffer(a.buffer)),
							(a.bytesFilled -= o),
							ReadableByteStreamControllerCommitPullIntoDescriptor(t._controlledReadableByteStream, a),
							ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(t);
					}
				}
				function ReadableByteStreamControllerRespondInternal(t, r) {
					var a = t._pendingPullIntos.peek();
					if ("closed" === t._controlledReadableByteStream._state) {
						if (0 !== r)
							throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
						ReadableByteStreamControllerRespondInClosedState(t, a);
					} else ReadableByteStreamControllerRespondInReadableState(t, r, a);
					ReadableByteStreamControllerCallPullIfNeeded(t);
				}
				function ReadableByteStreamControllerShiftPendingPullInto(t) {
					var r = t._pendingPullIntos.shift();
					return ReadableByteStreamControllerInvalidateBYOBRequest(t), r;
				}
				function ReadableByteStreamControllerShouldCallPull(t) {
					var r = t._controlledReadableByteStream;
					return (
						"readable" === r._state &&
						!0 !== t._closeRequested &&
						!1 !== t._started &&
						((!0 === ReadableStreamHasDefaultReader(r) && ReadableStreamGetNumReadRequests(r) > 0) ||
							(!0 === ReadableStreamHasBYOBReader(r) && ReadableStreamGetNumReadIntoRequests(r) > 0) ||
							ReadableByteStreamControllerGetDesiredSize(t) > 0)
					);
				}
				function ReadableByteStreamControllerClearAlgorithms(t) {
					(t._pullAlgorithm = void 0), (t._cancelAlgorithm = void 0);
				}
				function ReadableByteStreamControllerClose(t) {
					var r = t._controlledReadableByteStream;
					if (t._queueTotalSize > 0) t._closeRequested = !0;
					else {
						if (t._pendingPullIntos.length > 0 && t._pendingPullIntos.peek().bytesFilled > 0) {
							var a = new TypeError("Insufficient bytes to fill elements in the given buffer");
							throw (ReadableByteStreamControllerError(t, a), a);
						}
						ReadableByteStreamControllerClearAlgorithms(t), ReadableStreamClose(r);
					}
				}
				function ReadableByteStreamControllerEnqueue(t, r) {
					var a = t._controlledReadableByteStream,
						o = r.buffer,
						i = r.byteOffset,
						l = r.byteLength,
						u = TransferArrayBuffer(o);
					!0 === ReadableStreamHasDefaultReader(a)
						? 0 === ReadableStreamGetNumReadRequests(a)
							? ReadableByteStreamControllerEnqueueChunkToQueue(t, u, i, l)
							: ReadableStreamFulfillReadRequest(a, new Uint8Array(u, i, l), !1)
						: !0 === ReadableStreamHasBYOBReader(a)
						? (ReadableByteStreamControllerEnqueueChunkToQueue(t, u, i, l),
						  ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(t))
						: ReadableByteStreamControllerEnqueueChunkToQueue(t, u, i, l),
						ReadableByteStreamControllerCallPullIfNeeded(t);
				}
				function ReadableByteStreamControllerError(t, r) {
					var a = t._controlledReadableByteStream;
					"readable" === a._state &&
						(ReadableByteStreamControllerClearPendingPullIntos(t),
						ResetQueue(t),
						ReadableByteStreamControllerClearAlgorithms(t),
						ReadableStreamError(a, r));
				}
				function ReadableByteStreamControllerGetDesiredSize(t) {
					var r = t._controlledReadableByteStream._state;
					return "errored" === r ? null : "closed" === r ? 0 : t._strategyHWM - t._queueTotalSize;
				}
				function ReadableByteStreamControllerRespond(t, r) {
					if (!1 === IsFiniteNonNegativeNumber((r = Number(r))))
						throw new RangeError("bytesWritten must be a finite");
					ReadableByteStreamControllerRespondInternal(t, r);
				}
				function ReadableByteStreamControllerRespondWithNewView(t, r) {
					var a = t._pendingPullIntos.peek();
					if (a.byteOffset + a.bytesFilled !== r.byteOffset)
						throw new RangeError("The region specified by view does not match byobRequest");
					if (a.byteLength !== r.byteLength)
						throw new RangeError("The buffer of view has different capacity than byobRequest");
					(a.buffer = r.buffer), ReadableByteStreamControllerRespondInternal(t, r.byteLength);
				}
				function SetUpReadableByteStreamController(t, r, a, o, i, l, u) {
					(r._controlledReadableByteStream = t),
						(r._pullAgain = !1),
						(r._pulling = !1),
						(r._byobRequest = void 0),
						(r._queue = r._queueTotalSize = void 0),
						ResetQueue(r),
						(r._closeRequested = !1),
						(r._started = !1),
						(r._strategyHWM = ValidateAndNormalizeHighWaterMark(l)),
						(r._pullAlgorithm = o),
						(r._cancelAlgorithm = i),
						(r._autoAllocateChunkSize = u),
						(r._pendingPullIntos = new h()),
						(t._readableStreamController = r),
						uponPromise(
							promiseResolvedWith(a()),
							function () {
								(r._started = !0), ReadableByteStreamControllerCallPullIfNeeded(r);
							},
							function (t) {
								ReadableByteStreamControllerError(r, t);
							}
						);
				}
				function SetUpReadableByteStreamControllerFromUnderlyingSource(t, r, a) {
					var o = Object.create(E.prototype);
					function startAlgorithm() {
						return InvokeOrNoop(r, "start", [o]);
					}
					var i = CreateAlgorithmFromUnderlyingMethod(r, "pull", 0, [o]),
						l = CreateAlgorithmFromUnderlyingMethod(r, "cancel", 1, []),
						u = r.autoAllocateChunkSize;
					if (void 0 !== u && ((u = Number(u)), !1 === x(u) || u <= 0))
						throw new RangeError("autoAllocateChunkSize must be a positive integer");
					SetUpReadableByteStreamController(t, o, startAlgorithm, i, l, a, u);
				}
				function SetUpReadableStreamBYOBRequest(t, r, a) {
					(t._associatedReadableByteStreamController = r), (t._view = a);
				}
				function byobRequestBrandCheckException(t) {
					return new TypeError(
						"ReadableStreamBYOBRequest.prototype." + t + " can only be used on a ReadableStreamBYOBRequest"
					);
				}
				function byteStreamControllerBrandCheckException(t) {
					return new TypeError(
						"ReadableByteStreamController.prototype." +
							t +
							" can only be used on a ReadableByteStreamController"
					);
				}
				function AcquireReadableStreamBYOBReader(t, r) {
					void 0 === r && (r = !1);
					var a = new O(t);
					return (a._forAuthorCode = r), a;
				}
				function ReadableStreamAddReadIntoRequest(t) {
					return newPromise(function (r, a) {
						var o = { _resolve: r, _reject: a };
						t._reader._readIntoRequests.push(o);
					});
				}
				function ReadableStreamFulfillReadIntoRequest(t, r, a) {
					var o = t._reader;
					o._readIntoRequests.shift()._resolve(ReadableStreamCreateReadResult(r, a, o._forAuthorCode));
				}
				function ReadableStreamGetNumReadIntoRequests(t) {
					return t._reader._readIntoRequests.length;
				}
				function ReadableStreamHasBYOBReader(t) {
					var r = t._reader;
					return void 0 !== r && !!IsReadableStreamBYOBReader(r);
				}
				var O = (function () {
					function ReadableStreamBYOBReader(t) {
						if (!IsReadableStream(t))
							throw new TypeError(
								"ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source"
							);
						if (!1 === IsReadableByteStreamController(t._readableStreamController))
							throw new TypeError(
								"Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source"
							);
						if (IsReadableStreamLocked(t))
							throw new TypeError(
								"This stream has already been locked for exclusive reading by another reader"
							);
						ReadableStreamReaderGenericInitialize(this, t), (this._readIntoRequests = new h());
					}
					return (
						Object.defineProperty(ReadableStreamBYOBReader.prototype, "closed", {
							get: function () {
								return IsReadableStreamBYOBReader(this)
									? this._closedPromise
									: promiseRejectedWith(byobReaderBrandCheckException("closed"));
							},
							enumerable: !0,
							configurable: !0,
						}),
						(ReadableStreamBYOBReader.prototype.cancel = function (t) {
							return IsReadableStreamBYOBReader(this)
								? void 0 === this._ownerReadableStream
									? promiseRejectedWith(readerLockException("cancel"))
									: ReadableStreamReaderGenericCancel(this, t)
								: promiseRejectedWith(byobReaderBrandCheckException("cancel"));
						}),
						(ReadableStreamBYOBReader.prototype.read = function (t) {
							return IsReadableStreamBYOBReader(this)
								? void 0 === this._ownerReadableStream
									? promiseRejectedWith(readerLockException("read from"))
									: ArrayBuffer.isView(t)
									? (IsDetachedBuffer(t.buffer),
									  0 === t.byteLength
											? promiseRejectedWith(new TypeError("view must have non-zero byteLength"))
											: ReadableStreamBYOBReaderRead(this, t))
									: promiseRejectedWith(new TypeError("view must be an array buffer view"))
								: promiseRejectedWith(byobReaderBrandCheckException("read"));
						}),
						(ReadableStreamBYOBReader.prototype.releaseLock = function () {
							if (!IsReadableStreamBYOBReader(this)) throw byobReaderBrandCheckException("releaseLock");
							if (void 0 !== this._ownerReadableStream) {
								if (this._readIntoRequests.length > 0)
									throw new TypeError(
										"Tried to release a reader lock when that reader has pending read() calls un-settled"
									);
								ReadableStreamReaderGenericRelease(this);
							}
						}),
						ReadableStreamBYOBReader
					);
				})();
				function IsReadableStreamBYOBReader(t) {
					return !!typeIsObject(t) && !!Object.prototype.hasOwnProperty.call(t, "_readIntoRequests");
				}
				function ReadableStreamBYOBReaderRead(t, r) {
					var a = t._ownerReadableStream;
					return (
						(a._disturbed = !0),
						"errored" === a._state
							? promiseRejectedWith(a._storedError)
							: ReadableByteStreamControllerPullInto(a._readableStreamController, r)
					);
				}
				function byobReaderBrandCheckException(t) {
					return new TypeError(
						"ReadableStreamBYOBReader.prototype." + t + " can only be used on a ReadableStreamBYOBReader"
					);
				}
				var I = (function () {
					function ReadableStream(t, r) {
						void 0 === t && (t = {}), void 0 === r && (r = {}), InitializeReadableStream(this);
						var a = r.size,
							o = r.highWaterMark,
							i = t.type;
						if ("bytes" === String(i)) {
							if (void 0 !== a)
								throw new RangeError("The strategy for a byte stream cannot have a size function");
							void 0 === o && (o = 0),
								SetUpReadableByteStreamControllerFromUnderlyingSource(
									this,
									t,
									(o = ValidateAndNormalizeHighWaterMark(o))
								);
						} else {
							if (void 0 !== i) throw new RangeError("Invalid type is specified");
							var l = MakeSizeAlgorithmFromSizeFunction(a);
							void 0 === o && (o = 1),
								SetUpReadableStreamDefaultControllerFromUnderlyingSource(
									this,
									t,
									(o = ValidateAndNormalizeHighWaterMark(o)),
									l
								);
						}
					}
					return (
						Object.defineProperty(ReadableStream.prototype, "locked", {
							get: function () {
								if (!1 === IsReadableStream(this)) throw streamBrandCheckException$1("locked");
								return IsReadableStreamLocked(this);
							},
							enumerable: !0,
							configurable: !0,
						}),
						(ReadableStream.prototype.cancel = function (t) {
							return !1 === IsReadableStream(this)
								? promiseRejectedWith(streamBrandCheckException$1("cancel"))
								: !0 === IsReadableStreamLocked(this)
								? promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"))
								: ReadableStreamCancel(this, t);
						}),
						(ReadableStream.prototype.getReader = function (t) {
							var r = (void 0 === t ? {} : t).mode;
							if (!1 === IsReadableStream(this)) throw streamBrandCheckException$1("getReader");
							if (void 0 === r) return AcquireReadableStreamDefaultReader(this, !0);
							if ("byob" === (r = String(r))) return AcquireReadableStreamBYOBReader(this, !0);
							throw new RangeError("Invalid mode is specified");
						}),
						(ReadableStream.prototype.pipeThrough = function (t, r) {
							var a = t.writable,
								o = t.readable,
								i = void 0 === r ? {} : r,
								l = i.preventClose,
								u = i.preventAbort,
								c = i.preventCancel,
								d = i.signal;
							if (!1 === IsReadableStream(this)) throw streamBrandCheckException$1("pipeThrough");
							if (!1 === IsWritableStream(a))
								throw new TypeError("writable argument to pipeThrough must be a WritableStream");
							if (!1 === IsReadableStream(o))
								throw new TypeError("readable argument to pipeThrough must be a ReadableStream");
							if (
								((l = Boolean(l)),
								(u = Boolean(u)),
								(c = Boolean(c)),
								void 0 !== d && !isAbortSignal(d))
							)
								throw new TypeError(
									"ReadableStream.prototype.pipeThrough's signal option must be an AbortSignal"
								);
							if (!0 === IsReadableStreamLocked(this))
								throw new TypeError(
									"ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream"
								);
							if (!0 === IsWritableStreamLocked(a))
								throw new TypeError(
									"ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream"
								);
							return setPromiseIsHandledToTrue(ReadableStreamPipeTo(this, a, l, u, c, d)), o;
						}),
						(ReadableStream.prototype.pipeTo = function (t, r) {
							var a = void 0 === r ? {} : r,
								o = a.preventClose,
								i = a.preventAbort,
								l = a.preventCancel,
								u = a.signal;
							return !1 === IsReadableStream(this)
								? promiseRejectedWith(streamBrandCheckException$1("pipeTo"))
								: !1 === IsWritableStream(t)
								? promiseRejectedWith(
										new TypeError(
											"ReadableStream.prototype.pipeTo's first argument must be a WritableStream"
										)
								  )
								: ((o = Boolean(o)),
								  (i = Boolean(i)),
								  (l = Boolean(l)),
								  void 0 === u || isAbortSignal(u)
										? !0 === IsReadableStreamLocked(this)
											? promiseRejectedWith(
													new TypeError(
														"ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"
													)
											  )
											: !0 === IsWritableStreamLocked(t)
											? promiseRejectedWith(
													new TypeError(
														"ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"
													)
											  )
											: ReadableStreamPipeTo(this, t, o, i, l, u)
										: promiseRejectedWith(
												new TypeError(
													"ReadableStream.prototype.pipeTo's signal option must be an AbortSignal"
												)
										  ));
						}),
						(ReadableStream.prototype.tee = function () {
							if (!1 === IsReadableStream(this)) throw streamBrandCheckException$1("tee");
							return createArrayFromList(ReadableStreamTee(this));
						}),
						(ReadableStream.prototype.getIterator = function (t) {
							var r = (void 0 === t ? {} : t).preventCancel,
								a = void 0 !== r && r;
							if (!1 === IsReadableStream(this)) throw streamBrandCheckException$1("getIterator");
							return AcquireReadableStreamAsyncIterator(this, a);
						}),
						ReadableStream
					);
				})();
				function CreateReadableStream(t, r, a, o, i) {
					void 0 === o && (o = 1),
						void 0 === i &&
							(i = function () {
								return 1;
							});
					var l = Object.create(I.prototype);
					return (
						InitializeReadableStream(l),
						SetUpReadableStreamDefaultController(l, Object.create(w.prototype), t, r, a, o, i),
						l
					);
				}
				function InitializeReadableStream(t) {
					(t._state = "readable"), (t._reader = void 0), (t._storedError = void 0), (t._disturbed = !1);
				}
				function IsReadableStream(t) {
					return !!typeIsObject(t) && !!Object.prototype.hasOwnProperty.call(t, "_readableStreamController");
				}
				function IsReadableStreamLocked(t) {
					return void 0 !== t._reader;
				}
				function ReadableStreamCancel(t, r) {
					return (
						(t._disturbed = !0),
						"closed" === t._state
							? promiseResolvedWith(void 0)
							: "errored" === t._state
							? promiseRejectedWith(t._storedError)
							: (ReadableStreamClose(t), transformPromiseWith(t._readableStreamController[p](r), noop))
					);
				}
				function ReadableStreamClose(t) {
					t._state = "closed";
					var r = t._reader;
					void 0 !== r &&
						(IsReadableStreamDefaultReader(r) &&
							(r._readRequests.forEach(function (t) {
								t._resolve(ReadableStreamCreateReadResult(void 0, !0, r._forAuthorCode));
							}),
							(r._readRequests = new h())),
						defaultReaderClosedPromiseResolve(r));
				}
				function ReadableStreamError(t, r) {
					(t._state = "errored"), (t._storedError = r);
					var a = t._reader;
					void 0 !== a &&
						(IsReadableStreamDefaultReader(a)
							? (a._readRequests.forEach(function (t) {
									t._reject(r);
							  }),
							  (a._readRequests = new h()))
							: (a._readIntoRequests.forEach(function (t) {
									t._reject(r);
							  }),
							  (a._readIntoRequests = new h())),
						defaultReaderClosedPromiseReject(a, r));
				}
				function streamBrandCheckException$1(t) {
					return new TypeError("ReadableStream.prototype." + t + " can only be used on a ReadableStream");
				}
				"symbol" == typeof r.asyncIterator &&
					Object.defineProperty(I.prototype, r.asyncIterator, {
						value: I.prototype.getIterator,
						enumerable: !1,
						writable: !0,
						configurable: !0,
					});
				var D = (function () {
						function ByteLengthQueuingStrategy(t) {
							var r = t.highWaterMark;
							this.highWaterMark = r;
						}
						return (
							(ByteLengthQueuingStrategy.prototype.size = function (t) {
								return t.byteLength;
							}),
							ByteLengthQueuingStrategy
						);
					})(),
					L = (function () {
						function CountQueuingStrategy(t) {
							var r = t.highWaterMark;
							this.highWaterMark = r;
						}
						return (
							(CountQueuingStrategy.prototype.size = function () {
								return 1;
							}),
							CountQueuingStrategy
						);
					})(),
					W = (function () {
						function TransformStream(t, r, a) {
							void 0 === t && (t = {}), void 0 === r && (r = {}), void 0 === a && (a = {});
							var o = r.size,
								i = r.highWaterMark,
								l = a.size,
								u = a.highWaterMark;
							if (void 0 !== t.writableType) throw new RangeError("Invalid writable type specified");
							var c = MakeSizeAlgorithmFromSizeFunction(o);
							if (
								(void 0 === i && (i = 1),
								(i = ValidateAndNormalizeHighWaterMark(i)),
								void 0 !== t.readableType)
							)
								throw new RangeError("Invalid readable type specified");
							var d,
								h = MakeSizeAlgorithmFromSizeFunction(l);
							void 0 === u && (u = 0),
								(u = ValidateAndNormalizeHighWaterMark(u)),
								InitializeTransformStream(
									this,
									newPromise(function (t) {
										d = t;
									}),
									i,
									c,
									u,
									h
								),
								SetUpTransformStreamDefaultControllerFromTransformer(this, t);
							var p = InvokeOrNoop(t, "start", [this._transformStreamController]);
							d(p);
						}
						return (
							Object.defineProperty(TransformStream.prototype, "readable", {
								get: function () {
									if (!1 === IsTransformStream(this)) throw streamBrandCheckException$2("readable");
									return this._readable;
								},
								enumerable: !0,
								configurable: !0,
							}),
							Object.defineProperty(TransformStream.prototype, "writable", {
								get: function () {
									if (!1 === IsTransformStream(this)) throw streamBrandCheckException$2("writable");
									return this._writable;
								},
								enumerable: !0,
								configurable: !0,
							}),
							TransformStream
						);
					})();
				function InitializeTransformStream(t, r, a, o, i, l) {
					function startAlgorithm() {
						return r;
					}
					function writeAlgorithm(r) {
						return TransformStreamDefaultSinkWriteAlgorithm(t, r);
					}
					function abortAlgorithm(r) {
						return TransformStreamDefaultSinkAbortAlgorithm(t, r);
					}
					function closeAlgorithm() {
						return TransformStreamDefaultSinkCloseAlgorithm(t);
					}
					function pullAlgorithm() {
						return TransformStreamDefaultSourcePullAlgorithm(t);
					}
					function cancelAlgorithm(r) {
						return TransformStreamErrorWritableAndUnblockWrite(t, r), promiseResolvedWith(void 0);
					}
					(t._writable = CreateWritableStream(
						startAlgorithm,
						writeAlgorithm,
						closeAlgorithm,
						abortAlgorithm,
						a,
						o
					)),
						(t._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, i, l)),
						(t._backpressure = void 0),
						(t._backpressureChangePromise = void 0),
						(t._backpressureChangePromise_resolve = void 0),
						TransformStreamSetBackpressure(t, !0),
						(t._transformStreamController = void 0);
				}
				function IsTransformStream(t) {
					return !!typeIsObject(t) && !!Object.prototype.hasOwnProperty.call(t, "_transformStreamController");
				}
				function TransformStreamError(t, r) {
					ReadableStreamDefaultControllerError(t._readable._readableStreamController, r),
						TransformStreamErrorWritableAndUnblockWrite(t, r);
				}
				function TransformStreamErrorWritableAndUnblockWrite(t, r) {
					TransformStreamDefaultControllerClearAlgorithms(t._transformStreamController),
						WritableStreamDefaultControllerErrorIfNeeded(t._writable._writableStreamController, r),
						!0 === t._backpressure && TransformStreamSetBackpressure(t, !1);
				}
				function TransformStreamSetBackpressure(t, r) {
					void 0 !== t._backpressureChangePromise && t._backpressureChangePromise_resolve(),
						(t._backpressureChangePromise = newPromise(function (r) {
							t._backpressureChangePromise_resolve = r;
						})),
						(t._backpressure = r);
				}
				var M = (function () {
					function TransformStreamDefaultController() {
						throw new TypeError("TransformStreamDefaultController instances cannot be created directly");
					}
					return (
						Object.defineProperty(TransformStreamDefaultController.prototype, "desiredSize", {
							get: function () {
								if (!1 === IsTransformStreamDefaultController(this))
									throw defaultControllerBrandCheckException$1("desiredSize");
								return ReadableStreamDefaultControllerGetDesiredSize(
									this._controlledTransformStream._readable._readableStreamController
								);
							},
							enumerable: !0,
							configurable: !0,
						}),
						(TransformStreamDefaultController.prototype.enqueue = function (t) {
							if (!1 === IsTransformStreamDefaultController(this))
								throw defaultControllerBrandCheckException$1("enqueue");
							TransformStreamDefaultControllerEnqueue(this, t);
						}),
						(TransformStreamDefaultController.prototype.error = function (t) {
							if (!1 === IsTransformStreamDefaultController(this))
								throw defaultControllerBrandCheckException$1("error");
							TransformStreamDefaultControllerError(this, t);
						}),
						(TransformStreamDefaultController.prototype.terminate = function () {
							if (!1 === IsTransformStreamDefaultController(this))
								throw defaultControllerBrandCheckException$1("terminate");
							TransformStreamDefaultControllerTerminate(this);
						}),
						TransformStreamDefaultController
					);
				})();
				function IsTransformStreamDefaultController(t) {
					return !!typeIsObject(t) && !!Object.prototype.hasOwnProperty.call(t, "_controlledTransformStream");
				}
				function SetUpTransformStreamDefaultController(t, r, a, o) {
					(r._controlledTransformStream = t),
						(t._transformStreamController = r),
						(r._transformAlgorithm = a),
						(r._flushAlgorithm = o);
				}
				function SetUpTransformStreamDefaultControllerFromTransformer(t, r) {
					var a = Object.create(M.prototype),
						transformAlgorithm = function (t) {
							try {
								return TransformStreamDefaultControllerEnqueue(a, t), promiseResolvedWith(void 0);
							} catch (t) {
								return promiseRejectedWith(t);
							}
						},
						o = r.transform;
					if (void 0 !== o) {
						if ("function" != typeof o) throw new TypeError("transform is not a method");
						transformAlgorithm = function (t) {
							return PromiseCall(o, r, [t, a]);
						};
					}
					var i = CreateAlgorithmFromUnderlyingMethod(r, "flush", 0, [a]);
					SetUpTransformStreamDefaultController(t, a, transformAlgorithm, i);
				}
				function TransformStreamDefaultControllerClearAlgorithms(t) {
					(t._transformAlgorithm = void 0), (t._flushAlgorithm = void 0);
				}
				function TransformStreamDefaultControllerEnqueue(t, r) {
					var a = t._controlledTransformStream,
						o = a._readable._readableStreamController;
					if (!1 === ReadableStreamDefaultControllerCanCloseOrEnqueue(o))
						throw new TypeError("Readable side is not in a state that permits enqueue");
					try {
						ReadableStreamDefaultControllerEnqueue(o, r);
					} catch (t) {
						throw (TransformStreamErrorWritableAndUnblockWrite(a, t), a._readable._storedError);
					}
					ReadableStreamDefaultControllerHasBackpressure(o) !== a._backpressure &&
						TransformStreamSetBackpressure(a, !0);
				}
				function TransformStreamDefaultControllerError(t, r) {
					TransformStreamError(t._controlledTransformStream, r);
				}
				function TransformStreamDefaultControllerPerformTransform(t, r) {
					return transformPromiseWith(t._transformAlgorithm(r), void 0, function (r) {
						throw (TransformStreamError(t._controlledTransformStream, r), r);
					});
				}
				function TransformStreamDefaultControllerTerminate(t) {
					var r = t._controlledTransformStream,
						a = r._readable._readableStreamController;
					!0 === ReadableStreamDefaultControllerCanCloseOrEnqueue(a) &&
						ReadableStreamDefaultControllerClose(a),
						TransformStreamErrorWritableAndUnblockWrite(r, new TypeError("TransformStream terminated"));
				}
				function TransformStreamDefaultSinkWriteAlgorithm(t, r) {
					var a = t._transformStreamController;
					return !0 === t._backpressure
						? transformPromiseWith(t._backpressureChangePromise, function () {
								var o = t._writable;
								if ("erroring" === o._state) throw o._storedError;
								return TransformStreamDefaultControllerPerformTransform(a, r);
						  })
						: TransformStreamDefaultControllerPerformTransform(a, r);
				}
				function TransformStreamDefaultSinkAbortAlgorithm(t, r) {
					return TransformStreamError(t, r), promiseResolvedWith(void 0);
				}
				function TransformStreamDefaultSinkCloseAlgorithm(t) {
					var r = t._readable,
						a = t._transformStreamController,
						o = a._flushAlgorithm();
					return (
						TransformStreamDefaultControllerClearAlgorithms(a),
						transformPromiseWith(
							o,
							function () {
								if ("errored" === r._state) throw r._storedError;
								var t = r._readableStreamController;
								!0 === ReadableStreamDefaultControllerCanCloseOrEnqueue(t) &&
									ReadableStreamDefaultControllerClose(t);
							},
							function (a) {
								throw (TransformStreamError(t, a), r._storedError);
							}
						)
					);
				}
				function TransformStreamDefaultSourcePullAlgorithm(t) {
					return TransformStreamSetBackpressure(t, !1), t._backpressureChangePromise;
				}
				function defaultControllerBrandCheckException$1(t) {
					return new TypeError(
						"TransformStreamDefaultController.prototype." +
							t +
							" can only be used on a TransformStreamDefaultController"
					);
				}
				function streamBrandCheckException$2(t) {
					return new TypeError("TransformStream.prototype." + t + " can only be used on a TransformStream");
				}
				(t.ByteLengthQueuingStrategy = D),
					(t.CountQueuingStrategy = L),
					(t.ReadableStream = I),
					(t.TransformStream = W),
					(t.WritableStream = A),
					Object.defineProperty(t, "__esModule", { value: !0 });
			})(r);
		},
		function (t, r, a) {
			a(145), a(114), a(77), a(116);
			var o = a(43);
			t.exports = o.Map;
		},
		function (t, r, a) {
			"use strict";
			var o = a(146),
				i = a(150);
			t.exports = o(
				"Map",
				function (t) {
					return function Map() {
						return t(this, arguments.length ? arguments[0] : void 0);
					};
				},
				i
			);
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(11),
				l = a(52),
				u = a(29),
				c = a(147),
				d = a(124),
				h = a(123),
				p = a(22),
				m = a(14),
				v = a(97),
				g = a(85),
				y = a(149);
			t.exports = function (t, r, a) {
				var b = -1 !== t.indexOf("Map"),
					_ = -1 !== t.indexOf("Weak"),
					S = b ? "set" : "add",
					A = i[t],
					C = A && A.prototype,
					R = A,
					k = {},
					fixMethod = function (t) {
						var r = C[t];
						u(
							C,
							t,
							"add" == t
								? function add(t) {
										return r.call(this, 0 === t ? 0 : t), this;
								  }
								: "delete" == t
								? function (t) {
										return !(_ && !p(t)) && r.call(this, 0 === t ? 0 : t);
								  }
								: "get" == t
								? function get(t) {
										return _ && !p(t) ? void 0 : r.call(this, 0 === t ? 0 : t);
								  }
								: "has" == t
								? function has(t) {
										return !(_ && !p(t)) && r.call(this, 0 === t ? 0 : t);
								  }
								: function set(t, a) {
										return r.call(this, 0 === t ? 0 : t, a), this;
								  }
						);
					};
				if (
					l(
						t,
						"function" != typeof A ||
							!(
								_ ||
								(C.forEach &&
									!m(function () {
										new A().entries().next();
									}))
							)
					)
				)
					(R = a.getConstructor(r, t, b, S)), (c.REQUIRED = !0);
				else if (l(t, !0)) {
					var P = new R(),
						w = P[S](_ ? {} : -0, 1) != P,
						x = m(function () {
							P.has(1);
						}),
						T = v(function (t) {
							new A(t);
						}),
						E =
							!_ &&
							m(function () {
								for (var t = new A(), r = 5; r--; ) t[S](r, r);
								return !t.has(-0);
							});
					T ||
						(((R = r(function (r, a) {
							h(r, R, t);
							var o = y(new A(), r, R);
							return null != a && d(a, o[S], o, b), o;
						})).prototype = C),
						(C.constructor = R)),
						(x || E) && (fixMethod("delete"), fixMethod("has"), b && fixMethod("get")),
						(E || w) && fixMethod(S),
						_ && C.clear && delete C.clear;
				}
				return (k[t] = R), o({ global: !0, forced: R != A }, k), g(R, t), _ || a.setStrong(R, t, b), R;
			};
		},
		function (t, r, a) {
			var o = a(39),
				i = a(22),
				l = a(23),
				u = a(27).f,
				c = a(38),
				d = a(148),
				h = c("meta"),
				p = 0,
				m =
					Object.isExtensible ||
					function () {
						return !0;
					},
				setMetadata = function (t) {
					u(t, h, { value: { objectID: "O" + ++p, weakData: {} } });
				},
				v = (t.exports = {
					REQUIRED: !1,
					fastKey: function (t, r) {
						if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
						if (!l(t, h)) {
							if (!m(t)) return "F";
							if (!r) return "E";
							setMetadata(t);
						}
						return t[h].objectID;
					},
					getWeakData: function (t, r) {
						if (!l(t, h)) {
							if (!m(t)) return !0;
							if (!r) return !1;
							setMetadata(t);
						}
						return t[h].weakData;
					},
					onFreeze: function (t) {
						return d && v.REQUIRED && m(t) && !l(t, h) && setMetadata(t), t;
					},
				});
			o[h] = !0;
		},
		function (t, r, a) {
			var o = a(14);
			t.exports = !o(function () {
				return Object.isExtensible(Object.preventExtensions({}));
			});
		},
		function (t, r, a) {
			var o = a(22),
				i = a(87);
			t.exports = function (t, r, a) {
				var l, u;
				return (
					i &&
						"function" == typeof (l = r.constructor) &&
						l !== a &&
						o((u = l.prototype)) &&
						u !== a.prototype &&
						i(t, u),
					t
				);
			};
		},
		function (t, r, a) {
			"use strict";
			var o = a(27).f,
				i = a(71),
				l = a(121),
				u = a(62),
				c = a(123),
				d = a(124),
				h = a(79),
				p = a(122),
				m = a(13),
				v = a(147).fastKey,
				g = a(33),
				y = g.set,
				b = g.getterFor;
			t.exports = {
				getConstructor: function (t, r, a, h) {
					var p = t(function (t, o) {
							c(t, p, r),
								y(t, { type: r, index: i(null), first: void 0, last: void 0, size: 0 }),
								m || (t.size = 0),
								null != o && d(o, t[h], t, a);
						}),
						g = b(r),
						define = function (t, r, a) {
							var o,
								i,
								l = g(t),
								u = getEntry(t, r);
							return (
								u
									? (u.value = a)
									: ((l.last = u =
											{
												index: (i = v(r, !0)),
												key: r,
												value: a,
												previous: (o = l.last),
												next: void 0,
												removed: !1,
											}),
									  l.first || (l.first = u),
									  o && (o.next = u),
									  m ? l.size++ : t.size++,
									  "F" !== i && (l.index[i] = u)),
								t
							);
						},
						getEntry = function (t, r) {
							var a,
								o = g(t),
								i = v(r);
							if ("F" !== i) return o.index[i];
							for (a = o.first; a; a = a.next) if (a.key == r) return a;
						};
					return (
						l(p.prototype, {
							clear: function clear() {
								for (var t = g(this), r = t.index, a = t.first; a; )
									(a.removed = !0),
										a.previous && (a.previous = a.previous.next = void 0),
										delete r[a.index],
										(a = a.next);
								(t.first = t.last = void 0), m ? (t.size = 0) : (this.size = 0);
							},
							delete: function (t) {
								var r = this,
									a = g(r),
									o = getEntry(r, t);
								if (o) {
									var i = o.next,
										l = o.previous;
									delete a.index[o.index],
										(o.removed = !0),
										l && (l.next = i),
										i && (i.previous = l),
										a.first == o && (a.first = i),
										a.last == o && (a.last = l),
										m ? a.size-- : r.size--;
								}
								return !!o;
							},
							forEach: function forEach(t) {
								for (
									var r, a = g(this), o = u(t, arguments.length > 1 ? arguments[1] : void 0, 3);
									(r = r ? r.next : a.first);

								)
									for (o(r.value, r.key, this); r && r.removed; ) r = r.previous;
							},
							has: function has(t) {
								return !!getEntry(this, t);
							},
						}),
						l(
							p.prototype,
							a
								? {
										get: function get(t) {
											var r = getEntry(this, t);
											return r && r.value;
										},
										set: function set(t, r) {
											return define(this, 0 === t ? 0 : t, r);
										},
								  }
								: {
										add: function add(t) {
											return define(this, (t = 0 === t ? 0 : t), t);
										},
								  }
						),
						m &&
							o(p.prototype, "size", {
								get: function () {
									return g(this).size;
								},
							}),
						p
					);
				},
				setStrong: function (t, r, a) {
					var o = r + " Iterator",
						i = b(r),
						l = b(o);
					h(
						t,
						r,
						function (t, r) {
							y(this, { type: o, target: t, state: i(t), kind: r, last: void 0 });
						},
						function () {
							for (var t = l(this), r = t.kind, a = t.last; a && a.removed; ) a = a.previous;
							return t.target && (t.last = a = a ? a.next : t.state.first)
								? "keys" == r
									? { value: a.key, done: !1 }
									: "values" == r
									? { value: a.value, done: !1 }
									: { value: [a.key, a.value], done: !1 }
								: ((t.target = void 0), { value: void 0, done: !0 });
						},
						a ? "entries" : "values",
						!a,
						!0
					),
						p(r);
				},
			};
		},
		function (t, r, a) {
			a(152), a(114), a(77), a(116);
			var o = a(43);
			t.exports = o.Set;
		},
		function (t, r, a) {
			"use strict";
			var o = a(146),
				i = a(150);
			t.exports = o(
				"Set",
				function (t) {
					return function Set() {
						return t(this, arguments.length ? arguments[0] : void 0);
					};
				},
				i
			);
		},
		function (t, r, a) {
			a(114), a(154), a(116);
			var o = a(43);
			t.exports = o.WeakMap;
		},
		function (t, r, a) {
			"use strict";
			var o,
				i = a(11),
				l = a(121),
				u = a(147),
				c = a(146),
				d = a(155),
				h = a(22),
				p = a(33).enforce,
				m = a(34),
				v = !i.ActiveXObject && "ActiveXObject" in i,
				g = Object.isExtensible,
				wrapper = function (t) {
					return function WeakMap() {
						return t(this, arguments.length ? arguments[0] : void 0);
					};
				},
				y = (t.exports = c("WeakMap", wrapper, d));
			if (m && v) {
				(o = d.getConstructor(wrapper, "WeakMap", !0)), (u.REQUIRED = !0);
				var b = y.prototype,
					_ = b.delete,
					S = b.has,
					A = b.get,
					C = b.set;
				l(b, {
					delete: function (t) {
						if (h(t) && !g(t)) {
							var r = p(this);
							return r.frozen || (r.frozen = new o()), _.call(this, t) || r.frozen.delete(t);
						}
						return _.call(this, t);
					},
					has: function has(t) {
						if (h(t) && !g(t)) {
							var r = p(this);
							return r.frozen || (r.frozen = new o()), S.call(this, t) || r.frozen.has(t);
						}
						return S.call(this, t);
					},
					get: function get(t) {
						if (h(t) && !g(t)) {
							var r = p(this);
							return (
								r.frozen || (r.frozen = new o()), S.call(this, t) ? A.call(this, t) : r.frozen.get(t)
							);
						}
						return A.call(this, t);
					},
					set: function set(t, r) {
						if (h(t) && !g(t)) {
							var a = p(this);
							a.frozen || (a.frozen = new o()), S.call(this, t) ? C.call(this, t, r) : a.frozen.set(t, r);
						} else C.call(this, t, r);
						return this;
					},
				});
			}
		},
		function (t, r, a) {
			"use strict";
			var o = a(121),
				i = a(147).getWeakData,
				l = a(28),
				u = a(22),
				c = a(123),
				d = a(124),
				h = a(156),
				p = a(23),
				m = a(33),
				v = m.set,
				g = m.getterFor,
				y = h.find,
				b = h.findIndex,
				_ = 0,
				uncaughtFrozenStore = function (t) {
					return t.frozen || (t.frozen = new UncaughtFrozenStore());
				},
				UncaughtFrozenStore = function () {
					this.entries = [];
				},
				findUncaughtFrozen = function (t, r) {
					return y(t.entries, function (t) {
						return t[0] === r;
					});
				};
			(UncaughtFrozenStore.prototype = {
				get: function (t) {
					var r = findUncaughtFrozen(this, t);
					if (r) return r[1];
				},
				has: function (t) {
					return !!findUncaughtFrozen(this, t);
				},
				set: function (t, r) {
					var a = findUncaughtFrozen(this, t);
					a ? (a[1] = r) : this.entries.push([t, r]);
				},
				delete: function (t) {
					var r = b(this.entries, function (r) {
						return r[0] === t;
					});
					return ~r && this.entries.splice(r, 1), !!~r;
				},
			}),
				(t.exports = {
					getConstructor: function (t, r, a, h) {
						var m = t(function (t, o) {
								c(t, m, r), v(t, { type: r, id: _++, frozen: void 0 }), null != o && d(o, t[h], t, a);
							}),
							y = g(r),
							define = function (t, r, a) {
								var o = y(t),
									u = i(l(r), !0);
								return !0 === u ? uncaughtFrozenStore(o).set(r, a) : (u[o.id] = a), t;
							};
						return (
							o(m.prototype, {
								delete: function (t) {
									var r = y(this);
									if (!u(t)) return !1;
									var a = i(t);
									return !0 === a
										? uncaughtFrozenStore(r).delete(t)
										: a && p(a, r.id) && delete a[r.id];
								},
								has: function has(t) {
									var r = y(this);
									if (!u(t)) return !1;
									var a = i(t);
									return !0 === a ? uncaughtFrozenStore(r).has(t) : a && p(a, r.id);
								},
							}),
							o(
								m.prototype,
								a
									? {
											get: function get(t) {
												var r = y(this);
												if (u(t)) {
													var a = i(t);
													return !0 === a
														? uncaughtFrozenStore(r).get(t)
														: a
														? a[r.id]
														: void 0;
												}
											},
											set: function set(t, r) {
												return define(this, t, r);
											},
									  }
									: {
											add: function add(t) {
												return define(this, t, !0);
											},
									  }
							),
							m
						);
					},
				});
		},
		function (t, r, a) {
			var o = a(62),
				i = a(18),
				l = a(83),
				u = a(47),
				c = a(157),
				d = [].push,
				createMethod = function (t) {
					var r = 1 == t,
						a = 2 == t,
						h = 3 == t,
						p = 4 == t,
						m = 6 == t,
						v = 5 == t || m;
					return function (g, y, b, _) {
						for (
							var S,
								A,
								C = l(g),
								R = i(C),
								k = o(y, b, 3),
								P = u(R.length),
								w = 0,
								x = _ || c,
								T = r ? x(g, P) : a ? x(g, 0) : void 0;
							P > w;
							w++
						)
							if ((v || w in R) && ((A = k((S = R[w]), w, C)), t))
								if (r) T[w] = A;
								else if (A)
									switch (t) {
										case 3:
											return !0;
										case 5:
											return S;
										case 6:
											return w;
										case 2:
											d.call(T, S);
									}
								else if (p) return !1;
						return m ? -1 : h || p ? p : T;
					};
				};
			t.exports = {
				forEach: createMethod(0),
				map: createMethod(1),
				filter: createMethod(2),
				some: createMethod(3),
				every: createMethod(4),
				find: createMethod(5),
				findIndex: createMethod(6),
			};
		},
		function (t, r, a) {
			var o = a(22),
				i = a(158),
				l = a(57)("species");
			t.exports = function (t, r) {
				var a;
				return (
					i(t) &&
						("function" != typeof (a = t.constructor) || (a !== Array && !i(a.prototype))
							? o(a) && null === (a = a[l]) && (a = void 0)
							: (a = void 0)),
					new (void 0 === a ? Array : a)(0 === r ? 0 : r)
				);
			};
		},
		function (t, r, a) {
			var o = a(19);
			t.exports =
				Array.isArray ||
				function isArray(t) {
					return "Array" == o(t);
				};
		},
		function (t, r, a) {
			a(114), a(160), a(116);
			var o = a(43);
			t.exports = o.WeakSet;
		},
		function (t, r, a) {
			"use strict";
			a(146)(
				"WeakSet",
				function (t) {
					return function WeakSet() {
						return t(this, arguments.length ? arguments[0] : void 0);
					};
				},
				a(155)
			);
		},
		function (t, r, a) {
			a(162);
			var o = a(61);
			t.exports = o("String", "codePointAt");
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(78).codeAt;
			o(
				{ target: "String", proto: !0 },
				{
					codePointAt: function codePointAt(t) {
						return i(this, t);
					},
				}
			);
		},
		function (t, r, a) {
			a(164);
			var o = a(43);
			t.exports = o.String.fromCodePoint;
		},
		function (t, r, a) {
			var o = a(10),
				i = a(49),
				l = String.fromCharCode,
				u = String.fromCodePoint;
			o(
				{ target: "String", stat: !0, forced: !!u && 1 != u.length },
				{
					fromCodePoint: function fromCodePoint(t) {
						for (var r, a = [], o = arguments.length, u = 0; o > u; ) {
							if (((r = +arguments[u++]), i(r, 1114111) !== r))
								throw RangeError(r + " is not a valid code point");
							a.push(r < 65536 ? l(r) : l(55296 + ((r -= 65536) >> 10), (r % 1024) + 56320));
						}
						return a.join("");
					},
				}
			);
		},
		function (t, r, a) {
			a(166),
				a(114),
				a(168),
				a(172),
				a(173),
				a(174),
				a(175),
				a(176),
				a(177),
				a(178),
				a(179),
				a(180),
				a(181),
				a(182),
				a(183),
				a(184),
				a(185),
				a(186),
				a(187);
			var o = a(43);
			t.exports = o.Symbol;
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(14),
				l = a(158),
				u = a(22),
				c = a(83),
				d = a(47),
				h = a(93),
				p = a(157),
				m = a(167),
				v = a(57),
				g = a(133),
				y = v("isConcatSpreadable"),
				b = 9007199254740991,
				_ = "Maximum allowed index exceeded",
				S =
					g >= 51 ||
					!i(function () {
						var t = [];
						return (t[y] = !1), t.concat()[0] !== t;
					}),
				A = m("concat"),
				isConcatSpreadable = function (t) {
					if (!u(t)) return !1;
					var r = t[y];
					return void 0 !== r ? !!r : l(t);
				};
			o(
				{ target: "Array", proto: !0, forced: !S || !A },
				{
					concat: function concat(t) {
						var r,
							a,
							o,
							i,
							l,
							u = c(this),
							m = p(u, 0),
							v = 0;
						for (r = -1, o = arguments.length; r < o; r++)
							if (isConcatSpreadable((l = -1 === r ? u : arguments[r]))) {
								if (v + (i = d(l.length)) > b) throw TypeError(_);
								for (a = 0; a < i; a++, v++) a in l && h(m, v, l[a]);
							} else {
								if (v >= b) throw TypeError(_);
								h(m, v++, l);
							}
						return (m.length = v), m;
					},
				}
			);
		},
		function (t, r, a) {
			var o = a(14),
				i = a(57),
				l = a(133),
				u = i("species");
			t.exports = function (t) {
				return (
					l >= 51 ||
					!o(function () {
						var r = [];
						return (
							((r.constructor = {})[u] = function () {
								return { foo: 1 };
							}),
							1 !== r[t](Boolean).foo
						);
					})
				);
			};
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(11),
				l = a(42),
				u = a(37),
				c = a(13),
				d = a(58),
				h = a(59),
				p = a(14),
				m = a(23),
				v = a(158),
				g = a(22),
				y = a(28),
				b = a(83),
				_ = a(17),
				S = a(21),
				A = a(16),
				C = a(71),
				R = a(73),
				k = a(44),
				P = a(169),
				w = a(51),
				x = a(12),
				T = a(27),
				E = a(15),
				O = a(26),
				I = a(29),
				D = a(36),
				L = a(35),
				W = a(39),
				M = a(38),
				j = a(57),
				N = a(170),
				B = a(171),
				q = a(85),
				G = a(33),
				U = a(156).forEach,
				z = L("hidden"),
				H = "Symbol",
				Y = j("toPrimitive"),
				X = G.set,
				V = G.getterFor(H),
				Q = Object.prototype,
				K = i.Symbol,
				J = l("JSON", "stringify"),
				$ = x.f,
				Z = T.f,
				ee = P.f,
				te = E.f,
				re = D("symbols"),
				ne = D("op-symbols"),
				ae = D("string-to-symbol-registry"),
				oe = D("symbol-to-string-registry"),
				ie = D("wks"),
				se = i.QObject,
				le = !se || !se.prototype || !se.prototype.findChild,
				ue =
					c &&
					p(function () {
						return (
							7 !=
							C(
								Z({}, "a", {
									get: function () {
										return Z(this, "a", { value: 7 }).a;
									},
								})
							).a
						);
					})
						? function (t, r, a) {
								var o = $(Q, r);
								o && delete Q[r], Z(t, r, a), o && t !== Q && Z(Q, r, o);
						  }
						: Z,
				wrap = function (t, r) {
					var a = (re[t] = C(K.prototype));
					return X(a, { type: H, tag: t, description: r }), c || (a.description = r), a;
				},
				ce = h
					? function (t) {
							return "symbol" == typeof t;
					  }
					: function (t) {
							return Object(t) instanceof K;
					  },
				de = function defineProperty(t, r, a) {
					t === Q && de(ne, r, a), y(t);
					var o = S(r, !0);
					return (
						y(a),
						m(re, o)
							? (a.enumerable
									? (m(t, z) && t[z][o] && (t[z][o] = !1), (a = C(a, { enumerable: A(0, !1) })))
									: (m(t, z) || Z(t, z, A(1, {})), (t[z][o] = !0)),
							  ue(t, o, a))
							: Z(t, o, a)
					);
				},
				fe = function defineProperties(t, r) {
					y(t);
					var a = _(r),
						o = R(a).concat(ve(a));
					return (
						U(o, function (r) {
							(c && !he.call(a, r)) || de(t, r, a[r]);
						}),
						t
					);
				},
				he = function propertyIsEnumerable(t) {
					var r = S(t, !0),
						a = te.call(this, r);
					return (
						!(this === Q && m(re, r) && !m(ne, r)) &&
						(!(a || !m(this, r) || !m(re, r) || (m(this, z) && this[z][r])) || a)
					);
				},
				pe = function getOwnPropertyDescriptor(t, r) {
					var a = _(t),
						o = S(r, !0);
					if (a !== Q || !m(re, o) || m(ne, o)) {
						var i = $(a, o);
						return !i || !m(re, o) || (m(a, z) && a[z][o]) || (i.enumerable = !0), i;
					}
				},
				me = function getOwnPropertyNames(t) {
					var r = ee(_(t)),
						a = [];
					return (
						U(r, function (t) {
							m(re, t) || m(W, t) || a.push(t);
						}),
						a
					);
				},
				ve = function getOwnPropertySymbols(t) {
					var r = t === Q,
						a = ee(r ? ne : _(t)),
						o = [];
					return (
						U(a, function (t) {
							!m(re, t) || (r && !m(Q, t)) || o.push(re[t]);
						}),
						o
					);
				};
			(d ||
				(I(
					(K = function Symbol() {
						if (this instanceof K) throw TypeError("Symbol is not a constructor");
						var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
							r = M(t),
							setter = function (t) {
								this === Q && setter.call(ne, t),
									m(this, z) && m(this[z], r) && (this[z][r] = !1),
									ue(this, r, A(1, t));
							};
						return c && le && ue(Q, r, { configurable: !0, set: setter }), wrap(r, t);
					}).prototype,
					"toString",
					function toString() {
						return V(this).tag;
					}
				),
				I(K, "withoutSetter", function (t) {
					return wrap(M(t), t);
				}),
				(E.f = he),
				(T.f = de),
				(x.f = pe),
				(k.f = P.f = me),
				(w.f = ve),
				(N.f = function (t) {
					return wrap(j(t), t);
				}),
				c &&
					(Z(K.prototype, "description", {
						configurable: !0,
						get: function description() {
							return V(this).description;
						},
					}),
					u || I(Q, "propertyIsEnumerable", he, { unsafe: !0 }))),
			o({ global: !0, wrap: !0, forced: !d, sham: !d }, { Symbol: K }),
			U(R(ie), function (t) {
				B(t);
			}),
			o(
				{ target: H, stat: !0, forced: !d },
				{
					for: function (t) {
						var r = String(t);
						if (m(ae, r)) return ae[r];
						var a = K(r);
						return (ae[r] = a), (oe[a] = r), a;
					},
					keyFor: function keyFor(t) {
						if (!ce(t)) throw TypeError(t + " is not a symbol");
						if (m(oe, t)) return oe[t];
					},
					useSetter: function () {
						le = !0;
					},
					useSimple: function () {
						le = !1;
					},
				}
			),
			o(
				{ target: "Object", stat: !0, forced: !d, sham: !c },
				{
					create: function create(t, r) {
						return void 0 === r ? C(t) : fe(C(t), r);
					},
					defineProperty: de,
					defineProperties: fe,
					getOwnPropertyDescriptor: pe,
				}
			),
			o({ target: "Object", stat: !0, forced: !d }, { getOwnPropertyNames: me, getOwnPropertySymbols: ve }),
			o(
				{
					target: "Object",
					stat: !0,
					forced: p(function () {
						w.f(1);
					}),
				},
				{
					getOwnPropertySymbols: function getOwnPropertySymbols(t) {
						return w.f(b(t));
					},
				}
			),
			J) &&
				o(
					{
						target: "JSON",
						stat: !0,
						forced:
							!d ||
							p(function () {
								var t = K();
								return "[null]" != J([t]) || "{}" != J({ a: t }) || "{}" != J(Object(t));
							}),
					},
					{
						stringify: function stringify(t, r, a) {
							for (var o, i = [t], l = 1; arguments.length > l; ) i.push(arguments[l++]);
							if (((o = r), (g(r) || void 0 !== t) && !ce(t)))
								return (
									v(r) ||
										(r = function (t, r) {
											if (("function" == typeof o && (r = o.call(this, t, r)), !ce(r))) return r;
										}),
									(i[1] = r),
									J.apply(null, i)
								);
						},
					}
				);
			K.prototype[Y] || O(K.prototype, Y, K.prototype.valueOf), q(K, H), (W[z] = !0);
		},
		function (t, r, a) {
			var o = a(17),
				i = a(44).f,
				l = {}.toString,
				u =
					"object" == typeof window && window && Object.getOwnPropertyNames
						? Object.getOwnPropertyNames(window)
						: [];
			t.exports.f = function getOwnPropertyNames(t) {
				return u && "[object Window]" == l.call(t)
					? (function (t) {
							try {
								return i(t);
							} catch (t) {
								return u.slice();
							}
					  })(t)
					: i(o(t));
			};
		},
		function (t, r, a) {
			var o = a(57);
			r.f = o;
		},
		function (t, r, a) {
			var o = a(43),
				i = a(23),
				l = a(170),
				u = a(27).f;
			t.exports = function (t) {
				var r = o.Symbol || (o.Symbol = {});
				i(r, t) || u(r, t, { value: l.f(t) });
			};
		},
		function (t, r, a) {
			a(171)("asyncIterator");
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(13),
				l = a(11),
				u = a(23),
				c = a(22),
				d = a(27).f,
				h = a(40),
				p = l.Symbol;
			if (i && "function" == typeof p && (!("description" in p.prototype) || void 0 !== p().description)) {
				var m = {},
					v = function Symbol() {
						var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
							r = this instanceof v ? new p(t) : void 0 === t ? p() : p(t);
						return "" === t && (m[r] = !0), r;
					};
				h(v, p);
				var g = (v.prototype = p.prototype);
				g.constructor = v;
				var y = g.toString,
					b = "Symbol(test)" == String(p("test")),
					_ = /^Symbol\((.*)\)[^)]+$/;
				d(g, "description", {
					configurable: !0,
					get: function description() {
						var t = c(this) ? this.valueOf() : this,
							r = y.call(t);
						if (u(m, t)) return "";
						var a = b ? r.slice(7, -1) : r.replace(_, "$1");
						return "" === a ? void 0 : a;
					},
				}),
					o({ global: !0, forced: !0 }, { Symbol: v });
			}
		},
		function (t, r, a) {
			a(171)("hasInstance");
		},
		function (t, r, a) {
			a(171)("isConcatSpreadable");
		},
		function (t, r, a) {
			a(171)("iterator");
		},
		function (t, r, a) {
			a(171)("match");
		},
		function (t, r, a) {
			a(171)("matchAll");
		},
		function (t, r, a) {
			a(171)("replace");
		},
		function (t, r, a) {
			a(171)("search");
		},
		function (t, r, a) {
			a(171)("species");
		},
		function (t, r, a) {
			a(171)("split");
		},
		function (t, r, a) {
			a(171)("toPrimitive");
		},
		function (t, r, a) {
			a(171)("toStringTag");
		},
		function (t, r, a) {
			a(171)("unscopables");
		},
		function (t, r, a) {
			a(85)(Math, "Math", !0);
		},
		function (t, r, a) {
			var o = a(11);
			a(85)(o.JSON, "JSON", !0);
		},
		function (t, r, a) {
			a(189);
			var o = a(61);
			t.exports = o("String", "padStart");
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(190).start;
			o(
				{ target: "String", proto: !0, forced: a(192) },
				{
					padStart: function padStart(t) {
						return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			);
		},
		function (t, r, a) {
			var o = a(47),
				i = a(191),
				l = a(20),
				u = Math.ceil,
				createMethod = function (t) {
					return function (r, a, c) {
						var d,
							h,
							p = String(l(r)),
							m = p.length,
							v = void 0 === c ? " " : String(c),
							g = o(a);
						return g <= m || "" == v
							? p
							: ((d = g - m),
							  (h = i.call(v, u(d / v.length))).length > d && (h = h.slice(0, d)),
							  t ? p + h : h + p);
					};
				};
			t.exports = { start: createMethod(!1), end: createMethod(!0) };
		},
		function (t, r, a) {
			"use strict";
			var o = a(48),
				i = a(20);
			t.exports =
				"".repeat ||
				function repeat(t) {
					var r = String(i(this)),
						a = "",
						l = o(t);
					if (l < 0 || l == 1 / 0) throw RangeError("Wrong number of repetitions");
					for (; l > 0; (l >>>= 1) && (r += r)) 1 & l && (a += r);
					return a;
				};
		},
		function (t, r, a) {
			var o = a(127);
			t.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
		},
		function (t, r, a) {
			a(194);
			var o = a(61);
			t.exports = o("String", "padEnd");
		},
		function (t, r, a) {
			"use strict";
			var o = a(10),
				i = a(190).end;
			o(
				{ target: "String", proto: !0, forced: a(192) },
				{
					padEnd: function padEnd(t) {
						return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
					},
				}
			);
		},
		function (t, r, a) {
			a(196);
			var o = a(43);
			t.exports = o.Object.values;
		},
		function (t, r, a) {
			var o = a(10),
				i = a(197).values;
			o(
				{ target: "Object", stat: !0 },
				{
					values: function values(t) {
						return i(t);
					},
				}
			);
		},
		function (t, r, a) {
			var o = a(13),
				i = a(73),
				l = a(17),
				u = a(15).f,
				createMethod = function (t) {
					return function (r) {
						for (var a, c = l(r), d = i(c), h = d.length, p = 0, m = []; h > p; )
							(a = d[p++]), (o && !u.call(c, a)) || m.push(t ? [a, c[a]] : c[a]);
						return m;
					};
				};
			t.exports = { entries: createMethod(!0), values: createMethod(!1) };
		},
		function (module, exports, __w_pdfjs_require__) {
			"use strict";
			Object.defineProperty(exports, "__esModule", { value: !0 }),
				(exports.getDocument = getDocument),
				(exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory),
				(exports.build =
					exports.version =
					exports.PDFPageProxy =
					exports.PDFDocumentProxy =
					exports.PDFWorker =
					exports.PDFDataRangeTransport =
					exports.LoopbackPort =
						void 0);
			var _regenerator = _interopRequireDefault(__w_pdfjs_require__(2)),
				_util = __w_pdfjs_require__(5),
				_display_utils = __w_pdfjs_require__(1),
				_font_loader = __w_pdfjs_require__(199),
				_api_compatibility = __w_pdfjs_require__(200),
				_canvas = __w_pdfjs_require__(201),
				_worker_options = __w_pdfjs_require__(203),
				_is_node = __w_pdfjs_require__(7),
				_message_handler = __w_pdfjs_require__(204),
				_metadata = __w_pdfjs_require__(205),
				_transport_stream = __w_pdfjs_require__(207),
				_webgl = __w_pdfjs_require__(208);
			function _interopRequireDefault(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function asyncGeneratorStep(t, r, a, o, i, l, u) {
				try {
					var c = t[l](u),
						d = c.value;
				} catch (t) {
					return void a(t);
				}
				c.done ? r(d) : Promise.resolve(d).then(o, i);
			}
			function _asyncToGenerator(t) {
				return function () {
					var r = this,
						a = arguments;
					return new Promise(function (o, i) {
						var l = t.apply(r, a);
						function _next(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "next", t);
						}
						function _throw(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "throw", t);
						}
						_next(void 0);
					});
				};
			}
			function _toConsumableArray(t) {
				return (
					_arrayWithoutHoles(t) ||
					_iterableToArray(t) ||
					_unsupportedIterableToArray(t) ||
					_nonIterableSpread()
				);
			}
			function _nonIterableSpread() {
				throw new TypeError(
					"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				);
			}
			function _iterableToArray(t) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
			}
			function _arrayWithoutHoles(t) {
				if (Array.isArray(t)) return _arrayLikeToArray(t);
			}
			function _createForOfIteratorHelper(t, r) {
				var a;
				if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
					if (
						Array.isArray(t) ||
						(a = _unsupportedIterableToArray(t)) ||
						(r && t && "number" == typeof t.length)
					) {
						a && (t = a);
						var o = 0,
							i = function F() {};
						return {
							s: i,
							n: function n() {
								return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
							},
							e: function e(t) {
								throw t;
							},
							f: i,
						};
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				}
				var l,
					u = !0,
					c = !1;
				return {
					s: function s() {
						a = t[Symbol.iterator]();
					},
					n: function n() {
						var t = a.next();
						return (u = t.done), t;
					},
					e: function e(t) {
						(c = !0), (l = t);
					},
					f: function f() {
						try {
							u || null == a.return || a.return();
						} finally {
							if (c) throw l;
						}
					},
				};
			}
			function _classCallCheck(t, r) {
				if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _createClass(t, r, a) {
				return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
			}
			function _slicedToArray(t, r) {
				return (
					_arrayWithHoles(t) ||
					_iterableToArrayLimit(t, r) ||
					_unsupportedIterableToArray(t, r) ||
					_nonIterableRest()
				);
			}
			function _nonIterableRest() {
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
				);
			}
			function _unsupportedIterableToArray(t, r) {
				if (t) {
					if ("string" == typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					return (
						"Object" === a && t.constructor && (a = t.constructor.name),
						"Map" === a || "Set" === a
							? Array.from(t)
							: "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
							? _arrayLikeToArray(t, r)
							: void 0
					);
				}
			}
			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o;
			}
			function _iterableToArrayLimit(t, r) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
					var a = [],
						o = !0,
						i = !1,
						l = void 0;
					try {
						for (
							var u, c = t[Symbol.iterator]();
							!(o = (u = c.next()).done) && (a.push(u.value), !r || a.length !== r);
							o = !0
						);
					} catch (t) {
						(i = !0), (l = t);
					} finally {
						try {
							o || null == c.return || c.return();
						} finally {
							if (i) throw l;
						}
					}
					return a;
				}
			}
			function _arrayWithHoles(t) {
				if (Array.isArray(t)) return t;
			}
			function _typeof(t) {
				return (_typeof =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function _typeof(t) {
								return typeof t;
						  }
						: function _typeof(t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  })(t);
			}
			var DEFAULT_RANGE_CHUNK_SIZE = 65536,
				RENDERING_CANCELLED_TIMEOUT = 100,
				createPDFNetworkStream;
			function setPDFNetworkStreamFactory(t) {
				createPDFNetworkStream = t;
			}
			function getDocument(t) {
				var r,
					a = new PDFDocumentLoadingTask();
				if ("string" == typeof t) r = { url: t };
				else if ((0, _util.isArrayBuffer)(t)) r = { data: t };
				else if (t instanceof PDFDataRangeTransport) r = { range: t };
				else {
					if ("object" !== _typeof(t))
						throw new Error(
							"Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"
						);
					if (!t.url && !t.data && !t.range)
						throw new Error("Invalid parameter object: need either .data, .range or .url");
					r = t;
				}
				var o = Object.create(null),
					i = null,
					l = null;
				for (var u in r)
					if ("url" !== u || "undefined" == typeof window)
						if ("range" !== u)
							if ("worker" !== u)
								if ("data" !== u || r[u] instanceof Uint8Array) o[u] = r[u];
								else {
									var c = r[u];
									if ("string" == typeof c) o[u] = (0, _util.stringToBytes)(c);
									else if ("object" !== _typeof(c) || null === c || isNaN(c.length)) {
										if (!(0, _util.isArrayBuffer)(c))
											throw new Error(
												"Invalid PDF binary data: either typed array, string or array-like object is expected in the data property."
											);
										o[u] = new Uint8Array(c);
									} else o[u] = new Uint8Array(c);
								}
							else l = r[u];
						else i = r[u];
					else o[u] = new URL(r[u], window.location).href;
				if (
					((o.rangeChunkSize = o.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE),
					(o.CMapReaderFactory = o.CMapReaderFactory || _display_utils.DOMCMapReaderFactory),
					(o.ignoreErrors = !0 !== o.stopAtErrors),
					(o.fontExtraProperties = !0 === o.fontExtraProperties),
					(o.pdfBug = !0 === o.pdfBug),
					Number.isInteger(o.maxImageSize) || (o.maxImageSize = -1),
					"boolean" != typeof o.isEvalSupported && (o.isEvalSupported = !0),
					"boolean" != typeof o.disableFontFace &&
						(o.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || !1),
					"boolean" != typeof o.disableRange && (o.disableRange = !1),
					"boolean" != typeof o.disableStream && (o.disableStream = !1),
					"boolean" != typeof o.disableAutoFetch && (o.disableAutoFetch = !1),
					(0, _util.setVerbosityLevel)(o.verbosity),
					!l)
				) {
					var d = { verbosity: o.verbosity, port: _worker_options.GlobalWorkerOptions.workerPort };
					(l = d.port ? PDFWorker.fromPort(d) : new PDFWorker(d)), (a._worker = l);
				}
				var h = a.docId;
				return (
					l.promise
						.then(function () {
							if (a.destroyed) throw new Error("Loading aborted");
							var t = _fetchDocument(l, o, i, h),
								r = new Promise(function (t) {
									var r;
									i
										? (r = new _transport_stream.PDFDataTransportStream(
												{
													length: o.length,
													initialData: o.initialData,
													progressiveDone: o.progressiveDone,
													disableRange: o.disableRange,
													disableStream: o.disableStream,
												},
												i
										  ))
										: o.data ||
										  (r = createPDFNetworkStream({
												url: o.url,
												length: o.length,
												httpHeaders: o.httpHeaders,
												withCredentials: o.withCredentials,
												rangeChunkSize: o.rangeChunkSize,
												disableRange: o.disableRange,
												disableStream: o.disableStream,
										  })),
										t(r);
								});
							return Promise.all([t, r]).then(function (t) {
								var r = _slicedToArray(t, 2),
									i = r[0],
									u = r[1];
								if (a.destroyed) throw new Error("Loading aborted");
								var c = new _message_handler.MessageHandler(h, i, l.port);
								c.postMessageTransfers = l.postMessageTransfers;
								var d = new WorkerTransport(c, a, u, o);
								(a._transport = d), c.send("Ready", null);
							});
						})
						.catch(a._capability.reject),
					a
				);
			}
			function _fetchDocument(t, r, a, o) {
				return t.destroyed
					? Promise.reject(new Error("Worker was destroyed"))
					: (a &&
							((r.length = a.length),
							(r.initialData = a.initialData),
							(r.progressiveDone = a.progressiveDone)),
					  t.messageHandler
							.sendWithPromise("GetDocRequest", {
								docId: o,
								apiVersion: "2.5.207",
								source: {
									data: r.data,
									url: r.url,
									password: r.password,
									disableAutoFetch: r.disableAutoFetch,
									rangeChunkSize: r.rangeChunkSize,
									length: r.length,
								},
								maxImageSize: r.maxImageSize,
								disableFontFace: r.disableFontFace,
								postMessageTransfers: t.postMessageTransfers,
								docBaseUrl: r.docBaseUrl,
								ignoreErrors: r.ignoreErrors,
								isEvalSupported: r.isEvalSupported,
								fontExtraProperties: r.fontExtraProperties,
							})
							.then(function (r) {
								if (t.destroyed) throw new Error("Worker was destroyed");
								return r;
							}));
			}
			var PDFDocumentLoadingTask = (function PDFDocumentLoadingTaskClosure() {
					var t = 0;
					return (function () {
						function PDFDocumentLoadingTask() {
							_classCallCheck(this, PDFDocumentLoadingTask),
								(this._capability = (0, _util.createPromiseCapability)()),
								(this._transport = null),
								(this._worker = null),
								(this.docId = "d" + t++),
								(this.destroyed = !1),
								(this.onPassword = null),
								(this.onProgress = null),
								(this.onUnsupportedFeature = null);
						}
						return (
							_createClass(PDFDocumentLoadingTask, [
								{
									key: "destroy",
									value: function destroy() {
										var t = this;
										return (
											(this.destroyed = !0),
											(this._transport ? this._transport.destroy() : Promise.resolve()).then(
												function () {
													(t._transport = null),
														t._worker && (t._worker.destroy(), (t._worker = null));
												}
											)
										);
									},
								},
								{
									key: "promise",
									get: function get() {
										return this._capability.promise;
									},
								},
							]),
							PDFDocumentLoadingTask
						);
					})();
				})(),
				PDFDataRangeTransport = (function () {
					function PDFDataRangeTransport(t, r) {
						var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						_classCallCheck(this, PDFDataRangeTransport),
							(this.length = t),
							(this.initialData = r),
							(this.progressiveDone = a),
							(this._rangeListeners = []),
							(this._progressListeners = []),
							(this._progressiveReadListeners = []),
							(this._progressiveDoneListeners = []),
							(this._readyCapability = (0, _util.createPromiseCapability)());
					}
					return (
						_createClass(PDFDataRangeTransport, [
							{
								key: "addRangeListener",
								value: function addRangeListener(t) {
									this._rangeListeners.push(t);
								},
							},
							{
								key: "addProgressListener",
								value: function addProgressListener(t) {
									this._progressListeners.push(t);
								},
							},
							{
								key: "addProgressiveReadListener",
								value: function addProgressiveReadListener(t) {
									this._progressiveReadListeners.push(t);
								},
							},
							{
								key: "addProgressiveDoneListener",
								value: function addProgressiveDoneListener(t) {
									this._progressiveDoneListeners.push(t);
								},
							},
							{
								key: "onDataRange",
								value: function onDataRange(t, r) {
									var a,
										o = _createForOfIteratorHelper(this._rangeListeners);
									try {
										for (o.s(); !(a = o.n()).done; ) {
											(0, a.value)(t, r);
										}
									} catch (t) {
										o.e(t);
									} finally {
										o.f();
									}
								},
							},
							{
								key: "onDataProgress",
								value: function onDataProgress(t, r) {
									var a = this;
									this._readyCapability.promise.then(function () {
										var o,
											i = _createForOfIteratorHelper(a._progressListeners);
										try {
											for (i.s(); !(o = i.n()).done; ) {
												(0, o.value)(t, r);
											}
										} catch (t) {
											i.e(t);
										} finally {
											i.f();
										}
									});
								},
							},
							{
								key: "onDataProgressiveRead",
								value: function onDataProgressiveRead(t) {
									var r = this;
									this._readyCapability.promise.then(function () {
										var a,
											o = _createForOfIteratorHelper(r._progressiveReadListeners);
										try {
											for (o.s(); !(a = o.n()).done; ) {
												(0, a.value)(t);
											}
										} catch (t) {
											o.e(t);
										} finally {
											o.f();
										}
									});
								},
							},
							{
								key: "onDataProgressiveDone",
								value: function onDataProgressiveDone() {
									var t = this;
									this._readyCapability.promise.then(function () {
										var r,
											a = _createForOfIteratorHelper(t._progressiveDoneListeners);
										try {
											for (a.s(); !(r = a.n()).done; ) {
												(0, r.value)();
											}
										} catch (t) {
											a.e(t);
										} finally {
											a.f();
										}
									});
								},
							},
							{
								key: "transportReady",
								value: function transportReady() {
									this._readyCapability.resolve();
								},
							},
							{
								key: "requestDataRange",
								value: function requestDataRange(t, r) {
									(0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
								},
							},
							{ key: "abort", value: function abort() {} },
						]),
						PDFDataRangeTransport
					);
				})();
			exports.PDFDataRangeTransport = PDFDataRangeTransport;
			var PDFDocumentProxy = (function () {
				function PDFDocumentProxy(t, r) {
					_classCallCheck(this, PDFDocumentProxy), (this._pdfInfo = t), (this._transport = r);
				}
				return (
					_createClass(PDFDocumentProxy, [
						{
							key: "getPage",
							value: function getPage(t) {
								return this._transport.getPage(t);
							},
						},
						{
							key: "getPageIndex",
							value: function getPageIndex(t) {
								return this._transport.getPageIndex(t);
							},
						},
						{
							key: "getDestinations",
							value: function getDestinations() {
								return this._transport.getDestinations();
							},
						},
						{
							key: "getDestination",
							value: function getDestination(t) {
								return this._transport.getDestination(t);
							},
						},
						{
							key: "getPageLabels",
							value: function getPageLabels() {
								return this._transport.getPageLabels();
							},
						},
						{
							key: "getPageLayout",
							value: function getPageLayout() {
								return this._transport.getPageLayout();
							},
						},
						{
							key: "getPageMode",
							value: function getPageMode() {
								return this._transport.getPageMode();
							},
						},
						{
							key: "getViewerPreferences",
							value: function getViewerPreferences() {
								return this._transport.getViewerPreferences();
							},
						},
						{
							key: "getOpenAction",
							value: function getOpenAction() {
								return this._transport.getOpenAction();
							},
						},
						{
							key: "getOpenActionDestination",
							value: function getOpenActionDestination() {
								return (
									(0, _display_utils.deprecated)(
										"getOpenActionDestination, use getOpenAction instead."
									),
									this.getOpenAction().then(function (t) {
										return t && t.dest ? t.dest : null;
									})
								);
							},
						},
						{
							key: "getAttachments",
							value: function getAttachments() {
								return this._transport.getAttachments();
							},
						},
						{
							key: "getJavaScript",
							value: function getJavaScript() {
								return this._transport.getJavaScript();
							},
						},
						{
							key: "getOutline",
							value: function getOutline() {
								return this._transport.getOutline();
							},
						},
						{
							key: "getPermissions",
							value: function getPermissions() {
								return this._transport.getPermissions();
							},
						},
						{
							key: "getMetadata",
							value: function getMetadata() {
								return this._transport.getMetadata();
							},
						},
						{
							key: "getData",
							value: function getData() {
								return this._transport.getData();
							},
						},
						{
							key: "getDownloadInfo",
							value: function getDownloadInfo() {
								return this._transport.downloadInfoCapability.promise;
							},
						},
						{
							key: "getStats",
							value: function getStats() {
								return this._transport.getStats();
							},
						},
						{
							key: "cleanup",
							value: function cleanup() {
								return this._transport.startCleanup();
							},
						},
						{
							key: "destroy",
							value: function destroy() {
								return this.loadingTask.destroy();
							},
						},
						{
							key: "numPages",
							get: function get() {
								return this._pdfInfo.numPages;
							},
						},
						{
							key: "fingerprint",
							get: function get() {
								return this._pdfInfo.fingerprint;
							},
						},
						{
							key: "loadingParams",
							get: function get() {
								return this._transport.loadingParams;
							},
						},
						{
							key: "loadingTask",
							get: function get() {
								return this._transport.loadingTask;
							},
						},
					]),
					PDFDocumentProxy
				);
			})();
			exports.PDFDocumentProxy = PDFDocumentProxy;
			var PDFPageProxy = (function () {
				function PDFPageProxy(t, r, a) {
					var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					_classCallCheck(this, PDFPageProxy),
						(this._pageIndex = t),
						(this._pageInfo = r),
						(this._transport = a),
						(this._stats = o ? new _display_utils.StatTimer() : null),
						(this._pdfBug = o),
						(this.commonObjs = a.commonObjs),
						(this.objs = new PDFObjects()),
						(this.cleanupAfterRender = !1),
						(this.pendingCleanup = !1),
						(this.intentStates = Object.create(null)),
						(this.destroyed = !1);
				}
				return (
					_createClass(PDFPageProxy, [
						{
							key: "getViewport",
							value: function getViewport() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									r = t.scale,
									a = t.rotation,
									o = void 0 === a ? this.rotate : a,
									i = t.offsetX,
									l = void 0 === i ? 0 : i,
									u = t.offsetY,
									c = void 0 === u ? 0 : u,
									d = t.dontFlip,
									h = void 0 !== d && d;
								return new _display_utils.PageViewport({
									viewBox: this.view,
									scale: r,
									rotation: o,
									offsetX: l,
									offsetY: c,
									dontFlip: h,
								});
							},
						},
						{
							key: "getAnnotations",
							value: function getAnnotations() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									r = t.intent,
									a = void 0 === r ? null : r;
								return (
									(this.annotationsPromise && this.annotationsIntent === a) ||
										((this.annotationsPromise = this._transport.getAnnotations(this._pageIndex, a)),
										(this.annotationsIntent = a)),
									this.annotationsPromise
								);
							},
						},
						{
							key: "render",
							value: function render(t) {
								var r = this,
									a = t.canvasContext,
									o = t.viewport,
									i = t.intent,
									l = void 0 === i ? "display" : i,
									u = t.enableWebGL,
									c = void 0 !== u && u,
									d = t.renderInteractiveForms,
									h = void 0 !== d && d,
									p = t.transform,
									m = void 0 === p ? null : p,
									v = t.imageLayer,
									g = void 0 === v ? null : v,
									y = t.canvasFactory,
									b = void 0 === y ? null : y,
									_ = t.background,
									S = void 0 === _ ? null : _;
								this._stats && this._stats.time("Overall");
								var A = "print" === l ? "print" : "display";
								(this.pendingCleanup = !1),
									this.intentStates[A] || (this.intentStates[A] = Object.create(null));
								var C = this.intentStates[A];
								C.streamReaderCancelTimeout &&
									(clearTimeout(C.streamReaderCancelTimeout), (C.streamReaderCancelTimeout = null));
								var R = b || new _display_utils.DOMCanvasFactory(),
									k = new _webgl.WebGLContext({ enable: c });
								C.displayReadyCapability ||
									((C.displayReadyCapability = (0, _util.createPromiseCapability)()),
									(C.operatorList = { fnArray: [], argsArray: [], lastChunk: !1 }),
									this._stats && this._stats.time("Page Request"),
									this._pumpOperatorList({
										pageIndex: this._pageIndex,
										intent: A,
										renderInteractiveForms: !0 === h,
									}));
								var P = function complete(t) {
										var a = C.renderTasks.indexOf(w);
										a >= 0 && C.renderTasks.splice(a, 1),
											(r.cleanupAfterRender || "print" === A) && (r.pendingCleanup = !0),
											r._tryCleanup(),
											t
												? (w.capability.reject(t),
												  r._abortOperatorList({ intentState: C, reason: t }))
												: w.capability.resolve(),
											r._stats && (r._stats.timeEnd("Rendering"), r._stats.timeEnd("Overall"));
									},
									w = new InternalRenderTask({
										callback: P,
										params: {
											canvasContext: a,
											viewport: o,
											transform: m,
											imageLayer: g,
											background: S,
										},
										objs: this.objs,
										commonObjs: this.commonObjs,
										operatorList: C.operatorList,
										pageIndex: this._pageIndex,
										canvasFactory: R,
										webGLContext: k,
										useRequestAnimationFrame: "print" !== A,
										pdfBug: this._pdfBug,
									});
								C.renderTasks || (C.renderTasks = []), C.renderTasks.push(w);
								var x = w.task;
								return (
									C.displayReadyCapability.promise
										.then(function (t) {
											r.pendingCleanup
												? P()
												: (r._stats && r._stats.time("Rendering"),
												  w.initializeGraphics(t),
												  w.operatorListChanged());
										})
										.catch(P),
									x
								);
							},
						},
						{
							key: "getOperatorList",
							value: function getOperatorList() {
								var t = "oplist";
								this.intentStates.oplist || (this.intentStates.oplist = Object.create(null));
								var r,
									a = this.intentStates.oplist;
								return (
									a.opListReadCapability ||
										(((r = {}).operatorListChanged = function operatorListChanged() {
											if (a.operatorList.lastChunk) {
												a.opListReadCapability.resolve(a.operatorList);
												var t = a.renderTasks.indexOf(r);
												t >= 0 && a.renderTasks.splice(t, 1);
											}
										}),
										(a.opListReadCapability = (0, _util.createPromiseCapability)()),
										(a.renderTasks = []),
										a.renderTasks.push(r),
										(a.operatorList = { fnArray: [], argsArray: [], lastChunk: !1 }),
										this._stats && this._stats.time("Page Request"),
										this._pumpOperatorList({ pageIndex: this._pageIndex, intent: t })),
									a.opListReadCapability.promise
								);
							},
						},
						{
							key: "streamTextContent",
							value: function streamTextContent() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									r = t.normalizeWhitespace,
									a = void 0 !== r && r,
									o = t.disableCombineTextItems,
									i = void 0 !== o && o,
									l = 100;
								return this._transport.messageHandler.sendWithStream(
									"GetTextContent",
									{
										pageIndex: this._pageIndex,
										normalizeWhitespace: !0 === a,
										combineTextItems: !0 !== i,
									},
									{
										highWaterMark: l,
										size: function size(t) {
											return t.items.length;
										},
									}
								);
							},
						},
						{
							key: "getTextContent",
							value: function getTextContent() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									r = this.streamTextContent(t);
								return new Promise(function (t, a) {
									var o = r.getReader(),
										i = { items: [], styles: Object.create(null) };
									!(function pump() {
										o.read().then(function (r) {
											var a,
												o = r.value;
											r.done
												? t(i)
												: (Object.assign(i.styles, o.styles),
												  (a = i.items).push.apply(a, _toConsumableArray(o.items)),
												  pump());
										}, a);
									})();
								});
							},
						},
						{
							key: "_destroy",
							value: function _destroy() {
								var t = this;
								(this.destroyed = !0), (this._transport.pageCache[this._pageIndex] = null);
								var r = [];
								return (
									Object.keys(this.intentStates).forEach(function (a) {
										var o = t.intentStates[a];
										t._abortOperatorList({
											intentState: o,
											reason: new Error("Page was destroyed."),
											force: !0,
										}),
											"oplist" !== a &&
												o.renderTasks.forEach(function (t) {
													var a = t.capability.promise.catch(function () {});
													r.push(a), t.cancel();
												});
									}),
									this.objs.clear(),
									(this.annotationsPromise = null),
									(this.pendingCleanup = !1),
									Promise.all(r)
								);
							},
						},
						{
							key: "cleanup",
							value: function cleanup() {
								var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								return (this.pendingCleanup = !0), this._tryCleanup(t);
							},
						},
						{
							key: "_tryCleanup",
							value: function _tryCleanup() {
								var t = this,
									r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
								return (
									!(
										!this.pendingCleanup ||
										Object.keys(this.intentStates).some(function (r) {
											var a = t.intentStates[r];
											return 0 !== a.renderTasks.length || !a.operatorList.lastChunk;
										})
									) &&
									(Object.keys(this.intentStates).forEach(function (r) {
										delete t.intentStates[r];
									}),
									this.objs.clear(),
									(this.annotationsPromise = null),
									r && this._stats && (this._stats = new _display_utils.StatTimer()),
									(this.pendingCleanup = !1),
									!0)
								);
							},
						},
						{
							key: "_startRenderPage",
							value: function _startRenderPage(t, r) {
								var a = this.intentStates[r];
								a &&
									(this._stats && this._stats.timeEnd("Page Request"),
									a.displayReadyCapability && a.displayReadyCapability.resolve(t));
							},
						},
						{
							key: "_renderPageChunk",
							value: function _renderPageChunk(t, r) {
								for (var a = 0, o = t.length; a < o; a++)
									r.operatorList.fnArray.push(t.fnArray[a]),
										r.operatorList.argsArray.push(t.argsArray[a]);
								r.operatorList.lastChunk = t.lastChunk;
								for (var i = 0; i < r.renderTasks.length; i++) r.renderTasks[i].operatorListChanged();
								t.lastChunk && this._tryCleanup();
							},
						},
						{
							key: "_pumpOperatorList",
							value: function _pumpOperatorList(t) {
								var r = this;
								(0, _util.assert)(
									t.intent,
									'PDFPageProxy._pumpOperatorList: Expected "intent" argument.'
								);
								var a = this._transport.messageHandler.sendWithStream("GetOperatorList", t).getReader(),
									o = this.intentStates[t.intent];
								o.streamReader = a;
								!(function pump() {
									a.read().then(
										function (t) {
											var a = t.value;
											t.done
												? (o.streamReader = null)
												: r._transport.destroyed || (r._renderPageChunk(a, o), pump());
										},
										function (t) {
											if (((o.streamReader = null), !r._transport.destroyed)) {
												if (o.operatorList) {
													o.operatorList.lastChunk = !0;
													for (var a = 0; a < o.renderTasks.length; a++)
														o.renderTasks[a].operatorListChanged();
													r._tryCleanup();
												}
												if (o.displayReadyCapability) o.displayReadyCapability.reject(t);
												else {
													if (!o.opListReadCapability) throw t;
													o.opListReadCapability.reject(t);
												}
											}
										}
									);
								})();
							},
						},
						{
							key: "_abortOperatorList",
							value: function _abortOperatorList(t) {
								var r = this,
									a = t.intentState,
									o = t.reason,
									i = t.force,
									l = void 0 !== i && i;
								if (
									((0, _util.assert)(
										o instanceof Error || ("object" === _typeof(o) && null !== o),
										'PDFPageProxy._abortOperatorList: Expected "reason" argument.'
									),
									a.streamReader)
								) {
									if (!l) {
										if (0 !== a.renderTasks.length) return;
										if (o instanceof _display_utils.RenderingCancelledException)
											return void (a.streamReaderCancelTimeout = setTimeout(function () {
												r._abortOperatorList({ intentState: a, reason: o, force: !0 }),
													(a.streamReaderCancelTimeout = null);
											}, RENDERING_CANCELLED_TIMEOUT));
									}
									a.streamReader.cancel(new _util.AbortException(o && o.message)),
										(a.streamReader = null),
										this._transport.destroyed ||
											(Object.keys(this.intentStates).some(function (t) {
												return r.intentStates[t] === a && (delete r.intentStates[t], !0);
											}),
											this.cleanup());
								}
							},
						},
						{
							key: "pageNumber",
							get: function get() {
								return this._pageIndex + 1;
							},
						},
						{
							key: "rotate",
							get: function get() {
								return this._pageInfo.rotate;
							},
						},
						{
							key: "ref",
							get: function get() {
								return this._pageInfo.ref;
							},
						},
						{
							key: "userUnit",
							get: function get() {
								return this._pageInfo.userUnit;
							},
						},
						{
							key: "view",
							get: function get() {
								return this._pageInfo.view;
							},
						},
						{
							key: "stats",
							get: function get() {
								return this._stats;
							},
						},
					]),
					PDFPageProxy
				);
			})();
			exports.PDFPageProxy = PDFPageProxy;
			var LoopbackPort = (function () {
				function LoopbackPort() {
					var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					_classCallCheck(this, LoopbackPort),
						(this._listeners = []),
						(this._defer = t),
						(this._deferred = Promise.resolve(void 0));
				}
				return (
					_createClass(LoopbackPort, [
						{
							key: "postMessage",
							value: function postMessage(t, r) {
								var a = this;
								if (this._defer) {
									var o = new WeakMap(),
										i = {
											data: (function cloneValue(t) {
												if ("object" !== _typeof(t) || null === t) return t;
												if (o.has(t)) return o.get(t);
												var a, i;
												if ((a = t.buffer) && (0, _util.isArrayBuffer)(a))
													return (
														(i =
															r && r.includes(a)
																? new t.constructor(a, t.byteOffset, t.byteLength)
																: new t.constructor(t)),
														o.set(t, i),
														i
													);
												for (var l in ((i = Array.isArray(t) ? [] : {}), o.set(t, i), t)) {
													for (
														var u = void 0, c = t;
														!(u = Object.getOwnPropertyDescriptor(c, l));

													)
														c = Object.getPrototypeOf(c);
													if (void 0 !== u.value)
														if ("function" != typeof u.value) i[l] = cloneValue(u.value);
														else if (t.hasOwnProperty && t.hasOwnProperty(l))
															throw new Error(
																"LoopbackPort.postMessage - cannot clone: ".concat(t[l])
															);
												}
												return i;
											})(t),
										};
									this._deferred.then(function () {
										a._listeners.forEach(function (t) {
											t.call(a, i);
										});
									});
								} else
									this._listeners.forEach(function (r) {
										r.call(a, { data: t });
									});
							},
						},
						{
							key: "addEventListener",
							value: function addEventListener(t, r) {
								this._listeners.push(r);
							},
						},
						{
							key: "removeEventListener",
							value: function removeEventListener(t, r) {
								var a = this._listeners.indexOf(r);
								this._listeners.splice(a, 1);
							},
						},
						{
							key: "terminate",
							value: function terminate() {
								this._listeners.length = 0;
							},
						},
					]),
					LoopbackPort
				);
			})();
			exports.LoopbackPort = LoopbackPort;
			var PDFWorker = (function PDFWorkerClosure() {
				var pdfWorkerPorts = new WeakMap(),
					isWorkerDisabled = !1,
					fallbackWorkerSrc,
					nextFakeWorkerId = 0,
					fakeWorkerCapability;
				if (_is_node.isNodeJS && "function" == typeof require)
					(isWorkerDisabled = !0), (fallbackWorkerSrc = "./pdf.worker.js");
				else if (
					"object" === ("undefined" == typeof document ? "undefined" : _typeof(document)) &&
					"currentScript" in document
				) {
					var pdfjsFilePath = document.currentScript && document.currentScript.src;
					pdfjsFilePath &&
						(fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
				}
				function _getWorkerSrc() {
					if (_worker_options.GlobalWorkerOptions.workerSrc)
						return _worker_options.GlobalWorkerOptions.workerSrc;
					if (void 0 !== fallbackWorkerSrc)
						return (
							_is_node.isNodeJS ||
								(0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'),
							fallbackWorkerSrc
						);
					throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
				}
				function getMainThreadWorkerMessageHandler() {
					var t;
					try {
						t = globalThis.pdfjsWorker && globalThis.pdfjsWorker.WorkerMessageHandler;
					} catch (t) {}
					return t || null;
				}
				function setupFakeWorkerGlobal() {
					if (fakeWorkerCapability) return fakeWorkerCapability.promise;
					fakeWorkerCapability = (0, _util.createPromiseCapability)();
					var loader = (function () {
						var _ref10 = _asyncToGenerator(
							_regenerator.default.mark(function _callee() {
								var mainWorkerMessageHandler, worker;
								return _regenerator.default.wrap(function _callee$(_context) {
									for (;;)
										switch ((_context.prev = _context.next)) {
											case 0:
												if (
													((mainWorkerMessageHandler = getMainThreadWorkerMessageHandler()),
													!mainWorkerMessageHandler)
												) {
													_context.next = 3;
													break;
												}
												return _context.abrupt("return", mainWorkerMessageHandler);
											case 3:
												if (!_is_node.isNodeJS || "function" != typeof require) {
													_context.next = 6;
													break;
												}
												return (
													(worker = eval("require")(_getWorkerSrc())),
													_context.abrupt("return", worker.WorkerMessageHandler)
												);
											case 6:
												return (
													(_context.next = 8), (0, _display_utils.loadScript)(_getWorkerSrc())
												);
											case 8:
												return _context.abrupt(
													"return",
													window.pdfjsWorker.WorkerMessageHandler
												);
											case 9:
											case "end":
												return _context.stop();
										}
								}, _callee);
							})
						);
						return function loader() {
							return _ref10.apply(this, arguments);
						};
					})();
					return (
						loader().then(fakeWorkerCapability.resolve, fakeWorkerCapability.reject),
						fakeWorkerCapability.promise
					);
				}
				function createCDNWrapper(t) {
					var r = "importScripts('" + t + "');";
					return URL.createObjectURL(new Blob([r]));
				}
				var PDFWorker = (function () {
					function PDFWorker() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							r = t.name,
							a = void 0 === r ? null : r,
							o = t.port,
							i = void 0 === o ? null : o,
							l = t.verbosity,
							u = void 0 === l ? (0, _util.getVerbosityLevel)() : l;
						if ((_classCallCheck(this, PDFWorker), i && pdfWorkerPorts.has(i)))
							throw new Error("Cannot use more than one PDFWorker per port");
						if (
							((this.name = a),
							(this.destroyed = !1),
							(this.postMessageTransfers = !0),
							(this.verbosity = u),
							(this._readyCapability = (0, _util.createPromiseCapability)()),
							(this._port = null),
							(this._webWorker = null),
							(this._messageHandler = null),
							i)
						)
							return pdfWorkerPorts.set(i, this), void this._initializeFromPort(i);
						this._initialize();
					}
					return (
						_createClass(
							PDFWorker,
							[
								{
									key: "_initializeFromPort",
									value: function _initializeFromPort(t) {
										(this._port = t),
											(this._messageHandler = new _message_handler.MessageHandler(
												"main",
												"worker",
												t
											)),
											this._messageHandler.on("ready", function () {}),
											this._readyCapability.resolve();
									},
								},
								{
									key: "_initialize",
									value: function _initialize() {
										var t = this;
										if (
											"undefined" != typeof Worker &&
											!isWorkerDisabled &&
											!getMainThreadWorkerMessageHandler()
										) {
											var r = _getWorkerSrc();
											try {
												(0, _util.isSameOrigin)(window.location.href, r) ||
													(r = createCDNWrapper(new URL(r, window.location).href));
												var a = new Worker(r),
													o = new _message_handler.MessageHandler("main", "worker", a),
													i = function terminateEarly() {
														a.removeEventListener("error", l),
															o.destroy(),
															a.terminate(),
															t.destroyed
																? t._readyCapability.reject(
																		new Error("Worker was destroyed")
																  )
																: t._setupFakeWorker();
													},
													l = function onWorkerError() {
														t._webWorker || i();
													};
												a.addEventListener("error", l),
													o.on("test", function (r) {
														a.removeEventListener("error", l),
															t.destroyed
																? i()
																: r
																? ((t._messageHandler = o),
																  (t._port = a),
																  (t._webWorker = a),
																  r.supportTransfers || (t.postMessageTransfers = !1),
																  t._readyCapability.resolve(),
																  o.send("configure", { verbosity: t.verbosity }))
																: (t._setupFakeWorker(), o.destroy(), a.terminate());
													}),
													o.on("ready", function (r) {
														if ((a.removeEventListener("error", l), t.destroyed)) i();
														else
															try {
																u();
															} catch (r) {
																t._setupFakeWorker();
															}
													});
												var u = function sendTest() {
													var r = new Uint8Array([t.postMessageTransfers ? 255 : 0]);
													try {
														o.send("test", r, [r.buffer]);
													} catch (t) {
														(0, _util.warn)("Cannot use postMessage transfers."),
															(r[0] = 0),
															o.send("test", r);
													}
												};
												return void u();
											} catch (t) {
												(0, _util.info)("The worker has been disabled.");
											}
										}
										this._setupFakeWorker();
									},
								},
								{
									key: "_setupFakeWorker",
									value: function _setupFakeWorker() {
										var t = this;
										isWorkerDisabled ||
											((0, _util.warn)("Setting up fake worker."), (isWorkerDisabled = !0)),
											setupFakeWorkerGlobal()
												.then(function (r) {
													if (t.destroyed)
														t._readyCapability.reject(new Error("Worker was destroyed"));
													else {
														var a = new LoopbackPort();
														t._port = a;
														var o = "fake" + nextFakeWorkerId++,
															i = new _message_handler.MessageHandler(
																o + "_worker",
																o,
																a
															);
														r.setup(i, a);
														var l = new _message_handler.MessageHandler(
															o,
															o + "_worker",
															a
														);
														(t._messageHandler = l),
															t._readyCapability.resolve(),
															l.send("configure", { verbosity: t.verbosity });
													}
												})
												.catch(function (r) {
													t._readyCapability.reject(
														new Error(
															'Setting up fake worker failed: "'.concat(r.message, '".')
														)
													);
												});
									},
								},
								{
									key: "destroy",
									value: function destroy() {
										(this.destroyed = !0),
											this._webWorker && (this._webWorker.terminate(), (this._webWorker = null)),
											pdfWorkerPorts.delete(this._port),
											(this._port = null),
											this._messageHandler &&
												(this._messageHandler.destroy(), (this._messageHandler = null));
									},
								},
								{
									key: "promise",
									get: function get() {
										return this._readyCapability.promise;
									},
								},
								{
									key: "port",
									get: function get() {
										return this._port;
									},
								},
								{
									key: "messageHandler",
									get: function get() {
										return this._messageHandler;
									},
								},
							],
							[
								{
									key: "fromPort",
									value: function fromPort(t) {
										if (!t || !t.port)
											throw new Error("PDFWorker.fromPort - invalid method signature.");
										return pdfWorkerPorts.has(t.port)
											? pdfWorkerPorts.get(t.port)
											: new PDFWorker(t);
									},
								},
								{
									key: "getWorkerSrc",
									value: function getWorkerSrc() {
										return _getWorkerSrc();
									},
								},
							]
						),
						PDFWorker
					);
				})();
				return PDFWorker;
			})();
			exports.PDFWorker = PDFWorker;
			var WorkerTransport = (function () {
					function WorkerTransport(t, r, a, o) {
						_classCallCheck(this, WorkerTransport),
							(this.messageHandler = t),
							(this.loadingTask = r),
							(this.commonObjs = new PDFObjects()),
							(this.fontLoader = new _font_loader.FontLoader({
								docId: r.docId,
								onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
							})),
							(this._params = o),
							(this.CMapReaderFactory = new o.CMapReaderFactory({
								baseUrl: o.cMapUrl,
								isCompressed: o.cMapPacked,
							})),
							(this.destroyed = !1),
							(this.destroyCapability = null),
							(this._passwordCapability = null),
							(this._networkStream = a),
							(this._fullReader = null),
							(this._lastProgress = null),
							(this.pageCache = []),
							(this.pagePromises = []),
							(this.downloadInfoCapability = (0, _util.createPromiseCapability)()),
							this.setupMessageHandler();
					}
					return (
						_createClass(WorkerTransport, [
							{
								key: "destroy",
								value: function destroy() {
									var t = this;
									if (this.destroyCapability) return this.destroyCapability.promise;
									(this.destroyed = !0),
										(this.destroyCapability = (0, _util.createPromiseCapability)()),
										this._passwordCapability &&
											this._passwordCapability.reject(
												new Error("Worker was destroyed during onPassword callback")
											);
									var r = [];
									this.pageCache.forEach(function (t) {
										t && r.push(t._destroy());
									}),
										(this.pageCache.length = 0),
										(this.pagePromises.length = 0);
									var a = this.messageHandler.sendWithPromise("Terminate", null);
									return (
										r.push(a),
										Promise.all(r).then(function () {
											t.fontLoader.clear(),
												t._networkStream &&
													t._networkStream.cancelAllRequests(
														new _util.AbortException("Worker was terminated.")
													),
												t.messageHandler &&
													(t.messageHandler.destroy(), (t.messageHandler = null)),
												t.destroyCapability.resolve();
										}, this.destroyCapability.reject),
										this.destroyCapability.promise
									);
								},
							},
							{
								key: "setupMessageHandler",
								value: function setupMessageHandler() {
									var t = this,
										r = this.messageHandler,
										a = this.loadingTask;
									r.on("GetReader", function (r, a) {
										(0, _util.assert)(
											t._networkStream,
											"GetReader - no `IPDFStream` instance available."
										),
											(t._fullReader = t._networkStream.getFullReader()),
											(t._fullReader.onProgress = function (r) {
												t._lastProgress = { loaded: r.loaded, total: r.total };
											}),
											(a.onPull = function () {
												t._fullReader
													.read()
													.then(function (t) {
														var r = t.value;
														t.done
															? a.close()
															: ((0, _util.assert)(
																	(0, _util.isArrayBuffer)(r),
																	"GetReader - expected an ArrayBuffer."
															  ),
															  a.enqueue(new Uint8Array(r), 1, [r]));
													})
													.catch(function (t) {
														a.error(t);
													});
											}),
											(a.onCancel = function (r) {
												t._fullReader.cancel(r);
											});
									}),
										r.on("ReaderHeadersReady", function (r) {
											var o = (0, _util.createPromiseCapability)(),
												i = t._fullReader;
											return (
												i.headersReady.then(function () {
													(i.isStreamingSupported && i.isRangeSupported) ||
														(t._lastProgress &&
															a.onProgress &&
															a.onProgress(t._lastProgress),
														(i.onProgress = function (t) {
															a.onProgress &&
																a.onProgress({ loaded: t.loaded, total: t.total });
														})),
														o.resolve({
															isStreamingSupported: i.isStreamingSupported,
															isRangeSupported: i.isRangeSupported,
															contentLength: i.contentLength,
														});
												}, o.reject),
												o.promise
											);
										}),
										r.on("GetRangeReader", function (r, a) {
											(0,
											_util.assert)(t._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
											var o = t._networkStream.getRangeReader(r.begin, r.end);
											o
												? ((a.onPull = function () {
														o.read()
															.then(function (t) {
																var r = t.value;
																t.done
																	? a.close()
																	: ((0, _util.assert)(
																			(0, _util.isArrayBuffer)(r),
																			"GetRangeReader - expected an ArrayBuffer."
																	  ),
																	  a.enqueue(new Uint8Array(r), 1, [r]));
															})
															.catch(function (t) {
																a.error(t);
															});
												  }),
												  (a.onCancel = function (t) {
														o.cancel(t);
												  }))
												: a.close();
										}),
										r.on("GetDoc", function (r) {
											var o = r.pdfInfo;
											(t._numPages = o.numPages),
												a._capability.resolve(new PDFDocumentProxy(o, t));
										}),
										r.on("DocException", function (t) {
											var r;
											switch (t.name) {
												case "PasswordException":
													r = new _util.PasswordException(t.message, t.code);
													break;
												case "InvalidPDFException":
													r = new _util.InvalidPDFException(t.message);
													break;
												case "MissingPDFException":
													r = new _util.MissingPDFException(t.message);
													break;
												case "UnexpectedResponseException":
													r = new _util.UnexpectedResponseException(t.message, t.status);
													break;
												case "UnknownErrorException":
													r = new _util.UnknownErrorException(t.message, t.details);
											}
											a._capability.reject(r);
										}),
										r.on("PasswordRequest", function (r) {
											if (
												((t._passwordCapability = (0, _util.createPromiseCapability)()),
												a.onPassword)
											) {
												try {
													a.onPassword(function updatePassword(r) {
														t._passwordCapability.resolve({ password: r });
													}, r.code);
												} catch (r) {
													t._passwordCapability.reject(r);
												}
											} else t._passwordCapability.reject(new _util.PasswordException(r.message, r.code));
											return t._passwordCapability.promise;
										}),
										r.on("DataLoaded", function (r) {
											a.onProgress && a.onProgress({ loaded: r.length, total: r.length }),
												t.downloadInfoCapability.resolve(r);
										}),
										r.on("StartRenderPage", function (r) {
											t.destroyed ||
												t.pageCache[r.pageIndex]._startRenderPage(r.transparency, r.intent);
										}),
										r.on("commonobj", function (a) {
											if (!t.destroyed) {
												var o = _slicedToArray(a, 3),
													i = o[0],
													l = o[1],
													u = o[2];
												if (!t.commonObjs.has(i))
													switch (l) {
														case "Font":
															var c = t._params;
															if ("error" in u) {
																var d = u.error;
																(0, _util.warn)(
																	"Error during font loading: ".concat(d)
																),
																	t.commonObjs.resolve(i, d);
																break;
															}
															var h = null;
															c.pdfBug &&
																globalThis.FontInspector &&
																globalThis.FontInspector.enabled &&
																(h = {
																	registerFont: function registerFont(t, r) {
																		globalThis.FontInspector.fontAdded(t, r);
																	},
																});
															var p = new _font_loader.FontFaceObject(u, {
																isEvalSupported: c.isEvalSupported,
																disableFontFace: c.disableFontFace,
																ignoreErrors: c.ignoreErrors,
																onUnsupportedFeature: t._onUnsupportedFeature.bind(t),
																fontRegistry: h,
															});
															t.fontLoader
																.bind(p)
																.catch(function (t) {
																	return r.sendWithPromise("FontFallback", { id: i });
																})
																.finally(function () {
																	!c.fontExtraProperties && p.data && (p.data = null),
																		t.commonObjs.resolve(i, p);
																});
															break;
														case "FontPath":
														case "FontType3Res":
														case "Image":
															t.commonObjs.resolve(i, u);
															break;
														default:
															throw new Error(
																"Got unknown common object type ".concat(l)
															);
													}
											}
										}),
										r.on("obj", function (r) {
											if (!t.destroyed) {
												var a = _slicedToArray(r, 4),
													o = a[0],
													i = a[1],
													l = a[2],
													u = a[3],
													c = t.pageCache[i];
												if (!c.objs.has(o))
													switch (l) {
														case "Image":
															c.objs.resolve(o, u);
															u &&
																"data" in u &&
																u.data.length > 8e6 &&
																(c.cleanupAfterRender = !0);
															break;
														default:
															throw new Error("Got unknown object type ".concat(l));
													}
											}
										}),
										r.on("DocProgress", function (r) {
											t.destroyed ||
												(a.onProgress && a.onProgress({ loaded: r.loaded, total: r.total }));
										}),
										r.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this)),
										r.on("FetchBuiltInCMap", function (r, a) {
											if (t.destroyed) a.error(new Error("Worker was destroyed"));
											else {
												var o = !1;
												a.onPull = function () {
													o
														? a.close()
														: ((o = !0),
														  t.CMapReaderFactory.fetch(r)
																.then(function (t) {
																	a.enqueue(t, 1, [t.cMapData.buffer]);
																})
																.catch(function (t) {
																	a.error(t);
																}));
												};
											}
										});
								},
							},
							{
								key: "_onUnsupportedFeature",
								value: function _onUnsupportedFeature(t) {
									var r = t.featureId;
									this.destroyed ||
										(this.loadingTask.onUnsupportedFeature &&
											this.loadingTask.onUnsupportedFeature(r));
								},
							},
							{
								key: "getData",
								value: function getData() {
									return this.messageHandler.sendWithPromise("GetData", null);
								},
							},
							{
								key: "getPage",
								value: function getPage(t) {
									var r = this;
									if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
										return Promise.reject(new Error("Invalid page request"));
									var a = t - 1;
									if (a in this.pagePromises) return this.pagePromises[a];
									var o = this.messageHandler
										.sendWithPromise("GetPage", { pageIndex: a })
										.then(function (t) {
											if (r.destroyed) throw new Error("Transport destroyed");
											var o = new PDFPageProxy(a, t, r, r._params.pdfBug);
											return (r.pageCache[a] = o), o;
										});
									return (this.pagePromises[a] = o), o;
								},
							},
							{
								key: "getPageIndex",
								value: function getPageIndex(t) {
									return this.messageHandler
										.sendWithPromise("GetPageIndex", { ref: t })
										.catch(function (t) {
											return Promise.reject(new Error(t));
										});
								},
							},
							{
								key: "getAnnotations",
								value: function getAnnotations(t, r) {
									return this.messageHandler.sendWithPromise("GetAnnotations", {
										pageIndex: t,
										intent: r,
									});
								},
							},
							{
								key: "getDestinations",
								value: function getDestinations() {
									return this.messageHandler.sendWithPromise("GetDestinations", null);
								},
							},
							{
								key: "getDestination",
								value: function getDestination(t) {
									return "string" != typeof t
										? Promise.reject(new Error("Invalid destination request."))
										: this.messageHandler.sendWithPromise("GetDestination", { id: t });
								},
							},
							{
								key: "getPageLabels",
								value: function getPageLabels() {
									return this.messageHandler.sendWithPromise("GetPageLabels", null);
								},
							},
							{
								key: "getPageLayout",
								value: function getPageLayout() {
									return this.messageHandler.sendWithPromise("GetPageLayout", null);
								},
							},
							{
								key: "getPageMode",
								value: function getPageMode() {
									return this.messageHandler.sendWithPromise("GetPageMode", null);
								},
							},
							{
								key: "getViewerPreferences",
								value: function getViewerPreferences() {
									return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
								},
							},
							{
								key: "getOpenAction",
								value: function getOpenAction() {
									return this.messageHandler.sendWithPromise("GetOpenAction", null);
								},
							},
							{
								key: "getAttachments",
								value: function getAttachments() {
									return this.messageHandler.sendWithPromise("GetAttachments", null);
								},
							},
							{
								key: "getJavaScript",
								value: function getJavaScript() {
									return this.messageHandler.sendWithPromise("GetJavaScript", null);
								},
							},
							{
								key: "getOutline",
								value: function getOutline() {
									return this.messageHandler.sendWithPromise("GetOutline", null);
								},
							},
							{
								key: "getPermissions",
								value: function getPermissions() {
									return this.messageHandler.sendWithPromise("GetPermissions", null);
								},
							},
							{
								key: "getMetadata",
								value: function getMetadata() {
									var t = this;
									return this.messageHandler.sendWithPromise("GetMetadata", null).then(function (r) {
										return {
											info: r[0],
											metadata: r[1] ? new _metadata.Metadata(r[1]) : null,
											contentDispositionFilename: t._fullReader ? t._fullReader.filename : null,
										};
									});
								},
							},
							{
								key: "getStats",
								value: function getStats() {
									return this.messageHandler.sendWithPromise("GetStats", null);
								},
							},
							{
								key: "startCleanup",
								value: function startCleanup() {
									var t = this;
									return this.messageHandler.sendWithPromise("Cleanup", null).then(function () {
										for (var r = 0, a = t.pageCache.length; r < a; r++) {
											var o = t.pageCache[r];
											if (o)
												if (!o.cleanup())
													throw new Error(
														"startCleanup: Page ".concat(r + 1, " is currently rendering.")
													);
										}
										t.commonObjs.clear(), t.fontLoader.clear();
									});
								},
							},
							{
								key: "loadingParams",
								get: function get() {
									var t = this._params;
									return (0, _util.shadow)(this, "loadingParams", {
										disableAutoFetch: t.disableAutoFetch,
										disableFontFace: t.disableFontFace,
									});
								},
							},
						]),
						WorkerTransport
					);
				})(),
				PDFObjects = (function () {
					function PDFObjects() {
						_classCallCheck(this, PDFObjects), (this._objs = Object.create(null));
					}
					return (
						_createClass(PDFObjects, [
							{
								key: "_ensureObj",
								value: function _ensureObj(t) {
									return this._objs[t]
										? this._objs[t]
										: (this._objs[t] = {
												capability: (0, _util.createPromiseCapability)(),
												data: null,
												resolved: !1,
										  });
								},
							},
							{
								key: "get",
								value: function get(t) {
									var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
									if (r) return this._ensureObj(t).capability.promise.then(r), null;
									var a = this._objs[t];
									if (!a || !a.resolved)
										throw new Error("Requesting object that isn't resolved yet ".concat(t, "."));
									return a.data;
								},
							},
							{
								key: "has",
								value: function has(t) {
									var r = this._objs[t];
									return !!r && r.resolved;
								},
							},
							{
								key: "resolve",
								value: function resolve(t, r) {
									var a = this._ensureObj(t);
									(a.resolved = !0), (a.data = r), a.capability.resolve(r);
								},
							},
							{
								key: "clear",
								value: function clear() {
									this._objs = Object.create(null);
								},
							},
						]),
						PDFObjects
					);
				})(),
				RenderTask = (function () {
					function RenderTask(t) {
						_classCallCheck(this, RenderTask), (this._internalRenderTask = t), (this.onContinue = null);
					}
					return (
						_createClass(RenderTask, [
							{
								key: "cancel",
								value: function cancel() {
									this._internalRenderTask.cancel();
								},
							},
							{
								key: "promise",
								get: function get() {
									return this._internalRenderTask.capability.promise;
								},
							},
						]),
						RenderTask
					);
				})(),
				InternalRenderTask = (function InternalRenderTaskClosure() {
					var t = new WeakSet();
					return (function () {
						function InternalRenderTask(t) {
							var r = t.callback,
								a = t.params,
								o = t.objs,
								i = t.commonObjs,
								l = t.operatorList,
								u = t.pageIndex,
								c = t.canvasFactory,
								d = t.webGLContext,
								h = t.useRequestAnimationFrame,
								p = void 0 !== h && h,
								m = t.pdfBug,
								v = void 0 !== m && m;
							_classCallCheck(this, InternalRenderTask),
								(this.callback = r),
								(this.params = a),
								(this.objs = o),
								(this.commonObjs = i),
								(this.operatorListIdx = null),
								(this.operatorList = l),
								(this._pageIndex = u),
								(this.canvasFactory = c),
								(this.webGLContext = d),
								(this._pdfBug = v),
								(this.running = !1),
								(this.graphicsReadyCallback = null),
								(this.graphicsReady = !1),
								(this._useRequestAnimationFrame = !0 === p && "undefined" != typeof window),
								(this.cancelled = !1),
								(this.capability = (0, _util.createPromiseCapability)()),
								(this.task = new RenderTask(this)),
								(this._continueBound = this._continue.bind(this)),
								(this._scheduleNextBound = this._scheduleNext.bind(this)),
								(this._nextBound = this._next.bind(this)),
								(this._canvas = a.canvasContext.canvas);
						}
						var r;
						return (
							_createClass(InternalRenderTask, [
								{
									key: "initializeGraphics",
									value: function initializeGraphics() {
										var r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
										if (!this.cancelled) {
											if (this._canvas) {
												if (t.has(this._canvas))
													throw new Error(
														"Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed."
													);
												t.add(this._canvas);
											}
											this._pdfBug &&
												globalThis.StepperManager &&
												globalThis.StepperManager.enabled &&
												((this.stepper = globalThis.StepperManager.create(this._pageIndex)),
												this.stepper.init(this.operatorList),
												(this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint()));
											var a = this.params,
												o = a.canvasContext,
												i = a.viewport,
												l = a.transform,
												u = a.imageLayer,
												c = a.background;
											(this.gfx = new _canvas.CanvasGraphics(
												o,
												this.commonObjs,
												this.objs,
												this.canvasFactory,
												this.webGLContext,
												u
											)),
												this.gfx.beginDrawing({
													transform: l,
													viewport: i,
													transparency: r,
													background: c,
												}),
												(this.operatorListIdx = 0),
												(this.graphicsReady = !0),
												this.graphicsReadyCallback && this.graphicsReadyCallback();
										}
									},
								},
								{
									key: "cancel",
									value: function cancel() {
										var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
										(this.running = !1),
											(this.cancelled = !0),
											this.gfx && this.gfx.endDrawing(),
											this._canvas && t.delete(this._canvas),
											this.callback(
												r ||
													new _display_utils.RenderingCancelledException(
														"Rendering cancelled, page ".concat(this._pageIndex + 1),
														"canvas"
													)
											);
									},
								},
								{
									key: "operatorListChanged",
									value: function operatorListChanged() {
										this.graphicsReady
											? (this.stepper && this.stepper.updateOperatorList(this.operatorList),
											  this.running || this._continue())
											: this.graphicsReadyCallback ||
											  (this.graphicsReadyCallback = this._continueBound);
									},
								},
								{
									key: "_continue",
									value: function _continue() {
										(this.running = !0),
											this.cancelled ||
												(this.task.onContinue
													? this.task.onContinue(this._scheduleNextBound)
													: this._scheduleNext());
									},
								},
								{
									key: "_scheduleNext",
									value: function _scheduleNext() {
										var t = this;
										this._useRequestAnimationFrame
											? window.requestAnimationFrame(function () {
													t._nextBound().catch(t.cancel.bind(t));
											  })
											: Promise.resolve().then(this._nextBound).catch(this.cancel.bind(this));
									},
								},
								{
									key: "_next",
									value:
										((r = _asyncToGenerator(
											_regenerator.default.mark(function _callee2() {
												return _regenerator.default.wrap(
													function _callee2$(r) {
														for (;;)
															switch ((r.prev = r.next)) {
																case 0:
																	if (!this.cancelled) {
																		r.next = 2;
																		break;
																	}
																	return r.abrupt("return");
																case 2:
																	(this.operatorListIdx =
																		this.gfx.executeOperatorList(
																			this.operatorList,
																			this.operatorListIdx,
																			this._continueBound,
																			this.stepper
																		)),
																		this.operatorListIdx ===
																			this.operatorList.argsArray.length &&
																			((this.running = !1),
																			this.operatorList.lastChunk &&
																				(this.gfx.endDrawing(),
																				this._canvas && t.delete(this._canvas),
																				this.callback()));
																case 4:
																case "end":
																	return r.stop();
															}
													},
													_callee2,
													this
												);
											})
										)),
										function _next() {
											return r.apply(this, arguments);
										}),
								},
							]),
							InternalRenderTask
						);
					})();
				})(),
				version = "2.5.207";
			exports.version = version;
			var build = "0974d6052";
			exports.build = build;
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.FontLoader = r.FontFaceObject = void 0);
			var o = (function _interopRequireDefault(t) {
					return t && t.__esModule ? t : { default: t };
				})(a(2)),
				i = a(5);
			function _typeof(t) {
				return (_typeof =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function _typeof(t) {
								return typeof t;
						  }
						: function _typeof(t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  })(t);
			}
			function _setPrototypeOf(t, r) {
				return (_setPrototypeOf =
					Object.setPrototypeOf ||
					function _setPrototypeOf(t, r) {
						return (t.__proto__ = r), t;
					})(t, r);
			}
			function _createSuper(t) {
				var r = (function _isNativeReflectConstruct() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
					} catch (t) {
						return !1;
					}
				})();
				return function _createSuperInternal() {
					var a,
						o = _getPrototypeOf(t);
					if (r) {
						var i = _getPrototypeOf(this).constructor;
						a = Reflect.construct(o, arguments, i);
					} else a = o.apply(this, arguments);
					return _possibleConstructorReturn(this, a);
				};
			}
			function _possibleConstructorReturn(t, r) {
				return !r || ("object" !== _typeof(r) && "function" != typeof r)
					? (function _assertThisInitialized(t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: r;
			}
			function _getPrototypeOf(t) {
				return (_getPrototypeOf = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function _getPrototypeOf(t) {
							return t.__proto__ || Object.getPrototypeOf(t);
					  })(t);
			}
			function asyncGeneratorStep(t, r, a, o, i, l, u) {
				try {
					var c = t[l](u),
						d = c.value;
				} catch (t) {
					return void a(t);
				}
				c.done ? r(d) : Promise.resolve(d).then(o, i);
			}
			function _classCallCheck(t, r) {
				if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _createClass(t, r, a) {
				return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
			}
			var l,
				u = (function () {
					function BaseFontLoader(t) {
						var r = t.docId,
							a = t.onUnsupportedFeature;
						_classCallCheck(this, BaseFontLoader),
							this.constructor === BaseFontLoader &&
								(0, i.unreachable)("Cannot initialize BaseFontLoader."),
							(this.docId = r),
							(this._onUnsupportedFeature = a),
							(this.nativeFontFaces = []),
							(this.styleElement = null);
					}
					var t;
					return (
						_createClass(BaseFontLoader, [
							{
								key: "addNativeFontFace",
								value: function addNativeFontFace(t) {
									this.nativeFontFaces.push(t), document.fonts.add(t);
								},
							},
							{
								key: "insertRule",
								value: function insertRule(t) {
									var r = this.styleElement;
									r ||
										(((r = this.styleElement = document.createElement("style")).id =
											"PDFJS_FONT_STYLE_TAG_".concat(this.docId)),
										document.documentElement.getElementsByTagName("head")[0].appendChild(r));
									var a = r.sheet;
									a.insertRule(t, a.cssRules.length);
								},
							},
							{
								key: "clear",
								value: function clear() {
									this.nativeFontFaces.forEach(function (t) {
										document.fonts.delete(t);
									}),
										(this.nativeFontFaces.length = 0),
										this.styleElement && (this.styleElement.remove(), (this.styleElement = null));
								},
							},
							{
								key: "bind",
								value:
									((t = (function _asyncToGenerator(t) {
										return function () {
											var r = this,
												a = arguments;
											return new Promise(function (o, i) {
												var l = t.apply(r, a);
												function _next(t) {
													asyncGeneratorStep(l, o, i, _next, _throw, "next", t);
												}
												function _throw(t) {
													asyncGeneratorStep(l, o, i, _next, _throw, "throw", t);
												}
												_next(void 0);
											});
										};
									})(
										o.default.mark(function _callee(t) {
											var r,
												a,
												l = this;
											return o.default.wrap(
												function _callee$(o) {
													for (;;)
														switch ((o.prev = o.next)) {
															case 0:
																if (!t.attached && !t.missingFile) {
																	o.next = 2;
																	break;
																}
																return o.abrupt("return");
															case 2:
																if (
																	((t.attached = !0), !this.isFontLoadingAPISupported)
																) {
																	o.next = 19;
																	break;
																}
																if (!(r = t.createNativeFontFace())) {
																	o.next = 18;
																	break;
																}
																return (
																	this.addNativeFontFace(r),
																	(o.prev = 7),
																	(o.next = 10),
																	r.loaded
																);
															case 10:
																o.next = 18;
																break;
															case 12:
																throw (
																	((o.prev = 12),
																	(o.t0 = o.catch(7)),
																	this._onUnsupportedFeature({
																		featureId:
																			i.UNSUPPORTED_FEATURES.errorFontLoadNative,
																	}),
																	(0, i.warn)(
																		"Failed to load font '"
																			.concat(r.family, "': '")
																			.concat(o.t0, "'.")
																	),
																	(t.disableFontFace = !0),
																	o.t0)
																);
															case 18:
																return o.abrupt("return");
															case 19:
																if (!(a = t.createFontFaceRule())) {
																	o.next = 26;
																	break;
																}
																if (
																	(this.insertRule(a),
																	!this.isSyncFontLoadingSupported)
																) {
																	o.next = 24;
																	break;
																}
																return o.abrupt("return");
															case 24:
																return (
																	(o.next = 26),
																	new Promise(function (r) {
																		var o = l._queueLoadingCallback(r);
																		l._prepareFontLoadEvent([a], [t], o);
																	})
																);
															case 26:
															case "end":
																return o.stop();
														}
												},
												_callee,
												this,
												[[7, 12]]
											);
										})
									)),
									function bind(r) {
										return t.apply(this, arguments);
									}),
							},
							{
								key: "_queueLoadingCallback",
								value: function _queueLoadingCallback(t) {
									(0, i.unreachable)("Abstract method `_queueLoadingCallback`.");
								},
							},
							{
								key: "_prepareFontLoadEvent",
								value: function _prepareFontLoadEvent(t, r, a) {
									(0, i.unreachable)("Abstract method `_prepareFontLoadEvent`.");
								},
							},
							{
								key: "isFontLoadingAPISupported",
								get: function get() {
									var t = "undefined" != typeof document && !!document.fonts;
									return (0, i.shadow)(this, "isFontLoadingAPISupported", t);
								},
							},
							{
								key: "isSyncFontLoadingSupported",
								get: function get() {
									(0, i.unreachable)("Abstract method `isSyncFontLoadingSupported`.");
								},
							},
							{
								key: "_loadTestFont",
								get: function get() {
									(0, i.unreachable)("Abstract method `_loadTestFont`.");
								},
							},
						]),
						BaseFontLoader
					);
				})();
			(r.FontLoader = l),
				(r.FontLoader = l =
					(function (t) {
						!(function _inherits(t, r) {
							if ("function" != typeof r && null !== r)
								throw new TypeError("Super expression must either be null or a function");
							(t.prototype = Object.create(r && r.prototype, {
								constructor: { value: t, writable: !0, configurable: !0 },
							})),
								r && _setPrototypeOf(t, r);
						})(GenericFontLoader, t);
						var r = _createSuper(GenericFontLoader);
						function GenericFontLoader(t) {
							var a;
							return (
								_classCallCheck(this, GenericFontLoader),
								((a = r.call(this, t)).loadingContext = { requests: [], nextRequestId: 0 }),
								(a.loadTestFontId = 0),
								a
							);
						}
						return (
							_createClass(GenericFontLoader, [
								{
									key: "_queueLoadingCallback",
									value: function _queueLoadingCallback(t) {
										var r = this.loadingContext,
											a = {
												id: "pdfjs-font-loading-".concat(r.nextRequestId++),
												done: !1,
												complete: function completeRequest() {
													for (
														(0, i.assert)(
															!a.done,
															"completeRequest() cannot be called twice."
														),
															a.done = !0;
														r.requests.length > 0 && r.requests[0].done;

													) {
														var t = r.requests.shift();
														setTimeout(t.callback, 0);
													}
												},
												callback: t,
											};
										return r.requests.push(a), a;
									},
								},
								{
									key: "_prepareFontLoadEvent",
									value: function _prepareFontLoadEvent(t, r, a) {
										function int32(t, r) {
											return (
												(t.charCodeAt(r) << 24) |
												(t.charCodeAt(r + 1) << 16) |
												(t.charCodeAt(r + 2) << 8) |
												(255 & t.charCodeAt(r + 3))
											);
										}
										function spliceString(t, r, a, o) {
											return t.substring(0, r) + o + t.substring(r + a);
										}
										var o,
											l,
											u = document.createElement("canvas");
										(u.width = 1), (u.height = 1);
										var c = u.getContext("2d", { willReadFrequently: !0 }),
											d = 0;
										var h = "lt".concat(Date.now()).concat(this.loadTestFontId++),
											p = this._loadTestFont,
											m = 1482184792,
											v = int32((p = spliceString(p, 976, h.length, h)), 16);
										for (o = 0, l = h.length - 3; o < l; o += 4) v = (v - m + int32(h, o)) | 0;
										o < h.length && (v = (v - m + int32(h + "XXX", o)) | 0),
											(p = spliceString(p, 16, 4, (0, i.string32)(v)));
										var g = "url(data:font/opentype;base64,".concat(btoa(p), ");"),
											y = '@font-face {font-family:"'.concat(h, '";src:').concat(g, "}");
										this.insertRule(y);
										var b = [];
										for (o = 0, l = r.length; o < l; o++) b.push(r[o].loadedName);
										b.push(h);
										var _ = document.createElement("div");
										for (
											_.style.visibility = "hidden",
												_.style.width = _.style.height = "10px",
												_.style.position = "absolute",
												_.style.top = _.style.left = "0px",
												o = 0,
												l = b.length;
											o < l;
											++o
										) {
											var S = document.createElement("span");
											(S.textContent = "Hi"), (S.style.fontFamily = b[o]), _.appendChild(S);
										}
										document.body.appendChild(_),
											(function isFontReady(t, r) {
												if (++d > 30)
													return (0, i.warn)("Load test font never loaded."), void r();
												(c.font = "30px " + t),
													c.fillText(".", 0, 20),
													c.getImageData(0, 0, 1, 1).data[3] > 0
														? r()
														: setTimeout(isFontReady.bind(null, t, r));
											})(h, function () {
												document.body.removeChild(_), a.complete();
											});
									},
								},
								{
									key: "isSyncFontLoadingSupported",
									get: function get() {
										var t = !1;
										if ("undefined" == typeof navigator) t = !0;
										else {
											var r = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
											r && r[1] >= 14 && (t = !0);
										}
										return (0, i.shadow)(this, "isSyncFontLoadingSupported", t);
									},
								},
								{
									key: "_loadTestFont",
									get: function get() {
										return (0, i.shadow)(
											this,
											"_loadTestFont",
											(function getLoadTestFont() {
												return atob(
													"T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="
												);
											})()
										);
									},
								},
							]),
							GenericFontLoader
						);
					})(u));
			var c = (function () {
				function FontFaceObject(t, r) {
					var a = r.isEvalSupported,
						o = void 0 === a || a,
						i = r.disableFontFace,
						l = void 0 !== i && i,
						u = r.ignoreErrors,
						c = void 0 !== u && u,
						d = r.onUnsupportedFeature,
						h = void 0 === d ? null : d,
						p = r.fontRegistry,
						m = void 0 === p ? null : p;
					for (var v in (_classCallCheck(this, FontFaceObject),
					(this.compiledGlyphs = Object.create(null)),
					t))
						this[v] = t[v];
					(this.isEvalSupported = !1 !== o),
						(this.disableFontFace = !0 === l),
						(this.ignoreErrors = !0 === c),
						(this._onUnsupportedFeature = h),
						(this.fontRegistry = m);
				}
				return (
					_createClass(FontFaceObject, [
						{
							key: "createNativeFontFace",
							value: function createNativeFontFace() {
								if (!this.data || this.disableFontFace) return null;
								var t = new FontFace(this.loadedName, this.data, {});
								return this.fontRegistry && this.fontRegistry.registerFont(this), t;
							},
						},
						{
							key: "createFontFaceRule",
							value: function createFontFaceRule() {
								if (!this.data || this.disableFontFace) return null;
								var t = (0, i.bytesToString)(new Uint8Array(this.data)),
									r = "url(data:".concat(this.mimetype, ";base64,").concat(btoa(t), ");"),
									a = '@font-face {font-family:"'.concat(this.loadedName, '";src:').concat(r, "}");
								return this.fontRegistry && this.fontRegistry.registerFont(this, r), a;
							},
						},
						{
							key: "getPathGenerator",
							value: function getPathGenerator(t, r) {
								if (void 0 !== this.compiledGlyphs[r]) return this.compiledGlyphs[r];
								var a, o;
								try {
									a = t.get(this.loadedName + "_path_" + r);
								} catch (t) {
									if (!this.ignoreErrors) throw t;
									return (
										this._onUnsupportedFeature &&
											this._onUnsupportedFeature({
												featureId: i.UNSUPPORTED_FEATURES.errorFontGetPath,
											}),
										(0, i.warn)('getPathGenerator - ignoring character: "'.concat(t, '".')),
										(this.compiledGlyphs[r] = function (t, r) {})
									);
								}
								if (this.isEvalSupported && i.IsEvalSupportedCached.value) {
									for (var l, u = "", c = 0, d = a.length; c < d; c++)
										(l = void 0 !== (o = a[c]).args ? o.args.join(",") : ""),
											(u += "c." + o.cmd + "(" + l + ");\n");
									return (this.compiledGlyphs[r] = new Function("c", "size", u));
								}
								return (this.compiledGlyphs[r] = function (t, r) {
									for (var i = 0, l = a.length; i < l; i++)
										"scale" === (o = a[i]).cmd && (o.args = [r, -r]), t[o.cmd].apply(t, o.args);
								});
							},
						},
					]),
					FontFaceObject
				);
			})();
			r.FontFaceObject = c;
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.apiCompatibilityParams = void 0);
			var o = a(7),
				i = Object.create(null);
			!(function checkFontFace() {
				o.isNodeJS && (i.disableFontFace = !0);
			})();
			var l = Object.freeze(i);
			r.apiCompatibilityParams = l;
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.CanvasGraphics = void 0);
			var o = a(5),
				i = a(202);
			function _createForOfIteratorHelper(t, r) {
				var a;
				if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
					if (
						Array.isArray(t) ||
						(a = (function _unsupportedIterableToArray(t, r) {
							if (!t) return;
							if ("string" == typeof t) return _arrayLikeToArray(t, r);
							var a = Object.prototype.toString.call(t).slice(8, -1);
							"Object" === a && t.constructor && (a = t.constructor.name);
							if ("Map" === a || "Set" === a) return Array.from(t);
							if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
								return _arrayLikeToArray(t, r);
						})(t)) ||
						(r && t && "number" == typeof t.length)
					) {
						a && (t = a);
						var o = 0,
							i = function F() {};
						return {
							s: i,
							n: function n() {
								return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
							},
							e: function e(t) {
								throw t;
							},
							f: i,
						};
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				}
				var l,
					u = !0,
					c = !1;
				return {
					s: function s() {
						a = t[Symbol.iterator]();
					},
					n: function n() {
						var t = a.next();
						return (u = t.done), t;
					},
					e: function e(t) {
						(c = !0), (l = t);
					},
					f: function f() {
						try {
							u || null == a.return || a.return();
						} finally {
							if (c) throw l;
						}
					},
				};
			}
			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o;
			}
			var l = 4096,
				u = 0.65,
				c = 16;
			function addContextCurrentTransform(t) {
				t.mozCurrentTransform ||
					((t._originalSave = t.save),
					(t._originalRestore = t.restore),
					(t._originalRotate = t.rotate),
					(t._originalScale = t.scale),
					(t._originalTranslate = t.translate),
					(t._originalTransform = t.transform),
					(t._originalSetTransform = t.setTransform),
					(t._transformMatrix = t._transformMatrix || [1, 0, 0, 1, 0, 0]),
					(t._transformStack = []),
					Object.defineProperty(t, "mozCurrentTransform", {
						get: function getCurrentTransform() {
							return this._transformMatrix;
						},
					}),
					Object.defineProperty(t, "mozCurrentTransformInverse", {
						get: function getCurrentTransformInverse() {
							var t = this._transformMatrix,
								r = t[0],
								a = t[1],
								o = t[2],
								i = t[3],
								l = t[4],
								u = t[5],
								c = r * i - a * o,
								d = a * o - r * i;
							return [i / c, a / d, o / d, r / c, (i * l - o * u) / d, (a * l - r * u) / c];
						},
					}),
					(t.save = function ctxSave() {
						var t = this._transformMatrix;
						this._transformStack.push(t), (this._transformMatrix = t.slice(0, 6)), this._originalSave();
					}),
					(t.restore = function ctxRestore() {
						var t = this._transformStack.pop();
						t && ((this._transformMatrix = t), this._originalRestore());
					}),
					(t.translate = function ctxTranslate(t, r) {
						var a = this._transformMatrix;
						(a[4] = a[0] * t + a[2] * r + a[4]),
							(a[5] = a[1] * t + a[3] * r + a[5]),
							this._originalTranslate(t, r);
					}),
					(t.scale = function ctxScale(t, r) {
						var a = this._transformMatrix;
						(a[0] = a[0] * t),
							(a[1] = a[1] * t),
							(a[2] = a[2] * r),
							(a[3] = a[3] * r),
							this._originalScale(t, r);
					}),
					(t.transform = function ctxTransform(r, a, o, i, l, u) {
						var c = this._transformMatrix;
						(this._transformMatrix = [
							c[0] * r + c[2] * a,
							c[1] * r + c[3] * a,
							c[0] * o + c[2] * i,
							c[1] * o + c[3] * i,
							c[0] * l + c[2] * u + c[4],
							c[1] * l + c[3] * u + c[5],
						]),
							t._originalTransform(r, a, o, i, l, u);
					}),
					(t.setTransform = function ctxSetTransform(r, a, o, i, l, u) {
						(this._transformMatrix = [r, a, o, i, l, u]), t._originalSetTransform(r, a, o, i, l, u);
					}),
					(t.rotate = function ctxRotate(t) {
						var r = Math.cos(t),
							a = Math.sin(t),
							o = this._transformMatrix;
						(this._transformMatrix = [
							o[0] * r + o[2] * a,
							o[1] * r + o[3] * a,
							o[0] * -a + o[2] * r,
							o[1] * -a + o[3] * r,
							o[4],
							o[5],
						]),
							this._originalRotate(t);
					}));
			}
			var d = (function CachedCanvasesClosure() {
				function CachedCanvases(t) {
					(this.canvasFactory = t), (this.cache = Object.create(null));
				}
				return (
					(CachedCanvases.prototype = {
						getCanvas: function CachedCanvases_getCanvas(t, r, a, o) {
							var i;
							return (
								void 0 !== this.cache[t]
									? ((i = this.cache[t]),
									  this.canvasFactory.reset(i, r, a),
									  i.context.setTransform(1, 0, 0, 1, 0, 0))
									: ((i = this.canvasFactory.create(r, a)), (this.cache[t] = i)),
								o && addContextCurrentTransform(i.context),
								i
							);
						},
						clear: function clear() {
							for (var t in this.cache) {
								var r = this.cache[t];
								this.canvasFactory.destroy(r), delete this.cache[t];
							}
						},
					}),
					CachedCanvases
				);
			})();
			var h = (function CanvasExtraStateClosure() {
					function CanvasExtraState() {
						(this.alphaIsShape = !1),
							(this.fontSize = 0),
							(this.fontSizeScale = 1),
							(this.textMatrix = o.IDENTITY_MATRIX),
							(this.textMatrixScale = 1),
							(this.fontMatrix = o.FONT_IDENTITY_MATRIX),
							(this.leading = 0),
							(this.x = 0),
							(this.y = 0),
							(this.lineX = 0),
							(this.lineY = 0),
							(this.charSpacing = 0),
							(this.wordSpacing = 0),
							(this.textHScale = 1),
							(this.textRenderingMode = o.TextRenderingMode.FILL),
							(this.textRise = 0),
							(this.fillColor = "#000000"),
							(this.strokeColor = "#000000"),
							(this.patternFill = !1),
							(this.fillAlpha = 1),
							(this.strokeAlpha = 1),
							(this.lineWidth = 1),
							(this.activeSMask = null),
							(this.resumeSMaskCtx = null);
					}
					return (
						(CanvasExtraState.prototype = {
							clone: function CanvasExtraState_clone() {
								return Object.create(this);
							},
							setCurrentPoint: function CanvasExtraState_setCurrentPoint(t, r) {
								(this.x = t), (this.y = r);
							},
						}),
						CanvasExtraState
					);
				})(),
				p = (function CanvasGraphicsClosure() {
					function CanvasGraphics(t, r, a, o, i, l) {
						(this.ctx = t),
							(this.current = new h()),
							(this.stateStack = []),
							(this.pendingClip = null),
							(this.pendingEOFill = !1),
							(this.res = null),
							(this.xobjs = null),
							(this.commonObjs = r),
							(this.objs = a),
							(this.canvasFactory = o),
							(this.webGLContext = i),
							(this.imageLayer = l),
							(this.groupStack = []),
							(this.processingType3 = null),
							(this.baseTransform = null),
							(this.baseTransformStack = []),
							(this.groupLevel = 0),
							(this.smaskStack = []),
							(this.smaskCounter = 0),
							(this.tempSMask = null),
							(this.cachedCanvases = new d(this.canvasFactory)),
							t && addContextCurrentTransform(t),
							(this._cachedGetSinglePixelWidth = null);
					}
					function putBinaryImageData(t, r) {
						if ("undefined" != typeof ImageData && r instanceof ImageData) t.putImageData(r, 0, 0);
						else {
							var a,
								i,
								l,
								u,
								d,
								h = r.height,
								p = r.width,
								m = h % c,
								v = (h - m) / c,
								g = 0 === m ? v : v + 1,
								y = t.createImageData(p, c),
								b = 0,
								_ = r.data,
								S = y.data;
							if (r.kind === o.ImageKind.GRAYSCALE_1BPP) {
								var A = _.byteLength,
									C = new Uint32Array(S.buffer, 0, S.byteLength >> 2),
									R = C.length,
									k = (p + 7) >> 3,
									P = 4294967295,
									w = o.IsLittleEndianCached.value ? 4278190080 : 255;
								for (i = 0; i < g; i++) {
									for (u = i < v ? c : m, a = 0, l = 0; l < u; l++) {
										for (
											var x = A - b, T = 0, E = x > k ? p : 8 * x - 7, O = -8 & E, I = 0, D = 0;
											T < O;
											T += 8
										)
											(D = _[b++]),
												(C[a++] = 128 & D ? P : w),
												(C[a++] = 64 & D ? P : w),
												(C[a++] = 32 & D ? P : w),
												(C[a++] = 16 & D ? P : w),
												(C[a++] = 8 & D ? P : w),
												(C[a++] = 4 & D ? P : w),
												(C[a++] = 2 & D ? P : w),
												(C[a++] = 1 & D ? P : w);
										for (; T < E; T++)
											0 === I && ((D = _[b++]), (I = 128)), (C[a++] = D & I ? P : w), (I >>= 1);
									}
									for (; a < R; ) C[a++] = 0;
									t.putImageData(y, 0, i * c);
								}
							} else if (r.kind === o.ImageKind.RGBA_32BPP) {
								for (l = 0, d = p * c * 4, i = 0; i < v; i++)
									S.set(_.subarray(b, b + d)), (b += d), t.putImageData(y, 0, l), (l += c);
								i < g && ((d = p * m * 4), S.set(_.subarray(b, b + d)), t.putImageData(y, 0, l));
							} else {
								if (r.kind !== o.ImageKind.RGB_24BPP)
									throw new Error("bad image kind: ".concat(r.kind));
								for (d = p * (u = c), i = 0; i < g; i++) {
									for (i >= v && (d = p * (u = m)), a = 0, l = d; l--; )
										(S[a++] = _[b++]), (S[a++] = _[b++]), (S[a++] = _[b++]), (S[a++] = 255);
									t.putImageData(y, 0, i * c);
								}
							}
						}
					}
					function putBinaryImageMask(t, r) {
						for (
							var a = r.height,
								o = r.width,
								i = a % c,
								l = (a - i) / c,
								u = 0 === i ? l : l + 1,
								d = t.createImageData(o, c),
								h = 0,
								p = r.data,
								m = d.data,
								v = 0;
							v < u;
							v++
						) {
							for (var g = v < l ? c : i, y = 3, b = 0; b < g; b++)
								for (var _ = 0, S = 0; S < o; S++) {
									if (!_) {
										var A = p[h++];
										_ = 128;
									}
									(m[y] = A & _ ? 0 : 255), (y += 4), (_ >>= 1);
								}
							t.putImageData(d, 0, v * c);
						}
					}
					function copyCtxState(t, r) {
						for (
							var a = [
									"strokeStyle",
									"fillStyle",
									"fillRule",
									"globalAlpha",
									"lineWidth",
									"lineCap",
									"lineJoin",
									"miterLimit",
									"globalCompositeOperation",
									"font",
								],
								o = 0,
								i = a.length;
							o < i;
							o++
						) {
							var l = a[o];
							void 0 !== t[l] && (r[l] = t[l]);
						}
						void 0 !== t.setLineDash &&
							(r.setLineDash(t.getLineDash()), (r.lineDashOffset = t.lineDashOffset));
					}
					function resetCtxToDefault(t) {
						(t.strokeStyle = "#000000"),
							(t.fillStyle = "#000000"),
							(t.fillRule = "nonzero"),
							(t.globalAlpha = 1),
							(t.lineWidth = 1),
							(t.lineCap = "butt"),
							(t.lineJoin = "miter"),
							(t.miterLimit = 10),
							(t.globalCompositeOperation = "source-over"),
							(t.font = "10px sans-serif"),
							void 0 !== t.setLineDash && (t.setLineDash([]), (t.lineDashOffset = 0));
					}
					function composeSMaskBackdrop(t, r, a, o) {
						for (var i = t.length, l = 3; l < i; l += 4) {
							var u = t[l];
							if (0 === u) (t[l - 3] = r), (t[l - 2] = a), (t[l - 1] = o);
							else if (u < 255) {
								var c = 255 - u;
								(t[l - 3] = (t[l - 3] * u + r * c) >> 8),
									(t[l - 2] = (t[l - 2] * u + a * c) >> 8),
									(t[l - 1] = (t[l - 1] * u + o * c) >> 8);
							}
						}
					}
					function composeSMaskAlpha(t, r, a) {
						for (var o = t.length, i = 3; i < o; i += 4) {
							var l = a ? a[t[i]] : t[i];
							r[i] = (r[i] * l * 0.00392156862745098) | 0;
						}
					}
					function composeSMaskLuminosity(t, r, a) {
						for (var o = t.length, i = 3; i < o; i += 4) {
							var l = 77 * t[i - 3] + 152 * t[i - 2] + 28 * t[i - 1];
							r[i] = a ? (r[i] * a[l >> 8]) >> 8 : (r[i] * l) >> 16;
						}
					}
					function composeSMask(t, r, a, o) {
						var i = r.canvas,
							l = r.context;
						t.setTransform(r.scaleX, 0, 0, r.scaleY, r.offsetX, r.offsetY);
						var u = r.backdrop || null;
						if (!r.transferMap && o.isEnabled) {
							var c = o.composeSMask({
								layer: a.canvas,
								mask: i,
								properties: { subtype: r.subtype, backdrop: u },
							});
							return t.setTransform(1, 0, 0, 1, 0, 0), void t.drawImage(c, r.offsetX, r.offsetY);
						}
						!(function genericComposeSMask(t, r, a, o, i, l, u) {
							var c,
								d = !!l,
								h = d ? l[0] : 0,
								p = d ? l[1] : 0,
								m = d ? l[2] : 0;
							c = "Luminosity" === i ? composeSMaskLuminosity : composeSMaskAlpha;
							for (var v = Math.min(o, Math.ceil(1048576 / a)), g = 0; g < o; g += v) {
								var y = Math.min(v, o - g),
									b = t.getImageData(0, g, a, y),
									_ = r.getImageData(0, g, a, y);
								d && composeSMaskBackdrop(b.data, h, p, m),
									c(b.data, _.data, u),
									t.putImageData(_, 0, g);
							}
						})(l, a, i.width, i.height, r.subtype, u, r.transferMap),
							t.drawImage(i, 0, 0);
					}
					var t = ["butt", "round", "square"],
						r = ["miter", "round", "bevel"],
						a = {},
						p = {};
					for (var m in ((CanvasGraphics.prototype = {
						beginDrawing: function beginDrawing(t) {
							var r = t.transform,
								a = t.viewport,
								o = t.transparency,
								i = void 0 !== o && o,
								l = t.background,
								u = void 0 === l ? null : l,
								c = this.ctx.canvas.width,
								d = this.ctx.canvas.height;
							if (
								(this.ctx.save(),
								(this.ctx.fillStyle = u || "rgb(255, 255, 255)"),
								this.ctx.fillRect(0, 0, c, d),
								this.ctx.restore(),
								i)
							) {
								var h = this.cachedCanvases.getCanvas("transparent", c, d, !0);
								(this.compositeCtx = this.ctx),
									(this.transparentCanvas = h.canvas),
									(this.ctx = h.context),
									this.ctx.save(),
									this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
							}
							this.ctx.save(),
								resetCtxToDefault(this.ctx),
								r && this.ctx.transform.apply(this.ctx, r),
								this.ctx.transform.apply(this.ctx, a.transform),
								(this.baseTransform = this.ctx.mozCurrentTransform.slice()),
								this.imageLayer && this.imageLayer.beginLayout();
						},
						executeOperatorList: function CanvasGraphics_executeOperatorList(t, r, a, i) {
							var l = t.argsArray,
								u = t.fnArray,
								c = r || 0,
								d = l.length;
							if (d === c) return c;
							for (
								var h,
									p = d - c > 10 && "function" == typeof a,
									m = p ? Date.now() + 15 : 0,
									v = 0,
									g = this.commonObjs,
									y = this.objs;
								;

							) {
								if (void 0 !== i && c === i.nextBreakPoint) return i.breakIt(c, a), c;
								if ((h = u[c]) !== o.OPS.dependency) this[h].apply(this, l[c]);
								else {
									var b,
										_ = _createForOfIteratorHelper(l[c]);
									try {
										for (_.s(); !(b = _.n()).done; ) {
											var S = b.value,
												A = S.startsWith("g_") ? g : y;
											if (!A.has(S)) return A.get(S, a), c;
										}
									} catch (t) {
										_.e(t);
									} finally {
										_.f();
									}
								}
								if (++c === d) return c;
								if (p && ++v > 10) {
									if (Date.now() > m) return a(), c;
									v = 0;
								}
							}
						},
						endDrawing: function CanvasGraphics_endDrawing() {
							null !== this.current.activeSMask && this.endSMaskGroup(),
								this.ctx.restore(),
								this.transparentCanvas &&
									((this.ctx = this.compositeCtx),
									this.ctx.save(),
									this.ctx.setTransform(1, 0, 0, 1, 0, 0),
									this.ctx.drawImage(this.transparentCanvas, 0, 0),
									this.ctx.restore(),
									(this.transparentCanvas = null)),
								this.cachedCanvases.clear(),
								this.webGLContext.clear(),
								this.imageLayer && this.imageLayer.endLayout();
						},
						setLineWidth: function CanvasGraphics_setLineWidth(t) {
							(this.current.lineWidth = t), (this.ctx.lineWidth = t);
						},
						setLineCap: function CanvasGraphics_setLineCap(r) {
							this.ctx.lineCap = t[r];
						},
						setLineJoin: function CanvasGraphics_setLineJoin(t) {
							this.ctx.lineJoin = r[t];
						},
						setMiterLimit: function CanvasGraphics_setMiterLimit(t) {
							this.ctx.miterLimit = t;
						},
						setDash: function CanvasGraphics_setDash(t, r) {
							var a = this.ctx;
							void 0 !== a.setLineDash && (a.setLineDash(t), (a.lineDashOffset = r));
						},
						setRenderingIntent: function setRenderingIntent(t) {},
						setFlatness: function setFlatness(t) {},
						setGState: function CanvasGraphics_setGState(t) {
							for (var r = 0, a = t.length; r < a; r++) {
								var o = t[r],
									i = o[0],
									l = o[1];
								switch (i) {
									case "LW":
										this.setLineWidth(l);
										break;
									case "LC":
										this.setLineCap(l);
										break;
									case "LJ":
										this.setLineJoin(l);
										break;
									case "ML":
										this.setMiterLimit(l);
										break;
									case "D":
										this.setDash(l[0], l[1]);
										break;
									case "RI":
										this.setRenderingIntent(l);
										break;
									case "FL":
										this.setFlatness(l);
										break;
									case "Font":
										this.setFont(l[0], l[1]);
										break;
									case "CA":
										this.current.strokeAlpha = o[1];
										break;
									case "ca":
										(this.current.fillAlpha = o[1]), (this.ctx.globalAlpha = o[1]);
										break;
									case "BM":
										this.ctx.globalCompositeOperation = l;
										break;
									case "SMask":
										this.current.activeSMask &&
											(this.stateStack.length > 0 &&
											this.stateStack[this.stateStack.length - 1].activeSMask ===
												this.current.activeSMask
												? this.suspendSMaskGroup()
												: this.endSMaskGroup()),
											(this.current.activeSMask = l ? this.tempSMask : null),
											this.current.activeSMask && this.beginSMaskGroup(),
											(this.tempSMask = null);
								}
							}
						},
						beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
							var t = this.current.activeSMask,
								r = t.canvas.width,
								a = t.canvas.height,
								o = "smaskGroupAt" + this.groupLevel,
								i = this.cachedCanvases.getCanvas(o, r, a, !0),
								l = this.ctx,
								u = l.mozCurrentTransform;
							this.ctx.save();
							var c = i.context;
							c.scale(1 / t.scaleX, 1 / t.scaleY),
								c.translate(-t.offsetX, -t.offsetY),
								c.transform.apply(c, u),
								(t.startTransformInverse = c.mozCurrentTransformInverse),
								copyCtxState(l, c),
								(this.ctx = c),
								this.setGState([
									["BM", "source-over"],
									["ca", 1],
									["CA", 1],
								]),
								this.groupStack.push(l),
								this.groupLevel++;
						},
						suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
							var t = this.ctx;
							this.groupLevel--,
								(this.ctx = this.groupStack.pop()),
								composeSMask(this.ctx, this.current.activeSMask, t, this.webGLContext),
								this.ctx.restore(),
								this.ctx.save(),
								copyCtxState(t, this.ctx),
								(this.current.resumeSMaskCtx = t);
							var r = o.Util.transform(
								this.current.activeSMask.startTransformInverse,
								t.mozCurrentTransform
							);
							this.ctx.transform.apply(this.ctx, r),
								t.save(),
								t.setTransform(1, 0, 0, 1, 0, 0),
								t.clearRect(0, 0, t.canvas.width, t.canvas.height),
								t.restore();
						},
						resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
							var t = this.current.resumeSMaskCtx,
								r = this.ctx;
							(this.ctx = t), this.groupStack.push(r), this.groupLevel++;
						},
						endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
							var t = this.ctx;
							this.groupLevel--,
								(this.ctx = this.groupStack.pop()),
								composeSMask(this.ctx, this.current.activeSMask, t, this.webGLContext),
								this.ctx.restore(),
								copyCtxState(t, this.ctx);
							var r = o.Util.transform(
								this.current.activeSMask.startTransformInverse,
								t.mozCurrentTransform
							);
							this.ctx.transform.apply(this.ctx, r);
						},
						save: function CanvasGraphics_save() {
							this.ctx.save();
							var t = this.current;
							this.stateStack.push(t), (this.current = t.clone()), (this.current.resumeSMaskCtx = null);
						},
						restore: function CanvasGraphics_restore() {
							this.current.resumeSMaskCtx && this.resumeSMaskGroup(),
								null === this.current.activeSMask ||
									(0 !== this.stateStack.length &&
										this.stateStack[this.stateStack.length - 1].activeSMask ===
											this.current.activeSMask) ||
									this.endSMaskGroup(),
								0 !== this.stateStack.length &&
									((this.current = this.stateStack.pop()),
									this.ctx.restore(),
									(this.pendingClip = null),
									(this._cachedGetSinglePixelWidth = null));
						},
						transform: function CanvasGraphics_transform(t, r, a, o, i, l) {
							this.ctx.transform(t, r, a, o, i, l), (this._cachedGetSinglePixelWidth = null);
						},
						constructPath: function CanvasGraphics_constructPath(t, r) {
							for (
								var a = this.ctx, i = this.current, l = i.x, u = i.y, c = 0, d = 0, h = t.length;
								c < h;
								c++
							)
								switch (0 | t[c]) {
									case o.OPS.rectangle:
										(l = r[d++]), (u = r[d++]);
										var p = r[d++],
											m = r[d++];
										0 === p && (p = this.getSinglePixelWidth()),
											0 === m && (m = this.getSinglePixelWidth());
										var v = l + p,
											g = u + m;
										this.ctx.moveTo(l, u),
											this.ctx.lineTo(v, u),
											this.ctx.lineTo(v, g),
											this.ctx.lineTo(l, g),
											this.ctx.lineTo(l, u),
											this.ctx.closePath();
										break;
									case o.OPS.moveTo:
										(l = r[d++]), (u = r[d++]), a.moveTo(l, u);
										break;
									case o.OPS.lineTo:
										(l = r[d++]), (u = r[d++]), a.lineTo(l, u);
										break;
									case o.OPS.curveTo:
										(l = r[d + 4]),
											(u = r[d + 5]),
											a.bezierCurveTo(r[d], r[d + 1], r[d + 2], r[d + 3], l, u),
											(d += 6);
										break;
									case o.OPS.curveTo2:
										a.bezierCurveTo(l, u, r[d], r[d + 1], r[d + 2], r[d + 3]),
											(l = r[d + 2]),
											(u = r[d + 3]),
											(d += 4);
										break;
									case o.OPS.curveTo3:
										(l = r[d + 2]),
											(u = r[d + 3]),
											a.bezierCurveTo(r[d], r[d + 1], l, u, l, u),
											(d += 4);
										break;
									case o.OPS.closePath:
										a.closePath();
								}
							i.setCurrentPoint(l, u);
						},
						closePath: function CanvasGraphics_closePath() {
							this.ctx.closePath();
						},
						stroke: function CanvasGraphics_stroke(t) {
							t = void 0 === t || t;
							var r = this.ctx,
								a = this.current.strokeColor;
							if (
								((r.globalAlpha = this.current.strokeAlpha),
								a && a.hasOwnProperty("type") && "Pattern" === a.type)
							) {
								r.save();
								var i = r.mozCurrentTransform,
									l = o.Util.singularValueDecompose2dScale(i)[0];
								(r.strokeStyle = a.getPattern(r, this)),
									(r.lineWidth = Math.max(
										this.getSinglePixelWidth() * u,
										this.current.lineWidth * l
									)),
									r.stroke(),
									r.restore();
							} else
								(r.lineWidth = Math.max(this.getSinglePixelWidth() * u, this.current.lineWidth)),
									r.stroke();
							t && this.consumePath(), (r.globalAlpha = this.current.fillAlpha);
						},
						closeStroke: function CanvasGraphics_closeStroke() {
							this.closePath(), this.stroke();
						},
						fill: function CanvasGraphics_fill(t) {
							t = void 0 === t || t;
							var r = this.ctx,
								a = this.current.fillColor,
								o = !1;
							this.current.patternFill &&
								(r.save(),
								this.baseTransform && r.setTransform.apply(r, this.baseTransform),
								(r.fillStyle = a.getPattern(r, this)),
								(o = !0)),
								this.pendingEOFill ? (r.fill("evenodd"), (this.pendingEOFill = !1)) : r.fill(),
								o && r.restore(),
								t && this.consumePath();
						},
						eoFill: function CanvasGraphics_eoFill() {
							(this.pendingEOFill = !0), this.fill();
						},
						fillStroke: function CanvasGraphics_fillStroke() {
							this.fill(!1), this.stroke(!1), this.consumePath();
						},
						eoFillStroke: function CanvasGraphics_eoFillStroke() {
							(this.pendingEOFill = !0), this.fillStroke();
						},
						closeFillStroke: function CanvasGraphics_closeFillStroke() {
							this.closePath(), this.fillStroke();
						},
						closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
							(this.pendingEOFill = !0), this.closePath(), this.fillStroke();
						},
						endPath: function CanvasGraphics_endPath() {
							this.consumePath();
						},
						clip: function CanvasGraphics_clip() {
							this.pendingClip = a;
						},
						eoClip: function CanvasGraphics_eoClip() {
							this.pendingClip = p;
						},
						beginText: function CanvasGraphics_beginText() {
							(this.current.textMatrix = o.IDENTITY_MATRIX),
								(this.current.textMatrixScale = 1),
								(this.current.x = this.current.lineX = 0),
								(this.current.y = this.current.lineY = 0);
						},
						endText: function CanvasGraphics_endText() {
							var t = this.pendingTextPaths,
								r = this.ctx;
							if (void 0 !== t) {
								r.save(), r.beginPath();
								for (var a = 0; a < t.length; a++) {
									var o = t[a];
									r.setTransform.apply(r, o.transform),
										r.translate(o.x, o.y),
										o.addToPath(r, o.fontSize);
								}
								r.restore(), r.clip(), r.beginPath(), delete this.pendingTextPaths;
							} else r.beginPath();
						},
						setCharSpacing: function CanvasGraphics_setCharSpacing(t) {
							this.current.charSpacing = t;
						},
						setWordSpacing: function CanvasGraphics_setWordSpacing(t) {
							this.current.wordSpacing = t;
						},
						setHScale: function CanvasGraphics_setHScale(t) {
							this.current.textHScale = t / 100;
						},
						setLeading: function CanvasGraphics_setLeading(t) {
							this.current.leading = -t;
						},
						setFont: function CanvasGraphics_setFont(t, r) {
							var a = this.commonObjs.get(t),
								i = this.current;
							if (!a) throw new Error("Can't find font for ".concat(t));
							if (
								((i.fontMatrix = a.fontMatrix ? a.fontMatrix : o.FONT_IDENTITY_MATRIX),
								(0 !== i.fontMatrix[0] && 0 !== i.fontMatrix[3]) ||
									(0, o.warn)("Invalid font matrix for font " + t),
								r < 0 ? ((r = -r), (i.fontDirection = -1)) : (i.fontDirection = 1),
								(this.current.font = a),
								(this.current.fontSize = r),
								!a.isType3Font)
							) {
								var l = a.loadedName || "sans-serif",
									u = "normal";
								a.black ? (u = "900") : a.bold && (u = "bold");
								var c = a.italic ? "italic" : "normal",
									d = '"'.concat(l, '", ').concat(a.fallbackName),
									h = r;
								r < 16 ? (h = 16) : r > 100 && (h = 100),
									(this.current.fontSizeScale = r / h),
									(this.ctx.font = "".concat(c, " ").concat(u, " ").concat(h, "px ").concat(d));
							}
						},
						setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(t) {
							this.current.textRenderingMode = t;
						},
						setTextRise: function CanvasGraphics_setTextRise(t) {
							this.current.textRise = t;
						},
						moveText: function CanvasGraphics_moveText(t, r) {
							(this.current.x = this.current.lineX += t), (this.current.y = this.current.lineY += r);
						},
						setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(t, r) {
							this.setLeading(-r), this.moveText(t, r);
						},
						setTextMatrix: function CanvasGraphics_setTextMatrix(t, r, a, o, i, l) {
							(this.current.textMatrix = [t, r, a, o, i, l]),
								(this.current.textMatrixScale = Math.sqrt(t * t + r * r)),
								(this.current.x = this.current.lineX = 0),
								(this.current.y = this.current.lineY = 0);
						},
						nextLine: function CanvasGraphics_nextLine() {
							this.moveText(0, this.current.leading);
						},
						paintChar: function paintChar(t, r, a, i) {
							var l,
								u = this.ctx,
								c = this.current,
								d = c.font,
								h = c.textRenderingMode,
								p = c.fontSize / c.fontSizeScale,
								m = h & o.TextRenderingMode.FILL_STROKE_MASK,
								v = !!(h & o.TextRenderingMode.ADD_TO_PATH_FLAG),
								g = c.patternFill && !d.missingFile;
							((d.disableFontFace || v || g) && (l = d.getPathGenerator(this.commonObjs, t)),
							d.disableFontFace || g
								? (u.save(),
								  u.translate(r, a),
								  u.beginPath(),
								  l(u, p),
								  i && u.setTransform.apply(u, i),
								  (m !== o.TextRenderingMode.FILL && m !== o.TextRenderingMode.FILL_STROKE) || u.fill(),
								  (m !== o.TextRenderingMode.STROKE && m !== o.TextRenderingMode.FILL_STROKE) ||
										u.stroke(),
								  u.restore())
								: ((m !== o.TextRenderingMode.FILL && m !== o.TextRenderingMode.FILL_STROKE) ||
										u.fillText(t, r, a),
								  (m !== o.TextRenderingMode.STROKE && m !== o.TextRenderingMode.FILL_STROKE) ||
										u.strokeText(t, r, a)),
							v) &&
								(this.pendingTextPaths || (this.pendingTextPaths = [])).push({
									transform: u.mozCurrentTransform,
									x: r,
									y: a,
									fontSize: p,
									addToPath: l,
								});
						},
						get isFontSubpixelAAEnabled() {
							var t = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10).context;
							t.scale(1.5, 1), t.fillText("I", 0, 10);
							for (var r = t.getImageData(0, 0, 10, 10).data, a = !1, i = 3; i < r.length; i += 4)
								if (r[i] > 0 && r[i] < 255) {
									a = !0;
									break;
								}
							return (0, o.shadow)(this, "isFontSubpixelAAEnabled", a);
						},
						showText: function CanvasGraphics_showText(t) {
							var r = this.current,
								a = r.font;
							if (a.isType3Font) return this.showType3Text(t);
							var i = r.fontSize;
							if (0 !== i) {
								var l,
									c = this.ctx,
									d = r.fontSizeScale,
									h = r.charSpacing,
									p = r.wordSpacing,
									m = r.fontDirection,
									v = r.textHScale * m,
									g = t.length,
									y = a.vertical,
									b = y ? 1 : -1,
									_ = a.defaultVMetrics,
									S = i * r.fontMatrix[0],
									A =
										r.textRenderingMode === o.TextRenderingMode.FILL &&
										!a.disableFontFace &&
										!r.patternFill;
								if ((c.save(), r.patternFill)) {
									c.save();
									var C = r.fillColor.getPattern(c, this);
									(l = c.mozCurrentTransform), c.restore(), (c.fillStyle = C);
								}
								c.transform.apply(c, r.textMatrix),
									c.translate(r.x, r.y + r.textRise),
									m > 0 ? c.scale(v, -1) : c.scale(v, 1);
								var R = r.lineWidth,
									k = r.textMatrixScale;
								if (0 === k || 0 === R) {
									var P = r.textRenderingMode & o.TextRenderingMode.FILL_STROKE_MASK;
									(P !== o.TextRenderingMode.STROKE && P !== o.TextRenderingMode.FILL_STROKE) ||
										((this._cachedGetSinglePixelWidth = null),
										(R = this.getSinglePixelWidth() * u));
								} else R /= k;
								1 !== d && (c.scale(d, d), (R /= d)), (c.lineWidth = R);
								var w,
									x = 0;
								for (w = 0; w < g; ++w) {
									var T = t[w];
									if ((0, o.isNum)(T)) x += (b * T * i) / 1e3;
									else {
										var E,
											O,
											I,
											D,
											L,
											W,
											M,
											j = !1,
											N = (T.isSpace ? p : 0) + h,
											B = T.fontChar,
											q = T.accent,
											G = T.width;
										if (y)
											(L = T.vmetric || _),
												(W = -(W = T.vmetric ? L[1] : 0.5 * G) * S),
												(M = L[2] * S),
												(G = L ? -L[0] : G),
												(E = W / d),
												(O = (x + M) / d);
										else (E = x / d), (O = 0);
										if (a.remeasure && G > 0) {
											var U = ((1e3 * c.measureText(B).width) / i) * d;
											if (G < U && this.isFontSubpixelAAEnabled) {
												var z = G / U;
												(j = !0), c.save(), c.scale(z, 1), (E /= z);
											} else G !== U && (E += (((G - U) / 2e3) * i) / d);
										}
										(T.isInFont || a.missingFile) &&
											(A && !q
												? c.fillText(B, E, O)
												: (this.paintChar(B, E, O, l),
												  q &&
														((I = E + q.offset.x / d),
														(D = O - q.offset.y / d),
														this.paintChar(q.fontChar, I, D, l)))),
											(x += y ? G * S - N * m : G * S + N * m),
											j && c.restore();
									}
								}
								y ? (r.y -= x) : (r.x += x * v), c.restore();
							}
						},
						showType3Text: function CanvasGraphics_showType3Text(t) {
							var r,
								a,
								i,
								l,
								u = this.ctx,
								c = this.current,
								d = c.font,
								h = c.fontSize,
								p = c.fontDirection,
								m = d.vertical ? 1 : -1,
								v = c.charSpacing,
								g = c.wordSpacing,
								y = c.textHScale * p,
								b = c.fontMatrix || o.FONT_IDENTITY_MATRIX,
								_ = t.length;
							if (!(c.textRenderingMode === o.TextRenderingMode.INVISIBLE) && 0 !== h) {
								for (
									this._cachedGetSinglePixelWidth = null,
										u.save(),
										u.transform.apply(u, c.textMatrix),
										u.translate(c.x, c.y),
										u.scale(y, p),
										r = 0;
									r < _;
									++r
								)
									if (((a = t[r]), (0, o.isNum)(a)))
										(l = (m * a * h) / 1e3), this.ctx.translate(l, 0), (c.x += l * y);
									else {
										var S = (a.isSpace ? g : 0) + v,
											A = d.charProcOperatorList[a.operatorListId];
										if (A)
											(this.processingType3 = a),
												this.save(),
												u.scale(h, h),
												u.transform.apply(u, b),
												this.executeOperatorList(A),
												this.restore(),
												(i = o.Util.applyTransform([a.width, 0], b)[0] * h + S),
												u.translate(i, 0),
												(c.x += i * y);
										else
											(0, o.warn)(
												'Type3 character "'.concat(a.operatorListId, '" is not available.')
											);
									}
								u.restore(), (this.processingType3 = null);
							}
						},
						setCharWidth: function CanvasGraphics_setCharWidth(t, r) {},
						setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(t, r, a, o, i, l) {
							this.ctx.rect(a, o, i - a, l - o), this.clip(), this.endPath();
						},
						getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(t) {
							var r,
								a = this;
							if ("TilingPattern" === t[0]) {
								var o = t[1],
									l = this.baseTransform || this.ctx.mozCurrentTransform.slice(),
									u = {
										createCanvasGraphics: function createCanvasGraphics(t) {
											return new CanvasGraphics(
												t,
												a.commonObjs,
												a.objs,
												a.canvasFactory,
												a.webGLContext
											);
										},
									};
								r = new i.TilingPattern(t, o, this.ctx, u, l);
							} else r = (0, i.getShadingPatternFromIR)(t);
							return r;
						},
						setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
							this.current.strokeColor = this.getColorN_Pattern(arguments);
						},
						setFillColorN: function CanvasGraphics_setFillColorN() {
							(this.current.fillColor = this.getColorN_Pattern(arguments)),
								(this.current.patternFill = !0);
						},
						setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(t, r, a) {
							var i = o.Util.makeCssRgb(t, r, a);
							(this.ctx.strokeStyle = i), (this.current.strokeColor = i);
						},
						setFillRGBColor: function CanvasGraphics_setFillRGBColor(t, r, a) {
							var i = o.Util.makeCssRgb(t, r, a);
							(this.ctx.fillStyle = i), (this.current.fillColor = i), (this.current.patternFill = !1);
						},
						shadingFill: function CanvasGraphics_shadingFill(t) {
							var r = this.ctx;
							this.save();
							var a = (0, i.getShadingPatternFromIR)(t);
							r.fillStyle = a.getPattern(r, this, !0);
							var l = r.mozCurrentTransformInverse;
							if (l) {
								var u = r.canvas,
									c = u.width,
									d = u.height,
									h = o.Util.applyTransform([0, 0], l),
									p = o.Util.applyTransform([0, d], l),
									m = o.Util.applyTransform([c, 0], l),
									v = o.Util.applyTransform([c, d], l),
									g = Math.min(h[0], p[0], m[0], v[0]),
									y = Math.min(h[1], p[1], m[1], v[1]),
									b = Math.max(h[0], p[0], m[0], v[0]),
									_ = Math.max(h[1], p[1], m[1], v[1]);
								this.ctx.fillRect(g, y, b - g, _ - y);
							} else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
							this.restore();
						},
						beginInlineImage: function CanvasGraphics_beginInlineImage() {
							(0, o.unreachable)("Should not call beginInlineImage");
						},
						beginImageData: function CanvasGraphics_beginImageData() {
							(0, o.unreachable)("Should not call beginImageData");
						},
						paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(t, r) {
							if (
								(this.save(),
								this.baseTransformStack.push(this.baseTransform),
								Array.isArray(t) && 6 === t.length && this.transform.apply(this, t),
								(this.baseTransform = this.ctx.mozCurrentTransform),
								r)
							) {
								var a = r[2] - r[0],
									o = r[3] - r[1];
								this.ctx.rect(r[0], r[1], a, o), this.clip(), this.endPath();
							}
						},
						paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
							this.restore(), (this.baseTransform = this.baseTransformStack.pop());
						},
						beginGroup: function CanvasGraphics_beginGroup(t) {
							this.save();
							var r = this.ctx;
							t.isolated || (0, o.info)("TODO: Support non-isolated groups."),
								t.knockout && (0, o.warn)("Knockout groups not supported.");
							var a = r.mozCurrentTransform;
							if ((t.matrix && r.transform.apply(r, t.matrix), !t.bbox))
								throw new Error("Bounding box is required.");
							var i = o.Util.getAxialAlignedBoundingBox(t.bbox, r.mozCurrentTransform),
								u = [0, 0, r.canvas.width, r.canvas.height];
							i = o.Util.intersect(i, u) || [0, 0, 0, 0];
							var c = Math.floor(i[0]),
								d = Math.floor(i[1]),
								h = Math.max(Math.ceil(i[2]) - c, 1),
								p = Math.max(Math.ceil(i[3]) - d, 1),
								m = 1,
								v = 1;
							h > l && ((m = h / l), (h = l)), p > l && ((v = p / l), (p = l));
							var g = "groupAt" + this.groupLevel;
							t.smask && (g += "_smask_" + (this.smaskCounter++ % 2));
							var y = this.cachedCanvases.getCanvas(g, h, p, !0),
								b = y.context;
							b.scale(1 / m, 1 / v),
								b.translate(-c, -d),
								b.transform.apply(b, a),
								t.smask
									? this.smaskStack.push({
											canvas: y.canvas,
											context: b,
											offsetX: c,
											offsetY: d,
											scaleX: m,
											scaleY: v,
											subtype: t.smask.subtype,
											backdrop: t.smask.backdrop,
											transferMap: t.smask.transferMap || null,
											startTransformInverse: null,
									  })
									: (r.setTransform(1, 0, 0, 1, 0, 0), r.translate(c, d), r.scale(m, v)),
								copyCtxState(r, b),
								(this.ctx = b),
								this.setGState([
									["BM", "source-over"],
									["ca", 1],
									["CA", 1],
								]),
								this.groupStack.push(r),
								this.groupLevel++,
								(this.current.activeSMask = null);
						},
						endGroup: function CanvasGraphics_endGroup(t) {
							this.groupLevel--;
							var r = this.ctx;
							(this.ctx = this.groupStack.pop()),
								void 0 !== this.ctx.imageSmoothingEnabled
									? (this.ctx.imageSmoothingEnabled = !1)
									: (this.ctx.mozImageSmoothingEnabled = !1),
								t.smask ? (this.tempSMask = this.smaskStack.pop()) : this.ctx.drawImage(r.canvas, 0, 0),
								this.restore();
						},
						beginAnnotations: function CanvasGraphics_beginAnnotations() {
							this.save(),
								this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform);
						},
						endAnnotations: function CanvasGraphics_endAnnotations() {
							this.restore();
						},
						beginAnnotation: function CanvasGraphics_beginAnnotation(t, r, a) {
							if (
								(this.save(),
								resetCtxToDefault(this.ctx),
								(this.current = new h()),
								Array.isArray(t) && 4 === t.length)
							) {
								var o = t[2] - t[0],
									i = t[3] - t[1];
								this.ctx.rect(t[0], t[1], o, i), this.clip(), this.endPath();
							}
							this.transform.apply(this, r), this.transform.apply(this, a);
						},
						endAnnotation: function CanvasGraphics_endAnnotation() {
							this.restore();
						},
						paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(t) {
							var r = this.ctx,
								a = t.width,
								o = t.height,
								i = this.current.fillColor,
								l = this.current.patternFill,
								u = this.processingType3;
							if (
								(u &&
									void 0 === u.compiled &&
									(u.compiled =
										a <= 1e3 && o <= 1e3
											? (function compileType3Glyph(t) {
													var r,
														a,
														o,
														i,
														l = t.width,
														u = t.height,
														c = l + 1,
														d = new Uint8Array(c * (u + 1)),
														h = new Uint8Array([
															0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0,
														]),
														p = (l + 7) & -8,
														m = t.data,
														v = new Uint8Array(p * u),
														g = 0;
													for (r = 0, i = m.length; r < i; r++)
														for (var y = 128, b = m[r]; y > 0; )
															(v[g++] = b & y ? 0 : 255), (y >>= 1);
													var _ = 0;
													for (0 !== v[(g = 0)] && ((d[0] = 1), ++_), a = 1; a < l; a++)
														v[g] !== v[g + 1] && ((d[a] = v[g] ? 2 : 1), ++_), g++;
													for (0 !== v[g] && ((d[a] = 2), ++_), r = 1; r < u; r++) {
														(o = r * c),
															v[(g = r * p) - p] !== v[g] && ((d[o] = v[g] ? 1 : 8), ++_);
														var S = (v[g] ? 4 : 0) + (v[g - p] ? 8 : 0);
														for (a = 1; a < l; a++)
															h[
																(S =
																	(S >> 2) +
																	(v[g + 1] ? 4 : 0) +
																	(v[g - p + 1] ? 8 : 0))
															] && ((d[o + a] = h[S]), ++_),
																g++;
														if (
															(v[g - p] !== v[g] && ((d[o + a] = v[g] ? 2 : 4), ++_),
															_ > 1e3)
														)
															return null;
													}
													for (
														o = r * c,
															0 !== v[(g = p * (u - 1))] && ((d[o] = 8), ++_),
															a = 1;
														a < l;
														a++
													)
														v[g] !== v[g + 1] && ((d[o + a] = v[g] ? 4 : 8), ++_), g++;
													if ((0 !== v[g] && ((d[o + a] = 4), ++_), _ > 1e3)) return null;
													var A = new Int32Array([0, c, -1, 0, -c, 0, 0, 0, 1]),
														C = [];
													for (r = 0; _ && r <= u; r++) {
														for (var R = r * c, k = R + l; R < k && !d[R]; ) R++;
														if (R !== k) {
															var P,
																w = [R % c, r],
																x = d[R],
																T = R;
															do {
																var E = A[x];
																do {
																	R += E;
																} while (!d[R]);
																5 !== (P = d[R]) && 10 !== P
																	? ((x = P), (d[R] = 0))
																	: ((x = P & ((51 * x) >> 4)),
																	  (d[R] &= (x >> 2) | (x << 2))),
																	w.push(R % c),
																	w.push((R / c) | 0),
																	d[R] || --_;
															} while (T !== R);
															C.push(w), --r;
														}
													}
													return function drawOutline(t) {
														t.save(),
															t.scale(1 / l, -1 / u),
															t.translate(0, -u),
															t.beginPath();
														for (var r = 0, a = C.length; r < a; r++) {
															var o = C[r];
															t.moveTo(o[0], o[1]);
															for (var i = 2, c = o.length; i < c; i += 2)
																t.lineTo(o[i], o[i + 1]);
														}
														t.fill(), t.beginPath(), t.restore();
													};
											  })({ data: t.data, width: a, height: o })
											: null),
								u && u.compiled)
							)
								u.compiled(r);
							else {
								var c = this.cachedCanvases.getCanvas("maskCanvas", a, o),
									d = c.context;
								d.save(),
									putBinaryImageMask(d, t),
									(d.globalCompositeOperation = "source-in"),
									(d.fillStyle = l ? i.getPattern(d, this) : i),
									d.fillRect(0, 0, a, o),
									d.restore(),
									this.paintInlineImageXObject(c.canvas);
							}
						},
						paintImageMaskXObjectRepeat: function CanvasGraphics_paintImageMaskXObjectRepeat(t, r, a, o) {
							var i = t.width,
								l = t.height,
								u = this.current.fillColor,
								c = this.current.patternFill,
								d = this.cachedCanvases.getCanvas("maskCanvas", i, l),
								h = d.context;
							h.save(),
								putBinaryImageMask(h, t),
								(h.globalCompositeOperation = "source-in"),
								(h.fillStyle = c ? u.getPattern(h, this) : u),
								h.fillRect(0, 0, i, l),
								h.restore();
							for (var p = this.ctx, m = 0, v = o.length; m < v; m += 2)
								p.save(),
									p.transform(r, 0, 0, a, o[m], o[m + 1]),
									p.scale(1, -1),
									p.drawImage(d.canvas, 0, 0, i, l, 0, -1, 1, 1),
									p.restore();
						},
						paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(t) {
							for (
								var r = this.ctx,
									a = this.current.fillColor,
									o = this.current.patternFill,
									i = 0,
									l = t.length;
								i < l;
								i++
							) {
								var u = t[i],
									c = u.width,
									d = u.height,
									h = this.cachedCanvases.getCanvas("maskCanvas", c, d),
									p = h.context;
								p.save(),
									putBinaryImageMask(p, u),
									(p.globalCompositeOperation = "source-in"),
									(p.fillStyle = o ? a.getPattern(p, this) : a),
									p.fillRect(0, 0, c, d),
									p.restore(),
									r.save(),
									r.transform.apply(r, u.transform),
									r.scale(1, -1),
									r.drawImage(h.canvas, 0, 0, c, d, 0, -1, 1, 1),
									r.restore();
							}
						},
						paintImageXObject: function CanvasGraphics_paintImageXObject(t) {
							var r = t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t);
							r ? this.paintInlineImageXObject(r) : (0, o.warn)("Dependent image isn't ready yet");
						},
						paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(t, r, a, i) {
							var l = t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t);
							if (l) {
								for (var u = l.width, c = l.height, d = [], h = 0, p = i.length; h < p; h += 2)
									d.push({ transform: [r, 0, 0, a, i[h], i[h + 1]], x: 0, y: 0, w: u, h: c });
								this.paintInlineImageXObjectGroup(l, d);
							} else (0, o.warn)("Dependent image isn't ready yet");
						},
						paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(t) {
							var r = t.width,
								a = t.height,
								o = this.ctx;
							this.save(), o.scale(1 / r, -1 / a);
							var i,
								l,
								u = o.mozCurrentTransformInverse,
								c = u[0],
								d = u[1],
								h = Math.max(Math.sqrt(c * c + d * d), 1),
								p = u[2],
								m = u[3],
								v = Math.max(Math.sqrt(p * p + m * m), 1);
							if (("function" == typeof HTMLElement && t instanceof HTMLElement) || !t.data) i = t;
							else {
								var g = (l = this.cachedCanvases.getCanvas("inlineImage", r, a)).context;
								putBinaryImageData(g, t), (i = l.canvas);
							}
							for (var y = r, b = a, _ = "prescale1"; (h > 2 && y > 1) || (v > 2 && b > 1); ) {
								var S = y,
									A = b;
								h > 2 && y > 1 && (h /= y / (S = Math.ceil(y / 2))),
									v > 2 && b > 1 && (v /= b / (A = Math.ceil(b / 2))),
									(g = (l = this.cachedCanvases.getCanvas(_, S, A)).context).clearRect(0, 0, S, A),
									g.drawImage(i, 0, 0, y, b, 0, 0, S, A),
									(i = l.canvas),
									(y = S),
									(b = A),
									(_ = "prescale1" === _ ? "prescale2" : "prescale1");
							}
							if ((o.drawImage(i, 0, 0, y, b, 0, -a, r, a), this.imageLayer)) {
								var C = this.getCanvasPosition(0, -a);
								this.imageLayer.appendImage({
									imgData: t,
									left: C[0],
									top: C[1],
									width: r / u[0],
									height: a / u[3],
								});
							}
							this.restore();
						},
						paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(t, r) {
							var a = this.ctx,
								o = t.width,
								i = t.height,
								l = this.cachedCanvases.getCanvas("inlineImage", o, i);
							putBinaryImageData(l.context, t);
							for (var u = 0, c = r.length; u < c; u++) {
								var d = r[u];
								if (
									(a.save(),
									a.transform.apply(a, d.transform),
									a.scale(1, -1),
									a.drawImage(l.canvas, d.x, d.y, d.w, d.h, 0, -1, 1, 1),
									this.imageLayer)
								) {
									var h = this.getCanvasPosition(d.x, d.y);
									this.imageLayer.appendImage({
										imgData: t,
										left: h[0],
										top: h[1],
										width: o,
										height: i,
									});
								}
								a.restore();
							}
						},
						paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
							this.ctx.fillRect(0, 0, 1, 1);
						},
						paintXObject: function CanvasGraphics_paintXObject() {
							(0, o.warn)("Unsupported 'paintXObject' command.");
						},
						markPoint: function CanvasGraphics_markPoint(t) {},
						markPointProps: function CanvasGraphics_markPointProps(t, r) {},
						beginMarkedContent: function CanvasGraphics_beginMarkedContent(t) {},
						beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(t, r) {},
						endMarkedContent: function CanvasGraphics_endMarkedContent() {},
						beginCompat: function CanvasGraphics_beginCompat() {},
						endCompat: function CanvasGraphics_endCompat() {},
						consumePath: function CanvasGraphics_consumePath() {
							var t = this.ctx;
							this.pendingClip &&
								(this.pendingClip === p ? t.clip("evenodd") : t.clip(), (this.pendingClip = null)),
								t.beginPath();
						},
						getSinglePixelWidth: function getSinglePixelWidth(t) {
							if (null === this._cachedGetSinglePixelWidth) {
								var r = this.ctx.mozCurrentTransformInverse;
								this._cachedGetSinglePixelWidth = Math.sqrt(
									Math.max(r[0] * r[0] + r[1] * r[1], r[2] * r[2] + r[3] * r[3])
								);
							}
							return this._cachedGetSinglePixelWidth;
						},
						getCanvasPosition: function CanvasGraphics_getCanvasPosition(t, r) {
							var a = this.ctx.mozCurrentTransform;
							return [a[0] * t + a[2] * r + a[4], a[1] * t + a[3] * r + a[5]];
						},
					}),
					o.OPS))
						CanvasGraphics.prototype[o.OPS[m]] = CanvasGraphics.prototype[m];
					return CanvasGraphics;
				})();
			r.CanvasGraphics = p;
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }),
				(r.getShadingPatternFromIR = function getShadingPatternFromIR(t) {
					var r = i[t[0]];
					if (!r) throw new Error("Unknown IR type: ".concat(t[0]));
					return r.fromIR(t);
				}),
				(r.TilingPattern = void 0);
			var o = a(5),
				i = {};
			function applyBoundingBox(t, r) {
				if (r && "undefined" != typeof Path2D) {
					var a = r[2] - r[0],
						o = r[3] - r[1],
						i = new Path2D();
					i.rect(r[0], r[1], a, o), t.clip(i);
				}
			}
			i.RadialAxial = {
				fromIR: function RadialAxial_fromIR(t) {
					var r = t[1],
						a = t[2],
						o = t[3],
						i = t[4],
						l = t[5],
						u = t[6],
						c = t[7];
					return {
						type: "Pattern",
						getPattern: function RadialAxial_getPattern(t) {
							var d;
							applyBoundingBox(t, a),
								"axial" === r
									? (d = t.createLinearGradient(i[0], i[1], l[0], l[1]))
									: "radial" === r && (d = t.createRadialGradient(i[0], i[1], u, l[0], l[1], c));
							for (var h = 0, p = o.length; h < p; ++h) {
								var m = o[h];
								d.addColorStop(m[0], m[1]);
							}
							return d;
						},
					};
				},
			};
			var l = (function createMeshCanvasClosure() {
				function drawTriangle(t, r, a, o, i, l, u, c) {
					var d,
						h = r.coords,
						p = r.colors,
						m = t.data,
						v = 4 * t.width;
					h[a + 1] > h[o + 1] && ((d = a), (a = o), (o = d), (d = l), (l = u), (u = d)),
						h[o + 1] > h[i + 1] && ((d = o), (o = i), (i = d), (d = u), (u = c), (c = d)),
						h[a + 1] > h[o + 1] && ((d = a), (a = o), (o = d), (d = l), (l = u), (u = d));
					var g = (h[a] + r.offsetX) * r.scaleX,
						y = (h[a + 1] + r.offsetY) * r.scaleY,
						b = (h[o] + r.offsetX) * r.scaleX,
						_ = (h[o + 1] + r.offsetY) * r.scaleY,
						S = (h[i] + r.offsetX) * r.scaleX,
						A = (h[i + 1] + r.offsetY) * r.scaleY;
					if (!(y >= A))
						for (
							var C,
								R,
								k,
								P,
								w,
								x,
								T,
								E,
								O = p[l],
								I = p[l + 1],
								D = p[l + 2],
								L = p[u],
								W = p[u + 1],
								M = p[u + 2],
								j = p[c],
								N = p[c + 1],
								B = p[c + 2],
								q = Math.round(y),
								G = Math.round(A),
								U = q;
							U <= G;
							U++
						) {
							if (U < _) {
								var z = void 0;
								(C = g - (g - b) * (z = U < y ? 0 : y === _ ? 1 : (y - U) / (y - _))),
									(R = O - (O - L) * z),
									(k = I - (I - W) * z),
									(P = D - (D - M) * z);
							} else {
								var H = void 0;
								(C = b - (b - S) * (H = U > A ? 1 : _ === A ? 0 : (_ - U) / (_ - A))),
									(R = L - (L - j) * H),
									(k = W - (W - N) * H),
									(P = M - (M - B) * H);
							}
							var Y = void 0;
							(w = g - (g - S) * (Y = U < y ? 0 : U > A ? 1 : (y - U) / (y - A))),
								(x = O - (O - j) * Y),
								(T = I - (I - N) * Y),
								(E = D - (D - B) * Y);
							for (
								var X = Math.round(Math.min(C, w)),
									V = Math.round(Math.max(C, w)),
									Q = v * U + 4 * X,
									K = X;
								K <= V;
								K++
							)
								(Y = (C - K) / (C - w)) < 0 ? (Y = 0) : Y > 1 && (Y = 1),
									(m[Q++] = (R - (R - x) * Y) | 0),
									(m[Q++] = (k - (k - T) * Y) | 0),
									(m[Q++] = (P - (P - E) * Y) | 0),
									(m[Q++] = 255);
						}
				}
				function drawFigure(t, r, a) {
					var o,
						i,
						l = r.coords,
						u = r.colors;
					switch (r.type) {
						case "lattice":
							var c = r.verticesPerRow,
								d = Math.floor(l.length / c) - 1,
								h = c - 1;
							for (o = 0; o < d; o++)
								for (var p = o * c, m = 0; m < h; m++, p++)
									drawTriangle(t, a, l[p], l[p + 1], l[p + c], u[p], u[p + 1], u[p + c]),
										drawTriangle(
											t,
											a,
											l[p + c + 1],
											l[p + 1],
											l[p + c],
											u[p + c + 1],
											u[p + 1],
											u[p + c]
										);
							break;
						case "triangles":
							for (o = 0, i = l.length; o < i; o += 3)
								drawTriangle(t, a, l[o], l[o + 1], l[o + 2], u[o], u[o + 1], u[o + 2]);
							break;
						default:
							throw new Error("illegal figure");
					}
				}
				return function createMeshCanvas(t, r, a, o, i, l, u, c) {
					var d,
						h,
						p,
						m,
						v = Math.floor(t[0]),
						g = Math.floor(t[1]),
						y = Math.ceil(t[2]) - v,
						b = Math.ceil(t[3]) - g,
						_ = Math.min(Math.ceil(Math.abs(y * r[0] * 1.1)), 3e3),
						S = Math.min(Math.ceil(Math.abs(b * r[1] * 1.1)), 3e3),
						A = y / _,
						C = b / S,
						R = { coords: a, colors: o, offsetX: -v, offsetY: -g, scaleX: 1 / A, scaleY: 1 / C },
						k = _ + 4,
						P = S + 4;
					if (c.isEnabled)
						(d = c.drawFigures({ width: _, height: S, backgroundColor: l, figures: i, context: R })),
							(h = u.getCanvas("mesh", k, P, !1)).context.drawImage(d, 2, 2),
							(d = h.canvas);
					else {
						var w = (h = u.getCanvas("mesh", k, P, !1)).context,
							x = w.createImageData(_, S);
						if (l) {
							var T = x.data;
							for (p = 0, m = T.length; p < m; p += 4)
								(T[p] = l[0]), (T[p + 1] = l[1]), (T[p + 2] = l[2]), (T[p + 3] = 255);
						}
						for (p = 0; p < i.length; p++) drawFigure(x, i[p], R);
						w.putImageData(x, 2, 2), (d = h.canvas);
					}
					return { canvas: d, offsetX: v - 2 * A, offsetY: g - 2 * C, scaleX: A, scaleY: C };
				};
			})();
			(i.Mesh = {
				fromIR: function Mesh_fromIR(t) {
					var r = t[2],
						a = t[3],
						i = t[4],
						u = t[5],
						c = t[6],
						d = t[7],
						h = t[8];
					return {
						type: "Pattern",
						getPattern: function Mesh_getPattern(t, p, m) {
							var v;
							if ((applyBoundingBox(t, d), m))
								v = o.Util.singularValueDecompose2dScale(t.mozCurrentTransform);
							else if (((v = o.Util.singularValueDecompose2dScale(p.baseTransform)), c)) {
								var g = o.Util.singularValueDecompose2dScale(c);
								v = [v[0] * g[0], v[1] * g[1]];
							}
							var y = l(u, v, r, a, i, m ? null : h, p.cachedCanvases, p.webGLContext);
							return (
								m || (t.setTransform.apply(t, p.baseTransform), c && t.transform.apply(t, c)),
								t.translate(y.offsetX, y.offsetY),
								t.scale(y.scaleX, y.scaleY),
								t.createPattern(y.canvas, "no-repeat")
							);
						},
					};
				},
			}),
				(i.Dummy = {
					fromIR: function Dummy_fromIR() {
						return {
							type: "Pattern",
							getPattern: function Dummy_fromIR_getPattern() {
								return "hotpink";
							},
						};
					},
				});
			var u = (function TilingPatternClosure() {
				var t = 1,
					r = 2;
				function TilingPattern(t, r, a, o, i) {
					(this.operatorList = t[2]),
						(this.matrix = t[3] || [1, 0, 0, 1, 0, 0]),
						(this.bbox = t[4]),
						(this.xstep = t[5]),
						(this.ystep = t[6]),
						(this.paintType = t[7]),
						(this.tilingType = t[8]),
						(this.color = r),
						(this.canvasGraphicsFactory = o),
						(this.baseTransform = i),
						(this.type = "Pattern"),
						(this.ctx = a);
				}
				return (
					(TilingPattern.prototype = {
						createPatternCanvas: function TilinPattern_createPatternCanvas(t) {
							var r = this.operatorList,
								a = this.bbox,
								i = this.xstep,
								l = this.ystep,
								u = this.paintType,
								c = this.tilingType,
								d = this.color,
								h = this.canvasGraphicsFactory;
							(0, o.info)("TilingType: " + c);
							var p = a[0],
								m = a[1],
								v = a[2],
								g = a[3],
								y = o.Util.singularValueDecompose2dScale(this.matrix),
								b = o.Util.singularValueDecompose2dScale(this.baseTransform),
								_ = [y[0] * b[0], y[1] * b[1]],
								S = this.getSizeAndScale(i, this.ctx.canvas.width, _[0]),
								A = this.getSizeAndScale(l, this.ctx.canvas.height, _[1]),
								C = t.cachedCanvases.getCanvas("pattern", S.size, A.size, !0),
								R = C.context,
								k = h.createCanvasGraphics(R);
							return (
								(k.groupLevel = t.groupLevel),
								this.setFillAndStrokeStyleToContext(k, u, d),
								k.transform(S.scale, 0, 0, A.scale, 0, 0),
								k.transform(1, 0, 0, 1, -p, -m),
								this.clipBbox(k, a, p, m, v, g),
								k.executeOperatorList(r),
								this.ctx.transform(1, 0, 0, 1, p, m),
								this.ctx.scale(1 / S.scale, 1 / A.scale),
								C.canvas
							);
						},
						getSizeAndScale: function TilingPattern_getSizeAndScale(t, r, a) {
							t = Math.abs(t);
							var o = Math.max(3e3, r),
								i = Math.ceil(t * a);
							return i >= o ? (i = o) : (a = i / t), { scale: a, size: i };
						},
						clipBbox: function clipBbox(t, r, a, o, i, l) {
							if (Array.isArray(r) && 4 === r.length) {
								var u = i - a,
									c = l - o;
								t.ctx.rect(a, o, u, c), t.clip(), t.endPath();
							}
						},
						setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(a, i, l) {
							var u = a.ctx,
								c = a.current;
							switch (i) {
								case t:
									var d = this.ctx;
									(u.fillStyle = d.fillStyle),
										(u.strokeStyle = d.strokeStyle),
										(c.fillColor = d.fillStyle),
										(c.strokeColor = d.strokeStyle);
									break;
								case r:
									var h = o.Util.makeCssRgb(l[0], l[1], l[2]);
									(u.fillStyle = h), (u.strokeStyle = h), (c.fillColor = h), (c.strokeColor = h);
									break;
								default:
									throw new o.FormatError("Unsupported paint type: ".concat(i));
							}
						},
						getPattern: function TilingPattern_getPattern(t, r) {
							(t = this.ctx).setTransform.apply(t, this.baseTransform), t.transform.apply(t, this.matrix);
							var a = this.createPatternCanvas(r);
							return t.createPattern(a, "repeat");
						},
					}),
					TilingPattern
				);
			})();
			r.TilingPattern = u;
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.GlobalWorkerOptions = void 0);
			var o = Object.create(null);
			(r.GlobalWorkerOptions = o),
				(o.workerPort = void 0 === o.workerPort ? null : o.workerPort),
				(o.workerSrc = void 0 === o.workerSrc ? "" : o.workerSrc);
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.MessageHandler = void 0);
			var o = (function _interopRequireDefault(t) {
					return t && t.__esModule ? t : { default: t };
				})(a(2)),
				i = a(5);
			function asyncGeneratorStep(t, r, a, o, i, l, u) {
				try {
					var c = t[l](u),
						d = c.value;
				} catch (t) {
					return void a(t);
				}
				c.done ? r(d) : Promise.resolve(d).then(o, i);
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _typeof(t) {
				return (_typeof =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function _typeof(t) {
								return typeof t;
						  }
						: function _typeof(t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  })(t);
			}
			var l = 1,
				u = 2,
				c = 1,
				d = 2,
				h = 3,
				p = 4,
				m = 5,
				v = 6,
				g = 7,
				y = 8;
			function wrapReason(t) {
				if ("object" !== _typeof(t) || null === t) return t;
				switch (t.name) {
					case "AbortException":
						return new i.AbortException(t.message);
					case "MissingPDFException":
						return new i.MissingPDFException(t.message);
					case "UnexpectedResponseException":
						return new i.UnexpectedResponseException(t.message, t.status);
					case "UnknownErrorException":
						return new i.UnknownErrorException(t.message, t.details);
					default:
						return new i.UnknownErrorException(t.message, t.toString());
				}
			}
			var b = (function () {
				function MessageHandler(t, r, a) {
					var o = this;
					!(function _classCallCheck(t, r) {
						if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
					})(this, MessageHandler),
						(this.sourceName = t),
						(this.targetName = r),
						(this.comObj = a),
						(this.callbackId = 1),
						(this.streamId = 1),
						(this.postMessageTransfers = !0),
						(this.streamSinks = Object.create(null)),
						(this.streamControllers = Object.create(null)),
						(this.callbackCapabilities = Object.create(null)),
						(this.actionHandler = Object.create(null)),
						(this._onComObjOnMessage = function (t) {
							var r = t.data;
							if (r.targetName === o.sourceName)
								if (r.stream) o._processStreamMessage(r);
								else if (r.callback) {
									var i = r.callbackId,
										c = o.callbackCapabilities[i];
									if (!c) throw new Error("Cannot resolve callback ".concat(i));
									if ((delete o.callbackCapabilities[i], r.callback === l)) c.resolve(r.data);
									else {
										if (r.callback !== u) throw new Error("Unexpected callback case");
										c.reject(wrapReason(r.reason));
									}
								} else {
									var d = o.actionHandler[r.action];
									if (!d) throw new Error("Unknown action from worker: ".concat(r.action));
									if (r.callbackId) {
										var h = o.sourceName,
											p = r.sourceName;
										new Promise(function (t) {
											t(d(r.data));
										}).then(
											function (t) {
												a.postMessage({
													sourceName: h,
													targetName: p,
													callback: l,
													callbackId: r.callbackId,
													data: t,
												});
											},
											function (t) {
												a.postMessage({
													sourceName: h,
													targetName: p,
													callback: u,
													callbackId: r.callbackId,
													reason: wrapReason(t),
												});
											}
										);
									} else r.streamId ? o._createStreamSink(r) : d(r.data);
								}
						}),
						a.addEventListener("message", this._onComObjOnMessage);
				}
				var t;
				return (
					(function _createClass(t, r, a) {
						return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
					})(MessageHandler, [
						{
							key: "on",
							value: function on(t, r) {
								var a = this.actionHandler;
								if (a[t]) throw new Error('There is already an actionName called "'.concat(t, '"'));
								a[t] = r;
							},
						},
						{
							key: "send",
							value: function send(t, r, a) {
								this._postMessage(
									{ sourceName: this.sourceName, targetName: this.targetName, action: t, data: r },
									a
								);
							},
						},
						{
							key: "sendWithPromise",
							value: function sendWithPromise(t, r, a) {
								var o = this.callbackId++,
									l = (0, i.createPromiseCapability)();
								this.callbackCapabilities[o] = l;
								try {
									this._postMessage(
										{
											sourceName: this.sourceName,
											targetName: this.targetName,
											action: t,
											callbackId: o,
											data: r,
										},
										a
									);
								} catch (t) {
									l.reject(t);
								}
								return l.promise;
							},
						},
						{
							key: "sendWithStream",
							value: function sendWithStream(t, r, a, o) {
								var l = this,
									u = this.streamId++,
									d = this.sourceName,
									h = this.targetName,
									p = this.comObj;
								return new ReadableStream(
									{
										start: function start(a) {
											var c = (0, i.createPromiseCapability)();
											return (
												(l.streamControllers[u] = {
													controller: a,
													startCall: c,
													pullCall: null,
													cancelCall: null,
													isClosed: !1,
												}),
												l._postMessage(
													{
														sourceName: d,
														targetName: h,
														action: t,
														streamId: u,
														data: r,
														desiredSize: a.desiredSize,
													},
													o
												),
												c.promise
											);
										},
										pull: function pull(t) {
											var r = (0, i.createPromiseCapability)();
											return (
												(l.streamControllers[u].pullCall = r),
												p.postMessage({
													sourceName: d,
													targetName: h,
													stream: v,
													streamId: u,
													desiredSize: t.desiredSize,
												}),
												r.promise
											);
										},
										cancel: function cancel(t) {
											(0, i.assert)(t instanceof Error, "cancel must have a valid reason");
											var r = (0, i.createPromiseCapability)();
											return (
												(l.streamControllers[u].cancelCall = r),
												(l.streamControllers[u].isClosed = !0),
												p.postMessage({
													sourceName: d,
													targetName: h,
													stream: c,
													streamId: u,
													reason: wrapReason(t),
												}),
												r.promise
											);
										},
									},
									a
								);
							},
						},
						{
							key: "_createStreamSink",
							value: function _createStreamSink(t) {
								var r = this,
									a = this.actionHandler[t.action],
									o = t.streamId,
									l = this.sourceName,
									u = t.sourceName,
									c = this.comObj,
									d = {
										enqueue: function enqueue(t) {
											var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
												c = arguments.length > 2 ? arguments[2] : void 0;
											if (!this.isCancelled) {
												var d = this.desiredSize;
												(this.desiredSize -= a),
													d > 0 &&
														this.desiredSize <= 0 &&
														((this.sinkCapability = (0, i.createPromiseCapability)()),
														(this.ready = this.sinkCapability.promise)),
													r._postMessage(
														{
															sourceName: l,
															targetName: u,
															stream: p,
															streamId: o,
															chunk: t,
														},
														c
													);
											}
										},
										close: function close() {
											this.isCancelled ||
												((this.isCancelled = !0),
												c.postMessage({ sourceName: l, targetName: u, stream: h, streamId: o }),
												delete r.streamSinks[o]);
										},
										error: function error(t) {
											(0, i.assert)(t instanceof Error, "error must have a valid reason"),
												this.isCancelled ||
													((this.isCancelled = !0),
													c.postMessage({
														sourceName: l,
														targetName: u,
														stream: m,
														streamId: o,
														reason: wrapReason(t),
													}));
										},
										sinkCapability: (0, i.createPromiseCapability)(),
										onPull: null,
										onCancel: null,
										isCancelled: !1,
										desiredSize: t.desiredSize,
										ready: null,
									};
								d.sinkCapability.resolve(),
									(d.ready = d.sinkCapability.promise),
									(this.streamSinks[o] = d),
									new Promise(function (r) {
										r(a(t.data, d));
									}).then(
										function () {
											c.postMessage({
												sourceName: l,
												targetName: u,
												stream: y,
												streamId: o,
												success: !0,
											});
										},
										function (t) {
											c.postMessage({
												sourceName: l,
												targetName: u,
												stream: y,
												streamId: o,
												reason: wrapReason(t),
											});
										}
									);
							},
						},
						{
							key: "_processStreamMessage",
							value: function _processStreamMessage(t) {
								var r = t.streamId,
									a = this.sourceName,
									o = t.sourceName,
									l = this.comObj;
								switch (t.stream) {
									case y:
										t.success
											? this.streamControllers[r].startCall.resolve()
											: this.streamControllers[r].startCall.reject(wrapReason(t.reason));
										break;
									case g:
										t.success
											? this.streamControllers[r].pullCall.resolve()
											: this.streamControllers[r].pullCall.reject(wrapReason(t.reason));
										break;
									case v:
										if (!this.streamSinks[r]) {
											l.postMessage({
												sourceName: a,
												targetName: o,
												stream: g,
												streamId: r,
												success: !0,
											});
											break;
										}
										this.streamSinks[r].desiredSize <= 0 &&
											t.desiredSize > 0 &&
											this.streamSinks[r].sinkCapability.resolve(),
											(this.streamSinks[r].desiredSize = t.desiredSize);
										var u = this.streamSinks[t.streamId].onPull;
										new Promise(function (t) {
											t(u && u());
										}).then(
											function () {
												l.postMessage({
													sourceName: a,
													targetName: o,
													stream: g,
													streamId: r,
													success: !0,
												});
											},
											function (t) {
												l.postMessage({
													sourceName: a,
													targetName: o,
													stream: g,
													streamId: r,
													reason: wrapReason(t),
												});
											}
										);
										break;
									case p:
										if (
											((0, i.assert)(
												this.streamControllers[r],
												"enqueue should have stream controller"
											),
											this.streamControllers[r].isClosed)
										)
											break;
										this.streamControllers[r].controller.enqueue(t.chunk);
										break;
									case h:
										if (
											((0, i.assert)(
												this.streamControllers[r],
												"close should have stream controller"
											),
											this.streamControllers[r].isClosed)
										)
											break;
										(this.streamControllers[r].isClosed = !0),
											this.streamControllers[r].controller.close(),
											this._deleteStreamController(r);
										break;
									case m:
										(0, i.assert)(this.streamControllers[r], "error should have stream controller"),
											this.streamControllers[r].controller.error(wrapReason(t.reason)),
											this._deleteStreamController(r);
										break;
									case d:
										t.success
											? this.streamControllers[r].cancelCall.resolve()
											: this.streamControllers[r].cancelCall.reject(wrapReason(t.reason)),
											this._deleteStreamController(r);
										break;
									case c:
										if (!this.streamSinks[r]) break;
										var b = this.streamSinks[t.streamId].onCancel;
										new Promise(function (r) {
											r(b && b(wrapReason(t.reason)));
										}).then(
											function () {
												l.postMessage({
													sourceName: a,
													targetName: o,
													stream: d,
													streamId: r,
													success: !0,
												});
											},
											function (t) {
												l.postMessage({
													sourceName: a,
													targetName: o,
													stream: d,
													streamId: r,
													reason: wrapReason(t),
												});
											}
										),
											this.streamSinks[r].sinkCapability.reject(wrapReason(t.reason)),
											(this.streamSinks[r].isCancelled = !0),
											delete this.streamSinks[r];
										break;
									default:
										throw new Error("Unexpected stream case");
								}
							},
						},
						{
							key: "_deleteStreamController",
							value:
								((t = (function _asyncToGenerator(t) {
									return function () {
										var r = this,
											a = arguments;
										return new Promise(function (o, i) {
											var l = t.apply(r, a);
											function _next(t) {
												asyncGeneratorStep(l, o, i, _next, _throw, "next", t);
											}
											function _throw(t) {
												asyncGeneratorStep(l, o, i, _next, _throw, "throw", t);
											}
											_next(void 0);
										});
									};
								})(
									o.default.mark(function _callee(t) {
										return o.default.wrap(
											function _callee$(r) {
												for (;;)
													switch ((r.prev = r.next)) {
														case 0:
															return (
																(r.next = 2),
																Promise.allSettled(
																	[
																		this.streamControllers[t].startCall,
																		this.streamControllers[t].pullCall,
																		this.streamControllers[t].cancelCall,
																	].map(function (t) {
																		return t && t.promise;
																	})
																)
															);
														case 2:
															delete this.streamControllers[t];
														case 3:
														case "end":
															return r.stop();
													}
											},
											_callee,
											this
										);
									})
								)),
								function _deleteStreamController(r) {
									return t.apply(this, arguments);
								}),
						},
						{
							key: "_postMessage",
							value: function _postMessage(t, r) {
								r && this.postMessageTransfers
									? this.comObj.postMessage(t, r)
									: this.comObj.postMessage(t);
							},
						},
						{
							key: "destroy",
							value: function destroy() {
								this.comObj.removeEventListener("message", this._onComObjOnMessage);
							},
						},
					]),
					MessageHandler
				);
			})();
			r.MessageHandler = b;
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.Metadata = void 0);
			var o = a(5),
				i = a(206);
			function _slicedToArray(t, r) {
				return (
					(function _arrayWithHoles(t) {
						if (Array.isArray(t)) return t;
					})(t) ||
					(function _iterableToArrayLimit(t, r) {
						if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
						var a = [],
							o = !0,
							i = !1,
							l = void 0;
						try {
							for (
								var u, c = t[Symbol.iterator]();
								!(o = (u = c.next()).done) && (a.push(u.value), !r || a.length !== r);
								o = !0
							);
						} catch (t) {
							(i = !0), (l = t);
						} finally {
							try {
								o || null == c.return || c.return();
							} finally {
								if (i) throw l;
							}
						}
						return a;
					})(t, r) ||
					_unsupportedIterableToArray(t, r) ||
					(function _nonIterableRest() {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function _unsupportedIterableToArray(t, r) {
				if (t) {
					if ("string" == typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					return (
						"Object" === a && t.constructor && (a = t.constructor.name),
						"Map" === a || "Set" === a
							? Array.from(t)
							: "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
							? _arrayLikeToArray(t, r)
							: void 0
					);
				}
			}
			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o;
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			var l = (function () {
				function Metadata(t) {
					!(function _classCallCheck(t, r) {
						if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
					})(this, Metadata),
						(0, o.assert)("string" == typeof t, "Metadata: input is not a string"),
						(t = this._repair(t));
					var r = new i.SimpleXMLParser().parseFromString(t);
					(this._metadataMap = new Map()), r && this._parse(r);
				}
				return (
					(function _createClass(t, r, a) {
						return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
					})(Metadata, [
						{
							key: "_repair",
							value: function _repair(t) {
								return t.replace(/^[^<]+/, "").replace(/>\\376\\377([^<]+)/g, function (t, r) {
									for (
										var a = r
												.replace(/\\([0-3])([0-7])([0-7])/g, function (t, r, a, o) {
													return String.fromCharCode(64 * r + 8 * a + 1 * o);
												})
												.replace(/&(amp|apos|gt|lt|quot);/g, function (t, r) {
													switch (r) {
														case "amp":
															return "&";
														case "apos":
															return "'";
														case "gt":
															return ">";
														case "lt":
															return "<";
														case "quot":
															return '"';
													}
													throw new Error("_repair: ".concat(r, " isn't defined."));
												}),
											o = "",
											i = 0,
											l = a.length;
										i < l;
										i += 2
									) {
										var u = 256 * a.charCodeAt(i) + a.charCodeAt(i + 1);
										o +=
											u >= 32 && u < 127 && 60 !== u && 62 !== u && 38 !== u
												? String.fromCharCode(u)
												: "&#x" + (65536 + u).toString(16).substring(1) + ";";
									}
									return ">" + o;
								});
							},
						},
						{
							key: "_parse",
							value: function _parse(t) {
								var r = t.documentElement;
								if ("rdf:rdf" !== r.nodeName.toLowerCase())
									for (r = r.firstChild; r && "rdf:rdf" !== r.nodeName.toLowerCase(); )
										r = r.nextSibling;
								var a = r ? r.nodeName.toLowerCase() : null;
								if (r && "rdf:rdf" === a && r.hasChildNodes())
									for (var o = r.childNodes, i = 0, l = o.length; i < l; i++) {
										var u = o[i];
										if ("rdf:description" === u.nodeName.toLowerCase())
											for (var c = 0, d = u.childNodes.length; c < d; c++)
												if ("#text" !== u.childNodes[c].nodeName.toLowerCase()) {
													var h = u.childNodes[c],
														p = h.nodeName.toLowerCase();
													this._metadataMap.set(p, h.textContent.trim());
												}
									}
							},
						},
						{
							key: "get",
							value: function get(t) {
								return this._metadataMap.has(t) ? this._metadataMap.get(t) : null;
							},
						},
						{
							key: "getAll",
							value: function getAll() {
								var t,
									r = Object.create(null),
									a = (function _createForOfIteratorHelper(t, r) {
										var a;
										if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
											if (
												Array.isArray(t) ||
												(a = _unsupportedIterableToArray(t)) ||
												(r && t && "number" == typeof t.length)
											) {
												a && (t = a);
												var o = 0,
													i = function F() {};
												return {
													s: i,
													n: function n() {
														return o >= t.length
															? { done: !0 }
															: { done: !1, value: t[o++] };
													},
													e: function e(t) {
														throw t;
													},
													f: i,
												};
											}
											throw new TypeError(
												"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
											);
										}
										var l,
											u = !0,
											c = !1;
										return {
											s: function s() {
												a = t[Symbol.iterator]();
											},
											n: function n() {
												var t = a.next();
												return (u = t.done), t;
											},
											e: function e(t) {
												(c = !0), (l = t);
											},
											f: function f() {
												try {
													u || null == a.return || a.return();
												} finally {
													if (c) throw l;
												}
											},
										};
									})(this._metadataMap);
								try {
									for (a.s(); !(t = a.n()).done; ) {
										var o = _slicedToArray(t.value, 2),
											i = o[0],
											l = o[1];
										r[i] = l;
									}
								} catch (t) {
									a.e(t);
								} finally {
									a.f();
								}
								return r;
							},
						},
						{
							key: "has",
							value: function has(t) {
								return this._metadataMap.has(t);
							},
						},
					]),
					Metadata
				);
			})();
			r.Metadata = l;
		},
		function (t, r, a) {
			"use strict";
			function _typeof(t) {
				return (_typeof =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function _typeof(t) {
								return typeof t;
						  }
						: function _typeof(t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  })(t);
			}
			function _slicedToArray(t, r) {
				return (
					(function _arrayWithHoles(t) {
						if (Array.isArray(t)) return t;
					})(t) ||
					(function _iterableToArrayLimit(t, r) {
						if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
						var a = [],
							o = !0,
							i = !1,
							l = void 0;
						try {
							for (
								var u, c = t[Symbol.iterator]();
								!(o = (u = c.next()).done) && (a.push(u.value), !r || a.length !== r);
								o = !0
							);
						} catch (t) {
							(i = !0), (l = t);
						} finally {
							try {
								o || null == c.return || c.return();
							} finally {
								if (i) throw l;
							}
						}
						return a;
					})(t, r) ||
					(function _unsupportedIterableToArray(t, r) {
						if (!t) return;
						if ("string" == typeof t) return _arrayLikeToArray(t, r);
						var a = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === a && t.constructor && (a = t.constructor.name);
						if ("Map" === a || "Set" === a) return Array.from(t);
						if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
							return _arrayLikeToArray(t, r);
					})(t, r) ||
					(function _nonIterableRest() {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o;
			}
			function _get(t, r, a) {
				return (_get =
					"undefined" != typeof Reflect && Reflect.get
						? Reflect.get
						: function _get(t, r, a) {
								var o = (function _superPropBase(t, r) {
									for (
										;
										!Object.prototype.hasOwnProperty.call(t, r) &&
										null !== (t = _getPrototypeOf(t));

									);
									return t;
								})(t, r);
								if (o) {
									var i = Object.getOwnPropertyDescriptor(o, r);
									return i.get ? i.get.call(a) : i.value;
								}
						  })(t, r, a || t);
			}
			function _setPrototypeOf(t, r) {
				return (_setPrototypeOf =
					Object.setPrototypeOf ||
					function _setPrototypeOf(t, r) {
						return (t.__proto__ = r), t;
					})(t, r);
			}
			function _createSuper(t) {
				var r = (function _isNativeReflectConstruct() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
					} catch (t) {
						return !1;
					}
				})();
				return function _createSuperInternal() {
					var a,
						o = _getPrototypeOf(t);
					if (r) {
						var i = _getPrototypeOf(this).constructor;
						a = Reflect.construct(o, arguments, i);
					} else a = o.apply(this, arguments);
					return _possibleConstructorReturn(this, a);
				};
			}
			function _possibleConstructorReturn(t, r) {
				return !r || ("object" !== _typeof(r) && "function" != typeof r)
					? (function _assertThisInitialized(t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: r;
			}
			function _getPrototypeOf(t) {
				return (_getPrototypeOf = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function _getPrototypeOf(t) {
							return t.__proto__ || Object.getPrototypeOf(t);
					  })(t);
			}
			function _classCallCheck(t, r) {
				if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _createClass(t, r, a) {
				return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
			}
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.SimpleXMLParser = void 0);
			var o = 0,
				i = -2,
				l = -3,
				u = -4,
				c = -5,
				d = -6,
				h = -9;
			function isWhitespace(t, r) {
				var a = t[r];
				return " " === a || "\n" === a || "\r" === a || "\t" === a;
			}
			var p = (function () {
					function XMLParserBase() {
						_classCallCheck(this, XMLParserBase);
					}
					return (
						_createClass(XMLParserBase, [
							{
								key: "_resolveEntities",
								value: function _resolveEntities(t) {
									var r = this;
									return t.replace(/&([^;]+);/g, function (t, a) {
										if ("#x" === a.substring(0, 2))
											return String.fromCharCode(parseInt(a.substring(2), 16));
										if ("#" === a.substring(0, 1))
											return String.fromCharCode(parseInt(a.substring(1), 10));
										switch (a) {
											case "lt":
												return "<";
											case "gt":
												return ">";
											case "amp":
												return "&";
											case "quot":
												return '"';
										}
										return r.onResolveEntity(a);
									});
								},
							},
							{
								key: "_parseContent",
								value: function _parseContent(t, r) {
									var a = [],
										o = r;
									function skipWs() {
										for (; o < t.length && isWhitespace(t, o); ) ++o;
									}
									for (; o < t.length && !isWhitespace(t, o) && ">" !== t[o] && "/" !== t[o]; ) ++o;
									var i = t.substring(r, o);
									for (skipWs(); o < t.length && ">" !== t[o] && "/" !== t[o] && "?" !== t[o]; ) {
										skipWs();
										for (var l, u = ""; o < t.length && !isWhitespace(t, o) && "=" !== t[o]; )
											(u += t[o]), ++o;
										if ((skipWs(), "=" !== t[o])) return null;
										++o, skipWs();
										var c = t[o];
										if ('"' !== c && "'" !== c) return null;
										var d = t.indexOf(c, ++o);
										if (d < 0) return null;
										(l = t.substring(o, d)),
											a.push({ name: u, value: this._resolveEntities(l) }),
											(o = d + 1),
											skipWs();
									}
									return { name: i, attributes: a, parsed: o - r };
								},
							},
							{
								key: "_parseProcessingInstruction",
								value: function _parseProcessingInstruction(t, r) {
									var a = r;
									for (; a < t.length && !isWhitespace(t, a) && ">" !== t[a] && "/" !== t[a]; ) ++a;
									var o = t.substring(r, a);
									!(function skipWs() {
										for (; a < t.length && isWhitespace(t, a); ) ++a;
									})();
									for (var i = a; a < t.length && ("?" !== t[a] || ">" !== t[a + 1]); ) ++a;
									return { name: o, value: t.substring(i, a), parsed: a - r };
								},
							},
							{
								key: "parseXml",
								value: function parseXml(t) {
									for (var r = 0; r < t.length; ) {
										var a = r;
										if ("<" === t[r]) {
											var o = void 0;
											switch (t[++a]) {
												case "/":
													if ((++a, (o = t.indexOf(">", a)) < 0)) return void this.onError(h);
													this.onEndElement(t.substring(a, o)), (a = o + 1);
													break;
												case "?":
													++a;
													var p = this._parseProcessingInstruction(t, a);
													if ("?>" !== t.substring(a + p.parsed, a + p.parsed + 2))
														return void this.onError(l);
													this.onPi(p.name, p.value), (a += p.parsed + 2);
													break;
												case "!":
													if ("--" === t.substring(a + 1, a + 3)) {
														if ((o = t.indexOf("--\x3e", a + 3)) < 0)
															return void this.onError(c);
														this.onComment(t.substring(a + 3, o)), (a = o + 3);
													} else if ("[CDATA[" === t.substring(a + 1, a + 8)) {
														if ((o = t.indexOf("]]>", a + 8)) < 0)
															return void this.onError(i);
														this.onCdata(t.substring(a + 8, o)), (a = o + 3);
													} else {
														if ("DOCTYPE" !== t.substring(a + 1, a + 8))
															return void this.onError(d);
														var m = t.indexOf("[", a + 8),
															v = !1;
														if ((o = t.indexOf(">", a + 8)) < 0)
															return void this.onError(u);
														if (m > 0 && o > m) {
															if ((o = t.indexOf("]>", a + 8)) < 0)
																return void this.onError(u);
															v = !0;
														}
														var g = t.substring(a + 8, o + (v ? 1 : 0));
														this.onDoctype(g), (a = o + (v ? 2 : 1));
													}
													break;
												default:
													var y = this._parseContent(t, a);
													if (null === y) return void this.onError(d);
													var b = !1;
													if ("/>" === t.substring(a + y.parsed, a + y.parsed + 2)) b = !0;
													else if (">" !== t.substring(a + y.parsed, a + y.parsed + 1))
														return void this.onError(h);
													this.onBeginElement(y.name, y.attributes, b),
														(a += y.parsed + (b ? 2 : 1));
											}
										} else {
											for (; a < t.length && "<" !== t[a]; ) a++;
											var _ = t.substring(r, a);
											this.onText(this._resolveEntities(_));
										}
										r = a;
									}
								},
							},
							{
								key: "onResolveEntity",
								value: function onResolveEntity(t) {
									return "&".concat(t, ";");
								},
							},
							{ key: "onPi", value: function onPi(t, r) {} },
							{ key: "onComment", value: function onComment(t) {} },
							{ key: "onCdata", value: function onCdata(t) {} },
							{ key: "onDoctype", value: function onDoctype(t) {} },
							{ key: "onText", value: function onText(t) {} },
							{ key: "onBeginElement", value: function onBeginElement(t, r, a) {} },
							{ key: "onEndElement", value: function onEndElement(t) {} },
							{ key: "onError", value: function onError(t) {} },
						]),
						XMLParserBase
					);
				})(),
				m = (function () {
					function SimpleDOMNode(t, r) {
						_classCallCheck(this, SimpleDOMNode),
							(this.nodeName = t),
							(this.nodeValue = r),
							Object.defineProperty(this, "parentNode", { value: null, writable: !0 });
					}
					return (
						_createClass(SimpleDOMNode, [
							{
								key: "hasChildNodes",
								value: function hasChildNodes() {
									return this.childNodes && this.childNodes.length > 0;
								},
							},
							{
								key: "firstChild",
								get: function get() {
									return this.childNodes && this.childNodes[0];
								},
							},
							{
								key: "nextSibling",
								get: function get() {
									var t = this.parentNode.childNodes;
									if (t) {
										var r = t.indexOf(this);
										if (-1 !== r) return t[r + 1];
									}
								},
							},
							{
								key: "textContent",
								get: function get() {
									return this.childNodes
										? this.childNodes
												.map(function (t) {
													return t.textContent;
												})
												.join("")
										: this.nodeValue || "";
								},
							},
						]),
						SimpleDOMNode
					);
				})(),
				v = (function (t) {
					!(function _inherits(t, r) {
						if ("function" != typeof r && null !== r)
							throw new TypeError("Super expression must either be null or a function");
						(t.prototype = Object.create(r && r.prototype, {
							constructor: { value: t, writable: !0, configurable: !0 },
						})),
							r && _setPrototypeOf(t, r);
					})(SimpleXMLParser, t);
					var r = _createSuper(SimpleXMLParser);
					function SimpleXMLParser() {
						var t;
						return (
							_classCallCheck(this, SimpleXMLParser),
							((t = r.call(this))._currentFragment = null),
							(t._stack = null),
							(t._errorCode = o),
							t
						);
					}
					return (
						_createClass(SimpleXMLParser, [
							{
								key: "parseFromString",
								value: function parseFromString(t) {
									if (
										((this._currentFragment = []),
										(this._stack = []),
										(this._errorCode = o),
										this.parseXml(t),
										this._errorCode === o)
									) {
										var r = _slicedToArray(this._currentFragment, 1)[0];
										if (r) return { documentElement: r };
									}
								},
							},
							{
								key: "onResolveEntity",
								value: function onResolveEntity(t) {
									switch (t) {
										case "apos":
											return "'";
									}
									return _get(
										_getPrototypeOf(SimpleXMLParser.prototype),
										"onResolveEntity",
										this
									).call(this, t);
								},
							},
							{
								key: "onText",
								value: function onText(t) {
									if (
										!(function isWhitespaceString(t) {
											for (var r = 0, a = t.length; r < a; r++)
												if (!isWhitespace(t, r)) return !1;
											return !0;
										})(t)
									) {
										var r = new m("#text", t);
										this._currentFragment.push(r);
									}
								},
							},
							{
								key: "onCdata",
								value: function onCdata(t) {
									var r = new m("#text", t);
									this._currentFragment.push(r);
								},
							},
							{
								key: "onBeginElement",
								value: function onBeginElement(t, r, a) {
									var o = new m(t);
									(o.childNodes = []),
										this._currentFragment.push(o),
										a ||
											(this._stack.push(this._currentFragment),
											(this._currentFragment = o.childNodes));
								},
							},
							{
								key: "onEndElement",
								value: function onEndElement(t) {
									this._currentFragment = this._stack.pop() || [];
									var r = this._currentFragment[this._currentFragment.length - 1];
									if (r)
										for (var a = 0, o = r.childNodes.length; a < o; a++)
											r.childNodes[a].parentNode = r;
								},
							},
							{
								key: "onError",
								value: function onError(t) {
									this._errorCode = t;
								},
							},
						]),
						SimpleXMLParser
					);
				})(p);
			r.SimpleXMLParser = v;
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.PDFDataTransportStream = void 0);
			var o = (function _interopRequireDefault(t) {
					return t && t.__esModule ? t : { default: t };
				})(a(2)),
				i = a(5);
			function asyncGeneratorStep(t, r, a, o, i, l, u) {
				try {
					var c = t[l](u),
						d = c.value;
				} catch (t) {
					return void a(t);
				}
				c.done ? r(d) : Promise.resolve(d).then(o, i);
			}
			function _asyncToGenerator(t) {
				return function () {
					var r = this,
						a = arguments;
					return new Promise(function (o, i) {
						var l = t.apply(r, a);
						function _next(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "next", t);
						}
						function _throw(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "throw", t);
						}
						_next(void 0);
					});
				};
			}
			function _createForOfIteratorHelper(t, r) {
				var a;
				if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
					if (
						Array.isArray(t) ||
						(a = (function _unsupportedIterableToArray(t, r) {
							if (!t) return;
							if ("string" == typeof t) return _arrayLikeToArray(t, r);
							var a = Object.prototype.toString.call(t).slice(8, -1);
							"Object" === a && t.constructor && (a = t.constructor.name);
							if ("Map" === a || "Set" === a) return Array.from(t);
							if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
								return _arrayLikeToArray(t, r);
						})(t)) ||
						(r && t && "number" == typeof t.length)
					) {
						a && (t = a);
						var o = 0,
							i = function F() {};
						return {
							s: i,
							n: function n() {
								return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
							},
							e: function e(t) {
								throw t;
							},
							f: i,
						};
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				}
				var l,
					u = !0,
					c = !1;
				return {
					s: function s() {
						a = t[Symbol.iterator]();
					},
					n: function n() {
						var t = a.next();
						return (u = t.done), t;
					},
					e: function e(t) {
						(c = !0), (l = t);
					},
					f: function f() {
						try {
							u || null == a.return || a.return();
						} finally {
							if (c) throw l;
						}
					},
				};
			}
			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o;
			}
			function _classCallCheck(t, r) {
				if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _createClass(t, r, a) {
				return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
			}
			var l = (function () {
				function PDFDataTransportStream(t, r) {
					var a = this;
					_classCallCheck(this, PDFDataTransportStream),
						(0, i.assert)(r, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'),
						(this._queuedChunks = []),
						(this._progressiveDone = t.progressiveDone || !1);
					var o = t.initialData;
					if (o && o.length > 0) {
						var l = new Uint8Array(o).buffer;
						this._queuedChunks.push(l);
					}
					(this._pdfDataRangeTransport = r),
						(this._isStreamingSupported = !t.disableStream),
						(this._isRangeSupported = !t.disableRange),
						(this._contentLength = t.length),
						(this._fullRequestReader = null),
						(this._rangeReaders = []),
						this._pdfDataRangeTransport.addRangeListener(function (t, r) {
							a._onReceiveData({ begin: t, chunk: r });
						}),
						this._pdfDataRangeTransport.addProgressListener(function (t, r) {
							a._onProgress({ loaded: t, total: r });
						}),
						this._pdfDataRangeTransport.addProgressiveReadListener(function (t) {
							a._onReceiveData({ chunk: t });
						}),
						this._pdfDataRangeTransport.addProgressiveDoneListener(function () {
							a._onProgressiveDone();
						}),
						this._pdfDataRangeTransport.transportReady();
				}
				return (
					_createClass(PDFDataTransportStream, [
						{
							key: "_onReceiveData",
							value: function _onReceiveData(t) {
								var r = new Uint8Array(t.chunk).buffer;
								if (void 0 === t.begin)
									this._fullRequestReader
										? this._fullRequestReader._enqueue(r)
										: this._queuedChunks.push(r);
								else {
									var a = this._rangeReaders.some(function (a) {
										return a._begin === t.begin && (a._enqueue(r), !0);
									});
									(0, i.assert)(
										a,
										"_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."
									);
								}
							},
						},
						{
							key: "_onProgress",
							value: function _onProgress(t) {
								if (void 0 === t.total) {
									var r = this._rangeReaders[0];
									r && r.onProgress && r.onProgress({ loaded: t.loaded });
								} else {
									var a = this._fullRequestReader;
									a && a.onProgress && a.onProgress({ loaded: t.loaded, total: t.total });
								}
							},
						},
						{
							key: "_onProgressiveDone",
							value: function _onProgressiveDone() {
								this._fullRequestReader && this._fullRequestReader.progressiveDone(),
									(this._progressiveDone = !0);
							},
						},
						{
							key: "_removeRangeReader",
							value: function _removeRangeReader(t) {
								var r = this._rangeReaders.indexOf(t);
								r >= 0 && this._rangeReaders.splice(r, 1);
							},
						},
						{
							key: "getFullReader",
							value: function getFullReader() {
								(0, i.assert)(
									!this._fullRequestReader,
									"PDFDataTransportStream.getFullReader can only be called once."
								);
								var t = this._queuedChunks;
								return (this._queuedChunks = null), new u(this, t, this._progressiveDone);
							},
						},
						{
							key: "getRangeReader",
							value: function getRangeReader(t, r) {
								if (r <= this._progressiveDataLength) return null;
								var a = new c(this, t, r);
								return (
									this._pdfDataRangeTransport.requestDataRange(t, r), this._rangeReaders.push(a), a
								);
							},
						},
						{
							key: "cancelAllRequests",
							value: function cancelAllRequests(t) {
								this._fullRequestReader && this._fullRequestReader.cancel(t),
									this._rangeReaders.slice(0).forEach(function (r) {
										r.cancel(t);
									}),
									this._pdfDataRangeTransport.abort();
							},
						},
						{
							key: "_progressiveDataLength",
							get: function get() {
								return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
							},
						},
					]),
					PDFDataTransportStream
				);
			})();
			r.PDFDataTransportStream = l;
			var u = (function () {
					function PDFDataTransportStreamReader(t, r) {
						var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						_classCallCheck(this, PDFDataTransportStreamReader),
							(this._stream = t),
							(this._done = a || !1),
							(this._filename = null),
							(this._queuedChunks = r || []),
							(this._loaded = 0);
						var o,
							i = _createForOfIteratorHelper(this._queuedChunks);
						try {
							for (i.s(); !(o = i.n()).done; ) {
								var l = o.value;
								this._loaded += l.byteLength;
							}
						} catch (t) {
							i.e(t);
						} finally {
							i.f();
						}
						(this._requests = []),
							(this._headersReady = Promise.resolve()),
							(t._fullRequestReader = this),
							(this.onProgress = null);
					}
					var t;
					return (
						_createClass(PDFDataTransportStreamReader, [
							{
								key: "_enqueue",
								value: function _enqueue(t) {
									if (!this._done) {
										if (this._requests.length > 0)
											this._requests.shift().resolve({ value: t, done: !1 });
										else this._queuedChunks.push(t);
										this._loaded += t.byteLength;
									}
								},
							},
							{
								key: "read",
								value:
									((t = _asyncToGenerator(
										o.default.mark(function _callee() {
											var t, r;
											return o.default.wrap(
												function _callee$(a) {
													for (;;)
														switch ((a.prev = a.next)) {
															case 0:
																if (!(this._queuedChunks.length > 0)) {
																	a.next = 3;
																	break;
																}
																return (
																	(t = this._queuedChunks.shift()),
																	a.abrupt("return", { value: t, done: !1 })
																);
															case 3:
																if (!this._done) {
																	a.next = 5;
																	break;
																}
																return a.abrupt("return", { value: void 0, done: !0 });
															case 5:
																return (
																	(r = (0, i.createPromiseCapability)()),
																	this._requests.push(r),
																	a.abrupt("return", r.promise)
																);
															case 8:
															case "end":
																return a.stop();
														}
												},
												_callee,
												this
											);
										})
									)),
									function read() {
										return t.apply(this, arguments);
									}),
							},
							{
								key: "cancel",
								value: function cancel(t) {
									(this._done = !0),
										this._requests.forEach(function (t) {
											t.resolve({ value: void 0, done: !0 });
										}),
										(this._requests = []);
								},
							},
							{
								key: "progressiveDone",
								value: function progressiveDone() {
									this._done || (this._done = !0);
								},
							},
							{
								key: "headersReady",
								get: function get() {
									return this._headersReady;
								},
							},
							{
								key: "filename",
								get: function get() {
									return this._filename;
								},
							},
							{
								key: "isRangeSupported",
								get: function get() {
									return this._stream._isRangeSupported;
								},
							},
							{
								key: "isStreamingSupported",
								get: function get() {
									return this._stream._isStreamingSupported;
								},
							},
							{
								key: "contentLength",
								get: function get() {
									return this._stream._contentLength;
								},
							},
						]),
						PDFDataTransportStreamReader
					);
				})(),
				c = (function () {
					function PDFDataTransportStreamRangeReader(t, r, a) {
						_classCallCheck(this, PDFDataTransportStreamRangeReader),
							(this._stream = t),
							(this._begin = r),
							(this._end = a),
							(this._queuedChunk = null),
							(this._requests = []),
							(this._done = !1),
							(this.onProgress = null);
					}
					var t;
					return (
						_createClass(PDFDataTransportStreamRangeReader, [
							{
								key: "_enqueue",
								value: function _enqueue(t) {
									if (!this._done) {
										if (0 === this._requests.length) this._queuedChunk = t;
										else
											this._requests.shift().resolve({ value: t, done: !1 }),
												this._requests.forEach(function (t) {
													t.resolve({ value: void 0, done: !0 });
												}),
												(this._requests = []);
										(this._done = !0), this._stream._removeRangeReader(this);
									}
								},
							},
							{
								key: "read",
								value:
									((t = _asyncToGenerator(
										o.default.mark(function _callee2() {
											var t, r;
											return o.default.wrap(
												function _callee2$(a) {
													for (;;)
														switch ((a.prev = a.next)) {
															case 0:
																if (!this._queuedChunk) {
																	a.next = 4;
																	break;
																}
																return (
																	(t = this._queuedChunk),
																	(this._queuedChunk = null),
																	a.abrupt("return", { value: t, done: !1 })
																);
															case 4:
																if (!this._done) {
																	a.next = 6;
																	break;
																}
																return a.abrupt("return", { value: void 0, done: !0 });
															case 6:
																return (
																	(r = (0, i.createPromiseCapability)()),
																	this._requests.push(r),
																	a.abrupt("return", r.promise)
																);
															case 9:
															case "end":
																return a.stop();
														}
												},
												_callee2,
												this
											);
										})
									)),
									function read() {
										return t.apply(this, arguments);
									}),
							},
							{
								key: "cancel",
								value: function cancel(t) {
									(this._done = !0),
										this._requests.forEach(function (t) {
											t.resolve({ value: void 0, done: !0 });
										}),
										(this._requests = []),
										this._stream._removeRangeReader(this);
								},
							},
							{
								key: "isStreamingSupported",
								get: function get() {
									return !1;
								},
							},
						]),
						PDFDataTransportStreamRangeReader
					);
				})();
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.WebGLContext = void 0);
			var o = a(5);
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			var i = (function () {
				function WebGLContext(t) {
					var r = t.enable,
						a = void 0 !== r && r;
					!(function _classCallCheck(t, r) {
						if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
					})(this, WebGLContext),
						(this._enabled = !0 === a);
				}
				return (
					(function _createClass(t, r, a) {
						return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
					})(WebGLContext, [
						{
							key: "composeSMask",
							value: function composeSMask(t) {
								var r = t.layer,
									a = t.mask,
									o = t.properties;
								return l.composeSMask(r, a, o);
							},
						},
						{
							key: "drawFigures",
							value: function drawFigures(t) {
								var r = t.width,
									a = t.height,
									o = t.backgroundColor,
									i = t.figures,
									u = t.context;
								return l.drawFigures(r, a, o, i, u);
							},
						},
						{
							key: "clear",
							value: function clear() {
								l.cleanup();
							},
						},
						{
							key: "isEnabled",
							get: function get() {
								var t = this._enabled;
								return t && (t = l.tryInitGL()), (0, o.shadow)(this, "isEnabled", t);
							},
						},
					]),
					WebGLContext
				);
			})();
			r.WebGLContext = i;
			var l = (function WebGLUtilsClosure() {
				function loadShader(t, r, a) {
					var o = t.createShader(a);
					if ((t.shaderSource(o, r), t.compileShader(o), !t.getShaderParameter(o, t.COMPILE_STATUS))) {
						var i = t.getShaderInfoLog(o);
						throw new Error("Error during shader compilation: " + i);
					}
					return o;
				}
				function createVertexShader(t, r) {
					return loadShader(t, r, t.VERTEX_SHADER);
				}
				function createFragmentShader(t, r) {
					return loadShader(t, r, t.FRAGMENT_SHADER);
				}
				function createProgram(t, r) {
					for (var a = t.createProgram(), o = 0, i = r.length; o < i; ++o) t.attachShader(a, r[o]);
					if ((t.linkProgram(a), !t.getProgramParameter(a, t.LINK_STATUS))) {
						var l = t.getProgramInfoLog(a);
						throw new Error("Error during program linking: " + l);
					}
					return a;
				}
				function createTexture(t, r, a) {
					t.activeTexture(a);
					var o = t.createTexture();
					return (
						t.bindTexture(t.TEXTURE_2D, o),
						t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
						t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
						t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
						t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
						t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, r),
						o
					);
				}
				var t, r;
				function generateGL() {
					t ||
						((r = document.createElement("canvas")),
						(t = r.getContext("webgl", { premultipliedalpha: !1 })));
				}
				var a = null;
				var o = null;
				return {
					tryInitGL: function tryInitGL() {
						try {
							return generateGL(), !!t;
						} catch (t) {}
						return !1;
					},
					composeSMask: function composeSMask(o, i, l) {
						var u = o.width,
							c = o.height;
						a ||
							(function initSmaskGL() {
								var o, i;
								generateGL(), (o = r), (r = null), (i = t), (t = null);
								var l = createProgram(i, [
									createVertexShader(
										i,
										"  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             "
									),
									createFragmentShader(
										i,
										"  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             "
									),
								]);
								i.useProgram(l);
								var u = {};
								(u.gl = i),
									(u.canvas = o),
									(u.resolutionLocation = i.getUniformLocation(l, "u_resolution")),
									(u.positionLocation = i.getAttribLocation(l, "a_position")),
									(u.backdropLocation = i.getUniformLocation(l, "u_backdrop")),
									(u.subtypeLocation = i.getUniformLocation(l, "u_subtype"));
								var c = i.getAttribLocation(l, "a_texCoord"),
									d = i.getUniformLocation(l, "u_image"),
									h = i.getUniformLocation(l, "u_mask"),
									p = i.createBuffer();
								i.bindBuffer(i.ARRAY_BUFFER, p),
									i.bufferData(
										i.ARRAY_BUFFER,
										new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
										i.STATIC_DRAW
									),
									i.enableVertexAttribArray(c),
									i.vertexAttribPointer(c, 2, i.FLOAT, !1, 0, 0),
									i.uniform1i(d, 0),
									i.uniform1i(h, 1),
									(a = u);
							})();
						var d = a,
							h = d.canvas,
							p = d.gl;
						(h.width = u),
							(h.height = c),
							p.viewport(0, 0, p.drawingBufferWidth, p.drawingBufferHeight),
							p.uniform2f(d.resolutionLocation, u, c),
							l.backdrop
								? p.uniform4f(d.resolutionLocation, l.backdrop[0], l.backdrop[1], l.backdrop[2], 1)
								: p.uniform4f(d.resolutionLocation, 0, 0, 0, 0),
							p.uniform1i(d.subtypeLocation, "Luminosity" === l.subtype ? 1 : 0);
						var m = createTexture(p, o, p.TEXTURE0),
							v = createTexture(p, i, p.TEXTURE1),
							g = p.createBuffer();
						return (
							p.bindBuffer(p.ARRAY_BUFFER, g),
							p.bufferData(
								p.ARRAY_BUFFER,
								new Float32Array([0, 0, u, 0, 0, c, 0, c, u, 0, u, c]),
								p.STATIC_DRAW
							),
							p.enableVertexAttribArray(d.positionLocation),
							p.vertexAttribPointer(d.positionLocation, 2, p.FLOAT, !1, 0, 0),
							p.clearColor(0, 0, 0, 0),
							p.enable(p.BLEND),
							p.blendFunc(p.ONE, p.ONE_MINUS_SRC_ALPHA),
							p.clear(p.COLOR_BUFFER_BIT),
							p.drawArrays(p.TRIANGLES, 0, 6),
							p.flush(),
							p.deleteTexture(m),
							p.deleteTexture(v),
							p.deleteBuffer(g),
							h
						);
					},
					drawFigures: function drawFigures(a, i, l, u, c) {
						o ||
							(function initFiguresGL() {
								var a, i;
								generateGL(), (a = r), (r = null), (i = t), (t = null);
								var l = createProgram(i, [
									createVertexShader(
										i,
										"  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             "
									),
									createFragmentShader(
										i,
										"  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             "
									),
								]);
								i.useProgram(l);
								var u = {};
								(u.gl = i),
									(u.canvas = a),
									(u.resolutionLocation = i.getUniformLocation(l, "u_resolution")),
									(u.scaleLocation = i.getUniformLocation(l, "u_scale")),
									(u.offsetLocation = i.getUniformLocation(l, "u_offset")),
									(u.positionLocation = i.getAttribLocation(l, "a_position")),
									(u.colorLocation = i.getAttribLocation(l, "a_color")),
									(o = u);
							})();
						var d = o,
							h = d.canvas,
							p = d.gl;
						(h.width = a),
							(h.height = i),
							p.viewport(0, 0, p.drawingBufferWidth, p.drawingBufferHeight),
							p.uniform2f(d.resolutionLocation, a, i);
						var m,
							v,
							g,
							y = 0;
						for (m = 0, v = u.length; m < v; m++)
							switch (u[m].type) {
								case "lattice":
									y +=
										((g = (u[m].coords.length / u[m].verticesPerRow) | 0) - 1) *
										(u[m].verticesPerRow - 1) *
										6;
									break;
								case "triangles":
									y += u[m].coords.length;
							}
						var b = new Float32Array(2 * y),
							_ = new Uint8Array(3 * y),
							S = c.coords,
							A = c.colors,
							C = 0,
							R = 0;
						for (m = 0, v = u.length; m < v; m++) {
							var k = u[m],
								P = k.coords,
								w = k.colors;
							switch (k.type) {
								case "lattice":
									var x = k.verticesPerRow;
									g = (P.length / x) | 0;
									for (var T = 1; T < g; T++)
										for (var E = T * x + 1, O = 1; O < x; O++, E++)
											(b[C] = S[P[E - x - 1]]),
												(b[C + 1] = S[P[E - x - 1] + 1]),
												(b[C + 2] = S[P[E - x]]),
												(b[C + 3] = S[P[E - x] + 1]),
												(b[C + 4] = S[P[E - 1]]),
												(b[C + 5] = S[P[E - 1] + 1]),
												(_[R] = A[w[E - x - 1]]),
												(_[R + 1] = A[w[E - x - 1] + 1]),
												(_[R + 2] = A[w[E - x - 1] + 2]),
												(_[R + 3] = A[w[E - x]]),
												(_[R + 4] = A[w[E - x] + 1]),
												(_[R + 5] = A[w[E - x] + 2]),
												(_[R + 6] = A[w[E - 1]]),
												(_[R + 7] = A[w[E - 1] + 1]),
												(_[R + 8] = A[w[E - 1] + 2]),
												(b[C + 6] = b[C + 2]),
												(b[C + 7] = b[C + 3]),
												(b[C + 8] = b[C + 4]),
												(b[C + 9] = b[C + 5]),
												(b[C + 10] = S[P[E]]),
												(b[C + 11] = S[P[E] + 1]),
												(_[R + 9] = _[R + 3]),
												(_[R + 10] = _[R + 4]),
												(_[R + 11] = _[R + 5]),
												(_[R + 12] = _[R + 6]),
												(_[R + 13] = _[R + 7]),
												(_[R + 14] = _[R + 8]),
												(_[R + 15] = A[w[E]]),
												(_[R + 16] = A[w[E] + 1]),
												(_[R + 17] = A[w[E] + 2]),
												(C += 12),
												(R += 18);
									break;
								case "triangles":
									for (var I = 0, D = P.length; I < D; I++)
										(b[C] = S[P[I]]),
											(b[C + 1] = S[P[I] + 1]),
											(_[R] = A[w[I]]),
											(_[R + 1] = A[w[I] + 1]),
											(_[R + 2] = A[w[I] + 2]),
											(C += 2),
											(R += 3);
							}
						}
						l ? p.clearColor(l[0] / 255, l[1] / 255, l[2] / 255, 1) : p.clearColor(0, 0, 0, 0),
							p.clear(p.COLOR_BUFFER_BIT);
						var L = p.createBuffer();
						p.bindBuffer(p.ARRAY_BUFFER, L),
							p.bufferData(p.ARRAY_BUFFER, b, p.STATIC_DRAW),
							p.enableVertexAttribArray(d.positionLocation),
							p.vertexAttribPointer(d.positionLocation, 2, p.FLOAT, !1, 0, 0);
						var W = p.createBuffer();
						return (
							p.bindBuffer(p.ARRAY_BUFFER, W),
							p.bufferData(p.ARRAY_BUFFER, _, p.STATIC_DRAW),
							p.enableVertexAttribArray(d.colorLocation),
							p.vertexAttribPointer(d.colorLocation, 3, p.UNSIGNED_BYTE, !1, 0, 0),
							p.uniform2f(d.scaleLocation, c.scaleX, c.scaleY),
							p.uniform2f(d.offsetLocation, c.offsetX, c.offsetY),
							p.drawArrays(p.TRIANGLES, 0, y),
							p.flush(),
							p.deleteBuffer(L),
							p.deleteBuffer(W),
							h
						);
					},
					cleanup: function cleanup() {
						a && a.canvas && ((a.canvas.width = 0), (a.canvas.height = 0)),
							o && o.canvas && ((o.canvas.width = 0), (o.canvas.height = 0)),
							(a = null),
							(o = null);
					},
				};
			})();
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.AnnotationLayer = void 0);
			var o = a(1),
				i = a(5);
			function _createForOfIteratorHelper(t, r) {
				var a;
				if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
					if (
						Array.isArray(t) ||
						(a = (function _unsupportedIterableToArray(t, r) {
							if (!t) return;
							if ("string" == typeof t) return _arrayLikeToArray(t, r);
							var a = Object.prototype.toString.call(t).slice(8, -1);
							"Object" === a && t.constructor && (a = t.constructor.name);
							if ("Map" === a || "Set" === a) return Array.from(t);
							if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
								return _arrayLikeToArray(t, r);
						})(t)) ||
						(r && t && "number" == typeof t.length)
					) {
						a && (t = a);
						var o = 0,
							i = function F() {};
						return {
							s: i,
							n: function n() {
								return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
							},
							e: function e(t) {
								throw t;
							},
							f: i,
						};
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				}
				var l,
					u = !0,
					c = !1;
				return {
					s: function s() {
						a = t[Symbol.iterator]();
					},
					n: function n() {
						var t = a.next();
						return (u = t.done), t;
					},
					e: function e(t) {
						(c = !0), (l = t);
					},
					f: function f() {
						try {
							u || null == a.return || a.return();
						} finally {
							if (c) throw l;
						}
					},
				};
			}
			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o;
			}
			function _get(t, r, a) {
				return (_get =
					"undefined" != typeof Reflect && Reflect.get
						? Reflect.get
						: function _get(t, r, a) {
								var o = (function _superPropBase(t, r) {
									for (
										;
										!Object.prototype.hasOwnProperty.call(t, r) &&
										null !== (t = _getPrototypeOf(t));

									);
									return t;
								})(t, r);
								if (o) {
									var i = Object.getOwnPropertyDescriptor(o, r);
									return i.get ? i.get.call(a) : i.value;
								}
						  })(t, r, a || t);
			}
			function _typeof(t) {
				return (_typeof =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function _typeof(t) {
								return typeof t;
						  }
						: function _typeof(t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  })(t);
			}
			function _inherits(t, r) {
				if ("function" != typeof r && null !== r)
					throw new TypeError("Super expression must either be null or a function");
				(t.prototype = Object.create(r && r.prototype, {
					constructor: { value: t, writable: !0, configurable: !0 },
				})),
					r && _setPrototypeOf(t, r);
			}
			function _setPrototypeOf(t, r) {
				return (_setPrototypeOf =
					Object.setPrototypeOf ||
					function _setPrototypeOf(t, r) {
						return (t.__proto__ = r), t;
					})(t, r);
			}
			function _createSuper(t) {
				var r = (function _isNativeReflectConstruct() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
					} catch (t) {
						return !1;
					}
				})();
				return function _createSuperInternal() {
					var a,
						o = _getPrototypeOf(t);
					if (r) {
						var i = _getPrototypeOf(this).constructor;
						a = Reflect.construct(o, arguments, i);
					} else a = o.apply(this, arguments);
					return _possibleConstructorReturn(this, a);
				};
			}
			function _possibleConstructorReturn(t, r) {
				return !r || ("object" !== _typeof(r) && "function" != typeof r) ? _assertThisInitialized(t) : r;
			}
			function _assertThisInitialized(t) {
				if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return t;
			}
			function _getPrototypeOf(t) {
				return (_getPrototypeOf = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function _getPrototypeOf(t) {
							return t.__proto__ || Object.getPrototypeOf(t);
					  })(t);
			}
			function _classCallCheck(t, r) {
				if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _createClass(t, r, a) {
				return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
			}
			var l = (function () {
					function AnnotationElementFactory() {
						_classCallCheck(this, AnnotationElementFactory);
					}
					return (
						_createClass(AnnotationElementFactory, null, [
							{
								key: "create",
								value: function create(t) {
									switch (t.data.annotationType) {
										case i.AnnotationType.LINK:
											return new c(t);
										case i.AnnotationType.TEXT:
											return new d(t);
										case i.AnnotationType.WIDGET:
											switch (t.data.fieldType) {
												case "Tx":
													return new p(t);
												case "Btn":
													return t.data.radioButton
														? new v(t)
														: t.data.checkBox
														? new m(t)
														: new g(t);
												case "Ch":
													return new y(t);
											}
											return new h(t);
										case i.AnnotationType.POPUP:
											return new b(t);
										case i.AnnotationType.FREETEXT:
											return new S(t);
										case i.AnnotationType.LINE:
											return new A(t);
										case i.AnnotationType.SQUARE:
											return new C(t);
										case i.AnnotationType.CIRCLE:
											return new R(t);
										case i.AnnotationType.POLYLINE:
											return new k(t);
										case i.AnnotationType.CARET:
											return new w(t);
										case i.AnnotationType.INK:
											return new x(t);
										case i.AnnotationType.POLYGON:
											return new P(t);
										case i.AnnotationType.HIGHLIGHT:
											return new T(t);
										case i.AnnotationType.UNDERLINE:
											return new E(t);
										case i.AnnotationType.SQUIGGLY:
											return new O(t);
										case i.AnnotationType.STRIKEOUT:
											return new I(t);
										case i.AnnotationType.STAMP:
											return new D(t);
										case i.AnnotationType.FILEATTACHMENT:
											return new L(t);
										default:
											return new u(t);
									}
								},
							},
						]),
						AnnotationElementFactory
					);
				})(),
				u = (function () {
					function AnnotationElement(t) {
						var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						_classCallCheck(this, AnnotationElement),
							(this.isRenderable = r),
							(this.data = t.data),
							(this.layer = t.layer),
							(this.page = t.page),
							(this.viewport = t.viewport),
							(this.linkService = t.linkService),
							(this.downloadManager = t.downloadManager),
							(this.imageResourcesPath = t.imageResourcesPath),
							(this.renderInteractiveForms = t.renderInteractiveForms),
							(this.svgFactory = t.svgFactory),
							r && (this.container = this._createContainer(a));
					}
					return (
						_createClass(AnnotationElement, [
							{
								key: "_createContainer",
								value: function _createContainer() {
									var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
										r = this.data,
										a = this.page,
										o = this.viewport,
										l = document.createElement("section"),
										u = r.rect[2] - r.rect[0],
										c = r.rect[3] - r.rect[1];
									l.setAttribute("data-annotation-id", r.id);
									var d = i.Util.normalizeRect([
										r.rect[0],
										a.view[3] - r.rect[1] + a.view[1],
										r.rect[2],
										a.view[3] - r.rect[3] + a.view[1],
									]);
									if (
										((l.style.transform = "matrix(".concat(o.transform.join(","), ")")),
										(l.style.transformOrigin = "".concat(-d[0], "px ").concat(-d[1], "px")),
										!t && r.borderStyle.width > 0)
									) {
										(l.style.borderWidth = "".concat(r.borderStyle.width, "px")),
											r.borderStyle.style !== i.AnnotationBorderStyleType.UNDERLINE &&
												((u -= 2 * r.borderStyle.width), (c -= 2 * r.borderStyle.width));
										var h = r.borderStyle.horizontalCornerRadius,
											p = r.borderStyle.verticalCornerRadius;
										if (h > 0 || p > 0) {
											var m = "".concat(h, "px / ").concat(p, "px");
											l.style.borderRadius = m;
										}
										switch (r.borderStyle.style) {
											case i.AnnotationBorderStyleType.SOLID:
												l.style.borderStyle = "solid";
												break;
											case i.AnnotationBorderStyleType.DASHED:
												l.style.borderStyle = "dashed";
												break;
											case i.AnnotationBorderStyleType.BEVELED:
												(0, i.warn)("Unimplemented border style: beveled");
												break;
											case i.AnnotationBorderStyleType.INSET:
												(0, i.warn)("Unimplemented border style: inset");
												break;
											case i.AnnotationBorderStyleType.UNDERLINE:
												l.style.borderBottomStyle = "solid";
										}
										r.color
											? (l.style.borderColor = i.Util.makeCssRgb(
													0 | r.color[0],
													0 | r.color[1],
													0 | r.color[2]
											  ))
											: (l.style.borderWidth = 0);
									}
									return (
										(l.style.left = "".concat(d[0], "px")),
										(l.style.top = "".concat(d[1], "px")),
										(l.style.width = "".concat(u, "px")),
										(l.style.height = "".concat(c, "px")),
										l
									);
								},
							},
							{
								key: "_createPopup",
								value: function _createPopup(t, r, a) {
									r ||
										(((r = document.createElement("div")).style.height = t.style.height),
										(r.style.width = t.style.width),
										t.appendChild(r));
									var o = new _({
										container: t,
										trigger: r,
										color: a.color,
										title: a.title,
										modificationDate: a.modificationDate,
										contents: a.contents,
										hideWrapper: !0,
									}).render();
									(o.style.left = t.style.width), t.appendChild(o);
								},
							},
							{
								key: "render",
								value: function render() {
									(0, i.unreachable)("Abstract method `AnnotationElement.render` called");
								},
							},
						]),
						AnnotationElement
					);
				})(),
				c = (function (t) {
					_inherits(LinkAnnotationElement, t);
					var r = _createSuper(LinkAnnotationElement);
					function LinkAnnotationElement(t) {
						_classCallCheck(this, LinkAnnotationElement);
						var a = !!(t.data.url || t.data.dest || t.data.action);
						return r.call(this, t, a);
					}
					return (
						_createClass(LinkAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = "linkAnnotation";
									var t = this.data,
										r = this.linkService,
										a = document.createElement("a");
									return (
										t.url
											? (0, o.addLinkAttributes)(a, {
													url: t.url,
													target: t.newWindow ? o.LinkTarget.BLANK : r.externalLinkTarget,
													rel: r.externalLinkRel,
													enabled: r.externalLinkEnabled,
											  })
											: t.action
											? this._bindNamedAction(a, t.action)
											: this._bindLink(a, t.dest),
										this.container.appendChild(a),
										this.container
									);
								},
							},
							{
								key: "_bindLink",
								value: function _bindLink(t, r) {
									var a = this;
									(t.href = this.linkService.getDestinationHash(r)),
										(t.onclick = function () {
											return r && a.linkService.navigateTo(r), !1;
										}),
										r && (t.className = "internalLink");
								},
							},
							{
								key: "_bindNamedAction",
								value: function _bindNamedAction(t, r) {
									var a = this;
									(t.href = this.linkService.getAnchorUrl("")),
										(t.onclick = function () {
											return a.linkService.executeNamedAction(r), !1;
										}),
										(t.className = "internalLink");
								},
							},
						]),
						LinkAnnotationElement
					);
				})(u),
				d = (function (t) {
					_inherits(TextAnnotationElement, t);
					var r = _createSuper(TextAnnotationElement);
					function TextAnnotationElement(t) {
						_classCallCheck(this, TextAnnotationElement);
						var a = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return r.call(this, t, a);
					}
					return (
						_createClass(TextAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = "textAnnotation";
									var t = document.createElement("img");
									return (
										(t.style.height = this.container.style.height),
										(t.style.width = this.container.style.width),
										(t.src =
											this.imageResourcesPath +
											"annotation-" +
											this.data.name.toLowerCase() +
											".svg"),
										(t.alt = "[{{type}} Annotation]"),
										(t.dataset.l10nId = "text_annotation_type"),
										(t.dataset.l10nArgs = JSON.stringify({ type: this.data.name })),
										this.data.hasPopup || this._createPopup(this.container, t, this.data),
										this.container.appendChild(t),
										this.container
									);
								},
							},
						]),
						TextAnnotationElement
					);
				})(u),
				h = (function (t) {
					_inherits(WidgetAnnotationElement, t);
					var r = _createSuper(WidgetAnnotationElement);
					function WidgetAnnotationElement() {
						return _classCallCheck(this, WidgetAnnotationElement), r.apply(this, arguments);
					}
					return (
						_createClass(WidgetAnnotationElement, [
							{
								key: "render",
								value: function render() {
									return this.container;
								},
							},
						]),
						WidgetAnnotationElement
					);
				})(u),
				p = (function (t) {
					_inherits(TextWidgetAnnotationElement, t);
					var r = _createSuper(TextWidgetAnnotationElement);
					function TextWidgetAnnotationElement(t) {
						_classCallCheck(this, TextWidgetAnnotationElement);
						var a = t.renderInteractiveForms || (!t.data.hasAppearance && !!t.data.fieldValue);
						return r.call(this, t, a);
					}
					return (
						_createClass(TextWidgetAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = "textWidgetAnnotation";
									var t = null;
									if (this.renderInteractiveForms) {
										if (
											(this.data.multiLine
												? ((t = document.createElement("textarea")).textContent =
														this.data.fieldValue)
												: (((t = document.createElement("input")).type = "text"),
												  t.setAttribute("value", this.data.fieldValue)),
											(t.disabled = this.data.readOnly),
											(t.name = this.data.fieldName),
											null !== this.data.maxLen && (t.maxLength = this.data.maxLen),
											this.data.comb)
										) {
											var r = (this.data.rect[2] - this.data.rect[0]) / this.data.maxLen;
											t.classList.add("comb"),
												(t.style.letterSpacing = "calc(".concat(r, "px - 1ch)"));
										}
									} else {
										((t = document.createElement("div")).textContent = this.data.fieldValue),
											(t.style.verticalAlign = "middle"),
											(t.style.display = "table-cell");
										var a = null;
										this.data.fontRefName &&
											this.page.commonObjs.has(this.data.fontRefName) &&
											(a = this.page.commonObjs.get(this.data.fontRefName)),
											this._setTextStyle(t, a);
									}
									return (
										null !== this.data.textAlignment &&
											(t.style.textAlign = ["left", "center", "right"][this.data.textAlignment]),
										this.container.appendChild(t),
										this.container
									);
								},
							},
							{
								key: "_setTextStyle",
								value: function _setTextStyle(t, r) {
									var a = t.style;
									if (
										((a.fontSize = "".concat(this.data.fontSize, "px")),
										(a.direction = this.data.fontDirection < 0 ? "rtl" : "ltr"),
										r)
									) {
										var o = "normal";
										r.black ? (o = "900") : r.bold && (o = "bold"),
											(a.fontWeight = o),
											(a.fontStyle = r.italic ? "italic" : "normal");
										var i = r.loadedName ? '"'.concat(r.loadedName, '", ') : "",
											l = r.fallbackName || "Helvetica, sans-serif";
										a.fontFamily = i + l;
									}
								},
							},
						]),
						TextWidgetAnnotationElement
					);
				})(h),
				m = (function (t) {
					_inherits(CheckboxWidgetAnnotationElement, t);
					var r = _createSuper(CheckboxWidgetAnnotationElement);
					function CheckboxWidgetAnnotationElement(t) {
						return (
							_classCallCheck(this, CheckboxWidgetAnnotationElement),
							r.call(this, t, t.renderInteractiveForms)
						);
					}
					return (
						_createClass(CheckboxWidgetAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = "buttonWidgetAnnotation checkBox";
									var t = document.createElement("input");
									return (
										(t.disabled = this.data.readOnly),
										(t.type = "checkbox"),
										(t.name = this.data.fieldName),
										this.data.fieldValue &&
											"Off" !== this.data.fieldValue &&
											t.setAttribute("checked", !0),
										this.container.appendChild(t),
										this.container
									);
								},
							},
						]),
						CheckboxWidgetAnnotationElement
					);
				})(h),
				v = (function (t) {
					_inherits(RadioButtonWidgetAnnotationElement, t);
					var r = _createSuper(RadioButtonWidgetAnnotationElement);
					function RadioButtonWidgetAnnotationElement(t) {
						return (
							_classCallCheck(this, RadioButtonWidgetAnnotationElement),
							r.call(this, t, t.renderInteractiveForms)
						);
					}
					return (
						_createClass(RadioButtonWidgetAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = "buttonWidgetAnnotation radioButton";
									var t = document.createElement("input");
									return (
										(t.disabled = this.data.readOnly),
										(t.type = "radio"),
										(t.name = this.data.fieldName),
										this.data.fieldValue === this.data.buttonValue && t.setAttribute("checked", !0),
										this.container.appendChild(t),
										this.container
									);
								},
							},
						]),
						RadioButtonWidgetAnnotationElement
					);
				})(h),
				g = (function (t) {
					_inherits(PushButtonWidgetAnnotationElement, t);
					var r = _createSuper(PushButtonWidgetAnnotationElement);
					function PushButtonWidgetAnnotationElement() {
						return _classCallCheck(this, PushButtonWidgetAnnotationElement), r.apply(this, arguments);
					}
					return (
						_createClass(PushButtonWidgetAnnotationElement, [
							{
								key: "render",
								value: function render() {
									var t = _get(
										_getPrototypeOf(PushButtonWidgetAnnotationElement.prototype),
										"render",
										this
									).call(this);
									return (t.className = "buttonWidgetAnnotation pushButton"), t;
								},
							},
						]),
						PushButtonWidgetAnnotationElement
					);
				})(c),
				y = (function (t) {
					_inherits(ChoiceWidgetAnnotationElement, t);
					var r = _createSuper(ChoiceWidgetAnnotationElement);
					function ChoiceWidgetAnnotationElement(t) {
						return (
							_classCallCheck(this, ChoiceWidgetAnnotationElement),
							r.call(this, t, t.renderInteractiveForms)
						);
					}
					return (
						_createClass(ChoiceWidgetAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = "choiceWidgetAnnotation";
									var t = document.createElement("select");
									(t.disabled = this.data.readOnly),
										(t.name = this.data.fieldName),
										this.data.combo ||
											((t.size = this.data.options.length),
											this.data.multiSelect && (t.multiple = !0));
									var r,
										a = _createForOfIteratorHelper(this.data.options);
									try {
										for (a.s(); !(r = a.n()).done; ) {
											var o = r.value,
												i = document.createElement("option");
											(i.textContent = o.displayValue),
												(i.value = o.exportValue),
												this.data.fieldValue.includes(o.displayValue) &&
													i.setAttribute("selected", !0),
												t.appendChild(i);
										}
									} catch (t) {
										a.e(t);
									} finally {
										a.f();
									}
									return this.container.appendChild(t), this.container;
								},
							},
						]),
						ChoiceWidgetAnnotationElement
					);
				})(h),
				b = (function (t) {
					_inherits(PopupAnnotationElement, t);
					var r = _createSuper(PopupAnnotationElement);
					function PopupAnnotationElement(t) {
						_classCallCheck(this, PopupAnnotationElement);
						var a = !(!t.data.title && !t.data.contents);
						return r.call(this, t, a);
					}
					return (
						_createClass(PopupAnnotationElement, [
							{
								key: "render",
								value: function render() {
									if (
										((this.container.className = "popupAnnotation"),
										["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"].includes(
											this.data.parentType
										))
									)
										return this.container;
									var t = '[data-annotation-id="'.concat(this.data.parentId, '"]'),
										r = this.layer.querySelector(t);
									if (!r) return this.container;
									var a = new _({
											container: this.container,
											trigger: r,
											color: this.data.color,
											title: this.data.title,
											modificationDate: this.data.modificationDate,
											contents: this.data.contents,
										}),
										o = parseFloat(r.style.left),
										i = parseFloat(r.style.width);
									return (
										(this.container.style.transformOrigin = "-"
											.concat(o + i, "px -")
											.concat(r.style.top)),
										(this.container.style.left = "".concat(o + i, "px")),
										this.container.appendChild(a.render()),
										this.container
									);
								},
							},
						]),
						PopupAnnotationElement
					);
				})(u),
				_ = (function () {
					function PopupElement(t) {
						_classCallCheck(this, PopupElement),
							(this.container = t.container),
							(this.trigger = t.trigger),
							(this.color = t.color),
							(this.title = t.title),
							(this.modificationDate = t.modificationDate),
							(this.contents = t.contents),
							(this.hideWrapper = t.hideWrapper || !1),
							(this.pinned = !1);
					}
					return (
						_createClass(PopupElement, [
							{
								key: "render",
								value: function render() {
									var t = document.createElement("div");
									(t.className = "popupWrapper"),
										(this.hideElement = this.hideWrapper ? t : this.container),
										this.hideElement.setAttribute("hidden", !0);
									var r = document.createElement("div");
									r.className = "popup";
									var a = this.color;
									if (a) {
										var l = 0.7 * (255 - a[0]) + a[0],
											u = 0.7 * (255 - a[1]) + a[1],
											c = 0.7 * (255 - a[2]) + a[2];
										r.style.backgroundColor = i.Util.makeCssRgb(0 | l, 0 | u, 0 | c);
									}
									var d = document.createElement("h1");
									(d.textContent = this.title), r.appendChild(d);
									var h = o.PDFDateString.toDateObject(this.modificationDate);
									if (h) {
										var p = document.createElement("span");
										(p.textContent = "{{date}}, {{time}}"),
											(p.dataset.l10nId = "annotation_date_string"),
											(p.dataset.l10nArgs = JSON.stringify({
												date: h.toLocaleDateString(),
												time: h.toLocaleTimeString(),
											})),
											r.appendChild(p);
									}
									var m = this._formatContents(this.contents);
									return (
										r.appendChild(m),
										this.trigger.addEventListener("click", this._toggle.bind(this)),
										this.trigger.addEventListener("mouseover", this._show.bind(this, !1)),
										this.trigger.addEventListener("mouseout", this._hide.bind(this, !1)),
										r.addEventListener("click", this._hide.bind(this, !0)),
										t.appendChild(r),
										t
									);
								},
							},
							{
								key: "_formatContents",
								value: function _formatContents(t) {
									for (
										var r = document.createElement("p"),
											a = t.split(/(?:\r\n?|\n)/),
											o = 0,
											i = a.length;
										o < i;
										++o
									) {
										var l = a[o];
										r.appendChild(document.createTextNode(l)),
											o < i - 1 && r.appendChild(document.createElement("br"));
									}
									return r;
								},
							},
							{
								key: "_toggle",
								value: function _toggle() {
									this.pinned ? this._hide(!0) : this._show(!0);
								},
							},
							{
								key: "_show",
								value: function _show() {
									var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
									t && (this.pinned = !0),
										this.hideElement.hasAttribute("hidden") &&
											(this.hideElement.removeAttribute("hidden"),
											(this.container.style.zIndex += 1));
								},
							},
							{
								key: "_hide",
								value: function _hide() {
									var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
									t && (this.pinned = !1),
										this.hideElement.hasAttribute("hidden") ||
											this.pinned ||
											(this.hideElement.setAttribute("hidden", !0),
											(this.container.style.zIndex -= 1));
								},
							},
						]),
						PopupElement
					);
				})(),
				S = (function (t) {
					_inherits(FreeTextAnnotationElement, t);
					var r = _createSuper(FreeTextAnnotationElement);
					function FreeTextAnnotationElement(t) {
						_classCallCheck(this, FreeTextAnnotationElement);
						var a = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return r.call(this, t, a, !0);
					}
					return (
						_createClass(FreeTextAnnotationElement, [
							{
								key: "render",
								value: function render() {
									return (
										(this.container.className = "freeTextAnnotation"),
										this.data.hasPopup || this._createPopup(this.container, null, this.data),
										this.container
									);
								},
							},
						]),
						FreeTextAnnotationElement
					);
				})(u),
				A = (function (t) {
					_inherits(LineAnnotationElement, t);
					var r = _createSuper(LineAnnotationElement);
					function LineAnnotationElement(t) {
						_classCallCheck(this, LineAnnotationElement);
						var a = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return r.call(this, t, a, !0);
					}
					return (
						_createClass(LineAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = "lineAnnotation";
									var t = this.data,
										r = t.rect[2] - t.rect[0],
										a = t.rect[3] - t.rect[1],
										o = this.svgFactory.create(r, a),
										i = this.svgFactory.createElement("svg:line");
									return (
										i.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]),
										i.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]),
										i.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]),
										i.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]),
										i.setAttribute("stroke-width", t.borderStyle.width || 1),
										i.setAttribute("stroke", "transparent"),
										o.appendChild(i),
										this.container.append(o),
										this._createPopup(this.container, i, t),
										this.container
									);
								},
							},
						]),
						LineAnnotationElement
					);
				})(u),
				C = (function (t) {
					_inherits(SquareAnnotationElement, t);
					var r = _createSuper(SquareAnnotationElement);
					function SquareAnnotationElement(t) {
						_classCallCheck(this, SquareAnnotationElement);
						var a = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return r.call(this, t, a, !0);
					}
					return (
						_createClass(SquareAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = "squareAnnotation";
									var t = this.data,
										r = t.rect[2] - t.rect[0],
										a = t.rect[3] - t.rect[1],
										o = this.svgFactory.create(r, a),
										i = t.borderStyle.width,
										l = this.svgFactory.createElement("svg:rect");
									return (
										l.setAttribute("x", i / 2),
										l.setAttribute("y", i / 2),
										l.setAttribute("width", r - i),
										l.setAttribute("height", a - i),
										l.setAttribute("stroke-width", i || 1),
										l.setAttribute("stroke", "transparent"),
										l.setAttribute("fill", "none"),
										o.appendChild(l),
										this.container.append(o),
										this._createPopup(this.container, l, t),
										this.container
									);
								},
							},
						]),
						SquareAnnotationElement
					);
				})(u),
				R = (function (t) {
					_inherits(CircleAnnotationElement, t);
					var r = _createSuper(CircleAnnotationElement);
					function CircleAnnotationElement(t) {
						_classCallCheck(this, CircleAnnotationElement);
						var a = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return r.call(this, t, a, !0);
					}
					return (
						_createClass(CircleAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = "circleAnnotation";
									var t = this.data,
										r = t.rect[2] - t.rect[0],
										a = t.rect[3] - t.rect[1],
										o = this.svgFactory.create(r, a),
										i = t.borderStyle.width,
										l = this.svgFactory.createElement("svg:ellipse");
									return (
										l.setAttribute("cx", r / 2),
										l.setAttribute("cy", a / 2),
										l.setAttribute("rx", r / 2 - i / 2),
										l.setAttribute("ry", a / 2 - i / 2),
										l.setAttribute("stroke-width", i || 1),
										l.setAttribute("stroke", "transparent"),
										l.setAttribute("fill", "none"),
										o.appendChild(l),
										this.container.append(o),
										this._createPopup(this.container, l, t),
										this.container
									);
								},
							},
						]),
						CircleAnnotationElement
					);
				})(u),
				k = (function (t) {
					_inherits(PolylineAnnotationElement, t);
					var r = _createSuper(PolylineAnnotationElement);
					function PolylineAnnotationElement(t) {
						var a;
						_classCallCheck(this, PolylineAnnotationElement);
						var o = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return (
							((a = r.call(this, t, o, !0)).containerClassName = "polylineAnnotation"),
							(a.svgElementName = "svg:polyline"),
							a
						);
					}
					return (
						_createClass(PolylineAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = this.containerClassName;
									var t,
										r = this.data,
										a = r.rect[2] - r.rect[0],
										o = r.rect[3] - r.rect[1],
										i = this.svgFactory.create(a, o),
										l = [],
										u = _createForOfIteratorHelper(r.vertices);
									try {
										for (u.s(); !(t = u.n()).done; ) {
											var c = t.value,
												d = c.x - r.rect[0],
												h = r.rect[3] - c.y;
											l.push(d + "," + h);
										}
									} catch (t) {
										u.e(t);
									} finally {
										u.f();
									}
									l = l.join(" ");
									var p = this.svgFactory.createElement(this.svgElementName);
									return (
										p.setAttribute("points", l),
										p.setAttribute("stroke-width", r.borderStyle.width || 1),
										p.setAttribute("stroke", "transparent"),
										p.setAttribute("fill", "none"),
										i.appendChild(p),
										this.container.append(i),
										this._createPopup(this.container, p, r),
										this.container
									);
								},
							},
						]),
						PolylineAnnotationElement
					);
				})(u),
				P = (function (t) {
					_inherits(PolygonAnnotationElement, t);
					var r = _createSuper(PolygonAnnotationElement);
					function PolygonAnnotationElement(t) {
						var a;
						return (
							_classCallCheck(this, PolygonAnnotationElement),
							((a = r.call(this, t)).containerClassName = "polygonAnnotation"),
							(a.svgElementName = "svg:polygon"),
							a
						);
					}
					return PolygonAnnotationElement;
				})(k),
				w = (function (t) {
					_inherits(CaretAnnotationElement, t);
					var r = _createSuper(CaretAnnotationElement);
					function CaretAnnotationElement(t) {
						_classCallCheck(this, CaretAnnotationElement);
						var a = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return r.call(this, t, a, !0);
					}
					return (
						_createClass(CaretAnnotationElement, [
							{
								key: "render",
								value: function render() {
									return (
										(this.container.className = "caretAnnotation"),
										this.data.hasPopup || this._createPopup(this.container, null, this.data),
										this.container
									);
								},
							},
						]),
						CaretAnnotationElement
					);
				})(u),
				x = (function (t) {
					_inherits(InkAnnotationElement, t);
					var r = _createSuper(InkAnnotationElement);
					function InkAnnotationElement(t) {
						var a;
						_classCallCheck(this, InkAnnotationElement);
						var o = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return (
							((a = r.call(this, t, o, !0)).containerClassName = "inkAnnotation"),
							(a.svgElementName = "svg:polyline"),
							a
						);
					}
					return (
						_createClass(InkAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = this.containerClassName;
									var t,
										r = this.data,
										a = r.rect[2] - r.rect[0],
										o = r.rect[3] - r.rect[1],
										i = this.svgFactory.create(a, o),
										l = _createForOfIteratorHelper(r.inkLists);
									try {
										for (l.s(); !(t = l.n()).done; ) {
											var u,
												c = t.value,
												d = [],
												h = _createForOfIteratorHelper(c);
											try {
												for (h.s(); !(u = h.n()).done; ) {
													var p = u.value,
														m = p.x - r.rect[0],
														v = r.rect[3] - p.y;
													d.push("".concat(m, ",").concat(v));
												}
											} catch (t) {
												h.e(t);
											} finally {
												h.f();
											}
											d = d.join(" ");
											var g = this.svgFactory.createElement(this.svgElementName);
											g.setAttribute("points", d),
												g.setAttribute("stroke-width", r.borderStyle.width || 1),
												g.setAttribute("stroke", "transparent"),
												g.setAttribute("fill", "none"),
												this._createPopup(this.container, g, r),
												i.appendChild(g);
										}
									} catch (t) {
										l.e(t);
									} finally {
										l.f();
									}
									return this.container.append(i), this.container;
								},
							},
						]),
						InkAnnotationElement
					);
				})(u),
				T = (function (t) {
					_inherits(HighlightAnnotationElement, t);
					var r = _createSuper(HighlightAnnotationElement);
					function HighlightAnnotationElement(t) {
						_classCallCheck(this, HighlightAnnotationElement);
						var a = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return r.call(this, t, a, !0);
					}
					return (
						_createClass(HighlightAnnotationElement, [
							{
								key: "render",
								value: function render() {
									return (
										(this.container.className = "highlightAnnotation"),
										this.data.hasPopup || this._createPopup(this.container, null, this.data),
										this.container
									);
								},
							},
						]),
						HighlightAnnotationElement
					);
				})(u),
				E = (function (t) {
					_inherits(UnderlineAnnotationElement, t);
					var r = _createSuper(UnderlineAnnotationElement);
					function UnderlineAnnotationElement(t) {
						_classCallCheck(this, UnderlineAnnotationElement);
						var a = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return r.call(this, t, a, !0);
					}
					return (
						_createClass(UnderlineAnnotationElement, [
							{
								key: "render",
								value: function render() {
									return (
										(this.container.className = "underlineAnnotation"),
										this.data.hasPopup || this._createPopup(this.container, null, this.data),
										this.container
									);
								},
							},
						]),
						UnderlineAnnotationElement
					);
				})(u),
				O = (function (t) {
					_inherits(SquigglyAnnotationElement, t);
					var r = _createSuper(SquigglyAnnotationElement);
					function SquigglyAnnotationElement(t) {
						_classCallCheck(this, SquigglyAnnotationElement);
						var a = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return r.call(this, t, a, !0);
					}
					return (
						_createClass(SquigglyAnnotationElement, [
							{
								key: "render",
								value: function render() {
									return (
										(this.container.className = "squigglyAnnotation"),
										this.data.hasPopup || this._createPopup(this.container, null, this.data),
										this.container
									);
								},
							},
						]),
						SquigglyAnnotationElement
					);
				})(u),
				I = (function (t) {
					_inherits(StrikeOutAnnotationElement, t);
					var r = _createSuper(StrikeOutAnnotationElement);
					function StrikeOutAnnotationElement(t) {
						_classCallCheck(this, StrikeOutAnnotationElement);
						var a = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return r.call(this, t, a, !0);
					}
					return (
						_createClass(StrikeOutAnnotationElement, [
							{
								key: "render",
								value: function render() {
									return (
										(this.container.className = "strikeoutAnnotation"),
										this.data.hasPopup || this._createPopup(this.container, null, this.data),
										this.container
									);
								},
							},
						]),
						StrikeOutAnnotationElement
					);
				})(u),
				D = (function (t) {
					_inherits(StampAnnotationElement, t);
					var r = _createSuper(StampAnnotationElement);
					function StampAnnotationElement(t) {
						_classCallCheck(this, StampAnnotationElement);
						var a = !!(t.data.hasPopup || t.data.title || t.data.contents);
						return r.call(this, t, a, !0);
					}
					return (
						_createClass(StampAnnotationElement, [
							{
								key: "render",
								value: function render() {
									return (
										(this.container.className = "stampAnnotation"),
										this.data.hasPopup || this._createPopup(this.container, null, this.data),
										this.container
									);
								},
							},
						]),
						StampAnnotationElement
					);
				})(u),
				L = (function (t) {
					_inherits(FileAttachmentAnnotationElement, t);
					var r = _createSuper(FileAttachmentAnnotationElement);
					function FileAttachmentAnnotationElement(t) {
						var a;
						_classCallCheck(this, FileAttachmentAnnotationElement);
						var l = (a = r.call(this, t, !0)).data.file,
							u = l.filename,
							c = l.content;
						return (
							(a.filename = (0, o.getFilenameFromUrl)(u)),
							(a.content = c),
							a.linkService.eventBus &&
								a.linkService.eventBus.dispatch("fileattachmentannotation", {
									source: _assertThisInitialized(a),
									id: (0, i.stringToPDFString)(u),
									filename: u,
									content: c,
								}),
							a
						);
					}
					return (
						_createClass(FileAttachmentAnnotationElement, [
							{
								key: "render",
								value: function render() {
									this.container.className = "fileAttachmentAnnotation";
									var t = document.createElement("div");
									return (
										(t.style.height = this.container.style.height),
										(t.style.width = this.container.style.width),
										t.addEventListener("dblclick", this._download.bind(this)),
										this.data.hasPopup ||
											(!this.data.title && !this.data.contents) ||
											this._createPopup(this.container, t, this.data),
										this.container.appendChild(t),
										this.container
									);
								},
							},
							{
								key: "_download",
								value: function _download() {
									this.downloadManager
										? this.downloadManager.downloadData(this.content, this.filename, "")
										: (0, i.warn)("Download cannot be started due to unavailable download manager");
								},
							},
						]),
						FileAttachmentAnnotationElement
					);
				})(u),
				W = (function () {
					function AnnotationLayer() {
						_classCallCheck(this, AnnotationLayer);
					}
					return (
						_createClass(AnnotationLayer, null, [
							{
								key: "render",
								value: function render(t) {
									var r,
										a = [],
										u = [],
										c = _createForOfIteratorHelper(t.annotations);
									try {
										for (c.s(); !(r = c.n()).done; ) {
											var d = r.value;
											d && (d.annotationType !== i.AnnotationType.POPUP ? a.push(d) : u.push(d));
										}
									} catch (t) {
										c.e(t);
									} finally {
										c.f();
									}
									u.length && a.push.apply(a, u);
									for (var h = 0, p = a; h < p.length; h++) {
										var m = p[h],
											v = l.create({
												data: m,
												layer: t.div,
												page: t.page,
												viewport: t.viewport,
												linkService: t.linkService,
												downloadManager: t.downloadManager,
												imageResourcesPath: t.imageResourcesPath || "",
												renderInteractiveForms: t.renderInteractiveForms || !1,
												svgFactory: new o.DOMSVGFactory(),
											});
										v.isRenderable && t.div.appendChild(v.render());
									}
								},
							},
							{
								key: "update",
								value: function update(t) {
									var r,
										a = _createForOfIteratorHelper(t.annotations);
									try {
										for (a.s(); !(r = a.n()).done; ) {
											var o = r.value,
												i = t.div.querySelector('[data-annotation-id="'.concat(o.id, '"]'));
											i &&
												(i.style.transform = "matrix(".concat(
													t.viewport.transform.join(","),
													")"
												));
										}
									} catch (t) {
										a.e(t);
									} finally {
										a.f();
									}
									t.div.removeAttribute("hidden");
								},
							},
						]),
						AnnotationLayer
					);
				})();
			r.AnnotationLayer = W;
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.renderTextLayer = void 0);
			var o = a(5),
				i = (function renderTextLayerClosure() {
					var t = /\S/;
					function appendText(r, a, i) {
						var l = document.createElement("span"),
							u = {
								angle: 0,
								canvasWidth: 0,
								isWhitespace: !1,
								originalTransform: null,
								paddingBottom: 0,
								paddingLeft: 0,
								paddingRight: 0,
								paddingTop: 0,
								scale: 1,
							};
						if (
							(r._textDivs.push(l),
							(function isAllWhitespace(r) {
								return !t.test(r);
							})(a.str))
						)
							return (u.isWhitespace = !0), void r._textDivProperties.set(l, u);
						var c = o.Util.transform(r._viewport.transform, a.transform),
							d = Math.atan2(c[1], c[0]),
							h = i[a.fontName];
						h.vertical && (d += Math.PI / 2);
						var p,
							m,
							v = Math.sqrt(c[2] * c[2] + c[3] * c[3]),
							g = v;
						h.ascent ? (g = h.ascent * g) : h.descent && (g = (1 + h.descent) * g),
							0 === d
								? ((p = c[4]), (m = c[5] - g))
								: ((p = c[4] + g * Math.sin(d)), (m = c[5] - g * Math.cos(d))),
							(l.style.left = "".concat(p, "px")),
							(l.style.top = "".concat(m, "px")),
							(l.style.fontSize = "".concat(v, "px")),
							(l.style.fontFamily = h.fontFamily),
							(l.textContent = a.str),
							r._fontInspectorEnabled && (l.dataset.fontName = a.fontName),
							0 !== d && (u.angle = d * (180 / Math.PI));
						var y = !1;
						if (a.str.length > 1) y = !0;
						else if (a.transform[0] !== a.transform[3]) {
							var b = Math.abs(a.transform[0]),
								_ = Math.abs(a.transform[3]);
							b !== _ && Math.max(b, _) / Math.min(b, _) > 1.5 && (y = !0);
						}
						if (
							(y &&
								(h.vertical
									? (u.canvasWidth = a.height * r._viewport.scale)
									: (u.canvasWidth = a.width * r._viewport.scale)),
							r._textDivProperties.set(l, u),
							r._textContentStream && r._layoutText(l),
							r._enhanceTextSelection)
						) {
							var S = 1,
								A = 0;
							0 !== d && ((S = Math.cos(d)), (A = Math.sin(d)));
							var C,
								R,
								k = (h.vertical ? a.height : a.width) * r._viewport.scale,
								P = v;
							0 !== d
								? ((C = [S, A, -A, S, p, m]), (R = o.Util.getAxialAlignedBoundingBox([0, 0, k, P], C)))
								: (R = [p, m, p + k, m + P]),
								r._bounds.push({
									left: R[0],
									top: R[1],
									right: R[2],
									bottom: R[3],
									div: l,
									size: [k, P],
									m: C,
								});
						}
					}
					function render(t) {
						if (!t._canceled) {
							var r = t._textDivs,
								a = t._capability,
								o = r.length;
							if (o > 1e5) return (t._renderingDone = !0), void a.resolve();
							if (!t._textContentStream) for (var i = 0; i < o; i++) t._layoutText(r[i]);
							(t._renderingDone = !0), a.resolve();
						}
					}
					function findPositiveMin(t, r, a) {
						for (var o = 0, i = 0; i < a; i++) {
							var l = t[r++];
							l > 0 && (o = o ? Math.min(l, o) : l);
						}
						return o;
					}
					function expand(t) {
						for (
							var r = t._bounds,
								a = t._viewport,
								i = (function expandBounds(t, r, a) {
									var o = a.map(function (t, r) {
										return {
											x1: t.left,
											y1: t.top,
											x2: t.right,
											y2: t.bottom,
											index: r,
											x1New: void 0,
											x2New: void 0,
										};
									});
									expandBoundsLTR(t, o);
									var i = new Array(a.length);
									return (
										o.forEach(function (t) {
											var r = t.index;
											i[r] = { left: t.x1New, top: 0, right: t.x2New, bottom: 0 };
										}),
										a.map(function (r, a) {
											var l = i[a],
												u = o[a];
											(u.x1 = r.top),
												(u.y1 = t - l.right),
												(u.x2 = r.bottom),
												(u.y2 = t - l.left),
												(u.index = a),
												(u.x1New = void 0),
												(u.x2New = void 0);
										}),
										expandBoundsLTR(r, o),
										o.forEach(function (t) {
											var r = t.index;
											(i[r].top = t.x1New), (i[r].bottom = t.x2New);
										}),
										i
									);
								})(a.width, a.height, r),
								l = 0;
							l < i.length;
							l++
						) {
							var u = r[l].div,
								c = t._textDivProperties.get(u);
							if (0 !== c.angle) {
								var d = i[l],
									h = r[l],
									p = h.m,
									m = p[0],
									v = p[1],
									g = [[0, 0], [0, h.size[1]], [h.size[0], 0], h.size],
									y = new Float64Array(64);
								g.forEach(function (t, r) {
									var a = o.Util.applyTransform(t, p);
									(y[r + 0] = m && (d.left - a[0]) / m),
										(y[r + 4] = v && (d.top - a[1]) / v),
										(y[r + 8] = m && (d.right - a[0]) / m),
										(y[r + 12] = v && (d.bottom - a[1]) / v),
										(y[r + 16] = v && (d.left - a[0]) / -v),
										(y[r + 20] = m && (d.top - a[1]) / m),
										(y[r + 24] = v && (d.right - a[0]) / -v),
										(y[r + 28] = m && (d.bottom - a[1]) / m),
										(y[r + 32] = m && (d.left - a[0]) / -m),
										(y[r + 36] = v && (d.top - a[1]) / -v),
										(y[r + 40] = m && (d.right - a[0]) / -m),
										(y[r + 44] = v && (d.bottom - a[1]) / -v),
										(y[r + 48] = v && (d.left - a[0]) / v),
										(y[r + 52] = m && (d.top - a[1]) / -m),
										(y[r + 56] = v && (d.right - a[0]) / v),
										(y[r + 60] = m && (d.bottom - a[1]) / -m);
								});
								var b = 1 + Math.min(Math.abs(m), Math.abs(v));
								(c.paddingLeft = findPositiveMin(y, 32, 16) / b),
									(c.paddingTop = findPositiveMin(y, 48, 16) / b),
									(c.paddingRight = findPositiveMin(y, 0, 16) / b),
									(c.paddingBottom = findPositiveMin(y, 16, 16) / b),
									t._textDivProperties.set(u, c);
							} else
								(c.paddingLeft = r[l].left - i[l].left),
									(c.paddingTop = r[l].top - i[l].top),
									(c.paddingRight = i[l].right - r[l].right),
									(c.paddingBottom = i[l].bottom - r[l].bottom),
									t._textDivProperties.set(u, c);
						}
					}
					function expandBoundsLTR(t, r) {
						r.sort(function (t, r) {
							return t.x1 - r.x1 || t.index - r.index;
						});
						var a = [
							{
								start: -1 / 0,
								end: 1 / 0,
								boundary: { x1: -1 / 0, y1: -1 / 0, x2: 0, y2: 1 / 0, index: -1, x1New: 0, x2New: 0 },
							},
						];
						r.forEach(function (t) {
							for (var r = 0; r < a.length && a[r].end <= t.y1; ) r++;
							for (var o, i, l = a.length - 1; l >= 0 && a[l].start >= t.y2; ) l--;
							var u,
								c,
								d = -1 / 0;
							for (u = r; u <= l; u++) {
								var h;
								(h =
									(i = (o = a[u]).boundary).x2 > t.x1
										? i.index > t.index
											? i.x1New
											: t.x1
										: void 0 === i.x2New
										? (i.x2 + t.x1) / 2
										: i.x2New) > d && (d = h);
							}
							for (t.x1New = d, u = r; u <= l; u++)
								void 0 === (i = (o = a[u]).boundary).x2New
									? i.x2 > t.x1
										? i.index > t.index && (i.x2New = i.x2)
										: (i.x2New = d)
									: i.x2New > d && (i.x2New = Math.max(d, i.x2));
							var p = [],
								m = null;
							for (u = r; u <= l; u++) {
								var v = (i = (o = a[u]).boundary).x2 > t.x2 ? i : t;
								m === v
									? (p[p.length - 1].end = o.end)
									: (p.push({ start: o.start, end: o.end, boundary: v }), (m = v));
							}
							for (
								a[r].start < t.y1 &&
									((p[0].start = t.y1),
									p.unshift({ start: a[r].start, end: t.y1, boundary: a[r].boundary })),
									t.y2 < a[l].end &&
										((p[p.length - 1].end = t.y2),
										p.push({ start: t.y2, end: a[l].end, boundary: a[l].boundary })),
									u = r;
								u <= l;
								u++
							)
								if (void 0 === (i = (o = a[u]).boundary).x2New) {
									var g = !1;
									for (c = r - 1; !g && c >= 0 && a[c].start >= i.y1; c--) g = a[c].boundary === i;
									for (c = l + 1; !g && c < a.length && a[c].end <= i.y2; c++)
										g = a[c].boundary === i;
									for (c = 0; !g && c < p.length; c++) g = p[c].boundary === i;
									g || (i.x2New = d);
								}
							Array.prototype.splice.apply(a, [r, l - r + 1].concat(p));
						}),
							a.forEach(function (r) {
								var a = r.boundary;
								void 0 === a.x2New && (a.x2New = Math.max(t, a.x2));
							});
					}
					function TextLayerRenderTask(t) {
						var r = this,
							a = t.textContent,
							i = t.textContentStream,
							l = t.container,
							u = t.viewport,
							c = t.textDivs,
							d = t.textContentItemsStr,
							h = t.enhanceTextSelection;
						(this._textContent = a),
							(this._textContentStream = i),
							(this._container = l),
							(this._viewport = u),
							(this._textDivs = c || []),
							(this._textContentItemsStr = d || []),
							(this._enhanceTextSelection = !!h),
							(this._fontInspectorEnabled = !(
								!globalThis.FontInspector || !globalThis.FontInspector.enabled
							)),
							(this._reader = null),
							(this._layoutTextLastFontSize = null),
							(this._layoutTextLastFontFamily = null),
							(this._layoutTextCtx = null),
							(this._textDivProperties = new WeakMap()),
							(this._renderingDone = !1),
							(this._canceled = !1),
							(this._capability = (0, o.createPromiseCapability)()),
							(this._renderTimer = null),
							(this._bounds = []),
							this._capability.promise
								.finally(function () {
									r._layoutTextCtx &&
										((r._layoutTextCtx.canvas.width = 0),
										(r._layoutTextCtx.canvas.height = 0),
										(r._layoutTextCtx = null));
								})
								.catch(function () {});
					}
					return (
						(TextLayerRenderTask.prototype = {
							get promise() {
								return this._capability.promise;
							},
							cancel: function TextLayer_cancel() {
								(this._canceled = !0),
									this._reader &&
										(this._reader.cancel(new o.AbortException("TextLayer task cancelled.")),
										(this._reader = null)),
									null !== this._renderTimer &&
										(clearTimeout(this._renderTimer), (this._renderTimer = null)),
									this._capability.reject(new Error("TextLayer task cancelled."));
							},
							_processItems: function _processItems(t, r) {
								for (var a = 0, o = t.length; a < o; a++)
									this._textContentItemsStr.push(t[a].str), appendText(this, t[a], r);
							},
							_layoutText: function _layoutText(t) {
								var r = this._textDivProperties.get(t);
								if (!r.isWhitespace) {
									var a = "";
									if (0 !== r.canvasWidth) {
										var o = t.style,
											i = o.fontSize,
											l = o.fontFamily;
										(i === this._layoutTextLastFontSize && l === this._layoutTextLastFontFamily) ||
											((this._layoutTextCtx.font = "".concat(i, " ").concat(l)),
											(this._layoutTextLastFontSize = i),
											(this._layoutTextLastFontFamily = l));
										var u = this._layoutTextCtx.measureText(t.textContent).width;
										u > 0 && ((r.scale = r.canvasWidth / u), (a = "scaleX(".concat(r.scale, ")")));
									}
									0 !== r.angle && (a = "rotate(".concat(r.angle, "deg) ").concat(a)),
										a.length > 0 &&
											(this._enhanceTextSelection && (r.originalTransform = a),
											(t.style.transform = a)),
										this._textDivProperties.set(t, r),
										this._container.appendChild(t);
								}
							},
							_render: function TextLayer_render(t) {
								var r = this,
									a = (0, o.createPromiseCapability)(),
									i = Object.create(null),
									l = document.createElement("canvas");
								if (
									((l.mozOpaque = !0),
									(this._layoutTextCtx = l.getContext("2d", { alpha: !1, willReadFrequently: !0 })),
									this._textContent)
								) {
									var u = this._textContent.items,
										c = this._textContent.styles;
									this._processItems(u, c), a.resolve();
								} else {
									if (!this._textContentStream)
										throw new Error(
											'Neither "textContent" nor "textContentStream" parameters specified.'
										);
									(this._reader = this._textContentStream.getReader()),
										(function pump() {
											r._reader.read().then(function (t) {
												var o = t.value;
												t.done
													? a.resolve()
													: (Object.assign(i, o.styles), r._processItems(o.items, i), pump());
											}, a.reject);
										})();
								}
								a.promise.then(function () {
									(i = null),
										t
											? (r._renderTimer = setTimeout(function () {
													render(r), (r._renderTimer = null);
											  }, t))
											: render(r);
								}, this._capability.reject);
							},
							expandTextDivs: function TextLayer_expandTextDivs(t) {
								if (this._enhanceTextSelection && this._renderingDone) {
									null !== this._bounds && (expand(this), (this._bounds = null));
									for (var r = [], a = [], o = 0, i = this._textDivs.length; o < i; o++) {
										var l = this._textDivs[o],
											u = this._textDivProperties.get(l);
										u.isWhitespace ||
											(t
												? ((r.length = 0),
												  (a.length = 0),
												  u.originalTransform && r.push(u.originalTransform),
												  u.paddingTop > 0
														? (a.push("".concat(u.paddingTop, "px")),
														  r.push("translateY(".concat(-u.paddingTop, "px)")))
														: a.push(0),
												  u.paddingRight > 0
														? a.push("".concat(u.paddingRight / u.scale, "px"))
														: a.push(0),
												  u.paddingBottom > 0
														? a.push("".concat(u.paddingBottom, "px"))
														: a.push(0),
												  u.paddingLeft > 0
														? (a.push("".concat(u.paddingLeft / u.scale, "px")),
														  r.push("translateX(".concat(-u.paddingLeft / u.scale, "px)")))
														: a.push(0),
												  (l.style.padding = a.join(" ")),
												  r.length && (l.style.transform = r.join(" ")))
												: ((l.style.padding = null),
												  (l.style.transform = u.originalTransform)));
									}
								}
							},
						}),
						function renderTextLayer(t) {
							var r = new TextLayerRenderTask({
								textContent: t.textContent,
								textContentStream: t.textContentStream,
								container: t.container,
								viewport: t.viewport,
								textDivs: t.textDivs,
								textContentItemsStr: t.textContentItemsStr,
								enhanceTextSelection: t.enhanceTextSelection,
							});
							return r._render(t.timeout), r;
						}
					);
				})();
			r.renderTextLayer = i;
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.SVGGraphics = void 0);
			var o = a(5),
				i = a(1),
				l = a(7);
			function _toConsumableArray(t) {
				return (
					(function _arrayWithoutHoles(t) {
						if (Array.isArray(t)) return _arrayLikeToArray(t);
					})(t) ||
					(function _iterableToArray(t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
					})(t) ||
					_unsupportedIterableToArray(t) ||
					(function _nonIterableSpread() {
						throw new TypeError(
							"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function _slicedToArray(t, r) {
				return (
					(function _arrayWithHoles(t) {
						if (Array.isArray(t)) return t;
					})(t) ||
					(function _iterableToArrayLimit(t, r) {
						if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
						var a = [],
							o = !0,
							i = !1,
							l = void 0;
						try {
							for (
								var u, c = t[Symbol.iterator]();
								!(o = (u = c.next()).done) && (a.push(u.value), !r || a.length !== r);
								o = !0
							);
						} catch (t) {
							(i = !0), (l = t);
						} finally {
							try {
								o || null == c.return || c.return();
							} finally {
								if (i) throw l;
							}
						}
						return a;
					})(t, r) ||
					_unsupportedIterableToArray(t, r) ||
					(function _nonIterableRest() {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function _createForOfIteratorHelper(t, r) {
				var a;
				if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
					if (
						Array.isArray(t) ||
						(a = _unsupportedIterableToArray(t)) ||
						(r && t && "number" == typeof t.length)
					) {
						a && (t = a);
						var o = 0,
							i = function F() {};
						return {
							s: i,
							n: function n() {
								return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
							},
							e: function e(t) {
								throw t;
							},
							f: i,
						};
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					);
				}
				var l,
					u = !0,
					c = !1;
				return {
					s: function s() {
						a = t[Symbol.iterator]();
					},
					n: function n() {
						var t = a.next();
						return (u = t.done), t;
					},
					e: function e(t) {
						(c = !0), (l = t);
					},
					f: function f() {
						try {
							u || null == a.return || a.return();
						} finally {
							if (c) throw l;
						}
					},
				};
			}
			function _unsupportedIterableToArray(t, r) {
				if (t) {
					if ("string" == typeof t) return _arrayLikeToArray(t, r);
					var a = Object.prototype.toString.call(t).slice(8, -1);
					return (
						"Object" === a && t.constructor && (a = t.constructor.name),
						"Map" === a || "Set" === a
							? Array.from(t)
							: "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
							? _arrayLikeToArray(t, r)
							: void 0
					);
				}
			}
			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o;
			}
			function _classCallCheck(t, r) {
				if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _createClass(t, r, a) {
				return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
			}
			var u = function SVGGraphics() {
				throw new Error("Not implemented: SVGGraphics");
			};
			r.SVGGraphics = u;
			var c = function pf(t) {
					if (Number.isInteger(t)) return t.toString();
					var r = t.toFixed(10),
						a = r.length - 1;
					if ("0" !== r[a]) return r;
					do {
						a--;
					} while ("0" === r[a]);
					return r.substring(0, "." === r[a] ? a : a + 1);
				},
				d = function pm(t) {
					if (0 === t[4] && 0 === t[5]) {
						if (0 === t[1] && 0 === t[2])
							return 1 === t[0] && 1 === t[3] ? "" : "scale(".concat(c(t[0]), " ").concat(c(t[3]), ")");
						if (t[0] === t[3] && t[1] === -t[2]) {
							var r = (180 * Math.acos(t[0])) / Math.PI;
							return "rotate(".concat(c(r), ")");
						}
					} else if (1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3])
						return "translate(".concat(c(t[4]), " ").concat(c(t[5]), ")");
					return (
						"matrix("
							.concat(c(t[0]), " ")
							.concat(c(t[1]), " ")
							.concat(c(t[2]), " ")
							.concat(c(t[3]), " ")
							.concat(c(t[4]), " ") + "".concat(c(t[5]), ")")
					);
				},
				h = { fontStyle: "normal", fontWeight: "normal", fillColor: "#000000" },
				p = ["butt", "round", "square"],
				m = ["miter", "round", "bevel"],
				v = (function () {
					for (
						var t = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), r = new Int32Array(256), a = 0;
						a < 256;
						a++
					) {
						for (var i = a, u = 0; u < 8; u++)
							i = 1 & i ? 3988292384 ^ ((i >> 1) & 2147483647) : (i >> 1) & 2147483647;
						r[a] = i;
					}
					function writePngChunk(t, a, o, i) {
						var l = i,
							u = a.length;
						(o[l] = (u >> 24) & 255),
							(o[l + 1] = (u >> 16) & 255),
							(o[l + 2] = (u >> 8) & 255),
							(o[l + 3] = 255 & u),
							(o[(l += 4)] = 255 & t.charCodeAt(0)),
							(o[l + 1] = 255 & t.charCodeAt(1)),
							(o[l + 2] = 255 & t.charCodeAt(2)),
							(o[l + 3] = 255 & t.charCodeAt(3)),
							(l += 4),
							o.set(a, l);
						var c = (function crc32(t, a, o) {
							for (var i = -1, l = a; l < o; l++) {
								var u = 255 & (i ^ t[l]);
								i = (i >>> 8) ^ r[u];
							}
							return -1 ^ i;
						})(o, i + 4, (l += a.length));
						(o[l] = (c >> 24) & 255),
							(o[l + 1] = (c >> 16) & 255),
							(o[l + 2] = (c >> 8) & 255),
							(o[l + 3] = 255 & c);
					}
					function deflateSyncUncompressed(t) {
						var r = t.length,
							a = 65535,
							o = Math.ceil(r / a),
							i = new Uint8Array(2 + r + 5 * o + 4),
							l = 0;
						(i[l++] = 120), (i[l++] = 156);
						for (var u = 0; r > a; )
							(i[l++] = 0),
								(i[l++] = 255),
								(i[l++] = 255),
								(i[l++] = 0),
								(i[l++] = 0),
								i.set(t.subarray(u, u + a), l),
								(l += a),
								(u += a),
								(r -= a);
						(i[l++] = 1),
							(i[l++] = 255 & r),
							(i[l++] = (r >> 8) & 255),
							(i[l++] = 255 & ~r),
							(i[l++] = ((65535 & ~r) >> 8) & 255),
							i.set(t.subarray(u), l),
							(l += t.length - u);
						var c = (function adler32(t, r, a) {
							for (var o = 1, i = 0, l = r; l < a; ++l)
								i = (i + (o = (o + (255 & t[l])) % 65521)) % 65521;
							return (i << 16) | o;
						})(t, 0, t.length);
						return (
							(i[l++] = (c >> 24) & 255),
							(i[l++] = (c >> 16) & 255),
							(i[l++] = (c >> 8) & 255),
							(i[l++] = 255 & c),
							i
						);
					}
					function encode(r, a, i, u) {
						var c,
							d,
							h,
							p = r.width,
							m = r.height,
							v = r.data;
						switch (a) {
							case o.ImageKind.GRAYSCALE_1BPP:
								(d = 0), (c = 1), (h = (p + 7) >> 3);
								break;
							case o.ImageKind.RGB_24BPP:
								(d = 2), (c = 8), (h = 3 * p);
								break;
							case o.ImageKind.RGBA_32BPP:
								(d = 6), (c = 8), (h = 4 * p);
								break;
							default:
								throw new Error("invalid format");
						}
						for (var g = new Uint8Array((1 + h) * m), y = 0, b = 0, _ = 0; _ < m; ++_)
							(g[y++] = 0), g.set(v.subarray(b, b + h), y), (b += h), (y += h);
						if (a === o.ImageKind.GRAYSCALE_1BPP && u) {
							y = 0;
							for (var S = 0; S < m; S++) {
								y++;
								for (var A = 0; A < h; A++) g[y++] ^= 255;
							}
						}
						var C = new Uint8Array([
								(p >> 24) & 255,
								(p >> 16) & 255,
								(p >> 8) & 255,
								255 & p,
								(m >> 24) & 255,
								(m >> 16) & 255,
								(m >> 8) & 255,
								255 & m,
								c,
								d,
								0,
								0,
								0,
							]),
							R = (function deflateSync(t) {
								if (!l.isNodeJS) return deflateSyncUncompressed(t);
								try {
									var r;
									r = parseInt(process.versions.node) >= 8 ? t : Buffer.from(t);
									var a = require("zlib").deflateSync(r, { level: 9 });
									return a instanceof Uint8Array ? a : new Uint8Array(a);
								} catch (t) {
									(0, o.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + t);
								}
								return deflateSyncUncompressed(t);
							})(g),
							k = t.length + 36 + C.length + R.length,
							P = new Uint8Array(k),
							w = 0;
						return (
							P.set(t, w),
							writePngChunk("IHDR", C, P, (w += t.length)),
							writePngChunk("IDATA", R, P, (w += 12 + C.length)),
							(w += 12 + R.length),
							writePngChunk("IEND", new Uint8Array(0), P, w),
							(0, o.createObjectURL)(P, "image/png", i)
						);
					}
					return function convertImgDataToPng(t, r, a) {
						return encode(t, void 0 === t.kind ? o.ImageKind.GRAYSCALE_1BPP : t.kind, r, a);
					};
				})(),
				g = (function () {
					function SVGExtraState() {
						_classCallCheck(this, SVGExtraState),
							(this.fontSizeScale = 1),
							(this.fontWeight = h.fontWeight),
							(this.fontSize = 0),
							(this.textMatrix = o.IDENTITY_MATRIX),
							(this.fontMatrix = o.FONT_IDENTITY_MATRIX),
							(this.leading = 0),
							(this.textRenderingMode = o.TextRenderingMode.FILL),
							(this.textMatrixScale = 1),
							(this.x = 0),
							(this.y = 0),
							(this.lineX = 0),
							(this.lineY = 0),
							(this.charSpacing = 0),
							(this.wordSpacing = 0),
							(this.textHScale = 1),
							(this.textRise = 0),
							(this.fillColor = h.fillColor),
							(this.strokeColor = "#000000"),
							(this.fillAlpha = 1),
							(this.strokeAlpha = 1),
							(this.lineWidth = 1),
							(this.lineJoin = ""),
							(this.lineCap = ""),
							(this.miterLimit = 0),
							(this.dashArray = []),
							(this.dashPhase = 0),
							(this.dependencies = []),
							(this.activeClipUrl = null),
							(this.clipGroup = null),
							(this.maskId = "");
					}
					return (
						_createClass(SVGExtraState, [
							{
								key: "clone",
								value: function clone() {
									return Object.create(this);
								},
							},
							{
								key: "setCurrentPoint",
								value: function setCurrentPoint(t, r) {
									(this.x = t), (this.y = r);
								},
							},
						]),
						SVGExtraState
					);
				})(),
				y = 0,
				b = 0,
				_ = 0;
			r.SVGGraphics = u = (function () {
				function SVGGraphics(t, r) {
					var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					for (var l in (_classCallCheck(this, SVGGraphics),
					(this.svgFactory = new i.DOMSVGFactory()),
					(this.current = new g()),
					(this.transformMatrix = o.IDENTITY_MATRIX),
					(this.transformStack = []),
					(this.extraStack = []),
					(this.commonObjs = t),
					(this.objs = r),
					(this.pendingClip = null),
					(this.pendingEOFill = !1),
					(this.embedFonts = !1),
					(this.embeddedFonts = Object.create(null)),
					(this.cssStyle = null),
					(this.forceDataSchema = !!a),
					(this._operatorIdMapping = []),
					o.OPS))
						this._operatorIdMapping[o.OPS[l]] = l;
				}
				return (
					_createClass(SVGGraphics, [
						{
							key: "save",
							value: function save() {
								this.transformStack.push(this.transformMatrix);
								var t = this.current;
								this.extraStack.push(t), (this.current = t.clone());
							},
						},
						{
							key: "restore",
							value: function restore() {
								(this.transformMatrix = this.transformStack.pop()),
									(this.current = this.extraStack.pop()),
									(this.pendingClip = null),
									(this.tgrp = null);
							},
						},
						{
							key: "group",
							value: function group(t) {
								this.save(), this.executeOpTree(t), this.restore();
							},
						},
						{
							key: "loadDependencies",
							value: function loadDependencies(t) {
								for (var r = this, a = t.fnArray, i = t.argsArray, l = 0, u = a.length; l < u; l++)
									if (a[l] === o.OPS.dependency) {
										var c,
											d = _createForOfIteratorHelper(i[l]);
										try {
											var h = function _loop() {
												var t = c.value,
													a = t.startsWith("g_") ? r.commonObjs : r.objs,
													o = new Promise(function (r) {
														a.get(t, r);
													});
												r.current.dependencies.push(o);
											};
											for (d.s(); !(c = d.n()).done; ) h();
										} catch (t) {
											d.e(t);
										} finally {
											d.f();
										}
									}
								return Promise.all(this.current.dependencies);
							},
						},
						{
							key: "transform",
							value: function transform(t, r, a, i, l, u) {
								var c = [t, r, a, i, l, u];
								(this.transformMatrix = o.Util.transform(this.transformMatrix, c)), (this.tgrp = null);
							},
						},
						{
							key: "getSVG",
							value: function getSVG(t, r) {
								var a = this;
								this.viewport = r;
								var i = this._initialize(r);
								return this.loadDependencies(t).then(function () {
									return (
										(a.transformMatrix = o.IDENTITY_MATRIX), a.executeOpTree(a.convertOpList(t)), i
									);
								});
							},
						},
						{
							key: "convertOpList",
							value: function convertOpList(t) {
								for (
									var r = this._operatorIdMapping,
										a = t.argsArray,
										o = t.fnArray,
										i = [],
										l = 0,
										u = o.length;
									l < u;
									l++
								) {
									var c = o[l];
									i.push({ fnId: c, fn: r[c], args: a[l] });
								}
								return (function opListToTree(t) {
									var r,
										a = [],
										o = [],
										i = _createForOfIteratorHelper(t);
									try {
										for (i.s(); !(r = i.n()).done; ) {
											var l = r.value;
											"save" !== l.fn
												? "restore" === l.fn
													? (a = o.pop())
													: a.push(l)
												: (a.push({ fnId: 92, fn: "group", items: [] }),
												  o.push(a),
												  (a = a[a.length - 1].items));
										}
									} catch (t) {
										i.e(t);
									} finally {
										i.f();
									}
									return a;
								})(i);
							},
						},
						{
							key: "executeOpTree",
							value: function executeOpTree(t) {
								var r,
									a = _createForOfIteratorHelper(t);
								try {
									for (a.s(); !(r = a.n()).done; ) {
										var i = r.value,
											l = i.fn,
											u = i.fnId,
											c = i.args;
										switch (0 | u) {
											case o.OPS.beginText:
												this.beginText();
												break;
											case o.OPS.dependency:
												break;
											case o.OPS.setLeading:
												this.setLeading(c);
												break;
											case o.OPS.setLeadingMoveText:
												this.setLeadingMoveText(c[0], c[1]);
												break;
											case o.OPS.setFont:
												this.setFont(c);
												break;
											case o.OPS.showText:
											case o.OPS.showSpacedText:
												this.showText(c[0]);
												break;
											case o.OPS.endText:
												this.endText();
												break;
											case o.OPS.moveText:
												this.moveText(c[0], c[1]);
												break;
											case o.OPS.setCharSpacing:
												this.setCharSpacing(c[0]);
												break;
											case o.OPS.setWordSpacing:
												this.setWordSpacing(c[0]);
												break;
											case o.OPS.setHScale:
												this.setHScale(c[0]);
												break;
											case o.OPS.setTextMatrix:
												this.setTextMatrix(c[0], c[1], c[2], c[3], c[4], c[5]);
												break;
											case o.OPS.setTextRise:
												this.setTextRise(c[0]);
												break;
											case o.OPS.setTextRenderingMode:
												this.setTextRenderingMode(c[0]);
												break;
											case o.OPS.setLineWidth:
												this.setLineWidth(c[0]);
												break;
											case o.OPS.setLineJoin:
												this.setLineJoin(c[0]);
												break;
											case o.OPS.setLineCap:
												this.setLineCap(c[0]);
												break;
											case o.OPS.setMiterLimit:
												this.setMiterLimit(c[0]);
												break;
											case o.OPS.setFillRGBColor:
												this.setFillRGBColor(c[0], c[1], c[2]);
												break;
											case o.OPS.setStrokeRGBColor:
												this.setStrokeRGBColor(c[0], c[1], c[2]);
												break;
											case o.OPS.setStrokeColorN:
												this.setStrokeColorN(c);
												break;
											case o.OPS.setFillColorN:
												this.setFillColorN(c);
												break;
											case o.OPS.shadingFill:
												this.shadingFill(c[0]);
												break;
											case o.OPS.setDash:
												this.setDash(c[0], c[1]);
												break;
											case o.OPS.setRenderingIntent:
												this.setRenderingIntent(c[0]);
												break;
											case o.OPS.setFlatness:
												this.setFlatness(c[0]);
												break;
											case o.OPS.setGState:
												this.setGState(c[0]);
												break;
											case o.OPS.fill:
												this.fill();
												break;
											case o.OPS.eoFill:
												this.eoFill();
												break;
											case o.OPS.stroke:
												this.stroke();
												break;
											case o.OPS.fillStroke:
												this.fillStroke();
												break;
											case o.OPS.eoFillStroke:
												this.eoFillStroke();
												break;
											case o.OPS.clip:
												this.clip("nonzero");
												break;
											case o.OPS.eoClip:
												this.clip("evenodd");
												break;
											case o.OPS.paintSolidColorImageMask:
												this.paintSolidColorImageMask();
												break;
											case o.OPS.paintImageXObject:
												this.paintImageXObject(c[0]);
												break;
											case o.OPS.paintInlineImageXObject:
												this.paintInlineImageXObject(c[0]);
												break;
											case o.OPS.paintImageMaskXObject:
												this.paintImageMaskXObject(c[0]);
												break;
											case o.OPS.paintFormXObjectBegin:
												this.paintFormXObjectBegin(c[0], c[1]);
												break;
											case o.OPS.paintFormXObjectEnd:
												this.paintFormXObjectEnd();
												break;
											case o.OPS.closePath:
												this.closePath();
												break;
											case o.OPS.closeStroke:
												this.closeStroke();
												break;
											case o.OPS.closeFillStroke:
												this.closeFillStroke();
												break;
											case o.OPS.closeEOFillStroke:
												this.closeEOFillStroke();
												break;
											case o.OPS.nextLine:
												this.nextLine();
												break;
											case o.OPS.transform:
												this.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
												break;
											case o.OPS.constructPath:
												this.constructPath(c[0], c[1]);
												break;
											case o.OPS.endPath:
												this.endPath();
												break;
											case 92:
												this.group(i.items);
												break;
											default:
												(0, o.warn)("Unimplemented operator ".concat(l));
										}
									}
								} catch (t) {
									a.e(t);
								} finally {
									a.f();
								}
							},
						},
						{
							key: "setWordSpacing",
							value: function setWordSpacing(t) {
								this.current.wordSpacing = t;
							},
						},
						{
							key: "setCharSpacing",
							value: function setCharSpacing(t) {
								this.current.charSpacing = t;
							},
						},
						{
							key: "nextLine",
							value: function nextLine() {
								this.moveText(0, this.current.leading);
							},
						},
						{
							key: "setTextMatrix",
							value: function setTextMatrix(t, r, a, o, i, l) {
								var u = this.current;
								(u.textMatrix = u.lineMatrix = [t, r, a, o, i, l]),
									(u.textMatrixScale = Math.sqrt(t * t + r * r)),
									(u.x = u.lineX = 0),
									(u.y = u.lineY = 0),
									(u.xcoords = []),
									(u.ycoords = []),
									(u.tspan = this.svgFactory.createElement("svg:tspan")),
									u.tspan.setAttributeNS(null, "font-family", u.fontFamily),
									u.tspan.setAttributeNS(null, "font-size", "".concat(c(u.fontSize), "px")),
									u.tspan.setAttributeNS(null, "y", c(-u.y)),
									(u.txtElement = this.svgFactory.createElement("svg:text")),
									u.txtElement.appendChild(u.tspan);
							},
						},
						{
							key: "beginText",
							value: function beginText() {
								var t = this.current;
								(t.x = t.lineX = 0),
									(t.y = t.lineY = 0),
									(t.textMatrix = o.IDENTITY_MATRIX),
									(t.lineMatrix = o.IDENTITY_MATRIX),
									(t.textMatrixScale = 1),
									(t.tspan = this.svgFactory.createElement("svg:tspan")),
									(t.txtElement = this.svgFactory.createElement("svg:text")),
									(t.txtgrp = this.svgFactory.createElement("svg:g")),
									(t.xcoords = []),
									(t.ycoords = []);
							},
						},
						{
							key: "moveText",
							value: function moveText(t, r) {
								var a = this.current;
								(a.x = a.lineX += t),
									(a.y = a.lineY += r),
									(a.xcoords = []),
									(a.ycoords = []),
									(a.tspan = this.svgFactory.createElement("svg:tspan")),
									a.tspan.setAttributeNS(null, "font-family", a.fontFamily),
									a.tspan.setAttributeNS(null, "font-size", "".concat(c(a.fontSize), "px")),
									a.tspan.setAttributeNS(null, "y", c(-a.y));
							},
						},
						{
							key: "showText",
							value: function showText(t) {
								var r = this.current,
									a = r.font,
									i = r.fontSize;
								if (0 !== i) {
									var l,
										u = r.fontSizeScale,
										p = r.charSpacing,
										m = r.wordSpacing,
										v = r.fontDirection,
										g = r.textHScale * v,
										y = a.vertical,
										b = y ? 1 : -1,
										_ = a.defaultVMetrics,
										S = i * r.fontMatrix[0],
										A = 0,
										C = _createForOfIteratorHelper(t);
									try {
										for (C.s(); !(l = C.n()).done; ) {
											var R = l.value;
											if (null !== R)
												if ((0, o.isNum)(R)) A += (b * R * i) / 1e3;
												else {
													var k = (R.isSpace ? m : 0) + p,
														P = R.fontChar,
														w = void 0,
														x = void 0,
														T = R.width;
													if (y) {
														var E = void 0,
															O = R.vmetric || _;
														E = -(E = R.vmetric ? O[1] : 0.5 * T) * S;
														var I = O[2] * S;
														(T = O ? -O[0] : T), (w = E / u), (x = (A + I) / u);
													} else (w = A / u), (x = 0);
													(R.isInFont || a.missingFile) &&
														(r.xcoords.push(r.x + w),
														y && r.ycoords.push(-r.y + x),
														(r.tspan.textContent += P));
													A += y ? T * S - k * v : T * S + k * v;
												}
											else A += v * m;
										}
									} catch (t) {
										C.e(t);
									} finally {
										C.f();
									}
									r.tspan.setAttributeNS(null, "x", r.xcoords.map(c).join(" ")),
										y
											? r.tspan.setAttributeNS(null, "y", r.ycoords.map(c).join(" "))
											: r.tspan.setAttributeNS(null, "y", c(-r.y)),
										y ? (r.y -= A) : (r.x += A * g),
										r.tspan.setAttributeNS(null, "font-family", r.fontFamily),
										r.tspan.setAttributeNS(null, "font-size", "".concat(c(r.fontSize), "px")),
										r.fontStyle !== h.fontStyle &&
											r.tspan.setAttributeNS(null, "font-style", r.fontStyle),
										r.fontWeight !== h.fontWeight &&
											r.tspan.setAttributeNS(null, "font-weight", r.fontWeight);
									var D = r.textRenderingMode & o.TextRenderingMode.FILL_STROKE_MASK;
									if (
										(D === o.TextRenderingMode.FILL || D === o.TextRenderingMode.FILL_STROKE
											? (r.fillColor !== h.fillColor &&
													r.tspan.setAttributeNS(null, "fill", r.fillColor),
											  r.fillAlpha < 1 &&
													r.tspan.setAttributeNS(null, "fill-opacity", r.fillAlpha))
											: r.textRenderingMode === o.TextRenderingMode.ADD_TO_PATH
											? r.tspan.setAttributeNS(null, "fill", "transparent")
											: r.tspan.setAttributeNS(null, "fill", "none"),
										D === o.TextRenderingMode.STROKE || D === o.TextRenderingMode.FILL_STROKE)
									) {
										var L = 1 / (r.textMatrixScale || 1);
										this._setStrokeAttributes(r.tspan, L);
									}
									var W = r.textMatrix;
									0 !== r.textRise && ((W = W.slice())[5] += r.textRise),
										r.txtElement.setAttributeNS(
											null,
											"transform",
											"".concat(d(W), " scale(").concat(c(g), ", -1)")
										),
										r.txtElement.setAttributeNS(
											"http://www.w3.org/XML/1998/namespace",
											"xml:space",
											"preserve"
										),
										r.txtElement.appendChild(r.tspan),
										r.txtgrp.appendChild(r.txtElement),
										this._ensureTransformGroup().appendChild(r.txtElement);
								}
							},
						},
						{
							key: "setLeadingMoveText",
							value: function setLeadingMoveText(t, r) {
								this.setLeading(-r), this.moveText(t, r);
							},
						},
						{
							key: "addFontStyle",
							value: function addFontStyle(t) {
								if (!t.data)
									throw new Error(
										'addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.'
									);
								this.cssStyle ||
									((this.cssStyle = this.svgFactory.createElement("svg:style")),
									this.cssStyle.setAttributeNS(null, "type", "text/css"),
									this.defs.appendChild(this.cssStyle));
								var r = (0, o.createObjectURL)(t.data, t.mimetype, this.forceDataSchema);
								this.cssStyle.textContent +=
									'@font-face { font-family: "'.concat(t.loadedName, '";') +
									" src: url(".concat(r, "); }\n");
							},
						},
						{
							key: "setFont",
							value: function setFont(t) {
								var r = this.current,
									a = this.commonObjs.get(t[0]),
									i = t[1];
								(r.font = a),
									!this.embedFonts ||
										a.missingFile ||
										this.embeddedFonts[a.loadedName] ||
										(this.addFontStyle(a), (this.embeddedFonts[a.loadedName] = a)),
									(r.fontMatrix = a.fontMatrix ? a.fontMatrix : o.FONT_IDENTITY_MATRIX);
								var l = "normal";
								a.black ? (l = "900") : a.bold && (l = "bold");
								var u = a.italic ? "italic" : "normal";
								i < 0 ? ((i = -i), (r.fontDirection = -1)) : (r.fontDirection = 1),
									(r.fontSize = i),
									(r.fontFamily = a.loadedName),
									(r.fontWeight = l),
									(r.fontStyle = u),
									(r.tspan = this.svgFactory.createElement("svg:tspan")),
									r.tspan.setAttributeNS(null, "y", c(-r.y)),
									(r.xcoords = []),
									(r.ycoords = []);
							},
						},
						{
							key: "endText",
							value: function endText() {
								var t = this.current;
								t.textRenderingMode & o.TextRenderingMode.ADD_TO_PATH_FLAG &&
									t.txtElement &&
									t.txtElement.hasChildNodes() &&
									((t.element = t.txtElement), this.clip("nonzero"), this.endPath());
							},
						},
						{
							key: "setLineWidth",
							value: function setLineWidth(t) {
								t > 0 && (this.current.lineWidth = t);
							},
						},
						{
							key: "setLineCap",
							value: function setLineCap(t) {
								this.current.lineCap = p[t];
							},
						},
						{
							key: "setLineJoin",
							value: function setLineJoin(t) {
								this.current.lineJoin = m[t];
							},
						},
						{
							key: "setMiterLimit",
							value: function setMiterLimit(t) {
								this.current.miterLimit = t;
							},
						},
						{
							key: "setStrokeAlpha",
							value: function setStrokeAlpha(t) {
								this.current.strokeAlpha = t;
							},
						},
						{
							key: "setStrokeRGBColor",
							value: function setStrokeRGBColor(t, r, a) {
								this.current.strokeColor = o.Util.makeCssRgb(t, r, a);
							},
						},
						{
							key: "setFillAlpha",
							value: function setFillAlpha(t) {
								this.current.fillAlpha = t;
							},
						},
						{
							key: "setFillRGBColor",
							value: function setFillRGBColor(t, r, a) {
								(this.current.fillColor = o.Util.makeCssRgb(t, r, a)),
									(this.current.tspan = this.svgFactory.createElement("svg:tspan")),
									(this.current.xcoords = []),
									(this.current.ycoords = []);
							},
						},
						{
							key: "setStrokeColorN",
							value: function setStrokeColorN(t) {
								this.current.strokeColor = this._makeColorN_Pattern(t);
							},
						},
						{
							key: "setFillColorN",
							value: function setFillColorN(t) {
								this.current.fillColor = this._makeColorN_Pattern(t);
							},
						},
						{
							key: "shadingFill",
							value: function shadingFill(t) {
								var r = this.viewport.width,
									a = this.viewport.height,
									i = o.Util.inverseTransform(this.transformMatrix),
									l = o.Util.applyTransform([0, 0], i),
									u = o.Util.applyTransform([0, a], i),
									c = o.Util.applyTransform([r, 0], i),
									d = o.Util.applyTransform([r, a], i),
									h = Math.min(l[0], u[0], c[0], d[0]),
									p = Math.min(l[1], u[1], c[1], d[1]),
									m = Math.max(l[0], u[0], c[0], d[0]),
									v = Math.max(l[1], u[1], c[1], d[1]),
									g = this.svgFactory.createElement("svg:rect");
								g.setAttributeNS(null, "x", h),
									g.setAttributeNS(null, "y", p),
									g.setAttributeNS(null, "width", m - h),
									g.setAttributeNS(null, "height", v - p),
									g.setAttributeNS(null, "fill", this._makeShadingPattern(t)),
									this.current.fillAlpha < 1 &&
										g.setAttributeNS(null, "fill-opacity", this.current.fillAlpha),
									this._ensureTransformGroup().appendChild(g);
							},
						},
						{
							key: "_makeColorN_Pattern",
							value: function _makeColorN_Pattern(t) {
								return "TilingPattern" === t[0]
									? this._makeTilingPattern(t)
									: this._makeShadingPattern(t);
							},
						},
						{
							key: "_makeTilingPattern",
							value: function _makeTilingPattern(t) {
								var r = t[1],
									a = t[2],
									i = t[3] || o.IDENTITY_MATRIX,
									l = _slicedToArray(t[4], 4),
									u = l[0],
									c = l[1],
									d = l[2],
									h = l[3],
									p = t[5],
									m = t[6],
									v = t[7],
									g = "shading".concat(_++),
									y = _slicedToArray(o.Util.applyTransform([u, c], i), 2),
									b = y[0],
									S = y[1],
									A = _slicedToArray(o.Util.applyTransform([d, h], i), 2),
									C = A[0],
									R = A[1],
									k = _slicedToArray(o.Util.singularValueDecompose2dScale(i), 2),
									P = p * k[0],
									w = m * k[1],
									x = this.svgFactory.createElement("svg:pattern");
								x.setAttributeNS(null, "id", g),
									x.setAttributeNS(null, "patternUnits", "userSpaceOnUse"),
									x.setAttributeNS(null, "width", P),
									x.setAttributeNS(null, "height", w),
									x.setAttributeNS(null, "x", "".concat(b)),
									x.setAttributeNS(null, "y", "".concat(S));
								var T = this.svg,
									E = this.transformMatrix,
									O = this.current.fillColor,
									I = this.current.strokeColor,
									D = this.svgFactory.create(C - b, R - S);
								if (((this.svg = D), (this.transformMatrix = i), 2 === v)) {
									var L = o.Util.makeCssRgb.apply(o.Util, _toConsumableArray(r));
									(this.current.fillColor = L), (this.current.strokeColor = L);
								}
								return (
									this.executeOpTree(this.convertOpList(a)),
									(this.svg = T),
									(this.transformMatrix = E),
									(this.current.fillColor = O),
									(this.current.strokeColor = I),
									x.appendChild(D.childNodes[0]),
									this.defs.appendChild(x),
									"url(#".concat(g, ")")
								);
							},
						},
						{
							key: "_makeShadingPattern",
							value: function _makeShadingPattern(t) {
								switch (t[0]) {
									case "RadialAxial":
										var r,
											a = "shading".concat(_++),
											i = t[3];
										switch (t[1]) {
											case "axial":
												var l = t[4],
													u = t[5];
												(r =
													this.svgFactory.createElement("svg:linearGradient")).setAttributeNS(
													null,
													"id",
													a
												),
													r.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"),
													r.setAttributeNS(null, "x1", l[0]),
													r.setAttributeNS(null, "y1", l[1]),
													r.setAttributeNS(null, "x2", u[0]),
													r.setAttributeNS(null, "y2", u[1]);
												break;
											case "radial":
												var c = t[4],
													d = t[5],
													h = t[6],
													p = t[7];
												(r =
													this.svgFactory.createElement("svg:radialGradient")).setAttributeNS(
													null,
													"id",
													a
												),
													r.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"),
													r.setAttributeNS(null, "cx", d[0]),
													r.setAttributeNS(null, "cy", d[1]),
													r.setAttributeNS(null, "r", p),
													r.setAttributeNS(null, "fx", c[0]),
													r.setAttributeNS(null, "fy", c[1]),
													r.setAttributeNS(null, "fr", h);
												break;
											default:
												throw new Error("Unknown RadialAxial type: ".concat(t[1]));
										}
										var m,
											v = _createForOfIteratorHelper(i);
										try {
											for (v.s(); !(m = v.n()).done; ) {
												var g = m.value,
													y = this.svgFactory.createElement("svg:stop");
												y.setAttributeNS(null, "offset", g[0]),
													y.setAttributeNS(null, "stop-color", g[1]),
													r.appendChild(y);
											}
										} catch (t) {
											v.e(t);
										} finally {
											v.f();
										}
										return this.defs.appendChild(r), "url(#".concat(a, ")");
									case "Mesh":
										return (0, o.warn)("Unimplemented pattern Mesh"), null;
									case "Dummy":
										return "hotpink";
									default:
										throw new Error("Unknown IR type: ".concat(t[0]));
								}
							},
						},
						{
							key: "setDash",
							value: function setDash(t, r) {
								(this.current.dashArray = t), (this.current.dashPhase = r);
							},
						},
						{
							key: "constructPath",
							value: function constructPath(t, r) {
								var a,
									i = this.current,
									l = i.x,
									u = i.y,
									d = [],
									h = 0,
									p = _createForOfIteratorHelper(t);
								try {
									for (p.s(); !(a = p.n()).done; ) {
										switch (0 | a.value) {
											case o.OPS.rectangle:
												(l = r[h++]), (u = r[h++]);
												var m = r[h++],
													v = r[h++],
													g = l + m,
													y = u + v;
												d.push(
													"M",
													c(l),
													c(u),
													"L",
													c(g),
													c(u),
													"L",
													c(g),
													c(y),
													"L",
													c(l),
													c(y),
													"Z"
												);
												break;
											case o.OPS.moveTo:
												(l = r[h++]), (u = r[h++]), d.push("M", c(l), c(u));
												break;
											case o.OPS.lineTo:
												(l = r[h++]), (u = r[h++]), d.push("L", c(l), c(u));
												break;
											case o.OPS.curveTo:
												(l = r[h + 4]),
													(u = r[h + 5]),
													d.push(
														"C",
														c(r[h]),
														c(r[h + 1]),
														c(r[h + 2]),
														c(r[h + 3]),
														c(l),
														c(u)
													),
													(h += 6);
												break;
											case o.OPS.curveTo2:
												d.push("C", c(l), c(u), c(r[h]), c(r[h + 1]), c(r[h + 2]), c(r[h + 3])),
													(l = r[h + 2]),
													(u = r[h + 3]),
													(h += 4);
												break;
											case o.OPS.curveTo3:
												(l = r[h + 2]),
													(u = r[h + 3]),
													d.push("C", c(r[h]), c(r[h + 1]), c(l), c(u), c(l), c(u)),
													(h += 4);
												break;
											case o.OPS.closePath:
												d.push("Z");
										}
									}
								} catch (t) {
									p.e(t);
								} finally {
									p.f();
								}
								(d = d.join(" ")),
									i.path && t.length > 0 && t[0] !== o.OPS.rectangle && t[0] !== o.OPS.moveTo
										? (d = i.path.getAttributeNS(null, "d") + d)
										: ((i.path = this.svgFactory.createElement("svg:path")),
										  this._ensureTransformGroup().appendChild(i.path)),
									i.path.setAttributeNS(null, "d", d),
									i.path.setAttributeNS(null, "fill", "none"),
									(i.element = i.path),
									i.setCurrentPoint(l, u);
							},
						},
						{
							key: "endPath",
							value: function endPath() {
								var t = this.current;
								if (((t.path = null), this.pendingClip))
									if (t.element) {
										var r = "clippath".concat(y++),
											a = this.svgFactory.createElement("svg:clipPath");
										a.setAttributeNS(null, "id", r),
											a.setAttributeNS(null, "transform", d(this.transformMatrix));
										var o = t.element.cloneNode(!0);
										"evenodd" === this.pendingClip
											? o.setAttributeNS(null, "clip-rule", "evenodd")
											: o.setAttributeNS(null, "clip-rule", "nonzero"),
											(this.pendingClip = null),
											a.appendChild(o),
											this.defs.appendChild(a),
											t.activeClipUrl &&
												((t.clipGroup = null),
												this.extraStack.forEach(function (t) {
													t.clipGroup = null;
												}),
												a.setAttributeNS(null, "clip-path", t.activeClipUrl)),
											(t.activeClipUrl = "url(#".concat(r, ")")),
											(this.tgrp = null);
									} else this.pendingClip = null;
							},
						},
						{
							key: "clip",
							value: function clip(t) {
								this.pendingClip = t;
							},
						},
						{
							key: "closePath",
							value: function closePath() {
								var t = this.current;
								if (t.path) {
									var r = "".concat(t.path.getAttributeNS(null, "d"), "Z");
									t.path.setAttributeNS(null, "d", r);
								}
							},
						},
						{
							key: "setLeading",
							value: function setLeading(t) {
								this.current.leading = -t;
							},
						},
						{
							key: "setTextRise",
							value: function setTextRise(t) {
								this.current.textRise = t;
							},
						},
						{
							key: "setTextRenderingMode",
							value: function setTextRenderingMode(t) {
								this.current.textRenderingMode = t;
							},
						},
						{
							key: "setHScale",
							value: function setHScale(t) {
								this.current.textHScale = t / 100;
							},
						},
						{ key: "setRenderingIntent", value: function setRenderingIntent(t) {} },
						{ key: "setFlatness", value: function setFlatness(t) {} },
						{
							key: "setGState",
							value: function setGState(t) {
								var r,
									a = _createForOfIteratorHelper(t);
								try {
									for (a.s(); !(r = a.n()).done; ) {
										var i = _slicedToArray(r.value, 2),
											l = i[0],
											u = i[1];
										switch (l) {
											case "LW":
												this.setLineWidth(u);
												break;
											case "LC":
												this.setLineCap(u);
												break;
											case "LJ":
												this.setLineJoin(u);
												break;
											case "ML":
												this.setMiterLimit(u);
												break;
											case "D":
												this.setDash(u[0], u[1]);
												break;
											case "RI":
												this.setRenderingIntent(u);
												break;
											case "FL":
												this.setFlatness(u);
												break;
											case "Font":
												this.setFont(u);
												break;
											case "CA":
												this.setStrokeAlpha(u);
												break;
											case "ca":
												this.setFillAlpha(u);
												break;
											default:
												(0, o.warn)("Unimplemented graphic state operator ".concat(l));
										}
									}
								} catch (t) {
									a.e(t);
								} finally {
									a.f();
								}
							},
						},
						{
							key: "fill",
							value: function fill() {
								var t = this.current;
								t.element &&
									(t.element.setAttributeNS(null, "fill", t.fillColor),
									t.element.setAttributeNS(null, "fill-opacity", t.fillAlpha),
									this.endPath());
							},
						},
						{
							key: "stroke",
							value: function stroke() {
								var t = this.current;
								t.element &&
									(this._setStrokeAttributes(t.element),
									t.element.setAttributeNS(null, "fill", "none"),
									this.endPath());
							},
						},
						{
							key: "_setStrokeAttributes",
							value: function _setStrokeAttributes(t) {
								var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
									a = this.current,
									o = a.dashArray;
								1 !== r &&
									o.length > 0 &&
									(o = o.map(function (t) {
										return r * t;
									})),
									t.setAttributeNS(null, "stroke", a.strokeColor),
									t.setAttributeNS(null, "stroke-opacity", a.strokeAlpha),
									t.setAttributeNS(null, "stroke-miterlimit", c(a.miterLimit)),
									t.setAttributeNS(null, "stroke-linecap", a.lineCap),
									t.setAttributeNS(null, "stroke-linejoin", a.lineJoin),
									t.setAttributeNS(null, "stroke-width", c(r * a.lineWidth) + "px"),
									t.setAttributeNS(null, "stroke-dasharray", o.map(c).join(" ")),
									t.setAttributeNS(null, "stroke-dashoffset", c(r * a.dashPhase) + "px");
							},
						},
						{
							key: "eoFill",
							value: function eoFill() {
								this.current.element &&
									this.current.element.setAttributeNS(null, "fill-rule", "evenodd"),
									this.fill();
							},
						},
						{
							key: "fillStroke",
							value: function fillStroke() {
								this.stroke(), this.fill();
							},
						},
						{
							key: "eoFillStroke",
							value: function eoFillStroke() {
								this.current.element &&
									this.current.element.setAttributeNS(null, "fill-rule", "evenodd"),
									this.fillStroke();
							},
						},
						{
							key: "closeStroke",
							value: function closeStroke() {
								this.closePath(), this.stroke();
							},
						},
						{
							key: "closeFillStroke",
							value: function closeFillStroke() {
								this.closePath(), this.fillStroke();
							},
						},
						{
							key: "closeEOFillStroke",
							value: function closeEOFillStroke() {
								this.closePath(), this.eoFillStroke();
							},
						},
						{
							key: "paintSolidColorImageMask",
							value: function paintSolidColorImageMask() {
								var t = this.svgFactory.createElement("svg:rect");
								t.setAttributeNS(null, "x", "0"),
									t.setAttributeNS(null, "y", "0"),
									t.setAttributeNS(null, "width", "1px"),
									t.setAttributeNS(null, "height", "1px"),
									t.setAttributeNS(null, "fill", this.current.fillColor),
									this._ensureTransformGroup().appendChild(t);
							},
						},
						{
							key: "paintImageXObject",
							value: function paintImageXObject(t) {
								var r = this.objs.get(t);
								r
									? this.paintInlineImageXObject(r)
									: (0, o.warn)("Dependent image with object ID ".concat(t, " is not ready yet"));
							},
						},
						{
							key: "paintInlineImageXObject",
							value: function paintInlineImageXObject(t, r) {
								var a = t.width,
									o = t.height,
									i = v(t, this.forceDataSchema, !!r),
									l = this.svgFactory.createElement("svg:rect");
								l.setAttributeNS(null, "x", "0"),
									l.setAttributeNS(null, "y", "0"),
									l.setAttributeNS(null, "width", c(a)),
									l.setAttributeNS(null, "height", c(o)),
									(this.current.element = l),
									this.clip("nonzero");
								var u = this.svgFactory.createElement("svg:image");
								u.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i),
									u.setAttributeNS(null, "x", "0"),
									u.setAttributeNS(null, "y", c(-o)),
									u.setAttributeNS(null, "width", c(a) + "px"),
									u.setAttributeNS(null, "height", c(o) + "px"),
									u.setAttributeNS(
										null,
										"transform",
										"scale(".concat(c(1 / a), " ").concat(c(-1 / o), ")")
									),
									r ? r.appendChild(u) : this._ensureTransformGroup().appendChild(u);
							},
						},
						{
							key: "paintImageMaskXObject",
							value: function paintImageMaskXObject(t) {
								var r = this.current,
									a = t.width,
									o = t.height,
									i = r.fillColor;
								r.maskId = "mask".concat(b++);
								var l = this.svgFactory.createElement("svg:mask");
								l.setAttributeNS(null, "id", r.maskId);
								var u = this.svgFactory.createElement("svg:rect");
								u.setAttributeNS(null, "x", "0"),
									u.setAttributeNS(null, "y", "0"),
									u.setAttributeNS(null, "width", c(a)),
									u.setAttributeNS(null, "height", c(o)),
									u.setAttributeNS(null, "fill", i),
									u.setAttributeNS(null, "mask", "url(#".concat(r.maskId, ")")),
									this.defs.appendChild(l),
									this._ensureTransformGroup().appendChild(u),
									this.paintInlineImageXObject(t, l);
							},
						},
						{
							key: "paintFormXObjectBegin",
							value: function paintFormXObjectBegin(t, r) {
								if (
									(Array.isArray(t) &&
										6 === t.length &&
										this.transform(t[0], t[1], t[2], t[3], t[4], t[5]),
									r)
								) {
									var a = r[2] - r[0],
										o = r[3] - r[1],
										i = this.svgFactory.createElement("svg:rect");
									i.setAttributeNS(null, "x", r[0]),
										i.setAttributeNS(null, "y", r[1]),
										i.setAttributeNS(null, "width", c(a)),
										i.setAttributeNS(null, "height", c(o)),
										(this.current.element = i),
										this.clip("nonzero"),
										this.endPath();
								}
							},
						},
						{ key: "paintFormXObjectEnd", value: function paintFormXObjectEnd() {} },
						{
							key: "_initialize",
							value: function _initialize(t) {
								var r = this.svgFactory.create(t.width, t.height),
									a = this.svgFactory.createElement("svg:defs");
								r.appendChild(a), (this.defs = a);
								var o = this.svgFactory.createElement("svg:g");
								return (
									o.setAttributeNS(null, "transform", d(t.transform)),
									r.appendChild(o),
									(this.svg = o),
									r
								);
							},
						},
						{
							key: "_ensureClipGroup",
							value: function _ensureClipGroup() {
								if (!this.current.clipGroup) {
									var t = this.svgFactory.createElement("svg:g");
									t.setAttributeNS(null, "clip-path", this.current.activeClipUrl),
										this.svg.appendChild(t),
										(this.current.clipGroup = t);
								}
								return this.current.clipGroup;
							},
						},
						{
							key: "_ensureTransformGroup",
							value: function _ensureTransformGroup() {
								return (
									this.tgrp ||
										((this.tgrp = this.svgFactory.createElement("svg:g")),
										this.tgrp.setAttributeNS(null, "transform", d(this.transformMatrix)),
										this.current.activeClipUrl
											? this._ensureClipGroup().appendChild(this.tgrp)
											: this.svg.appendChild(this.tgrp)),
									this.tgrp
								);
							},
						},
					]),
					SVGGraphics
				);
			})();
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.PDFNodeStream = void 0);
			var o = (function _interopRequireDefault(t) {
					return t && t.__esModule ? t : { default: t };
				})(a(2)),
				i = a(5),
				l = a(213);
			function _typeof(t) {
				return (_typeof =
					"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
						? function _typeof(t) {
								return typeof t;
						  }
						: function _typeof(t) {
								return t &&
									"function" == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  })(t);
			}
			function _inherits(t, r) {
				if ("function" != typeof r && null !== r)
					throw new TypeError("Super expression must either be null or a function");
				(t.prototype = Object.create(r && r.prototype, {
					constructor: { value: t, writable: !0, configurable: !0 },
				})),
					r && _setPrototypeOf(t, r);
			}
			function _setPrototypeOf(t, r) {
				return (_setPrototypeOf =
					Object.setPrototypeOf ||
					function _setPrototypeOf(t, r) {
						return (t.__proto__ = r), t;
					})(t, r);
			}
			function _createSuper(t) {
				var r = (function _isNativeReflectConstruct() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
					} catch (t) {
						return !1;
					}
				})();
				return function _createSuperInternal() {
					var a,
						o = _getPrototypeOf(t);
					if (r) {
						var i = _getPrototypeOf(this).constructor;
						a = Reflect.construct(o, arguments, i);
					} else a = o.apply(this, arguments);
					return _possibleConstructorReturn(this, a);
				};
			}
			function _possibleConstructorReturn(t, r) {
				return !r || ("object" !== _typeof(r) && "function" != typeof r)
					? (function _assertThisInitialized(t) {
							if (void 0 === t)
								throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return t;
					  })(t)
					: r;
			}
			function _getPrototypeOf(t) {
				return (_getPrototypeOf = Object.setPrototypeOf
					? Object.getPrototypeOf
					: function _getPrototypeOf(t) {
							return t.__proto__ || Object.getPrototypeOf(t);
					  })(t);
			}
			function asyncGeneratorStep(t, r, a, o, i, l, u) {
				try {
					var c = t[l](u),
						d = c.value;
				} catch (t) {
					return void a(t);
				}
				c.done ? r(d) : Promise.resolve(d).then(o, i);
			}
			function _asyncToGenerator(t) {
				return function () {
					var r = this,
						a = arguments;
					return new Promise(function (o, i) {
						var l = t.apply(r, a);
						function _next(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "next", t);
						}
						function _throw(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "throw", t);
						}
						_next(void 0);
					});
				};
			}
			function _classCallCheck(t, r) {
				if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _createClass(t, r, a) {
				return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
			}
			var u = require("fs"),
				c = require("http"),
				d = require("https"),
				h = require("url"),
				p = /^file:\/\/\/[a-zA-Z]:\//;
			var m = (function () {
				function PDFNodeStream(t) {
					_classCallCheck(this, PDFNodeStream),
						(this.source = t),
						(this.url = (function parseUrl(t) {
							var r = h.parse(t);
							return "file:" === r.protocol || r.host
								? r
								: /^[a-z]:[/\\]/i.test(t)
								? h.parse("file:///".concat(t))
								: (r.host || (r.protocol = "file:"), r);
						})(t.url)),
						(this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol),
						(this.isFsUrl = "file:" === this.url.protocol),
						(this.httpHeaders = (this.isHttp && t.httpHeaders) || {}),
						(this._fullRequestReader = null),
						(this._rangeRequestReaders = []);
				}
				return (
					_createClass(PDFNodeStream, [
						{
							key: "getFullReader",
							value: function getFullReader() {
								return (
									(0, i.assert)(
										!this._fullRequestReader,
										"PDFNodeStream.getFullReader can only be called once."
									),
									(this._fullRequestReader = this.isFsUrl ? new _(this) : new y(this)),
									this._fullRequestReader
								);
							},
						},
						{
							key: "getRangeReader",
							value: function getRangeReader(t, r) {
								if (r <= this._progressiveDataLength) return null;
								var a = this.isFsUrl ? new S(this, t, r) : new b(this, t, r);
								return this._rangeRequestReaders.push(a), a;
							},
						},
						{
							key: "cancelAllRequests",
							value: function cancelAllRequests(t) {
								this._fullRequestReader && this._fullRequestReader.cancel(t),
									this._rangeRequestReaders.slice(0).forEach(function (r) {
										r.cancel(t);
									});
							},
						},
						{
							key: "_progressiveDataLength",
							get: function get() {
								return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
							},
						},
					]),
					PDFNodeStream
				);
			})();
			r.PDFNodeStream = m;
			var v = (function () {
					function BaseFullReader(t) {
						_classCallCheck(this, BaseFullReader),
							(this._url = t.url),
							(this._done = !1),
							(this._storedError = null),
							(this.onProgress = null);
						var r = t.source;
						(this._contentLength = r.length),
							(this._loaded = 0),
							(this._filename = null),
							(this._disableRange = r.disableRange || !1),
							(this._rangeChunkSize = r.rangeChunkSize),
							this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
							(this._isStreamingSupported = !r.disableStream),
							(this._isRangeSupported = !r.disableRange),
							(this._readableStream = null),
							(this._readCapability = (0, i.createPromiseCapability)()),
							(this._headersCapability = (0, i.createPromiseCapability)());
					}
					var t;
					return (
						_createClass(BaseFullReader, [
							{
								key: "read",
								value:
									((t = _asyncToGenerator(
										o.default.mark(function _callee() {
											var t, r;
											return o.default.wrap(
												function _callee$(a) {
													for (;;)
														switch ((a.prev = a.next)) {
															case 0:
																return (a.next = 2), this._readCapability.promise;
															case 2:
																if (!this._done) {
																	a.next = 4;
																	break;
																}
																return a.abrupt("return", { value: void 0, done: !0 });
															case 4:
																if (!this._storedError) {
																	a.next = 6;
																	break;
																}
																throw this._storedError;
															case 6:
																if (null !== (t = this._readableStream.read())) {
																	a.next = 10;
																	break;
																}
																return (
																	(this._readCapability = (0,
																	i.createPromiseCapability)()),
																	a.abrupt("return", this.read())
																);
															case 10:
																return (
																	(this._loaded += t.length),
																	this.onProgress &&
																		this.onProgress({
																			loaded: this._loaded,
																			total: this._contentLength,
																		}),
																	(r = new Uint8Array(t).buffer),
																	a.abrupt("return", { value: r, done: !1 })
																);
															case 14:
															case "end":
																return a.stop();
														}
												},
												_callee,
												this
											);
										})
									)),
									function read() {
										return t.apply(this, arguments);
									}),
							},
							{
								key: "cancel",
								value: function cancel(t) {
									this._readableStream ? this._readableStream.destroy(t) : this._error(t);
								},
							},
							{
								key: "_error",
								value: function _error(t) {
									(this._storedError = t), this._readCapability.resolve();
								},
							},
							{
								key: "_setReadableStream",
								value: function _setReadableStream(t) {
									var r = this;
									(this._readableStream = t),
										t.on("readable", function () {
											r._readCapability.resolve();
										}),
										t.on("end", function () {
											t.destroy(), (r._done = !0), r._readCapability.resolve();
										}),
										t.on("error", function (t) {
											r._error(t);
										}),
										!this._isStreamingSupported &&
											this._isRangeSupported &&
											this._error(new i.AbortException("streaming is disabled")),
										this._storedError && this._readableStream.destroy(this._storedError);
								},
							},
							{
								key: "headersReady",
								get: function get() {
									return this._headersCapability.promise;
								},
							},
							{
								key: "filename",
								get: function get() {
									return this._filename;
								},
							},
							{
								key: "contentLength",
								get: function get() {
									return this._contentLength;
								},
							},
							{
								key: "isRangeSupported",
								get: function get() {
									return this._isRangeSupported;
								},
							},
							{
								key: "isStreamingSupported",
								get: function get() {
									return this._isStreamingSupported;
								},
							},
						]),
						BaseFullReader
					);
				})(),
				g = (function () {
					function BaseRangeReader(t) {
						_classCallCheck(this, BaseRangeReader),
							(this._url = t.url),
							(this._done = !1),
							(this._storedError = null),
							(this.onProgress = null),
							(this._loaded = 0),
							(this._readableStream = null),
							(this._readCapability = (0, i.createPromiseCapability)());
						var r = t.source;
						this._isStreamingSupported = !r.disableStream;
					}
					var t;
					return (
						_createClass(BaseRangeReader, [
							{
								key: "read",
								value:
									((t = _asyncToGenerator(
										o.default.mark(function _callee2() {
											var t, r;
											return o.default.wrap(
												function _callee2$(a) {
													for (;;)
														switch ((a.prev = a.next)) {
															case 0:
																return (a.next = 2), this._readCapability.promise;
															case 2:
																if (!this._done) {
																	a.next = 4;
																	break;
																}
																return a.abrupt("return", { value: void 0, done: !0 });
															case 4:
																if (!this._storedError) {
																	a.next = 6;
																	break;
																}
																throw this._storedError;
															case 6:
																if (null !== (t = this._readableStream.read())) {
																	a.next = 10;
																	break;
																}
																return (
																	(this._readCapability = (0,
																	i.createPromiseCapability)()),
																	a.abrupt("return", this.read())
																);
															case 10:
																return (
																	(this._loaded += t.length),
																	this.onProgress &&
																		this.onProgress({ loaded: this._loaded }),
																	(r = new Uint8Array(t).buffer),
																	a.abrupt("return", { value: r, done: !1 })
																);
															case 14:
															case "end":
																return a.stop();
														}
												},
												_callee2,
												this
											);
										})
									)),
									function read() {
										return t.apply(this, arguments);
									}),
							},
							{
								key: "cancel",
								value: function cancel(t) {
									this._readableStream ? this._readableStream.destroy(t) : this._error(t);
								},
							},
							{
								key: "_error",
								value: function _error(t) {
									(this._storedError = t), this._readCapability.resolve();
								},
							},
							{
								key: "_setReadableStream",
								value: function _setReadableStream(t) {
									var r = this;
									(this._readableStream = t),
										t.on("readable", function () {
											r._readCapability.resolve();
										}),
										t.on("end", function () {
											t.destroy(), (r._done = !0), r._readCapability.resolve();
										}),
										t.on("error", function (t) {
											r._error(t);
										}),
										this._storedError && this._readableStream.destroy(this._storedError);
								},
							},
							{
								key: "isStreamingSupported",
								get: function get() {
									return this._isStreamingSupported;
								},
							},
						]),
						BaseRangeReader
					);
				})();
			function createRequestOptions(t, r) {
				return {
					protocol: t.protocol,
					auth: t.auth,
					host: t.hostname,
					port: t.port,
					path: t.path,
					method: "GET",
					headers: r,
				};
			}
			var y = (function (t) {
					_inherits(PDFNodeStreamFullReader, t);
					var r = _createSuper(PDFNodeStreamFullReader);
					function PDFNodeStreamFullReader(t) {
						var a;
						_classCallCheck(this, PDFNodeStreamFullReader);
						var o = function handleResponse(r) {
							if (404 === r.statusCode) {
								var o = new i.MissingPDFException('Missing PDF "'.concat(a._url, '".'));
								return (a._storedError = o), void a._headersCapability.reject(o);
							}
							a._headersCapability.resolve(), a._setReadableStream(r);
							var u = function getResponseHeader(t) {
									return a._readableStream.headers[t.toLowerCase()];
								},
								c = (0, l.validateRangeRequestCapabilities)({
									getResponseHeader: u,
									isHttp: t.isHttp,
									rangeChunkSize: a._rangeChunkSize,
									disableRange: a._disableRange,
								}),
								d = c.allowRangeRequests,
								h = c.suggestedLength;
							(a._isRangeSupported = d),
								(a._contentLength = h || a._contentLength),
								(a._filename = (0, l.extractFilenameFromHeader)(u));
						};
						return (
							((a = r.call(this, t))._request = null),
							"http:" === a._url.protocol
								? (a._request = c.request(createRequestOptions(a._url, t.httpHeaders), o))
								: (a._request = d.request(createRequestOptions(a._url, t.httpHeaders), o)),
							a._request.on("error", function (t) {
								(a._storedError = t), a._headersCapability.reject(t);
							}),
							a._request.end(),
							a
						);
					}
					return PDFNodeStreamFullReader;
				})(v),
				b = (function (t) {
					_inherits(PDFNodeStreamRangeReader, t);
					var r = _createSuper(PDFNodeStreamRangeReader);
					function PDFNodeStreamRangeReader(t, a, o) {
						var l;
						for (var u in (_classCallCheck(this, PDFNodeStreamRangeReader),
						((l = r.call(this, t))._httpHeaders = {}),
						t.httpHeaders)) {
							var h = t.httpHeaders[u];
							void 0 !== h && (l._httpHeaders[u] = h);
						}
						l._httpHeaders.Range = "bytes=".concat(a, "-").concat(o - 1);
						var p = function handleResponse(t) {
							if (404 !== t.statusCode) l._setReadableStream(t);
							else {
								var r = new i.MissingPDFException('Missing PDF "'.concat(l._url, '".'));
								l._storedError = r;
							}
						};
						return (
							(l._request = null),
							"http:" === l._url.protocol
								? (l._request = c.request(createRequestOptions(l._url, l._httpHeaders), p))
								: (l._request = d.request(createRequestOptions(l._url, l._httpHeaders), p)),
							l._request.on("error", function (t) {
								l._storedError = t;
							}),
							l._request.end(),
							l
						);
					}
					return PDFNodeStreamRangeReader;
				})(g),
				_ = (function (t) {
					_inherits(PDFNodeStreamFsFullReader, t);
					var r = _createSuper(PDFNodeStreamFsFullReader);
					function PDFNodeStreamFsFullReader(t) {
						var a;
						_classCallCheck(this, PDFNodeStreamFsFullReader), (a = r.call(this, t));
						var o = decodeURIComponent(a._url.path);
						return (
							p.test(a._url.href) && (o = o.replace(/^\//, "")),
							u.lstat(o, function (t, r) {
								if (t)
									return (
										"ENOENT" === t.code &&
											(t = new i.MissingPDFException('Missing PDF "'.concat(o, '".'))),
										(a._storedError = t),
										void a._headersCapability.reject(t)
									);
								(a._contentLength = r.size),
									a._setReadableStream(u.createReadStream(o)),
									a._headersCapability.resolve();
							}),
							a
						);
					}
					return PDFNodeStreamFsFullReader;
				})(v),
				S = (function (t) {
					_inherits(PDFNodeStreamFsRangeReader, t);
					var r = _createSuper(PDFNodeStreamFsRangeReader);
					function PDFNodeStreamFsRangeReader(t, a, o) {
						var i;
						_classCallCheck(this, PDFNodeStreamFsRangeReader), (i = r.call(this, t));
						var l = decodeURIComponent(i._url.path);
						return (
							p.test(i._url.href) && (l = l.replace(/^\//, "")),
							i._setReadableStream(u.createReadStream(l, { start: a, end: o - 1 })),
							i
						);
					}
					return PDFNodeStreamFsRangeReader;
				})(g);
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }),
				(r.createResponseStatusError = function createResponseStatusError(t, r) {
					if (404 === t || (0 === t && r.startsWith("file:")))
						return new o.MissingPDFException('Missing PDF "' + r + '".');
					return new o.UnexpectedResponseException(
						"Unexpected server response (" + t + ') while retrieving PDF "' + r + '".',
						t
					);
				}),
				(r.extractFilenameFromHeader = function extractFilenameFromHeader(t) {
					var r = t("Content-Disposition");
					if (r) {
						var a = (0, i.getFilenameFromContentDispositionHeader)(r);
						if (a.includes("%"))
							try {
								a = decodeURIComponent(a);
							} catch (t) {}
						if (/\.pdf$/i.test(a)) return a;
					}
					return null;
				}),
				(r.validateRangeRequestCapabilities = function validateRangeRequestCapabilities(t) {
					var r = t.getResponseHeader,
						a = t.isHttp,
						i = t.rangeChunkSize,
						l = t.disableRange;
					(0, o.assert)(i > 0, "Range chunk size must be larger than zero");
					var u = { allowRangeRequests: !1, suggestedLength: void 0 },
						c = parseInt(r("Content-Length"), 10);
					if (!Number.isInteger(c)) return u;
					if (((u.suggestedLength = c), c <= 2 * i)) return u;
					if (l || !a) return u;
					if ("bytes" !== r("Accept-Ranges")) return u;
					if ("identity" !== (r("Content-Encoding") || "identity")) return u;
					return (u.allowRangeRequests = !0), u;
				}),
				(r.validateResponseStatus = function validateResponseStatus(t) {
					return 200 === t || 206 === t;
				});
			var o = a(5),
				i = a(214);
		},
		function (t, r, a) {
			"use strict";
			function _slicedToArray(t, r) {
				return (
					(function _arrayWithHoles(t) {
						if (Array.isArray(t)) return t;
					})(t) ||
					(function _iterableToArrayLimit(t, r) {
						if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
						var a = [],
							o = !0,
							i = !1,
							l = void 0;
						try {
							for (
								var u, c = t[Symbol.iterator]();
								!(o = (u = c.next()).done) && (a.push(u.value), !r || a.length !== r);
								o = !0
							);
						} catch (t) {
							(i = !0), (l = t);
						} finally {
							try {
								o || null == c.return || c.return();
							} finally {
								if (i) throw l;
							}
						}
						return a;
					})(t, r) ||
					(function _unsupportedIterableToArray(t, r) {
						if (!t) return;
						if ("string" == typeof t) return _arrayLikeToArray(t, r);
						var a = Object.prototype.toString.call(t).slice(8, -1);
						"Object" === a && t.constructor && (a = t.constructor.name);
						if ("Map" === a || "Set" === a) return Array.from(t);
						if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
							return _arrayLikeToArray(t, r);
					})(t, r) ||
					(function _nonIterableRest() {
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						);
					})()
				);
			}
			function _arrayLikeToArray(t, r) {
				(null == r || r > t.length) && (r = t.length);
				for (var a = 0, o = new Array(r); a < r; a++) o[a] = t[a];
				return o;
			}
			Object.defineProperty(r, "__esModule", { value: !0 }),
				(r.getFilenameFromContentDispositionHeader = function getFilenameFromContentDispositionHeader(t) {
					var r = !0,
						a = toParamRegExp("filename\\*", "i").exec(t);
					if (a) {
						var o = rfc2616unquote((a = a[1]));
						return fixupEncoding((o = rfc2047decode((o = rfc5987decode((o = unescape(o)))))));
					}
					if (
						(a = (function rfc2231getparam(t) {
							var r,
								a = [],
								o = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
							for (; null !== (r = o.exec(t)); ) {
								var i = _slicedToArray(r, 4),
									l = i[1],
									u = i[2],
									c = i[3];
								if ((l = parseInt(l, 10)) in a) {
									if (0 === l) break;
								} else a[l] = [u, c];
							}
							for (var d = [], h = 0; h < a.length && h in a; ++h) {
								var p = _slicedToArray(a[h], 2),
									m = p[0],
									v = p[1];
								(v = rfc2616unquote(v)),
									m && ((v = unescape(v)), 0 === h && (v = rfc5987decode(v))),
									d.push(v);
							}
							return d.join("");
						})(t))
					) {
						return fixupEncoding(rfc2047decode(a));
					}
					if ((a = toParamRegExp("filename", "i").exec(t))) {
						var i = rfc2616unquote((a = a[1]));
						return fixupEncoding((i = rfc2047decode(i)));
					}
					function toParamRegExp(t, r) {
						return new RegExp("(?:^|;)\\s*" + t + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', r);
					}
					function textdecode(t, a) {
						if (t) {
							if (!/^[\x00-\xFF]+$/.test(a)) return a;
							try {
								var o = new TextDecoder(t, { fatal: !0 }),
									i = Array.from(a, function (t) {
										return 255 & t.charCodeAt(0);
									});
								(a = o.decode(new Uint8Array(i))), (r = !1);
							} catch (o) {
								if (/^utf-?8$/i.test(t))
									try {
										(a = decodeURIComponent(escape(a))), (r = !1);
									} catch (t) {}
							}
						}
						return a;
					}
					function fixupEncoding(t) {
						return (
							r &&
								/[\x80-\xff]/.test(t) &&
								((t = textdecode("utf-8", t)), r && (t = textdecode("iso-8859-1", t))),
							t
						);
					}
					function rfc2616unquote(t) {
						if (t.startsWith('"')) {
							for (var r = t.slice(1).split('\\"'), a = 0; a < r.length; ++a) {
								var o = r[a].indexOf('"');
								-1 !== o && ((r[a] = r[a].slice(0, o)), (r.length = a + 1)),
									(r[a] = r[a].replace(/\\(.)/g, "$1"));
							}
							t = r.join('"');
						}
						return t;
					}
					function rfc5987decode(t) {
						var r = t.indexOf("'");
						return -1 === r ? t : textdecode(t.slice(0, r), t.slice(r + 1).replace(/^[^']*'/, ""));
					}
					function rfc2047decode(t) {
						return !t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t)
							? t
							: t.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function (t, r, a, o) {
									if ("q" === a || "Q" === a)
										return textdecode(
											r,
											(o = (o = o.replace(/_/g, " ")).replace(
												/=([0-9a-fA-F]{2})/g,
												function (t, r) {
													return String.fromCharCode(parseInt(r, 16));
												}
											))
										);
									try {
										o = atob(o);
									} catch (t) {}
									return textdecode(r, o);
							  });
					}
					return "";
				});
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.PDFNetworkStream = void 0);
			var o = (function _interopRequireDefault(t) {
					return t && t.__esModule ? t : { default: t };
				})(a(2)),
				i = a(5),
				l = a(213);
			function asyncGeneratorStep(t, r, a, o, i, l, u) {
				try {
					var c = t[l](u),
						d = c.value;
				} catch (t) {
					return void a(t);
				}
				c.done ? r(d) : Promise.resolve(d).then(o, i);
			}
			function _asyncToGenerator(t) {
				return function () {
					var r = this,
						a = arguments;
					return new Promise(function (o, i) {
						var l = t.apply(r, a);
						function _next(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "next", t);
						}
						function _throw(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "throw", t);
						}
						_next(void 0);
					});
				};
			}
			function _classCallCheck(t, r) {
				if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _createClass(t, r, a) {
				return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
			}
			var u = (function () {
					function NetworkManager(t, r) {
						_classCallCheck(this, NetworkManager),
							(this.url = t),
							(r = r || {}),
							(this.isHttp = /^https?:/i.test(t)),
							(this.httpHeaders = (this.isHttp && r.httpHeaders) || {}),
							(this.withCredentials = r.withCredentials || !1),
							(this.getXhr =
								r.getXhr ||
								function NetworkManager_getXhr() {
									return new XMLHttpRequest();
								}),
							(this.currXhrId = 0),
							(this.pendingRequests = Object.create(null));
					}
					return (
						_createClass(NetworkManager, [
							{
								key: "requestRange",
								value: function requestRange(t, r, a) {
									var o = { begin: t, end: r };
									for (var i in a) o[i] = a[i];
									return this.request(o);
								},
							},
							{
								key: "requestFull",
								value: function requestFull(t) {
									return this.request(t);
								},
							},
							{
								key: "request",
								value: function request(t) {
									var r = this.getXhr(),
										a = this.currXhrId++,
										o = (this.pendingRequests[a] = { xhr: r });
									for (var i in (r.open("GET", this.url),
									(r.withCredentials = this.withCredentials),
									this.httpHeaders)) {
										var l = this.httpHeaders[i];
										void 0 !== l && r.setRequestHeader(i, l);
									}
									return (
										this.isHttp && "begin" in t && "end" in t
											? (r.setRequestHeader(
													"Range",
													"bytes=".concat(t.begin, "-").concat(t.end - 1)
											  ),
											  (o.expectedStatus = 206))
											: (o.expectedStatus = 200),
										(r.responseType = "arraybuffer"),
										t.onError &&
											(r.onerror = function (a) {
												t.onError(r.status);
											}),
										(r.onreadystatechange = this.onStateChange.bind(this, a)),
										(r.onprogress = this.onProgress.bind(this, a)),
										(o.onHeadersReceived = t.onHeadersReceived),
										(o.onDone = t.onDone),
										(o.onError = t.onError),
										(o.onProgress = t.onProgress),
										r.send(null),
										a
									);
								},
							},
							{
								key: "onProgress",
								value: function onProgress(t, r) {
									var a = this.pendingRequests[t];
									a && a.onProgress && a.onProgress(r);
								},
							},
							{
								key: "onStateChange",
								value: function onStateChange(t, r) {
									var a = this.pendingRequests[t];
									if (a) {
										var o = a.xhr;
										if (
											(o.readyState >= 2 &&
												a.onHeadersReceived &&
												(a.onHeadersReceived(), delete a.onHeadersReceived),
											4 === o.readyState && t in this.pendingRequests)
										)
											if ((delete this.pendingRequests[t], 0 === o.status && this.isHttp))
												a.onError && a.onError(o.status);
											else {
												var l = o.status || 200;
												if ((200 === l && 206 === a.expectedStatus) || l === a.expectedStatus) {
													var u = (function getArrayBuffer(t) {
														var r = t.response;
														return "string" != typeof r
															? r
															: (0, i.stringToBytes)(r).buffer;
													})(o);
													if (206 === l) {
														var c = o.getResponseHeader("Content-Range"),
															d = /bytes (\d+)-(\d+)\/(\d+)/.exec(c);
														a.onDone({ begin: parseInt(d[1], 10), chunk: u });
													} else
														u
															? a.onDone({ begin: 0, chunk: u })
															: a.onError && a.onError(o.status);
												} else a.onError && a.onError(o.status);
											}
									}
								},
							},
							{
								key: "hasPendingRequests",
								value: function hasPendingRequests() {
									for (var t in this.pendingRequests) return !0;
									return !1;
								},
							},
							{
								key: "getRequestXhr",
								value: function getRequestXhr(t) {
									return this.pendingRequests[t].xhr;
								},
							},
							{
								key: "isPendingRequest",
								value: function isPendingRequest(t) {
									return t in this.pendingRequests;
								},
							},
							{
								key: "abortAllRequests",
								value: function abortAllRequests() {
									for (var t in this.pendingRequests) this.abortRequest(0 | t);
								},
							},
							{
								key: "abortRequest",
								value: function abortRequest(t) {
									var r = this.pendingRequests[t].xhr;
									delete this.pendingRequests[t], r.abort();
								},
							},
						]),
						NetworkManager
					);
				})(),
				c = (function () {
					function PDFNetworkStream(t) {
						_classCallCheck(this, PDFNetworkStream),
							(this._source = t),
							(this._manager = new u(t.url, {
								httpHeaders: t.httpHeaders,
								withCredentials: t.withCredentials,
							})),
							(this._rangeChunkSize = t.rangeChunkSize),
							(this._fullRequestReader = null),
							(this._rangeRequestReaders = []);
					}
					return (
						_createClass(PDFNetworkStream, [
							{
								key: "_onRangeRequestReaderClosed",
								value: function _onRangeRequestReaderClosed(t) {
									var r = this._rangeRequestReaders.indexOf(t);
									r >= 0 && this._rangeRequestReaders.splice(r, 1);
								},
							},
							{
								key: "getFullReader",
								value: function getFullReader() {
									return (
										(0, i.assert)(
											!this._fullRequestReader,
											"PDFNetworkStream.getFullReader can only be called once."
										),
										(this._fullRequestReader = new d(this._manager, this._source)),
										this._fullRequestReader
									);
								},
							},
							{
								key: "getRangeReader",
								value: function getRangeReader(t, r) {
									var a = new h(this._manager, t, r);
									return (
										(a.onClosed = this._onRangeRequestReaderClosed.bind(this)),
										this._rangeRequestReaders.push(a),
										a
									);
								},
							},
							{
								key: "cancelAllRequests",
								value: function cancelAllRequests(t) {
									this._fullRequestReader && this._fullRequestReader.cancel(t),
										this._rangeRequestReaders.slice(0).forEach(function (r) {
											r.cancel(t);
										});
								},
							},
						]),
						PDFNetworkStream
					);
				})();
			r.PDFNetworkStream = c;
			var d = (function () {
					function PDFNetworkStreamFullRequestReader(t, r) {
						_classCallCheck(this, PDFNetworkStreamFullRequestReader), (this._manager = t);
						var a = {
							onHeadersReceived: this._onHeadersReceived.bind(this),
							onDone: this._onDone.bind(this),
							onError: this._onError.bind(this),
							onProgress: this._onProgress.bind(this),
						};
						(this._url = r.url),
							(this._fullRequestId = t.requestFull(a)),
							(this._headersReceivedCapability = (0, i.createPromiseCapability)()),
							(this._disableRange = r.disableRange || !1),
							(this._contentLength = r.length),
							(this._rangeChunkSize = r.rangeChunkSize),
							this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
							(this._isStreamingSupported = !1),
							(this._isRangeSupported = !1),
							(this._cachedChunks = []),
							(this._requests = []),
							(this._done = !1),
							(this._storedError = void 0),
							(this._filename = null),
							(this.onProgress = null);
					}
					var t;
					return (
						_createClass(PDFNetworkStreamFullRequestReader, [
							{
								key: "_onHeadersReceived",
								value: function _onHeadersReceived() {
									var t = this._fullRequestId,
										r = this._manager.getRequestXhr(t),
										a = function getResponseHeader(t) {
											return r.getResponseHeader(t);
										},
										o = (0, l.validateRangeRequestCapabilities)({
											getResponseHeader: a,
											isHttp: this._manager.isHttp,
											rangeChunkSize: this._rangeChunkSize,
											disableRange: this._disableRange,
										}),
										i = o.allowRangeRequests,
										u = o.suggestedLength;
									i && (this._isRangeSupported = !0),
										(this._contentLength = u || this._contentLength),
										(this._filename = (0, l.extractFilenameFromHeader)(a)),
										this._isRangeSupported && this._manager.abortRequest(t),
										this._headersReceivedCapability.resolve();
								},
							},
							{
								key: "_onDone",
								value: function _onDone(t) {
									t &&
										(this._requests.length > 0
											? this._requests.shift().resolve({ value: t.chunk, done: !1 })
											: this._cachedChunks.push(t.chunk));
									(this._done = !0),
										this._cachedChunks.length > 0 ||
											(this._requests.forEach(function (t) {
												t.resolve({ value: void 0, done: !0 });
											}),
											(this._requests = []));
								},
							},
							{
								key: "_onError",
								value: function _onError(t) {
									var r = this._url,
										a = (0, l.createResponseStatusError)(t, r);
									(this._storedError = a),
										this._headersReceivedCapability.reject(a),
										this._requests.forEach(function (t) {
											t.reject(a);
										}),
										(this._requests = []),
										(this._cachedChunks = []);
								},
							},
							{
								key: "_onProgress",
								value: function _onProgress(t) {
									this.onProgress &&
										this.onProgress({
											loaded: t.loaded,
											total: t.lengthComputable ? t.total : this._contentLength,
										});
								},
							},
							{
								key: "read",
								value:
									((t = _asyncToGenerator(
										o.default.mark(function _callee() {
											var t, r;
											return o.default.wrap(
												function _callee$(a) {
													for (;;)
														switch ((a.prev = a.next)) {
															case 0:
																if (!this._storedError) {
																	a.next = 2;
																	break;
																}
																throw this._storedError;
															case 2:
																if (!(this._cachedChunks.length > 0)) {
																	a.next = 5;
																	break;
																}
																return (
																	(t = this._cachedChunks.shift()),
																	a.abrupt("return", { value: t, done: !1 })
																);
															case 5:
																if (!this._done) {
																	a.next = 7;
																	break;
																}
																return a.abrupt("return", { value: void 0, done: !0 });
															case 7:
																return (
																	(r = (0, i.createPromiseCapability)()),
																	this._requests.push(r),
																	a.abrupt("return", r.promise)
																);
															case 10:
															case "end":
																return a.stop();
														}
												},
												_callee,
												this
											);
										})
									)),
									function read() {
										return t.apply(this, arguments);
									}),
							},
							{
								key: "cancel",
								value: function cancel(t) {
									(this._done = !0),
										this._headersReceivedCapability.reject(t),
										this._requests.forEach(function (t) {
											t.resolve({ value: void 0, done: !0 });
										}),
										(this._requests = []),
										this._manager.isPendingRequest(this._fullRequestId) &&
											this._manager.abortRequest(this._fullRequestId),
										(this._fullRequestReader = null);
								},
							},
							{
								key: "filename",
								get: function get() {
									return this._filename;
								},
							},
							{
								key: "isRangeSupported",
								get: function get() {
									return this._isRangeSupported;
								},
							},
							{
								key: "isStreamingSupported",
								get: function get() {
									return this._isStreamingSupported;
								},
							},
							{
								key: "contentLength",
								get: function get() {
									return this._contentLength;
								},
							},
							{
								key: "headersReady",
								get: function get() {
									return this._headersReceivedCapability.promise;
								},
							},
						]),
						PDFNetworkStreamFullRequestReader
					);
				})(),
				h = (function () {
					function PDFNetworkStreamRangeRequestReader(t, r, a) {
						_classCallCheck(this, PDFNetworkStreamRangeRequestReader), (this._manager = t);
						var o = { onDone: this._onDone.bind(this), onProgress: this._onProgress.bind(this) };
						(this._requestId = t.requestRange(r, a, o)),
							(this._requests = []),
							(this._queuedChunk = null),
							(this._done = !1),
							(this.onProgress = null),
							(this.onClosed = null);
					}
					var t;
					return (
						_createClass(PDFNetworkStreamRangeRequestReader, [
							{
								key: "_close",
								value: function _close() {
									this.onClosed && this.onClosed(this);
								},
							},
							{
								key: "_onDone",
								value: function _onDone(t) {
									var r = t.chunk;
									this._requests.length > 0
										? this._requests.shift().resolve({ value: r, done: !1 })
										: (this._queuedChunk = r);
									(this._done = !0),
										this._requests.forEach(function (t) {
											t.resolve({ value: void 0, done: !0 });
										}),
										(this._requests = []),
										this._close();
								},
							},
							{
								key: "_onProgress",
								value: function _onProgress(t) {
									!this.isStreamingSupported &&
										this.onProgress &&
										this.onProgress({ loaded: t.loaded });
								},
							},
							{
								key: "read",
								value:
									((t = _asyncToGenerator(
										o.default.mark(function _callee2() {
											var t, r;
											return o.default.wrap(
												function _callee2$(a) {
													for (;;)
														switch ((a.prev = a.next)) {
															case 0:
																if (null === this._queuedChunk) {
																	a.next = 4;
																	break;
																}
																return (
																	(t = this._queuedChunk),
																	(this._queuedChunk = null),
																	a.abrupt("return", { value: t, done: !1 })
																);
															case 4:
																if (!this._done) {
																	a.next = 6;
																	break;
																}
																return a.abrupt("return", { value: void 0, done: !0 });
															case 6:
																return (
																	(r = (0, i.createPromiseCapability)()),
																	this._requests.push(r),
																	a.abrupt("return", r.promise)
																);
															case 9:
															case "end":
																return a.stop();
														}
												},
												_callee2,
												this
											);
										})
									)),
									function read() {
										return t.apply(this, arguments);
									}),
							},
							{
								key: "cancel",
								value: function cancel(t) {
									(this._done = !0),
										this._requests.forEach(function (t) {
											t.resolve({ value: void 0, done: !0 });
										}),
										(this._requests = []),
										this._manager.isPendingRequest(this._requestId) &&
											this._manager.abortRequest(this._requestId),
										this._close();
								},
							},
							{
								key: "isStreamingSupported",
								get: function get() {
									return !1;
								},
							},
						]),
						PDFNetworkStreamRangeRequestReader
					);
				})();
		},
		function (t, r, a) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.PDFFetchStream = void 0);
			var o = (function _interopRequireDefault(t) {
					return t && t.__esModule ? t : { default: t };
				})(a(2)),
				i = a(5),
				l = a(213);
			function asyncGeneratorStep(t, r, a, o, i, l, u) {
				try {
					var c = t[l](u),
						d = c.value;
				} catch (t) {
					return void a(t);
				}
				c.done ? r(d) : Promise.resolve(d).then(o, i);
			}
			function _asyncToGenerator(t) {
				return function () {
					var r = this,
						a = arguments;
					return new Promise(function (o, i) {
						var l = t.apply(r, a);
						function _next(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "next", t);
						}
						function _throw(t) {
							asyncGeneratorStep(l, o, i, _next, _throw, "throw", t);
						}
						_next(void 0);
					});
				};
			}
			function _classCallCheck(t, r) {
				if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
			}
			function _defineProperties(t, r) {
				for (var a = 0; a < r.length; a++) {
					var o = r[a];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						"value" in o && (o.writable = !0),
						Object.defineProperty(t, o.key, o);
				}
			}
			function _createClass(t, r, a) {
				return r && _defineProperties(t.prototype, r), a && _defineProperties(t, a), t;
			}
			function createFetchOptions(t, r, a) {
				return {
					method: "GET",
					headers: t,
					signal: a && a.signal,
					mode: "cors",
					credentials: r ? "include" : "same-origin",
					redirect: "follow",
				};
			}
			function createHeaders(t) {
				var r = new Headers();
				for (var a in t) {
					var o = t[a];
					void 0 !== o && r.append(a, o);
				}
				return r;
			}
			var u = (function () {
				function PDFFetchStream(t) {
					_classCallCheck(this, PDFFetchStream),
						(this.source = t),
						(this.isHttp = /^https?:/i.test(t.url)),
						(this.httpHeaders = (this.isHttp && t.httpHeaders) || {}),
						(this._fullRequestReader = null),
						(this._rangeRequestReaders = []);
				}
				return (
					_createClass(PDFFetchStream, [
						{
							key: "getFullReader",
							value: function getFullReader() {
								return (
									(0, i.assert)(
										!this._fullRequestReader,
										"PDFFetchStream.getFullReader can only be called once."
									),
									(this._fullRequestReader = new c(this)),
									this._fullRequestReader
								);
							},
						},
						{
							key: "getRangeReader",
							value: function getRangeReader(t, r) {
								if (r <= this._progressiveDataLength) return null;
								var a = new d(this, t, r);
								return this._rangeRequestReaders.push(a), a;
							},
						},
						{
							key: "cancelAllRequests",
							value: function cancelAllRequests(t) {
								this._fullRequestReader && this._fullRequestReader.cancel(t),
									this._rangeRequestReaders.slice(0).forEach(function (r) {
										r.cancel(t);
									});
							},
						},
						{
							key: "_progressiveDataLength",
							get: function get() {
								return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
							},
						},
					]),
					PDFFetchStream
				);
			})();
			r.PDFFetchStream = u;
			var c = (function () {
					function PDFFetchStreamReader(t) {
						var r = this;
						_classCallCheck(this, PDFFetchStreamReader),
							(this._stream = t),
							(this._reader = null),
							(this._loaded = 0),
							(this._filename = null);
						var a = t.source;
						(this._withCredentials = a.withCredentials || !1),
							(this._contentLength = a.length),
							(this._headersCapability = (0, i.createPromiseCapability)()),
							(this._disableRange = a.disableRange || !1),
							(this._rangeChunkSize = a.rangeChunkSize),
							this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
							"undefined" != typeof AbortController && (this._abortController = new AbortController()),
							(this._isStreamingSupported = !a.disableStream),
							(this._isRangeSupported = !a.disableRange),
							(this._headers = createHeaders(this._stream.httpHeaders));
						var o = a.url;
						fetch(o, createFetchOptions(this._headers, this._withCredentials, this._abortController))
							.then(function (t) {
								if (!(0, l.validateResponseStatus)(t.status))
									throw (0, l.createResponseStatusError)(t.status, o);
								(r._reader = t.body.getReader()), r._headersCapability.resolve();
								var a = function getResponseHeader(r) {
										return t.headers.get(r);
									},
									u = (0, l.validateRangeRequestCapabilities)({
										getResponseHeader: a,
										isHttp: r._stream.isHttp,
										rangeChunkSize: r._rangeChunkSize,
										disableRange: r._disableRange,
									}),
									c = u.allowRangeRequests,
									d = u.suggestedLength;
								(r._isRangeSupported = c),
									(r._contentLength = d || r._contentLength),
									(r._filename = (0, l.extractFilenameFromHeader)(a)),
									!r._isStreamingSupported &&
										r._isRangeSupported &&
										r.cancel(new i.AbortException("Streaming is disabled."));
							})
							.catch(this._headersCapability.reject),
							(this.onProgress = null);
					}
					var t;
					return (
						_createClass(PDFFetchStreamReader, [
							{
								key: "read",
								value:
									((t = _asyncToGenerator(
										o.default.mark(function _callee() {
											var t, r, a, i;
											return o.default.wrap(
												function _callee$(o) {
													for (;;)
														switch ((o.prev = o.next)) {
															case 0:
																return (o.next = 2), this._headersCapability.promise;
															case 2:
																return (o.next = 4), this._reader.read();
															case 4:
																if (((t = o.sent), (r = t.value), !(a = t.done))) {
																	o.next = 9;
																	break;
																}
																return o.abrupt("return", { value: r, done: a });
															case 9:
																return (
																	(this._loaded += r.byteLength),
																	this.onProgress &&
																		this.onProgress({
																			loaded: this._loaded,
																			total: this._contentLength,
																		}),
																	(i = new Uint8Array(r).buffer),
																	o.abrupt("return", { value: i, done: !1 })
																);
															case 13:
															case "end":
																return o.stop();
														}
												},
												_callee,
												this
											);
										})
									)),
									function read() {
										return t.apply(this, arguments);
									}),
							},
							{
								key: "cancel",
								value: function cancel(t) {
									this._reader && this._reader.cancel(t),
										this._abortController && this._abortController.abort();
								},
							},
							{
								key: "headersReady",
								get: function get() {
									return this._headersCapability.promise;
								},
							},
							{
								key: "filename",
								get: function get() {
									return this._filename;
								},
							},
							{
								key: "contentLength",
								get: function get() {
									return this._contentLength;
								},
							},
							{
								key: "isRangeSupported",
								get: function get() {
									return this._isRangeSupported;
								},
							},
							{
								key: "isStreamingSupported",
								get: function get() {
									return this._isStreamingSupported;
								},
							},
						]),
						PDFFetchStreamReader
					);
				})(),
				d = (function () {
					function PDFFetchStreamRangeReader(t, r, a) {
						var o = this;
						_classCallCheck(this, PDFFetchStreamRangeReader),
							(this._stream = t),
							(this._reader = null),
							(this._loaded = 0);
						var u = t.source;
						(this._withCredentials = u.withCredentials || !1),
							(this._readCapability = (0, i.createPromiseCapability)()),
							(this._isStreamingSupported = !u.disableStream),
							"undefined" != typeof AbortController && (this._abortController = new AbortController()),
							(this._headers = createHeaders(this._stream.httpHeaders)),
							this._headers.append("Range", "bytes=".concat(r, "-").concat(a - 1));
						var c = u.url;
						fetch(c, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then(
							function (t) {
								if (!(0, l.validateResponseStatus)(t.status))
									throw (0, l.createResponseStatusError)(t.status, c);
								o._readCapability.resolve(), (o._reader = t.body.getReader());
							}
						),
							(this.onProgress = null);
					}
					var t;
					return (
						_createClass(PDFFetchStreamRangeReader, [
							{
								key: "read",
								value:
									((t = _asyncToGenerator(
										o.default.mark(function _callee2() {
											var t, r, a, i;
											return o.default.wrap(
												function _callee2$(o) {
													for (;;)
														switch ((o.prev = o.next)) {
															case 0:
																return (o.next = 2), this._readCapability.promise;
															case 2:
																return (o.next = 4), this._reader.read();
															case 4:
																if (((t = o.sent), (r = t.value), !(a = t.done))) {
																	o.next = 9;
																	break;
																}
																return o.abrupt("return", { value: r, done: a });
															case 9:
																return (
																	(this._loaded += r.byteLength),
																	this.onProgress &&
																		this.onProgress({ loaded: this._loaded }),
																	(i = new Uint8Array(r).buffer),
																	o.abrupt("return", { value: i, done: !1 })
																);
															case 13:
															case "end":
																return o.stop();
														}
												},
												_callee2,
												this
											);
										})
									)),
									function read() {
										return t.apply(this, arguments);
									}),
							},
							{
								key: "cancel",
								value: function cancel(t) {
									this._reader && this._reader.cancel(t),
										this._abortController && this._abortController.abort();
								},
							},
							{
								key: "isStreamingSupported",
								get: function get() {
									return this._isStreamingSupported;
								},
							},
						]),
						PDFFetchStreamRangeReader
					);
				})();
		},
	]);
});
