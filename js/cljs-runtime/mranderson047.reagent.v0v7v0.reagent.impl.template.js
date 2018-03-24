goog.provide('mranderson047.reagent.v0v7v0.reagent.impl.template');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.component');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson047.reagent.v0v7v0.reagent.interop');
goog.require('mranderson047.reagent.v0v7v0.reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
mranderson047.reagent.v0v7v0.reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
mranderson047.reagent.v0v7v0.reagent.impl.template.NativeWrapper = (function (){
});

mranderson047.reagent.v0v7v0.reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

mranderson047.reagent.v0v7v0.reagent.impl.template.NativeWrapper.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.impl.template/NativeWrapper";

mranderson047.reagent.v0v7v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.reagent.v0v7v0.reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.impl.template/NativeWrapper.
 */
mranderson047.reagent.v0v7v0.reagent.impl.template.__GT_NativeWrapper = (function mranderson047$reagent$v0v7v0$reagent$impl$template$__GT_NativeWrapper(){
return (new mranderson047.reagent.v0v7v0.reagent.impl.template.NativeWrapper());
});

mranderson047.reagent.v0v7v0.reagent.impl.template.named_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_tag_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$template$hiccup_tag_QMARK_(x){
return ((mranderson047.reagent.v0v7v0.reagent.impl.template.named_QMARK_(x)) || (typeof x === 'string'));
});
mranderson047.reagent.v0v7v0.reagent.impl.template.valid_tag_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$template$valid_tag_QMARK_(x){
return ((mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x)) || ((x instanceof mranderson047.reagent.v0v7v0.reagent.impl.template.NativeWrapper)));
});
mranderson047.reagent.v0v7v0.reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
mranderson047.reagent.v0v7v0.reagent.impl.template.cache_get = (function mranderson047$reagent$v0v7v0$reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.cached_prop_name = (function mranderson047$reagent$v0v7v0$reagent$impl$template$cached_prop_name(k){
if(mranderson047.reagent.v0v7v0.reagent.impl.template.named_QMARK_(k)){
var temp__5459__auto__ = mranderson047.reagent.v0v7v0.reagent.impl.template.cache_get(mranderson047.reagent.v0v7v0.reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5459__auto__ == null)){
return (mranderson047.reagent.v0v7v0.reagent.impl.template.prop_name_cache[cljs.core.name(k)] = mranderson047.reagent.v0v7v0.reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__5459__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.js_val_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$template$js_val_QMARK_(x){
return !(("object" === goog.typeOf(x)));
});
mranderson047.reagent.v0v7v0.reagent.impl.template.kv_conv = (function mranderson047$reagent$v0v7v0$reagent$impl$template$kv_conv(o,k,v){
var G__24699 = o;
(G__24699[mranderson047.reagent.v0v7v0.reagent.impl.template.cached_prop_name(k)] = (mranderson047.reagent.v0v7v0.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v7v0.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : mranderson047.reagent.v0v7v0.reagent.impl.template.convert_prop_value.call(null,v)));

return G__24699;
});
mranderson047.reagent.v0v7v0.reagent.impl.template.convert_prop_value = (function mranderson047$reagent$v0v7v0$reagent$impl$template$convert_prop_value(x){
if(mranderson047.reagent.v0v7v0.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(mranderson047.reagent.v0v7v0.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(mranderson047.reagent.v0v7v0.reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__24703__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__24703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24704__i = 0, G__24704__a = new Array(arguments.length -  0);
while (G__24704__i < G__24704__a.length) {G__24704__a[G__24704__i] = arguments[G__24704__i + 0]; ++G__24704__i;}
  args = new cljs.core.IndexedSeq(G__24704__a,0,null);
} 
return G__24703__delegate.call(this,args);};
G__24703.cljs$lang$maxFixedArity = 0;
G__24703.cljs$lang$applyTo = (function (arglist__24705){
var args = cljs.core.seq(arglist__24705);
return G__24703__delegate(args);
});
G__24703.cljs$core$IFn$_invoke$arity$variadic = G__24703__delegate;
return G__24703;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.oset = (function mranderson047$reagent$v0v7v0$reagent$impl$template$oset(o,k,v){
var G__24706 = (((o == null))?({}):o);
(G__24706[k] = v);

return G__24706;
});
mranderson047.reagent.v0v7v0.reagent.impl.template.oget = (function mranderson047$reagent$v0v7v0$reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.set_id_class = (function mranderson047$reagent$v0v7v0$reagent$impl$template$set_id_class(p,id_class){
var id = (id_class["id"]);
var p__$1 = ((((!((id == null))) && ((mranderson047.reagent.v0v7v0.reagent.impl.template.oget(p,"id") == null))))?mranderson047.reagent.v0v7v0.reagent.impl.template.oset(p,"id",id):p);
var temp__5459__auto__ = (id_class["className"]);
if((temp__5459__auto__ == null)){
return p__$1;
} else {
var class$ = temp__5459__auto__;
var old = mranderson047.reagent.v0v7v0.reagent.impl.template.oget(p__$1,"className");
return mranderson047.reagent.v0v7v0.reagent.impl.template.oset(p__$1,"className",(((old == null))?class$:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old)].join('')));
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.convert_props = (function mranderson047$reagent$v0v7v0$reagent$impl$template$convert_props(props,id_class){
return mranderson047.reagent.v0v7v0.reagent.impl.template.set_id_class(mranderson047.reagent.v0v7v0.reagent.impl.template.convert_prop_value(props),id_class);
});
if(typeof mranderson047.reagent.v0v7v0.reagent.impl.template.find_dom_node !== 'undefined'){
} else {
mranderson047.reagent.v0v7v0.reagent.impl.template.find_dom_node = null;
}
mranderson047.reagent.v0v7v0.reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
mranderson047.reagent.v0v7v0.reagent.impl.template.has_selection_api_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_(mranderson047.reagent.v0v7v0.reagent.impl.template.these_inputs_have_selection_api,input_type);
});
mranderson047.reagent.v0v7v0.reagent.impl.template.input_set_value = (function mranderson047$reagent$v0v7v0$reagent$impl$template$input_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = (mranderson047.reagent.v0v7v0.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v7v0.reagent.impl.template.find_dom_node.cljs$core$IFn$_invoke$arity$1(this$) : mranderson047.reagent.v0v7v0.reagent.impl.template.find_dom_node.call(null,this$));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rendered_value,dom_value)){
if(!((((node === (document["activeElement"]))) && (mranderson047.reagent.v0v7v0.reagent.impl.template.has_selection_api_QMARK_((node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string')))){
(this$["cljsDOMValue"] = rendered_value);

return (node["value"] = rendered_value);
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(node_value,dom_value)){
return mranderson047.reagent.v0v7v0.reagent.impl.batching.do_after_render(((function (node_value,rendered_value,dom_value,node){
return (function (){
return (mranderson047.reagent.v0v7v0.reagent.impl.template.input_set_value.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v7v0.reagent.impl.template.input_set_value.cljs$core$IFn$_invoke$arity$1(this$) : mranderson047.reagent.v0v7v0.reagent.impl.template.input_set_value.call(null,this$));
});})(node_value,rendered_value,dom_value,node))
);
} else {
var existing_offset_from_end = (cljs.core.count(node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count(rendered_value) - existing_offset_from_end);
(this$["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
} else {
return null;
}
} else {
return null;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.input_handle_change = (function mranderson047$reagent$v0v7v0$reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

mranderson047.reagent.v0v7v0.reagent.impl.batching.do_after_render((function (){
return mranderson047.reagent.v0v7v0.reagent.impl.template.input_set_value(this$);
}));
}

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
});
mranderson047.reagent.v0v7v0.reagent.impl.template.input_render_setup = (function mranderson047$reagent$v0v7v0$reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__3911__auto__ = !((jsprops == null));
if(and__3911__auto__){
var and__3911__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__3911__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
if(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__24714 = jsprops;
(G__24714["defaultValue"] = value);

(G__24714["onChange"] = ((function (G__24714,v,value,on_change){
return (function (p1__24713_SHARP_){
return mranderson047.reagent.v0v7v0.reagent.impl.template.input_handle_change(this$,on_change,p1__24713_SHARP_);
});})(G__24714,v,value,on_change))
);

return G__24714;
} else {
return null;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.input_unmount = (function mranderson047$reagent$v0v7v0$reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
mranderson047.reagent.v0v7v0.reagent.impl.template.input_component_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$template$input_component_QMARK_(x){
var G__24715 = x;
switch (G__24715) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.reagent_input_class = null;
mranderson047.reagent.v0v7v0.reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),mranderson047.reagent.v0v7v0.reagent.impl.template.input_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),mranderson047.reagent.v0v7v0.reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = mranderson047.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_;
mranderson047.reagent.v0v7v0.reagent.impl.template.input_render_setup(this$,jsprops);

return (mranderson047.reagent.v0v7v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? mranderson047.reagent.v0v7v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,jsprops,first_child) : mranderson047.reagent.v0v7v0.reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child));
})], null);
mranderson047.reagent.v0v7v0.reagent.impl.template.reagent_input = (function mranderson047$reagent$v0v7v0$reagent$impl$template$reagent_input(){
if((mranderson047.reagent.v0v7v0.reagent.impl.template.reagent_input_class == null)){
mranderson047.reagent.v0v7v0.reagent.impl.template.reagent_input_class = mranderson047.reagent.v0v7v0.reagent.impl.component.create_class(mranderson047.reagent.v0v7v0.reagent.impl.template.input_spec);
} else {
}

return mranderson047.reagent.v0v7v0.reagent.impl.template.reagent_input_class;
});
mranderson047.reagent.v0v7v0.reagent.impl.template.parse_tag = (function mranderson047$reagent$v0v7v0$reagent$impl$template$parse_tag(hiccup_tag){
var vec__24717 = cljs.core.next(cljs.core.re_matches(mranderson047.reagent.v0v7v0.reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24717,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24717,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24717,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace(class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.component.comp_name())].join('')),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "className": class$__$1});
});
mranderson047.reagent.v0v7v0.reagent.impl.template.try_get_key = (function mranderson047$reagent$v0v7v0$reagent$impl$template$try_get_key(x){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e24720){var e = e24720;
return null;
}});
mranderson047.reagent.v0v7v0.reagent.impl.template.get_key = (function mranderson047$reagent$v0v7v0$reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_(x)){
return mranderson047.reagent.v0v7v0.reagent.impl.template.try_get_key(x);
} else {
return null;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.key_from_vec = (function mranderson047$reagent$v0v7v0$reagent$impl$template$key_from_vec(v){
var temp__5459__auto__ = mranderson047.reagent.v0v7v0.reagent.impl.template.get_key(cljs.core.meta(v));
if((temp__5459__auto__ == null)){
return mranderson047.reagent.v0v7v0.reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__5459__auto__;
return k;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.reag_element = (function mranderson047$reagent$v0v7v0$reagent$impl$template$reag_element(tag,v){
var c = mranderson047.reagent.v0v7v0.reagent.impl.component.as_class(tag);
var jsprops = ({"argv": v});
var temp__5461__auto___24721 = mranderson047.reagent.v0v7v0.reagent.impl.template.key_from_vec(v);
if((temp__5461__auto___24721 == null)){
} else {
var key_24722 = temp__5461__auto___24721;
(jsprops["key"] = key_24722);
}

return (mranderson047.reagent.v0v7v0.reagent.impl.util.react["createElement"])(c,jsprops);
});
mranderson047.reagent.v0v7v0.reagent.impl.template.adapt_react_class = (function mranderson047$reagent$v0v7v0$reagent$impl$template$adapt_react_class(c){
var G__24723 = mranderson047.reagent.v0v7v0.reagent.impl.template.__GT_NativeWrapper();
(G__24723["name"] = c);

(G__24723["id"] = null);

(G__24723["class"] = null);

return G__24723;
});
mranderson047.reagent.v0v7v0.reagent.impl.template.tag_name_cache = ({});
mranderson047.reagent.v0v7v0.reagent.impl.template.cached_parse = (function mranderson047$reagent$v0v7v0$reagent$impl$template$cached_parse(x){
var temp__5459__auto__ = mranderson047.reagent.v0v7v0.reagent.impl.template.cache_get(mranderson047.reagent.v0v7v0.reagent.impl.template.tag_name_cache,x);
if((temp__5459__auto__ == null)){
return (mranderson047.reagent.v0v7v0.reagent.impl.template.tag_name_cache[x] = mranderson047.reagent.v0v7v0.reagent.impl.template.parse_tag(x));
} else {
var s = temp__5459__auto__;
return s;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.native_element = (function mranderson047$reagent$v0v7v0$reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = mranderson047.reagent.v0v7v0.reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(mranderson047.reagent.v0v7v0.reagent.impl.template.input_component_QMARK_(comp)){
var G__24724 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.reagent.v0v7v0.reagent.impl.template.reagent_input(),argv,comp,jsprops,first_child], null),cljs.core.meta(argv));
return (mranderson047.reagent.v0v7v0.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v7v0.reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__24724) : mranderson047.reagent.v0v7v0.reagent.impl.template.as_element.call(null,G__24724));
} else {
var key = mranderson047.reagent.v0v7v0.reagent.impl.template.get_key(cljs.core.meta(argv));
var p = (((key == null))?jsprops:mranderson047.reagent.v0v7v0.reagent.impl.template.oset(jsprops,"key",key));
return (mranderson047.reagent.v0v7v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? mranderson047.reagent.v0v7v0.reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(argv,comp,p,first_child) : mranderson047.reagent.v0v7v0.reagent.impl.template.make_element.call(null,argv,comp,p,first_child));
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.str_coll = (function mranderson047$reagent$v0v7v0$reagent$impl$template$str_coll(coll){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk((function (x){
if(cljs.core.fn_QMARK_(x)){
var n = mranderson047.reagent.v0v7v0.reagent.impl.util.fun_name(x);
var G__24725 = n;
switch (G__24725) {
case "":
return x;

break;
default:
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(n);

}
} else {
return x;
}
}),coll))].join('');

});
mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err = (function mranderson047$reagent$v0v7v0$reagent$impl$template$hiccup_err(var_args){
var args__4500__auto__ = [];
var len__4497__auto___24729 = arguments.length;
var i__4498__auto___24730 = (0);
while(true){
if((i__4498__auto___24730 < len__4497__auto___24729)){
args__4500__auto__.push((arguments[i__4498__auto___24730]));

var G__24731 = (i__4498__auto___24730 + (1));
i__4498__auto___24730 = G__24731;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.template.str_coll(v)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.component.comp_name())].join('');
});

mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq24727){
var G__24728 = cljs.core.first(seq24727);
var seq24727__$1 = cljs.core.next(seq24727);
return mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(G__24728,seq24727__$1);
});

mranderson047.reagent.v0v7v0.reagent.impl.template.vec_to_elem = (function mranderson047$reagent$v0v7v0$reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0))),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(mranderson047.reagent.v0v7v0.reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0))),"\n","(valid-tag? tag)"].join('')));
}

