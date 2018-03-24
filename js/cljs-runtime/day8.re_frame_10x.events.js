goog.provide('day8.re_frame_10x.events');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('mranderson047.reagent.v0v7v0.reagent.core');
goog.require('cljs.tools.reader.edn');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('day8.re_frame_10x.utils.localstorage');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('day8.re_frame_10x.view.container');
goog.require('day8.re_frame_10x.styles');
goog.require('clojure.set');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('re_frame.trace');
day8.re_frame_10x.events.fixed_after = (function day8$re_frame_10x$events$fixed_after(f){
var G__27854 = new cljs.core.Keyword(null,"id","id",-1388402092);
var G__27855 = new cljs.core.Keyword(null,"after","after",594996914);
var G__27856 = new cljs.core.Keyword(null,"after","after",594996914);
var G__27857 = ((function (G__27854,G__27855,G__27856){
return (function day8$re_frame_10x$events$fixed_after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)));
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event));

return context;
});})(G__27854,G__27855,G__27856))
;
return (mranderson047.re_frame.v0v10v2.re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$4(G__27854,G__27855,G__27856,G__27857) : mranderson047.re_frame.v0v10v2.re_frame.core.__GT_interceptor.call(null,G__27854,G__27855,G__27856,G__27857));
});
day8.re_frame_10x.events.log_trace_QMARK_ = (function day8$re_frame_10x$events$log_trace_QMARK_(trace){
var render_operation_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"render","render",-1408033454))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814))));
var component_path = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"component-path","component-path",-1014945685)], null),"");
if(!(render_operation_QMARK_)){
return true;
} else {
return !(clojure.string.includes_QMARK_(component_path,"devtools outer"));
}
});
day8.re_frame_10x.events.disable_tracing_BANG_ = (function day8$re_frame_10x$events$disable_tracing_BANG_(){
return re_frame.trace.remove_trace_cb(new cljs.core.Keyword("day8.re-frame-10x.events","cb","day8.re-frame-10x.events/cb",-1614608881));
});
day8.re_frame_10x.events.enable_tracing_BANG_ = (function day8$re_frame_10x$events$enable_tracing_BANG_(){
return re_frame.trace.register_trace_cb(new cljs.core.Keyword("day8.re-frame-10x.events","cb","day8.re-frame-10x.events/cb",-1614608881),(function (p1__27863_SHARP_){
var G__27864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","receive-new-traces","epochs/receive-new-traces",-1949348546),p1__27863_SHARP_], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27864) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__27864));
}));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
day8.re_frame_10x.events.dissoc_in = (function day8$re_frame_10x$events$dissoc_in(m,p__27865){
var vec__27866 = p__27865;
var seq__27867 = cljs.core.seq(vec__27866);
var first__27868 = cljs.core.first(seq__27867);
var seq__27867__$1 = cljs.core.next(seq__27867);
var k = first__27868;
var ks = seq__27867__$1;
var keys = vec__27866;
if(ks){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var nextmap = temp__5455__auto__;
var newmap = (day8.re_frame_10x.events.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.events.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : day8.re_frame_10x.events.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
day8.re_frame_10x.events.read_string_maybe = (function day8$re_frame_10x$events$read_string_maybe(s){
try{return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(s);
}catch (e27873){var e = e27873;
return null;
}});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),(function (db,p__27874){
var vec__27875 = p__27874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27875,(0),null);
var width_PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27875,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("panel-width-ratio",(function (){var x__4006__auto__ = width_PERCENT_;
var y__4007__auto__ = 0.05;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341)], null),(function (){var x__4006__auto__ = width_PERCENT_;
var y__4007__auto__ = 0.05;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),(function (db,p__27883){
var vec__27884 = p__27883;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(0),null);
var selected_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("selected-tab",selected_tab);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null),selected_tab);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","toggle-settings","settings/toggle-settings",-1691581698),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878)], null),cljs.core.not);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),(function (db,p__27899){
var vec__27900 = p__27899;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27900,(0),null);
var show_panel_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27900,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("show-panel",show_panel_QMARK_);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),show_panel_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","factory-reset","settings/factory-reset",1863855805),(function (db,_){
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_();

location.reload();

return db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","user-toggle-panel","settings/user-toggle-panel",322795573),(function (db,_){
var now_showing_QMARK_ = cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null)));
var external_panel_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null));
var using_trace_QMARK_ = (function (){var or__3922__auto__ = external_panel_QMARK_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return now_showing_QMARK_;
}
})();
if(now_showing_QMARK_){
day8.re_frame_10x.events.enable_tracing_BANG_();
} else {
if(cljs.core.truth_(external_panel_QMARK_)){
} else {
day8.re_frame_10x.events.disable_tracing_BANG_();
}
}

