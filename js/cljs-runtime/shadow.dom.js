goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = ((typeof window !== 'undefined')?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28838 = coll;
var G__28839 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28838,G__28839) : shadow.dom.lazy_native_coll_seq.call(null,G__28838,G__28839));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3922__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28867 = arguments.length;
switch (G__28867) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28879 = arguments.length;
switch (G__28879) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28882 = arguments.length;
switch (G__28882) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28885 = arguments.length;
switch (G__28885) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28894 = arguments.length;
switch (G__28894) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__28898 = document;
var G__28899 = shadow.dom.dom_node(el);
return goog.dom.contains(G__28898,G__28899);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__28900 = shadow.dom.dom_node(parent);
var G__28901 = shadow.dom.dom_node(el);
return goog.dom.contains(G__28900,G__28901);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__28903 = shadow.dom.dom_node(el);
var G__28904 = cls;
return goog.dom.classlist.add(G__28903,G__28904);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__28905 = shadow.dom.dom_node(el);
var G__28906 = cls;
return goog.dom.classlist.remove(G__28905,G__28906);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28914 = arguments.length;
switch (G__28914) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__28915 = shadow.dom.dom_node(el);
var G__28916 = cls;
return goog.dom.classlist.toggle(G__28915,G__28916);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e28921){if((e28921 instanceof Object)){
var e = e28921;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28921;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28928 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28929 = null;
var count__28930 = (0);
var i__28931 = (0);
while(true){
if((i__28931 < count__28930)){
var el = chunk__28929.cljs$core$IIndexed$_nth$arity$2(null,i__28931);
var handler_28941__$1 = ((function (seq__28928,chunk__28929,count__28930,i__28931,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28928,chunk__28929,count__28930,i__28931,el))
;
var G__28932_28942 = el;
var G__28933_28943 = cljs.core.name(ev);
var G__28934_28944 = handler_28941__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__28932_28942,G__28933_28943,G__28934_28944) : shadow.dom.dom_listen.call(null,G__28932_28942,G__28933_28943,G__28934_28944));


var G__28945 = seq__28928;
var G__28946 = chunk__28929;
var G__28947 = count__28930;
var G__28948 = (i__28931 + (1));
seq__28928 = G__28945;
chunk__28929 = G__28946;
count__28930 = G__28947;
i__28931 = G__28948;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28928);
if(temp__5457__auto__){
var seq__28928__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28928__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__28928__$1);
var G__28952 = cljs.core.chunk_rest(seq__28928__$1);
var G__28953 = c__4319__auto__;
var G__28954 = cljs.core.count(c__4319__auto__);
var G__28955 = (0);
seq__28928 = G__28952;
chunk__28929 = G__28953;
count__28930 = G__28954;
i__28931 = G__28955;
continue;
} else {
var el = cljs.core.first(seq__28928__$1);
var handler_28956__$1 = ((function (seq__28928,chunk__28929,count__28930,i__28931,el,seq__28928__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28928,chunk__28929,count__28930,i__28931,el,seq__28928__$1,temp__5457__auto__))
;
var G__28938_28957 = el;
var G__28939_28958 = cljs.core.name(ev);
var G__28940_28959 = handler_28956__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__28938_28957,G__28939_28958,G__28940_28959) : shadow.dom.dom_listen.call(null,G__28938_28957,G__28939_28958,G__28940_28959));


var G__28966 = cljs.core.next(seq__28928__$1);
var G__28967 = null;
var G__28968 = (0);
var G__28969 = (0);
seq__28928 = G__28966;
chunk__28929 = G__28967;
count__28930 = G__28968;
i__28931 = G__28969;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28971 = arguments.length;
switch (G__28971) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__28978 = shadow.dom.dom_node(el);
var G__28979 = cljs.core.name(ev);
var G__28980 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__28978,G__28979,G__28980) : shadow.dom.dom_listen.call(null,G__28978,G__28979,G__28980));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__28982 = shadow.dom.dom_node(el);
var G__28983 = cljs.core.name(ev);
var G__28984 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__28982,G__28983,G__28984) : shadow.dom.dom_listen_remove.call(null,G__28982,G__28983,G__28984));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28987 = cljs.core.seq(events);
var chunk__28988 = null;
var count__28989 = (0);
var i__28990 = (0);
while(true){
if((i__28990 < count__28989)){
var vec__28994 = chunk__28988.cljs$core$IIndexed$_nth$arity$2(null,i__28990);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28994,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28994,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29011 = seq__28987;
var G__29012 = chunk__28988;
var G__29013 = count__28989;
var G__29014 = (i__28990 + (1));
seq__28987 = G__29011;
chunk__28988 = G__29012;
count__28989 = G__29013;
i__28990 = G__29014;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__28987);
if(temp__5457__auto__){
var seq__28987__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28987__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__28987__$1);
var G__29024 = cljs.core.chunk_rest(seq__28987__$1);
var G__29025 = c__4319__auto__;
var G__29026 = cljs.core.count(c__4319__auto__);
var G__29027 = (0);
seq__28987 = G__29024;
chunk__28988 = G__29025;
count__28989 = G__29026;
i__28990 = G__29027;
continue;
} else {
var vec__29000 = cljs.core.first(seq__28987__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29000,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29000,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29028 = cljs.core.next(seq__28987__$1);
var G__29029 = null;
var G__29030 = (0);
var G__29031 = (0);
seq__28987 = G__29028;
chunk__28988 = G__29029;
count__28989 = G__29030;
i__28990 = G__29031;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__29037 = cljs.core.seq(styles);
var chunk__29038 = null;
var count__29039 = (0);
var i__29040 = (0);
while(true){
if((i__29040 < count__29039)){
var vec__29041 = chunk__29038.cljs$core$IIndexed$_nth$arity$2(null,i__29040);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29041,(1),null);
var G__29044_29053 = dom;
var G__29045_29054 = cljs.core.name(k);
var G__29046_29055 = (((v == null))?"":v);
goog.style.setStyle(G__29044_29053,G__29045_29054,G__29046_29055);


var G__29056 = seq__29037;
var G__29057 = chunk__29038;
var G__29058 = count__29039;
var G__29059 = (i__29040 + (1));
seq__29037 = G__29056;
chunk__29038 = G__29057;
count__29039 = G__29058;
i__29040 = G__29059;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29037);
if(temp__5457__auto__){
var seq__29037__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29037__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29037__$1);
var G__29060 = cljs.core.chunk_rest(seq__29037__$1);
var G__29061 = c__4319__auto__;
var G__29062 = cljs.core.count(c__4319__auto__);
var G__29063 = (0);
seq__29037 = G__29060;
chunk__29038 = G__29061;
count__29039 = G__29062;
i__29040 = G__29063;
continue;
} else {
var vec__29047 = cljs.core.first(seq__29037__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(1),null);
var G__29050_29064 = dom;
var G__29051_29065 = cljs.core.name(k);
var G__29052_29066 = (((v == null))?"":v);
goog.style.setStyle(G__29050_29064,G__29051_29065,G__29052_29066);


var G__29067 = cljs.core.next(seq__29037__$1);
var G__29068 = null;
var G__29069 = (0);
var G__29070 = (0);
seq__29037 = G__29067;
chunk__29038 = G__29068;
count__29039 = G__29069;
i__29040 = G__29070;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__29074_29082 = key;
var G__29074_29083__$1 = (((G__29074_29082 instanceof cljs.core.Keyword))?G__29074_29082.fqn:null);
switch (G__29074_29083__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29092 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3922__auto__ = goog.string.startsWith(ks_29092,"data-");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.string.startsWith(ks_29092,"aria-");
}
})())){
el.setAttribute(ks_29092,value);
} else {
(el[ks_29092] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__29093 = shadow.dom.dom_node(el);
var G__29094 = cls;
return goog.dom.classlist.contains(G__29093,G__29094);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29098){
var map__29099 = p__29098;
var map__29099__$1 = ((((!((map__29099 == null)))?(((((map__29099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29099):map__29099);
var props = map__29099__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29099__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29101 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29101,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29101,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29101,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29104 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29104,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29104;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29109 = arguments.length;
switch (G__29109) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29114){
var vec__29116 = p__29114;
var seq__29117 = cljs.core.seq(vec__29116);
var first__29118 = cljs.core.first(seq__29117);
var seq__29117__$1 = cljs.core.next(seq__29117);
var nn = first__29118;
var first__29118__$1 = cljs.core.first(seq__29117__$1);
var seq__29117__$2 = cljs.core.next(seq__29117__$1);
var np = first__29118__$1;
var nc = seq__29117__$2;
var node = vec__29116;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29122 = nn;
var G__29123 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29122,G__29123) : create_fn.call(null,G__29122,G__29123));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29124 = nn;
var G__29125 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29124,G__29125) : create_fn.call(null,G__29124,G__29125));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29127 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29127,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29127,(1),null);
var seq__29130_29156 = cljs.core.seq(node_children);
var chunk__29131_29157 = null;
var count__29132_29158 = (0);
var i__29133_29159 = (0);
while(true){
if((i__29133_29159 < count__29132_29158)){
var child_struct_29164 = chunk__29131_29157.cljs$core$IIndexed$_nth$arity$2(null,i__29133_29159);
var children_29166 = shadow.dom.dom_node(child_struct_29164);
if(cljs.core.seq_QMARK_(children_29166)){
var seq__29134_29168 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29166));
var chunk__29136_29169 = null;
var count__29137_29170 = (0);
var i__29138_29171 = (0);
while(true){
if((i__29138_29171 < count__29137_29170)){
var child_29173 = chunk__29136_29169.cljs$core$IIndexed$_nth$arity$2(null,i__29138_29171);
if(cljs.core.truth_(child_29173)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29173);


var G__29176 = seq__29134_29168;
var G__29177 = chunk__29136_29169;
var G__29178 = count__29137_29170;
var G__29179 = (i__29138_29171 + (1));
seq__29134_29168 = G__29176;
chunk__29136_29169 = G__29177;
count__29137_29170 = G__29178;
i__29138_29171 = G__29179;
continue;
} else {
var G__29181 = seq__29134_29168;
var G__29182 = chunk__29136_29169;
var G__29183 = count__29137_29170;
var G__29184 = (i__29138_29171 + (1));
seq__29134_29168 = G__29181;
chunk__29136_29169 = G__29182;
count__29137_29170 = G__29183;
i__29138_29171 = G__29184;
continue;
}
} else {
var temp__5457__auto___29186 = cljs.core.seq(seq__29134_29168);
if(temp__5457__auto___29186){
var seq__29134_29189__$1 = temp__5457__auto___29186;
if(cljs.core.chunked_seq_QMARK_(seq__29134_29189__$1)){
var c__4319__auto___29191 = cljs.core.chunk_first(seq__29134_29189__$1);
var G__29192 = cljs.core.chunk_rest(seq__29134_29189__$1);
var G__29193 = c__4319__auto___29191;
var G__29194 = cljs.core.count(c__4319__auto___29191);
var G__29195 = (0);
seq__29134_29168 = G__29192;
chunk__29136_29169 = G__29193;
count__29137_29170 = G__29194;
i__29138_29171 = G__29195;
continue;
} else {
var child_29196 = cljs.core.first(seq__29134_29189__$1);
if(cljs.core.truth_(child_29196)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29196);


var G__29198 = cljs.core.next(seq__29134_29189__$1);
var G__29199 = null;
var G__29200 = (0);
var G__29201 = (0);
seq__29134_29168 = G__29198;
chunk__29136_29169 = G__29199;
count__29137_29170 = G__29200;
i__29138_29171 = G__29201;
continue;
} else {
var G__29202 = cljs.core.next(seq__29134_29189__$1);
var G__29203 = null;
var G__29204 = (0);
var G__29205 = (0);
seq__29134_29168 = G__29202;
chunk__29136_29169 = G__29203;
count__29137_29170 = G__29204;
i__29138_29171 = G__29205;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29166);
}


var G__29207 = seq__29130_29156;
var G__29208 = chunk__29131_29157;
var G__29209 = count__29132_29158;
var G__29210 = (i__29133_29159 + (1));
seq__29130_29156 = G__29207;
chunk__29131_29157 = G__29208;
count__29132_29158 = G__29209;
i__29133_29159 = G__29210;
continue;
} else {
var temp__5457__auto___29212 = cljs.core.seq(seq__29130_29156);
if(temp__5457__auto___29212){
var seq__29130_29214__$1 = temp__5457__auto___29212;
if(cljs.core.chunked_seq_QMARK_(seq__29130_29214__$1)){
var c__4319__auto___29215 = cljs.core.chunk_first(seq__29130_29214__$1);
var G__29217 = cljs.core.chunk_rest(seq__29130_29214__$1);
var G__29218 = c__4319__auto___29215;
var G__29219 = cljs.core.count(c__4319__auto___29215);
var G__29220 = (0);
seq__29130_29156 = G__29217;
chunk__29131_29157 = G__29218;
count__29132_29158 = G__29219;
i__29133_29159 = G__29220;
continue;
} else {
var child_struct_29224 = cljs.core.first(seq__29130_29214__$1);
var children_29225 = shadow.dom.dom_node(child_struct_29224);
if(cljs.core.seq_QMARK_(children_29225)){
var seq__29140_29230 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29225));
var chunk__29142_29231 = null;
var count__29143_29232 = (0);
var i__29144_29233 = (0);
while(true){
if((i__29144_29233 < count__29143_29232)){
var child_29241 = chunk__29142_29231.cljs$core$IIndexed$_nth$arity$2(null,i__29144_29233);
if(cljs.core.truth_(child_29241)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29241);


var G__29242 = seq__29140_29230;
var G__29244 = chunk__29142_29231;
var G__29245 = count__29143_29232;
var G__29246 = (i__29144_29233 + (1));
seq__29140_29230 = G__29242;
chunk__29142_29231 = G__29244;
count__29143_29232 = G__29245;
i__29144_29233 = G__29246;
continue;
} else {
var G__29248 = seq__29140_29230;
var G__29249 = chunk__29142_29231;
var G__29250 = count__29143_29232;
var G__29251 = (i__29144_29233 + (1));
seq__29140_29230 = G__29248;
chunk__29142_29231 = G__29249;
count__29143_29232 = G__29250;
i__29144_29233 = G__29251;
continue;
}
} else {
var temp__5457__auto___29254__$1 = cljs.core.seq(seq__29140_29230);
if(temp__5457__auto___29254__$1){
var seq__29140_29255__$1 = temp__5457__auto___29254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29140_29255__$1)){
var c__4319__auto___29256 = cljs.core.chunk_first(seq__29140_29255__$1);
var G__29257 = cljs.core.chunk_rest(seq__29140_29255__$1);
var G__29258 = c__4319__auto___29256;
var G__29259 = cljs.core.count(c__4319__auto___29256);
var G__29260 = (0);
seq__29140_29230 = G__29257;
chunk__29142_29231 = G__29258;
count__29143_29232 = G__29259;
i__29144_29233 = G__29260;
continue;
} else {
var child_29267 = cljs.core.first(seq__29140_29255__$1);
if(cljs.core.truth_(child_29267)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29267);


var G__29270 = cljs.core.next(seq__29140_29255__$1);
var G__29272 = null;
var G__29273 = (0);
var G__29274 = (0);
seq__29140_29230 = G__29270;
chunk__29142_29231 = G__29272;
count__29143_29232 = G__29273;
i__29144_29233 = G__29274;
continue;
} else {
var G__29280 = cljs.core.next(seq__29140_29255__$1);
var G__29281 = null;
var G__29282 = (0);
var G__29283 = (0);
seq__29140_29230 = G__29280;
chunk__29142_29231 = G__29281;
count__29143_29232 = G__29282;
i__29144_29233 = G__29283;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29225);
}


var G__29292 = cljs.core.next(seq__29130_29214__$1);
var G__29293 = null;
var G__29294 = (0);
var G__29295 = (0);
seq__29130_29156 = G__29292;
chunk__29131_29157 = G__29293;
count__29132_29158 = G__29294;
i__29133_29159 = G__29295;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__29311 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__29311);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__29317 = cljs.core.seq(node);
var chunk__29318 = null;
var count__29319 = (0);
var i__29320 = (0);
while(true){
if((i__29320 < count__29319)){
var n = chunk__29318.cljs$core$IIndexed$_nth$arity$2(null,i__29320);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29326 = seq__29317;
var G__29327 = chunk__29318;
var G__29328 = count__29319;
var G__29329 = (i__29320 + (1));
seq__29317 = G__29326;
chunk__29318 = G__29327;
count__29319 = G__29328;
i__29320 = G__29329;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29317);
if(temp__5457__auto__){
var seq__29317__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29317__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29317__$1);
var G__29331 = cljs.core.chunk_rest(seq__29317__$1);
var G__29332 = c__4319__auto__;
var G__29333 = cljs.core.count(c__4319__auto__);
var G__29334 = (0);
seq__29317 = G__29331;
chunk__29318 = G__29332;
count__29319 = G__29333;
i__29320 = G__29334;
continue;
} else {
var n = cljs.core.first(seq__29317__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29337 = cljs.core.next(seq__29317__$1);
var G__29338 = null;
var G__29339 = (0);
var G__29340 = (0);
seq__29317 = G__29337;
chunk__29318 = G__29338;
count__29319 = G__29339;
i__29320 = G__29340;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__29343 = shadow.dom.dom_node(new$);
var G__29344 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__29343,G__29344);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__29351 = arguments.length;
switch (G__29351) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__29367 = arguments.length;
switch (G__29367) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__29390 = arguments.length;
switch (G__29390) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3922__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4500__auto__ = [];
var len__4497__auto___29426 = arguments.length;
var i__4498__auto___29427 = (0);
while(true){
if((i__4498__auto___29427 < len__4497__auto___29426)){
args__4500__auto__.push((arguments[i__4498__auto___29427]));

var G__29428 = (i__4498__auto___29427 + (1));
i__4498__auto___29427 = G__29428;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__29422_29429 = cljs.core.seq(nodes);
var chunk__29423_29430 = null;
var count__29424_29431 = (0);
var i__29425_29432 = (0);
while(true){
if((i__29425_29432 < count__29424_29431)){
var node_29434 = chunk__29423_29430.cljs$core$IIndexed$_nth$arity$2(null,i__29425_29432);
fragment.appendChild(shadow.dom._to_dom(node_29434));


var G__29435 = seq__29422_29429;
var G__29436 = chunk__29423_29430;
var G__29437 = count__29424_29431;
var G__29438 = (i__29425_29432 + (1));
seq__29422_29429 = G__29435;
chunk__29423_29430 = G__29436;
count__29424_29431 = G__29437;
i__29425_29432 = G__29438;
continue;
} else {
var temp__5457__auto___29439 = cljs.core.seq(seq__29422_29429);
if(temp__5457__auto___29439){
var seq__29422_29440__$1 = temp__5457__auto___29439;
if(cljs.core.chunked_seq_QMARK_(seq__29422_29440__$1)){
var c__4319__auto___29441 = cljs.core.chunk_first(seq__29422_29440__$1);
var G__29442 = cljs.core.chunk_rest(seq__29422_29440__$1);
var G__29443 = c__4319__auto___29441;
var G__29444 = cljs.core.count(c__4319__auto___29441);
var G__29445 = (0);
seq__29422_29429 = G__29442;
chunk__29423_29430 = G__29443;
count__29424_29431 = G__29444;
i__29425_29432 = G__29445;
continue;
} else {
var node_29446 = cljs.core.first(seq__29422_29440__$1);
fragment.appendChild(shadow.dom._to_dom(node_29446));


var G__29447 = cljs.core.next(seq__29422_29440__$1);
var G__29448 = null;
var G__29449 = (0);
var G__29450 = (0);
seq__29422_29429 = G__29447;
chunk__29423_29430 = G__29448;
count__29424_29431 = G__29449;
i__29425_29432 = G__29450;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

shadow.dom.fragment.cljs$lang$applyTo = (function (seq29409){
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29409));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29454_29471 = cljs.core.seq(scripts);
var chunk__29455_29472 = null;
var count__29456_29473 = (0);
var i__29457_29474 = (0);
while(true){
if((i__29457_29474 < count__29456_29473)){
var vec__29458_29476 = chunk__29455_29472.cljs$core$IIndexed$_nth$arity$2(null,i__29457_29474);
var script_tag_29477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29458_29476,(0),null);
var script_body_29478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29458_29476,(1),null);
eval(script_body_29478);


var G__29479 = seq__29454_29471;
var G__29480 = chunk__29455_29472;
var G__29481 = count__29456_29473;
var G__29482 = (i__29457_29474 + (1));
seq__29454_29471 = G__29479;
chunk__29455_29472 = G__29480;
count__29456_29473 = G__29481;
i__29457_29474 = G__29482;
continue;
} else {
var temp__5457__auto___29483 = cljs.core.seq(seq__29454_29471);
if(temp__5457__auto___29483){
var seq__29454_29484__$1 = temp__5457__auto___29483;
if(cljs.core.chunked_seq_QMARK_(seq__29454_29484__$1)){
var c__4319__auto___29485 = cljs.core.chunk_first(seq__29454_29484__$1);
var G__29486 = cljs.core.chunk_rest(seq__29454_29484__$1);
var G__29487 = c__4319__auto___29485;
var G__29488 = cljs.core.count(c__4319__auto___29485);
var G__29489 = (0);
seq__29454_29471 = G__29486;
chunk__29455_29472 = G__29487;
count__29456_29473 = G__29488;
i__29457_29474 = G__29489;
continue;
} else {
var vec__29462_29490 = cljs.core.first(seq__29454_29484__$1);
var script_tag_29491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29462_29490,(0),null);
var script_body_29492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29462_29490,(1),null);
eval(script_body_29492);


var G__29493 = cljs.core.next(seq__29454_29484__$1);
var G__29494 = null;
var G__29495 = (0);
var G__29496 = (0);
seq__29454_29471 = G__29493;
chunk__29455_29472 = G__29494;
count__29456_29473 = G__29495;
i__29457_29474 = G__29496;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__29465){
var vec__29466 = p__29465;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29466,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29466,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__29500 = shadow.dom.dom_node(el);
var G__29501 = cls;
return goog.dom.getAncestorByClass(G__29500,G__29501);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__29506 = arguments.length;
switch (G__29506) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__29510 = shadow.dom.dom_node(el);
var G__29511 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__29510,G__29511);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__29512 = shadow.dom.dom_node(el);
var G__29513 = cljs.core.name(tag);
var G__29514 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__29512,G__29513,G__29514);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__29521 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__29521);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__29528 = shadow.dom.dom_node(dom);
var G__29529 = value;
return goog.dom.forms.setValue(G__29528,G__29529);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__29558 = cljs.core.seq(style_keys);
var chunk__29559 = null;
var count__29560 = (0);
var i__29561 = (0);
while(true){
if((i__29561 < count__29560)){
var it = chunk__29559.cljs$core$IIndexed$_nth$arity$2(null,i__29561);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29563 = seq__29558;
var G__29564 = chunk__29559;
var G__29565 = count__29560;
var G__29566 = (i__29561 + (1));
seq__29558 = G__29563;
chunk__29559 = G__29564;
count__29560 = G__29565;
i__29561 = G__29566;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29558);
if(temp__5457__auto__){
var seq__29558__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29558__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29558__$1);
var G__29567 = cljs.core.chunk_rest(seq__29558__$1);
var G__29568 = c__4319__auto__;
var G__29569 = cljs.core.count(c__4319__auto__);
var G__29570 = (0);
seq__29558 = G__29567;
chunk__29559 = G__29568;
count__29560 = G__29569;
i__29561 = G__29570;
continue;
} else {
var it = cljs.core.first(seq__29558__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29571 = cljs.core.next(seq__29558__$1);
var G__29572 = null;
var G__29573 = (0);
var G__29574 = (0);
seq__29558 = G__29571;
chunk__29559 = G__29572;
count__29560 = G__29573;
i__29561 = G__29574;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10592__auto__,k__10593__auto__){
var self__ = this;
var this__10592__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10592__auto____$1,k__10593__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10594__auto__,k29576,else__10595__auto__){
var self__ = this;
var this__10594__auto____$1 = this;
var G__29581 = k29576;
var G__29581__$1 = (((G__29581 instanceof cljs.core.Keyword))?G__29581.fqn:null);
switch (G__29581__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29576,else__10595__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10606__auto__,writer__10607__auto__,opts__10608__auto__){
var self__ = this;
var this__10606__auto____$1 = this;
var pr_pair__10609__auto__ = ((function (this__10606__auto____$1){
return (function (keyval__10610__auto__){
return cljs.core.pr_sequential_writer(writer__10607__auto__,cljs.core.pr_writer,""," ","",opts__10608__auto__,keyval__10610__auto__);
});})(this__10606__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10607__auto__,pr_pair__10609__auto__,"#shadow.dom.Coordinate{",", ","}",opts__10608__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29575){
var self__ = this;
var G__29575__$1 = this;
return (new cljs.core.RecordIter((0),G__29575__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10590__auto__){
var self__ = this;
var this__10590__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10587__auto__){
var self__ = this;
var this__10587__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10596__auto__){
var self__ = this;
var this__10596__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10588__auto__){
var self__ = this;
var this__10588__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__29592 = ((function (h__4030__auto__,this__10588__auto____$1){
return (function (coll__10589__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__10589__auto__));
});})(h__4030__auto__,this__10588__auto____$1))
;
return fexpr__29592(this__10588__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29577,other29578){
var self__ = this;
var this29577__$1 = this;
return ((!((other29578 == null))) && ((this29577__$1.constructor === other29578.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29577__$1.x,other29578.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29577__$1.y,other29578.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29577__$1.__extmap,other29578.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10601__auto__,k__10602__auto__){
var self__ = this;
var this__10601__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__10602__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10601__auto____$1),self__.__meta),k__10602__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10602__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10599__auto__,k__10600__auto__,G__29575){
var self__ = this;
var this__10599__auto____$1 = this;
var pred__29594 = cljs.core.keyword_identical_QMARK_;
var expr__29595 = k__10600__auto__;
if(cljs.core.truth_((function (){var G__29597 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__29598 = expr__29595;
return (pred__29594.cljs$core$IFn$_invoke$arity$2 ? pred__29594.cljs$core$IFn$_invoke$arity$2(G__29597,G__29598) : pred__29594.call(null,G__29597,G__29598));
})())){
return (new shadow.dom.Coordinate(G__29575,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29599 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__29600 = expr__29595;
return (pred__29594.cljs$core$IFn$_invoke$arity$2 ? pred__29594.cljs$core$IFn$_invoke$arity$2(G__29599,G__29600) : pred__29594.call(null,G__29599,G__29600));
})())){
return (new shadow.dom.Coordinate(self__.x,G__29575,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10600__auto__,G__29575),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10604__auto__){
var self__ = this;
var this__10604__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10591__auto__,G__29575){
var self__ = this;
var this__10591__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29575,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10597__auto__,entry__10598__auto__){
var self__ = this;
var this__10597__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10598__auto__)){
return cljs.core._assoc(this__10597__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10597__auto____$1,entry__10598__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29579){
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29579),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29579),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29579,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0))),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__29608 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__29608);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__29609 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__29609);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__29610 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__29610);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10592__auto__,k__10593__auto__){
var self__ = this;
var this__10592__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10592__auto____$1,k__10593__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10594__auto__,k29612,else__10595__auto__){
var self__ = this;
var this__10594__auto____$1 = this;
var G__29616 = k29612;
var G__29616__$1 = (((G__29616 instanceof cljs.core.Keyword))?G__29616.fqn:null);
switch (G__29616__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29612,else__10595__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10606__auto__,writer__10607__auto__,opts__10608__auto__){
var self__ = this;
var this__10606__auto____$1 = this;
var pr_pair__10609__auto__ = ((function (this__10606__auto____$1){
return (function (keyval__10610__auto__){
return cljs.core.pr_sequential_writer(writer__10607__auto__,cljs.core.pr_writer,""," ","",opts__10608__auto__,keyval__10610__auto__);
});})(this__10606__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10607__auto__,pr_pair__10609__auto__,"#shadow.dom.Size{",", ","}",opts__10608__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29611){
var self__ = this;
var G__29611__$1 = this;
return (new cljs.core.RecordIter((0),G__29611__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10590__auto__){
var self__ = this;
var this__10590__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10587__auto__){
var self__ = this;
var this__10587__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10596__auto__){
var self__ = this;
var this__10596__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10588__auto__){
var self__ = this;
var this__10588__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__29629 = ((function (h__4030__auto__,this__10588__auto____$1){
return (function (coll__10589__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__10589__auto__));
});})(h__4030__auto__,this__10588__auto____$1))
;
return fexpr__29629(this__10588__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29613,other29614){
var self__ = this;
var this29613__$1 = this;
return ((!((other29614 == null))) && ((this29613__$1.constructor === other29614.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29613__$1.w,other29614.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29613__$1.h,other29614.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29613__$1.__extmap,other29614.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10601__auto__,k__10602__auto__){
var self__ = this;
var this__10601__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__10602__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10601__auto____$1),self__.__meta),k__10602__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10602__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10599__auto__,k__10600__auto__,G__29611){
var self__ = this;
var this__10599__auto____$1 = this;
var pred__29636 = cljs.core.keyword_identical_QMARK_;
var expr__29637 = k__10600__auto__;
if(cljs.core.truth_((function (){var G__29641 = new cljs.core.Keyword(null,"w","w",354169001);
var G__29642 = expr__29637;
return (pred__29636.cljs$core$IFn$_invoke$arity$2 ? pred__29636.cljs$core$IFn$_invoke$arity$2(G__29641,G__29642) : pred__29636.call(null,G__29641,G__29642));
})())){
return (new shadow.dom.Size(G__29611,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29644 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__29645 = expr__29637;
return (pred__29636.cljs$core$IFn$_invoke$arity$2 ? pred__29636.cljs$core$IFn$_invoke$arity$2(G__29644,G__29645) : pred__29636.call(null,G__29644,G__29645));
})())){
return (new shadow.dom.Size(self__.w,G__29611,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10600__auto__,G__29611),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10604__auto__){
var self__ = this;
var this__10604__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10591__auto__,G__29611){
var self__ = this;
var this__10591__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29611,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10597__auto__,entry__10598__auto__){
var self__ = this;
var this__10597__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10598__auto__)){
return cljs.core._assoc(this__10597__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10597__auto____$1,entry__10598__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29615){
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29615),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29615),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29615,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0))),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__29678 = shadow.dom.dom_node(el);
return goog.style.getSize(G__29678);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4373__auto__ = opts;
var l__4374__auto__ = a__4373__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4374__auto__)){
var G__29706 = (i + (1));
var G__29707 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29706;
ret = G__29707;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29721){
var vec__29722 = p__29721;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29732 = arguments.length;
switch (G__29732) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__29744_29749 = new_node;
var G__29746_29750 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__29744_29749,G__29746_29750);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__29752_29754 = new_node;
var G__29753_29755 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__29752_29754,G__29753_29755);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__29763 = ps;
var G__29764 = (i + (1));
el__$1 = G__29763;
i = G__29764;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__29765 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__29765);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__29766 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__29766);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__29767 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__29767);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__29768 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29768,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29768,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29768,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29771_29781 = cljs.core.seq(props);
var chunk__29772_29782 = null;
var count__29773_29783 = (0);
var i__29774_29784 = (0);
while(true){
if((i__29774_29784 < count__29773_29783)){
var vec__29775_29785 = chunk__29772_29782.cljs$core$IIndexed$_nth$arity$2(null,i__29774_29784);
var k_29786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29775_29785,(0),null);
var v_29787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29775_29785,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_29786);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29786),v_29787);


var G__29788 = seq__29771_29781;
var G__29789 = chunk__29772_29782;
var G__29790 = count__29773_29783;
var G__29791 = (i__29774_29784 + (1));
seq__29771_29781 = G__29788;
chunk__29772_29782 = G__29789;
count__29773_29783 = G__29790;
i__29774_29784 = G__29791;
continue;
} else {
var temp__5457__auto___29792 = cljs.core.seq(seq__29771_29781);
if(temp__5457__auto___29792){
var seq__29771_29793__$1 = temp__5457__auto___29792;
if(cljs.core.chunked_seq_QMARK_(seq__29771_29793__$1)){
var c__4319__auto___29794 = cljs.core.chunk_first(seq__29771_29793__$1);
var G__29795 = cljs.core.chunk_rest(seq__29771_29793__$1);
var G__29796 = c__4319__auto___29794;
var G__29797 = cljs.core.count(c__4319__auto___29794);
var G__29798 = (0);
seq__29771_29781 = G__29795;
chunk__29772_29782 = G__29796;
count__29773_29783 = G__29797;
i__29774_29784 = G__29798;
continue;
} else {
var vec__29778_29799 = cljs.core.first(seq__29771_29793__$1);
var k_29800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29778_29799,(0),null);
var v_29801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29778_29799,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_29800);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29800),v_29801);


