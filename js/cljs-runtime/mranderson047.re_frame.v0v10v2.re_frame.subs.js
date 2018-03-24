goog.provide('mranderson047.re_frame.v0v10v2.re_frame.subs');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.trace');
mranderson047.re_frame.v0v10v2.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_((mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.subs.kind) : mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__25052_25064 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction));
var chunk__25053_25065 = null;
var count__25054_25066 = (0);
var i__25055_25067 = (0);
while(true){
if((i__25055_25067 < count__25054_25066)){
var vec__25056_25068 = chunk__25053_25065.cljs$core$IIndexed$_nth$arity$2(null,i__25055_25067);
var k_25069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25056_25068,(0),null);
var rxn_25070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25056_25068,(1),null);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_(rxn_25070);


var G__25071 = seq__25052_25064;
var G__25072 = chunk__25053_25065;
var G__25073 = count__25054_25066;
var G__25074 = (i__25055_25067 + (1));
seq__25052_25064 = G__25071;
chunk__25053_25065 = G__25072;
count__25054_25066 = G__25073;
i__25055_25067 = G__25074;
continue;
} else {
var temp__5457__auto___25075 = cljs.core.seq(seq__25052_25064);
if(temp__5457__auto___25075){
var seq__25052_25076__$1 = temp__5457__auto___25075;
if(cljs.core.chunked_seq_QMARK_(seq__25052_25076__$1)){
var c__4319__auto___25077 = cljs.core.chunk_first(seq__25052_25076__$1);
var G__25079 = cljs.core.chunk_rest(seq__25052_25076__$1);
var G__25080 = c__4319__auto___25077;
var G__25081 = cljs.core.count(c__4319__auto___25077);
var G__25082 = (0);
seq__25052_25064 = G__25079;
chunk__25053_25065 = G__25080;
count__25054_25066 = G__25081;
i__25055_25067 = G__25082;
continue;
} else {
var vec__25061_25083 = cljs.core.first(seq__25052_25076__$1);
var k_25084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25061_25083,(0),null);
var rxn_25085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25061_25083,(1),null);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_(rxn_25085);


var G__25087 = cljs.core.next(seq__25052_25076__$1);
var G__25088 = null;
var G__25089 = (0);
var G__25090 = (0);
seq__25052_25064 = G__25087;
chunk__25053_25065 = G__25088;
count__25054_25066 = G__25089;
i__25055_25067 = G__25090;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.clear_all_handlers_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$subs$clear_all_handlers_BANG_(){
mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.subs.kind);

return mranderson047.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return = (function mranderson047$re_frame$v0v10v2$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
mranderson047.re_frame.v0v10v2.re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_25103 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(r)], null)], null));

try{try{return null;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__25016__auto___25158 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__25017__auto___25159 = (end__25016__auto___25158 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__25106_25160 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__25107_25161 = null;
var count__25108_25162 = (0);
var i__25109_25163 = (0);
while(true){
if((i__25109_25163 < count__25108_25162)){
var vec__25110_25164 = chunk__25107_25161.cljs$core$IIndexed$_nth$arity$2(null,i__25109_25163);
var k__25018__auto___25165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25110_25164,(0),null);
var cb__25019__auto___25166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25110_25164,(1),null);
try{var G__25114_25167 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25159,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25166.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25166.cljs$core$IFn$_invoke$arity$1(G__25114_25167) : cb__25019__auto___25166.call(null,G__25114_25167));
}catch (e25113){if((e25113 instanceof java.lang.Exception)){
var e__25020__auto___25168 = e25113;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25165,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25168], 0));
} else {
throw e25113;

}
}

var G__25171 = seq__25106_25160;
var G__25172 = chunk__25107_25161;
var G__25173 = count__25108_25162;
var G__25174 = (i__25109_25163 + (1));
seq__25106_25160 = G__25171;
chunk__25107_25161 = G__25172;
count__25108_25162 = G__25173;
i__25109_25163 = G__25174;
continue;
} else {
var temp__5457__auto___25175 = cljs.core.seq(seq__25106_25160);
if(temp__5457__auto___25175){
var seq__25106_25176__$1 = temp__5457__auto___25175;
if(cljs.core.chunked_seq_QMARK_(seq__25106_25176__$1)){
var c__4319__auto___25177 = cljs.core.chunk_first(seq__25106_25176__$1);
var G__25178 = cljs.core.chunk_rest(seq__25106_25176__$1);
var G__25179 = c__4319__auto___25177;
var G__25180 = cljs.core.count(c__4319__auto___25177);
var G__25181 = (0);
seq__25106_25160 = G__25178;
chunk__25107_25161 = G__25179;
count__25108_25162 = G__25180;
i__25109_25163 = G__25181;
continue;
} else {
var vec__25118_25182 = cljs.core.first(seq__25106_25176__$1);
var k__25018__auto___25183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25118_25182,(0),null);
var cb__25019__auto___25184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25118_25182,(1),null);
try{var G__25124_25185 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25159,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25184.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25184.cljs$core$IFn$_invoke$arity$1(G__25124_25185) : cb__25019__auto___25184.call(null,G__25124_25185));
}catch (e25121){if((e25121 instanceof java.lang.Exception)){
var e__25020__auto___25186 = e25121;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25183,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25186], 0));
} else {
throw e25121;

}
}

