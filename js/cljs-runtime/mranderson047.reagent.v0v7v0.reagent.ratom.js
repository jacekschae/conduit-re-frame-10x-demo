goog.provide('mranderson047.reagent.v0v7v0.reagent.ratom');
goog.require('cljs.core');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.batching');
goog.require('clojure.set');
if(typeof mranderson047.reagent.v0v7v0.reagent.ratom.debug !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.debug = false;
}
if(typeof mranderson047.reagent.v0v7v0.reagent.ratom.generation !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.generation = (0);
}
if(typeof mranderson047.reagent.v0v7v0.reagent.ratom._running !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
mranderson047.reagent.v0v7v0.reagent.ratom.reactive_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$reactive_QMARK_(){
return !((mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null));
});
mranderson047.reagent.v0v7v0.reagent.ratom.running = (function mranderson047$reagent$v0v7v0$reagent$ratom$running(){
return cljs.core.deref(mranderson047.reagent.v0v7v0.reagent.ratom._running);
});
mranderson047.reagent.v0v7v0.reagent.ratom.arr_len = (function mranderson047$reagent$v0v7v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
mranderson047.reagent.v0v7v0.reagent.ratom.arr_eq = (function mranderson047$reagent$v0v7v0$reagent$ratom$arr_eq(x,y){
var len = mranderson047.reagent.v0v7v0.reagent.ratom.arr_len(x);
var and__3911__auto__ = (len === mranderson047.reagent.v0v7v0.reagent.ratom.arr_len(y));
if(and__3911__auto__){
var i = (0);
while(true){
var or__3922__auto__ = (i === len);
if(or__3922__auto__){
return or__3922__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__24368 = (i + (1));
i = G__24368;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__3911__auto__;
}
});
mranderson047.reagent.v0v7v0.reagent.ratom.in_context = (function mranderson047$reagent$v0v7v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR_24369 = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_24369;
}});
mranderson047.reagent.v0v7v0.reagent.ratom.deref_capture = (function mranderson047$reagent$v0v7v0$reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = mranderson047.reagent.v0v7v0.reagent.ratom.generation = (mranderson047.reagent.v0v7v0.reagent.ratom.generation + (1));


var res = mranderson047.reagent.v0v7v0.reagent.ratom.in_context(r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(mranderson047.reagent.v0v7v0.reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
mranderson047.reagent.v0v7v0.reagent.ratom.notify_deref_watcher_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5461__auto__ = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5461__auto__ == null)){
return null;
} else {
var r = temp__5461__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
mranderson047.reagent.v0v7v0.reagent.ratom.check_watches = (function mranderson047$reagent$v0v7v0$reagent$ratom$check_watches(old,new$){
if(mranderson047.reagent.v0v7v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson047.reagent.v0v7v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
mranderson047.reagent.v0v7v0.reagent.ratom.add_w = (function mranderson047$reagent$v0v7v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = mranderson047.reagent.v0v7v0.reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f));

return this$.watchesArr = null;
});
mranderson047.reagent.v0v7v0.reagent.ratom.remove_w = (function mranderson047$reagent$v0v7v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = mranderson047.reagent.v0v7v0.reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key));

return this$.watchesArr = null;
});
mranderson047.reagent.v0v7v0.reagent.ratom.notify_w = (function mranderson047$reagent$v0v7v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv(((function (w){
return (function (p1__24370_SHARP_,p2__24371_SHARP_,p3__24372_SHARP_){
var G__24373 = p1__24370_SHARP_;
G__24373.push(p2__24371_SHARP_);

G__24373.push(p3__24372_SHARP_);

return G__24373;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_24374 = (a[i]);
var f_24375 = (a[(i + (1))]);
(f_24375.cljs$core$IFn$_invoke$arity$4 ? f_24375.cljs$core$IFn$_invoke$arity$4(k_24374,this$,old,new$) : f_24375.call(null,k_24374,this$,old,new$));

var G__24376 = ((2) + i);
i = G__24376;
continue;
} else {
return null;
}
break;
}
});
mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom = (function mranderson047$reagent$v0v7v0$reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write(writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR_24377 = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(a);
}finally {mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_24377;
}})(),writer,opts);

return cljs.core._write(writer,">");
});
if(typeof mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue = null;
}
mranderson047.reagent.v0v7v0.reagent.ratom.rea_enqueue = (function mranderson047$reagent$v0v7v0$reagent$ratom$rea_enqueue(r){
if((mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue == null)){
mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue = [];

mranderson047.reagent.v0v7v0.reagent.impl.batching.schedule();
} else {
}

return mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue.push(r);
});
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$flush_BANG_(){
while(true){
var q = mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.rea_queue = null;

var n__4376__auto___24378 = q.length;
var i_24379 = (0);
while(true){
if((i_24379 < n__4376__auto___24378)){
(q[i_24379])._queued_run();

var G__24380 = (i_24379 + (1));
i_24379 = G__24380;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.ratom_flush = mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_;

/**
 * @interface
 */
mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
*/
mranderson047.reagent.v0v7v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom(a__$1,w,opts,"Atom:");
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.add_w(this$__$1,key,f);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.remove_w(this$__$1,key);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson047.reagent.v0v7v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.ratom/RAtom";

mranderson047.reagent.v0v7v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.reagent.v0v7v0.reagent.ratom/RAtom");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.ratom/RAtom.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.__GT_RAtom = (function mranderson047$reagent$v0v7v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.atom = (function mranderson047$reagent$v0v7v0$reagent$ratom$atom(var_args){
var G__24384 = arguments.length;
switch (G__24384) {
case 1:
return mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___24389 = arguments.length;
var i__4498__auto___24390 = (0);
while(true){
if((i__4498__auto___24390 < len__4497__auto___24389)){
args_arr__4512__auto__.push((arguments[i__4498__auto___24390]));

var G__24391 = (i__4498__auto___24390 + (1));
i__4498__auto___24390 = G__24391;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((1)),(0),null));
return mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4513__auto__);

}
});

mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return mranderson047.reagent.v0v7v0.reagent.ratom.__GT_RAtom(x,null,null,null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__24385){
var map__24386 = p__24385;
var map__24386__$1 = ((((!((map__24386 == null)))?(((((map__24386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24386):map__24386);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24386__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24386__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return mranderson047.reagent.v0v7v0.reagent.ratom.__GT_RAtom(x,meta,validator,null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq24382){
var G__24383 = cljs.core.first(seq24382);
var seq24382__$1 = cljs.core.next(seq24382);
return mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__24383,seq24382__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

mranderson047.reagent.v0v7v0.reagent.ratom.cache_key = "reagReactionCache";
mranderson047.reagent.v0v7v0.reagent.ratom.cached_reaction = (function mranderson047$reagent$v0v7v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if(!((r == null))){
return cljs.core._deref(r);
} else {
if((mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__24392 = f;
var G__24393 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__24394 = ((function (G__24392,G__24393,m,m__$1,r){
return (function (x){
if(mranderson047.reagent.v0v7v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson047.reagent.v0v7v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __24395 = (o["reagReactionCache"]);
var __24396__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__24395,k);
(o["reagReactionCache"] = __24396__$1);

if(!((obj == null))){
obj.reaction = null;
} else {
}

if(!((destroy == null))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});})(G__24392,G__24393,m,m__$1,r))
;
return (mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__24392,G__24393,G__24394) : mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.call(null,G__24392,G__24393,G__24394));
})();
var v = cljs.core._deref(r__$1);
(o["reagReactionCache"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(mranderson047.reagent.v0v7v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson047.reagent.v0v7v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if(!((obj == null))){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
*/
mranderson047.reagent.v0v7v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
mranderson047.reagent.v0v7v0.reagent.ratom.Track.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
return mranderson047.reagent.v0v7v0.reagent.ratom.cached_reaction(((function (temp__5459__auto__,this$__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
});})(temp__5459__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref(r);
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson047.reagent.v0v7v0.reagent.ratom.Track)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom(a__$1,w,opts,"Track:");
});

mranderson047.reagent.v0v7v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Track.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.ratom.Track.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.ratom/Track";

mranderson047.reagent.v0v7v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.reagent.v0v7v0.reagent.ratom/Track");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.ratom/Track.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.__GT_Track = (function mranderson047$reagent$v0v7v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.Track(f,args,reaction));
});

mranderson047.reagent.v0v7v0.reagent.ratom.make_track = (function mranderson047$reagent$v0v7v0$reagent$ratom$make_track(f,args){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.Track(f,args,null));
});
mranderson047.reagent.v0v7v0.reagent.ratom.make_track_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$make_track_BANG_(f,args){
var t = mranderson047.reagent.v0v7v0.reagent.ratom.make_track(f,args);
var r = (function (){var G__24397 = ((function (t){
return (function (){
return cljs.core._deref(t);
});})(t))
;
var G__24398 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__24399 = true;
return (mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__24397,G__24398,G__24399) : mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.call(null,G__24397,G__24398,G__24399));
})();
cljs.core.deref(r);

return r;
});
mranderson047.reagent.v0v7v0.reagent.ratom.track = (function mranderson047$reagent$v0v7v0$reagent$ratom$track(var_args){
var args__4500__auto__ = [];
var len__4497__auto___24402 = arguments.length;
var i__4498__auto___24403 = (0);
while(true){
if((i__4498__auto___24403 < len__4497__auto___24402)){
args__4500__auto__.push((arguments[i__4498__auto___24403]));

var G__24404 = (i__4498__auto___24403 + (1));
i__4498__auto___24403 = G__24404;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

mranderson047.reagent.v0v7v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson047.reagent.v0v7v0.reagent.ratom.make_track(f,args);
});

mranderson047.reagent.v0v7v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1);

mranderson047.reagent.v0v7v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq24400){
var G__24401 = cljs.core.first(seq24400);
var seq24400__$1 = cljs.core.next(seq24400);
return mranderson047.reagent.v0v7v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic(G__24401,seq24400__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.track_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$track_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___24407 = arguments.length;
var i__4498__auto___24408 = (0);
while(true){
if((i__4498__auto___24408 < len__4497__auto___24407)){
args__4500__auto__.push((arguments[i__4498__auto___24408]));

var G__24409 = (i__4498__auto___24408 + (1));
i__4498__auto___24408 = G__24409;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

mranderson047.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson047.reagent.v0v7v0.reagent.ratom.make_track_BANG_(f,args);
});

mranderson047.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

mranderson047.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq24405){
var G__24406 = cljs.core.first(seq24405);
var seq24405__$1 = cljs.core.next(seq24405);
return mranderson047.reagent.v0v7v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24406,seq24405__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
*/
mranderson047.reagent.v0v7v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_24410 = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$);
}finally {mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_24410;
}});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if(!((self__.watches == null))){
return mranderson047.reagent.v0v7v0.reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom(a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson047.reagent.v0v7v0.reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if(((!((self__.ratom == null)))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24412 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24412) : f.call(null,G__24412));
})());
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24413 = a__$1._peek();
var G__24414 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24413,G__24414) : f.call(null,G__24413,G__24414));
})());
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24415 = a__$1._peek();
var G__24416 = x;
var G__24417 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24415,G__24416,G__24417) : f.call(null,G__24415,G__24416,G__24417));
})());
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.add_w(this$__$1,key,f);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.remove_w(this$__$1,key);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
var f = ((((!((self__.ratom == null)))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
});})(temp__5459__auto__,oldstate,this$__$1))
:((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
});})(temp__5459__auto__,oldstate,this$__$1))
);
return mranderson047.reagent.v0v7v0.reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.ratom/RCursor";

