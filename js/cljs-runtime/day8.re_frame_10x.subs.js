goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
var G__26618_26620 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__26619_26621 = ((function (G__26618_26620){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__26618_26620))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26618_26620,G__26619_26621) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26618_26620,G__26619_26621));
var G__26622_26626 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__26623_26627 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26624_26628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__26625_26629 = ((function (G__26622_26626,G__26623_26627,G__26624_26628){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__26622_26626,G__26623_26627,G__26624_26628))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26622_26626,G__26623_26627,G__26624_26628,G__26625_26629) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26622_26626,G__26623_26627,G__26624_26628,G__26625_26629));
var G__26630_26634 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__26631_26635 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26632_26636 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__26633_26637 = ((function (G__26630_26634,G__26631_26635,G__26632_26636){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__26630_26634,G__26631_26635,G__26632_26636))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26630_26634,G__26631_26635,G__26632_26636,G__26633_26637) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26630_26634,G__26631_26635,G__26632_26636,G__26633_26637));
var G__26638_26642 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__26639_26643 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26640_26644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__26641_26645 = ((function (G__26638_26642,G__26639_26643,G__26640_26644){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__26638_26642,G__26639_26643,G__26640_26644))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26638_26642,G__26639_26643,G__26640_26644,G__26641_26645) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26638_26642,G__26639_26643,G__26640_26644,G__26641_26645));
var G__26646_26650 = new cljs.core.Keyword("settings","paused?","settings/paused?",611315548);
var G__26647_26651 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26648_26652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__26649_26653 = ((function (G__26646_26650,G__26647_26651,G__26648_26652){
return (function (settings,_){
return new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__26646_26650,G__26647_26651,G__26648_26652))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26646_26650,G__26647_26651,G__26648_26652,G__26649_26653) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26646_26650,G__26647_26651,G__26648_26652,G__26649_26653));
var G__26654_26658 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__26655_26659 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26656_26660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__26657_26661 = ((function (G__26654_26658,G__26655_26659,G__26656_26660){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__26654_26658,G__26655_26659,G__26656_26660))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26654_26658,G__26655_26659,G__26656_26660,G__26657_26661) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26654_26658,G__26655_26659,G__26656_26660,G__26657_26661));
var G__26662_26666 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__26663_26667 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26664_26668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__26665_26669 = ((function (G__26662_26666,G__26663_26667,G__26664_26668){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__26662_26666,G__26663_26667,G__26664_26668))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26662_26666,G__26663_26667,G__26664_26668,G__26665_26669) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26662_26666,G__26663_26667,G__26664_26668,G__26665_26669));
var G__26670_26674 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__26671_26675 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26672_26676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__26673_26677 = ((function (G__26670_26674,G__26671_26675,G__26672_26676){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__26670_26674,G__26671_26675,G__26672_26676))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26670_26674,G__26671_26675,G__26672_26676,G__26673_26677) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26670_26674,G__26671_26675,G__26672_26676,G__26673_26677));
var G__26678_26682 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__26679_26683 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26680_26684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__26681_26685 = ((function (G__26678_26682,G__26679_26683,G__26680_26684){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__26678_26682,G__26679_26683,G__26680_26684))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26678_26682,G__26679_26683,G__26680_26684,G__26681_26685) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26678_26682,G__26679_26683,G__26680_26684,G__26681_26685));
var G__26686_26690 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__26687_26691 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26688_26692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__26689_26693 = ((function (G__26686_26690,G__26687_26691,G__26688_26692){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__26686_26690,G__26687_26691,G__26688_26692))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26686_26690,G__26687_26691,G__26688_26692,G__26689_26693) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26686_26690,G__26687_26691,G__26688_26692,G__26689_26693));
var G__26694_26698 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__26695_26699 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26696_26700 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__26697_26701 = ((function (G__26694_26698,G__26695_26699,G__26696_26700){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__26694_26698,G__26695_26699,G__26696_26700))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26694_26698,G__26695_26699,G__26696_26700,G__26697_26701) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26694_26698,G__26695_26699,G__26696_26700,G__26697_26701));
var G__26702_26704 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__26703_26705 = ((function (G__26702_26704){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__26702_26704))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26702_26704,G__26703_26705) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26702_26704,G__26703_26705));
var G__26706_26710 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__26707_26711 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26708_26712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__26709_26713 = ((function (G__26706_26710,G__26707_26711,G__26708_26712){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__26706_26710,G__26707_26711,G__26708_26712))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26706_26710,G__26707_26711,G__26708_26712,G__26709_26713) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26706_26710,G__26707_26711,G__26708_26712,G__26709_26713));
var G__26714_26718 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__26715_26719 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26716_26720 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__26717_26721 = ((function (G__26714_26718,G__26715_26719,G__26716_26720){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__26714_26718,G__26715_26719,G__26716_26720))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26714_26718,G__26715_26719,G__26716_26720,G__26717_26721) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26714_26718,G__26715_26719,G__26716_26720,G__26717_26721));
var G__26723_26727 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__26724_26728 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26725_26729 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__26726_26730 = ((function (G__26723_26727,G__26724_26728,G__26725_26729){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__26723_26727,G__26724_26728,G__26725_26729){
return (function (p1__26722_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__26722_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__26722_SHARP_));
});})(G__26723_26727,G__26724_26728,G__26725_26729))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__26723_26727,G__26724_26728,G__26725_26729))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26723_26727,G__26724_26728,G__26725_26729,G__26726_26730) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26723_26727,G__26724_26728,G__26725_26729,G__26726_26730));
var G__26731_26735 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__26732_26736 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26733_26737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__26734_26738 = ((function (G__26731_26735,G__26732_26736,G__26733_26737){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__26731_26735,G__26732_26736,G__26733_26737))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26731_26735,G__26732_26736,G__26733_26737,G__26734_26738) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26731_26735,G__26732_26736,G__26733_26737,G__26734_26738));
var G__26739_26743 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__26740_26744 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26741_26745 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__26742_26746 = ((function (G__26739_26743,G__26740_26744,G__26741_26745){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__26739_26743,G__26740_26744,G__26741_26745))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26739_26743,G__26740_26744,G__26741_26745,G__26742_26746) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26739_26743,G__26740_26744,G__26741_26745,G__26742_26746));
var G__26747_26755 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__26748_26756 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26749_26757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__26750_26758 = ((function (G__26747_26755,G__26748_26756,G__26749_26757){
return (function (expansions,p__26751){
var vec__26752 = p__26751;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26752,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26752,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__26747_26755,G__26748_26756,G__26749_26757))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26747_26755,G__26748_26756,G__26749_26757,G__26750_26758) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26747_26755,G__26748_26756,G__26749_26757,G__26750_26758));
var G__26759_26763 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__26760_26764 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26761_26765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__26762_26766 = ((function (G__26759_26763,G__26760_26764,G__26761_26765){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__26759_26763,G__26760_26764,G__26761_26765))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26759_26763,G__26760_26764,G__26761_26765,G__26762_26766) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26759_26763,G__26760_26764,G__26761_26765,G__26762_26766));
var G__26767_26769 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__26768_26770 = ((function (G__26767_26769){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26767_26769))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26767_26769,G__26768_26770) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26767_26769,G__26768_26770));
var G__26771_26773 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__26772_26774 = ((function (G__26771_26773){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26771_26773))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26771_26773,G__26772_26774) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26771_26773,G__26772_26774));
var G__26775_26777 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__26776_26778 = ((function (G__26775_26777){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__26775_26777))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26775_26777,G__26776_26778) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26775_26777,G__26776_26778));
var G__26779_26781 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__26780_26782 = ((function (G__26779_26781){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__26779_26781))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26779_26781,G__26780_26782) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26779_26781,G__26780_26782));
var G__26783_26785 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__26784_26786 = ((function (G__26783_26785){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__26783_26785))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26783_26785,G__26784_26786) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26783_26785,G__26784_26786));
var G__26787_26791 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__26788_26792 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26789_26793 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__26790_26794 = ((function (G__26787_26791,G__26788_26792,G__26789_26793){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__26787_26791,G__26788_26792,G__26789_26793))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26787_26791,G__26788_26792,G__26789_26793,G__26790_26794) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26787_26791,G__26788_26792,G__26789_26793,G__26790_26794));
var G__26795_26799 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__26796_26800 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26797_26801 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__26798_26802 = ((function (G__26795_26799,G__26796_26800,G__26797_26801){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__26795_26799,G__26796_26800,G__26797_26801))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26795_26799,G__26796_26800,G__26797_26801,G__26798_26802) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26795_26799,G__26796_26800,G__26797_26801,G__26798_26802));
var G__26803_26821 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__26804_26822 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26805_26823 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__26806_26824 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26807_26825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__26808_26826 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26809_26827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__26810_26828 = ((function (G__26803_26821,G__26804_26822,G__26805_26823,G__26806_26824,G__26807_26825,G__26808_26826,G__26809_26827){
return (function (p__26813,_){
var vec__26815 = p__26813;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26815,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26815,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26815,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__26803_26821,G__26804_26822,G__26805_26823,G__26806_26824,G__26807_26825,G__26808_26826,G__26809_26827))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__26803_26821,G__26804_26822,G__26805_26823,G__26806_26824,G__26807_26825,G__26808_26826,G__26809_26827,G__26810_26828) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26803_26821,G__26804_26822,G__26805_26823,G__26806_26824,G__26807_26825,G__26808_26826,G__26809_26827,G__26810_26828));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__26841,_){
var vec__26842 = p__26841;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26842,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26842,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__26842,traces,filtered_views){
return (function (trace){
var and__3911__auto__ = day8.re_frame_10x.metamorphic.render_QMARK_(trace);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")));
} else {
return and__3911__auto__;
}
});})(munged_ns,vec__26842,traces,filtered_views))
),traces);
});
var G__26848_26855 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__26849_26856 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26850_26857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__26851_26858 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26852_26859 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__26853_26860 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__26848_26855,G__26849_26856,G__26850_26857,G__26851_26858,G__26852_26859,G__26853_26860) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26848_26855,G__26849_26856,G__26850_26857,G__26851_26858,G__26852_26859,G__26853_26860));
var G__26864_26871 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__26865_26872 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26866_26873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__26867_26874 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26868_26875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__26869_26876 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__26864_26871,G__26865_26872,G__26866_26873,G__26867_26874,G__26868_26875,G__26869_26876) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26864_26871,G__26865_26872,G__26866_26873,G__26867_26874,G__26868_26875,G__26869_26876));
var G__26880_26886 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__26881_26887 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26882_26888 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__26883_26889 = ((function (G__26880_26886,G__26881_26887,G__26882_26888){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__26880_26886,G__26881_26887,G__26882_26888))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26880_26886,G__26881_26887,G__26882_26888,G__26883_26889) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26880_26886,G__26881_26887,G__26882_26888,G__26883_26889));
var G__26893_26897 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__26894_26898 = ((function (G__26893_26897){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__26893_26897))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26893_26897,G__26894_26898) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26893_26897,G__26894_26898));
var G__26899_26901 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__26900_26902 = ((function (G__26899_26901){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26899_26901))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26899_26901,G__26900_26902) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26899_26901,G__26900_26902));
var G__26903_26907 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__26904_26908 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26905_26909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__26906_26910 = ((function (G__26903_26907,G__26904_26908,G__26905_26909){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__26903_26907,G__26904_26908,G__26905_26909))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26903_26907,G__26904_26908,G__26905_26909,G__26906_26910) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26903_26907,G__26904_26908,G__26905_26909,G__26906_26910));
var G__26911_26913 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__26912_26914 = ((function (G__26911_26913){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__26911_26913))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__26911_26913,G__26912_26914) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26911_26913,G__26912_26914));
var G__26915_26925 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__26916_26926 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26917_26927 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__26918_26928 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26919_26929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__26920_26930 = ((function (G__26915_26925,G__26916_26926,G__26917_26927,G__26918_26928,G__26919_26929){
return (function (p__26921,_){
var vec__26922 = p__26921;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26922,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26922,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__26915_26925,G__26916_26926,G__26917_26927,G__26918_26928,G__26919_26929))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__26915_26925,G__26916_26926,G__26917_26927,G__26918_26928,G__26919_26929,G__26920_26930) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26915_26925,G__26916_26926,G__26917_26927,G__26918_26928,G__26919_26929,G__26920_26930));
var G__26931_26935 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__26932_26936 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26933_26937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__26934_26938 = ((function (G__26931_26935,G__26932_26936,G__26933_26937){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__26931_26935,G__26932_26936,G__26933_26937))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26931_26935,G__26932_26936,G__26933_26937,G__26934_26938) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26931_26935,G__26932_26936,G__26933_26937,G__26934_26938));
var G__26939_26943 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__26940_26944 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26941_26945 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__26942_26946 = ((function (G__26939_26943,G__26940_26944,G__26941_26945){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__26939_26943,G__26940_26944,G__26941_26945))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26939_26943,G__26940_26944,G__26941_26945,G__26942_26946) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26939_26943,G__26940_26944,G__26941_26945,G__26942_26946));
var G__26947_26951 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__26948_26952 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26949_26953 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__26950_26954 = ((function (G__26947_26951,G__26948_26952,G__26949_26953){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__26947_26951,G__26948_26952,G__26949_26953))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26947_26951,G__26948_26952,G__26949_26953,G__26950_26954) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26947_26951,G__26948_26952,G__26949_26953,G__26950_26954));
var G__26955_26959 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__26956_26960 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26957_26961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__26958_26962 = ((function (G__26955_26959,G__26956_26960,G__26957_26961){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__26955_26959,G__26956_26960,G__26957_26961))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26955_26959,G__26956_26960,G__26957_26961,G__26958_26962) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26955_26959,G__26956_26960,G__26957_26961,G__26958_26962));
var G__26963_26967 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__26964_26968 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26965_26969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__26966_26970 = ((function (G__26963_26967,G__26964_26968,G__26965_26969){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__26963_26967,G__26964_26968,G__26965_26969))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26963_26967,G__26964_26968,G__26965_26969,G__26966_26970) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26963_26967,G__26964_26968,G__26965_26969,G__26966_26970));
var G__26971_26975 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__26972_26976 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26973_26977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__26974_26978 = ((function (G__26971_26975,G__26972_26976,G__26973_26977){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__26971_26975,G__26972_26976,G__26973_26977))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26971_26975,G__26972_26976,G__26973_26977,G__26974_26978) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26971_26975,G__26972_26976,G__26973_26977,G__26974_26978));
var G__26979_26983 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__26980_26984 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26981_26985 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__26982_26986 = ((function (G__26979_26983,G__26980_26984,G__26981_26985){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__26979_26983,G__26980_26984,G__26981_26985))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26979_26983,G__26980_26984,G__26981_26985,G__26982_26986) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26979_26983,G__26980_26984,G__26981_26985,G__26982_26986));
var G__26987_26991 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__26988_26992 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26989_26993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__26990_26994 = ((function (G__26987_26991,G__26988_26992,G__26989_26993){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__26987_26991,G__26988_26992,G__26989_26993))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26987_26991,G__26988_26992,G__26989_26993,G__26990_26994) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26987_26991,G__26988_26992,G__26989_26993,G__26990_26994));
var G__26995_26999 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__26996_27000 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__26997_27001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__26998_27002 = ((function (G__26995_26999,G__26996_27000,G__26997_27001){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__26995_26999,G__26996_27000,G__26997_27001))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__26995_26999,G__26996_27000,G__26997_27001,G__26998_27002) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__26995_26999,G__26996_27000,G__26997_27001,G__26998_27002));
var G__27003_27013 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__27004_27014 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27005_27015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__27006_27016 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27007_27017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__27008_27018 = ((function (G__27003_27013,G__27004_27014,G__27005_27015,G__27006_27016,G__27007_27017){
return (function (p__27009){
var vec__27010 = p__27009;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27010,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27010,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__27003_27013,G__27004_27014,G__27005_27015,G__27006_27016,G__27007_27017))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__27003_27013,G__27004_27014,G__27005_27015,G__27006_27016,G__27007_27017,G__27008_27018) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27003_27013,G__27004_27014,G__27005_27015,G__27006_27016,G__27007_27017,G__27008_27018));
var G__27019_27029 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__27020_27030 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27021_27031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__27022_27032 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27023_27033 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__27024_27034 = ((function (G__27019_27029,G__27020_27030,G__27021_27031,G__27022_27032,G__27023_27033){
return (function (p__27025){
var vec__27026 = p__27025;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27026,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27026,(1),null);
return ((((1) < cljs.core.count(ids))) && (!((current == null))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__27019_27029,G__27020_27030,G__27021_27031,G__27022_27032,G__27023_27033))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__27019_27029,G__27020_27030,G__27021_27031,G__27022_27032,G__27023_27033,G__27024_27034) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27019_27029,G__27020_27030,G__27021_27031,G__27022_27032,G__27023_27033,G__27024_27034));
var G__27035_27039 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__27036_27040 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27037_27041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__27038_27042 = ((function (G__27035_27039,G__27036_27040,G__27037_27041){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__27035_27039,G__27036_27040,G__27037_27041))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27035_27039,G__27036_27040,G__27037_27041,G__27038_27042) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27035_27039,G__27036_27040,G__27037_27041,G__27038_27042));
var G__27044_27048 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__27045_27049 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27046_27050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__27047_27051 = ((function (G__27044_27048,G__27045_27049,G__27046_27050){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__27044_27048,G__27045_27049,G__27046_27050){
return (function (p1__27043_SHARP_){
var or__3922__auto__ = day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__27043_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__27043_SHARP_);
}
});})(G__27044_27048,G__27045_27049,G__27046_27050))
,traces);
});})(G__27044_27048,G__27045_27049,G__27046_27050))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27044_27048,G__27045_27049,G__27046_27050,G__27047_27051) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27044_27048,G__27045_27049,G__27046_27050,G__27047_27051));
var G__27052_27056 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__27053_27057 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27054_27058 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__27055_27059 = ((function (G__27052_27056,G__27053_27057,G__27054_27058){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__27052_27056,G__27053_27057,G__27054_27058))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27052_27056,G__27053_27057,G__27054_27058,G__27055_27059) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27052_27056,G__27053_27057,G__27054_27058,G__27055_27059));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__27066 = arguments.length;
switch (G__27066) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4512__auto__ = [];
var len__4497__auto___27076 = arguments.length;
var i__4498__auto___27077 = (0);
while(true){
if((i__4498__auto___27077 < len__4497__auto___27076)){
args_arr__4512__auto__.push((arguments[i__4498__auto___27077]));

var G__27078 = (i__4498__auto___27077 + (1));
i__4498__auto___27077 = G__27078;
continue;
} else {
}
break;
}

