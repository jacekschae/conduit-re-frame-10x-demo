goog.provide('mranderson047.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
mranderson047.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.fx.kind) : mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
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
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson047$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler(mranderson047.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
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
mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson047$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__25525 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25526 = null;
var count__25527 = (0);
var i__25528 = (0);
while(true){
if((i__25528 < count__25527)){
var vec__25529 = chunk__25526.cljs$core$IIndexed$_nth$arity$2(null,i__25528);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25529,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25529,(1),null);
var temp__5455__auto___25535 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___25535)){
var effect_fn_25536 = temp__5455__auto___25535;
(effect_fn_25536.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25536.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25536.call(null,effect_value));
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}


var G__25537 = seq__25525;
var G__25538 = chunk__25526;
var G__25539 = count__25527;
var G__25540 = (i__25528 + (1));
seq__25525 = G__25537;
chunk__25526 = G__25538;
count__25527 = G__25539;
i__25528 = G__25540;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__25525);
if(temp__5457__auto__){
var seq__25525__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25525__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__25525__$1);
var G__25541 = cljs.core.chunk_rest(seq__25525__$1);
var G__25542 = c__4319__auto__;
var G__25543 = cljs.core.count(c__4319__auto__);
var G__25544 = (0);
seq__25525 = G__25541;
chunk__25526 = G__25542;
count__25527 = G__25543;
i__25528 = G__25544;
continue;
} else {
var vec__25532 = cljs.core.first(seq__25525__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25532,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25532,(1),null);
var temp__5455__auto___25545 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___25545)){
var effect_fn_25546 = temp__5455__auto___25545;
(effect_fn_25546.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25546.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25546.call(null,effect_value));
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}


var G__25547 = cljs.core.next(seq__25525__$1);
var G__25548 = null;
var G__25549 = (0);
var G__25550 = (0);
seq__25525 = G__25547;
chunk__25526 = G__25548;
count__25527 = G__25549;
i__25528 = G__25550;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__25551 = cljs.core.seq(value);
var chunk__25552 = null;
var count__25553 = (0);
var i__25554 = (0);
while(true){
if((i__25554 < count__25553)){
var map__25555 = chunk__25552.cljs$core$IIndexed$_nth$arity$2(null,i__25554);
var map__25555__$1 = ((((!((map__25555 == null)))?(((((map__25555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25555):map__25555);
var effect = map__25555__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25555__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25555__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_(((function (seq__25551,chunk__25552,count__25553,i__25554,map__25555,map__25555__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(dispatch);
});})(seq__25551,chunk__25552,count__25553,i__25554,map__25555,map__25555__$1,effect,ms,dispatch))
,ms);
}


var G__25559 = seq__25551;
var G__25560 = chunk__25552;
var G__25561 = count__25553;
var G__25562 = (i__25554 + (1));
seq__25551 = G__25559;
chunk__25552 = G__25560;
count__25553 = G__25561;
i__25554 = G__25562;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__25551);
if(temp__5457__auto__){
var seq__25551__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25551__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__25551__$1);
var G__25563 = cljs.core.chunk_rest(seq__25551__$1);
var G__25564 = c__4319__auto__;
var G__25565 = cljs.core.count(c__4319__auto__);
var G__25566 = (0);
seq__25551 = G__25563;
chunk__25552 = G__25564;
count__25553 = G__25565;
i__25554 = G__25566;
continue;
} else {
var map__25557 = cljs.core.first(seq__25551__$1);
var map__25557__$1 = ((((!((map__25557 == null)))?(((((map__25557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25557):map__25557);
var effect = map__25557__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25557__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25557__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_(((function (seq__25551,chunk__25552,count__25553,i__25554,map__25557,map__25557__$1,effect,ms,dispatch,seq__25551__$1,temp__5457__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(dispatch);
});})(seq__25551,chunk__25552,count__25553,i__25554,map__25557,map__25557__$1,effect,ms,dispatch,seq__25551__$1,temp__5457__auto__))
,ms);
}


var G__25567 = cljs.core.next(seq__25551__$1);
var G__25568 = null;
var G__25569 = (0);
var G__25570 = (0);
seq__25551 = G__25567;
chunk__25552 = G__25568;
count__25553 = G__25569;
i__25554 = G__25570;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__25571 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25572 = null;
var count__25573 = (0);
var i__25574 = (0);
while(true){
if((i__25574 < count__25573)){
var event = chunk__25572.cljs$core$IIndexed$_nth$arity$2(null,i__25574);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(event);


var G__25575 = seq__25571;
var G__25576 = chunk__25572;
var G__25577 = count__25573;
var G__25578 = (i__25574 + (1));
seq__25571 = G__25575;
chunk__25572 = G__25576;
count__25573 = G__25577;
i__25574 = G__25578;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__25571);
if(temp__5457__auto__){
var seq__25571__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25571__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__25571__$1);
var G__25579 = cljs.core.chunk_rest(seq__25571__$1);
var G__25580 = c__4319__auto__;
var G__25581 = cljs.core.count(c__4319__auto__);
var G__25582 = (0);
seq__25571 = G__25579;
chunk__25572 = G__25580;
count__25573 = G__25581;
i__25574 = G__25582;
continue;
} else {
var event = cljs.core.first(seq__25571__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(event);


var G__25583 = cljs.core.next(seq__25571__$1);
var G__25584 = null;
var G__25585 = (0);
var G__25586 = (0);
seq__25571 = G__25583;
chunk__25572 = G__25584;
count__25573 = G__25585;
i__25574 = G__25586;
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
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__25587 = cljs.core.seq(value);
var chunk__25588 = null;
var count__25589 = (0);
var i__25590 = (0);
while(true){
if((i__25590 < count__25589)){
var event = chunk__25588.cljs$core$IIndexed$_nth$arity$2(null,i__25590);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__25591 = seq__25587;
var G__25592 = chunk__25588;
var G__25593 = count__25589;
var G__25594 = (i__25590 + (1));
seq__25587 = G__25591;
chunk__25588 = G__25592;
count__25589 = G__25593;
i__25590 = G__25594;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__25587);
if(temp__5457__auto__){
var seq__25587__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25587__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__25587__$1);
var G__25595 = cljs.core.chunk_rest(seq__25587__$1);
var G__25596 = c__4319__auto__;
var G__25597 = cljs.core.count(c__4319__auto__);
var G__25598 = (0);
seq__25587 = G__25595;
chunk__25588 = G__25596;
count__25589 = G__25597;
i__25590 = G__25598;
continue;
} else {
var event = cljs.core.first(seq__25587__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__25599 = cljs.core.next(seq__25587__$1);
var G__25600 = null;
var G__25601 = (0);
var G__25602 = (0);
seq__25587 = G__25599;
chunk__25588 = G__25600;
count__25589 = G__25601;
i__25590 = G__25602;
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
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(mranderson047.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=mranderson047.re_frame.v0v10v2.re_frame.fx.js.map
