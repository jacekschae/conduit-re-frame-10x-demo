goog.provide('mranderson047.reagent.v0v7v0.reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.template');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('mranderson047.reagent.v0v7v0.reagent.interop');
if(typeof mranderson047.reagent.v0v7v0.reagent.dom.imported !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.dom.imported = null;
}
mranderson047.reagent.v0v7v0.reagent.dom.module = (function mranderson047$reagent$v0v7v0$reagent$dom$module(){
if(!((mranderson047.reagent.v0v7v0.reagent.dom.imported == null))){
return mranderson047.reagent.v0v7v0.reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return mranderson047.reagent.v0v7v0.reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__3922__auto__ = mranderson047.reagent.v0v7v0.reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof mranderson047.reagent.v0v7v0.reagent.dom.roots !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
mranderson047.reagent.v0v7v0.reagent.dom.unmount_comp = (function mranderson047$reagent$v0v7v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson047.reagent.v0v7v0.reagent.dom.roots,cljs.core.dissoc,container);

return (mranderson047.reagent.v0v7v0.reagent.dom.module()["unmountComponentAtNode"])(container);
});
mranderson047.reagent.v0v7v0.reagent.dom.render_comp = (function mranderson047$reagent$v0v7v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_24748 = mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (mranderson047.reagent.v0v7v0.reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_24748){
return (function (){
var _STAR_always_update_STAR_24749 = mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson047.reagent.v0v7v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson047.reagent.v0v7v0.reagent.impl.batching.flush_after_render();

if(!((callback == null))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_24749;
}});})(_STAR_always_update_STAR_24748))
);
}finally {mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_24748;
}});
mranderson047.reagent.v0v7v0.reagent.dom.re_render_component = (function mranderson047$reagent$v0v7v0$reagent$dom$re_render_component(comp,container){
return mranderson047.reagent.v0v7v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson047.reagent.v0v7v0.reagent.dom.render = (function mranderson047$reagent$v0v7v0$reagent$dom$render(var_args){
var G__24751 = arguments.length;
switch (G__24751) {
case 2:
return mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_();

var f = (function (){
return mranderson047.reagent.v0v7v0.reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return mranderson047.reagent.v0v7v0.reagent.dom.render_comp(f,container,callback);
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

mranderson047.reagent.v0v7v0.reagent.dom.unmount_component_at_node = (function mranderson047$reagent$v0v7v0$reagent$dom$unmount_component_at_node(container){
return mranderson047.reagent.v0v7v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson047.reagent.v0v7v0.reagent.dom.dom_node = (function mranderson047$reagent$v0v7v0$reagent$dom$dom_node(this$){
return (mranderson047.reagent.v0v7v0.reagent.dom.module()["findDOMNode"])(this$);
});
mranderson047.reagent.v0v7v0.reagent.impl.template.find_dom_node = mranderson047.reagent.v0v7v0.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
mranderson047.reagent.v0v7v0.reagent.dom.force_update_all = (function mranderson047$reagent$v0v7v0$reagent$dom$force_update_all(){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_();

var seq__24753_24757 = cljs.core.seq(cljs.core.vals(cljs.core.deref(mranderson047.reagent.v0v7v0.reagent.dom.roots)));
var chunk__24754_24758 = null;
var count__24755_24759 = (0);
var i__24756_24760 = (0);
while(true){
if((i__24756_24760 < count__24755_24759)){
var v_24761 = chunk__24754_24758.cljs$core$IIndexed$_nth$arity$2(null,i__24756_24760);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson047.reagent.v0v7v0.reagent.dom.re_render_component,v_24761);


var G__24762 = seq__24753_24757;
var G__24763 = chunk__24754_24758;
var G__24764 = count__24755_24759;
var G__24765 = (i__24756_24760 + (1));
seq__24753_24757 = G__24762;
chunk__24754_24758 = G__24763;
count__24755_24759 = G__24764;
i__24756_24760 = G__24765;
continue;
} else {
var temp__5457__auto___24766 = cljs.core.seq(seq__24753_24757);
if(temp__5457__auto___24766){
var seq__24753_24767__$1 = temp__5457__auto___24766;
if(cljs.core.chunked_seq_QMARK_(seq__24753_24767__$1)){
var c__4319__auto___24768 = cljs.core.chunk_first(seq__24753_24767__$1);
var G__24769 = cljs.core.chunk_rest(seq__24753_24767__$1);
var G__24770 = c__4319__auto___24768;
var G__24771 = cljs.core.count(c__4319__auto___24768);
var G__24772 = (0);
seq__24753_24757 = G__24769;
chunk__24754_24758 = G__24770;
count__24755_24759 = G__24771;
i__24756_24760 = G__24772;
continue;
} else {
var v_24773 = cljs.core.first(seq__24753_24767__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mranderson047.reagent.v0v7v0.reagent.dom.re_render_component,v_24773);


var G__24774 = cljs.core.next(seq__24753_24767__$1);
var G__24775 = null;
var G__24776 = (0);
var G__24777 = (0);
seq__24753_24757 = G__24774;
chunk__24754_24758 = G__24775;
count__24755_24759 = G__24776;
i__24756_24760 = G__24777;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=mranderson047.reagent.v0v7v0.reagent.dom.js.map
