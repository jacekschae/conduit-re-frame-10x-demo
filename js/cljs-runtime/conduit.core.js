goog.provide('conduit.core');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('conduit.events');
goog.require('conduit.subs');
goog.require('conduit.views');
conduit.core.is_service_worker_supported_QMARK_ = (function conduit$core$is_service_worker_supported_QMARK_(){
return ((typeof navigator.serviceWorker !== 'undefined') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"https:")));
});
conduit.core.register_service_worker = (function conduit$core$register_service_worker(path_to_sw){
if(cljs.core.truth_(conduit.core.is_service_worker_supported_QMARK_())){
return navigator.serviceWorker.register(path_to_sw);
} else {
return null;
}
});
conduit.core.hook_browser_navigation_BANG_ = (function conduit$core$hook_browser_navigation_BANG_(){
var G__28471 = (new goog.History());
var G__28472_28475 = G__28471;
var G__28473_28476 = goog.history.EventType.NAVIGATE;
var G__28474_28477 = ((function (G__28472_28475,G__28473_28476,G__28471){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__28472_28475,G__28473_28476,G__28471))
;
goog.events.listen(G__28472_28475,G__28473_28476,G__28474_28477);

G__28471.setEnabled(true);

return G__28471;
});
conduit.core.routes = (function conduit$core$routes(){
var slug = null;
var profile = null;
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__27377__auto___28566 = ((function (slug,profile){
return (function (params__27378__auto__){
if(cljs.core.map_QMARK_(params__27378__auto__)){
var map__28479 = params__27378__auto__;
var map__28479__$1 = ((((!((map__28479 == null)))?(((((map__28479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28479):map__28479);
var G__28481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28481) : re_frame.core.dispatch.call(null,G__28481));
} else {
if(cljs.core.vector_QMARK_(params__27378__auto__)){
var vec__28482 = params__27378__auto__;
var G__28485 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28485) : re_frame.core.dispatch.call(null,G__28485));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/",action__27377__auto___28566);


var action__27377__auto___28570 = ((function (slug,profile){
return (function (params__27378__auto__){
if(cljs.core.map_QMARK_(params__27378__auto__)){
var map__28486 = params__27378__auto__;
var map__28486__$1 = ((((!((map__28486 == null)))?(((((map__28486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28486):map__28486);
var G__28488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28488) : re_frame.core.dispatch.call(null,G__28488));
} else {
if(cljs.core.vector_QMARK_(params__27378__auto__)){
var vec__28489 = params__27378__auto__;
var G__28492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28492) : re_frame.core.dispatch.call(null,G__28492));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/login",action__27377__auto___28570);


var action__27377__auto___28575 = ((function (slug,profile){
return (function (params__27378__auto__){
if(cljs.core.map_QMARK_(params__27378__auto__)){
var map__28493 = params__27378__auto__;
var map__28493__$1 = ((((!((map__28493 == null)))?(((((map__28493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28493):map__28493);
var G__28496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28496) : re_frame.core.dispatch.call(null,G__28496));
} else {
if(cljs.core.vector_QMARK_(params__27378__auto__)){
var vec__28497 = params__27378__auto__;
var G__28500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28500) : re_frame.core.dispatch.call(null,G__28500));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/register",action__27377__auto___28575);


var action__27377__auto___28576 = ((function (slug,profile){
return (function (params__27378__auto__){
if(cljs.core.map_QMARK_(params__27378__auto__)){
var map__28502 = params__27378__auto__;
var map__28502__$1 = ((((!((map__28502 == null)))?(((((map__28502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28502):map__28502);
var G__28504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28504) : re_frame.core.dispatch.call(null,G__28504));
} else {
if(cljs.core.vector_QMARK_(params__27378__auto__)){
var vec__28506 = params__27378__auto__;
var G__28509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28509) : re_frame.core.dispatch.call(null,G__28509));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/settings",action__27377__auto___28576);


var action__27377__auto___28577 = ((function (slug,profile){
return (function (params__27378__auto__){
if(cljs.core.map_QMARK_(params__27378__auto__)){
var map__28511 = params__27378__auto__;
var map__28511__$1 = ((((!((map__28511 == null)))?(((((map__28511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28511):map__28511);
var G__28514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28514) : re_frame.core.dispatch.call(null,G__28514));
} else {
if(cljs.core.vector_QMARK_(params__27378__auto__)){
var vec__28515 = params__27378__auto__;
var G__28518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28518) : re_frame.core.dispatch.call(null,G__28518));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/editor",action__27377__auto___28577);


var action__27377__auto___28581 = ((function (slug,profile){
return (function (params__27378__auto__){
if(cljs.core.map_QMARK_(params__27378__auto__)){
var map__28520 = params__27378__auto__;
var map__28520__$1 = ((((!((map__28520 == null)))?(((((map__28520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28520):map__28520);
var slug__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28520__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var G__28522 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28522) : re_frame.core.dispatch.call(null,G__28522));
} else {
if(cljs.core.vector_QMARK_(params__27378__auto__)){
var vec__28524 = params__27378__auto__;
var slug__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28524,(0),null);
var G__28527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28527) : re_frame.core.dispatch.call(null,G__28527));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/editor/:slug",action__27377__auto___28581);


var action__27377__auto___28584 = ((function (slug,profile){
return (function (params__27378__auto__){
if(cljs.core.map_QMARK_(params__27378__auto__)){
var map__28529 = params__27378__auto__;
var map__28529__$1 = ((((!((map__28529 == null)))?(((((map__28529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28529):map__28529);
var G__28531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28531) : re_frame.core.dispatch.call(null,G__28531));
} else {
if(cljs.core.vector_QMARK_(params__27378__auto__)){
var vec__28532 = params__27378__auto__;
var G__28535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28535) : re_frame.core.dispatch.call(null,G__28535));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/logout",action__27377__auto___28584);


var action__27377__auto___28585 = ((function (slug,profile){
return (function (params__27378__auto__){
if(cljs.core.map_QMARK_(params__27378__auto__)){
var map__28538 = params__27378__auto__;
var map__28538__$1 = ((((!((map__28538 == null)))?(((((map__28538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28538):map__28538);
var slug__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28538__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var G__28540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28540) : re_frame.core.dispatch.call(null,G__28540));
} else {
if(cljs.core.vector_QMARK_(params__27378__auto__)){
var vec__28541 = params__27378__auto__;
var slug__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28541,(0),null);
var G__28546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28546) : re_frame.core.dispatch.call(null,G__28546));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/article/:slug",action__27377__auto___28585);


var action__27377__auto___28586 = ((function (slug,profile){
return (function (params__27378__auto__){
if(cljs.core.map_QMARK_(params__27378__auto__)){
var map__28547 = params__27378__auto__;
var map__28547__$1 = ((((!((map__28547 == null)))?(((((map__28547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28547):map__28547);
var profile__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28547__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var G__28549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28549) : re_frame.core.dispatch.call(null,G__28549));
} else {
if(cljs.core.vector_QMARK_(params__27378__auto__)){
var vec__28550 = params__27378__auto__;
var profile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28550,(0),null);
var G__28553 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28553) : re_frame.core.dispatch.call(null,G__28553));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/:profile/favorites",action__27377__auto___28586);


var action__27377__auto___28589 = ((function (slug,profile){
return (function (params__27378__auto__){
if(cljs.core.map_QMARK_(params__27378__auto__)){
var map__28555 = params__27378__auto__;
var map__28555__$1 = ((((!((map__28555 == null)))?(((((map__28555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28555):map__28555);
var profile__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28555__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var G__28559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28559) : re_frame.core.dispatch.call(null,G__28559));
} else {
if(cljs.core.vector_QMARK_(params__27378__auto__)){
var vec__28560 = params__27378__auto__;
var profile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28560,(0),null);
var G__28563 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28563) : re_frame.core.dispatch.call(null,G__28563));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/:profile",action__27377__auto___28589);


return conduit.core.hook_browser_navigation_BANG_();
});
conduit.core.main = (function conduit$core$main(){
conduit.core.routes();

var G__28590_28591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__28590_28591) : re_frame.core.dispatch_sync.call(null,G__28590_28591));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.conduit_app], null),document.getElementById("app"));
});
goog.exportSymbol('conduit.core.main', conduit.core.main);

//# sourceMappingURL=conduit.core.js.map
