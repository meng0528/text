(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/webview/index" ], {
    "80ec": function(n, e, t) {
        t.d(e, "b", function() {
            return u;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
        var u = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    "9ccc": function(n, e, t) {
        t.r(e);
        var u = t("80ec"), c = t("ab5f");
        for (var a in c) "default" !== a && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(a);
        var r = t("f0c5"), f = Object(r.a)(c.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        e.default = f.exports;
    },
    ab5f: function(n, e, t) {
        t.r(e);
        var u = t("b0c3"), c = t.n(u);
        for (var a in u) "default" !== a && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(a);
        e.default = c.a;
    },
    b0c3: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = {
            data: function() {
                return {
                    id: "",
                    url: ""
                };
            },
            onLoad: function(n) {
                this.url = n.url;
            },
            methods: {}
        };
        e.default = u;
    },
    f9b0: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("f918"), e(t("66fd"));
            var u = e(t("9ccc"));
            wx.__webpack_require_UNI_MP_PLUGIN__ = t, n(u.default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "f9b0", "common/runtime", "common/vendor" ] ] ]);