var G__25187 = cljs.core.next(seq__25106_25176__$1);
var G__25188 = null;
var G__25189 = (0);
var G__25190 = (0);
seq__25106_25160 = G__25187;
chunk__25107_25161 = G__25188;
count__25108_25162 = G__25189;
i__25109_25163 = G__25190;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25103;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25191 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25191;

} else {
}

return r;
});
mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup = (function mranderson047$re_frame$v0v10v2$re_frame$subs$cache_lookup(var_args){
var G__25195 = arguments.length;
switch (G__25195) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref mranderson047.re-frame.v0v10v2.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe = (function mranderson047$re_frame$v0v10v2$re_frame$subs$subscribe(var_args){
var G__25199 = arguments.length;
switch (G__25199) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_25200 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));

try{try{var temp__5455__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25248 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25248;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25249 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25249;

} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25250 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25250;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query) : handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query)));
}
}
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__25016__auto___25251 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__25017__auto___25252 = (end__25016__auto___25251 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__25202_25253 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__25203_25254 = null;
var count__25204_25255 = (0);
var i__25205_25256 = (0);
while(true){
if((i__25205_25256 < count__25204_25255)){
var vec__25207_25257 = chunk__25203_25254.cljs$core$IIndexed$_nth$arity$2(null,i__25205_25256);
var k__25018__auto___25258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25207_25257,(0),null);
var cb__25019__auto___25259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25207_25257,(1),null);
try{var G__25212_25260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25252,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25259.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25259.cljs$core$IFn$_invoke$arity$1(G__25212_25260) : cb__25019__auto___25259.call(null,G__25212_25260));
}catch (e25211){if((e25211 instanceof java.lang.Exception)){
var e__25020__auto___25261 = e25211;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25258,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25261], 0));
} else {
throw e25211;

}
}

var G__25262 = seq__25202_25253;
var G__25263 = chunk__25203_25254;
var G__25264 = count__25204_25255;
var G__25265 = (i__25205_25256 + (1));
seq__25202_25253 = G__25262;
chunk__25203_25254 = G__25263;
count__25204_25255 = G__25264;
i__25205_25256 = G__25265;
continue;
} else {
var temp__5457__auto___25266 = cljs.core.seq(seq__25202_25253);
if(temp__5457__auto___25266){
var seq__25202_25267__$1 = temp__5457__auto___25266;
if(cljs.core.chunked_seq_QMARK_(seq__25202_25267__$1)){
var c__4319__auto___25268 = cljs.core.chunk_first(seq__25202_25267__$1);
var G__25269 = cljs.core.chunk_rest(seq__25202_25267__$1);
var G__25270 = c__4319__auto___25268;
var G__25271 = cljs.core.count(c__4319__auto___25268);
var G__25272 = (0);
seq__25202_25253 = G__25269;
chunk__25203_25254 = G__25270;
count__25204_25255 = G__25271;
i__25205_25256 = G__25272;
continue;
} else {
var vec__25213_25273 = cljs.core.first(seq__25202_25267__$1);
var k__25018__auto___25274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25213_25273,(0),null);
var cb__25019__auto___25275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25213_25273,(1),null);
try{var G__25217_25276 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25252,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25275.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25275.cljs$core$IFn$_invoke$arity$1(G__25217_25276) : cb__25019__auto___25275.call(null,G__25217_25276));
}catch (e25216){if((e25216 instanceof java.lang.Exception)){
var e__25020__auto___25277 = e25216;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25274,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25277], 0));
} else {
throw e25216;

}
}

var G__25278 = cljs.core.next(seq__25202_25267__$1);
var G__25279 = null;
var G__25280 = (0);
var G__25281 = (0);
seq__25202_25253 = G__25278;
chunk__25203_25254 = G__25279;
count__25204_25255 = G__25280;
i__25205_25256 = G__25281;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25200;
}} else {
var temp__5455__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25282 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25282;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25283 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25283;

} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25285 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25285;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query) : handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query)));
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_25218 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__5455__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25286 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25286;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25287 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25287;

} else {
}

