goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__39621 = e.target.readyState;
var fexpr__39620 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__39620.cljs$core$IFn$_invoke$arity$1 ? fexpr__39620.cljs$core$IFn$_invoke$arity$1(G__39621) : fexpr__39620.call(null,G__39621));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__39650,handler){
var map__39651 = p__39650;
var map__39651__$1 = ((((!((map__39651 == null)))?(((((map__39651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39651):map__39651);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39651__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39651__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39651__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39651__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39651__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39651__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39651__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__39651,map__39651__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__39645_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__39645_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__39651,map__39651__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___39717 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___39717)){
var response_type_39718 = temp__5457__auto___39717;
this$__$1.responseType = cljs.core.name(response_type_39718);
} else {
}

var seq__39663_39723 = cljs.core.seq(headers);
var chunk__39664_39724 = null;
var count__39665_39725 = (0);
var i__39666_39726 = (0);
while(true){
if((i__39666_39726 < count__39665_39725)){
var vec__39667_39727 = chunk__39664_39724.cljs$core$IIndexed$_nth$arity$2(null,i__39666_39726);
var k_39728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39667_39727,(0),null);
var v_39729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39667_39727,(1),null);
this$__$1.setRequestHeader(k_39728,v_39729);


var G__39737 = seq__39663_39723;
var G__39738 = chunk__39664_39724;
var G__39739 = count__39665_39725;
var G__39740 = (i__39666_39726 + (1));
seq__39663_39723 = G__39737;
chunk__39664_39724 = G__39738;
count__39665_39725 = G__39739;
i__39666_39726 = G__39740;
continue;
} else {
var temp__5457__auto___39741 = cljs.core.seq(seq__39663_39723);
if(temp__5457__auto___39741){
var seq__39663_39742__$1 = temp__5457__auto___39741;
if(cljs.core.chunked_seq_QMARK_(seq__39663_39742__$1)){
var c__4319__auto___39744 = cljs.core.chunk_first(seq__39663_39742__$1);
var G__39745 = cljs.core.chunk_rest(seq__39663_39742__$1);
var G__39746 = c__4319__auto___39744;
var G__39747 = cljs.core.count(c__4319__auto___39744);
var G__39748 = (0);
seq__39663_39723 = G__39745;
chunk__39664_39724 = G__39746;
count__39665_39725 = G__39747;
i__39666_39726 = G__39748;
continue;
} else {
var vec__39675_39749 = cljs.core.first(seq__39663_39742__$1);
var k_39750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39675_39749,(0),null);
var v_39751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39675_39749,(1),null);
this$__$1.setRequestHeader(k_39750,v_39751);


var G__39762 = cljs.core.next(seq__39663_39742__$1);
var G__39763 = null;
var G__39764 = (0);
var G__39765 = (0);
seq__39663_39723 = G__39762;
chunk__39664_39724 = G__39763;
count__39665_39725 = G__39764;
i__39666_39726 = G__39765;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3922__auto__ = body;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map
