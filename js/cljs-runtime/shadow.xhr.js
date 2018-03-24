goog.provide('shadow.xhr');
goog.require('cljs.core');
goog.require('goog.result');
goog.require('goog.result.SimpleResult');
goog.require('goog.labs.net.xhr');
goog.require('cljs.reader');
goog.require('goog.uri.utils');
goog.require('goog.json');
goog.require('shadow.object');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('shadow.util');
shadow.xhr.result_chain = (function shadow$xhr$result_chain(res,handler){
return goog.result.chain(res,handler);
});
shadow.xhr.result_combine = (function shadow$xhr$result_combine(var_args){
var args__4500__auto__ = [];
var len__4497__auto___31690 = arguments.length;
var i__4498__auto___31691 = (0);
while(true){
if((i__4498__auto___31691 < len__4497__auto___31690)){
args__4500__auto__.push((arguments[i__4498__auto___31691]));

var G__31692 = (i__4498__auto___31691 + (1));
i__4498__auto___31691 = G__31692;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic = (function (results){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.result.combine,results);
});

shadow.xhr.result_combine.cljs$lang$maxFixedArity = (0);

shadow.xhr.result_combine.cljs$lang$applyTo = (function (seq31689){
return shadow.xhr.result_combine.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31689));
});

shadow.xhr.result_wait_on_success = (function shadow$xhr$result_wait_on_success(res,callback){
return goog.result.waitOnSuccess(res,callback);
});
shadow.xhr.result_success_QMARK_ = (function shadow$xhr$result_success_QMARK_(res){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.result.Result.State.SUCCESS,res.getState());
});
shadow.xhr.result_value = (function shadow$xhr$result_value(res){
return res.getValue();
});
shadow.xhr.result_immediate = (function shadow$xhr$result_immediate(value){
return goog.result.successfulResult(value);
});
shadow.xhr.result_error = (function shadow$xhr$result_error(res,callback){
return goog.result.waitOnError(res,callback);
});
shadow.xhr.edn_transform = (function shadow$xhr$edn_transform(body){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(body);
});
shadow.xhr.json_transform = (function shadow$xhr$json_transform(body){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(body));
});
shadow.xhr.goog_keys = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),"timeoutMs",new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),"withCredentials",new cljs.core.Keyword(null,"headers","headers",-835030129),"headers",new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),"mimeType"], null);
shadow.xhr.make_request_options = (function shadow$xhr$make_request_options(options){
var obj = {};
var seq__31696_31706 = cljs.core.seq(options);
var chunk__31697_31707 = null;
var count__31698_31708 = (0);
var i__31699_31709 = (0);
while(true){
if((i__31699_31709 < count__31698_31708)){
var vec__31700_31710 = chunk__31697_31707.cljs$core$IIndexed$_nth$arity$2(null,i__31699_31709);
var k_31711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31700_31710,(0),null);
var v_31712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31700_31710,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_31711)] = cljs.core.clj__GT_js(v_31712));


var G__31713 = seq__31696_31706;
var G__31714 = chunk__31697_31707;
var G__31715 = count__31698_31708;
var G__31716 = (i__31699_31709 + (1));
seq__31696_31706 = G__31713;
chunk__31697_31707 = G__31714;
count__31698_31708 = G__31715;
i__31699_31709 = G__31716;
continue;
} else {
var temp__5457__auto___31717 = cljs.core.seq(seq__31696_31706);
if(temp__5457__auto___31717){
var seq__31696_31718__$1 = temp__5457__auto___31717;
if(cljs.core.chunked_seq_QMARK_(seq__31696_31718__$1)){
var c__4319__auto___31719 = cljs.core.chunk_first(seq__31696_31718__$1);
var G__31720 = cljs.core.chunk_rest(seq__31696_31718__$1);
var G__31721 = c__4319__auto___31719;
var G__31722 = cljs.core.count(c__4319__auto___31719);
var G__31723 = (0);
seq__31696_31706 = G__31720;
chunk__31697_31707 = G__31721;
count__31698_31708 = G__31722;
i__31699_31709 = G__31723;
continue;
} else {
var vec__31703_31724 = cljs.core.first(seq__31696_31718__$1);
var k_31725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31703_31724,(0),null);
var v_31726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31703_31724,(1),null);
(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_31725)] = cljs.core.clj__GT_js(v_31726));


