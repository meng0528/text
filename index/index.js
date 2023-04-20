(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    "194c": function(n, e, t) {
        t.r(e);
        var i = t("5221"), r = t.n(i);
        for (var o in i) "default" !== o && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(o);
        e.default = r.a;
    },
    "20f5": function(n, e, t) {
        t.d(e, "b", function() {
            return r;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {
            return i;
        });
        var i = {
            uSwiper: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-swiper/u-swiper") ]).then(t.bind(null, "9691"));
            },
            uNoticeBar: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-notice-bar/u-notice-bar") ]).then(t.bind(null, "60b4"));
            },
            uIcon: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-icon/u-icon") ]).then(t.bind(null, "550b"));
            },
            uGrid: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-grid/u-grid") ]).then(t.bind(null, "8590"));
            },
            uGridItem: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-grid-item/u-grid-item") ]).then(t.bind(null, "7f5e"));
            },
            tabbar: function() {
                return t.e("components/tabbar/tabbar").then(t.bind(null, "dba5"));
            }
        }, r = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    "4ffc": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("f918"), e(t("66fd"));
            var i = e(t("ebb1"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(i.default);
        }).call(this, t("543d").createPage);
    },
    5221: function(n, e, t) {
        (function(n) {
            function i(n, e, t, i, r, o, a) {
                try {
                    var u = n[o](a), c = u.value;
                } catch (n) {
                    return void t(n);
                }
                u.done ? e(c) : Promise.resolve(c).then(i, r);
            }
            function r(n) {
                return function() {
                    var e = this, t = arguments;
                    return new Promise(function(r, o) {
                        function a(n) {
                            i(c, r, o, a, u, "next", n);
                        }
                        function u(n) {
                            i(c, r, o, a, u, "throw", n);
                        }
                        var c = n.apply(e, t);
                        a(void 0);
                    });
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(t("a34a")), a = t("efe3"), u = t("7681"), c = {
                components: {
                    tabbar: function() {
                        t.e("components/tabbar/tabbar").then(function() {
                            return resolve(t("dba5"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                data: function() {
                    return {
                        jump: [],
                        store: [],
                        setting: [],
                        banner: []
                    };
                },
                onLoad: function() {
                    this.getBanner(), this.getStore(), this.getJump();
                },
                onShareTimeline: function() {
                    var n = this;
                    return {
                        imageUrl: n.setting.store.share_logo_img.file_path,
                        title: n.setting.store.share_title
                    };
                },
                onShareAppMessage: function() {
                    var n = this;
                    return {
                        imageUrl: n.setting.store.share_logo_img.file_path,
                        desc: n.setting.store.share_desc,
                        title: n.setting.store.share_title,
                        path: "/pages/index/index"
                    };
                },
                methods: {
                    getJump: function() {
                        var n = this;
                        return r(o.default.mark(function e() {
                            var t;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t = n, e.next = 3, (0, a.jump)({}).then(function(n) {
                                        t.jump = n.data;
                                    }).catch(function(n) {});

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getBanner: function() {
                        var n = this;
                        (0, a.banner)({
                            plate: 10
                        }).then(function(e) {
                            var t = [];
                            for (var i in e.data) t[i] = e.data[i], t[i].file_path = e.data[i].image.file_path;
                            n.banner = t;
                        }).catch(function(n) {});
                    },
                    onClickBanner: function(e) {
                        var t = this;
                        return 1 == t.banner[e].type ? (n.navigateTo({
                            url: t.banner[e].or_path
                        }), !1) : 2 == t.banner[e].type ? (n.navigateToMiniProgram({
                            appId: t.banner[e].or_appid,
                            path: t.banner[e].or_path
                        }), !1) : 3 == t.banner[e].type ? (n.navigateTo({
                            url: "../webview/index?url=" + t.banner[e].or_path
                        }), !1) : void 0;
                    },
                    onTool: function(e) {
                        var t = this.jump[e];
                        return 10 == t.type ? (n.navigateTo({
                            url: t.url
                        }), !1) : 20 == t.type ? (n.navigateTo({
                            url: "../webview/index?url=" + t.url
                        }), !1) : 30 == t.type ? (n.navigateToMiniProgram({
                            appId: t.app_id,
                            path: t.url,
                            success: function(n) {}
                        }), !1) : void 0;
                    },
                    getStore: function() {
                        var n = this;
                        (0, a.store)({}).then(function(e) {
                            n.setting = e.data, 1 == n.setting.flow.insert.status && (u.interstitial.load(n.setting.flow.insert.insert_ad), 
                            u.interstitial.show());
                        }).catch(function(n) {
                            console.log(n);
                        });
                    },
                    onClickWifi: function() {
                        var e = this;
                        10 == e.setting.store.throttle.status && n.setClipboardData({
                            data: e.setting.store.throttle.command
                        }), n.navigateTo({
                            url: "/pages/wifi/created"
                        });
                    },
                    onClickMine: function() {
                        n.navigateTo({
                            url: "/pages/wifi/index"
                        });
                    }
                }
            };
            e.default = c;
        }).call(this, t("543d").default);
    },
    "8d6c": function(n, e, t) {
        var i = t("d466");
        t.n(i).a;
    },
    d466: function(n, e, t) {},
    ebb1: function(n, e, t) {
        t.r(e);
        var i = t("20f5"), r = t("194c");
        for (var o in r) "default" !== o && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(o);
        t("8d6c");
        var a = t("f0c5"), u = Object(a.a)(r.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = u.exports;
    }
}, [ [ "4ffc", "common/runtime", "common/vendor" ] ] ]);