if(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5457__auto___25288 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5457__auto___25288)){
var not_reactive_25289 = temp__5457__auto___25288;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_25289], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25290 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25290;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25218){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25218))
);
var sub = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25218){
return (function (){
var G__25241 = mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
var G__25242 = query;
var G__25243 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__25241,G__25242,G__25243) : handler_fn.call(null,G__25241,G__25242,G__25243));
});})(dyn_vals,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25218))
);
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,dynv,mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25218){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_25218))
));
}
}
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__25016__auto___25291 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__25017__auto___25292 = (end__25016__auto___25291 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__25219_25293 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__25220_25294 = null;
var count__25221_25295 = (0);
var i__25222_25296 = (0);
while(true){
if((i__25222_25296 < count__25221_25295)){
var vec__25223_25297 = chunk__25220_25294.cljs$core$IIndexed$_nth$arity$2(null,i__25222_25296);
var k__25018__auto___25298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25223_25297,(0),null);
var cb__25019__auto___25299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25223_25297,(1),null);
try{var G__25232_25300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25292,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25299.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25299.cljs$core$IFn$_invoke$arity$1(G__25232_25300) : cb__25019__auto___25299.call(null,G__25232_25300));
}catch (e25228){if((e25228 instanceof java.lang.Exception)){
var e__25020__auto___25301 = e25228;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25298,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25301], 0));
} else {
throw e25228;

}
}

var G__25302 = seq__25219_25293;
var G__25303 = chunk__25220_25294;
var G__25304 = count__25221_25295;
var G__25305 = (i__25222_25296 + (1));
seq__25219_25293 = G__25302;
chunk__25220_25294 = G__25303;
count__25221_25295 = G__25304;
i__25222_25296 = G__25305;
continue;
} else {
var temp__5457__auto___25306 = cljs.core.seq(seq__25219_25293);
if(temp__5457__auto___25306){
var seq__25219_25307__$1 = temp__5457__auto___25306;
if(cljs.core.chunked_seq_QMARK_(seq__25219_25307__$1)){
var c__4319__auto___25308 = cljs.core.chunk_first(seq__25219_25307__$1);
var G__25309 = cljs.core.chunk_rest(seq__25219_25307__$1);
var G__25310 = c__4319__auto___25308;
var G__25311 = cljs.core.count(c__4319__auto___25308);
var G__25312 = (0);
seq__25219_25293 = G__25309;
chunk__25220_25294 = G__25310;
count__25221_25295 = G__25311;
i__25222_25296 = G__25312;
continue;
} else {
var vec__25233_25313 = cljs.core.first(seq__25219_25307__$1);
var k__25018__auto___25314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25233_25313,(0),null);
var cb__25019__auto___25315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25233_25313,(1),null);
try{var G__25237_25316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25292,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25315.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25315.cljs$core$IFn$_invoke$arity$1(G__25237_25316) : cb__25019__auto___25315.call(null,G__25237_25316));
}catch (e25236){if((e25236 instanceof java.lang.Exception)){
var e__25020__auto___25317 = e25236;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25314,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25317], 0));
} else {
throw e25236;

}
}

var G__25318 = cljs.core.next(seq__25219_25307__$1);
var G__25319 = null;
var G__25320 = (0);
var G__25321 = (0);
seq__25219_25293 = G__25318;
chunk__25220_25294 = G__25319;
count__25221_25295 = G__25320;
i__25222_25296 = G__25321;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25218;
}} else {
var temp__5455__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25322 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25322;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25323 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25323;

} else {
}

