goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35690__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35691__i = 0, G__35691__a = new Array(arguments.length -  0);
while (G__35691__i < G__35691__a.length) {G__35691__a[G__35691__i] = arguments[G__35691__i + 0]; ++G__35691__i;}
  args = new cljs.core.IndexedSeq(G__35691__a,0,null);
} 
return G__35690__delegate.call(this,args);};
G__35690.cljs$lang$maxFixedArity = 0;
G__35690.cljs$lang$applyTo = (function (arglist__35692){
var args = cljs.core.seq(arglist__35692);
return G__35690__delegate(args);
});
G__35690.cljs$core$IFn$_invoke$arity$variadic = G__35690__delegate;
return G__35690;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35693__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35694__i = 0, G__35694__a = new Array(arguments.length -  0);
while (G__35694__i < G__35694__a.length) {G__35694__a[G__35694__i] = arguments[G__35694__i + 0]; ++G__35694__i;}
  args = new cljs.core.IndexedSeq(G__35694__a,0,null);
} 
return G__35693__delegate.call(this,args);};
G__35693.cljs$lang$maxFixedArity = 0;
G__35693.cljs$lang$applyTo = (function (arglist__35695){
var args = cljs.core.seq(arglist__35695);
return G__35693__delegate(args);
});
G__35693.cljs$core$IFn$_invoke$arity$variadic = G__35693__delegate;
return G__35693;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
