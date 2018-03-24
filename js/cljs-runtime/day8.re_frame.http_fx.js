goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__27785){
var vec__27789 = p__27785;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27789,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27789,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__27798 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__27798);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__27812){
var map__27813 = p__27812;
var map__27813__$1 = ((((!((map__27813 == null)))?(((((map__27813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27813):map__27813);
var request = map__27813__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27813__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27813__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__27813,map__27813__$1,request,on_success,on_failure){
return (function (p1__27809_SHARP_){
var G__27819 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__27809_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27819) : re_frame.core.dispatch.call(null,G__27819));
});})(api,map__27813,map__27813__$1,request,on_success,on_failure))
,((function (api,map__27813,map__27813__$1,request,on_success,on_failure){
return (function (p1__27810_SHARP_){
var G__27820 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__27810_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27820) : re_frame.core.dispatch.call(null,G__27820));
});})(api,map__27813,map__27813__$1,request,on_success,on_failure))
,api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__27830 = cljs.core.seq(seq_request_maps);
var chunk__27831 = null;
var count__27832 = (0);
var i__27833 = (0);
while(true){
if((i__27833 < count__27832)){
var request__$1 = chunk__27831.cljs$core$IIndexed$_nth$arity$2(null,i__27833);
var G__27834_27836 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__27834_27836) : ajax.core.ajax_request.call(null,G__27834_27836));


var G__27837 = seq__27830;
var G__27838 = chunk__27831;
var G__27839 = count__27832;
var G__27840 = (i__27833 + (1));
seq__27830 = G__27837;
chunk__27831 = G__27838;
count__27832 = G__27839;
i__27833 = G__27840;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27830);
if(temp__5457__auto__){
var seq__27830__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27830__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27830__$1);
var G__27841 = cljs.core.chunk_rest(seq__27830__$1);
var G__27842 = c__4319__auto__;
var G__27843 = cljs.core.count(c__4319__auto__);
var G__27844 = (0);
seq__27830 = G__27841;
chunk__27831 = G__27842;
count__27832 = G__27843;
i__27833 = G__27844;
continue;
} else {
var request__$1 = cljs.core.first(seq__27830__$1);
var G__27835_27845 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__27835_27845) : ajax.core.ajax_request.call(null,G__27835_27845));


var G__27846 = cljs.core.next(seq__27830__$1);
var G__27847 = null;
var G__27848 = (0);
var G__27849 = (0);
seq__27830 = G__27846;
chunk__27831 = G__27847;
count__27832 = G__27848;
i__27833 = G__27849;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__27850_27852 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__27851_27853 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__27850_27852,G__27851_27853) : re_frame.core.reg_fx.call(null,G__27850_27852,G__27851_27853));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