var G__31731 = cljs.core.next(seq__31696_31718__$1);
var G__31732 = null;
var G__31733 = (0);
var G__31734 = (0);
seq__31696_31706 = G__31731;
chunk__31697_31707 = G__31732;
count__31698_31708 = G__31733;
i__31699_31709 = G__31734;
continue;
}
} else {
}
}
break;
}

return obj;
});
shadow.xhr.content_transforms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, ["text/edn",shadow.xhr.edn_transform,"application/edn",shadow.xhr.edn_transform,"application/json",shadow.xhr.json_transform,"text/html",cljs.core.identity,"text/plain",cljs.core.identity], null));
shadow.xhr.register_transform = (function shadow$xhr$register_transform(content_type,transform_fn){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.xhr.content_transforms,cljs.core.assoc,content_type,transform_fn);
});
shadow.xhr.auto_transform = (function shadow$xhr$auto_transform(req){
var content_type = (function (){var ct = clojure.string.lower_case(req.getResponseHeader("Content-Type"));
var sep = ct.indexOf(";");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),sep)){
return ct.substring((0),sep);
} else {
return ct;
}
})();
var transform_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.xhr.content_transforms),content_type);
if((transform_fn == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported content-type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type], null));
} else {
var G__31735 = req.responseText;
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(G__31735) : transform_fn.call(null,G__31735));
}
});
shadow.xhr.make_url = (function shadow$xhr$make_url(url,params){
var G__31744 = url;
var G__31745 = cljs.core.clj__GT_js(params);
return goog.uri.utils.appendParamsFromMap(G__31744,G__31745);
});
shadow.xhr.transform_request_body = (function shadow$xhr$transform_request_body(data){
if(typeof data === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain; charset=utf-8",data], null);
} else {
if(((!((data == null)))?(((((data.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IPrintWithWriter$))))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/edn; charset=utf-8",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/octet-stream",data], null);

}
}
});
shadow.xhr.as_url = (function shadow$xhr$as_url(input){
if(typeof input === 'string'){
return input;
} else {
if(((cljs.core.vector_QMARK_(input)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(input))) && (typeof cljs.core.first(input) === 'string') && (cljs.core.map_QMARK_(cljs.core.second(input))))){
var vec__31747 = input;
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31747,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31747,(1),null);
return shadow.xhr.make_url(url,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doesnt look like an url",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));

}
}
});
shadow.xhr.e__GT_data = (function shadow$xhr$e__GT_data(e){
return e;
});
shadow.xhr.event_handler = (function shadow$xhr$event_handler(req,events,event_type){
return (function (e){
if(cljs.core.map_QMARK_(events)){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,event_type);
if(cljs.core.truth_(temp__5457__auto__)){
var c = temp__5457__auto__;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;
}
} else {
if(!((events == null))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(events,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,req,shadow.xhr.e__GT_data(e)], null));
} else {
return null;

}
}
});
});
shadow.xhr.request_ok_QMARK_ = (function shadow$xhr$request_ok_QMARK_(status){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),status);
});
shadow.xhr.request_error_QMARK_ = (function shadow$xhr$request_error_QMARK_(status){
return (status >= (400));
});
/**
 * creates a channel and performs xhr request like (chan :GET "/something")
 * 
 * accepts url as string or [url params]
 * 
 * this channel will receive one message [status body req] on load
 * loadend will close the result channel, so you will get nil results on request errors/timeouts
 * 
 * use options hash to pass in extra channels
 * 
 * (chan :POST "/something" some-data {:events chan-or-map
 *                                       :upload chan-or-map})
 * 
 * when given a chan that channels receives messages in form of [event-type event-data req]
 * when given a map a channel is expected for each eventtype and will receive [event-data req]
 * {:timeout some-chan}, if no channel for a given event is present, no message is sent
 * 
 * event types are :loadstart :progress :abort :error :timeout :loadend :load (see xhr spec)
 * only exception is that status >= 500 does not return a result and produces an error event instead
 */