day8.re_frame_10x.utils.localstorage.save_BANG_("using-trace?",using_trace_QMARK_);

day8.re_frame_10x.utils.localstorage.save_BANG_("show-panel",now_showing_QMARK_);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"using-trace?","using-trace?",2036904112)], null),using_trace_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),now_showing_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","pause","settings/pause",1369084469),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"paused?","paused?",-135058553)], null),true);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","play","settings/play",870988221),(function (p__27906,_){
var map__27907 = p__27906;
var map__27907__$1 = ((((!((map__27907 == null)))?(((((map__27907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27907):map__27907);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27907__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"paused?","paused?",-135058553)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568)], null),null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),null], null)], null);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),(function (db,p__27909){
var vec__27910 = p__27909;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27910,(0),null);
var num_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27910,(1),null);
var num = parseInt(num_str);
var num__$1 = ((((cljs.core.not(isNaN(num))) && (cljs.core.pos_int_QMARK_(num))))?num:(5));
day8.re_frame_10x.utils.localstorage.save_BANG_("retained-epochs",num__$1);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null),num__$1);
}));
day8.re_frame_10x.events.ignored_event_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__27915) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__27915));
})(),day8.re_frame_10x.events.fixed_after((function (p1__27914_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("ignored-events",p1__27914_SHARP_);
}))], null);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","add-ignored-event","settings/add-ignored-event",-1185281607),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,_){
var id = cljs.core.random_uuid();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ignored_events,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event-str","event-str",381347778),"",new cljs.core.Keyword(null,"event-id","event-id",2130210178),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,p__27921){
var vec__27923 = p__27921;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27923,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27923,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ignored_events,id);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),day8.re_frame_10x.events.ignored_event_mw,(function (ignored_events,p__27931){
var vec__27932 = p__27931;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27932,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27932,(1),null);
var event_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27932,(2),null);
var event = day8.re_frame_10x.events.read_string_maybe(event_str);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(ignored_events,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-str","event-str",381347778)], null),event_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"event-id","event-id",2130210178)], null),((function (event,vec__27932,_,id,event_str){
return (function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
});})(event,vec__27932,_,id,event_str))
);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","set-ignored-events","settings/set-ignored-events",-10379659),day8.re_frame_10x.events.ignored_event_mw,(function (_,p__27939){
var vec__27940 = p__27939;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(0),null);
var ignored_events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27940,(1),null);
return ignored_events;
}));
day8.re_frame_10x.events.filtered_view_trace_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__27948) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__27948));
})(),day8.re_frame_10x.events.fixed_after((function (p1__27947_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("filtered-view-trace",p1__27947_SHARP_);
}))], null);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","add-filtered-view-trace","settings/add-filtered-view-trace",1856187997),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,_){
var id = cljs.core.random_uuid();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filtered_view_trace,id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"",new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"sort","sort",953465918),Date.now()], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,p__27949){
var vec__27950 = p__27949;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27950,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27950,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(filtered_view_trace,id);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),day8.re_frame_10x.events.filtered_view_trace_mw,(function (filtered_view_trace,p__27953){
var vec__27954 = p__27953;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27954,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27954,(1),null);
var ns_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27954,(2),null);
var event = day8.re_frame_10x.events.read_string_maybe(ns_str);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(filtered_view_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)], null),ns_str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"ns","ns",441598760)], null),((function (event,vec__27954,_,id,ns_str){
return (function (old_event){
if(cljs.core.truth_(event)){
return event;
} else {
return old_event;
}
});})(event,vec__27954,_,id,ns_str))
);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","set-filtered-view-trace","settings/set-filtered-view-trace",-803299732),day8.re_frame_10x.events.filtered_view_trace_mw,(function (_,p__27957){
var vec__27958 = p__27957;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27958,(0),null);
var ignored_events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27958,(1),null);
return ignored_events;
}));
day8.re_frame_10x.events.low_level_trace_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__27962) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__27962));
})(),day8.re_frame_10x.events.fixed_after((function (p1__27961_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("low-level-trace",p1__27961_SHARP_);
}))], null);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","set-low-level-trace","settings/set-low-level-trace",-664705158),day8.re_frame_10x.events.low_level_trace_mw,(function (_,p__27964){
var vec__27965 = p__27964;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27965,(0),null);
var low_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27965,(1),null);
return low_level;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),day8.re_frame_10x.events.low_level_trace_mw,(function (low_level,p__27968){
var vec__27969 = p__27968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27969,(0),null);
var trace_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27969,(1),null);
var capture_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27969,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(low_level,trace_type,capture_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),(function (db,p__27972){
var vec__27973 = p__27972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27973,(0),null);
var debug_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27973,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"debug?","debug?",-1831756173)], null),debug_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__27979) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__27979));
})(),day8.re_frame_10x.events.fixed_after((function (p1__27978_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-follows-events?",p1__27978_SHARP_);
}))], null),(function (db,p__27980){
var vec__27981 = p__27980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27981,(0),null);
var follows_events_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27981,(1),null);
return follows_events_QMARK_;
}));
day8.re_frame_10x.events.mount = (function day8$re_frame_10x$events$mount(popup_window,popup_document){
var app = popup_document.getElementById("--re-frame-10x--");
var doc = document;
day8.re_frame_10x.styles.inject_trace_styles(popup_document);

var G__27989_27995 = popup_window;
var G__27990_27996 = "onunload";
var G__27991_27997 = ((function (G__27989_27995,G__27990_27996,app,doc){
return (function (){
var G__27992 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27992) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__27992));
});})(G__27989_27995,G__27990_27996,app,doc))
;
goog.object.set(G__27989_27995,G__27990_27996,G__27991_27997);

