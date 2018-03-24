goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if(((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4211__auto__ = (((obj == null))?null:obj);
var m__4212__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4212__auto__.call(null,obj));
} else {
var m__4212__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__4212__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__40967 = millis;
if((G__40967 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__40967) : goog.date.UtcDateTime.fromTimestamp.call(null,G__40967));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4292__auto__ = (function cljs_time$coerce$from_string_$_iter__40968(s__40969){
return (new cljs.core.LazySeq(null,(function (){
var s__40969__$1 = s__40969;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__40969__$1);
if(temp__5457__auto__){
var s__40969__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40969__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__40969__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__40971 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__40970 = (0);
while(true){
if((i__40970 < size__4291__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__40970);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e40972){if((e40972 instanceof Error)){
var _ = e40972;
return null;
} else {
throw e40972;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__40971,d);

var G__40974 = (i__40970 + (1));
i__40970 = G__40974;
continue;
} else {
var G__40975 = (i__40970 + (1));
i__40970 = G__40975;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40971),cljs_time$coerce$from_string_$_iter__40968(cljs.core.chunk_rest(s__40969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40971),null);
}
} else {
var f = cljs.core.first(s__40969__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e40973){if((e40973 instanceof Error)){
var _ = e40973;
return null;
} else {
throw e40973;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__40968(cljs.core.rest(s__40969__$2)));
} else {
var G__40976 = cljs.core.rest(s__40969__$2);
s__40969__$1 = G__40976;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__40977 = date;
var G__40977__$1 = (((G__40977 == null))?null:G__40977.getTime());
if((G__40977__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__40977__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__40978 = obj;
var G__40978__$1 = (((G__40978 == null))?null:cljs_time.coerce.to_date_time(G__40978));
if((G__40978__$1 == null)){
return null;
} else {
return G__40978__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__3911__auto__ = millis;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__3911__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__40979 = obj;
var G__40979__$1 = (((G__40979 == null))?null:cljs_time.coerce.to_date_time(G__40979));
var G__40979__$2 = (((G__40979__$1 == null))?null:G__40979__$1.getTime());
if((G__40979__$2 == null)){
return null;
} else {
return (new Date(G__40979__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__40980 = obj;
var G__40980__$1 = (((G__40980 == null))?null:cljs_time.coerce.to_date_time(G__40980));
if((G__40980__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__40980__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5455__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5455__auto__)){
var dt = temp__5455__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5455__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5455__auto__)){
var dt = temp__5455__auto__;
var G__40981 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__40981.setHours(dt.getHours());

G__40981.setMinutes(dt.getMinutes());

G__40981.setSeconds(dt.getSeconds());

G__40981.setMilliseconds(dt.getMilliseconds());

return G__40981;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__40982_40991 = cljs_time.coerce.to_date_time;
var G__40983_40992 = "null";
var G__40984_40993 = ((function (G__40982_40991,G__40983_40992){
return (function (_){
return null;
});})(G__40982_40991,G__40983_40992))
;
goog.object.set(G__40982_40991,G__40983_40992,G__40984_40993);

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__40985_40994 = cljs_time.coerce.to_date_time;
var G__40986_40995 = "number";
var G__40987_40996 = ((function (G__40985_40994,G__40986_40995){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__40985_40994,G__40986_40995))
;
goog.object.set(G__40985_40994,G__40986_40995,G__40987_40996);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__40988_40997 = cljs_time.coerce.to_date_time;
var G__40989_40998 = "string";
var G__40990_40999 = ((function (G__40988_40997,G__40989_40998){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__40988_40997,G__40989_40998))
;
goog.object.set(G__40988_40997,G__40989_40998,G__40990_40999);

//# sourceMappingURL=cljs_time.coerce.js.map
