goog.provide('mranderson047.garden.v1v3v3.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson047.garden.v1v3v3.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
mranderson047.garden.v1v3v3.garden.util.format = (function mranderson047$garden$v1v3v3$garden$util$format(var_args){
var args__4500__auto__ = [];
var len__4497__auto___32512 = arguments.length;
var i__4498__auto___32513 = (0);
while(true){
if((i__4498__auto___32513 < len__4497__auto___32512)){
args__4500__auto__.push((arguments[i__4498__auto___32513]));

var G__32514 = (i__4498__auto___32513 + (1));
i__4498__auto___32513 = G__32514;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

mranderson047.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq32507){
var G__32508 = cljs.core.first(seq32507);
var seq32507__$1 = cljs.core.next(seq32507);
return mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__32508,seq32507__$1);
});


/**
 * @interface
 */
mranderson047.garden.v1v3v3.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
mranderson047.garden.v1v3v3.garden.util.to_str = (function mranderson047$garden$v1v3v3$garden$util$to_str(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null))))){
return this$.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (mranderson047.garden.v1v3v3.garden.util.to_str["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.util.ToString,"_",true);

var G__32521_32535 = mranderson047.garden.v1v3v3.garden.util.to_str;
var G__32522_32536 = "_";
var G__32523_32537 = ((function (G__32521_32535,G__32522_32536){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__32521_32535,G__32522_32536))
;
goog.object.set(G__32521_32535,G__32522_32536,G__32523_32537);

goog.object.set(mranderson047.garden.v1v3v3.garden.util.ToString,"null",true);

var G__32528_32538 = mranderson047.garden.v1v3v3.garden.util.to_str;
var G__32529_32539 = "null";
var G__32530_32540 = ((function (G__32528_32538,G__32529_32539){
return (function (this$){
return "";
});})(G__32528_32538,G__32529_32539))
;
goog.object.set(G__32528_32538,G__32529_32539,G__32530_32540);
/**
 * Convert a variable number of values into strings.
 */
mranderson047.garden.v1v3v3.garden.util.as_str = (function mranderson047$garden$v1v3v3$garden$util$as_str(var_args){
var args__4500__auto__ = [];
var len__4497__auto___32545 = arguments.length;
var i__4498__auto___32546 = (0);
while(true){
if((i__4498__auto___32546 < len__4497__auto___32545)){
args__4500__auto__.push((arguments[i__4498__auto___32546]));

var G__32547 = (i__4498__auto___32546 + (1));
i__4498__auto___32546 = G__32547;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.util.to_str,args));
});

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq32543){
return mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32543));
});

/**
 * Convert a string to an integer with optional base.
 */
