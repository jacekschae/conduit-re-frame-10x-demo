goog.provide('shadow.cljs.devtools.client.console');
goog.require('cljs.core');
goog.require('clojure.string');
shadow.cljs.devtools.client.console.push_all = (function shadow$cljs$devtools$client$console$push_all(arr,item){
if(cljs.core.vector_QMARK_(item)){
var seq__37308 = cljs.core.seq(item);
var chunk__37309 = null;
var count__37310 = (0);
var i__37311 = (0);
while(true){
if((i__37311 < count__37310)){
var it = chunk__37309.cljs$core$IIndexed$_nth$arity$2(null,i__37311);
arr.push(it);


var G__37312 = seq__37308;
var G__37313 = chunk__37309;
var G__37314 = count__37310;
var G__37315 = (i__37311 + (1));
seq__37308 = G__37312;
chunk__37309 = G__37313;
count__37310 = G__37314;
i__37311 = G__37315;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__37308);
if(temp__5457__auto__){
var seq__37308__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37308__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__37308__$1);
var G__37316 = cljs.core.chunk_rest(seq__37308__$1);
var G__37317 = c__4319__auto__;
var G__37318 = cljs.core.count(c__4319__auto__);
var G__37319 = (0);
seq__37308 = G__37316;
chunk__37309 = G__37317;
count__37310 = G__37318;
i__37311 = G__37319;
continue;
} else {
var it = cljs.core.first(seq__37308__$1);
arr.push(it);


var G__37320 = cljs.core.next(seq__37308__$1);
var G__37321 = null;
var G__37322 = (0);
var G__37323 = (0);
seq__37308 = G__37320;
chunk__37309 = G__37321;
count__37310 = G__37322;
i__37311 = G__37323;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return arr.push(item);
}
});
shadow.cljs.devtools.client.console.object_ref = (function shadow$cljs$devtools$client$console$object_ref(obj){
if(cljs.core.truth_(obj)){
return ["object",({"object": obj})];
} else {
return null;
}
});
shadow.cljs.devtools.client.console.map__GT_style = (function shadow$cljs$devtools$client$console$map__GT_style(m){
return ({"style": clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37324){
var vec__37325 = p__37324;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37325,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),";"].join('');
}),m))});
});
shadow.cljs.devtools.client.console.clj__GT_jsonml = (function shadow$cljs$devtools$client$console$clj__GT_jsonml(struct){
if((struct == null)){
return null;
} else {
if(cljs.core.array_QMARK_(struct)){
return struct;
} else {
if(cljs.core.vector_QMARK_(struct)){
var vec__37330 = struct;
var seq__37331 = cljs.core.seq(vec__37330);
var first__37332 = cljs.core.first(seq__37331);
var seq__37331__$1 = cljs.core.next(seq__37331);
var tag = first__37332;
var first__37332__$1 = cljs.core.first(seq__37331__$1);
var seq__37331__$2 = cljs.core.next(seq__37331__$1);
var attrs = first__37332__$1;
var children = seq__37331__$2;
var js = [cljs.core.name(tag),shadow.cljs.devtools.client.console.map__GT_style(attrs)];
var seq__37333_37338 = cljs.core.seq(children);
var chunk__37334_37339 = null;
var count__37335_37340 = (0);
var i__37336_37341 = (0);
while(true){
if((i__37336_37341 < count__37335_37340)){
var child_37342 = chunk__37334_37339.cljs$core$IIndexed$_nth$arity$2(null,i__37336_37341);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_37342) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_37342)));


var G__37343 = seq__37333_37338;
var G__37344 = chunk__37334_37339;
var G__37345 = count__37335_37340;
var G__37346 = (i__37336_37341 + (1));
seq__37333_37338 = G__37343;
chunk__37334_37339 = G__37344;
count__37335_37340 = G__37345;
i__37336_37341 = G__37346;
continue;
} else {
var temp__5457__auto___37347 = cljs.core.seq(seq__37333_37338);
if(temp__5457__auto___37347){
var seq__37333_37348__$1 = temp__5457__auto___37347;
if(cljs.core.chunked_seq_QMARK_(seq__37333_37348__$1)){
var c__4319__auto___37349 = cljs.core.chunk_first(seq__37333_37348__$1);
var G__37350 = cljs.core.chunk_rest(seq__37333_37348__$1);
var G__37351 = c__4319__auto___37349;
var G__37352 = cljs.core.count(c__4319__auto___37349);
var G__37353 = (0);
seq__37333_37338 = G__37350;
chunk__37334_37339 = G__37351;
count__37335_37340 = G__37352;
i__37336_37341 = G__37353;
continue;
} else {
var child_37354 = cljs.core.first(seq__37333_37348__$1);
shadow.cljs.devtools.client.console.push_all(js,(shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.console.clj__GT_jsonml.cljs$core$IFn$_invoke$arity$1(child_37354) : shadow.cljs.devtools.client.console.clj__GT_jsonml.call(null,child_37354)));


var G__37355 = cljs.core.next(seq__37333_37348__$1);
var G__37356 = null;
var G__37357 = (0);
var G__37358 = (0);
seq__37333_37338 = G__37355;
chunk__37334_37339 = G__37356;
count__37335_37340 = G__37357;
i__37336_37341 = G__37358;
continue;
}
} else {
}
}
break;
}

return js;
} else {
if(typeof struct === 'string'){
return struct;
} else {
if(typeof struct === 'number'){
return struct;
} else {
if(cljs.core.seq_QMARK_(struct)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.console.clj__GT_jsonml),struct);
} else {
return shadow.cljs.devtools.client.console.object_ref(struct);

}
}
}
}
}
}
});