var G__29807 = cljs.core.next(seq__29771_29793__$1);
var G__29808 = null;
var G__29809 = (0);
var G__29810 = (0);
seq__29771_29781 = G__29807;
chunk__29772_29782 = G__29808;
count__29773_29783 = G__29809;
i__29774_29784 = G__29810;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29820 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29820,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29820,(1),null);
var seq__29823_29847 = cljs.core.seq(node_children);
var chunk__29825_29848 = null;
var count__29826_29849 = (0);
var i__29827_29850 = (0);
while(true){
if((i__29827_29850 < count__29826_29849)){
var child_struct_29851 = chunk__29825_29848.cljs$core$IIndexed$_nth$arity$2(null,i__29827_29850);
if(!((child_struct_29851 == null))){
if(typeof child_struct_29851 === 'string'){
var text_29852 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29852),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_29851)].join(''));
} else {
var children_29853 = shadow.dom.svg_node(child_struct_29851);
if(cljs.core.seq_QMARK_(children_29853)){
var seq__29829_29854 = cljs.core.seq(children_29853);
var chunk__29831_29855 = null;
var count__29832_29856 = (0);
var i__29833_29857 = (0);
while(true){
if((i__29833_29857 < count__29832_29856)){
var child_29858 = chunk__29831_29855.cljs$core$IIndexed$_nth$arity$2(null,i__29833_29857);
if(cljs.core.truth_(child_29858)){
node.appendChild(child_29858);


var G__29859 = seq__29829_29854;
var G__29860 = chunk__29831_29855;
var G__29861 = count__29832_29856;
var G__29862 = (i__29833_29857 + (1));
seq__29829_29854 = G__29859;
chunk__29831_29855 = G__29860;
count__29832_29856 = G__29861;
i__29833_29857 = G__29862;
continue;
} else {
var G__29863 = seq__29829_29854;
var G__29864 = chunk__29831_29855;
var G__29865 = count__29832_29856;
var G__29866 = (i__29833_29857 + (1));
seq__29829_29854 = G__29863;
chunk__29831_29855 = G__29864;
count__29832_29856 = G__29865;
i__29833_29857 = G__29866;
continue;
}
} else {
var temp__5457__auto___29867 = cljs.core.seq(seq__29829_29854);
if(temp__5457__auto___29867){
var seq__29829_29868__$1 = temp__5457__auto___29867;
if(cljs.core.chunked_seq_QMARK_(seq__29829_29868__$1)){
var c__4319__auto___29869 = cljs.core.chunk_first(seq__29829_29868__$1);
var G__29870 = cljs.core.chunk_rest(seq__29829_29868__$1);
var G__29871 = c__4319__auto___29869;
var G__29872 = cljs.core.count(c__4319__auto___29869);
var G__29873 = (0);
seq__29829_29854 = G__29870;
chunk__29831_29855 = G__29871;
count__29832_29856 = G__29872;
i__29833_29857 = G__29873;
continue;
} else {
var child_29874 = cljs.core.first(seq__29829_29868__$1);
if(cljs.core.truth_(child_29874)){
node.appendChild(child_29874);


var G__29875 = cljs.core.next(seq__29829_29868__$1);
var G__29876 = null;
var G__29877 = (0);
var G__29878 = (0);
seq__29829_29854 = G__29875;
chunk__29831_29855 = G__29876;
count__29832_29856 = G__29877;
i__29833_29857 = G__29878;
continue;
} else {
var G__29879 = cljs.core.next(seq__29829_29868__$1);
var G__29880 = null;
var G__29881 = (0);
var G__29882 = (0);
seq__29829_29854 = G__29879;
chunk__29831_29855 = G__29880;
count__29832_29856 = G__29881;
i__29833_29857 = G__29882;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29853);
}
}


var G__29886 = seq__29823_29847;
var G__29887 = chunk__29825_29848;
var G__29888 = count__29826_29849;
var G__29889 = (i__29827_29850 + (1));
seq__29823_29847 = G__29886;
chunk__29825_29848 = G__29887;
count__29826_29849 = G__29888;
i__29827_29850 = G__29889;
continue;
} else {
var G__29892 = seq__29823_29847;
var G__29893 = chunk__29825_29848;
var G__29894 = count__29826_29849;
var G__29895 = (i__29827_29850 + (1));
seq__29823_29847 = G__29892;
chunk__29825_29848 = G__29893;
count__29826_29849 = G__29894;
i__29827_29850 = G__29895;
continue;
}
} else {
var temp__5457__auto___29898 = cljs.core.seq(seq__29823_29847);
if(temp__5457__auto___29898){
var seq__29823_29899__$1 = temp__5457__auto___29898;
if(cljs.core.chunked_seq_QMARK_(seq__29823_29899__$1)){
var c__4319__auto___29900 = cljs.core.chunk_first(seq__29823_29899__$1);
var G__29903 = cljs.core.chunk_rest(seq__29823_29899__$1);
var G__29904 = c__4319__auto___29900;
var G__29905 = cljs.core.count(c__4319__auto___29900);
var G__29906 = (0);
seq__29823_29847 = G__29903;
chunk__29825_29848 = G__29904;
count__29826_29849 = G__29905;
i__29827_29850 = G__29906;
continue;
} else {
var child_struct_29909 = cljs.core.first(seq__29823_29899__$1);
if(!((child_struct_29909 == null))){
if(typeof child_struct_29909 === 'string'){
var text_29910 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29910),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_29909)].join(''));
} else {
var children_29913 = shadow.dom.svg_node(child_struct_29909);
if(cljs.core.seq_QMARK_(children_29913)){
var seq__29840_29914 = cljs.core.seq(children_29913);
var chunk__29842_29915 = null;
var count__29843_29916 = (0);
var i__29844_29917 = (0);
while(true){
if((i__29844_29917 < count__29843_29916)){
var child_29918 = chunk__29842_29915.cljs$core$IIndexed$_nth$arity$2(null,i__29844_29917);
if(cljs.core.truth_(child_29918)){
node.appendChild(child_29918);


var G__29919 = seq__29840_29914;
var G__29920 = chunk__29842_29915;
var G__29921 = count__29843_29916;
var G__29922 = (i__29844_29917 + (1));
seq__29840_29914 = G__29919;
chunk__29842_29915 = G__29920;
count__29843_29916 = G__29921;
i__29844_29917 = G__29922;
continue;
} else {
var G__29923 = seq__29840_29914;
var G__29924 = chunk__29842_29915;
var G__29925 = count__29843_29916;
var G__29926 = (i__29844_29917 + (1));
seq__29840_29914 = G__29923;
chunk__29842_29915 = G__29924;
count__29843_29916 = G__29925;
i__29844_29917 = G__29926;
continue;
}
} else {
var temp__5457__auto___29927__$1 = cljs.core.seq(seq__29840_29914);
if(temp__5457__auto___29927__$1){
var seq__29840_29928__$1 = temp__5457__auto___29927__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29840_29928__$1)){
var c__4319__auto___29929 = cljs.core.chunk_first(seq__29840_29928__$1);
var G__29930 = cljs.core.chunk_rest(seq__29840_29928__$1);
var G__29931 = c__4319__auto___29929;
var G__29932 = cljs.core.count(c__4319__auto___29929);
var G__29933 = (0);
seq__29840_29914 = G__29930;
chunk__29842_29915 = G__29931;
count__29843_29916 = G__29932;
i__29844_29917 = G__29933;
continue;
} else {
var child_29934 = cljs.core.first(seq__29840_29928__$1);
if(cljs.core.truth_(child_29934)){
node.appendChild(child_29934);


var G__29935 = cljs.core.next(seq__29840_29928__$1);
var G__29936 = null;
var G__29937 = (0);
var G__29938 = (0);
seq__29840_29914 = G__29935;
chunk__29842_29915 = G__29936;
count__29843_29916 = G__29937;
i__29844_29917 = G__29938;
continue;
} else {
var G__29939 = cljs.core.next(seq__29840_29928__$1);
var G__29940 = null;
var G__29941 = (0);
var G__29942 = (0);
seq__29840_29914 = G__29939;
chunk__29842_29915 = G__29940;
count__29843_29916 = G__29941;
i__29844_29917 = G__29942;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29913);
}
}


var G__29943 = cljs.core.next(seq__29823_29899__$1);
var G__29944 = null;
var G__29945 = (0);
var G__29946 = (0);
seq__29823_29847 = G__29943;
chunk__29825_29848 = G__29944;
count__29826_29849 = G__29945;
i__29827_29850 = G__29946;
continue;
} else {
var G__29947 = cljs.core.next(seq__29823_29899__$1);
var G__29948 = null;
var G__29949 = (0);
var G__29950 = (0);
seq__29823_29847 = G__29947;
chunk__29825_29848 = G__29948;
count__29826_29849 = G__29949;
i__29827_29850 = G__29950;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__29951_29957 = shadow.dom._to_svg;
var G__29952_29958 = "string";
var G__29953_29959 = ((function (G__29951_29957,G__29952_29958){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__29951_29957,G__29952_29958))
;
goog.object.set(G__29951_29957,G__29952_29958,G__29953_29959);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__29954_29961 = shadow.dom._to_svg;
var G__29955_29962 = "null";
var G__29956_29963 = ((function (G__29954_29961,G__29955_29962){
return (function (_){
return null;
});})(G__29954_29961,G__29955_29962))
;
goog.object.set(G__29954_29961,G__29955_29962,G__29956_29963);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4500__auto__ = [];
var len__4497__auto___29966 = arguments.length;
var i__4498__auto___29967 = (0);
while(true){
if((i__4498__auto___29967 < len__4497__auto___29966)){
args__4500__auto__.push((arguments[i__4498__auto___29967]));

var G__29968 = (i__4498__auto___29967 + (1));
i__4498__auto___29967 = G__29968;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

shadow.dom.svg.cljs$lang$applyTo = (function (seq29964){
var G__29965 = cljs.core.first(seq29964);
var seq29964__$1 = cljs.core.next(seq29964);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__29965,seq29964__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__29970 = arguments.length;
switch (G__29970) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__29971_29986 = shadow.dom.dom_node(el);
var G__29972_29987 = cljs.core.name(event);
var G__29973_29988 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__29971_29986,G__29972_29987,G__29973_29988) : shadow.dom.dom_listen.call(null,G__29971_29986,G__29972_29987,G__29973_29988));

if(cljs.core.truth_((function (){var and__3911__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3911__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3911__auto__;
}
})())){
var c__25472__auto___29993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___29993,buf,chan,event_fn){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___29993,buf,chan,event_fn){
return (function (state_29978){
var state_val_29979 = (state_29978[(1)]);
if((state_val_29979 === (1))){
var state_29978__$1 = state_29978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29978__$1,(2),once_or_cleanup);
} else {
if((state_val_29979 === (2))){
var inst_29975 = (state_29978[(2)]);
var inst_29976 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_29978__$1 = (function (){var statearr_29980 = state_29978;
(statearr_29980[(7)] = inst_29975);

return statearr_29980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29978__$1,inst_29976);
} else {
return null;
}
}
});})(c__25472__auto___29993,buf,chan,event_fn))
;
return ((function (switch__25250__auto__,c__25472__auto___29993,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__25251__auto__ = null;
var shadow$dom$state_machine__25251__auto____0 = (function (){
var statearr_29981 = [null,null,null,null,null,null,null,null];
(statearr_29981[(0)] = shadow$dom$state_machine__25251__auto__);

(statearr_29981[(1)] = (1));

return statearr_29981;
});
var shadow$dom$state_machine__25251__auto____1 = (function (state_29978){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_29978);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e29982){if((e29982 instanceof Object)){
var ex__25254__auto__ = e29982;
var statearr_29983_29996 = state_29978;
(statearr_29983_29996[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29982;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29997 = state_29978;
state_29978 = G__29997;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
shadow$dom$state_machine__25251__auto__ = function(state_29978){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__25251__auto____0.call(this);
case 1:
return shadow$dom$state_machine__25251__auto____1.call(this,state_29978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$dom$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__25251__auto____0;
shadow$dom$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__25251__auto____1;
return shadow$dom$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___29993,buf,chan,event_fn))
})();
var state__25474__auto__ = (function (){var statearr_29984 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_29984[(6)] = c__25472__auto___29993);

return statearr_29984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___29993,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
