goog.provide('mranderson047.re_frame.v0v10v2.re_frame.trace');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
mranderson047.re_frame.v0v10v2.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = null;
mranderson047.re_frame.v0v10v2.re_frame.trace.reset_tracing_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(mranderson047.re_frame.v0v10v2.re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("mranderson047.re_frame.v0v10v2.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_ = (function mranderson047$re_frame$v0v10v2$re_frame$trace$is_trace_enabled_QMARK_(){
return mranderson047.re_frame.v0v10v2.re_frame.trace.trace_enabled_QMARK_;
});
mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
mranderson047.re_frame.v0v10v2.re_frame.trace.register_trace_cb = (function mranderson047$re_frame$v0v10v2$re_frame$trace$register_trace_cb(key,f){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
mranderson047.re_frame.v0v10v2.re_frame.trace.remove_trace_cb = (function mranderson047$re_frame$v0v10v2$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
mranderson047.re_frame.v0v10v2.re_frame.trace.next_id = (function mranderson047$re_frame$v0v10v2$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.trace.id,cljs.core.inc);
});
mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace = (function mranderson047$re_frame$v0v10v2$re_frame$trace$start_trace(p__25039){
var map__25040 = p__25039;
var map__25040__$1 = ((((!((map__25040 == null)))?(((((map__25040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25040):map__25040);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25040__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25040__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25040__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25040__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),mranderson047.re_frame.v0v10v2.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], null);
});

//# sourceMappingURL=mranderson047.re_frame.v0v10v2.re_frame.trace.js.map