shadow.xhr.chan = (function shadow$xhr$chan(var_args){
var G__31765 = arguments.length;
switch (G__31765) {
case 2:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,p__31766){
var map__31767 = p__31766;
var map__31767__$1 = ((((!((map__31767 == null)))?(((((map__31767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31767):map__31767);
var options = map__31767__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31767__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var upload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31767__$1,new cljs.core.Keyword(null,"upload","upload",-255769218));
var body_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31767__$1,new cljs.core.Keyword(null,"body-only","body-only",-698120682));
var req = (new XMLHttpRequest());
var body_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
var vec__31773 = ((body_QMARK_)?shadow.xhr.transform_request_body(data):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31773,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31773,(1),null);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
if(cljs.core.truth_((function (){var and__3911__auto__ = body_QMARK_;
if(and__3911__auto__){
return upload;
} else {
return and__3911__auto__;
}
})())){
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"error","error",-978969032),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"error","error",-978969032)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req.upload,new cljs.core.Keyword(null,"load","load",-1318641184),shadow.xhr.event_handler(req,upload,new cljs.core.Keyword(null,"loadend","loadend",1430560564)));
} else {
}

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadstart","loadstart",1841209333)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"progress","progress",244323547),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"progress","progress",244323547)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"abort","abort",521193198),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"abort","abort",521193198)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"timeout","timeout",-318625318),shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"timeout","timeout",-318625318)));

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"loadend","loadend",1430560564),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"loadend","loadend",1430560564));
return ((function (callback,req,body_QMARK_,vec__31773,content_type,body,result_chan,map__31767,map__31767__$1,options,events,upload,body_only){
return (function (e){
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(e) : callback.call(null,e));

return cljs.core.async.close_BANG_(result_chan);
});
;})(callback,req,body_QMARK_,vec__31773,content_type,body,result_chan,map__31767,map__31767__$1,options,events,upload,body_only))
})());

var error_handler_31798 = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"error","error",-978969032));
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"error","error",-978969032),error_handler_31798);

shadow.dom.on.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"load","load",-1318641184),(function (){var callback = shadow.xhr.event_handler(req,events,new cljs.core.Keyword(null,"load","load",-1318641184));
return ((function (callback,error_handler_31798,req,body_QMARK_,vec__31773,content_type,body,result_chan,map__31767,map__31767__$1,options,events,upload,body_only){
return (function (e){
var status = req.status;
var body__$1 = (function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5455__auto__)){
var transform = temp__5455__auto__;
var G__31787 = req.responseText;
var G__31788 = req;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(G__31787,G__31788) : transform.call(null,G__31787,G__31788));
} else {
return shadow.xhr.auto_transform(req);
}
})();
if(cljs.core.truth_(shadow.xhr.request_error_QMARK_(status))){
return (error_handler_31798.cljs$core$IFn$_invoke$arity$1 ? error_handler_31798.cljs$core$IFn$_invoke$arity$1(e) : error_handler_31798.call(null,e));
} else {
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(e) : callback.call(null,e));

if(cljs.core.truth_(body_only)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,body__$1);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(result_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,body__$1,req], null));
}
}
});
;})(callback,error_handler_31798,req,body_QMARK_,vec__31773,content_type,body,result_chan,map__31767,map__31767__$1,options,events,upload,body_only))
})());

req.open(cljs.core.name(method),shadow.xhr.as_url(url),true);

req.responseType = "text";

req.withCredentials = !(new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235).cljs$core$IFn$_invoke$arity$1(options) === false);

if(body_QMARK_){
req.setRequestHeader("Content-Type",content_type);
} else {
}

if(body_QMARK_){
req.send(body);
} else {
req.send();
}

return result_chan;
});

shadow.xhr.chan.cljs$lang$maxFixedArity = 4;

shadow.xhr.request = (function shadow$xhr$request(var_args){
var G__31813 = arguments.length;
switch (G__31813) {
case 2:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$2 = (function (method,url){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$3 = (function (method,url,data){
return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.xhr.request.cljs$core$IFn$_invoke$arity$4 = (function (method,url,data,options){
if(((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"DELETE","DELETE",1688673772),null,new cljs.core.Keyword(null,"GET","GET",1736591026),null], null), null),method))) && ((data == null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request needs data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"options","options",99638489),options], null));
} else {
}

var body_QMARK_ = !(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method)) || ((data == null))));
var vec__31814 = shadow.xhr.transform_request_body(data);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31814,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31814,(1),null);
var req = (function (){var G__31817 = cljs.core.name(method);
var G__31818 = (cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1736591026),method);
if(and__3911__auto__){
return data;
} else {
return and__3911__auto__;
}
})())?shadow.xhr.make_url(url,data):url);
var G__31819 = ((body_QMARK_)?body:null);
var G__31820 = shadow.xhr.make_request_options(((body_QMARK_)?cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null),content_type):options));
return goog.labs.net.xhr.send(G__31817,G__31818,G__31819,G__31820);
})();
var req__$1 = goog.result.SimpleResult.fromPromise(req);
return goog.result.transform(req__$1,shadow.xhr.auto_transform);
});

