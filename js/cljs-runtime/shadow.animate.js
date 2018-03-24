goog.provide('shadow.animate');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.dom.vendor');
goog.require('goog.style');
goog.require('shadow.util');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_from$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_from["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_to$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_to["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_toggles["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
}
});

/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_timings["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
}
});

/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_delays["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (timings,delays){
return (function (p__31727){
var vec__31728 = p__31727;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31728,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31728,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__3911__auto__ = delay;
if(cljs.core.truth_(and__3911__auto__)){
return (delay > (0));
} else {
return and__3911__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})())].join('');
});})(timings,delays))
,timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.get_duration["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
}
});

/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.init_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
}
});

/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.start_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
}
});

/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.finish_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__28785__auto__ = (0);
while(true){
if((i__28785__auto__ < n__4376__auto__)){
var map__31755_31769 = (self__.items[i__28785__auto__]);
var map__31755_31770__$1 = ((((!((map__31755_31769 == null)))?(((((map__31755_31769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31755_31769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31755_31769):map__31755_31769);
var el_31771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31755_31770__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_31772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31755_31770__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_31771,from_31772);

var G__31776 = (i__28785__auto__ + (1));
i__28785__auto__ = G__31776;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__28785__auto__ = (0);
while(true){
if((i__28785__auto__ < n__4376__auto__)){
var map__31758_31777 = (self__.items[i__28785__auto__]);
var map__31758_31778__$1 = ((((!((map__31758_31777 == null)))?(((((map__31758_31777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31758_31777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31758_31777):map__31758_31777);
var el_31779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31758_31778__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_31780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31758_31778__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_31781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31758_31778__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_31780["transition"] = transition_31781);

goog.style.setStyle(el_31779,to_31780);

var G__31782 = (i__28785__auto__ + (1));
i__28785__auto__ = G__31782;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__28785__auto__ = (0);
while(true){
if((i__28785__auto__ < n__4376__auto__)){
var map__31762_31783 = (self__.items[i__28785__auto__]);
var map__31762_31784__$1 = ((((!((map__31762_31783 == null)))?(((((map__31762_31783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31762_31783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31762_31783):map__31762_31783);
var el_31785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31762_31784__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_31786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31762_31784__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_31786["transition"] = null);

goog.style.setStyle(el_31785,toggles_31786);

var G__31789 = (i__28785__auto__ + (1));
i__28785__auto__ = G__31789;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

shadow.animate.Animator.cljs$lang$type = true;

shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator";

shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/Animator");
});

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10592__auto__,k__10593__auto__){
var self__ = this;
var this__10592__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10592__auto____$1,k__10593__auto__,null);
});

shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10594__auto__,k31791,else__10595__auto__){
var self__ = this;
var this__10594__auto____$1 = this;
var G__31796 = k31791;
var G__31796__$1 = (((G__31796 instanceof cljs.core.Keyword))?G__31796.fqn:null);
switch (G__31796__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31791,else__10595__auto__);

}
});

shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10606__auto__,writer__10607__auto__,opts__10608__auto__){
var self__ = this;
var this__10606__auto____$1 = this;
var pr_pair__10609__auto__ = ((function (this__10606__auto____$1){
return (function (keyval__10610__auto__){
return cljs.core.pr_sequential_writer(writer__10607__auto__,cljs.core.pr_writer,""," ","",opts__10608__auto__,keyval__10610__auto__);
});})(this__10606__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10607__auto__,pr_pair__10609__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__10608__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31790){
var self__ = this;
var G__31790__$1 = this;
return (new cljs.core.RecordIter((0),G__31790__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10590__auto__){
var self__ = this;
var this__10590__auto____$1 = this;
return self__.__meta;
});

shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10587__auto__){
var self__ = this;
var this__10587__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10596__auto__){
var self__ = this;
var this__10596__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10588__auto__){
var self__ = this;
var this__10588__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__31797 = ((function (h__4030__auto__,this__10588__auto____$1){
return (function (coll__10589__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__10589__auto__));
});})(h__4030__auto__,this__10588__auto____$1))
;
return fexpr__31797(this__10588__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31792,other31793){
var self__ = this;
var this31792__$1 = this;
return ((!((other31793 == null))) && ((this31792__$1.constructor === other31793.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31792__$1.el,other31793.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31792__$1.from,other31793.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31792__$1.to,other31793.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31792__$1.toggles,other31793.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31792__$1.transition,other31793.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31792__$1.__extmap,other31793.__extmap)));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10601__auto__,k__10602__auto__){
var self__ = this;
var this__10601__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__10602__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10601__auto____$1),self__.__meta),k__10602__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10602__auto__)),null));
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10599__auto__,k__10600__auto__,G__31790){
var self__ = this;
var this__10599__auto____$1 = this;
var pred__31799 = cljs.core.keyword_identical_QMARK_;
var expr__31800 = k__10600__auto__;
if(cljs.core.truth_((function (){var G__31802 = new cljs.core.Keyword(null,"el","el",-1618201118);
var G__31803 = expr__31800;
return (pred__31799.cljs$core$IFn$_invoke$arity$2 ? pred__31799.cljs$core$IFn$_invoke$arity$2(G__31802,G__31803) : pred__31799.call(null,G__31802,G__31803));
})())){
return (new shadow.animate.AnimationStep(G__31790,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31804 = new cljs.core.Keyword(null,"from","from",1815293044);
var G__31805 = expr__31800;
return (pred__31799.cljs$core$IFn$_invoke$arity$2 ? pred__31799.cljs$core$IFn$_invoke$arity$2(G__31804,G__31805) : pred__31799.call(null,G__31804,G__31805));
})())){
return (new shadow.animate.AnimationStep(self__.el,G__31790,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31806 = new cljs.core.Keyword(null,"to","to",192099007);
var G__31807 = expr__31800;
return (pred__31799.cljs$core$IFn$_invoke$arity$2 ? pred__31799.cljs$core$IFn$_invoke$arity$2(G__31806,G__31807) : pred__31799.call(null,G__31806,G__31807));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__31790,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31808 = new cljs.core.Keyword(null,"toggles","toggles",1077909479);
var G__31809 = expr__31800;
return (pred__31799.cljs$core$IFn$_invoke$arity$2 ? pred__31799.cljs$core$IFn$_invoke$arity$2(G__31808,G__31809) : pred__31799.call(null,G__31808,G__31809));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__31790,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31810 = new cljs.core.Keyword(null,"transition","transition",765692007);
var G__31811 = expr__31800;
return (pred__31799.cljs$core$IFn$_invoke$arity$2 ? pred__31799.cljs$core$IFn$_invoke$arity$2(G__31810,G__31811) : pred__31799.call(null,G__31810,G__31811));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__31790,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10600__auto__,G__31790),null));
}
}
}
}
}
});

shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10604__auto__){
var self__ = this;
var this__10604__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10591__auto__,G__31790){
var self__ = this;
var this__10591__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__31790,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10597__auto__,entry__10598__auto__){
var self__ = this;
var this__10597__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10598__auto__)){
return cljs.core._assoc(this__10597__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10597__auto____$1,entry__10598__auto__);
}
});

shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
});

shadow.animate.AnimationStep.cljs$lang$type = true;

shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
});

shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.animate/AnimationStep");
});

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__31795){
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__31795),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__31795),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__31795),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__31795),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__31795),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31795,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0))),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function shadow$animate$setup_$_iter__31869(s__31870){
return (new cljs.core.LazySeq(null,(function (){
var s__31870__$1 = s__31870;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__31870__$1);
if(temp__5457__auto__){
var s__31870__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31870__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__31870__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__31872 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__31871 = (0);
while(true){
if((i__31871 < size__4291__auto__)){
var vec__31873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__31871);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31873,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31873,(1),null);
cljs.core.chunk_append(b__31872,(function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__31881 = (i__31871 + (1));
i__31871 = G__31881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31872),shadow$animate$setup_$_iter__31869(cljs.core.chunk_rest(s__31870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31872),null);
}
} else {
var vec__31877 = cljs.core.first(s__31870__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31877,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31877,(1),null);
return cljs.core.cons((function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__31869(cljs.core.rest(s__31870__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__25472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto__){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto__){
return (function (state_31888){
var state_val_31889 = (state_31888[(1)]);
if((state_val_31889 === (1))){
var inst_31882 = shadow.animate.get_duration(animator);
var inst_31883 = cljs.core.async.timeout(inst_31882);
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31888__$1,(2),inst_31883);
} else {
if((state_val_31889 === (2))){
var inst_31885 = (state_31888[(2)]);
var inst_31886 = shadow.animate.finish_BANG_(animator);
var state_31888__$1 = (function (){var statearr_31890 = state_31888;
(statearr_31890[(7)] = inst_31886);

(statearr_31890[(8)] = inst_31885);

return statearr_31890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31888__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});})(c__25472__auto__))
;
return ((function (switch__25250__auto__,c__25472__auto__){
return (function() {
var shadow$animate$continue_BANG__$_state_machine__25251__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__25251__auto____0 = (function (){
var statearr_31891 = [null,null,null,null,null,null,null,null,null];
(statearr_31891[(0)] = shadow$animate$continue_BANG__$_state_machine__25251__auto__);

(statearr_31891[(1)] = (1));

return statearr_31891;
});
var shadow$animate$continue_BANG__$_state_machine__25251__auto____1 = (function (state_31888){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_31888);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e31892){if((e31892 instanceof Object)){
var ex__25254__auto__ = e31892;
var statearr_31893_31895 = state_31888;
(statearr_31893_31895[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31892;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31896 = state_31888;
state_31888 = G__31896;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__25251__auto__ = function(state_31888){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__25251__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__25251__auto____1.call(this,state_31888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$animate$continue_BANG__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__25251__auto____0;
shadow$animate$continue_BANG__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__25251__auto____1;
return shadow$animate$continue_BANG__$_state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto__))
})();
var state__25474__auto__ = (function (){var statearr_31894 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_31894[(6)] = c__25472__auto__);

return statearr_31894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto__))
);

return c__25472__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
shadow.animate.init_BANG_(animator);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__31898 = arguments.length;
switch (G__31898) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate31899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31899 = (function (attr,from,to,timing,delay,meta31900){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta31900 = meta31900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31901,meta31900__$1){
var self__ = this;
var _31901__$1 = this;
return (new shadow.animate.t_shadow$animate31899(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta31900__$1));
});

shadow.animate.t_shadow$animate31899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31901){
var self__ = this;
var _31901__$1 = this;
return self__.meta31900;
});

shadow.animate.t_shadow$animate31899.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31899.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate31899.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate31899.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31899.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
});

shadow.animate.t_shadow$animate31899.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
});

shadow.animate.t_shadow$animate31899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta31900","meta31900",720830989,null)], null);
});

shadow.animate.t_shadow$animate31899.cljs$lang$type = true;

shadow.animate.t_shadow$animate31899.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31899";

shadow.animate.t_shadow$animate31899.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31899");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31899.
 */
shadow.animate.__GT_t_shadow$animate31899 = (function shadow$animate$__GT_t_shadow$animate31899(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta31900){
return (new shadow.animate.t_shadow$animate31899(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta31900));
});

}

return (new shadow.animate.t_shadow$animate31899(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.transition.cljs$lang$maxFixedArity = 5;

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if(typeof shadow.animate.t_shadow$animate31903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31903 = (function (attr,from,to,meta31904){
this.attr = attr;
this.from = from;
this.to = to;
this.meta31904 = meta31904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31905,meta31904__$1){
var self__ = this;
var _31905__$1 = this;
return (new shadow.animate.t_shadow$animate31903(self__.attr,self__.from,self__.to,meta31904__$1));
});

shadow.animate.t_shadow$animate31903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31905){
var self__ = this;
var _31905__$1 = this;
return self__.meta31904;
});

shadow.animate.t_shadow$animate31903.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31903.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31903.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate31903.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate31903.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31903.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta31904","meta31904",172654505,null)], null);
});

shadow.animate.t_shadow$animate31903.cljs$lang$type = true;

shadow.animate.t_shadow$animate31903.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31903";

shadow.animate.t_shadow$animate31903.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31903");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31903.
 */
shadow.animate.__GT_t_shadow$animate31903 = (function shadow$animate$toggle_$___GT_t_shadow$animate31903(attr__$1,from__$1,to__$1,meta31904){
return (new shadow.animate.t_shadow$animate31903(attr__$1,from__$1,to__$1,meta31904));
});

}

return (new shadow.animate.t_shadow$animate31903(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__31907 = arguments.length;
switch (G__31907) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if(typeof shadow.animate.t_shadow$animate31908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31908 = (function (attrs,meta31909){
this.attrs = attrs;
this.meta31909 = meta31909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31910,meta31909__$1){
var self__ = this;
var _31910__$1 = this;
return (new shadow.animate.t_shadow$animate31908(self__.attrs,meta31909__$1));
});

shadow.animate.t_shadow$animate31908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31910){
var self__ = this;
var _31910__$1 = this;
return self__.meta31909;
});

shadow.animate.t_shadow$animate31908.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31908.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31908.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
});

shadow.animate.t_shadow$animate31908.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31908.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31908.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31909","meta31909",-1359203051,null)], null);
});

