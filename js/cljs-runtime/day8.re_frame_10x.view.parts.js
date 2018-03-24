goog.provide('day8.re_frame_10x.view.parts');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('re_frame.registrar');
goog.require('re_frame.events');
goog.require('re_frame.subs');
goog.require('re_frame.fx');
goog.require('re_frame.cofx');
day8.re_frame_10x.view.parts.render_registered = (function day8$re_frame_10x$view$parts$render_registered(kind){
var iter__4292__auto__ = (function day8$re_frame_10x$view$parts$render_registered_$_iter__27491(s__27492){
return (new cljs.core.LazySeq(null,(function (){
var s__27492__$1 = s__27492;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27492__$1);
if(temp__5457__auto__){
var s__27492__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27492__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27492__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27494 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27493 = (0);
while(true){
if((i__27493 < size__4291__auto__)){
var vec__27495 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27493);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27495,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27495,(1),null);
cljs.core.chunk_append(b__27494,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__27501 = (i__27493 + (1));
i__27493 = G__27501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27494),day8$re_frame_10x$view$parts$render_registered_$_iter__27491(cljs.core.chunk_rest(s__27492__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27494),null);
}
} else {
var vec__27498 = cljs.core.first(s__27492__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27498,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27498,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_registered_$_iter__27491(cljs.core.rest(s__27492__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render_subs = (function day8$re_frame_10x$view$parts$render_subs(kind){
var iter__4292__auto__ = (function day8$re_frame_10x$view$parts$render_subs_$_iter__27502(s__27503){
return (new cljs.core.LazySeq(null,(function (){
var s__27503__$1 = s__27503;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27503__$1);
if(temp__5457__auto__){
var s__27503__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27503__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27503__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27505 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27504 = (0);
while(true){
if((i__27504 < size__4291__auto__)){
var vec__27506 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27504);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27506,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27506,(1),null);
cljs.core.chunk_append(b__27505,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__27512 = (i__27504 + (1));
i__27504 = G__27512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27505),day8$re_frame_10x$view$parts$render_subs_$_iter__27502(cljs.core.chunk_rest(s__27503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27505),null);
}
} else {
var vec__27509 = cljs.core.first(s__27503__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27509,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_subs_$_iter__27502(cljs.core.rest(s__27503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render = (function day8$re_frame_10x$view$parts$render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Events"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.events.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Subscriptions"], null),day8.re_frame_10x.view.parts.render_subs(re_frame.subs.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"FX"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.fx.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"co-fx"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.cofx.kind)], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.view.parts.js.map
