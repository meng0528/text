(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/store/details/details" ], {
    "30c1": function(e, n, o) {
        o.r(n);
        var t = o("a054"), r = o("48f3");
        for (var u in r) "default" !== u && function(e) {
            o.d(n, e, function() {
                return r[e];
            });
        }(u);
        o("8616");
        var i = o("f0c5"), s = Object(i.a)(r.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        n.default = s.exports;
    },
    "48f3": function(e, n, o) {
        o.r(n);
        var t = o("ead1"), r = o.n(t);
        for (var u in t) "default" !== u && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(u);
        n.default = r.a;
    },
    8616: function(e, n, o) {
        var t = o("891f");
        o.n(t).a;
    },
    "891f": function(e, n, o) {},
    a054: function(e, n, o) {
        o.d(n, "b", function() {
            return r;
        }), o.d(n, "c", function() {
            return u;
        }), o.d(n, "a", function() {
            return t;
        });
        var t = {
            uDivider: function() {
                return Promise.all([ o.e("common/vendor"), o.e("node-modules/uview-ui/components/u-divider/u-divider") ]).then(o.bind(null, "ec73"));
            },
            uParse: function() {
                return Promise.all([ o.e("common/vendor"), o.e("node-modules/uview-ui/components/u-parse/u-parse") ]).then(o.bind(null, "95a4"));
            },
            uPopup: function() {
                return Promise.all([ o.e("common/vendor"), o.e("node-modules/uview-ui/components/u-popup/u-popup") ]).then(o.bind(null, "8bb1"));
            },
            "u-Form": function() {
                return Promise.all([ o.e("common/vendor"), o.e("node-modules/uview-ui/components/u--form/u--form") ]).then(o.bind(null, "3848"));
            },
            uFormItem: function() {
                return Promise.all([ o.e("common/vendor"), o.e("node-modules/uview-ui/components/u-form-item/u-form-item") ]).then(o.bind(null, "ee8b"));
            },
            "u-Input": function() {
                return Promise.all([ o.e("common/vendor"), o.e("node-modules/uview-ui/components/u--input/u--input") ]).then(o.bind(null, "c0b6"));
            },
            "u-Textarea": function() {
                return Promise.all([ o.e("common/vendor"), o.e("node-modules/uview-ui/components/u--textarea/u--textarea") ]).then(o.bind(null, "ee6d"));
            },
            uNumberBox: function() {
                return Promise.all([ o.e("common/vendor"), o.e("node-modules/uview-ui/components/u-number-box/u-number-box") ]).then(o.bind(null, "5966"));
            },
            uIcon: function() {
                return Promise.all([ o.e("common/vendor"), o.e("node-modules/uview-ui/components/u-icon/u-icon") ]).then(o.bind(null, "550b"));
            },
            "u-Text": function() {
                return Promise.all([ o.e("common/vendor"), o.e("node-modules/uview-ui/components/u--text/u--text") ]).then(o.bind(null, "b5f1"));
            }
        }, r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, u = [];
    },
    ce1d: function(e, n, o) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            o("f918"), n(o("66fd"));
            var t = n(o("30c1"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = o, e(t.default);
        }).call(this, o("543d").createPage);
    },
    ead1: function(e, n, o) {
        (function(e) {
            function t(e, n, o, t, r, u, i) {
                try {
                    var s = e[u](i), a = s.value;
                } catch (e) {
                    return void o(e);
                }
                s.done ? n(a) : Promise.resolve(a).then(t, r);
            }
            function r(e) {
                return function() {
                    var n = this, o = arguments;
                    return new Promise(function(r, u) {
                        function i(e) {
                            t(a, r, u, i, s, "next", e);
                        }
                        function s(e) {
                            t(a, r, u, i, s, "throw", e);
                        }
                        var a = e.apply(n, o);
                        i(void 0);
                    });
                };
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var u = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(o("a34a")), i = o("efe3"), s = o("8283"), a = o("d820"), d = o("87ee"), c = {
                data: function() {
                    return {
                        setting: [],
                        userInfo: [],
                        goods_id: 0,
                        details: {},
                        current: 0,
                        show: !1,
                        model1: {
                            addressee: {
                                name: "",
                                moblie: "",
                                address: "",
                                remark: ""
                            }
                        },
                        rules: {
                            "addressee.name": {
                                type: "string",
                                required: !0,
                                message: "请填写收件人姓名",
                                trigger: [ "blur", "change" ]
                            },
                            "addressee.iphone": [ {
                                required: !0,
                                message: "请填写收件人手机号",
                                trigger: [ "change", "blur" ]
                            }, {
                                required: !0,
                                message: "填写的手机号不正确",
                                trigger: [ "blur", "change" ],
                                len: 11
                            } ],
                            "addressee.address": {
                                type: "string",
                                required: !0,
                                message: "请填写收货地址",
                                trigger: [ "blur", "change" ]
                            }
                        },
                        num: 1,
                        count_money: 0
                    };
                },
                onLoad: function(e) {
                    this.goods_id = e.goods_id, this.getStore(), this.getUser(), this.getGoodsDetails();
                },
                onShareAppMessage: function() {
                    var e = this;
                    return {
                        imageUrl: e.details.image[0].file_path,
                        desc: e.details.goods_name,
                        title: e.details.goods.goods_name,
                        path: "/pages/store/details/details?goods_id=" + e.details.goods_id
                    };
                },
                methods: {
                    change: function(e) {
                        this.current = e.detail.current;
                    },
                    getUser: function() {
                        var e = this;
                        return r(u.default.mark(function n() {
                            var o;
                            return u.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return o = e, n.next = 3, (0, a.detail)({}).then(function(e) {
                                        o.userInfo = e.data.userInfo;
                                    }).catch(function(e) {
                                        console.log(e);
                                    });

                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getStore: function() {
                        var n = this;
                        return r(u.default.mark(function o() {
                            var t;
                            return u.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return t = n, o.next = 3, (0, i.store)({}).then(function(n) {
                                        t.setting = n.data, e.setNavigationBarColor({
                                            frontColor: "#ffffff",
                                            backgroundColor: n.data.store.sys_theme,
                                            animation: {
                                                duration: 200,
                                                timingFunc: "easeIn"
                                            }
                                        });
                                    }).catch(function(e) {
                                        console.log(e);
                                    });

                                  case 3:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    getGoodsDetails: function() {
                        var e = this;
                        return r(u.default.mark(function n() {
                            var o;
                            return u.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return o = e, n.next = 3, (0, s.goodsDetails)({
                                        goods_id: o.goods_id
                                    }).then(function(e) {
                                        o.count_money = e.data.goods_price, o.details = e.data;
                                    }).catch(function(e) {
                                        console.log(e);
                                    });

                                  case 3:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    onGoodsList: function() {
                        e.navigateTo({
                            url: "/pages/store/index/index"
                        });
                    },
                    onService: function() {
                        var e = this;
                        20 == e.setting.store.service.use_ing && wx.openCustomerServiceChat({
                            extInfo: {
                                url: e.setting.store.service.work_wx_url
                            },
                            corpId: e.setting.store.service.work_wx_id,
                            success: function(e) {
                                console.log("ok");
                            }
                        });
                    },
                    onBuy: function() {
                        if (!this.userInfo) return e.$u.toast("登录过期，请登录后再试"), void setTimeout(function() {
                            e.navigateTo({
                                url: "/pages/mine/index/index"
                            });
                        }, 1500);
                        this.show = !0;
                    },
                    close: function() {
                        this.show = !1;
                    },
                    onChangeNum: function(e) {
                        this.count_money = e.value * this.details.goods_price;
                    },
                    onSumbit: function() {
                        var n = this;
                        n.$refs.form1.validate().then(function(e) {
                            n.buyNow();
                        }).catch(function(n) {
                            console.log(n), e.$u.toast("请检查填写的信息是否正确");
                        });
                    },
                    buyNow: function() {
                        var n = this;
                        return r(u.default.mark(function o() {
                            var t;
                            return u.default.wrap(function(o) {
                                for (;;) switch (o.prev = o.next) {
                                  case 0:
                                    return t = n, o.next = 3, (0, d.buy)({
                                        goods_id: t.goods_id,
                                        goods_num: t.num,
                                        user_name: t.model1.addressee.name,
                                        user_iphone: t.model1.addressee.moblie,
                                        user_address: t.model1.addressee.address,
                                        buyer_remark: t.model1.addressee.remark
                                    }).then(function(n) {
                                        e.navigateTo({
                                            url: "/pages/store/order/details?order_id=" + n.data.order_id
                                        });
                                    }).catch(function(e) {});

                                  case 3:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    }
                }
            };
            n.default = c;
        }).call(this, o("543d").default);
    }
}, [ [ "ce1d", "common/runtime", "common/vendor" ] ] ]);