shadow.animate.t_shadow$animate31908.cljs$lang$type = true;

shadow.animate.t_shadow$animate31908.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31908";

shadow.animate.t_shadow$animate31908.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31908");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31908.
 */
shadow.animate.__GT_t_shadow$animate31908 = (function shadow$animate$__GT_t_shadow$animate31908(attrs__$1,meta31909){
return (new shadow.animate.t_shadow$animate31908(attrs__$1,meta31909));
});

}

return (new shadow.animate.t_shadow$animate31908(attrs,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
});

shadow.animate.set_attr.cljs$lang$maxFixedArity = 2;

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if(typeof shadow.animate.t_shadow$animate31912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31912 = (function (attr,meta31913){
this.attr = attr;
this.meta31913 = meta31913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31914,meta31913__$1){
var self__ = this;
var _31914__$1 = this;
return (new shadow.animate.t_shadow$animate31912(self__.attr,meta31913__$1));
});

shadow.animate.t_shadow$animate31912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31914){
var self__ = this;
var _31914__$1 = this;
return self__.meta31913;
});

shadow.animate.t_shadow$animate31912.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31912.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31912.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31912.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
});

shadow.animate.t_shadow$animate31912.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31912.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta31913","meta31913",-2039530626,null)], null);
});

shadow.animate.t_shadow$animate31912.cljs$lang$type = true;

