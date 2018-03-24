goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__26405){
var map__26406 = p__26405;
var map__26406__$1 = ((((!((map__26406 == null)))?(((((map__26406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26406):map__26406);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26406__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26406__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26406__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26406__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__26408_26422 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__26409_26423 = null;
var count__26410_26424 = (0);
var i__26411_26425 = (0);
while(true){
if((i__26411_26425 < count__26410_26424)){
var vec__26412_26426 = chunk__26409_26423.cljs$core$IIndexed$_nth$arity$2(null,i__26411_26425);
var k_26427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26412_26426,(0),null);
var cb_26428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26412_26426,(1),null);
try{var G__26416_26429 = cljs.core.deref(re_frame.trace.traces);
(cb_26428.cljs$core$IFn$_invoke$arity$1 ? cb_26428.cljs$core$IFn$_invoke$arity$1(G__26416_26429) : cb_26428.call(null,G__26416_26429));
}catch (e26415){var e_26430 = e26415;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26427,"while storing",cljs.core.deref(re_frame.trace.traces),e_26430], 0));
}

var G__26431 = seq__26408_26422;
var G__26432 = chunk__26409_26423;
var G__26433 = count__26410_26424;
var G__26434 = (i__26411_26425 + (1));
seq__26408_26422 = G__26431;
chunk__26409_26423 = G__26432;
count__26410_26424 = G__26433;
i__26411_26425 = G__26434;
continue;
} else {
var temp__5457__auto___26435 = cljs.core.seq(seq__26408_26422);
if(temp__5457__auto___26435){
var seq__26408_26436__$1 = temp__5457__auto___26435;
if(cljs.core.chunked_seq_QMARK_(seq__26408_26436__$1)){
var c__4319__auto___26437 = cljs.core.chunk_first(seq__26408_26436__$1);
var G__26438 = cljs.core.chunk_rest(seq__26408_26436__$1);
var G__26439 = c__4319__auto___26437;
var G__26440 = cljs.core.count(c__4319__auto___26437);
var G__26441 = (0);
seq__26408_26422 = G__26438;
chunk__26409_26423 = G__26439;
count__26410_26424 = G__26440;
i__26411_26425 = G__26441;
continue;
} else {
var vec__26417_26442 = cljs.core.first(seq__26408_26436__$1);
var k_26443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26417_26442,(0),null);
var cb_26444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26417_26442,(1),null);
try{var G__26421_26445 = cljs.core.deref(re_frame.trace.traces);
(cb_26444.cljs$core$IFn$_invoke$arity$1 ? cb_26444.cljs$core$IFn$_invoke$arity$1(G__26421_26445) : cb_26444.call(null,G__26421_26445));
}catch (e26420){var e_26446 = e26420;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_26443,"while storing",cljs.core.deref(re_frame.trace.traces),e_26446], 0));
}

var G__26447 = cljs.core.next(seq__26408_26436__$1);
var G__26448 = null;
var G__26449 = (0);
var G__26450 = (0);
seq__26408_26422 = G__26447;
chunk__26409_26423 = G__26448;
count__26410_26424 = G__26449;
i__26411_26425 = G__26450;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