if(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5457__auto___25324 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5457__auto___25324)){
var not_reactive_25325 = temp__5457__auto___25324;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_25325], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25326 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25326;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__5455__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5455__auto__))
);
var sub = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__5455__auto__){
return (function (){
var G__25244 = mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
var G__25245 = query;
var G__25246 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__25244,G__25245,G__25246) : handler_fn.call(null,G__25244,G__25245,G__25246));
});})(dyn_vals,query_id,handler_fn,temp__5455__auto__))
);
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,dynv,mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__5455__auto__){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5455__auto__))
));
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.map_vals = (function mranderson047$re_frame$v0v10v2$re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__25327){
var vec__25328 = p__25327;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25328,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25328,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals = (function mranderson047$re_frame$v0v10v2$re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?mranderson047.re_frame.v0v10v2.re_frame.subs.map_vals(cljs.core.deref,signals):(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.interop.deref_QMARK_(signals))?cljs.core.deref(signals):mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25331 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25331;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub = (function mranderson047$re_frame$v0v10v2$re_frame$subs$reg_sub(var_args){
var args__4500__auto__ = [];
var len__4497__auto___25398 = arguments.length;
var i__4498__auto___25399 = (0);
while(true){
if((i__4498__auto___25399 < len__4497__auto___25398)){
args__4500__auto__.push((arguments[i__4498__auto___25399]));

var G__25400 = (i__4498__auto___25399 + (1));
i__4498__auto___25399 = G__25400;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__25334 = cljs.core.count(input_args);
switch (G__25334) {
case (0):
return ((function (G__25334,computation_fn,input_args,err_header){
return (function() {
var G__25402 = null;
var G__25402__1 = (function (_){
return mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
});
var G__25402__2 = (function (_,___$1){
return mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
});
G__25402 = function(_,___$1){
switch(arguments.length){
case 1:
return G__25402__1.call(this,_);
case 2:
return G__25402__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__25402.cljs$core$IFn$_invoke$arity$1 = G__25402__1;
G__25402.cljs$core$IFn$_invoke$arity$2 = G__25402__2;
return G__25402;
})()
;})(G__25334,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
var vec__25335 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25335,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25335,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got:",marker], 0));
}

return ((function (vec__25335,marker,vec,G__25334,computation_fn,input_args,err_header){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(vec__25335,marker,vec,G__25334,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)))){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,markers,vecs,G__25334,computation_fn,input_args,err_header){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__25334,computation_fn,input_args,err_header))

}
})();
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler(mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_25338 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(reaction_id)], null)], null));

try{try{var subscription = (function (){var G__25353 = mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__25354 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__25353,G__25354) : computation_fn.call(null,G__25353,G__25354));
})();
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25413 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25413;

} else {
}

return subscription;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__25016__auto___25414 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__25017__auto___25415 = (end__25016__auto___25414 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__25339_25416 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__25340_25417 = null;
var count__25341_25418 = (0);
var i__25342_25419 = (0);
while(true){
if((i__25342_25419 < count__25341_25418)){
var vec__25343_25420 = chunk__25340_25417.cljs$core$IIndexed$_nth$arity$2(null,i__25342_25419);
var k__25018__auto___25421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25343_25420,(0),null);
var cb__25019__auto___25422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25343_25420,(1),null);
try{var G__25347_25423 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25415,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25422.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25422.cljs$core$IFn$_invoke$arity$1(G__25347_25423) : cb__25019__auto___25422.call(null,G__25347_25423));
}catch (e25346){if((e25346 instanceof java.lang.Exception)){
var e__25020__auto___25424 = e25346;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25421,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25424], 0));
} else {
throw e25346;

}
}

var G__25425 = seq__25339_25416;
var G__25426 = chunk__25340_25417;
var G__25427 = count__25341_25418;
var G__25428 = (i__25342_25419 + (1));
seq__25339_25416 = G__25425;
chunk__25340_25417 = G__25426;
count__25341_25418 = G__25427;
i__25342_25419 = G__25428;
continue;
} else {
var temp__5457__auto___25429 = cljs.core.seq(seq__25339_25416);
if(temp__5457__auto___25429){
var seq__25339_25430__$1 = temp__5457__auto___25429;
if(cljs.core.chunked_seq_QMARK_(seq__25339_25430__$1)){
var c__4319__auto___25431 = cljs.core.chunk_first(seq__25339_25430__$1);
var G__25433 = cljs.core.chunk_rest(seq__25339_25430__$1);
var G__25434 = c__4319__auto___25431;
var G__25435 = cljs.core.count(c__4319__auto___25431);
var G__25436 = (0);
seq__25339_25416 = G__25433;
chunk__25340_25417 = G__25434;
count__25341_25418 = G__25435;
i__25342_25419 = G__25436;
continue;
} else {
var vec__25348_25437 = cljs.core.first(seq__25339_25430__$1);
var k__25018__auto___25438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348_25437,(0),null);
var cb__25019__auto___25439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25348_25437,(1),null);
try{var G__25352_25440 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25415,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25439.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25439.cljs$core$IFn$_invoke$arity$1(G__25352_25440) : cb__25019__auto___25439.call(null,G__25352_25440));
}catch (e25351){if((e25351 instanceof java.lang.Exception)){
var e__25020__auto___25441 = e25351;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25438,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25441], 0));
} else {
throw e25351;

}
}

