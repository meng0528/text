(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/poster/index" ], {
    2488: function(e, t, n) {
        var o = n("bdce");
        n.n(o).a;
    },
    "46a4": function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return u;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            uToast: function() {
                return n.e("node-modules/uview-ui/components/u-toast/u-toast").then(n.bind(null, "88f7"));
            },
            lPainter: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter/l-painter") ]).then(n.bind(null, "d740"));
            },
            lPainterView: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter-view/l-painter-view") ]).then(n.bind(null, "f982"));
            },
            lPainterText: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter-text/l-painter-text") ]).then(n.bind(null, "7e2b"));
            },
            lPainterImage: function() {
                return Promise.all([ n.e("common/vendor"), n.e("uni_modules/lime-painter/components/l-painter-image/l-painter-image") ]).then(n.bind(null, "aa1c"));
            },
            uIcon: function() {
                return Promise.all([ n.e("common/vendor"), n.e("node-modules/uview-ui/components/u-icon/u-icon") ]).then(n.bind(null, "550b"));
            },
            uPopup: function() {
                return Promise.all([ n.e("common/vendor"), n.e("node-modules/uview-ui/components/u-popup/u-popup") ]).then(n.bind(null, "8bb1"));
            },
            "u-Form": function() {
                return Promise.all([ n.e("common/vendor"), n.e("node-modules/uview-ui/components/u--form/u--form") ]).then(n.bind(null, "3848"));
            },
            uFormItem: function() {
                return Promise.all([ n.e("common/vendor"), n.e("node-modules/uview-ui/components/u-form-item/u-form-item") ]).then(n.bind(null, "ee8b"));
            },
            "u-Input": function() {
                return Promise.all([ n.e("common/vendor"), n.e("node-modules/uview-ui/components/u--input/u--input") ]).then(n.bind(null, "c0b6"));
            },
            uButton: function() {
                return Promise.all([ n.e("common/vendor"), n.e("node-modules/uview-ui/components/u-button/u-button") ]).then(n.bind(null, "582f"));
            }
        }, i = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                e.image = t;
            }, e.e1 = function(t) {
                e.is_modify = !0;
            });
        }, u = [];
    },
    "8fe1": function(e, t, n) {
        n.r(t);
        var o = n("46a4"), i = n("ec1d");
        for (var u in i) "default" !== u && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(u);
        n("2488");
        var r = n("f0c5"), s = Object(r.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = s.exports;
    },
    9203: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("f918"), t(n("66fd"));
            var o = t(n("8fe1"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default);
        }).call(this, n("543d").createPage);
    },
    bdce: function(e, t, n) {},
    ec1d: function(e, t, n) {
        n.r(t);
        var o = n("f0a0"), i = n.n(o);
        for (var u in o) "default" !== u && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        t.default = i.a;
    },
    f0a0: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n("efe3"), i = n("7681"), u = {
                data: function() {
                    return {
                        is_modify: !1,
                        image: "",
                        qrcode: "https://wifi.kaifa.cc/uploads/qr/6276849b36cd41651934363.jpg",
                        setting: [],
                        sys_theme: "#fff",
                        tips: "用户扫码可入驻成为拓展员/商家",
                        form: {
                            custom_text_1: "连接WiFi·赚大钱",
                            custom_text_2: "分销拓客·赚取佣金·链接流量",
                            custom_text_3: "WiFi大师专业版",
                            custom_text_4: "加入我们,扫一扫,连接WiFi赚大钱"
                        }
                    };
                },
                onLoad: function(e) {
                    this.qrcode = e.qrcode, e.m && (this.tips = "用户连接WiFi可产生收益"), this.getStore();
                },
                methods: {
                    onDownPoster: function(t) {
                        var n = this;
                        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return e.downloadFile({
                            url: t,
                            success: function(t) {
                                e.saveImageToPhotosAlbum({
                                    filePath: t.tempFilePath,
                                    success: function() {
                                        n.$refs.uToast.show({
                                            message: "海报保存成功",
                                            complete: function() {}
                                        });
                                    }
                                });
                            }
                        }), !1;
                        e.saveImageToPhotosAlbum({
                            filePath: t,
                            success: function() {
                                n.$refs.uToast.show({
                                    message: "海报保存成功",
                                    complete: function() {}
                                });
                            }
                        });
                    },
                    getStore: function() {
                        var e = this;
                        (0, o.store)({}).then(function(t) {
                            e.setting = t.data, e.sys_theme = t.data.store.sys_theme, 1 == e.setting.flow.insert.status && (i.interstitial.load(e.setting.flow.insert.insert_ad), 
                            i.interstitial.show()), e.setting.store.wifi_text.one && (e.form.custom_text_1 = e.setting.store.wifi_text.one + " "), 
                            e.setting.store.wifi_text.two && (e.form.custom_text_2 = e.setting.store.wifi_text.two + " "), 
                            e.setting.store.wifi_text.three && (e.form.custom_text_3 = e.setting.store.wifi_text.three + " "), 
                            e.setting.store.wifi_text.four && (e.form.custom_text_4 = e.setting.store.wifi_text.four + " ");
                        }).catch(function(e) {
                            console.log(e);
                        });
                    },
                    onCloseUpdate: function() {
                        this.is_modify = !1;
                    },
                    onStartUpdate: function() {
                        this.is_modify = !1;
                    }
                }
            };
            t.default = u;
        }).call(this, n("543d").default);
    }
}, [ [ "9203", "common/runtime", "common/vendor" ] ] ]);