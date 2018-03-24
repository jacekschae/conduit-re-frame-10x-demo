goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25815){
var vec__25817 = p__25815;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25817,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25817,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__25844 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25844,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25844,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25844,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__25859 = arguments.length;
switch (G__25859) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__25932_25962 = clojure.data.equality_partition;
var G__25933_25963 = "null";
var G__25934_25964 = ((function (G__25932_25962,G__25933_25963){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25932_25962,G__25933_25963))
;
goog.object.set(G__25932_25962,G__25933_25963,G__25934_25964);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__25935_25967 = clojure.data.equality_partition;
var G__25936_25968 = "string";
var G__25937_25969 = ((function (G__25935_25967,G__25936_25968){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25935_25967,G__25936_25968))
;
goog.object.set(G__25935_25967,G__25936_25968,G__25937_25969);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__25938_25970 = clojure.data.equality_partition;
var G__25939_25971 = "number";
var G__25940_25972 = ((function (G__25938_25970,G__25939_25971){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25938_25970,G__25939_25971))
;
goog.object.set(G__25938_25970,G__25939_25971,G__25940_25972);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__25941_25973 = clojure.data.equality_partition;
var G__25942_25974 = "array";
var G__25943_25975 = ((function (G__25941_25973,G__25942_25974){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__25941_25973,G__25942_25974))
;
goog.object.set(G__25941_25973,G__25942_25974,G__25943_25975);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__25944_25977 = clojure.data.equality_partition;
var G__25945_25978 = "function";
var G__25946_25979 = ((function (G__25944_25977,G__25945_25978){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25944_25977,G__25945_25978))
;
goog.object.set(G__25944_25977,G__25945_25978,G__25946_25979);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__25948_25980 = clojure.data.equality_partition;
var G__25949_25981 = "boolean";
var G__25950_25982 = ((function (G__25948_25980,G__25949_25981){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25948_25980,G__25949_25981))
;
goog.object.set(G__25948_25980,G__25949_25981,G__25950_25982);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__25952_25983 = clojure.data.equality_partition;
var G__25953_25984 = "_";
var G__25954_25985 = ((function (G__25952_25983,G__25953_25984){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__25952_25983,G__25953_25984))
;
goog.object.set(G__25952_25983,G__25953_25984,G__25954_25985);
goog.object.set(clojure.data.Diff,"null",true);

var G__25991_26026 = clojure.data.diff_similar;
var G__25992_26027 = "null";
var G__25993_26028 = ((function (G__25991_26026,G__25992_26027){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25991_26026,G__25992_26027))
;
goog.object.set(G__25991_26026,G__25992_26027,G__25993_26028);

goog.object.set(clojure.data.Diff,"string",true);

var G__25994_26031 = clojure.data.diff_similar;
var G__25995_26032 = "string";
var G__25996_26033 = ((function (G__25994_26031,G__25995_26032){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25994_26031,G__25995_26032))
;
goog.object.set(G__25994_26031,G__25995_26032,G__25996_26033);

goog.object.set(clojure.data.Diff,"number",true);

var G__25999_26034 = clojure.data.diff_similar;
var G__26000_26035 = "number";
var G__26001_26036 = ((function (G__25999_26034,G__26000_26035){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25999_26034,G__26000_26035))
;
goog.object.set(G__25999_26034,G__26000_26035,G__26001_26036);

goog.object.set(clojure.data.Diff,"array",true);

var G__26003_26038 = clojure.data.diff_similar;
var G__26004_26039 = "array";
var G__26005_26040 = ((function (G__26003_26038,G__26004_26039){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__26003_26038,G__26004_26039))
;
goog.object.set(G__26003_26038,G__26004_26039,G__26005_26040);

goog.object.set(clojure.data.Diff,"function",true);

var G__26007_26041 = clojure.data.diff_similar;
var G__26008_26042 = "function";
var G__26009_26043 = ((function (G__26007_26041,G__26008_26042){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26007_26041,G__26008_26042))
;
goog.object.set(G__26007_26041,G__26008_26042,G__26009_26043);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__26010_26044 = clojure.data.diff_similar;
var G__26011_26045 = "boolean";
var G__26012_26046 = ((function (G__26010_26044,G__26011_26045){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26010_26044,G__26011_26045))
;
goog.object.set(G__26010_26044,G__26011_26045,G__26012_26046);

goog.object.set(clojure.data.Diff,"_",true);

var G__26017_26047 = clojure.data.diff_similar;
var G__26018_26048 = "_";
var G__26019_26049 = ((function (G__26017_26047,G__26018_26048){
return (function (a,b){
var fexpr__26022 = (function (){var G__26023 = clojure.data.equality_partition(a);
var G__26023__$1 = (((G__26023 instanceof cljs.core.Keyword))?G__26023.fqn:null);
switch (G__26023__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26023__$1)].join('')));

}
})();
return (fexpr__26022.cljs$core$IFn$_invoke$arity$2 ? fexpr__26022.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26022.call(null,a,b));
});})(G__26017_26047,G__26018_26048))
;
goog.object.set(G__26017_26047,G__26018_26048,G__26019_26049);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
