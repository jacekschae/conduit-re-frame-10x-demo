goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39202){
var map__39203 = p__39202;
var map__39203__$1 = ((((!((map__39203 == null)))?(((((map__39203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39203):map__39203);
var m = map__39203__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39203__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39203__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39218_39292 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39219_39293 = null;
var count__39220_39294 = (0);
var i__39221_39295 = (0);
while(true){
if((i__39221_39295 < count__39220_39294)){
var f_39300 = chunk__39219_39293.cljs$core$IIndexed$_nth$arity$2(null,i__39221_39295);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39300], 0));


var G__39301 = seq__39218_39292;
var G__39302 = chunk__39219_39293;
var G__39303 = count__39220_39294;
var G__39304 = (i__39221_39295 + (1));
seq__39218_39292 = G__39301;
chunk__39219_39293 = G__39302;
count__39220_39294 = G__39303;
i__39221_39295 = G__39304;
continue;
} else {
var temp__5457__auto___39305 = cljs.core.seq(seq__39218_39292);
if(temp__5457__auto___39305){
var seq__39218_39306__$1 = temp__5457__auto___39305;
if(cljs.core.chunked_seq_QMARK_(seq__39218_39306__$1)){
var c__4319__auto___39307 = cljs.core.chunk_first(seq__39218_39306__$1);
var G__39308 = cljs.core.chunk_rest(seq__39218_39306__$1);
var G__39309 = c__4319__auto___39307;
var G__39310 = cljs.core.count(c__4319__auto___39307);
var G__39311 = (0);
seq__39218_39292 = G__39308;
chunk__39219_39293 = G__39309;
count__39220_39294 = G__39310;
i__39221_39295 = G__39311;
continue;
} else {
var f_39312 = cljs.core.first(seq__39218_39306__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39312], 0));


var G__39317 = cljs.core.next(seq__39218_39306__$1);
var G__39318 = null;
var G__39319 = (0);
var G__39320 = (0);
seq__39218_39292 = G__39317;
chunk__39219_39293 = G__39318;
count__39220_39294 = G__39319;
i__39221_39295 = G__39320;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39322 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39322], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39322)))?cljs.core.second(arglists_39322):arglists_39322)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39238_39336 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39239_39337 = null;
var count__39240_39338 = (0);
var i__39241_39339 = (0);
while(true){
if((i__39241_39339 < count__39240_39338)){
var vec__39247_39344 = chunk__39239_39337.cljs$core$IIndexed$_nth$arity$2(null,i__39241_39339);
var name_39345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39247_39344,(0),null);
var map__39250_39346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39247_39344,(1),null);
var map__39250_39347__$1 = ((((!((map__39250_39346 == null)))?(((((map__39250_39346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39250_39346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39250_39346):map__39250_39346);
var doc_39348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39250_39347__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39250_39347__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39345], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39349], 0));

if(cljs.core.truth_(doc_39348)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39348], 0));
} else {
}


var G__39358 = seq__39238_39336;
var G__39359 = chunk__39239_39337;
var G__39360 = count__39240_39338;
var G__39361 = (i__39241_39339 + (1));
seq__39238_39336 = G__39358;
chunk__39239_39337 = G__39359;
count__39240_39338 = G__39360;
i__39241_39339 = G__39361;
continue;
} else {
var temp__5457__auto___39362 = cljs.core.seq(seq__39238_39336);
if(temp__5457__auto___39362){
var seq__39238_39363__$1 = temp__5457__auto___39362;
if(cljs.core.chunked_seq_QMARK_(seq__39238_39363__$1)){
var c__4319__auto___39364 = cljs.core.chunk_first(seq__39238_39363__$1);
var G__39365 = cljs.core.chunk_rest(seq__39238_39363__$1);
var G__39366 = c__4319__auto___39364;
var G__39367 = cljs.core.count(c__4319__auto___39364);
var G__39368 = (0);
seq__39238_39336 = G__39365;
chunk__39239_39337 = G__39366;
count__39240_39338 = G__39367;
i__39241_39339 = G__39368;
continue;
} else {
var vec__39257_39369 = cljs.core.first(seq__39238_39363__$1);
var name_39370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39257_39369,(0),null);
var map__39264_39371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39257_39369,(1),null);
var map__39264_39372__$1 = ((((!((map__39264_39371 == null)))?(((((map__39264_39371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39264_39371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39264_39371):map__39264_39371);
var doc_39373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39264_39372__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39264_39372__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39370], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39374], 0));

if(cljs.core.truth_(doc_39373)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39373], 0));
} else {
}


var G__39385 = cljs.core.next(seq__39238_39363__$1);
var G__39386 = null;
var G__39387 = (0);
var G__39388 = (0);
seq__39238_39336 = G__39385;
chunk__39239_39337 = G__39386;
count__39240_39338 = G__39387;
i__39241_39339 = G__39388;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39274 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39275 = null;
var count__39276 = (0);
var i__39277 = (0);
while(true){
if((i__39277 < count__39276)){
var role = chunk__39275.cljs$core$IIndexed$_nth$arity$2(null,i__39277);
var temp__5457__auto___39399__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39399__$1)){
var spec_39400 = temp__5457__auto___39399__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_39400)], 0));
} else {
}


var G__39401 = seq__39274;
var G__39402 = chunk__39275;
var G__39403 = count__39276;
var G__39404 = (i__39277 + (1));
seq__39274 = G__39401;
chunk__39275 = G__39402;
count__39276 = G__39403;
i__39277 = G__39404;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__39274);
if(temp__5457__auto____$1){
var seq__39274__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39274__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__39274__$1);
var G__39409 = cljs.core.chunk_rest(seq__39274__$1);
var G__39410 = c__4319__auto__;
var G__39411 = cljs.core.count(c__4319__auto__);
var G__39412 = (0);
seq__39274 = G__39409;
chunk__39275 = G__39410;
count__39276 = G__39411;
i__39277 = G__39412;
continue;
} else {
var role = cljs.core.first(seq__39274__$1);
var temp__5457__auto___39417__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39417__$2)){
var spec_39418 = temp__5457__auto___39417__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_39418)], 0));
} else {
}


var G__39419 = cljs.core.next(seq__39274__$1);
var G__39420 = null;
var G__39421 = (0);
var G__39422 = (0);
seq__39274 = G__39419;
chunk__39275 = G__39420;
count__39276 = G__39421;
i__39277 = G__39422;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