var argseq__4513__auto__ = (new cljs.core.IndexedSeq(args_arr__4512__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4513__auto__);

}
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq27063){
var G__27064 = cljs.core.first(seq27063);
var seq27063__$1 = cljs.core.next(seq27063);
var G__27065 = cljs.core.first(seq27063__$1);
var seq27063__$2 = cljs.core.next(seq27063__$1);
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic(G__27064,G__27065,seq27063__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__27079_27097 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__27080_27098 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27081_27099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__27082_27100 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27083_27101 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__27084_27102 = ((function (G__27079_27097,G__27080_27098,G__27081_27099,G__27082_27100,G__27083_27101){
return (function (p__27085,p__27086){
var vec__27087 = p__27085;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27087,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27087,(1),null);
var vec__27090 = p__27086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27090,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27090,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__27094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27094,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__27079_27097,G__27080_27098,G__27081_27099,G__27082_27100,G__27083_27101))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__27079_27097,G__27080_27098,G__27081_27099,G__27082_27100,G__27083_27101,G__27084_27102) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27079_27097,G__27080_27098,G__27081_27099,G__27082_27100,G__27083_27101,G__27084_27102));
var G__27109_27115 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__27110_27116 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27111_27117 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__27112_27118 = ((function (G__27109_27115,G__27110_27116,G__27111_27117){
return (function (match){
var map__27113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__27113__$1 = ((((!((map__27113 == null)))?(((((map__27113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27113):map__27113);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27113__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27113__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27113__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27113__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__27109_27115,G__27110_27116,G__27111_27117))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27109_27115,G__27110_27116,G__27111_27117,G__27112_27118) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27109_27115,G__27110_27116,G__27111_27117,G__27112_27118));
var G__27119_27123 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__27120_27124 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27121_27125 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__27122_27126 = ((function (G__27119_27123,G__27120_27124,G__27121_27125){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__27119_27123,G__27120_27124,G__27121_27125))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27119_27123,G__27120_27124,G__27121_27125,G__27122_27126) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27119_27123,G__27120_27124,G__27121_27125,G__27122_27126));
var G__27127_27131 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__27128_27132 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27129_27133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__27130_27134 = ((function (G__27127_27131,G__27128_27132,G__27129_27133){
return (function (traces){
return !(cljs.core.empty_QMARK_(traces));
});})(G__27127_27131,G__27128_27132,G__27129_27133))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27127_27131,G__27128_27132,G__27129_27133,G__27130_27134) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27127_27131,G__27128_27132,G__27129_27133,G__27130_27134));
var G__27136_27138 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__27137_27139 = ((function (G__27136_27138){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__27136_27138))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__27136_27138,G__27137_27139) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27136_27138,G__27137_27139));
var G__27140_27146 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__27141_27147 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27142_27148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__27143_27149 = ((function (G__27140_27146,G__27141_27147,G__27142_27148){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__27140_27146,G__27141_27147,G__27142_27148))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27140_27146,G__27141_27147,G__27142_27148,G__27143_27149) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27140_27146,G__27141_27147,G__27142_27148,G__27143_27149));
var G__27150_27154 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__27151_27155 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27152_27156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__27153_27157 = ((function (G__27150_27154,G__27151_27155,G__27152_27156){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__27150_27154,G__27151_27155,G__27152_27156))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27150_27154,G__27151_27155,G__27152_27156,G__27153_27157) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27150_27154,G__27151_27155,G__27152_27156,G__27153_27157));
var G__27158_27162 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__27159_27163 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27160_27164 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__27161_27165 = ((function (G__27158_27162,G__27159_27163,G__27160_27164){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__27158_27162,G__27159_27163,G__27160_27164))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27158_27162,G__27159_27163,G__27160_27164,G__27161_27165) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27158_27162,G__27159_27163,G__27160_27164,G__27161_27165));
var G__27166_27170 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__27167_27171 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27168_27172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__27169_27173 = ((function (G__27166_27170,G__27167_27171,G__27168_27172){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__27166_27170,G__27167_27171,G__27168_27172))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27166_27170,G__27167_27171,G__27168_27172,G__27169_27173) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27166_27170,G__27167_27171,G__27168_27172,G__27169_27173));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__27175_SHARP_){
return !(cljs.core.empty_QMARK_(p1__27175_SHARP_));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__27188){
return cljs.core.coll_QMARK_(G__27188);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27189){
return cljs.core.map_QMARK_(G__27189);
}),(function (G__27189){
return cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__27189){
return cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__27189){
return cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__27189){
return cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__27189){
return cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__27189){
return cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__27189){
return ((cljs.core.map_QMARK_(G__27189)) && (cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__27189,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__27190){
return cljs.core.coll_QMARK_(G__27190);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__27191 = sub_type;
var G__27191__$1 = (((G__27191 instanceof cljs.core.Keyword))?G__27191.fqn:null);
switch (G__27191__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5455__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var sub_type = temp__5455__auto__;
var G__27193 = (exp - (1));
var G__27194 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__27195 = cljs.core.rest(order__$1);
exp = G__27193;
total = G__27194;
order__$1 = G__27195;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__27196 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__27196__$1 = (((G__27196 instanceof cljs.core.Keyword))?G__27196.fqn:null);
switch (G__27196__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__27198,p__27199){
var vec__27200 = p__27198;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27200,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27200,(1),null);
var vec__27203 = p__27199;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27203,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","inter-epoch-subs","subs/inter-epoch-subs",-83233716)))?((function (vec__27200,sub_info,sub_state,vec__27203,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__27200,sub_info,sub_state,vec__27203,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__27200,sub_info,sub_state,vec__27203,subscription){
return (function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
});})(remove_fn,vec__27200,sub_info,sub_state,vec__27203,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__27206_27210 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__27207_27211 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27208_27212 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__27209_27213 = ((function (G__27206_27210,G__27207_27211,G__27208_27212){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__27206_27210,G__27207_27211,G__27208_27212))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27206_27210,G__27207_27211,G__27208_27212,G__27209_27213) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27206_27210,G__27207_27211,G__27208_27212,G__27209_27213));
var G__27214_27218 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__27215_27219 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27216_27220 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__27217_27221 = ((function (G__27214_27218,G__27215_27219,G__27216_27220){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__27214_27218,G__27215_27219,G__27216_27220))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27214_27218,G__27215_27219,G__27216_27220,G__27217_27221) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27214_27218,G__27215_27219,G__27216_27220,G__27217_27221));
var G__27222_27228 = new cljs.core.Keyword("subs","inter-epoch-subs","subs/inter-epoch-subs",-83233716);
var G__27223_27229 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27224_27230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__27225_27231 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27226_27232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__27227_27233 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__27222_27228,G__27223_27229,G__27224_27230,G__27225_27231,G__27226_27232,G__27227_27233) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27222_27228,G__27223_27229,G__27224_27230,G__27225_27231,G__27226_27232,G__27227_27233));
var G__27234_27240 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__27235_27241 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27236_27242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__27237_27243 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27238_27244 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__27239_27245 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__27234_27240,G__27235_27241,G__27236_27242,G__27237_27243,G__27238_27244,G__27239_27245) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27234_27240,G__27235_27241,G__27236_27242,G__27237_27243,G__27238_27244,G__27239_27245));
var G__27246_27256 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__27247_27257 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27248_27258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__27249_27259 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27250_27260 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__27251_27261 = ((function (G__27246_27256,G__27247_27257,G__27248_27258,G__27249_27259,G__27250_27260){
return (function (p__27252){
var vec__27253 = p__27252;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27253,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27253,(1),null);
if(cljs.core.truth_(ignore_unchanged_l2_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,all_subs);
} else {
return all_subs;
}
});})(G__27246_27256,G__27247_27257,G__27248_27258,G__27249_27259,G__27250_27260))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__27246_27256,G__27247_27257,G__27248_27258,G__27249_27259,G__27250_27260,G__27251_27261) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27246_27256,G__27247_27257,G__27248_27258,G__27249_27259,G__27250_27260,G__27251_27261));
var G__27262_27266 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__27263_27267 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27264_27268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__27265_27269 = ((function (G__27262_27266,G__27263_27267,G__27264_27268){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__27262_27266,G__27263_27267,G__27264_27268))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27262_27266,G__27263_27267,G__27264_27268,G__27265_27269) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27262_27266,G__27263_27267,G__27264_27268,G__27265_27269));
var G__27270_27274 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__27271_27275 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27272_27276 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__27273_27277 = ((function (G__27270_27274,G__27271_27275,G__27272_27276){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__27270_27274,G__27271_27275,G__27272_27276))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27270_27274,G__27271_27275,G__27272_27276,G__27273_27277) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27270_27274,G__27271_27275,G__27272_27276,G__27273_27277));
var G__27278_27282 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__27279_27283 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27280_27284 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__27281_27285 = ((function (G__27278_27282,G__27279_27283,G__27280_27284){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__27278_27282,G__27279_27283,G__27280_27284))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27278_27282,G__27279_27283,G__27280_27284,G__27281_27285) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27278_27282,G__27279_27283,G__27280_27284,G__27281_27285));
var G__27286_27290 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__27287_27291 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27288_27292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__27289_27293 = ((function (G__27286_27290,G__27287_27291,G__27288_27292){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__27286_27290,G__27287_27291,G__27288_27292))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27286_27290,G__27287_27291,G__27288_27292,G__27289_27293) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27286_27290,G__27287_27291,G__27288_27292,G__27289_27293));
var G__27294_27298 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__27295_27299 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27296_27300 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__27297_27301 = ((function (G__27294_27298,G__27295_27299,G__27296_27300){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__27294_27298,G__27295_27299,G__27296_27300))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27294_27298,G__27295_27299,G__27296_27300,G__27297_27301) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27294_27298,G__27295_27299,G__27296_27300,G__27297_27301));
var G__27302_27306 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__27303_27307 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27304_27308 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__27305_27309 = ((function (G__27302_27306,G__27303_27307,G__27304_27308){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__27302_27306,G__27303_27307,G__27304_27308))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27302_27306,G__27303_27307,G__27304_27308,G__27305_27309) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27302_27306,G__27303_27307,G__27304_27308,G__27305_27309));
var G__27310_27314 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__27311_27315 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27312_27316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__27313_27317 = ((function (G__27310_27314,G__27311_27315,G__27312_27316){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__27310_27314,G__27311_27315,G__27312_27316))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27310_27314,G__27311_27315,G__27312_27316,G__27313_27317) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27310_27314,G__27311_27315,G__27312_27316,G__27313_27317));
var G__27318_27322 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__27319_27323 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__27320_27324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__27321_27325 = ((function (G__27318_27322,G__27319_27323,G__27320_27324){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__27318_27322,G__27319_27323,G__27320_27324))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__27318_27322,G__27319_27323,G__27320_27324,G__27321_27325) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__27318_27322,G__27319_27323,G__27320_27324,G__27321_27325));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
