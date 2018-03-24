goog.provide('mranderson047.garden.v1v3v3.garden.compression');
goog.require('cljs.core');
/**
 * Return a function which when given a string will return a map
 *   containing the chunk of text matched by re, it's size, and tag.
 */
mranderson047.garden.v1v3v3.garden.compression.token_fn = (function mranderson047$garden$v1v3v3$garden$compression$token_fn(p__32986){
var vec__32988 = p__32986;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32988,(0),null);
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32988,(1),null);
return ((function (vec__32988,tag,re){
return (function (s){
var temp__5457__auto__ = cljs.core.re_find(re,s);
if(cljs.core.truth_(temp__5457__auto__)){
var chunk = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"chunk","chunk",-1191159620),chunk,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.count(chunk)], null);
} else {
return null;
}
});
;})(vec__32988,tag,re))
});
/**
 * Given an arbitrary number of [tag regex] pairs, return a function
 *   which when given a string s will return the first matching token of s.
 *   Token precedence is determined by the order of the pairs. The first
 *   and last pairs have the highest and lowest precedence respectively.
 */
mranderson047.garden.v1v3v3.garden.compression.tokenizer = (function mranderson047$garden$v1v3v3$garden$compression$tokenizer(var_args){
var args__4500__auto__ = [];
var len__4497__auto___32999 = arguments.length;
var i__4498__auto___33000 = (0);
while(true){
if((i__4498__auto___33000 < len__4497__auto___32999)){
args__4500__auto__.push((arguments[i__4498__auto___33000]));

var G__33001 = (i__4498__auto___33000 + (1));
i__4498__auto___33000 = G__33001;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

mranderson047.garden.v1v3v3.garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_regexes){
var fs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compression.token_fn,tags_PLUS_regexes);
return ((function (fs){
return (function (s){
return cljs.core.some(((function (fs){
return (function (p1__32997_SHARP_){
return (p1__32997_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32997_SHARP_.cljs$core$IFn$_invoke$arity$1(s) : p1__32997_SHARP_.call(null,s));
});})(fs))
,fs);
});
;})(fs))
});

mranderson047.garden.v1v3v3.garden.compression.tokenizer.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.compression.tokenizer.cljs$lang$applyTo = (function (seq32998){
return mranderson047.garden.v1v3v3.garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32998));
});

/**
 * Tokenizer used during stylesheet compression.
 */
mranderson047.garden.v1v3v3.garden.compression.stylesheet_tokenizer = mranderson047.garden.v1v3v3.garden.compression.tokenizer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),/^\"(?:\\.|[^\"])*\"/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-brace","r-brace",-1335738887),/^\s*\{\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-brace","l-brace",613286657),/^;?\s*}/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r-paren","r-paren",-1688338021),/^\s*\(\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l-paren","l-paren",2052672514),/^\s*\)/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comma","comma",1699024745),/^,\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colon","colon",-965200945),/^:\s*/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semicolon","semicolon",797086549),/^;/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space+","space+",378127624),/^ +/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"white-space+","white-space+",1452157162),/^\s+/], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"any","any",1705907423),/^./], null)], 0));
/**
 * Compress a string of CSS using a basic compressor.
 */
mranderson047.garden.v1v3v3.garden.compression.compress_stylesheet = (function mranderson047$garden$v1v3v3$garden$compression$compress_stylesheet(stylesheet){
var s1 = stylesheet;
var s2 = "";
while(true){
var temp__5455__auto__ = (mranderson047.garden.v1v3v3.garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1 ? mranderson047.garden.v1v3v3.garden.compression.stylesheet_tokenizer.cljs$core$IFn$_invoke$arity$1(s1) : mranderson047.garden.v1v3v3.garden.compression.stylesheet_tokenizer.call(null,s1));
if(cljs.core.truth_(temp__5455__auto__)){
var map__33014 = temp__5455__auto__;
var map__33014__$1 = ((((!((map__33014 == null)))?(((((map__33014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33014):map__33014);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33014__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var chunk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33014__$1,new cljs.core.Keyword(null,"chunk","chunk",-1191159620));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33014__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var G__33039 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s1,size);
var G__33040 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33028 = tag;
var G__33028__$1 = (((G__33028 instanceof cljs.core.Keyword))?G__33028.fqn:null);
switch (G__33028__$1) {
case "string":
return chunk;

break;
case "r-brace":
return "{";

break;
case "l-brace":
return "}";

break;
case "r-paren":
return "(";

break;
case "l-paren":
return ")";

break;
case "comma":
return ",";

break;
case "semi-comma":
return ";";

break;
case "colon":
return ":";

break;
case "space+":
return " ";

break;
case "white-space+":
return "";

break;
default:
return chunk;

}
})())].join('');
s1 = G__33039;
s2 = G__33040;
continue;
} else {
return s2;
}
break;
}
});

//# sourceMappingURL=mranderson047.garden.v1v3v3.garden.compression.js.map
