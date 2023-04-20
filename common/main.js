(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    4714: function(e, t, n) {},
    "5b69": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n("4c3c"), c = {
                onLaunch: function() {
                    if (wx.canIUse("getUpdateManager")) {
                        var t = wx.getUpdateManager();
                        t.onCheckForUpdate(function(e) {
                            e.hasUpdate && (t.onUpdateReady(function() {
                                wx.showModal({
                                    title: "更新提示",
                                    content: "新版本已经准备好，是否重启应用？",
                                    success: function(e) {
                                        e.confirm && t.applyUpdate();
                                    }
                                });
                            }), t.onUpdateFailed(function() {
                                wx.showModal({
                                    title: "已经有新版本了哟~",
                                    content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                                });
                            }));
                        });
                    } else wx.showModal({
                        title: "提示",
                        content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
                    });
                    e.getLocation({
                        type: "wgs84",
                        geocode: !0,
                        success: function(t) {
                            var n = o(t.longitude, t.latitude);
                            e.setStorageSync("lat", n.lat), e.setStorageSync("lng", n.lng);
                        },
                        fail: function() {
                            e.showToast({
                                title: "获取地址失败，将导致部分功能不可用",
                                icon: "none"
                            });
                        }
                    }), console.log("App Launch");
                },
                onShow: function() {
                    console.log("App Show");
                },
                onHide: function() {
                    console.log("App Hide");
                }
            };
            t.default = c;
        }).call(this, n("543d").default);
    },
    "99a2": function(e, t, n) {
        n.r(t);
        var o = n("caf5");
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("f837");
        var a = n("f0c5"), r = Object(a.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = r.exports;
    },
    caf5: function(e, t, n) {
        n.r(t);
        var o = n("5b69"), c = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = c.a;
    },
    d51d: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            n("f918");
            var a = t(n("99a2")), r = t(n("66fd")), u = t(n("bc87"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, r.default.config.productionTip = !1, a.default.mpType = "app";
            var i = new r.default(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach(function(t) {
                        c(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({}, a.default));
            n("491a")(i), e(i).$mount(), r.default.use(u.default);
        }).call(this, n("543d").createApp);
    },
    f837: function(e, t, n) {
        var o = n("4714");
        n.n(o).a;
    }
}, [ [ "d51d", "common/runtime", "common/vendor" ] ] ]);