mranderson047.reagent.v0v7v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.reagent.v0v7v0.reagent.ratom/RCursor");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.ratom/RCursor.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.__GT_RCursor = (function mranderson047$reagent$v0v7v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

mranderson047.reagent.v0v7v0.reagent.ratom.cursor = (function mranderson047$reagent$v0v7v0$reagent$ratom$cursor(src,path){
if((function (){var or__3922__auto__ = ((!((src == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom,src));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && (!(cljs.core.vector_QMARK_(src))));
}
})()){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["src must be a reactive atom or a function, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)))].join('')),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return mranderson047.reagent.v0v7v0.reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
mranderson047.reagent.v0v7v0.reagent.ratom.with_let_destroy = (function mranderson047$reagent$v0v7v0$reagent$ratom$with_let_destroy(v){
var temp__5461__auto__ = v.destroy;
if((temp__5461__auto__ == null)){
return null;
} else {
var f = temp__5461__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
mranderson047.reagent.v0v7v0.reagent.ratom.with_let_values = (function mranderson047$reagent$v0v7v0$reagent$ratom$with_let_values(key){
var temp__5459__auto__ = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5459__auto__ == null)){
return [];
} else {
var c = temp__5459__auto__;
return mranderson047.reagent.v0v7v0.reagent.ratom.cached_reaction(cljs.core.array,c,key,null,mranderson047.reagent.v0v7v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
mranderson047.reagent.v0v7v0.reagent.ratom.IDisposable = function(){};

mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$dispose_BANG_(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null))))){
return this$.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.add_on_dispose_BANG_ = (function mranderson047$reagent$v0v7v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if(((!((this$ == null))) && (!((this$.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null))))){
return this$.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.reagent.v0v7v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4212__auto__.call(null,this$,f));
} else {
var m__4212__auto____$1 = (mranderson047.reagent.v0v7v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4212__auto____$1.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
mranderson047.reagent.v0v7v0.reagent.ratom.IRunnable = function(){};

mranderson047.reagent.v0v7v0.reagent.ratom.run = (function mranderson047$reagent$v0v7v0$reagent$ratom$run(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$reagent$v0v7v0$reagent$ratom$IRunnable$run$arity$1 == null))))){
return this$.mranderson047$reagent$v0v7v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.reagent.v0v7v0.reagent.ratom.run[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (mranderson047.reagent.v0v7v0.reagent.ratom.run["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.handle_reaction_change = (function mranderson047$reagent$v0v7v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IDisposable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom}
 * @implements {mranderson047.reagent.v0v7v0.reagent.ratom.IRunnable}
*/
mranderson047.reagent.v0v7v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_24421 = mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$);
}finally {mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_24421;
}});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return mranderson047.reagent.v0v7v0.reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
self__.watching = derefed;

var seq__24422_24445 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__24423_24446 = null;
var count__24424_24447 = (0);
var i__24425_24448 = (0);
while(true){
if((i__24425_24448 < count__24424_24447)){
var w_24449 = chunk__24423_24446.cljs$core$IIndexed$_nth$arity$2(null,i__24425_24448);
cljs.core._add_watch(w_24449,this$,mranderson047.reagent.v0v7v0.reagent.ratom.handle_reaction_change);


var G__24450 = seq__24422_24445;
var G__24451 = chunk__24423_24446;
var G__24452 = count__24424_24447;
var G__24453 = (i__24425_24448 + (1));
seq__24422_24445 = G__24450;
chunk__24423_24446 = G__24451;
count__24424_24447 = G__24452;
i__24425_24448 = G__24453;
continue;
} else {
var temp__5457__auto___24454 = cljs.core.seq(seq__24422_24445);
if(temp__5457__auto___24454){
var seq__24422_24455__$1 = temp__5457__auto___24454;
if(cljs.core.chunked_seq_QMARK_(seq__24422_24455__$1)){
var c__4319__auto___24456 = cljs.core.chunk_first(seq__24422_24455__$1);
var G__24457 = cljs.core.chunk_rest(seq__24422_24455__$1);
var G__24458 = c__4319__auto___24456;
var G__24459 = cljs.core.count(c__4319__auto___24456);
var G__24460 = (0);
seq__24422_24445 = G__24457;
chunk__24423_24446 = G__24458;
count__24424_24447 = G__24459;
i__24425_24448 = G__24460;
continue;
} else {
var w_24461 = cljs.core.first(seq__24422_24455__$1);
cljs.core._add_watch(w_24461,this$,mranderson047.reagent.v0v7v0.reagent.ratom.handle_reaction_change);


var G__24462 = cljs.core.next(seq__24422_24455__$1);
var G__24463 = null;
var G__24464 = (0);
var G__24465 = (0);
seq__24422_24445 = G__24462;
chunk__24423_24446 = G__24463;
count__24424_24447 = G__24464;
i__24425_24448 = G__24465;
continue;
}
} else {
}
}
break;
}

var seq__24426 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__24427 = null;
var count__24428 = (0);
var i__24429 = (0);
while(true){
if((i__24429 < count__24428)){
var w = chunk__24427.cljs$core$IIndexed$_nth$arity$2(null,i__24429);
cljs.core._remove_watch(w,this$);


var G__24466 = seq__24426;
var G__24467 = chunk__24427;
var G__24468 = count__24428;
var G__24469 = (i__24429 + (1));
seq__24426 = G__24466;
chunk__24427 = G__24467;
count__24428 = G__24468;
i__24429 = G__24469;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__24426);
if(temp__5457__auto__){
var seq__24426__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24426__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__24426__$1);
var G__24470 = cljs.core.chunk_rest(seq__24426__$1);
var G__24471 = c__4319__auto__;
var G__24472 = cljs.core.count(c__4319__auto__);
var G__24473 = (0);
seq__24426 = G__24470;
chunk__24427 = G__24471;
count__24428 = G__24472;
i__24429 = G__24473;
continue;
} else {
var w = cljs.core.first(seq__24426__$1);
cljs.core._remove_watch(w,this$);


var G__24474 = cljs.core.next(seq__24426__$1);
var G__24475 = null;
var G__24476 = (0);
var G__24477 = (0);
seq__24426 = G__24474;
chunk__24427 = G__24475;
count__24428 = G__24476;
i__24429 = G__24477;
continue;
}
} else {
return null;
}
}
break;
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && (!((self__.watching == null))))){
return this$._run(true);
} else {
return null;
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return mranderson047.reagent.v0v7v0.reagent.ratom.deref_capture(f__$1,this$);
}catch (e24430){var e = e24430;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):mranderson047.reagent.v0v7v0.reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__24431){
var self__ = this;
var map__24432 = p__24431;
var map__24432__$1 = ((((!((map__24432 == null)))?(((((map__24432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24432):map__24432);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24432__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24432__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24432__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24432__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if(!((auto_run__$1 == null))){
this$.auto_run = auto_run__$1;
} else {
}

if(!((on_set == null))){
this$.on_set = on_set;
} else {
}

if(!((on_dispose == null))){
this$.on_dispose = on_dispose;
} else {
}

if(!((no_cache == null))){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom(a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(a__$1)),":"].join(''));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__24434_24478 = cljs.core.seq(cljs.core.set(wg));
var chunk__24435_24479 = null;
var count__24436_24480 = (0);
var i__24437_24481 = (0);
while(true){
if((i__24437_24481 < count__24436_24480)){
var w_24482 = chunk__24435_24479.cljs$core$IIndexed$_nth$arity$2(null,i__24437_24481);
cljs.core._remove_watch(w_24482,this$__$1);


var G__24483 = seq__24434_24478;
var G__24484 = chunk__24435_24479;
var G__24485 = count__24436_24480;
var G__24486 = (i__24437_24481 + (1));
seq__24434_24478 = G__24483;
chunk__24435_24479 = G__24484;
count__24436_24480 = G__24485;
i__24437_24481 = G__24486;
continue;
} else {
var temp__5457__auto___24487 = cljs.core.seq(seq__24434_24478);
if(temp__5457__auto___24487){
var seq__24434_24488__$1 = temp__5457__auto___24487;
if(cljs.core.chunked_seq_QMARK_(seq__24434_24488__$1)){
var c__4319__auto___24489 = cljs.core.chunk_first(seq__24434_24488__$1);
var G__24490 = cljs.core.chunk_rest(seq__24434_24488__$1);
var G__24491 = c__4319__auto___24489;
var G__24492 = cljs.core.count(c__4319__auto___24489);
var G__24493 = (0);
seq__24434_24478 = G__24490;
chunk__24435_24479 = G__24491;
count__24436_24480 = G__24492;
i__24437_24481 = G__24493;
continue;
} else {
var w_24494 = cljs.core.first(seq__24434_24488__$1);
cljs.core._remove_watch(w_24494,this$__$1);


var G__24495 = cljs.core.next(seq__24434_24488__$1);
var G__24496 = null;
var G__24497 = (0);
var G__24498 = (0);
seq__24434_24478 = G__24495;
chunk__24435_24479 = G__24496;
count__24436_24480 = G__24497;
i__24437_24481 = G__24498;
continue;
}
} else {
}
}
break;
}

if(!((this$__$1.on_dispose == null))){
this$__$1.on_dispose(s);
} else {
}

var temp__5461__auto__ = this$__$1.on_dispose_arr;
if((temp__5461__auto__ == null)){
return null;
} else {
var a = temp__5461__auto__;
var n__4376__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4376__auto__)){
var fexpr__24438_24499 = (a[i]);
(fexpr__24438_24499.cljs$core$IFn$_invoke$arity$1 ? fexpr__24438_24499.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__24438_24499.call(null,this$__$1));

var G__24500 = (i + (1));
i = G__24500;
continue;
} else {
return null;
}
break;
}
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = this$__$1.on_dispose_arr;
if((temp__5459__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__5459__auto__;
return a.push(f__$1);
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

mranderson047.reagent.v0v7v0.reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24439 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__24439) : f__$1.call(null,G__24439));
})());
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24440 = a__$1._peek_at();
var G__24441 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__24440,G__24441) : f__$1.call(null,G__24440,G__24441));
})());
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24442 = a__$1._peek_at();
var G__24443 = x;
var G__24444 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__24442,G__24443,G__24444) : f__$1.call(null,G__24442,G__24443,G__24444));
})());
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v7v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_();