shadow.xhr.request.cljs$lang$maxFixedArity = 4;

shadow.xhr.upload = (function shadow$xhr$upload(var_args){
var args__4500__auto__ = [];
var len__4497__auto___31839 = arguments.length;
var i__4498__auto___31840 = (0);
while(true){
if((i__4498__auto___31840 < len__4497__auto___31839)){
args__4500__auto__.push((arguments[i__4498__auto___31840]));

var G__31841 = (i__4498__auto___31840 + (1));
i__4498__auto___31840 = G__31841;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic = (function (url,file,events){
var xhr = (new XMLHttpRequest());
var seq__31826_31842 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),events));
var chunk__31828_31843 = null;
var count__31829_31844 = (0);
var i__31830_31845 = (0);
while(true){
if((i__31830_31845 < count__31829_31844)){
var vec__31832_31846 = chunk__31828_31843.cljs$core$IIndexed$_nth$arity$2(null,i__31830_31845);
var ev_id_31847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31832_31846,(0),null);
var ev_handler_31848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31832_31846,(1),null);
var target_31849 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_31847))?(xhr["upload"]):xhr);
target_31849.addEventListener(cljs.core.name(ev_id_31847),ev_handler_31848);


var G__31850 = seq__31826_31842;
var G__31851 = chunk__31828_31843;
var G__31852 = count__31829_31844;
var G__31853 = (i__31830_31845 + (1));
seq__31826_31842 = G__31850;
chunk__31828_31843 = G__31851;
count__31829_31844 = G__31852;
i__31830_31845 = G__31853;
continue;
} else {
var temp__5457__auto___31854 = cljs.core.seq(seq__31826_31842);
if(temp__5457__auto___31854){
var seq__31826_31855__$1 = temp__5457__auto___31854;
if(cljs.core.chunked_seq_QMARK_(seq__31826_31855__$1)){
var c__4319__auto___31856 = cljs.core.chunk_first(seq__31826_31855__$1);
var G__31857 = cljs.core.chunk_rest(seq__31826_31855__$1);
var G__31858 = c__4319__auto___31856;
var G__31859 = cljs.core.count(c__4319__auto___31856);
var G__31860 = (0);
seq__31826_31842 = G__31857;
chunk__31828_31843 = G__31858;
count__31829_31844 = G__31859;
i__31830_31845 = G__31860;
continue;
} else {
var vec__31835_31861 = cljs.core.first(seq__31826_31855__$1);
var ev_id_31862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31835_31861,(0),null);
var ev_handler_31863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31835_31861,(1),null);
var target_31864 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",244323547),ev_id_31862))?(xhr["upload"]):xhr);
target_31864.addEventListener(cljs.core.name(ev_id_31862),ev_handler_31863);


var G__31865 = cljs.core.next(seq__31826_31855__$1);
var G__31866 = null;
var G__31867 = (0);
var G__31868 = (0);
seq__31826_31842 = G__31865;
chunk__31828_31843 = G__31866;
count__31829_31844 = G__31867;
i__31830_31845 = G__31868;
continue;
}
} else {
}
}
break;
}

var G__31838 = xhr;
G__31838.open("PUT",url);

G__31838.send(file);

return G__31838;
});

shadow.xhr.upload.cljs$lang$maxFixedArity = (2);

shadow.xhr.upload.cljs$lang$applyTo = (function (seq31823){
var G__31824 = cljs.core.first(seq31823);
var seq31823__$1 = cljs.core.next(seq31823);
var G__31825 = cljs.core.first(seq31823__$1);
var seq31823__$2 = cljs.core.next(seq31823__$1);
return shadow.xhr.upload.cljs$core$IFn$_invoke$arity$variadic(G__31824,G__31825,seq31823__$2);
});


//# sourceMappingURL=shadow.xhr.js.map
