goog.provide('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.trace');
mranderson047.re_frame.v0v10v2.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_((mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.events.kind) : mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.events.kind)))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
mranderson047.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils = (function mranderson047$re_frame$v0v10v2$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__25051_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__25051_SHARP_));
});
if(!(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_)){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", given an empty interceptor chain"], 0));
} else {
}

var temp__5457__auto___25059 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___25059)){
var not_i_25060 = temp__5457__auto___25059;
if(cljs.core.fn_QMARK_(not_i_25060)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_25060], 0));
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected interceptors, but got: ",not_i_25060], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
mranderson047.re_frame.v0v10v2.re_frame.events.register = (function mranderson047$re_frame$v0v10v2$re_frame$events$register(id,interceptors){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler(mranderson047.re_frame.v0v10v2.re_frame.events.kind,id,mranderson047.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils(id,interceptors));
});
mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
mranderson047.re_frame.v0v10v2.re_frame.events.handle = (function mranderson047$re_frame$v0v10v2$re_frame$events$handle(event_v){
var event_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(event_v);
var temp__5455__auto__ = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson047.re_frame.v0v10v2.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5455__auto__)){
var interceptors = temp__5455__auto__;
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_)){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling \"",mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler."], 0));
} else {
var _STAR_handling_STAR_25078 = mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = event_v;

try{if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_25086 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson047.re_frame.v0v10v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return mranderson047.re_frame.v0v10v2.re_frame.interceptor.execute(event_v,interceptors);
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__25016__auto___25122 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__25017__auto___25123 = (end__25016__auto___25122 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__25091_25125 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__25092_25126 = null;
var count__25093_25127 = (0);
var i__25094_25128 = (0);
while(true){
if((i__25094_25128 < count__25093_25127)){
var vec__25095_25129 = chunk__25092_25126.cljs$core$IIndexed$_nth$arity$2(null,i__25094_25128);
var k__25018__auto___25130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25095_25129,(0),null);
var cb__25019__auto___25131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25095_25129,(1),null);
try{var G__25099_25132 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25123,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25131.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25131.cljs$core$IFn$_invoke$arity$1(G__25099_25132) : cb__25019__auto___25131.call(null,G__25099_25132));
}catch (e25098){if((e25098 instanceof java.lang.Exception)){
var e__25020__auto___25137 = e25098;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25130,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25137], 0));
} else {
throw e25098;

}
}

var G__25138 = seq__25091_25125;
var G__25139 = chunk__25092_25126;
var G__25140 = count__25093_25127;
var G__25141 = (i__25094_25128 + (1));
seq__25091_25125 = G__25138;
chunk__25092_25126 = G__25139;
count__25093_25127 = G__25140;
i__25094_25128 = G__25141;
continue;
} else {
var temp__5457__auto___25142 = cljs.core.seq(seq__25091_25125);
if(temp__5457__auto___25142){
var seq__25091_25143__$1 = temp__5457__auto___25142;
if(cljs.core.chunked_seq_QMARK_(seq__25091_25143__$1)){
var c__4319__auto___25144 = cljs.core.chunk_first(seq__25091_25143__$1);
var G__25145 = cljs.core.chunk_rest(seq__25091_25143__$1);
var G__25146 = c__4319__auto___25144;
var G__25147 = cljs.core.count(c__4319__auto___25144);
var G__25148 = (0);
seq__25091_25125 = G__25145;
chunk__25092_25126 = G__25146;
count__25093_25127 = G__25147;
i__25094_25128 = G__25148;
continue;
} else {
var vec__25100_25149 = cljs.core.first(seq__25091_25143__$1);
var k__25018__auto___25150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25100_25149,(0),null);
var cb__25019__auto___25151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25100_25149,(1),null);
try{var G__25105_25152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25123,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25151.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25151.cljs$core$IFn$_invoke$arity$1(G__25105_25152) : cb__25019__auto___25151.call(null,G__25105_25152));
}catch (e25104){if((e25104 instanceof java.lang.Exception)){
var e__25020__auto___25153 = e25104;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25150,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25153], 0));
} else {
throw e25104;

}
}

var G__25154 = cljs.core.next(seq__25091_25143__$1);
var G__25155 = null;
var G__25156 = (0);
var G__25157 = (0);
seq__25091_25125 = G__25154;
chunk__25092_25126 = G__25155;
count__25093_25127 = G__25156;
i__25094_25128 = G__25157;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25086;
}} else {
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.execute(event_v,interceptors);
}
}finally {mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_25078;
}}
} else {
return null;
}
});

//# sourceMappingURL=mranderson047.re_frame.v0v10v2.re_frame.events.js.map