return this$__$1._run(false);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.add_w(this$__$1,key,f__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
mranderson047.reagent.v0v7v0.reagent.ratom.remove_w(this$__$1,key);

if(((!(was_empty)) && (cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))){
return mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5461__auto___24501 = self__.caught;
if((temp__5461__auto___24501 == null)){
} else {
var e_24502 = temp__5461__auto___24501;
throw e_24502;
}

var non_reactive_24503 = (mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_24503){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_();
} else {
}

if(((non_reactive_24503) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_24504 = self__.state;
self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_24504,self__.state)))){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.notify_w(this$__$1,oldstate_24504,self__.state);
}
} else {
}
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.ratom/Reaction";

mranderson047.reagent.v0v7v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.reagent.v0v7v0.reagent.ratom/Reaction");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.ratom/Reaction.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.__GT_Reaction = (function mranderson047$reagent$v0v7v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction = (function mranderson047$reagent$v0v7v0$reagent$ratom$make_reaction(var_args){
var args__4500__auto__ = [];
var len__4497__auto___24510 = arguments.length;
var i__4498__auto___24511 = (0);
while(true){
if((i__4498__auto___24511 < len__4497__auto___24510)){
args__4500__auto__.push((arguments[i__4498__auto___24511]));

var G__24512 = (i__4498__auto___24511 + (1));
i__4498__auto___24511 = G__24512;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__24507){
var map__24508 = p__24507;
var map__24508__$1 = ((((!((map__24508 == null)))?(((((map__24508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24508):map__24508);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24508__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24508__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24508__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = mranderson047.reagent.v0v7v0.reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
});

mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq24505){
var G__24506 = cljs.core.first(seq24505);
var seq24505__$1 = cljs.core.next(seq24505);
return mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__24506,seq24505__$1);
});

mranderson047.reagent.v0v7v0.reagent.ratom.temp_reaction = mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction(null);
mranderson047.reagent.v0v7v0.reagent.ratom.run_in_reaction = (function mranderson047$reagent$v0v7v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = mranderson047.reagent.v0v7v0.reagent.ratom.temp_reaction;
var res = mranderson047.reagent.v0v7v0.reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.temp_reaction = mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction(null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
});})(r,res))
;

