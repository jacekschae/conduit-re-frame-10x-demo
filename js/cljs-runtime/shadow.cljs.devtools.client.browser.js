goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if(typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if(typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if(typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4500__auto__ = [];
var len__4497__auto___37806 = arguments.length;
var i__4498__auto___37807 = (0);
while(true){
if((i__4498__auto___37807 < len__4497__auto___37806)){
args__4500__auto__.push((arguments[i__4498__auto___37807]));

var G__37808 = (i__4498__auto___37807 + (1));
i__4498__auto___37807 = G__37808;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cDEVTOOLS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37800){
var G__37801 = cljs.core.first(seq37800);
var seq37800__$1 = cljs.core.next(seq37800);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic(G__37801,seq37800__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if(typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return goog.object.get(goog.dependencies_.written,name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37821){
var map__37822 = p__37821;
var map__37822__$1 = ((((!((map__37822 == null)))?(((((map__37822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37822):map__37822);
var src = map__37822__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37822__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37822__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
/**
 * js/eval doesn't get optimized properly, this hack seems to do the trick
 */
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
var node = document.createElement("script");
node.appendChild(document.createTextNode(code));

document.body.appendChild(node);

return document.body.removeChild(node);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37830 = cljs.core.seq(sources);
var chunk__37831 = null;
var count__37832 = (0);
var i__37833 = (0);
while(true){
if((i__37833 < count__37832)){
var map__37834 = chunk__37831.cljs$core$IIndexed$_nth$arity$2(null,i__37833);
var map__37834__$1 = ((((!((map__37834 == null)))?(((((map__37834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37834):map__37834);
var src = map__37834__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37834__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37834__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37834__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37842 = seq__37830;
var G__37843 = chunk__37831;
var G__37844 = count__37832;
var G__37845 = (i__37833 + (1));
seq__37830 = G__37842;
chunk__37831 = G__37843;
count__37832 = G__37844;
i__37833 = G__37845;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__37830);
if(temp__5457__auto__){
var seq__37830__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37830__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__37830__$1);
var G__37846 = cljs.core.chunk_rest(seq__37830__$1);
var G__37847 = c__4319__auto__;
var G__37848 = cljs.core.count(c__4319__auto__);
var G__37849 = (0);
seq__37830 = G__37846;
chunk__37831 = G__37847;
count__37832 = G__37848;
i__37833 = G__37849;
continue;
} else {
var map__37836 = cljs.core.first(seq__37830__$1);
var map__37836__$1 = ((((!((map__37836 == null)))?(((((map__37836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37836):map__37836);
var src = map__37836__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37836__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37836__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37836__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37850 = cljs.core.next(seq__37830__$1);
var G__37851 = null;
var G__37852 = (0);
var G__37853 = (0);
seq__37830 = G__37850;
chunk__37831 = G__37851;
count__37832 = G__37852;
i__37833 = G__37853;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn);
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37854 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37854) : callback.call(null,G__37854));
} else {
var G__37855 = shadow.cljs.devtools.client.env.files_url();
var G__37856 = ((function (G__37855){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37855))
;
var G__37857 = "POST";
var G__37858 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37859 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37855,G__37856,G__37857,G__37858,G__37859);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37861){
var map__37862 = p__37861;
var map__37862__$1 = ((((!((map__37862 == null)))?(((((map__37862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37862):map__37862);
var msg = map__37862__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37862__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37862__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37864 = info;
var map__37864__$1 = ((((!((map__37864 == null)))?(((((map__37864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37864):map__37864);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37864__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37864__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__37864,map__37864__$1,sources,compiled,map__37862,map__37862__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37866(s__37867){
return (new cljs.core.LazySeq(null,((function (map__37864,map__37864__$1,sources,compiled,map__37862,map__37862__$1,msg,info,reload_info){
return (function (){
var s__37867__$1 = s__37867;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__37867__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__37872 = cljs.core.first(xs__6012__auto__);
var map__37872__$1 = ((((!((map__37872 == null)))?(((((map__37872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37872):map__37872);
var src = map__37872__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37872__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37872__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__37867__$1,map__37872,map__37872__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__37864,map__37864__$1,sources,compiled,map__37862,map__37862__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37866_$_iter__37868(s__37869){
return (new cljs.core.LazySeq(null,((function (s__37867__$1,map__37872,map__37872__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__37864,map__37864__$1,sources,compiled,map__37862,map__37862__$1,msg,info,reload_info){
return (function (){
var s__37869__$1 = s__37869;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__37869__$1);
if(temp__5457__auto____$1){
var s__37869__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37869__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__37869__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__37871 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__37870 = (0);
while(true){
if((i__37870 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__37870);
cljs.core.chunk_append(b__37871,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37906 = (i__37870 + (1));
i__37870 = G__37906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37871),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37866_$_iter__37868(cljs.core.chunk_rest(s__37869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37871),null);
}
} else {
var warning = cljs.core.first(s__37869__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37866_$_iter__37868(cljs.core.rest(s__37869__$2)));
}
} else {
return null;
}
break;
}
});})(s__37867__$1,map__37872,map__37872__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__37864,map__37864__$1,sources,compiled,map__37862,map__37862__$1,msg,info,reload_info))
,null,null));
});})(s__37867__$1,map__37872,map__37872__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__37864,map__37864__$1,sources,compiled,map__37862,map__37862__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37866(cljs.core.rest(s__37867__$1)));
} else {
var G__37912 = cljs.core.rest(s__37867__$1);
s__37867__$1 = G__37912;
continue;
}
} else {
var G__37913 = cljs.core.rest(s__37867__$1);
s__37867__$1 = G__37913;
continue;
}
} else {
return null;
}
break;
}
});})(map__37864,map__37864__$1,sources,compiled,map__37862,map__37862__$1,msg,info,reload_info))
,null,null));
});})(map__37864,map__37864__$1,sources,compiled,map__37862,map__37862__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
var seq__37874_37914 = cljs.core.seq(warnings);
var chunk__37875_37915 = null;
var count__37876_37916 = (0);
var i__37877_37917 = (0);
while(true){
if((i__37877_37917 < count__37876_37916)){
var map__37878_37919 = chunk__37875_37915.cljs$core$IIndexed$_nth$arity$2(null,i__37877_37917);
var map__37878_37920__$1 = ((((!((map__37878_37919 == null)))?(((((map__37878_37919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37878_37919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37878_37919):map__37878_37919);
var w_37921 = map__37878_37920__$1;
var msg_37922__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878_37920__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878_37920__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878_37920__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37878_37920__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37925)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37923),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37924),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37922__$1)].join(''));


var G__37930 = seq__37874_37914;
var G__37931 = chunk__37875_37915;
var G__37932 = count__37876_37916;
var G__37933 = (i__37877_37917 + (1));
seq__37874_37914 = G__37930;
chunk__37875_37915 = G__37931;
count__37876_37916 = G__37932;
i__37877_37917 = G__37933;
continue;
} else {
var temp__5457__auto___37935 = cljs.core.seq(seq__37874_37914);
if(temp__5457__auto___37935){
var seq__37874_37936__$1 = temp__5457__auto___37935;
if(cljs.core.chunked_seq_QMARK_(seq__37874_37936__$1)){
var c__4319__auto___37938 = cljs.core.chunk_first(seq__37874_37936__$1);
var G__37943 = cljs.core.chunk_rest(seq__37874_37936__$1);
var G__37944 = c__4319__auto___37938;
var G__37945 = cljs.core.count(c__4319__auto___37938);
var G__37946 = (0);
seq__37874_37914 = G__37943;
chunk__37875_37915 = G__37944;
count__37876_37916 = G__37945;
i__37877_37917 = G__37946;
continue;
} else {
var map__37884_37947 = cljs.core.first(seq__37874_37936__$1);
var map__37884_37948__$1 = ((((!((map__37884_37947 == null)))?(((((map__37884_37947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37884_37947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37884_37947):map__37884_37947);
var w_37949 = map__37884_37948__$1;
var msg_37950__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37884_37948__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37884_37948__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37884_37948__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37884_37948__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37953)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37951),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37952),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37950__$1)].join(''));


var G__37954 = cljs.core.next(seq__37874_37936__$1);
var G__37955 = null;
var G__37956 = (0);
var G__37957 = (0);
seq__37874_37914 = G__37954;
chunk__37875_37915 = G__37955;
count__37876_37916 = G__37956;
i__37877_37917 = G__37957;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37864,map__37864__$1,sources,compiled,warnings,map__37862,map__37862__$1,msg,info,reload_info){
return (function (p__37886){
var map__37887 = p__37886;
var map__37887__$1 = ((((!((map__37887 == null)))?(((((map__37887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37887):map__37887);
var src = map__37887__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37887__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37887__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37864,map__37864__$1,sources,compiled,warnings,map__37862,map__37862__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37864,map__37864__$1,sources,compiled,warnings,map__37862,map__37862__$1,msg,info,reload_info){
return (function (p__37889){
var map__37890 = p__37889;
var map__37890__$1 = ((((!((map__37890 == null)))?(((((map__37890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37890):map__37890);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37890__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37864,map__37864__$1,sources,compiled,warnings,map__37862,map__37862__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37864,map__37864__$1,sources,compiled,warnings,map__37862,map__37862__$1,msg,info,reload_info){
return (function (p__37892){
var map__37893 = p__37892;
var map__37893__$1 = ((((!((map__37893 == null)))?(((((map__37893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37893):map__37893);
var rc = map__37893__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__37864,map__37864__$1,sources,compiled,warnings,map__37862,map__37862__$1,msg,info,reload_info))
,sources))));
if(((cljs.core.empty_QMARK_(warnings)) && (cljs.core.seq(sources_to_get)))){
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37864,map__37864__$1,sources,compiled,warnings,map__37862,map__37862__$1,msg,info,reload_info){
return (function (p1__37860_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37860_SHARP_,shadow.cljs.devtools.client.hud.load_end_success);
});})(sources_to_get,map__37864,map__37864__$1,sources,compiled,warnings,map__37862,map__37862__$1,msg,info,reload_info))
);
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37962){
var map__37964 = p__37962;
var map__37964__$1 = ((((!((map__37964 == null)))?(((((map__37964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37964):map__37964);
var msg = map__37964__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37964__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37967 = cljs.core.seq(updates);
var chunk__37970 = null;
var count__37971 = (0);
var i__37972 = (0);
while(true){
if((i__37972 < count__37971)){
var path = chunk__37970.cljs$core$IIndexed$_nth$arity$2(null,i__37972);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___37982 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___37982)){
var node_37983 = temp__5457__auto___37982;
var new_link_37984 = (function (){var G__37974 = document.createElement("link");
G__37974.setAttribute("rel","stylesheet");

G__37974.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37974;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_37984,node_37983);

goog.dom.removeNode(node_37983);
} else {
}


var G__37985 = seq__37967;
var G__37986 = chunk__37970;
var G__37987 = count__37971;
var G__37988 = (i__37972 + (1));
seq__37967 = G__37985;
chunk__37970 = G__37986;
count__37971 = G__37987;
i__37972 = G__37988;
continue;
} else {
var G__37989 = seq__37967;
var G__37990 = chunk__37970;
var G__37991 = count__37971;
var G__37992 = (i__37972 + (1));
seq__37967 = G__37989;
chunk__37970 = G__37990;
count__37971 = G__37991;
i__37972 = G__37992;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__37967);
if(temp__5457__auto__){
var seq__37967__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37967__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__37967__$1);
var G__37997 = cljs.core.chunk_rest(seq__37967__$1);
var G__37998 = c__4319__auto__;
var G__37999 = cljs.core.count(c__4319__auto__);
var G__38000 = (0);
seq__37967 = G__37997;
chunk__37970 = G__37998;
count__37971 = G__37999;
i__37972 = G__38000;
continue;
} else {
var path = cljs.core.first(seq__37967__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___38001__$1 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___38001__$1)){
var node_38002 = temp__5457__auto___38001__$1;
var new_link_38003 = (function (){var G__37978 = document.createElement("link");
G__37978.setAttribute("rel","stylesheet");

G__37978.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37978;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_38003,node_38002);

goog.dom.removeNode(node_38002);
} else {
}


var G__38008 = cljs.core.next(seq__37967__$1);
var G__38009 = null;
var G__38010 = (0);
var G__38011 = (0);
seq__37967 = G__38008;
chunk__37970 = G__38009;
count__37971 = G__38010;
i__37972 = G__38011;
continue;
} else {
var G__38012 = cljs.core.next(seq__37967__$1);
var G__38013 = null;
var G__38014 = (0);
var G__38015 = (0);
seq__37967 = G__38012;
chunk__37970 = G__38013;
count__37971 = G__38014;
i__37972 = G__38015;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__38017){
var map__38018 = p__38017;
var map__38018__$1 = ((((!((map__38018 == null)))?(((((map__38018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38018):map__38018);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38018__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38018__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__38018,map__38018__$1,id,js){
return (function (){
return eval(js);
});})(map__38018,map__38018__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__38020){
var map__38021 = p__38020;
var map__38021__$1 = ((((!((map__38021 == null)))?(((((map__38021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38021):map__38021);
var msg = map__38021__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38021__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38021__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38021__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var sources_to_load = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),reload))?(function (){var all = cljs.core.butlast(sources);
var self = cljs.core.last(sources);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_),all),self);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload))?sources:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,sources)
));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__38021,map__38021__$1,msg,id,sources,reload){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__38021,map__38021__$1,msg,id,sources,reload))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__38023){
var map__38024 = p__38023;
var map__38024__$1 = ((((!((map__38024 == null)))?(((((map__38024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38024):map__38024);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38024__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38024__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__38024,map__38024__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__38024,map__38024__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__38026){
var map__38027 = p__38026;
var map__38027__$1 = ((((!((map__38027 == null)))?(((((map__38027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38027):map__38027);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38027__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38027__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__38029){
var map__38030 = p__38029;
var map__38030__$1 = ((((!((map__38030 == null)))?(((((map__38030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38030):map__38030);
var msg = map__38030__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38030__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__38032 = type;
var G__38032__$1 = (((G__38032 instanceof cljs.core.Keyword))?G__38032.fqn:null);
switch (G__38032__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__38039 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__38040 = ((function (G__38039){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__38039))
;
var G__38041 = "POST";
var G__38042 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__38043 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__38039,G__38040,G__38041,G__38042,G__38043);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

return shadow.cljs.devtools.client.browser.devtools_msg("connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("disconnected!");

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
return null;
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___38045 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___38045)){
var s_38046 = temp__5457__auto___38045;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_38046.onclose = ((function (s_38046,temp__5457__auto___38045){
return (function (e){
return null;
});})(s_38046,temp__5457__auto___38045))
;

s_38046.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
