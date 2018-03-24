goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_27326 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__27327 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27328 = null;
var count__27329 = (0);
var i__27330 = (0);
while(true){
if((i__27330 < count__27329)){
var vec__27331 = chunk__27328.cljs$core$IIndexed$_nth$arity$2(null,i__27330);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27331,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27331,(1),null);
var temp__5455__auto___27347 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27347)){
var effect_fn_27348 = temp__5455__auto___27347;
(effect_fn_27348.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27348.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27348.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27349 = seq__27327;
var G__27350 = chunk__27328;
var G__27351 = count__27329;
var G__27352 = (i__27330 + (1));
seq__27327 = G__27349;
chunk__27328 = G__27350;
count__27329 = G__27351;
i__27330 = G__27352;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27327);
if(temp__5457__auto__){
var seq__27327__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27327__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27327__$1);
var G__27353 = cljs.core.chunk_rest(seq__27327__$1);
var G__27354 = c__4319__auto__;
var G__27355 = cljs.core.count(c__4319__auto__);
var G__27356 = (0);
seq__27327 = G__27353;
chunk__27328 = G__27354;
count__27329 = G__27355;
i__27330 = G__27356;
continue;
} else {
var vec__27334 = cljs.core.first(seq__27327__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27334,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27334,(1),null);
var temp__5455__auto___27359 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27359)){
var effect_fn_27361 = temp__5455__auto___27359;
(effect_fn_27361.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27361.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27361.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27364 = cljs.core.next(seq__27327__$1);
var G__27365 = null;
var G__27366 = (0);
var G__27367 = (0);
seq__27327 = G__27364;
chunk__27328 = G__27365;
count__27329 = G__27366;
i__27330 = G__27367;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26385__auto___27369 = re_frame.interop.now();
var duration__26386__auto___27370 = (end__26385__auto___27369 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26386__auto___27370,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26385__auto___27369);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27326;
}} else {
var seq__27337 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27338 = null;
var count__27339 = (0);
var i__27340 = (0);
while(true){
if((i__27340 < count__27339)){
var vec__27341 = chunk__27338.cljs$core$IIndexed$_nth$arity$2(null,i__27340);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27341,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27341,(1),null);
var temp__5455__auto___27375 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27375)){
var effect_fn_27379 = temp__5455__auto___27375;
(effect_fn_27379.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27379.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27379.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27380 = seq__27337;
var G__27381 = chunk__27338;
var G__27382 = count__27339;
var G__27383 = (i__27340 + (1));
seq__27337 = G__27380;
chunk__27338 = G__27381;
count__27339 = G__27382;
i__27340 = G__27383;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27337);
if(temp__5457__auto__){
var seq__27337__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27337__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27337__$1);
var G__27387 = cljs.core.chunk_rest(seq__27337__$1);
var G__27388 = c__4319__auto__;
var G__27389 = cljs.core.count(c__4319__auto__);
var G__27390 = (0);
seq__27337 = G__27387;
chunk__27338 = G__27388;
count__27339 = G__27389;
i__27340 = G__27390;
continue;
} else {
var vec__27344 = cljs.core.first(seq__27337__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27344,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27344,(1),null);
var temp__5455__auto___27392 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27392)){
var effect_fn_27393 = temp__5455__auto___27392;
(effect_fn_27393.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27393.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27393.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27394 = cljs.core.next(seq__27337__$1);
var G__27395 = null;
var G__27396 = (0);
var G__27397 = (0);
seq__27337 = G__27394;
chunk__27338 = G__27395;
count__27339 = G__27396;
i__27340 = G__27397;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27402 = cljs.core.seq(value);
var chunk__27403 = null;
var count__27404 = (0);
var i__27405 = (0);
while(true){
if((i__27405 < count__27404)){
var map__27406 = chunk__27403.cljs$core$IIndexed$_nth$arity$2(null,i__27405);
var map__27406__$1 = ((((!((map__27406 == null)))?(((((map__27406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27406):map__27406);
var effect = map__27406__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27406__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27406__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27402,chunk__27403,count__27404,i__27405,map__27406,map__27406__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27402,chunk__27403,count__27404,i__27405,map__27406,map__27406__$1,effect,ms,dispatch))
,ms);
}


var G__27410 = seq__27402;
var G__27411 = chunk__27403;
var G__27412 = count__27404;
var G__27413 = (i__27405 + (1));
seq__27402 = G__27410;
chunk__27403 = G__27411;
count__27404 = G__27412;
i__27405 = G__27413;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27402);
if(temp__5457__auto__){
var seq__27402__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27402__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27402__$1);
var G__27414 = cljs.core.chunk_rest(seq__27402__$1);
var G__27415 = c__4319__auto__;
var G__27416 = cljs.core.count(c__4319__auto__);
var G__27417 = (0);
seq__27402 = G__27414;
chunk__27403 = G__27415;
count__27404 = G__27416;
i__27405 = G__27417;
continue;
} else {
var map__27408 = cljs.core.first(seq__27402__$1);
var map__27408__$1 = ((((!((map__27408 == null)))?(((((map__27408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27408):map__27408);
var effect = map__27408__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27408__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27408__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27402,chunk__27403,count__27404,i__27405,map__27408,map__27408__$1,effect,ms,dispatch,seq__27402__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27402,chunk__27403,count__27404,i__27405,map__27408,map__27408__$1,effect,ms,dispatch,seq__27402__$1,temp__5457__auto__))
,ms);
}


var G__27418 = cljs.core.next(seq__27402__$1);
var G__27419 = null;
var G__27420 = (0);
var G__27421 = (0);
seq__27402 = G__27418;
chunk__27403 = G__27419;
count__27404 = G__27420;
i__27405 = G__27421;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__27425 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27426 = null;
var count__27427 = (0);
var i__27428 = (0);
while(true){
if((i__27428 < count__27427)){
var event = chunk__27426.cljs$core$IIndexed$_nth$arity$2(null,i__27428);
re_frame.router.dispatch(event);


var G__27433 = seq__27425;
var G__27434 = chunk__27426;
var G__27435 = count__27427;
var G__27436 = (i__27428 + (1));
seq__27425 = G__27433;
chunk__27426 = G__27434;
count__27427 = G__27435;
i__27428 = G__27436;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27425);
if(temp__5457__auto__){
var seq__27425__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27425__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27425__$1);
var G__27437 = cljs.core.chunk_rest(seq__27425__$1);
var G__27438 = c__4319__auto__;
var G__27439 = cljs.core.count(c__4319__auto__);
var G__27440 = (0);
seq__27425 = G__27437;
chunk__27426 = G__27438;
count__27427 = G__27439;
i__27428 = G__27440;
continue;
} else {
var event = cljs.core.first(seq__27425__$1);
re_frame.router.dispatch(event);


var G__27441 = cljs.core.next(seq__27425__$1);
var G__27442 = null;
var G__27443 = (0);
var G__27444 = (0);
seq__27425 = G__27441;
chunk__27426 = G__27442;
count__27427 = G__27443;
i__27428 = G__27444;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__27446 = cljs.core.seq(value);
var chunk__27447 = null;
var count__27448 = (0);
var i__27449 = (0);
while(true){
if((i__27449 < count__27448)){
var event = chunk__27447.cljs$core$IIndexed$_nth$arity$2(null,i__27449);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27454 = seq__27446;
var G__27455 = chunk__27447;
var G__27456 = count__27448;
var G__27457 = (i__27449 + (1));
seq__27446 = G__27454;
chunk__27447 = G__27455;
count__27448 = G__27456;
i__27449 = G__27457;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27446);
if(temp__5457__auto__){
var seq__27446__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27446__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27446__$1);
var G__27458 = cljs.core.chunk_rest(seq__27446__$1);
var G__27459 = c__4319__auto__;
var G__27460 = cljs.core.count(c__4319__auto__);
var G__27461 = (0);
seq__27446 = G__27458;
chunk__27447 = G__27459;
count__27448 = G__27460;
i__27449 = G__27461;
continue;
} else {
var event = cljs.core.first(seq__27446__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27462 = cljs.core.next(seq__27446__$1);
var G__27463 = null;
var G__27464 = (0);
var G__27465 = (0);
seq__27446 = G__27462;
chunk__27447 = G__27463;
count__27448 = G__27464;
i__27449 = G__27465;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
