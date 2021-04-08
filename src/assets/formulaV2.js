(window.LearnosityAmd = window.LearnosityAmd || []).push([
    [33, 73],
    {
        130: function (t, e, i) {
            "use strict";
            i.d(e, "a", function () {
                return i18nTemplate;
            });
            var n = i(0),
                a = i.n(n);
            function i18nTemplate(t, e) {
                return a.a.isEmpty(t)
                    ? ""
                    : (a()(e).forEach(function (e, i) {
                          var n = "{{".concat(i, "}}");
                          t = t.replace(n, e);
                      }),
                      t);
            }
        },
        131: function (t, e, i) {
            "use strict";
            var n = i(1),
                a = i.n(n),
                s = i(0),
                r = i.n(s),
                o = i(7),
                l = i(3),
                c = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                u = new (function () {
                    var t = /Mac|iPad|iPhone|iPod/.test(navigator.platform),
                        e = r.a.uniqueId("lrn_capslock_listener_"),
                        i = this,
                        n = [];
                    function setStatus(t) {
                        i.status !== t &&
                            (r.a.each(n, function (e) {
                                e(t);
                            }),
                            (i.status = t));
                    }
                    (this.status = !1),
                        (this.observe = function (s, o) {
                            return (
                                o && (s = r.a.bind(s, o)),
                                n.push(s),
                                1 === n.length &&
                                    (function startListening() {
                                        var n = !1;
                                        a()(window).on("focus." + e, function () {
                                            a()(window).one("keypress." + e, i.correctStatus);
                                        }),
                                            t
                                                ? (a()(window).on("keydown." + e, function (t) {
                                                      20 === (t || window.event).keyCode && setStatus(!i.status);
                                                  }),
                                                  a()(window).on("keyup." + e, function (t) {
                                                      20 === (t || window.event).keyCode && setStatus(!1);
                                                  }))
                                                : (a()(window).on("keydown." + e, function (t) {
                                                      var e = t || window.event;
                                                      n || 20 !== e.keyCode || (setStatus(!i.status), (n = !0));
                                                  }),
                                                  a()(window).on("keyup." + e, function (t) {
                                                      var e = t || window.event;
                                                      n && 20 === e.keyCode && (n = !1);
                                                  }));
                                    })(),
                                s
                            );
                        }),
                        (this.unobserve = function (t) {
                            (n = r.a.without(n, t)).length ||
                                (function stopListening() {
                                    a()(window).off("." + e);
                                })();
                        }),
                        (this.correctStatus = function (e) {
                            var i = e || window.event,
                                n = i.charCode || i.keyCode,
                                a = i.shiftKey;
                            n < 123 && n > 96 ? setStatus(a) : !(n < 91 && n > 64) || (t && a) || setStatus(!a);
                        });
                })(),
                h = new (function () {
                    var t = r.a.uniqueId("lrn_fullscreen_listener_"),
                        e = this,
                        i = [],
                        n = {
                            generic: { change: "fullscreenchange", element: "fullscreenElement" },
                            webkit: { change: "webkitfullscreenchange", element: "webkitFullscreenElement" },
                            ms: { change: "MSFullscreenChange", element: "msFullscreenElement" },
                            moz: { change: "mozfullscreenchange", element: "mozFullScreenElement" },
                        },
                        s = "ie" === o.a.browser && 11 === o.a.version,
                        l = r.a.find(n, function (t) {
                            if ("on".concat(t.change) in document.documentElement) return t;
                        });
                    !l && s && (l = n.ms);
                    var c = !1;
                    function setElement() {
                        var t = document[l.element];
                        e.element !== t &&
                            (r.a.each(i, function (e) {
                                e(t);
                            }),
                            (e.element = t));
                    }
                    function updateElementAfterNextRender() {
                        c ||
                            ((c = !0),
                            requestAnimationFrame(function () {
                                requestAnimationFrame(function () {
                                    (c = !1), setElement();
                                });
                            }));
                    }
                    (this.element = null),
                        (this.observe = function (e, n) {
                            return (
                                n && (e = r.a.bind(e, n)),
                                l &&
                                    (i.push(e),
                                    1 === i.length &&
                                        (function startListening() {
                                            a()(document).on(l.change + "." + t, updateElementAfterNextRender), c || setElement();
                                        })()),
                                e
                            );
                        }),
                        (this.unobserve = function (e) {
                            (i = r.a.without(i, e)).length ||
                                (function stopListening() {
                                    a()(document).off("." + t);
                                })();
                        });
                })();
            function isEventSupported(t) {
                var e = document.createElement("p"),
                    i = !1;
                if (e.addEventListener)
                    e.addEventListener(
                        t,
                        function () {
                            i = !0;
                        },
                        !1
                    );
                else {
                    if (!e.attachEvent) return !1;
                    e.attachEvent("on" + t, function () {
                        i = !0;
                    });
                }
                return e.setAttribute("id", "target"), i;
            }
            e.a = {
                capsLock: u,
                fullScreen: h,
                getViewportOffset: function getViewportOffset() {
                    var t = a()(window),
                        e = { top: t.scrollTop(), left: t.scrollLeft() };
                    return (e.right = e.left + t.width()), (e.bottom = e.top + t.height()), e;
                },
                getVisibleViewportDimensions: function getVisibleViewportDimensions() {
                    var t,
                        e = window.innerWidth,
                        i = window.innerHeight;
                    return (
                        r.a.contains(["firefox", "opera"], o.a.browser) &&
                            ((e = (t = a()('<div style="position:fixed;right:0;bottom:0;"></div>').appendTo(a()("body"))).get(0).getBoundingClientRect().left), (i = t.get(0).getBoundingClientRect().top), t.remove()),
                        { width: e, height: i }
                    );
                },
                sidesOnScreen: function sidesOnScreen(t) {
                    var e = a()(t),
                        i = e.offset(),
                        n = this.getViewportOffset();
                    return (
                        (i.right = i.left + e.outerWidth()),
                        (i.bottom = i.top + e.outerHeight()),
                        { top: n.top < i.top && i.top < n.bottom, right: n.right > i.right && i.right > n.left, bottom: n.bottom > i.bottom && i.bottom > n.top, left: n.left < i.left && i.left < n.right }
                    );
                },
                observeMutation: function observeMutation(t, e, i) {
                    e = e || {};
                    var n,
                        s = a()(t),
                        o = r.a.uniqueId("lrn.mutation."),
                        l = {
                            childList: e.childList || !1,
                            characterData: e.characterData || !1,
                            attributeOldValue: e.attributeOldValue || !1,
                            charactedDataOldValue: e.charactedDataOldValue || !1,
                            subtree: e.subtree || !1,
                            attributes: e.attributes || !1,
                        };
                    if ((e.attributeFilter instanceof Array && (l.attributeFilter = e.attributeFilter), c)) {
                        if (!(l.childList || l.attributes || l.characterData))
                            return console.log('NOTE: At the very least, childList, attributes, or characterData must be set to true. Otherwise, "An invalid or illegal string was specified" error is thrown.'), !1;
                        (n = new c(function (t) {
                            t.forEach(i);
                        })),
                            s.each(function () {
                                try {
                                    n.observe(t, l);
                                } catch (e) {
                                    console.log(e, t, l);
                                }
                            });
                    } else
                        s.data("lrn-mutation-ns", o),
                            l.attributes && (isEventSupported("DOMAttrModified") ? s.on("DOMAttrModified." + o, i) : "onpropertychange" in document.body && t.attachEvent("propertychange", i)),
                            l.childList &&
                                (isEventSupported("DOMSubtreeModified")
                                    ? s.on("DOMSubtreeModified." + o + " DOMCharacterDataModified." + o + " DOMAttributeNameChanged." + o, i)
                                    : "onpropertychange" in document.body &&
                                      s.find("*").each(function () {
                                          this.attachEvent && this.attachEvent("onpropertychange", i);
                                      }));
                    return n;
                },
                unobserveMutation: function unobserveMutation(t, e, i) {
                    if (t) t.disconnect();
                    else {
                        var n = a()(e),
                            s = n.data("lrn-mutation-ns");
                        n.removeData("lrn-mutation-ns").off("." + s),
                            i &&
                                !isEventSupported("DOMSubtreeModified") &&
                                "onpropertychange" in document.body &&
                                (e.detachEvent("onpropertychange", i),
                                n.find("*").each(function () {
                                    this.detachEvent && this.detachEvent("onpropertychange", i);
                                }));
                    }
                },
                recomputeOpacityOn: function recomputeOpacityOn(t) {
                    if (window.getComputedStyle) return window.getComputedStyle(t).opacity;
                },
                updateButtonMap: function updateButtonMap(t) {
                    var e = (function getButtonMap(t) {
                        return t
                            .map(function () {
                                var t = a()(this),
                                    e = t.offset(),
                                    i = e.left + parseInt(t.css("margin-left"), 10),
                                    n = e.top + parseInt(t.css("margin-top"), 10);
                                return { top: n, right: i + t.width(), bottom: n + t.height(), left: i, el: this, links: {} };
                            })
                            .get();
                    })(t);
                    function isBetween(t, e, i) {
                        return r.a.min([e, i]) <= t && r.a.max([e, i]) >= t;
                    }
                    function closest(t, e) {
                        var i = (e.left + e.right) / 2,
                            n = (e.top + e.bottom) / 2;
                        return r.a.first(
                            r.a.sortBy(t, function (t) {
                                var e = (t.left + t.right) / 2,
                                    a = (t.top + t.bottom) / 2,
                                    s = Math.abs(e - i),
                                    r = Math.abs(a - n);
                                return Math.sqrt(s * s + r * r);
                            })
                        );
                    }
                    function areAligned(t, e, i, n) {
                        return isBetween(i, t, e) || isBetween(n, t, e) || (isBetween(t, i, n) && isBetween(e, i, n));
                    }
                    return (
                        r.a.each(e, function (t) {
                            var i,
                                n,
                                a,
                                s,
                                r = [],
                                o = [];
                            for (s = 0; s < e.length; s++) (a = e[s]) !== t && (areAligned(t.top, t.bottom, a.top, a.bottom) && a.left >= t.right && r.push(a), areAligned(t.left, t.right, a.left, a.right) && a.top >= t.bottom && o.push(a));
                            (i = closest(r, t)), (n = closest(o, t)), i && ((t.links.RIGHT = i), (i.links.LEFT = t)), n && ((t.links.DOWN = n), (n.links.UP = t));
                        }),
                        e
                    );
                },
                toggleBackgroundClickable: function toggleBackgroundClickable(t) {
                    var e = a()("html"),
                        i = e
                            .map(function () {
                                return a()(this).css("cursor");
                            })
                            .get();
                    t && !r.a.isEqual(i, ["pointer"]) && ((this.cachedHtmlCursorStyle = i), e.css("cursor", "pointer")),
                        !t &&
                            this.cachedHtmlCursorStyle &&
                            r.a.each(this.cachedHtmlCursorStyle, function (t, i) {
                                e.eq(i).css("cursor", "auto" === t ? "" : t);
                            });
                },
                isElementVisible: function isElementVisible(t) {
                    return !!t.offsetParent && "hidden" !== getComputedStyle(t).getPropertyValue("visibility");
                },
                focusable: function focusable(t, e) {
                    var i,
                        n,
                        s,
                        r = t.nodeName.toLowerCase();
                    return "area" === r
                        ? ((n = (i = t.parentNode).name), !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) && !!(s = a()('img[usemap="#' + n + '"]')[0]) && this.isElementVisible(s))
                        : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : ("a" === r && t.href) || e) && this.isElementVisible(t);
                },
                getNextTab: function getNextTab(t, e) {
                    var i,
                        n,
                        s,
                        o,
                        l,
                        c = !1,
                        u = !1,
                        h = this,
                        d = !0;
                    return (
                        a()(document)
                            .find("*")
                            .each(function (p, m) {
                                return (
                                    (n = a()(m)),
                                    (s = n.attr("tabindex")),
                                    (o = isNaN(s)),
                                    (i = (o || s >= 0) && h.focusable(m, !o)),
                                    (l = !1),
                                    r.a.isArray(e) &&
                                        r.a.each(e, function (t) {
                                            n.hasClass(t) && (l = !0);
                                        }),
                                    !!l || (!u && i && (u = n), c && i ? ((d = !1), (u = n), !1) : void (i && m === t && (c = !0)))
                                );
                            }),
                        !!u && { nextTabElement: u, isFirstElement: d }
                    );
                },
                detectRenderEnd: function detectRenderEnd(t, e) {
                    var i = this,
                        n = { childList: !0, subtree: !0, attributes: !0 };
                    return new l.default(function (a) {
                        var s, r;
                        function resolveSoon() {
                            clearTimeout(s),
                                (s = setTimeout(function () {
                                    i.unobserveMutation(r, t, resolveSoon), a();
                                }, e));
                        }
                        (r = i.observeMutation(t, n, resolveSoon)), resolveSoon();
                    });
                },
            };
        },
        133: function (t, e, i) {
            "use strict";
            i.d(e, "b", function () {
                return isArrowKey;
            }),
                i.d(e, "c", function () {
                    return isEnterOrSpace;
                });
            var n = i(0),
                a = i.n(n);
            function isArrowKey(t) {
                return a.a.contains([37, 38, 39, 40], t);
            }
            function isEnterOrSpace(t) {
                return 32 === t || 13 === t;
            }
            e.a = {
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                ESCAPE: 27,
                ENTER: 13,
                TAB: 9,
                SHIFT: 16,
                SPACE: 32,
                DELETE: 46,
                ADD_EQUAL: 187,
                FF_ADD_EQUAL: 61,
                NUM_PAD_ADD: 107,
                MINUS: 189,
                FF_MINUS: 173,
                NUM_PAD_MINUS: 109,
                NUM_PAD_MULTIPLY: 106,
                DIVIDE: 191,
                NUM_PAD_DIVIDE: 111,
                DECIMAL: 190,
                NUM_PAD_DECIMAL: 110,
                NUMBER_0: 48,
                NUMBER_1: 49,
                NUMBER_2: 50,
                NUMBER_3: 51,
                NUMBER_4: 52,
                NUMBER_5: 53,
                NUMBER_6: 54,
                NUMBER_7: 55,
                NUMBER_8: 56,
                NUMBER_9: 57,
                NUM_PAD_0: 96,
                NUM_PAD_1: 97,
                NUM_PAD_2: 98,
                NUM_PAD_3: 99,
                NUM_PAD_4: 100,
                NUM_PAD_5: 101,
                NUM_PAD_6: 102,
                NUM_PAD_7: 103,
                NUM_PAD_8: 104,
                NUM_PAD_9: 105,
            };
        },
        139: function (t, e, i) {
            "use strict";
            i.d(e, "c", function () {
                return getViewportDimensions;
            }),
                i.d(e, "b", function () {
                    return getElementDocumentBounding;
                });
            var n = i(0),
                a = i.n(n),
                s = document.documentElement;
            function getViewportScroll() {
                return { left: window.pageXOffset || s.scrollLeft, top: window.pageYOffset || s.scrollTop };
            }
            function getViewportDimensions() {
                var t = getViewportScroll();
                return { top: t.top, left: t.left, width: document.documentElement.clientWidth || document.body.clientWidth, height: document.documentElement.clientHeight || document.body.clientHeight };
            }
            function getDocumentDimensions() {
                var t = document.body,
                    e = document.documentElement;
                return { width: Math.max(t.scrollWidth, t.offsetWidth, e.clientWidth, e.scrollWidth, e.offsetWidth), height: Math.max(t.scrollHeight, t.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight) };
            }
            function getElementDocumentBounding(t) {
                var e = t.getBoundingClientRect(),
                    i = getViewportScroll();
                return { top: e.top + i.top, left: e.left + i.left, width: e.width, height: e.height };
            }
            e.a = {
                relativeToElement: function relativeToElement(t, e, i) {
                    var n = a.a.extend({ gap: 0, viewportGap: 5, centerAlign: !0 }, i),
                        s = n.gap,
                        r = getElementDocumentBounding(e),
                        o = n.centerAlign ? r.width / 2 : 0,
                        l = getElementDocumentBounding(t),
                        c = n.centerAlign ? l.width / 2 : 0,
                        u = n.viewportGap,
                        h = getViewportDimensions(),
                        d = getDocumentDimensions(),
                        p = l.top + l.height + s,
                        m = d.height - p,
                        f = (l.top - h.top < h.height + h.top - p && m > r.height) || p < r.height,
                        b = l.left + c - o,
                        g = p,
                        y = "bottom";
                    return (
                        r.width >= h.width ? (b = 0) : b + r.width > h.width ? (b = h.width - r.width - u) : b < 0 && (b = u),
                        g + r.height > h.top + h.height && ((g = l.top - r.height - s), (y = "top")),
                        (g < 0 || f) && ((g = p), (y = "bottom")),
                        { left: b, top: g, position: y }
                    );
                },
                getViewportScroll: getViewportScroll,
                getViewportDimensions: getViewportDimensions,
                getViewportCenter: function getViewportCenter() {
                    var t = getViewportDimensions();
                    return { x: t.left + t.width / 2, y: t.top + t.height / 2 };
                },
                getDocumentDimensions: getDocumentDimensions,
                getElementDocumentBounding: getElementDocumentBounding,
                getPositionRelativeToParent: function getPositionRelativeToParent(t, e) {
                    var i = getElementDocumentBounding(t),
                        n = getElementDocumentBounding(e);
                    return { top: i.top - n.top, left: i.left - n.left };
                },
            };
        },
        141: function (t, e, i) {
            "use strict";
            i(5), i(1);
            var n = i(0),
                a = i.n(n),
                s = i(160),
                r = [
                    { key: "mathrm", latex: "\\mathrm" },
                    { key: "mathit", latex: "\\mathit" },
                    { key: "mathbf", latex: "\\mathbf" },
                    { key: "mathsf", latex: "\\mathsf" },
                    { key: "mathtt", latex: "\\mathtt" },
                    { key: "underline", latex: "\\underline" },
                    { key: "bar", latex: "\\overline" },
                    { key: "overline", latex: "\\overline" },
                    { key: "_", latex: "_" },
                    { key: "subscript", latex: "_" },
                    { key: "^", latex: "^" },
                    { key: "supscript", latex: "^" },
                    { key: "superscript", latex: "^" },
                    { key: "fraction", latex: "\\frac" },
                    { key: "cfrac", latex: "\\frac" },
                    { key: "dfrac", latex: "\\frac" },
                    { key: "frac", latex: "\\frac" },
                    { key: "over", latex: "\\frac" },
                    { key: "√", latex: "\\sqrt" },
                    { key: "sqrt", latex: "\\sqrt" },
                    { key: "vec", latex: "\\vec" },
                    { key: "nthroot", latex: "\\sqrt" },
                    { key: "lbrace", latex: "\\left\\{\\right\\}" },
                    { key: "lang", latex: "\\left\\langle \\right\\rangle " },
                    { key: "langle", latex: "\\left\\langle \\right\\rangle " },
                    { key: "rbrace", latex: "\\left\\{\\right\\}" },
                    { key: "rang", latex: "\\left\\langle \\right\\rangle " },
                    { key: "rangle", latex: "\\left\\langle \\right\\rangle " },
                    { key: "lparen", latex: "\\left(\\right)" },
                    { key: "lbracket", latex: "\\left[\\right]" },
                    { key: "lbrack", latex: "\\left[\\right]" },
                    { key: "rparen", latex: "\\left(\\right)" },
                    { key: "rbracket", latex: "\\left[\\right]" },
                    { key: "rbrack", latex: "\\left[\\right]" },
                    { key: "rpipe", latex: "\\left|\\right|" },
                    { key: "lpipe", latex: "\\left|\\right|" },
                    { key: "textmd", latex: "\\text" },
                    { key: "textup", latex: "\\text" },
                    { key: "textrm", latex: "\\text" },
                    { key: "textnormal", latex: "\\text" },
                    { key: "text", latex: "\\text" },
                    { key: "textsl", latex: "\\textit" },
                    { key: "textit", latex: "\\textit" },
                    { key: "emph", latex: "\\textit" },
                    { key: "italics", latex: "\\textit" },
                    { key: "italic", latex: "\\textit" },
                    { key: "em", latex: "\\textit" },
                    { key: "textbf", latex: "\\textbf" },
                    { key: "bold", latex: "\\textbf" },
                    { key: "strong", latex: "\\textbf" },
                    { key: "textsf", latex: "\\textsf" },
                    { key: "sf", latex: "\\textsf" },
                    { key: "texttt", latex: "\\texttt" },
                    { key: "tt", latex: "\\texttt" },
                    { key: "textsc", latex: "\\textsc" },
                    { key: "uppercase", latex: "\\uppercase" },
                    { key: "lowercase", latex: "\\lowercase" },
                    { key: "binomial", latex: "\\binom" },
                    { key: "binom", latex: "\\binom" },
                    { key: "matrix", latex: "\\matrix" },
                    { key: "pmatrix", latex: "\\pmatrix" },
                    { key: "bmatrix", latex: "\\bmatrix" },
                    { key: "Bmatrix", latex: "\\Bmatrix" },
                    { key: "vmatrix", latex: "\\vmatrix" },
                    { key: "Vmatrix", latex: "\\Vmatrix" },
                    { key: "choose", latex: "\\binom" },
                    { key: "vector", latex: "\\vector" },
                    { key: "editable", latex: "\\editable" },
                    { key: "f", latex: "f" },
                    { key: "prime", latex: "'" },
                    { key: "&", latex: "\\&" },
                    { key: "%", latex: "\\%" },
                    { key: "phi", latex: "\\phi " },
                    { key: "varphi", latex: "\\varphi " },
                    { key: "phiv", latex: "\\varphi " },
                    { key: "epsilon", latex: "\\epsilon " },
                    { key: "varepsilon", latex: "\\varepsilon " },
                    { key: "epsiv", latex: "\\varepsilon " },
                    { key: "varpi", latex: "\\varpi " },
                    { key: "piv", latex: "\\varpi " },
                    { key: "varsigma", latex: "\\varsigma " },
                    { key: "sigmav", latex: "\\varsigma " },
                    { key: "sigmaf", latex: "\\varsigma " },
                    { key: "thetasym", latex: "\\vartheta " },
                    { key: "vartheta", latex: "\\vartheta " },
                    { key: "thetav", latex: "\\vartheta " },
                    { key: "upsi", latex: "\\upsilon " },
                    { key: "upsilon", latex: "\\upsilon " },
                    { key: "digamma", latex: "\\digamma " },
                    { key: "Gammad", latex: "\\digamma " },
                    { key: "gammad", latex: "\\digamma " },
                    { key: "varkappa", latex: "\\varkappa " },
                    { key: "kappav", latex: "\\varkappa " },
                    { key: "varrho", latex: "\\varrho " },
                    { key: "rhov", latex: "\\varrho " },
                    { key: "π", latex: "\\pi " },
                    { key: "pi", latex: "\\pi " },
                    { key: "lambda", latex: "\\lambda " },
                    { key: "Upsih", latex: "\\Upsilon " },
                    { key: "upsih", latex: "\\Upsilon " },
                    { key: "Upsi", latex: "\\Upsilon " },
                    { key: "Upsilon", latex: "\\Upsilon " },
                    { key: "+", latex: "+" },
                    { key: "-", latex: "-" },
                    { key: "–", latex: "-" },
                    { key: "plusminus", latex: "\\pm " },
                    { key: "plusmn", latex: "\\pm " },
                    { key: "pm", latex: "\\pm " },
                    { key: "±", latex: "\\pm " },
                    { key: "minusplus", latex: "\\mp " },
                    { key: "mnplus", latex: "\\mp " },
                    { key: "mp", latex: "\\mp " },
                    { key: "response", latex: "\\response " },
                    { key: "cdot", latex: "\\cdot " },
                    { key: "sdot", latex: "\\cdot " },
                    { key: "=", latex: "=" },
                    { key: "<", latex: "<" },
                    { key: ">", latex: ">" },
                    { key: "times", latex: "\\times " },
                    { key: "divides", latex: "\\div " },
                    { key: "divide", latex: "\\div " },
                    { key: "div", latex: "\\div " },
                    { key: "neq", latex: "\\ne " },
                    { key: "ne", latex: "\\ne " },
                    { key: "≠", latex: "\\ne " },
                    { key: "lowast", latex: "\\ast " },
                    { key: "loast", latex: "\\ast " },
                    { key: "star", latex: "\\ast " },
                    { key: "ast", latex: "\\ast " },
                    { key: "therefore", latex: "\\therefore " },
                    { key: "therefor", latex: "\\therefore " },
                    { key: "because", latex: "\\because " },
                    { key: "cuz", latex: "\\because " },
                    { key: "propto", latex: "\\propto " },
                    { key: "prop", latex: "\\propto " },
                    { key: "approx", latex: "\\approx " },
                    { key: "asymp", latex: "\\approx " },
                    { key: "≈", latex: "\\approx " },
                    { key: "lt", latex: "<" },
                    { key: "gt", latex: ">" },
                    { key: "leq", latex: "\\le " },
                    { key: "le", latex: "\\le " },
                    { key: "≤", latex: "\\le " },
                    { key: "geq", latex: "\\ge " },
                    { key: "ge", latex: "\\ge " },
                    { key: "≥", latex: "\\ge " },
                    { key: "isin", latex: "\\in " },
                    { key: "contains", latex: "\\ni " },
                    { key: "ni", latex: "\\ni " },
                    { key: "doesnotcontain", latex: "\\not\\ni " },
                    { key: "notcontains", latex: "\\not\\ni " },
                    { key: "niton", latex: "\\not\\ni " },
                    { key: "notni", latex: "\\not\\ni " },
                    { key: "subset", latex: "\\subset " },
                    { key: "sub", latex: "\\subset " },
                    { key: "superset", latex: "\\supset " },
                    { key: "supset", latex: "\\supset " },
                    { key: "sup", latex: "\\supset " },
                    { key: "notsubset", latex: "\\not\\subset " },
                    { key: "nsubset", latex: "\\not\\subset " },
                    { key: "notsub", latex: "\\not\\subset " },
                    { key: "nsub", latex: "\\not\\subset " },
                    { key: "notsuperset", latex: "\\not\\supset " },
                    { key: "nsuperset", latex: "\\not\\supset " },
                    { key: "notsupset", latex: "\\not\\supset " },
                    { key: "nsupset", latex: "\\not\\supset " },
                    { key: "notsup", latex: "\\not\\supset " },
                    { key: "nsup", latex: "\\not\\supset " },
                    { key: "subseteq", latex: "\\subseteq " },
                    { key: "subsete", latex: "\\subseteq " },
                    { key: "subeq", latex: "\\subseteq " },
                    { key: "sube", latex: "\\subseteq " },
                    { key: "superseteq", latex: "\\supseteq " },
                    { key: "supersete", latex: "\\supseteq " },
                    { key: "supseteq", latex: "\\supseteq " },
                    { key: "supsete", latex: "\\supseteq " },
                    { key: "supeq", latex: "\\supseteq " },
                    { key: "supe", latex: "\\supseteq " },
                    { key: "notsubseteq", latex: "\\not\\subseteq " },
                    { key: "notsubsete", latex: "\\not\\subseteq " },
                    { key: "nsubseteq", latex: "\\not\\subseteq " },
                    { key: "nsubsete", latex: "\\not\\subseteq " },
                    { key: "notsubeq", latex: "\\not\\subseteq " },
                    { key: "notsube", latex: "\\not\\subseteq " },
                    { key: "nsubeq", latex: "\\not\\subseteq " },
                    { key: "nsube", latex: "\\not\\subseteq " },
                    { key: "notsuperseteq", latex: "\\not\\supseteq " },
                    { key: "notsupersete", latex: "\\not\\supseteq " },
                    { key: "nsuperseteq", latex: "\\not\\supseteq " },
                    { key: "nsupersete", latex: "\\not\\supseteq " },
                    { key: "notsupseteq", latex: "\\not\\supseteq " },
                    { key: "notsupsete", latex: "\\not\\supseteq " },
                    { key: "nsupseteq", latex: "\\not\\supseteq " },
                    { key: "nsupsete", latex: "\\not\\supseteq " },
                    { key: "notsupeq", latex: "\\not\\supseteq " },
                    { key: "notsupe", latex: "\\not\\supseteq " },
                    { key: "nsupeq", latex: "\\not\\supseteq " },
                    { key: "nsupe", latex: "\\not\\supseteq " },
                    { key: "summation", latex: "\\sum " },
                    { key: "sum", latex: "\\sum " },
                    { key: "∑", latex: "\\sum " },
                    { key: "product", latex: "\\prod " },
                    { key: "prod", latex: "\\prod " },
                    { key: "∏", latex: "\\prod " },
                    { key: "coproduct", latex: "\\coprod " },
                    { key: "coprod", latex: "\\coprod " },
                    { key: "integral", latex: "\\int " },
                    { key: "int", latex: "\\int " },
                    { key: "∫", latex: "\\int " },
                    { key: "Naturals", latex: "\\mathbb{N}" },
                    { key: "naturals", latex: "\\mathbb{N}" },
                    { key: "Probability", latex: "\\mathbb{P}" },
                    { key: "probability", latex: "\\mathbb{P}" },
                    { key: "Projective", latex: "\\mathbb{P}" },
                    { key: "projective", latex: "\\mathbb{P}" },
                    { key: "Primes", latex: "\\mathbb{P}" },
                    { key: "primes", latex: "\\mathbb{P}" },
                    { key: "P", latex: "\\mathbb{P}" },
                    { key: "Integers", latex: "\\mathbb{Z}" },
                    { key: "integers", latex: "\\mathbb{Z}" },
                    { key: "Rationals", latex: "\\mathbb{Q}" },
                    { key: "rationals", latex: "\\mathbb{Q}" },
                    { key: "Q", latex: "\\mathbb{Q}" },
                    { key: "Reals", latex: "\\mathbb{R}" },
                    { key: "reals", latex: "\\mathbb{R}" },
                    { key: "ComplexPlane", latex: "\\mathbb{C}" },
                    { key: "Complexplane", latex: "\\mathbb{C}" },
                    { key: "complexplane", latex: "\\mathbb{C}" },
                    { key: "Complexes", latex: "\\mathbb{C}" },
                    { key: "complexes", latex: "\\mathbb{C}" },
                    { key: "Complex", latex: "\\mathbb{C}" },
                    { key: "complex", latex: "\\mathbb{C}" },
                    { key: "C", latex: "\\mathbb{C}" },
                    { key: "Quaternions", latex: "\\mathbb{H}" },
                    { key: "quaternions", latex: "\\mathbb{H}" },
                    { key: "Hamiltonian", latex: "\\mathbb{H}" },
                    { key: "emsp", latex: "\\quad " },
                    { key: "quad", latex: "\\quad " },
                    { key: "qquad", latex: "\\qquad " },
                    { key: "diamond", latex: "\\diamond " },
                    { key: "bigtriangleup", latex: "\\bigtriangleup " },
                    { key: "ominus", latex: "\\ominus " },
                    { key: "uplus", latex: "\\uplus " },
                    { key: "bigtriangledown", latex: "\\bigtriangledown " },
                    { key: "sqcap", latex: "\\sqcap " },
                    { key: "triangleleft", latex: "\\triangleleft " },
                    { key: "sqcup", latex: "\\sqcup " },
                    { key: "triangleright", latex: "\\triangleright " },
                    { key: "odot", latex: "\\odot " },
                    { key: "bigcirc", latex: "\\bigcirc " },
                    { key: "dagger", latex: "\\dagger " },
                    { key: "ddagger", latex: "\\ddagger " },
                    { key: "wr", latex: "\\wr " },
                    { key: "amalg", latex: "\\amalg " },
                    { key: "models", latex: "\\models " },
                    { key: "prec", latex: "\\prec " },
                    { key: "succ", latex: "\\succ " },
                    { key: "preceq", latex: "\\preceq " },
                    { key: "succeq", latex: "\\succeq " },
                    { key: "simeq", latex: "\\simeq " },
                    { key: "mid", latex: "\\mid " },
                    { key: "ll", latex: "\\ll " },
                    { key: "gg", latex: "\\gg " },
                    { key: "parallel", latex: "\\parallel " },
                    { key: "bowtie", latex: "\\bowtie " },
                    { key: "sqsubset", latex: "\\sqsubset " },
                    { key: "sqsupset", latex: "\\sqsupset " },
                    { key: "smile", latex: "\\smile " },
                    { key: "sqsubseteq", latex: "\\sqsubseteq " },
                    { key: "sqsupseteq", latex: "\\sqsupseteq " },
                    { key: "doteq", latex: "\\doteq " },
                    { key: "frown", latex: "\\frown " },
                    { key: "vdash", latex: "\\vdash " },
                    { key: "dashv", latex: "\\dashv " },
                    { key: "longleftarrow", latex: "\\longleftarrow " },
                    { key: "longrightarrow", latex: "\\longrightarrow " },
                    { key: "Longleftarrow", latex: "\\Longleftarrow " },
                    { key: "Longrightarrow", latex: "\\Longrightarrow " },
                    { key: "longleftrightarrow", latex: "\\longleftrightarrow " },
                    { key: "updownarrow", latex: "\\updownarrow " },
                    { key: "Longleftrightarrow", latex: "\\Longleftrightarrow " },
                    { key: "Updownarrow", latex: "\\Updownarrow " },
                    { key: "mapsto", latex: "\\mapsto " },
                    { key: "nearrow", latex: "\\nearrow " },
                    { key: "hookleftarrow", latex: "\\hookleftarrow " },
                    { key: "hookrightarrow", latex: "\\hookrightarrow " },
                    { key: "searrow", latex: "\\searrow " },
                    { key: "leftharpoonup", latex: "\\leftharpoonup " },
                    { key: "rightharpoonup", latex: "\\rightharpoonup " },
                    { key: "swarrow", latex: "\\swarrow " },
                    { key: "leftharpoondown", latex: "\\leftharpoondown " },
                    { key: "rightharpoondown", latex: "\\rightharpoondown " },
                    { key: "nwarrow", latex: "\\nwarrow " },
                    { key: "ldots", latex: "\\ldots " },
                    { key: "cdots", latex: "\\cdots " },
                    { key: "vdots", latex: "\\vdots " },
                    { key: "ddots", latex: "\\ddots " },
                    { key: "surd", latex: "\\surd " },
                    { key: "triangle", latex: "\\triangle " },
                    { key: "ell", latex: "\\ell " },
                    { key: "top", latex: "\\top " },
                    { key: "flat", latex: "\\flat " },
                    { key: "natural", latex: "\\natural " },
                    { key: "sharp", latex: "\\sharp " },
                    { key: "wp", latex: "\\wp " },
                    { key: "bot", latex: "\\bot " },
                    { key: "clubsuit", latex: "\\clubsuit " },
                    { key: "diamondsuit", latex: "\\diamondsuit " },
                    { key: "heartsuit", latex: "\\heartsuit " },
                    { key: "spadesuit", latex: "\\spadesuit " },
                    { key: "oint", latex: "\\oint " },
                    { key: "bigcap", latex: "\\bigcap " },
                    { key: "bigcup", latex: "\\bigcup " },
                    { key: "bigsqcup", latex: "\\bigsqcup " },
                    { key: "bigvee", latex: "\\bigvee " },
                    { key: "bigwedge", latex: "\\bigwedge " },
                    { key: "bigodot", latex: "\\bigodot " },
                    { key: "bigotimes", latex: "\\bigotimes " },
                    { key: "bigoplus", latex: "\\bigoplus " },
                    { key: "biguplus", latex: "\\biguplus " },
                    { key: "lfloor", latex: "\\lfloor " },
                    { key: "rfloor", latex: "\\rfloor " },
                    { key: "lceil", latex: "\\lceil " },
                    { key: "rceil", latex: "\\rceil " },
                    { key: "slash", latex: "\\slash " },
                    { key: "opencurlybrace", latex: "\\opencurlybrace " },
                    { key: "closecurlybrace", latex: "\\closecurlybrace " },
                    { key: "caret", latex: "\\caret " },
                    { key: "underscore", latex: "\\underscore " },
                    { key: "backslash", latex: "\\backslash " },
                    { key: "vert", latex: "|" },
                    { key: "perpendicular", latex: "\\perp " },
                    { key: "perp", latex: "\\perp " },
                    { key: "del", latex: "\\nabla " },
                    { key: "nabla", latex: "\\nabla " },
                    { key: "hbar", latex: "\\hbar " },
                    { key: "angstrom", latex: "\\text\\AA " },
                    { key: "Angstrom", latex: "\\text\\AA " },
                    { key: "AA", latex: "\\text\\AA " },
                    { key: "circle", latex: "\\circ " },
                    { key: "circ", latex: "\\circ " },
                    { key: "ring", latex: "\\circ " },
                    { key: "bullet", latex: "\\bullet " },
                    { key: "bull", latex: "\\bullet " },
                    { key: "smallsetminus", latex: "\\setminus " },
                    { key: "setminus", latex: "\\setminus " },
                    { key: "neg", latex: "\\neg " },
                    { key: "¬", latex: "\\neg " },
                    { key: "not", latex: "\\neg " },
                    { key: "hellipsis", latex: "\\dots " },
                    { key: "ellipsis", latex: "\\dots " },
                    { key: "hellip", latex: "\\dots " },
                    { key: "ellip", latex: "\\dots " },
                    { key: "dots", latex: "\\dots " },
                    { key: "…", latex: "\\dots " },
                    { key: "downarrow", latex: "\\downarrow " },
                    { key: "dnarrow", latex: "\\downarrow " },
                    { key: "dnarr", latex: "\\downarrow " },
                    { key: "darr", latex: "\\downarrow " },
                    { key: "converges", latex: "\\downarrow " },
                    { key: "Downarrow", latex: "\\Downarrow " },
                    { key: "dnArrow", latex: "\\Downarrow " },
                    { key: "dnArr", latex: "\\Downarrow " },
                    { key: "dArr", latex: "\\Downarrow " },
                    { key: "uparrow", latex: "\\uparrow " },
                    { key: "uarr", latex: "\\uparrow " },
                    { key: "diverges", latex: "\\uparrow " },
                    { key: "Uparrow", latex: "\\Uparrow " },
                    { key: "uArr", latex: "\\Uparrow " },
                    { key: "to", latex: "\\to " },
                    { key: "rightarrow", latex: "\\rightarrow " },
                    { key: "rarr", latex: "\\rightarrow " },
                    { key: "implies", latex: "\\Rightarrow " },
                    { key: "Rightarrow", latex: "\\Rightarrow " },
                    { key: "rArr", latex: "\\Rightarrow " },
                    { key: "gets", latex: "\\gets " },
                    { key: "leftarrow", latex: "\\leftarrow " },
                    { key: "larr", latex: "\\leftarrow " },
                    { key: "impliedby", latex: "\\Leftarrow " },
                    { key: "Leftarrow", latex: "\\Leftarrow " },
                    { key: "lArr", latex: "\\Leftarrow " },
                    { key: "leftrightarrow", latex: "\\leftrightarrow " },
                    { key: "lrarr", latex: "\\leftrightarrow " },
                    { key: "harr", latex: "\\leftrightarrow " },
                    { key: "iff", latex: "\\Leftrightarrow " },
                    { key: "Leftrightarrow", latex: "\\Leftrightarrow " },
                    { key: "lrArr", latex: "\\Leftrightarrow " },
                    { key: "hArr", latex: "\\Leftrightarrow " },
                    { key: "real", latex: "\\Re " },
                    { key: "Real", latex: "\\Re " },
                    { key: "Re", latex: "\\Re " },
                    { key: "Imaginary", latex: "\\Im " },
                    { key: "imaginary", latex: "\\Im " },
                    { key: "imagin", latex: "\\Im " },
                    { key: "image", latex: "\\Im " },
                    { key: "imag", latex: "\\Im " },
                    { key: "Im", latex: "\\Im " },
                    { key: "partial", latex: "\\partial " },
                    { key: "part", latex: "\\partial " },
                    { key: "infinity", latex: "\\infty " },
                    { key: "infty", latex: "\\infty " },
                    { key: "infin", latex: "\\infty " },
                    { key: "inf", latex: "\\infty " },
                    { key: "alephsym", latex: "\\aleph " },
                    { key: "aleph", latex: "\\aleph " },
                    { key: "alefsym", latex: "\\aleph " },
                    { key: "alef", latex: "\\aleph " },
                    { key: "exists", latex: "\\exists " },
                    { key: "exist", latex: "\\exists " },
                    { key: "xists", latex: "\\exists " },
                    { key: "xist", latex: "\\exists " },
                    { key: "wedge", latex: "\\wedge " },
                    { key: "land", latex: "\\wedge " },
                    { key: "and", latex: "\\wedge " },
                    { key: "vee", latex: "\\vee " },
                    { key: "lor", latex: "\\vee " },
                    { key: "or", latex: "\\vee " },
                    { key: "varnothing", latex: "\\varnothing " },
                    { key: "nothing", latex: "\\varnothing " },
                    { key: "Oslash", latex: "\\varnothing " },
                    { key: "oslash", latex: "\\varnothing " },
                    { key: "emptyset", latex: "\\varnothing " },
                    { key: "empty", latex: "\\varnothing " },
                    { key: "union", latex: "\\cup " },
                    { key: "intersection", latex: "\\cap " },
                    { key: "intersect", latex: "\\cap " },
                    { key: "cap", latex: "\\cap " },
                    { key: "degree", latex: "^\\circ " },
                    { key: "deg", latex: "^\\circ " },
                    { key: "angle", latex: "\\angle " },
                    { key: "ang", latex: "\\angle " },
                ],
                o = a.a.unique(a.a.pluck(r, "latex")),
                l = [];
            function strTrim(t) {
                return String.prototype.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
            }
            a.a.each(o, function (t) {
                var e,
                    i = strTrim(t);
                a.a.contains(["\\varsigma", "\\vartheta"], i) && (i = i.replace("\\var", "\\")), (e = { id: i, aliases: a.a.map(a.a.pluck(a.a.where(r, { latex: t }), "key"), strTrim) }), l.push(e);
            });
            var c,
                u = new s.a(l),
                h = [
                    { id: "", label: "empty", title: "", numberpad_and_keypad: !0 },
                    { id: "x", label: "x", type: "write", val: "x", shortcut: ["x"], title: "x", name: "x", label_latex: !0 },
                    { id: "y", label: "y", type: "write", val: "y", shortcut: ["y"], title: "y", name: "y", label_latex: !0 },
                    { id: "z", label: "z", type: "write", val: "z", shortcut: ["z"], title: "z", name: "z", label_latex: !0 },
                    { id: "a", label: "a", type: "write", val: "a", shortcut: ["a"], title: "a", name: "a", label_latex: !0 },
                    { id: "b", label: "b", type: "write", val: "b", shortcut: ["b"], title: "b", name: "b", label_latex: !0 },
                    { id: "c", label: "c", type: "write", val: "c", shortcut: ["c"], title: "c", name: "c", label_latex: !0 },
                    { id: "d", label: "d", type: "write", val: "d", shortcut: ["d"], title: "d", name: "d", label_latex: !0 },
                    { id: "f", label: "f", type: "write", val: "f", shortcut: ["f"], title: "f", name: "f", label_latex: !0 },
                    { id: "abc", label: "abc", type: "write", val: "\\text{abc}", shortcut: ["toggle", "abc"], title: "abc", name: "abc" },
                    { id: ",", label: ",", type: "write", val: ",", shortcut: [], title: "" },
                    { id: "'", label: "\\prime", type: "write", val: "'", shortcut: [], title: "Prime/Arcminute", name: "prime" },
                    { id: '"', label: "\\doublePrime", type: "write", val: '"', shortcut: [], title: "Double Prime/Arcsecond", name: "doubleprime" },
                    { id: "\\$", label: "$", type: "write", val: "\\$", shortcut: [], title: "Dollars", name: "dollars" },
                    { id: "+", label: "+", type: "write", val: "+", shortcut: ["+"], title: "Plus", name: "plus" },
                    { id: "-", label: "-", type: "write", val: "-", shortcut: ["-"], title: "Minus", name: "minus" },
                    { id: "\\times", label: "×", type: "write", val: "\\times", shortcut: ["*"], title: "Multiply", name: "times" },
                    { id: "\\div", label: "÷", type: "write", val: "\\div", shortcut: ["toggle", "/"], title: "Divide", name: "div" },
                    { id: "\\pm", label: "±", type: "write", val: "\\pm", shortcut: ["toggle", "pm"], title: "Plus or minus", name: "pm" },
                    { id: "=", label: "=", type: "write", val: "=", shortcut: ["="], title: "Equals", name: "equals" },
                    { id: ">", label: ">", type: "write", val: ">", shortcut: [">"], title: "Greater than", name: "greater" },
                    { id: "<", label: "<", type: "write", val: "<", shortcut: ["<"], title: "Less than", name: "less" },
                    { id: "\\ge", label: "≥", type: "write", val: "\\ge", shortcut: ["toggle", "gte"], title: "Greater than or equal to", name: "ge" },
                    { id: "\\le", label: "≤", type: "write", val: "\\le", shortcut: ["toggle", "lte"], title: "Less than or equal to", name: "le" },
                    { id: "\\ne", label: "≠", type: "write", val: "\\neq", shortcut: ["toggle", "ne"], title: "Not equal to", name: "ne" },
                    { id: "\\approx", label: "≈", type: "write", val: "\\approx", shortcut: ["toggle", "ae"], title: "Approximately equal to", name: "approx" },
                    { id: "\\perp", label: "\\perp", type: "write", val: "\\perp", shortcut: ["toggle", "pr"], title: "Perpendicular to", name: "perp" },
                    { id: "\\nsim", label: "≁", type: "write", val: "\\nsim", shortcut: ["toggle", "nsim"], title: "Not similar", name: "nsim" },
                    { id: "\\ncong", label: "≇", type: "write", val: "\\ncong", shortcut: ["toggle", "ncong"], title: "Not congruent", name: "ncong" },
                    { id: "\\propto", label: "\\propto", type: "write", val: "\\propto", shortcut: ["toggle", "pl"], title: "Proportional to", name: "propto" },
                    { id: "\\mid", label: "|", type: "write", val: "|", shortcut: [], title: "Vertical line", name: "mid" },
                    { id: "\\ngtr", label: "\\ngtr", type: "write", val: "\\ngtr", shortcut: [], title: "Not greater than", name: "ngtr" },
                    { id: "\\nless", label: "\\nless", type: "cmd", val: "\\nless", shortcut: [], title: "Not less than", name: "nless" },
                    { id: "\\left(\\right)", label: "\\left(\\right)", type: "cmd", val: "(", shortcut: ["toggle", "rd"], title: "Group in parentheses", name: "parentheses" },
                    { id: "\\left[\\right]", label: "\\left[\\right]", type: "cmd", val: "[", shortcut: ["toggle", "sr"], title: "Group in brackets", name: "brackets" },
                    { id: "\\left\\{\\right\\}", label: "\\left\\{\\right\\}", type: "cmd", val: "{", shortcut: ["toggle", "cr"], title: "Group in curly braces", name: "curlybraces" },
                    { id: "\\left[\\right)", label: "\\left[\\right)", type: "write", val: "\\left[\\right)", shortcut: [], title: "Group in odd braces", name: "rightbraces" },
                    { id: "\\left(\\right]", label: "\\left(\\right]", type: "write", val: "\\left(\\right]", shortcut: [], title: "Group in odd braces", name: "leftbraces" },
                    { id: "[", label: "[", type: "write", val: "[", shortcut: ["["], title: "Left square bracket", name: "leftbracket" },
                    { id: "]", label: "]", type: "write", val: "]", shortcut: ["]"], title: "Right square bracket", name: "rightbracket" },
                    { id: "^", label: "x^{}", type: "cmd", val: "^", shortcut: ["^"], title: "Exponent", label_latex: !0, name: "exponent" },
                    { id: "^2", label: "x^2", type: "write", val: "^2", shortcut: ["toggle", "pt"], title: "Square", label_latex: !0, name: "square" },
                    { id: "_", label: "x_{}", type: "cmd", val: "_", shortcut: ["_"], title: "Subscript", label_latex: !0, name: "subscript" },
                    { id: "\\frac", label: "\\frac{x}{}", type: "cmd", val: "/", shortcut: ["/"], title: "Fraction using previous expression as numerator", name: "frac" },
                    {
                        id: "x\\frac{}{}",
                        label: "x\\frac{}{}",
                        type: "write",
                        val: "\\frac{}{}",
                        shortcut: ["toggle", "mf"],
                        title: "Fraction",
                        name: "fraction",
                        extra_commands: [
                            { type: "keystroke", val: "Left" },
                            { type: "keystroke", val: "Up" },
                        ],
                    },
                    {
                        id: "\\frac{}{}",
                        label: "\\frac{}{}",
                        type: "write",
                        val: "\\frac{}{}",
                        shortcut: [],
                        title: "Fraction",
                        name: "fraction",
                        extra_commands: [
                            { type: "keystroke", val: "Left" },
                            { type: "keystroke", val: "Up" },
                        ],
                    },
                    { id: ":", label: ":", type: "write", val: ":", shortcut: [":"], title: "Ratio", name: "ratio" },
                    { id: "%", label: "%", type: "write", val: "%", shortcut: ["%"], title: "Percentage", name: "percentage" },
                    { id: "\\abs", label: "\\abs{}", type: "cmd", val: "\\abs", shortcut: ["toggle", "abs"], title: "Absolute value", name: "abs" },
                    { id: "\\sqrt", label: "\\sqrt{}", type: "cmd", val: "\\sqrt", shortcut: ["toggle", "sq"], title: "Square root", name: "sqrt" },
                    { id: "\\sqrt[3]{}", label: "\\sqrt[3]{}", type: "cmd", val: "\\lrncuberoot", shortcut: ["toggle", "cb"], title: "Cube root", name: "cube" },
                    { id: "\\sqrt[n]{}", label: "\\sqrt[]{}", type: "cmd", val: "\\nthroot", shortcut: ["toggle", "nsq"], title: "Nth root", name: "nthroot" },
                    {
                        id: "\\int_{}^{}",
                        label: "\\int_{}^{}",
                        type: "write",
                        val: "\\int_{}^{}",
                        shortcut: ["toggle", "int"],
                        title: "Integral",
                        name: "int",
                        extra_commands: [
                            { type: "keystroke", val: "Left" },
                            { type: "keystroke", val: "Down" },
                        ],
                    },
                    { id: "\\sum", label: "\\sum", type: "write", val: "\\sum", shortcut: [], title: "Summation", name: "sum", label_latex: !0 },
                    { id: "\\partial", label: "\\partial", type: "write", val: "\\partial", shortcut: [], title: "Partial Derivative", name: "partial", label_latex: !0 },
                    { id: "\\lim_{x\\to {}}", label: "\\lim_{x\\to {}}", type: "write", val: "\\lim_{x\\to {}}", shortcut: [], title: "Limit x to", name: "limit", label_latex: !0 },
                    {
                        id: "\\underset{\\sim}{\\mathbf{}}",
                        label: "\\underset{\\sim}{\\mathbf{}}",
                        type: "write",
                        val: "\\underset{\\sim}{\\mathbf{}}",
                        shortcut: ["toggle", "vec"],
                        title: "Vector",
                        name: "vector",
                        extra_commands: [
                            { type: "keystroke", val: "Left" },
                            { type: "keystroke", val: "Left" },
                        ],
                        aliases: ["\\mathbf{\\underset{\\sim}{}}"],
                    },
                    { id: "\\mathbb{R}", label: "\\mathbb{R}", type: "write", val: "\\mathbb{R}", shortcut: ["toggle", "rea"], title: "Real number set", name: "mathbb" },
                    { id: "\\mathbbq", label: "\\mathbb{Q}", type: "write", val: "\\mathbb{Q}", shortcut: [], title: "Q", name: "mathbbq" },
                    { id: "\\mathbbn", label: "\\mathbb{N}", type: "write", val: "\\mathbb{N}", shortcut: [], title: "N", name: "mathbbn" },
                    { id: "\\mathbbz", label: "\\mathbb{Z}", type: "write", val: "\\mathbb{Z}", shortcut: [], title: "Z", name: "mathbbz" },
                    { id: "\\mathbbi", label: "\\mathbb{I}", type: "write", val: "\\mathbb{I}", shortcut: [], title: "I", name: "mathbbi" },
                    { id: "\\mathbbc", label: "\\mathbb{C}", type: "write", val: "\\mathbb{C}", shortcut: [], title: "C", name: "mathbbc" },
                    { id: "imaginary", label: "i", type: "write", val: "\\text{i}", shortcut: [], title: "Imaginary Number", name: "imaginary" },
                    { id: "euler", label: "e", type: "write", val: "\\text{e}", shortcut: [], title: "Euler Number", name: "euler" },
                    { id: "\\alpha", label: "\\alpha", type: "write", val: "\\alpha", shortcut: ["toggle", "al"], title: "Alpha", name: "alpha" },
                    { id: "\\beta", label: "\\beta", type: "write", val: "\\beta", shortcut: ["toggle", "be"], title: "Beta", name: "beta" },
                    { id: "\\gamma", label: "\\gamma", type: "write", val: "\\gamma", shortcut: ["toggle", "ga"], title: "Gamma", name: "gamma" },
                    { id: "\\delta", label: "\\delta", type: "write", val: "\\delta", shortcut: ["toggle", "de"], title: "Delta", name: "delta" },
                    { id: "\\epsilon", label: "\\epsilon", type: "write", val: "\\epsilon", shortcut: ["toggle", "ep"], title: "Epsilon", name: "epsilon" },
                    { id: "\\varepsilon", label: "\\varepsilon", type: "write", val: "\\varepsilon", shortcut: ["toggle", "vep"], title: "Epsilon", name: "epsilon" },
                    { id: "\\zeta", label: "\\zeta", type: "write", val: "\\zeta", shortcut: ["toggle", "ze"], title: "Zeta", name: "zeta" },
                    { id: "\\eta", label: "\\eta", type: "write", val: "\\eta", shortcut: ["toggle", "et"], title: "Eta", name: "eta" },
                    { id: "\\theta", label: "\\theta", type: "write", val: "\\theta", shortcut: ["toggle", "th"], title: "Theta", name: "theta" },
                    { id: "\\iota", label: "\\iota", type: "write", val: "\\iota", shortcut: ["toggle", "io"], title: "Iota", name: "iota" },
                    { id: "\\kappa", label: "\\kappa", type: "write", val: "\\kappa", shortcut: ["toggle", "ka"], title: "Kappa", name: "kappa" },
                    { id: "\\lambda", label: "\\lambda", type: "write", val: "\\lambda", shortcut: ["toggle", "lbd"], title: "Lambda", name: "lambda" },
                    { id: "\\mu", label: "\\mu", type: "write", val: "\\mu", shortcut: ["toggle", "mu"], title: "Mu", name: "mu" },
                    { id: "\\nu", label: "\\nu", type: "write", val: "\\nu", shortcut: ["toggle", "nu"], title: "Nu", name: "nu" },
                    { id: "\\xi", label: "\\xi", type: "write", val: "\\xi", shortcut: ["toggle", "xi"], title: "Xi", name: "xi" },
                    { id: "o", label: "o", type: "write", val: "o", shortcut: ["toggle", "omc"], title: "Omicron", name: "omicron", label_latex: !0 },
                    { id: "\\pi", label: "\\pi", type: "write", val: "\\pi", shortcut: ["toggle", "pi"], title: "Pi", name: "pi" },
                    { id: "\\rho", label: "\\rho", type: "write", val: "\\rho", shortcut: ["toggle", "rh"], title: "Rho", name: "rho" },
                    { id: "\\sigma", label: "\\sigma", type: "write", val: "\\sigma", shortcut: ["toggle", "sig"], title: "Sigma", name: "sigma" },
                    { id: "\\tau", label: "\\tau", type: "write", val: "\\tau", shortcut: ["toggle", "ta"], title: "Tau", name: "tau" },
                    { id: "\\upsilon", label: "\\upsilon", type: "write", val: "\\upsilon", shortcut: ["toggle", "ups"], title: "Upsilon", name: "upsilon" },
                    { id: "\\phi", label: "\\phi", type: "write", val: "\\phi", shortcut: ["toggle", "ph"], title: "Phi", name: "phi" },
                    { id: "\\chi", label: "\\chi", type: "write", val: "\\chi", shortcut: ["toggle", "ch"], title: "Chi", name: "chi" },
                    { id: "\\psi", label: "\\psi", type: "write", val: "\\psi", shortcut: ["toggle", "psi"], title: "Psi", name: "psi" },
                    { id: "\\omega", label: "\\omega", type: "write", val: "\\omega", shortcut: ["toggle", "omg"], title: "Omega", name: "omega" },
                    { id: "A", label: "A", type: "write", val: "A", shortcut: ["toggle", "ual"], title: "Alpha (uppercase)", name: "ALPHA", label_latex: !0 },
                    { id: "B", label: "B", type: "write", val: "B", shortcut: ["toggle", "ube"], title: "Beta (uppercase)", name: "BETA", label_latex: !0 },
                    { id: "\\Gamma", label: "\\Gamma", type: "write", val: "\\Gamma", shortcut: ["toggle", "uga"], title: "Gamma (uppercase)", name: "GAMMA" },
                    { id: "\\Delta", label: "\\Delta", type: "write", val: "\\Delta", shortcut: ["toggle", "ude"], title: "Delta (uppercase)", name: "DELTA" },
                    { id: "E", label: "E", type: "write", val: "E", shortcut: ["toggle", "uep"], title: "Epsilon (uppercase)", name: "EPSILON", label_latex: !0 },
                    { id: "Z", label: "Z", type: "write", val: "Z", shortcut: ["toggle", "uze"], title: "Zeta (uppercase)", name: "ZETA", label_latex: !0 },
                    { id: "H", label: "H", type: "write", val: "H", shortcut: ["toggle", "uet"], title: "Eta (uppercase)", name: "ETA", label_latex: !0 },
                    { id: "\\Theta", label: "\\Theta", type: "write", val: "\\Theta", shortcut: ["toggle", "uth"], title: "Theta (uppercase)", name: "THETA" },
                    { id: "I", label: "I", type: "write", val: "I", shortcut: ["toggle", "uio"], title: "Iota (uppercase)", name: "IOTA", label_latex: !0 },
                    { id: "K", label: "K", type: "write", val: "K", shortcut: ["toggle", "uka"], title: "Kappa (uppercase)", name: "KAPPA", label_latex: !0 },
                    { id: "\\Lambda", label: "\\Lambda", type: "write", val: "\\Lambda", shortcut: ["toggle", "ulbd"], title: "Lambda (uppercase)", name: "LAMBDA" },
                    { id: "M", label: "M", type: "write", val: "M", shortcut: ["toggle", "umu"], title: "Mu (uppercase)", name: "MU", label_latex: !0 },
                    { id: "N", label: "N", type: "write", val: "N", shortcut: ["toggle", "unu"], title: "Nu (uppercase)", name: "NU", label_latex: !0 },
                    { id: "\\Xi", label: "\\Xi", type: "write", val: "\\Xi", shortcut: ["toggle", "uxi"], title: "Xi (uppercase)", name: "XI" },
                    { id: "O", label: "O", type: "write", val: "O", shortcut: ["toggle", "uomc"], title: "Omicron (uppercase)", name: "OMICRON", label_latex: !0 },
                    { id: "\\Pi", label: "\\Pi", type: "write", val: "\\Pi", shortcut: ["toggle", "upi"], title: "Pi (uppercase)", name: "PI" },
                    { id: "R", label: "R", type: "write", val: "R", shortcut: ["toggle", "urh"], title: "Rho (uppercase)", name: "RHO", label_latex: !0 },
                    { id: "\\Sigma", label: "\\Sigma", type: "write", val: "\\Sigma", shortcut: ["toggle", "w"], title: "Sigma (uppercase)", name: "SIGMA" },
                    { id: "T", label: "T", type: "write", val: "T", shortcut: ["toggle", "uta"], title: "Tau (uppercase)", name: "TAU", label_latex: !0 },
                    { id: "\\Upsilon", label: "\\Upsilon", type: "write", val: "\\Upsilon", shortcut: ["toggle", "uups"], title: "Upsilon (uppercase)", name: "UPI" },
                    { id: "\\Phi", label: "\\Phi", type: "write", val: "\\Phi", shortcut: ["toggle", "uph"], title: "Phi (uppercase)", name: "PHI" },
                    { id: "X", label: "X", type: "write", val: "X", shortcut: ["toggle", "uch"], title: "Chi (uppercase)", name: "PHI", label_latex: !0 },
                    { id: "\\Psi", label: "\\Psi", type: "write", val: "\\Psi", shortcut: ["toggle", "upsi"], title: "Psi (uppercase)", name: "PSI" },
                    { id: "\\Omega", label: "\\Omega", type: "write", val: "\\Omega", shortcut: ["toggle", "uomg"], title: "Omega (uppercase)", name: "OMEGA" },
                    { id: "\\sin", label: "\\sin", type: "write", val: "\\sin", shortcut: ["toggle", "sin"], title: "Sine", name: "sin" },
                    { id: "\\cos", label: "\\cos", type: "write", val: "\\cos", shortcut: ["toggle", "cos"], title: "Cosine", name: "cos" },
                    { id: "\\tan", label: "\\tan", type: "write", val: "\\tan", shortcut: ["toggle", "tan"], title: "Tangent", name: "tan" },
                    { id: "\\arcsin", label: "\\arcsin", type: "write", val: "\\arcsin", shortcut: ["toggle", "isin"], title: "Inverse sine", name: "arcsin" },
                    { id: "\\arccos", label: "\\arccos", type: "write", val: "\\arccos", shortcut: ["toggle", "icos"], title: "Inverse cosine", name: "arccos" },
                    { id: "\\arctan", label: "\\arctan", type: "write", val: "\\arctan", shortcut: ["toggle", "itan"], title: "Inverse tangent", name: "arctan" },
                    { id: "\\sec", label: "\\sec", type: "write", val: "\\sec", shortcut: [], title: "" },
                    { id: "\\csc", label: "\\csc", type: "write", val: "\\csc", shortcut: [], title: "" },
                    { id: "\\cot", label: "\\cot", type: "write", val: "\\cot", shortcut: [], title: "" },
                    { id: "\\sin^{-1}", label: "\\sin^{-1}", type: "write", val: "\\sin^{-1}", shortcut: [], title: "" },
                    { id: "\\sec^{-1}", label: "\\sec^{-1}", type: "write", val: "\\sec^{-1}", shortcut: [], title: "" },
                    { id: "\\cos^{-1}", label: "\\cos^{-1}", type: "write", val: "\\cos^{-1}", shortcut: [], title: "" },
                    { id: "\\csc^{-1}", label: "\\csc^{-1}", type: "write", val: "\\csc^{-1}", shortcut: [], title: "" },
                    { id: "\\tan^{-1}", label: "\\tan^{-1}", type: "write", val: "\\tan^{-1}", shortcut: [], title: "" },
                    { id: "\\cot^{-1}", label: "\\cot^{-1}", type: "write", val: "\\cot^{-1}", shortcut: [], title: "" },
                    { id: "\\cap", label: "\\intersection", type: "write", val: "\\intersection", shortcut: ["toggle", "ir"], title: "Intersection", name: "cap" },
                    { id: "\\cup", label: "\\union", type: "write", val: "\\union", shortcut: ["toggle", "un"], title: "Union", name: "union" },
                    { id: "\\in", label: "\\in", type: "write", val: "\\in", shortcut: ["toggle", "mo"], title: "Member of", name: "in" },
                    { id: "\\notin", label: "\\notin", type: "write", val: "\\notin", shortcut: ["toggle", "nmo"], title: "Not member of", name: "notin" },
                    { id: "\\ni", label: "\\ni", type: "write", val: "\\ni", shortcut: ["toggle", "cs"], title: "Contains", name: "ni" },
                    { id: "\\subseteq", label: "\\subseteq", type: "write", val: "\\subseteq", shortcut: ["toggle", "sb"], title: "Subset", name: "subseteq" },
                    { id: "\\supseteq", label: "\\supseteq", type: "write", val: "\\supseteq", shortcut: ["toggle", "sp"], title: "Superset", name: "supseteq" },
                    { id: "\\subset", label: "\\subset", type: "write", val: "\\subset", shortcut: ["toggle", "ssb"], title: "Subset (strict)", name: "subset" },
                    { id: "\\supset", label: "\\supset", type: "write", val: "\\supset", shortcut: ["toggle", "ssp"], title: "Superset (strict)", name: "supset" },
                    { id: "\\not\\subset", label: "\\not\\subset", type: "write", val: "\\not\\subset", shortcut: ["toggle", "snb"], title: "Not subset (strict)", name: "notsubset" },
                    { id: "\\not\\supset", label: "\\not\\supset", type: "write", val: "\\not\\supset", shortcut: ["toggle", "snp"], title: "Not superset (strict)", name: "notsupset" },
                    { id: "\\not\\subseteq", label: "\\not\\subseteq", type: "write", val: "\\not\\subseteq", shortcut: ["toggle", "nsb"], title: "Not subset", name: "notsubseteq" },
                    { id: "\\not\\supseteq", label: "\\not\\supseteq", type: "write", val: "\\not\\supseteq", shortcut: ["toggle", "nsp"], title: "Not superset", name: "notsupseteq" },
                    { id: "\\not\\ni", label: "\\not\\ni", type: "write", val: "\\not\\ni", shortcut: ["toggle", "ncs"], title: "Does not contain", name: "notni" },
                    { id: "\\backslash", label: "\\backslash", type: "write", val: "\\backslash", shortcut: ["toggle", "bsh"], title: "Backslash", name: "backslash" },
                    { id: "\\slash", label: "\\slash", type: "write", val: "\\slash", shortcut: ["ctrl", "/"], title: "Forward slash", name: "slash" },
                    { id: "!", label: "!", type: "write", val: "!", shortcut: ["!"], title: "Factorial", name: "factorial" },
                    { id: "\\emptyset", label: "\\emptyset", type: "write", val: "\\emptyset", shortcut: [], title: "" },
                    { id: "\\angle", label: "\\angle", type: "write", val: "\\angle", shortcut: ["toggle", "ang"], title: "Angle", name: "angle" },
                    { id: "\\measuredangle", label: "\\measuredangle", type: "write", val: "\\measuredangle", shortcut: ["toggle", "mang"], title: "Measure of angle", name: "measuredangle" },
                    { id: "\\parallel", label: "\\parallel", type: "write", val: "\\parallel", shortcut: ["toggle", "pa"], title: "Parallel to", name: "parallel" },
                    { id: "\\nparallel", label: "\\nparallel", type: "write", val: "\\nparallel", shortcut: ["toggle", "npa"], title: "Not parallel to", name: "nparallel" },
                    { id: "\\sim", label: "\\sim", type: "write", val: "\\sim", shortcut: ["toggle", "sm"], title: "Similar to", name: "sim" },
                    { id: "\\cong", label: "\\cong", type: "write", val: "\\cong", shortcut: ["toggle", "cg"], title: "Congruent to", name: "cong" },
                    { id: "\\degree", label: "\\degree", type: "write", val: "\\degree", shortcut: ["toggle", "dg"], title: "Degree symbol", name: "degree" },
                    { id: "\\triangle", label: "\\triangle", type: "write", val: "\\triangle", shortcut: ["toggle", "tri"], title: "Triangle", name: "triangle" },
                    { id: "\\circledot", label: "\\circledot", type: "write", val: "\\circledot", shortcut: ["toggle", "cir"], title: "Circle", name: "circledot" },
                    { id: "\\circ", label: "\\circ", type: "write", val: "\\circ", shortcut: ["toggle", "circ"], title: "Composition", name: "circ" },
                    { id: "\\parallelogram", label: "\\parallelogram", type: "cmd", val: "\\parallelogram", shortcut: ["toggle", "par"], title: "Parallelogram", name: "parallelogram" },
                    { id: "\\overarc", label: "\\overarc{}", type: "cmd", val: "\\overarc", shortcut: ["toggle", "oa"], title: "Arc", name: "overarc" },
                    { id: "\\leftarrow", label: "\\leftarrow", type: "write", val: "\\leftarrow", shortcut: ["toggle", "la"], title: "Leftwards arrow", name: "leftarrow" },
                    { id: "\\rightarrow", label: "\\rightarrow", type: "write", val: "\\rightarrow", shortcut: ["toggle", "ra"], title: "Rightwards arrow", name: "rightarrow" },
                    { id: "\\leftrightarrow", label: "\\leftrightarrow", type: "write", val: "\\leftrightarrow", shortcut: ["toggle", "lr"], title: "Left/right arrow", name: "leftrightarrow" },
                    { id: "\\longleftrightarrow", label: "\\longleftrightarrow", type: "write", val: "\\longleftrightarrow", shortcut: ["toggle", "llr"], title: "Long left/right arrow", name: "longleftrightarrow" },
                    { id: "\\rightdoublearrow", label: "\\Rightarrow", type: "write", val: "\\Rightarrow", shortcut: ["toggle", "rda"], title: "Implies equivalence", name: "rightdoublearrow" },
                    { id: "\\leftrightdoublearrow", label: "\\Leftrightarrow", type: "write", val: "\\Leftrightarrow", shortcut: ["toggle", "lrda"], title: "Material equivalence", name: "leftrightdoublearrow" },
                    { id: "\\overrightarrow", label: "\\overrightarrow{}", type: "cmd", val: "\\overrightarrow", shortcut: ["toggle", "ry"], title: "Ray", name: "overrightarrow" },
                    { id: "\\overleftarrow", label: "\\overleftarrow{}", type: "cmd", val: "\\overleftarrow", shortcut: ["toggle", "ry"], title: "Left ray", name: "overleftarrow" },
                    { id: "\\overleftrightarrow", label: "\\overleftrightarrow{}", type: "cmd", val: "\\overleftrightarrow", shortcut: ["toggle", "li"], title: "Line", name: "overleftrightarrow" },
                    { id: "\\overline", label: "\\overline{}", type: "cmd", val: "\\overline", shortcut: ["toggle", "li"], title: "Line segment", name: "overline" },
                    { id: "\\dot", label: "\\dot{}", type: "cmd", val: "\\dot", shortcut: [], title: "Recurring Decimal", name: "dot" },
                    { id: "\\longdiv", label: "\\longdiv{}", type: "cmd", val: "\\longdiv", shortcut: ["toggle", "ld"], title: "Long division", name: "longdiv" },
                    {
                        id: "\\overset{}^{H}",
                        label: "\\overset{}^{H}",
                        type: "write",
                        val: "\\overset{}{} ",
                        shortcut: ["toggle", "ox"],
                        title: "Oxidation",
                        name: "overset",
                        label_latex: !0,
                        extra_commands: [{ type: "keystroke", val: "Up" }],
                    },
                    { id: "\\therefore", label: "\\therefore", type: "write", val: "\\therefore", shortcut: ["toggle", "tf"], title: "Therefore", name: "therefore" },
                    { id: "\\infty", label: "\\infinity", type: "write", val: "\\infinity", shortcut: ["toggle", "ift"], title: "Infinity", name: "infty" },
                    { id: "\\square", label: "\\square", type: "write", val: "\\square", shortcut: ["toggle", "sqr"], title: "Square", name: "square" },
                    { id: "\\matrix", label: "☷", type: "cmd", val: "\\matrix", shortcut: ["toggle", "mx"], title: "Matrix", name: "matrix" },
                    { id: "\\pmatrix", label: "(☷)", type: "cmd", val: "\\pmatrix", shortcut: ["toggle", "px"], title: "Matrix bounded by parentheses", name: "pmatrix" },
                    { id: "\\bmatrix", label: "\\begin{bmatrix}&\\\\&\\end{bmatrix}", type: "cmd", val: "\\bmatrix", shortcut: ["toggle", "bx"], title: "2 x 2 Matrix bounded by brackets", name: "bmatrix", label_latex: !0 },
                    {
                        id: "\\threebmatrix",
                        label: "\\begin{bmatrix}&&\\\\&&\\\\&&\\end{bmatrix}",
                        type: "write",
                        val: "\\begin{bmatrix}&&\\\\&&\\\\&&\\end{bmatrix}",
                        shortcut: [],
                        title: "3 x 3 Matrix bounded by brackets",
                        name: "threebmatrix",
                        label_latex: !0,
                        extra_commands: [{ type: "keystroke", val: "Left Left Left Up Up" }],
                    },
                    {
                        id: "\\singlebmatrix",
                        label: "\\begin{bmatrix}\\end{bmatrix}",
                        type: "write",
                        val: "\\begin{bmatrix}\\end{bmatrix}",
                        shortcut: [],
                        title: "Single Matrix bounded by brackets",
                        name: "singlebmatrix",
                        label_latex: !0,
                        extra_commands: [{ type: "keystroke", val: "Left" }],
                    },
                    { id: "\\Bmatrix", label: "{☷}", type: "cmd", val: "\\Bmatrix", shortcut: ["toggle", "bbx"], title: "Matrix bounded by braces", name: "Bmatrix" },
                    { id: "\\vmatrix", label: "|☷|", type: "cmd", val: "\\vmatrix", shortcut: ["toggle", "vx"], title: "Matrix bounded by vertical lines", name: "vmatrix" },
                    { id: "\\Vmatrix", label: "‖☷‖", type: "cmd", val: "\\Vmatrix", shortcut: ["toggle", "vvx"], title: "Matrix bounded by double vertical lines", name: "Vmatrix" },
                    { id: "\\ldots", label: "\\ldots", type: "write", val: "\\ldots", shortcut: ["toggle", "ld"], title: "Horizontal dots (baseline)", name: "ldots" },
                    { id: "\\cdots", label: "\\cdots", type: "write", val: "\\cdots", shortcut: ["toggle", "cd"], title: "Horizontal dots (centered)", name: "cdots" },
                    { id: "\\ddots", label: "\\ddots", type: "write", val: "\\ddots", shortcut: ["toggle", "dd"], title: "Diagonal dots", name: "ddots" },
                    { id: "\\vdots", label: "\\vdots", type: "write", val: "\\vdots", shortcut: ["toggle", "vd"], title: "Vertical dots", name: "vdots" },
                    { id: "\\cdot", label: "\\cdot", type: "write", val: "\\cdot", shortcut: [], title: "Dot multiplier", name: "cdot" },
                    { id: "\\cdotp", label: "\\cdotp", type: "write", val: "\\cdotp", shortcut: [], title: "Center dot (punctuation)", name: "cdotp" },
                    { id: "\\response", label: "□", type: "write", val: "\\response", shortcut: ["toggle", "rs"], title: "Editable {{response}} area", name: "response" },
                    { id: "║", label: "\\addmatrixcol", type: "softkey", val: "insertColumn", shortcut: ["toggle", "space"], title: "Insert column", name: "addmatrixcol", label_latex: !0 },
                    { id: "═", label: "\\addmatrixrow", type: "softkey", val: "insertRow", shortcut: ["toggle", "enter"], title: "Insert row", name: "addmatrixrow" },
                    { id: "g", label: "g", type: "write", val: "\\text{g}", shortcut: ["g"], title: "Gram", name: "gram" },
                    { id: "cg", label: "cg", type: "write", val: "\\text{cg}", shortcut: ["cg"], title: "Centigram", name: "cg" },
                    { id: "kg", label: "kg", type: "write", val: "\\text{kg}", shortcut: ["kg"], title: "Kilogram", name: "kg" },
                    { id: "mg", label: "mg", type: "write", val: "\\text{mg}", shortcut: ["mg"], title: "Milligram", name: "mg" },
                    { id: "ng", label: "ng", type: "write", val: "\\text{ng}", shortcut: ["ng"], title: "Nanogram", name: "ng" },
                    { id: "m", label: "m", type: "write", val: "\\text{m}", shortcut: ["m"], title: "Meter", name: "meter" },
                    { id: "cm", label: "cm", type: "write", val: "\\text{cm}", shortcut: ["cm"], title: "Centimeter", name: "cm" },
                    { id: "km", label: "km", type: "write", val: "\\text{km}", shortcut: ["km"], title: "Kilometer", name: "km" },
                    { id: "mm", label: "mm", type: "write", val: "\\text{mm}", shortcut: ["mm"], title: "Millimeter", name: "mm" },
                    { id: "nm", label: "nm", type: "write", val: "\\text{nm}", shortcut: ["nm"], title: "Nanometer", name: "nm" },
                    { id: "s", label: "s", type: "write", val: "\\text{s}", shortcut: ["s"], title: "Second", name: "second" },
                    { id: "cs", label: "cs", type: "write", val: "\\text{cs}", shortcut: ["cs"], title: "Centisecond", name: "cs" },
                    { id: "ks", label: "ks", type: "write", val: "\\text{ks}", shortcut: ["ks"], title: "Kilosecond", name: "ks" },
                    { id: "ms", label: "ms", type: "write", val: "\\text{ms}", shortcut: ["ms"], title: "Millisecond", name: "ms" },
                    { id: "ns", label: "ns", type: "write", val: "\\text{ns}", shortcut: ["ns"], title: "Nanosecond", name: "ns" },
                    { id: "L", label: "L", type: "write", val: "\\text{L}", shortcut: ["L"], title: "Liter", name: "liter" },
                    { id: "mL", label: "mL", type: "write", val: "\\text{mL}", shortcut: ["mL"], title: "Millitliter", name: "ml" },
                    { id: "µg", label: "µg", type: "write", val: "\\text{µg}", shortcut: [], title: "Microgram", name: "ug" },
                    { id: "in", label: "in", type: "write", val: "\\text{in}", shortcut: ["in"], title: "Inch", name: "inch" },
                    { id: "ft", label: "ft", type: "write", val: "\\text{ft}", shortcut: ["ft"], title: "Foot", name: "ft" },
                    { id: "mi", label: "mi", type: "write", val: "\\text{mi}", shortcut: ["mi"], title: "Mile", name: "mi" },
                    { id: "fl", label: "fl oz", type: "write", val: "\\text{fl oz}", shortcut: ["fl"], title: "Fluid Ounce", name: "fl" },
                    { id: "cup", label: "cup", type: "write", val: "\\text{cup}", shortcut: ["cup"], title: "Cup", name: "cup" },
                    { id: "pt", label: "pt", type: "write", val: "\\text{pt}", shortcut: ["pt"], title: "Pint", name: "pt" },
                    { id: "qt", label: "qt", type: "write", val: "\\text{qt}", shortcut: ["qt"], title: "Quart", name: "qt" },
                    { id: "gal", label: "gal", type: "write", val: "\\text{gal}", shortcut: ["gal"], title: "Gallon", name: "gal" },
                    { id: "oz", label: "oz", type: "write", val: "\\text{oz}", shortcut: ["oz"], title: "Ounce", name: "oz" },
                    { id: "lb", label: "lb", type: "write", val: "\\text{lb}", shortcut: ["lb"], title: "Pound", name: "lb" },
                    { id: "mug", label: "µg", type: "write", val: "\\mug", shortcut: ["mug"], title: "Microgram", name: "mug" },
                    { id: "mus", label: "µs", type: "write", val: "\\mus", shortcut: ["mus"], title: "Microsecond", name: "mus" },
                    { id: "mum", label: "µm", type: "write", val: "\\mum", shortcut: ["mum"], title: "Micrometer", name: "mum" },
                    { id: "muL", label: "µL", type: "write", val: "\\muL", shortcut: ["muL"], title: "Microlitre", name: "mul" },
                    { id: "box_^", label: "\\lrnexponent{}{}", type: "cmd", val: "\\lrnexponent", shortcut: ["^"], title: "Exponent", name: "exponent", label_latex: !0 },
                    { id: "box_^2", label: "\\lrnexponent{}{2}", type: "cmd", val: "\\lrnsquaredexponent", shortcut: ["toggle", "pt"], title: "Square", name: "square", label_latex: !0 },
                    { id: "box__", label: "\\lrnsubscript{}{}", type: "cmd", val: "\\lrnsubscript", shortcut: ["_"], title: "Subscript", name: "subscript", label_latex: !0 },
                    { id: "box_\\frac", label: "\\frac{\\square}{}", type: "cmd", val: "/", shortcut: ["/"], title: "Fraction", name: "fraction" },
                    {
                        id: "box_x\\frac{}{}",
                        label: "\\square\\frac{}{}",
                        type: "write",
                        val: "\\frac{}{}",
                        shortcut: ["toggle", "mf"],
                        title: "Fraction",
                        name: "fraction",
                        extra_commands: [
                            { type: "keystroke", val: "Left" },
                            { type: "keystroke", val: "Up" },
                        ],
                    },
                    { id: "mol", label: "mol", type: "write", val: "\\text{mol}", shortcut: ["mol"], title: "Mole", name: "mol" },
                    { id: "\\atomic", label: "_{}^{}\\text{H}", type: "write", val: "_{}^{}", shortcut: [], title: "Atomic symbol", name: "atomic", label_latex: !0, extra_commands: [{ type: "keystroke", val: "Up" }] },
                    { id: "\\polyatomic", label: "\\text{H}_{}{}^{}", type: "write", val: "_{}{}^{}", shortcut: [], title: "Polyatomic ion", name: "polyatomic", label_latex: !0, extra_commands: [{ type: "keystroke", val: "Up" }] },
                    { id: "chem^", label: "\\text{H}^{}", type: "cmd", val: "^", shortcut: [], title: "Superscript", name: "superscript", label_latex: !0 },
                    { id: "chem_", label: "\\text{H}_{}", type: "cmd", val: "_", shortcut: [], title: "Subscript", name: "subscript", label_latex: !0 },
                    { id: "\\text{g}\\ \\text{mol}^{-1}", label: "\\text{g}\\ \\text{mol}^{-1}", type: "write", val: "\\text{g}\\ \\text{mol}^{-1}", shortcut: ["gpm"], title: "Molar mass", name: "molar" },
                    { id: "\\rightleftharpoons", label: "\\rightleftharpoons", type: "write", val: "\\rightleftharpoons", shortcut: ["toggle", "rlh"], title: "Right / left harpoons", name: "rightleftharpoons" },
                    { id: "\\leftrightharpoons", label: "\\leftrightharpoons", type: "write", val: "\\leftrightharpoons", shortcut: ["toggle", "lrh"], title: "Left / right harpoons", name: "leftrightharpoons" },
                    { id: "\\ce{\\bond{-}}", label: "\\ce{\\bond{-}}", type: "write", val: "\\ce{\\bond{-}}", shortcut: ["toggle", "sib"], title: "Single bond", name: "singlebond" },
                    { id: "\\ce{\\bond{=}}", label: "\\ce{\\bond{=}}", type: "write", val: "\\ce{\\bond{=}}", shortcut: ["toggle", "dob"], title: "Double bond", name: "doublebond" },
                    { id: "\\ce{\\bond{#}}", label: "\\ce{\\bond{#}}", type: "write", val: "\\ce{\\bond{#}}", shortcut: ["toggle", "trb"], title: "Triple bond", name: "triplebond" },
                    { id: "\\ce{\\bond{...}}", label: "\\ce{\\bond{...}}", type: "write", val: "\\ce{\\bond{...}}", shortcut: ["toggle", "tdb"], title: "Three dot bond", name: "threedotbond" },
                    { id: "\\ce{\\bond{....}}", label: "\\ce{\\bond{....}}", type: "write", val: "\\ce{\\bond{....}}", shortcut: ["toggle", "fdb"], title: "Four dot bond", name: "fourdotbond" },
                    { id: "\\ce{\\bond{->}}", label: "\\ce{\\bond{->}}", type: "write", val: "\\ce{\\bond{->}}", shortcut: ["toggle", "rgb"], title: "Right arrow bond", name: "rightarrowbond" },
                    { id: "\\ce{\\bond{<-}}", label: "\\ce{\\bond{<-}}", type: "write", val: "\\ce{\\bond{<-}}", shortcut: ["toggle", "lfb"], title: "Left arrow bond", name: "leftarrowbond" },
                    { id: "\\xrightarrow", label: "\\xrightarrow[y]{x}", type: "write", val: "\\xrightarrow[]{}", shortcut: ["toggle", "xra"], title: "Arrow with superscript and subscript", name: "xrightarrow" },
                    { id: "\\lfloor", label: "\\lfloor", type: "write", val: "\\lfloor", title: "Left floor", name: "lfloor" },
                    { id: "\\rfloor", label: "\\rfloor", type: "write", val: "\\rfloor", title: "Right floor", name: "rfloor" },
                    { id: "\\lceil", label: "\\lceil", type: "write", val: "\\lceil", title: "Left ceiling", name: "lceil" },
                    { id: "\\rceil", label: "\\rceil", type: "write", val: "\\rceil", title: "Right ceiling", name: "rceil" },
                    { id: "\\uparrow", label: "\\uparrow", type: "write", val: "\\uparrow", title: "Up arrow", name: "uparrow" },
                    { id: "\\downarrow", label: "\\downarrow", type: "write", val: "\\downarrow", title: "Down arrow", name: "downarrow" },
                    { id: "\\equiv", label: "\\equiv", type: "write", val: "\\equiv", title: "Equivalence", name: "equiv" },
                    { id: "\\and", label: "\\and", type: "write", val: "\\and", title: "And", name: "and" },
                    { id: "\\not", label: "\\not", type: "write", val: "\\not", title: "Not", name: "not" },
                    { id: "\\or", label: "\\or", type: "write", val: "\\or", title: "Or", name: "or" },
                    { id: "\\exist", label: "\\exist", type: "write", val: "\\exist", title: "Exist", name: "exist" },
                    { id: "\\exists", label: "\\exists", type: "write", val: "\\exists", title: "Exists", name: "exists" },
                    { id: "\\forall", label: "\\forall", type: "write", val: "\\forall", title: "Forall", name: "forall" },
                    { id: "\\oplus", label: "\\oplus", type: "write", val: "\\oplus", title: "Circled plus", name: "oplus" },
                    { id: "a_lowercase", label: "a", type: "write", val: "a", shortcut: ["a"], title: "a", label_latex: !0 },
                    { id: "b_lowercase", label: "b", type: "write", val: "b", shortcut: ["b"], title: "b", label_latex: !0 },
                    { id: "c_lowercase", label: "c", type: "write", val: "c", shortcut: ["c"], title: "c", label_latex: !0 },
                    { id: "d_lowercase", label: "d", type: "write", val: "d", shortcut: ["d"], title: "d", label_latex: !0 },
                    { id: "e_lowercase", label: "e", type: "write", val: "e", shortcut: ["e"], title: "e", label_latex: !0 },
                    { id: "f_lowercase", label: "f", type: "write", val: "f", shortcut: ["f"], title: "f", label_latex: !0 },
                    { id: "g_lowercase", label: "g", type: "write", val: "g", shortcut: ["g"], title: "g", label_latex: !0 },
                    { id: "h_lowercase", label: "h", type: "write", val: "h", shortcut: ["h"], title: "h", label_latex: !0 },
                    { id: "i_lowercase", label: "i", type: "write", val: "i", shortcut: ["i"], title: "i", label_latex: !0 },
                    { id: "j_lowercase", label: "j", type: "write", val: "j", shortcut: ["j"], title: "j", label_latex: !0 },
                    { id: "k_lowercase", label: "k", type: "write", val: "k", shortcut: ["k"], title: "k", label_latex: !0 },
                    { id: "l_lowercase", label: "l", type: "write", val: "l", shortcut: ["l"], title: "l", label_latex: !0 },
                    { id: "m_lowercase", label: "m", type: "write", val: "m", shortcut: ["m"], title: "m", label_latex: !0 },
                    { id: "n_lowercase", label: "n", type: "write", val: "n", shortcut: ["n"], title: "n", label_latex: !0 },
                    { id: "o_lowercase", label: "o", type: "write", val: "o", shortcut: ["o"], title: "o", label_latex: !0 },
                    { id: "p_lowercase", label: "p", type: "write", val: "p", shortcut: ["p"], title: "p", label_latex: !0 },
                    { id: "q_lowercase", label: "q", type: "write", val: "q", shortcut: ["q"], title: "q", label_latex: !0 },
                    { id: "r_lowercase", label: "r", type: "write", val: "r", shortcut: ["r"], title: "r", label_latex: !0 },
                    { id: "s_lowercase", label: "s", type: "write", val: "s", shortcut: ["s"], title: "s", label_latex: !0 },
                    { id: "t_lowercase", label: "t", type: "write", val: "t", shortcut: ["t"], title: "t", label_latex: !0 },
                    { id: "u_lowercase", label: "u", type: "write", val: "u", shortcut: ["u"], title: "u", label_latex: !0 },
                    { id: "v_lowercase", label: "v", type: "write", val: "v", shortcut: ["v"], title: "v", label_latex: !0 },
                    { id: "w_lowercase", label: "w", type: "write", val: "w", shortcut: ["w"], title: "w", label_latex: !0 },
                    { id: "x_lowercase", label: "x", type: "write", val: "x", shortcut: ["x"], title: "x", label_latex: !0 },
                    { id: "y_lowercase", label: "y", type: "write", val: "y", shortcut: ["y"], title: "y", label_latex: !0 },
                    { id: "z_lowercase", label: "z", type: "write", val: "z", shortcut: ["z"], title: "z", label_latex: !0 },
                    { id: "A_uppercase", label: "A", type: "write", val: "A", shortcut: ["A"], title: "A", label_latex: !0 },
                    { id: "B_uppercase", label: "B", type: "write", val: "B", shortcut: ["B"], title: "B", label_latex: !0 },
                    { id: "C_uppercase", label: "C", type: "write", val: "C", shortcut: ["C"], title: "C", label_latex: !0 },
                    { id: "D_uppercase", label: "D", type: "write", val: "D", shortcut: ["D"], title: "D", label_latex: !0 },
                    { id: "E_uppercase", label: "E", type: "write", val: "E", shortcut: ["E"], title: "E", label_latex: !0 },
                    { id: "F_uppercase", label: "F", type: "write", val: "F", shortcut: ["F"], title: "F", label_latex: !0 },
                    { id: "G_uppercase", label: "G", type: "write", val: "G", shortcut: ["G"], title: "G", label_latex: !0 },
                    { id: "H_uppercase", label: "H", type: "write", val: "H", shortcut: ["H"], title: "H", label_latex: !0 },
                    { id: "I_uppercase", label: "I", type: "write", val: "I", shortcut: ["I"], title: "I", label_latex: !0 },
                    { id: "J_uppercase", label: "J", type: "write", val: "J", shortcut: ["J"], title: "J", label_latex: !0 },
                    { id: "K_uppercase", label: "K", type: "write", val: "K", shortcut: ["K"], title: "K", label_latex: !0 },
                    { id: "L_uppercase", label: "L", type: "write", val: "L", shortcut: ["L"], title: "L", label_latex: !0 },
                    { id: "M_uppercase", label: "M", type: "write", val: "M", shortcut: ["M"], title: "M", label_latex: !0 },
                    { id: "N_uppercase", label: "N", type: "write", val: "N", shortcut: ["N"], title: "N", label_latex: !0 },
                    { id: "O_uppercase", label: "O", type: "write", val: "O", shortcut: ["O"], title: "O", label_latex: !0 },
                    { id: "P_uppercase", label: "P", type: "write", val: "P", shortcut: ["P"], title: "P", label_latex: !0 },
                    { id: "Q_uppercase", label: "Q", type: "write", val: "Q", shortcut: ["Q"], title: "Q", label_latex: !0 },
                    { id: "R_uppercase", label: "R", type: "write", val: "R", shortcut: ["R"], title: "R", label_latex: !0 },
                    { id: "S_uppercase", label: "S", type: "write", val: "S", shortcut: ["S"], title: "S", label_latex: !0 },
                    { id: "T_uppercase", label: "T", type: "write", val: "T", shortcut: ["T"], title: "T", label_latex: !0 },
                    { id: "U_uppercase", label: "U", type: "write", val: "U", shortcut: ["U"], title: "U", label_latex: !0 },
                    { id: "V_uppercase", label: "V", type: "write", val: "V", shortcut: ["V"], title: "V", label_latex: !0 },
                    { id: "W_uppercase", label: "W", type: "write", val: "W", shortcut: ["W"], title: "W", label_latex: !0 },
                    { id: "X_uppercase", label: "X", type: "write", val: "X", shortcut: ["X"], title: "X", label_latex: !0 },
                    { id: "Y_uppercase", label: "Y", type: "write", val: "Y", shortcut: ["Y"], title: "Y", label_latex: !0 },
                    { id: "Z_uppercase", label: "Z", type: "write", val: "Z", shortcut: ["Z"], title: "Z", label_latex: !0 },
                    { id: "7", label: "7", type: "write", val: "7", shortcut: ["7"], title: "Seven", name: "seven", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "8", label: "8", type: "write", val: "8", shortcut: ["8"], title: "Eight", name: "eight", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "9", label: "9", type: "write", val: "9", shortcut: ["9"], title: "Nine", name: "nine", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "÷", label: "÷", type: "write", val: "÷", shortcut: ["÷"], title: "Divided by", name: "divide", style: "lrn-btn-grid-operator", numberpad_symbol: !0 },
                    { id: "4", label: "4", type: "write", val: "4", shortcut: ["4"], title: "Four", name: "four", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "5", label: "5", type: "write", val: "5", shortcut: ["5"], title: "Five", name: "five", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "6", label: "6", type: "write", val: "6", shortcut: ["6"], title: "Six", name: "six", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "multiply", label: "×", type: "write", val: "×", shortcut: ["×"], title: "Multiplied by", name: "multiply", style: "lrn-btn-grid-operator", numberpad_symbol: !0 },
                    { id: "1", label: "1", type: "write", val: "1", shortcut: ["1"], title: "One", name: "one", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "2", label: "2", type: "write", val: "2", shortcut: ["2"], title: "Two", name: "two", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "3", label: "3", type: "write", val: "3", shortcut: ["3"], title: "Three", name: "three", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "minus", label: "-", type: "write", val: "-", shortcut: ["-"], title: "Minus", name: "minus", style: "lrn-btn-grid-operator", numberpad_symbol: !0 },
                    { id: "0", label: "0", type: "write", val: "0", shortcut: ["0"], title: "Zero", name: "zero", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "decimal", label: ".", type: "write", val: ".", shortcut: ["."], title: "Decimal", name: "decimal", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "comma", label: ",", type: "write", val: ",", shortcut: [","], title: "Comma", name: "comma", style: "lrn-btn-grid-num", numberpad_symbol: !0 },
                    { id: "plus", label: "+", type: "write", val: "+", shortcut: ["+"], title: "Plus", name: "plus", style: "lrn-btn-grid-operator", numberpad_symbol: !0 },
                    { id: "left", label: "<", type: "keystroke", val: "Left", shortcut: [], title: "Left", name: "left", style: "lrn-btn-grid-dir", numberpad_symbol: !0, key_style: "lrn_arrow_left" },
                    { id: "right", label: ">", type: "keystroke", val: "Right", shortcut: [], title: "Right", name: "right", style: "lrn-btn-grid-dir", numberpad_symbol: !0, key_style: "lrn_arrow_right" },
                    { id: "backspace", label: "Backspace", type: "keystroke", val: "Backspace", shortcut: [], title: "Backspace", name: "backspace", style: "lrn-btn-grid-dir", numberpad_symbol: !0, key_style: "lrn_backspace" },
                    { id: "=", label: "=", type: "write", val: "=", shortcut: ["="], title: "Equals", name: "equals", style: "lrn-btn-grid-operator", numberpad_symbol: !0 },
                    {
                        id: "\\left\\{\\begin{array}{l}\\end{array}\\right.",
                        label: "\\left\\{\\begin{array}{l}x+\\\\y+\\end{array}\\right.",
                        type: "write",
                        val: "\\left\\{\\begin{array}{l} \\\\ \\end{array}\\right.",
                        shortcut: ["toggle", "ine"],
                        title: "System of equations/inequalities",
                        name: "inequalities",
                        style: "lrn-btn-array",
                    },
                    {
                        id: "\\begin{array}{rlll}\\end{array}",
                        label: "\\begin{array}{rlll}&=&\\\\&=&\\end{array}",
                        type: "write",
                        val: "\\begin{array}{rlll}&+&&=\\\\&+&&=\\end{array}",
                        shortcut: ["toggle", "mle"],
                        title: "Multi line equation",
                        name: "multiline",
                        style: "lrn-btn-array",
                    },
                    { id: "{{response}}", label: "\\MathQuillResponseContainerIcon", type: "write", val: "\\MathQuillResponseContainer", title: "Response Container", name: "responseContainerIcon", style: "lrn-btn-grid-operator" },
                ],
                d = new s.a();
            a.a.each(h, function (t) {
                var e = u.get(t.id);
                e ? (e.set(t), d.add(e)) : d.add(t);
            });
            var p = [
                    { symbol: "+", group: "Arithmetic" },
                    { symbol: "-", group: "Arithmetic" },
                    { symbol: "\\times", group: "Arithmetic" },
                    { symbol: "\\div", group: "Arithmetic" },
                    { symbol: "\\pm", group: "Arithmetic" },
                    { symbol: "=", group: "Comparison" },
                    { symbol: ">", group: "Comparison" },
                    { symbol: "<", group: "Comparison" },
                    { symbol: "\\ge", group: "Comparison" },
                    { symbol: "\\le", group: "Comparison" },
                    { symbol: "\\ne", group: "Comparison" },
                    { symbol: "\\approx", group: "Comparison" },
                    { symbol: "\\perp", group: "Comparison" },
                    { symbol: "\\propto", group: "Comparison" },
                    { symbol: "\\left(\\right)", group: "Parentheses" },
                    { symbol: "\\left[\\right]", group: "Parentheses" },
                    { symbol: "\\left\\{\\right\\}", group: "Parentheses" },
                    { symbol: "^", group: "Subscript and superscript" },
                    { symbol: "^2", group: "Subscript and superscript" },
                    { symbol: "_", group: "Subscript and superscript" },
                    { symbol: "\\frac", group: "Fraction" },
                    { symbol: ":", group: "Fraction" },
                    { symbol: "\\sqrt", group: "Root" },
                    { symbol: "\\sqrt[n]{}", group: "Root" },
                    { symbol: "\\pi", group: "Greek letters" },
                    { symbol: "\\Pi", group: "Greek letters" },
                    { symbol: "\\sigma", group: "Greek letters" },
                    { symbol: "\\Sigma", group: "Greek letters" },
                    { symbol: "\\delta", group: "Greek letters" },
                    { symbol: "\\Delta", group: "Greek letters" },
                    { symbol: "\\theta", group: "Greek letters" },
                    { symbol: "\\Theta", group: "Greek letters" },
                    { symbol: "\\matrix", group: "Matrices" },
                    { symbol: "\\bmatrix", group: "Matrices" },
                    { symbol: "\\ldots", group: "Matrices" },
                    { symbol: "\\ddots", group: "Matrices" },
                    { symbol: "\\vdots", group: "Matrices" },
                    { symbol: "║", group: "Matrices" },
                    { symbol: "═", group: "Matrices" },
                ],
                m = {
                    handwriting: { title: "Handwriting", name: "Handwriting", label: "&#9997;", render_latex: !1 },
                    qwerty: { title: "Keyboard", name: "Keyboard", label: "&#9000;", render_latex: !1 },
                    basic: { title: "Basic", label: "\\text{Basic}", value: ["x", "y", "^2", "\\sqrt", "\\frac", "x\\frac{}{}", "^", "_", "<", ">", "\\pm", "\\$", "%", "\\degree", ":", "\\left(\\right)", "\\abs", "\\pi", "\\infty"] },
                    basic_junior: { title: "Basic Junior", label: "=", value: ["<", ">", "", "", "\\frac", "x\\frac{}{}"] },
                    basic_author: {
                        title: "Basic",
                        label: "\\text{Basic}",
                        value: ["x", "y", "^2", "\\sqrt", "\\frac", "x\\frac{}{}", "^", "_", "<", ">", "\\pm", "\\$", "%", "\\degree", ":", "\\left(\\right)", "\\abs", "\\pi", "\\infty"],
                    },
                    algebra: { title: "Algebra", label: "x", value: ["x", "y", "^2", "\\sqrt", "\\frac", "x\\frac{}{}", "^", "\\sqrt[n]{}", "<", ">", "\\pm", "\\abs", "\\pi", "\\infty", "\\left(\\right)", "\\left[\\right]"] },
                    comparison: { title: "Comparison", label: "<", value: ["\\ne", "\\approx", "", "", "<", ">", "", "", "\\le", "\\ge", "", "", "\\ngtr", "\\nless"] },
                    geometry: {
                        title: "Geometry",
                        label: "\\angle",
                        value: [
                            "\\perp",
                            "\\parallel",
                            "\\nparallel",
                            "\\underset{\\sim}{\\mathbf{}}",
                            "\\angle",
                            "\\measuredangle",
                            "\\sim",
                            "\\cong",
                            "\\triangle",
                            "\\circledot",
                            "\\parallelogram",
                            "\\overarc",
                            "\\degree",
                            "'",
                            '"',
                            "\\pi",
                            "\\overline",
                            "\\overrightarrow",
                            "\\overleftrightarrow",
                            "\\square",
                        ],
                    },
                    matrices: { title: "Matrices", label: "\\begin{bmatrix}&\\\\&\\end{bmatrix}", value: ["\\ldots", "\\singlebmatrix", "║", "═", "\\ddots", "\\bmatrix", "", "", "\\vdots", "\\threebmatrix", "", "", "^", "", "", "", "_"] },
                    trigonometry: { title: "Trigonometry", label: "\\sin", value: ["\\sin", "\\sec", "\\sin^{-1}", "\\sec^{-1}", "\\cos", "\\csc", "\\cos^{-1}", "\\csc^{-1}", "\\tan", "\\cot", "\\tan^{-1}", "\\cot^{-1}"] },
                    sets: {
                        title: "Sets",
                        label: "\\intersection",
                        value: [
                            "\\subset",
                            "\\supset",
                            "\\subseteq",
                            "\\supseteq",
                            "\\in",
                            "\\notin",
                            "\\ni",
                            "\\not\\subset",
                            "\\cup",
                            "\\cap",
                            "\\emptyset",
                            "",
                            ",",
                            ":",
                            "!",
                            "\\backslash",
                            "\\slash",
                            "\\left(\\right)",
                            "\\left\\{\\right\\}",
                            "\\left[\\right)",
                            "\\left(\\right]",
                        ],
                    },
                    units_si: { title: "Units (SI)", label: "\\text{kg}", value: ["g", "kg", "mg", "µg", "m", "km", "cm", "mm", "L", "mL", "", "", "s", "ms"] },
                    units_us: { title: "Units (US Customary)", label: "\\text{lb}", value: ["oz", "lb", "", "", "in", "ft", "mi", "", "fl", "pt", "gal"] },
                    greek: {
                        title: "Greek letters",
                        label: "\\alpha",
                        value: ["\\alpha", "\\gamma", "\\delta", "\\pi", "\\theta", "\\sigma", "\\Delta", "\\Pi", "\\Theta", "\\Sigma", "\\lambda", "\\phi", "\\tau", "\\varepsilon", "\\beta", "\\mu", "\\rho"],
                    },
                    chemistry: {
                        title: "Chemistry",
                        label: "\\text{Chem}",
                        value: ["chem^", "chem_", "\\atomic", "\\polyatomic", "\\rightarrow", "\\leftarrow", "\\rightleftharpoons", "\\longleftrightarrow", "\\xrightarrow", "mol", "'", "\\overset{}^{H}", "\\text{g}\\ \\text{mol}^{-1}"],
                    },
                    chemistry_author: {
                        title: "Chemistry",
                        label: "\\text{Chem}",
                        value: ["chem^", "chem_", "\\atomic", "\\polyatomic", "\\rightarrow", "\\leftarrow", "\\rightleftharpoons", "\\longleftrightarrow", "\\xrightarrow", "mol", "'", "\\overset{}^{H}", "\\text{g}\\ \\text{mol}^{-1}"],
                    },
                    grouping: { title: "Grouping Symbols", label: "\\left(\\right)", value: ["\\left(\\right)", "\\left[\\right]", "\\left\\{\\right\\}"] },
                    calculus: { title: "Calculus", label: "\\Delta", value: ["d", "f", "\\int", "\\Delta", "\\prime", "\\frac", "\\left(\\right)", "\\lim", "\\int_{}^{}", "\\sum", "\\partial"] },
                    misc: { title: "Miscellaneous", label: "\\text{Misc}", value: ["a", "b", "\\propto", "abc", "\\mid", "\\cdot", "\\longdiv", "\\mathbb{R}"] },
                    discrete: { title: "Discrete", label: "\\text{Discrete}", value: ["\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\uparrow", "\\equiv", "\\and", "\\or", "\\not", "\\exist", "\\forall", "\\oplus"] },
                    arrays: { title: "Arrays", label: "\\left\\{\\begin{array}{l}x\\end{array}\\right.", value: ["\\left\\{\\begin{array}{l}\\end{array}\\right.", "\\begin{array}{rlll}\\end{array}", "║", "═"] },
                    general: { title: "General", label: "x", value: ["x", "y", "^2", "^", "_", "\\pm", "\\frac", "x\\frac{}{}", "\\sqrt", "\\sqrt[3]{}", "\\sqrt[n]{}", "%", "\\abs", "\\therefore", "\\infty", ":"] },
                },
                f = ["x", "y", "^2", ">", "<", "\\sqrt", "\\left(\\right)", "\\sin", "\\frac", "\\theta", "\\pi", "a", "b", "^", "\\le", "\\ge", "\\sqrt[n]{}", "\\left\\{\\right\\}", "\\cos", "\\tan", ":"],
                b = a.a.map(f, function (t) {
                    return { symbol: t };
                });
            function getCollection(t) {
                var e = new s.a();
                return (
                    a.a.each(t, function (t) {
                        var i = d.get(t.symbol);
                        i && (i.set(a.a.omit(t, "symbol")), e.add(i));
                    }),
                    e
                );
            }
            function getNewerFormatMasterCollection() {
                return (c =
                    c ||
                    (function convertToNewerFormat(t) {
                        return (
                            a.a.each(
                                [
                                    { id: "║", type: "keystroke", val: "Shift-Spacebar", shortcut: ["shift + space"] },
                                    { id: "═", type: "keystroke", val: "Shift-Enter", shortcut: ["shift + enter"] },
                                ],
                                function (e) {
                                    var i = t.get(e.id);
                                    i && (t.remove(i), (i = i.clone().set(e)), t.add(i));
                                }
                            ),
                            t
                        );
                    })(d.clone()));
            }
            a.a.each(p, function (t) {
                a.a.contains(f, t.symbol) || a.a.contains(["+", "-", "\\times", "\\div", "="], t.symbol) || b.push(t);
            }),
                (e.a = {
                    master: d,
                    defaultInputUiSymbols: m,
                    ctrlShortcuts: [
                        { label: "Forward slash", type: "write", shortcut: "/", val: "\\slash" },
                        { label: "Open keypad", type: "open-keypad", shortcut: "\\", val: "" },
                    ],
                    updateI18nSymbols: function updateI18nSymbols(t, e, i) {
                        !(function updateCuratedSymbols(t) {
                            var e = t.labels.mathKeyboardSymbols || {};
                            a.a.each(h, function (t) {
                                var i = t.name;
                                a.a.extend(t, { title: i ? e[i] : t.title });
                            });
                        })(t),
                            (function updateDefaultInputUiSymbols(t, e, i) {
                                var n = t.labels.mathKeyboardTitle || {};
                                a.a.each(e, function (t) {
                                    var e = m[t] || {},
                                        s = a.a.findWhere(i, { id: t }),
                                        r = (s && s.label) || n[t] || e.title || t.title;
                                    a.a.isEmpty(r) || (m[t] = a.a.extend(e, { title: r }));
                                });
                            })(t, e, i),
                            (function updateMasterCollection(t) {
                                a.a.each(getNewerFormatMasterCollection().models, function (e) {
                                    var i = a.a.findWhere(t, { id: e.id });
                                    a.a.extend(e.attributes, { title: i.title });
                                });
                            })(h);
                    },
                    getForToolbar: function getForToolbar(t) {
                        return getCollection(t || p);
                    },
                    getForKeyboard: function getForKeyboard(t) {
                        return getCollection(t || b);
                    },
                    getForInputUi: function getForInputUi(t, e) {
                        var i = {},
                            n = 0,
                            s = this;
                        function formatSymbolsGroup(t, i) {
                            var n = {};
                            return (
                                ((i = i || m[t]).render_latex = !a.a.isBoolean(i.render_latex) || i.render_latex),
                                i.value && ((i = a.a.clone(i)), (n = s.calculateGroupDimensions(i.value, e))),
                                ("Keyboard" !== i.name && "Handwriting" !== i.name) || ((n.columnCount = 4), (n.hasSymbols = !0), (n.processedSymbols = []), (n.custom = !0)),
                                (i.value = n.processedSymbols),
                                (i.hasSymbols = n.hasSymbols),
                                (i.rowCount = n.rowCount),
                                (i.columnCount = n.hasSymbols ? n.columnCount : 0),
                                (i.custom = n.custom),
                                i
                            );
                        }
                        return (
                            a.a.each(t, function (t) {
                                if (
                                    (a.a.isString(t) && m[t] && s.isAvailable(m[t], e) && (i[t] = formatSymbolsGroup(t)),
                                    a.a.isObject(t) && t.label && a.a.isArray(t.value) && (i["custom" + ++n] = formatSymbolsGroup(void 0, t)),
                                    a.a.isString(t) && "master" === t)
                                ) {
                                    var r = { id: ["=", "\\response"], style: ["lrn-btn-grid-num", "lrn-btn-grid-operator", "lrn-btn-grid-dir"] },
                                        o = a.a.reduce(
                                            h,
                                            function (t, e) {
                                                var i = e.id,
                                                    n = e.style;
                                                return i && -1 === r.id.indexOf(i) && -1 === r.style.indexOf(n) && t.push(i), t;
                                            },
                                            []
                                        );
                                    i.master = formatSymbolsGroup(null, { title: "All Symbols", label: "All Symbols", value: o });
                                }
                            }),
                            i
                        );
                    },
                    getForInputNumberPad: function getForInputNumberPad(t) {
                        return this.calculateGroupDimensions(t);
                    },
                    calculateGroupDimensions: function calculateGroupDimensions(t, e) {
                        var i,
                            n = [],
                            s = 1,
                            r = 1,
                            o = 0,
                            l = !1,
                            u = this;
                        return (
                            a.a.each(t, function (t, i) {
                                var h;
                                a.a.isString(t) ? (h = c.get(t)) : a.a.isObject(t) && t.symbol && (h = c.get(t.symbol)) && h.set(a.a.omit(t, "symbol")),
                                    t.length > 0 && ((l = !0), (o = i + 1), r > s && (s = r)),
                                    r % 4 == 0 ? (r = 1) : r++,
                                    h && u.isAvailable(h.attributes, e) && n.push(h);
                            }),
                            (i = Math.ceil(o / 4)),
                            { processedSymbols: n, columnCount: s, rowCount: i, hasSymbols: l }
                        );
                    },
                    isAvailable: function isAvailable(t, e) {
                        var i = e ? "chemistry" : "math";
                        return !a.a.isArray(t.contexts) || a.a.contains(t.contexts, i);
                    },
                    getShortcutsMap: function getShortcutsMap() {
                        return this.getNewerFormatMasterCollection(), c.getShortcutsMap();
                    },
                    getNewerFormatMasterCollection: getNewerFormatMasterCollection,
                });
        },
        143: function (t, e, i) {
            "use strict";
            var n = {};
            function clear(t) {
                var e = n[t];
                e && (clearTimeout(e), delete n[t]);
            }
            e.a = {
                start: function start(t, e) {
                    var i = arguments,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                    clear(t);
                    var s = function repeatFn() {
                        e(), start.apply(null, i);
                    };
                    n[t] = setTimeout(s, a);
                },
                clear: clear,
            };
        },
        145: function (t, e, i) {
            "use strict";
            var n = i(0),
                a = i.n(n),
                s = function filterUnfocusableElements(t) {
                    return a.a.filter(t, function (t) {
                        return !a.a.isNull(t) && !t.disabled && t.offsetWidth > 0 && t.offsetHeight > 0;
                    });
                },
                r = {
                    left: function left(t) {
                        if (t) {
                            t = s(t);
                            var e = this.getFocusedElement(t).index;
                            e ? e > 0 && t[e - 1].focus() : t[t.length - 1].focus();
                        }
                    },
                    top: function top(t) {
                        t = s(t);
                        var e = this.getFocusedElement(t).element;
                        if (e) {
                            var i = e.getBoundingClientRect(),
                                n = a.a.findLastIndex(t, function (t) {
                                    var e = t.getBoundingClientRect();
                                    if (e.top < i.top && e.left <= i.left) return !0;
                                });
                            n >= 0 && t[n].focus();
                        }
                    },
                    right: function right(t) {
                        t = s(t);
                        var e = this.getFocusedElement(t).index;
                        t && !1 !== e && (e === t.length - 1 ? t[0].focus() : e < t.length - 1 && t[e + 1].focus());
                    },
                    bottom: function bottom(t) {
                        t = s(t);
                        var e = this.getFocusedElement(t).element;
                        if (e) {
                            var i = e.getBoundingClientRect(),
                                n = a.a.findIndex(t, function (t) {
                                    var e = t.getBoundingClientRect();
                                    if (e.top > i.top && e.left >= i.left) return !0;
                                });
                            n >= 0 && t[n].focus();
                        }
                    },
                    getFocusedElement: function getFocusedElement(t) {
                        var e = document.activeElement,
                            i = t.indexOf(e);
                        return i < 0 ? {} : { element: e, index: i };
                    },
                };
            e.a = r;
        },
        155: function (t, e, i) {
            "use strict";
            i.d(e, "a", function () {
                return y;
            });
            var n = i(0),
                a = i.n(n),
                s = i(125),
                r = i.n(s),
                o = i(145),
                l = i(139),
                c = i(143),
                u = i(133),
                h = i(130);
            function _typeof(t) {
                return (_typeof =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function _typeof(t) {
                              return typeof t;
                          }
                        : function _typeof(t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function _createClass(t, e, i) {
                return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
            }
            function _inherits(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && _setPrototypeOf(t, e);
            }
            function _setPrototypeOf(t, e) {
                return (_setPrototypeOf =
                    Object.setPrototypeOf ||
                    function _setPrototypeOf(t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function _createSuper(t) {
                var e = (function _isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function _createSuperInternal() {
                    var i,
                        n = _getPrototypeOf(t);
                    if (e) {
                        var a = _getPrototypeOf(this).constructor;
                        i = Reflect.construct(n, arguments, a);
                    } else i = n.apply(this, arguments);
                    return _possibleConstructorReturn(this, i);
                };
            }
            function _possibleConstructorReturn(t, e) {
                return !e || ("object" !== _typeof(e) && "function" != typeof e) ? _assertThisInitialized(t) : e;
            }
            function _assertThisInitialized(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function _getPrototypeOf(t) {
                return (_getPrototypeOf = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function _getPrototypeOf(t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function _defineProperty(t, e, i) {
                return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
            }
            var d = u.a.UP,
                p = u.a.DOWN,
                m = u.a.ESCAPE,
                f = u.a.TAB,
                b = u.a.SHIFT;
            function getLabelContent(t, e) {
                var i = t;
                return a.a.isFunction(t) && (i = t(e)), a.a.isString(i) ? i : "";
            }
            function Button(t) {
                var e = t.title,
                    i = t.icon,
                    n = t.label,
                    s = t.value,
                    o = t.index,
                    l = t.selectedIndex,
                    c = t.selectOption,
                    u = t.onKeyDown,
                    h = t.cacheButton,
                    d = l === o ? "lrn_selected" : "",
                    p = getLabelContent(n, s);
                return r.a.createElement(
                    "button",
                    {
                        title: e,
                        "aria-label": e,
                        className: "lrn_btn lrn_dropdown_option ".concat(d),
                        type: "button",
                        unselectable: "on",
                        tabIndex: "0",
                        onClick: function onClick() {
                            return c(o);
                        },
                        onKeyDown: u,
                        ref: function ref(t) {
                            return h && h(t);
                        },
                    },
                    (function getIcon() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = a.a.isString(t.className) ? t.className : "",
                            i = a.a.isString(t.content) ? t.content : "";
                        return e || i ? r.a.createElement("span", { className: "lrn_icon ".concat(e), dangerouslySetInnerHTML: { __html: i } }) : null;
                    })(i),
                    r.a.createElement("span", { className: "lrn_content", dangerouslySetInnerHTML: { __html: p } })
                );
            }
            function ScrollingIndicator(t) {
                var e = t.scrollStart,
                    i = t.scrollEnd;
                return r.a.createElement("div", { className: "lrn_scrolling_indicator", onMouseEnter: e, onMouseLeave: i }, r.a.createElement("span", { className: "lrn_caret" }));
            }
            function Viewport(t) {
                var e = t.children,
                    i = t.setEl,
                    n = t.setContentEl,
                    a = t.viewportStyle,
                    s = (void 0 === a ? {} : a).height;
                return r.a.createElement("div", { className: "lrn_viewport", style: { height: s }, ref: i }, r.a.createElement("div", { className: "lrn_viewport_content", ref: n }, e));
            }
            var g = (function (t) {
                    _inherits(DropdownMenu, t);
                    var e = _createSuper(DropdownMenu);
                    function DropdownMenu(t) {
                        var i;
                        return (
                            _classCallCheck(this, DropdownMenu),
                            _defineProperty(_assertThisInitialized((i = e.call(this, t))), "MIN_VIEWPORT_SIZE", 150),
                            _defineProperty(_assertThisInitialized(i), "VIEWPORT_GAP", 50),
                            _defineProperty(_assertThisInitialized(i), "buttons", []),
                            _defineProperty(_assertThisInitialized(i), "state", { viewport: null, scrollTop: 0 }),
                            _defineProperty(_assertThisInitialized(i), "focusIndex", 0),
                            _defineProperty(_assertThisInitialized(i), "cacheButton", function (t) {
                                t && i.buttons.push(t);
                            }),
                            _defineProperty(_assertThisInitialized(i), "requestToClose", function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    e = i.props,
                                    n = e.onRequestClose,
                                    a = e.isTabbable,
                                    s = e.timeOfLastToggle,
                                    r = Date.now() - s;
                                r < 200 || (c.a.clear("custom_dropdown"), i._removeAllEvents(), n && n(t), a && (i.focusIndex = 0));
                            }),
                            _defineProperty(_assertThisInitialized(i), "selectOption", function (t) {
                                var e = i.props,
                                    n = e.onChange,
                                    a = e.isTabbable;
                                n && n(t), a && (i.focusIndex = 0);
                            }),
                            _defineProperty(_assertThisInitialized(i), "_onKeyDown", function (t) {
                                var e = _assertThisInitialized(i).buttons,
                                    n = i.props,
                                    s = n.menuOptions,
                                    r = n.isTabbable,
                                    l = t.keyCode;
                                if (
                                    (function isSupportedKey(t) {
                                        return a.a.contains([d, p, m, f, b], t);
                                    })(l)
                                )
                                    if (r) {
                                        if (t.shiftKey && l === b) return;
                                        l !== f || t.shiftKey ? l === f && t.shiftKey && i.focusIndex-- : i.focusIndex++, l === f && i.focusIndex === s.length && i.requestToClose(!0);
                                    } else t.preventDefault(), l === m ? i.requestToClose(!0) : l === d ? o.a.top(e) : l === p && o.a.bottom(e);
                            }),
                            _defineProperty(_assertThisInitialized(i), "_scrollStart", function () {
                                var t = _assertThisInitialized(i),
                                    e = t.viewportEl,
                                    n = t.viewportContentEl;
                                c.a.start("custom_dropdown", function () {
                                    var t = e.scrollTop + 5;
                                    t < n.clientHeight - e.clientHeight && i.setState({ scrollTop: t });
                                });
                            }),
                            _defineProperty(_assertThisInitialized(i), "_scrollEnd", function () {
                                c.a.clear("custom_dropdown");
                            }),
                            (i.useViewport = !!a.a.isUndefined(t.useViewport) || t.useViewport),
                            i
                        );
                    }
                    return (
                        _createClass(DropdownMenu, [
                            {
                                key: "render",
                                value: function render() {
                                    var t = this,
                                        e = this.props,
                                        i = e.menuOptions,
                                        n = e.selectedIndex,
                                        s = e.className,
                                        o = e.renderOption,
                                        l = this.state.viewport,
                                        c = a.a.isString(s) ? s : "",
                                        u = (function () {
                                            if (l) return { height: "".concat(l.height, "px") };
                                        })(),
                                        h = (function getOptions() {
                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                e = t.menuOptions,
                                                i = void 0 === e ? [] : e,
                                                n = t.selectedIndex,
                                                a = t.selectOption,
                                                s = t.onKeyDown,
                                                o = t.cacheButton,
                                                l = t.renderOption;
                                            return i.map(function (t, e) {
                                                var i = t.title,
                                                    c = t.icon,
                                                    u = t.label,
                                                    h = t.value;
                                                if (l)
                                                    return (
                                                        (t.onClick = function () {
                                                            return a(e);
                                                        }),
                                                        (t.isActive = e === n),
                                                        (t.onKeyDown = function (t) {
                                                            return s(t);
                                                        }),
                                                        l(t)
                                                    );
                                                var d = { key: e, title: i, icon: c, label: u, value: h, index: e, selectedIndex: n, selectOption: a, onKeyDown: s, cacheButton: o };
                                                return r.a.createElement(Button, d);
                                            });
                                        })({ menuOptions: i, selectedIndex: n, selectOption: this.selectOption, onKeyDown: this._onKeyDown, cacheButton: this.cacheButton, renderOption: o });
                                    return r.a.createElement(
                                        "div",
                                        {
                                            ref: function ref(e) {
                                                return (t.el = e);
                                            },
                                            className: "lrn_dropdown_menu ".concat(c),
                                            role: "menu",
                                        },
                                        !this.useViewport && h,
                                        this.useViewport &&
                                            r.a.createElement(
                                                Viewport,
                                                {
                                                    setEl: function setEl(e) {
                                                        return (t.viewportEl = e);
                                                    },
                                                    setContentEl: function setContentEl(e) {
                                                        return (t.viewportContentEl = e);
                                                    },
                                                    viewportStyle: u,
                                                },
                                                h
                                            ),
                                        this.useViewport && u && r.a.createElement(ScrollingIndicator, { scrollStart: this._scrollStart, scrollEnd: this._scrollEnd })
                                    );
                                },
                            },
                            {
                                key: "UNSAFE_componentWillReceiveProps",
                                value: function UNSAFE_componentWillReceiveProps() {
                                    this.buttons = [];
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function componentWillUnmount() {
                                    this._removeAllEvents();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function componentDidUpdate(t) {
                                    var e = this.props,
                                        i = e.isOpen,
                                        n = e.focusToSelectedOption;
                                    if (i && !this._documentEventsAdded) {
                                        var a = this._getSelectedOptionElement();
                                        if ((n && a && a.focus(), this._bindListeners(), this.useViewport)) {
                                            var s = this._getViewport(),
                                                r = { viewport: s, scrollTop: this._getScrollTopByElement(a, s) };
                                            this.state !== r && this.setState(r);
                                        }
                                    } else i || (this._removeAllEvents(), t.isOpen !== i && this.setState({ viewport: null, scrollTop: 0 }));
                                    if (i) {
                                        var o = this.state.scrollTop;
                                        o > 0 && (this.viewportEl.scrollTop = o);
                                    }
                                },
                            },
                            {
                                key: "_getSelectedOptionElement",
                                value: function _getSelectedOptionElement() {
                                    var t = this.buttons,
                                        e = this.props;
                                    if (!a.a.isEmpty(t)) {
                                        var i = e.selectedIndex;
                                        return t[i >= 0 ? i : 0];
                                    }
                                },
                            },
                            {
                                key: "_bindListeners",
                                value: function _bindListeners() {
                                    document.addEventListener("click", this.requestToClose), (this._documentEventsAdded = !0);
                                },
                            },
                            {
                                key: "_removeAllEvents",
                                value: function _removeAllEvents() {
                                    document.removeEventListener("click", this.requestToClose), (this._documentEventsAdded = !1);
                                },
                            },
                            {
                                key: "_getViewport",
                                value: function _getViewport() {
                                    var t,
                                        e = this.el,
                                        i = this.viewportContentEl,
                                        n = e.getBoundingClientRect().top,
                                        a = i.getBoundingClientRect().height,
                                        s = this.VIEWPORT_GAP,
                                        r = this.MIN_VIEWPORT_SIZE,
                                        o = l.a.getViewportDimensions().height - n;
                                    if ((o < a && (t = o < r ? r : o), t)) return { top: n, height: (t -= s) };
                                },
                            },
                            {
                                key: "_getScrollTopByElement",
                                value: function _getScrollTopByElement(t, e) {
                                    if (!t || !e) return 0;
                                    var i = t.getBoundingClientRect(),
                                        n = i.top + i.height - e.top - e.height;
                                    return n > 0 ? n : 0;
                                },
                            },
                        ]),
                        DropdownMenu
                    );
                })(r.a.Component),
                y = (function (t) {
                    _inherits(Dropdown, t);
                    var e = _createSuper(Dropdown);
                    function Dropdown(t) {
                        var i;
                        _classCallCheck(this, Dropdown),
                            _defineProperty(_assertThisInitialized((i = e.call(this, t))), "toggle", function () {
                                var t = i.state.isOpen,
                                    e = !t,
                                    n = t && !e;
                                i.setState({ isOpen: e, focusToSelectedOption: !0, timeOfLastToggle: Date.now() }), n && i.buttonEl.focus();
                            }),
                            _defineProperty(_assertThisInitialized(i), "open", function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { focusToSelectedOption: !0 };
                                i.setState({ isOpen: !0, focusToSelectedOption: t.focusToSelectedOption });
                            }),
                            _defineProperty(_assertThisInitialized(i), "close", function () {
                                i.setState({ isOpen: !1 });
                            }),
                            _defineProperty(_assertThisInitialized(i), "setSelectedIndex", function (t) {
                                i.state.selectedIndex !== t ? i.setState({ selectedIndex: t, isOpen: !1 }) : i.close();
                            }),
                            _defineProperty(_assertThisInitialized(i), "_onDropdownRequestToClose", function (t) {
                                i.close(), t && i.buttonEl.focus();
                            }),
                            _defineProperty(_assertThisInitialized(i), "_onDropdownOptionChange", function (t) {
                                var e = i.props,
                                    n = e.menuOptions,
                                    a = e.onChange;
                                i.setSelectedIndex(t), i.buttonEl.focus(), a && a({ index: t, value: n[t].value });
                            }),
                            _defineProperty(_assertThisInitialized(i), "_onKeyDown", function (t) {
                                var e = t.keyCode;
                                (i.props.toggleButton || {}).disableArrowKey || (e === d || e === p ? (t.preventDefault(), i.open()) : e === f && t.shiftKey && i._onDropdownRequestToClose());
                            }),
                            _defineProperty(_assertThisInitialized(i), "_onBlur", function () {
                                var t = i.props.onBlur;
                                a.a.isFunction(t) && !i.isOpen() && i.buttonEl !== document.activeElement && t();
                            });
                        var n = t.selectedIndex,
                            s = t.scaleToFit,
                            r = t.isDisabled,
                            o = t.useViewport;
                        return (i.useViewport = !!a.a.isUndefined(o) || o), (i.state = { scaleToFit: s, selectedIndex: a.a.isNumber(n) ? n : -1, isOpen: !1, isDisabled: r, labelStyle: null, timeOfLastToggle: 0 }), i;
                    }
                    return (
                        _createClass(Dropdown, [
                            {
                                key: "componentDidMount",
                                value: function componentDidMount() {
                                    this.state.scaleToFit && this._updateSelectedLabel();
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function componentDidUpdate(t, e) {
                                    var i = this.props,
                                        n = i.updateComplete,
                                        s = i.renderMain,
                                        r = this.state,
                                        o = r.selectedIndex,
                                        l = r.scaleToFit;
                                    e.selectedIndex !== o
                                        ? (a.a.isFunction(n) && n(), a.a.isFunction(s) && s(o), l && this._updateSelectedLabel())
                                        : o !== this.props.selectedIndex && a.a.isNumber(this.props.selectedIndex) && this.setState({ selectedIndex: this.props.selectedIndex });
                                },
                            },
                            {
                                key: "render",
                                value: function render() {
                                    var t = this,
                                        e = this.state,
                                        i = e.selectedIndex,
                                        n = e.isOpen,
                                        s = e.isDisabled,
                                        o = e.focusToSelectedOption,
                                        l = e.timeOfLastToggle,
                                        c = this.props,
                                        u = c.ariaDescription,
                                        d = c.ariaSelected,
                                        p = c.menuOptions,
                                        m = c.popupClassName,
                                        f = c.containerClass,
                                        b = c.renderMain,
                                        y = c.renderOption,
                                        v = c.title,
                                        w = c.isTabbable,
                                        x = this._getSelectedOption().title || v,
                                        E = Object(h.a)(d, { title: x }),
                                        k = a.a.isFunction(b) ? b(this.state.selectedIndex) : this._getMainButtonContent(),
                                        T = ["lrn_btn", "lrn_dropdown_toggle", s ? "lrn_disabled" : ""].join(" "),
                                        q = ["lrn_dropdown", f || "", n ? "lrn_open" : ""].join(" ");
                                    return r.a.createElement(
                                        "div",
                                        { className: q },
                                        r.a.createElement(
                                            "button",
                                            {
                                                "aria-label": E,
                                                title: v,
                                                "aria-roledescription": u,
                                                className: T,
                                                type: "button",
                                                onClick: s ? void 0 : this.toggle,
                                                onKeyDown: s ? void 0 : this._onKeyDown,
                                                onBlur: s ? void 0 : this._onBlur,
                                                ref: function ref(e) {
                                                    return (t.buttonEl = e);
                                                },
                                            },
                                            k,
                                            r.a.createElement("span", { className: "lrn_caret lrn_caret_right" })
                                        ),
                                        r.a.createElement(g, {
                                            menuOptions: p,
                                            className: m,
                                            selectedIndex: i,
                                            isOpen: n,
                                            timeOfLastToggle: l,
                                            isTabbable: w,
                                            focusToSelectedOption: o,
                                            useViewport: this.useViewport,
                                            onChange: this._onDropdownOptionChange,
                                            onRequestClose: this._onDropdownRequestToClose,
                                            renderOption: y,
                                        })
                                    );
                                },
                            },
                            {
                                key: "isOpen",
                                value: function isOpen() {
                                    return this.state.isOpen;
                                },
                            },
                            {
                                key: "_getMainButtonContent",
                                value: function _getMainButtonContent() {
                                    var t = this,
                                        e = this.state.labelStyle,
                                        i = this._getSelectedOption(),
                                        n = i.label,
                                        a = i.value;
                                    return r.a.createElement("span", {
                                        ref: function ref(e) {
                                            return (t.buttonLabelEl = e);
                                        },
                                        className: "lrn_content",
                                        style: e,
                                        dangerouslySetInnerHTML: { __html: getLabelContent(n, a) },
                                    });
                                },
                            },
                            {
                                key: "_getSelectedOption",
                                value: function _getSelectedOption() {
                                    var t = this.state.selectedIndex,
                                        e = this.props.menuOptions;
                                    return e && e.length > t && t >= 0 ? e[t] : { title: "", label: "" };
                                },
                            },
                            {
                                key: "_updateSelectedLabel",
                                value: function _updateSelectedLabel() {
                                    var t = this.buttonEl,
                                        e = this.buttonLabelEl;
                                    if (t && e) {
                                        var i = t.getBoundingClientRect(),
                                            n = e.getBoundingClientRect(),
                                            a = n.height - i.height,
                                            s = null;
                                        if (a > 0) {
                                            var r = 1 - a / n.height;
                                            s = { transform: "scale(".concat(r, ")"), transformOrigin: "left top" };
                                        }
                                        s !== this.state.labelStyle && this.setState({ labelStyle: s });
                                    }
                                },
                            },
                        ]),
                        Dropdown
                    );
                })(r.a.Component);
        },
        157: function (t, e, i) {
            "use strict";
            var n = i(0),
                a = i.n(n),
                s = i(5),
                r = i.n(s);
            function MathEvents() {}
            var o = {
                AWAIT_UPDATE: "await-update",
                CHANGE_DISABLED_STATE: "change-disabled-state",
                CONTENT_OUTDATED: "content-outdated",
                EDITOR_BLURRED: "editor-blurred",
                EDITOR_FOCUSED: "editor-focused",
                EDITOR_PRESSED: "editor-pressed",
                EDITOR_SPOKENMATH_UPDATED: "editor-spokenmath-updated",
                EDITOR_REMOVED: "editor-removed",
                ESCAPE_UI: "escape-ui",
                ESCAPE_UI_WITHOUT_KEYBOARD: "escape-ui-without-keyboard",
                EXTERNAL_KEY: "external-key",
                GET_ACTIVE_ID: "get-active-id",
                ITEM_BLURRED: "item-blurred",
                ITEM_FOCUSED: "item-focused",
                MATH_COMMAND: "math-command",
                RESET_STATE: "reset-state",
                SET_ERROR: "set-error",
                SHIFT_KEY: "shift-key",
                TAB_EDITOR: "tab-away-from-editor",
                UPDATED: "updated",
                WRITE_LATEX: "write-latex",
            };
            (MathEvents.prototype = a.a.extend({ EVENT: o }, r.a.Events)), a.a.extend(MathEvents, o), (e.a = MathEvents);
        },
        160: function (t, e, i) {
            "use strict";
            var n = i(5),
                a = i.n(n),
                s = i(0),
                r = i.n(s),
                o = i(50),
                l = ["toggle"],
                c = ["Left", "Right", "Backspace", "÷", "×", "-", "+", "="];
            switch (o.a.getOs()) {
                case "osx":
                    l = ["shift", "opt"];
                    break;
                case "windows":
                case "unix":
                case "linux":
                    l = ["shift", "alt"];
            }
            var u = a.a.Model.extend({
                keysForToggle: l,
                keyForCtrlToggle: "ctrl",
                ariaHiddenSymbols: c,
                defaults: { type: "write" },
                initialize: function initialize() {
                    this.createDisplayableShortcut(), this.on("change:shortcut", this.createDisplayableShortcut, this);
                },
                createDisplayableShortcut: function createDisplayableShortcut() {
                    var t = r.a.clone(this.get("shortcut"));
                    "toggle" === r.a.first(t) && (t = r.a.union(this.keysForToggle, r.a.rest(t, 1))),
                        "ctrl" === r.a.first(t) && (t = r.a.union(["ctrl"], r.a.rest(t))),
                        t && t[0] === this.get("title") && (t = []),
                        this.set("displayableShortcut", t);
                },
                renderLabelAsLatex: function renderLabelAsLatex() {
                    var t = this.get("label_latex");
                    return r.a.isBoolean(t) ? t : this.get("label").indexOf("\\") > -1;
                },
                isPlaceholder: function isPlaceholder() {
                    return "" === this.get("id");
                },
                isFunctional: function isFunctional() {
                    return !("addmatrixcol" === this.get("name") || "addmatrixrow" === this.get("name")) && "keystroke" === this.get("type");
                },
                hasOwnStyle: function hasOwnStyle() {
                    return !!this.get("style");
                },
                isAria: function isAria(t) {
                    return r.a.contains(c, t);
                },
            });
            e.a = a.a.Collection.extend({
                model: u,
                get: function get(t) {
                    return (
                        a.a.Collection.prototype.get.apply(this, arguments) ||
                        this.find(function (e) {
                            return r.a.contains(e.get("aliases"), t);
                        })
                    );
                },
                add: function add(t) {
                    this.isUnique(t) && a.a.Collection.prototype.add.apply(this, arguments);
                },
                isUnique: function isUnique(t) {
                    var e = (t.aliases && r.a.union(t.aliases, t.id)) || [];
                    return !this.any(function (i) {
                        return t.id === i.id || r.a.intersection(e, i.get("aliases")).length;
                    });
                },
                getShortcutsMap: function getShortcutsMap() {
                    var t = {};
                    return (
                        this.each(function (e) {
                            var i = e.get("shortcut");
                            "toggle" === r.a.first(i) && (t[i[1]] = e);
                        }),
                        t
                    );
                },
                getGroups: function getGroups() {
                    var t = r.a.unique(this.pluck("group")),
                        e = this;
                    return r.a.map(t, function (t) {
                        return e.where({ group: t });
                    });
                },
                getFirstInEachGroup: function getFirstInEachGroup() {
                    return r.a.map(this.getGroups(), r.a.first);
                },
            });
        },
        163: function (t, e, i) {
            "use strict";
            var n = i(1),
                a = i.n(n),
                s = i(5),
                r = i.n(s),
                o = i(0),
                l = i.n(o),
                c = i(62),
                u = i.n(c),
                h = i(141),
                d = i(157),
                p = i(4),
                m = i(7),
                f = i(50),
                b = i(131),
                g = i(24),
                y = i(164),
                v = i.n(y),
                w = i(165),
                x = {
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    191: "/",
                    220: "\\",
                    8: "Backspace",
                    32: "Spacebar",
                    13: "Enter",
                    9: "Tab",
                    37: "Left",
                    38: "Up",
                    39: "Right",
                    40: "Down",
                    16: "Shift",
                },
                E = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                k = h.a.ctrlShortcuts,
                T = h.a.getShortcutsMap();
            e.a = r.a.View.extend({
                MAX_MATH_DEPTH: 40,
                events: {
                    "keypress span.lrn_math_editable": "keyPress",
                    "keyup span.lrn_math_editable": "keyUp",
                    "keydown span.lrn_math_editable": "keyDown",
                    "click span.lrn_math_editable": "editorPressed",
                    "touchstart span.lrn_math_editable": "editorPressed",
                    "cut .lrn_focusable": "updateModel",
                    "paste .lrn_focusable": "updateModel",
                    "focus .lrn_focusable": "onFocus",
                    "blur .lrn_focusable": "onBlur",
                },
                mathEvents: void 0,
                shortcutKeyTime: 500,
                shiftIsPressed: !1,
                template: v.a,
                initialize: function initialize() {
                    (this.keys = ""),
                        u.a.config({ autoCommands: "lim" }),
                        (this.mathEvents = new d.a()),
                        this.addRenderingLogic(),
                        this.displayLogic.isReadOnly && (this.events = {}),
                        this.render(),
                        this.bindHandwritingEvents(),
                        this.listenTo(this.mathEvents, this.mathEvents.EVENT.MATH_COMMAND, this.enterMath, this),
                        this.listenTo(this.mathEvents, this.mathEvents.EVENT.ESCAPE_UI, this.refocusEditor, this),
                        this.listenTo(this.mathEvents, this.mathEvents.EVENT.ESCAPE_UI_WITHOUT_KEYBOARD, this.refocusEditorWithoutKeyboard, this),
                        this.displayLogic.templateAriaLabel ||
                            ((this.$logger = this.$('[data-lrn-component="logger"]')),
                            (this.dynamicAriaLabel = l.a.debounce(this.dynamicAriaLabel.bind(this), 300)),
                            this.listenTo(this.mathEvents, this.mathEvents.EVENT.UPDATED, this.dynamicAriaLabel, this)),
                        this.listenTo(
                            this.mathEvents,
                            this.mathEvents.EVENT.EXTERNAL_KEY,
                            function (t, e) {
                                var i = a.a.Event(t.type, l.a.pick(t, "type", "keyCode", "metaKey", "shiftKey", "altKey", "which"));
                                this.$("span.lrn_math_editable").trigger(i);
                            },
                            this
                        ),
                        this.listenTo(this.mathEvents, this.mathEvents.EVENT.WRITE_LATEX, this.clearAndWrite),
                        this.listenTo(
                            this.mathEvents,
                            this.mathEvents.EVENT.CHANGE_DISABLED_STATE,
                            function (t) {
                                this.options.disableInput !== t && ((this.options.disableInput = t), this.addRenderingLogic(), this.render());
                            },
                            this
                        );
                },
                addRenderingLogic: function addRenderingLogic() {
                    (this.displayLogic = {}),
                        (this.displayLogic.isReadOnly = this.options.readOnly),
                        (this.displayLogic.disableInput = this.options.disableInput),
                        (this.displayLogic.hasOwnBorder = this.options.clozeBordering && (this.options.readOnly || !this.hasEditableAreas())),
                        (this.displayLogic.templateAriaLabel = this.options.templateAriaLabel);
                },
                bindHandwritingEvents: function bindHandwritingEvents() {
                    var t,
                        e = this.mathEvents,
                        i = this.$("span.lrn_math_editable"),
                        n = i.attr("title") || "";
                    function resetState() {
                        i.removeClass("lrn-state-outdated lrn-state-awaiting-update lrn-state-error").attr("title", n);
                    }
                    this.listenTo(e, e.EVENT.CONTENT_OUTDATED, function () {
                        resetState(), i.addClass("lrn-state-outdated");
                    }),
                        this.listenTo(e, e.EVENT.AWAIT_UPDATE, function () {
                            resetState(), i.addClass("lrn-state-awaiting-update");
                        }),
                        this.listenTo(e, e.EVENT.SET_ERROR, function (e) {
                            resetState(), i.addClass("lrn-state-error").attr("title", e), clearTimeout(t), (t = setTimeout(resetState, 5e3));
                        }),
                        this.listenTo(e, e.EVENT.GET_ACTIVE_ID, function (t) {
                            var e = a()(document.activeElement).filter(".lrn_focusable");
                            t((e.length ? e : this.$(".lrn_focusable")).prop("id"));
                        }),
                        this.listenTo(e, e.EVENT.RESET_STATE, resetState);
                },
                bindTextareaListeners: function bindTextareaListeners(t) {
                    var e = this.mathEvents,
                        i = this,
                        n = t[0],
                        a = n.value;
                    (this.textareas = this.textareas || []),
                        this.textareas.push(t),
                        t.on("input.lrn.formulaeditor", function (t) {
                            var s = i.getMathCommand(a, n.value);
                            s && (s.unshift(e.EVENT.MATH_COMMAND), e.trigger.apply(e, s)), (a = n.value);
                        }),
                        t.on("keyup.lrn.formulaeditor", function (t) {
                            var e = i.mathquill.latex();
                            0 === n.value.length && e.length && ((n.value = "a"), (n.selectionStart = 0), (n.selectionEnd = "a".length), (a = n.value));
                        }),
                        t.on("paste.lrn.formulaeditor", function () {
                            i.removeTextareas();
                        });
                },
                clearAndWrite: function clearAndWrite(t) {
                    (t = this.convertDynamicVarsForMathquill(t)), this.mathquill.clear().write(t), this.updateModel();
                },
                editorPressed: function editorPressed(t) {
                    this.mathEvents.trigger(this.mathEvents.EVENT.EDITOR_PRESSED);
                },
                enterMath: function enterMath(t, e, i) {
                    var n = u()(this.getMqEl()),
                        a = i && i.get("extra_commands");
                    window.clearTimeout(this.shortcutKeyTimeout),
                        (this.keys = ""),
                        l.a.isFunction(n[t]) &&
                            (n[t](e),
                            l.a.each(a || [], function (t) {
                                l.a.isFunction(n[t.type]) && n[t.type](t.val);
                            }),
                            this.updateModel());
                },
                getMathCommand: function getMathCommand(t, e) {
                    return e.length === t.length + 1 && 0 === e.indexOf(t) ? ["typedText", e[e.length - 1]] : e.length === t.length - 1 ? ["keystroke", "Backspace"] : void 0;
                },
                getMqEl: function getMqEl() {
                    return this.$("span.lrn_math_editable")[0];
                },
                getValue: function getValue() {
                    var t = this.displayLogic.isReadOnly,
                        e = this.currentEditables || this.options.editables || [],
                        i = this.options.template,
                        n = this.currentValue || this.options.value || i || "";
                    return (
                        this.hasEditableAreas() &&
                            ((e = l.a.clone(e)),
                            (n = i.replace(/{{response}}/g, function () {
                                var i = e.shift() || "";
                                return t && i.length ? " " + i : "\\MathQuillMathField{" + i + "}";
                            }))),
                        (n = this.convertDynamicVarsForMathquill(n))
                    );
                },
                handlePipeSymbol: function handlePipeSymbol() {
                    this.mathEvents.trigger(this.mathEvents.EVENT.MATH_COMMAND, "cmd", "\\abs");
                },
                addMathQuillVarField: function addMathQuillVarField(t) {
                    var e = "\\MathQuillVarField{\\text{" + t + "}}";
                    this.mathquill.write(e), this.updateModel();
                },
                hasEditableAreas: function hasEditableAreas() {
                    var t = this.options.template;
                    return l.a.isString(t) && t.length > 0 && t.indexOf("{{response}}") > -1;
                },
                keyDown: function keyDown(t) {
                    var e,
                        i = x[t.keyCode],
                        n = this.mathEvents;
                    if (t.shiftKey && t.altKey) return !1;
                    if (i && i.length > 1) {
                        if (
                            (t.shiftKey && "Shift" !== i ? (i = "Shift-" + i) : "Spacebar" === i && (i = "space"),
                            "Tab" === i && (e = b.a.getNextTab(document.activeElement, ["MathJax", "lrn_dropdown_toggle"])) && ((e.originalEvent = t), n.trigger(n.EVENT.TAB_EDITOR, e)),
                            "Shift" === i)
                        ) {
                            if (this.shiftIsPressed) return;
                            n.trigger(n.EVENT.SHIFT_KEY), (this.shiftIsPressed = !0);
                        }
                        n.trigger(n.EVENT.MATH_COMMAND, "no-input", i);
                    }
                    this.updateModel();
                },
                keyPress: function keyPress(t) {
                    var e = t.which || t.keyCode,
                        i = t.key || String.fromCharCode(e),
                        n = this.mathEvents,
                        a = t.metaKey || t.ctrlKey;
                    this.removeTextareas();
                    var s = "\\" === i && !this.options.enableRawLatex;
                    return (
                        !l.a.contains(E, e) &&
                        ("*" === i && (i = "×"),
                        "$" === i
                            ? (n.trigger(n.EVENT.MATH_COMMAND, "write", "\\$"), !1)
                            : "|" === i
                            ? (this.handlePipeSymbol(), !1)
                            : s
                            ? (this.preventRawLatexBeingEntered(), !1)
                            : ((i = i.replace("\t", "")), a || 1 !== i.length ? void 0 : (b.a.capsLock.correctStatus(t), n.trigger(n.EVENT.MATH_COMMAND, "typedText", i), !1)))
                    );
                },
                keyUp: function keyUp(t) {
                    var e = this.mathEvents,
                        i = x[t.keyCode];
                    if (
                        (t.altKey &&
                            t.shiftKey &&
                            i &&
                            ((this.keys = this.keys + i),
                            window.clearTimeout(this.shortcutKeyTimeout),
                            window.clearTimeout(this.resetKeyTimeout),
                            !(function noOtherShortcutBeginsWith(t) {
                                return !l.a.find(l.a.keys(T), function (e) {
                                    return e !== t && 0 === e.indexOf(t);
                                });
                            })(this.keys)
                                ? this.setShortcutKeyTimeout()
                                : this.sendShortcut()),
                        t.ctrlKey && i)
                    ) {
                        var n = l.a.findWhere(k, { shortcut: i });
                        n && e.trigger(e.EVENT.MATH_COMMAND, n.type, n.val);
                    }
                    t.shiftKey || "Shift" !== i || (e.trigger(e.EVENT.SHIFT_KEY), (this.shiftIsPressed = !1));
                },
                getAriaLabel: function getAriaLabel() {
                    return this.options.response_container && this.options.response_container.aria_label
                        ? this.options.response_container.aria_label
                        : this.options.aria_label
                        ? this.options.aria_label
                        : this.options.i18n.labels.responseArea;
                },
                mathquillify: function mathquillify() {
                    var t,
                        e = this.currentValue,
                        i = this.displayLogic.isReadOnly,
                        n = this.displayLogic.disableInput,
                        s = e.indexOf("\\MathQuillMathField") < 0,
                        r = e.indexOf("\\MathQuillMathField{}") > -1,
                        o = f.a.isTouchDevice(),
                        c = this.options.showInputUi,
                        h = l.a.uniq(this.options.text_blocks || []),
                        d = this.options.persistent_id || "",
                        m = 0,
                        b = this,
                        g = this.getAriaLabel();
                    this.mathquill && (this.mathEvents.trigger(this.mathEvents.EVENT.EDITOR_BLURRED), this.mathquill.revert()),
                        i || n
                            ? ((this.mathquill = u.a.InertMath(this.getMqEl(), { disableItalics: this.options.disableItalics, maxDepth: this.MAX_MATH_DEPTH })),
                              this.displayLogic.templateAriaLabel || (this.$('[data-lrn-component="logger"]').removeAttr("aria-live").removeAttr("aria-hidden"), this.dynamicAriaLabel()))
                            : ((this.mathquill = u.a[s ? "MathField" : "StaticMathWithEditables"](this.getMqEl(), {
                                  handlers: {},
                                  substituteTextarea: function substituteTextarea() {
                                      var t = o && c ? "span" : "textarea",
                                          e = a()("<" + t + ">").attr({ tabindex: "0", class: "lrn_focusable", id: "focusable" + m++ + d });
                                      if (("textarea" === t && (e.attr({ "aria-label": g, autocomplete: "off", autocapitalize: "none" }), b.bindTextareaListeners(e)), e.length > 0)) return e[0];
                                  },
                                  unItalicizedTextCmds: h,
                                  disableItalics: this.options.disableItalics,
                                  maxDepth: this.MAX_MATH_DEPTH,
                              })),
                              this.$(".lrn_focusable").eq(0).attr("tabindex", "0"));
                    try {
                        this.mathquill.latex(e);
                    } catch (e) {
                        t = !0;
                    }
                    i || n || !(e.length > 0) || "" !== this.mathquill.latex() || (!s && r) || (t = !0),
                        t && p.a.exception({ code: 10023, detail: e }),
                        s || (this.$(".mq-inner-editable").addClass("lrn_bordered_mathinput"), this.$(".mq-selectable").attr("aria-hidden", !0)),
                        this.$("span[mathquill-command-id]").each(function (t, e) {
                            var i = a()(e);
                            !i.hasClass("mq-non-leaf") && !i.hasClass("mq-editable-field") && i.attr("aria-hidden", !0);
                        }),
                        this.$(".mq-sqrt-prefix, var, .mq-paren").attr("aria-hidden", !0),
                        this.setResponseSizing();
                },
                onAttach: function onAttach() {
                    var t = this;
                    Object(g.a)(this.$el, function () {
                        t.mathquill.reflow();
                    });
                },
                onBlur: function onBlur(t) {
                    this.onFocusChange(t), this.mathEvents.trigger(this.mathEvents.EVENT.ITEM_BLURRED);
                },
                onFocus: function onFocus(t) {
                    this.preventEditorFocus || (this.onFocusChange(t), this.mathEvents.trigger(this.mathEvents.EVENT.EDITOR_FOCUSED)), (this.preventEditorFocus = !1);
                },
                onFocusChange: function onFocusChange(t) {
                    var e = "focusin" === t.type;
                    a()(t.currentTarget).closest(".lrn_bordered_mathinput").toggleClass("lrn_focused", e), m.a.isAppleWebKit && m.a.isMobile && b.a.toggleBackgroundClickable(e);
                },
                preventRawLatexBeingEntered: function preventRawLatexBeingEntered() {
                    this.mathEvents.trigger(this.mathEvents.EVENT.MATH_COMMAND, "cmd", "\\backslash");
                },
                refocusEditor: function refocusEditor() {
                    this.$(".mq-textarea .lrn_focusable").filter('[tabindex="0"]').eq(0).trigger("focus");
                },
                refocusEditorWithoutKeyboard: function refocusEditorWithoutKeyboard() {
                    (this.preventEditorFocus = !0), this.$(".mq-textarea .lrn_focusable").filter('[tabindex="0"]').eq(0).trigger("focus");
                },
                remove: function remove() {
                    var t = this.$(".lrn_focusable")
                        .map(function () {
                            return a()(this).prop("id");
                        })
                        .get();
                    return this.removeTextareas(), r.a.View.prototype.remove.call(this), this.mathEvents.trigger(this.mathEvents.EVENT.EDITOR_REMOVED, t), this;
                },
                removeTextareas: function removeTextareas() {
                    this.textareas &&
                        (l()(this.textareas).each(function (t) {
                            t.off(".lrn.formulaeditor");
                        }),
                        delete this.textareas);
                },
                render: function render() {
                    return (this.currentValue = this.getValue()), this.$el.html(this.template({ displayLogic: this.displayLogic })), this.mathquillify(), a.a.contains(document, this.el) && this.onAttach(), this;
                },
                sendShortcut: function sendShortcut() {
                    var t = T[this.keys],
                        e = this.mathEvents;
                    return !(!t || !e.trigger(e.EVENT.MATH_COMMAND, t.get("type"), t.get("val"), t));
                },
                setResponseSizing: function setResponseSizing() {
                    var t = this.options.response_container,
                        e = this.options.response_containers,
                        i = this.hasEditableAreas(),
                        n = this;
                    function resizeBlock(t, e) {
                        var i = !1;
                        e && e.width && (t.css("min-width", e.width), (i = !0)), e && e.height && (t.css("min-height", e.height), (i = !0)), i && (t.css("display", "inline-block"), n.mathquill.reflow());
                    }
                    !i || !t || (e && e.length) || (e = [t]),
                        i && l.a.isArray(e)
                            ? this.$(".mq-inner-editable .mq-root-block").each(function (i) {
                                  var n = e[i] || t;
                                  resizeBlock(a()(this), n);
                              })
                            : t && (resizeBlock(this.$el, t), t.height && a()(this.getMqEl()).css("min-height", t.height));
                },
                setShortcutKeyTimeout: function setShortcutKeyTimeout() {
                    var t = this;
                    this.shortcutKeyTimeout = window.setTimeout(function () {
                        t.sendShortcut() ||
                            (t.resetKeyTimeout = window.setTimeout(function () {
                                t.keys = "";
                            }, 3 * t.shortcutKeyTime));
                    }, this.shortcutKeyTime);
                },
                updateModel: function updateModel() {
                    var t = "ie" === m.a.browser && m.a.version <= 8 ? 50 : 0,
                        e = this;
                    l.a.delay(function () {
                        var t = u()(e.getMqEl()),
                            i = e.convertDynamicVarsFromMathquill(t.latex()),
                            n = (t.editables && t.editables()) || [];
                        e.currentValue !== i &&
                            ((e.currentValue = i),
                            (e.currentEditables = n.map(function (t) {
                                return e.convertDynamicVarsFromMathquill(t.latex);
                            })),
                            e.mathEvents.trigger(e.mathEvents.EVENT.UPDATED, i, e.currentEditables));
                    }, t);
                },
                dynamicAriaLabel: function dynamicAriaLabel() {
                    var t = this;
                    if (!this.options.disableSpokenmathUserInputs) {
                        var e = this.getValue();
                        w.a.process(e).then(function (e) {
                            t.$logger.text(e), t.mathEvents.trigger(t.mathEvents.EVENT.EDITOR_SPOKENMATH_UPDATED, e);
                        });
                    }
                },
                convertDynamicVarsForMathquill: function convertDynamicVarsForMathquill(t) {
                    return t.replace(/{{var:([a-z0-9 _]+)}}/gi, "\\MathQuillVarField{\\text{$1}}");
                },
                convertDynamicVarsFromMathquill: function convertDynamicVarsFromMathquill(t) {
                    return t.replace(/\{\{var:\\text\{([^\}]*)\}{3}/gi, "{{var:$1}}");
                },
            });
        },
        164: function (module, exports, __webpack_require__) {
            var _ = __webpack_require__(0);
            module.exports = function (obj) {
                var __t,
                    __p = "",
                    __j = Array.prototype.join,
                    print = function () {
                        __p += __j.call(arguments, "");
                    };
                with (obj || {})
                    (__p += '<span class="lrn-spokenmath" aria-live="polite" data-lrn-component="logger"></span><span class="lrn_math_editable'),
                        displayLogic.hasOwnBorder && (__p += " lrn_bordered_mathinput"),
                        (__p += ""),
                        displayLogic.disableInput && ((__p += ""), displayLogic.hasOwnBorder && (__p += " mq-editable-field"), (__p += " lrn_hide_cursor")),
                        (__p += '"'),
                        displayLogic.templateAriaLabel && (__p += 'aria-label="' + (null == (__t = displayLogic.templateAriaLabel) ? "" : _.escape(__t)) + '"'),
                        (__p += "></span>");
                return __p;
            };
        },
        165: function (t, e, i) {
            "use strict";
            i.d(e, "a", function () {
                return l;
            });
            var n = i(0),
                a = i.n(n),
                s = i(3),
                r = i(13);
            function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            var o = "spokenmathWorker";
            var l = new ((function () {
                function SingletonWorker(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    _classCallCheck(this, SingletonWorker),
                        (this._loading = !1),
                        (this._collections = []),
                        (this._resolveCollections = this._resolveCollections.bind(this)),
                        (this.getPostMessage = e.getPostMessage.bind(this)),
                        (this.processReceivedMessage = e.processReceivedMessage.bind(this));
                }
                return (
                    (function _createClass(t, e, i) {
                        return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
                    })(SingletonWorker, [
                        {
                            key: "process",
                            value: function process(t) {
                                var e = this,
                                    i = this._collections;
                                return new s.default(function (n) {
                                    i.push({ data: t, resolve: n }), e._loading || e._loadWorker();
                                });
                            },
                        },
                        {
                            key: "_loadWorker",
                            value: function _loadWorker() {
                                var t = this;
                                (this._loading = !0),
                                    (function loadWorker(t) {
                                        return new s.default(function (e) {
                                            r.a
                                                .getExposedExternalBundle(t)()
                                                .then(function (t) {
                                                    e(t);
                                                });
                                        });
                                    })(o).then(function (e) {
                                        var i = new e(),
                                            n = t._collections,
                                            s = a.a.pluck(n, "data");
                                        i.postMessage(t.getPostMessage(s)),
                                            i.addEventListener("message", function (e) {
                                                var a = e.data;
                                                i.terminate(), (t._loading = !1), t._resolveCollections(t.processReceivedMessage(a)), n.length && t._loadWorker();
                                            });
                                    });
                            },
                        },
                        {
                            key: "_resolveCollections",
                            value: function _resolveCollections() {
                                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = this._collections; t.length && e.length; ) {
                                    var i = e.shift(),
                                        n = i.resolve;
                                    n(t.shift());
                                }
                            },
                        },
                    ]),
                    SingletonWorker
                );
            })())(o, {
                getPostMessage: function getPostMessage(t) {
                    return { latexes: t };
                },
                processReceivedMessage: function processReceivedMessage(t) {
                    return t.value;
                },
            });
        },
        166: function (module, exports, __webpack_require__) {
            var _ = __webpack_require__(0);
            module.exports = function (obj) {
                var __t,
                    __p = "",
                    __j = Array.prototype.join,
                    print = function () {
                        __p += __j.call(arguments, "");
                    };
                with (obj || {}) {
                    if (
                        ((__p +=
                            '<div class="sr-only lrn-formula-keypad-arialive" aria-live="polite"></div><div class="lrn-formula-keyboard lrn_clearfix" role="toolbar" aria-label="' +
                            (null == (__t = labels.ariaLabel.mathKeyboard.title) ? "" : _.escape(__t)) +
                            '"><div class="lrn_toolbar lrn-formula-keyboard-menu lrn_clearfix ' +
                            (null == (__t = horizontalLayout && "lrn-formula-keyboard-menu--horizontal") ? "" : __t) +
                            " " +
                            (null == (__t = !showHints && "lrn-formula-keyboard-menu--no-hints") ? "" : __t) +
                            '"><div class="lrn-drag-area"><div class="lrn-drag-handler"><span></span><span></span><span></span><span></span></div>'),
                        showCloseButton &&
                            (__p +=
                                '<div class="lrn-formula-keyboard-close"><button class="lrn-formula-keyboard-close-button" tabindex="0" aria-label="' +
                                (null == (__t = labels.ariaLabel.mathKeyboard.close) ? "" : _.escape(__t)) +
                                '"></button></div>'),
                        (__p += '</div><div class="clearfix"><div class="lrn-formula-keyboard-menu-left">'),
                        _.keys(symbolGroups).length && (__p += '<div class="lrn-formula-keyboard-menu-container lrn-formula-keyboard-menu-groups" data-lrn-component="menuGroup"></div>'),
                        (__p += ""),
                        showHints && (__p += '<span class="lrn-formula-keyboard-hint lrn-empty"><span class="lrn-hint-title"></span> <span class="lrn-hint-shortcut lrn-desktop-only"></span></span>'),
                        (__p += '</div><div class="lrn-formula-keyboard-menu-right">'),
                        showHints &&
                            (__p +=
                                '<div class="lrn-formula-keyboard-menu-container  lrn-formula-keyboard-menu-help  lrn-desktop-only"><button type="button" class="lrn-formula-keyboard-help-button" data-type="help" tabindex="-1" aria-label="' +
                                (null == (__t = labels.ariaLabel.mathKeyboard.help) ? "" : _.escape(__t)) +
                                '"></button></div>'),
                        (__p += '</div></div></div><div class="lrn-keyboard-holder">'),
                        numberPadSymbols.hasSymbols)
                    ) {
                        __p += "";
                        var fullKeypadClassName = "lrn-keyboard-wrapper-" + numberPadSymbols.columnCount + "-columns";
                        __p += '<div class="lrn-formula-keyboard-main ' + (null == (__t = horizontalLayout ? "lrn-formula-keyboard--horizontal" : fullKeypadClassName) ? "" : __t) + '">';
                        var numberPadIndex = 1,
                            numberPadRowIndex = 0;
                        _.each(numberPadSymbols.processedSymbols, function (t) {
                            if (((__p += ""), numberPadRowIndex < numberPadSymbols.rowCount)) {
                                if (((__p += ""), numberPadIndex <= numberPadSymbols.columnCount)) {
                                    var e = t.get("style") || "lrn-btn-grid-sym";
                                    (__p +=
                                        '<button type="button"class="' +
                                        (null == (__t = t.isPlaceholder() ? "lrn-btn-placeholder" : "lrn_btn_grid " + e) ? "" : __t) +
                                        '"aria-label="' +
                                        (null == (__t = t.get("title") || "") ? "" : __t) +
                                        '"data-mq-command="' +
                                        (null == (__t = t.get("type")) ? "" : _.escape(__t)) +
                                        '"data-mq-value="' +
                                        (null == (__t = t.get("val")) ? "" : _.escape(__t)) +
                                        '"tabindex="-1"'),
                                        _.isArray(t.get("displayableShortcut")) &&
                                            ((__p += ""),
                                            showHints && (__p += 'title="' + (null == (__t = t.get("title")) ? "" : _.escape(__t)) + '"'),
                                            (__p += 'data-shortcut="' + (null == (__t = t.get("displayableShortcut").join(" + ")) ? "" : _.escape(__t)) + '"')),
                                        (__p += ">"),
                                        t.isAria(t.get("val"))
                                            ? ((__p += '<span aria-hidden="true"'),
                                              t.isFunctional() ? (__p += 'class="' + (null == (__t = t.get("key_style")) ? "" : _.escape(__t)) + '">') : (__p += ">" + (null == (__t = t.get("val")) ? "" : _.escape(__t))),
                                              (__p += '</span><span class="sr-only">' + (null == (__t = t.get("title")) ? "" : _.escape(__t)) + "</span>"))
                                            : ((__p += ""),
                                              t.renderLabelAsLatex()
                                                  ? (__p += '<span class="mathquill-embedded-latex">' + (null == (__t = t.get("label")) ? "" : _.escape(__t)) + "</span>")
                                                  : (__p +=
                                                        '<span class="lrn-btn-grid-sym__label" data-symbol-id="' +
                                                        (null == (__t = t.get("val")) ? "" : _.escape(__t)) +
                                                        '">' +
                                                        (null == (__t = t.get("label")) ? "" : _.escape(__t)) +
                                                        "</span>"),
                                              (__p += "")),
                                        (__p += "</button>");
                                }
                                numberPadIndex === numberPadSymbols.columnCount && numberPadRowIndex++, 4 === numberPadIndex ? (numberPadIndex = 1) : numberPadIndex++;
                            }
                        }),
                            (__p += "</div>");
                    }
                    (__p += ""),
                        !horizontalLayout &&
                            _.each(symbolGroups, function (t, e) {
                                if (((__p += ""), t.value.length)) {
                                    (__p += '<div class="lrn-formula-keyboard-page lrn-keyboard-wrapper-' + (null == (__t = t.columnCount) ? "" : __t) + '-columns" data-symbol-group="' + (null == (__t = e) ? "" : __t) + '">'),
                                        "master" === e && (__p += '<div class="lrn-formula-keyboard-mask">');
                                    var i = 1,
                                        n = 0;
                                    _.each(t.value, function (e) {
                                        (__p += ""),
                                            n < t.rowCount &&
                                                ((__p += ""),
                                                i <= t.columnCount &&
                                                    ((__p +=
                                                        '<button aria-label="' +
                                                        (null == (__t = e.get("title") || "") ? "" : __t) +
                                                        '"type="button"class="' +
                                                        (null == (__t = e.isPlaceholder() ? " lrn-btn-placeholder " : "lrn_btn_grid") ? "" : __t) +
                                                        (null == (__t = e.isFunctional() ? " lrn-btn-grid-sym-functional" : "") ? "" : __t) +
                                                        (null == (__t = e.hasOwnStyle() ? " " + e.get("style") : " lrn-btn-grid-sym") ? "" : __t) +
                                                        '"data-symbol-cid="' +
                                                        (null == (__t = e.cid) ? "" : _.escape(__t)) +
                                                        '"data-symbol-id="' +
                                                        (null == (__t = e.get("id")) ? "" : _.escape(__t)) +
                                                        '"data-mq-command="' +
                                                        (null == (__t = e.get("type")) ? "" : _.escape(__t)) +
                                                        '"data-mq-value="' +
                                                        (null == (__t = e.get("val")) ? "" : _.escape(__t)) +
                                                        '"tabindex="-1"'),
                                                    _.isArray(e.get("displayableShortcut")) &&
                                                        ((__p += ""),
                                                        showHints && (__p += 'title="' + (null == (__t = e.get("title")) ? "" : _.escape(__t)) + '"'),
                                                        (__p += 'data-shortcut="' + (null == (__t = e.get("displayableShortcut").join(" + ")) ? "" : _.escape(__t)) + '"')),
                                                    (__p += ">"),
                                                    e.isFunctional()
                                                        ? (__p +=
                                                              '<span aria-hidden="true" class="' +
                                                              (null == (__t = e.get("key_style")) ? "" : _.escape(__t)) +
                                                              '"></span><span class="sr-only">' +
                                                              (null == (__t = e.get("label")) ? "" : _.escape(__t)) +
                                                              "</span>")
                                                        : e.renderLabelAsLatex()
                                                        ? (__p += '<span class="mathquill-embedded-latex">' + (null == (__t = e.get("label")) ? "" : _.escape(__t)) + "</span>")
                                                        : (__p +=
                                                              '<span class="lrn-btn-grid-sym__label" data-symbol-id="' +
                                                              (null == (__t = e.get("val")) ? "" : _.escape(__t)) +
                                                              '">' +
                                                              (null == (__t = e.get("label")) ? "" : _.escape(__t)) +
                                                              "</span>"),
                                                    (__p += "</button>")),
                                                i === t.columnCount && n++,
                                                4 === i ? (i = 1) : i++);
                                    }),
                                        (__p += ""),
                                        "master" === e && (__p += "</div>"),
                                        (__p += "</div>");
                                }
                                __p += "";
                            }),
                        (__p +=
                            '</div><div class="lrn-qwerty lrn-formula-keyboard-page" data-symbol-group="qwerty"><div class="lrn-qwerty-row lrn-qwerty-row-1"><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="1" tabindex="-1">1</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="2" tabindex="-1">2</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="3" tabindex="-1">3</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="4" tabindex="-1">4</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="5" tabindex="-1">5</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="6" tabindex="-1">6</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="7" tabindex="-1">7</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="8" tabindex="-1">8</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="9" tabindex="-1">9</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="0" tabindex="-1">0</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="keystroke" data-mq-value="Backspace" tabindex="-1"><span aria-hidden="true" class="lrn_backspace"></span><span class="sr-only">Backspace</span></button></div><div class="lrn-qwerty-row lrn-qwerty-row-2"><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="q" tabindex="-1">q</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="w" tabindex="-1">w</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="e" tabindex="-1">e</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="r" tabindex="-1">r</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="t" tabindex="-1">t</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="y" tabindex="-1">y</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="u" tabindex="-1">u</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="i" tabindex="-1">i</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="o" tabindex="-1">o</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="p" tabindex="-1">p</button></div><div class="lrn-qwerty-row lrn-qwerty-row-3"><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="a" tabindex="-1">a</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="s" tabindex="-1">s</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="d" tabindex="-1">d</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="f" tabindex="-1">f</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="g" tabindex="-1">g</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="h" tabindex="-1">h</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="j" tabindex="-1">j</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="k" tabindex="-1">k</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="l" tabindex="-1">l</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value=":" tabindex="-1">:</button></div><div class="lrn-qwerty-row lrn-qwerty-row-4"><button type="button" class="lrn_btn_grid lrn-btn-grid-dir" data-mq-command="keystroke" data-mq-value="Up" tabindex="-1"><span aria-hidden="true">↑</span><span class="sr-only">Up</span></button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="z" tabindex="-1">z</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="x" tabindex="-1">x</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="c" tabindex="-1">c</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="v" tabindex="-1">v</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="b" tabindex="-1">b</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="n" tabindex="-1">n</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="m" tabindex="-1">m</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="," tabindex="-1">,</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid" data-mq-command="write" data-mq-value="." tabindex="-1">.</button></div><div class="lrn-qwerty-row lrn-qwerty-row-5"><button type="button" class="lrn_btn_grid lrn-btn-grid-dir " data-mq-command="keystroke" data-mq-value="Left" tabindex="-1"><span aria-hidden="true">←</span><span class="sr-only">Left</span></button><button type="button" class="lrn_btn_grid lrn-btn-grid-dir " data-mq-command="keystroke" data-mq-value="Down" tabindex="-1"><span aria-hidden="true">↓</span><span class="sr-only">Down</span></button><button type="button" class="lrn_btn_grid lrn-btn-grid-dir"  data-mq-command="keystroke" data-mq-value="Right" tabindex="-1"><span aria-hidden="true">→</span><span class="sr-only">Right</span></button><button type="button" class="lrn-qwerty-btn lrn-spacebar lrn_btn_grid" data-mq-command="cmd" data-mq-value="space" tabindex="-1">␣</button><button type="button" class="lrn-qwerty-btn lrn_btn_grid lrn_btn_caps" data-type="caps" data-mq-value="Shift" tabindex="-1"><span aria-hidden="true">⇧</span><span class="sr-only">Caps Lock</span></button></div></div><div class="lrn lrn-handwriting lrn-formula-keyboard-page" data-symbol-group="handwriting"></div></div>');
                }
                return __p;
            };
        },
        167: function (module, exports, __webpack_require__) {
            var _ = __webpack_require__(0);
            module.exports = function (obj) {
                var __t,
                    __p = "",
                    __j = Array.prototype.join,
                    print = function () {
                        __p += __j.call(arguments, "");
                    };
                with (obj || {})
                    (__p +=
                        '<div class="lrn lrn-formula-symbols-help"><div class="lrn-close lrn-ignore-mousedown"></div><div class="lrn-content lrn-ignore-mousedown lrn-math-keep-keyboard-open" tabindex="0" autofocus><h3>' +
                        (null == (__t = formulaHelpLabels.title) ? "" : __t) +
                        "</h3><p>" +
                        (null == (__t = formulaHelpLabels.shortcuts) ? "" : __t) +
                        "</p><table>"),
                        _.each(symbolGroups, function (t, e) {
                            (__p += '<tr><td colspan="3"><h4>' + (null == (__t = t.title) ? "" : __t) + "</h4></td></tr>"),
                                _.each(t.value, function (t) {
                                    (__p += ""),
                                        _.isArray(t.get("displayableShortcut")) &&
                                            t.get("displayableShortcut").length &&
                                            ((__p += "<tr><td>"),
                                            t.renderLabelAsLatex()
                                                ? (__p += '<span class="mathquill-embedded-latex">' + (null == (__t = t.get("label")) ? "" : __t) + "</span>")
                                                : (__p += "" + (null == (__t = t.get("label").replace("<", "&lt;").replace(">", "&gt;")) ? "" : __t)),
                                            (__p +=
                                                "</td><td>" +
                                                (null == (__t = t.get("title")) ? "" : __t) +
                                                '</td><td class="lrn-shortcut">' +
                                                (null == (__t = t.get("displayableShortcut").join(" + ").replace("<", "&lt;").replace(">", "&gt;")) ? "" : __t) +
                                                "</td></tr>")),
                                        (__p += "");
                                }),
                                (__p += "");
                        }),
                        (__p += '</table><p class="lrn-disclaimer">' + (null == (__t = formulaHelpLabels.disclaimer) ? "" : __t) + "</p></div></div>");
                return __p;
            };
        },
        168: function (module, exports, __webpack_require__) {
            var _ = __webpack_require__(0);
            module.exports = function (obj) {
                var __t,
                    __p = "",
                    __j = Array.prototype.join,
                    print = function () {
                        __p += __j.call(arguments, "");
                    };
                with (obj || {})
                    (__p +=
                        '<span class="lrn-accessibility-label">To answer this question, you need to highlight areas of an image. If you have trouble seeing the image, you should skip this question.</span><div class="lrn_canvas_drawing"><div class="lrn_toolbar"><ul class="lrn_toolbar_left">'),
                        displayLogic.canPaint &&
                            (__p +=
                                '<li class="lrn_btn lrn_clear lrn_disabled" title="' +
                                (null == (__t = labels.clear) ? "" : __t) +
                                '" aria-label="' +
                                (null == (__t = labels.clear) ? "" : _.escape(__t)) +
                                '" role="button"><button class="lrn-label" type="button" tabindex="0">' +
                                (null == (__t = labels.clear) ? "" : __t) +
                                '</button></li><li class="lrn_btn lrn_undo lrn_disabled" title="' +
                                (null == (__t = labels.undo) ? "" : __t) +
                                '" aria-label="' +
                                (null == (__t = labels.undo) ? "" : _.escape(__t)) +
                                '" role="button"><button class="lrn-label" type="button" tabindex="0">' +
                                (null == (__t = labels.undo) ? "" : __t) +
                                '</button></li><li class="lrn_btn lrn_redo lrn_disabled" title="' +
                                (null == (__t = labels.redo) ? "" : __t) +
                                '" aria-label="' +
                                (null == (__t = labels.redo) ? "" : _.escape(__t)) +
                                '" role="button"><button class="lrn-label" type="button" tabindex="0">' +
                                (null == (__t = labels.redo) ? "" : __t) +
                                "</button></li>"),
                        (__p += ""),
                        displayLogic.showRedraw && (__p += '<li class="lrn_btn lrn_replay" title="' + (null == (__t = labels.replay) ? "" : __t) + '"><span class="lrn-label">' + (null == (__t = labels.replay) ? "" : __t) + "</span></li>"),
                        (__p += ""),
                        lineColourData &&
                            _.isArray(lineColourData.colours) &&
                            lineColourData.colours.length > 1 &&
                            ((__p += '<li class="lrn_line_colour_palette"><a class="lrn_btn lrn_line_colour_palette_trigger"><span style="background: ' + (null == (__t = lineColourData.colours[0]) ? "" : __t) + ';"></span></a><ul>'),
                            _.each(lineColourData.colours, function (t, e) {
                                (__p += ""),
                                    e < lineColourData.limit &&
                                        ((__p += '<li class="lrn_btn_color_selector '),
                                        0 == e && (__p += "lrn_selected "),
                                        (__p += '" data-colour-selection="' + (null == (__t = t) ? "" : __t) + '"><span style="background: ' + (null == (__t = t) ? "" : __t) + ';"></span></li>')),
                                    (__p += "");
                            }),
                            (__p += "</ul></li>")),
                        (__p += '</ul></div><canvas class="lrn_canvas'),
                        displayLogic.canPaint && (__p += " lrn_paintable"),
                        (__p +=
                            '" tabindex="0">' +
                            (null == (__t = displayLogic.imageAlt) ? "" : _.escape(__t)) +
                            '</canvas><div class="lrn_keyboard_paintable" tabindex="0" aria-label="' +
                            (null == (__t = labels.ariaLabel.drawing.highlight) ? "" : _.escape(__t)) +
                            '"></div></div>');
                return __p;
            };
        },
        169: function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                if (
                    (window.ActiveXObject &&
                        !window.CanvasRenderingContext2D &&
                        (function (window, document, undefined) {
                            var NULL = null,
                                CANVAS = "canvas",
                                CANVAS_RENDERING_CONTEXT_2D = "CanvasRenderingContext2D",
                                CANVAS_GRADIENT = "CanvasGradient",
                                CANVAS_PATTERN = "CanvasPattern",
                                FLASH_CANVAS = "FlashCanvas",
                                G_VML_CANVAS_MANAGER = "G_vmlCanvasManager",
                                OBJECT_ID_PREFIX = "external",
                                ON_FOCUS = "onfocus",
                                ON_PROPERTY_CHANGE = "onpropertychange",
                                ON_READY_STATE_CHANGE = "onreadystatechange",
                                ON_UNLOAD = "onunload",
                                config = window[FLASH_CANVAS + "Options"] || {},
                                BASE_URL = config.swfPath || getScriptUrl().replace(/[^\/]+$/, ""),
                                SWF_URL = BASE_URL + "flashcanvas.swf",
                                INDEX_SIZE_ERR = 1,
                                NOT_SUPPORTED_ERR = 9,
                                INVALID_STATE_ERR = 11,
                                SYNTAX_ERR = 12,
                                TYPE_MISMATCH_ERR = 17,
                                SECURITY_ERR = 18;
                            function Lookup(t) {
                                for (var e = 0, i = t.length; e < i; e++) this[t[e]] = e;
                            }
                            var properties = new Lookup([
                                    "toDataURL",
                                    "save",
                                    "restore",
                                    "scale",
                                    "rotate",
                                    "translate",
                                    "transform",
                                    "setTransform",
                                    "globalAlpha",
                                    "globalCompositeOperation",
                                    "strokeStyle",
                                    "fillStyle",
                                    "createLinearGradient",
                                    "createRadialGradient",
                                    "createPattern",
                                    "lineWidth",
                                    "lineCap",
                                    "lineJoin",
                                    "miterLimit",
                                    "shadowOffsetX",
                                    "shadowOffsetY",
                                    "shadowBlur",
                                    "shadowColor",
                                    "clearRect",
                                    "fillRect",
                                    "strokeRect",
                                    "beginPath",
                                    "closePath",
                                    "moveTo",
                                    "lineTo",
                                    "quadraticCurveTo",
                                    "bezierCurveTo",
                                    "arcTo",
                                    "rect",
                                    "arc",
                                    "fill",
                                    "stroke",
                                    "clip",
                                    "isPointInPath",
                                    "font",
                                    "textAlign",
                                    "textBaseline",
                                    "fillText",
                                    "strokeText",
                                    "measureText",
                                    "drawImage",
                                    "createImageData",
                                    "getImageData",
                                    "putImageData",
                                    "addColorStop",
                                    "direction",
                                    "resize",
                                ]),
                                isReady = {},
                                images = {},
                                lock = {},
                                callbacks = {},
                                canvases = {},
                                spans = {},
                                CanvasRenderingContext2D = function (t, e) {
                                    (this.canvas = t), (this._swf = e), (this._canvasId = e.id.slice(8)), this._initialize(), (this._gradientPatternId = 0), (this._direction = ""), (this._font = "");
                                    var i = this;
                                    setInterval(function () {
                                        0 === lock[i._canvasId] && i._executeCommand();
                                    }, 30);
                                };
                            CanvasRenderingContext2D.prototype = {
                                save: function () {
                                    this._setCompositing(),
                                        this._setShadows(),
                                        this._setStrokeStyle(),
                                        this._setFillStyle(),
                                        this._setLineStyles(),
                                        this._setFontStyles(),
                                        this._stateStack.push([
                                            this._globalAlpha,
                                            this._globalCompositeOperation,
                                            this._strokeStyle,
                                            this._fillStyle,
                                            this._lineWidth,
                                            this._lineCap,
                                            this._lineJoin,
                                            this._miterLimit,
                                            this._shadowOffsetX,
                                            this._shadowOffsetY,
                                            this._shadowBlur,
                                            this._shadowColor,
                                            this._font,
                                            this._textAlign,
                                            this._textBaseline,
                                        ]),
                                        this._queue.push(properties.save);
                                },
                                restore: function () {
                                    var t = this._stateStack;
                                    if (t.length) {
                                        var e = t.pop();
                                        (this.globalAlpha = e[0]),
                                            (this.globalCompositeOperation = e[1]),
                                            (this.strokeStyle = e[2]),
                                            (this.fillStyle = e[3]),
                                            (this.lineWidth = e[4]),
                                            (this.lineCap = e[5]),
                                            (this.lineJoin = e[6]),
                                            (this.miterLimit = e[7]),
                                            (this.shadowOffsetX = e[8]),
                                            (this.shadowOffsetY = e[9]),
                                            (this.shadowBlur = e[10]),
                                            (this.shadowColor = e[11]),
                                            (this.font = e[12]),
                                            (this.textAlign = e[13]),
                                            (this.textBaseline = e[14]);
                                    }
                                    this._queue.push(properties.restore);
                                },
                                scale: function (t, e) {
                                    this._queue.push(properties.scale, t, e);
                                },
                                rotate: function (t) {
                                    this._queue.push(properties.rotate, t);
                                },
                                translate: function (t, e) {
                                    this._queue.push(properties.translate, t, e);
                                },
                                transform: function (t, e, i, n, a, s) {
                                    this._queue.push(properties.transform, t, e, i, n, a, s);
                                },
                                setTransform: function (t, e, i, n, a, s) {
                                    this._queue.push(properties.setTransform, t, e, i, n, a, s);
                                },
                                _setCompositing: function () {
                                    var t = this._queue;
                                    this._globalAlpha !== this.globalAlpha && ((this._globalAlpha = this.globalAlpha), t.push(properties.globalAlpha, this._globalAlpha)),
                                        this._globalCompositeOperation !== this.globalCompositeOperation &&
                                            ((this._globalCompositeOperation = this.globalCompositeOperation), t.push(properties.globalCompositeOperation, this._globalCompositeOperation));
                                },
                                _setStrokeStyle: function () {
                                    if (this._strokeStyle !== this.strokeStyle) {
                                        var t = (this._strokeStyle = this.strokeStyle);
                                        if ("string" == typeof t);
                                        else {
                                            if (!(t instanceof CanvasGradient || t instanceof CanvasPattern)) return;
                                            t = t.id;
                                        }
                                        this._queue.push(properties.strokeStyle, t);
                                    }
                                },
                                _setFillStyle: function () {
                                    if (this._fillStyle !== this.fillStyle) {
                                        var t = (this._fillStyle = this.fillStyle);
                                        if ("string" == typeof t);
                                        else {
                                            if (!(t instanceof CanvasGradient || t instanceof CanvasPattern)) return;
                                            t = t.id;
                                        }
                                        this._queue.push(properties.fillStyle, t);
                                    }
                                },
                                createLinearGradient: function (t, e, i, n) {
                                    return (isFinite(t) && isFinite(e) && isFinite(i) && isFinite(n)) || throwException(NOT_SUPPORTED_ERR), this._queue.push(properties.createLinearGradient, t, e, i, n), new CanvasGradient(this);
                                },
                                createRadialGradient: function (t, e, i, n, a, s) {
                                    return (
                                        (isFinite(t) && isFinite(e) && isFinite(i) && isFinite(n) && isFinite(a) && isFinite(s)) || throwException(NOT_SUPPORTED_ERR),
                                        (i < 0 || s < 0) && throwException(INDEX_SIZE_ERR),
                                        this._queue.push(properties.createRadialGradient, t, e, i, n, a, s),
                                        new CanvasGradient(this)
                                    );
                                },
                                createPattern: function (t, e) {
                                    t || throwException(TYPE_MISMATCH_ERR);
                                    var i,
                                        n = t.tagName,
                                        a = this._canvasId;
                                    if (n)
                                        if ("img" === (n = n.toLowerCase())) i = t.getAttribute("src", 2);
                                        else {
                                            if (n === CANVAS || "video" === n) return;
                                            throwException(TYPE_MISMATCH_ERR);
                                        }
                                    else t.src ? (i = t.src) : throwException(TYPE_MISMATCH_ERR);
                                    return (
                                        "repeat" !== e && "no-repeat" !== e && "repeat-x" !== e && "repeat-y" !== e && "" !== e && e !== NULL && throwException(SYNTAX_ERR),
                                        this._queue.push(properties.createPattern, encodeXML(i), e),
                                        !images[a][i] && isReady[a] && (this._executeCommand(), ++lock[a], (images[a][i] = !0)),
                                        new CanvasPattern(this)
                                    );
                                },
                                _setLineStyles: function () {
                                    var t = this._queue;
                                    this._lineWidth !== this.lineWidth && ((this._lineWidth = this.lineWidth), t.push(properties.lineWidth, this._lineWidth)),
                                        this._lineCap !== this.lineCap && ((this._lineCap = this.lineCap), t.push(properties.lineCap, this._lineCap)),
                                        this._lineJoin !== this.lineJoin && ((this._lineJoin = this.lineJoin), t.push(properties.lineJoin, this._lineJoin)),
                                        this._miterLimit !== this.miterLimit && ((this._miterLimit = this.miterLimit), t.push(properties.miterLimit, this._miterLimit));
                                },
                                _setShadows: function () {
                                    var t = this._queue;
                                    this._shadowOffsetX !== this.shadowOffsetX && ((this._shadowOffsetX = this.shadowOffsetX), t.push(properties.shadowOffsetX, this._shadowOffsetX)),
                                        this._shadowOffsetY !== this.shadowOffsetY && ((this._shadowOffsetY = this.shadowOffsetY), t.push(properties.shadowOffsetY, this._shadowOffsetY)),
                                        this._shadowBlur !== this.shadowBlur && ((this._shadowBlur = this.shadowBlur), t.push(properties.shadowBlur, this._shadowBlur)),
                                        this._shadowColor !== this.shadowColor && ((this._shadowColor = this.shadowColor), t.push(properties.shadowColor, this._shadowColor));
                                },
                                clearRect: function (t, e, i, n) {
                                    this._queue.push(properties.clearRect, t, e, i, n);
                                },
                                fillRect: function (t, e, i, n) {
                                    this._setCompositing(), this._setShadows(), this._setFillStyle(), this._queue.push(properties.fillRect, t, e, i, n);
                                },
                                strokeRect: function (t, e, i, n) {
                                    this._setCompositing(), this._setShadows(), this._setStrokeStyle(), this._setLineStyles(), this._queue.push(properties.strokeRect, t, e, i, n);
                                },
                                beginPath: function () {
                                    this._queue.push(properties.beginPath);
                                },
                                closePath: function () {
                                    this._queue.push(properties.closePath);
                                },
                                moveTo: function (t, e) {
                                    this._queue.push(properties.moveTo, t, e);
                                },
                                lineTo: function (t, e) {
                                    this._queue.push(properties.lineTo, t, e);
                                },
                                quadraticCurveTo: function (t, e, i, n) {
                                    this._queue.push(properties.quadraticCurveTo, t, e, i, n);
                                },
                                bezierCurveTo: function (t, e, i, n, a, s) {
                                    this._queue.push(properties.bezierCurveTo, t, e, i, n, a, s);
                                },
                                arcTo: function (t, e, i, n, a) {
                                    a < 0 && isFinite(a) && throwException(INDEX_SIZE_ERR), this._queue.push(properties.arcTo, t, e, i, n, a);
                                },
                                rect: function (t, e, i, n) {
                                    this._queue.push(properties.rect, t, e, i, n);
                                },
                                arc: function (t, e, i, n, a, s) {
                                    i < 0 && isFinite(i) && throwException(INDEX_SIZE_ERR), this._queue.push(properties.arc, t, e, i, n, a, s ? 1 : 0);
                                },
                                fill: function () {
                                    this._setCompositing(), this._setShadows(), this._setFillStyle(), this._queue.push(properties.fill);
                                },
                                stroke: function () {
                                    this._setCompositing(), this._setShadows(), this._setStrokeStyle(), this._setLineStyles(), this._queue.push(properties.stroke);
                                },
                                clip: function () {
                                    this._queue.push(properties.clip);
                                },
                                isPointInPath: function (t, e) {},
                                _setFontStyles: function () {
                                    var t = this._queue;
                                    if (this._font !== this.font)
                                        try {
                                            var e = spans[this._canvasId];
                                            e.style.font = this._font = this.font;
                                            var i = e.currentStyle,
                                                n = e.offsetHeight,
                                                a = [i.fontStyle, i.fontWeight, n, i.fontFamily].join(" ");
                                            t.push(properties.font, a);
                                        } catch (t) {}
                                    this._textAlign !== this.textAlign && ((this._textAlign = this.textAlign), t.push(properties.textAlign, this._textAlign)),
                                        this._textBaseline !== this.textBaseline && ((this._textBaseline = this.textBaseline), t.push(properties.textBaseline, this._textBaseline)),
                                        this._direction !== this.canvas.currentStyle.direction && ((this._direction = this.canvas.currentStyle.direction), t.push(properties.direction, this._direction));
                                },
                                fillText: function (t, e, i, n) {
                                    this._setCompositing(), this._setFillStyle(), this._setShadows(), this._setFontStyles(), this._queue.push(properties.fillText, encodeXML(t), e, i, n === undefined ? 1 / 0 : n);
                                },
                                strokeText: function (t, e, i, n) {
                                    this._setCompositing(), this._setStrokeStyle(), this._setShadows(), this._setFontStyles(), this._queue.push(properties.strokeText, encodeXML(t), e, i, n === undefined ? 1 / 0 : n);
                                },
                                measureText: function (t) {
                                    var e = spans[this._canvasId];
                                    try {
                                        e.style.font = this.font;
                                    } catch (t) {}
                                    return (e.innerText = ("" + t).replace(/[ \n\f\r]/g, "\t")), new TextMetrics(e.offsetWidth);
                                },
                                drawImage: function (t, e, i, n, a, s, r, o, l) {
                                    t || throwException(TYPE_MISMATCH_ERR);
                                    var c,
                                        u = t.tagName,
                                        h = arguments.length,
                                        d = this._canvasId;
                                    if (u)
                                        if ("img" === (u = u.toLowerCase())) c = t.getAttribute("src", 2);
                                        else {
                                            if (u === CANVAS || "video" === u) return;
                                            throwException(TYPE_MISMATCH_ERR);
                                        }
                                    else t.src ? (c = t.src) : throwException(TYPE_MISMATCH_ERR);
                                    if ((this._setCompositing(), this._setShadows(), (c = encodeXML(c)), 3 === h)) this._queue.push(properties.drawImage, h, c, e, i);
                                    else if (5 === h) this._queue.push(properties.drawImage, h, c, e, i, n, a);
                                    else {
                                        if (9 !== h) return;
                                        (0 !== n && 0 !== a) || throwException(INDEX_SIZE_ERR), this._queue.push(properties.drawImage, h, c, e, i, n, a, s, r, o, l);
                                    }
                                    !images[d][c] && isReady[d] && (this._executeCommand(), ++lock[d], (images[d][c] = !0));
                                },
                                createImageData: function () {},
                                getImageData: function (t, e, i, n) {},
                                putImageData: function (t, e, i, n, a, s, r) {},
                                loadImage: function (t, e, i) {
                                    var n,
                                        a = t.tagName,
                                        s = this._canvasId;
                                    a ? "img" === a.toLowerCase() && (n = t.getAttribute("src", 2)) : t.src && (n = t.src),
                                        n && !images[s][n] && ((e || i) && (callbacks[s][n] = [t, e, i]), this._queue.push(properties.drawImage, 1, encodeXML(n)), isReady[s] && (this._executeCommand(), ++lock[s], (images[s][n] = !0)));
                                },
                                _initialize: function () {
                                    (this.globalAlpha = this._globalAlpha = 1),
                                        (this.globalCompositeOperation = this._globalCompositeOperation = "source-over"),
                                        (this.strokeStyle = this._strokeStyle = "#000000"),
                                        (this.fillStyle = this._fillStyle = "#000000"),
                                        (this.lineWidth = this._lineWidth = 1),
                                        (this.lineCap = this._lineCap = "butt"),
                                        (this.lineJoin = this._lineJoin = "miter"),
                                        (this.miterLimit = this._miterLimit = 10),
                                        (this.shadowOffsetX = this._shadowOffsetX = 0),
                                        (this.shadowOffsetY = this._shadowOffsetY = 0),
                                        (this.shadowBlur = this._shadowBlur = 0),
                                        (this.shadowColor = this._shadowColor = "rgba(0, 0, 0, 0.0)"),
                                        (this.font = this._font = "10px sans-serif"),
                                        (this.textAlign = this._textAlign = "start"),
                                        (this.textBaseline = this._textBaseline = "alphabetic"),
                                        (this._queue = []),
                                        (this._stateStack = []);
                                },
                                _flush: function () {
                                    var t = this._queue;
                                    return (this._queue = []), t;
                                },
                                _executeCommand: function () {
                                    var commands = this._flush();
                                    if (commands.length > 0) return eval(this._swf.CallFunction('<invoke name="executeCommand" returntype="javascript"><arguments><string>' + commands.join("&#0;") + "</string></arguments></invoke>"));
                                },
                                _resize: function (t, e) {
                                    this._executeCommand(), this._initialize(), t > 0 && (this._swf.width = t), e > 0 && (this._swf.height = e), this._queue.push(properties.resize, t, e);
                                },
                            };
                            var CanvasGradient = function (t) {
                                (this._ctx = t), (this.id = t._gradientPatternId++);
                            };
                            CanvasGradient.prototype = {
                                addColorStop: function (t, e) {
                                    (isNaN(t) || t < 0 || t > 1) && throwException(INDEX_SIZE_ERR), this._ctx._queue.push(properties.addColorStop, this.id, t, e);
                                },
                            };
                            var CanvasPattern = function (t) {
                                    this.id = t._gradientPatternId++;
                                },
                                TextMetrics = function (t) {
                                    this.width = t;
                                },
                                DOMException = function (t) {
                                    (this.code = t), (this.message = DOMExceptionNames[t]);
                                };
                            DOMException.prototype = new Error();
                            var DOMExceptionNames = { 1: "INDEX_SIZE_ERR", 9: "NOT_SUPPORTED_ERR", 11: "INVALID_STATE_ERR", 12: "SYNTAX_ERR", 17: "TYPE_MISMATCH_ERR", 18: "SECURITY_ERR" };
                            function onReadyStateChange() {
                                if ("complete" === document.readyState) {
                                    document.detachEvent(ON_READY_STATE_CHANGE, onReadyStateChange);
                                    for (var t = document.getElementsByTagName(CANVAS), e = 0, i = t.length; e < i; ++e) FlashCanvas.initElement(t[e]);
                                }
                            }
                            function onFocus() {
                                var t = event.srcElement,
                                    e = t.parentNode;
                                t.blur(), e.focus();
                            }
                            function onPropertyChange() {
                                var t = event.propertyName;
                                if ("width" === t || "height" === t) {
                                    var e = event.srcElement,
                                        i = e[t],
                                        n = parseInt(i, 10);
                                    (isNaN(n) || n < 0) && (n = "width" === t ? 300 : 150), i === n ? ((e.style[t] = n + "px"), e.getContext("2d")._resize(e.width, e.height)) : (e[t] = n);
                                }
                            }
                            function onUnload() {
                                for (var t in (window.detachEvent(ON_UNLOAD, onUnload), canvases)) {
                                    var e,
                                        i = canvases[t],
                                        n = i.firstChild;
                                    for (e in n) "function" == typeof n[e] && (n[e] = NULL);
                                    for (e in i) "function" == typeof i[e] && (i[e] = NULL);
                                    n.detachEvent(ON_FOCUS, onFocus), i.detachEvent(ON_PROPERTY_CHANGE, onPropertyChange);
                                }
                                (window[CANVAS_RENDERING_CONTEXT_2D] = NULL), (window[CANVAS_GRADIENT] = NULL), (window[CANVAS_PATTERN] = NULL), (window[FLASH_CANVAS] = NULL), (window[G_VML_CANVAS_MANAGER] = NULL);
                            }
                            var FlashCanvas = {
                                setPath: function (t) {
                                    SWF_URL = (BASE_URL = t) + "flashcanvas.swf";
                                },
                                initElement: function (t) {
                                    if (t.getContext) return t;
                                    var e = getUniqueId(),
                                        i = OBJECT_ID_PREFIX + e;
                                    (isReady[e] = !1),
                                        (images[e] = {}),
                                        (lock[e] = 1),
                                        (callbacks[e] = {}),
                                        setCanvasSize(t),
                                        (t.innerHTML =
                                            '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' +
                                            location.protocol +
                                            '//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="' +
                                            i +
                                            '"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id=' +
                                            i +
                                            '"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>'),
                                        (canvases[e] = t);
                                    var n = t.firstChild;
                                    spans[e] = t.lastChild;
                                    var a = document.body.contains;
                                    if (a(t)) n.movie = SWF_URL;
                                    else
                                        var s = setInterval(function () {
                                            a(t) && (clearInterval(s), (n.movie = SWF_URL));
                                        }, 0);
                                    ("BackCompat" !== document.compatMode && window.XMLHttpRequest) || (spans[e].style.overflow = "hidden");
                                    var r = new CanvasRenderingContext2D(t, n);
                                    return (
                                        (t.getContext = function (t) {
                                            return "2d" === t ? r : NULL;
                                        }),
                                        (t.toDataURL = function (t, e) {
                                            return (
                                                "image/jpeg" === ("" + t).replace(/[A-Z]+/g, toLowerCase) ? r._queue.push(properties.toDataURL, t, "number" == typeof e ? e : "") : r._queue.push(properties.toDataURL, t), r._executeCommand()
                                            );
                                        }),
                                        n.attachEvent(ON_FOCUS, onFocus),
                                        t
                                    );
                                },
                                saveImage: function (t) {
                                    t.firstChild.saveImage();
                                },
                                setOptions: function (t) {},
                                trigger: function (t, e) {
                                    canvases[t].fireEvent("on" + e);
                                },
                                unlock: function (t, e, i) {
                                    var n, a, s, r, o, l, c;
                                    lock[t] && --lock[t],
                                        e === undefined
                                            ? ((a = (n = canvases[t]).firstChild),
                                              setCanvasSize(n),
                                              (s = n.width),
                                              (r = n.height),
                                              (n.style.width = s + "px"),
                                              (n.style.height = r + "px"),
                                              s > 0 && (a.width = s),
                                              r > 0 && (a.height = r),
                                              a.resize(s, r),
                                              n.attachEvent(ON_PROPERTY_CHANGE, onPropertyChange),
                                              (isReady[t] = !0),
                                              "function" == typeof n.onload &&
                                                  setTimeout(function () {
                                                      n.onload();
                                                  }, 0))
                                            : (o = callbacks[t][e]) && ((l = o[0]), (c = o[1 + i]), delete callbacks[t][e], "function" == typeof c && c.call(l));
                                },
                            };
                            function getScriptUrl() {
                                var t = document.getElementsByTagName("script"),
                                    e = t[t.length - 1];
                                return document.documentMode >= 8 ? e.src : e.getAttribute("src", 4);
                            }
                            function getUniqueId() {
                                return Math.random().toString(36).slice(2) || "0";
                            }
                            function encodeXML(t) {
                                return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
                            }
                            function toLowerCase(t) {
                                return t.toLowerCase();
                            }
                            function throwException(t) {
                                throw new DOMException(t);
                            }
                            function setCanvasSize(t) {
                                var e = parseInt(t.width, 10),
                                    i = parseInt(t.height, 10);
                                (isNaN(e) || e < 0) && (e = 300), (isNaN(i) || i < 0) && (i = 150), (t.width = e), (t.height = i);
                            }
                            document.createElement(CANVAS),
                                (document.createStyleSheet().cssText = CANVAS + "{display:inline-block;overflow:hidden;width:300px;height:150px}"),
                                "complete" === document.readyState ? onReadyStateChange() : document.attachEvent(ON_READY_STATE_CHANGE, onReadyStateChange),
                                window.attachEvent(ON_UNLOAD, onUnload),
                                (window[CANVAS_RENDERING_CONTEXT_2D] = CanvasRenderingContext2D),
                                (window[CANVAS_GRADIENT] = CanvasGradient),
                                (window[CANVAS_PATTERN] = CanvasPattern),
                                (window[FLASH_CANVAS] = FlashCanvas),
                                (window[G_VML_CANVAS_MANAGER] = { init: function () {}, init_: function () {}, initElement: FlashCanvas.initElement }),
                                (keep = [CanvasRenderingContext2D.measureText, CanvasRenderingContext2D.loadImage]);
                        })(window, document),
                    "undefined" != typeof FlashCanvas)
                )
                    return FlashCanvas;
            }.call(exports, __webpack_require__, exports, module)),
                void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
        },
        170: function (t, e, i) {
            "use strict";
            var n = i(1),
                a = i.n(n),
                s = i(0),
                r = i.n(s),
                o = function ScaleCompensator(t, e) {
                    var i = this;
                    (this.id = r.a.uniqueId("lrn_scale_compensator_")),
                        (this.$el = t),
                        (this.opts = e),
                        (this.scale = r.a.debounce(function () {
                            var t = r.a.bind(i.scaleAndPosition, i);
                            window.requestAnimationFrame ? window.requestAnimationFrame(t) : t();
                        }, e.debounceTime));
                };
            r.a.extend(o.prototype, {
                start: function start(t) {
                    return a()(window).on("resize." + this.id + " orientationchange." + this.id + " scroll." + this.id, this.scale), this;
                },
                stop: function stop() {
                    a()(window).off("." + this.id);
                },
                scaleAndPosition: function scaleAndPosition() {
                    var t = document.documentElement.clientWidth,
                        e = document.documentElement.clientHeight,
                        i = window.innerWidth,
                        n = window.innerHeight,
                        a = i / t,
                        s = "scale(" + a + ") translateX(" + window.pageXOffset / a + "px) translateY(" + -(e - (window.pageYOffset + n)) / a + "px)";
                    a > 0.99 ? (this.$el.removeClass("lrn_scalable"), (s = "")) : this.$el.addClass("lrn_scalable"), this.setTransform(s), this.opts.onUpdate(a);
                },
                setTransform: function setTransform(t) {
                    return this.$el.css({ transform: t, "-moz-transform": t, "-o-transform": t, "-webkit-transform": t, "-ms-transform": t }), this;
                },
                destroy: function destroy() {
                    this.stop(), this.setTransform("").$el.removeClass("lrn_scalable"), (this.$el = this.opts = null);
                },
            }),
                (e.a = o);
        },
        171: function (t, e, i) {
            "use strict";
            var n = i(5),
                a = i.n(n),
                s = i(125),
                r = i.n(s),
                o = i(128),
                l = i.n(o),
                c = i(155);
            function _extends() {
                return (_extends =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = arguments[e];
                            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                        }
                        return t;
                    }).apply(this, arguments);
            }
            function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function _defineProperty(t, e, i) {
                return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = i), t;
            }
            var u = (function () {
                function CustomDropdown(t, e) {
                    var i = this,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    _classCallCheck(this, CustomDropdown),
                        _defineProperty(this, "on", a.a.Events.on),
                        _defineProperty(this, "once", a.a.Events.once),
                        _defineProperty(this, "off", a.a.Events.off),
                        _defineProperty(this, "trigger", a.a.Events.trigger),
                        _defineProperty(this, "_selectedIndex", -1),
                        _defineProperty(this, "_value", null),
                        _defineProperty(this, "_onChange", function (t) {
                            var e = t.index,
                                n = t.value;
                            (i._selectedIndex = e), (i._value = n), i.trigger("change", { value: n, selectedIndex: e });
                        }),
                        _defineProperty(this, "_onBlur", function () {
                            i.trigger("blur");
                        }),
                        _defineProperty(this, "_onUpdateComplete", function () {
                            i.trigger("updateComplete");
                        }),
                        (this.el = t),
                        (this.menuOptions = e),
                        (this.options = n),
                        this._render();
                }
                return (
                    (function _createClass(t, e, i) {
                        return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
                    })(CustomDropdown, [
                        {
                            key: "open",
                            value: function open(t) {
                                this.component.open(t);
                            },
                        },
                        {
                            key: "close",
                            value: function close() {
                                this.component.close();
                            },
                        },
                        {
                            key: "isOpen",
                            value: function isOpen() {
                                return this.component.isOpen();
                            },
                        },
                        {
                            key: "_render",
                            value: function _render() {
                                var t = this.menuOptions,
                                    e = this.options;
                                this.component = l.a.render(
                                    r.a.createElement(
                                        c.a,
                                        _extends({}, e, { containerClass: "lrn_theme_primary", menuOptions: t, onChange: this._onChange, onBlur: this._onBlur, updateComplete: this._onUpdateComplete, selectedIndex: this.selectedIndex })
                                    ),
                                    this.el
                                );
                            },
                        },
                        {
                            key: "selectedIndex",
                            get: function get() {
                                return this._selectedIndex;
                            },
                            set: function set(t) {
                                (this._selectedIndex = t), this.component.setSelectedIndex(t);
                            },
                        },
                        {
                            key: "value",
                            get: function get() {
                                return this._value;
                            },
                        },
                    ]),
                    CustomDropdown
                );
            })();
            e.a = u;
        },
        173: function (t, e, i) {
            "use strict";
            var n = i(1),
                a = i.n(n),
                s = i(62),
                r = i.n(s),
                o = i(0),
                l = i.n(o),
                c = i(5),
                u = i.n(c),
                h = i(141),
                d = i(166),
                p = i.n(d),
                m = i(167),
                f = i.n(m),
                b = i(168),
                g = i.n(b),
                y = i(169),
                v = i.n(y),
                w = i(50),
                x = i(24),
                E = i(6),
                k = u.a.View.extend({
                    CLASSNAMES: {
                        TOOLBAR: ".lrn_toolbar",
                        CANVAS_WRAPPER: ".lrn_canvas_drawing",
                        LINE_COLOUR_PALETTE: ".lrn_line_colour_palette",
                        LINE_COLOUR_PALETTE_TRIGGER: ".lrn_line_colour_palette_trigger",
                        LINE_COLOUR_SELECTOR: ".lrn_btn_color_selector",
                        CANVAS: ".lrn_canvas",
                    },
                    DATA_SELECTOR: { LINE_COLOUR_DATA_SELECTION: "data-colour-selection" },
                    DEFAULT_CANVAS_WIDTH: 300,
                    DEFAULT_CANVAS_HEIGHT: 150,
                    EVENT: { SHOWN: "shown", UPDATED: "updated", LOAD_ERROR: "load-error", LOADED: "loaded", STROKE_BEGIN: "stroke-begin", RESET: "reset" },
                    MARK_TYPES: { GESTURE: "gesture", CLEAR: "clear" },
                    MAX_LINE_COLOUR_NUMBER: 6,
                    TOOLBAR_OPTIMISED_WIDTH: 300,
                    bgImg: null,
                    bgLoaded: !1,
                    bgImgScale: 1,
                    canPaint: !1,
                    events: {
                        "mousedown canvas.lrn_canvas.lrn_paintable": "startPainting",
                        "mousemove canvas.lrn_canvas.lrn_paintable": "paintToHere",
                        "mouseleave canvas.lrn_canvas.lrn_paintable": "stopPainting",
                        "mouseup canvas.lrn_canvas.lrn_paintable": "stopPainting",
                        "mousedown .lrn_old_ie canvas.lrn_canvas": "ie8PreventBlurEvent",
                        "mousedown .lrn_old_ie .lrn_btn": "ie8PreventBlurEvent",
                        "mousedown .lrn_btn_color_selector": "setSelectedLineColour",
                        "mousedown .lrn_line_colour_palette_trigger": "toggleLineColourPalette",
                        "keydown .lrn_canvas": "buttonKeyDownOnCanvas",
                        "keydown .lrn_keyboard_paintable": "buttonKeyDown",
                        "keyup .lrn_keyboard_paintable": "buttonKeyUp",
                        "blur .lrn_keyboard_paintable": "destroyDrawingIndicator",
                        "focus .lrn_keyboard_paintable": "addMarker",
                    },
                    KEYCODES: { TAB: 9, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32, ENTER: 13 },
                    initTime: null,
                    isPainting: !1,
                    lastDrawnPoint: { x: null, y: null },
                    redrawQueue: [],
                    markRedrawQueue: [],
                    template: g.a,
                    touchEvents: {
                        "touchend .lrn_clear:not(.lrn_disabled)": "clearAll",
                        "touchend .lrn_replay:not(.lrn_disabled)": "replay",
                        "touchend .lrn_undo:not(.lrn_disabled)": "undo",
                        "touchend .lrn_redo:not(.lrn_disabled)": "redo",
                        "touchend .lrn_btn_color_selector": "setSelectedLineColour",
                        "touchend .lrn_line_colour_palette_trigger": "toggleLineColourPalette",
                        "touchstart canvas.lrn_canvas.lrn_paintable": "startPainting",
                        "touchmove canvas.lrn_canvas.lrn_paintable": "paintToHere",
                        "touchleave canvas.lrn_canvas.lrn_paintable": "stopPainting",
                        "touchend canvas.lrn_canvas.lrn_paintable": "stopPainting",
                    },
                    keysPressed: {},
                    pixelMoveDistance: 3,
                    initialize: function initialize() {
                        var t = this.options.$externalContainer,
                            e = { "click .lrn_clear:not(.lrn_disabled)": "clearAll", "click .lrn_replay:not(.lrn_disabled)": "replay", "click .lrn_undo:not(.lrn_disabled)": "undo", "click .lrn_redo:not(.lrn_disabled)": "redo" };
                        this.hasFlashCanvas() && v.a.setPath(E.a.assetsHost + "/swf/"),
                            w.a.isTouchDevice() ? ((this.events = l.a.extend({}, this.events, this.touchEvents)), w.a.isMobile || l.a.extend(this.events, e)) : (this.events = l.a.extend(e, this.events)),
                            (this.$container = t && t.length ? t : this.$el),
                            (this.$toolbar = this.$(this.CLASSNAMES.TOOLBAR)),
                            (this.i18n = this.options.i18n),
                            (this.initTime = new Date().getTime()),
                            this.setDrawingOptions(),
                            (this.canPaint = this.options.canPaint),
                            (this.showRedraw = this.options.showRedraw),
                            (this.animateRedraw = !this.canPaint),
                            (this.canvasWidth = this.options.imgWidth ? this.options.imgWidth : this.DEFAULT_CANVAS_WIDTH),
                            (this.canvasHeight = this.options.imgHeight ? this.options.imgHeight : this.DEFAULT_CANVAS_HEIGHT),
                            (this.imageAlt = this.options.imgAlt || ""),
                            this.render(),
                            this.setState({ buffer: this.options.marks || [] }),
                            (this.imgSrc = this.options.imgSrc),
                            (this.bgImg = new Image()),
                            this.hasBgImg()
                                ? a()(this.bgImg).on("load", this.bgImageLoaded.bind(this)).on("error", this.bgImageLoadError.bind(this)).attr("src", this.imgSrc)
                                : (this.once(
                                      this.EVENT.SHOWN,
                                      function () {
                                          this.setCanvasSize(this.canvasHeight, this.canvasWidth), this.makeResponsive();
                                      },
                                      this
                                  ),
                                  l.a.delay(
                                      l.a.bind(function () {
                                          this.trigger(this.EVENT.LOADED), this.trigger(this.EVENT.SHOWN);
                                      }, this)
                                  )),
                            this.on(this.EVENT.RESET, this.setState, this),
                            a()(window).on("resize orientationchange", l.a.debounce(l.a.bind(this.makeResponsive, this), 400));
                    },
                    addCurrentMarkToBuffer: function addCurrentMarkToBuffer() {
                        var t = this.state;
                        (t.buffer = t.buffer.slice(0, t.position + 1)),
                            t.buffer.push(this.currentMark),
                            (t.bufferToRender = t.bufferToRender.slice(0, t.position + 1)),
                            t.bufferToRender.push(this.getPointToRender(this.currentMark)),
                            (t.position = t.buffer.length - 1);
                    },
                    bgImageLoaded: function bgImageLoaded() {
                        this.options.imgWidth || (this.canvasWidth = this.bgImg.width), this.options.imgHeight || (this.canvasHeight = this.bgImg.height), (this.bgLoaded = !0), this.makeResponsive(), this.trigger(this.EVENT.LOADED);
                    },
                    bgImageLoadError: function bgImageLoadError() {
                        this.trigger(this.EVENT.LOAD_ERROR);
                    },
                    makeResponsive: function makeResponsive() {
                        Object(x.a)(this.$container, l.a.bind(this.fitCanvasToContainer, this));
                    },
                    fitCanvasToContainer: function fitCanvasToContainer() {
                        var t = this.canvasWidth,
                            e = this.canvasHeight,
                            i = t / e,
                            n = this.$container.innerWidth();
                        n && t > n && (e = (t = n) / i),
                            (this.bgImgScale = this.bgImg.width ? t / this.bgImg.width : t / this.canvasWidth),
                            this.setCanvasSize(e, t),
                            this.$(this.CLASSNAMES.CANVAS_WRAPPER).width(t),
                            this.$toolbar.width() <= this.TOOLBAR_OPTIMISED_WIDTH && this.$toolbar.addClass("lrn_toolbar_optimised"),
                            this.hasFlashCanvas() ? a()(this.cnv).css("background-image", "url(" + this.imgSrc + ")") : this.imgSrc && this.ctx.drawImage(this.bgImg, 0, 0, t, e),
                            this.setBufferToRender(),
                            this.redraw(!1);
                    },
                    setBufferToRender: function setBufferToRender() {
                        var t = this,
                            e = this.bgImgScale;
                        this.state.bufferToRender = l.a.map(this.state.buffer, function (i) {
                            return i.points
                                ? l.a.extend({}, i, {
                                      points: l.a.map(i.points, function (n) {
                                          return t.getPointToRender(n, i.bgImgScale, e);
                                      }),
                                  })
                                : i;
                        });
                    },
                    getPointToRender: function getPointToRender(t, e, i) {
                        return (e = e || 1), (i = i || 1), l.a.extend({}, t, { x: (t.x / e) * i, y: (t.y / e) * i });
                    },
                    clearAll: function clearAll() {
                        (this.currentMark = { type: this.MARK_TYPES.CLEAR, startTime: new Date().getTime() - this.initTime }), this.resetBackground(), this.addCurrentMarkToBuffer(), this.update();
                    },
                    expandCanvasToContainer: function expandCanvasToContainer() {
                        this.setCanvasSize(this.$el.height(), this.$el.width());
                    },
                    getEventPoint: function getEventPoint(t) {
                        var e = this,
                            i = this.scale || 1,
                            n = function getMousePoint(t) {
                                var n = t.offsetX ? t.offsetX : Math.round(t.pageX - e.$el.find(".lrn_canvas").offset().left),
                                    a = t.offsetY ? t.offsetY : Math.round(t.pageY - e.$el.find(".lrn_canvas").offset().top);
                                return { x: n / i, y: a / i };
                            };
                        return t.type.indexOf("mouse") > -1
                            ? n(t)
                            : t.type.indexOf("touch") > -1
                            ? (function getTouchPoint(t) {
                                  var n = t.originalEvent.touches[0],
                                      s = a()(e.cnv).offset(),
                                      r = n.pageX - s.left,
                                      o = n.pageY - s.top;
                                  return { x: r / i, y: o / i };
                              })(t)
                            : t.type.indexOf("keydown") > -1 && n(t);
                    },
                    getVisibleMarks: function getVisibleMarks(t) {
                        for (var e = this.state.buffer, i = 0, n = t ? "buffer" : "bufferToRender", a = this.state.position; a > -1; a--)
                            if (e[a].type === this.MARK_TYPES.CLEAR) {
                                i = a + 1;
                                break;
                            }
                        return this.state[n].slice(i, this.state.position + 1);
                    },
                    hasBgImg: function hasBgImg() {
                        return !(!this.imgSrc || !this.imgSrc.length);
                    },
                    ie8PreventBlurEvent: function ie8PreventBlurEvent() {
                        var t = document.activeElement;
                        l.a.defer(function () {
                            a()(t).focus();
                        });
                    },
                    paintDot: function paintDot(t, e) {
                        (this.ctx.fillStyle = e || this.selectedLineColour), this.ctx.beginPath(), this.ctx.arc(t.x, t.y, this.options.line_width, 0, 2 * Math.PI), this.ctx.fill(), (this.lastDrawnPoint = t);
                    },
                    paintLine: function paintLine(t, e, i) {
                        (this.ctx.strokeStyle = i || this.selectedLineColour),
                            (this.ctx.lineJoin = this.options.line_join),
                            (this.ctx.lineWidth = this.options.line_width),
                            (this.ctx.lineCap = this.options.line_cap),
                            this.ctx.beginPath(),
                            this.ctx.moveTo(t.x, t.y),
                            this.ctx.lineTo(e.x, e.y),
                            this.ctx.stroke(),
                            (this.lastDrawnPoint = e);
                    },
                    paintToHere: function paintToHere(t) {
                        var e, i;
                        if (!this.isPainting) return !1;
                        this.isKeypadMoving && this.getCursorCoordinates(t),
                            (e = this.getEventPoint(t)),
                            (i = null !== this.lastDrawnPoint.x ? this.lastDrawnPoint : e),
                            this.paintLine(i, e),
                            this.currentMark.points.push(this.lastDrawnPoint),
                            t.preventDefault();
                    },
                    redo: function redo() {
                        this.state.position++, this.update(), this.redraw(!0);
                    },
                    redraw: function redraw(t) {
                        var e,
                            i,
                            n,
                            a = !!l.a.isUndefined(t) || t,
                            s = this.animateRedraw,
                            r = 0,
                            o = this.getVisibleMarks(),
                            c = this;
                        if ((a && this.resetBackground(), !o.length)) return !1;
                        (e = function drawCurrentLine(t, e) {
                            s && c.redrawQueue.shift();
                            var i = t.points[e],
                                n = e > 0 ? e - 1 : 0,
                                a = t.points[n];
                            1 === t.points.length ? c.paintDot(i, t.line_colour) : c.paintLine(a, i, t.line_colour);
                        }),
                            (i = function drawCurrentMark(t) {
                                var i,
                                    n = (t.endTime - t.startTime) / t.points.length;
                                l.a.each(t.points, function (a, r) {
                                    s ? ((i = l.a.delay(l.a.bind(e, c), n * r, t, r)), c.redrawQueue.push(i)) : e(t, r);
                                }),
                                    c.ctx.closePath();
                            }),
                            l.a.each(
                                o,
                                function (t) {
                                    switch (t.type) {
                                        case this.MARK_TYPES.GESTURE:
                                            s ? ((n = l.a.delay(l.a.bind(i, this), r, t)), (r += t.endTime - t.startTime), c.markRedrawQueue.push(n)) : i(t);
                                            break;
                                        case this.MARK_TYPES.CLEAR:
                                            this.resetBackground();
                                            break;
                                        default:
                                            throw new Error("Unsupported mark type ", t.type);
                                    }
                                },
                                this
                            ),
                            (this.animateRedraw = !1);
                    },
                    render: function render() {
                        return (
                            this.$el.html(
                                this.template({ displayLogic: l.a.pick(this, "canPaint", "showRedraw", "imageAlt"), lineColourData: { colours: this.options.line_colour, limit: this.MAX_LINE_COLOUR_NUMBER }, labels: this.i18n.labels })
                            ),
                            (this.cnv = this.$("canvas.lrn_canvas")[0]),
                            this.hasFlashCanvas() && (this.$(".lrn_canvas_drawing").addClass("lrn_old_ie"), v.a.initElement(this.cnv)),
                            (this.ctx = this.cnv.getContext("2d")),
                            this
                        );
                    },
                    resetBackground: function resetBackground() {
                        this.ctx.clearRect(0, 0, this.cnv.width, this.cnv.height),
                            this.bgLoaded && !this.hasFlashCanvas() && this.ctx.drawImage(this.bgImg, 0, 0, this.cnv.width, this.cnv.height),
                            l.a.each(this.redrawQueue, clearTimeout),
                            l.a.each(this.markRedrawQueue, clearTimeout);
                    },
                    setCanvasSize: function setCanvasSize(t, e) {
                        a()(this.cnv)
                            .height(t)
                            .width(e)
                            .attr("height", t + "px")
                            .attr("width", e + "px"),
                            this.hasFlashCanvas() && this.ctx._resize(e, t);
                    },
                    setDisabled: function setDisabled(t) {
                        t ? this.undelegateEvents() : this.delegateEvents();
                    },
                    setDrawingOptions: function setDrawingOptions() {
                        var t = this.options,
                            e = { line_colour: "#c92e32", line_join: "round", line_width: 5, line_cap: "round" };
                        t.line_color && (t.line_colour = t.line_color),
                            l.a.isArray(t.line_colour) ? (this.selectedLineColour = t.line_colour[0]) : l.a.isString(t.line_colour) ? (this.selectedLineColour = t.line_colour) : (this.selectedLineColour = e.line_colour);
                        var i = this;
                        l.a.each(e, function (e, n) {
                            i.options[n] = t.hasOwnProperty(n) ? t[n] : e;
                        });
                    },
                    setSelectedLineColour: function setSelectedLineColour(t) {
                        var e = a()(t.currentTarget);
                        e &&
                            e.length &&
                            (a()(".lrn_btn_color_selector").removeClass("lrn_selected"),
                            e.addClass("lrn_selected"),
                            (this.selectedLineColour = e.attr(this.DATA_SELECTOR.LINE_COLOUR_DATA_SELECTION)),
                            this.$(this.CLASSNAMES.LINE_COLOUR_PALETTE_TRIGGER).find("span").css("background", this.selectedLineColour),
                            this.$(this.CLASSNAMES.LINE_COLOUR_PALETTE).removeClass("lrn_active")),
                            t.preventDefault();
                    },
                    setState: function setState(t) {
                        (t.buffer = t.buffer || []), (t.bufferToRender = t.bufferToRender || []), (t.position = l.a.isNumber(t.position) ? t.position : t.buffer.length - 1), (this.state = t), this.redraw(!0), this.updateButtonStates();
                    },
                    getCursorCoordinates: function getCursorCoordinates(t) {
                        return (
                            (t.offsetX = Math.round(this.$indicator.offset().left - this.$canvas.offset().left)),
                            (t.offsetY = Math.round(this.$indicator.offset().top - this.$canvas.offset().top)),
                            (t.pageX = Math.round(this.$indicator.offset().left)),
                            (t.pageY = Math.round(this.$indicator.offset().top)),
                            t
                        );
                    },
                    startPainting: function startPainting(t) {
                        (this.isPainting = !0),
                            this.hasActiveDrawingIndicator() && this.getCursorCoordinates(t),
                            (this.lastDrawnPoint = this.getEventPoint(t)),
                            (this.currentMark = {
                                type: this.MARK_TYPES.GESTURE,
                                line_colour: this.selectedLineColour,
                                line_join: this.options.line_join,
                                line_width: this.options.line_width,
                                startTime: new Date().getTime() - this.initTime,
                                points: [],
                                bgImgScale: this.bgImgScale,
                            }),
                            this.currentMark.points.push(this.lastDrawnPoint),
                            this.trigger(this.EVENT.STROKE_BEGIN),
                            t.preventDefault();
                    },
                    stopPainting: function stopPainting(t) {
                        this.isPainting &&
                            (1 === this.currentMark.points.length && this.paintDot(this.currentMark.points[0]),
                            this.ctx.closePath(),
                            (this.isPainting = !1),
                            (this.currentMark.endTime = new Date().getTime() - this.initTime),
                            this.addCurrentMarkToBuffer(),
                            this.update()),
                            t.preventDefault();
                    },
                    toggleLineColourPalette: function toggleLineColourPalette(t) {
                        this.$(this.CLASSNAMES.LINE_COLOUR_PALETTE).toggleClass("lrn_active"), t.preventDefault();
                    },
                    undo: function undo() {
                        this.state.position--, this.update(), this.redraw(!0);
                    },
                    update: function update() {
                        var t = this.getVisibleMarks(!0);
                        this.trigger(this.EVENT.UPDATED, t, this.state), this.updateButtonStates(), this.$(this.CLASSNAMES.LINE_COLOUR_PALETTE).removeClass("lrn_active");
                    },
                    updateButtonStates: function updateButtonStates() {
                        var t = this.state.position > -1,
                            e = this.state.buffer.length > this.state.position + 1,
                            i = this.getVisibleMarks(!0).length > 0;
                        this.$(".lrn_undo").toggleClass("lrn_disabled", !t), this.$(".lrn_redo").toggleClass("lrn_disabled", !e), this.$(".lrn_clear").toggleClass("lrn_disabled", !i);
                    },
                    replay: function replay() {
                        (this.animateRedraw = !0), this.redraw(!0);
                    },
                    buttonKeyDown: function buttonKeyDown(t) {
                        switch (t.keyCode) {
                            case this.KEYCODES.LEFT:
                            case this.KEYCODES.UP:
                            case this.KEYCODES.RIGHT:
                            case this.KEYCODES.DOWN:
                                t.preventDefault(), (this.isKeypadMoving = !0), this.moveIndicator(t), this.paintToHere(t);
                                break;
                            case this.KEYCODES.SPACE:
                            case this.KEYCODES.ENTER:
                                this.startPainting(t), this.isKeypadMoving && (this.moveIndicator(t), this.paintToHere(t));
                        }
                    },
                    buttonKeyUp: function buttonKeyUp(t) {
                        switch (t.keyCode) {
                            case this.KEYCODES.LEFT:
                            case this.KEYCODES.UP:
                            case this.KEYCODES.RIGHT:
                            case this.KEYCODES.DOWN:
                                (this.isKeypadMoving = !1), this.stopMovingIndicator(t);
                                break;
                            case this.KEYCODES.SPACE:
                            case this.KEYCODES.ENTER:
                                (this.isKeypadMoving = !1), this.stopPainting(t);
                        }
                    },
                    buttonKeyDownOnCanvas: function buttonKeyDownOnCanvas(t) {
                        switch (t.keyCode) {
                            case this.KEYCODES.TAB:
                                this.createKeyboardDrawingCursor(t);
                        }
                    },
                    calculateNewPointCoordinates: function calculateNewPointCoordinates(t, e, i, n) {
                        var a = this.keysPressed[e] ? this.pixelMoveDistance : 0,
                            s = this.keysPressed[i] ? this.pixelMoveDistance : 0,
                            r = parseInt(t, 10) - a + s;
                        return this.getBoundedCursorCoordinate(r, n);
                    },
                    getBoundedCursorCoordinate: function getBoundedCursorCoordinate(t, e) {
                        var i = e ? this.$canvas.position().left + this.$canvas.innerWidth() : this.$canvas.position().top + this.$canvas.innerHeight(),
                            n = e ? this.$canvas.position().left : this.$canvas.position().top;
                        return t < n ? n : t > i ? i : t;
                    },
                    moveIndicator: function moveIndicator(t) {
                        var e = this;
                        (this.keysPressed[t.which] = !0),
                            this.$indicator.css({
                                top: function top(t, i) {
                                    return e.calculateNewPointCoordinates(i, e.KEYCODES.UP, e.KEYCODES.DOWN);
                                },
                                left: function left(t, i) {
                                    return e.calculateNewPointCoordinates(i, e.KEYCODES.LEFT, e.KEYCODES.RIGHT, !0);
                                },
                            });
                    },
                    stopMovingIndicator: function stopMovingIndicator(t) {
                        this.keysPressed[t.which] = !1;
                    },
                    createKeyboardDrawingCursor: function createKeyboardDrawingCursor() {
                        this.$el.find(".lrn_toolbar");
                        (this.$indicator = this.$el.find(".lrn_keyboard_paintable")), this.$indicator.css(this.getIndicatorPosition());
                    },
                    addMarker: function addMarker() {
                        this.$indicator.append("<span>+</span>");
                    },
                    hasActiveDrawingIndicator: function hasActiveDrawingIndicator() {
                        return !(!this.$indicator || !this.$indicator.children().length);
                    },
                    getIndicatorPosition: function getIndicatorPosition() {
                        var t;
                        return (this.$canvas = this.$el.find(".lrn_canvas")), { top: (t = this.$canvas.position()).top + "px", left: t.left + "px" };
                    },
                    destroyDrawingIndicator: function destroyDrawingIndicator() {
                        this.$indicator.empty();
                    },
                    hasFlashCanvas: function hasFlashCanvas() {
                        return l.a.isUndefined(this._hasFlashCanvas) && (this._hasFlashCanvas = !l.a.isEmpty(v.a)), this._hasFlashCanvas;
                    },
                }),
                T = i(41),
                q = i(170),
                S = i(131),
                O = u.a.View.extend({
                    DELAY: 750,
                    LINE_COLOUR: "#52a8ec",
                    appendParent: "body",
                    touchEvents: { "touchstart .lrn_canvas_drawing": "stopPropagation" },
                    fixedPositionEvents: { "mousedown .lrn_btn": "preventAction" },
                    EVENT: {
                        SHOWN: "shown",
                        WRITING_STARTED: "writing-started",
                        RECOGNITION_ENDED: "recognition-ended",
                        RECOGNITION_REQUEST: "recognition-request",
                        CANCEL_RECOGNITION: "cancel-recognition",
                        RECEIVED_RESULT: "received-result",
                        CHANGE_CONTEXT: "change-context",
                        DELETE_CONTEXTS: "delete-contexts",
                        ERROR: "error",
                    },
                    results: {},
                    initialize: function initialize() {
                        this.options.mathEvents;
                        var t = w.a.isTouchDevice(),
                            e = this;
                        (this.events = t ? this.touchEvents : {}),
                            (this.isRecognising = !1),
                            (this.i18n = this.options.i18n),
                            (this.results = {}),
                            (this.contexts = this.initContexts()),
                            (this.currentContext = {}),
                            this.render(),
                            this.listenTo(this.canvasDrawing, this.canvasDrawing.EVENT.UPDATED, this.onUpdate, this),
                            this.listenTo(this.canvasDrawing, this.canvasDrawing.EVENT.STROKE_BEGIN, function () {
                                e.endRecognition(), e.trigger(e.EVENT.WRITING_STARTED);
                            }),
                            this.on(this.EVENT.CANCEL_RECOGNITION, this.endRecognition, this),
                            this.on(this.EVENT.RECOGNITION_REQUEST, this.requestRecognition, this),
                            this.on(this.EVENT.CHANGE_CONTEXT, this.changeContext, this),
                            this.on(this.EVENT.DELETE_CONTEXTS, this.deleteContexts, this),
                            this.on(this.EVENT.SHOWN, function () {
                                e.canvasDrawing.trigger(e.canvasDrawing.EVENT.SHOWN);
                            });
                    },
                    appendToBody: function appendToBody() {
                        var t = this;
                        this.$el.appendTo(this.appendParent).addClass("lrn_widget lrn_handwriting_fixed"),
                            (this.events = l.a.extend({}, this.events, this.fixedPositionEvents)),
                            this.delegateEvents(),
                            (this.scaler = new q.a(this.$el, {
                                debounceTime: 300,
                                onUpdate: function onUpdate(e) {
                                    t.canvasDrawing.scale = e;
                                },
                            })),
                            (this.fullScreenObserver = S.a.fullScreen.observe(function (t) {
                                var e = t || "body";
                                e !== this.appendParent && (this.$el.appendTo(e), (this.appendParent = e));
                            }, this)),
                            (this.show = function () {
                                this.$el.finish().fadeIn(100), this.trigger(this.EVENT.SHOWN), this.scaler.start().scale();
                            }),
                            (this.hide = function () {
                                this.$el.finish().fadeOut(100), this.scaler.stop();
                            });
                    },
                    changeContext: function changeContext(t) {
                        var e = this.contexts[t];
                        e || (e = this.contexts[t] = { state: {} }), e !== this.currentContext && (this.canvasDrawing.trigger(this.canvasDrawing.EVENT.RESET, e.state), (this.currentContext = e));
                    },
                    deleteContexts: function deleteContexts(t) {
                        l.a.each(
                            t,
                            function (t) {
                                delete this.contexts[t];
                            },
                            this
                        );
                    },
                    endRecognition: function endRecognition() {
                        (this.isRecognising = !1), this.trigger(this.EVENT.RECOGNITION_ENDED), T.a.cancel();
                    },
                    getHandwriting: function getHandwriting() {
                        var t = {};
                        return (
                            l.a.each(this.contexts, function (e, i) {
                                t[i] = e.marks;
                            }),
                            t
                        );
                    },
                    getMarksDigest: function getMarksDigest(t) {
                        return l.a.reduce(
                            t,
                            function (t, e) {
                                return t + e.startTime;
                            },
                            ""
                        );
                    },
                    initContexts: function initContexts() {
                        var t = {};
                        return (
                            l.a.each(this.options.handwriting, function (e, i) {
                                t[i] = { state: { buffer: e }, marks: e };
                            }),
                            t
                        );
                    },
                    onUpdate: function onUpdate(t, e) {
                        var i = this.getMarksDigest(t),
                            n = this.results[i],
                            a = this;
                        clearTimeout(this.recogniseTimeout),
                            (this.currentContext.state = e),
                            (this.currentContext.marks = t),
                            this.endRecognition(),
                            n
                                ? this.trigger(this.EVENT.RECEIVED_RESULT, n)
                                : ((this.isRecognising = !0),
                                  (this.recogniseTimeout = setTimeout(function () {
                                      a.isRecognising && a.recognise.call(a, t, i);
                                  }, this.DELAY)));
                    },
                    preventAction: function preventAction(t) {
                        t.preventDefault(), t.stopPropagation();
                    },
                    recognise: function recognise(t, e) {
                        var i = this;
                        this.trigger(
                            this.EVENT.RECOGNITION_REQUEST,
                            t,
                            function (t) {
                                (i.results[e] = t), i.isRecognising && (i.endRecognition(), i.trigger(i.EVENT.RECEIVED_RESULT, t));
                            },
                            function (t) {
                                i.isRecognising && (i.endRecognition(), i.trigger(i.EVENT.ERROR, i.i18n.labels.handwritingApiError));
                            }
                        );
                    },
                    remove: function remove() {
                        return (
                            this.scaler && (this.scaler.destroy(), (this.scaler = null)),
                            this.fullScreenObserver && S.a.fullScreen.unobserve(this.fullScreenObserver),
                            this.canvasDrawing.remove(),
                            delete this.canvasDrawing,
                            u.a.View.prototype.remove.apply(this, arguments)
                        );
                    },
                    render: function render() {
                        return (this.canvasDrawing = new k({ el: this.el, i18n: this.i18n, canPaint: !0, line_colour: this.LINE_COLOUR })), this.options.fixed && this.appendToBody(), this;
                    },
                    requestRecognition: function requestRecognition(t, e, i) {
                        T.a.recognise({ type: T.a.TYPE.EQUATION, marks: t, successFn: e, failFn: i, handwritingRecognises: this.options.handwritingRecognises, security: this.options.security });
                    },
                    stopPropagation: function stopPropagation(t) {
                        t.stopPropagation();
                    },
                }),
                A = i(171),
                D = i(36);
            function _toConsumableArray(t) {
                return (
                    (function _arrayWithoutHoles(t) {
                        if (Array.isArray(t)) return _arrayLikeToArray(t);
                    })(t) ||
                    (function _iterableToArray(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                    })(t) ||
                    (function _unsupportedIterableToArray(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return _arrayLikeToArray(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === i && t.constructor && (i = t.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(t);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return _arrayLikeToArray(t, e);
                    })(t) ||
                    (function _nonIterableSpread() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function _arrayLikeToArray(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            function getSymbolGroupsCustomLabels() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = "symbols.options.";
                return Object.keys(t)
                    .filter(function (t) {
                        return t.indexOf(e) > -1;
                    })
                    .map(function (i) {
                        return { id: i.replace(e, ""), label: t[i] };
                    });
            }
            var R = {},
                L = u.a.View.extend({
                    CLASSES: { BUTTON_ACTIVE: "lrn_active" },
                    SELECTORS: {
                        KEYBOARD_HELP: ".lrn-formula-keyboard-help",
                        MENU_GROUP: '[data-lrn-component="menuGroup"]',
                        MENU_GROUP_TOGGLE: '[data-lrn-component="menuGroup"] .lrn_dropdown_toggle',
                        ARIA_LIVE: ".lrn-formula-keypad-arialive",
                    },
                    DEFAULTSYMBOLGROUPS: { math: ["basic", "qwerty"], chemistry: ["chemistry", "basic", "qwerty"] },
                    EVENT: { ACTIVATED_GROUP: "activated-group", HIDDEN: "hidden", SHOWN: "shown" },
                    KEYCODES: { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, TAB: 9, ESC: 27, SPACE: 32, ENTER: 13 },
                    ACTIONS: { KEYPAD_OPEN: "open-keypad" },
                    MINIMUM_KEYPAD_VISIBILITY: 0.25,
                    TYPE: { FLOATING_KEYBOARD: "floating-keyboard", BLOCK_KEYBOARD: "block-keyboard", BLOCK_ON_FOCUS_KEYBOARD: "block-on-focus-keyboard", FIXED_HANDWRITING_ONLY: "fixed-handwriting-only", NO_INPUT_UI: "no-input-ui" },
                    appendParent: "body",
                    buttonMap: [],
                    defaultNumColumns: 8,
                    helpModal: void 0,
                    isBlockOnFocus: !1,
                    isFloating: !1,
                    isVisible: !0,
                    shouldIgnoreNextAction: !1,
                    lastFocusedElement: null,
                    lazyRemoveTimeout: 6e4,
                    mainGroupNumColumns: 4,
                    $window: a()(window),
                    normalEvents: {
                        "mousedown button": "preventAction",
                        "mousedown button *": "preventAction",
                        "click .lrn-formula-keyboard-close": "closeButtonAction",
                        "keydown .lrn-formula-keyboard-close span": "closeButtonAction",
                        "click [tabindex]": "buttonAction",
                        "keydown [tabindex]": "buttonKeyDown",
                        "keydown .lrn_dropdown_toggle": "buttonKeyDown",
                        "keyup [tabindex]": "handleKeyEvent",
                        "keypress [tabindex]": "handleKeyEvent",
                        "blur [tabindex]": "blurredButton",
                        "mousedown div": "preventAction",
                        "selectstart div": "preventAction",
                        "mousedown .lrn_dropdown_toggle": "onDropdownToggleMouseUp",
                        "mouseup .lrn_dropdown_toggle": "onDropdownToggleMouseDown",
                        "mousedown .lrn-ui-style-floating-keyboard .lrn-drag-area": "startDrag",
                        "mousedown .lrn-ui-style-floating-keyboard .lrn-drag-area *": "startDrag",
                    },
                    touchEvents: {
                        "touchend [tabindex]": "buttonAction",
                        "touchstart .lrn-ui-style-floating-keyboard .lrn-drag-area": "startTouchDrag",
                        "touchstart .lrn-formula-keyboard": "preventAction",
                        "touchstart .lrn-formula-keyboard-mask": "onMaskTouchstart",
                        "touchend .lrn-formula-keyboard-mask": "onMaskTouchend",
                    },
                    defaultNumberPadSymbols: ["7", "8", "9", "÷", "4", "5", "6", "multiply", "1", "2", "3", "minus", "0", "decimal", "comma", "plus", "left", "right", "backspace", "="],
                    defaultHorizontalNumberPadSymbols: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "decimal", "comma", "plus", "minus", "multiply", "÷", "=", "left", "right", "backspace"],
                    initialize: function initialize() {
                        var t = this.options;
                        this.i18n = t.i18n;
                        var e,
                            i = t.mathEvents,
                            n = this.DEFAULTSYMBOLGROUPS[t.chemistry ? "chemistry" : "math"],
                            a = l.a.isUndefined(t.symbols) ? n : t.symbols,
                            s = getSymbolGroupsCustomLabels(this.i18n.labels);
                        h.a.updateI18nSymbols(this.i18n, a, s),
                            (this.horizontalLayout = t.horizontalLayout),
                            (e = this.horizontalLayout ? t.horizontalPad || this.defaultHorizontalNumberPadSymbols : t.numberPad || this.defaultNumberPadSymbols),
                            (this.symbolGroups = h.a.getForInputUi(a, t.chemistry)),
                            (this.numberPadSymbols = h.a.getForInputNumberPad(e)),
                            this.horizontalLayout && ((this.numberPadSymbols.columnCount = 10), (this.numberPadSymbols.rowCount = 2)),
                            (this.masterSymbolCollection = h.a.getNewerFormatMasterCollection()),
                            (this.numColumns = this.defaultNumColumns),
                            (this.buttonMapCache = {}),
                            l.a.isUndefined(this.symbolGroups.value) && (this.numColumns = 4),
                            (this.resetDraggableElementPosition = l.a.debounce(l.a.bind(this.resetDraggableElementPosition, this), 10)),
                            (this.showHint = l.a.debounce(l.a.bind(this.showHint, this), 200)),
                            (this.updateAriaLiveText = l.a.debounce(l.a.bind(this.updateAriaLiveText, this), 500)),
                            (this.whetherToShowHints = l.a.isUndefined(t.showHints) || !0 === t.showHints),
                            (this.uiBelowResponse = !!t.uiBelowResponse),
                            this.setEvents(),
                            this.listenTo(i, i.EVENT.EDITOR_FOCUSED, this.show),
                            this.isLazy() || this.render();
                    },
                    activateGroup: function activateGroup(t) {
                        var e = !l.a.isUndefined(this.symbolGroups[t]),
                            i = e && !!this.symbolGroups[t].value.length,
                            n = '[data-symbol-group="' + t + '"]';
                        e &&
                            (this.$(".lrn-formula-keyboard-pager button").not(n).removeClass(this.CLASSES.BUTTON_ACTIVE).end().filter(n).addClass(this.CLASSES.BUTTON_ACTIVE),
                            this.$(".lrn-formula-keyboard-page").not(n).hide().end().filter(n).show(),
                            (this.group = t),
                            this.trigger(this.EVENT.ACTIVATED_GROUP, t),
                            this.$(".lrn-formula-keyboard-main, lrn-keyboard-button-parent lrn-formula-keyboard-page").toggle(i),
                            "handwriting" === this.group ? this.$(this.SELECTORS.KEYBOARD_HELP).hide() : this.$(this.SELECTORS.KEYBOARD_HELP).show()),
                            this.updateButtonMap();
                    },
                    activateHelpModal: function activateHelpModal() {
                        var t = a()(this.$el.closest(".lrn_response_wrapper")[0] || this.el),
                            e = t.offset().top,
                            i = t.find(".lrn_response_input").innerHeight(),
                            n = this.$(".lrn-formula-keyboard").innerHeight();
                        this.helpModal.show(e, i + n);
                    },
                    blurredButton: function blurredButton() {
                        if (this._isDropdownClosed() && !this.$el.find(":focus").length) {
                            var t = this.options.mathEvents;
                            t.trigger(t.EVENT.ITEM_BLURRED);
                        }
                    },
                    buttonAction: function buttonAction(t) {
                        var e = a()(t.currentTarget);
                        if (!this.maskHasBeenScrolled(t))
                            if ((e.closest(".lrn-formula-keyboard-mask").length && (t.preventDefault(), t.stopPropagation()), this.shouldIgnoreNextAction)) this.shouldIgnoreNextAction = !1;
                            else if (!this.isDragging) {
                                var i = e.data("mq-command"),
                                    n = e.data("symbol-group"),
                                    s = e.data("type");
                                "help" === s && this.activateHelpModal(), "caps" === s && this.toggleCaps(), i && this.sendMathCommand(t), n && (t.currentTarget.focus(), this.activateGroup(n));
                            }
                    },
                    buttonKeyDown: function buttonKeyDown(t) {
                        if (this._isDropdownClosed()) {
                            var e = this.options.mathEvents;
                            switch (t.keyCode) {
                                case this.KEYCODES.LEFT:
                                case this.KEYCODES.UP:
                                case this.KEYCODES.RIGHT:
                                case this.KEYCODES.DOWN:
                                    this.moveFocusInDirection(t);
                                    break;
                                case this.KEYCODES.ESC:
                                    e.trigger(e.EVENT.ESCAPE_UI);
                                    break;
                                case this.KEYCODES.TAB:
                                    t.shiftKey
                                        ? (t.preventDefault(), e.trigger(e.EVENT.ESCAPE_UI_WITHOUT_KEYBOARD))
                                        : this.nextTab
                                        ? (this.nextTab.is(":hidden") && this.nextTab.parent().first().hasClass("lrn-formulaessay-button") && (this.nextTab = this.nextTab.parent().siblings().find("button").filter(":visible").first()),
                                          this.nextTab.is(":visible") &&
                                              (t.preventDefault(),
                                              l.a.defer(
                                                  l.a.bind(function () {
                                                      this.nextTab.focus();
                                                  }, this)
                                              )))
                                        : e.trigger(e.EVENT.ESCAPE_UI_WITHOUT_KEYBOARD);
                            }
                            return this.handleKeyEvent(t);
                        }
                    },
                    getLastNonEmptyElementIndex: function getLastNonEmptyElementIndex(t) {
                        var e = t
                            .slice()
                            .reverse()
                            .reduce(function (t, e, i) {
                                return "" !== e && null === t ? i : t;
                            }, null);
                        return t.length - e - 1;
                    },
                    getAdjustedLayout: function getAdjustedLayout(t) {
                        var e = this.getLastNonEmptyElementIndex(t),
                            i = t.reduce(function (t, i, n) {
                                return "" !== i || n < e ? t : t + 1;
                            }, 0);
                        return t.slice(0, t.length - i);
                    },
                    shouldAdjustWidthOfTopRow: function shouldAdjustWidthOfTopRow() {
                        var t = this.options.horizontalPad || this.defaultHorizontalNumberPadSymbols;
                        return !(!this.horizontalLayout || !l.a.isArray(t)) && this.getAdjustedLayout(t).length <= 10;
                    },
                    shouldAdjustWidthOfBothRows: function shouldAdjustWidthOfBothRows() {
                        var t = this.options.horizontalPad || this.defaultHorizontalNumberPadSymbols;
                        if (!this.horizontalLayout || !l.a.isArray(t)) return !1;
                        var e = t.slice(0, 10),
                            i = this.getAdjustedLayout(e).length <= 10,
                            n = t.slice(10),
                            a = this.getAdjustedLayout(n).length <= 10;
                        return i && a;
                    },
                    shouldAdjustWidth: function shouldAdjustWidth() {
                        return this.shouldAdjustWidthOfTopRow() || this.shouldAdjustWidthOfBothRows();
                    },
                    calculatePositionAndWidth: function calculatePositionAndWidth() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = this.calculateWidth(t).width,
                            i = t.pLeft + (t.pWidth - e) / 2,
                            n = t.pTop + t.pHeight,
                            a = t.boardHeight;
                        if (
                            (i + e > t.hLeft + t.hWidth && (i = t.hLeft + t.hWidth - e),
                            (t.hWidth < e || i < t.hLeft) && (i = t.hLeft),
                            !t.uiBelowResponse && t.isFloating && (n + a > this.$window.height() + this.$window.scrollTop() && (n = t.pTop - a), n <= 0))
                        ) {
                            var s = (n = t.pTop + t.pHeight) <= 0;
                            s && ((e = t.boardWidth), (n = t.boardTop), (i = t.boardLeft));
                        }
                        return this.shouldAdjustWidth() && (e = null), { top: n, width: e, left: i };
                    },
                    calculateWidth: function calculateWidth(t) {
                        return { width: this.isFloating || this.isImageCloze ? l.a.min([t.maxWidth, t.hWidth]) * t.widthScale : 100 * t.widthScale + "%" };
                    },
                    calculateWidthScale: function calculateWidthScale(t) {
                        var e = 1,
                            i = this.numColumns;
                        return i < this.mainGroupNumColumns && (i = this.mainGroupNumColumns), !this.shouldAdjustWidth() && t > this.minWidth && (e = i / this.defaultNumColumns), e;
                    },
                    getDraggableElement: function getDraggableElement() {
                        return this.$(".lrn-formula-keyboard");
                    },
                    getHandwriting: function getHandwriting() {
                        var t = this.handwritingPad;
                        if (this.hasHandwriting()) return t.getHandwriting.apply(t, arguments);
                    },
                    getPositionWithinBounds: function getPositionWithinBounds(t, e, i, n) {
                        return e < i + t ? i + t : e > n + t ? n + t : e;
                    },
                    handleKeyEvent: function handleKeyEvent(t) {
                        if (this._isDropdownClosed()) {
                            var e = this.options.mathEvents,
                                i = t.keyCode || t.which;
                            l.a.contains(this.KEYCODES, i) || (e.trigger(e.EVENT.EXTERNAL_KEY, t), ("keypress" !== t.type && 8 !== i) || t.preventDefault(), "keydown" === t.type && t.shiftKey && t.altKey && t.preventDefault());
                        }
                    },
                    hasHandwriting: function hasHandwriting() {
                        return !(!this.symbolGroups.handwriting && !this.isFixedHandwriting);
                    },
                    hide: function hide() {
                        var t = this;
                        (this.isFloating || this.isBlockOnFocus) && this.isVisible
                            ? (this.$(".lrn-formula-keyboard")
                                  .finish()
                                  .fadeOut(100, function () {
                                      t.resetDraggableElement(), t.trigger(t.EVENT.HIDDEN);
                                  }),
                              (this.isVisible = !1))
                            : this.isFixedHandwriting && this.handwritingPad.hide(),
                            this.isLazy() && this.resetRemoveTimeout(),
                            t.updateAriaLiveText(t.i18n.labels.ariaLiveText.mathKeyboard.mathKeyboardClosed);
                    },
                    closeButtonAction: function closeButtonAction(t) {
                        var e = this;
                        (function shouldHideKeypad(t) {
                            if ("click" === t.type) return !0;
                            if ("keydown" === t.type) {
                                var i = t.charCode || t.keyCode;
                                if (i === e.KEYCODES.SPACE || i === e.KEYCODES.ENTER) return !0;
                            }
                        })(t) && ((this.lastFocusedElement = null), t.preventDefault(), this.restoreFocusToInput(), this.hide());
                    },
                    hideHint: function hideHint() {
                        this.$(".lrn-formula-keyboard-hint").addClass("lrn-empty"), (this.hintShowing = !1);
                    },
                    isCapitalised: function isCapitalised() {
                        return this.$(".lrn-formula-keyboard").hasClass("lrn_caps_on");
                    },
                    isLazy: function isLazy() {
                        var t = [this.TYPE.FLOATING_KEYBOARD, this.TYPE.BLOCK_ON_FOCUS_KEYBOARD, this.TYPE.FIXED_HANDWRITING_ONLY];
                        return this.options.lazy && l.a.contains(t, this.options.uiStyleType);
                    },
                    moveFocusInDirection: function moveFocusInDirection(t) {
                        var e = l.a.findWhere(this.buttonMap, { el: t.currentTarget }),
                            i = l.a.invert(this.KEYCODES)[t.keyCode];
                        if (e && e.links[i]) {
                            var n = e.links[i];
                            n === this.rootControlElement && "UP" === i && (this.rootControlElement.links.DOWN = e), (this.lastFocusedElement = n.el), a()(this.lastFocusedElement).focus();
                        }
                        t.preventDefault(), t.stopPropagation();
                    },
                    notifyContainerWidth: function notifyContainerWidth(t) {
                        this.isFloating || this.isFixedHandwriting || this.horizontalLayout || (this.getDraggableElement().width(t), (this.isImageCloze = !0));
                    },
                    onAttach: function onAttach() {
                        var t,
                            e,
                            i = this,
                            n = this.menuGroupDropdown;
                        this.isRendered &&
                            !this.isAttached &&
                            ((t = this.$(".lrn-formula-keyboard")),
                            (e = l.a.keys(this.symbolGroups)),
                            Object(x.a)(t, function () {
                                var t = i.menuGroupDropdown;
                                t && t.open({ focusToSelectedOption: !1 }), i.renderLatex(), t && t.close();
                            }),
                            (this.maxWidth = parseInt(t.css("max-width"))),
                            (this.minWidth = parseInt(t.css("min-width"))),
                            "master" === e[0] && e.length > 1 ? (this.activateGroup(e[1]), n && (n.selectedIndex = 1)) : (n && (n.selectedIndex = 0), this.activateGroup(e[0])),
                            (this.isAttached = !0));
                    },
                    pickCoords: function pickCoords(t, e) {
                        var i = this.$(".lrn-formula-keyboard").height() * this.MINIMUM_KEYPAD_VISIBILITY,
                            n = this.$(".lrn-formula-keyboard").width() * this.MINIMUM_KEYPAD_VISIBILITY,
                            a = this.pageWidth - n,
                            s = -3 * n,
                            r = this.pageHeight - i;
                        return { x: this.getPositionWithinBounds(e.x, t.clientX, s, a), y: this.getPositionWithinBounds(e.y, t.clientY, 0, r) };
                    },
                    preventAction: function preventAction(t) {
                        var e = a()(t.target);
                        !e.closest(this.SELECTORS.MENU_GROUP).length && !e.closest(".lrn-formula-keyboard-mask").length && (t.cancelable ? t.preventDefault() : (this.shouldIgnoreNextAction = !0), t.stopPropagation());
                    },
                    pulseButton: function pulseButton(t, e, i) {
                        var n,
                            a = 1 === e.length ? e.toLowerCase() : e,
                            s = this;
                        "\\" !== a &&
                            ((a = a.replace(/\\/g, "\\\\").replace(/"/g, '\\"')),
                            (n = i ? this.$('[data-symbol-cid="' + i.cid + '"]') : this.$('[data-mq-value="' + a + '"]')).addClass(this.CLASSES.BUTTON_ACTIVE),
                            setTimeout(function () {
                                n.removeClass(s.CLASSES.BUTTON_ACTIVE);
                            }, 100)),
                            this.isVisible || t !== this.ACTIONS.KEYPAD_OPEN || this.show();
                    },
                    remove: function remove(t) {
                        return (
                            a()(document).off(".lrn." + this.cid),
                            S.a.capsLock.unobserve(this.capsObserver),
                            this.fullScreenObserver && S.a.fullScreen.unobserve(this.fullScreenObserver),
                            this.unSetHintToShow(),
                            !t && this.clone && (a()(this.clone).remove(), (this.clone = null)),
                            this.$(".mq-math-mode.lrn-mq-original").each(function () {
                                r()(this).revert();
                            }),
                            this.helpModal && (this.helpModal.remove(), (this.helpModal = null)),
                            this.handwritingPad && (this.handwritingPad.remove(), (this.handwritingPad = null)),
                            (this.buttonMap = []),
                            (this.buttonMapCache = {}),
                            u.a.View.prototype.remove.apply(this, arguments)
                        );
                    },
                    adjustHorizontalKeypadWidth: function adjustHorizontalKeypadWidth() {
                        this.shouldAdjustWidthOfTopRow() ? this.adjustWidthOfTopRow() : this.shouldAdjustWidthOfBothRows() && this.adjustWidthOfBothRows();
                    },
                    getHorizontalKeypadElements: function getHorizontalKeypadElements() {
                        var t = this.el,
                            e = t.querySelector(".lrn-formula-keyboard"),
                            i = e.querySelector(".lrn-formula-keyboard-main");
                        return { outerKeypadContainer: t, innerKeypadContainer: e, buttonsContainer: i, allButtons: l.a.toArray(i.children) };
                    },
                    applyStylesToAdjustedHorizontalKeypad: function applyStylesToAdjustedHorizontalKeypad(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            i = this.getHorizontalKeypadElements(),
                            n = i.outerKeypadContainer,
                            a = i.innerKeypadContainer;
                        a.classList.add("lrn-formula-keyboard--adjusted"), n.classList.add("lrn_absolute_keyboard_parent--adjusted"), (n.style.maxWidth = "".concat(80 * t.length, "px"));
                        var s = e || t;
                        s.forEach(function (e) {
                            e.style.width = "".concat(100 / t.length, "%");
                        });
                        var r = s.length,
                            o = "320px";
                        r <= 3 && (o = "".concat(80 * r, "px")), (n.style.minWidth = o);
                    },
                    isNonEmpty: function isNonEmpty(t) {
                        return t.classList.contains("lrn_btn_grid");
                    },
                    isPurposedlyEmpty: function isPurposedlyEmpty(t, e) {
                        var i = e.classList.contains("lrn-btn-placeholder"),
                            n = t.filter(this.isNonEmpty),
                            a = t.indexOf(l.a.last(n)),
                            s = t.indexOf(e) < a;
                        return i && s;
                    },
                    adjustWidthOfTopRow: function adjustWidthOfTopRow() {
                        var t = this;
                        if (this.shouldAdjustWidthOfTopRow()) {
                            var e = this.getHorizontalKeypadElements().allButtons,
                                i = e.filter(function (i) {
                                    return t.isNonEmpty(i) || t.isPurposedlyEmpty(e, i);
                                });
                            l.a.difference(e, i).forEach(function (t) {
                                return t.classList.add("lrn-btn-placeholder--hidden");
                            }),
                                this.applyStylesToAdjustedHorizontalKeypad(i);
                        }
                    },
                    adjustWidthOfBothRows: function adjustWidthOfBothRows() {
                        var t = this;
                        if (this.shouldAdjustWidthOfBothRows()) {
                            for (
                                var e = this.getHorizontalKeypadElements(),
                                    i = e.buttonsContainer,
                                    n = e.allButtons,
                                    a = n.slice(0, 10),
                                    s = a.filter(function (e) {
                                        return t.isNonEmpty(e) || t.isPurposedlyEmpty(a, e);
                                    }),
                                    r = n.slice(10),
                                    o = r.filter(function (e) {
                                        return t.isNonEmpty(e) || t.isPurposedlyEmpty(r, e);
                                    }),
                                    l = document.createElement("div"),
                                    c = document.createElement("div");
                                i.firstChild;

                            )
                                i.removeChild(i.firstChild);
                            s.forEach(function (t) {
                                l.appendChild(t);
                            }),
                                o.forEach(function (t) {
                                    c.appendChild(t);
                                }),
                                i.appendChild(l),
                                i.appendChild(c);
                            var u = s.length >= o.length ? s : o,
                                h = [].concat(_toConsumableArray(s), _toConsumableArray(o));
                            this.applyStylesToAdjustedHorizontalKeypad(u, h);
                        }
                    },
                    render: function render() {
                        var t = this.options.uiStyleType === this.TYPE.BLOCK_ON_FOCUS_KEYBOARD || this.options.uiStyleType === this.TYPE.FLOATING_KEYBOARD;
                        this.$el.html(
                            p()({ symbolGroups: this.symbolGroups, showHints: this.whetherToShowHints, numberPadSymbols: this.numberPadSymbols, horizontalLayout: this.horizontalLayout, labels: this.i18n.labels, showCloseButton: t })
                        ),
                            this.adjustHorizontalKeypadWidth(),
                            this.$(".lrn-formula-keyboard")
                                .addClass("lrn-ui-style-" + this.options.uiStyleType)
                                .toggleClass("lrn-touch", !!w.a.isTouchDevice()),
                            (this.helpModal = new I({ symbolGroups: this.symbolGroups, i18nLabels: this.i18n.labels }).render()),
                            this.on(this.EVENT.ACTIVATED_GROUP, this.setWidthFromGroup),
                            this.options.uiStyleType === this.TYPE.FIXED_HANDWRITING_ONLY && (this.isFixedHandwriting = !0),
                            this.hasHandwriting() &&
                                ((this.handwritingPad = new O({
                                    el: this.$(".lrn-handwriting")[0],
                                    security: this.options.security,
                                    handwriting: this.options.handwriting,
                                    handwritingRecognises: this.options.handwritingRecognises,
                                    fixed: this.isFixedHandwriting,
                                    i18n: this.i18n,
                                })),
                                this.setHandwritingEvents()),
                            this.options.uiStyleType === this.TYPE.BLOCK_ON_FOCUS_KEYBOARD && (this.isBlockOnFocus = !0),
                            this.options.uiStyleType === this.TYPE.FLOATING_KEYBOARD &&
                                ((this.isFloating = !0),
                                this.options.immutablePositioner && (this.options.positioner = this.options.immutablePositioner),
                                this.$el.addClass("lrn lrn_widget lrn_absolute_keyboard_parent").appendTo(this.appendParent),
                                (this.fullScreenObserver = S.a.fullScreen.observe(function (t) {
                                    var e = t || "body";
                                    e !== this.appendParent && (this.$el.appendTo(e), (this.appendParent = e));
                                }, this)),
                                this.on(this.EVENT.SHOWN, l.a.debounce(this.resetVirginDraggableElement)),
                                this.on(this.EVENT.ACTIVATED_GROUP, this.resetVirginDraggableElement)),
                            (this.options.uiStyleType !== this.TYPE.FLOATING_KEYBOARD && this.options.uiStyleType !== this.TYPE.BLOCK_ON_FOCUS_KEYBOARD) || (this.isVisible = !1);
                        var e = this.TYPE;
                        return (
                            l.a.contains([e.BLOCK_KEYBOARD, e.BLOCK_ON_FOCUS_KEYBOARD], this.options.uiStyleType) && this.hideKeyboardMenuBar(),
                            l.a.isEmpty(this.symbolGroups) || this.renderMenuGroup(),
                            this.setMathEvents(this.options.mathEvents),
                            (this.capsObserver = S.a.capsLock.observe(this.toggleCaps, this)),
                            (this.isRendered = !0),
                            a.a.contains(document, this.el) && this.onAttach(),
                            this
                        );
                    },
                    renderMenuGroup: function renderMenuGroup() {
                        var t = this,
                            e = this.SELECTORS,
                            i = e.MENU_GROUP,
                            n = e.MENU_GROUP_TOGGLE,
                            a = this.$(i).get(0),
                            s = getSymbolGroupsCustomLabels(this.i18n.labels),
                            r = this.options.disableSpokenmathUserInputs;
                        Object(x.a)(a, function (e) {
                            (t.menuGroupDropdown = new A.a(
                                a,
                                (function getDropdownSymbols(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                        i = arguments.length > 2 ? arguments[2] : void 0;
                                    return l.a.map(t, function (t, n) {
                                        var a = t.title,
                                            s = t.render_latex,
                                            r = t.label;
                                        return (
                                            a ||
                                                !s ||
                                                i ||
                                                D.a.translateOrEmptyString(r, function (t) {
                                                    a = t;
                                                }),
                                            {
                                                title: a,
                                                value: n,
                                                label: function labelFunction() {
                                                    var t = l.a.findWhere(e, { id: n });
                                                    return t ? t.label : s && r.indexOf("\\") > -1 ? '<span class="mathquill-embedded-latex">'.concat(r, "</span>") : "qwerty" === n ? '<span class="lrn-group-qwerty" />' : r;
                                                },
                                            }
                                        );
                                    });
                                })(t.symbolGroups, s, r),
                                {
                                    scaleToFit: !0,
                                    toggleButton: { disableArrowKey: !0 },
                                    ariaLabel: t.i18n.labels.ariaLabel.mathKeyboard.selectSymbolGroup,
                                    ariaDescription: t.i18n.labels.ariaLabel.mathKeyboard.symbolGroupRole,
                                    ariaSelected: t.i18n.labels.ariaLabel.mathKeyboard.currentSymbolGroup,
                                }
                            )),
                                l.a.delay(function () {
                                    e();
                                }, 10);
                        }),
                            this.menuGroupDropdown
                                .on("change", this.selectGroup, this)
                                .on("blur", this.blurredButton, this)
                                .on("updateComplete", function () {
                                    return t.renderLatex(t.$(n));
                                });
                    },
                    renderLatex: function renderLatex(t) {
                        (t = t || this.$el).find(".mathquill-embedded-latex").each(function () {
                            var t = this.textContent,
                                e = R[t];
                            e ? this.parentNode.replaceChild(e.cloneNode(!0), this) : (r.a.InertMath(this), (R[t] = this.cloneNode(!0)), this.classList.add("lrn-mq-original"));
                        });
                    },
                    resetDraggableElement: function resetDraggableElement() {
                        this.isFloating && (this.resetDraggableElementPosition(), (this.hasBeenDragged = !1));
                    },
                    hideKeyboardMenuBar: function hideKeyboardMenuBar() {
                        this.$(".lrn-drag-area").addClass("lrn_hide"), this.$(".lrn-formula-keyboard-menu").addClass("lrn-hide-menu-bar");
                    },
                    resetDraggableElementPosition: function resetDraggableElementPosition() {
                        if (this.options.horizontalParent && this.options.positioner) {
                            var t = a()(this.options.horizontalParent),
                                e = a()(this.options.positioner),
                                i = this.getDraggableElement(),
                                n = t.outerWidth(),
                                s = e.offset(),
                                r = this.calculateWidthScale(n);
                            i.css(
                                this.calculatePositionAndWidth({
                                    pLeft: s.left,
                                    pTop: s.top,
                                    pWidth: e.outerWidth(),
                                    pHeight: e.outerHeight(),
                                    hLeft: t.offset().left,
                                    hWidth: n,
                                    maxWidth: this.maxWidth,
                                    boardHeight: i.outerHeight(),
                                    boardWidth: i.outerWidth(),
                                    boardTop: i.offset().top,
                                    boardLeft: i.offset().left,
                                    widthScale: r,
                                    isFloating: this.isFloating,
                                    uiBelowResponse: this.uiBelowResponse,
                                })
                            );
                        }
                    },
                    resetRemoveTimeout: function resetRemoveTimeout() {
                        var t = this.options.mathEvents,
                            e = this;
                        clearTimeout(this.removeTimeout),
                            (this.removeTimeout = setTimeout(function () {
                                e.isRendered &&
                                    (e.remove(!0),
                                    e.setElement(a()(e.clone).removeClass("lrn_clone")[0]),
                                    (e.isRendered = !1),
                                    (e.isAttached = !1),
                                    e.listenToOnce(t, t.EVENT.EDITOR_FOCUSED, function () {
                                        e.show();
                                    }));
                            }, this.lazyRemoveTimeout));
                    },
                    resetVirginDraggableElement: function resetVirginDraggableElement() {
                        this.hasBeenDragged || this.resetDraggableElementPosition();
                    },
                    sendMathCommand: function sendMathCommand(t) {
                        var e = a()(t.currentTarget).attr("data-mq-command"),
                            i = a()(t.currentTarget).attr("data-mq-value"),
                            n = a()(t.currentTarget).data("symbol-cid"),
                            s = this.masterSymbolCollection.get(n),
                            r = this.options.mathEvents;
                        "qwerty" === this.group && this.isCapitalised() && i.match(/^[a-z]$/) && (i = i.toUpperCase()), r.trigger(r.EVENT.MATH_COMMAND, e, i, s);
                    },
                    setElement: function setElement() {
                        return u.a.View.prototype.setElement.apply(this, arguments), (this.clone = this.$el.clone().insertBefore(this.$el).addClass("lrn_clone")[0]), (this.options.el = this.el), (this.options.$el = this.$el), this;
                    },
                    setEvents: function setEvents() {
                        (this.events = {}),
                            (this.additionalEvents = {}),
                            (this.additionalTouchEvents = {}),
                            this.whetherToShowHints &&
                                ((this.additionalEvents["mouseenter button[title]"] = "setHintToShow"),
                                (this.additionalEvents["mouseleave button[title]"] = "unSetHintToShow"),
                                (this.additionalTouchEvents["touchstart button[title]"] = "showTouchHint")),
                            a.a.extend(this.events, this.normalEvents, this.additionalEvents),
                            w.a.isTouchDevice() && a.a.extend(this.events, this.touchEvents, this.additionalTouchEvents);
                    },
                    setHandwritingEvents: function setHandwritingEvents() {
                        var t = this.handwritingPad,
                            e = this;
                        this.listenTo(t, t.EVENT.WRITING_STARTED, function () {
                            var t = e.options.mathEvents;
                            t.trigger(t.EVENT.CONTENT_OUTDATED);
                        }),
                            this.listenTo(t, t.EVENT.RECOGNITION_ENDED, function () {
                                var t = e.options.mathEvents;
                                t.trigger(t.EVENT.RESET_STATE);
                            }),
                            this.listenTo(t, t.EVENT.RECOGNITION_REQUEST, function () {
                                var t = e.options.mathEvents;
                                t.trigger(t.EVENT.AWAIT_UPDATE);
                            }),
                            this.listenTo(t, t.EVENT.RECEIVED_RESULT, function (t) {
                                var i = e.options.mathEvents;
                                i.trigger(i.EVENT.WRITE_LATEX, t);
                            }),
                            this.listenTo(t, t.EVENT.ERROR, function (t) {
                                var i = e.options.mathEvents;
                                i.trigger(i.EVENT.SET_ERROR, t);
                            }),
                            this.on(this.EVENT.ACTIVATED_GROUP + " " + this.EVENT.SHOWN, function () {
                                e.isVisible && "handwriting" === e.group && e.handwritingPad.trigger(e.handwritingPad.EVENT.SHOWN);
                            });
                    },
                    setHintToShow: function setHintToShow(t) {
                        (this.hintToShow = t.currentTarget), this.showHint();
                    },
                    setMathEvents: function setMathEvents(t) {
                        var e,
                            i = this,
                            n = this;
                        function changeHandwritingContext() {
                            t.trigger(t.EVENT.GET_ACTIVE_ID, function (t) {
                                n.handwritingPad.trigger(n.handwritingPad.EVENT.CANCEL_RECOGNITION), n.handwritingPad.trigger(n.handwritingPad.EVENT.CHANGE_CONTEXT, t);
                            });
                        }
                        return (
                            this.stopListening(this.options.mathEvents),
                            (this.options.mathEvents = t),
                            this.listenTo(t, t.EVENT.MATH_COMMAND, this.pulseButton),
                            this.listenTo(t, t.EVENT.SHIFT_KEY, function () {
                                (S.a.capsLock.status && "osx" === w.a.getOs()) || n.toggleCaps();
                            }),
                            this.listenTo(t, t.EVENT.EDITOR_FOCUSED, this.show),
                            this.listenTo(t, t.EVENT.EDITOR_BLURRED, function () {
                                i._mathDropdownFocus || i.hide();
                            }),
                            this.listenTo(t, t.EVENT.TAB_EDITOR, function (t) {
                                t &&
                                    t.nextTabElement &&
                                    (t.isFirstElement || (n.nextTab = t.nextTabElement),
                                    n.isFixedHandwriting ||
                                        (t.originalEvent.preventDefault(),
                                        l.a.defer(function () {
                                            (e = n.lastFocusedElement ? n.$(n.lastFocusedElement) : n.$("button:visible, [tabindex]:visible").get(0)) ? e.focus() : t.nextTabElement.focus();
                                        })));
                            }),
                            this.isFloating && this.listenTo(t, t.EVENT.UPDATED, this.resetVirginDraggableElement),
                            this.hasHandwriting() &&
                                (this.listenTo(t, [t.EVENT.EDITOR_PRESSED, t.EVENT.UPDATED, t.EVENT.EDITOR_BLURRED, t.EVENT.MATH_COMMAND].join(" "), function () {
                                    n.handwritingPad.trigger(n.handwritingPad.EVENT.CANCEL_RECOGNITION);
                                }),
                                changeHandwritingContext(),
                                this.listenTo(t, t.EVENT.EDITOR_FOCUSED, changeHandwritingContext),
                                this.listenTo(t, t.EVENT.EDITOR_REMOVED, function (t) {
                                    n.handwritingPad.trigger(n.handwritingPad.EVENT.DELETE_CONTEXTS, t);
                                })),
                            this.listenTo(t, t.EVENT.MATH_COMMAND, this.updateCapitalisation),
                            this.listenTo(
                                t,
                                "all",
                                function (e) {
                                    e !== t.EVENT.ITEM_BLURRED && n.helpModal && n.helpModal.hide();
                                },
                                this
                            ),
                            this
                        );
                    },
                    onDropdownToggleMouseUp: function onDropdownToggleMouseUp() {
                        this._mathDropdownFocus = !0;
                    },
                    onDropdownToggleMouseDown: function onDropdownToggleMouseDown() {
                        this._mathDropdownFocus = !1;
                    },
                    setPositioner: function setPositioner(t, e) {
                        return this.isFloating && !this.options.immutablePositioner && ((this.options.positioner = t), e && (this.options.horizontalParent = t), this.resetVirginDraggableElement()), this;
                    },
                    setWidthFromGroup: function setWidthFromGroup(t) {
                        this.numColumns = (this.symbolGroups[t] ? this.symbolGroups[t].columnCount : 0) + (this.numberPadSymbols.hasSymbols ? (this.symbolGroups[t].custom ? 4 : this.numberPadSymbols.columnCount) : 0);
                        var e = this.horizontalLayout && this.shouldAdjustWidth() ? 1 : this.numColumns / this.defaultNumColumns;
                        this.shouldUpdateWidth() && this.getDraggableElement().css(this.calculateWidth({ hWidth: a()(this.options.horizontalParent).outerWidth(), widthScale: e, maxWidth: this.maxWidth }));
                    },
                    shouldUpdateWidth: function shouldUpdateWidth() {
                        return this.options.horizontalParent && a()(this.options.horizontalParent).is(":visible");
                    },
                    updateAriaLiveText: function updateAriaLiveText(t) {
                        a()(this.el).find(this.SELECTORS.ARIA_LIVE).text("").hide().text(t).show();
                    },
                    show: function show() {
                        var t = this;
                        this.updateAriaLiveText(this.i18n.labels.ariaLiveText.mathKeyboard.mathKeyboardOpened),
                            clearTimeout(this.removeTimeout),
                            this.isRendered || (this.render(), this.onAttach()),
                            (!this.isFloating && !this.isBlockOnFocus) || this.isVisible
                                ? this.isFixedHandwriting && this.handwritingPad.show()
                                : (this.resetDraggableElement(),
                                  l.a.defer(function () {
                                      t.$(".lrn-formula-keyboard")
                                          .finish()
                                          .fadeIn(100, function () {
                                              t.trigger(t.EVENT.SHOWN);
                                          });
                                  }),
                                  (this.isVisible = !0)),
                            delete this.tempPageWidth;
                    },
                    showHint: function showHint() {
                        if (this.hintToShow) {
                            var t = a()(this.hintToShow);
                            this.$(".lrn-hint-title").text(t.attr("title") || ""), this.$(".lrn-hint-shortcut").text(t.data("shortcut") || ""), this.$(".lrn-formula-keyboard-hint").removeClass("lrn-empty"), (this.hintShowing = !0);
                        }
                    },
                    showTouchHint: function showTouchHint(t) {
                        this.hintTimeout && clearTimeout(this.hintTimeout), this.showHint(t), (this.hintTimeout = setTimeout(l.a.bind(this.hideHint, this), 1e3));
                    },
                    startDrag: function startDrag(t) {
                        var e,
                            i = this.getDraggableElement(),
                            n = i.position(),
                            s = this,
                            r = this.$(".lrn-formula-keyboard-menu"),
                            o = { x: t.clientX - r.offset().left, y: t.clientY - r.offset().top };
                        this.isDragging || ((this.pageHeight = a()(document).outerHeight()), (this.tempPageWidth = this.tempPageWidth || a()(document).innerWidth()), (this.pageWidth = this.tempPageWidth)),
                            a()(document).on("mousemove.lrn." + this.cid, function (t) {
                                var a = s.pickCoords(t, o);
                                e ? i.css({ top: n.top + (a.y - e.y), left: n.left + (a.x - e.x) }) : ((e = a), (s.hasBeenDragged = !0), (s.isDragging = !0));
                            }),
                            a()(document).one("mouseup.lrn." + this.cid, function (t) {
                                (s.isDragging = !1), a()(document).off("mousemove.lrn." + s.cid);
                            });
                    },
                    startTouchDrag: function startTouchDrag(t) {
                        var e,
                            i = this.getDraggableElement(),
                            n = i.position(),
                            s = this,
                            r = this.$(".lrn-formula-keyboard-menu"),
                            o = { x: t.originalEvent.touches[0].clientX - r.offset().left, y: t.originalEvent.touches[0].clientY - r.offset().top };
                        this.isDragging || ((this.pageHeight = a()(document).outerHeight()), (this.tempPageWidth = this.tempPageWidth || a()(document).innerWidth()), (this.pageWidth = this.tempPageWidth)),
                            a()(document).on("touchmove.lrn." + this.cid, function (t) {
                                var a = s.pickCoords(t.originalEvent.touches[0], o);
                                e ? i.css({ top: n.top + (a.y - e.y), left: n.left + (a.x - e.x) }) : ((e = a), (s.hasBeenDragged = !0));
                            }),
                            a()(document).one("touchend.lrn." + this.cid, function (t) {
                                a()(document).off("touchmove.lrn." + s.cid);
                            });
                    },
                    toggleCaps: function toggleCaps(t) {
                        this.$(".lrn-formula-keyboard").toggleClass("lrn_caps_on", t);
                    },
                    unSetHintToShow: function unSetHintToShow() {
                        this.hintShowing && this.hideHint(), (this.hintToShow = null);
                    },
                    getElementByClassName: function getElementByClassName(t) {
                        return l.a.find(this.buttonMap, function (e) {
                            return e.el.classList.contains(t);
                        });
                    },
                    getControlElements: function getControlElements() {
                        return {
                            dropdownElement: this.getElementByClassName("lrn_dropdown_toggle"),
                            closeButtonElement: this.getElementByClassName("lrn-formula-keyboard-close-button"),
                            helpButtonElement: this.getElementByClassName("lrn-formula-keyboard-help-button"),
                        };
                    },
                    getRootControlElement: function getRootControlElement() {
                        var t = this.getControlElements(),
                            e = t.dropdownElement,
                            i = t.closeButtonElement,
                            n = t.helpButtonElement;
                        return this.horizontalLayout ? n || i : e || n || i;
                    },
                    getFirstRowElements: function getFirstRowElements() {
                        var t = this.getControlElements(),
                            e = t.dropdownElement,
                            i = this.buttonMap.filter(function (i) {
                                var n = l.a.values(t).indexOf(i) > -1,
                                    a = !!e && e.el.parentNode.contains(i.el);
                                return !n && !a;
                            }),
                            n = l.a.min(i, function (t) {
                                return t.top;
                            });
                        return this.buttonMap.filter(function (t) {
                            return t.top === n.top;
                        });
                    },
                    applyArrowNavigationFixes: function applyArrowNavigationFixes() {
                        var t = this.getControlElements(),
                            e = t.dropdownElement,
                            i = t.helpButtonElement,
                            n = t.closeButtonElement,
                            a = this.getFirstRowElements(),
                            s = this.getRootControlElement();
                        this.buttonMap.forEach(function (t) {
                            l.a.contains(a, t) && ((t.isInFirstRow = !0), s && (t.links.UP = s));
                        }),
                            e && n && (e.links.UP = n),
                            n && (i || e) && (n.links.DOWN = i || e);
                        var r = e && e.links.DOWN && e.links.DOWN.el;
                        r && e.el.parentNode.contains(r) && (e.links.DOWN = a[0]);
                    },
                    updateButtonMap: function updateButtonMap(t) {
                        var e = this;
                        !t && this.buttonMapCache[this.group]
                            ? (this.buttonMap = this.buttonMapCache[this.group])
                            : Object(x.a)(this.$(".lrn-formula-keyboard"), function () {
                                  (e.buttonMap = e.buttonMapCache[e.group] = S.a.updateButtonMap(e.$("button.lrn_dropdown_toggle, [tabindex]:visible"))), e.applyArrowNavigationFixes();
                              }),
                            (this.rootControlElement = this.getRootControlElement());
                    },
                    updateCapitalisation: function updateCapitalisation(t, e) {
                        "qwerty" === this.group && /^[a-zA-Z]$/.test(e) && this.toggleCaps(/[A-Z]/.test(e));
                    },
                    selectGroup: function selectGroup(t) {
                        this.activateGroup(t.value), this.isFloating && this.restoreFocusToInput();
                    },
                    onMaskTouchstart: function onMaskTouchstart(t) {
                        this.maskTouchstart = t.originalEvent.touches[0].clientY;
                    },
                    restoreFocusToInput: function restoreFocusToInput() {
                        var t = a()(this.options.positioner).find(".lrn_focusable");
                        t && t.focus();
                    },
                    maskHasBeenScrolled: function maskHasBeenScrolled(t) {
                        if (!l.a.isNumber(this.maskTouchstart)) return !1;
                        var e = Math.abs(t.originalEvent.changedTouches[0].clientY - this.maskTouchstart) > 5;
                        return (this.maskTouchstart = null), e;
                    },
                    getMenuContainer: function getMenuContainer() {
                        return this.$(".lrn-formula-keyboard-menu-right").get(0);
                    },
                    _isDropdownClosed: function _isDropdownClosed() {
                        var t = this.menuGroupDropdown;
                        return !t || !t.isOpen();
                    },
                }),
                I = u.a.View.extend({
                    isMathRendered: !1,
                    previousActiveEl: void 0,
                    events: { "keydown .lrn-content": "handleKeyDown", "mousedown.lrn.formula.modal .lrn-ignore-mousedown": "handleMouseDown", "click .lrn-close": "hide" },
                    handleKeyDown: function handleKeyDown(t) {
                        27 === t.keyCode && this.hide();
                    },
                    handleMouseDown: function handleMouseDown(t) {
                        t.stopPropagation();
                    },
                    hide: function hide() {
                        this.$el.parent().length && (this.$el.detach().css({ opacity: "" }), a()(document).off(".lrn." + this.cid), this.previousActiveEl && this.previousActiveEl.focus());
                    },
                    renderMath: function renderMath() {
                        this.$(".mathquill-embedded-latex").each(function () {
                            r.a.InertMath(this);
                        }),
                            (this.isMathRendered = !0);
                    },
                    remove: function remove() {
                        return (
                            a()(document).off(".lrn." + this.cid),
                            this.$(".mathquill-embedded-latex.mq-math-mode").each(function () {
                                r()(this).revert();
                            }),
                            (this.previousActiveEl = null),
                            u.a.View.prototype.remove.apply(this, arguments)
                        );
                    },
                    render: function render() {
                        var t = this.options.i18nLabels.mathKeyboardHelp;
                        return this.setElement(a()(f()({ symbolGroups: this.options.symbolGroups, formulaHelpLabels: t }))), this;
                    },
                    show: function show(t, e) {
                        if (!this.$el.parent().length) {
                            var i = l.a.bind(this.hide, this);
                            this.$el.css({ top: t }).appendTo("body"),
                                this.$(".lrn-content").css({ height: e - parseInt(this.$el.css("marginTop")) }),
                                this.isMathRendered || this.renderMath(),
                                S.a.recomputeOpacityOn(this.el),
                                this.$el.css({ opacity: 1 }),
                                (this.previousActiveEl = document.activeElement),
                                this.$el.find("[autofocus]").focus(),
                                a()(document).on("mousedown.lrn." + this.cid, i);
                        }
                    },
                });
            e.a = L;
        },
        206: function (t, e, i) {
            "use strict";
            var n = i(0),
                a = i.n(n),
                s = ["syntax", "argument"],
                r = ["stringMatch"];
            String.prototype.trim ||
                (String.prototype.trim = function () {
                    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                }),
                (e.a = {
                    processSpec: function processSpec(t) {
                        var e, i, n;
                        if (a.a.isObject(t) && "equivSyntax" === t.method)
                            return (a.a.isObject(t.options) && a.a.isString(t.options.syntax) && "" !== t.options.syntax) || !t.value
                                ? ("\\number",
                                  (n = { method: "equivSyntax", value: "" }),
                                  (i = t.options.syntax || "\\number"),
                                  (n.value = "\\format{" + i),
                                  a.a.isNumber(t.options.argument) && (n.value += "{" + t.options.argument + "}"),
                                  (n.value += "}"),
                                  a.a.isBoolean(t.options.ignoreText) && (n.options = { ignoreText: t.options.ignoreText }),
                                  n)
                                : t;
                        for (e = 0; e < s.length; e++) a.a.isObject(t.options) && !a.a.isUndefined(t.options[s[e]]) && delete t.options[s[e]];
                        return t;
                    },
                    useMathCore: function useMathCore(t) {
                        return !(a.a.isObject(t) && -1 !== a.a.indexOf(r, t.method));
                    },
                    validate: function validate(t, e) {
                        var i,
                            n,
                            s,
                            r,
                            o,
                            l = { errorCode: 0, location: void 0, message: "Normal completion", result: !1 };
                        return (
                            a.a.isObject(t) &&
                                a.a.isString(e) &&
                                "stringMatch" === t.method &&
                                a.a.isString(t.value) &&
                                ((i = t.value.replace(/\\\s/g, " ")),
                                (n = e.replace(/\\\s/g, " ")),
                                (r = !a.a.isObject(t.options) || (a.a.isObject(t.options) && !1 !== t.options.ignoreLeadingAndTrailingSpaces)),
                                (o = !a.a.isObject(t.options) || (a.a.isObject(t.options) && !1 !== t.options.treatMultipleSpacesAsOne)),
                                (s = a.a.isObject(t.options) && !0 === t.options.inverseResult),
                                r && ((i = i.trim()), (n = n.trim())),
                                o && ((i = i.replace(/\s+/g, " ")), (n = n.replace(/\s+/g, " "))),
                                (l.result = i === n),
                                s && (l.result = !l.result)),
                            l
                        );
                    },
                });
        },
        207: function (t, e, i) {
            "use strict";
            i.d(e, "a", function () {
                return applySelectiveFontBoost;
            });
            var n = i(232),
                a = i.n(n);
            function applySelectiveFontBoost(t, e) {
                t &&
                    !e &&
                    a.a.isWindows &&
                    [].slice
                        .call(t.querySelectorAll(".mq-math-mode span"))
                        .filter(function (t) {
                            return "−" === t.textContent;
                        })
                        .forEach(function (t) {
                            t.style.fontSize = "120%";
                        });
            }
        },
        243: function (t, e, i) {
            "use strict";
            i.d(e, "a", function () {
                return mathAccessibility;
            });
            var n = i(0),
                a = i.n(n);
            function mathAccessibility(t, e) {
                (t.processAccessibility = a.a.wrap(t.processAccessibility, function (e, i) {
                    ((i = i || {}).getSourceText = function (t) {
                        return t.find(".lrn-spokenmath").text();
                    }),
                        e.call(t, i);
                })),
                    t.activity.get("state") === t.activity.STATE.REVIEW &&
                        (t.processAccessibility = a.a.wrap(t.processAccessibility, function (i, n) {
                            var s = e(),
                                r = 0;
                            a.a.each(s, function (e) {
                                var a = e.mathEvents;
                                t.listenToOnce(a, a.EVENT.EDITOR_SPOKENMATH_UPDATED, function () {
                                    ++r === s.length && i.call(t, n);
                                });
                            });
                        }));
            }
        },
        277: function (t, e, i) {
            "use strict";
            var n = i(0),
                a = i.n(n),
                s = i(35),
                r = i(10);
            function _typeof(t) {
                return (_typeof =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function _typeof(t) {
                              return typeof t;
                          }
                        : function _typeof(t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                }
            }
            function _setPrototypeOf(t, e) {
                return (_setPrototypeOf =
                    Object.setPrototypeOf ||
                    function _setPrototypeOf(t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function _createSuper(t) {
                var e = (function _isNativeReflectConstruct() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function _createSuperInternal() {
                    var i,
                        n = _getPrototypeOf(t);
                    if (e) {
                        var a = _getPrototypeOf(this).constructor;
                        i = Reflect.construct(n, arguments, a);
                    } else i = n.apply(this, arguments);
                    return _possibleConstructorReturn(this, i);
                };
            }
            function _possibleConstructorReturn(t, e) {
                return !e || ("object" !== _typeof(e) && "function" != typeof e)
                    ? (function _assertThisInitialized(t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : e;
            }
            function _getPrototypeOf(t) {
                return (_getPrototypeOf = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function _getPrototypeOf(t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var o = ["exactMatch"],
                l = function isDefaultValidResponseValue(t) {
                    return (
                        0 ===
                        a.a.filter(t, function (t) {
                            return t && (t.value || t.method || 0 === t.value);
                        }).length
                    );
                },
                c = (function (t) {
                    !(function _inherits(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && _setPrototypeOf(t, e);
                    })(MathScorer, t);
                    var e = _createSuper(MathScorer);
                    function MathScorer() {
                        return _classCallCheck(this, MathScorer), e.apply(this, arguments);
                    }
                    return (
                        (function _createClass(t, e, i) {
                            return e && _defineProperties(t.prototype, e), i && _defineProperties(t, i), t;
                        })(MathScorer, [
                            {
                                key: "reset",
                                value: function reset(t, e) {
                                    var i = JSON.stringify(t);
                                    if (((e = e || this.cachedValidateSingleSpec), this.serializedData !== i)) {
                                        try {
                                            (this.scoringData = (function getScoringData(t, e) {
                                                if (
                                                    !(function canValidateResponse(t) {
                                                        if (!1 === a.a.getNested(t, "validation.automarkable")) return !1;
                                                        var e = t.validation || t;
                                                        return !(a.a.isEmpty(e) || !(e.valid_responses || (e.valid_response && !l(e.valid_response.value))));
                                                    })(t.question)
                                                )
                                                    return { automarkable: !1 };
                                                t.response = t.response || {};
                                                var i,
                                                    n,
                                                    s = t.response && t.response.value,
                                                    c = [];
                                                t.question.equiv_literal_legacy && (t = r.a.processCompatibility(t));
                                                if (((n = !!t.question.validation.allow_negative_scores), (t.response = t.response || {}), t.question.validation.scoring_type)) {
                                                    if (!a.a.contains(o, t.question.validation.scoring_type)) throw new r.a.InvalidScoringTypeException(t.question.type, t.question.validation.scoring_type);
                                                    t.question.validation.valid_response && c.push(t.question.validation.valid_response),
                                                        t.question.validation.alt_responses && (c = c.concat(t.question.validation.alt_responses)),
                                                        (i = Math.abs(a.a.isNumber(t.question.validation.penalty) ? t.question.validation.penalty : 0));
                                                } else c = (t.question.validation && t.question.validation.valid_responses) || [];
                                                var u = r.a.validateMathLists(s, c, e, 1, i);
                                                void 0 === u.scoreWithFullPenalty ? (u.score = null) : (u.score = n ? u.scoreWithFullPenalty : Math.max(0, u.scoreWithFullPenalty));
                                                return u;
                                            })(t, e)),
                                                r.a.normalizeScores(this.scoringData, t);
                                        } catch (t) {
                                            this.scoringData = { error: t };
                                        }
                                        this.serializedData = i;
                                    }
                                    return (this.cachedValidateSingleSpec = e), this;
                                },
                            },
                        ]),
                        MathScorer
                    );
                })(s.a);
            e.a = c;
        },
        310: function (t, e, i) {
            "use strict";
            var n = i(0),
                a = i.n(n),
                s = i(277),
                r = i(278),
                o = i.n(r),
                l = i(206);
            function FormulaScorer(t, e) {
                a.a.isObject(e) && a.a.isNumber(e.mathcoreTimeoutDuration) ? o.a.setTimeoutDuration(e.mathcoreTimeoutDuration) : o.a.setTimeoutDuration(5e3),
                    this._initialize(t, function (t, e) {
                        return l.a.useMathCore(t) ? o.a.evaluateVerbose(l.a.processSpec(t), e) : l.a.validate(t, e);
                    });
            }
            (FormulaScorer.prototype = new s.a()), (e.a = FormulaScorer);
        },
        407: function (t, e, i) {
            "use strict";
            i(5), i(1);
            var n = i(0),
                a = i.n(n),
                s = i(310),
                r = i(51),
                o = (i(17), i(4));
            e.a = r.a.extend({
                initialize: function initialize() {
                    r.a.prototype.initialize.apply(this, arguments), this.set({ type: "formulaV2" });
                },
                processResponseValue: function processResponseValue(t) {
                    var e = this.hasResponse();
                    if (!e || !t) {
                        var i = e ? this.get("response").dynamic : void 0,
                            n = { value: "", type: this.RESPONSE_TYPE.STRING };
                        i && (n.dynamic = i), this.set({ response: n }, { silent: !0 });
                    }
                    t && a.a.deepExtend(this.get("response"), t);
                },
                getScorerClass: function getScorerClass() {
                    return s.a;
                },
                getScorer: function getScorer() {
                    if (!this.scorer || this._prevModifiedForScorer !== this.lastModified)
                        if (((this._prevModifiedForScorer = this.lastModified), this.scorer)) this.scorer.reset(this.toJSON());
                        else {
                            var t = this.getScorerClass();
                            0, (this.scorer = new t(this.toJSON(), { mathcoreTimeoutDuration: 5e3, includeError: !1 }));
                        }
                    return this.scorer;
                },
                getFirstValidResponseValue: function getFirstValidResponseValue() {
                    var t = this.get("question");
                    if (t && t.validation)
                        try {
                            if (t.validation.valid_response) return t.validation.valid_response.value[0].value;
                            if (t.validation.valid_responses) return t.validation.valid_responses[0][0].value;
                        } catch (t) {
                            return;
                        }
                },
                validateResponse: function validateResponse() {
                    var t = this.getScorer(),
                        e = t.error();
                    if (!e) return t.isValid();
                    if ("MathQuestionException" !== e.name) throw e;
                    "user" !== e.location && o.a.exception({ code: 10019, detail: e.message, i18n: this.activity.get("i18n") });
                },
            });
        },
        409: function (t, e, i) {
            "use strict";
            var n = i(52),
                a = i(1),
                s = i.n(a),
                r = (i(5), i(0)),
                o = i.n(r),
                l = i(163),
                c = i(173),
                u = i(27),
                h = i(410),
                d = i.n(h),
                p = i(243),
                m = i(207);
            e.a = n.a.extend({
                defaultUiStyle: c.a.prototype.TYPE.FLOATING_KEYBOARD,
                inputSelector: ".lrn_math_editable",
                template: d.a,
                initialize: function initialize() {
                    var t = this;
                    n.a.prototype.initialize.call(this),
                        (this.activity = this.options.activity),
                        (this.i18n = this.activity.get("i18n")),
                        (this.displayLogic = {}),
                        this.addRenderingLogic(),
                        Object(p.a)(this, function () {
                            return [t.editorView];
                        }),
                        this.render(),
                        this.initialisationCompleted();
                },
                addFacadeMethods: function addFacadeMethods(t) {
                    u.a.addFacadeMethods.call(this, t),
                        (t.addMathQuillVarField = o.a.bind(function (t) {
                            this.editorView.addMathQuillVarField(t);
                        }, this)),
                        (t.extendKeypadMenu = o.a.bind(function (e) {
                            var i = this.editorView.mathEvents,
                                n = this.keyboardView.getMenuContainer(),
                                a = {
                                    insert: function insert(t) {
                                        i.trigger(i.EVENT.MATH_COMMAND, "write", t);
                                    },
                                    insertVariable: function insertVariable(e) {
                                        t.addMathQuillVarField(e);
                                    },
                                };
                            o.a.isFunction(e) && e(n, a);
                        }, this));
                },
                addRenderingLogic: function addRenderingLogic() {
                    n.a.prototype.addRenderingLogic.call(this);
                    var t = this.activity.get("state") === this.activity.STATE.PREVIEW,
                        e = this.displayLogic.isReviewState || t,
                        i = this.model.get("question"),
                        a = i.ui_style || {},
                        s = a.type === c.a.prototype.TYPE.NO_INPUT_UI;
                    (this.displayLogic.readOnly = e),
                        (this.displayLogic.showInputUi = !s && !e),
                        (this.displayLogic.hasTransparentBackground = !(!i.template || !a.transparent_background)),
                        (this.displayLogic.hasBoostedFont = "normal" !== a.response_font_scale);
                },
                clearValidationUI: function clearValidationUI() {
                    this.showingValidationUI && (this.$(".lrn_correct, .lrn_incorrect").removeClass("lrn_correct lrn_incorrect"), (this.showingValidationUI = !1), n.a.prototype.clearValidationUI.call(this)), this.clearCorrectAnswers();
                },
                handleBlurEvents: u.a.handleBlurEvents,
                handleEvents: function handleEvents() {
                    var t = this.editorView.mathEvents;
                    this.listenTo(t, t.EVENT.EDITOR_FOCUSED, this.clearValidationUI, this),
                        this.listenTo(t, t.EVENT.EDITOR_FOCUSED, this.clearCorrectAnswer, this),
                        this.listenTo(t, t.EVENT.UPDATED, this.updateModel, this),
                        this.handleBlurEvents(this.$(".lrn_response_input_wrapper")[0]);
                },
                insertUiKeyboard: function insertUiKeyboard(t) {
                    var e = this.model.get("question"),
                        i = this.model.get("response"),
                        n = this.activity.get("disable_spokenmath_user_inputs"),
                        a = (e.ui_style && e.ui_style.type) || this.defaultUiStyle,
                        s = t[0];
                    this.keyboardView = new c.a({
                        el: t.find("div.lrn_input_ui")[0],
                        horizontalParent: s,
                        positioner: s,
                        mathEvents: this.editorView.mathEvents,
                        symbols: e.symbols,
                        disableSpokenmathUserInputs: n,
                        showHints: o.a.isUndefined(e.showHints) || !0 === e.showHints,
                        security: this.activity.get("security"),
                        handwriting: i && i.handwriting,
                        handwritingRecognises: e.handwriting_recognises,
                        lazy: u.a.usesLazyKeyboard(this.options.activity),
                        uiStyleType: a,
                        i18n: this.i18n,
                        chemistry: u.a.isChemistry.call(this),
                        numberPad: e.numberPad,
                        horizontalLayout: e.horizontal_layout,
                        horizontalPad: e.horizontalPad,
                    });
                },
                onAttach: u.a.onAttach,
                render: function render() {
                    this.model.get("question");
                    var t,
                        e = this.activity.get("disable_spokenmath_user_inputs");
                    return (
                        (t = s()(
                            this.template({
                                displayLogic: this.displayLogic,
                                labels: this.i18n.labels,
                                minWidth: o.a.isObject(this.model.get("question").ui_style) && !o.a.isUndefined(this.model.get("question").ui_style.min_width) ? this.model.get("question").ui_style.min_width : null,
                            })
                        )),
                        (this.editorView = new l.a({
                            el: t.find(".lrn_response_input")[0],
                            disableSpokenmathUserInputs: e,
                            editables: (this.model.get("response") && this.model.get("response").responses) || [],
                            value: this.model.getResponseValue(),
                            readOnly: this.displayLogic.readOnly,
                            showInputUi: this.displayLogic.showInputUi,
                            i18n: this.i18n,
                            template: this.model.get("question").template || "",
                            response_container: this.model.get("question").response_container,
                            response_containers: this.model.get("question").response_containers,
                            text_blocks: this.model.get("question").text_blocks,
                            editor_options: this.model.get("question").editor_options,
                            disableItalics: u.a.isChemistry.call(this),
                            enableRawLatex: (this.activity.get("beta_flags") && this.activity.get("beta_flags").enable_raw_latex) || !1,
                            templateAriaLabel: this.model.get("question").template_aria_label,
                        })),
                        this.displayLogic.showInputUi && this.insertUiKeyboard(t),
                        this.renderViewContent(t),
                        this.displayLogic.isReviewState && this.renderValidatableUI(),
                        this.handleEvents(),
                        Object(m.a)(this.el, this.displayLogic.hasBoostedFont),
                        this
                    );
                },
                setDisabled: function setDisabled(t) {
                    u.a.setDisabled([this.editorView], t), this.setButtonsDisabled(t);
                },
                showCorrectAnswer: function showCorrectAnswer() {
                    u.a.addAriaLabelToValidationUi.call(this), this.showCorrectAnswerList();
                },
                showValidationUI: function showValidationUI() {
                    var t;
                    if ((u.a.addAriaLabelToValidationUi.call(this), (t = this.$(".lrn_response_input")), this.model.hasResponse()))
                        return (this.showingValidationUI = !0), this.model.validateResponse() ? (t.addClass("lrn_correct"), !0) : (t.addClass("lrn_incorrect"), !1);
                    t.addClass("lrn_not_attempted");
                },
                updateModel: function updateModel(t, e) {
                    this.clearValidationUI(), this.model.updateResponseValue({ value: t, responses: e, handwriting: this.keyboardView && this.keyboardView.getHandwriting() }), Object(m.a)(this.el, this.displayLogic.hasBoostedFont);
                },
                getReviewAriaLabel: function getReviewAriaLabel(t) {
                    return (t = t.clone()).text("response"), n.a.prototype.getReviewAriaLabel.call(this, t);
                },
            });
        },
        410: function (module, exports, __webpack_require__) {
            var _ = __webpack_require__(0);
            module.exports = function (obj) {
                var __t,
                    __p = "",
                    __j = Array.prototype.join,
                    print = function () {
                        __p += __j.call(arguments, "");
                    };
                with (obj || {})
                    (__p +=
                        '<div class="lrn_response_input_wrapper"><div data-lrn-access-review-dest class="lrn_response_input lrn_bordered_mathinput lrn_response_math' +
                        (null == (__t = displayLogic.hasTransparentBackground ? " lrn-formulaV2-transparent-response-input" : "") ? "" : __t) +
                        (null == (__t = displayLogic.hasBoostedFont ? " lrn_response_font_boost" : "") ? "" : __t) +
                        '"'),
                        minWidth && (__p += ' style="min-width: ' + (null == (__t = minWidth) ? "" : __t) + '"'),
                        (__p += ">\x3c!-- Formula Editor component goes here --\x3e</div>"),
                        displayLogic.showInputUi && (__p += '<div class="lrn_input_ui">\x3c!-- Keyboard --\x3e</div>'),
                        (__p += '</div><div class="lrn_correctAnswers lrn_hide"><span>' + (null == (__t = labels.correctAnswers) ? "" : __t) + ':</span><ul class="lrn_correctAnswerList lrn_single_correct_answer"></ul></div>'),
                        displayLogic.showValidationButton &&
                            (__p +=
                                '<button type="button" ' +
                                (null == (__t = displayLogic.readOnly ? 'disabled="disabled"' : "") ? "" : __t) +
                                ' class="lrn_btn lrn_validate"><span>' +
                                (null == (__t = labels.checkAnswer) ? "" : __t) +
                                "</span></button>"),
                        (__p += "");
                return __p;
            };
        },
        62: function (t, e, i) {
            var n, a;
            (n = [i(1)]),
                void 0 ===
                    (a = function (t) {
                        var e = "mathquill-command-id",
                            i = "mathquill-block-id",
                            n = Math.min,
                            a = Math.max;
                        function noop() {}
                        var s = [].slice;
                        function variadic(t) {
                            var e = t.length - 1;
                            return function () {
                                var i = s.call(arguments, 0, e),
                                    n = s.call(arguments, e);
                                return t.apply(this, i.concat([n]));
                            };
                        }
                        var r = variadic(function (t, e) {
                            return variadic(function (i, n) {
                                if (t in i) return i[t].apply(i, e.concat(n));
                            });
                        });
                        function iterator(t) {
                            return variadic(function (e, i) {
                                "function" != typeof e && (e = r(e));
                                return t.call(this, function (t) {
                                    return e.apply(t, [t].concat(i));
                                });
                            });
                        }
                        function bind(t) {
                            var e = s.call(arguments, 1);
                            return function () {
                                return t.apply(this, e);
                            };
                        }
                        function pray(t, e) {
                            if (!e) throw new Error("prayer failed: " + t);
                        }
                        var o = (function (t, e, i) {
                                function isObject(t) {
                                    return "object" == typeof t;
                                }
                                function isFunction(t) {
                                    return "function" == typeof t;
                                }
                                function SuperclassBare() {}
                                return function P(t, i) {
                                    function C() {
                                        var t = new Bare();
                                        return isFunction(t.init) && t.init.apply(t, arguments), t;
                                    }
                                    function Bare() {}
                                    void 0 === i && ((i = t), (t = Object)), (C.Bare = Bare);
                                    var n,
                                        a = (SuperclassBare.prototype = t.prototype),
                                        s = (Bare.prototype = C.prototype = C.p = new SuperclassBare());
                                    return (
                                        (s.constructor = C),
                                        (C.mixin = function (t) {
                                            return (Bare.prototype = C.prototype = P(C, t).prototype), C;
                                        }),
                                        (C.open = function (i) {
                                            if (((n = {}), isFunction(i) ? (n = i.call(C, s, a, C, t)) : isObject(i) && (n = i), isObject(n))) for (var r in n) e.call(n, r) && (s[r] = n[r]);
                                            return isFunction(s.init) || (s.init = t), C;
                                        })(i)
                                    );
                                };
                            })(0, {}.hasOwnProperty),
                            l = (MathQuill.L = -1),
                            c = (MathQuill.R = 1);
                        function prayDirection(t) {
                            pray("a direction was passed", t === l || t === c);
                        }
                        var u = o(t, function (t) {
                                (t.insDirOf = function (t, e) {
                                    return t === l ? this.insertBefore(e.first()) : this.insertAfter(e.last());
                                }),
                                    (t.insAtDirEnd = function (t, e) {
                                        return t === l ? this.prependTo(e) : this.appendTo(e);
                                    });
                            }),
                            h = o(function (t) {
                                (t.parent = 0),
                                    (t[l] = 0),
                                    (t[c] = 0),
                                    (t.init = function (t, e, i) {
                                        (this.parent = t), (this[l] = e), (this[c] = i);
                                    }),
                                    (this.copy = function (t) {
                                        return h(t.parent, t[l], t[c]);
                                    });
                            }),
                            d = o(function (t) {
                                (t[l] = 0), (t[c] = 0), (t.parent = 0);
                                var e = 0;
                                (this.byId = {}),
                                    (t.init = function () {
                                        (this.id = (function uniqueNodeId() {
                                            return (e += 1);
                                        })()),
                                            (d.byId[this.id] = this),
                                            (this.ends = {}),
                                            (this.ends[l] = 0),
                                            (this.ends[c] = 0);
                                    }),
                                    (t.dispose = function () {
                                        delete d.byId[this.id];
                                    }),
                                    (t.toString = function () {
                                        return "{{ MathQuill Node #" + this.id + " }}";
                                    }),
                                    (t.jQ = u()),
                                    (t.jQadd = function (t) {
                                        return (this.jQ = this.jQ.add(t));
                                    }),
                                    (t.jQize = function (t) {
                                        t = u(t || this.html());
                                        function jQadd(t) {
                                            if (t.getAttribute) {
                                                var e = t.getAttribute("mathquill-command-id"),
                                                    i = t.getAttribute("mathquill-block-id");
                                                e && d.byId[e].jQadd(t), i && d.byId[i].jQadd(t);
                                            }
                                            for (t = t.firstChild; t; t = t.nextSibling) jQadd(t);
                                        }
                                        for (var e = 0; e < t.length; e += 1) jQadd(t[e]);
                                        return t;
                                    }),
                                    (t.createDir = function (t, e) {
                                        prayDirection(t);
                                        return this.jQize(), this.jQ.insDirOf(t, e.jQ), (e[t] = this.adopt(e.parent, e[l], e[c])), this;
                                    }),
                                    (t.createLeftOf = function (t) {
                                        return this.createDir(l, t);
                                    }),
                                    (t.selectChildren = function (t, e) {
                                        return y(t, e);
                                    }),
                                    (t.bubble = iterator(function (t) {
                                        for (var e = this; e; e = e.parent) {
                                            if (!1 === t(e)) break;
                                        }
                                        return this;
                                    })),
                                    (t.postOrder = iterator(function (t) {
                                        return (
                                            (function recurse(e) {
                                                e.eachChild(recurse), t(e);
                                            })(this),
                                            this
                                        );
                                    })),
                                    (t.isEmpty = function () {
                                        return 0 === this.ends[l] && 0 === this.ends[c];
                                    }),
                                    (t.children = function () {
                                        return p(this.ends[l], this.ends[c]);
                                    }),
                                    (t.eachChild = function () {
                                        var t = this.children();
                                        return t.each.apply(t, arguments), this;
                                    }),
                                    (t.foldChildren = function (t, e) {
                                        return this.children().fold(t, e);
                                    }),
                                    (t.withDirAdopt = function (t, e, i, n) {
                                        return p(this, this).withDirAdopt(t, e, i, n), this;
                                    }),
                                    (t.adopt = function (t, e, i) {
                                        return p(this, this).adopt(t, e, i), this;
                                    }),
                                    (t.disown = function () {
                                        return p(this, this).disown(), this;
                                    }),
                                    (t.remove = function () {
                                        return this.jQ.remove(), this.postOrder("dispose"), this.disown();
                                    });
                            });
                        function prayWellFormed(t, e, i) {
                            pray("a parent is always present", t),
                                pray("leftward is properly set up", e ? e[c] === i && e.parent === t : t.ends[l] === i),
                                pray("rightward is properly set up", i ? i[l] === e && i.parent === t : t.ends[c] === e);
                        }
                        var p = o(function (t) {
                                (t.init = function (t, e, i) {
                                    if ((void 0 === i && (i = l), prayDirection(i), pray("no half-empty fragments", !t == !e), (this.ends = {}), t)) {
                                        pray("withDir is passed to Fragment", t instanceof d),
                                            pray("oppDir is passed to Fragment", e instanceof d),
                                            pray("withDir and oppDir have the same parent", t.parent === e.parent),
                                            (this.ends[i] = t),
                                            (this.ends[-i] = e);
                                        var n = this.fold([], function (t, e) {
                                            return t.push.apply(t, e.jQ.get()), t;
                                        });
                                        this.jQ = this.jQ.add(n);
                                    }
                                }),
                                    (t.jQ = u()),
                                    (t.withDirAdopt = function (t, e, i, n) {
                                        return t === l ? this.adopt(e, i, n) : this.adopt(e, n, i);
                                    }),
                                    (t.adopt = function (t, e, i) {
                                        prayWellFormed(t, e, i);
                                        this.disowned = !1;
                                        var n = this.ends[l];
                                        if (!n) return this;
                                        var a = this.ends[c];
                                        return (
                                            e || (t.ends[l] = n),
                                            i ? (i[l] = a) : (t.ends[c] = a),
                                            (this.ends[c][c] = i),
                                            this.each(function (i) {
                                                (i[l] = e), (i.parent = t), e && (e[c] = i), (e = i);
                                            }),
                                            this
                                        );
                                    }),
                                    (t.disown = function () {
                                        var t = this.ends[l];
                                        if (!t || this.disowned) return this;
                                        this.disowned = !0;
                                        var e = this.ends[c],
                                            i = t.parent;
                                        return prayWellFormed(i, t[l], t), prayWellFormed(i, e, e[c]), t[l] ? (t[l][c] = e[c]) : (i.ends[l] = e[c]), e[c] ? (e[c][l] = t[l]) : (i.ends[c] = t[l]), this;
                                    }),
                                    (t.remove = function () {
                                        return this.jQ.remove(), this.each("postOrder", "dispose"), this.disown();
                                    }),
                                    (t.each = iterator(function (t) {
                                        var e = this.ends[l];
                                        if (!e) return this;
                                        for (; e !== this.ends[c][c]; e = e[c]) {
                                            if (!1 === t(e)) break;
                                        }
                                        return this;
                                    })),
                                    (t.fold = function (t, e) {
                                        return (
                                            this.each(function (i) {
                                                t = e.call(this, t, i);
                                            }),
                                            t
                                        );
                                    });
                            }),
                            m = {},
                            f = {},
                            b = {},
                            g = o(h, function (t) {
                                (t.init = function (t, e) {
                                    (this.parent = t), (this.options = e);
                                    var i = (this.jQ = this._jQ = u('<span class="mq-cursor">&#8203;</span>'));
                                    (this.blink = function () {
                                        i.toggleClass("mq-blink");
                                    }),
                                        (this.upDownCache = {});
                                }),
                                    (t.show = function () {
                                        return (
                                            (this.jQ = this._jQ.removeClass("mq-blink")),
                                            "intervalId" in this
                                                ? clearInterval(this.intervalId)
                                                : (this[c] ? (this.selection && this.selection.ends[l][l] === this[l] ? this.jQ.insertBefore(this.selection.jQ) : this.jQ.insertBefore(this[c].jQ.first())) : this.jQ.appendTo(this.parent.jQ),
                                                  this.parent.focus()),
                                            (this.intervalId = setInterval(this.blink, 500)),
                                            this
                                        );
                                    }),
                                    (t.hide = function () {
                                        return "intervalId" in this && clearInterval(this.intervalId), delete this.intervalId, this.jQ.detach(), (this.jQ = u()), this;
                                    }),
                                    (t.withDirInsertAt = function (t, e, i, n) {
                                        e !== this.parent && this.parent.blur && this.parent.blur(), (this.parent = e), (this[t] = i), (this[-t] = n);
                                    }),
                                    (t.insDirOf = function (t, e) {
                                        return prayDirection(t), this.withDirInsertAt(t, e.parent, e[t], e), this.parent.jQ.addClass("mq-hasCursor"), this.jQ.insDirOf(t, e.jQ), this;
                                    }),
                                    (t.insLeftOf = function (t) {
                                        return this.insDirOf(l, t);
                                    }),
                                    (t.insRightOf = function (t) {
                                        return this.insDirOf(c, t);
                                    }),
                                    (t.insAtDirEnd = function (t, e) {
                                        return prayDirection(t), this.withDirInsertAt(t, e, 0, e.ends[t]), this.jQ.insAtDirEnd(t, e.jQ), e.focus(), this;
                                    }),
                                    (t.insAtLeftEnd = function (t) {
                                        return this.insAtDirEnd(l, t);
                                    }),
                                    (t.insAtRightEnd = function (t) {
                                        return this.insAtDirEnd(c, t);
                                    }),
                                    (t.jumpUpDown = function (t, e) {
                                        this.upDownCache[t.id] = h.copy(this);
                                        var i = this.upDownCache[e.id];
                                        if (i) i[c] ? this.insLeftOf(i[c]) : this.insAtRightEnd(i.parent);
                                        else {
                                            var n = this.offset().left;
                                            e.seek(n, this);
                                        }
                                    }),
                                    (t.offset = function () {
                                        var t = this.jQ.removeClass("mq-cursor").offset();
                                        return this.jQ.addClass("mq-cursor"), t;
                                    }),
                                    (t.unwrapGramp = function () {
                                        var t = this.parent.parent,
                                            e = t.parent,
                                            i = t[c],
                                            n = t[l];
                                        if (
                                            (t.disown().eachChild(function (a) {
                                                a.isEmpty() ||
                                                    (a
                                                        .children()
                                                        .adopt(e, n, i)
                                                        .each(function (e) {
                                                            e.jQ.insertBefore(t.jQ.first());
                                                        }),
                                                    (n = a.ends[c]));
                                            }),
                                            !this[c])
                                        )
                                            if (this[l]) this[c] = this[l][c];
                                            else
                                                for (; !this[c]; ) {
                                                    if (((this.parent = this.parent[c]), !this.parent)) {
                                                        (this[c] = t[c]), (this.parent = e);
                                                        break;
                                                    }
                                                    this[c] = this.parent.ends[l];
                                                }
                                        this[c] ? this.insLeftOf(this[c]) : this.insAtRightEnd(e), t.jQ.remove(), t[l].siblingDeleted && t[l].siblingDeleted(this.options, c), t[c].siblingDeleted && t[c].siblingDeleted(this.options, l);
                                    }),
                                    (t.startSelection = function () {
                                        for (var t = (this.anticursor = h.copy(this)), e = (t.ancestors = {}), i = t; i.parent; i = i.parent) e[i.parent.id] = i;
                                    }),
                                    (t.endSelection = function () {
                                        delete this.anticursor;
                                    }),
                                    (t.select = function () {
                                        var t = this.anticursor;
                                        if (this[l] === t[l] && this.parent === t.parent) return !1;
                                        for (var e = this; e.parent; e = e.parent)
                                            if (e.parent.id in t.ancestors) {
                                                var i = e.parent;
                                                break;
                                            }
                                        pray("cursor and anticursor in the same tree", i);
                                        var n,
                                            a,
                                            s = t.ancestors[i.id],
                                            r = c;
                                        if (e[l] !== s)
                                            for (var o = e; o; o = o[c])
                                                if (o[c] === s[c]) {
                                                    (r = l), (n = e), (a = s);
                                                    break;
                                                }
                                        return (
                                            r === c && ((n = s), (a = e)),
                                            n instanceof h && (n = n[c]),
                                            a instanceof h && (a = a[l]),
                                            (this.hide().selection = i.selectChildren(n, a)),
                                            this.insDirOf(r, this.selection.ends[r]),
                                            this.selectionChanged(),
                                            !0
                                        );
                                    }),
                                    (t.clearSelection = function () {
                                        return this.selection && (this.selection.clear(), delete this.selection, this.selectionChanged()), this;
                                    }),
                                    (t.deleteSelection = function () {
                                        this.selection && ((this[l] = this.selection.ends[l][l]), (this[c] = this.selection.ends[c][c]), this.selection.remove(), this.selectionChanged(), delete this.selection);
                                    }),
                                    (t.replaceSelection = function () {
                                        var t = this.selection;
                                        return t && ((this[l] = t.ends[l][l]), (this[c] = t.ends[c][c]), delete this.selection), t;
                                    }),
                                    (t.depth = function () {
                                        for (var t = this, e = 0; (t = t.parent); ) e += t instanceof N ? 1 : 0;
                                        return e;
                                    }),
                                    (t.isTooDeep = function (t) {
                                        if (void 0 !== this.options.maxDepth) return this.depth() + (t || 0) > this.options.maxDepth;
                                    });
                            }),
                            y = o(p, function (t, e) {
                                (t.init = function () {
                                    e.init.apply(this, arguments), (this.jQ = this.jQ.wrapAll('<span class="mq-selection"></span>').parent());
                                }),
                                    (t.adopt = function () {
                                        return this.jQ.replaceWith((this.jQ = this.jQ.children())), e.adopt.apply(this, arguments);
                                    }),
                                    (t.clear = function () {
                                        return this.jQ.replaceWith(this.jQ[0].childNodes), this;
                                    }),
                                    (t.join = function (t) {
                                        return this.fold("", function (e, i) {
                                            return e + i[t]();
                                        });
                                    });
                            }),
                            v = o(function (t) {
                                (t.init = function (t, e, i) {
                                    (this.API = t), (this.root = e), (this.container = i), (t.__controller = e.controller = this), (this.cursor = e.cursor = g(e, t.__options)), this.setUnitalicizedTextCmds();
                                }),
                                    (t.setUnitalicizedTextCmds = function () {
                                        G = {};
                                        var t = this.API.__options.unItalicizedTextCmds || [];
                                        if (t instanceof Array) {
                                            for (var e = 0; e < t.length; e += 1) G[t[e]] = 1;
                                            this.API.__options.unItalicizedTextCmds = G;
                                        } else !t || t instanceof Array || (G = this.API.__options.unItalicizedTextCmds);
                                    }),
                                    (t.handle = function (t, e) {
                                        var i = this.API.__options.handlers;
                                        i && i[t] && (e === l || e === c ? i[t](e, this.API) : i[t](this.API));
                                    });
                                var e = [];
                                (this.onNotify = function (t) {
                                    e.push(t);
                                }),
                                    (t.notify = function () {
                                        for (var t = 0; t < e.length; t += 1) e[t].apply(this.cursor, arguments);
                                        return this;
                                    });
                            });
                        function MathQuill(t) {
                            if (!t || !t.nodeType) return null;
                            var e = u(t).children(".mq-root-block").attr(i);
                            return e ? d.byId[e].controller.API : null;
                        }
                        function APIFnFor(t) {
                            function APIFn(e, i) {
                                var n = MathQuill(e);
                                return n instanceof t || !e || !e.nodeType ? n : t(u(e), i);
                            }
                            return (APIFn.prototype = t.prototype), APIFn;
                        }
                        var w = o(),
                            x = {};
                        MathQuill.__options = w.p;
                        var E = o(function (n) {
                            (n.init = function () {
                                throw "wtf don't call me, I'm 'abstract'";
                            }),
                                (n.initRoot = function (n, a, s) {
                                    (this.__options = w()), this.config(s);
                                    var r = v(this, n, a);
                                    r.createTextarea();
                                    var o = a.contents().detach();
                                    (n.jQ = u('<span class="mq-root-block"/>')
                                        .attr(i, n.id)
                                        .toggleClass("mq-disable-italics", !!s && !!s.disableItalics)
                                        .appendTo(a)),
                                        this.latex(o.text()),
                                        (this.revert = function () {
                                            return (
                                                a.find("[" + e + "]").each(function () {
                                                    var t = d.byId[u(this).attr(e)];
                                                    t && t.remove();
                                                }),
                                                a.find("[" + i + "]").each(function () {
                                                    var t = d.byId[u(this).attr(i)];
                                                    t && t.dispose();
                                                }),
                                                a.empty().unbind(".mathquill").removeClass("mq-editable-field mq-math-mode mq-text-mode").append(o),
                                                t.each(d.byId, function (t, e) {
                                                    (e.jQ && e.jQ.length && 3 !== e.jQ[0].nodeType) || e.dispose();
                                                }),
                                                t.each(r, function (t, e) {
                                                    e instanceof u && e.off(), delete r[t];
                                                }),
                                                a
                                            );
                                        });
                                }),
                                (n.config = MathQuill.config = function (t) {
                                    for (var e in t)
                                        if (t.hasOwnProperty(e)) {
                                            var i = t[e],
                                                n = x[e];
                                            this.__options[e] = n ? n(i) : i;
                                        }
                                    return this;
                                }),
                                (n.el = function () {
                                    return this.__controller.container[0];
                                }),
                                (n.text = function () {
                                    return this.__controller.exportText();
                                }),
                                (n.latex = function (t) {
                                    return arguments.length > 0 ? (this.__controller.renderLatexMath(t), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex();
                                }),
                                (n.html = function () {
                                    return this.__controller.root.jQ
                                        .html()
                                        .replace(/ mathquill-(?:command|block)-id="?\d+"?/g, "")
                                        .replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i, "")
                                        .replace(/ mq-hasCursor|mq-hasCursor ?/, "")
                                        .replace(/ class=(""|(?= |>))/g, "");
                                }),
                                (n.reflow = function () {
                                    return this.__controller.root.postOrder("reflow"), this;
                                });
                        });
                        (MathQuill.prototype = E.prototype),
                            (MathQuill.StaticMath = APIFnFor(
                                o(E, function (t, e) {
                                    (t.init = function (t) {
                                        this.initRoot(N(), t.addClass("mq-math-mode")), this.__controller.delegateMouseEvents(), this.__controller.staticMathTextareaEvents();
                                    }),
                                        (t.latex = function () {
                                            var t = e.latex.apply(this, arguments);
                                            return arguments.length > 0 && this.__controller.root.postOrder("registerInnerField", (this.innerFields = [])), t;
                                        });
                                })
                            ));
                        var k = (MathQuill.EditableField = o(E, function (t) {
                            (t.initRootAndEvents = function (t, e, i) {
                                this.initRoot(t, e, i), (this.__controller.editable = !0), this.__controller.delegateMouseEvents(), this.__controller.editablesTextareaEvents();
                            }),
                                (t.focus = function () {
                                    return this.__controller.textarea.focus(), this;
                                }),
                                (t.blur = function () {
                                    return this.__controller.textarea.blur(), this;
                                }),
                                (t.write = function (t) {
                                    return this.__controller.writeLatex(t), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this;
                                }),
                                (t.clear = function () {
                                    return this.select().__controller.backspace(), this;
                                }),
                                (t.cmd = function (t) {
                                    var e = this.__controller.notify(),
                                        i = e.cursor;
                                    /^\\[a-z]+$/i.test(t) && !i.isTooDeep() ? ((t = t.slice(1)), (t = (m[t] || Dt[t] || Ot)(t)), i.selection && t.replaces(i.replaceSelection()), t.createLeftOf(i.show())) : i.parent.write(i, t);
                                    return e.blurred && i.hide().parent.blur(), this;
                                }),
                                (t.select = function () {
                                    var t = this.__controller;
                                    for (t.notify("move").cursor.insAtRightEnd(t.root); t.cursor[l]; ) t.selectLeft();
                                    return this;
                                }),
                                (t.clearSelection = function () {
                                    return this.__controller.cursor.clearSelection(), this;
                                }),
                                (t.moveToDirEnd = function (t) {
                                    return this.__controller.notify("move").cursor.insAtDirEnd(t, this.__controller.root), this;
                                }),
                                (t.moveToLeftEnd = function () {
                                    return this.moveToDirEnd(l);
                                }),
                                (t.moveToRightEnd = function () {
                                    return this.moveToDirEnd(c);
                                }),
                                (t.keystroke = function (t) {
                                    t = t.replace(/^\s+|\s+$/g, "").split(/\s+/);
                                    for (var e = 0; e < t.length; e += 1) this.__controller.keystroke(t[e], { preventDefault: noop });
                                    return this;
                                }),
                                (t.typedText = function (t) {
                                    for (var e = 0; e < t.length; e += 1) this.__controller.typedText(t.charAt(e));
                                    return this;
                                });
                        }));
                        function RootBlockMixin(t) {
                            for (var e = "moveOutOf deleteOutOf selectOutOf upOutOf downOutOf reflow".split(" "), i = 0; i < e.length; i += 1)
                                !(function (e) {
                                    t[e] = function (t) {
                                        this.controller.handle(e, t);
                                    };
                                })(e[i]);
                        }
                        var T,
                            q = o(function (t, e, i) {
                                function parseError(t, e) {
                                    throw "Parse Error: " + e + " at " + (t = t ? "'" + t + "'" : "EOF");
                                }
                                (t.init = function (t) {
                                    this._ = t;
                                }),
                                    (t.parse = function (t) {
                                        return this.skip(s)._(
                                            "" + t,
                                            function success(t, e) {
                                                return e;
                                            },
                                            parseError
                                        );
                                    }),
                                    (t.or = function (t) {
                                        pray("or is passed a parser", t instanceof i);
                                        var e = this;
                                        return i(function (i, n, a) {
                                            return e._(i, n, function failure(e) {
                                                return t._(i, n, a);
                                            });
                                        });
                                    }),
                                    (t.then = function (t) {
                                        var e = this;
                                        return i(function (n, a, s) {
                                            return e._(
                                                n,
                                                function success(e, n) {
                                                    var r = t instanceof i ? t : t(n);
                                                    return pray("a parser is returned", r instanceof i), r._(e, a, s);
                                                },
                                                s
                                            );
                                        });
                                    }),
                                    (t.many = function () {
                                        var t = this;
                                        return i(function (e, i, n) {
                                            for (var a = []; t._(e, success, failure); );
                                            return i(e, a);
                                            function success(t, i) {
                                                return (e = t), a.push(i), !0;
                                            }
                                            function failure() {
                                                return !1;
                                            }
                                        });
                                    }),
                                    (t.times = function (t, e) {
                                        arguments.length < 2 && (e = t);
                                        var n = this;
                                        return i(function (i, a, s) {
                                            for (var r, o = [], l = !0, c = 0; c < t; c += 1) if (!(l = n._(i, success, firstFailure))) return s(i, r);
                                            for (; c < e && l; c += 1) l = n._(i, success, secondFailure);
                                            return a(i, o);
                                            function success(t, e) {
                                                return o.push(e), (i = t), !0;
                                            }
                                            function firstFailure(t, e) {
                                                return (r = e), (i = t), !1;
                                            }
                                            function secondFailure(t, e) {
                                                return !1;
                                            }
                                        });
                                    }),
                                    (t.result = function (t) {
                                        return this.then(a(t));
                                    }),
                                    (t.atMost = function (t) {
                                        return this.times(0, t);
                                    }),
                                    (t.atLeast = function (t) {
                                        var e = this;
                                        return e.times(t).then(function (t) {
                                            return e.many().map(function (e) {
                                                return t.concat(e);
                                            });
                                        });
                                    }),
                                    (t.map = function (t) {
                                        return this.then(function (e) {
                                            return a(t(e));
                                        });
                                    }),
                                    (t.skip = function (t) {
                                        return this.then(function (e) {
                                            return t.result(e);
                                        });
                                    });
                                this.string = function (t) {
                                    var e = t.length,
                                        n = "expected '" + t + "'";
                                    return i(function (i, a, s) {
                                        var r = i.slice(0, e);
                                        return r === t ? a(i.slice(e), r) : s(i, n);
                                    });
                                };
                                var n = (this.regex = function (t) {
                                        pray("regexp parser is anchored", "^" === t.toString().charAt(1));
                                        var e = "expected " + t;
                                        return i(function (i, n, a) {
                                            var s = t.exec(i);
                                            if (s) {
                                                var r = s[0];
                                                return n(i.slice(r.length), r);
                                            }
                                            return a(i, e);
                                        });
                                    }),
                                    a = (i.succeed = function (t) {
                                        return i(function (e, i) {
                                            return i(e, t);
                                        });
                                    }),
                                    s =
                                        ((i.fail = function (t) {
                                            return i(function (e, i, n) {
                                                return n(e, t);
                                            });
                                        }),
                                        (i.letter = n(/^[a-z]/i)),
                                        (i.letters = n(/^[a-z]*/i)),
                                        (i.digit = n(/^[0-9]/)),
                                        (i.digits = n(/^[0-9]*/)),
                                        (i.whitespace = n(/^\s+/)),
                                        (i.optWhitespace = n(/^\s*/)),
                                        (i.any = i(function (t, e, i) {
                                            return t ? e(t.slice(1), t.charAt(0)) : i(t, "expected any character");
                                        })),
                                        (i.all = i(function (t, e, i) {
                                            return e("", t);
                                        })),
                                        (i.eof = i(function (t, e, i) {
                                            return t ? i(t, "expected EOF") : e(t, t);
                                        })));
                            }),
                            S =
                                ((T = {
                                    8: "Backspace",
                                    9: "Tab",
                                    10: "Enter",
                                    13: "Enter",
                                    16: "Shift",
                                    17: "Control",
                                    18: "Alt",
                                    20: "CapsLock",
                                    27: "Esc",
                                    32: "Spacebar",
                                    33: "PageUp",
                                    34: "PageDown",
                                    35: "End",
                                    36: "Home",
                                    37: "Left",
                                    38: "Up",
                                    39: "Right",
                                    40: "Down",
                                    45: "Insert",
                                    46: "Del",
                                    144: "NumLock",
                                }),
                                function saneKeyboardEvents(e, i) {
                                    var n,
                                        a = null,
                                        s = null,
                                        r = t(e),
                                        o = t(i.container || r),
                                        l = noop;
                                    function checkTextareaFor(t) {
                                        (l = t), clearTimeout(n), (n = setTimeout(t));
                                    }
                                    o.bind("keydown keypress input keyup focusout paste", function () {
                                        l();
                                    });
                                    var c = !1;
                                    function handleKey() {
                                        i.keystroke(
                                            (function stringify(t) {
                                                var e,
                                                    i = t.which || t.keyCode,
                                                    n = T[i],
                                                    a = [];
                                                return (
                                                    t.ctrlKey && a.push("Ctrl"),
                                                    t.originalEvent && t.originalEvent.metaKey && a.push("Meta"),
                                                    t.altKey && a.push("Alt"),
                                                    t.shiftKey && a.push("Shift"),
                                                    (e = n || String.fromCharCode(i)),
                                                    a.length || n ? (a.push(e), a.join("-")) : e
                                                );
                                            })(a),
                                            a
                                        );
                                    }
                                    function typedText() {
                                        if (
                                            !(function hasSelection() {
                                                var t = r[0];
                                                return "selectionStart" in t && t.selectionStart !== t.selectionEnd;
                                            })()
                                        ) {
                                            var t = r.val();
                                            1 === t.length ? (r.val(""), i.typedText(t)) : t && r[0] && r[0].select && r[0].select();
                                        }
                                    }
                                    function pastedText() {
                                        var t = r.val();
                                        r.val(""), t && ((t = (t = t.replace(/\^\{\{response\}\}/g, "^{}")).replace(/\{\{response\}\}/g, "")), i.paste(t));
                                    }
                                    return (
                                        o.bind({
                                            keydown: function onKeydown(t) {
                                                (a = t),
                                                    (s = null),
                                                    c &&
                                                        checkTextareaFor(function () {
                                                            r[0] && r[0].select && r[0].select(), (l = noop), clearTimeout(n);
                                                        }),
                                                    handleKey();
                                            },
                                            keypress: function onKeypress(t) {
                                                a && s && handleKey(), (s = t), checkTextareaFor(typedText);
                                            },
                                            focusout: function onBlur() {
                                                a = s = null;
                                            },
                                            paste: function onPaste(t) {
                                                r.focus(), checkTextareaFor(pastedText);
                                            },
                                        }),
                                        {
                                            select: function select(t) {
                                                l(), (l = noop), clearTimeout(n), r.val(t), t && r[0] && r[0].select && r[0].select(), (c = !!t);
                                            },
                                        }
                                    );
                                });
                        v.open(function (t, e) {
                            t.exportText = function () {
                                return this.root.foldChildren("", function (t, e) {
                                    return t + e.text();
                                });
                            };
                        }),
                            v.open(function (t) {
                                t.focusBlurEvents = function () {
                                    var t,
                                        e = this,
                                        i = e.root,
                                        n = e.cursor;
                                    function windowBlur() {
                                        clearTimeout(t), n.selection && n.selection.jQ.addClass("mq-blur"), blur();
                                    }
                                    function blur() {
                                        n.hide().parent.blur(), e.root && e.root.jQ.removeClass("mq-focused"), u(window).off("blur", windowBlur);
                                    }
                                    e.textarea
                                        .focus(function () {
                                            (e.blurred = !1),
                                                clearTimeout(t),
                                                i.ultimateRoot && i.ultimateRoot.jQ.find(".mq-last-focused").removeClass("mq-last-focused"),
                                                e.container.children(".mq-root-block").addClass("mq-focused mq-last-focused"),
                                                n.parent || n.insAtRightEnd(i),
                                                n.selection ? (n.selection.jQ.removeClass("mq-blur"), e.selectionChanged()) : n.show(),
                                                e.setUnitalicizedTextCmds();
                                        })
                                        .blur(function () {
                                            (e.blurred = !0),
                                                (t = setTimeout(function () {
                                                    i.postOrder("intentionalBlur"), n.clearSelection(), blur();
                                                })),
                                                u(window).on("blur", windowBlur);
                                        }),
                                        (e.blurred = !0),
                                        n.hide().parent.blur();
                                };
                            }),
                            v.open(function (t) {
                                t.keystroke = function (t, e) {
                                    this.cursor.parent.keystroke(t, e, this);
                                };
                            }),
                            d.open(function (t) {
                                (t.keystroke = function (t, e, i) {
                                    var n = i.cursor;
                                    switch (t) {
                                        case "Ctrl-Shift-Backspace":
                                        case "Ctrl-Backspace":
                                            for (; n[l] || n.selection; ) i.backspace();
                                            break;
                                        case "Shift-Backspace":
                                        case "Backspace":
                                            i.backspace();
                                            break;
                                        case "Esc":
                                            return;
                                        case "Shift-Esc":
                                            return void i.escapeDir(l, t, e);
                                        case "End":
                                            i.notify("move").cursor.insAtRightEnd(n.parent);
                                            break;
                                        case "Ctrl-End":
                                            i.notify("move").cursor.insAtRightEnd(i.root);
                                            break;
                                        case "Shift-End":
                                            for (; n[c]; ) i.selectRight();
                                            break;
                                        case "Ctrl-Shift-End":
                                            for (; n[c] || n.parent !== i.root; ) i.selectRight();
                                            break;
                                        case "Home":
                                            i.notify("move").cursor.insAtLeftEnd(n.parent);
                                            break;
                                        case "Ctrl-Home":
                                            i.notify("move").cursor.insAtLeftEnd(i.root);
                                            break;
                                        case "Shift-Home":
                                            for (; n[l]; ) i.selectLeft();
                                            break;
                                        case "Ctrl-Shift-Home":
                                            for (; n[l] || n.parent !== i.root; ) i.selectLeft();
                                            break;
                                        case "Left":
                                            i.moveLeft();
                                            break;
                                        case "Shift-Left":
                                            i.selectLeft();
                                            break;
                                        case "Ctrl-Left":
                                            break;
                                        case "Right":
                                            i.moveRight();
                                            break;
                                        case "Shift-Right":
                                            i.selectRight();
                                            break;
                                        case "Ctrl-Right":
                                            break;
                                        case "Up":
                                            i.moveUp();
                                            break;
                                        case "Down":
                                            i.moveDown();
                                            break;
                                        case "Shift-Up":
                                            if (n[l]) for (; n[l]; ) i.selectLeft();
                                            else i.selectLeft();
                                        case "Shift-Down":
                                            if (n[c]) for (; n[c]; ) i.selectRight();
                                            else i.selectRight();
                                        case "Ctrl-Up":
                                        case "Ctrl-Down":
                                            break;
                                        case "Ctrl-Shift-Del":
                                        case "Ctrl-Del":
                                            for (; n[c] || n.selection; ) i.deleteForward();
                                            break;
                                        case "Shift-Del":
                                        case "Del":
                                            i.deleteForward();
                                            break;
                                        case "Meta-A":
                                        case "Ctrl-A":
                                            for (i.notify("move").cursor.insAtRightEnd(i.root); n[l]; ) i.selectLeft();
                                            break;
                                        default:
                                            return;
                                    }
                                    e.preventDefault(), i.scrollHoriz();
                                }),
                                    (t.moveOutOf = t.moveTowards = t.deleteOutOf = t.deleteTowards = t.unselectInto = t.selectOutOf = t.selectTowards = function () {
                                        pray("overridden or never called on this node");
                                    });
                            }),
                            v.open(function (t) {
                                function moveUpDown(t, e) {
                                    var i = t.notify("upDown").cursor,
                                        n = e + "Into",
                                        a = e + "OutOf";
                                    return (
                                        i[c][n]
                                            ? i.insAtLeftEnd(i[c][n])
                                            : i[l][n]
                                            ? i.insAtRightEnd(i[l][n])
                                            : i.parent.bubble(function (t) {
                                                  var e = t[a];
                                                  if (e && ("function" == typeof e && (e = t[a](i)), e instanceof d && i.jumpUpDown(t, e), !0 !== e)) return !1;
                                              }),
                                        t
                                    );
                                }
                                this.onNotify(function (t) {
                                    ("move" !== t && "upDown" !== t) || this.show().clearSelection();
                                }),
                                    (t.escapeDir = function (t, e, i) {
                                        prayDirection(t);
                                        var n = this.cursor;
                                        if ((n.parent !== this.root && i.preventDefault(), n.parent !== this.root)) return n.parent.moveOutOf(t, n), this.notify("move");
                                    }),
                                    (x.leftRightIntoCmdGoes = function (t) {
                                        if (t && "up" !== t && "down" !== t) throw '"up" or "down" required for leftRightIntoCmdGoes option, got "' + t + '"';
                                        return t;
                                    }),
                                    (t.moveDir = function (t) {
                                        prayDirection(t);
                                        var e = this.cursor,
                                            i = e.options.leftRightIntoCmdGoes;
                                        return e.selection ? e.insDirOf(t, e.selection.ends[t]) : e[t] ? e[t].moveTowards(t, e, i) : e.parent.moveOutOf(t, e, i), this.notify("move");
                                    }),
                                    (t.moveLeft = function () {
                                        return this.moveDir(l);
                                    }),
                                    (t.moveRight = function () {
                                        return this.moveDir(c);
                                    }),
                                    (t.moveUp = function () {
                                        return moveUpDown(this, "up");
                                    }),
                                    (t.moveDown = function () {
                                        return moveUpDown(this, "down");
                                    }),
                                    this.onNotify(function (t) {
                                        "upDown" !== t && (this.upDownCache = {});
                                    }),
                                    this.onNotify(function (t) {
                                        "edit" === t && this.show().deleteSelection();
                                    }),
                                    (t.deleteDir = function (t) {
                                        prayDirection(t);
                                        var e = this.cursor,
                                            i = e.selection;
                                        return (
                                            this.notify("edit"),
                                            i || (e[t] ? e[t].deleteTowards(t, e) : e.parent.deleteOutOf(t, e)),
                                            e[l].siblingDeleted && e[l].siblingDeleted(e.options, c),
                                            e[c].siblingDeleted && e[c].siblingDeleted(e.options, l),
                                            e.parent.bubble("reflow"),
                                            this
                                        );
                                    }),
                                    (t.backspace = function () {
                                        return this.deleteDir(l);
                                    }),
                                    (t.deleteForward = function () {
                                        return this.deleteDir(c);
                                    }),
                                    this.onNotify(function (t) {
                                        "select" !== t && this.endSelection();
                                    }),
                                    (t.selectDir = function (t) {
                                        var e = this.notify("select").cursor,
                                            i = e.selection;
                                        prayDirection(t), e.anticursor || e.startSelection();
                                        var n = e[t];
                                        n ? (i && i.ends[t] === n && e.anticursor[-t] !== n ? n.unselectInto(t, e) : n.selectTowards(t, e)) : e.parent.selectOutOf(t, e), e.clearSelection(), e.select() || e.show();
                                    }),
                                    (t.selectLeft = function () {
                                        return this.selectDir(l);
                                    }),
                                    (t.selectRight = function () {
                                        return this.selectDir(c);
                                    });
                            });
                        var O = (function () {
                            function joinBlocks(t) {
                                for (var e = t[0] || N(), i = 1; i < t.length; i += 1) t[i].children().adopt(e, e.ends[c], 0);
                                return e;
                            }
                            var t = q.string,
                                e = q.regex,
                                i = q.letter,
                                n = q.any,
                                a = q.optWhitespace,
                                s = q.succeed,
                                r = q.fail,
                                o = i.map(function (t) {
                                    return W(t);
                                }),
                                l = e(/^[^${}\\_^]/).map(function (t) {
                                    return L(t);
                                }),
                                u = e(/^\\not\\[a-z]+/).then(function (t) {
                                    return (b[t] && b[t]().parser()) || r("unknown compound command: " + t);
                                }),
                                h = e(/^[^\\a-eg-zA-Z]/)
                                    .or(
                                        t("\\").then(
                                            e(/^[a-z]+/i)
                                                .or(e(/^\s+/).result(" "))
                                                .or(n)
                                        )
                                    )
                                    .then(function (t) {
                                        var e = m[t];
                                        return e ? e(t).parser() : r("unknown command: \\" + t);
                                    }),
                                d = t("\\")
                                    .then(e(/^(?!end\b)\w+/))
                                    .then(function (t) {
                                        return m[t] ? r("recognised command: \\" + t) : Ot(t).parser();
                                    }),
                                p = u.or(h).or(o).or(l).or(d),
                                f = t("{")
                                    .then(function () {
                                        return y;
                                    })
                                    .skip(t("}")),
                                g = a.then(
                                    f.or(
                                        p.map(function commandToBlock(t) {
                                            var e = N();
                                            return t.adopt(e, 0, 0), e;
                                        })
                                    )
                                ),
                                y = g.many().map(joinBlocks).skip(a),
                                v = t("[")
                                    .then(
                                        g
                                            .then(function (t) {
                                                return "]" !== t.join("latex") ? s(t) : r();
                                            })
                                            .many()
                                            .map(joinBlocks)
                                            .skip(a)
                                    )
                                    .skip(t("]")),
                                w = y;
                            return (w.block = g), (w.optBlock = v), w;
                        })();
                        v.open(function (t, e) {
                            (t.exportLatex = function () {
                                return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/gi, "$1");
                            }),
                                (x.maxDepth = function (t) {
                                    return "number" == typeof t ? t : void 0;
                                }),
                                (t.writeLatex = function (t) {
                                    var e = this.notify("edit").cursor,
                                        i = q.all,
                                        n = q.eof;
                                    this.setUnitalicizedTextCmds();
                                    var a = O.skip(n).or(i.result(!1)).parse(t);
                                    a &&
                                        !a.isEmpty() &&
                                        a.prepareInsertionAt(e) &&
                                        (a.children().adopt(e.parent, e[l], e[c]),
                                        a.jQize().insertBefore(e.jQ),
                                        (e[l] = a.ends[c]),
                                        a.finalizeInsert(e.options, e),
                                        a.ends[c][c].siblingCreated && a.ends[c][c].siblingCreated(e.options, l),
                                        a.ends[l][l].siblingCreated && a.ends[l][l].siblingCreated(e.options, c),
                                        e.parent.bubble("reflow"));
                                    return this;
                                }),
                                (t.renderLatexMath = function (t) {
                                    var e = this.root,
                                        i = this.cursor,
                                        n = e.jQ,
                                        a = q.all,
                                        s = q.eof,
                                        r = O.skip(s).or(a.result(!1)).parse(t);
                                    if ((e.eachChild("postOrder", "dispose"), (e.ends[l] = e.ends[c] = 0), r && r.prepareInsertionAt(i))) {
                                        r.children().adopt(e, 0, 0);
                                        var o = r.join("html");
                                        n.html(o), e.jQize(n.children()), e.finalizeInsert(i.options);
                                    } else n.empty();
                                    delete i.selection, i.insAtRightEnd(e);
                                }),
                                (t.renderLatexText = function (t) {
                                    var e = this.root,
                                        i = this.cursor;
                                    e.jQ.children().slice(1).remove(), e.eachChild("postOrder", "dispose"), (e.ends[l] = e.ends[c] = 0), delete i.selection, i.show().insAtRightEnd(e);
                                    var n = q.regex,
                                        a = q.string,
                                        s = q.eof,
                                        r = q.all,
                                        o = a("$")
                                            .then(O)
                                            .skip(a("$").or(s))
                                            .map(function (t) {
                                                var e = F(i);
                                                e.createBlocks();
                                                var n = e.ends[l];
                                                return t.children().adopt(n, 0, 0), e;
                                            }),
                                        u = a("\\$").result("$").or(n(/^[^$]/)).map(L),
                                        h = o.or(u).many().skip(s).or(r.result(!1)).parse(t);
                                    if (h) {
                                        for (var d = 0; d < h.length; d += 1) h[d].adopt(e, e.ends[c], 0);
                                        e.jQize().appendTo(e.jQ), e.finalizeInsert(i.options);
                                    }
                                });
                        }),
                            v.open(function (t) {
                                t.delegateMouseEvents = function () {
                                    var t = this.root.jQ;
                                    this.container.bind("mousedown.mathquill", function (e) {
                                        var n = u(e.target).closest(".mq-root-block"),
                                            a = d.byId[n.attr(i) || t.attr(i)].controller,
                                            s = a.cursor,
                                            r = (s.blink, a.textareaSpan),
                                            o = a.textarea;
                                        function mousemove(t) {
                                            s.anticursor || s.startSelection(), a.seek(u(t.target), t.pageX, t.pageY).cursor.select(), t.target && u(t.target.ownerDocument).unbind("mousemove", docmousemove);
                                        }
                                        function docmousemove(t) {
                                            return delete t.target, mousemove(t);
                                        }
                                        if (0 === r.parent().length) return !1;
                                        a.blurred && (a.editable || n.prepend(r), document.body.focus(), o.focus()),
                                            e.preventDefault(),
                                            (e.target.unselectable = !0),
                                            s.show(),
                                            a.seek(u(e.target), e.pageX, e.pageY).cursor.startSelection(),
                                            n.mousemove(mousemove),
                                            u(e.target.ownerDocument)
                                                .mousemove(docmousemove)
                                                .mouseup(function mouseup(t) {
                                                    s.selection || a.editable || r.detach(), n.unbind("mousemove", mousemove), u(t.target.ownerDocument).unbind("mousemove", docmousemove).unbind("mouseup", mouseup);
                                                });
                                    });
                                };
                            }),
                            v.open(function (t) {
                                t.seek = function (t, n, a) {
                                    var s = this.notify("select").cursor;
                                    if (t) {
                                        var r = t.attr(i) || t.attr(e);
                                        if (!r) {
                                            var o = t.parent();
                                            r = o.attr(i) || o.attr(e);
                                        }
                                    }
                                    var l = r ? d.byId[r] : this.root;
                                    return pray("nodeId is the id of some Node that exists", l), s.clearSelection().show(), l.seek(n, s), this.scrollHoriz(), this;
                                };
                            }),
                            v.open(function (t) {
                                t.scrollHoriz = function () {
                                    var t = this.cursor,
                                        e = t.selection,
                                        i = this.root.jQ[0].getBoundingClientRect();
                                    if (e) {
                                        var n = e.jQ[0].getBoundingClientRect(),
                                            a = n.left - (i.left + 20),
                                            s = n.right - (i.right - 20);
                                        if (e.ends[l] === t[c])
                                            if (a < 0) o = a;
                                            else {
                                                if (!(s > 0)) return;
                                                if (n.left - s < i.left + 20) o = a;
                                                else o = s;
                                            }
                                        else if (s > 0) o = s;
                                        else {
                                            if (!(a < 0)) return;
                                            if (n.right - a > i.right - 20) o = s;
                                            else o = a;
                                        }
                                    } else {
                                        var r = t.jQ[0].getBoundingClientRect().left;
                                        if (r > i.right - 20) var o = r - (i.right - 20);
                                        else {
                                            if (!(r < i.left + 20)) return;
                                            var o = r - (i.left + 20);
                                        }
                                    }
                                    this.root.jQ.stop().animate({ scrollLeft: "+=" + o }, 100);
                                };
                            }),
                            v.open(function (e) {
                                (w.p.substituteTextarea = function () {
                                    return u("<textarea>")[0];
                                }),
                                    (e.createTextarea = function () {
                                        var t = (this.textareaSpan = u('<span class="mq-textarea"></span>')),
                                            e = this.API.__options.substituteTextarea();
                                        if (!e.nodeType) throw "substituteTextarea() must return a DOM element, got " + e;
                                        e = this.textarea = u(e).appendTo(t);
                                        var i = this;
                                        (i.cursor.selectionChanged = function () {
                                            i.selectionChanged();
                                        }),
                                            i.container.bind("copy", function () {
                                                i.setTextareaSelection();
                                            });
                                    }),
                                    (e.selectionChanged = function () {
                                        var t = this;
                                        ot(t.container[0]),
                                            void 0 === t.textareaSelectionTimeout &&
                                                (t.textareaSelectionTimeout = setTimeout(function () {
                                                    t.setTextareaSelection();
                                                }));
                                    }),
                                    (e.setTextareaSelection = function () {
                                        this.textareaSelectionTimeout = void 0;
                                        var t = "";
                                        this.cursor.selection && ((t = this.cursor.selection.join("latex")), this.API.__options.statelessClipboard && (t = "$" + t + "$")), this.selectFn(t);
                                    }),
                                    (e.staticMathTextareaEvents = function () {
                                        var e = this,
                                            i = (e.root, e.cursor),
                                            n = e.textarea,
                                            a = e.textareaSpan;
                                        function detach() {
                                            a.detach(), (e.blurred = !0);
                                        }
                                        this.container.prepend(t('<span class="mq-selectable">').text("$" + e.exportLatex() + "$")),
                                            (e.blurred = !0),
                                            n
                                                .bind("cut paste", !1)
                                                .focus(function () {
                                                    e.blurred = !1;
                                                })
                                                .blur(function () {
                                                    i.selection && i.selection.clear(), setTimeout(detach);
                                                }),
                                            (e.selectFn = function (t) {
                                                n.val(t), t && n.select();
                                            });
                                    }),
                                    (e.editablesTextareaEvents = function () {
                                        var t = this,
                                            e = (t.root, t.cursor),
                                            i = t.textarea,
                                            n = t.textareaSpan,
                                            a = S(i, this);
                                        (this.selectFn = function (t) {
                                            a.select(t);
                                        }),
                                            this.container.prepend(n).on("cut", function (i) {
                                                e.selection &&
                                                    setTimeout(function () {
                                                        t.notify("edit"), e.parent.bubble("reflow");
                                                    });
                                            }),
                                            this.focusBlurEvents();
                                    }),
                                    (e.typedText = function (t) {
                                        if ("\n" === t) return this.handle("enter");
                                        var e = this.notify().cursor;
                                        e.parent.write(e, t), this.scrollHoriz();
                                    }),
                                    (e.paste = function (t) {
                                        this.API.__options.statelessClipboard && (t = "$" === t.slice(0, 1) && "$" === t.slice(-1) ? t.slice(1, -1) : "\\text{" + t + "}"), this.writeLatex(t).cursor.show();
                                    });
                            });
                        var A = o(d, function (t, e) {
                                (t.finalizeInsert = function (t, e) {
                                    this.postOrder("finalizeTree", t),
                                        this.postOrder("contactWeld", e),
                                        this.postOrder("blur"),
                                        this.postOrder("reflow"),
                                        this[c].siblingCreated && this[c].siblingCreated(t, l),
                                        this[l].siblingCreated && this[l].siblingCreated(t, c),
                                        this.bubble("reflow");
                                }),
                                    (t.prepareInsertionAt = function (t) {
                                        var e = t.options.maxDepth;
                                        if (void 0 !== e) {
                                            var i = t.depth();
                                            if (i > e) return !1;
                                            this.removeNodesDeeperThan(e - i);
                                        }
                                        return !0;
                                    }),
                                    (t.removeNodesDeeperThan = function (t) {
                                        for (var e, i = 0, n = [[this, i]]; n.length; )
                                            (e = n.shift())[0].children().each(function (a) {
                                                var s = a instanceof N ? 1 : 0;
                                                (i = e[1] + s) <= t ? n.push([a, i]) : (s ? a.children() : a).remove();
                                            });
                                    });
                            }),
                            D = o(A, function (t, e) {
                                (t.init = function (t, i, n) {
                                    e.init.call(this), this.ctrlSeq || (this.ctrlSeq = t), i && (this.htmlTemplate = i), n && (this.textTemplate = n);
                                }),
                                    (t.replaces = function (t) {
                                        t.disown(), (this.replacedFragment = t);
                                    }),
                                    (t.isEmpty = function () {
                                        return this.foldChildren(!0, function (t, e) {
                                            return t && e.isEmpty();
                                        });
                                    }),
                                    (t.parser = function () {
                                        var t = O.block,
                                            e = this;
                                        return t.times(e.numBlocks()).map(function (t) {
                                            e.blocks = t;
                                            for (var i = 0; i < t.length; i += 1) t[i].adopt(e, e.ends[c], 0);
                                            return e;
                                        });
                                    }),
                                    (t.createLeftOf = function (t) {
                                        var i = this.replacedFragment;
                                        this.createBlocks(),
                                            e.createLeftOf.call(this, t),
                                            i && (i.adopt(this.ends[l], 0, 0), i.jQ.appendTo(this.ends[l].jQ), this.placeCursor(t), this.prepareInsertionAt(t)),
                                            this.finalizeInsert(t.options),
                                            this.placeCursor(t);
                                    }),
                                    (t.createBlocks = function () {
                                        for (var t = this.numBlocks(), e = (this.blocks = Array(t)), i = 0; i < t; i += 1) {
                                            (e[i] = N()).adopt(this, this.ends[c], 0);
                                        }
                                    }),
                                    (t.placeCursor = function (t) {
                                        t.insAtRightEnd(
                                            this.foldChildren(this.ends[l], function (t, e) {
                                                return t.isEmpty() ? t : e;
                                            })
                                        );
                                    }),
                                    (t.moveTowards = function (t, e, i) {
                                        var n = i && this[i + "Into"];
                                        e.insAtDirEnd(-t, n || this.ends[-t]);
                                    }),
                                    (t.deleteTowards = function (t, e) {
                                        e.startSelection(), this.selectTowards(t, e), e.select();
                                    }),
                                    (t.selectTowards = function (t, e) {
                                        (e[-t] = this), (e[t] = this[t]);
                                    }),
                                    (t.selectChildren = function () {
                                        return y(this, this);
                                    }),
                                    (t.unselectInto = function (t, e) {
                                        e.insAtDirEnd(-t, e.anticursor.ancestors[this.id]);
                                    }),
                                    (t.seek = function (t, e) {
                                        function getBounds(t) {
                                            var e = {};
                                            return (e[l] = t.jQ.offset().left), (e[c] = e[l] + t.jQ.outerWidth()), e;
                                        }
                                        var i = this,
                                            n = getBounds(i);
                                        if (t < n[l]) return e.insLeftOf(i);
                                        if (t > n[c]) return e.insRightOf(i);
                                        var a = n[l];
                                        i.eachChild(function (s) {
                                            var r = getBounds(s);
                                            return t < r[l]
                                                ? (t - a < r[l] - t ? (s[l] ? e.insAtRightEnd(s[l]) : e.insLeftOf(i)) : e.insAtLeftEnd(s), !1)
                                                : t > r[c]
                                                ? void (s[c] ? (a = r[c]) : n[c] - t < t - r[c] ? e.insRightOf(i) : e.insAtRightEnd(s))
                                                : (s.seek(t, e), !1);
                                        });
                                    }),
                                    (t.numBlocks = function () {
                                        var t = this.htmlTemplate.match(/&\d+/g);
                                        return t ? t.length : 0;
                                    }),
                                    (t.html = function () {
                                        var t = this.blocks,
                                            e = " mathquill-command-id=" + this.id,
                                            i = this.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);
                                        pray("no unmatched angle brackets", i.join("") === this.htmlTemplate);
                                        for (var n = 0, a = i[0]; a; a = i[(n += 1)])
                                            if ("/>" === a.slice(-2)) i[n] = a.slice(0, -2) + e + "/>";
                                            else if ("<" === a.charAt(0)) {
                                                pray("not an unmatched top-level close tag", "/" !== a.charAt(1)), (i[n] = a.slice(0, -1) + e + ">");
                                                var s = 1;
                                                do {
                                                    pray("no missing close tags", (a = i[(n += 1)])), "</" === a.slice(0, 2) ? (s -= 1) : "<" === a.charAt(0) && "/>" !== a.slice(-2) && (s += 1);
                                                } while (s > 0);
                                            }
                                        return i.join("").replace(/>&(\d+)/g, function (e, i) {
                                            return " mathquill-block-id=" + t[i].id + ">" + t[i].join("html");
                                        });
                                    }),
                                    (t.latex = function () {
                                        return this.foldChildren(this.ctrlSeq, function (t, e) {
                                            return t + "{" + (e.latex() || " ") + "}";
                                        });
                                    }),
                                    (t.textTemplate = [""]),
                                    (t.text = function () {
                                        var t = this,
                                            e = 0;
                                        return t.foldChildren(t.textTemplate[e], function (i, n) {
                                            e += 1;
                                            var a = n.text();
                                            return i && "(" === t.textTemplate[e] && "(" === a[0] && ")" === a.slice(-1) ? i + a.slice(1, -1) + t.textTemplate[e] : i + n.text() + (t.textTemplate[e] || "");
                                        });
                                    });
                            }),
                            R = o(D, function (t, e) {
                                (t.init = function (t, i, n) {
                                    n || (n = t && t.length > 1 ? t.slice(1) : t), e.init.call(this, t, i, [n]);
                                }),
                                    (t.parser = function () {
                                        return q.succeed(this);
                                    }),
                                    (t.numBlocks = function () {
                                        return 0;
                                    }),
                                    (t.replaces = function (t) {
                                        t.remove();
                                    }),
                                    (t.createBlocks = noop),
                                    (t.moveTowards = function (t, e) {
                                        e.jQ.insDirOf(t, this.jQ), (e[-t] = this), (e[t] = this[t]);
                                    }),
                                    (t.deleteTowards = function (t, e) {
                                        e[t] = this.remove()[t];
                                    }),
                                    (t.seek = function (t, e) {
                                        t - this.jQ.offset().left < this.jQ.outerWidth() / 2 ? e.insLeftOf(this) : e.insRightOf(this);
                                    }),
                                    (t.latex = function () {
                                        return this.ctrlSeq;
                                    }),
                                    (t.text = function () {
                                        return this.textTemplate;
                                    }),
                                    (t.placeCursor = noop),
                                    (t.isEmpty = function () {
                                        return !0;
                                    });
                            }),
                            L = o(R, function (t, e) {
                                t.init = function (t, i) {
                                    e.init.call(this, t, "<span>" + (i || t) + "</span>");
                                };
                            }),
                            I = o(R, function (t, e) {
                                t.init = function (t, i, n) {
                                    e.init.call(this, t, '<span class="mq-binary-operator">' + i + "</span>", n);
                                };
                            }),
                            N = o(A, function (t, e) {
                                (t.join = function (t) {
                                    return this.foldChildren("", function (e, i) {
                                        return e + i[t]();
                                    });
                                }),
                                    (t.html = function () {
                                        return this.join("html");
                                    }),
                                    (t.latex = function () {
                                        return this.join("latex");
                                    }),
                                    (t.text = function () {
                                        return this.ends[l] === this.ends[c] && 0 !== this.ends[l] ? this.ends[l].text() : this.join("text");
                                    }),
                                    (t.keystroke = function (t, i, n) {
                                        return !n.API.__options.spaceBehavesLikeTab || ("Spacebar" !== t && "Shift-Spacebar" !== t)
                                            ? e.keystroke.apply(this, arguments)
                                            : (i.preventDefault(), void n.escapeDir("Shift-Spacebar" === t ? l : c, t, i));
                                    }),
                                    (t.moveOutOf = function (t, e, i) {
                                        !(i && this.parent[i + "Into"]) && this[t] ? e.insAtDirEnd(-t, this[t]) : e.insDirOf(t, this.parent);
                                    }),
                                    (t.selectOutOf = function (t, e) {
                                        e.insDirOf(t, this.parent);
                                    }),
                                    (t.deleteOutOf = function (t, e) {
                                        e.unwrapGramp();
                                    }),
                                    (t.seek = function (t, e) {
                                        var i = this.ends[c];
                                        if (!i || i.jQ.offset().left + i.jQ.outerWidth() < t) return e.insAtRightEnd(this);
                                        if (t < this.ends[l].jQ.offset().left) return e.insAtLeftEnd(this);
                                        for (; t < i.jQ.offset().left; ) i = i[l];
                                        return i.seek(t, e);
                                    }),
                                    (t.chToCmd = function (t, e) {
                                        var i;
                                        return t.match(/^[a-eg-zA-Z]$/) ? W(t) : /^\d$/.test(t) ? Q(t) : (i = f[t] || m[t]) ? i(t) : L(t);
                                    }),
                                    (t.write = function (t, e) {
                                        var i = this.chToCmd(e, t.options);
                                        t.selection && i.replaces(t.replaceSelection()), t.isTooDeep() || i.createLeftOf(t.show());
                                    }),
                                    (t.focus = function () {
                                        return this.jQ.addClass("mq-hasCursor"), this.jQ.removeClass("mq-empty"), this;
                                    }),
                                    (t.blur = function () {
                                        return this.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.jQ.addClass("mq-empty"), this;
                                    });
                            }),
                            M = o(N, RootBlockMixin);
                        (MathQuill.MathField = APIFnFor(
                            o(k, function (t, e) {
                                t.init = function (t, e) {
                                    t.addClass("mq-editable-field mq-math-mode"), this.initRootAndEvents(M(), t, e);
                                };
                            })
                        )),
                            (MathQuill.InertMath = APIFnFor(
                                o(E, function (t) {
                                    t.init = function (t, e) {
                                        this.initRoot(N(), t.addClass("mq-math-mode"), e), this.__controller.staticMathTextareaEvents();
                                    };
                                })
                            )),
                            (MathQuill.StaticMathWithEditables = APIFnFor(
                                o(E, function (e) {
                                    (e.init = function (t, e) {
                                        this.initRoot(N(), t.addClass("mq-math-mode"), e), this.__controller.delegateMouseEvents(), this.__controller.staticMathTextareaEvents();
                                    }),
                                        (e.withActiveNode = function (t) {
                                            var e = this.__controller.container.find(".mq-inner-editable .mq-root-block"),
                                                n = e.filter(".mq-last-focused"),
                                                a = n.length ? n.eq(0) : e.eq(0),
                                                s = d.byId[a.attr(i)];
                                            s && ((s.__controller = s.__controller || s.controller), t(s));
                                        }),
                                        (e.write = function (t) {
                                            return (
                                                this.withActiveNode(function (e) {
                                                    return k.prototype.write.call(e, t);
                                                }),
                                                this
                                            );
                                        }),
                                        (e.cmd = function (t) {
                                            return (
                                                this.withActiveNode(function (e) {
                                                    return k.prototype.cmd.call(e, t);
                                                }),
                                                this
                                            );
                                        }),
                                        (e.clear = function () {
                                            return (
                                                this.withActiveNode(function (t) {
                                                    k.prototype.clear.call(t);
                                                }),
                                                this
                                            );
                                        }),
                                        (e.keystroke = function (t) {
                                            return (
                                                this.withActiveNode(function (e) {
                                                    return k.prototype.keystroke.call(e, t);
                                                }),
                                                this
                                            );
                                        }),
                                        (e.editables = function () {
                                            return this.__controller.container
                                                .find(".mq-inner-editable .mq-root-block")
                                                .sort(function (t, e) {
                                                    return parseInt(u(t).attr("mathquill-block-id")) > parseInt(u(e).attr("mathquill-block-id")) ? 1 : -1;
                                                })
                                                .map(function () {
                                                    var e = d.byId[t(this).attr(i)],
                                                        n = t(this).hasClass("mq-focused");
                                                    return { latex: e.latex(), active: n };
                                                })
                                                .get();
                                        }),
                                        (e.typedText = function (t) {
                                            return (
                                                this.withActiveNode(function (e) {
                                                    return k.prototype.typedText.call(e, t);
                                                }),
                                                this
                                            );
                                        });
                                })
                            ));
                        var B = o(d, function (t, e) {
                                function fuseChildren(t) {
                                    t.jQ[0].normalize();
                                    var e = t.jQ.contents().filter(function (t, e) {
                                        return 3 === e.nodeType;
                                    })[0];
                                    e || (e = { data: "" });
                                    var i = j(e.data);
                                    return i.jQadd(e), t.children().disown(), i.adopt(t, 0, 0);
                                }
                                (t.ctrlSeq = "\\text"),
                                    (t.replaces = function (t) {
                                        t instanceof p ? (this.replacedText = t.remove().jQ.text()) : "string" == typeof t && (this.replacedText = t);
                                    }),
                                    (t.jQadd = function (t) {
                                        e.jQadd.call(this, t), this.ends[l] && this.ends[l].jQadd(this.jQ[0].firstChild);
                                    }),
                                    (t.createLeftOf = function (t) {
                                        if (
                                            (e.createLeftOf.call(this, t),
                                            this[c].siblingCreated && this[c].siblingCreated(t.options, l),
                                            this[l].siblingCreated && this[l].siblingCreated(t.options, c),
                                            this.bubble("reflow"),
                                            t.insAtRightEnd(this),
                                            this.replacedText)
                                        )
                                            for (var i = 0; i < this.replacedText.length; i += 1) this.write(t, this.replacedText.charAt(i));
                                    }),
                                    (t.parser = function () {
                                        var t = this,
                                            e = q.string,
                                            i = q.regex;
                                        return q.optWhitespace
                                            .then(e("{"))
                                            .then(i(/^[^}]*/))
                                            .skip(e("}"))
                                            .map(function (e) {
                                                if (e.length && G.hasOwnProperty(e)) {
                                                    for (var i = N(), n = 0; n < e.length; n += 1) W(e.charAt(n)).adopt(i, i.ends[c], 0);
                                                    return i.children();
                                                }
                                                return j(e).adopt(t, 0, 0), t;
                                            });
                                    }),
                                    (t.textContents = function () {
                                        return this.foldChildren("", function (t, e) {
                                            return t + e.text;
                                        });
                                    }),
                                    (t.text = function () {
                                        return '"' + this.textContents() + '"';
                                    }),
                                    (t.latex = function () {
                                        return "\\text{" + this.textContents() + "}";
                                    }),
                                    (t.html = function () {
                                        return '<span class="mq-text-mode" mathquill-command-id=' + this.id + ">" + this.textContents() + "</span>";
                                    }),
                                    (t.moveTowards = function (t, e) {
                                        e.insAtDirEnd(-t, this);
                                    }),
                                    (t.moveOutOf = function (t, e) {
                                        e.insDirOf(t, this);
                                    }),
                                    (t.unselectInto = t.moveTowards),
                                    (t.selectTowards = D.prototype.selectTowards),
                                    (t.deleteTowards = D.prototype.deleteTowards),
                                    (t.selectOutOf = function (t, e) {
                                        e.insDirOf(t, this);
                                    }),
                                    (t.deleteOutOf = function (t, e) {
                                        this.isEmpty() && e.insRightOf(this);
                                    }),
                                    (t.write = function (t, i) {
                                        if ((t.show().deleteSelection(), "$" !== i)) t[l] ? t[l].appendText(i) : j(i).createLeftOf(t);
                                        else if (this.isEmpty()) t.insRightOf(this), L("\\$", "$").createLeftOf(t);
                                        else if (t[c])
                                            if (t[l]) {
                                                var n = B(),
                                                    a = this.ends[l];
                                                a.disown(), a.adopt(n, 0, 0), t.insLeftOf(this), e.createLeftOf.call(n, t);
                                            } else t.insLeftOf(this);
                                        else t.insRightOf(this);
                                    }),
                                    (t.seek = function (t, e) {
                                        e.hide();
                                        var i = fuseChildren(this),
                                            n = this.jQ.width() / this.text.length,
                                            a = Math.round((t - this.jQ.offset().left) / n);
                                        a <= 0 ? e.insAtLeftEnd(this) : a >= i.text.length ? e.insAtRightEnd(this) : e.insLeftOf(i.splitRight(a));
                                        for (var s = t - e.show().offset().left, r = s && s < 0 ? l : c, o = r; e[r] && s * o > 0; ) e[r].moveTowards(r, e), (o = s), (s = t - e.offset().left);
                                        if ((r * s < -r * o && e[-r].moveTowards(-r, e), e.anticursor)) {
                                            if (e.anticursor.parent === this) {
                                                var u = e[l] && e[l].text.length;
                                                if (this.anticursorPosition === u) e.anticursor = h.copy(e);
                                                else {
                                                    if (this.anticursorPosition < u) {
                                                        var d = e[l].splitRight(this.anticursorPosition);
                                                        e[l] = d;
                                                    } else d = e[c].splitRight(this.anticursorPosition - u);
                                                    e.anticursor = h(this, d[l], d);
                                                }
                                            }
                                        } else this.anticursorPosition = e[l] && e[l].text.length;
                                    }),
                                    (t.blur = function () {
                                        N.prototype.blur.call(this), fuseChildren(this);
                                    }),
                                    (t.focus = N.prototype.focus);
                            }),
                            j = o(d, function (t, e) {
                                function endChar(t, e) {
                                    return e.charAt(t === l ? 0 : -1 + e.length);
                                }
                                (t.init = function (t) {
                                    e.init.call(this), (this.text = t);
                                }),
                                    (t.jQadd = function (t) {
                                        (this.dom = t), (this.jQ = u(t));
                                    }),
                                    (t.jQize = function () {
                                        return this.jQadd(document.createTextNode(this.text));
                                    }),
                                    (t.appendText = function (t) {
                                        (this.text += t), this.dom.appendData(t);
                                    }),
                                    (t.prependText = function (t) {
                                        (this.text = t + this.text), this.dom.insertData(0, t);
                                    }),
                                    (t.insTextAtDirEnd = function (t, e) {
                                        prayDirection(e), e === c ? this.appendText(t) : this.prependText(t);
                                    }),
                                    (t.splitRight = function (t) {
                                        var e = j(this.text.slice(t)).adopt(this.parent, this, this[c]);
                                        return e.jQadd(this.dom.splitText(t)), (this.text = this.text.slice(0, t)), e;
                                    }),
                                    (t.moveTowards = function (t, e) {
                                        prayDirection(t);
                                        var i = endChar(-t, this.text),
                                            n = this[-t];
                                        return n ? n.insTextAtDirEnd(i, t) : j(i).createDir(-t, e), this.deleteTowards(t, e);
                                    }),
                                    (t.latex = function () {
                                        return this.text;
                                    }),
                                    (t.deleteTowards = function (t, e) {
                                        this.text.length > 1
                                            ? t === c
                                                ? (this.dom.deleteData(0, 1), (this.text = this.text.slice(1)))
                                                : (this.dom.deleteData(-1 + this.text.length, 1), (this.text = this.text.slice(0, -1)))
                                            : (this.remove(), this.jQ.remove(), (e[t] = this[t]));
                                    }),
                                    (t.selectTowards = function (t, e) {
                                        prayDirection(t);
                                        var i = e.anticursor,
                                            n = endChar(-t, this.text);
                                        if (i[t] === this) {
                                            var a = j(n).createDir(t, e);
                                            (i[t] = a), e.insDirOf(t, a);
                                        } else {
                                            var s = this[-t];
                                            if (s) s.insTextAtDirEnd(n, t);
                                            else (a = j(n).createDir(-t, e)).jQ.insDirOf(-t, e.selection.jQ);
                                            1 === this.text.length && i[-t] === this && (i[-t] = this[-t]);
                                        }
                                        return this.deleteTowards(t, e);
                                    });
                            });
                        function makeTextBlock(t, e, i) {
                            return o(B, { ctrlSeq: t, htmlTemplate: "<" + e + " " + i + ">&0</" + e + ">" });
                        }
                        (m.text = m.textnormal = m.textrm = m.textup = m.textmd = B),
                            (m.em = m.italic = m.italics = m.emph = m.textit = m.textsl = makeTextBlock("\\textit", "i", 'class="mq-text-mode"')),
                            (m.strong = m.bold = m.textbf = makeTextBlock("\\textbf", "b", 'class="mq-text-mode"')),
                            (m.sf = m.textsf = makeTextBlock("\\textsf", "span", 'class="mq-sans-serif mq-text-mode"')),
                            (m.tt = m.texttt = makeTextBlock("\\texttt", "span", 'class="mq-monospace mq-text-mode"')),
                            (m.textsc = makeTextBlock("\\textsc", "span", 'style="font-variant:small-caps" class="mq-text-mode"')),
                            (m.uppercase = makeTextBlock("\\uppercase", "span", 'style="text-transform:uppercase" class="mq-text-mode"')),
                            (m.lowercase = makeTextBlock("\\lowercase", "span", 'style="text-transform:lowercase" class="mq-text-mode"')),
                            (m.ce = o(B, function (t, e) {
                                function wrapDots(t) {
                                    return t.replace(/(&middot;)/g, '<span class="mq-bond-dot">$1</span>');
                                }
                                (t.bondHtml = { "-": "-", "=": "=", "#": "&#8801;", "...": wrapDots("&middot;&middot;&middot;"), "....": wrapDots("&middot;&middot;&middot;&middot;"), "->": "&#8594;", "<-": "&#8592;" }),
                                    (t.bond = null),
                                    (t.ctrlSeq = "\\ce"),
                                    (t.regex = /^(\\bond{([^{}]+?)})/i),
                                    (t.jQadd = function (t) {
                                        e.jQadd.call(this, t), this.bond && this.jQaddBond();
                                    }),
                                    (t.jQaddBond = function () {
                                        this.jQ.empty().removeClass("mq-text-mode").addClass("mq-ce mq-bond").html(this.bondHtml[this.bond]);
                                    }),
                                    (t.parseBond = function (t) {
                                        t.length && (this.bond = this.regex.exec(t) && t.replace(this.regex, "$2")), this.bondHtml[this.bond] || (this.bond = null);
                                    }),
                                    (t.latex = function () {
                                        return "\\ce{" + (this.bond ? "\\bond{" + this.bond + "}" : this.textContents()) + "}";
                                    }),
                                    (t.text = function () {
                                        return this.bond || this.textContents();
                                    }),
                                    (t.isEmpty = function () {
                                        return !this.text();
                                    }),
                                    (t.moveOutOf = function (t, e) {
                                        this.bond || this.parseEnteredText(t, e), e.insDirOf(t, this);
                                    }),
                                    (t.parseEnteredText = function (t, e) {
                                        var i = e[-t];
                                        if ((this.parseBond(this.textContents()), this.bond)) {
                                            for (; i instanceof j; ) i = i.remove()[-t];
                                            (e[-t] = this), this.jQaddBond();
                                        }
                                    }),
                                    (t.parser = function () {
                                        var t = this,
                                            e = q.string,
                                            i = q.regex;
                                        return q.optWhitespace
                                            .then(e("{"))
                                            .then(i(this.regex))
                                            .skip(e("}"))
                                            .map(function (e) {
                                                return t.parseBond(e), t;
                                            });
                                    }),
                                    (t.moveTowards = R.prototype.moveTowards),
                                    (t.deleteTowards = R.prototype.deleteTowards),
                                    (t.seek = R.prototype.seek),
                                    (t.blur = N.prototype.blur);
                            }));
                        var F = o(D, function (t, e) {
                                (t.init = function (t) {
                                    e.init.call(this, "$"), (this.cursor = t);
                                }),
                                    (t.htmlTemplate = '<span class="mq-math-mode">&0</span>'),
                                    (t.createBlocks = function () {
                                        e.createBlocks.call(this),
                                            (this.ends[l].cursor = this.cursor),
                                            (this.ends[l].write = function (t, e) {
                                                "$" !== e
                                                    ? N.prototype.write.call(this, t, e)
                                                    : this.isEmpty()
                                                    ? (t.insRightOf(this.parent), this.parent.deleteTowards(dir, t), L("\\$", "$").createLeftOf(t.show()))
                                                    : t[c]
                                                    ? t[l]
                                                        ? N.prototype.write.call(this, t, e)
                                                        : t.insLeftOf(this.parent)
                                                    : t.insRightOf(this.parent);
                                            });
                                    }),
                                    (t.latex = function () {
                                        return "$" + this.ends[l].latex() + "$";
                                    });
                            }),
                            U = o(M, function (t, e) {
                                (t.keystroke = function (t) {
                                    if ("Spacebar" !== t && "Shift-Spacebar" !== t) return e.keystroke.apply(this, arguments);
                                }),
                                    (t.write = function (t, e) {
                                        var i;
                                        (t.show().deleteSelection(), "$" === e) ? F(t).createLeftOf(t) : ("<" === e ? (i = "&lt;") : ">" === e && (i = "&gt;"), L(e, i).createLeftOf(t));
                                    });
                            });
                        MathQuill.TextField = APIFnFor(
                            o(k, function (t) {
                                (t.init = function (t) {
                                    t.addClass("mq-editable-field mq-text-mode"), this.initRootAndEvents(U(), t);
                                }),
                                    (t.latex = function (t) {
                                        return arguments.length > 0 ? (this.__controller.renderLatexText(t), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex();
                                    });
                            })
                        );
                        f["\\"] = o(D, function (t, e) {
                            (t.ctrlSeq = "\\"),
                                (t.replaces = function (t) {
                                    (this._replacedFragment = t.disown()),
                                        (this.isEmpty = function () {
                                            return !1;
                                        });
                                }),
                                (t.htmlTemplate = '<span class="mq-latex-command-input mq-non-leaf">\\<span>&0</span></span>'),
                                (t.textTemplate = ["\\"]),
                                (t.createBlocks = function () {
                                    e.createBlocks.call(this),
                                        (this.ends[l].focus = function () {
                                            return this.parent.jQ.addClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.removeClass("mq-empty"), this;
                                        }),
                                        (this.ends[l].blur = function () {
                                            return this.parent.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.addClass("mq-empty"), this;
                                        }),
                                        (this.ends[l].write = function (t, e) {
                                            t.show().deleteSelection(), e.match(/[a-z]/i) ? L(e).createLeftOf(t) : (this.parent.renderCommand(t), ("\\" === e && this.isEmpty()) || this.parent.parent.write(t, e));
                                        }),
                                        (this.ends[l].keystroke = function (t, i, n) {
                                            return "Tab" === t || "Enter" === t || "Spacebar" === t ? (this.parent.renderCommand(n.cursor), void i.preventDefault()) : e.keystroke.apply(this, arguments);
                                        });
                                }),
                                (t.createLeftOf = function (t) {
                                    if ((e.createLeftOf.call(this, t), this._replacedFragment)) {
                                        var i = this.jQ[0];
                                        this.jQ = this._replacedFragment.jQ
                                            .addClass("mq-blur")
                                            .bind("mousedown mousemove", function (t) {
                                                return u((t.target = i)).trigger(t), !1;
                                            })
                                            .insertBefore(this.jQ)
                                            .add(this.jQ);
                                    }
                                }),
                                (t.latex = function () {
                                    return "\\" + this.ends[l].latex() + " ";
                                }),
                                (t.renderCommand = function (t) {
                                    (this.jQ = this.jQ.last()), this.remove(), this[c] ? t.insLeftOf(this[c]) : t.insAtRightEnd(this.parent);
                                    var e = this.ends[l].latex();
                                    e || (e = " ");
                                    var i = m[e] || Dt[e];
                                    i
                                        ? ((i = i(e)), this._replacedFragment && i.replaces(this._replacedFragment), i.createLeftOf(t))
                                        : ((i = B()).replaces(e), i.createLeftOf(t), t.insRightOf(i), this._replacedFragment && this._replacedFragment.remove());
                                });
                        });
                        (m["∉"] = m.notin = bind(I, "\\notin ", "&#8713;")),
                            (m["≅"] = m.cong = bind(I, "\\cong ", "&#8773;")),
                            (m["≡"] = m.equiv = bind(I, "\\equiv ", "&#8801;")),
                            (m["⊕"] = m.oplus = bind(I, "\\oplus ", "&#8853;")),
                            (m["⊗"] = m.otimes = bind(I, "\\otimes ", "&#8855;")),
                            (m["≠"] = m.ne = m.neq = bind(I, "\\ne ", "&ne;")),
                            (m.ast = m.star = m.loast = m.lowast = bind(I, "\\ast ", "&lowast;")),
                            (m.therefor = m.therefore = bind(I, "\\therefore ", "&there4;")),
                            (m.cuz = m.because = bind(I, "\\because ", "&#8757;")),
                            (m.prop = m.propto = bind(I, "\\propto ", "&prop;")),
                            (m["≈"] = m.asymp = m.approx = bind(I, "\\approx ", "&asymp;")),
                            (m.isin = m.in = bind(I, "\\in ", "&isin;")),
                            (m.ni = m.contains = bind(I, "\\ni ", "&ni;")),
                            (m.notni = m.niton = m.notcontains = m.doesnotcontain = b["\\not\\ni"] = bind(I, "\\not\\ni ", "&#8716;")),
                            (m.sub = m.subset = bind(I, "\\subset ", "&sub;")),
                            (m.sup = m.supset = m.superset = bind(I, "\\supset ", "&sup;")),
                            (m.nsub = m.notsub = m.nsubset = m.notsubset = b["\\not\\subset"] = bind(I, "\\not\\subset ", "&#8836;")),
                            (m.nsup = m.notsup = m.nsupset = m.notsupset = m.nsuperset = m.notsuperset = b["\\not\\supset"] = bind(I, "\\not\\supset ", "&#8837;")),
                            (m.sube = m.subeq = m.subsete = m.subseteq = bind(I, "\\subseteq ", "&sube;")),
                            (m.supe = m.supeq = m.supsete = m.supseteq = m.supersete = m.superseteq = bind(I, "\\supseteq ", "&supe;")),
                            (m.nsube = m.nsubeq = m.notsube = m.notsubeq = m.nsubsete = m.nsubseteq = m.notsubsete = m.notsubseteq = b["\\not\\subseteq"] = bind(I, "\\not\\subseteq ", "&#8840;")),
                            (m.nsupe = m.nsupeq = m.notsupe = m.notsupeq = m.nsupsete = m.nsupseteq = m.notsupsete = m.notsupseteq = m.nsupersete = m.nsuperseteq = m.notsupersete = m.notsuperseteq = b["\\not\\supseteq"] = bind(
                                I,
                                "\\not\\supseteq ",
                                "&#8841;"
                            )),
                            (m.N = m.naturals = m.Naturals = bind(L, "\\mathbb{N}", "&#8469;")),
                            (m.P = m.primes = m.Primes = m.projective = m.Projective = m.probability = m.Probability = bind(L, "\\mathbb{P}", "&#8473;")),
                            (m.Z = m.integers = m.Integers = bind(L, "\\mathbb{Z}", "&#8484;")),
                            (m.Q = m.rationals = m.Rationals = bind(L, "\\mathbb{Q}", "&#8474;")),
                            (m.R = m.reals = m.Reals = bind(L, "\\mathbb{R}", "&#8477;")),
                            (m.C = m.complex = m.Complex = m.complexes = m.Complexes = m.complexplane = m.Complexplane = m.ComplexPlane = bind(L, "\\mathbb{C}", "&#8450;")),
                            (m.H = m.Hamiltonian = m.quaternions = m.Quaternions = bind(L, "\\mathbb{H}", "&#8461;")),
                            (m.quad = m.emsp = bind(L, "\\quad ", "    ")),
                            (m.qquad = bind(L, "\\qquad ", "        "));
                        var V = o(R, function (t, e) {
                            t.init = function (t, i) {
                                e.init.call(this, t, '<span class="mq-longarrow">' + i + "</span>");
                            };
                        });
                        (m.diamond = bind(L, "\\diamond ", "&#9671;")),
                            (m.bigtriangleup = bind(L, "\\bigtriangleup ", "&#9651;")),
                            (m.ominus = bind(L, "\\ominus ", "&#8854;")),
                            (m.uplus = bind(L, "\\uplus ", "&#8846;")),
                            (m.bigtriangledown = bind(L, "\\bigtriangledown ", "&#9661;")),
                            (m.sqcap = bind(L, "\\sqcap ", "&#8851;")),
                            (m.triangleleft = bind(L, "\\triangleleft ", "&#8882;")),
                            (m.sqcup = bind(L, "\\sqcup ", "&#8852;")),
                            (m.triangleright = bind(L, "\\triangleright ", "&#8883;")),
                            (m.odot = bind(L, "\\odot ", "&#8857;")),
                            (m.bigcirc = bind(L, "\\bigcirc ", "&#9711;")),
                            (m.dagger = bind(L, "\\dagger ", "&#0134;")),
                            (m.ddagger = bind(L, "\\ddagger ", "&#135;")),
                            (m.wr = bind(L, "\\wr ", "&#8768;")),
                            (m.amalg = bind(L, "\\amalg ", "&#8720;")),
                            (m.models = bind(L, "\\models ", "&#8872;")),
                            (m.prec = bind(L, "\\prec ", "&#8826;")),
                            (m.succ = bind(L, "\\succ ", "&#8827;")),
                            (m.preceq = bind(L, "\\preceq ", "&#8828;")),
                            (m.succeq = bind(L, "\\succeq ", "&#8829;")),
                            (m.simeq = bind(L, "\\simeq ", "&#8771;")),
                            (m.mid = bind(L, "\\mid ", "&#8739;")),
                            (m.ll = bind(L, "\\ll ", "&#8810;")),
                            (m.gg = bind(L, "\\gg ", "&#8811;")),
                            (m.parallel = bind(L, "\\parallel ", "&#8741;")),
                            (m.nparallel = bind(L, "\\nparallel ", "&#8742;")),
                            (m.bowtie = bind(L, "\\bowtie ", "&#8904;")),
                            (m.sqsubset = bind(L, "\\sqsubset ", "&#8847;")),
                            (m.sqsupset = bind(L, "\\sqsupset ", "&#8848;")),
                            (m.smile = bind(L, "\\smile ", "&#8995;")),
                            (m.sqsubseteq = bind(L, "\\sqsubseteq ", "&#8849;")),
                            (m.sqsupseteq = bind(L, "\\sqsupseteq ", "&#8850;")),
                            (m.doteq = bind(L, "\\doteq ", "&#8784;")),
                            (m.frown = bind(L, "\\frown ", "&#8994;")),
                            (m.vdash = bind(L, "\\vdash ", "&#8870;")),
                            (m.dashv = bind(L, "\\dashv ", "&#8867;")),
                            (m.longleftarrow = bind(V, "\\longleftarrow ", '&larr;<span class="mq-arrow-tail mq-tail-right">&larr;</span>')),
                            (m.longrightarrow = bind(V, "\\longrightarrow ", '<span class="mq-arrow-tail">&larr;</span>&rarr;')),
                            (m.Longleftarrow = bind(V, "\\Longleftarrow ", '&lArr;<span class="mq-arrow-tail mq-tail-right">&lArr;</span>')),
                            (m.Longrightarrow = bind(V, "\\Longrightarrow ", '<span class="mq-arrow-tail">&lArr;</span>&rArr;')),
                            (m.longleftrightarrow = bind(V, "\\longleftrightarrow ", '<span class="mq-arrow-mirror">&larr;&rarr;</span>')),
                            (m.Longleftrightarrow = bind(V, "\\Longleftrightarrow ", '<span class="mq-arrow-mirror">&lArr;&rArr;</span>')),
                            (m.updownarrow = bind(L, "\\updownarrow ", "&#8597;")),
                            (m.Updownarrow = bind(L, "\\Updownarrow ", "&#8661;")),
                            (m.mapsto = bind(L, "\\mapsto ", "&#8614;")),
                            (m.nearrow = bind(L, "\\nearrow ", "&#8599;")),
                            (m.hookleftarrow = bind(L, "\\hookleftarrow ", "&#8617;")),
                            (m.hookrightarrow = bind(L, "\\hookrightarrow ", "&#8618;")),
                            (m.searrow = bind(L, "\\searrow ", "&#8600;")),
                            (m.leftharpoonup = bind(L, "\\leftharpoonup ", "&#8636;")),
                            (m.rightharpoonup = bind(L, "\\rightharpoonup ", "&#8640;")),
                            (m.swarrow = bind(L, "\\swarrow ", "&#8601;")),
                            (m.leftharpoondown = bind(L, "\\leftharpoondown ", "&#8637;")),
                            (m.rightharpoondown = bind(L, "\\rightharpoondown ", "&#8641;")),
                            (m.rightleftharpoons = bind(L, "\\rightleftharpoons ", "&#8651;")),
                            (m.leftrightharpoons = bind(L, "\\leftrightharpoons ", "&#8652;")),
                            (m.nwarrow = bind(L, "\\nwarrow ", "&#8598;")),
                            (m.ldots = bind(L, "\\ldots ", "&#8230;")),
                            (m.cdots = bind(L, "\\cdots ", "&#8943;")),
                            (m.vdots = bind(L, "\\vdots ", "&#8942;")),
                            (m.ddots = bind(L, "\\ddots ", "&#8945;")),
                            (m.surd = bind(L, "\\surd ", "&#8730;")),
                            (m.triangle = bind(L, "\\triangle ", "&#9651;")),
                            (m.ell = bind(L, "\\ell ", "&#8467;")),
                            (m.top = bind(L, "\\top ", "&#8868;")),
                            (m.flat = bind(L, "\\flat ", "&#9837;")),
                            (m.natural = bind(L, "\\natural ", "&#9838;")),
                            (m.sharp = bind(L, "\\sharp ", "&#9839;")),
                            (m.wp = bind(L, "\\wp ", "&#8472;")),
                            (m.bot = bind(L, "\\bot ", "&#8869;")),
                            (m.clubsuit = bind(L, "\\clubsuit ", "&#9827;")),
                            (m.diamondsuit = bind(L, "\\diamondsuit ", "&#9826;")),
                            (m.heartsuit = bind(L, "\\heartsuit ", "&#9825;")),
                            (m.spadesuit = bind(L, "\\spadesuit ", "&#9824;")),
                            (m.circledot = bind(L, "\\circledot ", "&#8857;")),
                            (m.middot = bind(L, "\\middot ", "&middot;")),
                            (m.dottedsquare = bind(L, "\\dottedsquare ", "&#11034;")),
                            (m.square = bind(L, "\\square ", "&#11036;")),
                            (m.rectangle = bind(L, "\\rectangle ", "&#9647;")),
                            (m.oint = bind(L, "\\oint ", "&#8750;")),
                            (m.bigcap = bind(L, "\\bigcap ", "&#8745;")),
                            (m.bigcup = bind(L, "\\bigcup ", "&#8746;")),
                            (m.bigsqcup = bind(L, "\\bigsqcup ", "&#8852;")),
                            (m.bigvee = bind(L, "\\bigvee ", "&#8744;")),
                            (m.bigwedge = bind(L, "\\bigwedge ", "&#8743;")),
                            (m.bigodot = bind(L, "\\bigodot ", "&#8857;")),
                            (m.bigotimes = bind(L, "\\bigotimes ", "&#8855;")),
                            (m.bigoplus = bind(L, "\\bigoplus ", "&#8853;")),
                            (m.biguplus = bind(L, "\\biguplus ", "&#8846;")),
                            (m.lfloor = bind(L, "\\lfloor ", "&#8970;")),
                            (m.rfloor = bind(L, "\\rfloor ", "&#8971;")),
                            (m.lceil = bind(L, "\\lceil ", "&#8968;")),
                            (m.rceil = bind(L, "\\rceil ", "&#8969;")),
                            (m.opencurlybrace = m.lbrace = bind(L, "\\lbrace ", "{")),
                            (m.closecurlybrace = m.rbrace = bind(L, "\\rbrace ", "}")),
                            (m.mug = bind(L, "\\mug ", "&micro;g")),
                            (m.mus = bind(L, "\\mus ", "&micro;s")),
                            (m.mum = bind(L, "\\mum ", "&micro;m")),
                            (m.muL = bind(L, "\\muL ", "&micro;L")),
                            v.open(function (t) {
                                this.onNotify(function (t) {
                                    "move" === t && this[c] && this[c].movingLeftOf && this[c].movingLeftOf(this);
                                });
                            });
                        var H = o(R, function (t, e) {
                            t.moveTowards = function (t, i) {
                                t === c && this[c] instanceof yt ? i.insAtDirEnd(l, this[c].ends[l]) : e.moveTowards.apply(this, arguments);
                            };
                        });
                        (m["∫"] = m.int = m.integral = bind(H, "\\int ", "<big>&int;</big>")),
                            (m.caret = bind(L, "\\text{^}", "^")),
                            (m.underscore = bind(L, "\\_", "_")),
                            (m.slash = bind(L, "/")),
                            (m.vert = bind(L, "|")),
                            (m.perp = m.perpendicular = bind(L, "\\perp ", "&perp;")),
                            (m.nabla = m.del = bind(L, "\\nabla ", "&nabla;")),
                            (m.hbar = bind(L, "\\hbar ", "&#8463;")),
                            (m.AA = m.Angstrom = m.angstrom = bind(L, "\\text\\AA ", "&#8491;")),
                            (m.ring = m.circ = m.circle = bind(L, "\\circ ", "&#8728;")),
                            (m.bull = m.bullet = bind(L, "\\bullet ", "&bull;")),
                            (m.setminus = m.smallsetminus = bind(L, "\\setminus ", "&#8726;")),
                            (m.not = m["¬"] = m.neg = bind(L, "\\neg ", "&not;")),
                            (m["…"] = m.dots = m.ellip = m.hellip = m.ellipsis = m.hellipsis = bind(L, "\\dots ", "&hellip;")),
                            (m.converges = m.darr = m.dnarr = m.dnarrow = m.downarrow = bind(L, "\\downarrow ", "&darr;")),
                            (m.dArr = m.dnArr = m.dnArrow = m.Downarrow = bind(L, "\\Downarrow ", "&dArr;")),
                            (m.diverges = m.uarr = m.uparrow = bind(L, "\\uparrow ", "&uarr;")),
                            (m.uArr = m.Uparrow = bind(L, "\\Uparrow ", "&uArr;")),
                            (m.to = bind(I, "\\to ", "&rarr;")),
                            (m.rarr = m.rightarrow = bind(L, "\\rightarrow ", "&rarr;")),
                            (m.implies = bind(I, "\\Rightarrow ", "&rArr;")),
                            (m.rArr = m.Rightarrow = bind(L, "\\Rightarrow ", "&rArr;")),
                            (m.gets = bind(I, "\\gets ", "&larr;")),
                            (m.larr = m.leftarrow = bind(L, "\\leftarrow ", "&larr;")),
                            (m.impliedby = bind(I, "\\Leftarrow ", "&lArr;")),
                            (m.lArr = m.Leftarrow = bind(L, "\\Leftarrow ", "&lArr;")),
                            (m.harr = m.lrarr = m.leftrightarrow = bind(L, "\\leftrightarrow ", "&harr;")),
                            (m.iff = bind(I, "\\Leftrightarrow ", "&hArr;")),
                            (m.hArr = m.lrArr = m.Leftrightarrow = bind(L, "\\Leftrightarrow ", "&hArr;")),
                            (m.Re = m.Real = m.real = bind(L, "\\Re ", "&real;")),
                            (m.Im = m.imag = m.image = m.imagin = m.imaginary = m.Imaginary = bind(L, "\\Im ", "&image;")),
                            (m.part = m.partial = bind(L, "\\partial ", "&part;")),
                            (m.infty = m.infin = m.infinity = bind(L, "\\infty ", "&infin;")),
                            (m.alef = m.alefsym = m.aleph = m.alephsym = bind(L, "\\aleph ", "&alefsym;")),
                            (m.xist = m.xists = m.exist = m.exists = bind(L, "\\exists ", "&exist;")),
                            (m.and = m.land = m.wedge = bind(L, "\\wedge ", "&and;")),
                            (m.or = m.lor = m.vee = bind(L, "\\vee ", "&or;")),
                            (m.o = m.O = m.empty = m.emptyset = m.oslash = m.Oslash = m.nothing = m.varnothing = bind(I, "\\varnothing ", "&empty;")),
                            (m.cup = m.union = bind(I, "\\cup ", "&cup;")),
                            (m.cap = m.intersect = m.intersection = bind(I, "\\cap ", "&cap;")),
                            (m.deg = m.degree = bind(L, "\\degree ", "&deg;")),
                            (m.ang = m.angle = bind(L, "\\angle ", "&ang;")),
                            (m.measuredangle = bind(L, "\\measuredangle ", "m&ang;"));
                        var Q = o(L, function (t, e) {
                                t.createLeftOf = function (t) {
                                    t.options.autoSubscriptNumerals && t.parent !== t.parent.parent.sub && ((t[l] instanceof z && !1 !== t[l].isItalic) || (t[l] instanceof yt && t[l][l] instanceof z && !1 !== t[l][l].isItalic))
                                        ? (m._().createLeftOf(t), e.createLeftOf.call(this, t), t.insRightOf(t.parent.parent))
                                        : e.createLeftOf.call(this, t);
                                };
                            }),
                            z = o(R, function (t, e) {
                                (t.init = function (t, i) {
                                    e.init.call(this, t, "<var>" + (i || t) + "</var>");
                                }),
                                    (t.text = function () {
                                        var t = this.ctrlSeq;
                                        return !this[l] || this[l] instanceof z || this[l] instanceof I || (t = "*" + t), !this[c] || this[c] instanceof I || "^" === this[c].ctrlSeq || (t += "*"), t;
                                    });
                            });
                        (w.p.autoCommands = { _maxLength: 0 }),
                            (x.autoCommands = function (t) {
                                if (!/^[a-z]+(?: [a-z]+)*$/i.test(t)) throw '"' + t + '" not a space-delimited list of only letters';
                                for (var e = t.split(" "), i = {}, n = 0, s = 0; s < e.length; s += 1) {
                                    var r = e[s];
                                    if (r.length < 2) throw 'autocommand "' + r + '" not minimum length of 2';
                                    if (m[r] === Y) throw '"' + r + '" is a built-in operator name';
                                    (i[r] = 1), (n = a(n, r.length));
                                }
                                return (i._maxLength = n), i;
                            });
                        var W = o(z, function (t, e) {
                                function nonOperatorSymbol(t) {
                                    return t instanceof R && !(t instanceof I);
                                }
                                (t.init = function (t) {
                                    return e.init.call(this, (this.letter = t));
                                }),
                                    (t.createLeftOf = function (t) {
                                        var i = t.options.autoCommands,
                                            n = i._maxLength;
                                        if (n > 0) {
                                            for (var a = this.letter, s = t[l], r = 1; s instanceof W && r < n; ) (a = s.letter + a), (s = s[l]), (r += 1);
                                            for (; a.length; ) {
                                                if (i.hasOwnProperty(a)) {
                                                    if (((s = t[l]), a.length > 1)) {
                                                        for (r = 2; r < a.length; r += 1, s = s[l]);
                                                        p(s, t[l]).remove(), (t[l] = s[l]);
                                                    }
                                                    return m[a](a).createLeftOf(t);
                                                }
                                                a = a.slice(1);
                                            }
                                        }
                                        e.createLeftOf.apply(this, arguments);
                                    }),
                                    (t.italicize = function (t) {
                                        return (this.isItalic = t), this.jQ.toggleClass("mq-operator-name", !t), this;
                                    }),
                                    (t.finalizeTree = t.siblingDeleted = t.siblingCreated = function (t, e) {
                                        (e !== l && this[c] instanceof W) || this.autoUnItalicize(t);
                                    }),
                                    (t.autoUnItalicize = function (t) {
                                        var e = t.autoOperatorNames;
                                        if (0 !== e._maxLength) {
                                            for (var i = this.letter, a = this[l]; a instanceof W; a = a[l]) i = a.letter + i;
                                            for (var s = this[c]; s instanceof W; s = s[c]) i += s.letter;
                                            p(a[c] || this.parent.ends[l], s[l] || this.parent.ends[c]).each(function (t) {
                                                t.italicize(!0).jQ.removeClass("mq-first mq-last"), (t.ctrlSeq = t.letter);
                                            });
                                            t: for (var r = 0, o = a[c] || this.parent.ends[l]; r < i.length; r += 1, o = o[c])
                                                for (var u = n(e._maxLength, i.length - r); u > 0; u -= 1) {
                                                    var h = i.slice(r, r + u);
                                                    if (e.hasOwnProperty(h)) {
                                                        for (var d = 0, m = o; d < u; d += 1, m = m[c]) {
                                                            m.italicize(!1);
                                                            var f = m;
                                                        }
                                                        var b = K.hasOwnProperty(h);
                                                        (o.ctrlSeq = (b ? "\\" : "\\operatorname{") + o.ctrlSeq),
                                                            (f.ctrlSeq += b ? " " : "}"),
                                                            $.hasOwnProperty(h) && f[l][l][l].jQ.addClass("mq-last"),
                                                            nonOperatorSymbol(o[l]) && o.jQ.addClass("mq-first"),
                                                            nonOperatorSymbol(f[c]) && f.jQ.addClass("mq-last"),
                                                            (r += u - 1),
                                                            (o = f);
                                                        continue t;
                                                    }
                                                    if (G.hasOwnProperty(h)) {
                                                        for (d = 0, m = o; d < u; d += 1, m = m[c]) {
                                                            m.italicize(!1);
                                                            f = m;
                                                        }
                                                        (o.ctrlSeq = "\\text{" + o.ctrlSeq),
                                                            (f.ctrlSeq += "}"),
                                                            $.hasOwnProperty(h) && f[l][l][l].jQ.addClass("mq-last"),
                                                            nonOperatorSymbol(o[l]) && o.jQ.addClass("mq-first"),
                                                            nonOperatorSymbol(f[c]) && f.jQ.addClass("mq-last"),
                                                            (r += u - 1),
                                                            (o = f);
                                                        continue t;
                                                    }
                                                }
                                        }
                                    });
                            }),
                            K = {},
                            G = {},
                            $ = { limsup: 1, liminf: 1, projlim: 1, injlim: 1 };
                        !(function () {
                            for (var t = (w.p.autoOperatorNames = { _maxLength: 9 }), e = "arg deg det dim exp gcd hom inf ker lg ln log max min sup limsup liminf injlim projlim Pr".split(" "), i = 0; i < e.length; i += 1)
                                K[e[i]] = t[e[i]] = 1;
                            var n = "sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" ");
                            for (i = 0; i < n.length; i += 1) K[n[i]] = 1;
                            var a = "sin cos tan sec cosec csc cotan cot ctg".split(" ");
                            for (i = 0; i < a.length; i += 1) t[a[i]] = t["arc" + a[i]] = t[a[i] + "h"] = t["ar" + a[i] + "h"] = t["arc" + a[i] + "h"] = 1;
                        })(),
                            (x.autoOperatorNames = function (t) {
                                if (!/^[a-z]+(?: [a-z]+)*$/i.test(t)) throw '"' + t + '" not a space-delimited list of only letters';
                                for (var e = t.split(" "), i = {}, n = 0, s = 0; s < e.length; s += 1) {
                                    var r = e[s];
                                    if (r.length < 2) throw '"' + r + '" not minimum length of 2';
                                    (i[r] = 1), (n = a(n, r.length));
                                }
                                return (i._maxLength = n), i;
                            });
                        var Y = o(R, function (t, e) {
                            (t.init = function (t) {
                                this.ctrlSeq = t;
                            }),
                                (t.createLeftOf = function (t) {
                                    for (var e = this.ctrlSeq, i = 0; i < e.length; i += 1) W(e.charAt(i)).createLeftOf(t);
                                }),
                                (t.parser = function () {
                                    for (var t = this.ctrlSeq, e = N(), i = 0; i < t.length; i += 1) W(t.charAt(i)).adopt(e, e.ends[c], 0);
                                    return q.succeed(e.children());
                                });
                        });
                        for (var X in K) K.hasOwnProperty(X) && (m[X] = Y);
                        (m.operatorname = o(D, function (t) {
                            (t.createLeftOf = noop),
                                (t.numBlocks = function () {
                                    return 1;
                                }),
                                (t.parser = function () {
                                    return O.block.map(function (t) {
                                        return t.children();
                                    });
                                });
                        })),
                            (m.f = o(W, function (t, e) {
                                (t.init = function () {
                                    R.p.init.call(this, (this.letter = "f"), '<var class="mq-f">f</var>');
                                }),
                                    (t.italicize = function (t) {
                                        return this.jQ.html("f").toggleClass("mq-f", t), e.italicize.apply(this, arguments);
                                    });
                            })),
                            (m[" "] = m.space = bind(L, "\\ ", " ")),
                            (m["'"] = m.prime = bind(L, "'", "&prime;")),
                            (m['"'] = m.doublePrime = bind(L, '"', "&Prime;")),
                            (m.backslash = bind(L, "\\backslash ", "\\")),
                            f["\\"] || (f["\\"] = m.backslash),
                            (m.$ = bind(L, "\\$", "$"));
                        var Z = o(R, function (t, e) {
                            t.init = function (t, i) {
                                e.init.call(this, t, '<span class="mq-nonSymbola">' + (i || t) + "</span>");
                            };
                        });
                        (m["@"] = Z),
                            (m["&"] = bind(Z, "\\&", "&amp;")),
                            (m["%"] = bind(Z, "\\%", "%")),
                            (m.alpha = m.beta = m.gamma = m.delta = m.zeta = m.eta = m.theta = m.iota = m.kappa = m.mu = m.nu = m.xi = m.rho = m.sigma = m.tau = m.chi = m.psi = m.omega = o(z, function (t, e) {
                                t.init = function (t) {
                                    e.init.call(this, "\\" + t + " ", "&" + t + ";");
                                };
                            })),
                            (m.phi = bind(z, "\\phi ", "&#981;")),
                            (m.phiv = m.varphi = bind(z, "\\varphi ", "&phi;")),
                            (m.epsilon = bind(z, "\\epsilon ", "&#1013;")),
                            (m.epsiv = m.varepsilon = bind(z, "\\varepsilon ", "&epsilon;")),
                            (m.piv = m.varpi = bind(z, "\\varpi ", "&piv;")),
                            (m.sigmaf = m.sigmav = m.varsigma = bind(z, "\\varsigma ", "&sigmaf;")),
                            (m.thetav = m.vartheta = m.thetasym = bind(z, "\\vartheta ", "&thetasym;")),
                            (m.upsilon = m.upsi = bind(z, "\\upsilon ", "&upsilon;")),
                            (m.gammad = m.Gammad = m.digamma = bind(z, "\\digamma ", "&#989;")),
                            (m.kappav = m.varkappa = bind(z, "\\varkappa ", "&#1008;")),
                            (m.rhov = m.varrho = bind(z, "\\varrho ", "&#1009;")),
                            (m.pi = m["π"] = bind(Z, "\\pi ", "&pi;")),
                            (m.lambda = bind(Z, "\\lambda ", "&lambda;")),
                            (m.Upsilon = m.Upsi = m.upsih = m.Upsih = bind(R, "\\Upsilon ", '<var style="font-family: serif">&upsih;</var>')),
                            (m.Gamma = m.Delta = m.Theta = m.Lambda = m.Xi = m.Pi = m.Sigma = m.Phi = m.Psi = m.Omega = o(L, function (t, e) {
                                t.init = function (t) {
                                    e.init.call(this, "\\" + t + " ", "&" + t + ";");
                                };
                            })),
                            (m.forall = m["∀"] = bind(L, "\\forall ", "&#8704;"));
                        var J = o(D, function (t) {
                            (t.init = function (t) {
                                this.latex = t;
                            }),
                                (t.createLeftOf = function (t) {
                                    var e = O.parse(this.latex);
                                    e.children().adopt(t.parent, t[l], t[c]),
                                        (t[l] = e.ends[c]),
                                        e.jQize().insertBefore(t.jQ),
                                        e.finalizeInsert(t.options, t),
                                        e.ends[c][c].siblingCreated && e.ends[c][c].siblingCreated(t.options, l),
                                        e.ends[l][l].siblingCreated && e.ends[l][l].siblingCreated(t.options, c),
                                        t.parent.bubble("reflow");
                                }),
                                (t.parser = function () {
                                    var t = O.parse(this.latex).children();
                                    return q.succeed(t);
                                });
                        });
                        (m["¹"] = bind(J, "^1")), (m["²"] = bind(J, "^2")), (m["³"] = bind(J, "^3")), (m["¼"] = bind(J, "\\frac14")), (m["½"] = bind(J, "\\frac12")), (m["¾"] = bind(J, "\\frac34"));
                        var tt = o(I, function (t) {
                            (t.init = L.prototype.init),
                                (t.contactWeld = t.siblingCreated = t.siblingDeleted = function (t, e) {
                                    if (e !== c) return (this.jQ[0].className = !this[l] || this[l] instanceof I ? "" : "mq-binary-operator"), this;
                                });
                        });
                        (m["+"] = bind(tt, "+", "+")),
                            (m["–"] = m["-"] = bind(tt, "-", "&minus;")),
                            (m["±"] = m.pm = m.plusmn = m.plusminus = bind(tt, "\\pm ", "&plusmn;")),
                            (m.mp = m.mnplus = m.minusplus = bind(tt, "\\mp ", "&#8723;")),
                            (f["*"] = m.sdot = m.cdot = m.cdotp = bind(I, "\\cdot ", "&middot;"));
                        var et = o(I, function (t, e) {
                                (t.init = function (t, i) {
                                    (this.data = t), (this.strict = i);
                                    var n = i ? "Strict" : "";
                                    e.init.call(this, t["ctrlSeq" + n], t["html" + n], t["text" + n]);
                                }),
                                    (t.swap = function (t) {
                                        this.strict = t;
                                        var e = t ? "Strict" : "";
                                        (this.ctrlSeq = this.data["ctrlSeq" + e]), this.jQ.html(this.data["html" + e]), (this.textTemplate = [this.data["text" + e]]);
                                    }),
                                    (t.deleteTowards = function (t, i) {
                                        t !== l || this.strict ? e.deleteTowards.apply(this, arguments) : this.swap(!0);
                                    });
                            }),
                            it = { ctrlSeq: "\\le ", html: "&le;", text: "≤", ctrlSeqStrict: "<", htmlStrict: "&lt;", textStrict: "<" },
                            nt = { ctrlSeq: "\\ge ", html: "&ge;", text: "≥", ctrlSeqStrict: ">", htmlStrict: "&gt;", textStrict: ">" };
                        (m["<"] = m.lt = bind(et, it, !0)), (m[">"] = m.gt = bind(et, nt, !0)), (m["≤"] = m.le = m.leq = bind(et, it, !1)), (m["≥"] = m.ge = m.geq = bind(et, nt, !1));
                        var at = o(I, function (t, e) {
                            (t.init = function () {
                                e.init.call(this, "=", "=");
                            }),
                                (t.createLeftOf = function (t) {
                                    t[l] instanceof et && t[l].strict ? t[l].swap(!1) : e.createLeftOf.apply(this, arguments);
                                });
                        });
                        (m["="] = at),
                            (m["×"] = m.times = bind(I, "\\times ", "&times;", "[x]")),
                            (m["÷"] = m.div = m.divide = m.divides = bind(I, "\\div ", "&divide;", "[/]")),
                            (f["~"] = m.sim = bind(I, "\\sim ", "~", "~")),
                            (m.complement = m["∁"] = bind(L, "\\complement ", "&#8705;")),
                            (m.nexists = m["∄"] = bind(L, "\\nexists ", "&#8708;")),
                            (m.sphericalangle = m["∢"] = bind(L, "\\sphericalangle ", "&#8738;")),
                            (m.iint = m["∬"] = bind(L, "\\iint ", "&#8748;")),
                            (m.iiint = m["∭"] = bind(L, "\\iiint ", "&#8749;")),
                            (m.oiint = m["∯"] = bind(L, "\\oiint ", "&#8751;")),
                            (m.oiiint = m["∰"] = bind(L, "\\oiiint ", "&#8752;")),
                            (m.backsim = m["∽"] = bind(L, "\\backsim ", "&#8765;")),
                            (m.backsimeq = m["⋍"] = bind(L, "\\backsimeq ", "&#8909;")),
                            (m.eqsim = m["≂"] = bind(L, "\\eqsim ", "&#8770;")),
                            (m.ncong = m["≇"] = bind(L, "\\ncong ", "&#8775;")),
                            (m.approxeq = m["≊"] = bind(L, "\\approxeq ", "&#8778;")),
                            (m.bumpeq = m["≏"] = bind(L, "\\bumpeq ", "&#8783;")),
                            (m.Bumpeq = m["≎"] = bind(L, "\\Bumpeq ", "&#8782;")),
                            (m.doteqdot = m["≑"] = bind(L, "\\doteqdot ", "&#8785;")),
                            (m.fallingdotseq = m["≒"] = bind(L, "\\fallingdotseq ", "&#8786;")),
                            (m.risingdotseq = m["≓"] = bind(L, "\\risingdotseq ", "&#8787;")),
                            (m.eqcirc = m["≖"] = bind(L, "\\eqcirc ", "&#8790;")),
                            (m.circeq = m["≗"] = bind(L, "\\circeq ", "&#8791;")),
                            (m.triangleq = m["≜"] = bind(L, "\\triangleq ", "&#8796;")),
                            (m.leqq = m["≦"] = bind(L, "\\leqq ", "&#8806;")),
                            (m.geqq = m["≧"] = bind(L, "\\geqq ", "&#8807;")),
                            (m.lneqq = m["≨"] = bind(L, "\\lneqq ", "&#8808;")),
                            (m.gneqq = m["≩"] = bind(L, "\\gneqq ", "&#8809;")),
                            (m.between = m["≬"] = bind(L, "\\between ", "&#8812;")),
                            (m.nleq = m["≰"] = bind(L, "\\nleq ", "&#8816;")),
                            (m.ngeq = m["≱"] = bind(L, "\\ngeq ", "&#8817;")),
                            (m.lesssim = m["≲"] = bind(L, "\\lesssim ", "&#8818;")),
                            (m.gtrsim = m["≳"] = bind(L, "\\gtrsim ", "&#8819;")),
                            (m.lessgtr = m["≶"] = bind(L, "\\lessgtr ", "&#8822;")),
                            (m.gtrless = m["≷"] = bind(L, "\\gtrless ", "&#8823;")),
                            (m.preccurlyeq = m["≼"] = bind(L, "\\preccurlyeq ", "&#8828;")),
                            (m.succcurlyeq = m["≽"] = bind(L, "\\succcurlyeq ", "&#8829;")),
                            (m.precsim = m["≾"] = bind(L, "\\precsim ", "&#8830;")),
                            (m.succsim = m["≿"] = bind(L, "\\succsim ", "&#8831;")),
                            (m.nprec = m["⊀"] = bind(L, "\\nprec ", "&#8832;")),
                            (m.nsucc = m["⊁"] = bind(L, "\\nsucc ", "&#8833;")),
                            (m.subsetneq = m["⊊"] = bind(L, "\\subsetneq ", "&#8842;")),
                            (m.supsetneq = m["⊋"] = bind(L, "\\supsetneq ", "&#8843;")),
                            (m.vDash = m["⊨"] = bind(L, "\\vDash ", "&#8872;")),
                            (m.Vdash = m["⊩"] = bind(L, "\\Vdash ", "&#8873;")),
                            (m.Vvdash = m["⊪"] = bind(L, "\\Vvdash ", "&#8874;")),
                            (m.VDash = m["⊫"] = bind(L, "\\VDash ", "&#8875;")),
                            (m.nvdash = m["⊬"] = bind(L, "\\nvdash ", "&#8876;")),
                            (m.nvDash = m["⊭"] = bind(L, "\\nvDash ", "&#8877;")),
                            (m.nVdash = m["⊮"] = bind(L, "\\nVdash ", "&#8878;")),
                            (m.nVDash = m["⊯"] = bind(L, "\\nVDash ", "&#8879;")),
                            (m.vartriangleleft = m["⊲"] = bind(L, "\\vartriangleleft ", "&#8882;")),
                            (m.vartriangleright = m["⊳"] = bind(L, "\\vartriangleright ", "&#8883;")),
                            (m.trianglelefteq = m["⊴"] = bind(L, "\\trianglelefteq ", "&#8884;")),
                            (m.trianglerighteq = m["⊵"] = bind(L, "\\trianglerighteq ", "&#8885;")),
                            (m.multimap = m["⊸"] = bind(L, "\\multimap ", "&#8888;")),
                            (m.Subset = m["⋐"] = bind(L, "\\Subset ", "&#8912;")),
                            (m.Supset = m["⋑"] = bind(L, "\\Supset ", "&#8913;")),
                            (m.Cap = m["⋒"] = bind(L, "\\Cap ", "&#8914;")),
                            (m.Cup = m["⋓"] = bind(L, "\\Cup ", "&#8915;")),
                            (m.pitchfork = m["⋔"] = bind(L, "\\pitchfork ", "&#8916;")),
                            (m.lessdot = m["⋖"] = bind(L, "\\lessdot ", "&#8918;")),
                            (m.gtrdot = m["⋗"] = bind(L, "\\gtrdot ", "&#8919;")),
                            (m.lll = m["⋘"] = bind(L, "\\lll ", "&#8920;")),
                            (m.ggg = m["⋙"] = bind(L, "\\ggg ", "&#8921;")),
                            (m.lesseqgtr = m["⋚"] = bind(L, "\\lesseqgtr ", "&#8922;")),
                            (m.gtreqless = m["⋛"] = bind(L, "\\gtreqless ", "&#8923;")),
                            (m.curlyeqprec = m["⋞"] = bind(L, "\\curlyeqprec ", "&#8926;")),
                            (m.curlyeqsucc = m["⋟"] = bind(L, "\\curlyeqsucc ", "&#8927;")),
                            (m.nsim = m["≁"] = bind(L, "\\nsim ", "&#8769;")),
                            (m.lnsim = m["⋦"] = bind(L, "\\lnsim ", "&#8934;")),
                            (m.gnsim = m["⋧"] = bind(L, "\\gnsim ", "&#8935;")),
                            (m.precnsim = m["⋨"] = bind(L, "\\precnsim ", "&#8936;")),
                            (m.succnsim = m["⋩"] = bind(L, "\\succnsim ", "&#8937;")),
                            (m.ntriangleleft = m["⋪"] = bind(L, "\\ntriangleleft ", "&#8938;")),
                            (m.ntriangleright = m["⋫"] = bind(L, "\\ntriangleright ", "&#8939;")),
                            (m.ntrianglelefteq = m["⋬"] = bind(L, "\\ntrianglelefteq ", "&#8940;")),
                            (m.ntrianglerighteq = m["⋭"] = bind(L, "\\ntrianglerighteq ", "&#8941;")),
                            (m.blacksquare = m["∎"] = bind(L, "\\blacksquare ", "&#8718;")),
                            (m.colon = m["∶"] = bind(L, "\\colon ", "&#8758;")),
                            (m.llcorner = m["∟"] = bind(L, "\\llcorner ", "&#8735;")),
                            (m.dotplus = m["∔"] = bind(I, "\\dotplus ", "&#8724;")),
                            (m.nmid = m["∤"] = bind(I, "\nmid ", "&#8740;")),
                            (m.intercal = m["⊺"] = bind(I, "\\intercal ", "&#8890;")),
                            (m.veebar = m["⊻"] = bind(I, "\\veebar ", "&#8891;")),
                            (m.barwedge = m["⊼"] = bind(I, "\\barwedge ", "&#8892;")),
                            (m.ltimes = m["⋉"] = bind(I, "\\ltimes ", "&#8905;")),
                            (m.rtimes = m["⋊"] = bind(I, "\\rtimes ", "&#8906;")),
                            (m.leftthreetimes = m["⋋"] = bind(I, "\\leftthreetimes ", "&#8907;")),
                            (m.rightthreetimes = m["⋌"] = bind(I, "\\rightthreetimes ", "&#8908;")),
                            (m.curlyvee = m["⋎"] = bind(I, "\\curlyvee ", "&#8910;")),
                            (m.curlywedge = m["⋏"] = bind(I, "\\curlywedge ", "&#8911;")),
                            (m.circledcirc = m["⊚"] = bind(I, "\\circledcirc ", "&#8858;")),
                            (m.circledast = m["⊛"] = bind(I, "\\circledast ", "&#8859;")),
                            (m.circleddash = m["⊝"] = bind(I, "\\circleddash ", "&#8861;")),
                            (m.boxplus = m["⊞"] = bind(I, "\\boxplus ", "&#8862;")),
                            (m.boxminus = m["⊟"] = bind(I, "\\boxminus ", "&#8863;")),
                            (m.boxtimes = m["⊠"] = bind(I, "\\boxtimes ", "&#8864;")),
                            (m.boxdot = m["⊡"] = bind(I, "\\boxdot ", "&#8865;")),
                            (m["∂"] = m.partial),
                            (m["∃"] = m.exists),
                            (m["∅"] = m.varnothing),
                            (m["∆"] = m.triangle),
                            (m["∇"] = m.nabla),
                            (m["∈"] = m.in),
                            (m["∊"] = m.in),
                            (m["∋"] = m.ni),
                            (m["∌"] = m.notni),
                            (m["∍"] = m.ni),
                            (m["∐"] = m.amalg),
                            (m["−"] = m["-"]),
                            (m["∓"] = m.mp),
                            (m["∖"] = m.setminus),
                            (m["∘"] = m.circ),
                            (m["∙"] = m.bullet),
                            (m["∝"] = m.propto),
                            (m["∞"] = m.infty),
                            (m["∠"] = m.angle),
                            (m["∡"] = m.measuredangle),
                            (m["∣"] = m.divides),
                            (m["∥"] = m.parallel),
                            (m["∦"] = m.nparallel),
                            (m["∧"] = m.wedge),
                            (m["∨"] = m.vee),
                            (m["∩"] = m.cap),
                            (m["∪"] = m.cup),
                            (m["∮"] = m.oint),
                            (m["∴"] = m.therefore),
                            (m["∵"] = m.because),
                            (m["∼"] = m.sim),
                            (m["≀"] = m.wr),
                            (m["≃"] = m.simeq),
                            (m["≍"] = m.asymp),
                            (m["≐"] = m.doteq),
                            (m["≪"] = m.ll),
                            (m["≫"] = m.gg),
                            (m["≺"] = m.prec),
                            (m["≻"] = m.succ),
                            (m["⊂"] = m.subset),
                            (m["⊃"] = m.supset),
                            (m["⊆"] = m.subseteq),
                            (m["⊇"] = m.supseteq),
                            (m["⊈"] = m.nsubseteq),
                            (m["⊉"] = m.nsupseteq),
                            (m["⊏"] = m.sqsubset),
                            (m["⊐"] = m.sqsupset),
                            (m["⊓"] = m.sqcap),
                            (m["⊔"] = m.sqcup),
                            (m["⊖"] = m.ominus),
                            (m["⊘"] = m.oslash),
                            (m["⊙"] = m.odot),
                            (m["⊢"] = m.vdash),
                            (m["⊣"] = m.dashv),
                            (m["⊤"] = m.top),
                            (m["⊥"] = m.bot),
                            (m["⊧"] = m.models),
                            (m["⋀"] = m.wedge),
                            (m["⋁"] = m.vee),
                            (m["⋂"] = m.cap),
                            (m["⋃"] = m.cup),
                            (m["⋄"] = m.diamond),
                            (m["⋅"] = m.cdot),
                            (m["⋆"] = m.star),
                            (m["⋈"] = m.bowtie),
                            (m["⋮"] = m.vdots),
                            (m["⋯"] = m.cdots),
                            (m["⋱"] = m.ddots);
                        var st,
                            rt,
                            ot = noop,
                            lt = document.createElement("div").style;
                        for (var ct in { transform: 1, WebkitTransform: 1, MozTransform: 1, OTransform: 1, msTransform: 1 })
                            if (ct in lt) {
                                rt = ct;
                                break;
                            }
                        rt
                            ? (st = function (t, e, i) {
                                  t.css(rt, "scale(" + e + "," + i + ")");
                              })
                            : "filter" in lt
                            ? ((ot = function (t) {
                                  t.className = t.className;
                              }),
                              (st = function (t, e, i) {
                                  (e /= 1 + (i - 1) / 2), t.css("fontSize", i + "em"), t.hasClass("mq-matrixed-container") || t.addClass("mq-matrixed-container").wrapInner('<span class="mq-matrixed"></span>');
                                  var n = t.children().css("filter", "progid:DXImageTransform.Microsoft.Matrix(M11=" + e + ",SizingMethod='auto expand')");
                                  function calculateMarginRight() {
                                      t.css("marginRight", ((n.width() - 1) * (e - 1)) / e + "px");
                                  }
                                  calculateMarginRight();
                                  var a = setInterval(calculateMarginRight);
                                  u(window).load(function () {
                                      clearTimeout(a), calculateMarginRight();
                                  });
                              }))
                            : (st = function (t, e, i) {
                                  t.css("fontSize", i + "em");
                              });
                        var ut = o(D, function (t, e) {
                                t.init = function (t, i, n) {
                                    e.init.call(this, t, "<" + i + " " + n + ">&0</" + i + ">");
                                };
                            }),
                            ht = o(D, function (t, e) {
                                (t.init = function (t, i, n) {
                                    (this.args = arguments),
                                        (this.htmlTemplate = "<" + i + " " + n + "><" + i + ' class="mq-xarrow-over">&0</' + i + "><" + i + ' class="mq-xarrow-under"></' + i + "></" + i + ">"),
                                        e.init.call(this, t),
                                        (this.textTemplate = [t.replace("\\", "") + "(", ")"]);
                                }),
                                    (t.parser = function () {
                                        var t = this;
                                        return O.optBlock
                                            .then(function (e) {
                                                return O.block.map(function (i) {
                                                    var n = dt.apply(null, t.args);
                                                    return (n.blocks = [e, i]), e.adopt(n, 0, 0), i.adopt(n, e, 0), n;
                                                });
                                            })
                                            .or(e.parser.call(this));
                                    });
                            }),
                            dt = o(ht, function (t, e) {
                                (t.init = function (t, e, i) {
                                    (this.htmlTemplate = "<" + e + " " + i + "><" + e + ' class="mq-xarrow-over">&1</' + e + "><" + e + ' class="mq-xarrow-under">&0</' + e + "></" + e + ">"),
                                        D.prototype.init.call(this, t),
                                        (this.textTemplate = [t.replace("\\", "") + "[", "](", ")"]);
                                }),
                                    (t.latex = function () {
                                        return this.ctrlSeq + "[" + this.ends[l].latex() + "]{" + this.ends[c].latex() + "}";
                                    }),
                                    (t.finalizeTree = function () {
                                        (this.downInto = this.ends[l].upOutOf = this.ends[c]), (this.upInto = this.ends[c].downOutOf = this.ends[l]);
                                    });
                            }),
                            OverLineStyleGenerator = function (t) {
                                var e = '<span class="' + t + '-inner-right">g</span><span class="' + t + '-inner-left">h</span>';
                                return o(D, function (i, n) {
                                    i.init = function (i, a, s) {
                                        n.init.call(this, i, "<" + a + " " + s + "><" + a + ' class="' + t + '-inner">' + e + '<span class="mq-empty-box">&0</span></' + a + "></" + a + ">");
                                    };
                                });
                            },
                            pt = o(D, function (t, e) {
                                t.init = function (t, i, n) {
                                    e.init.call(this, t, "<" + i + " " + n + '><span class="mq-longdiv-curve-border">)</span><span class="mq-longdiv-inner"><span class="mq-empty">&0</span></' + i + "></span>");
                                };
                            }),
                            mt = o(D, function (t, e) {
                                t.init = function (t, i, n) {
                                    e.init.call(
                                        this,
                                        t,
                                        '<span class="mq-matrix"><span class="mq-paren mq-scaled">[</span><span class="matrix-edit-content-row"><p>' +
                                            n +
                                            '</p><table class="mq-non-leaf mq-rows-3"><tbody><tr><td class="mq-empty"></td><td class="mq-empty"></td><td class="mq-empty"></td></tr></tbody></table></span><span class="mq-paren mq-scaled">]</span></span>'
                                    );
                                };
                            }),
                            ft = o(D, function (t, e) {
                                t.init = function (t) {
                                    e.init.call(this, t, '<span class="mq-non-leaf"><span class="mq-dot-recurring-inner"><span class="mq-dot-recurring">&#x2d9;</span><span class="mq-empty-box">&0</span></span></span>');
                                };
                            }),
                            bt = o(D, function (t, e) {
                                t.init = function (t, i, n) {
                                    e.init.call(
                                        this,
                                        t,
                                        '<span class="mq-matrix"><span class="mq-paren mq-scaled">[</span><span class="matrix-edit-content-col"><p>' +
                                            n +
                                            '</p></span><span class="matrix-edit-content-col"><table class="mq-non-leaf mq-rows-3"><tbody><tr><td class="mq-empty"></td></tr><tr><td class="mq-empty"></td></tr><tr><td class="mq-empty"></td></tr></tbody></table></span><span class="mq-paren mq-scaled">]</span></span>'
                                    );
                                };
                            }),
                            BiggerSymbolStyle = function (t, e) {
                                return o(R, function (i, n) {
                                    i.init = function (i, a, s) {
                                        n.init.call(this, i, "<" + a + " " + s + "><" + a + ' class="' + t + '-inner">' + e + "</" + a + "></" + a + ">");
                                    };
                                });
                            },
                            gt = o(z, function (t, e) {
                                (t.symbols = { C: "&#8450;", H: "&#8461;", N: "&#8469;", P: "&#8473;", Q: "&#8474;", R: "&#8477;", Z: "&#8484;" }),
                                    (t.init = function (t) {
                                        var i = t;
                                        this.symbols[t] && (i = '<span class="mq-original">' + t + "</span>" + this.symbols[t]), e.init.call(this, t, i);
                                    });
                            });
                        (m.mathrm = bind(ut, "\\mathrm", "span", 'class="mq-roman mq-font"')),
                            (m.mathit = bind(ut, "\\mathit", "i", 'class="mq-font"')),
                            (m.mathbf = bind(ut, "\\mathbf", "b", 'class="mq-font"')),
                            (m.mathsf = bind(ut, "\\mathsf", "span", 'class="mq-sans-serif mq-font"')),
                            (m.mathtt = bind(ut, "\\mathtt", "span", 'class="mq-monospace mq-font"')),
                            (m.mathbb = o(D, function (t, e) {
                                (t.init = function () {
                                    e.init.call(this, "\\mathbb", '<span class="mq-mathbb mq-font">&0</span>');
                                }),
                                    (t.adopt = function () {
                                        return (
                                            this.eachChild(function (t) {
                                                if (!t.writeOverride) {
                                                    var e = t.write,
                                                        i = t.deleteOutOf;
                                                    (t.write = t.writeOverride = function (i, n, a) {
                                                        var s;
                                                        if (!gt.prototype.symbols[n]) return e.apply(t, arguments);
                                                        (s = gt(n)), a && s.replaces(a), s.createLeftOf(i);
                                                    }),
                                                        (t.deleteOutOf = function (e, n) {
                                                            var a = [];
                                                            return (
                                                                t.eachChild(function (e) {
                                                                    var i = e.ctrlSeq;
                                                                    a.push(z(i).adopt(t, t.ends[c], 0)), e.remove();
                                                                }),
                                                                a.length && (n[c] = a[0]),
                                                                t.jQize().appendTo(t.jQ),
                                                                i.apply(t, arguments)
                                                            );
                                                        });
                                                }
                                            }),
                                            e.adopt.apply(this, arguments)
                                        );
                                    }),
                                    (t.finalizeTree = function () {
                                        this.eachChild(function (t) {
                                            t.eachChild(function (e) {
                                                var i = e.ctrlSeq,
                                                    n = z;
                                                gt.prototype.symbols[i] && (n = gt), n(i).adopt(t, t.ends[c], 0), e.remove();
                                            }),
                                                t.jQize().appendTo(t.jQ);
                                        });
                                    });
                            })),
                            (m.underline = bind(ut, "\\underline", "span", 'class="mq-non-leaf mq-underline"')),
                            (m.overline = m.bar = bind(OverLineStyleGenerator("mq-overline"), "\\overline", "span", 'class="mq-non-leaf mq-overline"')),
                            (m.longdiv = bind(pt, "\\longdiv", "span", 'class="mq-non-leaf mq-longdiv"')),
                            (m.overleftrightarrow = bind(OverLineStyleGenerator("mq-overleftrightarrow"), "\\overleftrightarrow", "span", 'class="mq-non-leaf mq-overleftrightarrow"')),
                            (m.overrightarrow = bind(OverLineStyleGenerator("mq-overarrow"), "\\overrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-right"')),
                            (m.overleftarrow = bind(OverLineStyleGenerator("mq-overarrow"), "\\overleftarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-left"')),
                            (m.xleftarrow = bind(ht, "\\xleftarrow", "span", 'class="mq-non-leaf mq-xarrow mq-arrow-left"')),
                            (m.xrightarrow = bind(ht, "\\xrightarrow", "span", 'class="mq-non-leaf mq-xarrow mq-arrow-right"')),
                            (m.addmatrixrow = bind(mt, "\\addmatrixrow", "span", "+")),
                            (m.addmatrixcol = bind(bt, "\\addmatrixcol", "span", "+")),
                            (m.ngtr = m["≯"] = bind(BiggerSymbolStyle("mq-ngtr", "&#8815;"), "\\ngtr ", "span", 'class="mq-non-leaf mq-ngtr"')),
                            (m.nless = m["≮"] = bind(BiggerSymbolStyle("mq-nless", "&#8814;"), "\\nless ", "span", 'class="mq-non-leaf mq-nless"')),
                            (m.dot = bind(ft, "\\dot")),
                            (m.parallelogram = bind(BiggerSymbolStyle("mq-parallelogram", "&#9649;"), "\\parallelogram ", "span", 'class="mq-non-leaf mq-parallelogram"'));
                        (m.textcolor = o(D, function (t, e) {
                            (t.setColor = function (t) {
                                (this.color = t), (this.htmlTemplate = '<span class="mq-textcolor" style="color:' + t + '">&0</span>');
                            }),
                                (t.latex = function () {
                                    return "\\textcolor{" + this.color + "}{" + this.blocks[0].latex() + "}";
                                }),
                                (t.parser = function () {
                                    var t = this,
                                        i = q.optWhitespace,
                                        n = q.string,
                                        a = q.regex;
                                    return i
                                        .then(n("{"))
                                        .then(a(/^[#\w\s.,()%-]*/))
                                        .skip(n("}"))
                                        .then(function (i) {
                                            return t.setColor(i), e.parser.call(t);
                                        });
                                });
                        })),
                            (m.class = o(D, function (t, e) {
                                t.parser = function () {
                                    var t = this,
                                        i = q.string,
                                        n = q.regex;
                                    return q.optWhitespace
                                        .then(i("{"))
                                        .then(n(/^[-\w\s\\\xA0-\xFF]*/))
                                        .skip(i("}"))
                                        .then(function (i) {
                                            return (t.htmlTemplate = '<span class="mq-class ' + i + '">&0</span>'), e.parser.call(t);
                                        });
                                };
                            }));
                        var yt = o(D, function (t, e) {
                            (t.ctrlSeq = "_{...}^{...}"),
                                (t.createLeftOf = function (t) {
                                    if (t[l] || !t.options.supSubsRequireOperand) return e.createLeftOf.apply(this, arguments);
                                }),
                                (t.contactWeld = function (t) {
                                    for (var e = l; e; e = e === l && c)
                                        if (this[e] instanceof yt) {
                                            for (var i = "sub"; i; i = "sub" === i && "sup") {
                                                var n = this[i],
                                                    a = this[e][i];
                                                if (n) {
                                                    if (a)
                                                        if (n.isEmpty()) r = h(a, 0, a.ends[l]);
                                                        else {
                                                            n.jQ.children().insAtDirEnd(-e, a.jQ);
                                                            var s = n.children().disown(),
                                                                r = h(a, s.ends[c], a.ends[l]);
                                                            e === l ? s.adopt(a, a.ends[c], 0) : s.adopt(a, 0, a.ends[l]);
                                                        }
                                                    else this[e].addBlock(n.disown());
                                                    this.placeCursor = (function (t, i) {
                                                        return function (n) {
                                                            n.insAtDirEnd(-e, t || i);
                                                        };
                                                    })(a, n);
                                                }
                                            }
                                            this.remove(), t && t[l] === this && (e === c && r ? (r[l] ? t.insRightOf(r[l]) : t.insAtLeftEnd(r.parent)) : t.insRightOf(this[e]));
                                            break;
                                        }
                                    this.respace();
                                }),
                                (w.p.charsThatBreakOutOfSupSub = ""),
                                (t.finalizeTree = function () {
                                    (this.ends[l].write = function (t, e) {
                                        if (t.options.autoSubscriptNumerals && this === this.parent.sub) {
                                            if ("_" === e) return;
                                            var i = this.chToCmd(e);
                                            return i instanceof R ? t.deleteSelection() : t.clearSelection().insRightOf(this.parent), i.createLeftOf(t.show());
                                        }
                                        if (t[l] && t.options.charsThatBreakOutOfSupSub.indexOf(e) > -1) t.insRightOf(this.parent);
                                        else if (" " === e && !t[c] && this === this.parent.sub && this.parent.sup) {
                                            var n = this.parent;
                                            return (n.polyatomic = this.latex().length > 0), void n.polyatomicClass();
                                        }
                                        N.p.write.apply(this, arguments);
                                    }),
                                        (this.ends[l].keystroke = function (t, e, i) {
                                            var n = this.parent;
                                            "Backspace" === t && this === n.sub && n.polyatomic && !i.cursor[c] ? ((n.polyatomic = !1), n.polyatomicClass()) : N.p.keystroke.apply(this, arguments);
                                        }),
                                        this.polyatomicClass();
                                }),
                                (t.polyatomicClass = function () {
                                    this.jQ.toggleClass("mq-polyatomic", this.polyatomic);
                                }),
                                (t.moveTowards = function (t, i, n) {
                                    i.options.autoSubscriptNumerals && !this.sup ? i.insDirOf(t, this) : e.moveTowards.apply(this, arguments);
                                }),
                                (t.movingLeftOf = function (t) {
                                    this[l] instanceof H && t.insLeftOf(this[l]);
                                }),
                                (t.deleteTowards = function (t, i) {
                                    if (i.options.autoSubscriptNumerals && this.sub) {
                                        var n = this.sub.ends[-t];
                                        n instanceof R ? n.remove() : n && n.deleteTowards(t, i.insAtDirEnd(-t, this.sub)), this.sub.isEmpty() && this.sub.deleteOutOf(-t, i.insAtLeftEnd(this.sub));
                                    } else e.deleteTowards.apply(this, arguments);
                                }),
                                (t.latex = function () {
                                    function latex(t, e) {
                                        var i = e && e.latex();
                                        return e ? t + (1 === i.length ? i : "{" + (i || " ") + "}") : "";
                                    }
                                    return latex("_", this.sub) + (this.polyatomic ? "{}" : "") + latex("^", this.sup);
                                }),
                                (t.respace = t.siblingCreated = t.siblingDeleted = function (t, e) {
                                    e !== c && (this.jQ.toggleClass("mq-limit", "\\int " === this[l].ctrlSeq), (this.sup && this.sub) || !this.polyatomic || (this.polyatomic = !1), this.polyatomicClass());
                                }),
                                (t.addBlock = function (t) {
                                    "sub" === this.supsub
                                        ? ((this.sup = this.upInto = this.sub.upOutOf = t), (t.adopt(this, this.sub, 0).downOutOf = this.sub), (t.jQ = u('<span class="mq-sup"/>').append(t.jQ.children()).attr(i, t.id).prependTo(this.jQ)))
                                        : ((this.sub = this.downInto = this.sup.downOutOf = t),
                                          (t.adopt(this, 0, this.sup).upOutOf = this.sup),
                                          (t.jQ = u('<span class="mq-sub"></span>').append(t.jQ.children()).attr(i, t.id).appendTo(this.jQ.removeClass("mq-sup-only"))),
                                          this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>')),
                                        this.sub && this.sub.polyatomic && (this.polyatomic = !0);
                                    for (var e = 0; e < 2; e += 1)
                                        !(function (t, e, i, n) {
                                            t[e].deleteOutOf = function (a, s) {
                                                if ((s.insDirOf(this[a] ? -a : a, this.parent), !this.isEmpty())) {
                                                    var r = this.ends[a];
                                                    this.children().disown().withDirAdopt(a, s.parent, s[a], s[-a]).jQ.insDirOf(-a, s.jQ), (s[-a] = r);
                                                }
                                                (t.supsub = i),
                                                    delete t[e],
                                                    delete t[n + "Into"],
                                                    (t[i][n + "OutOf"] = insLeftOfMeUnlessAtEnd),
                                                    delete t[i].deleteOutOf,
                                                    "sub" === e && u(t.jQ.addClass("mq-sup-only")[0].lastChild).remove(),
                                                    (t.polyatomic = !1),
                                                    this.remove();
                                            };
                                        })(this, "sub sup".split(" ")[e], "sup sub".split(" ")[e], "down up".split(" ")[e]);
                                });
                        });
                        function insLeftOfMeUnlessAtEnd(t) {
                            var e = this.parent,
                                i = t;
                            do {
                                if (i[c]) return t.insLeftOf(e);
                                i = i.parent.parent;
                            } while (i !== e);
                            t.insRightOf(e);
                        }
                        (m.subscript = m._ = o(yt, function (t, e) {
                            (t.supsub = "sub"),
                                (t.htmlTemplate = '<span class="mq-supsub mq-non-leaf"><span class="mq-sub"><span class="mq-empty-box">&0</span></span><span style="display:inline-block;width:0">&#8203;</span></span>'),
                                (t.textTemplate = ["_"]),
                                (t.finalizeTree = function () {
                                    (this.downInto = this.sub = this.ends[l]), (this.sub.upOutOf = insLeftOfMeUnlessAtEnd), e.finalizeTree.call(this);
                                }),
                                (t.parser = function () {
                                    var t = q.regex,
                                        i = q.optWhitespace,
                                        n = this;
                                    return i
                                        .then(t(/^([^{}]|{[^}{]*}){}/))
                                        .map(function (t) {
                                            return (n.blocks = [O.parse(t.replace(/{}$/, ""))]), n.blocks[0].adopt(n, n.ends[c], 0), (n.blocks[0].polyatomic = !0), n;
                                        })
                                        .or(e.parser.call(this));
                                });
                        })),
                            (m.superscript = m.supscript = m["^"] = o(yt, function (t, e) {
                                (t.supsub = "sup"),
                                    (t.htmlTemplate = '<span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup"><span class="mq-empty-box">&0</span></span></span>'),
                                    (t.textTemplate = ["**"]),
                                    (t.finalizeTree = function () {
                                        (this.upInto = this.sup = this.ends[c]), (this.sup.downOutOf = insLeftOfMeUnlessAtEnd), e.finalizeTree.call(this);
                                    });
                            }));
                        var vt = o(D, function (t, e) {
                                (t.parser = function () {
                                    for (var t = q.string, e = q.optWhitespace, i = q.succeed, n = O.block, a = this, s = (a.blocks = [N(), N()]), r = 0; r < s.length; r += 1) s[r].adopt(a, a.ends[c], 0);
                                    return e
                                        .then(t("_").or(t("^")))
                                        .then(function (t) {
                                            var e = s["_" === t ? 0 : 1];
                                            return n.then(function (t) {
                                                return t.children().adopt(e, e.ends[c], 0), i(a);
                                            });
                                        })
                                        .many()
                                        .result(a);
                                }),
                                    (t.finalizeTree = function () {
                                        (this.downInto = this.ends[l]), (this.upInto = this.ends[c]), (this.ends[l].upOutOf = this.ends[c]), (this.ends[c].downOutOf = this.ends[l]);
                                    });
                            }),
                            _t = o(vt, function (t, e) {
                                (t.init = function (t, e) {
                                    var i = '<span class="mq-large-operator mq-non-leaf"><span class="mq-to"><span>&1</span></span><big>' + e + '</big><span class="mq-from"><span>&0</span></span></span>';
                                    R.prototype.init.call(this, t, i);
                                }),
                                    (t.latex = function () {
                                        function simplify(t) {
                                            return 1 === t.length ? t : "{" + (t || " ") + "}";
                                        }
                                        return this.ctrlSeq + "_" + simplify(this.ends[l].latex()) + "^" + simplify(this.ends[c].latex());
                                    }),
                                    (t.createLeftOf = function (t) {
                                        e.createLeftOf.apply(this, arguments), t.options.sumStartsWithNEquals && (W("n").createLeftOf(t), at().createLeftOf(t));
                                    });
                            });
                        (m["∑"] = m.sum = m.summation = bind(_t, "\\sum ", "&sum;")),
                            (m["∏"] = m.prod = m.product = bind(_t, "\\prod ", "&prod;")),
                            (m.coprod = m.coproduct = bind(_t, "\\coprod ", "&#8720;")),
                            (m.lim = m.limit = o(vt, function (t, e) {
                                (t.init = function () {
                                    R.prototype.init.call(this, "\\lim ", '<span class="mq-lim mq-non-leaf"><span class="mq-un-italicized">lim</span><span class="mq-approaches"><span>&0</span></span></span>');
                                }),
                                    (t.latex = function () {
                                        return (
                                            this.ctrlSeq +
                                            "_" +
                                            (function simplify(t) {
                                                return 1 === t.length ? t : "{" + (t || " ") + "}";
                                            })(this.ends[l].latex())
                                        );
                                    });
                            }));
                        var wt = (m.frac = m.dfrac = m.cfrac = m.fraction = o(D, function (t, e) {
                                (t.ctrlSeq = "\\frac"),
                                    (t.htmlTemplate =
                                        '<span class="mq-fraction mq-non-leaf"><span class="mq-numerator"><span class="mq-empty-box">&0</span></span><span class="mq-denominator"><span class="mq-empty-box">&1</span></span><span style="display:inline-block;width:0">&#8203;</span></span>'),
                                    (t.textTemplate = ["(", "/", ")"]),
                                    (t.finalizeTree = function () {
                                        (this.upInto = this.ends[c].upOutOf = this.ends[l]), (this.downInto = this.ends[l].downOutOf = this.ends[c]);
                                    });
                            })),
                            xt = (m.over = f["/"] = o(wt, function (t, e) {
                                t.createLeftOf = function (t) {
                                    if (!this.replacedFragment) {
                                        for (var i = t[l]; i && !(i instanceof I || i instanceof (m.text || noop) || i instanceof _t || "\\ " === i.ctrlSeq || /^[,;:]$/.test(i.ctrlSeq)); ) i = i[l];
                                        i instanceof _t && i[c] instanceof yt && (i = i[c])[c] instanceof yt && i[c].ctrlSeq != i.ctrlSeq && (i = i[c]),
                                            i === t[l] || t.isTooDeep(1) || (this.replaces(p(i[c] || t.parent.ends[l], t[l])), (t[l] = i));
                                    }
                                    e.createLeftOf.call(this, t);
                                };
                            }));
                        (m.underset = o(D, function (t, e) {
                            (t.ctrlSeq = "\\underset"),
                                (t.htmlTemplate = '<span class="mq-underset mq-overunder mq-non-leaf"><span class="mq-over">&1</span><span class="mq-under">&0</span></span>'),
                                (t.textTemplate = ["[", "|", "]"]),
                                (t.finalizeTree = function () {
                                    (this.downInto = this.ends[l].upOutOf = this.ends[c]), (this.upInto = this.ends[c].downOutOf = this.ends[l]);
                                });
                        })),
                            (m.overset = o(D, function (t, e) {
                                (t.ctrlSeq = "\\overset"),
                                    (t.htmlTemplate = '<span class="mq-overset mq-overunder mq-non-leaf"><span class="mq-over">&0</span><span class="mq-under">&1</span></span>'),
                                    (t.textTemplate = ["[", "|", "]"]),
                                    (t.finalizeTree = function () {
                                        (this.downInto = this.ends[c].upOutOf = this.ends[l]), (this.upInto = this.ends[l].downOutOf = this.ends[c]);
                                    });
                            }));
                        var Et = o(D, function (t, e) {
                            t.reflow = function () {
                                var t = this.jQ.find(".mq-arc");
                                st(t, this.jQ.innerWidth() / t.innerWidth(), 1);
                            };
                        });
                        (m.overarc = o(Et, function (t, e) {
                            (t.ctrlSeq = "\\overarc"),
                                (t.htmlTemplate =
                                    '<span class="mq-overarc mq-overunder mq-non-leaf"><span class="mq-over"><span class="mq-arc mq-scaled">&frown;</span><span style="display:inline-block;width:0">&nbsp;</span></span><span class="mq-under">&0</span></span>');
                        })),
                            (m.underarc = o(Et, function (t, e) {
                                (t.ctrlSeq = "\\underarc"),
                                    (t.htmlTemplate =
                                        '<span class="mq-underarc mq-overunder mq-non-leaf"><span class="mq-over">&0</span><span class="mq-under"><span class="mq-arc mq-scaled">&smile;</span><span style="display:inline-block;width:0">&nbsp;</span></span></span>');
                            }));

                        //---------SQRT--------------Start--------------------------------------------------------------------------------------------------------------    
                        var kt = (m.sqrt = m["√"] = o(D, function (t, e) {
                                (t.ctrlSeq = "\\sqrt"),
                                    (t.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix">&radic;</span><span class="mq-non-leaf mq-sqrt-stem"><span class="mq-empty-box">&0</span></span></span>'),
                                    (t.textTemplate = ["sqrt(", ")"]),
                                    (t.parser = function () {
                                        return O.optBlock
                                            .then(function (t) {
                                                return O.block.map(function (e) {
                                                    var i = Tt();
                                                    return (i.blocks = [t, e]), t.adopt(i, 0, 0), e.adopt(i, t, 0), i;
                                                });
                                            })
                                            .or(e.parser.call(this));
                                    }),
                                    (t.reflow = function () {
                                        var t = this.ends[c].jQ.parent();
                                        st(t.prev(), 1, t.innerHeight() / +t.css("fontSize").slice(0, -2) - 0.1);
                                    });
                            })),
                        //---------SQRT-------------End------------------------------------------------------------------------------------------------------
                            Tt =
                                ((m.vec = o(D, function (t, e) {
                                    (t.ctrlSeq = "\\vec"), (t.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-vector-prefix">&rarr;</span><span class="mq-vector-stem">&0</span></span>'), (t.textTemplate = ["vec(", ")"]);
                                })),
                                (m.nthroot = o(kt, function (t, e) {
                                    (t.htmlTemplate =
                                        '<sup class="mq-nthroot mq-non-leaf"><span class="mq-empty-box">&0</span></sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled">&radic;</span><span class="mq-sqrt-stem mq-non-leaf"><span class="mq-empty-box">&1</span></span></span>'),
                                        (t.textTemplate = ["sqrt[", "](", ")"]),
                                        (t.latex = function () {
                                            return "\\sqrt[" + this.ends[l].latex() + "]{" + this.ends[c].latex() + "}";
                                        });
                                })));
                        (m.lrncuberoot = o(kt, function (t, e) {
                            (t.ctrlSeq = "\\lrncuberoot"),
                                (t.htmlTemplate =
                                    '<sup class="mq-nthroot mq-non-leaf"><span class="mq-empty-box">3</span></sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled">&radic;</span><span class="mq-sqrt-stem mq-non-leaf"><span class="mq-empty-box">&0</span></span></span>'),
                                (t.textTemplate = ["sqrt[3](", ")"]),
                                (t.latex = function () {
                                    return "\\sqrt[3]{" + this.ends[l].latex() + "}";
                                });
                        })),
                            (m.abs = o(D, function (t, e) {
                                (t.ctrlSeq = "\\abs"), (t.htmlTemplate = '<span class="mq-abs mq-non-leaf"><span class="mq-empty-box">&0</span></span>'), (t.textTemplate = ["|", "|"]);
                            })),
                            (m.lrnplaceholder = o(D, function (t, e) {
                                (t.ctrlSeq = "\\lrnplaceholder"),
                                    (t.htmlTemplate = '<span class="mq-lrnplaceholder mq-non-leaf"><span class="mq-empty-box">&0</span></span>'),
                                    (t.textTemplate = [""]),
                                    (t.latex = function () {
                                        return this.ends[l].latex();
                                    });
                            })),
                            (m.lrnexponent = o(D, function (t, e) {
                                (t.ctrSeq = "\\lrnexponent"),
                                    (t.htmlTemplate =
                                        '<span class="mq-lrnexponent mq-non-leaf"><span class="mq-lrnplaceholder mq-non-leaf"><span class="mq-empty-box">&0</span></span><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup"><span class="mq-empty-box">&1</span></span></span></span>'),
                                    (t.textTemplate = ["", "**"]),
                                    (t.latex = function () {
                                        var t = this.ends[c].latex();
                                        return t.length > 1 ? (t = "{" + t + "}") : 0 === t.length && (t = "{ }"), this.ends[l].latex() + "^" + t;
                                    });
                            })),
                            (m.lrnsquaredexponent = o(D, function (t, e) {
                                (t.ctrSeq = "\\lrnsquaredexponent"),
                                    (t.htmlTemplate =
                                        '<span class="mq-lrnexponent mq-non-leaf"><span class="mq-lrnplaceholder mq-non-leaf"><span class="mq-empty-box">&0</span></span><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup"><span class="mq-empty-box">2</span></span></span></span>'),
                                    (t.textTemplate = ["", "**2"]),
                                    (t.latex = function () {
                                        return this.ends[l].latex() + "^2";
                                    });
                            })),
                            (m.lrnsubscript = o(D, function (t, e) {
                                (t.ctrSeq = "\\lrnsubscript"),
                                    (t.htmlTemplate =
                                        '<span class="mq-lrnexponent mq-non-leaf"><span class="mq-lrnplaceholder mq-non-leaf"><span class="mq-empty-box">&0</span></span><span class="mq-supsub mq-non-leaf"><span class="mq-sub"><span class="mq-empty-box">&1</span></span><span style="display:inline-block;width:0">&nbsp;</span></span></span>'),
                                    (t.textTemplate = ["", "_"]),
                                    (t.latex = function () {
                                        return this.ends[l].latex() + "_" + this.ends[c].latex();
                                    });
                            }));
                        function DelimsMixin(t, e) {
                            (t.jQadd = function () {
                                e.jQadd.apply(this, arguments), (this.delimjQs = this.jQ.children(":first").add(this.jQ.children(":last"))), (this.contentjQ = this.jQ.children(":eq(1)"));
                            }),
                                (t.reflow = function () {
                                    var t = this.contentjQ.outerHeight() / parseFloat(this.contentjQ.css("fontSize"));
                                    st(this.delimjQs, n(1 + 0.2 * (t - 1), 1.2), 1.2 * t);
                                });
                        }
                        var qt = o(o(D, DelimsMixin), function (t, e) {
                                (t.init = function (t, i, n, a, s) {
                                    e.init.call(this, "\\left" + a, void 0, [i, n]), (this.side = t), (this.sides = {}), (this.sides[l] = { ch: i, ctrlSeq: a }), (this.sides[c] = { ch: n, ctrlSeq: s });
                                }),
                                    (t.numBlocks = function () {
                                        return 1;
                                    }),
                                    (t.html = function () {
                                        return (
                                            (this.htmlTemplate =
                                                '<span class="mq-non-leaf"><span class="mq-scaled mq-paren' +
                                                (this.side === c ? " mq-ghost" : "") +
                                                '">' +
                                                this.sides[l].ch +
                                                '</span><span class="mq-non-leaf">&0</span><span class="mq-scaled mq-paren' +
                                                (this.side === l ? " mq-ghost" : "") +
                                                '">' +
                                                ("." === this.sides[c].ch ? " " : this.sides[c].ch) +
                                                "</span></span>"),
                                            e.html.call(this)
                                        );
                                    }),
                                    (t.latex = function () {
                                        return "\\left" + this.sides[l].ctrlSeq + this.ends[l].latex() + "\\right" + this.sides[c].ctrlSeq;
                                    }),
                                    (t.oppBrack = function (t, e, i) {
                                        return (
                                            e instanceof qt &&
                                            e.side &&
                                            e.side !== -i &&
                                            ("|" === this.sides[this.side].ch || e.side === -this.side) &&
                                            (!t.restrictMismatchedBrackets || Ct[this.sides[this.side].ch] === e.sides[e.side].ch || { "(": "]", "[": ")" }[this.sides[l].ch] === e.sides[c].ch) &&
                                            e
                                        );
                                    }),
                                    (t.closeOpposing = function (t) {
                                        (t.side = 0),
                                            (t.sides[this.side] = this.sides[this.side]),
                                            t.delimjQs
                                                .eq(this.side === l ? 0 : 1)
                                                .removeClass("mq-ghost")
                                                .html(this.sides[this.side].ch);
                                    }),
                                    (t.createLeftOf = function (t) {
                                        if (!this.replacedFragment)
                                            var i = t.options,
                                                n = this.oppBrack(i, t[l], l) || this.oppBrack(i, t[c], c) || this.oppBrack(i, t.parent.parent);
                                        if (n) {
                                            var a = (this.side = -n.side);
                                            this.closeOpposing(n), n === t.parent.parent && t[a] && (p(t[a], t.parent.ends[a], -a).disown().withDirAdopt(-a, n.parent, n, n[a]).jQ.insDirOf(a, n.jQ), n.bubble("reflow"));
                                        } else (a = (n = this).side), n.replacedFragment ? (n.side = 0) : t[-a] && (n.replaces(p(t[-a], t.parent.ends[-a], a)), (t[-a] = 0)), e.createLeftOf.call(n, t);
                                        a === l ? t.insAtLeftEnd(n.ends[l]) : t.insRightOf(n);
                                    }),
                                    (t.placeCursor = noop),
                                    (t.unwrap = function () {
                                        this.ends[l].children().disown().adopt(this.parent, this, this[c]).jQ.insertAfter(this.jQ), this.remove();
                                    }),
                                    (t.deleteSide = function (t, e, i) {
                                        var n = this.parent,
                                            a = this[t],
                                            s = n.ends[t];
                                        if (t === this.side) return this.unwrap(), void (a ? i.insDirOf(-t, a) : i.insAtDirEnd(t, n));
                                        var r = i.options;
                                        if (((this.side = -t), this.oppBrack(r, this.ends[l].ends[this.side], t))) {
                                            this.closeOpposing(this.ends[l].ends[this.side]);
                                            var o = this.ends[l].ends[t];
                                            this.unwrap(), o.siblingCreated && o.siblingCreated(i.options, t), a ? i.insDirOf(-t, a) : i.insAtDirEnd(t, n);
                                        } else if (
                                            (this.oppBrack(r, this.parent.parent, t)
                                                ? (this.parent.parent.closeOpposing(this), this.parent.parent.unwrap())
                                                : ((this.sides[t] = { ch: Ct[this.sides[this.side].ch], ctrlSeq: Ct[this.sides[this.side].ctrlSeq] }),
                                                  this.delimjQs
                                                      .removeClass("mq-ghost")
                                                      .eq(t === l ? 0 : 1)
                                                      .addClass("mq-ghost")
                                                      .html(this.sides[t].ch)),
                                            a)
                                        ) {
                                            o = this.ends[l].ends[t];
                                            p(a, s, -t).disown().withDirAdopt(-t, this.ends[l], o, 0).jQ.insAtDirEnd(t, this.ends[l].jQ.removeClass("mq-empty")), o.siblingCreated && o.siblingCreated(i.options, t), i.insDirOf(-t, a);
                                        } else e ? i.insDirOf(t, this) : i.insAtDirEnd(t, this.ends[l]);
                                    }),
                                    (t.deleteTowards = function (t, e) {
                                        this.deleteSide(-t, !1, e);
                                    }),
                                    (t.finalizeTree = function () {
                                        (this.ends[l].deleteOutOf = function (t, e) {
                                            this.parent.deleteSide(t, !0, e);
                                        }),
                                            (this.finalizeTree = this.intentionalBlur = function () {
                                                this.delimjQs.eq(this.side === l ? 1 : 0).removeClass("mq-ghost"), (this.side = 0);
                                            });
                                    }),
                                    (t.siblingCreated = function (t, e) {
                                        e === -this.side && this.finalizeTree();
                                    });
                            }),
                            Ct = { "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "\\{": "\\}", "\\}": "\\{", "&lang;": "&rang;", "&rang;": "&lang;", "\\langle ": "\\rangle ", "\\rangle ": "\\langle ", "|": "|" };
                        function bindCharBracketPair(t, e) {
                            e = e || t;
                            var i = Ct[t],
                                n = Ct[e];
                            (f[t] = bind(qt, l, t, i, e, n)), (f[i] = bind(qt, c, t, i, e, n));
                        }
                        bindCharBracketPair("("),
                            bindCharBracketPair("["),
                            bindCharBracketPair("{", "\\{"),
                            (m.langle = bind(qt, l, "&lang;", "&rang;", "\\langle ", "\\rangle ")),
                            (m.rangle = bind(qt, c, "&lang;", "&rang;", "\\langle ", "\\rangle ")),
                            (f["|"] = bind(qt, l, "|", "|", "|", "|")),
                            (m.left = o(D, function (t) {
                                t.parser = function () {
                                    var t = q.regex,
                                        e = q.string,
                                        i = (q.succeed, q.optWhitespace);
                                    return i.then(t(/^(?:[([|]|\\\{)/)).then(function (n) {
                                        var a = "\\" === n.charAt(0) ? n.slice(1) : n;
                                        return O.then(function (s) {
                                            var r = t(/^(?:[\])|]|\\\})/);
                                            return (
                                                s.ends[-1] === s.ends[1] && s.ends[1] instanceof Dt.array && (r = t(/^(?:[\])|\.]|\\\})/)),
                                                e("\\right")
                                                    .skip(i)
                                                    .then(r)
                                                    .map(function (t) {
                                                        var e = "\\" === t.charAt(0) ? t.slice(1) : t,
                                                            i = qt(0, a, e, n, t);
                                                        return (i.blocks = [s]), s.adopt(i, 0, 0), i;
                                                    })
                                            );
                                        });
                                    });
                                };
                            })),
                            (m.right = o(D, function (t) {
                                t.parser = function () {
                                    return q.fail("unmatched \\right");
                                };
                            }));
                        var St = (m.binom = m.binomial = o(o(D, DelimsMixin), function (t, e) {
                                (t.ctrlSeq = "\\binom"),
                                    (t.htmlTemplate =
                                        '<span class="mq-non-leaf"><span class="mq-paren mq-scaled">(</span><span class="mq-non-leaf"><span class="mq-array mq-non-leaf"><span>&0</span><span>&1</span></span></span><span class="mq-paren mq-scaled">)</span></span>'),
                                    (t.textTemplate = ["choose(", ",", ")"]);
                            })),
                            Ot =
                                ((m.choose = o(St, function (t) {
                                    t.createLeftOf = xt.prototype.createLeftOf;
                                })),
                                o(R, function (t, e) {
                                    t.init = function (t) {
                                        (t = "\\" + t), e.init.call(this, t, '<span class="mq-unknown-cmd">' + t + "</span>");
                                    };
                                })),
                            At = o(MathQuill.MathField, function (t) {
                                t.init = function (t, e, i, n, a) {
                                    RootBlockMixin(t), (this.__options = n || w());
                                    var s = v(this, t, i);
                                    (s.editable = a), (t.ultimateRoot = e), (t.select = k.prototype.select), s.createTextarea(), s.editablesTextareaEvents(), s.cursor.insAtRightEnd(t);
                                };
                            });
                        (m.MathQuillMathField = o(D, function (t, e) {
                            (t.ctrlSeq = "\\MathQuillMathField"),
                                (t.htmlTemplate = '<span class="mq-editable-field mq-inner-editable"><span class="mq-root-block">&0</span></span>'),
                                (t.parser = function () {
                                    var t = this,
                                        i = q.string,
                                        n = q.regex,
                                        a = q.succeed;
                                    return i("[")
                                        .then(n(/^[a-z][a-z0-9]*/i))
                                        .skip(i("]"))
                                        .map(function (e) {
                                            t.name = e;
                                        })
                                        .or(a())
                                        .then(e.parser.call(t));
                                }),
                                (t.finalizeTree = function () {
                                    var t = d.byId[this.jQ.closest(".mq-root-block").attr(i)],
                                        e = (t && t.controller && t.controller.API.__options) || {},
                                        n = this.ends[l].keystroke;
                                    function focusAdjacentEditable(t, e, i) {
                                        var n, a;
                                        if (!i[t])
                                            for (; (a = e[t] || (e.parent && e.parent[t])); )
                                                if ((n = (e = a).jQ.filter(".mq-editable-field").add(e.jQ.find(".mq-editable-field")).eq(0)).length) return n.find(".mq-textarea").children()[0].focus(), !0;
                                    }
                                    At(this.ends[l], t, this.jQ, e, !0),
                                        (this.ends[l].keystroke = function (t, e, i) {
                                            var a = i.cursor,
                                                s = !1;
                                            switch (t) {
                                                case "Left":
                                                    s = focusAdjacentEditable(l, this.parent, a);
                                                    break;
                                                case "Right":
                                                    s = focusAdjacentEditable(c, this.parent, a);
                                                    break;
                                                case "Up":
                                                    s = focusAdjacentEditable("upOutOf", this.parent, a);
                                                    break;
                                                case "Down":
                                                    s = focusAdjacentEditable("downOutOf", this.parent, a);
                                            }
                                            s || "function" != typeof n || n.apply(this, arguments);
                                        });
                                }),
                                (t.registerInnerField = function (t) {
                                    t.push((t[this.name] = this.ends[l].controller.API));
                                }),
                                (t.latex = function () {
                                    return this.ends[l].latex();
                                }),
                                (t.text = function () {
                                    return this.ends[l].text();
                                }),
                                (t.seek = function () {
                                    return e.seek.apply(this, arguments);
                                }),
                                (t.focus = function () {
                                    return e.focus.apply(this, arguments);
                                }),
                                (t.blur = function () {
                                    return e.blur && e.blur.apply(this, arguments);
                                });
                        })),
                            (m.MathQuillVarField = o(D, function (t, e) {
                                (t.ctrlSeq = "\\MathQuillVarField"),
                                    (t.htmlTemplate = '<span class="lrn-mq-var-container"><span class="mq-root-block">&0</span></span>'),
                                    (t.latex = function () {
                                        return "{{var:" + this.ends[l].latex() + "}}";
                                    }),
                                    (t.text = function () {
                                        return this.ends[l].text();
                                    }),
                                    (t.finalizeTree = function () {
                                        var t = d.byId[this.jQ.closest(".mq-root-block").attr(i)],
                                            e = (t && t.controller && t.controller.API.__options) || {};
                                        At(this.ends[l], t, this.jQ, e, !1),
                                            (this.ends[l].keystroke = function (t, e, i) {
                                                e.preventDefault();
                                            });
                                    });
                            })),
                            (m.MathQuillResponseContainer = o(D, function (t, e) {
                                (t.ctrlSeq = "\\MathQuillResponseContainer"),
                                    (t.htmlTemplate = '<span class="lrn-mq-response-container"><marker class="lrn-qe-keyboard-i-response"></marker><content>Response</content></span>'),
                                    (t.latex = function () {
                                        return "\\MathQuillResponseContainer";
                                    }),
                                    (t.text = function () {
                                        return this.ends[l].text();
                                    });
                            })),
                            (m.MathQuillResponseContainerIcon = o(D, function (t, e) {
                                (t.ctrlSeq = "\\MathQuillResponseContainerIcon"),
                                    (t.htmlTemplate = '<span class="lrn-mq-response-container-icon"><span class="lrn-qe-keyboard-i-response"></span></span>'),
                                    (t.latex = function () {
                                        return "\\MathQuillResponseContainerIcon";
                                    }),
                                    (t.text = function () {
                                        return this.ends[l].text();
                                    });
                            }));
                        var Dt = {};
                        m.begin = o(D, function (t, e) {
                            t.parser = function () {
                                var t = q.string,
                                    e = q.regex;
                                return t("{")
                                    .then(e(/^[a-z]+\*?/i))
                                    .skip(t("}"))
                                    .then(function (t) {
                                        return Dt[t] ? Dt[t]().parser() : q.fail("unknown environment type: " + t);
                                    });
                            };
                        });

                        //------MATRIX----Start-----------------------------------------------------------------------------------
                        var Rt = (m.matrix = Dt.matrix = o(D, function (t, e) {
                            var a = o(N, function (t, e) {
                                    (t.init = function (t, i) {
                                        return (this.column = t), (this.row = i), e.init.call(this);
                                    }),
                                        (t.keystroke = function (t, i, n) {
                                            switch (t) {
                                                case "Shift-Spacebar":
                                                    return i.preventDefault(), this.parent.insertColumn(this, n.cursor);
                                                case "Shift-Enter":
                                                    return this.parent.insertRow(this, n.cursor);
                                            }
                                            return e.keystroke.apply(this, arguments);
                                        }),
                                        (t.deleteOutOf = function (t, i) {
                                            var n = this,
                                                a = arguments;
                                            this.parent.backspace(this, t, i, function () {
                                                return e.deleteOutOf.apply(n, a);
                                            });
                                        });
                                }),
                                s = "&",
                                r = "\\\\";
                            (t.parentheses = { left: null, right: null }),
                                (t.maximum = { rows: 10, columns: 10 }),
                                (t.defaults = { rows: 2, columns: 2 }),
                                (t.ctrlSeq = "\\matrix"),
                                (t.createBlocks = function () {
                                    var t,
                                        e,
                                        i = this,
                                        n = (i.blocks = []),
                                        s = 0;
                                    this.htmlTemplate.replace(/&\d+/g, function (r, o) {
                                        var l = i.htmlTemplate.substring(0, o).match(/<tr[^>]*>/gi).length - 1;
                                        (e = t === l ? e + 1 : 0), (n[s] = a(e, l)), n[s].adopt(i, i.ends[c], 0), (t = l), s++;
                                    });
                                }),
                                (t.reflow = function () {
                                    var t = this.jQ.children("table"),
                                        e = t.outerHeight() / +t.css("fontSize").slice(0, -2),
                                        i = this.jQ.children(".mq-paren");
                                    i.length && st(i, n(1 + 0.2 * (e - 1), 1.2), 1.05 * e);
                                }),
                                (t.latex = function () {
                                    var t,
                                        e,
                                        i,
                                        n = this.getMatrixName(),
                                        a = "\\begin{" + n + "}";
                                    for (i = 0; i < this.blocks.length; i++) (t = this.blocks[i].row), void 0 !== e && (a += e !== t ? r : s), (e = t), (a += this.blocks[i].latex());
                                    return (a += "\\end{" + n + "}");
                                }),
                                (t.createLeftOf = function (i) {
                                    this.cursor = i;
                                    var n = Math.min(this.defaults.rows, this.maximum.rows),
                                        a = Math.min(this.defaults.columns, this.maximum.columns);
                                    (this.defaultHtmlTemplate = this.defaultHtmlTemplate || this.generateHtmlTemplate(n, a)), (t.htmlTemplate = this.defaultHtmlTemplate), e.createLeftOf.call(this, i);
                                }),
                                (t.getMatrixName = function () {
                                    return this.ctrlSeq.replace("\\", "");
                                }),
                                (t.generateHtmlTemplate = function (t, e) {
                                    var i = this,
                                        n = '<span class="mq-matrix mq-non-leaf">' + parenTemplate(this.parentheses.left);
                                    (n += '<table class="mq-non-leaf">'), (t = Math.min(t, this.maximum.rows)), (e = Math.min(e, this.maximum.columns));
                                    for (var a = 0, s = 0; s < t; s++) {
                                        n += "<tr>";
                                        for (var r = 0; r < e; r++) (n += "<td" + columnClass(r) + ">&" + a + "</td>"), a++;
                                        n += "</tr>";
                                    }
                                    return (n += "</table>"), (n += parenTemplate(this.parentheses.right) + "</span>");
                                    function parenTemplate(t) {
                                        return t ? '<span class="mq-paren mq-scaled">' + t + "</span>" : "";
                                    }
                                    function columnClass(t) {
                                        var e = i.getColumnClass && i.getColumnClass(t);
                                        return e ? ' class="' + e + '"' : "";
                                    }
                                }),
                                (t.htmlTemplate = t.generateHtmlTemplate(1, 1)),
                                (t.parser = function () {
                                    var t = q.regex,
                                        e = this,
                                        i = this.getMatrixName(),
                                        n = new RegExp("^(.*?)\\\\end{" + i + "}"),
                                        o = new RegExp("\\\\end{" + i + "}");
                                    return t(n).then(function (t) {
                                        var i,
                                            n = [],
                                            l = t.replace(o, "").split(r),
                                            u = Math.min(l.length, e.maximum.rows),
                                            h = 0;
                                        for (p = 0; p < u; p++) (i = l[p].split(s)), (h = Math.max(h, i.length));
                                        for (h = Math.min(h, e.maximum.columns), p = 0; p < u; p++) {
                                            i = l[p].split(s);
                                            for (t = 0; t < h; t++) {
                                                var d = a(t, p);
                                                O.parse(i[t] || " ")
                                                    .children()
                                                    .adopt(d, d.ends[c], 0),
                                                    n.push(d);
                                            }
                                        }
                                        (e.htmlTemplate = e.generateHtmlTemplate(u, h)), (e.blocks = n);
                                        for (var p = 0; p < n.length; p += 1) n[p].adopt(e, e.ends[c], 0);
                                        return q.succeed(e);
                                    });
                                }),
                                (t.finalizeTree = function () {
                                    var t = this.jQ.find("table");
                                    t.length &&
                                        (this.relink(),
                                        t.removeClass(function (t, e) {
                                            var i = e.match(/mq-rows-\d+/g);
                                            return (i && i.join(" ")) || "";
                                        }),
                                        t.addClass("mq-rows-" + t.find("tr").length));
                                }),
                                (t.relink = function () {
                                    var t = this.jQ.find("td"),
                                        e = d.byId[t.first().attr(i)],
                                        n = d.byId[t.last().attr(i)],
                                        a = t.eq(0).closest("tr"),
                                        s = [];
                                    t.each(function (e) {
                                        var n,
                                            r = d.byId[u(this).attr(i)],
                                            o = t.eq(e + 1),
                                            h = u(this).closest("tr").next("tr"),
                                            p = u(this).closest("tr").index(),
                                            m = u(this).index();
                                        if (o.length) {
                                            var f = d.byId[o.attr(i)];
                                            (r[c] = f), (f[l] = r);
                                        }
                                        if ((n = h.length ? h.find("td").eq(m) : a.find("td").eq(m + 1)).length) {
                                            var b = d.byId[n.attr(i)];
                                            (r.downOutOf = b), (b.upOutOf = r);
                                        }
                                        (r.column = m), (r.row = p), s.push(r);
                                    }),
                                        (this.ends[l] = e),
                                        (this.ends[c] = n),
                                        e && e[l] && delete e[l],
                                        n && n[c] && delete n[c],
                                        (this.blocks = s);
                                }),
                                (t.deleteCell = function (t) {
                                    var e,
                                        n = t.jQ.closest("tr"),
                                        a = t.jQ.index(),
                                        s = n.index(),
                                        r = n.find("td").not(t.jQ),
                                        o = this.jQ
                                            .find("tr")
                                            .not(n)
                                            .map(function () {
                                                return u(this).find("td")[a];
                                            }),
                                        l = 1 === this.jQ.find("td").length;
                                    function isEmpty() {
                                        return d.byId[u(this).attr(i)].isEmpty();
                                    }
                                    return (
                                        r.filter(isEmpty).length === r.length && o.length && (r.remove(), t.jQ.remove(), n.remove(), this.finalizeTree()),
                                        o.filter(isEmpty).length === o.length && r.length && (o.remove(), t.jQ.remove(), this.finalizeTree()),
                                        l || ((s = Math.min(s, this.jQ.find("tr").length - 1)), (a = Math.min(a, this.jQ.find("tr").eq(s).find("td").length - 1)), (e = d.byId[this.jQ.find("tr").eq(s).find("td").eq(a).attr(i)])),
                                        e
                                    );
                                }),
                                (t.addRow = function (t) {
                                    if (!(this.jQ.find("tr").length >= this.maximum.rows)) {
                                        for (var e, n, s = t.find("td").length, r = u("<tr></tr>"), o = 0; o < s; o++) ((e = a()).parent = this), (e.jQ = u('<td class="mq-empty">').attr(i, e.id)), r.append(e.jQ), (n = n || e);
                                        return r.insertAfter(t), n;
                                    }
                                }),
                                (t.addColumn = function (t) {
                                    if (!(t.closest("tr").find("td").length >= this.maximum.columns)) {
                                        var e,
                                            n = t.index(),
                                            s = t.closest("tr").index(),
                                            r = this,
                                            o = [];
                                        return (
                                            this.jQ.find("tr").each(function () {
                                                ((e = a()).parent = r), (e.jQ = u('<td class="mq-empty">').attr(i, e.id)), e.jQ.insertAfter(u(this).find("td").eq(n)), o.push(e);
                                            }),
                                            o[s]
                                        );
                                    }
                                }),
                                (t.insertColumn = function (t, e) {
                                    (newBlock = this.addColumn(t.jQ)), newBlock && (this.finalizeTree(), this.bubble("reflow"), e.insAtRightEnd(newBlock));
                                }),
                                (t.insertRow = function (t, e) {
                                    (newBlock = this.addRow(t.jQ.closest("tr"))), newBlock && (this.finalizeTree(), this.bubble("reflow"), e.insAtRightEnd(newBlock));
                                }),
                                (t.backspace = function (t, e, i, n) {
                                    if (t.isEmpty()) {
                                        var a = this.deleteCell(t);
                                        a ? i.insAtRightEnd(a) : (n(), this.finalizeTree()), this.bubble("edited");
                                    }
                                });
                        }));


                        //------MATRIX-END------------------------------------------------------------------------------------
                        return (
                            (Dt.array = o(Rt, function (t, e) {
                                (t.ctrlSeq = "\\array"),
                                    (t.defaults = { rows: 2, columns: 1 }),
                                    (t.parser = function () {
                                        var t = q.regex,
                                            i = q.string,
                                            n = this;
                                        return i("{")
                                            .then(t(/^[rcl]+/))
                                            .then(function (t) {
                                                return (n.alignments = t), i("}").then(e.parser.call(n));
                                            });
                                    }),
                                    (t.getColumnClass = function (t) {
                                        if (this.alignments && this.alignments.length > t) return "mq-array-column-" + this.alignments.charAt(t);
                                    }),
                                    (t.latex = function () {
                                        var t = e.latex.call(this),
                                            i = "\\begin{" + this.getMatrixName() + "}";
                                        return this.alignments ? t.replace(i, i + "{" + this.alignments + "}") : t;
                                    });
                            })),
                            (m.pmatrix = Dt.pmatrix = o(Rt, function (t, e) {
                                (t.ctrlSeq = "\\pmatrix"), (t.parentheses = { left: "(", right: ")" });
                            })),
                            (m.bmatrix = Dt.bmatrix = o(Rt, function (t, e) {
                                (t.ctrlSeq = "\\bmatrix"), (t.parentheses = { left: "[", right: "]" });
                            })),
                            (m.Bmatrix = Dt.Bmatrix = o(Rt, function (t, e) {
                                (t.ctrlSeq = "\\Bmatrix"), (t.parentheses = { left: "{", right: "}" });
                            })),
                            (m.vmatrix = Dt.vmatrix = o(Rt, function (t, e) {
                                (t.ctrlSeq = "\\vmatrix"), (t.parentheses = { left: "|", right: "|" });
                            })),
                            (m.Vmatrix = Dt.Vmatrix = o(Rt, function (t, e) {
                                (t.ctrlSeq = "\\Vmatrix"), (t.parentheses = { left: "&#8214;", right: "&#8214;" });
                            })),
                            MathQuill
                        );
                    }.apply(e, n)) || (t.exports = a);
        },
        66: function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i(407),
                a = i(409);
            e.default = { Model: n.a, View: a.a };
        },
    },
]);
