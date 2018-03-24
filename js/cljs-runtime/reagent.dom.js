goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_26115 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{var G__26116 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__26117 = container;
var G__26118 = ((function (G__26116,G__26117,_STAR_always_update_STAR_26115){
return (function (){
var _STAR_always_update_STAR_26119 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(!((callback == null))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26119;
}});})(G__26116,G__26117,_STAR_always_update_STAR_26115))
;
return module$node_modules$react_dom$index.render(G__26116,G__26117,G__26118);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26115;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__26121 = arguments.length;
switch (G__26121) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
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
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__26145_26150 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__26146_26151 = null;
var count__26147_26152 = (0);
var i__26148_26153 = (0);
while(true){
if((i__26148_26153 < count__26147_26152)){
var v_26155 = chunk__26146_26151.cljs$core$IIndexed$_nth$arity$2(null,i__26148_26153);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_26155);


var G__26156 = seq__26145_26150;
var G__26157 = chunk__26146_26151;
var G__26158 = count__26147_26152;
var G__26159 = (i__26148_26153 + (1));
seq__26145_26150 = G__26156;
chunk__26146_26151 = G__26157;
count__26147_26152 = G__26158;
i__26148_26153 = G__26159;
continue;
} else {
var temp__5457__auto___26161 = cljs.core.seq(seq__26145_26150);
if(temp__5457__auto___26161){
var seq__26145_26163__$1 = temp__5457__auto___26161;
if(cljs.core.chunked_seq_QMARK_(seq__26145_26163__$1)){
var c__4319__auto___26165 = cljs.core.chunk_first(seq__26145_26163__$1);
var G__26166 = cljs.core.chunk_rest(seq__26145_26163__$1);
var G__26167 = c__4319__auto___26165;
var G__26168 = cljs.core.count(c__4319__auto___26165);
var G__26169 = (0);
seq__26145_26150 = G__26166;
chunk__26146_26151 = G__26167;
count__26147_26152 = G__26168;
i__26148_26153 = G__26169;
continue;
} else {
var v_26170 = cljs.core.first(seq__26145_26163__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_26170);


var G__26172 = cljs.core.next(seq__26145_26163__$1);
var G__26173 = null;
var G__26174 = (0);
var G__26175 = (0);
seq__26145_26150 = G__26172;
chunk__26146_26151 = G__26173;
count__26147_26152 = G__26174;
i__26148_26153 = G__26175;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=reagent.dom.js.map