return mranderson047.reagent.v0v7v0.reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.reagent.v0v7v0.reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer external",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (app,doc){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.container.devtools_inner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"popup","popup",635890211)], null)], null);
});})(app,doc))
], null))], null),app);
});
/**
 * Copied from re-frisk.devtool/open-debugger-window
 */
day8.re_frame_10x.events.open_debugger_window = (function day8$re_frame_10x$events$open_debugger_window(){
var map__28001 = new cljs.core.Keyword(null,"prefs","prefs",-1818938470).cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var map__28001__$1 = ((((!((map__28001 == null)))?(((((map__28001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28001):map__28001);
var ext_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001__$1,new cljs.core.Keyword(null,"ext_height","ext_height",-46169089));
var ext_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28001__$1,new cljs.core.Keyword(null,"ext_width","ext_width",925500566));
var w = window.open("","Debugger",["width=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = ext_width;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (800);
}
})()),",height=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = ext_height;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (800);
}
})()),",resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no"].join(''));
var d = w.document;
d.open();

d.write("<head></head><body style=\"margin: 0px;\"><div id=\"--re-frame-10x--\" class=\"external-window\"></div></body>");

var G__28003_28006 = w;
var G__28004_28007 = "onload";
var G__28005_28008 = ((function (G__28003_28006,G__28004_28007,map__28001,map__28001__$1,ext_height,ext_width,w,d){
return (function (){
return day8.re_frame_10x.events.mount(w,d);
});})(G__28003_28006,G__28004_28007,map__28001,map__28001__$1,ext_height,ext_width,w,d))
;
goog.object.set(G__28003_28006,G__28004_28007,G__28005_28008);

return d.close();
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","launch-external","global/launch-external",821773827),(function (ctx,_){
day8.re_frame_10x.events.open_debugger_window();