shadow.animate.t_shadow$animate31912.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31912";

shadow.animate.t_shadow$animate31912.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31912");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31912.
 */
shadow.animate.__GT_t_shadow$animate31912 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate31912(attr__$1,meta31913){
return (new shadow.animate.t_shadow$animate31912(attr__$1,meta31913));
});

}

return (new shadow.animate.t_shadow$animate31912(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4500__auto__ = [];
var len__4497__auto___31919 = arguments.length;
var i__4498__auto___31920 = (0);
while(true){
if((i__4498__auto___31920 < len__4497__auto___31919)){
args__4500__auto__.push((arguments[i__4498__auto___31920]));

var G__31921 = (i__4498__auto___31920 + (1));
i__4498__auto___31920 = G__31921;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5455__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var adef = temp__5455__auto__;
var G__31922 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__31923 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__31924 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__31925 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__31926 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__31927 = cljs.core.rest(transitions__$1);
to = G__31922;
from = G__31923;
toggles = G__31924;
timings = G__31925;
delays = G__31926;
transitions__$1 = G__31927;
continue;
} else {
if(typeof shadow.animate.t_shadow$animate31916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31916 = (function (transitions,to,from,toggles,timings,delays,temp__5455__auto__,meta31917){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5455__auto__ = temp__5455__auto__;
this.meta31917 = meta31917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_31918,meta31917__$1){
var self__ = this;
var _31918__$1 = this;
return (new shadow.animate.t_shadow$animate31916(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5455__auto__,meta31917__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_31918){
var self__ = this;
var _31918__$1 = this;
return self__.meta31917;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31916.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"meta31917","meta31917",182121868,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31916.cljs$lang$type = true;

shadow.animate.t_shadow$animate31916.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31916";

shadow.animate.t_shadow$animate31916.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31916");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

/**
 * Positional factory function for shadow.animate/t_shadow$animate31916.
 */
shadow.animate.__GT_t_shadow$animate31916 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function shadow$animate$__GT_t_shadow$animate31916(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta31917){
return (new shadow.animate.t_shadow$animate31916(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta31917));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

}

return (new shadow.animate.t_shadow$animate31916(transitions__$1,to,from,toggles,timings,delays,temp__5455__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
});

shadow.animate.combine.cljs$lang$maxFixedArity = (0);

shadow.animate.combine.cljs$lang$applyTo = (function (seq31915){
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31915));
});

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__31929 = arguments.length;
switch (G__31929) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
});

shadow.animate.fade_in.cljs$lang$maxFixedArity = 1;

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__31932 = arguments.length;
switch (G__31932) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
});

shadow.animate.fade_out.cljs$lang$maxFixedArity = 1;

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__31935 = arguments.length;
switch (G__31935) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate31936 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31936 = (function (from,to,timing,delay,meta31937){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta31937 = meta31937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31938,meta31937__$1){
var self__ = this;
var _31938__$1 = this;
return (new shadow.animate.t_shadow$animate31936(self__.from,self__.to,self__.timing,self__.delay,meta31937__$1));
});

shadow.animate.t_shadow$animate31936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31938){
var self__ = this;
var _31938__$1 = this;
return self__.meta31937;
});

shadow.animate.t_shadow$animate31936.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31936.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate31936.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate31936.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate31936.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31936.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate31936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta31937","meta31937",391974294,null)], null);
});

