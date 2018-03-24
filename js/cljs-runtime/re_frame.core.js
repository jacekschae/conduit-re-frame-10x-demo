goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.events');
goog.require('re_frame.subs');
goog.require('re_frame.interop');
goog.require('re_frame.db');
goog.require('re_frame.fx');
goog.require('re_frame.cofx');
goog.require('re_frame.router');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.interceptor');
goog.require('re_frame.std_interceptors');
goog.require('clojure.set');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.clear_subscription_cache_BANG_ = re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,handler_fn);
});
re_frame.core.reg_fx = re_frame.fx.reg_fx;
re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.reg_cofx;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var G__27663 = arguments.length;
switch (G__27663) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var G__27677 = arguments.length;
switch (G__27677) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var G__27690 = arguments.length;
switch (G__27690) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(re_frame.db.app_db);
var subs_cache = cljs.core.deref(re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_27701 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_27702 = cljs.core.set(cljs.core.vals(cljs.core.deref(re_frame.subs.query__GT_reaction)));
var seq__27695_27703 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_27702,original_subs_27701));
var chunk__27696_27704 = null;
var count__27697_27705 = (0);
var i__27698_27706 = (0);
while(true){
if((i__27698_27706 < count__27697_27705)){
var sub_27707 = chunk__27696_27704.cljs$core$IIndexed$_nth$arity$2(null,i__27698_27706);
re_frame.interop.dispose_BANG_(sub_27707);


var G__27708 = seq__27695_27703;
var G__27709 = chunk__27696_27704;
var G__27710 = count__27697_27705;
var G__27711 = (i__27698_27706 + (1));
seq__27695_27703 = G__27708;
chunk__27696_27704 = G__27709;
count__27697_27705 = G__27710;
i__27698_27706 = G__27711;
continue;
} else {
var temp__5457__auto___27712 = cljs.core.seq(seq__27695_27703);
if(temp__5457__auto___27712){
var seq__27695_27713__$1 = temp__5457__auto___27712;
if(cljs.core.chunked_seq_QMARK_(seq__27695_27713__$1)){
var c__4319__auto___27714 = cljs.core.chunk_first(seq__27695_27713__$1);
var G__27715 = cljs.core.chunk_rest(seq__27695_27713__$1);
var G__27716 = c__4319__auto___27714;
var G__27717 = cljs.core.count(c__4319__auto___27714);
var G__27718 = (0);
seq__27695_27703 = G__27715;
chunk__27696_27704 = G__27716;
count__27697_27705 = G__27717;
i__27698_27706 = G__27718;
continue;
} else {
var sub_27719 = cljs.core.first(seq__27695_27713__$1);
re_frame.interop.dispose_BANG_(sub_27719);


var G__27720 = cljs.core.next(seq__27695_27713__$1);
var G__27721 = null;
var G__27722 = (0);
var G__27723 = (0);
seq__27695_27703 = G__27720;
chunk__27696_27704 = G__27721;
count__27697_27705 = G__27722;
i__27698_27706 = G__27723;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Remove all events queued for processing
 */
re_frame.core.purge_event_queue = (function re_frame$core$purge_event_queue(){
return re_frame.router.purge(re_frame.router.event_queue);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var G__27727 = arguments.length;
switch (G__27727) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.add_post_event_callback(re_frame.router.event_queue,id,f);
});

re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.remove_post_event_callback(re_frame.router.event_queue,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__4500__auto__ = [];
var len__4497__auto___27735 = arguments.length;
var i__4498__auto___27736 = (0);
while(true){
if((i__4498__auto___27736 < len__4497__auto___27735)){
args__4500__auto__.push((arguments[i__4498__auto___27736]));

var G__27737 = (i__4498__auto___27736 + (1));
i__4498__auto___27736 = G__27737;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__27731_27738 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__27732_27739 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of";
var G__27733_27740 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))].join('');
var G__27734_27741 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__27731_27738,G__27732_27739,G__27733_27740,G__27734_27741) : re_frame.core.console.call(null,G__27731_27738,G__27732_27739,G__27733_27740,G__27734_27741));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_event_db,args);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

re_frame.core.register_handler.cljs$lang$applyTo = (function (seq27730){
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27730));
});

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__4500__auto__ = [];
var len__4497__auto___27748 = arguments.length;
var i__4498__auto___27749 = (0);
while(true){
if((i__4498__auto___27749 < len__4497__auto___27748)){
args__4500__auto__.push((arguments[i__4498__auto___27749]));

var G__27750 = (i__4498__auto___27749 + (1));
i__4498__auto___27749 = G__27750;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__27744_27751 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__27745_27752 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of";
var G__27746_27753 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))].join('');
var G__27747_27754 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__27744_27751,G__27745_27752,G__27746_27753,G__27747_27754) : re_frame.core.console.call(null,G__27744_27751,G__27745_27752,G__27746_27753,G__27747_27754));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_sub_raw,args);
});

re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

re_frame.core.register_sub.cljs$lang$applyTo = (function (seq27743){
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27743));
});


//# sourceMappingURL=re_frame.core.js.map
