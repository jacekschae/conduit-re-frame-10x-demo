goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_url_base()),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__25472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto__,req){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto__,req){
return (function (state_31983){
var state_val_31984 = (state_31983[(1)]);
if((state_val_31984 === (7))){
var state_31983__$1 = state_31983;
var statearr_31985_32011 = state_31983__$1;
(statearr_31985_32011[(2)] = false);

(statearr_31985_32011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (1))){
var state_31983__$1 = state_31983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31983__$1,(2),req);
} else {
if((state_val_31984 === (4))){
var inst_31947 = (state_31983[(7)]);
var inst_31953 = (inst_31947 == null);
var inst_31954 = cljs.core.not(inst_31953);
var state_31983__$1 = state_31983;
if(inst_31954){
var statearr_31986_32012 = state_31983__$1;
(statearr_31986_32012[(1)] = (6));

} else {
var statearr_31987_32013 = state_31983__$1;
(statearr_31987_32013[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (15))){
var state_31983__$1 = state_31983;
var statearr_31988_32014 = state_31983__$1;
(statearr_31988_32014[(2)] = null);

(statearr_31988_32014[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (13))){
var inst_31947 = (state_31983[(7)]);
var state_31983__$1 = state_31983;
var statearr_31989_32015 = state_31983__$1;
(statearr_31989_32015[(2)] = inst_31947);

(statearr_31989_32015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (6))){
var inst_31947 = (state_31983[(7)]);
var inst_31956 = inst_31947.cljs$lang$protocol_mask$partition0$;
var inst_31957 = (inst_31956 & (64));
var inst_31958 = inst_31947.cljs$core$ISeq$;
var inst_31959 = (cljs.core.PROTOCOL_SENTINEL === inst_31958);
var inst_31960 = ((inst_31957) || (inst_31959));
var state_31983__$1 = state_31983;
if(cljs.core.truth_(inst_31960)){
var statearr_31990_32016 = state_31983__$1;
(statearr_31990_32016[(1)] = (9));

} else {
var statearr_31991_32017 = state_31983__$1;
(statearr_31991_32017[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (17))){
var inst_31979 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
var statearr_31992_32018 = state_31983__$1;
(statearr_31992_32018[(2)] = inst_31979);

(statearr_31992_32018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (3))){
var state_31983__$1 = state_31983;
var statearr_31993_32019 = state_31983__$1;
(statearr_31993_32019[(2)] = null);

(statearr_31993_32019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (12))){
var inst_31947 = (state_31983[(7)]);
var inst_31969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31947);
var state_31983__$1 = state_31983;
var statearr_31994_32020 = state_31983__$1;
(statearr_31994_32020[(2)] = inst_31969);

(statearr_31994_32020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (2))){
var inst_31947 = (state_31983[(7)]);
var inst_31947__$1 = (state_31983[(2)]);
var inst_31948 = (inst_31947__$1 == null);
var state_31983__$1 = (function (){var statearr_31995 = state_31983;
(statearr_31995[(7)] = inst_31947__$1);

return statearr_31995;
})();
if(cljs.core.truth_(inst_31948)){
var statearr_31996_32021 = state_31983__$1;
(statearr_31996_32021[(1)] = (3));

} else {
var statearr_31997_32022 = state_31983__$1;
(statearr_31997_32022[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (11))){
var inst_31964 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
var statearr_31998_32023 = state_31983__$1;
(statearr_31998_32023[(2)] = inst_31964);

(statearr_31998_32023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (9))){
var state_31983__$1 = state_31983;
var statearr_31999_32024 = state_31983__$1;
(statearr_31999_32024[(2)] = true);

(statearr_31999_32024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (5))){
var inst_31981 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31983__$1,inst_31981);
} else {
if((state_val_31984 === (14))){
var inst_31972 = (state_31983[(8)]);
var inst_31972__$1 = (state_31983[(2)]);
var inst_31973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31972__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_31974 = (inst_31973 === (0));
var state_31983__$1 = (function (){var statearr_32000 = state_31983;
(statearr_32000[(8)] = inst_31972__$1);

return statearr_32000;
})();
if(cljs.core.truth_(inst_31974)){
var statearr_32001_32025 = state_31983__$1;
(statearr_32001_32025[(1)] = (15));

} else {
var statearr_32002_32026 = state_31983__$1;
(statearr_32002_32026[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (16))){
var inst_31972 = (state_31983[(8)]);
var inst_31977 = console.warn("file open failed",inst_31972);
var state_31983__$1 = state_31983;
var statearr_32003_32027 = state_31983__$1;
(statearr_32003_32027[(2)] = inst_31977);

(statearr_32003_32027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (10))){
var state_31983__$1 = state_31983;
var statearr_32004_32028 = state_31983__$1;
(statearr_32004_32028[(2)] = false);

(statearr_32004_32028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31984 === (8))){
var inst_31967 = (state_31983[(2)]);
var state_31983__$1 = state_31983;
if(cljs.core.truth_(inst_31967)){
var statearr_32005_32029 = state_31983__$1;
(statearr_32005_32029[(1)] = (12));

} else {
var statearr_32006_32030 = state_31983__$1;
(statearr_32006_32030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25472__auto__,req))
;
return ((function (switch__25250__auto__,c__25472__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto____0 = (function (){
var statearr_32007 = [null,null,null,null,null,null,null,null,null];
(statearr_32007[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto__);

(statearr_32007[(1)] = (1));

return statearr_32007;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto____1 = (function (state_31983){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_31983);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e32008){if((e32008 instanceof Object)){
var ex__25254__auto__ = e32008;
var statearr_32009_32031 = state_31983;
(statearr_32009_32031[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32032 = state_31983;
state_31983 = G__32032;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto__ = function(state_31983){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto____1.call(this,state_31983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto__,req))
})();
var state__25474__auto__ = (function (){var statearr_32010 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_32010[(6)] = c__25472__auto__);

return statearr_32010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto__,req))
);

return c__25472__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__32034 = arguments.length;
switch (G__32034) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5461__auto___32036 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5461__auto___32036 == null)){
} else {
var x_32037 = temp__5461__auto___32036;
shadow.dom.remove(x_32037);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (function (){var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
})();
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),shadow.cljs.devtools.client.hud.logo_svg], null)], null));
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var container_el = temp__5461__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__25472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto__,el,container_el,temp__5461__auto__){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto__,el,container_el,temp__5461__auto__){
return (function (state_32050){
var state_val_32051 = (state_32050[(1)]);
if((state_val_32051 === (1))){
var inst_32038 = cljs.core.async.timeout((250));
var state_32050__$1 = state_32050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32050__$1,(2),inst_32038);
} else {
if((state_val_32051 === (2))){
var inst_32040 = (state_32050[(2)]);
var inst_32041 = [el];
var inst_32042 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_32043 = [inst_32042];
var inst_32044 = cljs.core.PersistentHashMap.fromArrays(inst_32041,inst_32043);
var inst_32045 = shadow.animate.start((250),inst_32044);
var state_32050__$1 = (function (){var statearr_32052 = state_32050;
(statearr_32052[(7)] = inst_32040);

return statearr_32052;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32050__$1,(3),inst_32045);
} else {
if((state_val_32051 === (3))){
var inst_32047 = (state_32050[(2)]);
var inst_32048 = shadow.dom.remove(container_el);
var state_32050__$1 = (function (){var statearr_32053 = state_32050;
(statearr_32053[(8)] = inst_32047);

return statearr_32053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32050__$1,inst_32048);
} else {
return null;
}
}
}
});})(c__25472__auto__,el,container_el,temp__5461__auto__))
;
return ((function (switch__25250__auto__,c__25472__auto__,el,container_el,temp__5461__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto____0 = (function (){
var statearr_32054 = [null,null,null,null,null,null,null,null,null];
(statearr_32054[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto__);

(statearr_32054[(1)] = (1));

return statearr_32054;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto____1 = (function (state_32050){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_32050);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e32055){if((e32055 instanceof Object)){
var ex__25254__auto__ = e32055;
var statearr_32056_32058 = state_32050;
(statearr_32056_32058[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32059 = state_32050;
state_32050 = G__32059;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto__ = function(state_32050){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto____1.call(this,state_32050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto__,el,container_el,temp__5461__auto__))
})();
var state__25474__auto__ = (function (){var statearr_32057 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_32057[(6)] = c__25472__auto__);

return statearr_32057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto__,el,container_el,temp__5461__auto__))
);

return c__25472__auto__;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var el = temp__5461__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var d = temp__5461__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4292__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__32060(s__32061){
return (new cljs.core.LazySeq(null,(function (){
var s__32061__$1 = s__32061;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__32061__$1);
if(temp__5457__auto__){
var s__32061__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32061__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__32061__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__32063 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__32062 = (0);
while(true){
if((i__32062 < size__4291__auto__)){
var vec__32064 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__32062);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32064,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32064,(1),null);
cljs.core.chunk_append(b__32063,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__32067 = "%4d | %s";
var G__32068 = (((1) + idx) + start_idx);
var G__32069 = text;
return goog.string.format(G__32067,G__32068,G__32069);
})()], null));

var G__32076 = (i__32062 + (1));
i__32062 = G__32076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32063),shadow$cljs$devtools$client$hud$source_line_html_$_iter__32060(cljs.core.chunk_rest(s__32061__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32063),null);
}
} else {
var vec__32070 = cljs.core.first(s__32061__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32070,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32070,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__32073 = "%4d | %s";
var G__32074 = (((1) + idx) + start_idx);
var G__32075 = text;
return goog.string.format(G__32073,G__32074,G__32075);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__32060(cljs.core.rest(s__32061__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__32078 = arguments.length;
switch (G__32078) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__32080){
var map__32081 = p__32080;
var map__32081__$1 = ((((!((map__32081 == null)))?(((((map__32081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32081):map__32081);
var warning = map__32081__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32081__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32081__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32081__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32081__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__32081,map__32081__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__32081,map__32081__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__32083){
var map__32084 = p__32083;
var map__32084__$1 = ((((!((map__32084 == null)))?(((((map__32084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32084):map__32084);
var warning = map__32084__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32084__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32084__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32084__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32084__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32084__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32084__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__32086 = source_excerpt;
var map__32086__$1 = ((((!((map__32086 == null)))?(((((map__32086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32086):map__32086);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32086__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32086__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32086__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32086__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__3922__auto__ = column;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__32089){
var map__32090 = p__32089;
var map__32090__$1 = ((((!((map__32090 == null)))?(((((map__32090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32090):map__32090);
var msg = map__32090__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32090__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32090__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__32092 = info;
var map__32092__$1 = ((((!((map__32092 == null)))?(((((map__32092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32092):map__32092);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32092__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__32092,map__32092__$1,sources,map__32090,map__32090__$1,msg,type,info){
return (function (p1__32088_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__32088_SHARP_));
});})(map__32092,map__32092__$1,sources,map__32090,map__32090__$1,msg,type,info))
,sources));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["0px","12px","auto","10000","10px 10px 0 10px","0px","absolute","monospace","0px"])], null),(function (){var iter__4292__auto__ = ((function (map__32092,map__32092__$1,sources,sources_with_warnings,map__32090,map__32090__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__32094(s__32095){
return (new cljs.core.LazySeq(null,((function (map__32092,map__32092__$1,sources,sources_with_warnings,map__32090,map__32090__$1,msg,type,info){
return (function (){
var s__32095__$1 = s__32095;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__32095__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__32100 = cljs.core.first(xs__6012__auto__);
var map__32100__$1 = ((((!((map__32100 == null)))?(((((map__32100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32100):map__32100);
var src = map__32100__$1;
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32100__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4288__auto__ = ((function (s__32095__$1,map__32100,map__32100__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__32092,map__32092__$1,sources,sources_with_warnings,map__32090,map__32090__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__32094_$_iter__32096(s__32097){
return (new cljs.core.LazySeq(null,((function (s__32095__$1,map__32100,map__32100__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__32092,map__32092__$1,sources,sources_with_warnings,map__32090,map__32090__$1,msg,type,info){
return (function (){
var s__32097__$1 = s__32097;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__32097__$1);
if(temp__5457__auto____$1){
var s__32097__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32097__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__32097__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__32099 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__32098 = (0);
while(true){
if((i__32098 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__32098);
cljs.core.chunk_append(b__32099,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__32102 = (i__32098 + (1));
i__32098 = G__32102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32099),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__32094_$_iter__32096(cljs.core.chunk_rest(s__32097__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32099),null);
}
} else {
var warning = cljs.core.first(s__32097__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__32094_$_iter__32096(cljs.core.rest(s__32097__$2)));
}
} else {
return null;
}
break;
}
});})(s__32095__$1,map__32100,map__32100__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__32092,map__32092__$1,sources,sources_with_warnings,map__32090,map__32090__$1,msg,type,info))
,null,null));
});})(s__32095__$1,map__32100,map__32100__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__32092,map__32092__$1,sources,sources_with_warnings,map__32090,map__32090__$1,msg,type,info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__32094(cljs.core.rest(s__32095__$1)));
} else {
var G__32103 = cljs.core.rest(s__32095__$1);
s__32095__$1 = G__32103;
continue;
}
} else {
return null;
}
break;
}
});})(map__32092,map__32092__$1,sources,sources_with_warnings,map__32090,map__32090__$1,msg,type,info))
,null,null));
});})(map__32092,map__32092__$1,sources,sources_with_warnings,map__32090,map__32090__$1,msg,type,info))
;
return iter__4292__auto__(sources_with_warnings);
})()], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__32104){
var map__32105 = p__32104;
var map__32105__$1 = ((((!((map__32105 == null)))?(((((map__32105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32105):map__32105);
var msg = map__32105__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32105__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","100","20px","0px","absolute","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
