/*! For license information please see chemistry.js.LICENSE.txt */
(window.LearnosityAmd = window.LearnosityAmd || []).push([
    [22, 73],
    {
        107: function (t, i, r) {
            "use strict";
            r.r(i);
            var a = r(51),
                o = r(407),
                s = r(277),
                u = r(408),
                m = r.n(u),
                v = r(206);
            function ChemistryScorer(t) {
                this._initialize(t, function (t, i) {
                    return v.a.useMathCore(t) ? m.a.evaluateVerbose(t, i) : v.a.validate(t, i);
                });
            }
            ChemistryScorer.prototype = new s.a();
            var T = ChemistryScorer,
                q = o.a.extend({
                    initialize: function initialize() {
                        a.a.prototype.initialize.apply(this, arguments), this.set({ type: "chemistry" });
                    },
                    getScorerClass: function getScorerClass() {
                        return T;
                    },
                }),
                R = r(409),
                M = R.a.extend({
                    render: function render() {
                        return R.a.prototype.render.apply(this, arguments), this.$el.addClass("lrn_formulaV2"), this;
                    },
                });
            i.default = { Model: q, View: M };
        },
        125: function (t, i, r) {
            "use strict";
            t.exports = r(246);
        },
        128: function (t, i, r) {
            "use strict";
            !(function checkDCE() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
                    0;
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
                    } catch (t) {
                        console.error(t);
                    }
                }
            })(),
                (t.exports = r(247));
        },
        130: function (t, i, r) {
            "use strict";
            r.d(i, "a", function () {
                return i18nTemplate;
            });
            var a = r(0),
                o = r.n(a);
            function i18nTemplate(t, i) {
                return o.a.isEmpty(t)
                    ? ""
                    : (o()(i).forEach(function (i, r) {
                          var a = "{{".concat(r, "}}");
                          t = t.replace(a, i);
                      }),
                      t);
            }
        },
        131: function (t, i, r) {
            "use strict";
            var a = r(1),
                o = r.n(a),
                s = r(0),
                u = r.n(s),
                m = r(7),
                v = r(3),
                T = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                q = new (function () {
                    var t = /Mac|iPad|iPhone|iPod/.test(navigator.platform),
                        i = u.a.uniqueId("lrn_capslock_listener_"),
                        r = this,
                        a = [];
                    function setStatus(t) {
                        r.status !== t &&
                            (u.a.each(a, function (i) {
                                i(t);
                            }),
                            (r.status = t));
                    }
                    (this.status = !1),
                        (this.observe = function (s, m) {
                            return (
                                m && (s = u.a.bind(s, m)),
                                a.push(s),
                                1 === a.length &&
                                    (function startListening() {
                                        var a = !1;
                                        o()(window).on("focus." + i, function () {
                                            o()(window).one("keypress." + i, r.correctStatus);
                                        }),
                                            t
                                                ? (o()(window).on("keydown." + i, function (t) {
                                                      20 === (t || window.event).keyCode && setStatus(!r.status);
                                                  }),
                                                  o()(window).on("keyup." + i, function (t) {
                                                      20 === (t || window.event).keyCode && setStatus(!1);
                                                  }))
                                                : (o()(window).on("keydown." + i, function (t) {
                                                      var i = t || window.event;
                                                      a || 20 !== i.keyCode || (setStatus(!r.status), (a = !0));
                                                  }),
                                                  o()(window).on("keyup." + i, function (t) {
                                                      var i = t || window.event;
                                                      a && 20 === i.keyCode && (a = !1);
                                                  }));
                                    })(),
                                s
                            );
                        }),
                        (this.unobserve = function (t) {
                            (a = u.a.without(a, t)).length ||
                                (function stopListening() {
                                    o()(window).off("." + i);
                                })();
                        }),
                        (this.correctStatus = function (i) {
                            var r = i || window.event,
                                a = r.charCode || r.keyCode,
                                o = r.shiftKey;
                            a < 123 && a > 96 ? setStatus(o) : !(a < 91 && a > 64) || (t && o) || setStatus(!o);
                        });
                })(),
                R = new (function () {
                    var t = u.a.uniqueId("lrn_fullscreen_listener_"),
                        i = this,
                        r = [],
                        a = {
                            generic: { change: "fullscreenchange", element: "fullscreenElement" },
                            webkit: { change: "webkitfullscreenchange", element: "webkitFullscreenElement" },
                            ms: { change: "MSFullscreenChange", element: "msFullscreenElement" },
                            moz: { change: "mozfullscreenchange", element: "mozFullScreenElement" },
                        },
                        s = "ie" === m.a.browser && 11 === m.a.version,
                        v = u.a.find(a, function (t) {
                            if ("on".concat(t.change) in document.documentElement) return t;
                        });
                    !v && s && (v = a.ms);
                    var T = !1;
                    function setElement() {
                        var t = document[v.element];
                        i.element !== t &&
                            (u.a.each(r, function (i) {
                                i(t);
                            }),
                            (i.element = t));
                    }
                    function updateElementAfterNextRender() {
                        T ||
                            ((T = !0),
                            requestAnimationFrame(function () {
                                requestAnimationFrame(function () {
                                    (T = !1), setElement();
                                });
                            }));
                    }
                    (this.element = null),
                        (this.observe = function (i, a) {
                            return (
                                a && (i = u.a.bind(i, a)),
                                v &&
                                    (r.push(i),
                                    1 === r.length &&
                                        (function startListening() {
                                            o()(document).on(v.change + "." + t, updateElementAfterNextRender), T || setElement();
                                        })()),
                                i
                            );
                        }),
                        (this.unobserve = function (i) {
                            (r = u.a.without(r, i)).length ||
                                (function stopListening() {
                                    o()(document).off("." + t);
                                })();
                        });
                })();
            function isEventSupported(t) {
                var i = document.createElement("p"),
                    r = !1;
                if (i.addEventListener)
                    i.addEventListener(
                        t,
                        function () {
                            r = !0;
                        },
                        !1
                    );
                else {
                    if (!i.attachEvent) return !1;
                    i.attachEvent("on" + t, function () {
                        r = !0;
                    });
                }
                return i.setAttribute("id", "target"), r;
            }
            i.a = {
                capsLock: q,
                fullScreen: R,
                getViewportOffset: function getViewportOffset() {
                    var t = o()(window),
                        i = { top: t.scrollTop(), left: t.scrollLeft() };
                    return (i.right = i.left + t.width()), (i.bottom = i.top + t.height()), i;
                },
                getVisibleViewportDimensions: function getVisibleViewportDimensions() {
                    var t,
                        i = window.innerWidth,
                        r = window.innerHeight;
                    return (
                        u.a.contains(["firefox", "opera"], m.a.browser) &&
                            ((i = (t = o()('<div style="position:fixed;right:0;bottom:0;"></div>').appendTo(o()("body"))).get(0).getBoundingClientRect().left), (r = t.get(0).getBoundingClientRect().top), t.remove()),
                        { width: i, height: r }
                    );
                },
                sidesOnScreen: function sidesOnScreen(t) {
                    var i = o()(t),
                        r = i.offset(),
                        a = this.getViewportOffset();
                    return (
                        (r.right = r.left + i.outerWidth()),
                        (r.bottom = r.top + i.outerHeight()),
                        { top: a.top < r.top && r.top < a.bottom, right: a.right > r.right && r.right > a.left, bottom: a.bottom > r.bottom && r.bottom > a.top, left: a.left < r.left && r.left < a.right }
                    );
                },
                observeMutation: function observeMutation(t, i, r) {
                    i = i || {};
                    var a,
                        s = o()(t),
                        m = u.a.uniqueId("lrn.mutation."),
                        v = {
                            childList: i.childList || !1,
                            characterData: i.characterData || !1,
                            attributeOldValue: i.attributeOldValue || !1,
                            charactedDataOldValue: i.charactedDataOldValue || !1,
                            subtree: i.subtree || !1,
                            attributes: i.attributes || !1,
                        };
                    if ((i.attributeFilter instanceof Array && (v.attributeFilter = i.attributeFilter), T)) {
                        if (!(v.childList || v.attributes || v.characterData))
                            return console.log('NOTE: At the very least, childList, attributes, or characterData must be set to true. Otherwise, "An invalid or illegal string was specified" error is thrown.'), !1;
                        (a = new T(function (t) {
                            t.forEach(r);
                        })),
                            s.each(function () {
                                try {
                                    a.observe(t, v);
                                } catch (i) {
                                    console.log(i, t, v);
                                }
                            });
                    } else
                        s.data("lrn-mutation-ns", m),
                            v.attributes && (isEventSupported("DOMAttrModified") ? s.on("DOMAttrModified." + m, r) : "onpropertychange" in document.body && t.attachEvent("propertychange", r)),
                            v.childList &&
                                (isEventSupported("DOMSubtreeModified")
                                    ? s.on("DOMSubtreeModified." + m + " DOMCharacterDataModified." + m + " DOMAttributeNameChanged." + m, r)
                                    : "onpropertychange" in document.body &&
                                      s.find("*").each(function () {
                                          this.attachEvent && this.attachEvent("onpropertychange", r);
                                      }));
                    return a;
                },
                unobserveMutation: function unobserveMutation(t, i, r) {
                    if (t) t.disconnect();
                    else {
                        var a = o()(i),
                            s = a.data("lrn-mutation-ns");
                        a.removeData("lrn-mutation-ns").off("." + s),
                            r &&
                                !isEventSupported("DOMSubtreeModified") &&
                                "onpropertychange" in document.body &&
                                (i.detachEvent("onpropertychange", r),
                                a.find("*").each(function () {
                                    this.detachEvent && this.detachEvent("onpropertychange", r);
                                }));
                    }
                },
                recomputeOpacityOn: function recomputeOpacityOn(t) {
                    if (window.getComputedStyle) return window.getComputedStyle(t).opacity;
                },
                updateButtonMap: function updateButtonMap(t) {
                    var i = (function getButtonMap(t) {
                        return t
                            .map(function () {
                                var t = o()(this),
                                    i = t.offset(),
                                    r = i.left + parseInt(t.css("margin-left"), 10),
                                    a = i.top + parseInt(t.css("margin-top"), 10);
                                return { top: a, right: r + t.width(), bottom: a + t.height(), left: r, el: this, links: {} };
                            })
                            .get();
                    })(t);
                    function isBetween(t, i, r) {
                        return u.a.min([i, r]) <= t && u.a.max([i, r]) >= t;
                    }
                    function closest(t, i) {
                        var r = (i.left + i.right) / 2,
                            a = (i.top + i.bottom) / 2;
                        return u.a.first(
                            u.a.sortBy(t, function (t) {
                                var i = (t.left + t.right) / 2,
                                    o = (t.top + t.bottom) / 2,
                                    s = Math.abs(i - r),
                                    u = Math.abs(o - a);
                                return Math.sqrt(s * s + u * u);
                            })
                        );
                    }
                    function areAligned(t, i, r, a) {
                        return isBetween(r, t, i) || isBetween(a, t, i) || (isBetween(t, r, a) && isBetween(i, r, a));
                    }
                    return (
                        u.a.each(i, function (t) {
                            var r,
                                a,
                                o,
                                s,
                                u = [],
                                m = [];
                            for (s = 0; s < i.length; s++) (o = i[s]) !== t && (areAligned(t.top, t.bottom, o.top, o.bottom) && o.left >= t.right && u.push(o), areAligned(t.left, t.right, o.left, o.right) && o.top >= t.bottom && m.push(o));
                            (r = closest(u, t)), (a = closest(m, t)), r && ((t.links.RIGHT = r), (r.links.LEFT = t)), a && ((t.links.DOWN = a), (a.links.UP = t));
                        }),
                        i
                    );
                },
                toggleBackgroundClickable: function toggleBackgroundClickable(t) {
                    var i = o()("html"),
                        r = i
                            .map(function () {
                                return o()(this).css("cursor");
                            })
                            .get();
                    t && !u.a.isEqual(r, ["pointer"]) && ((this.cachedHtmlCursorStyle = r), i.css("cursor", "pointer")),
                        !t &&
                            this.cachedHtmlCursorStyle &&
                            u.a.each(this.cachedHtmlCursorStyle, function (t, r) {
                                i.eq(r).css("cursor", "auto" === t ? "" : t);
                            });
                },
                isElementVisible: function isElementVisible(t) {
                    return !!t.offsetParent && "hidden" !== getComputedStyle(t).getPropertyValue("visibility");
                },
                focusable: function focusable(t, i) {
                    var r,
                        a,
                        s,
                        u = t.nodeName.toLowerCase();
                    return "area" === u
                        ? ((a = (r = t.parentNode).name), !(!t.href || !a || "map" !== r.nodeName.toLowerCase()) && !!(s = o()('img[usemap="#' + a + '"]')[0]) && this.isElementVisible(s))
                        : (/^(input|select|textarea|button|object)$/.test(u) ? !t.disabled : ("a" === u && t.href) || i) && this.isElementVisible(t);
                },
                getNextTab: function getNextTab(t, i) {
                    var r,
                        a,
                        s,
                        m,
                        v,
                        T = !1,
                        q = !1,
                        R = this,
                        M = !0;
                    return (
                        o()(document)
                            .find("*")
                            .each(function (j, F) {
                                return (
                                    (a = o()(F)),
                                    (s = a.attr("tabindex")),
                                    (m = isNaN(s)),
                                    (r = (m || s >= 0) && R.focusable(F, !m)),
                                    (v = !1),
                                    u.a.isArray(i) &&
                                        u.a.each(i, function (t) {
                                            a.hasClass(t) && (v = !0);
                                        }),
                                    !!v || (!q && r && (q = a), T && r ? ((M = !1), (q = a), !1) : void (r && F === t && (T = !0)))
                                );
                            }),
                        !!q && { nextTabElement: q, isFirstElement: M }
                    );
                },
                detectRenderEnd: function detectRenderEnd(t, i) {
                    var r = this,
                        a = { childList: !0, subtree: !0, attributes: !0 };
                    return new v.default(function (o) {
                        var s, u;
                        function resolveSoon() {
                            clearTimeout(s),
                                (s = setTimeout(function () {
                                    r.unobserveMutation(u, t, resolveSoon), o();
                                }, i));
                        }
                        (u = r.observeMutation(t, a, resolveSoon)), resolveSoon();
                    });
                },
            };
        },
        133: function (t, i, r) {
            "use strict";
            r.d(i, "b", function () {
                return isArrowKey;
            }),
                r.d(i, "c", function () {
                    return isEnterOrSpace;
                });
            var a = r(0),
                o = r.n(a);
            function isArrowKey(t) {
                return o.a.contains([37, 38, 39, 40], t);
            }
            function isEnterOrSpace(t) {
                return 32 === t || 13 === t;
            }
            i.a = {
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
        139: function (t, i, r) {
            "use strict";
            r.d(i, "c", function () {
                return getViewportDimensions;
            }),
                r.d(i, "b", function () {
                    return getElementDocumentBounding;
                });
            var a = r(0),
                o = r.n(a),
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
                    i = document.documentElement;
                return { width: Math.max(t.scrollWidth, t.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth), height: Math.max(t.scrollHeight, t.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight) };
            }
            function getElementDocumentBounding(t) {
                var i = t.getBoundingClientRect(),
                    r = getViewportScroll();
                return { top: i.top + r.top, left: i.left + r.left, width: i.width, height: i.height };
            }
            i.a = {
                relativeToElement: function relativeToElement(t, i, r) {
                    var a = o.a.extend({ gap: 0, viewportGap: 5, centerAlign: !0 }, r),
                        s = a.gap,
                        u = getElementDocumentBounding(i),
                        m = a.centerAlign ? u.width / 2 : 0,
                        v = getElementDocumentBounding(t),
                        T = a.centerAlign ? v.width / 2 : 0,
                        q = a.viewportGap,
                        R = getViewportDimensions(),
                        M = getDocumentDimensions(),
                        j = v.top + v.height + s,
                        F = M.height - j,
                        U = (v.top - R.top < R.height + R.top - j && F > u.height) || j < u.height,
                        V = v.left + T - m,
                        W = j,
                        $ = "bottom";
                    return (
                        u.width >= R.width ? (V = 0) : V + u.width > R.width ? (V = R.width - u.width - q) : V < 0 && (V = q),
                        W + u.height > R.top + R.height && ((W = v.top - u.height - s), ($ = "top")),
                        (W < 0 || U) && ((W = j), ($ = "bottom")),
                        { left: V, top: W, position: $ }
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
                getPositionRelativeToParent: function getPositionRelativeToParent(t, i) {
                    var r = getElementDocumentBounding(t),
                        a = getElementDocumentBounding(i);
                    return { top: r.top - a.top, left: r.left - a.left };
                },
            };
        },
        141: function (t, i, r) {
            "use strict";
            r(5), r(1);
            var a = r(0),
                o = r.n(a),
                s = r(160),
                u = [
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
                m = o.a.unique(o.a.pluck(u, "latex")),
                v = [];
            function strTrim(t) {
                return String.prototype.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
            }
            o.a.each(m, function (t) {
                var i,
                    r = strTrim(t);
                o.a.contains(["\\varsigma", "\\vartheta"], r) && (r = r.replace("\\var", "\\")), (i = { id: r, aliases: o.a.map(o.a.pluck(o.a.where(u, { latex: t }), "key"), strTrim) }), v.push(i);
            });
            var T,
                q = new s.a(v),
                R = [
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
                M = new s.a();
            o.a.each(R, function (t) {
                var i = q.get(t.id);
                i ? (i.set(t), M.add(i)) : M.add(t);
            });
            var j = [
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
                F = {
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
                U = ["x", "y", "^2", ">", "<", "\\sqrt", "\\left(\\right)", "\\sin", "\\frac", "\\theta", "\\pi", "a", "b", "^", "\\le", "\\ge", "\\sqrt[n]{}", "\\left\\{\\right\\}", "\\cos", "\\tan", ":"],
                V = o.a.map(U, function (t) {
                    return { symbol: t };
                });
            function getCollection(t) {
                var i = new s.a();
                return (
                    o.a.each(t, function (t) {
                        var r = M.get(t.symbol);
                        r && (r.set(o.a.omit(t, "symbol")), i.add(r));
                    }),
                    i
                );
            }
            function getNewerFormatMasterCollection() {
                return (T =
                    T ||
                    (function convertToNewerFormat(t) {
                        return (
                            o.a.each(
                                [
                                    { id: "║", type: "keystroke", val: "Shift-Spacebar", shortcut: ["shift + space"] },
                                    { id: "═", type: "keystroke", val: "Shift-Enter", shortcut: ["shift + enter"] },
                                ],
                                function (i) {
                                    var r = t.get(i.id);
                                    r && (t.remove(r), (r = r.clone().set(i)), t.add(r));
                                }
                            ),
                            t
                        );
                    })(M.clone()));
            }
            o.a.each(j, function (t) {
                o.a.contains(U, t.symbol) || o.a.contains(["+", "-", "\\times", "\\div", "="], t.symbol) || V.push(t);
            }),
                (i.a = {
                    master: M,
                    defaultInputUiSymbols: F,
                    ctrlShortcuts: [
                        { label: "Forward slash", type: "write", shortcut: "/", val: "\\slash" },
                        { label: "Open keypad", type: "open-keypad", shortcut: "\\", val: "" },
                    ],
                    updateI18nSymbols: function updateI18nSymbols(t, i, r) {
                        !(function updateCuratedSymbols(t) {
                            var i = t.labels.mathKeyboardSymbols || {};
                            o.a.each(R, function (t) {
                                var r = t.name;
                                o.a.extend(t, { title: r ? i[r] : t.title });
                            });
                        })(t),
                            (function updateDefaultInputUiSymbols(t, i, r) {
                                var a = t.labels.mathKeyboardTitle || {};
                                o.a.each(i, function (t) {
                                    var i = F[t] || {},
                                        s = o.a.findWhere(r, { id: t }),
                                        u = (s && s.label) || a[t] || i.title || t.title;
                                    o.a.isEmpty(u) || (F[t] = o.a.extend(i, { title: u }));
                                });
                            })(t, i, r),
                            (function updateMasterCollection(t) {
                                o.a.each(getNewerFormatMasterCollection().models, function (i) {
                                    var r = o.a.findWhere(t, { id: i.id });
                                    o.a.extend(i.attributes, { title: r.title });
                                });
                            })(R);
                    },
                    getForToolbar: function getForToolbar(t) {
                        return getCollection(t || j);
                    },
                    getForKeyboard: function getForKeyboard(t) {
                        return getCollection(t || V);
                    },
                    getForInputUi: function getForInputUi(t, i) {
                        var r = {},
                            a = 0,
                            s = this;
                        function formatSymbolsGroup(t, r) {
                            var a = {};
                            return (
                                ((r = r || F[t]).render_latex = !o.a.isBoolean(r.render_latex) || r.render_latex),
                                r.value && ((r = o.a.clone(r)), (a = s.calculateGroupDimensions(r.value, i))),
                                ("Keyboard" !== r.name && "Handwriting" !== r.name) || ((a.columnCount = 4), (a.hasSymbols = !0), (a.processedSymbols = []), (a.custom = !0)),
                                (r.value = a.processedSymbols),
                                (r.hasSymbols = a.hasSymbols),
                                (r.rowCount = a.rowCount),
                                (r.columnCount = a.hasSymbols ? a.columnCount : 0),
                                (r.custom = a.custom),
                                r
                            );
                        }
                        return (
                            o.a.each(t, function (t) {
                                if (
                                    (o.a.isString(t) && F[t] && s.isAvailable(F[t], i) && (r[t] = formatSymbolsGroup(t)),
                                    o.a.isObject(t) && t.label && o.a.isArray(t.value) && (r["custom" + ++a] = formatSymbolsGroup(void 0, t)),
                                    o.a.isString(t) && "master" === t)
                                ) {
                                    var u = { id: ["=", "\\response"], style: ["lrn-btn-grid-num", "lrn-btn-grid-operator", "lrn-btn-grid-dir"] },
                                        m = o.a.reduce(
                                            R,
                                            function (t, i) {
                                                var r = i.id,
                                                    a = i.style;
                                                return r && -1 === u.id.indexOf(r) && -1 === u.style.indexOf(a) && t.push(r), t;
                                            },
                                            []
                                        );
                                    r.master = formatSymbolsGroup(null, { title: "All Symbols", label: "All Symbols", value: m });
                                }
                            }),
                            r
                        );
                    },
                    getForInputNumberPad: function getForInputNumberPad(t) {
                        return this.calculateGroupDimensions(t);
                    },
                    calculateGroupDimensions: function calculateGroupDimensions(t, i) {
                        var r,
                            a = [],
                            s = 1,
                            u = 1,
                            m = 0,
                            v = !1,
                            q = this;
                        return (
                            o.a.each(t, function (t, r) {
                                var R;
                                o.a.isString(t) ? (R = T.get(t)) : o.a.isObject(t) && t.symbol && (R = T.get(t.symbol)) && R.set(o.a.omit(t, "symbol")),
                                    t.length > 0 && ((v = !0), (m = r + 1), u > s && (s = u)),
                                    u % 4 == 0 ? (u = 1) : u++,
                                    R && q.isAvailable(R.attributes, i) && a.push(R);
                            }),
                            (r = Math.ceil(m / 4)),
                            { processedSymbols: a, columnCount: s, rowCount: r, hasSymbols: v }
                        );
                    },
                    isAvailable: function isAvailable(t, i) {
                        var r = i ? "chemistry" : "math";
                        return !o.a.isArray(t.contexts) || o.a.contains(t.contexts, r);
                    },
                    getShortcutsMap: function getShortcutsMap() {
                        return this.getNewerFormatMasterCollection(), T.getShortcutsMap();
                    },
                    getNewerFormatMasterCollection: getNewerFormatMasterCollection,
                });
        },
        143: function (t, i, r) {
            "use strict";
            var a = {};
            function clear(t) {
                var i = a[t];
                i && (clearTimeout(i), delete a[t]);
            }
            i.a = {
                start: function start(t, i) {
                    var r = arguments,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                    clear(t);
                    var s = function repeatFn() {
                        i(), start.apply(null, r);
                    };
                    a[t] = setTimeout(s, o);
                },
                clear: clear,
            };
        },
        145: function (t, i, r) {
            "use strict";
            var a = r(0),
                o = r.n(a),
                s = function filterUnfocusableElements(t) {
                    return o.a.filter(t, function (t) {
                        return !o.a.isNull(t) && !t.disabled && t.offsetWidth > 0 && t.offsetHeight > 0;
                    });
                },
                u = {
                    left: function left(t) {
                        if (t) {
                            t = s(t);
                            var i = this.getFocusedElement(t).index;
                            i ? i > 0 && t[i - 1].focus() : t[t.length - 1].focus();
                        }
                    },
                    top: function top(t) {
                        t = s(t);
                        var i = this.getFocusedElement(t).element;
                        if (i) {
                            var r = i.getBoundingClientRect(),
                                a = o.a.findLastIndex(t, function (t) {
                                    var i = t.getBoundingClientRect();
                                    if (i.top < r.top && i.left <= r.left) return !0;
                                });
                            a >= 0 && t[a].focus();
                        }
                    },
                    right: function right(t) {
                        t = s(t);
                        var i = this.getFocusedElement(t).index;
                        t && !1 !== i && (i === t.length - 1 ? t[0].focus() : i < t.length - 1 && t[i + 1].focus());
                    },
                    bottom: function bottom(t) {
                        t = s(t);
                        var i = this.getFocusedElement(t).element;
                        if (i) {
                            var r = i.getBoundingClientRect(),
                                a = o.a.findIndex(t, function (t) {
                                    var i = t.getBoundingClientRect();
                                    if (i.top > r.top && i.left >= r.left) return !0;
                                });
                            a >= 0 && t[a].focus();
                        }
                    },
                    getFocusedElement: function getFocusedElement(t) {
                        var i = document.activeElement,
                            r = t.indexOf(i);
                        return r < 0 ? {} : { element: i, index: r };
                    },
                };
            i.a = u;
        },
        155: function (t, i, r) {
            "use strict";
            r.d(i, "a", function () {
                return $;
            });
            var a = r(0),
                o = r.n(a),
                s = r(125),
                u = r.n(s),
                m = r(145),
                v = r(139),
                T = r(143),
                q = r(133),
                R = r(130);
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
            function _classCallCheck(t, i) {
                if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(t, i) {
                for (var r = 0; r < i.length; r++) {
                    var a = i[r];
                    (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
            }
            function _createClass(t, i, r) {
                return i && _defineProperties(t.prototype, i), r && _defineProperties(t, r), t;
            }
            function _inherits(t, i) {
                if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(i && i.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), i && _setPrototypeOf(t, i);
            }
            function _setPrototypeOf(t, i) {
                return (_setPrototypeOf =
                    Object.setPrototypeOf ||
                    function _setPrototypeOf(t, i) {
                        return (t.__proto__ = i), t;
                    })(t, i);
            }
            function _createSuper(t) {
                var i = (function _isNativeReflectConstruct() {
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
                    var r,
                        a = _getPrototypeOf(t);
                    if (i) {
                        var o = _getPrototypeOf(this).constructor;
                        r = Reflect.construct(a, arguments, o);
                    } else r = a.apply(this, arguments);
                    return _possibleConstructorReturn(this, r);
                };
            }
            function _possibleConstructorReturn(t, i) {
                return !i || ("object" !== _typeof(i) && "function" != typeof i) ? _assertThisInitialized(t) : i;
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
            function _defineProperty(t, i, r) {
                return i in t ? Object.defineProperty(t, i, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[i] = r), t;
            }
            var M = q.a.UP,
                j = q.a.DOWN,
                F = q.a.ESCAPE,
                U = q.a.TAB,
                V = q.a.SHIFT;
            function getLabelContent(t, i) {
                var r = t;
                return o.a.isFunction(t) && (r = t(i)), o.a.isString(r) ? r : "";
            }
            function Button(t) {
                var i = t.title,
                    r = t.icon,
                    a = t.label,
                    s = t.value,
                    m = t.index,
                    v = t.selectedIndex,
                    T = t.selectOption,
                    q = t.onKeyDown,
                    R = t.cacheButton,
                    M = v === m ? "lrn_selected" : "",
                    j = getLabelContent(a, s);
                return u.a.createElement(
                    "button",
                    {
                        title: i,
                        "aria-label": i,
                        className: "lrn_btn lrn_dropdown_option ".concat(M),
                        type: "button",
                        unselectable: "on",
                        tabIndex: "0",
                        onClick: function onClick() {
                            return T(m);
                        },
                        onKeyDown: q,
                        ref: function ref(t) {
                            return R && R(t);
                        },
                    },
                    (function getIcon() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            i = o.a.isString(t.className) ? t.className : "",
                            r = o.a.isString(t.content) ? t.content : "";
                        return i || r ? u.a.createElement("span", { className: "lrn_icon ".concat(i), dangerouslySetInnerHTML: { __html: r } }) : null;
                    })(r),
                    u.a.createElement("span", { className: "lrn_content", dangerouslySetInnerHTML: { __html: j } })
                );
            }
            function ScrollingIndicator(t) {
                var i = t.scrollStart,
                    r = t.scrollEnd;
                return u.a.createElement("div", { className: "lrn_scrolling_indicator", onMouseEnter: i, onMouseLeave: r }, u.a.createElement("span", { className: "lrn_caret" }));
            }
            function Viewport(t) {
                var i = t.children,
                    r = t.setEl,
                    a = t.setContentEl,
                    o = t.viewportStyle,
                    s = (void 0 === o ? {} : o).height;
                return u.a.createElement("div", { className: "lrn_viewport", style: { height: s }, ref: r }, u.a.createElement("div", { className: "lrn_viewport_content", ref: a }, i));
            }
            var W = (function (t) {
                    _inherits(DropdownMenu, t);
                    var i = _createSuper(DropdownMenu);
                    function DropdownMenu(t) {
                        var r;
                        return (
                            _classCallCheck(this, DropdownMenu),
                            _defineProperty(_assertThisInitialized((r = i.call(this, t))), "MIN_VIEWPORT_SIZE", 150),
                            _defineProperty(_assertThisInitialized(r), "VIEWPORT_GAP", 50),
                            _defineProperty(_assertThisInitialized(r), "buttons", []),
                            _defineProperty(_assertThisInitialized(r), "state", { viewport: null, scrollTop: 0 }),
                            _defineProperty(_assertThisInitialized(r), "focusIndex", 0),
                            _defineProperty(_assertThisInitialized(r), "cacheButton", function (t) {
                                t && r.buttons.push(t);
                            }),
                            _defineProperty(_assertThisInitialized(r), "requestToClose", function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    i = r.props,
                                    a = i.onRequestClose,
                                    o = i.isTabbable,
                                    s = i.timeOfLastToggle,
                                    u = Date.now() - s;
                                u < 200 || (T.a.clear("custom_dropdown"), r._removeAllEvents(), a && a(t), o && (r.focusIndex = 0));
                            }),
                            _defineProperty(_assertThisInitialized(r), "selectOption", function (t) {
                                var i = r.props,
                                    a = i.onChange,
                                    o = i.isTabbable;
                                a && a(t), o && (r.focusIndex = 0);
                            }),
                            _defineProperty(_assertThisInitialized(r), "_onKeyDown", function (t) {
                                var i = _assertThisInitialized(r).buttons,
                                    a = r.props,
                                    s = a.menuOptions,
                                    u = a.isTabbable,
                                    v = t.keyCode;
                                if (
                                    (function isSupportedKey(t) {
                                        return o.a.contains([M, j, F, U, V], t);
                                    })(v)
                                )
                                    if (u) {
                                        if (t.shiftKey && v === V) return;
                                        v !== U || t.shiftKey ? v === U && t.shiftKey && r.focusIndex-- : r.focusIndex++, v === U && r.focusIndex === s.length && r.requestToClose(!0);
                                    } else t.preventDefault(), v === F ? r.requestToClose(!0) : v === M ? m.a.top(i) : v === j && m.a.bottom(i);
                            }),
                            _defineProperty(_assertThisInitialized(r), "_scrollStart", function () {
                                var t = _assertThisInitialized(r),
                                    i = t.viewportEl,
                                    a = t.viewportContentEl;
                                T.a.start("custom_dropdown", function () {
                                    var t = i.scrollTop + 5;
                                    t < a.clientHeight - i.clientHeight && r.setState({ scrollTop: t });
                                });
                            }),
                            _defineProperty(_assertThisInitialized(r), "_scrollEnd", function () {
                                T.a.clear("custom_dropdown");
                            }),
                            (r.useViewport = !!o.a.isUndefined(t.useViewport) || t.useViewport),
                            r
                        );
                    }
                    return (
                        _createClass(DropdownMenu, [
                            {
                                key: "render",
                                value: function render() {
                                    var t = this,
                                        i = this.props,
                                        r = i.menuOptions,
                                        a = i.selectedIndex,
                                        s = i.className,
                                        m = i.renderOption,
                                        v = this.state.viewport,
                                        T = o.a.isString(s) ? s : "",
                                        q = (function () {
                                            if (v) return { height: "".concat(v.height, "px") };
                                        })(),
                                        R = (function getOptions() {
                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = t.menuOptions,
                                                r = void 0 === i ? [] : i,
                                                a = t.selectedIndex,
                                                o = t.selectOption,
                                                s = t.onKeyDown,
                                                m = t.cacheButton,
                                                v = t.renderOption;
                                            return r.map(function (t, i) {
                                                var r = t.title,
                                                    T = t.icon,
                                                    q = t.label,
                                                    R = t.value;
                                                if (v)
                                                    return (
                                                        (t.onClick = function () {
                                                            return o(i);
                                                        }),
                                                        (t.isActive = i === a),
                                                        (t.onKeyDown = function (t) {
                                                            return s(t);
                                                        }),
                                                        v(t)
                                                    );
                                                var M = { key: i, title: r, icon: T, label: q, value: R, index: i, selectedIndex: a, selectOption: o, onKeyDown: s, cacheButton: m };
                                                return u.a.createElement(Button, M);
                                            });
                                        })({ menuOptions: r, selectedIndex: a, selectOption: this.selectOption, onKeyDown: this._onKeyDown, cacheButton: this.cacheButton, renderOption: m });
                                    return u.a.createElement(
                                        "div",
                                        {
                                            ref: function ref(i) {
                                                return (t.el = i);
                                            },
                                            className: "lrn_dropdown_menu ".concat(T),
                                            role: "menu",
                                        },
                                        !this.useViewport && R,
                                        this.useViewport &&
                                            u.a.createElement(
                                                Viewport,
                                                {
                                                    setEl: function setEl(i) {
                                                        return (t.viewportEl = i);
                                                    },
                                                    setContentEl: function setContentEl(i) {
                                                        return (t.viewportContentEl = i);
                                                    },
                                                    viewportStyle: q,
                                                },
                                                R
                                            ),
                                        this.useViewport && q && u.a.createElement(ScrollingIndicator, { scrollStart: this._scrollStart, scrollEnd: this._scrollEnd })
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
                                    var i = this.props,
                                        r = i.isOpen,
                                        a = i.focusToSelectedOption;
                                    if (r && !this._documentEventsAdded) {
                                        var o = this._getSelectedOptionElement();
                                        if ((a && o && o.focus(), this._bindListeners(), this.useViewport)) {
                                            var s = this._getViewport(),
                                                u = { viewport: s, scrollTop: this._getScrollTopByElement(o, s) };
                                            this.state !== u && this.setState(u);
                                        }
                                    } else r || (this._removeAllEvents(), t.isOpen !== r && this.setState({ viewport: null, scrollTop: 0 }));
                                    if (r) {
                                        var m = this.state.scrollTop;
                                        m > 0 && (this.viewportEl.scrollTop = m);
                                    }
                                },
                            },
                            {
                                key: "_getSelectedOptionElement",
                                value: function _getSelectedOptionElement() {
                                    var t = this.buttons,
                                        i = this.props;
                                    if (!o.a.isEmpty(t)) {
                                        var r = i.selectedIndex;
                                        return t[r >= 0 ? r : 0];
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
                                        i = this.el,
                                        r = this.viewportContentEl,
                                        a = i.getBoundingClientRect().top,
                                        o = r.getBoundingClientRect().height,
                                        s = this.VIEWPORT_GAP,
                                        u = this.MIN_VIEWPORT_SIZE,
                                        m = v.a.getViewportDimensions().height - a;
                                    if ((m < o && (t = m < u ? u : m), t)) return { top: a, height: (t -= s) };
                                },
                            },
                            {
                                key: "_getScrollTopByElement",
                                value: function _getScrollTopByElement(t, i) {
                                    if (!t || !i) return 0;
                                    var r = t.getBoundingClientRect(),
                                        a = r.top + r.height - i.top - i.height;
                                    return a > 0 ? a : 0;
                                },
                            },
                        ]),
                        DropdownMenu
                    );
                })(u.a.Component),
                $ = (function (t) {
                    _inherits(Dropdown, t);
                    var i = _createSuper(Dropdown);
                    function Dropdown(t) {
                        var r;
                        _classCallCheck(this, Dropdown),
                            _defineProperty(_assertThisInitialized((r = i.call(this, t))), "toggle", function () {
                                var t = r.state.isOpen,
                                    i = !t,
                                    a = t && !i;
                                r.setState({ isOpen: i, focusToSelectedOption: !0, timeOfLastToggle: Date.now() }), a && r.buttonEl.focus();
                            }),
                            _defineProperty(_assertThisInitialized(r), "open", function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { focusToSelectedOption: !0 };
                                r.setState({ isOpen: !0, focusToSelectedOption: t.focusToSelectedOption });
                            }),
                            _defineProperty(_assertThisInitialized(r), "close", function () {
                                r.setState({ isOpen: !1 });
                            }),
                            _defineProperty(_assertThisInitialized(r), "setSelectedIndex", function (t) {
                                r.state.selectedIndex !== t ? r.setState({ selectedIndex: t, isOpen: !1 }) : r.close();
                            }),
                            _defineProperty(_assertThisInitialized(r), "_onDropdownRequestToClose", function (t) {
                                r.close(), t && r.buttonEl.focus();
                            }),
                            _defineProperty(_assertThisInitialized(r), "_onDropdownOptionChange", function (t) {
                                var i = r.props,
                                    a = i.menuOptions,
                                    o = i.onChange;
                                r.setSelectedIndex(t), r.buttonEl.focus(), o && o({ index: t, value: a[t].value });
                            }),
                            _defineProperty(_assertThisInitialized(r), "_onKeyDown", function (t) {
                                var i = t.keyCode;
                                (r.props.toggleButton || {}).disableArrowKey || (i === M || i === j ? (t.preventDefault(), r.open()) : i === U && t.shiftKey && r._onDropdownRequestToClose());
                            }),
                            _defineProperty(_assertThisInitialized(r), "_onBlur", function () {
                                var t = r.props.onBlur;
                                o.a.isFunction(t) && !r.isOpen() && r.buttonEl !== document.activeElement && t();
                            });
                        var a = t.selectedIndex,
                            s = t.scaleToFit,
                            u = t.isDisabled,
                            m = t.useViewport;
                        return (r.useViewport = !!o.a.isUndefined(m) || m), (r.state = { scaleToFit: s, selectedIndex: o.a.isNumber(a) ? a : -1, isOpen: !1, isDisabled: u, labelStyle: null, timeOfLastToggle: 0 }), r;
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
                                value: function componentDidUpdate(t, i) {
                                    var r = this.props,
                                        a = r.updateComplete,
                                        s = r.renderMain,
                                        u = this.state,
                                        m = u.selectedIndex,
                                        v = u.scaleToFit;
                                    i.selectedIndex !== m
                                        ? (o.a.isFunction(a) && a(), o.a.isFunction(s) && s(m), v && this._updateSelectedLabel())
                                        : m !== this.props.selectedIndex && o.a.isNumber(this.props.selectedIndex) && this.setState({ selectedIndex: this.props.selectedIndex });
                                },
                            },
                            {
                                key: "render",
                                value: function render() {
                                    var t = this,
                                        i = this.state,
                                        r = i.selectedIndex,
                                        a = i.isOpen,
                                        s = i.isDisabled,
                                        m = i.focusToSelectedOption,
                                        v = i.timeOfLastToggle,
                                        T = this.props,
                                        q = T.ariaDescription,
                                        M = T.ariaSelected,
                                        j = T.menuOptions,
                                        F = T.popupClassName,
                                        U = T.containerClass,
                                        V = T.renderMain,
                                        $ = T.renderOption,
                                        Y = T.title,
                                        X = T.isTabbable,
                                        Z = this._getSelectedOption().title || Y,
                                        ee = Object(R.a)(M, { title: Z }),
                                        ie = o.a.isFunction(V) ? V(this.state.selectedIndex) : this._getMainButtonContent(),
                                        ae = ["lrn_btn", "lrn_dropdown_toggle", s ? "lrn_disabled" : ""].join(" "),
                                        le = ["lrn_dropdown", U || "", a ? "lrn_open" : ""].join(" ");
                                    return u.a.createElement(
                                        "div",
                                        { className: le },
                                        u.a.createElement(
                                            "button",
                                            {
                                                "aria-label": ee,
                                                title: Y,
                                                "aria-roledescription": q,
                                                className: ae,
                                                type: "button",
                                                onClick: s ? void 0 : this.toggle,
                                                onKeyDown: s ? void 0 : this._onKeyDown,
                                                onBlur: s ? void 0 : this._onBlur,
                                                ref: function ref(i) {
                                                    return (t.buttonEl = i);
                                                },
                                            },
                                            ie,
                                            u.a.createElement("span", { className: "lrn_caret lrn_caret_right" })
                                        ),
                                        u.a.createElement(W, {
                                            menuOptions: j,
                                            className: F,
                                            selectedIndex: r,
                                            isOpen: a,
                                            timeOfLastToggle: v,
                                            isTabbable: X,
                                            focusToSelectedOption: m,
                                            useViewport: this.useViewport,
                                            onChange: this._onDropdownOptionChange,
                                            onRequestClose: this._onDropdownRequestToClose,
                                            renderOption: $,
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
                                        i = this.state.labelStyle,
                                        r = this._getSelectedOption(),
                                        a = r.label,
                                        o = r.value;
                                    return u.a.createElement("span", {
                                        ref: function ref(i) {
                                            return (t.buttonLabelEl = i);
                                        },
                                        className: "lrn_content",
                                        style: i,
                                        dangerouslySetInnerHTML: { __html: getLabelContent(a, o) },
                                    });
                                },
                            },
                            {
                                key: "_getSelectedOption",
                                value: function _getSelectedOption() {
                                    var t = this.state.selectedIndex,
                                        i = this.props.menuOptions;
                                    return i && i.length > t && t >= 0 ? i[t] : { title: "", label: "" };
                                },
                            },
                            {
                                key: "_updateSelectedLabel",
                                value: function _updateSelectedLabel() {
                                    var t = this.buttonEl,
                                        i = this.buttonLabelEl;
                                    if (t && i) {
                                        var r = t.getBoundingClientRect(),
                                            a = i.getBoundingClientRect(),
                                            o = a.height - r.height,
                                            s = null;
                                        if (o > 0) {
                                            var u = 1 - o / a.height;
                                            s = { transform: "scale(".concat(u, ")"), transformOrigin: "left top" };
                                        }
                                        s !== this.state.labelStyle && this.setState({ labelStyle: s });
                                    }
                                },
                            },
                        ]),
                        Dropdown
                    );
                })(u.a.Component);
        },
        157: function (t, i, r) {
            "use strict";
            var a = r(0),
                o = r.n(a),
                s = r(5),
                u = r.n(s);
            function MathEvents() {}
            var m = {
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
            (MathEvents.prototype = o.a.extend({ EVENT: m }, u.a.Events)), o.a.extend(MathEvents, m), (i.a = MathEvents);
        },
        160: function (t, i, r) {
            "use strict";
            var a = r(5),
                o = r.n(a),
                s = r(0),
                u = r.n(s),
                m = r(50),
                v = ["toggle"],
                T = ["Left", "Right", "Backspace", "÷", "×", "-", "+", "="];
            switch (m.a.getOs()) {
                case "osx":
                    v = ["shift", "opt"];
                    break;
                case "windows":
                case "unix":
                case "linux":
                    v = ["shift", "alt"];
            }
            var q = o.a.Model.extend({
                keysForToggle: v,
                keyForCtrlToggle: "ctrl",
                ariaHiddenSymbols: T,
                defaults: { type: "write" },
                initialize: function initialize() {
                    this.createDisplayableShortcut(), this.on("change:shortcut", this.createDisplayableShortcut, this);
                },
                createDisplayableShortcut: function createDisplayableShortcut() {
                    var t = u.a.clone(this.get("shortcut"));
                    "toggle" === u.a.first(t) && (t = u.a.union(this.keysForToggle, u.a.rest(t, 1))),
                        "ctrl" === u.a.first(t) && (t = u.a.union(["ctrl"], u.a.rest(t))),
                        t && t[0] === this.get("title") && (t = []),
                        this.set("displayableShortcut", t);
                },
                renderLabelAsLatex: function renderLabelAsLatex() {
                    var t = this.get("label_latex");
                    return u.a.isBoolean(t) ? t : this.get("label").indexOf("\\") > -1;
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
                    return u.a.contains(T, t);
                },
            });
            i.a = o.a.Collection.extend({
                model: q,
                get: function get(t) {
                    return (
                        o.a.Collection.prototype.get.apply(this, arguments) ||
                        this.find(function (i) {
                            return u.a.contains(i.get("aliases"), t);
                        })
                    );
                },
                add: function add(t) {
                    this.isUnique(t) && o.a.Collection.prototype.add.apply(this, arguments);
                },
                isUnique: function isUnique(t) {
                    var i = (t.aliases && u.a.union(t.aliases, t.id)) || [];
                    return !this.any(function (r) {
                        return t.id === r.id || u.a.intersection(i, r.get("aliases")).length;
                    });
                },
                getShortcutsMap: function getShortcutsMap() {
                    var t = {};
                    return (
                        this.each(function (i) {
                            var r = i.get("shortcut");
                            "toggle" === u.a.first(r) && (t[r[1]] = i);
                        }),
                        t
                    );
                },
                getGroups: function getGroups() {
                    var t = u.a.unique(this.pluck("group")),
                        i = this;
                    return u.a.map(t, function (t) {
                        return i.where({ group: t });
                    });
                },
                getFirstInEachGroup: function getFirstInEachGroup() {
                    return u.a.map(this.getGroups(), u.a.first);
                },
            });
        },
        163: function (t, i, r) {
            "use strict";
            var a = r(1),
                o = r.n(a),
                s = r(5),
                u = r.n(s),
                m = r(0),
                v = r.n(m),
                T = r(62),
                q = r.n(T),
                R = r(141),
                M = r(157),
                j = r(4),
                F = r(7),
                U = r(50),
                V = r(131),
                W = r(24),
                $ = r(164),
                Y = r.n($),
                X = r(165),
                Z = {
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
                ee = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                ie = R.a.ctrlShortcuts,
                ae = R.a.getShortcutsMap();
            i.a = u.a.View.extend({
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
                template: Y.a,
                initialize: function initialize() {
                    (this.keys = ""),
                        q.a.config({ autoCommands: "lim" }),
                        (this.mathEvents = new M.a()),
                        this.addRenderingLogic(),
                        this.displayLogic.isReadOnly && (this.events = {}),
                        this.render(),
                        this.bindHandwritingEvents(),
                        this.listenTo(this.mathEvents, this.mathEvents.EVENT.MATH_COMMAND, this.enterMath, this),
                        this.listenTo(this.mathEvents, this.mathEvents.EVENT.ESCAPE_UI, this.refocusEditor, this),
                        this.listenTo(this.mathEvents, this.mathEvents.EVENT.ESCAPE_UI_WITHOUT_KEYBOARD, this.refocusEditorWithoutKeyboard, this),
                        this.displayLogic.templateAriaLabel ||
                            ((this.$logger = this.$('[data-lrn-component="logger"]')),
                            (this.dynamicAriaLabel = v.a.debounce(this.dynamicAriaLabel.bind(this), 300)),
                            this.listenTo(this.mathEvents, this.mathEvents.EVENT.UPDATED, this.dynamicAriaLabel, this)),
                        this.listenTo(
                            this.mathEvents,
                            this.mathEvents.EVENT.EXTERNAL_KEY,
                            function (t, i) {
                                var r = o.a.Event(t.type, v.a.pick(t, "type", "keyCode", "metaKey", "shiftKey", "altKey", "which"));
                                this.$("span.lrn_math_editable").trigger(r);
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
                        i = this.mathEvents,
                        r = this.$("span.lrn_math_editable"),
                        a = r.attr("title") || "";
                    function resetState() {
                        r.removeClass("lrn-state-outdated lrn-state-awaiting-update lrn-state-error").attr("title", a);
                    }
                    this.listenTo(i, i.EVENT.CONTENT_OUTDATED, function () {
                        resetState(), r.addClass("lrn-state-outdated");
                    }),
                        this.listenTo(i, i.EVENT.AWAIT_UPDATE, function () {
                            resetState(), r.addClass("lrn-state-awaiting-update");
                        }),
                        this.listenTo(i, i.EVENT.SET_ERROR, function (i) {
                            resetState(), r.addClass("lrn-state-error").attr("title", i), clearTimeout(t), (t = setTimeout(resetState, 5e3));
                        }),
                        this.listenTo(i, i.EVENT.GET_ACTIVE_ID, function (t) {
                            var i = o()(document.activeElement).filter(".lrn_focusable");
                            t((i.length ? i : this.$(".lrn_focusable")).prop("id"));
                        }),
                        this.listenTo(i, i.EVENT.RESET_STATE, resetState);
                },
                bindTextareaListeners: function bindTextareaListeners(t) {
                    var i = this.mathEvents,
                        r = this,
                        a = t[0],
                        o = a.value;
                    (this.textareas = this.textareas || []),
                        this.textareas.push(t),
                        t.on("input.lrn.formulaeditor", function (t) {
                            var s = r.getMathCommand(o, a.value);
                            s && (s.unshift(i.EVENT.MATH_COMMAND), i.trigger.apply(i, s)), (o = a.value);
                        }),
                        t.on("keyup.lrn.formulaeditor", function (t) {
                            var i = r.mathquill.latex();
                            0 === a.value.length && i.length && ((a.value = "a"), (a.selectionStart = 0), (a.selectionEnd = "a".length), (o = a.value));
                        }),
                        t.on("paste.lrn.formulaeditor", function () {
                            r.removeTextareas();
                        });
                },
                clearAndWrite: function clearAndWrite(t) {
                    (t = this.convertDynamicVarsForMathquill(t)), this.mathquill.clear().write(t), this.updateModel();
                },
                editorPressed: function editorPressed(t) {
                    this.mathEvents.trigger(this.mathEvents.EVENT.EDITOR_PRESSED);
                },
                enterMath: function enterMath(t, i, r) {
                    var a = q()(this.getMqEl()),
                        o = r && r.get("extra_commands");
                    window.clearTimeout(this.shortcutKeyTimeout),
                        (this.keys = ""),
                        v.a.isFunction(a[t]) &&
                            (a[t](i),
                            v.a.each(o || [], function (t) {
                                v.a.isFunction(a[t.type]) && a[t.type](t.val);
                            }),
                            this.updateModel());
                },
                getMathCommand: function getMathCommand(t, i) {
                    return i.length === t.length + 1 && 0 === i.indexOf(t) ? ["typedText", i[i.length - 1]] : i.length === t.length - 1 ? ["keystroke", "Backspace"] : void 0;
                },
                getMqEl: function getMqEl() {
                    return this.$("span.lrn_math_editable")[0];
                },
                getValue: function getValue() {
                    var t = this.displayLogic.isReadOnly,
                        i = this.currentEditables || this.options.editables || [],
                        r = this.options.template,
                        a = this.currentValue || this.options.value || r || "";
                    return (
                        this.hasEditableAreas() &&
                            ((i = v.a.clone(i)),
                            (a = r.replace(/{{response}}/g, function () {
                                var r = i.shift() || "";
                                return t && r.length ? " " + r : "\\MathQuillMathField{" + r + "}";
                            }))),
                        (a = this.convertDynamicVarsForMathquill(a))
                    );
                },
                handlePipeSymbol: function handlePipeSymbol() {
                    this.mathEvents.trigger(this.mathEvents.EVENT.MATH_COMMAND, "cmd", "\\abs");
                },
                addMathQuillVarField: function addMathQuillVarField(t) {
                    var i = "\\MathQuillVarField{\\text{" + t + "}}";
                    this.mathquill.write(i), this.updateModel();
                },
                hasEditableAreas: function hasEditableAreas() {
                    var t = this.options.template;
                    return v.a.isString(t) && t.length > 0 && t.indexOf("{{response}}") > -1;
                },
                keyDown: function keyDown(t) {
                    var i,
                        r = Z[t.keyCode],
                        a = this.mathEvents;
                    if (t.shiftKey && t.altKey) return !1;
                    if (r && r.length > 1) {
                        if (
                            (t.shiftKey && "Shift" !== r ? (r = "Shift-" + r) : "Spacebar" === r && (r = "space"),
                            "Tab" === r && (i = V.a.getNextTab(document.activeElement, ["MathJax", "lrn_dropdown_toggle"])) && ((i.originalEvent = t), a.trigger(a.EVENT.TAB_EDITOR, i)),
                            "Shift" === r)
                        ) {
                            if (this.shiftIsPressed) return;
                            a.trigger(a.EVENT.SHIFT_KEY), (this.shiftIsPressed = !0);
                        }
                        a.trigger(a.EVENT.MATH_COMMAND, "no-input", r);
                    }
                    this.updateModel();
                },
                keyPress: function keyPress(t) {
                    var i = t.which || t.keyCode,
                        r = t.key || String.fromCharCode(i),
                        a = this.mathEvents,
                        o = t.metaKey || t.ctrlKey;
                    this.removeTextareas();
                    var s = "\\" === r && !this.options.enableRawLatex;
                    return (
                        !v.a.contains(ee, i) &&
                        ("*" === r && (r = "×"),
                        "$" === r
                            ? (a.trigger(a.EVENT.MATH_COMMAND, "write", "\\$"), !1)
                            : "|" === r
                            ? (this.handlePipeSymbol(), !1)
                            : s
                            ? (this.preventRawLatexBeingEntered(), !1)
                            : ((r = r.replace("\t", "")), o || 1 !== r.length ? void 0 : (V.a.capsLock.correctStatus(t), a.trigger(a.EVENT.MATH_COMMAND, "typedText", r), !1)))
                    );
                },
                keyUp: function keyUp(t) {
                    var i = this.mathEvents,
                        r = Z[t.keyCode];
                    if (
                        (t.altKey &&
                            t.shiftKey &&
                            r &&
                            ((this.keys = this.keys + r),
                            window.clearTimeout(this.shortcutKeyTimeout),
                            window.clearTimeout(this.resetKeyTimeout),
                            !(function noOtherShortcutBeginsWith(t) {
                                return !v.a.find(v.a.keys(ae), function (i) {
                                    return i !== t && 0 === i.indexOf(t);
                                });
                            })(this.keys)
                                ? this.setShortcutKeyTimeout()
                                : this.sendShortcut()),
                        t.ctrlKey && r)
                    ) {
                        var a = v.a.findWhere(ie, { shortcut: r });
                        a && i.trigger(i.EVENT.MATH_COMMAND, a.type, a.val);
                    }
                    t.shiftKey || "Shift" !== r || (i.trigger(i.EVENT.SHIFT_KEY), (this.shiftIsPressed = !1));
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
                        i = this.currentValue,
                        r = this.displayLogic.isReadOnly,
                        a = this.displayLogic.disableInput,
                        s = i.indexOf("\\MathQuillMathField") < 0,
                        u = i.indexOf("\\MathQuillMathField{}") > -1,
                        m = U.a.isTouchDevice(),
                        T = this.options.showInputUi,
                        R = v.a.uniq(this.options.text_blocks || []),
                        M = this.options.persistent_id || "",
                        F = 0,
                        V = this,
                        W = this.getAriaLabel();
                    this.mathquill && (this.mathEvents.trigger(this.mathEvents.EVENT.EDITOR_BLURRED), this.mathquill.revert()),
                        r || a
                            ? ((this.mathquill = q.a.InertMath(this.getMqEl(), { disableItalics: this.options.disableItalics, maxDepth: this.MAX_MATH_DEPTH })),
                              this.displayLogic.templateAriaLabel || (this.$('[data-lrn-component="logger"]').removeAttr("aria-live").removeAttr("aria-hidden"), this.dynamicAriaLabel()))
                            : ((this.mathquill = q.a[s ? "MathField" : "StaticMathWithEditables"](this.getMqEl(), {
                                  handlers: {},
                                  substituteTextarea: function substituteTextarea() {
                                      var t = m && T ? "span" : "textarea",
                                          i = o()("<" + t + ">").attr({ tabindex: "0", class: "lrn_focusable", id: "focusable" + F++ + M });
                                      if (("textarea" === t && (i.attr({ "aria-label": W, autocomplete: "off", autocapitalize: "none" }), V.bindTextareaListeners(i)), i.length > 0)) return i[0];
                                  },
                                  unItalicizedTextCmds: R,
                                  disableItalics: this.options.disableItalics,
                                  maxDepth: this.MAX_MATH_DEPTH,
                              })),
                              this.$(".lrn_focusable").eq(0).attr("tabindex", "0"));
                    try {
                        this.mathquill.latex(i);
                    } catch (i) {
                        t = !0;
                    }
                    r || a || !(i.length > 0) || "" !== this.mathquill.latex() || (!s && u) || (t = !0),
                        t && j.a.exception({ code: 10023, detail: i }),
                        s || (this.$(".mq-inner-editable").addClass("lrn_bordered_mathinput"), this.$(".mq-selectable").attr("aria-hidden", !0)),
                        this.$("span[mathquill-command-id]").each(function (t, i) {
                            var r = o()(i);
                            !r.hasClass("mq-non-leaf") && !r.hasClass("mq-editable-field") && r.attr("aria-hidden", !0);
                        }),
                        this.$(".mq-sqrt-prefix, var, .mq-paren").attr("aria-hidden", !0),
                        this.setResponseSizing();
                },
                onAttach: function onAttach() {
                    var t = this;
                    Object(W.a)(this.$el, function () {
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
                    var i = "focusin" === t.type;
                    o()(t.currentTarget).closest(".lrn_bordered_mathinput").toggleClass("lrn_focused", i), F.a.isAppleWebKit && F.a.isMobile && V.a.toggleBackgroundClickable(i);
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
                            return o()(this).prop("id");
                        })
                        .get();
                    return this.removeTextareas(), u.a.View.prototype.remove.call(this), this.mathEvents.trigger(this.mathEvents.EVENT.EDITOR_REMOVED, t), this;
                },
                removeTextareas: function removeTextareas() {
                    this.textareas &&
                        (v()(this.textareas).each(function (t) {
                            t.off(".lrn.formulaeditor");
                        }),
                        delete this.textareas);
                },
                render: function render() {
                    return (this.currentValue = this.getValue()), this.$el.html(this.template({ displayLogic: this.displayLogic })), this.mathquillify(), o.a.contains(document, this.el) && this.onAttach(), this;
                },
                sendShortcut: function sendShortcut() {
                    var t = ae[this.keys],
                        i = this.mathEvents;
                    return !(!t || !i.trigger(i.EVENT.MATH_COMMAND, t.get("type"), t.get("val"), t));
                },
                setResponseSizing: function setResponseSizing() {
                    var t = this.options.response_container,
                        i = this.options.response_containers,
                        r = this.hasEditableAreas(),
                        a = this;
                    function resizeBlock(t, i) {
                        var r = !1;
                        i && i.width && (t.css("min-width", i.width), (r = !0)), i && i.height && (t.css("min-height", i.height), (r = !0)), r && (t.css("display", "inline-block"), a.mathquill.reflow());
                    }
                    !r || !t || (i && i.length) || (i = [t]),
                        r && v.a.isArray(i)
                            ? this.$(".mq-inner-editable .mq-root-block").each(function (r) {
                                  var a = i[r] || t;
                                  resizeBlock(o()(this), a);
                              })
                            : t && (resizeBlock(this.$el, t), t.height && o()(this.getMqEl()).css("min-height", t.height));
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
                    var t = "ie" === F.a.browser && F.a.version <= 8 ? 50 : 0,
                        i = this;
                    v.a.delay(function () {
                        var t = q()(i.getMqEl()),
                            r = i.convertDynamicVarsFromMathquill(t.latex()),
                            a = (t.editables && t.editables()) || [];
                        i.currentValue !== r &&
                            ((i.currentValue = r),
                            (i.currentEditables = a.map(function (t) {
                                return i.convertDynamicVarsFromMathquill(t.latex);
                            })),
                            i.mathEvents.trigger(i.mathEvents.EVENT.UPDATED, r, i.currentEditables));
                    }, t);
                },
                dynamicAriaLabel: function dynamicAriaLabel() {
                    var t = this;
                    if (!this.options.disableSpokenmathUserInputs) {
                        var i = this.getValue();
                        X.a.process(i).then(function (i) {
                            t.$logger.text(i), t.mathEvents.trigger(t.mathEvents.EVENT.EDITOR_SPOKENMATH_UPDATED, i);
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
        165: function (t, i, r) {
            "use strict";
            r.d(i, "a", function () {
                return v;
            });
            var a = r(0),
                o = r.n(a),
                s = r(3),
                u = r(13);
            function _classCallCheck(t, i) {
                if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(t, i) {
                for (var r = 0; r < i.length; r++) {
                    var a = i[r];
                    (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
            }
            var m = "spokenmathWorker";
            var v = new ((function () {
                function SingletonWorker(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    _classCallCheck(this, SingletonWorker),
                        (this._loading = !1),
                        (this._collections = []),
                        (this._resolveCollections = this._resolveCollections.bind(this)),
                        (this.getPostMessage = i.getPostMessage.bind(this)),
                        (this.processReceivedMessage = i.processReceivedMessage.bind(this));
                }
                return (
                    (function _createClass(t, i, r) {
                        return i && _defineProperties(t.prototype, i), r && _defineProperties(t, r), t;
                    })(SingletonWorker, [
                        {
                            key: "process",
                            value: function process(t) {
                                var i = this,
                                    r = this._collections;
                                return new s.default(function (a) {
                                    r.push({ data: t, resolve: a }), i._loading || i._loadWorker();
                                });
                            },
                        },
                        {
                            key: "_loadWorker",
                            value: function _loadWorker() {
                                var t = this;
                                (this._loading = !0),
                                    (function loadWorker(t) {
                                        return new s.default(function (i) {
                                            u.a
                                                .getExposedExternalBundle(t)()
                                                .then(function (t) {
                                                    i(t);
                                                });
                                        });
                                    })(m).then(function (i) {
                                        var r = new i(),
                                            a = t._collections,
                                            s = o.a.pluck(a, "data");
                                        r.postMessage(t.getPostMessage(s)),
                                            r.addEventListener("message", function (i) {
                                                var o = i.data;
                                                r.terminate(), (t._loading = !1), t._resolveCollections(t.processReceivedMessage(o)), a.length && t._loadWorker();
                                            });
                                    });
                            },
                        },
                        {
                            key: "_resolveCollections",
                            value: function _resolveCollections() {
                                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i = this._collections; t.length && i.length; ) {
                                    var r = i.shift(),
                                        a = r.resolve;
                                    a(t.shift());
                                }
                            },
                        },
                    ]),
                    SingletonWorker
                );
            })())(m, {
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
                                    var i = t.get("style") || "lrn-btn-grid-sym";
                                    (__p +=
                                        '<button type="button"class="' +
                                        (null == (__t = t.isPlaceholder() ? "lrn-btn-placeholder" : "lrn_btn_grid " + i) ? "" : __t) +
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
                            _.each(symbolGroups, function (t, i) {
                                if (((__p += ""), t.value.length)) {
                                    (__p += '<div class="lrn-formula-keyboard-page lrn-keyboard-wrapper-' + (null == (__t = t.columnCount) ? "" : __t) + '-columns" data-symbol-group="' + (null == (__t = i) ? "" : __t) + '">'),
                                        "master" === i && (__p += '<div class="lrn-formula-keyboard-mask">');
                                    var r = 1,
                                        a = 0;
                                    _.each(t.value, function (i) {
                                        (__p += ""),
                                            a < t.rowCount &&
                                                ((__p += ""),
                                                r <= t.columnCount &&
                                                    ((__p +=
                                                        '<button aria-label="' +
                                                        (null == (__t = i.get("title") || "") ? "" : __t) +
                                                        '"type="button"class="' +
                                                        (null == (__t = i.isPlaceholder() ? " lrn-btn-placeholder " : "lrn_btn_grid") ? "" : __t) +
                                                        (null == (__t = i.isFunctional() ? " lrn-btn-grid-sym-functional" : "") ? "" : __t) +
                                                        (null == (__t = i.hasOwnStyle() ? " " + i.get("style") : " lrn-btn-grid-sym") ? "" : __t) +
                                                        '"data-symbol-cid="' +
                                                        (null == (__t = i.cid) ? "" : _.escape(__t)) +
                                                        '"data-symbol-id="' +
                                                        (null == (__t = i.get("id")) ? "" : _.escape(__t)) +
                                                        '"data-mq-command="' +
                                                        (null == (__t = i.get("type")) ? "" : _.escape(__t)) +
                                                        '"data-mq-value="' +
                                                        (null == (__t = i.get("val")) ? "" : _.escape(__t)) +
                                                        '"tabindex="-1"'),
                                                    _.isArray(i.get("displayableShortcut")) &&
                                                        ((__p += ""),
                                                        showHints && (__p += 'title="' + (null == (__t = i.get("title")) ? "" : _.escape(__t)) + '"'),
                                                        (__p += 'data-shortcut="' + (null == (__t = i.get("displayableShortcut").join(" + ")) ? "" : _.escape(__t)) + '"')),
                                                    (__p += ">"),
                                                    i.isFunctional()
                                                        ? (__p +=
                                                              '<span aria-hidden="true" class="' +
                                                              (null == (__t = i.get("key_style")) ? "" : _.escape(__t)) +
                                                              '"></span><span class="sr-only">' +
                                                              (null == (__t = i.get("label")) ? "" : _.escape(__t)) +
                                                              "</span>")
                                                        : i.renderLabelAsLatex()
                                                        ? (__p += '<span class="mathquill-embedded-latex">' + (null == (__t = i.get("label")) ? "" : _.escape(__t)) + "</span>")
                                                        : (__p +=
                                                              '<span class="lrn-btn-grid-sym__label" data-symbol-id="' +
                                                              (null == (__t = i.get("val")) ? "" : _.escape(__t)) +
                                                              '">' +
                                                              (null == (__t = i.get("label")) ? "" : _.escape(__t)) +
                                                              "</span>"),
                                                    (__p += "</button>")),
                                                r === t.columnCount && a++,
                                                4 === r ? (r = 1) : r++);
                                    }),
                                        (__p += ""),
                                        "master" === i && (__p += "</div>"),
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
                        _.each(symbolGroups, function (t, i) {
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
                            _.each(lineColourData.colours, function (t, i) {
                                (__p += ""),
                                    i < lineColourData.limit &&
                                        ((__p += '<li class="lrn_btn_color_selector '),
                                        0 == i && (__p += "lrn_selected "),
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
                                for (var i = 0, r = t.length; i < r; i++) this[t[i]] = i;
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
                                CanvasRenderingContext2D = function (t, i) {
                                    (this.canvas = t), (this._swf = i), (this._canvasId = i.id.slice(8)), this._initialize(), (this._gradientPatternId = 0), (this._direction = ""), (this._font = "");
                                    var r = this;
                                    setInterval(function () {
                                        0 === lock[r._canvasId] && r._executeCommand();
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
                                        var i = t.pop();
                                        (this.globalAlpha = i[0]),
                                            (this.globalCompositeOperation = i[1]),
                                            (this.strokeStyle = i[2]),
                                            (this.fillStyle = i[3]),
                                            (this.lineWidth = i[4]),
                                            (this.lineCap = i[5]),
                                            (this.lineJoin = i[6]),
                                            (this.miterLimit = i[7]),
                                            (this.shadowOffsetX = i[8]),
                                            (this.shadowOffsetY = i[9]),
                                            (this.shadowBlur = i[10]),
                                            (this.shadowColor = i[11]),
                                            (this.font = i[12]),
                                            (this.textAlign = i[13]),
                                            (this.textBaseline = i[14]);
                                    }
                                    this._queue.push(properties.restore);
                                },
                                scale: function (t, i) {
                                    this._queue.push(properties.scale, t, i);
                                },
                                rotate: function (t) {
                                    this._queue.push(properties.rotate, t);
                                },
                                translate: function (t, i) {
                                    this._queue.push(properties.translate, t, i);
                                },
                                transform: function (t, i, r, a, o, s) {
                                    this._queue.push(properties.transform, t, i, r, a, o, s);
                                },
                                setTransform: function (t, i, r, a, o, s) {
                                    this._queue.push(properties.setTransform, t, i, r, a, o, s);
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
                                createLinearGradient: function (t, i, r, a) {
                                    return (isFinite(t) && isFinite(i) && isFinite(r) && isFinite(a)) || throwException(NOT_SUPPORTED_ERR), this._queue.push(properties.createLinearGradient, t, i, r, a), new CanvasGradient(this);
                                },
                                createRadialGradient: function (t, i, r, a, o, s) {
                                    return (
                                        (isFinite(t) && isFinite(i) && isFinite(r) && isFinite(a) && isFinite(o) && isFinite(s)) || throwException(NOT_SUPPORTED_ERR),
                                        (r < 0 || s < 0) && throwException(INDEX_SIZE_ERR),
                                        this._queue.push(properties.createRadialGradient, t, i, r, a, o, s),
                                        new CanvasGradient(this)
                                    );
                                },
                                createPattern: function (t, i) {
                                    t || throwException(TYPE_MISMATCH_ERR);
                                    var r,
                                        a = t.tagName,
                                        o = this._canvasId;
                                    if (a)
                                        if ("img" === (a = a.toLowerCase())) r = t.getAttribute("src", 2);
                                        else {
                                            if (a === CANVAS || "video" === a) return;
                                            throwException(TYPE_MISMATCH_ERR);
                                        }
                                    else t.src ? (r = t.src) : throwException(TYPE_MISMATCH_ERR);
                                    return (
                                        "repeat" !== i && "no-repeat" !== i && "repeat-x" !== i && "repeat-y" !== i && "" !== i && i !== NULL && throwException(SYNTAX_ERR),
                                        this._queue.push(properties.createPattern, encodeXML(r), i),
                                        !images[o][r] && isReady[o] && (this._executeCommand(), ++lock[o], (images[o][r] = !0)),
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
                                clearRect: function (t, i, r, a) {
                                    this._queue.push(properties.clearRect, t, i, r, a);
                                },
                                fillRect: function (t, i, r, a) {
                                    this._setCompositing(), this._setShadows(), this._setFillStyle(), this._queue.push(properties.fillRect, t, i, r, a);
                                },
                                strokeRect: function (t, i, r, a) {
                                    this._setCompositing(), this._setShadows(), this._setStrokeStyle(), this._setLineStyles(), this._queue.push(properties.strokeRect, t, i, r, a);
                                },
                                beginPath: function () {
                                    this._queue.push(properties.beginPath);
                                },
                                closePath: function () {
                                    this._queue.push(properties.closePath);
                                },
                                moveTo: function (t, i) {
                                    this._queue.push(properties.moveTo, t, i);
                                },
                                lineTo: function (t, i) {
                                    this._queue.push(properties.lineTo, t, i);
                                },
                                quadraticCurveTo: function (t, i, r, a) {
                                    this._queue.push(properties.quadraticCurveTo, t, i, r, a);
                                },
                                bezierCurveTo: function (t, i, r, a, o, s) {
                                    this._queue.push(properties.bezierCurveTo, t, i, r, a, o, s);
                                },
                                arcTo: function (t, i, r, a, o) {
                                    o < 0 && isFinite(o) && throwException(INDEX_SIZE_ERR), this._queue.push(properties.arcTo, t, i, r, a, o);
                                },
                                rect: function (t, i, r, a) {
                                    this._queue.push(properties.rect, t, i, r, a);
                                },
                                arc: function (t, i, r, a, o, s) {
                                    r < 0 && isFinite(r) && throwException(INDEX_SIZE_ERR), this._queue.push(properties.arc, t, i, r, a, o, s ? 1 : 0);
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
                                isPointInPath: function (t, i) {},
                                _setFontStyles: function () {
                                    var t = this._queue;
                                    if (this._font !== this.font)
                                        try {
                                            var i = spans[this._canvasId];
                                            i.style.font = this._font = this.font;
                                            var r = i.currentStyle,
                                                a = i.offsetHeight,
                                                o = [r.fontStyle, r.fontWeight, a, r.fontFamily].join(" ");
                                            t.push(properties.font, o);
                                        } catch (t) {}
                                    this._textAlign !== this.textAlign && ((this._textAlign = this.textAlign), t.push(properties.textAlign, this._textAlign)),
                                        this._textBaseline !== this.textBaseline && ((this._textBaseline = this.textBaseline), t.push(properties.textBaseline, this._textBaseline)),
                                        this._direction !== this.canvas.currentStyle.direction && ((this._direction = this.canvas.currentStyle.direction), t.push(properties.direction, this._direction));
                                },
                                fillText: function (t, i, r, a) {
                                    this._setCompositing(), this._setFillStyle(), this._setShadows(), this._setFontStyles(), this._queue.push(properties.fillText, encodeXML(t), i, r, a === undefined ? 1 / 0 : a);
                                },
                                strokeText: function (t, i, r, a) {
                                    this._setCompositing(), this._setStrokeStyle(), this._setShadows(), this._setFontStyles(), this._queue.push(properties.strokeText, encodeXML(t), i, r, a === undefined ? 1 / 0 : a);
                                },
                                measureText: function (t) {
                                    var i = spans[this._canvasId];
                                    try {
                                        i.style.font = this.font;
                                    } catch (t) {}
                                    return (i.innerText = ("" + t).replace(/[ \n\f\r]/g, "\t")), new TextMetrics(i.offsetWidth);
                                },
                                drawImage: function (t, i, r, a, o, s, u, m, v) {
                                    t || throwException(TYPE_MISMATCH_ERR);
                                    var T,
                                        q = t.tagName,
                                        R = arguments.length,
                                        M = this._canvasId;
                                    if (q)
                                        if ("img" === (q = q.toLowerCase())) T = t.getAttribute("src", 2);
                                        else {
                                            if (q === CANVAS || "video" === q) return;
                                            throwException(TYPE_MISMATCH_ERR);
                                        }
                                    else t.src ? (T = t.src) : throwException(TYPE_MISMATCH_ERR);
                                    if ((this._setCompositing(), this._setShadows(), (T = encodeXML(T)), 3 === R)) this._queue.push(properties.drawImage, R, T, i, r);
                                    else if (5 === R) this._queue.push(properties.drawImage, R, T, i, r, a, o);
                                    else {
                                        if (9 !== R) return;
                                        (0 !== a && 0 !== o) || throwException(INDEX_SIZE_ERR), this._queue.push(properties.drawImage, R, T, i, r, a, o, s, u, m, v);
                                    }
                                    !images[M][T] && isReady[M] && (this._executeCommand(), ++lock[M], (images[M][T] = !0));
                                },
                                createImageData: function () {},
                                getImageData: function (t, i, r, a) {},
                                putImageData: function (t, i, r, a, o, s, u) {},
                                loadImage: function (t, i, r) {
                                    var a,
                                        o = t.tagName,
                                        s = this._canvasId;
                                    o ? "img" === o.toLowerCase() && (a = t.getAttribute("src", 2)) : t.src && (a = t.src),
                                        a && !images[s][a] && ((i || r) && (callbacks[s][a] = [t, i, r]), this._queue.push(properties.drawImage, 1, encodeXML(a)), isReady[s] && (this._executeCommand(), ++lock[s], (images[s][a] = !0)));
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
                                _resize: function (t, i) {
                                    this._executeCommand(), this._initialize(), t > 0 && (this._swf.width = t), i > 0 && (this._swf.height = i), this._queue.push(properties.resize, t, i);
                                },
                            };
                            var CanvasGradient = function (t) {
                                (this._ctx = t), (this.id = t._gradientPatternId++);
                            };
                            CanvasGradient.prototype = {
                                addColorStop: function (t, i) {
                                    (isNaN(t) || t < 0 || t > 1) && throwException(INDEX_SIZE_ERR), this._ctx._queue.push(properties.addColorStop, this.id, t, i);
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
                                    for (var t = document.getElementsByTagName(CANVAS), i = 0, r = t.length; i < r; ++i) FlashCanvas.initElement(t[i]);
                                }
                            }
                            function onFocus() {
                                var t = event.srcElement,
                                    i = t.parentNode;
                                t.blur(), i.focus();
                            }
                            function onPropertyChange() {
                                var t = event.propertyName;
                                if ("width" === t || "height" === t) {
                                    var i = event.srcElement,
                                        r = i[t],
                                        a = parseInt(r, 10);
                                    (isNaN(a) || a < 0) && (a = "width" === t ? 300 : 150), r === a ? ((i.style[t] = a + "px"), i.getContext("2d")._resize(i.width, i.height)) : (i[t] = a);
                                }
                            }
                            function onUnload() {
                                for (var t in (window.detachEvent(ON_UNLOAD, onUnload), canvases)) {
                                    var i,
                                        r = canvases[t],
                                        a = r.firstChild;
                                    for (i in a) "function" == typeof a[i] && (a[i] = NULL);
                                    for (i in r) "function" == typeof r[i] && (r[i] = NULL);
                                    a.detachEvent(ON_FOCUS, onFocus), r.detachEvent(ON_PROPERTY_CHANGE, onPropertyChange);
                                }
                                (window[CANVAS_RENDERING_CONTEXT_2D] = NULL), (window[CANVAS_GRADIENT] = NULL), (window[CANVAS_PATTERN] = NULL), (window[FLASH_CANVAS] = NULL), (window[G_VML_CANVAS_MANAGER] = NULL);
                            }
                            var FlashCanvas = {
                                setPath: function (t) {
                                    SWF_URL = (BASE_URL = t) + "flashcanvas.swf";
                                },
                                initElement: function (t) {
                                    if (t.getContext) return t;
                                    var i = getUniqueId(),
                                        r = OBJECT_ID_PREFIX + i;
                                    (isReady[i] = !1),
                                        (images[i] = {}),
                                        (lock[i] = 1),
                                        (callbacks[i] = {}),
                                        setCanvasSize(t),
                                        (t.innerHTML =
                                            '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' +
                                            location.protocol +
                                            '//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="' +
                                            r +
                                            '"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id=' +
                                            r +
                                            '"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>'),
                                        (canvases[i] = t);
                                    var a = t.firstChild;
                                    spans[i] = t.lastChild;
                                    var o = document.body.contains;
                                    if (o(t)) a.movie = SWF_URL;
                                    else
                                        var s = setInterval(function () {
                                            o(t) && (clearInterval(s), (a.movie = SWF_URL));
                                        }, 0);
                                    ("BackCompat" !== document.compatMode && window.XMLHttpRequest) || (spans[i].style.overflow = "hidden");
                                    var u = new CanvasRenderingContext2D(t, a);
                                    return (
                                        (t.getContext = function (t) {
                                            return "2d" === t ? u : NULL;
                                        }),
                                        (t.toDataURL = function (t, i) {
                                            return (
                                                "image/jpeg" === ("" + t).replace(/[A-Z]+/g, toLowerCase) ? u._queue.push(properties.toDataURL, t, "number" == typeof i ? i : "") : u._queue.push(properties.toDataURL, t), u._executeCommand()
                                            );
                                        }),
                                        a.attachEvent(ON_FOCUS, onFocus),
                                        t
                                    );
                                },
                                saveImage: function (t) {
                                    t.firstChild.saveImage();
                                },
                                setOptions: function (t) {},
                                trigger: function (t, i) {
                                    canvases[t].fireEvent("on" + i);
                                },
                                unlock: function (t, i, r) {
                                    var a, o, s, u, m, v, T;
                                    lock[t] && --lock[t],
                                        i === undefined
                                            ? ((o = (a = canvases[t]).firstChild),
                                              setCanvasSize(a),
                                              (s = a.width),
                                              (u = a.height),
                                              (a.style.width = s + "px"),
                                              (a.style.height = u + "px"),
                                              s > 0 && (o.width = s),
                                              u > 0 && (o.height = u),
                                              o.resize(s, u),
                                              a.attachEvent(ON_PROPERTY_CHANGE, onPropertyChange),
                                              (isReady[t] = !0),
                                              "function" == typeof a.onload &&
                                                  setTimeout(function () {
                                                      a.onload();
                                                  }, 0))
                                            : (m = callbacks[t][i]) && ((v = m[0]), (T = m[1 + r]), delete callbacks[t][i], "function" == typeof T && T.call(v));
                                },
                            };
                            function getScriptUrl() {
                                var t = document.getElementsByTagName("script"),
                                    i = t[t.length - 1];
                                return document.documentMode >= 8 ? i.src : i.getAttribute("src", 4);
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
                                var i = parseInt(t.width, 10),
                                    r = parseInt(t.height, 10);
                                (isNaN(i) || i < 0) && (i = 300), (isNaN(r) || r < 0) && (r = 150), (t.width = i), (t.height = r);
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
        170: function (t, i, r) {
            "use strict";
            var a = r(1),
                o = r.n(a),
                s = r(0),
                u = r.n(s),
                m = function ScaleCompensator(t, i) {
                    var r = this;
                    (this.id = u.a.uniqueId("lrn_scale_compensator_")),
                        (this.$el = t),
                        (this.opts = i),
                        (this.scale = u.a.debounce(function () {
                            var t = u.a.bind(r.scaleAndPosition, r);
                            window.requestAnimationFrame ? window.requestAnimationFrame(t) : t();
                        }, i.debounceTime));
                };
            u.a.extend(m.prototype, {
                start: function start(t) {
                    return o()(window).on("resize." + this.id + " orientationchange." + this.id + " scroll." + this.id, this.scale), this;
                },
                stop: function stop() {
                    o()(window).off("." + this.id);
                },
                scaleAndPosition: function scaleAndPosition() {
                    var t = document.documentElement.clientWidth,
                        i = document.documentElement.clientHeight,
                        r = window.innerWidth,
                        a = window.innerHeight,
                        o = r / t,
                        s = "scale(" + o + ") translateX(" + window.pageXOffset / o + "px) translateY(" + -(i - (window.pageYOffset + a)) / o + "px)";
                    o > 0.99 ? (this.$el.removeClass("lrn_scalable"), (s = "")) : this.$el.addClass("lrn_scalable"), this.setTransform(s), this.opts.onUpdate(o);
                },
                setTransform: function setTransform(t) {
                    return this.$el.css({ transform: t, "-moz-transform": t, "-o-transform": t, "-webkit-transform": t, "-ms-transform": t }), this;
                },
                destroy: function destroy() {
                    this.stop(), this.setTransform("").$el.removeClass("lrn_scalable"), (this.$el = this.opts = null);
                },
            }),
                (i.a = m);
        },
        171: function (t, i, r) {
            "use strict";
            var a = r(5),
                o = r.n(a),
                s = r(125),
                u = r.n(s),
                m = r(128),
                v = r.n(m),
                T = r(155);
            function _extends() {
                return (_extends =
                    Object.assign ||
                    function (t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var r = arguments[i];
                            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
                        }
                        return t;
                    }).apply(this, arguments);
            }
            function _classCallCheck(t, i) {
                if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(t, i) {
                for (var r = 0; r < i.length; r++) {
                    var a = i[r];
                    (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
            }
            function _defineProperty(t, i, r) {
                return i in t ? Object.defineProperty(t, i, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[i] = r), t;
            }
            var q = (function () {
                function CustomDropdown(t, i) {
                    var r = this,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    _classCallCheck(this, CustomDropdown),
                        _defineProperty(this, "on", o.a.Events.on),
                        _defineProperty(this, "once", o.a.Events.once),
                        _defineProperty(this, "off", o.a.Events.off),
                        _defineProperty(this, "trigger", o.a.Events.trigger),
                        _defineProperty(this, "_selectedIndex", -1),
                        _defineProperty(this, "_value", null),
                        _defineProperty(this, "_onChange", function (t) {
                            var i = t.index,
                                a = t.value;
                            (r._selectedIndex = i), (r._value = a), r.trigger("change", { value: a, selectedIndex: i });
                        }),
                        _defineProperty(this, "_onBlur", function () {
                            r.trigger("blur");
                        }),
                        _defineProperty(this, "_onUpdateComplete", function () {
                            r.trigger("updateComplete");
                        }),
                        (this.el = t),
                        (this.menuOptions = i),
                        (this.options = a),
                        this._render();
                }
                return (
                    (function _createClass(t, i, r) {
                        return i && _defineProperties(t.prototype, i), r && _defineProperties(t, r), t;
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
                                    i = this.options;
                                this.component = v.a.render(
                                    u.a.createElement(
                                        T.a,
                                        _extends({}, i, { containerClass: "lrn_theme_primary", menuOptions: t, onChange: this._onChange, onBlur: this._onBlur, updateComplete: this._onUpdateComplete, selectedIndex: this.selectedIndex })
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
            i.a = q;
        },
        173: function (t, i, r) {
            "use strict";
            var a = r(1),
                o = r.n(a),
                s = r(62),
                u = r.n(s),
                m = r(0),
                v = r.n(m),
                T = r(5),
                q = r.n(T),
                R = r(141),
                M = r(166),
                j = r.n(M),
                F = r(167),
                U = r.n(F),
                V = r(168),
                W = r.n(V),
                $ = r(169),
                Y = r.n($),
                X = r(50),
                Z = r(24),
                ee = r(6),
                ie = q.a.View.extend({
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
                    template: W.a,
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
                            i = { "click .lrn_clear:not(.lrn_disabled)": "clearAll", "click .lrn_replay:not(.lrn_disabled)": "replay", "click .lrn_undo:not(.lrn_disabled)": "undo", "click .lrn_redo:not(.lrn_disabled)": "redo" };
                        this.hasFlashCanvas() && Y.a.setPath(ee.a.assetsHost + "/swf/"),
                            X.a.isTouchDevice() ? ((this.events = v.a.extend({}, this.events, this.touchEvents)), X.a.isMobile || v.a.extend(this.events, i)) : (this.events = v.a.extend(i, this.events)),
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
                                ? o()(this.bgImg).on("load", this.bgImageLoaded.bind(this)).on("error", this.bgImageLoadError.bind(this)).attr("src", this.imgSrc)
                                : (this.once(
                                      this.EVENT.SHOWN,
                                      function () {
                                          this.setCanvasSize(this.canvasHeight, this.canvasWidth), this.makeResponsive();
                                      },
                                      this
                                  ),
                                  v.a.delay(
                                      v.a.bind(function () {
                                          this.trigger(this.EVENT.LOADED), this.trigger(this.EVENT.SHOWN);
                                      }, this)
                                  )),
                            this.on(this.EVENT.RESET, this.setState, this),
                            o()(window).on("resize orientationchange", v.a.debounce(v.a.bind(this.makeResponsive, this), 400));
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
                        Object(Z.a)(this.$container, v.a.bind(this.fitCanvasToContainer, this));
                    },
                    fitCanvasToContainer: function fitCanvasToContainer() {
                        var t = this.canvasWidth,
                            i = this.canvasHeight,
                            r = t / i,
                            a = this.$container.innerWidth();
                        a && t > a && (i = (t = a) / r),
                            (this.bgImgScale = this.bgImg.width ? t / this.bgImg.width : t / this.canvasWidth),
                            this.setCanvasSize(i, t),
                            this.$(this.CLASSNAMES.CANVAS_WRAPPER).width(t),
                            this.$toolbar.width() <= this.TOOLBAR_OPTIMISED_WIDTH && this.$toolbar.addClass("lrn_toolbar_optimised"),
                            this.hasFlashCanvas() ? o()(this.cnv).css("background-image", "url(" + this.imgSrc + ")") : this.imgSrc && this.ctx.drawImage(this.bgImg, 0, 0, t, i),
                            this.setBufferToRender(),
                            this.redraw(!1);
                    },
                    setBufferToRender: function setBufferToRender() {
                        var t = this,
                            i = this.bgImgScale;
                        this.state.bufferToRender = v.a.map(this.state.buffer, function (r) {
                            return r.points
                                ? v.a.extend({}, r, {
                                      points: v.a.map(r.points, function (a) {
                                          return t.getPointToRender(a, r.bgImgScale, i);
                                      }),
                                  })
                                : r;
                        });
                    },
                    getPointToRender: function getPointToRender(t, i, r) {
                        return (i = i || 1), (r = r || 1), v.a.extend({}, t, { x: (t.x / i) * r, y: (t.y / i) * r });
                    },
                    clearAll: function clearAll() {
                        (this.currentMark = { type: this.MARK_TYPES.CLEAR, startTime: new Date().getTime() - this.initTime }), this.resetBackground(), this.addCurrentMarkToBuffer(), this.update();
                    },
                    expandCanvasToContainer: function expandCanvasToContainer() {
                        this.setCanvasSize(this.$el.height(), this.$el.width());
                    },
                    getEventPoint: function getEventPoint(t) {
                        var i = this,
                            r = this.scale || 1,
                            a = function getMousePoint(t) {
                                var a = t.offsetX ? t.offsetX : Math.round(t.pageX - i.$el.find(".lrn_canvas").offset().left),
                                    o = t.offsetY ? t.offsetY : Math.round(t.pageY - i.$el.find(".lrn_canvas").offset().top);
                                return { x: a / r, y: o / r };
                            };
                        return t.type.indexOf("mouse") > -1
                            ? a(t)
                            : t.type.indexOf("touch") > -1
                            ? (function getTouchPoint(t) {
                                  var a = t.originalEvent.touches[0],
                                      s = o()(i.cnv).offset(),
                                      u = a.pageX - s.left,
                                      m = a.pageY - s.top;
                                  return { x: u / r, y: m / r };
                              })(t)
                            : t.type.indexOf("keydown") > -1 && a(t);
                    },
                    getVisibleMarks: function getVisibleMarks(t) {
                        for (var i = this.state.buffer, r = 0, a = t ? "buffer" : "bufferToRender", o = this.state.position; o > -1; o--)
                            if (i[o].type === this.MARK_TYPES.CLEAR) {
                                r = o + 1;
                                break;
                            }
                        return this.state[a].slice(r, this.state.position + 1);
                    },
                    hasBgImg: function hasBgImg() {
                        return !(!this.imgSrc || !this.imgSrc.length);
                    },
                    ie8PreventBlurEvent: function ie8PreventBlurEvent() {
                        var t = document.activeElement;
                        v.a.defer(function () {
                            o()(t).focus();
                        });
                    },
                    paintDot: function paintDot(t, i) {
                        (this.ctx.fillStyle = i || this.selectedLineColour), this.ctx.beginPath(), this.ctx.arc(t.x, t.y, this.options.line_width, 0, 2 * Math.PI), this.ctx.fill(), (this.lastDrawnPoint = t);
                    },
                    paintLine: function paintLine(t, i, r) {
                        (this.ctx.strokeStyle = r || this.selectedLineColour),
                            (this.ctx.lineJoin = this.options.line_join),
                            (this.ctx.lineWidth = this.options.line_width),
                            (this.ctx.lineCap = this.options.line_cap),
                            this.ctx.beginPath(),
                            this.ctx.moveTo(t.x, t.y),
                            this.ctx.lineTo(i.x, i.y),
                            this.ctx.stroke(),
                            (this.lastDrawnPoint = i);
                    },
                    paintToHere: function paintToHere(t) {
                        var i, r;
                        if (!this.isPainting) return !1;
                        this.isKeypadMoving && this.getCursorCoordinates(t),
                            (i = this.getEventPoint(t)),
                            (r = null !== this.lastDrawnPoint.x ? this.lastDrawnPoint : i),
                            this.paintLine(r, i),
                            this.currentMark.points.push(this.lastDrawnPoint),
                            t.preventDefault();
                    },
                    redo: function redo() {
                        this.state.position++, this.update(), this.redraw(!0);
                    },
                    redraw: function redraw(t) {
                        var i,
                            r,
                            a,
                            o = !!v.a.isUndefined(t) || t,
                            s = this.animateRedraw,
                            u = 0,
                            m = this.getVisibleMarks(),
                            T = this;
                        if ((o && this.resetBackground(), !m.length)) return !1;
                        (i = function drawCurrentLine(t, i) {
                            s && T.redrawQueue.shift();
                            var r = t.points[i],
                                a = i > 0 ? i - 1 : 0,
                                o = t.points[a];
                            1 === t.points.length ? T.paintDot(r, t.line_colour) : T.paintLine(o, r, t.line_colour);
                        }),
                            (r = function drawCurrentMark(t) {
                                var r,
                                    a = (t.endTime - t.startTime) / t.points.length;
                                v.a.each(t.points, function (o, u) {
                                    s ? ((r = v.a.delay(v.a.bind(i, T), a * u, t, u)), T.redrawQueue.push(r)) : i(t, u);
                                }),
                                    T.ctx.closePath();
                            }),
                            v.a.each(
                                m,
                                function (t) {
                                    switch (t.type) {
                                        case this.MARK_TYPES.GESTURE:
                                            s ? ((a = v.a.delay(v.a.bind(r, this), u, t)), (u += t.endTime - t.startTime), T.markRedrawQueue.push(a)) : r(t);
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
                                this.template({ displayLogic: v.a.pick(this, "canPaint", "showRedraw", "imageAlt"), lineColourData: { colours: this.options.line_colour, limit: this.MAX_LINE_COLOUR_NUMBER }, labels: this.i18n.labels })
                            ),
                            (this.cnv = this.$("canvas.lrn_canvas")[0]),
                            this.hasFlashCanvas() && (this.$(".lrn_canvas_drawing").addClass("lrn_old_ie"), Y.a.initElement(this.cnv)),
                            (this.ctx = this.cnv.getContext("2d")),
                            this
                        );
                    },
                    resetBackground: function resetBackground() {
                        this.ctx.clearRect(0, 0, this.cnv.width, this.cnv.height),
                            this.bgLoaded && !this.hasFlashCanvas() && this.ctx.drawImage(this.bgImg, 0, 0, this.cnv.width, this.cnv.height),
                            v.a.each(this.redrawQueue, clearTimeout),
                            v.a.each(this.markRedrawQueue, clearTimeout);
                    },
                    setCanvasSize: function setCanvasSize(t, i) {
                        o()(this.cnv)
                            .height(t)
                            .width(i)
                            .attr("height", t + "px")
                            .attr("width", i + "px"),
                            this.hasFlashCanvas() && this.ctx._resize(i, t);
                    },
                    setDisabled: function setDisabled(t) {
                        t ? this.undelegateEvents() : this.delegateEvents();
                    },
                    setDrawingOptions: function setDrawingOptions() {
                        var t = this.options,
                            i = { line_colour: "#c92e32", line_join: "round", line_width: 5, line_cap: "round" };
                        t.line_color && (t.line_colour = t.line_color),
                            v.a.isArray(t.line_colour) ? (this.selectedLineColour = t.line_colour[0]) : v.a.isString(t.line_colour) ? (this.selectedLineColour = t.line_colour) : (this.selectedLineColour = i.line_colour);
                        var r = this;
                        v.a.each(i, function (i, a) {
                            r.options[a] = t.hasOwnProperty(a) ? t[a] : i;
                        });
                    },
                    setSelectedLineColour: function setSelectedLineColour(t) {
                        var i = o()(t.currentTarget);
                        i &&
                            i.length &&
                            (o()(".lrn_btn_color_selector").removeClass("lrn_selected"),
                            i.addClass("lrn_selected"),
                            (this.selectedLineColour = i.attr(this.DATA_SELECTOR.LINE_COLOUR_DATA_SELECTION)),
                            this.$(this.CLASSNAMES.LINE_COLOUR_PALETTE_TRIGGER).find("span").css("background", this.selectedLineColour),
                            this.$(this.CLASSNAMES.LINE_COLOUR_PALETTE).removeClass("lrn_active")),
                            t.preventDefault();
                    },
                    setState: function setState(t) {
                        (t.buffer = t.buffer || []), (t.bufferToRender = t.bufferToRender || []), (t.position = v.a.isNumber(t.position) ? t.position : t.buffer.length - 1), (this.state = t), this.redraw(!0), this.updateButtonStates();
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
                            i = this.state.buffer.length > this.state.position + 1,
                            r = this.getVisibleMarks(!0).length > 0;
                        this.$(".lrn_undo").toggleClass("lrn_disabled", !t), this.$(".lrn_redo").toggleClass("lrn_disabled", !i), this.$(".lrn_clear").toggleClass("lrn_disabled", !r);
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
                    calculateNewPointCoordinates: function calculateNewPointCoordinates(t, i, r, a) {
                        var o = this.keysPressed[i] ? this.pixelMoveDistance : 0,
                            s = this.keysPressed[r] ? this.pixelMoveDistance : 0,
                            u = parseInt(t, 10) - o + s;
                        return this.getBoundedCursorCoordinate(u, a);
                    },
                    getBoundedCursorCoordinate: function getBoundedCursorCoordinate(t, i) {
                        var r = i ? this.$canvas.position().left + this.$canvas.innerWidth() : this.$canvas.position().top + this.$canvas.innerHeight(),
                            a = i ? this.$canvas.position().left : this.$canvas.position().top;
                        return t < a ? a : t > r ? r : t;
                    },
                    moveIndicator: function moveIndicator(t) {
                        var i = this;
                        (this.keysPressed[t.which] = !0),
                            this.$indicator.css({
                                top: function top(t, r) {
                                    return i.calculateNewPointCoordinates(r, i.KEYCODES.UP, i.KEYCODES.DOWN);
                                },
                                left: function left(t, r) {
                                    return i.calculateNewPointCoordinates(r, i.KEYCODES.LEFT, i.KEYCODES.RIGHT, !0);
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
                        return v.a.isUndefined(this._hasFlashCanvas) && (this._hasFlashCanvas = !v.a.isEmpty(Y.a)), this._hasFlashCanvas;
                    },
                }),
                ae = r(41),
                le = r(170),
                ce = r(131),
                de = q.a.View.extend({
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
                        var t = X.a.isTouchDevice(),
                            i = this;
                        (this.events = t ? this.touchEvents : {}),
                            (this.isRecognising = !1),
                            (this.i18n = this.options.i18n),
                            (this.results = {}),
                            (this.contexts = this.initContexts()),
                            (this.currentContext = {}),
                            this.render(),
                            this.listenTo(this.canvasDrawing, this.canvasDrawing.EVENT.UPDATED, this.onUpdate, this),
                            this.listenTo(this.canvasDrawing, this.canvasDrawing.EVENT.STROKE_BEGIN, function () {
                                i.endRecognition(), i.trigger(i.EVENT.WRITING_STARTED);
                            }),
                            this.on(this.EVENT.CANCEL_RECOGNITION, this.endRecognition, this),
                            this.on(this.EVENT.RECOGNITION_REQUEST, this.requestRecognition, this),
                            this.on(this.EVENT.CHANGE_CONTEXT, this.changeContext, this),
                            this.on(this.EVENT.DELETE_CONTEXTS, this.deleteContexts, this),
                            this.on(this.EVENT.SHOWN, function () {
                                i.canvasDrawing.trigger(i.canvasDrawing.EVENT.SHOWN);
                            });
                    },
                    appendToBody: function appendToBody() {
                        var t = this;
                        this.$el.appendTo(this.appendParent).addClass("lrn_widget lrn_handwriting_fixed"),
                            (this.events = v.a.extend({}, this.events, this.fixedPositionEvents)),
                            this.delegateEvents(),
                            (this.scaler = new le.a(this.$el, {
                                debounceTime: 300,
                                onUpdate: function onUpdate(i) {
                                    t.canvasDrawing.scale = i;
                                },
                            })),
                            (this.fullScreenObserver = ce.a.fullScreen.observe(function (t) {
                                var i = t || "body";
                                i !== this.appendParent && (this.$el.appendTo(i), (this.appendParent = i));
                            }, this)),
                            (this.show = function () {
                                this.$el.finish().fadeIn(100), this.trigger(this.EVENT.SHOWN), this.scaler.start().scale();
                            }),
                            (this.hide = function () {
                                this.$el.finish().fadeOut(100), this.scaler.stop();
                            });
                    },
                    changeContext: function changeContext(t) {
                        var i = this.contexts[t];
                        i || (i = this.contexts[t] = { state: {} }), i !== this.currentContext && (this.canvasDrawing.trigger(this.canvasDrawing.EVENT.RESET, i.state), (this.currentContext = i));
                    },
                    deleteContexts: function deleteContexts(t) {
                        v.a.each(
                            t,
                            function (t) {
                                delete this.contexts[t];
                            },
                            this
                        );
                    },
                    endRecognition: function endRecognition() {
                        (this.isRecognising = !1), this.trigger(this.EVENT.RECOGNITION_ENDED), ae.a.cancel();
                    },
                    getHandwriting: function getHandwriting() {
                        var t = {};
                        return (
                            v.a.each(this.contexts, function (i, r) {
                                t[r] = i.marks;
                            }),
                            t
                        );
                    },
                    getMarksDigest: function getMarksDigest(t) {
                        return v.a.reduce(
                            t,
                            function (t, i) {
                                return t + i.startTime;
                            },
                            ""
                        );
                    },
                    initContexts: function initContexts() {
                        var t = {};
                        return (
                            v.a.each(this.options.handwriting, function (i, r) {
                                t[r] = { state: { buffer: i }, marks: i };
                            }),
                            t
                        );
                    },
                    onUpdate: function onUpdate(t, i) {
                        var r = this.getMarksDigest(t),
                            a = this.results[r],
                            o = this;
                        clearTimeout(this.recogniseTimeout),
                            (this.currentContext.state = i),
                            (this.currentContext.marks = t),
                            this.endRecognition(),
                            a
                                ? this.trigger(this.EVENT.RECEIVED_RESULT, a)
                                : ((this.isRecognising = !0),
                                  (this.recogniseTimeout = setTimeout(function () {
                                      o.isRecognising && o.recognise.call(o, t, r);
                                  }, this.DELAY)));
                    },
                    preventAction: function preventAction(t) {
                        t.preventDefault(), t.stopPropagation();
                    },
                    recognise: function recognise(t, i) {
                        var r = this;
                        this.trigger(
                            this.EVENT.RECOGNITION_REQUEST,
                            t,
                            function (t) {
                                (r.results[i] = t), r.isRecognising && (r.endRecognition(), r.trigger(r.EVENT.RECEIVED_RESULT, t));
                            },
                            function (t) {
                                r.isRecognising && (r.endRecognition(), r.trigger(r.EVENT.ERROR, r.i18n.labels.handwritingApiError));
                            }
                        );
                    },
                    remove: function remove() {
                        return (
                            this.scaler && (this.scaler.destroy(), (this.scaler = null)),
                            this.fullScreenObserver && ce.a.fullScreen.unobserve(this.fullScreenObserver),
                            this.canvasDrawing.remove(),
                            delete this.canvasDrawing,
                            q.a.View.prototype.remove.apply(this, arguments)
                        );
                    },
                    render: function render() {
                        return (this.canvasDrawing = new ie({ el: this.el, i18n: this.i18n, canPaint: !0, line_colour: this.LINE_COLOUR })), this.options.fixed && this.appendToBody(), this;
                    },
                    requestRecognition: function requestRecognition(t, i, r) {
                        ae.a.recognise({ type: ae.a.TYPE.EQUATION, marks: t, successFn: i, failFn: r, handwritingRecognises: this.options.handwritingRecognises, security: this.options.security });
                    },
                    stopPropagation: function stopPropagation(t) {
                        t.stopPropagation();
                    },
                }),
                pe = r(171),
                fe = r(36);
            function _toConsumableArray(t) {
                return (
                    (function _arrayWithoutHoles(t) {
                        if (Array.isArray(t)) return _arrayLikeToArray(t);
                    })(t) ||
                    (function _iterableToArray(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                    })(t) ||
                    (function _unsupportedIterableToArray(t, i) {
                        if (!t) return;
                        if ("string" == typeof t) return _arrayLikeToArray(t, i);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _arrayLikeToArray(t, i);
                    })(t) ||
                    (function _nonIterableSpread() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function _arrayLikeToArray(t, i) {
                (null == i || i > t.length) && (i = t.length);
                for (var r = 0, a = new Array(i); r < i; r++) a[r] = t[r];
                return a;
            }
            function getSymbolGroupsCustomLabels() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = "symbols.options.";
                return Object.keys(t)
                    .filter(function (t) {
                        return t.indexOf(i) > -1;
                    })
                    .map(function (r) {
                        return { id: r.replace(i, ""), label: t[r] };
                    });
            }
            var be = {},
                ye = q.a.View.extend({
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
                    $window: o()(window),
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
                        var i,
                            r = t.mathEvents,
                            a = this.DEFAULTSYMBOLGROUPS[t.chemistry ? "chemistry" : "math"],
                            o = v.a.isUndefined(t.symbols) ? a : t.symbols,
                            s = getSymbolGroupsCustomLabels(this.i18n.labels);
                        R.a.updateI18nSymbols(this.i18n, o, s),
                            (this.horizontalLayout = t.horizontalLayout),
                            (i = this.horizontalLayout ? t.horizontalPad || this.defaultHorizontalNumberPadSymbols : t.numberPad || this.defaultNumberPadSymbols),
                            (this.symbolGroups = R.a.getForInputUi(o, t.chemistry)),
                            (this.numberPadSymbols = R.a.getForInputNumberPad(i)),
                            this.horizontalLayout && ((this.numberPadSymbols.columnCount = 10), (this.numberPadSymbols.rowCount = 2)),
                            (this.masterSymbolCollection = R.a.getNewerFormatMasterCollection()),
                            (this.numColumns = this.defaultNumColumns),
                            (this.buttonMapCache = {}),
                            v.a.isUndefined(this.symbolGroups.value) && (this.numColumns = 4),
                            (this.resetDraggableElementPosition = v.a.debounce(v.a.bind(this.resetDraggableElementPosition, this), 10)),
                            (this.showHint = v.a.debounce(v.a.bind(this.showHint, this), 200)),
                            (this.updateAriaLiveText = v.a.debounce(v.a.bind(this.updateAriaLiveText, this), 500)),
                            (this.whetherToShowHints = v.a.isUndefined(t.showHints) || !0 === t.showHints),
                            (this.uiBelowResponse = !!t.uiBelowResponse),
                            this.setEvents(),
                            this.listenTo(r, r.EVENT.EDITOR_FOCUSED, this.show),
                            this.isLazy() || this.render();
                    },
                    activateGroup: function activateGroup(t) {
                        var i = !v.a.isUndefined(this.symbolGroups[t]),
                            r = i && !!this.symbolGroups[t].value.length,
                            a = '[data-symbol-group="' + t + '"]';
                        i &&
                            (this.$(".lrn-formula-keyboard-pager button").not(a).removeClass(this.CLASSES.BUTTON_ACTIVE).end().filter(a).addClass(this.CLASSES.BUTTON_ACTIVE),
                            this.$(".lrn-formula-keyboard-page").not(a).hide().end().filter(a).show(),
                            (this.group = t),
                            this.trigger(this.EVENT.ACTIVATED_GROUP, t),
                            this.$(".lrn-formula-keyboard-main, lrn-keyboard-button-parent lrn-formula-keyboard-page").toggle(r),
                            "handwriting" === this.group ? this.$(this.SELECTORS.KEYBOARD_HELP).hide() : this.$(this.SELECTORS.KEYBOARD_HELP).show()),
                            this.updateButtonMap();
                    },
                    activateHelpModal: function activateHelpModal() {
                        var t = o()(this.$el.closest(".lrn_response_wrapper")[0] || this.el),
                            i = t.offset().top,
                            r = t.find(".lrn_response_input").innerHeight(),
                            a = this.$(".lrn-formula-keyboard").innerHeight();
                        this.helpModal.show(i, r + a);
                    },
                    blurredButton: function blurredButton() {
                        if (this._isDropdownClosed() && !this.$el.find(":focus").length) {
                            var t = this.options.mathEvents;
                            t.trigger(t.EVENT.ITEM_BLURRED);
                        }
                    },
                    buttonAction: function buttonAction(t) {
                        var i = o()(t.currentTarget);
                        if (!this.maskHasBeenScrolled(t))
                            if ((i.closest(".lrn-formula-keyboard-mask").length && (t.preventDefault(), t.stopPropagation()), this.shouldIgnoreNextAction)) this.shouldIgnoreNextAction = !1;
                            else if (!this.isDragging) {
                                var r = i.data("mq-command"),
                                    a = i.data("symbol-group"),
                                    s = i.data("type");
                                "help" === s && this.activateHelpModal(), "caps" === s && this.toggleCaps(), r && this.sendMathCommand(t), a && (t.currentTarget.focus(), this.activateGroup(a));
                            }
                    },
                    buttonKeyDown: function buttonKeyDown(t) {
                        if (this._isDropdownClosed()) {
                            var i = this.options.mathEvents;
                            switch (t.keyCode) {
                                case this.KEYCODES.LEFT:
                                case this.KEYCODES.UP:
                                case this.KEYCODES.RIGHT:
                                case this.KEYCODES.DOWN:
                                    this.moveFocusInDirection(t);
                                    break;
                                case this.KEYCODES.ESC:
                                    i.trigger(i.EVENT.ESCAPE_UI);
                                    break;
                                case this.KEYCODES.TAB:
                                    t.shiftKey
                                        ? (t.preventDefault(), i.trigger(i.EVENT.ESCAPE_UI_WITHOUT_KEYBOARD))
                                        : this.nextTab
                                        ? (this.nextTab.is(":hidden") && this.nextTab.parent().first().hasClass("lrn-formulaessay-button") && (this.nextTab = this.nextTab.parent().siblings().find("button").filter(":visible").first()),
                                          this.nextTab.is(":visible") &&
                                              (t.preventDefault(),
                                              v.a.defer(
                                                  v.a.bind(function () {
                                                      this.nextTab.focus();
                                                  }, this)
                                              )))
                                        : i.trigger(i.EVENT.ESCAPE_UI_WITHOUT_KEYBOARD);
                            }
                            return this.handleKeyEvent(t);
                        }
                    },
                    getLastNonEmptyElementIndex: function getLastNonEmptyElementIndex(t) {
                        var i = t
                            .slice()
                            .reverse()
                            .reduce(function (t, i, r) {
                                return "" !== i && null === t ? r : t;
                            }, null);
                        return t.length - i - 1;
                    },
                    getAdjustedLayout: function getAdjustedLayout(t) {
                        var i = this.getLastNonEmptyElementIndex(t),
                            r = t.reduce(function (t, r, a) {
                                return "" !== r || a < i ? t : t + 1;
                            }, 0);
                        return t.slice(0, t.length - r);
                    },
                    shouldAdjustWidthOfTopRow: function shouldAdjustWidthOfTopRow() {
                        var t = this.options.horizontalPad || this.defaultHorizontalNumberPadSymbols;
                        return !(!this.horizontalLayout || !v.a.isArray(t)) && this.getAdjustedLayout(t).length <= 10;
                    },
                    shouldAdjustWidthOfBothRows: function shouldAdjustWidthOfBothRows() {
                        var t = this.options.horizontalPad || this.defaultHorizontalNumberPadSymbols;
                        if (!this.horizontalLayout || !v.a.isArray(t)) return !1;
                        var i = t.slice(0, 10),
                            r = this.getAdjustedLayout(i).length <= 10,
                            a = t.slice(10),
                            o = this.getAdjustedLayout(a).length <= 10;
                        return r && o;
                    },
                    shouldAdjustWidth: function shouldAdjustWidth() {
                        return this.shouldAdjustWidthOfTopRow() || this.shouldAdjustWidthOfBothRows();
                    },
                    calculatePositionAndWidth: function calculatePositionAndWidth() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            i = this.calculateWidth(t).width,
                            r = t.pLeft + (t.pWidth - i) / 2,
                            a = t.pTop + t.pHeight,
                            o = t.boardHeight;
                        if (
                            (r + i > t.hLeft + t.hWidth && (r = t.hLeft + t.hWidth - i),
                            (t.hWidth < i || r < t.hLeft) && (r = t.hLeft),
                            !t.uiBelowResponse && t.isFloating && (a + o > this.$window.height() + this.$window.scrollTop() && (a = t.pTop - o), a <= 0))
                        ) {
                            var s = (a = t.pTop + t.pHeight) <= 0;
                            s && ((i = t.boardWidth), (a = t.boardTop), (r = t.boardLeft));
                        }
                        return this.shouldAdjustWidth() && (i = null), { top: a, width: i, left: r };
                    },
                    calculateWidth: function calculateWidth(t) {
                        return { width: this.isFloating || this.isImageCloze ? v.a.min([t.maxWidth, t.hWidth]) * t.widthScale : 100 * t.widthScale + "%" };
                    },
                    calculateWidthScale: function calculateWidthScale(t) {
                        var i = 1,
                            r = this.numColumns;
                        return r < this.mainGroupNumColumns && (r = this.mainGroupNumColumns), !this.shouldAdjustWidth() && t > this.minWidth && (i = r / this.defaultNumColumns), i;
                    },
                    getDraggableElement: function getDraggableElement() {
                        return this.$(".lrn-formula-keyboard");
                    },
                    getHandwriting: function getHandwriting() {
                        var t = this.handwritingPad;
                        if (this.hasHandwriting()) return t.getHandwriting.apply(t, arguments);
                    },
                    getPositionWithinBounds: function getPositionWithinBounds(t, i, r, a) {
                        return i < r + t ? r + t : i > a + t ? a + t : i;
                    },
                    handleKeyEvent: function handleKeyEvent(t) {
                        if (this._isDropdownClosed()) {
                            var i = this.options.mathEvents,
                                r = t.keyCode || t.which;
                            v.a.contains(this.KEYCODES, r) || (i.trigger(i.EVENT.EXTERNAL_KEY, t), ("keypress" !== t.type && 8 !== r) || t.preventDefault(), "keydown" === t.type && t.shiftKey && t.altKey && t.preventDefault());
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
                        var i = this;
                        (function shouldHideKeypad(t) {
                            if ("click" === t.type) return !0;
                            if ("keydown" === t.type) {
                                var r = t.charCode || t.keyCode;
                                if (r === i.KEYCODES.SPACE || r === i.KEYCODES.ENTER) return !0;
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
                        return this.options.lazy && v.a.contains(t, this.options.uiStyleType);
                    },
                    moveFocusInDirection: function moveFocusInDirection(t) {
                        var i = v.a.findWhere(this.buttonMap, { el: t.currentTarget }),
                            r = v.a.invert(this.KEYCODES)[t.keyCode];
                        if (i && i.links[r]) {
                            var a = i.links[r];
                            a === this.rootControlElement && "UP" === r && (this.rootControlElement.links.DOWN = i), (this.lastFocusedElement = a.el), o()(this.lastFocusedElement).focus();
                        }
                        t.preventDefault(), t.stopPropagation();
                    },
                    notifyContainerWidth: function notifyContainerWidth(t) {
                        this.isFloating || this.isFixedHandwriting || this.horizontalLayout || (this.getDraggableElement().width(t), (this.isImageCloze = !0));
                    },
                    onAttach: function onAttach() {
                        var t,
                            i,
                            r = this,
                            a = this.menuGroupDropdown;
                        this.isRendered &&
                            !this.isAttached &&
                            ((t = this.$(".lrn-formula-keyboard")),
                            (i = v.a.keys(this.symbolGroups)),
                            Object(Z.a)(t, function () {
                                var t = r.menuGroupDropdown;
                                t && t.open({ focusToSelectedOption: !1 }), r.renderLatex(), t && t.close();
                            }),
                            (this.maxWidth = parseInt(t.css("max-width"))),
                            (this.minWidth = parseInt(t.css("min-width"))),
                            "master" === i[0] && i.length > 1 ? (this.activateGroup(i[1]), a && (a.selectedIndex = 1)) : (a && (a.selectedIndex = 0), this.activateGroup(i[0])),
                            (this.isAttached = !0));
                    },
                    pickCoords: function pickCoords(t, i) {
                        var r = this.$(".lrn-formula-keyboard").height() * this.MINIMUM_KEYPAD_VISIBILITY,
                            a = this.$(".lrn-formula-keyboard").width() * this.MINIMUM_KEYPAD_VISIBILITY,
                            o = this.pageWidth - a,
                            s = -3 * a,
                            u = this.pageHeight - r;
                        return { x: this.getPositionWithinBounds(i.x, t.clientX, s, o), y: this.getPositionWithinBounds(i.y, t.clientY, 0, u) };
                    },
                    preventAction: function preventAction(t) {
                        var i = o()(t.target);
                        !i.closest(this.SELECTORS.MENU_GROUP).length && !i.closest(".lrn-formula-keyboard-mask").length && (t.cancelable ? t.preventDefault() : (this.shouldIgnoreNextAction = !0), t.stopPropagation());
                    },
                    pulseButton: function pulseButton(t, i, r) {
                        var a,
                            o = 1 === i.length ? i.toLowerCase() : i,
                            s = this;
                        "\\" !== o &&
                            ((o = o.replace(/\\/g, "\\\\").replace(/"/g, '\\"')),
                            (a = r ? this.$('[data-symbol-cid="' + r.cid + '"]') : this.$('[data-mq-value="' + o + '"]')).addClass(this.CLASSES.BUTTON_ACTIVE),
                            setTimeout(function () {
                                a.removeClass(s.CLASSES.BUTTON_ACTIVE);
                            }, 100)),
                            this.isVisible || t !== this.ACTIONS.KEYPAD_OPEN || this.show();
                    },
                    remove: function remove(t) {
                        return (
                            o()(document).off(".lrn." + this.cid),
                            ce.a.capsLock.unobserve(this.capsObserver),
                            this.fullScreenObserver && ce.a.fullScreen.unobserve(this.fullScreenObserver),
                            this.unSetHintToShow(),
                            !t && this.clone && (o()(this.clone).remove(), (this.clone = null)),
                            this.$(".mq-math-mode.lrn-mq-original").each(function () {
                                u()(this).revert();
                            }),
                            this.helpModal && (this.helpModal.remove(), (this.helpModal = null)),
                            this.handwritingPad && (this.handwritingPad.remove(), (this.handwritingPad = null)),
                            (this.buttonMap = []),
                            (this.buttonMapCache = {}),
                            q.a.View.prototype.remove.apply(this, arguments)
                        );
                    },
                    adjustHorizontalKeypadWidth: function adjustHorizontalKeypadWidth() {
                        this.shouldAdjustWidthOfTopRow() ? this.adjustWidthOfTopRow() : this.shouldAdjustWidthOfBothRows() && this.adjustWidthOfBothRows();
                    },
                    getHorizontalKeypadElements: function getHorizontalKeypadElements() {
                        var t = this.el,
                            i = t.querySelector(".lrn-formula-keyboard"),
                            r = i.querySelector(".lrn-formula-keyboard-main");
                        return { outerKeypadContainer: t, innerKeypadContainer: i, buttonsContainer: r, allButtons: v.a.toArray(r.children) };
                    },
                    applyStylesToAdjustedHorizontalKeypad: function applyStylesToAdjustedHorizontalKeypad(t) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            r = this.getHorizontalKeypadElements(),
                            a = r.outerKeypadContainer,
                            o = r.innerKeypadContainer;
                        o.classList.add("lrn-formula-keyboard--adjusted"), a.classList.add("lrn_absolute_keyboard_parent--adjusted"), (a.style.maxWidth = "".concat(80 * t.length, "px"));
                        var s = i || t;
                        s.forEach(function (i) {
                            i.style.width = "".concat(100 / t.length, "%");
                        });
                        var u = s.length,
                            m = "320px";
                        u <= 3 && (m = "".concat(80 * u, "px")), (a.style.minWidth = m);
                    },
                    isNonEmpty: function isNonEmpty(t) {
                        return t.classList.contains("lrn_btn_grid");
                    },
                    isPurposedlyEmpty: function isPurposedlyEmpty(t, i) {
                        var r = i.classList.contains("lrn-btn-placeholder"),
                            a = t.filter(this.isNonEmpty),
                            o = t.indexOf(v.a.last(a)),
                            s = t.indexOf(i) < o;
                        return r && s;
                    },
                    adjustWidthOfTopRow: function adjustWidthOfTopRow() {
                        var t = this;
                        if (this.shouldAdjustWidthOfTopRow()) {
                            var i = this.getHorizontalKeypadElements().allButtons,
                                r = i.filter(function (r) {
                                    return t.isNonEmpty(r) || t.isPurposedlyEmpty(i, r);
                                });
                            v.a.difference(i, r).forEach(function (t) {
                                return t.classList.add("lrn-btn-placeholder--hidden");
                            }),
                                this.applyStylesToAdjustedHorizontalKeypad(r);
                        }
                    },
                    adjustWidthOfBothRows: function adjustWidthOfBothRows() {
                        var t = this;
                        if (this.shouldAdjustWidthOfBothRows()) {
                            for (
                                var i = this.getHorizontalKeypadElements(),
                                    r = i.buttonsContainer,
                                    a = i.allButtons,
                                    o = a.slice(0, 10),
                                    s = o.filter(function (i) {
                                        return t.isNonEmpty(i) || t.isPurposedlyEmpty(o, i);
                                    }),
                                    u = a.slice(10),
                                    m = u.filter(function (i) {
                                        return t.isNonEmpty(i) || t.isPurposedlyEmpty(u, i);
                                    }),
                                    v = document.createElement("div"),
                                    T = document.createElement("div");
                                r.firstChild;

                            )
                                r.removeChild(r.firstChild);
                            s.forEach(function (t) {
                                v.appendChild(t);
                            }),
                                m.forEach(function (t) {
                                    T.appendChild(t);
                                }),
                                r.appendChild(v),
                                r.appendChild(T);
                            var q = s.length >= m.length ? s : m,
                                R = [].concat(_toConsumableArray(s), _toConsumableArray(m));
                            this.applyStylesToAdjustedHorizontalKeypad(q, R);
                        }
                    },
                    render: function render() {
                        var t = this.options.uiStyleType === this.TYPE.BLOCK_ON_FOCUS_KEYBOARD || this.options.uiStyleType === this.TYPE.FLOATING_KEYBOARD;
                        this.$el.html(
                            j()({ symbolGroups: this.symbolGroups, showHints: this.whetherToShowHints, numberPadSymbols: this.numberPadSymbols, horizontalLayout: this.horizontalLayout, labels: this.i18n.labels, showCloseButton: t })
                        ),
                            this.adjustHorizontalKeypadWidth(),
                            this.$(".lrn-formula-keyboard")
                                .addClass("lrn-ui-style-" + this.options.uiStyleType)
                                .toggleClass("lrn-touch", !!X.a.isTouchDevice()),
                            (this.helpModal = new _e({ symbolGroups: this.symbolGroups, i18nLabels: this.i18n.labels }).render()),
                            this.on(this.EVENT.ACTIVATED_GROUP, this.setWidthFromGroup),
                            this.options.uiStyleType === this.TYPE.FIXED_HANDWRITING_ONLY && (this.isFixedHandwriting = !0),
                            this.hasHandwriting() &&
                                ((this.handwritingPad = new de({
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
                                (this.fullScreenObserver = ce.a.fullScreen.observe(function (t) {
                                    var i = t || "body";
                                    i !== this.appendParent && (this.$el.appendTo(i), (this.appendParent = i));
                                }, this)),
                                this.on(this.EVENT.SHOWN, v.a.debounce(this.resetVirginDraggableElement)),
                                this.on(this.EVENT.ACTIVATED_GROUP, this.resetVirginDraggableElement)),
                            (this.options.uiStyleType !== this.TYPE.FLOATING_KEYBOARD && this.options.uiStyleType !== this.TYPE.BLOCK_ON_FOCUS_KEYBOARD) || (this.isVisible = !1);
                        var i = this.TYPE;
                        return (
                            v.a.contains([i.BLOCK_KEYBOARD, i.BLOCK_ON_FOCUS_KEYBOARD], this.options.uiStyleType) && this.hideKeyboardMenuBar(),
                            v.a.isEmpty(this.symbolGroups) || this.renderMenuGroup(),
                            this.setMathEvents(this.options.mathEvents),
                            (this.capsObserver = ce.a.capsLock.observe(this.toggleCaps, this)),
                            (this.isRendered = !0),
                            o.a.contains(document, this.el) && this.onAttach(),
                            this
                        );
                    },
                    renderMenuGroup: function renderMenuGroup() {
                        var t = this,
                            i = this.SELECTORS,
                            r = i.MENU_GROUP,
                            a = i.MENU_GROUP_TOGGLE,
                            o = this.$(r).get(0),
                            s = getSymbolGroupsCustomLabels(this.i18n.labels),
                            u = this.options.disableSpokenmathUserInputs;
                        Object(Z.a)(o, function (i) {
                            (t.menuGroupDropdown = new pe.a(
                                o,
                                (function getDropdownSymbols(t) {
                                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                        r = arguments.length > 2 ? arguments[2] : void 0;
                                    return v.a.map(t, function (t, a) {
                                        var o = t.title,
                                            s = t.render_latex,
                                            u = t.label;
                                        return (
                                            o ||
                                                !s ||
                                                r ||
                                                fe.a.translateOrEmptyString(u, function (t) {
                                                    o = t;
                                                }),
                                            {
                                                title: o,
                                                value: a,
                                                label: function labelFunction() {
                                                    var t = v.a.findWhere(i, { id: a });
                                                    return t ? t.label : s && u.indexOf("\\") > -1 ? '<span class="mathquill-embedded-latex">'.concat(u, "</span>") : "qwerty" === a ? '<span class="lrn-group-qwerty" />' : u;
                                                },
                                            }
                                        );
                                    });
                                })(t.symbolGroups, s, u),
                                {
                                    scaleToFit: !0,
                                    toggleButton: { disableArrowKey: !0 },
                                    ariaLabel: t.i18n.labels.ariaLabel.mathKeyboard.selectSymbolGroup,
                                    ariaDescription: t.i18n.labels.ariaLabel.mathKeyboard.symbolGroupRole,
                                    ariaSelected: t.i18n.labels.ariaLabel.mathKeyboard.currentSymbolGroup,
                                }
                            )),
                                v.a.delay(function () {
                                    i();
                                }, 10);
                        }),
                            this.menuGroupDropdown
                                .on("change", this.selectGroup, this)
                                .on("blur", this.blurredButton, this)
                                .on("updateComplete", function () {
                                    return t.renderLatex(t.$(a));
                                });
                    },
                    renderLatex: function renderLatex(t) {
                        (t = t || this.$el).find(".mathquill-embedded-latex").each(function () {
                            var t = this.textContent,
                                i = be[t];
                            i ? this.parentNode.replaceChild(i.cloneNode(!0), this) : (u.a.InertMath(this), (be[t] = this.cloneNode(!0)), this.classList.add("lrn-mq-original"));
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
                            var t = o()(this.options.horizontalParent),
                                i = o()(this.options.positioner),
                                r = this.getDraggableElement(),
                                a = t.outerWidth(),
                                s = i.offset(),
                                u = this.calculateWidthScale(a);
                            r.css(
                                this.calculatePositionAndWidth({
                                    pLeft: s.left,
                                    pTop: s.top,
                                    pWidth: i.outerWidth(),
                                    pHeight: i.outerHeight(),
                                    hLeft: t.offset().left,
                                    hWidth: a,
                                    maxWidth: this.maxWidth,
                                    boardHeight: r.outerHeight(),
                                    boardWidth: r.outerWidth(),
                                    boardTop: r.offset().top,
                                    boardLeft: r.offset().left,
                                    widthScale: u,
                                    isFloating: this.isFloating,
                                    uiBelowResponse: this.uiBelowResponse,
                                })
                            );
                        }
                    },
                    resetRemoveTimeout: function resetRemoveTimeout() {
                        var t = this.options.mathEvents,
                            i = this;
                        clearTimeout(this.removeTimeout),
                            (this.removeTimeout = setTimeout(function () {
                                i.isRendered &&
                                    (i.remove(!0),
                                    i.setElement(o()(i.clone).removeClass("lrn_clone")[0]),
                                    (i.isRendered = !1),
                                    (i.isAttached = !1),
                                    i.listenToOnce(t, t.EVENT.EDITOR_FOCUSED, function () {
                                        i.show();
                                    }));
                            }, this.lazyRemoveTimeout));
                    },
                    resetVirginDraggableElement: function resetVirginDraggableElement() {
                        this.hasBeenDragged || this.resetDraggableElementPosition();
                    },
                    sendMathCommand: function sendMathCommand(t) {
                        var i = o()(t.currentTarget).attr("data-mq-command"),
                            r = o()(t.currentTarget).attr("data-mq-value"),
                            a = o()(t.currentTarget).data("symbol-cid"),
                            s = this.masterSymbolCollection.get(a),
                            u = this.options.mathEvents;
                        "qwerty" === this.group && this.isCapitalised() && r.match(/^[a-z]$/) && (r = r.toUpperCase()), u.trigger(u.EVENT.MATH_COMMAND, i, r, s);
                    },
                    setElement: function setElement() {
                        return q.a.View.prototype.setElement.apply(this, arguments), (this.clone = this.$el.clone().insertBefore(this.$el).addClass("lrn_clone")[0]), (this.options.el = this.el), (this.options.$el = this.$el), this;
                    },
                    setEvents: function setEvents() {
                        (this.events = {}),
                            (this.additionalEvents = {}),
                            (this.additionalTouchEvents = {}),
                            this.whetherToShowHints &&
                                ((this.additionalEvents["mouseenter button[title]"] = "setHintToShow"),
                                (this.additionalEvents["mouseleave button[title]"] = "unSetHintToShow"),
                                (this.additionalTouchEvents["touchstart button[title]"] = "showTouchHint")),
                            o.a.extend(this.events, this.normalEvents, this.additionalEvents),
                            X.a.isTouchDevice() && o.a.extend(this.events, this.touchEvents, this.additionalTouchEvents);
                    },
                    setHandwritingEvents: function setHandwritingEvents() {
                        var t = this.handwritingPad,
                            i = this;
                        this.listenTo(t, t.EVENT.WRITING_STARTED, function () {
                            var t = i.options.mathEvents;
                            t.trigger(t.EVENT.CONTENT_OUTDATED);
                        }),
                            this.listenTo(t, t.EVENT.RECOGNITION_ENDED, function () {
                                var t = i.options.mathEvents;
                                t.trigger(t.EVENT.RESET_STATE);
                            }),
                            this.listenTo(t, t.EVENT.RECOGNITION_REQUEST, function () {
                                var t = i.options.mathEvents;
                                t.trigger(t.EVENT.AWAIT_UPDATE);
                            }),
                            this.listenTo(t, t.EVENT.RECEIVED_RESULT, function (t) {
                                var r = i.options.mathEvents;
                                r.trigger(r.EVENT.WRITE_LATEX, t);
                            }),
                            this.listenTo(t, t.EVENT.ERROR, function (t) {
                                var r = i.options.mathEvents;
                                r.trigger(r.EVENT.SET_ERROR, t);
                            }),
                            this.on(this.EVENT.ACTIVATED_GROUP + " " + this.EVENT.SHOWN, function () {
                                i.isVisible && "handwriting" === i.group && i.handwritingPad.trigger(i.handwritingPad.EVENT.SHOWN);
                            });
                    },
                    setHintToShow: function setHintToShow(t) {
                        (this.hintToShow = t.currentTarget), this.showHint();
                    },
                    setMathEvents: function setMathEvents(t) {
                        var i,
                            r = this,
                            a = this;
                        function changeHandwritingContext() {
                            t.trigger(t.EVENT.GET_ACTIVE_ID, function (t) {
                                a.handwritingPad.trigger(a.handwritingPad.EVENT.CANCEL_RECOGNITION), a.handwritingPad.trigger(a.handwritingPad.EVENT.CHANGE_CONTEXT, t);
                            });
                        }
                        return (
                            this.stopListening(this.options.mathEvents),
                            (this.options.mathEvents = t),
                            this.listenTo(t, t.EVENT.MATH_COMMAND, this.pulseButton),
                            this.listenTo(t, t.EVENT.SHIFT_KEY, function () {
                                (ce.a.capsLock.status && "osx" === X.a.getOs()) || a.toggleCaps();
                            }),
                            this.listenTo(t, t.EVENT.EDITOR_FOCUSED, this.show),
                            this.listenTo(t, t.EVENT.EDITOR_BLURRED, function () {
                                r._mathDropdownFocus || r.hide();
                            }),
                            this.listenTo(t, t.EVENT.TAB_EDITOR, function (t) {
                                t &&
                                    t.nextTabElement &&
                                    (t.isFirstElement || (a.nextTab = t.nextTabElement),
                                    a.isFixedHandwriting ||
                                        (t.originalEvent.preventDefault(),
                                        v.a.defer(function () {
                                            (i = a.lastFocusedElement ? a.$(a.lastFocusedElement) : a.$("button:visible, [tabindex]:visible").get(0)) ? i.focus() : t.nextTabElement.focus();
                                        })));
                            }),
                            this.isFloating && this.listenTo(t, t.EVENT.UPDATED, this.resetVirginDraggableElement),
                            this.hasHandwriting() &&
                                (this.listenTo(t, [t.EVENT.EDITOR_PRESSED, t.EVENT.UPDATED, t.EVENT.EDITOR_BLURRED, t.EVENT.MATH_COMMAND].join(" "), function () {
                                    a.handwritingPad.trigger(a.handwritingPad.EVENT.CANCEL_RECOGNITION);
                                }),
                                changeHandwritingContext(),
                                this.listenTo(t, t.EVENT.EDITOR_FOCUSED, changeHandwritingContext),
                                this.listenTo(t, t.EVENT.EDITOR_REMOVED, function (t) {
                                    a.handwritingPad.trigger(a.handwritingPad.EVENT.DELETE_CONTEXTS, t);
                                })),
                            this.listenTo(t, t.EVENT.MATH_COMMAND, this.updateCapitalisation),
                            this.listenTo(
                                t,
                                "all",
                                function (i) {
                                    i !== t.EVENT.ITEM_BLURRED && a.helpModal && a.helpModal.hide();
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
                    setPositioner: function setPositioner(t, i) {
                        return this.isFloating && !this.options.immutablePositioner && ((this.options.positioner = t), i && (this.options.horizontalParent = t), this.resetVirginDraggableElement()), this;
                    },
                    setWidthFromGroup: function setWidthFromGroup(t) {
                        this.numColumns = (this.symbolGroups[t] ? this.symbolGroups[t].columnCount : 0) + (this.numberPadSymbols.hasSymbols ? (this.symbolGroups[t].custom ? 4 : this.numberPadSymbols.columnCount) : 0);
                        var i = this.horizontalLayout && this.shouldAdjustWidth() ? 1 : this.numColumns / this.defaultNumColumns;
                        this.shouldUpdateWidth() && this.getDraggableElement().css(this.calculateWidth({ hWidth: o()(this.options.horizontalParent).outerWidth(), widthScale: i, maxWidth: this.maxWidth }));
                    },
                    shouldUpdateWidth: function shouldUpdateWidth() {
                        return this.options.horizontalParent && o()(this.options.horizontalParent).is(":visible");
                    },
                    updateAriaLiveText: function updateAriaLiveText(t) {
                        o()(this.el).find(this.SELECTORS.ARIA_LIVE).text("").hide().text(t).show();
                    },
                    show: function show() {
                        var t = this;
                        this.updateAriaLiveText(this.i18n.labels.ariaLiveText.mathKeyboard.mathKeyboardOpened),
                            clearTimeout(this.removeTimeout),
                            this.isRendered || (this.render(), this.onAttach()),
                            (!this.isFloating && !this.isBlockOnFocus) || this.isVisible
                                ? this.isFixedHandwriting && this.handwritingPad.show()
                                : (this.resetDraggableElement(),
                                  v.a.defer(function () {
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
                            var t = o()(this.hintToShow);
                            this.$(".lrn-hint-title").text(t.attr("title") || ""), this.$(".lrn-hint-shortcut").text(t.data("shortcut") || ""), this.$(".lrn-formula-keyboard-hint").removeClass("lrn-empty"), (this.hintShowing = !0);
                        }
                    },
                    showTouchHint: function showTouchHint(t) {
                        this.hintTimeout && clearTimeout(this.hintTimeout), this.showHint(t), (this.hintTimeout = setTimeout(v.a.bind(this.hideHint, this), 1e3));
                    },
                    startDrag: function startDrag(t) {
                        var i,
                            r = this.getDraggableElement(),
                            a = r.position(),
                            s = this,
                            u = this.$(".lrn-formula-keyboard-menu"),
                            m = { x: t.clientX - u.offset().left, y: t.clientY - u.offset().top };
                        this.isDragging || ((this.pageHeight = o()(document).outerHeight()), (this.tempPageWidth = this.tempPageWidth || o()(document).innerWidth()), (this.pageWidth = this.tempPageWidth)),
                            o()(document).on("mousemove.lrn." + this.cid, function (t) {
                                var o = s.pickCoords(t, m);
                                i ? r.css({ top: a.top + (o.y - i.y), left: a.left + (o.x - i.x) }) : ((i = o), (s.hasBeenDragged = !0), (s.isDragging = !0));
                            }),
                            o()(document).one("mouseup.lrn." + this.cid, function (t) {
                                (s.isDragging = !1), o()(document).off("mousemove.lrn." + s.cid);
                            });
                    },
                    startTouchDrag: function startTouchDrag(t) {
                        var i,
                            r = this.getDraggableElement(),
                            a = r.position(),
                            s = this,
                            u = this.$(".lrn-formula-keyboard-menu"),
                            m = { x: t.originalEvent.touches[0].clientX - u.offset().left, y: t.originalEvent.touches[0].clientY - u.offset().top };
                        this.isDragging || ((this.pageHeight = o()(document).outerHeight()), (this.tempPageWidth = this.tempPageWidth || o()(document).innerWidth()), (this.pageWidth = this.tempPageWidth)),
                            o()(document).on("touchmove.lrn." + this.cid, function (t) {
                                var o = s.pickCoords(t.originalEvent.touches[0], m);
                                i ? r.css({ top: a.top + (o.y - i.y), left: a.left + (o.x - i.x) }) : ((i = o), (s.hasBeenDragged = !0));
                            }),
                            o()(document).one("touchend.lrn." + this.cid, function (t) {
                                o()(document).off("touchmove.lrn." + s.cid);
                            });
                    },
                    toggleCaps: function toggleCaps(t) {
                        this.$(".lrn-formula-keyboard").toggleClass("lrn_caps_on", t);
                    },
                    unSetHintToShow: function unSetHintToShow() {
                        this.hintShowing && this.hideHint(), (this.hintToShow = null);
                    },
                    getElementByClassName: function getElementByClassName(t) {
                        return v.a.find(this.buttonMap, function (i) {
                            return i.el.classList.contains(t);
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
                            i = t.dropdownElement,
                            r = t.closeButtonElement,
                            a = t.helpButtonElement;
                        return this.horizontalLayout ? a || r : i || a || r;
                    },
                    getFirstRowElements: function getFirstRowElements() {
                        var t = this.getControlElements(),
                            i = t.dropdownElement,
                            r = this.buttonMap.filter(function (r) {
                                var a = v.a.values(t).indexOf(r) > -1,
                                    o = !!i && i.el.parentNode.contains(r.el);
                                return !a && !o;
                            }),
                            a = v.a.min(r, function (t) {
                                return t.top;
                            });
                        return this.buttonMap.filter(function (t) {
                            return t.top === a.top;
                        });
                    },
                    applyArrowNavigationFixes: function applyArrowNavigationFixes() {
                        var t = this.getControlElements(),
                            i = t.dropdownElement,
                            r = t.helpButtonElement,
                            a = t.closeButtonElement,
                            o = this.getFirstRowElements(),
                            s = this.getRootControlElement();
                        this.buttonMap.forEach(function (t) {
                            v.a.contains(o, t) && ((t.isInFirstRow = !0), s && (t.links.UP = s));
                        }),
                            i && a && (i.links.UP = a),
                            a && (r || i) && (a.links.DOWN = r || i);
                        var u = i && i.links.DOWN && i.links.DOWN.el;
                        u && i.el.parentNode.contains(u) && (i.links.DOWN = o[0]);
                    },
                    updateButtonMap: function updateButtonMap(t) {
                        var i = this;
                        !t && this.buttonMapCache[this.group]
                            ? (this.buttonMap = this.buttonMapCache[this.group])
                            : Object(Z.a)(this.$(".lrn-formula-keyboard"), function () {
                                  (i.buttonMap = i.buttonMapCache[i.group] = ce.a.updateButtonMap(i.$("button.lrn_dropdown_toggle, [tabindex]:visible"))), i.applyArrowNavigationFixes();
                              }),
                            (this.rootControlElement = this.getRootControlElement());
                    },
                    updateCapitalisation: function updateCapitalisation(t, i) {
                        "qwerty" === this.group && /^[a-zA-Z]$/.test(i) && this.toggleCaps(/[A-Z]/.test(i));
                    },
                    selectGroup: function selectGroup(t) {
                        this.activateGroup(t.value), this.isFloating && this.restoreFocusToInput();
                    },
                    onMaskTouchstart: function onMaskTouchstart(t) {
                        this.maskTouchstart = t.originalEvent.touches[0].clientY;
                    },
                    restoreFocusToInput: function restoreFocusToInput() {
                        var t = o()(this.options.positioner).find(".lrn_focusable");
                        t && t.focus();
                    },
                    maskHasBeenScrolled: function maskHasBeenScrolled(t) {
                        if (!v.a.isNumber(this.maskTouchstart)) return !1;
                        var i = Math.abs(t.originalEvent.changedTouches[0].clientY - this.maskTouchstart) > 5;
                        return (this.maskTouchstart = null), i;
                    },
                    getMenuContainer: function getMenuContainer() {
                        return this.$(".lrn-formula-keyboard-menu-right").get(0);
                    },
                    _isDropdownClosed: function _isDropdownClosed() {
                        var t = this.menuGroupDropdown;
                        return !t || !t.isOpen();
                    },
                }),
                _e = q.a.View.extend({
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
                        this.$el.parent().length && (this.$el.detach().css({ opacity: "" }), o()(document).off(".lrn." + this.cid), this.previousActiveEl && this.previousActiveEl.focus());
                    },
                    renderMath: function renderMath() {
                        this.$(".mathquill-embedded-latex").each(function () {
                            u.a.InertMath(this);
                        }),
                            (this.isMathRendered = !0);
                    },
                    remove: function remove() {
                        return (
                            o()(document).off(".lrn." + this.cid),
                            this.$(".mathquill-embedded-latex.mq-math-mode").each(function () {
                                u()(this).revert();
                            }),
                            (this.previousActiveEl = null),
                            q.a.View.prototype.remove.apply(this, arguments)
                        );
                    },
                    render: function render() {
                        var t = this.options.i18nLabels.mathKeyboardHelp;
                        return this.setElement(o()(U()({ symbolGroups: this.options.symbolGroups, formulaHelpLabels: t }))), this;
                    },
                    show: function show(t, i) {
                        if (!this.$el.parent().length) {
                            var r = v.a.bind(this.hide, this);
                            this.$el.css({ top: t }).appendTo("body"),
                                this.$(".lrn-content").css({ height: i - parseInt(this.$el.css("marginTop")) }),
                                this.isMathRendered || this.renderMath(),
                                ce.a.recomputeOpacityOn(this.el),
                                this.$el.css({ opacity: 1 }),
                                (this.previousActiveEl = document.activeElement),
                                this.$el.find("[autofocus]").focus(),
                                o()(document).on("mousedown.lrn." + this.cid, r);
                        }
                    },
                });
            i.a = ye;
        },
        206: function (t, i, r) {
            "use strict";
            var a = r(0),
                o = r.n(a),
                s = ["syntax", "argument"],
                u = ["stringMatch"];
            String.prototype.trim ||
                (String.prototype.trim = function () {
                    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                }),
                (i.a = {
                    processSpec: function processSpec(t) {
                        var i, r, a;
                        if (o.a.isObject(t) && "equivSyntax" === t.method)
                            return (o.a.isObject(t.options) && o.a.isString(t.options.syntax) && "" !== t.options.syntax) || !t.value
                                ? ("\\number",
                                  (a = { method: "equivSyntax", value: "" }),
                                  (r = t.options.syntax || "\\number"),
                                  (a.value = "\\format{" + r),
                                  o.a.isNumber(t.options.argument) && (a.value += "{" + t.options.argument + "}"),
                                  (a.value += "}"),
                                  o.a.isBoolean(t.options.ignoreText) && (a.options = { ignoreText: t.options.ignoreText }),
                                  a)
                                : t;
                        for (i = 0; i < s.length; i++) o.a.isObject(t.options) && !o.a.isUndefined(t.options[s[i]]) && delete t.options[s[i]];
                        return t;
                    },
                    useMathCore: function useMathCore(t) {
                        return !(o.a.isObject(t) && -1 !== o.a.indexOf(u, t.method));
                    },
                    validate: function validate(t, i) {
                        var r,
                            a,
                            s,
                            u,
                            m,
                            v = { errorCode: 0, location: void 0, message: "Normal completion", result: !1 };
                        return (
                            o.a.isObject(t) &&
                                o.a.isString(i) &&
                                "stringMatch" === t.method &&
                                o.a.isString(t.value) &&
                                ((r = t.value.replace(/\\\s/g, " ")),
                                (a = i.replace(/\\\s/g, " ")),
                                (u = !o.a.isObject(t.options) || (o.a.isObject(t.options) && !1 !== t.options.ignoreLeadingAndTrailingSpaces)),
                                (m = !o.a.isObject(t.options) || (o.a.isObject(t.options) && !1 !== t.options.treatMultipleSpacesAsOne)),
                                (s = o.a.isObject(t.options) && !0 === t.options.inverseResult),
                                u && ((r = r.trim()), (a = a.trim())),
                                m && ((r = r.replace(/\s+/g, " ")), (a = a.replace(/\s+/g, " "))),
                                (v.result = r === a),
                                s && (v.result = !v.result)),
                            v
                        );
                    },
                });
        },
        207: function (t, i, r) {
            "use strict";
            r.d(i, "a", function () {
                return applySelectiveFontBoost;
            });
            var a = r(232),
                o = r.n(a);
            function applySelectiveFontBoost(t, i) {
                t &&
                    !i &&
                    o.a.isWindows &&
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
        243: function (t, i, r) {
            "use strict";
            r.d(i, "a", function () {
                return mathAccessibility;
            });
            var a = r(0),
                o = r.n(a);
            function mathAccessibility(t, i) {
                (t.processAccessibility = o.a.wrap(t.processAccessibility, function (i, r) {
                    ((r = r || {}).getSourceText = function (t) {
                        return t.find(".lrn-spokenmath").text();
                    }),
                        i.call(t, r);
                })),
                    t.activity.get("state") === t.activity.STATE.REVIEW &&
                        (t.processAccessibility = o.a.wrap(t.processAccessibility, function (r, a) {
                            var s = i(),
                                u = 0;
                            o.a.each(s, function (i) {
                                var o = i.mathEvents;
                                t.listenToOnce(o, o.EVENT.EDITOR_SPOKENMATH_UPDATED, function () {
                                    ++u === s.length && r.call(t, a);
                                });
                            });
                        }));
            }
        },
        246: function (t, i, r) {
            "use strict";
            var a = r(235),
                o = 60103,
                s = 60106;
            (i.Fragment = 60107), (i.StrictMode = 60108), (i.Profiler = 60114);
            var u = 60109,
                m = 60110,
                v = 60112;
            i.Suspense = 60113;
            var T = 60115,
                q = 60116;
            if ("function" == typeof Symbol && Symbol.for) {
                var R = Symbol.for;
                (o = R("react.element")),
                    (s = R("react.portal")),
                    (i.Fragment = R("react.fragment")),
                    (i.StrictMode = R("react.strict_mode")),
                    (i.Profiler = R("react.profiler")),
                    (u = R("react.provider")),
                    (m = R("react.context")),
                    (v = R("react.forward_ref")),
                    (i.Suspense = R("react.suspense")),
                    (T = R("react.memo")),
                    (q = R("react.lazy"));
            }
            var M = "function" == typeof Symbol && Symbol.iterator;
            function z(t) {
                for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++) i += "&args[]=" + encodeURIComponent(arguments[r]);
                return "Minified React error #" + t + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            var j = {
                    isMounted: function () {
                        return !1;
                    },
                    enqueueForceUpdate: function () {},
                    enqueueReplaceState: function () {},
                    enqueueSetState: function () {},
                },
                F = {};
            function C(t, i, r) {
                (this.props = t), (this.context = i), (this.refs = F), (this.updater = r || j);
            }
            function D() {}
            function E(t, i, r) {
                (this.props = t), (this.context = i), (this.refs = F), (this.updater = r || j);
            }
            (C.prototype.isReactComponent = {}),
                (C.prototype.setState = function (t, i) {
                    if ("object" != typeof t && "function" != typeof t && null != t) throw Error(z(85));
                    this.updater.enqueueSetState(this, t, i, "setState");
                }),
                (C.prototype.forceUpdate = function (t) {
                    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
                }),
                (D.prototype = C.prototype);
            var U = (E.prototype = new D());
            (U.constructor = E), a(U, C.prototype), (U.isPureReactComponent = !0);
            var V = { current: null },
                W = Object.prototype.hasOwnProperty,
                $ = { key: !0, ref: !0, __self: !0, __source: !0 };
            function J(t, i, r) {
                var a,
                    s = {},
                    u = null,
                    m = null;
                if (null != i) for (a in (void 0 !== i.ref && (m = i.ref), void 0 !== i.key && (u = "" + i.key), i)) W.call(i, a) && !$.hasOwnProperty(a) && (s[a] = i[a]);
                var v = arguments.length - 2;
                if (1 === v) s.children = r;
                else if (1 < v) {
                    for (var T = Array(v), q = 0; q < v; q++) T[q] = arguments[q + 2];
                    s.children = T;
                }
                if (t && t.defaultProps) for (a in (v = t.defaultProps)) void 0 === s[a] && (s[a] = v[a]);
                return { $$typeof: o, type: t, key: u, ref: m, props: s, _owner: V.current };
            }
            function L(t) {
                return "object" == typeof t && null !== t && t.$$typeof === o;
            }
            var Y = /\/+/g;
            function N(t, i) {
                return "object" == typeof t && null !== t && null != t.key
                    ? (function escape(t) {
                          var i = { "=": "=0", ":": "=2" };
                          return (
                              "$" +
                              t.replace(/[=:]/g, function (t) {
                                  return i[t];
                              })
                          );
                      })("" + t.key)
                    : i.toString(36);
            }
            function O(t, i, r, a, u) {
                var m = typeof t;
                ("undefined" !== m && "boolean" !== m) || (t = null);
                var v = !1;
                if (null === t) v = !0;
                else
                    switch (m) {
                        case "string":
                        case "number":
                            v = !0;
                            break;
                        case "object":
                            switch (t.$$typeof) {
                                case o:
                                case s:
                                    v = !0;
                            }
                    }
                if (v)
                    return (
                        (u = u((v = t))),
                        (t = "" === a ? "." + N(v, 0) : a),
                        Array.isArray(u)
                            ? ((r = ""),
                              null != t && (r = t.replace(Y, "$&/") + "/"),
                              O(u, i, r, "", function (t) {
                                  return t;
                              }))
                            : null != u &&
                              (L(u) &&
                                  (u = (function K(t, i) {
                                      return { $$typeof: o, type: t.type, key: i, ref: t.ref, props: t.props, _owner: t._owner };
                                  })(u, r + (!u.key || (v && v.key === u.key) ? "" : ("" + u.key).replace(Y, "$&/") + "/") + t)),
                              i.push(u)),
                        1
                    );
                if (((v = 0), (a = "" === a ? "." : a + ":"), Array.isArray(t)))
                    for (var T = 0; T < t.length; T++) {
                        var q = a + N((m = t[T]), T);
                        v += O(m, i, r, q, u);
                    }
                else if (
                    "function" ==
                    typeof (q = (function y(t) {
                        return null === t || "object" != typeof t ? null : "function" == typeof (t = (M && t[M]) || t["@@iterator"]) ? t : null;
                    })(t))
                )
                    for (t = q.call(t), T = 0; !(m = t.next()).done; ) v += O((m = m.value), i, r, (q = a + N(m, T++)), u);
                else if ("object" === m) throw ((i = "" + t), Error(z(31, "[object Object]" === i ? "object with keys {" + Object.keys(t).join(", ") + "}" : i)));
                return v;
            }
            function P(t, i, r) {
                if (null == t) return t;
                var a = [],
                    o = 0;
                return (
                    O(t, a, "", "", function (t) {
                        return i.call(r, t, o++);
                    }),
                    a
                );
            }
            function Q(t) {
                if (-1 === t._status) {
                    var i = t._result;
                    (i = i()),
                        (t._status = 0),
                        (t._result = i),
                        i.then(
                            function (i) {
                                0 === t._status && ((i = i.default), (t._status = 1), (t._result = i));
                            },
                            function (i) {
                                0 === t._status && ((t._status = 2), (t._result = i));
                            }
                        );
                }
                if (1 === t._status) return t._result;
                throw t._result;
            }
            var X = { current: null };
            function S() {
                var t = X.current;
                if (null === t) throw Error(z(321));
                return t;
            }
            var Z = { ReactCurrentDispatcher: X, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: V, IsSomeRendererActing: { current: !1 }, assign: a };
            (i.Children = {
                map: P,
                forEach: function (t, i, r) {
                    P(
                        t,
                        function () {
                            i.apply(this, arguments);
                        },
                        r
                    );
                },
                count: function (t) {
                    var i = 0;
                    return (
                        P(t, function () {
                            i++;
                        }),
                        i
                    );
                },
                toArray: function (t) {
                    return (
                        P(t, function (t) {
                            return t;
                        }) || []
                    );
                },
                only: function (t) {
                    if (!L(t)) throw Error(z(143));
                    return t;
                },
            }),
                (i.Component = C),
                (i.PureComponent = E),
                (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
                (i.cloneElement = function (t, i, r) {
                    if (null == t) throw Error(z(267, t));
                    var s = a({}, t.props),
                        u = t.key,
                        m = t.ref,
                        v = t._owner;
                    if (null != i) {
                        if ((void 0 !== i.ref && ((m = i.ref), (v = V.current)), void 0 !== i.key && (u = "" + i.key), t.type && t.type.defaultProps)) var T = t.type.defaultProps;
                        for (q in i) W.call(i, q) && !$.hasOwnProperty(q) && (s[q] = void 0 === i[q] && void 0 !== T ? T[q] : i[q]);
                    }
                    var q = arguments.length - 2;
                    if (1 === q) s.children = r;
                    else if (1 < q) {
                        T = Array(q);
                        for (var R = 0; R < q; R++) T[R] = arguments[R + 2];
                        s.children = T;
                    }
                    return { $$typeof: o, type: t.type, key: u, ref: m, props: s, _owner: v };
                }),
                (i.createContext = function (t, i) {
                    return (
                        void 0 === i && (i = null),
                        ((t = { $$typeof: m, _calculateChangedBits: i, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null }).Provider = { $$typeof: u, _context: t }),
                        (t.Consumer = t)
                    );
                }),
                (i.createElement = J),
                (i.createFactory = function (t) {
                    var i = J.bind(null, t);
                    return (i.type = t), i;
                }),
                (i.createRef = function () {
                    return { current: null };
                }),
                (i.forwardRef = function (t) {
                    return { $$typeof: v, render: t };
                }),
                (i.isValidElement = L),
                (i.lazy = function (t) {
                    return { $$typeof: q, _payload: { _status: -1, _result: t }, _init: Q };
                }),
                (i.memo = function (t, i) {
                    return { $$typeof: T, type: t, compare: void 0 === i ? null : i };
                }),
                (i.useCallback = function (t, i) {
                    return S().useCallback(t, i);
                }),
                (i.useContext = function (t, i) {
                    return S().useContext(t, i);
                }),
                (i.useDebugValue = function () {}),
                (i.useEffect = function (t, i) {
                    return S().useEffect(t, i);
                }),
                (i.useImperativeHandle = function (t, i, r) {
                    return S().useImperativeHandle(t, i, r);
                }),
                (i.useLayoutEffect = function (t, i) {
                    return S().useLayoutEffect(t, i);
                }),
                (i.useMemo = function (t, i) {
                    return S().useMemo(t, i);
                }),
                (i.useReducer = function (t, i, r) {
                    return S().useReducer(t, i, r);
                }),
                (i.useRef = function (t) {
                    return S().useRef(t);
                }),
                (i.useState = function (t) {
                    return S().useState(t);
                }),
                (i.version = "17.0.1");
        },
        247: function (t, i, r) {
            "use strict";
            var a = r(125),
                o = r(235),
                s = r(318);
            function y(t) {
                for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1; r < arguments.length; r++) i += "&args[]=" + encodeURIComponent(arguments[r]);
                return "Minified React error #" + t + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            if (!a) throw Error(y(227));
            var u = new Set(),
                m = {};
            function da(t, i) {
                ea(t, i), ea(t + "Capture", i);
            }
            function ea(t, i) {
                for (m[t] = i, t = 0; t < i.length; t++) u.add(i[t]);
            }
            var v = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                q = Object.prototype.hasOwnProperty,
                R = {},
                M = {};
            function B(t, i, r, a, o, s, u) {
                (this.acceptsBooleans = 2 === i || 3 === i || 4 === i),
                    (this.attributeName = a),
                    (this.attributeNamespace = o),
                    (this.mustUseProperty = r),
                    (this.propertyName = t),
                    (this.type = i),
                    (this.sanitizeURL = s),
                    (this.removeEmptyString = u);
            }
            var j = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (t) {
                j[t] = new B(t, 0, !1, t, null, !1, !1);
            }),
                [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"],
                ].forEach(function (t) {
                    var i = t[0];
                    j[i] = new B(i, 1, !1, t[1], null, !1, !1);
                }),
                ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
                    j[t] = new B(t, 2, !1, t.toLowerCase(), null, !1, !1);
                }),
                ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (t) {
                    j[t] = new B(t, 2, !1, t, null, !1, !1);
                }),
                "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
                    .split(" ")
                    .forEach(function (t) {
                        j[t] = new B(t, 3, !1, t.toLowerCase(), null, !1, !1);
                    }),
                ["checked", "multiple", "muted", "selected"].forEach(function (t) {
                    j[t] = new B(t, 3, !0, t, null, !1, !1);
                }),
                ["capture", "download"].forEach(function (t) {
                    j[t] = new B(t, 4, !1, t, null, !1, !1);
                }),
                ["cols", "rows", "size", "span"].forEach(function (t) {
                    j[t] = new B(t, 6, !1, t, null, !1, !1);
                }),
                ["rowSpan", "start"].forEach(function (t) {
                    j[t] = new B(t, 5, !1, t.toLowerCase(), null, !1, !1);
                });
            var F = /[\-:]([a-z])/g;
            function pa(t) {
                return t[1].toUpperCase();
            }
            function qa(t, i, r, a) {
                var o = j.hasOwnProperty(i) ? j[i] : null;
                (null !== o ? 0 === o.type : !a && 2 < i.length && ("o" === i[0] || "O" === i[0]) && ("n" === i[1] || "N" === i[1])) ||
                    ((function na(t, i, r, a) {
                        if (
                            null == i ||
                            (function ma(t, i, r, a) {
                                if (null !== r && 0 === r.type) return !1;
                                switch (typeof i) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !a && (null !== r ? !r.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
                                    default:
                                        return !1;
                                }
                            })(t, i, r, a)
                        )
                            return !0;
                        if (a) return !1;
                        if (null !== r)
                            switch (r.type) {
                                case 3:
                                    return !i;
                                case 4:
                                    return !1 === i;
                                case 5:
                                    return isNaN(i);
                                case 6:
                                    return isNaN(i) || 1 > i;
                            }
                        return !1;
                    })(i, r, o, a) && (r = null),
                    a || null === o
                        ? (function la(t) {
                              return !!q.call(M, t) || (!q.call(R, t) && (T.test(t) ? (M[t] = !0) : ((R[t] = !0), !1)));
                          })(i) && (null === r ? t.removeAttribute(i) : t.setAttribute(i, "" + r))
                        : o.mustUseProperty
                        ? (t[o.propertyName] = null === r ? 3 !== o.type && "" : r)
                        : ((i = o.attributeName), (a = o.attributeNamespace), null === r ? t.removeAttribute(i) : ((r = 3 === (o = o.type) || (4 === o && !0 === r) ? "" : "" + r), a ? t.setAttributeNS(a, i, r) : t.setAttribute(i, r))));
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
                .split(" ")
                .forEach(function (t) {
                    var i = t.replace(F, pa);
                    j[i] = new B(i, 1, !1, t, null, !1, !1);
                }),
                "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (t) {
                    var i = t.replace(F, pa);
                    j[i] = new B(i, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
                }),
                ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
                    var i = t.replace(F, pa);
                    j[i] = new B(i, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
                }),
                ["tabIndex", "crossOrigin"].forEach(function (t) {
                    j[t] = new B(t, 1, !1, t.toLowerCase(), null, !1, !1);
                }),
                (j.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
                ["src", "href", "action", "formAction"].forEach(function (t) {
                    j[t] = new B(t, 1, !1, t.toLowerCase(), null, !0, !0);
                });
            var U = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                V = 60103,
                W = 60106,
                $ = 60107,
                Y = 60108,
                X = 60114,
                Z = 60109,
                ee = 60110,
                ie = 60112,
                ae = 60113,
                le = 60120,
                ce = 60115,
                de = 60116,
                pe = 60121,
                fe = 60128,
                be = 60129,
                ye = 60130,
                _e = 60131;
            if ("function" == typeof Symbol && Symbol.for) {
                var we = Symbol.for;
                (V = we("react.element")),
                    (W = we("react.portal")),
                    ($ = we("react.fragment")),
                    (Y = we("react.strict_mode")),
                    (X = we("react.profiler")),
                    (Z = we("react.provider")),
                    (ee = we("react.context")),
                    (ie = we("react.forward_ref")),
                    (ae = we("react.suspense")),
                    (le = we("react.suspense_list")),
                    (ce = we("react.memo")),
                    (de = we("react.lazy")),
                    (pe = we("react.block")),
                    we("react.scope"),
                    (fe = we("react.opaque.id")),
                    (be = we("react.debug_trace_mode")),
                    (ye = we("react.offscreen")),
                    (_e = we("react.legacy_hidden"));
            }
            var xe,
                Te = "function" == typeof Symbol && Symbol.iterator;
            function La(t) {
                return null === t || "object" != typeof t ? null : "function" == typeof (t = (Te && t[Te]) || t["@@iterator"]) ? t : null;
            }
            function Na(t) {
                if (void 0 === xe)
                    try {
                        throw Error();
                    } catch (t) {
                        var i = t.stack.trim().match(/\n( *(at )?)/);
                        xe = (i && i[1]) || "";
                    }
                return "\n" + xe + t;
            }
            var Se = !1;
            function Pa(t, i) {
                if (!t || Se) return "";
                Se = !0;
                var r = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (i)
                        if (
                            ((i = function () {
                                throw Error();
                            }),
                            Object.defineProperty(i.prototype, "props", {
                                set: function () {
                                    throw Error();
                                },
                            }),
                            "object" == typeof Reflect && Reflect.construct)
                        ) {
                            try {
                                Reflect.construct(i, []);
                            } catch (t) {
                                var a = t;
                            }
                            Reflect.construct(t, [], i);
                        } else {
                            try {
                                i.call();
                            } catch (t) {
                                a = t;
                            }
                            t.call(i.prototype);
                        }
                    else {
                        try {
                            throw Error();
                        } catch (t) {
                            a = t;
                        }
                        t();
                    }
                } catch (t) {
                    if (t && a && "string" == typeof t.stack) {
                        for (var o = t.stack.split("\n"), s = a.stack.split("\n"), u = o.length - 1, m = s.length - 1; 1 <= u && 0 <= m && o[u] !== s[m]; ) m--;
                        for (; 1 <= u && 0 <= m; u--, m--)
                            if (o[u] !== s[m]) {
                                if (1 !== u || 1 !== m)
                                    do {
                                        if ((u--, 0 > --m || o[u] !== s[m])) return "\n" + o[u].replace(" at new ", " at ");
                                    } while (1 <= u && 0 <= m);
                                break;
                            }
                    }
                } finally {
                    (Se = !1), (Error.prepareStackTrace = r);
                }
                return (t = t ? t.displayName || t.name : "") ? Na(t) : "";
            }
            function Qa(t) {
                switch (t.tag) {
                    case 5:
                        return Na(t.type);
                    case 16:
                        return Na("Lazy");
                    case 13:
                        return Na("Suspense");
                    case 19:
                        return Na("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return (t = Pa(t.type, !1));
                    case 11:
                        return (t = Pa(t.type.render, !1));
                    case 22:
                        return (t = Pa(t.type._render, !1));
                    case 1:
                        return (t = Pa(t.type, !0));
                    default:
                        return "";
                }
            }
            function Ra(t) {
                if (null == t) return null;
                if ("function" == typeof t) return t.displayName || t.name || null;
                if ("string" == typeof t) return t;
                switch (t) {
                    case $:
                        return "Fragment";
                    case W:
                        return "Portal";
                    case X:
                        return "Profiler";
                    case Y:
                        return "StrictMode";
                    case ae:
                        return "Suspense";
                    case le:
                        return "SuspenseList";
                }
                if ("object" == typeof t)
                    switch (t.$$typeof) {
                        case ee:
                            return (t.displayName || "Context") + ".Consumer";
                        case Z:
                            return (t._context.displayName || "Context") + ".Provider";
                        case ie:
                            var i = t.render;
                            return (i = i.displayName || i.name || ""), t.displayName || ("" !== i ? "ForwardRef(" + i + ")" : "ForwardRef");
                        case ce:
                            return Ra(t.type);
                        case pe:
                            return Ra(t._render);
                        case de:
                            (i = t._payload), (t = t._init);
                            try {
                                return Ra(t(i));
                            } catch (t) {}
                    }
                return null;
            }
            function Sa(t) {
                switch (typeof t) {
                    case "boolean":
                    case "number":
                    case "object":
                    case "string":
                    case "undefined":
                        return t;
                    default:
                        return "";
                }
            }
            function Ta(t) {
                var i = t.type;
                return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === i || "radio" === i);
            }
            function Va(t) {
                t._valueTracker ||
                    (t._valueTracker = (function Ua(t) {
                        var i = Ta(t) ? "checked" : "value",
                            r = Object.getOwnPropertyDescriptor(t.constructor.prototype, i),
                            a = "" + t[i];
                        if (!t.hasOwnProperty(i) && void 0 !== r && "function" == typeof r.get && "function" == typeof r.set) {
                            var o = r.get,
                                s = r.set;
                            return (
                                Object.defineProperty(t, i, {
                                    configurable: !0,
                                    get: function () {
                                        return o.call(this);
                                    },
                                    set: function (t) {
                                        (a = "" + t), s.call(this, t);
                                    },
                                }),
                                Object.defineProperty(t, i, { enumerable: r.enumerable }),
                                {
                                    getValue: function () {
                                        return a;
                                    },
                                    setValue: function (t) {
                                        a = "" + t;
                                    },
                                    stopTracking: function () {
                                        (t._valueTracker = null), delete t[i];
                                    },
                                }
                            );
                        }
                    })(t));
            }
            function Wa(t) {
                if (!t) return !1;
                var i = t._valueTracker;
                if (!i) return !0;
                var r = i.getValue(),
                    a = "";
                return t && (a = Ta(t) ? (t.checked ? "true" : "false") : t.value), (t = a) !== r && (i.setValue(t), !0);
            }
            function Xa(t) {
                if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;
                try {
                    return t.activeElement || t.body;
                } catch (i) {
                    return t.body;
                }
            }
            function Ya(t, i) {
                var r = i.checked;
                return o({}, i, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != r ? r : t._wrapperState.initialChecked });
            }
            function Za(t, i) {
                var r = null == i.defaultValue ? "" : i.defaultValue,
                    a = null != i.checked ? i.checked : i.defaultChecked;
                (r = Sa(null != i.value ? i.value : r)), (t._wrapperState = { initialChecked: a, initialValue: r, controlled: "checkbox" === i.type || "radio" === i.type ? null != i.checked : null != i.value });
            }
            function $a(t, i) {
                null != (i = i.checked) && qa(t, "checked", i, !1);
            }
            function ab(t, i) {
                $a(t, i);
                var r = Sa(i.value),
                    a = i.type;
                if (null != r) "number" === a ? ((0 === r && "" === t.value) || t.value != r) && (t.value = "" + r) : t.value !== "" + r && (t.value = "" + r);
                else if ("submit" === a || "reset" === a) return void t.removeAttribute("value");
                i.hasOwnProperty("value") ? bb(t, i.type, r) : i.hasOwnProperty("defaultValue") && bb(t, i.type, Sa(i.defaultValue)), null == i.checked && null != i.defaultChecked && (t.defaultChecked = !!i.defaultChecked);
            }
            function cb(t, i, r) {
                if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
                    var a = i.type;
                    if (!(("submit" !== a && "reset" !== a) || (void 0 !== i.value && null !== i.value))) return;
                    (i = "" + t._wrapperState.initialValue), r || i === t.value || (t.value = i), (t.defaultValue = i);
                }
                "" !== (r = t.name) && (t.name = ""), (t.defaultChecked = !!t._wrapperState.initialChecked), "" !== r && (t.name = r);
            }
            function bb(t, i, r) {
                ("number" === i && Xa(t.ownerDocument) === t) || (null == r ? (t.defaultValue = "" + t._wrapperState.initialValue) : t.defaultValue !== "" + r && (t.defaultValue = "" + r));
            }
            function eb(t, i) {
                return (
                    (t = o({ children: void 0 }, i)),
                    (i = (function db(t) {
                        var i = "";
                        return (
                            a.Children.forEach(t, function (t) {
                                null != t && (i += t);
                            }),
                            i
                        );
                    })(i.children)) && (t.children = i),
                    t
                );
            }
            function fb(t, i, r, a) {
                if (((t = t.options), i)) {
                    i = {};
                    for (var o = 0; o < r.length; o++) i["$" + r[o]] = !0;
                    for (r = 0; r < t.length; r++) (o = i.hasOwnProperty("$" + t[r].value)), t[r].selected !== o && (t[r].selected = o), o && a && (t[r].defaultSelected = !0);
                } else {
                    for (r = "" + Sa(r), i = null, o = 0; o < t.length; o++) {
                        if (t[o].value === r) return (t[o].selected = !0), void (a && (t[o].defaultSelected = !0));
                        null !== i || t[o].disabled || (i = t[o]);
                    }
                    null !== i && (i.selected = !0);
                }
            }
            function gb(t, i) {
                if (null != i.dangerouslySetInnerHTML) throw Error(y(91));
                return o({}, i, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
            }
            function hb(t, i) {
                var r = i.value;
                if (null == r) {
                    if (((r = i.children), (i = i.defaultValue), null != r)) {
                        if (null != i) throw Error(y(92));
                        if (Array.isArray(r)) {
                            if (!(1 >= r.length)) throw Error(y(93));
                            r = r[0];
                        }
                        i = r;
                    }
                    null == i && (i = ""), (r = i);
                }
                t._wrapperState = { initialValue: Sa(r) };
            }
            function ib(t, i) {
                var r = Sa(i.value),
                    a = Sa(i.defaultValue);
                null != r && ((r = "" + r) !== t.value && (t.value = r), null == i.defaultValue && t.defaultValue !== r && (t.defaultValue = r)), null != a && (t.defaultValue = "" + a);
            }
            function jb(t) {
                var i = t.textContent;
                i === t._wrapperState.initialValue && "" !== i && null !== i && (t.value = i);
            }
            var qe = "http://www.w3.org/1999/xhtml",
                Re = "http://www.w3.org/2000/svg";
            function lb(t) {
                switch (t) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml";
                }
            }
            function mb(t, i) {
                return null == t || "http://www.w3.org/1999/xhtml" === t ? lb(i) : "http://www.w3.org/2000/svg" === t && "foreignObject" === i ? "http://www.w3.org/1999/xhtml" : t;
            }
            var Pe,
                Ie = (function (t) {
                    return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
                        ? function (i, r, a, o) {
                              MSApp.execUnsafeLocalFunction(function () {
                                  return t(i, r);
                              });
                          }
                        : t;
                })(function (t, i) {
                    if (t.namespaceURI !== Re || "innerHTML" in t) t.innerHTML = i;
                    else {
                        for ((Pe = Pe || document.createElement("div")).innerHTML = "<svg>" + i.valueOf().toString() + "</svg>", i = Pe.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
                        for (; i.firstChild; ) t.appendChild(i.firstChild);
                    }
                });
            function pb(t, i) {
                if (i) {
                    var r = t.firstChild;
                    if (r && r === t.lastChild && 3 === r.nodeType) return void (r.nodeValue = i);
                }
                t.textContent = i;
            }
            var ze = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridArea: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0,
                },
                Ve = ["Webkit", "ms", "Moz", "O"];
            function sb(t, i, r) {
                return null == i || "boolean" == typeof i || "" === i ? "" : r || "number" != typeof i || 0 === i || (ze.hasOwnProperty(t) && ze[t]) ? ("" + i).trim() : i + "px";
            }
            function tb(t, i) {
                for (var r in ((t = t.style), i))
                    if (i.hasOwnProperty(r)) {
                        var a = 0 === r.indexOf("--"),
                            o = sb(r, i[r], a);
                        "float" === r && (r = "cssFloat"), a ? t.setProperty(r, o) : (t[r] = o);
                    }
            }
            Object.keys(ze).forEach(function (t) {
                Ve.forEach(function (i) {
                    (i = i + t.charAt(0).toUpperCase() + t.substring(1)), (ze[i] = ze[t]);
                });
            });
            var He = o({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
            function vb(t, i) {
                if (i) {
                    if (He[t] && (null != i.children || null != i.dangerouslySetInnerHTML)) throw Error(y(137, t));
                    if (null != i.dangerouslySetInnerHTML) {
                        if (null != i.children) throw Error(y(60));
                        if (!("object" == typeof i.dangerouslySetInnerHTML && "__html" in i.dangerouslySetInnerHTML)) throw Error(y(61));
                    }
                    if (null != i.style && "object" != typeof i.style) throw Error(y(62));
                }
            }
            function wb(t, i) {
                if (-1 === t.indexOf("-")) return "string" == typeof i.is;
                switch (t) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0;
                }
            }
            function xb(t) {
                return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t;
            }
            var Qe = null,
                We = null,
                Ye = null;
            function Bb(t) {
                if ((t = Cb(t))) {
                    if ("function" != typeof Qe) throw Error(y(280));
                    var i = t.stateNode;
                    i && ((i = Db(i)), Qe(t.stateNode, t.type, i));
                }
            }
            function Eb(t) {
                We ? (Ye ? Ye.push(t) : (Ye = [t])) : (We = t);
            }
            function Fb() {
                if (We) {
                    var t = We,
                        i = Ye;
                    if (((Ye = We = null), Bb(t), i)) for (t = 0; t < i.length; t++) Bb(i[t]);
                }
            }
            function Gb(t, i) {
                return t(i);
            }
            function Hb(t, i, r, a, o) {
                return t(i, r, a, o);
            }
            function Ib() {}
            var Xe = Gb,
                et = !1,
                tt = !1;
            function Mb() {
                (null === We && null === Ye) || (Ib(), Fb());
            }
            function Ob(t, i) {
                var r = t.stateNode;
                if (null === r) return null;
                var a = Db(r);
                if (null === a) return null;
                r = a[i];
                e: switch (i) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                    case "onMouseEnter":
                        (a = !a.disabled) || (a = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), (t = !a);
                        break e;
                    default:
                        t = !1;
                }
                if (t) return null;
                if (r && "function" != typeof r) throw Error(y(231, i, typeof r));
                return r;
            }
            var nt = !1;
            if (v)
                try {
                    var it = {};
                    Object.defineProperty(it, "passive", {
                        get: function () {
                            nt = !0;
                        },
                    }),
                        window.addEventListener("test", it, it),
                        window.removeEventListener("test", it, it);
                } catch (t) {
                    nt = !1;
                }
            function Rb(t, i, r, a, o, s, u, m, v) {
                var T = Array.prototype.slice.call(arguments, 3);
                try {
                    i.apply(r, T);
                } catch (t) {
                    this.onError(t);
                }
            }
            var rt = !1,
                at = null,
                ot = !1,
                st = null,
                lt = {
                    onError: function (t) {
                        (rt = !0), (at = t);
                    },
                };
            function Xb(t, i, r, a, o, s, u, m, v) {
                (rt = !1), (at = null), Rb.apply(lt, arguments);
            }
            function Zb(t) {
                var i = t,
                    r = t;
                if (t.alternate) for (; i.return; ) i = i.return;
                else {
                    t = i;
                    do {
                        0 != (1026 & (i = t).flags) && (r = i.return), (t = i.return);
                    } while (t);
                }
                return 3 === i.tag ? r : null;
            }
            function $b(t) {
                if (13 === t.tag) {
                    var i = t.memoizedState;
                    if ((null === i && null !== (t = t.alternate) && (i = t.memoizedState), null !== i)) return i.dehydrated;
                }
                return null;
            }
            function ac(t) {
                if (Zb(t) !== t) throw Error(y(188));
            }
            function cc(t) {
                if (
                    !(t = (function bc(t) {
                        var i = t.alternate;
                        if (!i) {
                            if (null === (i = Zb(t))) throw Error(y(188));
                            return i !== t ? null : t;
                        }
                        for (var r = t, a = i; ; ) {
                            var o = r.return;
                            if (null === o) break;
                            var s = o.alternate;
                            if (null === s) {
                                if (null !== (a = o.return)) {
                                    r = a;
                                    continue;
                                }
                                break;
                            }
                            if (o.child === s.child) {
                                for (s = o.child; s; ) {
                                    if (s === r) return ac(o), t;
                                    if (s === a) return ac(o), i;
                                    s = s.sibling;
                                }
                                throw Error(y(188));
                            }
                            if (r.return !== a.return) (r = o), (a = s);
                            else {
                                for (var u = !1, m = o.child; m; ) {
                                    if (m === r) {
                                        (u = !0), (r = o), (a = s);
                                        break;
                                    }
                                    if (m === a) {
                                        (u = !0), (a = o), (r = s);
                                        break;
                                    }
                                    m = m.sibling;
                                }
                                if (!u) {
                                    for (m = s.child; m; ) {
                                        if (m === r) {
                                            (u = !0), (r = s), (a = o);
                                            break;
                                        }
                                        if (m === a) {
                                            (u = !0), (a = s), (r = o);
                                            break;
                                        }
                                        m = m.sibling;
                                    }
                                    if (!u) throw Error(y(189));
                                }
                            }
                            if (r.alternate !== a) throw Error(y(190));
                        }
                        if (3 !== r.tag) throw Error(y(188));
                        return r.stateNode.current === r ? t : i;
                    })(t))
                )
                    return null;
                for (var i = t; ; ) {
                    if (5 === i.tag || 6 === i.tag) return i;
                    if (i.child) (i.child.return = i), (i = i.child);
                    else {
                        if (i === t) break;
                        for (; !i.sibling; ) {
                            if (!i.return || i.return === t) return null;
                            i = i.return;
                        }
                        (i.sibling.return = i.return), (i = i.sibling);
                    }
                }
                return null;
            }
            function dc(t, i) {
                for (var r = t.alternate; null !== i; ) {
                    if (i === t || i === r) return !0;
                    i = i.return;
                }
                return !1;
            }
            var ut,
                ct,
                dt,
                ht,
                pt = !1,
                ft = [],
                mt = null,
                gt = null,
                bt = null,
                yt = new Map(),
                vt = new Map(),
                _t = [],
                wt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                    " "
                );
            function rc(t, i, r, a, o) {
                return { blockedOn: t, domEventName: i, eventSystemFlags: 16 | r, nativeEvent: o, targetContainers: [a] };
            }
            function sc(t, i) {
                switch (t) {
                    case "focusin":
                    case "focusout":
                        mt = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        gt = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        bt = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        yt.delete(i.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        vt.delete(i.pointerId);
                }
            }
            function tc(t, i, r, a, o, s) {
                return null === t || t.nativeEvent !== s ? ((t = rc(i, r, a, o, s)), null !== i && null !== (i = Cb(i)) && ct(i), t) : ((t.eventSystemFlags |= a), (i = t.targetContainers), null !== o && -1 === i.indexOf(o) && i.push(o), t);
            }
            function vc(t) {
                var i = wc(t.target);
                if (null !== i) {
                    var r = Zb(i);
                    if (null !== r)
                        if (13 === (i = r.tag)) {
                            if (null !== (i = $b(r)))
                                return (
                                    (t.blockedOn = i),
                                    void ht(t.lanePriority, function () {
                                        s.unstable_runWithPriority(t.priority, function () {
                                            dt(r);
                                        });
                                    })
                                );
                        } else if (3 === i && r.stateNode.hydrate) return void (t.blockedOn = 3 === r.tag ? r.stateNode.containerInfo : null);
                }
                t.blockedOn = null;
            }
            function xc(t) {
                if (null !== t.blockedOn) return !1;
                for (var i = t.targetContainers; 0 < i.length; ) {
                    var r = yc(t.domEventName, t.eventSystemFlags, i[0], t.nativeEvent);
                    if (null !== r) return null !== (i = Cb(r)) && ct(i), (t.blockedOn = r), !1;
                    i.shift();
                }
                return !0;
            }
            function zc(t, i, r) {
                xc(t) && r.delete(i);
            }
            function Ac() {
                for (pt = !1; 0 < ft.length; ) {
                    var t = ft[0];
                    if (null !== t.blockedOn) {
                        null !== (t = Cb(t.blockedOn)) && ut(t);
                        break;
                    }
                    for (var i = t.targetContainers; 0 < i.length; ) {
                        var r = yc(t.domEventName, t.eventSystemFlags, i[0], t.nativeEvent);
                        if (null !== r) {
                            t.blockedOn = r;
                            break;
                        }
                        i.shift();
                    }
                    null === t.blockedOn && ft.shift();
                }
                null !== mt && xc(mt) && (mt = null), null !== gt && xc(gt) && (gt = null), null !== bt && xc(bt) && (bt = null), yt.forEach(zc), vt.forEach(zc);
            }
            function Bc(t, i) {
                t.blockedOn === i && ((t.blockedOn = null), pt || ((pt = !0), s.unstable_scheduleCallback(s.unstable_NormalPriority, Ac)));
            }
            function Cc(t) {
                function b(i) {
                    return Bc(i, t);
                }
                if (0 < ft.length) {
                    Bc(ft[0], t);
                    for (var i = 1; i < ft.length; i++) {
                        var r = ft[i];
                        r.blockedOn === t && (r.blockedOn = null);
                    }
                }
                for (null !== mt && Bc(mt, t), null !== gt && Bc(gt, t), null !== bt && Bc(bt, t), yt.forEach(b), vt.forEach(b), i = 0; i < _t.length; i++) (r = _t[i]).blockedOn === t && (r.blockedOn = null);
                for (; 0 < _t.length && null === (i = _t[0]).blockedOn; ) vc(i), null === i.blockedOn && _t.shift();
            }
            function Dc(t, i) {
                var r = {};
                return (r[t.toLowerCase()] = i.toLowerCase()), (r["Webkit" + t] = "webkit" + i), (r["Moz" + t] = "moz" + i), r;
            }
            var xt = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") },
                Et = {},
                kt = {};
            function Hc(t) {
                if (Et[t]) return Et[t];
                if (!xt[t]) return t;
                var i,
                    r = xt[t];
                for (i in r) if (r.hasOwnProperty(i) && i in kt) return (Et[t] = r[i]);
                return t;
            }
            v &&
                ((kt = document.createElement("div").style),
                "AnimationEvent" in window || (delete xt.animationend.animation, delete xt.animationiteration.animation, delete xt.animationstart.animation),
                "TransitionEvent" in window || delete xt.transitionend.transition);
            var Tt = Hc("animationend"),
                Ct = Hc("animationiteration"),
                St = Hc("animationstart"),
                qt = Hc("transitionend"),
                Ot = new Map(),
                At = new Map(),
                Dt = [
                    "abort",
                    "abort",
                    Tt,
                    "animationEnd",
                    Ct,
                    "animationIteration",
                    St,
                    "animationStart",
                    "canplay",
                    "canPlay",
                    "canplaythrough",
                    "canPlayThrough",
                    "durationchange",
                    "durationChange",
                    "emptied",
                    "emptied",
                    "encrypted",
                    "encrypted",
                    "ended",
                    "ended",
                    "error",
                    "error",
                    "gotpointercapture",
                    "gotPointerCapture",
                    "load",
                    "load",
                    "loadeddata",
                    "loadedData",
                    "loadedmetadata",
                    "loadedMetadata",
                    "loadstart",
                    "loadStart",
                    "lostpointercapture",
                    "lostPointerCapture",
                    "playing",
                    "playing",
                    "progress",
                    "progress",
                    "seeking",
                    "seeking",
                    "stalled",
                    "stalled",
                    "suspend",
                    "suspend",
                    "timeupdate",
                    "timeUpdate",
                    qt,
                    "transitionEnd",
                    "waiting",
                    "waiting",
                ];
            function Pc(t, i) {
                for (var r = 0; r < t.length; r += 2) {
                    var a = t[r],
                        o = t[r + 1];
                    (o = "on" + (o[0].toUpperCase() + o.slice(1))), At.set(a, i), Ot.set(a, o), da(o, [a]);
                }
            }
            (0, s.unstable_now)();
            var Lt = 8;
            function Rc(t) {
                if (0 != (1 & t)) return (Lt = 15), 1;
                if (0 != (2 & t)) return (Lt = 14), 2;
                if (0 != (4 & t)) return (Lt = 13), 4;
                var i = 24 & t;
                return 0 !== i
                    ? ((Lt = 12), i)
                    : 0 != (32 & t)
                    ? ((Lt = 11), 32)
                    : 0 !== (i = 192 & t)
                    ? ((Lt = 10), i)
                    : 0 != (256 & t)
                    ? ((Lt = 9), 256)
                    : 0 !== (i = 3584 & t)
                    ? ((Lt = 8), i)
                    : 0 != (4096 & t)
                    ? ((Lt = 7), 4096)
                    : 0 !== (i = 4186112 & t)
                    ? ((Lt = 6), i)
                    : 0 !== (i = 62914560 & t)
                    ? ((Lt = 5), i)
                    : 67108864 & t
                    ? ((Lt = 4), 67108864)
                    : 0 != (134217728 & t)
                    ? ((Lt = 3), 134217728)
                    : 0 !== (i = 805306368 & t)
                    ? ((Lt = 2), i)
                    : 0 != (1073741824 & t)
                    ? ((Lt = 1), 1073741824)
                    : ((Lt = 8), t);
            }
            function Uc(t, i) {
                var r = t.pendingLanes;
                if (0 === r) return (Lt = 0);
                var a = 0,
                    o = 0,
                    s = t.expiredLanes,
                    u = t.suspendedLanes,
                    m = t.pingedLanes;
                if (0 !== s) (a = s), (o = Lt = 15);
                else if (0 !== (s = 134217727 & r)) {
                    var v = s & ~u;
                    0 !== v ? ((a = Rc(v)), (o = Lt)) : 0 !== (m &= s) && ((a = Rc(m)), (o = Lt));
                } else 0 !== (s = r & ~u) ? ((a = Rc(s)), (o = Lt)) : 0 !== m && ((a = Rc(m)), (o = Lt));
                if (0 === a) return 0;
                if (((a = r & (((0 > (a = 31 - Rt(a)) ? 0 : 1 << a) << 1) - 1)), 0 !== i && i !== a && 0 == (i & u))) {
                    if ((Rc(i), o <= Lt)) return i;
                    Lt = o;
                }
                if (0 !== (i = t.entangledLanes)) for (t = t.entanglements, i &= a; 0 < i; ) (o = 1 << (r = 31 - Rt(i))), (a |= t[r]), (i &= ~o);
                return a;
            }
            function Wc(t) {
                return 0 !== (t = -1073741825 & t.pendingLanes) ? t : 1073741824 & t ? 1073741824 : 0;
            }
            function Xc(t, i) {
                switch (t) {
                    case 15:
                        return 1;
                    case 14:
                        return 2;
                    case 12:
                        return 0 === (t = Yc(24 & ~i)) ? Xc(10, i) : t;
                    case 10:
                        return 0 === (t = Yc(192 & ~i)) ? Xc(8, i) : t;
                    case 8:
                        return 0 === (t = Yc(3584 & ~i)) && 0 === (t = Yc(4186112 & ~i)) && (t = 512), t;
                    case 2:
                        return 0 === (i = Yc(805306368 & ~i)) && (i = 268435456), i;
                }
                throw Error(y(358, t));
            }
            function Yc(t) {
                return t & -t;
            }
            function Zc(t) {
                for (var i = [], r = 0; 31 > r; r++) i.push(t);
                return i;
            }
            function $c(t, i, r) {
                t.pendingLanes |= i;
                var a = i - 1;
                (t.suspendedLanes &= a), (t.pingedLanes &= a), ((t = t.eventTimes)[(i = 31 - Rt(i))] = r);
            }
            var Rt = Math.clz32
                    ? Math.clz32
                    : function ad(t) {
                          return 0 === t ? 32 : (31 - ((Pt(t) / Nt) | 0)) | 0;
                      },
                Pt = Math.log,
                Nt = Math.LN2;
            var It = s.unstable_UserBlockingPriority,
                Mt = s.unstable_runWithPriority,
                jt = !0;
            function gd(t, i, r, a) {
                et || Ib();
                var o = hd,
                    s = et;
                et = !0;
                try {
                    Hb(o, t, i, r, a);
                } finally {
                    (et = s) || Mb();
                }
            }
            function id(t, i, r, a) {
                Mt(It, hd.bind(null, t, i, r, a));
            }
            function hd(t, i, r, a) {
                var o;
                if (jt)
                    if ((o = 0 == (4 & i)) && 0 < ft.length && -1 < wt.indexOf(t)) (t = rc(null, t, i, r, a)), ft.push(t);
                    else {
                        var s = yc(t, i, r, a);
                        if (null === s) o && sc(t, a);
                        else {
                            if (o) {
                                if (-1 < wt.indexOf(t)) return (t = rc(s, t, i, r, a)), void ft.push(t);
                                if (
                                    (function uc(t, i, r, a, o) {
                                        switch (i) {
                                            case "focusin":
                                                return (mt = tc(mt, t, i, r, a, o)), !0;
                                            case "dragenter":
                                                return (gt = tc(gt, t, i, r, a, o)), !0;
                                            case "mouseover":
                                                return (bt = tc(bt, t, i, r, a, o)), !0;
                                            case "pointerover":
                                                var s = o.pointerId;
                                                return yt.set(s, tc(yt.get(s) || null, t, i, r, a, o)), !0;
                                            case "gotpointercapture":
                                                return (s = o.pointerId), vt.set(s, tc(vt.get(s) || null, t, i, r, a, o)), !0;
                                        }
                                        return !1;
                                    })(s, t, i, r, a)
                                )
                                    return;
                                sc(t, a);
                            }
                            jd(t, i, a, null, r);
                        }
                    }
            }
            function yc(t, i, r, a) {
                var o = xb(a);
                if (null !== (o = wc(o))) {
                    var s = Zb(o);
                    if (null === s) o = null;
                    else {
                        var u = s.tag;
                        if (13 === u) {
                            if (null !== (o = $b(s))) return o;
                            o = null;
                        } else if (3 === u) {
                            if (s.stateNode.hydrate) return 3 === s.tag ? s.stateNode.containerInfo : null;
                            o = null;
                        } else s !== o && (o = null);
                    }
                }
                return jd(t, i, a, o, r), null;
            }
            var Bt = null,
                Ft = null,
                Ut = null;
            function nd() {
                if (Ut) return Ut;
                var t,
                    i,
                    r = Ft,
                    a = r.length,
                    o = "value" in Bt ? Bt.value : Bt.textContent,
                    s = o.length;
                for (t = 0; t < a && r[t] === o[t]; t++);
                var u = a - t;
                for (i = 1; i <= u && r[a - i] === o[s - i]; i++);
                return (Ut = o.slice(t, 1 < i ? 1 - i : void 0));
            }
            function od(t) {
                var i = t.keyCode;
                return "charCode" in t ? 0 === (t = t.charCode) && 13 === i && (t = 13) : (t = i), 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0;
            }
            function pd() {
                return !0;
            }
            function qd() {
                return !1;
            }
            function rd(t) {
                function b(i, r, a, o, s) {
                    for (var u in ((this._reactName = i), (this._targetInst = a), (this.type = r), (this.nativeEvent = o), (this.target = s), (this.currentTarget = null), t)) t.hasOwnProperty(u) && ((i = t[u]), (this[u] = i ? i(o) : o[u]));
                    return (this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? pd : qd), (this.isPropagationStopped = qd), this;
                }
                return (
                    o(b.prototype, {
                        preventDefault: function () {
                            this.defaultPrevented = !0;
                            var t = this.nativeEvent;
                            t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1), (this.isDefaultPrevented = pd));
                        },
                        stopPropagation: function () {
                            var t = this.nativeEvent;
                            t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0), (this.isPropagationStopped = pd));
                        },
                        persist: function () {},
                        isPersistent: pd,
                    }),
                    b
                );
            }
            var zt,
                Vt,
                Ht,
                Qt = {
                    eventPhase: 0,
                    bubbles: 0,
                    cancelable: 0,
                    timeStamp: function (t) {
                        return t.timeStamp || Date.now();
                    },
                    defaultPrevented: 0,
                    isTrusted: 0,
                },
                Wt = rd(Qt),
                Kt = o({}, Qt, { view: 0, detail: 0 }),
                $t = rd(Kt),
                Gt = o({}, Kt, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: zd,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (t) {
                        return void 0 === t.relatedTarget ? (t.fromElement === t.srcElement ? t.toElement : t.fromElement) : t.relatedTarget;
                    },
                    movementX: function (t) {
                        return "movementX" in t ? t.movementX : (t !== Ht && (Ht && "mousemove" === t.type ? ((zt = t.screenX - Ht.screenX), (Vt = t.screenY - Ht.screenY)) : (Vt = zt = 0), (Ht = t)), zt);
                    },
                    movementY: function (t) {
                        return "movementY" in t ? t.movementY : Vt;
                    },
                }),
                Yt = rd(Gt),
                Xt = rd(o({}, Gt, { dataTransfer: 0 })),
                Zt = rd(o({}, Kt, { relatedTarget: 0 })),
                Jt = rd(o({}, Qt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
                en = rd(
                    o({}, Qt, {
                        clipboardData: function (t) {
                            return "clipboardData" in t ? t.clipboardData : window.clipboardData;
                        },
                    })
                ),
                tn = rd(o({}, Qt, { data: 0 })),
                nn = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified",
                },
                rn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta",
                },
                an = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
            function Pd(t) {
                var i = this.nativeEvent;
                return i.getModifierState ? i.getModifierState(t) : !!(t = an[t]) && !!i[t];
            }
            function zd() {
                return Pd;
            }
            var on = rd(
                    o({}, Kt, {
                        key: function (t) {
                            if (t.key) {
                                var i = nn[t.key] || t.key;
                                if ("Unidentified" !== i) return i;
                            }
                            return "keypress" === t.type ? (13 === (t = od(t)) ? "Enter" : String.fromCharCode(t)) : "keydown" === t.type || "keyup" === t.type ? rn[t.keyCode] || "Unidentified" : "";
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: zd,
                        charCode: function (t) {
                            return "keypress" === t.type ? od(t) : 0;
                        },
                        keyCode: function (t) {
                            return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0;
                        },
                        which: function (t) {
                            return "keypress" === t.type ? od(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0;
                        },
                    })
                ),
                sn = rd(o({}, Gt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })),
                ln = rd(o({}, Kt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd })),
                un = rd(o({}, Qt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
                cn = rd(
                    o({}, Gt, {
                        deltaX: function (t) {
                            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
                        },
                        deltaY: function (t) {
                            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
                        },
                        deltaZ: 0,
                        deltaMode: 0,
                    })
                ),
                dn = [9, 13, 27, 32],
                hn = v && "CompositionEvent" in window,
                pn = null;
            v && "documentMode" in document && (pn = document.documentMode);
            var fn = v && "TextEvent" in window && !pn,
                mn = v && (!hn || (pn && 8 < pn && 11 >= pn)),
                gn = String.fromCharCode(32),
                bn = !1;
            function ge(t, i) {
                switch (t) {
                    case "keyup":
                        return -1 !== dn.indexOf(i.keyCode);
                    case "keydown":
                        return 229 !== i.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "focusout":
                        return !0;
                    default:
                        return !1;
                }
            }
            function he(t) {
                return "object" == typeof (t = t.detail) && "data" in t ? t.data : null;
            }
            var yn = !1;
            var vn = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
            function me(t) {
                var i = t && t.nodeName && t.nodeName.toLowerCase();
                return "input" === i ? !!vn[t.type] : "textarea" === i;
            }
            function ne(t, i, r, a) {
                Eb(a), 0 < (i = oe(i, "onChange")).length && ((r = new Wt("onChange", "change", null, r, a)), t.push({ event: r, listeners: i }));
            }
            var _n = null,
                wn = null;
            function re(t) {
                se(t, 0);
            }
            function te(t) {
                if (Wa(ue(t))) return t;
            }
            function ve(t, i) {
                if ("change" === t) return i;
            }
            var xn = !1;
            if (v) {
                var En;
                if (v) {
                    var kn = "oninput" in document;
                    if (!kn) {
                        var Tn = document.createElement("div");
                        Tn.setAttribute("oninput", "return;"), (kn = "function" == typeof Tn.oninput);
                    }
                    En = kn;
                } else En = !1;
                xn = En && (!document.documentMode || 9 < document.documentMode);
            }
            function Ae() {
                _n && (_n.detachEvent("onpropertychange", Be), (wn = _n = null));
            }
            function Be(t) {
                if ("value" === t.propertyName && te(wn)) {
                    var i = [];
                    if ((ne(i, wn, t, xb(t)), (t = re), et)) t(i);
                    else {
                        et = !0;
                        try {
                            Gb(t, i);
                        } finally {
                            (et = !1), Mb();
                        }
                    }
                }
            }
            function Ce(t, i, r) {
                "focusin" === t ? (Ae(), (wn = r), (_n = i).attachEvent("onpropertychange", Be)) : "focusout" === t && Ae();
            }
            function De(t) {
                if ("selectionchange" === t || "keyup" === t || "keydown" === t) return te(wn);
            }
            function Ee(t, i) {
                if ("click" === t) return te(i);
            }
            function Fe(t, i) {
                if ("input" === t || "change" === t) return te(i);
            }
            var Cn =
                    "function" == typeof Object.is
                        ? Object.is
                        : function Ge(t, i) {
                              return (t === i && (0 !== t || 1 / t == 1 / i)) || (t != t && i != i);
                          },
                Sn = Object.prototype.hasOwnProperty;
            function Je(t, i) {
                if (Cn(t, i)) return !0;
                if ("object" != typeof t || null === t || "object" != typeof i || null === i) return !1;
                var r = Object.keys(t),
                    a = Object.keys(i);
                if (r.length !== a.length) return !1;
                for (a = 0; a < r.length; a++) if (!Sn.call(i, r[a]) || !Cn(t[r[a]], i[r[a]])) return !1;
                return !0;
            }
            function Ke(t) {
                for (; t && t.firstChild; ) t = t.firstChild;
                return t;
            }
            function Le(t, i) {
                var r,
                    a = Ke(t);
                for (t = 0; a; ) {
                    if (3 === a.nodeType) {
                        if (((r = t + a.textContent.length), t <= i && r >= i)) return { node: a, offset: i - t };
                        t = r;
                    }
                    e: {
                        for (; a; ) {
                            if (a.nextSibling) {
                                a = a.nextSibling;
                                break e;
                            }
                            a = a.parentNode;
                        }
                        a = void 0;
                    }
                    a = Ke(a);
                }
            }
            function Ne() {
                for (var t = window, i = Xa(); i instanceof t.HTMLIFrameElement; ) {
                    try {
                        var r = "string" == typeof i.contentWindow.location.href;
                    } catch (t) {
                        r = !1;
                    }
                    if (!r) break;
                    i = Xa((t = i.contentWindow).document);
                }
                return i;
            }
            function Oe(t) {
                var i = t && t.nodeName && t.nodeName.toLowerCase();
                return i && (("input" === i && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type)) || "textarea" === i || "true" === t.contentEditable);
            }
            var qn = v && "documentMode" in document && 11 >= document.documentMode,
                On = null,
                An = null,
                Dn = null,
                Ln = !1;
            function Ue(t, i, r) {
                var a = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
                Ln ||
                    null == On ||
                    On !== Xa(a) ||
                    ("selectionStart" in (a = On) && Oe(a)
                        ? (a = { start: a.selectionStart, end: a.selectionEnd })
                        : (a = { anchorNode: (a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()).anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }),
                    (Dn && Je(Dn, a)) || ((Dn = a), 0 < (a = oe(An, "onSelect")).length && ((i = new Wt("onSelect", "select", null, i, r)), t.push({ event: i, listeners: a }), (i.target = On))));
            }
            Pc(
                "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
                    " "
                ),
                0
            ),
                Pc(
                    "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
                        " "
                    ),
                    1
                ),
                Pc(Dt, 2);
            for (var Rn = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Pn = 0; Pn < Rn.length; Pn++) At.set(Rn[Pn], 0);
            ea("onMouseEnter", ["mouseout", "mouseover"]),
                ea("onMouseLeave", ["mouseout", "mouseover"]),
                ea("onPointerEnter", ["pointerout", "pointerover"]),
                ea("onPointerLeave", ["pointerout", "pointerover"]),
                da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
                da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
                da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
                da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
                da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
                da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
                    " "
                ),
                In = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
            function Ze(t, i, r) {
                var a = t.type || "unknown-event";
                (t.currentTarget = r),
                    (function Yb(t, i, r, a, o, s, u, m, v) {
                        if ((Xb.apply(this, arguments), rt)) {
                            if (!rt) throw Error(y(198));
                            var T = at;
                            (rt = !1), (at = null), ot || ((ot = !0), (st = T));
                        }
                    })(a, i, void 0, t),
                    (t.currentTarget = null);
            }
            function se(t, i) {
                i = 0 != (4 & i);
                for (var r = 0; r < t.length; r++) {
                    var a = t[r],
                        o = a.event;
                    a = a.listeners;
                    e: {
                        var s = void 0;
                        if (i)
                            for (var u = a.length - 1; 0 <= u; u--) {
                                var m = a[u],
                                    v = m.instance,
                                    T = m.currentTarget;
                                if (((m = m.listener), v !== s && o.isPropagationStopped())) break e;
                                Ze(o, m, T), (s = v);
                            }
                        else
                            for (u = 0; u < a.length; u++) {
                                if (((v = (m = a[u]).instance), (T = m.currentTarget), (m = m.listener), v !== s && o.isPropagationStopped())) break e;
                                Ze(o, m, T), (s = v);
                            }
                    }
                }
                if (ot) throw ((t = st), (ot = !1), (st = null), t);
            }
            function G(t, i) {
                var r = $e(i),
                    a = t + "__bubble";
                r.has(a) || (af(i, t, 2, !1), r.add(a));
            }
            var Mn = "_reactListening" + Math.random().toString(36).slice(2);
            function cf(t) {
                t[Mn] ||
                    ((t[Mn] = !0),
                    u.forEach(function (i) {
                        In.has(i) || df(i, !1, t, null), df(i, !0, t, null);
                    }));
            }
            function df(t, i, r, a) {
                var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                    s = r;
                if (("selectionchange" === t && 9 !== r.nodeType && (s = r.ownerDocument), null !== a && !i && In.has(t))) {
                    if ("scroll" !== t) return;
                    (o |= 2), (s = a);
                }
                var u = $e(s),
                    m = t + "__" + (i ? "capture" : "bubble");
                u.has(m) || (i && (o |= 4), af(s, t, o, i), u.add(m));
            }
            function af(t, i, r, a) {
                var o = At.get(i);
                switch (void 0 === o ? 2 : o) {
                    case 0:
                        o = gd;
                        break;
                    case 1:
                        o = id;
                        break;
                    default:
                        o = hd;
                }
                (r = o.bind(null, i, r, t)),
                    (o = void 0),
                    !nt || ("touchstart" !== i && "touchmove" !== i && "wheel" !== i) || (o = !0),
                    a ? (void 0 !== o ? t.addEventListener(i, r, { capture: !0, passive: o }) : t.addEventListener(i, r, !0)) : void 0 !== o ? t.addEventListener(i, r, { passive: o }) : t.addEventListener(i, r, !1);
            }
            function jd(t, i, r, a, o) {
                var s = a;
                if (0 == (1 & i) && 0 == (2 & i) && null !== a)
                    e: for (;;) {
                        if (null === a) return;
                        var u = a.tag;
                        if (3 === u || 4 === u) {
                            var m = a.stateNode.containerInfo;
                            if (m === o || (8 === m.nodeType && m.parentNode === o)) break;
                            if (4 === u)
                                for (u = a.return; null !== u; ) {
                                    var v = u.tag;
                                    if ((3 === v || 4 === v) && ((v = u.stateNode.containerInfo) === o || (8 === v.nodeType && v.parentNode === o))) return;
                                    u = u.return;
                                }
                            for (; null !== m; ) {
                                if (null === (u = wc(m))) return;
                                if (5 === (v = u.tag) || 6 === v) {
                                    a = s = u;
                                    continue e;
                                }
                                m = m.parentNode;
                            }
                        }
                        a = a.return;
                    }
                !(function Nb(t, i, r) {
                    if (tt) return t(i, r);
                    tt = !0;
                    try {
                        return Xe(t, i, r);
                    } finally {
                        (tt = !1), Mb();
                    }
                })(function () {
                    var a = s,
                        o = xb(r),
                        u = [];
                    e: {
                        var m = Ot.get(t);
                        if (void 0 !== m) {
                            var v = Wt,
                                T = t;
                            switch (t) {
                                case "keypress":
                                    if (0 === od(r)) break e;
                                case "keydown":
                                case "keyup":
                                    v = on;
                                    break;
                                case "focusin":
                                    (T = "focus"), (v = Zt);
                                    break;
                                case "focusout":
                                    (T = "blur"), (v = Zt);
                                    break;
                                case "beforeblur":
                                case "afterblur":
                                    v = Zt;
                                    break;
                                case "click":
                                    if (2 === r.button) break e;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    v = Yt;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    v = Xt;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    v = ln;
                                    break;
                                case Tt:
                                case Ct:
                                case St:
                                    v = Jt;
                                    break;
                                case qt:
                                    v = un;
                                    break;
                                case "scroll":
                                    v = $t;
                                    break;
                                case "wheel":
                                    v = cn;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    v = en;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    v = sn;
                            }
                            var q = 0 != (4 & i),
                                R = !q && "scroll" === t,
                                M = q ? (null !== m ? m + "Capture" : null) : m;
                            q = [];
                            for (var j, F = a; null !== F; ) {
                                var U = (j = F).stateNode;
                                if ((5 === j.tag && null !== U && ((j = U), null !== M && null != (U = Ob(F, M)) && q.push(ef(F, U, j))), R)) break;
                                F = F.return;
                            }
                            0 < q.length && ((m = new v(m, T, null, r, o)), u.push({ event: m, listeners: q }));
                        }
                    }
                    if (0 == (7 & i)) {
                        if (
                            ((v = "mouseout" === t || "pointerout" === t),
                            (!(m = "mouseover" === t || "pointerover" === t) || 0 != (16 & i) || !(T = r.relatedTarget || r.fromElement) || (!wc(T) && !T[Wn])) &&
                                (v || m) &&
                                ((m = o.window === o ? o : (m = o.ownerDocument) ? m.defaultView || m.parentWindow : window),
                                v ? ((v = a), null !== (T = (T = r.relatedTarget || r.toElement) ? wc(T) : null) && (T !== (R = Zb(T)) || (5 !== T.tag && 6 !== T.tag)) && (T = null)) : ((v = null), (T = a)),
                                v !== T))
                        ) {
                            if (
                                ((q = Yt),
                                (U = "onMouseLeave"),
                                (M = "onMouseEnter"),
                                (F = "mouse"),
                                ("pointerout" !== t && "pointerover" !== t) || ((q = sn), (U = "onPointerLeave"), (M = "onPointerEnter"), (F = "pointer")),
                                (R = null == v ? m : ue(v)),
                                (j = null == T ? m : ue(T)),
                                ((m = new q(U, F + "leave", v, r, o)).target = R),
                                (m.relatedTarget = j),
                                (U = null),
                                wc(o) === a && (((q = new q(M, F + "enter", T, r, o)).target = j), (q.relatedTarget = R), (U = q)),
                                (R = U),
                                v && T)
                            )
                                e: {
                                    for (M = T, F = 0, j = q = v; j; j = gf(j)) F++;
                                    for (j = 0, U = M; U; U = gf(U)) j++;
                                    for (; 0 < F - j; ) (q = gf(q)), F--;
                                    for (; 0 < j - F; ) (M = gf(M)), j--;
                                    for (; F--; ) {
                                        if (q === M || (null !== M && q === M.alternate)) break e;
                                        (q = gf(q)), (M = gf(M));
                                    }
                                    q = null;
                                }
                            else q = null;
                            null !== v && hf(u, m, v, q, !1), null !== T && null !== R && hf(u, R, T, q, !0);
                        }
                        if ("select" === (v = (m = a ? ue(a) : window).nodeName && m.nodeName.toLowerCase()) || ("input" === v && "file" === m.type)) var V = ve;
                        else if (me(m))
                            if (xn) V = Fe;
                            else {
                                V = De;
                                var W = Ce;
                            }
                        else (v = m.nodeName) && "input" === v.toLowerCase() && ("checkbox" === m.type || "radio" === m.type) && (V = Ee);
                        switch ((V && (V = V(t, a)) ? ne(u, V, r, o) : (W && W(t, m, a), "focusout" === t && (W = m._wrapperState) && W.controlled && "number" === m.type && bb(m, "number", m.value)), (W = a ? ue(a) : window), t)) {
                            case "focusin":
                                (me(W) || "true" === W.contentEditable) && ((On = W), (An = a), (Dn = null));
                                break;
                            case "focusout":
                                Dn = An = On = null;
                                break;
                            case "mousedown":
                                Ln = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                (Ln = !1), Ue(u, r, o);
                                break;
                            case "selectionchange":
                                if (qn) break;
                            case "keydown":
                            case "keyup":
                                Ue(u, r, o);
                        }
                        var $;
                        if (hn)
                            e: {
                                switch (t) {
                                    case "compositionstart":
                                        var Y = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        Y = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        Y = "onCompositionUpdate";
                                        break e;
                                }
                                Y = void 0;
                            }
                        else yn ? ge(t, r) && (Y = "onCompositionEnd") : "keydown" === t && 229 === r.keyCode && (Y = "onCompositionStart");
                        Y &&
                            (mn && "ko" !== r.locale && (yn || "onCompositionStart" !== Y ? "onCompositionEnd" === Y && yn && ($ = nd()) : ((Ft = "value" in (Bt = o) ? Bt.value : Bt.textContent), (yn = !0))),
                            0 < (W = oe(a, Y)).length && ((Y = new tn(Y, t, null, r, o)), u.push({ event: Y, listeners: W }), $ ? (Y.data = $) : null !== ($ = he(r)) && (Y.data = $))),
                            ($ = fn
                                ? (function je(t, i) {
                                      switch (t) {
                                          case "compositionend":
                                              return he(i);
                                          case "keypress":
                                              return 32 !== i.which ? null : ((bn = !0), gn);
                                          case "textInput":
                                              return (t = i.data) === gn && bn ? null : t;
                                          default:
                                              return null;
                                      }
                                  })(t, r)
                                : (function ke(t, i) {
                                      if (yn) return "compositionend" === t || (!hn && ge(t, i)) ? ((t = nd()), (Ut = Ft = Bt = null), (yn = !1), t) : null;
                                      switch (t) {
                                          case "paste":
                                              return null;
                                          case "keypress":
                                              if (!(i.ctrlKey || i.altKey || i.metaKey) || (i.ctrlKey && i.altKey)) {
                                                  if (i.char && 1 < i.char.length) return i.char;
                                                  if (i.which) return String.fromCharCode(i.which);
                                              }
                                              return null;
                                          case "compositionend":
                                              return mn && "ko" !== i.locale ? null : i.data;
                                          default:
                                              return null;
                                      }
                                  })(t, r)) &&
                                0 < (a = oe(a, "onBeforeInput")).length &&
                                ((o = new tn("onBeforeInput", "beforeinput", null, r, o)), u.push({ event: o, listeners: a }), (o.data = $));
                    }
                    se(u, i);
                });
            }
            function ef(t, i, r) {
                return { instance: t, listener: i, currentTarget: r };
            }
            function oe(t, i) {
                for (var r = i + "Capture", a = []; null !== t; ) {
                    var o = t,
                        s = o.stateNode;
                    5 === o.tag && null !== s && ((o = s), null != (s = Ob(t, r)) && a.unshift(ef(t, s, o)), null != (s = Ob(t, i)) && a.push(ef(t, s, o))), (t = t.return);
                }
                return a;
            }
            function gf(t) {
                if (null === t) return null;
                do {
                    t = t.return;
                } while (t && 5 !== t.tag);
                return t || null;
            }
            function hf(t, i, r, a, o) {
                for (var s = i._reactName, u = []; null !== r && r !== a; ) {
                    var m = r,
                        v = m.alternate,
                        T = m.stateNode;
                    if (null !== v && v === a) break;
                    5 === m.tag && null !== T && ((m = T), o ? null != (v = Ob(r, s)) && u.unshift(ef(r, v, m)) : o || (null != (v = Ob(r, s)) && u.push(ef(r, v, m)))), (r = r.return);
                }
                0 !== u.length && t.push({ event: i, listeners: u });
            }
            function jf() {}
            var jn = null,
                Bn = null;
            function mf(t, i) {
                switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        return !!i.autoFocus;
                }
                return !1;
            }
            function nf(t, i) {
                return (
                    "textarea" === t ||
                    "option" === t ||
                    "noscript" === t ||
                    "string" == typeof i.children ||
                    "number" == typeof i.children ||
                    ("object" == typeof i.dangerouslySetInnerHTML && null !== i.dangerouslySetInnerHTML && null != i.dangerouslySetInnerHTML.__html)
                );
            }
            var Fn = "function" == typeof setTimeout ? setTimeout : void 0,
                Un = "function" == typeof clearTimeout ? clearTimeout : void 0;
            function qf(t) {
                1 === t.nodeType ? (t.textContent = "") : 9 === t.nodeType && null != (t = t.body) && (t.textContent = "");
            }
            function rf(t) {
                for (; null != t; t = t.nextSibling) {
                    var i = t.nodeType;
                    if (1 === i || 3 === i) break;
                }
                return t;
            }
            function sf(t) {
                t = t.previousSibling;
                for (var i = 0; t; ) {
                    if (8 === t.nodeType) {
                        var r = t.data;
                        if ("$" === r || "$!" === r || "$?" === r) {
                            if (0 === i) return t;
                            i--;
                        } else "/$" === r && i++;
                    }
                    t = t.previousSibling;
                }
                return null;
            }
            var zn = 0;
            var Vn = Math.random().toString(36).slice(2),
                Hn = "__reactFiber$" + Vn,
                Qn = "__reactProps$" + Vn,
                Wn = "__reactContainer$" + Vn,
                Kn = "__reactEvents$" + Vn;
            function wc(t) {
                var i = t[Hn];
                if (i) return i;
                for (var r = t.parentNode; r; ) {
                    if ((i = r[Wn] || r[Hn])) {
                        if (((r = i.alternate), null !== i.child || (null !== r && null !== r.child)))
                            for (t = sf(t); null !== t; ) {
                                if ((r = t[Hn])) return r;
                                t = sf(t);
                            }
                        return i;
                    }
                    r = (t = r).parentNode;
                }
                return null;
            }
            function Cb(t) {
                return !(t = t[Hn] || t[Wn]) || (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag) ? null : t;
            }
            function ue(t) {
                if (5 === t.tag || 6 === t.tag) return t.stateNode;
                throw Error(y(33));
            }
            function Db(t) {
                return t[Qn] || null;
            }
            function $e(t) {
                var i = t[Kn];
                return void 0 === i && (i = t[Kn] = new Set()), i;
            }
            var $n = [],
                Gn = -1;
            function Bf(t) {
                return { current: t };
            }
            function H(t) {
                0 > Gn || ((t.current = $n[Gn]), ($n[Gn] = null), Gn--);
            }
            function I(t, i) {
                Gn++, ($n[Gn] = t.current), (t.current = i);
            }
            var Yn = {},
                Xn = Bf(Yn),
                Zn = Bf(!1),
                Jn = Yn;
            function Ef(t, i) {
                var r = t.type.contextTypes;
                if (!r) return Yn;
                var a = t.stateNode;
                if (a && a.__reactInternalMemoizedUnmaskedChildContext === i) return a.__reactInternalMemoizedMaskedChildContext;
                var o,
                    s = {};
                for (o in r) s[o] = i[o];
                return a && (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i), (t.__reactInternalMemoizedMaskedChildContext = s)), s;
            }
            function Ff(t) {
                return null != (t = t.childContextTypes);
            }
            function Gf() {
                H(Zn), H(Xn);
            }
            function Hf(t, i, r) {
                if (Xn.current !== Yn) throw Error(y(168));
                I(Xn, i), I(Zn, r);
            }
            function If(t, i, r) {
                var a = t.stateNode;
                if (((t = i.childContextTypes), "function" != typeof a.getChildContext)) return r;
                for (var s in (a = a.getChildContext())) if (!(s in t)) throw Error(y(108, Ra(i) || "Unknown", s));
                return o({}, r, a);
            }
            function Jf(t) {
                return (t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Yn), (Jn = Xn.current), I(Xn, t), I(Zn, Zn.current), !0;
            }
            function Kf(t, i, r) {
                var a = t.stateNode;
                if (!a) throw Error(y(169));
                r ? ((t = If(t, i, Jn)), (a.__reactInternalMemoizedMergedChildContext = t), H(Zn), H(Xn), I(Xn, t)) : H(Zn), I(Zn, r);
            }
            var ei = null,
                si = null,
                _i = s.unstable_runWithPriority,
                Ei = s.unstable_scheduleCallback,
                Ti = s.unstable_cancelCallback,
                Ci = s.unstable_shouldYield,
                Oi = s.unstable_requestPaint,
                Di = s.unstable_now,
                Ri = s.unstable_getCurrentPriorityLevel,
                Bi = s.unstable_ImmediatePriority,
                Ui = s.unstable_UserBlockingPriority,
                Hi = s.unstable_NormalPriority,
                Qi = s.unstable_LowPriority,
                Ji = s.unstable_IdlePriority,
                er = {},
                tr = void 0 !== Oi ? Oi : function () {},
                nr = null,
                ir = null,
                rr = !1,
                ar = Di(),
                or =
                    1e4 > ar
                        ? Di
                        : function () {
                              return Di() - ar;
                          };
            function eg() {
                switch (Ri()) {
                    case Bi:
                        return 99;
                    case Ui:
                        return 98;
                    case Hi:
                        return 97;
                    case Qi:
                        return 96;
                    case Ji:
                        return 95;
                    default:
                        throw Error(y(332));
                }
            }
            function fg(t) {
                switch (t) {
                    case 99:
                        return Bi;
                    case 98:
                        return Ui;
                    case 97:
                        return Hi;
                    case 96:
                        return Qi;
                    case 95:
                        return Ji;
                    default:
                        throw Error(y(332));
                }
            }
            function gg(t, i) {
                return (t = fg(t)), _i(t, i);
            }
            function hg(t, i, r) {
                return (t = fg(t)), Ei(t, i, r);
            }
            function ig() {
                if (null !== ir) {
                    var t = ir;
                    (ir = null), Ti(t);
                }
                jg();
            }
            function jg() {
                if (!rr && null !== nr) {
                    rr = !0;
                    var t = 0;
                    try {
                        var i = nr;
                        gg(99, function () {
                            for (; t < i.length; t++) {
                                var r = i[t];
                                do {
                                    r = r(!0);
                                } while (null !== r);
                            }
                        }),
                            (nr = null);
                    } catch (i) {
                        throw (null !== nr && (nr = nr.slice(t + 1)), Ei(Bi, ig), i);
                    } finally {
                        rr = !1;
                    }
                }
            }
            var sr = U.ReactCurrentBatchConfig;
            function lg(t, i) {
                if (t && t.defaultProps) {
                    for (var r in ((i = o({}, i)), (t = t.defaultProps))) void 0 === i[r] && (i[r] = t[r]);
                    return i;
                }
                return i;
            }
            var lr = Bf(null),
                ur = null,
                cr = null,
                dr = null;
            function qg() {
                dr = cr = ur = null;
            }
            function rg(t) {
                var i = lr.current;
                H(lr), (t.type._context._currentValue = i);
            }
            function sg(t, i) {
                for (; null !== t; ) {
                    var r = t.alternate;
                    if ((t.childLanes & i) === i) {
                        if (null === r || (r.childLanes & i) === i) break;
                        r.childLanes |= i;
                    } else (t.childLanes |= i), null !== r && (r.childLanes |= i);
                    t = t.return;
                }
            }
            function tg(t, i) {
                (ur = t), (dr = cr = null), null !== (t = t.dependencies) && null !== t.firstContext && (0 != (t.lanes & i) && (Fr = !0), (t.firstContext = null));
            }
            function vg(t, i) {
                if (dr !== t && !1 !== i && 0 !== i)
                    if ((("number" == typeof i && 1073741823 !== i) || ((dr = t), (i = 1073741823)), (i = { context: t, observedBits: i, next: null }), null === cr)) {
                        if (null === ur) throw Error(y(308));
                        (cr = i), (ur.dependencies = { lanes: 0, firstContext: i, responders: null });
                    } else cr = cr.next = i;
                return t._currentValue;
            }
            var hr = !1;
            function xg(t) {
                t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
            }
            function yg(t, i) {
                (t = t.updateQueue), i.updateQueue === t && (i.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
            }
            function zg(t, i) {
                return { eventTime: t, lane: i, tag: 0, payload: null, callback: null, next: null };
            }
            function Ag(t, i) {
                if (null !== (t = t.updateQueue)) {
                    var r = (t = t.shared).pending;
                    null === r ? (i.next = i) : ((i.next = r.next), (r.next = i)), (t.pending = i);
                }
            }
            function Bg(t, i) {
                var r = t.updateQueue,
                    a = t.alternate;
                if (null !== a && r === (a = a.updateQueue)) {
                    var o = null,
                        s = null;
                    if (null !== (r = r.firstBaseUpdate)) {
                        do {
                            var u = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
                            null === s ? (o = s = u) : (s = s.next = u), (r = r.next);
                        } while (null !== r);
                        null === s ? (o = s = i) : (s = s.next = i);
                    } else o = s = i;
                    return (r = { baseState: a.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: a.shared, effects: a.effects }), void (t.updateQueue = r);
                }
                null === (t = r.lastBaseUpdate) ? (r.firstBaseUpdate = i) : (t.next = i), (r.lastBaseUpdate = i);
            }
            function Cg(t, i, r, a) {
                var s = t.updateQueue;
                hr = !1;
                var u = s.firstBaseUpdate,
                    m = s.lastBaseUpdate,
                    v = s.shared.pending;
                if (null !== v) {
                    s.shared.pending = null;
                    var T = v,
                        q = T.next;
                    (T.next = null), null === m ? (u = q) : (m.next = q), (m = T);
                    var R = t.alternate;
                    if (null !== R) {
                        var M = (R = R.updateQueue).lastBaseUpdate;
                        M !== m && (null === M ? (R.firstBaseUpdate = q) : (M.next = q), (R.lastBaseUpdate = T));
                    }
                }
                if (null !== u) {
                    for (M = s.baseState, m = 0, R = q = T = null; ; ) {
                        v = u.lane;
                        var j = u.eventTime;
                        if ((a & v) === v) {
                            null !== R && (R = R.next = { eventTime: j, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
                            e: {
                                var F = t,
                                    U = u;
                                switch (((v = i), (j = r), U.tag)) {
                                    case 1:
                                        if ("function" == typeof (F = U.payload)) {
                                            M = F.call(j, M, v);
                                            break e;
                                        }
                                        M = F;
                                        break e;
                                    case 3:
                                        F.flags = (-4097 & F.flags) | 64;
                                    case 0:
                                        if (null == (v = "function" == typeof (F = U.payload) ? F.call(j, M, v) : F)) break e;
                                        M = o({}, M, v);
                                        break e;
                                    case 2:
                                        hr = !0;
                                }
                            }
                            null !== u.callback && ((t.flags |= 32), null === (v = s.effects) ? (s.effects = [u]) : v.push(u));
                        } else (j = { eventTime: j, lane: v, tag: u.tag, payload: u.payload, callback: u.callback, next: null }), null === R ? ((q = R = j), (T = M)) : (R = R.next = j), (m |= v);
                        if (null === (u = u.next)) {
                            if (null === (v = s.shared.pending)) break;
                            (u = v.next), (v.next = null), (s.lastBaseUpdate = v), (s.shared.pending = null);
                        }
                    }
                    null === R && (T = M), (s.baseState = T), (s.firstBaseUpdate = q), (s.lastBaseUpdate = R), (sa |= m), (t.lanes = m), (t.memoizedState = M);
                }
            }
            function Eg(t, i, r) {
                if (((t = i.effects), (i.effects = null), null !== t))
                    for (i = 0; i < t.length; i++) {
                        var a = t[i],
                            o = a.callback;
                        if (null !== o) {
                            if (((a.callback = null), (a = r), "function" != typeof o)) throw Error(y(191, o));
                            o.call(a);
                        }
                    }
            }
            var pr = new a.Component().refs;
            function Gg(t, i, r, a) {
                (r = null == (r = r(a, (i = t.memoizedState))) ? i : o({}, i, r)), (t.memoizedState = r), 0 === t.lanes && (t.updateQueue.baseState = r);
            }
            var fr = {
                isMounted: function (t) {
                    return !!(t = t._reactInternals) && Zb(t) === t;
                },
                enqueueSetState: function (t, i, r) {
                    t = t._reactInternals;
                    var a = Hg(),
                        o = Ig(t),
                        s = zg(a, o);
                    (s.payload = i), null != r && (s.callback = r), Ag(t, s), Jg(t, o, a);
                },
                enqueueReplaceState: function (t, i, r) {
                    t = t._reactInternals;
                    var a = Hg(),
                        o = Ig(t),
                        s = zg(a, o);
                    (s.tag = 1), (s.payload = i), null != r && (s.callback = r), Ag(t, s), Jg(t, o, a);
                },
                enqueueForceUpdate: function (t, i) {
                    t = t._reactInternals;
                    var r = Hg(),
                        a = Ig(t),
                        o = zg(r, a);
                    (o.tag = 2), null != i && (o.callback = i), Ag(t, o), Jg(t, a, r);
                },
            };
            function Lg(t, i, r, a, o, s, u) {
                return "function" == typeof (t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(a, s, u) : !i.prototype || !i.prototype.isPureReactComponent || !Je(r, a) || !Je(o, s);
            }
            function Mg(t, i, r) {
                var a = !1,
                    o = Yn,
                    s = i.contextType;
                return (
                    "object" == typeof s && null !== s ? (s = vg(s)) : ((o = Ff(i) ? Jn : Xn.current), (s = (a = null != (a = i.contextTypes)) ? Ef(t, o) : Yn)),
                    (i = new i(r, s)),
                    (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null),
                    (i.updater = fr),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    a && (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = o), (t.__reactInternalMemoizedMaskedChildContext = s)),
                    i
                );
            }
            function Ng(t, i, r, a) {
                (t = i.state),
                    "function" == typeof i.componentWillReceiveProps && i.componentWillReceiveProps(r, a),
                    "function" == typeof i.UNSAFE_componentWillReceiveProps && i.UNSAFE_componentWillReceiveProps(r, a),
                    i.state !== t && fr.enqueueReplaceState(i, i.state, null);
            }
            function Og(t, i, r, a) {
                var o = t.stateNode;
                (o.props = r), (o.state = t.memoizedState), (o.refs = pr), xg(t);
                var s = i.contextType;
                "object" == typeof s && null !== s ? (o.context = vg(s)) : ((s = Ff(i) ? Jn : Xn.current), (o.context = Ef(t, s))),
                    Cg(t, r, o, a),
                    (o.state = t.memoizedState),
                    "function" == typeof (s = i.getDerivedStateFromProps) && (Gg(t, i, s, r), (o.state = t.memoizedState)),
                    "function" == typeof i.getDerivedStateFromProps ||
                        "function" == typeof o.getSnapshotBeforeUpdate ||
                        ("function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount) ||
                        ((i = o.state),
                        "function" == typeof o.componentWillMount && o.componentWillMount(),
                        "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
                        i !== o.state && fr.enqueueReplaceState(o, o.state, null),
                        Cg(t, r, o, a),
                        (o.state = t.memoizedState)),
                    "function" == typeof o.componentDidMount && (t.flags |= 4);
            }
            var mr = Array.isArray;
            function Qg(t, i, r) {
                if (null !== (t = r.ref) && "function" != typeof t && "object" != typeof t) {
                    if (r._owner) {
                        if ((r = r._owner)) {
                            if (1 !== r.tag) throw Error(y(309));
                            var a = r.stateNode;
                        }
                        if (!a) throw Error(y(147, t));
                        var o = "" + t;
                        return null !== i && null !== i.ref && "function" == typeof i.ref && i.ref._stringRef === o
                            ? i.ref
                            : (((i = function (t) {
                                  var i = a.refs;
                                  i === pr && (i = a.refs = {}), null === t ? delete i[o] : (i[o] = t);
                              })._stringRef = o),
                              i);
                    }
                    if ("string" != typeof t) throw Error(y(284));
                    if (!r._owner) throw Error(y(290, t));
                }
                return t;
            }
            function Rg(t, i) {
                if ("textarea" !== t.type) throw Error(y(31, "[object Object]" === Object.prototype.toString.call(i) ? "object with keys {" + Object.keys(i).join(", ") + "}" : i));
            }
            function Sg(t) {
                function b(i, r) {
                    if (t) {
                        var a = i.lastEffect;
                        null !== a ? ((a.nextEffect = r), (i.lastEffect = r)) : (i.firstEffect = i.lastEffect = r), (r.nextEffect = null), (r.flags = 8);
                    }
                }
                function c(i, r) {
                    if (!t) return null;
                    for (; null !== r; ) b(i, r), (r = r.sibling);
                    return null;
                }
                function d(t, i) {
                    for (t = new Map(); null !== i; ) null !== i.key ? t.set(i.key, i) : t.set(i.index, i), (i = i.sibling);
                    return t;
                }
                function e(t, i) {
                    return ((t = Tg(t, i)).index = 0), (t.sibling = null), t;
                }
                function f(i, r, a) {
                    return (i.index = a), t ? (null !== (a = i.alternate) ? ((a = a.index) < r ? ((i.flags = 2), r) : a) : ((i.flags = 2), r)) : r;
                }
                function g(i) {
                    return t && null === i.alternate && (i.flags = 2), i;
                }
                function h(t, i, r, a) {
                    return null === i || 6 !== i.tag ? (((i = Ug(r, t.mode, a)).return = t), i) : (((i = e(i, r)).return = t), i);
                }
                function k(t, i, r, a) {
                    return null !== i && i.elementType === r.type ? (((a = e(i, r.props)).ref = Qg(t, i, r)), (a.return = t), a) : (((a = Vg(r.type, r.key, r.props, null, t.mode, a)).ref = Qg(t, i, r)), (a.return = t), a);
                }
                function l(t, i, r, a) {
                    return null === i || 4 !== i.tag || i.stateNode.containerInfo !== r.containerInfo || i.stateNode.implementation !== r.implementation
                        ? (((i = Wg(r, t.mode, a)).return = t), i)
                        : (((i = e(i, r.children || [])).return = t), i);
                }
                function n(t, i, r, a, o) {
                    return null === i || 7 !== i.tag ? (((i = Xg(r, t.mode, a, o)).return = t), i) : (((i = e(i, r)).return = t), i);
                }
                function A(t, i, r) {
                    if ("string" == typeof i || "number" == typeof i) return ((i = Ug("" + i, t.mode, r)).return = t), i;
                    if ("object" == typeof i && null !== i) {
                        switch (i.$$typeof) {
                            case V:
                                return ((r = Vg(i.type, i.key, i.props, null, t.mode, r)).ref = Qg(t, null, i)), (r.return = t), r;
                            case W:
                                return ((i = Wg(i, t.mode, r)).return = t), i;
                        }
                        if (mr(i) || La(i)) return ((i = Xg(i, t.mode, r, null)).return = t), i;
                        Rg(t, i);
                    }
                    return null;
                }
                function p(t, i, r, a) {
                    var o = null !== i ? i.key : null;
                    if ("string" == typeof r || "number" == typeof r) return null !== o ? null : h(t, i, "" + r, a);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case V:
                                return r.key === o ? (r.type === $ ? n(t, i, r.props.children, a, o) : k(t, i, r, a)) : null;
                            case W:
                                return r.key === o ? l(t, i, r, a) : null;
                        }
                        if (mr(r) || La(r)) return null !== o ? null : n(t, i, r, a, null);
                        Rg(t, r);
                    }
                    return null;
                }
                function C(t, i, r, a, o) {
                    if ("string" == typeof a || "number" == typeof a) return h(i, (t = t.get(r) || null), "" + a, o);
                    if ("object" == typeof a && null !== a) {
                        switch (a.$$typeof) {
                            case V:
                                return (t = t.get(null === a.key ? r : a.key) || null), a.type === $ ? n(i, t, a.props.children, o, a.key) : k(i, t, a, o);
                            case W:
                                return l(i, (t = t.get(null === a.key ? r : a.key) || null), a, o);
                        }
                        if (mr(a) || La(a)) return n(i, (t = t.get(r) || null), a, o, null);
                        Rg(i, a);
                    }
                    return null;
                }
                function x(i, r, a, o) {
                    for (var s = null, u = null, m = r, v = (r = 0), T = null; null !== m && v < a.length; v++) {
                        m.index > v ? ((T = m), (m = null)) : (T = m.sibling);
                        var q = p(i, m, a[v], o);
                        if (null === q) {
                            null === m && (m = T);
                            break;
                        }
                        t && m && null === q.alternate && b(i, m), (r = f(q, r, v)), null === u ? (s = q) : (u.sibling = q), (u = q), (m = T);
                    }
                    if (v === a.length) return c(i, m), s;
                    if (null === m) {
                        for (; v < a.length; v++) null !== (m = A(i, a[v], o)) && ((r = f(m, r, v)), null === u ? (s = m) : (u.sibling = m), (u = m));
                        return s;
                    }
                    for (m = d(i, m); v < a.length; v++) null !== (T = C(m, i, v, a[v], o)) && (t && null !== T.alternate && m.delete(null === T.key ? v : T.key), (r = f(T, r, v)), null === u ? (s = T) : (u.sibling = T), (u = T));
                    return (
                        t &&
                            m.forEach(function (t) {
                                return b(i, t);
                            }),
                        s
                    );
                }
                function w(i, r, a, o) {
                    var s = La(a);
                    if ("function" != typeof s) throw Error(y(150));
                    if (null == (a = s.call(a))) throw Error(y(151));
                    for (var u = (s = null), m = r, v = (r = 0), T = null, q = a.next(); null !== m && !q.done; v++, q = a.next()) {
                        m.index > v ? ((T = m), (m = null)) : (T = m.sibling);
                        var R = p(i, m, q.value, o);
                        if (null === R) {
                            null === m && (m = T);
                            break;
                        }
                        t && m && null === R.alternate && b(i, m), (r = f(R, r, v)), null === u ? (s = R) : (u.sibling = R), (u = R), (m = T);
                    }
                    if (q.done) return c(i, m), s;
                    if (null === m) {
                        for (; !q.done; v++, q = a.next()) null !== (q = A(i, q.value, o)) && ((r = f(q, r, v)), null === u ? (s = q) : (u.sibling = q), (u = q));
                        return s;
                    }
                    for (m = d(i, m); !q.done; v++, q = a.next())
                        null !== (q = C(m, i, v, q.value, o)) && (t && null !== q.alternate && m.delete(null === q.key ? v : q.key), (r = f(q, r, v)), null === u ? (s = q) : (u.sibling = q), (u = q));
                    return (
                        t &&
                            m.forEach(function (t) {
                                return b(i, t);
                            }),
                        s
                    );
                }
                return function (t, i, r, a) {
                    var o = "object" == typeof r && null !== r && r.type === $ && null === r.key;
                    o && (r = r.props.children);
                    var s = "object" == typeof r && null !== r;
                    if (s)
                        switch (r.$$typeof) {
                            case V:
                                e: {
                                    for (s = r.key, o = i; null !== o; ) {
                                        if (o.key === s) {
                                            switch (o.tag) {
                                                case 7:
                                                    if (r.type === $) {
                                                        c(t, o.sibling), ((i = e(o, r.props.children)).return = t), (t = i);
                                                        break e;
                                                    }
                                                    break;
                                                default:
                                                    if (o.elementType === r.type) {
                                                        c(t, o.sibling), ((i = e(o, r.props)).ref = Qg(t, o, r)), (i.return = t), (t = i);
                                                        break e;
                                                    }
                                            }
                                            c(t, o);
                                            break;
                                        }
                                        b(t, o), (o = o.sibling);
                                    }
                                    r.type === $ ? (((i = Xg(r.props.children, t.mode, a, r.key)).return = t), (t = i)) : (((a = Vg(r.type, r.key, r.props, null, t.mode, a)).ref = Qg(t, i, r)), (a.return = t), (t = a));
                                }
                                return g(t);
                            case W:
                                e: {
                                    for (o = r.key; null !== i; ) {
                                        if (i.key === o) {
                                            if (4 === i.tag && i.stateNode.containerInfo === r.containerInfo && i.stateNode.implementation === r.implementation) {
                                                c(t, i.sibling), ((i = e(i, r.children || [])).return = t), (t = i);
                                                break e;
                                            }
                                            c(t, i);
                                            break;
                                        }
                                        b(t, i), (i = i.sibling);
                                    }
                                    ((i = Wg(r, t.mode, a)).return = t), (t = i);
                                }
                                return g(t);
                        }
                    if ("string" == typeof r || "number" == typeof r) return (r = "" + r), null !== i && 6 === i.tag ? (c(t, i.sibling), ((i = e(i, r)).return = t), (t = i)) : (c(t, i), ((i = Ug(r, t.mode, a)).return = t), (t = i)), g(t);
                    if (mr(r)) return x(t, i, r, a);
                    if (La(r)) return w(t, i, r, a);
                    if ((s && Rg(t, r), void 0 === r && !o))
                        switch (t.tag) {
                            case 1:
                            case 22:
                            case 0:
                            case 11:
                            case 15:
                                throw Error(y(152, Ra(t.type) || "Component"));
                        }
                    return c(t, i);
                };
            }
            var gr = Sg(!0),
                br = Sg(!1),
                yr = {},
                vr = Bf(yr),
                _r = Bf(yr),
                wr = Bf(yr);
            function dh(t) {
                if (t === yr) throw Error(y(174));
                return t;
            }
            function eh(t, i) {
                switch ((I(wr, i), I(_r, t), I(vr, yr), (t = i.nodeType))) {
                    case 9:
                    case 11:
                        i = (i = i.documentElement) ? i.namespaceURI : mb(null, "");
                        break;
                    default:
                        i = mb((i = (t = 8 === t ? i.parentNode : i).namespaceURI || null), (t = t.tagName));
                }
                H(vr), I(vr, i);
            }
            function fh() {
                H(vr), H(_r), H(wr);
            }
            function gh(t) {
                dh(wr.current);
                var i = dh(vr.current),
                    r = mb(i, t.type);
                i !== r && (I(_r, t), I(vr, r));
            }
            function hh(t) {
                _r.current === t && (H(vr), H(_r));
            }
            var xr = Bf(0);
            function ih(t) {
                for (var i = t; null !== i; ) {
                    if (13 === i.tag) {
                        var r = i.memoizedState;
                        if (null !== r && (null === (r = r.dehydrated) || "$?" === r.data || "$!" === r.data)) return i;
                    } else if (19 === i.tag && void 0 !== i.memoizedProps.revealOrder) {
                        if (0 != (64 & i.flags)) return i;
                    } else if (null !== i.child) {
                        (i.child.return = i), (i = i.child);
                        continue;
                    }
                    if (i === t) break;
                    for (; null === i.sibling; ) {
                        if (null === i.return || i.return === t) return null;
                        i = i.return;
                    }
                    (i.sibling.return = i.return), (i = i.sibling);
                }
                return null;
            }
            var Er = null,
                kr = null,
                Tr = !1;
            function mh(t, i) {
                var r = nh(5, null, null, 0);
                (r.elementType = "DELETED"), (r.type = "DELETED"), (r.stateNode = i), (r.return = t), (r.flags = 8), null !== t.lastEffect ? ((t.lastEffect.nextEffect = r), (t.lastEffect = r)) : (t.firstEffect = t.lastEffect = r);
            }
            function oh(t, i) {
                switch (t.tag) {
                    case 5:
                        var r = t.type;
                        return null !== (i = 1 !== i.nodeType || r.toLowerCase() !== i.nodeName.toLowerCase() ? null : i) && ((t.stateNode = i), !0);
                    case 6:
                        return null !== (i = "" === t.pendingProps || 3 !== i.nodeType ? null : i) && ((t.stateNode = i), !0);
                    case 13:
                    default:
                        return !1;
                }
            }
            function ph(t) {
                if (Tr) {
                    var i = kr;
                    if (i) {
                        var r = i;
                        if (!oh(t, i)) {
                            if (!(i = rf(r.nextSibling)) || !oh(t, i)) return (t.flags = (-1025 & t.flags) | 2), (Tr = !1), void (Er = t);
                            mh(Er, r);
                        }
                        (Er = t), (kr = rf(i.firstChild));
                    } else (t.flags = (-1025 & t.flags) | 2), (Tr = !1), (Er = t);
                }
            }
            function qh(t) {
                for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag; ) t = t.return;
                Er = t;
            }
            function rh(t) {
                if (t !== Er) return !1;
                if (!Tr) return qh(t), (Tr = !0), !1;
                var i = t.type;
                if (5 !== t.tag || ("head" !== i && "body" !== i && !nf(i, t.memoizedProps))) for (i = kr; i; ) mh(t, i), (i = rf(i.nextSibling));
                if ((qh(t), 13 === t.tag)) {
                    if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(y(317));
                    e: {
                        for (t = t.nextSibling, i = 0; t; ) {
                            if (8 === t.nodeType) {
                                var r = t.data;
                                if ("/$" === r) {
                                    if (0 === i) {
                                        kr = rf(t.nextSibling);
                                        break e;
                                    }
                                    i--;
                                } else ("$" !== r && "$!" !== r && "$?" !== r) || i++;
                            }
                            t = t.nextSibling;
                        }
                        kr = null;
                    }
                } else kr = Er ? rf(t.stateNode.nextSibling) : null;
                return !0;
            }
            function sh() {
                (kr = Er = null), (Tr = !1);
            }
            var Cr = [];
            function uh() {
                for (var t = 0; t < Cr.length; t++) Cr[t]._workInProgressVersionPrimary = null;
                Cr.length = 0;
            }
            var Sr = U.ReactCurrentDispatcher,
                qr = U.ReactCurrentBatchConfig,
                Or = 0,
                Ar = null,
                Dr = null,
                Lr = null,
                Rr = !1,
                Pr = !1;
            function Ah() {
                throw Error(y(321));
            }
            function Bh(t, i) {
                if (null === i) return !1;
                for (var r = 0; r < i.length && r < t.length; r++) if (!Cn(t[r], i[r])) return !1;
                return !0;
            }
            function Ch(t, i, r, a, o, s) {
                if (((Or = s), (Ar = i), (i.memoizedState = null), (i.updateQueue = null), (i.lanes = 0), (Sr.current = null === t || null === t.memoizedState ? Ir : Mr), (t = r(a, o)), Pr)) {
                    s = 0;
                    do {
                        if (((Pr = !1), !(25 > s))) throw Error(y(301));
                        (s += 1), (Lr = Dr = null), (i.updateQueue = null), (Sr.current = jr), (t = r(a, o));
                    } while (Pr);
                }
                if (((Sr.current = Nr), (i = null !== Dr && null !== Dr.next), (Or = 0), (Lr = Dr = Ar = null), (Rr = !1), i)) throw Error(y(300));
                return t;
            }
            function Hh() {
                var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
                return null === Lr ? (Ar.memoizedState = Lr = t) : (Lr = Lr.next = t), Lr;
            }
            function Ih() {
                if (null === Dr) {
                    var t = Ar.alternate;
                    t = null !== t ? t.memoizedState : null;
                } else t = Dr.next;
                var i = null === Lr ? Ar.memoizedState : Lr.next;
                if (null !== i) (Lr = i), (Dr = t);
                else {
                    if (null === t) throw Error(y(310));
                    (t = { memoizedState: (Dr = t).memoizedState, baseState: Dr.baseState, baseQueue: Dr.baseQueue, queue: Dr.queue, next: null }), null === Lr ? (Ar.memoizedState = Lr = t) : (Lr = Lr.next = t);
                }
                return Lr;
            }
            function Jh(t, i) {
                return "function" == typeof i ? i(t) : i;
            }
            function Kh(t) {
                var i = Ih(),
                    r = i.queue;
                if (null === r) throw Error(y(311));
                r.lastRenderedReducer = t;
                var a = Dr,
                    o = a.baseQueue,
                    s = r.pending;
                if (null !== s) {
                    if (null !== o) {
                        var u = o.next;
                        (o.next = s.next), (s.next = u);
                    }
                    (a.baseQueue = o = s), (r.pending = null);
                }
                if (null !== o) {
                    (o = o.next), (a = a.baseState);
                    var m = (u = s = null),
                        v = o;
                    do {
                        var T = v.lane;
                        if ((Or & T) === T) null !== m && (m = m.next = { lane: 0, action: v.action, eagerReducer: v.eagerReducer, eagerState: v.eagerState, next: null }), (a = v.eagerReducer === t ? v.eagerState : t(a, v.action));
                        else {
                            var q = { lane: T, action: v.action, eagerReducer: v.eagerReducer, eagerState: v.eagerState, next: null };
                            null === m ? ((u = m = q), (s = a)) : (m = m.next = q), (Ar.lanes |= T), (sa |= T);
                        }
                        v = v.next;
                    } while (null !== v && v !== o);
                    null === m ? (s = a) : (m.next = u), Cn(a, i.memoizedState) || (Fr = !0), (i.memoizedState = a), (i.baseState = s), (i.baseQueue = m), (r.lastRenderedState = a);
                }
                return [i.memoizedState, r.dispatch];
            }
            function Lh(t) {
                var i = Ih(),
                    r = i.queue;
                if (null === r) throw Error(y(311));
                r.lastRenderedReducer = t;
                var a = r.dispatch,
                    o = r.pending,
                    s = i.memoizedState;
                if (null !== o) {
                    r.pending = null;
                    var u = (o = o.next);
                    do {
                        (s = t(s, u.action)), (u = u.next);
                    } while (u !== o);
                    Cn(s, i.memoizedState) || (Fr = !0), (i.memoizedState = s), null === i.baseQueue && (i.baseState = s), (r.lastRenderedState = s);
                }
                return [s, a];
            }
            function Mh(t, i, r) {
                var a = i._getVersion;
                a = a(i._source);
                var o = i._workInProgressVersionPrimary;
                if ((null !== o ? (t = o === a) : ((t = t.mutableReadLanes), (t = (Or & t) === t) && ((i._workInProgressVersionPrimary = a), Cr.push(i))), t)) return r(i._source);
                throw (Cr.push(i), Error(y(350)));
            }
            function Nh(t, i, r, a) {
                var o = Xr;
                if (null === o) throw Error(y(349));
                var s = i._getVersion,
                    u = s(i._source),
                    m = Sr.current,
                    v = m.useState(function () {
                        return Mh(o, i, r);
                    }),
                    T = v[1],
                    q = v[0];
                v = Lr;
                var R = t.memoizedState,
                    M = R.refs,
                    j = M.getSnapshot,
                    F = R.source;
                R = R.subscribe;
                var U = Ar;
                return (
                    (t.memoizedState = { refs: M, source: i, subscribe: a }),
                    m.useEffect(
                        function () {
                            (M.getSnapshot = r), (M.setSnapshot = T);
                            var t = s(i._source);
                            if (!Cn(u, t)) {
                                (t = r(i._source)), Cn(q, t) || (T(t), (t = Ig(U)), (o.mutableReadLanes |= t & o.pendingLanes)), (t = o.mutableReadLanes), (o.entangledLanes |= t);
                                for (var a = o.entanglements, m = t; 0 < m; ) {
                                    var v = 31 - Rt(m),
                                        R = 1 << v;
                                    (a[v] |= t), (m &= ~R);
                                }
                            }
                        },
                        [r, i, a]
                    ),
                    m.useEffect(
                        function () {
                            return a(i._source, function () {
                                var t = M.getSnapshot,
                                    r = M.setSnapshot;
                                try {
                                    r(t(i._source));
                                    var a = Ig(U);
                                    o.mutableReadLanes |= a & o.pendingLanes;
                                } catch (t) {
                                    r(function () {
                                        throw t;
                                    });
                                }
                            });
                        },
                        [i, a]
                    ),
                    (Cn(j, r) && Cn(F, i) && Cn(R, a)) ||
                        (((t = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: q }).dispatch = T = Oh.bind(null, Ar, t)),
                        (v.queue = t),
                        (v.baseQueue = null),
                        (q = Mh(o, i, r)),
                        (v.memoizedState = v.baseState = q)),
                    q
                );
            }
            function Ph(t, i, r) {
                return Nh(Ih(), t, i, r);
            }
            function Qh(t) {
                var i = Hh();
                return (
                    "function" == typeof t && (t = t()),
                    (i.memoizedState = i.baseState = t),
                    (t = (t = i.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: t }).dispatch = Oh.bind(null, Ar, t)),
                    [i.memoizedState, t]
                );
            }
            function Rh(t, i, r, a) {
                return (
                    (t = { tag: t, create: i, destroy: r, deps: a, next: null }),
                    null === (i = Ar.updateQueue)
                        ? ((i = { lastEffect: null }), (Ar.updateQueue = i), (i.lastEffect = t.next = t))
                        : null === (r = i.lastEffect)
                        ? (i.lastEffect = t.next = t)
                        : ((a = r.next), (r.next = t), (t.next = a), (i.lastEffect = t)),
                    t
                );
            }
            function Sh(t) {
                return (t = { current: t }), (Hh().memoizedState = t);
            }
            function Th() {
                return Ih().memoizedState;
            }
            function Uh(t, i, r, a) {
                var o = Hh();
                (Ar.flags |= t), (o.memoizedState = Rh(1 | i, r, void 0, void 0 === a ? null : a));
            }
            function Vh(t, i, r, a) {
                var o = Ih();
                a = void 0 === a ? null : a;
                var s = void 0;
                if (null !== Dr) {
                    var u = Dr.memoizedState;
                    if (((s = u.destroy), null !== a && Bh(a, u.deps))) return void Rh(i, r, s, a);
                }
                (Ar.flags |= t), (o.memoizedState = Rh(1 | i, r, s, a));
            }
            function Wh(t, i) {
                return Uh(516, 4, t, i);
            }
            function Xh(t, i) {
                return Vh(516, 4, t, i);
            }
            function Yh(t, i) {
                return Vh(4, 2, t, i);
            }
            function Zh(t, i) {
                return "function" == typeof i
                    ? ((t = t()),
                      i(t),
                      function () {
                          i(null);
                      })
                    : null != i
                    ? ((t = t()),
                      (i.current = t),
                      function () {
                          i.current = null;
                      })
                    : void 0;
            }
            function $h(t, i, r) {
                return (r = null != r ? r.concat([t]) : null), Vh(4, 2, Zh.bind(null, i, t), r);
            }
            function ai() {}
            function bi(t, i) {
                var r = Ih();
                i = void 0 === i ? null : i;
                var a = r.memoizedState;
                return null !== a && null !== i && Bh(i, a[1]) ? a[0] : ((r.memoizedState = [t, i]), t);
            }
            function ci(t, i) {
                var r = Ih();
                i = void 0 === i ? null : i;
                var a = r.memoizedState;
                return null !== a && null !== i && Bh(i, a[1]) ? a[0] : ((t = t()), (r.memoizedState = [t, i]), t);
            }
            function di(t, i) {
                var r = eg();
                gg(98 > r ? 98 : r, function () {
                    t(!0);
                }),
                    gg(97 < r ? 97 : r, function () {
                        var r = qr.transition;
                        qr.transition = 1;
                        try {
                            t(!1), i();
                        } finally {
                            qr.transition = r;
                        }
                    });
            }
            function Oh(t, i, r) {
                var a = Hg(),
                    o = Ig(t),
                    s = { lane: o, action: r, eagerReducer: null, eagerState: null, next: null },
                    u = i.pending;
                if ((null === u ? (s.next = s) : ((s.next = u.next), (u.next = s)), (i.pending = s), (u = t.alternate), t === Ar || (null !== u && u === Ar))) Pr = Rr = !0;
                else {
                    if (0 === t.lanes && (null === u || 0 === u.lanes) && null !== (u = i.lastRenderedReducer))
                        try {
                            var m = i.lastRenderedState,
                                v = u(m, r);
                            if (((s.eagerReducer = u), (s.eagerState = v), Cn(v, m))) return;
                        } catch (t) {}
                    Jg(t, o, a);
                }
            }
            var Nr = {
                    readContext: vg,
                    useCallback: Ah,
                    useContext: Ah,
                    useEffect: Ah,
                    useImperativeHandle: Ah,
                    useLayoutEffect: Ah,
                    useMemo: Ah,
                    useReducer: Ah,
                    useRef: Ah,
                    useState: Ah,
                    useDebugValue: Ah,
                    useDeferredValue: Ah,
                    useTransition: Ah,
                    useMutableSource: Ah,
                    useOpaqueIdentifier: Ah,
                    unstable_isNewReconciler: !1,
                },
                Ir = {
                    readContext: vg,
                    useCallback: function (t, i) {
                        return (Hh().memoizedState = [t, void 0 === i ? null : i]), t;
                    },
                    useContext: vg,
                    useEffect: Wh,
                    useImperativeHandle: function (t, i, r) {
                        return (r = null != r ? r.concat([t]) : null), Uh(4, 2, Zh.bind(null, i, t), r);
                    },
                    useLayoutEffect: function (t, i) {
                        return Uh(4, 2, t, i);
                    },
                    useMemo: function (t, i) {
                        var r = Hh();
                        return (i = void 0 === i ? null : i), (t = t()), (r.memoizedState = [t, i]), t;
                    },
                    useReducer: function (t, i, r) {
                        var a = Hh();
                        return (
                            (i = void 0 !== r ? r(i) : i),
                            (a.memoizedState = a.baseState = i),
                            (t = (t = a.queue = { pending: null, dispatch: null, lastRenderedReducer: t, lastRenderedState: i }).dispatch = Oh.bind(null, Ar, t)),
                            [a.memoizedState, t]
                        );
                    },
                    useRef: Sh,
                    useState: Qh,
                    useDebugValue: ai,
                    useDeferredValue: function (t) {
                        var i = Qh(t),
                            r = i[0],
                            a = i[1];
                        return (
                            Wh(
                                function () {
                                    var i = qr.transition;
                                    qr.transition = 1;
                                    try {
                                        a(t);
                                    } finally {
                                        qr.transition = i;
                                    }
                                },
                                [t]
                            ),
                            r
                        );
                    },
                    useTransition: function () {
                        var t = Qh(!1),
                            i = t[0];
                        return Sh((t = di.bind(null, t[1]))), [t, i];
                    },
                    useMutableSource: function (t, i, r) {
                        var a = Hh();
                        return (a.memoizedState = { refs: { getSnapshot: i, setSnapshot: null }, source: t, subscribe: r }), Nh(a, t, i, r);
                    },
                    useOpaqueIdentifier: function () {
                        if (Tr) {
                            var t = !1,
                                i = (function uf(t) {
                                    return { $$typeof: fe, toString: t, valueOf: t };
                                })(function () {
                                    throw (t || ((t = !0), r("r:" + (zn++).toString(36))), Error(y(355)));
                                }),
                                r = Qh(i)[1];
                            return (
                                0 == (2 & Ar.mode) &&
                                    ((Ar.flags |= 516),
                                    Rh(
                                        5,
                                        function () {
                                            r("r:" + (zn++).toString(36));
                                        },
                                        void 0,
                                        null
                                    )),
                                i
                            );
                        }
                        return Qh((i = "r:" + (zn++).toString(36))), i;
                    },
                    unstable_isNewReconciler: !1,
                },
                Mr = {
                    readContext: vg,
                    useCallback: bi,
                    useContext: vg,
                    useEffect: Xh,
                    useImperativeHandle: $h,
                    useLayoutEffect: Yh,
                    useMemo: ci,
                    useReducer: Kh,
                    useRef: Th,
                    useState: function () {
                        return Kh(Jh);
                    },
                    useDebugValue: ai,
                    useDeferredValue: function (t) {
                        var i = Kh(Jh),
                            r = i[0],
                            a = i[1];
                        return (
                            Xh(
                                function () {
                                    var i = qr.transition;
                                    qr.transition = 1;
                                    try {
                                        a(t);
                                    } finally {
                                        qr.transition = i;
                                    }
                                },
                                [t]
                            ),
                            r
                        );
                    },
                    useTransition: function () {
                        var t = Kh(Jh)[0];
                        return [Th().current, t];
                    },
                    useMutableSource: Ph,
                    useOpaqueIdentifier: function () {
                        return Kh(Jh)[0];
                    },
                    unstable_isNewReconciler: !1,
                },
                jr = {
                    readContext: vg,
                    useCallback: bi,
                    useContext: vg,
                    useEffect: Xh,
                    useImperativeHandle: $h,
                    useLayoutEffect: Yh,
                    useMemo: ci,
                    useReducer: Lh,
                    useRef: Th,
                    useState: function () {
                        return Lh(Jh);
                    },
                    useDebugValue: ai,
                    useDeferredValue: function (t) {
                        var i = Lh(Jh),
                            r = i[0],
                            a = i[1];
                        return (
                            Xh(
                                function () {
                                    var i = qr.transition;
                                    qr.transition = 1;
                                    try {
                                        a(t);
                                    } finally {
                                        qr.transition = i;
                                    }
                                },
                                [t]
                            ),
                            r
                        );
                    },
                    useTransition: function () {
                        var t = Lh(Jh)[0];
                        return [Th().current, t];
                    },
                    useMutableSource: Ph,
                    useOpaqueIdentifier: function () {
                        return Lh(Jh)[0];
                    },
                    unstable_isNewReconciler: !1,
                },
                Br = U.ReactCurrentOwner,
                Fr = !1;
            function fi(t, i, r, a) {
                i.child = null === t ? br(i, null, r, a) : gr(i, t.child, r, a);
            }
            function gi(t, i, r, a, o) {
                r = r.render;
                var s = i.ref;
                return tg(i, o), (a = Ch(t, i, r, a, s, o)), null === t || Fr ? ((i.flags |= 1), fi(t, i, a, o), i.child) : ((i.updateQueue = t.updateQueue), (i.flags &= -517), (t.lanes &= ~o), hi(t, i, o));
            }
            function ii(t, i, r, a, o, s) {
                if (null === t) {
                    var u = r.type;
                    return "function" != typeof u || ji(u) || void 0 !== u.defaultProps || null !== r.compare || void 0 !== r.defaultProps
                        ? (((t = Vg(r.type, null, a, i, i.mode, s)).ref = i.ref), (t.return = i), (i.child = t))
                        : ((i.tag = 15), (i.type = u), ki(t, i, u, a, o, s));
                }
                return (u = t.child), 0 == (o & s) && ((o = u.memoizedProps), (r = null !== (r = r.compare) ? r : Je)(o, a) && t.ref === i.ref) ? hi(t, i, s) : ((i.flags |= 1), ((t = Tg(u, a)).ref = i.ref), (t.return = i), (i.child = t));
            }
            function ki(t, i, r, a, o, s) {
                if (null !== t && Je(t.memoizedProps, a) && t.ref === i.ref) {
                    if (((Fr = !1), 0 == (s & o))) return (i.lanes = t.lanes), hi(t, i, s);
                    0 != (16384 & t.flags) && (Fr = !0);
                }
                return li(t, i, r, a, s);
            }
            function mi(t, i, r) {
                var a = i.pendingProps,
                    o = a.children,
                    s = null !== t ? t.memoizedState : null;
                if ("hidden" === a.mode || "unstable-defer-without-hiding" === a.mode)
                    if (0 == (4 & i.mode)) (i.memoizedState = { baseLanes: 0 }), ni(i, r);
                    else {
                        if (0 == (1073741824 & r)) return (t = null !== s ? s.baseLanes | r : r), (i.lanes = i.childLanes = 1073741824), (i.memoizedState = { baseLanes: t }), ni(i, t), null;
                        (i.memoizedState = { baseLanes: 0 }), ni(i, null !== s ? s.baseLanes : r);
                    }
                else null !== s ? ((a = s.baseLanes | r), (i.memoizedState = null)) : (a = r), ni(i, a);
                return fi(t, i, o, r), i.child;
            }
            function oi(t, i) {
                var r = i.ref;
                ((null === t && null !== r) || (null !== t && t.ref !== r)) && (i.flags |= 128);
            }
            function li(t, i, r, a, o) {
                var s = Ff(r) ? Jn : Xn.current;
                return (s = Ef(i, s)), tg(i, o), (r = Ch(t, i, r, a, s, o)), null === t || Fr ? ((i.flags |= 1), fi(t, i, r, o), i.child) : ((i.updateQueue = t.updateQueue), (i.flags &= -517), (t.lanes &= ~o), hi(t, i, o));
            }
            function pi(t, i, r, a, o) {
                if (Ff(r)) {
                    var s = !0;
                    Jf(i);
                } else s = !1;
                if ((tg(i, o), null === i.stateNode)) null !== t && ((t.alternate = null), (i.alternate = null), (i.flags |= 2)), Mg(i, r, a), Og(i, r, a, o), (a = !0);
                else if (null === t) {
                    var u = i.stateNode,
                        m = i.memoizedProps;
                    u.props = m;
                    var v = u.context,
                        T = r.contextType;
                    "object" == typeof T && null !== T ? (T = vg(T)) : (T = Ef(i, (T = Ff(r) ? Jn : Xn.current)));
                    var q = r.getDerivedStateFromProps,
                        R = "function" == typeof q || "function" == typeof u.getSnapshotBeforeUpdate;
                    R || ("function" != typeof u.UNSAFE_componentWillReceiveProps && "function" != typeof u.componentWillReceiveProps) || ((m !== a || v !== T) && Ng(i, u, a, T)), (hr = !1);
                    var M = i.memoizedState;
                    (u.state = M),
                        Cg(i, a, u, o),
                        (v = i.memoizedState),
                        m !== a || M !== v || Zn.current || hr
                            ? ("function" == typeof q && (Gg(i, r, q, a), (v = i.memoizedState)),
                              (m = hr || Lg(i, r, m, a, M, v, T))
                                  ? (R ||
                                        ("function" != typeof u.UNSAFE_componentWillMount && "function" != typeof u.componentWillMount) ||
                                        ("function" == typeof u.componentWillMount && u.componentWillMount(), "function" == typeof u.UNSAFE_componentWillMount && u.UNSAFE_componentWillMount()),
                                    "function" == typeof u.componentDidMount && (i.flags |= 4))
                                  : ("function" == typeof u.componentDidMount && (i.flags |= 4), (i.memoizedProps = a), (i.memoizedState = v)),
                              (u.props = a),
                              (u.state = v),
                              (u.context = T),
                              (a = m))
                            : ("function" == typeof u.componentDidMount && (i.flags |= 4), (a = !1));
                } else {
                    (u = i.stateNode),
                        yg(t, i),
                        (m = i.memoizedProps),
                        (T = i.type === i.elementType ? m : lg(i.type, m)),
                        (u.props = T),
                        (R = i.pendingProps),
                        (M = u.context),
                        "object" == typeof (v = r.contextType) && null !== v ? (v = vg(v)) : (v = Ef(i, (v = Ff(r) ? Jn : Xn.current)));
                    var j = r.getDerivedStateFromProps;
                    (q = "function" == typeof j || "function" == typeof u.getSnapshotBeforeUpdate) ||
                        ("function" != typeof u.UNSAFE_componentWillReceiveProps && "function" != typeof u.componentWillReceiveProps) ||
                        ((m !== R || M !== v) && Ng(i, u, a, v)),
                        (hr = !1),
                        (M = i.memoizedState),
                        (u.state = M),
                        Cg(i, a, u, o);
                    var F = i.memoizedState;
                    m !== R || M !== F || Zn.current || hr
                        ? ("function" == typeof j && (Gg(i, r, j, a), (F = i.memoizedState)),
                          (T = hr || Lg(i, r, T, a, M, F, v))
                              ? (q ||
                                    ("function" != typeof u.UNSAFE_componentWillUpdate && "function" != typeof u.componentWillUpdate) ||
                                    ("function" == typeof u.componentWillUpdate && u.componentWillUpdate(a, F, v), "function" == typeof u.UNSAFE_componentWillUpdate && u.UNSAFE_componentWillUpdate(a, F, v)),
                                "function" == typeof u.componentDidUpdate && (i.flags |= 4),
                                "function" == typeof u.getSnapshotBeforeUpdate && (i.flags |= 256))
                              : ("function" != typeof u.componentDidUpdate || (m === t.memoizedProps && M === t.memoizedState) || (i.flags |= 4),
                                "function" != typeof u.getSnapshotBeforeUpdate || (m === t.memoizedProps && M === t.memoizedState) || (i.flags |= 256),
                                (i.memoizedProps = a),
                                (i.memoizedState = F)),
                          (u.props = a),
                          (u.state = F),
                          (u.context = v),
                          (a = T))
                        : ("function" != typeof u.componentDidUpdate || (m === t.memoizedProps && M === t.memoizedState) || (i.flags |= 4),
                          "function" != typeof u.getSnapshotBeforeUpdate || (m === t.memoizedProps && M === t.memoizedState) || (i.flags |= 256),
                          (a = !1));
                }
                return qi(t, i, r, a, s, o);
            }
            function qi(t, i, r, a, o, s) {
                oi(t, i);
                var u = 0 != (64 & i.flags);
                if (!a && !u) return o && Kf(i, r, !1), hi(t, i, s);
                (a = i.stateNode), (Br.current = i);
                var m = u && "function" != typeof r.getDerivedStateFromError ? null : a.render();
                return (i.flags |= 1), null !== t && u ? ((i.child = gr(i, t.child, null, s)), (i.child = gr(i, null, m, s))) : fi(t, i, m, s), (i.memoizedState = a.state), o && Kf(i, r, !0), i.child;
            }
            function ri(t) {
                var i = t.stateNode;
                i.pendingContext ? Hf(0, i.pendingContext, i.pendingContext !== i.context) : i.context && Hf(0, i.context, !1), eh(t, i.containerInfo);
            }
            var Ur,
                zr,
                Vr,
                Hr = { dehydrated: null, retryLane: 0 };
            function ti(t, i, r) {
                var a,
                    o = i.pendingProps,
                    s = xr.current,
                    u = !1;
                return (
                    (a = 0 != (64 & i.flags)) || (a = (null === t || null !== t.memoizedState) && 0 != (2 & s)),
                    a ? ((u = !0), (i.flags &= -65)) : (null !== t && null === t.memoizedState) || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (s |= 1),
                    I(xr, 1 & s),
                    null === t
                        ? (void 0 !== o.fallback && ph(i),
                          (t = o.children),
                          (s = o.fallback),
                          u
                              ? ((t = ui(i, t, s, r)), (i.child.memoizedState = { baseLanes: r }), (i.memoizedState = Hr), t)
                              : "number" == typeof o.unstable_expectedLoadTime
                              ? ((t = ui(i, t, s, r)), (i.child.memoizedState = { baseLanes: r }), (i.memoizedState = Hr), (i.lanes = 33554432), t)
                              : (((r = vi({ mode: "visible", children: t }, i.mode, r, null)).return = i), (i.child = r)))
                        : (t.memoizedState,
                          u
                              ? ((o = wi(t, i, o.children, o.fallback, r)),
                                (u = i.child),
                                (s = t.child.memoizedState),
                                (u.memoizedState = null === s ? { baseLanes: r } : { baseLanes: s.baseLanes | r }),
                                (u.childLanes = t.childLanes & ~r),
                                (i.memoizedState = Hr),
                                o)
                              : ((r = xi(t, i, o.children, r)), (i.memoizedState = null), r))
                );
            }
            function ui(t, i, r, a) {
                var o = t.mode,
                    s = t.child;
                return (
                    (i = { mode: "hidden", children: i }),
                    0 == (2 & o) && null !== s ? ((s.childLanes = 0), (s.pendingProps = i)) : (s = vi(i, o, 0, null)),
                    (r = Xg(r, o, a, null)),
                    (s.return = t),
                    (r.return = t),
                    (s.sibling = r),
                    (t.child = s),
                    r
                );
            }
            function xi(t, i, r, a) {
                var o = t.child;
                return (
                    (t = o.sibling),
                    (r = Tg(o, { mode: "visible", children: r })),
                    0 == (2 & i.mode) && (r.lanes = a),
                    (r.return = i),
                    (r.sibling = null),
                    null !== t && ((t.nextEffect = null), (t.flags = 8), (i.firstEffect = i.lastEffect = t)),
                    (i.child = r)
                );
            }
            function wi(t, i, r, a, o) {
                var s = i.mode,
                    u = t.child;
                t = u.sibling;
                var m = { mode: "hidden", children: r };
                return (
                    0 == (2 & s) && i.child !== u
                        ? (((r = i.child).childLanes = 0), (r.pendingProps = m), null !== (u = r.lastEffect) ? ((i.firstEffect = r.firstEffect), (i.lastEffect = u), (u.nextEffect = null)) : (i.firstEffect = i.lastEffect = null))
                        : (r = Tg(u, m)),
                    null !== t ? (a = Tg(t, a)) : ((a = Xg(a, s, o, null)).flags |= 2),
                    (a.return = i),
                    (r.return = i),
                    (r.sibling = a),
                    (i.child = r),
                    a
                );
            }
            function yi(t, i) {
                t.lanes |= i;
                var r = t.alternate;
                null !== r && (r.lanes |= i), sg(t.return, i);
            }
            function zi(t, i, r, a, o, s) {
                var u = t.memoizedState;
                null === u
                    ? (t.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: a, tail: r, tailMode: o, lastEffect: s })
                    : ((u.isBackwards = i), (u.rendering = null), (u.renderingStartTime = 0), (u.last = a), (u.tail = r), (u.tailMode = o), (u.lastEffect = s));
            }
            function Ai(t, i, r) {
                var a = i.pendingProps,
                    o = a.revealOrder,
                    s = a.tail;
                if ((fi(t, i, a.children, r), 0 != (2 & (a = xr.current)))) (a = (1 & a) | 2), (i.flags |= 64);
                else {
                    if (null !== t && 0 != (64 & t.flags))
                        e: for (t = i.child; null !== t; ) {
                            if (13 === t.tag) null !== t.memoizedState && yi(t, r);
                            else if (19 === t.tag) yi(t, r);
                            else if (null !== t.child) {
                                (t.child.return = t), (t = t.child);
                                continue;
                            }
                            if (t === i) break e;
                            for (; null === t.sibling; ) {
                                if (null === t.return || t.return === i) break e;
                                t = t.return;
                            }
                            (t.sibling.return = t.return), (t = t.sibling);
                        }
                    a &= 1;
                }
                if ((I(xr, a), 0 == (2 & i.mode))) i.memoizedState = null;
                else
                    switch (o) {
                        case "forwards":
                            for (r = i.child, o = null; null !== r; ) null !== (t = r.alternate) && null === ih(t) && (o = r), (r = r.sibling);
                            null === (r = o) ? ((o = i.child), (i.child = null)) : ((o = r.sibling), (r.sibling = null)), zi(i, !1, o, r, s, i.lastEffect);
                            break;
                        case "backwards":
                            for (r = null, o = i.child, i.child = null; null !== o; ) {
                                if (null !== (t = o.alternate) && null === ih(t)) {
                                    i.child = o;
                                    break;
                                }
                                (t = o.sibling), (o.sibling = r), (r = o), (o = t);
                            }
                            zi(i, !0, r, null, s, i.lastEffect);
                            break;
                        case "together":
                            zi(i, !1, null, null, void 0, i.lastEffect);
                            break;
                        default:
                            i.memoizedState = null;
                    }
                return i.child;
            }
            function hi(t, i, r) {
                if ((null !== t && (i.dependencies = t.dependencies), (sa |= i.lanes), 0 != (r & i.childLanes))) {
                    if (null !== t && i.child !== t.child) throw Error(y(153));
                    if (null !== i.child) {
                        for (r = Tg((t = i.child), t.pendingProps), i.child = r, r.return = i; null !== t.sibling; ) (t = t.sibling), ((r = r.sibling = Tg(t, t.pendingProps)).return = i);
                        r.sibling = null;
                    }
                    return i.child;
                }
                return null;
            }
            function Fi(t, i) {
                if (!Tr)
                    switch (t.tailMode) {
                        case "hidden":
                            i = t.tail;
                            for (var r = null; null !== i; ) null !== i.alternate && (r = i), (i = i.sibling);
                            null === r ? (t.tail = null) : (r.sibling = null);
                            break;
                        case "collapsed":
                            r = t.tail;
                            for (var a = null; null !== r; ) null !== r.alternate && (a = r), (r = r.sibling);
                            null === a ? (i || null === t.tail ? (t.tail = null) : (t.tail.sibling = null)) : (a.sibling = null);
                    }
            }
            function Gi(t, i, r) {
                var a = i.pendingProps;
                switch (i.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return null;
                    case 1:
                        return Ff(i.type) && Gf(), null;
                    case 3:
                        return (
                            fh(),
                            H(Zn),
                            H(Xn),
                            uh(),
                            (a = i.stateNode).pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
                            (null !== t && null !== t.child) || (rh(i) ? (i.flags |= 4) : a.hydrate || (i.flags |= 256)),
                            null
                        );
                    case 5:
                        hh(i);
                        var s = dh(wr.current);
                        if (((r = i.type), null !== t && null != i.stateNode)) zr(t, i, r, a), t.ref !== i.ref && (i.flags |= 128);
                        else {
                            if (!a) {
                                if (null === i.stateNode) throw Error(y(166));
                                return null;
                            }
                            if (((t = dh(vr.current)), rh(i))) {
                                (a = i.stateNode), (r = i.type);
                                var u = i.memoizedProps;
                                switch (((a[Hn] = i), (a[Qn] = u), r)) {
                                    case "dialog":
                                        G("cancel", a), G("close", a);
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        G("load", a);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (t = 0; t < Nn.length; t++) G(Nn[t], a);
                                        break;
                                    case "source":
                                        G("error", a);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        G("error", a), G("load", a);
                                        break;
                                    case "details":
                                        G("toggle", a);
                                        break;
                                    case "input":
                                        Za(a, u), G("invalid", a);
                                        break;
                                    case "select":
                                        (a._wrapperState = { wasMultiple: !!u.multiple }), G("invalid", a);
                                        break;
                                    case "textarea":
                                        hb(a, u), G("invalid", a);
                                }
                                for (var v in (vb(r, u), (t = null), u))
                                    u.hasOwnProperty(v) &&
                                        ((s = u[v]),
                                        "children" === v
                                            ? "string" == typeof s
                                                ? a.textContent !== s && (t = ["children", s])
                                                : "number" == typeof s && a.textContent !== "" + s && (t = ["children", "" + s])
                                            : m.hasOwnProperty(v) && null != s && "onScroll" === v && G("scroll", a));
                                switch (r) {
                                    case "input":
                                        Va(a), cb(a, u, !0);
                                        break;
                                    case "textarea":
                                        Va(a), jb(a);
                                        break;
                                    case "select":
                                    case "option":
                                        break;
                                    default:
                                        "function" == typeof u.onClick && (a.onclick = jf);
                                }
                                (a = t), (i.updateQueue = a), null !== a && (i.flags |= 4);
                            } else {
                                switch (
                                    ((v = 9 === s.nodeType ? s : s.ownerDocument),
                                    t === qe && (t = lb(r)),
                                    t === qe
                                        ? "script" === r
                                            ? (((t = v.createElement("div")).innerHTML = "<script></script>"), (t = t.removeChild(t.firstChild)))
                                            : "string" == typeof a.is
                                            ? (t = v.createElement(r, { is: a.is }))
                                            : ((t = v.createElement(r)), "select" === r && ((v = t), a.multiple ? (v.multiple = !0) : a.size && (v.size = a.size)))
                                        : (t = v.createElementNS(t, r)),
                                    (t[Hn] = i),
                                    (t[Qn] = a),
                                    Ur(t, i),
                                    (i.stateNode = t),
                                    (v = wb(r, a)),
                                    r)
                                ) {
                                    case "dialog":
                                        G("cancel", t), G("close", t), (s = a);
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        G("load", t), (s = a);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (s = 0; s < Nn.length; s++) G(Nn[s], t);
                                        s = a;
                                        break;
                                    case "source":
                                        G("error", t), (s = a);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        G("error", t), G("load", t), (s = a);
                                        break;
                                    case "details":
                                        G("toggle", t), (s = a);
                                        break;
                                    case "input":
                                        Za(t, a), (s = Ya(t, a)), G("invalid", t);
                                        break;
                                    case "option":
                                        s = eb(t, a);
                                        break;
                                    case "select":
                                        (t._wrapperState = { wasMultiple: !!a.multiple }), (s = o({}, a, { value: void 0 })), G("invalid", t);
                                        break;
                                    case "textarea":
                                        hb(t, a), (s = gb(t, a)), G("invalid", t);
                                        break;
                                    default:
                                        s = a;
                                }
                                vb(r, s);
                                var T = s;
                                for (u in T)
                                    if (T.hasOwnProperty(u)) {
                                        var q = T[u];
                                        "style" === u
                                            ? tb(t, q)
                                            : "dangerouslySetInnerHTML" === u
                                            ? null != (q = q ? q.__html : void 0) && Ie(t, q)
                                            : "children" === u
                                            ? "string" == typeof q
                                                ? ("textarea" !== r || "" !== q) && pb(t, q)
                                                : "number" == typeof q && pb(t, "" + q)
                                            : "suppressContentEditableWarning" !== u &&
                                              "suppressHydrationWarning" !== u &&
                                              "autoFocus" !== u &&
                                              (m.hasOwnProperty(u) ? null != q && "onScroll" === u && G("scroll", t) : null != q && qa(t, u, q, v));
                                    }
                                switch (r) {
                                    case "input":
                                        Va(t), cb(t, a, !1);
                                        break;
                                    case "textarea":
                                        Va(t), jb(t);
                                        break;
                                    case "option":
                                        null != a.value && t.setAttribute("value", "" + Sa(a.value));
                                        break;
                                    case "select":
                                        (t.multiple = !!a.multiple), null != (u = a.value) ? fb(t, !!a.multiple, u, !1) : null != a.defaultValue && fb(t, !!a.multiple, a.defaultValue, !0);
                                        break;
                                    default:
                                        "function" == typeof s.onClick && (t.onclick = jf);
                                }
                                mf(r, a) && (i.flags |= 4);
                            }
                            null !== i.ref && (i.flags |= 128);
                        }
                        return null;
                    case 6:
                        if (t && null != i.stateNode) Vr(0, i, t.memoizedProps, a);
                        else {
                            if ("string" != typeof a && null === i.stateNode) throw Error(y(166));
                            (r = dh(wr.current)),
                                dh(vr.current),
                                rh(i) ? ((a = i.stateNode), (r = i.memoizedProps), (a[Hn] = i), a.nodeValue !== r && (i.flags |= 4)) : (((a = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(a))[Hn] = i), (i.stateNode = a));
                        }
                        return null;
                    case 13:
                        return (
                            H(xr),
                            (a = i.memoizedState),
                            0 != (64 & i.flags)
                                ? ((i.lanes = r), i)
                                : ((a = null !== a),
                                  (r = !1),
                                  null === t ? void 0 !== i.memoizedProps.fallback && rh(i) : (r = null !== t.memoizedState),
                                  a &&
                                      !r &&
                                      0 != (2 & i.mode) &&
                                      ((null === t && !0 !== i.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & xr.current)
                                          ? 0 === ra && (ra = 3)
                                          : ((0 !== ra && 3 !== ra) || (ra = 4), null === Xr || (0 == (134217727 & sa) && 0 == (134217727 & ua)) || Ii(Xr, Jr))),
                                  (a || r) && (i.flags |= 4),
                                  null)
                        );
                    case 4:
                        return fh(), null === t && cf(i.stateNode.containerInfo), null;
                    case 10:
                        return rg(i), null;
                    case 17:
                        return Ff(i.type) && Gf(), null;
                    case 19:
                        if ((H(xr), null === (a = i.memoizedState))) return null;
                        if (((u = 0 != (64 & i.flags)), null === (v = a.rendering)))
                            if (u) Fi(a, !1);
                            else {
                                if (0 !== ra || (null !== t && 0 != (64 & t.flags)))
                                    for (t = i.child; null !== t; ) {
                                        if (null !== (v = ih(t))) {
                                            for (
                                                i.flags |= 64,
                                                    Fi(a, !1),
                                                    null !== (u = v.updateQueue) && ((i.updateQueue = u), (i.flags |= 4)),
                                                    null === a.lastEffect && (i.firstEffect = null),
                                                    i.lastEffect = a.lastEffect,
                                                    a = r,
                                                    r = i.child;
                                                null !== r;

                                            )
                                                (t = a),
                                                    ((u = r).flags &= 2),
                                                    (u.nextEffect = null),
                                                    (u.firstEffect = null),
                                                    (u.lastEffect = null),
                                                    null === (v = u.alternate)
                                                        ? ((u.childLanes = 0), (u.lanes = t), (u.child = null), (u.memoizedProps = null), (u.memoizedState = null), (u.updateQueue = null), (u.dependencies = null), (u.stateNode = null))
                                                        : ((u.childLanes = v.childLanes),
                                                          (u.lanes = v.lanes),
                                                          (u.child = v.child),
                                                          (u.memoizedProps = v.memoizedProps),
                                                          (u.memoizedState = v.memoizedState),
                                                          (u.updateQueue = v.updateQueue),
                                                          (u.type = v.type),
                                                          (t = v.dependencies),
                                                          (u.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext })),
                                                    (r = r.sibling);
                                            return I(xr, (1 & xr.current) | 2), i.child;
                                        }
                                        t = t.sibling;
                                    }
                                null !== a.tail && or() > ga && ((i.flags |= 64), (u = !0), Fi(a, !1), (i.lanes = 33554432));
                            }
                        else {
                            if (!u)
                                if (null !== (t = ih(v))) {
                                    if (((i.flags |= 64), (u = !0), null !== (r = t.updateQueue) && ((i.updateQueue = r), (i.flags |= 4)), Fi(a, !0), null === a.tail && "hidden" === a.tailMode && !v.alternate && !Tr))
                                        return null !== (i = i.lastEffect = a.lastEffect) && (i.nextEffect = null), null;
                                } else 2 * or() - a.renderingStartTime > ga && 1073741824 !== r && ((i.flags |= 64), (u = !0), Fi(a, !1), (i.lanes = 33554432));
                            a.isBackwards ? ((v.sibling = i.child), (i.child = v)) : (null !== (r = a.last) ? (r.sibling = v) : (i.child = v), (a.last = v));
                        }
                        return null !== a.tail
                            ? ((r = a.tail), (a.rendering = r), (a.tail = r.sibling), (a.lastEffect = i.lastEffect), (a.renderingStartTime = or()), (r.sibling = null), (i = xr.current), I(xr, u ? (1 & i) | 2 : 1 & i), r)
                            : null;
                    case 23:
                    case 24:
                        return Ki(), null !== t && (null !== t.memoizedState) != (null !== i.memoizedState) && "unstable-defer-without-hiding" !== a.mode && (i.flags |= 4), null;
                }
                throw Error(y(156, i.tag));
            }
            function Li(t) {
                switch (t.tag) {
                    case 1:
                        Ff(t.type) && Gf();
                        var i = t.flags;
                        return 4096 & i ? ((t.flags = (-4097 & i) | 64), t) : null;
                    case 3:
                        if ((fh(), H(Zn), H(Xn), uh(), 0 != (64 & (i = t.flags)))) throw Error(y(285));
                        return (t.flags = (-4097 & i) | 64), t;
                    case 5:
                        return hh(t), null;
                    case 13:
                        return H(xr), 4096 & (i = t.flags) ? ((t.flags = (-4097 & i) | 64), t) : null;
                    case 19:
                        return H(xr), null;
                    case 4:
                        return fh(), null;
                    case 10:
                        return rg(t), null;
                    case 23:
                    case 24:
                        return Ki(), null;
                    default:
                        return null;
                }
            }
            function Mi(t, i) {
                try {
                    var r = "",
                        a = i;
                    do {
                        (r += Qa(a)), (a = a.return);
                    } while (a);
                    var o = r;
                } catch (t) {
                    o = "\nError generating stack: " + t.message + "\n" + t.stack;
                }
                return { value: t, source: i, stack: o };
            }
            function Ni(t, i) {
                try {
                    console.error(i.value);
                } catch (t) {
                    setTimeout(function () {
                        throw t;
                    });
                }
            }
            (Ur = function (t, i) {
                for (var r = i.child; null !== r; ) {
                    if (5 === r.tag || 6 === r.tag) t.appendChild(r.stateNode);
                    else if (4 !== r.tag && null !== r.child) {
                        (r.child.return = r), (r = r.child);
                        continue;
                    }
                    if (r === i) break;
                    for (; null === r.sibling; ) {
                        if (null === r.return || r.return === i) return;
                        r = r.return;
                    }
                    (r.sibling.return = r.return), (r = r.sibling);
                }
            }),
                (zr = function (t, i, r, a) {
                    var s = t.memoizedProps;
                    if (s !== a) {
                        (t = i.stateNode), dh(vr.current);
                        var u,
                            v = null;
                        switch (r) {
                            case "input":
                                (s = Ya(t, s)), (a = Ya(t, a)), (v = []);
                                break;
                            case "option":
                                (s = eb(t, s)), (a = eb(t, a)), (v = []);
                                break;
                            case "select":
                                (s = o({}, s, { value: void 0 })), (a = o({}, a, { value: void 0 })), (v = []);
                                break;
                            case "textarea":
                                (s = gb(t, s)), (a = gb(t, a)), (v = []);
                                break;
                            default:
                                "function" != typeof s.onClick && "function" == typeof a.onClick && (t.onclick = jf);
                        }
                        for (R in (vb(r, a), (r = null), s))
                            if (!a.hasOwnProperty(R) && s.hasOwnProperty(R) && null != s[R])
                                if ("style" === R) {
                                    var T = s[R];
                                    for (u in T) T.hasOwnProperty(u) && (r || (r = {}), (r[u] = ""));
                                } else
                                    "dangerouslySetInnerHTML" !== R &&
                                        "children" !== R &&
                                        "suppressContentEditableWarning" !== R &&
                                        "suppressHydrationWarning" !== R &&
                                        "autoFocus" !== R &&
                                        (m.hasOwnProperty(R) ? v || (v = []) : (v = v || []).push(R, null));
                        for (R in a) {
                            var q = a[R];
                            if (((T = null != s ? s[R] : void 0), a.hasOwnProperty(R) && q !== T && (null != q || null != T)))
                                if ("style" === R)
                                    if (T) {
                                        for (u in T) !T.hasOwnProperty(u) || (q && q.hasOwnProperty(u)) || (r || (r = {}), (r[u] = ""));
                                        for (u in q) q.hasOwnProperty(u) && T[u] !== q[u] && (r || (r = {}), (r[u] = q[u]));
                                    } else r || (v || (v = []), v.push(R, r)), (r = q);
                                else
                                    "dangerouslySetInnerHTML" === R
                                        ? ((q = q ? q.__html : void 0), (T = T ? T.__html : void 0), null != q && T !== q && (v = v || []).push(R, q))
                                        : "children" === R
                                        ? ("string" != typeof q && "number" != typeof q) || (v = v || []).push(R, "" + q)
                                        : "suppressContentEditableWarning" !== R &&
                                          "suppressHydrationWarning" !== R &&
                                          (m.hasOwnProperty(R)
                                              ? (null != q && "onScroll" === R && G("scroll", t), v || T === q || (v = []))
                                              : "object" == typeof q && null !== q && q.$$typeof === fe
                                              ? q.toString()
                                              : (v = v || []).push(R, q));
                        }
                        r && (v = v || []).push("style", r);
                        var R = v;
                        (i.updateQueue = R) && (i.flags |= 4);
                    }
                }),
                (Vr = function (t, i, r, a) {
                    r !== a && (i.flags |= 4);
                });
            var Qr = "function" == typeof WeakMap ? WeakMap : Map;
            function Pi(t, i, r) {
                ((r = zg(-1, r)).tag = 3), (r.payload = { element: null });
                var a = i.value;
                return (
                    (r.callback = function () {
                        va || ((va = !0), (_a = a)), Ni(0, i);
                    }),
                    r
                );
            }
            function Si(t, i, r) {
                (r = zg(-1, r)).tag = 3;
                var a = t.type.getDerivedStateFromError;
                if ("function" == typeof a) {
                    var o = i.value;
                    r.payload = function () {
                        return Ni(0, i), a(o);
                    };
                }
                var s = t.stateNode;
                return (
                    null !== s &&
                        "function" == typeof s.componentDidCatch &&
                        (r.callback = function () {
                            "function" != typeof a && (null === wa ? (wa = new Set([this])) : wa.add(this), Ni(0, i));
                            var t = i.stack;
                            this.componentDidCatch(i.value, { componentStack: null !== t ? t : "" });
                        }),
                    r
                );
            }
            var Wr = "function" == typeof WeakSet ? WeakSet : Set;
            function Vi(t) {
                var i = t.ref;
                if (null !== i)
                    if ("function" == typeof i)
                        try {
                            i(null);
                        } catch (i) {
                            Wi(t, i);
                        }
                    else i.current = null;
            }
            function Xi(t, i) {
                switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        return;
                    case 1:
                        if (256 & i.flags && null !== t) {
                            var r = t.memoizedProps,
                                a = t.memoizedState;
                            (i = (t = i.stateNode).getSnapshotBeforeUpdate(i.elementType === i.type ? r : lg(i.type, r), a)), (t.__reactInternalSnapshotBeforeUpdate = i);
                        }
                        return;
                    case 3:
                        return void (256 & i.flags && qf(i.stateNode.containerInfo));
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        return;
                }
                throw Error(y(163));
            }
            function Yi(t, i, r) {
                switch (r.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        if (null !== (i = null !== (i = r.updateQueue) ? i.lastEffect : null)) {
                            t = i = i.next;
                            do {
                                if (3 == (3 & t.tag)) {
                                    var a = t.create;
                                    t.destroy = a();
                                }
                                t = t.next;
                            } while (t !== i);
                        }
                        if (null !== (i = null !== (i = r.updateQueue) ? i.lastEffect : null)) {
                            t = i = i.next;
                            do {
                                var o = t;
                                (a = o.next), 0 != (4 & (o = o.tag)) && 0 != (1 & o) && (Zi(r, t), $i(r, t)), (t = a);
                            } while (t !== i);
                        }
                        return;
                    case 1:
                        return (
                            (t = r.stateNode),
                            4 & r.flags &&
                                (null === i ? t.componentDidMount() : ((a = r.elementType === r.type ? i.memoizedProps : lg(r.type, i.memoizedProps)), t.componentDidUpdate(a, i.memoizedState, t.__reactInternalSnapshotBeforeUpdate))),
                            void (null !== (i = r.updateQueue) && Eg(r, i, t))
                        );
                    case 3:
                        if (null !== (i = r.updateQueue)) {
                            if (((t = null), null !== r.child))
                                switch (r.child.tag) {
                                    case 5:
                                        t = r.child.stateNode;
                                        break;
                                    case 1:
                                        t = r.child.stateNode;
                                }
                            Eg(r, i, t);
                        }
                        return;
                    case 5:
                        return (t = r.stateNode), void (null === i && 4 & r.flags && mf(r.type, r.memoizedProps) && t.focus());
                    case 6:
                    case 4:
                    case 12:
                        return;
                    case 13:
                        return void (null === r.memoizedState && ((r = r.alternate), null !== r && ((r = r.memoizedState), null !== r && ((r = r.dehydrated), null !== r && Cc(r)))));
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                    case 23:
                    case 24:
                        return;
                }
                throw Error(y(163));
            }
            function aj(t, i) {
                for (var r = t; ; ) {
                    if (5 === r.tag) {
                        var a = r.stateNode;
                        if (i) "function" == typeof (a = a.style).setProperty ? a.setProperty("display", "none", "important") : (a.display = "none");
                        else {
                            a = r.stateNode;
                            var o = r.memoizedProps.style;
                            (o = null != o && o.hasOwnProperty("display") ? o.display : null), (a.style.display = sb("display", o));
                        }
                    } else if (6 === r.tag) r.stateNode.nodeValue = i ? "" : r.memoizedProps;
                    else if (((23 !== r.tag && 24 !== r.tag) || null === r.memoizedState || r === t) && null !== r.child) {
                        (r.child.return = r), (r = r.child);
                        continue;
                    }
                    if (r === t) break;
                    for (; null === r.sibling; ) {
                        if (null === r.return || r.return === t) return;
                        r = r.return;
                    }
                    (r.sibling.return = r.return), (r = r.sibling);
                }
            }
            function bj(t, i) {
                if (si && "function" == typeof si.onCommitFiberUnmount)
                    try {
                        si.onCommitFiberUnmount(ei, i);
                    } catch (t) {}
                switch (i.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        if (null !== (t = i.updateQueue) && null !== (t = t.lastEffect)) {
                            var r = (t = t.next);
                            do {
                                var a = r,
                                    o = a.destroy;
                                if (((a = a.tag), void 0 !== o))
                                    if (0 != (4 & a)) Zi(i, r);
                                    else {
                                        a = i;
                                        try {
                                            o();
                                        } catch (t) {
                                            Wi(a, t);
                                        }
                                    }
                                r = r.next;
                            } while (r !== t);
                        }
                        break;
                    case 1:
                        if ((Vi(i), "function" == typeof (t = i.stateNode).componentWillUnmount))
                            try {
                                (t.props = i.memoizedProps), (t.state = i.memoizedState), t.componentWillUnmount();
                            } catch (t) {
                                Wi(i, t);
                            }
                        break;
                    case 5:
                        Vi(i);
                        break;
                    case 4:
                        cj(t, i);
                }
            }
            function dj(t) {
                (t.alternate = null),
                    (t.child = null),
                    (t.dependencies = null),
                    (t.firstEffect = null),
                    (t.lastEffect = null),
                    (t.memoizedProps = null),
                    (t.memoizedState = null),
                    (t.pendingProps = null),
                    (t.return = null),
                    (t.updateQueue = null);
            }
            function ej(t) {
                return 5 === t.tag || 3 === t.tag || 4 === t.tag;
            }
            function fj(t) {
                e: {
                    for (var i = t.return; null !== i; ) {
                        if (ej(i)) break e;
                        i = i.return;
                    }
                    throw Error(y(160));
                }
                var r = i;
                switch (((i = r.stateNode), r.tag)) {
                    case 5:
                        var a = !1;
                        break;
                    case 3:
                    case 4:
                        (i = i.containerInfo), (a = !0);
                        break;
                    default:
                        throw Error(y(161));
                }
                16 & r.flags && (pb(i, ""), (r.flags &= -17));
                e: t: for (r = t; ; ) {
                    for (; null === r.sibling; ) {
                        if (null === r.return || ej(r.return)) {
                            r = null;
                            break e;
                        }
                        r = r.return;
                    }
                    for (r.sibling.return = r.return, r = r.sibling; 5 !== r.tag && 6 !== r.tag && 18 !== r.tag; ) {
                        if (2 & r.flags) continue t;
                        if (null === r.child || 4 === r.tag) continue t;
                        (r.child.return = r), (r = r.child);
                    }
                    if (!(2 & r.flags)) {
                        r = r.stateNode;
                        break e;
                    }
                }
                a
                    ? (function gj(t, i, r) {
                          var a = t.tag,
                              o = 5 === a || 6 === a;
                          if (o)
                              (t = o ? t.stateNode : t.stateNode.instance),
                                  i
                                      ? 8 === r.nodeType
                                          ? r.parentNode.insertBefore(t, i)
                                          : r.insertBefore(t, i)
                                      : (8 === r.nodeType ? (i = r.parentNode).insertBefore(t, r) : (i = r).appendChild(t), (null !== (r = r._reactRootContainer) && void 0 !== r) || null !== i.onclick || (i.onclick = jf));
                          else if (4 !== a && null !== (t = t.child)) for (gj(t, i, r), t = t.sibling; null !== t; ) gj(t, i, r), (t = t.sibling);
                      })(t, r, i)
                    : (function hj(t, i, r) {
                          var a = t.tag,
                              o = 5 === a || 6 === a;
                          if (o) (t = o ? t.stateNode : t.stateNode.instance), i ? r.insertBefore(t, i) : r.appendChild(t);
                          else if (4 !== a && null !== (t = t.child)) for (hj(t, i, r), t = t.sibling; null !== t; ) hj(t, i, r), (t = t.sibling);
                      })(t, r, i);
            }
            function cj(t, i) {
                for (var r, a, o = i, s = !1; ; ) {
                    if (!s) {
                        s = o.return;
                        e: for (;;) {
                            if (null === s) throw Error(y(160));
                            switch (((r = s.stateNode), s.tag)) {
                                case 5:
                                    a = !1;
                                    break e;
                                case 3:
                                case 4:
                                    (r = r.containerInfo), (a = !0);
                                    break e;
                            }
                            s = s.return;
                        }
                        s = !0;
                    }
                    if (5 === o.tag || 6 === o.tag) {
                        e: for (var u = t, m = o, v = m; ; )
                            if ((bj(u, v), null !== v.child && 4 !== v.tag)) (v.child.return = v), (v = v.child);
                            else {
                                if (v === m) break e;
                                for (; null === v.sibling; ) {
                                    if (null === v.return || v.return === m) break e;
                                    v = v.return;
                                }
                                (v.sibling.return = v.return), (v = v.sibling);
                            }
                        a ? ((u = r), (m = o.stateNode), 8 === u.nodeType ? u.parentNode.removeChild(m) : u.removeChild(m)) : r.removeChild(o.stateNode);
                    } else if (4 === o.tag) {
                        if (null !== o.child) {
                            (r = o.stateNode.containerInfo), (a = !0), (o.child.return = o), (o = o.child);
                            continue;
                        }
                    } else if ((bj(t, o), null !== o.child)) {
                        (o.child.return = o), (o = o.child);
                        continue;
                    }
                    if (o === i) break;
                    for (; null === o.sibling; ) {
                        if (null === o.return || o.return === i) return;
                        4 === (o = o.return).tag && (s = !1);
                    }
                    (o.sibling.return = o.return), (o = o.sibling);
                }
            }
            function ij(t, i) {
                switch (i.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        var r = i.updateQueue;
                        if (null !== (r = null !== r ? r.lastEffect : null)) {
                            var a = (r = r.next);
                            do {
                                3 == (3 & a.tag) && ((t = a.destroy), (a.destroy = void 0), void 0 !== t && t()), (a = a.next);
                            } while (a !== r);
                        }
                        return;
                    case 1:
                        return;
                    case 5:
                        if (null != (r = i.stateNode)) {
                            a = i.memoizedProps;
                            var o = null !== t ? t.memoizedProps : a;
                            t = i.type;
                            var s = i.updateQueue;
                            if (((i.updateQueue = null), null !== s)) {
                                for (r[Qn] = a, "input" === t && "radio" === a.type && null != a.name && $a(r, a), wb(t, o), i = wb(t, a), o = 0; o < s.length; o += 2) {
                                    var u = s[o],
                                        m = s[o + 1];
                                    "style" === u ? tb(r, m) : "dangerouslySetInnerHTML" === u ? Ie(r, m) : "children" === u ? pb(r, m) : qa(r, u, m, i);
                                }
                                switch (t) {
                                    case "input":
                                        ab(r, a);
                                        break;
                                    case "textarea":
                                        ib(r, a);
                                        break;
                                    case "select":
                                        (t = r._wrapperState.wasMultiple),
                                            (r._wrapperState.wasMultiple = !!a.multiple),
                                            null != (s = a.value) ? fb(r, !!a.multiple, s, !1) : t !== !!a.multiple && (null != a.defaultValue ? fb(r, !!a.multiple, a.defaultValue, !0) : fb(r, !!a.multiple, a.multiple ? [] : "", !1));
                                }
                            }
                        }
                        return;
                    case 6:
                        if (null === i.stateNode) throw Error(y(162));
                        return void (i.stateNode.nodeValue = i.memoizedProps);
                    case 3:
                        return void ((r = i.stateNode).hydrate && ((r.hydrate = !1), Cc(r.containerInfo)));
                    case 12:
                        return;
                    case 13:
                        return null !== i.memoizedState && ((fa = or()), aj(i.child, !0)), void kj(i);
                    case 19:
                        return void kj(i);
                    case 17:
                        return;
                    case 23:
                    case 24:
                        return void aj(i, null !== i.memoizedState);
                }
                throw Error(y(163));
            }
            function kj(t) {
                var i = t.updateQueue;
                if (null !== i) {
                    t.updateQueue = null;
                    var r = t.stateNode;
                    null === r && (r = t.stateNode = new Wr()),
                        i.forEach(function (i) {
                            var a = lj.bind(null, t, i);
                            r.has(i) || (r.add(i), i.then(a, a));
                        });
                }
            }
            function mj(t, i) {
                return null !== t && (null === (t = t.memoizedState) || null !== t.dehydrated) && null !== (i = i.memoizedState) && null === i.dehydrated;
            }
            var Kr = Math.ceil,
                $r = U.ReactCurrentDispatcher,
                Gr = U.ReactCurrentOwner,
                Yr = 0,
                Xr = null,
                Zr = null,
                Jr = 0,
                ta = 0,
                ia = Bf(0),
                ra = 0,
                aa = null,
                oa = 0,
                sa = 0,
                ua = 0,
                ca = 0,
                ha = null,
                fa = 0,
                ga = 1 / 0;
            function wj() {
                ga = or() + 500;
            }
            var ba,
                ya = null,
                va = !1,
                _a = null,
                wa = null,
                xa = !1,
                Ea = null,
                ka = 90,
                Ca = [],
                Oa = [],
                Aa = null,
                Da = 0,
                Ia = null,
                Ma = -1,
                ja = 0,
                Ba = 0,
                Fa = null,
                za = !1;
            function Hg() {
                return 0 != (48 & Yr) ? or() : -1 !== Ma ? Ma : (Ma = or());
            }
            function Ig(t) {
                if (0 == (2 & (t = t.mode))) return 1;
                if (0 == (4 & t)) return 99 === eg() ? 1 : 2;
                if ((0 === ja && (ja = oa), 0 !== sr.transition)) {
                    0 !== Ba && (Ba = null !== ha ? ha.pendingLanes : 0), (t = ja);
                    var i = 4186112 & ~Ba;
                    return 0 === (i &= -i) && 0 === (i = (t = 4186112 & ~t) & -t) && (i = 8192), i;
                }
                return (
                    (t = eg()),
                    0 != (4 & Yr) && 98 === t
                        ? (t = Xc(12, ja))
                        : (t = Xc(
                              (t = (function Sc(t) {
                                  switch (t) {
                                      case 99:
                                          return 15;
                                      case 98:
                                          return 10;
                                      case 97:
                                      case 96:
                                          return 8;
                                      case 95:
                                          return 2;
                                      default:
                                          return 0;
                                  }
                              })(t)),
                              ja
                          )),
                    t
                );
            }
            function Jg(t, i, r) {
                if (50 < Da) throw ((Da = 0), (Ia = null), Error(y(185)));
                if (null === (t = Kj(t, i))) return null;
                $c(t, i, r), t === Xr && ((ua |= i), 4 === ra && Ii(t, Jr));
                var a = eg();
                1 === i ? (0 != (8 & Yr) && 0 == (48 & Yr) ? Lj(t) : (Mj(t, r), 0 === Yr && (wj(), ig()))) : (0 == (4 & Yr) || (98 !== a && 99 !== a) || (null === Aa ? (Aa = new Set([t])) : Aa.add(t)), Mj(t, r)), (ha = t);
            }
            function Kj(t, i) {
                t.lanes |= i;
                var r = t.alternate;
                for (null !== r && (r.lanes |= i), r = t, t = t.return; null !== t; ) (t.childLanes |= i), null !== (r = t.alternate) && (r.childLanes |= i), (r = t), (t = t.return);
                return 3 === r.tag ? r.stateNode : null;
            }
            function Mj(t, i) {
                for (var r = t.callbackNode, a = t.suspendedLanes, o = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes; 0 < u; ) {
                    var m = 31 - Rt(u),
                        v = 1 << m,
                        T = s[m];
                    if (-1 === T) {
                        if (0 == (v & a) || 0 != (v & o)) {
                            (T = i), Rc(v);
                            var q = Lt;
                            s[m] = 10 <= q ? T + 250 : 6 <= q ? T + 5e3 : -1;
                        }
                    } else T <= i && (t.expiredLanes |= v);
                    u &= ~v;
                }
                if (((a = Uc(t, t === Xr ? Jr : 0)), (i = Lt), 0 === a)) null !== r && (r !== er && Ti(r), (t.callbackNode = null), (t.callbackPriority = 0));
                else {
                    if (null !== r) {
                        if (t.callbackPriority === i) return;
                        r !== er && Ti(r);
                    }
                    15 === i
                        ? ((r = Lj.bind(null, t)), null === nr ? ((nr = [r]), (ir = Ei(Bi, jg))) : nr.push(r), (r = er))
                        : 14 === i
                        ? (r = hg(99, Lj.bind(null, t)))
                        : (r = hg(
                              (r = (function Tc(t) {
                                  switch (t) {
                                      case 15:
                                      case 14:
                                          return 99;
                                      case 13:
                                      case 12:
                                      case 11:
                                      case 10:
                                          return 98;
                                      case 9:
                                      case 8:
                                      case 7:
                                      case 6:
                                      case 4:
                                      case 5:
                                          return 97;
                                      case 3:
                                      case 2:
                                      case 1:
                                          return 95;
                                      case 0:
                                          return 90;
                                      default:
                                          throw Error(y(358, t));
                                  }
                              })(i)),
                              Nj.bind(null, t)
                          )),
                        (t.callbackPriority = i),
                        (t.callbackNode = r);
                }
            }
            function Nj(t) {
                if (((Ma = -1), (Ba = ja = 0), 0 != (48 & Yr))) throw Error(y(327));
                var i = t.callbackNode;
                if (Oj() && t.callbackNode !== i) return null;
                var r = Uc(t, t === Xr ? Jr : 0);
                if (0 === r) return null;
                var a = r,
                    o = Yr;
                Yr |= 16;
                var s = Pj();
                for ((Xr === t && Jr === a) || (wj(), Qj(t, a)); ; )
                    try {
                        Rj();
                        break;
                    } catch (i) {
                        Sj(t, i);
                    }
                if ((qg(), ($r.current = s), (Yr = o), null !== Zr ? (a = 0) : ((Xr = null), (Jr = 0), (a = ra)), 0 != (oa & ua))) Qj(t, 0);
                else if (0 !== a) {
                    if ((2 === a && ((Yr |= 64), t.hydrate && ((t.hydrate = !1), qf(t.containerInfo)), 0 !== (r = Wc(t)) && (a = Tj(t, r))), 1 === a)) throw ((i = aa), Qj(t, 0), Ii(t, r), Mj(t, or()), i);
                    switch (((t.finishedWork = t.current.alternate), (t.finishedLanes = r), a)) {
                        case 0:
                        case 1:
                            throw Error(y(345));
                        case 2:
                            Uj(t);
                            break;
                        case 3:
                            if ((Ii(t, r), (62914560 & r) === r && 10 < (a = fa + 500 - or()))) {
                                if (0 !== Uc(t, 0)) break;
                                if (((o = t.suspendedLanes) & r) !== r) {
                                    Hg(), (t.pingedLanes |= t.suspendedLanes & o);
                                    break;
                                }
                                t.timeoutHandle = Fn(Uj.bind(null, t), a);
                                break;
                            }
                            Uj(t);
                            break;
                        case 4:
                            if ((Ii(t, r), (4186112 & r) === r)) break;
                            for (a = t.eventTimes, o = -1; 0 < r; ) {
                                var u = 31 - Rt(r);
                                (s = 1 << u), (u = a[u]) > o && (o = u), (r &= ~s);
                            }
                            if (((r = o), 10 < (r = (120 > (r = or() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Kr(r / 1960)) - r))) {
                                t.timeoutHandle = Fn(Uj.bind(null, t), r);
                                break;
                            }
                            Uj(t);
                            break;
                        case 5:
                            Uj(t);
                            break;
                        default:
                            throw Error(y(329));
                    }
                }
                return Mj(t, or()), t.callbackNode === i ? Nj.bind(null, t) : null;
            }
            function Ii(t, i) {
                for (i &= ~ca, i &= ~ua, t.suspendedLanes |= i, t.pingedLanes &= ~i, t = t.expirationTimes; 0 < i; ) {
                    var r = 31 - Rt(i),
                        a = 1 << r;
                    (t[r] = -1), (i &= ~a);
                }
            }
            function Lj(t) {
                if (0 != (48 & Yr)) throw Error(y(327));
                if ((Oj(), t === Xr && 0 != (t.expiredLanes & Jr))) {
                    var i = Jr,
                        r = Tj(t, i);
                    0 != (oa & ua) && (r = Tj(t, (i = Uc(t, i))));
                } else r = Tj(t, (i = Uc(t, 0)));
                if ((0 !== t.tag && 2 === r && ((Yr |= 64), t.hydrate && ((t.hydrate = !1), qf(t.containerInfo)), 0 !== (i = Wc(t)) && (r = Tj(t, i))), 1 === r)) throw ((r = aa), Qj(t, 0), Ii(t, i), Mj(t, or()), r);
                return (t.finishedWork = t.current.alternate), (t.finishedLanes = i), Uj(t), Mj(t, or()), null;
            }
            function Wj(t, i) {
                var r = Yr;
                Yr |= 1;
                try {
                    return t(i);
                } finally {
                    0 === (Yr = r) && (wj(), ig());
                }
            }
            function Xj(t, i) {
                var r = Yr;
                (Yr &= -2), (Yr |= 8);
                try {
                    return t(i);
                } finally {
                    0 === (Yr = r) && (wj(), ig());
                }
            }
            function ni(t, i) {
                I(ia, ta), (ta |= i), (oa |= i);
            }
            function Ki() {
                (ta = ia.current), H(ia);
            }
            function Qj(t, i) {
                (t.finishedWork = null), (t.finishedLanes = 0);
                var r = t.timeoutHandle;
                if ((-1 !== r && ((t.timeoutHandle = -1), Un(r)), null !== Zr))
                    for (r = Zr.return; null !== r; ) {
                        var a = r;
                        switch (a.tag) {
                            case 1:
                                null != (a = a.type.childContextTypes) && Gf();
                                break;
                            case 3:
                                fh(), H(Zn), H(Xn), uh();
                                break;
                            case 5:
                                hh(a);
                                break;
                            case 4:
                                fh();
                                break;
                            case 13:
                            case 19:
                                H(xr);
                                break;
                            case 10:
                                rg(a);
                                break;
                            case 23:
                            case 24:
                                Ki();
                        }
                        r = r.return;
                    }
                (Xr = t), (Zr = Tg(t.current, null)), (Jr = ta = oa = i), (ra = 0), (aa = null), (ca = ua = sa = 0);
            }
            function Sj(t, i) {
                for (;;) {
                    var r = Zr;
                    try {
                        if ((qg(), (Sr.current = Nr), Rr)) {
                            for (var a = Ar.memoizedState; null !== a; ) {
                                var o = a.queue;
                                null !== o && (o.pending = null), (a = a.next);
                            }
                            Rr = !1;
                        }
                        if (((Or = 0), (Lr = Dr = Ar = null), (Pr = !1), (Gr.current = null), null === r || null === r.return)) {
                            (ra = 1), (aa = i), (Zr = null);
                            break;
                        }
                        e: {
                            var s = t,
                                u = r.return,
                                m = r,
                                v = i;
                            if (((i = Jr), (m.flags |= 2048), (m.firstEffect = m.lastEffect = null), null !== v && "object" == typeof v && "function" == typeof v.then)) {
                                var T = v;
                                if (0 == (2 & m.mode)) {
                                    var q = m.alternate;
                                    q ? ((m.updateQueue = q.updateQueue), (m.memoizedState = q.memoizedState), (m.lanes = q.lanes)) : ((m.updateQueue = null), (m.memoizedState = null));
                                }
                                var R = 0 != (1 & xr.current),
                                    M = u;
                                do {
                                    var j;
                                    if ((j = 13 === M.tag)) {
                                        var F = M.memoizedState;
                                        if (null !== F) j = null !== F.dehydrated;
                                        else {
                                            var U = M.memoizedProps;
                                            j = void 0 !== U.fallback && (!0 !== U.unstable_avoidThisFallback || !R);
                                        }
                                    }
                                    if (j) {
                                        var V = M.updateQueue;
                                        if (null === V) {
                                            var W = new Set();
                                            W.add(T), (M.updateQueue = W);
                                        } else V.add(T);
                                        if (0 == (2 & M.mode)) {
                                            if (((M.flags |= 64), (m.flags |= 16384), (m.flags &= -2981), 1 === m.tag))
                                                if (null === m.alternate) m.tag = 17;
                                                else {
                                                    var $ = zg(-1, 1);
                                                    ($.tag = 2), Ag(m, $);
                                                }
                                            m.lanes |= 1;
                                            break e;
                                        }
                                        (v = void 0), (m = i);
                                        var Y = s.pingCache;
                                        if ((null === Y ? ((Y = s.pingCache = new Qr()), (v = new Set()), Y.set(T, v)) : void 0 === (v = Y.get(T)) && ((v = new Set()), Y.set(T, v)), !v.has(m))) {
                                            v.add(m);
                                            var X = Yj.bind(null, s, T, m);
                                            T.then(X, X);
                                        }
                                        (M.flags |= 4096), (M.lanes = i);
                                        break e;
                                    }
                                    M = M.return;
                                } while (null !== M);
                                v = Error(
                                    (Ra(m.type) || "A React component") +
                                        " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                                );
                            }
                            5 !== ra && (ra = 2), (v = Mi(v, m)), (M = u);
                            do {
                                switch (M.tag) {
                                    case 3:
                                        (s = v), (M.flags |= 4096), (i &= -i), (M.lanes |= i), Bg(M, Pi(0, s, i));
                                        break e;
                                    case 1:
                                        s = v;
                                        var Z = M.type,
                                            ee = M.stateNode;
                                        if (0 == (64 & M.flags) && ("function" == typeof Z.getDerivedStateFromError || (null !== ee && "function" == typeof ee.componentDidCatch && (null === wa || !wa.has(ee))))) {
                                            (M.flags |= 4096), (i &= -i), (M.lanes |= i), Bg(M, Si(M, s, i));
                                            break e;
                                        }
                                }
                                M = M.return;
                            } while (null !== M);
                        }
                        Zj(r);
                    } catch (t) {
                        (i = t), Zr === r && null !== r && (Zr = r = r.return);
                        continue;
                    }
                    break;
                }
            }
            function Pj() {
                var t = $r.current;
                return ($r.current = Nr), null === t ? Nr : t;
            }
            function Tj(t, i) {
                var r = Yr;
                Yr |= 16;
                var a = Pj();
                for ((Xr === t && Jr === i) || Qj(t, i); ; )
                    try {
                        ak();
                        break;
                    } catch (i) {
                        Sj(t, i);
                    }
                if ((qg(), (Yr = r), ($r.current = a), null !== Zr)) throw Error(y(261));
                return (Xr = null), (Jr = 0), ra;
            }
            function ak() {
                for (; null !== Zr; ) bk(Zr);
            }
            function Rj() {
                for (; null !== Zr && !Ci(); ) bk(Zr);
            }
            function bk(t) {
                var i = ba(t.alternate, t, ta);
                (t.memoizedProps = t.pendingProps), null === i ? Zj(t) : (Zr = i), (Gr.current = null);
            }
            function Zj(t) {
                var i = t;
                do {
                    var r = i.alternate;
                    if (((t = i.return), 0 == (2048 & i.flags))) {
                        if (null !== (r = Gi(r, i, ta))) return void (Zr = r);
                        if ((24 !== (r = i).tag && 23 !== r.tag) || null === r.memoizedState || 0 != (1073741824 & ta) || 0 == (4 & r.mode)) {
                            for (var a = 0, o = r.child; null !== o; ) (a |= o.lanes | o.childLanes), (o = o.sibling);
                            r.childLanes = a;
                        }
                        null !== t &&
                            0 == (2048 & t.flags) &&
                            (null === t.firstEffect && (t.firstEffect = i.firstEffect),
                            null !== i.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = i.firstEffect), (t.lastEffect = i.lastEffect)),
                            1 < i.flags && (null !== t.lastEffect ? (t.lastEffect.nextEffect = i) : (t.firstEffect = i), (t.lastEffect = i)));
                    } else {
                        if (null !== (r = Li(i))) return (r.flags &= 2047), void (Zr = r);
                        null !== t && ((t.firstEffect = t.lastEffect = null), (t.flags |= 2048));
                    }
                    if (null !== (i = i.sibling)) return void (Zr = i);
                    Zr = i = t;
                } while (null !== i);
                0 === ra && (ra = 5);
            }
            function Uj(t) {
                var i = eg();
                return gg(99, dk.bind(null, t, i)), null;
            }
            function dk(t, i) {
                do {
                    Oj();
                } while (null !== Ea);
                if (0 != (48 & Yr)) throw Error(y(327));
                var r = t.finishedWork;
                if (null === r) return null;
                if (((t.finishedWork = null), (t.finishedLanes = 0), r === t.current)) throw Error(y(177));
                t.callbackNode = null;
                var a = r.lanes | r.childLanes,
                    o = a,
                    s = t.pendingLanes & ~o;
                (t.pendingLanes = o), (t.suspendedLanes = 0), (t.pingedLanes = 0), (t.expiredLanes &= o), (t.mutableReadLanes &= o), (t.entangledLanes &= o), (o = t.entanglements);
                for (var u = t.eventTimes, m = t.expirationTimes; 0 < s; ) {
                    var v = 31 - Rt(s),
                        T = 1 << v;
                    (o[v] = 0), (u[v] = -1), (m[v] = -1), (s &= ~T);
                }
                if (
                    (null !== Aa && 0 == (24 & a) && Aa.has(t) && Aa.delete(t),
                    t === Xr && ((Zr = Xr = null), (Jr = 0)),
                    1 < r.flags ? (null !== r.lastEffect ? ((r.lastEffect.nextEffect = r), (a = r.firstEffect)) : (a = r)) : (a = r.firstEffect),
                    null !== a)
                ) {
                    if (((o = Yr), (Yr |= 32), (Gr.current = null), (jn = jt), Oe((u = Ne())))) {
                        if ("selectionStart" in u) m = { start: u.selectionStart, end: u.selectionEnd };
                        else
                            e: if (((m = ((m = u.ownerDocument) && m.defaultView) || window), (T = m.getSelection && m.getSelection()) && 0 !== T.rangeCount)) {
                                (m = T.anchorNode), (s = T.anchorOffset), (v = T.focusNode), (T = T.focusOffset);
                                try {
                                    m.nodeType, v.nodeType;
                                } catch (t) {
                                    m = null;
                                    break e;
                                }
                                var q = 0,
                                    R = -1,
                                    M = -1,
                                    j = 0,
                                    F = 0,
                                    U = u,
                                    V = null;
                                t: for (;;) {
                                    for (var W; U !== m || (0 !== s && 3 !== U.nodeType) || (R = q + s), U !== v || (0 !== T && 3 !== U.nodeType) || (M = q + T), 3 === U.nodeType && (q += U.nodeValue.length), null !== (W = U.firstChild); )
                                        (V = U), (U = W);
                                    for (;;) {
                                        if (U === u) break t;
                                        if ((V === m && ++j === s && (R = q), V === v && ++F === T && (M = q), null !== (W = U.nextSibling))) break;
                                        V = (U = V).parentNode;
                                    }
                                    U = W;
                                }
                                m = -1 === R || -1 === M ? null : { start: R, end: M };
                            } else m = null;
                        m = m || { start: 0, end: 0 };
                    } else m = null;
                    (Bn = { focusedElem: u, selectionRange: m }), (jt = !1), (Fa = null), (za = !1), (ya = a);
                    do {
                        try {
                            ek();
                        } catch (t) {
                            if (null === ya) throw Error(y(330));
                            Wi(ya, t), (ya = ya.nextEffect);
                        }
                    } while (null !== ya);
                    (Fa = null), (ya = a);
                    do {
                        try {
                            for (u = t; null !== ya; ) {
                                var $ = ya.flags;
                                if ((16 & $ && pb(ya.stateNode, ""), 128 & $)) {
                                    var Y = ya.alternate;
                                    if (null !== Y) {
                                        var X = Y.ref;
                                        null !== X && ("function" == typeof X ? X(null) : (X.current = null));
                                    }
                                }
                                switch (1038 & $) {
                                    case 2:
                                        fj(ya), (ya.flags &= -3);
                                        break;
                                    case 6:
                                        fj(ya), (ya.flags &= -3), ij(ya.alternate, ya);
                                        break;
                                    case 1024:
                                        ya.flags &= -1025;
                                        break;
                                    case 1028:
                                        (ya.flags &= -1025), ij(ya.alternate, ya);
                                        break;
                                    case 4:
                                        ij(ya.alternate, ya);
                                        break;
                                    case 8:
                                        cj(u, (m = ya));
                                        var Z = m.alternate;
                                        dj(m), null !== Z && dj(Z);
                                }
                                ya = ya.nextEffect;
                            }
                        } catch (t) {
                            if (null === ya) throw Error(y(330));
                            Wi(ya, t), (ya = ya.nextEffect);
                        }
                    } while (null !== ya);
                    if (
                        ((X = Bn),
                        (Y = Ne()),
                        ($ = X.focusedElem),
                        (u = X.selectionRange),
                        Y !== $ &&
                            $ &&
                            $.ownerDocument &&
                            (function Me(t, i) {
                                return (
                                    !(!t || !i) &&
                                    (t === i || ((!t || 3 !== t.nodeType) && (i && 3 === i.nodeType ? Me(t, i.parentNode) : "contains" in t ? t.contains(i) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(i)))))
                                );
                            })($.ownerDocument.documentElement, $))
                    ) {
                        null !== u &&
                            Oe($) &&
                            ((Y = u.start),
                            void 0 === (X = u.end) && (X = Y),
                            "selectionStart" in $
                                ? (($.selectionStart = Y), ($.selectionEnd = Math.min(X, $.value.length)))
                                : (X = ((Y = $.ownerDocument || document) && Y.defaultView) || window).getSelection &&
                                  ((X = X.getSelection()),
                                  (m = $.textContent.length),
                                  (Z = Math.min(u.start, m)),
                                  (u = void 0 === u.end ? Z : Math.min(u.end, m)),
                                  !X.extend && Z > u && ((m = u), (u = Z), (Z = m)),
                                  (m = Le($, Z)),
                                  (s = Le($, u)),
                                  m &&
                                      s &&
                                      (1 !== X.rangeCount || X.anchorNode !== m.node || X.anchorOffset !== m.offset || X.focusNode !== s.node || X.focusOffset !== s.offset) &&
                                      ((Y = Y.createRange()).setStart(m.node, m.offset), X.removeAllRanges(), Z > u ? (X.addRange(Y), X.extend(s.node, s.offset)) : (Y.setEnd(s.node, s.offset), X.addRange(Y))))),
                            (Y = []);
                        for (X = $; (X = X.parentNode); ) 1 === X.nodeType && Y.push({ element: X, left: X.scrollLeft, top: X.scrollTop });
                        for ("function" == typeof $.focus && $.focus(), $ = 0; $ < Y.length; $++) ((X = Y[$]).element.scrollLeft = X.left), (X.element.scrollTop = X.top);
                    }
                    (jt = !!jn), (Bn = jn = null), (t.current = r), (ya = a);
                    do {
                        try {
                            for ($ = t; null !== ya; ) {
                                var ee = ya.flags;
                                if ((36 & ee && Yi($, ya.alternate, ya), 128 & ee)) {
                                    Y = void 0;
                                    var ie = ya.ref;
                                    if (null !== ie) {
                                        var ae = ya.stateNode;
                                        switch (ya.tag) {
                                            case 5:
                                                Y = ae;
                                                break;
                                            default:
                                                Y = ae;
                                        }
                                        "function" == typeof ie ? ie(Y) : (ie.current = Y);
                                    }
                                }
                                ya = ya.nextEffect;
                            }
                        } catch (t) {
                            if (null === ya) throw Error(y(330));
                            Wi(ya, t), (ya = ya.nextEffect);
                        }
                    } while (null !== ya);
                    (ya = null), tr(), (Yr = o);
                } else t.current = r;
                if (xa) (xa = !1), (Ea = t), (ka = i);
                else for (ya = a; null !== ya; ) (i = ya.nextEffect), (ya.nextEffect = null), 8 & ya.flags && (((ee = ya).sibling = null), (ee.stateNode = null)), (ya = i);
                if ((0 === (a = t.pendingLanes) && (wa = null), 1 === a ? (t === Ia ? Da++ : ((Da = 0), (Ia = t))) : (Da = 0), (r = r.stateNode), si && "function" == typeof si.onCommitFiberRoot))
                    try {
                        si.onCommitFiberRoot(ei, r, void 0, 64 == (64 & r.current.flags));
                    } catch (t) {}
                if ((Mj(t, or()), va)) throw ((va = !1), (t = _a), (_a = null), t);
                return 0 != (8 & Yr) || ig(), null;
            }
            function ek() {
                for (; null !== ya; ) {
                    var t = ya.alternate;
                    za || null === Fa || (0 != (8 & ya.flags) ? dc(ya, Fa) && (za = !0) : 13 === ya.tag && mj(t, ya) && dc(ya, Fa) && (za = !0));
                    var i = ya.flags;
                    0 != (256 & i) && Xi(t, ya),
                        0 == (512 & i) ||
                            xa ||
                            ((xa = !0),
                            hg(97, function () {
                                return Oj(), null;
                            })),
                        (ya = ya.nextEffect);
                }
            }
            function Oj() {
                if (90 !== ka) {
                    var t = 97 < ka ? 97 : ka;
                    return (ka = 90), gg(t, fk);
                }
                return !1;
            }
            function $i(t, i) {
                Ca.push(i, t),
                    xa ||
                        ((xa = !0),
                        hg(97, function () {
                            return Oj(), null;
                        }));
            }
            function Zi(t, i) {
                Oa.push(i, t),
                    xa ||
                        ((xa = !0),
                        hg(97, function () {
                            return Oj(), null;
                        }));
            }
            function fk() {
                if (null === Ea) return !1;
                var t = Ea;
                if (((Ea = null), 0 != (48 & Yr))) throw Error(y(331));
                var i = Yr;
                Yr |= 32;
                var r = Oa;
                Oa = [];
                for (var a = 0; a < r.length; a += 2) {
                    var o = r[a],
                        s = r[a + 1],
                        u = o.destroy;
                    if (((o.destroy = void 0), "function" == typeof u))
                        try {
                            u();
                        } catch (t) {
                            if (null === s) throw Error(y(330));
                            Wi(s, t);
                        }
                }
                for (r = Ca, Ca = [], a = 0; a < r.length; a += 2) {
                    (o = r[a]), (s = r[a + 1]);
                    try {
                        var m = o.create;
                        o.destroy = m();
                    } catch (t) {
                        if (null === s) throw Error(y(330));
                        Wi(s, t);
                    }
                }
                for (m = t.current.firstEffect; null !== m; ) (t = m.nextEffect), (m.nextEffect = null), 8 & m.flags && ((m.sibling = null), (m.stateNode = null)), (m = t);
                return (Yr = i), ig(), !0;
            }
            function gk(t, i, r) {
                Ag(t, (i = Pi(0, (i = Mi(r, i)), 1))), (i = Hg()), null !== (t = Kj(t, 1)) && ($c(t, 1, i), Mj(t, i));
            }
            function Wi(t, i) {
                if (3 === t.tag) gk(t, t, i);
                else
                    for (var r = t.return; null !== r; ) {
                        if (3 === r.tag) {
                            gk(r, t, i);
                            break;
                        }
                        if (1 === r.tag) {
                            var a = r.stateNode;
                            if ("function" == typeof r.type.getDerivedStateFromError || ("function" == typeof a.componentDidCatch && (null === wa || !wa.has(a)))) {
                                var o = Si(r, (t = Mi(i, t)), 1);
                                if ((Ag(r, o), (o = Hg()), null !== (r = Kj(r, 1)))) $c(r, 1, o), Mj(r, o);
                                else if ("function" == typeof a.componentDidCatch && (null === wa || !wa.has(a)))
                                    try {
                                        a.componentDidCatch(i, t);
                                    } catch (t) {}
                                break;
                            }
                        }
                        r = r.return;
                    }
            }
            function Yj(t, i, r) {
                var a = t.pingCache;
                null !== a && a.delete(i), (i = Hg()), (t.pingedLanes |= t.suspendedLanes & r), Xr === t && (Jr & r) === r && (4 === ra || (3 === ra && (62914560 & Jr) === Jr && 500 > or() - fa) ? Qj(t, 0) : (ca |= r)), Mj(t, i);
            }
            function lj(t, i) {
                var r = t.stateNode;
                null !== r && r.delete(i),
                    0 === (i = 0) && (0 == (2 & (i = t.mode)) ? (i = 1) : 0 == (4 & i) ? (i = 99 === eg() ? 1 : 2) : (0 === ja && (ja = oa), 0 === (i = Yc(62914560 & ~ja)) && (i = 4194304))),
                    (r = Hg()),
                    null !== (t = Kj(t, i)) && ($c(t, i, r), Mj(t, r));
            }
            function ik(t, i, r, a) {
                (this.tag = t),
                    (this.key = r),
                    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
                    (this.index = 0),
                    (this.ref = null),
                    (this.pendingProps = i),
                    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
                    (this.mode = a),
                    (this.flags = 0),
                    (this.lastEffect = this.firstEffect = this.nextEffect = null),
                    (this.childLanes = this.lanes = 0),
                    (this.alternate = null);
            }
            function nh(t, i, r, a) {
                return new ik(t, i, r, a);
            }
            function ji(t) {
                return !(!(t = t.prototype) || !t.isReactComponent);
            }
            function Tg(t, i) {
                var r = t.alternate;
                return (
                    null === r
                        ? (((r = nh(t.tag, i, t.key, t.mode)).elementType = t.elementType), (r.type = t.type), (r.stateNode = t.stateNode), (r.alternate = t), (t.alternate = r))
                        : ((r.pendingProps = i), (r.type = t.type), (r.flags = 0), (r.nextEffect = null), (r.firstEffect = null), (r.lastEffect = null)),
                    (r.childLanes = t.childLanes),
                    (r.lanes = t.lanes),
                    (r.child = t.child),
                    (r.memoizedProps = t.memoizedProps),
                    (r.memoizedState = t.memoizedState),
                    (r.updateQueue = t.updateQueue),
                    (i = t.dependencies),
                    (r.dependencies = null === i ? null : { lanes: i.lanes, firstContext: i.firstContext }),
                    (r.sibling = t.sibling),
                    (r.index = t.index),
                    (r.ref = t.ref),
                    r
                );
            }
            function Vg(t, i, r, a, o, s) {
                var u = 2;
                if (((a = t), "function" == typeof t)) ji(t) && (u = 1);
                else if ("string" == typeof t) u = 5;
                else
                    e: switch (t) {
                        case $:
                            return Xg(r.children, o, s, i);
                        case be:
                            (u = 8), (o |= 16);
                            break;
                        case Y:
                            (u = 8), (o |= 1);
                            break;
                        case X:
                            return ((t = nh(12, r, i, 8 | o)).elementType = X), (t.type = X), (t.lanes = s), t;
                        case ae:
                            return ((t = nh(13, r, i, o)).type = ae), (t.elementType = ae), (t.lanes = s), t;
                        case le:
                            return ((t = nh(19, r, i, o)).elementType = le), (t.lanes = s), t;
                        case ye:
                            return vi(r, o, s, i);
                        case _e:
                            return ((t = nh(24, r, i, o)).elementType = _e), (t.lanes = s), t;
                        default:
                            if ("object" == typeof t && null !== t)
                                switch (t.$$typeof) {
                                    case Z:
                                        u = 10;
                                        break e;
                                    case ee:
                                        u = 9;
                                        break e;
                                    case ie:
                                        u = 11;
                                        break e;
                                    case ce:
                                        u = 14;
                                        break e;
                                    case de:
                                        (u = 16), (a = null);
                                        break e;
                                    case pe:
                                        u = 22;
                                        break e;
                                }
                            throw Error(y(130, null == t ? t : typeof t, ""));
                    }
                return ((i = nh(u, r, i, o)).elementType = t), (i.type = a), (i.lanes = s), i;
            }
            function Xg(t, i, r, a) {
                return ((t = nh(7, t, a, i)).lanes = r), t;
            }
            function vi(t, i, r, a) {
                return ((t = nh(23, t, a, i)).elementType = ye), (t.lanes = r), t;
            }
            function Ug(t, i, r) {
                return ((t = nh(6, t, null, i)).lanes = r), t;
            }
            function Wg(t, i, r) {
                return ((i = nh(4, null !== t.children ? t.children : [], t.key, i)).lanes = r), (i.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }), i;
            }
            function jk(t, i, r) {
                (this.tag = i),
                    (this.containerInfo = t),
                    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
                    (this.timeoutHandle = -1),
                    (this.pendingContext = this.context = null),
                    (this.hydrate = r),
                    (this.callbackNode = null),
                    (this.callbackPriority = 0),
                    (this.eventTimes = Zc(0)),
                    (this.expirationTimes = Zc(-1)),
                    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
                    (this.entanglements = Zc(0)),
                    (this.mutableSourceEagerHydrationData = null);
            }
            function kk(t, i, r) {
                var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return { $$typeof: W, key: null == a ? null : "" + a, children: t, containerInfo: i, implementation: r };
            }
            function lk(t, i, r, a) {
                var o = i.current,
                    s = Hg(),
                    u = Ig(o);
                e: if (r) {
                    t: {
                        if (Zb((r = r._reactInternals)) !== r || 1 !== r.tag) throw Error(y(170));
                        var m = r;
                        do {
                            switch (m.tag) {
                                case 3:
                                    m = m.stateNode.context;
                                    break t;
                                case 1:
                                    if (Ff(m.type)) {
                                        m = m.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break t;
                                    }
                            }
                            m = m.return;
                        } while (null !== m);
                        throw Error(y(171));
                    }
                    if (1 === r.tag) {
                        var v = r.type;
                        if (Ff(v)) {
                            r = If(r, v, m);
                            break e;
                        }
                    }
                    r = m;
                } else r = Yn;
                return null === i.context ? (i.context = r) : (i.pendingContext = r), ((i = zg(s, u)).payload = { element: t }), null !== (a = void 0 === a ? null : a) && (i.callback = a), Ag(o, i), Jg(o, u, s), u;
            }
            function mk(t) {
                if (!(t = t.current).child) return null;
                switch (t.child.tag) {
                    case 5:
                    default:
                        return t.child.stateNode;
                }
            }
            function nk(t, i) {
                if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
                    var r = t.retryLane;
                    t.retryLane = 0 !== r && r < i ? r : i;
                }
            }
            function ok(t, i) {
                nk(t, i), (t = t.alternate) && nk(t, i);
            }
            function qk(t, i, r) {
                var a = (null != r && null != r.hydrationOptions && r.hydrationOptions.mutableSources) || null;
                if (((r = new jk(t, i, null != r && !0 === r.hydrate)), (i = nh(3, null, null, 2 === i ? 7 : 1 === i ? 3 : 0)), (r.current = i), (i.stateNode = r), xg(i), (t[Wn] = r.current), cf(8 === t.nodeType ? t.parentNode : t), a))
                    for (t = 0; t < a.length; t++) {
                        var o = (i = a[t])._getVersion;
                        (o = o(i._source)), null == r.mutableSourceEagerHydrationData ? (r.mutableSourceEagerHydrationData = [i, o]) : r.mutableSourceEagerHydrationData.push(i, o);
                    }
                this._internalRoot = r;
            }
            function rk(t) {
                return !(!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue)));
            }
            function tk(t, i, r, a, o) {
                var s = r._reactRootContainer;
                if (s) {
                    var u = s._internalRoot;
                    if ("function" == typeof o) {
                        var m = o;
                        o = function () {
                            var t = mk(u);
                            m.call(t);
                        };
                    }
                    lk(i, u, t, o);
                } else {
                    if (
                        ((s = r._reactRootContainer = (function sk(t, i) {
                            if ((i || (i = !(!(i = t ? (9 === t.nodeType ? t.documentElement : t.firstChild) : null) || 1 !== i.nodeType || !i.hasAttribute("data-reactroot"))), !i)) for (var r; (r = t.lastChild); ) t.removeChild(r);
                            return new qk(t, 0, i ? { hydrate: !0 } : void 0);
                        })(r, a)),
                        (u = s._internalRoot),
                        "function" == typeof o)
                    ) {
                        var v = o;
                        o = function () {
                            var t = mk(u);
                            v.call(t);
                        };
                    }
                    Xj(function () {
                        lk(i, u, t, o);
                    });
                }
                return mk(u);
            }
            function uk(t, i) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!rk(i)) throw Error(y(200));
                return kk(t, i, null, r);
            }
            (ba = function (t, i, r) {
                var a = i.lanes;
                if (null !== t)
                    if (t.memoizedProps !== i.pendingProps || Zn.current) Fr = !0;
                    else {
                        if (0 == (r & a)) {
                            switch (((Fr = !1), i.tag)) {
                                case 3:
                                    ri(i), sh();
                                    break;
                                case 5:
                                    gh(i);
                                    break;
                                case 1:
                                    Ff(i.type) && Jf(i);
                                    break;
                                case 4:
                                    eh(i, i.stateNode.containerInfo);
                                    break;
                                case 10:
                                    a = i.memoizedProps.value;
                                    var o = i.type._context;
                                    I(lr, o._currentValue), (o._currentValue = a);
                                    break;
                                case 13:
                                    if (null !== i.memoizedState) return 0 != (r & i.child.childLanes) ? ti(t, i, r) : (I(xr, 1 & xr.current), null !== (i = hi(t, i, r)) ? i.sibling : null);
                                    I(xr, 1 & xr.current);
                                    break;
                                case 19:
                                    if (((a = 0 != (r & i.childLanes)), 0 != (64 & t.flags))) {
                                        if (a) return Ai(t, i, r);
                                        i.flags |= 64;
                                    }
                                    if ((null !== (o = i.memoizedState) && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), I(xr, xr.current), a)) break;
                                    return null;
                                case 23:
                                case 24:
                                    return (i.lanes = 0), mi(t, i, r);
                            }
                            return hi(t, i, r);
                        }
                        Fr = 0 != (16384 & t.flags);
                    }
                else Fr = !1;
                switch (((i.lanes = 0), i.tag)) {
                    case 2:
                        if (
                            ((a = i.type),
                            null !== t && ((t.alternate = null), (i.alternate = null), (i.flags |= 2)),
                            (t = i.pendingProps),
                            (o = Ef(i, Xn.current)),
                            tg(i, r),
                            (o = Ch(null, i, a, t, o, r)),
                            (i.flags |= 1),
                            "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof)
                        ) {
                            if (((i.tag = 1), (i.memoizedState = null), (i.updateQueue = null), Ff(a))) {
                                var s = !0;
                                Jf(i);
                            } else s = !1;
                            (i.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null), xg(i);
                            var u = a.getDerivedStateFromProps;
                            "function" == typeof u && Gg(i, a, u, t), (o.updater = fr), (i.stateNode = o), (o._reactInternals = i), Og(i, a, t, r), (i = qi(null, i, a, !0, s, r));
                        } else (i.tag = 0), fi(null, i, o, r), (i = i.child);
                        return i;
                    case 16:
                        o = i.elementType;
                        e: {
                            switch (
                                (null !== t && ((t.alternate = null), (i.alternate = null), (i.flags |= 2)),
                                (t = i.pendingProps),
                                (o = (s = o._init)(o._payload)),
                                (i.type = o),
                                (s = i.tag = (function hk(t) {
                                    if ("function" == typeof t) return ji(t) ? 1 : 0;
                                    if (null != t) {
                                        if ((t = t.$$typeof) === ie) return 11;
                                        if (t === ce) return 14;
                                    }
                                    return 2;
                                })(o)),
                                (t = lg(o, t)),
                                s)
                            ) {
                                case 0:
                                    i = li(null, i, o, t, r);
                                    break e;
                                case 1:
                                    i = pi(null, i, o, t, r);
                                    break e;
                                case 11:
                                    i = gi(null, i, o, t, r);
                                    break e;
                                case 14:
                                    i = ii(null, i, o, lg(o.type, t), a, r);
                                    break e;
                            }
                            throw Error(y(306, o, ""));
                        }
                        return i;
                    case 0:
                        return (a = i.type), (o = i.pendingProps), li(t, i, a, (o = i.elementType === a ? o : lg(a, o)), r);
                    case 1:
                        return (a = i.type), (o = i.pendingProps), pi(t, i, a, (o = i.elementType === a ? o : lg(a, o)), r);
                    case 3:
                        if ((ri(i), (a = i.updateQueue), null === t || null === a)) throw Error(y(282));
                        if (((a = i.pendingProps), (o = null !== (o = i.memoizedState) ? o.element : null), yg(t, i), Cg(i, a, null, r), (a = i.memoizedState.element) === o)) sh(), (i = hi(t, i, r));
                        else {
                            if (((s = (o = i.stateNode).hydrate) && ((kr = rf(i.stateNode.containerInfo.firstChild)), (Er = i), (s = Tr = !0)), s)) {
                                if (null != (t = o.mutableSourceEagerHydrationData)) for (o = 0; o < t.length; o += 2) ((s = t[o])._workInProgressVersionPrimary = t[o + 1]), Cr.push(s);
                                for (r = br(i, null, a, r), i.child = r; r; ) (r.flags = (-3 & r.flags) | 1024), (r = r.sibling);
                            } else fi(t, i, a, r), sh();
                            i = i.child;
                        }
                        return i;
                    case 5:
                        return (
                            gh(i),
                            null === t && ph(i),
                            (a = i.type),
                            (o = i.pendingProps),
                            (s = null !== t ? t.memoizedProps : null),
                            (u = o.children),
                            nf(a, o) ? (u = null) : null !== s && nf(a, s) && (i.flags |= 16),
                            oi(t, i),
                            fi(t, i, u, r),
                            i.child
                        );
                    case 6:
                        return null === t && ph(i), null;
                    case 13:
                        return ti(t, i, r);
                    case 4:
                        return eh(i, i.stateNode.containerInfo), (a = i.pendingProps), null === t ? (i.child = gr(i, null, a, r)) : fi(t, i, a, r), i.child;
                    case 11:
                        return (a = i.type), (o = i.pendingProps), gi(t, i, a, (o = i.elementType === a ? o : lg(a, o)), r);
                    case 7:
                        return fi(t, i, i.pendingProps, r), i.child;
                    case 8:
                    case 12:
                        return fi(t, i, i.pendingProps.children, r), i.child;
                    case 10:
                        e: {
                            (a = i.type._context), (o = i.pendingProps), (u = i.memoizedProps), (s = o.value);
                            var m = i.type._context;
                            if ((I(lr, m._currentValue), (m._currentValue = s), null !== u))
                                if (((m = u.value), 0 === (s = Cn(m, s) ? 0 : 0 | ("function" == typeof a._calculateChangedBits ? a._calculateChangedBits(m, s) : 1073741823)))) {
                                    if (u.children === o.children && !Zn.current) {
                                        i = hi(t, i, r);
                                        break e;
                                    }
                                } else
                                    for (null !== (m = i.child) && (m.return = i); null !== m; ) {
                                        var v = m.dependencies;
                                        if (null !== v) {
                                            u = m.child;
                                            for (var T = v.firstContext; null !== T; ) {
                                                if (T.context === a && 0 != (T.observedBits & s)) {
                                                    1 === m.tag && (((T = zg(-1, r & -r)).tag = 2), Ag(m, T)), (m.lanes |= r), null !== (T = m.alternate) && (T.lanes |= r), sg(m.return, r), (v.lanes |= r);
                                                    break;
                                                }
                                                T = T.next;
                                            }
                                        } else u = 10 === m.tag && m.type === i.type ? null : m.child;
                                        if (null !== u) u.return = m;
                                        else
                                            for (u = m; null !== u; ) {
                                                if (u === i) {
                                                    u = null;
                                                    break;
                                                }
                                                if (null !== (m = u.sibling)) {
                                                    (m.return = u.return), (u = m);
                                                    break;
                                                }
                                                u = u.return;
                                            }
                                        m = u;
                                    }
                            fi(t, i, o.children, r), (i = i.child);
                        }
                        return i;
                    case 9:
                        return (o = i.type), (a = (s = i.pendingProps).children), tg(i, r), (a = a((o = vg(o, s.unstable_observedBits)))), (i.flags |= 1), fi(t, i, a, r), i.child;
                    case 14:
                        return (s = lg((o = i.type), i.pendingProps)), ii(t, i, o, (s = lg(o.type, s)), a, r);
                    case 15:
                        return ki(t, i, i.type, i.pendingProps, a, r);
                    case 17:
                        return (
                            (a = i.type),
                            (o = i.pendingProps),
                            (o = i.elementType === a ? o : lg(a, o)),
                            null !== t && ((t.alternate = null), (i.alternate = null), (i.flags |= 2)),
                            (i.tag = 1),
                            Ff(a) ? ((t = !0), Jf(i)) : (t = !1),
                            tg(i, r),
                            Mg(i, a, o),
                            Og(i, a, o, r),
                            qi(null, i, a, !0, t, r)
                        );
                    case 19:
                        return Ai(t, i, r);
                    case 23:
                    case 24:
                        return mi(t, i, r);
                }
                throw Error(y(156, i.tag));
            }),
                (qk.prototype.render = function (t) {
                    lk(t, this._internalRoot, null, null);
                }),
                (qk.prototype.unmount = function () {
                    var t = this._internalRoot,
                        i = t.containerInfo;
                    lk(null, t, null, function () {
                        i[Wn] = null;
                    });
                }),
                (ut = function (t) {
                    13 === t.tag && (Jg(t, 4, Hg()), ok(t, 4));
                }),
                (ct = function (t) {
                    13 === t.tag && (Jg(t, 67108864, Hg()), ok(t, 67108864));
                }),
                (dt = function (t) {
                    if (13 === t.tag) {
                        var i = Hg(),
                            r = Ig(t);
                        Jg(t, r, i), ok(t, r);
                    }
                }),
                (ht = function (t, i) {
                    return i();
                }),
                (Qe = function (t, i, r) {
                    switch (i) {
                        case "input":
                            if ((ab(t, r), (i = r.name), "radio" === r.type && null != i)) {
                                for (r = t; r.parentNode; ) r = r.parentNode;
                                for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), i = 0; i < r.length; i++) {
                                    var a = r[i];
                                    if (a !== t && a.form === t.form) {
                                        var o = Db(a);
                                        if (!o) throw Error(y(90));
                                        Wa(a), ab(a, o);
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ib(t, r);
                            break;
                        case "select":
                            null != (i = r.value) && fb(t, !!r.multiple, i, !1);
                    }
                }),
                (Gb = Wj),
                (Hb = function (t, i, r, a, o) {
                    var s = Yr;
                    Yr |= 4;
                    try {
                        return gg(98, t.bind(null, i, r, a, o));
                    } finally {
                        0 === (Yr = s) && (wj(), ig());
                    }
                }),
                (Ib = function () {
                    0 == (49 & Yr) &&
                        ((function Vj() {
                            if (null !== Aa) {
                                var t = Aa;
                                (Aa = null),
                                    t.forEach(function (t) {
                                        (t.expiredLanes |= 24 & t.pendingLanes), Mj(t, or());
                                    });
                            }
                            ig();
                        })(),
                        Oj());
                }),
                (Xe = function (t, i) {
                    var r = Yr;
                    Yr |= 2;
                    try {
                        return t(i);
                    } finally {
                        0 === (Yr = r) && (wj(), ig());
                    }
                });
            var Ha = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: !1 }] },
                Ka = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.1", rendererPackageName: "react-dom" },
                Ga = {
                    bundleType: Ka.bundleType,
                    version: Ka.version,
                    rendererPackageName: Ka.rendererPackageName,
                    rendererConfig: Ka.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: U.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function (t) {
                        return null === (t = cc(t)) ? null : t.stateNode;
                    },
                    findFiberByHostInstance:
                        Ka.findFiberByHostInstance ||
                        function pk() {
                            return null;
                        },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var Ja = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!Ja.isDisabled && Ja.supportsFiber)
                    try {
                        (ei = Ja.inject(Ga)), (si = Ja);
                    } catch (t) {}
            }
            (i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ha),
                (i.createPortal = uk),
                (i.findDOMNode = function (t) {
                    if (null == t) return null;
                    if (1 === t.nodeType) return t;
                    var i = t._reactInternals;
                    if (void 0 === i) {
                        if ("function" == typeof t.render) throw Error(y(188));
                        throw Error(y(268, Object.keys(t)));
                    }
                    return (t = null === (t = cc(i)) ? null : t.stateNode);
                }),
                (i.flushSync = function (t, i) {
                    var r = Yr;
                    if (0 != (48 & r)) return t(i);
                    Yr |= 1;
                    try {
                        if (t) return gg(99, t.bind(null, i));
                    } finally {
                        (Yr = r), ig();
                    }
                }),
                (i.hydrate = function (t, i, r) {
                    if (!rk(i)) throw Error(y(200));
                    return tk(null, t, i, !0, r);
                }),
                (i.render = function (t, i, r) {
                    if (!rk(i)) throw Error(y(200));
                    return tk(null, t, i, !1, r);
                }),
                (i.unmountComponentAtNode = function (t) {
                    if (!rk(t)) throw Error(y(40));
                    return (
                        !!t._reactRootContainer &&
                        (Xj(function () {
                            tk(null, null, t, !1, function () {
                                (t._reactRootContainer = null), (t[Wn] = null);
                            });
                        }),
                        !0)
                    );
                }),
                (i.unstable_batchedUpdates = Wj),
                (i.unstable_createPortal = function (t, i) {
                    return uk(t, i, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
                }),
                (i.unstable_renderSubtreeIntoContainer = function (t, i, r, a) {
                    if (!rk(r)) throw Error(y(200));
                    if (null == t || void 0 === t._reactInternals) throw Error(y(38));
                    return tk(t, i, r, !1, a);
                }),
                (i.version = "17.0.1");
        },
        277: function (t, i, r) {
            "use strict";
            var a = r(0),
                o = r.n(a),
                s = r(35),
                u = r(10);
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
            function _classCallCheck(t, i) {
                if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(t, i) {
                for (var r = 0; r < i.length; r++) {
                    var a = i[r];
                    (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
                }
            }
            function _setPrototypeOf(t, i) {
                return (_setPrototypeOf =
                    Object.setPrototypeOf ||
                    function _setPrototypeOf(t, i) {
                        return (t.__proto__ = i), t;
                    })(t, i);
            }
            function _createSuper(t) {
                var i = (function _isNativeReflectConstruct() {
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
                    var r,
                        a = _getPrototypeOf(t);
                    if (i) {
                        var o = _getPrototypeOf(this).constructor;
                        r = Reflect.construct(a, arguments, o);
                    } else r = a.apply(this, arguments);
                    return _possibleConstructorReturn(this, r);
                };
            }
            function _possibleConstructorReturn(t, i) {
                return !i || ("object" !== _typeof(i) && "function" != typeof i)
                    ? (function _assertThisInitialized(t) {
                          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                          return t;
                      })(t)
                    : i;
            }
            function _getPrototypeOf(t) {
                return (_getPrototypeOf = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function _getPrototypeOf(t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            var m = ["exactMatch"],
                v = function isDefaultValidResponseValue(t) {
                    return (
                        0 ===
                        o.a.filter(t, function (t) {
                            return t && (t.value || t.method || 0 === t.value);
                        }).length
                    );
                },
                T = (function (t) {
                    !(function _inherits(t, i) {
                        if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(i && i.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), i && _setPrototypeOf(t, i);
                    })(MathScorer, t);
                    var i = _createSuper(MathScorer);
                    function MathScorer() {
                        return _classCallCheck(this, MathScorer), i.apply(this, arguments);
                    }
                    return (
                        (function _createClass(t, i, r) {
                            return i && _defineProperties(t.prototype, i), r && _defineProperties(t, r), t;
                        })(MathScorer, [
                            {
                                key: "reset",
                                value: function reset(t, i) {
                                    var r = JSON.stringify(t);
                                    if (((i = i || this.cachedValidateSingleSpec), this.serializedData !== r)) {
                                        try {
                                            (this.scoringData = (function getScoringData(t, i) {
                                                if (
                                                    !(function canValidateResponse(t) {
                                                        if (!1 === o.a.getNested(t, "validation.automarkable")) return !1;
                                                        var i = t.validation || t;
                                                        return !(o.a.isEmpty(i) || !(i.valid_responses || (i.valid_response && !v(i.valid_response.value))));
                                                    })(t.question)
                                                )
                                                    return { automarkable: !1 };
                                                t.response = t.response || {};
                                                var r,
                                                    a,
                                                    s = t.response && t.response.value,
                                                    T = [];
                                                t.question.equiv_literal_legacy && (t = u.a.processCompatibility(t));
                                                if (((a = !!t.question.validation.allow_negative_scores), (t.response = t.response || {}), t.question.validation.scoring_type)) {
                                                    if (!o.a.contains(m, t.question.validation.scoring_type)) throw new u.a.InvalidScoringTypeException(t.question.type, t.question.validation.scoring_type);
                                                    t.question.validation.valid_response && T.push(t.question.validation.valid_response),
                                                        t.question.validation.alt_responses && (T = T.concat(t.question.validation.alt_responses)),
                                                        (r = Math.abs(o.a.isNumber(t.question.validation.penalty) ? t.question.validation.penalty : 0));
                                                } else T = (t.question.validation && t.question.validation.valid_responses) || [];
                                                var q = u.a.validateMathLists(s, T, i, 1, r);
                                                void 0 === q.scoreWithFullPenalty ? (q.score = null) : (q.score = a ? q.scoreWithFullPenalty : Math.max(0, q.scoreWithFullPenalty));
                                                return q;
                                            })(t, i)),
                                                u.a.normalizeScores(this.scoringData, t);
                                        } catch (t) {
                                            this.scoringData = { error: t };
                                        }
                                        this.serializedData = r;
                                    }
                                    return (this.cachedValidateSingleSpec = i), this;
                                },
                            },
                        ]),
                        MathScorer
                    );
                })(s.a);
            i.a = T;
        },
        310: function (t, i, r) {
            "use strict";
            var a = r(0),
                o = r.n(a),
                s = r(277),
                u = r(278),
                m = r.n(u),
                v = r(206);
            function FormulaScorer(t, i) {
                o.a.isObject(i) && o.a.isNumber(i.mathcoreTimeoutDuration) ? m.a.setTimeoutDuration(i.mathcoreTimeoutDuration) : m.a.setTimeoutDuration(5e3),
                    this._initialize(t, function (t, i) {
                        return v.a.useMathCore(t) ? m.a.evaluateVerbose(v.a.processSpec(t), i) : v.a.validate(t, i);
                    });
            }
            (FormulaScorer.prototype = new s.a()), (i.a = FormulaScorer);
        },
        407: function (t, i, r) {
            "use strict";
            r(5), r(1);
            var a = r(0),
                o = r.n(a),
                s = r(310),
                u = r(51),
                m = (r(17), r(4));
            i.a = u.a.extend({
                initialize: function initialize() {
                    u.a.prototype.initialize.apply(this, arguments), this.set({ type: "formulaV2" });
                },
                processResponseValue: function processResponseValue(t) {
                    var i = this.hasResponse();
                    if (!i || !t) {
                        var r = i ? this.get("response").dynamic : void 0,
                            a = { value: "", type: this.RESPONSE_TYPE.STRING };
                        r && (a.dynamic = r), this.set({ response: a }, { silent: !0 });
                    }
                    t && o.a.deepExtend(this.get("response"), t);
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
                        i = t.error();
                    if (!i) return t.isValid();
                    if ("MathQuestionException" !== i.name) throw i;
                    "user" !== i.location && m.a.exception({ code: 10019, detail: i.message, i18n: this.activity.get("i18n") });
                },
            });
        },
        409: function (t, i, r) {
            "use strict";
            var a = r(52),
                o = r(1),
                s = r.n(o),
                u = (r(5), r(0)),
                m = r.n(u),
                v = r(163),
                T = r(173),
                q = r(27),
                R = r(410),
                M = r.n(R),
                j = r(243),
                F = r(207);
            i.a = a.a.extend({
                defaultUiStyle: T.a.prototype.TYPE.FLOATING_KEYBOARD,
                inputSelector: ".lrn_math_editable",
                template: M.a,
                initialize: function initialize() {
                    var t = this;
                    a.a.prototype.initialize.call(this),
                        (this.activity = this.options.activity),
                        (this.i18n = this.activity.get("i18n")),
                        (this.displayLogic = {}),
                        this.addRenderingLogic(),
                        Object(j.a)(this, function () {
                            return [t.editorView];
                        }),
                        this.render(),
                        this.initialisationCompleted();
                },
                addFacadeMethods: function addFacadeMethods(t) {
                    q.a.addFacadeMethods.call(this, t),
                        (t.addMathQuillVarField = m.a.bind(function (t) {
                            this.editorView.addMathQuillVarField(t);
                        }, this)),
                        (t.extendKeypadMenu = m.a.bind(function (i) {
                            var r = this.editorView.mathEvents,
                                a = this.keyboardView.getMenuContainer(),
                                o = {
                                    insert: function insert(t) {
                                        r.trigger(r.EVENT.MATH_COMMAND, "write", t);
                                    },
                                    insertVariable: function insertVariable(i) {
                                        t.addMathQuillVarField(i);
                                    },
                                };
                            m.a.isFunction(i) && i(a, o);
                        }, this));
                },
                addRenderingLogic: function addRenderingLogic() {
                    a.a.prototype.addRenderingLogic.call(this);
                    var t = this.activity.get("state") === this.activity.STATE.PREVIEW,
                        i = this.displayLogic.isReviewState || t,
                        r = this.model.get("question"),
                        o = r.ui_style || {},
                        s = o.type === T.a.prototype.TYPE.NO_INPUT_UI;
                    (this.displayLogic.readOnly = i),
                        (this.displayLogic.showInputUi = !s && !i),
                        (this.displayLogic.hasTransparentBackground = !(!r.template || !o.transparent_background)),
                        (this.displayLogic.hasBoostedFont = "normal" !== o.response_font_scale);
                },
                clearValidationUI: function clearValidationUI() {
                    this.showingValidationUI && (this.$(".lrn_correct, .lrn_incorrect").removeClass("lrn_correct lrn_incorrect"), (this.showingValidationUI = !1), a.a.prototype.clearValidationUI.call(this)), this.clearCorrectAnswers();
                },
                handleBlurEvents: q.a.handleBlurEvents,
                handleEvents: function handleEvents() {
                    var t = this.editorView.mathEvents;
                    this.listenTo(t, t.EVENT.EDITOR_FOCUSED, this.clearValidationUI, this),
                        this.listenTo(t, t.EVENT.EDITOR_FOCUSED, this.clearCorrectAnswer, this),
                        this.listenTo(t, t.EVENT.UPDATED, this.updateModel, this),
                        this.handleBlurEvents(this.$(".lrn_response_input_wrapper")[0]);
                },
                insertUiKeyboard: function insertUiKeyboard(t) {
                    var i = this.model.get("question"),
                        r = this.model.get("response"),
                        a = this.activity.get("disable_spokenmath_user_inputs"),
                        o = (i.ui_style && i.ui_style.type) || this.defaultUiStyle,
                        s = t[0];
                    this.keyboardView = new T.a({
                        el: t.find("div.lrn_input_ui")[0],
                        horizontalParent: s,
                        positioner: s,
                        mathEvents: this.editorView.mathEvents,
                        symbols: i.symbols,
                        disableSpokenmathUserInputs: a,
                        showHints: m.a.isUndefined(i.showHints) || !0 === i.showHints,
                        security: this.activity.get("security"),
                        handwriting: r && r.handwriting,
                        handwritingRecognises: i.handwriting_recognises,
                        lazy: q.a.usesLazyKeyboard(this.options.activity),
                        uiStyleType: o,
                        i18n: this.i18n,
                        chemistry: q.a.isChemistry.call(this),
                        numberPad: i.numberPad,
                        horizontalLayout: i.horizontal_layout,
                        horizontalPad: i.horizontalPad,
                    });
                },
                onAttach: q.a.onAttach,
                render: function render() {
                    this.model.get("question");
                    var t,
                        i = this.activity.get("disable_spokenmath_user_inputs");
                    return (
                        (t = s()(
                            this.template({
                                displayLogic: this.displayLogic,
                                labels: this.i18n.labels,
                                minWidth: m.a.isObject(this.model.get("question").ui_style) && !m.a.isUndefined(this.model.get("question").ui_style.min_width) ? this.model.get("question").ui_style.min_width : null,
                            })
                        )),
                        (this.editorView = new v.a({
                            el: t.find(".lrn_response_input")[0],
                            disableSpokenmathUserInputs: i,
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
                            disableItalics: q.a.isChemistry.call(this),
                            enableRawLatex: (this.activity.get("beta_flags") && this.activity.get("beta_flags").enable_raw_latex) || !1,
                            templateAriaLabel: this.model.get("question").template_aria_label,
                        })),
                        this.displayLogic.showInputUi && this.insertUiKeyboard(t),
                        this.renderViewContent(t),
                        this.displayLogic.isReviewState && this.renderValidatableUI(),
                        this.handleEvents(),
                        Object(F.a)(this.el, this.displayLogic.hasBoostedFont),
                        this
                    );
                },
                setDisabled: function setDisabled(t) {
                    q.a.setDisabled([this.editorView], t), this.setButtonsDisabled(t);
                },
                showCorrectAnswer: function showCorrectAnswer() {
                    q.a.addAriaLabelToValidationUi.call(this), this.showCorrectAnswerList();
                },
                showValidationUI: function showValidationUI() {
                    var t;
                    if ((q.a.addAriaLabelToValidationUi.call(this), (t = this.$(".lrn_response_input")), this.model.hasResponse()))
                        return (this.showingValidationUI = !0), this.model.validateResponse() ? (t.addClass("lrn_correct"), !0) : (t.addClass("lrn_incorrect"), !1);
                    t.addClass("lrn_not_attempted");
                },
                updateModel: function updateModel(t, i) {
                    this.clearValidationUI(), this.model.updateResponseValue({ value: t, responses: i, handwriting: this.keyboardView && this.keyboardView.getHandwriting() }), Object(F.a)(this.el, this.displayLogic.hasBoostedFont);
                },
                getReviewAriaLabel: function getReviewAriaLabel(t) {
                    return (t = t.clone()).text("response"), a.a.prototype.getReviewAriaLabel.call(this, t);
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
        62: function (t, i, r) {
            var a, o;
            (a = [r(1)]),
                void 0 ===
                    (o = function (t) {
                        var i = "mathquill-command-id",
                            r = "mathquill-block-id",
                            a = Math.min,
                            o = Math.max;
                        function noop() {}
                        var s = [].slice;
                        function variadic(t) {
                            var i = t.length - 1;
                            return function () {
                                var r = s.call(arguments, 0, i),
                                    a = s.call(arguments, i);
                                return t.apply(this, r.concat([a]));
                            };
                        }
                        var u = variadic(function (t, i) {
                            return variadic(function (r, a) {
                                if (t in r) return r[t].apply(r, i.concat(a));
                            });
                        });
                        function iterator(t) {
                            return variadic(function (i, r) {
                                "function" != typeof i && (i = u(i));
                                return t.call(this, function (t) {
                                    return i.apply(t, [t].concat(r));
                                });
                            });
                        }
                        function bind(t) {
                            var i = s.call(arguments, 1);
                            return function () {
                                return t.apply(this, i);
                            };
                        }
                        function pray(t, i) {
                            if (!i) throw new Error("prayer failed: " + t);
                        }
                        var m = (function (t, i, r) {
                                function isObject(t) {
                                    return "object" == typeof t;
                                }
                                function isFunction(t) {
                                    return "function" == typeof t;
                                }
                                function SuperclassBare() {}
                                return function P(t, r) {
                                    function C() {
                                        var t = new Bare();
                                        return isFunction(t.init) && t.init.apply(t, arguments), t;
                                    }
                                    function Bare() {}
                                    void 0 === r && ((r = t), (t = Object)), (C.Bare = Bare);
                                    var a,
                                        o = (SuperclassBare.prototype = t.prototype),
                                        s = (Bare.prototype = C.prototype = C.p = new SuperclassBare());
                                    return (
                                        (s.constructor = C),
                                        (C.mixin = function (t) {
                                            return (Bare.prototype = C.prototype = P(C, t).prototype), C;
                                        }),
                                        (C.open = function (r) {
                                            if (((a = {}), isFunction(r) ? (a = r.call(C, s, o, C, t)) : isObject(r) && (a = r), isObject(a))) for (var u in a) i.call(a, u) && (s[u] = a[u]);
                                            return isFunction(s.init) || (s.init = t), C;
                                        })(r)
                                    );
                                };
                            })(0, {}.hasOwnProperty),
                            v = (MathQuill.L = -1),
                            T = (MathQuill.R = 1);
                        function prayDirection(t) {
                            pray("a direction was passed", t === v || t === T);
                        }
                        var q = m(t, function (t) {
                                (t.insDirOf = function (t, i) {
                                    return t === v ? this.insertBefore(i.first()) : this.insertAfter(i.last());
                                }),
                                    (t.insAtDirEnd = function (t, i) {
                                        return t === v ? this.prependTo(i) : this.appendTo(i);
                                    });
                            }),
                            R = m(function (t) {
                                (t.parent = 0),
                                    (t[v] = 0),
                                    (t[T] = 0),
                                    (t.init = function (t, i, r) {
                                        (this.parent = t), (this[v] = i), (this[T] = r);
                                    }),
                                    (this.copy = function (t) {
                                        return R(t.parent, t[v], t[T]);
                                    });
                            }),
                            M = m(function (t) {
                                (t[v] = 0), (t[T] = 0), (t.parent = 0);
                                var i = 0;
                                (this.byId = {}),
                                    (t.init = function () {
                                        (this.id = (function uniqueNodeId() {
                                            return (i += 1);
                                        })()),
                                            (M.byId[this.id] = this),
                                            (this.ends = {}),
                                            (this.ends[v] = 0),
                                            (this.ends[T] = 0);
                                    }),
                                    (t.dispose = function () {
                                        delete M.byId[this.id];
                                    }),
                                    (t.toString = function () {
                                        return "{{ MathQuill Node #" + this.id + " }}";
                                    }),
                                    (t.jQ = q()),
                                    (t.jQadd = function (t) {
                                        return (this.jQ = this.jQ.add(t));
                                    }),
                                    (t.jQize = function (t) {
                                        t = q(t || this.html());
                                        function jQadd(t) {
                                            if (t.getAttribute) {
                                                var i = t.getAttribute("mathquill-command-id"),
                                                    r = t.getAttribute("mathquill-block-id");
                                                i && M.byId[i].jQadd(t), r && M.byId[r].jQadd(t);
                                            }
                                            for (t = t.firstChild; t; t = t.nextSibling) jQadd(t);
                                        }
                                        for (var i = 0; i < t.length; i += 1) jQadd(t[i]);
                                        return t;
                                    }),
                                    (t.createDir = function (t, i) {
                                        prayDirection(t);
                                        return this.jQize(), this.jQ.insDirOf(t, i.jQ), (i[t] = this.adopt(i.parent, i[v], i[T])), this;
                                    }),
                                    (t.createLeftOf = function (t) {
                                        return this.createDir(v, t);
                                    }),
                                    (t.selectChildren = function (t, i) {
                                        return $(t, i);
                                    }),
                                    (t.bubble = iterator(function (t) {
                                        for (var i = this; i; i = i.parent) {
                                            if (!1 === t(i)) break;
                                        }
                                        return this;
                                    })),
                                    (t.postOrder = iterator(function (t) {
                                        return (
                                            (function recurse(i) {
                                                i.eachChild(recurse), t(i);
                                            })(this),
                                            this
                                        );
                                    })),
                                    (t.isEmpty = function () {
                                        return 0 === this.ends[v] && 0 === this.ends[T];
                                    }),
                                    (t.children = function () {
                                        return j(this.ends[v], this.ends[T]);
                                    }),
                                    (t.eachChild = function () {
                                        var t = this.children();
                                        return t.each.apply(t, arguments), this;
                                    }),
                                    (t.foldChildren = function (t, i) {
                                        return this.children().fold(t, i);
                                    }),
                                    (t.withDirAdopt = function (t, i, r, a) {
                                        return j(this, this).withDirAdopt(t, i, r, a), this;
                                    }),
                                    (t.adopt = function (t, i, r) {
                                        return j(this, this).adopt(t, i, r), this;
                                    }),
                                    (t.disown = function () {
                                        return j(this, this).disown(), this;
                                    }),
                                    (t.remove = function () {
                                        return this.jQ.remove(), this.postOrder("dispose"), this.disown();
                                    });
                            });
                        function prayWellFormed(t, i, r) {
                            pray("a parent is always present", t),
                                pray("leftward is properly set up", i ? i[T] === r && i.parent === t : t.ends[v] === r),
                                pray("rightward is properly set up", r ? r[v] === i && r.parent === t : t.ends[T] === i);
                        }
                        var j = m(function (t) {
                                (t.init = function (t, i, r) {
                                    if ((void 0 === r && (r = v), prayDirection(r), pray("no half-empty fragments", !t == !i), (this.ends = {}), t)) {
                                        pray("withDir is passed to Fragment", t instanceof M),
                                            pray("oppDir is passed to Fragment", i instanceof M),
                                            pray("withDir and oppDir have the same parent", t.parent === i.parent),
                                            (this.ends[r] = t),
                                            (this.ends[-r] = i);
                                        var a = this.fold([], function (t, i) {
                                            return t.push.apply(t, i.jQ.get()), t;
                                        });
                                        this.jQ = this.jQ.add(a);
                                    }
                                }),
                                    (t.jQ = q()),
                                    (t.withDirAdopt = function (t, i, r, a) {
                                        return t === v ? this.adopt(i, r, a) : this.adopt(i, a, r);
                                    }),
                                    (t.adopt = function (t, i, r) {
                                        prayWellFormed(t, i, r);
                                        this.disowned = !1;
                                        var a = this.ends[v];
                                        if (!a) return this;
                                        var o = this.ends[T];
                                        return (
                                            i || (t.ends[v] = a),
                                            r ? (r[v] = o) : (t.ends[T] = o),
                                            (this.ends[T][T] = r),
                                            this.each(function (r) {
                                                (r[v] = i), (r.parent = t), i && (i[T] = r), (i = r);
                                            }),
                                            this
                                        );
                                    }),
                                    (t.disown = function () {
                                        var t = this.ends[v];
                                        if (!t || this.disowned) return this;
                                        this.disowned = !0;
                                        var i = this.ends[T],
                                            r = t.parent;
                                        return prayWellFormed(r, t[v], t), prayWellFormed(r, i, i[T]), t[v] ? (t[v][T] = i[T]) : (r.ends[v] = i[T]), i[T] ? (i[T][v] = t[v]) : (r.ends[T] = t[v]), this;
                                    }),
                                    (t.remove = function () {
                                        return this.jQ.remove(), this.each("postOrder", "dispose"), this.disown();
                                    }),
                                    (t.each = iterator(function (t) {
                                        var i = this.ends[v];
                                        if (!i) return this;
                                        for (; i !== this.ends[T][T]; i = i[T]) {
                                            if (!1 === t(i)) break;
                                        }
                                        return this;
                                    })),
                                    (t.fold = function (t, i) {
                                        return (
                                            this.each(function (r) {
                                                t = i.call(this, t, r);
                                            }),
                                            t
                                        );
                                    });
                            }),
                            F = {},
                            U = {},
                            V = {},
                            W = m(R, function (t) {
                                (t.init = function (t, i) {
                                    (this.parent = t), (this.options = i);
                                    var r = (this.jQ = this._jQ = q('<span class="mq-cursor">&#8203;</span>'));
                                    (this.blink = function () {
                                        r.toggleClass("mq-blink");
                                    }),
                                        (this.upDownCache = {});
                                }),
                                    (t.show = function () {
                                        return (
                                            (this.jQ = this._jQ.removeClass("mq-blink")),
                                            "intervalId" in this
                                                ? clearInterval(this.intervalId)
                                                : (this[T] ? (this.selection && this.selection.ends[v][v] === this[v] ? this.jQ.insertBefore(this.selection.jQ) : this.jQ.insertBefore(this[T].jQ.first())) : this.jQ.appendTo(this.parent.jQ),
                                                  this.parent.focus()),
                                            (this.intervalId = setInterval(this.blink, 500)),
                                            this
                                        );
                                    }),
                                    (t.hide = function () {
                                        return "intervalId" in this && clearInterval(this.intervalId), delete this.intervalId, this.jQ.detach(), (this.jQ = q()), this;
                                    }),
                                    (t.withDirInsertAt = function (t, i, r, a) {
                                        i !== this.parent && this.parent.blur && this.parent.blur(), (this.parent = i), (this[t] = r), (this[-t] = a);
                                    }),
                                    (t.insDirOf = function (t, i) {
                                        return prayDirection(t), this.withDirInsertAt(t, i.parent, i[t], i), this.parent.jQ.addClass("mq-hasCursor"), this.jQ.insDirOf(t, i.jQ), this;
                                    }),
                                    (t.insLeftOf = function (t) {
                                        return this.insDirOf(v, t);
                                    }),
                                    (t.insRightOf = function (t) {
                                        return this.insDirOf(T, t);
                                    }),
                                    (t.insAtDirEnd = function (t, i) {
                                        return prayDirection(t), this.withDirInsertAt(t, i, 0, i.ends[t]), this.jQ.insAtDirEnd(t, i.jQ), i.focus(), this;
                                    }),
                                    (t.insAtLeftEnd = function (t) {
                                        return this.insAtDirEnd(v, t);
                                    }),
                                    (t.insAtRightEnd = function (t) {
                                        return this.insAtDirEnd(T, t);
                                    }),
                                    (t.jumpUpDown = function (t, i) {
                                        this.upDownCache[t.id] = R.copy(this);
                                        var r = this.upDownCache[i.id];
                                        if (r) r[T] ? this.insLeftOf(r[T]) : this.insAtRightEnd(r.parent);
                                        else {
                                            var a = this.offset().left;
                                            i.seek(a, this);
                                        }
                                    }),
                                    (t.offset = function () {
                                        var t = this.jQ.removeClass("mq-cursor").offset();
                                        return this.jQ.addClass("mq-cursor"), t;
                                    }),
                                    (t.unwrapGramp = function () {
                                        var t = this.parent.parent,
                                            i = t.parent,
                                            r = t[T],
                                            a = t[v];
                                        if (
                                            (t.disown().eachChild(function (o) {
                                                o.isEmpty() ||
                                                    (o
                                                        .children()
                                                        .adopt(i, a, r)
                                                        .each(function (i) {
                                                            i.jQ.insertBefore(t.jQ.first());
                                                        }),
                                                    (a = o.ends[T]));
                                            }),
                                            !this[T])
                                        )
                                            if (this[v]) this[T] = this[v][T];
                                            else
                                                for (; !this[T]; ) {
                                                    if (((this.parent = this.parent[T]), !this.parent)) {
                                                        (this[T] = t[T]), (this.parent = i);
                                                        break;
                                                    }
                                                    this[T] = this.parent.ends[v];
                                                }
                                        this[T] ? this.insLeftOf(this[T]) : this.insAtRightEnd(i), t.jQ.remove(), t[v].siblingDeleted && t[v].siblingDeleted(this.options, T), t[T].siblingDeleted && t[T].siblingDeleted(this.options, v);
                                    }),
                                    (t.startSelection = function () {
                                        for (var t = (this.anticursor = R.copy(this)), i = (t.ancestors = {}), r = t; r.parent; r = r.parent) i[r.parent.id] = r;
                                    }),
                                    (t.endSelection = function () {
                                        delete this.anticursor;
                                    }),
                                    (t.select = function () {
                                        var t = this.anticursor;
                                        if (this[v] === t[v] && this.parent === t.parent) return !1;
                                        for (var i = this; i.parent; i = i.parent)
                                            if (i.parent.id in t.ancestors) {
                                                var r = i.parent;
                                                break;
                                            }
                                        pray("cursor and anticursor in the same tree", r);
                                        var a,
                                            o,
                                            s = t.ancestors[r.id],
                                            u = T;
                                        if (i[v] !== s)
                                            for (var m = i; m; m = m[T])
                                                if (m[T] === s[T]) {
                                                    (u = v), (a = i), (o = s);
                                                    break;
                                                }
                                        return (
                                            u === T && ((a = s), (o = i)),
                                            a instanceof R && (a = a[T]),
                                            o instanceof R && (o = o[v]),
                                            (this.hide().selection = r.selectChildren(a, o)),
                                            this.insDirOf(u, this.selection.ends[u]),
                                            this.selectionChanged(),
                                            !0
                                        );
                                    }),
                                    (t.clearSelection = function () {
                                        return this.selection && (this.selection.clear(), delete this.selection, this.selectionChanged()), this;
                                    }),
                                    (t.deleteSelection = function () {
                                        this.selection && ((this[v] = this.selection.ends[v][v]), (this[T] = this.selection.ends[T][T]), this.selection.remove(), this.selectionChanged(), delete this.selection);
                                    }),
                                    (t.replaceSelection = function () {
                                        var t = this.selection;
                                        return t && ((this[v] = t.ends[v][v]), (this[T] = t.ends[T][T]), delete this.selection), t;
                                    }),
                                    (t.depth = function () {
                                        for (var t = this, i = 0; (t = t.parent); ) i += t instanceof we ? 1 : 0;
                                        return i;
                                    }),
                                    (t.isTooDeep = function (t) {
                                        if (void 0 !== this.options.maxDepth) return this.depth() + (t || 0) > this.options.maxDepth;
                                    });
                            }),
                            $ = m(j, function (t, i) {
                                (t.init = function () {
                                    i.init.apply(this, arguments), (this.jQ = this.jQ.wrapAll('<span class="mq-selection"></span>').parent());
                                }),
                                    (t.adopt = function () {
                                        return this.jQ.replaceWith((this.jQ = this.jQ.children())), i.adopt.apply(this, arguments);
                                    }),
                                    (t.clear = function () {
                                        return this.jQ.replaceWith(this.jQ[0].childNodes), this;
                                    }),
                                    (t.join = function (t) {
                                        return this.fold("", function (i, r) {
                                            return i + r[t]();
                                        });
                                    });
                            }),
                            Y = m(function (t) {
                                (t.init = function (t, i, r) {
                                    (this.API = t), (this.root = i), (this.container = r), (t.__controller = i.controller = this), (this.cursor = i.cursor = W(i, t.__options)), this.setUnitalicizedTextCmds();
                                }),
                                    (t.setUnitalicizedTextCmds = function () {
                                        We = {};
                                        var t = this.API.__options.unItalicizedTextCmds || [];
                                        if (t instanceof Array) {
                                            for (var i = 0; i < t.length; i += 1) We[t[i]] = 1;
                                            this.API.__options.unItalicizedTextCmds = We;
                                        } else !t || t instanceof Array || (We = this.API.__options.unItalicizedTextCmds);
                                    }),
                                    (t.handle = function (t, i) {
                                        var r = this.API.__options.handlers;
                                        r && r[t] && (i === v || i === T ? r[t](i, this.API) : r[t](this.API));
                                    });
                                var i = [];
                                (this.onNotify = function (t) {
                                    i.push(t);
                                }),
                                    (t.notify = function () {
                                        for (var t = 0; t < i.length; t += 1) i[t].apply(this.cursor, arguments);
                                        return this;
                                    });
                            });
                        function MathQuill(t) {
                            if (!t || !t.nodeType) return null;
                            var i = q(t).children(".mq-root-block").attr(r);
                            return i ? M.byId[i].controller.API : null;
                        }
                        function APIFnFor(t) {
                            function APIFn(i, r) {
                                var a = MathQuill(i);
                                return a instanceof t || !i || !i.nodeType ? a : t(q(i), r);
                            }
                            return (APIFn.prototype = t.prototype), APIFn;
                        }
                        var X = m(),
                            Z = {};
                        MathQuill.__options = X.p;
                        var ee = m(function (a) {
                            (a.init = function () {
                                throw "wtf don't call me, I'm 'abstract'";
                            }),
                                (a.initRoot = function (a, o, s) {
                                    (this.__options = X()), this.config(s);
                                    var u = Y(this, a, o);
                                    u.createTextarea();
                                    var m = o.contents().detach();
                                    (a.jQ = q('<span class="mq-root-block"/>')
                                        .attr(r, a.id)
                                        .toggleClass("mq-disable-italics", !!s && !!s.disableItalics)
                                        .appendTo(o)),
                                        this.latex(m.text()),
                                        (this.revert = function () {
                                            return (
                                                o.find("[" + i + "]").each(function () {
                                                    var t = M.byId[q(this).attr(i)];
                                                    t && t.remove();
                                                }),
                                                o.find("[" + r + "]").each(function () {
                                                    var t = M.byId[q(this).attr(r)];
                                                    t && t.dispose();
                                                }),
                                                o.empty().unbind(".mathquill").removeClass("mq-editable-field mq-math-mode mq-text-mode").append(m),
                                                t.each(M.byId, function (t, i) {
                                                    (i.jQ && i.jQ.length && 3 !== i.jQ[0].nodeType) || i.dispose();
                                                }),
                                                t.each(u, function (t, i) {
                                                    i instanceof q && i.off(), delete u[t];
                                                }),
                                                o
                                            );
                                        });
                                }),
                                (a.config = MathQuill.config = function (t) {
                                    for (var i in t)
                                        if (t.hasOwnProperty(i)) {
                                            var r = t[i],
                                                a = Z[i];
                                            this.__options[i] = a ? a(r) : r;
                                        }
                                    return this;
                                }),
                                (a.el = function () {
                                    return this.__controller.container[0];
                                }),
                                (a.text = function () {
                                    return this.__controller.exportText();
                                }),
                                (a.latex = function (t) {
                                    return arguments.length > 0 ? (this.__controller.renderLatexMath(t), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex();
                                }),
                                (a.html = function () {
                                    return this.__controller.root.jQ
                                        .html()
                                        .replace(/ mathquill-(?:command|block)-id="?\d+"?/g, "")
                                        .replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i, "")
                                        .replace(/ mq-hasCursor|mq-hasCursor ?/, "")
                                        .replace(/ class=(""|(?= |>))/g, "");
                                }),
                                (a.reflow = function () {
                                    return this.__controller.root.postOrder("reflow"), this;
                                });
                        });
                        (MathQuill.prototype = ee.prototype),
                            (MathQuill.StaticMath = APIFnFor(
                                m(ee, function (t, i) {
                                    (t.init = function (t) {
                                        this.initRoot(we(), t.addClass("mq-math-mode")), this.__controller.delegateMouseEvents(), this.__controller.staticMathTextareaEvents();
                                    }),
                                        (t.latex = function () {
                                            var t = i.latex.apply(this, arguments);
                                            return arguments.length > 0 && this.__controller.root.postOrder("registerInnerField", (this.innerFields = [])), t;
                                        });
                                })
                            ));
                        var ie = (MathQuill.EditableField = m(ee, function (t) {
                            (t.initRootAndEvents = function (t, i, r) {
                                this.initRoot(t, i, r), (this.__controller.editable = !0), this.__controller.delegateMouseEvents(), this.__controller.editablesTextareaEvents();
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
                                    var i = this.__controller.notify(),
                                        r = i.cursor;
                                    /^\\[a-z]+$/i.test(t) && !r.isTooDeep() ? ((t = t.slice(1)), (t = (F[t] || Pt[t] || Lt)(t)), r.selection && t.replaces(r.replaceSelection()), t.createLeftOf(r.show())) : r.parent.write(r, t);
                                    return i.blurred && r.hide().parent.blur(), this;
                                }),
                                (t.select = function () {
                                    var t = this.__controller;
                                    for (t.notify("move").cursor.insAtRightEnd(t.root); t.cursor[v]; ) t.selectLeft();
                                    return this;
                                }),
                                (t.clearSelection = function () {
                                    return this.__controller.cursor.clearSelection(), this;
                                }),
                                (t.moveToDirEnd = function (t) {
                                    return this.__controller.notify("move").cursor.insAtDirEnd(t, this.__controller.root), this;
                                }),
                                (t.moveToLeftEnd = function () {
                                    return this.moveToDirEnd(v);
                                }),
                                (t.moveToRightEnd = function () {
                                    return this.moveToDirEnd(T);
                                }),
                                (t.keystroke = function (t) {
                                    t = t.replace(/^\s+|\s+$/g, "").split(/\s+/);
                                    for (var i = 0; i < t.length; i += 1) this.__controller.keystroke(t[i], { preventDefault: noop });
                                    return this;
                                }),
                                (t.typedText = function (t) {
                                    for (var i = 0; i < t.length; i += 1) this.__controller.typedText(t.charAt(i));
                                    return this;
                                });
                        }));
                        function RootBlockMixin(t) {
                            for (var i = "moveOutOf deleteOutOf selectOutOf upOutOf downOutOf reflow".split(" "), r = 0; r < i.length; r += 1)
                                !(function (i) {
                                    t[i] = function (t) {
                                        this.controller.handle(i, t);
                                    };
                                })(i[r]);
                        }
                        var ae,
                            le = m(function (t, i, r) {
                                function parseError(t, i) {
                                    throw "Parse Error: " + i + " at " + (t = t ? "'" + t + "'" : "EOF");
                                }
                                (t.init = function (t) {
                                    this._ = t;
                                }),
                                    (t.parse = function (t) {
                                        return this.skip(s)._(
                                            "" + t,
                                            function success(t, i) {
                                                return i;
                                            },
                                            parseError
                                        );
                                    }),
                                    (t.or = function (t) {
                                        pray("or is passed a parser", t instanceof r);
                                        var i = this;
                                        return r(function (r, a, o) {
                                            return i._(r, a, function failure(i) {
                                                return t._(r, a, o);
                                            });
                                        });
                                    }),
                                    (t.then = function (t) {
                                        var i = this;
                                        return r(function (a, o, s) {
                                            return i._(
                                                a,
                                                function success(i, a) {
                                                    var u = t instanceof r ? t : t(a);
                                                    return pray("a parser is returned", u instanceof r), u._(i, o, s);
                                                },
                                                s
                                            );
                                        });
                                    }),
                                    (t.many = function () {
                                        var t = this;
                                        return r(function (i, r, a) {
                                            for (var o = []; t._(i, success, failure); );
                                            return r(i, o);
                                            function success(t, r) {
                                                return (i = t), o.push(r), !0;
                                            }
                                            function failure() {
                                                return !1;
                                            }
                                        });
                                    }),
                                    (t.times = function (t, i) {
                                        arguments.length < 2 && (i = t);
                                        var a = this;
                                        return r(function (r, o, s) {
                                            for (var u, m = [], v = !0, T = 0; T < t; T += 1) if (!(v = a._(r, success, firstFailure))) return s(r, u);
                                            for (; T < i && v; T += 1) v = a._(r, success, secondFailure);
                                            return o(r, m);
                                            function success(t, i) {
                                                return m.push(i), (r = t), !0;
                                            }
                                            function firstFailure(t, i) {
                                                return (u = i), (r = t), !1;
                                            }
                                            function secondFailure(t, i) {
                                                return !1;
                                            }
                                        });
                                    }),
                                    (t.result = function (t) {
                                        return this.then(o(t));
                                    }),
                                    (t.atMost = function (t) {
                                        return this.times(0, t);
                                    }),
                                    (t.atLeast = function (t) {
                                        var i = this;
                                        return i.times(t).then(function (t) {
                                            return i.many().map(function (i) {
                                                return t.concat(i);
                                            });
                                        });
                                    }),
                                    (t.map = function (t) {
                                        return this.then(function (i) {
                                            return o(t(i));
                                        });
                                    }),
                                    (t.skip = function (t) {
                                        return this.then(function (i) {
                                            return t.result(i);
                                        });
                                    });
                                this.string = function (t) {
                                    var i = t.length,
                                        a = "expected '" + t + "'";
                                    return r(function (r, o, s) {
                                        var u = r.slice(0, i);
                                        return u === t ? o(r.slice(i), u) : s(r, a);
                                    });
                                };
                                var a = (this.regex = function (t) {
                                        pray("regexp parser is anchored", "^" === t.toString().charAt(1));
                                        var i = "expected " + t;
                                        return r(function (r, a, o) {
                                            var s = t.exec(r);
                                            if (s) {
                                                var u = s[0];
                                                return a(r.slice(u.length), u);
                                            }
                                            return o(r, i);
                                        });
                                    }),
                                    o = (r.succeed = function (t) {
                                        return r(function (i, r) {
                                            return r(i, t);
                                        });
                                    }),
                                    s =
                                        ((r.fail = function (t) {
                                            return r(function (i, r, a) {
                                                return a(i, t);
                                            });
                                        }),
                                        (r.letter = a(/^[a-z]/i)),
                                        (r.letters = a(/^[a-z]*/i)),
                                        (r.digit = a(/^[0-9]/)),
                                        (r.digits = a(/^[0-9]*/)),
                                        (r.whitespace = a(/^\s+/)),
                                        (r.optWhitespace = a(/^\s*/)),
                                        (r.any = r(function (t, i, r) {
                                            return t ? i(t.slice(1), t.charAt(0)) : r(t, "expected any character");
                                        })),
                                        (r.all = r(function (t, i, r) {
                                            return i("", t);
                                        })),
                                        (r.eof = r(function (t, i, r) {
                                            return t ? r(t, "expected EOF") : i(t, t);
                                        })));
                            }),
                            ce =
                                ((ae = {
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
                                function saneKeyboardEvents(i, r) {
                                    var a,
                                        o = null,
                                        s = null,
                                        u = t(i),
                                        m = t(r.container || u),
                                        v = noop;
                                    function checkTextareaFor(t) {
                                        (v = t), clearTimeout(a), (a = setTimeout(t));
                                    }
                                    m.bind("keydown keypress input keyup focusout paste", function () {
                                        v();
                                    });
                                    var T = !1;
                                    function handleKey() {
                                        r.keystroke(
                                            (function stringify(t) {
                                                var i,
                                                    r = t.which || t.keyCode,
                                                    a = ae[r],
                                                    o = [];
                                                return (
                                                    t.ctrlKey && o.push("Ctrl"),
                                                    t.originalEvent && t.originalEvent.metaKey && o.push("Meta"),
                                                    t.altKey && o.push("Alt"),
                                                    t.shiftKey && o.push("Shift"),
                                                    (i = a || String.fromCharCode(r)),
                                                    o.length || a ? (o.push(i), o.join("-")) : i
                                                );
                                            })(o),
                                            o
                                        );
                                    }
                                    function typedText() {
                                        if (
                                            !(function hasSelection() {
                                                var t = u[0];
                                                return "selectionStart" in t && t.selectionStart !== t.selectionEnd;
                                            })()
                                        ) {
                                            var t = u.val();
                                            1 === t.length ? (u.val(""), r.typedText(t)) : t && u[0] && u[0].select && u[0].select();
                                        }
                                    }
                                    function pastedText() {
                                        var t = u.val();
                                        u.val(""), t && ((t = (t = t.replace(/\^\{\{response\}\}/g, "^{}")).replace(/\{\{response\}\}/g, "")), r.paste(t));
                                    }
                                    return (
                                        m.bind({
                                            keydown: function onKeydown(t) {
                                                (o = t),
                                                    (s = null),
                                                    T &&
                                                        checkTextareaFor(function () {
                                                            u[0] && u[0].select && u[0].select(), (v = noop), clearTimeout(a);
                                                        }),
                                                    handleKey();
                                            },
                                            keypress: function onKeypress(t) {
                                                o && s && handleKey(), (s = t), checkTextareaFor(typedText);
                                            },
                                            focusout: function onBlur() {
                                                o = s = null;
                                            },
                                            paste: function onPaste(t) {
                                                u.focus(), checkTextareaFor(pastedText);
                                            },
                                        }),
                                        {
                                            select: function select(t) {
                                                v(), (v = noop), clearTimeout(a), u.val(t), t && u[0] && u[0].select && u[0].select(), (T = !!t);
                                            },
                                        }
                                    );
                                });
                        Y.open(function (t, i) {
                            t.exportText = function () {
                                return this.root.foldChildren("", function (t, i) {
                                    return t + i.text();
                                });
                            };
                        }),
                            Y.open(function (t) {
                                t.focusBlurEvents = function () {
                                    var t,
                                        i = this,
                                        r = i.root,
                                        a = i.cursor;
                                    function windowBlur() {
                                        clearTimeout(t), a.selection && a.selection.jQ.addClass("mq-blur"), blur();
                                    }
                                    function blur() {
                                        a.hide().parent.blur(), i.root && i.root.jQ.removeClass("mq-focused"), q(window).off("blur", windowBlur);
                                    }
                                    i.textarea
                                        .focus(function () {
                                            (i.blurred = !1),
                                                clearTimeout(t),
                                                r.ultimateRoot && r.ultimateRoot.jQ.find(".mq-last-focused").removeClass("mq-last-focused"),
                                                i.container.children(".mq-root-block").addClass("mq-focused mq-last-focused"),
                                                a.parent || a.insAtRightEnd(r),
                                                a.selection ? (a.selection.jQ.removeClass("mq-blur"), i.selectionChanged()) : a.show(),
                                                i.setUnitalicizedTextCmds();
                                        })
                                        .blur(function () {
                                            (i.blurred = !0),
                                                (t = setTimeout(function () {
                                                    r.postOrder("intentionalBlur"), a.clearSelection(), blur();
                                                })),
                                                q(window).on("blur", windowBlur);
                                        }),
                                        (i.blurred = !0),
                                        a.hide().parent.blur();
                                };
                            }),
                            Y.open(function (t) {
                                t.keystroke = function (t, i) {
                                    this.cursor.parent.keystroke(t, i, this);
                                };
                            }),
                            M.open(function (t) {
                                (t.keystroke = function (t, i, r) {
                                    var a = r.cursor;
                                    switch (t) {
                                        case "Ctrl-Shift-Backspace":
                                        case "Ctrl-Backspace":
                                            for (; a[v] || a.selection; ) r.backspace();
                                            break;
                                        case "Shift-Backspace":
                                        case "Backspace":
                                            r.backspace();
                                            break;
                                        case "Esc":
                                            return;
                                        case "Shift-Esc":
                                            return void r.escapeDir(v, t, i);
                                        case "End":
                                            r.notify("move").cursor.insAtRightEnd(a.parent);
                                            break;
                                        case "Ctrl-End":
                                            r.notify("move").cursor.insAtRightEnd(r.root);
                                            break;
                                        case "Shift-End":
                                            for (; a[T]; ) r.selectRight();
                                            break;
                                        case "Ctrl-Shift-End":
                                            for (; a[T] || a.parent !== r.root; ) r.selectRight();
                                            break;
                                        case "Home":
                                            r.notify("move").cursor.insAtLeftEnd(a.parent);
                                            break;
                                        case "Ctrl-Home":
                                            r.notify("move").cursor.insAtLeftEnd(r.root);
                                            break;
                                        case "Shift-Home":
                                            for (; a[v]; ) r.selectLeft();
                                            break;
                                        case "Ctrl-Shift-Home":
                                            for (; a[v] || a.parent !== r.root; ) r.selectLeft();
                                            break;
                                        case "Left":
                                            r.moveLeft();
                                            break;
                                        case "Shift-Left":
                                            r.selectLeft();
                                            break;
                                        case "Ctrl-Left":
                                            break;
                                        case "Right":
                                            r.moveRight();
                                            break;
                                        case "Shift-Right":
                                            r.selectRight();
                                            break;
                                        case "Ctrl-Right":
                                            break;
                                        case "Up":
                                            r.moveUp();
                                            break;
                                        case "Down":
                                            r.moveDown();
                                            break;
                                        case "Shift-Up":
                                            if (a[v]) for (; a[v]; ) r.selectLeft();
                                            else r.selectLeft();
                                        case "Shift-Down":
                                            if (a[T]) for (; a[T]; ) r.selectRight();
                                            else r.selectRight();
                                        case "Ctrl-Up":
                                        case "Ctrl-Down":
                                            break;
                                        case "Ctrl-Shift-Del":
                                        case "Ctrl-Del":
                                            for (; a[T] || a.selection; ) r.deleteForward();
                                            break;
                                        case "Shift-Del":
                                        case "Del":
                                            r.deleteForward();
                                            break;
                                        case "Meta-A":
                                        case "Ctrl-A":
                                            for (r.notify("move").cursor.insAtRightEnd(r.root); a[v]; ) r.selectLeft();
                                            break;
                                        default:
                                            return;
                                    }
                                    i.preventDefault(), r.scrollHoriz();
                                }),
                                    (t.moveOutOf = t.moveTowards = t.deleteOutOf = t.deleteTowards = t.unselectInto = t.selectOutOf = t.selectTowards = function () {
                                        pray("overridden or never called on this node");
                                    });
                            }),
                            Y.open(function (t) {
                                function moveUpDown(t, i) {
                                    var r = t.notify("upDown").cursor,
                                        a = i + "Into",
                                        o = i + "OutOf";
                                    return (
                                        r[T][a]
                                            ? r.insAtLeftEnd(r[T][a])
                                            : r[v][a]
                                            ? r.insAtRightEnd(r[v][a])
                                            : r.parent.bubble(function (t) {
                                                  var i = t[o];
                                                  if (i && ("function" == typeof i && (i = t[o](r)), i instanceof M && r.jumpUpDown(t, i), !0 !== i)) return !1;
                                              }),
                                        t
                                    );
                                }
                                this.onNotify(function (t) {
                                    ("move" !== t && "upDown" !== t) || this.show().clearSelection();
                                }),
                                    (t.escapeDir = function (t, i, r) {
                                        prayDirection(t);
                                        var a = this.cursor;
                                        if ((a.parent !== this.root && r.preventDefault(), a.parent !== this.root)) return a.parent.moveOutOf(t, a), this.notify("move");
                                    }),
                                    (Z.leftRightIntoCmdGoes = function (t) {
                                        if (t && "up" !== t && "down" !== t) throw '"up" or "down" required for leftRightIntoCmdGoes option, got "' + t + '"';
                                        return t;
                                    }),
                                    (t.moveDir = function (t) {
                                        prayDirection(t);
                                        var i = this.cursor,
                                            r = i.options.leftRightIntoCmdGoes;
                                        return i.selection ? i.insDirOf(t, i.selection.ends[t]) : i[t] ? i[t].moveTowards(t, i, r) : i.parent.moveOutOf(t, i, r), this.notify("move");
                                    }),
                                    (t.moveLeft = function () {
                                        return this.moveDir(v);
                                    }),
                                    (t.moveRight = function () {
                                        return this.moveDir(T);
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
                                        var i = this.cursor,
                                            r = i.selection;
                                        return (
                                            this.notify("edit"),
                                            r || (i[t] ? i[t].deleteTowards(t, i) : i.parent.deleteOutOf(t, i)),
                                            i[v].siblingDeleted && i[v].siblingDeleted(i.options, T),
                                            i[T].siblingDeleted && i[T].siblingDeleted(i.options, v),
                                            i.parent.bubble("reflow"),
                                            this
                                        );
                                    }),
                                    (t.backspace = function () {
                                        return this.deleteDir(v);
                                    }),
                                    (t.deleteForward = function () {
                                        return this.deleteDir(T);
                                    }),
                                    this.onNotify(function (t) {
                                        "select" !== t && this.endSelection();
                                    }),
                                    (t.selectDir = function (t) {
                                        var i = this.notify("select").cursor,
                                            r = i.selection;
                                        prayDirection(t), i.anticursor || i.startSelection();
                                        var a = i[t];
                                        a ? (r && r.ends[t] === a && i.anticursor[-t] !== a ? a.unselectInto(t, i) : a.selectTowards(t, i)) : i.parent.selectOutOf(t, i), i.clearSelection(), i.select() || i.show();
                                    }),
                                    (t.selectLeft = function () {
                                        return this.selectDir(v);
                                    }),
                                    (t.selectRight = function () {
                                        return this.selectDir(T);
                                    });
                            });
                        var de = (function () {
                            function joinBlocks(t) {
                                for (var i = t[0] || we(), r = 1; r < t.length; r += 1) t[r].children().adopt(i, i.ends[T], 0);
                                return i;
                            }
                            var t = le.string,
                                i = le.regex,
                                r = le.letter,
                                a = le.any,
                                o = le.optWhitespace,
                                s = le.succeed,
                                u = le.fail,
                                m = r.map(function (t) {
                                    return He(t);
                                }),
                                v = i(/^[^${}\\_^]/).map(function (t) {
                                    return ye(t);
                                }),
                                q = i(/^\\not\\[a-z]+/).then(function (t) {
                                    return (V[t] && V[t]().parser()) || u("unknown compound command: " + t);
                                }),
                                R = i(/^[^\\a-eg-zA-Z]/)
                                    .or(
                                        t("\\").then(
                                            i(/^[a-z]+/i)
                                                .or(i(/^\s+/).result(" "))
                                                .or(a)
                                        )
                                    )
                                    .then(function (t) {
                                        var i = F[t];
                                        return i ? i(t).parser() : u("unknown command: \\" + t);
                                    }),
                                M = t("\\")
                                    .then(i(/^(?!end\b)\w+/))
                                    .then(function (t) {
                                        return F[t] ? u("recognised command: \\" + t) : Lt(t).parser();
                                    }),
                                j = q.or(R).or(m).or(v).or(M),
                                U = t("{")
                                    .then(function () {
                                        return $;
                                    })
                                    .skip(t("}")),
                                W = o.then(
                                    U.or(
                                        j.map(function commandToBlock(t) {
                                            var i = we();
                                            return t.adopt(i, 0, 0), i;
                                        })
                                    )
                                ),
                                $ = W.many().map(joinBlocks).skip(o),
                                Y = t("[")
                                    .then(
                                        W.then(function (t) {
                                            return "]" !== t.join("latex") ? s(t) : u();
                                        })
                                            .many()
                                            .map(joinBlocks)
                                            .skip(o)
                                    )
                                    .skip(t("]")),
                                X = $;
                            return (X.block = W), (X.optBlock = Y), X;
                        })();
                        Y.open(function (t, i) {
                            (t.exportLatex = function () {
                                return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/gi, "$1");
                            }),
                                (Z.maxDepth = function (t) {
                                    return "number" == typeof t ? t : void 0;
                                }),
                                (t.writeLatex = function (t) {
                                    var i = this.notify("edit").cursor,
                                        r = le.all,
                                        a = le.eof;
                                    this.setUnitalicizedTextCmds();
                                    var o = de.skip(a).or(r.result(!1)).parse(t);
                                    o &&
                                        !o.isEmpty() &&
                                        o.prepareInsertionAt(i) &&
                                        (o.children().adopt(i.parent, i[v], i[T]),
                                        o.jQize().insertBefore(i.jQ),
                                        (i[v] = o.ends[T]),
                                        o.finalizeInsert(i.options, i),
                                        o.ends[T][T].siblingCreated && o.ends[T][T].siblingCreated(i.options, v),
                                        o.ends[v][v].siblingCreated && o.ends[v][v].siblingCreated(i.options, T),
                                        i.parent.bubble("reflow"));
                                    return this;
                                }),
                                (t.renderLatexMath = function (t) {
                                    var i = this.root,
                                        r = this.cursor,
                                        a = i.jQ,
                                        o = le.all,
                                        s = le.eof,
                                        u = de.skip(s).or(o.result(!1)).parse(t);
                                    if ((i.eachChild("postOrder", "dispose"), (i.ends[v] = i.ends[T] = 0), u && u.prepareInsertionAt(r))) {
                                        u.children().adopt(i, 0, 0);
                                        var m = u.join("html");
                                        a.html(m), i.jQize(a.children()), i.finalizeInsert(r.options);
                                    } else a.empty();
                                    delete r.selection, r.insAtRightEnd(i);
                                }),
                                (t.renderLatexText = function (t) {
                                    var i = this.root,
                                        r = this.cursor;
                                    i.jQ.children().slice(1).remove(), i.eachChild("postOrder", "dispose"), (i.ends[v] = i.ends[T] = 0), delete r.selection, r.show().insAtRightEnd(i);
                                    var a = le.regex,
                                        o = le.string,
                                        s = le.eof,
                                        u = le.all,
                                        m = o("$")
                                            .then(de)
                                            .skip(o("$").or(s))
                                            .map(function (t) {
                                                var i = qe(r);
                                                i.createBlocks();
                                                var a = i.ends[v];
                                                return t.children().adopt(a, 0, 0), i;
                                            }),
                                        q = o("\\$").result("$").or(a(/^[^$]/)).map(ye),
                                        R = m.or(q).many().skip(s).or(u.result(!1)).parse(t);
                                    if (R) {
                                        for (var M = 0; M < R.length; M += 1) R[M].adopt(i, i.ends[T], 0);
                                        i.jQize().appendTo(i.jQ), i.finalizeInsert(r.options);
                                    }
                                });
                        }),
                            Y.open(function (t) {
                                t.delegateMouseEvents = function () {
                                    var t = this.root.jQ;
                                    this.container.bind("mousedown.mathquill", function (i) {
                                        var a = q(i.target).closest(".mq-root-block"),
                                            o = M.byId[a.attr(r) || t.attr(r)].controller,
                                            s = o.cursor,
                                            u = (s.blink, o.textareaSpan),
                                            m = o.textarea;
                                        function mousemove(t) {
                                            s.anticursor || s.startSelection(), o.seek(q(t.target), t.pageX, t.pageY).cursor.select(), t.target && q(t.target.ownerDocument).unbind("mousemove", docmousemove);
                                        }
                                        function docmousemove(t) {
                                            return delete t.target, mousemove(t);
                                        }
                                        if (0 === u.parent().length) return !1;
                                        o.blurred && (o.editable || a.prepend(u), document.body.focus(), m.focus()),
                                            i.preventDefault(),
                                            (i.target.unselectable = !0),
                                            s.show(),
                                            o.seek(q(i.target), i.pageX, i.pageY).cursor.startSelection(),
                                            a.mousemove(mousemove),
                                            q(i.target.ownerDocument)
                                                .mousemove(docmousemove)
                                                .mouseup(function mouseup(t) {
                                                    s.selection || o.editable || u.detach(), a.unbind("mousemove", mousemove), q(t.target.ownerDocument).unbind("mousemove", docmousemove).unbind("mouseup", mouseup);
                                                });
                                    });
                                };
                            }),
                            Y.open(function (t) {
                                t.seek = function (t, a, o) {
                                    var s = this.notify("select").cursor;
                                    if (t) {
                                        var u = t.attr(r) || t.attr(i);
                                        if (!u) {
                                            var m = t.parent();
                                            u = m.attr(r) || m.attr(i);
                                        }
                                    }
                                    var v = u ? M.byId[u] : this.root;
                                    return pray("nodeId is the id of some Node that exists", v), s.clearSelection().show(), v.seek(a, s), this.scrollHoriz(), this;
                                };
                            }),
                            Y.open(function (t) {
                                t.scrollHoriz = function () {
                                    var t = this.cursor,
                                        i = t.selection,
                                        r = this.root.jQ[0].getBoundingClientRect();
                                    if (i) {
                                        var a = i.jQ[0].getBoundingClientRect(),
                                            o = a.left - (r.left + 20),
                                            s = a.right - (r.right - 20);
                                        if (i.ends[v] === t[T])
                                            if (o < 0) m = o;
                                            else {
                                                if (!(s > 0)) return;
                                                if (a.left - s < r.left + 20) m = o;
                                                else m = s;
                                            }
                                        else if (s > 0) m = s;
                                        else {
                                            if (!(o < 0)) return;
                                            if (a.right - o > r.right - 20) m = s;
                                            else m = o;
                                        }
                                    } else {
                                        var u = t.jQ[0].getBoundingClientRect().left;
                                        if (u > r.right - 20) var m = u - (r.right - 20);
                                        else {
                                            if (!(u < r.left + 20)) return;
                                            var m = u - (r.left + 20);
                                        }
                                    }
                                    this.root.jQ.stop().animate({ scrollLeft: "+=" + m }, 100);
                                };
                            }),
                            Y.open(function (i) {
                                (X.p.substituteTextarea = function () {
                                    return q("<textarea>")[0];
                                }),
                                    (i.createTextarea = function () {
                                        var t = (this.textareaSpan = q('<span class="mq-textarea"></span>')),
                                            i = this.API.__options.substituteTextarea();
                                        if (!i.nodeType) throw "substituteTextarea() must return a DOM element, got " + i;
                                        i = this.textarea = q(i).appendTo(t);
                                        var r = this;
                                        (r.cursor.selectionChanged = function () {
                                            r.selectionChanged();
                                        }),
                                            r.container.bind("copy", function () {
                                                r.setTextareaSelection();
                                            });
                                    }),
                                    (i.selectionChanged = function () {
                                        var t = this;
                                        ct(t.container[0]),
                                            void 0 === t.textareaSelectionTimeout &&
                                                (t.textareaSelectionTimeout = setTimeout(function () {
                                                    t.setTextareaSelection();
                                                }));
                                    }),
                                    (i.setTextareaSelection = function () {
                                        this.textareaSelectionTimeout = void 0;
                                        var t = "";
                                        this.cursor.selection && ((t = this.cursor.selection.join("latex")), this.API.__options.statelessClipboard && (t = "$" + t + "$")), this.selectFn(t);
                                    }),
                                    (i.staticMathTextareaEvents = function () {
                                        var i = this,
                                            r = (i.root, i.cursor),
                                            a = i.textarea,
                                            o = i.textareaSpan;
                                        function detach() {
                                            o.detach(), (i.blurred = !0);
                                        }
                                        this.container.prepend(t('<span class="mq-selectable">').text("$" + i.exportLatex() + "$")),
                                            (i.blurred = !0),
                                            a
                                                .bind("cut paste", !1)
                                                .focus(function () {
                                                    i.blurred = !1;
                                                })
                                                .blur(function () {
                                                    r.selection && r.selection.clear(), setTimeout(detach);
                                                }),
                                            (i.selectFn = function (t) {
                                                a.val(t), t && a.select();
                                            });
                                    }),
                                    (i.editablesTextareaEvents = function () {
                                        var t = this,
                                            i = (t.root, t.cursor),
                                            r = t.textarea,
                                            a = t.textareaSpan,
                                            o = ce(r, this);
                                        (this.selectFn = function (t) {
                                            o.select(t);
                                        }),
                                            this.container.prepend(a).on("cut", function (r) {
                                                i.selection &&
                                                    setTimeout(function () {
                                                        t.notify("edit"), i.parent.bubble("reflow");
                                                    });
                                            }),
                                            this.focusBlurEvents();
                                    }),
                                    (i.typedText = function (t) {
                                        if ("\n" === t) return this.handle("enter");
                                        var i = this.notify().cursor;
                                        i.parent.write(i, t), this.scrollHoriz();
                                    }),
                                    (i.paste = function (t) {
                                        this.API.__options.statelessClipboard && (t = "$" === t.slice(0, 1) && "$" === t.slice(-1) ? t.slice(1, -1) : "\\text{" + t + "}"), this.writeLatex(t).cursor.show();
                                    });
                            });
                        var pe = m(M, function (t, i) {
                                (t.finalizeInsert = function (t, i) {
                                    this.postOrder("finalizeTree", t),
                                        this.postOrder("contactWeld", i),
                                        this.postOrder("blur"),
                                        this.postOrder("reflow"),
                                        this[T].siblingCreated && this[T].siblingCreated(t, v),
                                        this[v].siblingCreated && this[v].siblingCreated(t, T),
                                        this.bubble("reflow");
                                }),
                                    (t.prepareInsertionAt = function (t) {
                                        var i = t.options.maxDepth;
                                        if (void 0 !== i) {
                                            var r = t.depth();
                                            if (r > i) return !1;
                                            this.removeNodesDeeperThan(i - r);
                                        }
                                        return !0;
                                    }),
                                    (t.removeNodesDeeperThan = function (t) {
                                        for (var i, r = 0, a = [[this, r]]; a.length; )
                                            (i = a.shift())[0].children().each(function (o) {
                                                var s = o instanceof we ? 1 : 0;
                                                (r = i[1] + s) <= t ? a.push([o, r]) : (s ? o.children() : o).remove();
                                            });
                                    });
                            }),
                            fe = m(pe, function (t, i) {
                                (t.init = function (t, r, a) {
                                    i.init.call(this), this.ctrlSeq || (this.ctrlSeq = t), r && (this.htmlTemplate = r), a && (this.textTemplate = a);
                                }),
                                    (t.replaces = function (t) {
                                        t.disown(), (this.replacedFragment = t);
                                    }),
                                    (t.isEmpty = function () {
                                        return this.foldChildren(!0, function (t, i) {
                                            return t && i.isEmpty();
                                        });
                                    }),
                                    (t.parser = function () {
                                        var t = de.block,
                                            i = this;
                                        return t.times(i.numBlocks()).map(function (t) {
                                            i.blocks = t;
                                            for (var r = 0; r < t.length; r += 1) t[r].adopt(i, i.ends[T], 0);
                                            return i;
                                        });
                                    }),
                                    (t.createLeftOf = function (t) {
                                        var r = this.replacedFragment;
                                        this.createBlocks(),
                                            i.createLeftOf.call(this, t),
                                            r && (r.adopt(this.ends[v], 0, 0), r.jQ.appendTo(this.ends[v].jQ), this.placeCursor(t), this.prepareInsertionAt(t)),
                                            this.finalizeInsert(t.options),
                                            this.placeCursor(t);
                                    }),
                                    (t.createBlocks = function () {
                                        for (var t = this.numBlocks(), i = (this.blocks = Array(t)), r = 0; r < t; r += 1) {
                                            (i[r] = we()).adopt(this, this.ends[T], 0);
                                        }
                                    }),
                                    (t.placeCursor = function (t) {
                                        t.insAtRightEnd(
                                            this.foldChildren(this.ends[v], function (t, i) {
                                                return t.isEmpty() ? t : i;
                                            })
                                        );
                                    }),
                                    (t.moveTowards = function (t, i, r) {
                                        var a = r && this[r + "Into"];
                                        i.insAtDirEnd(-t, a || this.ends[-t]);
                                    }),
                                    (t.deleteTowards = function (t, i) {
                                        i.startSelection(), this.selectTowards(t, i), i.select();
                                    }),
                                    (t.selectTowards = function (t, i) {
                                        (i[-t] = this), (i[t] = this[t]);
                                    }),
                                    (t.selectChildren = function () {
                                        return $(this, this);
                                    }),
                                    (t.unselectInto = function (t, i) {
                                        i.insAtDirEnd(-t, i.anticursor.ancestors[this.id]);
                                    }),
                                    (t.seek = function (t, i) {
                                        function getBounds(t) {
                                            var i = {};
                                            return (i[v] = t.jQ.offset().left), (i[T] = i[v] + t.jQ.outerWidth()), i;
                                        }
                                        var r = this,
                                            a = getBounds(r);
                                        if (t < a[v]) return i.insLeftOf(r);
                                        if (t > a[T]) return i.insRightOf(r);
                                        var o = a[v];
                                        r.eachChild(function (s) {
                                            var u = getBounds(s);
                                            return t < u[v]
                                                ? (t - o < u[v] - t ? (s[v] ? i.insAtRightEnd(s[v]) : i.insLeftOf(r)) : i.insAtLeftEnd(s), !1)
                                                : t > u[T]
                                                ? void (s[T] ? (o = u[T]) : a[T] - t < t - u[T] ? i.insRightOf(r) : i.insAtRightEnd(s))
                                                : (s.seek(t, i), !1);
                                        });
                                    }),
                                    (t.numBlocks = function () {
                                        var t = this.htmlTemplate.match(/&\d+/g);
                                        return t ? t.length : 0;
                                    }),
                                    (t.html = function () {
                                        var t = this.blocks,
                                            i = " mathquill-command-id=" + this.id,
                                            r = this.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);
                                        pray("no unmatched angle brackets", r.join("") === this.htmlTemplate);
                                        for (var a = 0, o = r[0]; o; o = r[(a += 1)])
                                            if ("/>" === o.slice(-2)) r[a] = o.slice(0, -2) + i + "/>";
                                            else if ("<" === o.charAt(0)) {
                                                pray("not an unmatched top-level close tag", "/" !== o.charAt(1)), (r[a] = o.slice(0, -1) + i + ">");
                                                var s = 1;
                                                do {
                                                    pray("no missing close tags", (o = r[(a += 1)])), "</" === o.slice(0, 2) ? (s -= 1) : "<" === o.charAt(0) && "/>" !== o.slice(-2) && (s += 1);
                                                } while (s > 0);
                                            }
                                        return r.join("").replace(/>&(\d+)/g, function (i, r) {
                                            return " mathquill-block-id=" + t[r].id + ">" + t[r].join("html");
                                        });
                                    }),
                                    (t.latex = function () {
                                        return this.foldChildren(this.ctrlSeq, function (t, i) {
                                            return t + "{" + (i.latex() || " ") + "}";
                                        });
                                    }),
                                    (t.textTemplate = [""]),
                                    (t.text = function () {
                                        var t = this,
                                            i = 0;
                                        return t.foldChildren(t.textTemplate[i], function (r, a) {
                                            i += 1;
                                            var o = a.text();
                                            return r && "(" === t.textTemplate[i] && "(" === o[0] && ")" === o.slice(-1) ? r + o.slice(1, -1) + t.textTemplate[i] : r + a.text() + (t.textTemplate[i] || "");
                                        });
                                    });
                            }),
                            be = m(fe, function (t, i) {
                                (t.init = function (t, r, a) {
                                    a || (a = t && t.length > 1 ? t.slice(1) : t), i.init.call(this, t, r, [a]);
                                }),
                                    (t.parser = function () {
                                        return le.succeed(this);
                                    }),
                                    (t.numBlocks = function () {
                                        return 0;
                                    }),
                                    (t.replaces = function (t) {
                                        t.remove();
                                    }),
                                    (t.createBlocks = noop),
                                    (t.moveTowards = function (t, i) {
                                        i.jQ.insDirOf(t, this.jQ), (i[-t] = this), (i[t] = this[t]);
                                    }),
                                    (t.deleteTowards = function (t, i) {
                                        i[t] = this.remove()[t];
                                    }),
                                    (t.seek = function (t, i) {
                                        t - this.jQ.offset().left < this.jQ.outerWidth() / 2 ? i.insLeftOf(this) : i.insRightOf(this);
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
                            ye = m(be, function (t, i) {
                                t.init = function (t, r) {
                                    i.init.call(this, t, "<span>" + (r || t) + "</span>");
                                };
                            }),
                            _e = m(be, function (t, i) {
                                t.init = function (t, r, a) {
                                    i.init.call(this, t, '<span class="mq-binary-operator">' + r + "</span>", a);
                                };
                            }),
                            we = m(pe, function (t, i) {
                                (t.join = function (t) {
                                    return this.foldChildren("", function (i, r) {
                                        return i + r[t]();
                                    });
                                }),
                                    (t.html = function () {
                                        return this.join("html");
                                    }),
                                    (t.latex = function () {
                                        return this.join("latex");
                                    }),
                                    (t.text = function () {
                                        return this.ends[v] === this.ends[T] && 0 !== this.ends[v] ? this.ends[v].text() : this.join("text");
                                    }),
                                    (t.keystroke = function (t, r, a) {
                                        return !a.API.__options.spaceBehavesLikeTab || ("Spacebar" !== t && "Shift-Spacebar" !== t)
                                            ? i.keystroke.apply(this, arguments)
                                            : (r.preventDefault(), void a.escapeDir("Shift-Spacebar" === t ? v : T, t, r));
                                    }),
                                    (t.moveOutOf = function (t, i, r) {
                                        !(r && this.parent[r + "Into"]) && this[t] ? i.insAtDirEnd(-t, this[t]) : i.insDirOf(t, this.parent);
                                    }),
                                    (t.selectOutOf = function (t, i) {
                                        i.insDirOf(t, this.parent);
                                    }),
                                    (t.deleteOutOf = function (t, i) {
                                        i.unwrapGramp();
                                    }),
                                    (t.seek = function (t, i) {
                                        var r = this.ends[T];
                                        if (!r || r.jQ.offset().left + r.jQ.outerWidth() < t) return i.insAtRightEnd(this);
                                        if (t < this.ends[v].jQ.offset().left) return i.insAtLeftEnd(this);
                                        for (; t < r.jQ.offset().left; ) r = r[v];
                                        return r.seek(t, i);
                                    }),
                                    (t.chToCmd = function (t, i) {
                                        var r;
                                        return t.match(/^[a-eg-zA-Z]$/) ? He(t) : /^\d$/.test(t) ? ze(t) : (r = U[t] || F[t]) ? r(t) : ye(t);
                                    }),
                                    (t.write = function (t, i) {
                                        var r = this.chToCmd(i, t.options);
                                        t.selection && r.replaces(t.replaceSelection()), t.isTooDeep() || r.createLeftOf(t.show());
                                    }),
                                    (t.focus = function () {
                                        return this.jQ.addClass("mq-hasCursor"), this.jQ.removeClass("mq-empty"), this;
                                    }),
                                    (t.blur = function () {
                                        return this.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.jQ.addClass("mq-empty"), this;
                                    });
                            }),
                            xe = m(we, RootBlockMixin);
                        (MathQuill.MathField = APIFnFor(
                            m(ie, function (t, i) {
                                t.init = function (t, i) {
                                    t.addClass("mq-editable-field mq-math-mode"), this.initRootAndEvents(xe(), t, i);
                                };
                            })
                        )),
                            (MathQuill.InertMath = APIFnFor(
                                m(ee, function (t) {
                                    t.init = function (t, i) {
                                        this.initRoot(we(), t.addClass("mq-math-mode"), i), this.__controller.staticMathTextareaEvents();
                                    };
                                })
                            )),
                            (MathQuill.StaticMathWithEditables = APIFnFor(
                                m(ee, function (i) {
                                    (i.init = function (t, i) {
                                        this.initRoot(we(), t.addClass("mq-math-mode"), i), this.__controller.delegateMouseEvents(), this.__controller.staticMathTextareaEvents();
                                    }),
                                        (i.withActiveNode = function (t) {
                                            var i = this.__controller.container.find(".mq-inner-editable .mq-root-block"),
                                                a = i.filter(".mq-last-focused"),
                                                o = a.length ? a.eq(0) : i.eq(0),
                                                s = M.byId[o.attr(r)];
                                            s && ((s.__controller = s.__controller || s.controller), t(s));
                                        }),
                                        (i.write = function (t) {
                                            return (
                                                this.withActiveNode(function (i) {
                                                    return ie.prototype.write.call(i, t);
                                                }),
                                                this
                                            );
                                        }),
                                        (i.cmd = function (t) {
                                            return (
                                                this.withActiveNode(function (i) {
                                                    return ie.prototype.cmd.call(i, t);
                                                }),
                                                this
                                            );
                                        }),
                                        (i.clear = function () {
                                            return (
                                                this.withActiveNode(function (t) {
                                                    ie.prototype.clear.call(t);
                                                }),
                                                this
                                            );
                                        }),
                                        (i.keystroke = function (t) {
                                            return (
                                                this.withActiveNode(function (i) {
                                                    return ie.prototype.keystroke.call(i, t);
                                                }),
                                                this
                                            );
                                        }),
                                        (i.editables = function () {
                                            return this.__controller.container
                                                .find(".mq-inner-editable .mq-root-block")
                                                .sort(function (t, i) {
                                                    return parseInt(q(t).attr("mathquill-block-id")) > parseInt(q(i).attr("mathquill-block-id")) ? 1 : -1;
                                                })
                                                .map(function () {
                                                    var i = M.byId[t(this).attr(r)],
                                                        a = t(this).hasClass("mq-focused");
                                                    return { latex: i.latex(), active: a };
                                                })
                                                .get();
                                        }),
                                        (i.typedText = function (t) {
                                            return (
                                                this.withActiveNode(function (i) {
                                                    return ie.prototype.typedText.call(i, t);
                                                }),
                                                this
                                            );
                                        });
                                })
                            ));
                        var Te = m(M, function (t, i) {
                                function fuseChildren(t) {
                                    t.jQ[0].normalize();
                                    var i = t.jQ.contents().filter(function (t, i) {
                                        return 3 === i.nodeType;
                                    })[0];
                                    i || (i = { data: "" });
                                    var r = Se(i.data);
                                    return r.jQadd(i), t.children().disown(), r.adopt(t, 0, 0);
                                }
                                (t.ctrlSeq = "\\text"),
                                    (t.replaces = function (t) {
                                        t instanceof j ? (this.replacedText = t.remove().jQ.text()) : "string" == typeof t && (this.replacedText = t);
                                    }),
                                    (t.jQadd = function (t) {
                                        i.jQadd.call(this, t), this.ends[v] && this.ends[v].jQadd(this.jQ[0].firstChild);
                                    }),
                                    (t.createLeftOf = function (t) {
                                        if (
                                            (i.createLeftOf.call(this, t),
                                            this[T].siblingCreated && this[T].siblingCreated(t.options, v),
                                            this[v].siblingCreated && this[v].siblingCreated(t.options, T),
                                            this.bubble("reflow"),
                                            t.insAtRightEnd(this),
                                            this.replacedText)
                                        )
                                            for (var r = 0; r < this.replacedText.length; r += 1) this.write(t, this.replacedText.charAt(r));
                                    }),
                                    (t.parser = function () {
                                        var t = this,
                                            i = le.string,
                                            r = le.regex;
                                        return le.optWhitespace
                                            .then(i("{"))
                                            .then(r(/^[^}]*/))
                                            .skip(i("}"))
                                            .map(function (i) {
                                                if (i.length && We.hasOwnProperty(i)) {
                                                    for (var r = we(), a = 0; a < i.length; a += 1) He(i.charAt(a)).adopt(r, r.ends[T], 0);
                                                    return r.children();
                                                }
                                                return Se(i).adopt(t, 0, 0), t;
                                            });
                                    }),
                                    (t.textContents = function () {
                                        return this.foldChildren("", function (t, i) {
                                            return t + i.text;
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
                                    (t.moveTowards = function (t, i) {
                                        i.insAtDirEnd(-t, this);
                                    }),
                                    (t.moveOutOf = function (t, i) {
                                        i.insDirOf(t, this);
                                    }),
                                    (t.unselectInto = t.moveTowards),
                                    (t.selectTowards = fe.prototype.selectTowards),
                                    (t.deleteTowards = fe.prototype.deleteTowards),
                                    (t.selectOutOf = function (t, i) {
                                        i.insDirOf(t, this);
                                    }),
                                    (t.deleteOutOf = function (t, i) {
                                        this.isEmpty() && i.insRightOf(this);
                                    }),
                                    (t.write = function (t, r) {
                                        if ((t.show().deleteSelection(), "$" !== r)) t[v] ? t[v].appendText(r) : Se(r).createLeftOf(t);
                                        else if (this.isEmpty()) t.insRightOf(this), ye("\\$", "$").createLeftOf(t);
                                        else if (t[T])
                                            if (t[v]) {
                                                var a = Te(),
                                                    o = this.ends[v];
                                                o.disown(), o.adopt(a, 0, 0), t.insLeftOf(this), i.createLeftOf.call(a, t);
                                            } else t.insLeftOf(this);
                                        else t.insRightOf(this);
                                    }),
                                    (t.seek = function (t, i) {
                                        i.hide();
                                        var r = fuseChildren(this),
                                            a = this.jQ.width() / this.text.length,
                                            o = Math.round((t - this.jQ.offset().left) / a);
                                        o <= 0 ? i.insAtLeftEnd(this) : o >= r.text.length ? i.insAtRightEnd(this) : i.insLeftOf(r.splitRight(o));
                                        for (var s = t - i.show().offset().left, u = s && s < 0 ? v : T, m = u; i[u] && s * m > 0; ) i[u].moveTowards(u, i), (m = s), (s = t - i.offset().left);
                                        if ((u * s < -u * m && i[-u].moveTowards(-u, i), i.anticursor)) {
                                            if (i.anticursor.parent === this) {
                                                var q = i[v] && i[v].text.length;
                                                if (this.anticursorPosition === q) i.anticursor = R.copy(i);
                                                else {
                                                    if (this.anticursorPosition < q) {
                                                        var M = i[v].splitRight(this.anticursorPosition);
                                                        i[v] = M;
                                                    } else M = i[T].splitRight(this.anticursorPosition - q);
                                                    i.anticursor = R(this, M[v], M);
                                                }
                                            }
                                        } else this.anticursorPosition = i[v] && i[v].text.length;
                                    }),
                                    (t.blur = function () {
                                        we.prototype.blur.call(this), fuseChildren(this);
                                    }),
                                    (t.focus = we.prototype.focus);
                            }),
                            Se = m(M, function (t, i) {
                                function endChar(t, i) {
                                    return i.charAt(t === v ? 0 : -1 + i.length);
                                }
                                (t.init = function (t) {
                                    i.init.call(this), (this.text = t);
                                }),
                                    (t.jQadd = function (t) {
                                        (this.dom = t), (this.jQ = q(t));
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
                                    (t.insTextAtDirEnd = function (t, i) {
                                        prayDirection(i), i === T ? this.appendText(t) : this.prependText(t);
                                    }),
                                    (t.splitRight = function (t) {
                                        var i = Se(this.text.slice(t)).adopt(this.parent, this, this[T]);
                                        return i.jQadd(this.dom.splitText(t)), (this.text = this.text.slice(0, t)), i;
                                    }),
                                    (t.moveTowards = function (t, i) {
                                        prayDirection(t);
                                        var r = endChar(-t, this.text),
                                            a = this[-t];
                                        return a ? a.insTextAtDirEnd(r, t) : Se(r).createDir(-t, i), this.deleteTowards(t, i);
                                    }),
                                    (t.latex = function () {
                                        return this.text;
                                    }),
                                    (t.deleteTowards = function (t, i) {
                                        this.text.length > 1
                                            ? t === T
                                                ? (this.dom.deleteData(0, 1), (this.text = this.text.slice(1)))
                                                : (this.dom.deleteData(-1 + this.text.length, 1), (this.text = this.text.slice(0, -1)))
                                            : (this.remove(), this.jQ.remove(), (i[t] = this[t]));
                                    }),
                                    (t.selectTowards = function (t, i) {
                                        prayDirection(t);
                                        var r = i.anticursor,
                                            a = endChar(-t, this.text);
                                        if (r[t] === this) {
                                            var o = Se(a).createDir(t, i);
                                            (r[t] = o), i.insDirOf(t, o);
                                        } else {
                                            var s = this[-t];
                                            if (s) s.insTextAtDirEnd(a, t);
                                            else (o = Se(a).createDir(-t, i)).jQ.insDirOf(-t, i.selection.jQ);
                                            1 === this.text.length && r[-t] === this && (r[-t] = this[-t]);
                                        }
                                        return this.deleteTowards(t, i);
                                    });
                            });
                        function makeTextBlock(t, i, r) {
                            return m(Te, { ctrlSeq: t, htmlTemplate: "<" + i + " " + r + ">&0</" + i + ">" });
                        }
                        (F.text = F.textnormal = F.textrm = F.textup = F.textmd = Te),
                            (F.em = F.italic = F.italics = F.emph = F.textit = F.textsl = makeTextBlock("\\textit", "i", 'class="mq-text-mode"')),
                            (F.strong = F.bold = F.textbf = makeTextBlock("\\textbf", "b", 'class="mq-text-mode"')),
                            (F.sf = F.textsf = makeTextBlock("\\textsf", "span", 'class="mq-sans-serif mq-text-mode"')),
                            (F.tt = F.texttt = makeTextBlock("\\texttt", "span", 'class="mq-monospace mq-text-mode"')),
                            (F.textsc = makeTextBlock("\\textsc", "span", 'style="font-variant:small-caps" class="mq-text-mode"')),
                            (F.uppercase = makeTextBlock("\\uppercase", "span", 'style="text-transform:uppercase" class="mq-text-mode"')),
                            (F.lowercase = makeTextBlock("\\lowercase", "span", 'style="text-transform:lowercase" class="mq-text-mode"')),
                            (F.ce = m(Te, function (t, i) {
                                function wrapDots(t) {
                                    return t.replace(/(&middot;)/g, '<span class="mq-bond-dot">$1</span>');
                                }
                                (t.bondHtml = { "-": "-", "=": "=", "#": "&#8801;", "...": wrapDots("&middot;&middot;&middot;"), "....": wrapDots("&middot;&middot;&middot;&middot;"), "->": "&#8594;", "<-": "&#8592;" }),
                                    (t.bond = null),
                                    (t.ctrlSeq = "\\ce"),
                                    (t.regex = /^(\\bond{([^{}]+?)})/i),
                                    (t.jQadd = function (t) {
                                        i.jQadd.call(this, t), this.bond && this.jQaddBond();
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
                                    (t.moveOutOf = function (t, i) {
                                        this.bond || this.parseEnteredText(t, i), i.insDirOf(t, this);
                                    }),
                                    (t.parseEnteredText = function (t, i) {
                                        var r = i[-t];
                                        if ((this.parseBond(this.textContents()), this.bond)) {
                                            for (; r instanceof Se; ) r = r.remove()[-t];
                                            (i[-t] = this), this.jQaddBond();
                                        }
                                    }),
                                    (t.parser = function () {
                                        var t = this,
                                            i = le.string,
                                            r = le.regex;
                                        return le.optWhitespace
                                            .then(i("{"))
                                            .then(r(this.regex))
                                            .skip(i("}"))
                                            .map(function (i) {
                                                return t.parseBond(i), t;
                                            });
                                    }),
                                    (t.moveTowards = be.prototype.moveTowards),
                                    (t.deleteTowards = be.prototype.deleteTowards),
                                    (t.seek = be.prototype.seek),
                                    (t.blur = we.prototype.blur);
                            }));
                        var qe = m(fe, function (t, i) {
                                (t.init = function (t) {
                                    i.init.call(this, "$"), (this.cursor = t);
                                }),
                                    (t.htmlTemplate = '<span class="mq-math-mode">&0</span>'),
                                    (t.createBlocks = function () {
                                        i.createBlocks.call(this),
                                            (this.ends[v].cursor = this.cursor),
                                            (this.ends[v].write = function (t, i) {
                                                "$" !== i
                                                    ? we.prototype.write.call(this, t, i)
                                                    : this.isEmpty()
                                                    ? (t.insRightOf(this.parent), this.parent.deleteTowards(dir, t), ye("\\$", "$").createLeftOf(t.show()))
                                                    : t[T]
                                                    ? t[v]
                                                        ? we.prototype.write.call(this, t, i)
                                                        : t.insLeftOf(this.parent)
                                                    : t.insRightOf(this.parent);
                                            });
                                    }),
                                    (t.latex = function () {
                                        return "$" + this.ends[v].latex() + "$";
                                    });
                            }),
                            Re = m(xe, function (t, i) {
                                (t.keystroke = function (t) {
                                    if ("Spacebar" !== t && "Shift-Spacebar" !== t) return i.keystroke.apply(this, arguments);
                                }),
                                    (t.write = function (t, i) {
                                        var r;
                                        (t.show().deleteSelection(), "$" === i) ? qe(t).createLeftOf(t) : ("<" === i ? (r = "&lt;") : ">" === i && (r = "&gt;"), ye(i, r).createLeftOf(t));
                                    });
                            });
                        MathQuill.TextField = APIFnFor(
                            m(ie, function (t) {
                                (t.init = function (t) {
                                    t.addClass("mq-editable-field mq-text-mode"), this.initRootAndEvents(Re(), t);
                                }),
                                    (t.latex = function (t) {
                                        return arguments.length > 0 ? (this.__controller.renderLatexText(t), this.__controller.blurred && this.__controller.cursor.hide().parent.blur(), this) : this.__controller.exportLatex();
                                    });
                            })
                        );
                        U["\\"] = m(fe, function (t, i) {
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
                                    i.createBlocks.call(this),
                                        (this.ends[v].focus = function () {
                                            return this.parent.jQ.addClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.removeClass("mq-empty"), this;
                                        }),
                                        (this.ends[v].blur = function () {
                                            return this.parent.jQ.removeClass("mq-hasCursor"), this.isEmpty() && this.parent.jQ.addClass("mq-empty"), this;
                                        }),
                                        (this.ends[v].write = function (t, i) {
                                            t.show().deleteSelection(), i.match(/[a-z]/i) ? ye(i).createLeftOf(t) : (this.parent.renderCommand(t), ("\\" === i && this.isEmpty()) || this.parent.parent.write(t, i));
                                        }),
                                        (this.ends[v].keystroke = function (t, r, a) {
                                            return "Tab" === t || "Enter" === t || "Spacebar" === t ? (this.parent.renderCommand(a.cursor), void r.preventDefault()) : i.keystroke.apply(this, arguments);
                                        });
                                }),
                                (t.createLeftOf = function (t) {
                                    if ((i.createLeftOf.call(this, t), this._replacedFragment)) {
                                        var r = this.jQ[0];
                                        this.jQ = this._replacedFragment.jQ
                                            .addClass("mq-blur")
                                            .bind("mousedown mousemove", function (t) {
                                                return q((t.target = r)).trigger(t), !1;
                                            })
                                            .insertBefore(this.jQ)
                                            .add(this.jQ);
                                    }
                                }),
                                (t.latex = function () {
                                    return "\\" + this.ends[v].latex() + " ";
                                }),
                                (t.renderCommand = function (t) {
                                    (this.jQ = this.jQ.last()), this.remove(), this[T] ? t.insLeftOf(this[T]) : t.insAtRightEnd(this.parent);
                                    var i = this.ends[v].latex();
                                    i || (i = " ");
                                    var r = F[i] || Pt[i];
                                    r
                                        ? ((r = r(i)), this._replacedFragment && r.replaces(this._replacedFragment), r.createLeftOf(t))
                                        : ((r = Te()).replaces(i), r.createLeftOf(t), t.insRightOf(r), this._replacedFragment && this._replacedFragment.remove());
                                });
                        });
                        (F["∉"] = F.notin = bind(_e, "\\notin ", "&#8713;")),
                            (F["≅"] = F.cong = bind(_e, "\\cong ", "&#8773;")),
                            (F["≡"] = F.equiv = bind(_e, "\\equiv ", "&#8801;")),
                            (F["⊕"] = F.oplus = bind(_e, "\\oplus ", "&#8853;")),
                            (F["⊗"] = F.otimes = bind(_e, "\\otimes ", "&#8855;")),
                            (F["≠"] = F.ne = F.neq = bind(_e, "\\ne ", "&ne;")),
                            (F.ast = F.star = F.loast = F.lowast = bind(_e, "\\ast ", "&lowast;")),
                            (F.therefor = F.therefore = bind(_e, "\\therefore ", "&there4;")),
                            (F.cuz = F.because = bind(_e, "\\because ", "&#8757;")),
                            (F.prop = F.propto = bind(_e, "\\propto ", "&prop;")),
                            (F["≈"] = F.asymp = F.approx = bind(_e, "\\approx ", "&asymp;")),
                            (F.isin = F.in = bind(_e, "\\in ", "&isin;")),
                            (F.ni = F.contains = bind(_e, "\\ni ", "&ni;")),
                            (F.notni = F.niton = F.notcontains = F.doesnotcontain = V["\\not\\ni"] = bind(_e, "\\not\\ni ", "&#8716;")),
                            (F.sub = F.subset = bind(_e, "\\subset ", "&sub;")),
                            (F.sup = F.supset = F.superset = bind(_e, "\\supset ", "&sup;")),
                            (F.nsub = F.notsub = F.nsubset = F.notsubset = V["\\not\\subset"] = bind(_e, "\\not\\subset ", "&#8836;")),
                            (F.nsup = F.notsup = F.nsupset = F.notsupset = F.nsuperset = F.notsuperset = V["\\not\\supset"] = bind(_e, "\\not\\supset ", "&#8837;")),
                            (F.sube = F.subeq = F.subsete = F.subseteq = bind(_e, "\\subseteq ", "&sube;")),
                            (F.supe = F.supeq = F.supsete = F.supseteq = F.supersete = F.superseteq = bind(_e, "\\supseteq ", "&supe;")),
                            (F.nsube = F.nsubeq = F.notsube = F.notsubeq = F.nsubsete = F.nsubseteq = F.notsubsete = F.notsubseteq = V["\\not\\subseteq"] = bind(_e, "\\not\\subseteq ", "&#8840;")),
                            (F.nsupe = F.nsupeq = F.notsupe = F.notsupeq = F.nsupsete = F.nsupseteq = F.notsupsete = F.notsupseteq = F.nsupersete = F.nsuperseteq = F.notsupersete = F.notsuperseteq = V["\\not\\supseteq"] = bind(
                                _e,
                                "\\not\\supseteq ",
                                "&#8841;"
                            )),
                            (F.N = F.naturals = F.Naturals = bind(ye, "\\mathbb{N}", "&#8469;")),
                            (F.P = F.primes = F.Primes = F.projective = F.Projective = F.probability = F.Probability = bind(ye, "\\mathbb{P}", "&#8473;")),
                            (F.Z = F.integers = F.Integers = bind(ye, "\\mathbb{Z}", "&#8484;")),
                            (F.Q = F.rationals = F.Rationals = bind(ye, "\\mathbb{Q}", "&#8474;")),
                            (F.R = F.reals = F.Reals = bind(ye, "\\mathbb{R}", "&#8477;")),
                            (F.C = F.complex = F.Complex = F.complexes = F.Complexes = F.complexplane = F.Complexplane = F.ComplexPlane = bind(ye, "\\mathbb{C}", "&#8450;")),
                            (F.H = F.Hamiltonian = F.quaternions = F.Quaternions = bind(ye, "\\mathbb{H}", "&#8461;")),
                            (F.quad = F.emsp = bind(ye, "\\quad ", "    ")),
                            (F.qquad = bind(ye, "\\qquad ", "        "));
                        var Pe = m(be, function (t, i) {
                            t.init = function (t, r) {
                                i.init.call(this, t, '<span class="mq-longarrow">' + r + "</span>");
                            };
                        });
                        (F.diamond = bind(ye, "\\diamond ", "&#9671;")),
                            (F.bigtriangleup = bind(ye, "\\bigtriangleup ", "&#9651;")),
                            (F.ominus = bind(ye, "\\ominus ", "&#8854;")),
                            (F.uplus = bind(ye, "\\uplus ", "&#8846;")),
                            (F.bigtriangledown = bind(ye, "\\bigtriangledown ", "&#9661;")),
                            (F.sqcap = bind(ye, "\\sqcap ", "&#8851;")),
                            (F.triangleleft = bind(ye, "\\triangleleft ", "&#8882;")),
                            (F.sqcup = bind(ye, "\\sqcup ", "&#8852;")),
                            (F.triangleright = bind(ye, "\\triangleright ", "&#8883;")),
                            (F.odot = bind(ye, "\\odot ", "&#8857;")),
                            (F.bigcirc = bind(ye, "\\bigcirc ", "&#9711;")),
                            (F.dagger = bind(ye, "\\dagger ", "&#0134;")),
                            (F.ddagger = bind(ye, "\\ddagger ", "&#135;")),
                            (F.wr = bind(ye, "\\wr ", "&#8768;")),
                            (F.amalg = bind(ye, "\\amalg ", "&#8720;")),
                            (F.models = bind(ye, "\\models ", "&#8872;")),
                            (F.prec = bind(ye, "\\prec ", "&#8826;")),
                            (F.succ = bind(ye, "\\succ ", "&#8827;")),
                            (F.preceq = bind(ye, "\\preceq ", "&#8828;")),
                            (F.succeq = bind(ye, "\\succeq ", "&#8829;")),
                            (F.simeq = bind(ye, "\\simeq ", "&#8771;")),
                            (F.mid = bind(ye, "\\mid ", "&#8739;")),
                            (F.ll = bind(ye, "\\ll ", "&#8810;")),
                            (F.gg = bind(ye, "\\gg ", "&#8811;")),
                            (F.parallel = bind(ye, "\\parallel ", "&#8741;")),
                            (F.nparallel = bind(ye, "\\nparallel ", "&#8742;")),
                            (F.bowtie = bind(ye, "\\bowtie ", "&#8904;")),
                            (F.sqsubset = bind(ye, "\\sqsubset ", "&#8847;")),
                            (F.sqsupset = bind(ye, "\\sqsupset ", "&#8848;")),
                            (F.smile = bind(ye, "\\smile ", "&#8995;")),
                            (F.sqsubseteq = bind(ye, "\\sqsubseteq ", "&#8849;")),
                            (F.sqsupseteq = bind(ye, "\\sqsupseteq ", "&#8850;")),
                            (F.doteq = bind(ye, "\\doteq ", "&#8784;")),
                            (F.frown = bind(ye, "\\frown ", "&#8994;")),
                            (F.vdash = bind(ye, "\\vdash ", "&#8870;")),
                            (F.dashv = bind(ye, "\\dashv ", "&#8867;")),
                            (F.longleftarrow = bind(Pe, "\\longleftarrow ", '&larr;<span class="mq-arrow-tail mq-tail-right">&larr;</span>')),
                            (F.longrightarrow = bind(Pe, "\\longrightarrow ", '<span class="mq-arrow-tail">&larr;</span>&rarr;')),
                            (F.Longleftarrow = bind(Pe, "\\Longleftarrow ", '&lArr;<span class="mq-arrow-tail mq-tail-right">&lArr;</span>')),
                            (F.Longrightarrow = bind(Pe, "\\Longrightarrow ", '<span class="mq-arrow-tail">&lArr;</span>&rArr;')),
                            (F.longleftrightarrow = bind(Pe, "\\longleftrightarrow ", '<span class="mq-arrow-mirror">&larr;&rarr;</span>')),
                            (F.Longleftrightarrow = bind(Pe, "\\Longleftrightarrow ", '<span class="mq-arrow-mirror">&lArr;&rArr;</span>')),
                            (F.updownarrow = bind(ye, "\\updownarrow ", "&#8597;")),
                            (F.Updownarrow = bind(ye, "\\Updownarrow ", "&#8661;")),
                            (F.mapsto = bind(ye, "\\mapsto ", "&#8614;")),
                            (F.nearrow = bind(ye, "\\nearrow ", "&#8599;")),
                            (F.hookleftarrow = bind(ye, "\\hookleftarrow ", "&#8617;")),
                            (F.hookrightarrow = bind(ye, "\\hookrightarrow ", "&#8618;")),
                            (F.searrow = bind(ye, "\\searrow ", "&#8600;")),
                            (F.leftharpoonup = bind(ye, "\\leftharpoonup ", "&#8636;")),
                            (F.rightharpoonup = bind(ye, "\\rightharpoonup ", "&#8640;")),
                            (F.swarrow = bind(ye, "\\swarrow ", "&#8601;")),
                            (F.leftharpoondown = bind(ye, "\\leftharpoondown ", "&#8637;")),
                            (F.rightharpoondown = bind(ye, "\\rightharpoondown ", "&#8641;")),
                            (F.rightleftharpoons = bind(ye, "\\rightleftharpoons ", "&#8651;")),
                            (F.leftrightharpoons = bind(ye, "\\leftrightharpoons ", "&#8652;")),
                            (F.nwarrow = bind(ye, "\\nwarrow ", "&#8598;")),
                            (F.ldots = bind(ye, "\\ldots ", "&#8230;")),
                            (F.cdots = bind(ye, "\\cdots ", "&#8943;")),
                            (F.vdots = bind(ye, "\\vdots ", "&#8942;")),
                            (F.ddots = bind(ye, "\\ddots ", "&#8945;")),
                            (F.surd = bind(ye, "\\surd ", "&#8730;")),
                            (F.triangle = bind(ye, "\\triangle ", "&#9651;")),
                            (F.ell = bind(ye, "\\ell ", "&#8467;")),
                            (F.top = bind(ye, "\\top ", "&#8868;")),
                            (F.flat = bind(ye, "\\flat ", "&#9837;")),
                            (F.natural = bind(ye, "\\natural ", "&#9838;")),
                            (F.sharp = bind(ye, "\\sharp ", "&#9839;")),
                            (F.wp = bind(ye, "\\wp ", "&#8472;")),
                            (F.bot = bind(ye, "\\bot ", "&#8869;")),
                            (F.clubsuit = bind(ye, "\\clubsuit ", "&#9827;")),
                            (F.diamondsuit = bind(ye, "\\diamondsuit ", "&#9826;")),
                            (F.heartsuit = bind(ye, "\\heartsuit ", "&#9825;")),
                            (F.spadesuit = bind(ye, "\\spadesuit ", "&#9824;")),
                            (F.circledot = bind(ye, "\\circledot ", "&#8857;")),
                            (F.middot = bind(ye, "\\middot ", "&middot;")),
                            (F.dottedsquare = bind(ye, "\\dottedsquare ", "&#11034;")),
                            (F.square = bind(ye, "\\square ", "&#11036;")),
                            (F.rectangle = bind(ye, "\\rectangle ", "&#9647;")),
                            (F.oint = bind(ye, "\\oint ", "&#8750;")),
                            (F.bigcap = bind(ye, "\\bigcap ", "&#8745;")),
                            (F.bigcup = bind(ye, "\\bigcup ", "&#8746;")),
                            (F.bigsqcup = bind(ye, "\\bigsqcup ", "&#8852;")),
                            (F.bigvee = bind(ye, "\\bigvee ", "&#8744;")),
                            (F.bigwedge = bind(ye, "\\bigwedge ", "&#8743;")),
                            (F.bigodot = bind(ye, "\\bigodot ", "&#8857;")),
                            (F.bigotimes = bind(ye, "\\bigotimes ", "&#8855;")),
                            (F.bigoplus = bind(ye, "\\bigoplus ", "&#8853;")),
                            (F.biguplus = bind(ye, "\\biguplus ", "&#8846;")),
                            (F.lfloor = bind(ye, "\\lfloor ", "&#8970;")),
                            (F.rfloor = bind(ye, "\\rfloor ", "&#8971;")),
                            (F.lceil = bind(ye, "\\lceil ", "&#8968;")),
                            (F.rceil = bind(ye, "\\rceil ", "&#8969;")),
                            (F.opencurlybrace = F.lbrace = bind(ye, "\\lbrace ", "{")),
                            (F.closecurlybrace = F.rbrace = bind(ye, "\\rbrace ", "}")),
                            (F.mug = bind(ye, "\\mug ", "&micro;g")),
                            (F.mus = bind(ye, "\\mus ", "&micro;s")),
                            (F.mum = bind(ye, "\\mum ", "&micro;m")),
                            (F.muL = bind(ye, "\\muL ", "&micro;L")),
                            Y.open(function (t) {
                                this.onNotify(function (t) {
                                    "move" === t && this[T] && this[T].movingLeftOf && this[T].movingLeftOf(this);
                                });
                            });
                        var Ie = m(be, function (t, i) {
                            t.moveTowards = function (t, r) {
                                t === T && this[T] instanceof wt ? r.insAtDirEnd(v, this[T].ends[v]) : i.moveTowards.apply(this, arguments);
                            };
                        });
                        (F["∫"] = F.int = F.integral = bind(Ie, "\\int ", "<big>&int;</big>")),
                            (F.caret = bind(ye, "\\text{^}", "^")),
                            (F.underscore = bind(ye, "\\_", "_")),
                            (F.slash = bind(ye, "/")),
                            (F.vert = bind(ye, "|")),
                            (F.perp = F.perpendicular = bind(ye, "\\perp ", "&perp;")),
                            (F.nabla = F.del = bind(ye, "\\nabla ", "&nabla;")),
                            (F.hbar = bind(ye, "\\hbar ", "&#8463;")),
                            (F.AA = F.Angstrom = F.angstrom = bind(ye, "\\text\\AA ", "&#8491;")),
                            (F.ring = F.circ = F.circle = bind(ye, "\\circ ", "&#8728;")),
                            (F.bull = F.bullet = bind(ye, "\\bullet ", "&bull;")),
                            (F.setminus = F.smallsetminus = bind(ye, "\\setminus ", "&#8726;")),
                            (F.not = F["¬"] = F.neg = bind(ye, "\\neg ", "&not;")),
                            (F["…"] = F.dots = F.ellip = F.hellip = F.ellipsis = F.hellipsis = bind(ye, "\\dots ", "&hellip;")),
                            (F.converges = F.darr = F.dnarr = F.dnarrow = F.downarrow = bind(ye, "\\downarrow ", "&darr;")),
                            (F.dArr = F.dnArr = F.dnArrow = F.Downarrow = bind(ye, "\\Downarrow ", "&dArr;")),
                            (F.diverges = F.uarr = F.uparrow = bind(ye, "\\uparrow ", "&uarr;")),
                            (F.uArr = F.Uparrow = bind(ye, "\\Uparrow ", "&uArr;")),
                            (F.to = bind(_e, "\\to ", "&rarr;")),
                            (F.rarr = F.rightarrow = bind(ye, "\\rightarrow ", "&rarr;")),
                            (F.implies = bind(_e, "\\Rightarrow ", "&rArr;")),
                            (F.rArr = F.Rightarrow = bind(ye, "\\Rightarrow ", "&rArr;")),
                            (F.gets = bind(_e, "\\gets ", "&larr;")),
                            (F.larr = F.leftarrow = bind(ye, "\\leftarrow ", "&larr;")),
                            (F.impliedby = bind(_e, "\\Leftarrow ", "&lArr;")),
                            (F.lArr = F.Leftarrow = bind(ye, "\\Leftarrow ", "&lArr;")),
                            (F.harr = F.lrarr = F.leftrightarrow = bind(ye, "\\leftrightarrow ", "&harr;")),
                            (F.iff = bind(_e, "\\Leftrightarrow ", "&hArr;")),
                            (F.hArr = F.lrArr = F.Leftrightarrow = bind(ye, "\\Leftrightarrow ", "&hArr;")),
                            (F.Re = F.Real = F.real = bind(ye, "\\Re ", "&real;")),
                            (F.Im = F.imag = F.image = F.imagin = F.imaginary = F.Imaginary = bind(ye, "\\Im ", "&image;")),
                            (F.part = F.partial = bind(ye, "\\partial ", "&part;")),
                            (F.infty = F.infin = F.infinity = bind(ye, "\\infty ", "&infin;")),
                            (F.alef = F.alefsym = F.aleph = F.alephsym = bind(ye, "\\aleph ", "&alefsym;")),
                            (F.xist = F.xists = F.exist = F.exists = bind(ye, "\\exists ", "&exist;")),
                            (F.and = F.land = F.wedge = bind(ye, "\\wedge ", "&and;")),
                            (F.or = F.lor = F.vee = bind(ye, "\\vee ", "&or;")),
                            (F.o = F.O = F.empty = F.emptyset = F.oslash = F.Oslash = F.nothing = F.varnothing = bind(_e, "\\varnothing ", "&empty;")),
                            (F.cup = F.union = bind(_e, "\\cup ", "&cup;")),
                            (F.cap = F.intersect = F.intersection = bind(_e, "\\cap ", "&cap;")),
                            (F.deg = F.degree = bind(ye, "\\degree ", "&deg;")),
                            (F.ang = F.angle = bind(ye, "\\angle ", "&ang;")),
                            (F.measuredangle = bind(ye, "\\measuredangle ", "m&ang;"));
                        var ze = m(ye, function (t, i) {
                                t.createLeftOf = function (t) {
                                    t.options.autoSubscriptNumerals && t.parent !== t.parent.parent.sub && ((t[v] instanceof Ve && !1 !== t[v].isItalic) || (t[v] instanceof wt && t[v][v] instanceof Ve && !1 !== t[v][v].isItalic))
                                        ? (F._().createLeftOf(t), i.createLeftOf.call(this, t), t.insRightOf(t.parent.parent))
                                        : i.createLeftOf.call(this, t);
                                };
                            }),
                            Ve = m(be, function (t, i) {
                                (t.init = function (t, r) {
                                    i.init.call(this, t, "<var>" + (r || t) + "</var>");
                                }),
                                    (t.text = function () {
                                        var t = this.ctrlSeq;
                                        return !this[v] || this[v] instanceof Ve || this[v] instanceof _e || (t = "*" + t), !this[T] || this[T] instanceof _e || "^" === this[T].ctrlSeq || (t += "*"), t;
                                    });
                            });
                        (X.p.autoCommands = { _maxLength: 0 }),
                            (Z.autoCommands = function (t) {
                                if (!/^[a-z]+(?: [a-z]+)*$/i.test(t)) throw '"' + t + '" not a space-delimited list of only letters';
                                for (var i = t.split(" "), r = {}, a = 0, s = 0; s < i.length; s += 1) {
                                    var u = i[s];
                                    if (u.length < 2) throw 'autocommand "' + u + '" not minimum length of 2';
                                    if (F[u] === Xe) throw '"' + u + '" is a built-in operator name';
                                    (r[u] = 1), (a = o(a, u.length));
                                }
                                return (r._maxLength = a), r;
                            });
                        var He = m(Ve, function (t, i) {
                                function nonOperatorSymbol(t) {
                                    return t instanceof be && !(t instanceof _e);
                                }
                                (t.init = function (t) {
                                    return i.init.call(this, (this.letter = t));
                                }),
                                    (t.createLeftOf = function (t) {
                                        var r = t.options.autoCommands,
                                            a = r._maxLength;
                                        if (a > 0) {
                                            for (var o = this.letter, s = t[v], u = 1; s instanceof He && u < a; ) (o = s.letter + o), (s = s[v]), (u += 1);
                                            for (; o.length; ) {
                                                if (r.hasOwnProperty(o)) {
                                                    if (((s = t[v]), o.length > 1)) {
                                                        for (u = 2; u < o.length; u += 1, s = s[v]);
                                                        j(s, t[v]).remove(), (t[v] = s[v]);
                                                    }
                                                    return F[o](o).createLeftOf(t);
                                                }
                                                o = o.slice(1);
                                            }
                                        }
                                        i.createLeftOf.apply(this, arguments);
                                    }),
                                    (t.italicize = function (t) {
                                        return (this.isItalic = t), this.jQ.toggleClass("mq-operator-name", !t), this;
                                    }),
                                    (t.finalizeTree = t.siblingDeleted = t.siblingCreated = function (t, i) {
                                        (i !== v && this[T] instanceof He) || this.autoUnItalicize(t);
                                    }),
                                    (t.autoUnItalicize = function (t) {
                                        var i = t.autoOperatorNames;
                                        if (0 !== i._maxLength) {
                                            for (var r = this.letter, o = this[v]; o instanceof He; o = o[v]) r = o.letter + r;
                                            for (var s = this[T]; s instanceof He; s = s[T]) r += s.letter;
                                            j(o[T] || this.parent.ends[v], s[v] || this.parent.ends[T]).each(function (t) {
                                                t.italicize(!0).jQ.removeClass("mq-first mq-last"), (t.ctrlSeq = t.letter);
                                            });
                                            e: for (var u = 0, m = o[T] || this.parent.ends[v]; u < r.length; u += 1, m = m[T])
                                                for (var q = a(i._maxLength, r.length - u); q > 0; q -= 1) {
                                                    var R = r.slice(u, u + q);
                                                    if (i.hasOwnProperty(R)) {
                                                        for (var M = 0, F = m; M < q; M += 1, F = F[T]) {
                                                            F.italicize(!1);
                                                            var U = F;
                                                        }
                                                        var V = Qe.hasOwnProperty(R);
                                                        (m.ctrlSeq = (V ? "\\" : "\\operatorname{") + m.ctrlSeq),
                                                            (U.ctrlSeq += V ? " " : "}"),
                                                            Ye.hasOwnProperty(R) && U[v][v][v].jQ.addClass("mq-last"),
                                                            nonOperatorSymbol(m[v]) && m.jQ.addClass("mq-first"),
                                                            nonOperatorSymbol(U[T]) && U.jQ.addClass("mq-last"),
                                                            (u += q - 1),
                                                            (m = U);
                                                        continue e;
                                                    }
                                                    if (We.hasOwnProperty(R)) {
                                                        for (M = 0, F = m; M < q; M += 1, F = F[T]) {
                                                            F.italicize(!1);
                                                            U = F;
                                                        }
                                                        (m.ctrlSeq = "\\text{" + m.ctrlSeq),
                                                            (U.ctrlSeq += "}"),
                                                            Ye.hasOwnProperty(R) && U[v][v][v].jQ.addClass("mq-last"),
                                                            nonOperatorSymbol(m[v]) && m.jQ.addClass("mq-first"),
                                                            nonOperatorSymbol(U[T]) && U.jQ.addClass("mq-last"),
                                                            (u += q - 1),
                                                            (m = U);
                                                        continue e;
                                                    }
                                                }
                                        }
                                    });
                            }),
                            Qe = {},
                            We = {},
                            Ye = { limsup: 1, liminf: 1, projlim: 1, injlim: 1 };
                        !(function () {
                            for (var t = (X.p.autoOperatorNames = { _maxLength: 9 }), i = "arg deg det dim exp gcd hom inf ker lg ln log max min sup limsup liminf injlim projlim Pr".split(" "), r = 0; r < i.length; r += 1)
                                Qe[i[r]] = t[i[r]] = 1;
                            var a = "sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" ");
                            for (r = 0; r < a.length; r += 1) Qe[a[r]] = 1;
                            var o = "sin cos tan sec cosec csc cotan cot ctg".split(" ");
                            for (r = 0; r < o.length; r += 1) t[o[r]] = t["arc" + o[r]] = t[o[r] + "h"] = t["ar" + o[r] + "h"] = t["arc" + o[r] + "h"] = 1;
                        })(),
                            (Z.autoOperatorNames = function (t) {
                                if (!/^[a-z]+(?: [a-z]+)*$/i.test(t)) throw '"' + t + '" not a space-delimited list of only letters';
                                for (var i = t.split(" "), r = {}, a = 0, s = 0; s < i.length; s += 1) {
                                    var u = i[s];
                                    if (u.length < 2) throw '"' + u + '" not minimum length of 2';
                                    (r[u] = 1), (a = o(a, u.length));
                                }
                                return (r._maxLength = a), r;
                            });
                        var Xe = m(be, function (t, i) {
                            (t.init = function (t) {
                                this.ctrlSeq = t;
                            }),
                                (t.createLeftOf = function (t) {
                                    for (var i = this.ctrlSeq, r = 0; r < i.length; r += 1) He(i.charAt(r)).createLeftOf(t);
                                }),
                                (t.parser = function () {
                                    for (var t = this.ctrlSeq, i = we(), r = 0; r < t.length; r += 1) He(t.charAt(r)).adopt(i, i.ends[T], 0);
                                    return le.succeed(i.children());
                                });
                        });
                        for (var et in Qe) Qe.hasOwnProperty(et) && (F[et] = Xe);
                        (F.operatorname = m(fe, function (t) {
                            (t.createLeftOf = noop),
                                (t.numBlocks = function () {
                                    return 1;
                                }),
                                (t.parser = function () {
                                    return de.block.map(function (t) {
                                        return t.children();
                                    });
                                });
                        })),
                            (F.f = m(He, function (t, i) {
                                (t.init = function () {
                                    be.p.init.call(this, (this.letter = "f"), '<var class="mq-f">f</var>');
                                }),
                                    (t.italicize = function (t) {
                                        return this.jQ.html("f").toggleClass("mq-f", t), i.italicize.apply(this, arguments);
                                    });
                            })),
                            (F[" "] = F.space = bind(ye, "\\ ", " ")),
                            (F["'"] = F.prime = bind(ye, "'", "&prime;")),
                            (F['"'] = F.doublePrime = bind(ye, '"', "&Prime;")),
                            (F.backslash = bind(ye, "\\backslash ", "\\")),
                            U["\\"] || (U["\\"] = F.backslash),
                            (F.$ = bind(ye, "\\$", "$"));
                        var tt = m(be, function (t, i) {
                            t.init = function (t, r) {
                                i.init.call(this, t, '<span class="mq-nonSymbola">' + (r || t) + "</span>");
                            };
                        });
                        (F["@"] = tt),
                            (F["&"] = bind(tt, "\\&", "&amp;")),
                            (F["%"] = bind(tt, "\\%", "%")),
                            (F.alpha = F.beta = F.gamma = F.delta = F.zeta = F.eta = F.theta = F.iota = F.kappa = F.mu = F.nu = F.xi = F.rho = F.sigma = F.tau = F.chi = F.psi = F.omega = m(Ve, function (t, i) {
                                t.init = function (t) {
                                    i.init.call(this, "\\" + t + " ", "&" + t + ";");
                                };
                            })),
                            (F.phi = bind(Ve, "\\phi ", "&#981;")),
                            (F.phiv = F.varphi = bind(Ve, "\\varphi ", "&phi;")),
                            (F.epsilon = bind(Ve, "\\epsilon ", "&#1013;")),
                            (F.epsiv = F.varepsilon = bind(Ve, "\\varepsilon ", "&epsilon;")),
                            (F.piv = F.varpi = bind(Ve, "\\varpi ", "&piv;")),
                            (F.sigmaf = F.sigmav = F.varsigma = bind(Ve, "\\varsigma ", "&sigmaf;")),
                            (F.thetav = F.vartheta = F.thetasym = bind(Ve, "\\vartheta ", "&thetasym;")),
                            (F.upsilon = F.upsi = bind(Ve, "\\upsilon ", "&upsilon;")),
                            (F.gammad = F.Gammad = F.digamma = bind(Ve, "\\digamma ", "&#989;")),
                            (F.kappav = F.varkappa = bind(Ve, "\\varkappa ", "&#1008;")),
                            (F.rhov = F.varrho = bind(Ve, "\\varrho ", "&#1009;")),
                            (F.pi = F["π"] = bind(tt, "\\pi ", "&pi;")),
                            (F.lambda = bind(tt, "\\lambda ", "&lambda;")),
                            (F.Upsilon = F.Upsi = F.upsih = F.Upsih = bind(be, "\\Upsilon ", '<var style="font-family: serif">&upsih;</var>')),
                            (F.Gamma = F.Delta = F.Theta = F.Lambda = F.Xi = F.Pi = F.Sigma = F.Phi = F.Psi = F.Omega = m(ye, function (t, i) {
                                t.init = function (t) {
                                    i.init.call(this, "\\" + t + " ", "&" + t + ";");
                                };
                            })),
                            (F.forall = F["∀"] = bind(ye, "\\forall ", "&#8704;"));
                        var nt = m(fe, function (t) {
                            (t.init = function (t) {
                                this.latex = t;
                            }),
                                (t.createLeftOf = function (t) {
                                    var i = de.parse(this.latex);
                                    i.children().adopt(t.parent, t[v], t[T]),
                                        (t[v] = i.ends[T]),
                                        i.jQize().insertBefore(t.jQ),
                                        i.finalizeInsert(t.options, t),
                                        i.ends[T][T].siblingCreated && i.ends[T][T].siblingCreated(t.options, v),
                                        i.ends[v][v].siblingCreated && i.ends[v][v].siblingCreated(t.options, T),
                                        t.parent.bubble("reflow");
                                }),
                                (t.parser = function () {
                                    var t = de.parse(this.latex).children();
                                    return le.succeed(t);
                                });
                        });
                        (F["¹"] = bind(nt, "^1")), (F["²"] = bind(nt, "^2")), (F["³"] = bind(nt, "^3")), (F["¼"] = bind(nt, "\\frac14")), (F["½"] = bind(nt, "\\frac12")), (F["¾"] = bind(nt, "\\frac34"));
                        var it = m(_e, function (t) {
                            (t.init = ye.prototype.init),
                                (t.contactWeld = t.siblingCreated = t.siblingDeleted = function (t, i) {
                                    if (i !== T) return (this.jQ[0].className = !this[v] || this[v] instanceof _e ? "" : "mq-binary-operator"), this;
                                });
                        });
                        (F["+"] = bind(it, "+", "+")),
                            (F["–"] = F["-"] = bind(it, "-", "&minus;")),
                            (F["±"] = F.pm = F.plusmn = F.plusminus = bind(it, "\\pm ", "&plusmn;")),
                            (F.mp = F.mnplus = F.minusplus = bind(it, "\\mp ", "&#8723;")),
                            (U["*"] = F.sdot = F.cdot = F.cdotp = bind(_e, "\\cdot ", "&middot;"));
                        var rt = m(_e, function (t, i) {
                                (t.init = function (t, r) {
                                    (this.data = t), (this.strict = r);
                                    var a = r ? "Strict" : "";
                                    i.init.call(this, t["ctrlSeq" + a], t["html" + a], t["text" + a]);
                                }),
                                    (t.swap = function (t) {
                                        this.strict = t;
                                        var i = t ? "Strict" : "";
                                        (this.ctrlSeq = this.data["ctrlSeq" + i]), this.jQ.html(this.data["html" + i]), (this.textTemplate = [this.data["text" + i]]);
                                    }),
                                    (t.deleteTowards = function (t, r) {
                                        t !== v || this.strict ? i.deleteTowards.apply(this, arguments) : this.swap(!0);
                                    });
                            }),
                            at = { ctrlSeq: "\\le ", html: "&le;", text: "≤", ctrlSeqStrict: "<", htmlStrict: "&lt;", textStrict: "<" },
                            ot = { ctrlSeq: "\\ge ", html: "&ge;", text: "≥", ctrlSeqStrict: ">", htmlStrict: "&gt;", textStrict: ">" };
                        (F["<"] = F.lt = bind(rt, at, !0)), (F[">"] = F.gt = bind(rt, ot, !0)), (F["≤"] = F.le = F.leq = bind(rt, at, !1)), (F["≥"] = F.ge = F.geq = bind(rt, ot, !1));
                        var st = m(_e, function (t, i) {
                            (t.init = function () {
                                i.init.call(this, "=", "=");
                            }),
                                (t.createLeftOf = function (t) {
                                    t[v] instanceof rt && t[v].strict ? t[v].swap(!1) : i.createLeftOf.apply(this, arguments);
                                });
                        });
                        (F["="] = st),
                            (F["×"] = F.times = bind(_e, "\\times ", "&times;", "[x]")),
                            (F["÷"] = F.div = F.divide = F.divides = bind(_e, "\\div ", "&divide;", "[/]")),
                            (U["~"] = F.sim = bind(_e, "\\sim ", "~", "~")),
                            (F.complement = F["∁"] = bind(ye, "\\complement ", "&#8705;")),
                            (F.nexists = F["∄"] = bind(ye, "\\nexists ", "&#8708;")),
                            (F.sphericalangle = F["∢"] = bind(ye, "\\sphericalangle ", "&#8738;")),
                            (F.iint = F["∬"] = bind(ye, "\\iint ", "&#8748;")),
                            (F.iiint = F["∭"] = bind(ye, "\\iiint ", "&#8749;")),
                            (F.oiint = F["∯"] = bind(ye, "\\oiint ", "&#8751;")),
                            (F.oiiint = F["∰"] = bind(ye, "\\oiiint ", "&#8752;")),
                            (F.backsim = F["∽"] = bind(ye, "\\backsim ", "&#8765;")),
                            (F.backsimeq = F["⋍"] = bind(ye, "\\backsimeq ", "&#8909;")),
                            (F.eqsim = F["≂"] = bind(ye, "\\eqsim ", "&#8770;")),
                            (F.ncong = F["≇"] = bind(ye, "\\ncong ", "&#8775;")),
                            (F.approxeq = F["≊"] = bind(ye, "\\approxeq ", "&#8778;")),
                            (F.bumpeq = F["≏"] = bind(ye, "\\bumpeq ", "&#8783;")),
                            (F.Bumpeq = F["≎"] = bind(ye, "\\Bumpeq ", "&#8782;")),
                            (F.doteqdot = F["≑"] = bind(ye, "\\doteqdot ", "&#8785;")),
                            (F.fallingdotseq = F["≒"] = bind(ye, "\\fallingdotseq ", "&#8786;")),
                            (F.risingdotseq = F["≓"] = bind(ye, "\\risingdotseq ", "&#8787;")),
                            (F.eqcirc = F["≖"] = bind(ye, "\\eqcirc ", "&#8790;")),
                            (F.circeq = F["≗"] = bind(ye, "\\circeq ", "&#8791;")),
                            (F.triangleq = F["≜"] = bind(ye, "\\triangleq ", "&#8796;")),
                            (F.leqq = F["≦"] = bind(ye, "\\leqq ", "&#8806;")),
                            (F.geqq = F["≧"] = bind(ye, "\\geqq ", "&#8807;")),
                            (F.lneqq = F["≨"] = bind(ye, "\\lneqq ", "&#8808;")),
                            (F.gneqq = F["≩"] = bind(ye, "\\gneqq ", "&#8809;")),
                            (F.between = F["≬"] = bind(ye, "\\between ", "&#8812;")),
                            (F.nleq = F["≰"] = bind(ye, "\\nleq ", "&#8816;")),
                            (F.ngeq = F["≱"] = bind(ye, "\\ngeq ", "&#8817;")),
                            (F.lesssim = F["≲"] = bind(ye, "\\lesssim ", "&#8818;")),
                            (F.gtrsim = F["≳"] = bind(ye, "\\gtrsim ", "&#8819;")),
                            (F.lessgtr = F["≶"] = bind(ye, "\\lessgtr ", "&#8822;")),
                            (F.gtrless = F["≷"] = bind(ye, "\\gtrless ", "&#8823;")),
                            (F.preccurlyeq = F["≼"] = bind(ye, "\\preccurlyeq ", "&#8828;")),
                            (F.succcurlyeq = F["≽"] = bind(ye, "\\succcurlyeq ", "&#8829;")),
                            (F.precsim = F["≾"] = bind(ye, "\\precsim ", "&#8830;")),
                            (F.succsim = F["≿"] = bind(ye, "\\succsim ", "&#8831;")),
                            (F.nprec = F["⊀"] = bind(ye, "\\nprec ", "&#8832;")),
                            (F.nsucc = F["⊁"] = bind(ye, "\\nsucc ", "&#8833;")),
                            (F.subsetneq = F["⊊"] = bind(ye, "\\subsetneq ", "&#8842;")),
                            (F.supsetneq = F["⊋"] = bind(ye, "\\supsetneq ", "&#8843;")),
                            (F.vDash = F["⊨"] = bind(ye, "\\vDash ", "&#8872;")),
                            (F.Vdash = F["⊩"] = bind(ye, "\\Vdash ", "&#8873;")),
                            (F.Vvdash = F["⊪"] = bind(ye, "\\Vvdash ", "&#8874;")),
                            (F.VDash = F["⊫"] = bind(ye, "\\VDash ", "&#8875;")),
                            (F.nvdash = F["⊬"] = bind(ye, "\\nvdash ", "&#8876;")),
                            (F.nvDash = F["⊭"] = bind(ye, "\\nvDash ", "&#8877;")),
                            (F.nVdash = F["⊮"] = bind(ye, "\\nVdash ", "&#8878;")),
                            (F.nVDash = F["⊯"] = bind(ye, "\\nVDash ", "&#8879;")),
                            (F.vartriangleleft = F["⊲"] = bind(ye, "\\vartriangleleft ", "&#8882;")),
                            (F.vartriangleright = F["⊳"] = bind(ye, "\\vartriangleright ", "&#8883;")),
                            (F.trianglelefteq = F["⊴"] = bind(ye, "\\trianglelefteq ", "&#8884;")),
                            (F.trianglerighteq = F["⊵"] = bind(ye, "\\trianglerighteq ", "&#8885;")),
                            (F.multimap = F["⊸"] = bind(ye, "\\multimap ", "&#8888;")),
                            (F.Subset = F["⋐"] = bind(ye, "\\Subset ", "&#8912;")),
                            (F.Supset = F["⋑"] = bind(ye, "\\Supset ", "&#8913;")),
                            (F.Cap = F["⋒"] = bind(ye, "\\Cap ", "&#8914;")),
                            (F.Cup = F["⋓"] = bind(ye, "\\Cup ", "&#8915;")),
                            (F.pitchfork = F["⋔"] = bind(ye, "\\pitchfork ", "&#8916;")),
                            (F.lessdot = F["⋖"] = bind(ye, "\\lessdot ", "&#8918;")),
                            (F.gtrdot = F["⋗"] = bind(ye, "\\gtrdot ", "&#8919;")),
                            (F.lll = F["⋘"] = bind(ye, "\\lll ", "&#8920;")),
                            (F.ggg = F["⋙"] = bind(ye, "\\ggg ", "&#8921;")),
                            (F.lesseqgtr = F["⋚"] = bind(ye, "\\lesseqgtr ", "&#8922;")),
                            (F.gtreqless = F["⋛"] = bind(ye, "\\gtreqless ", "&#8923;")),
                            (F.curlyeqprec = F["⋞"] = bind(ye, "\\curlyeqprec ", "&#8926;")),
                            (F.curlyeqsucc = F["⋟"] = bind(ye, "\\curlyeqsucc ", "&#8927;")),
                            (F.nsim = F["≁"] = bind(ye, "\\nsim ", "&#8769;")),
                            (F.lnsim = F["⋦"] = bind(ye, "\\lnsim ", "&#8934;")),
                            (F.gnsim = F["⋧"] = bind(ye, "\\gnsim ", "&#8935;")),
                            (F.precnsim = F["⋨"] = bind(ye, "\\precnsim ", "&#8936;")),
                            (F.succnsim = F["⋩"] = bind(ye, "\\succnsim ", "&#8937;")),
                            (F.ntriangleleft = F["⋪"] = bind(ye, "\\ntriangleleft ", "&#8938;")),
                            (F.ntriangleright = F["⋫"] = bind(ye, "\\ntriangleright ", "&#8939;")),
                            (F.ntrianglelefteq = F["⋬"] = bind(ye, "\\ntrianglelefteq ", "&#8940;")),
                            (F.ntrianglerighteq = F["⋭"] = bind(ye, "\\ntrianglerighteq ", "&#8941;")),
                            (F.blacksquare = F["∎"] = bind(ye, "\\blacksquare ", "&#8718;")),
                            (F.colon = F["∶"] = bind(ye, "\\colon ", "&#8758;")),
                            (F.llcorner = F["∟"] = bind(ye, "\\llcorner ", "&#8735;")),
                            (F.dotplus = F["∔"] = bind(_e, "\\dotplus ", "&#8724;")),
                            (F.nmid = F["∤"] = bind(_e, "\nmid ", "&#8740;")),
                            (F.intercal = F["⊺"] = bind(_e, "\\intercal ", "&#8890;")),
                            (F.veebar = F["⊻"] = bind(_e, "\\veebar ", "&#8891;")),
                            (F.barwedge = F["⊼"] = bind(_e, "\\barwedge ", "&#8892;")),
                            (F.ltimes = F["⋉"] = bind(_e, "\\ltimes ", "&#8905;")),
                            (F.rtimes = F["⋊"] = bind(_e, "\\rtimes ", "&#8906;")),
                            (F.leftthreetimes = F["⋋"] = bind(_e, "\\leftthreetimes ", "&#8907;")),
                            (F.rightthreetimes = F["⋌"] = bind(_e, "\\rightthreetimes ", "&#8908;")),
                            (F.curlyvee = F["⋎"] = bind(_e, "\\curlyvee ", "&#8910;")),
                            (F.curlywedge = F["⋏"] = bind(_e, "\\curlywedge ", "&#8911;")),
                            (F.circledcirc = F["⊚"] = bind(_e, "\\circledcirc ", "&#8858;")),
                            (F.circledast = F["⊛"] = bind(_e, "\\circledast ", "&#8859;")),
                            (F.circleddash = F["⊝"] = bind(_e, "\\circleddash ", "&#8861;")),
                            (F.boxplus = F["⊞"] = bind(_e, "\\boxplus ", "&#8862;")),
                            (F.boxminus = F["⊟"] = bind(_e, "\\boxminus ", "&#8863;")),
                            (F.boxtimes = F["⊠"] = bind(_e, "\\boxtimes ", "&#8864;")),
                            (F.boxdot = F["⊡"] = bind(_e, "\\boxdot ", "&#8865;")),
                            (F["∂"] = F.partial),
                            (F["∃"] = F.exists),
                            (F["∅"] = F.varnothing),
                            (F["∆"] = F.triangle),
                            (F["∇"] = F.nabla),
                            (F["∈"] = F.in),
                            (F["∊"] = F.in),
                            (F["∋"] = F.ni),
                            (F["∌"] = F.notni),
                            (F["∍"] = F.ni),
                            (F["∐"] = F.amalg),
                            (F["−"] = F["-"]),
                            (F["∓"] = F.mp),
                            (F["∖"] = F.setminus),
                            (F["∘"] = F.circ),
                            (F["∙"] = F.bullet),
                            (F["∝"] = F.propto),
                            (F["∞"] = F.infty),
                            (F["∠"] = F.angle),
                            (F["∡"] = F.measuredangle),
                            (F["∣"] = F.divides),
                            (F["∥"] = F.parallel),
                            (F["∦"] = F.nparallel),
                            (F["∧"] = F.wedge),
                            (F["∨"] = F.vee),
                            (F["∩"] = F.cap),
                            (F["∪"] = F.cup),
                            (F["∮"] = F.oint),
                            (F["∴"] = F.therefore),
                            (F["∵"] = F.because),
                            (F["∼"] = F.sim),
                            (F["≀"] = F.wr),
                            (F["≃"] = F.simeq),
                            (F["≍"] = F.asymp),
                            (F["≐"] = F.doteq),
                            (F["≪"] = F.ll),
                            (F["≫"] = F.gg),
                            (F["≺"] = F.prec),
                            (F["≻"] = F.succ),
                            (F["⊂"] = F.subset),
                            (F["⊃"] = F.supset),
                            (F["⊆"] = F.subseteq),
                            (F["⊇"] = F.supseteq),
                            (F["⊈"] = F.nsubseteq),
                            (F["⊉"] = F.nsupseteq),
                            (F["⊏"] = F.sqsubset),
                            (F["⊐"] = F.sqsupset),
                            (F["⊓"] = F.sqcap),
                            (F["⊔"] = F.sqcup),
                            (F["⊖"] = F.ominus),
                            (F["⊘"] = F.oslash),
                            (F["⊙"] = F.odot),
                            (F["⊢"] = F.vdash),
                            (F["⊣"] = F.dashv),
                            (F["⊤"] = F.top),
                            (F["⊥"] = F.bot),
                            (F["⊧"] = F.models),
                            (F["⋀"] = F.wedge),
                            (F["⋁"] = F.vee),
                            (F["⋂"] = F.cap),
                            (F["⋃"] = F.cup),
                            (F["⋄"] = F.diamond),
                            (F["⋅"] = F.cdot),
                            (F["⋆"] = F.star),
                            (F["⋈"] = F.bowtie),
                            (F["⋮"] = F.vdots),
                            (F["⋯"] = F.cdots),
                            (F["⋱"] = F.ddots);
                        var lt,
                            ut,
                            ct = noop,
                            dt = document.createElement("div").style;
                        for (var ht in { transform: 1, WebkitTransform: 1, MozTransform: 1, OTransform: 1, msTransform: 1 })
                            if (ht in dt) {
                                ut = ht;
                                break;
                            }
                        ut
                            ? (lt = function (t, i, r) {
                                  t.css(ut, "scale(" + i + "," + r + ")");
                              })
                            : "filter" in dt
                            ? ((ct = function (t) {
                                  t.className = t.className;
                              }),
                              (lt = function (t, i, r) {
                                  (i /= 1 + (r - 1) / 2), t.css("fontSize", r + "em"), t.hasClass("mq-matrixed-container") || t.addClass("mq-matrixed-container").wrapInner('<span class="mq-matrixed"></span>');
                                  var a = t.children().css("filter", "progid:DXImageTransform.Microsoft.Matrix(M11=" + i + ",SizingMethod='auto expand')");
                                  function calculateMarginRight() {
                                      t.css("marginRight", ((a.width() - 1) * (i - 1)) / i + "px");
                                  }
                                  calculateMarginRight();
                                  var o = setInterval(calculateMarginRight);
                                  q(window).load(function () {
                                      clearTimeout(o), calculateMarginRight();
                                  });
                              }))
                            : (lt = function (t, i, r) {
                                  t.css("fontSize", r + "em");
                              });
                        var pt = m(fe, function (t, i) {
                                t.init = function (t, r, a) {
                                    i.init.call(this, t, "<" + r + " " + a + ">&0</" + r + ">");
                                };
                            }),
                            ft = m(fe, function (t, i) {
                                (t.init = function (t, r, a) {
                                    (this.args = arguments),
                                        (this.htmlTemplate = "<" + r + " " + a + "><" + r + ' class="mq-xarrow-over">&0</' + r + "><" + r + ' class="mq-xarrow-under"></' + r + "></" + r + ">"),
                                        i.init.call(this, t),
                                        (this.textTemplate = [t.replace("\\", "") + "(", ")"]);
                                }),
                                    (t.parser = function () {
                                        var t = this;
                                        return de.optBlock
                                            .then(function (i) {
                                                return de.block.map(function (r) {
                                                    var a = mt.apply(null, t.args);
                                                    return (a.blocks = [i, r]), i.adopt(a, 0, 0), r.adopt(a, i, 0), a;
                                                });
                                            })
                                            .or(i.parser.call(this));
                                    });
                            }),
                            mt = m(ft, function (t, i) {
                                (t.init = function (t, i, r) {
                                    (this.htmlTemplate = "<" + i + " " + r + "><" + i + ' class="mq-xarrow-over">&1</' + i + "><" + i + ' class="mq-xarrow-under">&0</' + i + "></" + i + ">"),
                                        fe.prototype.init.call(this, t),
                                        (this.textTemplate = [t.replace("\\", "") + "[", "](", ")"]);
                                }),
                                    (t.latex = function () {
                                        return this.ctrlSeq + "[" + this.ends[v].latex() + "]{" + this.ends[T].latex() + "}";
                                    }),
                                    (t.finalizeTree = function () {
                                        (this.downInto = this.ends[v].upOutOf = this.ends[T]), (this.upInto = this.ends[T].downOutOf = this.ends[v]);
                                    });
                            }),
                            OverLineStyleGenerator = function (t) {
                                var i = '<span class="' + t + '-inner-right">g</span><span class="' + t + '-inner-left">h</span>';
                                return m(fe, function (r, a) {
                                    r.init = function (r, o, s) {
                                        a.init.call(this, r, "<" + o + " " + s + "><" + o + ' class="' + t + '-inner">' + i + '<span class="mq-empty-box">&0</span></' + o + "></" + o + ">");
                                    };
                                });
                            },
                            gt = m(fe, function (t, i) {
                                t.init = function (t, r, a) {
                                    i.init.call(this, t, "<" + r + " " + a + '><span class="mq-longdiv-curve-border">)</span><span class="mq-longdiv-inner"><span class="mq-empty">&0</span></' + r + "></span>");
                                };
                            }),
                            bt = m(fe, function (t, i) {
                                t.init = function (t, r, a) {
                                    i.init.call(
                                        this,
                                        t,
                                        '<span class="mq-matrix"><span class="mq-paren mq-scaled">[</span><span class="matrix-edit-content-row"><p>' +
                                            a +
                                            '</p><table class="mq-non-leaf mq-rows-3"><tbody><tr><td class="mq-empty"></td><td class="mq-empty"></td><td class="mq-empty"></td></tr></tbody></table></span><span class="mq-paren mq-scaled">]</span></span>'
                                    );
                                };
                            }),
                            yt = m(fe, function (t, i) {
                                t.init = function (t) {
                                    i.init.call(this, t, '<span class="mq-non-leaf"><span class="mq-dot-recurring-inner"><span class="mq-dot-recurring">&#x2d9;</span><span class="mq-empty-box">&0</span></span></span>');
                                };
                            }),
                            vt = m(fe, function (t, i) {
                                t.init = function (t, r, a) {
                                    i.init.call(
                                        this,
                                        t,
                                        '<span class="mq-matrix"><span class="mq-paren mq-scaled">[</span><span class="matrix-edit-content-col"><p>' +
                                            a +
                                            '</p></span><span class="matrix-edit-content-col"><table class="mq-non-leaf mq-rows-3"><tbody><tr><td class="mq-empty"></td></tr><tr><td class="mq-empty"></td></tr><tr><td class="mq-empty"></td></tr></tbody></table></span><span class="mq-paren mq-scaled">]</span></span>'
                                    );
                                };
                            }),
                            BiggerSymbolStyle = function (t, i) {
                                return m(be, function (r, a) {
                                    r.init = function (r, o, s) {
                                        a.init.call(this, r, "<" + o + " " + s + "><" + o + ' class="' + t + '-inner">' + i + "</" + o + "></" + o + ">");
                                    };
                                });
                            },
                            _t = m(Ve, function (t, i) {
                                (t.symbols = { C: "&#8450;", H: "&#8461;", N: "&#8469;", P: "&#8473;", Q: "&#8474;", R: "&#8477;", Z: "&#8484;" }),
                                    (t.init = function (t) {
                                        var r = t;
                                        this.symbols[t] && (r = '<span class="mq-original">' + t + "</span>" + this.symbols[t]), i.init.call(this, t, r);
                                    });
                            });
                        (F.mathrm = bind(pt, "\\mathrm", "span", 'class="mq-roman mq-font"')),
                            (F.mathit = bind(pt, "\\mathit", "i", 'class="mq-font"')),
                            (F.mathbf = bind(pt, "\\mathbf", "b", 'class="mq-font"')),
                            (F.mathsf = bind(pt, "\\mathsf", "span", 'class="mq-sans-serif mq-font"')),
                            (F.mathtt = bind(pt, "\\mathtt", "span", 'class="mq-monospace mq-font"')),
                            (F.mathbb = m(fe, function (t, i) {
                                (t.init = function () {
                                    i.init.call(this, "\\mathbb", '<span class="mq-mathbb mq-font">&0</span>');
                                }),
                                    (t.adopt = function () {
                                        return (
                                            this.eachChild(function (t) {
                                                if (!t.writeOverride) {
                                                    var i = t.write,
                                                        r = t.deleteOutOf;
                                                    (t.write = t.writeOverride = function (r, a, o) {
                                                        var s;
                                                        if (!_t.prototype.symbols[a]) return i.apply(t, arguments);
                                                        (s = _t(a)), o && s.replaces(o), s.createLeftOf(r);
                                                    }),
                                                        (t.deleteOutOf = function (i, a) {
                                                            var o = [];
                                                            return (
                                                                t.eachChild(function (i) {
                                                                    var r = i.ctrlSeq;
                                                                    o.push(Ve(r).adopt(t, t.ends[T], 0)), i.remove();
                                                                }),
                                                                o.length && (a[T] = o[0]),
                                                                t.jQize().appendTo(t.jQ),
                                                                r.apply(t, arguments)
                                                            );
                                                        });
                                                }
                                            }),
                                            i.adopt.apply(this, arguments)
                                        );
                                    }),
                                    (t.finalizeTree = function () {
                                        this.eachChild(function (t) {
                                            t.eachChild(function (i) {
                                                var r = i.ctrlSeq,
                                                    a = Ve;
                                                _t.prototype.symbols[r] && (a = _t), a(r).adopt(t, t.ends[T], 0), i.remove();
                                            }),
                                                t.jQize().appendTo(t.jQ);
                                        });
                                    });
                            })),
                            (F.underline = bind(pt, "\\underline", "span", 'class="mq-non-leaf mq-underline"')),
                            (F.overline = F.bar = bind(OverLineStyleGenerator("mq-overline"), "\\overline", "span", 'class="mq-non-leaf mq-overline"')),
                            (F.longdiv = bind(gt, "\\longdiv", "span", 'class="mq-non-leaf mq-longdiv"')),
                            (F.overleftrightarrow = bind(OverLineStyleGenerator("mq-overleftrightarrow"), "\\overleftrightarrow", "span", 'class="mq-non-leaf mq-overleftrightarrow"')),
                            (F.overrightarrow = bind(OverLineStyleGenerator("mq-overarrow"), "\\overrightarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-right"')),
                            (F.overleftarrow = bind(OverLineStyleGenerator("mq-overarrow"), "\\overleftarrow", "span", 'class="mq-non-leaf mq-overarrow mq-arrow-left"')),
                            (F.xleftarrow = bind(ft, "\\xleftarrow", "span", 'class="mq-non-leaf mq-xarrow mq-arrow-left"')),
                            (F.xrightarrow = bind(ft, "\\xrightarrow", "span", 'class="mq-non-leaf mq-xarrow mq-arrow-right"')),
                            (F.addmatrixrow = bind(bt, "\\addmatrixrow", "span", "+")),
                            (F.addmatrixcol = bind(vt, "\\addmatrixcol", "span", "+")),
                            (F.ngtr = F["≯"] = bind(BiggerSymbolStyle("mq-ngtr", "&#8815;"), "\\ngtr ", "span", 'class="mq-non-leaf mq-ngtr"')),
                            (F.nless = F["≮"] = bind(BiggerSymbolStyle("mq-nless", "&#8814;"), "\\nless ", "span", 'class="mq-non-leaf mq-nless"')),
                            (F.dot = bind(yt, "\\dot")),
                            (F.parallelogram = bind(BiggerSymbolStyle("mq-parallelogram", "&#9649;"), "\\parallelogram ", "span", 'class="mq-non-leaf mq-parallelogram"'));
                        (F.textcolor = m(fe, function (t, i) {
                            (t.setColor = function (t) {
                                (this.color = t), (this.htmlTemplate = '<span class="mq-textcolor" style="color:' + t + '">&0</span>');
                            }),
                                (t.latex = function () {
                                    return "\\textcolor{" + this.color + "}{" + this.blocks[0].latex() + "}";
                                }),
                                (t.parser = function () {
                                    var t = this,
                                        r = le.optWhitespace,
                                        a = le.string,
                                        o = le.regex;
                                    return r
                                        .then(a("{"))
                                        .then(o(/^[#\w\s.,()%-]*/))
                                        .skip(a("}"))
                                        .then(function (r) {
                                            return t.setColor(r), i.parser.call(t);
                                        });
                                });
                        })),
                            (F.class = m(fe, function (t, i) {
                                t.parser = function () {
                                    var t = this,
                                        r = le.string,
                                        a = le.regex;
                                    return le.optWhitespace
                                        .then(r("{"))
                                        .then(a(/^[-\w\s\\\xA0-\xFF]*/))
                                        .skip(r("}"))
                                        .then(function (r) {
                                            return (t.htmlTemplate = '<span class="mq-class ' + r + '">&0</span>'), i.parser.call(t);
                                        });
                                };
                            }));
                        var wt = m(fe, function (t, i) {
                            (t.ctrlSeq = "_{...}^{...}"),
                                (t.createLeftOf = function (t) {
                                    if (t[v] || !t.options.supSubsRequireOperand) return i.createLeftOf.apply(this, arguments);
                                }),
                                (t.contactWeld = function (t) {
                                    for (var i = v; i; i = i === v && T)
                                        if (this[i] instanceof wt) {
                                            for (var r = "sub"; r; r = "sub" === r && "sup") {
                                                var a = this[r],
                                                    o = this[i][r];
                                                if (a) {
                                                    if (o)
                                                        if (a.isEmpty()) u = R(o, 0, o.ends[v]);
                                                        else {
                                                            a.jQ.children().insAtDirEnd(-i, o.jQ);
                                                            var s = a.children().disown(),
                                                                u = R(o, s.ends[T], o.ends[v]);
                                                            i === v ? s.adopt(o, o.ends[T], 0) : s.adopt(o, 0, o.ends[v]);
                                                        }
                                                    else this[i].addBlock(a.disown());
                                                    this.placeCursor = (function (t, r) {
                                                        return function (a) {
                                                            a.insAtDirEnd(-i, t || r);
                                                        };
                                                    })(o, a);
                                                }
                                            }
                                            this.remove(), t && t[v] === this && (i === T && u ? (u[v] ? t.insRightOf(u[v]) : t.insAtLeftEnd(u.parent)) : t.insRightOf(this[i]));
                                            break;
                                        }
                                    this.respace();
                                }),
                                (X.p.charsThatBreakOutOfSupSub = ""),
                                (t.finalizeTree = function () {
                                    (this.ends[v].write = function (t, i) {
                                        if (t.options.autoSubscriptNumerals && this === this.parent.sub) {
                                            if ("_" === i) return;
                                            var r = this.chToCmd(i);
                                            return r instanceof be ? t.deleteSelection() : t.clearSelection().insRightOf(this.parent), r.createLeftOf(t.show());
                                        }
                                        if (t[v] && t.options.charsThatBreakOutOfSupSub.indexOf(i) > -1) t.insRightOf(this.parent);
                                        else if (" " === i && !t[T] && this === this.parent.sub && this.parent.sup) {
                                            var a = this.parent;
                                            return (a.polyatomic = this.latex().length > 0), void a.polyatomicClass();
                                        }
                                        we.p.write.apply(this, arguments);
                                    }),
                                        (this.ends[v].keystroke = function (t, i, r) {
                                            var a = this.parent;
                                            "Backspace" === t && this === a.sub && a.polyatomic && !r.cursor[T] ? ((a.polyatomic = !1), a.polyatomicClass()) : we.p.keystroke.apply(this, arguments);
                                        }),
                                        this.polyatomicClass();
                                }),
                                (t.polyatomicClass = function () {
                                    this.jQ.toggleClass("mq-polyatomic", this.polyatomic);
                                }),
                                (t.moveTowards = function (t, r, a) {
                                    r.options.autoSubscriptNumerals && !this.sup ? r.insDirOf(t, this) : i.moveTowards.apply(this, arguments);
                                }),
                                (t.movingLeftOf = function (t) {
                                    this[v] instanceof Ie && t.insLeftOf(this[v]);
                                }),
                                (t.deleteTowards = function (t, r) {
                                    if (r.options.autoSubscriptNumerals && this.sub) {
                                        var a = this.sub.ends[-t];
                                        a instanceof be ? a.remove() : a && a.deleteTowards(t, r.insAtDirEnd(-t, this.sub)), this.sub.isEmpty() && this.sub.deleteOutOf(-t, r.insAtLeftEnd(this.sub));
                                    } else i.deleteTowards.apply(this, arguments);
                                }),
                                (t.latex = function () {
                                    function latex(t, i) {
                                        var r = i && i.latex();
                                        return i ? t + (1 === r.length ? r : "{" + (r || " ") + "}") : "";
                                    }
                                    return latex("_", this.sub) + (this.polyatomic ? "{}" : "") + latex("^", this.sup);
                                }),
                                (t.respace = t.siblingCreated = t.siblingDeleted = function (t, i) {
                                    i !== T && (this.jQ.toggleClass("mq-limit", "\\int " === this[v].ctrlSeq), (this.sup && this.sub) || !this.polyatomic || (this.polyatomic = !1), this.polyatomicClass());
                                }),
                                (t.addBlock = function (t) {
                                    "sub" === this.supsub
                                        ? ((this.sup = this.upInto = this.sub.upOutOf = t), (t.adopt(this, this.sub, 0).downOutOf = this.sub), (t.jQ = q('<span class="mq-sup"/>').append(t.jQ.children()).attr(r, t.id).prependTo(this.jQ)))
                                        : ((this.sub = this.downInto = this.sup.downOutOf = t),
                                          (t.adopt(this, 0, this.sup).upOutOf = this.sup),
                                          (t.jQ = q('<span class="mq-sub"></span>').append(t.jQ.children()).attr(r, t.id).appendTo(this.jQ.removeClass("mq-sup-only"))),
                                          this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>')),
                                        this.sub && this.sub.polyatomic && (this.polyatomic = !0);
                                    for (var i = 0; i < 2; i += 1)
                                        !(function (t, i, r, a) {
                                            t[i].deleteOutOf = function (o, s) {
                                                if ((s.insDirOf(this[o] ? -o : o, this.parent), !this.isEmpty())) {
                                                    var u = this.ends[o];
                                                    this.children().disown().withDirAdopt(o, s.parent, s[o], s[-o]).jQ.insDirOf(-o, s.jQ), (s[-o] = u);
                                                }
                                                (t.supsub = r),
                                                    delete t[i],
                                                    delete t[a + "Into"],
                                                    (t[r][a + "OutOf"] = insLeftOfMeUnlessAtEnd),
                                                    delete t[r].deleteOutOf,
                                                    "sub" === i && q(t.jQ.addClass("mq-sup-only")[0].lastChild).remove(),
                                                    (t.polyatomic = !1),
                                                    this.remove();
                                            };
                                        })(this, "sub sup".split(" ")[i], "sup sub".split(" ")[i], "down up".split(" ")[i]);
                                });
                        });
                        function insLeftOfMeUnlessAtEnd(t) {
                            var i = this.parent,
                                r = t;
                            do {
                                if (r[T]) return t.insLeftOf(i);
                                r = r.parent.parent;
                            } while (r !== i);
                            t.insRightOf(i);
                        }
                        (F.subscript = F._ = m(wt, function (t, i) {
                            (t.supsub = "sub"),
                                (t.htmlTemplate = '<span class="mq-supsub mq-non-leaf"><span class="mq-sub"><span class="mq-empty-box">&0</span></span><span style="display:inline-block;width:0">&#8203;</span></span>'),
                                (t.textTemplate = ["_"]),
                                (t.finalizeTree = function () {
                                    (this.downInto = this.sub = this.ends[v]), (this.sub.upOutOf = insLeftOfMeUnlessAtEnd), i.finalizeTree.call(this);
                                }),
                                (t.parser = function () {
                                    var t = le.regex,
                                        r = le.optWhitespace,
                                        a = this;
                                    return r
                                        .then(t(/^([^{}]|{[^}{]*}){}/))
                                        .map(function (t) {
                                            return (a.blocks = [de.parse(t.replace(/{}$/, ""))]), a.blocks[0].adopt(a, a.ends[T], 0), (a.blocks[0].polyatomic = !0), a;
                                        })
                                        .or(i.parser.call(this));
                                });
                        })),
                            (F.superscript = F.supscript = F["^"] = m(wt, function (t, i) {
                                (t.supsub = "sup"),
                                    (t.htmlTemplate = '<span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup"><span class="mq-empty-box">&0</span></span></span>'),
                                    (t.textTemplate = ["**"]),
                                    (t.finalizeTree = function () {
                                        (this.upInto = this.sup = this.ends[T]), (this.sup.downOutOf = insLeftOfMeUnlessAtEnd), i.finalizeTree.call(this);
                                    });
                            }));
                        var xt = m(fe, function (t, i) {
                                (t.parser = function () {
                                    for (var t = le.string, i = le.optWhitespace, r = le.succeed, a = de.block, o = this, s = (o.blocks = [we(), we()]), u = 0; u < s.length; u += 1) s[u].adopt(o, o.ends[T], 0);
                                    return i
                                        .then(t("_").or(t("^")))
                                        .then(function (t) {
                                            var i = s["_" === t ? 0 : 1];
                                            return a.then(function (t) {
                                                return t.children().adopt(i, i.ends[T], 0), r(o);
                                            });
                                        })
                                        .many()
                                        .result(o);
                                }),
                                    (t.finalizeTree = function () {
                                        (this.downInto = this.ends[v]), (this.upInto = this.ends[T]), (this.ends[v].upOutOf = this.ends[T]), (this.ends[T].downOutOf = this.ends[v]);
                                    });
                            }),
                            Et = m(xt, function (t, i) {
                                (t.init = function (t, i) {
                                    var r = '<span class="mq-large-operator mq-non-leaf"><span class="mq-to"><span>&1</span></span><big>' + i + '</big><span class="mq-from"><span>&0</span></span></span>';
                                    be.prototype.init.call(this, t, r);
                                }),
                                    (t.latex = function () {
                                        function simplify(t) {
                                            return 1 === t.length ? t : "{" + (t || " ") + "}";
                                        }
                                        return this.ctrlSeq + "_" + simplify(this.ends[v].latex()) + "^" + simplify(this.ends[T].latex());
                                    }),
                                    (t.createLeftOf = function (t) {
                                        i.createLeftOf.apply(this, arguments), t.options.sumStartsWithNEquals && (He("n").createLeftOf(t), st().createLeftOf(t));
                                    });
                            });
                        (F["∑"] = F.sum = F.summation = bind(Et, "\\sum ", "&sum;")),
                            (F["∏"] = F.prod = F.product = bind(Et, "\\prod ", "&prod;")),
                            (F.coprod = F.coproduct = bind(Et, "\\coprod ", "&#8720;")),
                            (F.lim = F.limit = m(xt, function (t, i) {
                                (t.init = function () {
                                    be.prototype.init.call(this, "\\lim ", '<span class="mq-lim mq-non-leaf"><span class="mq-un-italicized">lim</span><span class="mq-approaches"><span>&0</span></span></span>');
                                }),
                                    (t.latex = function () {
                                        return (
                                            this.ctrlSeq +
                                            "_" +
                                            (function simplify(t) {
                                                return 1 === t.length ? t : "{" + (t || " ") + "}";
                                            })(this.ends[v].latex())
                                        );
                                    });
                            }));
                        var kt = (F.frac = F.dfrac = F.cfrac = F.fraction = m(fe, function (t, i) {
                                (t.ctrlSeq = "\\frac"),
                                    (t.htmlTemplate =
                                        '<span class="mq-fraction mq-non-leaf"><span class="mq-numerator"><span class="mq-empty-box">&0</span></span><span class="mq-denominator"><span class="mq-empty-box">&1</span></span><span style="display:inline-block;width:0">&#8203;</span></span>'),
                                    (t.textTemplate = ["(", "/", ")"]),
                                    (t.finalizeTree = function () {
                                        (this.upInto = this.ends[T].upOutOf = this.ends[v]), (this.downInto = this.ends[v].downOutOf = this.ends[T]);
                                    });
                            })),
                            Tt = (F.over = U["/"] = m(kt, function (t, i) {
                                t.createLeftOf = function (t) {
                                    if (!this.replacedFragment) {
                                        for (var r = t[v]; r && !(r instanceof _e || r instanceof (F.text || noop) || r instanceof Et || "\\ " === r.ctrlSeq || /^[,;:]$/.test(r.ctrlSeq)); ) r = r[v];
                                        r instanceof Et && r[T] instanceof wt && (r = r[T])[T] instanceof wt && r[T].ctrlSeq != r.ctrlSeq && (r = r[T]),
                                            r === t[v] || t.isTooDeep(1) || (this.replaces(j(r[T] || t.parent.ends[v], t[v])), (t[v] = r));
                                    }
                                    i.createLeftOf.call(this, t);
                                };
                            }));
                        (F.underset = m(fe, function (t, i) {
                            (t.ctrlSeq = "\\underset"),
                                (t.htmlTemplate = '<span class="mq-underset mq-overunder mq-non-leaf"><span class="mq-over">&1</span><span class="mq-under">&0</span></span>'),
                                (t.textTemplate = ["[", "|", "]"]),
                                (t.finalizeTree = function () {
                                    (this.downInto = this.ends[v].upOutOf = this.ends[T]), (this.upInto = this.ends[T].downOutOf = this.ends[v]);
                                });
                        })),
                            (F.overset = m(fe, function (t, i) {
                                (t.ctrlSeq = "\\overset"),
                                    (t.htmlTemplate = '<span class="mq-overset mq-overunder mq-non-leaf"><span class="mq-over">&0</span><span class="mq-under">&1</span></span>'),
                                    (t.textTemplate = ["[", "|", "]"]),
                                    (t.finalizeTree = function () {
                                        (this.downInto = this.ends[T].upOutOf = this.ends[v]), (this.upInto = this.ends[v].downOutOf = this.ends[T]);
                                    });
                            }));
                        var Ct = m(fe, function (t, i) {
                            t.reflow = function () {
                                var t = this.jQ.find(".mq-arc");
                                lt(t, this.jQ.innerWidth() / t.innerWidth(), 1);
                            };
                        });
                        (F.overarc = m(Ct, function (t, i) {
                            (t.ctrlSeq = "\\overarc"),
                                (t.htmlTemplate =
                                    '<span class="mq-overarc mq-overunder mq-non-leaf"><span class="mq-over"><span class="mq-arc mq-scaled">&frown;</span><span style="display:inline-block;width:0">&nbsp;</span></span><span class="mq-under">&0</span></span>');
                        })),
                            (F.underarc = m(Ct, function (t, i) {
                                (t.ctrlSeq = "\\underarc"),
                                    (t.htmlTemplate =
                                        '<span class="mq-underarc mq-overunder mq-non-leaf"><span class="mq-over">&0</span><span class="mq-under"><span class="mq-arc mq-scaled">&smile;</span><span style="display:inline-block;width:0">&nbsp;</span></span></span>');
                            }));
                        var St = (F.sqrt = F["√"] = m(fe, function (t, i) {
                                (t.ctrlSeq = "\\sqrt"),
                                    (t.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix">&radic;</span><span class="mq-non-leaf mq-sqrt-stem"><span class="mq-empty-box">&0</span></span></span>'),
                                    (t.textTemplate = ["sqrt(", ")"]),
                                    (t.parser = function () {
                                        return de.optBlock
                                            .then(function (t) {
                                                return de.block.map(function (i) {
                                                    var r = qt();
                                                    return (r.blocks = [t, i]), t.adopt(r, 0, 0), i.adopt(r, t, 0), r;
                                                });
                                            })
                                            .or(i.parser.call(this));
                                    }),
                                    (t.reflow = function () {
                                        var t = this.ends[T].jQ.parent();
                                        lt(t.prev(), 1, t.innerHeight() / +t.css("fontSize").slice(0, -2) - 0.1);
                                    });
                            })),
                            qt =
                                ((F.vec = m(fe, function (t, i) {
                                    (t.ctrlSeq = "\\vec"), (t.htmlTemplate = '<span class="mq-non-leaf"><span class="mq-vector-prefix">&rarr;</span><span class="mq-vector-stem">&0</span></span>'), (t.textTemplate = ["vec(", ")"]);
                                })),
                                (F.nthroot = m(St, function (t, i) {
                                    (t.htmlTemplate =
                                        '<sup class="mq-nthroot mq-non-leaf"><span class="mq-empty-box">&0</span></sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled">&radic;</span><span class="mq-sqrt-stem mq-non-leaf"><span class="mq-empty-box">&1</span></span></span>'),
                                        (t.textTemplate = ["sqrt[", "](", ")"]),
                                        (t.latex = function () {
                                            return "\\sqrt[" + this.ends[v].latex() + "]{" + this.ends[T].latex() + "}";
                                        });
                                })));
                        (F.lrncuberoot = m(St, function (t, i) {
                            (t.ctrlSeq = "\\lrncuberoot"),
                                (t.htmlTemplate =
                                    '<sup class="mq-nthroot mq-non-leaf"><span class="mq-empty-box">3</span></sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled">&radic;</span><span class="mq-sqrt-stem mq-non-leaf"><span class="mq-empty-box">&0</span></span></span>'),
                                (t.textTemplate = ["sqrt[3](", ")"]),
                                (t.latex = function () {
                                    return "\\sqrt[3]{" + this.ends[v].latex() + "}";
                                });
                        })),
                            (F.abs = m(fe, function (t, i) {
                                (t.ctrlSeq = "\\abs"), (t.htmlTemplate = '<span class="mq-abs mq-non-leaf"><span class="mq-empty-box">&0</span></span>'), (t.textTemplate = ["|", "|"]);
                            })),
                            (F.lrnplaceholder = m(fe, function (t, i) {
                                (t.ctrlSeq = "\\lrnplaceholder"),
                                    (t.htmlTemplate = '<span class="mq-lrnplaceholder mq-non-leaf"><span class="mq-empty-box">&0</span></span>'),
                                    (t.textTemplate = [""]),
                                    (t.latex = function () {
                                        return this.ends[v].latex();
                                    });
                            })),
                            (F.lrnexponent = m(fe, function (t, i) {
                                (t.ctrSeq = "\\lrnexponent"),
                                    (t.htmlTemplate =
                                        '<span class="mq-lrnexponent mq-non-leaf"><span class="mq-lrnplaceholder mq-non-leaf"><span class="mq-empty-box">&0</span></span><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup"><span class="mq-empty-box">&1</span></span></span></span>'),
                                    (t.textTemplate = ["", "**"]),
                                    (t.latex = function () {
                                        var t = this.ends[T].latex();
                                        return t.length > 1 ? (t = "{" + t + "}") : 0 === t.length && (t = "{ }"), this.ends[v].latex() + "^" + t;
                                    });
                            })),
                            (F.lrnsquaredexponent = m(fe, function (t, i) {
                                (t.ctrSeq = "\\lrnsquaredexponent"),
                                    (t.htmlTemplate =
                                        '<span class="mq-lrnexponent mq-non-leaf"><span class="mq-lrnplaceholder mq-non-leaf"><span class="mq-empty-box">&0</span></span><span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup"><span class="mq-empty-box">2</span></span></span></span>'),
                                    (t.textTemplate = ["", "**2"]),
                                    (t.latex = function () {
                                        return this.ends[v].latex() + "^2";
                                    });
                            })),
                            (F.lrnsubscript = m(fe, function (t, i) {
                                (t.ctrSeq = "\\lrnsubscript"),
                                    (t.htmlTemplate =
                                        '<span class="mq-lrnexponent mq-non-leaf"><span class="mq-lrnplaceholder mq-non-leaf"><span class="mq-empty-box">&0</span></span><span class="mq-supsub mq-non-leaf"><span class="mq-sub"><span class="mq-empty-box">&1</span></span><span style="display:inline-block;width:0">&nbsp;</span></span></span>'),
                                    (t.textTemplate = ["", "_"]),
                                    (t.latex = function () {
                                        return this.ends[v].latex() + "_" + this.ends[T].latex();
                                    });
                            }));
                        function DelimsMixin(t, i) {
                            (t.jQadd = function () {
                                i.jQadd.apply(this, arguments), (this.delimjQs = this.jQ.children(":first").add(this.jQ.children(":last"))), (this.contentjQ = this.jQ.children(":eq(1)"));
                            }),
                                (t.reflow = function () {
                                    var t = this.contentjQ.outerHeight() / parseFloat(this.contentjQ.css("fontSize"));
                                    lt(this.delimjQs, a(1 + 0.2 * (t - 1), 1.2), 1.2 * t);
                                });
                        }
                        var Ot = m(m(fe, DelimsMixin), function (t, i) {
                                (t.init = function (t, r, a, o, s) {
                                    i.init.call(this, "\\left" + o, void 0, [r, a]), (this.side = t), (this.sides = {}), (this.sides[v] = { ch: r, ctrlSeq: o }), (this.sides[T] = { ch: a, ctrlSeq: s });
                                }),
                                    (t.numBlocks = function () {
                                        return 1;
                                    }),
                                    (t.html = function () {
                                        return (
                                            (this.htmlTemplate =
                                                '<span class="mq-non-leaf"><span class="mq-scaled mq-paren' +
                                                (this.side === T ? " mq-ghost" : "") +
                                                '">' +
                                                this.sides[v].ch +
                                                '</span><span class="mq-non-leaf">&0</span><span class="mq-scaled mq-paren' +
                                                (this.side === v ? " mq-ghost" : "") +
                                                '">' +
                                                ("." === this.sides[T].ch ? " " : this.sides[T].ch) +
                                                "</span></span>"),
                                            i.html.call(this)
                                        );
                                    }),
                                    (t.latex = function () {
                                        return "\\left" + this.sides[v].ctrlSeq + this.ends[v].latex() + "\\right" + this.sides[T].ctrlSeq;
                                    }),
                                    (t.oppBrack = function (t, i, r) {
                                        return (
                                            i instanceof Ot &&
                                            i.side &&
                                            i.side !== -r &&
                                            ("|" === this.sides[this.side].ch || i.side === -this.side) &&
                                            (!t.restrictMismatchedBrackets || At[this.sides[this.side].ch] === i.sides[i.side].ch || { "(": "]", "[": ")" }[this.sides[v].ch] === i.sides[T].ch) &&
                                            i
                                        );
                                    }),
                                    (t.closeOpposing = function (t) {
                                        (t.side = 0),
                                            (t.sides[this.side] = this.sides[this.side]),
                                            t.delimjQs
                                                .eq(this.side === v ? 0 : 1)
                                                .removeClass("mq-ghost")
                                                .html(this.sides[this.side].ch);
                                    }),
                                    (t.createLeftOf = function (t) {
                                        if (!this.replacedFragment)
                                            var r = t.options,
                                                a = this.oppBrack(r, t[v], v) || this.oppBrack(r, t[T], T) || this.oppBrack(r, t.parent.parent);
                                        if (a) {
                                            var o = (this.side = -a.side);
                                            this.closeOpposing(a), a === t.parent.parent && t[o] && (j(t[o], t.parent.ends[o], -o).disown().withDirAdopt(-o, a.parent, a, a[o]).jQ.insDirOf(o, a.jQ), a.bubble("reflow"));
                                        } else (o = (a = this).side), a.replacedFragment ? (a.side = 0) : t[-o] && (a.replaces(j(t[-o], t.parent.ends[-o], o)), (t[-o] = 0)), i.createLeftOf.call(a, t);
                                        o === v ? t.insAtLeftEnd(a.ends[v]) : t.insRightOf(a);
                                    }),
                                    (t.placeCursor = noop),
                                    (t.unwrap = function () {
                                        this.ends[v].children().disown().adopt(this.parent, this, this[T]).jQ.insertAfter(this.jQ), this.remove();
                                    }),
                                    (t.deleteSide = function (t, i, r) {
                                        var a = this.parent,
                                            o = this[t],
                                            s = a.ends[t];
                                        if (t === this.side) return this.unwrap(), void (o ? r.insDirOf(-t, o) : r.insAtDirEnd(t, a));
                                        var u = r.options;
                                        if (((this.side = -t), this.oppBrack(u, this.ends[v].ends[this.side], t))) {
                                            this.closeOpposing(this.ends[v].ends[this.side]);
                                            var m = this.ends[v].ends[t];
                                            this.unwrap(), m.siblingCreated && m.siblingCreated(r.options, t), o ? r.insDirOf(-t, o) : r.insAtDirEnd(t, a);
                                        } else if (
                                            (this.oppBrack(u, this.parent.parent, t)
                                                ? (this.parent.parent.closeOpposing(this), this.parent.parent.unwrap())
                                                : ((this.sides[t] = { ch: At[this.sides[this.side].ch], ctrlSeq: At[this.sides[this.side].ctrlSeq] }),
                                                  this.delimjQs
                                                      .removeClass("mq-ghost")
                                                      .eq(t === v ? 0 : 1)
                                                      .addClass("mq-ghost")
                                                      .html(this.sides[t].ch)),
                                            o)
                                        ) {
                                            m = this.ends[v].ends[t];
                                            j(o, s, -t).disown().withDirAdopt(-t, this.ends[v], m, 0).jQ.insAtDirEnd(t, this.ends[v].jQ.removeClass("mq-empty")), m.siblingCreated && m.siblingCreated(r.options, t), r.insDirOf(-t, o);
                                        } else i ? r.insDirOf(t, this) : r.insAtDirEnd(t, this.ends[v]);
                                    }),
                                    (t.deleteTowards = function (t, i) {
                                        this.deleteSide(-t, !1, i);
                                    }),
                                    (t.finalizeTree = function () {
                                        (this.ends[v].deleteOutOf = function (t, i) {
                                            this.parent.deleteSide(t, !0, i);
                                        }),
                                            (this.finalizeTree = this.intentionalBlur = function () {
                                                this.delimjQs.eq(this.side === v ? 1 : 0).removeClass("mq-ghost"), (this.side = 0);
                                            });
                                    }),
                                    (t.siblingCreated = function (t, i) {
                                        i === -this.side && this.finalizeTree();
                                    });
                            }),
                            At = { "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "\\{": "\\}", "\\}": "\\{", "&lang;": "&rang;", "&rang;": "&lang;", "\\langle ": "\\rangle ", "\\rangle ": "\\langle ", "|": "|" };
                        function bindCharBracketPair(t, i) {
                            i = i || t;
                            var r = At[t],
                                a = At[i];
                            (U[t] = bind(Ot, v, t, r, i, a)), (U[r] = bind(Ot, T, t, r, i, a));
                        }
                        bindCharBracketPair("("),
                            bindCharBracketPair("["),
                            bindCharBracketPair("{", "\\{"),
                            (F.langle = bind(Ot, v, "&lang;", "&rang;", "\\langle ", "\\rangle ")),
                            (F.rangle = bind(Ot, T, "&lang;", "&rang;", "\\langle ", "\\rangle ")),
                            (U["|"] = bind(Ot, v, "|", "|", "|", "|")),
                            (F.left = m(fe, function (t) {
                                t.parser = function () {
                                    var t = le.regex,
                                        i = le.string,
                                        r = (le.succeed, le.optWhitespace);
                                    return r.then(t(/^(?:[([|]|\\\{)/)).then(function (a) {
                                        var o = "\\" === a.charAt(0) ? a.slice(1) : a;
                                        return de.then(function (s) {
                                            var u = t(/^(?:[\])|]|\\\})/);
                                            return (
                                                s.ends[-1] === s.ends[1] && s.ends[1] instanceof Pt.array && (u = t(/^(?:[\])|\.]|\\\})/)),
                                                i("\\right")
                                                    .skip(r)
                                                    .then(u)
                                                    .map(function (t) {
                                                        var i = "\\" === t.charAt(0) ? t.slice(1) : t,
                                                            r = Ot(0, o, i, a, t);
                                                        return (r.blocks = [s]), s.adopt(r, 0, 0), r;
                                                    })
                                            );
                                        });
                                    });
                                };
                            })),
                            (F.right = m(fe, function (t) {
                                t.parser = function () {
                                    return le.fail("unmatched \\right");
                                };
                            }));
                        var Dt = (F.binom = F.binomial = m(m(fe, DelimsMixin), function (t, i) {
                                (t.ctrlSeq = "\\binom"),
                                    (t.htmlTemplate =
                                        '<span class="mq-non-leaf"><span class="mq-paren mq-scaled">(</span><span class="mq-non-leaf"><span class="mq-array mq-non-leaf"><span>&0</span><span>&1</span></span></span><span class="mq-paren mq-scaled">)</span></span>'),
                                    (t.textTemplate = ["choose(", ",", ")"]);
                            })),
                            Lt =
                                ((F.choose = m(Dt, function (t) {
                                    t.createLeftOf = Tt.prototype.createLeftOf;
                                })),
                                m(be, function (t, i) {
                                    t.init = function (t) {
                                        (t = "\\" + t), i.init.call(this, t, '<span class="mq-unknown-cmd">' + t + "</span>");
                                    };
                                })),
                            Rt = m(MathQuill.MathField, function (t) {
                                t.init = function (t, i, r, a, o) {
                                    RootBlockMixin(t), (this.__options = a || X());
                                    var s = Y(this, t, r);
                                    (s.editable = o), (t.ultimateRoot = i), (t.select = ie.prototype.select), s.createTextarea(), s.editablesTextareaEvents(), s.cursor.insAtRightEnd(t);
                                };
                            });
                        (F.MathQuillMathField = m(fe, function (t, i) {
                            (t.ctrlSeq = "\\MathQuillMathField"),
                                (t.htmlTemplate = '<span class="mq-editable-field mq-inner-editable"><span class="mq-root-block">&0</span></span>'),
                                (t.parser = function () {
                                    var t = this,
                                        r = le.string,
                                        a = le.regex,
                                        o = le.succeed;
                                    return r("[")
                                        .then(a(/^[a-z][a-z0-9]*/i))
                                        .skip(r("]"))
                                        .map(function (i) {
                                            t.name = i;
                                        })
                                        .or(o())
                                        .then(i.parser.call(t));
                                }),
                                (t.finalizeTree = function () {
                                    var t = M.byId[this.jQ.closest(".mq-root-block").attr(r)],
                                        i = (t && t.controller && t.controller.API.__options) || {},
                                        a = this.ends[v].keystroke;
                                    function focusAdjacentEditable(t, i, r) {
                                        var a, o;
                                        if (!r[t])
                                            for (; (o = i[t] || (i.parent && i.parent[t])); )
                                                if ((a = (i = o).jQ.filter(".mq-editable-field").add(i.jQ.find(".mq-editable-field")).eq(0)).length) return a.find(".mq-textarea").children()[0].focus(), !0;
                                    }
                                    Rt(this.ends[v], t, this.jQ, i, !0),
                                        (this.ends[v].keystroke = function (t, i, r) {
                                            var o = r.cursor,
                                                s = !1;
                                            switch (t) {
                                                case "Left":
                                                    s = focusAdjacentEditable(v, this.parent, o);
                                                    break;
                                                case "Right":
                                                    s = focusAdjacentEditable(T, this.parent, o);
                                                    break;
                                                case "Up":
                                                    s = focusAdjacentEditable("upOutOf", this.parent, o);
                                                    break;
                                                case "Down":
                                                    s = focusAdjacentEditable("downOutOf", this.parent, o);
                                            }
                                            s || "function" != typeof a || a.apply(this, arguments);
                                        });
                                }),
                                (t.registerInnerField = function (t) {
                                    t.push((t[this.name] = this.ends[v].controller.API));
                                }),
                                (t.latex = function () {
                                    return this.ends[v].latex();
                                }),
                                (t.text = function () {
                                    return this.ends[v].text();
                                }),
                                (t.seek = function () {
                                    return i.seek.apply(this, arguments);
                                }),
                                (t.focus = function () {
                                    return i.focus.apply(this, arguments);
                                }),
                                (t.blur = function () {
                                    return i.blur && i.blur.apply(this, arguments);
                                });
                        })),
                            (F.MathQuillVarField = m(fe, function (t, i) {
                                (t.ctrlSeq = "\\MathQuillVarField"),
                                    (t.htmlTemplate = '<span class="lrn-mq-var-container"><span class="mq-root-block">&0</span></span>'),
                                    (t.latex = function () {
                                        return "{{var:" + this.ends[v].latex() + "}}";
                                    }),
                                    (t.text = function () {
                                        return this.ends[v].text();
                                    }),
                                    (t.finalizeTree = function () {
                                        var t = M.byId[this.jQ.closest(".mq-root-block").attr(r)],
                                            i = (t && t.controller && t.controller.API.__options) || {};
                                        Rt(this.ends[v], t, this.jQ, i, !1),
                                            (this.ends[v].keystroke = function (t, i, r) {
                                                i.preventDefault();
                                            });
                                    });
                            })),
                            (F.MathQuillResponseContainer = m(fe, function (t, i) {
                                (t.ctrlSeq = "\\MathQuillResponseContainer"),
                                    (t.htmlTemplate = '<span class="lrn-mq-response-container"><marker class="lrn-qe-keyboard-i-response"></marker><content>Response</content></span>'),
                                    (t.latex = function () {
                                        return "\\MathQuillResponseContainer";
                                    }),
                                    (t.text = function () {
                                        return this.ends[v].text();
                                    });
                            })),
                            (F.MathQuillResponseContainerIcon = m(fe, function (t, i) {
                                (t.ctrlSeq = "\\MathQuillResponseContainerIcon"),
                                    (t.htmlTemplate = '<span class="lrn-mq-response-container-icon"><span class="lrn-qe-keyboard-i-response"></span></span>'),
                                    (t.latex = function () {
                                        return "\\MathQuillResponseContainerIcon";
                                    }),
                                    (t.text = function () {
                                        return this.ends[v].text();
                                    });
                            }));
                        var Pt = {};
                        F.begin = m(fe, function (t, i) {
                            t.parser = function () {
                                var t = le.string,
                                    i = le.regex;
                                return t("{")
                                    .then(i(/^[a-z]+\*?/i))
                                    .skip(t("}"))
                                    .then(function (t) {
                                        return Pt[t] ? Pt[t]().parser() : le.fail("unknown environment type: " + t);
                                    });
                            };
                        });
                        var Nt = (F.matrix = Pt.matrix = m(fe, function (t, i) {
                            var o = m(we, function (t, i) {
                                    (t.init = function (t, r) {
                                        return (this.column = t), (this.row = r), i.init.call(this);
                                    }),
                                        (t.keystroke = function (t, r, a) {
                                            switch (t) {
                                                case "Shift-Spacebar":
                                                    return r.preventDefault(), this.parent.insertColumn(this, a.cursor);
                                                case "Shift-Enter":
                                                    return this.parent.insertRow(this, a.cursor);
                                            }
                                            return i.keystroke.apply(this, arguments);
                                        }),
                                        (t.deleteOutOf = function (t, r) {
                                            var a = this,
                                                o = arguments;
                                            this.parent.backspace(this, t, r, function () {
                                                return i.deleteOutOf.apply(a, o);
                                            });
                                        });
                                }),
                                s = "&",
                                u = "\\\\";
                            (t.parentheses = { left: null, right: null }),
                                (t.maximum = { rows: 10, columns: 10 }),
                                (t.defaults = { rows: 2, columns: 2 }),
                                (t.ctrlSeq = "\\matrix"),
                                (t.createBlocks = function () {
                                    var t,
                                        i,
                                        r = this,
                                        a = (r.blocks = []),
                                        s = 0;
                                    this.htmlTemplate.replace(/&\d+/g, function (u, m) {
                                        var v = r.htmlTemplate.substring(0, m).match(/<tr[^>]*>/gi).length - 1;
                                        (i = t === v ? i + 1 : 0), (a[s] = o(i, v)), a[s].adopt(r, r.ends[T], 0), (t = v), s++;
                                    });
                                }),
                                (t.reflow = function () {
                                    var t = this.jQ.children("table"),
                                        i = t.outerHeight() / +t.css("fontSize").slice(0, -2),
                                        r = this.jQ.children(".mq-paren");
                                    r.length && lt(r, a(1 + 0.2 * (i - 1), 1.2), 1.05 * i);
                                }),
                                (t.latex = function () {
                                    var t,
                                        i,
                                        r,
                                        a = this.getMatrixName(),
                                        o = "\\begin{" + a + "}";
                                    for (r = 0; r < this.blocks.length; r++) (t = this.blocks[r].row), void 0 !== i && (o += i !== t ? u : s), (i = t), (o += this.blocks[r].latex());
                                    return (o += "\\end{" + a + "}");
                                }),
                                (t.createLeftOf = function (r) {
                                    this.cursor = r;
                                    var a = Math.min(this.defaults.rows, this.maximum.rows),
                                        o = Math.min(this.defaults.columns, this.maximum.columns);
                                    (this.defaultHtmlTemplate = this.defaultHtmlTemplate || this.generateHtmlTemplate(a, o)), (t.htmlTemplate = this.defaultHtmlTemplate), i.createLeftOf.call(this, r);
                                }),
                                (t.getMatrixName = function () {
                                    return this.ctrlSeq.replace("\\", "");
                                }),
                                (t.generateHtmlTemplate = function (t, i) {
                                    var r = this,
                                        a = '<span class="mq-matrix mq-non-leaf">' + parenTemplate(this.parentheses.left);
                                    (a += '<table class="mq-non-leaf">'), (t = Math.min(t, this.maximum.rows)), (i = Math.min(i, this.maximum.columns));
                                    for (var o = 0, s = 0; s < t; s++) {
                                        a += "<tr>";
                                        for (var u = 0; u < i; u++) (a += "<td" + columnClass(u) + ">&" + o + "</td>"), o++;
                                        a += "</tr>";
                                    }
                                    return (a += "</table>"), (a += parenTemplate(this.parentheses.right) + "</span>");
                                    function parenTemplate(t) {
                                        return t ? '<span class="mq-paren mq-scaled">' + t + "</span>" : "";
                                    }
                                    function columnClass(t) {
                                        var i = r.getColumnClass && r.getColumnClass(t);
                                        return i ? ' class="' + i + '"' : "";
                                    }
                                }),
                                (t.htmlTemplate = t.generateHtmlTemplate(1, 1)),
                                (t.parser = function () {
                                    var t = le.regex,
                                        i = this,
                                        r = this.getMatrixName(),
                                        a = new RegExp("^(.*?)\\\\end{" + r + "}"),
                                        m = new RegExp("\\\\end{" + r + "}");
                                    return t(a).then(function (t) {
                                        var r,
                                            a = [],
                                            v = t.replace(m, "").split(u),
                                            q = Math.min(v.length, i.maximum.rows),
                                            R = 0;
                                        for (j = 0; j < q; j++) (r = v[j].split(s)), (R = Math.max(R, r.length));
                                        for (R = Math.min(R, i.maximum.columns), j = 0; j < q; j++) {
                                            r = v[j].split(s);
                                            for (t = 0; t < R; t++) {
                                                var M = o(t, j);
                                                de
                                                    .parse(r[t] || " ")
                                                    .children()
                                                    .adopt(M, M.ends[T], 0),
                                                    a.push(M);
                                            }
                                        }
                                        (i.htmlTemplate = i.generateHtmlTemplate(q, R)), (i.blocks = a);
                                        for (var j = 0; j < a.length; j += 1) a[j].adopt(i, i.ends[T], 0);
                                        return le.succeed(i);
                                    });
                                }),
                                (t.finalizeTree = function () {
                                    var t = this.jQ.find("table");
                                    t.length &&
                                        (this.relink(),
                                        t.removeClass(function (t, i) {
                                            var r = i.match(/mq-rows-\d+/g);
                                            return (r && r.join(" ")) || "";
                                        }),
                                        t.addClass("mq-rows-" + t.find("tr").length));
                                }),
                                (t.relink = function () {
                                    var t = this.jQ.find("td"),
                                        i = M.byId[t.first().attr(r)],
                                        a = M.byId[t.last().attr(r)],
                                        o = t.eq(0).closest("tr"),
                                        s = [];
                                    t.each(function (i) {
                                        var a,
                                            u = M.byId[q(this).attr(r)],
                                            m = t.eq(i + 1),
                                            R = q(this).closest("tr").next("tr"),
                                            j = q(this).closest("tr").index(),
                                            F = q(this).index();
                                        if (m.length) {
                                            var U = M.byId[m.attr(r)];
                                            (u[T] = U), (U[v] = u);
                                        }
                                        if ((a = R.length ? R.find("td").eq(F) : o.find("td").eq(F + 1)).length) {
                                            var V = M.byId[a.attr(r)];
                                            (u.downOutOf = V), (V.upOutOf = u);
                                        }
                                        (u.column = F), (u.row = j), s.push(u);
                                    }),
                                        (this.ends[v] = i),
                                        (this.ends[T] = a),
                                        i && i[v] && delete i[v],
                                        a && a[T] && delete a[T],
                                        (this.blocks = s);
                                }),
                                (t.deleteCell = function (t) {
                                    var i,
                                        a = t.jQ.closest("tr"),
                                        o = t.jQ.index(),
                                        s = a.index(),
                                        u = a.find("td").not(t.jQ),
                                        m = this.jQ
                                            .find("tr")
                                            .not(a)
                                            .map(function () {
                                                return q(this).find("td")[o];
                                            }),
                                        v = 1 === this.jQ.find("td").length;
                                    function isEmpty() {
                                        return M.byId[q(this).attr(r)].isEmpty();
                                    }
                                    return (
                                        u.filter(isEmpty).length === u.length && m.length && (u.remove(), t.jQ.remove(), a.remove(), this.finalizeTree()),
                                        m.filter(isEmpty).length === m.length && u.length && (m.remove(), t.jQ.remove(), this.finalizeTree()),
                                        v || ((s = Math.min(s, this.jQ.find("tr").length - 1)), (o = Math.min(o, this.jQ.find("tr").eq(s).find("td").length - 1)), (i = M.byId[this.jQ.find("tr").eq(s).find("td").eq(o).attr(r)])),
                                        i
                                    );
                                }),
                                (t.addRow = function (t) {
                                    if (!(this.jQ.find("tr").length >= this.maximum.rows)) {
                                        for (var i, a, s = t.find("td").length, u = q("<tr></tr>"), m = 0; m < s; m++) ((i = o()).parent = this), (i.jQ = q('<td class="mq-empty">').attr(r, i.id)), u.append(i.jQ), (a = a || i);
                                        return u.insertAfter(t), a;
                                    }
                                }),
                                (t.addColumn = function (t) {
                                    if (!(t.closest("tr").find("td").length >= this.maximum.columns)) {
                                        var i,
                                            a = t.index(),
                                            s = t.closest("tr").index(),
                                            u = this,
                                            m = [];
                                        return (
                                            this.jQ.find("tr").each(function () {
                                                ((i = o()).parent = u), (i.jQ = q('<td class="mq-empty">').attr(r, i.id)), i.jQ.insertAfter(q(this).find("td").eq(a)), m.push(i);
                                            }),
                                            m[s]
                                        );
                                    }
                                }),
                                (t.insertColumn = function (t, i) {
                                    (newBlock = this.addColumn(t.jQ)), newBlock && (this.finalizeTree(), this.bubble("reflow"), i.insAtRightEnd(newBlock));
                                }),
                                (t.insertRow = function (t, i) {
                                    (newBlock = this.addRow(t.jQ.closest("tr"))), newBlock && (this.finalizeTree(), this.bubble("reflow"), i.insAtRightEnd(newBlock));
                                }),
                                (t.backspace = function (t, i, r, a) {
                                    if (t.isEmpty()) {
                                        var o = this.deleteCell(t);
                                        o ? r.insAtRightEnd(o) : (a(), this.finalizeTree()), this.bubble("edited");
                                    }
                                });
                        }));
                        return (
                            (Pt.array = m(Nt, function (t, i) {
                                (t.ctrlSeq = "\\array"),
                                    (t.defaults = { rows: 2, columns: 1 }),
                                    (t.parser = function () {
                                        var t = le.regex,
                                            r = le.string,
                                            a = this;
                                        return r("{")
                                            .then(t(/^[rcl]+/))
                                            .then(function (t) {
                                                return (a.alignments = t), r("}").then(i.parser.call(a));
                                            });
                                    }),
                                    (t.getColumnClass = function (t) {
                                        if (this.alignments && this.alignments.length > t) return "mq-array-column-" + this.alignments.charAt(t);
                                    }),
                                    (t.latex = function () {
                                        var t = i.latex.call(this),
                                            r = "\\begin{" + this.getMatrixName() + "}";
                                        return this.alignments ? t.replace(r, r + "{" + this.alignments + "}") : t;
                                    });
                            })),
                            (F.pmatrix = Pt.pmatrix = m(Nt, function (t, i) {
                                (t.ctrlSeq = "\\pmatrix"), (t.parentheses = { left: "(", right: ")" });
                            })),
                            (F.bmatrix = Pt.bmatrix = m(Nt, function (t, i) {
                                (t.ctrlSeq = "\\bmatrix"), (t.parentheses = { left: "[", right: "]" });
                            })),
                            (F.Bmatrix = Pt.Bmatrix = m(Nt, function (t, i) {
                                (t.ctrlSeq = "\\Bmatrix"), (t.parentheses = { left: "{", right: "}" });
                            })),
                            (F.vmatrix = Pt.vmatrix = m(Nt, function (t, i) {
                                (t.ctrlSeq = "\\vmatrix"), (t.parentheses = { left: "|", right: "|" });
                            })),
                            (F.Vmatrix = Pt.Vmatrix = m(Nt, function (t, i) {
                                (t.ctrlSeq = "\\Vmatrix"), (t.parentheses = { left: "&#8214;", right: "&#8214;" });
                            })),
                            MathQuill
                        );
                    }.apply(i, a)) || (t.exports = o);
        },
    },
]);