day8.re_frame_10x.utils.localstorage.save_BANG_("external-window?",true);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),true),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(200),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),false], null)], null)], null)], null);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375),(function (ctx,_){
day8.re_frame_10x.utils.localstorage.save_BANG_("external-window?",false);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),false),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(400),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),true], null)], null)], null)], null);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359),(function (ctx,_){
day8.re_frame_10x.events.enable_tracing_BANG_();

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","disable-tracing","global/disable-tracing",-1646696295),(function (ctx,_){
day8.re_frame_10x.events.disable_tracing_BANG_();

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430),(function (_,___$1){
window.addEventListener("beforeunload",(function (){
var G__28020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),true], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__28020) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch_sync.call(null,G__28020));
}));

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),(function (db,p__28021){
var vec__28022 = p__28021;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28022,(0),null);
var unloading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28022,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null),unloading_QMARK_);
}));
day8.re_frame_10x.events.save_filter_items = (function day8$re_frame_10x$events$save_filter_items(filter_items){
return day8.re_frame_10x.utils.localstorage.save_BANG_("filter-items",filter_items);
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),(function (db,p__28035){
var vec__28036 = p__28035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28036,(0),null);
var filter_items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28036,(1),null);
day8.re_frame_10x.events.save_filter_items(filter_items);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null),filter_items);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","add-filter","traces/add-filter",1646631802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28042) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28042));
})()], null),(function (filter_items,p__28043){
var vec__28044 = p__28043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28044,(0),null);
var filter_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28044,(1),null);
var filter_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28044,(2),null);
var new_db = (cljs.core.truth_(cljs.core.some(((function (vec__28044,_,filter_input,filter_type){
return (function (p1__28039_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_input,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__28039_SHARP_));
});})(vec__28044,_,filter_input,filter_type))
,filter_items))?null:(function (){var filter_items__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),filter_type);
if(and__3911__auto__){
return cljs.core.some(((function (and__3911__auto__,vec__28044,_,filter_input,filter_type){
return (function (p1__28040_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_type,new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__28040_SHARP_));
});})(and__3911__auto__,vec__28044,_,filter_input,filter_type))
,filter_items);
} else {
return and__3911__auto__;
}
})())?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__28044,_,filter_input,filter_type){
return (function (p1__28041_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__28041_SHARP_));
});})(vec__28044,_,filter_input,filter_type))
,filter_items):filter_items);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(filter_items__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_type,new cljs.core.Keyword(null,"contains","contains",676899812)))?clojure.string.lower_case(filter_input):parseFloat(filter_input)),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735),filter_type], null));
})());
day8.re_frame_10x.events.save_filter_items(new_db);

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","remove-filter","traces/remove-filter",-1645830686),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28058) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28058));
})()], null),(function (filter_items,p__28063){
var vec__28064 = p__28063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28064,(0),null);
var filter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28064,(1),null);
var new_db = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__28064,_,filter_id){
return (function (p1__28056_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28056_SHARP_),filter_id);
});})(vec__28064,_,filter_id))
,filter_items);
day8.re_frame_10x.events.save_filter_items(new_db);

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("traces","reset-filter-items","traces/reset-filter-items",983693273),(function (db,_){
var new_db = day8.re_frame_10x.events.dissoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
day8.re_frame_10x.events.save_filter_items(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null)));

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","toggle-all-expansions","traces/toggle-all-expansions",1714341025),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28069 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28069) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28069));
})()], null),(function (trace_detail_expansions,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_detail_expansions,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"show-all?","show-all?",503618702),cljs.core.not);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","toggle-trace","traces/toggle-trace",-995872006),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28077) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28077));
})()], null),(function (expansions,p__28078){
var vec__28080 = p__28078;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28080,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28080,(1),null);
var showing_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(expansions));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),((function (showing_QMARK_,vec__28080,_,id){
return (function (p1__28076_SHARP_){
if(cljs.core.truth_(showing_QMARK_)){
return false;
} else {
return cljs.core.not(p1__28076_SHARP_);
}
});})(showing_QMARK_,vec__28080,_,id))
);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","toggle-categories","traces/toggle-categories",-1164634070),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28084) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28084));
})()], null),(function (categories,p__28085){
var vec__28087 = p__28085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28087,(0),null);
var new_categories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28087,(1),null);
var new_categories__$1 = (cljs.core.truth_(clojure.set.superset_QMARK_(categories,new_categories))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(categories,new_categories):clojure.set.union.cljs$core$IFn$_invoke$arity$2(categories,new_categories));
day8.re_frame_10x.utils.localstorage.save_BANG_("categories",new_categories__$1);