(obj[key] = r);
}

return res;
});
mranderson047.reagent.v0v7v0.reagent.ratom.check_derefs = (function mranderson047$reagent$v0v7v0$reagent$ratom$check_derefs(f){
var ctx = {};
var res = mranderson047.reagent.v0v7v0.reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,!((ctx.captured == null))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && (!((mranderson047.reagent.v0v7v0.reagent.ratom._STAR_ratom_context_STAR_ == null))))){
if(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.tracking)?mranderson047.reagent.v0v7v0.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0)))].join(''));
} else {
}
} else {
}


return self__.state;
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if(!((self__.watches == null))){
mranderson047.reagent.v0v7v0.reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper)) && (!(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)));
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.add_w(this$__$1,key,f);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.remove_w(this$__$1,key);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v7v0.reagent.ratom.pr_atom(a__$1,w,opts,"Wrap:");
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.ratom/Wrapper";

mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.reagent.v0v7v0.reagent.ratom/Wrapper");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.ratom/Wrapper.
 */
mranderson047.reagent.v0v7v0.reagent.ratom.__GT_Wrapper = (function mranderson047$reagent$v0v7v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new mranderson047.reagent.v0v7v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

mranderson047.reagent.v0v7v0.reagent.ratom.make_wrapper = (function mranderson047$reagent$v0v7v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return mranderson047.reagent.v0v7v0.reagent.ratom.__GT_Wrapper(value,mranderson047.reagent.v0v7v0.reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});

//# sourceMappingURL=mranderson047.reagent.v0v7v0.reagent.ratom.js.map