mranderson047.garden.v1v3v3.garden.util.string__GT_int = (function mranderson047$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__4500__auto__ = [];
var len__4497__auto___32554 = arguments.length;
var i__4498__auto___32555 = (0);
while(true){
if((i__4498__auto___32555 < len__4497__auto___32554)){
args__4500__auto__.push((arguments[i__4498__auto___32555]));

var G__32556 = (i__4498__auto___32555 + (1));
i__4498__auto___32555 = G__32556;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__32550){
var vec__32551 = p__32550;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32551,(0),null);
var radix__$1 = (function (){var or__3922__auto__ = radix;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq32548){
var G__32549 = cljs.core.first(seq32548);
var seq32548__$1 = cljs.core.next(seq32548);
return mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__32549,seq32548__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
mranderson047.garden.v1v3v3.garden.util.int__GT_string = (function mranderson047$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__4500__auto__ = [];
var len__4497__auto___32567 = arguments.length;
var i__4498__auto___32568 = (0);
while(true){
if((i__4498__auto___32568 < len__4497__auto___32567)){
args__4500__auto__.push((arguments[i__4498__auto___32568]));

var G__32569 = (i__4498__auto___32568 + (1));
i__4498__auto___32568 = G__32569;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__32563){
var vec__32564 = p__32563;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32564,(0),null);
var radix__$1 = (function (){var or__3922__auto__ = radix;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq32561){
var G__32562 = cljs.core.first(seq32561);
var seq32561__$1 = cljs.core.next(seq32561);
return mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__32562,seq32561__$1);
});

/**
 * Return a space separated list of values.
 */
mranderson047.garden.v1v3v3.garden.util.space_join = (function mranderson047$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson047.garden.v1v3v3.garden.util.comma_join = (function mranderson047$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__4292__auto__ = (function mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__32570(s__32571){
return (new cljs.core.LazySeq(null,(function (){
var s__32571__$1 = s__32571;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__32571__$1);
if(temp__5457__auto__){
var s__32571__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32571__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__32571__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__32573 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__32572 = (0);
while(true){
if((i__32572 < size__4291__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__32572);
cljs.core.chunk_append(b__32573,((cljs.core.sequential_QMARK_(x))?mranderson047.garden.v1v3v3.garden.util.space_join(x):mranderson047.garden.v1v3v3.garden.util.to_str(x)));

var G__32574 = (i__32572 + (1));
i__32572 = G__32574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32573),mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__32570(cljs.core.chunk_rest(s__32571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32573),null);
}
} else {
var x = cljs.core.first(s__32571__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?mranderson047.garden.v1v3v3.garden.util.space_join(x):mranderson047.garden.v1v3v3.garden.util.to_str(x)),mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__32570(cljs.core.rest(s__32571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
mranderson047.garden.v1v3v3.garden.util.wrap_quotes = (function mranderson047$garden$v1v3v3$garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && (!(cljs.core.record_QMARK_(x))));
});
/**
 * Alias to `vector?`.
 */
mranderson047.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
mranderson047.garden.v1v3v3.garden.util.declaration_QMARK_ = mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_;
mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof mranderson047.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_media_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_media_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__3911__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__3911__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_import_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_import_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__3911__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
mranderson047.garden.v1v3v3.garden.util.prefix = (function mranderson047$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = mranderson047.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
mranderson047.garden.v1v3v3.garden.util.vendor_prefix = (function mranderson047$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = mranderson047.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return mranderson047.garden.v1v3v3.garden.util.prefix(p__$1,s);
} else {
return mranderson047.garden.v1v3v3.garden.util.prefix([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
mranderson047.garden.v1v3v3.garden.util.natural_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
mranderson047.garden.v1v3v3.garden.util.between_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4009__auto__ = a;
var y__4010__auto__ = b;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var top = (function (){var x__4006__auto__ = a;
var y__4007__auto__ = b;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
mranderson047.garden.v1v3v3.garden.util.clip = (function mranderson047$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__32575 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32575,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32575,(1),null);
var x__4006__auto__ = a__$1;
var y__4007__auto__ = (function (){var x__4009__auto__ = b__$1;
var y__4010__auto__ = n;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
});
/**
 * Return the average of two or more numbers.
 */
mranderson047.garden.v1v3v3.garden.util.average = (function mranderson047$garden$v1v3v3$garden$util$average(var_args){
var args__4500__auto__ = [];
var len__4497__auto___32581 = arguments.length;
var i__4498__auto___32582 = (0);
while(true){
if((i__4498__auto___32582 < len__4497__auto___32581)){
args__4500__auto__.push((arguments[i__4498__auto___32582]));

var G__32583 = (i__4498__auto___32582 + (1));
i__4498__auto___32582 = G__32583;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

mranderson047.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2);

mranderson047.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq32578){
var G__32579 = cljs.core.first(seq32578);
var seq32578__$1 = cljs.core.next(seq32578);
var G__32580 = cljs.core.first(seq32578__$1);
var seq32578__$2 = cljs.core.next(seq32578__$1);
return mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__32579,G__32580,seq32578__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
mranderson047.garden.v1v3v3.garden.util.cartesian_product = (function mranderson047$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__4500__auto__ = [];
var len__4497__auto___32585 = arguments.length;
var i__4498__auto___32586 = (0);
while(true){
if((i__4498__auto___32586 < len__4497__auto___32585)){
args__4500__auto__.push((arguments[i__4498__auto___32586]));

var G__32587 = (i__4498__auto___32586 + (1));
i__4498__auto___32586 = G__32587;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function mranderson047$garden$v1v3v3$garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5455__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5455__auto__){
var rst = temp__5455__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__32588 = (i - (1));
var G__32589 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__32588;
v_seqs__$2 = G__32589;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return mranderson047$garden$v1v3v3$garden$util$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq32584){
return mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32584));
});


//# sourceMappingURL=mranderson047.garden.v1v3v3.garden.util.js.map