var G__25442 = cljs.core.next(seq__25339_25430__$1);
var G__25443 = null;
var G__25444 = (0);
var G__25445 = (0);
seq__25339_25416 = G__25442;
chunk__25340_25417 = G__25443;
count__25341_25418 = G__25444;
i__25342_25419 = G__25445;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25338;
}} else {
var subscription = (function (){var G__25355 = mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__25356 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__25355,G__25356) : computation_fn.call(null,G__25355,G__25356));
})();
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25446 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25446;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(reaction));

return reaction;
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_25357 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(reaction_id)], null)], null));

try{try{var subscription = (function (){var G__25374 = mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__25375 = query_vec;
var G__25376 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__25374,G__25375,G__25376) : computation_fn.call(null,G__25374,G__25375,G__25376));
})();
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25447 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25447;

} else {
}

return subscription;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__25016__auto___25448 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__25017__auto___25449 = (end__25016__auto___25448 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__25358_25450 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__25359_25451 = null;
var count__25360_25452 = (0);
var i__25361_25453 = (0);
while(true){
if((i__25361_25453 < count__25360_25452)){
var vec__25362_25454 = chunk__25359_25451.cljs$core$IIndexed$_nth$arity$2(null,i__25361_25453);
var k__25018__auto___25455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25362_25454,(0),null);
var cb__25019__auto___25456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25362_25454,(1),null);
try{var G__25366_25457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25449,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25456.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25456.cljs$core$IFn$_invoke$arity$1(G__25366_25457) : cb__25019__auto___25456.call(null,G__25366_25457));
}catch (e25365){if((e25365 instanceof java.lang.Exception)){
var e__25020__auto___25459 = e25365;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25455,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25459], 0));
} else {
throw e25365;

}
}

var G__25460 = seq__25358_25450;
var G__25461 = chunk__25359_25451;
var G__25462 = count__25360_25452;
var G__25463 = (i__25361_25453 + (1));
seq__25358_25450 = G__25460;
chunk__25359_25451 = G__25461;
count__25360_25452 = G__25462;
i__25361_25453 = G__25463;
continue;
} else {
var temp__5457__auto___25464 = cljs.core.seq(seq__25358_25450);
if(temp__5457__auto___25464){
var seq__25358_25465__$1 = temp__5457__auto___25464;
if(cljs.core.chunked_seq_QMARK_(seq__25358_25465__$1)){
var c__4319__auto___25468 = cljs.core.chunk_first(seq__25358_25465__$1);
var G__25473 = cljs.core.chunk_rest(seq__25358_25465__$1);
var G__25474 = c__4319__auto___25468;
var G__25475 = cljs.core.count(c__4319__auto___25468);
var G__25476 = (0);
seq__25358_25450 = G__25473;
chunk__25359_25451 = G__25474;
count__25360_25452 = G__25475;
i__25361_25453 = G__25476;
continue;
} else {
var vec__25368_25477 = cljs.core.first(seq__25358_25465__$1);
var k__25018__auto___25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25368_25477,(0),null);
var cb__25019__auto___25479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25368_25477,(1),null);
try{var G__25373_25483 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25017__auto___25449,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__25019__auto___25479.cljs$core$IFn$_invoke$arity$1 ? cb__25019__auto___25479.cljs$core$IFn$_invoke$arity$1(G__25373_25483) : cb__25019__auto___25479.call(null,G__25373_25483));
}catch (e25371){if((e25371 instanceof java.lang.Exception)){
var e__25020__auto___25485 = e25371;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__25018__auto___25478,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__25020__auto___25485], 0));
} else {
throw e25371;

}
}

var G__25487 = cljs.core.next(seq__25358_25465__$1);
var G__25488 = null;
var G__25489 = (0);
var G__25490 = (0);
seq__25358_25450 = G__25487;
chunk__25359_25451 = G__25488;
count__25360_25452 = G__25489;
i__25361_25453 = G__25490;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25357;
}} else {
var subscription = (function (){var G__25385 = mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__25386 = query_vec;
var G__25387 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__25385,G__25386,G__25387) : computation_fn.call(null,G__25385,G__25386,G__25387));
})();
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__25021__auto___25502 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__25021__auto___25502;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(reaction));

return reaction;
});
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2;
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3;
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq25332){
var G__25333 = cljs.core.first(seq25332);
var seq25332__$1 = cljs.core.next(seq25332);
return mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__25333,seq25332__$1);
});


//# sourceMappingURL=mranderson047.re_frame.v0v10v2.re_frame.subs.js.map