shadow.animate.t_shadow$animate31936.cljs$lang$type = true;

shadow.animate.t_shadow$animate31936.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31936";

shadow.animate.t_shadow$animate31936.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31936");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31936.
 */
shadow.animate.__GT_t_shadow$animate31936 = (function shadow$animate$__GT_t_shadow$animate31936(from__$1,to__$1,timing__$1,delay__$1,meta31937){
return (new shadow.animate.t_shadow$animate31936(from__$1,to__$1,timing__$1,delay__$1,meta31937));
});

}

return (new shadow.animate.t_shadow$animate31936(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_y.cljs$lang$maxFixedArity = 4;

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__31941 = arguments.length;
switch (G__31941) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate31942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31942 = (function (from,to,timing,delay,meta31943){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta31943 = meta31943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31944,meta31943__$1){
var self__ = this;
var _31944__$1 = this;
return (new shadow.animate.t_shadow$animate31942(self__.from,self__.to,self__.timing,self__.delay,meta31943__$1));
});

shadow.animate.t_shadow$animate31942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31944){
var self__ = this;
var _31944__$1 = this;
return self__.meta31943;
});

shadow.animate.t_shadow$animate31942.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31942.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate31942.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate31942.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate31942.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31942.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate31942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta31943","meta31943",1296551436,null)], null);
});

shadow.animate.t_shadow$animate31942.cljs$lang$type = true;

shadow.animate.t_shadow$animate31942.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31942";

shadow.animate.t_shadow$animate31942.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31942");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31942.
 */
shadow.animate.__GT_t_shadow$animate31942 = (function shadow$animate$__GT_t_shadow$animate31942(from__$1,to__$1,timing__$1,delay__$1,meta31943){
return (new shadow.animate.t_shadow$animate31942(from__$1,to__$1,timing__$1,delay__$1,meta31943));
});

}

return (new shadow.animate.t_shadow$animate31942(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_x.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.animate.js.map