/**
* @constructor
*/
shadow.cljs.devtools.client.console.SeqFormatter = (function (){
});
shadow.cljs.devtools.client.console.SeqFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if(((cljs.core.sequential_QMARK_(obj)) || (cljs.core.set_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.cljs.devtools.client.console.SeqFormatter.prototype.body = (function (s){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),(function (){var iter__4292__auto__ = ((function (this$){
return (function shadow$cljs$devtools$client$console$iter__37366(s__37367){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__37367__$1 = s__37367;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__37367__$1);
if(temp__5457__auto__){
var s__37367__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37367__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__37367__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__37369 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__37368 = (0);
while(true){
if((i__37368 < size__4291__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__37368);
cljs.core.chunk_append(b__37369,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null));

var G__37380 = (i__37368 + (1));
i__37368 = G__37380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37369),shadow$cljs$devtools$client$console$iter__37366(cljs.core.chunk_rest(s__37367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37369),null);
}
} else {
var value = cljs.core.first(s__37367__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null),shadow$cljs$devtools$client$console$iter__37366(cljs.core.rest(s__37367__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__4292__auto__(s);
})()], null));
});

shadow.cljs.devtools.client.console.SeqFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SeqFormatter";

shadow.cljs.devtools.client.console.SeqFormatter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.cljs.devtools.client.console/SeqFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SeqFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SeqFormatter = (function shadow$cljs$devtools$client$console$__GT_SeqFormatter(){
return (new shadow.cljs.devtools.client.console.SeqFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.MapFormatter = (function (){
});
shadow.cljs.devtools.client.console.MapFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.PersistentHashMap)) || ((obj instanceof cljs.core.PersistentArrayMap)) || (cljs.core.record_QMARK_(obj)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))," [count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(obj)),"]"].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return cljs.core.boolean$(cljs.core.seq(obj));
});

shadow.cljs.devtools.client.console.MapFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),(function (){var iter__4292__auto__ = ((function (this$){
return (function shadow$cljs$devtools$client$console$iter__37383(s__37384){
return (new cljs.core.LazySeq(null,((function (this$){
return (function (){
var s__37384__$1 = s__37384;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__37384__$1);
if(temp__5457__auto__){
var s__37384__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37384__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__37384__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__37386 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__37385 = (0);
while(true){
if((i__37385 < size__4291__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__37385);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
cljs.core.chunk_append(b__37386,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null));

var G__37398 = (i__37385 + (1));
i__37385 = G__37398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37386),shadow$cljs$devtools$client$console$iter__37383(cljs.core.chunk_rest(s__37384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37386),null);
}
} else {
var key = cljs.core.first(s__37384__$2);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(key)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,shadow.cljs.devtools.client.console.object_ref(value)], null)], null),shadow$cljs$devtools$client$console$iter__37383(cljs.core.rest(s__37384__$2)));
}
} else {
return null;
}
break;
}
});})(this$))
,null,null));
});})(this$))
;
return iter__4292__auto__((function (){var k = cljs.core.keys(m);
try{return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(k);
}catch (e37392){var e = e37392;
return k;
}})());
})()], null));
});

shadow.cljs.devtools.client.console.MapFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/MapFormatter";

shadow.cljs.devtools.client.console.MapFormatter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.cljs.devtools.client.console/MapFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/MapFormatter.
 */
