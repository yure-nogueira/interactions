function Lt(a, e, r, t) {
  function n(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i);
    });
  }
  return new (r || (r = Promise))(function(i, s) {
    function o(l) {
      try {
        f(t.next(l));
      } catch (h) {
        s(h);
      }
    }
    function u(l) {
      try {
        f(t.throw(l));
      } catch (h) {
        s(h);
      }
    }
    function f(l) {
      l.done ? i(l.value) : n(l.value).then(o, u);
    }
    f((t = t.apply(a, e || [])).next());
  });
}
function Nt(a, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, t, n, i, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = o(0), s.throw = o(1), s.return = o(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function o(f) {
    return function(l) {
      return u([f, l]);
    };
  }
  function u(f) {
    if (t) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, f[0] && (r = 0)), r; ) try {
      if (t = 1, n && (i = f[0] & 2 ? n.return : f[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, f[1])).done) return i;
      switch (n = 0, i && (f = [f[0] & 2, i.value]), f[0]) {
        case 0:
        case 1:
          i = f;
          break;
        case 4:
          return r.label++, { value: f[1], done: !1 };
        case 5:
          r.label++, n = f[1], f = [0];
          continue;
        case 7:
          f = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (f[0] === 6 || f[0] === 2)) {
            r = 0;
            continue;
          }
          if (f[0] === 3 && (!i || f[1] > i[0] && f[1] < i[3])) {
            r.label = f[1];
            break;
          }
          if (f[0] === 6 && r.label < i[1]) {
            r.label = i[1], i = f;
            break;
          }
          if (i && r.label < i[2]) {
            r.label = i[2], r.ops.push(f);
            break;
          }
          i[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      f = e.call(a, r);
    } catch (l) {
      f = [6, l], n = 0;
    } finally {
      t = i = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function Zr(a, e, r) {
  if (r || arguments.length === 2) for (var t = 0, n = e.length, i; t < n; t++)
    (i || !(t in e)) && (i || (i = Array.prototype.slice.call(e, 0, t)), i[t] = e[t]);
  return a.concat(i || Array.prototype.slice.call(e));
}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var ko = typeof window < "u" ? window : void 0, ns = typeof document < "u" ? document : void 0, is, Ru = function(a) {
  if (is === void 0) {
    var e = a.style.animationName !== void 0, r = a.style.webkitAnimationName !== void 0;
    is = !e && r ? "-webkit-" : "";
  }
  return is;
}, ss = function(a, e, r) {
  var t = e.startsWith("animation") ? Ru(a) : "";
  a.style.setProperty(t + e, r);
}, gi = function(a, e) {
  if (a === void 0 && (a = []), e !== void 0) {
    var r = Array.isArray(e) ? e : [e];
    return Zr(Zr([], a, !0), r, !0);
  }
  return a;
}, _t = function(a) {
  var e, r, t, n, i, s, o = [], u = [], f = [], l = !1, h, _ = {}, c = [], p = [], d = {}, x = 0, k = !1, S = !1, P, w, C, O = !0, g = !1, T = !0, m, E = !1, I = a, M = [], B = [], V = [], X = [], z = [], Y = [], J = [], oe = [], v = [], ae = [], fe = [], wt = typeof AnimationEffect == "function" || ko !== void 0 && typeof ko.AnimationEffect == "function", te = typeof Element == "function" && typeof Element.prototype.animate == "function" && wt, Oe = function() {
    return fe;
  }, We = function(y) {
    return z.forEach(function(A) {
      A.destroy(y);
    }), Se(y), X.length = 0, z.length = 0, o.length = 0, re(), l = !1, T = !0, m;
  }, Se = function(y) {
    pe(), y && Ke();
  }, Ue = function() {
    k = !1, S = !1, T = !0, P = void 0, w = void 0, C = void 0, x = 0, g = !1, O = !0, E = !1;
  }, Le = function() {
    return x !== 0 && !E;
  }, Gt = function(y, A) {
    var L = A.findIndex(function(G) {
      return G.c === y;
    });
    L > -1 && A.splice(L, 1);
  }, Ge = function(y, A) {
    return V.push({ c: y, o: A }), m;
  }, rt = function(y, A) {
    var L = A?.oneTimeCallback ? B : M;
    return L.push({ c: y, o: A }), m;
  }, re = function() {
    return M.length = 0, B.length = 0, m;
  }, pe = function() {
    te && (fe.forEach(function(y) {
      y.cancel();
    }), fe.length = 0);
  }, Ke = function() {
    Y.forEach(function(y) {
      y?.parentNode && y.parentNode.removeChild(y);
    }), Y.length = 0;
  }, nt = function(y) {
    return J.push(y), m;
  }, b = function(y) {
    return oe.push(y), m;
  }, it = function(y) {
    return v.push(y), m;
  }, Ht = function(y) {
    return ae.push(y), m;
  }, Jt = function(y) {
    return u = gi(u, y), m;
  }, ke = function(y) {
    return f = gi(f, y), m;
  }, jt = function(y) {
    return y === void 0 && (y = {}), _ = y, m;
  }, hr = function(y) {
    y === void 0 && (y = []);
    for (var A = 0, L = y; A < L.length; A++) {
      var G = L[A];
      _[G] = "";
    }
    return m;
  }, br = function(y) {
    return c = gi(c, y), m;
  }, Me = function(y) {
    return p = gi(p, y), m;
  }, er = function(y) {
    return y === void 0 && (y = {}), d = y, m;
  }, xe = function(y) {
    y === void 0 && (y = []);
    for (var A = 0, L = y; A < L.length; A++) {
      var G = L[A];
      d[G] = "";
    }
    return m;
  }, st = function() {
    return i !== void 0 ? i : h ? h.getFill() : "both";
  }, He = function() {
    return P !== void 0 ? P : s !== void 0 ? s : h ? h.getDirection() : "normal";
  }, bt = function() {
    return k ? "linear" : t !== void 0 ? t : h ? h.getEasing() : "linear";
  }, zt = function() {
    return S ? 0 : w !== void 0 ? w : r !== void 0 ? r : h ? h.getDuration() : 0;
  }, ge = function() {
    return n !== void 0 ? n : h ? h.getIterations() : 1;
  }, Sr = function() {
    return C !== void 0 ? C : e !== void 0 ? e : h ? h.getDelay() : 0;
  }, tr = function() {
    return o;
  }, kr = function(y) {
    return s = y, F(!0), m;
  }, Cr = function(y) {
    return i = y, F(!0), m;
  }, rr = function(y) {
    return e = y, F(!0), m;
  }, dr = function(y) {
    return t = y, F(!0), m;
  }, H = function(y) {
    return !te && y === 0 && (y = 1), r = y, F(!0), m;
  }, _r = function(y) {
    return n = y, F(!0), m;
  }, St = function(y) {
    return h = y, m;
  }, kt = function(y) {
    if (y != null)
      if (y.nodeType === 1)
        X.push(y);
      else if (y.length >= 0)
        for (var A = 0; A < y.length; A++)
          X.push(y[A]);
      else
        console.error("Invalid addElement value");
    return m;
  }, Ct = function(y) {
    if (y != null)
      if (Array.isArray(y))
        for (var A = 0, L = y; A < L.length; A++) {
          var G = L[A];
          G.parent(m), z.push(G);
        }
      else
        y.parent(m), z.push(y);
    return m;
  }, pr = function(y) {
    var A = o !== y;
    return o = y, A && Er(o), m;
  }, Er = function(y) {
    te && Oe().forEach(function(A) {
      var L = A.effect;
      if (L.setKeyframes)
        L.setKeyframes(y);
      else {
        var G = new KeyframeEffect(L.target, y, L.getTiming());
        A.effect = G;
      }
    });
  }, qt = function() {
    J.forEach(function(G) {
      return G();
    }), oe.forEach(function(G) {
      return G();
    });
    var y = u, A = f, L = _;
    X.forEach(function(G) {
      var ie = G.classList;
      y.forEach(function(Be) {
        return ie.add(Be);
      }), A.forEach(function(Be) {
        return ie.remove(Be);
      });
      for (var ce in L)
        L.hasOwnProperty(ce) && ss(G, ce, L[ce]);
    });
  }, Xr = function() {
    v.forEach(function(ie) {
      return ie();
    }), ae.forEach(function(ie) {
      return ie();
    });
    var y = O ? 1 : 0, A = c, L = p, G = d;
    X.forEach(function(ie) {
      var ce = ie.classList;
      A.forEach(function($r) {
        return ce.add($r);
      }), L.forEach(function($r) {
        return ce.remove($r);
      });
      for (var Be in G)
        G.hasOwnProperty(Be) && ss(ie, Be, G[Be]);
    }), w = void 0, P = void 0, C = void 0, M.forEach(function(ie) {
      return ie.c(y, m);
    }), B.forEach(function(ie) {
      return ie.c(y, m);
    }), B.length = 0, T = !0, O && (g = !0), O = !0;
  }, $ = function() {
    x !== 0 && (x--, x === 0 && (Xr(), h && h.animationFinish()));
  }, N = function() {
    X.forEach(function(y) {
      var A = y.animate(o, { id: I, delay: Sr(), duration: zt(), easing: bt(), iterations: ge(), fill: st(), direction: He() });
      A.pause(), fe.push(A);
    }), fe.length > 0 && (fe[0].onfinish = function() {
      $();
    });
  }, ne = function() {
    qt(), o.length > 0 && te && N(), l = !0;
  }, D = function(y) {
    y = Math.min(Math.max(y, 0), 0.9999), te && fe.forEach(function(A) {
      A.currentTime = A.effect.getComputedTiming().delay + zt() * y, A.pause();
    });
  }, W = function(y) {
    fe.forEach(function(A) {
      A.effect.updateTiming({ delay: Sr(), duration: zt(), easing: bt(), iterations: ge(), fill: st(), direction: He() });
    }), y !== void 0 && D(y);
  }, F = function(y, A, L) {
    return y === void 0 && (y = !1), A === void 0 && (A = !0), y && z.forEach(function(G) {
      G.update(y, A, L);
    }), te && W(L), m;
  }, U = function(y, A) {
    return y === void 0 && (y = !1), z.forEach(function(L) {
      L.progressStart(y, A);
    }), me(), k = y, l || ne(), F(!1, !0, A), m;
  }, Ae = function(y) {
    return z.forEach(function(A) {
      A.progressStep(y);
    }), D(y), m;
  }, K = function(y, A, L) {
    return k = !1, z.forEach(function(G) {
      G.progressEnd(y, A, L);
    }), L !== void 0 && (w = L), g = !1, O = !0, y === 0 ? (P = He() === "reverse" ? "normal" : "reverse", P === "reverse" && (O = !1), te ? (F(), D(1 - A)) : (C = (1 - A) * zt() * -1, F(!1, !1))) : y === 1 && (te ? (F(), D(A)) : (C = A * zt() * -1, F(!1, !1))), y !== void 0 && !h && pt(), m;
  }, me = function() {
    l && (te ? fe.forEach(function(y) {
      y.pause();
    }) : X.forEach(function(y) {
      ss(y, "animation-play-state", "paused");
    }), E = !0);
  }, Ne = function() {
    return z.forEach(function(y) {
      y.pause();
    }), me(), m;
  }, ve = function() {
    $();
  }, le = function() {
    fe.forEach(function(y) {
      y.play();
    }), (o.length === 0 || X.length === 0) && $();
  }, se = function() {
    te && (D(0), W());
  }, pt = function(y) {
    return new Promise(function(A) {
      y?.sync && (S = !0, rt(function() {
        return S = !1;
      }, { oneTimeCallback: !0 })), l || ne(), g && (se(), g = !1), T && (x = z.length + 1, T = !1);
      var L = function() {
        Gt(G, B), A();
      }, G = function() {
        Gt(L, V), A();
      };
      rt(G, { oneTimeCallback: !0 }), Ge(L, { oneTimeCallback: !0 }), z.forEach(function(ie) {
        ie.play();
      }), te ? le() : ve(), E = !1;
    });
  }, de = function() {
    z.forEach(function(y) {
      y.stop();
    }), l && (pe(), l = !1), Ue(), V.forEach(function(y) {
      return y.c(0, m);
    }), V.length = 0;
  }, Qe = function(y, A) {
    var L, G = o[0];
    return G !== void 0 && (G.offset === void 0 || G.offset === 0) ? G[y] = A : o = Zr([(L = { offset: 0 }, L[y] = A, L)], o, !0), m;
  }, It = function(y, A) {
    var L, G = o[o.length - 1];
    return G !== void 0 && (G.offset === void 0 || G.offset === 1) ? G[y] = A : o = Zr(Zr([], o, !0), [(L = { offset: 1 }, L[y] = A, L)], !1), m;
  }, Fe = function(y, A, L) {
    return Qe(y, A).to(y, L);
  };
  return m = { parentAnimation: h, elements: X, childAnimations: z, id: I, animationFinish: $, from: Qe, to: It, fromTo: Fe, parent: St, play: pt, pause: Ne, stop: de, destroy: We, keyframes: pr, addAnimation: Ct, addElement: kt, update: F, fill: Cr, direction: kr, iterations: _r, duration: H, easing: dr, delay: rr, getWebAnimations: Oe, getKeyframes: tr, getFill: st, getDirection: He, getDelay: Sr, getIterations: ge, getEasing: bt, getDuration: zt, afterAddRead: it, afterAddWrite: Ht, afterClearStyles: xe, afterStyles: er, afterRemoveClass: Me, afterAddClass: br, beforeAddRead: nt, beforeAddWrite: b, beforeClearStyles: hr, beforeStyles: jt, beforeRemoveClass: ke, beforeAddClass: Jt, onFinish: rt, isRunning: Le, progressStart: U, progressStep: Ae, progressEnd: K };
}, Fu = Object.defineProperty, zu = function(a, e) {
  for (var r in e) Fu(a, r, { get: e[r], enumerable: !0 });
}, Iu = /* @__PURE__ */ new WeakMap(), Lu = function(a) {
  return Iu.get(a);
}, Nu = typeof window < "u" ? window : {}, Bu = Nu.document || { head: {} };
(function() {
  var a = !1;
  try {
    Bu.addEventListener("e", null, Object.defineProperty({}, "passive", { get: function() {
      a = !0;
    } }));
  } catch {
  }
  return a;
})();
(function() {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function";
  } catch {
  }
  return !1;
})();
var Yu = {};
zu(Yu, { err: function() {
  return aa;
}, map: function() {
  return Xu;
}, ok: function() {
  return ws;
}, unwrap: function() {
  return $u;
}, unwrapErr: function() {
  return Vu;
} });
var ws = function(a) {
  return { isOk: !0, isErr: !1, value: a };
}, aa = function(a) {
  return { isOk: !1, isErr: !0, value: a };
};
function Xu(a, e) {
  if (a.isOk) {
    var r = e(a.value);
    return r instanceof Promise ? r.then(function(n) {
      return ws(n);
    }) : ws(r);
  }
  if (a.isErr) {
    var t = a.value;
    return aa(t);
  }
  throw "should never get here";
}
var $u = function(a) {
  if (a.isOk)
    return a.value;
  throw a.value;
}, Vu = function(a) {
  if (a.isErr)
    return a.value;
  throw a.value;
}, Wu = function(a) {
  return Lu(a).V;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var Uu, Zs = function(a) {
  return a && Wu(a) || Uu;
};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var Co = function(a) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return console.warn.apply(console, Zr(["[Ionic Warning]: ".concat(a)], e, !1));
}, Gu = function(a, e) {
  a.componentOnReady ? a.componentOnReady().then(function(r) {
    return e(r);
  }) : Hu(function() {
    return e(a);
  });
}, Hu = function(a) {
  return typeof __zone_symbol__requestAnimationFrame == "function" ? __zone_symbol__requestAnimationFrame(a) : typeof requestAnimationFrame == "function" ? requestAnimationFrame(a) : setTimeout(a);
}, qu = 99, Js = function(a) {
  return _t().duration(a ? 400 : 300);
}, Ku = function(a) {
  var e, r, t = a.width + 8, n = _t(), i = _t();
  a.isEndSide ? (e = t + "px", r = "0px") : (e = -t + "px", r = "0px"), n.addElement(a.menuInnerEl).fromTo("transform", "translateX(".concat(e, ")"), "translateX(".concat(r, ")"));
  var s = Zs(a), o = s === "ios", u = o ? 0.2 : 0.25;
  return i.addElement(a.backdropEl).fromTo("opacity", 0.01, u), Js(o).addAnimation([n, i]);
}, Qu = function(a) {
  var e, r, t = Zs(a), n = a.width;
  a.isEndSide ? (e = -n + "px", r = n + "px") : (e = n + "px", r = -n + "px");
  var i = _t().addElement(a.menuInnerEl).fromTo("transform", "translateX(".concat(r, ")"), "translateX(0px)"), s = _t().addElement(a.contentEl).fromTo("transform", "translateX(0px)", "translateX(".concat(e, ")")), o = _t().addElement(a.backdropEl).fromTo("opacity", 0.01, 0.32);
  return Js(t === "ios").addAnimation([i, s, o]);
}, Zu = function(a) {
  var e = Zs(a), r = a.width * (a.isEndSide ? -1 : 1) + "px", t = _t().addElement(a.contentEl).fromTo("transform", "translateX(0px)", "translateX(".concat(r, ")"));
  return Js(e === "ios").addAnimation(t);
}, Ju = function() {
  var a = /* @__PURE__ */ new Map(), e = [], r = function(g) {
    return Lt(void 0, void 0, void 0, function() {
      var T;
      return Nt(this, function(m) {
        switch (m.label) {
          case 0:
            return [4, f(g, !0)];
          case 1:
            return T = m.sent(), T ? [2, T.open()] : [2, !1];
        }
      });
    });
  }, t = function(g) {
    return Lt(void 0, void 0, void 0, function() {
      var T;
      return Nt(this, function(m) {
        switch (m.label) {
          case 0:
            return [4, g !== void 0 ? f(g, !0) : l()];
          case 1:
            return T = m.sent(), T !== void 0 ? [2, T.close()] : [2, !1];
        }
      });
    });
  }, n = function(g) {
    return Lt(void 0, void 0, void 0, function() {
      var T;
      return Nt(this, function(m) {
        switch (m.label) {
          case 0:
            return [4, f(g, !0)];
          case 1:
            return T = m.sent(), T ? [2, T.toggle()] : [2, !1];
        }
      });
    });
  }, i = function(g, T) {
    return Lt(void 0, void 0, void 0, function() {
      var m;
      return Nt(this, function(E) {
        switch (E.label) {
          case 0:
            return [4, f(T)];
          case 1:
            return m = E.sent(), m && (m.disabled = !g), [2, m];
        }
      });
    });
  }, s = function(g, T) {
    return Lt(void 0, void 0, void 0, function() {
      var m;
      return Nt(this, function(E) {
        switch (E.label) {
          case 0:
            return [4, f(T)];
          case 1:
            return m = E.sent(), m && (m.swipeGesture = g), [2, m];
        }
      });
    });
  }, o = function(g) {
    return Lt(void 0, void 0, void 0, function() {
      var T, T;
      return Nt(this, function(m) {
        switch (m.label) {
          case 0:
            return g == null ? [3, 2] : [4, f(g)];
          case 1:
            return T = m.sent(), [2, T !== void 0 && T.isOpen()];
          case 2:
            return [4, l()];
          case 3:
            return T = m.sent(), [2, T !== void 0];
        }
      });
    });
  }, u = function(g) {
    return Lt(void 0, void 0, void 0, function() {
      var T;
      return Nt(this, function(m) {
        switch (m.label) {
          case 0:
            return [4, f(g)];
          case 1:
            return T = m.sent(), T ? [2, !T.disabled] : [2, !1];
        }
      });
    });
  }, f = function(g) {
    for (var T = [], m = 1; m < arguments.length; m++)
      T[m - 1] = arguments[m];
    return Lt(void 0, Zr([g], T, !0), void 0, function(E, I) {
      var M, B, V;
      return I === void 0 && (I = !1), Nt(this, function(X) {
        switch (X.label) {
          case 0:
            return [4, O()];
          case 1:
            if (X.sent(), E === "start" || E === "end") {
              if (M = e.filter(function(z) {
                return z.side === E && !z.disabled;
              }), M.length >= 1)
                return M.length > 1 && I && Co('menuController queried for a menu on the "'.concat(E, '" side, but ').concat(M.length, " menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."), M.map(function(z) {
                  return z.el;
                })), [2, M[0].el];
              if (B = e.filter(function(z) {
                return z.side === E;
              }), B.length >= 1)
                return B.length > 1 && I && Co('menuController queried for a menu on the "'.concat(E, '" side, but ').concat(B.length, " menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."), B.map(function(z) {
                  return z.el;
                })), [2, B[0].el];
            } else if (E != null)
              return [2, C(function(z) {
                return z.menuId === E;
              })];
            return V = C(function(z) {
              return !z.disabled;
            }), V ? [2, V] : [2, e.length > 0 ? e[0].el : void 0];
        }
      });
    });
  }, l = function() {
    return Lt(void 0, void 0, void 0, function() {
      return Nt(this, function(g) {
        switch (g.label) {
          case 0:
            return [4, O()];
          case 1:
            return g.sent(), [2, S()];
        }
      });
    });
  }, h = function() {
    return Lt(void 0, void 0, void 0, function() {
      return Nt(this, function(g) {
        switch (g.label) {
          case 0:
            return [4, O()];
          case 1:
            return g.sent(), [2, P()];
        }
      });
    });
  }, _ = function() {
    return Lt(void 0, void 0, void 0, function() {
      return Nt(this, function(g) {
        switch (g.label) {
          case 0:
            return [4, O()];
          case 1:
            return g.sent(), [2, w()];
        }
      });
    });
  }, c = function(g, T) {
    a.set(g, T);
  }, p = function(g) {
    e.indexOf(g) < 0 && e.push(g);
  }, d = function(g) {
    var T = e.indexOf(g);
    T > -1 && e.splice(T, 1);
  }, x = function(g, T, m, E) {
    return Lt(void 0, void 0, void 0, function() {
      var I;
      return Nt(this, function(M) {
        switch (M.label) {
          case 0:
            return w() ? [2, !1] : T ? [4, l()] : [3, 3];
          case 1:
            return I = M.sent(), I && g.el !== I ? [4, I.setOpen(!1, !1)] : [3, 3];
          case 2:
            M.sent(), M.label = 3;
          case 3:
            return [2, g._setOpen(T, m, E)];
        }
      });
    });
  }, k = function(g, T) {
    var m = a.get(g);
    if (!m)
      throw new Error("animation not registered");
    var E = m(T);
    return E;
  }, S = function() {
    return C(function(g) {
      return g._isOpen;
    });
  }, P = function() {
    return e.map(function(g) {
      return g.el;
    });
  }, w = function() {
    return e.some(function(g) {
      return g.isAnimating;
    });
  }, C = function(g) {
    var T = e.find(g);
    if (T !== void 0)
      return T.el;
  }, O = function() {
    return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(function(g) {
      return new Promise(function(T) {
        return Gu(g, T);
      });
    }));
  };
  return c("reveal", Zu), c("push", Qu), c("overlay", Ku), ns?.addEventListener("ionBackButton", function(g) {
    var T = S();
    T && g.detail.register(qu, function() {
      return T.close();
    });
  }), { registerAnimation: c, get: f, getMenus: h, getOpen: l, isEnabled: u, swipeGesture: s, isAnimating: _, isOpen: o, enable: i, toggle: n, close: t, open: r, _getOpenSync: S, _createAnimation: k, _register: p, _unregister: d, _setOpen: x };
};
Ju();
var bs;
((a) => {
  function e(r, t = 0, n = !1, i = 0) {
    return _t().addAnimation(
      t ? r.map(
        (s, o) => s.delay(
          n ? Math.min(o * t, (i - 1) * t) : o * t
        )
      ) : r
    );
  }
  a.chain = e;
})(bs || (bs = {}));
var Bi;
((a) => {
  function e(t) {
    return _t().addElement(t).keyframes([
      { offset: 0, opacity: "0" },
      { offset: 1, opacity: "1" }
    ]);
  }
  a.fadeIn = e;
  function r(t) {
    return _t().addElement(t).keyframes([
      { offset: 0, opacity: "1" },
      { offset: 1, opacity: "0" }
    ]);
  }
  a.fadeOut = r;
})(Bi || (Bi = {}));
var Yi;
((a) => {
  function e(t, n, i) {
    return _t().addElement(t).keyframes([
      { offset: 0, transform: `scale(${n})` },
      { offset: 1, transform: `scale(${i})` }
    ]);
  }
  a.scale = e;
  function r(t, n, i, s = 0.25, o = 0.75) {
    return _t().addElement(t).keyframes([
      { offset: 0, transform: "scale(1)" },
      { offset: s, transform: `scale(${n})` },
      { offset: o, transform: `scale(${i})` },
      { offset: 1, transform: "scale(1)" }
    ]);
  }
  a.pulse = r;
})(Yi || (Yi = {}));
var Gn;
((a) => {
  function e(n, i, s, o, u) {
    return _t().addElement(n).keyframes([
      { offset: 0, transform: `translateX(${i}${s})` },
      {
        offset: 1,
        transform: `translateX(${o}${u})`
      }
    ]);
  }
  a.slideX = e;
  function r(n, i, s, o, u) {
    return _t().addElement(n).keyframes([
      { offset: 0, transform: `translateY(${i}${s})` },
      {
        offset: 1,
        transform: `translateY(${o}${u})`
      }
    ]);
  }
  a.slideY = r;
  function t(n, i, s, o, u, f, l, h, _) {
    return _t().addElement(n).keyframes([
      {
        offset: 0,
        transform: `translateX(${i}${s}) translateY(${f}${l})`
      },
      {
        offset: 1,
        transform: `translateX(${o}${u}) translateY(${h}${_})`
      }
    ]);
  }
  a.slideXY = t;
})(Gn || (Gn = {}));
var pn = /* @__PURE__ */ ((a) => (a.TO_TOP = "to-top", a.TO_BOTTOM = "to-bottom", a.TO_LEFT = "to-left", a.TO_RIGHT = "to-right", a))(pn || {}), Kt = /* @__PURE__ */ ((a) => (a.PX = "px", a.EM = "em", a.REM = "rem", a.PERCENT = "%", a.VW = "vw", a.VH = "vh", a))(Kt || {}), Ss;
((a) => {
  function e(r, t) {
    switch (pn[t]) {
      case pn.TO_TOP:
        return qr.slideY(
          r,
          110,
          Kt.PERCENT,
          0,
          Kt.PERCENT
        );
      case pn.TO_BOTTOM:
        return qr.slideY(
          r,
          -110,
          Kt.PERCENT,
          0,
          Kt.PERCENT
        );
      case pn.TO_LEFT:
        return qr.slideX(
          r,
          100,
          Kt.PERCENT,
          0,
          Kt.PERCENT
        );
      case pn.TO_RIGHT:
        return qr.slideX(
          r,
          -100,
          Kt.PERCENT,
          0,
          Kt.PERCENT
        );
      default:
        return qr.slideY(
          r,
          100,
          Kt.PERCENT,
          0,
          Kt.PERCENT
        );
    }
  }
  a.mask = e;
})(Ss || (Ss = {}));
function gr(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function ua(a, e) {
  a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.__proto__ = e;
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Rt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, En = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, js, et, ye, $t = 1e8, he = 1 / $t, ks = Math.PI * 2, ju = ks / 4, ef = 0, fa = Math.sqrt, tf = Math.cos, rf = Math.sin, Ve = function(e) {
  return typeof e == "string";
}, Ce = function(e) {
  return typeof e == "function";
}, Tr = function(e) {
  return typeof e == "number";
}, eo = function(e) {
  return typeof e > "u";
}, cr = function(e) {
  return typeof e == "object";
}, mt = function(e) {
  return e !== !1;
}, to = function() {
  return typeof window < "u";
}, mi = function(e) {
  return Ce(e) || Ve(e);
}, la = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, tt = Array.isArray, Cs = /(?:-?\.?\d|\.)+/gi, ca = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, vn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, os = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ha = /[+-]=-?[.\d]+/, da = /[^,'"\[\]\s]+/gi, nf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, we, ir, Es, ro, Ft = {}, Xi = {}, _a, pa = function(e) {
  return (Xi = on(e, Ft)) && Tt;
}, no = function(e, r) {
  return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()");
}, si = function(e, r) {
  return !r && console.warn(e);
}, ga = function(e, r) {
  return e && (Ft[e] = r) && Xi && (Xi[e] = r) || Ft;
}, oi = function() {
  return 0;
}, sf = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Mi = {
  suppressEvents: !0,
  kill: !1
}, of = {
  suppressEvents: !0
}, io = {}, Fr = [], Ps = {}, ma, Ot = {}, as = {}, Eo = 30, Ai = [], so = "", oo = function(e) {
  var r = e[0], t, n;
  if (cr(r) || Ce(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
    for (n = Ai.length; n-- && !Ai[n].targetTest(r); )
      ;
    t = Ai[n];
  }
  for (n = e.length; n--; )
    e[n] && (e[n]._gsap || (e[n]._gsap = new Xa(e[n], t))) || e.splice(n, 1);
  return e;
}, Jr = function(e) {
  return e._gsap || oo(Vt(e))[0]._gsap;
}, va = function(e, r, t) {
  return (t = e[r]) && Ce(t) ? e[r]() : eo(t) && e.getAttribute && e.getAttribute(r) || t;
}, vt = function(e, r) {
  return (e = e.split(",")).forEach(r) || e;
}, Ee = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, $e = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, Tn = function(e, r) {
  var t = r.charAt(0), n = parseFloat(r.substr(2));
  return e = parseFloat(e), t === "+" ? e + n : t === "-" ? e - n : t === "*" ? e * n : e / n;
}, af = function(e, r) {
  for (var t = r.length, n = 0; e.indexOf(r[n]) < 0 && ++n < t; )
    ;
  return n < t;
}, $i = function() {
  var e = Fr.length, r = Fr.slice(0), t, n;
  for (Ps = {}, Fr.length = 0, t = 0; t < e; t++)
    n = r[t], n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0);
}, ya = function(e, r, t, n) {
  Fr.length && !et && $i(), e.render(r, t, et && r < 0 && (e._initted || e._startAt)), Fr.length && !et && $i();
}, xa = function(e) {
  var r = parseFloat(e);
  return (r || r === 0) && (e + "").match(da).length < 2 ? r : Ve(e) ? e.trim() : e;
}, Ta = function(e) {
  return e;
}, Ut = function(e, r) {
  for (var t in r)
    t in e || (e[t] = r[t]);
  return e;
}, uf = function(e) {
  return function(r, t) {
    for (var n in t)
      n in r || n === "duration" && e || n === "ease" || (r[n] = t[n]);
  };
}, on = function(e, r) {
  for (var t in r)
    e[t] = r[t];
  return e;
}, Po = function a(e, r) {
  for (var t in r)
    t !== "__proto__" && t !== "constructor" && t !== "prototype" && (e[t] = cr(r[t]) ? a(e[t] || (e[t] = {}), r[t]) : r[t]);
  return e;
}, Vi = function(e, r) {
  var t = {}, n;
  for (n in e)
    n in r || (t[n] = e[n]);
  return t;
}, Hn = function(e) {
  var r = e.parent || we, t = e.keyframes ? uf(tt(e.keyframes)) : Ut;
  if (mt(e.inherit))
    for (; r; )
      t(e, r.vars.defaults), r = r.parent || r._dp;
  return e;
}, ff = function(e, r) {
  for (var t = e.length, n = t === r.length; n && t-- && e[t] === r[t]; )
    ;
  return t < 0;
}, wa = function(e, r, t, n, i) {
  var s = e[n], o;
  if (i)
    for (o = r[i]; s && s[i] > o; )
      s = s._prev;
  return s ? (r._next = s._next, s._next = r) : (r._next = e[t], e[t] = r), r._next ? r._next._prev = r : e[n] = r, r._prev = s, r.parent = r._dp = e, r;
}, ji = function(e, r, t, n) {
  t === void 0 && (t = "_first"), n === void 0 && (n = "_last");
  var i = r._prev, s = r._next;
  i ? i._next = s : e[t] === r && (e[t] = s), s ? s._prev = i : e[n] === r && (e[n] = i), r._next = r._prev = r.parent = null;
}, Lr = function(e, r) {
  e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, jr = function(e, r) {
  if (e && (!r || r._end > e._dur || r._start < 0))
    for (var t = e; t; )
      t._dirty = 1, t = t.parent;
  return e;
}, lf = function(e) {
  for (var r = e.parent; r && r.parent; )
    r._dirty = 1, r.totalDuration(), r = r.parent;
  return e;
}, Os = function(e, r, t, n) {
  return e._startAt && (et ? e._startAt.revert(Mi) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(r, !0, n));
}, cf = function a(e) {
  return !e || e._ts && a(e.parent);
}, Oo = function(e) {
  return e._repeat ? Pn(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Pn = function(e, r) {
  var t = Math.floor(e /= r);
  return e && t === e ? t - 1 : t;
}, Wi = function(e, r) {
  return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur);
}, es = function(e) {
  return e._end = $e(e._start + (e._tDur / Math.abs(e._ts || e._rts || he) || 0));
}, ts = function(e, r) {
  var t = e._dp;
  return t && t.smoothChildTiming && e._ts && (e._start = $e(t._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)), es(e), t._dirty || jr(t, e)), e;
}, ba = function(e, r) {
  var t;
  if ((r._time || !r._dur && r._initted || r._start < e._time && (r._dur || !r.add)) && (t = Wi(e.rawTime(), r), (!r._dur || _i(0, r.totalDuration(), t) - r._tTime > he) && r.render(t, !0)), jr(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (t = e; t._dp; )
        t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
    e._zTime = -he;
  }
}, or = function(e, r, t, n) {
  return r.parent && Lr(r), r._start = $e((Tr(t) ? t : t || e !== we ? Bt(e, t, r) : e._time) + r._delay), r._end = $e(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), wa(e, r, "_first", "_last", e._sort ? "_start" : 0), Ms(r) || (e._recent = r), n || ba(e, r), e._ts < 0 && ts(e, e._tTime), e;
}, Sa = function(e, r) {
  return (Ft.ScrollTrigger || no("scrollTrigger", r)) && Ft.ScrollTrigger.create(r, e);
}, ka = function(e, r, t, n, i) {
  if (uo(e, r, i), !e._initted)
    return 1;
  if (!t && e._pt && !et && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && ma !== Mt.frame)
    return Fr.push(e), e._lazy = [i, n], 1;
}, hf = function a(e) {
  var r = e.parent;
  return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || a(r));
}, Ms = function(e) {
  var r = e.data;
  return r === "isFromStart" || r === "isStart";
}, df = function(e, r, t, n) {
  var i = e.ratio, s = r < 0 || !r && (!e._start && hf(e) && !(!e._initted && Ms(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ms(e)) ? 0 : 1, o = e._rDelay, u = 0, f, l, h;
  if (o && e._repeat && (u = _i(0, e._tDur, r), l = Pn(u, o), e._yoyo && l & 1 && (s = 1 - s), l !== Pn(e._tTime, o) && (i = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== i || et || n || e._zTime === he || !r && e._zTime) {
    if (!e._initted && ka(e, r, n, t, u))
      return;
    for (h = e._zTime, e._zTime = r || (t ? he : 0), t || (t = r && !h), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = u, f = e._pt; f; )
      f.r(s, f.d), f = f._next;
    r < 0 && Os(e, r, t, !0), e._onUpdate && !t && Dt(e, "onUpdate"), u && e._repeat && !t && e.parent && Dt(e, "onRepeat"), (r >= e._tDur || r < 0) && e.ratio === s && (s && Lr(e, 1), !t && !et && (Dt(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = r);
}, _f = function(e, r, t) {
  var n;
  if (t > r)
    for (n = e._first; n && n._start <= t; ) {
      if (n.data === "isPause" && n._start > r)
        return n;
      n = n._next;
    }
  else
    for (n = e._last; n && n._start >= t; ) {
      if (n.data === "isPause" && n._start < r)
        return n;
      n = n._prev;
    }
}, On = function(e, r, t, n) {
  var i = e._repeat, s = $e(r) || 0, o = e._tTime / e._tDur;
  return o && !n && (e._time *= s / e._dur), e._dur = s, e._tDur = i ? i < 0 ? 1e10 : $e(s * (i + 1) + e._rDelay * i) : s, o > 0 && !n && ts(e, e._tTime = e._tDur * o), e.parent && es(e), t || jr(e.parent, e), e;
}, Mo = function(e) {
  return e instanceof ct ? jr(e) : On(e, e._dur);
}, pf = {
  _start: 0,
  endTime: oi,
  totalDuration: oi
}, Bt = function a(e, r, t) {
  var n = e.labels, i = e._recent || pf, s = e.duration() >= $t ? i.endTime(!1) : e._dur, o, u, f;
  return Ve(r) && (isNaN(r) || r in n) ? (u = r.charAt(0), f = r.substr(-1) === "%", o = r.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (r = r.replace(/=/, "")), (u === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (f ? (o < 0 ? i : t).totalDuration() / 100 : 1)) : o < 0 ? (r in n || (n[r] = s), n[r]) : (u = parseFloat(r.charAt(o - 1) + r.substr(o + 1)), f && t && (u = u / 100 * (tt(t) ? t[0] : t).totalDuration()), o > 1 ? a(e, r.substr(0, o - 1), t) + u : s + u)) : r == null ? s : +r;
}, qn = function(e, r, t) {
  var n = Tr(r[1]), i = (n ? 2 : 1) + (e < 2 ? 0 : 1), s = r[i], o, u;
  if (n && (s.duration = r[1]), s.parent = t, e) {
    for (o = s, u = t; u && !("immediateRender" in o); )
      o = u.vars.defaults || {}, u = mt(u.vars.inherit) && u.parent;
    s.immediateRender = mt(o.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = r[i - 1];
  }
  return new Re(r[0], s, r[i + 1]);
}, Yr = function(e, r) {
  return e || e === 0 ? r(e) : r;
}, _i = function(e, r, t) {
  return t < e ? e : t > r ? r : t;
}, je = function(e, r) {
  return !Ve(e) || !(r = nf.exec(e)) ? "" : r[1];
}, gf = function(e, r, t) {
  return Yr(t, function(n) {
    return _i(e, r, n);
  });
}, As = [].slice, Ca = function(e, r) {
  return e && cr(e) && "length" in e && (!r && !e.length || e.length - 1 in e && cr(e[0])) && !e.nodeType && e !== ir;
}, mf = function(e, r, t) {
  return t === void 0 && (t = []), e.forEach(function(n) {
    var i;
    return Ve(n) && !r || Ca(n, 1) ? (i = t).push.apply(i, Vt(n)) : t.push(n);
  }) || t;
}, Vt = function(e, r, t) {
  return ye && !r && ye.selector ? ye.selector(e) : Ve(e) && !t && (Es || !Mn()) ? As.call((r || ro).querySelectorAll(e), 0) : tt(e) ? mf(e, t) : Ca(e) ? As.call(e, 0) : e ? [e] : [];
}, Ds = function(e) {
  return e = Vt(e)[0] || si("Invalid scope") || {}, function(r) {
    var t = e.current || e.nativeElement || e;
    return Vt(r, t.querySelectorAll ? t : t === e ? si("Invalid scope") || ro.createElement("div") : e);
  };
}, Ea = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Pa = function(e) {
  if (Ce(e))
    return e;
  var r = cr(e) ? e : {
    each: e
  }, t = en(r.ease), n = r.from || 0, i = parseFloat(r.base) || 0, s = {}, o = n > 0 && n < 1, u = isNaN(n) || o, f = r.axis, l = n, h = n;
  return Ve(n) ? l = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[n] || 0 : !o && u && (l = n[0], h = n[1]), function(_, c, p) {
    var d = (p || r).length, x = s[d], k, S, P, w, C, O, g, T, m;
    if (!x) {
      if (m = r.grid === "auto" ? 0 : (r.grid || [1, $t])[1], !m) {
        for (g = -$t; g < (g = p[m++].getBoundingClientRect().left) && m < d; )
          ;
        m < d && m--;
      }
      for (x = s[d] = [], k = u ? Math.min(m, d) * l - 0.5 : n % m, S = m === $t ? 0 : u ? d * h / m - 0.5 : n / m | 0, g = 0, T = $t, O = 0; O < d; O++)
        P = O % m - k, w = S - (O / m | 0), x[O] = C = f ? Math.abs(f === "y" ? w : P) : fa(P * P + w * w), C > g && (g = C), C < T && (T = C);
      n === "random" && Ea(x), x.max = g - T, x.min = T, x.v = d = (parseFloat(r.amount) || parseFloat(r.each) * (m > d ? d - 1 : f ? f === "y" ? d / m : m : Math.max(m, d / m)) || 0) * (n === "edges" ? -1 : 1), x.b = d < 0 ? i - d : i, x.u = je(r.amount || r.each) || 0, t = t && d < 0 ? Na(t) : t;
    }
    return d = (x[_] - x.min) / x.max || 0, $e(x.b + (t ? t(d) : d) * x.v) + x.u;
  };
}, Rs = function(e) {
  var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(t) {
    var n = $e(Math.round(parseFloat(t) / e) * e * r);
    return (n - n % 1) / r + (Tr(t) ? 0 : je(t));
  };
}, Oa = function(e, r) {
  var t = tt(e), n, i;
  return !t && cr(e) && (n = t = e.radius || $t, e.values ? (e = Vt(e.values), (i = !Tr(e[0])) && (n *= n)) : e = Rs(e.increment)), Yr(r, t ? Ce(e) ? function(s) {
    return i = e(s), Math.abs(i - s) <= n ? i : s;
  } : function(s) {
    for (var o = parseFloat(i ? s.x : s), u = parseFloat(i ? s.y : 0), f = $t, l = 0, h = e.length, _, c; h--; )
      i ? (_ = e[h].x - o, c = e[h].y - u, _ = _ * _ + c * c) : _ = Math.abs(e[h] - o), _ < f && (f = _, l = h);
    return l = !n || f <= n ? e[l] : s, i || l === s || Tr(s) ? l : l + je(s);
  } : Rs(e));
}, Ma = function(e, r, t, n) {
  return Yr(tt(e) ? !r : t === !0 ? !!(t = 0) : !n, function() {
    return tt(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (n = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (r - e + t * 0.99)) / t) * t * n) / n;
  });
}, vf = function() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function(n) {
    return r.reduce(function(i, s) {
      return s(i);
    }, n);
  };
}, yf = function(e, r) {
  return function(t) {
    return e(parseFloat(t)) + (r || je(t));
  };
}, xf = function(e, r, t) {
  return Da(e, r, 0, 1, t);
}, Aa = function(e, r, t) {
  return Yr(t, function(n) {
    return e[~~r(n)];
  });
}, Tf = function a(e, r, t) {
  var n = r - e;
  return tt(e) ? Aa(e, a(0, e.length), r) : Yr(t, function(i) {
    return (n + (i - e) % n) % n + e;
  });
}, wf = function a(e, r, t) {
  var n = r - e, i = n * 2;
  return tt(e) ? Aa(e, a(0, e.length - 1), r) : Yr(t, function(s) {
    return s = (i + (s - e) % i) % i || 0, e + (s > n ? i - s : s);
  });
}, ai = function(e) {
  for (var r = 0, t = "", n, i, s, o; ~(n = e.indexOf("random(", r)); )
    s = e.indexOf(")", n), o = e.charAt(n + 7) === "[", i = e.substr(n + 7, s - n - 7).match(o ? da : Cs), t += e.substr(r, n - r) + Ma(o ? i : +i[0], o ? 0 : +i[1], +i[2] || 1e-5), r = s + 1;
  return t + e.substr(r, e.length - r);
}, Da = function(e, r, t, n, i) {
  var s = r - e, o = n - t;
  return Yr(i, function(u) {
    return t + ((u - e) / s * o || 0);
  });
}, bf = function a(e, r, t, n) {
  var i = isNaN(e + r) ? 0 : function(c) {
    return (1 - c) * e + c * r;
  };
  if (!i) {
    var s = Ve(e), o = {}, u, f, l, h, _;
    if (t === !0 && (n = 1) && (t = null), s)
      e = {
        p: e
      }, r = {
        p: r
      };
    else if (tt(e) && !tt(r)) {
      for (l = [], h = e.length, _ = h - 2, f = 1; f < h; f++)
        l.push(a(e[f - 1], e[f]));
      h--, i = function(p) {
        p *= h;
        var d = Math.min(_, ~~p);
        return l[d](p - d);
      }, t = r;
    } else n || (e = on(tt(e) ? [] : {}, e));
    if (!l) {
      for (u in r)
        ao.call(o, e, u, "get", r[u]);
      i = function(p) {
        return co(p, o) || (s ? e.p : e);
      };
    }
  }
  return Yr(t, i);
}, Ao = function(e, r, t) {
  var n = e.labels, i = $t, s, o, u;
  for (s in n)
    o = n[s] - r, o < 0 == !!t && o && i > (o = Math.abs(o)) && (u = s, i = o);
  return u;
}, Dt = function(e, r, t) {
  var n = e.vars, i = n[r], s = ye, o = e._ctx, u, f, l;
  if (i)
    return u = n[r + "Params"], f = n.callbackScope || e, t && Fr.length && $i(), o && (ye = o), l = u ? i.apply(f, u) : i.call(f), ye = s, l;
}, Bn = function(e) {
  return Lr(e), e.scrollTrigger && e.scrollTrigger.kill(!!et), e.progress() < 1 && Dt(e, "onInterrupt"), e;
}, yn, Ra = [], Fa = function(e) {
  if (e)
    if (e = !e.name && e.default || e, to() || e.headless) {
      var r = e.name, t = Ce(e), n = r && !t && e.init ? function() {
        this._props = [];
      } : e, i = {
        init: oi,
        render: co,
        add: ao,
        kill: Bf,
        modifier: Nf,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: lo,
        aliases: {},
        register: 0
      };
      if (Mn(), e !== n) {
        if (Ot[r])
          return;
        Ut(n, Ut(Vi(e, i), s)), on(n.prototype, on(i, Vi(e, s))), Ot[n.prop = r] = n, e.targetTest && (Ai.push(n), io[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin";
      }
      ga(r, n), e.register && e.register(Tt, n, yt);
    } else
      Ra.push(e);
}, ue = 255, Yn = {
  aqua: [0, ue, ue],
  lime: [0, ue, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, ue],
  navy: [0, 0, 128],
  white: [ue, ue, ue],
  olive: [128, 128, 0],
  yellow: [ue, ue, 0],
  orange: [ue, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [ue, 0, 0],
  pink: [ue, 192, 203],
  cyan: [0, ue, ue],
  transparent: [ue, ue, ue, 0]
}, us = function(e, r, t) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? r + (t - r) * e * 6 : e < 0.5 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r) * ue + 0.5 | 0;
}, za = function(e, r, t) {
  var n = e ? Tr(e) ? [e >> 16, e >> 8 & ue, e & ue] : 0 : Yn.black, i, s, o, u, f, l, h, _, c, p;
  if (!n) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Yn[e])
      n = Yn[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (i = e.charAt(1), s = e.charAt(2), o = e.charAt(3), e = "#" + i + i + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return n = parseInt(e.substr(1, 6), 16), [n >> 16, n >> 8 & ue, n & ue, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), n = [e >> 16, e >> 8 & ue, e & ue];
    } else if (e.substr(0, 3) === "hsl") {
      if (n = p = e.match(Cs), !r)
        u = +n[0] % 360 / 360, f = +n[1] / 100, l = +n[2] / 100, s = l <= 0.5 ? l * (f + 1) : l + f - l * f, i = l * 2 - s, n.length > 3 && (n[3] *= 1), n[0] = us(u + 1 / 3, i, s), n[1] = us(u, i, s), n[2] = us(u - 1 / 3, i, s);
      else if (~e.indexOf("="))
        return n = e.match(ca), t && n.length < 4 && (n[3] = 1), n;
    } else
      n = e.match(Cs) || Yn.transparent;
    n = n.map(Number);
  }
  return r && !p && (i = n[0] / ue, s = n[1] / ue, o = n[2] / ue, h = Math.max(i, s, o), _ = Math.min(i, s, o), l = (h + _) / 2, h === _ ? u = f = 0 : (c = h - _, f = l > 0.5 ? c / (2 - h - _) : c / (h + _), u = h === i ? (s - o) / c + (s < o ? 6 : 0) : h === s ? (o - i) / c + 2 : (i - s) / c + 4, u *= 60), n[0] = ~~(u + 0.5), n[1] = ~~(f * 100 + 0.5), n[2] = ~~(l * 100 + 0.5)), t && n.length < 4 && (n[3] = 1), n;
}, Ia = function(e) {
  var r = [], t = [], n = -1;
  return e.split(zr).forEach(function(i) {
    var s = i.match(vn) || [];
    r.push.apply(r, s), t.push(n += s.length + 1);
  }), r.c = t, r;
}, Do = function(e, r, t) {
  var n = "", i = (e + n).match(zr), s = r ? "hsla(" : "rgba(", o = 0, u, f, l, h;
  if (!i)
    return e;
  if (i = i.map(function(_) {
    return (_ = za(_, r, 1)) && s + (r ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
  }), t && (l = Ia(e), u = t.c, u.join(n) !== l.c.join(n)))
    for (f = e.replace(zr, "1").split(vn), h = f.length - 1; o < h; o++)
      n += f[o] + (~u.indexOf(o) ? i.shift() || s + "0,0,0,0)" : (l.length ? l : i.length ? i : t).shift());
  if (!f)
    for (f = e.split(zr), h = f.length - 1; o < h; o++)
      n += f[o] + i[o];
  return n + f[h];
}, zr = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Yn)
    a += "|" + e + "\\b";
  return new RegExp(a + ")", "gi");
}(), Sf = /hsl[a]?\(/, La = function(e) {
  var r = e.join(" "), t;
  if (zr.lastIndex = 0, zr.test(r))
    return t = Sf.test(r), e[1] = Do(e[1], t), e[0] = Do(e[0], t, Ia(e[1])), !0;
}, ui, Mt = function() {
  var a = Date.now, e = 500, r = 33, t = a(), n = t, i = 1e3 / 240, s = i, o = [], u, f, l, h, _, c, p = function d(x) {
    var k = a() - n, S = x === !0, P, w, C, O;
    if ((k > e || k < 0) && (t += k - r), n += k, C = n - t, P = C - s, (P > 0 || S) && (O = ++h.frame, _ = C - h.time * 1e3, h.time = C = C / 1e3, s += P + (P >= i ? 4 : i - P), w = 1), S || (u = f(d)), w)
      for (c = 0; c < o.length; c++)
        o[c](C, _, O, x);
  };
  return h = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(x) {
      return _ / (1e3 / (x || 60));
    },
    wake: function() {
      _a && (!Es && to() && (ir = Es = window, ro = ir.document || {}, Ft.gsap = Tt, (ir.gsapVersions || (ir.gsapVersions = [])).push(Tt.version), pa(Xi || ir.GreenSockGlobals || !ir.gsap && ir || {}), Ra.forEach(Fa)), l = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && h.sleep(), f = l || function(x) {
        return setTimeout(x, s - h.time * 1e3 + 1 | 0);
      }, ui = 1, p(2));
    },
    sleep: function() {
      (l ? cancelAnimationFrame : clearTimeout)(u), ui = 0, f = oi;
    },
    lagSmoothing: function(x, k) {
      e = x || 1 / 0, r = Math.min(k || 33, e);
    },
    fps: function(x) {
      i = 1e3 / (x || 240), s = h.time * 1e3 + i;
    },
    add: function(x, k, S) {
      var P = k ? function(w, C, O, g) {
        x(w, C, O, g), h.remove(P);
      } : x;
      return h.remove(x), o[S ? "unshift" : "push"](P), Mn(), P;
    },
    remove: function(x, k) {
      ~(k = o.indexOf(x)) && o.splice(k, 1) && c >= k && c--;
    },
    _listeners: o
  }, h;
}(), Mn = function() {
  return !ui && Mt.wake();
}, ee = {}, kf = /^[\d.\-M][\d.\-,\s]/, Cf = /["']/g, Ef = function(e) {
  for (var r = {}, t = e.substr(1, e.length - 3).split(":"), n = t[0], i = 1, s = t.length, o, u, f; i < s; i++)
    u = t[i], o = i !== s - 1 ? u.lastIndexOf(",") : u.length, f = u.substr(0, o), r[n] = isNaN(f) ? f.replace(Cf, "").trim() : +f, n = u.substr(o + 1).trim();
  return r;
}, Pf = function(e) {
  var r = e.indexOf("(") + 1, t = e.indexOf(")"), n = e.indexOf("(", r);
  return e.substring(r, ~n && n < t ? e.indexOf(")", t + 1) : t);
}, Of = function(e) {
  var r = (e + "").split("("), t = ee[r[0]];
  return t && r.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [Ef(r[1])] : Pf(e).split(",").map(xa)) : ee._CE && kf.test(e) ? ee._CE("", e) : t;
}, Na = function(e) {
  return function(r) {
    return 1 - e(1 - r);
  };
}, Ba = function a(e, r) {
  for (var t = e._first, n; t; )
    t instanceof ct ? a(t, r) : t.vars.yoyoEase && (!t._yoyo || !t._repeat) && t._yoyo !== r && (t.timeline ? a(t.timeline, r) : (n = t._ease, t._ease = t._yEase, t._yEase = n, t._yoyo = r)), t = t._next;
}, en = function(e, r) {
  return e && (Ce(e) ? e : ee[e] || Of(e)) || r;
}, cn = function(e, r, t, n) {
  t === void 0 && (t = function(u) {
    return 1 - r(1 - u);
  }), n === void 0 && (n = function(u) {
    return u < 0.5 ? r(u * 2) / 2 : 1 - r((1 - u) * 2) / 2;
  });
  var i = {
    easeIn: r,
    easeOut: t,
    easeInOut: n
  }, s;
  return vt(e, function(o) {
    ee[o] = Ft[o] = i, ee[s = o.toLowerCase()] = t;
    for (var u in i)
      ee[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = ee[o + "." + u] = i[u];
  }), i;
}, Ya = function(e) {
  return function(r) {
    return r < 0.5 ? (1 - e(1 - r * 2)) / 2 : 0.5 + e((r - 0.5) * 2) / 2;
  };
}, fs = function a(e, r, t) {
  var n = r >= 1 ? r : 1, i = (t || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1), s = i / ks * (Math.asin(1 / n) || 0), o = function(l) {
    return l === 1 ? 1 : n * Math.pow(2, -10 * l) * rf((l - s) * i) + 1;
  }, u = e === "out" ? o : e === "in" ? function(f) {
    return 1 - o(1 - f);
  } : Ya(o);
  return i = ks / i, u.config = function(f, l) {
    return a(e, f, l);
  }, u;
}, ls = function a(e, r) {
  r === void 0 && (r = 1.70158);
  var t = function(s) {
    return s ? --s * s * ((r + 1) * s + r) + 1 : 0;
  }, n = e === "out" ? t : e === "in" ? function(i) {
    return 1 - t(1 - i);
  } : Ya(t);
  return n.config = function(i) {
    return a(e, i);
  }, n;
};
vt("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, e) {
  var r = e < 5 ? e + 1 : e;
  cn(a + ",Power" + (r - 1), e ? function(t) {
    return Math.pow(t, r);
  } : function(t) {
    return t;
  }, function(t) {
    return 1 - Math.pow(1 - t, r);
  }, function(t) {
    return t < 0.5 ? Math.pow(t * 2, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2;
  });
});
ee.Linear.easeNone = ee.none = ee.Linear.easeIn;
cn("Elastic", fs("in"), fs("out"), fs());
(function(a, e) {
  var r = 1 / e, t = 2 * r, n = 2.5 * r, i = function(o) {
    return o < r ? a * o * o : o < t ? a * Math.pow(o - 1.5 / e, 2) + 0.75 : o < n ? a * (o -= 2.25 / e) * o + 0.9375 : a * Math.pow(o - 2.625 / e, 2) + 0.984375;
  };
  cn("Bounce", function(s) {
    return 1 - i(1 - s);
  }, i);
})(7.5625, 2.75);
cn("Expo", function(a) {
  return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
cn("Circ", function(a) {
  return -(fa(1 - a * a) - 1);
});
cn("Sine", function(a) {
  return a === 1 ? 1 : -tf(a * ju) + 1;
});
cn("Back", ls("in"), ls("out"), ls());
ee.SteppedEase = ee.steps = Ft.SteppedEase = {
  config: function(e, r) {
    e === void 0 && (e = 1);
    var t = 1 / e, n = e + (r ? 0 : 1), i = r ? 1 : 0, s = 1 - he;
    return function(o) {
      return ((n * _i(0, s, o) | 0) + i) * t;
    };
  }
};
En.ease = ee["quad.out"];
vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return so += a + "," + a + "Params,";
});
var Xa = function(e, r) {
  this.id = ef++, e._gsap = this, this.target = e, this.harness = r, this.get = r ? r.get : va, this.set = r ? r.getSetter : lo;
}, fi = /* @__PURE__ */ function() {
  function a(r) {
    this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, On(this, +r.duration, 1, 1), this.data = r.data, ye && (this._ctx = ye, ye.data.push(this)), ui || Mt.wake();
  }
  var e = a.prototype;
  return e.delay = function(t) {
    return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, e.duration = function(t) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(t) {
    return arguments.length ? (this._dirty = 0, On(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(t, n) {
    if (Mn(), !arguments.length)
      return this._tTime;
    var i = this._dp;
    if (i && i.smoothChildTiming && this._ts) {
      for (ts(this, t), !i._dp || i.parent || ba(i, this); i && i.parent; )
        i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && or(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== t || !this._dur && !n || this._initted && Math.abs(this._zTime) === he || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ya(this, t, n)), this;
  }, e.time = function(t, n) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Oo(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), n) : this._time;
  }, e.totalProgress = function(t, n) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, e.progress = function(t, n) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + Oo(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(t, n) {
    var i = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (t - 1) * i, n) : this._repeat ? Pn(this._tTime, i) + 1 : 1;
  }, e.timeScale = function(t, n) {
    if (!arguments.length)
      return this._rts === -he ? 0 : this._rts;
    if (this._rts === t)
      return this;
    var i = this.parent && this._ts ? Wi(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -he ? 0 : this._rts, this.totalTime(_i(-Math.abs(this._delay), this._tDur, i), n !== !1), es(this), lf(this);
  }, e.paused = function(t) {
    return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Mn(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== he && (this._tTime -= he)))), this) : this._ps;
  }, e.startTime = function(t) {
    if (arguments.length) {
      this._start = t;
      var n = this.parent || this._dp;
      return n && (n._sort || !this.parent) && or(n, this, t - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(t) {
    return this._start + (mt(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(t) {
    var n = this.parent || this._dp;
    return n ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Wi(n.rawTime(t), this) : this._tTime : this._tTime;
  }, e.revert = function(t) {
    t === void 0 && (t = of);
    var n = et;
    return et = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)), this.data !== "nested" && t.kill !== !1 && this.kill(), et = n, this;
  }, e.globalTime = function(t) {
    for (var n = this, i = arguments.length ? t : n.rawTime(); n; )
      i = n._start + i / (Math.abs(n._ts) || 1), n = n._dp;
    return !this.parent && this._sat ? this._sat.globalTime(t) : i;
  }, e.repeat = function(t) {
    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Mo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(t) {
    if (arguments.length) {
      var n = this._time;
      return this._rDelay = t, Mo(this), n ? this.time(n) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, e.seek = function(t, n) {
    return this.totalTime(Bt(this, t), mt(n));
  }, e.restart = function(t, n) {
    return this.play().totalTime(t ? -this._delay : 0, mt(n));
  }, e.play = function(t, n) {
    return t != null && this.seek(t, n), this.reversed(!1).paused(!1);
  }, e.reverse = function(t, n) {
    return t != null && this.seek(t || this.totalDuration(), n), this.reversed(!0).paused(!1);
  }, e.pause = function(t, n) {
    return t != null && this.seek(t, n), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -he : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -he, this;
  }, e.isActive = function() {
    var t = this.parent || this._dp, n = this._start, i;
    return !!(!t || this._ts && this._initted && t.isActive() && (i = t.rawTime(!0)) >= n && i < this.endTime(!0) - he);
  }, e.eventCallback = function(t, n, i) {
    var s = this.vars;
    return arguments.length > 1 ? (n ? (s[t] = n, i && (s[t + "Params"] = i), t === "onUpdate" && (this._onUpdate = n)) : delete s[t], this) : s[t];
  }, e.then = function(t) {
    var n = this;
    return new Promise(function(i) {
      var s = Ce(t) ? t : Ta, o = function() {
        var f = n.then;
        n.then = null, Ce(s) && (s = s(n)) && (s.then || s === n) && (n.then = f), i(s), n.then = f;
      };
      n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? o() : n._prom = o;
    });
  }, e.kill = function() {
    Bn(this);
  }, a;
}();
Ut(fi.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -he,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ct = /* @__PURE__ */ function(a) {
  ua(e, a);
  function e(t, n) {
    var i;
    return t === void 0 && (t = {}), i = a.call(this, t) || this, i.labels = {}, i.smoothChildTiming = !!t.smoothChildTiming, i.autoRemoveChildren = !!t.autoRemoveChildren, i._sort = mt(t.sortChildren), we && or(t.parent || we, gr(i), n), t.reversed && i.reverse(), t.paused && i.paused(!0), t.scrollTrigger && Sa(gr(i), t.scrollTrigger), i;
  }
  var r = e.prototype;
  return r.to = function(n, i, s) {
    return qn(0, arguments, this), this;
  }, r.from = function(n, i, s) {
    return qn(1, arguments, this), this;
  }, r.fromTo = function(n, i, s, o) {
    return qn(2, arguments, this), this;
  }, r.set = function(n, i, s) {
    return i.duration = 0, i.parent = this, Hn(i).repeatDelay || (i.repeat = 0), i.immediateRender = !!i.immediateRender, new Re(n, i, Bt(this, s), 1), this;
  }, r.call = function(n, i, s) {
    return or(this, Re.delayedCall(0, n, i), s);
  }, r.staggerTo = function(n, i, s, o, u, f, l) {
    return s.duration = i, s.stagger = s.stagger || o, s.onComplete = f, s.onCompleteParams = l, s.parent = this, new Re(n, s, Bt(this, u)), this;
  }, r.staggerFrom = function(n, i, s, o, u, f, l) {
    return s.runBackwards = 1, Hn(s).immediateRender = mt(s.immediateRender), this.staggerTo(n, i, s, o, u, f, l);
  }, r.staggerFromTo = function(n, i, s, o, u, f, l, h) {
    return o.startAt = s, Hn(o).immediateRender = mt(o.immediateRender), this.staggerTo(n, i, o, u, f, l, h);
  }, r.render = function(n, i, s) {
    var o = this._time, u = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, l = n <= 0 ? 0 : $e(n), h = this._zTime < 0 != n < 0 && (this._initted || !f), _, c, p, d, x, k, S, P, w, C, O, g;
    if (this !== we && l > u && n >= 0 && (l = u), l !== this._tTime || s || h) {
      if (o !== this._time && f && (l += this._time - o, n += this._time - o), _ = l, w = this._start, P = this._ts, k = !P, h && (f || (o = this._zTime), (n || !i) && (this._zTime = n)), this._repeat) {
        if (O = this._yoyo, x = f + this._rDelay, this._repeat < -1 && n < 0)
          return this.totalTime(x * 100 + n, i, s);
        if (_ = $e(l % x), l === u ? (d = this._repeat, _ = f) : (d = ~~(l / x), d && d === l / x && (_ = f, d--), _ > f && (_ = f)), C = Pn(this._tTime, x), !o && this._tTime && C !== d && this._tTime - C * x - this._dur <= 0 && (C = d), O && d & 1 && (_ = f - _, g = 1), d !== C && !this._lock) {
          var T = O && C & 1, m = T === (O && d & 1);
          if (d < C && (T = !T), o = T ? 0 : l % f ? f : l, this._lock = 1, this.render(o || (g ? 0 : $e(d * x)), i, !f)._lock = 0, this._tTime = l, !i && this.parent && Dt(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), o && o !== this._time || k !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, u = this._tDur, m && (this._lock = 2, o = T ? f : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !k)
            return this;
          Ba(this, g);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (S = _f(this, $e(o), $e(_)), S && (l -= _ - (_ = S._start))), this._tTime = l, this._time = _, this._act = !P, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = n, o = 0), !o && _ && !i && !d && (Dt(this, "onStart"), this._tTime !== l))
        return this;
      if (_ >= o && n >= 0)
        for (c = this._first; c; ) {
          if (p = c._next, (c._act || _ >= c._start) && c._ts && S !== c) {
            if (c.parent !== this)
              return this.render(n, i, s);
            if (c.render(c._ts > 0 ? (_ - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (_ - c._start) * c._ts, i, s), _ !== this._time || !this._ts && !k) {
              S = 0, p && (l += this._zTime = -he);
              break;
            }
          }
          c = p;
        }
      else {
        c = this._last;
        for (var E = n < 0 ? n : _; c; ) {
          if (p = c._prev, (c._act || E <= c._end) && c._ts && S !== c) {
            if (c.parent !== this)
              return this.render(n, i, s);
            if (c.render(c._ts > 0 ? (E - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (E - c._start) * c._ts, i, s || et && (c._initted || c._startAt)), _ !== this._time || !this._ts && !k) {
              S = 0, p && (l += this._zTime = E ? -he : he);
              break;
            }
          }
          c = p;
        }
      }
      if (S && !i && (this.pause(), S.render(_ >= o ? 0 : -he)._zTime = _ >= o ? 1 : -1, this._ts))
        return this._start = w, es(this), this.render(n, i, s);
      this._onUpdate && !i && Dt(this, "onUpdate", !0), (l === u && this._tTime >= this.totalDuration() || !l && o) && (w === this._start || Math.abs(P) !== Math.abs(this._ts)) && (this._lock || ((n || !f) && (l === u && this._ts > 0 || !l && this._ts < 0) && Lr(this, 1), !i && !(n < 0 && !o) && (l || o || !u) && (Dt(this, l === u && n >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, r.add = function(n, i) {
    var s = this;
    if (Tr(i) || (i = Bt(this, i, n)), !(n instanceof fi)) {
      if (tt(n))
        return n.forEach(function(o) {
          return s.add(o, i);
        }), this;
      if (Ve(n))
        return this.addLabel(n, i);
      if (Ce(n))
        n = Re.delayedCall(0, n);
      else
        return this;
    }
    return this !== n ? or(this, n, i) : this;
  }, r.getChildren = function(n, i, s, o) {
    n === void 0 && (n = !0), i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = -$t);
    for (var u = [], f = this._first; f; )
      f._start >= o && (f instanceof Re ? i && u.push(f) : (s && u.push(f), n && u.push.apply(u, f.getChildren(!0, i, s)))), f = f._next;
    return u;
  }, r.getById = function(n) {
    for (var i = this.getChildren(1, 1, 1), s = i.length; s--; )
      if (i[s].vars.id === n)
        return i[s];
  }, r.remove = function(n) {
    return Ve(n) ? this.removeLabel(n) : Ce(n) ? this.killTweensOf(n) : (ji(this, n), n === this._recent && (this._recent = this._last), jr(this));
  }, r.totalTime = function(n, i) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = $e(Mt.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))), a.prototype.totalTime.call(this, n, i), this._forcing = 0, this) : this._tTime;
  }, r.addLabel = function(n, i) {
    return this.labels[n] = Bt(this, i), this;
  }, r.removeLabel = function(n) {
    return delete this.labels[n], this;
  }, r.addPause = function(n, i, s) {
    var o = Re.delayedCall(0, i || oi, s);
    return o.data = "isPause", this._hasPause = 1, or(this, o, Bt(this, n));
  }, r.removePause = function(n) {
    var i = this._first;
    for (n = Bt(this, n); i; )
      i._start === n && i.data === "isPause" && Lr(i), i = i._next;
  }, r.killTweensOf = function(n, i, s) {
    for (var o = this.getTweensOf(n, s), u = o.length; u--; )
      Or !== o[u] && o[u].kill(n, i);
    return this;
  }, r.getTweensOf = function(n, i) {
    for (var s = [], o = Vt(n), u = this._first, f = Tr(i), l; u; )
      u instanceof Re ? af(u._targets, o) && (f ? (!Or || u._initted && u._ts) && u.globalTime(0) <= i && u.globalTime(u.totalDuration()) > i : !i || u.isActive()) && s.push(u) : (l = u.getTweensOf(o, i)).length && s.push.apply(s, l), u = u._next;
    return s;
  }, r.tweenTo = function(n, i) {
    i = i || {};
    var s = this, o = Bt(s, n), u = i, f = u.startAt, l = u.onStart, h = u.onStartParams, _ = u.immediateRender, c, p = Re.to(s, Ut({
      ease: i.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: i.duration || Math.abs((o - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || he,
      onStart: function() {
        if (s.pause(), !c) {
          var x = i.duration || Math.abs((o - (f && "time" in f ? f.time : s._time)) / s.timeScale());
          p._dur !== x && On(p, x, 0, 1).render(p._time, !0, !0), c = 1;
        }
        l && l.apply(p, h || []);
      }
    }, i));
    return _ ? p.render(0) : p;
  }, r.tweenFromTo = function(n, i, s) {
    return this.tweenTo(i, Ut({
      startAt: {
        time: Bt(this, n)
      }
    }, s));
  }, r.recent = function() {
    return this._recent;
  }, r.nextLabel = function(n) {
    return n === void 0 && (n = this._time), Ao(this, Bt(this, n));
  }, r.previousLabel = function(n) {
    return n === void 0 && (n = this._time), Ao(this, Bt(this, n), 1);
  }, r.currentLabel = function(n) {
    return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + he);
  }, r.shiftChildren = function(n, i, s) {
    s === void 0 && (s = 0);
    for (var o = this._first, u = this.labels, f; o; )
      o._start >= s && (o._start += n, o._end += n), o = o._next;
    if (i)
      for (f in u)
        u[f] >= s && (u[f] += n);
    return jr(this);
  }, r.invalidate = function(n) {
    var i = this._first;
    for (this._lock = 0; i; )
      i.invalidate(n), i = i._next;
    return a.prototype.invalidate.call(this, n);
  }, r.clear = function(n) {
    n === void 0 && (n = !0);
    for (var i = this._first, s; i; )
      s = i._next, this.remove(i), i = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), n && (this.labels = {}), jr(this);
  }, r.totalDuration = function(n) {
    var i = 0, s = this, o = s._last, u = $t, f, l, h;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -n : n));
    if (s._dirty) {
      for (h = s.parent; o; )
        f = o._prev, o._dirty && o.totalDuration(), l = o._start, l > u && s._sort && o._ts && !s._lock ? (s._lock = 1, or(s, o, l - o._delay, 1)._lock = 0) : u = l, l < 0 && o._ts && (i -= l, (!h && !s._dp || h && h.smoothChildTiming) && (s._start += l / s._ts, s._time -= l, s._tTime -= l), s.shiftChildren(-l, !1, -1 / 0), u = 0), o._end > i && o._ts && (i = o._end), o = f;
      On(s, s === we && s._time > i ? s._time : i, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, e.updateRoot = function(n) {
    if (we._ts && (ya(we, Wi(n, we)), ma = Mt.frame), Mt.frame >= Eo) {
      Eo += Rt.autoSleep || 120;
      var i = we._first;
      if ((!i || !i._ts) && Rt.autoSleep && Mt._listeners.length < 2) {
        for (; i && !i._ts; )
          i = i._next;
        i || Mt.sleep();
      }
    }
  }, e;
}(fi);
Ut(ct.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var Mf = function(e, r, t, n, i, s, o) {
  var u = new yt(this._pt, e, r, 0, 1, Ha, null, i), f = 0, l = 0, h, _, c, p, d, x, k, S;
  for (u.b = t, u.e = n, t += "", n += "", (k = ~n.indexOf("random(")) && (n = ai(n)), s && (S = [t, n], s(S, e, r), t = S[0], n = S[1]), _ = t.match(os) || []; h = os.exec(n); )
    p = h[0], d = n.substring(f, h.index), c ? c = (c + 1) % 5 : d.substr(-5) === "rgba(" && (c = 1), p !== _[l++] && (x = parseFloat(_[l - 1]) || 0, u._pt = {
      _next: u._pt,
      p: d || l === 1 ? d : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: x,
      c: p.charAt(1) === "=" ? Tn(x, p) - x : parseFloat(p) - x,
      m: c && c < 4 ? Math.round : 0
    }, f = os.lastIndex);
  return u.c = f < n.length ? n.substring(f, n.length) : "", u.fp = o, (ha.test(n) || k) && (u.e = 0), this._pt = u, u;
}, ao = function(e, r, t, n, i, s, o, u, f, l) {
  Ce(n) && (n = n(i || 0, e, s));
  var h = e[r], _ = t !== "get" ? t : Ce(h) ? f ? e[r.indexOf("set") || !Ce(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](f) : e[r]() : h, c = Ce(h) ? f ? zf : Ua : fo, p;
  if (Ve(n) && (~n.indexOf("random(") && (n = ai(n)), n.charAt(1) === "=" && (p = Tn(_, n) + (je(_) || 0), (p || p === 0) && (n = p))), !l || _ !== n || Fs)
    return !isNaN(_ * n) && n !== "" ? (p = new yt(this._pt, e, r, +_ || 0, n - (_ || 0), typeof h == "boolean" ? Lf : Ga, 0, c), f && (p.fp = f), o && p.modifier(o, this, e), this._pt = p) : (!h && !(r in e) && no(r, n), Mf.call(this, e, r, _, n, c, u || Rt.stringFilter, f));
}, Af = function(e, r, t, n, i) {
  if (Ce(e) && (e = Kn(e, i, r, t, n)), !cr(e) || e.style && e.nodeType || tt(e) || la(e))
    return Ve(e) ? Kn(e, i, r, t, n) : e;
  var s = {}, o;
  for (o in e)
    s[o] = Kn(e[o], i, r, t, n);
  return s;
}, $a = function(e, r, t, n, i, s) {
  var o, u, f, l;
  if (Ot[e] && (o = new Ot[e]()).init(i, o.rawVars ? r[e] : Af(r[e], n, i, s, t), t, n, s) !== !1 && (t._pt = u = new yt(t._pt, i, e, 0, 1, o.render, o, 0, o.priority), t !== yn))
    for (f = t._ptLookup[t._targets.indexOf(i)], l = o._props.length; l--; )
      f[o._props[l]] = u;
  return o;
}, Or, Fs, uo = function a(e, r, t) {
  var n = e.vars, i = n.ease, s = n.startAt, o = n.immediateRender, u = n.lazy, f = n.onUpdate, l = n.runBackwards, h = n.yoyoEase, _ = n.keyframes, c = n.autoRevert, p = e._dur, d = e._startAt, x = e._targets, k = e.parent, S = k && k.data === "nested" ? k.vars.targets : x, P = e._overwrite === "auto" && !js, w = e.timeline, C, O, g, T, m, E, I, M, B, V, X, z, Y;
  if (w && (!_ || !i) && (i = "none"), e._ease = en(i, En.ease), e._yEase = h ? Na(en(h === !0 ? i : h, En.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !w && !!n.runBackwards, !w || _ && !n.stagger) {
    if (M = x[0] ? Jr(x[0]).harness : 0, z = M && n[M.prop], C = Vi(n, io), d && (d._zTime < 0 && d.progress(1), r < 0 && l && o && !c ? d.render(-1, !0) : d.revert(l && p ? Mi : sf), d._lazy = 0), s) {
      if (Lr(e._startAt = Re.set(x, Ut({
        data: "isStart",
        overwrite: !1,
        parent: k,
        immediateRender: !0,
        lazy: !d && mt(u),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return Dt(e, "onUpdate");
        },
        stagger: 0
      }, s))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (et || !o && !c) && e._startAt.revert(Mi), o && p && r <= 0 && t <= 0) {
        r && (e._zTime = r);
        return;
      }
    } else if (l && p && !d) {
      if (r && (o = !1), g = Ut({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !d && mt(u),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: k
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, C), z && (g[M.prop] = z), Lr(e._startAt = Re.set(x, g)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (et ? e._startAt.revert(Mi) : e._startAt.render(-1, !0)), e._zTime = r, !o)
        a(e._startAt, he, he);
      else if (!r)
        return;
    }
    for (e._pt = e._ptCache = 0, u = p && mt(u) || u && !p, O = 0; O < x.length; O++) {
      if (m = x[O], I = m._gsap || oo(x)[O]._gsap, e._ptLookup[O] = V = {}, Ps[I.id] && Fr.length && $i(), X = S === x ? O : S.indexOf(m), M && (B = new M()).init(m, z || C, e, X, S) !== !1 && (e._pt = T = new yt(e._pt, m, B.name, 0, 1, B.render, B, 0, B.priority), B._props.forEach(function(J) {
        V[J] = T;
      }), B.priority && (E = 1)), !M || z)
        for (g in C)
          Ot[g] && (B = $a(g, C, e, X, m, S)) ? B.priority && (E = 1) : V[g] = T = ao.call(e, m, g, "get", C[g], X, S, 0, n.stringFilter);
      e._op && e._op[O] && e.kill(m, e._op[O]), P && e._pt && (Or = e, we.killTweensOf(m, V, e.globalTime(r)), Y = !e.parent, Or = 0), e._pt && u && (Ps[I.id] = 1);
    }
    E && qa(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = f, e._initted = (!e._op || e._pt) && !Y, _ && r <= 0 && w.render($t, !0, !0);
}, Df = function(e, r, t, n, i, s, o, u) {
  var f = (e._pt && e._ptCache || (e._ptCache = {}))[r], l, h, _, c;
  if (!f)
    for (f = e._ptCache[r] = [], _ = e._ptLookup, c = e._targets.length; c--; ) {
      if (l = _[c][r], l && l.d && l.d._pt)
        for (l = l.d._pt; l && l.p !== r && l.fp !== r; )
          l = l._next;
      if (!l)
        return Fs = 1, e.vars[r] = "+=0", uo(e, o), Fs = 0, u ? si(r + " not eligible for reset") : 1;
      f.push(l);
    }
  for (c = f.length; c--; )
    h = f[c], l = h._pt || h, l.s = (n || n === 0) && !i ? n : l.s + (n || 0) + s * l.c, l.c = t - l.s, h.e && (h.e = Ee(t) + je(h.e)), h.b && (h.b = l.s + je(h.b));
}, Rf = function(e, r) {
  var t = e[0] ? Jr(e[0]).harness : 0, n = t && t.aliases, i, s, o, u;
  if (!n)
    return r;
  i = on({}, r);
  for (s in n)
    if (s in i)
      for (u = n[s].split(","), o = u.length; o--; )
        i[u[o]] = i[s];
  return i;
}, Ff = function(e, r, t, n) {
  var i = r.ease || n || "power1.inOut", s, o;
  if (tt(r))
    o = t[e] || (t[e] = []), r.forEach(function(u, f) {
      return o.push({
        t: f / (r.length - 1) * 100,
        v: u,
        e: i
      });
    });
  else
    for (s in r)
      o = t[s] || (t[s] = []), s === "ease" || o.push({
        t: parseFloat(e),
        v: r[s],
        e: i
      });
}, Kn = function(e, r, t, n, i) {
  return Ce(e) ? e.call(r, t, n, i) : Ve(e) && ~e.indexOf("random(") ? ai(e) : e;
}, Va = so + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Wa = {};
vt(Va + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return Wa[a] = 1;
});
var Re = /* @__PURE__ */ function(a) {
  ua(e, a);
  function e(t, n, i, s) {
    var o;
    typeof n == "number" && (i.duration = n, n = i, i = null), o = a.call(this, s ? n : Hn(n)) || this;
    var u = o.vars, f = u.duration, l = u.delay, h = u.immediateRender, _ = u.stagger, c = u.overwrite, p = u.keyframes, d = u.defaults, x = u.scrollTrigger, k = u.yoyoEase, S = n.parent || we, P = (tt(t) || la(t) ? Tr(t[0]) : "length" in n) ? [t] : Vt(t), w, C, O, g, T, m, E, I;
    if (o._targets = P.length ? oo(P) : si("GSAP target " + t + " not found. https://gsap.com", !Rt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = c, p || _ || mi(f) || mi(l)) {
      if (n = o.vars, w = o.timeline = new ct({
        data: "nested",
        defaults: d || {},
        targets: S && S.data === "nested" ? S.vars.targets : P
      }), w.kill(), w.parent = w._dp = gr(o), w._start = 0, _ || mi(f) || mi(l)) {
        if (g = P.length, E = _ && Pa(_), cr(_))
          for (T in _)
            ~Va.indexOf(T) && (I || (I = {}), I[T] = _[T]);
        for (C = 0; C < g; C++)
          O = Vi(n, Wa), O.stagger = 0, k && (O.yoyoEase = k), I && on(O, I), m = P[C], O.duration = +Kn(f, gr(o), C, m, P), O.delay = (+Kn(l, gr(o), C, m, P) || 0) - o._delay, !_ && g === 1 && O.delay && (o._delay = l = O.delay, o._start += l, O.delay = 0), w.to(m, O, E ? E(C, m, P) : 0), w._ease = ee.none;
        w.duration() ? f = l = 0 : o.timeline = 0;
      } else if (p) {
        Hn(Ut(w.vars.defaults, {
          ease: "none"
        })), w._ease = en(p.ease || n.ease || "none");
        var M = 0, B, V, X;
        if (tt(p))
          p.forEach(function(z) {
            return w.to(P, z, ">");
          }), w.duration();
        else {
          O = {};
          for (T in p)
            T === "ease" || T === "easeEach" || Ff(T, p[T], O, p.easeEach);
          for (T in O)
            for (B = O[T].sort(function(z, Y) {
              return z.t - Y.t;
            }), M = 0, C = 0; C < B.length; C++)
              V = B[C], X = {
                ease: V.e,
                duration: (V.t - (C ? B[C - 1].t : 0)) / 100 * f
              }, X[T] = V.v, w.to(P, X, M), M += X.duration;
          w.duration() < f && w.to({}, {
            duration: f - w.duration()
          });
        }
      }
      f || o.duration(f = w.duration());
    } else
      o.timeline = 0;
    return c === !0 && !js && (Or = gr(o), we.killTweensOf(P), Or = 0), or(S, gr(o), i), n.reversed && o.reverse(), n.paused && o.paused(!0), (h || !f && !p && o._start === $e(S._time) && mt(h) && cf(gr(o)) && S.data !== "nested") && (o._tTime = -he, o.render(Math.max(0, -l) || 0)), x && Sa(gr(o), x), o;
  }
  var r = e.prototype;
  return r.render = function(n, i, s) {
    var o = this._time, u = this._tDur, f = this._dur, l = n < 0, h = n > u - he && !l ? u : n < he ? 0 : n, _, c, p, d, x, k, S, P, w;
    if (!f)
      df(this, n, i, s);
    else if (h !== this._tTime || !n || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== l) {
      if (_ = h, P = this.timeline, this._repeat) {
        if (d = f + this._rDelay, this._repeat < -1 && l)
          return this.totalTime(d * 100 + n, i, s);
        if (_ = $e(h % d), h === u ? (p = this._repeat, _ = f) : (p = ~~(h / d), p && p === $e(h / d) && (_ = f, p--), _ > f && (_ = f)), k = this._yoyo && p & 1, k && (w = this._yEase, _ = f - _), x = Pn(this._tTime, d), _ === o && !s && this._initted && p === x)
          return this._tTime = h, this;
        p !== x && (P && this._yEase && Ba(P, k), this.vars.repeatRefresh && !k && !this._lock && this._time !== d && this._initted && (this._lock = s = 1, this.render($e(d * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (ka(this, l ? n : _, s, i, h))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && p !== x))
          return this;
        if (f !== this._dur)
          return this.render(n, i, s);
      }
      if (this._tTime = h, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = S = (w || this._ease)(_ / f), this._from && (this.ratio = S = 1 - S), _ && !o && !i && !p && (Dt(this, "onStart"), this._tTime !== h))
        return this;
      for (c = this._pt; c; )
        c.r(S, c.d), c = c._next;
      P && P.render(n < 0 ? n : P._dur * P._ease(_ / this._dur), i, s) || this._startAt && (this._zTime = n), this._onUpdate && !i && (l && Os(this, n, i, s), Dt(this, "onUpdate")), this._repeat && p !== x && this.vars.onRepeat && !i && this.parent && Dt(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (l && !this._onUpdate && Os(this, n, !0, !0), (n || !f) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Lr(this, 1), !i && !(l && !o) && (h || o || k) && (Dt(this, h === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, r.targets = function() {
    return this._targets;
  }, r.invalidate = function(n) {
    return (!n || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(n), a.prototype.invalidate.call(this, n);
  }, r.resetTo = function(n, i, s, o, u) {
    ui || Mt.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
    return this._initted || uo(this, f), l = this._ease(f / this._dur), Df(this, n, i, s, o, l, f, u) ? this.resetTo(n, i, s, o, 1) : (ts(this, 0), this.parent || wa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, r.kill = function(n, i) {
    if (i === void 0 && (i = "all"), !n && (!i || i === "all"))
      return this._lazy = this._pt = 0, this.parent ? Bn(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(n, i, Or && Or.vars.overwrite !== !0)._first || Bn(this), this.parent && s !== this.timeline.totalDuration() && On(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, u = n ? Vt(n) : o, f = this._ptLookup, l = this._pt, h, _, c, p, d, x, k;
    if ((!i || i === "all") && ff(o, u))
      return i === "all" && (this._pt = 0), Bn(this);
    for (h = this._op = this._op || [], i !== "all" && (Ve(i) && (d = {}, vt(i, function(S) {
      return d[S] = 1;
    }), i = d), i = Rf(o, i)), k = o.length; k--; )
      if (~u.indexOf(o[k])) {
        _ = f[k], i === "all" ? (h[k] = i, p = _, c = {}) : (c = h[k] = h[k] || {}, p = i);
        for (d in p)
          x = _ && _[d], x && ((!("kill" in x.d) || x.d.kill(d) === !0) && ji(this, x, "_pt"), delete _[d]), c !== "all" && (c[d] = 1);
      }
    return this._initted && !this._pt && l && Bn(this), this;
  }, e.to = function(n, i) {
    return new e(n, i, arguments[2]);
  }, e.from = function(n, i) {
    return qn(1, arguments);
  }, e.delayedCall = function(n, i, s, o) {
    return new e(i, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: n,
      onComplete: i,
      onReverseComplete: i,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: o
    });
  }, e.fromTo = function(n, i, s) {
    return qn(2, arguments);
  }, e.set = function(n, i) {
    return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(n, i);
  }, e.killTweensOf = function(n, i, s) {
    return we.killTweensOf(n, i, s);
  }, e;
}(fi);
Ut(Re.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
vt("staggerTo,staggerFrom,staggerFromTo", function(a) {
  Re[a] = function() {
    var e = new ct(), r = As.call(arguments, 0);
    return r.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), e[a].apply(e, r);
  };
});
var fo = function(e, r, t) {
  return e[r] = t;
}, Ua = function(e, r, t) {
  return e[r](t);
}, zf = function(e, r, t, n) {
  return e[r](n.fp, t);
}, If = function(e, r, t) {
  return e.setAttribute(r, t);
}, lo = function(e, r) {
  return Ce(e[r]) ? Ua : eo(e[r]) && e.setAttribute ? If : fo;
}, Ga = function(e, r) {
  return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r);
}, Lf = function(e, r) {
  return r.set(r.t, r.p, !!(r.s + r.c * e), r);
}, Ha = function(e, r) {
  var t = r._pt, n = "";
  if (!e && r.b)
    n = r.b;
  else if (e === 1 && r.e)
    n = r.e;
  else {
    for (; t; )
      n = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + n, t = t._next;
    n += r.c;
  }
  r.set(r.t, r.p, n, r);
}, co = function(e, r) {
  for (var t = r._pt; t; )
    t.r(e, t.d), t = t._next;
}, Nf = function(e, r, t, n) {
  for (var i = this._pt, s; i; )
    s = i._next, i.p === n && i.modifier(e, r, t), i = s;
}, Bf = function(e) {
  for (var r = this._pt, t, n; r; )
    n = r._next, r.p === e && !r.op || r.op === e ? ji(this, r, "_pt") : r.dep || (t = 1), r = n;
  return !t;
}, Yf = function(e, r, t, n) {
  n.mSet(e, r, n.m.call(n.tween, t, n.mt), n);
}, qa = function(e) {
  for (var r = e._pt, t, n, i, s; r; ) {
    for (t = r._next, n = i; n && n.pr > r.pr; )
      n = n._next;
    (r._prev = n ? n._prev : s) ? r._prev._next = r : i = r, (r._next = n) ? n._prev = r : s = r, r = t;
  }
  e._pt = i;
}, yt = /* @__PURE__ */ function() {
  function a(r, t, n, i, s, o, u, f, l) {
    this.t = t, this.s = i, this.c = s, this.p = n, this.r = o || Ga, this.d = u || this, this.set = f || fo, this.pr = l || 0, this._next = r, r && (r._prev = this);
  }
  var e = a.prototype;
  return e.modifier = function(t, n, i) {
    this.mSet = this.mSet || this.set, this.set = Yf, this.m = t, this.mt = i, this.tween = n;
  }, a;
}();
vt(so + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
  return io[a] = 1;
});
Ft.TweenMax = Ft.TweenLite = Re;
Ft.TimelineLite = Ft.TimelineMax = ct;
we = new ct({
  sortChildren: !1,
  defaults: En,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Rt.stringFilter = La;
var tn = [], Di = {}, Xf = [], Ro = 0, $f = 0, cs = function(e) {
  return (Di[e] || Xf).map(function(r) {
    return r();
  });
}, zs = function() {
  var e = Date.now(), r = [];
  e - Ro > 2 && (cs("matchMediaInit"), tn.forEach(function(t) {
    var n = t.queries, i = t.conditions, s, o, u, f;
    for (o in n)
      s = ir.matchMedia(n[o]).matches, s && (u = 1), s !== i[o] && (i[o] = s, f = 1);
    f && (t.revert(), u && r.push(t));
  }), cs("matchMediaRevert"), r.forEach(function(t) {
    return t.onMatch(t, function(n) {
      return t.add(null, n);
    });
  }), Ro = e, cs("matchMedia"));
}, Ka = /* @__PURE__ */ function() {
  function a(r, t) {
    this.selector = t && Ds(t), this.data = [], this._r = [], this.isReverted = !1, this.id = $f++, r && this.add(r);
  }
  var e = a.prototype;
  return e.add = function(t, n, i) {
    Ce(t) && (i = n, n = t, t = Ce);
    var s = this, o = function() {
      var f = ye, l = s.selector, h;
      return f && f !== s && f.data.push(s), i && (s.selector = Ds(i)), ye = s, h = n.apply(s, arguments), Ce(h) && s._r.push(h), ye = f, s.selector = l, s.isReverted = !1, h;
    };
    return s.last = o, t === Ce ? o(s, function(u) {
      return s.add(null, u);
    }) : t ? s[t] = o : o;
  }, e.ignore = function(t) {
    var n = ye;
    ye = null, t(this), ye = n;
  }, e.getTweens = function() {
    var t = [];
    return this.data.forEach(function(n) {
      return n instanceof a ? t.push.apply(t, n.getTweens()) : n instanceof Re && !(n.parent && n.parent.data === "nested") && t.push(n);
    }), t;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(t, n) {
    var i = this;
    if (t ? function() {
      for (var o = i.getTweens(), u = i.data.length, f; u--; )
        f = i.data[u], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(l) {
          return o.splice(o.indexOf(l), 1);
        }));
      for (o.map(function(l) {
        return {
          g: l._dur || l._delay || l._sat && !l._sat.vars.immediateRender ? l.globalTime(0) : -1 / 0,
          t: l
        };
      }).sort(function(l, h) {
        return h.g - l.g || -1 / 0;
      }).forEach(function(l) {
        return l.t.revert(t);
      }), u = i.data.length; u--; )
        f = i.data[u], f instanceof ct ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof Re) && f.revert && f.revert(t);
      i._r.forEach(function(l) {
        return l(t, i);
      }), i.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), n)
      for (var s = tn.length; s--; )
        tn[s].id === this.id && tn.splice(s, 1);
  }, e.revert = function(t) {
    this.kill(t || {});
  }, a;
}(), Vf = /* @__PURE__ */ function() {
  function a(r) {
    this.contexts = [], this.scope = r, ye && ye.data.push(this);
  }
  var e = a.prototype;
  return e.add = function(t, n, i) {
    cr(t) || (t = {
      matches: t
    });
    var s = new Ka(0, i || this.scope), o = s.conditions = {}, u, f, l;
    ye && !s.selector && (s.selector = ye.selector), this.contexts.push(s), n = s.add("onMatch", n), s.queries = t;
    for (f in t)
      f === "all" ? l = 1 : (u = ir.matchMedia(t[f]), u && (tn.indexOf(s) < 0 && tn.push(s), (o[f] = u.matches) && (l = 1), u.addListener ? u.addListener(zs) : u.addEventListener("change", zs)));
    return l && n(s, function(h) {
      return s.add(null, h);
    }), this;
  }, e.revert = function(t) {
    this.kill(t || {});
  }, e.kill = function(t) {
    this.contexts.forEach(function(n) {
      return n.kill(t, !0);
    });
  }, a;
}(), Ui = {
  registerPlugin: function() {
    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
      r[t] = arguments[t];
    r.forEach(function(n) {
      return Fa(n);
    });
  },
  timeline: function(e) {
    return new ct(e);
  },
  getTweensOf: function(e, r) {
    return we.getTweensOf(e, r);
  },
  getProperty: function(e, r, t, n) {
    Ve(e) && (e = Vt(e)[0]);
    var i = Jr(e || {}).get, s = t ? Ta : xa;
    return t === "native" && (t = ""), e && (r ? s((Ot[r] && Ot[r].get || i)(e, r, t, n)) : function(o, u, f) {
      return s((Ot[o] && Ot[o].get || i)(e, o, u, f));
    });
  },
  quickSetter: function(e, r, t) {
    if (e = Vt(e), e.length > 1) {
      var n = e.map(function(l) {
        return Tt.quickSetter(l, r, t);
      }), i = n.length;
      return function(l) {
        for (var h = i; h--; )
          n[h](l);
      };
    }
    e = e[0] || {};
    var s = Ot[r], o = Jr(e), u = o.harness && (o.harness.aliases || {})[r] || r, f = s ? function(l) {
      var h = new s();
      yn._pt = 0, h.init(e, t ? l + t : l, yn, 0, [e]), h.render(1, h), yn._pt && co(1, yn);
    } : o.set(e, u);
    return s ? f : function(l) {
      return f(e, u, t ? l + t : l, o, 1);
    };
  },
  quickTo: function(e, r, t) {
    var n, i = Tt.to(e, on((n = {}, n[r] = "+=0.1", n.paused = !0, n), t || {})), s = function(u, f, l) {
      return i.resetTo(r, u, f, l);
    };
    return s.tween = i, s;
  },
  isTweening: function(e) {
    return we.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = en(e.ease, En.ease)), Po(En, e || {});
  },
  config: function(e) {
    return Po(Rt, e || {});
  },
  registerEffect: function(e) {
    var r = e.name, t = e.effect, n = e.plugins, i = e.defaults, s = e.extendTimeline;
    (n || "").split(",").forEach(function(o) {
      return o && !Ot[o] && !Ft[o] && si(r + " effect requires " + o + " plugin.");
    }), as[r] = function(o, u, f) {
      return t(Vt(o), Ut(u || {}, i), f);
    }, s && (ct.prototype[r] = function(o, u, f) {
      return this.add(as[r](o, cr(u) ? u : (f = u) && {}, this), f);
    });
  },
  registerEase: function(e, r) {
    ee[e] = en(r);
  },
  parseEase: function(e, r) {
    return arguments.length ? en(e, r) : ee;
  },
  getById: function(e) {
    return we.getById(e);
  },
  exportRoot: function(e, r) {
    e === void 0 && (e = {});
    var t = new ct(e), n, i;
    for (t.smoothChildTiming = mt(e.smoothChildTiming), we.remove(t), t._dp = 0, t._time = t._tTime = we._time, n = we._first; n; )
      i = n._next, (r || !(!n._dur && n instanceof Re && n.vars.onComplete === n._targets[0])) && or(t, n, n._start - n._delay), n = i;
    return or(we, t, 0), t;
  },
  context: function(e, r) {
    return e ? new Ka(e, r) : ye;
  },
  matchMedia: function(e) {
    return new Vf(e);
  },
  matchMediaRefresh: function() {
    return tn.forEach(function(e) {
      var r = e.conditions, t, n;
      for (n in r)
        r[n] && (r[n] = !1, t = 1);
      t && e.revert();
    }) || zs();
  },
  addEventListener: function(e, r) {
    var t = Di[e] || (Di[e] = []);
    ~t.indexOf(r) || t.push(r);
  },
  removeEventListener: function(e, r) {
    var t = Di[e], n = t && t.indexOf(r);
    n >= 0 && t.splice(n, 1);
  },
  utils: {
    wrap: Tf,
    wrapYoyo: wf,
    distribute: Pa,
    random: Ma,
    snap: Oa,
    normalize: xf,
    getUnit: je,
    clamp: gf,
    splitColor: za,
    toArray: Vt,
    selector: Ds,
    mapRange: Da,
    pipe: vf,
    unitize: yf,
    interpolate: bf,
    shuffle: Ea
  },
  install: pa,
  effects: as,
  ticker: Mt,
  updateRoot: ct.updateRoot,
  plugins: Ot,
  globalTimeline: we,
  core: {
    PropTween: yt,
    globals: ga,
    Tween: Re,
    Timeline: ct,
    Animation: fi,
    getCache: Jr,
    _removeLinkedListItem: ji,
    reverting: function() {
      return et;
    },
    context: function(e) {
      return e && ye && (ye.data.push(e), e._ctx = ye), ye;
    },
    suppressOverwrites: function(e) {
      return js = e;
    }
  }
};
vt("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return Ui[a] = Re[a];
});
Mt.add(ct.updateRoot);
yn = Ui.to({}, {
  duration: 0
});
var Wf = function(e, r) {
  for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r; )
    t = t._next;
  return t;
}, Uf = function(e, r) {
  var t = e._targets, n, i, s;
  for (n in r)
    for (i = t.length; i--; )
      s = e._ptLookup[i][n], s && (s = s.d) && (s._pt && (s = Wf(s, n)), s && s.modifier && s.modifier(r[n], e, t[i], n));
}, hs = function(e, r) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(n, i, s) {
      s._onInit = function(o) {
        var u, f;
        if (Ve(i) && (u = {}, vt(i, function(l) {
          return u[l] = 1;
        }), i = u), r) {
          u = {};
          for (f in i)
            u[f] = r(i[f]);
          i = u;
        }
        Uf(o, i);
      };
    }
  };
}, Tt = Ui.registerPlugin({
  name: "attr",
  init: function(e, r, t, n, i) {
    var s, o, u;
    this.tween = t;
    for (s in r)
      u = e.getAttribute(s) || "", o = this.add(e, "setAttribute", (u || 0) + "", r[s], n, i, 0, 0, s), o.op = s, o.b = u, this._props.push(s);
  },
  render: function(e, r) {
    for (var t = r._pt; t; )
      et ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), t = t._next;
  }
}, {
  name: "endArray",
  init: function(e, r) {
    for (var t = r.length; t--; )
      this.add(e, t, e[t] || 0, r[t], 0, 0, 0, 0, 0, 1);
  }
}, hs("roundProps", Rs), hs("modifiers"), hs("snap", Oa)) || Ui;
Re.version = ct.version = Tt.version = "3.12.5";
_a = 1;
to() && Mn();
ee.Power0;
ee.Power1;
ee.Power2;
ee.Power3;
ee.Power4;
ee.Linear;
ee.Quad;
ee.Cubic;
ee.Quart;
ee.Quint;
ee.Strong;
ee.Elastic;
ee.Back;
ee.SteppedEase;
ee.Bounce;
ee.Sine;
ee.Expo;
ee.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Fo, Mr, wn, ho, Kr, zo, _o, Gf = function() {
  return typeof window < "u";
}, wr = {}, Ur = 180 / Math.PI, bn = Math.PI / 180, hn = Math.atan2, Io = 1e8, po = /([A-Z])/g, Hf = /(left|right|width|margin|padding|x)/i, qf = /[\s,\(]\S/, ar = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Is = function(e, r) {
  return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r);
}, Kf = function(e, r) {
  return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r);
}, Qf = function(e, r) {
  return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r);
}, Zf = function(e, r) {
  var t = r.s + r.c * e;
  r.set(r.t, r.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + r.u, r);
}, Qa = function(e, r) {
  return r.set(r.t, r.p, e ? r.e : r.b, r);
}, Za = function(e, r) {
  return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r);
}, Jf = function(e, r, t) {
  return e.style[r] = t;
}, jf = function(e, r, t) {
  return e.style.setProperty(r, t);
}, el = function(e, r, t) {
  return e._gsap[r] = t;
}, tl = function(e, r, t) {
  return e._gsap.scaleX = e._gsap.scaleY = t;
}, rl = function(e, r, t, n, i) {
  var s = e._gsap;
  s.scaleX = s.scaleY = t, s.renderTransform(i, s);
}, nl = function(e, r, t, n, i) {
  var s = e._gsap;
  s[r] = t, s.renderTransform(i, s);
}, be = "transform", xt = be + "Origin", il = function a(e, r) {
  var t = this, n = this.target, i = n.style, s = n._gsap;
  if (e in wr && i) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = ar[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
        return t.tfm[o] = mr(n, o);
      }) : this.tfm[e] = s.x ? s[e] : mr(n, e), e === xt && (this.tfm.zOrigin = s.zOrigin);
    else
      return ar.transform.split(",").forEach(function(o) {
        return a.call(t, o, r);
      });
    if (this.props.indexOf(be) >= 0)
      return;
    s.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(xt, r, "")), e = be;
  }
  (i || r) && this.props.push(e, r, i[e]);
}, Ja = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, sl = function() {
  var e = this.props, r = this.target, t = r.style, n = r._gsap, i, s;
  for (i = 0; i < e.length; i += 3)
    e[i + 1] ? r[e[i]] = e[i + 2] : e[i + 2] ? t[e[i]] = e[i + 2] : t.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(po, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      n[s] = this.tfm[s];
    n.svg && (n.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), i = _o(), (!i || !i.isStart) && !t[be] && (Ja(t), n.zOrigin && t[xt] && (t[xt] += " " + n.zOrigin + "px", n.zOrigin = 0, n.renderTransform()), n.uncache = 1);
  }
}, ja = function(e, r) {
  var t = {
    target: e,
    props: [],
    revert: sl,
    save: il
  };
  return e._gsap || Tt.core.getCache(e), r && r.split(",").forEach(function(n) {
    return t.save(n);
  }), t;
}, eu, Ls = function(e, r) {
  var t = Mr.createElementNS ? Mr.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Mr.createElement(e);
  return t && t.style ? t : Mr.createElement(e);
}, fr = function a(e, r, t) {
  var n = getComputedStyle(e);
  return n[r] || n.getPropertyValue(r.replace(po, "-$1").toLowerCase()) || n.getPropertyValue(r) || !t && a(e, An(r) || r, 1) || "";
}, Lo = "O,Moz,ms,Ms,Webkit".split(","), An = function(e, r, t) {
  var n = r || Kr, i = n.style, s = 5;
  if (e in i && !t)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Lo[s] + e in i); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Lo[s] : "") + e;
}, Ns = function() {
  Gf() && window.document && (Fo = window, Mr = Fo.document, wn = Mr.documentElement, Kr = Ls("div") || {
    style: {}
  }, Ls("div"), be = An(be), xt = be + "Origin", Kr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", eu = !!An("perspective"), _o = Tt.core.reverting, ho = 1);
}, ds = function a(e) {
  var r = Ls("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), t = this.parentNode, n = this.nextSibling, i = this.style.cssText, s;
  if (wn.appendChild(r), r.appendChild(this), this.style.display = "block", e)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = a;
    } catch {
    }
  else this._gsapBBox && (s = this._gsapBBox());
  return t && (n ? t.insertBefore(this, n) : t.appendChild(this)), wn.removeChild(r), this.style.cssText = i, s;
}, No = function(e, r) {
  for (var t = r.length; t--; )
    if (e.hasAttribute(r[t]))
      return e.getAttribute(r[t]);
}, tu = function(e) {
  var r;
  try {
    r = e.getBBox();
  } catch {
    r = ds.call(e, !0);
  }
  return r && (r.width || r.height) || e.getBBox === ds || (r = ds.call(e, !0)), r && !r.width && !r.x && !r.y ? {
    x: +No(e, ["x", "cx", "x1"]) || 0,
    y: +No(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : r;
}, ru = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && tu(e));
}, an = function(e, r) {
  if (r) {
    var t = e.style, n;
    r in wr && r !== xt && (r = be), t.removeProperty ? (n = r.substr(0, 2), (n === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), t.removeProperty(n === "--" ? r : r.replace(po, "-$1").toLowerCase())) : t.removeAttribute(r);
  }
}, Ar = function(e, r, t, n, i, s) {
  var o = new yt(e._pt, r, t, 0, 1, s ? Za : Qa);
  return e._pt = o, o.b = n, o.e = i, e._props.push(t), o;
}, Bo = {
  deg: 1,
  rad: 1,
  turn: 1
}, ol = {
  grid: 1,
  flex: 1
}, Nr = function a(e, r, t, n) {
  var i = parseFloat(t) || 0, s = (t + "").trim().substr((i + "").length) || "px", o = Kr.style, u = Hf.test(r), f = e.tagName.toLowerCase() === "svg", l = (f ? "client" : "offset") + (u ? "Width" : "Height"), h = 100, _ = n === "px", c = n === "%", p, d, x, k;
  if (n === s || !i || Bo[n] || Bo[s])
    return i;
  if (s !== "px" && !_ && (i = a(e, r, t, "px")), k = e.getCTM && ru(e), (c || s === "%") && (wr[r] || ~r.indexOf("adius")))
    return p = k ? e.getBBox()[u ? "width" : "height"] : e[l], Ee(c ? i / p * h : i / 100 * p);
  if (o[u ? "width" : "height"] = h + (_ ? s : n), d = ~r.indexOf("adius") || n === "em" && e.appendChild && !f ? e : e.parentNode, k && (d = (e.ownerSVGElement || {}).parentNode), (!d || d === Mr || !d.appendChild) && (d = Mr.body), x = d._gsap, x && c && x.width && u && x.time === Mt.time && !x.uncache)
    return Ee(i / x.width * h);
  if (c && (r === "height" || r === "width")) {
    var S = e.style[r];
    e.style[r] = h + n, p = e[l], S ? e.style[r] = S : an(e, r);
  } else
    (c || s === "%") && !ol[fr(d, "display")] && (o.position = fr(e, "position")), d === e && (o.position = "static"), d.appendChild(Kr), p = Kr[l], d.removeChild(Kr), o.position = "absolute";
  return u && c && (x = Jr(d), x.time = Mt.time, x.width = d[l]), Ee(_ ? p * i / h : p && i ? h / p * i : 0);
}, mr = function(e, r, t, n) {
  var i;
  return ho || Ns(), r in ar && r !== "transform" && (r = ar[r], ~r.indexOf(",") && (r = r.split(",")[0])), wr[r] && r !== "transform" ? (i = ci(e, n), i = r !== "transformOrigin" ? i[r] : i.svg ? i.origin : Hi(fr(e, xt)) + " " + i.zOrigin + "px") : (i = e.style[r], (!i || i === "auto" || n || ~(i + "").indexOf("calc(")) && (i = Gi[r] && Gi[r](e, r, t) || fr(e, r) || va(e, r) || (r === "opacity" ? 1 : 0))), t && !~(i + "").trim().indexOf(" ") ? Nr(e, r, i, t) + t : i;
}, al = function(e, r, t, n) {
  if (!t || t === "none") {
    var i = An(r, e, 1), s = i && fr(e, i, 1);
    s && s !== t ? (r = i, t = s) : r === "borderColor" && (t = fr(e, "borderTopColor"));
  }
  var o = new yt(this._pt, e.style, r, 0, 1, Ha), u = 0, f = 0, l, h, _, c, p, d, x, k, S, P, w, C;
  if (o.b = t, o.e = n, t += "", n += "", n === "auto" && (d = e.style[r], e.style[r] = n, n = fr(e, r) || n, d ? e.style[r] = d : an(e, r)), l = [t, n], La(l), t = l[0], n = l[1], _ = t.match(vn) || [], C = n.match(vn) || [], C.length) {
    for (; h = vn.exec(n); )
      x = h[0], S = n.substring(u, h.index), p ? p = (p + 1) % 5 : (S.substr(-5) === "rgba(" || S.substr(-5) === "hsla(") && (p = 1), x !== (d = _[f++] || "") && (c = parseFloat(d) || 0, w = d.substr((c + "").length), x.charAt(1) === "=" && (x = Tn(c, x) + w), k = parseFloat(x), P = x.substr((k + "").length), u = vn.lastIndex - P.length, P || (P = P || Rt.units[r] || w, u === n.length && (n += P, o.e += P)), w !== P && (c = Nr(e, r, d, P) || 0), o._pt = {
        _next: o._pt,
        p: S || f === 1 ? S : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: c,
        c: k - c,
        m: p && p < 4 || r === "zIndex" ? Math.round : 0
      });
    o.c = u < n.length ? n.substring(u, n.length) : "";
  } else
    o.r = r === "display" && n === "none" ? Za : Qa;
  return ha.test(n) && (o.e = 0), this._pt = o, o;
}, Yo = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, ul = function(e) {
  var r = e.split(" "), t = r[0], n = r[1] || "50%";
  return (t === "top" || t === "bottom" || n === "left" || n === "right") && (e = t, t = n, n = e), r[0] = Yo[t] || t, r[1] = Yo[n] || n, r.join(" ");
}, fl = function(e, r) {
  if (r.tween && r.tween._time === r.tween._dur) {
    var t = r.t, n = t.style, i = r.u, s = t._gsap, o, u, f;
    if (i === "all" || i === !0)
      n.cssText = "", u = 1;
    else
      for (i = i.split(","), f = i.length; --f > -1; )
        o = i[f], wr[o] && (u = 1, o = o === "transformOrigin" ? xt : be), an(t, o);
    u && (an(t, be), s && (s.svg && t.removeAttribute("transform"), ci(t, 1), s.uncache = 1, Ja(n)));
  }
}, Gi = {
  clearProps: function(e, r, t, n, i) {
    if (i.data !== "isFromStart") {
      var s = e._pt = new yt(e._pt, r, t, 0, 0, fl);
      return s.u = n, s.pr = -10, s.tween = i, e._props.push(t), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, li = [1, 0, 0, 1, 0, 0], nu = {}, iu = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Xo = function(e) {
  var r = fr(e, be);
  return iu(r) ? li : r.substr(7).match(ca).map(Ee);
}, go = function(e, r) {
  var t = e._gsap || Jr(e), n = e.style, i = Xo(e), s, o, u, f;
  return t.svg && e.getAttribute("transform") ? (u = e.transform.baseVal.consolidate().matrix, i = [u.a, u.b, u.c, u.d, u.e, u.f], i.join(",") === "1,0,0,1,0,0" ? li : i) : (i === li && !e.offsetParent && e !== wn && !t.svg && (u = n.display, n.display = "block", s = e.parentNode, (!s || !e.offsetParent) && (f = 1, o = e.nextElementSibling, wn.appendChild(e)), i = Xo(e), u ? n.display = u : an(e, "display"), f && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : wn.removeChild(e))), r && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
}, Bs = function(e, r, t, n, i, s) {
  var o = e._gsap, u = i || go(e, !0), f = o.xOrigin || 0, l = o.yOrigin || 0, h = o.xOffset || 0, _ = o.yOffset || 0, c = u[0], p = u[1], d = u[2], x = u[3], k = u[4], S = u[5], P = r.split(" "), w = parseFloat(P[0]) || 0, C = parseFloat(P[1]) || 0, O, g, T, m;
  t ? u !== li && (g = c * x - p * d) && (T = w * (x / g) + C * (-d / g) + (d * S - x * k) / g, m = w * (-p / g) + C * (c / g) - (c * S - p * k) / g, w = T, C = m) : (O = tu(e), w = O.x + (~P[0].indexOf("%") ? w / 100 * O.width : w), C = O.y + (~(P[1] || P[0]).indexOf("%") ? C / 100 * O.height : C)), n || n !== !1 && o.smooth ? (k = w - f, S = C - l, o.xOffset = h + (k * c + S * d) - k, o.yOffset = _ + (k * p + S * x) - S) : o.xOffset = o.yOffset = 0, o.xOrigin = w, o.yOrigin = C, o.smooth = !!n, o.origin = r, o.originIsAbsolute = !!t, e.style[xt] = "0px 0px", s && (Ar(s, o, "xOrigin", f, w), Ar(s, o, "yOrigin", l, C), Ar(s, o, "xOffset", h, o.xOffset), Ar(s, o, "yOffset", _, o.yOffset)), e.setAttribute("data-svg-origin", w + " " + C);
}, ci = function(e, r) {
  var t = e._gsap || new Xa(e);
  if ("x" in t && !r && !t.uncache)
    return t;
  var n = e.style, i = t.scaleX < 0, s = "px", o = "deg", u = getComputedStyle(e), f = fr(e, xt) || "0", l, h, _, c, p, d, x, k, S, P, w, C, O, g, T, m, E, I, M, B, V, X, z, Y, J, oe, v, ae, fe, wt, te, Oe;
  return l = h = _ = d = x = k = S = P = w = 0, c = p = 1, t.svg = !!(e.getCTM && ru(e)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (n[be] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[be] !== "none" ? u[be] : "")), n.scale = n.rotate = n.translate = "none"), g = go(e, t.svg), t.svg && (t.uncache ? (J = e.getBBox(), f = t.xOrigin - J.x + "px " + (t.yOrigin - J.y) + "px", Y = "") : Y = !r && e.getAttribute("data-svg-origin"), Bs(e, Y || f, !!Y || t.originIsAbsolute, t.smooth !== !1, g)), C = t.xOrigin || 0, O = t.yOrigin || 0, g !== li && (I = g[0], M = g[1], B = g[2], V = g[3], l = X = g[4], h = z = g[5], g.length === 6 ? (c = Math.sqrt(I * I + M * M), p = Math.sqrt(V * V + B * B), d = I || M ? hn(M, I) * Ur : 0, S = B || V ? hn(B, V) * Ur + d : 0, S && (p *= Math.abs(Math.cos(S * bn))), t.svg && (l -= C - (C * I + O * B), h -= O - (C * M + O * V))) : (Oe = g[6], wt = g[7], v = g[8], ae = g[9], fe = g[10], te = g[11], l = g[12], h = g[13], _ = g[14], T = hn(Oe, fe), x = T * Ur, T && (m = Math.cos(-T), E = Math.sin(-T), Y = X * m + v * E, J = z * m + ae * E, oe = Oe * m + fe * E, v = X * -E + v * m, ae = z * -E + ae * m, fe = Oe * -E + fe * m, te = wt * -E + te * m, X = Y, z = J, Oe = oe), T = hn(-B, fe), k = T * Ur, T && (m = Math.cos(-T), E = Math.sin(-T), Y = I * m - v * E, J = M * m - ae * E, oe = B * m - fe * E, te = V * E + te * m, I = Y, M = J, B = oe), T = hn(M, I), d = T * Ur, T && (m = Math.cos(T), E = Math.sin(T), Y = I * m + M * E, J = X * m + z * E, M = M * m - I * E, z = z * m - X * E, I = Y, X = J), x && Math.abs(x) + Math.abs(d) > 359.9 && (x = d = 0, k = 180 - k), c = Ee(Math.sqrt(I * I + M * M + B * B)), p = Ee(Math.sqrt(z * z + Oe * Oe)), T = hn(X, z), S = Math.abs(T) > 2e-4 ? T * Ur : 0, w = te ? 1 / (te < 0 ? -te : te) : 0), t.svg && (Y = e.getAttribute("transform"), t.forceCSS = e.setAttribute("transform", "") || !iu(fr(e, be)), Y && e.setAttribute("transform", Y))), Math.abs(S) > 90 && Math.abs(S) < 270 && (i ? (c *= -1, S += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (p *= -1, S += S <= 0 ? 180 : -180)), r = r || t.uncache, t.x = l - ((t.xPercent = l && (!r && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + s, t.y = h - ((t.yPercent = h && (!r && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + s, t.z = _ + s, t.scaleX = Ee(c), t.scaleY = Ee(p), t.rotation = Ee(d) + o, t.rotationX = Ee(x) + o, t.rotationY = Ee(k) + o, t.skewX = S + o, t.skewY = P + o, t.transformPerspective = w + s, (t.zOrigin = parseFloat(f.split(" ")[2]) || !r && t.zOrigin || 0) && (n[xt] = Hi(f)), t.xOffset = t.yOffset = 0, t.force3D = Rt.force3D, t.renderTransform = t.svg ? cl : eu ? su : ll, t.uncache = 0, t;
}, Hi = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, _s = function(e, r, t) {
  var n = je(r);
  return Ee(parseFloat(r) + parseFloat(Nr(e, "x", t + "px", n))) + n;
}, ll = function(e, r) {
  r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, su(e, r);
}, Vr = "0deg", In = "0px", Wr = ") ", su = function(e, r) {
  var t = r || this, n = t.xPercent, i = t.yPercent, s = t.x, o = t.y, u = t.z, f = t.rotation, l = t.rotationY, h = t.rotationX, _ = t.skewX, c = t.skewY, p = t.scaleX, d = t.scaleY, x = t.transformPerspective, k = t.force3D, S = t.target, P = t.zOrigin, w = "", C = k === "auto" && e && e !== 1 || k === !0;
  if (P && (h !== Vr || l !== Vr)) {
    var O = parseFloat(l) * bn, g = Math.sin(O), T = Math.cos(O), m;
    O = parseFloat(h) * bn, m = Math.cos(O), s = _s(S, s, g * m * -P), o = _s(S, o, -Math.sin(O) * -P), u = _s(S, u, T * m * -P + P);
  }
  x !== In && (w += "perspective(" + x + Wr), (n || i) && (w += "translate(" + n + "%, " + i + "%) "), (C || s !== In || o !== In || u !== In) && (w += u !== In || C ? "translate3d(" + s + ", " + o + ", " + u + ") " : "translate(" + s + ", " + o + Wr), f !== Vr && (w += "rotate(" + f + Wr), l !== Vr && (w += "rotateY(" + l + Wr), h !== Vr && (w += "rotateX(" + h + Wr), (_ !== Vr || c !== Vr) && (w += "skew(" + _ + ", " + c + Wr), (p !== 1 || d !== 1) && (w += "scale(" + p + ", " + d + Wr), S.style[be] = w || "translate(0, 0)";
}, cl = function(e, r) {
  var t = r || this, n = t.xPercent, i = t.yPercent, s = t.x, o = t.y, u = t.rotation, f = t.skewX, l = t.skewY, h = t.scaleX, _ = t.scaleY, c = t.target, p = t.xOrigin, d = t.yOrigin, x = t.xOffset, k = t.yOffset, S = t.forceCSS, P = parseFloat(s), w = parseFloat(o), C, O, g, T, m;
  u = parseFloat(u), f = parseFloat(f), l = parseFloat(l), l && (l = parseFloat(l), f += l, u += l), u || f ? (u *= bn, f *= bn, C = Math.cos(u) * h, O = Math.sin(u) * h, g = Math.sin(u - f) * -_, T = Math.cos(u - f) * _, f && (l *= bn, m = Math.tan(f - l), m = Math.sqrt(1 + m * m), g *= m, T *= m, l && (m = Math.tan(l), m = Math.sqrt(1 + m * m), C *= m, O *= m)), C = Ee(C), O = Ee(O), g = Ee(g), T = Ee(T)) : (C = h, T = _, O = g = 0), (P && !~(s + "").indexOf("px") || w && !~(o + "").indexOf("px")) && (P = Nr(c, "x", s, "px"), w = Nr(c, "y", o, "px")), (p || d || x || k) && (P = Ee(P + p - (p * C + d * g) + x), w = Ee(w + d - (p * O + d * T) + k)), (n || i) && (m = c.getBBox(), P = Ee(P + n / 100 * m.width), w = Ee(w + i / 100 * m.height)), m = "matrix(" + C + "," + O + "," + g + "," + T + "," + P + "," + w + ")", c.setAttribute("transform", m), S && (c.style[be] = m);
}, hl = function(e, r, t, n, i) {
  var s = 360, o = Ve(i), u = parseFloat(i) * (o && ~i.indexOf("rad") ? Ur : 1), f = u - n, l = n + f + "deg", h, _;
  return o && (h = i.split("_")[1], h === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -s)), h === "cw" && f < 0 ? f = (f + s * Io) % s - ~~(f / s) * s : h === "ccw" && f > 0 && (f = (f - s * Io) % s - ~~(f / s) * s)), e._pt = _ = new yt(e._pt, r, t, n, f, Kf), _.e = l, _.u = "deg", e._props.push(t), _;
}, $o = function(e, r) {
  for (var t in r)
    e[t] = r[t];
  return e;
}, dl = function(e, r, t) {
  var n = $o({}, t._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", s = t.style, o, u, f, l, h, _, c, p;
  n.svg ? (f = t.getAttribute("transform"), t.setAttribute("transform", ""), s[be] = r, o = ci(t, 1), an(t, be), t.setAttribute("transform", f)) : (f = getComputedStyle(t)[be], s[be] = r, o = ci(t, 1), s[be] = f);
  for (u in wr)
    f = n[u], l = o[u], f !== l && i.indexOf(u) < 0 && (c = je(f), p = je(l), h = c !== p ? Nr(t, u, f, p) : parseFloat(f), _ = parseFloat(l), e._pt = new yt(e._pt, o, u, h, _ - h, Is), e._pt.u = p || 0, e._props.push(u));
  $o(o, n);
};
vt("padding,margin,Width,Radius", function(a, e) {
  var r = "Top", t = "Right", n = "Bottom", i = "Left", s = (e < 3 ? [r, t, n, i] : [r + i, r + t, n + t, n + i]).map(function(o) {
    return e < 2 ? a + o : "border" + o + a;
  });
  Gi[e > 1 ? "border" + a : a] = function(o, u, f, l, h) {
    var _, c;
    if (arguments.length < 4)
      return _ = s.map(function(p) {
        return mr(o, p, f);
      }), c = _.join(" "), c.split(_[0]).length === 5 ? _[0] : c;
    _ = (l + "").split(" "), c = {}, s.forEach(function(p, d) {
      return c[p] = _[d] = _[d] || _[(d - 1) / 2 | 0];
    }), o.init(u, c, h);
  };
});
var ou = {
  name: "css",
  register: Ns,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, r, t, n, i) {
    var s = this._props, o = e.style, u = t.vars.startAt, f, l, h, _, c, p, d, x, k, S, P, w, C, O, g, T;
    ho || Ns(), this.styles = this.styles || ja(e), T = this.styles.props, this.tween = t;
    for (d in r)
      if (d !== "autoRound" && (l = r[d], !(Ot[d] && $a(d, r, t, n, e, i)))) {
        if (c = typeof l, p = Gi[d], c === "function" && (l = l.call(t, n, e, i), c = typeof l), c === "string" && ~l.indexOf("random(") && (l = ai(l)), p)
          p(this, e, d, l, t) && (g = 1);
        else if (d.substr(0, 2) === "--")
          f = (getComputedStyle(e).getPropertyValue(d) + "").trim(), l += "", zr.lastIndex = 0, zr.test(f) || (x = je(f), k = je(l)), k ? x !== k && (f = Nr(e, d, f, k) + k) : x && (l += x), this.add(o, "setProperty", f, l, n, i, 0, 0, d), s.push(d), T.push(d, 0, o[d]);
        else if (c !== "undefined") {
          if (u && d in u ? (f = typeof u[d] == "function" ? u[d].call(t, n, e, i) : u[d], Ve(f) && ~f.indexOf("random(") && (f = ai(f)), je(f + "") || f === "auto" || (f += Rt.units[d] || je(mr(e, d)) || ""), (f + "").charAt(1) === "=" && (f = mr(e, d))) : f = mr(e, d), _ = parseFloat(f), S = c === "string" && l.charAt(1) === "=" && l.substr(0, 2), S && (l = l.substr(2)), h = parseFloat(l), d in ar && (d === "autoAlpha" && (_ === 1 && mr(e, "visibility") === "hidden" && h && (_ = 0), T.push("visibility", 0, o.visibility), Ar(this, o, "visibility", _ ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), d !== "scale" && d !== "transform" && (d = ar[d], ~d.indexOf(",") && (d = d.split(",")[0]))), P = d in wr, P) {
            if (this.styles.save(d), w || (C = e._gsap, C.renderTransform && !r.parseTransform || ci(e, r.parseTransform), O = r.smoothOrigin !== !1 && C.smooth, w = this._pt = new yt(this._pt, o, be, 0, 1, C.renderTransform, C, 0, -1), w.dep = 1), d === "scale")
              this._pt = new yt(this._pt, C, "scaleY", C.scaleY, (S ? Tn(C.scaleY, S + h) : h) - C.scaleY || 0, Is), this._pt.u = 0, s.push("scaleY", d), d += "X";
            else if (d === "transformOrigin") {
              T.push(xt, 0, o[xt]), l = ul(l), C.svg ? Bs(e, l, 0, O, 0, this) : (k = parseFloat(l.split(" ")[2]) || 0, k !== C.zOrigin && Ar(this, C, "zOrigin", C.zOrigin, k), Ar(this, o, d, Hi(f), Hi(l)));
              continue;
            } else if (d === "svgOrigin") {
              Bs(e, l, 1, O, 0, this);
              continue;
            } else if (d in nu) {
              hl(this, C, d, _, S ? Tn(_, S + l) : l);
              continue;
            } else if (d === "smoothOrigin") {
              Ar(this, C, "smooth", C.smooth, l);
              continue;
            } else if (d === "force3D") {
              C[d] = l;
              continue;
            } else if (d === "transform") {
              dl(this, l, e);
              continue;
            }
          } else d in o || (d = An(d) || d);
          if (P || (h || h === 0) && (_ || _ === 0) && !qf.test(l) && d in o)
            x = (f + "").substr((_ + "").length), h || (h = 0), k = je(l) || (d in Rt.units ? Rt.units[d] : x), x !== k && (_ = Nr(e, d, f, k)), this._pt = new yt(this._pt, P ? C : o, d, _, (S ? Tn(_, S + h) : h) - _, !P && (k === "px" || d === "zIndex") && r.autoRound !== !1 ? Zf : Is), this._pt.u = k || 0, x !== k && k !== "%" && (this._pt.b = f, this._pt.r = Qf);
          else if (d in o)
            al.call(this, e, d, f, S ? S + l : l);
          else if (d in e)
            this.add(e, d, f || e[d], S ? S + l : l, n, i);
          else if (d !== "parseTransform") {
            no(d, l);
            continue;
          }
          P || (d in o ? T.push(d, 0, o[d]) : T.push(d, 1, f || e[d])), s.push(d);
        }
      }
    g && qa(this);
  },
  render: function(e, r) {
    if (r.tween._time || !_o())
      for (var t = r._pt; t; )
        t.r(e, t.d), t = t._next;
    else
      r.styles.revert();
  },
  get: mr,
  aliases: ar,
  getSetter: function(e, r, t) {
    var n = ar[r];
    return n && n.indexOf(",") < 0 && (r = n), r in wr && r !== xt && (e._gsap.x || mr(e, "x")) ? t && zo === t ? r === "scale" ? tl : el : (zo = t || {}) && (r === "scale" ? rl : nl) : e.style && !eo(e.style[r]) ? Jf : ~r.indexOf("-") ? jf : lo(e, r);
  },
  core: {
    _removeProperty: an,
    _getMatrix: go
  }
};
Tt.utils.checkPrefix = An;
Tt.core.getStyleSaver = ja;
(function(a, e, r, t) {
  var n = vt(a + "," + e + "," + r, function(i) {
    wr[i] = 1;
  });
  vt(e, function(i) {
    Rt.units[i] = "deg", nu[i] = 1;
  }), ar[n[13]] = a + "," + e, vt(t, function(i) {
    var s = i.split(":");
    ar[s[1]] = n[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
  Rt.units[a] = "px";
});
Tt.registerPlugin(ou);
var au = Tt.registerPlugin(ou) || Tt;
au.core.Tween;
function _l(a, e) {
  for (var r = 0; r < e.length; r++) {
    var t = e[r];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(a, t.key, t);
  }
}
function pl(a, e, r) {
  return e && _l(a.prototype, e), a;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var qe, Ri, At, Dr, Rr, Sn, uu, Gr, Qn, fu, yr, Qt, lu, cu = function() {
  return qe || typeof window < "u" && (qe = window.gsap) && qe.registerPlugin && qe;
}, hu = 1, xn = [], Q = [], lr = [], Zn = Date.now, Ys = function(e, r) {
  return r;
}, gl = function() {
  var e = Qn.core, r = e.bridge || {}, t = e._scrollers, n = e._proxies;
  t.push.apply(t, Q), n.push.apply(n, lr), Q = t, lr = n, Ys = function(s, o) {
    return r[s](o);
  };
}, Ir = function(e, r) {
  return ~lr.indexOf(e) && lr[lr.indexOf(e) + 1][r];
}, Jn = function(e) {
  return !!~fu.indexOf(e);
}, at = function(e, r, t, n, i) {
  return e.addEventListener(r, t, {
    passive: n !== !1,
    capture: !!i
  });
}, ot = function(e, r, t, n) {
  return e.removeEventListener(r, t, !!n);
}, vi = "scrollLeft", yi = "scrollTop", Xs = function() {
  return yr && yr.isPressed || Q.cache++;
}, qi = function(e, r) {
  var t = function n(i) {
    if (i || i === 0) {
      hu && (At.history.scrollRestoration = "manual");
      var s = yr && yr.isPressed;
      i = n.v = Math.round(i) || (yr && yr.iOS ? 1 : 0), e(i), n.cacheID = Q.cache, s && Ys("ss", i);
    } else (r || Q.cache !== n.cacheID || Ys("ref")) && (n.cacheID = Q.cache, n.v = e());
    return n.v + n.offset;
  };
  return t.offset = 0, e && t;
}, ht = {
  s: vi,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: qi(function(a) {
    return arguments.length ? At.scrollTo(a, Ie.sc()) : At.pageXOffset || Dr[vi] || Rr[vi] || Sn[vi] || 0;
  })
}, Ie = {
  s: yi,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: ht,
  sc: qi(function(a) {
    return arguments.length ? At.scrollTo(ht.sc(), a) : At.pageYOffset || Dr[yi] || Rr[yi] || Sn[yi] || 0;
  })
}, gt = function(e, r) {
  return (r && r._ctx && r._ctx.selector || qe.utils.toArray)(e)[0] || (typeof e == "string" && qe.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null);
}, Br = function(e, r) {
  var t = r.s, n = r.sc;
  Jn(e) && (e = Dr.scrollingElement || Rr);
  var i = Q.indexOf(e), s = n === Ie.sc ? 1 : 2;
  !~i && (i = Q.push(e) - 1), Q[i + s] || at(e, "scroll", Xs);
  var o = Q[i + s], u = o || (Q[i + s] = qi(Ir(e, t), !0) || (Jn(e) ? n : qi(function(f) {
    return arguments.length ? e[t] = f : e[t];
  })));
  return u.target = e, o || (u.smooth = qe.getProperty(e, "scrollBehavior") === "smooth"), u;
}, $s = function(e, r, t) {
  var n = e, i = e, s = Zn(), o = s, u = r || 50, f = Math.max(500, u * 3), l = function(p, d) {
    var x = Zn();
    d || x - s > u ? (i = n, n = p, o = s, s = x) : t ? n += p : n = i + (p - i) / (x - o) * (s - o);
  }, h = function() {
    i = n = t ? 0 : n, o = s = 0;
  }, _ = function(p) {
    var d = o, x = i, k = Zn();
    return (p || p === 0) && p !== n && l(p), s === o || k - o > f ? 0 : (n + (t ? x : -x)) / ((t ? k : s) - d) * 1e3;
  };
  return {
    update: l,
    reset: h,
    getVelocity: _
  };
}, Ln = function(e, r) {
  return r && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
}, Vo = function(e) {
  var r = Math.max.apply(Math, e), t = Math.min.apply(Math, e);
  return Math.abs(r) >= Math.abs(t) ? r : t;
}, du = function() {
  Qn = qe.core.globals().ScrollTrigger, Qn && Qn.core && gl();
}, _u = function(e) {
  return qe = e || cu(), !Ri && qe && typeof document < "u" && document.body && (At = window, Dr = document, Rr = Dr.documentElement, Sn = Dr.body, fu = [At, Dr, Rr, Sn], qe.utils.clamp, lu = qe.core.context || function() {
  }, Gr = "onpointerenter" in Sn ? "pointer" : "mouse", uu = Pe.isTouch = At.matchMedia && At.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in At || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Qt = Pe.eventTypes = ("ontouchstart" in Rr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Rr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return hu = 0;
  }, 500), du(), Ri = 1), Ri;
};
ht.op = Ie;
Q.cache = 0;
var Pe = /* @__PURE__ */ function() {
  function a(r) {
    this.init(r);
  }
  var e = a.prototype;
  return e.init = function(t) {
    Ri || _u(qe) || console.warn("Please gsap.registerPlugin(Observer)"), Qn || du();
    var n = t.tolerance, i = t.dragMinimum, s = t.type, o = t.target, u = t.lineHeight, f = t.debounce, l = t.preventDefault, h = t.onStop, _ = t.onStopDelay, c = t.ignore, p = t.wheelSpeed, d = t.event, x = t.onDragStart, k = t.onDragEnd, S = t.onDrag, P = t.onPress, w = t.onRelease, C = t.onRight, O = t.onLeft, g = t.onUp, T = t.onDown, m = t.onChangeX, E = t.onChangeY, I = t.onChange, M = t.onToggleX, B = t.onToggleY, V = t.onHover, X = t.onHoverEnd, z = t.onMove, Y = t.ignoreCheck, J = t.isNormalizer, oe = t.onGestureStart, v = t.onGestureEnd, ae = t.onWheel, fe = t.onEnable, wt = t.onDisable, te = t.onClick, Oe = t.scrollSpeed, We = t.capture, Se = t.allowClicks, Ue = t.lockAxis, Le = t.onLockAxis;
    this.target = o = gt(o) || Rr, this.vars = t, c && (c = qe.utils.toArray(c)), n = n || 1e-9, i = i || 0, p = p || 1, Oe = Oe || 1, s = s || "wheel,touch,pointer", f = f !== !1, u || (u = parseFloat(At.getComputedStyle(Sn).lineHeight) || 22);
    var Gt, Ge, rt, re, pe, Ke, nt, b = this, it = 0, Ht = 0, Jt = t.passive || !l, ke = Br(o, ht), jt = Br(o, Ie), hr = ke(), br = jt(), Me = ~s.indexOf("touch") && !~s.indexOf("pointer") && Qt[0] === "pointerdown", er = Jn(o), xe = o.ownerDocument || Dr, st = [0, 0, 0], He = [0, 0, 0], bt = 0, zt = function() {
      return bt = Zn();
    }, ge = function(N, ne) {
      return (b.event = N) && c && ~c.indexOf(N.target) || ne && Me && N.pointerType !== "touch" || Y && Y(N, ne);
    }, Sr = function() {
      b._vx.reset(), b._vy.reset(), Ge.pause(), h && h(b);
    }, tr = function() {
      var N = b.deltaX = Vo(st), ne = b.deltaY = Vo(He), D = Math.abs(N) >= n, W = Math.abs(ne) >= n;
      I && (D || W) && I(b, N, ne, st, He), D && (C && b.deltaX > 0 && C(b), O && b.deltaX < 0 && O(b), m && m(b), M && b.deltaX < 0 != it < 0 && M(b), it = b.deltaX, st[0] = st[1] = st[2] = 0), W && (T && b.deltaY > 0 && T(b), g && b.deltaY < 0 && g(b), E && E(b), B && b.deltaY < 0 != Ht < 0 && B(b), Ht = b.deltaY, He[0] = He[1] = He[2] = 0), (re || rt) && (z && z(b), rt && (S(b), rt = !1), re = !1), Ke && !(Ke = !1) && Le && Le(b), pe && (ae(b), pe = !1), Gt = 0;
    }, kr = function(N, ne, D) {
      st[D] += N, He[D] += ne, b._vx.update(N), b._vy.update(ne), f ? Gt || (Gt = requestAnimationFrame(tr)) : tr();
    }, Cr = function(N, ne) {
      Ue && !nt && (b.axis = nt = Math.abs(N) > Math.abs(ne) ? "x" : "y", Ke = !0), nt !== "y" && (st[2] += N, b._vx.update(N, !0)), nt !== "x" && (He[2] += ne, b._vy.update(ne, !0)), f ? Gt || (Gt = requestAnimationFrame(tr)) : tr();
    }, rr = function(N) {
      if (!ge(N, 1)) {
        N = Ln(N, l);
        var ne = N.clientX, D = N.clientY, W = ne - b.x, F = D - b.y, U = b.isDragging;
        b.x = ne, b.y = D, (U || Math.abs(b.startX - ne) >= i || Math.abs(b.startY - D) >= i) && (S && (rt = !0), U || (b.isDragging = !0), Cr(W, F), U || x && x(b));
      }
    }, dr = b.onPress = function($) {
      ge($, 1) || $ && $.button || (b.axis = nt = null, Ge.pause(), b.isPressed = !0, $ = Ln($), it = Ht = 0, b.startX = b.x = $.clientX, b.startY = b.y = $.clientY, b._vx.reset(), b._vy.reset(), at(J ? o : xe, Qt[1], rr, Jt, !0), b.deltaX = b.deltaY = 0, P && P(b));
    }, H = b.onRelease = function($) {
      if (!ge($, 1)) {
        ot(J ? o : xe, Qt[1], rr, !0);
        var N = !isNaN(b.y - b.startY), ne = b.isDragging, D = ne && (Math.abs(b.x - b.startX) > 3 || Math.abs(b.y - b.startY) > 3), W = Ln($);
        !D && N && (b._vx.reset(), b._vy.reset(), l && Se && qe.delayedCall(0.08, function() {
          if (Zn() - bt > 300 && !$.defaultPrevented) {
            if ($.target.click)
              $.target.click();
            else if (xe.createEvent) {
              var F = xe.createEvent("MouseEvents");
              F.initMouseEvent("click", !0, !0, At, 1, W.screenX, W.screenY, W.clientX, W.clientY, !1, !1, !1, !1, 0, null), $.target.dispatchEvent(F);
            }
          }
        })), b.isDragging = b.isGesturing = b.isPressed = !1, h && ne && !J && Ge.restart(!0), k && ne && k(b), w && w(b, D);
      }
    }, _r = function(N) {
      return N.touches && N.touches.length > 1 && (b.isGesturing = !0) && oe(N, b.isDragging);
    }, St = function() {
      return (b.isGesturing = !1) || v(b);
    }, kt = function(N) {
      if (!ge(N)) {
        var ne = ke(), D = jt();
        kr((ne - hr) * Oe, (D - br) * Oe, 1), hr = ne, br = D, h && Ge.restart(!0);
      }
    }, Ct = function(N) {
      if (!ge(N)) {
        N = Ln(N, l), ae && (pe = !0);
        var ne = (N.deltaMode === 1 ? u : N.deltaMode === 2 ? At.innerHeight : 1) * p;
        kr(N.deltaX * ne, N.deltaY * ne, 0), h && !J && Ge.restart(!0);
      }
    }, pr = function(N) {
      if (!ge(N)) {
        var ne = N.clientX, D = N.clientY, W = ne - b.x, F = D - b.y;
        b.x = ne, b.y = D, re = !0, h && Ge.restart(!0), (W || F) && Cr(W, F);
      }
    }, Er = function(N) {
      b.event = N, V(b);
    }, qt = function(N) {
      b.event = N, X(b);
    }, Xr = function(N) {
      return ge(N) || Ln(N, l) && te(b);
    };
    Ge = b._dc = qe.delayedCall(_ || 0.25, Sr).pause(), b.deltaX = b.deltaY = 0, b._vx = $s(0, 50, !0), b._vy = $s(0, 50, !0), b.scrollX = ke, b.scrollY = jt, b.isDragging = b.isGesturing = b.isPressed = !1, lu(this), b.enable = function($) {
      return b.isEnabled || (at(er ? xe : o, "scroll", Xs), s.indexOf("scroll") >= 0 && at(er ? xe : o, "scroll", kt, Jt, We), s.indexOf("wheel") >= 0 && at(o, "wheel", Ct, Jt, We), (s.indexOf("touch") >= 0 && uu || s.indexOf("pointer") >= 0) && (at(o, Qt[0], dr, Jt, We), at(xe, Qt[2], H), at(xe, Qt[3], H), Se && at(o, "click", zt, !0, !0), te && at(o, "click", Xr), oe && at(xe, "gesturestart", _r), v && at(xe, "gestureend", St), V && at(o, Gr + "enter", Er), X && at(o, Gr + "leave", qt), z && at(o, Gr + "move", pr)), b.isEnabled = !0, $ && $.type && dr($), fe && fe(b)), b;
    }, b.disable = function() {
      b.isEnabled && (xn.filter(function($) {
        return $ !== b && Jn($.target);
      }).length || ot(er ? xe : o, "scroll", Xs), b.isPressed && (b._vx.reset(), b._vy.reset(), ot(J ? o : xe, Qt[1], rr, !0)), ot(er ? xe : o, "scroll", kt, We), ot(o, "wheel", Ct, We), ot(o, Qt[0], dr, We), ot(xe, Qt[2], H), ot(xe, Qt[3], H), ot(o, "click", zt, !0), ot(o, "click", Xr), ot(xe, "gesturestart", _r), ot(xe, "gestureend", St), ot(o, Gr + "enter", Er), ot(o, Gr + "leave", qt), ot(o, Gr + "move", pr), b.isEnabled = b.isPressed = b.isDragging = !1, wt && wt(b));
    }, b.kill = b.revert = function() {
      b.disable();
      var $ = xn.indexOf(b);
      $ >= 0 && xn.splice($, 1), yr === b && (yr = 0);
    }, xn.push(b), J && Jn(o) && (yr = b), b.enable(d);
  }, pl(a, [{
    key: "velocityX",
    get: function() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function() {
      return this._vy.getVelocity();
    }
  }]), a;
}();
Pe.version = "3.12.5";
Pe.create = function(a) {
  return new Pe(a);
};
Pe.register = _u;
Pe.getAll = function() {
  return xn.slice();
};
Pe.getById = function(a) {
  return xn.filter(function(e) {
    return e.vars.id === a;
  })[0];
};
cu() && qe.registerPlugin(Pe);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var R, gn, j, Te, Zt, _e, pu, Ki, hi, jn, Xn, xi, Ze, rs, Vs, ft, Wo, Uo, mn, gu, ps, mu, ut, Ws, vu, yu, Pr, Us, mo, kn, vo, Qi, Gs, gs, Ti = 1, Je = Date.now, ms = Je(), Wt = 0, $n = 0, Go = function(e, r, t) {
  var n = Pt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
  return t["_" + r + "Clamp"] = n, n ? e.substr(6, e.length - 7) : e;
}, Ho = function(e, r) {
  return r && (!Pt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
}, ml = function a() {
  return $n && requestAnimationFrame(a);
}, qo = function() {
  return rs = 1;
}, Ko = function() {
  return rs = 0;
}, sr = function(e) {
  return e;
}, Vn = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, xu = function() {
  return typeof window < "u";
}, Tu = function() {
  return R || xu() && (R = window.gsap) && R.registerPlugin && R;
}, un = function(e) {
  return !!~pu.indexOf(e);
}, wu = function(e) {
  return (e === "Height" ? vo : j["inner" + e]) || Zt["client" + e] || _e["client" + e];
}, bu = function(e) {
  return Ir(e, "getBoundingClientRect") || (un(e) ? function() {
    return Ni.width = j.innerWidth, Ni.height = vo, Ni;
  } : function() {
    return vr(e);
  });
}, vl = function(e, r, t) {
  var n = t.d, i = t.d2, s = t.a;
  return (s = Ir(e, "getBoundingClientRect")) ? function() {
    return s()[n];
  } : function() {
    return (r ? wu(i) : e["client" + i]) || 0;
  };
}, yl = function(e, r) {
  return !r || ~lr.indexOf(e) ? bu(e) : function() {
    return Ni;
  };
}, ur = function(e, r) {
  var t = r.s, n = r.d2, i = r.d, s = r.a;
  return Math.max(0, (t = "scroll" + n) && (s = Ir(e, t)) ? s() - bu(e)()[i] : un(e) ? (Zt[t] || _e[t]) - wu(n) : e[t] - e["offset" + n]);
}, wi = function(e, r) {
  for (var t = 0; t < mn.length; t += 3)
    (!r || ~r.indexOf(mn[t + 1])) && e(mn[t], mn[t + 1], mn[t + 2]);
}, Pt = function(e) {
  return typeof e == "string";
}, dt = function(e) {
  return typeof e == "function";
}, Wn = function(e) {
  return typeof e == "number";
}, Hr = function(e) {
  return typeof e == "object";
}, Nn = function(e, r, t) {
  return e && e.progress(r ? 0 : 1) && t && e.pause();
}, vs = function(e, r) {
  if (e.enabled) {
    var t = e._ctx ? e._ctx.add(function() {
      return r(e);
    }) : r(e);
    t && t.totalTime && (e.callbackAnimation = t);
  }
}, dn = Math.abs, Su = "left", ku = "top", yo = "right", xo = "bottom", rn = "width", nn = "height", ei = "Right", ti = "Left", ri = "Top", ni = "Bottom", De = "padding", Yt = "margin", Dn = "Width", To = "Height", ze = "px", Xt = function(e) {
  return j.getComputedStyle(e);
}, xl = function(e) {
  var r = Xt(e).position;
  e.style.position = r === "absolute" || r === "fixed" ? r : "relative";
}, Qo = function(e, r) {
  for (var t in r)
    t in e || (e[t] = r[t]);
  return e;
}, vr = function(e, r) {
  var t = r && Xt(e)[Vs] !== "matrix(1, 0, 0, 1, 0, 0)" && R.to(e, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), n = e.getBoundingClientRect();
  return t && t.progress(0).kill(), n;
}, Zi = function(e, r) {
  var t = r.d2;
  return e["offset" + t] || e["client" + t] || 0;
}, Cu = function(e) {
  var r = [], t = e.labels, n = e.duration(), i;
  for (i in t)
    r.push(t[i] / n);
  return r;
}, Tl = function(e) {
  return function(r) {
    return R.utils.snap(Cu(e), r);
  };
}, wo = function(e) {
  var r = R.utils.snap(e), t = Array.isArray(e) && e.slice(0).sort(function(n, i) {
    return n - i;
  });
  return t ? function(n, i, s) {
    s === void 0 && (s = 1e-3);
    var o;
    if (!i)
      return r(n);
    if (i > 0) {
      for (n -= s, o = 0; o < t.length; o++)
        if (t[o] >= n)
          return t[o];
      return t[o - 1];
    } else
      for (o = t.length, n += s; o--; )
        if (t[o] <= n)
          return t[o];
    return t[0];
  } : function(n, i, s) {
    s === void 0 && (s = 1e-3);
    var o = r(n);
    return !i || Math.abs(o - n) < s || o - n < 0 == i < 0 ? o : r(i < 0 ? n - e : n + e);
  };
}, wl = function(e) {
  return function(r, t) {
    return wo(Cu(e))(r, t.direction);
  };
}, bi = function(e, r, t, n) {
  return t.split(",").forEach(function(i) {
    return e(r, i, n);
  });
}, Xe = function(e, r, t, n, i) {
  return e.addEventListener(r, t, {
    passive: !n,
    capture: !!i
  });
}, Ye = function(e, r, t, n) {
  return e.removeEventListener(r, t, !!n);
}, Si = function(e, r, t) {
  t = t && t.wheelHandler, t && (e(r, "wheel", t), e(r, "touchmove", t));
}, Zo = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
}, ki = {
  toggleActions: "play",
  anticipatePin: 0
}, Ji = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
}, Fi = function(e, r) {
  if (Pt(e)) {
    var t = e.indexOf("="), n = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
    ~t && (e.indexOf("%") > t && (n *= r / 100), e = e.substr(0, t - 1)), e = n + (e in Ji ? Ji[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0);
  }
  return e;
}, Ci = function(e, r, t, n, i, s, o, u) {
  var f = i.startColor, l = i.endColor, h = i.fontSize, _ = i.indent, c = i.fontWeight, p = Te.createElement("div"), d = un(t) || Ir(t, "pinType") === "fixed", x = e.indexOf("scroller") !== -1, k = d ? _e : t, S = e.indexOf("start") !== -1, P = S ? f : l, w = "border-color:" + P + ";font-size:" + h + ";color:" + P + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return w += "position:" + ((x || u) && d ? "fixed;" : "absolute;"), (x || u || !d) && (w += (n === Ie ? yo : xo) + ":" + (s + parseFloat(_)) + "px;"), o && (w += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = S, p.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")), p.style.cssText = w, p.innerText = r || r === 0 ? e + "-" + r : e, k.children[0] ? k.insertBefore(p, k.children[0]) : k.appendChild(p), p._offset = p["offset" + n.op.d2], zi(p, 0, n, S), p;
}, zi = function(e, r, t, n) {
  var i = {
    display: "block"
  }, s = t[n ? "os2" : "p2"], o = t[n ? "p2" : "os2"];
  e._isFlipped = n, i[t.a + "Percent"] = n ? -100 : 0, i[t.a] = n ? "1px" : 0, i["border" + s + Dn] = 1, i["border" + o + Dn] = 0, i[t.p] = r + "px", R.set(e, i);
}, q = [], Hs = {}, di, Jo = function() {
  return Je() - Wt > 34 && (di || (di = requestAnimationFrame(xr)));
}, _n = function() {
  (!ut || !ut.isPressed || ut.startX > _e.clientWidth) && (Q.cache++, ut ? di || (di = requestAnimationFrame(xr)) : xr(), Wt || ln("scrollStart"), Wt = Je());
}, ys = function() {
  yu = j.innerWidth, vu = j.innerHeight;
}, Un = function() {
  Q.cache++, !Ze && !mu && !Te.fullscreenElement && !Te.webkitFullscreenElement && (!Ws || yu !== j.innerWidth || Math.abs(j.innerHeight - vu) > j.innerHeight * 0.25) && Ki.restart(!0);
}, fn = {}, bl = [], Eu = function a() {
  return Ye(Z, "scrollEnd", a) || Qr(!0);
}, ln = function(e) {
  return fn[e] && fn[e].map(function(r) {
    return r();
  }) || bl;
}, Et = [], Pu = function(e) {
  for (var r = 0; r < Et.length; r += 5)
    (!e || Et[r + 4] && Et[r + 4].query === e) && (Et[r].style.cssText = Et[r + 1], Et[r].getBBox && Et[r].setAttribute("transform", Et[r + 2] || ""), Et[r + 3].uncache = 1);
}, bo = function(e, r) {
  var t;
  for (ft = 0; ft < q.length; ft++)
    t = q[ft], t && (!r || t._ctx === r) && (e ? t.kill(1) : t.revert(!0, !0));
  Qi = !0, r && Pu(r), r || ln("revert");
}, Ou = function(e, r) {
  Q.cache++, (r || !lt) && Q.forEach(function(t) {
    return dt(t) && t.cacheID++ && (t.rec = 0);
  }), Pt(e) && (j.history.scrollRestoration = mo = e);
}, lt, sn = 0, jo, Sl = function() {
  if (jo !== sn) {
    var e = jo = sn;
    requestAnimationFrame(function() {
      return e === sn && Qr(!0);
    });
  }
}, Mu = function() {
  _e.appendChild(kn), vo = !ut && kn.offsetHeight || j.innerHeight, _e.removeChild(kn);
}, ea = function(e) {
  return hi(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r) {
    return r.style.display = e ? "none" : "block";
  });
}, Qr = function(e, r) {
  if (Wt && !e && !Qi) {
    Xe(Z, "scrollEnd", Eu);
    return;
  }
  Mu(), lt = Z.isRefreshing = !0, Q.forEach(function(n) {
    return dt(n) && ++n.cacheID && (n.rec = n());
  });
  var t = ln("refreshInit");
  gu && Z.sort(), r || bo(), Q.forEach(function(n) {
    dt(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
  }), q.slice(0).forEach(function(n) {
    return n.refresh();
  }), Qi = !1, q.forEach(function(n) {
    if (n._subPinOffset && n.pin) {
      var i = n.vars.horizontal ? "offsetWidth" : "offsetHeight", s = n.pin[i];
      n.revert(!0, 1), n.adjustPinSpacing(n.pin[i] - s), n.refresh();
    }
  }), Gs = 1, ea(!0), q.forEach(function(n) {
    var i = ur(n.scroller, n._dir), s = n.vars.end === "max" || n._endClamp && n.end > i, o = n._startClamp && n.start >= i;
    (s || o) && n.setPositions(o ? i - 1 : n.start, s ? Math.max(o ? i : n.start + 1, i) : n.end, !0);
  }), ea(!1), Gs = 0, t.forEach(function(n) {
    return n && n.render && n.render(-1);
  }), Q.forEach(function(n) {
    dt(n) && (n.smooth && requestAnimationFrame(function() {
      return n.target.style.scrollBehavior = "smooth";
    }), n.rec && n(n.rec));
  }), Ou(mo, 1), Ki.pause(), sn++, lt = 2, xr(2), q.forEach(function(n) {
    return dt(n.vars.onRefresh) && n.vars.onRefresh(n);
  }), lt = Z.isRefreshing = !1, ln("refresh");
}, qs = 0, Ii = 1, ii, xr = function(e) {
  if (e === 2 || !lt && !Qi) {
    Z.isUpdating = !0, ii && ii.update(0);
    var r = q.length, t = Je(), n = t - ms >= 50, i = r && q[0].scroll();
    if (Ii = qs > i ? -1 : 1, lt || (qs = i), n && (Wt && !rs && t - Wt > 200 && (Wt = 0, ln("scrollEnd")), Xn = ms, ms = t), Ii < 0) {
      for (ft = r; ft-- > 0; )
        q[ft] && q[ft].update(0, n);
      Ii = 1;
    } else
      for (ft = 0; ft < r; ft++)
        q[ft] && q[ft].update(0, n);
    Z.isUpdating = !1;
  }
  di = 0;
}, Ks = [Su, ku, xo, yo, Yt + ni, Yt + ei, Yt + ri, Yt + ti, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Li = Ks.concat([rn, nn, "boxSizing", "max" + Dn, "max" + To, "position", Yt, De, De + ri, De + ei, De + ni, De + ti]), kl = function(e, r, t) {
  Cn(t);
  var n = e._gsap;
  if (n.spacerIsNative)
    Cn(n.spacerState);
  else if (e._gsap.swappedIn) {
    var i = r.parentNode;
    i && (i.insertBefore(e, r), i.removeChild(r));
  }
  e._gsap.swappedIn = !1;
}, xs = function(e, r, t, n) {
  if (!e._gsap.swappedIn) {
    for (var i = Ks.length, s = r.style, o = e.style, u; i--; )
      u = Ks[i], s[u] = t[u];
    s.position = t.position === "absolute" ? "absolute" : "relative", t.display === "inline" && (s.display = "inline-block"), o[xo] = o[yo] = "auto", s.flexBasis = t.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[rn] = Zi(e, ht) + ze, s[nn] = Zi(e, Ie) + ze, s[De] = o[Yt] = o[ku] = o[Su] = "0", Cn(n), o[rn] = o["max" + Dn] = t[rn], o[nn] = o["max" + To] = t[nn], o[De] = t[De], e.parentNode !== r && (e.parentNode.insertBefore(r, e), r.appendChild(e)), e._gsap.swappedIn = !0;
  }
}, Cl = /([A-Z])/g, Cn = function(e) {
  if (e) {
    var r = e.t.style, t = e.length, n = 0, i, s;
    for ((e.t._gsap || R.core.getCache(e.t)).uncache = 1; n < t; n += 2)
      s = e[n + 1], i = e[n], s ? r[i] = s : r[i] && r.removeProperty(i.replace(Cl, "-$1").toLowerCase());
  }
}, Ei = function(e) {
  for (var r = Li.length, t = e.style, n = [], i = 0; i < r; i++)
    n.push(Li[i], t[Li[i]]);
  return n.t = e, n;
}, El = function(e, r, t) {
  for (var n = [], i = e.length, s = t ? 8 : 0, o; s < i; s += 2)
    o = e[s], n.push(o, o in r ? r[o] : e[s + 1]);
  return n.t = e.t, n;
}, Ni = {
  left: 0,
  top: 0
}, ta = function(e, r, t, n, i, s, o, u, f, l, h, _, c, p) {
  dt(e) && (e = e(u)), Pt(e) && e.substr(0, 3) === "max" && (e = _ + (e.charAt(4) === "=" ? Fi("0" + e.substr(3), t) : 0));
  var d = c ? c.time() : 0, x, k, S;
  if (c && c.seek(0), isNaN(e) || (e = +e), Wn(e))
    c && (e = R.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, _, e)), o && zi(o, t, n, !0);
  else {
    dt(r) && (r = r(u));
    var P = (e || "0").split(" "), w, C, O, g;
    S = gt(r, u) || _e, w = vr(S) || {}, (!w || !w.left && !w.top) && Xt(S).display === "none" && (g = S.style.display, S.style.display = "block", w = vr(S), g ? S.style.display = g : S.style.removeProperty("display")), C = Fi(P[0], w[n.d]), O = Fi(P[1] || "0", t), e = w[n.p] - f[n.p] - l + C + i - O, o && zi(o, O, n, t - O < 20 || o._isStart && O > 20), t -= t - O;
  }
  if (p && (u[p] = e || -1e-3, e < 0 && (e = 0)), s) {
    var T = e + t, m = s._isStart;
    x = "scroll" + n.d2, zi(s, T, n, m && T > 20 || !m && (h ? Math.max(_e[x], Zt[x]) : s.parentNode[x]) <= T + 1), h && (f = vr(o), h && (s.style[n.op.p] = f[n.op.p] - n.op.m - s._offset + ze));
  }
  return c && S && (x = vr(S), c.seek(_), k = vr(S), c._caScrollDist = x[n.p] - k[n.p], e = e / c._caScrollDist * _), c && c.seek(d), c ? e : Math.round(e);
}, Pl = /(webkit|moz|length|cssText|inset)/i, ra = function(e, r, t, n) {
  if (e.parentNode !== r) {
    var i = e.style, s, o;
    if (r === _e) {
      e._stOrig = i.cssText, o = Xt(e);
      for (s in o)
        !+s && !Pl.test(s) && o[s] && typeof i[s] == "string" && s !== "0" && (i[s] = o[s]);
      i.top = t, i.left = n;
    } else
      i.cssText = e._stOrig;
    R.core.getCache(e).uncache = 1, r.appendChild(e);
  }
}, Au = function(e, r, t) {
  var n = r, i = n;
  return function(s) {
    var o = Math.round(e());
    return o !== n && o !== i && Math.abs(o - n) > 3 && Math.abs(o - i) > 3 && (s = o, t && t()), i = n, n = s, s;
  };
}, Pi = function(e, r, t) {
  var n = {};
  n[r.p] = "+=" + t, R.set(e, n);
}, na = function(e, r) {
  var t = Br(e, r), n = "_scroll" + r.p2, i = function s(o, u, f, l, h) {
    var _ = s.tween, c = u.onComplete, p = {};
    f = f || t();
    var d = Au(t, f, function() {
      _.kill(), s.tween = 0;
    });
    return h = l && h || 0, l = l || o - f, _ && _.kill(), u[n] = o, u.inherit = !1, u.modifiers = p, p[n] = function() {
      return d(f + l * _.ratio + h * _.ratio * _.ratio);
    }, u.onUpdate = function() {
      Q.cache++, s.tween && xr();
    }, u.onComplete = function() {
      s.tween = 0, c && c.call(_);
    }, _ = s.tween = R.to(e, u), _;
  };
  return e[n] = t, t.wheelHandler = function() {
    return i.tween && i.tween.kill() && (i.tween = 0);
  }, Xe(e, "wheel", t.wheelHandler), Z.isTouch && Xe(e, "touchmove", t.wheelHandler), i;
}, Z = /* @__PURE__ */ function() {
  function a(r, t) {
    gn || a.register(R) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Us(this), this.init(r, t);
  }
  var e = a.prototype;
  return e.init = function(t, n) {
    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !$n) {
      this.update = this.refresh = this.kill = sr;
      return;
    }
    t = Qo(Pt(t) || Wn(t) || t.nodeType ? {
      trigger: t
    } : t, ki);
    var i = t, s = i.onUpdate, o = i.toggleClass, u = i.id, f = i.onToggle, l = i.onRefresh, h = i.scrub, _ = i.trigger, c = i.pin, p = i.pinSpacing, d = i.invalidateOnRefresh, x = i.anticipatePin, k = i.onScrubComplete, S = i.onSnapComplete, P = i.once, w = i.snap, C = i.pinReparent, O = i.pinSpacer, g = i.containerAnimation, T = i.fastScrollEnd, m = i.preventOverlaps, E = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? ht : Ie, I = !h && h !== 0, M = gt(t.scroller || j), B = R.core.getCache(M), V = un(M), X = ("pinType" in t ? t.pinType : Ir(M, "pinType") || V && "fixed") === "fixed", z = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], Y = I && t.toggleActions.split(" "), J = "markers" in t ? t.markers : ki.markers, oe = V ? 0 : parseFloat(Xt(M)["border" + E.p2 + Dn]) || 0, v = this, ae = t.onRefreshInit && function() {
      return t.onRefreshInit(v);
    }, fe = vl(M, V, E), wt = yl(M, V), te = 0, Oe = 0, We = 0, Se = Br(M, E), Ue, Le, Gt, Ge, rt, re, pe, Ke, nt, b, it, Ht, Jt, ke, jt, hr, br, Me, er, xe, st, He, bt, zt, ge, Sr, tr, kr, Cr, rr, dr, H, _r, St, kt, Ct, pr, Er, qt;
    if (v._startClamp = v._endClamp = !1, v._dir = E, x *= 45, v.scroller = M, v.scroll = g ? g.time.bind(g) : Se, Ge = Se(), v.vars = t, n = n || t.animation, "refreshPriority" in t && (gu = 1, t.refreshPriority === -9999 && (ii = v)), B.tweenScroll = B.tweenScroll || {
      top: na(M, Ie),
      left: na(M, ht)
    }, v.tweenTo = Ue = B.tweenScroll[E.p], v.scrubDuration = function(D) {
      _r = Wn(D) && D, _r ? H ? H.duration(D) : H = R.to(n, {
        ease: "expo",
        totalProgress: "+=0",
        inherit: !1,
        duration: _r,
        paused: !0,
        onComplete: function() {
          return k && k(v);
        }
      }) : (H && H.progress(1).kill(), H = 0);
    }, n && (n.vars.lazy = !1, n._initted && !v.isReverted || n.vars.immediateRender !== !1 && t.immediateRender !== !1 && n.duration() && n.render(0, !0, !0), v.animation = n.pause(), n.scrollTrigger = v, v.scrubDuration(h), rr = 0, u || (u = n.vars.id)), w && ((!Hr(w) || w.push) && (w = {
      snapTo: w
    }), "scrollBehavior" in _e.style && R.set(V ? [_e, Zt] : M, {
      scrollBehavior: "auto"
    }), Q.forEach(function(D) {
      return dt(D) && D.target === (V ? Te.scrollingElement || Zt : M) && (D.smooth = !1);
    }), Gt = dt(w.snapTo) ? w.snapTo : w.snapTo === "labels" ? Tl(n) : w.snapTo === "labelsDirectional" ? wl(n) : w.directional !== !1 ? function(D, W) {
      return wo(w.snapTo)(D, Je() - Oe < 500 ? 0 : W.direction);
    } : R.utils.snap(w.snapTo), St = w.duration || {
      min: 0.1,
      max: 2
    }, St = Hr(St) ? jn(St.min, St.max) : jn(St, St), kt = R.delayedCall(w.delay || _r / 2 || 0.1, function() {
      var D = Se(), W = Je() - Oe < 500, F = Ue.tween;
      if ((W || Math.abs(v.getVelocity()) < 10) && !F && !rs && te !== D) {
        var U = (D - re) / ke, Ae = n && !I ? n.totalProgress() : U, K = W ? 0 : (Ae - dr) / (Je() - Xn) * 1e3 || 0, me = R.utils.clamp(-U, 1 - U, dn(K / 2) * K / 0.185), Ne = U + (w.inertia === !1 ? 0 : me), ve, le, se = w, pt = se.onStart, de = se.onInterrupt, Qe = se.onComplete;
        if (ve = Gt(Ne, v), Wn(ve) || (ve = Ne), le = Math.round(re + ve * ke), D <= pe && D >= re && le !== D) {
          if (F && !F._initted && F.data <= dn(le - D))
            return;
          w.inertia === !1 && (me = ve - U), Ue(le, {
            duration: St(dn(Math.max(dn(Ne - Ae), dn(ve - Ae)) * 0.185 / K / 0.05 || 0)),
            ease: w.ease || "power3",
            data: dn(le - D),
            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
            onInterrupt: function() {
              return kt.restart(!0) && de && de(v);
            },
            onComplete: function() {
              v.update(), te = Se(), n && (H ? H.resetTo("totalProgress", ve, n._tTime / n._tDur) : n.progress(ve)), rr = dr = n && !I ? n.totalProgress() : v.progress, S && S(v), Qe && Qe(v);
            }
          }, D, me * ke, le - D - me * ke), pt && pt(v, Ue.tween);
        }
      } else v.isActive && te !== D && kt.restart(!0);
    }).pause()), u && (Hs[u] = v), _ = v.trigger = gt(_ || c !== !0 && c), qt = _ && _._gsap && _._gsap.stRevert, qt && (qt = qt(v)), c = c === !0 ? _ : gt(c), Pt(o) && (o = {
      targets: _,
      className: o
    }), c && (p === !1 || p === Yt || (p = !p && c.parentNode && c.parentNode.style && Xt(c.parentNode).display === "flex" ? !1 : De), v.pin = c, Le = R.core.getCache(c), Le.spacer ? jt = Le.pinState : (O && (O = gt(O), O && !O.nodeType && (O = O.current || O.nativeElement), Le.spacerIsNative = !!O, O && (Le.spacerState = Ei(O))), Le.spacer = Me = O || Te.createElement("div"), Me.classList.add("pin-spacer"), u && Me.classList.add("pin-spacer-" + u), Le.pinState = jt = Ei(c)), t.force3D !== !1 && R.set(c, {
      force3D: !0
    }), v.spacer = Me = Le.spacer, Cr = Xt(c), zt = Cr[p + E.os2], xe = R.getProperty(c), st = R.quickSetter(c, E.a, ze), xs(c, Me, Cr), br = Ei(c)), J) {
      Ht = Hr(J) ? Qo(J, Zo) : Zo, b = Ci("scroller-start", u, M, E, Ht, 0), it = Ci("scroller-end", u, M, E, Ht, 0, b), er = b["offset" + E.op.d2];
      var Xr = gt(Ir(M, "content") || M);
      Ke = this.markerStart = Ci("start", u, Xr, E, Ht, er, 0, g), nt = this.markerEnd = Ci("end", u, Xr, E, Ht, er, 0, g), g && (Er = R.quickSetter([Ke, nt], E.a, ze)), !X && !(lr.length && Ir(M, "fixedMarkers") === !0) && (xl(V ? _e : M), R.set([b, it], {
        force3D: !0
      }), Sr = R.quickSetter(b, E.a, ze), kr = R.quickSetter(it, E.a, ze));
    }
    if (g) {
      var $ = g.vars.onUpdate, N = g.vars.onUpdateParams;
      g.eventCallback("onUpdate", function() {
        v.update(0, 0, 1), $ && $.apply(g, N || []);
      });
    }
    if (v.previous = function() {
      return q[q.indexOf(v) - 1];
    }, v.next = function() {
      return q[q.indexOf(v) + 1];
    }, v.revert = function(D, W) {
      if (!W)
        return v.kill(!0);
      var F = D !== !1 || !v.enabled, U = Ze;
      F !== v.isReverted && (F && (Ct = Math.max(Se(), v.scroll.rec || 0), We = v.progress, pr = n && n.progress()), Ke && [Ke, nt, b, it].forEach(function(Ae) {
        return Ae.style.display = F ? "none" : "block";
      }), F && (Ze = v, v.update(F)), c && (!C || !v.isActive) && (F ? kl(c, Me, jt) : xs(c, Me, Xt(c), ge)), F || v.update(F), Ze = U, v.isReverted = F);
    }, v.refresh = function(D, W, F, U) {
      if (!((Ze || !v.enabled) && !W)) {
        if (c && D && Wt) {
          Xe(a, "scrollEnd", Eu);
          return;
        }
        !lt && ae && ae(v), Ze = v, Ue.tween && !F && (Ue.tween.kill(), Ue.tween = 0), H && H.pause(), d && n && n.revert({
          kill: !1
        }).invalidate(), v.isReverted || v.revert(!0, !0), v._subPinOffset = !1;
        var Ae = fe(), K = wt(), me = g ? g.duration() : ur(M, E), Ne = ke <= 0.01, ve = 0, le = U || 0, se = Hr(F) ? F.end : t.end, pt = t.endTrigger || _, de = Hr(F) ? F.start : t.start || (t.start === 0 || !_ ? 0 : c ? "0 0" : "0 100%"), Qe = v.pinnedContainer = t.pinnedContainer && gt(t.pinnedContainer, v), It = _ && Math.max(0, q.indexOf(v)) || 0, Fe = It, y, A, L, G, ie, ce, Be, $r, So, Rn, nr, Fn, pi;
        for (J && Hr(F) && (Fn = R.getProperty(b, E.p), pi = R.getProperty(it, E.p)); Fe--; )
          ce = q[Fe], ce.end || ce.refresh(0, 1) || (Ze = v), Be = ce.pin, Be && (Be === _ || Be === c || Be === Qe) && !ce.isReverted && (Rn || (Rn = []), Rn.unshift(ce), ce.revert(!0, !0)), ce !== q[Fe] && (It--, Fe--);
        for (dt(de) && (de = de(v)), de = Go(de, "start", v), re = ta(de, _, Ae, E, Se(), Ke, b, v, K, oe, X, me, g, v._startClamp && "_startClamp") || (c ? -1e-3 : 0), dt(se) && (se = se(v)), Pt(se) && !se.indexOf("+=") && (~se.indexOf(" ") ? se = (Pt(de) ? de.split(" ")[0] : "") + se : (ve = Fi(se.substr(2), Ae), se = Pt(de) ? de : (g ? R.utils.mapRange(0, g.duration(), g.scrollTrigger.start, g.scrollTrigger.end, re) : re) + ve, pt = _)), se = Go(se, "end", v), pe = Math.max(re, ta(se || (pt ? "100% 0" : me), pt, Ae, E, Se() + ve, nt, it, v, K, oe, X, me, g, v._endClamp && "_endClamp")) || -1e-3, ve = 0, Fe = It; Fe--; )
          ce = q[Fe], Be = ce.pin, Be && ce.start - ce._pinPush <= re && !g && ce.end > 0 && (y = ce.end - (v._startClamp ? Math.max(0, ce.start) : ce.start), (Be === _ && ce.start - ce._pinPush < re || Be === Qe) && isNaN(de) && (ve += y * (1 - ce.progress)), Be === c && (le += y));
        if (re += ve, pe += ve, v._startClamp && (v._startClamp += ve), v._endClamp && !lt && (v._endClamp = pe || -1e-3, pe = Math.min(pe, ur(M, E))), ke = pe - re || (re -= 0.01) && 1e-3, Ne && (We = R.utils.clamp(0, 1, R.utils.normalize(re, pe, Ct))), v._pinPush = le, Ke && ve && (y = {}, y[E.a] = "+=" + ve, Qe && (y[E.p] = "-=" + Se()), R.set([Ke, nt], y)), c && !(Gs && v.end >= ur(M, E)))
          y = Xt(c), G = E === Ie, L = Se(), He = parseFloat(xe(E.a)) + le, !me && pe > 1 && (nr = (V ? Te.scrollingElement || Zt : M).style, nr = {
            style: nr,
            value: nr["overflow" + E.a.toUpperCase()]
          }, V && Xt(_e)["overflow" + E.a.toUpperCase()] !== "scroll" && (nr.style["overflow" + E.a.toUpperCase()] = "scroll")), xs(c, Me, y), br = Ei(c), A = vr(c, !0), $r = X && Br(M, G ? ht : Ie)(), p ? (ge = [p + E.os2, ke + le + ze], ge.t = Me, Fe = p === De ? Zi(c, E) + ke + le : 0, Fe && (ge.push(E.d, Fe + ze), Me.style.flexBasis !== "auto" && (Me.style.flexBasis = Fe + ze)), Cn(ge), Qe && q.forEach(function(zn) {
            zn.pin === Qe && zn.vars.pinSpacing !== !1 && (zn._subPinOffset = !0);
          }), X && Se(Ct)) : (Fe = Zi(c, E), Fe && Me.style.flexBasis !== "auto" && (Me.style.flexBasis = Fe + ze)), X && (ie = {
            top: A.top + (G ? L - re : $r) + ze,
            left: A.left + (G ? $r : L - re) + ze,
            boxSizing: "border-box",
            position: "fixed"
          }, ie[rn] = ie["max" + Dn] = Math.ceil(A.width) + ze, ie[nn] = ie["max" + To] = Math.ceil(A.height) + ze, ie[Yt] = ie[Yt + ri] = ie[Yt + ei] = ie[Yt + ni] = ie[Yt + ti] = "0", ie[De] = y[De], ie[De + ri] = y[De + ri], ie[De + ei] = y[De + ei], ie[De + ni] = y[De + ni], ie[De + ti] = y[De + ti], hr = El(jt, ie, C), lt && Se(0)), n ? (So = n._initted, ps(1), n.render(n.duration(), !0, !0), bt = xe(E.a) - He + ke + le, tr = Math.abs(ke - bt) > 1, X && tr && hr.splice(hr.length - 2, 2), n.render(0, !0, !0), So || n.invalidate(!0), n.parent || n.totalTime(n.totalTime()), ps(0)) : bt = ke, nr && (nr.value ? nr.style["overflow" + E.a.toUpperCase()] = nr.value : nr.style.removeProperty("overflow-" + E.a));
        else if (_ && Se() && !g)
          for (A = _.parentNode; A && A !== _e; )
            A._pinOffset && (re -= A._pinOffset, pe -= A._pinOffset), A = A.parentNode;
        Rn && Rn.forEach(function(zn) {
          return zn.revert(!1, !0);
        }), v.start = re, v.end = pe, Ge = rt = lt ? Ct : Se(), !g && !lt && (Ge < Ct && Se(Ct), v.scroll.rec = 0), v.revert(!1, !0), Oe = Je(), kt && (te = -1, kt.restart(!0)), Ze = 0, n && I && (n._initted || pr) && n.progress() !== pr && n.progress(pr || 0, !0).render(n.time(), !0, !0), (Ne || We !== v.progress || g || d) && (n && !I && n.totalProgress(g && re < -1e-3 && !We ? R.utils.normalize(re, pe, 0) : We, !0), v.progress = Ne || (Ge - re) / ke === We ? 0 : We), c && p && (Me._pinOffset = Math.round(v.progress * bt)), H && H.invalidate(), isNaN(Fn) || (Fn -= R.getProperty(b, E.p), pi -= R.getProperty(it, E.p), Pi(b, E, Fn), Pi(Ke, E, Fn - (U || 0)), Pi(it, E, pi), Pi(nt, E, pi - (U || 0))), Ne && !lt && v.update(), l && !lt && !Jt && (Jt = !0, l(v), Jt = !1);
      }
    }, v.getVelocity = function() {
      return (Se() - rt) / (Je() - Xn) * 1e3 || 0;
    }, v.endAnimation = function() {
      Nn(v.callbackAnimation), n && (H ? H.progress(1) : n.paused() ? I || Nn(n, v.direction < 0, 1) : Nn(n, n.reversed()));
    }, v.labelToScroll = function(D) {
      return n && n.labels && (re || v.refresh() || re) + n.labels[D] / n.duration() * ke || 0;
    }, v.getTrailing = function(D) {
      var W = q.indexOf(v), F = v.direction > 0 ? q.slice(0, W).reverse() : q.slice(W + 1);
      return (Pt(D) ? F.filter(function(U) {
        return U.vars.preventOverlaps === D;
      }) : F).filter(function(U) {
        return v.direction > 0 ? U.end <= re : U.start >= pe;
      });
    }, v.update = function(D, W, F) {
      if (!(g && !F && !D)) {
        var U = lt === !0 ? Ct : v.scroll(), Ae = D ? 0 : (U - re) / ke, K = Ae < 0 ? 0 : Ae > 1 ? 1 : Ae || 0, me = v.progress, Ne, ve, le, se, pt, de, Qe, It;
        if (W && (rt = Ge, Ge = g ? Se() : U, w && (dr = rr, rr = n && !I ? n.totalProgress() : K)), x && c && !Ze && !Ti && Wt && (!K && re < U + (U - rt) / (Je() - Xn) * x ? K = 1e-4 : K === 1 && pe > U + (U - rt) / (Je() - Xn) * x && (K = 0.9999)), K !== me && v.enabled) {
          if (Ne = v.isActive = !!K && K < 1, ve = !!me && me < 1, de = Ne !== ve, pt = de || !!K != !!me, v.direction = K > me ? 1 : -1, v.progress = K, pt && !Ze && (le = K && !me ? 0 : K === 1 ? 1 : me === 1 ? 2 : 3, I && (se = !de && Y[le + 1] !== "none" && Y[le + 1] || Y[le], It = n && (se === "complete" || se === "reset" || se in n))), m && (de || It) && (It || h || !n) && (dt(m) ? m(v) : v.getTrailing(m).forEach(function(L) {
            return L.endAnimation();
          })), I || (H && !Ze && !Ti ? (H._dp._time - H._start !== H._time && H.render(H._dp._time - H._start), H.resetTo ? H.resetTo("totalProgress", K, n._tTime / n._tDur) : (H.vars.totalProgress = K, H.invalidate().restart())) : n && n.totalProgress(K, !!(Ze && (Oe || D)))), c) {
            if (D && p && (Me.style[p + E.os2] = zt), !X)
              st(Vn(He + bt * K));
            else if (pt) {
              if (Qe = !D && K > me && pe + 1 > U && U + 1 >= ur(M, E), C)
                if (!D && (Ne || Qe)) {
                  var Fe = vr(c, !0), y = U - re;
                  ra(c, _e, Fe.top + (E === Ie ? y : 0) + ze, Fe.left + (E === Ie ? 0 : y) + ze);
                } else
                  ra(c, Me);
              Cn(Ne || Qe ? hr : br), tr && K < 1 && Ne || st(He + (K === 1 && !Qe ? bt : 0));
            }
          }
          w && !Ue.tween && !Ze && !Ti && kt.restart(!0), o && (de || P && K && (K < 1 || !gs)) && hi(o.targets).forEach(function(L) {
            return L.classList[Ne || P ? "add" : "remove"](o.className);
          }), s && !I && !D && s(v), pt && !Ze ? (I && (It && (se === "complete" ? n.pause().totalProgress(1) : se === "reset" ? n.restart(!0).pause() : se === "restart" ? n.restart(!0) : n[se]()), s && s(v)), (de || !gs) && (f && de && vs(v, f), z[le] && vs(v, z[le]), P && (K === 1 ? v.kill(!1, 1) : z[le] = 0), de || (le = K === 1 ? 1 : 3, z[le] && vs(v, z[le]))), T && !Ne && Math.abs(v.getVelocity()) > (Wn(T) ? T : 2500) && (Nn(v.callbackAnimation), H ? H.progress(1) : Nn(n, se === "reverse" ? 1 : !K, 1))) : I && s && !Ze && s(v);
        }
        if (kr) {
          var A = g ? U / g.duration() * (g._caScrollDist || 0) : U;
          Sr(A + (b._isFlipped ? 1 : 0)), kr(A);
        }
        Er && Er(-U / g.duration() * (g._caScrollDist || 0));
      }
    }, v.enable = function(D, W) {
      v.enabled || (v.enabled = !0, Xe(M, "resize", Un), V || Xe(M, "scroll", _n), ae && Xe(a, "refreshInit", ae), D !== !1 && (v.progress = We = 0, Ge = rt = te = Se()), W !== !1 && v.refresh());
    }, v.getTween = function(D) {
      return D && Ue ? Ue.tween : H;
    }, v.setPositions = function(D, W, F, U) {
      if (g) {
        var Ae = g.scrollTrigger, K = g.duration(), me = Ae.end - Ae.start;
        D = Ae.start + me * D / K, W = Ae.start + me * W / K;
      }
      v.refresh(!1, !1, {
        start: Ho(D, F && !!v._startClamp),
        end: Ho(W, F && !!v._endClamp)
      }, U), v.update();
    }, v.adjustPinSpacing = function(D) {
      if (ge && D) {
        var W = ge.indexOf(E.d) + 1;
        ge[W] = parseFloat(ge[W]) + D + ze, ge[1] = parseFloat(ge[1]) + D + ze, Cn(ge);
      }
    }, v.disable = function(D, W) {
      if (v.enabled && (D !== !1 && v.revert(!0, !0), v.enabled = v.isActive = !1, W || H && H.pause(), Ct = 0, Le && (Le.uncache = 1), ae && Ye(a, "refreshInit", ae), kt && (kt.pause(), Ue.tween && Ue.tween.kill() && (Ue.tween = 0)), !V)) {
        for (var F = q.length; F--; )
          if (q[F].scroller === M && q[F] !== v)
            return;
        Ye(M, "resize", Un), V || Ye(M, "scroll", _n);
      }
    }, v.kill = function(D, W) {
      v.disable(D, W), H && !W && H.kill(), u && delete Hs[u];
      var F = q.indexOf(v);
      F >= 0 && q.splice(F, 1), F === ft && Ii > 0 && ft--, F = 0, q.forEach(function(U) {
        return U.scroller === v.scroller && (F = 1);
      }), F || lt || (v.scroll.rec = 0), n && (n.scrollTrigger = null, D && n.revert({
        kill: !1
      }), W || n.kill()), Ke && [Ke, nt, b, it].forEach(function(U) {
        return U.parentNode && U.parentNode.removeChild(U);
      }), ii === v && (ii = 0), c && (Le && (Le.uncache = 1), F = 0, q.forEach(function(U) {
        return U.pin === c && F++;
      }), F || (Le.spacer = 0)), t.onKill && t.onKill(v);
    }, q.push(v), v.enable(!1, !1), qt && qt(v), n && n.add && !ke) {
      var ne = v.update;
      v.update = function() {
        v.update = ne, re || pe || v.refresh();
      }, R.delayedCall(0.01, v.update), ke = 0.01, re = pe = 0;
    } else
      v.refresh();
    c && Sl();
  }, a.register = function(t) {
    return gn || (R = t || Tu(), xu() && window.document && a.enable(), gn = $n), gn;
  }, a.defaults = function(t) {
    if (t)
      for (var n in t)
        ki[n] = t[n];
    return ki;
  }, a.disable = function(t, n) {
    $n = 0, q.forEach(function(s) {
      return s[n ? "kill" : "disable"](t);
    }), Ye(j, "wheel", _n), Ye(Te, "scroll", _n), clearInterval(xi), Ye(Te, "touchcancel", sr), Ye(_e, "touchstart", sr), bi(Ye, Te, "pointerdown,touchstart,mousedown", qo), bi(Ye, Te, "pointerup,touchend,mouseup", Ko), Ki.kill(), wi(Ye);
    for (var i = 0; i < Q.length; i += 3)
      Si(Ye, Q[i], Q[i + 1]), Si(Ye, Q[i], Q[i + 2]);
  }, a.enable = function() {
    if (j = window, Te = document, Zt = Te.documentElement, _e = Te.body, R && (hi = R.utils.toArray, jn = R.utils.clamp, Us = R.core.context || sr, ps = R.core.suppressOverwrites || sr, mo = j.history.scrollRestoration || "auto", qs = j.pageYOffset, R.core.globals("ScrollTrigger", a), _e)) {
      $n = 1, kn = document.createElement("div"), kn.style.height = "100vh", kn.style.position = "absolute", Mu(), ml(), Pe.register(R), a.isTouch = Pe.isTouch, Pr = Pe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ws = Pe.isTouch === 1, Xe(j, "wheel", _n), pu = [j, Te, Zt, _e], R.matchMedia ? (a.matchMedia = function(u) {
        var f = R.matchMedia(), l;
        for (l in u)
          f.add(l, u[l]);
        return f;
      }, R.addEventListener("matchMediaInit", function() {
        return bo();
      }), R.addEventListener("matchMediaRevert", function() {
        return Pu();
      }), R.addEventListener("matchMedia", function() {
        Qr(0, 1), ln("matchMedia");
      }), R.matchMedia("(orientation: portrait)", function() {
        return ys(), ys;
      })) : console.warn("Requires GSAP 3.11.0 or later"), ys(), Xe(Te, "scroll", _n);
      var t = _e.style, n = t.borderTopStyle, i = R.core.Animation.prototype, s, o;
      for (i.revert || Object.defineProperty(i, "revert", {
        value: function() {
          return this.time(-0.01, !0);
        }
      }), t.borderTopStyle = "solid", s = vr(_e), Ie.m = Math.round(s.top + Ie.sc()) || 0, ht.m = Math.round(s.left + ht.sc()) || 0, n ? t.borderTopStyle = n : t.removeProperty("border-top-style"), xi = setInterval(Jo, 250), R.delayedCall(0.5, function() {
        return Ti = 0;
      }), Xe(Te, "touchcancel", sr), Xe(_e, "touchstart", sr), bi(Xe, Te, "pointerdown,touchstart,mousedown", qo), bi(Xe, Te, "pointerup,touchend,mouseup", Ko), Vs = R.utils.checkPrefix("transform"), Li.push(Vs), gn = Je(), Ki = R.delayedCall(0.2, Qr).pause(), mn = [Te, "visibilitychange", function() {
        var u = j.innerWidth, f = j.innerHeight;
        Te.hidden ? (Wo = u, Uo = f) : (Wo !== u || Uo !== f) && Un();
      }, Te, "DOMContentLoaded", Qr, j, "load", Qr, j, "resize", Un], wi(Xe), q.forEach(function(u) {
        return u.enable(0, 1);
      }), o = 0; o < Q.length; o += 3)
        Si(Ye, Q[o], Q[o + 1]), Si(Ye, Q[o], Q[o + 2]);
    }
  }, a.config = function(t) {
    "limitCallbacks" in t && (gs = !!t.limitCallbacks);
    var n = t.syncInterval;
    n && clearInterval(xi) || (xi = n) && setInterval(Jo, n), "ignoreMobileResize" in t && (Ws = a.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (wi(Ye) || wi(Xe, t.autoRefreshEvents || "none"), mu = (t.autoRefreshEvents + "").indexOf("resize") === -1);
  }, a.scrollerProxy = function(t, n) {
    var i = gt(t), s = Q.indexOf(i), o = un(i);
    ~s && Q.splice(s, o ? 6 : 2), n && (o ? lr.unshift(j, n, _e, n, Zt, n) : lr.unshift(i, n));
  }, a.clearMatchMedia = function(t) {
    q.forEach(function(n) {
      return n._ctx && n._ctx.query === t && n._ctx.kill(!0, !0);
    });
  }, a.isInViewport = function(t, n, i) {
    var s = (Pt(t) ? gt(t) : t).getBoundingClientRect(), o = s[i ? rn : nn] * n || 0;
    return i ? s.right - o > 0 && s.left + o < j.innerWidth : s.bottom - o > 0 && s.top + o < j.innerHeight;
  }, a.positionInViewport = function(t, n, i) {
    Pt(t) && (t = gt(t));
    var s = t.getBoundingClientRect(), o = s[i ? rn : nn], u = n == null ? o / 2 : n in Ji ? Ji[n] * o : ~n.indexOf("%") ? parseFloat(n) * o / 100 : parseFloat(n) || 0;
    return i ? (s.left + u) / j.innerWidth : (s.top + u) / j.innerHeight;
  }, a.killAll = function(t) {
    if (q.slice(0).forEach(function(i) {
      return i.vars.id !== "ScrollSmoother" && i.kill();
    }), t !== !0) {
      var n = fn.killAll || [];
      fn = {}, n.forEach(function(i) {
        return i();
      });
    }
  }, a;
}();
Z.version = "3.12.5";
Z.saveStyles = function(a) {
  return a ? hi(a).forEach(function(e) {
    if (e && e.style) {
      var r = Et.indexOf(e);
      r >= 0 && Et.splice(r, 5), Et.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), R.core.getCache(e), Us());
    }
  }) : Et;
};
Z.revert = function(a, e) {
  return bo(!a, e);
};
Z.create = function(a, e) {
  return new Z(a, e);
};
Z.refresh = function(a) {
  return a ? Un() : (gn || Z.register()) && Qr(!0);
};
Z.update = function(a) {
  return ++Q.cache && xr(a === !0 ? 2 : 0);
};
Z.clearScrollMemory = Ou;
Z.maxScroll = function(a, e) {
  return ur(a, e ? ht : Ie);
};
Z.getScrollFunc = function(a, e) {
  return Br(gt(a), e ? ht : Ie);
};
Z.getById = function(a) {
  return Hs[a];
};
Z.getAll = function() {
  return q.filter(function(a) {
    return a.vars.id !== "ScrollSmoother";
  });
};
Z.isScrolling = function() {
  return !!Wt;
};
Z.snapDirectional = wo;
Z.addEventListener = function(a, e) {
  var r = fn[a] || (fn[a] = []);
  ~r.indexOf(e) || r.push(e);
};
Z.removeEventListener = function(a, e) {
  var r = fn[a], t = r && r.indexOf(e);
  t >= 0 && r.splice(t, 1);
};
Z.batch = function(a, e) {
  var r = [], t = {}, n = e.interval || 0.016, i = e.batchMax || 1e9, s = function(f, l) {
    var h = [], _ = [], c = R.delayedCall(n, function() {
      l(h, _), h = [], _ = [];
    }).pause();
    return function(p) {
      h.length || c.restart(!0), h.push(p.trigger), _.push(p), i <= h.length && c.progress(1);
    };
  }, o;
  for (o in e)
    t[o] = o.substr(0, 2) === "on" && dt(e[o]) && o !== "onRefreshInit" ? s(o, e[o]) : e[o];
  return dt(i) && (i = i(), Xe(Z, "refresh", function() {
    return i = e.batchMax();
  })), hi(a).forEach(function(u) {
    var f = {};
    for (o in t)
      f[o] = t[o];
    f.trigger = u, r.push(Z.create(f));
  }), r;
};
var ia = function(e, r, t, n) {
  return r > n ? e(n) : r < 0 && e(0), t > n ? (n - r) / (t - r) : t < 0 ? r / (r - t) : 1;
}, Ts = function a(e, r) {
  r === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (Pe.isTouch ? " pinch-zoom" : "") : "none", e === Zt && a(_e, r);
}, Oi = {
  auto: 1,
  scroll: 1
}, Ol = function(e) {
  var r = e.event, t = e.target, n = e.axis, i = (r.changedTouches ? r.changedTouches[0] : r).target, s = i._gsap || R.core.getCache(i), o = Je(), u;
  if (!s._isScrollT || o - s._isScrollT > 2e3) {
    for (; i && i !== _e && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Oi[(u = Xt(i)).overflowY] || Oi[u.overflowX])); )
      i = i.parentNode;
    s._isScroll = i && i !== t && !un(i) && (Oi[(u = Xt(i)).overflowY] || Oi[u.overflowX]), s._isScrollT = o;
  }
  (s._isScroll || n === "x") && (r.stopPropagation(), r._gsapAllow = !0);
}, Du = function(e, r, t, n) {
  return Pe.create({
    target: e,
    capture: !0,
    debounce: !1,
    lockAxis: !0,
    type: r,
    onWheel: n = n && Ol,
    onPress: n,
    onDrag: n,
    onScroll: n,
    onEnable: function() {
      return t && Xe(Te, Pe.eventTypes[0], oa, !1, !0);
    },
    onDisable: function() {
      return Ye(Te, Pe.eventTypes[0], oa, !0);
    }
  });
}, Ml = /(input|label|select|textarea)/i, sa, oa = function(e) {
  var r = Ml.test(e.target.tagName);
  (r || sa) && (e._gsapAllow = !0, sa = r);
}, Al = function(e) {
  Hr(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
  var r = e, t = r.normalizeScrollX, n = r.momentum, i = r.allowNestedScroll, s = r.onRelease, o, u, f = gt(e.target) || Zt, l = R.core.globals().ScrollSmoother, h = l && l.get(), _ = Pr && (e.content && gt(e.content) || h && e.content !== !1 && !h.smooth() && h.content()), c = Br(f, Ie), p = Br(f, ht), d = 1, x = (Pe.isTouch && j.visualViewport ? j.visualViewport.scale * j.visualViewport.width : j.outerWidth) / j.innerWidth, k = 0, S = dt(n) ? function() {
    return n(o);
  } : function() {
    return n || 2.8;
  }, P, w, C = Du(f, e.type, !0, i), O = function() {
    return w = !1;
  }, g = sr, T = sr, m = function() {
    u = ur(f, Ie), T = jn(Pr ? 1 : 0, u), t && (g = jn(0, ur(f, ht))), P = sn;
  }, E = function() {
    _._gsap.y = Vn(parseFloat(_._gsap.y) + c.offset) + "px", _.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(_._gsap.y) + ", 0, 1)", c.offset = c.cacheID = 0;
  }, I = function() {
    if (w) {
      requestAnimationFrame(O);
      var J = Vn(o.deltaY / 2), oe = T(c.v - J);
      if (_ && oe !== c.v + c.offset) {
        c.offset = oe - c.v;
        var v = Vn((parseFloat(_ && _._gsap.y) || 0) - c.offset);
        _.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + v + ", 0, 1)", _._gsap.y = v + "px", c.cacheID = Q.cache, xr();
      }
      return !0;
    }
    c.offset && E(), w = !0;
  }, M, B, V, X, z = function() {
    m(), M.isActive() && M.vars.scrollY > u && (c() > u ? M.progress(1) && c(u) : M.resetTo("scrollY", u));
  };
  return _ && R.set(_, {
    y: "+=0"
  }), e.ignoreCheck = function(Y) {
    return Pr && Y.type === "touchmove" && I() || d > 1.05 && Y.type !== "touchstart" || o.isGesturing || Y.touches && Y.touches.length > 1;
  }, e.onPress = function() {
    w = !1;
    var Y = d;
    d = Vn((j.visualViewport && j.visualViewport.scale || 1) / x), M.pause(), Y !== d && Ts(f, d > 1.01 ? !0 : t ? !1 : "x"), B = p(), V = c(), m(), P = sn;
  }, e.onRelease = e.onGestureStart = function(Y, J) {
    if (c.offset && E(), !J)
      X.restart(!0);
    else {
      Q.cache++;
      var oe = S(), v, ae;
      t && (v = p(), ae = v + oe * 0.05 * -Y.velocityX / 0.227, oe *= ia(p, v, ae, ur(f, ht)), M.vars.scrollX = g(ae)), v = c(), ae = v + oe * 0.05 * -Y.velocityY / 0.227, oe *= ia(c, v, ae, ur(f, Ie)), M.vars.scrollY = T(ae), M.invalidate().duration(oe).play(0.01), (Pr && M.vars.scrollY >= u || v >= u - 1) && R.to({}, {
        onUpdate: z,
        duration: oe
      });
    }
    s && s(Y);
  }, e.onWheel = function() {
    M._ts && M.pause(), Je() - k > 1e3 && (P = 0, k = Je());
  }, e.onChange = function(Y, J, oe, v, ae) {
    if (sn !== P && m(), J && t && p(g(v[2] === J ? B + (Y.startX - Y.x) : p() + J - v[1])), oe) {
      c.offset && E();
      var fe = ae[2] === oe, wt = fe ? V + Y.startY - Y.y : c() + oe - ae[1], te = T(wt);
      fe && wt !== te && (V += te - wt), c(te);
    }
    (oe || J) && xr();
  }, e.onEnable = function() {
    Ts(f, t ? !1 : "x"), Z.addEventListener("refresh", z), Xe(j, "resize", z), c.smooth && (c.target.style.scrollBehavior = "auto", c.smooth = p.smooth = !1), C.enable();
  }, e.onDisable = function() {
    Ts(f, !0), Ye(j, "resize", z), Z.removeEventListener("refresh", z), C.kill();
  }, e.lockAxis = e.lockAxis !== !1, o = new Pe(e), o.iOS = Pr, Pr && !c() && c(1), Pr && R.ticker.add(sr), X = o._dc, M = R.to(o, {
    ease: "power4",
    paused: !0,
    inherit: !1,
    scrollX: t ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: Au(c, c(), function() {
        return M.pause();
      })
    },
    onUpdate: xr,
    onComplete: X.vars.onComplete
  }), o;
};
Z.sort = function(a) {
  return q.sort(a || function(e, r) {
    return (e.vars.refreshPriority || 0) * -1e6 + e.start - (r.start + (r.vars.refreshPriority || 0) * -1e6);
  });
};
Z.observe = function(a) {
  return new Pe(a);
};
Z.normalizeScroll = function(a) {
  if (typeof a > "u")
    return ut;
  if (a === !0 && ut)
    return ut.enable();
  if (a === !1) {
    ut && ut.kill(), ut = a;
    return;
  }
  var e = a instanceof Pe ? a : Al(a);
  return ut && ut.target === e.target && ut.kill(), un(e.target) && (ut = e), e;
};
Z.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: $s,
  _inputObserver: Du,
  _scrollers: Q,
  _proxies: lr,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function() {
      Wt || ln("scrollStart"), Wt = Je();
    },
    // a way to get the _refreshing value in Observer
    ref: function() {
      return Ze;
    }
  }
};
Tu() && R.registerPlugin(Z);
au.registerPlugin(Z);
var Qs;
((a) => {
  function e(r, t, n, i = 0, s = !1) {
    const o = Z.create({
      trigger: r,
      scroller: t,
      start: () => `top ${window.innerHeight - i}`,
      end: "bottom top",
      onEnter: async () => {
        n.play(), o.disable(!1);
      },
      markers: s
    });
  }
  a.oneWayScrollTrigger = e;
})(Qs || (Qs = {}));
var qr;
((a) => {
  a.chain = bs.chain, a.slideX = Gn.slideX, a.slideY = Gn.slideY, a.slideXY = Gn.slideXY, a.fadeIn = Bi.fadeIn, a.fadeOut = Bi.fadeOut, a.scale = Yi.scale, a.pulse = Yi.pulse, a.mask = Ss.mask, a.oneWayScrollTrigger = Qs.oneWayScrollTrigger;
})(qr || (qr = {}));
export {
  qr as Animations
};
