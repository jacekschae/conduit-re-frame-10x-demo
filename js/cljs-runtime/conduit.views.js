goog.provide('conduit.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.string');
conduit.views.format_date = (function conduit$views$format_date(date){
return (new Date(date)).toDateString();
});
conduit.views.tags_list = (function conduit$views$tags_list(tags_list){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.tag-list","ul.tag-list",-40566642),(function (){var iter__4292__auto__ = (function conduit$views$tags_list_$_iter__27792(s__27793){
return (new cljs.core.LazySeq(null,(function (){
var s__27793__$1 = s__27793;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27793__$1);
if(temp__5457__auto__){
var s__27793__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27793__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27793__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27795 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27794 = (0);
while(true){
if((i__27794 < size__4291__auto__)){
var tag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27794);
cljs.core.chunk_append(b__27795,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tag-default.tag-pill.tag-outline","li.tag-default.tag-pill.tag-outline",-1473983742),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)));

var G__27811 = (i__27794 + (1));
i__27794 = G__27811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27795),conduit$views$tags_list_$_iter__27792(cljs.core.chunk_rest(s__27793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27795),null);
}
} else {
var tag = cljs.core.first(s__27793__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tag-default.tag-pill.tag-outline","li.tag-default.tag-pill.tag-outline",-1473983742),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)),conduit$views$tags_list_$_iter__27792(cljs.core.rest(s__27793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(tags_list);
})()], null);
});
conduit.views.article_meta = (function conduit$views$article_meta(p__27821){
var map__27822 = p__27821;
var map__27822__$1 = ((((!((map__27822 == null)))?(((((map__27822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27822):map__27822);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27822__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27822__$1,new cljs.core.Keyword(null,"createdAt","createdAt",-936788));
var favorites_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27822__$1,new cljs.core.Keyword(null,"favoritesCount","favoritesCount",-1679335567));
var favorited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27822__$1,new cljs.core.Keyword(null,"favorited","favorited",-1400766725));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27822__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var loading = cljs.core.deref((function (){var G__27824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27824) : re_frame.core.subscribe.call(null,G__27824));
})());
var user = cljs.core.deref((function (){var G__27825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27825) : re_frame.core.subscribe.call(null,G__27825));
})());
var profile = cljs.core.deref((function (){var G__27826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27826) : re_frame.core.subscribe.call(null,G__27826));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-meta","div.article-meta",608522075),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.info","div.info",-1023482078),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.author","a.author",-1515189816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date","span.date",2108360793),conduit.views.format_date(created_at)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-secondary","a.btn.btn-sm.btn-outline-secondary",-649071213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/editor/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-edit","i.ion-edit",-898619775)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," Edit Article "], null)], null)," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-outline-danger.btn-sm","a.btn.btn-outline-danger.btn-sm",355761909),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (loading,user,profile,map__27822,map__27822__$1,author,created_at,favorites_count,favorited,slug){
return (function (){
var G__27827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-article","delete-article",1402885667),slug], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27827) : re_frame.core.dispatch.call(null,G__27827));
});})(loading,user,profile,map__27822,map__27822__$1,author,created_at,favorites_count,favorited,slug))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-trash-a","i.ion-trash-a",-1489458005)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," Delete Article "], null)], null)], null):((cljs.core.empty_QMARK_(user))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.action-btn.btn-outline-secondary","button.btn.btn-sm.action-btn.btn-outline-secondary",1089656337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (loading,user,profile,map__27822,map__27822__$1,author,created_at,favorites_count,favorited,slug){
return (function (){
var G__27828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27828) : re_frame.core.dispatch.call(null,G__27828));
});})(loading,user,profile,map__27822,map__27822__$1,author,created_at,favorites_count,favorited,slug))
,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"following","following",-2049193617).cljs$core$IFn$_invoke$arity$1(profile))?"ion-minus-round":"ion-plus-round")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"following","following",-2049193617).cljs$core$IFn$_invoke$arity$1(profile))?[" Unfollow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile))].join(''):[" Follow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile))].join(''))], null)], null)," ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-primary","button.btn.btn-sm.btn-primary",1703461621),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (loading,user,profile,map__27822,map__27822__$1,author,created_at,favorites_count,favorited,slug){
return (function (){
var G__27829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350),slug], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27829) : re_frame.core.dispatch.call(null,G__27829));
});})(loading,user,profile,map__27822,map__27822__$1,author,created_at,favorites_count,favorited,slug))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not(favorited))?"btn-outline-primary":(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-heart","i.ion-heart",-2106657443)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(favorited)?" Unfavorite Post ":" Favorite Post ")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.counter","span.counter",865661220),"(",favorites_count,")"], null)], null)], null)))], null);
});
conduit.views.articles_preview = (function conduit$views$articles_preview(p__27858){
var map__27859 = p__27858;
var map__27859__$1 = ((((!((map__27859 == null)))?(((((map__27859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27859):map__27859);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var createdAt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"createdAt","createdAt",-936788));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"title","title",636505583));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var favoritesCount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"favoritesCount","favoritesCount",-1679335567));
var favorited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"favorited","favorited",-1400766725));
var tagList = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27859__$1,new cljs.core.Keyword(null,"tagList","tagList",-1630558309));
var loading = cljs.core.deref((function (){var G__27861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27861) : re_frame.core.subscribe.call(null,G__27861));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-preview","div.article-preview",-777546431),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-meta","div.article-meta",608522075),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.info","div.info",-1023482078),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.author","a.author",-1515189816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date","span.date",2108360793),conduit.views.format_date(createdAt)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-sm.pull-xs-right","button.btn.btn-primary.btn-sm.pull-xs-right",1082961398),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (loading,map__27859,map__27859__$1,description,slug,createdAt,title,author,favoritesCount,favorited,tagList){
return (function (){
var G__27862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350),slug], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27862) : re_frame.core.dispatch.call(null,G__27862));
});})(loading,map__27859,map__27859__$1,description,slug,createdAt,title,author,favoritesCount,favorited,tagList))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not(favorited))?"btn-outline-primary":(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-heart","i.ion-heart",-2106657443)," "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),favoritesCount], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.preview-link","a.preview-link",-1615261051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/article/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Read more ..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.tags_list,tagList], null)], null)], null);
});
conduit.views.articles_list = (function conduit$views$articles_list(articles,loading_articles){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(loading_articles)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-preview","div.article-preview",-777546431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading articles ..."], null)], null):((cljs.core.empty_QMARK_(articles))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-preview","div.article-preview",-777546431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No articles are here... yet."], null)], null):(function (){var iter__4292__auto__ = (function conduit$views$articles_list_$_iter__27869(s__27870){
return (new cljs.core.LazySeq(null,(function (){
var s__27870__$1 = s__27870;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27870__$1);
if(temp__5457__auto__){
var s__27870__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27870__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27870__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27872 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27871 = (0);
while(true){
if((i__27871 < size__4291__auto__)){
var article = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27871);
cljs.core.chunk_append(b__27872,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_preview,article], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article)], null)));

var G__27878 = (i__27871 + (1));
i__27871 = G__27878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27872),conduit$views$articles_list_$_iter__27869(cljs.core.chunk_rest(s__27870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27872),null);
}
} else {
var article = cljs.core.first(s__27870__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_preview,article], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article)], null)),conduit$views$articles_list_$_iter__27869(cljs.core.rest(s__27870__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(articles);
})()))], null);
});
conduit.views.errors_list = (function conduit$views$errors_list(errors){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.error-messages","ul.error-messages",-1651696846),(function (){var iter__4292__auto__ = (function conduit$views$errors_list_$_iter__27879(s__27880){
return (new cljs.core.LazySeq(null,(function (){
var s__27880__$1 = s__27880;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27880__$1);
if(temp__5457__auto__){
var s__27880__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27880__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27880__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27882 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27881 = (0);
while(true){
if((i__27881 < size__4291__auto__)){
var vec__27887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27881);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27887,(0),null);
var vec__27890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27887,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27890,(0),null);
cljs.core.chunk_append(b__27882,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__27903 = (i__27881 + (1));
i__27881 = G__27903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27882),conduit$views$errors_list_$_iter__27879(cljs.core.chunk_rest(s__27880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27882),null);
}
} else {
var vec__27893 = cljs.core.first(s__27880__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27893,(0),null);
var vec__27896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27893,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27896,(0),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),conduit$views$errors_list_$_iter__27879(cljs.core.rest(s__27880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(errors);
})()], null);
});
conduit.views.header = (function conduit$views$header(){
var user = cljs.core.deref((function (){var G__27904 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27904) : re_frame.core.subscribe.call(null,G__27904));
})());
var active_page = cljs.core.deref((function (){var G__27905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27905) : re_frame.core.subscribe.call(null,G__27905));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-light","nav.navbar.navbar-light",1619510692),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"conduit"], null),((cljs.core.empty_QMARK_(user))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.pull-xs-right","ul.nav.navbar-nav.pull-xs-right",282714831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,new cljs.core.Keyword(null,"home","home",-74557309)))?"active":null)], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/login",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,new cljs.core.Keyword(null,"login","login",55217519)))?"active":null)], null),"Sign in"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/register",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,new cljs.core.Keyword(null,"register","register",1968522516)))?"active":null)], null),"Sign up"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.pull-xs-right","ul.nav.navbar-nav.pull-xs-right",282714831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,new cljs.core.Keyword(null,"home","home",-74557309)))?"active":null)], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/editor",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,new cljs.core.Keyword(null,"editor","editor",-989377770)))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-compose","i.ion-compose",-172454223),"New Article"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/settings",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,new cljs.core.Keyword(null,"settings","settings",1556144875)))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-gear-a","i.ion-gear-a",-374816109),"Settings"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,new cljs.core.Keyword(null,"profile","profile",-545963874)))?"active":null)], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.user-pic","img.user-pic",121518549),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(user)], null)], null)], null)], null)], null))], null)], null);
});
conduit.views.footer = (function conduit$views$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.logo-font","a.logo-font",-533151632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"conduit"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.attribution","span.attribution",554584640),"An interactive learning project from ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://thinkster.io"], null),"Thinkster"], null),". Code & design licensed under MIT."], null)], null)], null);
});
conduit.views.get_articles = (function conduit$views$get_articles(event,params){
event.preventDefault();

var G__27913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795),params], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27913) : re_frame.core.dispatch.call(null,G__27913));
});
conduit.views.get_feed_articles = (function conduit$views$get_feed_articles(event,params){
event.preventDefault();

var G__27916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-feed-articles","get-feed-articles",-763210307),params], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27916) : re_frame.core.dispatch.call(null,G__27916));
});
conduit.views.home = (function conduit$views$home(){
var filter = cljs.core.deref((function (){var G__27922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27922) : re_frame.core.subscribe.call(null,G__27922));
})());
var tags = cljs.core.deref((function (){var G__27926 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27926) : re_frame.core.subscribe.call(null,G__27926));
})());
var loading = cljs.core.deref((function (){var G__27927 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27927) : re_frame.core.subscribe.call(null,G__27927));
})());
var articles = cljs.core.deref((function (){var G__27928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27928) : re_frame.core.subscribe.call(null,G__27928));
})());
var articles_count = cljs.core.deref((function (){var G__27929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles-count","articles-count",-222608021)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27929) : re_frame.core.subscribe.call(null,G__27929));
})());
var user = cljs.core.deref((function (){var G__27930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27930) : re_frame.core.subscribe.call(null,G__27930));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.home-page","div.home-page",149758333),((cljs.core.empty_QMARK_(user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner","div.banner",1606340820),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.logo-font","h1.logo-font",865184032),"conduit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A place to share your knowledge."], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",-1879980145),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.feed-toggle","div.feed-toggle",-806399334),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-pills.outline-active","ul.nav.nav-pills.outline-active",-1626568259),((cljs.core.empty_QMARK_(user))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(filter))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (filter,tags,loading,articles,articles_count,user){
return (function (p1__27917_SHARP_){
return conduit.views.get_feed_articles(p1__27917_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null));
});})(filter,tags,loading,articles,articles_count,user))
], null),"Your Feed"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(filter);
}
})())?null:"active"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (filter,tags,loading,articles,articles_count,user){
return (function (p1__27918_SHARP_){
return conduit.views.get_articles(p1__27918_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null));
});})(filter,tags,loading,articles,articles_count,user))
], null),"Global Feed"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link.active","a.nav-link.active",-1128434498),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-pound","i.ion-pound",85408038)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter))].join('')], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_list,articles,new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(loading)], null),(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(loading);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (articles_count < (10));
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.pagination","ul.pagination",616876298),(function (){var iter__4292__auto__ = ((function (filter,tags,loading,articles,articles_count,user){
return (function conduit$views$home_$_iter__27935(s__27936){
return (new cljs.core.LazySeq(null,((function (filter,tags,loading,articles,articles_count,user){
return (function (){
var s__27936__$1 = s__27936;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27936__$1);
if(temp__5457__auto__){
var s__27936__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27936__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27936__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27938 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27937 = (0);
while(true){
if((i__27937 < size__4291__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27937);
cljs.core.chunk_append(b__27938,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.page-item","li.page-item",-574487083),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((offset * (10)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(filter)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27937,offset,c__4290__auto__,size__4291__auto__,b__27938,s__27936__$2,temp__5457__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__27919_SHARP_){
return conduit.views.get_articles(p1__27919_SHARP_,(cljs.core.truth_(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"offset","offset",296498311),(offset * (10)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),(offset * (10)),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null)));
});})(i__27937,offset,c__4290__auto__,size__4291__auto__,b__27938,s__27936__$2,temp__5457__auto__,filter,tags,loading,articles,articles_count,user))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.page-link","a.page-link",-66343279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),""], null),((1) + offset)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),offset], null)));

var G__27963 = (i__27937 + (1));
i__27937 = G__27963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27938),conduit$views$home_$_iter__27935(cljs.core.chunk_rest(s__27936__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27938),null);
}
} else {
var offset = cljs.core.first(s__27936__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.page-item","li.page-item",-574487083),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((offset * (10)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(filter)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (offset,s__27936__$2,temp__5457__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__27919_SHARP_){
return conduit.views.get_articles(p1__27919_SHARP_,(cljs.core.truth_(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"offset","offset",296498311),(offset * (10)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),(offset * (10)),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null)));
});})(offset,s__27936__$2,temp__5457__auto__,filter,tags,loading,articles,articles_count,user))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.page-link","a.page-link",-66343279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),""], null),((1) + offset)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),offset], null)),conduit$views$home_$_iter__27935(cljs.core.rest(s__27936__$2)));
}
} else {
return null;
}
break;
}
});})(filter,tags,loading,articles,articles_count,user))
,null,null));
});})(filter,tags,loading,articles,articles_count,user))
;
return iter__4292__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((articles_count / (10))));
})()], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar","div.sidebar",1454675964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Popular Tags"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading tags ..."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag-list","div.tag-list",-323342005),(function (){var iter__4292__auto__ = ((function (filter,tags,loading,articles,articles_count,user){
return (function conduit$views$home_$_iter__27943(s__27944){
return (new cljs.core.LazySeq(null,((function (filter,tags,loading,articles,articles_count,user){
return (function (){
var s__27944__$1 = s__27944;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27944__$1);
if(temp__5457__auto__){
var s__27944__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27944__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__27944__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__27946 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__27945 = (0);
while(true){
if((i__27945 < size__4291__auto__)){
var tag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__27945);
cljs.core.chunk_append(b__27946,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag-pill.tag-default","a.tag-pill.tag-default",531342910),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27945,tag,c__4290__auto__,size__4291__auto__,b__27946,s__27944__$2,temp__5457__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__27920_SHARP_){
return conduit.views.get_articles(p1__27920_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"limit","limit",-1355822363),(10),new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null));
});})(i__27945,tag,c__4290__auto__,size__4291__auto__,b__27946,s__27944__$2,temp__5457__auto__,filter,tags,loading,articles,articles_count,user))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)));

var G__27976 = (i__27945 + (1));
i__27945 = G__27976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27946),conduit$views$home_$_iter__27943(cljs.core.chunk_rest(s__27944__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27946),null);
}
} else {
var tag = cljs.core.first(s__27944__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag-pill.tag-default","a.tag-pill.tag-default",531342910),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tag,s__27944__$2,temp__5457__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__27920_SHARP_){
return conduit.views.get_articles(p1__27920_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"limit","limit",-1355822363),(10),new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null));
});})(tag,s__27944__$2,temp__5457__auto__,filter,tags,loading,articles,articles_count,user))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)),conduit$views$home_$_iter__27943(cljs.core.rest(s__27944__$2)));
}
} else {
return null;
}
break;
}
});})(filter,tags,loading,articles,articles_count,user))
,null,null));
});})(filter,tags,loading,articles,articles_count,user))
;
return iter__4292__auto__(tags);
})()], null))], null)], null)], null)], null)], null);
});
conduit.views.login_user = (function conduit$views$login_user(event,credentials){
event.preventDefault();

var G__27985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27985) : re_frame.core.dispatch.call(null,G__27985));
});
conduit.views.login = (function conduit$views$login(){
var default$ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),""], null);
var credentials = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
return ((function (default$,credentials){
return (function (){
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(credentials),new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(credentials),new cljs.core.Keyword(null,"password","password",417022471));
var errors = cljs.core.deref((function (){var G__27993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27993) : re_frame.core.subscribe.call(null,G__27993));
})());
var loading = cljs.core.deref((function (){var G__27994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27994) : re_frame.core.subscribe.call(null,G__27994));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auth-page","div.auth-page",441574278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.offset-md-3.col-xs-12","div.col-md-6.offset-md-3.col-xs-12",-1108757189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xs-center","h1.text-xs-center",-588320608),"Sign in"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xs-center","p.text-xs-center",1025410954),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/register"], null),"Need an account?"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(errors))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(errors)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (email,password,errors,loading,default$,credentials){
return (function (p1__27986_SHARP_){
return conduit.views.login_user(p1__27986_SHARP_,cljs.core.deref(credentials));
});})(email,password,errors,loading,default$,credentials))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email",new cljs.core.Keyword(null,"value","value",305978217),email,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (email,password,errors,loading,default$,credentials){
return (function (p1__27987_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(credentials,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),p1__27987_SHARP_.target.value);
});})(email,password,errors,loading,default$,credentials))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"value","value",305978217),password,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (email,password,errors,loading,default$,credentials){
return (function (p1__27988_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(credentials,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__27988_SHARP_.target.value);
});})(email,password,errors,loading,default$,credentials))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-primary.pull-xs-right","button.btn.btn-lg.btn-primary.pull-xs-right",1712770378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),"Sign in"], null)], null)], null)], null)], null)], null);
});
;})(default$,credentials))
});
conduit.views.register_user = (function conduit$views$register_user(event,registration){
event.preventDefault();

var G__28009 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-user","register-user",516261094),registration], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28009) : re_frame.core.dispatch.call(null,G__28009));
});
conduit.views.register = (function conduit$views$register(){
var default$ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),""], null);
var registration = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
return ((function (default$,registration){
return (function (){
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(registration),new cljs.core.Keyword(null,"username","username",1605666410));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(registration),new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(registration),new cljs.core.Keyword(null,"password","password",417022471));
var loading = cljs.core.deref((function (){var G__28014 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28014) : re_frame.core.subscribe.call(null,G__28014));
})());
var errors = cljs.core.deref((function (){var G__28015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28015) : re_frame.core.subscribe.call(null,G__28015));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auth-page","div.auth-page",441574278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.offset-md-3.col-xs-12","div.col-md-6.offset-md-3.col-xs-12",-1108757189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xs-center","h1.text-xs-center",-588320608),"Sign up"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xs-center","p.text-xs-center",1025410954),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/login"], null),"Have an account?"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"register-user","register-user",516261094).cljs$core$IFn$_invoke$arity$1(errors))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,new cljs.core.Keyword(null,"register-user","register-user",516261094).cljs$core$IFn$_invoke$arity$1(errors)], null):null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (username,email,password,loading,errors,default$,registration){
return (function (p1__28010_SHARP_){
return conduit.views.register_user(p1__28010_SHARP_,cljs.core.deref(registration));
});})(username,email,password,loading,errors,default$,registration))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your Name",new cljs.core.Keyword(null,"value","value",305978217),username,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username,email,password,loading,errors,default$,registration){
return (function (p1__28011_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registration,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__28011_SHARP_.target.value);
});})(username,email,password,loading,errors,default$,registration))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"register-user","register-user",516261094).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email",new cljs.core.Keyword(null,"value","value",305978217),email,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username,email,password,loading,errors,default$,registration){
return (function (p1__28012_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registration,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),p1__28012_SHARP_.target.value);
});})(username,email,password,loading,errors,default$,registration))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"register-user","register-user",516261094).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"value","value",305978217),password,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username,email,password,loading,errors,default$,registration){
return (function (p1__28013_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registration,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__28013_SHARP_.target.value);
});})(username,email,password,loading,errors,default$,registration))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"register-user","register-user",516261094).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-primary.pull-xs-right","button.btn.btn-lg.btn-primary.pull-xs-right",1712770378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"register-user","register-user",516261094).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),"Sign up"], null)], null)], null)], null)], null)], null);
});
;})(default$,registration))
});
conduit.views.profile = (function conduit$views$profile(){
var profile = cljs.core.deref((function (){var G__28048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28048) : re_frame.core.subscribe.call(null,G__28048));
})());
var filter = cljs.core.deref((function (){var G__28049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28049) : re_frame.core.subscribe.call(null,G__28049));
})());
var loading = cljs.core.deref((function (){var G__28050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28050) : re_frame.core.subscribe.call(null,G__28050));
})());
var articles = cljs.core.deref((function (){var G__28051 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28051) : re_frame.core.subscribe.call(null,G__28051));
})());
var user = cljs.core.deref((function (){var G__28052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28052) : re_frame.core.subscribe.call(null,G__28052));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-page","div.profile-page",1008090497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.user-info","div.user-info",-1795367347),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12.col-md-10.offset-md-1","div.col-xs-12.col-md-10.offset-md-1",-598972082),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.user-img","img.user-img",-1067609457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(profile)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"bio","bio",-331851886).cljs$core$IFn$_invoke$arity$1(profile)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-secondary.action-btn","a.btn.btn-sm.btn-outline-secondary.action-btn",-1402821230),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/settings"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-gear-a","i.ion-gear-a",-374816109)], null)," Edit Profile Settings"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.action-btn.btn-outline-secondary","button.btn.btn-sm.action-btn.btn-outline-secondary",1089656337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (profile,filter,loading,articles,user){
return (function (){
var G__28053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28053) : re_frame.core.dispatch.call(null,G__28053));
});})(profile,filter,loading,articles,user))
,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"following","following",-2049193617).cljs$core$IFn$_invoke$arity$1(profile))?"ion-minus-round":"ion-plus-round")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"following","following",-2049193617).cljs$core$IFn$_invoke$arity$1(profile))?[" Unfollow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile))].join(''):[" Follow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile))].join(''))], null)], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12.col-md-10.offset-md-1","div.col-xs-12.col-md-10.offset-md-1",-598972082),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.articles-toggle","div.articles-toggle",-1497777454),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-pills.outline-active","ul.nav.nav-pills.outline-active",-1626568259),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(filter))?" active":null)], null),"My Articles"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile)),"/favorites"].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(filter))?"nav-link active":null)], null),"Favorited Articles"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_list,articles,new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(loading)], null)], null)], null)], null)], null);
});
conduit.views.logout_user = (function conduit$views$logout_user(event){
event.preventDefault();

var G__28079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28079) : re_frame.core.dispatch.call(null,G__28079));
});
conduit.views.update_user = (function conduit$views$update_user(event,update){
event.preventDefault();

var G__28083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-user","update-user",-92427001),update], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28083) : re_frame.core.dispatch.call(null,G__28083));
});
conduit.views.settings = (function conduit$views$settings(){
var map__28102 = cljs.core.deref((function (){var G__28103 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28103) : re_frame.core.subscribe.call(null,G__28103));
})());
var map__28102__$1 = ((((!((map__28102 == null)))?(((((map__28102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28102):map__28102);
var user = map__28102__$1;
var bio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28102__$1,new cljs.core.Keyword(null,"bio","bio",-331851886));
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28102__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28102__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28102__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var default$ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bio","bio",-331851886),bio,new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"username","username",1605666410),username], null);
var loading = cljs.core.deref((function (){var G__28110 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28110) : re_frame.core.subscribe.call(null,G__28110));
})());
var user_update = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-page","div.settings-page",854633241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.offset-md-3.col-xs-12","div.col-md-6.offset-md-3.col-xs-12",-1108757189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xs-center","h1.text-xs-center",-588320608),"Your Settings"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"URL of profile picture",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__28095_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,new cljs.core.Keyword(null,"image","image",-58725096),p1__28095_SHARP_.target.value);
});})(map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your Name",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__28096_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__28096_SHARP_.target.value);
});})(map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"update-user","update-user",-92427001).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control.form-control-lg","textarea.form-control.form-control-lg",-1497847908),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rows","rows",850049680),"8",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Short bio about you",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"bio","bio",-331851886).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__28097_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,new cljs.core.Keyword(null,"bio","bio",-331851886),p1__28097_SHARP_.target.value);
});})(map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"update-user","update-user",-92427001).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__28098_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),p1__28098_SHARP_.target.value);
});})(map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"update-user","update-user",-92427001).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"default-value","default-value",232220170),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__28099_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__28099_SHARP_.target.value);
});})(map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"update-user","update-user",-92427001).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-primary.pull-xs-right","button.btn.btn-lg.btn-primary.pull-xs-right",1712770378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__28100_SHARP_){
return conduit.views.update_user(p1__28100_SHARP_,cljs.core.deref(user_update));
});})(map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update))
,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"update-user","update-user",-92427001).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),"Update Settings"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-outline-danger","button.btn.btn-outline-danger",-453697678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__28101_SHARP_){
return conduit.views.logout_user(p1__28101_SHARP_);
});})(map__28102,map__28102__$1,user,bio,email,image,username,default$,loading,user_update))
], null),"Or click here to logout."], null)], null)], null)], null)], null);
});
conduit.views.upsert_article = (function conduit$views$upsert_article(event,content,slug){
event.preventDefault();

var title = clojure.string.trim((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());
var description = clojure.string.trim((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());
var body = clojure.string.trim((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());
var tagList = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tagList","tagList",-1630558309).cljs$core$IFn$_invoke$arity$1(content),/ /);
var G__28151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert-article","upsert-article",-947179448),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slug","slug",2029314850),slug,new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"tagList","tagList",-1630558309),tagList], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28151) : re_frame.core.dispatch.call(null,G__28151));
});
conduit.views.editor = (function conduit$views$editor(){
var map__28170 = cljs.core.deref((function (){var G__28171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-article","active-article",-2143954133)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28171) : re_frame.core.subscribe.call(null,G__28171));
})());
var map__28170__$1 = ((((!((map__28170 == null)))?(((((map__28170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28170):map__28170);
var active_article = map__28170__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28170__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28170__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28170__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var tagList = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28170__$1,new cljs.core.Keyword(null,"tagList","tagList",-1630558309));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28170__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var default$ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"tagList","tagList",-1630558309),tagList], null);
var content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
return ((function (map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (){
var errors = cljs.core.deref((function (){var G__28174 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28174) : re_frame.core.subscribe.call(null,G__28174));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-page","div.editor-page",-470854255),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-10.offset-md-1.col-xs-12","div.col-md-10.offset-md-1.col-xs-12",-2091211259),(cljs.core.truth_(new cljs.core.Keyword(null,"upsert-article","upsert-article",-947179448).cljs$core$IFn$_invoke$arity$1(errors))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,new cljs.core.Keyword(null,"upsert-article","upsert-article",-947179448).cljs$core$IFn$_invoke$arity$1(errors)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Article Title",new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (errors,map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (p1__28164_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),p1__28164_SHARP_.target.value);
});})(errors,map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What's this article about?",new cljs.core.Keyword(null,"default-value","default-value",232220170),description,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (errors,map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (p1__28165_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,new cljs.core.Keyword(null,"description","description",-1428560544),p1__28165_SHARP_.target.value);
});})(errors,map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),"8",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write your article (in markdown)",new cljs.core.Keyword(null,"default-value","default-value",232220170),body,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (errors,map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (p1__28166_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,new cljs.core.Keyword(null,"body","body",-2049205669),p1__28166_SHARP_.target.value);
});})(errors,map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter tags",new cljs.core.Keyword(null,"default-value","default-value",232220170),tagList,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (errors,map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (p1__28167_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,new cljs.core.Keyword(null,"tagList","tagList",-1630558309),p1__28167_SHARP_.target.value);
});})(errors,map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag-list","div.tag-list",-323342005)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-primary.pull-xs-right","button.btn.btn-lg.btn-primary.pull-xs-right",1712770378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (errors,map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (p1__28168_SHARP_){
return conduit.views.upsert_article(p1__28168_SHARP_,cljs.core.deref(content),slug);
});})(errors,map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content))
], null),(cljs.core.truth_(active_article)?"Update Article":"Publish Article")], null)], null)], null)], null)], null)], null)], null);
});
;})(map__28170,map__28170__$1,active_article,title,description,body,tagList,slug,default$,content))
});
conduit.views.post_comment = (function conduit$views$post_comment(event,comment,default$){
event.preventDefault();

var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(comment),new cljs.core.Keyword(null,"body","body",-2049205669));
var G__28220_28222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-comment","post-comment",-185302743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),body], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28220_28222) : re_frame.core.dispatch.call(null,G__28220_28222));

return cljs.core.reset_BANG_(comment,default$);
});
conduit.views.article = (function conduit$views$article(){
var default$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
var comment = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
return ((function (default$,comment){
return (function (){
var active_article = cljs.core.deref((function (){var G__28230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-article","active-article",-2143954133)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28230) : re_frame.core.subscribe.call(null,G__28230));
})());
var user = cljs.core.deref((function (){var G__28236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28236) : re_frame.core.subscribe.call(null,G__28236));
})());
var comments = cljs.core.deref((function (){var G__28238 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28238) : re_frame.core.subscribe.call(null,G__28238));
})());
var errors = cljs.core.deref((function (){var G__28239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28239) : re_frame.core.subscribe.call(null,G__28239));
})());
var loading = cljs.core.deref((function (){var G__28240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28240) : re_frame.core.subscribe.call(null,G__28240));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-page","div.article-page",-240223410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner","div.banner",1606340820),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(active_article)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.article_meta,active_article], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.article-content","div.row.article-content",2097173588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(active_article)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.tags_list,new cljs.core.Keyword(null,"tagList","tagList",-1630558309).cljs$core$IFn$_invoke$arity$1(active_article)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-actions","div.article-actions",-865344986),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.article_meta,active_article], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12.col-md-8.offset-md-2","div.col-xs-12.col-md-8.offset-md-2",287903909),(cljs.core.truth_(new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(errors))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(errors)], null):null),((!(cljs.core.empty_QMARK_(user)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.card.comment-form","form.card.comment-form",414139020),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-block","div.card-block",1886467105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write a comment...",new cljs.core.Keyword(null,"rows","rows",850049680),"3",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comment)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (active_article,user,comments,errors,loading,default$,comment){
return (function (p1__28224_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comment,cljs.core.assoc,new cljs.core.Keyword(null,"body","body",-2049205669),p1__28224_SHARP_.target.value);
});})(active_article,user,comments,errors,loading,default$,comment))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-footer","div.card-footer",1034080687),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.comment-author-img","img.comment-author-img",-1780420511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(user)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-primary","button.btn.btn-sm.btn-primary",1703461621),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_article,user,comments,errors,loading,default$,comment){
return (function (p1__28225_SHARP_){
return conduit.views.post_comment(p1__28225_SHARP_,comment,default$);
});})(active_article,user,comments,errors,loading,default$,comment))
], null),"Post Comment"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/register"], null),"Sign up"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/login"], null),"Sign in"], null)," to add comments on this article."], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading comments ..."], null)], null):((cljs.core.empty_QMARK_(comments))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null):(function (){var iter__4292__auto__ = ((function (active_article,user,comments,errors,loading,default$,comment){
return (function conduit$views$article_$_iter__28245(s__28246){
return (new cljs.core.LazySeq(null,((function (active_article,user,comments,errors,loading,default$,comment){
return (function (){
var s__28246__$1 = s__28246;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28246__$1);
if(temp__5457__auto__){
var s__28246__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28246__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__28246__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__28248 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__28247 = (0);
while(true){
if((i__28247 < size__4291__auto__)){
var map__28249 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__28247);
var map__28249__$1 = ((((!((map__28249 == null)))?(((((map__28249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28249):map__28249);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28249__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var createdAt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28249__$1,new cljs.core.Keyword(null,"createdAt","createdAt",-936788));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28249__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28249__$1,new cljs.core.Keyword(null,"author","author",2111686192));
cljs.core.chunk_append(b__28248,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-block","div.card-block",1886467105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.card-text","p.card-text",815200113),body], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-footer","div.card-footer",1034080687),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.comment-author","a.comment-author",-1609002409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.comment-author-img","img.comment-author-img",-1780420511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.comment-author","a.comment-author",-1609002409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date-posted","span.date-posted",-190109561),conduit.views.format_date(createdAt)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mod-options","span.mod-options",1197037963),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28247,map__28249,map__28249__$1,id,createdAt,body,author,c__4290__auto__,size__4291__auto__,b__28248,s__28246__$2,temp__5457__auto__,active_article,user,comments,errors,loading,default$,comment){
return (function (){
var G__28259 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-comment","delete-comment",701145765),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28259) : re_frame.core.dispatch.call(null,G__28259));
});})(i__28247,map__28249,map__28249__$1,id,createdAt,body,author,c__4290__auto__,size__4291__auto__,b__28248,s__28246__$2,temp__5457__auto__,active_article,user,comments,errors,loading,default$,comment))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-trash-a","i.ion-trash-a",-1489458005)], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__28293 = (i__28247 + (1));
i__28247 = G__28293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28248),conduit$views$article_$_iter__28245(cljs.core.chunk_rest(s__28246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28248),null);
}
} else {
var map__28261 = cljs.core.first(s__28246__$2);
var map__28261__$1 = ((((!((map__28261 == null)))?(((((map__28261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28261):map__28261);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28261__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var createdAt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28261__$1,new cljs.core.Keyword(null,"createdAt","createdAt",-936788));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28261__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28261__$1,new cljs.core.Keyword(null,"author","author",2111686192));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-block","div.card-block",1886467105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.card-text","p.card-text",815200113),body], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-footer","div.card-footer",1034080687),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.comment-author","a.comment-author",-1609002409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.comment-author-img","img.comment-author-img",-1780420511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.comment-author","a.comment-author",-1609002409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date-posted","span.date-posted",-190109561),conduit.views.format_date(createdAt)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mod-options","span.mod-options",1197037963),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__28261,map__28261__$1,id,createdAt,body,author,s__28246__$2,temp__5457__auto__,active_article,user,comments,errors,loading,default$,comment){
return (function (){
var G__28265 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-comment","delete-comment",701145765),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28265) : re_frame.core.dispatch.call(null,G__28265));
});})(map__28261,map__28261__$1,id,createdAt,body,author,s__28246__$2,temp__5457__auto__,active_article,user,comments,errors,loading,default$,comment))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-trash-a","i.ion-trash-a",-1489458005)], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),conduit$views$article_$_iter__28245(cljs.core.rest(s__28246__$2)));
}
} else {
return null;
}
break;
}
});})(active_article,user,comments,errors,loading,default$,comment))
,null,null));
});})(active_article,user,comments,errors,loading,default$,comment))
;
return iter__4292__auto__(comments);
})()))], null)], null)], null)], null);
});
;})(default$,comment))
});
conduit.views.pages = (function conduit$views$pages(page_name){
var G__28302 = page_name;
var G__28302__$1 = (((G__28302 instanceof cljs.core.Keyword))?G__28302.fqn:null);
switch (G__28302__$1) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.home], null);

break;
case "login":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.login], null);

break;
case "register":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.register], null);

break;
case "profile":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.profile], null);

break;
case "settings":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.settings], null);

break;
case "editor":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.editor], null);

break;
case "article":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.article], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.home], null);

}
});
conduit.views.conduit_app = (function conduit$views$conduit_app(){
var active_page = cljs.core.deref((function (){var G__28311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28311) : re_frame.core.subscribe.call(null,G__28311));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.pages,active_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.footer], null)], null);
});

//# sourceMappingURL=conduit.views.js.map
