goog.provide('conduit.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
conduit.subs.reverse_cmp = (function conduit$subs$reverse_cmp(a,b){

return cljs.core.compare(b,a);
});
var G__27755_27757 = new cljs.core.Keyword(null,"active-page","active-page",370357330);
var G__27756_27758 = ((function (G__27755_27757){
return (function (db,_){
return new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(db);
});})(G__27755_27757))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27755_27757,G__27756_27758) : re_frame.core.reg_sub.call(null,G__27755_27757,G__27756_27758));
var G__27759_27761 = new cljs.core.Keyword(null,"articles","articles",-454771639);
var G__27760_27762 = ((function (G__27759_27761){
return (function (db,_){
var articles = new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"epoch","epoch",1435633666),conduit.subs.reverse_cmp,cljs.core.vals(articles));
});})(G__27759_27761))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27759_27761,G__27760_27762) : re_frame.core.reg_sub.call(null,G__27759_27761,G__27760_27762));
var G__27763_27765 = new cljs.core.Keyword(null,"articles-count","articles-count",-222608021);
var G__27764_27766 = ((function (G__27763_27765){
return (function (db,_){
return new cljs.core.Keyword(null,"articles-count","articles-count",-222608021).cljs$core$IFn$_invoke$arity$1(db);
});})(G__27763_27765))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27763_27765,G__27764_27766) : re_frame.core.reg_sub.call(null,G__27763_27765,G__27764_27766));
var G__27767_27769 = new cljs.core.Keyword(null,"active-article","active-article",-2143954133);
var G__27768_27770 = ((function (G__27767_27769){
return (function (db,_){
var active_article = new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),active_article], null));
});})(G__27767_27769))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27767_27769,G__27768_27770) : re_frame.core.reg_sub.call(null,G__27767_27769,G__27768_27770));
var G__27771_27773 = new cljs.core.Keyword(null,"tags","tags",1771418977);
var G__27772_27774 = ((function (G__27771_27773){
return (function (db,_){
return new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(db);
});})(G__27771_27773))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27771_27773,G__27772_27774) : re_frame.core.reg_sub.call(null,G__27771_27773,G__27772_27774));
var G__27775_27777 = new cljs.core.Keyword(null,"comments","comments",-293346423);
var G__27776_27778 = ((function (G__27775_27777){
return (function (db,_){
var comments = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"epoch","epoch",1435633666),conduit.subs.reverse_cmp,cljs.core.vals(comments));
});})(G__27775_27777))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27775_27777,G__27776_27778) : re_frame.core.reg_sub.call(null,G__27775_27777,G__27776_27778));
var G__27779_27781 = new cljs.core.Keyword(null,"profile","profile",-545963874);
var G__27780_27782 = ((function (G__27779_27781){
return (function (db,_){
return new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(db);
});})(G__27779_27781))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27779_27781,G__27780_27782) : re_frame.core.reg_sub.call(null,G__27779_27781,G__27780_27782));
var G__27786_27796 = new cljs.core.Keyword(null,"loading","loading",-737050189);
var G__27787_27797 = ((function (G__27786_27796){
return (function (db,_){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
});})(G__27786_27796))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27786_27796,G__27787_27797) : re_frame.core.reg_sub.call(null,G__27786_27796,G__27787_27797));
var G__27801_27803 = new cljs.core.Keyword(null,"filter","filter",-948537934);
var G__27802_27804 = ((function (G__27801_27803){
return (function (db,_){
return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(db);
});})(G__27801_27803))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27801_27803,G__27802_27804) : re_frame.core.reg_sub.call(null,G__27801_27803,G__27802_27804));
var G__27805_27807 = new cljs.core.Keyword(null,"errors","errors",-908790718);
var G__27806_27808 = ((function (G__27805_27807){
return (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});})(G__27805_27807))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27805_27807,G__27806_27808) : re_frame.core.reg_sub.call(null,G__27805_27807,G__27806_27808));
var G__27815_27817 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__27816_27818 = ((function (G__27815_27817){
return (function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
});})(G__27815_27817))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27815_27817,G__27816_27818) : re_frame.core.reg_sub.call(null,G__27815_27817,G__27816_27818));

//# sourceMappingURL=conduit.subs.js.map
