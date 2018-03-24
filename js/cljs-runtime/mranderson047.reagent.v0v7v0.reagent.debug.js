goog.provide('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson047.reagent.v0v7v0.reagent.debug.has_console = typeof console !== 'undefined';
mranderson047.reagent.v0v7v0.reagent.debug.tracking = false;
if(typeof mranderson047.reagent.v0v7v0.reagent.debug.warnings !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof mranderson047.reagent.v0v7v0.reagent.debug.track_console !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__33693__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__33693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33694__i = 0, G__33694__a = new Array(arguments.length -  0);
while (G__33694__i < G__33694__a.length) {G__33694__a[G__33694__i] = arguments[G__33694__i + 0]; ++G__33694__i;}
  args = new cljs.core.IndexedSeq(G__33694__a,0,null);
} 
return G__33693__delegate.call(this,args);};
G__33693.cljs$lang$maxFixedArity = 0;
G__33693.cljs$lang$applyTo = (function (arglist__33695){
var args = cljs.core.seq(arglist__33695);
return G__33693__delegate(args);
});
G__33693.cljs$core$IFn$_invoke$arity$variadic = G__33693__delegate;
return G__33693;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33696__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__33696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33697__i = 0, G__33697__a = new Array(arguments.length -  0);
while (G__33697__i < G__33697__a.length) {G__33697__a[G__33697__i] = arguments[G__33697__i + 0]; ++G__33697__i;}
  args = new cljs.core.IndexedSeq(G__33697__a,0,null);
} 
return G__33696__delegate.call(this,args);};
G__33696.cljs$lang$maxFixedArity = 0;
G__33696.cljs$lang$applyTo = (function (arglist__33698){
var args = cljs.core.seq(arglist__33698);
return G__33696__delegate(args);
});
G__33696.cljs$core$IFn$_invoke$arity$variadic = G__33696__delegate;
return G__33696;
})()
;})(o))
;

return o;
})();
}
mranderson047.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson047$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson047.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_(mranderson047.reagent.v0v7v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(mranderson047.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_(mranderson047.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson047.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=mranderson047.reagent.v0v7v0.reagent.debug.js.map
