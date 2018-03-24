goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__36947 = arguments.length;
switch (G__36947) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__36957 = cljs.core.seq(Object.keys(localStorage));
var chunk__36958 = null;
var count__36959 = (0);
var i__36960 = (0);
while(true){
if((i__36960 < count__36959)){
var k = chunk__36958.cljs$core$IIndexed$_nth$arity$2(null,i__36960);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__36965 = seq__36957;
var G__36966 = chunk__36958;
var G__36967 = count__36959;
var G__36968 = (i__36960 + (1));
seq__36957 = G__36965;
chunk__36958 = G__36966;
count__36959 = G__36967;
i__36960 = G__36968;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36957);
if(temp__5457__auto__){
var seq__36957__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36957__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__36957__$1);
var G__36969 = cljs.core.chunk_rest(seq__36957__$1);
var G__36970 = c__4319__auto__;
var G__36971 = cljs.core.count(c__4319__auto__);
var G__36972 = (0);
seq__36957 = G__36969;
chunk__36958 = G__36970;
count__36959 = G__36971;
i__36960 = G__36972;
continue;
} else {
var k = cljs.core.first(seq__36957__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__36974 = cljs.core.next(seq__36957__$1);
var G__36975 = null;
var G__36976 = (0);
var G__36977 = (0);
seq__36957 = G__36974;
chunk__36958 = G__36975;
count__36959 = G__36976;
i__36960 = G__36977;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
