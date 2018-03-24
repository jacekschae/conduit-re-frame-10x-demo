goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25531 = arguments.length;
switch (G__25531) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25537 = (function (f,blockable,meta25538){
this.f = f;
this.blockable = blockable;
this.meta25538 = meta25538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25539,meta25538__$1){
var self__ = this;
var _25539__$1 = this;
return (new cljs.core.async.t_cljs$core$async25537(self__.f,self__.blockable,meta25538__$1));
});

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25539){
var self__ = this;
var _25539__$1 = this;
return self__.meta25538;
});

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25538","meta25538",1888087923,null)], null);
});

cljs.core.async.t_cljs$core$async25537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25537";

cljs.core.async.t_cljs$core$async25537.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async25537");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25537.
 */
cljs.core.async.__GT_t_cljs$core$async25537 = (function cljs$core$async$__GT_t_cljs$core$async25537(f__$1,blockable__$1,meta25538){
return (new cljs.core.async.t_cljs$core$async25537(f__$1,blockable__$1,meta25538));
});

}

return (new cljs.core.async.t_cljs$core$async25537(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25572 = arguments.length;
switch (G__25572) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25585 = arguments.length;
switch (G__25585) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25599 = arguments.length;
switch (G__25599) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_25606 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25606) : fn1.call(null,val_25606));
} else {
cljs.core.async.impl.dispatch.run(((function (val_25606,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25606) : fn1.call(null,val_25606));
});})(val_25606,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25612 = arguments.length;
switch (G__25612) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___25637 = n;
var x_25638 = (0);
while(true){
if((x_25638 < n__4376__auto___25637)){
(a[x_25638] = (0));

var G__25639 = (x_25638 + (1));
x_25638 = G__25639;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__25640 = (i + (1));
i = G__25640;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async25641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25641 = (function (flag,meta25642){
this.flag = flag;
this.meta25642 = meta25642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25643,meta25642__$1){
var self__ = this;
var _25643__$1 = this;
return (new cljs.core.async.t_cljs$core$async25641(self__.flag,meta25642__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25643){
var self__ = this;
var _25643__$1 = this;
return self__.meta25642;
});})(flag))
;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25641.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25642","meta25642",-2146706333,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25641";

cljs.core.async.t_cljs$core$async25641.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async25641");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25641.
 */
cljs.core.async.__GT_t_cljs$core$async25641 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25641(flag__$1,meta25642){
return (new cljs.core.async.t_cljs$core$async25641(flag__$1,meta25642));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25641(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25646 = (function (flag,cb,meta25647){
this.flag = flag;
this.cb = cb;
this.meta25647 = meta25647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25648,meta25647__$1){
var self__ = this;
var _25648__$1 = this;
return (new cljs.core.async.t_cljs$core$async25646(self__.flag,self__.cb,meta25647__$1));
});

cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25648){
var self__ = this;
var _25648__$1 = this;
return self__.meta25647;
});

cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25647","meta25647",1498630403,null)], null);
});

cljs.core.async.t_cljs$core$async25646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25646";

cljs.core.async.t_cljs$core$async25646.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async25646");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25646.
 */
cljs.core.async.__GT_t_cljs$core$async25646 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25646(flag__$1,cb__$1,meta25647){
return (new cljs.core.async.t_cljs$core$async25646(flag__$1,cb__$1,meta25647));
});

}

