!(function () {
  var t = {
      757: function (t, e, r) {
        t.exports = r(666);
      },
      666: function (t) {
        var e = (function (t) {
          "use strict";
          var e,
            r = Object.prototype,
            n = r.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function u(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            u({}, "");
          } catch (t) {
            u = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function s(t, e, r, n) {
            var o = e && e.prototype instanceof d ? e : d,
              i = Object.create(o.prototype),
              a = new T(n || []);
            return (
              (i._invoke = (function (t, e, r) {
                var n = h;
                return function (o, i) {
                  if (n === p) throw new Error("Generator is already running");
                  if (n === v) {
                    if ("throw" === o) throw i;
                    return k();
                  }
                  for (r.method = o, r.arg = i; ; ) {
                    var a = r.delegate;
                    if (a) {
                      var c = E(a, r);
                      if (c) {
                        if (c === y) continue;
                        return c;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (n === h) throw ((n = v), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = p;
                    var u = l(t, e, r);
                    if ("normal" === u.type) {
                      if (((n = r.done ? v : f), u.arg === y)) continue;
                      return { value: u.arg, done: r.done };
                    }
                    "throw" === u.type &&
                      ((n = v), (r.method = "throw"), (r.arg = u.arg));
                  }
                };
              })(t, r, a)),
              i
            );
          }
          function l(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = s;
          var h = "suspendedStart",
            f = "suspendedYield",
            p = "executing",
            v = "completed",
            y = {};
          function d() {}
          function g() {}
          function m() {}
          var w = {};
          u(w, i, function () {
            return this;
          });
          var _ = Object.getPrototypeOf,
            x = _ && _(_(N([])));
          x && x !== r && n.call(x, i) && (w = x);
          var b = (m.prototype = d.prototype = Object.create(w));
          function L(t) {
            ["next", "throw", "return"].forEach(function (e) {
              u(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function S(t, e) {
            function r(o, i, a, c) {
              var u = l(t[o], t, i);
              if ("throw" !== u.type) {
                var s = u.arg,
                  h = s.value;
                return h && "object" == typeof h && n.call(h, "__await")
                  ? e.resolve(h.__await).then(
                      function (t) {
                        r("next", t, a, c);
                      },
                      function (t) {
                        r("throw", t, a, c);
                      }
                    )
                  : e.resolve(h).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return r("throw", t, a, c);
                      }
                    );
              }
              c(u.arg);
            }
            var o;
            this._invoke = function (t, n) {
              function i() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function E(t, r) {
            var n = t.iterator[r.method];
            if (n === e) {
              if (((r.delegate = null), "throw" === r.method)) {
                if (
                  t.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = e),
                  E(t, r),
                  "throw" === r.method)
                )
                  return y;
                (r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return y;
            }
            var o = l(n, t.iterator, r.arg);
            if ("throw" === o.type)
              return (
                (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), y
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((r[t.resultName] = i.value),
                  (r.next = t.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                  (r.delegate = null),
                  y)
                : i
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                y);
          }
          function j(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function O(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function T(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(j, this),
              this.reset(!0);
          }
          function N(t) {
            if (t) {
              var r = t[i];
              if (r) return r.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  a = function r() {
                    for (; ++o < t.length; )
                      if (n.call(t, o))
                        return (r.value = t[o]), (r.done = !1), r;
                    return (r.value = e), (r.done = !0), r;
                  };
                return (a.next = a);
              }
            }
            return { next: k };
          }
          function k() {
            return { value: e, done: !0 };
          }
          return (
            (g.prototype = m),
            u(b, "constructor", m),
            u(m, "constructor", g),
            (g.displayName = u(m, c, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === g || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, m)
                  : ((t.__proto__ = m), u(t, c, "GeneratorFunction")),
                (t.prototype = Object.create(b)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            L(S.prototype),
            u(S.prototype, a, function () {
              return this;
            }),
            (t.AsyncIterator = S),
            (t.async = function (e, r, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new S(s(e, r, n, o), i);
              return t.isGeneratorFunction(r)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            L(b),
            u(b, c, "Generator"),
            u(b, i, function () {
              return this;
            }),
            u(b, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = [];
              for (var r in t) e.push(r);
              return (
                e.reverse(),
                function r() {
                  for (; e.length; ) {
                    var n = e.pop();
                    if (n in t) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (t.values = N),
            (T.prototype = {
              constructor: T,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(O),
                  !t)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var r = this;
                function o(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = e)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc"),
                      s = n.call(a, "finallyLoc");
                    if (u && s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  y
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), O(r), y;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      O(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, r, n) {
                return (
                  (this.delegate = {
                    iterator: N(t),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = e),
                  y
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = e;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = e)
            : Function("r", "regeneratorRuntime = r")(e);
        }
      },
    },
    e = {};
  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = (e[n] = { exports: {} });
    return t[n](i, i.exports, r), i.exports;
  }
  (r.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return r.d(e, { a: e }), e;
  }),
    (r.d = function (t, e) {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (function () {
      "use strict";
      function t(t, e, r) {
        var n = document.createElement("".concat(t));
        return n.classList.add("".concat(e)), r.appendChild(n), n;
      }
      function e(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void r(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      function n(t) {
        return function () {
          var r = this,
            n = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(r, n);
            function c(t) {
              e(a, o, i, c, u, "next", t);
            }
            function u(t) {
              e(a, o, i, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
      var o = r(757),
        i = r.n(o);
      function a() {
        return (a = n(
          i().mark(function t(e, r) {
            var n, o, a;
            return i().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2), fetch("https://get.geojs.io/v1/ip/geo.json")
                    );
                  case 2:
                    return (n = t.sent), (t.next = 5), n.json();
                  case 5:
                    (o = t.sent),
                      (a = o.city),
                      localStorage.setItem("currentCity", a),
                      e(),
                      r();
                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function c() {
        var t = document.querySelector(".map"),
          e = localStorage.getItem("currentCity"),
          r =
            "https://maps.googleapis.com/maps/api/staticmap?" +
            "center=".concat(e) +
            "&zoom=10&size=500x500" +
            "&key=".concat("AIzaSyCq28DsRI3TuwNEBV_sRDjenK9m82gGWN4");
        t.setAttribute("src", r);
      }
      function u() {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = n(
          i().mark(function t() {
            var e, r, n, o, a, c;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = document.querySelector(".weather__city")),
                        (r = document.querySelector(".weather__degrees")),
                        (n = document.querySelector(".weather__ico")),
                        (t.prev = 3),
                        (o = localStorage.getItem("currentCity")),
                        (t.next = 8),
                        fetch(
                          "https://api.openweathermap.org/data/2.5/weather?q="
                            .concat(o, "&appid=")
                            .concat("8f2c5761371185563563571cb3a56c37")
                        )
                      );
                    case 8:
                      return (a = t.sent), (t.next = 11), a.json();
                    case 11:
                      (c = t.sent),
                        (e.innerHTML = o),
                        (r.innerHTML = "".concat(
                          Math.ceil(c.main.temp - 273),
                          "&deg"
                        )),
                        (n.innerHTML =
                          '<img src="http://openweathermap.org/img/wn/' +
                          "".concat(c.weather[0].icon, '@2x.png">')),
                        (t.next = 23);
                      break;
                    case 17:
                      (t.prev = 17),
                        (t.t0 = t.catch(3)),
                        console.log(t.t0),
                        (e.innerHTML = "Error loading weather data"),
                        (r.innerHTML = ""),
                        (n.innerHTML = "");
                    case 23:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[3, 17]]
            );
          })
        )).apply(this, arguments);
      }
      !(function (e) {
        t("img", "map", e);
        var r = t("div", "weather", e);
        t("div", "weather__city", r),
          t("div", "weather__degrees", r),
          t("div", "weather__ico", r);
        var n = t("div", "controls", e),
          o = t("form", "controls__form", n),
          i = t("input", "controls__input", o);
        i.setAttribute("placeholder", "Enter the name of the city"),
          i.setAttribute("pattern", "^[a-zA-Z][a-zA-Z-\\s]+$"),
          i.setAttribute("required", "");
        var a = t("input", "controls__btn", o);
        a.setAttribute("type", "submit"),
          (a.value = "Show weather"),
          t("ul", "controls__list", n);
      })(document.querySelector("#app"));
      var l = document.querySelector(".controls__list"),
        h = document.querySelector(".controls__input"),
        f = document.querySelector(".controls__form");
      !(function (e) {
        if (localStorage.cities)
          for (
            var r = JSON.parse(localStorage.cities), n = 0;
            n < r.length;
            n += 1
          )
            t("li", "controls__list-item", e).innerText = r[n];
      })(l),
        (function (t, e) {
          a.apply(this, arguments);
        })(c, u),
        (function (e, r, n, o, i) {
          e.addEventListener("submit", function (e) {
            e.preventDefault();
            var a = localStorage.cities ? JSON.parse(localStorage.cities) : [];
            r.childElementCount >= 10 &&
              (r.removeChild(r.firstElementChild),
              a.shift(),
              localStorage.setItem("cities", JSON.stringify(a))),
              a.includes(n.value) ||
                ((t("li", "controls__list-item", r).innerText = n.value),
                a.push(n.value),
                localStorage.setItem("cities", JSON.stringify(a)),
                (localStorage.currentCity = n.value),
                o(),
                i(),
                (n.value = ""));
          });
        })(f, l, h, c, u),
        (function (t, e, r) {
          t.addEventListener("click", function (t) {
            (localStorage.currentCity = t.target.innerText), e(), r();
          });
        })(l, c, u);
    })();
})();