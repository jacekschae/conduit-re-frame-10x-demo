goog.provide('mranderson047.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('mranderson047.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
mranderson047.garden.v1v3v3.garden.core.css = (function mranderson047$garden$v1v3v3$garden$core$css(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34632 = arguments.length;
var i__4498__auto___34633 = (0);
while(true){
if((i__4498__auto___34633 < len__4497__auto___34632)){
args__4500__auto__.push((arguments[i__4498__auto___34633]));

var G__34634 = (i__4498__auto___34633 + (1));
i__4498__auto___34633 = G__34634;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.compiler.compile_css,rules);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq34631){
return mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34631));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
mranderson047.garden.v1v3v3.garden.core.style = (function mranderson047$garden$v1v3v3$garden$core$style(var_args){
var args__4500__auto__ = [];
var len__4497__auto___34641 = arguments.length;
var i__4498__auto___34642 = (0);
while(true){
if((i__4498__auto___34642 < len__4497__auto___34641)){
args__4500__auto__.push((arguments[i__4498__auto___34642]));

var G__34643 = (i__4498__auto___34642 + (1));
i__4498__auto___34642 = G__34643;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return mranderson047.garden.v1v3v3.garden.compiler.compile_style(maps);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0);

mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq34637){
return mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34637));
});


//# sourceMappingURL=mranderson047.garden.v1v3v3.garden.core.js.map
