var Eo = Object.defineProperty;
var ms = (n) => {
  throw TypeError(n);
};
var Co = (n, e, t) => e in n ? Eo(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var vn = (n, e, t) => Co(n, typeof e != "symbol" ? e + "" : e, t), da = (n, e, t) => e.has(n) || ms("Cannot " + t);
var y = (n, e, t) => (da(n, e, "read from private field"), t ? t.call(n) : e.get(n)), be = (n, e, t) => e.has(n) ? ms("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Se = (n, e, t, i) => (da(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), Ke = (n, e, t) => (da(n, e, "access private method"), t);
const gt = Symbol(), Zs = "http://www.w3.org/1999/xhtml", So = "http://www.w3.org/2000/svg", xo = "@attach", To = !1;
var za = Array.isArray, Lo = Array.prototype.indexOf, Qi = Array.prototype.includes, ta = Array.from, Js = Object.defineProperty, si = Object.getOwnPropertyDescriptor, $s = Object.getOwnPropertyDescriptors, wo = Object.prototype, Mo = Array.prototype, Xa = Object.getPrototypeOf, gs = Object.isExtensible;
function ur(n) {
  return typeof n == "function";
}
const Ee = () => {
};
function Oo(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function el() {
  var n, e, t = new Promise((i, r) => {
    n = i, e = r;
  });
  return { promise: t, resolve: n, reject: e };
}
const Rt = 2, Zi = 4, na = 8, Wa = 1 << 24, Mn = 16, yn = 32, oi = 64, Aa = 128, un = 512, bt = 1024, Tt = 2048, _n = 4096, Pt = 8192, Qt = 16384, Pi = 32768, Ea = 1 << 25, Yn = 65536, Ca = 1 << 17, Do = 1 << 18, ir = 1 << 19, Ro = 1 << 20, wn = 1 << 25, Di = 65536, Sa = 1 << 21, Ir = 1 << 22, li = 1 << 23, On = Symbol("$state"), tl = Symbol("legacy props"), _o = Symbol(""), jn = new class extends Error {
  constructor() {
    super(...arguments);
    vn(this, "name", "StaleReactionError");
    vn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var qs;
const nl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((qs = globalThis.document) != null && qs.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Ka(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Po() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ko(n, e, t) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Fo(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bo() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Uo(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function No() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ho(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Vo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function jo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Go() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function zo() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Xo() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Wo() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ko() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function il(n) {
  return n === this.v;
}
function qa(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function rl(n) {
  return !qa(n, this.v);
}
let qo = !1, ft = null;
function Ji(n) {
  ft = n;
}
function Oe(n) {
  return (
    /** @type {T} */
    sl().get(n)
  );
}
function me(n, e) {
  return sl().set(n, e), e;
}
function Ye(n, e = !1, t) {
  ft = {
    p: ft,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    r: (
      /** @type {Effect} */
      Re
    ),
    l: null
  };
}
function Qe(n) {
  var e = (
    /** @type {ComponentContext} */
    ft
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      Ol(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, ft = e.p, n ?? /** @type {T} */
  {};
}
function al() {
  return !0;
}
function sl(n) {
  return ft === null && Ka(), ft.c ?? (ft.c = new Map(Yo(ft) || void 0));
}
function Yo(n) {
  let e = n.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
let bi = [];
function ll() {
  var n = bi;
  bi = [], Oo(n);
}
function qn(n) {
  if (bi.length === 0 && !mr) {
    var e = bi;
    queueMicrotask(() => {
      e === bi && ll();
    });
  }
  bi.push(n);
}
function Qo() {
  for (; bi.length > 0; )
    ll();
}
function ol(n) {
  var e = Re;
  if (e === null)
    return we.f |= li, n;
  if (!(e.f & Pi) && !(e.f & Zi))
    throw n;
  ai(n, e);
}
function ai(n, e) {
  for (; e !== null; ) {
    if (e.f & Aa) {
      if (!(e.f & Pi))
        throw n;
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    }
    e = e.parent;
  }
  throw n;
}
const Zo = -7169;
function lt(n, e) {
  n.f = n.f & Zo | e;
}
function Ya(n) {
  n.f & un || n.deps === null ? lt(n, bt) : lt(n, _n);
}
function ul(n) {
  if (n !== null)
    for (const e of n)
      !(e.f & Rt) || !(e.f & Di) || (e.f ^= Di, ul(
        /** @type {Derived} */
        e.deps
      ));
}
function dl(n, e, t) {
  n.f & Tt ? e.add(n) : n.f & _n && t.add(n), ul(n.deps), lt(n, bt);
}
function cl(n, e, t) {
  if (n == null)
    return e(void 0), Ee;
  const i = ui(
    () => n.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const Bi = [];
function xa(n, e = Ee) {
  let t = null;
  const i = /* @__PURE__ */ new Set();
  function r(u) {
    if (qa(n, u) && (n = u, t)) {
      const o = !Bi.length;
      for (const d of i)
        d[1](), Bi.push(d, n);
      if (o) {
        for (let d = 0; d < Bi.length; d += 2)
          Bi[d][0](Bi[d + 1]);
        Bi.length = 0;
      }
    }
  }
  function a(u) {
    r(u(
      /** @type {T} */
      n
    ));
  }
  function l(u, o = Ee) {
    const d = [u, o];
    return i.add(d), i.size === 1 && (t = e(r, a) || Ee), u(
      /** @type {T} */
      n
    ), () => {
      i.delete(d), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: a, subscribe: l };
}
function Jo(n) {
  let e;
  return cl(n, (t) => e = t)(), e;
}
let Ta = !1, Pr = !1, La = Symbol();
function Qa(n, e, t) {
  const i = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ El(void 0),
    unsubscribe: Ee
  });
  if (i.store !== n && !(La in t))
    if (i.unsubscribe(), i.store = n ?? null, n == null)
      i.source.v = void 0, i.unsubscribe = Ee;
    else {
      var r = !0;
      i.unsubscribe = cl(n, (a) => {
        r ? i.source.v = a : X(i.source, a);
      }), r = !1;
    }
  return n && La in t ? Jo(n) : s(i.source);
}
function Kr(n, e) {
  return $o(n, e), e;
}
function ia() {
  const n = {};
  function e() {
    Mr(() => {
      for (var t in n)
        n[t].unsubscribe();
      Js(n, La, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function $o(n, e) {
  Ta = !0;
  try {
    n.set(e);
  } finally {
    Ta = !1;
  }
}
function eu(n) {
  var e = Pr;
  try {
    return Pr = !1, [n(), Pr];
  } finally {
    Pr = e;
  }
}
const vi = /* @__PURE__ */ new Set();
let ue = null, St = null, wa = null, mr = !1, ca = !1, Hi = null, Hr = null;
var Is = 0;
let tu = 1;
var zi, Xi, Ei, Gn, Sn, Er, Kt, Cr, ii, zn, xn, Wi, Ki, Ci, ht, Vr, fl, jr, Ma, Gr, nu;
const Jr = class Jr {
  constructor() {
    be(this, ht);
    vn(this, "id", tu++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    vn(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    vn(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    be(this, zi, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    be(this, Xi, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    be(this, Ei, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    be(this, Gn, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    be(this, Sn, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    be(this, Er, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    be(this, Kt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    be(this, Cr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    be(this, ii, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    be(this, zn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    be(this, xn, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    be(this, Wi, /* @__PURE__ */ new Set());
    vn(this, "is_fork", !1);
    be(this, Ki, !1);
    /** @type {Set<Batch>} */
    be(this, Ci, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    y(this, xn).has(e) || y(this, xn).set(e, { d: [], m: [] }), y(this, Wi).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, t = (i) => this.schedule(i)) {
    var i = y(this, xn).get(e);
    if (i) {
      y(this, xn).delete(e);
      for (var r of i.d)
        lt(r, Tt), t(r);
      for (r of i.m)
        lt(r, _n), t(r);
    }
    y(this, Wi).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, t, i = !1) {
    e.v !== gt && !this.previous.has(e) && this.previous.set(e, e.v), e.f & li || (this.current.set(e, [t, i]), St == null || St.set(e, t)), this.is_fork || (e.v = t);
  }
  activate() {
    ue = this;
  }
  deactivate() {
    ue = null, St = null;
  }
  flush() {
    try {
      ca = !0, ue = this, Ke(this, ht, jr).call(this);
    } finally {
      Is = 0, wa = null, Hi = null, Hr = null, ca = !1, ue = null, St = null, Li.clear();
    }
  }
  discard() {
    for (const e of y(this, Xi)) e(this);
    y(this, Xi).clear(), y(this, Ei).clear(), vi.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    y(this, Cr).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, t) {
    let i = y(this, Gn).get(t) ?? 0;
    if (y(this, Gn).set(t, i + 1), e) {
      let r = y(this, Sn).get(t) ?? 0;
      y(this, Sn).set(t, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(e, t, i) {
    let r = y(this, Gn).get(t) ?? 0;
    if (r === 1 ? y(this, Gn).delete(t) : y(this, Gn).set(t, r - 1), e) {
      let a = y(this, Sn).get(t) ?? 0;
      a === 1 ? y(this, Sn).delete(t) : y(this, Sn).set(t, a - 1);
    }
    y(this, Ki) || i || (Se(this, Ki, !0), qn(() => {
      Se(this, Ki, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, t) {
    for (const i of e)
      y(this, ii).add(i);
    for (const i of t)
      y(this, zn).add(i);
    e.clear(), t.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    y(this, zi).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    y(this, Xi).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(e) {
    y(this, Ei).add(e);
  }
  run_fork_commit_callbacks() {
    for (const e of y(this, Ei)) e(this);
    y(this, Ei).clear();
  }
  settled() {
    return (y(this, Er) ?? Se(this, Er, el())).promise;
  }
  static ensure() {
    if (ue === null) {
      const e = ue = new Jr();
      ca || (vi.add(ue), mr || qn(() => {
        ue === e && e.flush();
      }));
    }
    return ue;
  }
  apply() {
    {
      St = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    var r;
    if (wa = e, (r = e.b) != null && r.is_pending && e.f & (Zi | na | Wa) && !(e.f & Pi)) {
      e.b.defer_effect(e);
      return;
    }
    for (var t = e; t.parent !== null; ) {
      t = t.parent;
      var i = t.f;
      if (Hi !== null && t === Re && (we === null || !(we.f & Rt)) && !Ta)
        return;
      if (i & (oi | yn)) {
        if (!(i & bt))
          return;
        t.f ^= bt;
      }
    }
    y(this, Kt).push(t);
  }
};
zi = new WeakMap(), Xi = new WeakMap(), Ei = new WeakMap(), Gn = new WeakMap(), Sn = new WeakMap(), Er = new WeakMap(), Kt = new WeakMap(), Cr = new WeakMap(), ii = new WeakMap(), zn = new WeakMap(), xn = new WeakMap(), Wi = new WeakMap(), Ki = new WeakMap(), Ci = new WeakMap(), ht = new WeakSet(), Vr = function() {
  return this.is_fork || y(this, Sn).size > 0;
}, fl = function() {
  for (const i of y(this, Ci))
    for (const r of y(i, Sn).keys()) {
      for (var e = !1, t = r; t.parent !== null; ) {
        if (y(this, xn).has(t)) {
          e = !0;
          break;
        }
        t = t.parent;
      }
      if (!e)
        return !0;
    }
  return !1;
}, jr = function() {
  var u, o;
  if (Is++ > 1e3 && (vi.delete(this), ru()), !Ke(this, ht, Vr).call(this)) {
    for (const d of y(this, ii))
      y(this, zn).delete(d), lt(d, Tt), this.schedule(d);
    for (const d of y(this, zn))
      lt(d, _n), this.schedule(d);
  }
  const e = y(this, Kt);
  Se(this, Kt, []), this.apply();
  var t = Hi = [], i = [], r = Hr = [];
  for (const d of e)
    try {
      Ke(this, ht, Ma).call(this, d, t, i);
    } catch (c) {
      throw pl(d), c;
    }
  if (ue = null, r.length > 0) {
    var a = Jr.ensure();
    for (const d of r)
      a.schedule(d);
  }
  if (Hi = null, Hr = null, Ke(this, ht, Vr).call(this) || Ke(this, ht, fl).call(this)) {
    Ke(this, ht, Gr).call(this, i), Ke(this, ht, Gr).call(this, t);
    for (const [d, c] of y(this, xn))
      vl(d, c);
  } else {
    y(this, Gn).size === 0 && vi.delete(this), y(this, ii).clear(), y(this, zn).clear();
    for (const d of y(this, zi)) d(this);
    y(this, zi).clear(), bs(i), bs(t), (u = y(this, Er)) == null || u.resolve();
  }
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    ue
  );
  if (y(this, Kt).length > 0) {
    const d = l ?? (l = this);
    y(d, Kt).push(...y(this, Kt).filter((c) => !y(d, Kt).includes(c)));
  }
  l !== null && (vi.add(l), Ke(o = l, ht, jr).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ma = function(e, t, i) {
  e.f ^= bt;
  for (var r = e.first; r !== null; ) {
    var a = r.f, l = (a & (yn | oi)) !== 0, u = l && (a & bt) !== 0, o = u || (a & Pt) !== 0 || y(this, xn).has(r);
    if (!o && r.fn !== null) {
      l ? r.f ^= bt : a & Zi ? t.push(r) : Dr(r) && (a & Mn && y(this, zn).add(r), tr(r));
      var d = r.first;
      if (d !== null) {
        r = d;
        continue;
      }
    }
    for (; r !== null; ) {
      var c = r.next;
      if (c !== null) {
        r = c;
        break;
      }
      r = r.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Gr = function(e) {
  for (var t = 0; t < e.length; t += 1)
    dl(e[t], y(this, ii), y(this, zn));
}, nu = function() {
  var c, h, f;
  for (const p of vi) {
    var e = p.id < this.id, t = [];
    for (const [v, [m, g]] of this.current) {
      if (p.current.has(v)) {
        var i = (
          /** @type {[any, boolean]} */
          p.current.get(v)[0]
        );
        if (e && m !== i)
          p.current.set(v, [m, g]);
        else
          continue;
      }
      t.push(v);
    }
    var r = [...p.current.keys()].filter((v) => !this.current.has(v));
    if (r.length === 0)
      e && p.discard();
    else if (t.length > 0) {
      if (e)
        for (const v of y(this, Wi))
          p.unskip_effect(v, (m) => {
            var g;
            m.f & (Mn | Ir) ? p.schedule(m) : Ke(g = p, ht, Gr).call(g, [m]);
          });
      p.activate();
      var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
      for (var u of t)
        hl(u, r, a, l);
      l = /* @__PURE__ */ new Map();
      var o = [...p.current.keys()].filter(
        (v) => this.current.has(v) ? (
          /** @type {[any, boolean]} */
          this.current.get(v)[0] !== v
        ) : !0
      );
      for (const v of y(this, Cr))
        !(v.f & (Qt | Pt | Ca)) && Za(v, o, l) && (v.f & (Ir | Mn) ? (lt(v, Tt), p.schedule(v)) : y(p, ii).add(v));
      if (y(p, Kt).length > 0) {
        p.apply();
        for (var d of y(p, Kt))
          Ke(c = p, ht, Ma).call(c, d, [], []);
        Se(p, Kt, []);
      }
      p.deactivate();
    }
  }
  for (const p of vi)
    y(p, Ci).has(this) && (y(p, Ci).delete(this), y(p, Ci).size === 0 && !Ke(h = p, ht, Vr).call(h) && (p.activate(), Ke(f = p, ht, jr).call(f)));
};
let Ri = Jr;
function iu(n) {
  var e = mr;
  mr = !0;
  try {
    for (var t; ; ) {
      if (Qo(), ue === null)
        return (
          /** @type {T} */
          t
        );
      ue.flush();
    }
  } finally {
    mr = e;
  }
}
function ru() {
  try {
    No();
  } catch (n) {
    ai(n, wa);
  }
}
let pn = null;
function bs(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var i = n[t++];
      if (!(i.f & (Qt | Pt)) && Dr(i) && (pn = /* @__PURE__ */ new Set(), tr(i), i.deps === null && i.first === null && i.nodes === null && i.teardown === null && i.ac === null && _l(i), (pn == null ? void 0 : pn.size) > 0)) {
        Li.clear();
        for (const r of pn) {
          if (r.f & (Qt | Pt)) continue;
          const a = [r];
          let l = r.parent;
          for (; l !== null; )
            pn.has(l) && (pn.delete(l), a.push(l)), l = l.parent;
          for (let u = a.length - 1; u >= 0; u--) {
            const o = a[u];
            o.f & (Qt | Pt) || tr(o);
          }
        }
        pn.clear();
      }
    }
    pn = null;
  }
}
function hl(n, e, t, i) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const r of n.reactions) {
      const a = r.f;
      a & Rt ? hl(
        /** @type {Derived} */
        r,
        e,
        t,
        i
      ) : a & (Ir | Mn) && !(a & Tt) && Za(r, e, i) && (lt(r, Tt), Ja(
        /** @type {Effect} */
        r
      ));
    }
}
function Za(n, e, t) {
  const i = t.get(n);
  if (i !== void 0) return i;
  if (n.deps !== null)
    for (const r of n.deps) {
      if (Qi.call(e, r))
        return !0;
      if (r.f & Rt && Za(
        /** @type {Derived} */
        r,
        e,
        t
      ))
        return t.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return t.set(n, !1), !1;
}
function Ja(n) {
  ue.schedule(n);
}
function vl(n, e) {
  if (!(n.f & yn && n.f & bt)) {
    n.f & Tt ? e.d.push(n) : n.f & _n && e.m.push(n), lt(n, bt);
    for (var t = n.first; t !== null; )
      vl(t, e), t = t.next;
  }
}
function pl(n) {
  lt(n, bt);
  for (var e = n.first; e !== null; )
    pl(e), e = e.next;
}
function au(n) {
  let e = 0, t = _i(0), i;
  return () => {
    es() && (s(t), sa(() => (e === 0 && (i = ui(() => n(() => gr(t)))), e += 1, () => {
      qn(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, gr(t));
      });
    })));
  };
}
var su = Yn | ir;
function lu(n, e, t, i) {
  new ou(n, e, t, i);
}
var sn, Ga, ln, Si, Vt, on, _t, qt, Xn, xi, ri, qi, Sr, xr, Wn, $r, rt, uu, du, cu, Oa, zr, Xr, Da, Ra;
class ou {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, t, i, r) {
    be(this, rt);
    /** @type {Boundary | null} */
    vn(this, "parent");
    vn(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    vn(this, "transform_error");
    /** @type {TemplateNode} */
    be(this, sn);
    /** @type {TemplateNode | null} */
    be(this, Ga, null);
    /** @type {BoundaryProps} */
    be(this, ln);
    /** @type {((anchor: Node) => void)} */
    be(this, Si);
    /** @type {Effect} */
    be(this, Vt);
    /** @type {Effect | null} */
    be(this, on, null);
    /** @type {Effect | null} */
    be(this, _t, null);
    /** @type {Effect | null} */
    be(this, qt, null);
    /** @type {DocumentFragment | null} */
    be(this, Xn, null);
    be(this, xi, 0);
    be(this, ri, 0);
    be(this, qi, !1);
    /** @type {Set<Effect>} */
    be(this, Sr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    be(this, xr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    be(this, Wn, null);
    be(this, $r, au(() => (Se(this, Wn, _i(y(this, xi))), () => {
      Se(this, Wn, null);
    })));
    var a;
    Se(this, sn, e), Se(this, ln, t), Se(this, Si, (l) => {
      var u = (
        /** @type {Effect} */
        Re
      );
      u.b = this, u.f |= Aa, i(l);
    }), this.parent = /** @type {Effect} */
    Re.b, this.transform_error = r ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((l) => l), Se(this, Vt, rr(() => {
      Ke(this, rt, Oa).call(this);
    }, su));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    dl(e, y(this, Sr), y(this, xr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!y(this, ln).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, t) {
    Ke(this, rt, Da).call(this, e, t), Se(this, xi, y(this, xi) + e), !(!y(this, Wn) || y(this, qi)) && (Se(this, qi, !0), qn(() => {
      Se(this, qi, !1), y(this, Wn) && $i(y(this, Wn), y(this, xi));
    }));
  }
  get_effect_pending() {
    return y(this, $r).call(this), s(
      /** @type {Source<number>} */
      y(this, Wn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!y(this, ln).onerror && !y(this, ln).failed)
      throw e;
    ue != null && ue.is_fork ? (y(this, on) && ue.skip_effect(y(this, on)), y(this, _t) && ue.skip_effect(y(this, _t)), y(this, qt) && ue.skip_effect(y(this, qt)), ue.on_fork_commit(() => {
      Ke(this, rt, Ra).call(this, e);
    })) : Ke(this, rt, Ra).call(this, e);
  }
}
sn = new WeakMap(), Ga = new WeakMap(), ln = new WeakMap(), Si = new WeakMap(), Vt = new WeakMap(), on = new WeakMap(), _t = new WeakMap(), qt = new WeakMap(), Xn = new WeakMap(), xi = new WeakMap(), ri = new WeakMap(), qi = new WeakMap(), Sr = new WeakMap(), xr = new WeakMap(), Wn = new WeakMap(), $r = new WeakMap(), rt = new WeakSet(), uu = function() {
  try {
    Se(this, on, Gt(() => y(this, Si).call(this, y(this, sn))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
du = function(e) {
  const t = y(this, ln).failed;
  t && Se(this, qt, Gt(() => {
    t(
      y(this, sn),
      () => e,
      () => () => {
      }
    );
  }));
}, cu = function() {
  const e = y(this, ln).pending;
  e && (this.is_pending = !0, Se(this, _t, Gt(() => e(y(this, sn)))), qn(() => {
    var t = Se(this, Xn, document.createDocumentFragment()), i = Dn();
    t.append(i), Se(this, on, Ke(this, rt, Xr).call(this, () => Gt(() => y(this, Si).call(this, i)))), y(this, ri) === 0 && (y(this, sn).before(t), Se(this, Xn, null), wi(
      /** @type {Effect} */
      y(this, _t),
      () => {
        Se(this, _t, null);
      }
    ), Ke(this, rt, zr).call(
      this,
      /** @type {Batch} */
      ue
    ));
  }));
}, Oa = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Se(this, ri, 0), Se(this, xi, 0), Se(this, on, Gt(() => {
      y(this, Si).call(this, y(this, sn));
    })), y(this, ri) > 0) {
      var e = Se(this, Xn, document.createDocumentFragment());
      is(y(this, on), e);
      const t = (
        /** @type {(anchor: Node) => void} */
        y(this, ln).pending
      );
      Se(this, _t, Gt(() => t(y(this, sn))));
    } else
      Ke(this, rt, zr).call(
        this,
        /** @type {Batch} */
        ue
      );
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {Batch} batch
 */
zr = function(e) {
  this.is_pending = !1, e.transfer_effects(y(this, Sr), y(this, xr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Xr = function(e) {
  var t = Re, i = we, r = ft;
  Pn(y(this, Vt)), cn(y(this, Vt)), Ji(y(this, Vt).ctx);
  try {
    return Ri.ensure(), e();
  } catch (a) {
    return ol(a), null;
  } finally {
    Pn(t), cn(i), Ji(r);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Da = function(e, t) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && Ke(i = this.parent, rt, Da).call(i, e, t);
    return;
  }
  Se(this, ri, y(this, ri) + e), y(this, ri) === 0 && (Ke(this, rt, zr).call(this, t), y(this, _t) && wi(y(this, _t), () => {
    Se(this, _t, null);
  }), y(this, Xn) && (y(this, sn).before(y(this, Xn)), Se(this, Xn, null)));
}, /**
 * @param {unknown} error
 */
Ra = function(e) {
  y(this, on) && (Lt(y(this, on)), Se(this, on, null)), y(this, _t) && (Lt(y(this, _t)), Se(this, _t, null)), y(this, qt) && (Lt(y(this, qt)), Se(this, qt, null));
  var t = y(this, ln).onerror;
  let i = y(this, ln).failed;
  var r = !1, a = !1;
  const l = () => {
    if (r) {
      Ko();
      return;
    }
    r = !0, a && zo(), y(this, qt) !== null && wi(y(this, qt), () => {
      Se(this, qt, null);
    }), Ke(this, rt, Xr).call(this, () => {
      Ke(this, rt, Oa).call(this);
    });
  }, u = (o) => {
    try {
      a = !0, t == null || t(o, l), a = !1;
    } catch (d) {
      ai(d, y(this, Vt) && y(this, Vt).parent);
    }
    i && Se(this, qt, Ke(this, rt, Xr).call(this, () => {
      try {
        return Gt(() => {
          var d = (
            /** @type {Effect} */
            Re
          );
          d.b = this, d.f |= Aa, i(
            y(this, sn),
            () => o,
            () => l
          );
        });
      } catch (d) {
        return ai(
          d,
          /** @type {Effect} */
          y(this, Vt).parent
        ), null;
      }
    }));
  };
  qn(() => {
    var o;
    try {
      o = this.transform_error(e);
    } catch (d) {
      ai(d, y(this, Vt) && y(this, Vt).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      u,
      /** @param {unknown} e */
      (d) => ai(d, y(this, Vt) && y(this, Vt).parent)
    ) : u(o);
  });
};
function ml(n, e, t, i) {
  const r = ra;
  var a = n.filter((f) => !f.settled);
  if (t.length === 0 && a.length === 0) {
    i(e.map(r));
    return;
  }
  var l = (
    /** @type {Effect} */
    Re
  ), u = fu(), o = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((f) => f.promise)) : null;
  function d(f) {
    u();
    try {
      i(f);
    } catch (p) {
      l.f & Qt || ai(p, l);
    }
    qr();
  }
  if (t.length === 0) {
    o.then(() => d(e.map(r)));
    return;
  }
  var c = gl();
  function h() {
    Promise.all(t.map((f) => /* @__PURE__ */ hu(f))).then((f) => d([...e.map(r), ...f])).catch((f) => ai(f, l)).finally(() => c());
  }
  o ? o.then(() => {
    u(), h(), qr();
  }) : h();
}
function fu() {
  var n = (
    /** @type {Effect} */
    Re
  ), e = we, t = ft, i = (
    /** @type {Batch} */
    ue
  );
  return function(a = !0) {
    Pn(n), cn(e), Ji(t), a && !(n.f & Qt) && (i == null || i.activate(), i == null || i.apply());
  };
}
function qr(n = !0) {
  Pn(null), cn(null), Ji(null), n && (ue == null || ue.deactivate());
}
function gl() {
  var n = (
    /** @type {Effect} */
    Re
  ), e = (
    /** @type {Boundary} */
    n.b
  ), t = (
    /** @type {Batch} */
    ue
  ), i = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(i, n), (r = !1) => {
    e.update_pending_count(-1, t), t.decrement(i, n, r);
  };
}
// @__NO_SIDE_EFFECTS__
function ra(n) {
  var e = Rt | Tt;
  return Re !== null && (Re.f |= ir), {
    ctx: ft,
    deps: null,
    effects: null,
    equals: il,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      gt
    ),
    wv: 0,
    parent: Re,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function hu(n, e, t) {
  let i = (
    /** @type {Effect | null} */
    Re
  );
  i === null && Po();
  var r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = _i(
    /** @type {V} */
    gt
  ), l = !we, u = /* @__PURE__ */ new Map();
  return Tu(() => {
    var p;
    var o = (
      /** @type {Effect} */
      Re
    ), d = el();
    r = d.promise;
    try {
      Promise.resolve(n()).then(d.resolve, d.reject).finally(qr);
    } catch (v) {
      d.reject(v), qr();
    }
    var c = (
      /** @type {Batch} */
      ue
    );
    if (l) {
      if (o.f & Pi)
        var h = gl();
      if (
        /** @type {Boundary} */
        i.b.is_rendered()
      )
        (p = u.get(c)) == null || p.reject(jn), u.delete(c);
      else {
        for (const v of u.values())
          v.reject(jn);
        u.clear();
      }
      u.set(c, d);
    }
    const f = (v, m = void 0) => {
      if (h) {
        var g = m === jn;
        h(g);
      }
      if (!(m === jn || o.f & Qt)) {
        if (c.activate(), m)
          a.f |= li, $i(a, m);
        else {
          a.f & li && (a.f ^= li), $i(a, v);
          for (const [E, D] of u) {
            if (u.delete(E), E === c) break;
            D.reject(jn);
          }
        }
        c.deactivate();
      }
    };
    d.promise.then(f, (v) => f(null, v || "unknown"));
  }), Mr(() => {
    for (const o of u.values())
      o.reject(jn);
  }), new Promise((o) => {
    function d(c) {
      function h() {
        c === r ? o(a) : d(r);
      }
      c.then(h, h);
    }
    d(r);
  });
}
// @__NO_SIDE_EFFECTS__
function ae(n) {
  const e = /* @__PURE__ */ ra(n);
  return Fl(e), e;
}
// @__NO_SIDE_EFFECTS__
function Il(n) {
  const e = /* @__PURE__ */ ra(n);
  return e.equals = rl, e;
}
function vu(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Lt(
        /** @type {Effect} */
        e[t]
      );
  }
}
function $a(n) {
  var e, t = Re, i = n.parent;
  if (!Qn && i !== null && i.f & (Qt | Pt))
    return Xo(), n.v;
  Pn(i);
  try {
    n.f &= ~Di, vu(n), e = Hl(n);
  } finally {
    Pn(t);
  }
  return e;
}
function bl(n) {
  var e = $a(n);
  if (!n.equals(e) && (n.wv = Ul(), (!(ue != null && ue.is_fork) || n.deps === null) && (ue !== null ? ue.capture(n, e, !0) : n.v = e, n.deps === null))) {
    lt(n, bt);
    return;
  }
  Qn || (St !== null ? (es() || ue != null && ue.is_fork) && St.set(n, e) : Ya(n));
}
function pu(n) {
  var e, t;
  if (n.effects !== null)
    for (const i of n.effects)
      (i.teardown || i.ac) && ((e = i.teardown) == null || e.call(i), (t = i.ac) == null || t.abort(jn), i.teardown = Ee, i.ac = null, br(i, 0), ts(i));
}
function yl(n) {
  if (n.effects !== null)
    for (const e of n.effects)
      e.teardown && tr(e);
}
let _a = /* @__PURE__ */ new Set();
const Li = /* @__PURE__ */ new Map();
let Al = !1;
function _i(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: il,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function fe(n, e) {
  const t = _i(n);
  return Fl(t), t;
}
// @__NO_SIDE_EFFECTS__
function El(n, e = !1, t = !0) {
  const i = _i(n);
  return e || (i.equals = rl), i;
}
function X(n, e, t = !1) {
  we !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!In || we.f & Ca) && al() && we.f & (Rt | Mn | Ir | Ca) && (dn === null || !Qi.call(dn, n)) && Go();
  let i = t ? De(e) : e;
  return $i(n, i, Hr);
}
function $i(n, e, t = null) {
  if (!n.equals(e)) {
    Li.set(n, Qn ? e : n.v);
    var i = Ri.ensure();
    if (i.capture(n, e), n.f & Rt) {
      const r = (
        /** @type {Derived} */
        n
      );
      n.f & Tt && $a(r), St === null && Ya(r);
    }
    n.wv = Ul(), Cl(n, Tt, t), Re !== null && Re.f & bt && !(Re.f & (yn | oi)) && (an === null ? Mu([n]) : an.push(n)), !i.is_fork && _a.size > 0 && !Al && mu();
  }
  return e;
}
function mu() {
  Al = !1;
  for (const n of _a)
    n.f & bt && lt(n, _n), Dr(n) && tr(n);
  _a.clear();
}
function gr(n) {
  X(n, n.v + 1);
}
function Cl(n, e, t) {
  var i = n.reactions;
  if (i !== null)
    for (var r = i.length, a = 0; a < r; a++) {
      var l = i[a], u = l.f, o = (u & Tt) === 0;
      if (o && lt(l, e), u & Rt) {
        var d = (
          /** @type {Derived} */
          l
        );
        St == null || St.delete(d), u & Di || (u & un && (l.f |= Di), Cl(d, _n, t));
      } else if (o) {
        var c = (
          /** @type {Effect} */
          l
        );
        u & Mn && pn !== null && pn.add(c), t !== null ? t.push(c) : Ja(c);
      }
    }
}
function De(n) {
  if (typeof n != "object" || n === null || On in n)
    return n;
  const e = Xa(n);
  if (e !== wo && e !== Mo)
    return n;
  var t = /* @__PURE__ */ new Map(), i = za(n), r = /* @__PURE__ */ fe(0), a = Mi, l = (u) => {
    if (Mi === a)
      return u();
    var o = we, d = Mi;
    cn(null), Ss(a);
    var c = u();
    return cn(o), Ss(d), c;
  };
  return i && t.set("length", /* @__PURE__ */ fe(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(u, o, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Vo();
        var c = t.get(o);
        return c === void 0 ? l(() => {
          var h = /* @__PURE__ */ fe(d.value);
          return t.set(o, h), h;
        }) : X(c, d.value, !0), !0;
      },
      deleteProperty(u, o) {
        var d = t.get(o);
        if (d === void 0) {
          if (o in u) {
            const c = l(() => /* @__PURE__ */ fe(gt));
            t.set(o, c), gr(r);
          }
        } else
          X(d, gt), gr(r);
        return !0;
      },
      get(u, o, d) {
        var p;
        if (o === On)
          return n;
        var c = t.get(o), h = o in u;
        if (c === void 0 && (!h || (p = si(u, o)) != null && p.writable) && (c = l(() => {
          var v = De(h ? u[o] : gt), m = /* @__PURE__ */ fe(v);
          return m;
        }), t.set(o, c)), c !== void 0) {
          var f = s(c);
          return f === gt ? void 0 : f;
        }
        return Reflect.get(u, o, d);
      },
      getOwnPropertyDescriptor(u, o) {
        var d = Reflect.getOwnPropertyDescriptor(u, o);
        if (d && "value" in d) {
          var c = t.get(o);
          c && (d.value = s(c));
        } else if (d === void 0) {
          var h = t.get(o), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== gt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return d;
      },
      has(u, o) {
        var f;
        if (o === On)
          return !0;
        var d = t.get(o), c = d !== void 0 && d.v !== gt || Reflect.has(u, o);
        if (d !== void 0 || Re !== null && (!c || (f = si(u, o)) != null && f.writable)) {
          d === void 0 && (d = l(() => {
            var p = c ? De(u[o]) : gt, v = /* @__PURE__ */ fe(p);
            return v;
          }), t.set(o, d));
          var h = s(d);
          if (h === gt)
            return !1;
        }
        return c;
      },
      set(u, o, d, c) {
        var S;
        var h = t.get(o), f = o in u;
        if (i && o === "length")
          for (var p = d; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var v = t.get(p + "");
            v !== void 0 ? X(v, gt) : p in u && (v = l(() => /* @__PURE__ */ fe(gt)), t.set(p + "", v));
          }
        if (h === void 0)
          (!f || (S = si(u, o)) != null && S.writable) && (h = l(() => /* @__PURE__ */ fe(void 0)), X(h, De(d)), t.set(o, h));
        else {
          f = h.v !== gt;
          var m = l(() => De(d));
          X(h, m);
        }
        var g = Reflect.getOwnPropertyDescriptor(u, o);
        if (g != null && g.set && g.set.call(c, d), !f) {
          if (i && typeof o == "string") {
            var E = (
              /** @type {Source<number>} */
              t.get("length")
            ), D = Number(o);
            Number.isInteger(D) && D >= E.v && X(E, D + 1);
          }
          gr(r);
        }
        return !0;
      },
      ownKeys(u) {
        s(r);
        var o = Reflect.ownKeys(u).filter((h) => {
          var f = t.get(h);
          return f === void 0 || f.v !== gt;
        });
        for (var [d, c] of t)
          c.v !== gt && !(d in u) && o.push(d);
        return o;
      },
      setPrototypeOf() {
        jo();
      }
    }
  );
}
function ys(n) {
  try {
    if (n !== null && typeof n == "object" && On in n)
      return n[On];
  } catch {
  }
  return n;
}
function gu(n, e) {
  return Object.is(ys(n), ys(e));
}
var As, Sl, xl, Tl, Ll;
function Iu() {
  if (As === void 0) {
    As = window, Sl = document, xl = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Tl = si(e, "firstChild").get, Ll = si(e, "nextSibling").get, gs(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), gs(t) && (t.__t = void 0);
  }
}
function Dn(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function er(n) {
  return (
    /** @type {TemplateNode | null} */
    Tl.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function wr(n) {
  return (
    /** @type {TemplateNode | null} */
    Ll.call(n)
  );
}
function Q(n, e) {
  return /* @__PURE__ */ er(n);
}
function re(n, e = !1) {
  {
    var t = /* @__PURE__ */ er(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ wr(t) : t;
  }
}
function z(n, e = 1, t = !1) {
  let i = n;
  for (; e--; )
    i = /** @type {TemplateNode} */
    /* @__PURE__ */ wr(i);
  return i;
}
function bu(n) {
  n.textContent = "";
}
function wl() {
  return !1;
}
function Ml(n, e, t) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(e ?? Zs, n, void 0)
  );
}
function yu(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, qn(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let Es = !1;
function Au() {
  Es || (Es = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        var e;
        if (!n.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            (e = t.__on_r) == null || e.call(t);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function aa(n) {
  var e = we, t = Re;
  cn(null), Pn(null);
  try {
    return n();
  } finally {
    cn(e), Pn(t);
  }
}
function Eu(n, e, t, i = t) {
  n.addEventListener(e, () => aa(t));
  const r = n.__on_r;
  r ? n.__on_r = () => {
    r(), i(!0);
  } : n.__on_r = () => i(!0), Au();
}
function Cu(n) {
  Re === null && (we === null && Uo(), Bo()), Qn && Fo();
}
function Su(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function kn(n, e) {
  var t = Re;
  t !== null && t.f & Pt && (n |= Pt);
  var i = {
    ctx: ft,
    deps: null,
    nodes: null,
    f: n | Tt | un,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: t,
    b: t && t.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  ue == null || ue.register_created_effect(i);
  var r = i;
  if (n & Zi)
    Hi !== null ? Hi.push(i) : Ri.ensure().schedule(i);
  else if (e !== null) {
    try {
      tr(i);
    } catch (l) {
      throw Lt(i), l;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
    !(r.f & ir) && (r = r.first, n & Mn && n & Yn && r !== null && (r.f |= Yn));
  }
  if (r !== null && (r.parent = t, t !== null && Su(r, t), we !== null && we.f & Rt && !(n & oi))) {
    var a = (
      /** @type {Derived} */
      we
    );
    (a.effects ?? (a.effects = [])).push(r);
  }
  return i;
}
function es() {
  return we !== null && !In;
}
function Mr(n) {
  const e = kn(na, null);
  return lt(e, bt), e.teardown = n, e;
}
function Be(n) {
  Cu();
  var e = (
    /** @type {Effect} */
    Re.f
  ), t = !we && (e & yn) !== 0 && (e & Pi) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      ft
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return Ol(n);
}
function Ol(n) {
  return kn(Zi | Ro, n);
}
function xu(n) {
  Ri.ensure();
  const e = kn(oi | ir, n);
  return (t = {}) => new Promise((i) => {
    t.outro ? wi(e, () => {
      Lt(e), i(void 0);
    }) : (Lt(e), i(void 0));
  });
}
function Or(n) {
  return kn(Zi, n);
}
function Tu(n) {
  return kn(Ir | ir, n);
}
function sa(n, e = 0) {
  return kn(na | e, n);
}
function Fe(n, e = [], t = [], i = []) {
  ml(i, e, t, (r) => {
    kn(na, () => n(...r.map(s)));
  });
}
function rr(n, e = 0) {
  var t = kn(Mn | e, n);
  return t;
}
function Dl(n, e = 0) {
  var t = kn(Wa | e, n);
  return t;
}
function Gt(n) {
  return kn(yn | ir, n);
}
function Rl(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Qn, i = we;
    Cs(!0), cn(null);
    try {
      e.call(null);
    } finally {
      Cs(t), cn(i);
    }
  }
}
function ts(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const r = t.ac;
    r !== null && aa(() => {
      r.abort(jn);
    });
    var i = t.next;
    t.f & oi ? t.parent = null : Lt(t, e), t = i;
  }
}
function Lu(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & yn || Lt(e), e = t;
  }
}
function Lt(n, e = !0) {
  var t = !1;
  (e || n.f & Do) && n.nodes !== null && n.nodes.end !== null && (wu(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), lt(n, Ea), ts(n, e && !t), br(n, 0);
  var i = n.nodes && n.nodes.t;
  if (i !== null)
    for (const a of i)
      a.stop();
  Rl(n), n.f ^= Ea, n.f |= Qt;
  var r = n.parent;
  r !== null && r.first !== null && _l(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = n.b = null;
}
function wu(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ wr(n);
    n.remove(), n = t;
  }
}
function _l(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function wi(n, e, t = !0) {
  var i = [];
  Pl(n, i, !0);
  var r = () => {
    t && Lt(n), e && e();
  }, a = i.length;
  if (a > 0) {
    var l = () => --a || r();
    for (var u of i)
      u.out(l);
  } else
    r();
}
function Pl(n, e, t) {
  if (!(n.f & Pt)) {
    n.f ^= Pt;
    var i = n.nodes && n.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && e.push(u);
    for (var r = n.first; r !== null; ) {
      var a = r.next;
      if (!(r.f & oi)) {
        var l = (r.f & Yn) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (r.f & yn) !== 0 && (n.f & Mn) !== 0;
        Pl(r, e, l ? t : !1);
      }
      r = a;
    }
  }
}
function ns(n) {
  kl(n, !0);
}
function kl(n, e) {
  if (n.f & Pt) {
    n.f ^= Pt, n.f & bt || (lt(n, Tt), Ri.ensure().schedule(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, r = (t.f & Yn) !== 0 || (t.f & yn) !== 0;
      kl(t, r ? e : !1), t = i;
    }
    var a = n.nodes && n.nodes.t;
    if (a !== null)
      for (const l of a)
        (l.is_global || e) && l.in();
  }
}
function is(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, i = n.nodes.end; t !== null; ) {
      var r = t === i ? null : /* @__PURE__ */ wr(t);
      e.append(t), t = r;
    }
}
let Wr = !1, Qn = !1;
function Cs(n) {
  Qn = n;
}
let we = null, In = !1;
function cn(n) {
  we = n;
}
let Re = null;
function Pn(n) {
  Re = n;
}
let dn = null;
function Fl(n) {
  we !== null && (dn === null ? dn = [n] : dn.push(n));
}
let jt = null, Wt = 0, an = null;
function Mu(n) {
  an = n;
}
let Bl = 1, yi = 0, Mi = yi;
function Ss(n) {
  Mi = n;
}
function Ul() {
  return ++Bl;
}
function Dr(n) {
  var e = n.f;
  if (e & Tt)
    return !0;
  if (e & Rt && (n.f &= ~Di), e & _n) {
    for (var t = (
      /** @type {Value[]} */
      n.deps
    ), i = t.length, r = 0; r < i; r++) {
      var a = t[r];
      if (Dr(
        /** @type {Derived} */
        a
      ) && bl(
        /** @type {Derived} */
        a
      ), a.wv > n.wv)
        return !0;
    }
    e & un && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    St === null && lt(n, bt);
  }
  return !1;
}
function Nl(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !(dn !== null && Qi.call(dn, n)))
    for (var r = 0; r < i.length; r++) {
      var a = i[r];
      a.f & Rt ? Nl(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? lt(a, Tt) : a.f & bt && lt(a, _n), Ja(
        /** @type {Effect} */
        a
      ));
    }
}
function Hl(n) {
  var m;
  var e = jt, t = Wt, i = an, r = we, a = dn, l = ft, u = In, o = Mi, d = n.f;
  jt = /** @type {null | Value[]} */
  null, Wt = 0, an = null, we = d & (yn | oi) ? null : n, dn = null, Ji(n.ctx), In = !1, Mi = ++yi, n.ac !== null && (aa(() => {
    n.ac.abort(jn);
  }), n.ac = null);
  try {
    n.f |= Sa;
    var c = (
      /** @type {Function} */
      n.fn
    ), h = c();
    n.f |= Pi;
    var f = n.deps, p = ue == null ? void 0 : ue.is_fork;
    if (jt !== null) {
      var v;
      if (p || br(n, Wt), f !== null && Wt > 0)
        for (f.length = Wt + jt.length, v = 0; v < jt.length; v++)
          f[Wt + v] = jt[v];
      else
        n.deps = f = jt;
      if (es() && n.f & un)
        for (v = Wt; v < f.length; v++)
          ((m = f[v]).reactions ?? (m.reactions = [])).push(n);
    } else !p && f !== null && Wt < f.length && (br(n, Wt), f.length = Wt);
    if (al() && an !== null && !In && f !== null && !(n.f & (Rt | _n | Tt)))
      for (v = 0; v < /** @type {Source[]} */
      an.length; v++)
        Nl(
          an[v],
          /** @type {Effect} */
          n
        );
    if (r !== null && r !== n) {
      if (yi++, r.deps !== null)
        for (let g = 0; g < t; g += 1)
          r.deps[g].rv = yi;
      if (e !== null)
        for (const g of e)
          g.rv = yi;
      an !== null && (i === null ? i = an : i.push(.../** @type {Source[]} */
      an));
    }
    return n.f & li && (n.f ^= li), h;
  } catch (g) {
    return ol(g);
  } finally {
    n.f ^= Sa, jt = e, Wt = t, an = i, we = r, dn = a, Ji(l), In = u, Mi = o;
  }
}
function Ou(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = Lo.call(t, n);
    if (i !== -1) {
      var r = t.length - 1;
      r === 0 ? t = e.reactions = null : (t[i] = t[r], t.pop());
    }
  }
  if (t === null && e.f & Rt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (jt === null || !Qi.call(jt, e))) {
    var a = (
      /** @type {Derived} */
      e
    );
    a.f & un && (a.f ^= un, a.f &= ~Di), a.v !== gt && Ya(a), pu(a), br(a, 0);
  }
}
function br(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      Ou(n, t[i]);
}
function tr(n) {
  var e = n.f;
  if (!(e & Qt)) {
    lt(n, bt);
    var t = Re, i = Wr;
    Re = n, Wr = !0;
    try {
      e & (Mn | Wa) ? Lu(n) : ts(n), Rl(n);
      var r = Hl(n);
      n.teardown = typeof r == "function" ? r : null, n.wv = Bl;
      var a;
      To && qo && n.f & Tt && n.deps;
    } finally {
      Wr = i, Re = t;
    }
  }
}
async function Vl() {
  await Promise.resolve(), iu();
}
function s(n) {
  var e = n.f, t = (e & Rt) !== 0;
  if (we !== null && !In) {
    var i = Re !== null && (Re.f & Qt) !== 0;
    if (!i && (dn === null || !Qi.call(dn, n))) {
      var r = we.deps;
      if (we.f & Sa)
        n.rv < yi && (n.rv = yi, jt === null && r !== null && r[Wt] === n ? Wt++ : jt === null ? jt = [n] : jt.push(n));
      else {
        (we.deps ?? (we.deps = [])).push(n);
        var a = n.reactions;
        a === null ? n.reactions = [we] : Qi.call(a, we) || a.push(we);
      }
    }
  }
  if (Qn && Li.has(n))
    return Li.get(n);
  if (t) {
    var l = (
      /** @type {Derived} */
      n
    );
    if (Qn) {
      var u = l.v;
      return (!(l.f & bt) && l.reactions !== null || Gl(l)) && (u = $a(l)), Li.set(l, u), u;
    }
    var o = (l.f & un) === 0 && !In && we !== null && (Wr || (we.f & un) !== 0), d = (l.f & Pi) === 0;
    Dr(l) && (o && (l.f |= un), bl(l)), o && !d && (yl(l), jl(l));
  }
  if (St != null && St.has(n))
    return St.get(n);
  if (n.f & li)
    throw n.v;
  return n.v;
}
function jl(n) {
  if (n.f |= un, n.deps !== null)
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & Rt && !(e.f & un) && (yl(
        /** @type {Derived} */
        e
      ), jl(
        /** @type {Derived} */
        e
      ));
}
function Gl(n) {
  if (n.v === gt) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Li.has(e) || e.f & Rt && Gl(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function ui(n) {
  var e = In;
  try {
    return In = !0, n();
  } finally {
    In = e;
  }
}
function Du(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (On in n)
      Pa(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && On in t && Pa(t);
      }
  }
}
function Pa(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let i in n)
      try {
        Pa(n[i], e);
      } catch {
      }
    const t = Xa(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const i = $s(t);
      for (let r in i) {
        const a = i[r].get;
        if (a)
          try {
            a.call(n);
          } catch {
          }
      }
    }
  }
}
const Ai = Symbol("events"), zl = /* @__PURE__ */ new Set(), ka = /* @__PURE__ */ new Set();
function rs(n, e, t, i = {}) {
  function r(a) {
    if (i.capture || Fa.call(e, a), !a.cancelBubble)
      return aa(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? qn(() => {
    e.addEventListener(n, r, i);
  }) : e.addEventListener(n, r, i), r;
}
function Ru(n, e, t, i = {}) {
  var r = rs(e, n, t, i);
  return () => {
    n.removeEventListener(e, r, i);
  };
}
function Xl(n, e, t, i, r) {
  var a = { capture: i, passive: r }, l = rs(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Mr(() => {
    e.removeEventListener(n, l, a);
  });
}
function gn(n, e, t) {
  (e[Ai] ?? (e[Ai] = {}))[n] = t;
}
function as(n) {
  for (var e = 0; e < n.length; e++)
    zl.add(n[e]);
  for (var t of ka)
    t(n);
}
let xs = null;
function Fa(n) {
  var g, E;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, r = ((g = n.composedPath) == null ? void 0 : g.call(n)) || [], a = (
    /** @type {null | Element} */
    r[0] || n.target
  );
  xs = n;
  var l = 0, u = xs === n && n[Ai];
  if (u) {
    var o = r.indexOf(u);
    if (o !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n[Ai] = e;
      return;
    }
    var d = r.indexOf(e);
    if (d === -1)
      return;
    o <= d && (l = o);
  }
  if (a = /** @type {Element} */
  r[l] || n.target, a !== e) {
    Js(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || t;
      }
    });
    var c = we, h = Re;
    cn(null), Pn(null);
    try {
      for (var f, p = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var m = (E = a[Ai]) == null ? void 0 : E[i];
          m != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === a) && m.call(a, n);
        } catch (D) {
          f ? p.push(D) : f = D;
        }
        if (n.cancelBubble || v === e || v === null)
          break;
        a = v;
      }
      if (f) {
        for (let D of p)
          queueMicrotask(() => {
            throw D;
          });
        throw f;
      }
    } finally {
      n[Ai] = e, delete n.currentTarget, cn(c), Pn(h);
    }
  }
}
var Ys;
const fa = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Ys = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ys.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (n) => n
  })
);
function _u(n) {
  return (
    /** @type {string} */
    (fa == null ? void 0 : fa.createHTML(n)) ?? n
  );
}
function Wl(n) {
  var e = Ml("template");
  return e.innerHTML = _u(n.replaceAll("<!>", "<!---->")), e.content;
}
function nr(n, e) {
  var t = (
    /** @type {Effect} */
    Re
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ie(n, e) {
  var t = (e & 1) !== 0, i = (e & 2) !== 0, r, a = !n.startsWith("<!>");
  return () => {
    r === void 0 && (r = Wl(a ? n : "<!>" + n), t || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ er(r)));
    var l = (
      /** @type {TemplateNode} */
      i || xl ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (t) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ er(l)
      ), o = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      nr(u, o);
    } else
      nr(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function Pu(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), r = `<${t}>${i ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var l = (
        /** @type {DocumentFragment} */
        Wl(r)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ er(l)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ er(u);
    }
    var o = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return nr(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function ku(n, e) {
  return /* @__PURE__ */ Pu(n, e, "svg");
}
function tt(n = "") {
  {
    var e = Dn(n + "");
    return nr(e, e), e;
  }
}
function ve() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = Dn();
  return n.append(e, t), nr(e, t), n;
}
function L(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function Fu(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const Bu = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Uu(n) {
  return Bu.includes(n);
}
const Nu = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Hu(n) {
  return n = n.toLowerCase(), Nu[n] ?? n;
}
const Vu = ["touchstart", "touchmove"];
function ju(n) {
  return Vu.includes(n);
}
function Ae(n, e) {
  var t = e == null ? "" : typeof e == "object" ? `${e}` : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = `${t}`);
}
function Gu(n, e) {
  return zu(n, e);
}
const kr = /* @__PURE__ */ new Map();
function zu(n, { target: e, anchor: t, props: i = {}, events: r, context: a, intro: l = !0, transformError: u }) {
  Iu();
  var o = void 0, d = xu(() => {
    var c = t ?? e.appendChild(Dn());
    lu(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (p) => {
        Ye({});
        var v = (
          /** @type {ComponentContext} */
          ft
        );
        a && (v.c = a), r && (i.$$events = r), o = n(p, i) || {}, Qe();
      },
      u
    );
    var h = /* @__PURE__ */ new Set(), f = (p) => {
      for (var v = 0; v < p.length; v++) {
        var m = p[v];
        if (!h.has(m)) {
          h.add(m);
          var g = ju(m);
          for (const S of [e, document]) {
            var E = kr.get(S);
            E === void 0 && (E = /* @__PURE__ */ new Map(), kr.set(S, E));
            var D = E.get(m);
            D === void 0 ? (S.addEventListener(m, Fa, { passive: g }), E.set(m, 1)) : E.set(m, D + 1);
          }
        }
      }
    };
    return f(ta(zl)), ka.add(f), () => {
      var g;
      for (var p of h)
        for (const E of [e, document]) {
          var v = (
            /** @type {Map<string, number>} */
            kr.get(E)
          ), m = (
            /** @type {number} */
            v.get(p)
          );
          --m == 0 ? (E.removeEventListener(p, Fa), v.delete(p), v.size === 0 && kr.delete(E)) : v.set(p, m);
        }
      ka.delete(f), c !== t && ((g = c.parentNode) == null || g.removeChild(c));
    };
  });
  return Xu.set(o, d), o;
}
let Xu = /* @__PURE__ */ new WeakMap();
var mn, Tn, Yt, Ti, Tr, Lr, ea;
class la {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    vn(this, "anchor");
    /** @type {Map<Batch, Key>} */
    be(this, mn, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    be(this, Tn, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    be(this, Yt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    be(this, Ti, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    be(this, Tr, !0);
    /**
     * @param {Batch} batch
     */
    be(this, Lr, (e) => {
      if (y(this, mn).has(e)) {
        var t = (
          /** @type {Key} */
          y(this, mn).get(e)
        ), i = y(this, Tn).get(t);
        if (i)
          ns(i), y(this, Ti).delete(t);
        else {
          var r = y(this, Yt).get(t);
          r && (y(this, Tn).set(t, r.effect), y(this, Yt).delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [a, l] of y(this, mn)) {
          if (y(this, mn).delete(a), a === e)
            break;
          const u = y(this, Yt).get(l);
          u && (Lt(u.effect), y(this, Yt).delete(l));
        }
        for (const [a, l] of y(this, Tn)) {
          if (a === t || y(this, Ti).has(a)) continue;
          const u = () => {
            if (Array.from(y(this, mn).values()).includes(a)) {
              var d = document.createDocumentFragment();
              is(l, d), d.append(Dn()), y(this, Yt).set(a, { effect: l, fragment: d });
            } else
              Lt(l);
            y(this, Ti).delete(a), y(this, Tn).delete(a);
          };
          y(this, Tr) || !i ? (y(this, Ti).add(a), wi(l, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    be(this, ea, (e) => {
      y(this, mn).delete(e);
      const t = Array.from(y(this, mn).values());
      for (const [i, r] of y(this, Yt))
        t.includes(i) || (Lt(r.effect), y(this, Yt).delete(i));
    });
    this.anchor = e, Se(this, Tr, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      ue
    ), r = wl();
    if (t && !y(this, Tn).has(e) && !y(this, Yt).has(e))
      if (r) {
        var a = document.createDocumentFragment(), l = Dn();
        a.append(l), y(this, Yt).set(e, {
          effect: Gt(() => t(l)),
          fragment: a
        });
      } else
        y(this, Tn).set(
          e,
          Gt(() => t(this.anchor))
        );
    if (y(this, mn).set(i, e), r) {
      for (const [u, o] of y(this, Tn))
        u === e ? i.unskip_effect(o) : i.skip_effect(o);
      for (const [u, o] of y(this, Yt))
        u === e ? i.unskip_effect(o.effect) : i.skip_effect(o.effect);
      i.oncommit(y(this, Lr)), i.ondiscard(y(this, ea));
    } else
      y(this, Lr).call(this, i);
  }
}
mn = new WeakMap(), Tn = new WeakMap(), Yt = new WeakMap(), Ti = new WeakMap(), Tr = new WeakMap(), Lr = new WeakMap(), ea = new WeakMap();
function xe(n, e, ...t) {
  var i = new la(n);
  rr(() => {
    const r = e() ?? null;
    i.ensure(r, r && ((a) => r(a, ...t)));
  }, Yn);
}
function kt(n) {
  ft === null && Ka(), Be(() => {
    const e = ui(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function di(n) {
  ft === null && Ka(), kt(() => () => ui(n));
}
function le(n, e, t = !1) {
  var i = new la(n), r = t ? Yn : 0;
  function a(l, u) {
    i.ensure(l, u);
  }
  rr(() => {
    var l = !1;
    e((u, o = 0) => {
      l = !0, a(o, u);
    }), l || a(-1, null);
  }, r);
}
function Fr(n, e) {
  return e;
}
function Wu(n, e, t) {
  for (var i = [], r = e.length, a, l = e.length, u = 0; u < r; u++) {
    let h = e[u];
    wi(
      h,
      () => {
        if (a) {
          if (a.pending.delete(h), a.done.add(h), a.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Ba(n, ta(a.done)), f.delete(a), f.size === 0 && (n.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var o = i.length === 0 && t !== null;
    if (o) {
      var d = (
        /** @type {Element} */
        t
      ), c = (
        /** @type {Element} */
        d.parentNode
      );
      bu(c), c.append(d), n.items.clear();
    }
    Ba(n, e, !o);
  } else
    a = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ?? (n.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Ba(n, e, t = !0) {
  var i;
  if (n.pending.size > 0) {
    i = /* @__PURE__ */ new Set();
    for (const l of n.pending.values())
      for (const u of l)
        i.add(
          /** @type {EachItem} */
          n.items.get(u).e
        );
  }
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    if (i != null && i.has(a)) {
      a.f |= wn;
      const l = document.createDocumentFragment();
      is(a, l);
    } else
      Lt(e[r], t);
  }
}
var Ts;
function vr(n, e, t, i, r, a = null) {
  var l = n, u = /* @__PURE__ */ new Map(), o = (e & 4) !== 0;
  if (o) {
    var d = (
      /** @type {Element} */
      n
    );
    l = d.appendChild(Dn());
  }
  var c = null, h = /* @__PURE__ */ Il(() => {
    var S = t();
    return za(S) ? S : S == null ? [] : ta(S);
  }), f, p = /* @__PURE__ */ new Map(), v = !0;
  function m(S) {
    D.effect.f & Qt || (D.pending.delete(S), D.fallback = c, Ku(D, f, l, e, i), c !== null && (f.length === 0 ? c.f & wn ? (c.f ^= wn, pr(c, null, l)) : ns(c) : wi(c, () => {
      c = null;
    })));
  }
  function g(S) {
    D.pending.delete(S);
  }
  var E = rr(() => {
    f = /** @type {V[]} */
    s(h);
    for (var S = f.length, C = /* @__PURE__ */ new Set(), M = (
      /** @type {Batch} */
      ue
    ), w = wl(), R = 0; R < S; R += 1) {
      var I = f[R], x = i(I, R), G = v ? null : u.get(x);
      G ? (G.v && $i(G.v, I), G.i && $i(G.i, R), w && M.unskip_effect(G.e)) : (G = qu(
        u,
        v ? l : Ts ?? (Ts = Dn()),
        I,
        x,
        R,
        r,
        e,
        t
      ), v || (G.e.f |= wn), u.set(x, G)), C.add(x);
    }
    if (S === 0 && a && !c && (v ? c = Gt(() => a(l)) : (c = Gt(() => a(Ts ?? (Ts = Dn()))), c.f |= wn)), S > C.size && ko(), !v)
      if (p.set(M, C), w) {
        for (const [ne, k] of u)
          C.has(ne) || M.skip_effect(k.e);
        M.oncommit(m), M.ondiscard(g);
      } else
        m(M);
    s(h);
  }), D = { effect: E, items: u, pending: p, outrogroups: null, fallback: c };
  v = !1;
}
function dr(n) {
  for (; n !== null && !(n.f & yn); )
    n = n.next;
  return n;
}
function Ku(n, e, t, i, r) {
  var G, ne, k, N, Ue, Y, F, V, $;
  var a = (i & 8) !== 0, l = e.length, u = n.items, o = dr(n.effect.first), d, c = null, h, f = [], p = [], v, m, g, E;
  if (a)
    for (E = 0; E < l; E += 1)
      v = e[E], m = r(v, E), g = /** @type {EachItem} */
      u.get(m).e, g.f & wn || ((ne = (G = g.nodes) == null ? void 0 : G.a) == null || ne.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(g));
  for (E = 0; E < l; E += 1) {
    if (v = e[E], m = r(v, E), g = /** @type {EachItem} */
    u.get(m).e, n.outrogroups !== null)
      for (const oe of n.outrogroups)
        oe.pending.delete(g), oe.done.delete(g);
    if (g.f & Pt && (ns(g), a && ((N = (k = g.nodes) == null ? void 0 : k.a) == null || N.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(g))), g.f & wn)
      if (g.f ^= wn, g === o)
        pr(g, null, t);
      else {
        var D = c ? c.next : o;
        g === n.effect.last && (n.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), ei(n, c, g), ei(n, g, D), pr(g, D, t), c = g, f = [], p = [], o = dr(c.next);
        continue;
      }
    if (g !== o) {
      if (d !== void 0 && d.has(g)) {
        if (f.length < p.length) {
          var S = p[0], C;
          c = S.prev;
          var M = f[0], w = f[f.length - 1];
          for (C = 0; C < f.length; C += 1)
            pr(f[C], S, t);
          for (C = 0; C < p.length; C += 1)
            d.delete(p[C]);
          ei(n, M.prev, w.next), ei(n, c, M), ei(n, w, S), o = S, c = w, E -= 1, f = [], p = [];
        } else
          d.delete(g), pr(g, o, t), ei(n, g.prev, g.next), ei(n, g, c === null ? n.effect.first : c.next), ei(n, c, g), c = g;
        continue;
      }
      for (f = [], p = []; o !== null && o !== g; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(o), p.push(o), o = dr(o.next);
      if (o === null)
        continue;
    }
    g.f & wn || f.push(g), c = g, o = dr(g.next);
  }
  if (n.outrogroups !== null) {
    for (const oe of n.outrogroups)
      oe.pending.size === 0 && (Ba(n, ta(oe.done)), (Ue = n.outrogroups) == null || Ue.delete(oe));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (o !== null || d !== void 0) {
    var R = [];
    if (d !== void 0)
      for (g of d)
        g.f & Pt || R.push(g);
    for (; o !== null; )
      !(o.f & Pt) && o !== n.fallback && R.push(o), o = dr(o.next);
    var I = R.length;
    if (I > 0) {
      var x = i & 4 && l === 0 ? t : null;
      if (a) {
        for (E = 0; E < I; E += 1)
          (F = (Y = R[E].nodes) == null ? void 0 : Y.a) == null || F.measure();
        for (E = 0; E < I; E += 1)
          ($ = (V = R[E].nodes) == null ? void 0 : V.a) == null || $.fix();
      }
      Wu(n, R, x);
    }
  }
  a && qn(() => {
    var oe, j;
    if (h !== void 0)
      for (g of h)
        (j = (oe = g.nodes) == null ? void 0 : oe.a) == null || j.apply();
  });
}
function qu(n, e, t, i, r, a, l, u) {
  var o = l & 1 ? l & 16 ? _i(t) : /* @__PURE__ */ El(t, !1, !1) : null, d = l & 2 ? _i(r) : null;
  return {
    v: o,
    i: d,
    e: Gt(() => (a(e, o ?? t, d ?? r, u), () => {
      n.delete(i);
    }))
  };
}
function pr(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, r = n.nodes.end, a = e && !(e.f & wn) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ wr(i)
      );
      if (a.before(i), i === r)
        return;
      i = l;
    }
}
function ei(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function ss(n, e, t) {
  var i = new la(n);
  rr(() => {
    var r = e() ?? null;
    i.ensure(r, r && ((a) => t(a, r)));
  }, Yn);
}
function Ls(n, e, t, i, r, a) {
  var l = null, u = (
    /** @type {TemplateNode} */
    n
  ), o = new la(u, !1);
  rr(() => {
    const d = e() || null;
    var c = d === "svg" ? So : void 0;
    if (d === null) {
      o.ensure(null, null);
      return;
    }
    return o.ensure(d, (h) => {
      if (d) {
        if (l = Ml(d, c), nr(l, l), i) {
          var f = l.appendChild(Dn());
          i(l, f);
        }
        Re.nodes.end = l, h.before(l);
      }
    }), () => {
    };
  }, Yn), Mr(() => {
  });
}
function $e(n, e, t) {
  Or(() => {
    var i = ui(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (i != null && i.update)) {
      var r = !1, a = (
        /** @type {any} */
        {}
      );
      sa(() => {
        var l = t();
        Du(l), r && qa(a, l) && (a = l, i.update(l));
      }), r = !0;
    }
    if (i != null && i.destroy)
      return () => (
        /** @type {Function} */
        i.destroy()
      );
  });
}
function Yu(n, e) {
  var t = void 0, i;
  Dl(() => {
    t !== (t = e()) && (i && (Lt(i), i = null), t && (i = Gt(() => {
      Or(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function Kl(n) {
  var e, t, i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var r = n.length;
    for (e = 0; e < r; e++) n[e] && (t = Kl(n[e])) && (i && (i += " "), i += t);
  } else for (t in n) n[t] && (i && (i += " "), i += t);
  return i;
}
function Qu() {
  for (var n, e, t = 0, i = "", r = arguments.length; t < r; t++) (n = arguments[t]) && (e = Kl(n)) && (i && (i += " "), i += e);
  return i;
}
function ql(n) {
  return typeof n == "object" ? Qu(n) : n ?? "";
}
const ws = [...` 	
\r\f \v\uFEFF`];
function Zu(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var r of Object.keys(t))
      if (t[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var a = r.length, l = 0; (l = i.indexOf(r, l)) >= 0; ) {
          var u = l + a;
          (l === 0 || ws.includes(i[l - 1])) && (u === i.length || ws.includes(i[u])) ? i = (l === 0 ? "" : i.substring(0, l)) + i.substring(u + 1) : l = u;
        }
  }
  return i === "" ? null : i;
}
function Ms(n, e = !1) {
  var t = e ? " !important;" : ";", i = "";
  for (var r of Object.keys(n)) {
    var a = n[r];
    a != null && a !== "" && (i += " " + r + ": " + a + t);
  }
  return i;
}
function ha(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function Ju(n, e) {
  if (e) {
    var t = "", i, r;
    if (Array.isArray(e) ? (i = e[0], r = e[1]) : i = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, l = 0, u = !1, o = [];
      i && o.push(...Object.keys(i).map(ha)), r && o.push(...Object.keys(r).map(ha));
      var d = 0, c = -1;
      const m = n.length;
      for (var h = 0; h < m; h++) {
        var f = n[h];
        if (u ? f === "/" && n[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && n[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? l++ : f === ")" && l--, !u && a === !1 && l === 0) {
          if (f === ":" && c === -1)
            c = h;
          else if (f === ";" || h === m - 1) {
            if (c !== -1) {
              var p = ha(n.substring(d, c).trim());
              if (!o.includes(p)) {
                f !== ";" && h++;
                var v = n.substring(d, h).trim();
                t += " " + v + ";";
              }
            }
            d = h + 1, c = -1;
          }
        }
      }
    }
    return i && (t += Ms(i)), r && (t += Ms(r, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function Kn(n, e, t, i, r, a) {
  var l = n.__className;
  if (l !== t || l === void 0) {
    var u = Zu(t, i, a);
    u == null ? n.removeAttribute("class") : e ? n.className = u : n.setAttribute("class", u), n.__className = t;
  } else if (a && r !== a)
    for (var o in a) {
      var d = !!a[o];
      (r == null || d !== !!r[o]) && n.classList.toggle(o, d);
    }
  return a;
}
function va(n, e = {}, t, i) {
  for (var r in t) {
    var a = t[r];
    e[r] !== a && (t[r] == null ? n.style.removeProperty(r) : n.style.setProperty(r, a, i));
  }
}
function Yl(n, e, t, i) {
  var r = n.__style;
  if (r !== e) {
    var a = Ju(e, i);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else i && (Array.isArray(i) ? (va(n, t == null ? void 0 : t[0], i[0]), va(n, t == null ? void 0 : t[1], i[1], "important")) : va(n, t, i));
  return i;
}
function Ua(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!za(e))
      return Wo();
    for (var i of n.options)
      i.selected = e.includes(Os(i));
    return;
  }
  for (i of n.options) {
    var r = Os(i);
    if (gu(r, e)) {
      i.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function $u(n) {
  var e = new MutationObserver(() => {
    Ua(n, n.__value);
  });
  e.observe(n, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Mr(() => {
    e.disconnect();
  });
}
function Os(n) {
  return "__value" in n ? n.__value : n.value;
}
const cr = Symbol("class"), fr = Symbol("style"), Ql = Symbol("is custom element"), Zl = Symbol("is html"), ed = nl ? "option" : "OPTION", td = nl ? "select" : "SELECT";
function nd(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function Rn(n, e, t, i) {
  var r = Jl(n);
  r[e] !== (r[e] = t) && (e === "loading" && (n[_o] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && $l(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function id(n, e, t, i, r = !1, a = !1) {
  var l = Jl(n), u = l[Ql], o = !l[Zl], d = e || {}, c = n.nodeName === ed;
  for (var h in e)
    h in t || (t[h] = null);
  t.class ? t.class = ql(t.class) : t[cr] && (t.class = null), t[fr] && (t.style ?? (t.style = null));
  var f = $l(n);
  for (const S in t) {
    let C = t[S];
    if (c && S === "value" && C == null) {
      n.value = n.__value = "", d[S] = C;
      continue;
    }
    if (S === "class") {
      var p = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      Kn(n, p, C, i, e == null ? void 0 : e[cr], t[cr]), d[S] = C, d[cr] = t[cr];
      continue;
    }
    if (S === "style") {
      Yl(n, C, e == null ? void 0 : e[fr], t[fr]), d[S] = C, d[fr] = t[fr];
      continue;
    }
    var v = d[S];
    if (!(C === v && !(C === void 0 && n.hasAttribute(S)))) {
      d[S] = C;
      var m = S[0] + S[1];
      if (m !== "$$")
        if (m === "on") {
          const M = {}, w = "$$" + S;
          let R = S.slice(2);
          var g = Uu(R);
          if (Fu(R) && (R = R.slice(0, -7), M.capture = !0), !g && v) {
            if (C != null) continue;
            n.removeEventListener(R, d[w], M), d[w] = null;
          }
          if (g)
            gn(R, n, C), as([R]);
          else if (C != null) {
            let I = function(x) {
              d[S].call(this, x);
            };
            d[w] = rs(R, n, I, M);
          }
        } else if (S === "style")
          Rn(n, S, C);
        else if (S === "autofocus")
          yu(
            /** @type {HTMLElement} */
            n,
            !!C
          );
        else if (!u && (S === "__value" || S === "value" && C != null))
          n.value = n.__value = C;
        else if (S === "selected" && c)
          nd(
            /** @type {HTMLOptionElement} */
            n,
            C
          );
        else {
          var E = S;
          o || (E = Hu(E));
          var D = E === "defaultValue" || E === "defaultChecked";
          if (C == null && !u && !D)
            if (l[S] = null, E === "value" || E === "checked") {
              let M = (
                /** @type {HTMLInputElement} */
                n
              );
              const w = e === void 0;
              if (E === "value") {
                let R = M.defaultValue;
                M.removeAttribute(E), M.defaultValue = R, M.value = M.__value = w ? R : null;
              } else {
                let R = M.defaultChecked;
                M.removeAttribute(E), M.defaultChecked = R, M.checked = w ? R : !1;
              }
            } else
              n.removeAttribute(S);
          else D || f.includes(E) && (u || typeof C != "string") ? (n[E] = C, E in l && (l[E] = gt)) : typeof C != "function" && Rn(n, E, C);
        }
    }
  }
  return d;
}
function ct(n, e, t = [], i = [], r = [], a, l = !1, u = !1) {
  ml(r, t, i, (o) => {
    var d = void 0, c = {}, h = n.nodeName === td, f = !1;
    if (Dl(() => {
      var v = e(...o.map(s)), m = id(
        n,
        d,
        v,
        a,
        l,
        u
      );
      f && h && "value" in v && Ua(
        /** @type {HTMLSelectElement} */
        n,
        v.value
      );
      for (let E of Object.getOwnPropertySymbols(c))
        v[E] || Lt(c[E]);
      for (let E of Object.getOwnPropertySymbols(v)) {
        var g = v[E];
        E.description === xo && (!d || g !== d[E]) && (c[E] && Lt(c[E]), c[E] = Gt(() => Yu(n, () => g))), m[E] = g;
      }
      d = m;
    }), h) {
      var p = (
        /** @type {HTMLSelectElement} */
        n
      );
      Or(() => {
        Ua(
          p,
          /** @type {Record<string | symbol, any>} */
          d.value,
          !0
        ), $u(p);
      });
    }
    f = !0;
  });
}
function Jl(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Ql]: n.nodeName.includes("-"),
      [Zl]: n.namespaceURI === Zs
    })
  );
}
var Ds = /* @__PURE__ */ new Map();
function $l(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Ds.get(e);
  if (t) return t;
  Ds.set(e, t = []);
  for (var i, r = n, a = Element.prototype; a !== r; ) {
    i = $s(r);
    for (var l in i)
      i[l].set && t.push(l);
    r = Xa(r);
  }
  return t;
}
function rd(n, e, t = e) {
  var i = /* @__PURE__ */ new WeakSet();
  Eu(n, "input", async (r) => {
    var a = r ? n.defaultValue : n.value;
    if (a = pa(n) ? ma(a) : a, t(a), ue !== null && i.add(ue), await Vl(), a !== (a = e())) {
      var l = n.selectionStart, u = n.selectionEnd, o = n.value.length;
      if (n.value = a ?? "", u !== null) {
        var d = n.value.length;
        l === u && u === o && d > o ? (n.selectionStart = d, n.selectionEnd = d) : (n.selectionStart = l, n.selectionEnd = Math.min(u, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ui(e) == null && n.value && (t(pa(n) ? ma(n.value) : n.value), ue !== null && i.add(ue)), sa(() => {
    var r = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ue
      );
      if (i.has(a))
        return;
    }
    pa(n) && r === ma(n.value) || n.type === "date" && !r && !n.value || r !== n.value && (n.value = r ?? "");
  });
}
function pa(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function ma(n) {
  return n === "" ? null : +n;
}
function Rs(n, e) {
  return n === e || (n == null ? void 0 : n[On]) === e;
}
function Me(n = {}, e, t, i) {
  var r = (
    /** @type {ComponentContext} */
    ft.r
  ), a = (
    /** @type {Effect} */
    Re
  );
  return Or(() => {
    var l, u;
    return sa(() => {
      l = u, u = [], ui(() => {
        n !== t(...u) && (e(n, ...u), l && Rs(t(...l), n) && e(null, ...l));
      });
    }), () => {
      let o = a;
      for (; o !== r && o.parent !== null && o.parent.f & Ea; )
        o = o.parent;
      const d = () => {
        u && Rs(t(...u), n) && e(null, ...u);
      }, c = o.teardown;
      o.teardown = () => {
        d(), c == null || c();
      };
    };
  }), n;
}
const ad = {
  get(n, e) {
    if (!n.exclude.includes(e))
      return n.props[e];
  },
  set(n, e) {
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    if (!n.exclude.includes(e) && e in n.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: n.props[e]
      };
  },
  has(n, e) {
    return n.exclude.includes(e) ? !1 : e in n.props;
  },
  ownKeys(n) {
    return Reflect.ownKeys(n.props).filter((e) => !n.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function yt(n, e, t) {
  return new Proxy(
    { props: n, exclude: e },
    ad
  );
}
const sd = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (ur(i) && (i = i()), typeof i == "object" && i !== null && e in i) return i[e];
    }
  },
  set(n, e, t) {
    let i = n.props.length;
    for (; i--; ) {
      let r = n.props[i];
      ur(r) && (r = r());
      const a = si(r, e);
      if (a && a.set)
        return a.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (ur(i) && (i = i()), typeof i == "object" && i !== null && e in i) {
        const r = si(i, e);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(n, e) {
    if (e === On || e === tl) return !1;
    for (let t of n.props)
      if (ur(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (ur(t) && (t = t()), !!t) {
        for (const i in t)
          e.includes(i) || e.push(i);
        for (const i of Object.getOwnPropertySymbols(t))
          e.includes(i) || e.push(i);
      }
    return e;
  }
};
function nt(...n) {
  return new Proxy({ props: n }, sd);
}
function b(n, e, t, i) {
  var D;
  var r = (t & 8) !== 0, a = (t & 16) !== 0, l = (
    /** @type {V} */
    i
  ), u = !0, o = () => (u && (u = !1, l = a ? ui(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), l);
  let d;
  if (r) {
    var c = On in n || tl in n;
    d = ((D = si(n, e)) == null ? void 0 : D.set) ?? (c && e in n ? (S) => n[e] = S : void 0);
  }
  var h, f = !1;
  r ? [h, f] = eu(() => (
    /** @type {V} */
    n[e]
  )) : h = /** @type {V} */
  n[e], h === void 0 && i !== void 0 && (h = o(), d && (Ho(), d(h)));
  var p;
  if (p = () => {
    var S = (
      /** @type {V} */
      n[e]
    );
    return S === void 0 ? o() : (u = !0, S);
  }, !(t & 4))
    return p;
  if (d) {
    var v = n.$$legacy;
    return (
      /** @type {() => V} */
      function(S, C) {
        return arguments.length > 0 ? ((!C || v || f) && d(C ? p() : S), S) : p();
      }
    );
  }
  var m = !1, g = (t & 1 ? ra : Il)(() => (m = !1, p()));
  r && s(g);
  var E = (
    /** @type {Effect} */
    Re
  );
  return (
    /** @type {() => V} */
    function(S, C) {
      if (arguments.length > 0) {
        const M = C ? s(g) : r ? De(S) : S;
        return X(g, M), m = !0, l !== void 0 && (l = M), S;
      }
      return Qn && m || E.f & Qt ? g.v : s(g);
    }
  );
}
const ld = "5";
var Qs;
typeof window < "u" && ((Qs = window.__svelte ?? (window.__svelte = {})).v ?? (Qs.v = /* @__PURE__ */ new Set())).add(ld);
var Na = function(n, e) {
  return Na = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, Na(n, e);
};
function An(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Na(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var qe = function() {
  return qe = Object.assign || function(e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) {
      t = arguments[i];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, qe.apply(this, arguments);
};
function bn(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function _s(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var i = t.call(n), r, a = [], l;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
  } catch (u) {
    l = { error: u };
  } finally {
    try {
      r && !r.done && (t = i.return) && t.call(i);
    } finally {
      if (l) throw l.error;
    }
  }
  return a;
}
function od(n, e, t) {
  if (t || arguments.length === 2) for (var i = 0, r = e.length, a; i < r; i++)
    (a || !(i in e)) && (a || (a = Array.prototype.slice.call(e, 0, i)), a[i] = e[i]);
  return n.concat(a || Array.prototype.slice.call(e));
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var En = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(n, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.init = function() {
    }, n.prototype.destroy = function() {
    }, n;
  }()
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function ud(n) {
  return n === void 0 && (n = window), dd(n) ? { passive: !0 } : !1;
}
function dd(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, i = function() {
    };
    n.document.addEventListener("test", i, t), n.document.removeEventListener("test", i, t);
  } catch {
    e = !1;
  }
  return e;
}
const eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: ud
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function cd(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (to(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function to(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
const ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: cd,
  matches: to
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var fd = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var hd = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(t) {
      var i = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.float = function(t) {
      var i = e.cssClasses, r = i.LABEL_FLOAT_ABOVE, a = i.LABEL_SHAKE;
      t ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(t) {
      var i = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(En)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var pi = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var vd = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return pi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(pi.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(pi.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(pi.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this.adapter.hasClass(pi.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(pi.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(pi.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(En)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var pd = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ps = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, md = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var gd = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      return n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return pd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return md;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ps;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.notch = function(t) {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += Ps.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(En)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Id = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, bd = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, ks = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, Br;
function yd(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = Br;
  if (typeof Br == "boolean" && !e)
    return Br;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var a = t.supports("--css-vars", "yes"), l = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = a || l, e || (Br = i), i;
}
function Ad(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var i = e.x, r = e.y, a = i + t.left, l = r + t.top, u, o;
  if (n.type === "touchstart") {
    var d = n;
    u = d.changedTouches[0].pageX - a, o = d.changedTouches[0].pageY - l;
  } else {
    var c = n;
    u = c.pageX - a, o = c.pageY - l;
  }
  return { x: u, y: o };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Fs = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Bs = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ur = [], Ed = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
        i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
      }, i.activateHandler = function(r) {
        i.activateImpl(r);
      }, i.deactivateHandler = function() {
        i.deactivateImpl();
      }, i.focusHandler = function() {
        i.handleFocus();
      }, i.blurHandler = function() {
        i.handleBlur();
      }, i.resizeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Id;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return bd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ks;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var r = e.cssClasses, a = r.ROOT, l = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(l), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, r = i.ROOT, a = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(r), t.adapter.removeClass(a), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var i = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(t) {
      var i, r;
      if (t) {
        try {
          for (var a = bn(Fs), l = a.next(); !l.done; l = a.next()) {
            var u = l.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            l && !l.done && (r = a.return) && r.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var i, r;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = bn(Bs), l = a.next(); !l.done; l = a.next()) {
            var u = l.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            l && !l.done && (r = a.return) && r.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, i;
      try {
        for (var r = bn(Fs), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.deregisterInteractionHandler(l, this.activateHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = bn(Bs), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.deregisterDocumentInteractionHandler(l, this.deactivateHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, i = e.strings, r = Object.keys(i);
      r.forEach(function(a) {
        a.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(i[a], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var a = this.previousActivationEvent, l = a && t !== void 0 && a.type !== t.type;
          if (!l) {
            r.isActivated = !0, r.isProgrammatic = t === void 0, r.activationEvent = t, r.wasActivatedByPointer = r.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var u = t !== void 0 && Ur.length > 0 && Ur.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Ur.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ur = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, a = i.VAR_FG_TRANSLATE_END, l = e.cssClasses, u = l.FG_DEACTIVATION, o = l.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), p = f.startPoint, v = f.endPoint;
        c = p.x + "px, " + p.y + "px", h = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(r, c), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, r = t.wasActivatedByPointer, a;
      r ? a = Ad(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var l = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: l };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, i = e.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, l = r.isActivated, u = a || !l;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(i);
      }, ks.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, i = this.activationState;
      if (i.isActivated) {
        var r = qe({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(r), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var i = t.wasActivatedByPointer, r = t.wasElementMadeActive;
      (i || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), r = function() {
        var l = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return l + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var a = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, i = t.VAR_FG_SIZE, r = t.VAR_LEFT, a = t.VAR_TOP, l = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(l, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(En)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ga = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, Cd = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
}, Us = {
  LABEL_SCALE: 0.75
}, Sd = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], xd = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ns = ["mousedown", "touchstart"], Hs = ["click", "keydown"], Td = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.isFocused = !1, r.receivedUserInput = !1, r.valid = !0, r.useNativeValidation = !0, r.validateOnValueChange = !0, r.helperText = i.helperText, r.characterCounter = i.characterCounter, r.leadingIcon = i.leadingIcon, r.trailingIcon = i.trailingIcon, r.inputFocusHandler = function() {
        r.activateFocus();
      }, r.inputBlurHandler = function() {
        r.deactivateFocus();
      }, r.inputInputHandler = function() {
        r.handleInput();
      }, r.setPointerXOffset = function(a) {
        r.setTransformOrigin(a);
      }, r.textFieldInteractionHandler = function() {
        r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler = function(a) {
        r.handleValidationAttributeChange(a);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Cd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ga;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Us;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return xd.indexOf(t) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t, i, r, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var l = bn(Ns), u = l.next(); !u.done; u = l.next()) {
          var o = u.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          u && !u.done && (i = l.return) && i.call(l);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = bn(Hs), c = d.next(); !c.done; c = d.next()) {
          var o = c.value;
          this.adapter.registerTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (h) {
        r = { error: h };
      } finally {
        try {
          c && !c.done && (a = d.return) && a.call(d);
        } finally {
          if (r) throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, i, r, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var l = bn(Ns), u = l.next(); !u.done; u = l.next()) {
          var o = u.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          u && !u.done && (i = l.return) && i.call(l);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = bn(Hs), c = d.next(); !c.done; c = d.next()) {
          var o = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (h) {
        r = { error: h };
      } finally {
        try {
          c && !c.done && (a = d.return) && a.call(d);
        } finally {
          if (r) throw r.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var i = this;
      t.some(function(r) {
        return Sd.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * Us.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = t.touches, r = i ? i[0] : t, a = r.target.getBoundingClientRect(), l = r.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(l);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var t = this.isValid();
      this.styleValidity(t), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(t) {
      if (this.getValue() !== t && (this.getNativeInput().value = t), this.setcharacterCounter(t.length), this.validateOnValueChange) {
        var i = this.isValid();
        this.styleValidity(i);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(t) {
      this.valid = t, this.styleValidity(t);
      var i = !t && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(i);
    }, e.prototype.setValidateOnValueChange = function(t) {
      this.validateOnValueChange = t;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(t) {
      this.useNativeValidation = t;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(t) {
      this.getNativeInput().disabled = t, this.styleDisabled(t);
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.setTrailingIconAriaLabel = function(t) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(t);
    }, e.prototype.setTrailingIconContent = function(t) {
      this.trailingIcon && this.trailingIcon.setContent(t);
    }, e.prototype.setcharacterCounter = function(t) {
      if (this.characterCounter) {
        var i = this.getNativeInput().maxLength;
        if (i === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(t, i);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(t) {
      var i = e.cssClasses.INVALID;
      if (t ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText) {
        this.helperText.setValidity(t);
        var r = this.helperText.isValidation();
        if (!r)
          return;
        var a = this.helperText.isVisible(), l = this.helperText.getId();
        a && l ? this.adapter.setInputAttr(ga.ARIA_DESCRIBEDBY, l) : this.adapter.removeInputAttr(ga.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(t) {
      var i = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.styleDisabled = function(t) {
      var i = e.cssClasses, r = i.DISABLED, a = i.INVALID;
      t ? (this.adapter.addClass(r), this.adapter.removeClass(a)) : this.adapter.removeClass(r), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
    }, e.prototype.styleFloating = function(t) {
      var i = e.cssClasses.LABEL_FLOATING;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.getNativeInput = function() {
      var t = this.adapter ? this.adapter.getNativeInput() : null;
      return t || {
        disabled: !1,
        maxLength: -1,
        required: !1,
        type: "input",
        validity: {
          badInput: !1,
          valid: !0
        },
        value: ""
      };
    }, e;
  }(En)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Vs = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Ld = {
  ROOT: "mdc-text-field__icon"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var js = ["click", "keydown"], wd = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Vs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ld;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          },
          removeAttr: function() {
          },
          setContent: function() {
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          notifyIconAction: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t, i;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var r = bn(js), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.registerInteractionHandler(l, this.interactionHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.destroy = function() {
      var t, i;
      try {
        for (var r = bn(js), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.deregisterInteractionHandler(l, this.interactionHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.setDisabled = function(t) {
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Vs.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var i = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || i) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(En)
);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ye = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, Ft = /* @__PURE__ */ new Set();
Ft.add(ye.BACKSPACE);
Ft.add(ye.ENTER);
Ft.add(ye.SPACEBAR);
Ft.add(ye.PAGE_UP);
Ft.add(ye.PAGE_DOWN);
Ft.add(ye.END);
Ft.add(ye.HOME);
Ft.add(ye.ARROW_LEFT);
Ft.add(ye.ARROW_UP);
Ft.add(ye.ARROW_RIGHT);
Ft.add(ye.ARROW_DOWN);
Ft.add(ye.DELETE);
Ft.add(ye.ESCAPE);
Ft.add(ye.TAB);
var zt = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, Bt = /* @__PURE__ */ new Map();
Bt.set(zt.BACKSPACE, ye.BACKSPACE);
Bt.set(zt.ENTER, ye.ENTER);
Bt.set(zt.SPACEBAR, ye.SPACEBAR);
Bt.set(zt.PAGE_UP, ye.PAGE_UP);
Bt.set(zt.PAGE_DOWN, ye.PAGE_DOWN);
Bt.set(zt.END, ye.END);
Bt.set(zt.HOME, ye.HOME);
Bt.set(zt.ARROW_LEFT, ye.ARROW_LEFT);
Bt.set(zt.ARROW_UP, ye.ARROW_UP);
Bt.set(zt.ARROW_RIGHT, ye.ARROW_RIGHT);
Bt.set(zt.ARROW_DOWN, ye.ARROW_DOWN);
Bt.set(zt.DELETE, ye.DELETE);
Bt.set(zt.ESCAPE, ye.ESCAPE);
Bt.set(zt.TAB, ye.TAB);
var ci = /* @__PURE__ */ new Set();
ci.add(ye.PAGE_UP);
ci.add(ye.PAGE_DOWN);
ci.add(ye.END);
ci.add(ye.HOME);
ci.add(ye.ARROW_LEFT);
ci.add(ye.ARROW_UP);
ci.add(ye.ARROW_RIGHT);
ci.add(ye.ARROW_DOWN);
function dt(n) {
  var e = n.key;
  if (Ft.has(e))
    return e;
  var t = Bt.get(n.keyCode);
  return t || ye.UNKNOWN;
}
function it(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function xt(n, e, t, i = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dispatch event without element.");
  const r = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: t }));
  return n == null || n.dispatchEvent(r), r;
}
function Ha(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r], l = a.indexOf("$");
    l !== -1 && e.indexOf(a.substring(0, l + 1)) !== -1 || e.indexOf(a) === -1 && (i[a] = n[a]);
  }
  return i;
}
function It(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    a.substring(0, e.length) === e && (i[a.substring(e.length)] = n[a]);
  }
  return i;
}
class Rr {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(e, t, i, r) {
    this.elementMap.has(e) || this.elementMap.set(e, {});
    const a = this.elementMap.get(e);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(i, Ru(e, t, i, r));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, t, i) {
    const r = this.elementMap.get(e);
    if (r == null || !(t in r))
      return;
    const a = r[t], l = a.get(i);
    l != null && (l(), a.delete(i), a.size === 0 && (delete r[t], Object.keys(r).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, t) => {
      for (let [i, r] of Object.entries(e))
        r.forEach((a, l) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function te(n, e) {
  let t = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const r = e[i], a = Array.isArray(r) ? r[0] : r;
      Array.isArray(r) && r.length > 1 ? t.push(a(n, r[1])) : t.push(a(n));
    }
  return {
    update(i) {
      if ((i && i.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let r = 0; r < i.length; r++) {
          const a = t[r];
          if (a && a.update) {
            const l = i[r];
            Array.isArray(l) && l.length > 1 ? a.update(l[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        r && r.destroy && r.destroy();
      }
    }
  };
}
var Md = /* @__PURE__ */ ku("<svg><!></svg>");
function os(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "tag", 3, "div"), r = /* @__PURE__ */ yt(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ae(() => [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ].indexOf(i()) > -1);
  let l;
  function u() {
    return l;
  }
  var o = { getElement: u }, d = ve(), c = re(d);
  {
    var h = (v) => {
      var m = Md();
      ct(m, () => ({ ...r }));
      var g = Q(m);
      xe(g, () => e.children ?? Ee), Me(m, (E) => l = E, () => l), $e(m, (E, D) => te == null ? void 0 : te(E, D), t), L(v, m);
    }, f = (v) => {
      var m = ve(), g = re(m);
      Ls(g, i, !1, (E, D) => {
        Me(E, (S) => l = S, () => l), $e(E, (S, C) => te == null ? void 0 : te(S, C), t), ct(E, () => ({ ...r }));
      }), L(v, m);
    }, p = (v) => {
      var m = ve(), g = re(m);
      Ls(g, i, !1, (E, D) => {
        Me(E, (M) => l = M, () => l), $e(E, (M, w) => te == null ? void 0 : te(M, w), t), ct(E, () => ({ ...r }));
        var S = ve(), C = re(S);
        xe(C, () => e.children ?? Ee), L(D, S);
      }), L(v, m);
    };
    le(c, (v) => {
      i() === "svg" ? v(h) : s(a) ? v(f, 1) : v(p, -1);
    });
  }
  return L(n, d), Qe(o);
}
function Nr(n, e) {
  Ye(e, !0);
  const [t, i] = ia(), r = xa(e.value);
  me(e.key, r), Be(() => {
    Kr(r, e.value);
  }), di(() => {
    r.set(void 0);
  });
  var a = ve(), l = re(a);
  xe(l, () => e.children ?? Ee), L(n, a), Qe(), i();
}
const { applyPassive: Gs } = eo, { matches: Od } = ls;
function Ln(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: a, active: l, rippleElement: u, eventTarget: o, activeTarget: d, addClass: c = (v) => n.classList.add(v), removeClass: h = (v) => n.classList.remove(v), addStyle: f = (v, m) => n.style.setProperty(v, m), initPromise: p = Promise.resolve() } = {}) {
  let v, m = new Rr(), g = Oe("SMUI:addLayoutListener"), E, D = l, S = o, C = d;
  function M() {
    t ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && D !== l && (D = l, l ? v.activate() : l === !1 && v.deactivate()), e && !v ? (v = new Ed({
      addClass: c,
      browserSupportsCssVars: () => yd(window),
      computeBoundingRect: () => (u || n).getBoundingClientRect(),
      containsEventTarget: (R) => n.contains(R),
      deregisterDocumentInteractionHandler: (R, I) => m.off(document.documentElement, R, I),
      deregisterInteractionHandler: (R, I) => m.off(o || n, R, I),
      deregisterResizeHandler: (R) => window.removeEventListener("resize", R),
      getWindowPageOffset: () => {
        var R, I;
        return {
          x: (R = window.pageXOffset) !== null && R !== void 0 ? R : window.scrollX,
          y: (I = window.pageYOffset) !== null && I !== void 0 ? I : window.scrollY
        };
      },
      isSurfaceActive: () => l ?? Od(d || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (R, I) => {
        const x = Gs();
        m.on(document.documentElement, R, I, typeof x == "boolean" ? { capture: x } : x);
      },
      registerInteractionHandler: (R, I) => {
        const x = Gs();
        m.on(o || n, R, I, typeof x == "boolean" ? { capture: x } : x);
      },
      registerResizeHandler: (R) => m.on(window, "resize", R),
      removeClass: h,
      updateCssVariable: f
    }), p.then(() => {
      v && (v.init(), v.setUnbounded(i));
    })) : v && !e && p.then(() => {
      v && (v.destroy(), v = void 0, m.clear());
    }), v && (S !== o || C !== d) && (S = o, C = d, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  M(), g && (E = g(w));
  function w() {
    v && v.layout();
  }
  return {
    update(R) {
      ({
        ripple: e,
        surface: t,
        unbounded: i,
        disabled: r,
        color: a,
        active: l,
        rippleElement: u,
        eventTarget: o,
        activeTarget: d,
        addClass: c,
        removeClass: h,
        addStyle: f,
        initPromise: p
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (I) => n.classList.add(I), removeClass: (I) => n.classList.remove(I), addStyle: (I, x) => n.style.setProperty(I, x), initPromise: Promise.resolve() }, R)), M();
    },
    destroy() {
      v && (v.destroy(), v = void 0, m.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), E && E();
    }
  };
}
var Dd = /* @__PURE__ */ ie("<span><!></span>"), Rd = /* @__PURE__ */ ie("<label><!></label>");
function Yr(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "style", 3, ""), a = b(e, "floatAbove", 15, !1), l = b(e, "required", 15, !1), u = b(e, "wrapped", 3, !1), o = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "children"
  ]), d, c = /* @__PURE__ */ fe(void 0), h = new Rr(), f = De({}), p = De({}), v = Oe("SMUI:generic:input:props") ?? {}, m = a();
  Be(() => {
    s(c) && m !== a() && (m = a(), s(c).float(a()));
  });
  let g = l();
  Be(() => {
    s(c) && g !== l() && (g = l(), s(c).setRequired(l()));
  });
  const E = Oe("SMUI:floating-label:mount"), D = Oe("SMUI:floating-label:unmount");
  kt(() => {
    X(
      c,
      new hd({
        addClass: S,
        removeClass: C,
        getWidth: () => {
          var he, ge;
          const $ = ne(), oe = $.cloneNode(!0);
          (he = $.parentNode) == null || he.appendChild(oe), oe.classList.add("smui-floating-label--remove-transition"), oe.classList.add("smui-floating-label--force-size"), oe.classList.remove("mdc-floating-label--float-above");
          const j = oe.scrollWidth;
          return (ge = $.parentNode) == null || ge.removeChild(oe), j;
        },
        registerInteractionHandler: ($, oe) => h.on(ne(), $, oe),
        deregisterInteractionHandler: ($, oe) => h.off(ne(), $, oe)
      }),
      !0
    );
    const V = {
      get element() {
        return ne();
      },
      addStyle: M,
      removeStyle: w
    };
    return E && E(V), s(c).init(), () => {
      var $;
      D && D(V), ($ = s(c)) == null || $.destroy(), h.clear();
    };
  });
  function S(V) {
    f[V] || (f[V] = !0);
  }
  function C(V) {
    (!(V in f) || f[V]) && (f[V] = !1);
  }
  function M(V, $) {
    p[V] != $ && ($ === "" || $ == null ? delete p[V] : p[V] = $);
  }
  function w(V) {
    V in p && delete p[V];
  }
  function R(V) {
    var $;
    ($ = s(c)) == null || $.shake(V);
  }
  function I(V) {
    a(V);
  }
  function x(V) {
    l(V);
  }
  function G() {
    if (s(c) == null)
      throw new Error("Instance is undefined.");
    return s(c).getWidth();
  }
  function ne() {
    return d;
  }
  var k = { shake: R, float: I, setRequired: x, getWidth: G, getElement: ne }, N = ve(), Ue = re(N);
  {
    var Y = (V) => {
      var $ = Dd();
      ct($, (j, he) => ({ class: j, style: he, ...o }), [
        () => it({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": l(),
          ...f,
          [i()]: !0
        }),
        () => Object.entries(p).map(([j, he]) => `${j}: ${he};`).concat([r()]).join(" ")
      ]);
      var oe = Q($);
      xe(oe, () => e.children ?? Ee), Me($, (j) => d = j, () => d), $e($, (j, he) => te == null ? void 0 : te(j, he), t), L(V, $);
    }, F = (V) => {
      var $ = Rd();
      ct(
        $,
        (j, he) => ({
          class: j,
          style: he,
          for: e.for || (v ? v.id : void 0),
          ...o
        }),
        [
          () => it({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": l(),
            ...f,
            [i()]: !0
          }),
          () => Object.entries(p).map(([j, he]) => `${j}: ${he};`).concat([r()]).join(" ")
        ]
      );
      var oe = Q($);
      xe(oe, () => e.children ?? Ee), Me($, (j) => d = j, () => d), $e($, (j, he) => te == null ? void 0 : te(j, he), t), L(V, $);
    };
    le(Ue, (V) => {
      u() ? V(Y) : V(F, -1);
    });
  }
  return L(n, N), Qe(k);
}
var _d = /* @__PURE__ */ ie("<div></div>");
function no(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "style", 3, ""), a = b(e, "active", 3, !1), l = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, o = /* @__PURE__ */ fe(void 0), d = new Rr(), c = De({}), h = De({});
  kt(() => (X(
    o,
    new vd({
      addClass: p,
      removeClass: v,
      hasClass: f,
      setStyle: m,
      registerEventHandler: (w, R) => d.on(S(), w, R),
      deregisterEventHandler: (w, R) => d.off(S(), w, R)
    }),
    !0
  ), s(o).init(), () => {
    var w;
    (w = s(o)) == null || w.destroy(), d.clear();
  }));
  function f(w) {
    return w in c ? c[w] : S().classList.contains(w);
  }
  function p(w) {
    c[w] || (c[w] = !0);
  }
  function v(w) {
    (!(w in c) || c[w]) && (c[w] = !1);
  }
  function m(w, R) {
    h[w] != R && (R === "" || R == null ? delete h[w] : h[w] = R);
  }
  function g() {
    var w;
    (w = s(o)) == null || w.activate();
  }
  function E() {
    var w;
    (w = s(o)) == null || w.deactivate();
  }
  function D(w) {
    var R;
    (R = s(o)) == null || R.setRippleCenter(w);
  }
  function S() {
    return u;
  }
  var C = { activate: g, deactivate: E, setRippleCenter: D, getElement: S }, M = _d();
  return ct(M, (w, R) => ({ class: w, style: R, ...l }), [
    () => it({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...c,
      [i()]: !0
    }),
    () => Object.entries(h).map(([w, R]) => `${w}: ${R};`).concat([r()]).join(" ")
  ]), Me(M, (w) => u = w, () => u), $e(M, (w, R) => te == null ? void 0 : te(w, R), t), L(n, M), Qe(C);
}
var Pd = /* @__PURE__ */ ie('<div class="mdc-notched-outline__notch"><!></div>'), kd = /* @__PURE__ */ ie('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function io(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "notched", 3, !1), a = b(e, "noLabel", 3, !1), l = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, o = /* @__PURE__ */ fe(void 0), d = /* @__PURE__ */ fe(void 0), c = De({}), h = De({}), f;
  Be(() => {
    s(d) !== f && (s(d) ? (s(d).addStyle("transition-duration", "0s"), p("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(d) && s(d).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = s(d));
  }), me("SMUI:floating-label:mount", (I) => {
    X(d, I, !0);
  }), me("SMUI:floating-label:unmount", () => {
    X(d, void 0);
  }), kt(() => (X(
    o,
    new gd({
      addClass: p,
      removeClass: v,
      setNotchWidthProperty: (I) => m("width", I + "px"),
      removeNotchWidthProperty: () => g("width")
    }),
    !0
  ), s(o).init(), () => {
    var I;
    (I = s(o)) == null || I.destroy();
  }));
  function p(I) {
    c[I] || (c[I] = !0);
  }
  function v(I) {
    (!(I in c) || c[I]) && (c[I] = !1);
  }
  function m(I, x) {
    h[I] != x && (x === "" || x == null ? delete h[I] : h[I] = x);
  }
  function g(I) {
    I in h && delete h[I];
  }
  function E(I) {
    var x;
    (x = s(o)) == null || x.notch(I);
  }
  function D() {
    var I;
    (I = s(o)) == null || I.closeNotch();
  }
  function S() {
    return u;
  }
  var C = { notch: E, closeNotch: D, getElement: S }, M = kd();
  ct(M, (I) => ({ class: I, ...l }), [
    () => it({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": r(),
      "mdc-notched-outline--no-label": a(),
      ...c,
      [i()]: !0
    })
  ]);
  var w = z(Q(M), 2);
  {
    var R = (I) => {
      var x = Pd(), G = Q(x);
      xe(G, () => e.children ?? Ee), Fe((ne) => Yl(x, ne), [
        () => Object.entries(h).map(([ne, k]) => `${ne}: ${k};`).join(" ")
      ]), L(I, x);
    };
    le(w, (I) => {
      a() || I(R);
    });
  }
  return Me(M, (I) => u = I, () => u), $e(M, (I, x) => te == null ? void 0 : te(I, x), t), L(n, M), Qe(C);
}
function us(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "component", 3, os), a = b(e, "tag", 3, "div"), l = b(e, "_smuiClass", 3, ""), u = b(e, "_smuiClassMap", 23, () => ({})), o = b(e, "_smuiContexts", 19, () => ({})), d = b(e, "_smuiProps", 19, () => ({})), c = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "_smuiClass",
    "_smuiClassMap",
    "_smuiContexts",
    "_smuiProps",
    "children"
  ]), h;
  const f = [];
  Object.entries(u()).forEach(([E, D]) => {
    const S = Oe(D);
    S && "subscribe" in S && f.push(S.subscribe((C) => {
      u()[E] = C;
    }));
  });
  for (let E in o())
    o().hasOwnProperty(E) && me(E, o()[E]);
  di(() => {
    for (const E of f)
      E();
  });
  function p() {
    return h.getElement();
  }
  var v = { getElement: p }, m = ve(), g = re(m);
  {
    let E = /* @__PURE__ */ ae(() => it({
      [l()]: !0,
      ...u(),
      [i()]: !0
    }));
    ss(g, r, (D, S) => {
      Me(
        S(D, nt(
          {
            get tag() {
              return a();
            },
            get use() {
              return t();
            },
            get class() {
              return s(E);
            }
          },
          d,
          () => c,
          {
            children: (C, M) => {
              var w = ve(), R = re(w);
              xe(R, () => e.children ?? Ee), L(C, w);
            },
            $$slots: { default: !0 }
          }
        )),
        (C) => h = C,
        () => h
      );
    });
  }
  return L(n, m), Qe(v);
}
function Fd(n, e) {
  Ye(e, !0);
  let t = /* @__PURE__ */ yt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return Me(
    us(n, nt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (l, u) => {
        var o = ve(), d = re(o);
        xe(d, () => e.children ?? Ee), L(l, o);
      },
      $$slots: { default: !0 }
    })),
    (l) => i = l,
    () => i
  ), Qe(a);
}
function Bd(n, e) {
  Ye(e, !0);
  let t = /* @__PURE__ */ yt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return Me(
    us(n, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (l, u) => {
          var o = ve(), d = re(o);
          xe(d, () => e.children ?? Ee), L(l, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => i = l,
    () => i
  ), Qe(a);
}
function Ud(n, e) {
  Ye(e, !0);
  let t = /* @__PURE__ */ yt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return Me(
    us(n, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (l, u) => {
          var o = ve(), d = re(o);
          xe(d, () => e.children ?? Ee), L(l, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => i = l,
    () => i
  ), Qe(a);
}
var Nd = /* @__PURE__ */ ie("<input/>");
function Hd(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "type", 3, "text"), a = b(e, "placeholder", 3, " "), l = b(e, "value", 15), u = b(e, "files", 15, null), o = b(e, "dirty", 15, !1), d = b(e, "invalid", 15, !1), c = b(e, "updateInvalid", 3, !0), h = b(e, "initialInvalid", 3, !1), f = b(e, "emptyValueNull", 19, () => l() === null), p = b(e, "emptyValueUndefined", 19, () => l() === void 0), v = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "emptyValueNull",
    "emptyValueUndefined"
  ]), m, g = De({}), E = De({});
  Be(() => {
    r() === "file" ? delete E.value : E.value = l() == null ? "" : l();
  }), kt(() => {
    c() && h() && d(G().matches(":invalid"));
  });
  function D(Y) {
    return Y === "" ? Number.NaN : +Y;
  }
  function S(Y) {
    if (r() === "file") {
      u(Y.currentTarget.files);
      return;
    }
    if (Y.currentTarget.value === "" && f()) {
      l(null);
      return;
    }
    if (Y.currentTarget.value === "" && p()) {
      l(void 0);
      return;
    }
    switch (r()) {
      case "number":
      case "range":
        l(D(Y.currentTarget.value));
        break;
      default:
        l(Y.currentTarget.value);
        break;
    }
  }
  function C(Y) {
    (r() === "file" || r() === "range") && S(Y), o(!0), c() && d(G().matches(":invalid"));
  }
  function M(Y) {
    return Y in g ? g[Y] ?? null : G().getAttribute(Y);
  }
  function w(Y, F) {
    g[Y] !== F && (g[Y] = F);
  }
  function R(Y) {
    (!(Y in g) || g[Y] != null) && (g[Y] = void 0);
  }
  function I() {
    G().focus();
  }
  function x() {
    G().blur();
  }
  function G() {
    return m;
  }
  var ne = { getAttr: M, addAttr: w, removeAttr: R, focus: I, blur: x, getElement: G }, k = Nd(), N = (Y) => {
    var F;
    r() !== "file" && S(Y), (F = e.oninput) == null || F.call(e, Y);
  }, Ue = (Y) => {
    var F;
    C(Y), (F = e.onchange) == null || F.call(e, Y);
  };
  return ct(
    k,
    (Y) => ({
      class: Y,
      type: r(),
      placeholder: a(),
      ...E,
      ...g,
      ...v,
      oninput: N,
      onchange: Ue
    }),
    [
      () => it({ "mdc-text-field__input": !0, [i()]: !0 })
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), Me(k, (Y) => m = Y, () => m), $e(k, (Y, F) => te == null ? void 0 : te(Y, F), t), L(n, k), Qe(ne);
}
var Vd = /* @__PURE__ */ ie("<textarea></textarea>");
function jd(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "style", 3, ""), a = b(e, "value", 15, ""), l = b(e, "dirty", 15, !1), u = b(e, "invalid", 15, !1), o = b(e, "updateInvalid", 3, !0), d = b(e, "initialInvalid", 3, !1), c = b(e, "resizable", 3, !0), h = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "resizable"
  ]), f, p = De({});
  kt(() => {
    o() && d() && u(C().matches(":invalid"));
  });
  function v() {
    l(!0), o() && u(C().matches(":invalid"));
  }
  function m(I) {
    return I in p ? p[I] ?? null : C().getAttribute(I);
  }
  function g(I, x) {
    p[I] !== x && (p[I] = x);
  }
  function E(I) {
    (!(I in p) || p[I] != null) && (p[I] = void 0);
  }
  function D() {
    C().focus();
  }
  function S() {
    C().blur();
  }
  function C() {
    return f;
  }
  var M = { getAttr: m, addAttr: g, removeAttr: E, focus: D, blur: S, getElement: C }, w = Vd(), R = (I) => {
    var x;
    v(), (x = e.onchange) == null || x.call(e, I);
  };
  return ct(
    w,
    (I) => ({
      class: I,
      style: `${c() ? "" : "resize: none; "}${r()}`,
      ...p,
      ...h,
      onchange: R
    }),
    [
      () => it({ "mdc-text-field__input": !0, [i()]: !0 })
    ]
  ), Me(w, (I) => f = I, () => f), $e(w, (I, x) => te == null ? void 0 : te(I, x), t), Or(() => rd(w, a)), L(n, w), Qe(M);
}
var Gd = /* @__PURE__ */ ie('<span class="mdc-text-field__ripple"></span>'), zd = /* @__PURE__ */ ie("<!> <!>", 1), Xd = /* @__PURE__ */ ie("<span><!> <!></span>"), Wd = /* @__PURE__ */ ie("<!> <!> <!>", 1), Kd = /* @__PURE__ */ ie("<label><!> <!> <!> <!> <!> <!> <!></label>"), qd = /* @__PURE__ */ ie("<div><!> <!> <!> <!> <!></div>"), Yd = /* @__PURE__ */ ie("<!> <!>", 1);
function Qd(n, e) {
  Ye(e, !0);
  const { applyPassive: t } = eo;
  let i = () => {
  };
  function r(_) {
    return _ === i;
  }
  let a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), u = b(e, "style", 3, ""), o = b(e, "ripple", 3, !0), d = b(e, "disabled", 3, !1), c = b(e, "required", 3, !1), h = b(e, "textarea", 3, !1), f = b(e, "variant", 19, () => h() ? "outlined" : "standard"), p = b(e, "noLabel", 3, !1), v = b(e, "type", 3, "text"), m = b(e, "value", 15), g = b(e, "files", 15, i), E = b(e, "invalid", 15, i), D = b(e, "updateInvalid", 19, () => r(E())), S = b(e, "initialInvalid", 3, !1), C = b(e, "dirty", 15, !1), M = b(e, "validateOnValueChange", 19, D), w = b(e, "useNativeValidation", 19, D), R = b(e, "withLeadingIcon", 3, i), I = b(e, "withTrailingIcon", 3, i), x = b(e, "input", 7), G = b(e, "floatingLabel", 7), ne = b(e, "lineRipple", 7), k = b(e, "notchedOutline", 7), N = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "children",
    "leadingIcon",
    "trailingIcon",
    "internalCounter",
    "line",
    "helper"
  ]);
  const Ue = m() !== void 0 || m() === void 0 && e.input$emptyValueUndefined || !r(g());
  r(g()) && g(null), r(E()) && E(!1);
  let Y, F = /* @__PURE__ */ fe(void 0), V = new Rr(), $ = De({}), oe = De({}), j = /* @__PURE__ */ fe(void 0), he = /* @__PURE__ */ fe(!1), ge = /* @__PURE__ */ fe(De(S())), se = Oe("SMUI:addLayoutListener"), de, Le, O = new Promise((_) => Le = _), T, U, P, W;
  const Z = /* @__PURE__ */ ae(() => x() && x().getElement());
  Be(() => {
    (C() || s(ge) || !D()) && s(F) && s(F).isValid() !== !E() && (D() ? E(!s(F).isValid()) : s(F).setValid(!E()));
  }), Be(() => {
    s(F) && s(F).getValidateOnValueChange() !== M() && s(F).setValidateOnValueChange(r(M()) ? !1 : M());
  }), Be(() => {
    s(F) && s(F).setUseNativeValidation(r(w()) ? !0 : w());
  }), Be(() => {
    s(F) && s(F).setDisabled(d());
  });
  let Pe = m();
  Be(() => {
    if (s(F) && Ue && Pe !== m()) {
      Pe = m();
      const _ = `${m() == null ? "" : m()}`;
      s(F).getValue() !== _ && s(F).setValue(_);
    }
  }), se && (de = se(J)), me("SMUI:textfield:leading-icon:mount", (_) => {
    T = _;
  }), me("SMUI:textfield:leading-icon:unmount", () => {
    T = void 0;
  }), me("SMUI:textfield:trailing-icon:mount", (_) => {
    U = _;
  }), me("SMUI:textfield:trailing-icon:unmount", () => {
    U = void 0;
  }), me("SMUI:textfield:helper-text:id", (_) => {
    X(j, _, !0);
  }), me("SMUI:textfield:helper-text:mount", (_) => {
    P = _;
  }), me("SMUI:textfield:helper-text:unmount", () => {
    X(j, void 0), P = void 0;
  }), me("SMUI:textfield:character-counter:mount", (_) => {
    W = _;
  }), me("SMUI:textfield:character-counter:unmount", () => {
    W = void 0;
  }), kt(() => {
    var _;
    if (X(
      F,
      new Td(
        {
          // getRootAdapterMethods_
          addClass: pe,
          removeClass: ce,
          hasClass: Ne,
          registerTextFieldInteractionHandler: (B, Ie) => V.on(ee(), B, Ie),
          deregisterTextFieldInteractionHandler: (B, Ie) => V.off(ee(), B, Ie),
          registerValidationAttributeChangeHandler: (B) => {
            const Ie = (wt) => wt.map((Ut) => Ut.attributeName).filter((Ut) => Ut), Ze = new MutationObserver((wt) => {
              w() && B(Ie(wt));
            }), ut = { attributes: !0 };
            return x() && Ze.observe(x().getElement(), ut), Ze;
          },
          deregisterValidationAttributeChangeHandler: (B) => {
            B.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var B;
            return ((B = x()) == null ? void 0 : B.getElement()) ?? null;
          },
          setInputAttr: (B, Ie) => {
            var Ze;
            (Ze = x()) == null || Ze.addAttr(B, Ie);
          },
          removeInputAttr: (B) => {
            var Ie;
            (Ie = x()) == null || Ie.removeAttr(B);
          },
          isFocused: () => {
            var B;
            return document.activeElement === ((B = x()) == null ? void 0 : B.getElement());
          },
          registerInputInteractionHandler: (B, Ie) => {
            var ut;
            const Ze = (ut = x()) == null ? void 0 : ut.getElement();
            if (Ze) {
              const wt = t();
              V.on(Ze, B, Ie, typeof wt == "boolean" ? { capture: wt } : wt);
            }
          },
          deregisterInputInteractionHandler: (B, Ie) => {
            var ut;
            const Ze = (ut = x()) == null ? void 0 : ut.getElement();
            Ze && V.off(Ze, B, Ie);
          },
          // getLabelAdapterMethods_
          floatLabel: (B) => G() && G().float(B),
          getLabelWidth: () => G() ? G().getWidth() : 0,
          hasLabel: () => !!G(),
          shakeLabel: (B) => G() && G().shake(B),
          setLabelRequired: (B) => G() && G().setRequired(B),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => ne() && ne().activate(),
          deactivateLineRipple: () => ne() && ne().deactivate(),
          setLineRippleTransformOrigin: (B) => ne() && ne().setRippleCenter(B),
          // getOutlineAdapterMethods_
          closeOutline: () => k() && k().closeNotch(),
          hasOutline: () => !!k(),
          notchOutline: (B) => k() && k().notch(B)
        },
        {
          get helperText() {
            return P;
          },
          get characterCounter() {
            return W;
          },
          get leadingIcon() {
            return T;
          },
          get trailingIcon() {
            return U;
          }
        }
      ),
      !0
    ), Ue) {
      if (x() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (_ = s(F)) == null || _.init();
    } else
      Vl().then(() => {
        var B;
        if (x() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (B = s(F)) == null || B.init();
      });
    return Le(), () => {
      var B;
      (B = s(F)) == null || B.destroy(), V.clear();
    };
  }), di(() => {
    de && de();
  });
  function Ne(_) {
    return _ in $ ? $[_] ?? null : ee().classList.contains(_);
  }
  function pe(_) {
    $[_] || ($[_] = !0);
  }
  function ce(_) {
    (!(_ in $) || $[_]) && ($[_] = !1);
  }
  function ot(_, B) {
    oe[_] != B && (B === "" || B == null ? delete oe[_] : oe[_] = B);
  }
  function Zt() {
    var _;
    (_ = x()) == null || _.focus();
  }
  function Jt() {
    var _;
    (_ = x()) == null || _.blur();
  }
  function J() {
    if (s(F)) {
      const _ = s(F).shouldFloat;
      s(F).notchOutline(_);
    }
  }
  function ee() {
    return Y;
  }
  var Ce = { focus: Zt, blur: Jt, layout: J, getElement: ee }, ke = Yd(), At = re(ke);
  {
    var Ve = (_) => {
      var B = Kd();
      ct(B, (_e, ze, Ge) => ({ class: _e, style: ze, for: void 0, ...Ge }), [
        () => it({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": p() || e.label == null,
          "mdc-text-field--label-floating": s(he) || m() != null && m() !== "",
          "mdc-text-field--with-leading-icon": r(R()) ? e.leadingIcon : R(),
          "mdc-text-field--with-trailing-icon": r(I()) ? e.trailingIcon : I(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": E(),
          ...$,
          [l()]: !0
        }),
        () => Object.entries(oe).map(([_e, ze]) => `${_e}: ${ze};`).concat([u()]).join(" "),
        () => Ha(N, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ie = Q(B);
      {
        var Ze = (_e) => {
          var ze = zd(), Ge = re(ze);
          {
            var Ot = (vt) => {
              var Et = Gd();
              L(vt, Et);
            };
            le(Ge, (vt) => {
              f() === "filled" && vt(Ot);
            });
          }
          var fn = z(Ge, 2);
          {
            var Xe = (vt) => {
              {
                let Et = /* @__PURE__ */ ae(() => s(he) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), He = /* @__PURE__ */ ae(() => It(N, "label$"));
                Me(
                  Yr(vt, nt(
                    {
                      get floatAbove() {
                        return s(Et);
                      },
                      get required() {
                        return c();
                      },
                      wrapped: !0
                    },
                    () => s(He),
                    {
                      children: (Ct, Fn) => {
                        var $t = ve(), pt = re($t);
                        {
                          var Dt = (Xt) => {
                          }, en = (Xt) => {
                            var tn = tt();
                            Fe(() => Ae(tn, e.label)), L(Xt, tn);
                          }, hn = (Xt) => {
                            var tn = ve(), Ht = re(tn);
                            xe(Ht, () => e.label), L(Xt, tn);
                          };
                          le(pt, (Xt) => {
                            e.label == null ? Xt(Dt) : typeof e.label == "string" ? Xt(en, 1) : Xt(hn, -1);
                          });
                        }
                        L(Ct, $t);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Ct) => G(Ct),
                  () => G()
                );
              }
            };
            le(fn, (vt) => {
              !p() && e.label != null && vt(Xe);
            });
          }
          L(_e, ze);
        };
        le(Ie, (_e) => {
          !h() && f() !== "outlined" && _e(Ze);
        });
      }
      var ut = z(Ie, 2);
      {
        var wt = (_e) => {
          {
            let ze = /* @__PURE__ */ ae(() => p() || e.label == null), Ge = /* @__PURE__ */ ae(() => It(N, "outline$"));
            Me(
              io(_e, nt(
                {
                  get noLabel() {
                    return s(ze);
                  }
                },
                () => s(Ge),
                {
                  children: (Ot, fn) => {
                    var Xe = ve(), vt = re(Xe);
                    {
                      var Et = (He) => {
                        {
                          let Ct = /* @__PURE__ */ ae(() => s(he) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), Fn = /* @__PURE__ */ ae(() => It(N, "label$"));
                          Me(
                            Yr(He, nt(
                              {
                                get floatAbove() {
                                  return s(Ct);
                                },
                                get required() {
                                  return c();
                                },
                                wrapped: !0
                              },
                              () => s(Fn),
                              {
                                children: ($t, pt) => {
                                  var Dt = ve(), en = re(Dt);
                                  {
                                    var hn = (Ht) => {
                                    }, Xt = (Ht) => {
                                      var fi = tt();
                                      Fe(() => Ae(fi, e.label)), L(Ht, fi);
                                    }, tn = (Ht) => {
                                      var fi = ve(), sr = re(fi);
                                      xe(sr, () => e.label), L(Ht, fi);
                                    };
                                    le(en, (Ht) => {
                                      e.label == null ? Ht(hn) : typeof e.label == "string" ? Ht(Xt, 1) : Ht(tn, -1);
                                    });
                                  }
                                  L($t, Dt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            ($t) => G($t),
                            () => G()
                          );
                        }
                      };
                      le(vt, (He) => {
                        !p() && e.label != null && He(Et);
                      });
                    }
                    L(Ot, Xe);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ot) => k(Ot),
              () => k()
            );
          }
        };
        le(ut, (_e) => {
          (h() || f() === "outlined") && _e(wt);
        });
      }
      var Ut = z(ut, 2);
      Nr(Ut, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (_e, ze) => {
          var Ge = ve(), Ot = re(Ge);
          xe(Ot, () => e.leadingIcon ?? Ee), L(_e, Ge);
        },
        $$slots: { default: !0 }
      });
      var ki = z(Ut, 2);
      xe(ki, () => e.children ?? Ee);
      var et = z(ki, 2);
      {
        var Mt = (_e) => {
          var ze = Xd(), Ge = Q(ze);
          {
            let fn = /* @__PURE__ */ ae(() => It(N, "input$"));
            Me(
              jd(Ge, nt(
                {
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return D();
                  },
                  get initialInvalid() {
                    return s(ge);
                  },
                  get "aria-controls"() {
                    return s(j);
                  },
                  get "aria-describedby"() {
                    return s(j);
                  }
                },
                () => s(fn),
                {
                  onblur: (Xe) => {
                    var vt;
                    X(he, !1), X(ge, !0), xt(ee(), "blur", Xe), (vt = e.input$onblur) == null || vt.call(e, Xe);
                  },
                  onfocus: (Xe) => {
                    var vt;
                    X(he, !0), xt(ee(), "focus", Xe), (vt = e.input$onfocus) == null || vt.call(e, Xe);
                  },
                  get value() {
                    return m();
                  },
                  set value(Xe) {
                    m(Xe);
                  },
                  get dirty() {
                    return C();
                  },
                  set dirty(Xe) {
                    C(Xe);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Xe) {
                    E(Xe);
                  }
                }
              )),
              (Xe) => x(Xe),
              () => x()
            );
          }
          var Ot = z(Ge, 2);
          xe(Ot, () => e.internalCounter ?? Ee), Fe((fn) => Kn(ze, 1, fn), [
            () => ql(it({
              "mdc-text-field__resizer": !("input$resizable" in N) || e.input$resizable
            }))
          ]), L(_e, ze);
        }, Nt = (_e) => {
          var ze = Wd(), Ge = re(ze);
          {
            var Ot = (Et) => {
              var He = ve(), Ct = re(He);
              {
                var Fn = (pt) => {
                  Bd(pt, {
                    children: (Dt, en) => {
                      var hn = tt();
                      Fe(() => Ae(hn, e.prefix)), L(Dt, hn);
                    },
                    $$slots: { default: !0 }
                  });
                }, $t = (pt) => {
                  var Dt = ve(), en = re(Dt);
                  xe(en, () => e.prefix ?? Ee), L(pt, Dt);
                };
                le(Ct, (pt) => {
                  typeof e.prefix == "string" ? pt(Fn) : pt($t, -1);
                });
              }
              L(Et, He);
            };
            le(Ge, (Et) => {
              e.prefix != null && Et(Ot);
            });
          }
          var fn = z(Ge, 2);
          {
            let Et = /* @__PURE__ */ ae(() => It(N, "input$"));
            Me(
              Hd(fn, nt(
                {
                  get type() {
                    return v();
                  },
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return D();
                  },
                  get initialInvalid() {
                    return s(ge);
                  },
                  get "aria-controls"() {
                    return s(j);
                  },
                  get "aria-describedby"() {
                    return s(j);
                  }
                },
                () => p() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(Et),
                {
                  onblur: (He) => {
                    var Ct;
                    X(he, !1), X(ge, !0), xt(ee(), "blur", He), (Ct = e.input$onblur) == null || Ct.call(e, He);
                  },
                  onfocus: (He) => {
                    var Ct;
                    X(he, !0), xt(ee(), "focus", He), (Ct = e.input$onfocus) == null || Ct.call(e, He);
                  },
                  get value() {
                    return m();
                  },
                  set value(He) {
                    m(He);
                  },
                  get files() {
                    return g();
                  },
                  set files(He) {
                    g(He);
                  },
                  get dirty() {
                    return C();
                  },
                  set dirty(He) {
                    C(He);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(He) {
                    E(He);
                  }
                }
              )),
              (He) => x(He),
              () => x()
            );
          }
          var Xe = z(fn, 2);
          {
            var vt = (Et) => {
              var He = ve(), Ct = re(He);
              {
                var Fn = (pt) => {
                  Ud(pt, {
                    children: (Dt, en) => {
                      var hn = tt();
                      Fe(() => Ae(hn, e.suffix)), L(Dt, hn);
                    },
                    $$slots: { default: !0 }
                  });
                }, $t = (pt) => {
                  var Dt = ve(), en = re(Dt);
                  xe(en, () => e.suffix ?? Ee), L(pt, Dt);
                };
                le(Ct, (pt) => {
                  typeof e.suffix == "string" ? pt(Fn) : pt($t, -1);
                });
              }
              L(Et, He);
            };
            le(Xe, (Et) => {
              e.suffix != null && Et(vt);
            });
          }
          L(_e, ze);
        };
        le(et, (_e) => {
          h() && typeof m() == "string" ? _e(Mt) : _e(Nt, -1);
        });
      }
      var Zn = z(et, 2);
      Nr(Zn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (_e, ze) => {
          var Ge = ve(), Ot = re(Ge);
          xe(Ot, () => e.trailingIcon ?? Ee), L(_e, Ge);
        },
        $$slots: { default: !0 }
      });
      var _r = z(Zn, 2);
      {
        var Jn = (_e) => {
          {
            let ze = /* @__PURE__ */ ae(() => It(N, "ripple$"));
            Me(no(_e, nt(() => s(ze))), (Ge) => ne(Ge), () => ne());
          }
        };
        le(_r, (_e) => {
          !h() && f() !== "outlined" && o() && _e(Jn);
        });
      }
      Me(B, (_e) => Y = _e, () => Y), $e(B, (_e, ze) => Ln == null ? void 0 : Ln(_e, ze), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: pe,
        removeClass: ce,
        addStyle: ot,
        eventTarget: s(Z),
        activeTarget: s(Z),
        initPromise: O
      })), $e(B, (_e, ze) => te == null ? void 0 : te(_e, ze), a), L(_, B);
    }, je = (_) => {
      var B = qd();
      ct(B, (et, Mt, Nt) => ({ class: et, style: Mt, ...Nt }), [
        () => it({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": p() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": E(),
          ...$,
          [l()]: !0
        }),
        () => Object.entries(oe).map(([et, Mt]) => `${et}: ${Mt};`).concat([u()]).join(" "),
        () => Ha(N, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ie = Q(B);
      {
        var Ze = (et) => {
          var Mt = ve(), Nt = re(Mt);
          xe(Nt, () => e.label ?? Ee), L(et, Mt);
        };
        le(Ie, (et) => {
          typeof e.label != "string" && et(Ze);
        });
      }
      var ut = z(Ie, 2);
      Nr(ut, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (et, Mt) => {
          var Nt = ve(), Zn = re(Nt);
          xe(Zn, () => e.leadingIcon ?? Ee), L(et, Nt);
        },
        $$slots: { default: !0 }
      });
      var wt = z(ut, 2);
      xe(wt, () => e.children ?? Ee);
      var Ut = z(wt, 2);
      Nr(Ut, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (et, Mt) => {
          var Nt = ve(), Zn = re(Nt);
          xe(Zn, () => e.trailingIcon ?? Ee), L(et, Nt);
        },
        $$slots: { default: !0 }
      });
      var ki = z(Ut, 2);
      xe(ki, () => e.line ?? Ee), Me(B, (et) => Y = et, () => Y), $e(B, (et, Mt) => Ln == null ? void 0 : Ln(et, Mt), () => ({
        ripple: o(),
        unbounded: !1,
        addClass: pe,
        removeClass: ce,
        addStyle: ot
      })), $e(B, (et, Mt) => te == null ? void 0 : te(et, Mt), a), L(_, B);
    };
    le(At, (_) => {
      Ue ? _(Ve) : _(je, -1);
    });
  }
  var H = z(At, 2);
  {
    var K = (_) => {
      {
        let B = /* @__PURE__ */ ae(() => It(N, "helperLine$"));
        Fd(_, nt(() => s(B), {
          children: (Ie, Ze) => {
            var ut = ve(), wt = re(ut);
            xe(wt, () => e.helper ?? Ee), L(Ie, ut);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    le(H, (_) => {
      e.helper && _(K);
    });
  }
  return L(n, ke), Qe(Ce);
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Zd = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Jd = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
}, hr = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
}, st;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(st || (st = {}));
var Oi;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(Oi || (Oi = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ti, Hn, Te = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
ti = {}, ti["" + Te.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", ti["" + Te.LIST_ITEM_CLASS] = "mdc-list-item", ti["" + Te.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", ti["" + Te.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", ti["" + Te.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", ti["" + Te.ROOT] = "mdc-list";
var Ui = (Hn = {}, Hn["" + Te.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Hn["" + Te.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Hn["" + Te.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Hn["" + Te.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Hn["" + Te.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Hn["" + Te.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Hn["" + Te.ROOT] = "mdc-deprecated-list", Hn), ni = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + Te.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Te.LIST_ITEM_CLASS + ` a,
    .` + Ui[Te.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ui[Te.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Te.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Te.LIST_ITEM_CLASS + ` a,
    .` + Te.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Te.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ui[Te.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ui[Te.LIST_ITEM_CLASS] + ` a,
    .` + Ui[Te.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ui[Te.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, at = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var $d = ["input", "button", "textarea", "select"], rn = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    $d.indexOf(t) === -1 && n.preventDefault();
  }
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function ec() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function tc(n, e) {
  for (var t = /* @__PURE__ */ new Map(), i = 0; i < n; i++) {
    var r = e(i).trim();
    if (r) {
      var a = r[0].toLowerCase();
      t.has(a) || t.set(a, []), t.get(a).push({ text: r.toLowerCase(), index: i });
    }
  }
  return t.forEach(function(l) {
    l.sort(function(u, o) {
      return u.index - o.index;
    });
  }), t;
}
function Va(n, e) {
  var t = n.nextChar, i = n.focusItemAtIndex, r = n.sortedIndexByFirstChar, a = n.focusedItemIndex, l = n.skipFocus, u = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    ao(e);
  }, at.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = nc(r, a, u, e) : o = ic(r, u, e), o !== -1 && !l && i(o), o;
}
function nc(n, e, t, i) {
  var r = i.typeaheadBuffer[0], a = n.get(r);
  if (!a)
    return -1;
  if (r === i.currentFirstChar && a[i.sortedIndexCursor].index === e) {
    i.sortedIndexCursor = (i.sortedIndexCursor + 1) % a.length;
    var l = a[i.sortedIndexCursor].index;
    if (!t(l))
      return l;
  }
  i.currentFirstChar = r;
  var u = -1, o;
  for (o = 0; o < a.length; o++)
    if (!t(a[o].index)) {
      u = o;
      break;
    }
  for (; o < a.length; o++)
    if (a[o].index > e && !t(a[o].index)) {
      u = o;
      break;
    }
  return u !== -1 ? (i.sortedIndexCursor = u, a[i.sortedIndexCursor].index) : -1;
}
function ic(n, e, t) {
  var i = t.typeaheadBuffer[0], r = n.get(i);
  if (!r)
    return -1;
  var a = r[t.sortedIndexCursor];
  if (a.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var l = (t.sortedIndexCursor + 1) % r.length, u = -1; l !== t.sortedIndexCursor; ) {
    var o = r[l], d = o.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, c = !e(o.index);
    if (d && c) {
      u = l;
      break;
    }
    l = (l + 1) % r.length;
  }
  return u !== -1 ? (t.sortedIndexCursor = u, r[t.sortedIndexCursor].index) : -1;
}
function ro(n) {
  return n.typeaheadBuffer.length > 0;
}
function ao(n) {
  n.typeaheadBuffer = "";
}
function zs(n, e) {
  var t = n.event, i = n.isTargetListItem, r = n.focusedItemIndex, a = n.focusItemAtIndex, l = n.sortedIndexByFirstChar, u = n.isItemAtIndexDisabled, o = dt(t) === "ArrowLeft", d = dt(t) === "ArrowUp", c = dt(t) === "ArrowRight", h = dt(t) === "ArrowDown", f = dt(t) === "Home", p = dt(t) === "End", v = dt(t) === "Enter", m = dt(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || d || c || h || f || p || v)
    return -1;
  var g = !m && t.key.length === 1;
  if (g) {
    rn(t);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: l,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Va(E, e);
  }
  if (!m)
    return -1;
  i && rn(t);
  var D = i && ro(e);
  if (D) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: l,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Va(E, e);
  }
  return -1;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function rc(n) {
  return n instanceof Array;
}
var ac = ["Alt", "Control", "Meta", "Shift"];
function Xs(n) {
  var e = new Set(n ? ac.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var sc = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = at.UNSET_INDEX, i.focusedItemIndex = at.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = ec(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ni;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Te;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return at;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClassForElementIndex: function() {
          },
          focusItemAtIndex: function() {
          },
          getAttributeForElementIndex: function() {
            return null;
          },
          getFocusedElementIndex: function() {
            return 0;
          },
          getListItemCount: function() {
            return 0;
          },
          hasCheckboxAtIndex: function() {
            return !1;
          },
          hasRadioAtIndex: function() {
            return !1;
          },
          isCheckboxCheckedAtIndex: function() {
            return !1;
          },
          isFocusInsideList: function() {
            return !1;
          },
          isRootFocused: function() {
            return !1;
          },
          listItemAtIndexHasClass: function() {
            return !1;
          },
          notifyAction: function() {
          },
          notifySelectionChange: function() {
          },
          removeClassForElementIndex: function() {
          },
          setAttributeForElementIndex: function() {
          },
          setCheckedCheckboxOrRadioAtIndex: function() {
          },
          setTabIndexForListItemChildren: function() {
          },
          getPrimaryTextAtIndex: function() {
            return "";
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = !0 : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
    }, e.prototype.getFocusedItemIndex = function() {
      return this.focusedItemIndex;
    }, e.prototype.setWrapFocus = function(t) {
      this.wrapFocus = t;
    }, e.prototype.setVerticalOrientation = function(t) {
      this.isVertical = t;
    }, e.prototype.setSingleSelection = function(t) {
      this.isSingleSelectionList = t, t && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(t) {
      this.areDisabledItemsFocusable = t;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var t = this.getSelectedIndexFromDOM();
      if (t !== at.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(t, Te.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = at.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var a = this.adapter.listItemAtIndexHasClass(r, Te.LIST_ITEM_SELECTED_CLASS), l = this.adapter.listItemAtIndexHasClass(r, Te.LIST_ITEM_ACTIVATED_CLASS);
        if (a || l) {
          t = r;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && ro(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(t) {
      this.useActivatedClass = t;
    }, e.prototype.setUseSelectedAttribute = function(t) {
      this.useSelectedAttr = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t, i) {
      i === void 0 && (i = {}), this.isIndexValid(t) && (this.isCheckboxList ? this.setCheckboxAtIndex(t, i) : this.isRadioList ? this.setRadioAtIndex(t, i) : this.setSingleSelectionAtIndex(t, i));
    }, e.prototype.handleFocusIn = function(t) {
      t >= 0 && (this.focusedItemIndex = t, this.adapter.setAttributeForElementIndex(t, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(t, "0"));
    }, e.prototype.handleFocusOut = function(t) {
      var i = this;
      t >= 0 && (this.adapter.setAttributeForElementIndex(t, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(t, "-1")), setTimeout(function() {
        i.adapter.isFocusInsideList() || i.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(t) {
      return this.adapter.listItemAtIndexHasClass(t, Te.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, i, r) {
      var a = this, l, u = dt(t) === "ArrowLeft", o = dt(t) === "ArrowUp", d = dt(t) === "ArrowRight", c = dt(t) === "ArrowDown", h = dt(t) === "Home", f = dt(t) === "End", p = dt(t) === "Enter", v = dt(t) === "Spacebar", m = this.isVertical && c || !this.isVertical && d, g = this.isVertical && o || !this.isVertical && u, E = t.key === "A" || t.key === "a", D = Xs(t);
      if (this.adapter.isRootFocused()) {
        if ((g || f) && D([]))
          t.preventDefault(), this.focusLastElement();
        else if ((m || h) && D([]))
          t.preventDefault(), this.focusFirstElement();
        else if (g && D(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (m && D(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var C = {
            event: t,
            focusItemAtIndex: function(R) {
              a.focusItemAtIndex(R);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(R) {
              return a.isIndexDisabled(R);
            }
          };
          zs(C, this.typeaheadState);
        }
        return;
      }
      var M = this.adapter.getFocusedElementIndex();
      if (!(M === -1 && (M = r, M < 0))) {
        if (m && D([]))
          rn(t), this.focusNextElement(M);
        else if (g && D([]))
          rn(t), this.focusPrevElement(M);
        else if (m && D(["Shift"]) && this.isCheckboxList) {
          rn(t);
          var S = this.focusNextElement(M);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (g && D(["Shift"]) && this.isCheckboxList) {
          rn(t);
          var S = this.focusPrevElement(M);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (h && D([]))
          rn(t), this.focusFirstElement();
        else if (f && D([]))
          rn(t), this.focusLastElement();
        else if (h && D(["Control", "Shift"]) && this.isCheckboxList) {
          if (rn(t), this.isIndexDisabled(M))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, M, M);
        } else if (f && D(["Control", "Shift"]) && this.isCheckboxList) {
          if (rn(t), this.isIndexDisabled(M))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(M, this.adapter.getListItemCount() - 1, M);
        } else if (E && D(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === at.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((p || v) && D([])) {
          if (i) {
            var w = t.target;
            if (w && w.tagName === "A" && p || (rn(t), this.isIndexDisabled(M)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(M, !1), this.adapter.notifyAction(M));
          }
        } else if ((p || v) && D(["Shift"]) && this.isCheckboxList) {
          var w = t.target;
          if (w && w.tagName === "A" && p || (rn(t), this.isIndexDisabled(M)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((l = this.lastSelectedIndex) !== null && l !== void 0 ? l : M, M, M), this.adapter.notifyAction(M));
        }
        if (this.hasTypeahead) {
          var C = {
            event: t,
            focusItemAtIndex: function(I) {
              a.focusItemAtIndex(I);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(I) {
              return a.isIndexDisabled(I);
            }
          };
          zs(C, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, r) {
      var a, l = Xs(r);
      t !== at.UNSET_INDEX && (this.isIndexDisabled(t) || (l([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, i), this.adapter.notifyAction(t)) : this.isCheckboxList && l(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
    }, e.prototype.focusNextElement = function(t) {
      var i = this.adapter.getListItemCount(), r = t, a = null;
      do {
        if (r++, r >= i)
          if (this.wrapFocus)
            r = 0;
          else
            return t;
        if (r === a)
          return -1;
        a = a ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusPrevElement = function(t) {
      var i = this.adapter.getListItemCount(), r = t, a = null;
      do {
        if (r--, r < 0)
          if (this.wrapFocus)
            r = i - 1;
          else
            return t;
        if (r === a)
          return -1;
        a = a ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(t), t;
    }, e.prototype.setEnabled = function(t, i) {
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, Te.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, ni.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, Te.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, ni.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var r = Te.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = Te.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== at.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== at.UNSET_INDEX && this.adapter.addClassForElementIndex(t, r), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === at.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, ni.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? ni.ARIA_CURRENT : ni.ARIA_SELECTED;
      if (this.selectedIndex !== at.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), t !== at.UNSET_INDEX) {
        var a = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, r, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? ni.ARIA_SELECTED : ni.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !i.forceUpdate) && (this.selectedIndex !== at.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(t, r, "true"), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, a = i.isUserInteraction ? new Set(r === at.UNSET_INDEX ? [] : r) : null, l = this.getSelectionAttribute(), u = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var d = a == null ? void 0 : a.has(o), c = t.indexOf(o) >= 0;
        c !== d && u.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, l, c ? "true" : "false");
      }
      this.selectedIndex = t, i.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(t, i, r) {
      this.lastSelectedIndex = r;
      for (var a = new Set(this.selectedIndex === at.UNSET_INDEX ? [] : this.selectedIndex), l = !(a != null && a.has(r)), u = _s([t, i].sort(), 2), o = u[0], d = u[1], c = this.getSelectionAttribute(), h = [], f = o; f <= d; f++)
        if (!this.isIndexDisabled(f)) {
          var p = a.has(f);
          l !== p && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, l), this.adapter.setAttributeForElementIndex(f, c, "" + l), l ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = od([], _s(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === at.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== at.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== at.UNSET_INDEX ? this.selectedIndex : rc(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
        return Math.min(t, i);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(t, i) {
      var r = this;
      if (i === void 0 && (i = !0), t instanceof Array) {
        if (!this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return t.length === 0 ? !0 : t.some(function(a) {
          return r.isIndexInRange(a);
        });
      } else if (typeof t == "number") {
        if (this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === at.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(t) {
      var i = this.adapter.getListItemCount();
      return t >= 0 && t < i;
    }, e.prototype.setSelectedIndexOnAction = function(t, i) {
      this.lastSelectedIndex = t, this.isCheckboxList ? (this.toggleCheckboxAtIndex(t, i), this.adapter.notifySelectionChange([t])) : this.setSelectedIndex(t, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(t, i) {
      var r = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(t), l;
      i ? l = a : (l = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(t, l)), this.adapter.setAttributeForElementIndex(t, r, l ? "true" : "false");
      var u = this.selectedIndex === at.UNSET_INDEX ? [] : this.selectedIndex.slice();
      l ? u.push(t) : u = u.filter(function(o) {
        return o !== t;
      }), this.selectedIndex = u;
    }, e.prototype.focusItemAtIndex = function(t) {
      this.adapter.focusItemAtIndex(t), this.focusedItemIndex = t;
    }, e.prototype.checkboxListToggleAll = function(t, i) {
      var r = this.adapter.getListItemCount();
      if (t.length === r)
        this.setCheckboxAtIndex([], { isUserInteraction: i });
      else {
        for (var a = [], l = 0; l < r; l++)
          (!this.isIndexDisabled(l) || t.indexOf(l) > -1) && a.push(l);
        this.setCheckboxAtIndex(a, { isUserInteraction: i });
      }
    }, e.prototype.typeaheadMatchItem = function(t, i, r) {
      var a = this;
      r === void 0 && (r = !1);
      var l = {
        focusItemAtIndex: function(u) {
          a.focusItemAtIndex(u);
        },
        focusedItemIndex: i || this.focusedItemIndex,
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: r,
        isItemAtIndexDisabled: function(u) {
          return a.isIndexDisabled(u);
        }
      };
      return Va(l, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return tc(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      ao(this.typeaheadState);
    }, e;
  }(En)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var so = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Oi.TOP_START, i.originCorner = Oi.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Jd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return hr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Oi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          hasAnchor: function() {
            return !1;
          },
          isElementInContainer: function() {
            return !1;
          },
          isFocused: function() {
            return !1;
          },
          isRtl: function() {
            return !1;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
          },
          setMaxHeight: function() {
          },
          setTransformOrigin: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          notifyClose: function() {
          },
          notifyClosing: function() {
          },
          notifyOpen: function() {
          },
          notifyOpening: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = e.cssClasses, i = t.ROOT, r = t.OPEN;
      if (!this.adapter.hasClass(i))
        throw new Error(i + " class required in root element.");
      this.adapter.hasClass(r) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(t) {
      this.anchorCorner = t;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ st.RIGHT;
    }, e.prototype.setAnchorMargin = function(t) {
      this.anchorMargin.top = t.top || 0, this.anchorMargin.right = t.right || 0, this.anchorMargin.bottom = t.bottom || 0, this.anchorMargin.left = t.left || 0;
    }, e.prototype.setIsHoisted = function(t) {
      this.isHoistedElement = t;
    }, e.prototype.setFixedPosition = function(t) {
      this.isFixedPosition = t;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(t, i) {
      this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(i) ? i : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(t) {
      this.isHorizontallyCenteredOnViewport = t;
    }, e.prototype.setQuickOpen = function(t) {
      this.isQuickOpen = t;
    }, e.prototype.setMaxHeight = function(t) {
      this.maxHeight = t;
    }, e.prototype.setOpenBottomBias = function(t) {
      this.openBottomBias = t;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var t = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        t.dimensions = t.adapter.getInnerDimensions(), t.autoposition(), t.adapter.addClass(e.cssClasses.OPEN), t.openAnimationEndTimerId = setTimeout(function() {
          t.openAnimationEndTimerId = 0, t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), t.adapter.notifyOpen();
        }, hr.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(t) {
      var i = this;
      if (t === void 0 && (t = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          i.adapter.removeClass(e.cssClasses.OPEN), i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout(function() {
            i.closeAnimationEndTimerId = 0, i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose();
          }, hr.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(t) {
      var i = t.target;
      this.adapter.isElementInContainer(i) || this.close();
    }, e.prototype.handleKeydown = function(t) {
      var i = t.keyCode, r = t.key, a = r === "Escape" || i === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var t;
      this.measurements = this.getAutoLayoutmeasurements();
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), a = this.hasBit(i, st.BOTTOM) ? "bottom" : "top", l = this.hasBit(i, st.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), d = this.measurements, c = d.anchorSize, h = d.surfaceSize, f = (t = {}, t[l] = u, t[a] = o, t);
      c.width / h.width > hr.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (l = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(l + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, st.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var t = this.adapter.getAnchorDimensions(), i = this.adapter.getBodyDimensions(), r = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return t || (t = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: t,
        bodySize: i,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: t.top,
          right: r.width - t.right,
          bottom: r.height - t.bottom,
          left: t.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: r,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var t = this.originCorner, i = this.measurements, r = i.viewportDistance, a = i.anchorSize, l = i.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, st.BOTTOM), d, c;
      o ? (d = r.top - u + this.anchorMargin.bottom, c = r.bottom - u - this.anchorMargin.bottom) : (d = r.top - u + this.anchorMargin.top, c = r.bottom - u + a.height - this.anchorMargin.top);
      var h = c - l.height > 0;
      !h && d > c + this.openBottomBias && (t = this.setBit(t, st.BOTTOM));
      var f = this.adapter.isRtl(), p = this.hasBit(this.anchorCorner, st.FLIP_RTL), v = this.hasBit(this.anchorCorner, st.RIGHT) || this.hasBit(t, st.RIGHT), m = !1;
      f && p ? m = !v : m = v;
      var g, E;
      m ? (g = r.left + a.width + this.anchorMargin.right, E = r.right - this.anchorMargin.right) : (g = r.left + this.anchorMargin.left, E = r.right + a.width - this.anchorMargin.left);
      var D = g - l.width > 0, S = E - l.width > 0, C = this.hasBit(t, st.FLIP_RTL) && this.hasBit(t, st.RIGHT);
      return S && C && f || !D && C ? t = this.unsetBit(t, st.RIGHT) : (D && m && f || D && !m && v || !S && g >= E) && (t = this.setBit(t, st.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, a = this.hasBit(t, st.BOTTOM), l = this.hasBit(this.anchorCorner, st.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (r = i.top + this.anchorMargin.top - u, l || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, l && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, st.RIGHT), a = this.hasBit(this.anchorCorner, st.RIGHT);
      if (r) {
        var l = a ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? l - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : l;
      }
      return a ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, st.BOTTOM), a = this.hasBit(this.anchorCorner, st.BOTTOM), l = 0;
      return r ? l = a ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : l = a ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, l;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var i, r, a = this.measurements, l = a.windowScroll, u = a.viewportDistance, o = a.surfaceSize, d = a.viewportSize, c = Object.keys(t);
      try {
        for (var h = bn(c), f = h.next(); !f.done; f = h.next()) {
          var p = f.value, v = t[p] || 0;
          if (this.isHorizontallyCenteredOnViewport && (p === "left" || p === "right")) {
            t[p] = (d.width - o.width) / 2;
            continue;
          }
          v += u[p], this.isFixedPosition || (p === "top" ? v += l.y : p === "bottom" ? v -= l.y : p === "left" ? v += l.x : v -= l.x), t[p] = v;
        }
      } catch (m) {
        i = { error: m };
      } finally {
        try {
          f && !f.done && (r = h.return) && r.call(h);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this, i = this.adapter.isFocused(), r = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = r.activeElement && this.adapter.isElementInContainer(r.activeElement);
      (i || a) && setTimeout(function() {
        t.adapter.restoreFocus();
      }, hr.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, i) {
      return !!(t & i);
    }, e.prototype.setBit = function(t, i) {
      return t | i;
    }, e.prototype.unsetBit = function(t, i) {
      return t ^ i;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(En)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Gi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ni = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, lc = {
  FOCUS_ROOT_INDEX: -1
}, Vi;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Vi || (Vi = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var oc = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Vi.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ni;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return lc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClassToElementAtIndex: function() {
          },
          removeClassFromElementAtIndex: function() {
          },
          addAttributeToElementAtIndex: function() {
          },
          removeAttributeFromElementAtIndex: function() {
          },
          getAttributeFromElementAtIndex: function() {
            return null;
          },
          elementContainsClass: function() {
            return !1;
          },
          closeSurface: function() {
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
          },
          focusListRoot: function() {
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return !1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface();
    }, e.prototype.handleKeydown = function(t) {
      var i = t.key, r = t.keyCode, a = i === "Tab" || r === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(t) {
      var i = this, r = this.adapter.getElementIndex(t);
      if (!(r < 0)) {
        this.adapter.notifySelected({ index: r });
        var a = this.adapter.getAttributeFromElementAtIndex(r, Ni.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var l = i.adapter.getElementIndex(t);
          l >= 0 && i.adapter.isSelectableItemAtIndex(l) && i.setSelectedIndex(l);
        }, so.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Vi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Vi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Vi.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(t) {
      this.defaultFocusState = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t) {
      if (this.validatedIndex(t), !this.adapter.isSelectableItemAtIndex(t))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var i = this.adapter.getSelectedSiblingOfItemAtIndex(t);
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Ni.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, Gi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Gi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Ni.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, Te.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Ni.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, Te.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Ni.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var i = this.adapter.getMenuItemCount(), r = t >= 0 && t < i;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(En)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Je = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Ia = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
}, mi = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var uc = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = mi.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Je;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return mi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ia;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          activateBottomLine: function() {
          },
          deactivateBottomLine: function() {
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
          },
          hasLabel: function() {
            return !1;
          },
          floatLabel: function() {
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          },
          setRippleCenter: function() {
          },
          notifyChange: function() {
          },
          setSelectedText: function() {
          },
          isSelectAnchorFocused: function() {
            return !1;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
          },
          removeSelectAnchorAttr: function() {
          },
          addMenuClass: function() {
          },
          removeMenuClass: function() {
          },
          openMenu: function() {
          },
          closeMenu: function() {
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
          },
          setMenuAnchorCorner: function() {
          },
          setMenuWrapFocus: function() {
          },
          focusMenuItemAtIndex: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return !1;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    }, e.prototype.setSelectedIndex = function(t, i, r) {
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(t >= this.adapter.getMenuItemCount()) && (t === mi.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
    }, e.prototype.setValue = function(t, i) {
      i === void 0 && (i = !1);
      var r = this.adapter.getMenuItemValues().indexOf(t);
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        i
      );
    }, e.prototype.getValue = function() {
      var t = this.adapter.getSelectedIndex(), i = this.adapter.getMenuItemValues();
      return t !== mi.UNSET_INDEX ? i[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass(Je.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(Je.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(Je.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, i = this.adapter.hasClass(Je.FOCUSED), r = t || i, a = this.adapter.hasClass(Je.REQUIRED);
        this.notchOutline(r), this.adapter.floatLabel(r), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var t = this.adapter.getMenuItemValues(), i = t.indexOf(this.getValue());
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var t = this.getSelectedIndex(), i = t >= 0 ? t : 0;
        this.adapter.focusMenuItemAtIndex(i);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(Je.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(Je.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(Je.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(t) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(t), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(t) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(Je.FOCUSED))) {
        var i = dt(t) === ye.ENTER, r = dt(t) === ye.SPACEBAR, a = dt(t) === ye.ARROW_UP, l = dt(t) === ye.ARROW_DOWN, u = t.ctrlKey || t.metaKey;
        if (!u && (!r && t.key && t.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var o = r ? " " : t.key, d = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          d >= 0 && this.setSelectedIndex(d), t.preventDefault();
          return;
        }
        !i && !r && !a && !l || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(Je.FOCUSED);
        if (t) {
          var r = mi.LABEL_SCALE, a = this.adapter.getLabelWidth() * r;
          this.adapter.notchOutline(a);
        } else i || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(t) {
      this.useDefaultValidation = t;
    }, e.prototype.setValid = function(t) {
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(Je.INVALID), this.adapter.removeMenuClass(Je.MENU_INVALID)) : (this.adapter.addClass(Je.INVALID), this.adapter.addMenuClass(Je.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(Je.REQUIRED) && !this.adapter.hasClass(Je.DISABLED) ? this.getSelectedIndex() !== mi.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(Je.REQUIRED) : this.adapter.removeClass(Je.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(Oi.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(Je.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(Je.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(Je.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(Je.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(Ia.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(Ia.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, mi.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(En)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var gi = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, Vn = {
  HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
  HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var dc = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      return n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return gi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setAttr: function() {
          },
          getAttr: function() {
            return null;
          },
          removeAttr: function() {
          },
          setContent: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getId = function() {
      return this.adapter.getAttr("id");
    }, e.prototype.isVisible = function() {
      return this.adapter.getAttr(gi.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(Vn.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(Vn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(Vn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(Vn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(Vn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(Vn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var i = this.adapter.hasClass(Vn.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass(Vn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !t || r;
        if (a) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(gi.ROLE) : this.adapter.setAttr(gi.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(gi.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(gi.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(gi.ARIA_HIDDEN, "true");
    }, e;
  }(En)
), cc = /* @__PURE__ */ ie("<div><!></div>");
function fc(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "style", 3, ""), a = b(e, "static", 3, !1), l = b(e, "anchor", 3, !0), u = b(e, "fixed", 3, !1), o = b(e, "open", 31, () => De(a())), d = b(e, "managed", 3, !1), c = b(e, "fullWidth", 3, !1), h = b(e, "quickOpen", 3, !1), f = b(e, "anchorElement", 15), p = b(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = b(e, "maxHeight", 3, 0), m = b(e, "horizontallyCenteredOnViewport", 3, !1), g = b(e, "openBottomBias", 3, 0), E = b(e, "neverRestoreFocus", 3, !1), D = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "openBottomBias",
    "neverRestoreFocus",
    "children"
  ]), S, C = /* @__PURE__ */ fe(void 0), M = De({}), w = De({}), R = /* @__PURE__ */ fe(void 0);
  me("SMUI:list:role", "menu"), me("SMUI:list:item:role", "menuitem"), Be(() => {
    var T, U;
    S && l() && !((T = S.parentElement) != null && T.classList.contains("mdc-menu-surface--anchor")) && ((U = S.parentElement) == null || U.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), Be(() => {
    s(C) && s(C).isOpen() !== o() && (o() ? s(C).open() : s(C).close());
  }), Be(() => {
    s(C) && s(C).setQuickOpen(h());
  }), Be(() => {
    s(C) && s(C).setFixedPosition(u());
  }), Be(() => {
    s(C) && s(C).setMaxHeight(v());
  }), Be(() => {
    s(C) && s(C).setIsHorizontallyCenteredOnViewport(m());
  });
  const I = Oi;
  Be(() => {
    s(C) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(C).setAnchorCorner(I[e.anchorCorner]) : s(C).setAnchorCorner(e.anchorCorner));
  }), Be(() => {
    s(C) && s(C).setAnchorMargin(p());
  }), Be(() => {
    s(C) && s(C).setOpenBottomBias(g());
  });
  const x = Oe("SMUI:menu-surface:mount"), G = Oe("SMUI:menu-surface:unmount");
  kt(() => {
    X(
      C,
      new so({
        addClass: k,
        removeClass: N,
        hasClass: ne,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          d() || o(a()), o() || xt(ge(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          d() || o(a()), o() || xt(ge(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          d() || o(!0), o() && xt(ge(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          o() || xt(ge(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (U) => ge().contains(U),
        isRtl: () => getComputedStyle(ge()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (U) => {
          w["transform-origin"] = U;
        },
        isFocused: () => document.activeElement === ge(),
        saveFocus: () => {
          X(R, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !E() && (!S || ge().contains(document.activeElement)) && s(R) && document.contains(s(R)) && "focus" in s(R) && s(R).focus();
        },
        getInnerDimensions: () => ({
          width: ge().offsetWidth,
          height: ge().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (U) => {
          w.left = "left" in U ? `${U.left}px` : "", w.right = "right" in U ? `${U.right}px` : "", w.top = "top" in U ? `${U.top}px` : "", w.bottom = "bottom" in U ? `${U.bottom}px` : "";
        },
        setMaxHeight: (U) => {
          w["max-height"] = U;
        }
      }),
      !0
    );
    const T = {
      get open() {
        return o();
      },
      set open(U) {
        o(U);
      },
      closeProgrammatic: Ue
    };
    return x && x(T), s(C).init(), () => {
      var P, W;
      G && G(T);
      const U = s(C).isHoistedElement;
      (P = s(C)) == null || P.destroy(), U && ((W = ge().parentNode) == null || W.removeChild(ge()));
    };
  }), di(() => {
    var T;
    l() && ge() && ((T = ge().parentElement) == null || T.classList.remove("mdc-menu-surface--anchor"));
  });
  function ne(T) {
    return T in M ? M[T] : ge().classList.contains(T);
  }
  function k(T) {
    M[T] || (M[T] = !0);
  }
  function N(T) {
    (!(T in M) || M[T]) && (M[T] = !1);
  }
  function Ue(T) {
    var U;
    (U = s(C)) == null || U.close(T), o(!1);
  }
  function Y(T) {
    s(C) && o() && !d() && s(C).handleBodyClick(T);
  }
  function F() {
    return o();
  }
  function V(T) {
    o(T);
  }
  function $(T, U) {
    if (s(C) == null)
      throw new Error("Instance is not defined.");
    return s(C).setAbsolutePosition(T, U);
  }
  function oe(T) {
    if (s(C) == null)
      throw new Error("Instance is not defined.");
    return s(C).setIsHoisted(T);
  }
  function j() {
    if (s(C) == null)
      throw new Error("Instance is not defined.");
    return s(C).isFixed();
  }
  function he() {
    if (s(C) == null)
      throw new Error("Instance is not defined.");
    return s(C).flipCornerHorizontally();
  }
  function ge() {
    return S;
  }
  var se = {
    isOpen: F,
    setOpen: V,
    setAbsolutePosition: $,
    setIsHoisted: oe,
    isFixed: j,
    flipCornerHorizontally: he,
    getElement: ge
  }, de = cc();
  Xl("click", Sl.body, Y, !0);
  var Le = (T) => {
    var U;
    s(C) && !d() && s(C).handleKeydown(T), (U = e.onkeydown) == null || U.call(e, T);
  };
  ct(
    de,
    (T, U) => ({
      class: T,
      style: U,
      role: "dialog",
      ...D,
      onkeydown: Le
    }),
    [
      () => it({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": c(),
        ...M,
        [i()]: !0
      }),
      () => Object.entries(w).map(([T, U]) => `${T}: ${U};`).concat([r()]).join(" ")
    ]
  );
  var O = Q(de);
  return xe(O, () => e.children ?? Ee), Me(de, (T) => S = T, () => S), $e(de, (T, U) => te == null ? void 0 : te(T, U), t), L(n, de), Qe(se);
}
function ba(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function hc(n, e) {
  Ye(e, !0);
  const { closest: t } = ls;
  let i = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), a = b(e, "open", 15, !1), l = b(e, "anchorElement", 15), u = b(e, "managed", 3, !1), o = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), d, c = /* @__PURE__ */ fe(void 0), h = /* @__PURE__ */ fe(void 0), f = /* @__PURE__ */ fe(void 0);
  me("SMUI:menu-surface:mount", (I) => {
    s(h) || X(h, I, !0);
  });
  const p = Oe("SMUI:list:mount");
  me("SMUI:list:mount", (I) => {
    s(f) || X(f, I, !0), p && p(I);
  });
  const v = Oe("SMUI:menu:mount"), m = Oe("SMUI:menu:unmount");
  kt(() => (X(
    c,
    new oc({
      addClassToElementAtIndex: (I, x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(I, x);
      },
      removeClassFromElementAtIndex: (I, x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(I, x);
      },
      addAttributeToElementAtIndex: (I, x, G) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(I, x, G);
      },
      removeAttributeFromElementAtIndex: (I, x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(I, x);
      },
      getAttributeFromElementAtIndex: (I, x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(I, x);
      },
      elementContainsClass: (I, x) => I.classList.contains(x),
      closeSurface: (I) => {
        var x;
        u() || ((x = s(h)) == null || x.closeProgrammatic(I), xt(w(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (I) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((x) => x.element).indexOf(I);
      },
      notifySelected: (I) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        xt(w(), "SMUIMenuSelected", {
          index: I.index,
          item: s(f).getOrderedList()[I.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (I) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(I);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (I) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!t(s(f).getOrderedList()[I].element, `.${Gi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (I) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const x = s(f).getOrderedList(), G = t(x[I].element, `.${Gi.MENU_SELECTION_GROUP}`), ne = G == null ? void 0 : G.querySelector(`.${Gi.MENU_SELECTED_LIST_ITEM}`);
        return ne ? x.map((k) => k.element).indexOf(ne) : -1;
      }
    }),
    !0
  ), v && v(s(c)), s(c).init(), () => {
    var I;
    m && s(c) && m(s(c)), (I = s(c)) == null || I.destroy();
  }));
  function g(I) {
    s(c) && s(c).handleKeydown(I);
  }
  function E() {
    return a();
  }
  function D(I) {
    a(I);
  }
  function S(I) {
    if (s(c) == null)
      throw new Error("Instance is undefined.");
    s(c).setDefaultFocusState(I);
  }
  function C() {
    if (s(c) == null)
      throw new Error("Instance is undefined.");
    return s(c).getSelectedIndex();
  }
  function M() {
    return d;
  }
  function w() {
    return d.getElement();
  }
  var R = {
    isOpen: E,
    setOpen: D,
    setDefaultFocusState: S,
    getSelectedIndex: C,
    getMenuSurface: M,
    getElement: w
  };
  {
    let I = /* @__PURE__ */ ae(() => it({ "mdc-menu": !0, [r()]: !0 }));
    Me(
      fc(n, nt(
        {
          get use() {
            return i();
          },
          get class() {
            return s(I);
          },
          get managed() {
            return u();
          }
        },
        () => o,
        {
          onkeydown: (x) => {
            var G;
            g(x), (G = e.onkeydown) == null || G.call(e, x);
          },
          onSMUIMenuSurfaceOpened: (x) => {
            var G;
            s(c) && s(c).handleMenuSurfaceOpened(), (G = e.onSMUIMenuSurfaceOpened) == null || G.call(e, x);
          },
          onSMUIListAction: (x) => {
            var G;
            s(c) && s(f) && s(c).handleItemAction(s(f).getOrderedList()[x.detail.index].element), (G = e.onSMUIListAction) == null || G.call(e, x);
          },
          get open() {
            return a();
          },
          set open(x) {
            a(x);
          },
          get anchorElement() {
            return l();
          },
          set anchorElement(x) {
            l(x);
          },
          children: (x, G) => {
            var ne = ve(), k = re(ne);
            xe(k, () => e.children ?? Ee), L(x, ne);
          },
          $$slots: { default: !0 }
        }
      )),
      (x) => d = x,
      () => d
    );
  }
  return Qe(R);
}
function vc(n, e) {
  Ye(e, !0);
  const { closest: t, matches: i } = ls;
  let r = Oe("SMUI:list:nav"), a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), u = b(e, "nonInteractive", 3, !1), o = b(e, "dense", 3, !1), d = b(e, "textualList", 3, !1), c = b(e, "avatarList", 3, !1), h = b(e, "iconList", 3, !1), f = b(e, "imageList", 3, !1), p = b(e, "thumbnailList", 3, !1), v = b(e, "videoList", 3, !1), m = b(e, "twoLine", 3, !1), g = b(e, "threeLine", 3, !1), E = b(e, "vertical", 3, !0), D = b(e, "wrapFocus", 19, () => Oe("SMUI:list:wrapFocus") ?? !1), S = b(e, "singleSelection", 3, !1), C = b(e, "disabledItemsFocusable", 3, !1), M = b(e, "selectedIndex", 31, () => -1), w = b(e, "radioList", 3, !1), R = b(e, "checkList", 3, !1), I = b(e, "hasTypeahead", 3, !1), x = b(e, "component", 3, os), G = b(e, "tag", 3, r ? "nav" : "ul"), ne = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "disabledItemsFocusable",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "tag",
    "children"
  ]), k, N = /* @__PURE__ */ fe(void 0), Ue = [], Y = Oe("SMUI:list:role");
  const F = /* @__PURE__ */ new WeakMap();
  let V = Oe("SMUI:dialog:selection"), $ = Oe("SMUI:addLayoutListener"), oe;
  me("SMUI:list:nonInteractive", u()), me("SMUI:separator:context", "list"), Y || (S() ? (Y = "listbox", me("SMUI:list:item:role", "option")) : w() ? (Y = "radiogroup", me("SMUI:list:item:role", "radio")) : R() ? (Y = "group", me("SMUI:list:item:role", "checkbox")) : (Y = "list", me("SMUI:list:item:role", void 0))), Be(() => {
    s(N) && s(N).setVerticalOrientation(E());
  }), Be(() => {
    s(N) && s(N).setWrapFocus(D());
  }), Be(() => {
    s(N) && s(N).setHasTypeahead(I());
  }), Be(() => {
    s(N) && s(N).setSingleSelection(S());
  }), Be(() => {
    s(N) && s(N).setDisabledItemsFocusable(C());
  }), Be(() => {
    s(N) && S() && J() !== M() && s(N).setSelectedIndex(M());
  }), $ && (oe = $(ot)), me("SMUI:list:item:mount", (H) => {
    Ue.push(H), F.set(H.element, H), S() && H.selected && M(ce(H.element));
  }), me("SMUI:list:item:unmount", (H) => {
    const K = (H && Ue.findIndex((_) => _ === H)) ?? -1;
    K !== -1 && (Ue.splice(K, 1), F.delete(H.element));
  });
  const j = Oe("SMUI:list:mount"), he = Oe("SMUI:list:unmount");
  kt(() => {
    X(
      N,
      new sc({
        addClassForElementIndex: P,
        focusItemAtIndex: Ce,
        getAttributeForElementIndex: (K, _) => {
          var B;
          return ((B = T()[K]) == null ? void 0 : B.getAttr(_)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? T().map((K) => K.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => Ue.length,
        getPrimaryTextAtIndex: pe,
        hasCheckboxAtIndex: (K) => {
          var _;
          return ((_ = T()[K]) == null ? void 0 : _.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (K) => {
          var _;
          return ((_ = T()[K]) == null ? void 0 : _.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (K) => {
          const _ = T()[K];
          return ((_ == null ? void 0 : _.hasCheckbox) && _.checked) ?? !1;
        },
        isFocusInsideList: () => k != null && ke() !== document.activeElement && ke().contains(document.activeElement),
        isRootFocused: () => k != null && document.activeElement === ke(),
        listItemAtIndexHasClass: U,
        notifyAction: (K) => {
          M(K), k != null && xt(ke(), "SMUIListAction", { index: K });
        },
        notifySelectionChange: (K) => {
          k != null && xt(ke(), "SMUIListSelectionChange", { changedIndices: K });
        },
        removeClassForElementIndex: W,
        setAttributeForElementIndex: Z,
        setCheckedCheckboxOrRadioAtIndex: (K, _) => {
          T()[K].checked = _;
        },
        setTabIndexForListItemChildren: (K, _) => {
          const B = T()[K];
          Array.prototype.forEach.call(B.element.querySelectorAll("button:not(:disabled), a"), (Ze) => {
            Ze.setAttribute("tabindex", _);
          });
        }
      }),
      !0
    );
    const H = {
      get element() {
        return ke();
      },
      get items() {
        return Ue;
      },
      get typeaheadInProgress() {
        if (!s(N))
          throw new Error("Instance is undefined.");
        return s(N).isTypeaheadInProgress();
      },
      typeaheadMatchItem(K, _) {
        if (!s(N))
          throw new Error("Instance is undefined.");
        return s(N).typeaheadMatchItem(
          K,
          _,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: T,
      focusItemAtIndex: Ce,
      addClassForElementIndex: P,
      removeClassForElementIndex: W,
      setAttributeForElementIndex: Z,
      removeAttributeForElementIndex: Pe,
      getAttributeFromElementIndex: Ne,
      getPrimaryTextAtIndex: pe
    };
    return j && j(H), s(N).init(), s(N).layout(), () => {
      var K;
      he && he(H), (K = s(N)) == null || K.destroy();
    };
  }), di(() => {
    oe && oe();
  });
  function ge(H) {
    s(N) && H.target && s(N).handleKeydown(H, H.target.classList.contains("mdc-deprecated-list-item"), ce(H.target));
  }
  function se(H) {
    s(N) && H.target && s(N).handleFocusIn(ce(H.target));
  }
  function de(H) {
    s(N) && H.target && s(N).handleFocusOut(ce(H.target));
  }
  function Le(H) {
    s(N) && H.target && s(N).handleClick(ce(H.target), !i(H.target, 'input[type="checkbox"], input[type="radio"]'), H);
  }
  function O(H) {
    if (w() || R()) {
      const K = ce(H.target);
      if (K !== -1) {
        const _ = T()[K];
        _ && (w() && !_.checked || R()) && (i(H.detail.target, 'input[type="checkbox"], input[type="radio"]') || (_.checked = !_.checked), _.activateRipple(), window.requestAnimationFrame(() => {
          _.deactivateRipple();
        }));
      }
    }
  }
  function T() {
    return k == null ? [] : [...ke().children].map((H) => F.get(H)).filter((H) => H && H._smui_list_item_accessor);
  }
  function U(H, K) {
    const _ = T()[H];
    return (_ && _.hasClass(K)) ?? !1;
  }
  function P(H, K) {
    const _ = T()[H];
    _ && _.addClass(K);
  }
  function W(H, K) {
    const _ = T()[H];
    _ && _.removeClass(K);
  }
  function Z(H, K, _) {
    const B = T()[H];
    B && B.addAttr(K, _);
  }
  function Pe(H, K) {
    const _ = T()[H];
    _ && _.removeAttr(K);
  }
  function Ne(H, K) {
    const _ = T()[H];
    return _ ? _.getAttr(K) : null;
  }
  function pe(H) {
    const K = T()[H];
    return (K && K.getPrimaryText()) ?? "";
  }
  function ce(H) {
    const K = t(H, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return K && i(K, ".mdc-deprecated-list-item") ? T().map((_) => _ == null ? void 0 : _.element).indexOf(K) : -1;
  }
  function ot() {
    if (!s(N))
      throw new Error("Instance is undefined.");
    return s(N).layout();
  }
  function Zt(H, K) {
    if (!s(N))
      throw new Error("Instance is undefined.");
    return s(N).setEnabled(H, K);
  }
  function Jt() {
    if (!s(N))
      throw new Error("Instance is undefined.");
    return s(N).isTypeaheadInProgress();
  }
  function J() {
    if (!s(N))
      throw new Error("Instance is undefined.");
    return s(N).getSelectedIndex();
  }
  function ee() {
    if (!s(N))
      throw new Error("Instance is undefined.");
    return s(N).getFocusedItemIndex();
  }
  function Ce(H) {
    const K = T()[H];
    K && "focus" in K.element && K.element.focus();
  }
  function ke() {
    return k.getElement();
  }
  var At = {
    layout: ot,
    setEnabled: Zt,
    getTypeaheadInProgress: Jt,
    getSelectedIndex: J,
    getFocusedItemIndex: ee,
    focusItemAtIndex: Ce,
    getElement: ke
  }, Ve = ve(), je = re(Ve);
  {
    let H = /* @__PURE__ */ ae(() => it({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": o(),
      "mdc-deprecated-list--textual-list": d(),
      "mdc-deprecated-list--avatar-list": c() || V,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": p(),
      "mdc-deprecated-list--video-list": v(),
      "mdc-deprecated-list--two-line": m(),
      "smui-list--three-line": g() && !m(),
      [l()]: !0
    }));
    ss(je, x, (K, _) => {
      Me(
        _(K, nt(
          {
            get tag() {
              return G();
            },
            get use() {
              return a();
            },
            get class() {
              return s(H);
            },
            get role() {
              return Y;
            }
          },
          () => ne,
          {
            onkeydown: (B) => {
              var Ie;
              ge(B), (Ie = e.onkeydown) == null || Ie.call(e, B);
            },
            onfocusin: (B) => {
              var Ie;
              se(B), (Ie = e.onfocusin) == null || Ie.call(e, B);
            },
            onfocusout: (B) => {
              var Ie;
              de(B), (Ie = e.onfocusout) == null || Ie.call(e, B);
            },
            onclick: (B) => {
              var Ie;
              Le(B), (Ie = e.onclick) == null || Ie.call(e, B);
            },
            onSMUIAction: (B) => {
              var Ie;
              O(B), (Ie = e.onSMUIAction) == null || Ie.call(e, B);
            },
            children: (B, Ie) => {
              var Ze = ve(), ut = re(Ze);
              xe(ut, () => e.children ?? Ee), L(B, Ze);
            },
            $$slots: { default: !0 }
          }
        )),
        (B) => k = B,
        () => k
      );
    });
  }
  return L(n, Ve), Qe(At);
}
let pc = 0;
var mc = /* @__PURE__ */ ie('<span class="mdc-deprecated-list-item__ripple"></span>'), gc = /* @__PURE__ */ ie("<!><!>", 1);
function Ic(n, e) {
  Ye(e, !0);
  let t = () => {
  };
  function i(P) {
    return P === t;
  }
  let r = Oe("SMUI:list:item:nav"), a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), u = b(e, "style", 3, ""), o = b(e, "nonInteractive", 19, () => Oe("SMUI:list:nonInteractive") ?? !1), d = b(e, "ripple", 19, () => !o()), c = b(e, "wrapper", 3, !1), h = b(e, "activated", 15, !1), f = b(e, "role", 19, () => c() ? "presentation" : Oe("SMUI:list:item:role")), p = b(e, "selected", 15, !1), v = b(e, "disabled", 3, !1), m = b(e, "skipRestoreFocus", 3, !1), g = b(e, "tabindex", 15, t), E = b(e, "inputId", 19, () => "SMUI-form-field-list-" + pc++), D = b(e, "component", 3, os), S = b(e, "tag", 19, () => r ? e.href ? "a" : "span" : "li"), C = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "wrapper",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "tag",
    "children"
  ]);
  me("SMUI:list:nonInteractive", void 0), me("SMUI:list:item:role", void 0);
  let M, w = De({}), R = De({}), I = De({}), x = /* @__PURE__ */ fe(void 0), G = /* @__PURE__ */ fe(void 0);
  const ne = /* @__PURE__ */ ae(() => i(g()) ? !o() && !v() && (p() || s(x) && s(x).checked) ? 0 : -1 : g());
  me("SMUI:generic:input:props", { id: E() }), me("SMUI:separator:context", void 0), me("SMUI:generic:input:mount", (P) => {
    ("_smui_checkbox_accessor" in P || "_smui_radio_accessor" in P) && X(x, P, !0);
  }), me("SMUI:generic:input:unmount", () => {
    X(x, void 0);
  });
  const k = Oe("SMUI:list:item:mount"), N = Oe("SMUI:list:item:unmount");
  kt(() => {
    if (!p() && !o()) {
      let W = !0, Z = M.getElement();
      for (; Z.previousElementSibling; )
        if (Z = Z.previousElementSibling, Z.nodeType === 1 && Z.classList.contains("mdc-deprecated-list-item") && !Z.classList.contains("mdc-deprecated-list-item--disabled")) {
          W = !1;
          break;
        }
      W && X(G, window.requestAnimationFrame(() => he(Z)), !0);
    }
    const P = {
      _smui_list_item_accessor: !0,
      get element() {
        return Le();
      },
      get selected() {
        return p();
      },
      set selected(W) {
        p(W);
      },
      hasClass: Ue,
      addClass: Y,
      removeClass: F,
      getAttr: $,
      addAttr: oe,
      removeAttr: j,
      getPrimaryText: de,
      // For inputs within item.
      get checked() {
        return (s(x) && s(x).checked) ?? !1;
      },
      set checked(W) {
        s(x) && (s(x).checked = !!W);
      },
      get hasCheckbox() {
        return !!(s(x) && "_smui_checkbox_accessor" in s(x));
      },
      get hasRadio() {
        return !!(s(x) && "_smui_radio_accessor" in s(x));
      },
      activateRipple() {
        s(x) && s(x).activateRipple();
      },
      deactivateRipple() {
        s(x) && s(x).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: se,
      get tabindex() {
        return s(ne);
      },
      set tabindex(W) {
        g(W);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(W) {
        h(W);
      }
    };
    return k && k(P), () => {
      N && N(P);
    };
  }), di(() => {
    s(G) && window.cancelAnimationFrame(s(G));
  });
  function Ue(P) {
    return P in w ? w[P] : Le().classList.contains(P);
  }
  function Y(P) {
    w[P] || (w[P] = !0);
  }
  function F(P) {
    (!(P in w) || w[P]) && (w[P] = !1);
  }
  function V(P, W) {
    R[P] != W && (W === "" || W == null ? delete R[P] : R[P] = W);
  }
  function $(P) {
    return P in I ? I[P] ?? null : Le().getAttribute(P);
  }
  function oe(P, W) {
    I[P] !== W && (I[P] = W);
  }
  function j(P) {
    (!(P in I) || I[P] != null) && (I[P] = void 0);
  }
  function he(P) {
    let W = !0;
    for (; P.nextElementSibling; )
      if (P = P.nextElementSibling, P.nodeType === 1 && P.classList.contains("mdc-deprecated-list-item")) {
        const Z = P.attributes.getNamedItem("tabindex");
        if (Z && Z.value === "0") {
          W = !1;
          break;
        }
      }
    W && g(0);
  }
  function ge(P) {
    const W = P.key === "Enter", Z = P.key === "Space";
    (W || Z) && se(P);
  }
  function se(P) {
    v() || xt(Le(), "SMUIAction", P);
  }
  function de() {
    const P = Le(), W = P.querySelector(".mdc-deprecated-list-item__primary-text");
    if (W)
      return W.textContent ?? "";
    const Z = P.querySelector(".mdc-deprecated-list-item__text");
    return Z ? Z.textContent ?? "" : P.textContent ?? "";
  }
  function Le() {
    return M.getElement();
  }
  var O = { action: se, getPrimaryText: de, getElement: Le }, T = ve(), U = re(T);
  {
    let P = /* @__PURE__ */ ae(() => [
      ...o() ? [] : [
        [
          Ln,
          {
            ripple: !s(x),
            unbounded: !1,
            color: (h() || p()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: Y,
            removeClass: F,
            addStyle: V
          }
        ]
      ],
      ...a()
    ]), W = /* @__PURE__ */ ae(() => it({
      "mdc-deprecated-list-item": !c(),
      "mdc-deprecated-list-item__wrapper": c(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": p(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !r && f() === "menuitem" && p(),
      "smui-menu-item--non-interactive": o(),
      ...w,
      [l()]: !0
    })), Z = /* @__PURE__ */ ae(() => Object.entries(R).map(([Ne, pe]) => `${Ne}: ${pe};`).concat([u()]).join(" ")), Pe = /* @__PURE__ */ ae(() => m() || void 0);
    ss(U, D, (Ne, pe) => {
      Me(
        pe(Ne, nt(
          {
            get tag() {
              return S();
            },
            get use() {
              return s(P);
            },
            get class() {
              return s(W);
            },
            get style() {
              return s(Z);
            }
          },
          () => r && h() ? { "aria-current": "page" } : {},
          () => !r || c() ? { role: f() } : {},
          () => !r && f() === "option" ? { "aria-selected": p() ? "true" : "false" } : {},
          () => !r && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(x) && s(x).checked ? "true" : "false"
          } : {},
          () => r ? {} : { "aria-disabled": v() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(Pe);
            },
            get tabindex() {
              return s(ne);
            },
            get href() {
              return e.href;
            }
          },
          () => I,
          () => C,
          {
            onclick: (ce) => {
              var ot;
              se(ce), (ot = e.onclick) == null || ot.call(e, ce);
            },
            onkeydown: (ce) => {
              var ot;
              ge(ce), (ot = e.onkeydown) == null || ot.call(e, ce);
            },
            children: (ce, ot) => {
              var Zt = gc(), Jt = re(Zt);
              {
                var J = (Ce) => {
                  var ke = mc();
                  L(Ce, ke);
                };
                le(Jt, (Ce) => {
                  d() && Ce(J);
                });
              }
              var ee = z(Jt);
              xe(ee, () => e.children ?? Ee), L(ce, Zt);
            },
            $$slots: { default: !0 }
          }
        )),
        (ce) => M = ce,
        () => M
      );
    });
  }
  return L(n, T), Qe(O);
}
let bc = 0;
var yc = /* @__PURE__ */ ie("<div><!></div>");
function Ac(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "id", 19, () => "SMUI-select-helper-text-" + bc++), a = b(e, "persistent", 3, !1), l = b(e, "validationMsg", 3, !1), u = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), o, d = /* @__PURE__ */ fe(void 0), c = De({}), h = De({}), f = /* @__PURE__ */ fe(void 0);
  const p = Oe("SMUI:select:helper-text:id"), v = Oe("SMUI:select:helper-text:mount"), m = Oe("SMUI:select:helper-text:unmount");
  kt(() => (X(
    d,
    new dc({
      addClass: E,
      removeClass: D,
      hasClass: g,
      getAttr: S,
      setAttr: C,
      removeAttr: M,
      setContent: (k) => {
        X(f, k, !0);
      }
    }),
    !0
  ), p && p(r()), v && v(s(d)), s(d).init(), () => {
    var k;
    m && s(d) && m(s(d)), (k = s(d)) == null || k.destroy();
  }));
  function g(k) {
    return k in c ? c[k] : w().classList.contains(k);
  }
  function E(k) {
    c[k] || (c[k] = !0);
  }
  function D(k) {
    (!(k in c) || c[k]) && (c[k] = !1);
  }
  function S(k) {
    return k in h ? h[k] ?? null : w().getAttribute(k);
  }
  function C(k, N) {
    h[k] !== N && (h[k] = N);
  }
  function M(k) {
    (!(k in h) || h[k] != null) && (h[k] = void 0);
  }
  function w() {
    return o;
  }
  var R = { getElement: w }, I = yc();
  ct(
    I,
    (k) => ({
      class: k,
      "aria-hidden": a() ? void 0 : "true",
      id: r(),
      ...h,
      ...u
    }),
    [
      () => it({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": l(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...c,
        [i()]: !0
      })
    ]
  );
  var x = Q(I);
  {
    var G = (k) => {
      var N = ve(), Ue = re(N);
      xe(Ue, () => e.children ?? Ee), L(k, N);
    }, ne = (k) => {
      var N = tt();
      Fe(() => Ae(N, s(f))), L(k, N);
    };
    le(x, (k) => {
      s(f) == null ? k(G) : k(ne, -1);
    });
  }
  return Me(I, (k) => o = k, () => o), $e(I, (k, N) => te == null ? void 0 : te(k, N), t), L(n, I), Qe(R);
}
let Ec = 0;
var Cc = /* @__PURE__ */ ie("<input/>"), Sc = /* @__PURE__ */ ie('<span class="mdc-select__ripple"></span>'), xc = /* @__PURE__ */ ie('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function ya(n, e) {
  Ye(e, !0);
  const t = () => Qa(ke, "$selectedTextStore", i), [i, r] = ia();
  let a = () => {
  };
  function l(A) {
    return A === a;
  }
  let u = b(e, "use", 19, () => []), o = b(e, "class", 3, ""), d = b(e, "style", 3, ""), c = b(e, "ripple", 3, !0), h = b(e, "disabled", 3, !1), f = b(e, "variant", 3, "standard"), p = b(e, "noLabel", 3, !1), v = b(e, "label", 3, void 0), m = b(e, "value", 15), g = b(e, "key", 3, (A) => A), E = b(e, "dirty", 15, !1), D = b(e, "invalid", 15, a), S = b(e, "updateInvalid", 19, () => l(D())), C = b(e, "required", 3, !1), M = b(e, "inputId", 19, () => "SMUI-select-" + Ec++), w = b(e, "hiddenInput", 3, !1), R = b(e, "withLeadingIcon", 3, a), I = b(e, "anchor$use", 19, () => []), x = b(e, "anchor$class", 3, ""), G = b(e, "selectedTextContainer$use", 19, () => []), ne = b(e, "selectedTextContainer$class", 3, ""), k = b(e, "selectedText$use", 19, () => []), N = b(e, "selectedText$class", 3, ""), Ue = b(e, "dropdownIcon$use", 19, () => []), Y = b(e, "dropdownIcon$class", 3, ""), F = b(e, "menu$class", 3, ""), V = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "variant",
    "noLabel",
    "label",
    "value",
    "key",
    "dirty",
    "invalid",
    "updateInvalid",
    "required",
    "inputId",
    "hiddenInput",
    "withLeadingIcon",
    "anchor$use",
    "anchor$class",
    "selectedTextContainer$use",
    "selectedTextContainer$class",
    "selectedText$use",
    "selectedText$class",
    "dropdownIcon$use",
    "dropdownIcon$class",
    "menu$class",
    "children",
    "leadingIcon",
    "helperText"
  ]);
  const $ = l(D());
  l(D()) && D(!1);
  let oe, j = /* @__PURE__ */ fe(void 0), he = De({}), ge = De({}), se, de = De({}), Le = /* @__PURE__ */ fe(-1);
  const O = /* @__PURE__ */ ae(() => V.menu$id ?? M() + "-menu");
  let T = /* @__PURE__ */ fe(void 0), U = Oe("SMUI:addLayoutListener"), P, W = /* @__PURE__ */ fe(!1), Z = De({}), Pe = /* @__PURE__ */ fe(void 0), Ne = /* @__PURE__ */ fe(void 0), pe = /* @__PURE__ */ fe(!1), ce, ot = Oe("SMUI:select:context"), Zt, Jt, J, ee, Ce;
  me("SMUI:list:role", ""), me("SMUI:list:nav", !1);
  const ke = xa("");
  me("SMUI:select:selectedText", ke);
  const At = xa(m());
  Be(() => {
    Kr(At, m());
  }), me("SMUI:select:value", At), Be(() => {
    s(j) && s(j).getValue() !== g()(m()) && s(j).setValue(g()(m()));
  });
  let Ve = s(Le);
  Be(() => {
    if (Ve !== s(Le))
      if (Ve = s(Le), s(j))
        s(j).setSelectedIndex(
          s(Le),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const A = Ut();
        m() !== A[s(Le)] && m(A[s(Le)]);
      }
  }), Be(() => {
    s(j) && s(j).getDisabled() !== h() && s(j).setDisabled(h());
  }), Be(() => {
    s(j) && E() && s(j).isValid() !== !D() && (S() ? D(!s(j).isValid()) : s(j).setValid(!D()));
  }), Be(() => {
    s(j) && s(j).getRequired() !== C() && s(j).setRequired(C());
  }), U && (P = U(_r)), me("SMUI:select:leading-icon:mount", (A) => {
    Zt = A;
  }), me("SMUI:select:leading-icon:unmount", () => {
    Zt = void 0;
  }), me("SMUI:list:mount", (A) => {
    ce = A;
  }), me("SMUI:select:helper-text:id", (A) => {
    X(T, A, !0);
  }), me("SMUI:select:helper-text:mount", (A) => {
    Jt = A;
  }), me("SMUI:select:helper-text:unmount", () => {
    X(T, void 0), Jt = void 0;
  }), kt(() => (X(
    j,
    new uc(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (A) => {
          Kr(ke, A);
        },
        isSelectAnchorFocused: () => document.activeElement === se,
        getSelectAnchorAttr: Ze,
        setSelectAnchorAttr: ut,
        removeSelectAnchorAttr: wt,
        addMenuClass: B,
        removeMenuClass: Ie,
        openMenu: () => {
          X(W, !0);
        },
        closeMenu: () => {
          X(W, !1);
        },
        getAnchorElement: () => se,
        setMenuAnchorElement: (A) => {
          X(Pe, A, !0);
        },
        setMenuAnchorCorner: (A) => {
          X(Ne, A, !0);
        },
        setMenuWrapFocus: (A) => {
          X(pe, A, !0);
        },
        getSelectedIndex: () => s(Le),
        setSelectedIndex: (A) => {
          Ve = A, X(Le, A, !0), m(Ut()[s(Le)]);
        },
        focusMenuItemAtIndex: (A) => {
          ce.focusItemAtIndex(A);
        },
        getMenuItemCount: () => ce.items.length,
        getMenuItemValues: () => Ut().map(g()),
        getMenuItemTextAtIndex: (A) => ce.getPrimaryTextAtIndex(A),
        isTypeaheadInProgress: () => ce.typeaheadInProgress,
        typeaheadMatchItem: (A, q) => ce.typeaheadMatchItem(A, q),
        // getCommonAdapterMethods
        addClass: H,
        removeClass: K,
        hasClass: je,
        setRippleCenter: (A) => ee && ee.setRippleCenter(A),
        activateBottomLine: () => ee && ee.activate(),
        deactivateBottomLine: () => ee && ee.deactivate(),
        notifyChange: (A) => {
          var q;
          E(!0), S() && D(!((q = s(j)) != null && q.isValid())), xt(Jn(), "SMUISelectChange", { value: m(), index: s(Le) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!Ce,
        notchOutline: (A) => Ce && Ce.notch(A),
        closeOutline: () => Ce && Ce.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!J,
        floatLabel: (A) => J && J.float(A),
        getLabelWidth: () => J ? J.getWidth() : 0,
        setLabelRequired: (A) => J && J.setRequired(A)
      },
      {
        get helperText() {
          return Jt;
        },
        get leadingIcon() {
          return Zt;
        }
      }
    ),
    !0
  ), X(Le, Ut().indexOf(m()), !0), s(j).init(), Nt($), () => {
    var A;
    (A = s(j)) == null || A.destroy();
  })), di(() => {
    P && P();
  });
  function je(A) {
    return A in he ? he[A] : Jn().classList.contains(A);
  }
  function H(A) {
    he[A] || (he[A] = !0);
  }
  function K(A) {
    (!(A in he) || he[A]) && (he[A] = !1);
  }
  function _(A, q) {
    ge[A] != q && (q === "" || q == null ? delete ge[A] : ge[A] = q);
  }
  function B(A) {
    Z[A] || (Z[A] = !0);
  }
  function Ie(A) {
    (!(A in Z) || Z[A]) && (Z[A] = !1);
  }
  function Ze(A) {
    return A in de ? de[A] ?? null : Jn().getAttribute(A);
  }
  function ut(A, q) {
    de[A] !== q && (de[A] = q);
  }
  function wt(A) {
    (!(A in de) || de[A] != null) && (de[A] = void 0);
  }
  function Ut() {
    return ce.getOrderedList().map((A) => A.getValue());
  }
  function ki(A) {
    const q = A.currentTarget.getBoundingClientRect();
    return (et(A) ? A.touches[0].clientX : A.clientX) - q.left;
  }
  function et(A) {
    return "touches" in A;
  }
  function Mt() {
    if (s(j) == null)
      throw new Error("Instance is undefined.");
    return s(j).getUseDefaultValidation();
  }
  function Nt(A) {
    var q;
    (q = s(j)) == null || q.setUseDefaultValidation(A);
  }
  function Zn() {
    se.focus();
  }
  function _r() {
    var A;
    (A = s(j)) == null || A.layout();
  }
  function Jn() {
    return oe;
  }
  var _e = {
    getUseDefaultValidation: Mt,
    setUseDefaultValidation: Nt,
    focus: Zn,
    layout: _r,
    getElement: Jn
  }, ze = xc(), Ge = re(ze);
  ct(Ge, (A, q, We) => ({ class: A, style: q, ...We }), [
    () => it({
      "mdc-select": !0,
      "mdc-select--required": C(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": l(R()) ? e.leadingIcon : R(),
      "mdc-select--no-label": p() || v() == null,
      "mdc-select--invalid": D(),
      "mdc-select--activated": s(W),
      "mdc-data-table__pagination-rows-per-page-select": ot === "data-table:pagination",
      ...he,
      [o()]: !0
    }),
    () => Object.entries(ge).map(([A, q]) => `${A}: ${q};`).concat([d()]).join(" "),
    () => Ha(V, [
      "input$",
      "anchor$",
      "label$",
      "outline$",
      "selectedTextContainer$",
      "selectedText$",
      "dropdownIcon$",
      "ripple$",
      "menu$",
      "list$",
      "helperText$"
    ])
  ]);
  var Ot = Q(Ge);
  {
    var fn = (A) => {
      var q = Cc();
      ct(
        q,
        (We) => ({
          type: "hidden",
          required: C(),
          disabled: h(),
          value: m(),
          ...We
        }),
        [() => It(V, "input$")],
        void 0,
        void 0,
        void 0,
        !0
      ), L(A, q);
    };
    le(Ot, (A) => {
      w() && A(fn);
    });
  }
  var Xe = z(Ot, 2), vt = (A) => {
    var q;
    se.focus(), s(j) && s(j).handleClick(ki(A)), (q = e.anchor$onclick) == null || q.call(e, A);
  }, Et = (A) => {
    var q;
    s(j) && s(j).handleKeydown(A), (q = e.onkeydown) == null || q.call(e, A);
  }, He = (A) => {
    var q;
    s(j) && s(j).handleBlur(), xt(Jn(), "blur", A), (q = e.anchor$onblur) == null || q.call(e, A);
  }, Ct = (A) => {
    var q;
    s(j) && s(j).handleFocus(), xt(Jn(), "focus", A), (q = e.anchor$onfocus) == null || q.call(e, A);
  };
  ct(
    Xe,
    (A, q) => ({
      class: A,
      "aria-required": C() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": s(O),
      "aria-expanded": s(W) ? "true" : "false",
      "aria-describedby": s(T),
      role: "combobox",
      tabindex: "0",
      ...de,
      ...q,
      onclick: vt,
      onkeydown: Et,
      onblur: He,
      onfocus: Ct
    }),
    [
      () => it({ "mdc-select__anchor": !0, [x()]: !0 }),
      () => It(V, "anchor$")
    ]
  );
  var Fn = Q(Xe);
  {
    var $t = (A) => {
      var q = Sc();
      L(A, q);
    };
    le(Fn, (A) => {
      f() === "filled" && A($t);
    });
  }
  var pt = z(Fn, 2);
  {
    var Dt = (A) => {
      {
        let q = /* @__PURE__ */ ae(() => M() + "-smui-label"), We = /* @__PURE__ */ ae(() => t() !== ""), mt = /* @__PURE__ */ ae(() => It(V, "label$"));
        Me(
          Yr(A, nt(
            {
              get id() {
                return s(q);
              },
              get floatAbove() {
                return s(We);
              },
              get required() {
                return C();
              }
            },
            () => s(mt),
            {
              children: (Bn, Un) => {
                var lr = ve(), Fi = re(lr);
                {
                  var hi = (Cn) => {
                  }, oa = (Cn) => {
                    var Nn = tt();
                    Fe(() => Ae(Nn, v())), L(Cn, Nn);
                  }, ua = (Cn) => {
                    var Nn = ve(), vs = re(Nn);
                    xe(vs, v), L(Cn, Nn);
                  };
                  le(Fi, (Cn) => {
                    v() == null ? Cn(hi) : typeof v() == "string" ? Cn(oa, 1) : Cn(ua, -1);
                  });
                }
                L(Bn, lr);
              },
              $$slots: { default: !0 }
            }
          )),
          (Bn) => J = Bn,
          () => J
        );
      }
    };
    le(pt, (A) => {
      f() !== "outlined" && !p() && v() != null && A(Dt);
    });
  }
  var en = z(pt, 2);
  {
    var hn = (A) => {
      {
        let q = /* @__PURE__ */ ae(() => p() || v() == null), We = /* @__PURE__ */ ae(() => It(V, "outline$"));
        Me(
          io(A, nt(
            {
              get noLabel() {
                return s(q);
              }
            },
            () => s(We),
            {
              children: (mt, Bn) => {
                var Un = ve(), lr = re(Un);
                {
                  var Fi = (hi) => {
                    {
                      let oa = /* @__PURE__ */ ae(() => M() + "-smui-label"), ua = /* @__PURE__ */ ae(() => t() !== ""), Cn = /* @__PURE__ */ ae(() => It(V, "label$"));
                      Me(
                        Yr(hi, nt(
                          {
                            get id() {
                              return s(oa);
                            },
                            get floatAbove() {
                              return s(ua);
                            },
                            get required() {
                              return C();
                            }
                          },
                          () => s(Cn),
                          {
                            children: (Nn, vs) => {
                              var ps = ve(), go = re(ps);
                              {
                                var Io = ($n) => {
                                }, bo = ($n) => {
                                  var or = tt();
                                  Fe(() => Ae(or, v())), L($n, or);
                                }, yo = ($n) => {
                                  var or = ve(), Ao = re(or);
                                  xe(Ao, v), L($n, or);
                                };
                                le(go, ($n) => {
                                  v() == null ? $n(Io) : typeof v() == "string" ? $n(bo, 1) : $n(yo, -1);
                                });
                              }
                              L(Nn, ps);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Nn) => J = Nn,
                        () => J
                      );
                    }
                  };
                  le(lr, (hi) => {
                    !p() && v() != null && hi(Fi);
                  });
                }
                L(mt, Un);
              },
              $$slots: { default: !0 }
            }
          )),
          (mt) => Ce = mt,
          () => Ce
        );
      }
    };
    le(en, (A) => {
      f() === "outlined" && A(hn);
    });
  }
  var Xt = z(en, 2);
  xe(Xt, () => e.leadingIcon ?? Ee);
  var tn = z(Xt, 2);
  ct(tn, (A, q) => ({ class: A, ...q }), [
    () => it({
      "mdc-select__selected-text-container": !0,
      [ne()]: !0
    }),
    () => It(V, "selectedTextContainer$")
  ]);
  var Ht = Q(tn);
  ct(
    Ht,
    (A, q) => ({
      id: M() + "-smui-selected-text",
      class: A,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": M() + "-smui-label",
      ...q
    }),
    [
      () => it({
        "mdc-select__selected-text": !0,
        [N()]: !0
      }),
      () => It(V, "selectedText$")
    ]
  );
  var fi = Q(Ht);
  $e(Ht, (A, q) => te == null ? void 0 : te(A, q), k), $e(tn, (A, q) => te == null ? void 0 : te(A, q), G);
  var sr = z(tn, 2);
  ct(sr, (A, q) => ({ class: A, ...q }), [
    () => it({
      "mdc-select__dropdown-icon": !0,
      [Y()]: !0
    }),
    () => It(V, "dropdownIcon$")
  ]), $e(sr, (A, q) => te == null ? void 0 : te(A, q), Ue);
  var co = z(sr, 2);
  {
    var fo = (A) => {
      {
        let q = /* @__PURE__ */ ae(() => It(V, "ripple$"));
        Me(no(A, nt(() => s(q))), (We) => ee = We, () => ee);
      }
    };
    le(co, (A) => {
      f() !== "outlined" && c() && A(fo);
    });
  }
  Me(Xe, (A) => se = A, () => se), $e(Xe, (A, q) => te == null ? void 0 : te(A, q), I);
  var ho = z(Xe, 2);
  {
    let A = /* @__PURE__ */ ae(() => it({
      "mdc-select__menu": !0,
      ...Z,
      [F()]: !0
    })), q = /* @__PURE__ */ ae(() => It(V, "menu$"));
    hc(ho, nt(
      {
        get class() {
          return s(A);
        },
        get id() {
          return s(O);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(Pe);
        },
        get anchorCorner() {
          return s(Ne);
        }
      },
      () => s(q),
      {
        onSMUIMenuSelected: (We) => {
          var mt;
          s(j) && s(j).handleMenuItemAction(We.detail.index), (mt = e.onSMUIMenuSelected) == null || mt.call(e, We);
        },
        onSMUIMenuSurfaceClosing: (We) => {
          var mt;
          s(j) && s(j).handleMenuClosing(), (mt = e.onSMUIMenuSurfaceClosing) == null || mt.call(e, We);
        },
        onSMUIMenuSurfaceClosed: (We) => {
          var mt;
          s(j) && s(j).handleMenuClosed(), (mt = e.onSMUIMenuSurfaceClosed) == null || mt.call(e, We);
        },
        onSMUIMenuSurfaceOpened: (We) => {
          var mt;
          s(j) && s(j).handleMenuOpened(), (mt = e.onSMUIMenuSurfaceOpened) == null || mt.call(e, We);
        },
        get open() {
          return s(W);
        },
        set open(We) {
          X(W, We, !0);
        },
        children: (We, mt) => {
          {
            let Bn = /* @__PURE__ */ ae(() => It(V, "list$"));
            vc(We, nt(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(pe);
                }
              },
              () => s(Bn),
              {
                get selectedIndex() {
                  return s(Le);
                },
                set selectedIndex(Un) {
                  X(Le, Un, !0);
                },
                children: (Un, lr) => {
                  var Fi = ve(), hi = re(Fi);
                  xe(hi, () => e.children ?? Ee), L(Un, Fi);
                },
                $$slots: { default: !0 }
              }
            ));
          }
        },
        $$slots: { default: !0 }
      }
    ));
  }
  Me(Ge, (A) => oe = A, () => oe), $e(Ge, (A, q) => Ln == null ? void 0 : Ln(A, q), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: H,
    removeClass: K,
    addStyle: _
  })), $e(Ge, (A, q) => ba == null ? void 0 : ba(A, q), () => ({ addClass: H, removeClass: K })), $e(Ge, (A, q) => te == null ? void 0 : te(A, q), u);
  var vo = z(Ge, 2);
  {
    var po = (A) => {
      {
        let q = /* @__PURE__ */ ae(() => It(V, "helperText$"));
        Ac(A, nt(() => s(q), {
          children: (We, mt) => {
            var Bn = ve(), Un = re(Bn);
            xe(Un, () => e.helperText ?? Ee), L(We, Bn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    le(vo, (A) => {
      e.helperText && A(po);
    });
  }
  Fe(() => Ae(fi, t())), L(n, ze);
  var mo = Qe(_e);
  return r(), mo;
}
function Ii(n, e) {
  Ye(e, !0);
  const t = () => Qa(c, "$selectedValue", i), [i, r] = ia();
  let a = b(e, "use", 19, () => []);
  b(e, "class", 3, "");
  let l = b(e, "value", 3, ""), u = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), o;
  const d = Oe("SMUI:select:selectedText"), c = Oe("SMUI:select:value");
  me("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ ae(() => l() != null && l() !== "" && t() === l());
  kt(f), di(f);
  function f() {
    s(h) && o && Kr(d, o.getPrimaryText());
  }
  function p() {
    return o.getElement();
  }
  var v = { getElement: p };
  Me(
    Ic(n, nt(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return l();
        },
        get value() {
          return l();
        },
        get selected() {
          return s(h);
        }
      },
      () => u,
      {
        children: (g, E) => {
          var D = ve(), S = re(D);
          xe(S, () => e.children ?? Ee), L(g, D);
        },
        $$slots: { default: !0 }
      }
    )),
    (g) => o = g,
    () => o
  );
  var m = Qe(v);
  return r(), m;
}
var Tc = /* @__PURE__ */ ie("<i><!></i>");
function Lc(n, e) {
  Ye(e, !0);
  const t = () => Qa(v, "$leadingStore", i), [i, r] = ia();
  let a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), u = b(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), o = b(e, "disabled", 3, !1), d = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), c, h = /* @__PURE__ */ fe(void 0), f = new Rr(), p = De({});
  const v = Oe("SMUI:textfield:icon:leading"), m = t();
  let g = /* @__PURE__ */ fe(void 0);
  const E = /* @__PURE__ */ ae(() => ({ role: e.role, tabindex: u() })), D = Oe("SMUI:textfield:leading-icon:mount"), S = Oe("SMUI:textfield:leading-icon:unmount"), C = Oe("SMUI:textfield:trailing-icon:mount"), M = Oe("SMUI:textfield:trailing-icon:unmount");
  kt(() => (X(
    h,
    new wd({
      getAttr: w,
      setAttr: R,
      removeAttr: I,
      setContent: (F) => {
        X(g, F, !0);
      },
      registerInteractionHandler: (F, V) => f.on(x(), F, V),
      deregisterInteractionHandler: (F, V) => f.off(x(), F, V),
      notifyIconAction: () => xt(x(), "SMUITextFieldIcon")
    }),
    !0
  ), m ? D && D(s(h)) : C && C(s(h)), s(h).init(), () => {
    var F;
    s(h) && (m ? S && S(s(h)) : M && M(s(h))), (F = s(h)) == null || F.destroy(), f.clear();
  }));
  function w(F) {
    return F in p ? p[F] ?? null : x().getAttribute(F);
  }
  function R(F, V) {
    p[F] !== V && (p[F] = V);
  }
  function I(F) {
    (!(F in p) || p[F] != null) && (p[F] = void 0);
  }
  function x() {
    return c;
  }
  var G = { getElement: x }, ne = Tc();
  ct(
    ne,
    (F) => ({
      class: F,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? o() ? "true" : "false" : void 0,
      ...s(E),
      ...p,
      ...d
    }),
    [
      () => it({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": m,
        "mdc-text-field__icon--trailing": !m,
        [l()]: !0
      })
    ]
  );
  var k = Q(ne);
  {
    var N = (F) => {
      var V = ve(), $ = re(V);
      xe($, () => e.children ?? Ee), L(F, V);
    }, Ue = (F) => {
      var V = tt();
      Fe(() => Ae(V, s(g))), L(F, V);
    };
    le(k, (F) => {
      s(g) == null ? F(N) : F(Ue, -1);
    });
  }
  Me(ne, (F) => c = F, () => c), $e(ne, (F, V) => te == null ? void 0 : te(F, V), a), L(n, ne);
  var Y = Qe(G);
  return r(), Y;
}
const ds = ["editor", "menu", "validator"], wc = {
  editor: "Editor plugin",
  menu: "Navigation plugin",
  validator: "Validation plugin"
}, cs = {
  editor: "tab",
  menu: "play_circle",
  validator: "rule_folder"
};
async function Mc(n) {
  if (n.source === "builtin" || !n.pluginsUrl)
    return {
      provider: n,
      plugins: [],
      error: "Builtin providers must be loaded via loadBuiltinProviders()."
    };
  try {
    const e = await fetch(n.pluginsUrl);
    if (!e.ok)
      return {
        provider: n,
        plugins: [],
        error: `HTTP ${e.status}: ${e.statusText}`
      };
    const t = await e.json();
    if (!t || typeof t != "object" || !Array.isArray(t.plugins))
      return {
        provider: n,
        plugins: [],
        error: 'Provider plugins.json must be an object with a "plugins" array.'
      };
    const i = t.plugins, r = i.filter(Dc), a = i.length - r.length;
    return a > 0 && console.warn(
      `[ProviderLoader] Provider "${n.name}": skipped ${a} invalid plugin entries.`
    ), { provider: n, plugins: r };
  } catch (e) {
    const t = e instanceof Error ? e.message : String(e);
    return { provider: n, plugins: [], error: t };
  }
}
async function Oc(n) {
  return Promise.all(n.map(Mc));
}
function Dc(n) {
  if (!n || typeof n != "object") return !1;
  const e = n;
  return typeof e.name == "string" && (!e.author || typeof e.author == "string") && typeof e.src == "string" && (!1 || e.src.startsWith("https://") || e.src.startsWith("/")) && typeof e.kind == "string" && typeof e.icon == "string" && typeof e.description == "string" && (e.supportedCoreVersion === void 0 || typeof e.supportedCoreVersion == "object" && e.supportedCoreVersion !== null && (typeof e.supportedCoreVersion.from == "string" || typeof e.supportedCoreVersion.to == "string"));
}
const Rc = "https://omicronenergyoss.github.io/oscd-plugins-registry/providers.json";
async function _c(n = Rc) {
  try {
    const e = await fetch(n);
    if (!e.ok)
      return {
        providers: [],
        error: `HTTP ${e.status}: ${e.statusText}`
      };
    const t = await e.json();
    if (!Array.isArray(t))
      return {
        providers: [],
        error: "Providers registry must be a JSON array."
      };
    const i = t.filter(Pc), r = t.length - i.length;
    return r > 0 && console.warn(
      `[ProvidersRegistryLoader] Skipped ${r} invalid provider entries from registry.`
    ), { providers: i };
  } catch (e) {
    const t = e instanceof Error ? e.message : String(e);
    return { providers: [], error: t };
  }
}
function Pc(n) {
  if (!n || typeof n != "object") return !1;
  const e = n;
  return typeof e.name == "string" && typeof e.icon == "string" && typeof e.description == "string" && typeof e.pluginsUrl == "string" && (e.prefix === void 0 || typeof e.prefix == "string") && (e.source === void 0 || e.source === "remote");
}
function Ws(n, e) {
  const t = Ks(n), i = Ks(e);
  for (let r = 0; r < 3; r++) {
    if (t[r] < i[r]) return -1;
    if (t[r] > i[r]) return 1;
  }
  return 0;
}
function Ks(n) {
  const t = n.replace(/^v/, "").split("-")[0].split(".").map((i) => parseInt(i, 10) || 0);
  return [t[0] ?? 0, t[1] ?? 0, t[2] ?? 0];
}
function kc(n, e, t) {
  return e === void 0 || t === void 0 ? !0 : Ws(n, e) >= 0 && Ws(n, t) < 0;
}
function ar(n, e) {
  var i;
  const t = (i = n == null ? void 0 : n.prefix) == null ? void 0 : i.trim();
  return t ? `${t} - ${e}` : e;
}
function Qr(n, e) {
  return `${n}\0${e}`;
}
function Zr(n) {
  return Qr(
    ar(n.provider, n.name),
    n.kind
  );
}
function yr(n) {
  return `${n.provider.name}\0${Zr(n)}`;
}
function Fc(n, e, t) {
  return n.name === e && n.kind === t;
}
function Ar(n, e) {
  return Zr(n) === Zr(e);
}
function nn(n, e) {
  return yr(n) === yr(e);
}
const Bc = "plugins";
function Uc(n) {
  const e = /* @__PURE__ */ new Map();
  for (const t of n) {
    if (typeof (t == null ? void 0 : t.name) != "string" || !t.name || typeof (t == null ? void 0 : t.kind) != "string" || !t.kind || typeof (t == null ? void 0 : t.src) != "string" || !t.src) continue;
    const i = `${t.name}\0${t.kind}`, r = e.get(i);
    e.set(
      i,
      r ? { ...r, ...t, active: !!(r.active || t.active) } : t
    );
  }
  return [...e.values()];
}
function Nc() {
  try {
    const n = localStorage.getItem(Bc);
    if (!n) return [];
    const e = JSON.parse(n);
    return Array.isArray(e) ? Uc(e) : [];
  } catch {
    return [];
  }
}
function Hc(n, e, t) {
  const i = ar(e, n.name);
  return t.find((r) => Fc(r, i, n.kind));
}
function fs(n, e, t, i, r) {
  var h, f;
  const a = (r == null ? void 0 : r.builtin) === !0 || e.source === "builtin", l = Hc(n, e, i), u = (r == null ? void 0 : r.activeByDefault) === !0, o = a || l ? "INSTALLED" : "AVAILABLE", d = l ? l.active ? "ACTIVE" : "INACTIVE" : a && u ? "ACTIVE" : "INACTIVE", c = a ? !0 : kc(
    t,
    (h = n.supportedCoreVersion) == null ? void 0 : h.from,
    (f = n.supportedCoreVersion) == null ? void 0 : f.to
  );
  return {
    ...n,
    builtin: a,
    activeByDefault: r == null ? void 0 : r.activeByDefault,
    requireDoc: r == null ? void 0 : r.requireDoc,
    provider: e,
    compatible: c,
    kindText: wc[n.kind],
    kindIcon: cs[n.kind],
    installationState: o,
    activationState: d
  };
}
function lo(n) {
  return `A built-in plugin with the name "${n}" already exists.`;
}
function Vc(n) {
  const e = n.filter(
    (i) => {
      var r;
      return i.builtin === !0 && ((r = i.provider) == null ? void 0 : r.source) === "builtin";
    }
  );
  if (e.length === 0) return n;
  const t = /* @__PURE__ */ new Map();
  for (const i of e)
    t.set(Qr(i.name, i.kind), i);
  return n.map((i) => {
    var a;
    if (((a = i.provider) == null ? void 0 : a.source) === "builtin") return i;
    const r = t.get(
      Qr(ar(i.provider, i.name), i.kind)
    );
    return r ? {
      ...i,
      shadowedByHostBuiltin: !0,
      installationState: "INSTALLED",
      activationState: r.activationState,
      activeByDefault: r.activeByDefault,
      requireDoc: r.requireDoc
    } : i;
  });
}
function ja(n) {
  return (n == null ? void 0 : n.builtin) === !0 || (n == null ? void 0 : n.shadowedByHostBuiltin) === !0;
}
function jc(n, e) {
  return n.map((t) => !Ar(t, e) || !t.compatible || ja(t) ? t : {
    ...t,
    installationState: "INSTALLED",
    activationState: "INACTIVE"
  });
}
function Gc(n, e) {
  const t = n.find((r) => Ar(r, e));
  return ja(t) || ja(e) ? { updated: n, success: !1 } : { updated: n.map(
    (r) => Ar(r, e) ? {
      ...r,
      installationState: "AVAILABLE",
      activationState: "INACTIVE"
    } : r
  ), success: !0 };
}
function zc(n, e) {
  return e.shadowedByHostBuiltin ? n : n.map(
    (t) => Ar(t, e) && !t.shadowedByHostBuiltin ? {
      ...t,
      activationState: "ACTIVE"
    } : t
  );
}
function Xc(n, e) {
  return e.shadowedByHostBuiltin ? n : n.map(
    (t) => Ar(t, e) && !t.shadowedByHostBuiltin ? {
      ...t,
      activationState: "INACTIVE"
    } : t
  );
}
function hs() {
  return document.querySelector("open-scd");
}
function oo() {
  const n = hs();
  return n != null && n.shadowRoot ? n.shadowRoot.querySelector("compas-layout") ?? n.shadowRoot.querySelector("oscd-layout") ?? null : null;
}
function Wc() {
  var t;
  const n = oo();
  if ((n == null ? void 0 : n.localName) === "compas-layout") return "compas";
  if ((n == null ? void 0 : n.localName) === "oscd-layout") return "open-scd";
  const e = hs();
  return e ? (t = e.shadowRoot) != null && t.querySelector("compas-session") ? "compas" : "open-scd" : null;
}
function Kc(n = hs) {
  var i;
  const e = n(), t = (i = e == null ? void 0 : e.getBuiltInPlugins) == null ? void 0 : i.call(e);
  return Array.isArray(t) ? t : [];
}
const qc = "data:image/png;base64,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", Yc = "data:image/png;base64,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dVv4Ul1CQGUISG4wOe8QjhT7o9s1nltK5uXlNRp/zzV44qpHt20PfD6dwUh9waP0ecqgqmpkMB3oTtxdpDamuItCEooxJOiq7Tt9+vQEzn2MctvU//ij6+IAXNSUEFA6ApJGyeL67TfRWEai0ZyDwFV1ALziSGsz0iEPkQMgck1temA6yEtVzdFQtqxWrdqfqFQlpSmGb6gVOPcxunaO4/rN5nzkx7lQLkECF31LByGgVQSkMJh6jLB/B3+bUfiCegCB9hMI7IoYIBSFL8oNBKKnSTJkMO3odjQevdEVuxWbihGFaodE9jVBw1kP123uRnfPzrfffrvAhAT4lvsmzoVuRi4s79FpHwjUihDgiQDmURYtSpZbt43GrBf+Fs/i9w342wzgKRbvatycJ74oH8BlZx14N6KKuRAgg5kLjsJP0Fj+HxqPhVjT4RR3hXOTrEbLadOmHcUfUii+1f6X5xajYott3749DF05e1GSFySThhgRAgwiIFaULM5NBuGo8k80ZotQbb7zk/YiVASXna1H4zzMXgJabifK4nY1AopGw/mHH36Yieno+qpRvzw6peC5Ef+K5imnU0JAswjMnTs3ZN68eZxnydFDN2LEiICmTZu2xSCezkispqME7Wnv5ua2FSNve+/bt++WPe212EZNoyTR+q9x48ZFZ8+evQndJG+LxoQtwpQphK3+IGnYQMDTUTEmT57cunnz5uFIp5qjtBxtn5aW1m7q1Klb0avUJDIyMtVRelpoTy7ZQnq5Xr16pefMmfObhoxlIYjQZUJAmwigy9TuaHiMUn0D5ye3oLHchujJbixz9GADHDnvfe211yghSQ5QCvpKLtmCkMFynKusiPN6e9BY+lipRpcIAUJAGwicqVOnji+qauarbmhoaDl0e67DZ4gs+9fylRPr/YWJTVpGR0ffsKGN5qqSwSygyzGjRnWcX+CCXWj/xwIwomJCQGsIHD16tG+fPn24dHRWDxxR+qChHImRtR9hRckTHlgVruCLF3/66acWGACYWHAVbV8hg2mh/z/99NOKw4YNO4qXKNG4BXyoiBDQMAIZx48f79mrV68VljDg9sD97rvvvsXMWkPwuhKnvJLOnj3bolu3bmct6af1MjKYee4AfCv0xknwjRhC/mqeS3RKCBAChMBTBPD5ELN79+4ITBeZgKNIA356hYSENMBAmqZY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";
function Qc(n) {
  return n === "compas" ? {
    name: "CoMPAS Plugins",
    icon: Yc,
    description: "Built-in plugins of the CoMPAS OpenSCD host.",
    source: "builtin"
  } : {
    name: "Open-SCD Plugins",
    icon: qc,
    description: "Built-in plugins of the OpenSCD host.",
    source: "builtin"
  };
}
function Zc(n) {
  return typeof n == "string" && ds.includes(n);
}
function Jc(n) {
  return n === "top" || n === "middle" || n === "bottom";
}
function $c(n, e) {
  if (typeof n.name != "string" || !n.name || typeof n.src != "string" || !n.src || !Zc(n.kind)) return null;
  const t = n.kind, i = typeof n.icon == "string" && n.icon ? n.icon : cs[t];
  return {
    name: n.name,
    author: e,
    src: n.src,
    kind: t,
    icon: i,
    description: `Built-in ${t} plugin`,
    position: Jc(n.position) ? n.position : void 0
  };
}
function ef(n, e, t) {
  var d;
  const i = t == null ? void 0 : t.getHost, r = ((d = t == null ? void 0 : t.detectEdition) == null ? void 0 : d.call(t)) ?? Wc(), a = Kc(i);
  if (a.length === 0)
    return [];
  const l = r ?? "open-scd", u = Qc(l), o = [];
  for (const c of a) {
    const h = $c(c, u.name);
    h && o.push(
      fs(h, u, e, n, {
        builtin: !0,
        activeByDefault: c.activeByDefault === !0,
        requireDoc: c.requireDoc === !0
      })
    );
  }
  return o.length === 0 ? [] : [{ provider: u, plugins: o, host: l }];
}
const ji = {
  // no prefix — host registration uses plain stored plugin name
  name: "Custom Plugins",
  icon: "extension",
  description: "Manually configured plugins (not listed by a remote provider)."
};
function tf(n) {
  const e = /* @__PURE__ */ new Set();
  for (const t of n)
    e.add(Zr(t));
  return e;
}
function uo(n) {
  return typeof n == "string" && ds.includes(n);
}
function nf(n, e) {
  return typeof n.name != "string" || !n.name || !uo(n.kind) ? !1 : e.has(Qr(n.name, n.kind));
}
function rf(n, e, t) {
  const i = [];
  for (const r of n) {
    if (nf(r, e) || typeof r.name != "string" || !r.name || typeof r.src != "string" || !r.src || !uo(r.kind)) continue;
    const a = r.kind, l = {
      name: r.name,
      author: r.author ?? ji.name,
      src: r.src,
      kind: a,
      icon: typeof r.icon == "string" && r.icon ? r.icon : cs[a],
      // Product: description is the source URL only
      description: r.src,
      position: r.position
    }, u = fs(
      l,
      ji,
      t,
      n,
      {
        activeByDefault: r.activeByDefault === !0,
        requireDoc: r.requireDoc === !0
      }
    );
    i.push({
      ...u,
      installationState: "INSTALLED",
      activationState: r.active ? "ACTIVE" : "INACTIVE",
      compatible: !0
    });
  }
  return i;
}
const af = "appVersion";
function sf() {
  return localStorage.getItem(af) || "1.4.0";
}
var lf = /* @__PURE__ */ ie('<span class="badge badge-builtin bp-typo-button">Built-in</span>'), of = /* @__PURE__ */ ie("<span> </span>"), uf = /* @__PURE__ */ ie("<span> </span>"), df = /* @__PURE__ */ ie('<span class="badge badge-incompatible bp-typo-button">Incompatible</span>'), cf = /* @__PURE__ */ ie('<div role="button" tabindex="0"><div class="card-top svelte-1myq0bn"><div class="plugin-icon-wrapper svelte-1myq0bn"><span class="material-icons plugin-icon svelte-1myq0bn"> </span></div> <button><!></button></div> <div class="plugin-name bp-typo-16-bold svelte-1myq0bn"> </div> <div class="plugin-kind-wrapper svelte-1myq0bn"><div class="badge badge-kind bp-typo-label"><span class="material-icons badge-icon"> </span> </div></div> <div class="plugin-description bp-typo-body svelte-1myq0bn"> </div> <div class="plugin-badges svelte-1myq0bn"><!> <!> <!></div></div>');
function ff(n, e) {
  Ye(e, !0);
  const t = /* @__PURE__ */ ae(() => e.plugin.builtin === !0), i = /* @__PURE__ */ ae(() => e.plugin.shadowedByHostBuiltin === !0), r = /* @__PURE__ */ ae(() => e.plugin.installationState === "INSTALLED" || s(t) || s(i)), a = /* @__PURE__ */ ae(() => e.plugin.activationState === "ACTIVE"), l = /* @__PURE__ */ ae(() => ar(e.plugin.provider, e.plugin.name)), u = /* @__PURE__ */ ae(() => lo(s(l))), o = /* @__PURE__ */ ae(() => s(i) || !s(r) && !e.plugin.compatible);
  function d(se) {
    if (se.stopPropagation(), !s(i))
      if (s(r))
        s(a) ? e.onDisable() : e.onEnable();
      else {
        if (!e.plugin.compatible) return;
        e.onInstall();
      }
  }
  var c = cf();
  let h;
  var f = Q(c), p = Q(f), v = Q(p), m = Q(v), g = z(p, 2);
  let E;
  var D = Q(g);
  {
    var S = (se) => {
      var de = tt("Install");
      L(se, de);
    }, C = (se) => {
      var de = tt("Disable");
      L(se, de);
    }, M = (se) => {
      var de = tt("Enable");
      L(se, de);
    };
    le(D, (se) => {
      s(r) ? s(a) ? se(C, 1) : se(M, -1) : se(S);
    });
  }
  var w = z(f, 2), R = Q(w), I = z(w, 2), x = Q(I), G = Q(x), ne = Q(G), k = z(G), N = z(I, 2), Ue = Q(N), Y = z(N, 2), F = Q(Y);
  {
    var V = (se) => {
      var de = lf();
      L(se, de);
    }, $ = (se) => {
      var de = of(), Le = Q(de);
      Fe(
        (O) => {
          Kn(de, 1, `badge badge-${O ?? ""} bp-typo-button`, "svelte-1myq0bn"), Ae(Le, e.plugin.installationState === "INSTALLED" ? "Installed" : "Available");
        },
        [() => e.plugin.installationState.toLowerCase()]
      ), L(se, de);
    };
    le(F, (se) => {
      s(t) || s(i) ? se(V) : se($, -1);
    });
  }
  var oe = z(F, 2);
  {
    var j = (se) => {
      var de = uf(), Le = Q(de);
      Fe(
        (O) => {
          Kn(de, 1, `badge badge-${O ?? ""} bp-typo-button`, "svelte-1myq0bn"), Ae(Le, s(a) ? "Active" : "Inactive");
        },
        [() => e.plugin.activationState.toLowerCase()]
      ), L(se, de);
    };
    le(oe, (se) => {
      s(r) && se(j);
    });
  }
  var he = z(oe, 2);
  {
    var ge = (se) => {
      var de = df();
      L(se, de);
    };
    le(he, (se) => {
      e.plugin.compatible || se(ge);
    });
  }
  Fe(() => {
    h = Kn(c, 1, "plugin-card svelte-1myq0bn", null, h, {
      selected: e.selected,
      incompatible: !e.plugin.compatible
    }), Rn(c, "aria-pressed", e.selected), Ae(m, e.plugin.icon), E = Kn(g, 1, "action-btn bp-typo-button", null, E, {
      disable: s(r) && s(a),
      enable: s(r) && !s(a),
      install: !s(r) && !s(t) && !s(i)
    }), g.disabled = s(o), Rn(g, "title", s(i) ? s(u) : void 0), Rn(g, "aria-label", s(r) ? s(a) ? "Disable" : "Enable" : "Install"), Ae(R, e.plugin.name), Ae(ne, e.plugin.kindIcon), Ae(k, ` ${e.plugin.kindText ?? ""}`), Ae(Ue, e.plugin.description);
  }), gn("click", c, function(...se) {
    var de;
    (de = e.onSelect) == null || de.apply(this, se);
  }), gn("keydown", c, (se) => se.key === "Enter" && e.onSelect()), gn("click", g, d), L(n, c), Qe();
}
as(["click", "keydown"]);
var hf = /* @__PURE__ */ ie('<img class="provider-icon svelte-1ttjeex"/>'), vf = /* @__PURE__ */ ie('<span class="material-icons provider-icon svelte-1ttjeex"> </span>'), pf = /* @__PURE__ */ ie('<section class="provider-card svelte-1ttjeex"><div class="provider-header svelte-1ttjeex"><div class="provider-info svelte-1ttjeex"><h3 class="provider-name bp-typo-h3 svelte-1ttjeex"> </h3> <span class="provider-description bp-typo-body svelte-1ttjeex"> </span></div> <!></div> <div class="plugins-grid svelte-1ttjeex"></div></section>');
function mf(n, e) {
  Ye(e, !0);
  var t = pf(), i = Q(t), r = Q(i), a = Q(r), l = Q(a), u = z(a, 2), o = Q(u), d = z(r, 2);
  {
    var c = (v) => {
      var m = hf();
      Fe(() => {
        Rn(m, "src", e.provider.icon), Rn(m, "alt", `${e.provider.name ?? ""} logo`);
      }), Xl("error", m, (g) => g.currentTarget.style.display = "none"), L(v, m);
    }, h = /* @__PURE__ */ ae(() => e.provider.icon.startsWith("http") || e.provider.icon.startsWith("/") || e.provider.icon.startsWith("data:")), f = (v) => {
      var m = vf(), g = Q(m);
      Fe(() => Ae(g, e.provider.icon)), L(v, m);
    };
    le(d, (v) => {
      s(h) ? v(c) : v(f, -1);
    });
  }
  var p = z(i, 2);
  vr(p, 21, () => e.plugins, (v) => yr(v), (v, m) => {
    {
      let g = /* @__PURE__ */ ae(() => e.selectedPluginKey === yr(s(m)));
      ff(v, {
        get plugin() {
          return s(m);
        },
        get selected() {
          return s(g);
        },
        onSelect: () => e.onSelectPlugin(s(m)),
        onInstall: () => e.onInstall(s(m)),
        onUninstall: () => e.onUninstall(s(m)),
        onEnable: () => e.onEnable(s(m)),
        onDisable: () => e.onDisable(s(m))
      });
    }
  }), Fe(() => {
    Ae(l, e.provider.name), Ae(o, e.provider.description);
  }), L(n, t), Qe();
}
var gf = /* @__PURE__ */ ie('<span class="badge badge-builtin bp-typo-button">Built-in</span>'), If = /* @__PURE__ */ ie("<span> </span>"), bf = /* @__PURE__ */ ie("<span> </span>"), yf = /* @__PURE__ */ ie('<span class="badge badge-incompatible bp-typo-button">Incompatible</span>'), Af = /* @__PURE__ */ ie('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Active by default</span> <span class="bp-typo-16-regular"> </span></div> <div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Requires document</span> <span class="bp-typo-16-regular"> </span></div>', 1), Ef = /* @__PURE__ */ ie('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Supported Version</span> <span class="bp-typo-16-regular"><!></span></div>'), Cf = /* @__PURE__ */ ie('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Current Core</span> <span class="bp-typo-16-regular"> </span></div>'), Sf = /* @__PURE__ */ ie('<p class="details-long-desc bp-typo-body svelte-yr5wcf"> </p>'), xf = /* @__PURE__ */ ie('<button class="action-btn disable bp-typo-button svelte-yr5wcf" disabled="" aria-label="Disable">Disable</button>'), Tf = /* @__PURE__ */ ie('<button class="action-btn enable bp-typo-button svelte-yr5wcf" disabled="" aria-label="Enable">Enable</button>'), Lf = /* @__PURE__ */ ie('<button class="action-btn disable bp-typo-button svelte-yr5wcf">Disable</button>'), wf = /* @__PURE__ */ ie('<button class="action-btn enable bp-typo-button svelte-yr5wcf">Enable</button>'), Mf = /* @__PURE__ */ ie('<button class="action-btn install bp-typo-button svelte-yr5wcf">Install</button>'), Of = /* @__PURE__ */ ie('<button class="action-btn disable bp-typo-button svelte-yr5wcf">Disable</button>'), Df = /* @__PURE__ */ ie('<button class="action-btn enable bp-typo-button svelte-yr5wcf">Enable</button>'), Rf = /* @__PURE__ */ ie('<button class="action-btn remove bp-typo-button svelte-yr5wcf">Remove</button> <!>', 1), _f = /* @__PURE__ */ ie('<aside class="plugin-details svelte-yr5wcf"><div class="details-header svelte-yr5wcf"><div class="details-title-row bp-typo-h1 svelte-yr5wcf"><span class="material-icons details-icon svelte-yr5wcf"> </span> <h3 class="details-name svelte-yr5wcf"> </h3> <button class="close-btn svelte-yr5wcf" aria-label="Close details">✕</button></div> <div class="details-kind-wrapper svelte-yr5wcf"><div class="badge badge-kind bp-typo-label"><span class="material-icons badge-icon"> </span> </div></div> <p class="details-short-desc bp-typo-body svelte-yr5wcf"> </p> <div class="details-badges svelte-yr5wcf"><!> <!> <!></div></div> <div class="details-meta svelte-yr5wcf"><div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Provider</span> <span class="bp-typo-16-regular"> </span></div> <div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Author</span> <span class="bp-typo-16-regular"> </span></div> <!> <!> <!></div> <div class="details-url svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">URL</span> <a target="_blank" rel="noopener noreferrer"> </a></div> <!> <div class="details-actions svelte-yr5wcf"><div style="flex: 1"></div> <!></div></aside>');
function Pf(n, e) {
  Ye(e, !0);
  const t = /* @__PURE__ */ ae(() => e.plugin.builtin === !0), i = /* @__PURE__ */ ae(() => e.plugin.shadowedByHostBuiltin === !0), r = /* @__PURE__ */ ae(() => e.plugin.installationState === "INSTALLED" || s(t) || s(i)), a = /* @__PURE__ */ ae(() => e.plugin.activationState === "ACTIVE"), l = /* @__PURE__ */ ae(() => ar(e.plugin.provider, e.plugin.name)), u = /* @__PURE__ */ ae(() => lo(s(l)));
  var o = _f(), d = Q(o), c = Q(d), h = Q(c), f = Q(h), p = z(h, 2), v = Q(p), m = z(p, 2), g = z(c, 2), E = Q(g), D = Q(E), S = Q(D), C = z(D), M = z(g, 2), w = Q(M), R = z(M, 2), I = Q(R);
  {
    var x = (J) => {
      var ee = gf();
      L(J, ee);
    }, G = (J) => {
      var ee = If(), Ce = Q(ee);
      Fe(
        (ke) => {
          Kn(ee, 1, `badge badge-${ke ?? ""} bp-typo-button`, "svelte-yr5wcf"), Ae(Ce, e.plugin.installationState === "INSTALLED" ? "Installed" : "Available");
        },
        [() => e.plugin.installationState.toLowerCase()]
      ), L(J, ee);
    };
    le(I, (J) => {
      s(t) || s(i) ? J(x) : J(G, -1);
    });
  }
  var ne = z(I, 2);
  {
    var k = (J) => {
      var ee = bf(), Ce = Q(ee);
      Fe(
        (ke) => {
          Kn(ee, 1, `badge badge-${ke ?? ""} bp-typo-button`, "svelte-yr5wcf"), Ae(Ce, s(a) ? "Active" : "Inactive");
        },
        [() => e.plugin.activationState.toLowerCase()]
      ), L(J, ee);
    };
    le(ne, (J) => {
      s(r) && J(k);
    });
  }
  var N = z(ne, 2);
  {
    var Ue = (J) => {
      var ee = yf();
      L(J, ee);
    };
    le(N, (J) => {
      e.plugin.compatible || J(Ue);
    });
  }
  var Y = z(d, 2), F = Q(Y), V = z(Q(F), 2), $ = Q(V), oe = z(F, 2), j = z(Q(oe), 2), he = Q(j), ge = z(oe, 2);
  {
    var se = (J) => {
      var ee = Af(), Ce = re(ee), ke = z(Q(Ce), 2), At = Q(ke), Ve = z(Ce, 2), je = z(Q(Ve), 2), H = Q(je);
      Fe(() => {
        Ae(At, e.plugin.activeByDefault ? "Yes" : "No"), Ae(H, e.plugin.requireDoc ? "Yes" : "No");
      }), L(J, ee);
    };
    le(ge, (J) => {
      s(t) && J(se);
    });
  }
  var de = z(ge, 2);
  {
    var Le = (J) => {
      var ee = Ef(), Ce = z(Q(ee), 2), ke = Q(Ce);
      {
        var At = (H) => {
          var K = tt();
          Fe(() => Ae(K, `${e.plugin.supportedCoreVersion.from ?? ""} – ${e.plugin.supportedCoreVersion.to ?? ""}`)), L(H, K);
        }, Ve = (H) => {
          var K = tt();
          Fe(() => Ae(K, `≥ ${e.plugin.supportedCoreVersion.from ?? ""}`)), L(H, K);
        }, je = (H) => {
          var K = tt();
          Fe(() => Ae(K, "< " + e.plugin.supportedCoreVersion.to)), L(H, K);
        };
        le(ke, (H) => {
          e.plugin.supportedCoreVersion.from && e.plugin.supportedCoreVersion.to ? H(At) : e.plugin.supportedCoreVersion.from ? H(Ve, 1) : e.plugin.supportedCoreVersion.to && H(je, 2);
        });
      }
      L(J, ee);
    };
    le(de, (J) => {
      e.plugin.supportedCoreVersion && (e.plugin.supportedCoreVersion.from || e.plugin.supportedCoreVersion.to) && J(Le);
    });
  }
  var O = z(de, 2);
  {
    var T = (J) => {
      var ee = Cf(), Ce = z(Q(ee), 2), ke = Q(Ce);
      Fe(() => Ae(ke, e.coreVersion)), L(J, ee);
    };
    le(O, (J) => {
      e.coreVersion && J(T);
    });
  }
  var U = z(Y, 2), P = z(Q(U), 2), W = Q(P), Z = z(U, 2);
  {
    var Pe = (J) => {
      var ee = Sf(), Ce = Q(ee);
      Fe(() => Ae(Ce, e.plugin.longDescription)), L(J, ee);
    };
    le(Z, (J) => {
      e.plugin.longDescription && J(Pe);
    });
  }
  var Ne = z(Z, 2), pe = z(Q(Ne), 2);
  {
    var ce = (J) => {
      var ee = ve(), Ce = re(ee);
      {
        var ke = (Ve) => {
          var je = xf();
          Fe(() => Rn(je, "title", s(u))), L(Ve, je);
        }, At = (Ve) => {
          var je = Tf();
          Fe(() => Rn(je, "title", s(u))), L(Ve, je);
        };
        le(Ce, (Ve) => {
          s(a) ? Ve(ke) : Ve(At, -1);
        });
      }
      L(J, ee);
    }, ot = (J) => {
      var ee = ve(), Ce = re(ee);
      {
        var ke = (Ve) => {
          var je = Lf();
          gn("click", je, () => e.onDisable(e.plugin)), L(Ve, je);
        }, At = (Ve) => {
          var je = wf();
          gn("click", je, () => e.onEnable(e.plugin)), L(Ve, je);
        };
        le(Ce, (Ve) => {
          s(a) ? Ve(ke) : Ve(At, -1);
        });
      }
      L(J, ee);
    }, Zt = (J) => {
      var ee = Mf();
      Fe(() => ee.disabled = !e.plugin.compatible), gn("click", ee, () => e.onInstall(e.plugin)), L(J, ee);
    }, Jt = (J) => {
      var ee = Rf(), Ce = re(ee), ke = z(Ce, 2);
      {
        var At = (je) => {
          var H = Of();
          gn("click", H, () => e.onDisable(e.plugin)), L(je, H);
        }, Ve = (je) => {
          var H = Df();
          gn("click", H, () => e.onEnable(e.plugin)), L(je, H);
        };
        le(ke, (je) => {
          s(a) ? je(At) : je(Ve, -1);
        });
      }
      gn("click", Ce, () => e.onUninstall(e.plugin)), L(J, ee);
    };
    le(pe, (J) => {
      s(i) ? J(ce) : s(t) ? J(ot, 1) : s(r) ? J(Jt, -1) : J(Zt, 2);
    });
  }
  Fe(() => {
    Ae(f, e.plugin.icon), Ae(v, s(l)), Ae(S, e.plugin.kindIcon), Ae(C, ` ${e.plugin.kindText ?? ""}`), Ae(w, e.plugin.description), Ae($, e.plugin.provider.name), Ae(he, e.plugin.author), Rn(P, "href", e.plugin.src), Ae(W, e.plugin.src);
  }), gn("click", m, function(...J) {
    var ee;
    (ee = e.onClose) == null || ee.apply(this, J);
  }), L(n, o), Qe();
}
as(["click"]);
var kf = /* @__PURE__ */ ie("<!> <!> <!>", 1), Ff = /* @__PURE__ */ ie("<!> <!>", 1), Bf = /* @__PURE__ */ ie("<!> <!>", 1), Uf = /* @__PURE__ */ ie('<p class="error-message bp-typo-body svelte-1u53k0h"> </p>'), Nf = /* @__PURE__ */ ie('<div class="load-errors svelte-1u53k0h"></div>'), Hf = /* @__PURE__ */ ie('<div class="loading bp-typo-16-regular svelte-1u53k0h">Loading plugins…</div>'), Vf = /* @__PURE__ */ ie('<div class="empty-state bp-typo-body svelte-1u53k0h">No plugins match your search.</div>'), jf = /* @__PURE__ */ ie('<div class="plugins-hub bp-typo-body svelte-1u53k0h"><div class="hub-header svelte-1u53k0h"><h2 class="hub-title svelte-1u53k0h">Plugin Store</h2></div> <div class="hub-toolbar svelte-1u53k0h"><!> <!> <!> <!></div> <!> <div><div class="providers-list svelte-1u53k0h"><!></div> <!></div></div>');
function Gf(n, e) {
  Ye(e, !0);
  let t = b(e, "coreVersion", 19, sf), i = /* @__PURE__ */ fe(De([])), r = /* @__PURE__ */ fe(De([])), a = /* @__PURE__ */ fe(!0), l = /* @__PURE__ */ fe(De([])), u = /* @__PURE__ */ fe(null), o = /* @__PURE__ */ fe(""), d = /* @__PURE__ */ fe("all"), c = /* @__PURE__ */ fe("all"), h = /* @__PURE__ */ fe("all"), f;
  const p = [];
  async function v() {
    X(a, !0), X(l, [], !0);
    const O = Nc(), T = [], U = [], P = await ef(O, t());
    for (const pe of P)
      U.push(pe.provider), T.push(...pe.plugins);
    let W = p;
    {
      const pe = await _c();
      pe.error && X(
        l,
        [
          ...s(l),
          `Error loading providers registry: ${pe.error}`
        ],
        !0
      ), W = pe.providers;
    }
    const Z = await Oc(W);
    for (const pe of Z) {
      pe.error && X(
        l,
        [
          ...s(l),
          `Error loading Provider '${pe.provider.name}': ${pe.error}`
        ],
        !0
      ), U.push(pe.provider);
      for (const ce of pe.plugins)
        T.push(fs(ce, pe.provider, t(), O));
    }
    const Pe = tf(T), Ne = rf(O, Pe, t());
    Ne.length >= 1 && (U.push(ji), T.push(...Ne)), X(r, U, !0), X(i, Vc(T), !0), X(a, !1);
  }
  function m(O) {
    var T;
    return ((T = O == null ? void 0 : O.provider) == null ? void 0 : T.name) === ji.name;
  }
  Be(() => {
    t(), v();
  });
  function g(O) {
    return s(E).filter((T) => T.provider.name === O);
  }
  const E = /* @__PURE__ */ ae(() => s(i).filter((O) => {
    var Z;
    const T = !s(o) || O.name.toLowerCase().includes(s(o).toLowerCase()) || O.description.toLowerCase().includes(s(o).toLowerCase()), U = s(d) === "all" || s(d) === "installed" && O.installationState === "INSTALLED" || s(d) === "available" && O.installationState === "AVAILABLE", P = s(c) === "all" || ((Z = O.provider) == null ? void 0 : Z.name) === s(c), W = s(h) === "all" || O.kind === s(h);
    return T && U && P && W;
  }));
  function D(O) {
    if (!O.compatible || O.builtin || O.shadowedByHostBuiltin)
      return;
    X(i, jc(s(i), O), !0);
    const T = s(i).find((U) => nn(U, O));
    s(u) && nn(s(u), O) && X(u, T ?? null, !0), T && I(T);
  }
  function S(O) {
    const T = s(i).find((Z) => nn(Z, O));
    if (T != null && T.builtin || T != null && T.shadowedByHostBuiltin)
      return;
    if (m(T)) {
      X(i, s(i).filter((Z) => !nn(Z, O)), !0), s(i).some((Z) => m(Z)) || (s(c) === ji.name && X(c, "all"), setTimeout(
        () => {
          X(r, s(r).filter((Z) => Z.name !== ji.name), !0);
        },
        1
      )), s(u) && nn(s(u), O) && X(u, null), T && I(T, !0);
      return;
    }
    const { updated: U, success: P } = Gc(s(i), O);
    X(i, U, !0);
    const W = s(i).find((Z) => nn(Z, O));
    s(u) && nn(s(u), O) && X(u, W ?? null, !0), T && P && I(T, !0);
  }
  function C(O) {
    if (O.shadowedByHostBuiltin)
      return;
    X(i, zc(s(i), O), !0);
    const T = s(i).find((U) => nn(U, O));
    s(u) && nn(s(u), O) && X(u, T ?? null, !0), T && I(T);
  }
  function M(O) {
    if (O.shadowedByHostBuiltin)
      return;
    X(i, Xc(s(i), O), !0);
    const T = s(i).find((U) => nn(U, O));
    s(u) && nn(s(u), O) && X(u, T ?? null, !0), T && I(T);
  }
  function w(O) {
    X(u, s(u) && nn(s(u), O) ? null : O, !0);
  }
  function R() {
    X(u, null);
  }
  function I(O, T = !1) {
    var Ne;
    const U = O.builtin === !0 ? s(i).find((pe) => {
      var ce;
      return ((ce = pe.provider) == null ? void 0 : ce.source) === "builtin" && pe.name === O.name && pe.kind === O.kind;
    }) : void 0, P = O.builtin === !0 ? O.name : ar(O.provider, O.name), W = O.builtin === !0 ? (U == null ? void 0 : U.src) ?? O.src : O.src, Z = T ? { name: P, kind: O.kind, config: null } : {
      name: P,
      kind: O.kind,
      config: {
        name: P,
        author: O.author || ((Ne = O.provider) == null ? void 0 : Ne.name),
        src: W,
        icon: O.icon,
        kind: O.kind,
        description: O.description,
        requireDoc: O.requireDoc ?? !0,
        position: O.position || (O.kind === "menu" ? "middle" : void 0),
        active: O.activationState === "ACTIVE",
        activeByDefault: (U == null ? void 0 : U.activeByDefault) ?? O.activeByDefault,
        installed: O.installationState === "INSTALLED"
      }
    }, Pe = new CustomEvent("oscd-configure-plugin", { bubbles: !0, composed: !0, detail: Z });
    f.dispatchEvent(Pe);
  }
  var x = jf(), G = z(Q(x), 2), ne = Q(G);
  Qd(ne, {
    label: "Search plugins",
    placeholder: "Search...",
    variant: "outlined",
    style: "flex: 1; background: var(--bearingpoint-color-surface, #fff)",
    get value() {
      return s(o);
    },
    set value(T) {
      X(o, T, !0);
    },
    leadingIcon: (T) => {
      Lc(T, {
        class: "material-icons",
        children: (U, P) => {
          var W = tt("search");
          L(U, W);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { leadingIcon: !0 }
  });
  var k = z(ne, 2);
  ya(k, {
    style: "background: var(--bearingpoint-color-surface, #fff)",
    variant: "outlined",
    get value() {
      return s(d);
    },
    set value(O) {
      X(d, O, !0);
    },
    children: (O, T) => {
      var U = kf(), P = re(U);
      Ii(P, {
        value: "all",
        children: (Pe, Ne) => {
          var pe = tt("All status");
          L(Pe, pe);
        },
        $$slots: { default: !0 }
      });
      var W = z(P, 2);
      Ii(W, {
        value: "installed",
        children: (Pe, Ne) => {
          var pe = tt("Installed");
          L(Pe, pe);
        },
        $$slots: { default: !0 }
      });
      var Z = z(W, 2);
      Ii(Z, {
        value: "available",
        children: (Pe, Ne) => {
          var pe = tt("Available");
          L(Pe, pe);
        },
        $$slots: { default: !0 }
      }), L(O, U);
    },
    $$slots: { default: !0 }
  });
  var N = z(k, 2);
  ya(N, {
    class: "filter-select",
    style: "width:300px; background: var(--bearingpoint-color-surface, #fff)",
    variant: "outlined",
    get value() {
      return s(c);
    },
    set value(O) {
      X(c, O, !0);
    },
    children: (O, T) => {
      var U = Ff(), P = re(U);
      Ii(P, {
        value: "all",
        children: (Z, Pe) => {
          var Ne = tt("All contributors");
          L(Z, Ne);
        },
        $$slots: { default: !0 }
      });
      var W = z(P, 2);
      vr(W, 17, () => s(r), Fr, (Z, Pe) => {
        Ii(Z, {
          get value() {
            return s(Pe).name;
          },
          children: (Ne, pe) => {
            var ce = tt();
            Fe(() => Ae(ce, s(Pe).name)), L(Ne, ce);
          },
          $$slots: { default: !0 }
        });
      }), L(O, U);
    },
    $$slots: { default: !0 }
  });
  var Ue = z(N, 2);
  ya(Ue, {
    style: "background: var(--bearingpoint-color-surface, #fff)",
    variant: "outlined",
    get value() {
      return s(h);
    },
    set value(O) {
      X(h, O, !0);
    },
    children: (O, T) => {
      var U = Bf(), P = re(U);
      Ii(P, {
        value: "all",
        children: (Z, Pe) => {
          var Ne = tt("All kinds");
          L(Z, Ne);
        },
        $$slots: { default: !0 }
      });
      var W = z(P, 2);
      vr(W, 17, () => ds, Fr, (Z, Pe) => {
        Ii(Z, {
          get value() {
            return s(Pe);
          },
          children: (Ne, pe) => {
            var ce = tt();
            Fe((ot) => Ae(ce, ot), [
              () => s(Pe).charAt(0).toUpperCase() + s(Pe).slice(1)
            ]), L(Ne, ce);
          },
          $$slots: { default: !0 }
        });
      }), L(O, U);
    },
    $$slots: { default: !0 }
  });
  var Y = z(G, 2);
  {
    var F = (O) => {
      var T = Nf();
      vr(T, 21, () => s(l), Fr, (U, P) => {
        var W = Uf(), Z = Q(W);
        Fe(() => Ae(Z, `⚠️ ${s(P) ?? ""}`)), L(U, W);
      }), L(O, T);
    };
    le(Y, (O) => {
      s(l).length > 0 && O(F);
    });
  }
  var V = z(Y, 2);
  let $;
  var oe = Q(V), j = Q(oe);
  {
    var he = (O) => {
      var T = Hf();
      L(O, T);
    }, ge = (O) => {
      var T = Vf();
      L(O, T);
    }, se = (O) => {
      var T = ve(), U = re(T);
      vr(U, 17, () => s(r), Fr, (P, W) => {
        const Z = /* @__PURE__ */ ae(() => g(s(W).name));
        var Pe = ve(), Ne = re(Pe);
        {
          var pe = (ce) => {
            {
              let ot = /* @__PURE__ */ ae(() => s(u) ? yr(s(u)) : null);
              mf(ce, {
                get provider() {
                  return s(W);
                },
                get plugins() {
                  return s(Z);
                },
                get selectedPluginKey() {
                  return s(ot);
                },
                onSelectPlugin: w,
                onInstall: D,
                onUninstall: S,
                onEnable: C,
                onDisable: M
              });
            }
          };
          le(Ne, (ce) => {
            s(Z).length > 0 && ce(pe);
          });
        }
        L(P, Pe);
      }), L(O, T);
    };
    le(j, (O) => {
      s(a) ? O(he) : s(E).length === 0 ? O(ge, 1) : O(se, -1);
    });
  }
  var de = z(oe, 2);
  {
    var Le = (O) => {
      Pf(O, {
        get plugin() {
          return s(u);
        },
        onClose: R,
        onInstall: D,
        onUninstall: S,
        onEnable: C,
        onDisable: M,
        get coreVersion() {
          return t();
        }
      });
    };
    le(de, (O) => {
      s(u) !== null && O(Le);
    });
  }
  Me(x, (O) => f = O, () => f), Fe(() => $ = Kn(V, 1, "hub-body svelte-1u53k0h", null, $, { "with-details": s(u) !== null })), L(n, x), Qe();
}
function zf(n, e) {
  Gf(n, {
    get coreVersion() {
      return e.coreVersion;
    }
  });
}
const Xf = "plugins-hub", Wf = "0.0.1";
var Yi;
class Zf extends HTMLElement {
  constructor() {
    super();
    be(this, Yi);
    this.targetDiv = null, this.originalStyles = {}, Se(this, Yi, /* @__PURE__ */ fe(De({ doc: void 0, editCount: void 0, coreVersion: void 0 })));
  }
  get props() {
    return s(y(this, Yi));
  }
  set props(t) {
    X(y(this, Yi), t, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount, this.props.coreVersion = this._coreVersion;
    const t = this.shadowRoot;
    if (!t)
      throw new Error("ShadowRoot not found");
    const i = Kf();
    t.appendChild(i);
    const r = () => {
      Gu(zf, { target: t, props: this.props }), requestAnimationFrame(() => this.applyLayoutHack());
    };
    i.addEventListener("load", r, { once: !0 }), i.addEventListener("error", r, { once: !0 });
  }
  disconnectedCallback() {
    this.restoreLayoutHack();
  }
  set doc(t) {
    this._doc = t, this.props.doc = t;
  }
  set editCount(t) {
    this._editCount = t, this.props.editCount = t;
  }
  set coreVersion(t) {
    this._coreVersion = t, this.props.coreVersion = t;
  }
  /**
   * Apply a layout hack to fix the height of the plugin-container div.
   * This is necessary because compas-oscd core doesn't limit the plugin-container height to the current window-height.
   */
  applyLayoutHack() {
    const t = oo();
    t != null && t.shadowRoot && (this.targetDiv = t.shadowRoot.querySelector("div"), this.targetDiv && (this.originalStyles = {
      height: this.targetDiv.style.height,
      display: this.targetDiv.style.display,
      flexDirection: this.targetDiv.style.flexDirection
    }, this.targetDiv.style.height = "calc(100vh - 4px)", this.targetDiv.style.display = "flex", this.targetDiv.style.flexDirection = "column"));
  }
  restoreLayoutHack() {
    this.targetDiv && (this.targetDiv.style.height = this.originalStyles.height ?? "", this.targetDiv.style.display = this.originalStyles.display ?? "", this.targetDiv.style.flexDirection = this.originalStyles.flexDirection ?? "", this.targetDiv = null);
  }
}
Yi = new WeakMap();
function Kf() {
  const n = `${Xf}-v${Wf}-style`, e = qf(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function qf() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  Zf as default
};
