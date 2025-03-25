import './style.css';
function ir(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var xt = { exports: {} }, Je = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function sr() {
  if (jt) return Je;
  jt = 1;
  var c = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function C(y, v, g) {
    var x = null;
    if (g !== void 0 && (x = "" + g), v.key !== void 0 && (x = "" + v.key), "key" in v) {
      g = {};
      for (var A in v)
        A !== "key" && (g[A] = v[A]);
    } else g = v;
    return v = g.ref, {
      $$typeof: c,
      type: y,
      key: x,
      ref: v !== void 0 ? v : null,
      props: g
    };
  }
  return Je.Fragment = s, Je.jsx = C, Je.jsxs = C, Je;
}
var et = {}, At = { exports: {} }, oe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt;
function ar() {
  if (Nt) return oe;
  Nt = 1;
  var c = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), x = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), a = Symbol.iterator;
  function n(r) {
    return r === null || typeof r != "object" ? null : (r = a && r[a] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var f = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, N = Object.assign, H = {};
  function K(r, w, F) {
    this.props = r, this.context = w, this.refs = H, this.updater = F || f;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(r, w) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, r, w, "setState");
  }, K.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function L() {
  }
  L.prototype = K.prototype;
  function Z(r, w, F) {
    this.props = r, this.context = w, this.refs = H, this.updater = F || f;
  }
  var _ = Z.prototype = new L();
  _.constructor = Z, N(_, K.prototype), _.isPureReactComponent = !0;
  var B = Array.isArray, q = { H: null, A: null, T: null, S: null }, X = Object.prototype.hasOwnProperty;
  function J(r, w, F, R, h, $) {
    return F = $.ref, {
      $$typeof: c,
      type: r,
      key: w,
      ref: F !== void 0 ? F : null,
      props: $
    };
  }
  function ie(r, w) {
    return J(
      r.type,
      w,
      void 0,
      void 0,
      void 0,
      r.props
    );
  }
  function te(r) {
    return typeof r == "object" && r !== null && r.$$typeof === c;
  }
  function re(r) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(F) {
      return w[F];
    });
  }
  var Ee = /\/+/g;
  function ee(r, w) {
    return typeof r == "object" && r !== null && r.key != null ? re("" + r.key) : w.toString(36);
  }
  function ve() {
  }
  function he(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (typeof r.status == "string" ? r.then(ve, ve) : (r.status = "pending", r.then(
          function(w) {
            r.status === "pending" && (r.status = "fulfilled", r.value = w);
          },
          function(w) {
            r.status === "pending" && (r.status = "rejected", r.reason = w);
          }
        )), r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function me(r, w, F, R, h) {
    var $ = typeof r;
    ($ === "undefined" || $ === "boolean") && (r = null);
    var j = !1;
    if (r === null) j = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          j = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case c:
            case s:
              j = !0;
              break;
            case M:
              return j = r._init, me(
                j(r._payload),
                w,
                F,
                R,
                h
              );
          }
      }
    if (j)
      return h = h(r), j = R === "" ? "." + ee(r, 0) : R, B(h) ? (F = "", j != null && (F = j.replace(Ee, "$&/") + "/"), me(h, w, F, "", function(ne) {
        return ne;
      })) : h != null && (te(h) && (h = ie(
        h,
        F + (h.key == null || r && r.key === h.key ? "" : ("" + h.key).replace(
          Ee,
          "$&/"
        ) + "/") + j
      )), w.push(h)), 1;
    j = 0;
    var l = R === "" ? "." : R + ":";
    if (B(r))
      for (var I = 0; I < r.length; I++)
        R = r[I], $ = l + ee(R, I), j += me(
          R,
          w,
          F,
          $,
          h
        );
    else if (I = n(r), typeof I == "function")
      for (r = I.call(r), I = 0; !(R = r.next()).done; )
        R = R.value, $ = l + ee(R, I++), j += me(
          R,
          w,
          F,
          $,
          h
        );
    else if ($ === "object") {
      if (typeof r.then == "function")
        return me(
          he(r),
          w,
          F,
          R,
          h
        );
      throw w = String(r), Error(
        "Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return j;
  }
  function ce(r, w, F) {
    if (r == null) return r;
    var R = [], h = 0;
    return me(r, R, "", "", function($) {
      return w.call(F, $, h++);
    }), R;
  }
  function Ce(r) {
    if (r._status === -1) {
      var w = r._result;
      w = w(), w.then(
        function(F) {
          (r._status === 0 || r._status === -1) && (r._status = 1, r._result = F);
        },
        function(F) {
          (r._status === 0 || r._status === -1) && (r._status = 2, r._result = F);
        }
      ), r._status === -1 && (r._status = 0, r._result = w);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var be = typeof reportError == "function" ? reportError : function(r) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var w = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
        error: r
      });
      if (!window.dispatchEvent(w)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", r);
      return;
    }
    console.error(r);
  };
  function Y() {
  }
  return oe.Children = {
    map: ce,
    forEach: function(r, w, F) {
      ce(
        r,
        function() {
          w.apply(this, arguments);
        },
        F
      );
    },
    count: function(r) {
      var w = 0;
      return ce(r, function() {
        w++;
      }), w;
    },
    toArray: function(r) {
      return ce(r, function(w) {
        return w;
      }) || [];
    },
    only: function(r) {
      if (!te(r))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return r;
    }
  }, oe.Component = K, oe.Fragment = C, oe.Profiler = v, oe.PureComponent = Z, oe.StrictMode = y, oe.Suspense = b, oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, oe.act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, oe.cache = function(r) {
    return function() {
      return r.apply(null, arguments);
    };
  }, oe.cloneElement = function(r, w, F) {
    if (r == null)
      throw Error(
        "The argument must be a React element, but you passed " + r + "."
      );
    var R = N({}, r.props), h = r.key, $ = void 0;
    if (w != null)
      for (j in w.ref !== void 0 && ($ = void 0), w.key !== void 0 && (h = "" + w.key), w)
        !X.call(w, j) || j === "key" || j === "__self" || j === "__source" || j === "ref" && w.ref === void 0 || (R[j] = w[j]);
    var j = arguments.length - 2;
    if (j === 1) R.children = F;
    else if (1 < j) {
      for (var l = Array(j), I = 0; I < j; I++)
        l[I] = arguments[I + 2];
      R.children = l;
    }
    return J(r.type, h, void 0, void 0, $, R);
  }, oe.createContext = function(r) {
    return r = {
      $$typeof: x,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, r.Provider = r, r.Consumer = {
      $$typeof: g,
      _context: r
    }, r;
  }, oe.createElement = function(r, w, F) {
    var R, h = {}, $ = null;
    if (w != null)
      for (R in w.key !== void 0 && ($ = "" + w.key), w)
        X.call(w, R) && R !== "key" && R !== "__self" && R !== "__source" && (h[R] = w[R]);
    var j = arguments.length - 2;
    if (j === 1) h.children = F;
    else if (1 < j) {
      for (var l = Array(j), I = 0; I < j; I++)
        l[I] = arguments[I + 2];
      h.children = l;
    }
    if (r && r.defaultProps)
      for (R in j = r.defaultProps, j)
        h[R] === void 0 && (h[R] = j[R]);
    return J(r, $, void 0, void 0, null, h);
  }, oe.createRef = function() {
    return { current: null };
  }, oe.forwardRef = function(r) {
    return { $$typeof: A, render: r };
  }, oe.isValidElement = te, oe.lazy = function(r) {
    return {
      $$typeof: M,
      _payload: { _status: -1, _result: r },
      _init: Ce
    };
  }, oe.memo = function(r, w) {
    return {
      $$typeof: m,
      type: r,
      compare: w === void 0 ? null : w
    };
  }, oe.startTransition = function(r) {
    var w = q.T, F = {};
    q.T = F;
    try {
      var R = r(), h = q.S;
      h !== null && h(F, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(Y, be);
    } catch ($) {
      be($);
    } finally {
      q.T = w;
    }
  }, oe.unstable_useCacheRefresh = function() {
    return q.H.useCacheRefresh();
  }, oe.use = function(r) {
    return q.H.use(r);
  }, oe.useActionState = function(r, w, F) {
    return q.H.useActionState(r, w, F);
  }, oe.useCallback = function(r, w) {
    return q.H.useCallback(r, w);
  }, oe.useContext = function(r) {
    return q.H.useContext(r);
  }, oe.useDebugValue = function() {
  }, oe.useDeferredValue = function(r, w) {
    return q.H.useDeferredValue(r, w);
  }, oe.useEffect = function(r, w) {
    return q.H.useEffect(r, w);
  }, oe.useId = function() {
    return q.H.useId();
  }, oe.useImperativeHandle = function(r, w, F) {
    return q.H.useImperativeHandle(r, w, F);
  }, oe.useInsertionEffect = function(r, w) {
    return q.H.useInsertionEffect(r, w);
  }, oe.useLayoutEffect = function(r, w) {
    return q.H.useLayoutEffect(r, w);
  }, oe.useMemo = function(r, w) {
    return q.H.useMemo(r, w);
  }, oe.useOptimistic = function(r, w) {
    return q.H.useOptimistic(r, w);
  }, oe.useReducer = function(r, w, F) {
    return q.H.useReducer(r, w, F);
  }, oe.useRef = function(r) {
    return q.H.useRef(r);
  }, oe.useState = function(r) {
    return q.H.useState(r);
  }, oe.useSyncExternalStore = function(r, w, F) {
    return q.H.useSyncExternalStore(
      r,
      w,
      F
    );
  }, oe.useTransition = function() {
    return q.H.useTransition();
  }, oe.version = "19.0.0", oe;
}
var tt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
tt.exports;
var kt;
function ur() {
  return kt || (kt = 1, function(c, s) {
    process.env.NODE_ENV !== "production" && function() {
      function C(e, o) {
        Object.defineProperty(g.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              o[0],
              o[1]
            );
          }
        });
      }
      function y(e) {
        return e === null || typeof e != "object" ? null : (e = pe && e[pe] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function v(e, o) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var O = e + "." + o;
        xe[O] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          o,
          e
        ), xe[O] = !0);
      }
      function g(e, o, O) {
        this.props = e, this.context = o, this.refs = k, this.updater = O || t;
      }
      function x() {
      }
      function A(e, o, O) {
        this.props = e, this.context = o, this.refs = k, this.updater = O || t;
      }
      function b(e) {
        return "" + e;
      }
      function m(e) {
        try {
          b(e);
          var o = !1;
        } catch {
          o = !0;
        }
        if (o) {
          o = console;
          var O = o.error, P = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return O.call(
            o,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            P
          ), b(e);
        }
      }
      function M(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === p ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case I:
            return "Fragment";
          case l:
            return "Portal";
          case se:
            return "Profiler";
          case ne:
            return "StrictMode";
          case D:
            return "Suspense";
          case Q:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case d:
              return (e.displayName || "Context") + ".Provider";
            case u:
              return (e._context.displayName || "Context") + ".Consumer";
            case de:
              var o = e.render;
              return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Re:
              return o = e.displayName || null, o !== null ? o : M(e.type) || "Memo";
            case Oe:
              o = e._payload, e = e._init;
              try {
                return M(e(o));
              } catch {
              }
          }
        return null;
      }
      function a(e) {
        return typeof e == "string" || typeof e == "function" || e === I || e === se || e === ne || e === D || e === Q || e === we || typeof e == "object" && e !== null && (e.$$typeof === Oe || e.$$typeof === Re || e.$$typeof === d || e.$$typeof === u || e.$$typeof === de || e.$$typeof === le || e.getModuleId !== void 0);
      }
      function n() {
      }
      function f() {
        if (fe === 0) {
          Pe = console.log, Te = console.info, qe = console.warn, _e = console.error, We = console.group, Fe = console.groupCollapsed, Xe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        fe++;
      }
      function N() {
        if (fe--, fe === 0) {
          var e = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: E({}, e, { value: Pe }),
            info: E({}, e, { value: Te }),
            warn: E({}, e, { value: qe }),
            error: E({}, e, { value: _e }),
            group: E({}, e, { value: We }),
            groupCollapsed: E({}, e, { value: Fe }),
            groupEnd: E({}, e, { value: Xe })
          });
        }
        0 > fe && console.error(
          "disabledDepth fell below zero. This is a bug in React. Please file an issue."
        );
      }
      function H(e) {
        if (Ke === void 0)
          try {
            throw Error();
          } catch (O) {
            var o = O.stack.trim().match(/\n( *(at )?)/);
            Ke = o && o[1] || "", ke = -1 < O.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < O.stack.indexOf("@") ? "@unknown:0:0" : "";
          }
        return `
` + Ke + e + ke;
      }
      function K(e, o) {
        if (!e || Me) return "";
        var O = Ge.get(e);
        if (O !== void 0) return O;
        Me = !0, O = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
        var P = null;
        P = T.H, T.H = null, f();
        try {
          var G = {
            DetermineComponentFrameRoot: function() {
              try {
                if (o) {
                  var Ue = function() {
                    throw Error();
                  };
                  if (Object.defineProperty(Ue.prototype, "props", {
                    set: function() {
                      throw Error();
                    }
                  }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(Ue, []);
                    } catch (Be) {
                      var at = Be;
                    }
                    Reflect.construct(e, [], Ue);
                  } else {
                    try {
                      Ue.call();
                    } catch (Be) {
                      at = Be;
                    }
                    e.call(Ue.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (Be) {
                    at = Be;
                  }
                  (Ue = e()) && typeof Ue.catch == "function" && Ue.catch(function() {
                  });
                }
              } catch (Be) {
                if (Be && at && typeof Be.stack == "string")
                  return [Be.stack, at.stack];
              }
              return [null, null];
            }
          };
          G.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var V = Object.getOwnPropertyDescriptor(
            G.DetermineComponentFrameRoot,
            "name"
          );
          V && V.configurable && Object.defineProperty(
            G.DetermineComponentFrameRoot,
            "name",
            { value: "DetermineComponentFrameRoot" }
          );
          var W = G.DetermineComponentFrameRoot(), ye = W[0], ge = W[1];
          if (ye && ge) {
            var Ae = ye.split(`
`), $e = ge.split(`
`);
            for (W = V = 0; V < Ae.length && !Ae[V].includes(
              "DetermineComponentFrameRoot"
            ); )
              V++;
            for (; W < $e.length && !$e[W].includes(
              "DetermineComponentFrameRoot"
            ); )
              W++;
            if (V === Ae.length || W === $e.length)
              for (V = Ae.length - 1, W = $e.length - 1; 1 <= V && 0 <= W && Ae[V] !== $e[W]; )
                W--;
            for (; 1 <= V && 0 <= W; V--, W--)
              if (Ae[V] !== $e[W]) {
                if (V !== 1 || W !== 1)
                  do
                    if (V--, W--, 0 > W || Ae[V] !== $e[W]) {
                      var Ye = `
` + Ae[V].replace(
                        " at new ",
                        " at "
                      );
                      return e.displayName && Ye.includes("<anonymous>") && (Ye = Ye.replace("<anonymous>", e.displayName)), typeof e == "function" && Ge.set(e, Ye), Ye;
                    }
                  while (1 <= V && 0 <= W);
                break;
              }
          }
        } finally {
          Me = !1, T.H = P, N(), Error.prepareStackTrace = O;
        }
        return Ae = (Ae = e ? e.displayName || e.name : "") ? H(Ae) : "", typeof e == "function" && Ge.set(e, Ae), Ae;
      }
      function L(e) {
        if (e == null) return "";
        if (typeof e == "function") {
          var o = e.prototype;
          return K(
            e,
            !(!o || !o.isReactComponent)
          );
        }
        if (typeof e == "string") return H(e);
        switch (e) {
          case D:
            return H("Suspense");
          case Q:
            return H("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case de:
              return e = K(e.render, !1), e;
            case Re:
              return L(e.type);
            case Oe:
              o = e._payload, e = e._init;
              try {
                return L(e(o));
              } catch {
              }
          }
        return "";
      }
      function Z() {
        var e = T.A;
        return e === null ? null : e.getOwner();
      }
      function _(e) {
        if (ue.call(e, "key")) {
          var o = Object.getOwnPropertyDescriptor(e, "key").get;
          if (o && o.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function B(e, o) {
        function O() {
          rt || (rt = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            o
          ));
        }
        O.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: O,
          configurable: !0
        });
      }
      function q() {
        var e = M(this.type);
        return nt[e] || (nt[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function X(e, o, O, P, G, V) {
        return O = V.ref, e = {
          $$typeof: j,
          type: e,
          key: o,
          props: V,
          _owner: G
        }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: q
        }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(e, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function J(e, o) {
        return o = X(
          e.type,
          o,
          void 0,
          void 0,
          e._owner,
          e.props
        ), o._store.validated = e._store.validated, o;
      }
      function ie(e, o) {
        if (typeof e == "object" && e && e.$$typeof !== pt) {
          if (z(e))
            for (var O = 0; O < e.length; O++) {
              var P = e[O];
              te(P) && re(P, o);
            }
          else if (te(e))
            e._store && (e._store.validated = 1);
          else if (O = y(e), typeof O == "function" && O !== e.entries && (O = O.call(e), O !== e))
            for (; !(e = O.next()).done; )
              te(e.value) && re(e.value, o);
        }
      }
      function te(e) {
        return typeof e == "object" && e !== null && e.$$typeof === j;
      }
      function re(e, o) {
        if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, o = Ee(o), !ot[o])) {
          ot[o] = !0;
          var O = "";
          e && e._owner != null && e._owner !== Z() && (O = null, typeof e._owner.tag == "number" ? O = M(e._owner.type) : typeof e._owner.name == "string" && (O = e._owner.name), O = " It was passed a child from " + O + ".");
          var P = T.getCurrentStack;
          T.getCurrentStack = function() {
            var G = L(e.type);
            return P && (G += P() || ""), G;
          }, console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            o,
            O
          ), T.getCurrentStack = P;
        }
      }
      function Ee(e) {
        var o = "", O = Z();
        return O && (O = M(O.type)) && (o = `

Check the render method of \`` + O + "`."), o || (e = M(e)) && (o = `

Check the top-level render call using <` + e + ">."), o;
      }
      function ee(e) {
        var o = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(O) {
          return o[O];
        });
      }
      function ve(e, o) {
        return typeof e == "object" && e !== null && e.key != null ? (m(e.key), ee("" + e.key)) : o.toString(36);
      }
      function he() {
      }
      function me(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(he, he) : (e.status = "pending", e.then(
              function(o) {
                e.status === "pending" && (e.status = "fulfilled", e.value = o);
              },
              function(o) {
                e.status === "pending" && (e.status = "rejected", e.reason = o);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function ce(e, o, O, P, G) {
        var V = typeof e;
        (V === "undefined" || V === "boolean") && (e = null);
        var W = !1;
        if (e === null) W = !0;
        else
          switch (V) {
            case "bigint":
            case "string":
            case "number":
              W = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case j:
                case l:
                  W = !0;
                  break;
                case Oe:
                  return W = e._init, ce(
                    W(e._payload),
                    o,
                    O,
                    P,
                    G
                  );
              }
          }
        if (W) {
          W = e, G = G(W);
          var ye = P === "" ? "." + ve(W, 0) : P;
          return z(G) ? (O = "", ye != null && (O = ye.replace(Qe, "$&/") + "/"), ce(G, o, O, "", function(Ae) {
            return Ae;
          })) : G != null && (te(G) && (G.key != null && (W && W.key === G.key || m(G.key)), O = J(
            G,
            O + (G.key == null || W && W.key === G.key ? "" : ("" + G.key).replace(
              Qe,
              "$&/"
            ) + "/") + ye
          ), P !== "" && W != null && te(W) && W.key == null && W._store && !W._store.validated && (O._store.validated = 2), G = O), o.push(G)), 1;
        }
        if (W = 0, ye = P === "" ? "." : P + ":", z(e))
          for (var ge = 0; ge < e.length; ge++)
            P = e[ge], V = ye + ve(P, ge), W += ce(
              P,
              o,
              O,
              V,
              G
            );
        else if (ge = y(e), typeof ge == "function")
          for (ge === e.entries && (it || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), it = !0), e = ge.call(e), ge = 0; !(P = e.next()).done; )
            P = P.value, V = ye + ve(P, ge++), W += ce(
              P,
              o,
              O,
              V,
              G
            );
        else if (V === "object") {
          if (typeof e.then == "function")
            return ce(
              me(e),
              o,
              O,
              P,
              G
            );
          throw o = String(e), Error(
            "Objects are not valid as a React child (found: " + (o === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return W;
      }
      function Ce(e, o, O) {
        if (e == null) return e;
        var P = [], G = 0;
        return ce(e, P, "", "", function(V) {
          return o.call(O, V, G++);
        }), P;
      }
      function be(e) {
        if (e._status === -1) {
          var o = e._result;
          o = o(), o.then(
            function(O) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = O);
            },
            function(O) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = O);
            }
          ), e._status === -1 && (e._status = 0, e._result = o);
        }
        if (e._status === 1)
          return o = e._result, o === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            o
          ), "default" in o || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            o
          ), o.default;
        throw e._result;
      }
      function Y() {
        var e = T.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function r() {
      }
      function w(e) {
        if (ae === null)
          try {
            var o = ("require" + Math.random()).slice(0, 7);
            ae = (c && c[o]).call(
              c,
              "timers"
            ).setImmediate;
          } catch {
            ae = function(P) {
              st === !1 && (st = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var G = new MessageChannel();
              G.port1.onmessage = P, G.port2.postMessage(void 0);
            };
          }
        return ae(e);
      }
      function F(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function R(e, o) {
        o !== Se - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Se = o;
      }
      function h(e, o, O) {
        var P = T.actQueue;
        if (P !== null)
          if (P.length !== 0)
            try {
              $(P), w(function() {
                return h(e, o, O);
              });
              return;
            } catch (G) {
              T.thrownErrors.push(G);
            }
          else T.actQueue = null;
        0 < T.thrownErrors.length ? (P = F(T.thrownErrors), T.thrownErrors.length = 0, O(P)) : o(e);
      }
      function $(e) {
        if (!ze) {
          ze = !0;
          var o = 0;
          try {
            for (; o < e.length; o++) {
              var O = e[o];
              do {
                T.didUsePromise = !1;
                var P = O(!1);
                if (P !== null) {
                  if (T.didUsePromise) {
                    e[o] = O, e.splice(0, o);
                    return;
                  }
                  O = P;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (G) {
            e.splice(0, o + 1), T.thrownErrors.push(G);
          } finally {
            ze = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var j = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), se = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), d = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), Re = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), pe = Symbol.iterator, xe = {}, t = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          v(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          v(e, "replaceState");
        },
        enqueueSetState: function(e) {
          v(e, "setState");
        }
      }, E = Object.assign, k = {};
      Object.freeze(k), g.prototype.isReactComponent = {}, g.prototype.setState = function(e, o) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, o, "setState");
      }, g.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var U = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, S;
      for (S in U)
        U.hasOwnProperty(S) && C(S, U[S]);
      x.prototype = g.prototype, U = A.prototype = new x(), U.constructor = A, E(U, g.prototype), U.isPureReactComponent = !0;
      var z = Array.isArray, p = Symbol.for("react.client.reference"), T = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null
      }, ue = Object.prototype.hasOwnProperty, le = Symbol.for("react.client.reference"), fe = 0, Pe, Te, qe, _e, We, Fe, Xe;
      n.__reactDisabledLog = !0;
      var Ke, ke, Me = !1, Ge = new (typeof WeakMap == "function" ? WeakMap : Map)(), pt = Symbol.for("react.client.reference"), rt, Le, nt = {}, ot = {}, it = !1, Qe = /\/+/g, Ze = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var o = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(o)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, st = !1, ae = null, Se = 0, Ie = !1, ze = !1, He = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : w;
      s.Children = {
        map: Ce,
        forEach: function(e, o, O) {
          Ce(
            e,
            function() {
              o.apply(this, arguments);
            },
            O
          );
        },
        count: function(e) {
          var o = 0;
          return Ce(e, function() {
            o++;
          }), o;
        },
        toArray: function(e) {
          return Ce(e, function(o) {
            return o;
          }) || [];
        },
        only: function(e) {
          if (!te(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, s.Component = g, s.Fragment = I, s.Profiler = se, s.PureComponent = A, s.StrictMode = ne, s.Suspense = D, s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, s.act = function(e) {
        var o = T.actQueue, O = Se;
        Se++;
        var P = T.actQueue = o !== null ? o : [], G = !1;
        try {
          var V = e();
        } catch (ge) {
          T.thrownErrors.push(ge);
        }
        if (0 < T.thrownErrors.length)
          throw R(o, O), e = F(T.thrownErrors), T.thrownErrors.length = 0, e;
        if (V !== null && typeof V == "object" && typeof V.then == "function") {
          var W = V;
          return He(function() {
            G || Ie || (Ie = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(ge, Ae) {
              G = !0, W.then(
                function($e) {
                  if (R(o, O), O === 0) {
                    try {
                      $(P), w(function() {
                        return h(
                          $e,
                          ge,
                          Ae
                        );
                      });
                    } catch (Ue) {
                      T.thrownErrors.push(Ue);
                    }
                    if (0 < T.thrownErrors.length) {
                      var Ye = F(
                        T.thrownErrors
                      );
                      T.thrownErrors.length = 0, Ae(Ye);
                    }
                  } else ge($e);
                },
                function($e) {
                  R(o, O), 0 < T.thrownErrors.length && ($e = F(
                    T.thrownErrors
                  ), T.thrownErrors.length = 0), Ae($e);
                }
              );
            }
          };
        }
        var ye = V;
        if (R(o, O), O === 0 && ($(P), P.length !== 0 && He(function() {
          G || Ie || (Ie = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), T.actQueue = null), 0 < T.thrownErrors.length)
          throw e = F(T.thrownErrors), T.thrownErrors.length = 0, e;
        return {
          then: function(ge, Ae) {
            G = !0, O === 0 ? (T.actQueue = P, w(function() {
              return h(
                ye,
                ge,
                Ae
              );
            })) : ge(ye);
          }
        };
      }, s.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, s.cloneElement = function(e, o, O) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var P = E({}, e.props), G = e.key, V = e._owner;
        if (o != null) {
          var W;
          e: {
            if (ue.call(o, "ref") && (W = Object.getOwnPropertyDescriptor(
              o,
              "ref"
            ).get) && W.isReactWarning) {
              W = !1;
              break e;
            }
            W = o.ref !== void 0;
          }
          W && (V = Z()), _(o) && (m(o.key), G = "" + o.key);
          for (ye in o)
            !ue.call(o, ye) || ye === "key" || ye === "__self" || ye === "__source" || ye === "ref" && o.ref === void 0 || (P[ye] = o[ye]);
        }
        var ye = arguments.length - 2;
        if (ye === 1) P.children = O;
        else if (1 < ye) {
          W = Array(ye);
          for (var ge = 0; ge < ye; ge++)
            W[ge] = arguments[ge + 2];
          P.children = W;
        }
        for (P = X(e.type, G, void 0, void 0, V, P), G = 2; G < arguments.length; G++)
          ie(arguments[G], P.type);
        return P;
      }, s.createContext = function(e) {
        return e = {
          $$typeof: d,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: u,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, s.createElement = function(e, o, O) {
        if (a(e))
          for (var P = 2; P < arguments.length; P++)
            ie(arguments[P], e);
        else {
          if (P = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null) var G = "null";
          else
            z(e) ? G = "array" : e !== void 0 && e.$$typeof === j ? (G = "<" + (M(e.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : G = typeof e;
          console.error(
            "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
            G,
            P
          );
        }
        var V;
        if (P = {}, G = null, o != null)
          for (V in Le || !("__self" in o) || "key" in o || (Le = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), _(o) && (m(o.key), G = "" + o.key), o)
            ue.call(o, V) && V !== "key" && V !== "__self" && V !== "__source" && (P[V] = o[V]);
        var W = arguments.length - 2;
        if (W === 1) P.children = O;
        else if (1 < W) {
          for (var ye = Array(W), ge = 0; ge < W; ge++)
            ye[ge] = arguments[ge + 2];
          Object.freeze && Object.freeze(ye), P.children = ye;
        }
        if (e && e.defaultProps)
          for (V in W = e.defaultProps, W)
            P[V] === void 0 && (P[V] = W[V]);
        return G && B(
          P,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        ), X(e, G, void 0, void 0, Z(), P);
      }, s.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, s.forwardRef = function(e) {
        e != null && e.$$typeof === Re ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var o = { $$typeof: de, render: e }, O;
        return Object.defineProperty(o, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return O;
          },
          set: function(P) {
            O = P, e.name || e.displayName || (Object.defineProperty(e, "name", { value: P }), e.displayName = P);
          }
        }), o;
      }, s.isValidElement = te, s.lazy = function(e) {
        return {
          $$typeof: Oe,
          _payload: { _status: -1, _result: e },
          _init: be
        };
      }, s.memo = function(e, o) {
        a(e) || console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), o = {
          $$typeof: Re,
          type: e,
          compare: o === void 0 ? null : o
        };
        var O;
        return Object.defineProperty(o, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return O;
          },
          set: function(P) {
            O = P, e.name || e.displayName || (Object.defineProperty(e, "name", { value: P }), e.displayName = P);
          }
        }), o;
      }, s.startTransition = function(e) {
        var o = T.T, O = {};
        T.T = O, O._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var P = e(), G = T.S;
          G !== null && G(O, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(r, Ze);
        } catch (V) {
          Ze(V);
        } finally {
          o === null && O._updatedFibers && (e = O._updatedFibers.size, O._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), T.T = o;
        }
      }, s.unstable_useCacheRefresh = function() {
        return Y().useCacheRefresh();
      }, s.use = function(e) {
        return Y().use(e);
      }, s.useActionState = function(e, o, O) {
        return Y().useActionState(
          e,
          o,
          O
        );
      }, s.useCallback = function(e, o) {
        return Y().useCallback(e, o);
      }, s.useContext = function(e) {
        var o = Y();
        return e.$$typeof === u && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), o.useContext(e);
      }, s.useDebugValue = function(e, o) {
        return Y().useDebugValue(e, o);
      }, s.useDeferredValue = function(e, o) {
        return Y().useDeferredValue(e, o);
      }, s.useEffect = function(e, o) {
        return Y().useEffect(e, o);
      }, s.useId = function() {
        return Y().useId();
      }, s.useImperativeHandle = function(e, o, O) {
        return Y().useImperativeHandle(e, o, O);
      }, s.useInsertionEffect = function(e, o) {
        return Y().useInsertionEffect(e, o);
      }, s.useLayoutEffect = function(e, o) {
        return Y().useLayoutEffect(e, o);
      }, s.useMemo = function(e, o) {
        return Y().useMemo(e, o);
      }, s.useOptimistic = function(e, o) {
        return Y().useOptimistic(e, o);
      }, s.useReducer = function(e, o, O) {
        return Y().useReducer(e, o, O);
      }, s.useRef = function(e) {
        return Y().useRef(e);
      }, s.useState = function(e) {
        return Y().useState(e);
      }, s.useSyncExternalStore = function(e, o, O) {
        return Y().useSyncExternalStore(
          e,
          o,
          O
        );
      }, s.useTransition = function() {
        return Y().useTransition();
      }, s.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(tt, tt.exports)), tt.exports;
}
process.env.NODE_ENV === "production" ? At.exports = ar() : At.exports = ur();
var De = At.exports;
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function cr() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && function() {
    function c(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === be ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case X:
          return "Fragment";
        case q:
          return "Portal";
        case ie:
          return "Profiler";
        case J:
          return "StrictMode";
        case ee:
          return "Suspense";
        case ve:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case re:
            return (t.displayName || "Context") + ".Provider";
          case te:
            return (t._context.displayName || "Context") + ".Consumer";
          case Ee:
            var E = t.render;
            return t = t.displayName, t || (t = E.displayName || E.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case he:
            return E = t.displayName || null, E !== null ? E : c(t.type) || "Memo";
          case me:
            E = t._payload, t = t._init;
            try {
              return c(t(E));
            } catch {
            }
        }
      return null;
    }
    function s(t) {
      return "" + t;
    }
    function C(t) {
      try {
        s(t);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var k = E.error, U = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return k.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), s(t);
      }
    }
    function y() {
    }
    function v() {
      if (h === 0) {
        $ = console.log, j = console.info, l = console.warn, I = console.error, ne = console.group, se = console.groupCollapsed, u = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: y,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      h++;
    }
    function g() {
      if (h--, h === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: w({}, t, { value: $ }),
          info: w({}, t, { value: j }),
          warn: w({}, t, { value: l }),
          error: w({}, t, { value: I }),
          group: w({}, t, { value: ne }),
          groupCollapsed: w({}, t, { value: se }),
          groupEnd: w({}, t, { value: u })
        });
      }
      0 > h && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function x(t) {
      if (d === void 0)
        try {
          throw Error();
        } catch (k) {
          var E = k.stack.trim().match(/\n( *(at )?)/);
          d = E && E[1] || "", de = -1 < k.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < k.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + d + t + de;
    }
    function A(t, E) {
      if (!t || D) return "";
      var k = Q.get(t);
      if (k !== void 0) return k;
      D = !0, k = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var U = null;
      U = Y.H, Y.H = null, v();
      try {
        var S = {
          DetermineComponentFrameRoot: function() {
            try {
              if (E) {
                var Te = function() {
                  throw Error();
                };
                if (Object.defineProperty(Te.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Te, []);
                  } catch (_e) {
                    var qe = _e;
                  }
                  Reflect.construct(t, [], Te);
                } else {
                  try {
                    Te.call();
                  } catch (_e) {
                    qe = _e;
                  }
                  t.call(Te.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (_e) {
                  qe = _e;
                }
                (Te = t()) && typeof Te.catch == "function" && Te.catch(function() {
                });
              }
            } catch (_e) {
              if (_e && qe && typeof _e.stack == "string")
                return [_e.stack, qe.stack];
            }
            return [null, null];
          }
        };
        S.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var z = Object.getOwnPropertyDescriptor(
          S.DetermineComponentFrameRoot,
          "name"
        );
        z && z.configurable && Object.defineProperty(
          S.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var p = S.DetermineComponentFrameRoot(), T = p[0], ue = p[1];
        if (T && ue) {
          var le = T.split(`
`), fe = ue.split(`
`);
          for (p = z = 0; z < le.length && !le[z].includes(
            "DetermineComponentFrameRoot"
          ); )
            z++;
          for (; p < fe.length && !fe[p].includes(
            "DetermineComponentFrameRoot"
          ); )
            p++;
          if (z === le.length || p === fe.length)
            for (z = le.length - 1, p = fe.length - 1; 1 <= z && 0 <= p && le[z] !== fe[p]; )
              p--;
          for (; 1 <= z && 0 <= p; z--, p--)
            if (le[z] !== fe[p]) {
              if (z !== 1 || p !== 1)
                do
                  if (z--, p--, 0 > p || le[z] !== fe[p]) {
                    var Pe = `
` + le[z].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", t.displayName)), typeof t == "function" && Q.set(t, Pe), Pe;
                  }
                while (1 <= z && 0 <= p);
              break;
            }
        }
      } finally {
        D = !1, Y.H = U, g(), Error.prepareStackTrace = k;
      }
      return le = (le = t ? t.displayName || t.name : "") ? x(le) : "", typeof t == "function" && Q.set(t, le), le;
    }
    function b(t) {
      if (t == null) return "";
      if (typeof t == "function") {
        var E = t.prototype;
        return A(
          t,
          !(!E || !E.isReactComponent)
        );
      }
      if (typeof t == "string") return x(t);
      switch (t) {
        case ee:
          return x("Suspense");
        case ve:
          return x("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Ee:
            return t = A(t.render, !1), t;
          case he:
            return b(t.type);
          case me:
            E = t._payload, t = t._init;
            try {
              return b(t(E));
            } catch {
            }
        }
      return "";
    }
    function m() {
      var t = Y.A;
      return t === null ? null : t.getOwner();
    }
    function M(t) {
      if (r.call(t, "key")) {
        var E = Object.getOwnPropertyDescriptor(t, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function a(t, E) {
      function k() {
        Oe || (Oe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: k,
        configurable: !0
      });
    }
    function n() {
      var t = c(this.type);
      return we[t] || (we[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function f(t, E, k, U, S, z) {
      return k = z.ref, t = {
        $$typeof: B,
        type: t,
        key: E,
        props: z,
        _owner: S
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: n
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function N(t, E, k, U, S, z) {
      if (typeof t == "string" || typeof t == "function" || t === X || t === ie || t === J || t === ee || t === ve || t === ce || typeof t == "object" && t !== null && (t.$$typeof === me || t.$$typeof === he || t.$$typeof === re || t.$$typeof === te || t.$$typeof === Ee || t.$$typeof === F || t.getModuleId !== void 0)) {
        var p = E.children;
        if (p !== void 0)
          if (U)
            if (R(p)) {
              for (U = 0; U < p.length; U++)
                H(p[U], t);
              Object.freeze && Object.freeze(p);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else H(p, t);
      } else
        p = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? U = "null" : R(t) ? U = "array" : t !== void 0 && t.$$typeof === B ? (U = "<" + (c(t.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : U = typeof t, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          U,
          p
        );
      if (r.call(E, "key")) {
        p = c(t);
        var T = Object.keys(E).filter(function(le) {
          return le !== "key";
        });
        U = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", pe[p + U] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          p,
          T,
          p
        ), pe[p + U] = !0);
      }
      if (p = null, k !== void 0 && (C(k), p = "" + k), M(E) && (C(E.key), p = "" + E.key), "key" in E) {
        k = {};
        for (var ue in E)
          ue !== "key" && (k[ue] = E[ue]);
      } else k = E;
      return p && a(
        k,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), f(t, p, z, S, m(), k);
    }
    function H(t, E) {
      if (typeof t == "object" && t && t.$$typeof !== Re) {
        if (R(t))
          for (var k = 0; k < t.length; k++) {
            var U = t[k];
            K(U) && L(U, E);
          }
        else if (K(t))
          t._store && (t._store.validated = 1);
        else if (t === null || typeof t != "object" ? k = null : (k = Ce && t[Ce] || t["@@iterator"], k = typeof k == "function" ? k : null), typeof k == "function" && k !== t.entries && (k = k.call(t), k !== t))
          for (; !(t = k.next()).done; )
            K(t.value) && L(t.value, E);
      }
    }
    function K(t) {
      return typeof t == "object" && t !== null && t.$$typeof === B;
    }
    function L(t, E) {
      if (t._store && !t._store.validated && t.key == null && (t._store.validated = 1, E = Z(E), !xe[E])) {
        xe[E] = !0;
        var k = "";
        t && t._owner != null && t._owner !== m() && (k = null, typeof t._owner.tag == "number" ? k = c(t._owner.type) : typeof t._owner.name == "string" && (k = t._owner.name), k = " It was passed a child from " + k + ".");
        var U = Y.getCurrentStack;
        Y.getCurrentStack = function() {
          var S = b(t.type);
          return U && (S += U() || ""), S;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          E,
          k
        ), Y.getCurrentStack = U;
      }
    }
    function Z(t) {
      var E = "", k = m();
      return k && (k = c(k.type)) && (E = `

Check the render method of \`` + k + "`."), E || (t = c(t)) && (E = `

Check the top-level render call using <` + t + ">."), E;
    }
    var _ = De, B = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), re = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), he = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), ce = Symbol.for("react.offscreen"), Ce = Symbol.iterator, be = Symbol.for("react.client.reference"), Y = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, r = Object.prototype.hasOwnProperty, w = Object.assign, F = Symbol.for("react.client.reference"), R = Array.isArray, h = 0, $, j, l, I, ne, se, u;
    y.__reactDisabledLog = !0;
    var d, de, D = !1, Q = new (typeof WeakMap == "function" ? WeakMap : Map)(), Re = Symbol.for("react.client.reference"), Oe, we = {}, pe = {}, xe = {};
    et.Fragment = X, et.jsx = function(t, E, k, U, S) {
      return N(t, E, k, !1, U, S);
    }, et.jsxs = function(t, E, k, U, S) {
      return N(t, E, k, !0, U, S);
    };
  }()), et;
}
process.env.NODE_ENV === "production" ? xt.exports = sr() : xt.exports = cr();
var i = xt.exports;
const Jt = ({ title: c, variation: s, size: C, ...y }) => /* @__PURE__ */ i.jsx("button", { className: `${s} ${C}`, ...y, children: c }), Mr = ({
  errors: c,
  register: s,
  label: C,
  ...y
}) => {
  var v;
  return /* @__PURE__ */ i.jsxs("div", { className: "mt-5 mb-2 w-full", children: [
    /* @__PURE__ */ i.jsx(
      "label",
      {
        htmlFor: C,
        className: `mb-2 block w-full text-sm ${y.disabled ? "text-gray-400" : ""}`,
        children: C
      }
    ),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        id: C,
        ...c,
        ...s && typeof s == "object" ? s : {},
        ...y,
        className: `${y.name && c[y.name] != null && !(y != null && y.disabled) ? "border-[#FF4949] text-[#FF4949] placeholder-[#FF4949] focus:outline-1 focus:outline-[#FF4949]" : "border-[#d7d7d7] focus:placeholder-black"} h-12 w-full rounded-lg border bg-white px-3.5 py-3.5 focus:outline-1 disabled:border-[#c6c6c6] disabled:bg-[#ebebeb] disabled:text-[#8f8f8f]`
      }
    ),
    c && y.name && c[y.name] != null && !(y != null && y.disabled) && /* @__PURE__ */ i.jsx("span", { className: "mt-1 block w-full text-xs text-[#FF4949]", children: (v = c == null ? void 0 : c[y.name]) == null ? void 0 : v.message })
  ] });
}, Lr = ({ text: c }) => /* @__PURE__ */ i.jsx("h1", { children: c }), lr = ({ text: c }) => /* @__PURE__ */ i.jsx("h2", { children: c }), er = ({ text: c }) => /* @__PURE__ */ i.jsx("h3", { children: c }), $r = ({ text: c }) => /* @__PURE__ */ i.jsx("h4", { children: c }), fr = ({ text: c }) => /* @__PURE__ */ i.jsx("h5", { children: c }), Ir = ({ text: c }) => /* @__PURE__ */ i.jsx("h6", { children: c }), Hr = ({
  open: c,
  children: s
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    style: {
      backgroundImage: 'url("/modal-background.png")',
      backgroundAttachment: "fixed",
      position: "fixed",
      width: "100vw",
      zIndex: "1000",
      top: "0px",
      left: "0px",
      overflow: "auto",
      display: "flex",
      justifyContent: "center"
    },
    children: /* @__PURE__ */ i.jsx("div", { className: "dialogStyle", children: /* @__PURE__ */ i.jsx("dialog", { open: c, children: /* @__PURE__ */ i.jsx("div", { className: "dialog-content", children: s }) }) })
  }
), Dr = ({
  icon: c,
  title: s,
  textInfo: C,
  children: y
}) => /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("div", { className: "blocks-wrapper", children: [
  c && /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `blocks-wrapper__icon blocks-wrapper__icon--${c}`
    }
  ),
  /* @__PURE__ */ i.jsx(er, { text: s }),
  /* @__PURE__ */ i.jsx("p", { className: "blocks-wrapper__text", children: C }),
  /* @__PURE__ */ i.jsx("div", { className: "blocks-wrapper__content", children: y })
] }) }), qr = ({
  arrayValues: c,
  name: s,
  title: C,
  register: y
}) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsx("label", { htmlFor: C, children: C }),
  /* @__PURE__ */ i.jsx("select", { ...y(s), children: c == null ? void 0 : c.map((v) => /* @__PURE__ */ i.jsx("option", { value: v == null ? void 0 : v.value, children: v == null ? void 0 : v.text }, v == null ? void 0 : v.value)) })
] }), Ur = ({
  children: c,
  imageEvent: s,
  titleEvent: C,
  location: y,
  dateEvent: v,
  colorStatus: g,
  status: x,
  registrations: A,
  linkDoEvento: b,
  ...m
}) => /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsx("div", { className: "wrapper", children: /* @__PURE__ */ i.jsx("a", { href: b, children: /* @__PURE__ */ i.jsxs("div", { className: "Card", children: [
  /* @__PURE__ */ i.jsx("div", { className: "Card__image-event", children: /* @__PURE__ */ i.jsx("img", { src: s, alt: "" }) }),
  /* @__PURE__ */ i.jsxs("div", { className: "Card__info", children: [
    /* @__PURE__ */ i.jsx("strong", { children: C }),
    /* @__PURE__ */ i.jsxs("p", { children: [
      " ",
      y
    ] }),
    /* @__PURE__ */ i.jsxs("p", { children: [
      "Data do evento: ",
      v
    ] }),
    /* @__PURE__ */ i.jsxs("p", { children: [
      "Inscrições até: ",
      A
    ] })
  ] })
] }) }) }) }), zr = ({ text: c, className: s }) => /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsx("div", { className: `${s}`, children: c }) }), Br = ({
  title: c,
  textInfo: s,
  children: C,
  closeModal: y
}) => /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("div", { className: "blocks-wrapper", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "blocks-wrapper__title", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "blocks-wrapper__title__info", children: [
      /* @__PURE__ */ i.jsx(er, { text: c }),
      /* @__PURE__ */ i.jsx("p", { children: s })
    ] }),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "blocks-wrapper__title__close",
        onClick: y
      }
    )
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "blocks-wrapper__content", children: C }),
  /* @__PURE__ */ i.jsx("div", { className: "blocks-wrapper__btn-save", children: /* @__PURE__ */ i.jsx(Jt, { title: "Salvar", variation: "dark", size: "medium" }) })
] }) }), Gr = ({ type: c, title: s, info: C }) => /* @__PURE__ */ i.jsxs("div", { className: `notification ${c}`, children: [
  /* @__PURE__ */ i.jsx("div", { className: `notification__icon ${c}__icon` }),
  /* @__PURE__ */ i.jsxs("div", { className: "notification__title", children: [
    /* @__PURE__ */ i.jsx("h4", { children: s }),
    /* @__PURE__ */ i.jsx("p", { children: C })
  ] })
] }), Yr = ({
  optionSearch: c,
  register: s
}) => {
  const [C, y] = De.useState(!1);
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("div", { className: `searchbar ${C ? "focused" : ""}`, children: [
    /* @__PURE__ */ i.jsx("select", { name: "", id: "", children: c == null ? void 0 : c.map((v) => /* @__PURE__ */ i.jsx("option", { value: v == null ? void 0 : v.value, children: v == null ? void 0 : v.text }, v == null ? void 0 : v.value)) }),
    /* @__PURE__ */ i.jsx("div", { className: "line" }),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        placeholder: "Pesquise",
        type: "search",
        onFocus: () => y(!0),
        onBlur: () => y(!1)
      }
    )
  ] }) });
}, Wr = ({ title: c, subtitle: s }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsx(lr, { text: c }),
  /* @__PURE__ */ i.jsx(fr, { text: s })
] });
var Ct = { exports: {} }, Ve = {};
function dr(c) {
  return c && c.__esModule ? c : { default: c };
}
Ve._ = dr;
var Tt = {};
function tr(c) {
  if (typeof WeakMap != "function") return null;
  var s = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
  return (tr = function(y) {
    return y ? C : s;
  })(c);
}
function pr(c, s) {
  if (!s && c && c.__esModule) return c;
  if (c === null || typeof c != "object" && typeof c != "function") return { default: c };
  var C = tr(s);
  if (C && C.has(c)) return C.get(c);
  var y = { __proto__: null }, v = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var g in c)
    if (g !== "default" && Object.prototype.hasOwnProperty.call(c, g)) {
      var x = v ? Object.getOwnPropertyDescriptor(c, g) : null;
      x && (x.get || x.set) ? Object.defineProperty(y, g, x) : y[g] = c[g];
    }
  return y.default = c, C && C.set(c, y), y;
}
Tt._ = pr;
var ut = { exports: {} }, je = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt;
function hr() {
  if (Mt) return je;
  Mt = 1;
  var c = De;
  function s(b) {
    var m = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var M = 2; M < arguments.length; M++)
        m += "&args[]=" + encodeURIComponent(arguments[M]);
    }
    return "Minified React error #" + b + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function C() {
  }
  var y = {
    d: {
      f: C,
      r: function() {
        throw Error(s(522));
      },
      D: C,
      C,
      L: C,
      m: C,
      X: C,
      S: C,
      M: C
    },
    p: 0,
    findDOMNode: null
  }, v = Symbol.for("react.portal");
  function g(b, m, M) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: v,
      key: a == null ? null : "" + a,
      children: b,
      containerInfo: m,
      implementation: M
    };
  }
  var x = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function A(b, m) {
    if (b === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, je.createPortal = function(b, m) {
    var M = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(s(299));
    return g(b, m, null, M);
  }, je.flushSync = function(b) {
    var m = x.T, M = y.p;
    try {
      if (x.T = null, y.p = 2, b) return b();
    } finally {
      x.T = m, y.p = M, y.d.f();
    }
  }, je.preconnect = function(b, m) {
    typeof b == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, y.d.C(b, m));
  }, je.prefetchDNS = function(b) {
    typeof b == "string" && y.d.D(b);
  }, je.preinit = function(b, m) {
    if (typeof b == "string" && m && typeof m.as == "string") {
      var M = m.as, a = A(M, m.crossOrigin), n = typeof m.integrity == "string" ? m.integrity : void 0, f = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      M === "style" ? y.d.S(
        b,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: a,
          integrity: n,
          fetchPriority: f
        }
      ) : M === "script" && y.d.X(b, {
        crossOrigin: a,
        integrity: n,
        fetchPriority: f,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, je.preinitModule = function(b, m) {
    if (typeof b == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var M = A(
            m.as,
            m.crossOrigin
          );
          y.d.M(b, {
            crossOrigin: M,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0
          });
        }
      } else m == null && y.d.M(b);
  }, je.preload = function(b, m) {
    if (typeof b == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var M = m.as, a = A(M, m.crossOrigin);
      y.d.L(b, M, {
        crossOrigin: a,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, je.preloadModule = function(b, m) {
    if (typeof b == "string")
      if (m) {
        var M = A(m.as, m.crossOrigin);
        y.d.m(b, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: M,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0
        });
      } else y.d.m(b);
  }, je.requestFormReset = function(b) {
    y.d.r(b);
  }, je.unstable_batchedUpdates = function(b, m) {
    return b(m);
  }, je.useFormState = function(b, m, M) {
    return x.H.useFormState(b, m, M);
  }, je.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, je.version = "19.0.0", je;
}
var Ne = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function gr() {
  return Lt || (Lt = 1, process.env.NODE_ENV !== "production" && function() {
    function c() {
    }
    function s(a) {
      return "" + a;
    }
    function C(a, n, f) {
      var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        s(N);
        var H = !1;
      } catch {
        H = !0;
      }
      return H && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && N[Symbol.toStringTag] || N.constructor.name || "Object"
      ), s(N)), {
        $$typeof: m,
        key: N == null ? null : "" + N,
        children: a,
        containerInfo: n,
        implementation: f
      };
    }
    function y(a, n) {
      if (a === "font") return "";
      if (typeof n == "string")
        return n === "use-credentials" ? n : "";
    }
    function v(a) {
      return a === null ? "`null`" : a === void 0 ? "`undefined`" : a === "" ? "an empty string" : 'something with type "' + typeof a + '"';
    }
    function g(a) {
      return a === null ? "`null`" : a === void 0 ? "`undefined`" : a === "" ? "an empty string" : typeof a == "string" ? JSON.stringify(a) : typeof a == "number" ? "`" + a + "`" : 'something with type "' + typeof a + '"';
    }
    function x() {
      var a = M.H;
      return a === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), a;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var A = De, b = {
      d: {
        f: c,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: c,
        C: c,
        L: c,
        m: c,
        X: c,
        S: c,
        M: c
      },
      p: 0,
      findDOMNode: null
    }, m = Symbol.for("react.portal"), M = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = b, Ne.createPortal = function(a, n) {
      var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return C(a, n, null, f);
    }, Ne.flushSync = function(a) {
      var n = M.T, f = b.p;
      try {
        if (M.T = null, b.p = 2, a)
          return a();
      } finally {
        M.T = n, b.p = f, b.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Ne.preconnect = function(a, n) {
      typeof a == "string" && a ? n != null && typeof n != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        g(n)
      ) : n != null && typeof n.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        v(n.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        v(a)
      ), typeof a == "string" && (n ? (n = n.crossOrigin, n = typeof n == "string" ? n === "use-credentials" ? n : "" : void 0) : n = null, b.d.C(a, n));
    }, Ne.prefetchDNS = function(a) {
      if (typeof a != "string" || !a)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          v(a)
        );
      else if (1 < arguments.length) {
        var n = arguments[1];
        typeof n == "object" && n.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          g(n)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          g(n)
        );
      }
      typeof a == "string" && b.d.D(a);
    }, Ne.preinit = function(a, n) {
      if (typeof a == "string" && a ? n == null || typeof n != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        g(n)
      ) : n.as !== "style" && n.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        g(n.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        v(a)
      ), typeof a == "string" && n && typeof n.as == "string") {
        var f = n.as, N = y(f, n.crossOrigin), H = typeof n.integrity == "string" ? n.integrity : void 0, K = typeof n.fetchPriority == "string" ? n.fetchPriority : void 0;
        f === "style" ? b.d.S(
          a,
          typeof n.precedence == "string" ? n.precedence : void 0,
          {
            crossOrigin: N,
            integrity: H,
            fetchPriority: K
          }
        ) : f === "script" && b.d.X(a, {
          crossOrigin: N,
          integrity: H,
          fetchPriority: K,
          nonce: typeof n.nonce == "string" ? n.nonce : void 0
        });
      }
    }, Ne.preinitModule = function(a, n) {
      var f = "";
      if (typeof a == "string" && a || (f += " The `href` argument encountered was " + v(a) + "."), n !== void 0 && typeof n != "object" ? f += " The `options` argument encountered was " + v(n) + "." : n && "as" in n && n.as !== "script" && (f += " The `as` option encountered was " + g(n.as) + "."), f)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          f
        );
      else
        switch (f = n && typeof n.as == "string" ? n.as : "script", f) {
          case "script":
            break;
          default:
            f = g(f), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              f,
              a
            );
        }
      typeof a == "string" && (typeof n == "object" && n !== null ? (n.as == null || n.as === "script") && (f = y(
        n.as,
        n.crossOrigin
      ), b.d.M(a, {
        crossOrigin: f,
        integrity: typeof n.integrity == "string" ? n.integrity : void 0,
        nonce: typeof n.nonce == "string" ? n.nonce : void 0
      })) : n == null && b.d.M(a));
    }, Ne.preload = function(a, n) {
      var f = "";
      if (typeof a == "string" && a || (f += " The `href` argument encountered was " + v(a) + "."), n == null || typeof n != "object" ? f += " The `options` argument encountered was " + v(n) + "." : typeof n.as == "string" && n.as || (f += " The `as` option encountered was " + v(n.as) + "."), f && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        f
      ), typeof a == "string" && typeof n == "object" && n !== null && typeof n.as == "string") {
        f = n.as;
        var N = y(
          f,
          n.crossOrigin
        );
        b.d.L(a, f, {
          crossOrigin: N,
          integrity: typeof n.integrity == "string" ? n.integrity : void 0,
          nonce: typeof n.nonce == "string" ? n.nonce : void 0,
          type: typeof n.type == "string" ? n.type : void 0,
          fetchPriority: typeof n.fetchPriority == "string" ? n.fetchPriority : void 0,
          referrerPolicy: typeof n.referrerPolicy == "string" ? n.referrerPolicy : void 0,
          imageSrcSet: typeof n.imageSrcSet == "string" ? n.imageSrcSet : void 0,
          imageSizes: typeof n.imageSizes == "string" ? n.imageSizes : void 0,
          media: typeof n.media == "string" ? n.media : void 0
        });
      }
    }, Ne.preloadModule = function(a, n) {
      var f = "";
      typeof a == "string" && a || (f += " The `href` argument encountered was " + v(a) + "."), n !== void 0 && typeof n != "object" ? f += " The `options` argument encountered was " + v(n) + "." : n && "as" in n && typeof n.as != "string" && (f += " The `as` option encountered was " + v(n.as) + "."), f && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        f
      ), typeof a == "string" && (n ? (f = y(
        n.as,
        n.crossOrigin
      ), b.d.m(a, {
        as: typeof n.as == "string" && n.as !== "script" ? n.as : void 0,
        crossOrigin: f,
        integrity: typeof n.integrity == "string" ? n.integrity : void 0
      })) : b.d.m(a));
    }, Ne.requestFormReset = function(a) {
      b.d.r(a);
    }, Ne.unstable_batchedUpdates = function(a, n) {
      return a(n);
    }, Ne.useFormState = function(a, n, f) {
      return x().useFormState(a, n, f);
    }, Ne.useFormStatus = function() {
      return x().useHostTransitionStatus();
    }, Ne.version = "19.0.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ne;
}
var $t;
function mr() {
  if ($t) return ut.exports;
  $t = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (c(), ut.exports = hr()) : ut.exports = gr(), ut.exports;
}
var ct = { exports: {} }, ht = {}, It;
function _r() {
  return It || (It = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), Object.defineProperty(c, "default", {
      enumerable: !0,
      get: function() {
        return g;
      }
    });
    const s = De, C = typeof window > "u", y = C ? () => {
    } : s.useLayoutEffect, v = C ? () => {
    } : s.useEffect;
    function g(x) {
      const { headManager: A, reduceComponentsToState: b } = x;
      function m() {
        if (A && A.mountedInstances) {
          const a = s.Children.toArray(Array.from(A.mountedInstances).filter(Boolean));
          A.updateHead(b(a, x));
        }
      }
      if (C) {
        var M;
        A == null || (M = A.mountedInstances) == null || M.add(x.children), m();
      }
      return y(() => {
        var a;
        return A == null || (a = A.mountedInstances) == null || a.add(x.children), () => {
          var n;
          A == null || (n = A.mountedInstances) == null || n.delete(x.children);
        };
      }), y(() => (A && (A._pendingUpdate = m), () => {
        A && (A._pendingUpdate = m);
      })), v(() => (A && A._pendingUpdate && (A._pendingUpdate(), A._pendingUpdate = null), () => {
        A && A._pendingUpdate && (A._pendingUpdate(), A._pendingUpdate = null);
      })), null;
    }
  }(ht)), ht;
}
var gt = {}, Ht;
function yr() {
  return Ht || (Ht = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), Object.defineProperty(c, "AmpStateContext", {
      enumerable: !0,
      get: function() {
        return y;
      }
    });
    const y = (/* @__PURE__ */ Ve._(De)).default.createContext({});
    process.env.NODE_ENV !== "production" && (y.displayName = "AmpStateContext");
  }(gt)), gt;
}
var mt = {}, Dt;
function vr() {
  return Dt || (Dt = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), Object.defineProperty(c, "HeadManagerContext", {
      enumerable: !0,
      get: function() {
        return y;
      }
    });
    const y = (/* @__PURE__ */ Ve._(De)).default.createContext({});
    process.env.NODE_ENV !== "production" && (y.displayName = "HeadManagerContext");
  }(mt)), mt;
}
var _t = {}, qt;
function Er() {
  return qt || (qt = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), Object.defineProperty(c, "isInAmpMode", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    function s(C) {
      let { ampFirst: y = !1, hybrid: v = !1, hasQuery: g = !1 } = C === void 0 ? {} : C;
      return y || v && g;
    }
  }(_t)), _t;
}
var yt = {}, Ut;
function rr() {
  return Ut || (Ut = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), Object.defineProperty(c, "warnOnce", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    let s = (C) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const C = /* @__PURE__ */ new Set();
      s = (y) => {
        C.has(y) || console.warn(y), C.add(y);
      };
    }
  }(yt)), yt;
}
var zt;
function br() {
  return zt || (zt = 1, function(c, s) {
    "use client";
    Object.defineProperty(s, "__esModule", {
      value: !0
    });
    function C(_, B) {
      for (var q in B) Object.defineProperty(_, q, {
        enumerable: !0,
        get: B[q]
      });
    }
    C(s, {
      default: function() {
        return Z;
      },
      defaultHead: function() {
        return n;
      }
    });
    const y = Ve, v = Tt, g = i, x = /* @__PURE__ */ v._(De), A = /* @__PURE__ */ y._(_r()), b = yr(), m = vr(), M = Er(), a = rr();
    function n(_) {
      _ === void 0 && (_ = !1);
      const B = [
        /* @__PURE__ */ (0, g.jsx)("meta", {
          charSet: "utf-8"
        }, "charset")
      ];
      return _ || B.push(/* @__PURE__ */ (0, g.jsx)("meta", {
        name: "viewport",
        content: "width=device-width"
      }, "viewport")), B;
    }
    function f(_, B) {
      return typeof B == "string" || typeof B == "number" ? _ : B.type === x.default.Fragment ? _.concat(
        // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
        x.default.Children.toArray(B.props.children).reduce(
          // @ts-expect-error @types/react does not remove fragments but this could also return ReactPortal[]
          (q, X) => typeof X == "string" || typeof X == "number" ? q : q.concat(X),
          []
        )
      ) : _.concat(B);
    }
    const N = [
      "name",
      "httpEquiv",
      "charSet",
      "itemProp"
    ];
    function H() {
      const _ = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set(), X = {};
      return (J) => {
        let ie = !0, te = !1;
        if (J.key && typeof J.key != "number" && J.key.indexOf("$") > 0) {
          te = !0;
          const re = J.key.slice(J.key.indexOf("$") + 1);
          _.has(re) ? ie = !1 : _.add(re);
        }
        switch (J.type) {
          case "title":
          case "base":
            B.has(J.type) ? ie = !1 : B.add(J.type);
            break;
          case "meta":
            for (let re = 0, Ee = N.length; re < Ee; re++) {
              const ee = N[re];
              if (J.props.hasOwnProperty(ee))
                if (ee === "charSet")
                  q.has(ee) ? ie = !1 : q.add(ee);
                else {
                  const ve = J.props[ee], he = X[ee] || /* @__PURE__ */ new Set();
                  (ee !== "name" || !te) && he.has(ve) ? ie = !1 : (he.add(ve), X[ee] = he);
                }
            }
            break;
        }
        return ie;
      };
    }
    function K(_, B) {
      const { inAmpMode: q } = B;
      return _.reduce(f, []).reverse().concat(n(q).reverse()).filter(H()).reverse().map((X, J) => {
        const ie = X.key || J;
        if (process.env.NODE_ENV !== "development" && process.env.__NEXT_OPTIMIZE_FONTS && !q && X.type === "link" && X.props.href && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
        [
          "https://fonts.googleapis.com/css",
          "https://use.typekit.net/"
        ].some((te) => X.props.href.startsWith(te))) {
          const te = {
            ...X.props || {}
          };
          return te["data-href"] = te.href, te.href = void 0, te["data-optimized-fonts"] = !0, /* @__PURE__ */ x.default.cloneElement(X, te);
        }
        if (process.env.NODE_ENV === "development")
          if (X.type === "script" && X.props.type !== "application/ld+json") {
            const te = X.props.src ? '<script> tag with src="' + X.props.src + '"' : "inline <script>";
            (0, a.warnOnce)("Do not add <script> tags using next/head (see " + te + `). Use next/script instead. 
See more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
          } else X.type === "link" && X.props.rel === "stylesheet" && (0, a.warnOnce)('Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="' + X.props.href + `"). Use Document instead. 
See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
        return /* @__PURE__ */ x.default.cloneElement(X, {
          key: ie
        });
      });
    }
    function L(_) {
      let { children: B } = _;
      const q = (0, x.useContext)(b.AmpStateContext), X = (0, x.useContext)(m.HeadManagerContext);
      return /* @__PURE__ */ (0, g.jsx)(A.default, {
        reduceComponentsToState: K,
        headManager: X,
        inAmpMode: (0, M.isInAmpMode)(q),
        children: B
      });
    }
    const Z = L;
    (typeof s.default == "function" || typeof s.default == "object" && s.default !== null) && typeof s.default.__esModule > "u" && (Object.defineProperty(s.default, "__esModule", { value: !0 }), Object.assign(s.default, s), c.exports = s.default);
  }(ct, ct.exports)), ct.exports;
}
var vt = {}, Bt;
function nr() {
  return Bt || (Bt = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    function s(v, g) {
      for (var x in g) Object.defineProperty(v, x, {
        enumerable: !0,
        get: g[x]
      });
    }
    s(c, {
      VALID_LOADERS: function() {
        return C;
      },
      imageConfigDefault: function() {
        return y;
      }
    });
    const C = [
      "default",
      "imgix",
      "cloudinary",
      "akamai",
      "custom"
    ], y = {
      deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
      ],
      imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
      ],
      path: "/_next/image",
      loader: "default",
      loaderFile: "",
      domains: [],
      disableStaticImages: !1,
      minimumCacheTTL: 60,
      formats: [
        "image/webp"
      ],
      dangerouslyAllowSVG: !1,
      contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
      contentDispositionType: "attachment",
      localPatterns: void 0,
      remotePatterns: [],
      qualities: void 0,
      unoptimized: !1
    };
  }(vt)), vt;
}
var lt = { exports: {} }, ft = { exports: {} }, Gt;
function Rr() {
  return Gt || (Gt = 1, function(c, s) {
    Object.defineProperty(s, "__esModule", {
      value: !0
    });
    function C(g, x) {
      for (var A in x) Object.defineProperty(g, A, {
        enumerable: !0,
        get: x[A]
      });
    }
    C(s, {
      cancelIdleCallback: function() {
        return v;
      },
      requestIdleCallback: function() {
        return y;
      }
    });
    const y = typeof self < "u" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(g) {
      let x = Date.now();
      return self.setTimeout(function() {
        g({
          didTimeout: !1,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - x));
          }
        });
      }, 1);
    }, v = typeof self < "u" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(g) {
      return clearTimeout(g);
    };
    (typeof s.default == "function" || typeof s.default == "object" && s.default !== null) && typeof s.default.__esModule > "u" && (Object.defineProperty(s.default, "__esModule", { value: !0 }), Object.assign(s.default, s), c.exports = s.default);
  }(ft, ft.exports)), ft.exports;
}
var Yt;
function wr() {
  return Yt || (Yt = 1, function(c, s) {
    Object.defineProperty(s, "__esModule", {
      value: !0
    }), Object.defineProperty(s, "useIntersection", {
      enumerable: !0,
      get: function() {
        return m;
      }
    });
    const C = De, y = Rr(), v = typeof IntersectionObserver == "function", g = /* @__PURE__ */ new Map(), x = [];
    function A(M) {
      const a = {
        root: M.root || null,
        margin: M.rootMargin || ""
      }, n = x.find((K) => K.root === a.root && K.margin === a.margin);
      let f;
      if (n && (f = g.get(n), f))
        return f;
      const N = /* @__PURE__ */ new Map(), H = new IntersectionObserver((K) => {
        K.forEach((L) => {
          const Z = N.get(L.target), _ = L.isIntersecting || L.intersectionRatio > 0;
          Z && _ && Z(_);
        });
      }, M);
      return f = {
        id: a,
        observer: H,
        elements: N
      }, x.push(a), g.set(a, f), f;
    }
    function b(M, a, n) {
      const { id: f, observer: N, elements: H } = A(n);
      return H.set(M, a), N.observe(M), function() {
        if (H.delete(M), N.unobserve(M), H.size === 0) {
          N.disconnect(), g.delete(f);
          const L = x.findIndex((Z) => Z.root === f.root && Z.margin === f.margin);
          L > -1 && x.splice(L, 1);
        }
      };
    }
    function m(M) {
      let { rootRef: a, rootMargin: n, disabled: f } = M;
      const N = f || !v, [H, K] = (0, C.useState)(!1), L = (0, C.useRef)(null), Z = (0, C.useCallback)((B) => {
        L.current = B;
      }, []);
      (0, C.useEffect)(() => {
        if (v) {
          if (N || H) return;
          const B = L.current;
          if (B && B.tagName)
            return b(B, (X) => X && K(X), {
              root: a == null ? void 0 : a.current,
              rootMargin: n
            });
        } else if (!H) {
          const B = (0, y.requestIdleCallback)(() => K(!0));
          return () => (0, y.cancelIdleCallback)(B);
        }
      }, [
        N,
        n,
        a,
        H,
        L.current
      ]);
      const _ = (0, C.useCallback)(() => {
        K(!1);
      }, []);
      return [
        Z,
        H,
        _
      ];
    }
    (typeof s.default == "function" || typeof s.default == "object" && s.default !== null) && typeof s.default.__esModule > "u" && (Object.defineProperty(s.default, "__esModule", { value: !0 }), Object.assign(s.default, s), c.exports = s.default);
  }(lt, lt.exports)), lt.exports;
}
var Et = {}, Wt;
function Or() {
  return Wt || (Wt = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), Object.defineProperty(c, "ImageConfigContext", {
      enumerable: !0,
      get: function() {
        return v;
      }
    });
    const C = /* @__PURE__ */ Ve._(De), y = nr(), v = C.default.createContext(y.imageConfigDefault);
    process.env.NODE_ENV !== "production" && (v.displayName = "ImageConfigContext");
  }(Et)), Et;
}
var dt = { exports: {} }, bt = {}, Ft;
function Sr() {
  return Ft || (Ft = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), Object.defineProperty(c, "removeTrailingSlash", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    function s(C) {
      return C.replace(/\/$/, "") || "/";
    }
  }(bt)), bt;
}
var Rt = {}, Xt;
function xr() {
  return Xt || (Xt = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), Object.defineProperty(c, "parsePath", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    function s(C) {
      const y = C.indexOf("#"), v = C.indexOf("?"), g = v > -1 && (y < 0 || v < y);
      return g || y > -1 ? {
        pathname: C.substring(0, g ? v : y),
        query: g ? C.substring(v, y > -1 ? y : void 0) : "",
        hash: y > -1 ? C.slice(y) : ""
      } : {
        pathname: C,
        query: "",
        hash: ""
      };
    }
  }(Rt)), Rt;
}
var Kt;
function Ar() {
  return Kt || (Kt = 1, function(c, s) {
    Object.defineProperty(s, "__esModule", {
      value: !0
    }), Object.defineProperty(s, "normalizePathTrailingSlash", {
      enumerable: !0,
      get: function() {
        return v;
      }
    });
    const C = Sr(), y = xr(), v = (g) => {
      if (!g.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH)
        return g;
      const { pathname: x, query: A, hash: b } = (0, y.parsePath)(g);
      return process.env.__NEXT_TRAILING_SLASH ? /\.[^/]+\/?$/.test(x) ? "" + (0, C.removeTrailingSlash)(x) + A + b : x.endsWith("/") ? "" + x + A + b : x + "/" + A + b : "" + (0, C.removeTrailingSlash)(x) + A + b;
    };
    (typeof s.default == "function" || typeof s.default == "object" && s.default !== null) && typeof s.default.__esModule > "u" && (Object.defineProperty(s.default, "__esModule", { value: !0 }), Object.assign(s.default, s), c.exports = s.default);
  }(dt, dt.exports)), dt.exports;
}
var wt = {}, Ot = { exports: {} }, Vt;
function or() {
  return Vt || (Vt = 1, (() => {
    var c = { 170: (v, g, x) => {
      const A = x(510), b = () => {
        if (typeof navigator < "u" && navigator.platform) {
          const M = navigator.platform.toLowerCase();
          return M === "win32" || M === "windows";
        }
        return typeof process < "u" && process.platform ? process.platform === "win32" : !1;
      };
      function m(M, a, n = !1) {
        return a && (a.windows === null || a.windows === void 0) && (a = { ...a, windows: b() }), A(M, a, n);
      }
      Object.assign(m, A), v.exports = m;
    }, 154: (v) => {
      const g = "\\\\/", x = `[^${g}]`, A = "\\.", b = "\\+", m = "\\?", M = "\\/", a = "(?=.)", n = "[^/]", f = `(?:${M}|$)`, N = `(?:^|${M})`, H = `${A}{1,2}${f}`, K = `(?!${A})`, L = `(?!${N}${H})`, Z = `(?!${A}{0,1}${f})`, _ = `(?!${H})`, B = `[^.${M}]`, q = `${n}*?`, J = { DOT_LITERAL: A, PLUS_LITERAL: b, QMARK_LITERAL: m, SLASH_LITERAL: M, ONE_CHAR: a, QMARK: n, END_ANCHOR: f, DOTS_SLASH: H, NO_DOT: K, NO_DOTS: L, NO_DOT_SLASH: Z, NO_DOTS_SLASH: _, QMARK_NO_DOT: B, STAR: q, START_ANCHOR: N, SEP: "/" }, ie = { ...J, SLASH_LITERAL: `[${g}]`, QMARK: x, STAR: `${x}*?`, DOTS_SLASH: `${A}{1,2}(?:[${g}]|$)`, NO_DOT: `(?!${A})`, NO_DOTS: `(?!(?:^|[${g}])${A}{1,2}(?:[${g}]|$))`, NO_DOT_SLASH: `(?!${A}{0,1}(?:[${g}]|$))`, NO_DOTS_SLASH: `(?!${A}{1,2}(?:[${g}]|$))`, QMARK_NO_DOT: `[^.${g}]`, START_ANCHOR: `(?:^|[${g}])`, END_ANCHOR: `(?:[${g}]|$)`, SEP: "\\" }, te = { alnum: "a-zA-Z0-9", alpha: "a-zA-Z", ascii: "\\x00-\\x7F", blank: " \\t", cntrl: "\\x00-\\x1F\\x7F", digit: "0-9", graph: "\\x21-\\x7E", lower: "a-z", print: "\\x20-\\x7E ", punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~", space: " \\t\\r\\n\\v\\f", upper: "A-Z", word: "A-Za-z0-9_", xdigit: "A-Fa-f0-9" };
      v.exports = { MAX_LENGTH: 65536, POSIX_REGEX_SOURCE: te, REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g, REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/, REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/, REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g, REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g, REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g, REPLACEMENTS: { "***": "*", "**/**": "**", "**/**/**": "**" }, CHAR_0: 48, CHAR_9: 57, CHAR_UPPERCASE_A: 65, CHAR_LOWERCASE_A: 97, CHAR_UPPERCASE_Z: 90, CHAR_LOWERCASE_Z: 122, CHAR_LEFT_PARENTHESES: 40, CHAR_RIGHT_PARENTHESES: 41, CHAR_ASTERISK: 42, CHAR_AMPERSAND: 38, CHAR_AT: 64, CHAR_BACKWARD_SLASH: 92, CHAR_CARRIAGE_RETURN: 13, CHAR_CIRCUMFLEX_ACCENT: 94, CHAR_COLON: 58, CHAR_COMMA: 44, CHAR_DOT: 46, CHAR_DOUBLE_QUOTE: 34, CHAR_EQUAL: 61, CHAR_EXCLAMATION_MARK: 33, CHAR_FORM_FEED: 12, CHAR_FORWARD_SLASH: 47, CHAR_GRAVE_ACCENT: 96, CHAR_HASH: 35, CHAR_HYPHEN_MINUS: 45, CHAR_LEFT_ANGLE_BRACKET: 60, CHAR_LEFT_CURLY_BRACE: 123, CHAR_LEFT_SQUARE_BRACKET: 91, CHAR_LINE_FEED: 10, CHAR_NO_BREAK_SPACE: 160, CHAR_PERCENT: 37, CHAR_PLUS: 43, CHAR_QUESTION_MARK: 63, CHAR_RIGHT_ANGLE_BRACKET: 62, CHAR_RIGHT_CURLY_BRACE: 125, CHAR_RIGHT_SQUARE_BRACKET: 93, CHAR_SEMICOLON: 59, CHAR_SINGLE_QUOTE: 39, CHAR_SPACE: 32, CHAR_TAB: 9, CHAR_UNDERSCORE: 95, CHAR_VERTICAL_LINE: 124, CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, extglobChars(re) {
        return { "!": { type: "negate", open: "(?:(?!(?:", close: `))${re.STAR})` }, "?": { type: "qmark", open: "(?:", close: ")?" }, "+": { type: "plus", open: "(?:", close: ")+" }, "*": { type: "star", open: "(?:", close: ")*" }, "@": { type: "at", open: "(?:", close: ")" } };
      }, globChars(re) {
        return re === !0 ? ie : J;
      } };
    }, 697: (v, g, x) => {
      const A = x(154), b = x(96), { MAX_LENGTH: m, POSIX_REGEX_SOURCE: M, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: n, REPLACEMENTS: f } = A, N = (L, Z) => {
        if (typeof Z.expandRange == "function")
          return Z.expandRange(...L, Z);
        L.sort();
        const _ = `[${L.join("-")}]`;
        try {
          new RegExp(_);
        } catch {
          return L.map((q) => b.escapeRegex(q)).join("..");
        }
        return _;
      }, H = (L, Z) => `Missing ${L}: "${Z}" - use "\\\\${Z}" to match literal characters`, K = (L, Z) => {
        if (typeof L != "string")
          throw new TypeError("Expected a string");
        L = f[L] || L;
        const _ = { ...Z }, B = typeof _.maxLength == "number" ? Math.min(m, _.maxLength) : m;
        let q = L.length;
        if (q > B)
          throw new SyntaxError(`Input length: ${q}, exceeds maximum allowed length: ${B}`);
        const X = { type: "bos", value: "", output: _.prepend || "" }, J = [X], ie = _.capture ? "" : "?:", te = A.globChars(_.windows), re = A.extglobChars(te), { DOT_LITERAL: Ee, PLUS_LITERAL: ee, SLASH_LITERAL: ve, ONE_CHAR: he, DOTS_SLASH: me, NO_DOT: ce, NO_DOT_SLASH: Ce, NO_DOTS_SLASH: be, QMARK: Y, QMARK_NO_DOT: r, STAR: w, START_ANCHOR: F } = te, R = (S) => `(${ie}(?:(?!${F}${S.dot ? me : Ee}).)*?)`, h = _.dot ? "" : ce, $ = _.dot ? Y : r;
        let j = _.bash === !0 ? R(_) : w;
        _.capture && (j = `(${j})`), typeof _.noext == "boolean" && (_.noextglob = _.noext);
        const l = { input: L, index: -1, start: 0, dot: _.dot === !0, consumed: "", output: "", prefix: "", backtrack: !1, negated: !1, brackets: 0, braces: 0, parens: 0, quotes: 0, globstar: !1, tokens: J };
        L = b.removePrefix(L, l), q = L.length;
        const I = [], ne = [], se = [];
        let u = X, d;
        const de = () => l.index === q - 1, D = l.peek = (S = 1) => L[l.index + S], Q = l.advance = () => L[++l.index] || "", Re = () => L.slice(l.index + 1), Oe = (S = "", z = 0) => {
          l.consumed += S, l.index += z;
        }, we = (S) => {
          l.output += S.output != null ? S.output : S.value, Oe(S.value);
        }, pe = () => {
          let S = 1;
          for (; D() === "!" && (D(2) !== "(" || D(3) === "?"); )
            Q(), l.start++, S++;
          return S % 2 === 0 ? !1 : (l.negated = !0, l.start++, !0);
        }, xe = (S) => {
          l[S]++, se.push(S);
        }, t = (S) => {
          l[S]--, se.pop();
        }, E = (S) => {
          if (u.type === "globstar") {
            const z = l.braces > 0 && (S.type === "comma" || S.type === "brace"), p = S.extglob === !0 || I.length && (S.type === "pipe" || S.type === "paren");
            S.type !== "slash" && S.type !== "paren" && !z && !p && (l.output = l.output.slice(0, -u.output.length), u.type = "star", u.value = "*", u.output = j, l.output += u.output);
          }
          if (I.length && S.type !== "paren" && (I[I.length - 1].inner += S.value), (S.value || S.output) && we(S), u && u.type === "text" && S.type === "text") {
            u.output = (u.output || u.value) + S.value, u.value += S.value;
            return;
          }
          S.prev = u, J.push(S), u = S;
        }, k = (S, z) => {
          const p = { ...re[z], conditions: 1, inner: "" };
          p.prev = u, p.parens = l.parens, p.output = l.output;
          const T = (_.capture ? "(" : "") + p.open;
          xe("parens"), E({ type: S, value: z, output: l.output ? "" : he }), E({ type: "paren", extglob: !0, value: Q(), output: T }), I.push(p);
        }, U = (S) => {
          let z = S.close + (_.capture ? ")" : ""), p;
          if (S.type === "negate") {
            let T = j;
            if (S.inner && S.inner.length > 1 && S.inner.includes("/") && (T = R(_)), (T !== j || de() || /^\)+$/.test(Re())) && (z = S.close = `)$))${T}`), S.inner.includes("*") && (p = Re()) && /^\.[^\\/.]+$/.test(p)) {
              const ue = K(p, { ...Z, fastpaths: !1 }).output;
              z = S.close = `)${ue})${T})`;
            }
            S.prev.type === "bos" && (l.negatedExtglob = !0);
          }
          E({ type: "paren", extglob: !0, value: d, output: z }), t("parens");
        };
        if (_.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(L)) {
          let S = !1, z = L.replace(n, (p, T, ue, le, fe, Pe) => le === "\\" ? (S = !0, p) : le === "?" ? T ? T + le + (fe ? Y.repeat(fe.length) : "") : Pe === 0 ? $ + (fe ? Y.repeat(fe.length) : "") : Y.repeat(ue.length) : le === "." ? Ee.repeat(ue.length) : le === "*" ? T ? T + le + (fe ? j : "") : j : T ? p : `\\${p}`);
          return S === !0 && (_.unescape === !0 ? z = z.replace(/\\/g, "") : z = z.replace(/\\+/g, (p) => p.length % 2 === 0 ? "\\\\" : p ? "\\" : "")), z === L && _.contains === !0 ? (l.output = L, l) : (l.output = b.wrapOutput(z, l, Z), l);
        }
        for (; !de(); ) {
          if (d = Q(), d === "\0")
            continue;
          if (d === "\\") {
            const p = D();
            if (p === "/" && _.bash !== !0 || p === "." || p === ";")
              continue;
            if (!p) {
              d += "\\", E({ type: "text", value: d });
              continue;
            }
            const T = /^\\+/.exec(Re());
            let ue = 0;
            if (T && T[0].length > 2 && (ue = T[0].length, l.index += ue, ue % 2 !== 0 && (d += "\\")), _.unescape === !0 ? d = Q() : d += Q(), l.brackets === 0) {
              E({ type: "text", value: d });
              continue;
            }
          }
          if (l.brackets > 0 && (d !== "]" || u.value === "[" || u.value === "[^")) {
            if (_.posix !== !1 && d === ":") {
              const p = u.value.slice(1);
              if (p.includes("[") && (u.posix = !0, p.includes(":"))) {
                const T = u.value.lastIndexOf("["), ue = u.value.slice(0, T), le = u.value.slice(T + 2), fe = M[le];
                if (fe) {
                  u.value = ue + fe, l.backtrack = !0, Q(), !X.output && J.indexOf(u) === 1 && (X.output = he);
                  continue;
                }
              }
            }
            (d === "[" && D() !== ":" || d === "-" && D() === "]") && (d = `\\${d}`), d === "]" && (u.value === "[" || u.value === "[^") && (d = `\\${d}`), _.posix === !0 && d === "!" && u.value === "[" && (d = "^"), u.value += d, we({ value: d });
            continue;
          }
          if (l.quotes === 1 && d !== '"') {
            d = b.escapeRegex(d), u.value += d, we({ value: d });
            continue;
          }
          if (d === '"') {
            l.quotes = l.quotes === 1 ? 0 : 1, _.keepQuotes === !0 && E({ type: "text", value: d });
            continue;
          }
          if (d === "(") {
            xe("parens"), E({ type: "paren", value: d });
            continue;
          }
          if (d === ")") {
            if (l.parens === 0 && _.strictBrackets === !0)
              throw new SyntaxError(H("opening", "("));
            const p = I[I.length - 1];
            if (p && l.parens === p.parens + 1) {
              U(I.pop());
              continue;
            }
            E({ type: "paren", value: d, output: l.parens ? ")" : "\\)" }), t("parens");
            continue;
          }
          if (d === "[") {
            if (_.nobracket === !0 || !Re().includes("]")) {
              if (_.nobracket !== !0 && _.strictBrackets === !0)
                throw new SyntaxError(H("closing", "]"));
              d = `\\${d}`;
            } else
              xe("brackets");
            E({ type: "bracket", value: d });
            continue;
          }
          if (d === "]") {
            if (_.nobracket === !0 || u && u.type === "bracket" && u.value.length === 1) {
              E({ type: "text", value: d, output: `\\${d}` });
              continue;
            }
            if (l.brackets === 0) {
              if (_.strictBrackets === !0)
                throw new SyntaxError(H("opening", "["));
              E({ type: "text", value: d, output: `\\${d}` });
              continue;
            }
            t("brackets");
            const p = u.value.slice(1);
            if (u.posix !== !0 && p[0] === "^" && !p.includes("/") && (d = `/${d}`), u.value += d, we({ value: d }), _.literalBrackets === !1 || b.hasRegexChars(p))
              continue;
            const T = b.escapeRegex(u.value);
            if (l.output = l.output.slice(0, -u.value.length), _.literalBrackets === !0) {
              l.output += T, u.value = T;
              continue;
            }
            u.value = `(${ie}${T}|${u.value})`, l.output += u.value;
            continue;
          }
          if (d === "{" && _.nobrace !== !0) {
            xe("braces");
            const p = { type: "brace", value: d, output: "(", outputIndex: l.output.length, tokensIndex: l.tokens.length };
            ne.push(p), E(p);
            continue;
          }
          if (d === "}") {
            const p = ne[ne.length - 1];
            if (_.nobrace === !0 || !p) {
              E({ type: "text", value: d, output: d });
              continue;
            }
            let T = ")";
            if (p.dots === !0) {
              const ue = J.slice(), le = [];
              for (let fe = ue.length - 1; fe >= 0 && (J.pop(), ue[fe].type !== "brace"); fe--)
                ue[fe].type !== "dots" && le.unshift(ue[fe].value);
              T = N(le, _), l.backtrack = !0;
            }
            if (p.comma !== !0 && p.dots !== !0) {
              const ue = l.output.slice(0, p.outputIndex), le = l.tokens.slice(p.tokensIndex);
              p.value = p.output = "\\{", d = T = "\\}", l.output = ue;
              for (const fe of le)
                l.output += fe.output || fe.value;
            }
            E({ type: "brace", value: d, output: T }), t("braces"), ne.pop();
            continue;
          }
          if (d === "|") {
            I.length > 0 && I[I.length - 1].conditions++, E({ type: "text", value: d });
            continue;
          }
          if (d === ",") {
            let p = d;
            const T = ne[ne.length - 1];
            T && se[se.length - 1] === "braces" && (T.comma = !0, p = "|"), E({ type: "comma", value: d, output: p });
            continue;
          }
          if (d === "/") {
            if (u.type === "dot" && l.index === l.start + 1) {
              l.start = l.index + 1, l.consumed = "", l.output = "", J.pop(), u = X;
              continue;
            }
            E({ type: "slash", value: d, output: ve });
            continue;
          }
          if (d === ".") {
            if (l.braces > 0 && u.type === "dot") {
              u.value === "." && (u.output = Ee);
              const p = ne[ne.length - 1];
              u.type = "dots", u.output += d, u.value += d, p.dots = !0;
              continue;
            }
            if (l.braces + l.parens === 0 && u.type !== "bos" && u.type !== "slash") {
              E({ type: "text", value: d, output: Ee });
              continue;
            }
            E({ type: "dot", value: d, output: Ee });
            continue;
          }
          if (d === "?") {
            if (!(u && u.value === "(") && _.noextglob !== !0 && D() === "(" && D(2) !== "?") {
              k("qmark", d);
              continue;
            }
            if (u && u.type === "paren") {
              const T = D();
              let ue = d;
              (u.value === "(" && !/[!=<:]/.test(T) || T === "<" && !/<([!=]|\w+>)/.test(Re())) && (ue = `\\${d}`), E({ type: "text", value: d, output: ue });
              continue;
            }
            if (_.dot !== !0 && (u.type === "slash" || u.type === "bos")) {
              E({ type: "qmark", value: d, output: r });
              continue;
            }
            E({ type: "qmark", value: d, output: Y });
            continue;
          }
          if (d === "!") {
            if (_.noextglob !== !0 && D() === "(" && (D(2) !== "?" || !/[!=<:]/.test(D(3)))) {
              k("negate", d);
              continue;
            }
            if (_.nonegate !== !0 && l.index === 0) {
              pe();
              continue;
            }
          }
          if (d === "+") {
            if (_.noextglob !== !0 && D() === "(" && D(2) !== "?") {
              k("plus", d);
              continue;
            }
            if (u && u.value === "(" || _.regex === !1) {
              E({ type: "plus", value: d, output: ee });
              continue;
            }
            if (u && (u.type === "bracket" || u.type === "paren" || u.type === "brace") || l.parens > 0) {
              E({ type: "plus", value: d });
              continue;
            }
            E({ type: "plus", value: ee });
            continue;
          }
          if (d === "@") {
            if (_.noextglob !== !0 && D() === "(" && D(2) !== "?") {
              E({ type: "at", extglob: !0, value: d, output: "" });
              continue;
            }
            E({ type: "text", value: d });
            continue;
          }
          if (d !== "*") {
            (d === "$" || d === "^") && (d = `\\${d}`);
            const p = a.exec(Re());
            p && (d += p[0], l.index += p[0].length), E({ type: "text", value: d });
            continue;
          }
          if (u && (u.type === "globstar" || u.star === !0)) {
            u.type = "star", u.star = !0, u.value += d, u.output = j, l.backtrack = !0, l.globstar = !0, Oe(d);
            continue;
          }
          let S = Re();
          if (_.noextglob !== !0 && /^\([^?]/.test(S)) {
            k("star", d);
            continue;
          }
          if (u.type === "star") {
            if (_.noglobstar === !0) {
              Oe(d);
              continue;
            }
            const p = u.prev, T = p.prev, ue = p.type === "slash" || p.type === "bos", le = T && (T.type === "star" || T.type === "globstar");
            if (_.bash === !0 && (!ue || S[0] && S[0] !== "/")) {
              E({ type: "star", value: d, output: "" });
              continue;
            }
            const fe = l.braces > 0 && (p.type === "comma" || p.type === "brace"), Pe = I.length && (p.type === "pipe" || p.type === "paren");
            if (!ue && p.type !== "paren" && !fe && !Pe) {
              E({ type: "star", value: d, output: "" });
              continue;
            }
            for (; S.slice(0, 3) === "/**"; ) {
              const Te = L[l.index + 4];
              if (Te && Te !== "/")
                break;
              S = S.slice(3), Oe("/**", 3);
            }
            if (p.type === "bos" && de()) {
              u.type = "globstar", u.value += d, u.output = R(_), l.output = u.output, l.globstar = !0, Oe(d);
              continue;
            }
            if (p.type === "slash" && p.prev.type !== "bos" && !le && de()) {
              l.output = l.output.slice(0, -(p.output + u.output).length), p.output = `(?:${p.output}`, u.type = "globstar", u.output = R(_) + (_.strictSlashes ? ")" : "|$)"), u.value += d, l.globstar = !0, l.output += p.output + u.output, Oe(d);
              continue;
            }
            if (p.type === "slash" && p.prev.type !== "bos" && S[0] === "/") {
              const Te = S[1] !== void 0 ? "|$" : "";
              l.output = l.output.slice(0, -(p.output + u.output).length), p.output = `(?:${p.output}`, u.type = "globstar", u.output = `${R(_)}${ve}|${ve}${Te})`, u.value += d, l.output += p.output + u.output, l.globstar = !0, Oe(d + Q()), E({ type: "slash", value: "/", output: "" });
              continue;
            }
            if (p.type === "bos" && S[0] === "/") {
              u.type = "globstar", u.value += d, u.output = `(?:^|${ve}|${R(_)}${ve})`, l.output = u.output, l.globstar = !0, Oe(d + Q()), E({ type: "slash", value: "/", output: "" });
              continue;
            }
            l.output = l.output.slice(0, -u.output.length), u.type = "globstar", u.output = R(_), u.value += d, l.output += u.output, l.globstar = !0, Oe(d);
            continue;
          }
          const z = { type: "star", value: d, output: j };
          if (_.bash === !0) {
            z.output = ".*?", (u.type === "bos" || u.type === "slash") && (z.output = h + z.output), E(z);
            continue;
          }
          if (u && (u.type === "bracket" || u.type === "paren") && _.regex === !0) {
            z.output = d, E(z);
            continue;
          }
          (l.index === l.start || u.type === "slash" || u.type === "dot") && (u.type === "dot" ? (l.output += Ce, u.output += Ce) : _.dot === !0 ? (l.output += be, u.output += be) : (l.output += h, u.output += h), D() !== "*" && (l.output += he, u.output += he)), E(z);
        }
        for (; l.brackets > 0; ) {
          if (_.strictBrackets === !0) throw new SyntaxError(H("closing", "]"));
          l.output = b.escapeLast(l.output, "["), t("brackets");
        }
        for (; l.parens > 0; ) {
          if (_.strictBrackets === !0) throw new SyntaxError(H("closing", ")"));
          l.output = b.escapeLast(l.output, "("), t("parens");
        }
        for (; l.braces > 0; ) {
          if (_.strictBrackets === !0) throw new SyntaxError(H("closing", "}"));
          l.output = b.escapeLast(l.output, "{"), t("braces");
        }
        if (_.strictSlashes !== !0 && (u.type === "star" || u.type === "bracket") && E({ type: "maybe_slash", value: "", output: `${ve}?` }), l.backtrack === !0) {
          l.output = "";
          for (const S of l.tokens)
            l.output += S.output != null ? S.output : S.value, S.suffix && (l.output += S.suffix);
        }
        return l;
      };
      K.fastpaths = (L, Z) => {
        const _ = { ...Z }, B = typeof _.maxLength == "number" ? Math.min(m, _.maxLength) : m, q = L.length;
        if (q > B)
          throw new SyntaxError(`Input length: ${q}, exceeds maximum allowed length: ${B}`);
        L = f[L] || L;
        const { DOT_LITERAL: X, SLASH_LITERAL: J, ONE_CHAR: ie, DOTS_SLASH: te, NO_DOT: re, NO_DOTS: Ee, NO_DOTS_SLASH: ee, STAR: ve, START_ANCHOR: he } = A.globChars(_.windows), me = _.dot ? Ee : re, ce = _.dot ? ee : re, Ce = _.capture ? "" : "?:", be = { negated: !1, prefix: "" };
        let Y = _.bash === !0 ? ".*?" : ve;
        _.capture && (Y = `(${Y})`);
        const r = (h) => h.noglobstar === !0 ? Y : `(${Ce}(?:(?!${he}${h.dot ? te : X}).)*?)`, w = (h) => {
          switch (h) {
            case "*":
              return `${me}${ie}${Y}`;
            case ".*":
              return `${X}${ie}${Y}`;
            case "*.*":
              return `${me}${Y}${X}${ie}${Y}`;
            case "*/*":
              return `${me}${Y}${J}${ie}${ce}${Y}`;
            case "**":
              return me + r(_);
            case "**/*":
              return `(?:${me}${r(_)}${J})?${ce}${ie}${Y}`;
            case "**/*.*":
              return `(?:${me}${r(_)}${J})?${ce}${Y}${X}${ie}${Y}`;
            case "**/.*":
              return `(?:${me}${r(_)}${J})?${X}${ie}${Y}`;
            default: {
              const $ = /^(.*?)\.(\w+)$/.exec(h);
              if (!$) return;
              const j = w($[1]);
              return j ? j + X + $[2] : void 0;
            }
          }
        }, F = b.removePrefix(L, be);
        let R = w(F);
        return R && _.strictSlashes !== !0 && (R += `${J}?`), R;
      }, v.exports = K;
    }, 510: (v, g, x) => {
      const A = x(716), b = x(697), m = x(96), M = x(154), a = (f) => f && typeof f == "object" && !Array.isArray(f), n = (f, N, H = !1) => {
        if (Array.isArray(f)) {
          const J = f.map((te) => n(te, N, H));
          return (te) => {
            for (const re of J) {
              const Ee = re(te);
              if (Ee) return Ee;
            }
            return !1;
          };
        }
        const K = a(f) && f.tokens && f.input;
        if (f === "" || typeof f != "string" && !K)
          throw new TypeError("Expected pattern to be a non-empty string");
        const L = N || {}, Z = L.windows, _ = K ? n.compileRe(f, N) : n.makeRe(f, N, !1, !0), B = _.state;
        delete _.state;
        let q = () => !1;
        if (L.ignore) {
          const J = { ...N, ignore: null, onMatch: null, onResult: null };
          q = n(L.ignore, J, H);
        }
        const X = (J, ie = !1) => {
          const { isMatch: te, match: re, output: Ee } = n.test(J, _, N, { glob: f, posix: Z }), ee = { glob: f, state: B, regex: _, posix: Z, input: J, output: Ee, match: re, isMatch: te };
          return typeof L.onResult == "function" && L.onResult(ee), te === !1 ? (ee.isMatch = !1, ie ? ee : !1) : q(J) ? (typeof L.onIgnore == "function" && L.onIgnore(ee), ee.isMatch = !1, ie ? ee : !1) : (typeof L.onMatch == "function" && L.onMatch(ee), ie ? ee : !0);
        };
        return H && (X.state = B), X;
      };
      n.test = (f, N, H, { glob: K, posix: L } = {}) => {
        if (typeof f != "string")
          throw new TypeError("Expected input to be a string");
        if (f === "")
          return { isMatch: !1, output: "" };
        const Z = H || {}, _ = Z.format || (L ? m.toPosixSlashes : null);
        let B = f === K, q = B && _ ? _(f) : f;
        return B === !1 && (q = _ ? _(f) : f, B = q === K), (B === !1 || Z.capture === !0) && (Z.matchBase === !0 || Z.basename === !0 ? B = n.matchBase(f, N, H, L) : B = N.exec(q)), { isMatch: !!B, match: B, output: q };
      }, n.matchBase = (f, N, H) => (N instanceof RegExp ? N : n.makeRe(N, H)).test(m.basename(f)), n.isMatch = (f, N, H) => n(N, H)(f), n.parse = (f, N) => Array.isArray(f) ? f.map((H) => n.parse(H, N)) : b(f, { ...N, fastpaths: !1 }), n.scan = (f, N) => A(f, N), n.compileRe = (f, N, H = !1, K = !1) => {
        if (H === !0)
          return f.output;
        const L = N || {}, Z = L.contains ? "" : "^", _ = L.contains ? "" : "$";
        let B = `${Z}(?:${f.output})${_}`;
        f && f.negated === !0 && (B = `^(?!${B}).*$`);
        const q = n.toRegex(B, N);
        return K === !0 && (q.state = f), q;
      }, n.makeRe = (f, N = {}, H = !1, K = !1) => {
        if (!f || typeof f != "string")
          throw new TypeError("Expected a non-empty string");
        let L = { negated: !1, fastpaths: !0 };
        return N.fastpaths !== !1 && (f[0] === "." || f[0] === "*") && (L.output = b.fastpaths(f, N)), L.output || (L = b(f, N)), n.compileRe(L, N, H, K);
      }, n.toRegex = (f, N) => {
        try {
          const H = N || {};
          return new RegExp(f, H.flags || (H.nocase ? "i" : ""));
        } catch (H) {
          if (N && N.debug === !0) throw H;
          return /$^/;
        }
      }, n.constants = M, v.exports = n;
    }, 716: (v, g, x) => {
      const A = x(96), { CHAR_ASTERISK: b, CHAR_AT: m, CHAR_BACKWARD_SLASH: M, CHAR_COMMA: a, CHAR_DOT: n, CHAR_EXCLAMATION_MARK: f, CHAR_FORWARD_SLASH: N, CHAR_LEFT_CURLY_BRACE: H, CHAR_LEFT_PARENTHESES: K, CHAR_LEFT_SQUARE_BRACKET: L, CHAR_PLUS: Z, CHAR_QUESTION_MARK: _, CHAR_RIGHT_CURLY_BRACE: B, CHAR_RIGHT_PARENTHESES: q, CHAR_RIGHT_SQUARE_BRACKET: X } = x(154), J = (re) => re === N || re === M, ie = (re) => {
        re.isPrefix !== !0 && (re.depth = re.isGlobstar ? 1 / 0 : 1);
      }, te = (re, Ee) => {
        const ee = Ee || {}, ve = re.length - 1, he = ee.parts === !0 || ee.scanToEnd === !0, me = [], ce = [], Ce = [];
        let be = re, Y = -1, r = 0, w = 0, F = !1, R = !1, h = !1, $ = !1, j = !1, l = !1, I = !1, ne = !1, se = !1, u = !1, d = 0, de, D, Q = { value: "", depth: 0, isGlob: !1 };
        const Re = () => Y >= ve, Oe = () => be.charCodeAt(Y + 1), we = () => (de = D, be.charCodeAt(++Y));
        for (; Y < ve; ) {
          D = we();
          let k;
          if (D === M) {
            I = Q.backslashes = !0, D = we(), D === H && (l = !0);
            continue;
          }
          if (l === !0 || D === H) {
            for (d++; Re() !== !0 && (D = we()); ) {
              if (D === M) {
                I = Q.backslashes = !0, we();
                continue;
              }
              if (D === H) {
                d++;
                continue;
              }
              if (l !== !0 && D === n && (D = we()) === n) {
                if (F = Q.isBrace = !0, h = Q.isGlob = !0, u = !0, he === !0)
                  continue;
                break;
              }
              if (l !== !0 && D === a) {
                if (F = Q.isBrace = !0, h = Q.isGlob = !0, u = !0, he === !0)
                  continue;
                break;
              }
              if (D === B && (d--, d === 0)) {
                l = !1, F = Q.isBrace = !0, u = !0;
                break;
              }
            }
            if (he === !0)
              continue;
            break;
          }
          if (D === N) {
            if (me.push(Y), ce.push(Q), Q = { value: "", depth: 0, isGlob: !1 }, u === !0) continue;
            if (de === n && Y === r + 1) {
              r += 2;
              continue;
            }
            w = Y + 1;
            continue;
          }
          if (ee.noext !== !0 && (D === Z || D === m || D === b || D === _ || D === f) === !0 && Oe() === K) {
            if (h = Q.isGlob = !0, $ = Q.isExtglob = !0, u = !0, D === f && Y === r && (se = !0), he === !0) {
              for (; Re() !== !0 && (D = we()); ) {
                if (D === M) {
                  I = Q.backslashes = !0, D = we();
                  continue;
                }
                if (D === q) {
                  h = Q.isGlob = !0, u = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (D === b) {
            if (de === b && (j = Q.isGlobstar = !0), h = Q.isGlob = !0, u = !0, he === !0)
              continue;
            break;
          }
          if (D === _) {
            if (h = Q.isGlob = !0, u = !0, he === !0)
              continue;
            break;
          }
          if (D === L) {
            for (; Re() !== !0 && (k = we()); ) {
              if (k === M) {
                I = Q.backslashes = !0, we();
                continue;
              }
              if (k === X) {
                R = Q.isBracket = !0, h = Q.isGlob = !0, u = !0;
                break;
              }
            }
            if (he === !0)
              continue;
            break;
          }
          if (ee.nonegate !== !0 && D === f && Y === r) {
            ne = Q.negated = !0, r++;
            continue;
          }
          if (ee.noparen !== !0 && D === K) {
            if (h = Q.isGlob = !0, he === !0) {
              for (; Re() !== !0 && (D = we()); ) {
                if (D === K) {
                  I = Q.backslashes = !0, D = we();
                  continue;
                }
                if (D === q) {
                  u = !0;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (h === !0) {
            if (u = !0, he === !0)
              continue;
            break;
          }
        }
        ee.noext === !0 && ($ = !1, h = !1);
        let pe = be, xe = "", t = "";
        r > 0 && (xe = be.slice(0, r), be = be.slice(r), w -= r), pe && h === !0 && w > 0 ? (pe = be.slice(0, w), t = be.slice(w)) : h === !0 ? (pe = "", t = be) : pe = be, pe && pe !== "" && pe !== "/" && pe !== be && J(pe.charCodeAt(pe.length - 1)) && (pe = pe.slice(0, -1)), ee.unescape === !0 && (t && (t = A.removeBackslashes(t)), pe && I === !0 && (pe = A.removeBackslashes(pe)));
        const E = { prefix: xe, input: re, start: r, base: pe, glob: t, isBrace: F, isBracket: R, isGlob: h, isExtglob: $, isGlobstar: j, negated: ne, negatedExtglob: se };
        if (ee.tokens === !0 && (E.maxDepth = 0, J(D) || ce.push(Q), E.tokens = ce), ee.parts === !0 || ee.tokens === !0) {
          let k;
          for (let U = 0; U < me.length; U++) {
            const S = k ? k + 1 : r, z = me[U], p = re.slice(S, z);
            ee.tokens && (U === 0 && r !== 0 ? (ce[U].isPrefix = !0, ce[U].value = xe) : ce[U].value = p, ie(ce[U]), E.maxDepth += ce[U].depth), (U !== 0 || p !== "") && Ce.push(p), k = z;
          }
          if (k && k + 1 < re.length) {
            const U = re.slice(k + 1);
            Ce.push(U), ee.tokens && (ce[ce.length - 1].value = U, ie(ce[ce.length - 1]), E.maxDepth += ce[ce.length - 1].depth);
          }
          E.slashes = me, E.parts = Ce;
        }
        return E;
      };
      v.exports = te;
    }, 96: (v, g, x) => {
      const { REGEX_BACKSLASH: A, REGEX_REMOVE_BACKSLASH: b, REGEX_SPECIAL_CHARS: m, REGEX_SPECIAL_CHARS_GLOBAL: M } = x(154);
      g.isObject = (a) => a !== null && typeof a == "object" && !Array.isArray(a), g.hasRegexChars = (a) => m.test(a), g.isRegexChar = (a) => a.length === 1 && g.hasRegexChars(a), g.escapeRegex = (a) => a.replace(M, "\\$1"), g.toPosixSlashes = (a) => a.replace(A, "/"), g.removeBackslashes = (a) => a.replace(b, (n) => n === "\\" ? "" : n), g.escapeLast = (a, n, f) => {
        const N = a.lastIndexOf(n, f);
        return N === -1 ? a : a[N - 1] === "\\" ? g.escapeLast(a, n, N - 1) : `${a.slice(0, N)}\\${a.slice(N)}`;
      }, g.removePrefix = (a, n = {}) => {
        let f = a;
        return f.startsWith("./") && (f = f.slice(2), n.prefix = "./"), f;
      }, g.wrapOutput = (a, n = {}, f = {}) => {
        const N = f.contains ? "" : "^", H = f.contains ? "" : "$";
        let K = `${N}(?:${a})${H}`;
        return n.negated === !0 && (K = `(?:^(?!${K}).*$)`), K;
      }, g.basename = (a, { windows: n } = {}) => {
        const f = a.split(n ? /[\\/]/ : "/"), N = f[f.length - 1];
        return N === "" ? f[f.length - 2] : N;
      };
    } }, s = {};
    function C(v) {
      var g = s[v];
      if (g !== void 0)
        return g.exports;
      var x = s[v] = { exports: {} }, A = !0;
      try {
        c[v](x, x.exports, C), A = !1;
      } finally {
        A && delete s[v];
      }
      return x.exports;
    }
    typeof C < "u" && (C.ab = __dirname + "/");
    var y = C(170);
    Ot.exports = y;
  })()), Ot.exports;
}
var Qt;
function Cr() {
  return Qt || (Qt = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    function s(g, x) {
      for (var A in x) Object.defineProperty(g, A, {
        enumerable: !0,
        get: x[A]
      });
    }
    s(c, {
      hasLocalMatch: function() {
        return v;
      },
      matchLocalPattern: function() {
        return y;
      }
    });
    const C = or();
    function y(g, x) {
      if (g.search !== void 0 && g.search !== x.search)
        return !1;
      var A;
      return !!(0, C.makeRe)((A = g.pathname) != null ? A : "**", {
        dot: !0
      }).test(x.pathname);
    }
    function v(g, x) {
      if (!g)
        return !0;
      const A = new URL(x, "http://n");
      return g.some((b) => y(b, A));
    }
  }(wt)), wt;
}
var St = {}, Zt;
function Tr() {
  return Zt || (Zt = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    });
    function s(g, x) {
      for (var A in x) Object.defineProperty(g, A, {
        enumerable: !0,
        get: x[A]
      });
    }
    s(c, {
      hasRemoteMatch: function() {
        return v;
      },
      matchRemotePattern: function() {
        return y;
      }
    });
    const C = or();
    function y(g, x) {
      if (g.protocol !== void 0) {
        const b = x.protocol.slice(0, -1);
        if (g.protocol !== b)
          return !1;
      }
      if (g.port !== void 0 && g.port !== x.port)
        return !1;
      if (g.hostname === void 0)
        throw Object.defineProperty(new Error(`Pattern should define hostname but found
` + JSON.stringify(g)), "__NEXT_ERROR_CODE", {
          value: "E410",
          enumerable: !1,
          configurable: !0
        });
      if (!(0, C.makeRe)(g.hostname).test(x.hostname) || g.search !== void 0 && g.search !== x.search)
        return !1;
      var A;
      return !!(0, C.makeRe)((A = g.pathname) != null ? A : "**", {
        dot: !0
      }).test(x.pathname);
    }
    function v(g, x, A) {
      return g.some((b) => A.hostname === b) || x.some((b) => y(b, A));
    }
  }(St)), St;
}
(function(c, s) {
  "use client";
  Object.defineProperty(s, "__esModule", {
    value: !0
  }), Object.defineProperty(s, "default", {
    enumerable: !0,
    get: function() {
      return F;
    }
  });
  const C = Ve, y = Tt, v = i, g = /* @__PURE__ */ y._(De), x = /* @__PURE__ */ y._(mr()), A = /* @__PURE__ */ C._(br()), b = nr(), m = wr(), M = Or(), a = rr(), n = Ar();
  function f(R) {
    return R[0] === "/" ? R.slice(1) : R;
  }
  const N = typeof x.preload == "function", H = 75, K = process.env.__NEXT_IMAGE_OPTS, L = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Map();
  let _;
  const B = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  typeof window > "u" && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
  const q = [
    "lazy",
    "eager",
    void 0
  ];
  function X(R) {
    let { config: h, src: $, width: j, quality: l } = R;
    const I = new URL("" + h.path + f($)), ne = I.searchParams;
    return ne.set("auto", ne.getAll("auto").join(",") || "format"), ne.set("fit", ne.get("fit") || "max"), ne.set("w", ne.get("w") || j.toString()), l && ne.set("q", l.toString()), I.href;
  }
  function J(R) {
    let { config: h, src: $, width: j } = R;
    return "" + h.path + f($) + "?imwidth=" + j;
  }
  function ie(R) {
    let { config: h, src: $, width: j, quality: l } = R;
    const ne = [
      "f_auto",
      "c_limit",
      "w_" + j,
      "q_" + (l || "auto")
    ].join(",") + "/";
    return "" + h.path + ne + f($);
  }
  function te(R) {
    let { src: h } = R;
    throw Object.defineProperty(new Error('Image with src "' + h + `" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
      value: "E252",
      enumerable: !1,
      configurable: !0
    });
  }
  function re(R) {
    let { config: h, src: $, width: j, quality: l } = R;
    var I;
    if (process.env.NODE_ENV !== "production") {
      const se = [];
      if ($ || se.push("src"), j || se.push("width"), se.length > 0)
        throw Object.defineProperty(new Error("Next Image Optimization requires " + se.join(", ") + " to be provided. Make sure you pass them as props to the `next/image` component. Received: " + JSON.stringify({
          src: $,
          width: j,
          quality: l
        })), "__NEXT_ERROR_CODE", {
          value: "E188",
          enumerable: !1,
          configurable: !0
        });
      if ($.startsWith("//"))
        throw Object.defineProperty(new Error('Failed to parse src "' + $ + '" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)'), "__NEXT_ERROR_CODE", {
          value: "E360",
          enumerable: !1,
          configurable: !0
        });
      if ($.startsWith("/") && h.localPatterns && process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
      process.env.NEXT_RUNTIME !== "edge") {
        const { hasLocalMatch: u } = Cr();
        if (!u(h.localPatterns, $))
          throw Object.defineProperty(new Error("Invalid src prop (" + $ + ") on `next/image` does not match `images.localPatterns` configured in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns"), "__NEXT_ERROR_CODE", {
            value: "E426",
            enumerable: !1,
            configurable: !0
          });
      }
      if (!$.startsWith("/") && (h.domains || h.remotePatterns)) {
        let u;
        try {
          u = new URL($);
        } catch (d) {
          throw console.error(d), Object.defineProperty(new Error('Failed to parse src "' + $ + '" on `next/image`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)'), "__NEXT_ERROR_CODE", {
            value: "E63",
            enumerable: !1,
            configurable: !0
          });
        }
        if (process.env.NODE_ENV !== "test" && // micromatch isn't compatible with edge runtime
        process.env.NEXT_RUNTIME !== "edge") {
          const { hasRemoteMatch: d } = Tr();
          if (!d(h.domains, h.remotePatterns, u))
            throw Object.defineProperty(new Error("Invalid src prop (" + $ + ') on `next/image`, hostname "' + u.hostname + '" is not configured under images in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host'), "__NEXT_ERROR_CODE", {
              value: "E231",
              enumerable: !1,
              configurable: !0
            });
        }
      }
      if (l && h.qualities && !h.qualities.includes(l))
        throw Object.defineProperty(new Error("Invalid quality prop (" + l + ") on `next/image` does not match `images.qualities` configured in your `next.config.js`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-qualities"), "__NEXT_ERROR_CODE", {
          value: "E623",
          enumerable: !1,
          configurable: !0
        });
    }
    const ne = l || ((I = h.qualities) == null ? void 0 : I.reduce((se, u) => Math.abs(u - H) < Math.abs(se - H) ? u : se)) || H;
    return !h.dangerouslyAllowSVG && $.split("?", 1)[0].endsWith(".svg") ? $ : (0, n.normalizePathTrailingSlash)(h.path) + "?url=" + encodeURIComponent($) + "&w=" + j + "&q=" + ne;
  }
  const Ee = /* @__PURE__ */ new Map([
    [
      "default",
      re
    ],
    [
      "imgix",
      X
    ],
    [
      "cloudinary",
      ie
    ],
    [
      "akamai",
      J
    ],
    [
      "custom",
      te
    ]
  ]), ee = [
    "fill",
    "fixed",
    "intrinsic",
    "responsive",
    void 0
  ];
  function ve(R) {
    return R.default !== void 0;
  }
  function he(R) {
    return R.src !== void 0;
  }
  function me(R) {
    return typeof R == "object" && (ve(R) || he(R));
  }
  function ce(R, h, $, j) {
    let { deviceSizes: l, allSizes: I } = R;
    if (j && ($ === "fill" || $ === "responsive")) {
      const se = /(^|\s)(1?\d?\d)vw/g, u = [];
      for (let d; d = se.exec(j); d)
        u.push(parseInt(d[2]));
      if (u.length) {
        const d = Math.min(...u) * 0.01;
        return {
          widths: I.filter((de) => de >= l[0] * d),
          kind: "w"
        };
      }
      return {
        widths: I,
        kind: "w"
      };
    }
    return typeof h != "number" || $ === "fill" || $ === "responsive" ? {
      widths: l,
      kind: "w"
    } : {
      widths: [
        ...new Set(
          // > This means that most OLED screens that say they are 3x resolution,
          // > are actually 3x in the green color, but only 1.5x in the red and
          // > blue colors. Showing a 3x resolution image in the app vs a 2x
          // > resolution image will be visually the same, though the 3x image
          // > takes significantly more data. Even true 3x resolution screens are
          // > wasteful as the human eye cannot see that level of detail without
          // > something like a magnifying glass.
          // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
          [
            h,
            h * 2
            /*, width * 3*/
          ].map((se) => I.find((u) => u >= se) || I[I.length - 1])
        )
      ],
      kind: "x"
    };
  }
  function Ce(R) {
    let { config: h, src: $, unoptimized: j, layout: l, width: I, quality: ne, sizes: se, loader: u } = R;
    if (j)
      return {
        src: $,
        srcSet: void 0,
        sizes: void 0
      };
    const { widths: d, kind: de } = ce(h, I, l, se), D = d.length - 1;
    return {
      sizes: !se && de === "w" ? "100vw" : se,
      srcSet: d.map((Q, Re) => u({
        config: h,
        src: $,
        quality: ne,
        width: Q
      }) + " " + (de === "w" ? Q : Re + 1) + de).join(", "),
      // It's intended to keep `src` the last attribute because React updates
      // attributes in order. If we keep `src` the first one, Safari will
      // immediately start to fetch `src`, before `sizes` and `srcSet` are even
      // updated by React. That causes multiple unnecessary requests if `srcSet`
      // and `sizes` are defined.
      // This bug cannot be reproduced in Chrome or Firefox.
      src: u({
        config: h,
        src: $,
        quality: ne,
        width: d[D]
      })
    };
  }
  function be(R) {
    if (typeof R == "number")
      return R;
    if (typeof R == "string")
      return parseInt(R, 10);
  }
  function Y(R) {
    var h;
    const $ = ((h = R.config) == null ? void 0 : h.loader) || "default", j = Ee.get($);
    if (j)
      return j(R);
    throw Object.defineProperty(new Error('Unknown "loader" found in "next.config.js". Expected: ' + b.VALID_LOADERS.join(", ") + ". Received: " + $), "__NEXT_ERROR_CODE", {
      value: "E338",
      enumerable: !1,
      configurable: !0
    });
  }
  function r(R, h, $, j, l, I) {
    if (!R || R.src === B || R["data-loaded-src"] === h)
      return;
    R["data-loaded-src"] = h, ("decode" in R ? R.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      if (R.parentNode) {
        if (L.add(h), j === "blur" && I(!0), l != null && l.current) {
          const { naturalWidth: u, naturalHeight: d } = R;
          l.current({
            naturalWidth: u,
            naturalHeight: d
          });
        }
        if (process.env.NODE_ENV !== "production") {
          var se;
          if ((se = R.parentElement) != null && se.parentElement) {
            const u = getComputedStyle(R.parentElement.parentElement);
            u.position && ($ === "responsive" && u.display === "flex" ? (0, a.warnOnce)('Image with src "' + h + '" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.') : $ === "fill" && u.position !== "relative" && u.position !== "fixed" && u.position !== "absolute" && (0, a.warnOnce)('Image with src "' + h + '" may not render properly with a parent using position:"' + u.position + '". Consider changing the parent style to position:"relative" with a width and height.'));
          }
        }
      }
    });
  }
  const w = (R) => {
    let { imgAttributes: h, heightInt: $, widthInt: j, qualityInt: l, layout: I, className: ne, imgStyle: se, blurStyle: u, isLazy: d, placeholder: de, loading: D, srcString: Q, config: Re, unoptimized: Oe, loader: we, onLoadingCompleteRef: pe, setBlurComplete: xe, setIntersection: t, onLoad: E, onError: k, isVisible: U, noscriptSizes: S, ...z } = R;
    return D = d ? "lazy" : D, /* @__PURE__ */ (0, v.jsxs)(v.Fragment, {
      children: [
        /* @__PURE__ */ (0, v.jsx)("img", {
          ...z,
          ...h,
          decoding: "async",
          "data-nimg": I,
          className: ne,
          style: {
            ...se,
            ...u
          },
          ref: (0, g.useCallback)((p) => {
            process.env.NODE_ENV !== "production" && p && !Q && console.error('Image is missing required "src" property:', p), t(p), p != null && p.complete && r(p, Q, I, de, pe, xe);
          }, [
            t,
            Q,
            I,
            de,
            pe,
            xe
          ]),
          onLoad: (p) => {
            const T = p.currentTarget;
            r(T, Q, I, de, pe, xe), E && E(p);
          },
          onError: (p) => {
            de === "blur" && xe(!0), k && k(p);
          }
        }),
        (d || de === "blur") && /* @__PURE__ */ (0, v.jsx)("noscript", {
          children: /* @__PURE__ */ (0, v.jsx)("img", {
            ...z,
            // @ts-ignore - TODO: upgrade to `@types/react@17`
            loading: D,
            decoding: "async",
            "data-nimg": I,
            style: se,
            className: ne,
            ...Ce({
              config: Re,
              src: Q,
              unoptimized: Oe,
              layout: I,
              width: j,
              quality: l,
              sizes: S,
              loader: we
            })
          })
        })
      ]
    });
  };
  function F(R) {
    let { src: h, sizes: $, unoptimized: j = !1, priority: l = !1, loading: I, lazyRoot: ne = null, lazyBoundary: se, className: u, quality: d, width: de, height: D, style: Q, objectFit: Re, objectPosition: Oe, onLoadingComplete: we, placeholder: pe = "empty", blurDataURL: xe, ...t } = R;
    const E = (0, g.useContext)(M.ImageConfigContext), k = (0, g.useMemo)(() => {
      var ae;
      const Se = K || E || b.imageConfigDefault, Ie = [
        ...Se.deviceSizes,
        ...Se.imageSizes
      ].sort((e, o) => e - o), ze = Se.deviceSizes.sort((e, o) => e - o), He = (ae = Se.qualities) == null ? void 0 : ae.sort((e, o) => e - o);
      return {
        ...Se,
        allSizes: Ie,
        deviceSizes: ze,
        qualities: He
      };
    }, [
      E
    ]);
    let U = t, S = $ ? "responsive" : "intrinsic";
    "layout" in U && (U.layout && (S = U.layout), delete U.layout);
    let z = Y;
    if ("loader" in U) {
      if (U.loader) {
        const ae = U.loader;
        z = (Se) => {
          const { config: Ie, ...ze } = Se;
          return ae(ze);
        };
      }
      delete U.loader;
    }
    let p = "";
    if (me(h)) {
      const ae = ve(h) ? h.default : h;
      if (!ae.src)
        throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(ae)), "__NEXT_ERROR_CODE", {
          value: "E460",
          enumerable: !1,
          configurable: !0
        });
      if (xe = xe || ae.blurDataURL, p = ae.src, (!S || S !== "fill") && (D = D || ae.height, de = de || ae.width, !ae.height || !ae.width))
        throw Object.defineProperty(new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(ae)), "__NEXT_ERROR_CODE", {
          value: "E48",
          enumerable: !1,
          configurable: !0
        });
    }
    h = typeof h == "string" ? h : p;
    let T = !l && (I === "lazy" || typeof I > "u");
    (h.startsWith("data:") || h.startsWith("blob:")) && (j = !0, T = !1), typeof window < "u" && L.has(h) && (T = !1), k.unoptimized && (j = !0);
    const [ue, le] = (0, g.useState)(!1), [fe, Pe, Te] = (0, m.useIntersection)({
      rootRef: ne,
      rootMargin: se || "200px",
      disabled: !T
    }), qe = !T || Pe, _e = {
      boxSizing: "border-box",
      display: "block",
      overflow: "hidden",
      width: "initial",
      height: "initial",
      background: "none",
      opacity: 1,
      border: 0,
      margin: 0,
      padding: 0
    }, We = {
      boxSizing: "border-box",
      display: "block",
      width: "initial",
      height: "initial",
      background: "none",
      opacity: 1,
      border: 0,
      margin: 0,
      padding: 0
    };
    let Fe = !1, Xe;
    const Ke = {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: "border-box",
      padding: 0,
      border: "none",
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      minWidth: "100%",
      maxWidth: "100%",
      minHeight: "100%",
      maxHeight: "100%",
      objectFit: Re,
      objectPosition: Oe
    };
    let ke = be(de), Me = be(D);
    const Ge = be(d);
    if (process.env.NODE_ENV !== "production")
      if (!h)
        ke = ke || 1, Me = Me || 1, j = !0;
      else {
        if (!ee.includes(S))
          throw Object.defineProperty(new Error('Image with src "' + h + '" has invalid "layout" property. Provided "' + S + '" should be one of ' + ee.map(String).join(",") + "."), "__NEXT_ERROR_CODE", {
            value: "E420",
            enumerable: !1,
            configurable: !0
          });
        if (typeof ke < "u" && isNaN(ke) || typeof Me < "u" && isNaN(Me))
          throw Object.defineProperty(new Error('Image with src "' + h + '" has invalid "width" or "height" property. These should be numeric values.'), "__NEXT_ERROR_CODE", {
            value: "E99",
            enumerable: !1,
            configurable: !0
          });
        if (S === "fill" && (de || D) && (0, a.warnOnce)('Image with src "' + h + `" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`), !q.includes(I))
          throw Object.defineProperty(new Error('Image with src "' + h + '" has invalid "loading" property. Provided "' + I + '" should be one of ' + q.map(String).join(",") + "."), "__NEXT_ERROR_CODE", {
            value: "E357",
            enumerable: !1,
            configurable: !0
          });
        if (l && I === "lazy")
          throw Object.defineProperty(new Error('Image with src "' + h + `" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
            value: "E218",
            enumerable: !1,
            configurable: !0
          });
        if ($ && S !== "fill" && S !== "responsive" && (0, a.warnOnce)('Image with src "' + h + `" has "sizes" property but it will be ignored. Only use "sizes" with "layout='fill'" or "layout='responsive'"`), pe === "blur" && (S !== "fill" && (ke || 0) * (Me || 0) < 1600 && (0, a.warnOnce)('Image with src "' + h + `" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`), !xe)) {
          const ae = [
            "jpeg",
            "png",
            "webp",
            "avif"
          ];
          throw Object.defineProperty(new Error('Image with src "' + h + `" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ` + ae.join(",") + ` (animated images not supported)
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
            value: "E89",
            enumerable: !1,
            configurable: !0
          });
        }
        if ("ref" in U && (0, a.warnOnce)('Image with src "' + h + '" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.'), !j && z !== Y) {
          const ae = z({
            config: k,
            src: h,
            width: ke || 400,
            quality: Ge || 75
          });
          let Se;
          try {
            Se = new URL(ae);
          } catch {
          }
          (ae === h || Se && Se.pathname === h && !Se.search) && (0, a.warnOnce)('Image with src "' + h + `" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
        }
        if (Q) {
          let ae = Object.keys(Q).filter((Se) => Se in Ke);
          ae.length && (0, a.warnOnce)("Image with src " + h + " is assigned the following styles, which are overwritten by automatically-generated styles: " + ae.join(", "));
        }
        if (typeof window < "u" && !_ && window.PerformanceObserver) {
          _ = new PerformanceObserver((ae) => {
            for (const Ie of ae.getEntries()) {
              var Se;
              const ze = (Ie == null || (Se = Ie.element) == null ? void 0 : Se.src) || "", He = Z.get(ze);
              He && !He.priority && He.placeholder !== "blur" && !He.src.startsWith("data:") && !He.src.startsWith("blob:") && (0, a.warnOnce)('Image with src "' + He.src + `" was detected as the Largest Contentful Paint (LCP). Please add the "priority" property if this image is above the fold.
Read more: https://nextjs.org/docs/api-reference/next/legacy/image#priority`);
            }
          });
          try {
            _.observe({
              type: "largest-contentful-paint",
              buffered: !0
            });
          } catch (ae) {
            console.error(ae);
          }
        }
      }
    const pt = Object.assign({}, Q, Ke), rt = pe === "blur" && !ue ? {
      backgroundSize: Re || "cover",
      backgroundPosition: Oe || "0% 0%",
      filter: "blur(20px)",
      backgroundImage: 'url("' + xe + '")'
    } : {};
    if (S === "fill")
      _e.display = "block", _e.position = "absolute", _e.top = 0, _e.left = 0, _e.bottom = 0, _e.right = 0;
    else if (typeof ke < "u" && typeof Me < "u") {
      const ae = Me / ke, Se = isNaN(ae) ? "100%" : "" + ae * 100 + "%";
      S === "responsive" ? (_e.display = "block", _e.position = "relative", Fe = !0, We.paddingTop = Se) : S === "intrinsic" ? (_e.display = "inline-block", _e.position = "relative", _e.maxWidth = "100%", Fe = !0, We.maxWidth = "100%", Xe = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27" + ke + "%27%20height=%27" + Me + "%27/%3e") : S === "fixed" && (_e.display = "inline-block", _e.position = "relative", _e.width = ke, _e.height = Me);
    } else if (process.env.NODE_ENV !== "production")
      throw Object.defineProperty(new Error('Image with src "' + h + `" must use "width" and "height" properties or "layout='fill'" property.`), "__NEXT_ERROR_CODE", {
        value: "E495",
        enumerable: !1,
        configurable: !0
      });
    let Le = {
      src: B,
      srcSet: void 0,
      sizes: void 0
    };
    qe && (Le = Ce({
      config: k,
      src: h,
      unoptimized: j,
      layout: S,
      width: ke,
      quality: Ge,
      sizes: $,
      loader: z
    }));
    let nt = h;
    if (process.env.NODE_ENV !== "production" && typeof window < "u") {
      let ae;
      try {
        ae = new URL(Le.src);
      } catch {
        ae = new URL(Le.src, window.location.href);
      }
      Z.set(ae.href, {
        src: h,
        priority: l,
        placeholder: pe
      });
    }
    const ot = N ? void 0 : {
      imageSrcSet: Le.srcSet,
      imageSizes: Le.sizes,
      crossOrigin: U.crossOrigin,
      referrerPolicy: U.referrerPolicy
    }, it = typeof window > "u" ? g.default.useEffect : g.default.useLayoutEffect, Qe = (0, g.useRef)(we), Ze = (0, g.useRef)(h);
    (0, g.useEffect)(() => {
      Qe.current = we;
    }, [
      we
    ]), it(() => {
      Ze.current !== h && (Te(), Ze.current = h);
    }, [
      Te,
      h
    ]);
    const st = {
      isLazy: T,
      imgAttributes: Le,
      heightInt: Me,
      widthInt: ke,
      qualityInt: Ge,
      layout: S,
      className: u,
      imgStyle: pt,
      blurStyle: rt,
      loading: I,
      config: k,
      unoptimized: j,
      placeholder: pe,
      loader: z,
      srcString: nt,
      onLoadingCompleteRef: Qe,
      setBlurComplete: le,
      setIntersection: fe,
      isVisible: qe,
      noscriptSizes: $,
      ...U
    };
    return /* @__PURE__ */ (0, v.jsxs)(v.Fragment, {
      children: [
        /* @__PURE__ */ (0, v.jsxs)("span", {
          style: _e,
          children: [
            Fe ? /* @__PURE__ */ (0, v.jsx)("span", {
              style: We,
              children: Xe ? /* @__PURE__ */ (0, v.jsx)("img", {
                style: {
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0
                },
                alt: "",
                "aria-hidden": !0,
                src: Xe
              }) : null
            }) : null,
            /* @__PURE__ */ (0, v.jsx)(w, {
              ...st
            })
          ]
        }),
        !N && l ? (
          // Note how we omit the `href` attribute, as it would only be relevant
          // for browsers that do not support `imagesrcset`, and in those cases
          // it would likely cause the incorrect image to be preloaded.
          //
          // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
          /* @__PURE__ */ (0, v.jsx)(A.default, {
            children: /* @__PURE__ */ (0, v.jsx)("link", {
              rel: "preload",
              as: "image",
              href: Le.srcSet ? void 0 : Le.src,
              ...ot
            }, "__nimg-" + Le.src + Le.srcSet + Le.sizes)
          })
        ) : null
      ]
    });
  }
  (typeof s.default == "function" || typeof s.default == "object" && s.default !== null) && typeof s.default.__esModule > "u" && (Object.defineProperty(s.default, "__esModule", { value: !0 }), Object.assign(s.default, s), c.exports = s.default);
})(Ct, Ct.exports);
var jr = Ct.exports, Nr = jr;
const kr = /* @__PURE__ */ ir(Nr), Pr = ({ linkImage: c, width: s, height: C, alt: y }) => /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsx("div", { className: "icon-avatar", children: /* @__PURE__ */ i.jsx(
  kr,
  {
    src: c,
    alt: y,
    width: s,
    height: C
  }
) }) }), Fr = ({
  isLoggedIn: c,
  imagePerfil: s,
  nomePerfil: C,
  pageLogin: y,
  sigla: v,
  filterModality: g,
  idioma: x,
  linkCalendario: A,
  linkAtendimento: b,
  linkHome: m,
  openMenuModal: M,
  ...a
}) => /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("nav", { className: "menu-deslogado", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "menu-deslogado__wrapper-logo", children: [
    /* @__PURE__ */ i.jsx("a", { href: m, children: /* @__PURE__ */ i.jsx("div", { className: "menu-deslogado__wrapper-logo--logo" }) }),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        onClick: g,
        className: "menu-deslogado__wrapper-logo--item1",
        children: "Modalidade"
      }
    ),
    /* @__PURE__ */ i.jsx("a", { href: A, children: /* @__PURE__ */ i.jsx("div", { className: "menu-deslogado__wrapper-logo--item2", children: "Calendário de eventos" }) }),
    /* @__PURE__ */ i.jsx("a", { href: b, children: /* @__PURE__ */ i.jsx("div", { className: "menu-deslogado__wrapper-logo--item3", children: "Atendimento" }) }),
    /* @__PURE__ */ i.jsx("a", { href: "#", children: /* @__PURE__ */ i.jsx("div", { className: "menu-deslogado__wrapper-logo--item3", children: "Crie seu evento" }) })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: "menu-deslogado__wrapper-login", children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        onClick: x,
        ...a,
        className: "menu-deslogado__wrapper-login--idioma",
        children: [
          /* @__PURE__ */ i.jsx("p", { children: "Idioma" }),
          /* @__PURE__ */ i.jsx("button", { children: v })
        ]
      }
    ),
    c ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("a", { href: y, children: /* @__PURE__ */ i.jsxs("div", { className: "menu-deslogado__wrapper-login--perfil", children: [
        /* @__PURE__ */ i.jsx(
          Pr,
          {
            linkImage: "https://criticalhits.com.br/wp-content/uploads/2021/08/mestre-kame.jpg",
            width: 32,
            height: 32,
            alt: ""
          }
        ),
        C
      ] }) }),
      /* @__PURE__ */ i.jsx("div", { className: "menu-deslogado__wrapper-login--icon-menu" })
    ] }) : /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsx("a", { href: y, children: /* @__PURE__ */ i.jsxs("div", { className: "menu-deslogado__wrapper-login--perfil", children: [
      /* @__PURE__ */ i.jsx("button", {}),
      "Login"
    ] }) }) }),
    /* @__PURE__ */ i.jsx("div", { className: "menu-deslogado__wrapper-login--icon-menu", children: /* @__PURE__ */ i.jsx("button", { onClick: M }) })
  ] })
] }) }), Xr = ({ prevPage: c }) => /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsxs("nav", { className: "menu-standard", children: [
  /* @__PURE__ */ i.jsx("div", { className: "menu-standard__voltar", children: /* @__PURE__ */ i.jsx("a", { href: c, children: /* @__PURE__ */ i.jsx("strong", { children: "Voltar" }) }) }),
  /* @__PURE__ */ i.jsx("div", { className: "menu-standard__logo", children: /* @__PURE__ */ i.jsx("div", { className: "menu-standard__logo--ts" }) }),
  /* @__PURE__ */ i.jsxs("div", { className: "menu-standard__wrapper-login", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "menu-standard__wrapper-login--idioma", children: [
      /* @__PURE__ */ i.jsx("button", {}),
      "Idioma"
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "menu-standard__wrapper-login--evento", children: /* @__PURE__ */ i.jsx(
      Jt,
      {
        title: "Preciso de ajuda",
        variation: "ghost",
        size: "small"
      }
    ) })
  ] })
] }) }), Kr = ({
  politicaPrivacidade: c,
  trabalheConosco: s,
  quemSomos: C,
  sobrePlataforma: y,
  termosCompras: v
}) => {
  const g = () => (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ i.jsxs("footer", { children: [
    /* @__PURE__ */ i.jsxs("div", { className: "wrapper-footer", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "wrapper-1", children: [
        /* @__PURE__ */ i.jsx("div", { className: "wrapper-1__logo" }),
        /* @__PURE__ */ i.jsx("p", { children: "Ticket Sports é líder nacional para organizadores de eventos para esporte, faça parte agora!" }),
        /* @__PURE__ */ i.jsxs("div", { className: "wrapper-1__icones", children: [
          /* @__PURE__ */ i.jsx(
            "a",
            {
              target: "_blank",
              href: "https://www.facebook.com/ticketsportss/?locale=pt_BR",
              children: /* @__PURE__ */ i.jsx("div", { className: "wrapper-1__icones--facebook" })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "a",
            {
              target: "_blank",
              href: "https://www.youtube.com/@TicketSportsHUB",
              children: /* @__PURE__ */ i.jsx("div", { className: "wrapper-1__icones--youtube" })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "a",
            {
              target: "_blank",
              href: "https://www.instagram.com/ticket.sports/",
              children: /* @__PURE__ */ i.jsx("div", { className: "wrapper-1__icones--instagram" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "wrapper-2", children: [
        /* @__PURE__ */ i.jsx("h5", { children: "PARTICIPANTES" }),
        /* @__PURE__ */ i.jsx("a", { href: "https://www.ticketsports.com.br/Entrar/Participante", children: /* @__PURE__ */ i.jsx("h6", { children: "Login" }) }),
        /* @__PURE__ */ i.jsx("a", { href: "https://www.ticketsports.com.br/Entrar/Participante", children: /* @__PURE__ */ i.jsx("h6", { children: "Cadastra-se" }) }),
        /* @__PURE__ */ i.jsx(
          "a",
          {
            target: "_blank",
            href: "https://gruposeassessorias.zendesk.com/hc/pt-br",
            children: /* @__PURE__ */ i.jsx("h6", { children: "Central de ajuda" })
          }
        ),
        /* @__PURE__ */ i.jsx("a", { target: "_blank", href: v, children: /* @__PURE__ */ i.jsx("h6", { children: "Termos de compras" }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "wrapper-3", children: [
        /* @__PURE__ */ i.jsx("h5", { children: "ORGANIZADORES" }),
        /* @__PURE__ */ i.jsx("a", { href: y, children: /* @__PURE__ */ i.jsx("h6", { children: "Sobre a plataforma" }) }),
        /* @__PURE__ */ i.jsx(
          "a",
          {
            target: "_blank",
            href: "https://www.ticketsports.com.br/Funcionalidades",
            children: /* @__PURE__ */ i.jsx("h6", { children: "Solicite um orçamento" })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "a",
          {
            target: "_blank",
            href: "https://organizadorpainel.zendesk.com/hc/pt-br",
            children: /* @__PURE__ */ i.jsx("h6", { children: "Suporte" })
          }
        ),
        /* @__PURE__ */ i.jsx("a", { target: "_blank", href: "https://hub.ticketsports.com.br/", children: /* @__PURE__ */ i.jsx("h6", { children: "Hub" }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "wrapper-4", children: [
        /* @__PURE__ */ i.jsx("h5", { children: "GRUPOS E ASSESSORIAS" }),
        /* @__PURE__ */ i.jsx("a", { target: "_blank", href: "https://grupos.ticketsports.com.br/login", children: /* @__PURE__ */ i.jsx("h6", { children: "Login" }) }),
        /* @__PURE__ */ i.jsx(
          "a",
          {
            target: "_blank",
            href: "https://grupos.ticketsports.com.br/login/cadastro?eventId=null",
            children: /* @__PURE__ */ i.jsx("h6", { children: "Cadastre-se" })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "a",
          {
            target: "_blank",
            href: "https://gruposeassessorias.zendesk.com/hc/pt-br",
            children: /* @__PURE__ */ i.jsx("h6", { children: "Central de ajuda" })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "a",
          {
            target: "_blank",
            href: "https://api.whatsapp.com/send/?phone=5511968646757&text=Ol%C3%A1%2C+vim+da+Central+de+Ajuda+de+Grupos+e+Assessorias+Meu+Nome+%C3%A9&type=phone_number&app_absent=0",
            children: /* @__PURE__ */ i.jsx("h6", { children: "Suporte" })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "wrapper-5", children: [
        /* @__PURE__ */ i.jsx("h5", { children: "EMPRESA" }),
        /* @__PURE__ */ i.jsx("a", { href: C, children: /* @__PURE__ */ i.jsx("h6", { children: "Quem somos" }) }),
        /* @__PURE__ */ i.jsx("a", { href: s, children: /* @__PURE__ */ i.jsx("h6", { children: "Trabalhe conosco" }) }),
        /* @__PURE__ */ i.jsx("a", { href: c, children: /* @__PURE__ */ i.jsx("h6", { children: "Política de privacidade" }) }),
        /* @__PURE__ */ i.jsx("a", { href: "#", children: /* @__PURE__ */ i.jsx("h6", { children: "fff" }) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("hr", {}),
    /* @__PURE__ */ i.jsxs("div", { className: "wrapper-copy", children: [
      /* @__PURE__ */ i.jsxs("h6", { children: [
        "Copyright ©",
        g(),
        " Ticket Sports. All rights reserved."
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "wrapper-copy__app", children: [
        /* @__PURE__ */ i.jsx("h6", { children: "Compre pelo aplicativo" }),
        /* @__PURE__ */ i.jsx("div", { className: "wrapper-copy__app--store" }),
        /* @__PURE__ */ i.jsx("div", { className: "wrapper-copy__app--apple" })
      ] })
    ] })
  ] });
};
export {
  Pr as Avatar,
  Dr as Blocks,
  zr as BoxStatus,
  Jt as Button,
  Ur as CardEvent,
  Hr as Dialog,
  Kr as FooterMain,
  Lr as H1Title,
  lr as H2Title,
  er as H3Title,
  $r as H4Title,
  fr as H5Title,
  Ir as H6Title,
  Mr as Input,
  Fr as MenuLoggedOut,
  Xr as MenuStandard,
  Br as ModalBox,
  Gr as Notification,
  Yr as SearchBar,
  qr as Select,
  Wr as TitlePage
};
