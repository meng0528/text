(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/store/order/details" ], {
    "09cd": function(e, n, t) {
        (function(e) {
            function o(e, n, t, o, r, u, i) {
                try {
                    var c = e[u](i), a = c.value;
                } catch (e) {
                    return void t(e);
                }
                c.done ? n(a) : Promise.resolve(a).then(o, r);
            }
            function r(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(r, u) {
                        function i(e) {
                            o(a, r, u, i, c, "next", e);
                        }
                        function c(e) {
                            o(a, r, u, i, c, "throw", e);
                        }
                        var a = e.apply(n, t);
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
            }(t("a34a")), i = t("efe3"), c = t("d820"), a = t("87ee"), s = {
                data: function() {
                    return {
                        storeUrl: "/pages/store/index/index",
                        titleStyle: {
                            fontSize: "32upx",
                            color: "#fff",
                            fontWeight: "bold"
                        },
                        cellStyle: {
                            fontSize: "32upx",
                            color: "#242527",
                            fontWeight: "bold"
                        },
                        cellIconStyle: {
                            fontSize: "50upx",
                            color: "#242527",
                            fontWeight: "bold"
                        },
                        setting: [],
                        userInfo: [],
                        order_id: "",
                        order: {}
                    };
                },
                onLoad: function(e) {
                    this.order_id = e.order_id, this.getStore(), this.getUser(), this.getOrderDetails();
                },
                methods: {
                    getUser: function() {
                        var e = this;
                        return r(u.default.mark(function n() {
                            var t;
                            return u.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, (0, c.detail)({}).then(function(e) {
                                        t.userInfo = e.data.userInfo;
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
                        var e = this;
                        return r(u.default.mark(function n() {
                            var t;
                            return u.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, (0, i.store)({}).then(function(e) {
                                        t.setting = e.data;
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
                    getOrderDetails: function() {
                        var e = this;
                        return r(u.default.mark(function n() {
                            var t;
                            return u.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return t = e, n.next = 3, (0, a.detail)({
                                        order_id: t.order_id
                                    }).then(function(e) {
                                        t.order = e.data.order;
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
                    copyOrderNo: function() {
                        e.setClipboardData({
                            data: this.order.order_no,
                            success: function() {
                                e.$u.toast("订单号已复制");
                            }
                        });
                    },
                    copyExpressNo: function() {
                        e.setClipboardData({
                            data: this.order.express_no,
                            success: function() {
                                e.$u.toast("快递单号已复制");
                            }
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
                    payOrder: function() {
                        var n = this;
                        (0, a.pay)({
                            order_id: n.order_id
                        }).then(function(t) {
                            if (1 != t.code) return n.$refs.uToast.show({
                                type: "error",
                                message: t.msg,
                                complete: function() {}
                            }), !1;
                            var o = t.data.payment;
                            e.requestPayment({
                                provider: "wxpay",
                                timeStamp: o.timeStamp,
                                nonceStr: o.nonceStr,
                                package: "prepay_id=" + o.prepay_id,
                                signType: "MD5",
                                paySign: o.paySign,
                                success: function(t) {
                                    n.$refs.uToast.show({
                                        type: "success",
                                        message: "支付成功",
                                        complete: function() {
                                            e.navigateTo({
                                                url: "/pages/store/order/lists?data_type=received"
                                            });
                                        }
                                    });
                                },
                                fail: function(e) {
                                    n.$refs.uToast.show({
                                        type: "error",
                                        message: "支付失败",
                                        complete: function() {}
                                    });
                                }
                            });
                        }).catch(function(e) {
                            console.log(e);
                        });
                    },
                    cancelOrder: function() {
                        var n = this;
                        e.showModal({
                            title: "温馨提示",
                            content: "确定要取消该订单吗？",
                            showCancel: !0,
                            success: function(t) {
                                t.confirm ? (0, a.cancel)({
                                    order_id: n.order_id
                                }).then(function(t) {
                                    n.$refs.uToast.show({
                                        type: "success",
                                        message: "订单取消成功",
                                        complete: function() {
                                            e.navigateTo({
                                                url: "/pages/store/index/index"
                                            });
                                        }
                                    });
                                }).catch(function(e) {
                                    console.log(e);
                                }) : t.cancel;
                            }
                        });
                    }
                }
            };
            n.default = s;
        }).call(this, t("543d").default);
    },
    1013: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("f918"), n(t("66fd"));
            var o = n(t("3ac2"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(o.default);
        }).call(this, t("543d").createPage);
    },
    1478: function(e, n, t) {
        t.d(n, "b", function() {
            return r;
        }), t.d(n, "c", function() {
            return u;
        }), t.d(n, "a", function() {
            return o;
        });
        var o = {
            uToast: function() {
                return t.e("node-modules/uview-ui/components/u-toast/u-toast").then(t.bind(null, "88f7"));
            },
            uNavbar: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-navbar/u-navbar") ]).then(t.bind(null, "001a"));
            },
            uIcon: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-icon/u-icon") ]).then(t.bind(null, "550b"));
            },
            "u-Text": function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u--text/u--text") ]).then(t.bind(null, "b5f1"));
            },
            uCellGroup: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-cell-group/u-cell-group") ]).then(t.bind(null, "9892"));
            },
            uCell: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-cell/u-cell") ]).then(t.bind(null, "944a"));
            },
            uDivider: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-divider/u-divider") ]).then(t.bind(null, "ec73"));
            },
            "u-Image": function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u--image/u--image") ]).then(t.bind(null, "29e4"));
            },
            uButton: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-button/u-button") ]).then(t.bind(null, "582f"));
            }
        }, r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, u = [];
    },
    "3ac2": function(e, n, t) {
        t.r(n);
        var o = t("1478"), r = t("4a41");
        for (var u in r) "default" !== u && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        t("9a27");
        var i = t("f0c5"), c = Object(i.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = c.exports;
    },
    "4a41": function(e, n, t) {
        t.r(n);
        var o = t("09cd"), r = t.n(o);
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        n.default = r.a;
    },
    "9a27": function(e, n, t) {
        var o = t("9bb5");
        t.n(o).a;
    },
    "9bb5": function(e, n, t) {}
}, [ [ "1013", "common/runtime", "common/vendor" ] ] ]);