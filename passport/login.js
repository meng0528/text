(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/passport/login" ], {
    "049c": function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("f918"), t(e("66fd"));
            var o = t(e("ae6c"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(o.default);
        }).call(this, e("543d").createPage);
    },
    "7d59": function(n, t, e) {
        var o = e("bb80");
        e.n(o).a;
    },
    "80cf": function(n, t, e) {
        e.r(t);
        var o = e("9213"), u = e.n(o);
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        t.default = u.a;
    },
    9213: function(n, t, e) {
        (function(n) {
            function o(n, t, e, o, u, c, a) {
                try {
                    var r = n[c](a), i = r.value;
                } catch (n) {
                    return void e(n);
                }
                r.done ? t(i) : Promise.resolve(i).then(o, u);
            }
            function u(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(u, c) {
                        function a(n) {
                            o(i, u, c, a, r, "next", n);
                        }
                        function r(n) {
                            o(i, u, c, a, r, "throw", n);
                        }
                        var i = n.apply(t, e);
                        a(void 0);
                    });
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(e("a34a")), a = e("d820"), r = e("efe3"), i = {
                data: function() {
                    return {
                        setting: []
                    };
                },
                onLoad: function() {
                    this.getStore();
                },
                methods: {
                    onNotLogin: function() {
                        n.navigateBack({});
                    },
                    getStore: function() {
                        var t = this;
                        return u(c.default.mark(function e() {
                            var o;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return o = t, e.next = 3, (0, r.store)({}).then(function(t) {
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
                    doLogin: function(t) {
                        var e = this;
                        n.getUserProfile({
                            desc: "获得您的公开信息",
                            success: function(t) {
                                console.log(t), wx.login({
                                    success: function(o) {
                                        (0, a.login)({
                                            code: o.code,
                                            user_info: JSON.stringify(t.userInfo)
                                        }).then(function(t) {
                                            n.setStorageSync("token", t.data.token), n.setStorageSync("user_id", t.data.user_id), 
                                            e.$refs.uToast.show({
                                                type: "success",
                                                message: "登录成功",
                                                complete: function() {
                                                    n.navigateBack({});
                                                }
                                            });
                                        }).catch(function(n) {
                                            console.log(n);
                                        });
                                    }
                                });
                            },
                            fail: function(n) {
                                console.log(n);
                            }
                        });
                    }
                }
            };
            t.default = i;
        }).call(this, e("543d").default);
    },
    ae6c: function(n, t, e) {
        e.r(t);
        var o = e("c097"), u = e("80cf");
        for (var c in u) "default" !== c && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(c);
        e("7d59");
        var a = e("f0c5"), r = Object(a.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = r.exports;
    },
    bb80: function(n, t, e) {},
    c097: function(n, t, e) {
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return c;
        }), e.d(t, "a", function() {
            return o;
        });
        var o = {
            uToast: function() {
                return e.e("node-modules/uview-ui/components/u-toast/u-toast").then(e.bind(null, "88f7"));
            }
        }, u = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    }
}, [ [ "049c", "common/runtime", "common/vendor" ] ] ]);