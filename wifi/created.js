(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/wifi/created" ], {
    "13a8": function(n, e, t) {
        var i = t("cf94");
        t.n(i).a;
    },
    "5de5": function(n, e, t) {
        (function(n) {
            function i(n, e, t, i, o, u, r) {
                try {
                    var a = n[u](r), c = a.value;
                } catch (n) {
                    return void t(n);
                }
                a.done ? e(c) : Promise.resolve(c).then(i, o);
            }
            function o(n) {
                return function() {
                    var e = this, t = arguments;
                    return new Promise(function(o, u) {
                        function r(n) {
                            i(c, o, u, r, a, "next", n);
                        }
                        function a(n) {
                            i(c, o, u, r, a, "throw", n);
                        }
                        var c = n.apply(e, t);
                        r(void 0);
                    });
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(t("a34a")), r = t("30f4"), a = t("7681"), c = t("efe3"), s = {
                data: function() {
                    return {
                        wifi: {
                            id: "",
                            name: "",
                            username: "",
                            password: ""
                        },
                        m: "",
                        setting: [],
                        banner: []
                    };
                },
                onLoad: function(n) {
                    var e = this;
                    n.id && (e.wifi.id = n.id, e.getWifi()), wx.startWifi(), n.m && (e.m = n.m), e.getStore(), 
                    e.getBanner(), e.onSearchWiFi();
                },
                methods: {
                    onSearchWiFi: function() {
                        var e = this;
                        wx.getConnectedWifi({
                            success: function(t) {
                                "getConnectedWifi:ok" == t.errMsg ? e.wifi.username = t.wifi.SSID : e.$refs.uToast.show({
                                    message: "连接WiFi之后搜索",
                                    complete: function() {
                                        n.navigateBack({});
                                    }
                                });
                            }
                        });
                    },
                    onClickBanner: function(e) {
                        var t = this;
                        return 1 == t.banner[e].type ? (n.navigateTo({
                            url: t.banner[e].or_path
                        }), !1) : 2 == t.banner[e].type ? (n.navigateBackMiniProgram({
                            appId: t.banner.or_appid,
                            path: t.banner.or_path
                        }), !1) : void console.log();
                    },
                    getBanner: function() {
                        var n = this;
                        (0, c.banner)({}).then(function(e) {
                            var t = [];
                            for (var i in e.data) t[i] = e.data[i], t[i].file_path = e.data[i].image.file_path;
                            n.banner = t;
                        }).catch(function(n) {});
                    },
                    getWifi: function() {
                        var n = this;
                        return o(u.default.mark(function e() {
                            var t;
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t = n, e.next = 3, (0, r.detail)({
                                        id: t.wifi.id
                                    }).then(function(n) {
                                        t.wifi = n.data;
                                    }).catch(function(n) {});

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getStore: function() {
                        var n = this;
                        (0, c.store)({}).then(function(e) {
                            n.setting = e.data, 1 == n.setting.flow.insert.status && (a.interstitial.load(n.setting.flow.insert.insert_ad), 
                            a.interstitial.show()), 1 == n.setting.flow.excitation.status && a.rewarded.load(n.setting.flow.excitation.excitation_ad, function() {
                                console.log("ad success"), n.toAdd();
                            });
                        }).catch(function(n) {
                            console.log(n);
                        });
                    },
                    toAdd: function() {
                        var e = this;
                        return o(u.default.mark(function t() {
                            var i;
                            return u.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return i = e, t.next = 3, (0, r.created)(i.wifi).then(function(e) {
                                        1 == e.code && i.$refs.uToast.show({
                                            message: "WiFi码创建成功",
                                            complete: function() {
                                                n.redirectTo({
                                                    url: "/pages/wifi/index"
                                                });
                                            }
                                        });
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
                    onSubmit: function() {
                        var e = this;
                        return o(u.default.mark(function t() {
                            var i;
                            return u.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if ((i = e).wifi.name && i.wifi.username && i.wifi.password) {
                                        t.next = 4;
                                        break;
                                    }
                                    return i.$refs.uToast.show({
                                        title: "温馨提示",
                                        message: "参数不能为空",
                                        complete: function() {}
                                    }), t.abrupt("return", !1);

                                  case 4:
                                    if (i.$refs.uToast.show({
                                        type: "loading",
                                        title: "WiFi码生成中",
                                        message: "WiFi码生成中",
                                        iconUrl: "https://cdn.uviewui.com/uview/demo/toast/loading.png",
                                        complete: function() {}
                                    }), !i.m) {
                                        t.next = 10;
                                        break;
                                    }
                                    if (!i.wifi.id) {
                                        t.next = 9;
                                        break;
                                    }
                                    return t.next = 9, (0, r.modify)(i.wifi).then(function(e) {
                                        1 == e.code && (console.log("edit"), i.$refs.uToast.show({
                                            message: "WiFi修改成功",
                                            complete: function() {
                                                n.navigateBack({});
                                            }
                                        }));
                                    }).catch(function(n) {
                                        console.log(n);
                                    });

                                  case 9:
                                    return t.abrupt("return", !1);

                                  case 10:
                                    if (!i.wifi || !i.wifi.id) {
                                        t.next = 14;
                                        break;
                                    }
                                    return t.next = 13, (0, r.fill)(i.wifi).then(function(e) {
                                        1 == e.code && i.$refs.uToast.show({
                                            message: "WiFi创建成功",
                                            complete: function() {
                                                n.redirectTo({
                                                    url: "/pages/wifi/index"
                                                });
                                            }
                                        });
                                    }).catch(function(n) {
                                        console.log(n);
                                    });

                                  case 13:
                                    return t.abrupt("return", !1);

                                  case 14:
                                    if (10 != i.setting.store.wifi_ad_status || 1 != i.setting.flow.excitation.status) {
                                        t.next = 17;
                                        break;
                                    }
                                    return n.showModal({
                                        title: "温馨提示",
                                        content: "当前操作需要观看一段视频广告，是否确认？",
                                        success: function(n) {
                                            n.confirm ? a.rewarded.show() : n.cancel && i.$refs.uToast.show({
                                                title: "温馨提示",
                                                message: "您已取消操作",
                                                complete: function() {}
                                            });
                                        }
                                    }), t.abrupt("return", !1);

                                  case 17:
                                    i.toAdd();

                                  case 18:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            e.default = s;
        }).call(this, t("543d").default);
    },
    6376: function(n, e, t) {
        t.r(e);
        var i = t("5de5"), o = t.n(i);
        for (var u in i) "default" !== u && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(u);
        e.default = o.a;
    },
    ba21: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return u;
        }), t.d(e, "a", function() {
            return i;
        });
        var i = {
            uToast: function() {
                return t.e("node-modules/uview-ui/components/u-toast/u-toast").then(t.bind(null, "88f7"));
            },
            uSwiper: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-swiper/u-swiper") ]).then(t.bind(null, "9691"));
            },
            uIcon: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-icon/u-icon") ]).then(t.bind(null, "550b"));
            },
            "u-Form": function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u--form/u--form") ]).then(t.bind(null, "3848"));
            },
            uFormItem: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-form-item/u-form-item") ]).then(t.bind(null, "ee8b"));
            },
            "u-Input": function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u--input/u--input") ]).then(t.bind(null, "c0b6"));
            },
            uInput: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-input/u-input") ]).then(t.bind(null, "b1f7b"));
            },
            uButton: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-button/u-button") ]).then(t.bind(null, "582f"));
            }
        }, o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, u = [];
    },
    c685: function(n, e, t) {
        t.r(e);
        var i = t("ba21"), o = t("6376");
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        t("13a8");
        var r = t("f0c5"), a = Object(r.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = a.exports;
    },
    cf94: function(n, e, t) {},
    d568: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("f918"), e(t("66fd"));
            var i = e(t("c685"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(i.default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "d568", "common/runtime", "common/vendor" ] ] ]);