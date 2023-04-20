(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/shop/brand/index" ], {
    "275f": function(e, n, t) {
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, n, t, o, a, i, r) {
                try {
                    var u = e[i](r), c = u.value;
                } catch (e) {
                    return void t(e);
                }
                u.done ? n(c) : Promise.resolve(c).then(o, a);
            }
            function i(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(o, i) {
                        function r(e) {
                            a(c, o, i, r, u, "next", e);
                        }
                        function u(e) {
                            a(c, o, i, r, u, "throw", e);
                        }
                        var c = e.apply(n, t);
                        r(void 0);
                    });
                };
            }
            function r(e) {
                return l(e) || d(e) || c(e) || u();
            }
            function u() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function c(e, n) {
                if (e) {
                    if ("string" == typeof e) return s(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(e, n) : void 0;
                }
            }
            function d(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
            }
            function l(e) {
                if (Array.isArray(e)) return s(e);
            }
            function s(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
                return o;
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var f = o(t("a34a")), m = t("7681"), _ = t("d820"), v = o(t("3c62")), g = t("efe3"), h = t("2065"), b = {
                data: function() {
                    return {
                        is_cate: !1,
                        userInfo: [],
                        logo: [],
                        back_images: [],
                        back_video: [],
                        form: {
                            m_class_id: "",
                            logo_img_id: "",
                            back_images: "",
                            back_video: "",
                            name: "",
                            addr: "",
                            server: "",
                            command: "",
                            cate_name: "",
                            longitude: "",
                            latitude: "",
                            details: "",
                            slogan: "",
                            use_cover: ""
                        },
                        radiolist: [ {
                            name: "视频封面",
                            use_cover: 10
                        }, {
                            name: "图片封面",
                            use_cover: 20
                        }, {
                            name: "不显示",
                            use_cover: 30
                        } ],
                        radiovalue: 10,
                        setting: [],
                        cate: []
                    };
                },
                onLoad: function() {
                    this.getUser(), this.getStore(), this.getCategory();
                },
                methods: {
                    groupChange: function(e) {
                        this.form.use_cover = "视频封面" == e ? 10 : 20;
                    },
                    doDeletePic: function(e) {
                        "logo" == e.name && (this.logo = [], this.form.logo_img_id = ""), "back_images" == e.name && (this.back_images.splice(e.index, 1), 
                        this.form.back_images.splice(e.index, 1)), "back_video" == e.name && (this.back_video = [], 
                        this.form.back_video = "");
                    },
                    onChangeCate: function(e) {
                        this.form.cate_name = this.cate[e.detail.value].name, this.form.m_class_id = this.cate[e.detail.value].id;
                    },
                    onToLocation: function() {
                        var n = this;
                        e.chooseLocation({
                            success: function(e) {
                                n.form.longitude = e.longitude, n.form.latitude = e.latitude, n.form.addr = e.address;
                            }
                        });
                    },
                    getCategory: function() {
                        var e = this;
                        (0, h.category)({}).then(function(n) {
                            e.cate = n.data, e.getShop();
                        }).catch(function(e) {});
                    },
                    getShop: function() {
                        var e = this, n = this;
                        (0, h.detail)({}).then(function(t) {
                            if (t.data) {
                                e.form = t.data, t.data && t.data.m_class_id && n.cate.map(function(e, o) {
                                    e.id == t.data.m_class_id && (n.form.cate_name = e.name, n.form.m_class_id = e.id);
                                }), e.logo = [ {
                                    url: t.data.logo.file_path
                                } ];
                                var o = t.data.video;
                                e.back_video = [ {
                                    url: o ? o.file_path : ""
                                } ];
                                var a = t.data.back_images;
                                e.form.back_images = [], a.map(function(n, t) {
                                    e.back_images = [].concat(r(e.back_images), [ {
                                        url: n.file_path
                                    } ]), e.form.back_images = [].concat(r(e.form.back_images), [ n.file_id ]);
                                }), e.radiovalue = t.data.use_cover;
                            }
                        }).catch(function(e) {
                            console.log(e);
                        });
                    },
                    getStore: function() {
                        var e = this;
                        (0, g.store)({}).then(function(n) {
                            e.setting = n.data, 1 == e.setting.flow.insert.status && (m.interstitial.load(e.setting.flow.insert.insert_ad), 
                            m.interstitial.show());
                        }).catch(function(e) {
                            console.log(e);
                        });
                    },
                    deletePic: function(e) {
                        var n = this;
                        "wx" == e.name && (n.form.wx_img_id = "", n.wx_image = []), "ali" == e.name && (n.form.zfb_img_id = "", 
                        n.ali_image = []);
                    },
                    onSubmit: function() {
                        var n = this;
                        return i(f.default.mark(function t() {
                            var o;
                            return f.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return o = n, o.form.use_cover = o.radiovalue, t.next = 4, (0, h.modify)(o.form).then(function(n) {
                                        1 == n.code && o.$refs.uToast.show({
                                            message: "信息修改成功",
                                            complete: function() {
                                                e.navigateBack({});
                                            }
                                        });
                                    }).catch(function(e) {});

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getUser: function() {
                        var e = this;
                        (0, _.detail)({}).then(function(n) {
                            e.userInfo = n.data.userInfo;
                        }).catch(function(e) {
                            console.log(e);
                        });
                    },
                    afterReadImage: function(e) {
                        var n = this, t = [].concat(e.file);
                        for (var o in t) n.uploadFilePromise(t[o].url, e.name);
                    },
                    uploadFilePromise: function(n, t) {
                        var o = this;
                        return new Promise(function(a, i) {
                            e.uploadFile({
                                url: v.default.siteroot + "/upload/image&wxapp_id=" + v.default.uniacid + "&token=" + e.getStorageSync("token"),
                                filePath: n,
                                name: "iFile",
                                success: function(e) {
                                    if (e = JSON.parse(e.data), "logo" == t && (o.form.logo_img_id = e.data.file_id, 
                                    o.logo = [ {
                                        url: e.data.file_path
                                    } ]), "back_images" == t) {
                                        var n = o.form.back_images ? o.form.back_images : [];
                                        o.form.back_images = [].concat(r(n), [ e.data.file_id ]), o.back_images = [].concat(r(o.back_images), [ {
                                            url: e.data.file_path
                                        } ]);
                                    }
                                    "back_video" == t && (o.form.back_video = e.data.file_id, o.back_video = [ {
                                        url: e.data.file_path
                                    } ]);
                                }
                            });
                        });
                    }
                }
            };
            n.default = b;
        }).call(this, t("543d").default);
    },
    "521a": function(e, n, t) {
        t.r(n);
        var o = t("a422"), a = t("6d75");
        for (var i in a) "default" !== i && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(i);
        t("a0b7");
        var r = t("f0c5"), u = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = u.exports;
    },
    "6d75": function(e, n, t) {
        t.r(n);
        var o = t("275f"), a = t.n(o);
        for (var i in o) "default" !== i && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(i);
        n.default = a.a;
    },
    a0b7: function(e, n, t) {
        var o = t("fcb9");
        t.n(o).a;
    },
    a422: function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return i;
        }), t.d(n, "a", function() {
            return o;
        });
        var o = {
            uToast: function() {
                return t.e("node-modules/uview-ui/components/u-toast/u-toast").then(t.bind(null, "88f7"));
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
            "u-Textarea": function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u--textarea/u--textarea") ]).then(t.bind(null, "ee6d"));
            },
            uUpload: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-upload/u-upload") ]).then(t.bind(null, "6e78"));
            },
            uRadioGroup: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-radio-group/u-radio-group") ]).then(t.bind(null, "2cf9"));
            },
            uRadio: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-radio/u-radio") ]).then(t.bind(null, "1c2c"));
            },
            uButton: function() {
                return Promise.all([ t.e("common/vendor"), t.e("node-modules/uview-ui/components/u-button/u-button") ]).then(t.bind(null, "582f"));
            }
        }, a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    e889: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("f918"), n(t("66fd"));
            var o = n(t("521a"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, e(o.default);
        }).call(this, t("543d").createPage);
    },
    fcb9: function(e, n, t) {}
}, [ [ "e889", "common/runtime", "common/vendor" ] ] ]);