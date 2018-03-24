goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._header[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto__.call(null,value));
} else {
var m__4212__auto____$1 = (devtools.format._header["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._has_body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto__.call(null,value));
} else {
var m__4212__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto__.call(null,value));
} else {
var m__4212__auto____$1 = (devtools.format._body["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o30032 = temp__5455__auto__;
var temp__5455__auto____$1 = (o30032["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o30033 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o30033["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o30034 = temp__5455__auto____$2;
return (o30034["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o30040 = temp__5455__auto__;
var temp__5455__auto____$1 = (o30040["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o30041 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o30041["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o30042 = temp__5455__auto____$2;
return (o30042["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o30043 = temp__5455__auto__;
var temp__5455__auto____$1 = (o30043["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o30044 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o30044["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o30045 = temp__5455__auto____$2;
return (o30045["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o30047 = temp__5455__auto__;
var temp__5455__auto____$1 = (o30047["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o30048 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o30048["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o30049 = temp__5455__auto____$2;
return (o30049["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o30050 = temp__5455__auto__;
var temp__5455__auto____$1 = (o30050["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o30051 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o30051["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o30052 = temp__5455__auto____$2;
return (o30052["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o30053 = temp__5455__auto__;
var temp__5455__auto____$1 = (o30053["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o30054 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o30054["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o30055 = temp__5455__auto____$2;
return (o30055["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o30056 = temp__5455__auto__;
var temp__5455__auto____$1 = (o30056["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o30057 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o30057["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o30058 = temp__5455__auto____$2;
return (o30058["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30072 = arguments.length;
var i__4498__auto___30073 = (0);
while(true){
if((i__4498__auto___30073 < len__4497__auto___30072)){
args__4500__auto__.push((arguments[i__4498__auto___30073]));

var G__30074 = (i__4498__auto___30073 + (1));
i__4498__auto___30073 = G__30074;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq30071){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30071));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30077 = arguments.length;
var i__4498__auto___30078 = (0);
while(true){
if((i__4498__auto___30078 < len__4497__auto___30077)){
args__4500__auto__.push((arguments[i__4498__auto___30078]));

var G__30079 = (i__4498__auto___30078 + (1));
i__4498__auto___30078 = G__30079;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq30075){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30075));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30081 = arguments.length;
var i__4498__auto___30082 = (0);
while(true){
if((i__4498__auto___30082 < len__4497__auto___30081)){
args__4500__auto__.push((arguments[i__4498__auto___30082]));

var G__30083 = (i__4498__auto___30082 + (1));
i__4498__auto___30082 = G__30083;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq30080){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30080));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30085 = arguments.length;
var i__4498__auto___30086 = (0);
while(true){
if((i__4498__auto___30086 < len__4497__auto___30085)){
args__4500__auto__.push((arguments[i__4498__auto___30086]));

var G__30087 = (i__4498__auto___30086 + (1));
i__4498__auto___30086 = G__30087;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq30084){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30084));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30089 = arguments.length;
var i__4498__auto___30090 = (0);
while(true){
if((i__4498__auto___30090 < len__4497__auto___30089)){
args__4500__auto__.push((arguments[i__4498__auto___30090]));

var G__30091 = (i__4498__auto___30090 + (1));
i__4498__auto___30090 = G__30091;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq30088){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30088));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30093 = arguments.length;
var i__4498__auto___30094 = (0);
while(true){
if((i__4498__auto___30094 < len__4497__auto___30093)){
args__4500__auto__.push((arguments[i__4498__auto___30094]));

var G__30095 = (i__4498__auto___30094 + (1));
i__4498__auto___30094 = G__30095;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq30092){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30092));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30102 = arguments.length;
var i__4498__auto___30103 = (0);
while(true){
if((i__4498__auto___30103 < len__4497__auto___30102)){
args__4500__auto__.push((arguments[i__4498__auto___30103]));

var G__30104 = (i__4498__auto___30103 + (1));
i__4498__auto___30103 = G__30104;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq30100){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30100));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30113 = arguments.length;
var i__4498__auto___30114 = (0);
while(true){
if((i__4498__auto___30114 < len__4497__auto___30113)){
args__4500__auto__.push((arguments[i__4498__auto___30114]));

var G__30116 = (i__4498__auto___30114 + (1));
i__4498__auto___30114 = G__30116;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__30109){
var vec__30110 = p__30109;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30110,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__30110,state_override){
return (function (p1__30106_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30106_SHARP_,state_override], 0));
});})(vec__30110,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq30107){
var G__30108 = cljs.core.first(seq30107);
var seq30107__$1 = cljs.core.next(seq30107);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__30108,seq30107__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__30117 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__30118 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__30119 = (function (){var G__30120 = new cljs.core.Keyword(null,"li","li",723558921);
var G__30121 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__30122 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__30120,G__30121,G__30122) : devtools.format.make_template_fn.call(null,G__30120,G__30121,G__30122));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__30117,G__30118,G__30119) : devtools.format.make_template_fn.call(null,G__30117,G__30118,G__30119));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30139 = arguments.length;
var i__4498__auto___30140 = (0);
while(true){
if((i__4498__auto___30140 < len__4497__auto___30139)){
args__4500__auto__.push((arguments[i__4498__auto___30140]));

var G__30141 = (i__4498__auto___30140 + (1));
i__4498__auto___30140 = G__30141;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq30136){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30136));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30144 = arguments.length;
var i__4498__auto___30145 = (0);
while(true){
if((i__4498__auto___30145 < len__4497__auto___30144)){
args__4500__auto__.push((arguments[i__4498__auto___30145]));

var G__30146 = (i__4498__auto___30145 + (1));
i__4498__auto___30145 = G__30146;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq30142){
var G__30143 = cljs.core.first(seq30142);
var seq30142__$1 = cljs.core.next(seq30142);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__30143,seq30142__$1);
});


//# sourceMappingURL=devtools.format.js.map