shadow.cljs.devtools.client.console.__GT_MapFormatter = (function shadow$cljs$devtools$client$console$__GT_MapFormatter(){
return (new shadow.cljs.devtools.client.console.MapFormatter());
});

shadow.cljs.devtools.client.console.keyword_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"rgb(136, 19, 145)"], null);

/**
* @constructor
*/
shadow.cljs.devtools.client.console.KeywordFormatter = (function (){
});
shadow.cljs.devtools.client.console.KeywordFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Keyword)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.cljs.devtools.client.console.KeywordFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.cljs.devtools.client.console.KeywordFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/KeywordFormatter";

shadow.cljs.devtools.client.console.KeywordFormatter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.cljs.devtools.client.console/KeywordFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/KeywordFormatter.
 */
shadow.cljs.devtools.client.console.__GT_KeywordFormatter = (function shadow$cljs$devtools$client$console$__GT_KeywordFormatter(){
return (new shadow.cljs.devtools.client.console.KeywordFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.SymbolFormatter = (function (){
});
shadow.cljs.devtools.client.console.SymbolFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((obj instanceof cljs.core.Symbol)){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0))], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return false;
});

shadow.cljs.devtools.client.console.SymbolFormatter.prototype.body = (function (m){
var self__ = this;
var this$ = this;
return null;
});

shadow.cljs.devtools.client.console.SymbolFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/SymbolFormatter";

shadow.cljs.devtools.client.console.SymbolFormatter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.cljs.devtools.client.console/SymbolFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/SymbolFormatter.
 */
shadow.cljs.devtools.client.console.__GT_SymbolFormatter = (function shadow$cljs$devtools$client$console$__GT_SymbolFormatter(){
return (new shadow.cljs.devtools.client.console.SymbolFormatter());
});


/**
* @constructor
*/
shadow.cljs.devtools.client.console.DerefFormatter = (function (){
});
shadow.cljs.devtools.client.console.DerefFormatter.prototype.shadow$formatter = (function (){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.header = (function (obj){
var self__ = this;
var this$ = this;
if((((obj instanceof cljs.core.Atom)) || ((obj instanceof cljs.core.Volatile)))){
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),shadow.cljs.devtools.client.console.keyword_style,["@DEREF ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(obj)], 0)))].join('')], null));
} else {
return null;
}
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.hasBody = (function (obj){
var self__ = this;
var this$ = this;
return true;
});

shadow.cljs.devtools.client.console.DerefFormatter.prototype.body = (function (v){
var self__ = this;
var this$ = this;
return shadow.cljs.devtools.client.console.clj__GT_jsonml(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"14px"], null),shadow.cljs.devtools.client.console.object_ref(cljs.core.deref(v))], null));
});

shadow.cljs.devtools.client.console.DerefFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$type = true;

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorStr = "shadow.cljs.devtools.client.console/DerefFormatter";

shadow.cljs.devtools.client.console.DerefFormatter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.cljs.devtools.client.console/DerefFormatter");
});

/**
 * Positional factory function for shadow.cljs.devtools.client.console/DerefFormatter.
 */
shadow.cljs.devtools.client.console.__GT_DerefFormatter = (function shadow$cljs$devtools$client$console$__GT_DerefFormatter(){
return (new shadow.cljs.devtools.client.console.DerefFormatter());
});

shadow.cljs.devtools.client.console.install_all_BANG_ = (function shadow$cljs$devtools$client$console$install_all_BANG_(){
var temp__5457__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
var G__37478 = f;
G__37478.push((new shadow.cljs.devtools.client.console.KeywordFormatter()));

G__37478.push((new shadow.cljs.devtools.client.console.MapFormatter()));

G__37478.push((new shadow.cljs.devtools.client.console.SeqFormatter()));

G__37478.push((new shadow.cljs.devtools.client.console.SymbolFormatter()));

G__37478.push((new shadow.cljs.devtools.client.console.DerefFormatter()));

return G__37478;
} else {
return null;
}
});
shadow.cljs.devtools.client.console.remove_all_BANG_ = (function shadow$cljs$devtools$client$console$remove_all_BANG_(){
var all = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37483_SHARP_){
return goog.object.get(p1__37483_SHARP_,"shadow$formatter");
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = goog.global.devtoolsFormatters;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return [];
}
})())));
return goog.object.set(goog.global,"devtoolsFormatters",all);
});
shadow.cljs.devtools.client.console.remove_all_BANG_();
shadow.cljs.devtools.client.console.install_all_BANG_();

//# sourceMappingURL=shadow.cljs.devtools.client.console.js.map