if(mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_tag_QMARK_(tag)){
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__24732 = pos;
switch (G__24732) {
case (-1):
return mranderson047.reagent.v0v7v0.reagent.impl.template.native_element(mranderson047.reagent.v0v7v0.reagent.impl.template.cached_parse(n),v,(1));

break;
case (0):
var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0))),"\n","(= \">\" n)"].join('')));
}

if(((typeof comp === 'string') || (cljs.core.fn_QMARK_(comp)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected React component in"], 0))),"\n","(or (string? comp) (fn? comp))"].join('')));
}

return mranderson047.reagent.v0v7v0.reagent.impl.template.native_element(({"name": comp}),v,(2));

break;
default:
var G__24734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null);
v = G__24734;
continue;

}
} else {
if((tag instanceof mranderson047.reagent.v0v7v0.reagent.impl.template.NativeWrapper)){
return mranderson047.reagent.v0v7v0.reagent.impl.template.native_element(tag,v,(1));
} else {
return mranderson047.reagent.v0v7v0.reagent.impl.template.reag_element(tag,v);

}
}
break;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.template.as_element = (function mranderson047$reagent$v0v7v0$reagent$impl$template$as_element(x){
if(mranderson047.reagent.v0v7v0.reagent.impl.template.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return mranderson047.reagent.v0v7v0.reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return (mranderson047.reagent.v0v7v0.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1 ? mranderson047.reagent.v0v7v0.reagent.impl.template.expand_seq_check.cljs$core$IFn$_invoke$arity$1(x) : mranderson047.reagent.v0v7v0.reagent.impl.template.expand_seq_check.call(null,x));

} else {
if(mranderson047.reagent.v0v7v0.reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.as_element = mranderson047.reagent.v0v7v0.reagent.impl.template.as_element;
mranderson047.reagent.v0v7v0.reagent.impl.template.expand_seq = (function mranderson047$reagent$v0v7v0$reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4376__auto___24736 = a.length;
var i_24737 = (0);
while(true){
if((i_24737 < n__4376__auto___24736)){
(a[i_24737] = mranderson047.reagent.v0v7v0.reagent.impl.template.as_element((a[i_24737])));

var G__24738 = (i_24737 + (1));
i_24737 = G__24738;
continue;
} else {
}
break;
}

return a;
});
mranderson047.reagent.v0v7v0.reagent.impl.template.expand_seq_dev = (function mranderson047$reagent$v0v7v0$reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4376__auto___24739 = a.length;
var i_24740 = (0);
while(true){
if((i_24740 < n__4376__auto___24739)){
var val_24741 = (a[i_24740]);
if(((cljs.core.vector_QMARK_(val_24741)) && ((mranderson047.reagent.v0v7v0.reagent.impl.template.key_from_vec(val_24741) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_24740] = mranderson047.reagent.v0v7v0.reagent.impl.template.as_element(val_24741));

var G__24742 = (i_24740 + (1));
i_24740 = G__24742;
continue;
} else {
}
break;
}

return a;
});
mranderson047.reagent.v0v7v0.reagent.impl.template.expand_seq_check = (function mranderson047$reagent$v0v7v0$reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__24743 = mranderson047.reagent.v0v7v0.reagent.ratom.check_derefs(((function (ctx){
return (function (){
return mranderson047.reagent.v0v7v0.reagent.impl.template.expand_seq_dev(x,ctx);
});})(ctx))
);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24743,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24743,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.tracking)?mranderson047.reagent.v0v7v0.reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0)))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.tracking)?mranderson047.reagent.v0v7v0.reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0)))].join(''));
} else {
}
} else {
}

return res;
});
mranderson047.reagent.v0v7v0.reagent.impl.template.make_element = (function mranderson047$reagent$v0v7v0$reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__24746 = (cljs.core.count(argv) - first_child);
switch (G__24746) {
case (0):
return (mranderson047.reagent.v0v7v0.reagent.impl.util.react["createElement"])(comp,jsprops);

break;
case (1):
return (mranderson047.reagent.v0v7v0.reagent.impl.util.react["createElement"])(comp,jsprops,mranderson047.reagent.v0v7v0.reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null)));

break;
default:
return (mranderson047.reagent.v0v7v0.reagent.impl.util.react["createElement"]).apply(null,cljs.core.reduce_kv(((function (G__24746){
return (function (a,k,v){
if((k >= first_child)){
a.push(mranderson047.reagent.v0v7v0.reagent.impl.template.as_element(v));
} else {
}

return a;
});})(G__24746))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=mranderson047.reagent.v0v7v0.reagent.impl.template.js.map