return new_categories__$1;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("traces","set-categories","traces/set-categories",-1873940666),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28105) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28105));
})()], null),(function (categories,p__28106){
var vec__28107 = p__28106;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28107,(0),null);
var new_categories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28107,(1),null);
return new_categories;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("trace-panel","update-show-epoch-traces?","trace-panel/update-show-epoch-traces?",-1935503516),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665),new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28114) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28114));
})(),day8.re_frame_10x.events.fixed_after((function (p1__28111_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("show-epoch-traces?",p1__28111_SHARP_);
}))], null),(function (_,p__28120){
var vec__28121 = p__28120;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28121,(0),null);
var show_epoch_traces_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28121,(1),null);
return show_epoch_traces_QMARK_;
}));
day8.re_frame_10x.events.app_db_path_mw = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28126) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28126));
})(),day8.re_frame_10x.events.fixed_after((function (p1__28125_SHARP_){
return day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-paths",p1__28125_SHARP_);
}))], null);
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","create-path","app-db/create-path",-1109143265),day8.re_frame_10x.events.app_db_path_mw,(function (paths,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(paths,Date.now(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","update-path","app-db/update-path",-2057697283),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__28133){
var vec__28134 = p__28133;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(1),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28134,(2),null);
var path = day8.re_frame_10x.events.read_string_maybe(path_str);
var paths__$1 = cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),path_str);
if(((((!((path == null))) && (cljs.core.sequential_QMARK_(path)))) || (clojure.string.blank_QMARK_(path_str)))){
return cljs.core.assoc_in(cljs.core.assoc_in(paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path","path",-188191168)], null),path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
} else {
return cljs.core.assoc_in(paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),false);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","update-path-blur","app-db/update-path-blur",637142516),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__28144){
var vec__28145 = p__28144;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28145,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28145,(1),null);
var map__28148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,path_id);
var map__28148__$1 = ((((!((map__28148 == null)))?(((((map__28148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28148):map__28148);
var valid_path_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28148__$1,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28148__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(valid_path_QMARK_)){
return paths;
} else {
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","set-path-visibility","app-db/set-path-visibility",1482573598),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__28152){
var vec__28155 = p__28152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(1),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(2),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","set-diff-visibility","app-db/set-diff-visibility",709297655),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__28173){
var vec__28175 = p__28173;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28175,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28175,(1),null);
var diff_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28175,(2),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","remove-path","app-db/remove-path",-1233894231),day8.re_frame_10x.events.app_db_path_mw,(function (paths,p__28178){
var vec__28179 = p__28178;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28179,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28179,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(paths,path_id);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),day8.re_frame_10x.events.app_db_path_mw,(function (db,p__28190){
var vec__28191 = p__28190;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28191,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28191,(1),null);
return paths;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656),(function (db,p__28196){
var vec__28197 = p__28196;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28197,(0),null);
var search_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28197,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null),search_string);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28203) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28203));
})()], null),(function (db,p__28204){
var vec__28205 = p__28204;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28205,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28205,(1),null);
day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-json-ml-expansions",paths);

return paths;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28208) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28208));
})()], null),(function (paths,p__28209){
var vec__28210 = p__28209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28210,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28210,(1),null);
var new_paths = ((cljs.core.contains_QMARK_(paths,path))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(paths,path):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths,path));
day8.re_frame_10x.utils.localstorage.save_BANG_("app-db-json-ml-expansions",new_paths);

