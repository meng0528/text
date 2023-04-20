(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/store/index/index" ], {
    "12a0": function(n, t, e) {
        (function(n) {
            function o(n) {
                return u(n) || i(n) || a(n) || r();
            }
            function r() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function a(n, t) {
                if (n) {
                    if ("string" == typeof n) return c(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    return "Object" === e && n.constructor && (e = n.constructor.name), "Map" === e || "Set" === e ? Array.from(n) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? c(n, t) : void 0;
                }
            }
            function i(n) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(n)) return Array.from(n);
            }
            function u(n) {
                if (Array.isArray(n)) return c(n);
            }
            function c(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
                return o;
            }
            function s(n, t, e, o, r, a, i) {
                try {
                    var u = n[a](i), c = u.value;
                } catch (n) {
                    return void e(n);
                }
                u.done ? t(c) : Promise.resolve(c).then(o, r);
            }
            function f(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(o, r) {
                        function a(n) {
                            s(u, o, r, a, i, "next", n);
                        }
                        function i(n) {
                            s(u, o, r, a, i, "throw", n);
                        }
                        var u = n.apply(t, e);
                        a(void 0);
                    });
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var d = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(e("a34a")), l = e("efe3"), b = e("8283"), p = {
                components: {
                    tabbar: function() {
                        e.e("components/tabbar/tabbar").then(function() {
                            return resolve(e("dba5"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        titleStyle: {
                            fontSize: "32upx",
                            color: "#fff",
                            fontWeight: "bold"
                        },
                        banner: [],
                        setting: [],
                        category: [],
                        category_id: -1,
                        goodsLists: [],
                        is_reach: !1,
                        page: 1
                    };
                },
                onLoad: function() {
                    this.getStore(), this.getBanner(), this.getCategory(), this.getGoodsLists();
                },
                onReachBottom: function() {
                    this.is_reach = !0, this.page += 1, this.getGoodsLists();
                },
                methods: {
                    getStore: function() {
                        var t = this;
                        return f(d.default.mark(function e() {
                            var o;
                            return d.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return o = t, e.next = 3, (0, l.store)({}).then(function(t) {
                                        o.setting = t.data, n.setNavigationBarColor({
                                            frontColor: "#ffffff",
                                            backgroundColor: t.data.store.sys_theme,
                                            animation: {
                                                duration: 200,
                                                timingFunc: "easeIn"
                                            }
                                        });
                                    }).catch(function(n) {
                                        console.log(n);
                                    });

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getBanner: function() {
                        var n = this;
                        return f(d.default.mark(function t() {
                            var e;
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = n, t.next = 3, (0, l.banner)({
                                        plate: 30
                                    }).then(function(n) {
                                        var t = [];
                                        for (var o in n.data) t[o] = n.data[o], t[o].file_path = n.data[o].image.file_path;
                                        e.banner = t;
                                    }).catch(function(n) {});

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    onClickBanner: function(t) {
                        var e = this;
                        return 1 == e.banner[t].type ? (n.navigateTo({
                            url: e.banner[t].or_path
                        }), !1) : 2 == e.banner[t].type ? (n.navigateToMiniProgram({
                            appId: e.banner[t].or_appid,
                            path: e.banner[t].or_path
                        }), !1) : 3 == e.banner[t].type ? (n.navigateTo({
                            url: "../../webview/index?url=" + e.banner[t].or_path
                        }), !1) : void 0;
                    },
                    getCategory: function() {
                        var n = this;
                        return f(d.default.mark(function t() {
                            var e;
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = n, t.next = 3, (0, b.category)({}).then(function(n) {
                                        e.category = n.data.category;
                                    }).catch(function(n) {});

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    onCategory: function(n) {
                        this.page = 1, this.category_id = n.category_id, this.goodsLists = [], this.getGoodsLists();
                    },
                    getGoodsLists: function() {
                        var n = this;
                        return f(d.default.mark(function t() {
                            var e;
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = n, t.next = 3, (0, b.goods)({
                                        category_id: e.category_id,
                                        page: e.page
                                    }).then(function(n) {
                                        e.is_reach ? e.goodsLists = [].concat(o(e.goodsLists), o(n.data.data)) : e.goodsLists = n.data.data;
                                    }).catch(function(n) {
                                        console.log(n);
                                    });

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    goodsDetails: function(t) {
                        n.navigateTo({
                            url: "/pages/store/details/details?goods_id=" + t
                        });
                    }
                }
            };
            t.default = p;
        }).call(this, e("543d").default);
    },
    "6f34": function(n, t, e) {
        e.r(t);
        var o = e("f05d"), r = e("b3fc");
        for (var a in r) "default" !== a && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(a);
        e("cee7");
        var i = e("f0c5"), u = Object(i.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = u.exports;
    },
    "71f3": function(n, t, e) {},
    aa14: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("f918"), t(e("66fd"));
            var o = t(e("6f34"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(o.default);
        }).call(this, e("543d").createPage);
    },
    b3fc: function(n, t, e) {
        e.r(t);
        var o = e("12a0"), r = e.n(o);
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        t.default = r.a;
    },
    cee7: function(n, t, e) {
        var o = e("71f3");
        e.n(o).a;
    },
    f05d: function(n, t, e) {
        e.d(t, "b", function() {
            return r;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {
            return o;
        });
        var o = {
            uNavbar: function() {
                return Promise.all([ e.e("common/vendor"), e.e("node-modules/uview-ui/components/u-navbar/u-navbar") ]).then(e.bind(null, "001a"));
            },
            uSwiper: function() {
                return Promise.all([ e.e("common/vendor"), e.e("node-modules/uview-ui/components/u-swiper/u-swiper") ]).then(e.bind(null, "9691"));
            },
            uNoticeBar: function() {
                return Promise.all([ e.e("common/vendor"), e.e("node-modules/uview-ui/components/u-notice-bar/u-notice-bar") ]).then(e.bind(null, "60b4"));
            },
            uTabs: function() {
                return Promise.all([ e.e("common/vendor"), e.e("node-modules/uview-ui/components/u-tabs/u-tabs") ]).then(e.bind(null, "f2b1"));
            },
            uTag: function() {
                return Promise.all([ e.e("common/vendor"), e.e("node-modules/uview-ui/components/u-tag/u-tag") ]).then(e.bind(null, "280f"));
            },
            tabbar: function() {
                return e.e("components/tabbar/tabbar").then(e.bind(null, "dba5"));
            }
        }, r = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    }
}, [ [ "aa14", "common/runtime", "common/vendor" ] ] ]);