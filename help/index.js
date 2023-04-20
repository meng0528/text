(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/help/index" ], {
    2262: function(n, t, e) {
        (function(n) {
            function u(n, t, e, u, o, c, a) {
                try {
                    var r = n[c](a), i = r.value;
                } catch (n) {
                    return void e(n);
                }
                r.done ? t(i) : Promise.resolve(i).then(u, o);
            }
            function o(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(o, c) {
                        function a(n) {
                            u(i, o, c, a, r, "next", n);
                        }
                        function r(n) {
                            u(i, o, c, a, r, "throw", n);
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
            }(e("a34a")), a = e("efe3"), r = e("d820"), i = {
                data: function() {
                    return {
                        lists: [],
                        setting: [],
                        userInfo: [],
                        is_check_print: !1
                    };
                },
                onLoad: function() {
                    this.checkPlugs(), this.getHelp(), this.getStore(), this.getUser();
                },
                methods: {
                    checkPlugs: function() {
                        var n = this;
                        (0, a.plugs)({}).then(function(t) {
                            t.data.map(function(t) {
                                "7168903c21149a8494b8838f0adc7add" == t[1] && (n.is_check_print = !0);
                            });
                        }).catch(function(n) {});
                    },
                    getUser: function() {
                        var n = this;
                        (0, r.detail)({}).then(function(t) {
                            n.userInfo = t.data.userInfo;
                        }).catch(function(n) {
                            console.log(n);
                        });
                    },
                    getHelp: function() {
                        var n = this;
                        return o(c.default.mark(function t() {
                            var e;
                            return c.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = n, t.next = 3, (0, a.help)({}).then(function(n) {
                                        e.lists = n.data;
                                    }).catch(function(n) {});

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getStore: function() {
                        var n = this;
                        (0, a.store)({}).then(function(t) {
                            n.setting = t.data;
                        }).catch(function(n) {
                            console.log(n);
                        });
                    },
                    goApply: function() {
                        n.navigateTo({
                            url: "/pages/help/apply"
                        });
                    }
                }
            };
            t.default = i;
        }).call(this, e("543d").default);
    },
    "7b8f": function(n, t, e) {
        e.r(t);
        var u = e("c6a8"), o = e("96ea");
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        e("dd9d");
        var a = e("f0c5"), r = Object(a.a)(o.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = r.exports;
    },
    8304: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("f918"), t(e("66fd"));
            var u = t(e("7b8f"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, n(u.default);
        }).call(this, e("543d").createPage);
    },
    "96ea": function(n, t, e) {
        e.r(t);
        var u = e("2262"), o = e.n(u);
        for (var c in u) "default" !== c && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(c);
        t.default = o.a;
    },
    c6a8: function(n, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return c;
        }), e.d(t, "a", function() {
            return u;
        });
        var u = {
            uButton: function() {
                return Promise.all([ e.e("common/vendor"), e.e("node-modules/uview-ui/components/u-button/u-button") ]).then(e.bind(null, "582f"));
            }
        }, o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    d74f: function(n, t, e) {},
    dd9d: function(n, t, e) {
        var u = e("d74f");
        e.n(u).a;
    }
}, [ [ "8304", "common/runtime", "common/vendor" ] ] ]);