return new_paths;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28223 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28223) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28223));
})()], null),(function (paths,_){
return re_frame.interop.reagent_id(re_frame.db.app_db);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("snapshot","load-snapshot","snapshot/load-snapshot",-1238032716),(function (db,p__28226){
var vec__28227 = p__28226;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28227,(0),null);
var new_db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28227,(1),null);
cljs.core.reset_BANG_(re_frame.db.app_db,new_db);

return db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),(function (db,p__28241){
var vec__28242 = p__28241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(0),null);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242,(1),null);
var follows_events_QMARK__28251 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null));
var epochs_28252 = new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
var match_id_28253 = (function (){var or__3922__auto__ = new_id;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs_28252,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var match_28254 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(epochs_28252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),match_id_28253], null));
var event_28255 = day8.re_frame_10x.metamorphic.matched_event(new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_28254));
if(cljs.core.truth_(follows_events_QMARK__28251)){
var temp__5461__auto___28263 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(event_28255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
if((temp__5461__auto___28263 == null)){
} else {
var new_db_28264 = temp__5461__auto___28263;
cljs.core.reset_BANG_(re_frame.db.app_db,new_db_28264);
}
} else {
}

return db;
}));
day8.re_frame_10x.events.first_match_id = (function day8$re_frame_10x$events$first_match_id(m){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(m)));
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("epochs","receive-new-traces","epochs/receive-new-traces",-1949348546),(function (db,p__28273){
var vec__28274 = p__28273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28274,(0),null);
var new_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28274,(1),null);
var temp__5455__auto__ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.events.log_trace_QMARK_,new_traces));
if(cljs.core.truth_(temp__5455__auto__)){
var filtered_traces = temp__5455__auto__;
var number_of_epochs_to_retain = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null));
var events_to_ignore = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null)))));
var previous_traces = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null),cljs.core.PersistentVector.EMPTY);
var parse_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535)], null),day8.re_frame_10x.metamorphic.initial_parse_state);
var map__28277 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null));
var map__28277__$1 = ((((!((map__28277 == null)))?(((((map__28277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28277):map__28277);
var drop_re_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28277__$1,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033));
var drop_reagent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28277__$1,new cljs.core.Keyword(null,"reagent","reagent",2131627322));
var all_traces = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,previous_traces,filtered_traces);
var parse_state__$1 = day8.re_frame_10x.metamorphic.parse_traces(parse_state,filtered_traces);
var new_matches = new cljs.core.Keyword(null,"partitions","partitions",602979514).cljs$core$IFn$_invoke$arity$1(parse_state__$1);
var previous_matches = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"matches","matches",635497998)], null),cljs.core.PersistentVector.EMPTY);
var parse_state__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parse_state__$1,new cljs.core.Keyword(null,"partitions","partitions",602979514),cljs.core.PersistentVector.EMPTY);
var new_matches__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces){
return (function (match){
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.matched_event(match),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
return cljs.core.contains_QMARK_(events_to_ignore,cljs.core.first(event));
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces))
,new_matches);
var subscription_info = day8.re_frame_10x.metamorphic.subscription_info(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092)], null),cljs.core.PersistentArrayMap.EMPTY),filtered_traces,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null)));
var sub_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981)], null),day8.re_frame_10x.metamorphic.initial_sub_state);
var subscription_match_state = day8.re_frame_10x.metamorphic.subscription_match_state(sub_state,all_traces,new_matches__$1);
var subscription_matches = cljs.core.rest(subscription_match_state);
var new_sub_state = cljs.core.last(subscription_match_state);
var timing = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces){
return (function (match){
var epoch_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.utils.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match)))),all_traces);
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epoch_traces,(0));
var event_handler_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.event_handler_QMARK_,epoch_traces));
var dofx_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.event_dofx_QMARK_,epoch_traces));
var event_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.event_run_QMARK_,epoch_traces));
var finish_run = (function (){var or__3922__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.finish_run_QMARK_,epoch_traces));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return day8.re_frame_10x.utils.utils.last_in_vec(epoch_traces);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897),day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,finish_run),new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_trace),new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_handler_trace),new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(dofx_trace)], null);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces))
,new_matches__$1);
var new_matches__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces){
return (function (match,sub_match,t){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"match-info","match-info",666319879),match,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),sub_match,new cljs.core.Keyword(null,"timing","timing",-1849225195),t], null);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces))
,new_matches__$1,subscription_matches,timing);
var all_matches = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,previous_matches,new_matches__$2);
var retained_matches = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last(number_of_epochs_to_retain,all_matches));
var first_id_to_retain = day8.re_frame_10x.events.first_match_id(cljs.core.first(retained_matches));
var retained_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces){
return (function (p1__28271_SHARP_){
return (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28271_SHARP_) < first_id_to_retain);
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces))
),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces){
return (function (trace){
var or__3922__auto__ = (cljs.core.truth_(drop_reagent)?day8.re_frame_10x.metamorphic.low_level_reagent_trace_QMARK_(trace):null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.truth_(drop_re_frame)){
return day8.re_frame_10x.metamorphic.low_level_re_frame_trace_QMARK_(trace);
} else {
return null;
}
}
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces))
)),all_traces);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null),retained_traces),new cljs.core.Keyword(null,"epochs","epochs",1796936425),((function (number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,retained_traces,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces){
return (function (epochs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(epochs,new cljs.core.Keyword(null,"matches","matches",635497998),retained_matches,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.events.first_match_id,cljs.core.identity)),retained_matches),new cljs.core.Keyword(null,"match-ids","match-ids",752973161),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.events.first_match_id,retained_matches),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535),parse_state__$2,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),new_sub_state,new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092),subscription_info], 0));
});})(number_of_epochs_to_retain,events_to_ignore,previous_traces,parse_state,map__28277,map__28277__$1,drop_re_frame,drop_reagent,all_traces,parse_state__$1,new_matches,previous_matches,parse_state__$2,new_matches__$1,subscription_info,sub_state,subscription_match_state,subscription_matches,new_sub_state,timing,new_matches__$2,all_matches,retained_matches,first_id_to_retain,retained_traces,filtered_traces,temp__5455__auto__,vec__28274,_,new_traces))
);
} else {
return db;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","previous-epoch","epochs/previous-epoch",480286026),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28320 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28320) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28320));
})()], null),(function (p__28321,_){
var map__28322 = p__28321;
var map__28322__$1 = ((((!((map__28322 == null)))?(((((map__28322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28322):map__28322);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28322__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5459__auto__ = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5459__auto__ == null)){
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db),(cljs.core.count(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db)) - (2)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","pause","settings/pause",1369084469)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null)], null);
} else {
var current_id = temp__5459__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.utils.utils.find_index_in_vec(((function (match_ids,current_id,temp__5459__auto__,map__28322,map__28322__$1,db){
return (function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_id,x);
});})(match_ids,current_id,temp__5459__auto__,map__28322,map__28322__$1,db))
,match_ids);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(match_ids,(match_array_index - (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","pause","settings/pause",1369084469)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null)], null);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("epochs","next-epoch","epochs/next-epoch",-1703589978),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28331 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28331) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28331));
})()], null),(function (p__28332,_){
var map__28333 = p__28332;
var map__28333__$1 = ((((!((map__28333 == null)))?(((((map__28333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28333):map__28333);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28333__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5459__auto__ = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5459__auto__ == null)){
var new_id = cljs.core.last(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","pause","settings/pause",1369084469)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null)], null);
} else {
var current_id = temp__5459__auto__;
var match_ids = new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db);
var match_array_index = day8.re_frame_10x.utils.utils.find_index_in_vec(((function (match_ids,current_id,temp__5459__auto__,map__28333,map__28333__$1,db){
return (function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_id,x);
});})(match_ids,current_id,temp__5459__auto__,map__28333,map__28333__$1,db))
,match_ids);
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(match_ids,(match_array_index + (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568),new_id),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","pause","settings/pause",1369084469)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","reset-current-epoch-app-db","snapshot/reset-current-epoch-app-db",866213056),new_id], null)], null)], null);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("epochs","reset","epochs/reset",1592438868),(function (db){
re_frame.trace.reset_tracing_BANG_();

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"epochs","epochs",1796936425),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"traces","traces",-1301138004)], 0));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28342) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28342));
})()], null),(function (_,p__28343){
var vec__28344 = p__28343;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(0),null);
var ignore_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(1),null);
return ignore_QMARK_;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","open-pod?","subs/open-pod?",-57249156),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28355) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28355));
})()], null),(function (expansions,p__28356){
var vec__28357 = p__28356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28357,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28357,(1),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28357,(2),null);
return cljs.core.assoc_in(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("subs","diff-pod?","subs/diff-pod?",-375674973),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__28360) : mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,G__28360));
})()], null),(function (expansions,p__28361){
var vec__28362 = p__28361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28362,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28362,(1),null);
var diff_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28362,(2),null);
return cljs.core.assoc_in(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_);
}));

//# sourceMappingURL=day8.re_frame_10x.events.js.map
