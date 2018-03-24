goog.provide('mranderson047.garden.v1v3v3.garden.types');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson047.garden.v1v3v3.garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10592__auto__,k__10593__auto__){
var self__ = this;
var this__10592__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10592__auto____$1,k__10593__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10594__auto__,k32288,else__10595__auto__){
var self__ = this;
var this__10594__auto____$1 = this;
var G__32292 = k32288;
var G__32292__$1 = (((G__32292 instanceof cljs.core.Keyword))?G__32292.fqn:null);
switch (G__32292__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32288,else__10595__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10606__auto__,writer__10607__auto__,opts__10608__auto__){
var self__ = this;
var this__10606__auto____$1 = this;
var pr_pair__10609__auto__ = ((function (this__10606__auto____$1){
return (function (keyval__10610__auto__){
return cljs.core.pr_sequential_writer(writer__10607__auto__,cljs.core.pr_writer,""," ","",opts__10608__auto__,keyval__10610__auto__);
});})(this__10606__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10607__auto__,pr_pair__10609__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSUnit{",", ","}",opts__10608__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32287){
var self__ = this;
var G__32287__$1 = this;
return (new cljs.core.RecordIter((0),G__32287__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10590__auto__){
var self__ = this;
var this__10590__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10587__auto__){
var self__ = this;
var this__10587__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10596__auto__){
var self__ = this;
var this__10596__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10588__auto__){
var self__ = this;
var this__10588__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__32293 = ((function (h__4030__auto__,this__10588__auto____$1){
return (function (coll__10589__auto__){
return (671341226 ^ cljs.core.hash_unordered_coll(coll__10589__auto__));
});})(h__4030__auto__,this__10588__auto____$1))
;
return fexpr__32293(this__10588__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32289,other32290){
var self__ = this;
var this32289__$1 = this;
return ((!((other32290 == null))) && ((this32289__$1.constructor === other32290.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32289__$1.unit,other32290.unit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32289__$1.magnitude,other32290.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32289__$1.__extmap,other32290.__extmap)));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10601__auto__,k__10602__auto__){
var self__ = this;
var this__10601__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__10602__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10601__auto____$1),self__.__meta),k__10602__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10602__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10599__auto__,k__10600__auto__,G__32287){
var self__ = this;
var this__10599__auto____$1 = this;
var pred__32294 = cljs.core.keyword_identical_QMARK_;
var expr__32295 = k__10600__auto__;
if(cljs.core.truth_((function (){var G__32297 = new cljs.core.Keyword(null,"unit","unit",375175175);
var G__32298 = expr__32295;
return (pred__32294.cljs$core$IFn$_invoke$arity$2 ? pred__32294.cljs$core$IFn$_invoke$arity$2(G__32297,G__32298) : pred__32294.call(null,G__32297,G__32298));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(G__32287,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32299 = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222);
var G__32300 = expr__32295;
return (pred__32294.cljs$core$IFn$_invoke$arity$2 ? pred__32294.cljs$core$IFn$_invoke$arity$2(G__32299,G__32300) : pred__32294.call(null,G__32299,G__32300));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,G__32287,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10600__auto__,G__32287),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10604__auto__){
var self__ = this;
var this__10604__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10591__auto__,G__32287){
var self__ = this;
var this__10591__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,G__32287,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10597__auto__,entry__10598__auto__){
var self__ = this;
var this__10597__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10598__auto__)){
return cljs.core._assoc(this__10597__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10597__auto____$1,entry__10598__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSUnit",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSUnit");
});

/**
 * Positional factory function for mranderson047.garden.v1v3v3.garden.types/CSSUnit.
 */
mranderson047.garden.v1v3v3.garden.types.__GT_CSSUnit = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSUnit(unit,magnitude){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for mranderson047.garden.v1v3v3.garden.types/CSSUnit, taking a map of keywords to field values.
 */
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSUnit = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSUnit(G__32291){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__32291),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__32291),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32291,new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson047.garden.v1v3v3.garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10592__auto__,k__10593__auto__){
var self__ = this;
var this__10592__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10592__auto____$1,k__10593__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10594__auto__,k32331,else__10595__auto__){
var self__ = this;
var this__10594__auto____$1 = this;
var G__32343 = k32331;
var G__32343__$1 = (((G__32343 instanceof cljs.core.Keyword))?G__32343.fqn:null);
switch (G__32343__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32331,else__10595__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10606__auto__,writer__10607__auto__,opts__10608__auto__){
var self__ = this;
var this__10606__auto____$1 = this;
var pr_pair__10609__auto__ = ((function (this__10606__auto____$1){
return (function (keyval__10610__auto__){
return cljs.core.pr_sequential_writer(writer__10607__auto__,cljs.core.pr_writer,""," ","",opts__10608__auto__,keyval__10610__auto__);
});})(this__10606__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10607__auto__,pr_pair__10609__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSFunction{",", ","}",opts__10608__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32330){
var self__ = this;
var G__32330__$1 = this;
return (new cljs.core.RecordIter((0),G__32330__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10590__auto__){
var self__ = this;
var this__10590__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10587__auto__){
var self__ = this;
var this__10587__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10596__auto__){
var self__ = this;
var this__10596__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10588__auto__){
var self__ = this;
var this__10588__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__32350 = ((function (h__4030__auto__,this__10588__auto____$1){
return (function (coll__10589__auto__){
return (-830866841 ^ cljs.core.hash_unordered_coll(coll__10589__auto__));
});})(h__4030__auto__,this__10588__auto____$1))
;
return fexpr__32350(this__10588__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32332,other32333){
var self__ = this;
var this32332__$1 = this;
return ((!((other32333 == null))) && ((this32332__$1.constructor === other32333.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32332__$1.function,other32333.function)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32332__$1.args,other32333.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32332__$1.__extmap,other32333.__extmap)));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10601__auto__,k__10602__auto__){
var self__ = this;
var this__10601__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__10602__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10601__auto____$1),self__.__meta),k__10602__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10602__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10599__auto__,k__10600__auto__,G__32330){
var self__ = this;
var this__10599__auto____$1 = this;
var pred__32358 = cljs.core.keyword_identical_QMARK_;
var expr__32359 = k__10600__auto__;
if(cljs.core.truth_((function (){var G__32361 = new cljs.core.Keyword(null,"function","function",-2127255473);
var G__32362 = expr__32359;
return (pred__32358.cljs$core$IFn$_invoke$arity$2 ? pred__32358.cljs$core$IFn$_invoke$arity$2(G__32361,G__32362) : pred__32358.call(null,G__32361,G__32362));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(G__32330,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32363 = new cljs.core.Keyword(null,"args","args",1315556576);
var G__32364 = expr__32359;
return (pred__32358.cljs$core$IFn$_invoke$arity$2 ? pred__32358.cljs$core$IFn$_invoke$arity$2(G__32363,G__32364) : pred__32358.call(null,G__32363,G__32364));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,G__32330,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10600__auto__,G__32330),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10604__auto__){
var self__ = this;
var this__10604__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10591__auto__,G__32330){
var self__ = this;
var this__10591__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,G__32330,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10597__auto__,entry__10598__auto__){
var self__ = this;
var this__10597__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10598__auto__)){
return cljs.core._assoc(this__10597__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10597__auto____$1,entry__10598__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSFunction",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSFunction");
});

/**
 * Positional factory function for mranderson047.garden.v1v3v3.garden.types/CSSFunction.
 */
mranderson047.garden.v1v3v3.garden.types.__GT_CSSFunction = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSFunction(function$,args){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(function$,args,null,null,null));
});

/**
 * Factory function for mranderson047.garden.v1v3v3.garden.types/CSSFunction, taking a map of keywords to field values.
 */
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSFunction = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSFunction(G__32338){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__32338),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__32338),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32338,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson047.garden.v1v3v3.garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10592__auto__,k__10593__auto__){
var self__ = this;
var this__10592__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10592__auto____$1,k__10593__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10594__auto__,k32386,else__10595__auto__){
var self__ = this;
var this__10594__auto____$1 = this;
var G__32397 = k32386;
var G__32397__$1 = (((G__32397 instanceof cljs.core.Keyword))?G__32397.fqn:null);
switch (G__32397__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32386,else__10595__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10606__auto__,writer__10607__auto__,opts__10608__auto__){
var self__ = this;
var this__10606__auto____$1 = this;
var pr_pair__10609__auto__ = ((function (this__10606__auto____$1){
return (function (keyval__10610__auto__){
return cljs.core.pr_sequential_writer(writer__10607__auto__,cljs.core.pr_writer,""," ","",opts__10608__auto__,keyval__10610__auto__);
});})(this__10606__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10607__auto__,pr_pair__10609__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSAtRule{",", ","}",opts__10608__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32385){
var self__ = this;
var G__32385__$1 = this;
return (new cljs.core.RecordIter((0),G__32385__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10590__auto__){
var self__ = this;
var this__10590__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10587__auto__){
var self__ = this;
var this__10587__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10596__auto__){
var self__ = this;
var this__10596__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10588__auto__){
var self__ = this;
var this__10588__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__32399 = ((function (h__4030__auto__,this__10588__auto____$1){
return (function (coll__10589__auto__){
return (845600990 ^ cljs.core.hash_unordered_coll(coll__10589__auto__));
});})(h__4030__auto__,this__10588__auto____$1))
;
return fexpr__32399(this__10588__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32387,other32388){
var self__ = this;
var this32387__$1 = this;
return ((!((other32388 == null))) && ((this32387__$1.constructor === other32388.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32387__$1.identifier,other32388.identifier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32387__$1.value,other32388.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32387__$1.__extmap,other32388.__extmap)));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10601__auto__,k__10602__auto__){
var self__ = this;
var this__10601__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__10602__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10601__auto____$1),self__.__meta),k__10602__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10602__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10599__auto__,k__10600__auto__,G__32385){
var self__ = this;
var this__10599__auto____$1 = this;
var pred__32404 = cljs.core.keyword_identical_QMARK_;
var expr__32405 = k__10600__auto__;
if(cljs.core.truth_((function (){var G__32407 = new cljs.core.Keyword(null,"identifier","identifier",-805503498);
var G__32408 = expr__32405;
return (pred__32404.cljs$core$IFn$_invoke$arity$2 ? pred__32404.cljs$core$IFn$_invoke$arity$2(G__32407,G__32408) : pred__32404.call(null,G__32407,G__32408));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(G__32385,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32409 = new cljs.core.Keyword(null,"value","value",305978217);
var G__32410 = expr__32405;
return (pred__32404.cljs$core$IFn$_invoke$arity$2 ? pred__32404.cljs$core$IFn$_invoke$arity$2(G__32409,G__32410) : pred__32404.call(null,G__32409,G__32410));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,G__32385,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10600__auto__,G__32385),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10604__auto__){
var self__ = this;
var this__10604__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10591__auto__,G__32385){
var self__ = this;
var this__10591__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,G__32385,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10597__auto__,entry__10598__auto__){
var self__ = this;
var this__10597__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10598__auto__)){
return cljs.core._assoc(this__10597__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10598__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10597__auto____$1,entry__10598__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSAtRule",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSAtRule");
});

/**
 * Positional factory function for mranderson047.garden.v1v3v3.garden.types/CSSAtRule.
 */
mranderson047.garden.v1v3v3.garden.types.__GT_CSSAtRule = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSAtRule(identifier,value){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for mranderson047.garden.v1v3v3.garden.types/CSSAtRule, taking a map of keywords to field values.
 */
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSAtRule = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSAtRule(G__32389){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__32389),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32389),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32389,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0))),null));
});


//# sourceMappingURL=mranderson047.garden.v1v3v3.garden.types.js.map
