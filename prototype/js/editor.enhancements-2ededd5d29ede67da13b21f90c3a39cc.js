/*!
 * jQuery JavaScript Library v1.11.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:02Z
 */
/**
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function diff_match_patch() {
    this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = .5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = .5, this.Patch_Margin = 4, this.Match_MaxBits = 32
}! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length,
            n = at.type(e);
        return "function" === n || at.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (at.isFunction(t)) return at.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return at.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (pt.test(t)) return at.filter(t, e, n);
            t = at.filter(t, e)
        }
        return at.grep(e, function (e) {
            return at.inArray(e, t) >= 0 !== n
        })
    }

    function s(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function a(e) {
        var t = wt[e] = {};
        return at.each(e.match(yt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function o() {
        mt.addEventListener ? (mt.removeEventListener("DOMContentLoaded", r, !1), e.removeEventListener("load", r, !1)) : (mt.detachEvent("onreadystatechange", r), e.detachEvent("onload", r))
    }

    function r() {
        (mt.addEventListener || "load" === event.type || "complete" === mt.readyState) && (o(), at.ready())
    }

    function c(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(kt, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? at.parseJSON(n) : n
                } catch (s) {}
                at.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !at.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function d(e, t, n, i) {
        if (at.acceptData(e)) {
            var s, a, o = at.expando,
                r = e.nodeType,
                c = r ? at.cache : e,
                l = r ? e[o] : e[o] && o;
            if (l && c[l] && (i || c[l].data) || void 0 !== n || "string" != typeof t) return l || (l = r ? e[o] = X.pop() || at.guid++ : o), c[l] || (c[l] = r ? {} : {
                toJSON: at.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? c[l] = at.extend(c[l], t) : c[l].data = at.extend(c[l].data, t)), a = c[l], i || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[at.camelCase(t)] = n), "string" == typeof t ? (s = a[t], null == s && (s = a[at.camelCase(t)])) : s = a, s
        }
    }

    function u(e, t, n) {
        if (at.acceptData(e)) {
            var i, s, a = e.nodeType,
                o = a ? at.cache : e,
                r = a ? e[at.expando] : at.expando;
            if (o[r]) {
                if (t && (i = n ? o[r] : o[r].data)) {
                    at.isArray(t) ? t = t.concat(at.map(t, at.camelCase)) : t in i ? t = [t] : (t = at.camelCase(t), t = t in i ? [t] : t.split(" ")), s = t.length;
                    for (; s--;) delete i[t[s]];
                    if (n ? !l(i) : !at.isEmptyObject(i)) return
                }(n || (delete o[r].data, l(o[r]))) && (a ? at.cleanData([e], !0) : it.deleteExpando || o != o.window ? delete o[r] : o[r] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return mt.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = jt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function v(e, t) {
        var n, i, s = 0,
            a = typeof e.getElementsByTagName !== Ct ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ct ? e.querySelectorAll(t || "*") : void 0;
        if (!a)
            for (a = [], n = e.childNodes || e; null != (i = n[s]); s++)!t || at.nodeName(i, t) ? a.push(i) : at.merge(a, v(i, t));
        return void 0 === t || t && at.nodeName(e, t) ? at.merge([e], a) : a
    }

    function g(e) {
        At.test(e.type) && (e.defaultChecked = e.checked)
    }

    function _(e, t) {
        return at.nodeName(e, "table") && at.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== at.find.attr(e, "type")) + "/" + e.type, e
    }

    function y(e) {
        var t = Xt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) at._data(n, "globalEval", !t || at._data(t[i], "globalEval"))
    }

    function x(e, t) {
        if (1 === t.nodeType && at.hasData(e)) {
            var n, i, s, a = at._data(e),
                o = at._data(t, a),
                r = a.events;
            if (r) {
                delete o.handle, o.events = {};
                for (n in r)
                    for (i = 0, s = r[n].length; s > i; i++) at.event.add(t, n, r[n][i])
            }
            o.data && (o.data = at.extend({}, o.data))
        }
    }

    function T(e, t) {
        var n, i, s;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !it.noCloneEvent && t[at.expando]) {
                s = at._data(t);
                for (i in s.events) at.removeEvent(t, i, s.handle);
                t.removeAttribute(at.expando)
            }
            "script" === n && t.text !== e.text ? (b(t).text = e.text, y(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), it.html5Clone && e.innerHTML && !at.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && At.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function C(t, n) {
        var i = at(n.createElement(t)).appendTo(n.body),
            s = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(i[0]).display : at.css(i[0], "display");
        return i.detach(), s
    }

    function S(e) {
        var t = mt,
            n = en[e];
        return n || (n = C(e, t), "none" !== n && n || (Zt = (Zt || at("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Zt[0].contentWindow || Zt[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Zt.detach()), en[e] = n), n
    }

    function k(e, t) {
        return {
            get: function () {
                var n = e();
                if (null != n) return n ? (delete this.get, void 0) : (this.get = t).apply(this, arguments)
            }
        }
    }

    function M(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, s = fn.length; s--;)
            if (t = fn[s] + n, t in e) return t;
        return i
    }

    function E(e, t) {
        for (var n, i, s, a = [], o = 0, r = e.length; r > o; o++) i = e[o], i.style && (a[o] = at._data(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Dt(i) && (a[o] = at._data(i, "olddisplay", S(i.nodeName)))) : a[o] || (s = Dt(i), (n && "none" !== n || !s) && at._data(i, "olddisplay", s ? n : at.css(i, "display"))));
        for (o = 0; r > o; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
        return e
    }

    function D(e, t, n) {
        var i = dn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function N(e, t, n, i, s) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === n && (o += at.css(e, n + Et[a], !0, s)), i ? ("content" === n && (o -= at.css(e, "padding" + Et[a], !0, s)), "margin" !== n && (o -= at.css(e, "border" + Et[a] + "Width", !0, s))) : (o += at.css(e, "padding" + Et[a], !0, s), "padding" !== n && (o += at.css(e, "border" + Et[a] + "Width", !0, s)));
        return o
    }

    function A(e, t, n) {
        var i = !0,
            s = "width" === t ? e.offsetWidth : e.offsetHeight,
            a = tn(e),
            o = it.boxSizing() && "border-box" === at.css(e, "boxSizing", !1, a);
        if (0 >= s || null == s) {
            if (s = nn(e, t, a), (0 > s || null == s) && (s = e.style[t]), an.test(s)) return s;
            i = o && (it.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
        }
        return s + N(e, t, n || (o ? "border" : "content"), i, a) + "px"
    }

    function I(e, t, n, i, s) {
        return new I.prototype.init(e, t, n, i, s)
    }

    function R() {
        return setTimeout(function () {
            mn = void 0
        }), mn = at.now()
    }

    function F(e, t) {
        var n, i = {
                height: e
            }, s = 0;
        for (t = t ? 1 : 0; 4 > s; s += 2 - t) n = Et[s], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, n) {
        for (var i, s = (wn[t] || []).concat(wn["*"]), a = 0, o = s.length; o > a; a++)
            if (i = s[a].call(n, t, e)) return i
    }

    function O(e, t, n) {
        var i, s, a, o, r, c, l, d, u = this,
            h = {}, p = e.style,
            f = e.nodeType && Dt(e),
            m = at._data(e, "fxshow");
        n.queue || (r = at._queueHooks(e, "fx"), null == r.unqueued && (r.unqueued = 0, c = r.empty.fire, r.empty.fire = function () {
            r.unqueued || c()
        }), r.unqueued++, u.always(function () {
            u.always(function () {
                r.unqueued--, at.queue(e, "fx").length || r.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = at.css(e, "display"), d = S(e.nodeName), "none" === l && (l = d), "inline" === l && "none" === at.css(e, "float") && (it.inlineBlockNeedsLayout && "inline" !== d ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", it.shrinkWrapBlocks() || u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (s = t[i], gn.exec(s)) {
                if (delete t[i], a = a || "toggle" === s, s === (f ? "hide" : "show")) {
                    if ("show" !== s || !m || void 0 === m[i]) continue;
                    f = !0
                }
                h[i] = m && m[i] || at.style(e, i)
            }
        if (!at.isEmptyObject(h)) {
            m ? "hidden" in m && (f = m.hidden) : m = at._data(e, "fxshow", {}), a && (m.hidden = !f), f ? at(e).show() : u.done(function () {
                at(e).hide()
            }), u.done(function () {
                var t;
                at._removeData(e, "fxshow");
                for (t in h) at.style(e, t, h[t])
            });
            for (i in h) o = L(f ? m[i] : 0, i, u), i in m || (m[i] = o.start, f && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function j(e, t) {
        var n, i, s, a, o;
        for (n in e)
            if (i = at.camelCase(n), s = t[i], a = e[n], at.isArray(a) && (s = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), o = at.cssHooks[i], o && "expand" in o) {
                a = o.expand(a), delete e[i];
                for (n in a) n in e || (e[n] = a[n], t[n] = s)
            } else t[i] = s
    }

    function P(e, t, n) {
        var i, s, a = 0,
            o = yn.length,
            r = at.Deferred().always(function () {
                delete c.elem
            }),
            c = function () {
                if (s) return !1;
                for (var t = mn || R(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, a = 1 - i, o = 0, c = l.tweens.length; c > o; o++) l.tweens[o].run(a);
                return r.notifyWith(e, [l, a, n]), 1 > a && c ? n : (r.resolveWith(e, [l]), !1)
            }, l = r.promise({
                elem: e,
                props: at.extend({}, t),
                opts: at.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: mn || R(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = at.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? l.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i > n; n++) l.tweens[n].run(1);
                    return t ? r.resolveWith(e, [l, t]) : r.rejectWith(e, [l, t]), this
                }
            }),
            d = l.props;
        for (j(d, l.opts.specialEasing); o > a; a++)
            if (i = yn[a].call(l, e, d, l.opts)) return i;
        return at.map(d, L, l), at.isFunction(l.opts.start) && l.opts.start.call(e, l), at.fx.timer(at.extend(c, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function $(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, s = 0,
                a = t.toLowerCase().match(yt) || [];
            if (at.isFunction(n))
                for (; i = a[s++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function B(e, t, n, i) {
        function s(r) {
            var c;
            return a[r] = !0, at.each(e[r] || [], function (e, r) {
                var l = r(t, n, i);
                return "string" != typeof l || o || a[l] ? o ? !(c = l) : void 0 : (t.dataTypes.unshift(l), s(l), !1)
            }), c
        }
        var a = {}, o = e === Wn;
        return s(t.dataTypes[0]) || !a["*"] && s("*")
    }

    function H(e, t) {
        var n, i, s = at.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
        return n && at.extend(!0, e, n), e
    }

    function U(e, t, n) {
        for (var i, s, a, o, r = e.contents, c = e.dataTypes;
            "*" === c[0];) c.shift(), void 0 === s && (s = e.mimeType || t.getResponseHeader("Content-Type"));
        if (s)
            for (o in r)
                if (r[o] && r[o].test(s)) {
                    c.unshift(o);
                    break
                }
        if (c[0] in n) a = c[0];
        else {
            for (o in n) {
                if (!c[0] || e.converters[o + " " + c[0]]) {
                    a = o;
                    break
                }
                i || (i = o)
            }
            a = a || i
        }
        return a ? (a !== c[0] && c.unshift(a), n[a]) : void 0
    }

    function V(e, t, n, i) {
        var s, a, o, r, c, l = {}, d = e.dataTypes.slice();
        if (d[1])
            for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
        for (a = d.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = a, a = d.shift())
                if ("*" === a) a = c;
                else if ("*" !== c && c !== a) {
            if (o = l[c + " " + a] || l["* " + a], !o)
                for (s in l)
                    if (r = s.split(" "), r[1] === a && (o = l[c + " " + r[0]] || l["* " + r[0]])) {
                        o === !0 ? o = l[s] : l[s] !== !0 && (a = r[0], d.unshift(r[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: o ? u : "No conversion from " + c + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function q(e, t, n, i) {
        var s;
        if (at.isArray(t)) at.each(t, function (t, s) {
            n || Kn.test(e) ? i(e, s) : q(e + "[" + ("object" == typeof s ? t : "") + "]", s, n, i)
        });
        else if (n || "object" !== at.type(t)) i(e, t);
        else
            for (s in t) q(e + "[" + s + "]", t[s], n, i)
    }

    function W() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function z() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Q(e) {
        return at.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var X = [],
        K = X.slice,
        J = X.concat,
        Y = X.push,
        G = X.indexOf,
        Z = {}, et = Z.toString,
        tt = Z.hasOwnProperty,
        nt = "".trim,
        it = {}, st = "1.11.0",
        at = function (e, t) {
            return new at.fn.init(e, t)
        }, ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rt = /^-ms-/,
        ct = /-([\da-z])/gi,
        lt = function (e, t) {
            return t.toUpperCase()
        };
    at.fn = at.prototype = {
        jquery: st,
        constructor: at,
        selector: "",
        length: 0,
        toArray: function () {
            return K.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
        },
        pushStack: function (e) {
            var t = at.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return at.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(at.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Y,
        sort: X.sort,
        splice: X.splice
    }, at.extend = at.fn.extend = function () {
        var e, t, n, i, s, a, o = arguments[0] || {}, r = 1,
            c = arguments.length,
            l = !1;
        for ("boolean" == typeof o && (l = o, o = arguments[r] || {}, r++), "object" == typeof o || at.isFunction(o) || (o = {}), r === c && (o = this, r--); c > r; r++)
            if (null != (s = arguments[r]))
                for (i in s) e = o[i], n = s[i], o !== n && (l && n && (at.isPlainObject(n) || (t = at.isArray(n))) ? (t ? (t = !1, a = e && at.isArray(e) ? e : []) : a = e && at.isPlainObject(e) ? e : {}, o[i] = at.extend(l, a, n)) : void 0 !== n && (o[i] = n));
        return o
    }, at.extend({
        expando: "jQuery" + (st + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === at.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === at.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== at.type(e) || e.nodeType || at.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (it.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        },
        globalEval: function (t) {
            t && at.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(rt, "ms-").replace(ct, lt)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, i) {
            var s, a = 0,
                o = e.length,
                r = n(e);
            if (i) {
                if (r)
                    for (; o > a && (s = t.apply(e[a], i), s !== !1); a++);
                else
                    for (a in e)
                        if (s = t.apply(e[a], i), s === !1) break
            } else if (r)
                for (; o > a && (s = t.call(e[a], a, e[a]), s !== !1); a++);
            else
                for (a in e)
                    if (s = t.call(e[a], a, e[a]), s === !1) break; return e
        },
        trim: nt && !nt.call("﻿ ") ? function (e) {
            return null == e ? "" : nt.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(ot, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? at.merge(i, "string" == typeof e ? [e] : e) : Y.call(i, e)), i
        },
        inArray: function (e, t, n) {
            var i;
            if (t) {
                if (G) return G.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, s = e.length; n > i;) e[s++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[s++] = t[i++];
            return e.length = s, e
        },
        grep: function (e, t, n) {
            for (var i, s = [], a = 0, o = e.length, r = !n; o > a; a++) i = !t(e[a], a), i !== r && s.push(e[a]);
            return s
        },
        map: function (e, t, i) {
            var s, a = 0,
                o = e.length,
                r = n(e),
                c = [];
            if (r)
                for (; o > a; a++) s = t(e[a], a, i), null != s && c.push(s);
            else
                for (a in e) s = t(e[a], a, i), null != s && c.push(s);
            return J.apply([], c)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, s;
            return "string" == typeof t && (s = e[t], t = e, e = s), at.isFunction(e) ? (n = K.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat(K.call(arguments)))
            }, i.guid = e.guid = e.guid || at.guid++, i) : void 0
        },
        now: function () {
            return +new Date
        },
        support: it
    }), at.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var dt =
    /*!
     * Sizzle CSS Selector Engine v1.10.16
     * http://sizzlejs.com/
     *
     * Copyright 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2014-01-13
     */
    function (e) {
        function t(e, t, n, i) {
            var s, a, o, r, c, l, u, f, m, v;
            if ((t ? t.ownerDocument || t : B) !== I && A(t), t = t || I, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (r = t.nodeType) && 9 !== r) return [];
            if (F && !i) {
                if (s = _t.exec(e))
                    if (o = s[1]) {
                        if (9 === r) {
                            if (a = t.getElementById(o), !a || !a.parentNode) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && P(t, a) && a.id === o) return n.push(a), n
                    } else {
                        if (s[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = s[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(o)), n
                    }
                if (T.qsa && (!L || !L.test(e))) {
                    if (f = u = $, m = t, v = 9 === r && e, 1 === r && "object" !== t.nodeName.toLowerCase()) {
                        for (l = h(e), (u = t.getAttribute("id")) ? f = u.replace(yt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", c = l.length; c--;) l[c] = f + p(l[c]);
                        m = bt.test(e) && d(t.parentNode) || t, v = l.join(",")
                    }
                    if (v) try {
                        return Z.apply(n, m.querySelectorAll(v)), n
                    } catch (g) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return w(e.replace(ct, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[$] = !0, e
        }

        function s(e) {
            var t = I.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) C.attrHandle[n[i]] = t
        }

        function o(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function r(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function c(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var s, a = e([], n.length, t), o = a.length; o--;) n[s = a[o]] && (n[s] = !(i[s] = n[s]))
                })
            })
        }

        function d(e) {
            return e && typeof e.getElementsByTagName !== Q && e
        }

        function u() {}

        function h(e, n) {
            var i, s, a, o, r, c, l, d = q[e + " "];
            if (d) return n ? 0 : d.slice(0);
            for (r = e, c = [], l = C.preFilter; r;) {
                (!i || (s = lt.exec(r))) && (s && (r = r.slice(s[0].length) || r), c.push(a = [])), i = !1, (s = dt.exec(r)) && (i = s.shift(), a.push({
                    value: i,
                    type: s[0].replace(ct, " ")
                }), r = r.slice(i.length));
                for (o in C.filter)!(s = ft[o].exec(r)) || l[o] && !(s = l[o](s)) || (i = s.shift(), a.push({
                    value: i,
                    type: o,
                    matches: s
                }), r = r.slice(i.length));
                if (!i) break
            }
            return n ? r.length : r ? t.error(e) : q(e, c).slice(0)
        }

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                s = n && "parentNode" === i,
                a = U++;
            return t.first ? function (t, n, a) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, a)
            } : function (t, n, o) {
                var r, c, l = [H, a];
                if (o) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, o)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s) {
                            if (c = t[$] || (t[$] = {}), (r = c[i]) && r[0] === H && r[1] === a) return l[2] = r[2];
                            if (c[i] = l, l[2] = e(t, n, o)) return !0
                        }
            }
        }

        function m(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var s = e.length; s--;)
                    if (!e[s](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function v(e, t, n, i, s) {
            for (var a, o = [], r = 0, c = e.length, l = null != t; c > r; r++)(a = e[r]) && (!n || n(a, i, s)) && (o.push(a), l && t.push(r));
            return o
        }

        function g(e, t, n, s, a, o) {
            return s && !s[$] && (s = g(s)), a && !a[$] && (a = g(a, o)), i(function (i, o, r, c) {
                var l, d, u, h = [],
                    p = [],
                    f = o.length,
                    m = i || y(t || "*", r.nodeType ? [r] : r, []),
                    g = !e || !i && t ? m : v(m, h, e, r, c),
                    _ = n ? a || (i ? e : f || s) ? [] : o : g;
                if (n && n(g, _, r, c), s)
                    for (l = v(_, p), s(l, [], r, c), d = l.length; d--;)(u = l[d]) && (_[p[d]] = !(g[p[d]] = u));
                if (i) {
                    if (a || e) {
                        if (a) {
                            for (l = [], d = _.length; d--;)(u = _[d]) && l.push(g[d] = u);
                            a(null, _ = [], l, c)
                        }
                        for (d = _.length; d--;)(u = _[d]) && (l = a ? tt.call(i, u) : h[d]) > -1 && (i[l] = !(o[l] = u))
                    }
                } else _ = v(_ === o ? _.splice(f, _.length) : _), a ? a(null, o, _, c) : Z.apply(o, _)
            })
        }

        function _(e) {
            for (var t, n, i, s = e.length, a = C.relative[e[0].type], o = a || C.relative[" "], r = a ? 1 : 0, c = f(function (e) {
                    return e === t
                }, o, !0), l = f(function (e) {
                    return tt.call(t, e) > -1
                }, o, !0), d = [
                    function (e, n, i) {
                        return !a && (i || n !== E) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i))
                    }
                ]; s > r; r++)
                if (n = C.relative[e[r].type]) d = [f(m(d), n)];
                else {
                    if (n = C.filter[e[r].type].apply(null, e[r].matches), n[$]) {
                        for (i = ++r; s > i && !C.relative[e[i].type]; i++);
                        return g(r > 1 && m(d), r > 1 && p(e.slice(0, r - 1).concat({
                            value: " " === e[r - 2].type ? "*" : ""
                        })).replace(ct, "$1"), n, i > r && _(e.slice(r, i)), s > i && _(e = e.slice(i)), s > i && p(e))
                    }
                    d.push(n)
                }
            return m(d)
        }

        function b(e, n) {
            var s = n.length > 0,
                a = e.length > 0,
                o = function (i, o, r, c, l) {
                    var d, u, h, p = 0,
                        f = "0",
                        m = i && [],
                        g = [],
                        _ = E,
                        b = i || a && C.find.TAG("*", l),
                        y = H += null == _ ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (E = o !== I && o); f !== w && null != (d = b[f]); f++) {
                        if (a && d) {
                            for (u = 0; h = e[u++];)
                                if (h(d, o, r)) {
                                    c.push(d);
                                    break
                                }
                            l && (H = y)
                        }
                        s && ((d = !h && d) && p--, i && m.push(d))
                    }
                    if (p += f, s && f !== p) {
                        for (u = 0; h = n[u++];) h(m, g, o, r);
                        if (i) {
                            if (p > 0)
                                for (; f--;) m[f] || g[f] || (g[f] = Y.call(c));
                            g = v(g)
                        }
                        Z.apply(c, g), l && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                    }
                    return l && (H = y, E = _), m
                };
            return s ? i(o) : o
        }

        function y(e, n, i) {
            for (var s = 0, a = n.length; a > s; s++) t(e, n[s], i);
            return i
        }

        function w(e, t, n, i) {
            var s, a, o, r, c, l = h(e);
            if (!i && 1 === l.length) {
                if (a = l[0] = l[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && T.getById && 9 === t.nodeType && F && C.relative[a[1].type]) {
                    if (t = (C.find.ID(o.matches[0].replace(wt, xt), t) || [])[0], !t) return n;
                    e = e.slice(a.shift().value.length)
                }
                for (s = ft.needsContext.test(e) ? 0 : a.length; s-- && (o = a[s], !C.relative[r = o.type]);)
                    if ((c = C.find[r]) && (i = c(o.matches[0].replace(wt, xt), bt.test(a[0].type) && d(t.parentNode) || t))) {
                        if (a.splice(s, 1), e = i.length && p(a), !e) return Z.apply(n, i), n;
                        break
                    }
            }
            return M(e, l)(i, t, !F, n, bt.test(e) && d(t.parentNode) || t), n
        }
        var x, T, C, S, k, M, E, D, N, A, I, R, F, L, O, j, P, $ = "sizzle" + -new Date,
            B = e.document,
            H = 0,
            U = 0,
            V = n(),
            q = n(),
            W = n(),
            z = function (e, t) {
                return e === t && (N = !0), 0
            }, Q = "undefined",
            X = 1 << 31,
            K = {}.hasOwnProperty,
            J = [],
            Y = J.pop,
            G = J.push,
            Z = J.push,
            et = J.slice,
            tt = J.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            at = st.replace("w", "w#"),
            ot = "\\[" + it + "*(" + st + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]",
            rt = ":(" + st + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ot.replace(3, 8) + ")*)|.*)\\)|)",
            ct = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            lt = new RegExp("^" + it + "*," + it + "*"),
            dt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            ht = new RegExp(rt),
            pt = new RegExp("^" + at + "$"),
            ft = {
                ID: new RegExp("^#(" + st + ")"),
                CLASS: new RegExp("^\\.(" + st + ")"),
                TAG: new RegExp("^(" + st.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            }, mt = /^(?:input|select|textarea|button)$/i,
            vt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            yt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            xt = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
            };
        try {
            Z.apply(J = et.call(B.childNodes), B.childNodes), J[B.childNodes.length].nodeType
        } catch (Tt) {
            Z = {
                apply: J.length ? function (e, t) {
                    G.apply(e, et.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        T = t.support = {}, k = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, A = t.setDocument = function (e) {
            var t, n = e ? e.ownerDocument || e : B,
                i = n.defaultView;
            return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, R = n.documentElement, F = !k(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
                A()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
                A()
            })), T.attributes = s(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), T.getElementsByTagName = s(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = gt.test(n.getElementsByClassName) && s(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), T.getById = s(function (e) {
                return R.appendChild(e).id = $, !n.getElementsByName || !n.getElementsByName($).length
            }), T.getById ? (C.find.ID = function (e, t) {
                if (typeof t.getElementById !== Q && F) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function (e) {
                var t = e.replace(wt, xt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function (e) {
                var t = e.replace(wt, xt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== Q && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = T.getElementsByTagName ? function (e, t) {
                return typeof t.getElementsByTagName !== Q ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    s = 0,
                    a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[s++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            }, C.find.CLASS = T.getElementsByClassName && function (e, t) {
                return typeof t.getElementsByClassName !== Q && F ? t.getElementsByClassName(e) : void 0
            }, O = [], L = [], (T.qsa = gt.test(n.querySelectorAll)) && (s(function (e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && L.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + it + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || L.push(":checked")
            }), s(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + it + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (T.matchesSelector = gt.test(j = R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && s(function (e) {
                T.disconnectedMatch = j.call(e, "div"), j.call(e, "[s!='']:x"), O.push("!=", rt)
            }), L = L.length && new RegExp(L.join("|")), O = O.length && new RegExp(O.join("|")), t = gt.test(R.compareDocumentPosition), P = t || gt.test(R.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, z = t ? function (e, t) {
                if (e === t) return N = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !T.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === B && P(B, e) ? -1 : t === n || t.ownerDocument === B && P(B, t) ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return N = !0, 0;
                var i, s = 0,
                    a = e.parentNode,
                    r = t.parentNode,
                    c = [e],
                    l = [t];
                if (!a || !r) return e === n ? -1 : t === n ? 1 : a ? -1 : r ? 1 : D ? tt.call(D, e) - tt.call(D, t) : 0;
                if (a === r) return o(e, t);
                for (i = e; i = i.parentNode;) c.unshift(i);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (; c[s] === l[s];) s++;
                return s ? o(c[s], l[s]) : c[s] === B ? -1 : l[s] === B ? 1 : 0
            }, n) : I
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== I && A(e), n = n.replace(ut, "='$1']"), !(!T.matchesSelector || !F || O && O.test(n) || L && L.test(n))) try {
                var i = j.call(e, n);
                if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (s) {}
            return t(n, I, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== I && A(e), P(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== I && A(e);
            var n = C.attrHandle[t.toLowerCase()],
                i = n && K.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
            return void 0 !== i ? i : T.attributes || !F ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                s = 0;
            if (N = !T.detectDuplicates, D = !T.sortStable && e.slice(0), e.sort(z), N) {
                for (; t = e[s++];) t === e[s] && (i = n.push(s));
                for (; i--;) e.splice(n[i], 1)
            }
            return D = null, e
        }, S = t.getText = function (e) {
            var t, n = "",
                i = 0,
                s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                } else if (3 === s || 4 === s) return e.nodeValue
            } else
                for (; t = e[i++];) n += S(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(wt, xt), e[3] = (e[4] || e[5] || "").replace(wt, xt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return ft.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && ht.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(wt, xt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = V[e + " "];
                    return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && V(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Q && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (s) {
                        var a = t.attr(s, e);
                        return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, i, s) {
                    var a = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        r = "of-type" === t;
                    return 1 === i && 0 === s ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, c) {
                        var l, d, u, h, p, f, m = a !== o ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = r && t.nodeName.toLowerCase(),
                            _ = !c && !r;
                        if (v) {
                            if (a) {
                                for (; m;) {
                                    for (u = t; u = u[m];)
                                        if (r ? u.nodeName.toLowerCase() === g : 1 === u.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? v.firstChild : v.lastChild], o && _) {
                                for (d = v[$] || (v[$] = {}), l = d[e] || [], p = l[0] === H && l[1], h = l[0] === H && l[2], u = p && v.childNodes[p]; u = ++p && u && u[m] || (h = p = 0) || f.pop();)
                                    if (1 === u.nodeType && ++h && u === t) {
                                        d[e] = [H, p, h];
                                        break
                                    }
                            } else if (_ && (l = (t[$] || (t[$] = {}))[e]) && l[0] === H) h = l[1];
                            else
                                for (;
                                    (u = ++p && u && u[m] || (h = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== g : 1 !== u.nodeType) || !++h || (_ && ((u[$] || (u[$] = {}))[e] = [H, h]), u !== t)););
                            return h -= s, h === i || 0 === h % i && h / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var s, a = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[$] ? a(n) : a.length > 1 ? (s = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, s = a(e, n), o = s.length; o--;) i = tt.call(e, s[o]), e[i] = !(t[i] = s[o])
                    }) : function (e) {
                        return a(e, 0, s)
                    }) : a
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        s = M(e.replace(ct, "$1"));
                    return s[$] ? i(function (e, t, n, i) {
                        for (var a, o = s(e, null, i, []), r = e.length; r--;)(a = o[r]) && (e[r] = !(t[r] = a))
                    }) : function (e, i, a) {
                        return t[0] = e, s(t, null, a, n), !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function (e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, xt).toLowerCase(),
                    function (t) {
                        var n;
                        do
                            if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === R
                },
                focus: function (e) {
                    return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !C.pseudos.empty(e)
                },
                header: function (e) {
                    return vt.test(e.nodeName)
                },
                input: function (e) {
                    return mt.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function () {
                    return [0]
                }),
                last: l(function (e, t) {
                    return [t - 1]
                }),
                eq: l(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: l(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[x] = r(x);
        for (x in {
            submit: !0,
            reset: !0
        }) C.pseudos[x] = c(x);
        return u.prototype = C.filters = C.pseudos, C.setFilters = new u, M = t.compile = function (e, t) {
            var n, i = [],
                s = [],
                a = W[e + " "];
            if (!a) {
                for (t || (t = h(e)), n = t.length; n--;) a = _(t[n]), a[$] ? i.push(a) : s.push(a);
                a = W(e, b(s, i))
            }
            return a
        }, T.sortStable = $.split("").sort(z).join("") === $, T.detectDuplicates = !! N, A(), T.sortDetached = s(function (e) {
            return 1 & e.compareDocumentPosition(I.createElement("div"))
        }), s(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), T.attributes && s(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), s(function (e) {
            return null == e.getAttribute("disabled")
        }) || a(nt, function (e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    at.find = dt, at.expr = dt.selectors, at.expr[":"] = at.expr.pseudos, at.unique = dt.uniqueSort, at.text = dt.getText, at.isXMLDoc = dt.isXML, at.contains = dt.contains;
    var ut = at.expr.match.needsContext,
        ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pt = /^.[^:#\[\.,]*$/;
    at.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? at.find.matchesSelector(i, e) ? [i] : [] : at.find.matches(e, at.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, at.fn.extend({
        find: function (e) {
            var t, n = [],
                i = this,
                s = i.length;
            if ("string" != typeof e) return this.pushStack(at(e).filter(function () {
                for (t = 0; s > t; t++)
                    if (at.contains(i[t], this)) return !0
            }));
            for (t = 0; s > t; t++) at.find(e, i[t], n);
            return n = this.pushStack(s > 1 ? at.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function (e) {
            return !!i(this, "string" == typeof e && ut.test(e) ? at(e) : e || [], !1).length
        }
    });
    var ft, mt = e.document,
        vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = at.fn.init = function (e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : vt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ft).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof at ? t[0] : t, at.merge(this, at.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : mt, !0)), ht.test(n[1]) && at.isPlainObject(t))
                        for (n in t) at.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = mt.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return ft.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = mt, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : at.isFunction(e) ? "undefined" != typeof ft.ready ? ft.ready(e) : e(at) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), at.makeArray(e, this))
        };
    gt.prototype = at.fn, ft = at(mt);
    var _t = /^(?:parents|prev(?:Until|All))/,
        bt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    at.extend({
        dir: function (e, t, n) {
            for (var i = [], s = e[t]; s && 9 !== s.nodeType && (void 0 === n || 1 !== s.nodeType || !at(s).is(n));) 1 === s.nodeType && i.push(s), s = s[t];
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), at.fn.extend({
        has: function (e) {
            var t, n = at(e, this),
                i = n.length;
            return this.filter(function () {
                for (t = 0; i > t; t++)
                    if (at.contains(this, n[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, s = this.length, a = [], o = ut.test(e) || "string" != typeof e ? at(e, t || this.context) : 0; s > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && at.find.matchesSelector(n, e))) {
                        a.push(n);
                        break
                    }
            return this.pushStack(a.length > 1 ? at.unique(a) : a)
        },
        index: function (e) {
            return e ? "string" == typeof e ? at.inArray(this[0], at(e)) : at.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(at.unique(at.merge(this.get(), at(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), at.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return at.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return at.dir(e, "parentNode", n)
        },
        next: function (e) {
            return s(e, "nextSibling")
        },
        prev: function (e) {
            return s(e, "previousSibling")
        },
        nextAll: function (e) {
            return at.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return at.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return at.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return at.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return at.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return at.sibling(e.firstChild)
        },
        contents: function (e) {
            return at.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : at.merge([], e.childNodes)
        }
    }, function (e, t) {
        at.fn[e] = function (n, i) {
            var s = at.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (s = at.filter(i, s)), this.length > 1 && (bt[e] || (s = at.unique(s)), _t.test(e) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var yt = /\S+/g,
        wt = {};
    at.Callbacks = function (e) {
        e = "string" == typeof e ? wt[e] || a(e) : at.extend({}, e);
        var t, n, i, s, o, r, c = [],
            l = !e.once && [],
            d = function (a) {
                for (n = e.memory && a, i = !0, o = r || 0, r = 0, s = c.length, t = !0; c && s > o; o++)
                    if (c[o].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, c && (l ? l.length && d(l.shift()) : n ? c = [] : u.disable())
            }, u = {
                add: function () {
                    if (c) {
                        var i = c.length;
                        ! function a(t) {
                            at.each(t, function (t, n) {
                                var i = at.type(n);
                                "function" === i ? e.unique && u.has(n) || c.push(n) : n && n.length && "string" !== i && a(n)
                            })
                        }(arguments), t ? s = c.length : n && (r = i, d(n))
                    }
                    return this
                },
                remove: function () {
                    return c && at.each(arguments, function (e, n) {
                        for (var i;
                            (i = at.inArray(n, c, i)) > -1;) c.splice(i, 1), t && (s >= i && s--, o >= i && o--)
                    }), this
                },
                has: function (e) {
                    return e ? at.inArray(e, c) > -1 : !(!c || !c.length)
                },
                empty: function () {
                    return c = [], s = 0, this
                },
                disable: function () {
                    return c = l = n = void 0, this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    return l = void 0, n || u.disable(), this
                },
                locked: function () {
                    return !l
                },
                fireWith: function (e, n) {
                    return !c || i && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : d(n)), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return u
    }, at.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", at.Callbacks("once memory"), "resolved"],
                ["reject", "fail", at.Callbacks("once memory"), "rejected"],
                ["notify", "progress", at.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return at.Deferred(function (n) {
                            at.each(t, function (t, a) {
                                var o = at.isFunction(e[t]) && e[t];
                                s[a[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && at.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? at.extend(e, i) : i
                    }
                }, s = {};
            return i.pipe = i.then, at.each(t, function (e, a) {
                var o = a[2],
                    r = a[3];
                i[a[1]] = o.add, r && o.add(function () {
                    n = r
                }, t[1 ^ e][2].disable, t[2][2].lock), s[a[0]] = function () {
                    return s[a[0] + "With"](this === s ? i : this, arguments), this
                }, s[a[0] + "With"] = o.fireWith
            }), i.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
            var t, n, i, s = 0,
                a = K.call(arguments),
                o = a.length,
                r = 1 !== o || e && at.isFunction(e.promise) ? o : 0,
                c = 1 === r ? e : at.Deferred(),
                l = function (e, n, i) {
                    return function (s) {
                        n[e] = this, i[e] = arguments.length > 1 ? K.call(arguments) : s, i === t ? c.notifyWith(n, i) : --r || c.resolveWith(n, i)
                    }
                };
            if (o > 1)
                for (t = new Array(o), n = new Array(o), i = new Array(o); o > s; s++) a[s] && at.isFunction(a[s].promise) ? a[s].promise().done(l(s, i, a)).fail(c.reject).progress(l(s, n, t)) : --r;
            return r || c.resolveWith(i, a), c.promise()
        }
    });
    var xt;
    at.fn.ready = function (e) {
        return at.ready.promise().done(e), this
    }, at.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? at.readyWait++ : at.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--at.readyWait : !at.isReady) {
                if (!mt.body) return setTimeout(at.ready);
                at.isReady = !0, e !== !0 && --at.readyWait > 0 || (xt.resolveWith(mt, [at]), at.fn.trigger && at(mt).trigger("ready").off("ready"))
            }
        }
    }), at.ready.promise = function (t) {
        if (!xt)
            if (xt = at.Deferred(), "complete" === mt.readyState) setTimeout(at.ready);
            else if (mt.addEventListener) mt.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", r, !1);
        else {
            mt.attachEvent("onreadystatechange", r), e.attachEvent("onload", r);
            var n = !1;
            try {
                n = null == e.frameElement && mt.documentElement
            } catch (i) {}
            n && n.doScroll && function s() {
                if (!at.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(s, 50)
                    }
                    o(), at.ready()
                }
            }()
        }
        return xt.promise(t)
    };
    var Tt, Ct = "undefined";
    for (Tt in at(it)) break;
    it.ownLast = "0" !== Tt, it.inlineBlockNeedsLayout = !1, at(function () {
        var e, t, n = mt.getElementsByTagName("body")[0];
        n && (e = mt.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = mt.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== Ct && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (it.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
    }),
    function () {
        var e = mt.createElement("div");
        if (null == it.deleteExpando) {
            it.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                it.deleteExpando = !1
            }
        }
        e = null
    }(), at.acceptData = function (e) {
        var t = at.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        kt = /([A-Z])/g;
    at.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? at.cache[e[at.expando]] : e[at.expando], !! e && !l(e)
        },
        data: function (e, t, n) {
            return d(e, t, n)
        },
        removeData: function (e, t) {
            return u(e, t)
        },
        _data: function (e, t, n) {
            return d(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return u(e, t, !0)
        }
    }), at.fn.extend({
        data: function (e, t) {
            var n, i, s, a = this[0],
                o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (s = at.data(a), 1 === a.nodeType && !at._data(a, "parsedAttrs"))) {
                    for (n = o.length; n--;) i = o[n].name, 0 === i.indexOf("data-") && (i = at.camelCase(i.slice(5)), c(a, i, s[i]));
                    at._data(a, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function () {
                at.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                at.data(this, e, t)
            }) : a ? c(a, e, at.data(a, e)) : void 0
        },
        removeData: function (e) {
            return this.each(function () {
                at.removeData(this, e)
            })
        }
    }), at.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = at._data(e, t), n && (!i || at.isArray(n) ? i = at._data(e, t, at.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = at.queue(e, t),
                i = n.length,
                s = n.shift(),
                a = at._queueHooks(e, t),
                o = function () {
                    at.dequeue(e, t)
                };
            "inprogress" === s && (s = n.shift(), i--), s && ("fx" === t && n.unshift("inprogress"), delete a.stop, s.call(e, o, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return at._data(e, n) || at._data(e, n, {
                empty: at.Callbacks("once memory").add(function () {
                    at._removeData(e, t + "queue"), at._removeData(e, n)
                })
            })
        }
    }), at.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? at.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = at.queue(this, e, t);
                at._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && at.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                at.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                s = at.Deferred(),
                a = this,
                o = this.length,
                r = function () {
                    --i || s.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = at._data(a[o], e + "queueHooks"), n && n.empty && (i++, n.empty.add(r));
            return r(), s.promise(t)
        }
    });
    var Mt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Et = ["Top", "Right", "Bottom", "Left"],
        Dt = function (e, t) {
            return e = t || e, "none" === at.css(e, "display") || !at.contains(e.ownerDocument, e)
        }, Nt = at.access = function (e, t, n, i, s, a, o) {
            var r = 0,
                c = e.length,
                l = null == n;
            if ("object" === at.type(n)) {
                s = !0;
                for (r in n) at.access(e, t, r, n[r], !0, a, o)
            } else if (void 0 !== i && (s = !0, at.isFunction(i) || (o = !0), l && (o ? (t.call(e, i), t = null) : (l = t, t = function (e, t, n) {
                return l.call(at(e), n)
            })), t))
                for (; c > r; r++) t(e[r], n, o ? i : i.call(e[r], r, t(e[r], n)));
            return s ? e : l ? t.call(e) : c ? t(e[0], n) : a
        }, At = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = mt.createDocumentFragment(),
            t = mt.createElement("div"),
            n = mt.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", it.leadingWhitespace = 3 === t.firstChild.nodeType, it.tbody = !t.getElementsByTagName("tbody").length, it.htmlSerialize = !! t.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== mt.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), it.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
            it.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == it.deleteExpando) {
            it.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                it.deleteExpando = !1
            }
        }
        e = t = n = null
    }(),
    function () {
        var t, n, i = mt.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t, (it[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), it[t + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var It = /^(?:input|select|textarea)$/i,
        Rt = /^key/,
        Ft = /^(?:mouse|contextmenu)|click/,
        Lt = /^(?:focusinfocus|focusoutblur)$/,
        Ot = /^([^.]*)(?:\.(.+)|)$/;
    at.event = {
        global: {},
        add: function (e, t, n, i, s) {
            var a, o, r, c, l, d, u, h, p, f, m, v = at._data(e);
            if (v) {
                for (n.handler && (c = n, n = c.handler, s = c.selector), n.guid || (n.guid = at.guid++), (o = v.events) || (o = v.events = {}), (d = v.handle) || (d = v.handle = function (e) {
                    return typeof at === Ct || e && at.event.triggered === e.type ? void 0 : at.event.dispatch.apply(d.elem, arguments)
                }, d.elem = e), t = (t || "").match(yt) || [""], r = t.length; r--;) a = Ot.exec(t[r]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (l = at.event.special[p] || {}, p = (s ? l.delegateType : l.bindType) || p, l = at.event.special[p] || {}, u = at.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: s,
                    needsContext: s && at.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, c), (h = o[p]) || (h = o[p] = [], h.delegateCount = 0, l.setup && l.setup.call(e, i, f, d) !== !1 || (e.addEventListener ? e.addEventListener(p, d, !1) : e.attachEvent && e.attachEvent("on" + p, d))), l.add && (l.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), s ? h.splice(h.delegateCount++, 0, u) : h.push(u), at.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, s) {
            var a, o, r, c, l, d, u, h, p, f, m, v = at.hasData(e) && at._data(e);
            if (v && (d = v.events)) {
                for (t = (t || "").match(yt) || [""], l = t.length; l--;)
                    if (r = Ot.exec(t[l]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
                        for (u = at.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, h = d[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = a = h.length; a--;) o = h[a], !s && m !== o.origType || n && n.guid !== o.guid || r && !r.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (h.splice(a, 1), o.selector && h.delegateCount--, u.remove && u.remove.call(e, o));
                        c && !h.length && (u.teardown && u.teardown.call(e, f, v.handle) !== !1 || at.removeEvent(e, p, v.handle), delete d[p])
                    } else
                        for (p in d) at.event.remove(e, p + t[l], n, i, !0);
                at.isEmptyObject(d) && (delete v.handle, at._removeData(e, "events"))
            }
        },
        trigger: function (t, n, i, s) {
            var a, o, r, c, l, d, u, h = [i || mt],
                p = tt.call(t, "type") ? t.type : t,
                f = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = d = i = i || mt, 3 !== i.nodeType && 8 !== i.nodeType && !Lt.test(p + at.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, t = t[at.expando] ? t : new at.Event(p, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : at.makeArray(n, [t]), l = at.event.special[p] || {}, s || !l.trigger || l.trigger.apply(i, n) !== !1)) {
                if (!s && !l.noBubble && !at.isWindow(i)) {
                    for (c = l.delegateType || p, Lt.test(c + p) || (r = r.parentNode); r; r = r.parentNode) h.push(r), d = r;
                    d === (i.ownerDocument || mt) && h.push(d.defaultView || d.parentWindow || e)
                }
                for (u = 0;
                    (r = h[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? c : l.bindType || p, a = (at._data(r, "events") || {})[t.type] && at._data(r, "handle"), a && a.apply(r, n), a = o && r[o], a && a.apply && at.acceptData(r) && (t.result = a.apply(r, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !s && !t.isDefaultPrevented() && (!l._default || l._default.apply(h.pop(), n) === !1) && at.acceptData(i) && o && i[p] && !at.isWindow(i)) {
                    d = i[o], d && (i[o] = null), at.event.triggered = p;
                    try {
                        i[p]()
                    } catch (m) {}
                    at.event.triggered = void 0, d && (i[o] = d)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = at.event.fix(e);
            var t, n, i, s, a, o = [],
                r = K.call(arguments),
                c = (at._data(this, "events") || {})[e.type] || [],
                l = at.event.special[e.type] || {};
            if (r[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (o = at.event.handlers.call(this, e, c), t = 0;
                    (s = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = s.elem, a = 0;
                        (i = s.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((at.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, r), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, s, a, o = [],
                r = t.delegateCount,
                c = e.target;
            if (r && c.nodeType && (!e.button || "click" !== e.type))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                        for (s = [], a = 0; r > a; a++) i = t[a], n = i.selector + " ", void 0 === s[n] && (s[n] = i.needsContext ? at(n, this).index(c) >= 0 : at.find(n, this, null, [c]).length), s[n] && s.push(i);
                        s.length && o.push({
                            elem: c,
                            handlers: s
                        })
                    }
            return r < t.length && o.push({
                elem: this,
                handlers: t.slice(r)
            }), o
        },
        fix: function (e) {
            if (e[at.expando]) return e;
            var t, n, i, s = e.type,
                a = e,
                o = this.fixHooks[s];
            for (o || (this.fixHooks[s] = o = Ft.test(s) ? this.mouseHooks : Rt.test(s) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new at.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
            return e.target || (e.target = a.srcElement || mt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, o.filter ? o.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, s, a = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || mt, s = i.documentElement, n = i.body, e.pageX = t.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return at.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return at.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var s = at.extend(new at.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? at.event.trigger(s, null, t) : at.event.dispatch.call(t, s), s.isDefaultPrevented() && n.preventDefault()
        }
    }, at.removeEvent = mt.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Ct && (e[i] = null), e.detachEvent(i, n))
    }, at.Event = function (e, t) {
        return this instanceof at.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? h : p) : this.type = e, t && at.extend(this, t), this.timeStamp = e && e.timeStamp || at.now(), this[at.expando] = !0, void 0) : new at.Event(e, t)
    }, at.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = h, this.stopPropagation()
        }
    }, at.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        at.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    s = e.relatedTarget,
                    a = e.handleObj;
                return (!s || s !== i && !at.contains(i, s)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), it.submitBubbles || (at.event.special.submit = {
        setup: function () {
            return at.nodeName(this, "form") ? !1 : (at.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    n = at.nodeName(t, "input") || at.nodeName(t, "button") ? t.form : void 0;
                n && !at._data(n, "submitBubbles") && (at.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), at._data(n, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && at.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return at.nodeName(this, "form") ? !1 : (at.event.remove(this, "._submit"), void 0)
        }
    }), it.changeBubbles || (at.event.special.change = {
        setup: function () {
            return It.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (at.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), at.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), at.event.simulate("change", this, e, !0)
            })), !1) : (at.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                It.test(t.nodeName) && !at._data(t, "changeBubbles") && (at.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || at.event.simulate("change", this.parentNode, e, !0)
                }), at._data(t, "changeBubbles", !0))
            }), void 0)
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return at.event.remove(this, "._change"), !It.test(this.nodeName)
        }
    }), it.focusinBubbles || at.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            at.event.simulate(t, e.target, at.event.fix(e), !0)
        };
        at.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    s = at._data(i, t);
                s || i.addEventListener(e, n, !0), at._data(i, t, (s || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    s = at._data(i, t) - 1;
                s ? at._data(i, t, s) : (i.removeEventListener(e, n, !0), at._removeData(i, t))
            }
        }
    }), at.fn.extend({
        on: function (e, t, n, i, s) {
            var a, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], s);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = p;
            else if (!i) return this;
            return 1 === s && (o = i, i = function (e) {
                return at().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = at.guid++)), this.each(function () {
                at.event.add(this, e, i, n, t)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, at(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, t, e[s]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function () {
                at.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                at.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? at.event.trigger(e, t, n, !0) : void 0
        }
    });
    var jt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Pt = / jQuery\d+="(?:null|\d+)"/g,
        $t = new RegExp("<(?:" + jt + ")[\\s/>]", "i"),
        Bt = /^\s+/,
        Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ut = /<([\w:]+)/,
        Vt = /<tbody/i,
        qt = /<|&#?\w+;/,
        Wt = /<(?:script|style|link)/i,
        zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Qt = /^$|\/(?:java|ecma)script/i,
        Xt = /^true\/(.*)/,
        Kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Jt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Yt = m(mt),
        Gt = Yt.appendChild(mt.createElement("div"));
    Jt.optgroup = Jt.option, Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead, Jt.th = Jt.td, at.extend({
        clone: function (e, t, n) {
            var i, s, a, o, r, c = at.contains(e.ownerDocument, e);
            if (it.html5Clone || at.isXMLDoc(e) || !$t.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (Gt.innerHTML = e.outerHTML, Gt.removeChild(a = Gt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || at.isXMLDoc(e)))
                for (i = v(a), r = v(e), o = 0; null != (s = r[o]); ++o) i[o] && T(s, i[o]);
            if (t)
                if (n)
                    for (r = r || v(e), i = i || v(a), o = 0; null != (s = r[o]); o++) x(s, i[o]);
                else x(e, a);
            return i = v(a, "script"), i.length > 0 && w(i, !c && v(e, "script")), i = r = s = null, a
        },
        buildFragment: function (e, t, n, i) {
            for (var s, a, o, r, c, l, d, u = e.length, h = m(t), p = [], f = 0; u > f; f++)
                if (a = e[f], a || 0 === a)
                    if ("object" === at.type(a)) at.merge(p, a.nodeType ? [a] : a);
                    else if (qt.test(a)) {
                for (r = r || h.appendChild(t.createElement("div")), c = (Ut.exec(a) || ["", ""])[1].toLowerCase(), d = Jt[c] || Jt._default, r.innerHTML = d[1] + a.replace(Ht, "<$1></$2>") + d[2], s = d[0]; s--;) r = r.lastChild;
                if (!it.leadingWhitespace && Bt.test(a) && p.push(t.createTextNode(Bt.exec(a)[0])), !it.tbody)
                    for (a = "table" !== c || Vt.test(a) ? "<table>" !== d[1] || Vt.test(a) ? 0 : r : r.firstChild, s = a && a.childNodes.length; s--;) at.nodeName(l = a.childNodes[s], "tbody") && !l.childNodes.length && a.removeChild(l);
                for (at.merge(p, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
                r = h.lastChild
            } else p.push(t.createTextNode(a));
            for (r && h.removeChild(r), it.appendChecked || at.grep(v(p, "input"), g), f = 0; a = p[f++];)
                if ((!i || -1 === at.inArray(a, i)) && (o = at.contains(a.ownerDocument, a), r = v(h.appendChild(a), "script"), o && w(r), n))
                    for (s = 0; a = r[s++];) Qt.test(a.type || "") && n.push(a);
            return r = null, h
        },
        cleanData: function (e, t) {
            for (var n, i, s, a, o = 0, r = at.expando, c = at.cache, l = it.deleteExpando, d = at.event.special; null != (n = e[o]); o++)
                if ((t || at.acceptData(n)) && (s = n[r], a = s && c[s])) {
                    if (a.events)
                        for (i in a.events) d[i] ? at.event.remove(n, i) : at.removeEvent(n, i, a.handle);
                    c[s] && (delete c[s], l ? delete n[r] : typeof n.removeAttribute !== Ct ? n.removeAttribute(r) : n[r] = null, X.push(s))
                }
        }
    }), at.fn.extend({
        text: function (e) {
            return Nt(this, function (e) {
                return void 0 === e ? at.text(this) : this.empty().append((this[0] && this[0].ownerDocument || mt).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = _(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = _(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, i = e ? at.filter(e, this) : this, s = 0; null != (n = i[s]); s++) t || 1 !== n.nodeType || at.cleanData(v(n)), n.parentNode && (t && at.contains(n.ownerDocument, n) && w(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && at.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && at.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return at.clone(this, e, t)
            })
        },
        html: function (e) {
            return Nt(this, function (e) {
                var t = this[0] || {}, n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Pt, "") : void 0;
                if (!("string" != typeof e || Wt.test(e) || !it.htmlSerialize && $t.test(e) || !it.leadingWhitespace && Bt.test(e) || Jt[(Ut.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ht, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (at.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (s) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, at.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = J.apply([], e);
            var n, i, s, a, o, r, c = 0,
                l = this.length,
                d = this,
                u = l - 1,
                h = e[0],
                p = at.isFunction(h);
            if (p || l > 1 && "string" == typeof h && !it.checkClone && zt.test(h)) return this.each(function (n) {
                var i = d.eq(n);
                p && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
            });
            if (l && (r = at.buildFragment(e, this[0].ownerDocument, !1, this), n = r.firstChild, 1 === r.childNodes.length && (r = n), n)) {
                for (a = at.map(v(r, "script"), b), s = a.length; l > c; c++) i = r, c !== u && (i = at.clone(i, !0, !0), s && at.merge(a, v(i, "script"))), t.call(this[c], i, c);
                if (s)
                    for (o = a[a.length - 1].ownerDocument, at.map(a, y), c = 0; s > c; c++) i = a[c], Qt.test(i.type || "") && !at._data(i, "globalEval") && at.contains(o, i) && (i.src ? at._evalUrl && at._evalUrl(i.src) : at.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Kt, "")));
                r = n = null
            }
            return this
        }
    }), at.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        at.fn[e] = function (e) {
            for (var n, i = 0, s = [], a = at(e), o = a.length - 1; o >= i; i++) n = i === o ? this : this.clone(!0), at(a[i])[t](n), Y.apply(s, n.get());
            return this.pushStack(s)
        }
    });
    var Zt, en = {};
    ! function () {
        var e, t, n = mt.createElement("div"),
            i = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", it.opacity = /^0.5/.test(e.style.opacity), it.cssFloat = !! e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, it.shrinkWrapBlocks = function () {
            var e, n, s, a;
            if (null == t) {
                if (e = mt.getElementsByTagName("body")[0], !e) return;
                a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = mt.createElement("div"), s = mt.createElement("div"), e.appendChild(n).appendChild(s), t = !1, typeof s.style.zoom !== Ct && (s.style.cssText = i + ";width:1px;padding:1px;zoom:1", s.innerHTML = "<div></div>", s.firstChild.style.width = "5px", t = 3 !== s.offsetWidth), e.removeChild(n), e = n = s = null
            }
            return t
        }
    }();
    var tn, nn, sn = /^margin/,
        an = new RegExp("^(" + Mt + ")(?!px)[a-z%]+$", "i"),
        on = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (tn = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, nn = function (e, t, n) {
        var i, s, a, o, r = e.style;
        return n = n || tn(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || at.contains(e.ownerDocument, e) || (o = at.style(e, t)), an.test(o) && sn.test(t) && (i = r.width, s = r.minWidth, a = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = s, r.maxWidth = a)), void 0 === o ? o : o + ""
    }) : mt.documentElement.currentStyle && (tn = function (e) {
        return e.currentStyle
    }, nn = function (e, t, n) {
        var i, s, a, o, r = e.style;
        return n = n || tn(e), o = n ? n[t] : void 0, null == o && r && r[t] && (o = r[t]), an.test(o) && !on.test(t) && (i = r.left, s = e.runtimeStyle, a = s && s.left, a && (s.left = e.currentStyle.left), r.left = "fontSize" === t ? "1em" : o, o = r.pixelLeft + "px", r.left = i, a && (s.left = a)), void 0 === o ? o : o + "" || "auto"
    }),
    function () {
        function t() {
            var t, n, i = mt.getElementsByTagName("body")[0];
            i && (t = mt.createElement("div"), n = mt.createElement("div"), t.style.cssText = l, i.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", at.swap(i, null != i.style.zoom ? {
                zoom: 1
            } : {}, function () {
                s = 4 === n.offsetWidth
            }), a = !0, o = !1, r = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(n, null) || {}).top, a = "4px" === (e.getComputedStyle(n, null) || {
                width: "4px"
            }).width), i.removeChild(t), n = i = null)
        }
        var n, i, s, a, o, r, c = mt.createElement("div"),
            l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = c.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", it.opacity = /^0.5/.test(n.style.opacity), it.cssFloat = !! n.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === c.style.backgroundClip, n = c = null, at.extend(it, {
            reliableHiddenOffsets: function () {
                if (null != i) return i;
                var e, t, n, s = mt.createElement("div"),
                    a = mt.getElementsByTagName("body")[0];
                if (a) return s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = mt.createElement("div"), e.style.cssText = l, a.appendChild(e).appendChild(s), s.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = s.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", i = n && 0 === t[0].offsetHeight, a.removeChild(e), s = a = null, i
            },
            boxSizing: function () {
                return null == s && t(), s
            },
            boxSizingReliable: function () {
                return null == a && t(), a
            },
            pixelPosition: function () {
                return null == o && t(), o
            },
            reliableMarginRight: function () {
                var t, n, i, s;
                if (null == r && e.getComputedStyle) {
                    if (t = mt.getElementsByTagName("body")[0], !t) return;
                    n = mt.createElement("div"), i = mt.createElement("div"), n.style.cssText = l, t.appendChild(n).appendChild(i), s = i.appendChild(mt.createElement("div")), s.style.cssText = i.style.cssText = d, s.style.marginRight = s.style.width = "0", i.style.width = "1px", r = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight), t.removeChild(n)
                }
                return r
            }
        })
    }(), at.swap = function (e, t, n, i) {
        var s, a, o = {};
        for (a in t) o[a] = e.style[a], e.style[a] = t[a];
        s = n.apply(e, i || []);
        for (a in t) e.style[a] = o[a];
        return s
    };
    var rn = /alpha\([^)]*\)/i,
        cn = /opacity\s*=\s*([^)]*)/,
        ln = /^(none|table(?!-c[ea]).+)/,
        dn = new RegExp("^(" + Mt + ")(.*)$", "i"),
        un = new RegExp("^([+-])=(" + Mt + ")", "i"),
        hn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, pn = {
            letterSpacing: 0,
            fontWeight: 400
        }, fn = ["Webkit", "O", "Moz", "ms"];
    at.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": it.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, a, o, r = at.camelCase(t),
                    c = e.style;
                if (t = at.cssProps[r] || (at.cssProps[r] = M(c, r)), o = at.cssHooks[t] || at.cssHooks[r], void 0 === n) return o && "get" in o && void 0 !== (s = o.get(e, !1, i)) ? s : c[t];
                if (a = typeof n, "string" === a && (s = un.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(at.css(e, t)), a = "number"), null != n && n === n && ("number" !== a || at.cssNumber[r] || (n += "px"), it.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, i))))) try {
                    c[t] = "", c[t] = n
                } catch (l) {}
            }
        },
        css: function (e, t, n, i) {
            var s, a, o, r = at.camelCase(t);
            return t = at.cssProps[r] || (at.cssProps[r] = M(e.style, r)), o = at.cssHooks[t] || at.cssHooks[r], o && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = nn(e, t, i)), "normal" === a && t in pn && (a = pn[t]), "" === n || n ? (s = parseFloat(a), n === !0 || at.isNumeric(s) ? s || 0 : a) : a
        }
    }), at.each(["height", "width"], function (e, t) {
        at.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? 0 === e.offsetWidth && ln.test(at.css(e, "display")) ? at.swap(e, hn, function () {
                    return A(e, t, i)
                }) : A(e, t, i) : void 0
            },
            set: function (e, n, i) {
                var s = i && tn(e);
                return D(e, n, i ? N(e, t, i, it.boxSizing() && "border-box" === at.css(e, "boxSizing", !1, s), s) : 0)
            }
        }
    }), it.opacity || (at.cssHooks.opacity = {
        get: function (e, t) {
            return cn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                i = e.currentStyle,
                s = at.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                a = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === at.trim(a.replace(rn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rn.test(a) ? a.replace(rn, s) : a + " " + s)
        }
    }), at.cssHooks.marginRight = k(it.reliableMarginRight, function (e, t) {
        return t ? at.swap(e, {
            display: "inline-block"
        }, nn, [e, "marginRight"]) : void 0
    }), at.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        at.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, s = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) s[e + Et[i] + t] = a[i] || a[i - 2] || a[0];
                return s
            }
        }, sn.test(e) || (at.cssHooks[e + t].set = D)
    }), at.fn.extend({
        css: function (e, t) {
            return Nt(this, function (e, t, n) {
                var i, s, a = {}, o = 0;
                if (at.isArray(t)) {
                    for (i = tn(e), s = t.length; s > o; o++) a[t[o]] = at.css(e, t[o], !1, i);
                    return a
                }
                return void 0 !== n ? at.style(e, t, n) : at.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return E(this, !0)
        },
        hide: function () {
            return E(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Dt(this) ? at(this).show() : at(this).hide()
            })
        }
    }), at.Tween = I, I.prototype = {
        constructor: I,
        init: function (e, t, n, i, s, a) {
            this.elem = e, this.prop = n, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (at.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = I.propHooks[this.prop];
            return this.pos = t = this.options.duration ? at.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = at.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                at.fx.step[e.prop] ? at.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[at.cssProps[e.prop]] || at.cssHooks[e.prop]) ? at.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, at.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, at.fx = I.prototype.init, at.fx.step = {};
    var mn, vn, gn = /^(?:toggle|show|hide)$/,
        _n = new RegExp("^(?:([+-])=|)(" + Mt + ")([a-z%]*)$", "i"),
        bn = /queueHooks$/,
        yn = [O],
        wn = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        s = _n.exec(t),
                        a = s && s[3] || (at.cssNumber[e] ? "" : "px"),
                        o = (at.cssNumber[e] || "px" !== a && +i) && _n.exec(at.css(n.elem, e)),
                        r = 1,
                        c = 20;
                    if (o && o[3] !== a) {
                        a = a || o[3], s = s || [], o = +i || 1;
                        do r = r || ".5", o /= r, at.style(n.elem, e, o + a); while (r !== (r = n.cur() / i) && 1 !== r && --c)
                    }
                    return s && (o = n.start = +o || +i || 0, n.unit = a, n.end = s[1] ? o + (s[1] + 1) * s[2] : +s[2]), n
                }
            ]
        };
    at.Animation = at.extend(P, {
        tweener: function (e, t) {
            at.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, s = e.length; s > i; i++) n = e[i], wn[n] = wn[n] || [], wn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? yn.unshift(e) : yn.push(e)
        }
    }), at.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? at.extend({}, e) : {
            complete: n || !n && t || at.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !at.isFunction(t) && t
        };
        return i.duration = at.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in at.fx.speeds ? at.fx.speeds[i.duration] : at.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            at.isFunction(i.old) && i.old.call(this), i.queue && at.dequeue(this, i.queue)
        }, i
    }, at.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Dt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var s = at.isEmptyObject(e),
                a = at.speed(t, n, i),
                o = function () {
                    var t = P(this, at.extend({}, e), a);
                    (s || at._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, s || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    s = null != e && e + "queueHooks",
                    a = at.timers,
                    o = at._data(this);
                if (s) o[s] && o[s].stop && i(o[s]);
                else
                    for (s in o) o[s] && o[s].stop && bn.test(s) && i(o[s]);
                for (s = a.length; s--;) a[s].elem !== this || null != e && a[s].queue !== e || (a[s].anim.stop(n), t = !1, a.splice(s, 1));
                (t || !n) && at.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = at._data(this),
                    i = n[e + "queue"],
                    s = n[e + "queueHooks"],
                    a = at.timers,
                    o = i ? i.length : 0;
                for (n.finish = !0, at.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; o > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), at.each(["toggle", "show", "hide"], function (e, t) {
        var n = at.fn[t];
        at.fn[t] = function (e, i, s) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, s)
        }
    }), at.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        at.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), at.timers = [], at.fx.tick = function () {
        var e, t = at.timers,
            n = 0;
        for (mn = at.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || at.fx.stop(), mn = void 0
    }, at.fx.timer = function (e) {
        at.timers.push(e), e() ? at.fx.start() : at.timers.pop()
    }, at.fx.interval = 13, at.fx.start = function () {
        vn || (vn = setInterval(at.fx.tick, at.fx.interval))
    }, at.fx.stop = function () {
        clearInterval(vn), vn = null
    }, at.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, at.fn.delay = function (e, t) {
        return e = at.fx ? at.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    },
    function () {
        var e, t, n, i, s = mt.createElement("div");
        s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = s.getElementsByTagName("a")[0], n = mt.createElement("select"), i = n.appendChild(mt.createElement("option")), t = s.getElementsByTagName("input")[0], e.style.cssText = "top:1px", it.getSetAttribute = "t" !== s.className, it.style = /top/.test(e.getAttribute("style")), it.hrefNormalized = "/a" === e.getAttribute("href"), it.checkOn = !! t.value, it.optSelected = i.selected, it.enctype = !! mt.createElement("form").enctype, n.disabled = !0, it.optDisabled = !i.disabled, t = mt.createElement("input"), t.setAttribute("value", ""), it.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), it.radioValue = "t" === t.value, e = t = n = i = s = null
    }();
    var xn = /\r/g;
    at.fn.extend({
        val: function (e) {
            var t, n, i, s = this[0]; {
                if (arguments.length) return i = at.isFunction(e), this.each(function (n) {
                    var s;
                    1 === this.nodeType && (s = i ? e.call(this, n, at(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : at.isArray(s) && (s = at.map(s, function (e) {
                        return null == e ? "" : e + ""
                    })), t = at.valHooks[this.type] || at.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                });
                if (s) return t = at.valHooks[s.type] || at.valHooks[s.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(s, "value")) ? n : (n = s.value, "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n)
            }
        }
    }), at.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = at.find.attr(e, "value");
                    return null != t ? t : at.text(e)
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, s = e.selectedIndex, a = "select-one" === e.type || 0 > s, o = a ? null : [], r = a ? s + 1 : i.length, c = 0 > s ? r : a ? s : 0; r > c; c++)
                        if (n = i[c], !(!n.selected && c !== s || (it.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && at.nodeName(n.parentNode, "optgroup"))) {
                            if (t = at(n).val(), a) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function (e, t) {
                    for (var n, i, s = e.options, a = at.makeArray(t), o = s.length; o--;)
                        if (i = s[o], at.inArray(at.valHooks.option.get(i), a) >= 0) try {
                            i.selected = n = !0
                        } catch (r) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), s
                }
            }
        }
    }), at.each(["radio", "checkbox"], function () {
        at.valHooks[this] = {
            set: function (e, t) {
                return at.isArray(t) ? e.checked = at.inArray(at(e).val(), t) >= 0 : void 0
            }
        }, it.checkOn || (at.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Tn, Cn, Sn = at.expr.attrHandle,
        kn = /^(?:checked|selected)$/i,
        Mn = it.getSetAttribute,
        En = it.input;
    at.fn.extend({
        attr: function (e, t) {
            return Nt(this, at.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                at.removeAttr(this, e)
            })
        }
    }), at.extend({
        attr: function (e, t, n) {
            var i, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Ct ? at.prop(e, t, n) : (1 === a && at.isXMLDoc(e) || (t = t.toLowerCase(), i = at.attrHooks[t] || (at.expr.match.bool.test(t) ? Cn : Tn)), void 0 === n ? i && "get" in i && null !== (s = i.get(e, t)) ? s : (s = at.find.attr(e, t), null == s ? void 0 : s) : null !== n ? i && "set" in i && void 0 !== (s = i.set(e, n, t)) ? s : (e.setAttribute(t, n + ""), n) : (at.removeAttr(e, t), void 0))
        },
        removeAttr: function (e, t) {
            var n, i, s = 0,
                a = t && t.match(yt);
            if (a && 1 === e.nodeType)
                for (; n = a[s++];) i = at.propFix[n] || n, at.expr.match.bool.test(n) ? En && Mn || !kn.test(n) ? e[i] = !1 : e[at.camelCase("default-" + n)] = e[i] = !1 : at.attr(e, n, ""), e.removeAttribute(Mn ? n : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!it.radioValue && "radio" === t && at.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Cn = {
        set: function (e, t, n) {
            return t === !1 ? at.removeAttr(e, n) : En && Mn || !kn.test(n) ? e.setAttribute(!Mn && at.propFix[n] || n, n) : e[at.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, at.each(at.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Sn[t] || at.find.attr;
        Sn[t] = En && Mn || !kn.test(t) ? function (e, t, i) {
            var s, a;
            return i || (a = Sn[t], Sn[t] = s, s = null != n(e, t, i) ? t.toLowerCase() : null, Sn[t] = a), s
        } : function (e, t, n) {
            return n ? void 0 : e[at.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), En && Mn || (at.attrHooks.value = {
        set: function (e, t, n) {
            return at.nodeName(e, "input") ? (e.defaultValue = t, void 0) : Tn && Tn.set(e, t, n)
        }
    }), Mn || (Tn = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Sn.id = Sn.name = Sn.coords = function (e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, at.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Tn.set
    }, at.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Tn.set(e, "" === t ? !1 : t, n)
        }
    }, at.each(["width", "height"], function (e, t) {
        at.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), it.style || (at.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Dn = /^(?:input|select|textarea|button|object)$/i,
        Nn = /^(?:a|area)$/i;
    at.fn.extend({
        prop: function (e, t) {
            return Nt(this, at.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = at.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), at.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, t, n) {
            var i, s, a, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return a = 1 !== o || !at.isXMLDoc(e), a && (t = at.propFix[t] || t, s = at.propHooks[t]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(e, n, t)) ? i : e[t] = n : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = at.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Dn.test(e.nodeName) || Nn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), it.hrefNormalized || at.each(["href", "src"], function (e, t) {
        at.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), it.optSelected || (at.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), at.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        at.propFix[this.toLowerCase()] = this
    }), it.enctype || (at.propFix.enctype = "encoding");
    var An = /[\t\r\n\f]/g;
    at.fn.extend({
        addClass: function (e) {
            var t, n, i, s, a, o, r = 0,
                c = this.length,
                l = "string" == typeof e && e;
            if (at.isFunction(e)) return this.each(function (t) {
                at(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(yt) || []; c > r; r++)
                    if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : " ")) {
                        for (a = 0; s = t[a++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        o = at.trim(i), n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, i, s, a, o, r = 0,
                c = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (at.isFunction(e)) return this.each(function (t) {
                at(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(yt) || []; c > r; r++)
                    if (n = this[r], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(An, " ") : "")) {
                        for (a = 0; s = t[a++];)
                            for (; i.indexOf(" " + s + " ") >= 0;) i = i.replace(" " + s + " ", " ");
                        o = e ? at.trim(i) : "", n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : at.isFunction(e) ? this.each(function (n) {
                at(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)
                    for (var t, i = 0, s = at(this), a = e.match(yt) || []; t = a[i++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                else(n === Ct || "boolean" === n) && (this.className && at._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : at._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(An, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), at.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        at.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), at.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var In = at.now(),
        Rn = /\?/,
        Fn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    at.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            s = at.trim(t + "");
        return s && !at.trim(s.replace(Fn, function (e, t, s, a) {
            return n && t && (i = 0), 0 === i ? e : (n = s || t, i += !a - !s, "")
        })) ? Function("return " + s)() : at.error("Invalid JSON: " + t)
    }, at.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (s) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || at.error("Invalid XML: " + t), n
    };
    var Ln, On, jn = /#.*$/,
        Pn = /([?&])_=[^&]*/,
        $n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Hn = /^(?:GET|HEAD)$/,
        Un = /^\/\//,
        Vn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        qn = {}, Wn = {}, zn = "*/".concat("*");
    try {
        On = location.href
    } catch (Qn) {
        On = mt.createElement("a"), On.href = "", On = On.href
    }
    Ln = Vn.exec(On.toLowerCase()) || [], at.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: On,
            type: "GET",
            isLocal: Bn.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": at.parseJSON,
                "text xml": at.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? H(H(e, at.ajaxSettings), t) : H(at.ajaxSettings, e)
        },
        ajaxPrefilter: $(qn),
        ajaxTransport: $(Wn),
        ajax: function (e, t) {
            function n(e, t, n, i) {
                var s, d, g, _, y, x = t;
                2 !== b && (b = 2, r && clearTimeout(r), l = void 0, o = i || "", w.readyState = e > 0 ? 4 : 0, s = e >= 200 && 300 > e || 304 === e, n && (_ = U(u, w, n)), _ = V(u, _, w, s), s ? (u.ifModified && (y = w.getResponseHeader("Last-Modified"), y && (at.lastModified[a] = y), y = w.getResponseHeader("etag"), y && (at.etag[a] = y)), 204 === e || "HEAD" === u.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = _.state, d = _.data, g = _.error, s = !g)) : (g = x, (e || !x) && (x = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || x) + "", s ? f.resolveWith(h, [d, x, w]) : f.rejectWith(h, [w, x, g]), w.statusCode(v), v = void 0, c && p.trigger(s ? "ajaxSuccess" : "ajaxError", [w, u, s ? d : g]), m.fireWith(h, [w, x]), c && (p.trigger("ajaxComplete", [w, u]), --at.active || at.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, s, a, o, r, c, l, d, u = at.ajaxSetup({}, t),
                h = u.context || u,
                p = u.context && (h.nodeType || h.jquery) ? at(h) : at.event,
                f = at.Deferred(),
                m = at.Callbacks("once memory"),
                v = u.statusCode || {}, g = {}, _ = {}, b = 0,
                y = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!d)
                                for (d = {}; t = $n.exec(o);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = _[n] = _[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (u.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) v[t] = [v[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || y;
                        return l && l.abort(t), n(0, t), this
                    }
                };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, u.url = ((e || u.url || On) + "").replace(jn, "").replace(Un, Ln[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = at.trim(u.dataType || "*").toLowerCase().match(yt) || [""], null == u.crossDomain && (i = Vn.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = at.param(u.data, u.traditional)), B(qn, u, t, w), 2 === b) return w;
            c = u.global, c && 0 === at.active++ && at.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Hn.test(u.type), a = u.url, u.hasContent || (u.data && (a = u.url += (Rn.test(a) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Pn.test(a) ? a.replace(Pn, "$1_=" + In++) : a + (Rn.test(a) ? "&" : "?") + "_=" + In++)), u.ifModified && (at.lastModified[a] && w.setRequestHeader("If-Modified-Since", at.lastModified[a]), at.etag[a] && w.setRequestHeader("If-None-Match", at.etag[a])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : u.accepts["*"]);
            for (s in u.headers) w.setRequestHeader(s, u.headers[s]);
            if (u.beforeSend && (u.beforeSend.call(h, w, u) === !1 || 2 === b)) return w.abort();
            y = "abort";
            for (s in {
                success: 1,
                error: 1,
                complete: 1
            }) w[s](u[s]);
            if (l = B(Wn, u, t, w)) {
                w.readyState = 1, c && p.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (r = setTimeout(function () {
                    w.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, l.send(g, n)
                } catch (x) {
                    if (!(2 > b)) throw x;
                    n(-1, x)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return at.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return at.get(e, void 0, t, "script")
        }
    }), at.each(["get", "post"], function (e, t) {
        at[t] = function (e, n, i, s) {
            return at.isFunction(n) && (s = s || i, i = n, n = void 0), at.ajax({
                url: e,
                type: t,
                dataType: s,
                data: n,
                success: i
            })
        }
    }), at.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        at.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), at._evalUrl = function (e) {
        return at.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, at.fn.extend({
        wrapAll: function (e) {
            if (at.isFunction(e)) return this.each(function (t) {
                at(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = at(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return at.isFunction(e) ? this.each(function (t) {
                at(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = at(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = at.isFunction(e);
            return this.each(function (n) {
                at(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                at.nodeName(this, "body") || at(this).replaceWith(this.childNodes)
            }).end()
        }
    }), at.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (e.style && e.style.display || at.css(e, "display"))
    }, at.expr.filters.visible = function (e) {
        return !at.expr.filters.hidden(e)
    };
    var Xn = /%20/g,
        Kn = /\[\]$/,
        Jn = /\r?\n/g,
        Yn = /^(?:submit|button|image|reset|file)$/i,
        Gn = /^(?:input|select|textarea|keygen)/i;
    at.param = function (e, t) {
        var n, i = [],
            s = function (e, t) {
                t = at.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = at.ajaxSettings && at.ajaxSettings.traditional), at.isArray(e) || e.jquery && !at.isPlainObject(e)) at.each(e, function () {
            s(this.name, this.value)
        });
        else
            for (n in e) q(n, e[n], t, s);
        return i.join("&").replace(Xn, "+")
    }, at.fn.extend({
        serialize: function () {
            return at.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = at.prop(this, "elements");
                return e ? at.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !at(this).is(":disabled") && Gn.test(this.nodeName) && !Yn.test(e) && (this.checked || !At.test(e))
            }).map(function (e, t) {
                var n = at(this).val();
                return null == n ? null : at.isArray(n) ? at.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Jn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Jn, "\r\n")
                }
            }).get()
        }
    }), at.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || z()
    } : W;
    var Zn = 0,
        ei = {}, ti = at.ajaxSettings.xhr();
    e.ActiveXObject && at(e).on("unload", function () {
        for (var e in ei) ei[e](void 0, !0)
    }), it.cors = !! ti && "withCredentials" in ti, ti = it.ajax = !! ti, ti && at.ajaxTransport(function (e) {
        if (!e.crossDomain || it.cors) {
            var t;
            return {
                send: function (n, i) {
                    var s, a = e.xhr(),
                        o = ++Zn;
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (s in n) void 0 !== n[s] && a.setRequestHeader(s, n[s] + "");
                    a.send(e.hasContent && e.data || null), t = function (n, s) {
                        var r, c, l;
                        if (t && (s || 4 === a.readyState))
                            if (delete ei[o], t = void 0, a.onreadystatechange = at.noop, s) 4 !== a.readyState && a.abort();
                            else {
                                l = {}, r = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                                try {
                                    c = a.statusText
                                } catch (d) {
                                    c = ""
                                }
                                r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = l.text ? 200 : 404
                            }
                        l && i(r, c, l, a.getAllResponseHeaders())
                    }, e.async ? 4 === a.readyState ? setTimeout(t) : a.onreadystatechange = ei[o] = t : t()
                },
                abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), at.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return at.globalEval(e), e
            }
        }
    }), at.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), at.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = mt.head || at("head")[0] || mt.documentElement;
            return {
                send: function (i, s) {
                    t = mt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || s(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ni = [],
        ii = /(=)\?(?=&|$)|\?\?/;
    at.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = ni.pop() || at.expando + "_" + In++;
            return this[e] = !0, e
        }
    }), at.ajaxPrefilter("json jsonp", function (t, n, i) {
        var s, a, o, r = t.jsonp !== !1 && (ii.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(t.data) && "data");
        return r || "jsonp" === t.dataTypes[0] ? (s = t.jsonpCallback = at.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(ii, "$1" + s) : t.jsonp !== !1 && (t.url += (Rn.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function () {
            return o || at.error(s + " was not called"), o[0]
        }, t.dataTypes[0] = "json", a = e[s], e[s] = function () {
            o = arguments
        }, i.always(function () {
            e[s] = a, t[s] && (t.jsonpCallback = n.jsonpCallback, ni.push(s)), o && at.isFunction(a) && a(o[0]), o = a = void 0
        }), "script") : void 0
    }), at.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || mt;
        var i = ht.exec(e),
            s = !n && [];
        return i ? [t.createElement(i[1])] : (i = at.buildFragment([e], t, s), s && s.length && at(s).remove(), at.merge([], i.childNodes))
    };
    var si = at.fn.load;
    at.fn.load = function (e, t, n) {
        if ("string" != typeof e && si) return si.apply(this, arguments);
        var i, s, a, o = this,
            r = e.indexOf(" ");
        return r >= 0 && (i = e.slice(r, e.length), e = e.slice(0, r)), at.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), o.length > 0 && at.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: t
        }).done(function (e) {
            s = arguments, o.html(i ? at("<div>").append(at.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
            o.each(n, s || [e.responseText, t, e])
        }), this
    }, at.expr.filters.animated = function (e) {
        return at.grep(at.timers, function (t) {
            return e === t.elem
        }).length
    };
    var ai = e.document.documentElement;
    at.offset = {
        setOffset: function (e, t, n) {
            var i, s, a, o, r, c, l, d = at.css(e, "position"),
                u = at(e),
                h = {};
            "static" === d && (e.style.position = "relative"), r = u.offset(), a = at.css(e, "top"), c = at.css(e, "left"), l = ("absolute" === d || "fixed" === d) && at.inArray("auto", [a, c]) > -1, l ? (i = u.position(), o = i.top, s = i.left) : (o = parseFloat(a) || 0, s = parseFloat(c) || 0), at.isFunction(t) && (t = t.call(e, n, r)), null != t.top && (h.top = t.top - r.top + o), null != t.left && (h.left = t.left - r.left + s), "using" in t ? t.using.call(e, h) : u.css(h)
        }
    }, at.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                at.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                }, s = this[0],
                a = s && s.ownerDocument;
            if (a) return t = a.documentElement, at.contains(t, s) ? (typeof s.getBoundingClientRect !== Ct && (i = s.getBoundingClientRect()), n = Q(a), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        },
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    }, i = this[0];
                return "fixed" === at.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), at.nodeName(e[0], "html") || (n = e.offset()), n.top += at.css(e[0], "borderTopWidth", !0), n.left += at.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - at.css(i, "marginTop", !0),
                    left: t.left - n.left - at.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || ai; e && !at.nodeName(e, "html") && "static" === at.css(e, "position");) e = e.offsetParent;
                return e || ai
            })
        }
    }), at.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = /Y/.test(t);
        at.fn[e] = function (i) {
            return Nt(this, function (e, i, s) {
                var a = Q(e);
                return void 0 === s ? a ? t in a ? a[t] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(n ? at(a).scrollLeft() : s, n ? s : at(a).scrollTop()) : e[i] = s, void 0)
            }, e, i, arguments.length, null)
        }
    }), at.each(["top", "left"], function (e, t) {
        at.cssHooks[t] = k(it.pixelPosition, function (e, n) {
            return n ? (n = nn(e, t), an.test(n) ? at(e).position()[t] + "px" : n) : void 0
        })
    }), at.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        at.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            at.fn[i] = function (i, s) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    o = n || (i === !0 || s === !0 ? "margin" : "border");
                return Nt(this, function (t, n, i) {
                    var s;
                    return at.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? at.css(t, n, o) : at.style(t, n, i, o)
                }, t, a ? i : void 0, a, null)
            }
        })
    }), at.fn.size = function () {
        return this.length
    }, at.fn.andSelf = at.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return at
    });
    var oi = e.jQuery,
        ri = e.$;
    return at.noConflict = function (t) {
        return e.$ === at && (e.$ = ri), t && e.jQuery === at && (e.jQuery = oi), at
    }, typeof t === Ct && (e.jQuery = e.$ = at), at
}),
function (e) {
    e.tide = {
        m: {},
        v: {},
        c: {},
        support: {},
        config: {
            discussionMarkersScaledToWindow: !1,
            localTransformations: !0,
            tryCatchAllEvents: !0,
            autoFlash: !0,
            notificationTimeout: 5e3,
            maxNotifications: 5,
            networkTimeout: 28e3,
            clearReadItems: !0,
            marginButtonDelay: 500,
            marginButtonTransition: "opacity 0.5s ease-in"
        },
        API_ROOT: "/api/v1"
    }
}(this),
function (e) {
    if (tide.config.tryCatchAllEvents && e.Node && e.Node.prototype) {
        var t = e.Node.prototype.addEventListener,
            n = e.Node.prototype.removeEventListener,
            i = e.setTimeout,
            s = e.clearTimeout,
            a = e.setInterval,
            o = e.clearInterval,
            r = Array.prototype.slice,
            c = {
                id: 0
            }, l = function (e, t) {
                var n;
                if (t = t || u, e.__tryCatchWrapper) e.__tryCatchUsages += 1, n = c[e.__tryCatchWrapper];
                else {
                    var n = t(e);
                    e.__tryCatchWrapper = c.id++, e.__tryCatchUsages = 1, c[e.__tryCatchWrapper] = n
                }
                return n
            }, d = function (e) {
                if (e) {
                    var t = c[e.__tryCatchWrapper] || e;
                    return e.__tryCatchUsages -= 1, e.__tryCatchUsages || (delete c[e.__tryCatchWrapper], delete e.__tryCatchWrapper, delete e.__tryCatchUsages), t
                }
            }, u = function (t, n) {
                return function (i) {
                    try {
                        if ("function" == typeof t) return t.apply(this, arguments);
                        if (t.handleEvent) return t.handleEvent(i)
                    } catch (s) {
                        throw n = n || "Captured error during " + i.type + ": ", tide.logger.record(n + s.message, s), e._errorLogged = !0, s
                    }
                }
            };
        t && (e.Node.prototype.addEventListener = function (e, n, i) {
            var s = l(n, u);
            return t.call(this, e, s, i)
        }), n && (e.Node.prototype.removeEventListener = function (e, t, i) {
            var s = d(t);
            return n.call(this, e, s, i)
        });
        var h = function (e) {
            return "string" == typeof e && (e = new Function("", e)),
            function () {
                e.__tryCatchTimeout && clearTimeout(e.__tryCatchTimeout);
                try {
                    return e.apply(this, arguments)
                } catch (t) {
                    throw tide.logger.record("Captured error during timer: " + t.message, t), t
                }
            }
        }, p = {}, f = {};
        if (e.setTimeout = function (e) {
            var t = l(e, h),
                n = i.apply(this, [t].concat(r.call(arguments, 1)));
            return p[n] = e, e.__tryCatchTimeout = n, n
        }, e.clearTimeout = function (e) {
            var t = p[e];
            delete p[e], d(t), s.call(this, e)
        }, e.setInterval = function (e) {
            var t = l(e, h),
                n = a.apply(this, [t].concat(r.call(arguments, 1)));
            return f[n] = e, n
        }, e.clearInterval = function (e) {
            var t = f[e];
            delete f[e], d(t), o.call(this, e)
        }, e.jQuery) {
            var m = $.fn.ready,
                v = function (e) {
                    var t = u(e, "Captured error during DOM Ready: ");
                    return function (n) {
                        return d(e), t(n)
                    }
                };
            $.fn.ready = function (e) {
                var t = l(e, v);
                return m.call(this, t)
            }
        }
    }
}(this),
function (e, t) {
    var n = function () {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function (e) {
            return "rails" === e.namespace
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var i;
    e.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (t, n, i) {
            var s = e.Event(n);
            return t.trigger(s, i), s.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (n) {
            var s, a, o, r, c, l, d, u;
            if (i.fire(n, "ajax:before")) {
                if (r = n.data("cross-domain"), c = r === t ? null : r, l = n.data("with-credentials") || null, d = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, n.is("form")) {
                    s = n.attr("method"), a = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (s = n.data("method"), a = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (s = n.data("method"), a = i.href(n), o = n.data("params") || null);
                u = {
                    type: s || "GET",
                    data: o,
                    dataType: d,
                    beforeSend: function (e, s) {
                        return s.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [e, s])
                    },
                    success: function (e, t, i) {
                        n.trigger("ajax:success", [e, t, i])
                    },
                    complete: function (e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, i) {
                        n.trigger("ajax:error", [e, t, i])
                    },
                    xhrFields: {
                        withCredentials: l
                    },
                    crossDomain: c
                }, a && (u.url = a);
                var p = i.ajax(u);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function (n) {
            var s = i.href(n),
                a = n.data("method"),
                o = n.attr("target"),
                r = e("meta[name=csrf-token]").attr("content"),
                c = e("meta[name=csrf-param]").attr("content"),
                l = e('<form method="post" action="' + s + '"></form>'),
                d = '<input name="_method" value="' + a + '" type="hidden" />';
            c !== t && r !== t && (d += '<input name="' + c + '" value="' + r + '" type="hidden" />'), o && l.attr("target", o), l.hide().append(d).appendTo("body"), l.submit()
        },
        disableFormElements: function (t) {
            t.find(i.disableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(i.enableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t, n = e.data("confirm"),
                s = !1;
            return n ? (i.fire(e, "confirm") && (s = i.confirm(n), t = i.fire(e, "confirm:complete", [s])), s && t) : !0
        },
        blankInputs: function (t, n, i) {
            var s, a, o = e(),
                r = n || "input,textarea",
                c = t.find(r);
            return c.each(function () {
                if (s = e(this), a = s.is(":checkbox,:radio") ? s.is(":checked") : s.val(), !a == !i) {
                    if (s.is(":radio") && c.filter('input:radio:checked[name="' + s.attr("name") + '"]').length) return !0;
                    o = o.add(s)
                }
            }), o.length ? o : !1
        },
        nonBlankInputs: function (e, t) {
            return i.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (n, i) {
            var s = n.data("events"),
                a = !0;
            return s !== t && s.submit !== t && e.each(s.submit, function (e, t) {
                return "function" == typeof t.handler ? a = t.handler(i) : void 0
            }), a
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return i.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, i.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || i.CSRFProtection(n)
    }), e(document).delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(e(this))
    }), e(document).delegate(i.linkClickSelector, "click.rails", function (n) {
        var s = e(this),
            a = s.data("method"),
            o = s.data("params");
        if (!i.allowAction(s)) return i.stopEverything(n);
        if (s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== t) {
            if (!(!n.metaKey && !n.ctrlKey || a && "GET" !== a || o)) return !0;
            var r = i.handleRemote(s);
            return r === !1 ? i.enableElement(s) : r.error(function () {
                i.enableElement(s)
            }), !1
        }
        return s.data("method") ? (i.handleMethod(s), !1) : void 0
    }), e(document).delegate(i.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(t)
    }), e(document).delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var s = e(this),
            a = s.data("remote") !== t,
            o = i.blankInputs(s, i.requiredInputSelector),
            r = i.nonBlankInputs(s, i.fileInputSelector);
        if (!i.allowAction(s)) return i.stopEverything(n);
        if (o && s.attr("novalidate") == t && i.fire(s, "ajax:aborted:required", [o])) return i.stopEverything(n);
        if (a) {
            if (r) {
                setTimeout(function () {
                    i.disableFormElements(s)
                }, 13);
                var c = i.fire(s, "ajax:aborted:file", [r]);
                return c || setTimeout(function () {
                    i.enableFormElements(s)
                }, 13), c
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && i.callFormSubmitBindings(s, n) === !1 ? i.stopEverything(n) : (i.handleRemote(s), !1)
        }
        setTimeout(function () {
            i.disableFormElements(s)
        }, 13)
    }), e(document).delegate(i.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!i.allowAction(n)) return i.stopEverything(t);
        var s = n.attr("name"),
            a = s ? {
                name: s,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", a)
    }), e(document).delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && i.disableFormElements(e(this))
    }), e(document).delegate(i.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && i.enableFormElements(e(this))
    }), e(function () {
        csrf_token = e("meta[name=csrf-token]").attr("content"), csrf_param = e("meta[name=csrf-param]").attr("content"), e('form input[name="' + csrf_param + '"]').val(csrf_token)
    }))
}(jQuery),
function (e) {
    function t() {
        var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
        window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
    }
    e.fn.ajaxSubmit = function (n) {
        function i(i) {
            function a(e) {
                var t = e.contentWindow ? e.contentWindow.document : e.contentDocument ? e.contentDocument : e.document;
                return t
            }

            function o() {
                function n() {
                    try {
                        var e = a(m).readyState;
                        t("state = " + e), "uninitialized" == e.toLowerCase() && setTimeout(n, 50)
                    } catch (i) {
                        t("Server abort: ", i, " (", i.name, ")"), c(C), y && clearTimeout(y), y = void 0
                    }
                }
                var i = r.attr("target"),
                    o = r.attr("action");
                w.setAttribute("target", p), s || w.setAttribute("method", "POST"), o != u.url && w.setAttribute("action", u.url), u.skipEncodingOverride || s && !/post/i.test(s) || r.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), u.timeout && (y = setTimeout(function () {
                    b = !0, c(T)
                }, u.timeout));
                var l = [];
                try {
                    if (u.extraData)
                        for (var d in u.extraData) l.push(e('<input type="hidden" name="' + d + '" />').attr("value", u.extraData[d]).appendTo(w)[0]);
                    u.iframeTarget || (f.appendTo("body"), m.attachEvent ? m.attachEvent("onload", c) : m.addEventListener("load", c, !1)), setTimeout(n, 15), w.submit()
                } finally {
                    w.setAttribute("action", o), i ? w.setAttribute("target", i) : r.removeAttr("target"), e(l).remove()
                }
            }

            function c(n) {
                if (!v.aborted && !M) {
                    try {
                        k = a(m)
                    } catch (i) {
                        t("cannot access response document: ", i), n = C
                    }
                    if (n === T && v) return v.abort("timeout"), void 0;
                    if (n == C && v) return v.abort("server abort"), void 0;
                    if (k && k.location.href != u.iframeSrc || b) {
                        m.detachEvent ? m.detachEvent("onload", c) : m.removeEventListener("load", c, !1);
                        var s, o = "success";
                        try {
                            if (b) throw "timeout";
                            var r = "xml" == u.dataType || k.XMLDocument || e.isXMLDoc(k);
                            if (t("isXml=" + r), !r && window.opera && (null == k.body || "" == k.body.innerHTML) && --E) return t("requeing onLoad callback, DOM not available"), setTimeout(c, 250), void 0;
                            var l = k.body ? k.body : k.documentElement;
                            v.responseText = l ? l.innerHTML : null, v.responseXML = k.XMLDocument ? k.XMLDocument : k, r && (u.dataType = "xml"), v.getResponseHeader = function (e) {
                                var t = {
                                    "content-type": u.dataType
                                };
                                return t[e]
                            }, l && (v.status = Number(l.getAttribute("status")) || v.status, v.statusText = l.getAttribute("statusText") || v.statusText);
                            var d = u.dataType || "",
                                p = /(json|script|text)/.test(d.toLowerCase());
                            if (p || u.textarea) {
                                var g = k.getElementsByTagName("textarea")[0];
                                if (g) v.responseText = g.value, v.status = Number(g.getAttribute("status")) || v.status, v.statusText = g.getAttribute("statusText") || v.statusText;
                                else if (p) {
                                    var _ = k.getElementsByTagName("pre")[0],
                                        w = k.getElementsByTagName("body")[0];
                                    _ ? v.responseText = _.textContent ? _.textContent : _.innerHTML : w && (v.responseText = w.innerHTML)
                                }
                            } else "xml" != u.dataType || v.responseXML || null == v.responseText || (v.responseXML = D(v.responseText));
                            try {
                                S = A(v, u.dataType, u)
                            } catch (n) {
                                o = "parsererror", v.error = s = n || o
                            }
                        } catch (n) {
                            t("error caught: ", n), o = "error", v.error = s = n || o
                        }
                        v.aborted && (t("upload aborted"), o = null), v.status && (o = v.status >= 200 && v.status < 300 || 304 === v.status ? "success" : "error"), "success" === o ? (u.success && u.success.call(u.context, S, "success", v), h && e.event.trigger("ajaxSuccess", [v, u])) : o && (void 0 == s && (s = v.statusText), u.error && u.error.call(u.context, v, o, s), h && e.event.trigger("ajaxError", [v, u, s])), h && e.event.trigger("ajaxComplete", [v, u]), h && !--e.active && e.event.trigger("ajaxStop"), u.complete && u.complete.call(u.context, v, o), M = !0, u.timeout && clearTimeout(y), setTimeout(function () {
                            u.iframeTarget || f.remove(), v.responseXML = null
                        }, 100)
                    }
                }
            }
            var l, d, u, h, p, f, m, v, g, _, b, y, w = r[0],
                x = !! e.fn.prop;
            if (i)
                for (d = 0; d < i.length; d++) l = e(w[i[d].name]), l[x ? "prop" : "attr"]("disabled", !1);
            if (e(":input[name=submit],:input[id=submit]", w).length) return alert('Error: Form elements must not have name or id of "submit".'), void 0;
            if (u = e.extend(!0, {}, e.ajaxSettings, n), u.context = u.context || u, p = "jqFormIO" + (new Date).getTime(), u.iframeTarget ? (f = e(u.iframeTarget), _ = f.attr("name"), null == _ ? f.attr("name", p) : p = _) : (f = e('<iframe name="' + p + '" src="' + u.iframeSrc + '" />'), f.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })), m = f[0], v = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function () {},
                getResponseHeader: function () {},
                setRequestHeader: function () {},
                abort: function (n) {
                    var i = "timeout" === n ? "timeout" : "aborted";
                    t("aborting upload... " + i), this.aborted = 1, f.attr("src", u.iframeSrc), v.error = i, u.error && u.error.call(u.context, v, i, n), h && e.event.trigger("ajaxError", [v, u, i]), u.complete && u.complete.call(u.context, v, i)
                }
            }, h = u.global, h && !e.active++ && e.event.trigger("ajaxStart"), h && e.event.trigger("ajaxSend", [v, u]), u.beforeSend && u.beforeSend.call(u.context, v, u) === !1) return u.global && e.active--, void 0;
            if (!v.aborted) {
                g = w.clk, g && (_ = g.name, _ && !g.disabled && (u.extraData = u.extraData || {}, u.extraData[_] = g.value, "image" == g.type && (u.extraData[_ + ".x"] = w.clk_x, u.extraData[_ + ".y"] = w.clk_y)));
                var T = 1,
                    C = 2;
                u.forceSync ? o() : setTimeout(o, 10);
                var S, k, M, E = 50,
                    D = e.parseXML || function (e, t) {
                        return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                    }, N = e.parseJSON || function (e) {
                        return window.eval("(" + e + ")")
                    }, A = function (t, n, i) {
                        var s = t.getResponseHeader("content-type") || "",
                            a = "xml" === n || !n && s.indexOf("xml") >= 0,
                            o = a ? t.responseXML : t.responseText;
                        return a && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), i && i.dataFilter && (o = i.dataFilter(o, n)), "string" == typeof o && ("json" === n || !n && s.indexOf("json") >= 0 ? o = N(o) : ("script" === n || !n && s.indexOf("javascript") >= 0) && e.globalEval(o)), o
                    }
            }
        }
        if (!this.length) return t("ajaxSubmit: skipping submit process - no element selected"), this;
        var s, a, o, r = this;
        "function" == typeof n && (n = {
            success: n
        }), s = this.attr("method"), a = this.attr("action"), o = "string" == typeof a ? e.trim(a) : "", o = o || window.location.href || "", o && (o = (o.match(/^([^#]+)/) || [])[1]), n = e.extend(!0, {
            url: o,
            success: e.ajaxSettings.success,
            type: s || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, n);
        var c = {};
        if (this.trigger("form-pre-serialize", [this, n, c]), c.veto) return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (n.beforeSerialize && n.beforeSerialize(this, n) === !1) return t("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var l, d, u = this.formToArray(n.semantic);
        if (n.data) {
            n.extraData = n.data;
            for (l in n.data)
                if (e.isArray(n.data[l]))
                    for (var h in n.data[l]) u.push({
                        name: l,
                        value: n.data[l][h]
                    });
                else d = n.data[l], d = e.isFunction(d) ? d() : d, u.push({
                    name: l,
                    value: d
                })
        }
        if (n.beforeSubmit && n.beforeSubmit(u, this, n) === !1) return t("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [u, this, n, c]), c.veto) return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var p = e.param(u);
        "GET" == n.type.toUpperCase() ? (n.url += (n.url.indexOf("?") >= 0 ? "&" : "?") + p, n.data = null) : n.data = p;
        var f = [];
        if (n.resetForm && f.push(function () {
            r.resetForm()
        }), n.clearForm && f.push(function () {
            r.clearForm()
        }), !n.dataType && n.target) {
            var m = n.success || function () {};
            f.push(function (t) {
                var i = n.replaceTarget ? "replaceWith" : "html";
                e(n.target)[i](t).each(m, arguments)
            })
        } else n.success && f.push(n.success);
        n.success = function (e, t, i) {
            for (var s = n.context || n, a = 0, o = f.length; o > a; a++) f[a].apply(s, [e, t, i || r, r])
        };
        var v = e("input:file", this).length > 0,
            g = "multipart/form-data",
            _ = r.attr("enctype") == g || r.attr("encoding") == g;
        if (n.iframe !== !1 && (v || n.iframe || _)) n.closeKeepAlive ? e.get(n.closeKeepAlive, function () {
            i(u)
        }) : i(u);
        else {
            if (e.browser.msie && "get" == s) {
                var b = r[0].getAttribute("method");
                "string" == typeof b && (n.type = b)
            }
            e.ajax(n)
        }
        return this.trigger("form-submit-notify", [this, n]), this
    }, e.fn.ajaxForm = function (n) {
        if (0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (t("DOM not ready, queuing ajaxForm"), e(function () {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (t("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return this.ajaxFormUnbind().bind("submit.form-plugin", function (t) {
            t.isDefaultPrevented() || (t.preventDefault(), e(this).ajaxSubmit(n))
        }).bind("click.form-plugin", function (t) {
            var n = t.target,
                i = e(n);
            if (!i.is(":submit,input:image")) {
                var s = i.closest(":submit");
                if (0 == s.length) return;
                n = s[0]
            }
            var a = this;
            if (a.clk = n, "image" == n.type)
                if (void 0 != t.offsetX) a.clk_x = t.offsetX, a.clk_y = t.offsetY;
                else if ("function" == typeof e.fn.offset) {
                var o = i.offset();
                a.clk_x = t.pageX - o.left, a.clk_y = t.pageY - o.top
            } else a.clk_x = t.pageX - n.offsetLeft, a.clk_y = t.pageY - n.offsetTop;
            setTimeout(function () {
                a.clk = a.clk_x = a.clk_y = null
            }, 100)
        })
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t) {
        var n = [];
        if (0 === this.length) return n;
        var i = this[0],
            s = t ? i.getElementsByTagName("*") : i.elements;
        if (!s) return n;
        var a, o, r, c, l, d, u;
        for (a = 0, d = s.length; d > a; a++)
            if (l = s[a], r = l.name)
                if (t && i.clk && "image" == l.type) l.disabled || i.clk != l || (n.push({
                    name: r,
                    value: e(l).val()
                }), n.push({
                    name: r + ".x",
                    value: i.clk_x
                }, {
                    name: r + ".y",
                    value: i.clk_y
                }));
                else if (c = e.fieldValue(l, !0), c && c.constructor == Array)
            for (o = 0, u = c.length; u > o; o++) n.push({
                name: r,
                value: c[o]
            });
        else null !== c && "undefined" != typeof c && n.push({
            name: r,
            value: c
        }); if (!t && i.clk) {
            var h = e(i.clk),
                p = h[0];
            r = p.name, r && !p.disabled && "image" == p.type && (n.push({
                name: r,
                value: h.val()
            }), n.push({
                name: r + ".x",
                value: i.clk_x
            }, {
                name: r + ".y",
                value: i.clk_y
            }))
        }
        return n
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var n = [];
        return this.each(function () {
            var i = this.name;
            if (i) {
                var s = e.fieldValue(this, t);
                if (s && s.constructor == Array)
                    for (var a = 0, o = s.length; o > a; a++) n.push({
                        name: i,
                        value: s[a]
                    });
                else null !== s && "undefined" != typeof s && n.push({
                    name: this.name,
                    value: s
                })
            }
        }), e.param(n)
    }, e.fn.fieldValue = function (t) {
        for (var n = [], i = 0, s = this.length; s > i; i++) {
            var a = this[i],
                o = e.fieldValue(a, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(n, o) : n.push(o))
        }
        return n
    }, e.fieldValue = function (t, n) {
        var i = t.name,
            s = t.type,
            a = t.tagName.toLowerCase();
        if (void 0 === n && (n = !0), n && (!i || t.disabled || "reset" == s || "button" == s || ("checkbox" == s || "radio" == s) && !t.checked || ("submit" == s || "image" == s) && t.form && t.form.clk != t || "select" == a && -1 == t.selectedIndex)) return null;
        if ("select" == a) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var r = [], c = t.options, l = "select-one" == s, d = l ? o + 1 : c.length, u = l ? o : 0; d > u; u++) {
                var h = c[u];
                if (h.selected) {
                    var p = h.value;
                    if (p || (p = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value), l) return p;
                    r.push(p)
                }
            }
            return r
        }
        return e(t).val()
    }, e.fn.clearForm = function () {
        return this.each(function () {
            e("input,select,textarea", this).clearFields()
        })
    }, e.fn.clearFields = e.fn.clearInputs = function () {
        var e = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var t = this.type,
                n = this.tagName.toLowerCase();
            e.test(t) || "textarea" == n ? this.value = "" : "checkbox" == t || "radio" == t ? this.checked = !1 : "select" == n && (this.selectedIndex = -1)
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var n = this.type;
            if ("checkbox" == n || "radio" == n) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var i = e(this).parent("select");
                t && i[0] && "select-one" == i[0].type && i.find("option").selected(!1), this.selected = t
            }
        })
    }
}(jQuery),
function (e) {
    e.ajaxPrefilter(function (e) {
        return e.iframe ? "iframe" : void 0
    }), e.ajaxTransport("iframe", function (t) {
        function n() {
            e(c).each(function () {
                this.remove()
            }), e(l).each(function () {
                this.disabled = !1
            }), i.attr("action", a || "").attr("target", o || "").attr("enctype", r || ""), s.attr("src", "javascript:false;").remove()
        }
        var i = null,
            s = null,
            a = null,
            o = null,
            r = null,
            c = [],
            l = [],
            d = e(t.files).filter(":file:enabled");
        return t.dataTypes.shift(), d.length ? (d.each(function () {
            null !== i && this.form !== i && jQuery.error("All file fields must belong to the same form"), i = this.form
        }), i = e(i), a = i.attr("action"), o = i.attr("target"), r = i.attr("enctype"), i.find(":input:not(:submit)").each(function () {
            !this.disabled && ("file" != this.type || d.index(this) < 0) && (this.disabled = !0, l.push(this))
        }), "string" == typeof t.data && t.data.length > 0 && jQuery.error("data must not be serialized"), e.each(t.data || {}, function (t, n) {
            e.isPlainObject(n) && (t = n.name, n = n.value), c.push(e("<input type='hidden'>").attr("name", t).attr("value", n).appendTo(i))
        }), c.push(e("<input type='hidden' name='X-Requested-With'>").attr("value", "IFrame").appendTo(i)), accepts = t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", */*; q=0.01" : "") : t.accepts["*"], c.push(e("<input type='hidden' name='X-Http-Accept'>").attr("value", accepts).appendTo(i)), {
            send: function (a, o) {
                s = e("<iframe src='javascript:false;' name='iframe-" + e.now() + "' style='display:none'></iframe>"), s.bind("load", function () {
                    s.unbind("load").bind("load", function () {
                        var e = this.contentWindow ? this.contentWindow.document : this.contentDocument ? this.contentDocument : this.document,
                            t = e.documentElement ? e.documentElement : e.body,
                            i = t.getElementsByTagName("textarea")[0],
                            s = i ? i.getAttribute("data-type") : null,
                            a = i ? parseInt(i.getAttribute("response-code")) : 200,
                            r = "OK",
                            c = {
                                text: s ? i.value : t ? t.innerHTML : null
                            }, l = "Content-Type: " + (s || "text/html");
                        o(a, r, c, l), setTimeout(n, 50)
                    }), i.attr("action", t.url).attr("target", s.attr("name")).attr("enctype", "multipart/form-data").get(0).submit()
                }), s.insertAfter(i)
            },
            abort: function () {
                null !== s && (s.unbind("load").attr("src", "javascript:false;"), n())
            }
        }) : void 0
    })
}(jQuery),
function (t) {
    var n;
    t.remotipart = n = {
        setup: function (e) {
            e.append(t("<input />", {
                id: "remotipart_submitted",
                type: "hidden",
                name: "remotipart_submitted",
                value: !0
            })).bind("ajax:beforeSend.remotipart", function (n, i, s) {
                var a = t.extend({}, s);
                return delete a.beforeSend, delete a.data, void 0 === a.dataType && (a.dataType = "script"), t.rails.fire(e, "ajax:remotipartSubmit", [i, a]) ? ("script" == a.dataType && (a.url = a.url.split("?"), ".js" != a.url[0].substr(-3) && (a.url[0] += ".js"), a.url = a.url.join("?")), e.data("remotipartSubmitted", a.dataType), e.ajaxSubmit(a), !1) : void 0
            }).data("remotipartSubmitted", !0)
        },
        teardown: function (e) {
            e.unbind("ajax:beforeSend.remotipart").children("#remotipart_submitted").remove(), delete e.data.remotipartSubmitted
        }
    }, t(document).on("ajax:aborted:file", "form", null, function () {
        var i = t(this);
        return void 0 === i.data("remotipartSubmitted") && n.setup(i), !t.support.submitBubbles && "callFormSubmitBindings" in t.rails && t.rails.callFormSubmitBindings(i) === !1 ? t.rails.stopEverything(e) : (t.rails.handleRemote(i), !1)
    })
}(jQuery);
var Mustache;
! function (e) {
    "undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define ? define(e) : Mustache = e
}(function () {
    function e(e, t) {
        return RegExp.prototype.test.call(e, t)
    }

    function t(t) {
        return !e(m, t)
    }

    function n(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function i(e) {
        return String(e).replace(/[&<>"'\/]/g, function (e) {
            return y[e]
        })
    }

    function s(e) {
        this.string = e, this.tail = e, this.pos = 0
    }

    function a(e, t) {
        this.view = e, this.parent = t, this.clearCache()
    }

    function o() {
        this.clearCache()
    }

    function r(e) {
        for (var t, n = e[3], i = n;
            (t = e[4]) && t.length;) e = t[t.length - 1], i = e[3];
        return [n, i]
    }

    function c(e) {
        function t(e, t, i) {
            if (!n[e]) {
                var s = c(t);
                n[e] = function (e, t) {
                    return s(e, t, i)
                }
            }
            return n[e]
        }
        var n = {};
        return function (n, i, s) {
            for (var a, o, c = "", l = 0, d = e.length; d > l; ++l) switch (a = e[l], a[0]) {
            case "#":
                o = s.slice.apply(s, r(a)), c += n._section(a[1], i, o, t(l, a[4], s));
                break;
            case "^":
                c += n._inverted(a[1], i, t(l, a[4], s));
                break;
            case ">":
                c += n._partial(a[1], i);
                break;
            case "&":
                c += n._name(a[1], i);
                break;
            case "name":
                c += n._escaped(a[1], i);
                break;
            case "text":
                c += a[1]
            }
            return c
        }
    }

    function l(e) {
        for (var t, n, i = [], s = i, a = [], o = 0; o < e.length; ++o) switch (t = e[o], t[0]) {
        case "#":
        case "^":
            t[4] = [], a.push(t), s.push(t), s = t[4];
            break;
        case "/":
            if (0 === a.length) throw new Error("Unopened section: " + t[1]);
            if (n = a.pop(), n[1] !== t[1]) throw new Error("Unclosed section: " + n[1]);
            s = a.length > 0 ? a[a.length - 1][4] : i;
            break;
        default:
            s.push(t)
        }
        if (n = a.pop()) throw new Error("Unclosed section: " + n[1]);
        return i
    }

    function d(e) {
        for (var t, n, i = 0; i < e.length; ++i) t = e[i], n && "text" === n[0] && "text" === t[0] ? (n[1] += t[1], n[3] = t[3], e.splice(i--, 1)) : n = t
    }

    function u(e) {
        if (2 !== e.length) throw new Error("Invalid tags: " + e.join(" "));
        return [new RegExp(n(e[0]) + "\\s*"), new RegExp("\\s*" + n(e[1]))]
    }
    var h = {};
    h.name = "mustache.js", h.version = "0.7.0", h.tags = ["{{", "}}"], h.Scanner = s, h.Context = a, h.Writer = o;
    var p = /\s*/,
        f = /\s+/,
        m = /\S/,
        v = /\s*=/,
        g = /\s*\}/,
        _ = /#|\^|\/|>|\{|&|=|!/,
        b = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, y = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
    h.escape = i, s.prototype.eos = function () {
        return "" === this.tail
    }, s.prototype.scan = function (e) {
        var t = this.tail.match(e);
        return t && 0 === t.index ? (this.tail = this.tail.substring(t[0].length), this.pos += t[0].length, t[0]) : ""
    }, s.prototype.scanUntil = function (e) {
        var t, n = this.tail.search(e);
        switch (n) {
        case -1:
            t = this.tail, this.pos += this.tail.length, this.tail = "";
            break;
        case 0:
            t = "";
            break;
        default:
            t = this.tail.substring(0, n), this.tail = this.tail.substring(n), this.pos += n
        }
        return t
    }, a.make = function (e) {
        return e instanceof a ? e : new a(e)
    }, a.prototype.clearCache = function () {
        this._cache = {}
    }, a.prototype.push = function (e) {
        return new a(e, this)
    }, a.prototype.lookup = function (e) {
        var t = this._cache[e];
        if (!t) {
            if ("." === e) t = this.view;
            else
                for (var n = this; n;) {
                    if (e.indexOf(".") > 0) {
                        var i = e.split("."),
                            s = 0;
                        for (t = n.view; t && s < i.length;) t = t[i[s++]]
                    } else t = n.view[e]; if (null != t) break;
                    n = n.parent
                }
            this._cache[e] = t
        }
        return "function" == typeof t && (t = t.call(this.view)), t
    }, o.prototype.clearCache = function () {
        this._cache = {}, this._partialCache = {}
    }, o.prototype.compile = function (e, t) {
        var n = this._cache[e];
        if (!n) {
            var i = h.parse(e, t);
            n = this._cache[e] = this.compileTokens(i, e)
        }
        return n
    }, o.prototype.compilePartial = function (e, t, n) {
        var i = this.compile(t, n);
        return this._partialCache[e] = i, i
    }, o.prototype.compileTokens = function (e, t) {
        var n = c(e),
            i = this;
        return function (e, s) {
            if (s)
                if ("function" == typeof s) i._loadPartial = s;
                else
                    for (var o in s) i.compilePartial(o, s[o]);
            return n(i, a.make(e), t)
        }
    }, o.prototype.render = function (e, t, n) {
        return this.compile(e)(t, n)
    }, o.prototype._section = function (e, t, n, i) {
        var s = t.lookup(e);
        switch (typeof s) {
        case "object":
            if (b(s)) {
                for (var a = "", o = 0, r = s.length; r > o; ++o) a += i(this, t.push(s[o]));
                return a
            }
            return s ? i(this, t.push(s)) : "";
        case "function":
            var c = this,
                l = function (e) {
                    return c.render(e, t)
                };
            return s.call(t.view, n, l) || "";
        default:
            if (s) return i(this, t)
        }
        return ""
    }, o.prototype._inverted = function (e, t, n) {
        var i = t.lookup(e);
        return !i || b(i) && 0 === i.length ? n(this, t) : ""
    }, o.prototype._partial = function (e, t) {
        e in this._partialCache || !this._loadPartial || this.compilePartial(e, this._loadPartial(e));
        var n = this._partialCache[e];
        return n ? n(t) : ""
    }, o.prototype._name = function (e, t) {
        var n = t.lookup(e);
        return "function" == typeof n && (n = n.call(t.view)), null == n ? "" : String(n)
    }, o.prototype._escaped = function (e, t) {
        return h.escape(this._name(e, t))
    }, h.parse = function (e, i) {
        function a() {
            if (T && !C)
                for (; x.length;) w.splice(x.pop(), 1);
            else x = [];
            T = !1, C = !1
        }
        i = i || h.tags;
        for (var o, r, c, m, b = u(i), y = new s(e), w = [], x = [], T = !1, C = !1; !y.eos();) {
            if (o = y.pos, c = y.scanUntil(b[0]))
                for (var S = 0, k = c.length; k > S; ++S) m = c.charAt(S), t(m) ? x.push(w.length) : C = !0, w.push(["text", m, o, o + 1]), o += 1, "\n" === m && a();
            if (o = y.pos, !y.scan(b[0])) break;
            if (T = !0, r = y.scan(_) || "name", y.scan(p), "=" === r) c = y.scanUntil(v), y.scan(v), y.scanUntil(b[1]);
            else if ("{" === r) {
                var M = new RegExp("\\s*" + n("}" + i[1]));
                c = y.scanUntil(M), y.scan(g), y.scanUntil(b[1]), r = "&"
            } else c = y.scanUntil(b[1]); if (!y.scan(b[1])) throw new Error("Unclosed tag at " + y.pos);
            w.push([r, c, o, y.pos]), ("name" === r || "{" === r || "&" === r) && (C = !0), "=" === r && (i = c.split(f), b = u(i))
        }
        return d(w), l(w)
    };
    var w = new o;
    return h.clearCache = function () {
        return w.clearCache()
    }, h.compile = function (e, t) {
        return w.compile(e, t)
    }, h.compilePartial = function (e, t, n) {
        return w.compilePartial(e, t, n)
    }, h.compileTokens = function (e, t) {
        return w.compileTokens(e, t)
    }, h.render = function (e, t, n) {
        return w.render(e, t, n)
    }, h.to_html = function (e, t, n, i) {
        var s = h.render(e, t, n);
        return "function" != typeof i ? s : (i(s), void 0)
    }, h
}()),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/activity_entry"] = Mustache.compile('<div class="activity-entry {{#is_comment}}discussion-comment formatted-markdown{{/is_comment}}"{{#object_id}} data-object-id="{{ object_id }}"{{/object_id}}{{#discussion_id}} data-discussion-id="{{ discussion_id }}"{{/discussion_id}}>\n    <p class="action">\n        {{#is_comment}}\n        <span class="a11y">Comment made by</span>\n        {{/is_comment}}\n        {{#short_user_entry}}\n        <img class="ico-avatar avatar-sm" src="{{gravatar_url}}" alt="" />\n        {{/short_user_entry}}\n        {{^short_user_entry}}\n        {{#is_comment}}\n            <span class="a11y">Comment made by</span>\n            <img class="ico-avatar avatar-med" src="{{gravatar_url}}" alt="" /> <cite>{{user_name}}</cite>  <time>{{created_at_human}}</time>\n        {{/is_comment}}\n        {{^is_comment}}<span class="is-icon {{ ico_class }}"></span>{{/is_comment}}\n        {{/short_user_entry}}\n        {{{ action }}}\n    </p>\n    {{^short_user_entry}}{{^is_comment}}\n    <p class="metadata"><span class="a11y">{{ verbed_by }}</span> <img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="" /> <cite>{{ user_name }}</cite> <time>{{ created_at_human }}</time></p>\n    {{/is_comment}}{{/short_user_entry}}\n    {{#additional}}\n    <div class="additional">\n        {{{ additional }}}\n    </div><!-- /end .additional -->\n    {{/additional}}\n</div><!-- /end .activity-entry -->\n'), Mustache.compilePartial("articles/activity_entry", '<div class="activity-entry {{#is_comment}}discussion-comment formatted-markdown{{/is_comment}}"{{#object_id}} data-object-id="{{ object_id }}"{{/object_id}}{{#discussion_id}} data-discussion-id="{{ discussion_id }}"{{/discussion_id}}>\n    <p class="action">\n        {{#is_comment}}\n        <span class="a11y">Comment made by</span>\n        {{/is_comment}}\n        {{#short_user_entry}}\n        <img class="ico-avatar avatar-sm" src="{{gravatar_url}}" alt="" />\n        {{/short_user_entry}}\n        {{^short_user_entry}}\n        {{#is_comment}}\n            <span class="a11y">Comment made by</span>\n            <img class="ico-avatar avatar-med" src="{{gravatar_url}}" alt="" /> <cite>{{user_name}}</cite>  <time>{{created_at_human}}</time>\n        {{/is_comment}}\n        {{^is_comment}}<span class="is-icon {{ ico_class }}"></span>{{/is_comment}}\n        {{/short_user_entry}}\n        {{{ action }}}\n    </p>\n    {{^short_user_entry}}{{^is_comment}}\n    <p class="metadata"><span class="a11y">{{ verbed_by }}</span> <img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="" /> <cite>{{ user_name }}</cite> <time>{{ created_at_human }}</time></p>\n    {{/is_comment}}{{/short_user_entry}}\n    {{#additional}}\n    <div class="additional">\n        {{{ additional }}}\n    </div><!-- /end .additional -->\n    {{/additional}}\n</div><!-- /end .activity-entry -->\n'), this.SMT["articles/activity_entry"] = function (e) {
        return e || (e = {}), SMTCache["articles/activity_entry"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/activity_panel"] = Mustache.compile('<!-- Panel: Activity -->\n<div id="tool-activity" class="editor-drawer activity-pane">\n\n    <!-- onboard -->\n\n    <div class="editor-panel-content">\n        {{>forms/activity_comment_form}}\n\n        <h1 class="drawer-title">Recent Activity</h1>\n\n        <div class="drawer-main">\n            <div data-subviews class="sub">\n                {{# events}}\n                    {{>articles/activity_entry}}\n                {{/ events}}\n            </div><!-- /end .sub -->\n        </div><!-- /end .drawer-main -->\n    </div>\n</div>\n'), Mustache.compilePartial("articles/activity_panel", '<!-- Panel: Activity -->\n<div id="tool-activity" class="editor-drawer activity-pane">\n\n    <!-- onboard -->\n\n    <div class="editor-panel-content">\n        {{>forms/activity_comment_form}}\n\n        <h1 class="drawer-title">Recent Activity</h1>\n\n        <div class="drawer-main">\n            <div data-subviews class="sub">\n                {{# events}}\n                    {{>articles/activity_entry}}\n                {{/ events}}\n            </div><!-- /end .sub -->\n        </div><!-- /end .drawer-main -->\n    </div>\n</div>\n'), this.SMT["articles/activity_panel"] = function (e) {
        return e || (e = {}), SMTCache["articles/activity_panel"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/collaborator_role_chooser"] = Mustache.compile('<div class="permissions">\n    <label><input {{^is_editor}}checked="checked"{{/is_editor}} name="member-type" value="reviewer" type="radio" /> <span>Reviewer</span></label>\n    <label><input {{#is_editor}}checked="checked"{{/is_editor}} name="member-type" value="editor" type="radio" /> <span>Editor</span></label>\n    <a data-tooltip class="is-icon ico-hover-help dir-top-center" title="Reviews can read and comment. Editors can read, comment, and edit." href="#help">\n        Help\n        <div class="tooltip hidden" aria-hidden="true">\n            <div class="tooltip-inner constrain">\n                <p><strong>Reviewers</strong> can read and comment.</p>\n                <p><strong>Editors</strong> can read, comment, and edit.</p>\n            </div>\n        </div>\n    </a>\n</div>\n'), Mustache.compilePartial("articles/collaborator_role_chooser", '<div class="permissions">\n    <label><input {{^is_editor}}checked="checked"{{/is_editor}} name="member-type" value="reviewer" type="radio" /> <span>Reviewer</span></label>\n    <label><input {{#is_editor}}checked="checked"{{/is_editor}} name="member-type" value="editor" type="radio" /> <span>Editor</span></label>\n    <a data-tooltip class="is-icon ico-hover-help dir-top-center" title="Reviews can read and comment. Editors can read, comment, and edit." href="#help">\n        Help\n        <div class="tooltip hidden" aria-hidden="true">\n            <div class="tooltip-inner constrain">\n                <p><strong>Reviewers</strong> can read and comment.</p>\n                <p><strong>Editors</strong> can read, comment, and edit.</p>\n            </div>\n        </div>\n    </a>\n</div>\n'), this.SMT["articles/collaborator_role_chooser"] = function (e) {
        return e || (e = {}), SMTCache["articles/collaborator_role_chooser"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/collaborator_view"] = Mustache.compile('<li class="person {{#user}}invited{{/user}}" data-view="collaborator" data-model-id="{{ id }}" data-model-email_to="{{ email }}">\n    <img class="ico-avatar avatar-med" src="{{ gravatar_url }}" />\n    <h2 class="name">{{ user.safe_name }}</h2>\n    <p class="status">\n        {{# active }}\n            {{# is_owner }}\n                <span class="is-icon ico-owner-badge"></span>\n            {{/ is_owner }}\n            {{ role_description }}\n        {{/ active }}\n    </p>\n\n    {{#user_owns_document}}\n        {{^ is_owner }}\n            {{#active}}\n                <form class="manage">\n                    {{> articles/collaborator_role_chooser }}\n                    <label class="btn btn-sm btn-submit">Update {{ user.safe_name }}<input type="submit" /></label>\n                </form><!-- /end .manage -->\n\n                <form accept-charset="UTF-8" action="/collaborate/{{ id }}" class="manage-member" data-main-action="delete" method="post">\n                    <input name="utf8" type="hidden" value="&#x2713;" />\n                    <input name="_method" type="hidden" value="delete" />\n                    <input name="authenticity_token" type="hidden" value="{{ csrf_token }}" />\n                    <input class="is-icon delete-person ico-delete-red" type="submit" value="{{ remove_collaborator_label }}" data-action="delete" />\n                </form><!-- /end .delete -->\n\n                {{! NOTE: Thinking this could be dropped in via JS. }}\n                <a class="is-icon edit-person ico-edit-blue" href="#" data-action="edit">Edit {{ user.safe_name }}</a>\n            {{/active}}\n\n            {{^active}}\n                <form accept-charset="UTF-8" action="/collaborate/{{ id }}/undo" class="manage-member" method="post">\n                    <input name="utf8" type="hidden" value="&#x2713;" />\n                    <input name="authenticity_token" type="hidden" value="{{ csrf_token }}" />\n                    {{> articles/collaborator_role_chooser }}\n                    {{! This submit is for no-JS situations. If there\'s JS, it\'s invisible. }}\n                    <label class="btn btn-sm btn-submit">Add <input type="submit" /></label>\n                </form><!-- /end .reinvite -->\n\n                {{! NOTE: Thinking this could be dropped in via JS. }}\n                <a class="is-icon add-person ico-add-gray" href="#" data-action="reinvite">Reinvite {{ user.safe_name }} to this document</a>\n\n                {{! NOTE: Guessing this would be a confirmation message, dropped in via JS or on form submit. }}\n                <p class="msg-reinvite">\n                    <span class="is-icon icon-check-green">{{ user.safe_name }} has been</span> Invited<span class="a11y">;</span>\n                    <a href="#" data-action="delete">Undo?</a>\n                </p>\n            {{/active}}\n        {{/ is_owner }}\n    {{/user_owns_document}}\n</li><!-- /end .person -->\n'), Mustache.compilePartial("articles/collaborator_view", '<li class="person {{#user}}invited{{/user}}" data-view="collaborator" data-model-id="{{ id }}" data-model-email_to="{{ email }}">\n    <img class="ico-avatar avatar-med" src="{{ gravatar_url }}" />\n    <h2 class="name">{{ user.safe_name }}</h2>\n    <p class="status">\n        {{# active }}\n            {{# is_owner }}\n                <span class="is-icon ico-owner-badge"></span>\n            {{/ is_owner }}\n            {{ role_description }}\n        {{/ active }}\n    </p>\n\n    {{#user_owns_document}}\n        {{^ is_owner }}\n            {{#active}}\n                <form class="manage">\n                    {{> articles/collaborator_role_chooser }}\n                    <label class="btn btn-sm btn-submit">Update {{ user.safe_name }}<input type="submit" /></label>\n                </form><!-- /end .manage -->\n\n                <form accept-charset="UTF-8" action="/collaborate/{{ id }}" class="manage-member" data-main-action="delete" method="post">\n                    <input name="utf8" type="hidden" value="&#x2713;" />\n                    <input name="_method" type="hidden" value="delete" />\n                    <input name="authenticity_token" type="hidden" value="{{ csrf_token }}" />\n                    <input class="is-icon delete-person ico-delete-red" type="submit" value="{{ remove_collaborator_label }}" data-action="delete" />\n                </form><!-- /end .delete -->\n\n                {{! NOTE: Thinking this could be dropped in via JS. }}\n                <a class="is-icon edit-person ico-edit-blue" href="#" data-action="edit">Edit {{ user.safe_name }}</a>\n            {{/active}}\n\n            {{^active}}\n                <form accept-charset="UTF-8" action="/collaborate/{{ id }}/undo" class="manage-member" method="post">\n                    <input name="utf8" type="hidden" value="&#x2713;" />\n                    <input name="authenticity_token" type="hidden" value="{{ csrf_token }}" />\n                    {{> articles/collaborator_role_chooser }}\n                    {{! This submit is for no-JS situations. If there\'s JS, it\'s invisible. }}\n                    <label class="btn btn-sm btn-submit">Add <input type="submit" /></label>\n                </form><!-- /end .reinvite -->\n\n                {{! NOTE: Thinking this could be dropped in via JS. }}\n                <a class="is-icon add-person ico-add-gray" href="#" data-action="reinvite">Reinvite {{ user.safe_name }} to this document</a>\n\n                {{! NOTE: Guessing this would be a confirmation message, dropped in via JS or on form submit. }}\n                <p class="msg-reinvite">\n                    <span class="is-icon icon-check-green">{{ user.safe_name }} has been</span> Invited<span class="a11y">;</span>\n                    <a href="#" data-action="delete">Undo?</a>\n                </p>\n            {{/active}}\n        {{/ is_owner }}\n    {{/user_owns_document}}\n</li><!-- /end .person -->\n'), this.SMT["articles/collaborator_view"] = function (e) {
        return e || (e = {}), SMTCache["articles/collaborator_view"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/collaborator_view_old"] = Mustache.compile('<li class="person {{#buddy.user}}invited{{/buddy.user}}" data-view="collaborator" data-model-id="{{ buddy.id }}" data-model-email_to="{{ buddy.email }}">\n    <img class="ico-avatar avatar-med" src="{{ buddy.gravatar_url }}" />\n    <h2 class="name">{{ buddy.name }}</h2>\n    <p class="status">{{ buddy.role_description }}</p>\n\n    {{#user_owns_document}}\n        {{#buddy.active}}\n            <form class="manage">\n                {{> articles/collaborator_role_chooser }}\n                <label class="btn btn-sm">Update <input type="submit" /></label>\n            </form><!-- /end .manage -->\n\n            {{! <%= form_tag permission_path(buddy), :class=>"manage-member", :method=>:delete, "data-main-action"=>"delete" %> }}\n            <form accept-charset="UTF-8" action="/collaborate/{{ buddy.id }}" class="manage-member" data-main-action="delete" method="post">\n                <div style="margin:0;padding:0;display:inline">\n                    <input name="utf8" type="hidden" value="&#x2713;" />\n                    <input name="_method" type="hidden" value="delete" />\n                    <input name="authenticity_token" type="hidden" value="{{ buddy.csrf_token }}" />\n                </div>\n                <input class="is-icon ico-close-dark" type="submit" value="{{ buddy.remove_collaborator_label }}" />\n            </form><!-- /end .delete -->\n        {{/buddy.active}}\n\n        {{^buddy.active}}\n            {{! <%= form_tag undo_permission_path(buddy), :class=>"manage-member", :method=>:post %> }}\n            <form accept-charset="UTF-8" action="/collaborate/{{ buddy.id }}/undo" class="manage-member" method="post">\n                <div style="margin:0;padding:0;display:inline">\n                    <input name="utf8" type="hidden" value="&#x2713;" />\n                    <input name="authenticity_token" type="hidden" value="{{ buddy.csrf_token }}" />\n                </div>\n                {{> articles/collaborator_role_chooser }}\n                <label class="btn btn-sm">Add <input type="submit" /></label>\n            </form><!-- /end .reinvite -->\n        {{/buddy.active}}\n    {{/user_owns_document}}\n</li><!-- /end .person -->\n'), Mustache.compilePartial("articles/collaborator_view_old", '<li class="person {{#buddy.user}}invited{{/buddy.user}}" data-view="collaborator" data-model-id="{{ buddy.id }}" data-model-email_to="{{ buddy.email }}">\n    <img class="ico-avatar avatar-med" src="{{ buddy.gravatar_url }}" />\n    <h2 class="name">{{ buddy.name }}</h2>\n    <p class="status">{{ buddy.role_description }}</p>\n\n    {{#user_owns_document}}\n        {{#buddy.active}}\n            <form class="manage">\n                {{> articles/collaborator_role_chooser }}\n                <label class="btn btn-sm">Update <input type="submit" /></label>\n            </form><!-- /end .manage -->\n\n            {{! <%= form_tag permission_path(buddy), :class=>"manage-member", :method=>:delete, "data-main-action"=>"delete" %> }}\n            <form accept-charset="UTF-8" action="/collaborate/{{ buddy.id }}" class="manage-member" data-main-action="delete" method="post">\n                <div style="margin:0;padding:0;display:inline">\n                    <input name="utf8" type="hidden" value="&#x2713;" />\n                    <input name="_method" type="hidden" value="delete" />\n                    <input name="authenticity_token" type="hidden" value="{{ buddy.csrf_token }}" />\n                </div>\n                <input class="is-icon ico-close-dark" type="submit" value="{{ buddy.remove_collaborator_label }}" />\n            </form><!-- /end .delete -->\n        {{/buddy.active}}\n\n        {{^buddy.active}}\n            {{! <%= form_tag undo_permission_path(buddy), :class=>"manage-member", :method=>:post %> }}\n            <form accept-charset="UTF-8" action="/collaborate/{{ buddy.id }}/undo" class="manage-member" method="post">\n                <div style="margin:0;padding:0;display:inline">\n                    <input name="utf8" type="hidden" value="&#x2713;" />\n                    <input name="authenticity_token" type="hidden" value="{{ buddy.csrf_token }}" />\n                </div>\n                {{> articles/collaborator_role_chooser }}\n                <label class="btn btn-sm">Add <input type="submit" /></label>\n            </form><!-- /end .reinvite -->\n        {{/buddy.active}}\n    {{/user_owns_document}}\n</li><!-- /end .person -->\n'), this.SMT["articles/collaborator_view_old"] = function (e) {
        return e || (e = {}), SMTCache["articles/collaborator_view_old"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/collaborators_panel"] = Mustache.compile('<div id="tool-people" class="editor-drawer people-pane">\n    <div class="editor-panel-content">\n\n        {{#user_owns_document}}\n            <p class="drawer-head people-head sub" role="tablist">\n                <a class="drawer-tab default-tab" role="tab" href="#current-team">On this document</a>\n                <a class="drawer-tab new-member" role="tab" href="#invite-team">Invite</a>\n            </p>\n        {{/user_owns_document}}\n        {{^user_owns_document}}\n            <h1 class="drawer-head people-head sub">\n                Collaborators\n            </h1>\n        {{/user_owns_document}}\n        \n        <div class="drawer-content people-content sub">\n            <!-- Current team -->\n            <div role="tabpanel" id="current-team">\n                {{#user_owns_document}}\n                    {{^has_active_permissions}}\n                        <div class="promote">\n                            <span class="collabs-arrow"><img src="<%= image_path("arrow-curved.png") %>" alt="" /></span>\n                            <p>Invite people you trust to review or edit your work.</p>\n                        </div>\n                    {{/has_active_permissions}}\n                {{/user_owns_document}}\n                    <ul class="team team-current">\n                        {{! Owner will be mixed in with collabs, but always first\n                        <li class="person">\n                            <img class="ico-avatar avatar-med" src="https://www.gravatar.com/avatar/9984cb8c316b7ef4bb8221a91eb5c3b7?s=48&amp;d=https://editorially.com/assets/ed-avatar.png" />\n                            <h2 class="name">Ethan Marcotte</h2>\n                            <p class="status"><span class="is-icon ico-owner-badge"></span> Owner</p>\n                        </li> }}\n                        {{#permissions.active}}\n                            {{> articles/collaborator_view }}\n                        {{/permissions.active}}\n                    </ul> <!-- /end .team -->\n            </div>\n\n            {{#user_owns_document}}\n                <!-- Past collaborators -->\n                <div role="tabpanel" id="invite-team" class="invite-tab {{^has_past_permissions}}empty-past-collaborators{{/has_past_permissions}}">\n                    <form class="add-new-member" accept-charset="UTF-8" action="{{permissions_path}}" method="post">\n                        <input name="utf8" type="hidden" value="&#x2713;" />\n                        <input name="authenticity_token" type="hidden" value="{{csrf_token}}" />\n                        <input type="hidden" name="article_id" value="{{document.id}}" />\n                        <fieldset>\n                            <p class="member-info">\n                                <label for="add-email">Email address</label>\n                                <span class="email"><input data-placeholder="label" type="text" class="text" value="" name="add-email" id="add-email" placeholder="Email address" /></span>\n                                <label class="btn btn-sm">Invite <input id="add-new-member-confirm" class="submit" type="submit" /></label>\n                            </p>\n                        </fieldset>\n                        <div class="choose-role permissions">\n                            <strong class="grey-label"><label for="type-1">Role:</label></strong>\n                            <label for="type-1"><input checked="checked" name="member-type" id="type-1" value="reviewer" type="radio" /> <span>Reviewer</span></label>\n                            <label for="type-2"><input name="member-type" id="type-2" value="editor" type="radio" /> <span>Editor</span></label>\n                             <a data-tooltip class="is-icon ico-hover-help dir-top-center" title="Reviews can read and comment. Editors can read, comment, and edit." href="#help">\n                                Help\n                                <div class="tooltip hidden" aria-hidden="true">\n                                    <div class="tooltip-inner constrain">\n                                        <p><strong>Reviewers</strong> can read and comment.</p>\n                                        <p><strong>Editors</strong> can read, comment, and edit.</p>\n                                    </div>\n                                </div>\n                            </a>\n                        </div>\n                    </form><!-- /end .add-new-member -->\n\n                    <ul class="team collaborators-pending">\n                        {{#permissions.pending}}\n                            {{> articles/collaborator_view }}\n                        {{/permissions.pending}}\n                    </ul>\n                    <h2 class="drawer-title drawer-title-full">Past collaborators</h1>\n                    <ul class="team collaborators-prior">\n                        {{#permissions.past}}\n                            {{> articles/collaborator_view }}\n                        {{/permissions.past}}\n                    </ul> <!-- /end .team.team-last -->\n                    \n                </div>\n            {{/user_owns_document}}\n        </div>\n\n    </div><!-- /end .editor-panel-content -->\n</div><!-- /end .editor-panel -->\n'), Mustache.compilePartial("articles/collaborators_panel", '<div id="tool-people" class="editor-drawer people-pane">\n    <div class="editor-panel-content">\n\n        {{#user_owns_document}}\n            <p class="drawer-head people-head sub" role="tablist">\n                <a class="drawer-tab default-tab" role="tab" href="#current-team">On this document</a>\n                <a class="drawer-tab new-member" role="tab" href="#invite-team">Invite</a>\n            </p>\n        {{/user_owns_document}}\n        {{^user_owns_document}}\n            <h1 class="drawer-head people-head sub">\n                Collaborators\n            </h1>\n        {{/user_owns_document}}\n        \n        <div class="drawer-content people-content sub">\n            <!-- Current team -->\n            <div role="tabpanel" id="current-team">\n                {{#user_owns_document}}\n                    {{^has_active_permissions}}\n                        <div class="promote">\n                            <span class="collabs-arrow"><img src="<%= image_path("arrow-curved.png") %>" alt="" /></span>\n                            <p>Invite people you trust to review or edit your work.</p>\n                        </div>\n                    {{/has_active_permissions}}\n                {{/user_owns_document}}\n                    <ul class="team team-current">\n                        {{! Owner will be mixed in with collabs, but always first\n                        <li class="person">\n                            <img class="ico-avatar avatar-med" src="https://www.gravatar.com/avatar/9984cb8c316b7ef4bb8221a91eb5c3b7?s=48&amp;d=https://editorially.com/assets/ed-avatar.png" />\n                            <h2 class="name">Ethan Marcotte</h2>\n                            <p class="status"><span class="is-icon ico-owner-badge"></span> Owner</p>\n                        </li> }}\n                        {{#permissions.active}}\n                            {{> articles/collaborator_view }}\n                        {{/permissions.active}}\n                    </ul> <!-- /end .team -->\n            </div>\n\n            {{#user_owns_document}}\n                <!-- Past collaborators -->\n                <div role="tabpanel" id="invite-team" class="invite-tab {{^has_past_permissions}}empty-past-collaborators{{/has_past_permissions}}">\n                    <form class="add-new-member" accept-charset="UTF-8" action="{{permissions_path}}" method="post">\n                        <input name="utf8" type="hidden" value="&#x2713;" />\n                        <input name="authenticity_token" type="hidden" value="{{csrf_token}}" />\n                        <input type="hidden" name="article_id" value="{{document.id}}" />\n                        <fieldset>\n                            <p class="member-info">\n                                <label for="add-email">Email address</label>\n                                <span class="email"><input data-placeholder="label" type="text" class="text" value="" name="add-email" id="add-email" placeholder="Email address" /></span>\n                                <label class="btn btn-sm">Invite <input id="add-new-member-confirm" class="submit" type="submit" /></label>\n                            </p>\n                        </fieldset>\n                        <div class="choose-role permissions">\n                            <strong class="grey-label"><label for="type-1">Role:</label></strong>\n                            <label for="type-1"><input checked="checked" name="member-type" id="type-1" value="reviewer" type="radio" /> <span>Reviewer</span></label>\n                            <label for="type-2"><input name="member-type" id="type-2" value="editor" type="radio" /> <span>Editor</span></label>\n                             <a data-tooltip class="is-icon ico-hover-help dir-top-center" title="Reviews can read and comment. Editors can read, comment, and edit." href="#help">\n                                Help\n                                <div class="tooltip hidden" aria-hidden="true">\n                                    <div class="tooltip-inner constrain">\n                                        <p><strong>Reviewers</strong> can read and comment.</p>\n                                        <p><strong>Editors</strong> can read, comment, and edit.</p>\n                                    </div>\n                                </div>\n                            </a>\n                        </div>\n                    </form><!-- /end .add-new-member -->\n\n                    <ul class="team collaborators-pending">\n                        {{#permissions.pending}}\n                            {{> articles/collaborator_view }}\n                        {{/permissions.pending}}\n                    </ul>\n                    <h2 class="drawer-title drawer-title-full">Past collaborators</h1>\n                    <ul class="team collaborators-prior">\n                        {{#permissions.past}}\n                            {{> articles/collaborator_view }}\n                        {{/permissions.past}}\n                    </ul> <!-- /end .team.team-last -->\n                    \n                </div>\n            {{/user_owns_document}}\n        </div>\n\n    </div><!-- /end .editor-panel-content -->\n</div><!-- /end .editor-panel -->\n'), this.SMT["articles/collaborators_panel"] = function (e) {
        return e || (e = {}), SMTCache["articles/collaborators_panel"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/control_bar"] = Mustache.compile('<div class="doc-control-status msg msg-block visible">\n    <div class="sub{{#is_readonly}} needs-action{{/is_readonly}}{{#is_ack}} needs-action{{/is_ack}}{{#is_wait }} waiting{{/is_wait }}">\n\n        {{!------- REQUESTER OF CONTROL ---------}}\n        {{! User is an editor, but does not have control }}        \n        {{#is_readonly }}\n            <p>\n                <span class="description">\n                    <img src="{{ gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ user_name }}" />\n                    <cite>{{ user_name }}</cite> is editing.\n                </span>\n                <span class="actions">\n                    <a class="btn-simple" data-action="hideControlBar" href="#">Read</a>\n                    or\n                    <a class="btn-simple" data-action="requestControl" href="{{ ask_path }}">Request Control</a>\n                </span>\n            </p>\n        {{/is_readonly }}\n\n        {{! You\'ve asked for control and are waiting for a yea/nay }}\n        {{#is_wait }}\n            <p>\n                <cite>You’ve requested control.</cite> Waiting for a response&hellip;\n                {{> ui/loading }}\n            </p>\n            <a class="msg-close" href="#" data-action="cancelRequest">Cancel request</a>\n        {{/is_wait }}\n\n        {{! Same as above but after a little time }}\n        {{#extended_wait }}\n            <p>\n                Still waiting for a response&hellip;\n                {{> ui/loading }}\n            </p>\n            <a class="msg-close" href="#" data-action="cancelRequest">Cancel request</a>\n        {{/extended_wait }}\n\n        {{! Controlling user is idle and we\'re waiting for them to time out }}\n        {{#countdown }}\n            <p>\n                <img src="{{ gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ user_name }}" />\n                <cite>{{ user_name }}</cite> may be idle.\n                In <span class="time-left">{{time_left}}</span>,\n                you’ll automatically be granted control.\n            </p>\n            <a class="msg-close" href="#" data-action="cancelRequest">Cancel request</a>\n        {{/countdown }}\n\n        {{! You got control! }}\n        {{#is_approved }}\n            <p>\n                {{! This should be two cases. One with timeout and one with\n                explicit granting of control.\n                <cite>{{ user_name }}{{!</cite> approved your request. }}\n                <cite>You’ve been granted control.</cite>\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/is_approved }}\n\n        {{! The controlling user rejected you. }}\n        {{#is_declined }}\n            <p>\n                <img src="{{ gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ user_name }}" />\n                <cite>{{ user_name }}</cite> declined your request.\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/is_declined }}\n\n        {{! The controlling user spontaneously handed you the sceptre of control! }}\n        {{#given_control}}\n            <p>\n                <img src="{{ gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ user_name }}" />\n                <cite>{{ user_name }}</cite> has given you control.\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/given_control}}\n\n        {{! The controlling user is dealing with another request from someone else }}\n        {{#is_pending}}\n            <p>\n                <img src="{{ gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ user_name }}" />\n                <cite>{{ user_name }}</cite> is waiting to respond to a request.\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/is_pending}}\n\n\n        {{!------- CONTROLLING USER ---------}}\n        {{! Someone asked you for control }}\n        {{#is_ack }}\n            <p>\n                <span class="description">\n                    <img src="{{ requesting_user.gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ requesting_user.short_name }}" />\n                    <cite>{{ requesting_user.short_name }}</cite> requested control.\n                </span>\n                <span class="actions">\n                    <a class="btn-simple" data-action="authControl" href="/api/v1/transfer/{{ xfer_id }}/accept">Give control</a>\n                    or\n                    <a class="btn-simple" data-action="authControl" href="/api/v1/transfer/{{ xfer_id }}/decline">Continue editing</a>\n                </span>\n            </p>\n        {{/is_ack }}\n\n        {{! The request timed out while you were working. }}\n        {{#was_active}}\n            <p>\n                Looks like you’re still editing. <cite>We’ve canceled {{ requesting_user.short_name }}’s request.</cite>\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/was_active}}\n\n        {{! You are idle and about to lose control. }}\n        {{#countdown_controller}}\n            <p>\n                <span class="description">\n                    It looks like you’re idle.\n                    In <span class="time-left">{{ time_left }}</span>,\n                    {{ requesting_user.short_name }} will automatically be granted control.\n                </span>\n                <span class="actions">\n                    <a class="btn-simple" data-action="authControl" href="/api/v1/transfer/{{ xfer_id }}/accept">Give control</a>\n                    or\n                    <a class="btn-simple" data-action="authControl" href="/api/v1/transfer/{{ xfer_id }}/decline">Continue editing</a>\n                </span>\n            </p>\n        {{/countdown_controller}}\n\n        {{! You lost control after a timout }}\n        {{#lost_control}}\n            <p>\n                <img src="{{ requesting_user.gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ requesting_user.short_name }}" />\n                <cite>{{ requesting_user.short_name }} was granted control.</cite>\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/lost_control}}\n\n        {{! You spontaneously handed over the rod of writing }}\n        {{#gave_control}}\n            <p>\n                You gave <cite>{{ requesting_user.short_name }}</cite> control.\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/gave_control}}\n        \n    </div><!-- /end .sub -->\n</div><!-- /end .doc-control-status -->\n'), Mustache.compilePartial("articles/control_bar", '<div class="doc-control-status msg msg-block visible">\n    <div class="sub{{#is_readonly}} needs-action{{/is_readonly}}{{#is_ack}} needs-action{{/is_ack}}{{#is_wait }} waiting{{/is_wait }}">\n\n        {{!------- REQUESTER OF CONTROL ---------}}\n        {{! User is an editor, but does not have control }}        \n        {{#is_readonly }}\n            <p>\n                <span class="description">\n                    <img src="{{ gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ user_name }}" />\n                    <cite>{{ user_name }}</cite> is editing.\n                </span>\n                <span class="actions">\n                    <a class="btn-simple" data-action="hideControlBar" href="#">Read</a>\n                    or\n                    <a class="btn-simple" data-action="requestControl" href="{{ ask_path }}">Request Control</a>\n                </span>\n            </p>\n        {{/is_readonly }}\n\n        {{! You\'ve asked for control and are waiting for a yea/nay }}\n        {{#is_wait }}\n            <p>\n                <cite>You’ve requested control.</cite> Waiting for a response&hellip;\n                {{> ui/loading }}\n            </p>\n            <a class="msg-close" href="#" data-action="cancelRequest">Cancel request</a>\n        {{/is_wait }}\n\n        {{! Same as above but after a little time }}\n        {{#extended_wait }}\n            <p>\n                Still waiting for a response&hellip;\n                {{> ui/loading }}\n            </p>\n            <a class="msg-close" href="#" data-action="cancelRequest">Cancel request</a>\n        {{/extended_wait }}\n\n        {{! Controlling user is idle and we\'re waiting for them to time out }}\n        {{#countdown }}\n            <p>\n                <img src="{{ gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ user_name }}" />\n                <cite>{{ user_name }}</cite> may be idle.\n                In <span class="time-left">{{time_left}}</span>,\n                you’ll automatically be granted control.\n            </p>\n            <a class="msg-close" href="#" data-action="cancelRequest">Cancel request</a>\n        {{/countdown }}\n\n        {{! You got control! }}\n        {{#is_approved }}\n            <p>\n                {{! This should be two cases. One with timeout and one with\n                explicit granting of control.\n                <cite>{{ user_name }}{{!</cite> approved your request. }}\n                <cite>You’ve been granted control.</cite>\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/is_approved }}\n\n        {{! The controlling user rejected you. }}\n        {{#is_declined }}\n            <p>\n                <img src="{{ gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ user_name }}" />\n                <cite>{{ user_name }}</cite> declined your request.\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/is_declined }}\n\n        {{! The controlling user spontaneously handed you the sceptre of control! }}\n        {{#given_control}}\n            <p>\n                <img src="{{ gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ user_name }}" />\n                <cite>{{ user_name }}</cite> has given you control.\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/given_control}}\n\n        {{! The controlling user is dealing with another request from someone else }}\n        {{#is_pending}}\n            <p>\n                <img src="{{ gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ user_name }}" />\n                <cite>{{ user_name }}</cite> is waiting to respond to a request.\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/is_pending}}\n\n\n        {{!------- CONTROLLING USER ---------}}\n        {{! Someone asked you for control }}\n        {{#is_ack }}\n            <p>\n                <span class="description">\n                    <img src="{{ requesting_user.gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ requesting_user.short_name }}" />\n                    <cite>{{ requesting_user.short_name }}</cite> requested control.\n                </span>\n                <span class="actions">\n                    <a class="btn-simple" data-action="authControl" href="/api/v1/transfer/{{ xfer_id }}/accept">Give control</a>\n                    or\n                    <a class="btn-simple" data-action="authControl" href="/api/v1/transfer/{{ xfer_id }}/decline">Continue editing</a>\n                </span>\n            </p>\n        {{/is_ack }}\n\n        {{! The request timed out while you were working. }}\n        {{#was_active}}\n            <p>\n                Looks like you’re still editing. <cite>We’ve canceled {{ requesting_user.short_name }}’s request.</cite>\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/was_active}}\n\n        {{! You are idle and about to lose control. }}\n        {{#countdown_controller}}\n            <p>\n                <span class="description">\n                    It looks like you’re idle.\n                    In <span class="time-left">{{ time_left }}</span>,\n                    {{ requesting_user.short_name }} will automatically be granted control.\n                </span>\n                <span class="actions">\n                    <a class="btn-simple" data-action="authControl" href="/api/v1/transfer/{{ xfer_id }}/accept">Give control</a>\n                    or\n                    <a class="btn-simple" data-action="authControl" href="/api/v1/transfer/{{ xfer_id }}/decline">Continue editing</a>\n                </span>\n            </p>\n        {{/countdown_controller}}\n\n        {{! You lost control after a timout }}\n        {{#lost_control}}\n            <p>\n                <img src="{{ requesting_user.gravatar_url }}" class="ico-avatar avatar-sm" alt="{{ requesting_user.short_name }}" />\n                <cite>{{ requesting_user.short_name }} was granted control.</cite>\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/lost_control}}\n\n        {{! You spontaneously handed over the rod of writing }}\n        {{#gave_control}}\n            <p>\n                You gave <cite>{{ requesting_user.short_name }}</cite> control.\n            </p>\n            <a class="msg-close" href="#" data-action="hideControlBar">Close this message</a>\n        {{/gave_control}}\n        \n    </div><!-- /end .sub -->\n</div><!-- /end .doc-control-status -->\n'), this.SMT["articles/control_bar"] = function (e) {
        return e || (e = {}), SMTCache["articles/control_bar"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/control_request"] = Mustache.compile('<div class="mod content-outer">\n<div class="content">\n<p>Here be {{ user_name }} requestin\' control. \'yarr.</p>\n</div>\n</div>\n'), Mustache.compilePartial("articles/control_request", '<div class="mod content-outer">\n<div class="content">\n<p>Here be {{ user_name }} requestin\' control. \'yarr.</p>\n</div>\n</div>\n'), this.SMT["articles/control_request"] = function (e) {
        return e || (e = {}), SMTCache["articles/control_request"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/dashboard_tag"] = Mustache.compile('<li data-id="{{ id }}" class="tag{{#active}} active{{/active}}">\n    <a href="{{ filter_url }}">\n        <span class="tag-name">{{ name }}</span>\n        <span class="count">{{ count }}</span>\n    </a>\n</li>\n'), Mustache.compilePartial("articles/dashboard_tag", '<li data-id="{{ id }}" class="tag{{#active}} active{{/active}}">\n    <a href="{{ filter_url }}">\n        <span class="tag-name">{{ name }}</span>\n        <span class="count">{{ count }}</span>\n    </a>\n</li>\n'), this.SMT["articles/dashboard_tag"] = function (e) {
        return e || (e = {}), SMTCache["articles/dashboard_tag"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/dashboard_tag_edit"] = Mustache.compile('<li data-id="{{ id }}" class="tag">\n    <a href="#" class="is-icon ico-delete-red icon-changes delete-tag">Delete</a>\n    <a href="#" class="is-icon ico-redo icon-changes undelete-tag">Undo</a>\n    <label class="a11y">Tag name</label>\n    <input type="text" class="text tag-edit" value="{{ name }}" />\n</li>\n'), Mustache.compilePartial("articles/dashboard_tag_edit", '<li data-id="{{ id }}" class="tag">\n    <a href="#" class="is-icon ico-delete-red icon-changes delete-tag">Delete</a>\n    <a href="#" class="is-icon ico-redo icon-changes undelete-tag">Undo</a>\n    <label class="a11y">Tag name</label>\n    <input type="text" class="text tag-edit" value="{{ name }}" />\n</li>\n'), this.SMT["articles/dashboard_tag_edit"] = function (e) {
        return e || (e = {}), SMTCache["articles/dashboard_tag_edit"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/dashboard_tags"] = Mustache.compile('<div class="grid-col col-tags">\n    <div class="tag-header">\n        <h2>Your Tags</h2>\n        <a class="manage-tags" href="#">Manage</a>\n        <a class="save-tags btn-flat" href="#">Save</a>\n    </div>\n    <ul class="tag-list{{# editing_tags }} tag-list-edit{{/ editing_tags }}">\n        {{# tags }}\n            {{^ editing_tags }}\n                {{> articles/dashboard_tag }}\n            {{/ editing_tags }}\n            {{# editing_tags }}\n                {{> articles/dashboard_tag_edit }}\n            {{/ editing_tags }}\n        {{/ tags }}\n    </ul>\n</div> {{! /end .col-tags }}\n'), Mustache.compilePartial("articles/dashboard_tags", '<div class="grid-col col-tags">\n    <div class="tag-header">\n        <h2>Your Tags</h2>\n        <a class="manage-tags" href="#">Manage</a>\n        <a class="save-tags btn-flat" href="#">Save</a>\n    </div>\n    <ul class="tag-list{{# editing_tags }} tag-list-edit{{/ editing_tags }}">\n        {{# tags }}\n            {{^ editing_tags }}\n                {{> articles/dashboard_tag }}\n            {{/ editing_tags }}\n            {{# editing_tags }}\n                {{> articles/dashboard_tag_edit }}\n            {{/ editing_tags }}\n        {{/ tags }}\n    </ul>\n</div> {{! /end .col-tags }}\n'), this.SMT["articles/dashboard_tags"] = function (e) {
        return e || (e = {}), SMTCache["articles/dashboard_tags"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/document_grid_cell"] = Mustache.compile('<div class="doc-cell {{ status_class }} doc-instance" data-article-id="{{ article_id }}" data-article-title="{{ title }}" data-article-archived="{{ archived }}">\n    <form class="{{#can_edit}}select-menu{{/can_edit}} select-status">\n        <div class="current-page status-{{status_downcase}}">\n            <p class="status"><span class="status-text">{{status}}</span> <span class="more">Update</span></p>\n        </div>\n        <div class="sub-menu">\n            <div class="status-picker">\n                <ul>\n                    {{#status_options}}\n                    <li class="status-{{downcased}}">\n                        <input data-outlet="statusForm" name="doc-status" data-status="{{downcased}}" id="select-menu-{{downcased}}-article-{{article_id}}" type="radio" value="{{id}}" {{#selected}}checked="checked"{{/selected}} />\n                        <label for="select-menu-{{downcased}}-article-{{article_id}}">{{text}}</label>\n                    </li>\n                    {{/status_options}}\n                </ul>\n            </div><!-- /end .status-picker -->\n        </div><!-- /end .sub-menu -->\n    </form><!-- /end .select-menu.select-status -->\n\n    <h3 class="doc-title-dash"><a href="{{ editor_path }}">{{# has_unread }}<span class="doc-activity">New acitivity</span>{{/ has_unread }} <span {{# has_unread }}class="doc-title-inner"{{/ has_unread }}>{{ title }}</span></a></h3>\n\n    <div class="cell-foot">\n        <img class="ico-avatar avatar-sm" src="{{ last_updated_user.gravatar_32 }}" alt="" />\n        <p class="when">Activity <time datetime="{{ updated_at_dt }}">{{ updated_at_human }}</time> by <cite>{{ last_updated_user.short_name }}</cite></p>\n        <p class="who">Owned by <cite>{{ user_name }}</cite></p>\n    </div><!-- /end .cell-foot -->\n    {{# can_haz_tags }}\n        <div class="cell-tags{{^ has_tags }} empty{{/ has_tags }}">\n            <a href="#" class="toggle-tagging">Toggle editing tags<span class="icon-content ico-add-sm"></span><span class="icon-content ico-arrow-down-white"></span></a>\n            <span class="tags-onboarding">Add tags…</span>\n            <span class="tags-clipping-indicator">…</span>\n            <ul>\n                {{# tags }}\n                    {{> articles/document_grid_cell_tag }}\n                {{/ tags }}\n            </ul>\n            <span class="new-tag-input-wrapper">\n                <input type="text" class="new-tag-input" />\n            </span>\n        </div> <!-- /end .cell-tags -->\n    {{/ can_haz_tags }}\n\n    {{> articles/document_options}}\n\n</div><!-- /end .doc-cell -->\n'), Mustache.compilePartial("articles/document_grid_cell", '<div class="doc-cell {{ status_class }} doc-instance" data-article-id="{{ article_id }}" data-article-title="{{ title }}" data-article-archived="{{ archived }}">\n    <form class="{{#can_edit}}select-menu{{/can_edit}} select-status">\n        <div class="current-page status-{{status_downcase}}">\n            <p class="status"><span class="status-text">{{status}}</span> <span class="more">Update</span></p>\n        </div>\n        <div class="sub-menu">\n            <div class="status-picker">\n                <ul>\n                    {{#status_options}}\n                    <li class="status-{{downcased}}">\n                        <input data-outlet="statusForm" name="doc-status" data-status="{{downcased}}" id="select-menu-{{downcased}}-article-{{article_id}}" type="radio" value="{{id}}" {{#selected}}checked="checked"{{/selected}} />\n                        <label for="select-menu-{{downcased}}-article-{{article_id}}">{{text}}</label>\n                    </li>\n                    {{/status_options}}\n                </ul>\n            </div><!-- /end .status-picker -->\n        </div><!-- /end .sub-menu -->\n    </form><!-- /end .select-menu.select-status -->\n\n    <h3 class="doc-title-dash"><a href="{{ editor_path }}">{{# has_unread }}<span class="doc-activity">New acitivity</span>{{/ has_unread }} <span {{# has_unread }}class="doc-title-inner"{{/ has_unread }}>{{ title }}</span></a></h3>\n\n    <div class="cell-foot">\n        <img class="ico-avatar avatar-sm" src="{{ last_updated_user.gravatar_32 }}" alt="" />\n        <p class="when">Activity <time datetime="{{ updated_at_dt }}">{{ updated_at_human }}</time> by <cite>{{ last_updated_user.short_name }}</cite></p>\n        <p class="who">Owned by <cite>{{ user_name }}</cite></p>\n    </div><!-- /end .cell-foot -->\n    {{# can_haz_tags }}\n        <div class="cell-tags{{^ has_tags }} empty{{/ has_tags }}">\n            <a href="#" class="toggle-tagging">Toggle editing tags<span class="icon-content ico-add-sm"></span><span class="icon-content ico-arrow-down-white"></span></a>\n            <span class="tags-onboarding">Add tags…</span>\n            <span class="tags-clipping-indicator">…</span>\n            <ul>\n                {{# tags }}\n                    {{> articles/document_grid_cell_tag }}\n                {{/ tags }}\n            </ul>\n            <span class="new-tag-input-wrapper">\n                <input type="text" class="new-tag-input" />\n            </span>\n        </div> <!-- /end .cell-tags -->\n    {{/ can_haz_tags }}\n\n    {{> articles/document_options}}\n\n</div><!-- /end .doc-cell -->\n'), this.SMT["articles/document_grid_cell"] = function (e) {
        return e || (e = {}), SMTCache["articles/document_grid_cell"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/document_grid_cell_tag"] = Mustache.compile('<li class="tag" data-tag-id="{{ id }}">{{ name }}<a class="remove-tag ico-remove-tag" href="#">x</a></li>\n'), Mustache.compilePartial("articles/document_grid_cell_tag", '<li class="tag" data-tag-id="{{ id }}">{{ name }}<a class="remove-tag ico-remove-tag" href="#">x</a></li>\n'), this.SMT["articles/document_grid_cell_tag"] = function (e) {
        return e || (e = {}), SMTCache["articles/document_grid_cell_tag"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/document_invite"] = Mustache.compile('<div class="invite" data-docid="{{ article_id }}" data-status="{{ article_status }}" data-time="{{ updated_at_dt }}" data-relative="{{ updated_at_human }}">\n    <h3 class="title">{{ title }}</h3>\n    <p class="who">Invited <time datetime={{ invited_at_dt }}>{{ invited_at_human }}</time> by <cite>{{ invited_by }}</cite></p>\n    <div class="act">\n        <form accept-charset="UTF-8" action="/collaborate/{{ id }}" method="post" data-reject><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="_method" type="hidden" value="put" /><input name="authenticity_token" type="hidden" value="{{ authenticity_token }}" /></div>\n        <input type="hidden" name="reject" value="true" />\n        <label class="btn btn-med btn-type-secondary">Decline <input type="submit" /></label>\n        </form>\n        <form accept-charset="UTF-8" action="/collaborate/{{ id }}" method="post" data-accept><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="_method" type="hidden" value="put" /><input name="authenticity_token" type="hidden" value="{{ authenticity_token }}" /></div>\n        <label class="btn btn-med accept">Accept <input type="submit" /></label>\n        </form>\n    </div><!-- /end .act -->\n</div><!-- /end .invite -->\n'), Mustache.compilePartial("articles/document_invite", '<div class="invite" data-docid="{{ article_id }}" data-status="{{ article_status }}" data-time="{{ updated_at_dt }}" data-relative="{{ updated_at_human }}">\n    <h3 class="title">{{ title }}</h3>\n    <p class="who">Invited <time datetime={{ invited_at_dt }}>{{ invited_at_human }}</time> by <cite>{{ invited_by }}</cite></p>\n    <div class="act">\n        <form accept-charset="UTF-8" action="/collaborate/{{ id }}" method="post" data-reject><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="_method" type="hidden" value="put" /><input name="authenticity_token" type="hidden" value="{{ authenticity_token }}" /></div>\n        <input type="hidden" name="reject" value="true" />\n        <label class="btn btn-med btn-type-secondary">Decline <input type="submit" /></label>\n        </form>\n        <form accept-charset="UTF-8" action="/collaborate/{{ id }}" method="post" data-accept><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="_method" type="hidden" value="put" /><input name="authenticity_token" type="hidden" value="{{ authenticity_token }}" /></div>\n        <label class="btn btn-med accept">Accept <input type="submit" /></label>\n        </form>\n    </div><!-- /end .act -->\n</div><!-- /end .invite -->\n'), this.SMT["articles/document_invite"] = function (e) {
        return e || (e = {}), SMTCache["articles/document_invite"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/document_options"] = Mustache.compile('<div class="menu tool-menu config-menu">\n	<a class="is-icon doc-config ico-gear" href="#document-config">Configuration</a>\n	<div class="sub-menu">\n		<div class="menu-widget">\n			<nav>\n				<ul>\n					<li><a class="export-document" href="#">Export</a></li>\n                    {{# is_owner }}\n                    <li><a href="/docs/{{article_id}}" class="delete-document">Delete</a></li>\n                    {{# archived }}\n                    <li><a href="/docs/archive/{{article_id}}" class="archive-document">Unarchive</a></li>                    \n                    {{/ archived }}\n                    {{^ archived }}\n                    <li><a href="/docs/archive/{{article_id}}" class="archive-document">Archive</a></li>                    \n                    {{/ archived }}\n                    {{/ is_owner }}\n                    {{^ is_owner }}\n                    <li><a href="/collaborate/{{article_id}}/leave" class="leave-document" rel="nofollow">Leave Document</a></li>\n                    {{/ is_owner}}\n				</ul>\n			</nav>\n		</div><!-- /end .menu-widget -->\n	</div><!-- /end .sub-menu -->\n</div><!-- /end .group-alt.p-less.tool-menu -->\n'), Mustache.compilePartial("articles/document_options", '<div class="menu tool-menu config-menu">\n	<a class="is-icon doc-config ico-gear" href="#document-config">Configuration</a>\n	<div class="sub-menu">\n		<div class="menu-widget">\n			<nav>\n				<ul>\n					<li><a class="export-document" href="#">Export</a></li>\n                    {{# is_owner }}\n                    <li><a href="/docs/{{article_id}}" class="delete-document">Delete</a></li>\n                    {{# archived }}\n                    <li><a href="/docs/archive/{{article_id}}" class="archive-document">Unarchive</a></li>                    \n                    {{/ archived }}\n                    {{^ archived }}\n                    <li><a href="/docs/archive/{{article_id}}" class="archive-document">Archive</a></li>                    \n                    {{/ archived }}\n                    {{/ is_owner }}\n                    {{^ is_owner }}\n                    <li><a href="/collaborate/{{article_id}}/leave" class="leave-document" rel="nofollow">Leave Document</a></li>\n                    {{/ is_owner}}\n				</ul>\n			</nav>\n		</div><!-- /end .menu-widget -->\n	</div><!-- /end .sub-menu -->\n</div><!-- /end .group-alt.p-less.tool-menu -->\n'), this.SMT["articles/document_options"] = function (e) {
        return e || (e = {}), SMTCache["articles/document_options"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/home_row"] = Mustache.compile('<tr class="doc-instance" data-docid="{{ article_id }}" data-article-id="{{ article_id }}" data-article-title="{{ title }}">\n    <th scope="row">\n        <div class="doc">\n            <a class="doc-title-dash" href="{{ editor_path }}">{{ title }}</a>\n        </div><!-- /end .doc -->\n    </th>\n    <td class="status">\n\n        <form class="{{#can_edit}}select-menu{{/can_edit}} select-status">\n            <div class="current-page status-{{status_downcase}}">\n                <span class="doc-status-bubble {{ status_class }}"></span>\n                <span class="status-text">{{status}}</span>\n                {{#can_edit}}<span class="more">Update</span>{{/can_edit}}\n            </div>\n            {{#can_edit}}\n            <div class="sub-menu">\n                <div class="status-picker">\n                    <ul>\n                        {{#status_options}}\n                        <li class="status-{{downcased}}">\n                            <input data-outlet="statusForm" name="doc-status" data-status="{{downcased}}" id="select-menu-{{downcased}}-article-{{article_id}}" type="radio" value="{{id}}" {{selected}} />\n                            <label for="select-menu-{{downcased}}-article-{{article_id}}">{{text}}</label>\n                        </li>\n                        {{/status_options}}\n                    </ul>\n                </div><!-- /end .status-picker -->\n            </div><!-- /end .sub-menu -->\n            {{/can_edit}}\n        </form><!-- /end .select-menu.select-status -->\n\n    </td>\n    <td class="time"><time datetime="{{ updated_at_dt }}">{{ updated_at_human }}</time></td>\n    <td class="owner"><img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="" /> {{ user_name }}</td>\n    <td class="cell-last options">\n        {{>articles/document_options}}\n    </td>\n</tr>\n'), Mustache.compilePartial("articles/home_row", '<tr class="doc-instance" data-docid="{{ article_id }}" data-article-id="{{ article_id }}" data-article-title="{{ title }}">\n    <th scope="row">\n        <div class="doc">\n            <a class="doc-title-dash" href="{{ editor_path }}">{{ title }}</a>\n        </div><!-- /end .doc -->\n    </th>\n    <td class="status">\n\n        <form class="{{#can_edit}}select-menu{{/can_edit}} select-status">\n            <div class="current-page status-{{status_downcase}}">\n                <span class="doc-status-bubble {{ status_class }}"></span>\n                <span class="status-text">{{status}}</span>\n                {{#can_edit}}<span class="more">Update</span>{{/can_edit}}\n            </div>\n            {{#can_edit}}\n            <div class="sub-menu">\n                <div class="status-picker">\n                    <ul>\n                        {{#status_options}}\n                        <li class="status-{{downcased}}">\n                            <input data-outlet="statusForm" name="doc-status" data-status="{{downcased}}" id="select-menu-{{downcased}}-article-{{article_id}}" type="radio" value="{{id}}" {{selected}} />\n                            <label for="select-menu-{{downcased}}-article-{{article_id}}">{{text}}</label>\n                        </li>\n                        {{/status_options}}\n                    </ul>\n                </div><!-- /end .status-picker -->\n            </div><!-- /end .sub-menu -->\n            {{/can_edit}}\n        </form><!-- /end .select-menu.select-status -->\n\n    </td>\n    <td class="time"><time datetime="{{ updated_at_dt }}">{{ updated_at_human }}</time></td>\n    <td class="owner"><img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="" /> {{ user_name }}</td>\n    <td class="cell-last options">\n        {{>articles/document_options}}\n    </td>\n</tr>\n'), this.SMT["articles/home_row"] = function (e) {
        return e || (e = {}), SMTCache["articles/home_row"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/readonly_label"] = Mustache.compile('<p class="doc-label label-readonly" id="readonly-label" data-view="view"><span><em class="is-icon label-readonly">Read only</em></span></p>\n'), Mustache.compilePartial("articles/readonly_label", '<p class="doc-label label-readonly" id="readonly-label" data-view="view"><span><em class="is-icon label-readonly">Read only</em></span></p>\n'), this.SMT["articles/readonly_label"] = function (e) {
        return e || (e = {}), SMTCache["articles/readonly_label"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/recent_document_row"] = Mustache.compile('<li><a class="doc-title" href="{{ activity_path }}">{{ title }}</a> <a class="action-link ico-hover-edit dir-low-left" title="Edit this document" data-tooltip  href="{{ editor_path }}">Activity</a></li>\n'), Mustache.compilePartial("articles/recent_document_row", '<li><a class="doc-title" href="{{ activity_path }}">{{ title }}</a> <a class="action-link ico-hover-edit dir-low-left" title="Edit this document" data-tooltip  href="{{ editor_path }}">Activity</a></li>\n'), this.SMT["articles/recent_document_row"] = function (e) {
        return e || (e = {}), SMTCache["articles/recent_document_row"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/reference"] = Mustache.compile('<div id="hints" class="mod content-outer">\n    <div class="content">\n\n        <div class="mod markdown-hints">\n            <article>\n                <div class="head">\n                    <header>\n                        <h1>Formatting</h1>\n                    </header>\n                    <a href="/help#formatting">Learn more</a>\n                </div><!-- /end .head -->\n\n                <div class="group p-eq">\n                    <ul class="md-ref-heds sect">\n                        <li><code>#</code> Heading 1</li>\n                        <li><code>##</code> Heading 2</li>\n                        <li><code>###</code> Heading 3</li>\n                    </ul>\n\n                    <ul class="sect">\n                        <li><code>*</code><em>italic</em><code>*</code></li>\n                        <li><code>**</code><strong>bold</strong><code>**</code></li>\n                    </ul>\n\n                    <p><code>[</code><em>linked text</em><code>]</code><code>(</code>http://site.com<code>)</code></p>\n                </div><!-- /end .group -->\n\n                <div class="group-alt p-eq">\n                    <ul class="sect">\n                        <li><code>*</code> Bulleted list item</li>\n                        <li><code>*</code> Bulleted list item</li>\n                    </ul>\n\n                    <ol class="sect">\n                        <li><code>1.</code> Numbered list item</li>\n                        <li><code>2.</code> Numbered list item</li>\n                    </ol>\n\n                    <p class="sect"><code>&gt;</code> blockquote text</p>\n\n                    <p><code>`</code>code()<code>`</code></p>\n                </div><!-- /end .group -->\n            </article>\n        </div><!-- /end .markdown-hints -->\n\n    </div><!-- /end .content -->\n</div><!-- /end .mod.content-outer -->\n'), Mustache.compilePartial("articles/reference", '<div id="hints" class="mod content-outer">\n    <div class="content">\n\n        <div class="mod markdown-hints">\n            <article>\n                <div class="head">\n                    <header>\n                        <h1>Formatting</h1>\n                    </header>\n                    <a href="/help#formatting">Learn more</a>\n                </div><!-- /end .head -->\n\n                <div class="group p-eq">\n                    <ul class="md-ref-heds sect">\n                        <li><code>#</code> Heading 1</li>\n                        <li><code>##</code> Heading 2</li>\n                        <li><code>###</code> Heading 3</li>\n                    </ul>\n\n                    <ul class="sect">\n                        <li><code>*</code><em>italic</em><code>*</code></li>\n                        <li><code>**</code><strong>bold</strong><code>**</code></li>\n                    </ul>\n\n                    <p><code>[</code><em>linked text</em><code>]</code><code>(</code>http://site.com<code>)</code></p>\n                </div><!-- /end .group -->\n\n                <div class="group-alt p-eq">\n                    <ul class="sect">\n                        <li><code>*</code> Bulleted list item</li>\n                        <li><code>*</code> Bulleted list item</li>\n                    </ul>\n\n                    <ol class="sect">\n                        <li><code>1.</code> Numbered list item</li>\n                        <li><code>2.</code> Numbered list item</li>\n                    </ol>\n\n                    <p class="sect"><code>&gt;</code> blockquote text</p>\n\n                    <p><code>`</code>code()<code>`</code></p>\n                </div><!-- /end .group -->\n            </article>\n        </div><!-- /end .markdown-hints -->\n\n    </div><!-- /end .content -->\n</div><!-- /end .mod.content-outer -->\n'), this.SMT["articles/reference"] = function (e) {
        return e || (e = {}), SMTCache["articles/reference"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/revision_info"] = Mustache.compile('{{^preview}}\n    {{^revision.latest}}\n        <a class="is-icon ico-round ico-close-mini" href="{{ edit_path }}">Return to current version</a>\n    {{/revision.latest}}\n{{/preview}}\n{{#preview}}\n    <a class="is-icon ico-round ico-close-mini" href="{{ revision_path }}">Return to document</a>\n{{/preview}}\n\n{{#other}}\n    Comparing <a class="active" href="/docs/{{ article_id }}/revisions/{{ revision.id }}">{{{ revision.version_name }}}</a> and <a class="active" href="/docs/{{ article_id }}/revisions/{{ other.id }}">{{{ other.version_name }}}</a>\n{{/other}}\n{{^other}}\n    {{^preview}}{{^revision.latest}}Viewing{{/revision.latest}}{{/preview}}\n    {{#preview}}\n        {{#code_preview}}HTML{{/code_preview}}\n        {{^code_preview}}Preview{{/code_preview}}\n    {{/preview}}\n    <cite{{^revision.latest}} class="active"{{/revision.latest}}>{{{ revision.version_name }}}</cite>\n{{/other}}\n\n{{^other}}\n    {{#revision.restore_path}}\n    {{#can_revert}}\n        <a class="revert" href="{{ revision.restore_path }}">Revert <span class="is-icon ico-round ico-revert"></span></a>\n    {{/can_revert}}\n    {{/revision.restore_path}}\n{{/other}}\n'), Mustache.compilePartial("articles/revision_info", '{{^preview}}\n    {{^revision.latest}}\n        <a class="is-icon ico-round ico-close-mini" href="{{ edit_path }}">Return to current version</a>\n    {{/revision.latest}}\n{{/preview}}\n{{#preview}}\n    <a class="is-icon ico-round ico-close-mini" href="{{ revision_path }}">Return to document</a>\n{{/preview}}\n\n{{#other}}\n    Comparing <a class="active" href="/docs/{{ article_id }}/revisions/{{ revision.id }}">{{{ revision.version_name }}}</a> and <a class="active" href="/docs/{{ article_id }}/revisions/{{ other.id }}">{{{ other.version_name }}}</a>\n{{/other}}\n{{^other}}\n    {{^preview}}{{^revision.latest}}Viewing{{/revision.latest}}{{/preview}}\n    {{#preview}}\n        {{#code_preview}}HTML{{/code_preview}}\n        {{^code_preview}}Preview{{/code_preview}}\n    {{/preview}}\n    <cite{{^revision.latest}} class="active"{{/revision.latest}}>{{{ revision.version_name }}}</cite>\n{{/other}}\n\n{{^other}}\n    {{#revision.restore_path}}\n    {{#can_revert}}\n        <a class="revert" href="{{ revision.restore_path }}">Revert <span class="is-icon ico-round ico-revert"></span></a>\n    {{/can_revert}}\n    {{/revision.restore_path}}\n{{/other}}\n'), this.SMT["articles/revision_info"] = function (e) {
        return e || (e = {}), SMTCache["articles/revision_info"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/timeline_entry"] = Mustache.compile('<li role="tab" class="timeline-entry {{ latest_entry }} {{ named_entry }} {{ active_entry }}">\n	{{>articles/timeline_entry_marker}}\n	{{>articles/timeline_entry_details}}\n</li><!-- /end .timeline-entry -->\n'), Mustache.compilePartial("articles/timeline_entry", '<li role="tab" class="timeline-entry {{ latest_entry }} {{ named_entry }} {{ active_entry }}">\n	{{>articles/timeline_entry_marker}}\n	{{>articles/timeline_entry_details}}\n</li><!-- /end .timeline-entry -->\n'), this.SMT["articles/timeline_entry"] = function (e) {
        return e || (e = {}), SMTCache["articles/timeline_entry"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/timeline_entry_details"] = Mustache.compile('<div class="tooltip-versions version-info" id="version-{{ id }}">\n	<div class="tooltip-versions-inner">\n		{{>articles/timeline_entry_details_content}}\n	</div><!-- /end .tooltip-inner -->\n</div><!-- /end .tooltip.version-info -->\n'), Mustache.compilePartial("articles/timeline_entry_details", '<div class="tooltip-versions version-info" id="version-{{ id }}">\n	<div class="tooltip-versions-inner">\n		{{>articles/timeline_entry_details_content}}\n	</div><!-- /end .tooltip-inner -->\n</div><!-- /end .tooltip.version-info -->\n'), this.SMT["articles/timeline_entry_details"] = function (e) {
        return e || (e = {}), SMTCache["articles/timeline_entry_details"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/timeline_entry_details_content"] = Mustache.compile('        <section{{^description}}{{^active_version_id}} class="empty-entry"{{/active_version_id}}{{/description}}>\n            <div class="comment-head">\n                <a class="version-link" href="/docs/{{ article_id }}/revisions/{{ id }}">\n                    <!-- NOTE: @tangentialism, can you remind me how to upgrade the size of the gravatar? -->\n                    <h1 class="owner"><img class="ico-avatar avatar-med" src="{{ gravatar_url }}" alt="" /> <cite>{{ user_name }}</cite></h1>\n\n                    <ul class="version-meta">\n                        <li class="title">{{{ version_name }}}</li>\n                        <li class="when"><time datetime="{{ created_at_dt }}">{{ created_at_human }}</time></li>\n                    </ul>\n                </a><!-- /end .version-link -->\n            </div><!-- /end .comment-head -->\n            <div class="version-main">\n                {{#description}}\n                <div class="comment">\n                    <p>{{ description }}</p>\n                </div><!-- /end .comment -->\n                {{/description}}\n                {{# active_version_id }}\n\n                <a class="compare" href="/docs/{{ article_id }}/revisions/diff/{{ id }}/{{ active_version_id }}">Compare with <b>{{{ active_version_name }}}</b></a>\n\n                {{/ active_version_id }}\n            </div><!-- /end .version-main -->\n        </section>\n'), Mustache.compilePartial("articles/timeline_entry_details_content", '        <section{{^description}}{{^active_version_id}} class="empty-entry"{{/active_version_id}}{{/description}}>\n            <div class="comment-head">\n                <a class="version-link" href="/docs/{{ article_id }}/revisions/{{ id }}">\n                    <!-- NOTE: @tangentialism, can you remind me how to upgrade the size of the gravatar? -->\n                    <h1 class="owner"><img class="ico-avatar avatar-med" src="{{ gravatar_url }}" alt="" /> <cite>{{ user_name }}</cite></h1>\n\n                    <ul class="version-meta">\n                        <li class="title">{{{ version_name }}}</li>\n                        <li class="when"><time datetime="{{ created_at_dt }}">{{ created_at_human }}</time></li>\n                    </ul>\n                </a><!-- /end .version-link -->\n            </div><!-- /end .comment-head -->\n            <div class="version-main">\n                {{#description}}\n                <div class="comment">\n                    <p>{{ description }}</p>\n                </div><!-- /end .comment -->\n                {{/description}}\n                {{# active_version_id }}\n\n                <a class="compare" href="/docs/{{ article_id }}/revisions/diff/{{ id }}/{{ active_version_id }}">Compare with <b>{{{ active_version_name }}}</b></a>\n\n                {{/ active_version_id }}\n            </div><!-- /end .version-main -->\n        </section>\n'), this.SMT["articles/timeline_entry_details_content"] = function (e) {
        return e || (e = {}), SMTCache["articles/timeline_entry_details_content"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/timeline_entry_marker"] = Mustache.compile('<a href="/docs/{{article_id}}/revisions/{{ id }}" class="diff-cat diff-cat-{{ diff_level }}" aria-hidden="true">\n	<span class="diff-circle"><time datetime="{{ created_at_dt }}">{{ created_at_human }} at {{ created_time_human }}</time></span>\n</a>\n'), Mustache.compilePartial("articles/timeline_entry_marker", '<a href="/docs/{{article_id}}/revisions/{{ id }}" class="diff-cat diff-cat-{{ diff_level }}" aria-hidden="true">\n	<span class="diff-circle"><time datetime="{{ created_at_dt }}">{{ created_at_human }} at {{ created_time_human }}</time></span>\n</a>\n'), this.SMT["articles/timeline_entry_marker"] = function (e) {
        return e || (e = {}), SMTCache["articles/timeline_entry_marker"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/title_with_edit_icons"] = Mustache.compile('{{ title }}<span class="is-icon ico-edit-blue"></span>\n<span class="is-icon ico-edit-blue-big"></span>\n'), Mustache.compilePartial("articles/title_with_edit_icons", '{{ title }}<span class="is-icon ico-edit-blue"></span>\n<span class="is-icon ico-edit-blue-big"></span>\n'), this.SMT["articles/title_with_edit_icons"] = function (e) {
        return e || (e = {}), SMTCache["articles/title_with_edit_icons"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/changed_status"] = Mustache.compile('<!-- Somebody changed the status of the document! -->\n<tr>\n	<td class="detail">\n		<div class="inner">\n			<span class="is-icon ico-activity-status">Status: </span>\n			Status changed to <em>{{ new_status }}</em>\n		</div>\n	</td>\n	{{#include_doc_name}}{{>articles/events/docname_td}}{{/include_doc_name}}\n	<td class="who"><img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" /> {{ user_name }}</td>\n</tr>\n'), Mustache.compilePartial("articles/events/changed_status", '<!-- Somebody changed the status of the document! -->\n<tr>\n	<td class="detail">\n		<div class="inner">\n			<span class="is-icon ico-activity-status">Status: </span>\n			Status changed to <em>{{ new_status }}</em>\n		</div>\n	</td>\n	{{#include_doc_name}}{{>articles/events/docname_td}}{{/include_doc_name}}\n	<td class="who"><img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" /> {{ user_name }}</td>\n</tr>\n'), this.SMT["articles/events/changed_status"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/changed_status"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/closed_discussion"] = Mustache.compile("<!-- Somebody closed a discussion -->\n"), Mustache.compilePartial("articles/events/closed_discussion", "<!-- Somebody closed a discussion -->\n"), this.SMT["articles/events/closed_discussion"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/closed_discussion"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/created_discussion"] = Mustache.compile("<!-- Somebody created a discussion on the document -->\n"), Mustache.compilePartial("articles/events/created_discussion", "<!-- Somebody created a discussion on the document -->\n"), this.SMT["articles/events/created_discussion"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/created_discussion"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/created_document"] = Mustache.compile('<!-- Somebody created a document -->\n<tr>\n	<td class="detail">\n		<div class="inner">\n			Document created\n		</div>\n	</td>\n	{{#include_doc_name}}{{>articles/events/docname_td}}{{/include_doc_name}}\n	<td class="who"><img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="" /> {{ user_name }}</td>\n</tr>\n'), Mustache.compilePartial("articles/events/created_document", '<!-- Somebody created a document -->\n<tr>\n	<td class="detail">\n		<div class="inner">\n			Document created\n		</div>\n	</td>\n	{{#include_doc_name}}{{>articles/events/docname_td}}{{/include_doc_name}}\n	<td class="who"><img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="" /> {{ user_name }}</td>\n</tr>\n'), this.SMT["articles/events/created_document"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/created_document"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/discussion_comment"] = Mustache.compile(""), Mustache.compilePartial("articles/events/discussion_comment", ""), this.SMT["articles/events/discussion_comment"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/discussion_comment"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/docname_td"] = Mustache.compile('<th scope="row">\n	<div class="doc">\n		<a class="doc-title" href="{{ activity_path }}">{{ title }}</a>\n		<a class="action-link ico-hover-edit dir-low-left" title="Activity for this document" data-tooltip href="{{ editor_path }}">Activity</a>\n	</div><!-- /end .doc -->\n</th>\n'), Mustache.compilePartial("articles/events/docname_td", '<th scope="row">\n	<div class="doc">\n		<a class="doc-title" href="{{ activity_path }}">{{ title }}</a>\n		<a class="action-link ico-hover-edit dir-low-left" title="Activity for this document" data-tooltip href="{{ editor_path }}">Activity</a>\n	</div><!-- /end .doc -->\n</th>\n'), this.SMT["articles/events/docname_td"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/docname_td"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/document_comment"] = Mustache.compile('<tr class="doc-comment">\n    <td class="detail" colspan="2">\n        <div class="inner">\n            <p class="who"><img class="ico-avatar avatar-med" src="{{ gravatar_url }}" alt="Comment posted by " /> <cite>{{ user_name }}</cite></p>\n            <div class="activity-comment">\n                {{{ content }}}\n            </div><!-- /end .activity-comment -->\n        </div><!-- /end .inner -->\n    </td>\n</tr><!-- /end .doc-comment -->\n'), Mustache.compilePartial("articles/events/document_comment", '<tr class="doc-comment">\n    <td class="detail" colspan="2">\n        <div class="inner">\n            <p class="who"><img class="ico-avatar avatar-med" src="{{ gravatar_url }}" alt="Comment posted by " /> <cite>{{ user_name }}</cite></p>\n            <div class="activity-comment">\n                {{{ content }}}\n            </div><!-- /end .activity-comment -->\n        </div><!-- /end .inner -->\n    </td>\n</tr><!-- /end .doc-comment -->\n'), this.SMT["articles/events/document_comment"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/document_comment"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/invited_user"] = Mustache.compile("<!-- Somebody invited somebody else to the document -->\n"), Mustache.compilePartial("articles/events/invited_user", "<!-- Somebody invited somebody else to the document -->\n"), this.SMT["articles/events/invited_user"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/invited_user"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/joined_document"] = Mustache.compile('<tr>\n    <!-- Somebody joined the document -->\n    <td class="new-member">\n        <img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="New team member: " /> <cite>{{ user_name }}</cite> joined this document\n    </td>\n    <th scope="row" colspan="2">\n        <div class="doc">\n            <a class="doc-title" href="{{ activity_path }}">{{ title }}</a>\n            <a class="action-link ico-hover-edit dir-low-left" title="Edit this document" data-tooltip href="{{ editor_path }}">Edit this document</a>\n        </div><!-- /end .doc -->\n    </th>\n</tr>\n'), Mustache.compilePartial("articles/events/joined_document", '<tr>\n    <!-- Somebody joined the document -->\n    <td class="new-member">\n        <img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="New team member: " /> <cite>{{ user_name }}</cite> joined this document\n    </td>\n    <th scope="row" colspan="2">\n        <div class="doc">\n            <a class="doc-title" href="{{ activity_path }}">{{ title }}</a>\n            <a class="action-link ico-hover-edit dir-low-left" title="Edit this document" data-tooltip href="{{ editor_path }}">Edit this document</a>\n        </div><!-- /end .doc -->\n    </th>\n</tr>\n'), this.SMT["articles/events/joined_document"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/joined_document"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/joined_document_th"] = Mustache.compile('<tr>\n	<!-- Somebody joined the document -->\n	<th class="new-member" colspan="3">\n		<img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="New team member: " /> <cite>{{ user_name }}</cite> joined this document\n	</th>\n	{{#include_doc_name}}{{>articles/events/docname_td}}{{/include_doc_name}}\n</tr>\n'), Mustache.compilePartial("articles/events/joined_document_th", '<tr>\n	<!-- Somebody joined the document -->\n	<th class="new-member" colspan="3">\n		<img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="New team member: " /> <cite>{{ user_name }}</cite> joined this document\n	</th>\n	{{#include_doc_name}}{{>articles/events/docname_td}}{{/include_doc_name}}\n</tr>\n'), this.SMT["articles/events/joined_document_th"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/joined_document_th"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/new_owner"] = Mustache.compile("<!-- Ownership changed -->\n"), Mustache.compilePartial("articles/events/new_owner", "<!-- Ownership changed -->\n"), this.SMT["articles/events/new_owner"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/new_owner"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/new_version"] = Mustache.compile('<tr>\n	<td class="detail">\n		<div class="inner">\n			<span class="is-icon ico-activity-version">New version</span>\n			<cite>{{ version_name }}</cite> saved\n		</div>\n	</td>\n	{{#include_doc_name}}{{>articles/events/docname_td}}{{/include_doc_name}}\n	<td class="who"><img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" /> {{ user_name }}</td>\n</tr>\n'), Mustache.compilePartial("articles/events/new_version", '<tr>\n	<td class="detail">\n		<div class="inner">\n			<span class="is-icon ico-activity-version">New version</span>\n			<cite>{{ version_name }}</cite> saved\n		</div>\n	</td>\n	{{#include_doc_name}}{{>articles/events/docname_td}}{{/include_doc_name}}\n	<td class="who"><img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" /> {{ user_name }}</td>\n</tr>\n'), this.SMT["articles/events/new_version"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/new_version"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/removed_user"] = Mustache.compile("<!-- Somebody removed somebody else from the document -->\n"), Mustache.compilePartial("articles/events/removed_user", "<!-- Somebody removed somebody else from the document -->\n"), this.SMT["articles/events/removed_user"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/removed_user"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["articles/events/started_editing"] = Mustache.compile('<tr>\n    <!-- Somebody started editing the document -->\n    <th class="new-member" colspan="3">\n        <img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="Changed control: " /> <cite>{{ user_name }}</cite> started editing\n    </th>\n    {{#include_doc_name}}{{>articles/events/docname_td}}{{/include_doc_name}}\n</tr>\n'), Mustache.compilePartial("articles/events/started_editing", '<tr>\n    <!-- Somebody started editing the document -->\n    <th class="new-member" colspan="3">\n        <img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="Changed control: " /> <cite>{{ user_name }}</cite> started editing\n    </th>\n    {{#include_doc_name}}{{>articles/events/docname_td}}{{/include_doc_name}}\n</tr>\n'), this.SMT["articles/events/started_editing"] = function (e) {
        return e || (e = {}), SMTCache["articles/events/started_editing"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["discussions/activity"] = Mustache.compile('<div class="activity-entry discussion-activity{{^ active}} closed{{/active}}" data-discussion="{{ id }}" data-discussion-cid="{{ cid }}">\n    <!-- FIXME: The above `active` status doesn’t seem available on the activity list, so all threads are currently tagged as closed. -->\n	{{# topic_text }}\n		<a class="title" href="#" data-outlet="discussionTitle">\n			<h2><q class="excerpt">{{ topic_text }}</q></h2>\n            <p class="comment-count">{{comment_count}} <span class="a11y">comments</span></p>\n		</a>\n	{{/ topic_text }}\n\n	<p class="metadata"><img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="" /> <cite>{{ user_name }}</cite> {{ action }} <time datetime="{{ created_at_dt }}">{{ created_at_human }}</time></p>\n</div>\n'), Mustache.compilePartial("discussions/activity", '<div class="activity-entry discussion-activity{{^ active}} closed{{/active}}" data-discussion="{{ id }}" data-discussion-cid="{{ cid }}">\n    <!-- FIXME: The above `active` status doesn’t seem available on the activity list, so all threads are currently tagged as closed. -->\n	{{# topic_text }}\n		<a class="title" href="#" data-outlet="discussionTitle">\n			<h2><q class="excerpt">{{ topic_text }}</q></h2>\n            <p class="comment-count">{{comment_count}} <span class="a11y">comments</span></p>\n		</a>\n	{{/ topic_text }}\n\n	<p class="metadata"><img class="ico-avatar avatar-sm" src="{{ gravatar_url }}" alt="" /> <cite>{{ user_name }}</cite> {{ action }} <time datetime="{{ created_at_dt }}">{{ created_at_human }}</time></p>\n</div>\n'), this.SMT["discussions/activity"] = function (e) {
        return e || (e = {}), SMTCache["discussions/activity"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["discussions/activity_list"] = Mustache.compile('<div class="discuss-view discuss-activity">\n	<h1 class="drawer-title">Open Discussions</h1>\n	<a href="discussions/closed" class="toggle-filter">Closed Discussions</a>\n\n	<div class="drawer-main discuss-main">\n		<div class="sub" data-subviews>\n		    <div class="closed-discussion-alert">\n		        <p>There were 6 discussions closed since your last visit. <a href="discussions/closed">View</a></p>\n		    </div>\n		</div>\n	</div>\n\n	{{> onboarding/discussion }}\n</div>\n'), Mustache.compilePartial("discussions/activity_list", '<div class="discuss-view discuss-activity">\n	<h1 class="drawer-title">Open Discussions</h1>\n	<a href="discussions/closed" class="toggle-filter">Closed Discussions</a>\n\n	<div class="drawer-main discuss-main">\n		<div class="sub" data-subviews>\n		    <div class="closed-discussion-alert">\n		        <p>There were 6 discussions closed since your last visit. <a href="discussions/closed">View</a></p>\n		    </div>\n		</div>\n	</div>\n\n	{{> onboarding/discussion }}\n</div>\n'), this.SMT["discussions/activity_list"] = function (e) {
        return e || (e = {}), SMTCache["discussions/activity_list"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["discussions/comment"] = Mustache.compile('<div class="activity-entry discussion-comment" data-comment-cid="{{ cid }}">\n    <p class="metadata">\n        <span class="a11y">Created by</span> <img src="{{ gravatar_url }}" class="ico-avatar avatar-med" title="{{ user_name }}" alt="" /> <cite>{{ user_name }}</cite> <time datetime="{{ created_at }}">{{ created_at_human }}</time></p>\n        {{# showActions }}\n        <div class="discussion-action menu">\n            <a href="#" class="is-icon icon-hover ico-hover-info comment-menu">Edit/Delete</a>\n            <div class="sub-menu" aria-hidden="false">\n                <div class="menu-widget">\n                        <nav>\n                                <ul class="comment-action">\n                                	{{# canEdit }}\n                                    <li><a href="#" class="edit-comment">Edit</a></li>\n                                    {{/ canEdit }}\n                                    {{# canDelete }}\n                                    <li><a href="#" class="delete-comment">Delete</a></li>\n                                    {{/ canDelete }}\n                                </ul>\n                        </nav>\n                </div>\n            </div>\n        </div>\n        {{/ showActions }}\n        \n    <div class="additional formatted-markdown">\n        {{{ content_html }}}\n        {{^content_html}}\n            {{ content }}\n        {{/content_html}}\n    </div><!-- /end .additional -->\n</div>\n'), Mustache.compilePartial("discussions/comment", '<div class="activity-entry discussion-comment" data-comment-cid="{{ cid }}">\n    <p class="metadata">\n        <span class="a11y">Created by</span> <img src="{{ gravatar_url }}" class="ico-avatar avatar-med" title="{{ user_name }}" alt="" /> <cite>{{ user_name }}</cite> <time datetime="{{ created_at }}">{{ created_at_human }}</time></p>\n        {{# showActions }}\n        <div class="discussion-action menu">\n            <a href="#" class="is-icon icon-hover ico-hover-info comment-menu">Edit/Delete</a>\n            <div class="sub-menu" aria-hidden="false">\n                <div class="menu-widget">\n                        <nav>\n                                <ul class="comment-action">\n                                	{{# canEdit }}\n                                    <li><a href="#" class="edit-comment">Edit</a></li>\n                                    {{/ canEdit }}\n                                    {{# canDelete }}\n                                    <li><a href="#" class="delete-comment">Delete</a></li>\n                                    {{/ canDelete }}\n                                </ul>\n                        </nav>\n                </div>\n            </div>\n        </div>\n        {{/ showActions }}\n        \n    <div class="additional formatted-markdown">\n        {{{ content_html }}}\n        {{^content_html}}\n            {{ content }}\n        {{/content_html}}\n    </div><!-- /end .additional -->\n</div>\n'), this.SMT["discussions/comment"] = function (e) {
        return e || (e = {}), SMTCache["discussions/comment"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["discussions/comment_edit"] = Mustache.compile('<div class="discussion-comment discussion-comment-edit" data-comment-cid="{{ cid }}">\n    <form class="comment-edit-form">\n		<fieldset>\n		    <div class="comment-holder">\n				<label for="comment-txt">Edit this comment</label>\n				<textarea data-outlet="textarea" class="text" name="comment-txt" id="comment-txt" data-placeholder="label">{{ content }}</textarea>\n		    </div>\n			<p class="actions group-alt">\n			    <label class="discuss-btn-cancel-comment">Cancel <input type="reset" /></label>\n				<label class="discuss-btn-edit-comment btn btn-med">Update <input type="submit" /></label>\n			</p>\n		</fieldset>\n	</form>\n</div><!-- /end .activity-entry.discussion-comment -->\n'), Mustache.compilePartial("discussions/comment_edit", '<div class="discussion-comment discussion-comment-edit" data-comment-cid="{{ cid }}">\n    <form class="comment-edit-form">\n		<fieldset>\n		    <div class="comment-holder">\n				<label for="comment-txt">Edit this comment</label>\n				<textarea data-outlet="textarea" class="text" name="comment-txt" id="comment-txt" data-placeholder="label">{{ content }}</textarea>\n		    </div>\n			<p class="actions group-alt">\n			    <label class="discuss-btn-cancel-comment">Cancel <input type="reset" /></label>\n				<label class="discuss-btn-edit-comment btn btn-med">Update <input type="submit" /></label>\n			</p>\n		</fieldset>\n	</form>\n</div><!-- /end .activity-entry.discussion-comment -->\n'), this.SMT["discussions/comment_edit"] = function (e) {
        return e || (e = {}), SMTCache["discussions/comment_edit"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["discussions/discuss_panel"] = Mustache.compile('<div class="editor-drawer discuss-pane">\n	<div class="drawer-head discuss-head sub">\n\n		<p class="group-alt">\n			<a data-outlet="newDiscussionButton" href="/comment/" class="btn-nav discuss-new">New discussion</a>\n			<a data-outlet="cancelDiscussionButton" href="#" class="btn-nav discuss-cancel ico-close-dark-sm" style="display:none;" disabled="disabled">Cancel <span class="xtra">discussion</span></a>\n		</p><!-- /end .group-alt -->\n\n		<ul class="group" data-outlet="navigation">\n			<li><a class="btn-nav discuss-all ico-all-threads" data-action="showActivities" href="#">All <span>discussions</span></a></li>\n			<li><a class="btn-nav discuss-prev ico-prev" data-action="showPreviousDiscussion" href="#"><abbr title="Previous">Prev</abbr></a></li>\n			<li><a class="btn-nav discuss-next ico-next" data-action="showNextDiscussion" href="#">Next</a></li>\n		</ul><!-- /end .group -->\n	</div><!-- /end .discuss-head.sub -->\n\n	<!-- CONTENT -->\n</div>\n'), Mustache.compilePartial("discussions/discuss_panel", '<div class="editor-drawer discuss-pane">\n	<div class="drawer-head discuss-head sub">\n\n		<p class="group-alt">\n			<a data-outlet="newDiscussionButton" href="/comment/" class="btn-nav discuss-new">New discussion</a>\n			<a data-outlet="cancelDiscussionButton" href="#" class="btn-nav discuss-cancel ico-close-dark-sm" style="display:none;" disabled="disabled">Cancel <span class="xtra">discussion</span></a>\n		</p><!-- /end .group-alt -->\n\n		<ul class="group" data-outlet="navigation">\n			<li><a class="btn-nav discuss-all ico-all-threads" data-action="showActivities" href="#">All <span>discussions</span></a></li>\n			<li><a class="btn-nav discuss-prev ico-prev" data-action="showPreviousDiscussion" href="#"><abbr title="Previous">Prev</abbr></a></li>\n			<li><a class="btn-nav discuss-next ico-next" data-action="showNextDiscussion" href="#">Next</a></li>\n		</ul><!-- /end .group -->\n	</div><!-- /end .discuss-head.sub -->\n\n	<!-- CONTENT -->\n</div>\n'), this.SMT["discussions/discuss_panel"] = function (e) {
        return e || (e = {}), SMTCache["discussions/discuss_panel"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["discussions/discussion"] = Mustache.compile('<div class="discuss-view discussion-thread{{^active}} closed{{/active}}">\n\n	<div class="drawer-main discuss-main discuss-main-comments">\n	    <div class="drawer-title discuss-title">\n    	    <h1>\n        		<a data-outlet="discussionMarker" class="excerpt no-excerpt" data-action="refocusDiscussion" href="#">{{ topic_text }}</a>\n        	</h1>\n        	<a class="excerpt-expand" title="Expand/Collapse" href="#"><span class="a11y">Expand/Collapse</span>&hellip;</a>\n	    </div>\n		<div class="sub">\n			<div class="discuss-comments" data-subviews>\n			</div>\n		</div><!-- /end .sub -->\n	</div>\n\n	<div class="discuss-add-comment">\n		{{#active}}\n			<div class="sub">\n				<form class="discuss-form">\n					<fieldset>\n						<div class="entry">\n							<p>\n								<label for="comment-txt">Reply to this discussion</label>\n								<textarea data-outlet="textarea" class="text" name="comment-txt" id="comment-txt" data-placeholder="label"></textarea>\n							</p>\n						</div>\n						<p class="actions">\n							<label data-outlet="submitButton" class="discuss-btn-comment btn btn-med">Comment <input type="submit" /></label>\n							<span role="presentation" class="choix">or</span>\n							<a data-outlet="closeButton" class="discuss-btn-close btn btn-med btn-type-secondary" href="#">Close <span>discussion</span></a>\n						</p>\n					</fieldset>\n				</form><!-- /end .add-comment -->\n			</div>\n		{{/active}}\n		{{^ active}}\n				<div class="sub discuss-closed-status">\n					<a href="#" data-outlet="openButton" class="btn-nav">Reopen</a>\n\n					{{# closing_event }}\n						<p><img src="{{ closing_event.user.gravatar_url }}" class="ico-avatar avatar-sm" />\n							Closed {{ closing_event.created_at_human }} by <cite>{{ closing_event.user.short_name }}</cite>\n						</p>\n					{{/ closing_event }}\n				</div>\n		{{/active}}\n	</div><!-- /end .mod -->\n</div>\n'), Mustache.compilePartial("discussions/discussion", '<div class="discuss-view discussion-thread{{^active}} closed{{/active}}">\n\n	<div class="drawer-main discuss-main discuss-main-comments">\n	    <div class="drawer-title discuss-title">\n    	    <h1>\n        		<a data-outlet="discussionMarker" class="excerpt no-excerpt" data-action="refocusDiscussion" href="#">{{ topic_text }}</a>\n        	</h1>\n        	<a class="excerpt-expand" title="Expand/Collapse" href="#"><span class="a11y">Expand/Collapse</span>&hellip;</a>\n	    </div>\n		<div class="sub">\n			<div class="discuss-comments" data-subviews>\n			</div>\n		</div><!-- /end .sub -->\n	</div>\n\n	<div class="discuss-add-comment">\n		{{#active}}\n			<div class="sub">\n				<form class="discuss-form">\n					<fieldset>\n						<div class="entry">\n							<p>\n								<label for="comment-txt">Reply to this discussion</label>\n								<textarea data-outlet="textarea" class="text" name="comment-txt" id="comment-txt" data-placeholder="label"></textarea>\n							</p>\n						</div>\n						<p class="actions">\n							<label data-outlet="submitButton" class="discuss-btn-comment btn btn-med">Comment <input type="submit" /></label>\n							<span role="presentation" class="choix">or</span>\n							<a data-outlet="closeButton" class="discuss-btn-close btn btn-med btn-type-secondary" href="#">Close <span>discussion</span></a>\n						</p>\n					</fieldset>\n				</form><!-- /end .add-comment -->\n			</div>\n		{{/active}}\n		{{^ active}}\n				<div class="sub discuss-closed-status">\n					<a href="#" data-outlet="openButton" class="btn-nav">Reopen</a>\n\n					{{# closing_event }}\n						<p><img src="{{ closing_event.user.gravatar_url }}" class="ico-avatar avatar-sm" />\n							Closed {{ closing_event.created_at_human }} by <cite>{{ closing_event.user.short_name }}</cite>\n						</p>\n					{{/ closing_event }}\n				</div>\n		{{/active}}\n	</div><!-- /end .mod -->\n</div>\n'), this.SMT["discussions/discussion"] = function (e) {
        return e || (e = {}), SMTCache["discussions/discussion"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["discussions/discussion_list_empty"] = Mustache.compile('<p class="drawer-title no-discussions">Highlight the text you want to talk about and press the “New discussion” button.</p>\n'), Mustache.compilePartial("discussions/discussion_list_empty", '<p class="drawer-title no-discussions">Highlight the text you want to talk about and press the “New discussion” button.</p>\n'), this.SMT["discussions/discussion_list_empty"] = function (e) {
        return e || (e = {}), SMTCache["discussions/discussion_list_empty"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["discussions/new_discussion"] = Mustache.compile('<div class="discuss-view new-discussion">\n	<div class="drawer-main discuss-main">\n	    <div class="drawer-title discuss-title">\n    	    <h1>\n        		<a data-outlet="discussionMarker" class="excerpt no-excerpt" data-action="refocusDiscussion" href="#">{{ topic_text }}</a>\n        	</h1>\n        	<a class="excerpt-expand" href="#"><span class="a11y">Expande/Collapse</span>&hellip;</a>\n	    </div>\n		<div class="sub">\n			<div class="discuss-new-thread">\n				<form>\n					<fieldset>\n						<p>\n							<label for="comment-txt">Start a discussion</label>\n							<textarea data-outlet="textarea" class="text" name="comment-txt" id="comment-txt" data-placeholder="label"></textarea>\n						</p>\n						<p class="group-alt">\n							<label data-outlet="submitButton" class="btn btn-med">Comment <input type="submit" /></label>\n						</p>\n					</fieldset>\n				</form><!-- /end .add-comment -->\n			</div><!-- /end .mod -->\n		</div><!-- /end .sub -->\n	</div><!-- /end .drawer-main -->\n</div>\n'), Mustache.compilePartial("discussions/new_discussion", '<div class="discuss-view new-discussion">\n	<div class="drawer-main discuss-main">\n	    <div class="drawer-title discuss-title">\n    	    <h1>\n        		<a data-outlet="discussionMarker" class="excerpt no-excerpt" data-action="refocusDiscussion" href="#">{{ topic_text }}</a>\n        	</h1>\n        	<a class="excerpt-expand" href="#"><span class="a11y">Expande/Collapse</span>&hellip;</a>\n	    </div>\n		<div class="sub">\n			<div class="discuss-new-thread">\n				<form>\n					<fieldset>\n						<p>\n							<label for="comment-txt">Start a discussion</label>\n							<textarea data-outlet="textarea" class="text" name="comment-txt" id="comment-txt" data-placeholder="label"></textarea>\n						</p>\n						<p class="group-alt">\n							<label data-outlet="submitButton" class="btn btn-med">Comment <input type="submit" /></label>\n						</p>\n					</fieldset>\n				</form><!-- /end .add-comment -->\n			</div><!-- /end .mod -->\n		</div><!-- /end .sub -->\n	</div><!-- /end .drawer-main -->\n</div>\n'), this.SMT["discussions/new_discussion"] = function (e) {
        return e || (e = {}), SMTCache["discussions/new_discussion"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["forms/activity_comment_form"] = Mustache.compile('{{#article}}\n{{#comment_form}}\n{{>forms/form_header}}\n{{/comment_form}}\n    <p class="by"><img title="{{comment_form.user_name}}" src="{{comment_form.gravatar_url}}" class="ico-avatar avatar-med" alt=""></p>\n    <fieldset data-widget="expanded-comment">\n        <p>\n            <label for="doc-comment-txt">Comment on this document</label>\n            <textarea class="text" id="doc-comment-txt" name="comment-txt" data-placeholder="label"></textarea>\n        </p>\n        <div class="more">\n            <p class="submit">\n                <label class="btn btn-med">Add comment <input type="submit"></label>\n            </p>\n        </div>\n    </fieldset>\n</form><!-- /end .new-comment -->\n{{/article}}\n'), Mustache.compilePartial("forms/activity_comment_form", '{{#article}}\n{{#comment_form}}\n{{>forms/form_header}}\n{{/comment_form}}\n    <p class="by"><img title="{{comment_form.user_name}}" src="{{comment_form.gravatar_url}}" class="ico-avatar avatar-med" alt=""></p>\n    <fieldset data-widget="expanded-comment">\n        <p>\n            <label for="doc-comment-txt">Comment on this document</label>\n            <textarea class="text" id="doc-comment-txt" name="comment-txt" data-placeholder="label"></textarea>\n        </p>\n        <div class="more">\n            <p class="submit">\n                <label class="btn btn-med">Add comment <input type="submit"></label>\n            </p>\n        </div>\n    </fieldset>\n</form><!-- /end .new-comment -->\n{{/article}}\n'), this.SMT["forms/activity_comment_form"] = function (e) {
        return e || (e = {}), SMTCache["forms/activity_comment_form"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["forms/archive_form"] = Mustache.compile('{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n	<p>\n	Are you sure you want to {{# archived }}un{{/ archived }}archive the document &#8220;<span class="document-title">{{ title }}</span>&#8221;?\n	</p>\n	<p class="msg-text">\n	This will {{# archived }}un{{/ archived }}archive the document for <em>all</em> users.\n	</p>\n		<p class="group-alt final">\n        <label class="btn btn-med btn-type-secondary reset">Cancel <input type="reset" /></label>\n		<label class="btn btn-med">{{# archived }}Unarchive{{/ archived }}{{^ archived }}Archive{{/ archived }} <input name="commit" type="submit" value="{{# archived }}Unarchive{{/ archived }}{{^ archived }}Archive{{/ archived }} Document" /></label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), Mustache.compilePartial("forms/archive_form", '{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n	<p>\n	Are you sure you want to {{# archived }}un{{/ archived }}archive the document &#8220;<span class="document-title">{{ title }}</span>&#8221;?\n	</p>\n	<p class="msg-text">\n	This will {{# archived }}un{{/ archived }}archive the document for <em>all</em> users.\n	</p>\n		<p class="group-alt final">\n        <label class="btn btn-med btn-type-secondary reset">Cancel <input type="reset" /></label>\n		<label class="btn btn-med">{{# archived }}Unarchive{{/ archived }}{{^ archived }}Archive{{/ archived }} <input name="commit" type="submit" value="{{# archived }}Unarchive{{/ archived }}{{^ archived }}Archive{{/ archived }} Document" /></label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), this.SMT["forms/archive_form"] = function (e) {
        return e || (e = {}), SMTCache["forms/archive_form"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["forms/control_request_form"] = Mustache.compile('{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n			<p>{{ user_name }} has requested control.</p>\n			<p class="group-alt final">\n                <label class="btn btn-med">Approve <input type="submit" value="accept" /></label>\n				<label class="btn btn-med btn-type-secondary">Deny <input type="submit" value="deny" /></label>\n			</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), Mustache.compilePartial("forms/control_request_form", '{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n			<p>{{ user_name }} has requested control.</p>\n			<p class="group-alt final">\n                <label class="btn btn-med">Approve <input type="submit" value="accept" /></label>\n				<label class="btn btn-med btn-type-secondary">Deny <input type="submit" value="deny" /></label>\n			</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), this.SMT["forms/control_request_form"] = function (e) {
        return e || (e = {}), SMTCache["forms/control_request_form"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["forms/delete_form"] = Mustache.compile('{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n	<p>\n	Are you sure you want to delete the document &#8220;<span class="document-title">{{ title }}</span>&#8221;?\n	</p>\n	<p class="msg-text">\n	This will delete the document for <em>all</em> users.\n	</p>\n		<p class="group-alt final">\n        <label class="btn btn-med btn-type-secondary reset">Cancel <input type="reset" /></label>\n		<label class="btn btn-med">Delete <input name="commit" type="submit" value="Delete Document" /></label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), Mustache.compilePartial("forms/delete_form", '{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n	<p>\n	Are you sure you want to delete the document &#8220;<span class="document-title">{{ title }}</span>&#8221;?\n	</p>\n	<p class="msg-text">\n	This will delete the document for <em>all</em> users.\n	</p>\n		<p class="group-alt final">\n        <label class="btn btn-med btn-type-secondary reset">Cancel <input type="reset" /></label>\n		<label class="btn btn-med">Delete <input name="commit" type="submit" value="Delete Document" /></label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), this.SMT["forms/delete_form"] = function (e) {
        return e || (e = {}), SMTCache["forms/delete_form"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["forms/delete_form_generic"] = Mustache.compile('{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n	<p>\n	Are you sure you want to delete this {{ object_type }}?\n	</p>\n	<p class="msg-text">\n	This will delete the {{ object_type }} permanently.\n	</p>\n		<p class="group-alt final">\n        <label class="btn btn-med btn-type-secondary reset">Cancel <input type="reset" /></label>\n		<label class="btn btn-med">Delete <input name="commit" type="submit" value="Delete {{ object_type }}" /></label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), Mustache.compilePartial("forms/delete_form_generic", '{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n	<p>\n	Are you sure you want to delete this {{ object_type }}?\n	</p>\n	<p class="msg-text">\n	This will delete the {{ object_type }} permanently.\n	</p>\n		<p class="group-alt final">\n        <label class="btn btn-med btn-type-secondary reset">Cancel <input type="reset" /></label>\n		<label class="btn btn-med">Delete <input name="commit" type="submit" value="Delete {{ object_type }}" /></label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), this.SMT["forms/delete_form_generic"] = function (e) {
        return e || (e = {}), SMTCache["forms/delete_form_generic"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["forms/document_create_modal"] = Mustache.compile('{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n		<p>\n			<label class="label-primary" for="login-email">New document name</label>\n			<input name="article[title]" type="text" class="input-text" id="newdoc-title" autofocus="autofocus" size="30" />\n		</p>\n\n		<p class="msg-text import" data-pane="optional" id="doc-import" style="display:none;">\n			<label for="login-file"><span class="a11y">Want to import a file?</span>You can import .txt, .md, and .markdown files.</label>\n\n			<input name="article[file]" type="file" id="login-file" accept=".txt,.md,.mdown,.markdown" />\n		</p>\n\n		<p class="group">\n			<a class="tab-open has-icon ico-upload" href="#doc-import">Import a document</a>\n			<a class="tab-open has-icon ico-close-dark" href="#doc-import" style="display:none;">Cancel import</a>\n		</p>\n\n		<p class="group-alt final">\n			<label class="btn btn-med btn-important">OK\n				<input type="submit" name="commit" value="Create Document" />\n			</label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), Mustache.compilePartial("forms/document_create_modal", '{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n		<p>\n			<label class="label-primary" for="login-email">New document name</label>\n			<input name="article[title]" type="text" class="input-text" id="newdoc-title" autofocus="autofocus" size="30" />\n		</p>\n\n		<p class="msg-text import" data-pane="optional" id="doc-import" style="display:none;">\n			<label for="login-file"><span class="a11y">Want to import a file?</span>You can import .txt, .md, and .markdown files.</label>\n\n			<input name="article[file]" type="file" id="login-file" accept=".txt,.md,.mdown,.markdown" />\n		</p>\n\n		<p class="group">\n			<a class="tab-open has-icon ico-upload" href="#doc-import">Import a document</a>\n			<a class="tab-open has-icon ico-close-dark" href="#doc-import" style="display:none;">Cancel import</a>\n		</p>\n\n		<p class="group-alt final">\n			<label class="btn btn-med btn-important">OK\n				<input type="submit" name="commit" value="Create Document" />\n			</label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), this.SMT["forms/document_create_modal"] = function (e) {
        return e || (e = {}), SMTCache["forms/document_create_modal"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["forms/document_export_modal"] = Mustache.compile('{{>forms/form_header}}\n    {{{ flash_block }}}\n    <fieldset class="content modal-export">\n        <h2>Select an export format</h2>\n        <div class="grid">\n            <ul class="grid-col p-eq">\n                <li>\n                    <label for="HTML" class="btn-flat">HTML</label>\n                    <input type="radio" value="html" name="HTML" class="a11y">\n                </li>\n                <li>\n                    <label for="Markdown" class="btn-flat">Markdown (.md)</label>\n                    <input type="radio" value="md" name="Markdown" class="a11y">\n                </li>\n                <li>\n                    <label for="Text" class="btn-flat">Plain text (.txt)</label>\n                    <input type="radio" value="txt" name="Text" class="a11y">\n                </li>\n                <li>\n                    <label for="Latex" class="btn-flat">LaTeX (.tex)</label>\n                    <input type="radio" value="latex" name="Latex" class="a11y">\n                </li>\n            </ul>\n            <ul class="grid-col p-eq">\n                <li>\n                    <label for="rtf" class="btn-flat">Rich text (.rtf)</label>\n                    <input type="radio" value="rtf" name="RTF" class="a11y">\n                </li>\n                <li>\n                    <label for="Docx" class="btn-flat">MS Word (.docx)</label>\n                    <input type="radio" value="docx" name="DOCX" class="a11y">\n                </li>\n                <li>\n                    <label for="Epub" class="btn-flat">ebook (.epub)</label>\n                    <input type="radio" value="epub" name="ePub" class="a11y">\n                </li>\n            </ul>\n        </div> <!-- /end .grid -->\n    </fieldset>\n</form>\n'), Mustache.compilePartial("forms/document_export_modal", '{{>forms/form_header}}\n    {{{ flash_block }}}\n    <fieldset class="content modal-export">\n        <h2>Select an export format</h2>\n        <div class="grid">\n            <ul class="grid-col p-eq">\n                <li>\n                    <label for="HTML" class="btn-flat">HTML</label>\n                    <input type="radio" value="html" name="HTML" class="a11y">\n                </li>\n                <li>\n                    <label for="Markdown" class="btn-flat">Markdown (.md)</label>\n                    <input type="radio" value="md" name="Markdown" class="a11y">\n                </li>\n                <li>\n                    <label for="Text" class="btn-flat">Plain text (.txt)</label>\n                    <input type="radio" value="txt" name="Text" class="a11y">\n                </li>\n                <li>\n                    <label for="Latex" class="btn-flat">LaTeX (.tex)</label>\n                    <input type="radio" value="latex" name="Latex" class="a11y">\n                </li>\n            </ul>\n            <ul class="grid-col p-eq">\n                <li>\n                    <label for="rtf" class="btn-flat">Rich text (.rtf)</label>\n                    <input type="radio" value="rtf" name="RTF" class="a11y">\n                </li>\n                <li>\n                    <label for="Docx" class="btn-flat">MS Word (.docx)</label>\n                    <input type="radio" value="docx" name="DOCX" class="a11y">\n                </li>\n                <li>\n                    <label for="Epub" class="btn-flat">ebook (.epub)</label>\n                    <input type="radio" value="epub" name="ePub" class="a11y">\n                </li>\n            </ul>\n        </div> <!-- /end .grid -->\n    </fieldset>\n</form>\n'), this.SMT["forms/document_export_modal"] = function (e) {
        return e || (e = {}), SMTCache["forms/document_export_modal"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["forms/form_header"] = Mustache.compile('<form accept-charset="UTF-8" action="{{ form_action }}" class="{{ form_class }}" id="{{ form_id }}" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="_method" type="hidden" value="{{ form_method }}" /><input name="authenticity_token" type="hidden" value="{{ authenticity_token }}" /></div>\n'), Mustache.compilePartial("forms/form_header", '<form accept-charset="UTF-8" action="{{ form_action }}" class="{{ form_class }}" id="{{ form_id }}" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="_method" type="hidden" value="{{ form_method }}" /><input name="authenticity_token" type="hidden" value="{{ authenticity_token }}" /></div>\n'), this.SMT["forms/form_header"] = function (e) {
        return e || (e = {}), SMTCache["forms/form_header"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["forms/leave_form"] = Mustache.compile('{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n	<p>\n	Are you sure you want to leave the document &#8220;<span class="document-title">{{ title }}</span>&#8221;?\n	</p>\n		<p class="group-alt final">\n        <label class="btn btn-med btn-type-secondary reset">Cancel <input type="reset" /></label>\n		<label class="btn btn-med">Leave <input name="commit" type="submit" value="Leave Document" /></label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), Mustache.compilePartial("forms/leave_form", '{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n	<p>\n	Are you sure you want to leave the document &#8220;<span class="document-title">{{ title }}</span>&#8221;?\n	</p>\n		<p class="group-alt final">\n        <label class="btn btn-med btn-type-secondary reset">Cancel <input type="reset" /></label>\n		<label class="btn btn-med">Leave <input name="commit" type="submit" value="Leave Document" /></label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), this.SMT["forms/leave_form"] = function (e) {
        return e || (e = {}), SMTCache["forms/leave_form"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["forms/rename_form"] = Mustache.compile('{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n		<p>\n		<label class="label-primary" for="login-email">New document name</label>\n		<input class="input-text" id="rename-title" name="article[title]" size="30" type="text" value="{{ title }}" />\n		</p>\n\n		<p class="group-alt final">\n		<label class="btn btn-med btn-important">OK <input name="commit" type="submit" value="Update Article" /></label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), Mustache.compilePartial("forms/rename_form", '{{>forms/form_header}}\n	{{{ flash_block }}}\n	<fieldset class="content">\n		<p>\n		<label class="label-primary" for="login-email">New document name</label>\n		<input class="input-text" id="rename-title" name="article[title]" size="30" type="text" value="{{ title }}" />\n		</p>\n\n		<p class="group-alt final">\n		<label class="btn btn-med btn-important">OK <input name="commit" type="submit" value="Update Article" /></label>\n		</p><!-- /end .group-alt -->\n	</fieldset>\n</form>\n'), this.SMT["forms/rename_form"] = function (e) {
        return e || (e = {}), SMTCache["forms/rename_form"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["forms/status_picker"] = Mustache.compile('{{#article}}\n<form class="{{#can_edit}}select-menu{{/can_edit}} select-status">\n    <div class="current-page status-{{status_downcase}}">\n        <h1><span class="current-status">{{status}}</span> {{#can_edit}}<span class="more">Update</span>{{/can_edit}}</h1>\n    </div><!-- /end .current-page -->\n    {{#can_edit}}\n    <div class="sub-menu">\n        <div class="status-picker">\n            <ul>\n                {{#status_options}}\n                <li class="status-{{downcased}}">\n                    <input data-outlet="statusForm" name="doc-status" data-status="{{downcased}}" id="select-menu-{{downcased}}" type="radio" value="{{id}}" {{selected}} />\n                    <label for="select-menu-{{downcased}}">{{text}}</label>\n                </li>\n                {{/status_options}}\n            </ul>\n        </div><!-- /end .status-picker -->\n    </div><!-- /end .sub-menu -->\n    {{/can_edit}}\n</form><!-- /end .select-menu.select-status -->\n{{/article}}\n'), Mustache.compilePartial("forms/status_picker", '{{#article}}\n<form class="{{#can_edit}}select-menu{{/can_edit}} select-status">\n    <div class="current-page status-{{status_downcase}}">\n        <h1><span class="current-status">{{status}}</span> {{#can_edit}}<span class="more">Update</span>{{/can_edit}}</h1>\n    </div><!-- /end .current-page -->\n    {{#can_edit}}\n    <div class="sub-menu">\n        <div class="status-picker">\n            <ul>\n                {{#status_options}}\n                <li class="status-{{downcased}}">\n                    <input data-outlet="statusForm" name="doc-status" data-status="{{downcased}}" id="select-menu-{{downcased}}" type="radio" value="{{id}}" {{selected}} />\n                    <label for="select-menu-{{downcased}}">{{text}}</label>\n                </li>\n                {{/status_options}}\n            </ul>\n        </div><!-- /end .status-picker -->\n    </div><!-- /end .sub-menu -->\n    {{/can_edit}}\n</form><!-- /end .select-menu.select-status -->\n{{/article}}\n'), this.SMT["forms/status_picker"] = function (e) {
        return e || (e = {}), SMTCache["forms/status_picker"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["navigation/navigation_cheat_sheet"] = Mustache.compile('  <div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n  </div>\n    <div class="cheat-sheet">\n        <div class="nav-group-no-border">\n            <div class="nav-group-left">\n                <h2 class="nav-hdg-1">Formatting</h2>\n            </div>\n            <div class="nav-group-right align-right format-more">\n                <a href="/help#formatting" target="_blank">Learn more</a>\n            </div>\n        </div>\n        <div class="nav-group">\n            <div class="nav-group-left">\n                <h3 class="nav-hdg-3">Headings</h3>\n            </div>\n            <div class="nav-group-right align-right">\n                <ul>\n                    <li><code>#</code> Heading 1</li>\n                    <li><code>##</code> Heading 2</li>\n                    <li><code>###</code> Heading 3</li>\n                </ul>\n            </div>\n        </div>\n        <div class="nav-group">\n            <div class="nav-group-left">\n                <h3 class="nav-hdg-3">Emphasis</h3>\n            </div>\n            <div class="nav-group-right">\n                <ul class="h-list">\n                    <li><code>*</code><em>italic</em><code>*</code></li>\n                    <li class="cheat-sheet-bold"><code>**</code><strong>bold</strong><code>**</code></li>\n                </ul>\n            </div>\n        </div>\n        <div class="nav-group">\n            <div class="nav-group-left">\n                <h3 class="nav-hdg-3">Blockquote</h3>\n            </div>\n            <div class="nav-group-right">\n                <p><code>&gt;</code> <em>blockquote text</em></p>\n            </div>\n        </div>\n        <div class="nav-group">\n            <h3 class="nav-hdg-3">Lists</h3>\n            <div class="nav-group-left">\n                <ul>\n                    <li><code>*</code> Bulleted</li>\n                    <li><code>*</code> Bulleted</li>\n                </ul>\n            </div>\n            <div class="nav-group-right">\n                <ol>\n                    <li><code>1.</code> Numbered</li>\n                    <li><code>2.</code> Numbered</li>\n                </ol>\n            </div>\n        </div>\n        <div class="nav-group">\n            <div class="nav-group-left">\n                <h3 class="nav-hdg-3">Code</h3>\n                <p class="mono"><code class="mono">`</code>inline code<code class="mono">`</code></p>\n            </div>\n            <div class="nav-group-right code-block">\n                <div>\n                    <code class="mono">```</code>\n                </div>\n                <p class="mono">code block</p>\n                <div>\n                    <code class="mono">```</code>\n                </div>\n            </div>\n        </div>\n        <div class="nav-group">\n            <h3 class="nav-hdg-3">Links</h3>\n            <p><code>[</code>linked text<code>]</code><code>(</code>http://site.com<code>)</code></p>\n        </div>\n        <div class="nav-group">\n            <h3 class="nav-hdg-3">Images</h3>\n            <p><code>![</code>Alt text<code>]</code><code>(</code>/path/to/img.jpg<code>)</code></p>\n        </div>\n    </div>\n'), Mustache.compilePartial("navigation/navigation_cheat_sheet", '  <div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n  </div>\n    <div class="cheat-sheet">\n        <div class="nav-group-no-border">\n            <div class="nav-group-left">\n                <h2 class="nav-hdg-1">Formatting</h2>\n            </div>\n            <div class="nav-group-right align-right format-more">\n                <a href="/help#formatting" target="_blank">Learn more</a>\n            </div>\n        </div>\n        <div class="nav-group">\n            <div class="nav-group-left">\n                <h3 class="nav-hdg-3">Headings</h3>\n            </div>\n            <div class="nav-group-right align-right">\n                <ul>\n                    <li><code>#</code> Heading 1</li>\n                    <li><code>##</code> Heading 2</li>\n                    <li><code>###</code> Heading 3</li>\n                </ul>\n            </div>\n        </div>\n        <div class="nav-group">\n            <div class="nav-group-left">\n                <h3 class="nav-hdg-3">Emphasis</h3>\n            </div>\n            <div class="nav-group-right">\n                <ul class="h-list">\n                    <li><code>*</code><em>italic</em><code>*</code></li>\n                    <li class="cheat-sheet-bold"><code>**</code><strong>bold</strong><code>**</code></li>\n                </ul>\n            </div>\n        </div>\n        <div class="nav-group">\n            <div class="nav-group-left">\n                <h3 class="nav-hdg-3">Blockquote</h3>\n            </div>\n            <div class="nav-group-right">\n                <p><code>&gt;</code> <em>blockquote text</em></p>\n            </div>\n        </div>\n        <div class="nav-group">\n            <h3 class="nav-hdg-3">Lists</h3>\n            <div class="nav-group-left">\n                <ul>\n                    <li><code>*</code> Bulleted</li>\n                    <li><code>*</code> Bulleted</li>\n                </ul>\n            </div>\n            <div class="nav-group-right">\n                <ol>\n                    <li><code>1.</code> Numbered</li>\n                    <li><code>2.</code> Numbered</li>\n                </ol>\n            </div>\n        </div>\n        <div class="nav-group">\n            <div class="nav-group-left">\n                <h3 class="nav-hdg-3">Code</h3>\n                <p class="mono"><code class="mono">`</code>inline code<code class="mono">`</code></p>\n            </div>\n            <div class="nav-group-right code-block">\n                <div>\n                    <code class="mono">```</code>\n                </div>\n                <p class="mono">code block</p>\n                <div>\n                    <code class="mono">```</code>\n                </div>\n            </div>\n        </div>\n        <div class="nav-group">\n            <h3 class="nav-hdg-3">Links</h3>\n            <p><code>[</code>linked text<code>]</code><code>(</code>http://site.com<code>)</code></p>\n        </div>\n        <div class="nav-group">\n            <h3 class="nav-hdg-3">Images</h3>\n            <p><code>![</code>Alt text<code>]</code><code>(</code>/path/to/img.jpg<code>)</code></p>\n        </div>\n    </div>\n'), this.SMT["navigation/navigation_cheat_sheet"] = function (e) {
        return e || (e = {}), SMTCache["navigation/navigation_cheat_sheet"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["navigation/navigation_dash_small_filter"] = Mustache.compile('<div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n</div>\n<ul class="checked-menu">\n    {{#status_options}}\n        <li class="status-{{downcased}}-menu {{#selected}}selected{{/selected}}">\n            <label>\n                <input name="status" data-status="{{downcased}}" type="radio" value="{{id}}" {{#selected}}checked{{/selected}}/>\n                {{ text }}\n            </label>\n        </li>\n    {{/status_options}}\n</ul>\n'), Mustache.compilePartial("navigation/navigation_dash_small_filter", '<div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n</div>\n<ul class="checked-menu">\n    {{#status_options}}\n        <li class="status-{{downcased}}-menu {{#selected}}selected{{/selected}}">\n            <label>\n                <input name="status" data-status="{{downcased}}" type="radio" value="{{id}}" {{#selected}}checked{{/selected}}/>\n                {{ text }}\n            </label>\n        </li>\n    {{/status_options}}\n</ul>\n'), this.SMT["navigation/navigation_dash_small_filter"] = function (e) {
        return e || (e = {}), SMTCache["navigation/navigation_dash_small_filter"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["navigation/navigation_dash_small_screen"] = Mustache.compile('<div class="menu-panel">\n    <nav>\n        <ul class="nav-mobile-list full-width-links">\n            {{# page_dashboard }}\n                {{^ filter.archived }}\n                    <li><a class="has-icon ico-nav-new-doc new-document" href="/docs/new#new-document">New document</a></li>\n                    {{! <li><a class="nav-people" href="#">People</a></li> }}\n                    <li class="{{#filter.owner_only}}selected{{/filter.owner_only}}"><a class="filter-your-docs" href="#">Only show your docs</a></li>\n                    <li><a class="filter-status" href="#">Filter<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                    <li><a class="filter-sort" href="#">Sort<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                    <li><a class="filter-tags" href="#">Tags<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                    <li><a class="has-icon ico-nav-archive nav-archive" href="/archives">Archived documents</a></li>\n                {{/ filter.archived }}\n                {{# filter.archived }}\n                    <li><a class="has-icon ico-nav-archive nav-archive" href="/docs">All Documents</a></li>\n                {{/ filter.archived }}\n            {{/ page_dashboard }}\n\n            {{^ page_dashboard }}\n                <li><a class="has-icon ico-nav-archive nav-archive" href="/docs">All Documents</a></li>\n            {{/ page_dashboard }}\n\n            <li><a class="has-icon ico-nav-help" href="/help">Help</a></li>\n            <li><a class="account" href="/account"><img class="ico-avatar avatar-sm" src="{{ user.gravatar_32 }}" /> Your account</a></li>\n        </ul>\n    </nav>\n</div>\n<div class="sub-menu-panel">\n</div>\n'), Mustache.compilePartial("navigation/navigation_dash_small_screen", '<div class="menu-panel">\n    <nav>\n        <ul class="nav-mobile-list full-width-links">\n            {{# page_dashboard }}\n                {{^ filter.archived }}\n                    <li><a class="has-icon ico-nav-new-doc new-document" href="/docs/new#new-document">New document</a></li>\n                    {{! <li><a class="nav-people" href="#">People</a></li> }}\n                    <li class="{{#filter.owner_only}}selected{{/filter.owner_only}}"><a class="filter-your-docs" href="#">Only show your docs</a></li>\n                    <li><a class="filter-status" href="#">Filter<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                    <li><a class="filter-sort" href="#">Sort<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                    <li><a class="filter-tags" href="#">Tags<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                    <li><a class="has-icon ico-nav-archive nav-archive" href="/archives">Archived documents</a></li>\n                {{/ filter.archived }}\n                {{# filter.archived }}\n                    <li><a class="has-icon ico-nav-archive nav-archive" href="/docs">All Documents</a></li>\n                {{/ filter.archived }}\n            {{/ page_dashboard }}\n\n            {{^ page_dashboard }}\n                <li><a class="has-icon ico-nav-archive nav-archive" href="/docs">All Documents</a></li>\n            {{/ page_dashboard }}\n\n            <li><a class="has-icon ico-nav-help" href="/help">Help</a></li>\n            <li><a class="account" href="/account"><img class="ico-avatar avatar-sm" src="{{ user.gravatar_32 }}" /> Your account</a></li>\n        </ul>\n    </nav>\n</div>\n<div class="sub-menu-panel">\n</div>\n'), this.SMT["navigation/navigation_dash_small_screen"] = function (e) {
        return e || (e = {}), SMTCache["navigation/navigation_dash_small_screen"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["navigation/navigation_dash_small_sort"] = Mustache.compile('<div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n</div>\n<ul class="checked-menu">\n    {{#sort_options}}\n        <li class="{{#selected}}selected{{/selected}}">\n            <label>\n                <input name="sort" type="radio" value="{{id}}" {{#selected}}checked{{/selected}}/>\n                {{ text }}\n            </label>\n        </li>\n    {{/sort_options}}\n</ul>\n'), Mustache.compilePartial("navigation/navigation_dash_small_sort", '<div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n</div>\n<ul class="checked-menu">\n    {{#sort_options}}\n        <li class="{{#selected}}selected{{/selected}}">\n            <label>\n                <input name="sort" type="radio" value="{{id}}" {{#selected}}checked{{/selected}}/>\n                {{ text }}\n            </label>\n        </li>\n    {{/sort_options}}\n</ul>\n'), this.SMT["navigation/navigation_dash_small_sort"] = function (e) {
        return e || (e = {}), SMTCache["navigation/navigation_dash_small_sort"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["navigation/navigation_dash_small_tags"] = Mustache.compile('<div>\n    <div class="nav-back-header">\n        <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n    </div>\n    <div class="tag-header">\n        <h2>Your Tags</h2>\n        <a class="manage-tags" href="#">Manage</a>\n        <a class="save-tags btn-flat" href="#">Save</a>\n    </div>\n    <ul class="tag-list{{# editing_tags }} tag-list-edit{{/ editing_tags }}">\n        {{# tags }}\n            {{^ editing_tags }}\n                {{> articles/dashboard_tag }}\n            {{/ editing_tags }}\n            {{# editing_tags }}\n                {{> articles/dashboard_tag_edit }}\n            {{/ editing_tags }}\n        {{/ tags }}\n    </ul>\n</div>\n'), Mustache.compilePartial("navigation/navigation_dash_small_tags", '<div>\n    <div class="nav-back-header">\n        <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n    </div>\n    <div class="tag-header">\n        <h2>Your Tags</h2>\n        <a class="manage-tags" href="#">Manage</a>\n        <a class="save-tags btn-flat" href="#">Save</a>\n    </div>\n    <ul class="tag-list{{# editing_tags }} tag-list-edit{{/ editing_tags }}">\n        {{# tags }}\n            {{^ editing_tags }}\n                {{> articles/dashboard_tag }}\n            {{/ editing_tags }}\n            {{# editing_tags }}\n                {{> articles/dashboard_tag_edit }}\n            {{/ editing_tags }}\n        {{/ tags }}\n    </ul>\n</div>\n'), this.SMT["navigation/navigation_dash_small_tags"] = function (e) {
        return e || (e = {}), SMTCache["navigation/navigation_dash_small_tags"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["navigation/navigation_main"] = Mustache.compile('<div class="menu-panel">\n    <nav>\n        <div class="nav-header">\n            <div class="desktop-none versions-control">\n                <p class="saved-status is-icon ico-check-dark" id="saved-status">Saved</p>\n                <h2 class="status-document">\n                {{# revisionsInfo }}\n                    {{> articles/revision_info }}\n                {{/ revisionsInfo }}\n                </h2>\n            </div>\n            <!-- /end .tools-hed -->\n            {{# hasWordCount }}\n            <ul class="h-list counts">\n                <li><span class="number word-count">0</span> <span>words</span></li>\n                <li><span class="number char-count">0</span> <span>characters</span></li>\n            </ul>\n            {{/ hasWordCount }}\n        </div>\n        <div class="nav-border">\n            <h4 class="doc-status-hdg"><a class="doc-status status-{{ unified.doc.status_name }} {{# unified.doc.permissions.edit}}has-arrow ico-nav-next-arrow{{/ unified.doc.permissions.edit}}">{{ unified.doc.status_text }}</a></h4>\n        </div>\n\n        {{# unified.can_haz_tags }}\n            {{^ unified.doc.archived }}\n                <div class="cell-tags{{^ has_tags }} empty{{/ has_tags }}">\n                    <a href="#" class="toggle-tagging">Toggle editing tags<span class="icon-content ico-add-sm"></span><span class="icon-content ico-arrow-down-white"></span></a>\n                    <span class="tags-onboarding">Add tags…</span>\n                    <span class="tags-clipping-indicator">…</span>\n                    <ul>\n                        {{# tags }}\n                            {{> articles/document_grid_cell_tag }}\n                        {{/ tags }}\n                    </ul>\n                    <span class="new-tag-input-wrapper">\n                        <input type="text" class="new-tag-input" />\n                    </span>\n                </div> <!-- /end .cell-tags -->\n            {{/ unified.doc.archived }}\n        {{/ unified.can_haz_tags }}\n\n        <div class="nav-desktop">\n            <div class="nav-group">\n                <h3 class="nav-hdg-2">Views</h3>\n                <ul class="h-list views-list">\n                    <li><a href="{{ unified.revision_path }}"><span class="icon-wrapper"><i class="is-icon ico-hover-view-editor"></i></span>Editor</a></li>\n                    <li><a href="{{ unified.revision_path }}/preview"><span class="icon-wrapper"><i class="is-icon ico-hover-view-preview"></i></span>Preview</a></li>\n                    <li><a href="{{ unified.revision_path }}/html"><span class="icon-wrapper"><i class="is-icon ico-hover-view-html"></i></span>HTML</a></li>\n                </ul>\n            </div> <!-- /end .nav-group -->\n            <div class="nav-group">\n                <ul class="full-width-links">\n                    <li><a class="has-icon ico-nav-new-doc new-document" href="/docs/new#new-document">New document</a></li>\n                    <li><a class="has-icon ico-nav-help" href="/help">Help</a></li>\n                    <li><a class="has-icon ico-nav-cheatsheet show-cheat-sheet" href="#">Cheat sheet</a></li>\n                    {{^ isDocOwner }}\n                    <li><a class="has-icon ico-nav-leave leave-document" href="/collaborate/{{ unified.doc.id }}/leave">Leave</a></li>\n                    {{/ isDocOwner}}\n                    {{# isDocOwner }}\n                    <li><a class="has-icon ico-nav-delete delete-document" href="/docs/{{ unified.doc.id }}/delete">Delete</a></li>\n                    <li><a class="has-icon ico-nav-archive archive-document" href="/docs/{{ unified.doc.id }}/archive">{{# unified.doc.archived }}Una{{/ unified.doc.archived }}{{^ unified.doc.archived }}A{{/ unified.doc.archived }}rchive</a></li>\n                    {{/ isDocOwner}}\n\n\n                </ul>\n            </div> <!-- /end .nav-group -->\n            <div class="nav-group">\n                <h3 class="nav-hdg-2">Publishing</h3>\n                <ul class="full-width-links">\n                    {{# unified.user.publications }}\n                    <li><a class="ico-{{ publisher_key }} has-icon" href="/publisher/post/{{ unified.doc.id }}/to/{{ id }}">Send to <span>{{ description }}</span></a></li>\n                    {{/ unified.user.publications }}\n                    {{^ unified.user.publications }}\n                    <li><a class="ico-wordpress has-icon" href="/account/publishing">Connect to <span>WordPress</span></a></li>\n                    <li><a class="ico-dropbox has-icon" href="/account/publishing">Connect to <span>Dropbox</span></a></li>\n                    {{/ unified.user.publications }}\n                </ul>\n            </div> <!-- /end .nav-group -->\n            <div class="nav-group">\n                <h3 class="nav-hdg-2">Export</h3>\n                <ul class="h-list export-list">\n                    <li>\n                        <label for="HTML">HTML <span>.html</span></label>\n                        <input type="radio" value="html" name="HTML" class="a11y">\n                    </li>\n                    <li>\n                        <label for="Markdown">Markdown <span>.md</span></label>\n                        <input type="radio" value="md" name="Markdown" class="a11y">\n                    </li>\n                    <li>\n                        <label for="Text">Plain text <span>.txt</span></label>\n                        <input type="radio" value="txt" name="Text" class="a11y">\n                    </li>\n                    <li>\n                        <label for="Latex">LaTeX <span>.tex</span></label>\n                        <input type="radio" value="latex" name="Latex" class="a11y">\n                    </li>\n                    <li>\n                        <label for="rtf">Rich text <span>.rtf</span></label>\n                        <input type="radio" value="rtf" name="RTF" class="a11y">\n                    </li>\n                    <li>\n                        <label for="Docx">MS Word <span>.docx</span></label>\n                        <input type="radio" value="docx" name="DOCX" class="a11y">\n                    </li>\n                    <li>\n                        <label for="Epub">ebook <span>.epub</span></label>\n                        <input type="radio" value="epub" name="ePub" class="a11y">\n                    </li>\n                </ul>\n            </div> <!-- /end .nav-group -->\n        </div> <!-- /end .nav-desktop -->\n        <div class="nav-mobile">\n            <div class="nav-group views-group">\n                <h3 class="nav-hdg-2">Views</h3>\n                <ul class="h-list views-list">\n                    <li><a href="/docs/{{ unified.doc.id }}"><span class="icon-wrapper"><i class="is-icon ico-hover-view-editor"></i></span>Editor</a></li>\n                    <li><a href="/docs/{{ unified.doc.id }}/preview"><span class="icon-wrapper"><i class="is-icon ico-hover-view-preview"></i></span>Preview</a></li>\n                    <li><a href="/docs/{{ unified.doc.id }}/html"><span class="icon-wrapper"><i class="is-icon ico-hover-view-html"></i></span>HTML</a></li>\n                </ul>\n            </div> <!-- /end .nav-group -->\n            <div class="mobile-list">\n                <ul class="nav-mobile-list full-width-links">\n                    <!--  <li><a class="has-icon ico-hover-versions mobile-versions-link" href="#">Versions<i class="is-icon ico-nav-next-arrow"></i></a></li> -->\n                     <!--\n<li><a class="has-icon ico-hover-people mobile-people-link" title="Collaborators" href="#tool-people">People<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                     <li><a class="has-icon ico-hover-activity mobile-activity-link" title="Activity" href="#tool-activity">Activity<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                     <li><a class="has-icon ico-hover-discuss mobile-discuss-link" title="Discussions" href="#tool-discuss">Discussions<i class="is-icon ico-nav-next-arrow"></i></a></li>\n-->\n                     <li><a class="has-icon ico-hover-home" href="/docs">Home</a></li>\n                     <li><a class="has-icon ico-nav-new-doc new-document" href="/docs/new#new-document">New document</a></li>\n                     <li><a class="has-icon ico-nav-help" href="/help">Help</a></li>\n                     <li><a class="has-icon ico-nav-cheatsheet show-cheat-sheet" href="#">Cheat sheet<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                     {{^ isDocOwner }}\n                     <li><a class="has-icon ico-nav-leave leave-document" href="/collaborate/{{ unified.doc.id }}/leave">Leave</a></li>\n                     {{/ isDocOwner}}\n                     {{# isDocOwner }}\n                     <li><a class="has-icon ico-nav-delete delete-document" href="/docs/{{ unified.doc.id }}/delete">Delete</a></li>\n                     <li><a class="has-icon ico-nav-archive archive-document" href="/docs/{{ unified.doc.id }}/archive">{{# unified.doc.archived }}Una{{/ unified.doc.archived }}{{^ unified.doc.archived }}A{{/ unified.doc.archived }}rchive</a></li>\n                     {{/ isDocOwner}}\n                     <li><a class="has-icon ico-nav-integrations mobile-integrations" href="#">Publishing<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                     <li><a class="has-icon ico-nav-export mobile-export" href="#">Export<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>\n'), Mustache.compilePartial("navigation/navigation_main", '<div class="menu-panel">\n    <nav>\n        <div class="nav-header">\n            <div class="desktop-none versions-control">\n                <p class="saved-status is-icon ico-check-dark" id="saved-status">Saved</p>\n                <h2 class="status-document">\n                {{# revisionsInfo }}\n                    {{> articles/revision_info }}\n                {{/ revisionsInfo }}\n                </h2>\n            </div>\n            <!-- /end .tools-hed -->\n            {{# hasWordCount }}\n            <ul class="h-list counts">\n                <li><span class="number word-count">0</span> <span>words</span></li>\n                <li><span class="number char-count">0</span> <span>characters</span></li>\n            </ul>\n            {{/ hasWordCount }}\n        </div>\n        <div class="nav-border">\n            <h4 class="doc-status-hdg"><a class="doc-status status-{{ unified.doc.status_name }} {{# unified.doc.permissions.edit}}has-arrow ico-nav-next-arrow{{/ unified.doc.permissions.edit}}">{{ unified.doc.status_text }}</a></h4>\n        </div>\n\n        {{# unified.can_haz_tags }}\n            {{^ unified.doc.archived }}\n                <div class="cell-tags{{^ has_tags }} empty{{/ has_tags }}">\n                    <a href="#" class="toggle-tagging">Toggle editing tags<span class="icon-content ico-add-sm"></span><span class="icon-content ico-arrow-down-white"></span></a>\n                    <span class="tags-onboarding">Add tags…</span>\n                    <span class="tags-clipping-indicator">…</span>\n                    <ul>\n                        {{# tags }}\n                            {{> articles/document_grid_cell_tag }}\n                        {{/ tags }}\n                    </ul>\n                    <span class="new-tag-input-wrapper">\n                        <input type="text" class="new-tag-input" />\n                    </span>\n                </div> <!-- /end .cell-tags -->\n            {{/ unified.doc.archived }}\n        {{/ unified.can_haz_tags }}\n\n        <div class="nav-desktop">\n            <div class="nav-group">\n                <h3 class="nav-hdg-2">Views</h3>\n                <ul class="h-list views-list">\n                    <li><a href="{{ unified.revision_path }}"><span class="icon-wrapper"><i class="is-icon ico-hover-view-editor"></i></span>Editor</a></li>\n                    <li><a href="{{ unified.revision_path }}/preview"><span class="icon-wrapper"><i class="is-icon ico-hover-view-preview"></i></span>Preview</a></li>\n                    <li><a href="{{ unified.revision_path }}/html"><span class="icon-wrapper"><i class="is-icon ico-hover-view-html"></i></span>HTML</a></li>\n                </ul>\n            </div> <!-- /end .nav-group -->\n            <div class="nav-group">\n                <ul class="full-width-links">\n                    <li><a class="has-icon ico-nav-new-doc new-document" href="/docs/new#new-document">New document</a></li>\n                    <li><a class="has-icon ico-nav-help" href="/help">Help</a></li>\n                    <li><a class="has-icon ico-nav-cheatsheet show-cheat-sheet" href="#">Cheat sheet</a></li>\n                    {{^ isDocOwner }}\n                    <li><a class="has-icon ico-nav-leave leave-document" href="/collaborate/{{ unified.doc.id }}/leave">Leave</a></li>\n                    {{/ isDocOwner}}\n                    {{# isDocOwner }}\n                    <li><a class="has-icon ico-nav-delete delete-document" href="/docs/{{ unified.doc.id }}/delete">Delete</a></li>\n                    <li><a class="has-icon ico-nav-archive archive-document" href="/docs/{{ unified.doc.id }}/archive">{{# unified.doc.archived }}Una{{/ unified.doc.archived }}{{^ unified.doc.archived }}A{{/ unified.doc.archived }}rchive</a></li>\n                    {{/ isDocOwner}}\n\n\n                </ul>\n            </div> <!-- /end .nav-group -->\n            <div class="nav-group">\n                <h3 class="nav-hdg-2">Publishing</h3>\n                <ul class="full-width-links">\n                    {{# unified.user.publications }}\n                    <li><a class="ico-{{ publisher_key }} has-icon" href="/publisher/post/{{ unified.doc.id }}/to/{{ id }}">Send to <span>{{ description }}</span></a></li>\n                    {{/ unified.user.publications }}\n                    {{^ unified.user.publications }}\n                    <li><a class="ico-wordpress has-icon" href="/account/publishing">Connect to <span>WordPress</span></a></li>\n                    <li><a class="ico-dropbox has-icon" href="/account/publishing">Connect to <span>Dropbox</span></a></li>\n                    {{/ unified.user.publications }}\n                </ul>\n            </div> <!-- /end .nav-group -->\n            <div class="nav-group">\n                <h3 class="nav-hdg-2">Export</h3>\n                <ul class="h-list export-list">\n                    <li>\n                        <label for="HTML">HTML <span>.html</span></label>\n                        <input type="radio" value="html" name="HTML" class="a11y">\n                    </li>\n                    <li>\n                        <label for="Markdown">Markdown <span>.md</span></label>\n                        <input type="radio" value="md" name="Markdown" class="a11y">\n                    </li>\n                    <li>\n                        <label for="Text">Plain text <span>.txt</span></label>\n                        <input type="radio" value="txt" name="Text" class="a11y">\n                    </li>\n                    <li>\n                        <label for="Latex">LaTeX <span>.tex</span></label>\n                        <input type="radio" value="latex" name="Latex" class="a11y">\n                    </li>\n                    <li>\n                        <label for="rtf">Rich text <span>.rtf</span></label>\n                        <input type="radio" value="rtf" name="RTF" class="a11y">\n                    </li>\n                    <li>\n                        <label for="Docx">MS Word <span>.docx</span></label>\n                        <input type="radio" value="docx" name="DOCX" class="a11y">\n                    </li>\n                    <li>\n                        <label for="Epub">ebook <span>.epub</span></label>\n                        <input type="radio" value="epub" name="ePub" class="a11y">\n                    </li>\n                </ul>\n            </div> <!-- /end .nav-group -->\n        </div> <!-- /end .nav-desktop -->\n        <div class="nav-mobile">\n            <div class="nav-group views-group">\n                <h3 class="nav-hdg-2">Views</h3>\n                <ul class="h-list views-list">\n                    <li><a href="/docs/{{ unified.doc.id }}"><span class="icon-wrapper"><i class="is-icon ico-hover-view-editor"></i></span>Editor</a></li>\n                    <li><a href="/docs/{{ unified.doc.id }}/preview"><span class="icon-wrapper"><i class="is-icon ico-hover-view-preview"></i></span>Preview</a></li>\n                    <li><a href="/docs/{{ unified.doc.id }}/html"><span class="icon-wrapper"><i class="is-icon ico-hover-view-html"></i></span>HTML</a></li>\n                </ul>\n            </div> <!-- /end .nav-group -->\n            <div class="mobile-list">\n                <ul class="nav-mobile-list full-width-links">\n                    <!--  <li><a class="has-icon ico-hover-versions mobile-versions-link" href="#">Versions<i class="is-icon ico-nav-next-arrow"></i></a></li> -->\n                     <!--\n<li><a class="has-icon ico-hover-people mobile-people-link" title="Collaborators" href="#tool-people">People<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                     <li><a class="has-icon ico-hover-activity mobile-activity-link" title="Activity" href="#tool-activity">Activity<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                     <li><a class="has-icon ico-hover-discuss mobile-discuss-link" title="Discussions" href="#tool-discuss">Discussions<i class="is-icon ico-nav-next-arrow"></i></a></li>\n-->\n                     <li><a class="has-icon ico-hover-home" href="/docs">Home</a></li>\n                     <li><a class="has-icon ico-nav-new-doc new-document" href="/docs/new#new-document">New document</a></li>\n                     <li><a class="has-icon ico-nav-help" href="/help">Help</a></li>\n                     <li><a class="has-icon ico-nav-cheatsheet show-cheat-sheet" href="#">Cheat sheet<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                     {{^ isDocOwner }}\n                     <li><a class="has-icon ico-nav-leave leave-document" href="/collaborate/{{ unified.doc.id }}/leave">Leave</a></li>\n                     {{/ isDocOwner}}\n                     {{# isDocOwner }}\n                     <li><a class="has-icon ico-nav-delete delete-document" href="/docs/{{ unified.doc.id }}/delete">Delete</a></li>\n                     <li><a class="has-icon ico-nav-archive archive-document" href="/docs/{{ unified.doc.id }}/archive">{{# unified.doc.archived }}Una{{/ unified.doc.archived }}{{^ unified.doc.archived }}A{{/ unified.doc.archived }}rchive</a></li>\n                     {{/ isDocOwner}}\n                     <li><a class="has-icon ico-nav-integrations mobile-integrations" href="#">Publishing<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                     <li><a class="has-icon ico-nav-export mobile-export" href="#">Export<i class="is-icon ico-nav-next-arrow"></i></a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>\n'), this.SMT["navigation/navigation_main"] = function (e) {
        return e || (e = {}), SMTCache["navigation/navigation_main"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["navigation/navigation_mobile_export"] = Mustache.compile('<div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n</div>\n<h3 class="nav-hdg-1 hdg-margin">Select an export format</h3>\n<ul  class="nav-mobile-list export-list">\n    <li>\n        <label for="HTML">HTML <span>.html</span></label>\n        <input type="radio" value="html" name="HTML" class="a11y">\n    </li>\n    <li>\n        <label for="Markdown">Markdown <span>.md</span></label>\n        <input type="radio" value="md" name="Markdown" class="a11y">\n    </li>\n    <li>\n        <label for="Text">Plain text <span>.txt</span></label>\n        <input type="radio" value="txt" name="Text" class="a11y">\n    </li>\n    <li>\n        <label for="Latex">LaTeX <span>.tex</span></label>\n        <input type="radio" value="latex" name="Latex" class="a11y">\n    </li>\n    <li>\n        <label for="rtf">Rich text <span>.rtf</span></label>\n        <input type="radio" value="rtf" name="RTF" class="a11y">\n    </li>\n    <li>\n        <label for="Docx">MS Word <span>.docx</span></label>\n        <input type="radio" value="docx" name="DOCX" class="a11y">\n    </li>\n    <li>\n        <label for="Epub">ebook <span>.epub</span></label>\n        <input type="radio" value="epub" name="ePub" class="a11y">\n    </li>\n</ul>\n'), Mustache.compilePartial("navigation/navigation_mobile_export", '<div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n</div>\n<h3 class="nav-hdg-1 hdg-margin">Select an export format</h3>\n<ul  class="nav-mobile-list export-list">\n    <li>\n        <label for="HTML">HTML <span>.html</span></label>\n        <input type="radio" value="html" name="HTML" class="a11y">\n    </li>\n    <li>\n        <label for="Markdown">Markdown <span>.md</span></label>\n        <input type="radio" value="md" name="Markdown" class="a11y">\n    </li>\n    <li>\n        <label for="Text">Plain text <span>.txt</span></label>\n        <input type="radio" value="txt" name="Text" class="a11y">\n    </li>\n    <li>\n        <label for="Latex">LaTeX <span>.tex</span></label>\n        <input type="radio" value="latex" name="Latex" class="a11y">\n    </li>\n    <li>\n        <label for="rtf">Rich text <span>.rtf</span></label>\n        <input type="radio" value="rtf" name="RTF" class="a11y">\n    </li>\n    <li>\n        <label for="Docx">MS Word <span>.docx</span></label>\n        <input type="radio" value="docx" name="DOCX" class="a11y">\n    </li>\n    <li>\n        <label for="Epub">ebook <span>.epub</span></label>\n        <input type="radio" value="epub" name="ePub" class="a11y">\n    </li>\n</ul>\n'), this.SMT["navigation/navigation_mobile_export"] = function (e) {
        return e || (e = {}), SMTCache["navigation/navigation_mobile_export"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["navigation/navigation_mobile_integrations"] = Mustache.compile('<div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n</div>\n<h3  class="nav-hdg-1 hdg-margin">Publishing</h3>\n<ul class="nav-mobile-list export-list">\n    {{# unified.user.publications }}\n    <li><a class="ico-{{ publisher_key }} has-icon" href="/publisher/post/{{ unified.doc.id }}/to/{{ id }}">Send to <span>{{ description }}</span></a></li>\n    {{/ unified.user.publications }}\n    {{^ unified.user.publications }}\n    <li><a class="ico-wordpress has-icon" href="/account/publishing">Connect to <span>WordPress</span></a></li>\n    <li><a class="ico-dropbox has-icon" href="/account/publishing">Connect to <span>Dropbox</span></a></li>\n    {{/ unified.user.publications }}        \n</ul>\n'), Mustache.compilePartial("navigation/navigation_mobile_integrations", '<div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n</div>\n<h3  class="nav-hdg-1 hdg-margin">Publishing</h3>\n<ul class="nav-mobile-list export-list">\n    {{# unified.user.publications }}\n    <li><a class="ico-{{ publisher_key }} has-icon" href="/publisher/post/{{ unified.doc.id }}/to/{{ id }}">Send to <span>{{ description }}</span></a></li>\n    {{/ unified.user.publications }}\n    {{^ unified.user.publications }}\n    <li><a class="ico-wordpress has-icon" href="/account/publishing">Connect to <span>WordPress</span></a></li>\n    <li><a class="ico-dropbox has-icon" href="/account/publishing">Connect to <span>Dropbox</span></a></li>\n    {{/ unified.user.publications }}        \n</ul>\n'), this.SMT["navigation/navigation_mobile_integrations"] = function (e) {
        return e || (e = {}), SMTCache["navigation/navigation_mobile_integrations"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["navigation/navigation_status_picker"] = Mustache.compile('<div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n  </div>\n<ul class="status-selection-menu">\n    {{#status_options}}\n    <li class="status-{{downcased}}-menu">\n        <input data-outlet="statusForm" name="doc-status" data-status="{{downcased}}" id="select-menu-{{downcased}}" type="radio" value="{{id}}" {{#selected}}checked{{/selected}}/>\n        <label for="select-menu-{{downcased}}">{{text}}</label>\n    </li>\n    {{/status_options}}\n</ul>\n'), Mustache.compilePartial("navigation/navigation_status_picker", '<div class="nav-back-header">\n    <a href="#" class="is-icon ico-back-arrow back-to-main">back</a>\n  </div>\n<ul class="status-selection-menu">\n    {{#status_options}}\n    <li class="status-{{downcased}}-menu">\n        <input data-outlet="statusForm" name="doc-status" data-status="{{downcased}}" id="select-menu-{{downcased}}" type="radio" value="{{id}}" {{#selected}}checked{{/selected}}/>\n        <label for="select-menu-{{downcased}}">{{text}}</label>\n    </li>\n    {{/status_options}}\n</ul>\n'), this.SMT["navigation/navigation_status_picker"] = function (e) {
        return e || (e = {}), SMTCache["navigation/navigation_status_picker"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["navigation/space_menu"] = Mustache.compile('<!-- New menu inserted to switch to a project from personal dash OR to switch projects from a project dash -->\n<li>\n    <div class="menu-spaces">\n        <a class="top" href="#">Spaces</a>\n        <div class="sub-menu">\n            <div class="menu-widget">\n                <nav>\n                    <ul>\n                        {{# spaces }}\n                        <li><label for="space-{{ id }}"><input type="radio" id="space-{{ id }}" /> {{ name }}</label></li>\n                        {{/ spaces }}\n                    </ul>\n                </nav>\n            </div> <!-- /end .menu-widget -->\n        </div> <!-- /end .sub-menu -->\n    </div> <!-- /end .menu-spaces -->\n</li>\n<!-- /end New Menu for switching to a project from your Editorially or vice versa -->\n'), Mustache.compilePartial("navigation/space_menu", '<!-- New menu inserted to switch to a project from personal dash OR to switch projects from a project dash -->\n<li>\n    <div class="menu-spaces">\n        <a class="top" href="#">Spaces</a>\n        <div class="sub-menu">\n            <div class="menu-widget">\n                <nav>\n                    <ul>\n                        {{# spaces }}\n                        <li><label for="space-{{ id }}"><input type="radio" id="space-{{ id }}" /> {{ name }}</label></li>\n                        {{/ spaces }}\n                    </ul>\n                </nav>\n            </div> <!-- /end .menu-widget -->\n        </div> <!-- /end .sub-menu -->\n    </div> <!-- /end .menu-spaces -->\n</li>\n<!-- /end New Menu for switching to a project from your Editorially or vice versa -->\n'), this.SMT["navigation/space_menu"] = function (e) {
        return e || (e = {}), SMTCache["navigation/space_menu"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["onboarding/discussion"] = Mustache.compile('<div class="onboard-bg onboard-discussion-bg onboard-tip">\n    <div class="onboard-tip-text onboard-discussion-text">\n        <p class="discuss-lg-screen">Highlight some text and press the &ldquo;New Discussion&rdquo; button to start a new thread.</p>\n        <p class="discuss-sm-screen">Highlight some text and press the <span class="is-icon ico-hover-inline-add-discuss">start discussion</span> button in the margin to start a new thread.</p>\n        <a class="btn-flat btn-green" data-action="hideHelper" href="#">Got it!</a>\n    </div>\n</div>\n'), Mustache.compilePartial("onboarding/discussion", '<div class="onboard-bg onboard-discussion-bg onboard-tip">\n    <div class="onboard-tip-text onboard-discussion-text">\n        <p class="discuss-lg-screen">Highlight some text and press the &ldquo;New Discussion&rdquo; button to start a new thread.</p>\n        <p class="discuss-sm-screen">Highlight some text and press the <span class="is-icon ico-hover-inline-add-discuss">start discussion</span> button in the margin to start a new thread.</p>\n        <a class="btn-flat btn-green" data-action="hideHelper" href="#">Got it!</a>\n    </div>\n</div>\n'), this.SMT["onboarding/discussion"] = function (e) {
        return e || (e = {}), SMTCache["onboarding/discussion"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["onboarding/gear"] = Mustache.compile('<div class="onboard-bg onboard-full-page onboard-gear-cheatsheet">\n    <div class="onboard-full-page-text onboard-arrow">\n        <p>Open the gear menu to see word and character counts, export your document, and more.</p>\n        <p>\n            <a class="btn-flat btn-green" href="#" data-action="hideOnboarding">Got it!</a>\n        </p>\n    </div>\n</div>\n'), Mustache.compilePartial("onboarding/gear", '<div class="onboard-bg onboard-full-page onboard-gear-cheatsheet">\n    <div class="onboard-full-page-text onboard-arrow">\n        <p>Open the gear menu to see word and character counts, export your document, and more.</p>\n        <p>\n            <a class="btn-flat btn-green" href="#" data-action="hideOnboarding">Got it!</a>\n        </p>\n    </div>\n</div>\n'), this.SMT["onboarding/gear"] = function (e) {
        return e || (e = {}), SMTCache["onboarding/gear"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["onboarding/markdown"] = Mustache.compile('<div class="onboard-bg onboard-full-page onboard-markdown-cheatsheet">\n    <div class="onboard-full-page-text onboard-arrow">\n        <p>Editorially uses Markdown for formatting. Peek up here for a cheat sheet. (Plus, find word count, export features, and more.)</p>\n        <p>\n            <a class="btn-flat btn-green" href="#" data-action="hideOnboarding">Got it!</a>\n            <a class="btn-flat" href="#" data-action="showMarkdownCheatsheet">Learn more</a>\n        </p>\n    </div> <!-- /end .onboard-full-page-text -->\n</div> <!-- /end .onboard-full-page -->\n'), Mustache.compilePartial("onboarding/markdown", '<div class="onboard-bg onboard-full-page onboard-markdown-cheatsheet">\n    <div class="onboard-full-page-text onboard-arrow">\n        <p>Editorially uses Markdown for formatting. Peek up here for a cheat sheet. (Plus, find word count, export features, and more.)</p>\n        <p>\n            <a class="btn-flat btn-green" href="#" data-action="hideOnboarding">Got it!</a>\n            <a class="btn-flat" href="#" data-action="showMarkdownCheatsheet">Learn more</a>\n        </p>\n    </div> <!-- /end .onboard-full-page-text -->\n</div> <!-- /end .onboard-full-page -->\n'), this.SMT["onboarding/markdown"] = function (e) {
        return e || (e = {}), SMTCache["onboarding/markdown"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["onboarding/tip"] = Mustache.compile('<!-- DEV NOTE: the below div will be used for all the onboarding tips in the right panel, some classes will change to get it to work with the various situations, we\'ll need to work together once it is integrated to do that I think -->\n<div class="onboard-bg onboard-tip">\n    <div class="onboard-tip-text">\n        <p>{{ onboarding_text }}</p>\n        <a class="btn-flat btn-green" data-action="hideAndRemove" href="#">Got it!</a>\n    </div>\n</div>\n<!-- Here you can find all the activity happening on your document. -->\n'), Mustache.compilePartial("onboarding/tip", '<!-- DEV NOTE: the below div will be used for all the onboarding tips in the right panel, some classes will change to get it to work with the various situations, we\'ll need to work together once it is integrated to do that I think -->\n<div class="onboard-bg onboard-tip">\n    <div class="onboard-tip-text">\n        <p>{{ onboarding_text }}</p>\n        <a class="btn-flat btn-green" data-action="hideAndRemove" href="#">Got it!</a>\n    </div>\n</div>\n<!-- Here you can find all the activity happening on your document. -->\n'), this.SMT["onboarding/tip"] = function (e) {
        return e || (e = {}), SMTCache["onboarding/tip"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["onboarding/versions"] = Mustache.compile('<div class="onboard-bg onboard-full-page onboard-markdown-cheatsheet onboard-versions">\n    <div class="onboard-full-page-text onboard-arrow">\n        <p>Save versions or show the versions timeline here. You can revisit past versions, compare any two versions, and more.</p>\n        <p>\n            <a class="btn-flat btn-green" href="#" data-action="hideOnboarding">Got it!</a>\n        </p>\n    </div> <!-- /end .onboard-full-page-text -->\n</div> <!-- /end .onboard-full-page -->\n'), Mustache.compilePartial("onboarding/versions", '<div class="onboard-bg onboard-full-page onboard-markdown-cheatsheet onboard-versions">\n    <div class="onboard-full-page-text onboard-arrow">\n        <p>Save versions or show the versions timeline here. You can revisit past versions, compare any two versions, and more.</p>\n        <p>\n            <a class="btn-flat btn-green" href="#" data-action="hideOnboarding">Got it!</a>\n        </p>\n    </div> <!-- /end .onboard-full-page-text -->\n</div> <!-- /end .onboard-full-page -->\n'), this.SMT["onboarding/versions"] = function (e) {
        return e || (e = {}), SMTCache["onboarding/versions"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["ui/flash_bar"] = Mustache.compile('<div class="msg msg-block status-{{ alert_type }}">\n	<p>{{ alert }}{{{ alert_html }}}</p>\n	{{# dismissible }}\n		<a href="#" class="msg-close">Close this alert</a>\n	{{/ dismissible }}\n</div><!-- /end .msg-block -->\n'), Mustache.compilePartial("ui/flash_bar", '<div class="msg msg-block status-{{ alert_type }}">\n	<p>{{ alert }}{{{ alert_html }}}</p>\n	{{# dismissible }}\n		<a href="#" class="msg-close">Close this alert</a>\n	{{/ dismissible }}\n</div><!-- /end .msg-block -->\n'), this.SMT["ui/flash_bar"] = function (e) {
        return e || (e = {}), SMTCache["ui/flash_bar"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["ui/loading"] = Mustache.compile('<span class="ui-loading">Loading<span>&#8230;</span></span>\n'), Mustache.compilePartial("ui/loading", '<span class="ui-loading">Loading<span>&#8230;</span></span>\n'), this.SMT["ui/loading"] = function (e) {
        return e || (e = {}), SMTCache["ui/loading"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["ui/margin_discussion"] = Mustache.compile('<div class="discussion-container">\n    <a class="is-icon ico-hover-inline-add-discuss" href="#">Start Discussion</a>\n</div>\n'), Mustache.compilePartial("ui/margin_discussion", '<div class="discussion-container">\n    <a class="is-icon ico-hover-inline-add-discuss" href="#">Start Discussion</a>\n</div>\n'), this.SMT["ui/margin_discussion"] = function (e) {
        return e || (e = {}), SMTCache["ui/margin_discussion"](e)
    }
}.call(this),
function () {
    this.SMT || (this.SMT = {}), this.SMTCache || (this.SMTCache = {}), this.SMTCache["ui/modal_outer"] = Mustache.compile('<div class="modal-overlay" aria-hidden="true" data-overlay-type>\n	<div class="bb-overlay-inner">\n		<div class="bb-modal">\n			<a href="#" class="modal-close is-icon ico-close">Close</a>\n		</div>\n	</div>\n</div>\n'), Mustache.compilePartial("ui/modal_outer", '<div class="modal-overlay" aria-hidden="true" data-overlay-type>\n	<div class="bb-overlay-inner">\n		<div class="bb-modal">\n			<a href="#" class="modal-close is-icon ico-close">Close</a>\n		</div>\n	</div>\n</div>\n'), this.SMT["ui/modal_outer"] = function (e) {
        return e || (e = {}), SMTCache["ui/modal_outer"](e)
    }
}.call(this),
function () {
    var e = document.getElementsByTagName("script");
    e = e[e.length - 1], e && e.setAttribute("data-manual", "true")
}(),
function () {
    var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
        t = self.Prism = {
            util: {
                type: function (e) {
                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                },
                clone: function (e) {
                    var n = t.util.type(e);
                    switch (n) {
                    case "Object":
                        var i = {};
                        for (var s in e) e.hasOwnProperty(s) && (i[s] = t.util.clone(e[s]));
                        return i;
                    case "Array":
                        return e.slice()
                    }
                    return e
                }
            },
            languages: {
                extend: function (e, n) {
                    var i = t.util.clone(t.languages[e]);
                    for (var s in n) i[s] = n[s];
                    return i
                },
                insertBefore: function (e, n, i, s) {
                    s = s || t.languages;
                    var a = s[e],
                        o = {};
                    for (var r in a)
                        if (a.hasOwnProperty(r)) {
                            if (r == n)
                                for (var c in i) i.hasOwnProperty(c) && (o[c] = i[c]);
                            o[r] = a[r]
                        }
                    return s[e] = o
                },
                DFS: function (e, n) {
                    for (var i in e) n.call(e, i, e[i]), "Object" === t.util.type(e) && t.languages.DFS(e[i], n)
                }
            },
            highlightAll: function (e, n) {
                for (var i, s = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), a = 0; i = s[a++];) t.highlightElement(i, e === !0, n)
            },
            highlightElement: function (i, s, a) {
                for (var o, r, c = i; c && !e.test(c.className);) c = c.parentNode;
                if (c && (o = (c.className.match(e) || [, ""])[1], r = t.languages[o]), r) {
                    i.className = i.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, c = i.parentNode, /pre/i.test(c.nodeName) && (c.className = c.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
                    var l = i.textContent;
                    if (l) {
                        l = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\u00a0/g, " ");
                        var d = {
                            element: i,
                            language: o,
                            grammar: r,
                            code: l
                        };
                        if (t.hooks.run("before-highlight", d), s && self.Worker) {
                            var u = new Worker(t.filename);
                            u.onmessage = function (e) {
                                d.highlightedCode = n.stringify(JSON.parse(e.data), o), t.hooks.run("before-insert", d), d.element.innerHTML = d.highlightedCode, a && a.call(d.element), t.hooks.run("after-highlight", d)
                            }, u.postMessage(JSON.stringify({
                                language: d.language,
                                code: d.code
                            }))
                        } else d.highlightedCode = t.highlight(d.code, d.grammar, d.language), t.hooks.run("before-insert", d), d.element.innerHTML = d.highlightedCode, a && a.call(i), t.hooks.run("after-highlight", d)
                    }
                }
            },
            highlight: function (e, i, s) {
                return n.stringify(t.tokenize(e, i), s)
            },
            tokenize: function (e, n) {
                var i = t.Token,
                    s = [e],
                    a = n.rest;
                if (a) {
                    for (var o in a) n[o] = a[o];
                    delete n.rest
                }
                e: for (var o in n)
                    if (n.hasOwnProperty(o) && n[o]) {
                        var r = n[o],
                            c = r.inside,
                            l = !! r.lookbehind,
                            d = 0;
                        r = r.pattern || r;
                        for (var u = 0; u < s.length; u++) {
                            var h = s[u];
                            if (s.length > e.length) break e;
                            if (!(h instanceof i)) {
                                r.lastIndex = 0;
                                var p = r.exec(h);
                                if (p) {
                                    l && (d = p[1].length);
                                    var f = p.index - 1 + d,
                                        p = p[0].slice(d),
                                        m = p.length,
                                        v = f + m,
                                        g = h.slice(0, f + 1),
                                        _ = h.slice(v + 1),
                                        b = [u, 1];
                                    g && b.push(g);
                                    var y = new i(o, c ? t.tokenize(p, c) : p);
                                    b.push(y), _ && b.push(_), Array.prototype.splice.apply(s, b)
                                }
                            }
                        }
                    }
                return s
            },
            hooks: {
                all: {},
                add: function (e, n) {
                    var i = t.hooks.all;
                    i[e] = i[e] || [], i[e].push(n)
                },
                run: function (e, n) {
                    var i = t.hooks.all[e];
                    if (i && i.length)
                        for (var s, a = 0; s = i[a++];) s(n)
                }
            }
        }, n = t.Token = function (e, t) {
            this.type = e, this.content = t
        };
    if (n.stringify = function (e, i, s) {
        if ("string" == typeof e) return e;
        if ("[object Array]" == Object.prototype.toString.call(e)) return e.map(function (t) {
            return n.stringify(t, i, e)
        }).join("");
        var a = {
            type: e.type,
            content: n.stringify(e.content, i, s),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: i,
            parent: s
        };
        "comment" == a.type && (a.attributes.spellcheck = "true"), t.hooks.run("wrap", a);
        var o = "";
        for (var r in a.attributes) o += r + '="' + (a.attributes[r] || "") + '"';
        return "<" + a.tag + ' class="' + a.classes.join(" ") + '" ' + o + ">" + a.content + "</" + a.tag + ">"
    }, !self.document) return self.addEventListener("message", function (e) {
        var n = JSON.parse(e.data),
            i = n.language,
            s = n.code;
        self.postMessage(JSON.stringify(t.tokenize(s, t.languages[i]))), self.close()
    }, !1), void 0;
    var i = document.getElementsByTagName("script");
    i = i[i.length - 1], i && (t.filename = i.src, document.addEventListener && !i.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll))
}(),
/*! overthrow - An overflow:auto polyfill for responsive design. - v0.6.5 - 2013-08-13
 * Copyright (c) 2013 Scott Jehl, Filament Group, Inc.; Licensed MIT */
function (e) {
    var t = e.document,
        n = t.documentElement,
        i = "overthrow-enabled",
        s = "ontouchmove" in t,
        a = "WebkitOverflowScrolling" in n.style || "msOverflowStyle" in n.style || !s && e.screen.width > 800 || function () {
            var t = e.navigator.userAgent,
                n = t.match(/AppleWebKit\/([0-9]+)/),
                i = n && n[1],
                s = n && i >= 534;
            return t.match(/Android ([0-9]+)/) && RegExp.$1 >= 3 && s || t.match(/ Version\/([0-9]+)/) && RegExp.$1 >= 0 && e.blackberry && s || t.indexOf("PlayBook") > -1 && s && -1 === !t.indexOf("Android 2") || t.match(/Firefox\/([0-9]+)/) && RegExp.$1 >= 4 || t.match(/wOSBrowser\/([0-9]+)/) && RegExp.$1 >= 233 && s || t.match(/NokiaBrowser\/([0-9\.]+)/) && 7.3 === parseFloat(RegExp.$1) && n && i >= 533
        }();
    e.overthrow = {}, e.overthrow.enabledClassName = i, e.overthrow.addClass = function () {
        -1 === n.className.indexOf(e.overthrow.enabledClassName) && (n.className += " " + e.overthrow.enabledClassName)
    }, e.overthrow.removeClass = function () {
        n.className = n.className.replace(e.overthrow.enabledClassName, "")
    }, e.overthrow.set = function () {
        a && e.overthrow.addClass()
    }, e.overthrow.canBeFilledWithPoly = s, e.overthrow.forget = function () {
        e.overthrow.removeClass()
    }, e.overthrow.support = a ? "native" : "none"
}(this),
function (e, t, n) {
    if (t !== n) {
        t.easing = function (e, t, n, i) {
            return n * ((e = e / i - 1) * e * e + 1) + t
        };
        var i;
        t.toss = function (e, s) {
            var a, o, r = 0,
                c = e.scrollLeft,
                l = e.scrollTop,
                d = {
                    top: "+0",
                    left: "+0",
                    duration: 50,
                    easing: t.easing
                };
            if (s)
                for (var u in d) s[u] !== n && (d[u] = s[u]);
            return "string" == typeof d.left ? (d.left = parseFloat(d.left), a = d.left + c) : (a = d.left, d.left = d.left - c), "string" == typeof d.top ? (d.top = parseFloat(d.top), o = d.top + l) : (o = d.top, d.top = d.top - l), t.intercept(), i = setInterval(function () {
                r++ < d.duration ? (e.scrollLeft = d.easing(r, c, d.left, d.duration), e.scrollTop = d.easing(r, l, d.top, d.duration)) : (a !== e.scrollLeft && (e.scrollLeft = a), o !== e.scrollTop && (e.scrollTop = o), t.intercept())
            }, 1), {
                top: o,
                left: a,
                duration: t.duration,
                easing: t.easing
            }
        }, t.intercept = function () {
            clearInterval(i)
        }
    }
}(this, this.overthrow),
function (e, t, n) {
    if (t !== n) {
        t.scrollIndicatorClassName = "overthrow";
        var i = e.document,
            s = i.documentElement,
            a = "native" === t.support,
            o = t.canBeFilledWithPoly,
            r = (t.configure, t.set),
            c = t.forget,
            l = t.scrollIndicatorClassName;
        t.closest = function (e, n) {
            return !n && e.className && e.className.indexOf(l) > -1 && e || t.closest(e.parentNode)
        };
        var d = !1;
        t.set = function () {
            if (r(), !d && !a && o) {
                e.overthrow.addClass(), d = !0, t.support = "polyfilled", t.forget = function () {
                    c(), d = !1, i.removeEventListener && i.removeEventListener("touchstart", y, !1)
                };
                var l, u, h, p, f = [],
                    m = [],
                    v = function () {
                        f = [], u = null
                    }, g = function () {
                        m = [], h = null
                    }, _ = function (e) {
                        p = l.querySelectorAll("textarea, input");
                        for (var t = 0, n = p.length; n > t; t++) p[t].style.pointerEvents = e
                    }, b = function (e, t) {
                        if (i.createEvent) {
                            var s, a = (!t || t === n) && l.parentNode || l.touchchild || l;
                            a !== l && (s = i.createEvent("HTMLEvents"), s.initEvent("touchend", !0, !0), l.dispatchEvent(s), a.touchchild = l, l = a, a.dispatchEvent(e))
                        }
                    }, y = function (e) {
                        if (t.intercept && t.intercept(), v(), g(), l = t.closest(e.target), l && l !== s && !(e.touches.length > 1)) {
                            _("none");
                            var n = e,
                                i = l.scrollTop,
                                a = l.scrollLeft,
                                o = l.offsetHeight,
                                r = l.offsetWidth,
                                c = e.touches[0].pageY,
                                d = e.touches[0].pageX,
                                p = l.scrollHeight,
                                y = l.scrollWidth,
                                w = function (e) {
                                    var t = i + c - e.touches[0].pageY,
                                        s = a + d - e.touches[0].pageX,
                                        _ = t >= (f.length ? f[0] : 0),
                                        w = s >= (m.length ? m[0] : 0);
                                    t > 0 && p - o > t || s > 0 && y - r > s ? e.preventDefault() : b(n), u && _ !== u && v(), h && w !== h && g(), u = _, h = w, l.scrollTop = t, l.scrollLeft = s, f.unshift(t), m.unshift(s), f.length > 3 && f.pop(), m.length > 3 && m.pop()
                                }, x = function () {
                                    _("auto"), setTimeout(function () {
                                        _("none")
                                    }, 450), l.removeEventListener("touchmove", w, !1), l.removeEventListener("touchend", x, !1)
                                };
                            l.addEventListener("touchmove", w, !1), l.addEventListener("touchend", x, !1)
                        }
                    };
                i.addEventListener("touchstart", y, !1)
            }
        }
    }
}(this, this.overthrow),
function (e) {
    e.overthrow.set()
}(this),
function () {
    function e(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    var t = {
        exec: function () {
            return null
        },
        test: function () {
            return !1
        },
        lastIndex: 0
    }, n = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>\[\]'"]+|\([^\s()<>\[\]'"]*\))+(?:\([^\s()<>\[\]'"]*\)|[^\s`!()\[\]{}:'".,<>?«»“”‘’]))/gi,
        i = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/gi,
        s = function (e) {
            var s = {};
            s.pre = {
                pattern: /(^|\n) {0,3}`{3}.*?\n(.*?\n)*? {0,3}`{3} *(\n|$)/gm,
                lookbehind: !0,
                inside: {
                    "md md-pre": new RegExp("`{3}")
                }
            }, s.hr = {
                pattern: new RegExp("(^|\n)([*\\-_] *){3,}(?:\n|$)", "gm"),
                lookbehind: !0,
                inside: {
                    nl: new RegExp("\n"),
                    "md md-hr": new RegExp("([*\\-_] *){3,}")
                }
            }, s.li = {
                pattern: new RegExp("^[ 	]*([*+\\-]|\\d+\\.)[ \\t][^\n]+(?:\n|$)", "gm"),
                inside: {
                    nl: new RegExp("\n"),
                    "md md-li": new RegExp("^[ ]?([*+\\-]|\\d+\\.)[ \\t]", "m"),
                    "md md-li2": new RegExp("^[ ]?(?:[ ]{2}|[	]{1})([*+\\-]|\\d+\\.)[ \\t]", "m"),
                    "md md-li3": new RegExp("^[ ]?(?:[ ]{4}|[	]{2})([*+\\-]|\\d+\\.)[ \\t]", "m"),
                    "md md-li4": new RegExp("^[ ]?(?:[ ]{6}|[	]{3})([*+\\-]|\\d+\\.)[ \\t]", "m"),
                    "md md-li5": new RegExp("^[ ]?(?:[ ]{8}|[	]{4})([*+\\-]|\\d+\\.)[ \\t]", "m"),
                    "md md-li6": new RegExp("^[ ]?(?:[ ]{10}|[	]{5})([*+\\-]|\\d+\\.)[ \\t]", "m"),
                    "md md-li7": new RegExp("^[ ]?(?:[ ]{12}|[	]{6})([*+\\-]|\\d+\\.)[ \\t]", "m"),
                    "md md-li8": new RegExp("^[ ]?(?:[ ]{14}|[	]{7})([*+\\-]|\\d+\\.)[ \\t]", "m"),
                    "md md-li9": new RegExp("^[ ]?(?:[ ]{16}|[	]{8})([*+\\-]|\\d+\\.)[ \\t]", "m"),
                    "md md-li10": new RegExp("^[ ]?(?:[ ]{18}|[	]{9})([*+\\-]|\\d+\\.)[ \\t]", "m"),
                    "md md-li11": new RegExp("^[ ]?(?:[ ]{20}|[	]{10})([*+\\-]|\\d+\\.)[ \\t]", "m")
                }
            };
            for (var a = 6; a >= 1; a--) s["h" + a] = {
                pattern: new RegExp("^#{" + a + "} .*(?:\n|$)", "gm"),
                inside: {
                    nl: new RegExp("\n$"),
                    "md md-hed": new RegExp("^#{" + a + "} ")
                }
            };
            s.bq = {
                pattern: new RegExp("^(&gt;){1,} [^\n]+(?:\n|$)", "gm"),
                inside: {
                    "md md-bq": new RegExp("^(&gt;){1,}")
                }
            }, s.linkdef = {
                pattern: /^ {0,3}\[.*?\]:[ \t]+.*(?:\n|$)/gm,
                inside: {
                    "link-id": {
                        pattern: /\[.*?\]/,
                        inside: {
                            "md md-bracket-start": /\[/,
                            "link-slug": /(?:\[).*(?:\])*/,
                            "md md-bracket-end": /\]/
                        }
                    },
                    url: n,
                    linktitle: /['\"\(][^\'\"\)]*['\"\)]/
                }
            }, s["img-full"] = {
                pattern: /^!\[[^\]]*\]\([^\)]+\)$/gm
            }, s.p = {
                pattern: new RegExp("^[^\n]+(?:\n|$)", "gm"),
                inside: {
                    nl: new RegExp("\n$")
                }
            }, s.br = {
                pattern: new RegExp("^\n$", "gm")
            }, s.a = {
                pattern: /(^|[^\\])\[(?:(\\.)|[^\[\]])*\]\([^\(\)\s]+(\(\S*?\))??[^\(\)\s]*?(\s(['‘][^'’]*['’]|["“][^"”]*["”]))?\)/gm,
                lookbehind: !0,
                inside: {
                    "md md-bracket-start": {
                        pattern: new RegExp("(^|[^\\\\])\\["),
                        lookbehind: !0
                    },
                    "md md-text": {
                        pattern: new RegExp("(?:(\\\\.)|[^\\[\\]])+(?=\\])")
                    },
                    "md md-bracket-end": new RegExp("\\]\\s?\\("),
                    "md md-paren-end": new RegExp("\\)$"),
                    "md md-href": new RegExp(".*")
                }
            }, s.linkref = {
                pattern: /\[(.*?)\] ?\[(.*?)\]/g,
                inside: {
                    "ref-end": {
                        pattern: /\[[^\[\]]+\]$/,
                        inside: {
                            "md md-bracket-start": new RegExp("\\["),
                            "md md-href": /[^\[\]]+(?=]$)/,
                            "md md-bracket-end": new RegExp("\\]")
                        }
                    },
                    "ref-start": {
                        pattern: /^\[[^\[\]]+\] ?/,
                        inside: {
                            "md md-bracket-start": new RegExp("\\["),
                            "md md-text": /^[^\[\]]+/,
                            "md md-bracket-end": new RegExp("\\]")
                        }
                    }
                }
            }, s.url = {
                pattern: n
            }, s.email = {
                pattern: i
            }, s.code = {
                pattern: /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/g,
                lookbehind: !0,
                inside: {
                    "md md-code": /`/
                }
            }, s.strong = {
                pattern: new RegExp("([_\\*])\\1((?!\\1{2}).)*\\1{2}", "g"),
                inside: {
                    "md md-strong": new RegExp("([_\\*])\\1", "g")
                }
            }, s.em = {
                pattern: /(^|[^\\])(\*|_)(\S[^\2]*?)??[^\s\\]+?\2/g,
                lookbehind: !0,
                inside: {
                    "md md-em start": /^(\*|_)/,
                    "md md-em close": /(\*|_)$/
                }
            }, s.img = {
                pattern: /!\[[^\]]*\]\([^\)]+\)/g
            };
            var o = {
                "md md-bang": /!(?=\[)/,
                "md md-bracket-start": /\[/,
                "md md-alt": /[^\[]+(?=\])/,
                "md md-bracket-end": /\](?=\()/,
                "md img-parens": {
                    pattern: /\([^\)]+\)/,
                    inside: {
                        "md md-paren-start": /^\(/,
                        "md md-title": /(['‘][^'’]*['’]|["“][^"”]*["”])(?=\)$)/,
                        "md md-src": /[^\('" \t]+(?=[\)'" \t])/,
                        "md md-paren-end": /\)$/
                    }
                }
            };
            s.img.inside = o, s["img-full"].inside = o, s.strike = {
                pattern: e ? t : new RegExp("(^|\\n|\\W)(~~)(?=\\S)([^\\r]*?\\S)\\2", "gm"),
                lookbehind: !0,
                inside: {
                    "md md-s": /(~~)/,
                    "md-strike-text": /[^~]+/
                }
            };
            for (var r = {
                code: s.code,
                img: s.img,
                a: s.a,
                linkref: s.linkref,
                url: s.url,
                email: s.email,
                strong: s.strong,
                em: s.em,
                strike: s.strike
            }, c = 6; c >= 1; c--) s["h" + c].inside.rest = r;
            return s.p.inside.rest = r, s.bq.inside.rest = r, s.li.inside.rest = r, s.strong.inside.rest = {
                code: s.code,
                a: s.a
            }, s.em.inside.rest = {
                code: s.code,
                a: s.a
            }, s.strike.inside.rest = {
                code: s.code,
                a: s.a
            }, s.a.inside["md md-text"].inside = {
                code: s.code,
                strong: s.strong,
                em: s.em,
                strike: s.strike
            }, s.linkref.inside["ref-start"].inside["md md-text"].inside = {
                code: s.code,
                strong: s.strong,
                em: s.em,
                strike: s.strike
            }, s
        };
    Prism.languages.md = s(), Prism.languages.mdDiff = s(!0), Prism.hooks.add("wrap", function (t) {
        var i = -1 !== document.getElementsByTagName("body")[0].className.indexOf("tmpl-diffs") ? !0 : !1;
        if (0 === t.type.indexOf("img") && !i) {
            var s = t.content.match(/md\-src"\s>([^<]+)/),
                a = t.content.match(/md\-alt"\s>([^<]+)/);
            s && s[1] && s[1].match(n) && (a = ' alt="' + (a ? e(a[1]) : "") + '"', t.content += "<span class='img-preview' contenteditable='false'><img src='" + s[1] + "' " + a + " /></span>")
        }
    })
}(),
function (e, t) {
    var n = e.tide,
        i = n.support;
    i.retina = e.devicePixelRatio !== t ? e.devicePixelRatio : 0, i.touch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, i.touchEvents = "ontouchstart" in window, i.contentEditable = function () {
        var t = document.createElement("div");
        t.setAttribute("contentEditable", !0);
        var n = null !== t.contentEditable,
            i = !1,
            s = e.navigator.userAgent;
        return s.match(/Android ([0-9]+)/) && RegExp.$1 < 3 && (i = !0), n && !i
    }(), i.xhr2 = function () {
        return window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? !0 : !1
    }(), i.webKit = navigator.userAgent.indexOf("AppleWebKit") > -1, i.getElementsByClassName = !! document.getElementsByClassName, i.inputEvent = "oninput" in document.createElement("div")
}(this),
function () {
    var e = this,
        t = e._,
        n = {}, i = Array.prototype,
        s = Object.prototype,
        a = Function.prototype,
        o = i.push,
        r = i.slice,
        c = i.concat,
        l = s.toString,
        d = s.hasOwnProperty,
        u = i.forEach,
        h = i.map,
        p = i.reduce,
        f = i.reduceRight,
        m = i.filter,
        v = i.every,
        g = i.some,
        _ = i.indexOf,
        b = i.lastIndexOf,
        y = Array.isArray,
        w = Object.keys,
        x = a.bind,
        T = function (e) {
            return e instanceof T ? e : this instanceof T ? (this._wrapped = e, void 0) : new T(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = T), exports._ = T) : e._ = T, T.VERSION = "1.5.2";
    var C = T.each = T.forEach = function (e, t, i) {
        if (null != e)
            if (u && e.forEach === u) e.forEach(t, i);
            else if (e.length === +e.length) {
            for (var s = 0, a = e.length; a > s; s++)
                if (t.call(i, e[s], s, e) === n) return
        } else
            for (var o = T.keys(e), s = 0, a = o.length; a > s; s++)
                if (t.call(i, e[o[s]], o[s], e) === n) return
    };
    T.map = T.collect = function (e, t, n) {
        var i = [];
        return null == e ? i : h && e.map === h ? e.map(t, n) : (C(e, function (e, s, a) {
            i.push(t.call(n, e, s, a))
        }), i)
    };
    var S = "Reduce of empty array with no initial value";
    T.reduce = T.foldl = T.inject = function (e, t, n, i) {
        var s = arguments.length > 2;
        if (null == e && (e = []), p && e.reduce === p) return i && (t = T.bind(t, i)), s ? e.reduce(t, n) : e.reduce(t);
        if (C(e, function (e, a, o) {
            s ? n = t.call(i, n, e, a, o) : (n = e, s = !0)
        }), !s) throw new TypeError(S);
        return n
    }, T.reduceRight = T.foldr = function (e, t, n, i) {
        var s = arguments.length > 2;
        if (null == e && (e = []), f && e.reduceRight === f) return i && (t = T.bind(t, i)), s ? e.reduceRight(t, n) : e.reduceRight(t);
        var a = e.length;
        if (a !== +a) {
            var o = T.keys(e);
            a = o.length
        }
        if (C(e, function (r, c, l) {
            c = o ? o[--a] : --a, s ? n = t.call(i, n, e[c], c, l) : (n = e[c], s = !0)
        }), !s) throw new TypeError(S);
        return n
    }, T.find = T.detect = function (e, t, n) {
        var i;
        return k(e, function (e, s, a) {
            return t.call(n, e, s, a) ? (i = e, !0) : void 0
        }), i
    }, T.filter = T.select = function (e, t, n) {
        var i = [];
        return null == e ? i : m && e.filter === m ? e.filter(t, n) : (C(e, function (e, s, a) {
            t.call(n, e, s, a) && i.push(e)
        }), i)
    }, T.reject = function (e, t, n) {
        return T.filter(e, function (e, i, s) {
            return !t.call(n, e, i, s)
        }, n)
    }, T.every = T.all = function (e, t, i) {
        t || (t = T.identity);
        var s = !0;
        return null == e ? s : v && e.every === v ? e.every(t, i) : (C(e, function (e, a, o) {
            return (s = s && t.call(i, e, a, o)) ? void 0 : n
        }), !! s)
    };
    var k = T.some = T.any = function (e, t, i) {
        t || (t = T.identity);
        var s = !1;
        return null == e ? s : g && e.some === g ? e.some(t, i) : (C(e, function (e, a, o) {
            return s || (s = t.call(i, e, a, o)) ? n : void 0
        }), !! s)
    };
    T.contains = T.include = function (e, t) {
        return null == e ? !1 : _ && e.indexOf === _ ? -1 != e.indexOf(t) : k(e, function (e) {
            return e === t
        })
    }, T.invoke = function (e, t) {
        var n = r.call(arguments, 2),
            i = T.isFunction(t);
        return T.map(e, function (e) {
            return (i ? t : e[t]).apply(e, n)
        })
    }, T.pluck = function (e, t) {
        return T.map(e, function (e) {
            return e[t]
        })
    }, T.where = function (e, t, n) {
        return T.isEmpty(t) ? n ? void 0 : [] : T[n ? "find" : "filter"](e, function (e) {
            for (var n in t)
                if (t[n] !== e[n]) return !1;
            return !0
        })
    }, T.findWhere = function (e, t) {
        return T.where(e, t, !0)
    }, T.max = function (e, t, n) {
        if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && T.isEmpty(e)) return -1 / 0;
        var i = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return C(e, function (e, s, a) {
            var o = t ? t.call(n, e, s, a) : e;
            o > i.computed && (i = {
                value: e,
                computed: o
            })
        }), i.value
    }, T.min = function (e, t, n) {
        if (!t && T.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && T.isEmpty(e)) return 1 / 0;
        var i = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return C(e, function (e, s, a) {
            var o = t ? t.call(n, e, s, a) : e;
            o < i.computed && (i = {
                value: e,
                computed: o
            })
        }), i.value
    }, T.shuffle = function (e) {
        var t, n = 0,
            i = [];
        return C(e, function (e) {
            t = T.random(n++), i[n - 1] = i[t], i[t] = e
        }), i
    }, T.sample = function (e, t, n) {
        return arguments.length < 2 || n ? e[T.random(e.length - 1)] : T.shuffle(e).slice(0, Math.max(0, t))
    };
    var M = function (e) {
        return T.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    T.sortBy = function (e, t, n) {
        var i = M(t);
        return T.pluck(T.map(e, function (e, t, s) {
            return {
                value: e,
                index: t,
                criteria: i.call(n, e, t, s)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                i = t.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (i > n || void 0 === i) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var E = function (e) {
        return function (t, n, i) {
            var s = {}, a = null == n ? T.identity : M(n);
            return C(t, function (n, o) {
                var r = a.call(i, n, o, t);
                e(s, r, n)
            }), s
        }
    };
    T.groupBy = E(function (e, t, n) {
        (T.has(e, t) ? e[t] : e[t] = []).push(n)
    }), T.indexBy = E(function (e, t, n) {
        e[t] = n
    }), T.countBy = E(function (e, t) {
        T.has(e, t) ? e[t]++ : e[t] = 1
    }), T.sortedIndex = function (e, t, n, i) {
        n = null == n ? T.identity : M(n);
        for (var s = n.call(i, t), a = 0, o = e.length; o > a;) {
            var r = a + o >>> 1;
            n.call(i, e[r]) < s ? a = r + 1 : o = r
        }
        return a
    }, T.toArray = function (e) {
        return e ? T.isArray(e) ? r.call(e) : e.length === +e.length ? T.map(e, T.identity) : T.values(e) : []
    }, T.size = function (e) {
        return null == e ? 0 : e.length === +e.length ? e.length : T.keys(e).length
    }, T.first = T.head = T.take = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[0] : r.call(e, 0, t)
    }, T.initial = function (e, t, n) {
        return r.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, T.last = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : r.call(e, Math.max(e.length - t, 0))
    }, T.rest = T.tail = T.drop = function (e, t, n) {
        return r.call(e, null == t || n ? 1 : t)
    }, T.compact = function (e) {
        return T.filter(e, T.identity)
    };
    var D = function (e, t, n) {
        return t && T.every(e, T.isArray) ? c.apply(n, e) : (C(e, function (e) {
            T.isArray(e) || T.isArguments(e) ? t ? o.apply(n, e) : D(e, t, n) : n.push(e)
        }), n)
    };
    T.flatten = function (e, t) {
        return D(e, t, [])
    }, T.without = function (e) {
        return T.difference(e, r.call(arguments, 1))
    }, T.uniq = T.unique = function (e, t, n, i) {
        T.isFunction(t) && (i = n, n = t, t = !1);
        var s = n ? T.map(e, n, i) : e,
            a = [],
            o = [];
        return C(s, function (n, i) {
            (t ? i && o[o.length - 1] === n : T.contains(o, n)) || (o.push(n), a.push(e[i]))
        }), a
    }, T.union = function () {
        return T.uniq(T.flatten(arguments, !0))
    }, T.intersection = function (e) {
        var t = r.call(arguments, 1);
        return T.filter(T.uniq(e), function (e) {
            return T.every(t, function (t) {
                return T.indexOf(t, e) >= 0
            })
        })
    }, T.difference = function (e) {
        var t = c.apply(i, r.call(arguments, 1));
        return T.filter(e, function (e) {
            return !T.contains(t, e)
        })
    }, T.zip = function () {
        for (var e = T.max(T.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = T.pluck(arguments, "" + n);
        return t
    }, T.object = function (e, t) {
        if (null == e) return {};
        for (var n = {}, i = 0, s = e.length; s > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
        return n
    }, T.indexOf = function (e, t, n) {
        if (null == e) return -1;
        var i = 0,
            s = e.length;
        if (n) {
            if ("number" != typeof n) return i = T.sortedIndex(e, t), e[i] === t ? i : -1;
            i = 0 > n ? Math.max(0, s + n) : n
        }
        if (_ && e.indexOf === _) return e.indexOf(t, n);
        for (; s > i; i++)
            if (e[i] === t) return i;
        return -1
    }, T.lastIndexOf = function (e, t, n) {
        if (null == e) return -1;
        var i = null != n;
        if (b && e.lastIndexOf === b) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var s = i ? n : e.length; s--;)
            if (e[s] === t) return s;
        return -1
    }, T.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        for (var i = Math.max(Math.ceil((t - e) / n), 0), s = 0, a = new Array(i); i > s;) a[s++] = e, e += n;
        return a
    };
    var N = function () {};
    T.bind = function (e, t) {
        var n, i;
        if (x && e.bind === x) return x.apply(e, r.call(arguments, 1));
        if (!T.isFunction(e)) throw new TypeError;
        return n = r.call(arguments, 2), i = function () {
            if (!(this instanceof i)) return e.apply(t, n.concat(r.call(arguments)));
            N.prototype = e.prototype;
            var s = new N;
            N.prototype = null;
            var a = e.apply(s, n.concat(r.call(arguments)));
            return Object(a) === a ? a : s
        }
    }, T.partial = function (e) {
        var t = r.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(r.call(arguments)))
        }
    }, T.bindAll = function (e) {
        var t = r.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return C(t, function (t) {
            e[t] = T.bind(e[t], e)
        }), e
    }, T.memoize = function (e, t) {
        var n = {};
        return t || (t = T.identity),
        function () {
            var i = t.apply(this, arguments);
            return T.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
        }
    }, T.delay = function (e, t) {
        var n = r.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, T.defer = function (e) {
        return T.delay.apply(T, [e, 1].concat(r.call(arguments, 1)))
    }, T.throttle = function (e, t, n) {
        var i, s, a, o = null,
            r = 0;
        n || (n = {});
        var c = function () {
            r = n.leading === !1 ? 0 : new Date, o = null, a = e.apply(i, s)
        };
        return function () {
            var l = new Date;
            r || n.leading !== !1 || (r = l);
            var d = t - (l - r);
            return i = this, s = arguments, 0 >= d ? (clearTimeout(o), o = null, r = l, a = e.apply(i, s)) : o || n.trailing === !1 || (o = setTimeout(c, d)), a
        }
    }, T.debounce = function (e, t, n) {
        var i, s, a, o, r;
        return function () {
            a = this, s = arguments, o = new Date;
            var c = function () {
                var l = new Date - o;
                t > l ? i = setTimeout(c, t - l) : (i = null, n || (r = e.apply(a, s)))
            }, l = n && !i;
            return i || (i = setTimeout(c, t)), l && (r = e.apply(a, s)), r
        }
    }, T.once = function (e) {
        var t, n = !1;
        return function () {
            return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, T.wrap = function (e, t) {
        return function () {
            var n = [e];
            return o.apply(n, arguments), t.apply(this, n)
        }
    }, T.compose = function () {
        var e = arguments;
        return function () {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, T.after = function (e, t) {
        return function () {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, T.keys = w || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) T.has(e, n) && t.push(n);
        return t
    }, T.values = function (e) {
        for (var t = T.keys(e), n = t.length, i = new Array(n), s = 0; n > s; s++) i[s] = e[t[s]];
        return i
    }, T.pairs = function (e) {
        for (var t = T.keys(e), n = t.length, i = new Array(n), s = 0; n > s; s++) i[s] = [t[s], e[t[s]]];
        return i
    }, T.invert = function (e) {
        for (var t = {}, n = T.keys(e), i = 0, s = n.length; s > i; i++) t[e[n[i]]] = n[i];
        return t
    }, T.functions = T.methods = function (e) {
        var t = [];
        for (var n in e) T.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, T.extend = function (e) {
        return C(r.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, T.pick = function (e) {
        var t = {}, n = c.apply(i, r.call(arguments, 1));
        return C(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, T.omit = function (e) {
        var t = {}, n = c.apply(i, r.call(arguments, 1));
        for (var s in e) T.contains(n, s) || (t[s] = e[s]);
        return t
    }, T.defaults = function (e) {
        return C(r.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) void 0 === e[n] && (e[n] = t[n])
        }), e
    }, T.clone = function (e) {
        return T.isObject(e) ? T.isArray(e) ? e.slice() : T.extend({}, e) : e
    }, T.tap = function (e, t) {
        return t(e), e
    };
    var A = function (e, t, n, i) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof T && (e = e._wrapped), t instanceof T && (t = t._wrapped);
        var s = l.call(e);
        if (s != l.call(t)) return !1;
        switch (s) {
        case "[object String]":
            return e == String(t);
        case "[object Number]":
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var a = n.length; a--;)
            if (n[a] == e) return i[a] == t;
        var o = e.constructor,
            r = t.constructor;
        if (o !== r && !(T.isFunction(o) && o instanceof o && T.isFunction(r) && r instanceof r)) return !1;
        n.push(e), i.push(t);
        var c = 0,
            d = !0;
        if ("[object Array]" == s) {
            if (c = e.length, d = c == t.length)
                for (; c-- && (d = A(e[c], t[c], n, i)););
        } else {
            for (var u in e)
                if (T.has(e, u) && (c++, !(d = T.has(t, u) && A(e[u], t[u], n, i)))) break;
            if (d) {
                for (u in t)
                    if (T.has(t, u) && !c--) break;
                d = !c
            }
        }
        return n.pop(), i.pop(), d
    };
    T.isEqual = function (e, t) {
        return A(e, t, [], [])
    }, T.isEmpty = function (e) {
        if (null == e) return !0;
        if (T.isArray(e) || T.isString(e)) return 0 === e.length;
        for (var t in e)
            if (T.has(e, t)) return !1;
        return !0
    }, T.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
    }, T.isArray = y || function (e) {
        return "[object Array]" == l.call(e)
    }, T.isObject = function (e) {
        return e === Object(e)
    }, C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        T["is" + e] = function (t) {
            return l.call(t) == "[object " + e + "]"
        }
    }), T.isArguments(arguments) || (T.isArguments = function (e) {
        return !(!e || !T.has(e, "callee"))
    }), "function" != typeof / . / && (T.isFunction = function (e) {
        return "function" == typeof e
    }), T.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, T.isNaN = function (e) {
        return T.isNumber(e) && e != +e
    }, T.isBoolean = function (e) {
        return e === !0 || e === !1 || "[object Boolean]" == l.call(e)
    }, T.isNull = function (e) {
        return null === e
    }, T.isUndefined = function (e) {
        return void 0 === e
    }, T.has = function (e, t) {
        return d.call(e, t)
    }, T.noConflict = function () {
        return e._ = t, this
    }, T.identity = function (e) {
        return e
    }, T.times = function (e, t, n) {
        for (var i = Array(Math.max(0, e)), s = 0; e > s; s++) i[s] = t.call(n, s);
        return i
    }, T.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var I = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    I.unescape = T.invert(I.escape);
    var R = {
        escape: new RegExp("[" + T.keys(I.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + T.keys(I.unescape).join("|") + ")", "g")
    };
    T.each(["escape", "unescape"], function (e) {
        T[e] = function (t) {
            return null == t ? "" : ("" + t).replace(R[e], function (t) {
                return I[e][t]
            })
        }
    }), T.result = function (e, t) {
        if (null == e) return void 0;
        var n = e[t];
        return T.isFunction(n) ? n.call(e) : n
    }, T.mixin = function (e) {
        C(T.functions(e), function (t) {
            var n = T[t] = e[t];
            T.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), P.call(this, n.apply(T, e))
            }
        })
    };
    var F = 0;
    T.uniqueId = function (e) {
        var t = ++F + "";
        return e ? e + t : t
    }, T.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/,
        O = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    T.template = function (e, t, n) {
        var i;
        n = T.defaults({}, n, T.templateSettings);
        var s = new RegExp([(n.escape || L).source, (n.interpolate || L).source, (n.evaluate || L).source].join("|") + "|$", "g"),
            a = 0,
            o = "__p+='";
        e.replace(s, function (t, n, i, s, r) {
            return o += e.slice(a, r).replace(j, function (e) {
                return "\\" + O[e]
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), s && (o += "';\n" + s + "\n__p+='"), a = r + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            i = new Function(n.variable || "obj", "_", o)
        } catch (r) {
            throw r.source = o, r
        }
        if (t) return i(t, T);
        var c = function (e) {
            return i.call(this, e, T)
        };
        return c.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", c
    }, T.chain = function (e) {
        return T(e).chain()
    };
    var P = function (e) {
        return this._chain ? T(e).chain() : e
    };
    T.mixin(T), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = i[e];
        T.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], P.call(this, n)
        }
    }), C(["concat", "join", "slice"], function (e) {
        var t = i[e];
        T.prototype[e] = function () {
            return P.call(this, t.apply(this._wrapped, arguments))
        }
    }), T.extend(T.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this),
function (e) {
    tide.logger = {
        warn: function (e, t) {
            tide.logger.log("warn", e, t)
        },
        error: function (e, t) {
            tide.logger.log("error", e, t)
        },
        debug: function (e, t, n) {
            tide.config.debug && (n && (e += "\n" + tide.logger.getStackTrace()), tide.logger.log("log", e, t))
        },
        log: function (t, n, i) {
            e.console && (console[t] ? console[t](n) : console.log(n)), i && tide.logger.record(n)
        },
        record: function (t, n) {
            if (e.Airbrake) {
                var i = tide.logger.getStackTrace(n);
                Airbrake.notify({
                    message: t,
                    stack: "@" + tide.logger.getFileFromStack(i, !0) + "\n" + i
                })
            }
        },
        getStackTrace: function (e) {
            var t;
            if (e) t = e.stack || "";
            else try {
                throw Error(message)
            } catch (e) {
                t = tide.logger.cleanStack(e.stack || "")
            }
            return t
        },
        cleanStack: function (e) {
            for (var t = e.split("\n"), n = 2, i = t.length; i > n; n++)
                if (-1 === t[n].indexOf("tide.logger.")) {
                    t = t.slice(n);
                    break
                }
            return t.join("\n")
        },
        getFileFromStack: function (e, t) {
            var n = e.match(/http(?:s?):\/\/[^\s]+\/([^\/]+\.js:\d+)/);
            return n ? n[1] : t ? "custom.js:" + Math.random().toString().slice(2) : void 0
        }
    }
}(this), tide.m.messages = {
    errors: {
        413: {
            notice: "Your document is too long. Contact support@editorially.com for help.",
            resolved: "Your document is back to a reasonable size. Thank you!"
        },
        403: {
            notice: 'You are no longer signed in and your changes cannot be saved. You must <a href="{{ this_url }}{{^ this_url }}/users/sign_in{{/ this_url }}">sign in</a> to continue.',
            resolved: "You are signed in.",
            persistent: !0
        },
        406: {
            notice: "Sorry, you don't have permission to do that.",
            resolved: ""
        },
        423: !1,
        500: {
            notice: "We couldn’t reach the server to save your data. Trying to reconnect...",
            resolved: "The server has returned, and your document has been saved.",
            persistent: !0
        },
        503: {
            notice: "Editorially is currently in maintenance mode. Contact support@editorially.com for help.",
            resolved: "The server has returned, and your document has been saved.",
            persistent: !0
        },
        0: {
            notice: "We couldn’t reach the server to save your data. Trying to reconnect...",
            resolved: "The server has returned, and your document has been saved.",
            persistent: !0
        }
    },
    genericError: "We're sorry, something went wrong and your request could not be completed.",
    unsaved: "An autosave is in progress. You may lose recent changes if you leave this page.",
    pastRevision: "The document was edited while you were offline. Your work has been saved in <a href='{{path}}'>Version {{name}}</a>.",
    closeDiscussion: "Close <span>discussion</span>",
    closeDiscussionWithComment: "Comment & Close",
    collaboratorCancel: "Cancel this invitation?",
    collaboratorDelete: "Delete {{user.full_name}}?",
    collaboratorsOnboard: "Invite friends and colleagues to review or edit your work. There's no limit to the number of people you can invite.",
    activityOnboard: "Here’s your activity feed. Versions saved, comments made, people joined — and more — are all recorded here.",
    exportProcessing: "We’ve received your request for export and are processing your data.",
    exportButtonProcessing: "Export processing",
    get: function (e, t) {
        "string" == typeof e && (e = e.split("."));
        for (var n = this, i = 0, s = e.length; s > i; i++) {
            var n = n[e[i]];
            if (null == n) {
                tide.logger.error("An unknown string was requested: " + e.join("."), !0);
                break
            }
        }
        return n && t && (n = Mustache.render(n, t)), n
    }
}, tide.m.messages.errors["401"] = tide.m.messages.errors["403"],
function (e, t, n, i) {
    var s = e.tide;
    s.m.history = {
        stack: [],
        stackLimit: 50,
        prune: function () {
            this.stack.length > this.stackLimit && (this.stack.shift(), this.activeIndex = Math.max(0, this.activeIndex - 1))
        },
        activeIndex: 0,
        defaultCaretIndex: 0,
        get: function (e) {
            return this.stack[e !== i ? e : this.activeIndex]
        },
        setIndex: function (e) {
            this.activeIndex = e;
            var t = this.get(),
                n = this._mergeMarks(s.m.document.get("marks"), t.marks);
            s.m.document.set({
                text: t.value,
                marks: n
            })
        },
        add: function (e, t, n) {
            this.activeIndex < this.stack.length - 1 && this.forget(this.activeIndex), this.stack.push({
                value: e,
                caretIndex: t || this.defaultCaretIndex,
                marks: n
            }), this.activeIndex = this.stack.length - 1, this.prune()
        },
        forget: function (e) {
            this.stack = this.stack.slice(0, e), this.activeIndex = this.stack.length - 1
        },
        back: function () {
            var e = this.activeIndex - 1;
            this.stack[e] !== i && (this.setIndex(e), this.messaging.change())
        },
        forward: function () {
            var e = this.activeIndex + 1;
            this.stack[e] !== i && (this.setIndex(e), this.messaging.change())
        },
        _mergeMarks: function (e, n) {
            for (var i = n.slice(), s = {}, a = n.length - 1; a > -1; a--) {
                var o = n[a];
                o.discussion_id && (s[o.discussion_id] = o)
            }
            for (var a = 0, r = e.length; r > a; a++) {
                var o = e[a],
                    c = o.discussion_id;
                if (!s[c]) {
                    var l = t.extend({}, o);
                    l.end = l.start, i.push(l)
                }
            }
            return i
        },
        messaging: {
            change: function () {
                t.publish("m/history/change")
            }
        }
    }, s.m.document = null, s.m.init = function (e, i, a, o) {
        var r = s.m.Document.get(e.id, n.extend(e, {
            text: i,
            marks: a,
            last_hash_seen: t("meta[name=tide-doc-content-hash]").attr("content")
        }));
        s.m.document = r, o && r.unread.add(o);
        var c = function () {
            s.m.history.add(r.get("text"), 0, a), r._isDirty = !1
        };
        r.updateFromLocalStorage() ? r.save(null, {
            complete: c
        }) : c()
    }
}(this, jQuery, _), tide.range = {
    getText: function () {},
    setText: function () {},
    wrap: function (e, t, n) {
        return e = this._nativeRange(e), e ? this.wrapRange(e, t, n) : void 0
    },
    wrapTextNodes: function (e, t, n) {
        if (e = this._nativeRange(e)) {
            var i = this.createTextNodeRanges(e);
            i.length || (i = [e.cloneRange()]);
            for (var s, a = [], o = 0, r = i.length; r > o; o++) s = this.wrapRange(i[o], t, n), a.push(s), i[o].detach();
            return a
        }
    },
    wrapRange: function (e, t, n) {
        var i = document.createElement(t);
        if ("undefined" != typeof n)
            for (var s in n) val = n[s], i.setAttribute(s, val);
        return i.appendChild(e.extractContents()), e.insertNode(i), i
    },
    _nativeRange: function (e) {
        if (!document.createRange) return null;
        if (e instanceof window.Range) return e;
        var t = this._nativeRangeBoundaries(e.container, e.start, e.end, e.preferredNode),
            n = document.createRange();
        return n.setStart(t.startContainer, t.startOffset), n.setEnd(t.endContainer, t.endOffset), n
    },
    _nativeRangeBoundaries: function (e, t, n, i) {
        0 > t && (t = e.textContent.length + t, 0 > t && (t = 0)), 0 > n && (n = e.textContent.length + n, 0 > n && (n = 0));
        for (var s, a, o, r, c, l = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, null, !1), d = 0, u = 0, h = 0; s = l.nextNode();) {
            if (a = s.length, o = d + a, t >= d && (o > t || t === o && -1 === i) && (r = s, u = t - d), n >= d && (o > n || n === o && -1 === i)) {
                c = s, h = n - d;
                break
            }
            d = o
        }
        return s = l.previousNode(), l.detach(), s ? (r || (r = s), c || (c = s, h = a)) : (r = c = e, u = h = 0), {
            startContainer: r,
            startOffset: u,
            endContainer: c,
            endOffset: h
        }
    },
    createTextNodeRanges: function (e, t) {
        var n = [];
        if (n.detachAll = function () {
            for (var e = this.length - 1; e > -1; e--) this[e].detach()
        }, !e || !e.toString()) return n;
        var i = e.startContainer,
            s = e.endContainer;
        if (i === s && 3 === i.nodeType) return [e.cloneRange()];
        for (var a, o, r = e.commonAncestorContainer, c = document.createNodeIterator(r, NodeFilter.SHOW_TEXT, null, !1), l = !1; a = c.nextNode();)
            if (t || 0 !== a.length)
                if (o = document.createRange(), o.selectNodeContents(a), l) {
                    if (-1 === e.compareBoundaryPoints(Range.END_TO_END, o)) {
                        3 === s.nodeType ? (o.setEnd(s, e.endOffset), n.push(o)) : o.detach();
                        break
                    }
                    n.push(o)
                } else -1 === e.compareBoundaryPoints(Range.END_TO_START, o) ? (l = !0, 3 === i.nodeType && o.setStart(i, e.startOffset), n.push(o)) : o.detach();
        return c.detach(), n
    },
    rangeIntersectsNode: function (e, t) {
        e = this._nativeRange(e);
        var n = document.createRange();
        return n.selectNodeContents(t), this.nativeRangesIntersect(e, n)
    },
    rangeIntersectsRange: function (e, t) {
        return e = this._nativeRange(e), t = this._nativeRange(t), this.nativeRangesIntersect(e, t)
    },
    nativeRangesIntersect: function (e, t) {
        var n = e.compareBoundaryPoints(Range.START_TO_START, t),
            i = e.compareBoundaryPoints(Range.START_TO_END, t),
            s = -1 * n,
            a = t.compareBoundaryPoints(Range.START_TO_END, e);
        return 1 > n && i > -1 || 1 > s && a > -1
    }
},
function (e, t, n, i) {
    var s = document.createElement("div"),
        a = /&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi,
        o = {
            amp: "&",
            lt: "<",
            gt: ">",
            nbsp: " ",
            quot: '"',
            apos: "'"
        };
    tide.util = {
        measureElement: function (e) {
            var n = e.parentNode,
                i = e.style.display;
            n || (e.style.display = "none", document.body.appendChild(e));
            var s = t(e),
                a = {
                    width: s.width(),
                    height: s.height()
                };
            return n || (document.body.removeChild(e), e.style.display = i), a
        },
        isNodeInDocument: function (e) {
            return !(e.compareDocumentPosition(document) & document.DOCUMENT_POSITION_DISCONNECTED)
        },
        isEventFrom: function (e, n) {
            var i = e.target;
            return n instanceof t && (n = n[0]), i === n || t.contains(n, i)
        },
        getCsrfToken: function () {
            return r || (r = t('meta[name="csrf-token"]').attr("content"))
        },
        getUserId: function () {
            return c || (c = parseInt(t('meta[name="tide-user-id"]').attr("content"), 10))
        },
        canUserEdit: function () {
            return null == h && (h = "true" === (t('meta[name="tide-user-can-edit-doc"]').attr("content") || "false").toLowerCase()), h
        },
        getDocTitle: function () {
            return d || (d = t('meta[name="tide-doc-title"]').attr("content"))
        },
        getControllingUser: function () {
            return l = {
                user_name: t('meta[name="tide-doc-editor-fullname"]').attr("content"),
                gravatar_url: t('meta[name="tide-doc-editor-gravatar"]').attr("content")
            }
        },
        getOwnerId: function () {
            return u || (u = parseInt(t('meta[name="tide-doc-owner-id"]').attr("content"), 10))
        },
        dashLowerPattern: /[\-_]([\da-z])/gi,
        camelPattern1: /([a-z0-9])([A-Z])/g,
        camelPattern2: /([A-Z0-9])([A-Z][a-z])/g,
        camelCase: function (e) {
            return e.replace(tide.util.dashLowerPattern, function (e, t) {
                return t.toUpperCase()
            })
        },
        decamelCase: function (e) {
            return e.replace(tide.util.camelPattern1, "$1_$2").replace(tide.util.camelPattern2, "$1_$2").toLowerCase()
        },
        dasherize: function (e) {
            return e.replace(tide.util.camelPattern1, "$1-$2").replace(tide.util.camelPattern2, "$1-$2").toLowerCase()
        },
        lazyProperty: function (e, t) {
            var n = "_" + e;
            return function () {
                return this[n] = t.call(this), this[e] = function () {
                    return this[n]
                }, this[e]()
            }
        },
        debounce: function (e, t) {
            var n;
            return function () {
                var i = this,
                    s = function () {
                        n = null, e.apply(i, arguments)
                    };
                clearTimeout(n), n = setTimeout(s, t)
            }
        },
        stripTags: function (e) {
            return e.replace(/<br\s*[\/]?>/gi, "\n").replace(/<[^>]+>/g, "")
        },
        escapeHtml: function (e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        },
        decodeHtml: function (e) {
            return tide.util.stripTags(e).replace(a, function (e, t) {
                if ("#" === t[0]) {
                    var n = "x" === t[1].toLowerCase() ? parseInt(t.substr(2), 16) : parseInt(t.substr(1), 10);
                    return String.fromCharCode(n)
                }
                return o[t] || e
            })
        },
        decodeHtmlSafe: function (e) {
            return s.innerHTML = e, s.textContent
        },
        prettyNewlines: function (e) {
            e = e.trim().replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br />");
            var t = "<p>" + e + "</p>";
            return t
        },
        convertToMatchFunction: function (e) {
            if ("function" != typeof e) {
                var t = e;
                e = function (e) {
                    for (var n in t) {
                        var i = n.indexOf(".");
                        if (i > -1) {
                            var s = n.slice(0, i),
                                a = {};
                            if (a[n.slice(i + 1)] = t[n], subMatcher = tide.util.convertToMatchFunction(a), !e[s] || !subMatcher(e[s])) return !1
                        } else if (e[n] !== t[n]) return !1
                    }
                    return !0
                }
            }
            return e
        },
        createUuid: function () {
            return (new Date).getTime() + "" + Math.random()
        },
        formatTime: function (e) {
            var t = Math.ceil(e / 1e3),
                n = Math.floor(t / 60),
                i = (t % 60).toString();
            return i.length < 2 && (i = "0" + i), n + ":" + i
        },
        globalData: function () {
            if (!p) try {
                p = JSON.parse(t("#tide-globals").text())
            } catch (e) {
                p = {}
            }
            return p
        },
        parseQueryString: function (e) {
            "?" === e[0] && (e = e.slice(1));
            var t = {};
            return n.each(e.split("&"), function (e) {
                var n = e.split("=");
                t[decodeURIComponent(n[0])] = n[1] && decodeURIComponent(n[1])
            }), t
        },
        queryData: function (e) {
            return (!f || e) && (f = this.parseQueryString(window.location.search)), f
        },
        createQueryString: function (e) {
            return n.map(e, function (e, t) {
                return null == e || "" == e ? encodeURIComponent(t) : encodeURIComponent(t) + "=" + encodeURIComponent(e)
            }).join("&")
        },
        transitionProperty: null,
        transitionEvent: null
    };
    var r = null,
        c = null,
        l = null,
        d = null,
        u = null,
        h = null,
        p = null,
        f = null,
        m = document.createElement("fake"),
        v = {
            transition: "transitionend",
            OTransition: "otransitionend",
            MSTransition: "msTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
    for (var g in v)
        if (m.style[g] !== i) {
            tide.util.transitionProperty = g, tide.util.transitionEvent = v[g];
            break
        }
    tide.id = tide.util.createUuid(), 328 === tide.util.getUserId() && (tide.config.debug = !0), t.extend(tide.config, tide.util.globalData().canHaz)
}(this, jQuery, _), tide.v.editor = tide.v.editor || {}, tide.v.editor.selection = {
    get: function (e) {
        function t(e, n) {
            var i = n.startContainer,
                o = n.startOffset,
                c = n.endContainer,
                u = n.endOffset;
            if (1 === i.nodeType && o && (i = i.childNodes[o], o = 0), 1 === c.nodeType && u) {
                var h = c.childNodes;
                c = h[u], u = 0, c || (c = h[h.length - 1], u = c.textContent.length)
            }
            if (r || e != i || (l = s + o, r = !0), r && e == c) throw a = s + u, d;
            if (3 === e.nodeType) s += e.length;
            else
                for (var p = 0, f = e.childNodes.length; f > p; ++p) t(e.childNodes[p], n)
        }
        var n, i = 0,
            s = 0,
            a = 0,
            o = 0,
            r = !1,
            c = window.getSelection(),
            l = 0,
            d = {}, u = !1;
        if (e || (e = document.documentElement), c.rangeCount) {
            n = c.getRangeAt(0), u = tide.util.isNodeInDocument(e) && tide.range.rangeIntersectsNode(n, e);
            try {
                t(e, n)
            } catch (h) {
                if (h != d) throw h
            }
            c.anchorNode === n.endContainer && c.anchorOffset === n.endOffset ? (i = a, o = l) : (i = l, o = a)
        }
        var p = tide.v.editor.selection.getText();
        return {
            start: l,
            end: a,
            anchor: i,
            focus: o,
            intersectsNode: u,
            toString: function () {
                return p
            }
        }
    },
    set: function (e, t, n, i) {
        null == t && (t = e ? e.textContent.length : 0), null == n && (n = t);
        var s = n >= t,
            a = s ? t : n,
            o = s ? n : t;
        if (document.createRange && window.getSelection) {
            var r = tide.range._nativeRange({
                start: a,
                end: o,
                container: e,
                preferredNode: i
            }),
                c = window.getSelection();
            if (c.removeAllRanges(), c.extend) {
                if (s) {
                    var l = r.endContainer,
                        d = r.endOffset;
                    r.collapse(!0)
                } else {
                    var l = r.startContainer,
                        d = r.startOffset;
                    r.collapse(!1)
                }
                c.addRange(r), c.extend(l, d)
            } else c.addRange(r); if (a === o) {
                for (var u = e.nodeValue, h = e.nextSibling; h && 1 !== h.nodeType && (3 !== h.nodeType || !h.nodeValue);) h = h.nextSibling;
                3 !== e.nodeType || h || "\n" !== u.slice(-1) || (r.setEnd(e, u.length - 1), c.removeAllRanges(), c.addRange(r)), c.collapseToEnd()
            }
        } else if (document.selection && document.body.createTextRange) {
            var p = document.body.createTextRange();
            p.moveToElementText(e), p.collapse(!0), p.moveEnd("character", n), p.moveStart("character", t), p.select()
        }
    },
    getText: function () {
        var e, t = "";
        return window.getSelection ? (e = window.getSelection(), t = (e.rangeCount ? e.getRangeAt(0) : e).toString()) : (e = document.selection) && "Text" == e.type && (t = e.createRange().text), t
    },
    setText: function (e, t, n) {
        var i, s;
        if (window.getSelection) {
            if (i = window.getSelection(), i.rangeCount) {
                var a = "string" == typeof e ? document.createTextNode(e) : e,
                    s = i.getRangeAt(0);
                s.deleteContents(), s.insertNode(a), i.collapseToEnd(), tide.v.editor.selection.set(a, t, n)
            }
        } else document.selection && document.selection.createRange && (s = document.selection.createRange(), s.text = e, s.collapse(!1), s.select())
    },
    getCoords: function () {
        var e = 0,
            t = 0,
            n = window.getSelection();
        if (n.rangeCount) {
            var i = n.getRangeAt(0);
            if (i.getClientRects) {
                var s = i.getClientRects();
                s.length > 0 && (e = s[0].left, t = s[0].top)
            }
        }
        return {
            x: e,
            y: t
        }
    },
    length: function () {
        return tide.v.editor.selection.getText().length
    },
    _range: function () {
        if (window.getSelection) {
            var e = window.getSelection();
            if (e.rangeCount) return e.getRangeAt(0)
        }
    },
    wrap: function (e, t, n) {
        var i = this._range(),
            s = tide.range.wrap(i, e, t);
        return s && n && tide.v.editor.selection.set(s), s
    },
    wrapTextNodes: function (e, t, n) {
        var i = this._range(),
            s = tide.range.wrapTextNodes(i, e, t);
        if (n && s && s.length) {
            var a = s[s.length - 1];
            tide.v.editor.selection.set(a)
        }
        return s
    },
    isAdjacentToNonEditable: function (e) {
        var t = this._range();
        return t ? this.rangeIsAdjacentToNonEditable(t, e) : 0
    },
    rangeIsAdjacentToNonEditable: function (e, t) {
        t = t || document.body;
        var n, i = e.endContainer,
            s = e.endOffset,
            a = !1;
        if (3 === i.nodeType) {
            var o = i.length;
            if (0 === o) n = "both";
            else if (0 === s) n = "left";
            else {
                if (s !== o) return 0;
                n = "right"
            }
        } else n = "both", 0 !== s && (i = i.childNodes[s - 1], a = !0);
        for (var r, c, l = NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, d = document.createNodeIterator(t, l, null, !1), u = 0, h = "nextNode"; r = d[h]();)
            if (c) {
                if ("false" === r.contentEditable) {
                    u = "nextNode" === h ? -1 : 1;
                    break
                }
                if (3 === r.nodeType && r.length) {
                    if ("previousNode" === h || "both" !== n) break;
                    h = "previousNode", d.previousNode(), n = "left", c = !1
                }
            } else r === i && (c = !0, "nextNode" === h ? (h = "right" === n || "both" === n ? "nextNode" : "previousNode", "nextNode" === h || a || d.previousNode()) : a && d.nextNode());
        return d.detach(), u
    },
    query: function (e) {
        if (window.getSelection) {
            var t = window.getSelection();
            if (t.rangeCount) return this.queryInRange(e, t.getRangeAt(0))
        }
        return []
    },
    queryInRange: function (e, t) {
        var n = document.createRange(),
            i = $(e, t.commonAncestorContainer).filter(function () {
                n.selectNodeContents(this);
                var e = t.compareBoundaryPoints(Range.START_TO_START, n),
                    i = t.compareBoundaryPoints(Range.END_TO_END, n);
                return 1 > e && i > -1
            });
        return n.detach(), i.toArray()
    }
}, tide.v.editor.undo = function () {
    tide.v.editor.messaging.undo()
}, tide.v.editor.redo = function () {
    tide.v.editor.messaging.redo()
}, tide.v.editor.save = function () {
    tide.v.editor.messaging.save()
}, tide.v.editor.messaging = {
    change: function () {
        $.publish("v/editor/change")
    },
    notableChange: function () {
        $.publish("v/editor/notablechange")
    },
    caretChange: function (e) {
        $.publish("v/editor/caretchange", [e])
    },
    save: function () {
        $.publish("v/editor/save")
    },
    checkupdates: function () {
        $.publish("v/editor/checkupdates")
    },
    undo: function () {
        $.publish("v/editor/undo")
    },
    redo: function () {
        $.publish("v/editor/redo")
    }
}, tide.v.ui = tide.v.ui || {}, tide.v.ui.getCaretParent = function () {
    var e;
    if (document.selection) e = document.selection.createRange().parentElement();
    else if (window.getSelection) var t = window.getSelection().getRangeAt(0),
    e = t.commonAncestorContainer.parentNode;
    return e
};
var printHtml = function (e) {
    e = e.split("\n").join("↵\n"), window.console && console.log(e)
};
! function (e, t) {
    "use strict";
    tide.Base = function () {}, tide.Base.prototype = {
        constructor: tide.Base,
        init: function () {},
        _bindings: null,
        _bind: function (e) {
            this._bindings || (this._bindings = {});
            var t = this._bindings[e];
            if (!t) {
                var n = this;
                t = this._bindings[e] = function () {
                    return n[e].apply(n, arguments)
                }
            }
            return t
        }
    };
    var n = function () {};
    tide.Base.extend = function i(e, s, a) {
        "string" != typeof e && (s = e, a = s, e = s && s.init && s.init.name);
        var o = e || "[Anonymous (extends " + this.displayName + ")]",
            r = e ? e.replace(/\W/g, "_") : "Anonymous",
            c = Function("", "return function " + r + "Constructor() {" + "return this.init.apply(this, arguments);" + "}")();
        return n.prototype = this.prototype, c.prototype = new n, c.extend = this.extend || i, c.displayName = o, c.prototype.constructor = c, t.extend(c.prototype, s), t.extend(c, a), c
    }
}(this, jQuery),
/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011
 * http://benalman.com/
 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL */
function (e) {
    var t = e({});
    e.subscribe = function () {
        t.on.apply(t, arguments)
    }, e.unsubscribe = function () {
        t.off.apply(t, arguments)
    }, e.publish = function () {
        t.trigger.apply(t, arguments)
    }
}(jQuery),
function () {
    var e = this,
        t = e.Backbone,
        n = [];
    n.push;
    var i = n.slice;
    n.splice;
    var s;
    s = "undefined" != typeof exports ? exports : e.Backbone = {}, s.VERSION = "1.1.0";
    var a = e._;
    a || "undefined" == typeof require || (a = require("underscore")), s.$ = e.jQuery || e.Zepto || e.ender || e.$, s.noConflict = function () {
        return e.Backbone = t, this
    }, s.emulateHTTP = !1, s.emulateJSON = !1;
    var o = s.Events = {
        on: function (e, t, n) {
            if (!c(this, "on", e, [t, n]) || !t) return this;
            this._events || (this._events = {});
            var i = this._events[e] || (this._events[e] = []);
            return i.push({
                callback: t,
                context: n,
                ctx: n || this
            }), this
        },
        once: function (e, t, n) {
            if (!c(this, "once", e, [t, n]) || !t) return this;
            var i = this,
                s = a.once(function () {
                    i.off(e, s), t.apply(this, arguments)
                });
            return s._callback = t, this.on(e, s, n)
        },
        off: function (e, t, n) {
            var i, s, o, r, l, d, u, h;
            if (!this._events || !c(this, "off", e, [t, n])) return this;
            if (!e && !t && !n) return this._events = {}, this;
            for (r = e ? [e] : a.keys(this._events), l = 0, d = r.length; d > l; l++)
                if (e = r[l], o = this._events[e]) {
                    if (this._events[e] = i = [], t || n)
                        for (u = 0, h = o.length; h > u; u++) s = o[u], (t && t !== s.callback && t !== s.callback._callback || n && n !== s.context) && i.push(s);
                    i.length || delete this._events[e]
                }
            return this
        },
        trigger: function (e) {
            if (!this._events) return this;
            var t = i.call(arguments, 1);
            if (!c(this, "trigger", e, t)) return this;
            var n = this._events[e],
                s = this._events.all;
            return n && l(n, t), s && l(s, arguments), this
        },
        stopListening: function (e, t, n) {
            var i = this._listeningTo;
            if (!i) return this;
            var s = !t && !n;
            n || "object" != typeof t || (n = this), e && ((i = {})[e._listenId] = e);
            for (var o in i) e = i[o], e.off(t, n, this), (s || a.isEmpty(e._events)) && delete this._listeningTo[o];
            return this
        }
    }, r = /\s+/,
        c = function (e, t, n, i) {
            if (!n) return !0;
            if ("object" == typeof n) {
                for (var s in n) e[t].apply(e, [s, n[s]].concat(i));
                return !1
            }
            if (r.test(n)) {
                for (var a = n.split(r), o = 0, c = a.length; c > o; o++) e[t].apply(e, [a[o]].concat(i));
                return !1
            }
            return !0
        }, l = function (e, t) {
            var n, i = -1,
                s = e.length,
                a = t[0],
                o = t[1],
                r = t[2];
            switch (t.length) {
            case 0:
                for (; ++i < s;)(n = e[i]).callback.call(n.ctx);
                return;
            case 1:
                for (; ++i < s;)(n = e[i]).callback.call(n.ctx, a);
                return;
            case 2:
                for (; ++i < s;)(n = e[i]).callback.call(n.ctx, a, o);
                return;
            case 3:
                for (; ++i < s;)(n = e[i]).callback.call(n.ctx, a, o, r);
                return;
            default:
                for (; ++i < s;)(n = e[i]).callback.apply(n.ctx, t)
            }
        }, d = {
            listenTo: "on",
            listenToOnce: "once"
        };
    a.each(d, function (e, t) {
        o[t] = function (t, n, i) {
            var s = this._listeningTo || (this._listeningTo = {}),
                o = t._listenId || (t._listenId = a.uniqueId("l"));
            return s[o] = t, i || "object" != typeof n || (i = this), t[e](n, i, this), this
        }
    }), o.bind = o.on, o.unbind = o.off, a.extend(s, o);
    var u = s.Model = function (e, t) {
        var n = e || {};
        t || (t = {}), this.cid = a.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (n = this.parse(n, t) || {}), n = a.defaults({}, n, a.result(this, "defaults")), this.set(n, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    a.extend(u.prototype, o, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function () {
            return a.clone(this.attributes)
        },
        sync: function () {
            return s.sync.apply(this, arguments)
        },
        get: function (e) {
            return this.attributes[e]
        },
        escape: function (e) {
            return a.escape(this.get(e))
        },
        has: function (e) {
            return null != this.get(e)
        },
        set: function (e, t, n) {
            var i, s, o, r, c, l, d, u;
            if (null == e) return this;
            if ("object" == typeof e ? (s = e, n = t) : (s = {})[e] = t, n || (n = {}), !this._validate(s, n)) return !1;
            o = n.unset, c = n.silent, r = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = a.clone(this.attributes), this.changed = {}), u = this.attributes, d = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]);
            for (i in s) t = s[i], a.isEqual(u[i], t) || r.push(i), a.isEqual(d[i], t) ? delete this.changed[i] : this.changed[i] = t, o ? delete u[i] : u[i] = t;
            if (!c) {
                r.length && (this._pending = !0);
                for (var h = 0, p = r.length; p > h; h++) this.trigger("change:" + r[h], this, u[r[h]], n)
            }
            if (l) return this;
            if (!c)
                for (; this._pending;) this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function (e, t) {
            return this.set(e, void 0, a.extend({}, t, {
                unset: !0
            }))
        },
        clear: function (e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, a.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function (e) {
            return null == e ? !a.isEmpty(this.changed) : a.has(this.changed, e)
        },
        changedAttributes: function (e) {
            if (!e) return this.hasChanged() ? a.clone(this.changed) : !1;
            var t, n = !1,
                i = this._changing ? this._previousAttributes : this.attributes;
            for (var s in e) a.isEqual(i[s], t = e[s]) || ((n || (n = {}))[s] = t);
            return n
        },
        previous: function (e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function () {
            return a.clone(this._previousAttributes)
        },
        fetch: function (e) {
            e = e ? a.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = this,
                n = e.success;
            return e.success = function (i) {
                return t.set(t.parse(i, e), e) ? (n && n(t, i, e), t.trigger("sync", t, i, e), void 0) : !1
            }, O(this, e), this.sync("read", this, e)
        },
        save: function (e, t, n) {
            var i, s, o, r = this.attributes;
            if (null == e || "object" == typeof e ? (i = e, n = t) : (i = {})[e] = t, n = a.extend({
                validate: !0
            }, n), i && !n.wait) {
                if (!this.set(i, n)) return !1
            } else if (!this._validate(i, n)) return !1;
            i && n.wait && (this.attributes = a.extend({}, r, i)), void 0 === n.parse && (n.parse = !0);
            var c = this,
                l = n.success;
            return n.success = function (e) {
                c.attributes = r;
                var t = c.parse(e, n);
                return n.wait && (t = a.extend(i || {}, t)), a.isObject(t) && !c.set(t, n) ? !1 : (l && l(c, e, n), c.trigger("sync", c, e, n), void 0)
            }, O(this, n), s = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === s && (n.attrs = i), o = this.sync(s, this, n), i && n.wait && (this.attributes = r), o
        },
        destroy: function (e) {
            e = e ? a.clone(e) : {};
            var t = this,
                n = e.success,
                i = function () {
                    t.trigger("destroy", t, t.collection, e)
                };
            if (e.success = function (s) {
                (e.wait || t.isNew()) && i(), n && n(t, s, e), t.isNew() || t.trigger("sync", t, s, e)
            }, this.isNew()) return e.success(), !1;
            O(this, e);
            var s = this.sync("delete", this, e);
            return e.wait || i(), s
        },
        url: function () {
            var e = a.result(this, "urlRoot") || a.result(this.collection, "url") || L();
            return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (e) {
            return e
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return null == this.id
        },
        isValid: function (e) {
            return this._validate({}, a.extend(e || {}, {
                validate: !0
            }))
        },
        _validate: function (e, t) {
            if (!t.validate || !this.validate) return !0;
            e = a.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, a.extend(t, {
                validationError: n
            })), !1) : !0
        }
    });
    var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
    a.each(h, function (e) {
        u.prototype[e] = function () {
            var t = i.call(arguments);
            return t.unshift(this.attributes), a[e].apply(a, t)
        }
    });
    var p = s.Collection = function (e, t) {
        t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, a.extend({
            silent: !0
        }, t))
    }, f = {
            add: !0,
            remove: !0,
            merge: !0
        }, m = {
            add: !0,
            remove: !1
        };
    a.extend(p.prototype, o, {
        model: u,
        initialize: function () {},
        toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e)
            })
        },
        sync: function () {
            return s.sync.apply(this, arguments)
        },
        add: function (e, t) {
            return this.set(e, a.extend({
                merge: !1
            }, t, m))
        },
        remove: function (e, t) {
            var n = !a.isArray(e);
            e = n ? [e] : a.clone(e), t || (t = {});
            var i, s, o, r;
            for (i = 0, s = e.length; s > i; i++) r = e[i] = this.get(e[i]), r && (delete this._byId[r.id], delete this._byId[r.cid], o = this.indexOf(r), this.models.splice(o, 1), this.length--, t.silent || (t.index = o, r.trigger("remove", r, this, t)), this._removeReference(r));
            return n ? e[0] : e
        },
        set: function (e, t) {
            t = a.defaults({}, t, f), t.parse && (e = this.parse(e, t));
            var n = !a.isArray(e);
            e = n ? e ? [e] : [] : a.clone(e);
            var i, s, o, r, c, l, d, h = t.at,
                p = this.model,
                m = this.comparator && null == h && t.sort !== !1,
                v = a.isString(this.comparator) ? this.comparator : null,
                g = [],
                _ = [],
                b = {}, y = t.add,
                w = t.merge,
                x = t.remove,
                T = !m && y && x ? [] : !1;
            for (i = 0, s = e.length; s > i; i++) {
                if (c = e[i], o = c instanceof u ? r = c : c[p.prototype.idAttribute], l = this.get(o)) x && (b[l.cid] = !0), w && (c = c === r ? r.attributes : c, t.parse && (c = l.parse(c, t)), l.set(c, t), m && !d && l.hasChanged(v) && (d = !0)), e[i] = l;
                else if (y) {
                    if (r = e[i] = this._prepareModel(c, t), !r) continue;
                    g.push(r), r.on("all", this._onModelEvent, this), this._byId[r.cid] = r, null != r.id && (this._byId[r.id] = r)
                }
                T && T.push(l || r)
            }
            if (x) {
                for (i = 0, s = this.length; s > i; ++i) b[(r = this.models[i]).cid] || _.push(r);
                _.length && this.remove(_, t)
            }
            if (g.length || T && T.length)
                if (m && (d = !0), this.length += g.length, null != h)
                    for (i = 0, s = g.length; s > i; i++) this.models.splice(h + i, 0, g[i]);
                else {
                    T && (this.models.length = 0);
                    var C = T || g;
                    for (i = 0, s = C.length; s > i; i++) this.models.push(C[i])
                }
            if (d && this.sort({
                silent: !0
            }), !t.silent) {
                for (i = 0, s = g.length; s > i; i++)(r = g[i]).trigger("add", r, this, t);
                (d || T && T.length) && this.trigger("sort", this, t)
            }
            return n ? e[0] : e
        },
        reset: function (e, t) {
            t || (t = {});
            for (var n = 0, i = this.models.length; i > n; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), e = this.add(e, a.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), e
        },
        push: function (e, t) {
            return this.add(e, a.extend({
                at: this.length
            }, t))
        },
        pop: function (e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function (e, t) {
            return this.add(e, a.extend({
                at: 0
            }, t))
        },
        shift: function (e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        slice: function () {
            return i.apply(this.models, arguments)
        },
        get: function (e) {
            return null == e ? void 0 : this._byId[e.id] || this._byId[e.cid] || this._byId[e]
        },
        at: function (e) {
            return this.models[e]
        },
        where: function (e, t) {
            return a.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                for (var n in e)
                    if (e[n] !== t.get(n)) return !1;
                return !0
            })
        },
        findWhere: function (e) {
            return this.where(e, !0)
        },
        sort: function (e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), a.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(a.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        },
        pluck: function (e) {
            return a.invoke(this.models, "get", e)
        },
        fetch: function (e) {
            e = e ? a.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
            var t = e.success,
                n = this;
            return e.success = function (i) {
                var s = e.reset ? "reset" : "set";
                n[s](i, e), t && t(n, i, e), n.trigger("sync", n, i, e)
            }, O(this, e), this.sync("read", this, e)
        },
        create: function (e, t) {
            if (t = t ? a.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this,
                i = t.success;
            return t.success = function (e, t, s) {
                s.wait && n.add(e, s), i && i(e, t, s)
            }, e.save(null, t), e
        },
        parse: function (e) {
            return e
        },
        clone: function () {
            return new this.constructor(this.models)
        },
        _reset: function () {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function (e, t) {
            if (e instanceof u) return e.collection || (e.collection = this), e;
            t = t ? a.clone(t) : {}, t.collection = this;
            var n = new this.model(e, t);
            return n.validationError ? (this.trigger("invalid", this, n.validationError, t), !1) : n
        },
        _removeReference: function (e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (e, t, n, i) {
            ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
        }
    });
    var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    a.each(v, function (e) {
        p.prototype[e] = function () {
            var t = i.call(arguments);
            return t.unshift(this.models), a[e].apply(a, t)
        }
    });
    var g = ["groupBy", "countBy", "sortBy"];
    a.each(g, function (e) {
        p.prototype[e] = function (t, n) {
            var i = a.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
            return a[e](this.models, i, n)
        }
    });
    var _ = s.View = function (e) {
        this.cid = a.uniqueId("view"), e || (e = {}), a.extend(this, a.pick(e, y)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, b = /^(\S+)\s*(.*)$/,
        y = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    a.extend(_.prototype, o, {
        tagName: "div",
        $: function (e) {
            return this.$el.find(e)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function (e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof s.$ ? e : s.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function (e) {
            if (!e && !(e = a.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                if (a.isFunction(n) || (n = this[e[t]]), n) {
                    var i = t.match(b),
                        s = i[1],
                        o = i[2];
                    n = a.bind(n, this), s += ".delegateEvents" + this.cid, "" === o ? this.$el.on(s, n) : this.$el.on(s, o, n)
                }
            }
            return this
        },
        undelegateEvents: function () {
            return this.$el.off(".delegateEvents" + this.cid), this
        },
        _ensureElement: function () {
            if (this.el) this.setElement(a.result(this, "el"), !1);
            else {
                var e = a.extend({}, a.result(this, "attributes"));
                this.id && (e.id = a.result(this, "id")), this.className && (e["class"] = a.result(this, "className"));
                var t = s.$("<" + a.result(this, "tagName") + ">").attr(e);
                this.setElement(t, !1)
            }
        }
    }), s.sync = function (e, t, n) {
        var i = x[e];
        a.defaults(n || (n = {}), {
            emulateHTTP: s.emulateHTTP,
            emulateJSON: s.emulateJSON
        });
        var o = {
            type: i,
            dataType: "json"
        };
        if (n.url || (o.url = a.result(t, "url") || L()), null != n.data || !t || "create" !== e && "update" !== e && "patch" !== e || (o.contentType = "application/json", o.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
            model: o.data
        } : {}), n.emulateHTTP && ("PUT" === i || "DELETE" === i || "PATCH" === i)) {
            o.type = "POST", n.emulateJSON && (o.data._method = i);
            var r = n.beforeSend;
            n.beforeSend = function (e) {
                return e.setRequestHeader("X-HTTP-Method-Override", i), r ? r.apply(this, arguments) : void 0
            }
        }
        "GET" === o.type || n.emulateJSON || (o.processData = !1), "PATCH" === o.type && w && (o.xhr = function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var c = n.xhr = s.ajax(a.extend(o, n));
        return t.trigger("request", t, c, n), c
    };
    var w = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
        x = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
    s.ajax = function () {
        return s.$.ajax.apply(s.$, arguments)
    };
    var T = s.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, C = /\((.*?)\)/g,
        S = /(\(\?)?:\w+/g,
        k = /\*\w+/g,
        M = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    a.extend(T.prototype, o, {
        initialize: function () {},
        route: function (e, t, n) {
            a.isRegExp(e) || (e = this._routeToRegExp(e)), a.isFunction(t) && (n = t, t = ""), n || (n = this[t]);
            var i = this;
            return s.history.route(e, function (a) {
                var o = i._extractParameters(e, a);
                n && n.apply(i, o), i.trigger.apply(i, ["route:" + t].concat(o)), i.trigger("route", t, o), s.history.trigger("route", i, t, o)
            }), this
        },
        navigate: function (e, t) {
            return s.history.navigate(e, t), this
        },
        _bindRoutes: function () {
            if (this.routes) {
                this.routes = a.result(this, "routes");
                for (var e, t = a.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function (e) {
            return e = e.replace(M, "\\$&").replace(C, "(?:$1)?").replace(S, function (e, t) {
                return t ? e : "([^/]+)"
            }).replace(k, "(.*?)"), new RegExp("^" + e + "$")
        },
        _extractParameters: function (e, t) {
            var n = e.exec(t).slice(1);
            return a.map(n, function (e) {
                return e ? decodeURIComponent(e) : null
            })
        }
    });
    var E = s.History = function () {
        this.handlers = [], a.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    }, D = /^[#\/]|\s+$/g,
        N = /^\/+|\/+$/g,
        A = /msie [\w.]+/,
        I = /\/$/,
        R = /[?#].*$/;
    E.started = !1, a.extend(E.prototype, o, {
        interval: 50,
        getHash: function (e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function (e, t) {
            if (null == e)
                if (this._hasPushState || !this._wantsHashChange || t) {
                    e = this.location.pathname;
                    var n = this.root.replace(I, "");
                    e.indexOf(n) || (e = e.slice(n.length))
                } else e = this.getHash();
            return e.replace(D, "")
        },
        start: function (e) {
            if (E.started) throw new Error("Backbone.history has already been started");
            E.started = !0, this.options = a.extend({
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment(),
                n = document.documentMode,
                i = A.exec(navigator.userAgent.toLowerCase()) && (!n || 7 >= n);
            this.root = ("/" + this.root + "/").replace(N, "/"), i && this._wantsHashChange && (this.iframe = s.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? s.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !i ? s.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var o = this.location,
                r = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !r) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                this._hasPushState && r && o.hash && (this.fragment = this.getHash().replace(D, ""), this.history.replaceState({}, document.title, this.root + this.fragment + o.search))
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function () {
            s.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), E.started = !1
        },
        route: function (e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function () {
            var e = this.getFragment();
            return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), this.loadUrl(), void 0)
        },
        loadUrl: function (e) {
            return e = this.fragment = this.getFragment(e), a.any(this.handlers, function (t) {
                return t.route.test(e) ? (t.callback(e), !0) : void 0
            })
        },
        navigate: function (e, t) {
            if (!E.started) return !1;
            t && t !== !0 || (t = {
                trigger: !! t
            });
            var n = this.root + (e = this.getFragment(e || ""));
            if (e = e.replace(R, ""), this.fragment !== e) {
                if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange) return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                }
                return t.trigger ? this.loadUrl(e) : void 0
            }
        },
        _updateHash: function (e, t, n) {
            if (n) {
                var i = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(i + "#" + t)
            } else e.hash = "#" + t
        }
    }), s.history = new E;
    var F = function (e, t) {
        var n, i = this;
        n = e && a.has(e, "constructor") ? e.constructor : function () {
            return i.apply(this, arguments)
        }, a.extend(n, i, t);
        var s = function () {
            this.constructor = n
        };
        return s.prototype = i.prototype, n.prototype = new s, e && a.extend(n.prototype, e), n.__super__ = i.prototype, n
    };
    u.extend = p.extend = T.extend = _.extend = E.extend = F;
    var L = function () {
        throw new Error('A "url" property or function must be specified')
    }, O = function (e, t) {
            var n = t.error;
            t.error = function (i) {
                n && n(e, i, t), e.trigger("error", e, i, t)
            }
        }
}.call(this),
function (e, t, n) {
    var i = e.sync;
    e.sync = function (t, n, s) {
        return s = e.prepareRequest(t, n, s), i.call(this, t, n, s)
    }, e.prepareRequest = function (e, i, s) {
        return s = s || {}, s.headers = s.headers || {}, s.headers["X-CSRF-Token"] = n.getCsrfToken(), s.headers["X-CLIENT-ID"] = t.id, t.socketId && (s.headers["X-CLIENT-SOCKET"] = t.socketId), t.config.networkTimeout && (s.timeout = t.config.networkTimeout), "read" === e && (s.cache = !1), s
    }
}(Backbone, tide, tide.util),
function (e, t) {
    "use strict";
    e.m.BBModel = Backbone.Model.extend({
        sync: function (e, t, n) {
            return t._useFormEncoding && (n.emulateJSON = !0, ("create" === e || "update" === e || "patch" === e) && (n.data = t.toJSON(n))), Backbone.sync.call(Backbone, e, t, n)
        },
        toJSON: function () {
            var e = Backbone.Model.prototype.toJSON.apply(this, arguments);
            if (this.savedProperties)
                for (var t in e) - 1 === this.savedProperties.indexOf(t) && delete e[t];
            return e
        },
        set: function (e, n, i) {
            if ("object" != typeof e) {
                var s = e;
                e = {}, e[s] = n, n = i, i = t
            }
            return this._beforeSet && this._beforeSet(e, n || {}), Backbone.Model.prototype.set.call(this, e, n, i)
        }
    })
}(tide, Backbone),
function (e, t, n) {
    tide.v.View = tide.Base.extend("View", {
        element: null,
        visible: !0,
        _visibleClass: "visible",
        _hiddenClass: "hidden",
        _eventPath: "v/",
        init: function (e) {
            e = e || {};
            var t = e.element;
            1 === e.nodeType && (t = e, e = {}), t ? (this._setElement(t), this._setupElement()) : (this._setElement(this._createElement()), this._setVisible(this.visible)), this.element.id || (this.element.id = "anonymous-" + tide.v.View.nextId++), this.id = this.element.id
        },
        show: function (e) {
            this.visible || this._setVisible(!0, null, e)
        },
        hide: function (e) {
            this.visible && this._setVisible(!1, null, e)
        },
        hideAndRemove: function () {
            this.hide("remove")
        },
        _setVisible: function (e, i, s) {
            var a = i ? t(i) : this.$element;
            a.toggleClass(this._visibleClass, e).toggleClass(this._hiddenClass, !e).attr("aria-hidden", e ? "false" : "true"), "string" == typeof s && (s = this._bind(s)), "function" == typeof s && (n.transitionEvent ? a.on(n.transitionEvent, s) : s()), this.visible = e, this._publish("visibleChange", this.visible)
        },
        _setElement: function (e) {
            this.element = e, this.$element = t(e), e.parentNode && this._addEvents()
        },
        append: function (e) {
            var t = this.getSubviewContainer();
            e.appendTo ? e.appendTo(t) : t.appendChild(e)
        },
        prepend: function (e) {
            var n = this.getSubviewContainer();
            e.prependTo ? e.prependTo(n) : t(n).prepend(e)
        },
        remove: function () {
            this.$element.remove()
        },
        removeChild: function () {},
        removeAllChildren: function () {
            t(this.getSubviewContainer()).empty()
        },
        getSubviewContainer: function () {
            return this.element
        },
        appendTo: function (e) {
            var n = this.element.parentNode;
            t(e).append(this.element), n || this._addEvents()
        },
        prependTo: function (e) {
            var n = this.element.parentNode;
            t(e).prepend(this.element), n || this._addEvents()
        },
        setData: function (e, n) {
            n = n || {}, this._boundDataReset || (this._boundDataReset = t.proxy(this, "_dataReset"), this._boundDataChange = t.proxy(this, "_dataChange")), this._data && this._data.off && (this._data.off("sync", this._bbDataSync, this), this._data.off("reset", this._bbDataReset, this), this._data.off("change", this._bbDataChange, this)), e.on && e.get || (e = new tide.m.BBModel(e)), this._data = e, this._data.on("sync", this._bbDataSync, this), this._data.on("reset", this._bbDataReset, this), this._data.on("change", this._bbDataChange, this), n.reset !== !1 && this._dataReset()
        },
        _dataReset: function () {},
        _dataChange: function () {},
        _bbDataReset: function (e) {
            this._dataReset({
                type: "reset"
            }, e)
        },
        _bbDataSync: function (e) {
            this._dataReset({
                type: "reset"
            }, e)
        },
        _bbDataChange: function (e) {
            this._dataChange({
                type: "change"
            }, e, e.changed)
        },
        _createElement: function () {
            var e = document.createElement("div");
            return e.className = this.constructor.CSS_CLASS, e
        },
        _setupElement: function () {
            var e = "none" !== this.$element.css("display") && this.element.offsetLeft > -1e3;
            this._setVisible(e), this.$element.addClass(this.constructor.CSS_CLASS)
        },
        _updateElementWithState: function (e) {
            e.id = this.id, this._setVisible(this.visible, e)
        },
        _addEvents: function () {
            var e = this.events;
            if (e) {
                this._bindings || (this._bindings = {});
                for (var n in e) {
                    var i = e[n];
                    "function" != typeof i && (i = this[i]), this._bindings[n] = t.proxy(i, this)
                }
                this.$element.on(this._bindings)
            }
        },
        _removeEvents: function () {
            this._bindings && (this.$element.off(this._bindings), this._bindings = {})
        },
        _forwardEvent: function (e, t, n) {
            var i = this,
                s = Array.prototype.slice.call(arguments, 3);
            return function (a) {
                t !== !1 && a.preventDefault(), n && a.stopPropagation(), i._publish.apply(i, [e || a.type].concat(s))
            }
        },
        _publish: function (e, n) {
            n = [this].concat(Array.prototype.slice.call(arguments, 1)), this._eventSource && this._eventSource.trigger(e, n), t.publish(this._eventPath + e, n)
        },
        subscribe: function (e, n) {
            this._eventSource || (this._eventSource = t({})), this._eventSource.on(e, n)
        },
        unsubscribe: function (e, t) {
            this._eventSource && this._eventSource.off(e, t)
        }
    }, {
        CSS_CLASS: "view",
        nextId: 1,
        extend: function (e) {
            var t = tide.Base.extend.apply(this, arguments);
            return tide.v[e] = t, tide.v.View.registerViewType(t), t.prototype.hasOwnProperty("_eventPath") || (t.prototype._eventPath = "v/" + e + "/"), t
        },
        registerViewType: function (e, t) {
            this.viewTypes || (this.viewTypes = {}), t = t || i(e), this.viewTypes[t] = e
        },
        createViews: function (e) {
            e = e || document;
            for (var t = e.querySelectorAll("[data-view]"), n = 0, i = t.length; i > n; n++) {
                var s = t[n],
                    a = this.viewTypes[s.getAttribute("data-view")];
                a && new a({
                    element: s
                })
            }
        }
    });
    var i = function (e) {
        var t = e.displayName;
        return t || (t = e.name), t = t.replace(/[A-Z]/g, function (e, t) {
            return (0 === t ? "" : "-") + e[0].toLowerCase()
        })
    };
    tide.v.View.registerViewType(tide.v.View), tide.config.autoCreateViews !== !1 && setTimeout(function () {
        t(function () {
            tide.v.View.createViews()
        })
    }, 0)
}(this, jQuery, tide.util);
/*
 * to-markdown - an HTML to Markdown converter
 *
 * Copyright 2011, Dom Christie
 * Licenced under the MIT licence
 *
 */
var toMarkdown = function (e) {
    function t(e, t) {
        var n = "void" === t.type ? "<" + t.tag + "\\b([^>]*)\\/?>" : "<" + t.tag + "\\b([^>]*)>([\\s\\S]*?)<\\/" + t.tag + ">",
            i = new RegExp(n, "gi"),
            s = "";
        return s = "string" == typeof t.replacement ? e.replace(i, t.replacement) : e.replace(i, function (e, n, i, s) {
            return t.replacement.call(this, e, n, i, s)
        })
    }

    function n(e) {
        return new RegExp(e + "\\s*=\\s*[\"']?([^\"']*)[\"']?", "i")
    }

    function i(e) {
        return e = e.replace(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi, function (e, t, n) {
            var i = n.split("</li>");
            for (i.splice(i.length - 1, 1), r = 0, c = i.length; c > r; r++)
                if (i[r]) {
                    var s = "ol" === t ? r + 1 + ".  " : "*   ";
                    i[r] = i[r].replace(/\s*<li[^>]*>([\s\S]*)/i, function (e, t) {
                        return t = t.replace(/^\s+/, ""), t = t.replace(/\n\n/g, "\n\n    "), t = t.replace(/\n([ ]*)+(\*|\d+\.) /g, "\n$1    $2 "), s + t
                    })
                }
            return i.join("\n")
        }), "\n\n" + e.replace(/[ \t]+\n|\s+$/g, "")
    }

    function s(e) {
        return e = e.replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi, function (e, t) {
            return t = t.replace(/^\s+|\s+$/g, ""), t = a(t), t = t.replace(/^/gm, "> "), t = t.replace(/^(>([ \t]{2,}>)+)/gm, "> >")
        })
    }

    function a(e) {
        return e = e.replace(/^[\t\r\n]+|[\t\r\n]+$/g, ""), e = e.replace(/\n\s+\n/g, "\n\n"), e = e.replace(/\n{3,}/g, "\n\n")
    }
    for (var o = [{
        patterns: "p",
        replacement: function (e, t, n) {
            return n ? "\n" + n + "\n" : ""
        }
    }, {
        patterns: "div",
        replacement: function (e, t, n) {
            return n ? "\n" + n : ""
        }
    }, {
        patterns: "br",
        type: "void",
        replacement: "\n"
    }, {
        patterns: "h([1-6])",
        replacement: function (e, t, n, i) {
            for (var s = "", a = 0; t > a; a++) s += "#";
            return "\n" + s + " " + i + "\n"
        }
    }, {
        patterns: "hr",
        type: "void",
        replacement: "\n* * *\n"
    }, {
        patterns: "a",
        replacement: function (e, t, i) {
            var s = t.match(n("href")),
                a = t.match(n("title"));
            return s ? "[" + i + "]" + "(" + s[1] + (a && a[1] ? ' "' + a[1] + '"' : "") + ")" : e
        }
    }, {
        patterns: ["b", "strong"],
        replacement: function (e, t, n) {
            return n ? "**" + n + "**" : ""
        }
    }, {
        patterns: ["i", "em"],
        replacement: function (e, t, n) {
            return n ? "_" + n + "_" : ""
        }
    }, {
        patterns: "code",
        replacement: function (e, t, n) {
            return n ? "`" + n + "`" : ""
        }
    }, {
        patterns: "img",
        type: "void",
        replacement: function (e, t) {
            var i = t.match(n("src")),
                s = t.match(n("alt")),
                a = t.match(n("title"));
            return "![" + (s && s[1] ? s[1] : "") + "]" + "(" + i[1] + (a && a[1] ? ' "' + a[1] + '"' : "") + ")"
        }
    }, {
        patterns: "span",
        replacement: function (e, t, i) {
            var s = t.match(n("style")) ? t.match(n("style"))[1] : "";
            return s.indexOf("italic") > 0 ? i ? "_" + i + "_" : "" : s.indexOf("bold") > 0 ? i ? "**" + i + "**" : "" : i || ""
        }
    }], r = 0, c = o.length; c > r; r++)
        if ("string" == typeof o[r].patterns) e = t(e, {
            tag: o[r].patterns,
            replacement: o[r].replacement,
            type: o[r].type
        });
        else
            for (var l = 0, d = o[r].patterns.length; d > l; l++) e = t(e, {
                tag: o[r].patterns[l],
                replacement: o[r].replacement,
                type: o[r].type
            });
    e = e.replace(/<pre\b[^>]*>`([\s\S]*)`<\/pre>/gi, function (e, t) {
        return t = t.replace(/^\t+/g, "  "), t = t.replace(/\n/g, "\n    "), "\n\n    " + t + "\n"
    });
    for (var u = /<(ul|ol)\b[^>]*>(?:(?!<ul|<ol)[\s\S])*?<\/\1>/gi; e.match(u);) e = e.replace(u, function (e) {
        return i(e)
    });
    for (var h = /<blockquote\b[^>]*>((?:(?!<blockquote)[\s\S])*?)<\/blockquote>/gi; e.match(h);) e = e.replace(h, function (e) {
        return s(e)
    });
    return a(e)
};
"object" == typeof exports && (exports.toMarkdown = toMarkdown),
function (e, t, n, i) {
    function s() {
        return a(function (e) {
            var t = " " + e.className + " ";
            return t.indexOf(" text-mark ") > -1
        })
    }

    function a(e) {
        var t = window.getSelection();
        if (t.isCollapsed && t.rangeCount) {
            var n = t.getRangeAt(0).cloneRange();
            n.setStart(n.startContainer, 0);
            for (var i = n.toString().length, s = n.startContainer; s.textContent.length === i;) {
                if (e(s)) return !0;
                s = s.parentNode
            }
        }
        return !1
    }

    function o(e, t) {
        var n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, function (e) {
            return e.length > 0
        }, !1);
        return t && (n.currentNode = t), n
    }
    var r = 200,
        c = /^\s*(-\s*)+$/,
        l = 100,
        d = document.createElement("div"),
        u = Array.prototype.slice;
    tide.v.View.extend("EditorView", {
        events: {
            change: "handleChange",
            keydown: "handleKeydown",
            keypress: "handleKeypress",
            keyup: "handleKeyup",
            input: "handleInput",
            "keyup click focus": "handleFocus",
            blur: "handleBlur",
            paste: "handlePaste",
            copy: "handleCopy",
            cut: "handleCut",
            compositionstart: "handleCompositionstart",
            compositionend: "handleCompositionend"
        },
        grammar: Prism.languages.md,
        init: function (e) {
            e = t.extend({
                editable: !0,
                grammar: Prism.languages.md
            }, e), this._text = null, this._html = "", this._focused = !1, this._marks = [], this._isMarksDirty = !1, this._composing = !1, this._supportsInputEvent = "oninput" in d, this._imageCache = {}, this._selectionMonitor = 0, tide.v.View.prototype.init.call(this, e.element), e.grammar && (this.grammar = e.grammar), e.html ? this.setHtml(e.html) : e.text ? this.setText(e.text) : this._html && e.extractMarks && this._extractMarks(this._html), this.setEditable(e.editable), this.element.parentNode && this.updateElementHtml(this._html)
        },
        editable: function () {
            return this._editable
        },
        setEditable: function (e) {
            e = !! e, this._editable !== e && (this._editable = e, this.element.contentEditable = e, document.queryCommandSupported("insertBrOnReturn") && setTimeout(function () {
                document.execCommand("insertBrOnReturn", !1, !0)
            }, 10))
        },
        text: function (e) {
            return (e || null == this._text) && (this._text = tide.util.decodeHtml(this.html(e))), this._text
        },
        setText: function (e) {
            n.error("EditorView.setText() isn't hooked up!"), this._text = e, this._marks = [], this._publish("change", {
                text: e
            })
        },
        html: function (e) {
            if (e || null == this._html) {
                var t = this._html;
                this._html = tide.util.stripTags(this.element.innerHTML), t !== this._html && (this._text = null, this._isMarksDirty = !0)
            }
            return this._html
        },
        setHtml: function (e, t, n, i) {
            this._html = e, this._text = null, i || (this._marks = [], this._extractMarks(e), this._isMarksDirty = !1), this.updateElementHtml(e, t, n), this._contentHandled = !0, this._publish("change", {
                html: e
            })
        },
        isFocused: function () {
            return this._focused
        },
        focus: function () {
            this.element.focus()
        },
        _setFocused: function (e) {
            e = !! e, e !== this._focused && (this._focused = !! e, this._publish(e ? "focus" : "blur"))
        },
        _addEvents: function () {
            tide.v.View.prototype._addEvents.call(this), t(document.body).on("mousedown", this._bind("handleMousedown")).on("mouseup", this._bind("handleMouseup")), document.addEventListener && document.addEventListener("focus", this._bind("updateSelection"), !0)
        },
        _removeEvents: function () {
            tide.v.View.prototype._addEvents.call(this), t(document.body).off("mousedown", this._bind("handleMousedown")).off("mouseup", this._bind("handleMouseup")), document.removeEventListener && document.removeEventListener("focus", this._bind("updateSelection"), !0)
        },
        _createElement: function () {
            var e = tide.v.View.prototype._createElement();
            return e.className += " language-md the-tide", e
        },
        _setupElement: function () {
            if ("TEXTAREA" === this.element.nodeName) {
                var e = this.element;
                this._html = e.value, this.element = this._createElement(), this.$element = t(this.element), e.parentNode && (this.appendTo(e.parentNode), e.parentNode.replaceChild(this.element, e))
            } else this._html = this.element.innerHTML;
            this._text = null
        },
        appendTo: function (e) {
            var t = !this.element.parentNode;
            tide.v.View.prototype.appendTo.call(this, e), t && this.updateElementHtml(this._html)
        },
        updateElementHtml: function (e, t, n, i) {
            if (null == t) {
                var s = this._getSelection();
                t = s.anchor, n = s.focus
            }
            var a = this._directionalIntent;
            a || (a = tide.v.editor.selection.isAdjacentToNonEditable(this.element));
            var o = parseInt(this.$element.find("mark.active").attr("data-discussion"), 10);
            this._updateMarkData(), i = i || this.element, this.decorate(i, e, !1), this._setSelection(t, n, a), this.setActiveToken(), o && this.activateMark(o, !1)
        },
        decorate: function (e, n, i) {
            null == i && (i = !0);
            var s = new Date;
            if (tide.config.localTransformations) {
                var a = e;
                e = e && e.parentNode ? e : this.element, n = null != n && e === a ? tide.util.decodeHtml(n) : e.textContent
            } else e = this.element, n = e.textContent;
            i && this._updateMarkData(), n = n.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split(" ").join(" ");
            var o = Prism.highlight(n, this.grammar);
            if (e === this.element) e.innerHTML = o;
            else {
                var r = o.indexOf(">") + 1,
                    c = o.slice(r, o.lastIndexOf("<"));
                e.innerHTML = c;
                var l = o.slice(0, r),
                    d = l.match(/\sclass=['"]([^'"]+)/);
                d && (e.className = d[1])
            }
            t(e).find("span.md-href, span.img-parens").each(function (e, n) {
                var i = t(n).html();
                t(n).html(i.replace(/[“”]/g, '"').replace(/[‘’]/g, "'"))
            }), this._updateImageCache(!0, e);
            var u = document.createRange();
            u.setStart(this.element, 0), u.setEnd(e, 0);
            var h = u.toString().length;
            u.setEnd(e, e.childNodes.length);
            var p = u.toString().length;
            u.detach();
            for (var f = this._marks, m = 0, v = f.length; v > m; m++) {
                var g = f[m];
                if (g.end >= h && g.start < p) {
                    var _ = {};
                    g.discussion_id ? (_["data-discussion"] = g.discussion_id, _["class"] = "mark-discussion-" + g.discussion_id) : (_["data-speculative"] = Math.random().toString().slice(2), _["class"] = "mark-discussion-speculative"), g.className && (_["class"] = (_["class"] || "") + " " + g.className);
                    var b = Math.max(h, g.start),
                        y = b <= g.start && (!g.type || "diff." !== g.type.slice(0, 5));
                    this._renderMark(b, Math.min(p, g.end), _, y, g.tag)
                }
            }
            var w = new Date - s;
            tide.highlightProfile.push(w)
        },
        _insertText: function (e, t, n, i) {
            if (!this._focused) return tide.logger.error("Cannot insert text when the editor is not focused.");
            if (!i && s()) {
                var a = window.getSelection(),
                    r = a.getRangeAt(0),
                    c = o(this.element, r.startContainer);
                c.lastChild();
                var l = c.nextNode();
                if (l) {
                    r.selectNode(l);
                    var d = "string" == typeof e ? document.createTextNode(e) : e;
                    r.insertNode(d), tide.v.editor.selection.set(d, t, n)
                } else tide.v.editor.selection.setText(e, t, n)
            } else tide.v.editor.selection.setText(e, t, n);
            this._html = null, this._text = null, this._isMarksDirty = !0
        },
        _insertHtml: function (e, t) {
            if (!this._focused) return tide.logger.error("Cannot insert text when the editor is not focused.");
            var n, i, a;
            if (n = window.getSelection(), n.rangeCount) {
                if (a = document.createElement("div"), a.className = "pasted-content", a.innerHTML = e, i = n.getRangeAt(0), !t && s()) {
                    var r = o(this.element, i.startContainer);
                    r.lastChild();
                    var c = r.nextNode();
                    c && i.selectNode(c)
                } else i.deleteContents();
                i.insertNode(a), n.selectAllChildren(a), n.collapseToEnd(), tide.v.editor.selection.set(a)
            }
            this._html = null, this._text = null, this._isMarksDirty = !0
        },
        _getSelection: function (e) {
            return tide.v.editor.selection.get(e || this.element)
        },
        _setSelection: function (e, t, n, i, s) {
            (s || this._focused) && (i = i || this.element, tide.v.editor.selection.set(i, e, t, n))
        },
        caretPosition: function (e) {
            var e = e || this.element,
                t = 0;
            if ("undefined" != typeof window.getSelection) {
                var n = window.getSelection().getRangeAt(0),
                    i = n.cloneRange();
                i.selectNodeContents(e), i.setEnd(n.endContainer, n.endOffset), t = i.toString().length
            } else if ("undefined" != typeof document.selection && "Control" != document.selection.type) {
                var s = document.selection.createRange(),
                    a = document.body.createTextRange();
                a.moveToElementText(e), a.setEndPoint("EndToEnd", s), t = a.text.length
            }
            return t
        },
        scrollingContainer: function () {
            if (this._scrollingContainer === i) {
                for (var e = this.element, n = document.documentElement; e.parentNode && e !== n;)
                    if (e = e.parentNode, "visible" !== t(e).css("overflow")) {
                        this._scrollingContainer = e;
                        break
                    }
                this._scrollingContainer || (this._scrollingContainer = null)
            }
            return this._scrollingContainer || document.body
        },
        keepCursorInViewport: tide.util.debounce(function () {
            if (tide.util.isNodeInDocument(this.element)) {
                var e;
                if (window.getSelection) {
                    var t = window.getSelection(),
                        n = document.createRange();
                    n.setStart(t.focusNode, t.focusOffset), n.setEnd(t.focusNode, t.focusOffset), e = n.getClientRects()
                } else if (document.selection) {
                    var n = document.selection.createRange();
                    n.move("textedit", 0), e = n.getClientRects()
                }
                if (e && e.length) {
                    var i = this.scrollingContainer(),
                        s = i.getBoundingClientRect(),
                        a = s.height,
                        o = i.scrollTop,
                        r = e[0].top - s.top,
                        c = e[0].bottom - s.top,
                        l = .1 * a,
                        d = .2 * a;
                    l > r ? i.scrollTop = o + (r - l) : c > a - d && (i.scrollTop = o + c - (a - d))
                }
            }
        }, 20),
        setActiveToken: function () {
            var e, t = this.element,
                n = t.childNodes;
            if (window.getSelection) {
                var i = window.getSelection();
                i && i.rangeCount && (e = i.getRangeAt(0).commonAncestorContainer.parentNode)
            } else document.selection && (e = document.selection.createRange().parentElement());
            e || (e = document.documentElement);
            for (var s = e; s.parentNode && s.parentNode !== t;) s = s.parentNode;
            s.className && -1 !== s.className.indexOf("token") && (e = s, -1 === e.className.indexOf("active-token") && (e.className += " active-token"));
            for (var a = 0; a < n.length; a++) n[a] !== e && n[a].className && (n[a].className = n[a].className.replace(/ ?active-token/g, ""))
        },
        activeToken: function () {
            return this.$element.find(".active-token")
        },
        _preservedSelectionDepth: 0,
        _preservedSelection: null,
        preserveSelection: function (e, t) {
            if (0 === this._preservedSelectionDepth) {
                var n = this._getSelection();
                n.intersectsNode && (this._preservedSelection = n, this._preservedSelection.adjacency = tide.v.editor.selection.isAdjacentToNonEditable(this.element))
            }
            return this._preservedSelectionDepth++, e && (e.call(t || this), this.restoreSelection()), this._preservedSelection
        },
        restoreSelection: function () {
            var e = this._preservedSelectionDepth - 1;
            this._preservedSelectionDepth = e > 0 ? e : 0;
            var t = this._preservedSelection;
            0 === e && t && (this._preservedSelection = null, this._setSelection(t.anchor, t.focus, t.adjacency, this.element, !0))
        },
        _extractMarks: function (e) {
            d.innerHTML = e;
            var t = d.getElementsByTagName("mark"),
                n = {}, i = document.createRange();
            i.setStart(d, 0);
            for (var s = 0, a = t.length; a > s; s++) {
                var o = t[s],
                    r = parseInt(o.getAttribute("data-discussion"), 10),
                    c = n[r];
                if (c) c.end += o.textContent.length;
                else {
                    i.setEnd(o, 0);
                    var l = {};
                    l.start = i.toString().length, l.end = l.start + o.textContent.length, r && (l.discussion_id = r, n[r] = l), this._marks.push(l)
                }
            }
            var u = this._marks,
                h = function (e, t, n, s) {
                    for (var a = 0, o = e.length; o > a; a++) {
                        var r = e[a];
                        i.setEnd(r, 0);
                        var c = i.toString().length;
                        u.push({
                            start: c,
                            end: c + r.textContent.length,
                            tag: s,
                            className: t,
                            type: n
                        })
                    }
                };
            h(d.getElementsByTagName("ins"), "token ins", "diff.ins", "ins"), h(d.getElementsByTagName("del"), "token del", "diff.del", "del"), i.detach()
        },
        _updateMarkData: function (e, t) {
            if (t || this._isMarksDirty) {
                this._isMarksDirty = !1;
                var n = e ? [e] : this._marks,
                    i = document.createRange(),
                    s = document.createRange();
                i.setStart(this.element, 0), i.setEnd(this.element, this.element.childNodes.length);
                for (var a = i.toString().length, o = 0, r = n.length; r > o; o++) {
                    var e = n[o];
                    if ("diff.ins" !== e.type && "diff.del" !== e.type) {
                        var c = this.markElements(e);
                        if (c.length) {
                            i.setEnd(c[0], 0);
                            var l = i.toString().length;
                            s.setStartBefore(c[0]), s.setEndAfter(c[c.length - 1]);
                            var d = s.toString(),
                                u = l + d.length;
                            e.start = l, e.end = u, e.text = d
                        } else e.start >= a && (e.start = a - 1), e.end = e.start
                    }
                }
                i.detach(), s.detach()
            }
        },
        getMarks: function (e, n) {
            if (this._updateMarkData(), e || n) {
                e = tide.util.convertToMatchFunction(e);
                for (var i = [], s = this._marks, a = 0, o = s.length; o > a; a++) {
                    var r = s[a];
                    e(r) && (n && (r = t.extend({}, r)), i.push(r))
                }
                return i
            }
            return this._marks.slice()
        },
        getMark: function (e, n) {
            e = tide.util.convertToMatchFunction(e);
            for (var i = this._marks, s = 0, a = i.length; a > s; s++) {
                var o = i[s];
                if (e(o)) return this._updateMarkData(o), n && (o = t.extend({}, o)), o
            }
        },
        getMarkForDiscussion: function (e) {
            return "object" == typeof e && (e = e.id), this.getMark(function (t) {
                return t.discussion_id === e
            })
        },
        getMarksInRange: function (e, t) {
            if (null == e || null == t) {
                var n = this._getSelection();
                e = n.start, t = n.end
            }
            return this.getMarks(function (n) {
                return n.start >= e && n.end <= t
            })
        },
        addMark: function (e) {
            e = e || {};
            var n = this.preserveSelection() || this._getSelection(),
                i = {
                    start: e.start || n.start,
                    end: e.end || n.end
                };
            t.extend(i, e), i.end === this.text().length && "\n" === this.text().slice(-1) && (i.end -= 1, i.start > i.end && (i.start = i.end)), this._insertMark(i);
            var e = {};
            i.discussion_id ? (e["data-discussion"] = i.discussion_id, e["class"] = "mark-discussion-" + i.discussion_id) : (e["data-speculative"] = Math.random().toString().slice(2), e["class"] = "mark-discussion-speculative"), i.className && (e["class"] = (e["class"] || "") + " " + i.className);
            var s = !i.type || "diff." !== i.type.slice(0, 5);
            return this._renderMark(i.start, i.end, e, s, i.tag), i.text = this.text().slice(i.start, i.end), this.restoreSelection(), i
        },
        addMarks: function (e, t) {
            this.preserveSelection();
            for (var n = 0, i = e.length; i > n; n++) this.addMark(e[n], t);
            this.restoreSelection()
        },
        removeMark: function (e) {
            var t = this._marks.indexOf(e);
            t > -1 && (this.preserveSelection(), this._marks.splice(t, 1), this._removeMarkElements(e), this.restoreSelection())
        },
        removeMarks: function (e) {
            e = tide.util.convertToMatchFunction(e);
            var t = this._marks;
            this.preserveSelection();
            for (var n = [], i = 0, s = t.length; s > i; i++) e(t[i]) ? this._removeMarkElements(t[i]) : n.push(t[i]);
            this._marks = n, this.restoreSelection()
        },
        removeAllMarks: function () {
            this.preserveSelection();
            for (var e = this._marks, t = 0, n = e.length; n > t; t++) this._removeMarkElements(e[t]);
            this._marks = [], this.restoreSelection()
        },
        _insertMark: function (e, t) {
            if (null == t || 0 > t) {
                t = 0;
                for (var n = this._marks.length; n > t; t++) {
                    var i = this._marks[t];
                    if (i.start > e.start) break;
                    if (i.start === e.start && i.end >= e.start) break
                }
            }
            return this._marks.splice(t, 0, e), t
        },
        _sortMarks: function (e) {
            e = e || this._marks, e.sort(function (e, t) {
                return e.start - t.start || e.end - t.end
            })
        },
        _renderMark: function (e, n, s, a, o) {
            a === i && (a = !0), s = s || {}, s["class"] = (s["class"] || "") + " text-mark", e === n && (s["class"] += " empty", s.contenteditable = "false");
            var r = tide.range.wrapTextNodes({
                start: e,
                end: n,
                container: this.element
            }, o || "mark", s),
                c = t(r);
            if (a) {
                var l = '<a class="mark-cap" contenteditable="false"><b class="cap-in"></b><b class="cap-side"></b></a>';
                c.first().prepend(l).attr("data-mark-start", "true")
            }
            return r
        },
        _removeMarkElements: function (e) {
            this.markElements(e).each(function () {
                var e = t(this);
                e.find(".mark-cap").remove(), this.childNodes.length ? e.replaceWith(this.childNodes) : e.remove()
            })
        },
        markElements: function (e) {
            if (!e) return t();
            var n = e.discussion_id ? "mark-discussion-" + e.discussion_id : "mark-discussion-speculative";
            return tide.support.getElementsByClassName ? t(u.call(this.element.getElementsByClassName(n))) : t(u.call(this.element.querySelectorAll("." + n)))
        },
        activateMark: function (e, n) {
            null == n && (n = !0), "number" == typeof e && (e = this.getMarkForDiscussion(e));
            var i = this.markElements(e);
            if (!n) {
                var s = function (e, n) {
                    var i = n.style[tide.util.transitionProperty],
                        s = t(n);
                    s.addClass("no-transition"), n.style[tide.util.transitionProperty] = "none", setTimeout(function () {
                        s.removeClass("no-transition"), n.style[tide.util.transitionProperty] = i
                    }, 0)
                };
                i.each(s).find("*").each(s)
            }
            i.addClass("active")
        },
        _updateImageCache: function (e, n) {
            n = n || this.element;
            var i = this._imageCache,
                s = n === this.element ? {} : i;
            t("img", n).each(function (e, t) {
                var n = t.src;
                i[n] ? (t.parentNode.replaceChild(i[n], t), s[n] = i[n]) : s[n] = t
            }), this._imageCache = s
        },
        _cleanupInput: function (e) {
            if (this._doInputCleanup) {
                var n = this._doInputCleanup.type || this._doInputCleanup;
                if ("enter" === n) {
                    e = e || this._getSelection();
                    var i = !1,
                        s = window.getSelection().getRangeAt(0).startContainer,
                        a = t(".active-token", this.element);
                    a.length > 1 && (t.contains(a[0], a[1]) ? a.eq(1).before(document.createTextNode("\n")).before(a[1].childNodes) : a.eq(0).append(document.createTextNode("\n")).append(a[1].childNodes), a.eq(1).remove().find("br").remove(), a.eq(0).find("br").remove(), i = !0), t("div", this.element).each(function (e, n) {
                        var s = t(n);
                        s.find("br").remove(), i || s.before(document.createTextNode("\n")), s.before(n.childNodes).remove(), i = !0
                    }), t("br", this.element).each(function (e, t) {
                        i ? t.parentNode.removeChild(t) : (t.parentNode.replaceChild(document.createTextNode("\n"), t), i = !0)
                    }), i && (s === this.element || s === this._keydownStartNode ? this._setSelection(this._keydownSelection.start + 1) : this._setSelection(this._doInputCleanup.cursor))
                } else if ("delete" === n) t("br", this.element).remove();
                else if ("replace" === n) {
                    var s = window.getSelection().getRangeAt(0).startContainer;
                    3 == s.nodeType && s.parentNode.replaceChild(document.createTextNode(s.textContent), s);
                    var r = this._doInputCleanup,
                        c = r.container || this.element;
                    this._setSelection(r.from, r.to, 0, c), this._insertText(r.character)
                }
                if (this._shouldTypeAfter) {
                    var l = this._shouldTypeAfter.node,
                        d = this._shouldTypeAfter.text;
                    if (l) {
                        var u = l.textContent;
                        if (u.length > d.length && u.slice(0, d.length) === d) {
                            this.preserveSelection();
                            var h = tide.range._nativeRange({
                                container: l,
                                start: d.length,
                                end: u.length
                            }),
                                p = h.extractContents(),
                                f = l.nextSibling;
                            if (!f || 3 !== f.nodeType || 0 === f.length) {
                                var m = o(this.activeToken()[0] || this.element, l.lastChild || l);
                                f = m.nextNode()
                            }
                            f ? f.parentNode.insertBefore(p, f) : l.parentNode.appendChild(p), this.restoreSelection()
                        }
                    }
                    this._shouldTypeAfter = null
                }
                this._doInputCleanup = null
            }
        },
        _fixMissingLineBreaks: function (e) {
            if (tide.support.webKit && this._shouldFixMissingLineBreaks) {
                this._shouldFixMissingLineBreaks = !1, e = e || {};
                var t = this._keydownActiveToken && this._keydownActiveToken[0];
                return t && "\n" !== t.textContent.slice(-1) && 13 !== e.which && 222 !== e.which && 17 !== e.which && 46 !== e.which ? (t.appendChild(document.createTextNode("\n")), !0) : void 0
            }
        },
        _preKeydownContent: null,
        _keydownSelection: null,
        _keydownActiveToken: null,
        _keydownActiveTokenPrev: null,
        _keydownATprevSiblings: null,
        _keydownStartNode: null,
        _didChangeLines: null,
        _directionalIntent: 0,
        _preMousedownSelection: null,
        _contentHandled: !1,
        _doInputCleanup: null,
        _signalNotableChange: tide.util.debounce(function () {
            tide.v.editor.messaging.notableChange()
        }, r),
        handleChange: function () {},
        handleKeydown: function (e) {
            if (this._preKeydownContent = this.html(), this._keydownSelection = this._getSelection(), this._keydownStartNode = null, this._keydownActiveToken = this.activeToken(), this._keydownATprevSiblings = this._keydownActiveToken.prevAll().length, this._keydownActiveTokenPrev = this._keydownActiveToken.prev(), this._didChangeLines = !1, this._directionalIntent = 0, this._contentHandled = !1, this._shouldTypeAfter = null, "typeAfter" === this._doInputCleanup && (this._doInputCleanup = null), this._keydownSelection.anchor === this._keydownSelection.focus)
                for (var t = window.getSelection(), i = t.anchorNode; i !== this.element;) {
                    var s = " " + i.className + " ";
                    if (s.indexOf(" text-mark ") > -1) {
                        this._shouldTypeAfter = {
                            node: i,
                            text: i.textContent
                        }, this._doInputCleanup = this._doInputCleanup || "typeAfter";
                        break
                    }
                    i = i.parentNode
                }
            var a, o = -1 !== navigator.platform.toUpperCase().indexOf("MAC"),
                r = -1 !== navigator.platform.toUpperCase().indexOf("WINDOWS"),
                c = e.which,
                l = e.shiftKey,
                d = o ? e.metaKey : e.ctrlKey,
                u = o ? e.ctrlKey : e.metaKey,
                h = e.altKey,
                p = 38 === c,
                f = 37 === c,
                m = 39 === c,
                v = 66 === c,
                g = 73 === c,
                _ = 9 === c,
                b = 90 === c,
                y = 68 === c,
                w = 72 === c,
                x = 79 === c,
                T = 13 === c,
                C = 8 === c,
                S = 46 === c,
                k = tide.v.editor.selection.getText();
            if (_ && !e.ctrlKey) this._insertText("	"), a = !0;
            else if (d && l && b || u && l && b) tide.v.editor.redo(), a = !0;
            else if (d && b || u && b) tide.v.editor.undo(), a = !0;
            else if (!(d && g || d && v) || l || h)
                if (!T || (!o || d) && (o || (l || d || u || h) && (!l || d || u || h) && (l || !d || u || h)))
                    if (!r && e.ctrlKey && x) this._insertText("\n", 0, 0), a = !0;
                    else if (!p || l || h || d) {
                if ((f || m) && (h && !d && o || d && !h && !o)) {
                    var k = this._getSelection(),
                        M = this.element.textContent,
                        E = k.focus;
                    if (f) {
                        M = M.slice(0, k.focus);
                        var D = M.match(/\S+\s*$/);
                        E = D ? D.index : 0
                    } else {
                        M = M.slice(k.focus);
                        var D = M.match(/^\s*\S+/);
                        E = k.focus + (D ? D[0].length : M.length)
                    }
                    var N = l ? k.anchor : E;
                    this._setSelection(N, E), a = !0
                } else if (C || !r && e.ctrlKey && w) {
                    var k = this._getSelection(),
                        A = k.start,
                        I = k.end;
                    if (k.start === k.end && k.start > 0)
                        if (o && d) {
                            if (window.getSelection) {
                                var R = window.getSelection();
                                R.modify ? (R.modify("extend", "backward", "lineboundary"), I = this._getSelection().end) : n.warn("Cannot backspace to line boundary; DOMSelection.modify() is not supported.", !0)
                            }
                        } else if (o && h || !o && d) {
                        var M = this.element.textContent;
                        M = M.slice(0, k.start);
                        var D = M.match(/\S+\s*$/),
                            F = D ? D.index : 0;
                        this._setSelection(F, k.start), A = F, I = k.start
                    } else this._setSelection(k.start - 1, k.start), A = k.start - 1, I = k.start;
                    tide.v.editor.selection.getText().indexOf("\n") > -1 && (this._didChangeLines = !0);
                    for (var L = this.getMarksInRange(A, I), g = L.length - 1; g > -1; g--) L[g].start > A && (this._directionalIntent = -1), L[g].start = L[g].end = A;
                    tide.support.webKit ? (this._doInputCleanup = "delete", this._insertText(" ", 0, 1)) : (this._insertText(""), a = !0)
                } else if (S || !r && e.ctrlKey && y) {
                    var k = this._getSelection(),
                        A = k.start,
                        I = k.end;
                    if (k.start === k.end)
                        if (o && d) {
                            if (window.getSelection) {
                                var R = window.getSelection();
                                R.modify ? (R.modify("extend", "forward", "lineboundary"), A = this._getSelection().start) : n.warn("Cannot delete to line boundary; DOMSelection.modify() is not supported.", !0)
                            }
                        } else if (o && h || !o && d) {
                        var M = this.element.textContent;
                        M = M.slice(k.end);
                        var D = M.match(/^\s*\S+/),
                            O = k.end + (D ? D[0].length : M.length);
                        this._setSelection(k.end, O), A = k.end, I = O
                    } else k.end < this.element.textContent.length && (this._setSelection(k.end, k.end + 1), A = k.end, I = k.end + 1);
                    tide.v.editor.selection.getText().indexOf("\n") > -1 && (this._didChangeLines = !0);
                    for (var L = this.getMarksInRange(A, I), g = L.length - 1; g > -1; g--) L[g].start = L[g].end = A;
                    tide.support.webKit ? (this._doInputCleanup = "delete", this._insertText(" ", 0, 1)) : (this._insertText(""), a = !0), this._directionalIntent = 1
                }
            } else {
                var R, j;
                window.getSelection && (R = window.getSelection(), R.modify && (j = R.rangeCount && R.getRangeAt(0), R.modify("move", "forward", "lineboundary")));
                var P = this._keydownActiveToken,
                    $ = P.length ? P[0].getBoundingClientRect().top : 0,
                    B = Math.floor(tide.v.editor.selection.getCoords().y),
                    H = 10;
                if (j && (R.removeAllRanges(), R.addRange(j)), Math.abs(B - $) <= H) {
                    var U = P.prev(".br")[0];
                    U && (this._setSelection(0, 0, 0, U), a = !0)
                }
            } else {
                if (tide.support.webKit) this._doInputCleanup = {
                    type: "enter",
                    cursor: this._keydownSelection.start + 1
                }, this._insertText(""), this._keydownStartNode = window.getSelection && window.getSelection().getRangeAt(0).startContainer;
                else {
                    var V = this._getSelection();
                    this._insertText("\n"), this._setSelection(V.end + 1), a = !0
                }
                this._didChangeLines = !0
            } else {
                if (k) {
                    var q = v ? "**" : "*";
                    this._insertText(q + k + q)
                }
                a = !0
            }
            return a ? (e.preventDefault(), !1) : (this._shouldFixMissingLineBreaks = !0, void 0)
        },
        handleKeypress: function (e) {
            var t, n = -1 !== navigator.platform.toUpperCase().indexOf("MAC"),
                i = e.char || String.fromCharCode(e.charCode),
                s = e.shiftKey,
                a = n ? e.metaKey : e.ctrlKey,
                o = n ? e.ctrlKey : e.metaKey,
                r = e.altKey;
            if ("-" !== i || s || r || a) {
                if (o && "" === i) this._insertText("-"), t = !0;
                else if (!("'" !== i && '"' !== i || a || r)) {
                    var l = this.activeToken()[0] || this.element,
                        d = this._getSelection(l),
                        u = tide.v.ui.getCaretParent(),
                        h = -1 !== u.className.indexOf(" md-paren") || -1 !== u.className.indexOf(" img-parens") || -1 !== u.className.indexOf(" md-src") ? !0 : !1,
                        p = h || -1 !== u.className.indexOf(" code") || -1 !== u.className.indexOf(" linkdef") || -1 !== l.className.indexOf(" pre") ? !0 : !1,
                        f = !1,
                        m = !1;
                    if (o) f = s ? '"' : "'", m = !0;
                    else if (!p) {
                        tide.v.editor.selection.set(l, d.start - 1, d.start);
                        var v = tide.v.editor.selection.getText(),
                            g = !v || /[\s({\[<\u2039\u00ab\u27e8\u27ea\u2768\u276e\u3014\u3010\u3016\u276a\u2774\u2772\u276c\u23a7\u23a1\u239b\u23a8\u23a3\u239d\u23a9]/.test(v);
                        tide.v.editor.selection.set(l, d.start, d.end), f = '"' === i ? g ? "“" : "”" : g ? "‘" : "’"
                    }
                    f && (tide.support.webKit && !m ? this._doInputCleanup = {
                        type: "replace",
                        from: d.start,
                        to: d.start + 1,
                        character: f,
                        container: l
                    } : (this._insertText(f), t = !0))
                }
            } else {
                var u = tide.v.ui.getCaretParent(),
                    l = this.activeToken(),
                    _ = -1 !== u.className.indexOf(" code") || -1 !== u.className.indexOf(" linkdef") || l.hasClass("pre"),
                    b = !1;
                if (!_ && !o) {
                    var y = this._getSelection(),
                        w = this.element.textContent,
                        x = l.text(),
                        v = w[y.start - 1];
                    b = "-" === v && !c.test(x)
                }
                b && (this._setSelection(y.start - 1, y.end), this._insertText("—"), t = !0, tide.support.webKit ? this._doInputCleanup = {
                    type: "replace",
                    from: y.start - 1,
                    to: y.end,
                    character: "—"
                } : (this._setSelection(y.start - 1, y.end), this._insertText("—"), t = !0))
            }
            t && e.preventDefault()
        },
        handleKeyup: function (e) {
            if (!this._composing && !this._contentHandled) {
                var t = this._getSelection();
                this._cleanupInput(t);
                var n = this.html(!0),
                    i = this.activeToken()[0];
                if (String.fromCharCode(e.keyCode), this._preKeydownContent !== n) {
                    this._preKeydownContent = n, this.$element.find("br").remove(), n = n.replace(/<br\s*[\/]?>/gi, ""), this._fixMissingLineBreaks(e) || "\n" !== n.slice(-1) && (this.element.innerHTML += "\n", n += "\n"), this._html = tide.util.stripTags(n), this._text = null, this._isMarksDirty = !0, this._lastSelection = {
                        text: t.toString(),
                        startOffset: t.start,
                        endOffset: t.end
                    };
                    var s, a = n;
                    !this._didChangeLines && this._keydownActiveToken && i && this._keydownActiveToken[0] === i && (s = i, a = i.innerHTML), this.updateElementHtml(a, t.anchor, t.focus, s), this.keepCursorInViewport(), tide.v.editor.messaging.change(), this._signalNotableChange()
                } else {
                    var o = this.updateSelection();
                    o && this.keepCursorInViewport()
                }
            }
        },
        handleInput: function (e) {
            var t = this._getSelection();
            this._doInputCleanup && t.end >= this._keydownSelection.start - 1 && (this._cleanupInput(t), this._fixMissingLineBreaks(e))
        },
        handleFocus: function () {
            this._setFocused(!0), this.setActiveToken(), this.startSelectionMonitor(), this.updateSelection()
        },
        handleBlur: function () {
            this._setFocused(!1), this.stopSelectionMonitor(), this.updateSelection()
        },
        handlePaste: function () {
            this.preserveSelection();
            var e = this,
                n = t('<div id="temp_paste" contenteditable></div>').appendTo(t("body")).css({
                    position: "absolute",
                    left: "0",
                    top: "0",
                    "z-index": "-10"
                }).focus();
            window.setTimeout(function () {
                n.find("a[href]").each(function (e, n) {
                    var i = n.textContent,
                        s = n.href;
                    (i === s || "http://" + i === s || "http://www." + i === s || "https://" + i === s || "https://www." + i === s) && t(n).replaceWith(i)
                });
                var i = n.html();
                n.blur(), n.remove(), e.restoreSelection(), e.focus(), e._insertHtml(toMarkdown(i));
                var s = e._getSelection();
                e._html = e.html(!0), e.updateElementHtml(e._html, s.start, s.end), e.keepCursorInViewport(), tide.v.editor.messaging.change(), e._signalNotableChange()
            }, 1)
        },
        handleCopy: function () {
            var e, n, i, s = window.getSelection();
            e = s.getRangeAt(0), n = e.cloneRange(), i = t("<pre contenteditable></pre>").html(tide.util.escapeHtml(n.toString()).replace(/\n/g, "<br/>")).appendTo(t("body")).focus(), s.selectAllChildren(i[0]), window.setTimeout(function () {
                i.blur(), i.remove(), s.removeAllRanges(), s.addRange(n)
            }, 1)
        },
        handleCut: function () {
            var e, n, i, s = window.getSelection();
            e = s.getRangeAt(0), n = e.cloneRange(), i = t("<pre contenteditable></pre>").html(tide.util.escapeHtml(n.toString()).replace(/\n/g, "<br/>")).appendTo(t("body")).focus(), s.selectAllChildren(i[0]);
            var a = this;
            window.setTimeout(function () {
                i.blur(), i.remove(), s.removeAllRanges(), s.addRange(n), a.focus(), document.execCommand("delete");
                var e = a._getSelection();
                a._html = a.html(!0), a.updateElementHtml(a._html, e.start, e.end), a.keepCursorInViewport(), tide.v.editor.messaging.change(), a._signalNotableChange()
            }, 1)
        },
        handleCompositionstart: function () {
            this._composing = !0
        },
        handleCompositionend: function () {
            this._composing = !1
        },
        handleMousedown: function () {
            this._preMousedownSelection = this._getSelection()
        },
        handleMouseup: function () {
            var e = this;
            setTimeout(function () {
                e.setActiveToken(), e._directionalIntent = 0, e.updateSelection()
            }, 0)
        },
        startSelectionMonitor: function () {
            tide.support.touch && (this._selectionMonitor || (this._selectionMonitor = setInterval(this._bind("updateSelection"), l)))
        },
        stopSelectionMonitor: function () {
            clearInterval(this._selectionMonitor), this._selectionMonitor = 0
        },
        updateSelection: function () {
            var e = window.getSelection();
            if (e.rangeCount) {
                var t = e.getRangeAt(0),
                    n = t.toString(),
                    i = document.createRange();
                i.setStart(this.element, 0), i.setEnd(t.startContainer, t.startOffset);
                var s = i.toString().length,
                    a = s + n.length;
                i.detach();
                var o = !this._lastSelection || n !== this._lastSelection.text || s !== this._lastSelection.startOffset || a !== this._lastSelection.endOffset;
                if (o) return this._lastSelection = {
                    text: n,
                    startOffset: s,
                    endOffset: a
                }, tide.v.editor.messaging.caretChange(s), !0
            }
        }
    }), tide.highlightProfile = [], tide.highlightProfile.average = function () {
        var e = this.reduce(function (e, t) {
            return e + t
        });
        return e / this.length
    }
}(this, jQuery, tide.logger),
function (e, t) {
    var n = e.tide,
        i = e.document,
        s = i.documentElement;
    n.v.elem = {
        $html: t(s),
        $body: t(i.body),
        $basicEditor: null,
        $form: null,
        $idInput: null,
        $titleInput: null,
        $editorArticle: t("<article><pre></pre></article>"),
        $richEditor: t('<div class="language-md the-tide" contenteditable role="textbox" aria-multiline="true"></div>'),
        $infoMenu: null,
        $docInfo: t("<div class='doc-info'><p><b class='number word-count'></b> <b class='word-count-tag'>words</b></p><p><b class='number char-count'></b> <b class='char-count-tag'>characters</b></p></div>"),
        $words: null,
        $chars: null,
        define: function () {
            var e = n.v.elem;
            e.$basicEditor = t(".baseline"), e.$form = e.$basicEditor.parent("form"), e.$infoMenu = t(".info-menu .menu-widget"), e.$words = t(".word-count", e.$docInfo), e.$chars = t(".char-count", e.$docInfo), e.$idInput = t("#tide-id"), e.$titleInput = t("#tide-title")
        }
    }, n.v.editor = t.extend(n.v.editor || {}, {
        getInitialContent: function () {
            return n.v.elem.$basicEditor && n.v.elem.$basicEditor.length ? n.v.elem.$basicEditor[0].value : ""
        },
        getInitialMarks: function () {
            try {
                var e = t("#document-marks").html();
                return JSON.parse(e)
            } catch (n) {
                return []
            }
        },
        getInitialUnread: function () {
            try {
                return JSON.parse(t("#unread-events").html())
            } catch (e) {
                return null
            }
        },
        getArticleId: function () {
            return parseInt(n.v.elem.$idInput.val(), 10)
        },
        getArticleTitle: function () {
            return n.v.elem.$titleInput.val()
        },
        inject: function () {
            var e = n.v.elem,
                t = new n.v.EditorView;
            t.$element.addClass("language-md the-tide"), e.$editorArticle.insertAfter(e.$form), t.appendTo(e.$editorArticle.children(0)), n.v.richEditor = t, n.v.$richEditor = t.$element
        },
        addEnhanceClass: function () {
            n.v.elem.$html.addClass("editor-loaded")
        },
        content: {
            get: function () {
                return n.v.richEditor.html()
            },
            set: function (e, t, i) {
                n.v.richEditor.setHtml(e, t, i)
            }
        },
        caret: {
            getPos: function () {
                return n.v.richEditor.caretPosition()
            }
        }
    }), n.v.ui = t.extend(n.v.ui || {}, {
        displayError: function (e, n, i, s) {
            t(document.body).trigger("top-error", [e, n, i, s])
        },
        docInfo: {
            update: function (e, t) {
                null != e && null != t && (n.v.elem.$words.text(e), n.v.elem.$chars.text(t))
            },
            inject: function () {
                n.v.elem.$docInfo.appendTo(n.v.elem.$infoMenu)
            }
        }
    }), n.v.init = function () {
        n.v.elem.define(), n.v.editor.inject(), n.v.editor.addEnhanceClass(), n.v.ui.docInfo.inject(), n.v.richEditor.focus()
    }
}(this, jQuery),
function () {
    var e = window.location.pathname.slice(1).split("/"),
        t = {};
    if ("docs" === e[0] && e.length > 1) {
        t.shortName = e[1];
        var n = e[1].match(/^(\d+)/);
        t.id = n && parseInt(n[1], 10), "revisions" === e[2] && e.length > 3 && (t.diff = "diff" === e[3], t.diff ? (t.revisionId = parseInt(e[5], 10), t.diffRevisionId = parseInt(e[4], 10)) : t.revisionId = parseInt(e[3], 10)), e.indexOf("preview") > -1 ? t.preview = "text" : e.indexOf("html") > -1 && (t.preview = "code")
    }
    var i = parseInt($('meta[name="tide-doc-revision"]').attr("content"), 10),
        s = parseInt($('meta[name="tide-doc-diff-revision"]').attr("content"), 10);
    isNaN(i) || (t.revisionNumber = i), isNaN(s) || (t.diffRevisionNumber = s), tide.documentInfo = t
}(this), tide.util.tooltips = function (e) {
    e = e || document.body, $("[title][data-tooltip]", e).not(".tooltipped").each(function () {
        var e = $(this),
            t = e.find(".tooltip");
        t.length ? t.removeClass("hidden") : e.append('<span aria-hidden="true" class="tooltip"><span class="tooltip-inner">' + e.attr("title") + "</span></span>"), e.addClass("tooltipped").removeAttr("title")
    }).on("focus mouseover", function () {
        $(this).find(".tooltip").attr("aria-hidden", "false")
    }).on("blur mouseout", function () {
        $(this).find(".tooltip").attr("aria-hidden", "true")
    })
},
function (e, t) {
    tide.v.View.extend("TemplateView", {
        init: function (e) {
            e = e || {}, this.template = SMT[e.template || this.template], tide.v.View.prototype.init.call(this, e), e.data && this.setData(e.data)
        },
        getSubviewContainer: function () {
            return this._subviewContainer
        },
        performAction: function (e) {
            e.preventDefault();
            var t = e.data && e.data.action;
            "function" == typeof this[t] ? this[t](e) : this.controller && "function" == typeof this.controller[t] && this.controller[t](e)
        },
        _templateData: function () {
            return this._data ? this._data.data || this._data.models || this._data.attributes || this._data : {}
        },
        _setupElement: function () {
            return tide.v.View.prototype._setupElement.call(this), this._extractDataAttributes(this.element)
        },
        _createElement: function () {
            var e = this._templateData(),
                t = tide.v.TemplateView.createTemplateDOM(this.template, e);
            return this._extractDataAttributes(t)
        },
        _extractDataAttributes: function (e) {
            this._subviewContainer = t(e).find("[data-subviews]")[0] || e;
            var n = this;
            return t(e).find("[data-outlet]").each(function (e, t) {
                n[t.getAttribute("data-outlet")] = t
            }), t(e).find("[data-action]").each(function (e, i) {
                n._performAction || (n._performAction = t.proxy(n, "performAction")), t(i).on("click", null, {
                    action: i.getAttribute("data-action")
                }, n._performAction)
            }), tide.util.tooltips(e), e
        },
        _recreate: function () {
            this.element && this._removeEvents();
            var e = this._createElement();
            this._updateElementWithState(e), this.element && this.element.parentNode && this.element.parentNode.replaceChild(e, this.element), this._setElement(e)
        },
        _dataReset: function () {
            this._recreate()
        },
        _dataChange: function () {
            this._dataReset()
        }
    }, {
        createTemplateDOM: function (e, n) {
            for (var i, s = t(e(n)), a = 0, o = s.length; o > a && (i = s[a], 1 !== i.nodeType); a++);
            return t(i).remove()[0]
        }
    })
}(this, jQuery),
function (e, t) {
    tide.v.TemplateView.extend("NewDiscussion", {
        template: "discussions/new_discussion",
        init: function (e) {
            this._boundSubmit = t.proxy(this, "_submit"), tide.v.TemplateView.prototype.init.call(this, e)
        },
        _addEvents: function () {
            t(this.submitButton).on("click", this._boundSubmit)
        },
        _removeEvents: function () {
            t(this.submitButton).off("click", this._boundSubmit)
        },
        _submit: function (e) {
            e.preventDefault(), this._publish("newComment", this.textarea.value)
        },
        appendTo: function (e) {
            var n = tide.v.TemplateView.prototype.appendTo.call(this, e),
                i = this.$element.find(".drawer-title"),
                s = i.find("h1 a"),
                a = i.css("line-height").replace("px", "");
            return 2 * a > s.height() ? i.find(".excerpt-expand").remove() : i.on("click", ".excerpt-expand", function () {
                return t(this).addClass("excerpt-collapse").removeClass("excerpt-expand"), s.addClass("no-excerpt"), !1
            }).on("click", ".excerpt-collapse", function () {
                return t(this).addClass("excerpt-expand").removeClass("excerpt-collapse"), s.removeClass("no-excerpt"), !1
            }), s.removeClass("no-excerpt"), n
        },
        _createElement: function () {
            var e = tide.v.TemplateView.prototype._createElement.call(this);
            return t(this.textarea).wrap('<div class="comment-holder"></div>').before('<pre aria-hidden="true" class="comment-shim"></pre>'), e
        },
        _dataReset: function () {
            tide.v.TemplateView.prototype._dataReset.call(this), this.textarea.focus()
        },
        clearForm: function () {
            this.$element.find("form")[0].reset()
        }
    })
}(this, jQuery),
function (e, t) {
    tide.v.TemplateView.extend("DiscussionPanel", {
        template: "discussions/discuss_panel",
        init: function (e) {
            tide.v.TemplateView.prototype.init.call(this, e)
        },
        setContentView: function (e) {
            e !== this._currentContentView && (this._currentContentView && this._currentContentView.remove(), this.append(e), this._currentContentView = e)
        },
        setDiscussionButtonMode: function (e) {
            var t = "cancel" === e;
            this.cancelDiscussionButton.style.display = t ? "" : "none", this.newDiscussionButton.style.display = t ? "none" : "", this.cancelDiscussionButton[t ? "removeAttribute" : "setAttribute"]("disabled", "disabled"), this.newDiscussionButton[t ? "setAttribute" : "removeAttribute"]("disabled", "disabled")
        },
        setFilterMode: function (e) {
            var n = this.$element.find("h1"),
                i = this.$element.find("a.toggle-filter");
            "closed" == e ? (n.text("Closed Discussions"), i.text("Open Discussions").attr("href", "discussions"), t(document.body).addClass("view-discuss-closed")) : (n.text("Open Discussions"), i.text("Closed Discussions").attr("href", "discussions/closed"), t(document.body).removeClass("view-discuss-closed")), i[this.controller.closed_discussions.length ? "show" : "hide"]()
        },
        showNavigation: function () {
            this.setNavigationVisible(!0)
        },
        hideNavigation: function () {
            this.setNavigationVisible(!1)
        },
        setNavigationVisible: function (e) {
            this.navigation.style.display = e ? "" : "none", tide.placeholder()
        },
        showNewDiscussion: function () {
            this.setNewDiscussionVisible(!0)
        },
        hideNewDiscussion: function () {
            this.setNewDiscussionVisible(!1)
        },
        setNewDiscussionVisible: function (e) {
            this.newDiscussionButton.style.display = e ? "" : "none"
        },
        _setVisible: function (e) {
            return t(document.body).toggleClass("drawer-open view-discuss", e), tide.v.TemplateView.prototype._setVisible.call(this, e)
        },
        _addEvents: function () {
            t(this.newDiscussionButton).on("click", this._forwardEvent("newDiscussion")), t(this.cancelDiscussionButton).on("click", this._forwardEvent("cancelDiscussion"))
        }
    }, {
        CSS_CLASS: "editor-drawer discuss-pane"
    })
}(this, jQuery), tide.util.paneToggle = function (e) {
    e = e || document;
    var t = $(".tab-open", e),
        n = $("[data-pane=optional]", e);
    t.each(function () {
        var e = $(this);
        e.off("click"), e.attr("data-txt-original") || e.attr("data-txt-original", e.text())
    }), n.addClass("a11y"), t.on("click", function (e) {
        e.stopPropagation();
        var t = $(this),
            n = t.data("alt"),
            i = t.data("class-alt"),
            s = t.text(),
            a = t.attr("class"),
            o = $("#" + t[0].getAttribute("href").split("#")[1]);
        return o.hasClass("a11y") ? o.removeClass("a11y") : o.addClass("a11y"), t.text(n), t.data("alt", s), i && (t.attr("class", i), t.data("class-alt", a)), t.data("state-alt", !t.data("state-alt")), !1
    })
},
/**
 * --------------------------------------------------------------------
 * jQuery collapsible plugin
 * Author: Scott Jehl, scott@filamentgroup.com
 * Copyright (c) 2009 Filament Group
 * licensed under MIT (filamentgroup.com/examples/mit-license.txt)
 * Modified by @beep with a few bits from jQM
 * --------------------------------------------------------------------
 */
$.fn.collapsible = function (e) {
    return $(this).each(function () {
        var t = $.extend({
            collapsed: !0,
            splitBtn: !1,
            event: "click",
            content: null
        }, e),
            n = $(this),
            i = t.content || (n.next().length ? n.next() : n.parent().next()),
            s = (n.attr("data-enhanced-aria-label"), " (Content collapsed: click to expand contents) "),
            a = " (Content expanded: click to collapse contents)";
        n.addClass("collapsible-heading").append('<span class="collapsible-heading-status"></span>').not("a").wrapInner('<a href="#" class="collapsible-heading-toggle"></a>').end().filter("a").addClass("collapsible-heading-toggle"), i.addClass("collapsible-content");
        var o = i.parent();
        o.addClass("collapsible"), n.bind("expand collapse", function (e) {
            if (!e.isDefaultPrevented()) {
                var t = $(this),
                    r = "collapse" === e.type;
                if (e.preventDefault(), !r) {
                    var c = ".collapsible-heading-expanded";
                    c += "tab" === t.attr("role") ? ":not( [ data-role=drawer ] )" : "drawer" !== t.data("role") ? ":not( [ data-role=drawer ], [role=tab] )" : ":not( [role=tab] )", $(c).not(this).trigger("collapse")
                }
                n.toggleClass("collapsible-heading-collapsed", r).toggleClass("collapsible-heading-expanded", !r).find("collapsible-heading-status").text(r ? s : a), o.toggleClass("collapsible-collapsed", r).toggleClass("collapsible-expanded", !r), i.toggleClass("collapsible-content-collapsed", r).toggleClass("collapsible-content-expanded", !r).attr("aria-hidden", r)
            }
        }).trigger(t.collapsed ? "collapse" : "expand"), n.bind(t.event || "click", function (e) {
            var t = n.hasClass("collapsible-heading-collapsed") ? "expand" : "collapse";
            n.trigger(t), e.preventDefault(), e.stopPropagation()
        })
    })
},
function (e, t) {
    tide.v.TemplateView.extend("Alert", {
        template: "ui/flash_bar",
        appendTo: function (e) {
            var n = this.element.parentNode;
            e instanceof t && (e = e[0]), t(e).prepend(this.element), n || this._addEvents()
        }
    })
}(this, jQuery),
function (e, t, n, i) {
    e.c.notifications = {
        show: function (t) {
            if (t && !(this._indexOfNotification(t) > -1)) {
                var n = this._notificationElement(t);
                this._stack.push({
                    notification: t,
                    element: n
                }), e.config.maxNotifications && this._stack.length <= e.config.maxNotifications && this._showElement(n, function () {
                    e.c.currentController.updateLayout && e.c.currentController.updateLayout()
                });
                var i = function () {
                    e.c.notifications.hide(t)
                }, s = t.timeout;
                return s === !0 && (s = e.config.notificationTimeout), s && setTimeout(i, s), i
            }
        },
        hide: function (t) {
            var n = this._indexOfNotification(t),
                i = this;
            if (n > -1) {
                var s = this._stack.splice(n, 1)[0],
                    a = this._existingNotificationElement(s);
                this._hideElement(a, function () {
                    if (e.config.maxNotifications && i._stack.length >= e.config.maxNotifications) {
                        var t = i._stack[e.config.maxNotifications - 1],
                            n = i._existingNotificationElement(t);
                        i._showElement(n, function () {
                            e.c.currentController.updateLayout && e.c.currentController.updateLayout()
                        })
                    }
                    e.c.currentController.updateLayout && e.c.currentController.updateLayout()
                })
            }
            return n > -1
        },
        updateLayout: function (e, t) {
            e = e !== !1;
            var i = 0;
            if (this._getContainer().children().each(function (e, t) {
                i += t.getBoundingClientRect().height
            }), t || this._height !== i) {
                this._height = i;
                var s = this._getPage();
                if (!e) {
                    var a = s.css(n.transitionProperty);
                    s.css(n.transitionProperty, "none")
                }
                s.css("top", this._height), e || (s[0].offsetLeft, s.css(n.transitionProperty, a))
            }
        },
        createNotification: function (e) {
            var t = !("dismissible" in e) || e.dismissible,
                n = new i({
                    data: {
                        alert: e.message,
                        alert_html: e.html,
                        alert_type: e.type || "alert",
                        dismissible: t
                    }
                });
            if (t) {
                var s = this;
                n.$element.find(".msg-close").one("click", function () {
                    return s.hide(e), !1
                })
            }
            return n
        },
        _height: 0,
        _stack: [],
        _indexOfNotification: function (e) {
            for (var t = 0, n = this._stack.length; n > t; t++) {
                var i = this._stack[t].notification;
                if (i === e || i.view && i.view === e.view || i.element && i.element === e.element || i.message && i.message === e.message && i.type === e.type || i.html && i.html === e.html && i.type === e.type) return t
            }
            return -1
        },
        _getContainer: function () {
            return t(".ed-messages")
        },
        _getPage: function () {
            return t(".ed-outer")
        },
        _showElement: function (i, s) {
            var a = this._getContainer(),
                o = t(i);
            o.css({
                left: 0,
                right: 0,
                position: "absolute",
                visibility: "hidden"
            }), a.prepend(i);
            var r = i.getBoundingClientRect().height;
            this._height += r, o.css({
                position: "",
                visibility: "",
                "margin-top": "-" + r + "px"
            }).css(n.transitionProperty, "none").addClass("visible").removeClass("hidden"), i.offsetLeft, o.css(n.transitionProperty, "").css("margin-top", "0"), this._getPage().css("top", this._height), n.transitionEvent && s ? o.one(n.transitionEvent, s) : (e.c.currentController.updateLayout && e.c.currentController.updateLayout(), s && s())
        },
        _hideElement: function (i, s) {
            var a = t(i);
            this._getContainer();
            var o = i.getBoundingClientRect().height;
            this._height = Math.max(0, this._height - o), this._getPage().css("top", this._height + "px"), a.css("margin-bottom", "-" + o + "px"), n.transitionEvent ? a.one(n.transitionEvent, function () {
                a.detach(), s && s(), e.c.currentController.updateLayout && e.c.currentController.updateLayout()
            }) : (a.detach(), s && s(), e.c.currentController.updateLayout && e.c.currentController.updateLayout())
        },
        _notificationElement: function (e) {
            if (e.view) return e.view.element || e.view.el;
            if (e.element) return e.element;
            var t = this.createNotification(e);
            return t.element
        },
        _existingNotificationElement: function (e) {
            var t = e.notification;
            return t.view ? t.view.element || t.view.el : t.element ? t.element : e.element
        }
    }, t(window).on("resize", function () {
        e.c.notifications.updateLayout(!1)
    }), t(function () {
        var n = t("#flash-messages").html();
        try {
            for (var i = JSON.parse(n), s = 0, a = i.length; a > s; s++) e.c.notifications.show(i[s])
        } catch (o) {}
    })
}(tide, jQuery, tide.util, tide.v.Alert),
function () {
    var e;
    e = "undefined" != typeof exports ? exports : this.Cocktail = {}, e.mixins = {}, e.mixin = function (t) {
        var n = _.chain(arguments).toArray().rest().flatten().value(),
            i = {};
        _(n).each(function (n) {
            _.isString(n) && (n = e.mixins[n]), _(n).each(function (e, n) {
                _.isFunction(e) ? (t.prototype[n] && (i[n] = i[n] || [t.prototype[n]], i[n].push(e)), t.prototype[n] = e) : _.isObject(e) && (t.prototype[n] = _.extend({}, e, t.prototype[n] || {}))
            })
        }), _(i).each(function (e, n) {
            t.prototype[n] = function () {
                var t = this,
                    n = arguments,
                    i = void 0;
                return _(e).each(function (e) {
                    var s = _.isFunction(e) ? e.apply(t, n) : e;
                    i = void 0 === s ? i : s
                }), i
            }
        })
    };
    var t;
    e.patch = function (n) {
        t = n.Model.extend;
        var i = function (n, i) {
            var s = t.call(this, n, i),
                a = s.prototype.mixins;
            return a && s.prototype.hasOwnProperty("mixins") && e.mixin(s, a), s
        };
        _([n.Model, n.Collection, n.Router, n.View]).each(function (t) {
            t.mixin = function () {
                e.mixin(this, _.toArray(arguments))
            }, t.extend = i
        })
    }, e.unpatch = function (e) {
        _([e.Model, e.Collection, e.Router, e.View]).each(function (e) {
            e.mixin = void 0, e.extend = t
        })
    }
}(),
function (e) {
    var t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        n = /(?:(?:[\0-\u02FF\u0370-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uDC00-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF])(?:[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+))|(?:[\uD800-\uDBFF][\uDC00-\uDFFF])/g;
    e.unicode = {
        length: function (e) {
            return e.replace(t, "_").length
        },
        lengthCombined: function (e) {
            return e.replace(n, "_").length
        }
    }
}(window.tide),
function (e, t) {
    "use strict";
    e.m.BBCollection = Backbone.Collection.extend({
        add: function (e, t) {
            return this.trigger("beforeAdd", e, t), Backbone.Collection.prototype.add.apply(this, arguments)
        },
        create: function (e, n) {
            var i = this;
            if (n) var s = n.success || t.noop,
            a = n.error || t.noop;
            else n = {};
            return n.success = function (e) {
                s && s.apply(this, arguments), i.trigger("createSucceeded", e)
            }, n.error = function () {
                a && a.apply(this, arguments), i.trigger("createFailed")
            }, Backbone.Collection.prototype.create.call(i, e, n)
        }
    })
}(this.tide, jQuery),
function (e) {
    "use strict";
    e.m.DiscussionComment = e.m.BBModel.extend({
        defaults: {
            discussion_id: null,
            content: null,
            user_name: "You",
            gravatar_url: null,
            created_at_human: "just now"
        },
        initialize: function () {
            !this.attributes.discussion_id && this.collection && this.set("discussion_id", this.collection.discussion_id)
        },
        urlRoot: "/api/v1/comment"
    })
}(this.tide, jQuery),
function (e, t, n) {
    "use strict";
    e.m.DiscussionComments = e.m.BBCollection.extend({
        model: n,
        url: function () {
            return "/docs/" + this.document_id + "/discussions/" + this.discussion_id + ".json"
        },
        initialize: function (e, t) {
            t.document_id && (this.document_id = t.document_id), t.discussion_id && (this.discussion_id = t.discussion_id)
        }
    })
}(this.tide, jQuery, this.tide.m.DiscussionComment),
function (e) {
    "use strict";
    e.m.Discussion = e.m.BBModel.extend({
        defaults: {
            document_id: null,
            article_id: null,
            topic_text: null,
            active: !0
        },
        initialize: function (t) {
            this.document_id = this.article_id = this[this.collection ? "collection" : "attributes"].document_id, this.comments = new e.m.DiscussionComments(null, {
                document_id: this.document_id,
                discussion_id: this.id
            });
            var n = this;
            t.comments && t.comments.forEach(function (e) {
                n.comments.add(e)
            })
        },
        urlRoot: function () {
            return "/api/v1/discussion"
        },
        open: function (e) {
            var t = this;
            return this.save({
                active: !0
            }, {
                success: function () {
                    e && e.apply(t)
                },
                error: function () {
                    e && e.call(t, "error")
                }
            })
        },
        close: function (e) {
            var t = this;
            return this.save({
                active: !1
            }, {
                success: function () {
                    e && e.apply(t)
                },
                error: function () {
                    e && e.call(t, "error")
                }
            })
        }
    })
}(this.tide, jQuery),
function (e, t, n) {
    "use strict";
    e.m.Discussions = e.m.BBCollection.extend({
        model: n,
        url: function () {
            return "/docs/" + this.document_id + "/discussions.json"
        },
        initialize: function (e, t) {
            t.document_id && (this.document_id = t.document_id)
        }
    })
}(this.tide, jQuery, this.tide.m.Discussion),
function (e) {
    "use strict";
    e.m.DocumentComment = Backbone.Model.extend({
        defaults: {
            content: "",
            is_comment: !0,
            document_id: null,
            discussion_id: null,
            user_id: null,
            created_at_human: null,
            verbed_by: ""
        },
        urlRoot: function () {
            var e = "/api/v1/article/" + this.get("document_id") + "/comment";
            return e
        }
    })
}(this.tide, jQuery),
function (e) {
    "use strict";
    e.m.Activity = Backbone.Model.extend({
        defaults: {
            document_id: null,
            user_id: null,
            created_at_human: null,
            ico_class: "",
            verbed_by: ""
        },
        urlRoot: function () {
            var e = "/docs/" + this.get("document_id") + "/discussions/activity";
            return e
        }
    })
}(this.tide, jQuery),
function (e, t, n, i) {
    "use strict";
    e.m.ActivityEvents = e.m.BBCollection.extend({
        model: function (e, t) {
            return e.is_comment ? new n(e, t) : new i(e, t)
        },
        url: function () {
            return "/api/v1/article/" + this.document_id + "/activity"
        },
        initialize: function (e, t) {
            t.document_id && (this.document_id = t.document_id)
        }
    })
}(this.tide, jQuery, this.tide.m.DocumentComment, this.tide.m.Activity),
function (e, t) {
    "use strict";
    e.m.Collaborator = t.extend({
        _useFormEncoding: !0,
        savedProperties: ["role", "email", "user_id"],
        defaults: {
            status: "pending"
        },
        active: function () {
            var e = this.get("status");
            return "accepted" === e || "pending" === e
        },
        _beforeSet: function (e) {
            "article_id" in e && (e.document_id = e.article_id, delete e.article_id), "status" in e && !("role_description" in e) && ("pending" === e.status && (e.role_description = "Invited"), "deleted" === e.status && (e.role_description = "Deleted"))
        },
        reinvite: function () {
            this.id = null, this.save()
        },
        save: function () {
            return this.active() || this.set("status", "pending"), t.prototype.save.apply(this, arguments)
        },
        destroy: function () {
            var e = this,
                n = this.collection,
                i = t.prototype.destroy.apply(this, arguments);
            return i && i.then(function () {
                n && (e.set("status", "deleted"), n.add(e))
            }), i
        }
    })
}(tide, tide.m.BBModel),
function (e, t) {
    e.m.UnreadItem = t.extend({
        urlRoot: e.API_ROOT + "/unread",
        initialize: function (e) {
            this.id || this.set("id", e.type + ":" + e.object_id)
        }
    })
}(tide, tide.m.BBModel),
function (e, t) {
    function n(e) {
        var t = "object" == typeof e ? e.id : e;
        return function (e) {
            var n = e.get("discussion_id");
            return t ? n === t : !! n
        }
    }
    e.m.UnreadItems = t.extend({
        model: e.m.UnreadItem,
        url: function () {
            return e.API_ROOT + "/article/" + this.document_id + "/unread"
        },
        isDiscussionUnread: function (e) {
            return this.any(n(e))
        },
        discussionComments: function (e) {
            return this.filter(n(e))
        },
        documentComments: function () {
            return this.filter(function (e) {
                return "document_comment" === e.get("type")
            })
        },
        documentActivity: function () {
            return this.filter(function (e) {
                var t = e.get("type");
                return "document_comment" === t || "new_version" === t
            })
        }
    })
}(tide, tide.m.BBCollection),
function (e, t, n) {
    "use strict";
    e.m.Tag = t.extend({
        _beforeSet: function (e) {
            e.name && (e.name = n.trim(e.name.toLowerCase()))
        }
    })
}(tide, tide.m.BBModel, jQuery),
function (e, t, n) {
    "use strict";
    e.m.Tags = t.extend({
        model: n,
        initialize: function (e, t) {
            t = t || {}, this.taggable = t.taggable && {
                id: t.taggable.id,
                type: t.taggable.type || "article"
            }, this.tagger = t.tagger && {
                id: t.tagger.id,
                type: t.tagger.type || "user"
            }
        },
        url: function () {
            var t = e.API_ROOT;
            return this.taggable && (t += "/" + this.taggable.type + "/" + this.taggable.id), t += "/tags", this.tagger && (t += "/" + this.tagger.type + "/" + this.tagger.id), t
        }
    })
}(tide, tide.m.BBCollection, tide.m.Tag),
function (e, t, n, i, s, a, o, r, c, l, d, u) {
    "use strict";

    function h(e) {
        return e.trim ? e.trim() : e.replace(/^\s*(.*)\s*$/, "$1")
    }
    e.m.Document = t.extend({
        defaults: {
            title: "",
            text: "",
            marks: [],
            persist: !1,
            status_id: 1
        },
        urlRoot: e.API_ROOT + "/article",
        url: function (e) {
            var t = this.urlRoot;
            return this.id && (t += "/" + this.id), "marks" === e ? t += "/marks" : "addMark" === e ? t += "/marks/add" : "revisions" === e && (t = "/docs/" + this.id + "/revisions.json"), t
        },
        initialize: function () {
            this._discussionMarksIndex = {}, this.discussions = new a(null, {
                document_id: this.id
            }), this.activity = new o(null, {
                document_id: this.id
            }), this.discussions.on("remove", this.removedDiscussion, this);
            var t = this;
            this.collaborators = new u.Collection([], {
                model: r
            }), this.collaborators.url = function () {
                return e.API_ROOT + "/article/" + t.id + "/collaborators"
            }, this.unread = new c, this.tags = new l(null, {
                taggable: this
            }), this.attributes.tags && (this.tags.add(this.attributes.tags), delete this.attributes.tags), this._isDirty = this.isNew(), this._isSaving = 0
        },
        toJSON: function (e) {
            var n = t.prototype.toJSON.apply(this, arguments);
            return delete n.raw_text, e && e.save && (n.articleText = n.text, delete n.text), "last_hash_seen" in n && !n.last_hash_seen && delete n.last_hash_seen, n
        },
        parse: function (e) {
            return e.tags && this.tags && (this.tags.reset(e.tags), delete e.tags), e
        },
        _beforeSet: function (e, t) {
            if ("text" in e && !("raw_text" in e) && (e.raw_text = n.decodeHtml(e.text)), "marks" in e) {
                var i = this.attributes.marks;
                e.marks = this._setMarks(e.marks), this.attributes.marks = i
            }
            "content_hash" in e ? e.last_hash_seen = e.content_hash : "last_hash_seen" in e && (e.content_hash = e.last_hash_seen), !t.clean && d.size(e) && (this._isDirty = !0)
        },
        addMark: function (e, t) {
            var n = e.discussion_id;
            if (null != this._discussionMarksIndex[n]) return !1;
            var i = this.attributes.marks.concat(e);
            return this.set("marks", i), this.trigger("addMark", self, i.length - 1, e), t && this.saveMark(e), e
        },
        removeMark: function (e) {
            for (var t, n = e.discussion_id || e, i = this.attributes.marks, s = 0, a = i.length; a > s; s++)
                if (i[s].discussion_id === n) return t = i.splice(s, 1)[0], this.set("marks", i, {
                    clean: !0
                }), this.trigger("removeMark", this, s, t), !0;
            return !1
        },
        _setMarks: function (e) {
            e = e || [];
            for (var t = [], n = {}, s = 0, a = e.length; a > s; s++) {
                var o = e[s],
                    r = o.discussion_id;
                if (null == n[r]) {
                    var c = t.push(this._copyMark(o)) - 1;
                    n[r] = c
                }
            }
            var l = this.attributes.marks;
            if (l) {
                for (var d = [], s = l.length - 1; s > -1; s--) {
                    var r = l[s].discussion_id;
                    r && null == n[r] && (t.push(l[s]), n[r] = !0, d.push(r))
                }
                d.length && i.error("Setting document marks w/ missing discussions: " + d.join(", "), !0)
            }
            return this.attributes.marks = t, this._discussionMarksIndex = n, t
        },
        _copyMark: function (e) {
            var t = {
                start: e.start,
                end: e.end,
                text: e.text
            }, n = e.discussion_id;
            return "number" != typeof n && (n = parseInt(n, 10)), n && (t.discussion_id = n), t
        },
        getMarkAt: function (e, t) {
            return d.findWhere(this.get("marks"), {
                start: e,
                end: t
            })
        },
        isDirty: function () {
            return this._isDirty
        },
        isSaving: function () {
            return !!this._isSaving
        },
        sync: function (e, n, s) {
            if (s = s || {}, "read" === e) {
                var a = this,
                    o = s.success;
                s.success = function (e, t, n) {
                    if ("notmodified" === t || a.isDirty() && s.cancelIfDirty) {
                        e = {};
                        var r = "notmodified" === t ? "notmodified" : "dirty";
                        i.debug("  Updates not saved because document was " + r + ".")
                    } else i.debug("  Document received changes");
                    return o && o(e, t, n)
                }
            } else if (/^(create|patch|update)$/.test(e)) {
                var a = this,
                    o = s.success;
                s.success = function (e, t, n) {
                    if (a.isDirty() && e.committed_to_head !== !1) {
                        var s = e.content_hash || e.last_hash_seen;
                        e = {}, s && (e.content_hash = s), i.debug("  Updates not saved because document was dirty.")
                    }
                    return o && o(e, t, n)
                }
            }
            return t.prototype.sync.apply(this, arguments)
        },
        fetch: function (e) {
            if (e = e || {}, this.isNew()) {
                e.success && e.success(model, null, e);
                var n = $.Deferred();
                return n.resolve(), n.promise()
            }
            if (e.headers = e.headers || {}, !e.headers["If-None-Match"]) {
                var s = this.get("last_hash_seen");
                s = e.forceLoad || !s ? "000" : s, e.headers["If-None-Match"] = '"' + s + '"'
            }
            return e.clean = e.clean || !0, i.debug("Updating document..."), t.prototype.fetch.call(this, e)
        },
        save: function (n, s) {
            if (!n && (!this.isDirty() || this.isSaving())) return !1;
            this._isDirty = !1, this._isSaving++, i.debug("Saving document...");
            var a = this;
            s = d.extend({
                clean: !0
            }, s), s.save = !0;
            var o = s.success;
            s.success = function (e, t, n) {
                i.debug("  Save complete"), e._isSaving--, e.get("committed_to_head") === !1 && e.trigger("savedPastRevision", e, {
                    id: e.get("revision_id"),
                    name: e.get("revision_name"),
                    path: "/docs/" + e.id + "/revisions/" + e.get("revision_id")
                }, e.get("control")), e.clearLocalStorage(), o && o(e, t, n)
            }, s.error, s.error = function (t, n) {
                i.debug("  Save failed"), t._isDirty = !0, t._isSaving--, 423 == n.status && e.c.showDocumentEditor(t.id)
            }, this.attributes.persist = !s.minor;
            var r = t.prototype.save.call(this, n, s);
            return delete this.attributes.persist, setTimeout(function () {
                a.saveLocally()
            }, 0), r
        },
        saveMarks: function (e) {
            var t = this;
            return u.ajax({
                url: this.url("marks"),
                type: "POST",
                success: function (n) {
                    t.trigger("savedMarks", t), e && e.success && e.success(n)
                },
                error: function (n, i) {
                    t.trigger("saveMarksError", t), e && e.error && e.error(n, i)
                },
                complete: e && e.complete,
                data: {
                    marks: JSON.stringify(this.get("marks"))
                }
            })
        },
        saveMark: function (e, t) {
            var n = this;
            return u.ajax({
                url: this.url("addMark"),
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(e),
                success: function (e) {
                    n.trigger("savedMarks", n), t && t.success && t.success(e)
                },
                error: function (e, i) {
                    n.trigger("saveMarksError", n), t && t.error && t.error(e, i)
                },
                complete: t && t.complete
            })
        },
        saveLocally: function () {
            if (window.localStorage) try {
                var t = JSON.stringify(this);
                localStorage.setItem(this.localStorageKey(), t)
            } catch (n) {
                e.logger.error("Failed to store the document " + this.id + " in local storage: " + n.message, !0)
            }
        },
        updateFromLocalStorage: function () {
            var e = this.retrieveFromLocalStorage();
            if (e) {
                if (!e.last_hash_seen) return this.clearLocalStorage(), !1;
                this.set(e)
            }
            return !!e
        },
        retrieveFromLocalStorage: function () {
            if (window.localStorage) try {
                var e = localStorage.getItem(this.localStorageKey());
                if (e) return JSON.parse(e)
            } catch (t) {}
        },
        clearLocalStorage: function () {
            if (window.localStorage) try {
                localStorage.removeItem(this.localStorageKey())
            } catch (e) {}
        },
        localStorageKey: function () {
            return "document-" + this.id
        },
        markRevision: function (e) {
            var t = this,
                n = {
                    url: this.url("revisions"),
                    type: "POST",
                    data: {},
                    success: function (e) {
                        t.trigger("newRevision", t, e.revision.sequence - 1)
                    },
                    error: function (e) {
                        t.trigger("revisionFailed", t, e)
                    }
                };
            return e && (n.data["revision[name]"] = e), u.prepareRequest(n), this.isDirty() ? this.save(null, {
                minor: "auto"
            }).then(function () {
                return u.ajax(n)
            }) : u.ajax(n)
        },
        removedDiscussion: function (e) {
            this.removeMark(e.id)
        },
        stats: function () {
            var e = h(this.get("raw_text")),
                t = e.match(/\w+/g);
            return {
                words: t ? t.length : 0,
                chars: s.lengthCombined(e)
            }
        }
    });
    var p = {};
    e.m.Document.get = function (t, n) {
        var i = p[t];
        return i || (n = n || {}, n.id = t, i = new e.m.Document(n), p[t] = i), i
    }
}(this.tide, tide.m.BBModel, tide.util, tide.logger, tide.unicode, tide.m.Discussions, tide.m.ActivityEvents, tide.m.Collaborator, tide.m.UnreadItems, tide.m.Tags, _, Backbone),
function (e, t) {
    e.v.BBView = Backbone.View.extend({
        render: function (e, t) {
            return t || (t = this.model ? this.model.attributes : {}), e ? this.$el.html(e(t)) : this.template ? this.$el.html(this.template(t)) : void 0
        },
        renderInto: function (e, t, n) {
            return t ? e.html(t(n || this.model.attributes)) : this.template ? e.html(this.template(n || this.model.attributes)) : void 0
        },
        renderArray: function (e, t, n) {
            var i = [];
            n.forEach(function (e) {
                i.push(t(e))
            }), e.html(i.join(""))
        },
        replace: function (e, n, i) {
            var s;
            n ? s = t(n(i || this.model.attributes))[0] : this.template && (s = t(this.template(i || this.model.attributes))[0]), e ? e.replaceWith(s) : (this.$el.replaceWith(s), this.setElement(s))
        },
        append: function (e, t, n) {
            return t ? e.append(t(n || this.model.attributes)) : this.template && e.append(this.template(n || this.model.attributes)), e.children().last()
        },
        prepend: function (e, t, n) {
            return t ? e.prepend(t(n || this.model.attributes)) : this.template && e.prepend(this.template(n || this.model.attributes)), e.children().first()
        }
    })
}(this.tide, jQuery),
function (e, t, n) {
    function i(e) {
        e.data.that.hide()
    }

    function s(e) {
        27 == e.keyCode && e.data.that.hide()
    }
    e.Modal = {
        initialize: function () {
            this.$modal = t("div.modal-overlay").length ? t("div.modal-overlay") : this.append(t("body"), SMT["ui/modal_outer"], {}), t(".bb-overlay-inner").hide()
        },
        events: {
            "click .modal-close": "hide",
            click: "swallowEvent",
            touchend: "swallowEvent"
        },
        show: function () {
            this.$el.length || this.setElement(this.$modal.find("div.bb-modal")), 1 == this.$el.children().length && this.append(this.$el, this.template, this.form_data), n.isNodeInDocument(this.$modal[0]) || t("body").append(this.$modal), this.showHideClasses(!0), this.postRender && this.postRender(), t(document).on("keyup", {
                that: this
            }, s), this.$modal.on("click", {
                that: this
            }, i), this.$modal.on("touchend", {
                that: this
            }, i)
        },
        hide: function () {
            return this.showHideClasses(!1), this.$modal.detach(), t(document).off("keyup", s), this.$modal.off("click"), this.$modal.off("touchend"), !1
        },
        showHideClasses: function (e) {
            t(document.body).toggleClass("bb-overlay-open", e), this.$modal.toggleClass("visible overlay", e).attr("aria-hidden", (!e).toString()), t(".bb-overlay-inner")[e ? "show" : "hide"]()
        },
        swallowEvent: function (e) {
            e.stopPropagation()
        }
    }
}(this.tide, jQuery, tide.util),
function (e, t) {
    tide.v.DocumentCreateModal = tide.v.BBView.extend({
        template: SMT["forms/document_create_modal"],
        form_data: {
            form_id: "new-document",
            form_class: "mod content-outer",
            form_method: "post",
            form_action: "/docs.js",
            authenticity_token: tide.util.getCsrfToken()
        },
        initialize: function () {
            this.model = new tide.m.Document
        },
        events: {
            "click .cancel": "reset",
            "click .reset": "reset",
            "click a.ico-upload": "showDocUpload",
            "click a.ico-close-dark": "hideDocUpload",
            "submit form": "createDoc"
        },
        showDocUpload: function (e) {
            return window.FormData || (window.location.href = window.location.host + "/docs/new"), this.$el.find("#doc-import").show(), t(e.target).hide(), this.$el.find("a.ico-close-dark").show(), !1
        },
        hideDocUpload: function () {
            return this.reset(!0), !1
        },
        createDoc: function () {
            var e = this,
                n = this.form.find("#newdoc-title").val(),
                i = this.form.find("#login-file")[0];
            return this.model.save({
                title: n || "New Document"
            }, {
                success: function (n) {
                    if (i.files.length) {
                        var s = i.files[0];
                        t.ajax({
                            type: "post",
                            url: n.url() + "/upload?filename=" + s.name,
                            data: s,
                            success: function () {
                                window.location.href = "/docs/" + n.id
                            },
                            error: function (t) {
                                e.showError(t.responseJSON)
                            },
                            processData: !1,
                            contentType: s.type || "text/plain"
                        })
                    } else window.location.href = "/docs/" + n.id
                },
                error: function (t) {
                    e.showError(t.responseJSON)
                }
            }), !1
        },
        showError: function (e) {
            var t = this.$el.find("fieldset"),
                n = e ? e.reason : tide.m.messages.genericError;
            t.prepend('<div class="msg msg-block closeable status-error"><p>' + n + "</p></div>")
        },
        reset: function (e) {
            if (e) var t = this.$el.find("#newdoc-title"),
            n = t.val();
            this.$el.find("#doc-import").hide(), this.$el.find("a.ico-close-dark").hide(), this.$el.find("a.ico-upload").show(), this.$el.find("div.status-error").remove(), this.form[0].reset(), e ? t.val(n) : this.form.remove()
        },
        postRender: function () {
            this.form = this.$el.find("form"), this.form.attr("enctype", "multipart/form-data")
        }
    }), Cocktail.mixin(tide.v.DocumentCreateModal, tide.Modal)
}(this, jQuery),
function (e, t) {
    var n = "",
        i = {
            subscribe: function () {
                return {
                    bind: function () {},
                    bind_all: function () {}
                }
            }
        };
    tide.c.websocketBroker = {
        channels: {},
        _pusher: null,
        getPusher: function () {
            if (!this._pusher && window.Pusher) {
                Pusher.channel_auth_endpoint = "/socket/auth", this._pusher = new Pusher(n);
                var e = this;
                this._pusher.connection.bind("connected", function () {
                    e._handleConnected()
                })
            }
            return this._pusher || t.warn("Pusher is missing on this page."), this._pusher || i
        },
        getChannel: function (e, t) {
            return this.channels[e] || t === !1 || (this.channels[e] = this.getPusher().subscribe(e)), this.channels[e]
        },
        bindChannel: function (e, t) {
            this.getChannel(e).bind_all(t)
        },
        bindEvent: function (e, t, n) {
            this.getChannel(e).bind(t, n)
        },
        _handleConnected: function () {
            tide.socketId = this._pusher.connection.socket_id
        }
    }
}(this, tide.logger),
function (e, t) {
    function n(n, i) {
        n();
        var s = e.c.notifications.show({
            type: "success",
            html: 'Your exported document is ready. <a class="export-download" href="' + i.url + '">Download now.</a>'
        });
        t("a.export-download").one("click", function () {
            s()
        })
    }
    e.Export = {
        initialize: function () {
            this.documentId = this.documentId || e.documentInfo.id
        },
        exportDoc: function (i) {
            var s, a = this,
                o = t(i.target).next("input").val(),
                r = (this.form ? this.form.attr("action") : "/api/v1/export/") + this.documentId;
            return t.ajax({
                type: "get",
                url: r,
                data: {
                    format: o
                },
                success: function (t) {
                    t.token && (t.ready ? n(s, t) : (a.connection = e.c.websocketBroker, a.connection.bindChannel("private-dl-" + t.token, function (e, t) {
                        "ready" === e && n(s, t)
                    })))
                },
                error: function (t) {
                    s(), e.c.notifications.show({
                        type: "error",
                        html: t.responseJSON.reason
                    })
                }
            }), this.hide && this.hide(), s = e.c.notifications.show({
                type: "success",
                html: "Your exported document is processing. We’ll have it ready in just a bit!"
            }), !1
        }
    }
}(this.tide, jQuery),
function () {
    tide.v.DocumentExportModal = tide.v.BBView.extend({
        template: SMT["forms/document_export_modal"],
        form_data: {
            form_id: "export-document",
            form_class: "mod content-outer",
            form_method: "post",
            form_action: "/api/v1/export/",
            authenticity_token: tide.util.getCsrfToken()
        },
        initialize: function (e) {
            this.documentId = e.docId
        },
        events: {
            "click label": "exportDoc"
        },
        showError: function (e) {
            var t = this.$el.find("fieldset"),
                n = e ? e.reason : tide.m.messages.genericError;
            t.prepend('<div class="msg msg-block closeable status-error"><p>' + n + "</p></div>")
        },
        reset: function () {
            this.$el.find("div.status-error").remove(), this.form.remove()
        },
        postRender: function () {
            this.form = this.$el.find("form")
        }
    }), Cocktail.mixin(tide.v.DocumentExportModal, tide.Modal, tide.Export)
}(this, jQuery),
function (e, t, n) {
    var s = -1 !== navigator.platform.toUpperCase().indexOf("MAC") ? !0 : !1,
        a = function (e) {
            for (var t = c.registry, n = 0, i = t.length; i > n; n++) {
                var s = t[n];
                s.combination.match(e) && (s.handler.call(s.context, e), s.preventDefault && e.preventDefault())
            }
        }, o = function () {};
    o.prototype = {
        metaKey: !1,
        ctrlKey: !1,
        shiftKey: !1,
        altKey: !1,
        key: null,
        match: function (e) {
            return e.keyCode === this.key && e.metaKey === this.metaKey && e.ctrlKey === this.ctrlKey && e.shiftKey === this.shiftKey && e.altKey === this.altKey
        }
    };
    var r = function (e) {
        for (var t = new o, n = e.split("+"), i = 0, a = n.length; a > i; i++) {
            var r = n[i].toUpperCase();
            switch (r) {
            case "CMD":
                t[s ? "metaKey" : "ctrlKey"] = !0;
                break;
            case "CTRL":
                t[s ? "ctrlKey" : "metaKey"] = !0;
                break;
            case "SHIFT":
                t.shiftKey = !0;
                break;
            case "ALT":
                t.altKey = !0;
                break;
            case "ESC":
                t.key = 27;
                break;
            case "BACKSPACE":
                t.key = 8;
                break;
            default:
                var c = r.charCodeAt(0);
                t.key = c
            }
        }
        return t
    };
    n(document.body).on("keydown", a);
    var c = {
        registry: [],
        on: function (e, t, n, i) {
            var s = r(e); - 1 === this.indexOf(s, t, n) && this.registry.push({
                combination: s,
                handler: t,
                context: n,
                preventDefault: i
            })
        },
        off: function (e, t, n) {
            var s = r(e); - 1 !== this.indexOf(s, t, n) && registry.splice(i, 1)
        },
        indexOf: function (e, t, n) {
            for (var i = 0, s = this.registry.length; s > i; i++) {
                var a = this.registry[i];
                if (a.combination.match(e) && a.handler === t && a.context === n) return i
            }
            return -1
        }
    };
    t.keyManager = c
}(this, tide, jQuery),
function (e, t) {
    tide.v.View.extend("Modal", {
        _visibleClass: "visible overlay",
        _hiddenClass: "",
        events: {
            "click touchend": "hide"
        },
        init: function () {
            this._callback = null, tide.v.View.prototype.init.apply(this, arguments), this._boundCloseHandler = t.proxy(function (e) {
                e.preventDefault(), this.hideAndRemove()
            }, this)
        },
        setContent: function (e, t, n) {
            n = n || "", this.element.setAttribute("data-overlay-type", n), this.$content.empty().append(this.$closeButton), this.append(e), this._prepareContent(t)
        },
        setHtml: function (e, t, n) {
            n = n || "", this.element.setAttribute("data-overlay-type", n), this.$content.html(e).prepend(this.$closeButton), this._prepareContent(t)
        },
        setCallback: function (e) {
            this._callback && this.$content.off("submit", "form", this._bind("_handleSubmit")), this._callback = e, e && this.$content.on("submit", "form", null, this._bind("_handleSubmit"))
        },
        getSubviewContainer: function () {
            return this.$content[0]
        },
        _prepareContent: function (e) {
            this.$content.find(".cancel, .reset, .modal-close").on("click", this._boundCloseHandler), this.setCallback(e), tide.util.paneToggle(this.$content[0]), this.visible && this._makeContentVisible()
        },
        _setVisible: function (e, n, i) {
            if (e && !tide.util.isNodeInDocument(this.element) && (this.appendTo(document.body), this.element.offsetLeft), !e) {
                tide.keyManager.off("esc", this._bind("hideAndRemove")), this.$element.find("form.content-outer").each(function () {
                    this.reset()
                });
                var s = this.$content.find(".tab-open"),
                    a = this.$content.find("[data-pane=optional]");
                a.addClass("a11y"), s.each(function (e, n) {
                    var i = t(n);
                    if (i.text(i.data("txt-original")), i.data("state-alt")) {
                        var s = i.attr("class");
                        i.attr("class", i.data("class-alt")), i.data("class-alt", s), i.data("state-alt", !1)
                    }
                })
            }
            t(document.body).toggleClass("overlay-open", e);
            var o = tide.v.View.prototype._setVisible.call(this, e, n, i);
            return e && (this._makeContentVisible(), tide.keyManager.on("esc", this._bind("hideAndRemove"))), o
        },
        _makeContentVisible: function () {
            this.$content.find("[autofocus]").focus()
        },
        _handleSubmit: function (e) {
            return this._callback ? this._callback(e, this._serializeForm()) : void 0
        },
        _serializeForm: function () {
            var e = {};
            return this.$element.find("input, select, textarea").each(function (t, n) {
                e[n.name] = n.value
            }), e
        },
        _createElement: function () {
            var e = tide.v.View.prototype._createElement.call(this),
                n = document.createElement("div");
            n.className = "overlay-inner", e.appendChild(n);
            var i = document.createElement("div");
            i.className = "modal", this.$content = t(i), n.appendChild(i);
            var s = document.createElement("a");
            return this.$closeButton = t(s).attr("href", "#").addClass("modal-close is-icon ico-close").text("Close").appendTo(i), e
        },
        _setupElement: function () {
            tide.v.View.prototype._setupElement.call(this), this.$content = this.$element.find(".modal"), this.$closeButton = this.$element.find(".modal-close")
        },
        _addEvents: function () {
            tide.v.View.prototype._addEvents.call(this), this.$content.on("click touchend", function (e) {
                e.stopPropagation()
            })
        },
        _removeEvents: function () {
            tide.v.View.prototype._removeEvents.call(this), this.$content.off("click touchend")
        }
    }, {
        CSS_CLASS: "modal-overlay",
        sharedModal: function () {
            return this._sharedModal || (this._sharedModal = new tide.v.Modal), this._sharedModal
        },
        show: function (e, t, n) {
            var i = this.sharedModal();
            i.setContent(e, t, n), i.show()
        },
        showHtml: function (e, t, n) {
            var i = this.sharedModal();
            i.setHtml(e, t, n), i.show()
        },
        showTemplate: function (e, t) {
            var n = this.sharedModal(),
                i = SMT[e];
            n.setHtml(i(t)), n.show()
        },
        showTemplateWithForm: function (e, t, n) {
            var i = this.sharedModal(),
                s = SMT[e];
            i.setHtml(s(t), n), i.show()
        }
    })
}(this, jQuery),
function (e, t) {
    t(function () {
        t(document.documentElement).removeClass("page-loading");
        var e = "Show versions timeline",
            n = "Hide versions timeline";
        setTimeout(function () {
            var e = document.createElement("div");
            e.className = "scrolltest", document.body.appendChild(e);
            var n = e.offsetWidth - e.clientWidth;
            t("html").addClass("sbw-" + n), document.body.removeChild(e)
        }, 10), t("body").on({
            focus: function () {
                t(this).parent().addClass("btn-focused")
            },
            blur: function () {
                t(this).parent().removeClass("btn-focused")
            }
        }, ".btn input"), t(".closeable").on("click", function () {
            return t(this).fadeOut("fast", function () {
                t(this).remove()
            }), !1
        }), window.tide.submitFormWithSelector = function (e) {
            t(e + " input[type=submit]") ? t(e + " input[type=submit]").trigger("click").trigger("ajax:complete") : t(e).submit()
        };
        var i = {}, s = function (e) {
                e = e || document.body, t("[data-overlay]", e).each(function (e, n) {
                    if (!n.hasDataModal) {
                        n.hasDataModal = !0;
                        var s, o, r = n.getAttribute("data-submit-event"),
                            c = (n.href || "").split("#"),
                            l = c[1];
                        if ("new-document" == l) return tide.support.xhr2 && t(n).on("click", function () {
                            return new tide.v.DocumentCreateModal({
                                el: "div.bb-modal"
                            }).show(), !1
                        }), void 0;
                        r && (o = function (e, n) {
                            e.preventDefault(), e.stopPropagation(), tide.v.Modal.sharedModal().hide(), t.publish("v/modal/" + r, [tide.v.Modal.sharedModal(), n])
                        }), c[0] ? (s = document.createElement("div"), t.get(c[0], function (e) {
                            var n = t(e).find("#" + l)[0];
                            d.content.parentNode && tide.v.Modal.sharedModal().setContent(n, o, null), d.content = n
                        })) : s = document.getElementById(l);
                        var d = i[l] = {
                            content: s,
                            publishEvent: o,
                            contentType: n.getAttribute("data-overlay")
                        };
                        t(n).on("click", function (e) {
                            e.preventDefault(), e.stopPropagation(), a(l)
                        })
                    }
                })
            }, a = tide.util.showModal = function (e, t) {
                var n = i[e];
                return n && (tide.v.Modal.show(n.content, n.publishEvent, n.contentType), t && tide.v.Modal.sharedModal().subscribe("visibleChange", function s(e) {
                    e.visible || (tide.v.Modal.sharedModal().unsubscribe("visibleChange", s), t())
                })), !! n
            };
        if (s(), tide.util.paneToggle(), function () {
            if (!tide.support.touch) {
                var e = ' <abbr class="cue" title="Press the {text} and S keys">{cue}</abbr>',
                    n = {
                        "cue-save": {
                            text: {
                                mac: "command",
                                win: "control"
                            },
                            cue: {
                                mac: "⌘S",
                                win: "ctrl+S"
                            }
                        },
                        "cue-save-msg": {
                            text: {
                                mac: "command, shift,",
                                win: "control, shift,"
                            },
                            cue: {
                                mac: "⌘⇧S",
                                win: "ctrl+⇧+S"
                            }
                        }
                    }, i = -1 !== navigator.platform.toUpperCase().indexOf("MAC") ? !0 : !1,
                    s = !1;
                for (var a in n) {
                    var o = t("#" + a);
                    if (o.length) {
                        var r = i ? n[a].text.mac : n[a].text.win,
                            c = i ? n[a].cue.mac : n[a].cue.win,
                            l = e.replace(/\{text\}/g, r).replace(/\{cue\}/g, c);
                        o.append(l), s = !0
                    }
                }
                s && (o.parents(".sub-menu").addClass("has-cues"), i && t("html").addClass("is-mac"))
            }
            t("#cue-save").on("click", function (e) {
                e.preventDefault(), tide.m.document.markRevision()
            })
        }(), t(".show-versions").on("click", function (e) {
            tide.support.touch && t(this).is(".top") || (tide.v.versions.visible ? tide.v.versions.hide() : tide.v.versions.show(), setTimeout(function () {
                t('[data-pane="versions"], .show-versions.collapsible-heading').trigger("collapse").trigger("mouseleave")
            }, 0)), e.preventDefault()
        }), tide.v.versions) {
            var o = function () {
                tide.v.versions.visible ? t(".show-versions").text(n) : t(".show-versions").text(e)
            };
            o(), tide.v.versions.subscribe("visibleChange", o)
        }
        t(".account-menu .top, .doc-config, .tmpl-doc .menu .top").not(".collapsible-heading").collapsible(), t(".people-head a").not(".collapsible-heading").each(function () {
            var e = t(this),
                n = e.attr("href").split("#")[1];
            e.collapsible({
                content: t("#" + n)
            })
        }), t(".default-tab.collapsible-heading").trigger("expand"), t("body").on("collapsePanels", function () {
            var e = t("body"),
                n = "drawer-open",
                i = e.hasClass(n) ? 1 : 0;
            t(".tmpl-doc .collapsible-heading:not( [data-role=drawer], [data-pane=timeline], [role=tab] )").trigger("collapse"), i && e.addClass(n)
        }), t(window).on("resize", tide.util.debounce(function () {
            t("body").trigger("collapsePanels")
        }, 10)), tide.support.touch || t(".collapsible").not(".editor-panel.collapsible-expanded, .editor-drawer, .select-status, [role=tabpanel]").on("mouseenter mouseleave", function (e) {
            var n = t(this),
                i = n.parents(".editor-panel.collapsible-expanded").length,
                s = "mouseenter" === e.type ? "collapsible-collapsed" : "collapsible-expanded",
                a = "mouseenter" === e.type ? "expand" : "collapse";
            n.hasClass(s) && !i && n.find(".collapsible-heading").trigger(a)
        }), t("a[data-pane]").not(".collapsible-heading").each(function () {
            var e = t(this),
                n = "drawer-open";
            e.collapsible({
                event: "click",
                content: t("#" + e.attr("href").split("#")[1] + " .editor-panel-content")
            }).on("expand", function () {
                var e = "none" === t(".nav-versions").css("display") ? 1 : 0;
                tide.c.currentController && tide.c.currentController.hideDiscussions && (tide.c.currentController.hideDiscussions(), tide.c.currentController.hideCollaborators()), tide.v.versions && !e && tide.v.versions.hide(), "drawer" === t(this).data("role") && t("body").addClass(n)
            }).on("collapse", function () {
                t("body").removeClass(n), t(this).blur()
            })
        }), tide.util.tooltips(), t(".doc-list").on("updated", function () {
            tide.util.tooltips()
        });
        var r = [];
        t(document.body).on("top-error", function (e, t, n, i, s) {
            n = n || "error";
            var a = {
                html: t,
                type: n,
                dismissible: !i,
                timeout: null == s ? "success" === n : s
            };
            "error" === n ? r.push(a) : "success" === n && (_.forEach(r, function (e) {
                tide.c.notifications.hide(e)
            }), r = []), tide.c.notifications.show(a)
        }), t(".activity-nav a").on("click", function (e) {
            e.preventDefault()
        }), t(".activity-nav li").on("click", "a[aria-selected=false]", function () {
            var e = t(this);
            t.ajax(e.attr("href"), {
                dataType: "html",
                type: "GET",
                beforeSend: function () {
                    t(".activity-list").append('<div class="tab-loader"></div>'), t("p.more-activity").remove(), t(".activity-nav a").attr("aria-selected", "false").removeClass("active"), e.attr("aria-selected", "true").addClass("active")
                },
                success: function (e) {
                    t(".activity-list").remove(), t("[data-view=all]").append(e)
                }
            })
        }), t("[data-view=all]").on("click", "p a.load-more", function (e) {
            e.preventDefault();
            var n = t(this),
                i = n.parent(),
                s = n.attr("href"),
                a = s.split("#").join(" #"),
                o = t("<div></div>").insertBefore(i);
            o.load(a, function () {
                var e = t(this).find("[data-next]").attr("data-next");
                e ? n.attr("href", e) : n.remove(), t(".doc-activity").trigger("update")
            })
        }), t(".doc-team .lead a.btn").one("click", function () {
            t("#team-list .promote").remove()
        }), t("[data-text-alt]").on("click", function (e) {
            e.preventDefault();
            var n = t(this),
                i = n.text(),
                s = n.attr("class"),
                a = n.attr("data-text-alt"),
                o = n.attr("data-class-alt");
            o && (n.attr("class", o), n.attr("data-class-alt", s)), n.html(a), n.attr("data-text-alt", i)
        }), t("[data-toggle]").on("click", function (e) {
            var n = "display",
                i = t("#" + t(this).attr("href").split("#")[1]);
            i.hasClass(n) ? i.removeClass(n) : i.addClass(n), e.preventDefault()
        }), tide.placeholder = function (e) {
            var n = t(e || document.body);
            n.find("[data-placeholder]").each(function () {
                var e, i, s = t(this),
                    a = s.attr("data-placeholder");
                "label" === a ? (e = n.find("label[for=" + s.attr("id") + "]"), i = e.text()) : i = a, s.attr("placeholder", i), e.length && s.attr("placeholder") && e.addClass("a11y")
            })
        }, tide.placeholder(), t("[data-widget=expanded-comment] textarea").not(".comment-holder textarea").wrap('<div class="comment-holder"></div>').before('<pre aria-hidden="true" class="comment-shim"></pre>').on("focus", function () {
            t(this).addClass("active").parents("fieldset").addClass("display").closest(".comment-shim").height(t(this).height())
        }).on("input focus", function () {
            var e = t(this),
                n = e.prev(".comment-shim")[0];
            n.innerHTML = e[0].value
        }), t(".sect-doc-activity [data-widget=expanded-comment]").parent().on("submit", function (e) {
            e.stopPropagation();
            var n = t(this),
                i = n.find("textarea"),
                s = n.find(".comment-shim"),
                a = i.val();
            if (a.length > 0) {
                var o = tide.util.prettyNewlines(a);
                t.ajax(n.attr("action"), {
                    data: n.serialize(),
                    type: "POST",
                    dataType: "html",
                    beforeSend: function (e) {
                        var i = t(".activity-list");
                        if (0 === i.length) {
                            var i = t('<div class="activity-list" id="activity"></div>');
                            i.appendAfter(t("ul.tablist").parent())
                        }
                        var s = n.find(".by img")[0],
                            a = s.getAttribute("src"),
                            r = s.getAttribute("title"),
                            c = SMT["articles/events/document_comment"],
                            l = c({
                                content: o,
                                gravatar_url: a,
                                user_name: r
                            }),
                            d = t("tbody#todays-activity");
                        if (0 === d.length) {
                            var u = ['<table class="activity-group">', "<caption><time>Today</time></caption>", "<thead>", "<tr>", '<th scope="col">Activity</th>', '<th scope="col">Detail</th>', '<th scope="col">Owner</th>', "</tr>", "</thead>", '<tbody id="todays-activity"></tbody>', "</table>"].join("\n");
                            t(u).prependTo(".activity-list")
                        }
                        var h = t(".activity-list table:first-of-type"),
                            p = t(l);
                        e.temp_row = p.prependTo(h.find("tbody"))
                    },
                    success: function (e, n, a) {
                        var o = t.parseJSON(e),
                            r = o.comment_data,
                            c = o.status_string,
                            l = o.status_class,
                            d = o.status_id,
                            u = SMT["articles/events/document_comment"],
                            h = u(r);
                        if (h = h.replace(/doc-comment/, "doc-comment new-row"), d) {
                            t("div.main-head").removeClass().addClass("main-head " + l), t("div.main-head span.hed-status-string").html(c);
                            var p = SMT["articles/events/changed_status"],
                                f = p({
                                    new_status: c,
                                    gravatar_url: r.gravatar_url,
                                    user_name: r.user_name
                                });
                            t(f).prependTo(".activity-list table:first-of-type tbody")
                        }
                        a.temp_row && (t(a.temp_row).first().replaceWith(h), setTimeout(function () {
                            t(".new-row").removeClass("new-row")
                        }, 500)), i.parents("fieldset").removeClass("display"), i.val("").attr("style", "").blur(), s[0].innerHTML = "", t(".doc-activity").trigger("update")
                    },
                    error: function (e) {
                        e.temp_row && e.temp_row.remove(), t(document.body).trigger("top-error", e.responseText)
                    }
                })
            }
            e.preventDefault()
        })
    })
}(this, jQuery),
function (e, t) {
    tide.v.DeleteAnythingModal = tide.v.BBView.extend({
        template: SMT["forms/delete_form_generic"],
        initialize: function (e) {
            this.form_data = {
                form_id: "delete-anything-form",
                form_class: "mod content-outer",
                form_method: "delete",
                form_action: e.action,
                authenticity_token: tide.util.getCsrfToken(),
                title: "",
                object_type: e.obj_type
            }, this.submitCallback = e.callback, this.deleteCallback = e.delete_cb
        },
        events: {
            "click .cancel": "hide",
            "click .reset": "hide",
            "submit form": "doDelete"
        },
        doDelete: function (e) {
            if (e.preventDefault(), this.deleteCallback) return this.deleteCallback(), void 0;
            var n = this;
            t.ajax({
                type: "DELETE",
                dataType: "text",
                url: e.target.action
            }).done(n.submitCallback).fail(n.showError)
        },
        showError: function (e) {
            var n = t(this.el).find("fieldset"),
                i = e ? e.reason : tide.m.messages.genericError;
            n.prepend('<div class="msg msg-block closeable status-error"><p>' + i + "</p></div>")
        },
        reset: function () {
            t("#delete-anything-form").remove()
        }
    }), Cocktail.mixin(tide.v.DeleteAnythingModal, tide.Modal)
}(this, jQuery),
function (e) {
    e.v.DiscussionCommentView = e.v.BBView.extend({
        template: SMT["discussions/comment"],
        initialize: function () {
            this.listenTo(this.model, "change", this.commentEdited), this.listenTo(this.model, "destroy", this.commentDeleted)
        },
        events: {
            "click .edit-comment": "editMode",
            "click .delete-comment": "deleteComment",
            "click .discuss-btn-cancel-comment": "displayMode",
            "click .discuss-btn-edit-comment": "updateComment"
        },
        editMode: function () {
            return this.replace(null, SMT["discussions/comment_edit"]), !1
        },
        displayMode: function () {
            return this.replace(), !1
        },
        deleteComment: function () {
            var t = this,
                n = 1 == this.model.collection.length,
                i = this.model.get("discussion_id"),
                s = new e.v.DeleteAnythingModal({
                    el: "div.bb-modal",
                    action: this.model.url(),
                    obj_type: n ? "comment and discussion" : "comment",
                    delete_cb: function () {
                        t.model.destroy({
                            success: function () {
                                n && (e.c.currentController.documentDiscussions.get(i).destroy(), e.c.currentController.documentDiscussions.fetch(), e.c.currentController.discussionsController.showActivities()), s.hide()
                            }
                        })
                    }
                });
            return s.show(), !1
        },
        updateComment: function () {
            var e = this.$("#comment-txt").val();
            return this.model.save({
                content: e
            }), !1
        },
        commentEdited: function () {
            this.displayMode()
        },
        commentDeleted: function () {
            this.$el.remove()
        },
        render: function () {
            var t = e.v.BBView.prototype.render.apply(this, arguments);
            return this.$(".comment-menu").collapsible(), t
        }
    })
}(this.tide, jQuery),
function (e, t) {
    "use strict";
    e.m.User = t.extend({
        defaults: {
            full_name: null,
            short_name: null,
            safe_name: null,
            gravatar_url: null,
            gravatar_32: null,
            email: null
        }
    })
}(this.tide, tide.m.BBModel),
function (e, t, n, i) {
    var s = 10;
    if (!tide.currentUser) {
        var a = tide.util.globalData();
        tide.currentUser = new tide.m.User(a && a.currentUser)
    }
    tide.v.TemplateView.extend("Discussion", {
        template: "discussions/discussion",
        _addEvents: function () {
            t(this.submitButton).on("click", this._bind("_submit")), t(this.closeButton).on("click", this._bind("_handleClose")), t(this.openButton).on("click", this._forwardEvent("openDiscussion")), t(this.textarea).on("keyup", this._bind("_keyup")).on("focus", function () {
                t(this).addClass("active").parents("fieldset").addClass("display"), s.$element.addClass("comment-focus")
            }).on("blur", function () {
                this.value || s.$element.removeClass("comment-focus")
            }).on("input focus", function () {
                var e = t(this).parent().find(".comment-shim");
                e.html(this.value)
            });
            var e = this.$element.find(".drawer-title"),
                n = e.find("h1 a"),
                i = e.css("line-height").replace("px", "");
            2 * i > n.height() ? e.find(".excerpt-expand").remove() : e.on("click", ".excerpt-expand", function () {
                return t(this).addClass("excerpt-collapse").removeClass("excerpt-expand"), n.addClass("no-excerpt"), !1
            }).on("click", ".excerpt-collapse", function () {
                return t(this).addClass("excerpt-expand").removeClass("excerpt-collapse"), n.removeClass("no-excerpt"), !1
            }), n.removeClass("no-excerpt");
            var s = this
        },
        _removeEvents: function () {
            t(this.submitButton).off("click"), t(this.closeButton).off("click"), t(this.openButton).off("click"), this.$element.find(".drawer-title").off("click")
        },
        _submit: function (e) {
            e.preventDefault(), this._publish("newComment", this.textarea.value)
        },
        _handleClose: function (e) {
            e.preventDefault(), this._publish("closeDiscussion", this.textarea.value)
        },
        _keyup: function (e) {
            e.preventDefault(), this.updateButtons()
        },
        updateButtons: function () {
            var e = this.textarea && this.textarea.value;
            t(this.closeButton).html(n.get(e ? "closeDiscussionWithComment" : "closeDiscussion"))
        },
        _templateData: function () {
            var e = this._data ? this._data.toJSON() : {};
            return /^\s+$/.test(e.topic_text) && (e.topic_text = " "), e
        },
        _bbDataSync: function () {
            var e = this.textarea && this.textarea.value;
            if (tide.v.TemplateView.prototype._bbDataSync.apply(this, arguments), e !== i && this.textarea) {
                this.textarea.value = e, this.updateButtons();
                var n = t(this.textarea);
                n.triggerHandler("focus"), n.triggerHandler("input"), n.triggerHandler("blur")
            }
        },
        _dataReset: function () {
            tide.v.TemplateView.prototype._dataReset.call(this), this.removeAllChildren(), this._data.comments.forEach(t.proxy(this._dataAdd, this)), this.showUnread(), this.scrollToUnread()
        },
        _dataAdd: function (e) {
            if (e.attributes.cid = e.cid, tide.util.globalData().canHaz.edit_del_discuss) {
                var t = e.attributes.canEdit = tide.currentUser.id == e.get("user_id"),
                    n = e.attributes.canDelete = t || tide.currentUser.id == tide.c.currentController.data.get("owner").id;
                e.attributes.showActions = t || n
            } else e.attributes.canEdit = e.attributes.canDelete = e.attributes.showActions = !1;
            var i = new tide.v.DiscussionCommentView({
                model: e
            });
            i.append(this.$element.find("div.discuss-comments")), i.setElement(this.$element.find("div.discussion-comment").last())
        },
        _dataRemove: function (e) {
            this.$element.find('[data-comment-cid="' + e.cid + '"]').remove()
        },
        setData: function (e) {
            this._data && (this._data.comments.off("add", this._bind("_dataAdd")), this._data.comments.off("remove", this._bind("_dataRemove"))), this._data !== e && this.clearUnread(), tide.v.TemplateView.prototype.setData.call(this, e), this._data.comments.on("add", this._bind("_dataAdd")), this._data.comments.on("remove", this._bind("_dataRemove"))
        },
        setFilterMode: function (e) {
            "closed" == e ? t(document.body).addClass("view-discuss-closed") : t(document.body).removeClass("view-discuss-closed")
        },
        _createElement: function () {
            var e = tide.v.TemplateView.prototype._createElement.call(this);
            return tide.placeholder(e), e
        },
        clearForm: function () {
            var e = this.$element.find("form")[0];
            e && (e.reset(), this.updateButtons(), this.$element.removeClass("comment-focus"))
        },
        showUnread: function () {
            if (this._data) {
                var e = tide.m.Document.get(this._data.document_id).unread,
                    t = e.discussionComments(this._data);
                this.unreadCache = this.unreadCache || {}, _.each(t, function (e) {
                    this.unreadCache[e.get("object_id")] = e, tide.config.clearReadItems !== !1 && e.destroy()
                }, this), this.$element.find(".discussion-comment").removeClass("unread"), this._data.comments.some(function (e) {
                    var t = this.unreadCache[e.id];
                    return t ? (this.$element.find("[data-comment-cid=" + e.cid + "]").addClass("unread"), !0) : void 0
                }, this)
            }
        },
        clearUnread: function () {
            this.unreadCache = {}, this.$element.find(".discussion-comment").removeClass("unread")
        },
        scrollToUnread: function () {
            var e = this.$element.find(".unread")[0];
            if (e) {
                var t = this.$element.find(".discuss-main-comments")[0],
                    n = t.getBoundingClientRect(),
                    i = e.getBoundingClientRect(),
                    a = i.top - n.top;
                t.scrollTop = a - s
            }
        }
    })
}(this, jQuery, tide.m.messages),
function (e, t) {
    tide.v.TemplateView.extend("DiscussionActivity", {
        template: "discussions/activity_list",
        emptyClass: "empty-discussions",
        showHelperClass: "show-helper",
        init: function (e) {
            this._shouldShowHelper = !1, this._boundClickDiscussion = t.proxy(this, "clickedDiscussion"), tide.v.TemplateView.prototype.init.call(this, e)
        },
        showHelper: function () {
            this._shouldShowHelper = !0, this._updateViewClasses()
        },
        hideHelper: function () {
            this._shouldShowHelper = !1, this._updateViewClasses()
        },
        clickedDiscussion: function (e) {
            var n = parseInt(t(e.currentTarget).closest("[data-discussion]").attr("data-discussion"), 10);
            return this._publish("selectDiscussion", n), !1
        },
        addActivity: function (e) {
            this.append(new tide.v.TemplateView({
                template: "discussions/activity",
                data: e
            }))
        },
        _updateViewClasses: function () {
            this.$element.toggleClass(this.emptyClass, !this._data.length), this.$element.toggleClass(this.showHelperClass, !this._data.length || this._shouldShowHelper)
        },
        _addEvents: function () {
            this.$element.on("click", "[data-outlet=discussionTitle]", null, this._boundClickDiscussion), this.$element.find("a.toggle-filter").on("click", this._forwardEvent("toggleFilter"))
        },
        _dataReset: function () {
            this.removeAllChildren(), this._updateViewClasses(), this._data.forEach(this._bind("addActivity")), this.highlightUnread()
        },
        _dataAdd: function (e) {
            this._updateViewClasses(), this.addActivity(e)
        },
        _dataRemove: function (e) {
            this.$element.find('[data-discussion-cid="' + e.cid + '"]').remove()
        },
        setData: function (e) {
            this._data && (this._data.off("add", this._bind("_dataAdd")), this._data.off("remove", this._bind("_dataRemove")), this._document.unread.off("add", this._bind("highlightUnread")), this._document.unread.off("remove", this._bind("highlightUnread"))), tide.v.TemplateView.prototype.setData.call(this, e), this._data.on("add", this._bind("_dataAdd")), this._data.on("remove", this._bind("_dataRemove")), this._document = tide.m.Document.get(this._data.document_id);
            var t = this._document.unread;
            t.on("add", this._bind("highlightUnread")), t.on("remove", this._bind("highlightUnread"))
        },
        highlightUnread: function () {
            if (this._document) {
                var e = this._document.unread;
                this.$element.find(".activity-entry").each(function (n, i) {
                    var s = parseInt(i.getAttribute("data-discussion"), 10),
                        a = e.isDiscussionUnread(s);
                    t(i).toggleClass("unread", a)
                })
            }
        }
    }, {
        CSS_CLASS: "discuss-activity"
    })
}(this, jQuery),
function (e, t) {
    t.extend("LoadingView", {
        template: "ui/loading"
    })
}(this, tide.v.TemplateView),
function (e, t, n) {
    e.doneThat = {
        tasks: [],
        shouldDo: function (e) {
            return this.tasks.indexOf(e) > -1
        },
        done: function (e) {
            var t = this.tasks.indexOf(e);
            t > -1 && (this.tasks.splice(t, 1), this._sendDone(e))
        },
        "do": function (e, t, n) {
            var i = this.shouldDo(e);
            return i && t && t.call(n, e), this.done(e), i
        },
        doFirst: function () {
            for (var e = 0, t = arguments.length; t > e; e++) {
                var n = arguments[e],
                    i = n.task || n;
                if (this.do(i, n.callback, n.context)) return i
            }
        },
        _sendDone: function (t) {
            return n.ajax({
                url: e.API_ROOT + "/did/" + t,
                type: "POST",
                headers: {
                    "X-CSRF-Token": e.util.getCsrfToken(),
                    "X-CLIENT-ID": e.id
                }
            })
        }
    }, n(function () {
        var t = n("#tide-user-todo").html();
        try {
            var i = JSON.parse(t);
            e.doneThat.tasks = e.doneThat.tasks.concat(i)
        } catch (s) {}
    })
}(tide, tide.util, jQuery),
function (e) {
    "use strict";
    e.Router = Backbone.Router.extend({
        routes: {
            "docs/:docId/revisions/diff/:diffId/:revisionId/*state/*discussId": "showDiff",
            "docs/:docId/revisions/:revisionId/*state/*discussId": "showRevision",
            "docs/:docId/*state/*discussId": "showEditor",
            "*state/:discussId": "showDiscussion",
            "*state": "showPageState"
        },
        showPageState: function (t) {
            var n = e.c.currentController;
            if (n) {
                if ("activity" === t && n.showActivity) return n.showActivity();
                if ("discussions" == t || "discussions/" == t && n.showDiscussions) return n.showDiscussions();
                !t && n.hideActivity && (n.hideActivity(), n.hideDiscussions()), !t && n.updateFilterFromUrl && n.updateFilterFromUrl()
            }
        },
        showDiscussion: function (t, n) {
            e.c.currentController.showDiscussions(n)
        },
        showEditor: "external",
        showRevision: "external",
        showDiff: "external",
        navigateTo: function (e, t) {
            var n = this.getPath(e);
            n = this.fillPath(n, t), n = this.addUrlState(n, t), "external" === this[e] ? (0 !== n.indexOf("http") && (n = "/" + n), window.location = n) : this.navigate(n, {
                trigger: !0
            })
        },
        dontNavigateTo: function (e, t) {
            var n = this.getPath(e);
            n = this.fillPath(n, t), n = this.addUrlState(n, t), this.navigate(n, {
                trigger: !1
            })
        },
        getPath: function (e) {
            for (var t in this.routes)
                if (this.routes[t] === e) return t;
            throw new Error("There is no route named '" + e + "'")
        },
        addUrlState: function (e, t) {
            return t = t || {}, t.activity && (e += "activity"), e
        },
        fillPath: function (e, t) {
            return e.split("/").map(function (e) {
                return (":" == e.charAt(0) || "*" == e.charAt(0)) && (e = t[e.substr(1)]), e
            }).join("/")
        }
    });
    var t = [/^\/docs\/\d+\/revisions\/diff\/\d+\/\d+/, /^\/docs\/\d+\/revisions\/\d+/, /^\/docs\/\d+\/(preview|html|outline)/, /^\/docs\/\d+/, /^\/docs\/?$/, /^.+/],
        n = window.location.pathname;
    e.Router.rootUrl = "/";
    for (var i = 0, s = t.length; s > i; i++) {
        var a = n.match(t[i]);
        if (a) {
            e.Router.rootUrl = a[0];
            break
        }
    }
}(this.tide, jQuery, tide.util),
function (e, t, n, i) {
    var s = new tide.Router;
    tide.c.DiscussionsController = tide.Base.extend("DiscussionsController", {
        init: function (e, i) {
            if (this.documentId = e, this.state = "empty", this.showOpen = !0, this.visibleView = null, this.loadingView = new n, !tide.currentUser) {
                var s = tide.util.globalData();
                tide.currentUser = new tide.m.User(s && s.currentUser)
            }
            this._fetchingDiscussions = !0, this._pendingDiscussionActions = [], this._boundCreateDiscussion = t.proxy(this, "createDiscussion"), this._boundCreateComment = t.proxy(this, "_createComment"), this._boundCancelComment = t.proxy(this, "_cancelComment"), this._boundSelectDiscussion = t.proxy(this, "_selectDiscussion"), this._boundCloseDiscussion = t.proxy(this, "_closeDiscussion"), this._boundOpenDiscussion = t.proxy(this, "_openDiscussion"), this._boundDiscussionsUpdated = t.proxy(this, "_discussionsUpdated"), this._boundDiscussionDeleted = t.proxy(this, "_discussionDeleted"), this._boundFilterDiscussion = t.proxy(this, "_filterDiscussions"), this.updateMarkList();
            var a = !tide.documentInfo.diff && 0 === tide.documentInfo.revisionNumber;
            this.view = new tide.v.DiscussionPanel, this.view._setVisible(!1), this.view.setNewDiscussionVisible(a), this.view.controller = this, this.view.subscribe("newDiscussion", this._boundCreateDiscussion), this.view.subscribe("cancelDiscussion", this._boundCancelComment);
            var o = i || new tide.m.Discussions(null, {
                document_id: this.documentId
            });
            o.on("reset", this._boundDiscussionsUpdated), o.on("change", this._boundDiscussionsUpdated), o.on("remove", this._boundDiscussionDeleted), this.discussions = o, this.open_discussions = new tide.m.Discussions(null, {
                document_id: this.documentId
            }), this.closed_discussions = new tide.m.Discussions(null, {
                document_id: this.documentId
            }), o.fetch({
                complete: this._bind("_fetchedDiscussions")
            }), this.activityView = new tide.v.DiscussionActivity, this.activityView.setData(o), this.activityView.subscribe("selectDiscussion", this._boundSelectDiscussion), this.activityView.subscribe("toggleFilter", this._boundFilterDiscussion), this.discussionView = new tide.v.Discussion, this.discussionView.subscribe("newComment", this._boundCreateComment), this.discussionView.subscribe("cancelComment", this._boundCancelComment), this.discussionView.subscribe("closeDiscussion", this._boundCloseDiscussion), this.discussionView.subscribe("openDiscussion", this._boundOpenDiscussion), this.discussionView.controller = this, this.showLoader()
        },
        setVisibleView: function (e) {
            this.view.setContentView(e), this.visibleView = e
        },
        _hideDiscussion: function () {
            this._currentDiscussion && (this.discussionView.clearForm(), t.publish("c/discussion/hideDiscussion", [this, this._currentDiscussion]), this._currentDiscussion = null)
        },
        newDiscussionView: tide.util.lazyProperty("newDiscussionView", function () {
            var e = new tide.v.NewDiscussion;
            return e.subscribe("newComment", this._boundCreateComment), e.controller = this, e
        }),
        showDiscussion: function (e, n) {
            if (e) {
                if ("closed" == e) return this.showOpen = !1, void 0;
                if (this._fetchingDiscussions) return this._pendingDiscussionActions.push({
                    action: this._bind("showDiscussion"),
                    arguments: [e]
                }), void 0;
                if ("object" != typeof e) {
                    var i = this.discussions.get(e);
                    !i && this.closed_discussions && (i = this.closed_discussions.get(e)), e = i
                }
                if (this.state = "discussion", e) {
                    this.showOpen = e.get("active") ? !0 : !1, this._filterDiscussions(), this._currentDiscussion && this._currentDiscussion !== e && this.cancelDiscussion();
                    var a = this,
                        o = function () {
                            a._hideDiscussion();
                            var i = n ? "new" === n : e.isNew() && !e.saving,
                                o = i ? a.newDiscussionView() : a.discussionView;
                            o.setData(e), a.setVisibleView(o), a.view.showNavigation(), a._currentDiscussion = e, i && o.textarea.focus(), t.publish("c/discussion/showDiscussion", [a, e]), a.view.visible && s.dontNavigateTo("showDiscussion", {
                                state: "discussions",
                                discussId: e.id
                            })
                        };
                    e.isNew() ? o() : e.fetch({
                        remove: !1,
                        success: o
                    })
                }
            }
        },
        getDiscussionIndex: function (e) {
            var t = "object" == typeof e ? e.id : e;
            return this._marks.indexOf(t)
        },
        showNextDiscussion: function () {
            this.updateMarkList();
            var e = this.getDiscussionIndex(this._currentDiscussion) + 1;
            e %= this._marks.length, this.showDiscussion(this._marks[e])
        },
        showPreviousDiscussion: function () {
            this.updateMarkList();
            var e = this.getDiscussionIndex(this._currentDiscussion) - 1;
            e = 0 > e ? this._marks.length - 1 : e, this.showDiscussion(this._marks[e])
        },
        showLoader: function () {
            this._hideDiscussion(), this.state = "loading", this.setVisibleView(this.loadingView), this.view.hideNavigation()
        },
        showActivities: function () {
            "discussion" == this.state && this._currentDiscussion && this._currentDiscussion.isNew() && this.cancelDiscussion();
            var e = this._currentDiscussion && this.discussions.contains(this._currentDiscussion) && !this._currentDiscussion.get("active") || !this.showOpen;
            this._hideDiscussion(), this.state = "activities", this.showOpen = !e, this.setVisibleView(this.activityView), this.activityView.setData(this.discussions), this.view.setFilterMode(e ? "closed" : "open"), this.view.hideNavigation(), 0 === tide.documentInfo.revisionNumber && i.do("discussions_tip") && this.activityView.showHelper(), this.view.visible && s.dontNavigateTo("showDiscussion", {
                state: "discussions",
                discussId: e ? "closed" : ""
            })
        },
        resetContent: function () {
            this._hideDiscussion(), this.cancelDiscussion(), this.state = "empty", this.setVisibleView(null)
        },
        createDiscussion: function () {
            this._currentDiscussion && this._cancelComment();
            var e = tide.v.richEditor._getSelection();
            if (e.start !== e.end) {
                var t = tide.m.Document.get(this.documentId),
                    n = t.getMarkAt(e.start, e.end);
                if (n) return this.showDiscussion(n.discussion_id), void 0;
                var i = new tide.m.Discussion({
                    document_id: this.documentId,
                    article_id: this.documentId,
                    topic_text: e.toString()
                }),
                    s = tide.v.richEditor.addMark();
                this.showOpen = !0, this.showDiscussion(i), this.view.setDiscussionButtonMode("cancel"), this._currentMark = s
            }
        },
        cancelDiscussion: function () {
            this._currentDiscussion && this._currentDiscussion.isNew() && (tide.c.currentController.removeSpeculativeMarks(), this._currentMark = null, this._currentDiscussion = null, this._newDiscussionView && this._newDiscussionView.clearForm(), this.view.setDiscussionButtonMode("create"), this.showActivities())
        },
        _createComment: function (e, t, n) {
            var i = this,
                s = i._currentDiscussion,
                a = i._currentMark || tide.v.richEditor.getMark({
                    discussion_id: s.id
                }),
                o = {
                    document_id: s.document_id,
                    content: n,
                    user_name: "You",
                    gravatar_url: tide.currentUser.get("gravatar_32")
                }, r = s.isNew();
            r ? this.discussions.create(s, {
                success: function (e) {
                    e.document_id || (e.document_id = e.article_id), i._currentDiscussion = e, o.discussion_id = i._currentDiscussion.id, i._currentDiscussion.comments.create(o, {
                        error: function (t) {
                            e.comments.remove(t), tide.c.notifications.show({
                                message: tide.m.messages.genericError,
                                timeout: !0,
                                type: "error"
                            })
                        }
                    });
                    var t = i._currentMark || tide.v.richEditor.getMark({
                        discussion_id: i._currentDiscussion.id
                    });
                    t && (t.discussion_id = i._currentDiscussion.id, tide.v.richEditor.markElements({}).attr("data-discussion", i._currentDiscussion.id).addClass("mark-discussion-" + i._currentDiscussion.id).removeAttr("data-speculative").removeClass("mark-discussion-speculative"), tide.v.richEditor._updateMarkData(t), tide.c.currentController.data.addMark({
                        start: t.start,
                        end: t.end,
                        text: t.text,
                        discussion_id: i._currentDiscussion.id
                    }, !(tide.c.bridge && tide.c.bridge.poll))), tide.v.editor.messaging.change(), tide.v.editor.messaging.notableChange(), i.discussions.fetch({
                        remove: !1,
                        complete: function () {
                            i._fetchedDiscussions(), i.showDiscussion(e.id)
                        }
                    })
                },
                error: function () {
                    i.showActivities(), i.discussions.remove(s), tide.v.richEditor.removeMark(a), tide.c.notifications.show({
                        message: tide.m.messages.genericError,
                        timeout: !0,
                        type: "error"
                    })
                }
            }) : (o.discussion_id = s.id, s.comments.create(o, {
                success: function () {
                    tide.v.editor.messaging.change(), tide.v.editor.messaging.notableChange(), i.discussions.fetch({
                        complete: function () {
                            i._sortDiscussions(), i._filterDiscussions()
                        }
                    }), i.updateMarkList()
                },
                error: function (e) {
                    s.comments.remove(e), tide.c.notifications.show({
                        message: tide.m.messages.genericError,
                        timeout: !0,
                        type: "error"
                    })
                }
            })), i.discussions.add(s), i.discussionView.clearForm(), i.view.setDiscussionButtonMode("create"), r && i.showDiscussion(s, "standard")
        },
        _cancelComment: function () {
            this._currentDiscussion.isNew() ? this.cancelDiscussion() : this.discussionView.clearForm()
        },
        _selectDiscussion: function (e, t, n) {
            this.showDiscussion(n)
        },
        _closeDiscussion: function (e, t, n) {
            var i = this,
                s = this._currentDiscussion,
                a = tide.v.richEditor.getMarkForDiscussion(s.id),
                o = function () {
                    s.close(function (e) {
                        e || (i.showOpen = !1, i.open_discussions.remove(s), i.closed_discussions.add(s), i._filterDiscussions(), tide.v.richEditor.removeMark(a), a.className = a.className + " closed active", tide.v.richEditor.addMark(a), tide.v.editor.messaging.change(), tide.v.editor.messaging.notableChange())
                    })
                };
            n ? s.comments.create({
                content: n
            }, {
                success: o
            }) : o()
        },
        _openDiscussion: function () {
            var e = this,
                t = this._currentDiscussion,
                n = tide.v.richEditor.getMarkForDiscussion(t.id);
            this._currentDiscussion.open(function (i) {
                i || (e.showOpen = !0, e.closed_discussions.remove(t), e.open_discussions.add(t), e._filterDiscussions(), tide.v.richEditor.removeMark(n), n.className = n.className.replace("closed", "") + " active", tide.v.richEditor.addMark(n), tide.v.editor.messaging.change(), tide.v.editor.messaging.notableChange())
            })
        },
        updateMarkList: function () {
            var e = !this.showOpen || "discussion" == this.state && this._currentDiscussion && !this._currentDiscussion.get("active");
            this._marks = tide.v.richEditor.getMarks().filter(function (t) {
                var n = t.className && t.className.indexOf("closed") > -1;
                return !!t.discussion_id && (e ? n : !n)
            }).map(function (e) {
                return e.discussion_id
            }), !this._marks.length && this.discussions && this.discussions.forEach(function (e) {
                this._marks.push(e.id)
            }, this)
        },
        _discussionsUpdated: function (e) {
            var t = function (e) {
                var t = e.get("active"),
                    n = tide.v.richEditor.getMark({
                        discussion_id: e.id
                    });
                tide.v.richEditor.markElements(n).toggleClass("closed", !t).attr("data-active", "" + t), n && (n.className = t ? "" : "closed")
            };
            e.models ? e.models.forEach(t) : t(e)
        },
        _discussionDeleted: function (e, t) {
            this.discussions = t, this._sortDiscussions(), this._filterDiscussions(), (this.state = "activities") && this.activityView.setData(this.discussions)
        },
        _filterDiscussions: function (e) {
            e && (e.preventDefault(), this.showOpen = !this.showOpen), this.showOpen ? this.discussions = this.open_discussions : this.closed_discussions.length ? this.discussions = this.closed_discussions : (this.discussions = this.open_discussions, this.showOpen = !0), "discussion" != this.state ? (this.activityView.setData(this.discussions), this.view.setFilterMode(this.showOpen ? "open" : "closed"), this.updateMarkList(), s.dontNavigateTo("showDiscussion", {
                state: "discussions",
                discussId: this.showOpen ? "" : "closed"
            })) : (this.discussionView.setFilterMode(this.showOpen ? "open" : "closed"), this.updateMarkList())
        },
        _fetchedDiscussions: function () {
            !this.showOpen, this._sortDiscussions(), this._fetchingDiscussions = !1, this._discussionsUpdated(this.discussions), this._marks.length || this.updateMarkList(), "discussion" != this.state && this.showActivities(), this._filterDiscussions();
            var e = this._pendingDiscussionActions;
            this._pendingDiscussionActions = [];
            for (var t = 0, n = e.length; n > t; t++) {
                var i = e[t].action || e[t];
                i.apply(this, e[t].arguments || [])
            }
            this.discussions.on("sync", this._discussionsUpdated)
        },
        _sortDiscussions: function () {
            var e = this.discussions.filter(function (e) {
                return e.get("active")
            }),
                t = this.discussions.filter(function (e) {
                    return !e.get("active")
                });
            this.open_discussions.set(e), t.length ? this.closed_discussions.set(t) : this.closed_discussions.reset()
        },
        refocusDiscussion: function () {
            t.publish("c/discussion/showDiscussion", [this, this._currentDiscussion])
        }
    })
}(this, jQuery, tide.v.LoadingView, tide.doneThat),
function (e, t) {
    tide.v.DeleteDocumentModal = tide.v.BBView.extend({
        template: SMT["forms/delete_form"],
        initialize: function (e) {
            this.form_data = {
                form_id: "delete-document-form",
                form_class: "mod content-outer",
                form_method: "delete",
                form_action: "/docs/" + e.id,
                authenticity_token: tide.util.getCsrfToken(),
                title: e.title || ""
            }
        },
        events: {
            "click .cancel": "hide",
            "click .reset": "hide",
            "submit form": "deleteDoc"
        },
        deleteDoc: function () {},
        reset: function () {
            t("#delete-document-form").remove()
        }
    }), Cocktail.mixin(tide.v.DeleteDocumentModal, tide.Modal)
}(this, jQuery),
function (e, t) {
    tide.v.LeaveDocumentModal = tide.v.BBView.extend({
        template: SMT["forms/leave_form"],
        initialize: function (e) {
            this.form_data = {
                form_id: "leave-document-form",
                form_class: "mod content-outer",
                form_method: "delete",
                form_action: "/collaborate/" + e.id + "/leave",
                authenticity_token: tide.util.getCsrfToken(),
                title: e.title || ""
            }
        },
        events: {
            "click .cancel": "hide",
            "click .reset": "hide",
            "submit form": "leaveDoc"
        },
        leaveDoc: function () {},
        reset: function () {
            t("#leave-document-form").remove()
        }
    }), Cocktail.mixin(tide.v.LeaveDocumentModal, tide.Modal)
}(this, jQuery),
function (e, t) {
    tide.v.ArchiveDocumentModal = tide.v.BBView.extend({
        template: SMT["forms/archive_form"],
        initialize: function (e) {
            this.form_data = {
                form_id: "archive-document-form",
                form_class: "mod content-outer",
                form_method: "post",
                form_action: "/docs/" + e.id + "/archive",
                authenticity_token: tide.util.getCsrfToken(),
                title: ""
            }
        },
        events: {
            "click .cancel": "hide",
            "click .reset": "hide",
            "submit form": "archiveDoc"
        },
        archiveDoc: function () {},
        reset: function () {
            t("#archive-document-form").remove()
        }
    }), Cocktail.mixin(tide.v.ArchiveDocumentModal, tide.Modal)
}(this, jQuery),
function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    "use strict";

    function t(n, i) {
        var s = function () {}, a = this,
            o = {
                autoSelectFirst: !1,
                appendTo: "body",
                serviceUrl: null,
                lookup: null,
                onSelect: null,
                width: "auto",
                minChars: 1,
                maxHeight: 300,
                deferRequestBy: 0,
                params: {},
                formatResult: t.formatResult,
                delimiter: null,
                zIndex: 9999,
                type: "GET",
                noCache: !1,
                onSearchStart: s,
                onSearchComplete: s,
                onSearchError: s,
                containerClass: "autocomplete-suggestions",
                tabDisabled: !1,
                dataType: "text",
                currentRequest: null,
                triggerSelectOnValidInput: !0,
                lookupFilter: function (e, t, n) {
                    return -1 !== e.value.toLowerCase().indexOf(n)
                },
                paramName: "query",
                transformResult: function (t) {
                    return "string" == typeof t ? e.parseJSON(t) : t
                }
            };
        a.element = n, a.el = e(n), a.suggestions = [], a.badQueries = [], a.selectedIndex = -1, a.currentValue = a.element.value, a.intervalId = 0, a.cachedResponse = {}, a.onChangeInterval = null, a.onChange = null, a.isLocal = !1, a.suggestionsContainer = null, a.options = e.extend({}, o, i), a.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        }, a.hint = null, a.hintValue = "", a.selection = null, a.initialize(), a.setOptions(i)
    }
    var n = function () {
        return {
            escapeRegExChars: function (e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            createNode: function (e) {
                var t = document.createElement("div");
                return t.className = e, t.style.position = "absolute", t.style.display = "none", t
            }
        }
    }(),
        i = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        };
    t.utils = n, e.Autocomplete = t, t.formatResult = function (e, t) {
        var i = "(" + n.escapeRegExChars(t) + ")";
        return e.value.replace(new RegExp(i, "gi"), "<strong>$1</strong>")
    }, t.prototype = {
        killerFn: null,
        initialize: function () {
            var n, i = this,
                s = "." + i.classes.suggestion,
                a = i.classes.selected,
                o = i.options;
            i.element.setAttribute("autocomplete", "off"), i.killerFn = function (t) {
                0 === e(t.target).closest("." + i.options.containerClass).length && (i.killSuggestions(), i.disableKillerFn())
            }, i.suggestionsContainer = t.utils.createNode(o.containerClass), n = e(i.suggestionsContainer), n.appendTo(o.appendTo), "auto" !== o.width && n.width(o.width), n.on("mouseover.autocomplete", s, function () {
                i.activate(e(this).data("index"))
            }), n.on("mouseout.autocomplete", function () {
                i.selectedIndex = -1, n.children("." + a).removeClass(a)
            }), n.on("click.autocomplete", s, function () {
                i.select(e(this).data("index"))
            }), i.fixPosition(), i.fixPositionCapture = function () {
                i.visible && i.fixPosition()
            }, e(window).on("resize.autocomplete", i.fixPositionCapture), i.el.on("keydown.autocomplete", function (e) {
                i.onKeyPress(e)
            }), i.el.on("keyup.autocomplete", function (e) {
                i.onKeyUp(e)
            }), i.el.on("blur.autocomplete", function () {
                i.onBlur()
            }), i.el.on("focus.autocomplete", function () {
                i.onFocus()
            }), i.el.on("change.autocomplete", function (e) {
                i.onKeyUp(e)
            })
        },
        onFocus: function () {
            var e = this;
            e.fixPosition(), e.options.minChars <= e.el.val().length && e.onValueChange()
        },
        onBlur: function () {
            this.enableKillerFn()
        },
        setOptions: function (t) {
            var n = this,
                i = n.options;
            e.extend(i, t), n.isLocal = e.isArray(i.lookup), n.isLocal && (i.lookup = n.verifySuggestionsFormat(i.lookup)), e(n.suggestionsContainer).css({
                "max-height": i.maxHeight + "px",
                width: i.width + "px",
                "z-index": i.zIndex
            })
        },
        clearCache: function () {
            this.cachedResponse = {}, this.badQueries = []
        },
        clear: function () {
            this.clearCache(), this.currentValue = "", this.suggestions = []
        },
        disable: function () {
            var e = this;
            e.disabled = !0, e.currentRequest && e.currentRequest.abort()
        },
        enable: function () {
            this.disabled = !1
        },
        fixPosition: function () {
            var t, n, i = this;
            "body" === i.options.appendTo && (t = i.el.offset(), n = {
                top: t.top + i.el.outerHeight() + "px",
                left: t.left + "px"
            }, "auto" === i.options.width && (n.width = i.el.outerWidth() - 2 + "px"), e(i.suggestionsContainer).css(n))
        },
        enableKillerFn: function () {
            var t = this;
            e(document).on("click.autocomplete", t.killerFn)
        },
        disableKillerFn: function () {
            var t = this;
            e(document).off("click.autocomplete", t.killerFn)
        },
        killSuggestions: function () {
            var e = this;
            e.stopKillSuggestions(), e.intervalId = window.setInterval(function () {
                e.hide(), e.stopKillSuggestions()
            }, 50)
        },
        stopKillSuggestions: function () {
            window.clearInterval(this.intervalId)
        },
        isCursorAtEnd: function () {
            var e, t = this,
                n = t.el.val().length,
                i = t.element.selectionStart;
            return "number" == typeof i ? i === n : document.selection ? (e = document.selection.createRange(), e.moveStart("character", -n), n === e.text.length) : !0
        },
        onKeyPress: function (e) {
            var t = this;
            if (!t.disabled && !t.visible && e.which === i.DOWN && t.currentValue) return t.suggest(), void 0;
            if (!t.disabled && t.visible) {
                switch (e.which) {
                case i.ESC:
                    t.el.val(t.currentValue), t.hide();
                    break;
                case i.RIGHT:
                    if (t.hint && t.options.onHint && t.isCursorAtEnd()) {
                        t.selectHint();
                        break
                    }
                    return;
                case i.TAB:
                    if (t.hint && t.options.onHint) return t.selectHint(), void 0;
                case i.RETURN:
                    if (-1 === t.selectedIndex) return t.hide(), void 0;
                    if (t.select(t.selectedIndex), e.which === i.TAB && t.options.tabDisabled === !1) return;
                    break;
                case i.UP:
                    t.moveUp();
                    break;
                case i.DOWN:
                    t.moveDown();
                    break;
                default:
                    return
                }
                e.stopImmediatePropagation(), e.preventDefault()
            }
        },
        onKeyUp: function (e) {
            var t = this;
            if (!t.disabled) {
                switch (e.which) {
                case i.UP:
                case i.DOWN:
                    return
                }
                clearInterval(t.onChangeInterval), t.currentValue !== t.el.val() && (t.findBestHint(), t.options.deferRequestBy > 0 ? t.onChangeInterval = setInterval(function () {
                    t.onValueChange()
                }, t.options.deferRequestBy) : t.onValueChange())
            }
        },
        onValueChange: function () {
            var t, n = this,
                i = n.options,
                s = n.el.val(),
                a = n.getQuery(s);
            return n.selection && (n.selection = null, (i.onInvalidateSelection || e.noop).call(n.element)), clearInterval(n.onChangeInterval), n.currentValue = s, n.selectedIndex = -1, i.triggerSelectOnValidInput && (t = n.findSuggestionIndex(a), -1 !== t) ? (n.select(t), void 0) : (a.length < i.minChars ? n.hide() : n.getSuggestions(a), void 0)
        },
        findSuggestionIndex: function (t) {
            var n = this,
                i = -1,
                s = t.toLowerCase();
            return e.each(n.suggestions, function (e, t) {
                return t.value.toLowerCase() === s ? (i = e, !1) : void 0
            }), i
        },
        getQuery: function (t) {
            var n, i = this.options.delimiter;
            return i ? (n = t.split(i), e.trim(n[n.length - 1])) : t
        },
        getSuggestionsLocal: function (t) {
            var n, i = this,
                s = i.options,
                a = t.toLowerCase(),
                o = s.lookupFilter,
                r = parseInt(s.lookupLimit, 10);
            return n = {
                suggestions: e.grep(s.lookup, function (e) {
                    return o(e, t, a)
                })
            }, r && n.suggestions.length > r && (n.suggestions = n.suggestions.slice(0, r)), n
        },
        getSuggestions: function (t) {
            var n, i, s, a = this,
                o = a.options,
                r = o.serviceUrl;
            if (o.params[o.paramName] = t, i = o.ignoreParams ? null : o.params, a.isLocal ? n = a.getSuggestionsLocal(t) : (e.isFunction(r) && (r = r.call(a.element, t)), s = r + "?" + e.param(i || {}), n = a.cachedResponse[s]), n && e.isArray(n.suggestions)) a.suggestions = n.suggestions, a.suggest();
            else if (!a.isBadQuery(t)) {
                if (o.onSearchStart.call(a.element, o.params) === !1) return;
                a.currentRequest && a.currentRequest.abort(), a.currentRequest = e.ajax({
                    url: r,
                    data: i,
                    type: o.type,
                    dataType: o.dataType
                }).done(function (e) {
                    a.currentRequest = null, a.processResponse(e, t, s), o.onSearchComplete.call(a.element, t)
                }).fail(function (e, n, i) {
                    o.onSearchError.call(a.element, t, e, n, i)
                })
            }
        },
        isBadQuery: function (e) {
            for (var t = this.badQueries, n = t.length; n--;)
                if (0 === e.indexOf(t[n])) return !0;
            return !1
        },
        hide: function () {
            var t = this;
            t.visible = !1, t.selectedIndex = -1, e(t.suggestionsContainer).hide(), t.signalHint(null)
        },
        suggest: function () {
            if (0 === this.suggestions.length) return this.hide(), void 0;
            var t, n, i = this,
                s = i.options,
                a = s.formatResult,
                o = i.getQuery(i.currentValue),
                r = i.classes.suggestion,
                c = i.classes.selected,
                l = e(i.suggestionsContainer),
                d = s.beforeRender,
                u = "";
            return s.triggerSelectOnValidInput && (t = i.findSuggestionIndex(o), -1 !== t) ? (i.select(t), void 0) : (e.each(i.suggestions, function (e, t) {
                u += '<div class="' + r + '" data-index="' + e + '">' + a(t, o) + "</div>"
            }), "auto" === s.width && (n = i.el.outerWidth() - 2, l.width(n > 0 ? n : 300)), l.html(u), s.autoSelectFirst && (i.selectedIndex = 0, l.children().first().addClass(c)), e.isFunction(d) && d.call(i.element, l), l.show(), i.visible = !0, i.findBestHint(), void 0)
        },
        findBestHint: function () {
            var t = this,
                n = t.el.val().toLowerCase(),
                i = null;
            n && (e.each(t.suggestions, function (e, t) {
                var s = 0 === t.value.toLowerCase().indexOf(n);
                return s && (i = t), !s
            }), t.signalHint(i))
        },
        signalHint: function (t) {
            var n = "",
                i = this;
            t && (n = i.currentValue + t.value.substr(i.currentValue.length)), i.hintValue !== n && (i.hintValue = n, i.hint = t, (this.options.onHint || e.noop)(n))
        },
        verifySuggestionsFormat: function (t) {
            return t.length && "string" == typeof t[0] ? e.map(t, function (e) {
                return {
                    value: e,
                    data: null
                }
            }) : t
        },
        processResponse: function (e, t, n) {
            var i = this,
                s = i.options,
                a = s.transformResult(e, t);
            a.suggestions = i.verifySuggestionsFormat(a.suggestions), s.noCache || (i.cachedResponse[n] = a, 0 === a.suggestions.length && i.badQueries.push(n)), t === i.getQuery(i.currentValue) && (i.suggestions = a.suggestions, i.suggest())
        },
        activate: function (t) {
            var n, i = this,
                s = i.classes.selected,
                a = e(i.suggestionsContainer),
                o = a.children();
            return a.children("." + s).removeClass(s), i.selectedIndex = t, -1 !== i.selectedIndex && o.length > i.selectedIndex ? (n = o.get(i.selectedIndex), e(n).addClass(s), n) : null
        },
        selectHint: function () {
            var t = this,
                n = e.inArray(t.hint, t.suggestions);
            t.select(n)
        },
        select: function (e) {
            var t = this;
            t.hide(), t.onSelect(e)
        },
        moveUp: function () {
            var t = this;
            if (-1 !== t.selectedIndex) return 0 === t.selectedIndex ? (e(t.suggestionsContainer).children().first().removeClass(t.classes.selected), t.selectedIndex = -1, t.el.val(t.currentValue), t.findBestHint(), void 0) : (t.adjustScroll(t.selectedIndex - 1), void 0)
        },
        moveDown: function () {
            var e = this;
            e.selectedIndex !== e.suggestions.length - 1 && e.adjustScroll(e.selectedIndex + 1)
        },
        adjustScroll: function (t) {
            var n, i, s, a = this,
                o = a.activate(t),
                r = 25;
            o && (n = o.offsetTop, i = e(a.suggestionsContainer).scrollTop(), s = i + a.options.maxHeight - r, i > n ? e(a.suggestionsContainer).scrollTop(n) : n > s && e(a.suggestionsContainer).scrollTop(n - a.options.maxHeight + r), a.el.val(a.getValue(a.suggestions[t].value)), a.signalHint(null))
        },
        onSelect: function (t) {
            var n = this,
                i = n.options.onSelect,
                s = n.suggestions[t];
            n.currentValue = n.getValue(s.value), n.el.val(n.currentValue), n.signalHint(null), n.suggestions = [], n.selection = s, e.isFunction(i) && i.call(n.element, s)
        },
        getValue: function (e) {
            var t, n, i = this,
                s = i.options.delimiter;
            return s ? (t = i.currentValue, n = t.split(s), 1 === n.length ? e : t.substr(0, t.length - n[n.length - 1].length) + e) : e
        },
        dispose: function () {
            var t = this;
            t.el.off(".autocomplete").removeData("autocomplete"), t.disableKillerFn(), e(window).off("resize.autocomplete", t.fixPositionCapture), e(t.suggestionsContainer).remove()
        }
    }, e.fn.autocomplete = function (n, i) {
        var s = "autocomplete";
        return 0 === arguments.length ? this.first().data(s) : this.each(function () {
            var a = e(this),
                o = a.data(s);
            "string" == typeof n ? o && "function" == typeof o[n] && o[n](i) : (o && o.dispose && o.dispose(), o = new t(this, n), a.data(s, o))
        })
    }
}),
function (e, t, n, i, s) {
    var a = 13,
        o = 27,
        r = 8,
        c = 188,
        l = 9,
        d = "tags-clipped",
        u = SMT["articles/document_grid_cell_tag"];
    n.Tagging = {
        events: {
            "click .toggle-tagging": "toggleTagMode",
            "click .cell-tags": "clickTagArea",
            "click .remove-tag": "removeTag",
            "focus .new-tag-input": "newTagFocus",
            "keydown .new-tag-input": "newTagKeydown",
            "input .new-tag-input": "setInputSize",
            "keyup .new-tag-input": "setInputSize"
        },
        initialize: function (i) {
            n.config.tags && (i = i || {}, this.tagMode = !1, this.taggable = this.taggable || this.model, this.allTags = this.allTags || i.allTags || i.appState && i.appState.get("space").tags, this.tagCompletionAnchor = this.tagCompletionAnchor || this.el, this.listenTo(this.taggable.tags, "add", this.renderTags), this.listenTo(this.taggable.tags, "remove", this.renderTags), this.listenTo(this.taggable.tags, "change", this.renderTags), this.listenTo(this.taggable.tags, "sync", this.updateClippedTagsIndicator), this.listenTo(t, "deletedTag", this.deletedTag), this.listenTo(t, "editedTag", this.editedTag), s.transitionEvent && this.$el.on(s.transitionEvent, ".cell-tags", e.proxy(this.transitionTags, this)), this.$newTagMeasure = e("<span class='new-tag-measure' aria-hidden='true'></span>"), this.$(".new-tag-input").val("").before(this.$newTagMeasure), this.updateClippedTagsIndicator())
        },
        setElement: function () {
            this.findTagElements()
        },
        render: function () {
            this.findTagElements(), this.renderTags()
        },
        renderTags: function () {
            if (n.config.tags) {
                var t = this.taggable.tags.map(function (t) {
                    var n = t.toJSON();
                    return n.filter_url = "/docs?tags=" + n.name, e(u(n))
                });
                this.$tagsList.empty().append(t), this.$tagArea.toggleClass("empty", !this.taggable.tags.length)
            }
        },
        findTagElements: function () {
            this.$tagArea = this.$(".cell-tags"), this.$tagsList = this.$tagArea.find("ul"), this.$clippingIndicator = this.$(".tags-clipping-indicator")
        },
        setTagMode: function (e) {
            this.tagMode !== e && (this.$(".toggle-tagging"), this.$el.toggleClass("tagging", e), this.tagMode = e, e || (this.$(".new-tag-input").val("").blur(), this.tagAutocomplete().hide()), s.transitionEvent ? this.transitioningTags = !0 : this.updateClippedTagsIndicator()), e || (this.focusAfterTransition = !1)
        },
        updateClippedTagsIndicator: function () {
            if (n.config.tags) {
                var e = !1;
                if (this.taggable.tags.length > 1) {
                    var t = this.$tagArea[0].offsetHeight,
                        i = this.$tagsList[0].offsetTop + this.$tagsList[0].offsetHeight;
                    e = i > t
                }
                this.$el.toggleClass(d, e)
            }
        },
        clickTagArea: function (e) {
            e.preventDefault(), this.setTagMode(!0), /^(LI|A|INPUT)$/.test(e.target.tagName) || this.focusTagInput()
        },
        toggleTagMode: function () {
            return this.setTagMode(!this.tagMode), this.tagMode && this.focusTagInput(), !1
        },
        removeTag: function (n) {
            n.preventDefault();
            var i = parseInt(e(n.target).closest(".tag").data("tag-id"), 10),
                s = this.taggable.tags.get(i);
            s && (s.destroy(), t.trigger("untaggedDocument", s, this.taggable, this), n.stopPropagation())
        },
        tagAutocomplete: function () {
            var t = this.$(".new-tag-input")[0],
                n = e(t).autocomplete();
            if (!n) {
                var i = this;
                n = e(t).autocomplete({
                    lookup: [],
                    appendTo: this.tagCompletionAnchor,
                    width: "",
                    triggerSelectOnValidInput: !1,
                    onSelect: function () {
                        i.acceptTag()
                    }
                }).autocomplete(), n.fixPosition = function () {
                    var s = t.getBoundingClientRect(),
                        a = i.tagCompletionAnchor.getBoundingClientRect();
                    e(n.suggestionsContainer).css({
                        left: s.left - a.left,
                        top: s.bottom - a.top
                    })
                }, n.enableKillerFn = function () {}
            }
            return n
        },
        acceptTag: function () {
            var n = this.$(".new-tag-input")[0],
                i = e.trim(n.value.replace(",", "")).toLowerCase();
            if (n.value = "", this.setInputSize(), n.focus(), i) {
                if (!this.taggable.tags.findWhere({
                    name: i
                })) var s = this,
                a = this.taggable, o = this.taggable.tags.create({
                    name: i
                }, {
                    success: function () {
                        t.trigger("taggedDocument", o, a, s)
                    }
                })
            } else this.setTagMode(!1)
        },
        newTagKeydown: function (e) {
            if (e.keyCode === a || e.keyCode === c || e.keyCode === l) e.preventDefault(), this.acceptTag();
            else if (e.keyCode !== r || e.target.value) e.keyCode === o && this.setTagMode(!1);
            else {
                var n = this.taggable.tags.last();
                n.destroy(), t.trigger("untaggedDocument", n, this.taggable, this)
            } if (!i.inputEvent) {
                var s = this;
                setTimeout(function () {
                    s.setInputSize()
                }, 20)
            }
        },
        newTagFocus: function (e) {
            var t = this.tagAutocomplete();
            "" === e.target.value && this.allTags && t.setOptions({
                lookup: this.allTags.pluck("name")
            })
        },
        setInputSize: function () {
            var e = this.$(".new-tag-input")[0];
            this.$newTagMeasure.text(e.value);
            var t = Math.min(this.$newTagMeasure[0].offsetWidth, this.$tagArea.width());
            e.style.width = t + "px", this.tagAutocomplete().fixPosition()
        },
        transitionTags: function () {
            this.transitioningTags = !1, this.focusAfterTransition && (this.focusAfterTransition = !1, this.$(".new-tag-input").focus()), this.tagMode || this.updateClippedTagsIndicator()
        },
        focusTagInput: function () {
            this.transitioningTags ? this.focusAfterTransition = !0 : this.$(".new-tag-input").focus()
        },
        deletedTag: function (e) {
            this.taggable.tags.remove(e.id)
        },
        editedTag: function (e, t) {
            var n = this.taggable.tags.findWhere({
                name: t.oldName
            });
            n && n.set(e.toJSON())
        }
    }
}(jQuery, Backbone, this.tide, tide.support, tide.util),
function (e, t) {
    function n(e, n) {
        n = [].slice.call(arguments, 1);
        var i, s;
        return {
            properties: function () {
                return n = n.concat([].slice.call(arguments)), this
            },
            to: function (a, o) {
                return t.transitionEvent ? (i = n.reduce(function (t, n) {
                    return t[n] = getComputedStyle(e)[n], t
                }, {}), e.style[t.transitionProperty] = "none", a.call(o, e), s = n.reduce(function (t, n) {
                    return t[n] = getComputedStyle(e)[n], t
                }, {}), n.forEach(function (t) {
                    e.style[t] = i[t]
                }), e.offsetLeft, e.style[t.transitionProperty] = "", n.forEach(function (t) {
                    e.style[t] = s[t]
                }), e.addEventListener(t.transitionEvent, function r(i) {
                    i.target === e && (e.removeEventListener(t.transitionEvent, r), e.style[t.transitionProperty] = "none", n.forEach(function (t) {
                        e.style[t] = ""
                    }), e.offsetLeft, e.style[t.transitionProperty] = "")
                }), void 0) : (a.call(o, e), void 0)
            }
        }
    }
    return e.transition = n
}(tide, tide.util),
function (e, t, n, i, s, a) {
    e('<div class="nav-back-header"><a href="#" class="is-icon ico-back-arrow back-to-main">back</a></div>'), n.v.DocumentMenu = n.v.BBView.extend({
        template: SMT["navigation/navigation_main"],
        initialize: function () {
            this.taggable = this.doc = this.model.get("doc"), this.allTags = this.model.get("space").tags, this.render(), this.visible = !1, this.$edOuter = e(".ed-outer"), this.updateWordCount(), this.$sub = e('<div class="sub-menu-panel"></div>'), this.$el.append(this.$sub), this.setMainClasses(), this.model.on("change", this.rerender), this.listenTo(this.doc, "change:text", this.updateWordCount), this.listenTo(this.doc, "change:status_id", this.rerender), this.tagCompletionAnchor = this.el.parentNode
        },
        events: {
            "click .back-to-main": "showMain",
            "click .show-cheat-sheet": "showCheatSheet",
            "click .doc-status": "showStatuses",
            "click .new-document": "showNewDocument",
            "click .mobile-export": "showExport",
            "click .mobile-integrations": "showIntegrations",
            "click .export-list label": "exportDoc",
            "click .status-selection-menu li": "changeStatus",
            "click .delete-document": "deleteDocument",
            "click .leave-document": "leaveDocument",
            "click .archive-document": "archiveDocument"
        },
        rerender: function () {
            this.$sub.children().length || (this.model.unify(), this.render(), this.updateWordCount(this.doc), this.$el.append(this.$sub), this.setMainClasses(), this.showMain())
        },
        updateWordCount: function () {
            if (!this.doc.get("raw_text").length) return e("ul.counts").css("visibility", "hidden"), void 0;
            e("ul.counts").css("visibility", "visible");
            var t = this.doc.stats();
            this.$(".word-count").text(t.words), this.$(".char-count").text(t.chars)
        },
        toggleVisible: function () {
            this.visible ? (this.$el.removeClass("open"), this.$edOuter.removeClass("ed-menu-open"), this.visible = !1, this.setTagMode(!1)) : (this.$el.addClass("open"), this.$edOuter.addClass("ed-menu-open"), this.visible = !0)
        },
        setMainClasses: function () {
            var t = this.model.get("view");
            e(".views-list li").each(function () {
                var n = e(this),
                    i = n.find("a").text();
                t == i && n.addClass("selected")
            })
        },
        slideIn: function (e) {
            var t = this;
            e.call(this), n.util.transitionEvent && this.$sub.off(n.util.transitionEvent), setTimeout(function () {
                t.$sub.addClass("open"), t.$el.addClass("submenu-focused").removeClass("menu-focused"), t.$el[0].scrollTop = 0
            }, 1)
        },
        showMain: function (e) {
            e && e.preventDefault();
            var t = this;
            this.$el.addClass("menu-focused").removeClass("submenu-focused"), this.$sub.removeClass("open"), this.updateWordCount(), this.setMainClasses(), n.util.transitionEvent ? this.$sub.off(n.util.transitionEvent).one(n.util.transitionEvent, function () {
                t.$sub.empty(), t.rerender()
            }) : (this.$sub.empty(), this.rerender())
        },
        showCheatSheet: function (e) {
            e.preventDefault(), this.slideIn(function () {
                this.renderInto(this.$sub, SMT["navigation/navigation_cheat_sheet"], {})
            })
        },
        showStatuses: function (e) {
            e.preventDefault(), this.doc.get("permissions").edit && this.slideIn(function () {
                this.renderInto(this.$sub, SMT["navigation/navigation_status_picker"], {
                    status_options: this.model.statusesForDocument()
                })
            })
        },
        showNewDocument: function () {
            return n.support.xhr2 ? (new n.v.DocumentCreateModal({
                el: "div.bb-modal"
            }).show(), !1) : void 0
        },
        showExport: function (e) {
            e.preventDefault(), this.slideIn(function () {
                this.renderInto(this.$sub, SMT["navigation/navigation_mobile_export"], {})
            })
        },
        showIntegrations: function (e) {
            e.preventDefault(), this.slideIn(function () {
                this.renderInto(this.$sub, SMT["navigation/navigation_mobile_integrations"], {})
            })
        },
        changeStatus: function (t) {
            t.preventDefault();
            var n = e(t.target).closest("li").find("input").val();
            n !== this.doc.get("status_id") && (this.doc.save({
                status_id: n
            }, {
                patch: !0
            }), this.showMain())
        },
        deleteDocument: function (e) {
            e.preventDefault();
            var t = new n.v.DeleteDocumentModal({
                el: "div.bb-modal",
                id: this.doc.id,
                title: this.doc.get("title")
            });
            t.form_data.id = this.doc.id, t.form_data.title = this.doc.get("title"), t.show()
        },
        leaveDocument: function (e) {
            e.preventDefault();
            var t = new n.v.LeaveDocumentModal({
                el: "div.bb-modal",
                id: this.doc.id,
                title: this.doc.get("title")
            });
            t.form_data.id = this.doc.id, t.form_data.title = this.doc.get("title"), t.show()
        },
        archiveDocument: function (e) {
            e.preventDefault();
            var t = new n.v.ArchiveDocumentModal({
                el: "div.bb-modal",
                id: this.doc.id,
                title: this.doc.get("title")
            });
            t.form_data.id = this.doc.id, t.form_data.title = this.doc.get("title"), t.form_data.archived = this.doc.get("archived"), t.form_data["unified.doc.archived"] = this.doc.get("archived"), t.show()
        },
        setTagMode: function (e) {
            n.config.tags && this.tagMode !== e && a(this.$tagArea[0]).properties("height").to(function () {
                this.$el.toggleClass("tagging", e)
            }, this)
        }
    }), Cocktail.mixin(n.v.DocumentMenu, n.Export, s)
}(jQuery, _, tide, tide.util, tide.Tagging, tide.transition),
function (e, t, n) {
    "use strict";
    var i = t.extend({
        model: n,
        url: function () {
            return e.API_ROOT + "/article"
        }
    });
    return e.m.Documents = i
}(this.tide, tide.m.BBCollection, tide.m.Document),
function (e, t) {
    function n(t) {
        var n = t.split(/;\s*/g);
        return e.reduce(n, function (e, t) {
            var n = t.split("=");
            return e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]), e
        }, {})
    }

    function i(e, t, n) {
        var i = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        return n && n.secure && (i += "; secure"), i
    }
    var s = {
        get: function () {
            return n(document.cookie)
        },
        set: function (t, n) {
            n && "secure" in n || (n = n || {}, n.secure = "https:" === window.location.protocol), e.each(t, function (e, t) {
                document.cookie = i(t, e, n)
            })
        }
    };
    return t.cookie = s
}(_, this.tide),
function (e, t, n, i, s, a) {
    "use strict";

    function o(e, t) {
        var n = t.indexOf(e);
        return n > -1 ? t.splice(n, 1) : t.push(e), t
    }
    var r = s.extend({
        defaults: {
            direction: "desc",
            order: "updated_at",
            tags: []
        },
        url: function (e) {
            var t = window.location.pathname;
            return t + "?" + this.queryString(e)
        },
        queryString: function (e) {
            return n.createQueryString(this.toJSON({
                filter: e
            }))
        },
        toJSON: function (t) {
            var n = t && t.filter || this.attributes,
                i = {
                    status: n.status || null,
                    mine: n.owner_only || null,
                    sort: n.order
                };
            return e.config.tags && (i.tags = n.tags ? n.tags.join(",") : null), i
        },
        addedFilterUrl: function (e) {
            return e.tag && (e.tags = o(e.tag, this.get("tags").slice()), delete e.tag), this.url(t.extend(this.toJSON(), e))
        },
        tagIsActive: function (e) {
            var t = "string" == typeof e ? e : e.get("name"),
                n = this.get("tags").indexOf(t);
            return n > -1
        },
        toggleTag: function (e) {
            var t = "string" == typeof e ? e : e.get("name"),
                n = o(t, this.get("tags").slice());
            this.set("tags", n)
        },
        matchesDocument: function (e) {
            var n = this.user,
                i = this.get("status");
            if (i && i !== e.get("status_id")) return !1;
            if (n && this.get("owner_only") && e.get("owner").id !== n.id) return !1;
            if ( !! this.get("archived") !== e.get("archived")) return !1;
            var s = t.all(this.get("tags"), function (t) {
                return e.tags.findWhere({
                    name: t
                })
            });
            return s
        },
        sortValue: function (e) {
            switch (this.get("order")) {
            case "title":
                return e.get("title");
            case "created_at":
                return -1 * new Date(e.get("created_at")).getTime();
            default:
                return -1 * new Date(e.get("updated_at")).getTime()
            }
        },
        parseUrl: function () {
            a.debug("Parsing querysting for filters");
            var e = n.queryData(!0),
                t = {};
            "status" in e && (t.status = Number(e.status)), "mine" in e && (t.owner_only = "true" === e.mine), "sort" in e && (t.order = e.sort), "tags" in e && (t.tags = e.tags ? e.tags.split(",") : []), this.set(t)
        },
        saveCookie: function (e) {
            e = e || "dprf", i.set({
                dprf: JSON.stringify(this)
            })
        }
    });
    return e.m.DashboardFilter = r
}(tide, _, tide.util, tide.cookie, tide.m.BBModel, tide.logger),
function (e, t, n, i, s, a, o) {
    "use strict";
    t.m.AppState = n.extend({
        defaults: {
            unified: null,
            user: null,
            doc: null,
            view: "Editor",
            hasWordCount: !0,
            isDocOwner: !1,
            space: {
                documents: null,
                filter: null,
                tags: null,
                statuses: [{
                    downcased: "draft",
                    id: 1,
                    text: "Draft"
                }, {
                    downcased: "reviewing",
                    id: 2,
                    text: "Reviewing"
                }, {
                    downcased: "revising",
                    id: 3,
                    text: "Revising"
                }, {
                    downcased: "copyediting",
                    id: 4,
                    text: "Copyediting"
                }, {
                    downcased: "final",
                    id: 5,
                    text: "Final"
                }]
            },
            revisionsInfo: null
        },
        initialize: function (n, r) {
            var c = t.util.globalData() || {};
            this.set("doc", r ? r.doc : t.m.document), this.set("user", r ? r.user : new t.m.User(c && c.currentUser)), this.set("revisionsInfo", r ? r.revisionsInfo : c && c.revisions);
            var l = this.get("space");
            l.documents = new s, l.filter = new a, l.filter.user = this.get("user");
            var d = c.currentSpace || {};
            l.filter.set(d.filter), d.documents && e.each(d.documents, function (e) {
                l.documents.add(i.get(e.id, e))
            }), t.config.tags && (l.tags = new o(d.tags, {
                comparator: "name"
            }));
            var u = window.location.href;
            u.indexOf("preview") > -1 && this.set("view", "Preview"), u.indexOf("html") > -1 && this.set("view", "HTML"), u.indexOf("diff") > -1 && (this.set("view", "Diff"), this.set("hasWordCount", !1)), this.unify()
        },
        unify: function () {
            if (this.get("doc")) {
                var e = {};
                this.set("isDocOwner", this.get("doc").get("owner").id == this.get("user").get("id"));
                for (var n in this.attributes) "unified" != n && null != this.get(n) && this.get(n).attributes && (e[n] = this.get(n).attributes);
                var i = this.get("revisionsInfo");
                e.revision_path = i && i.revision && 1 !== i.revision.sequence && !i.other ? i.revision_path : "/docs/" + this.get("doc").id;
                for (var s in t.config) "boolean" == typeof t.config[s] && (e["can_haz_" + s] = t.config[s]);
                this.set("unified", e)
            }
        },
        statusesForRender: function (t) {
            return e.map(this.get("space").statuses, function (n) {
                return e.extend({
                    selected: n.id === t
                }, n)
            })
        },
        statusesForDocument: function (e) {
            return e = e || this.get("doc"), this.statusesForRender(e.get("status_id"))
        },
        statusesForFilter: function (e) {
            return e = e || this.get("space").filter, this.statusesForRender(e.get("status"))
        }
    })
}(_, this.tide, tide.m.BBModel, tide.m.Document, tide.m.Documents, tide.m.DashboardFilter, tide.m.Tags),
function (e, t, n, i, s, a) {
    e.v.DocumentPage = a.extend({
        events: {
            "click .ico-hover-hamburger": "toggleMenu",
            click: "closeMenu"
        },
        initialize: function () {
            this._markdownOnboarding = null, s.doFirst({
                task: "markdown_tip",
                callback: n.bind(this.showOnboarding, this)
            }, {
                task: "versions_tip",
                callback: n.bind(this.showOnboarding, this)
            }), this.leftMenu = new e.v.DocumentMenu({
                model: new e.m.AppState,
                el: "div.menu-container"
            }), t(".ico-hover-hamburger").on("click", n.bind(this.toggleMenu, this)), this.model && (this.listenTo(this.model, "change", this.documentChanged), this.listenTo(this.model, "sync", this.documentChanged))
        },
        showOnboarding: function (t) {
            if (this._onboardingType) return !1;
            var n = {
                markdown_tip: "onboarding/markdown",
                versions_tip: "onboarding/versions"
            }[t];
            return this._onboardingType = t, this._onboardingView = new e.v.TemplateView({
                template: n
            }), this._onboardingView.controller = this, this.$el.prepend(this._onboardingView.element), e.v.richEditor.element.blur(), this.updateLayout(), !0
        },
        hideOnboarding: function () {
            var e = this._onboardingView;
            this._onboardingView = null, this._onboardingType = null, e && e.hide(function () {
                e.remove()
            })
        },
        showMarkdownCheatsheet: function () {
            this.hideOnboarding(), e.util.showModal("hints")
        },
        documentChanged: function () {
            var e = this.$(".doc-rename .doc-title")[0] || "",
                t = this.model.get("title");
            t && (e.defaultValue = t, e.value != t && (e.value = t, document.title = "“" + t + "” — Editorially"))
        },
        updateLayout: function () {
            "versions_tip" === this._onboardingType && this.alignTipTo(this._onboardingView.$element, ".versions-menu", ".nav-versions")
        },
        alignTipTo: function (e, n, i) {
            var s = t(n)[0].getBoundingClientRect();
            0 === s.width && i && (s = t(i)[0].getBoundingClientRect());
            var a = e[0].getBoundingClientRect();
            e.find(".onboard-full-page-text").css({
                position: "absolute",
                left: s.width / 2 + s.left - a.left + "px"
            })
        },
        toggleMenu: function (t) {
            t.preventDefault();
            var n = this;
            this.leftMenu.toggleVisible(), this.documentController || (this.documentController = e.c.currentController), setTimeout(function () {
                n.documentController.updateLayout(), e.v.versions.visible && e.v.versions._resize()
            }, 300)
        },
        closeMenu: function () {
            var e = t("div.mobile-list:visible");
            this.leftMenu.visible && e.length && this.leftMenu.toggleVisible()
        }
    })
}(tide, jQuery, _, tide.util, tide.doneThat, tide.v.BBView),
function (e, t) {
    tide.v.TemplateView.extend("ControlBar", {
        template: "articles/control_bar",
        visible: !0,
        is_readonly: !0,
        is_wait: !1,
        is_ack: !1,
        is_approved: !1,
        is_declined: !1,
        _setupElement: function () {
            tide.v.View.prototype._setupElement.call(this);
            var e = this.element;
            this._subviewContainer = t(e).find("[data-subviews]")[0] || e;
            var n = this;
            return t(e).find("[data-outlet]").each(function (e, t) {
                n[t.getAttribute("data-outlet")] = t
            }), t(e).find("[data-action]").each(function (e, i) {
                n._performAction || (n._performAction = t.proxy(n, "performAction")), t(i).on("click", null, {
                    action: i.getAttribute("data-action")
                }, n._performAction)
            }), e
        },
        _dataChange: function () {
            tide.v.TemplateView.prototype._dataChange.call(this), this.is_readonly = this.data.data.is_readonly, this.is_wait = this.data.data.is_wait, this.is_ack = this.data.data.is_ack, this.is_approved = this.data.data.is_approved, this.is_declined = this.data.data.is_declined
        }
    })
}(this, jQuery),
function (e, t) {
    e.OptimisticRender = {
        temp_row: null,
        initialize: function () {
            this.listenTo(this.model, "beforeAdd", this.addingModel), this.listenTo(this.model, "createSucceeded", this.modelAdded), this.listenTo(this.model, "createFailed", this.modelError)
        },
        addingModel: function (e) {
            var t = this.$el.find(this.optimisticContainer);
            this.temp_row = this.prepend(t, this.optimisticTmpl, e.attributes || e)
        },
        modelAdded: function (e) {
            var n = this.$el.find(this.optimisticContainer);
            this.temp_row && (this.temp_row.remove(), this.temp_row = null), this.prepend(n, this.optimisticTmpl, e.attributes).addClass("new-row"), setTimeout(function () {
                t(".new-row").removeClass("new-row")
            }, 500)
        },
        modelError: function () {
            this.temp_row && (this.temp_row.remove(), this.temp_row = null)
        }
    }
}(this.tide, jQuery),
function (e) {
    function t(e) {
        return e.replace(/"([^"]+)"/g, function () {
            return "“" + arguments[1] + "”"
        }).replace(/([a-z\S]+)'([a-z\S]+)/gi, function () {
            return arguments[1] + "’" + arguments[2]
        }).replace(/'([^']+)'/g, function () {
            return "‘" + arguments[1] + "’"
        }).replace(/'/g, "’")
    }
    e.SmartQuotes = {
        initialize: function () {
            this.listenTo(this.model, "beforeAdd", this.addQuotes)
        },
        addQuotes: function (e) {
            this.quotable && this.quotable.forEach(function (n) {
                e.attributes && e.attributes[n] ? e.attributes[n] = t(e.attributes[n]) : e[n] && (e[n] = t(e[n]))
            })
        }
    }
}(this.tide, jQuery),
function (e, t) {
    function n(e, t) {
        e.length && t.length && (e.parents("fieldset").removeClass("display"), e.val("").attr("style", "").blur(), t[0].innerHTML = "")
    }

    function i(t) {
        if (e.config.clearReadItems !== !1) {
            var n = e.m.Document.get(t).unread;
            _.invoke(n.documentActivity(), "destroy")
        }
    }
    e.v.DocumentActivityPanel = e.v.BBView.extend({
        template: SMT["articles/activity_panel"],
        initialize: function () {
            this.listenTo(this.model, "add", this.activityAdded), this.listenTo(this.model, "error", this.activityError), this.listenTo(this.model, "sync", this.activitySync), this.unread = e.m.Document.get(this.model.document_id).unread, this.listenTo(this.unread, "add", this.unreadAdded), e.doneThat.do("activity_tip", this.showOnboarding, this)
        },
        events: {
            "change .status-picker li input": "statusFormChanged",
            "submit form.new-comment": "commentSubmitted",
            'click .onboard-tip [data-action="hideAndRemove"]': "hideOnboarding"
        },
        optimisticContainer: ".drawer-main .sub",
        optimisticTmpl: SMT["articles/activity_entry"],
        quotable: ["additional", "content"],
        statusFormChanged: function (e) {
            var t = e.target,
                n = t.value,
                i = t.parentNode.className.split("-")[1],
                s = this.$el.find(".by img")[0],
                a = {
                    status_id: n,
                    action: "Status changed to <b>" + i.substr(0, 1).toUpperCase() + i.substr(1) + "</b>",
                    ico_class: "ico-activity-status",
                    user_name: s.getAttribute("title"),
                    created_at_human: "just now",
                    gravatar_url: s.getAttribute("src"),
                    document_id: this.model.document_id
                };
            this.model.add(a), this.trigger("statusChanged", n)
        },
        commentSubmitted: function (n) {
            n.preventDefault();
            var i = t(n.target),
                s = i.find("textarea").val();
            if (s.length > 0) {
                var a = i.find(".by img")[0],
                    o = {
                        is_comment: !0,
                        content: s,
                        additional: e.util.prettyNewlines(s),
                        user_name: a.getAttribute("title"),
                        created_at_human: "just now",
                        gravatar_url: a.getAttribute("src"),
                        document_id: this.model.document_id
                    };
                this.model.create(o)
            }
            return !1
        },
        activityAdded: function (e) {
            e.attributes.is_comment && n(this.$el.find("textarea"), this.$el.find(".comment-shim")), t(".doc-activity").trigger("update")
        },
        activityError: function (n, i) {
            var s = i.responseText && i.responseText.indexOf(":") > -1 ? JSON.parse(i.responseText).reason : e.m.messages.genericError;
            t(document.body).trigger("top-error", s)
        },
        activitySync: function (n) {
            if (n === this.model) {
                var i = n.map(function (e) {
                    return e.attributes
                });
                this.renderArray(this.$el.find("div.sub"), SMT["articles/activity_entry"], i), t("div.activity-entry[data-discussion-id]").each(function () {
                    var n = t(this),
                        i = n.attr("data-discussion-id"),
                        s = n.find("p.action cite").wrap('<a class="activity-disc" href="discussions/' + i + '">');
                    s.on("click", function (t) {
                        t.preventDefault(), e.c.currentController.showDiscussions(i)
                    })
                })
            }
        },
        getSpinner: function () {
            return this._spinner || (this._spinner = new e.v.LoadingView), this._spinner
        },
        setVisible: function (e) {
            e !== this.visible && (this.loaded ? e ? (this.styleUnreadItems(), i(this.model.document_id)) : this.$(".unread").removeClass("unread") : (this.getSpinner().appendTo(this.$el), this.loadEvents()), t("body").toggleClass("drawer-open view-activity", e), this.$el.toggleClass("visible", e).toggleClass("hidden", !e).attr("aria-hidden", e ? "false" : "true"), this.visible = e)
        },
        loadEvents: function () {
            if (!this.loading) {
                this.loading = !0;
                var e = this;
                this.model.fetch({
                    success: function (t) {
                        var n = t.models.map(function (e) {
                            return e.attributes
                        });
                        e.loading = !1, e.loaded = !0, e.getSpinner().remove(), e.renderArray(e.$el.find("div.sub"), SMT["articles/activity_entry"], n), e.styleUnreadItems(), e.visible && i(e.model.document_id)
                    }
                })
            }
        },
        unreadAdded: function (e) {
            if ("document_comment" === e.get("type")) {
                var t = e.get("object_id");
                this.$('.discussion-comment[data-object-id="' + t + '"]').addClass("unread"), this.visible && e.destroy()
            }
        },
        styleUnreadItems: function () {
            var n = e.m.Document.get(this.model.document_id).unread;
            this.$(".discussion-comment").each(function (e, i) {
                var s = parseInt(i.getAttribute("data-object-id"), 10),
                    a = n.findWhere({
                        type: "document_comment",
                        object_id: s
                    });
                a && t(i).addClass("unread")
            })
        },
        showOnboarding: function () {
            var n = SMT["onboarding/tip"]({
                onboarding_text: e.m.messages.get("activityOnboard")
            });
            t(n).prependTo(this.$el)
        },
        hideOnboarding: function () {
            var t = this.$(".onboard-tip");
            e.util.transitionEvent ? t.removeClass("visible").addClass("hidden").on(e.util.transitionEvent, function () {
                t.remove()
            }) : t.remove()
        }
    }), Cocktail.mixin(e.v.DocumentActivityPanel, e.OptimisticRender, e.SmartQuotes)
}(this.tide, jQuery);
var DIFF_DELETE = -1,
    DIFF_INSERT = 1,
    DIFF_EQUAL = 0;
diff_match_patch.Diff, diff_match_patch.prototype.diff_main = function (e, t, n, i) {
    "undefined" == typeof i && (i = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout);
    var s = i;
    if (null == e || null == t) throw new Error("Null input. (diff_main)");
    if (e == t) return e ? [
        [DIFF_EQUAL, e]
    ] : [];
    "undefined" == typeof n && (n = !0);
    var a = n,
        o = this.diff_commonPrefix(e, t),
        r = e.substring(0, o);
    e = e.substring(o), t = t.substring(o), o = this.diff_commonSuffix(e, t);
    var c = e.substring(e.length - o);
    e = e.substring(0, e.length - o), t = t.substring(0, t.length - o);
    var l = this.diff_compute_(e, t, a, s);
    return r && l.unshift([DIFF_EQUAL, r]), c && l.push([DIFF_EQUAL, c]), this.diff_cleanupMerge(l), l
}, diff_match_patch.prototype.diff_compute_ = function (e, t, n, i) {
    var s;
    if (!e) return [[DIFF_INSERT, t]];
    if (!t) return [[DIFF_DELETE, e]];
    var a = e.length > t.length ? e : t,
        o = e.length > t.length ? t : e,
        r = a.indexOf(o);
    if (-1 != r) return s = [
        [DIFF_INSERT, a.substring(0, r)],
        [DIFF_EQUAL, o],
        [DIFF_INSERT, a.substring(r + o.length)]
    ], e.length > t.length && (s[0][0] = s[2][0] = DIFF_DELETE), s;
    if (1 == o.length) return [[DIFF_DELETE, e], [DIFF_INSERT, t]];
    var c = this.diff_halfMatch_(e, t);
    if (c) {
        var l = c[0],
            d = c[1],
            u = c[2],
            h = c[3],
            p = c[4],
            f = this.diff_main(l, u, n, i),
            m = this.diff_main(d, h, n, i);
        return f.concat([
            [DIFF_EQUAL, p]
        ], m)
    }
    return n && e.length > 100 && t.length > 100 ? this.diff_lineMode_(e, t, i) : this.diff_bisect_(e, t, i)
}, diff_match_patch.prototype.diff_lineMode_ = function (e, t, n) {
    var i = this.diff_linesToChars_(e, t);
    e = i.chars1, t = i.chars2;
    var s = i.lineArray,
        a = this.diff_main(e, t, !1, n);
    this.diff_charsToLines_(a, s), this.diff_cleanupSemantic(a), a.push([DIFF_EQUAL, ""]);
    for (var o = 0, r = 0, c = 0, l = "", d = ""; o < a.length;) {
        switch (a[o][0]) {
        case DIFF_INSERT:
            c++, d += a[o][1];
            break;
        case DIFF_DELETE:
            r++, l += a[o][1];
            break;
        case DIFF_EQUAL:
            if (r >= 1 && c >= 1) {
                a.splice(o - r - c, r + c), o = o - r - c;
                for (var i = this.diff_main(l, d, !1, n), u = i.length - 1; u >= 0; u--) a.splice(o, 0, i[u]);
                o += i.length
            }
            c = 0, r = 0, l = "", d = ""
        }
        o++
    }
    return a.pop(), a
}, diff_match_patch.prototype.diff_bisect_ = function (e, t, n) {
    for (var i = e.length, s = t.length, a = Math.ceil((i + s) / 2), o = a, r = 2 * a, c = new Array(r), l = new Array(r), d = 0; r > d; d++) c[d] = -1, l[d] = -1;
    c[o + 1] = 0, l[o + 1] = 0;
    for (var u = i - s, h = 0 != u % 2, p = 0, f = 0, m = 0, v = 0, g = 0; a > g && !((new Date).getTime() > n); g++) {
        for (var _ = -g + p; g - f >= _; _ += 2) {
            var b, y = o + _;
            b = _ == -g || _ != g && c[y - 1] < c[y + 1] ? c[y + 1] : c[y - 1] + 1;
            for (var w = b - _; i > b && s > w && e.charAt(b) == t.charAt(w);) b++, w++;
            if (c[y] = b, b > i) f += 2;
            else if (w > s) p += 2;
            else if (h) {
                var x = o + u - _;
                if (x >= 0 && r > x && -1 != l[x]) {
                    var T = i - l[x];
                    if (b >= T) return this.diff_bisectSplit_(e, t, b, w, n)
                }
            }
        }
        for (var C = -g + m; g - v >= C; C += 2) {
            var T, x = o + C;
            T = C == -g || C != g && l[x - 1] < l[x + 1] ? l[x + 1] : l[x - 1] + 1;
            for (var S = T - C; i > T && s > S && e.charAt(i - T - 1) == t.charAt(s - S - 1);) T++, S++;
            if (l[x] = T, T > i) v += 2;
            else if (S > s) m += 2;
            else if (!h) {
                var y = o + u - C;
                if (y >= 0 && r > y && -1 != c[y]) {
                    var b = c[y],
                        w = o + b - y;
                    if (T = i - T, b >= T) return this.diff_bisectSplit_(e, t, b, w, n)
                }
            }
        }
    }
    return [[DIFF_DELETE, e], [DIFF_INSERT, t]]
}, diff_match_patch.prototype.diff_bisectSplit_ = function (e, t, n, i, s) {
    var a = e.substring(0, n),
        o = t.substring(0, i),
        r = e.substring(n),
        c = t.substring(i),
        l = this.diff_main(a, o, !1, s),
        d = this.diff_main(r, c, !1, s);
    return l.concat(d)
}, diff_match_patch.prototype.diff_linesToChars_ = function (e, t) {
    function n(e) {
        for (var t = "", n = 0, a = -1, o = i.length; a < e.length - 1;) {
            a = e.indexOf("\n", n), -1 == a && (a = e.length - 1);
            var r = e.substring(n, a + 1);
            n = a + 1, (s.hasOwnProperty ? s.hasOwnProperty(r) : void 0 !== s[r]) ? t += String.fromCharCode(s[r]) : (t += String.fromCharCode(o), s[r] = o, i[o++] = r)
        }
        return t
    }
    var i = [],
        s = {};
    i[0] = "";
    var a = n(e),
        o = n(t);
    return {
        chars1: a,
        chars2: o,
        lineArray: i
    }
}, diff_match_patch.prototype.diff_charsToLines_ = function (e, t) {
    for (var n = 0; n < e.length; n++) {
        for (var i = e[n][1], s = [], a = 0; a < i.length; a++) s[a] = t[i.charCodeAt(a)];
        e[n][1] = s.join("")
    }
}, diff_match_patch.prototype.diff_commonPrefix = function (e, t) {
    if (!e || !t || e.charAt(0) != t.charAt(0)) return 0;
    for (var n = 0, i = Math.min(e.length, t.length), s = i, a = 0; s > n;) e.substring(a, s) == t.substring(a, s) ? (n = s, a = n) : i = s, s = Math.floor((i - n) / 2 + n);
    return s
}, diff_match_patch.prototype.diff_commonSuffix = function (e, t) {
    if (!e || !t || e.charAt(e.length - 1) != t.charAt(t.length - 1)) return 0;
    for (var n = 0, i = Math.min(e.length, t.length), s = i, a = 0; s > n;) e.substring(e.length - s, e.length - a) == t.substring(t.length - s, t.length - a) ? (n = s, a = n) : i = s, s = Math.floor((i - n) / 2 + n);
    return s
}, diff_match_patch.prototype.diff_commonOverlap_ = function (e, t) {
    var n = e.length,
        i = t.length;
    if (0 == n || 0 == i) return 0;
    n > i ? e = e.substring(n - i) : i > n && (t = t.substring(0, n));
    var s = Math.min(n, i);
    if (e == t) return s;
    for (var a = 0, o = 1;;) {
        var r = e.substring(s - o),
            c = t.indexOf(r);
        if (-1 == c) return a;
        o += c, (0 == c || e.substring(s - o) == t.substring(0, o)) && (a = o, o++)
    }
}, diff_match_patch.prototype.diff_halfMatch_ = function (e, t) {
    function n(e, t, n) {
        for (var i, s, a, r, c = e.substring(n, n + Math.floor(e.length / 4)), l = -1, d = ""; - 1 != (l = t.indexOf(c, l + 1));) {
            var u = o.diff_commonPrefix(e.substring(n), t.substring(l)),
                h = o.diff_commonSuffix(e.substring(0, n), t.substring(0, l));
            d.length < h + u && (d = t.substring(l - h, l) + t.substring(l, l + u), i = e.substring(0, n - h), s = e.substring(n + u), a = t.substring(0, l - h), r = t.substring(l + u))
        }
        return 2 * d.length >= e.length ? [i, s, a, r, d] : null
    }
    if (this.Diff_Timeout <= 0) return null;
    var i = e.length > t.length ? e : t,
        s = e.length > t.length ? t : e;
    if (i.length < 4 || 2 * s.length < i.length) return null;
    var a, o = this,
        r = n(i, s, Math.ceil(i.length / 4)),
        c = n(i, s, Math.ceil(i.length / 2));
    if (!r && !c) return null;
    a = c ? r ? r[4].length > c[4].length ? r : c : c : r;
    var l, d, u, h;
    e.length > t.length ? (l = a[0], d = a[1], u = a[2], h = a[3]) : (u = a[0], h = a[1], l = a[2], d = a[3]);
    var p = a[4];
    return [l, d, u, h, p]
}, diff_match_patch.prototype.diff_cleanupSemantic = function (e) {
    for (var t = !1, n = [], i = 0, s = null, a = 0, o = 0, r = 0, c = 0, l = 0; a < e.length;) e[a][0] == DIFF_EQUAL ? (n[i++] = a, o = c, r = l, c = 0, l = 0, s = e[a][1]) : (e[a][0] == DIFF_INSERT ? c += e[a][1].length : l += e[a][1].length, s && s.length <= Math.max(o, r) && s.length <= Math.max(c, l) && (e.splice(n[i - 1], 0, [DIFF_DELETE, s]), e[n[i - 1] + 1][0] = DIFF_INSERT, i--, i--, a = i > 0 ? n[i - 1] : -1, o = 0, r = 0, c = 0, l = 0, s = null, t = !0)), a++;
    for (t && this.diff_cleanupMerge(e), this.diff_cleanupSemanticLossless(e), a = 1; a < e.length;) {
        if (e[a - 1][0] == DIFF_DELETE && e[a][0] == DIFF_INSERT) {
            var d = e[a - 1][1],
                u = e[a][1],
                h = this.diff_commonOverlap_(d, u),
                p = this.diff_commonOverlap_(u, d);
            h >= p ? (h >= d.length / 2 || h >= u.length / 2) && (e.splice(a, 0, [DIFF_EQUAL, u.substring(0, h)]), e[a - 1][1] = d.substring(0, d.length - h), e[a + 1][1] = u.substring(h), a++) : (p >= d.length / 2 || p >= u.length / 2) && (e.splice(a, 0, [DIFF_EQUAL, d.substring(0, p)]), e[a - 1][0] = DIFF_INSERT, e[a - 1][1] = u.substring(0, u.length - p), e[a + 1][0] = DIFF_DELETE, e[a + 1][1] = d.substring(p), a++), a++
        }
        a++
    }
}, diff_match_patch.prototype.diff_cleanupSemanticLossless = function (e) {
    function t(e, t) {
        if (!e || !t) return 6;
        var n = e.charAt(e.length - 1),
            i = t.charAt(0),
            s = n.match(diff_match_patch.nonAlphaNumericRegex_),
            a = i.match(diff_match_patch.nonAlphaNumericRegex_),
            o = s && n.match(diff_match_patch.whitespaceRegex_),
            r = a && i.match(diff_match_patch.whitespaceRegex_),
            c = o && n.match(diff_match_patch.linebreakRegex_),
            l = r && i.match(diff_match_patch.linebreakRegex_),
            d = c && e.match(diff_match_patch.blanklineEndRegex_),
            u = l && t.match(diff_match_patch.blanklineStartRegex_);
        return d || u ? 5 : c || l ? 4 : s && !o && r ? 3 : o || r ? 2 : s || a ? 1 : 0
    }
    for (var n = 1; n < e.length - 1;) {
        if (e[n - 1][0] == DIFF_EQUAL && e[n + 1][0] == DIFF_EQUAL) {
            var i = e[n - 1][1],
                s = e[n][1],
                a = e[n + 1][1],
                o = this.diff_commonSuffix(i, s);
            if (o) {
                var r = s.substring(s.length - o);
                i = i.substring(0, i.length - o), s = r + s.substring(0, s.length - o), a = r + a
            }
            for (var c = i, l = s, d = a, u = t(i, s) + t(s, a); s.charAt(0) === a.charAt(0);) {
                i += s.charAt(0), s = s.substring(1) + a.charAt(0), a = a.substring(1);
                var h = t(i, s) + t(s, a);
                h >= u && (u = h, c = i, l = s, d = a)
            }
            e[n - 1][1] != c && (c ? e[n - 1][1] = c : (e.splice(n - 1, 1), n--), e[n][1] = l, d ? e[n + 1][1] = d : (e.splice(n + 1, 1), n--))
        }
        n++
    }
}, diff_match_patch.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, diff_match_patch.whitespaceRegex_ = /\s/, diff_match_patch.linebreakRegex_ = /[\r\n]/, diff_match_patch.blanklineEndRegex_ = /\n\r?\n$/, diff_match_patch.blanklineStartRegex_ = /^\r?\n\r?\n/, diff_match_patch.prototype.diff_cleanupEfficiency = function (e) {
    for (var t = !1, n = [], i = 0, s = null, a = 0, o = !1, r = !1, c = !1, l = !1; a < e.length;) e[a][0] == DIFF_EQUAL ? (e[a][1].length < this.Diff_EditCost && (c || l) ? (n[i++] = a, o = c, r = l, s = e[a][1]) : (i = 0, s = null), c = l = !1) : (e[a][0] == DIFF_DELETE ? l = !0 : c = !0, s && (o && r && c && l || s.length < this.Diff_EditCost / 2 && 3 == o + r + c + l) && (e.splice(n[i - 1], 0, [DIFF_DELETE, s]), e[n[i - 1] + 1][0] = DIFF_INSERT, i--, s = null, o && r ? (c = l = !0, i = 0) : (i--, a = i > 0 ? n[i - 1] : -1, c = l = !1), t = !0)), a++;
    t && this.diff_cleanupMerge(e)
}, diff_match_patch.prototype.diff_cleanupMerge = function (e) {
    e.push([DIFF_EQUAL, ""]);
    for (var t, n = 0, i = 0, s = 0, a = "", o = ""; n < e.length;) switch (e[n][0]) {
    case DIFF_INSERT:
        s++, o += e[n][1], n++;
        break;
    case DIFF_DELETE:
        i++, a += e[n][1], n++;
        break;
    case DIFF_EQUAL:
        i + s > 1 ? (0 !== i && 0 !== s && (t = this.diff_commonPrefix(o, a), 0 !== t && (n - i - s > 0 && e[n - i - s - 1][0] == DIFF_EQUAL ? e[n - i - s - 1][1] += o.substring(0, t) : (e.splice(0, 0, [DIFF_EQUAL, o.substring(0, t)]), n++), o = o.substring(t), a = a.substring(t)), t = this.diff_commonSuffix(o, a), 0 !== t && (e[n][1] = o.substring(o.length - t) + e[n][1], o = o.substring(0, o.length - t), a = a.substring(0, a.length - t))), 0 === i ? e.splice(n - s, i + s, [DIFF_INSERT, o]) : 0 === s ? e.splice(n - i, i + s, [DIFF_DELETE, a]) : e.splice(n - i - s, i + s, [DIFF_DELETE, a], [DIFF_INSERT, o]), n = n - i - s + (i ? 1 : 0) + (s ? 1 : 0) + 1) : 0 !== n && e[n - 1][0] == DIFF_EQUAL ? (e[n - 1][1] += e[n][1], e.splice(n, 1)) : n++, s = 0, i = 0, a = "", o = ""
    }
    "" === e[e.length - 1][1] && e.pop();
    var r = !1;
    for (n = 1; n < e.length - 1;) e[n - 1][0] == DIFF_EQUAL && e[n + 1][0] == DIFF_EQUAL && (e[n][1].substring(e[n][1].length - e[n - 1][1].length) == e[n - 1][1] ? (e[n][1] = e[n - 1][1] + e[n][1].substring(0, e[n][1].length - e[n - 1][1].length), e[n + 1][1] = e[n - 1][1] + e[n + 1][1], e.splice(n - 1, 1), r = !0) : e[n][1].substring(0, e[n + 1][1].length) == e[n + 1][1] && (e[n - 1][1] += e[n + 1][1], e[n][1] = e[n][1].substring(e[n + 1][1].length) + e[n + 1][1], e.splice(n + 1, 1), r = !0)), n++;
    r && this.diff_cleanupMerge(e)
}, diff_match_patch.prototype.diff_xIndex = function (e, t) {
    var n, i = 0,
        s = 0,
        a = 0,
        o = 0;
    for (n = 0; n < e.length && (e[n][0] !== DIFF_INSERT && (i += e[n][1].length), e[n][0] !== DIFF_DELETE && (s += e[n][1].length), !(i > t)); n++) a = i, o = s;
    return e.length != n && e[n][0] === DIFF_DELETE ? o : o + (t - a)
}, diff_match_patch.prototype.diff_prettyHtml = function (e) {
    for (var t = [], n = /&/g, i = /</g, s = />/g, a = /\n/g, o = 0; o < e.length; o++) {
        var r = e[o][0],
            c = e[o][1],
            l = c.replace(n, "&amp;").replace(i, "&lt;").replace(s, "&gt;").replace(a, "&para;<br>");
        switch (r) {
        case DIFF_INSERT:
            t[o] = '<ins style="background:#e6ffe6;">' + l + "</ins>";
            break;
        case DIFF_DELETE:
            t[o] = '<del style="background:#ffe6e6;">' + l + "</del>";
            break;
        case DIFF_EQUAL:
            t[o] = "<span>" + l + "</span>"
        }
    }
    return t.join("")
}, diff_match_patch.prototype.diff_text1 = function (e) {
    for (var t = [], n = 0; n < e.length; n++) e[n][0] !== DIFF_INSERT && (t[n] = e[n][1]);
    return t.join("")
}, diff_match_patch.prototype.diff_text2 = function (e) {
    for (var t = [], n = 0; n < e.length; n++) e[n][0] !== DIFF_DELETE && (t[n] = e[n][1]);
    return t.join("")
}, diff_match_patch.prototype.diff_levenshtein = function (e) {
    for (var t = 0, n = 0, i = 0, s = 0; s < e.length; s++) {
        var a = e[s][0],
            o = e[s][1];
        switch (a) {
        case DIFF_INSERT:
            n += o.length;
            break;
        case DIFF_DELETE:
            i += o.length;
            break;
        case DIFF_EQUAL:
            t += Math.max(n, i), n = 0, i = 0
        }
    }
    return t += Math.max(n, i)
}, diff_match_patch.prototype.diff_toDelta = function (e) {
    for (var t = [], n = 0; n < e.length; n++) switch (e[n][0]) {
    case DIFF_INSERT:
        t[n] = "+" + encodeURI(e[n][1]);
        break;
    case DIFF_DELETE:
        t[n] = "-" + e[n][1].length;
        break;
    case DIFF_EQUAL:
        t[n] = "=" + e[n][1].length
    }
    return t.join("	").replace(/%20/g, " ")
}, diff_match_patch.prototype.diff_fromDelta = function (e, t) {
    for (var n = [], i = 0, s = 0, a = t.split(/\t/g), o = 0; o < a.length; o++) {
        var r = a[o].substring(1);
        switch (a[o].charAt(0)) {
        case "+":
            try {
                n[i++] = [DIFF_INSERT, decodeURI(r)]
            } catch (c) {
                throw new Error("Illegal escape in diff_fromDelta: " + r)
            }
            break;
        case "-":
        case "=":
            var l = parseInt(r, 10);
            if (isNaN(l) || 0 > l) throw new Error("Invalid number in diff_fromDelta: " + r);
            var d = e.substring(s, s += l);
            n[i++] = "=" == a[o].charAt(0) ? [DIFF_EQUAL, d] : [DIFF_DELETE, d];
            break;
        default:
            if (a[o]) throw new Error("Invalid diff operation in diff_fromDelta: " + a[o])
        }
    }
    if (s != e.length) throw new Error("Delta length (" + s + ") does not equal source text length (" + e.length + ").");
    return n
}, diff_match_patch.prototype.match_main = function (e, t, n) {
    if (null == e || null == t || null == n) throw new Error("Null input. (match_main)");
    return n = Math.max(0, Math.min(n, e.length)), e == t ? {
        index: 0,
        error: 0
    } : e.length ? e.substring(n, n + t.length) == t ? {
        index: n,
        error: 0
    } : this.match_bitap_(e, t, n) : {
        index: -1
    }
}, diff_match_patch.prototype.match_bitap_ = function (e, t, n) {
    function i(e, i) {
        var s = e / t.length,
            o = Math.abs(n - i);
        return a.Match_Distance ? s + o / a.Match_Distance : o ? 1 : s
    }
    if (t.length > this.Match_MaxBits) throw new Error("Pattern too long for this browser.");
    var s = this.match_alphabet_(t),
        a = this,
        o = this.Match_Threshold,
        r = e.indexOf(t, n); - 1 != r && (o = Math.min(i(0, r), o), r = e.lastIndexOf(t, n + t.length), -1 != r && (o = Math.min(i(0, r), o)));
    var c = 1 << t.length - 1;
    r = -1;
    for (var l, d, u, h = t.length + e.length, p = 0; p < t.length; p++) {
        for (l = 0, d = h; d > l;) i(p, n + d) <= o ? l = d : h = d, d = Math.floor((h - l) / 2 + l);
        h = d;
        var f = Math.max(1, n - d + 1),
            m = Math.min(n + d, e.length) + t.length,
            v = Array(m + 2);
        v[m + 1] = (1 << p) - 1;
        for (var g = m; g >= f; g--) {
            var _ = s[e.charAt(g - 1)];
            if (v[g] = 0 === p ? (1 | v[g + 1] << 1) & _ : (1 | v[g + 1] << 1) & _ | (1 | (u[g + 1] | u[g]) << 1) | u[g + 1], v[g] & c) {
                var b = i(p, g - 1);
                if (o >= b) {
                    if (o = b, r = g - 1, !(r > n)) break;
                    f = Math.max(1, 2 * n - r)
                }
            }
        }
        if (i(p + 1, n) > o) break;
        u = v
    }
    return {
        index: r,
        error: o
    }
}, diff_match_patch.prototype.match_alphabet_ = function (e) {
    for (var t = {}, n = 0; n < e.length; n++) t[e.charAt(n)] = 0;
    for (var n = 0; n < e.length; n++) t[e.charAt(n)] |= 1 << e.length - n - 1;
    return t
}, diff_match_patch.prototype.patch_addContext_ = function (e, t) {
    if (0 != t.length) {
        for (var n = t.substring(e.start2, e.start2 + e.length1), i = 0; t.indexOf(n) != t.lastIndexOf(n) && n.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;) i += this.Patch_Margin, n = t.substring(e.start2 - i, e.start2 + e.length1 + i);
        i += this.Patch_Margin;
        var s = t.substring(e.start2 - i, e.start2);
        s && e.diffs.unshift([DIFF_EQUAL, s]);
        var a = t.substring(e.start2 + e.length1, e.start2 + e.length1 + i);
        a && e.diffs.push([DIFF_EQUAL, a]), e.start1 -= s.length, e.start2 -= s.length, e.length1 += s.length + a.length, e.length2 += s.length + a.length
    }
}, diff_match_patch.prototype.patch_make = function (e, t, n) {
    var i, s;
    if ("string" == typeof e && "string" == typeof t && "undefined" == typeof n) i = e, s = this.diff_main(i, t, !0), s.length > 2 && (this.diff_cleanupSemantic(s), this.diff_cleanupEfficiency(s));
    else if (e && "object" == typeof e && "undefined" == typeof t && "undefined" == typeof n) s = e, i = this.diff_text1(s);
    else if ("string" == typeof e && t && "object" == typeof t && "undefined" == typeof n) i = e, s = t;
    else {
        if ("string" != typeof e || "string" != typeof t || !n || "object" != typeof n) throw new Error("Unknown call format to patch_make.");
        i = e, s = n
    } if (0 === s.length) return [];
    for (var a = [], o = new diff_match_patch.patch_obj, r = 0, c = 0, l = 0, d = i, u = i, h = 0; h < s.length; h++) {
        var p = s[h][0],
            f = s[h][1];
        switch (r || p === DIFF_EQUAL || (o.start1 = c, o.start2 = l), p) {
        case DIFF_INSERT:
            o.diffs[r++] = s[h], o.length2 += f.length, u = u.substring(0, l) + f + u.substring(l);
            break;
        case DIFF_DELETE:
            o.length1 += f.length, o.diffs[r++] = s[h], u = u.substring(0, l) + u.substring(l + f.length);
            break;
        case DIFF_EQUAL:
            f.length <= 2 * this.Patch_Margin && r && s.length != h + 1 ? (o.diffs[r++] = s[h], o.length1 += f.length, o.length2 += f.length) : f.length >= 2 * this.Patch_Margin && r && (this.patch_addContext_(o, d), a.push(o), o = new diff_match_patch.patch_obj, r = 0, d = u, c = l)
        }
        p !== DIFF_INSERT && (c += f.length), p !== DIFF_DELETE && (l += f.length)
    }
    return r && (this.patch_addContext_(o, d), a.push(o)), a
}, diff_match_patch.prototype.patch_deepCopy = function (e) {
    for (var t = [], n = 0; n < e.length; n++) {
        var i = e[n],
            s = new diff_match_patch.patch_obj;
        s.diffs = [];
        for (var a = 0; a < i.diffs.length; a++) s.diffs[a] = i.diffs[a].slice();
        s.start1 = i.start1, s.start2 = i.start2, s.length1 = i.length1, s.length2 = i.length2, t[n] = s
    }
    return t
}, diff_match_patch.prototype.patch_apply = function (e, t) {
    if (0 == e.length) return [t, []];
    e = this.patch_deepCopy(e);
    var n = this.patch_addPadding(e);
    t = n + t + n, this.patch_splitMax(e);
    for (var i = 0, s = [], a = 0; a < e.length; a++) {
        var o, r = e[a].start2 + i,
            c = this.diff_text1(e[a].diffs),
            l = -1;
        if (c.length > this.Match_MaxBits ? (o = this.match_main(t, c.substring(0, this.Match_MaxBits), r), -1 != o && (l = this.match_main(t, c.substring(c.length - this.Match_MaxBits), r + c.length - this.Match_MaxBits), (-1 == l || o >= l) && (o = -1))) : o = this.match_main(t, c, r), -1 == o) s[a] = !1, i -= e[a].length2 - e[a].length1;
        else {
            s[a] = !0, i = o - r;
            var d;
            if (d = -1 == l ? t.substring(o, o + c.length) : t.substring(o, l + this.Match_MaxBits), c == d) t = t.substring(0, o) + this.diff_text2(e[a].diffs) + t.substring(o + c.length);
            else {
                var u = this.diff_main(c, d, !1);
                if (c.length > this.Match_MaxBits && this.diff_levenshtein(u) / c.length > this.Patch_DeleteThreshold) s[a] = !1;
                else {
                    this.diff_cleanupSemanticLossless(u);
                    for (var h, p = 0, f = 0; f < e[a].diffs.length; f++) {
                        var m = e[a].diffs[f];
                        m[0] !== DIFF_EQUAL && (h = this.diff_xIndex(u, p)), m[0] === DIFF_INSERT ? t = t.substring(0, o + h) + m[1] + t.substring(o + h) : m[0] === DIFF_DELETE && (t = t.substring(0, o + h) + t.substring(o + this.diff_xIndex(u, p + m[1].length))), m[0] !== DIFF_DELETE && (p += m[1].length)
                    }
                }
            }
        }
    }
    return t = t.substring(n.length, t.length - n.length), [t, s]
}, diff_match_patch.prototype.patch_addPadding = function (e) {
    for (var t = this.Patch_Margin, n = "", i = 1; t >= i; i++) n += String.fromCharCode(i);
    for (var i = 0; i < e.length; i++) e[i].start1 += t, e[i].start2 += t;
    var s = e[0],
        a = s.diffs;
    if (0 == a.length || a[0][0] != DIFF_EQUAL) a.unshift([DIFF_EQUAL, n]), s.start1 -= t, s.start2 -= t, s.length1 += t, s.length2 += t;
    else if (t > a[0][1].length) {
        var o = t - a[0][1].length;
        a[0][1] = n.substring(a[0][1].length) + a[0][1], s.start1 -= o, s.start2 -= o, s.length1 += o, s.length2 += o
    }
    if (s = e[e.length - 1], a = s.diffs, 0 == a.length || a[a.length - 1][0] != DIFF_EQUAL) a.push([DIFF_EQUAL, n]), s.length1 += t, s.length2 += t;
    else if (t > a[a.length - 1][1].length) {
        var o = t - a[a.length - 1][1].length;
        a[a.length - 1][1] += n.substring(0, o), s.length1 += o, s.length2 += o
    }
    return n
}, diff_match_patch.prototype.patch_splitMax = function (e) {
    for (var t = this.Match_MaxBits, n = 0; n < e.length; n++)
        if (!(e[n].length1 <= t)) {
            var i = e[n];
            e.splice(n--, 1);
            for (var s = i.start1, a = i.start2, o = ""; 0 !== i.diffs.length;) {
                var r = new diff_match_patch.patch_obj,
                    c = !0;
                for (r.start1 = s - o.length, r.start2 = a - o.length, "" !== o && (r.length1 = r.length2 = o.length, r.diffs.push([DIFF_EQUAL, o])); 0 !== i.diffs.length && r.length1 < t - this.Patch_Margin;) {
                    var l = i.diffs[0][0],
                        d = i.diffs[0][1];
                    l === DIFF_INSERT ? (r.length2 += d.length, a += d.length, r.diffs.push(i.diffs.shift()), c = !1) : l === DIFF_DELETE && 1 == r.diffs.length && r.diffs[0][0] == DIFF_EQUAL && d.length > 2 * t ? (r.length1 += d.length, s += d.length, c = !1, r.diffs.push([l, d]), i.diffs.shift()) : (d = d.substring(0, t - r.length1 - this.Patch_Margin), r.length1 += d.length, s += d.length, l === DIFF_EQUAL ? (r.length2 += d.length, a += d.length) : c = !1, r.diffs.push([l, d]), d == i.diffs[0][1] ? i.diffs.shift() : i.diffs[0][1] = i.diffs[0][1].substring(d.length))
                }
                o = this.diff_text2(r.diffs), o = o.substring(o.length - this.Patch_Margin);
                var u = this.diff_text1(i.diffs).substring(0, this.Patch_Margin);
                "" !== u && (r.length1 += u.length, r.length2 += u.length, 0 !== r.diffs.length && r.diffs[r.diffs.length - 1][0] === DIFF_EQUAL ? r.diffs[r.diffs.length - 1][1] += u : r.diffs.push([DIFF_EQUAL, u])), c || e.splice(++n, 0, r)
            }
        }
}, diff_match_patch.prototype.patch_toText = function (e) {
    for (var t = [], n = 0; n < e.length; n++) t[n] = e[n];
    return t.join("")
}, diff_match_patch.prototype.patch_fromText = function (e) {
    var t = [];
    if (!e) return t;
    for (var n = e.split("\n"), i = 0, s = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; i < n.length;) {
        var a = n[i].match(s);
        if (!a) throw new Error("Invalid patch string: " + n[i]);
        var o = new diff_match_patch.patch_obj;
        for (t.push(o), o.start1 = parseInt(a[1], 10), "" === a[2] ? (o.start1--, o.length1 = 1) : "0" == a[2] ? o.length1 = 0 : (o.start1--, o.length1 = parseInt(a[2], 10)), o.start2 = parseInt(a[3], 10), "" === a[4] ? (o.start2--, o.length2 = 1) : "0" == a[4] ? o.length2 = 0 : (o.start2--, o.length2 = parseInt(a[4], 10)), i++; i < n.length;) {
            var r = n[i].charAt(0);
            try {
                var c = decodeURI(n[i].substring(1))
            } catch (l) {
                throw new Error("Illegal escape in patch_fromText: " + c)
            }
            if ("-" == r) o.diffs.push([DIFF_DELETE, c]);
            else if ("+" == r) o.diffs.push([DIFF_INSERT, c]);
            else if (" " == r) o.diffs.push([DIFF_EQUAL, c]);
            else {
                if ("@" == r) break;
                if ("" !== r) throw new Error('Invalid patch mode "' + r + '" in: ' + c)
            }
            i++
        }
    }
    return t
}, diff_match_patch.patch_obj = function () {
    this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0
}, diff_match_patch.patch_obj.prototype.toString = function () {
    var e, t;
    e = 0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1, t = 0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2;
    for (var n, i = ["@@ -" + e + " +" + t + " @@\n"], s = 0; s < this.diffs.length; s++) {
        switch (this.diffs[s][0]) {
        case DIFF_INSERT:
            n = "+";
            break;
        case DIFF_DELETE:
            n = "-";
            break;
        case DIFF_EQUAL:
            n = " "
        }
        i[s + 1] = n + encodeURI(this.diffs[s][1]) + "\n"
    }
    return i.join("").replace(/%20/g, " ")
}, this.diff_match_patch = diff_match_patch, this.DIFF_DELETE = DIFF_DELETE, this.DIFF_INSERT = DIFF_INSERT, this.DIFF_EQUAL = DIFF_EQUAL, _mainDiff = function (e, t) {
    var n = new diff_match_patch,
        i = n.diff_main(e, t);
    return n.Diff_EditCost = 9, n.diff_cleanupEfficiency(i), i
}, _mainMatch = function (e, t, n, i, s) {
    i = i || 2500, s = s || .5;
    var a = new diff_match_patch;
    return a.Match_Distance = i, a.Match_Threshold = s, a.match_main(e, t, n)
},
function (e, t, n, i, s, a) {
    function o(e) {
        return _.extend({
            id: e.id
        }, e.info)
    }
    var r = 32;
    tide.m.LiveDocumentUpdater = tide.Base.extend("LiveDocumentUpdater", {
        init: function (e) {
            this.documentId = e, this.document = t.get(this.documentId), this.onlineUsers = new i(null, {
                model: s
            }), this.connection = tide.c.websocketBroker, this.connection.bindChannel("presence-doc-" + this.documentId, this._bind("_handleChannel"))
        },
        _handleChannel: function (e, t) {
            if (t && t.client_id && t.client_id === tide.id) return a.debug("Skipping pusher: `" + e + "` (matching client_id)"), void 0;
            e = e.split(":").join("_");
            var n = "handle" + tide.util.camelCase("_" + e);
            this[n] ? (a.debug("Handling pusher: `" + e + "`"), this[n](t)) : a.debug("Skipping pusher: `" + e + "` (no handler)")
        },
        handlePusherSubscriptionSucceeded: function (e) {
            var t = [];
            e.each(function (e) {
                t.push(o(e))
            }), this.onlineUsers.set(t)
        },
        handlePusherMemberAdded: function (e) {
            this.onlineUsers.add(o(e))
        },
        handlePusherMemberRemoved: function (e) {
            this.onlineUsers.remove(e.id)
        },
        handleTextUpdated: function () {
            this.document === tide.m.document ? tide.m.document.fetch({
                forceLoad: !0,
                cancelIfDirty: !0
            }) : this.handleRequestMarks()
        },
        handleNewVersion: function (e) {
            var t = tide.m.versions;
            t && t.document_id === this.document.id && t.fetch(), e.user.id !== tide.util.getUserId() && this.document.unread.add({
                article_id: e.article_id,
                object_id: e.id,
                type: "new_version"
            })
        },
        handleCreateDiscussion: function (e) {
            var t = this.document.discussions,
                n = e.id;
            e.discussion_id = n;
            var i = t.get(n);
            if (!i) {
                var s = t.last();
                s && s.get("topic_text") === e.topic_text && (i = s, i.set("id", e.id))
            }
            return i || (e.document_id = this.documentId, e.comment_count = 1, i = new tide.m.Discussion(e), t.add(i)), i
        },
        handleDeleteDiscussion: function (e) {
            this.document.discussions.remove(e.id)
        },
        handleCloseDiscussion: function (e) {
            this._updateDiscussion(e.id)
        },
        handleReopenDiscussion: function (e) {
            this._updateDiscussion(e.id)
        },
        _updateDiscussion: function (e) {
            var t = this.document.discussions.get(e);
            t && t.fetch()
        },
        handleCreateComment: function (e) {
            if (e.discussion.doc_level) return this.document.activity.fetch(), void 0;
            var t = e.discussion.id;
            if (e.discussion_id = t, discussion = this.handleCreateDiscussion(e.discussion)) {
                var n = discussion.comments.last();
                if (!n || n.get("content") !== e.content) {
                    var i = new tide.m.DiscussionComment(e);
                    if (discussion.comments.add(i), tide.config.unreadness) {
                        var s = {
                            article_id: this.document.id,
                            object_id: i.id
                        };
                        discussion.get("doc_level") ? s.type = "document_comment" : (s.type = "discussion_comment", s.discussion_id = discussion.id), this.document.unread.add(s)
                    }
                }
            }
        },
        handleDeleteComment: function (e) {
            var t = this.document.discussions.get(e.discussion_id);
            t && t.comments.remove(e.id)
        },
        handleRequestMarks: function () {
            var e = this;
            $.ajax({
                url: this.document.url("marks"),
                cache: !1,
                success: function (t) {
                    var n = e._updateMarkMetadata(t);
                    e.document.set("marks", n, {
                        clean: !0
                    }), e.document.trigger("sync", e.document, {}, {})
                }
            })
        },
        _updateMarkMetadata: function (e) {
            for (var t = this.document.get("raw_text"), n = this.document.discussions, i = e.length - 1; i > -1; i--) {
                var s = e[i],
                    a = n.get(s.discussion_id);
                a || (a = new tide.m.Discussion({
                    id: s.discussion_id,
                    document_id: this.documentId
                }), n.add(a)), this._placeMark(t, s)
            }
            return e
        },
        _placeMark: function (e, t) {
            if (!e) return t;
            for (var n, i = [t.start, Math.round(t.start + (e.length - t.start) / 2), Math.round(t.start / 2)], s = 0; 3 > s; s++) {
                var a = this._fuzzyMatchText(e, t.text, i[s]);
                if ((!n || a.start.error < n.start.error) && (n = a), 0 === a.start.error) break
            }
            if (-1 === n.start.index) {
                var o = -1;
                t.text.length >= 20 && (o = this._findClosest(e, t.text, t.start)), o > -1 ? (t.start = o, t.end = o + t.text.length) : (t.start = -1, t.end = -1)
            } else t.start = n.start.index, t.end = n.end.index;
            return t
        },
        _fuzzyMatchText: function (e, t, n) {
            var i, s = t.slice(0, r),
                a = _mainMatch(e, s, n);
            if (-1 !== a.index && t.length > r) {
                var o = t.slice(-r),
                    c = n + t.length - r;
                i = _mainMatch(e, o, c), -1 !== i.index && (i.index += r)
            }
            return i && -1 !== i.index || (i = {
                index: a.index + t.length
            }), {
                start: a,
                end: i
            }
        },
        _findClosest: function (e, t, n) {
            var i = e.indexOf(t, n),
                s = e.lastIndexOf(t, n);
            if (-1 !== i && -1 !== s) {
                var a = i - n,
                    o = n - s;
                return o > a ? i : s
            }
            return Math.max(i, s)
        }
    })
}(this, tide.m.Document, tide.m.DocumentComment, tide.m.BBCollection, tide.m.User, tide.logger),
function () {
    tide.flash = {
        key: "editorially::flash",
        supported: "sessionStorage" in window,
        set: function (e, t) {
            if (tide.flash.supported) {
                var n = JSON.stringify({
                    message: e,
                    type: t
                });
                sessionStorage.setItem(tide.flash.key, n)
            }
        },
        show: function () {
            if (tide.flash.supported) {
                var e = tide.flash.getMessage();
                if (e) return tide.v.ui.displayError(e.message, e.type || "success"), !0
            }
            return !1
        },
        getMessage: function () {
            if (tide.flash.supported) try {
                var e = JSON.parse(sessionStorage.getItem(tide.flash.key));
                return sessionStorage.removeItem(tide.flash.key), e
            } catch (t) {}
        }
    }, tide.config.autoFlash && $(function () {
        setTimeout(function () {
            tide.flash.show()
        }, 10)
    })
}(),
function (e, t, n, i, s, a) {
    tide.v.TemplateView.extend("CollaboratorsPanelView", {
        template: "articles/collaborators_panel",
        emptyPastClass: "empty-past-collaborators",
        events: {
            change: "changeRole",
            submit: "handleSubmit",
            expand: "handleTabSwitch"
        },
        init: function () {
            this.reinviteQueue = [], tide.v.TemplateView.prototype.init.apply(this, arguments), s.do("collaborators_tip", this._bind("_onboarding"))
        },
        _setIsLoading: function (e) {
            this.$element.toggleClass("loading", e), e && !this._loadingView || !e && this._loadingView
        },
        _setVisible: function (e, n) {
            return t(document.body).toggleClass("drawer-open view-people", e), tide.v.TemplateView.prototype._setVisible.call(this, e, n)
        },
        _templateModelData: function (e) {
            var t = _.clone(e.attributes);
            return t.active = e.active(), t.is_editor = "editor" === t.role, t.id = t.id || e.cid, t.user_owns_document = i.getUserId() === i.getOwnerId(), t.remove_collaborator_label = "pending" === t.status ? n.get("collaboratorCancel") : n.get("collaboratorDelete", t), t.user || (t.user = {
                email: t.email,
                safe_name: t.email
            }), t
        },
        _templateData: function () {
            if (!this._data) return {};
            var e = this._data.reduce(function (e, t) {
                var n = this._templateModelData(t);
                return "accepted" === n.status ? e.active.push(n) : "pending" === n.status ? e.pending.push(n) : e.past.push(n), e
            }, {
                active: [],
                past: [],
                pending: []
            });
            return {
                user_owns_document: i.getUserId() === i.getOwnerId(),
                has_active_permissions: e.active.length > 0,
                has_past_permissions: e.past.length > 0,
                permissions: e
            }
        },
        _addEvents: function () {
            tide.v.TemplateView.prototype._addEvents.apply(this, arguments);
            var e = this;
            this.$element.find(".people-head a").not(".collapsible-heading").each(function () {
                var n = t(this),
                    i = n.attr("href").split("#")[1];
                n.collapsible({
                    content: e.$element.find("#" + i)
                })
            }), this.$element.find(".default-tab.collapsible-heading").trigger("expand"), this.$element.on("click", "[data-action=edit]", null, this._bind("edit")), this.$element.on("click", "[data-action=reinvite]", null, this._bind("reinvite")), this.$element.on("click", "[data-action=delete]", null, this._bind("delete"))
        },
        setData: function (e) {
            this._data && this._data.off && (this._data.off("add", this._dataAdd, this), this._data.off("remove", this._dataRemove, this)), tide.v.TemplateView.prototype.setData.call(this, e), e.on && (e.on("add", this._dataAdd, this), e.on("remove", this._dataRemove, this))
        },
        _bbDataChange: function (e) {
            e.changed.gravatar_url && this.viewForCollaborator(e).find(".ico-avatar").attr("src", e.get("gravatar_url"))
        },
        _bbDataSync: function () {},
        _dataAdd: function (e) {
            var t = this.renderCollaborator(e),
                n = this.listForModel(e);
            n.length && t.appendTo(n), this.$element.find(".promote").remove(), this.updateViewClasses()
        },
        _dataRemove: function (e) {
            this.viewForCollaborator(e).remove(), this.updateViewClasses()
        },
        _dataReset: function () {
            tide.v.TemplateView.prototype._dataReset.apply(this, arguments), this.updateViewClasses()
        },
        renderCollaborator: function (e) {
            return new tide.v.TemplateView({
                template: "articles/collaborator_view",
                data: this._templateModelData(e)
            })
        },
        listForModel: function (e) {
            switch (e.get("status")) {
            case "accepted":
                return this.currentList();
            case "pending":
                return this.pendingList();
            default:
                return this.pastList()
            }
        },
        currentList: function () {
            return this.$element.find(".team-current")
        },
        pastList: function () {
            return this.$element.find(".collaborators-prior")
        },
        pendingList: function () {
            return this.$element.find(".collaborators-pending")
        },
        viewForCollaborator: function (e) {
            return this.$element.find(".person[data-model-id=" + e.id + "]").add(".person[data-model-id=" + e.cid + "]")
        },
        updateViewClasses: function () {
            var e = this._data && this._data.some(function (e) {
                var t = e.get("status");
                return "accepted" !== t && "pending" !== t
            });
            this.$element.find(".invite-tab").toggleClass(this.emptyPastClass, !e)
        },
        showError: function (e) {
            this._alert || (this._alert = new a, this._alert.hide(), this._alert.appendTo(this.$element.find(".add-new-member"))), this._alert.setData({
                alert: e,
                alert_type: "error"
            }), this._alert.element.offsetLeft, this._alert.show()
        },
        hideError: function () {
            this._alert && this._alert.hide()
        },
        resetForm: function () {
            this.$element.find(".add-new-member")[0].reset()
        },
        edit: function (e) {
            t(e.target).closest(".person").addClass("editing")
        },
        reinvite: function (e) {
            var n = t(e.target).closest(".person"),
                i = n.data("model-id");
            n.find("[name=member-type]:checked").val(), i && (this._publish("reinviteCollaborator", i), this.edit(e), this.reinviteQueue.push(i))
        },
        "delete": function (e) {
            var n = t(e.target).closest(".person").data("model-id");
            n && this._publish("deleteCollaborator", n)
        },
        changeRole: function (e) {
            var n = t(e.target).closest(".person"),
                i = n.data("model-id"),
                s = n.find("[name=member-type]:checked").val();
            i && s && this._publish("changeRole", i, s)
        },
        handleSubmit: function (e) {
            var n = t(e.target);
            n.is(".add-new-member") && (e.preventDefault(), this._publish("inviteCollaborator", {
                email: n.find('[name="add-email"]').val(),
                role: n.find('[name="member-type"]:checked').val()
            }), this.resetForm())
        },
        handleTabSwitch: function (e) {
            var n = t(e.target).hasClass("new-member");
            n || (_.each(this.reinviteQueue, function (e) {
                var t = this._data.get(e);
                this.viewForCollaborator(t).remove(), this.renderCollaborator(t).appendTo(this.pendingList())
            }, this), this.reinviteQueue = [])
        },
        _onboarding: function () {
            var e = new tide.v.TemplateView({
                template: "onboarding/tip",
                data: {
                    onboarding_text: n.get("collaboratorsOnboard")
                }
            });
            this.prepend(e)
        },
        _recreate: function () {
            var e = this.$element.find(".onboard-tip").detach();
            tide.v.TemplateView.prototype._recreate.call(this), this.$element.prepend(e)
        }
    }, {
        CSS_CLASS: "editor-drawer people-pane"
    })
}(this, jQuery, tide.m.messages, tide.util, tide.doneThat, tide.v.Alert),
function (e, t, n, i) {
    tide.c.CollaboratorsController = tide.Base.extend("CollaboratorsController", {
        init: function (e) {
            this.data = e, this.view = new n, this.view.controller = this, this.view.setData(e.collaborators), this._showLoader(), e.collaborators.fetch().then(this._bind("fetchedCollaborators"), this._bind("failedCollaborators")), this.view.subscribe("inviteCollaborator", this._bind("handleInviteCollaborator")), this.view.subscribe("reinviteCollaborator", this._bind("handleReinviteCollaborator")), this.view.subscribe("deleteCollaborator", this._bind("handleDeleteCollaborator")), this.view.subscribe("changeRole", this._bind("handleChangeRole"))
        },
        fetchedCollaborators: function () {
            this._hideLoader()
        },
        failedCollaborators: function () {
            this._hideLoader()
        },
        _showLoader: function () {
            this.loadingView || (this.loadingView = new i), this.view.$element.addClass("loading"), this.view.append(this.loadingView)
        },
        _hideLoader: function () {
            this.loadingView && (this.view.$element.removeClass("loading"), this.loadingView.remove())
        },
        handleInviteCollaborator: function (e, t, n) {
            var i = n.email.toLowerCase(),
                s = this.data.collaborators.find(function (e) {
                    return e.get("email").toLowerCase() === i
                });
            if (s) return s.active() || (s.reinvite(), this.data.collaborators.remove(s), this.data.collaborators.add(s)), this.view.hideError();
            var a = new this.data.collaborators.model(n);
            this.data.collaborators.add(a);
            var o = this;
            a.save().then(function () {
                o.view.hideError()
            }, function (e) {
                e.responseJSON && o.view.showError(e.responseJSON.reason), o.data.collaborators.remove(a)
            })
        },
        handleReinviteCollaborator: function (e, t, n) {
            var i = this.data.collaborators.get(n);
            i && i.reinvite()
        },
        handleDeleteCollaborator: function (e, t, n) {
            var i = this.data.collaborators.get(n);
            i && i.destroy()
        },
        handleChangeRole: function (e, t, n, i) {
            var s = this.data.collaborators.get(n);
            s && (s.set("role", i), s.save())
        }
    })
}(this, jQuery, tide.v.CollaboratorsPanelView, tide.v.LoadingView),
function (e, t, n, i, s, a, o) {
    var r = 16e3,
        c = r;
    e.c.ControlManager = t.extend({
        init: function (e, t, s) {
            this.document = e, this.controlBar = t, this.controlBar.controller = this, this.inControl = s, this.state = s ? "editing" : "reading", this._isControllingUserActive = !1, this.userId = n.getUserId();
            var a = "presence-doc-" + this.document.id;
            i.bindEvent(a, "transfer", this._bind("handleTransfer")), i.bindEvent(a, "transfer-request", this._bind("handleTransferRequest")), i.bindEvent(a, "editor_became_active", this._bind("handleEditorBecameActive"))
        },
        setState: function (e, t) {
            if (this.state !== e) {
                this.state = e;
                var n = this["enter" + e[0].toUpperCase() + e.slice(1)];
                n && n.call(this, t)
            }
        },
        handleTransferRequest: function (e) {
            this.inControl ? this.setState("responding", e) : e.user_id === this.userId && this.setState("waiting", e)
        },
        handleTransfer: function (e) {
            var t;
            t = "approved" === e.result ? e.user_id === this.userId ? "editing" : "reading" : this.inControl ? "editing" : "reading", this.setState(t, e)
        },
        handleEditorBecameActive: function () {
            this._isControllingUserActive = !0
        },
        requestControl: function (t) {
            this.editor_url;
            var n = this;
            this.showControlBar($.extend({
                is_wait: !0
            }, e.util.getControllingUser())), $.ajax({
                url: t.target.href,
                statusCode: {
                    303: function () {
                        n.setState("editing")
                    },
                    423: function (t) {
                        var i = JSON.parse(t.responseText);
                        n.showControlBar($.extend({
                            is_wait: "pending:self" === i.reason,
                            is_pending: "pending:self" !== i.reason
                        }, e.util.getControllingUser()))
                    },
                    406: function (e) {
                        var t = JSON.parse(e.responseText);
                        n.hideControlBar(), $(document.body).trigger("top-error", t.reason)
                    }
                },
                success: function (e) {
                    n.setState("waiting", e.reason)
                }
            })
        },
        _transferUrl: function (t) {
            return e.API_ROOT + "/transfer/" + t
        },
        _updateRequest: function (e, t) {
            $.ajax({
                type: "PUT",
                url: this._transferUrl(e),
                data: {
                    action: t
                }
            })
        },
        authControl: function (e) {
            $.ajax({
                type: "POST",
                url: e.target.href
            })
        },
        cancelRequest: function () {
            this._updateRequest(this.transferId, "cancel")
        },
        approveRequest: function () {
            this._updateRequest(this.transferId, "accept")
        },
        rejectRequest: function () {
            this._updateRequest(this.transferId, "deny")
        },
        enterReading: function (t) {
            t = t || {};
            var n = this.inControl;
            this.inControl = !1, n ? (this.showControlBar($.extend({
                lost_control: !0
            }, t)), this.trigger("lostControl"), this.readDocument(this.document.id)) : "cancel" === t.result ? this.hideControlBar() : this.showControlBar($.extend({
                is_declined: !0
            }, e.util.getControllingUser()))
        },
        enterEditing: function (e) {
            var t = this.inControl;
            this.inControl = !0, t ? e && e.was_active ? this.showControlBar(e) : this.hideControlBar() : (this.trigger("gainedControl"), this.editDocument(this.document.id))
        },
        enterWaiting: function (t) {
            this.showControlBar($.extend({
                is_wait: !0
            }, e.util.getControllingUser()));
            var n = this,
                i = 1e3 * (t.expires_in || 90) + 1e3,
                s = (new Date).getTime();
            this._isControllingUserActive = t.controlling_user_active, this.transferId = t.xfer_id, setTimeout(function () {
                "waiting" === n.state && $.ajax({
                    url: n._transferUrl(t.xfer_id),
                    success: function (e) {
                        n.setState(e.transferred ? "editing" : "reading")
                    },
                    error: function (e, t) {
                        "waiting" === n.state && "error" !== t && e.responseText && n.setState("reading")
                    }
                })
            }, i), setTimeout(function () {
                "waiting" === n.state && (n.showControlBar({
                    extended_wait: !0
                }), setTimeout(function () {
                    if ("waiting" === n.state) {
                        if (n._isControllingUserActive) return n.setState("reading"), void 0;
                        var t = e.util.formatTime,
                            a = function () {
                                return i - ((new Date).getTime() - s)
                            };
                        n.showControlBar($.extend({
                            countdown: !0,
                            time_left: t(a())
                        }, e.util.getControllingUser()));
                        var o = setInterval(function () {
                            var e = a();
                            e > 0 && "waiting" === n.state ? n.controlBar.$element.find(".time-left").text(t(e)) : clearInterval(o)
                        }, 1e3)
                    }
                }, c))
            }, r)
        },
        enterResponding: function (t) {
            this._isControllingUserActive = t.controlling_user_active, this.transferId = t.xfer_id;
            var n = 1e3 * (t.expires_in || 90) + 1e3,
                i = (new Date).getTime(),
                s = this;
            this.showControlBar($.extend({
                is_ack: !0
            }, t)), setTimeout(function () {
                "responding" === s.state && (s._isControllingUserActive ? s.setState("editing", $.extend({
                    was_active: !0
                }, t)) : s.setState("reading", t))
            }, n), setTimeout(function () {
                if ("responding" === s.state && !s._isControllingUserActive) {
                    var a = e.util.formatTime,
                        o = function () {
                            return n - ((new Date).getTime() - i)
                        };
                    s.showControlBar($.extend({
                        countdown_controller: !0,
                        time_left: a(o())
                    }, t));
                    var r = setInterval(function () {
                        if ("responding" !== s.state) return clearInterval(r), void 0;
                        var e = o();
                        e > 0 ? s.controlBar.$element.find(".time-left").text(a(e)) : clearInterval(r)
                    }, 1e3)
                }
            }, r + c)
        },
        showControlBar: function (e) {
            e && this.controlBar.setData(e), s.updateLayout(!1), s.show({
                view: this.controlBar
            })
        },
        hideControlBar: function () {
            s.hide({
                view: this.controlBar
            })
        },
        readDocument: function (e) {
            window.location = "/docs/" + e + "/revisions/current"
        },
        editDocument: function (e) {
            window.location = "/docs/" + e + "/edit"
        }
    }), a.extend(e.c.ControlManager.prototype, o.Events)
}(tide, tide.Base, tide.util, tide.c.websocketBroker, tide.c.notifications, _, Backbone),
function (e, t) {
    function n(e) {
        e = e || window.getSelection();
        var t = null;
        if (!e.isCollapsed) {
            var n = document.createRange();
            n.setStart(e.focusNode, e.focusOffset), n.setEnd(e.focusNode, e.focusOffset);
            var t = n.getClientRects()[0];
            if (!t && 1 === n.startContainer.nodeType) {
                var i = n.startContainer.getClientRects(),
                    s = 0 === n.startOffset ? 0 : i.length;
                t = i[s]
            }
            n.detach()
        }
        return t
    }
    var i = -1,
        s = 2,
        a = 37.5,
        o = 36,
        r = 2,
        c = 4,
        l = 5,
        d = 2,
        u = 10,
        h = new tide.Router;
    tide.c.DocumentViewController = tide.Base.extend("DocumentViewController", {
        init: function (e, n, i) {
            this.documentId = e, this.userId = tide.util.getUserId(), this.read_only_url = "/docs/" + e + "/revisions/current", this.editor_url = "/docs/" + e + "/edit";
            var s = tide.m.Document.get(e);
            if (this.data = s, this.view = new tide.v.DocumentPage({
                el: n,
                model: s
            }), this.editable = i || !1, this.showingDiscussions = !1, t(".doc-rename", this.view.el).on("submit", this._bind("handleRenameSubmit")).on("keydown", this._bind("handleRenameKeydown")), t(".doc-rename .doc-title", this.view.el).on("blur", this._bind("handleRenameSubmit")), this._boundclickedMark = t.proxy(this, "clickedMark"), this._boundDiscussionShown = t.proxy(this, "discussionShown"), this._boundDiscussionHidden = t.proxy(this, "discussionHidden"), this._boundShowAlert = t.proxy(this, "showAlert"), t(this.view.el).on("click", "mark", null, this._boundclickedMark), t.subscribe("c/discussion/showDiscussion", this._boundDiscussionShown), t.subscribe("c/discussion/hideDiscussion", this._boundDiscussionHidden), this.activityPanel = new tide.v.DocumentActivityPanel({
                model: this.data.activity,
                el: "div.activity-pane"
            }).on("statusChanged", this._bind("handleStatusForm")), s.on("destroy", function () {
                document.location.href = "/docs?deleted=1"
            }), s.on("savedPastRevision", this._bind("handleSavedPastRevision")), s.on("sync", this._bind("handleSync")), s.on("removeMark", this._bind("updateMarks")), this.controlBar = new tide.v.ControlBar, this.controlManager = new tide.c.ControlManager(s, this.controlBar, this.editable), tide.util.canUserEdit() && !tide.documentInfo.diff && !tide.documentInfo.preview && 0 === tide.documentInfo.revisionNumber) {
                var a, o = t("#control-transfer");
                try {
                    a = JSON.parse(o.html())
                } catch (r) {}
                o.remove(), this.controlManager.inControl && a ? "pending" === a.status && a.expires_in > 0 ? this.controlManager.setState("responding", a) : "accepted" === a.status ? this.controlManager.showControlBar(t.extend({
                    is_approved: !0
                }, a)) : a = null : !this.controlManager.inControl && a ? a.user_id === tide.util.getUserId() && a.expires_in > 0 ? this.controlManager.setState("waiting", a) : "accepted" === a.status ? this.controlManager.showControlBar(t.extend({
                    lost_control: !0
                }, a)) : a = null : a = null, a || this.controlManager.inControl || (a = t.extend({
                    is_readonly: !0,
                    ask_path: tide.API_ROOT + "/article/" + s.id + "/ask"
                }, tide.util.getControllingUser()), this.controlManager.showControlBar(a))
            }
            this.documentDiscussions = s.discussions, this.updater = new tide.m.LiveDocumentUpdater(e), this.broker = tide.c.websocketBroker, this.broker.bindEvent("system", "alert", this._boundShowAlert), this.data.unread.on("add", this._bind("handleUnreadChange")), this.data.unread.on("remove", this._bind("handleUnreadChange")), this.handleUnreadChange(), this.$documentArea = this.view.$(".main"), this.$contentArea = t(".page-inner"), this.$textElement = tide.documentInfo.preview ? this.view.$(".preview-padding") : tide.v.richEditor.$element, !tide.config.margin_discussions || tide.documentInfo.diff || tide.documentInfo.preview || (this.$marginButton = t(SMT["ui/margin_discussion"]()).hide().appendTo(this.$contentArea), this.$marginButton.on("click", this._bind("handleClickMarginComment")), this.$marginButton.on("touchend", this._bind("handleClickMarginComment")), t.subscribe("v/editor/caretchange", this._bind("placeMarginButton")), t.subscribe("v/editor/change", this._bind("placeMarginButton"))), this.updateLayout(), t(window).on("resize", this._bind("updateLayout")), this.buildRenameForm(), tide.support.touch && tide.v.richEditor.$element.on("click focus", this._bind("handleEditorFocused")), tide.documentInfo.preview && this.setupPreview()
        },
        setupPreview: function () {
            if ("code" === tide.documentInfo.preview && this.view.$el.on("copy", function (e) {
                var n = e.originalEvent.clipboardData;
                if (n) {
                    var i = window.getSelection(),
                        s = t.trim(i.toString()),
                        a = n.setData("text/plain", s);
                    a && e.preventDefault()
                }
            }), !tide.support.touch) {
                var e, n = this;
                this.$textElement.on("mousedown", function () {
                    var t = window.getSelection();
                    e = t.isCollapsed
                }).on("mouseup", function (t) {
                    var i = window.getSelection();
                    e && i.isCollapsed && (i.selectAllChildren(n.$textElement[0]), t.preventDefault())
                })
            }
        },
        buildRenameForm: function () {
            var e = t(".doc-rename .doc-title", this.view.el).not(".comment-holder .doc-title");
            e.wrap('<div class="comment-holder"></div>').before('<div aria-hidden="true" class="comment-shim"></div>'), e.on("input focus", function () {
                var e = t(this),
                    n = e.siblings(".comment-shim")[0];
                n.innerHTML = e[0].value
            }), t(".doc-rename .comment-shim", this.view.el).html(e.val())
        },
        commitRenameForm: function () {
            var e = t(".doc-rename .doc-title", this.view.el)[0] || "",
                n = "value" in e ? e.value : e.textContent;
            if (e.blur(), n) {
                tide.c.updateSavedStatus(!0);
                var i = function () {
                    tide.c.updateSavedStatus(!1)
                };
                this.data.set("title", n), this.data.save(null, {
                    complete: i
                })
            }
        },
        handleRenameSubmit: function (e) {
            "blur" !== e.type && e.preventDefault(), this.commitRenameForm()
        },
        handleRenameKeydown: function (e) {
            13 === e.keyCode && (e.preventDefault(), this.commitRenameForm())
        },
        handleStatusForm: function (e) {
            e !== this.data.get("status_id") && this.data.save({
                status_id: e
            }, {
                patch: !0
            })
        },
        showDiscussions: function (e) {
            this.hideCollaborators(), this.hideActivity(), this.discussionsController || (this.discussionsController = new tide.c.DiscussionsController(this.documentId, this.documentDiscussions), this.discussionsController.view.appendTo(t(".ed-outer")[0])), this.discussionsController.view.show(), e ? this.discussionsController.showDiscussion(e) : 0 == this.discussionsController.showOpen && (e = "closed", this.discussionsController.showDiscussion("closed"), t("body").addClass("view-discuss-closed")), this.showingDiscussions = !0, this.updateLayout(), h.dontNavigateTo("showDiscussion", {
                state: "discussions",
                discussId: e || ""
            })
        },
        hideDiscussions: function () {
            this.discussionsController && (this.discussionsController.view.hide(), this.showingDiscussions = !1, this.discussionsController.cancelDiscussion(), this.discussionsController.showActivities(), t("body").removeClass("view-discuss-closed"), this.deactivateMarks(), this.updateLayout()), h.dontNavigateTo("showPageState", {
                state: ""
            })
        },
        toggleDiscussions: function () {
            this[this.showingDiscussions ? "hideDiscussions" : "showDiscussions"]()
        },
        showCollaborators: function () {
            this.hideDiscussions(), this.hideActivity(), this.collaboratorsController || (this.collaboratorsController = new tide.c.CollaboratorsController(this.data), this.collaboratorsController.view.appendTo(t(".ed-outer")[0])), this.collaboratorsController.view.show(), this.showingCollaborators = !0, this.updateLayout()
        },
        hideCollaborators: function () {
            this.collaboratorsController && (this.collaboratorsController.view.hide(), this.showingCollaborators = !1, this.updateLayout())
        },
        toggleCollaborators: function () {
            this[this.showingCollaborators ? "hideCollaborators" : "showCollaborators"]()
        },
        showActivity: function () {
            this.hideDiscussions(), this.hideCollaborators(), this.activityPanel.setVisible(!0), this.updateLayout(), h.dontNavigateTo("showPageState", {
                state: "activity"
            })
        },
        hideActivity: function () {
            this.activityPanel && (this.activityPanel.setVisible(!1), this.updateLayout(), h.dontNavigateTo("showPageState", {
                state: ""
            }))
        },
        toggleActivity: function () {
            this[this.activityPanel.visible ? "hideActivity" : "showActivity"]()
        },
        markForDiscussion: function (e) {
            return tide.v.richEditor.markElements(tide.v.richEditor.getMarkForDiscussion(e))
        },
        scrollToMark: function (e, n) {
            var i = this.markForDiscussion(e).find(".cap-side");
            if (i.length) {
                var s = t("html").hasClass("overthrow-enabled"),
                    a = i.offset().top,
                    o = t("body");
                s && (o = t(".ed-page-container"), a += o[0].scrollTop - o.offset().top), null != n && (n -= i.height() / 2, a -= n), o.animate({
                    scrollTop: a
                }, 300)
            }
        },
        clickedMark: function (e) {
            e.stopPropagation();
            var n = e.currentTarget,
                i = t(n).hasClass("closed"),
                s = this.discussionsController.showOpen ? !i : i,
                a = parseInt(n.getAttribute("data-discussion"), 10);
            a && this.showingDiscussions && s && (this.discussionsController._currentMark = tide.v.richEditor.getMarkForDiscussion(a), this.discussionsController.showDiscussion(a))
        },
        discussionShown: function (e, t, n) {
            var i = t.visibleView,
                s = this.view.el.getBoundingClientRect(),
                a = i.discussionMarker.getBoundingClientRect(),
                o = a.top - s.top + a.height / 2;
            this.scrollToMark(n, o), this.markForDiscussion(n).addClass("active")
        },
        discussionHidden: function () {
            this.deactivateMarks()
        },
        removeSpeculativeMarks: function () {
            for (var e = tide.v.richEditor.getMarks(), t = 0, n = e.length; n > t; t++) {
                var i = e[t];
                i.discussion_id || tide.v.richEditor.removeMark(i)
            }
        },
        deactivateMarks: function () {
            this.view.$("mark").removeClass("active")
        },
        updateLayout: function () {
            var e = this.$documentArea,
                n = i;
            if (0 > n) {
                var h = parseFloat(this.$textElement.css("line-height")) || 24,
                    p = s * h;
                n = this.view.el.offsetHeight - p
            }
            this.$textElement.css({
                "padding-bottom": n + "px",
                "margin-bottom": "0"
            });
            var f = t(document.body).hasClass("drawer-open"),
                m = t("div.menu-container").hasClass("open"),
                v = parseFloat(e.css("font-size"));
            if (f) var g = (m ? d : l) * v;
            else if (m) var g = d * v;
            else {
                var g = document.body.offsetWidth >= 16 * a ? c : r;
                g *= v
            }
            var _ = e[0].clientWidth || e[0].offsetWidth,
                b = o * v,
                y = b,
                w = (_ - b) / 2;
            b > _ - 2 * g && (y = _ - 2 * g, w = g);
            var x = this.$textElement[0].offsetWidth,
                T = parseFloat(this.$textElement.css("width"));
            (y !== T || x !== _) && (this.$textElement.css({
                    width: y + "px",
                    "padding-left": w + "px",
                    "padding-right": w + "px"
                }), x === _ && (this.$textElement[0].style.width = y - 1 + "px"), e[0].offsetLeft, x === _ && (this.$textElement[0].style.width = y + "px")), this.$marginButton && (this.$marginButton.css("left", e[0].offsetLeft + w + y + u + "px"), this.placeMarginButton()), this.view.updateLayout && this.view.updateLayout()
        },
        showAlert: function (e) {
            alert(e.message)
        },
        rescindControl: function () {
            this.editable && (tide.v.richEditor.setEditable(!1), t(window).off("beforeunload"), window.location.href = this.read_only_url)
        },
        handleSavedPastRevision: function (e, t, n) {
            tide.m.versions.fetch().then(function () {
                tide.v.versions.scrollTo(1 / 0)
            });
            var i = tide.m.messages.get("pastRevision", t);
            tide.v.ui.displayError(i, "success", !1, !1), n === !1 && this.editable && tide.flash.set(i)
        },
        handleSync: function (e, t) {
            if (!tide.documentInfo.diff && 0 === tide.documentInfo.revisionNumber) {
                if (t.control === !1) return this.rescindControl(), void 0;
                var n = e.changedAttributes();
                n && ("text" in n ? (tide.v.richEditor.setHtml(e.get("text"), null, null, !0), this.mergeMarks(e.get("marks"), !0), this.recordHistory()) : "marks" in n && this.mergeMarks(e.get("marks"), !1))
            }
        },
        updateMarks: function () {
            this.mergeMarks(this.data.get("marks"), !1)
        },
        recordHistory: function () {
            tide.m.history && tide.m.history.add(this.data.get("text"), tide.v.richEditor._getSelection().start, this.data.get("marks"))
        },
        mergeMarks: function (e, t) {
            for (var n = e.length - 1; n > -1; n--) {
                var i = e[n],
                    s = !0;
                if (i.discussion_id) {
                    var a = this.documentDiscussions.get(i.discussion_id);
                    a && (s = a.get("active"))
                }
                i.className = s ? "" : "closed"
            }
            var o = tide.v.editor.selection.isAdjacentToNonEditable(tide.v.richEditor.element);
            if (t) {
                var r;
                if (this.discussionsController && (r = this.discussionsController._currentDiscussion), tide.v.richEditor.removeMarks(function (e) {
                    return e.discussion_id
                }), tide.v.richEditor.addMarks(e, o), r) {
                    var c = tide.v.richEditor.getMarkForDiscussion(r);
                    tide.v.richEditor.activateMark(c, !1)
                }
            } else {
                for (var l = {}, d = tide.v.richEditor.getMarks(), n = d.length - 1; n > -1; n--) {
                    var c = d[n];
                    c.discussion_id && (l[c.discussion_id] = {
                        inNewSet: !1,
                        mark: c
                    })
                }
                for (var n = 0, u = e.length; u > n; n++) {
                    var i = e[n];
                    l[i.discussion_id] ? l[i.discussion_id].inNewSet = !0 : (tide.v.richEditor.addMark(i, o), l[i.discussion_id] = {
                        inNewSet: !0,
                        mark: i
                    })
                }
                for (var h in l) l[h].inNewSet || tide.v.richEditor.removeMarks({
                    discussion_id: l[h].mark.discussion_id
                })
            }
        },
        handleEditorFocused: function () {
            var e = t("html").hasClass("overthrow-enabled");
            e && setTimeout(function () {
                var e = document.body.scrollTop,
                    n = t(".ed-page-container");
                e > 0 && (document.body.scrollTop = 0, n[0].scrollTop += e)
            }, 0)
        },
        handleUnreadChange: function () {
            var e = this.data.unread.length > 0,
                n = this.data.unread.documentActivity().length > 0,
                i = this.data.unread.discussionComments().length > 0;
            t(".nav-hamburger").toggleClass("unread", e), t(".nav-activity").toggleClass("unread", n), t(".mobile-activity-link").toggleClass("unread", n), t(".nav-discuss").toggleClass("unread", i), t(".mobile-discuss-link").toggleClass("unread", i)
        },
        placeMarginButton: function () {
            var e = window.getSelection(),
                i = tide.v.richEditor && t.contains(tide.v.richEditor.element.parentNode, e.anchorNode),
                s = n(e);
            if (s && i) {
                var a = this.$contentArea[0].getBoundingClientRect(),
                    o = s.top - a.top;
                this.$marginButton.css("top", o + "px"), this.showMarginButton()
            } else this.hideMarginButton()
        },
        showMarginButton: function () {
            function e() {
                tide.config.marginButtonTransition ? ("none" === n[0].style.display && (n.css({
                    display: "block",
                    opacity: "0"
                }), n[0].offsetLeft), n.off(tide.util.transitionEvent), n.one(tide.util.transitionEvent, t), n.css(tide.util.transitionProperty, tide.config.marginButtonTransition), n.css("opacity", "1")) : n.show()
            }

            function t() {
                n.css(tide.util.transitionProperty, "")
            }
            var n = this.$marginButton,
                i = "none" !== n[0].style.display;
            clearTimeout(this.marginButtonTimer), !tide.config.marginButtonDelay || i ? e() : this.marginButtonTimer = setTimeout(e, tide.config.marginButtonDelay)
        },
        hideMarginButton: function () {
            function e() {
                t.css(tide.util.transitionProperty, ""), t.css("display", "none")
            }
            if ("none" !== this.$marginButton[0].style.display) {
                var t = this.$marginButton;
                clearTimeout(this.marginButtonTimer), tide.config.marginButtonTransition ? (t.off(tide.util.transitionEvent), t.one(tide.util.transitionEvent, e), t.css(tide.util.transitionProperty, tide.config.marginButtonTransition), t.css("opacity", "0")) : t.hide()
            }
        },
        handleClickMarginComment: function (e) {
            e.preventDefault(), this.showDiscussions(), this.discussionsController.createDiscussion()
        }
    })
}(this, jQuery, this.tide.m.ActivityEvents),
function (e, t) {
    "use strict";
    e.m.Versions = t.extend({
        url: function () {
            return "/docs/" + this.document_id + "/versions"
        },
        initialize: function (e, t) {
            t.document_id && (this.document_id = t.document_id)
        },
        comparator: function (e, t) {
            var n = e.get("sequence"),
                i = t.get("sequence");
            return 1 === n ? -1 : 1 === i ? 1 : i - n
        }
    })
}(tide, tide.m.BBCollection),
function (e, t, n) {
    var i = .8,
        s = 15,
        a = 15,
        o = {
            "default": 14,
            2: 20,
            3: 26,
            4: 32,
            5: 38
        }, r = 10,
        c = 4;
    tide.v.View.extend("VersionList", {
        _eventPath: "v/VersionList/",
        markerTemplate: SMT["articles/timeline_entry_marker"],
        tooltipTemplate: SMT["articles/timeline_entry_details_content"],
        init: function (e) {
            this._boundScrollHandler = t.proxy(this, "scrollButtonClicked"), this._scrollPosition = 0, this._scrollWidth = 0, this._bubbleWidth = 0, tide.v.View.prototype.init.call(this, e), this._addScrollButtons(), this._dataRefreshHandler = t.proxy(this, "refresh"), this._resizeHandler = t.proxy(this, "_resize"), t(window).on("resize", this._resizeHandler)
        },
        scrollButtonClicked: function (e) {
            var t = this.contentElement.offsetWidth,
                n = i * t;
            "left" === e.data && (n *= -1);
            var s = this._scrollPosition + n;
            this.scrollTo(s)
        },
        scrollTo: function (e, t) {
            t = t === !1 ? !1 : !0;
            var n = this.contentElement.offsetWidth;
            if (!this.visible || !n) return this._scrollPosition = e, void 0;
            e = -e;
            var i = 0,
                s = -(this._scrollWidth - n);
            if (e = Math.min(Math.max(e, s), i), this._scrollPosition = -e, !t) {
                var a = this.listElement.style[tide.util.transitionProperty];
                this.listElement.style[tide.util.transitionProperty] = "none"
            }
            this.listElement.style.left = e + "px", t || (this.listElement.offsetLeft, this.listElement.style[tide.util.transitionProperty] = a), this.arrows.left.toggleClass("hidden", e === i), this.arrows.right.toggleClass("hidden", e === s)
        },
        showRevision: function () {
            n.error("showRevision is not yet implemented.")
        },
        setActiveRevisions: function (e) {
            var t = this._data;
            if (t && t.length) {
                var n = e[0] || t.at(0).id;
                this._activeRevisions = e, this.$element.find(".active-entry").removeClass("active-entry"), t.forEach(function (t) {
                    t.set("active_entry", -1 !== e.indexOf(t.id) ? "active-entry" : ""), t.set("active_version_id", t.id === n ? n : null)
                }), this.refresh()
            }
        },
        setData: function (e) {
            this._data && this._data.off("sync", this._dataRefreshHandler), this._data = e, e.on("sync", this._dataRefreshHandler), this.setActiveRevisions([]), this.scrollTo(1 / 0, !1)
        },
        refresh: function () {
            this.listElement.innerHTML = "";
            var e = this._data;
            if (e && e.length) {
                var n = this._activeRevisions && this._activeRevisions[0] || e.at(0).id,
                    i = e.findWhere({
                        id: n
                    }) || {};
                this._bubbleWidth = 0, e.forEach(function (e) {
                    var s = e.id === n || this._activeRevisions && -1 !== this._activeRevisions.indexOf(e.id);
                    e.set("active_version_id", s ? null : n), e.set("active_version_name", i.get("version_name"));
                    var a = this._createMarker(e);
                    this.listElement.appendChild(a),
                    function (e, n, i) {
                        t(n).on("mouseover", function () {
                            var n = t(this),
                                i = n.find(".tooltip-versions"),
                                s = i.width(),
                                a = n.offset().left + s,
                                o = a > e.element.getBoundingClientRect().right - s / 2 ? "dir-top-right" : "dir-top-left";
                            i.addClass(o)
                        }).on("mouseout", function () {
                            t(this).find(".tooltip-versions").removeClass("dir-top-right dir-top-left")
                        }).find(".diff-cat").on("click", function (t) {
                            t.preventDefault(), e._publish("selectVersion", i.toJSON())
                        })
                    }(this, a, e), this._bubbleWidth += (o[e.get("diff_level")] || o["default"]) + r, 1 === e.get("sequence") && (this._bubbleWidth += c)
                }, this), this._checkSize(), this.scrollTo(this._scrollPosition, !1)
            }
        },
        _createMarker: function (e) {
            var n = e.toJSON(),
                i = t(this.markerTemplate(n)),
                s = document.createElement("li"),
                a = document.createElement("div"),
                o = a.cloneNode();
            return a.className = "tooltip-versions view version-info", o.className = "tooltip-versions-inner", o.innerHTML = t.trim(this.tooltipTemplate(n)), a.appendChild(o), s.setAttribute("role", "tab"), s.className = "timeline-entry  " + n.named_entry + " " + n.active_entry, 1 === n.sequence && (s.className += " latest-entry"), s.appendChild(i[0]), s.appendChild(a), s
        },
        _createElement: function () {
            var e = tide.v.View.prototype._createElement.call(this),
                t = document.createElement("div");
            t.className = "timeline editor-panel-content", this.contentElement = t;
            var n = document.createElement("ol");
            return n.className = "timeline-entries", this.listElement = n, t.appendChild(n), e.appendChild(t), e
        },
        _setupElement: function () {
            this.listElement = this.$element.find(".timeline-entries")[0], this.contentElement = this.$element.find(".timeline")[0], tide.v.View.prototype._setupElement.call(this)
        },
        _addScrollButtons: function () {
            var e = document.createElement("div");
            e.className = "timeline-scroll scroll-btn-left", e.setAttribute("role", "presentation"), e.appendChild(document.createElement("span")), this.element.appendChild(e);
            var n = t(e).on("click", null, "left", this._boundScrollHandler),
                i = document.createElement("div");
            i.className = "timeline-scroll scroll-btn-right", i.setAttribute("role", "presentation"), i.appendChild(document.createElement("span")), this.element.appendChild(i);
            var s = t(i).on("click", null, "right", this._boundScrollHandler);
            this.arrows = {
                right: s,
                left: n
            }
        },
        _checkSize: function () {
            this._data && (this._scrollWidth = this._bubbleWidth + s + a, t(this.contentElement).width() < this._scrollWidth ? this.$element.addClass("scrolling") : this.$element.removeClass("scrolling"), this.listElement.style.width = this._bubbleWidth + "px")
        },
        _resize: function () {
            this._checkSize(), this.scrollTo(this._scrollPosition, !1)
        },
        appendTo: function (e) {
            tide.v.View.prototype.appendTo.call(this, e), this._checkSize(), this.scrollTo(this._scrollPosition, !1)
        },
        _setVisible: function (e) {
            tide.v.View.prototype._setVisible.call(this, e), this._checkSize(), this.scrollTo(this._scrollPosition, !1)
        }
    }, {
        CSS_CLASS: "editor-panel tools-sub timeline-outer timeline-pane"
    })
}(this, jQuery, tide.logger),
function (e, t, n, i) {
    function s() {
        t.c.updateSavedStatus()
    }

    function a(n) {
        t.c.bridge.resolve_error(), t.c.updateSavedStatus(), n.isDirty() || e(window).off("beforeunload", h)
    }

    function o(e, n) {
        t.c.presentErrorForStatus(n.status)
    }

    function r(e, n) {
        var i = e.get("text"),
            s = i === t.v.richEditor.html();
        s || t.v.richEditor.setHtml(i, n, n, !0), t.c.currentController.mergeMarks(e.get("marks"), !s)
    }

    function c(i, s) {
        t.c.showNotification("<cite>Version " + s + "</cite> Saved", "doc-alert saved", "ico-check-white"), e("body").trigger("collapsePanels"), t.m.versions.fetch({
            success: function () {
                t.v.versions.scrollTo(1 / 0)
            }
        }), t.c.currentController && n.shouldDo("versions_tip") && t.c.currentController.view.showOnboarding("versions_tip") && n.done("versions_tip")
    }

    function l() {
        t.c.showNotification("Save failed.", "doc-alert save-failed")
    }

    function d() {
        t.m.document.set({
            text: t.v.editor.content.get(),
            raw_text: t.v.richEditor.text(),
            marks: t.v.richEditor.getMarks(function (e) {
                return !!e.discussion_id
            }, !0)
        })
    }

    function u(e) {
        var n = e.stats();
        t.v.ui.docInfo.update(n.words, n.chars)
    }

    function h() {
        return t.m.messages.get("unsaved")
    }
    var p = new t.Router,
        f = e(document.body).hasClass("tmpl-editor");
    e.subscribe("v/VersionList/visibleChange", function (t, n) {
        e(document.body).toggleClass("top-bar-visible", n.visible), e("#versions").parent(".tool-menu").find("a.top").toggleClass("top-active", n.visible)
    }), e.subscribe("v/VersionList/selectVersion", function (e, n, i) {
        1 === i.sequence ? f || p.navigateTo("showEditor", {
            docId: t.documentInfo.id
        }) : (t.documentInfo.diff || i.id !== t.documentInfo.revisionId) && p.navigateTo("showRevision", {
            docId: t.documentInfo.id,
            revisionId: i.id
        })
    }), e(function () {
        var n = t.m.versions = new t.m.Versions(null, {
            document_id: t.documentInfo.id
        });
        t.v.versions = new t.v.VersionList, t.v.versions.hide(), t.v.versions.setData(n), t.v.versions.appendTo(e(".ed-page")), n.on("sync", function (e) {
            t.documentInfo.revisionId && (t.documentInfo.diff ? t.v.versions.setActiveRevisions([t.documentInfo.revisionId, t.documentInfo.diffRevisionId]) : t.v.versions.setActiveRevisions([t.documentInfo.revisionId]));
            var n = e.at(0);
            null == t.documentInfo.revisionId || n && n.id === t.documentInfo.revisionId || t.v.versions.show()
        }), n.fetch(), e(".discuss-link").click(function (n) {
            n.preventDefault(), e("a[data-pane]").trigger("collapse"), t.c.currentController.toggleDiscussions()
        }), e(".people-link").click(function (n) {
            n.preventDefault(), e("a[data-pane]").trigger("collapse"), t.c.currentController.toggleCollaborators()
        }), e(".activity-link").click(function (n) {
            n.preventDefault(), e("a[data-pane]").trigger("collapse"), {
                docId: t.c.currentController.documentId
            }, p.navigateTo("showPageState", {
                activity: -1 === window.location.toString().indexOf("activity")
            })
        })
    }), f ? (t.c.bridge = {
        poll: null,
        pollInterval: 5,
        behavingBadly: !1,
        errorResolutionText: null,
        present_error: function (e, n, i) {
            return t.c.bridge.behavingBadly === !1 ? (t.c.bridge.errorResolutionText = n, t.c.bridge.behavingBadly = !0, t.v.ui.displayError(e, "error", i)) : !1
        },
        resolve_error: function () {
            return t.c.bridge.errorResolutionText && (t.v.ui.displayError(t.c.bridge.errorResolutionText, "success"), t.c.bridge.errorResolutionText = null), t.c.bridge.behavingBadly = !1, !0
        },
        autosave: function () {
            e("body").hasClass("tmpl-version") || t.m.document.isDirty() && t.m.document.save(null, {
                minor: "auto"
            })
        }
    }, t.c.updateSavedStatus = function (n) {
        n === i && (n = t.m.document.isDirty());
        var s = n ? "Saving" : "Saved";
        e("#saved-status").toggleClass("ico-syncing", n).text(s)
    }, t.c.showNotification = function (t, n, i) {
        var n = n ? n : "generic-notification",
            i = i ? ' class="' + i + '"' : "",
            s = e(document.createElement("div")).addClass(n).html("<span" + i + ">" + t + "</span>").appendTo(e(".ed-outer"));
        setTimeout(function () {
            s.fadeOut(1e3)
        }, 1e3)
    }, t.c.showDocumentEditor = function (e) {
        p.navigateTo("showEditor", {
            docId: e
        })
    }, t.c.presentErrorForStatus = function (e) {
        var n = t.m.messages.get(["errors", e]);
        if (n) {
            var i = {
                this_url: window.location.href
            };
            t.c.bridge.present_error(Mustache.render(n.notice || "", i), Mustache.render(n.resolved || "", i), n.persistent)
        } else n !== !1 && t.v.ui.displayError(t.m.messages.get("genericError"), "error", !1)
    }, e.subscribe("m/history/change", function () {
        var e = t.m.history.get().caretIndex;
        r(t.m.document, e);
        var n = t.c.currentController.discussionsController;
        n && n.cancelDiscussion()
    }), e.subscribe("tide/networkSuccess", function () {
        t.c.bridge.resolve_error()
    }), e.subscribe("tide/networkFailure", function (e, n) {
        t.c.presentErrorForStatus(n.status)
    }), e.subscribe("v/editor/change", function () {
        d()
    }), e.subscribe("v/editor/notablechange", function () {
        e(window).on("beforeunload", h), d();
        var n = t.m.document;
        t.m.history.add(n.get("text"), t.v.richEditor._lastSelection ? t.v.richEditor._lastSelection.startOffset : t.v.richEditor._getSelection().start, n.get("marks"))
    }), e.subscribe("v/editor/undo", function () {
        t.m.history.back()
    }), e.subscribe("v/editor/redo", function () {
        t.m.history.forward()
    }), e.subscribe("v/editor/save", function () {
        t.m.document.save()
    }), e.subscribe("v/modal/saveRevision", function (e, n, i) {
        t.m.document.markRevision(i["revision[name]"])
    }), t.support.contentEditable && "getSelection" in window ? e(function () {
        t.v.init();
        var n = t.util.globalData().currentDocument || {};
        t.m.init(n, t.v.editor.getInitialContent(), t.v.editor.getInitialMarks(), t.v.editor.getInitialUnread()), t.m.document.on("sync", a), t.m.document.on("error", o), t.m.document.on("newRevision", c), t.m.document.on("revisionFailed", l), t.m.document.on("change", s), t.m.document.on("change:text", u), t.c.bridge.poll = setInterval(t.c.bridge.autosave, 1e3 * t.c.bridge.pollInterval), t.keyManager.on("cmd+s", function () {
            t.m.document.markRevision()
        }, null, !0), t.keyManager.on("cmd+shift+s", function () {
            e("#cue-save-msg").click()
        }, null, !0), t.keyManager.on("backspace", function (e) {
            e.target.isContentEditable || "INPUT" === e.target.tagName || "TEXTAREA" === e.target.tagName || e.preventDefault()
        }), t.c.currentController = new t.c.DocumentViewController(t.documentInfo.id, e(".ed-page")[0], !0), e(".editor-tools .discuss-new").on("click", function (e) {
            e.preventDefault(), t.c.currentController.toggleDiscussions(), t.c.currentController.discussionsController.createDiscussion()
        }), t.v.richEditor.subscribe("focus", function () {
            e("body").trigger("collapsePanels")
        }), r(t.m.document), u(t.m.document, 0)
    }) : e(function () {
        e(".basic-form").removeAttr("class")
    })) : e(function () {
        if (t.documentInfo.id) {
            t.v.richEditor = new t.v.EditorView({
                element: e(".the-tide")[0],
                editable: !1,
                extractMarks: !0,
                grammar: Prism.languages[t.documentInfo.diff ? "mdDiff" : "md"]
            });
            var n = e("#document-marks").html();
            if (n) {
                var i;
                try {
                    i = JSON.parse(n)
                } catch (s) {}
                if (i) {
                    for (var a = i.length - 1; a > -1; a--) i[a].discussion_id = parseInt(i[a].discussion_id, 10);
                    t.v.richEditor.addMarks(i)
                }
            }
            var o = t.util.globalData().currentDocument || {};
            i && (o.marks = i);
            var r = t.m.document = t.m.Document.get(o.id, o);
            r.updateFromLocalStorage() ? r.save() : r.fetch();
            var c;
            try {
                c = JSON.parse(e("#unread-events").html())
            } catch (s) {}
            c && r.unread.add(c), t.c.currentController = new t.c.DocumentViewController(t.documentInfo.id, e(".ed-page")[0])
        }
    }), e(function () {
        Backbone.history.start({
            pushState: !0,
            root: t.Router.rootUrl
        })
    })
}(jQuery, tide, tide.doneThat);