return (new cljs.core.async.t_cljs$core$async25646(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25649_SHARP_){
var G__25651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25649_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25651) : fret.call(null,G__25651));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25650_SHARP_){
var G__25652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25650_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25652) : fret.call(null,G__25652));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25657 = (i + (1));
i = G__25657;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___25679 = arguments.length;
var i__4498__auto___25680 = (0);
while(true){
if((i__4498__auto___25680 < len__4497__auto___25679)){
args__4500__auto__.push((arguments[i__4498__auto___25680]));

var G__25681 = (i__4498__auto___25680 + (1));
i__4498__auto___25680 = G__25681;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25670){
var map__25671 = p__25670;
var map__25671__$1 = ((((!((map__25671 == null)))?(((((map__25671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25671):map__25671);
var opts = map__25671__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25661){
var G__25662 = cljs.core.first(seq25661);
var seq25661__$1 = cljs.core.next(seq25661);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25662,seq25661__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25686 = arguments.length;
switch (G__25686) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25472__auto___25732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___25732){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___25732){
return (function (state_25710){
var state_val_25711 = (state_25710[(1)]);
if((state_val_25711 === (7))){
var inst_25706 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25712_25733 = state_25710__$1;
(statearr_25712_25733[(2)] = inst_25706);

(statearr_25712_25733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (1))){
var state_25710__$1 = state_25710;
var statearr_25713_25734 = state_25710__$1;
(statearr_25713_25734[(2)] = null);

(statearr_25713_25734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (4))){
var inst_25689 = (state_25710[(7)]);
var inst_25689__$1 = (state_25710[(2)]);
var inst_25690 = (inst_25689__$1 == null);
var state_25710__$1 = (function (){var statearr_25714 = state_25710;
(statearr_25714[(7)] = inst_25689__$1);

return statearr_25714;
})();
if(cljs.core.truth_(inst_25690)){
var statearr_25715_25735 = state_25710__$1;
(statearr_25715_25735[(1)] = (5));

} else {
var statearr_25716_25736 = state_25710__$1;
(statearr_25716_25736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (13))){
var state_25710__$1 = state_25710;
var statearr_25717_25737 = state_25710__$1;
(statearr_25717_25737[(2)] = null);

(statearr_25717_25737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (6))){
var inst_25689 = (state_25710[(7)]);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25710__$1,(11),to,inst_25689);
} else {
if((state_val_25711 === (3))){
var inst_25708 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25710__$1,inst_25708);
} else {
if((state_val_25711 === (12))){
var state_25710__$1 = state_25710;
var statearr_25718_25738 = state_25710__$1;
(statearr_25718_25738[(2)] = null);

(statearr_25718_25738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (2))){
var state_25710__$1 = state_25710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25710__$1,(4),from);
} else {
if((state_val_25711 === (11))){
var inst_25699 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
if(cljs.core.truth_(inst_25699)){
var statearr_25719_25739 = state_25710__$1;
(statearr_25719_25739[(1)] = (12));

} else {
var statearr_25720_25740 = state_25710__$1;
(statearr_25720_25740[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (9))){
var state_25710__$1 = state_25710;
var statearr_25721_25741 = state_25710__$1;
(statearr_25721_25741[(2)] = null);

(statearr_25721_25741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (5))){
var state_25710__$1 = state_25710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25722_25742 = state_25710__$1;
(statearr_25722_25742[(1)] = (8));

} else {
var statearr_25723_25743 = state_25710__$1;
(statearr_25723_25743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (14))){
var inst_25704 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25724_25744 = state_25710__$1;
(statearr_25724_25744[(2)] = inst_25704);

(statearr_25724_25744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (10))){
var inst_25696 = (state_25710[(2)]);
var state_25710__$1 = state_25710;
var statearr_25725_25745 = state_25710__$1;
(statearr_25725_25745[(2)] = inst_25696);

(statearr_25725_25745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25711 === (8))){
var inst_25693 = cljs.core.async.close_BANG_(to);
var state_25710__$1 = state_25710;
var statearr_25726_25746 = state_25710__$1;
(statearr_25726_25746[(2)] = inst_25693);

(statearr_25726_25746[(1)] = (10));


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
});})(c__25472__auto___25732))
;
return ((function (switch__25250__auto__,c__25472__auto___25732){
return (function() {
var cljs$core$async$state_machine__25251__auto__ = null;
var cljs$core$async$state_machine__25251__auto____0 = (function (){
var statearr_25727 = [null,null,null,null,null,null,null,null];
(statearr_25727[(0)] = cljs$core$async$state_machine__25251__auto__);

(statearr_25727[(1)] = (1));

return statearr_25727;
});
var cljs$core$async$state_machine__25251__auto____1 = (function (state_25710){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_25710);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e25728){if((e25728 instanceof Object)){
var ex__25254__auto__ = e25728;
var statearr_25729_25747 = state_25710;
(statearr_25729_25747[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25748 = state_25710;
state_25710 = G__25748;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$state_machine__25251__auto__ = function(state_25710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25251__auto____1.call(this,state_25710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25251__auto____0;
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25251__auto____1;
return cljs$core$async$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___25732))
})();
var state__25474__auto__ = (function (){var statearr_25730 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_25730[(6)] = c__25472__auto___25732);

return statearr_25730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___25732))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__25749){
var vec__25750 = p__25749;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25750,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25750,(1),null);
var job = vec__25750;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__25472__auto___25931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___25931,res,vec__25750,v,p,job,jobs,results){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___25931,res,vec__25750,v,p,job,jobs,results){
return (function (state_25757){
var state_val_25758 = (state_25757[(1)]);
if((state_val_25758 === (1))){
var state_25757__$1 = state_25757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25757__$1,(2),res,v);
} else {
if((state_val_25758 === (2))){
var inst_25754 = (state_25757[(2)]);
var inst_25755 = cljs.core.async.close_BANG_(res);
var state_25757__$1 = (function (){var statearr_25759 = state_25757;
(statearr_25759[(7)] = inst_25754);

return statearr_25759;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25757__$1,inst_25755);
} else {
return null;
}
}
});})(c__25472__auto___25931,res,vec__25750,v,p,job,jobs,results))
;
return ((function (switch__25250__auto__,c__25472__auto___25931,res,vec__25750,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0 = (function (){
var statearr_25760 = [null,null,null,null,null,null,null,null];
(statearr_25760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__);

(statearr_25760[(1)] = (1));

return statearr_25760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1 = (function (state_25757){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_25757);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e25761){if((e25761 instanceof Object)){
var ex__25254__auto__ = e25761;
var statearr_25762_25947 = state_25757;
(statearr_25762_25947[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25951 = state_25757;
state_25757 = G__25951;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__ = function(state_25757){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1.call(this,state_25757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___25931,res,vec__25750,v,p,job,jobs,results))
})();
var state__25474__auto__ = (function (){var statearr_25763 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_25763[(6)] = c__25472__auto___25931);

return statearr_25763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___25931,res,vec__25750,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25764){
var vec__25765 = p__25764;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25765,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25765,(1),null);
var job = vec__25765;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___25958 = n;
var __25959 = (0);
while(true){
if((__25959 < n__4376__auto___25958)){
var G__25768_25960 = type;
var G__25768_25961__$1 = (((G__25768_25960 instanceof cljs.core.Keyword))?G__25768_25960.fqn:null);
switch (G__25768_25961__$1) {
case "compute":
var c__25472__auto___25966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25959,c__25472__auto___25966,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (__25959,c__25472__auto___25966,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async){
return (function (state_25781){
var state_val_25782 = (state_25781[(1)]);
if((state_val_25782 === (1))){
var state_25781__$1 = state_25781;
var statearr_25783_25976 = state_25781__$1;
(statearr_25783_25976[(2)] = null);

(statearr_25783_25976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25782 === (2))){
var state_25781__$1 = state_25781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25781__$1,(4),jobs);
} else {
if((state_val_25782 === (3))){
var inst_25779 = (state_25781[(2)]);
var state_25781__$1 = state_25781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25781__$1,inst_25779);
} else {
if((state_val_25782 === (4))){
var inst_25771 = (state_25781[(2)]);
var inst_25772 = process(inst_25771);
var state_25781__$1 = state_25781;
if(cljs.core.truth_(inst_25772)){
var statearr_25784_25986 = state_25781__$1;
(statearr_25784_25986[(1)] = (5));

} else {
var statearr_25785_25987 = state_25781__$1;
(statearr_25785_25987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25782 === (5))){
var state_25781__$1 = state_25781;
var statearr_25786_25988 = state_25781__$1;
(statearr_25786_25988[(2)] = null);

(statearr_25786_25988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25782 === (6))){
var state_25781__$1 = state_25781;
var statearr_25787_25989 = state_25781__$1;
(statearr_25787_25989[(2)] = null);

(statearr_25787_25989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25782 === (7))){
var inst_25777 = (state_25781[(2)]);
var state_25781__$1 = state_25781;
var statearr_25788_25990 = state_25781__$1;
(statearr_25788_25990[(2)] = inst_25777);

(statearr_25788_25990[(1)] = (3));


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
});})(__25959,c__25472__auto___25966,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async))
;
return ((function (__25959,switch__25250__auto__,c__25472__auto___25966,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0 = (function (){
var statearr_25789 = [null,null,null,null,null,null,null];
(statearr_25789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__);

(statearr_25789[(1)] = (1));

return statearr_25789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1 = (function (state_25781){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_25781);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e25790){if((e25790 instanceof Object)){
var ex__25254__auto__ = e25790;
var statearr_25791_25997 = state_25781;
(statearr_25791_25997[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25790;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25998 = state_25781;
state_25781 = G__25998;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__ = function(state_25781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1.call(this,state_25781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__;
})()
;})(__25959,switch__25250__auto__,c__25472__auto___25966,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async))
})();
var state__25474__auto__ = (function (){var statearr_25792 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_25792[(6)] = c__25472__auto___25966);

return statearr_25792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(__25959,c__25472__auto___25966,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async))
);


break;
case "async":
var c__25472__auto___26002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25959,c__25472__auto___26002,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (__25959,c__25472__auto___26002,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async){
return (function (state_25805){
var state_val_25806 = (state_25805[(1)]);
if((state_val_25806 === (1))){
var state_25805__$1 = state_25805;
var statearr_25807_26006 = state_25805__$1;
(statearr_25807_26006[(2)] = null);

(statearr_25807_26006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25806 === (2))){
var state_25805__$1 = state_25805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25805__$1,(4),jobs);
} else {
if((state_val_25806 === (3))){
var inst_25803 = (state_25805[(2)]);
var state_25805__$1 = state_25805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25805__$1,inst_25803);
} else {
if((state_val_25806 === (4))){
var inst_25795 = (state_25805[(2)]);
var inst_25796 = async(inst_25795);
var state_25805__$1 = state_25805;
if(cljs.core.truth_(inst_25796)){
var statearr_25808_26013 = state_25805__$1;
(statearr_25808_26013[(1)] = (5));

} else {
var statearr_25809_26014 = state_25805__$1;
(statearr_25809_26014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25806 === (5))){
var state_25805__$1 = state_25805;
var statearr_25810_26015 = state_25805__$1;
(statearr_25810_26015[(2)] = null);

(statearr_25810_26015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25806 === (6))){
var state_25805__$1 = state_25805;
var statearr_25811_26016 = state_25805__$1;
(statearr_25811_26016[(2)] = null);

(statearr_25811_26016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25806 === (7))){
var inst_25801 = (state_25805[(2)]);
var state_25805__$1 = state_25805;
var statearr_25812_26020 = state_25805__$1;
(statearr_25812_26020[(2)] = inst_25801);

(statearr_25812_26020[(1)] = (3));


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
});})(__25959,c__25472__auto___26002,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async))
;
return ((function (__25959,switch__25250__auto__,c__25472__auto___26002,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0 = (function (){
var statearr_25813 = [null,null,null,null,null,null,null];
(statearr_25813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__);

(statearr_25813[(1)] = (1));

return statearr_25813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1 = (function (state_25805){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_25805);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e25814){if((e25814 instanceof Object)){
var ex__25254__auto__ = e25814;
var statearr_25816_26024 = state_25805;
(statearr_25816_26024[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26025 = state_25805;
state_25805 = G__26025;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__ = function(state_25805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1.call(this,state_25805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__;
})()
;})(__25959,switch__25250__auto__,c__25472__auto___26002,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async))
})();
var state__25474__auto__ = (function (){var statearr_25820 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_25820[(6)] = c__25472__auto___26002);

return statearr_25820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(__25959,c__25472__auto___26002,G__25768_25960,G__25768_25961__$1,n__4376__auto___25958,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25768_25961__$1)].join('')));

}

var G__26029 = (__25959 + (1));
__25959 = G__26029;
continue;
} else {
}
break;
}

var c__25472__auto___26030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___26030,jobs,results,process,async){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___26030,jobs,results,process,async){
return (function (state_25842){
var state_val_25843 = (state_25842[(1)]);
if((state_val_25843 === (1))){
var state_25842__$1 = state_25842;
var statearr_25847_26037 = state_25842__$1;
(statearr_25847_26037[(2)] = null);

(statearr_25847_26037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25843 === (2))){
var state_25842__$1 = state_25842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25842__$1,(4),from);
} else {
if((state_val_25843 === (3))){
var inst_25840 = (state_25842[(2)]);
var state_25842__$1 = state_25842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25842__$1,inst_25840);
} else {
if((state_val_25843 === (4))){
var inst_25823 = (state_25842[(7)]);
var inst_25823__$1 = (state_25842[(2)]);
var inst_25824 = (inst_25823__$1 == null);
var state_25842__$1 = (function (){var statearr_25848 = state_25842;
(statearr_25848[(7)] = inst_25823__$1);

return statearr_25848;
})();
if(cljs.core.truth_(inst_25824)){
var statearr_25849_26050 = state_25842__$1;
(statearr_25849_26050[(1)] = (5));

} else {
var statearr_25850_26051 = state_25842__$1;
(statearr_25850_26051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25843 === (5))){
var inst_25826 = cljs.core.async.close_BANG_(jobs);
var state_25842__$1 = state_25842;
var statearr_25851_26053 = state_25842__$1;
(statearr_25851_26053[(2)] = inst_25826);

(statearr_25851_26053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25843 === (6))){
var inst_25823 = (state_25842[(7)]);
var inst_25828 = (state_25842[(8)]);
var inst_25828__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_25829 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25830 = [inst_25823,inst_25828__$1];
var inst_25831 = (new cljs.core.PersistentVector(null,2,(5),inst_25829,inst_25830,null));
var state_25842__$1 = (function (){var statearr_25852 = state_25842;
(statearr_25852[(8)] = inst_25828__$1);

return statearr_25852;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25842__$1,(8),jobs,inst_25831);
} else {
if((state_val_25843 === (7))){
var inst_25838 = (state_25842[(2)]);
var state_25842__$1 = state_25842;
var statearr_25853_26054 = state_25842__$1;
(statearr_25853_26054[(2)] = inst_25838);

(statearr_25853_26054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25843 === (8))){
var inst_25828 = (state_25842[(8)]);
var inst_25833 = (state_25842[(2)]);
var state_25842__$1 = (function (){var statearr_25854 = state_25842;
(statearr_25854[(9)] = inst_25833);

return statearr_25854;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25842__$1,(9),results,inst_25828);
} else {
if((state_val_25843 === (9))){
var inst_25835 = (state_25842[(2)]);
var state_25842__$1 = (function (){var statearr_25855 = state_25842;
(statearr_25855[(10)] = inst_25835);

return statearr_25855;
})();
var statearr_25856_26055 = state_25842__$1;
(statearr_25856_26055[(2)] = null);

(statearr_25856_26055[(1)] = (2));


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
});})(c__25472__auto___26030,jobs,results,process,async))
;
return ((function (switch__25250__auto__,c__25472__auto___26030,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0 = (function (){
var statearr_25858 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__);

(statearr_25858[(1)] = (1));

return statearr_25858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1 = (function (state_25842){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_25842);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e25860){if((e25860 instanceof Object)){
var ex__25254__auto__ = e25860;
var statearr_25861_26056 = state_25842;
(statearr_25861_26056[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26057 = state_25842;
state_25842 = G__26057;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__ = function(state_25842){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1.call(this,state_25842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___26030,jobs,results,process,async))
})();
var state__25474__auto__ = (function (){var statearr_25862 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_25862[(6)] = c__25472__auto___26030);

return statearr_25862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___26030,jobs,results,process,async))
);


var c__25472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto__,jobs,results,process,async){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto__,jobs,results,process,async){
return (function (state_25901){
var state_val_25902 = (state_25901[(1)]);
if((state_val_25902 === (7))){
var inst_25897 = (state_25901[(2)]);
var state_25901__$1 = state_25901;
var statearr_25903_26058 = state_25901__$1;
(statearr_25903_26058[(2)] = inst_25897);

(statearr_25903_26058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (20))){
var state_25901__$1 = state_25901;
var statearr_25904_26059 = state_25901__$1;
(statearr_25904_26059[(2)] = null);

(statearr_25904_26059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (1))){
var state_25901__$1 = state_25901;
var statearr_25905_26060 = state_25901__$1;
(statearr_25905_26060[(2)] = null);

(statearr_25905_26060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (4))){
var inst_25865 = (state_25901[(7)]);
var inst_25865__$1 = (state_25901[(2)]);
var inst_25866 = (inst_25865__$1 == null);
var state_25901__$1 = (function (){var statearr_25906 = state_25901;
(statearr_25906[(7)] = inst_25865__$1);

return statearr_25906;
})();
if(cljs.core.truth_(inst_25866)){
var statearr_25907_26061 = state_25901__$1;
(statearr_25907_26061[(1)] = (5));

} else {
var statearr_25908_26062 = state_25901__$1;
(statearr_25908_26062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (15))){
var inst_25879 = (state_25901[(8)]);
var state_25901__$1 = state_25901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25901__$1,(18),to,inst_25879);
} else {
if((state_val_25902 === (21))){
var inst_25892 = (state_25901[(2)]);
var state_25901__$1 = state_25901;
var statearr_25909_26063 = state_25901__$1;
(statearr_25909_26063[(2)] = inst_25892);

(statearr_25909_26063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (13))){
var inst_25894 = (state_25901[(2)]);
var state_25901__$1 = (function (){var statearr_25910 = state_25901;
(statearr_25910[(9)] = inst_25894);

return statearr_25910;
})();
var statearr_25911_26064 = state_25901__$1;
(statearr_25911_26064[(2)] = null);

(statearr_25911_26064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (6))){
var inst_25865 = (state_25901[(7)]);
var state_25901__$1 = state_25901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25901__$1,(11),inst_25865);
} else {
if((state_val_25902 === (17))){
var inst_25887 = (state_25901[(2)]);
var state_25901__$1 = state_25901;
if(cljs.core.truth_(inst_25887)){
var statearr_25912_26065 = state_25901__$1;
(statearr_25912_26065[(1)] = (19));

} else {
var statearr_25913_26066 = state_25901__$1;
(statearr_25913_26066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (3))){
var inst_25899 = (state_25901[(2)]);
var state_25901__$1 = state_25901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25901__$1,inst_25899);
} else {
if((state_val_25902 === (12))){
var inst_25875 = (state_25901[(10)]);
var state_25901__$1 = state_25901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25901__$1,(14),inst_25875);
} else {
if((state_val_25902 === (2))){
var state_25901__$1 = state_25901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25901__$1,(4),results);
} else {
if((state_val_25902 === (19))){
var state_25901__$1 = state_25901;
var statearr_25914_26067 = state_25901__$1;
(statearr_25914_26067[(2)] = null);

(statearr_25914_26067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (11))){
var inst_25875 = (state_25901[(2)]);
var state_25901__$1 = (function (){var statearr_25915 = state_25901;
(statearr_25915[(10)] = inst_25875);

return statearr_25915;
})();
var statearr_25916_26068 = state_25901__$1;
(statearr_25916_26068[(2)] = null);

(statearr_25916_26068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (9))){
var state_25901__$1 = state_25901;
var statearr_25917_26070 = state_25901__$1;
(statearr_25917_26070[(2)] = null);

(statearr_25917_26070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (5))){
var state_25901__$1 = state_25901;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25918_26071 = state_25901__$1;
(statearr_25918_26071[(1)] = (8));

} else {
var statearr_25919_26072 = state_25901__$1;
(statearr_25919_26072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (14))){
var inst_25881 = (state_25901[(11)]);
var inst_25879 = (state_25901[(8)]);
var inst_25879__$1 = (state_25901[(2)]);
var inst_25880 = (inst_25879__$1 == null);
var inst_25881__$1 = cljs.core.not(inst_25880);
var state_25901__$1 = (function (){var statearr_25920 = state_25901;
(statearr_25920[(11)] = inst_25881__$1);

(statearr_25920[(8)] = inst_25879__$1);

return statearr_25920;
})();
if(inst_25881__$1){
var statearr_25921_26073 = state_25901__$1;
(statearr_25921_26073[(1)] = (15));

} else {
var statearr_25922_26074 = state_25901__$1;
(statearr_25922_26074[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (16))){
var inst_25881 = (state_25901[(11)]);
var state_25901__$1 = state_25901;
var statearr_25923_26075 = state_25901__$1;
(statearr_25923_26075[(2)] = inst_25881);

(statearr_25923_26075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (10))){
var inst_25872 = (state_25901[(2)]);
var state_25901__$1 = state_25901;
var statearr_25924_26076 = state_25901__$1;
(statearr_25924_26076[(2)] = inst_25872);

(statearr_25924_26076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (18))){
var inst_25884 = (state_25901[(2)]);
var state_25901__$1 = state_25901;
var statearr_25925_26077 = state_25901__$1;
(statearr_25925_26077[(2)] = inst_25884);

(statearr_25925_26077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25902 === (8))){
var inst_25869 = cljs.core.async.close_BANG_(to);
var state_25901__$1 = state_25901;
var statearr_25926_26078 = state_25901__$1;
(statearr_25926_26078[(2)] = inst_25869);

(statearr_25926_26078[(1)] = (10));


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
}
}
}
}
});})(c__25472__auto__,jobs,results,process,async))
;
return ((function (switch__25250__auto__,c__25472__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0 = (function (){
var statearr_25927 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__);

(statearr_25927[(1)] = (1));

return statearr_25927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1 = (function (state_25901){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_25901);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e25928){if((e25928 instanceof Object)){
var ex__25254__auto__ = e25928;
var statearr_25929_26079 = state_25901;
(statearr_25929_26079[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26080 = state_25901;
state_25901 = G__26080;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__ = function(state_25901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1.call(this,state_25901);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto__,jobs,results,process,async))
})();
var state__25474__auto__ = (function (){var statearr_25930 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_25930[(6)] = c__25472__auto__);

return statearr_25930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto__,jobs,results,process,async))
);

return c__25472__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26082 = arguments.length;
switch (G__26082) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26085 = arguments.length;
switch (G__26085) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26091 = arguments.length;
switch (G__26091) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__25472__auto___26148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___26148,tc,fc){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___26148,tc,fc){
return (function (state_26117){
var state_val_26118 = (state_26117[(1)]);
if((state_val_26118 === (7))){
var inst_26113 = (state_26117[(2)]);
var state_26117__$1 = state_26117;
var statearr_26119_26149 = state_26117__$1;
(statearr_26119_26149[(2)] = inst_26113);

(statearr_26119_26149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26118 === (1))){
var state_26117__$1 = state_26117;
var statearr_26121_26150 = state_26117__$1;
(statearr_26121_26150[(2)] = null);

(statearr_26121_26150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26118 === (4))){
var inst_26094 = (state_26117[(7)]);
var inst_26094__$1 = (state_26117[(2)]);
var inst_26095 = (inst_26094__$1 == null);
var state_26117__$1 = (function (){var statearr_26123 = state_26117;
(statearr_26123[(7)] = inst_26094__$1);

return statearr_26123;
})();
if(cljs.core.truth_(inst_26095)){
var statearr_26124_26151 = state_26117__$1;
(statearr_26124_26151[(1)] = (5));

} else {
var statearr_26125_26152 = state_26117__$1;
(statearr_26125_26152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26118 === (13))){
var state_26117__$1 = state_26117;
var statearr_26126_26153 = state_26117__$1;
(statearr_26126_26153[(2)] = null);

(statearr_26126_26153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26118 === (6))){
var inst_26094 = (state_26117[(7)]);
var inst_26100 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26094) : p.call(null,inst_26094));
var state_26117__$1 = state_26117;
if(cljs.core.truth_(inst_26100)){
var statearr_26127_26154 = state_26117__$1;
(statearr_26127_26154[(1)] = (9));

} else {
var statearr_26128_26155 = state_26117__$1;
(statearr_26128_26155[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26118 === (3))){
var inst_26115 = (state_26117[(2)]);
var state_26117__$1 = state_26117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26117__$1,inst_26115);
} else {
if((state_val_26118 === (12))){
var state_26117__$1 = state_26117;
var statearr_26131_26156 = state_26117__$1;
(statearr_26131_26156[(2)] = null);

(statearr_26131_26156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26118 === (2))){
var state_26117__$1 = state_26117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26117__$1,(4),ch);
} else {
if((state_val_26118 === (11))){
var inst_26094 = (state_26117[(7)]);
var inst_26104 = (state_26117[(2)]);
var state_26117__$1 = state_26117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26117__$1,(8),inst_26104,inst_26094);
} else {
if((state_val_26118 === (9))){
var state_26117__$1 = state_26117;
var statearr_26133_26157 = state_26117__$1;
(statearr_26133_26157[(2)] = tc);

(statearr_26133_26157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26118 === (5))){
var inst_26097 = cljs.core.async.close_BANG_(tc);
var inst_26098 = cljs.core.async.close_BANG_(fc);
var state_26117__$1 = (function (){var statearr_26134 = state_26117;
(statearr_26134[(8)] = inst_26097);

return statearr_26134;
})();
var statearr_26135_26158 = state_26117__$1;
(statearr_26135_26158[(2)] = inst_26098);

(statearr_26135_26158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26118 === (14))){
var inst_26111 = (state_26117[(2)]);
var state_26117__$1 = state_26117;
var statearr_26136_26159 = state_26117__$1;
(statearr_26136_26159[(2)] = inst_26111);

(statearr_26136_26159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26118 === (10))){
var state_26117__$1 = state_26117;
var statearr_26137_26160 = state_26117__$1;
(statearr_26137_26160[(2)] = fc);

(statearr_26137_26160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26118 === (8))){
var inst_26106 = (state_26117[(2)]);
var state_26117__$1 = state_26117;
if(cljs.core.truth_(inst_26106)){
var statearr_26139_26161 = state_26117__$1;
(statearr_26139_26161[(1)] = (12));

} else {
var statearr_26141_26162 = state_26117__$1;
(statearr_26141_26162[(1)] = (13));

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
});})(c__25472__auto___26148,tc,fc))
;
return ((function (switch__25250__auto__,c__25472__auto___26148,tc,fc){
return (function() {
var cljs$core$async$state_machine__25251__auto__ = null;
var cljs$core$async$state_machine__25251__auto____0 = (function (){
var statearr_26143 = [null,null,null,null,null,null,null,null,null];
(statearr_26143[(0)] = cljs$core$async$state_machine__25251__auto__);

(statearr_26143[(1)] = (1));

return statearr_26143;
});
var cljs$core$async$state_machine__25251__auto____1 = (function (state_26117){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_26117);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e26144){if((e26144 instanceof Object)){
var ex__25254__auto__ = e26144;
var statearr_26145_26163 = state_26117;
(statearr_26145_26163[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26164 = state_26117;
state_26117 = G__26164;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$state_machine__25251__auto__ = function(state_26117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25251__auto____1.call(this,state_26117);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25251__auto____0;
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25251__auto____1;
return cljs$core$async$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___26148,tc,fc))
})();
var state__25474__auto__ = (function (){var statearr_26146 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_26146[(6)] = c__25472__auto___26148);

return statearr_26146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___26148,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto__){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto__){
return (function (state_26185){
var state_val_26186 = (state_26185[(1)]);
if((state_val_26186 === (7))){
var inst_26181 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
var statearr_26187_26205 = state_26185__$1;
(statearr_26187_26205[(2)] = inst_26181);

(statearr_26187_26205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (1))){
var inst_26165 = init;
var state_26185__$1 = (function (){var statearr_26188 = state_26185;
(statearr_26188[(7)] = inst_26165);

return statearr_26188;
})();
var statearr_26189_26206 = state_26185__$1;
(statearr_26189_26206[(2)] = null);

(statearr_26189_26206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (4))){
var inst_26168 = (state_26185[(8)]);
var inst_26168__$1 = (state_26185[(2)]);
var inst_26169 = (inst_26168__$1 == null);
var state_26185__$1 = (function (){var statearr_26190 = state_26185;
(statearr_26190[(8)] = inst_26168__$1);

return statearr_26190;
})();
if(cljs.core.truth_(inst_26169)){
var statearr_26191_26207 = state_26185__$1;
(statearr_26191_26207[(1)] = (5));

} else {
var statearr_26192_26208 = state_26185__$1;
(statearr_26192_26208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (6))){
var inst_26168 = (state_26185[(8)]);
var inst_26172 = (state_26185[(9)]);
var inst_26165 = (state_26185[(7)]);
var inst_26172__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_26165,inst_26168) : f.call(null,inst_26165,inst_26168));
var inst_26173 = cljs.core.reduced_QMARK_(inst_26172__$1);
var state_26185__$1 = (function (){var statearr_26193 = state_26185;
(statearr_26193[(9)] = inst_26172__$1);

return statearr_26193;
})();
if(inst_26173){
var statearr_26194_26209 = state_26185__$1;
(statearr_26194_26209[(1)] = (8));

} else {
var statearr_26195_26210 = state_26185__$1;
(statearr_26195_26210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (3))){
var inst_26183 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26185__$1,inst_26183);
} else {
if((state_val_26186 === (2))){
var state_26185__$1 = state_26185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26185__$1,(4),ch);
} else {
if((state_val_26186 === (9))){
var inst_26172 = (state_26185[(9)]);
var inst_26165 = inst_26172;
var state_26185__$1 = (function (){var statearr_26196 = state_26185;
(statearr_26196[(7)] = inst_26165);

return statearr_26196;
})();
var statearr_26197_26211 = state_26185__$1;
(statearr_26197_26211[(2)] = null);

(statearr_26197_26211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (5))){
var inst_26165 = (state_26185[(7)]);
var state_26185__$1 = state_26185;
var statearr_26198_26212 = state_26185__$1;
(statearr_26198_26212[(2)] = inst_26165);

(statearr_26198_26212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (10))){
var inst_26179 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
var statearr_26199_26213 = state_26185__$1;
(statearr_26199_26213[(2)] = inst_26179);

(statearr_26199_26213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (8))){
var inst_26172 = (state_26185[(9)]);
var inst_26175 = cljs.core.deref(inst_26172);
var state_26185__$1 = state_26185;
var statearr_26200_26214 = state_26185__$1;
(statearr_26200_26214[(2)] = inst_26175);

(statearr_26200_26214[(1)] = (10));


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
});})(c__25472__auto__))
;
return ((function (switch__25250__auto__,c__25472__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25251__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25251__auto____0 = (function (){
var statearr_26201 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26201[(0)] = cljs$core$async$reduce_$_state_machine__25251__auto__);

(statearr_26201[(1)] = (1));

return statearr_26201;
});
var cljs$core$async$reduce_$_state_machine__25251__auto____1 = (function (state_26185){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_26185);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e26202){if((e26202 instanceof Object)){
var ex__25254__auto__ = e26202;
var statearr_26203_26215 = state_26185;
(statearr_26203_26215[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26216 = state_26185;
state_26185 = G__26216;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25251__auto__ = function(state_26185){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25251__auto____1.call(this,state_26185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25251__auto____0;
cljs$core$async$reduce_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25251__auto____1;
return cljs$core$async$reduce_$_state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto__))
})();
var state__25474__auto__ = (function (){var statearr_26204 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_26204[(6)] = c__25472__auto__);

return statearr_26204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto__))
);

return c__25472__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__25472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto__,f__$1){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto__,f__$1){
return (function (state_26222){
var state_val_26223 = (state_26222[(1)]);
if((state_val_26223 === (1))){
var inst_26217 = cljs.core.async.reduce(f__$1,init,ch);
var state_26222__$1 = state_26222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26222__$1,(2),inst_26217);
} else {
if((state_val_26223 === (2))){
var inst_26219 = (state_26222[(2)]);
var inst_26220 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_26219) : f__$1.call(null,inst_26219));
var state_26222__$1 = state_26222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26222__$1,inst_26220);
} else {
return null;
}
}
});})(c__25472__auto__,f__$1))
;
return ((function (switch__25250__auto__,c__25472__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25251__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25251__auto____0 = (function (){
var statearr_26224 = [null,null,null,null,null,null,null];
(statearr_26224[(0)] = cljs$core$async$transduce_$_state_machine__25251__auto__);

(statearr_26224[(1)] = (1));

return statearr_26224;
});
var cljs$core$async$transduce_$_state_machine__25251__auto____1 = (function (state_26222){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_26222);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e26225){if((e26225 instanceof Object)){
var ex__25254__auto__ = e26225;
var statearr_26226_26228 = state_26222;
(statearr_26226_26228[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26229 = state_26222;
state_26222 = G__26229;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25251__auto__ = function(state_26222){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25251__auto____1.call(this,state_26222);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25251__auto____0;
cljs$core$async$transduce_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25251__auto____1;
return cljs$core$async$transduce_$_state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto__,f__$1))
})();
var state__25474__auto__ = (function (){var statearr_26227 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_26227[(6)] = c__25472__auto__);

return statearr_26227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto__,f__$1))
);

return c__25472__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26231 = arguments.length;
switch (G__26231) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto__){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto__){
return (function (state_26256){
var state_val_26257 = (state_26256[(1)]);
if((state_val_26257 === (7))){
var inst_26238 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26258_26279 = state_26256__$1;
(statearr_26258_26279[(2)] = inst_26238);

(statearr_26258_26279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (1))){
var inst_26232 = cljs.core.seq(coll);
var inst_26233 = inst_26232;
var state_26256__$1 = (function (){var statearr_26259 = state_26256;
(statearr_26259[(7)] = inst_26233);

return statearr_26259;
})();
var statearr_26260_26280 = state_26256__$1;
(statearr_26260_26280[(2)] = null);

(statearr_26260_26280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (4))){
var inst_26233 = (state_26256[(7)]);
var inst_26236 = cljs.core.first(inst_26233);
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26256__$1,(7),ch,inst_26236);
} else {
if((state_val_26257 === (13))){
var inst_26250 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26261_26281 = state_26256__$1;
(statearr_26261_26281[(2)] = inst_26250);

(statearr_26261_26281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (6))){
var inst_26241 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
if(cljs.core.truth_(inst_26241)){
var statearr_26262_26282 = state_26256__$1;
(statearr_26262_26282[(1)] = (8));

} else {
var statearr_26263_26283 = state_26256__$1;
(statearr_26263_26283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (3))){
var inst_26254 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26256__$1,inst_26254);
} else {
if((state_val_26257 === (12))){
var state_26256__$1 = state_26256;
var statearr_26264_26284 = state_26256__$1;
(statearr_26264_26284[(2)] = null);

(statearr_26264_26284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (2))){
var inst_26233 = (state_26256[(7)]);
var state_26256__$1 = state_26256;
if(cljs.core.truth_(inst_26233)){
var statearr_26265_26285 = state_26256__$1;
(statearr_26265_26285[(1)] = (4));

} else {
var statearr_26266_26286 = state_26256__$1;
(statearr_26266_26286[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (11))){
var inst_26247 = cljs.core.async.close_BANG_(ch);
var state_26256__$1 = state_26256;
var statearr_26267_26287 = state_26256__$1;
(statearr_26267_26287[(2)] = inst_26247);

(statearr_26267_26287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (9))){
var state_26256__$1 = state_26256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26268_26288 = state_26256__$1;
(statearr_26268_26288[(1)] = (11));

} else {
var statearr_26269_26289 = state_26256__$1;
(statearr_26269_26289[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (5))){
var inst_26233 = (state_26256[(7)]);
var state_26256__$1 = state_26256;
var statearr_26270_26290 = state_26256__$1;
(statearr_26270_26290[(2)] = inst_26233);

(statearr_26270_26290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (10))){
var inst_26252 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26271_26291 = state_26256__$1;
(statearr_26271_26291[(2)] = inst_26252);

(statearr_26271_26291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (8))){
var inst_26233 = (state_26256[(7)]);
var inst_26243 = cljs.core.next(inst_26233);
var inst_26233__$1 = inst_26243;
var state_26256__$1 = (function (){var statearr_26272 = state_26256;
(statearr_26272[(7)] = inst_26233__$1);

return statearr_26272;
})();
var statearr_26273_26292 = state_26256__$1;
(statearr_26273_26292[(2)] = null);

(statearr_26273_26292[(1)] = (2));


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
});})(c__25472__auto__))
;
return ((function (switch__25250__auto__,c__25472__auto__){
return (function() {
var cljs$core$async$state_machine__25251__auto__ = null;
var cljs$core$async$state_machine__25251__auto____0 = (function (){
var statearr_26274 = [null,null,null,null,null,null,null,null];
(statearr_26274[(0)] = cljs$core$async$state_machine__25251__auto__);

(statearr_26274[(1)] = (1));

return statearr_26274;
});
var cljs$core$async$state_machine__25251__auto____1 = (function (state_26256){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_26256);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e26275){if((e26275 instanceof Object)){
var ex__25254__auto__ = e26275;
var statearr_26276_26293 = state_26256;
(statearr_26276_26293[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26294 = state_26256;
state_26256 = G__26294;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$state_machine__25251__auto__ = function(state_26256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25251__auto____1.call(this,state_26256);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25251__auto____0;
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25251__auto____1;
return cljs$core$async$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto__))
})();
var state__25474__auto__ = (function (){var statearr_26277 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_26277[(6)] = c__25472__auto__);

return statearr_26277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto__))
);

return c__25472__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26304 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26304 = (function (ch,cs,meta26305){
this.ch = ch;
this.cs = cs;
this.meta26305 = meta26305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26306,meta26305__$1){
var self__ = this;
var _26306__$1 = this;
return (new cljs.core.async.t_cljs$core$async26304(self__.ch,self__.cs,meta26305__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26304.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26306){
var self__ = this;
var _26306__$1 = this;
return self__.meta26305;
});})(cs))
;

cljs.core.async.t_cljs$core$async26304.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26304.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26304.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26304.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26304.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26304.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26305","meta26305",-1545061236,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26304.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26304";

cljs.core.async.t_cljs$core$async26304.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async26304");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26304.
 */
cljs.core.async.__GT_t_cljs$core$async26304 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26304(ch__$1,cs__$1,meta26305){
return (new cljs.core.async.t_cljs$core$async26304(ch__$1,cs__$1,meta26305));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26304(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25472__auto___26560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___26560,cs,m,dchan,dctr,done){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___26560,cs,m,dchan,dctr,done){
return (function (state_26450){
var state_val_26451 = (state_26450[(1)]);
if((state_val_26451 === (7))){
var inst_26446 = (state_26450[(2)]);
var state_26450__$1 = state_26450;
var statearr_26457_26561 = state_26450__$1;
(statearr_26457_26561[(2)] = inst_26446);

(statearr_26457_26561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (20))){
var inst_26348 = (state_26450[(7)]);
var inst_26360 = cljs.core.first(inst_26348);
var inst_26361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26360,(0),null);
var inst_26362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26360,(1),null);
var state_26450__$1 = (function (){var statearr_26458 = state_26450;
(statearr_26458[(8)] = inst_26361);

return statearr_26458;
})();
if(cljs.core.truth_(inst_26362)){
var statearr_26459_26562 = state_26450__$1;
(statearr_26459_26562[(1)] = (22));

} else {
var statearr_26460_26563 = state_26450__$1;
(statearr_26460_26563[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (27))){
var inst_26390 = (state_26450[(9)]);
var inst_26316 = (state_26450[(10)]);
var inst_26397 = (state_26450[(11)]);
var inst_26392 = (state_26450[(12)]);
var inst_26397__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26390,inst_26392);
var inst_26398 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26397__$1,inst_26316,done);
var state_26450__$1 = (function (){var statearr_26461 = state_26450;
(statearr_26461[(11)] = inst_26397__$1);

return statearr_26461;
})();
if(cljs.core.truth_(inst_26398)){
var statearr_26462_26564 = state_26450__$1;
(statearr_26462_26564[(1)] = (30));

} else {
var statearr_26463_26565 = state_26450__$1;
(statearr_26463_26565[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (1))){
var state_26450__$1 = state_26450;
var statearr_26464_26566 = state_26450__$1;
(statearr_26464_26566[(2)] = null);

(statearr_26464_26566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (24))){
var inst_26348 = (state_26450[(7)]);
var inst_26367 = (state_26450[(2)]);
var inst_26368 = cljs.core.next(inst_26348);
var inst_26326 = inst_26368;
var inst_26327 = null;
var inst_26328 = (0);
var inst_26329 = (0);
var state_26450__$1 = (function (){var statearr_26465 = state_26450;
(statearr_26465[(13)] = inst_26367);

(statearr_26465[(14)] = inst_26328);

(statearr_26465[(15)] = inst_26327);

(statearr_26465[(16)] = inst_26326);

(statearr_26465[(17)] = inst_26329);

return statearr_26465;
})();
var statearr_26466_26573 = state_26450__$1;
(statearr_26466_26573[(2)] = null);

(statearr_26466_26573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (39))){
var state_26450__$1 = state_26450;
var statearr_26472_26574 = state_26450__$1;
(statearr_26472_26574[(2)] = null);

(statearr_26472_26574[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (4))){
var inst_26316 = (state_26450[(10)]);
var inst_26316__$1 = (state_26450[(2)]);
var inst_26317 = (inst_26316__$1 == null);
var state_26450__$1 = (function (){var statearr_26473 = state_26450;
(statearr_26473[(10)] = inst_26316__$1);

return statearr_26473;
})();
if(cljs.core.truth_(inst_26317)){
var statearr_26474_26575 = state_26450__$1;
(statearr_26474_26575[(1)] = (5));

} else {
var statearr_26475_26576 = state_26450__$1;
(statearr_26475_26576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (15))){
var inst_26328 = (state_26450[(14)]);
var inst_26327 = (state_26450[(15)]);
var inst_26326 = (state_26450[(16)]);
var inst_26329 = (state_26450[(17)]);
var inst_26344 = (state_26450[(2)]);
var inst_26345 = (inst_26329 + (1));
var tmp26467 = inst_26328;
var tmp26468 = inst_26327;
var tmp26469 = inst_26326;
var inst_26326__$1 = tmp26469;
var inst_26327__$1 = tmp26468;
var inst_26328__$1 = tmp26467;
var inst_26329__$1 = inst_26345;
var state_26450__$1 = (function (){var statearr_26476 = state_26450;
(statearr_26476[(14)] = inst_26328__$1);

(statearr_26476[(15)] = inst_26327__$1);

(statearr_26476[(18)] = inst_26344);

(statearr_26476[(16)] = inst_26326__$1);

(statearr_26476[(17)] = inst_26329__$1);

return statearr_26476;
})();
var statearr_26477_26577 = state_26450__$1;
(statearr_26477_26577[(2)] = null);

(statearr_26477_26577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (21))){
var inst_26371 = (state_26450[(2)]);
var state_26450__$1 = state_26450;
var statearr_26481_26578 = state_26450__$1;
(statearr_26481_26578[(2)] = inst_26371);

(statearr_26481_26578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (31))){
var inst_26397 = (state_26450[(11)]);
var inst_26402 = done(null);
var inst_26403 = cljs.core.async.untap_STAR_(m,inst_26397);
var state_26450__$1 = (function (){var statearr_26484 = state_26450;
(statearr_26484[(19)] = inst_26402);

return statearr_26484;
})();
var statearr_26485_26579 = state_26450__$1;
(statearr_26485_26579[(2)] = inst_26403);

(statearr_26485_26579[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (32))){
var inst_26390 = (state_26450[(9)]);
var inst_26391 = (state_26450[(20)]);
var inst_26392 = (state_26450[(12)]);
var inst_26389 = (state_26450[(21)]);
var inst_26405 = (state_26450[(2)]);
var inst_26406 = (inst_26392 + (1));
var tmp26478 = inst_26390;
var tmp26479 = inst_26391;
var tmp26480 = inst_26389;
var inst_26389__$1 = tmp26480;
var inst_26390__$1 = tmp26478;
var inst_26391__$1 = tmp26479;
var inst_26392__$1 = inst_26406;
var state_26450__$1 = (function (){var statearr_26486 = state_26450;
(statearr_26486[(9)] = inst_26390__$1);

(statearr_26486[(20)] = inst_26391__$1);

(statearr_26486[(22)] = inst_26405);

(statearr_26486[(12)] = inst_26392__$1);

(statearr_26486[(21)] = inst_26389__$1);

return statearr_26486;
})();
var statearr_26487_26580 = state_26450__$1;
(statearr_26487_26580[(2)] = null);

(statearr_26487_26580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (40))){
var inst_26418 = (state_26450[(23)]);
var inst_26422 = done(null);
var inst_26423 = cljs.core.async.untap_STAR_(m,inst_26418);
var state_26450__$1 = (function (){var statearr_26488 = state_26450;
(statearr_26488[(24)] = inst_26422);

return statearr_26488;
})();
var statearr_26489_26587 = state_26450__$1;
(statearr_26489_26587[(2)] = inst_26423);

(statearr_26489_26587[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (33))){
var inst_26409 = (state_26450[(25)]);
var inst_26411 = cljs.core.chunked_seq_QMARK_(inst_26409);
var state_26450__$1 = state_26450;
if(inst_26411){
var statearr_26490_26588 = state_26450__$1;
(statearr_26490_26588[(1)] = (36));

} else {
var statearr_26491_26589 = state_26450__$1;
(statearr_26491_26589[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (13))){
var inst_26338 = (state_26450[(26)]);
var inst_26341 = cljs.core.async.close_BANG_(inst_26338);
var state_26450__$1 = state_26450;
var statearr_26492_26590 = state_26450__$1;
(statearr_26492_26590[(2)] = inst_26341);

(statearr_26492_26590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (22))){
var inst_26361 = (state_26450[(8)]);
var inst_26364 = cljs.core.async.close_BANG_(inst_26361);
var state_26450__$1 = state_26450;
var statearr_26493_26591 = state_26450__$1;
(statearr_26493_26591[(2)] = inst_26364);

(statearr_26493_26591[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (36))){
var inst_26409 = (state_26450[(25)]);
var inst_26413 = cljs.core.chunk_first(inst_26409);
var inst_26414 = cljs.core.chunk_rest(inst_26409);
var inst_26415 = cljs.core.count(inst_26413);
var inst_26389 = inst_26414;
var inst_26390 = inst_26413;
var inst_26391 = inst_26415;
var inst_26392 = (0);
var state_26450__$1 = (function (){var statearr_26495 = state_26450;
(statearr_26495[(9)] = inst_26390);

(statearr_26495[(20)] = inst_26391);

(statearr_26495[(12)] = inst_26392);

(statearr_26495[(21)] = inst_26389);

return statearr_26495;
})();
var statearr_26496_26592 = state_26450__$1;
(statearr_26496_26592[(2)] = null);

(statearr_26496_26592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (41))){
var inst_26409 = (state_26450[(25)]);
var inst_26425 = (state_26450[(2)]);
var inst_26426 = cljs.core.next(inst_26409);
var inst_26389 = inst_26426;
var inst_26390 = null;
var inst_26391 = (0);
var inst_26392 = (0);
var state_26450__$1 = (function (){var statearr_26497 = state_26450;
(statearr_26497[(9)] = inst_26390);

(statearr_26497[(20)] = inst_26391);

(statearr_26497[(27)] = inst_26425);

(statearr_26497[(12)] = inst_26392);

(statearr_26497[(21)] = inst_26389);

return statearr_26497;
})();
var statearr_26500_26593 = state_26450__$1;
(statearr_26500_26593[(2)] = null);

(statearr_26500_26593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (43))){
var state_26450__$1 = state_26450;
var statearr_26501_26594 = state_26450__$1;
(statearr_26501_26594[(2)] = null);

(statearr_26501_26594[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (29))){
var inst_26434 = (state_26450[(2)]);
var state_26450__$1 = state_26450;
var statearr_26502_26595 = state_26450__$1;
(statearr_26502_26595[(2)] = inst_26434);

(statearr_26502_26595[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (44))){
var inst_26443 = (state_26450[(2)]);
var state_26450__$1 = (function (){var statearr_26505 = state_26450;
(statearr_26505[(28)] = inst_26443);

return statearr_26505;
})();
var statearr_26506_26596 = state_26450__$1;
(statearr_26506_26596[(2)] = null);

(statearr_26506_26596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (6))){
var inst_26381 = (state_26450[(29)]);
var inst_26380 = cljs.core.deref(cs);
var inst_26381__$1 = cljs.core.keys(inst_26380);
var inst_26382 = cljs.core.count(inst_26381__$1);
var inst_26383 = cljs.core.reset_BANG_(dctr,inst_26382);
var inst_26388 = cljs.core.seq(inst_26381__$1);
var inst_26389 = inst_26388;
var inst_26390 = null;
var inst_26391 = (0);
var inst_26392 = (0);
var state_26450__$1 = (function (){var statearr_26507 = state_26450;
(statearr_26507[(9)] = inst_26390);

(statearr_26507[(20)] = inst_26391);

(statearr_26507[(29)] = inst_26381__$1);

(statearr_26507[(30)] = inst_26383);

(statearr_26507[(12)] = inst_26392);

(statearr_26507[(21)] = inst_26389);

return statearr_26507;
})();
var statearr_26508_26597 = state_26450__$1;
(statearr_26508_26597[(2)] = null);

(statearr_26508_26597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (28))){
var inst_26409 = (state_26450[(25)]);
var inst_26389 = (state_26450[(21)]);
var inst_26409__$1 = cljs.core.seq(inst_26389);
var state_26450__$1 = (function (){var statearr_26509 = state_26450;
(statearr_26509[(25)] = inst_26409__$1);

return statearr_26509;
})();
if(inst_26409__$1){
var statearr_26510_26598 = state_26450__$1;
(statearr_26510_26598[(1)] = (33));

} else {
var statearr_26511_26599 = state_26450__$1;
(statearr_26511_26599[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (25))){
var inst_26391 = (state_26450[(20)]);
var inst_26392 = (state_26450[(12)]);
var inst_26394 = (inst_26392 < inst_26391);
var inst_26395 = inst_26394;
var state_26450__$1 = state_26450;
if(cljs.core.truth_(inst_26395)){
var statearr_26512_26600 = state_26450__$1;
(statearr_26512_26600[(1)] = (27));

} else {
var statearr_26513_26602 = state_26450__$1;
(statearr_26513_26602[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (34))){
var state_26450__$1 = state_26450;
var statearr_26514_26603 = state_26450__$1;
(statearr_26514_26603[(2)] = null);

(statearr_26514_26603[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (17))){
var state_26450__$1 = state_26450;
var statearr_26515_26604 = state_26450__$1;
(statearr_26515_26604[(2)] = null);

(statearr_26515_26604[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (3))){
var inst_26448 = (state_26450[(2)]);
var state_26450__$1 = state_26450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26450__$1,inst_26448);
} else {
if((state_val_26451 === (12))){
var inst_26376 = (state_26450[(2)]);
var state_26450__$1 = state_26450;
var statearr_26516_26605 = state_26450__$1;
(statearr_26516_26605[(2)] = inst_26376);

(statearr_26516_26605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (2))){
var state_26450__$1 = state_26450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26450__$1,(4),ch);
} else {
if((state_val_26451 === (23))){
var state_26450__$1 = state_26450;
var statearr_26517_26606 = state_26450__$1;
(statearr_26517_26606[(2)] = null);

(statearr_26517_26606[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (35))){
var inst_26432 = (state_26450[(2)]);
var state_26450__$1 = state_26450;
var statearr_26518_26607 = state_26450__$1;
(statearr_26518_26607[(2)] = inst_26432);

(statearr_26518_26607[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (19))){
var inst_26348 = (state_26450[(7)]);
var inst_26352 = cljs.core.chunk_first(inst_26348);
var inst_26353 = cljs.core.chunk_rest(inst_26348);
var inst_26354 = cljs.core.count(inst_26352);
var inst_26326 = inst_26353;
var inst_26327 = inst_26352;
var inst_26328 = inst_26354;
var inst_26329 = (0);
var state_26450__$1 = (function (){var statearr_26519 = state_26450;
(statearr_26519[(14)] = inst_26328);

(statearr_26519[(15)] = inst_26327);

(statearr_26519[(16)] = inst_26326);

(statearr_26519[(17)] = inst_26329);

return statearr_26519;
})();
var statearr_26520_26609 = state_26450__$1;
(statearr_26520_26609[(2)] = null);

(statearr_26520_26609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (11))){
var inst_26348 = (state_26450[(7)]);
var inst_26326 = (state_26450[(16)]);
var inst_26348__$1 = cljs.core.seq(inst_26326);
var state_26450__$1 = (function (){var statearr_26521 = state_26450;
(statearr_26521[(7)] = inst_26348__$1);

return statearr_26521;
})();
if(inst_26348__$1){
var statearr_26522_26612 = state_26450__$1;
(statearr_26522_26612[(1)] = (16));

} else {
var statearr_26523_26613 = state_26450__$1;
(statearr_26523_26613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (9))){
var inst_26378 = (state_26450[(2)]);
var state_26450__$1 = state_26450;
var statearr_26524_26614 = state_26450__$1;
(statearr_26524_26614[(2)] = inst_26378);

(statearr_26524_26614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (5))){
var inst_26323 = cljs.core.deref(cs);
var inst_26324 = cljs.core.seq(inst_26323);
var inst_26326 = inst_26324;
var inst_26327 = null;
var inst_26328 = (0);
var inst_26329 = (0);
var state_26450__$1 = (function (){var statearr_26525 = state_26450;
(statearr_26525[(14)] = inst_26328);

(statearr_26525[(15)] = inst_26327);

(statearr_26525[(16)] = inst_26326);

(statearr_26525[(17)] = inst_26329);

return statearr_26525;
})();
var statearr_26526_26615 = state_26450__$1;
(statearr_26526_26615[(2)] = null);

(statearr_26526_26615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (14))){
var state_26450__$1 = state_26450;
var statearr_26527_26617 = state_26450__$1;
(statearr_26527_26617[(2)] = null);

(statearr_26527_26617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (45))){
var inst_26440 = (state_26450[(2)]);
var state_26450__$1 = state_26450;
var statearr_26528_26618 = state_26450__$1;
(statearr_26528_26618[(2)] = inst_26440);

(statearr_26528_26618[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (26))){
var inst_26381 = (state_26450[(29)]);
var inst_26436 = (state_26450[(2)]);
var inst_26437 = cljs.core.seq(inst_26381);
var state_26450__$1 = (function (){var statearr_26529 = state_26450;
(statearr_26529[(31)] = inst_26436);

return statearr_26529;
})();
if(inst_26437){
var statearr_26530_26619 = state_26450__$1;
(statearr_26530_26619[(1)] = (42));

} else {
var statearr_26531_26621 = state_26450__$1;
(statearr_26531_26621[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (16))){
var inst_26348 = (state_26450[(7)]);
var inst_26350 = cljs.core.chunked_seq_QMARK_(inst_26348);
var state_26450__$1 = state_26450;
if(inst_26350){
var statearr_26532_26622 = state_26450__$1;
(statearr_26532_26622[(1)] = (19));

} else {
var statearr_26533_26623 = state_26450__$1;
(statearr_26533_26623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (38))){
var inst_26429 = (state_26450[(2)]);
var state_26450__$1 = state_26450;
var statearr_26534_26624 = state_26450__$1;
(statearr_26534_26624[(2)] = inst_26429);

(statearr_26534_26624[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (30))){
var state_26450__$1 = state_26450;
var statearr_26535_26625 = state_26450__$1;
(statearr_26535_26625[(2)] = null);

(statearr_26535_26625[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (10))){
var inst_26327 = (state_26450[(15)]);
var inst_26329 = (state_26450[(17)]);
var inst_26337 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26327,inst_26329);
var inst_26338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26337,(0),null);
var inst_26339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26337,(1),null);
var state_26450__$1 = (function (){var statearr_26536 = state_26450;
(statearr_26536[(26)] = inst_26338);

return statearr_26536;
})();
if(cljs.core.truth_(inst_26339)){
var statearr_26537_26628 = state_26450__$1;
(statearr_26537_26628[(1)] = (13));

} else {
var statearr_26538_26629 = state_26450__$1;
(statearr_26538_26629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (18))){
var inst_26374 = (state_26450[(2)]);
var state_26450__$1 = state_26450;
var statearr_26539_26631 = state_26450__$1;
(statearr_26539_26631[(2)] = inst_26374);

(statearr_26539_26631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (42))){
var state_26450__$1 = state_26450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26450__$1,(45),dchan);
} else {
if((state_val_26451 === (37))){
var inst_26418 = (state_26450[(23)]);
var inst_26316 = (state_26450[(10)]);
var inst_26409 = (state_26450[(25)]);
var inst_26418__$1 = cljs.core.first(inst_26409);
var inst_26419 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26418__$1,inst_26316,done);
var state_26450__$1 = (function (){var statearr_26540 = state_26450;
(statearr_26540[(23)] = inst_26418__$1);

return statearr_26540;
})();
if(cljs.core.truth_(inst_26419)){
var statearr_26541_26635 = state_26450__$1;
(statearr_26541_26635[(1)] = (39));

} else {
var statearr_26542_26636 = state_26450__$1;
(statearr_26542_26636[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26451 === (8))){
var inst_26328 = (state_26450[(14)]);
var inst_26329 = (state_26450[(17)]);
var inst_26331 = (inst_26329 < inst_26328);
var inst_26332 = inst_26331;
var state_26450__$1 = state_26450;
if(cljs.core.truth_(inst_26332)){
var statearr_26543_26639 = state_26450__$1;
(statearr_26543_26639[(1)] = (10));

} else {
var statearr_26544_26640 = state_26450__$1;
(statearr_26544_26640[(1)] = (11));

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
});})(c__25472__auto___26560,cs,m,dchan,dctr,done))
;
return ((function (switch__25250__auto__,c__25472__auto___26560,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25251__auto__ = null;
var cljs$core$async$mult_$_state_machine__25251__auto____0 = (function (){
var statearr_26548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26548[(0)] = cljs$core$async$mult_$_state_machine__25251__auto__);

(statearr_26548[(1)] = (1));

return statearr_26548;
});
var cljs$core$async$mult_$_state_machine__25251__auto____1 = (function (state_26450){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_26450);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e26549){if((e26549 instanceof Object)){
var ex__25254__auto__ = e26549;
var statearr_26550_26641 = state_26450;
(statearr_26550_26641[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26645 = state_26450;
state_26450 = G__26645;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25251__auto__ = function(state_26450){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25251__auto____1.call(this,state_26450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25251__auto____0;
cljs$core$async$mult_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25251__auto____1;
return cljs$core$async$mult_$_state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___26560,cs,m,dchan,dctr,done))
})();
var state__25474__auto__ = (function (){var statearr_26551 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_26551[(6)] = c__25472__auto___26560);

return statearr_26551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___26560,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26647 = arguments.length;
switch (G__26647) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto__.call(null,m,state_map));
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto__.call(null,m,mode));
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___26674 = arguments.length;
var i__4498__auto___26675 = (0);
while(true){
if((i__4498__auto___26675 < len__4497__auto___26674)){
args__4500__auto__.push((arguments[i__4498__auto___26675]));

var G__26676 = (i__4498__auto___26675 + (1));
i__4498__auto___26675 = G__26676;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26663){
var map__26664 = p__26663;
var map__26664__$1 = ((((!((map__26664 == null)))?(((((map__26664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26664):map__26664);
var opts = map__26664__$1;
var statearr_26669_26677 = state;
(statearr_26669_26677[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__26664,map__26664__$1,opts){
return (function (val){
var statearr_26671_26678 = state;
(statearr_26671_26678[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__26664,map__26664__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_26672_26679 = state;
(statearr_26672_26679[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26657){
var G__26658 = cljs.core.first(seq26657);
var seq26657__$1 = cljs.core.next(seq26657);
var G__26659 = cljs.core.first(seq26657__$1);
var seq26657__$2 = cljs.core.next(seq26657__$1);
var G__26660 = cljs.core.first(seq26657__$2);
var seq26657__$3 = cljs.core.next(seq26657__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26658,G__26659,G__26660,seq26657__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26680 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26681){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26681 = meta26681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26682,meta26681__$1){
var self__ = this;
var _26682__$1 = this;
return (new cljs.core.async.t_cljs$core$async26680(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26681__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26682){
var self__ = this;
var _26682__$1 = this;
return self__.meta26681;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26680.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26680.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26680.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26680.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26680.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26680.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26680.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26680.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26680.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta26681","meta26681",1326305523,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26680";

cljs.core.async.t_cljs$core$async26680.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async26680");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26680.
 */
cljs.core.async.__GT_t_cljs$core$async26680 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26680(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26681){
return (new cljs.core.async.t_cljs$core$async26680(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26681));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26680(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25472__auto___26893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___26893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___26893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26792){
var state_val_26793 = (state_26792[(1)]);
if((state_val_26793 === (7))){
var inst_26706 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
var statearr_26794_26894 = state_26792__$1;
(statearr_26794_26894[(2)] = inst_26706);

(statearr_26794_26894[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (20))){
var inst_26718 = (state_26792[(7)]);
var state_26792__$1 = state_26792;
var statearr_26795_26897 = state_26792__$1;
(statearr_26795_26897[(2)] = inst_26718);

(statearr_26795_26897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (27))){
var state_26792__$1 = state_26792;
var statearr_26796_26898 = state_26792__$1;
(statearr_26796_26898[(2)] = null);

(statearr_26796_26898[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (1))){
var inst_26693 = (state_26792[(8)]);
var inst_26693__$1 = calc_state();
var inst_26695 = (inst_26693__$1 == null);
var inst_26696 = cljs.core.not(inst_26695);
var state_26792__$1 = (function (){var statearr_26797 = state_26792;
(statearr_26797[(8)] = inst_26693__$1);

return statearr_26797;
})();
if(inst_26696){
var statearr_26798_26899 = state_26792__$1;
(statearr_26798_26899[(1)] = (2));

} else {
var statearr_26799_26900 = state_26792__$1;
(statearr_26799_26900[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (24))){
var inst_26766 = (state_26792[(9)]);
var inst_26743 = (state_26792[(10)]);
var inst_26752 = (state_26792[(11)]);
var inst_26766__$1 = (inst_26743.cljs$core$IFn$_invoke$arity$1 ? inst_26743.cljs$core$IFn$_invoke$arity$1(inst_26752) : inst_26743.call(null,inst_26752));
var state_26792__$1 = (function (){var statearr_26800 = state_26792;
(statearr_26800[(9)] = inst_26766__$1);

return statearr_26800;
})();
if(cljs.core.truth_(inst_26766__$1)){
var statearr_26801_26901 = state_26792__$1;
(statearr_26801_26901[(1)] = (29));

} else {
var statearr_26802_26902 = state_26792__$1;
(statearr_26802_26902[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (4))){
var inst_26709 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
if(cljs.core.truth_(inst_26709)){
var statearr_26803_26903 = state_26792__$1;
(statearr_26803_26903[(1)] = (8));

} else {
var statearr_26804_26904 = state_26792__$1;
(statearr_26804_26904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (15))){
var inst_26737 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
if(cljs.core.truth_(inst_26737)){
var statearr_26805_26905 = state_26792__$1;
(statearr_26805_26905[(1)] = (19));

} else {
var statearr_26806_26906 = state_26792__$1;
(statearr_26806_26906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (21))){
var inst_26742 = (state_26792[(12)]);
var inst_26742__$1 = (state_26792[(2)]);
var inst_26743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26742__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26742__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26742__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26792__$1 = (function (){var statearr_26807 = state_26792;
(statearr_26807[(10)] = inst_26743);

(statearr_26807[(13)] = inst_26744);

(statearr_26807[(12)] = inst_26742__$1);

return statearr_26807;
})();
return cljs.core.async.ioc_alts_BANG_(state_26792__$1,(22),inst_26745);
} else {
if((state_val_26793 === (31))){
var inst_26774 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
if(cljs.core.truth_(inst_26774)){
var statearr_26808_26907 = state_26792__$1;
(statearr_26808_26907[(1)] = (32));

} else {
var statearr_26809_26908 = state_26792__$1;
(statearr_26809_26908[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (32))){
var inst_26751 = (state_26792[(14)]);
var state_26792__$1 = state_26792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26792__$1,(35),out,inst_26751);
} else {
if((state_val_26793 === (33))){
var inst_26742 = (state_26792[(12)]);
var inst_26718 = inst_26742;
var state_26792__$1 = (function (){var statearr_26810 = state_26792;
(statearr_26810[(7)] = inst_26718);

return statearr_26810;
})();
var statearr_26811_26909 = state_26792__$1;
(statearr_26811_26909[(2)] = null);

(statearr_26811_26909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (13))){
var inst_26718 = (state_26792[(7)]);
var inst_26726 = inst_26718.cljs$lang$protocol_mask$partition0$;
var inst_26727 = (inst_26726 & (64));
var inst_26728 = inst_26718.cljs$core$ISeq$;
var inst_26729 = (cljs.core.PROTOCOL_SENTINEL === inst_26728);
var inst_26730 = ((inst_26727) || (inst_26729));
var state_26792__$1 = state_26792;
if(cljs.core.truth_(inst_26730)){
var statearr_26812_26910 = state_26792__$1;
(statearr_26812_26910[(1)] = (16));

} else {
var statearr_26813_26911 = state_26792__$1;
(statearr_26813_26911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (22))){
var inst_26752 = (state_26792[(11)]);
var inst_26751 = (state_26792[(14)]);
var inst_26750 = (state_26792[(2)]);
var inst_26751__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26750,(0),null);
var inst_26752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26750,(1),null);
var inst_26753 = (inst_26751__$1 == null);
var inst_26754 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26752__$1,change);
var inst_26755 = ((inst_26753) || (inst_26754));
var state_26792__$1 = (function (){var statearr_26815 = state_26792;
(statearr_26815[(11)] = inst_26752__$1);

(statearr_26815[(14)] = inst_26751__$1);

return statearr_26815;
})();
if(cljs.core.truth_(inst_26755)){
var statearr_26816_26912 = state_26792__$1;
(statearr_26816_26912[(1)] = (23));

} else {
var statearr_26817_26913 = state_26792__$1;
(statearr_26817_26913[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (36))){
var inst_26742 = (state_26792[(12)]);
var inst_26718 = inst_26742;
var state_26792__$1 = (function (){var statearr_26824 = state_26792;
(statearr_26824[(7)] = inst_26718);

return statearr_26824;
})();
var statearr_26825_26914 = state_26792__$1;
(statearr_26825_26914[(2)] = null);

(statearr_26825_26914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (29))){
var inst_26766 = (state_26792[(9)]);
var state_26792__$1 = state_26792;
var statearr_26826_26915 = state_26792__$1;
(statearr_26826_26915[(2)] = inst_26766);

(statearr_26826_26915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (6))){
var state_26792__$1 = state_26792;
var statearr_26827_26916 = state_26792__$1;
(statearr_26827_26916[(2)] = false);

(statearr_26827_26916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (28))){
var inst_26762 = (state_26792[(2)]);
var inst_26763 = calc_state();
var inst_26718 = inst_26763;
var state_26792__$1 = (function (){var statearr_26828 = state_26792;
(statearr_26828[(15)] = inst_26762);

(statearr_26828[(7)] = inst_26718);

return statearr_26828;
})();
var statearr_26829_26917 = state_26792__$1;
(statearr_26829_26917[(2)] = null);

(statearr_26829_26917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (25))){
var inst_26788 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
var statearr_26830_26918 = state_26792__$1;
(statearr_26830_26918[(2)] = inst_26788);

(statearr_26830_26918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (34))){
var inst_26786 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
var statearr_26831_26925 = state_26792__$1;
(statearr_26831_26925[(2)] = inst_26786);

(statearr_26831_26925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (17))){
var state_26792__$1 = state_26792;
var statearr_26832_26926 = state_26792__$1;
(statearr_26832_26926[(2)] = false);

(statearr_26832_26926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (3))){
var state_26792__$1 = state_26792;
var statearr_26833_26932 = state_26792__$1;
(statearr_26833_26932[(2)] = false);

(statearr_26833_26932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (12))){
var inst_26790 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26792__$1,inst_26790);
} else {
if((state_val_26793 === (2))){
var inst_26693 = (state_26792[(8)]);
var inst_26698 = inst_26693.cljs$lang$protocol_mask$partition0$;
var inst_26699 = (inst_26698 & (64));
var inst_26700 = inst_26693.cljs$core$ISeq$;
var inst_26701 = (cljs.core.PROTOCOL_SENTINEL === inst_26700);
var inst_26702 = ((inst_26699) || (inst_26701));
var state_26792__$1 = state_26792;
if(cljs.core.truth_(inst_26702)){
var statearr_26840_26933 = state_26792__$1;
(statearr_26840_26933[(1)] = (5));

} else {
var statearr_26841_26934 = state_26792__$1;
(statearr_26841_26934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (23))){
var inst_26751 = (state_26792[(14)]);
var inst_26757 = (inst_26751 == null);
var state_26792__$1 = state_26792;
if(cljs.core.truth_(inst_26757)){
var statearr_26849_26935 = state_26792__$1;
(statearr_26849_26935[(1)] = (26));

} else {
var statearr_26850_26936 = state_26792__$1;
(statearr_26850_26936[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (35))){
var inst_26777 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
if(cljs.core.truth_(inst_26777)){
var statearr_26851_26937 = state_26792__$1;
(statearr_26851_26937[(1)] = (36));

} else {
var statearr_26852_26938 = state_26792__$1;
(statearr_26852_26938[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (19))){
var inst_26718 = (state_26792[(7)]);
var inst_26739 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26718);
var state_26792__$1 = state_26792;
var statearr_26853_26939 = state_26792__$1;
(statearr_26853_26939[(2)] = inst_26739);

(statearr_26853_26939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (11))){
var inst_26718 = (state_26792[(7)]);
var inst_26723 = (inst_26718 == null);
var inst_26724 = cljs.core.not(inst_26723);
var state_26792__$1 = state_26792;
if(inst_26724){
var statearr_26854_26940 = state_26792__$1;
(statearr_26854_26940[(1)] = (13));

} else {
var statearr_26855_26941 = state_26792__$1;
(statearr_26855_26941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (9))){
var inst_26693 = (state_26792[(8)]);
var state_26792__$1 = state_26792;
var statearr_26856_26942 = state_26792__$1;
(statearr_26856_26942[(2)] = inst_26693);

(statearr_26856_26942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (5))){
var state_26792__$1 = state_26792;
var statearr_26857_26943 = state_26792__$1;
(statearr_26857_26943[(2)] = true);

(statearr_26857_26943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (14))){
var state_26792__$1 = state_26792;
var statearr_26858_26944 = state_26792__$1;
(statearr_26858_26944[(2)] = false);

(statearr_26858_26944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (26))){
var inst_26752 = (state_26792[(11)]);
var inst_26759 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26752);
var state_26792__$1 = state_26792;
var statearr_26859_26945 = state_26792__$1;
(statearr_26859_26945[(2)] = inst_26759);

(statearr_26859_26945[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (16))){
var state_26792__$1 = state_26792;
var statearr_26860_26946 = state_26792__$1;
(statearr_26860_26946[(2)] = true);

(statearr_26860_26946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (38))){
var inst_26782 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
var statearr_26861_26947 = state_26792__$1;
(statearr_26861_26947[(2)] = inst_26782);

(statearr_26861_26947[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (30))){
var inst_26743 = (state_26792[(10)]);
var inst_26752 = (state_26792[(11)]);
var inst_26744 = (state_26792[(13)]);
var inst_26769 = cljs.core.empty_QMARK_(inst_26743);
var inst_26770 = (inst_26744.cljs$core$IFn$_invoke$arity$1 ? inst_26744.cljs$core$IFn$_invoke$arity$1(inst_26752) : inst_26744.call(null,inst_26752));
var inst_26771 = cljs.core.not(inst_26770);
var inst_26772 = ((inst_26769) && (inst_26771));
var state_26792__$1 = state_26792;
var statearr_26863_26948 = state_26792__$1;
(statearr_26863_26948[(2)] = inst_26772);

(statearr_26863_26948[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (10))){
var inst_26693 = (state_26792[(8)]);
var inst_26714 = (state_26792[(2)]);
var inst_26715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26714,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26714,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26714,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26718 = inst_26693;
var state_26792__$1 = (function (){var statearr_26867 = state_26792;
(statearr_26867[(16)] = inst_26715);

(statearr_26867[(17)] = inst_26717);

(statearr_26867[(18)] = inst_26716);

(statearr_26867[(7)] = inst_26718);

return statearr_26867;
})();
var statearr_26868_26949 = state_26792__$1;
(statearr_26868_26949[(2)] = null);

(statearr_26868_26949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (18))){
var inst_26734 = (state_26792[(2)]);
var state_26792__$1 = state_26792;
var statearr_26869_26950 = state_26792__$1;
(statearr_26869_26950[(2)] = inst_26734);

(statearr_26869_26950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (37))){
var state_26792__$1 = state_26792;
var statearr_26870_26951 = state_26792__$1;
(statearr_26870_26951[(2)] = null);

(statearr_26870_26951[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26793 === (8))){
var inst_26693 = (state_26792[(8)]);
var inst_26711 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26693);
var state_26792__$1 = state_26792;
var statearr_26871_26952 = state_26792__$1;
(statearr_26871_26952[(2)] = inst_26711);

(statearr_26871_26952[(1)] = (10));


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
}
}
}
}
});})(c__25472__auto___26893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25250__auto__,c__25472__auto___26893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25251__auto__ = null;
var cljs$core$async$mix_$_state_machine__25251__auto____0 = (function (){
var statearr_26872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26872[(0)] = cljs$core$async$mix_$_state_machine__25251__auto__);

(statearr_26872[(1)] = (1));

return statearr_26872;
});
var cljs$core$async$mix_$_state_machine__25251__auto____1 = (function (state_26792){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_26792);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e26873){if((e26873 instanceof Object)){
var ex__25254__auto__ = e26873;
var statearr_26874_26955 = state_26792;
(statearr_26874_26955[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26873;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26956 = state_26792;
state_26792 = G__26956;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25251__auto__ = function(state_26792){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25251__auto____1.call(this,state_26792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25251__auto____0;
cljs$core$async$mix_$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25251__auto____1;
return cljs$core$async$mix_$_state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___26893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25474__auto__ = (function (){var statearr_26879 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_26879[(6)] = c__25472__auto___26893);

return statearr_26879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___26893,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto__.call(null,p,v,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26963 = arguments.length;
switch (G__26963) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto__.call(null,p));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto__.call(null,p,v));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26971 = arguments.length;
switch (G__26971) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3922__auto__,mults){
return (function (p1__26967_SHARP_){
if(cljs.core.truth_((p1__26967_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26967_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__26967_SHARP_.call(null,topic)))){
return p1__26967_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26967_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26973 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26974){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26974 = meta26974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26975,meta26974__$1){
var self__ = this;
var _26975__$1 = this;
return (new cljs.core.async.t_cljs$core$async26973(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26974__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26975){
var self__ = this;
var _26975__$1 = this;
return self__.meta26974;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26973.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26973.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26974","meta26974",-1281283264,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26973";

cljs.core.async.t_cljs$core$async26973.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async26973");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26973.
 */
cljs.core.async.__GT_t_cljs$core$async26973 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26973(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26974){
return (new cljs.core.async.t_cljs$core$async26973(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26974));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26973(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25472__auto___27103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___27103,mults,ensure_mult,p){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___27103,mults,ensure_mult,p){
return (function (state_27047){
var state_val_27048 = (state_27047[(1)]);
if((state_val_27048 === (7))){
var inst_27043 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27050_27104 = state_27047__$1;
(statearr_27050_27104[(2)] = inst_27043);

(statearr_27050_27104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (20))){
var state_27047__$1 = state_27047;
var statearr_27051_27105 = state_27047__$1;
(statearr_27051_27105[(2)] = null);

(statearr_27051_27105[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (1))){
var state_27047__$1 = state_27047;
var statearr_27052_27106 = state_27047__$1;
(statearr_27052_27106[(2)] = null);

(statearr_27052_27106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (24))){
var inst_27026 = (state_27047[(7)]);
var inst_27035 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27026);
var state_27047__$1 = state_27047;
var statearr_27053_27107 = state_27047__$1;
(statearr_27053_27107[(2)] = inst_27035);

(statearr_27053_27107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (4))){
var inst_26978 = (state_27047[(8)]);
var inst_26978__$1 = (state_27047[(2)]);
var inst_26979 = (inst_26978__$1 == null);
var state_27047__$1 = (function (){var statearr_27054 = state_27047;
(statearr_27054[(8)] = inst_26978__$1);

return statearr_27054;
})();
if(cljs.core.truth_(inst_26979)){
var statearr_27055_27108 = state_27047__$1;
(statearr_27055_27108[(1)] = (5));

} else {
var statearr_27056_27109 = state_27047__$1;
(statearr_27056_27109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (15))){
var inst_27020 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27057_27110 = state_27047__$1;
(statearr_27057_27110[(2)] = inst_27020);

(statearr_27057_27110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (21))){
var inst_27040 = (state_27047[(2)]);
var state_27047__$1 = (function (){var statearr_27058 = state_27047;
(statearr_27058[(9)] = inst_27040);

return statearr_27058;
})();
var statearr_27059_27111 = state_27047__$1;
(statearr_27059_27111[(2)] = null);

(statearr_27059_27111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (13))){
var inst_27002 = (state_27047[(10)]);
var inst_27004 = cljs.core.chunked_seq_QMARK_(inst_27002);
var state_27047__$1 = state_27047;
if(inst_27004){
var statearr_27060_27112 = state_27047__$1;
(statearr_27060_27112[(1)] = (16));

} else {
var statearr_27062_27113 = state_27047__$1;
(statearr_27062_27113[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (22))){
var inst_27032 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
if(cljs.core.truth_(inst_27032)){
var statearr_27063_27114 = state_27047__$1;
(statearr_27063_27114[(1)] = (23));

} else {
var statearr_27064_27115 = state_27047__$1;
(statearr_27064_27115[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (6))){
var inst_27026 = (state_27047[(7)]);
var inst_27028 = (state_27047[(11)]);
var inst_26978 = (state_27047[(8)]);
var inst_27026__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_26978) : topic_fn.call(null,inst_26978));
var inst_27027 = cljs.core.deref(mults);
var inst_27028__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27027,inst_27026__$1);
var state_27047__$1 = (function (){var statearr_27065 = state_27047;
(statearr_27065[(7)] = inst_27026__$1);

(statearr_27065[(11)] = inst_27028__$1);

return statearr_27065;
})();
if(cljs.core.truth_(inst_27028__$1)){
var statearr_27066_27116 = state_27047__$1;
(statearr_27066_27116[(1)] = (19));

} else {
var statearr_27068_27117 = state_27047__$1;
(statearr_27068_27117[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (25))){
var inst_27037 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27069_27118 = state_27047__$1;
(statearr_27069_27118[(2)] = inst_27037);

(statearr_27069_27118[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (17))){
var inst_27002 = (state_27047[(10)]);
var inst_27011 = cljs.core.first(inst_27002);
var inst_27012 = cljs.core.async.muxch_STAR_(inst_27011);
var inst_27013 = cljs.core.async.close_BANG_(inst_27012);
var inst_27014 = cljs.core.next(inst_27002);
var inst_26988 = inst_27014;
var inst_26989 = null;
var inst_26990 = (0);
var inst_26991 = (0);
var state_27047__$1 = (function (){var statearr_27070 = state_27047;
(statearr_27070[(12)] = inst_27013);

(statearr_27070[(13)] = inst_26991);

(statearr_27070[(14)] = inst_26990);

(statearr_27070[(15)] = inst_26989);

(statearr_27070[(16)] = inst_26988);

return statearr_27070;
})();
var statearr_27071_27119 = state_27047__$1;
(statearr_27071_27119[(2)] = null);

(statearr_27071_27119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (3))){
var inst_27045 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27047__$1,inst_27045);
} else {
if((state_val_27048 === (12))){
var inst_27022 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27072_27120 = state_27047__$1;
(statearr_27072_27120[(2)] = inst_27022);

(statearr_27072_27120[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (2))){
var state_27047__$1 = state_27047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27047__$1,(4),ch);
} else {
if((state_val_27048 === (23))){
var state_27047__$1 = state_27047;
var statearr_27073_27121 = state_27047__$1;
(statearr_27073_27121[(2)] = null);

(statearr_27073_27121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (19))){
var inst_27028 = (state_27047[(11)]);
var inst_26978 = (state_27047[(8)]);
var inst_27030 = cljs.core.async.muxch_STAR_(inst_27028);
var state_27047__$1 = state_27047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27047__$1,(22),inst_27030,inst_26978);
} else {
if((state_val_27048 === (11))){
var inst_27002 = (state_27047[(10)]);
var inst_26988 = (state_27047[(16)]);
var inst_27002__$1 = cljs.core.seq(inst_26988);
var state_27047__$1 = (function (){var statearr_27074 = state_27047;
(statearr_27074[(10)] = inst_27002__$1);

return statearr_27074;
})();
if(inst_27002__$1){
var statearr_27075_27122 = state_27047__$1;
(statearr_27075_27122[(1)] = (13));

} else {
var statearr_27076_27123 = state_27047__$1;
(statearr_27076_27123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (9))){
var inst_27024 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27077_27124 = state_27047__$1;
(statearr_27077_27124[(2)] = inst_27024);

(statearr_27077_27124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (5))){
var inst_26985 = cljs.core.deref(mults);
var inst_26986 = cljs.core.vals(inst_26985);
var inst_26987 = cljs.core.seq(inst_26986);
var inst_26988 = inst_26987;
var inst_26989 = null;
var inst_26990 = (0);
var inst_26991 = (0);
var state_27047__$1 = (function (){var statearr_27078 = state_27047;
(statearr_27078[(13)] = inst_26991);

(statearr_27078[(14)] = inst_26990);

(statearr_27078[(15)] = inst_26989);

(statearr_27078[(16)] = inst_26988);

return statearr_27078;
})();
var statearr_27079_27125 = state_27047__$1;
(statearr_27079_27125[(2)] = null);

(statearr_27079_27125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (14))){
var state_27047__$1 = state_27047;
var statearr_27083_27126 = state_27047__$1;
(statearr_27083_27126[(2)] = null);

(statearr_27083_27126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (16))){
var inst_27002 = (state_27047[(10)]);
var inst_27006 = cljs.core.chunk_first(inst_27002);
var inst_27007 = cljs.core.chunk_rest(inst_27002);
var inst_27008 = cljs.core.count(inst_27006);
var inst_26988 = inst_27007;
var inst_26989 = inst_27006;
var inst_26990 = inst_27008;
var inst_26991 = (0);
var state_27047__$1 = (function (){var statearr_27084 = state_27047;
(statearr_27084[(13)] = inst_26991);

(statearr_27084[(14)] = inst_26990);

(statearr_27084[(15)] = inst_26989);

(statearr_27084[(16)] = inst_26988);

return statearr_27084;
})();
var statearr_27085_27127 = state_27047__$1;
(statearr_27085_27127[(2)] = null);

(statearr_27085_27127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (10))){
var inst_26991 = (state_27047[(13)]);
var inst_26990 = (state_27047[(14)]);
var inst_26989 = (state_27047[(15)]);
var inst_26988 = (state_27047[(16)]);
var inst_26996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26989,inst_26991);
var inst_26997 = cljs.core.async.muxch_STAR_(inst_26996);
var inst_26998 = cljs.core.async.close_BANG_(inst_26997);
var inst_26999 = (inst_26991 + (1));
var tmp27080 = inst_26990;
var tmp27081 = inst_26989;
var tmp27082 = inst_26988;
var inst_26988__$1 = tmp27082;
var inst_26989__$1 = tmp27081;
var inst_26990__$1 = tmp27080;
var inst_26991__$1 = inst_26999;
var state_27047__$1 = (function (){var statearr_27086 = state_27047;
(statearr_27086[(17)] = inst_26998);

(statearr_27086[(13)] = inst_26991__$1);

(statearr_27086[(14)] = inst_26990__$1);

(statearr_27086[(15)] = inst_26989__$1);

(statearr_27086[(16)] = inst_26988__$1);

return statearr_27086;
})();
var statearr_27088_27128 = state_27047__$1;
(statearr_27088_27128[(2)] = null);

(statearr_27088_27128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (18))){
var inst_27017 = (state_27047[(2)]);
var state_27047__$1 = state_27047;
var statearr_27089_27129 = state_27047__$1;
(statearr_27089_27129[(2)] = inst_27017);

(statearr_27089_27129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27048 === (8))){
var inst_26991 = (state_27047[(13)]);
var inst_26990 = (state_27047[(14)]);
var inst_26993 = (inst_26991 < inst_26990);
var inst_26994 = inst_26993;
var state_27047__$1 = state_27047;
if(cljs.core.truth_(inst_26994)){
var statearr_27090_27130 = state_27047__$1;
(statearr_27090_27130[(1)] = (10));

} else {
var statearr_27091_27131 = state_27047__$1;
(statearr_27091_27131[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__25472__auto___27103,mults,ensure_mult,p))
;
return ((function (switch__25250__auto__,c__25472__auto___27103,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25251__auto__ = null;
var cljs$core$async$state_machine__25251__auto____0 = (function (){
var statearr_27093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27093[(0)] = cljs$core$async$state_machine__25251__auto__);

(statearr_27093[(1)] = (1));

return statearr_27093;
});
var cljs$core$async$state_machine__25251__auto____1 = (function (state_27047){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_27047);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e27094){if((e27094 instanceof Object)){
var ex__25254__auto__ = e27094;
var statearr_27095_27132 = state_27047;
(statearr_27095_27132[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27133 = state_27047;
state_27047 = G__27133;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$state_machine__25251__auto__ = function(state_27047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25251__auto____1.call(this,state_27047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25251__auto____0;
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25251__auto____1;
return cljs$core$async$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___27103,mults,ensure_mult,p))
})();
var state__25474__auto__ = (function (){var statearr_27096 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_27096[(6)] = c__25472__auto___27103);

return statearr_27096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___27103,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27135 = arguments.length;
switch (G__27135) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27141 = arguments.length;
switch (G__27141) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27145 = arguments.length;
switch (G__27145) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__25472__auto___27225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___27225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___27225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27190){
var state_val_27191 = (state_27190[(1)]);
if((state_val_27191 === (7))){
var state_27190__$1 = state_27190;
var statearr_27192_27227 = state_27190__$1;
(statearr_27192_27227[(2)] = null);

(statearr_27192_27227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (1))){
var state_27190__$1 = state_27190;
var statearr_27193_27228 = state_27190__$1;
(statearr_27193_27228[(2)] = null);

(statearr_27193_27228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (4))){
var inst_27150 = (state_27190[(7)]);
var inst_27152 = (inst_27150 < cnt);
var state_27190__$1 = state_27190;
if(cljs.core.truth_(inst_27152)){
var statearr_27194_27229 = state_27190__$1;
(statearr_27194_27229[(1)] = (6));

} else {
var statearr_27196_27230 = state_27190__$1;
(statearr_27196_27230[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (15))){
var inst_27186 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27198_27231 = state_27190__$1;
(statearr_27198_27231[(2)] = inst_27186);

(statearr_27198_27231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (13))){
var inst_27179 = cljs.core.async.close_BANG_(out);
var state_27190__$1 = state_27190;
var statearr_27199_27232 = state_27190__$1;
(statearr_27199_27232[(2)] = inst_27179);

(statearr_27199_27232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (6))){
var state_27190__$1 = state_27190;
var statearr_27200_27233 = state_27190__$1;
(statearr_27200_27233[(2)] = null);

(statearr_27200_27233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (3))){
var inst_27188 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27190__$1,inst_27188);
} else {
if((state_val_27191 === (12))){
var inst_27175 = (state_27190[(8)]);
var inst_27175__$1 = (state_27190[(2)]);
var inst_27176 = cljs.core.some(cljs.core.nil_QMARK_,inst_27175__$1);
var state_27190__$1 = (function (){var statearr_27201 = state_27190;
(statearr_27201[(8)] = inst_27175__$1);

return statearr_27201;
})();
if(cljs.core.truth_(inst_27176)){
var statearr_27202_27234 = state_27190__$1;
(statearr_27202_27234[(1)] = (13));

} else {
var statearr_27203_27235 = state_27190__$1;
(statearr_27203_27235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (2))){
var inst_27149 = cljs.core.reset_BANG_(dctr,cnt);
var inst_27150 = (0);
var state_27190__$1 = (function (){var statearr_27204 = state_27190;
(statearr_27204[(9)] = inst_27149);

(statearr_27204[(7)] = inst_27150);

return statearr_27204;
})();
var statearr_27205_27236 = state_27190__$1;
(statearr_27205_27236[(2)] = null);

(statearr_27205_27236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (11))){
var inst_27150 = (state_27190[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_27190,(10),Object,null,(9));
var inst_27162 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_27150) : chs__$1.call(null,inst_27150));
var inst_27163 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_27150) : done.call(null,inst_27150));
var inst_27164 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_27162,inst_27163);
var state_27190__$1 = state_27190;
var statearr_27206_27237 = state_27190__$1;
(statearr_27206_27237[(2)] = inst_27164);


cljs.core.async.impl.ioc_helpers.process_exception(state_27190__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (9))){
var inst_27150 = (state_27190[(7)]);
var inst_27166 = (state_27190[(2)]);
var inst_27167 = (inst_27150 + (1));
var inst_27150__$1 = inst_27167;
var state_27190__$1 = (function (){var statearr_27207 = state_27190;
(statearr_27207[(10)] = inst_27166);

(statearr_27207[(7)] = inst_27150__$1);

return statearr_27207;
})();
var statearr_27208_27238 = state_27190__$1;
(statearr_27208_27238[(2)] = null);

(statearr_27208_27238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (5))){
var inst_27173 = (state_27190[(2)]);
var state_27190__$1 = (function (){var statearr_27209 = state_27190;
(statearr_27209[(11)] = inst_27173);

return statearr_27209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27190__$1,(12),dchan);
} else {
if((state_val_27191 === (14))){
var inst_27175 = (state_27190[(8)]);
var inst_27181 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_27175);
var state_27190__$1 = state_27190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27190__$1,(16),out,inst_27181);
} else {
if((state_val_27191 === (16))){
var inst_27183 = (state_27190[(2)]);
var state_27190__$1 = (function (){var statearr_27211 = state_27190;
(statearr_27211[(12)] = inst_27183);

return statearr_27211;
})();
var statearr_27212_27239 = state_27190__$1;
(statearr_27212_27239[(2)] = null);

(statearr_27212_27239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (10))){
var inst_27157 = (state_27190[(2)]);
var inst_27158 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_27190__$1 = (function (){var statearr_27213 = state_27190;
(statearr_27213[(13)] = inst_27157);

return statearr_27213;
})();
var statearr_27214_27240 = state_27190__$1;
(statearr_27214_27240[(2)] = inst_27158);


cljs.core.async.impl.ioc_helpers.process_exception(state_27190__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27191 === (8))){
var inst_27171 = (state_27190[(2)]);
var state_27190__$1 = state_27190;
var statearr_27215_27241 = state_27190__$1;
(statearr_27215_27241[(2)] = inst_27171);

(statearr_27215_27241[(1)] = (5));


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
});})(c__25472__auto___27225,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25250__auto__,c__25472__auto___27225,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25251__auto__ = null;
var cljs$core$async$state_machine__25251__auto____0 = (function (){
var statearr_27218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27218[(0)] = cljs$core$async$state_machine__25251__auto__);

(statearr_27218[(1)] = (1));

return statearr_27218;
});
var cljs$core$async$state_machine__25251__auto____1 = (function (state_27190){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_27190);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e27219){if((e27219 instanceof Object)){
var ex__25254__auto__ = e27219;
var statearr_27220_27242 = state_27190;
(statearr_27220_27242[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27243 = state_27190;
state_27190 = G__27243;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$state_machine__25251__auto__ = function(state_27190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25251__auto____1.call(this,state_27190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25251__auto____0;
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25251__auto____1;
return cljs$core$async$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___27225,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25474__auto__ = (function (){var statearr_27221 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_27221[(6)] = c__25472__auto___27225);

return statearr_27221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___27225,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27246 = arguments.length;
switch (G__27246) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25472__auto___27300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___27300,out){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___27300,out){
return (function (state_27278){
var state_val_27279 = (state_27278[(1)]);
if((state_val_27279 === (7))){
var inst_27257 = (state_27278[(7)]);
var inst_27258 = (state_27278[(8)]);
var inst_27257__$1 = (state_27278[(2)]);
var inst_27258__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27257__$1,(0),null);
var inst_27259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27257__$1,(1),null);
var inst_27260 = (inst_27258__$1 == null);
var state_27278__$1 = (function (){var statearr_27280 = state_27278;
(statearr_27280[(9)] = inst_27259);

(statearr_27280[(7)] = inst_27257__$1);

(statearr_27280[(8)] = inst_27258__$1);

return statearr_27280;
})();
if(cljs.core.truth_(inst_27260)){
var statearr_27281_27301 = state_27278__$1;
(statearr_27281_27301[(1)] = (8));

} else {
var statearr_27282_27302 = state_27278__$1;
(statearr_27282_27302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (1))){
var inst_27247 = cljs.core.vec(chs);
var inst_27248 = inst_27247;
var state_27278__$1 = (function (){var statearr_27283 = state_27278;
(statearr_27283[(10)] = inst_27248);

return statearr_27283;
})();
var statearr_27284_27303 = state_27278__$1;
(statearr_27284_27303[(2)] = null);

(statearr_27284_27303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (4))){
var inst_27248 = (state_27278[(10)]);
var state_27278__$1 = state_27278;
return cljs.core.async.ioc_alts_BANG_(state_27278__$1,(7),inst_27248);
} else {
if((state_val_27279 === (6))){
var inst_27274 = (state_27278[(2)]);
var state_27278__$1 = state_27278;
var statearr_27285_27304 = state_27278__$1;
(statearr_27285_27304[(2)] = inst_27274);

(statearr_27285_27304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (3))){
var inst_27276 = (state_27278[(2)]);
var state_27278__$1 = state_27278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27278__$1,inst_27276);
} else {
if((state_val_27279 === (2))){
var inst_27248 = (state_27278[(10)]);
var inst_27250 = cljs.core.count(inst_27248);
var inst_27251 = (inst_27250 > (0));
var state_27278__$1 = state_27278;
if(cljs.core.truth_(inst_27251)){
var statearr_27287_27305 = state_27278__$1;
(statearr_27287_27305[(1)] = (4));

} else {
var statearr_27288_27306 = state_27278__$1;
(statearr_27288_27306[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (11))){
var inst_27248 = (state_27278[(10)]);
var inst_27267 = (state_27278[(2)]);
var tmp27286 = inst_27248;
var inst_27248__$1 = tmp27286;
var state_27278__$1 = (function (){var statearr_27289 = state_27278;
(statearr_27289[(10)] = inst_27248__$1);

(statearr_27289[(11)] = inst_27267);

return statearr_27289;
})();
var statearr_27290_27307 = state_27278__$1;
(statearr_27290_27307[(2)] = null);

(statearr_27290_27307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (9))){
var inst_27258 = (state_27278[(8)]);
var state_27278__$1 = state_27278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27278__$1,(11),out,inst_27258);
} else {
if((state_val_27279 === (5))){
var inst_27272 = cljs.core.async.close_BANG_(out);
var state_27278__$1 = state_27278;
var statearr_27291_27308 = state_27278__$1;
(statearr_27291_27308[(2)] = inst_27272);

(statearr_27291_27308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (10))){
var inst_27270 = (state_27278[(2)]);
var state_27278__$1 = state_27278;
var statearr_27292_27309 = state_27278__$1;
(statearr_27292_27309[(2)] = inst_27270);

(statearr_27292_27309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27279 === (8))){
var inst_27259 = (state_27278[(9)]);
var inst_27257 = (state_27278[(7)]);
var inst_27258 = (state_27278[(8)]);
var inst_27248 = (state_27278[(10)]);
var inst_27262 = (function (){var cs = inst_27248;
var vec__27253 = inst_27257;
var v = inst_27258;
var c = inst_27259;
return ((function (cs,vec__27253,v,c,inst_27259,inst_27257,inst_27258,inst_27248,state_val_27279,c__25472__auto___27300,out){
return (function (p1__27244_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__27244_SHARP_);
});
;})(cs,vec__27253,v,c,inst_27259,inst_27257,inst_27258,inst_27248,state_val_27279,c__25472__auto___27300,out))
})();
var inst_27263 = cljs.core.filterv(inst_27262,inst_27248);
var inst_27248__$1 = inst_27263;
var state_27278__$1 = (function (){var statearr_27293 = state_27278;
(statearr_27293[(10)] = inst_27248__$1);

return statearr_27293;
})();
var statearr_27294_27310 = state_27278__$1;
(statearr_27294_27310[(2)] = null);

(statearr_27294_27310[(1)] = (2));


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
});})(c__25472__auto___27300,out))
;
return ((function (switch__25250__auto__,c__25472__auto___27300,out){
return (function() {
var cljs$core$async$state_machine__25251__auto__ = null;
var cljs$core$async$state_machine__25251__auto____0 = (function (){
var statearr_27295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27295[(0)] = cljs$core$async$state_machine__25251__auto__);

(statearr_27295[(1)] = (1));

return statearr_27295;
});
var cljs$core$async$state_machine__25251__auto____1 = (function (state_27278){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_27278);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e27296){if((e27296 instanceof Object)){
var ex__25254__auto__ = e27296;
var statearr_27297_27311 = state_27278;
(statearr_27297_27311[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27312 = state_27278;
state_27278 = G__27312;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$state_machine__25251__auto__ = function(state_27278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25251__auto____1.call(this,state_27278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25251__auto____0;
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25251__auto____1;
return cljs$core$async$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___27300,out))
})();
var state__25474__auto__ = (function (){var statearr_27298 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_27298[(6)] = c__25472__auto___27300);

return statearr_27298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___27300,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27314 = arguments.length;
switch (G__27314) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25472__auto___27359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___27359,out){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___27359,out){
return (function (state_27338){
var state_val_27339 = (state_27338[(1)]);
if((state_val_27339 === (7))){
var inst_27320 = (state_27338[(7)]);
var inst_27320__$1 = (state_27338[(2)]);
var inst_27321 = (inst_27320__$1 == null);
var inst_27322 = cljs.core.not(inst_27321);
var state_27338__$1 = (function (){var statearr_27340 = state_27338;
(statearr_27340[(7)] = inst_27320__$1);

return statearr_27340;
})();
if(inst_27322){
var statearr_27341_27360 = state_27338__$1;
(statearr_27341_27360[(1)] = (8));

} else {
var statearr_27342_27361 = state_27338__$1;
(statearr_27342_27361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (1))){
var inst_27315 = (0);
var state_27338__$1 = (function (){var statearr_27343 = state_27338;
(statearr_27343[(8)] = inst_27315);

return statearr_27343;
})();
var statearr_27344_27362 = state_27338__$1;
(statearr_27344_27362[(2)] = null);

(statearr_27344_27362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (4))){
var state_27338__$1 = state_27338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27338__$1,(7),ch);
} else {
if((state_val_27339 === (6))){
var inst_27333 = (state_27338[(2)]);
var state_27338__$1 = state_27338;
var statearr_27345_27363 = state_27338__$1;
(statearr_27345_27363[(2)] = inst_27333);

(statearr_27345_27363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (3))){
var inst_27335 = (state_27338[(2)]);
var inst_27336 = cljs.core.async.close_BANG_(out);
var state_27338__$1 = (function (){var statearr_27346 = state_27338;
(statearr_27346[(9)] = inst_27335);

return statearr_27346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27338__$1,inst_27336);
} else {
if((state_val_27339 === (2))){
var inst_27315 = (state_27338[(8)]);
var inst_27317 = (inst_27315 < n);
var state_27338__$1 = state_27338;
if(cljs.core.truth_(inst_27317)){
var statearr_27347_27364 = state_27338__$1;
(statearr_27347_27364[(1)] = (4));

} else {
var statearr_27348_27365 = state_27338__$1;
(statearr_27348_27365[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (11))){
var inst_27315 = (state_27338[(8)]);
var inst_27325 = (state_27338[(2)]);
var inst_27326 = (inst_27315 + (1));
var inst_27315__$1 = inst_27326;
var state_27338__$1 = (function (){var statearr_27349 = state_27338;
(statearr_27349[(10)] = inst_27325);

(statearr_27349[(8)] = inst_27315__$1);

return statearr_27349;
})();
var statearr_27350_27366 = state_27338__$1;
(statearr_27350_27366[(2)] = null);

(statearr_27350_27366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (9))){
var state_27338__$1 = state_27338;
var statearr_27351_27367 = state_27338__$1;
(statearr_27351_27367[(2)] = null);

(statearr_27351_27367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (5))){
var state_27338__$1 = state_27338;
var statearr_27352_27368 = state_27338__$1;
(statearr_27352_27368[(2)] = null);

(statearr_27352_27368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (10))){
var inst_27330 = (state_27338[(2)]);
var state_27338__$1 = state_27338;
var statearr_27353_27369 = state_27338__$1;
(statearr_27353_27369[(2)] = inst_27330);

(statearr_27353_27369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27339 === (8))){
var inst_27320 = (state_27338[(7)]);
var state_27338__$1 = state_27338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27338__$1,(11),out,inst_27320);
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
});})(c__25472__auto___27359,out))
;
return ((function (switch__25250__auto__,c__25472__auto___27359,out){
return (function() {
var cljs$core$async$state_machine__25251__auto__ = null;
var cljs$core$async$state_machine__25251__auto____0 = (function (){
var statearr_27354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27354[(0)] = cljs$core$async$state_machine__25251__auto__);

(statearr_27354[(1)] = (1));

return statearr_27354;
});
var cljs$core$async$state_machine__25251__auto____1 = (function (state_27338){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_27338);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e27355){if((e27355 instanceof Object)){
var ex__25254__auto__ = e27355;
var statearr_27356_27370 = state_27338;
(statearr_27356_27370[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27371 = state_27338;
state_27338 = G__27371;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$state_machine__25251__auto__ = function(state_27338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25251__auto____1.call(this,state_27338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25251__auto____0;
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25251__auto____1;
return cljs$core$async$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___27359,out))
})();
var state__25474__auto__ = (function (){var statearr_27357 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_27357[(6)] = c__25472__auto___27359);

return statearr_27357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___27359,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27373 = (function (f,ch,meta27374){
this.f = f;
this.ch = ch;
this.meta27374 = meta27374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27375,meta27374__$1){
var self__ = this;
var _27375__$1 = this;
return (new cljs.core.async.t_cljs$core$async27373(self__.f,self__.ch,meta27374__$1));
});

cljs.core.async.t_cljs$core$async27373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27375){
var self__ = this;
var _27375__$1 = this;
return self__.meta27374;
});

cljs.core.async.t_cljs$core$async27373.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27373.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async27373.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27376 = (function (f,ch,meta27374,_,fn1,meta27377){
this.f = f;
this.ch = ch;
this.meta27374 = meta27374;
this._ = _;
this.fn1 = fn1;
this.meta27377 = meta27377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27378,meta27377__$1){
var self__ = this;
var _27378__$1 = this;
return (new cljs.core.async.t_cljs$core$async27376(self__.f,self__.ch,self__.meta27374,self__._,self__.fn1,meta27377__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27378){
var self__ = this;
var _27378__$1 = this;
return self__.meta27377;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27376.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27372_SHARP_){
var G__27379 = (((p1__27372_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__27372_SHARP_) : self__.f.call(null,p1__27372_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__27379) : f1.call(null,G__27379));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27376.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27374","meta27374",-458851111,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27373","cljs.core.async/t_cljs$core$async27373",658004417,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27377","meta27377",-1813450014,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27376";

cljs.core.async.t_cljs$core$async27376.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27376");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27376.
 */
cljs.core.async.__GT_t_cljs$core$async27376 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27376(f__$1,ch__$1,meta27374__$1,___$2,fn1__$1,meta27377){
return (new cljs.core.async.t_cljs$core$async27376(f__$1,ch__$1,meta27374__$1,___$2,fn1__$1,meta27377));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27376(self__.f,self__.ch,self__.meta27374,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__27380 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27380) : self__.f.call(null,G__27380));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27373.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27374","meta27374",-458851111,null)], null);
});

cljs.core.async.t_cljs$core$async27373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27373";

cljs.core.async.t_cljs$core$async27373.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27373");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27373.
 */
cljs.core.async.__GT_t_cljs$core$async27373 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27373(f__$1,ch__$1,meta27374){
return (new cljs.core.async.t_cljs$core$async27373(f__$1,ch__$1,meta27374));
});

}

return (new cljs.core.async.t_cljs$core$async27373(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27381 = (function (f,ch,meta27382){
this.f = f;
this.ch = ch;
this.meta27382 = meta27382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27383,meta27382__$1){
var self__ = this;
var _27383__$1 = this;
return (new cljs.core.async.t_cljs$core$async27381(self__.f,self__.ch,meta27382__$1));
});

cljs.core.async.t_cljs$core$async27381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27383){
var self__ = this;
var _27383__$1 = this;
return self__.meta27382;
});

cljs.core.async.t_cljs$core$async27381.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27381.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27381.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async27381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27382","meta27382",-1301009868,null)], null);
});

cljs.core.async.t_cljs$core$async27381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27381";

cljs.core.async.t_cljs$core$async27381.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27381");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27381.
 */
cljs.core.async.__GT_t_cljs$core$async27381 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27381(f__$1,ch__$1,meta27382){
return (new cljs.core.async.t_cljs$core$async27381(f__$1,ch__$1,meta27382));
});

}

return (new cljs.core.async.t_cljs$core$async27381(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27384 = (function (p,ch,meta27385){
this.p = p;
this.ch = ch;
this.meta27385 = meta27385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27386,meta27385__$1){
var self__ = this;
var _27386__$1 = this;
return (new cljs.core.async.t_cljs$core$async27384(self__.p,self__.ch,meta27385__$1));
});

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27386){
var self__ = this;
var _27386__$1 = this;
return self__.meta27385;
});

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27385","meta27385",66877668,null)], null);
});

cljs.core.async.t_cljs$core$async27384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27384";

cljs.core.async.t_cljs$core$async27384.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27384");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27384.
 */
cljs.core.async.__GT_t_cljs$core$async27384 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27384(p__$1,ch__$1,meta27385){
return (new cljs.core.async.t_cljs$core$async27384(p__$1,ch__$1,meta27385));
});

}

return (new cljs.core.async.t_cljs$core$async27384(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27388 = arguments.length;
switch (G__27388) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25472__auto___27428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___27428,out){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___27428,out){
return (function (state_27409){
var state_val_27410 = (state_27409[(1)]);
if((state_val_27410 === (7))){
var inst_27405 = (state_27409[(2)]);
var state_27409__$1 = state_27409;
var statearr_27411_27429 = state_27409__$1;
(statearr_27411_27429[(2)] = inst_27405);

(statearr_27411_27429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (1))){
var state_27409__$1 = state_27409;
var statearr_27412_27430 = state_27409__$1;
(statearr_27412_27430[(2)] = null);

(statearr_27412_27430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (4))){
var inst_27391 = (state_27409[(7)]);
var inst_27391__$1 = (state_27409[(2)]);
var inst_27392 = (inst_27391__$1 == null);
var state_27409__$1 = (function (){var statearr_27413 = state_27409;
(statearr_27413[(7)] = inst_27391__$1);

return statearr_27413;
})();
if(cljs.core.truth_(inst_27392)){
var statearr_27414_27431 = state_27409__$1;
(statearr_27414_27431[(1)] = (5));

} else {
var statearr_27415_27432 = state_27409__$1;
(statearr_27415_27432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (6))){
var inst_27391 = (state_27409[(7)]);
var inst_27396 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27391) : p.call(null,inst_27391));
var state_27409__$1 = state_27409;
if(cljs.core.truth_(inst_27396)){
var statearr_27416_27433 = state_27409__$1;
(statearr_27416_27433[(1)] = (8));

} else {
var statearr_27417_27434 = state_27409__$1;
(statearr_27417_27434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (3))){
var inst_27407 = (state_27409[(2)]);
var state_27409__$1 = state_27409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27409__$1,inst_27407);
} else {
if((state_val_27410 === (2))){
var state_27409__$1 = state_27409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27409__$1,(4),ch);
} else {
if((state_val_27410 === (11))){
var inst_27399 = (state_27409[(2)]);
var state_27409__$1 = state_27409;
var statearr_27418_27435 = state_27409__$1;
(statearr_27418_27435[(2)] = inst_27399);

(statearr_27418_27435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (9))){
var state_27409__$1 = state_27409;
var statearr_27419_27436 = state_27409__$1;
(statearr_27419_27436[(2)] = null);

(statearr_27419_27436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (5))){
var inst_27394 = cljs.core.async.close_BANG_(out);
var state_27409__$1 = state_27409;
var statearr_27420_27437 = state_27409__$1;
(statearr_27420_27437[(2)] = inst_27394);

(statearr_27420_27437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (10))){
var inst_27402 = (state_27409[(2)]);
var state_27409__$1 = (function (){var statearr_27421 = state_27409;
(statearr_27421[(8)] = inst_27402);

return statearr_27421;
})();
var statearr_27422_27438 = state_27409__$1;
(statearr_27422_27438[(2)] = null);

(statearr_27422_27438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (8))){
var inst_27391 = (state_27409[(7)]);
var state_27409__$1 = state_27409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27409__$1,(11),out,inst_27391);
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
});})(c__25472__auto___27428,out))
;
return ((function (switch__25250__auto__,c__25472__auto___27428,out){
return (function() {
var cljs$core$async$state_machine__25251__auto__ = null;
var cljs$core$async$state_machine__25251__auto____0 = (function (){
var statearr_27423 = [null,null,null,null,null,null,null,null,null];
(statearr_27423[(0)] = cljs$core$async$state_machine__25251__auto__);

(statearr_27423[(1)] = (1));

return statearr_27423;
});
var cljs$core$async$state_machine__25251__auto____1 = (function (state_27409){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_27409);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e27424){if((e27424 instanceof Object)){
var ex__25254__auto__ = e27424;
var statearr_27425_27439 = state_27409;
(statearr_27425_27439[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27440 = state_27409;
state_27409 = G__27440;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$state_machine__25251__auto__ = function(state_27409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25251__auto____1.call(this,state_27409);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25251__auto____0;
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25251__auto____1;
return cljs$core$async$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___27428,out))
})();
var state__25474__auto__ = (function (){var statearr_27426 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_27426[(6)] = c__25472__auto___27428);

return statearr_27426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___27428,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27442 = arguments.length;
switch (G__27442) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto__){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto__){
return (function (state_27505){
var state_val_27506 = (state_27505[(1)]);
if((state_val_27506 === (7))){
var inst_27501 = (state_27505[(2)]);
var state_27505__$1 = state_27505;
var statearr_27507_27545 = state_27505__$1;
(statearr_27507_27545[(2)] = inst_27501);

(statearr_27507_27545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (20))){
var inst_27471 = (state_27505[(7)]);
var inst_27482 = (state_27505[(2)]);
var inst_27483 = cljs.core.next(inst_27471);
var inst_27457 = inst_27483;
var inst_27458 = null;
var inst_27459 = (0);
var inst_27460 = (0);
var state_27505__$1 = (function (){var statearr_27508 = state_27505;
(statearr_27508[(8)] = inst_27457);

(statearr_27508[(9)] = inst_27482);

(statearr_27508[(10)] = inst_27459);

(statearr_27508[(11)] = inst_27458);

(statearr_27508[(12)] = inst_27460);

return statearr_27508;
})();
var statearr_27509_27546 = state_27505__$1;
(statearr_27509_27546[(2)] = null);

(statearr_27509_27546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (1))){
var state_27505__$1 = state_27505;
var statearr_27510_27547 = state_27505__$1;
(statearr_27510_27547[(2)] = null);

(statearr_27510_27547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (4))){
var inst_27446 = (state_27505[(13)]);
var inst_27446__$1 = (state_27505[(2)]);
var inst_27447 = (inst_27446__$1 == null);
var state_27505__$1 = (function (){var statearr_27511 = state_27505;
(statearr_27511[(13)] = inst_27446__$1);

return statearr_27511;
})();
if(cljs.core.truth_(inst_27447)){
var statearr_27512_27548 = state_27505__$1;
(statearr_27512_27548[(1)] = (5));

} else {
var statearr_27513_27549 = state_27505__$1;
(statearr_27513_27549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (15))){
var state_27505__$1 = state_27505;
var statearr_27517_27550 = state_27505__$1;
(statearr_27517_27550[(2)] = null);

(statearr_27517_27550[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (21))){
var state_27505__$1 = state_27505;
var statearr_27518_27551 = state_27505__$1;
(statearr_27518_27551[(2)] = null);

(statearr_27518_27551[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (13))){
var inst_27457 = (state_27505[(8)]);
var inst_27459 = (state_27505[(10)]);
var inst_27458 = (state_27505[(11)]);
var inst_27460 = (state_27505[(12)]);
var inst_27467 = (state_27505[(2)]);
var inst_27468 = (inst_27460 + (1));
var tmp27514 = inst_27457;
var tmp27515 = inst_27459;
var tmp27516 = inst_27458;
var inst_27457__$1 = tmp27514;
var inst_27458__$1 = tmp27516;
var inst_27459__$1 = tmp27515;
var inst_27460__$1 = inst_27468;
var state_27505__$1 = (function (){var statearr_27519 = state_27505;
(statearr_27519[(8)] = inst_27457__$1);

(statearr_27519[(10)] = inst_27459__$1);

(statearr_27519[(14)] = inst_27467);

(statearr_27519[(11)] = inst_27458__$1);

(statearr_27519[(12)] = inst_27460__$1);

return statearr_27519;
})();
var statearr_27520_27552 = state_27505__$1;
(statearr_27520_27552[(2)] = null);

(statearr_27520_27552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (22))){
var state_27505__$1 = state_27505;
var statearr_27521_27553 = state_27505__$1;
(statearr_27521_27553[(2)] = null);

(statearr_27521_27553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (6))){
var inst_27446 = (state_27505[(13)]);
var inst_27455 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_27446) : f.call(null,inst_27446));
var inst_27456 = cljs.core.seq(inst_27455);
var inst_27457 = inst_27456;
var inst_27458 = null;
var inst_27459 = (0);
var inst_27460 = (0);
var state_27505__$1 = (function (){var statearr_27522 = state_27505;
(statearr_27522[(8)] = inst_27457);

(statearr_27522[(10)] = inst_27459);

(statearr_27522[(11)] = inst_27458);

(statearr_27522[(12)] = inst_27460);

return statearr_27522;
})();
var statearr_27523_27554 = state_27505__$1;
(statearr_27523_27554[(2)] = null);

(statearr_27523_27554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (17))){
var inst_27471 = (state_27505[(7)]);
var inst_27475 = cljs.core.chunk_first(inst_27471);
var inst_27476 = cljs.core.chunk_rest(inst_27471);
var inst_27477 = cljs.core.count(inst_27475);
var inst_27457 = inst_27476;
var inst_27458 = inst_27475;
var inst_27459 = inst_27477;
var inst_27460 = (0);
var state_27505__$1 = (function (){var statearr_27524 = state_27505;
(statearr_27524[(8)] = inst_27457);

(statearr_27524[(10)] = inst_27459);

(statearr_27524[(11)] = inst_27458);

(statearr_27524[(12)] = inst_27460);

return statearr_27524;
})();
var statearr_27525_27555 = state_27505__$1;
(statearr_27525_27555[(2)] = null);

(statearr_27525_27555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (3))){
var inst_27503 = (state_27505[(2)]);
var state_27505__$1 = state_27505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27505__$1,inst_27503);
} else {
if((state_val_27506 === (12))){
var inst_27491 = (state_27505[(2)]);
var state_27505__$1 = state_27505;
var statearr_27526_27556 = state_27505__$1;
(statearr_27526_27556[(2)] = inst_27491);

(statearr_27526_27556[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (2))){
var state_27505__$1 = state_27505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27505__$1,(4),in$);
} else {
if((state_val_27506 === (23))){
var inst_27499 = (state_27505[(2)]);
var state_27505__$1 = state_27505;
var statearr_27527_27557 = state_27505__$1;
(statearr_27527_27557[(2)] = inst_27499);

(statearr_27527_27557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (19))){
var inst_27486 = (state_27505[(2)]);
var state_27505__$1 = state_27505;
var statearr_27528_27558 = state_27505__$1;
(statearr_27528_27558[(2)] = inst_27486);

(statearr_27528_27558[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (11))){
var inst_27457 = (state_27505[(8)]);
var inst_27471 = (state_27505[(7)]);
var inst_27471__$1 = cljs.core.seq(inst_27457);
var state_27505__$1 = (function (){var statearr_27529 = state_27505;
(statearr_27529[(7)] = inst_27471__$1);

return statearr_27529;
})();
if(inst_27471__$1){
var statearr_27530_27559 = state_27505__$1;
(statearr_27530_27559[(1)] = (14));

} else {
var statearr_27531_27560 = state_27505__$1;
(statearr_27531_27560[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (9))){
var inst_27493 = (state_27505[(2)]);
var inst_27494 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_27505__$1 = (function (){var statearr_27532 = state_27505;
(statearr_27532[(15)] = inst_27493);

return statearr_27532;
})();
if(cljs.core.truth_(inst_27494)){
var statearr_27533_27561 = state_27505__$1;
(statearr_27533_27561[(1)] = (21));

} else {
var statearr_27534_27562 = state_27505__$1;
(statearr_27534_27562[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (5))){
var inst_27449 = cljs.core.async.close_BANG_(out);
var state_27505__$1 = state_27505;
var statearr_27535_27563 = state_27505__$1;
(statearr_27535_27563[(2)] = inst_27449);

(statearr_27535_27563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (14))){
var inst_27471 = (state_27505[(7)]);
var inst_27473 = cljs.core.chunked_seq_QMARK_(inst_27471);
var state_27505__$1 = state_27505;
if(inst_27473){
var statearr_27536_27564 = state_27505__$1;
(statearr_27536_27564[(1)] = (17));

} else {
var statearr_27537_27565 = state_27505__$1;
(statearr_27537_27565[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (16))){
var inst_27489 = (state_27505[(2)]);
var state_27505__$1 = state_27505;
var statearr_27538_27566 = state_27505__$1;
(statearr_27538_27566[(2)] = inst_27489);

(statearr_27538_27566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27506 === (10))){
var inst_27458 = (state_27505[(11)]);
var inst_27460 = (state_27505[(12)]);
var inst_27465 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27458,inst_27460);
var state_27505__$1 = state_27505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27505__$1,(13),out,inst_27465);
} else {
if((state_val_27506 === (18))){
var inst_27471 = (state_27505[(7)]);
var inst_27480 = cljs.core.first(inst_27471);
var state_27505__$1 = state_27505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27505__$1,(20),out,inst_27480);
} else {
if((state_val_27506 === (8))){
var inst_27459 = (state_27505[(10)]);
var inst_27460 = (state_27505[(12)]);
var inst_27462 = (inst_27460 < inst_27459);
var inst_27463 = inst_27462;
var state_27505__$1 = state_27505;
if(cljs.core.truth_(inst_27463)){
var statearr_27539_27567 = state_27505__$1;
(statearr_27539_27567[(1)] = (10));

} else {
var statearr_27540_27568 = state_27505__$1;
(statearr_27540_27568[(1)] = (11));

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
}
}
}
}
}
}
});})(c__25472__auto__))
;
return ((function (switch__25250__auto__,c__25472__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25251__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25251__auto____0 = (function (){
var statearr_27541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27541[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25251__auto__);

(statearr_27541[(1)] = (1));

return statearr_27541;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25251__auto____1 = (function (state_27505){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_27505);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e27542){if((e27542 instanceof Object)){
var ex__25254__auto__ = e27542;
var statearr_27543_27569 = state_27505;
(statearr_27543_27569[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27542;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27570 = state_27505;
state_27505 = G__27570;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25251__auto__ = function(state_27505){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25251__auto____1.call(this,state_27505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25251__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25251__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto__))
})();
var state__25474__auto__ = (function (){var statearr_27544 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_27544[(6)] = c__25472__auto__);

return statearr_27544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto__))
);

return c__25472__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27572 = arguments.length;
switch (G__27572) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27575 = arguments.length;
switch (G__27575) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27578 = arguments.length;
switch (G__27578) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25472__auto___27625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___27625,out){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___27625,out){
return (function (state_27602){
var state_val_27603 = (state_27602[(1)]);
if((state_val_27603 === (7))){
var inst_27597 = (state_27602[(2)]);
var state_27602__$1 = state_27602;
var statearr_27604_27626 = state_27602__$1;
(statearr_27604_27626[(2)] = inst_27597);

(statearr_27604_27626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (1))){
var inst_27579 = null;
var state_27602__$1 = (function (){var statearr_27605 = state_27602;
(statearr_27605[(7)] = inst_27579);

return statearr_27605;
})();
var statearr_27606_27627 = state_27602__$1;
(statearr_27606_27627[(2)] = null);

(statearr_27606_27627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (4))){
var inst_27582 = (state_27602[(8)]);
var inst_27582__$1 = (state_27602[(2)]);
var inst_27583 = (inst_27582__$1 == null);
var inst_27584 = cljs.core.not(inst_27583);
var state_27602__$1 = (function (){var statearr_27607 = state_27602;
(statearr_27607[(8)] = inst_27582__$1);

return statearr_27607;
})();
if(inst_27584){
var statearr_27608_27628 = state_27602__$1;
(statearr_27608_27628[(1)] = (5));

} else {
var statearr_27609_27629 = state_27602__$1;
(statearr_27609_27629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (6))){
var state_27602__$1 = state_27602;
var statearr_27610_27630 = state_27602__$1;
(statearr_27610_27630[(2)] = null);

(statearr_27610_27630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (3))){
var inst_27599 = (state_27602[(2)]);
var inst_27600 = cljs.core.async.close_BANG_(out);
var state_27602__$1 = (function (){var statearr_27611 = state_27602;
(statearr_27611[(9)] = inst_27599);

return statearr_27611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27602__$1,inst_27600);
} else {
if((state_val_27603 === (2))){
var state_27602__$1 = state_27602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27602__$1,(4),ch);
} else {
if((state_val_27603 === (11))){
var inst_27582 = (state_27602[(8)]);
var inst_27591 = (state_27602[(2)]);
var inst_27579 = inst_27582;
var state_27602__$1 = (function (){var statearr_27612 = state_27602;
(statearr_27612[(7)] = inst_27579);

(statearr_27612[(10)] = inst_27591);

return statearr_27612;
})();
var statearr_27613_27631 = state_27602__$1;
(statearr_27613_27631[(2)] = null);

(statearr_27613_27631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (9))){
var inst_27582 = (state_27602[(8)]);
var state_27602__$1 = state_27602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27602__$1,(11),out,inst_27582);
} else {
if((state_val_27603 === (5))){
var inst_27579 = (state_27602[(7)]);
var inst_27582 = (state_27602[(8)]);
var inst_27586 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27582,inst_27579);
var state_27602__$1 = state_27602;
if(inst_27586){
var statearr_27615_27632 = state_27602__$1;
(statearr_27615_27632[(1)] = (8));

} else {
var statearr_27616_27633 = state_27602__$1;
(statearr_27616_27633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (10))){
var inst_27594 = (state_27602[(2)]);
var state_27602__$1 = state_27602;
var statearr_27617_27634 = state_27602__$1;
(statearr_27617_27634[(2)] = inst_27594);

(statearr_27617_27634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27603 === (8))){
var inst_27579 = (state_27602[(7)]);
var tmp27614 = inst_27579;
var inst_27579__$1 = tmp27614;
var state_27602__$1 = (function (){var statearr_27618 = state_27602;
(statearr_27618[(7)] = inst_27579__$1);

return statearr_27618;
})();
var statearr_27619_27635 = state_27602__$1;
(statearr_27619_27635[(2)] = null);

(statearr_27619_27635[(1)] = (2));


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
});})(c__25472__auto___27625,out))
;
return ((function (switch__25250__auto__,c__25472__auto___27625,out){
return (function() {
var cljs$core$async$state_machine__25251__auto__ = null;
var cljs$core$async$state_machine__25251__auto____0 = (function (){
var statearr_27620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27620[(0)] = cljs$core$async$state_machine__25251__auto__);

(statearr_27620[(1)] = (1));

return statearr_27620;
});
var cljs$core$async$state_machine__25251__auto____1 = (function (state_27602){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_27602);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e27621){if((e27621 instanceof Object)){
var ex__25254__auto__ = e27621;
var statearr_27622_27636 = state_27602;
(statearr_27622_27636[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27637 = state_27602;
state_27602 = G__27637;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$state_machine__25251__auto__ = function(state_27602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25251__auto____1.call(this,state_27602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25251__auto____0;
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25251__auto____1;
return cljs$core$async$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___27625,out))
})();
var state__25474__auto__ = (function (){var statearr_27623 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_27623[(6)] = c__25472__auto___27625);

return statearr_27623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___27625,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27639 = arguments.length;
switch (G__27639) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25472__auto___27705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___27705,out){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___27705,out){
return (function (state_27677){
var state_val_27678 = (state_27677[(1)]);
if((state_val_27678 === (7))){
var inst_27673 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27679_27706 = state_27677__$1;
(statearr_27679_27706[(2)] = inst_27673);

(statearr_27679_27706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (1))){
var inst_27640 = (new Array(n));
var inst_27641 = inst_27640;
var inst_27642 = (0);
var state_27677__$1 = (function (){var statearr_27680 = state_27677;
(statearr_27680[(7)] = inst_27642);

(statearr_27680[(8)] = inst_27641);

return statearr_27680;
})();
var statearr_27681_27707 = state_27677__$1;
(statearr_27681_27707[(2)] = null);

(statearr_27681_27707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (4))){
var inst_27645 = (state_27677[(9)]);
var inst_27645__$1 = (state_27677[(2)]);
var inst_27646 = (inst_27645__$1 == null);
var inst_27647 = cljs.core.not(inst_27646);
var state_27677__$1 = (function (){var statearr_27682 = state_27677;
(statearr_27682[(9)] = inst_27645__$1);

return statearr_27682;
})();
if(inst_27647){
var statearr_27683_27708 = state_27677__$1;
(statearr_27683_27708[(1)] = (5));

} else {
var statearr_27684_27709 = state_27677__$1;
(statearr_27684_27709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (15))){
var inst_27667 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27685_27710 = state_27677__$1;
(statearr_27685_27710[(2)] = inst_27667);

(statearr_27685_27710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (13))){
var state_27677__$1 = state_27677;
var statearr_27686_27711 = state_27677__$1;
(statearr_27686_27711[(2)] = null);

(statearr_27686_27711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (6))){
var inst_27642 = (state_27677[(7)]);
var inst_27663 = (inst_27642 > (0));
var state_27677__$1 = state_27677;
if(cljs.core.truth_(inst_27663)){
var statearr_27687_27712 = state_27677__$1;
(statearr_27687_27712[(1)] = (12));

} else {
var statearr_27688_27713 = state_27677__$1;
(statearr_27688_27713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (3))){
var inst_27675 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27677__$1,inst_27675);
} else {
if((state_val_27678 === (12))){
var inst_27641 = (state_27677[(8)]);
var inst_27665 = cljs.core.vec(inst_27641);
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27677__$1,(15),out,inst_27665);
} else {
if((state_val_27678 === (2))){
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27677__$1,(4),ch);
} else {
if((state_val_27678 === (11))){
var inst_27657 = (state_27677[(2)]);
var inst_27658 = (new Array(n));
var inst_27641 = inst_27658;
var inst_27642 = (0);
var state_27677__$1 = (function (){var statearr_27689 = state_27677;
(statearr_27689[(7)] = inst_27642);

(statearr_27689[(10)] = inst_27657);

(statearr_27689[(8)] = inst_27641);

return statearr_27689;
})();
var statearr_27690_27714 = state_27677__$1;
(statearr_27690_27714[(2)] = null);

(statearr_27690_27714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (9))){
var inst_27641 = (state_27677[(8)]);
var inst_27655 = cljs.core.vec(inst_27641);
var state_27677__$1 = state_27677;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27677__$1,(11),out,inst_27655);
} else {
if((state_val_27678 === (5))){
var inst_27642 = (state_27677[(7)]);
var inst_27650 = (state_27677[(11)]);
var inst_27641 = (state_27677[(8)]);
var inst_27645 = (state_27677[(9)]);
var inst_27649 = (inst_27641[inst_27642] = inst_27645);
var inst_27650__$1 = (inst_27642 + (1));
var inst_27651 = (inst_27650__$1 < n);
var state_27677__$1 = (function (){var statearr_27691 = state_27677;
(statearr_27691[(12)] = inst_27649);

(statearr_27691[(11)] = inst_27650__$1);

return statearr_27691;
})();
if(cljs.core.truth_(inst_27651)){
var statearr_27692_27715 = state_27677__$1;
(statearr_27692_27715[(1)] = (8));

} else {
var statearr_27693_27716 = state_27677__$1;
(statearr_27693_27716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (14))){
var inst_27670 = (state_27677[(2)]);
var inst_27671 = cljs.core.async.close_BANG_(out);
var state_27677__$1 = (function (){var statearr_27695 = state_27677;
(statearr_27695[(13)] = inst_27670);

return statearr_27695;
})();
var statearr_27696_27717 = state_27677__$1;
(statearr_27696_27717[(2)] = inst_27671);

(statearr_27696_27717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (10))){
var inst_27661 = (state_27677[(2)]);
var state_27677__$1 = state_27677;
var statearr_27697_27718 = state_27677__$1;
(statearr_27697_27718[(2)] = inst_27661);

(statearr_27697_27718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27678 === (8))){
var inst_27650 = (state_27677[(11)]);
var inst_27641 = (state_27677[(8)]);
var tmp27694 = inst_27641;
var inst_27641__$1 = tmp27694;
var inst_27642 = inst_27650;
var state_27677__$1 = (function (){var statearr_27698 = state_27677;
(statearr_27698[(7)] = inst_27642);

(statearr_27698[(8)] = inst_27641__$1);

return statearr_27698;
})();
var statearr_27699_27719 = state_27677__$1;
(statearr_27699_27719[(2)] = null);

(statearr_27699_27719[(1)] = (2));


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
});})(c__25472__auto___27705,out))
;
return ((function (switch__25250__auto__,c__25472__auto___27705,out){
return (function() {
var cljs$core$async$state_machine__25251__auto__ = null;
var cljs$core$async$state_machine__25251__auto____0 = (function (){
var statearr_27700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27700[(0)] = cljs$core$async$state_machine__25251__auto__);

(statearr_27700[(1)] = (1));

return statearr_27700;
});
var cljs$core$async$state_machine__25251__auto____1 = (function (state_27677){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_27677);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e27701){if((e27701 instanceof Object)){
var ex__25254__auto__ = e27701;
var statearr_27702_27720 = state_27677;
(statearr_27702_27720[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27721 = state_27677;
state_27677 = G__27721;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$state_machine__25251__auto__ = function(state_27677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25251__auto____1.call(this,state_27677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25251__auto____0;
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25251__auto____1;
return cljs$core$async$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___27705,out))
})();
var state__25474__auto__ = (function (){var statearr_27703 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_27703[(6)] = c__25472__auto___27705);

return statearr_27703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___27705,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27723 = arguments.length;
switch (G__27723) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25472__auto___27793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25472__auto___27793,out){
return (function (){
var f__25473__auto__ = (function (){var switch__25250__auto__ = ((function (c__25472__auto___27793,out){
return (function (state_27765){
var state_val_27766 = (state_27765[(1)]);
if((state_val_27766 === (7))){
var inst_27761 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27767_27794 = state_27765__$1;
(statearr_27767_27794[(2)] = inst_27761);

(statearr_27767_27794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (1))){
var inst_27724 = [];
var inst_27725 = inst_27724;
var inst_27726 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27765__$1 = (function (){var statearr_27768 = state_27765;
(statearr_27768[(7)] = inst_27726);

(statearr_27768[(8)] = inst_27725);

return statearr_27768;
})();
var statearr_27769_27795 = state_27765__$1;
(statearr_27769_27795[(2)] = null);

(statearr_27769_27795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (4))){
var inst_27729 = (state_27765[(9)]);
var inst_27729__$1 = (state_27765[(2)]);
var inst_27730 = (inst_27729__$1 == null);
var inst_27731 = cljs.core.not(inst_27730);
var state_27765__$1 = (function (){var statearr_27770 = state_27765;
(statearr_27770[(9)] = inst_27729__$1);

return statearr_27770;
})();
if(inst_27731){
var statearr_27771_27796 = state_27765__$1;
(statearr_27771_27796[(1)] = (5));

} else {
var statearr_27772_27797 = state_27765__$1;
(statearr_27772_27797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (15))){
var inst_27755 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27773_27798 = state_27765__$1;
(statearr_27773_27798[(2)] = inst_27755);

(statearr_27773_27798[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (13))){
var state_27765__$1 = state_27765;
var statearr_27774_27799 = state_27765__$1;
(statearr_27774_27799[(2)] = null);

(statearr_27774_27799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (6))){
var inst_27725 = (state_27765[(8)]);
var inst_27750 = inst_27725.length;
var inst_27751 = (inst_27750 > (0));
var state_27765__$1 = state_27765;
if(cljs.core.truth_(inst_27751)){
var statearr_27775_27800 = state_27765__$1;
(statearr_27775_27800[(1)] = (12));

} else {
var statearr_27776_27801 = state_27765__$1;
(statearr_27776_27801[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (3))){
var inst_27763 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27765__$1,inst_27763);
} else {
if((state_val_27766 === (12))){
var inst_27725 = (state_27765[(8)]);
var inst_27753 = cljs.core.vec(inst_27725);
var state_27765__$1 = state_27765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27765__$1,(15),out,inst_27753);
} else {
if((state_val_27766 === (2))){
var state_27765__$1 = state_27765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27765__$1,(4),ch);
} else {
if((state_val_27766 === (11))){
var inst_27733 = (state_27765[(10)]);
var inst_27729 = (state_27765[(9)]);
var inst_27743 = (state_27765[(2)]);
var inst_27744 = [];
var inst_27745 = inst_27744.push(inst_27729);
var inst_27725 = inst_27744;
var inst_27726 = inst_27733;
var state_27765__$1 = (function (){var statearr_27777 = state_27765;
(statearr_27777[(11)] = inst_27745);

(statearr_27777[(7)] = inst_27726);

(statearr_27777[(8)] = inst_27725);

(statearr_27777[(12)] = inst_27743);

return statearr_27777;
})();
var statearr_27778_27802 = state_27765__$1;
(statearr_27778_27802[(2)] = null);

(statearr_27778_27802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (9))){
var inst_27725 = (state_27765[(8)]);
var inst_27741 = cljs.core.vec(inst_27725);
var state_27765__$1 = state_27765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27765__$1,(11),out,inst_27741);
} else {
if((state_val_27766 === (5))){
var inst_27733 = (state_27765[(10)]);
var inst_27726 = (state_27765[(7)]);
var inst_27729 = (state_27765[(9)]);
var inst_27733__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_27729) : f.call(null,inst_27729));
var inst_27734 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27733__$1,inst_27726);
var inst_27735 = cljs.core.keyword_identical_QMARK_(inst_27726,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27736 = ((inst_27734) || (inst_27735));
var state_27765__$1 = (function (){var statearr_27779 = state_27765;
(statearr_27779[(10)] = inst_27733__$1);

return statearr_27779;
})();
if(cljs.core.truth_(inst_27736)){
var statearr_27780_27803 = state_27765__$1;
(statearr_27780_27803[(1)] = (8));

} else {
var statearr_27781_27804 = state_27765__$1;
(statearr_27781_27804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (14))){
var inst_27758 = (state_27765[(2)]);
var inst_27759 = cljs.core.async.close_BANG_(out);
var state_27765__$1 = (function (){var statearr_27783 = state_27765;
(statearr_27783[(13)] = inst_27758);

return statearr_27783;
})();
var statearr_27784_27805 = state_27765__$1;
(statearr_27784_27805[(2)] = inst_27759);

(statearr_27784_27805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (10))){
var inst_27748 = (state_27765[(2)]);
var state_27765__$1 = state_27765;
var statearr_27785_27806 = state_27765__$1;
(statearr_27785_27806[(2)] = inst_27748);

(statearr_27785_27806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27766 === (8))){
var inst_27733 = (state_27765[(10)]);
var inst_27725 = (state_27765[(8)]);
var inst_27729 = (state_27765[(9)]);
var inst_27738 = inst_27725.push(inst_27729);
var tmp27782 = inst_27725;
var inst_27725__$1 = tmp27782;
var inst_27726 = inst_27733;
var state_27765__$1 = (function (){var statearr_27786 = state_27765;
(statearr_27786[(14)] = inst_27738);

(statearr_27786[(7)] = inst_27726);

(statearr_27786[(8)] = inst_27725__$1);

return statearr_27786;
})();
var statearr_27787_27807 = state_27765__$1;
(statearr_27787_27807[(2)] = null);

(statearr_27787_27807[(1)] = (2));


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
});})(c__25472__auto___27793,out))
;
return ((function (switch__25250__auto__,c__25472__auto___27793,out){
return (function() {
var cljs$core$async$state_machine__25251__auto__ = null;
var cljs$core$async$state_machine__25251__auto____0 = (function (){
var statearr_27788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27788[(0)] = cljs$core$async$state_machine__25251__auto__);

(statearr_27788[(1)] = (1));

return statearr_27788;
});
var cljs$core$async$state_machine__25251__auto____1 = (function (state_27765){
while(true){
var ret_value__25252__auto__ = (function (){try{while(true){
var result__25253__auto__ = switch__25250__auto__(state_27765);
if(cljs.core.keyword_identical_QMARK_(result__25253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25253__auto__;
}
break;
}
}catch (e27789){if((e27789 instanceof Object)){
var ex__25254__auto__ = e27789;
var statearr_27790_27808 = state_27765;
(statearr_27790_27808[(5)] = ex__25254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27789;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27809 = state_27765;
state_27765 = G__27809;
continue;
} else {
return ret_value__25252__auto__;
}
break;
}
});
cljs$core$async$state_machine__25251__auto__ = function(state_27765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25251__auto____1.call(this,state_27765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25251__auto____0;
cljs$core$async$state_machine__25251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25251__auto____1;
return cljs$core$async$state_machine__25251__auto__;
})()
;})(switch__25250__auto__,c__25472__auto___27793,out))
})();
var state__25474__auto__ = (function (){var statearr_27791 = (f__25473__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25473__auto__.cljs$core$IFn$_invoke$arity$0() : f__25473__auto__.call(null));
(statearr_27791[(6)] = c__25472__auto___27793);

return statearr_27791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25474__auto__);
});})(c__25472__auto___27793,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
