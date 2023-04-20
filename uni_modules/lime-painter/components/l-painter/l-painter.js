(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uni_modules/lime-painter/components/l-painter/l-painter" ], {
    3635: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    "3eb0": function(e, t, n) {
        n.r(t);
        var r = n("accb"), a = n.n(r);
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        t.default = a.a;
    },
    "989c": function(e, t, n) {},
    "9b6f": function(e, t, n) {
        var r = n("989c");
        n.n(r).a;
    },
    accb: function(e, t, n) {
        (function(e) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t, n, r, a, i, s) {
                try {
                    var c = e[i](s), o = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(o) : Promise.resolve(o).then(r, a);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        function s(e) {
                            a(o, r, i, s, c, "next", e);
                        }
                        function c(e) {
                            a(o, r, i, s, c, "throw", e);
                        }
                        var o = e.apply(t, n);
                        s(void 0);
                    });
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(n("a34a")), c = n("c166"), o = n("47eb"), u = r(n("82e5")), d = {
                name: "lime-painter",
                mixins: [ (0, c.parent)("painter") ],
                props: {
                    board: Object,
                    pathType: String,
                    fileType: {
                        type: String,
                        default: "png"
                    },
                    quality: {
                        type: Number,
                        default: 1
                    },
                    css: [ String, Object ],
                    width: [ Number, String ],
                    height: [ Number, String ],
                    pixelRatio: Number,
                    customStyle: String,
                    isCanvasToTempFilePath: Boolean,
                    sleep: {
                        type: Number,
                        default: 1e3 / 30
                    },
                    beforeDelay: {
                        type: Number,
                        default: 100
                    },
                    afterDelay: {
                        type: Number,
                        default: 100
                    },
                    type: {
                        type: String,
                        default: "2d"
                    }
                },
                data: function() {
                    return {
                        use2dCanvas: !0,
                        canvasHeight: 150,
                        canvasWidth: null,
                        isPC: !1,
                        inited: !1,
                        progress: 0
                    };
                },
                computed: {
                    canvasId: function() {
                        return "l-painter".concat(this._uid);
                    },
                    size: function() {
                        if (this.boardWidth && this.boardHeight) return "width:".concat(this.boardWidth, "px; height: ").concat(this.boardHeight, "px;");
                    },
                    dpr: function() {
                        return this.pixelRatio || e.getSystemInfoSync().pixelRatio;
                    },
                    boardWidth: function() {
                        var e = (this.board && this.board.css || this.board || this).width, t = void 0 === e ? 0 : e;
                        return (0, o.toPx)(t) || Math.max((0, o.toPx)(t), (0, o.toPx)(this.canvasWidth));
                    },
                    boardHeight: function() {
                        var e = (this.board && this.board.css || this.board || this).height, t = void 0 === e ? 0 : e;
                        return (0, o.toPx)(t) || Math.max((0, o.toPx)(t), (0, o.toPx)(this.canvasHeight));
                    },
                    elements: function() {
                        return JSON.parse(JSON.stringify(this.el));
                    }
                },
                watch: {
                    canvasWidth: function(e) {
                        this.el.css && !this.el.css.width && (this.el.css.width = e);
                    },
                    size: function(e) {
                        this.use2dCanvas && (this.inited = !1);
                    }
                },
                created: function() {
                    var t = e.getSystemInfoSync(), n = t.SDKVersion, r = t.version, a = t.platform, i = t.environment;
                    this.isPC = /windows/i.test(a), this.use2dCanvas = "2d" === this.type && (0, o.compareVersion)(n, "2.9.2") >= 0 && !(/ios/i.test(a) && /7.0.20/.test(r) || /wxwork/i.test(i)) && !this.isPC;
                },
                mounted: function() {
                    var e = this;
                    return i(s.default.mark(function t() {
                        return s.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, e.getParentWeith();

                              case 2:
                                e.$nextTick(function() {
                                    setTimeout(function() {
                                        e.board ? e.$watch("board", e.watchRender, {
                                            deep: !0,
                                            immediate: !0
                                        }) : e.$watch("elements", e.watchRender, {
                                            deep: !0,
                                            immediate: !0
                                        });
                                    }, 30);
                                });

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                methods: {
                    watchRender: function(e, t) {
                        var n = this;
                        return i(s.default.mark(function r() {
                            return s.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    if (n.progress = 0, e && e.views && e.views.length && "{}" !== JSON.stringify(e) && JSON.stringify(e) != JSON.stringify(t)) {
                                        r.next = 3;
                                        break;
                                    }
                                    return r.abrupt("return");

                                  case 3:
                                    clearTimeout(n.rendertimer), n.rendertimer = setTimeout(function() {
                                        n.render(e);
                                    }, n.beforeDelay);

                                  case 5:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    setFilePath: function(e, t) {
                        var n = this;
                        return i(s.default.mark(function r() {
                            var a, i;
                            return s.default.wrap(function(r) {
                                for (;;) switch (r.prev = r.next) {
                                  case 0:
                                    if (a = e, "base64" != (i = n.pathType) || (0, o.isBase64)(e)) {
                                        r.next = 8;
                                        break;
                                    }
                                    return r.next = 5, (0, o.pathToBase64)(e);

                                  case 5:
                                    a = r.sent, r.next = 12;
                                    break;

                                  case 8:
                                    if ("url" != i || !(0, o.isBase64)(e)) {
                                        r.next = 12;
                                        break;
                                    }
                                    return r.next = 11, (0, o.base64ToPath)(e);

                                  case 11:
                                    a = r.sent;

                                  case 12:
                                    return t && n.$emit("success", a), r.abrupt("return", a);

                                  case 14:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    getSize: function(e) {
                        var t = this;
                        return i(s.default.mark(function n() {
                            var r, a, i, c;
                            return s.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (t.size) {
                                        n.next = 12;
                                        break;
                                    }
                                    if (r = e.css || e, a = r.width, i = e.css || e, c = i.height, !a && !c) {
                                        n.next = 10;
                                        break;
                                    }
                                    return t.canvasWidth = a || t.canvasWidth, t.canvasHeight = c || t.canvasHeight, 
                                    n.next = 8, (0, o.sleep)(30);

                                  case 8:
                                    n.next = 12;
                                    break;

                                  case 10:
                                    return n.next = 12, t.getParentWeith();

                                  case 12:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    canvasToTempFilePathSync: function(e) {
                        var t = this;
                        this.$watch("progress", function(n) {
                            1 == n && t.canvasToTempFilePath(e);
                        }, {
                            immediate: !0
                        });
                    },
                    getParentWeith: function() {
                        var t = this;
                        return new Promise(function(n) {
                            e.createSelectorQuery().in(t).select(".lime-painter").boundingClientRect().exec(function(e) {
                                t.canvasWidth = Math.ceil(e[0].width) || 300, t.canvasHeight = e[0].height || t.canvasHeight || 150, 
                                n(e[0]);
                            });
                        });
                    },
                    render: function() {
                        var e = arguments, t = this;
                        return i(s.default.mark(function n() {
                            var r, a, c, d, f, h, l, p, v, m;
                            return s.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, n.next = 3, t.getSize(r);

                                  case 3:
                                    return n.next = 5, t.getContext();

                                  case 5:
                                    if (a = n.sent, c = t.use2dCanvas, d = t.boardWidth, f = t.boardHeight, h = t.canvas, 
                                    l = t.afterDelay, !c || h) {
                                        n.next = 9;
                                        break;
                                    }
                                    return n.abrupt("return", Promise.reject(new Error("render: fail canvas has not been created")));

                                  case 9:
                                    return t.boundary = {
                                        top: 0,
                                        left: 0,
                                        width: d,
                                        height: f
                                    }, t.painter || (t.painter = new u.default({
                                        context: a,
                                        canvas: h,
                                        width: d,
                                        height: f,
                                        pixelRatio: t.dpr,
                                        fixed: "".concat(t.width ? "width" : "").concat(t.height ? "height" : ""),
                                        listen: {
                                            onProgress: function(e) {
                                                t.progress = e, t.$emit("progress", e);
                                            },
                                            onEffectFail: function(e) {
                                                t.$emit("faill", e);
                                            }
                                        }
                                    }, t)), n.next = 13, t.painter.source(r);

                                  case 13:
                                    return p = n.sent, v = p.width, m = p.height, t.boundary.height = t.canvasHeight = m, 
                                    t.boundary.width = t.canvasWidth = v, n.next = 20, (0, o.sleep)(t.sleep);

                                  case 20:
                                    return n.next = 22, t.painter.render();

                                  case 22:
                                    return n.next = 24, new Promise(function(e) {
                                        return t.$nextTick(e);
                                    });

                                  case 24:
                                    if (c) {
                                        n.next = 27;
                                        break;
                                    }
                                    return n.next = 27, t.canvasDraw();

                                  case 27:
                                    if (!l || !c) {
                                        n.next = 30;
                                        break;
                                    }
                                    return n.next = 30, (0, o.sleep)(l);

                                  case 30:
                                    return t.$emit("done"), t.isCanvasToTempFilePath && t.canvasToTempFilePath().then(function() {
                                        var e = i(s.default.mark(function e(n) {
                                            return s.default.wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                  case 0:
                                                    t.$emit("success", n.tempFilePath);

                                                  case 1:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }()).catch(function(e) {
                                        t.$emit("fail", new Error(JSON.stringify(e)));
                                    }), n.abrupt("return", Promise.resolve({
                                        ctx: a,
                                        draw: t.painter,
                                        node: t.node
                                    }));

                                  case 33:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    canvasDraw: function() {
                        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return new Promise(function(n, r) {
                            return e.ctx.draw(t, function() {
                                return setTimeout(function() {
                                    return n();
                                }, e.afterDelay);
                            });
                        });
                    },
                    getContext: function() {
                        var t = this;
                        return i(s.default.mark(function n() {
                            var r, a, i, c;
                            return s.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    if (t.canvasWidth) {
                                        n.next = 4;
                                        break;
                                    }
                                    return t.$emit("fail", "painter no size"), console.error("painter no size: 请给画板或父级设置尺寸"), 
                                    n.abrupt("return", Promise.reject());

                                  case 4:
                                    if (!t.ctx || !t.inited) {
                                        n.next = 6;
                                        break;
                                    }
                                    return n.abrupt("return", Promise.resolve(t.ctx));

                                  case 6:
                                    if (r = t.type, a = t.use2dCanvas, i = t.dpr, t.boardWidth, t.boardHeight, c = function() {
                                        return new Promise(function(n) {
                                            e.createSelectorQuery().in(t).select("#".concat(t.canvasId)).boundingClientRect().exec(function(r) {
                                                if (r) {
                                                    var a = e.createCanvasContext(t.canvasId, t);
                                                    t.inited || (t.inited = !0, t.use2dCanvas = !1, t.canvas = r), t.isPC && a.scale(1 / i, 1 / i), 
                                                    t.ctx = a, n(t.ctx);
                                                }
                                            });
                                        });
                                    }, a) {
                                        n.next = 10;
                                        break;
                                    }
                                    return n.abrupt("return", c());

                                  case 10:
                                    return n.abrupt("return", new Promise(function(n) {
                                        e.createSelectorQuery().in(t).select("#".concat(t.canvasId)).node().exec(function(e) {
                                            var a = e[0].node;
                                            a || (t.use2dCanvas = !1, n(t.getContext()));
                                            var i = a.getContext(r);
                                            t.inited || (t.inited = !0, t.use2dCanvas = !0, t.canvas = a), t.ctx = i, n(t.ctx);
                                        });
                                    }));

                                  case 11:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    canvasToTempFilePath: function() {
                        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = this.use2dCanvas, a = this.canvasId, c = this.dpr, o = this.fileType, u = this.quality;
                        return new Promise(function(d, f) {
                            var h = t.boundary || t, l = h.top, p = void 0 === l ? 0 : l, v = h.left, m = void 0 === v ? 0 : v, b = h.width, x = h.height, g = b * c, w = x * c, y = function() {
                                var e = i(s.default.mark(function e(n) {
                                    var r;
                                    return s.default.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            return e.prev = 0, e.next = 3, t.setFilePath(n.tempFilePath);

                                          case 3:
                                            r = e.sent, d(Object.assign(n, {
                                                tempFilePath: r
                                            })), e.next = 10;
                                            break;

                                          case 7:
                                            e.prev = 7, e.t0 = e.catch(0), t.$emit("fail", e.t0);

                                          case 10:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e, null, [ [ 0, 7 ] ]);
                                }));
                                return function(t) {
                                    return e.apply(this, arguments);
                                };
                            }(), P = Object.assign({
                                x: m,
                                y: p,
                                width: b,
                                height: x,
                                destWidth: g,
                                destHeight: w,
                                canvasId: a,
                                fileType: o,
                                quality: u,
                                success: y,
                                fail: f
                            }, n);
                            r && (delete P.canvasId, P.canvas = t.canvas), e.canvasToTempFilePath(P, t);
                        });
                    }
                }
            };
            t.default = d;
        }).call(this, n("543d").default);
    },
    d740: function(e, t, n) {
        n.r(t);
        var r = n("3635"), a = n("3eb0");
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        n("9b6f");
        var s = n("f0c5"), c = Object(s.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uni_modules/lime-painter/components/l-painter/l-painter-create-component", {
    "uni_modules/lime-painter/components/l-painter/l-painter-create-component": function(e, t, n) {
        n("543d").createComponent(n("d740"));
    }
}, [ [ "uni_modules/lime-painter/components/l-painter/l-painter-create-component" ] ] ]);