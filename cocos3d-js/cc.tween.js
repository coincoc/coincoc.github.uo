System.register(["./deprecated-7604704a.js","./deprecated-743a265d.js","./index-9f74c3a2.js","./SubContextView-760c0774.js","./component-event-handler-e9f19acd.js"],(function(t){"use strict";var e,n,i,r,a,s,o,u,c,h,l,v,_,f,p,g,y,d;return{setters:[function(t){e=t.j,n=t.y,i=t.l,r=t.v,a=t.as,s=t.d,o=t.b,u=t.e,c=t.f,h=t.x,l=t.aY,v=t.w},function(t){_=t.d3,f=t.b8},function(t){p=t.n},function(){},function(t){g=t.d,y=t.D,d=t.a}],execute:function(){t({tween:B,tweenUtil:G});var k=0,T=function t(){s(this,t),this.actions=[],this.target=null,this.actionIndex=0,this.currentAction=null,this.paused=!1,this.lock=!1},A=function(){function t(){s(this,t),this._hashTargets=new Map,this._arrayTargets=[],this._elementPool=[]}return e(t,[{key:"_searchElementByTarget",value:function(t,e){for(var n=0;n<t.length;n++)if(e===t[n].target)return t[n];return null}},{key:"_getElement",value:function(t,e){var n=this._elementPool.pop();return n||(n=new T),n.target=t,n.paused=!!e,n}},{key:"_putElement",value:function(t){t.actions.length=0,t.actionIndex=0,t.currentAction=null,t.paused=!1,t.target=null,t.lock=!1,this._elementPool.push(t)}},{key:"addAction",value:function(t,e,i){if(t&&e){null==e.uuid&&(e.uuid="_TWEEN_UUID_"+k++);var r=this._hashTargets.get(e);r?r.actions||(r.actions=[]):(r=this._getElement(e,i),this._hashTargets.set(e,r),this._arrayTargets.push(r)),r.target=e,r.actions.push(t),t.startWithTarget(e)}else n(1e3)}},{key:"removeAllActions",value:function(){for(var t=this._arrayTargets,e=0;e<t.length;e++){var n=t[e];n&&this._putElement(n)}this._arrayTargets.length=0,this._hashTargets=new Map}},{key:"removeAllActionsFromTarget",value:function(t){if(null!=t){var e=this._hashTargets.get(t);e&&(e.actions.length=0,this._deleteHashElement(e))}}},{key:"removeAction",value:function(t){if(null!=t){var e=t.getOriginalTarget(),n=this._hashTargets.get(e);if(n)for(var i=0;i<n.actions.length;i++)if(n.actions[i]===t){n.actions.splice(i,1),n.actionIndex>=i&&n.actionIndex--;break}}}},{key:"_removeActionByTag",value:function(t,e,n){for(var i=0,r=e.actions.length;i<r;++i){var a=e.actions[i];if(a&&a.getTag()===t){if(n&&a.getOriginalTarget()!==n)continue;this._removeActionAtIndex(i,e);break}}}},{key:"removeActionByTag",value:function(t,e){var n=this;t===i.Action.TAG_INVALID&&r(1002);var a=this._hashTargets;if(e){var s=a.get(e);s&&this._removeActionByTag(t,s,e)}else a.forEach((function(e){n._removeActionByTag(t,e)}))}},{key:"getActionByTag",value:function(t,e){t===i.Action.TAG_INVALID&&r(1004);var n=this._hashTargets.get(e);if(n){if(null!=n.actions)for(var a=0;a<n.actions.length;++a){var s=n.actions[a];if(s&&s.getTag()===t)return s}r(1005,t)}return null}},{key:"getNumberOfRunningActionsInTarget",value:function(t){var e=this._hashTargets.get(t);return e&&e.actions?e.actions.length:0}},{key:"pauseTarget",value:function(t){var e=this._hashTargets.get(t);e&&(e.paused=!0)}},{key:"resumeTarget",value:function(t){var e=this._hashTargets.get(t);e&&(e.paused=!1)}},{key:"pauseAllRunningActions",value:function(){for(var t=[],e=this._arrayTargets,n=0;n<e.length;n++){var i=e[n];i&&!i.paused&&(i.paused=!0,t.push(i.target))}return t}},{key:"resumeTargets",value:function(t){if(t)for(var e=0;e<t.length;e++)t[e]&&this.resumeTarget(t[e])}},{key:"pauseTargets",value:function(t){if(t)for(var e=0;e<t.length;e++)t[e]&&this.pauseTarget(t[e])}},{key:"purgeSharedManager",value:function(){i.director.getScheduler().unscheduleUpdate(this)}},{key:"_removeActionAtIndex",value:function(t,e){e.actions[t];e.actions.splice(t,1),e.actionIndex>=t&&e.actionIndex--,0===e.actions.length&&this._deleteHashElement(e)}},{key:"_deleteHashElement",value:function(t){var e=!1;if(t&&!t.lock&&this._hashTargets.get(t.target)){this._hashTargets.delete(t.target);for(var n=this._arrayTargets,i=0,r=n.length;i<r;i++)if(n[i]===t){n.splice(i,1);break}this._putElement(t),e=!0}return e}},{key:"update",value:function(t){for(var e,n=this._arrayTargets,i=0;i<n.length;i++){this._currentTarget=n[i];var r=(e=this._currentTarget).target;if(r instanceof a&&!r.isValid)this.removeAllActionsFromTarget(r),i--;else{if(!e.paused&&e.actions){for(e.lock=!0,e.actionIndex=0;e.actionIndex<e.actions.length;e.actionIndex++)if(e.currentAction=e.actions[e.actionIndex],e.currentAction){if(e.currentAction.step(t*(e.currentAction._speedMethod?e.currentAction._speed:1)),e.currentAction&&e.currentAction.isDone()){e.currentAction.stop();var s=e.currentAction;e.currentAction=null,this.removeAction(s)}e.currentAction=null}e.lock=!1}0===e.actions.length&&this._deleteHashElement(e)&&i--}}}}]),t}(),w=t("TweenSystem",function(t){function n(){var t,e;s(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=u(this,(t=c(n)).call.apply(t,[this].concat(r)))).actionMgr=new A,e}return o(n,t),e(n,[{key:"postUpdate",value:function(t){this.actionMgr.update(t)}},{key:"ActionManager",get:function(){return this.actionMgr}}]),n}(d));w.ID="TWEEN",w.instance=void 0,g.on(y.EVENT_INIT,(function(){var t=new w;w.instance=t,g.registerSystem(w.ID,t,100)}));var m=function(){function t(){s(this,t),this.originalTarget=null,this.target=null,this.tag=t.TAG_INVALID}return e(t,[{key:"clone",value:function(){var e=new t;return e.originalTarget=null,e.target=null,e.tag=this.tag,e}},{key:"isDone",value:function(){return!0}},{key:"startWithTarget",value:function(t){this.originalTarget=t,this.target=t}},{key:"stop",value:function(){this.target=null}},{key:"step",value:function(t){r(1006)}},{key:"update",value:function(t){r(1007)}},{key:"getTarget",value:function(){return this.target}},{key:"setTarget",value:function(t){this.target=t}},{key:"getOriginalTarget",value:function(){return this.originalTarget}},{key:"setOriginalTarget",value:function(t){this.originalTarget=t}},{key:"getTag",value:function(){return this.tag}},{key:"setTag",value:function(t){this.tag=t}},{key:"reverse",value:function(){return r(1008),null}},{key:"retain",value:function(){}},{key:"release",value:function(){}}]),t}();m.TAG_INVALID=-1;var W=function(t){function n(){var t,e;s(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=u(this,(t=c(n)).call.apply(t,[this].concat(r))))._duration=0,e._timesForRepeat=1,e}return o(n,t),e(n,[{key:"getDuration",value:function(){return this._duration*(this._timesForRepeat||1)}},{key:"setDuration",value:function(t){this._duration=t}},{key:"clone",value:function(){return new n}}]),n}(m),D=function(t){function n(){return s(this,n),u(this,c(n).apply(this,arguments))}return o(n,t),e(n,[{key:"isDone",value:function(){return!0}},{key:"step",value:function(t){this.update(1)}},{key:"update",value:function(t){}},{key:"reverse",value:function(){return this.clone()}},{key:"clone",value:function(){return new n}}]),n}(W),I=function(t){function n(){return s(this,n),u(this,c(n).apply(this,arguments))}return o(n,t),e(n,[{key:"update",value:function(t){for(var e=this.target.getComponentsInChildren(_),n=0;n<e.length;++n){e[n].enabled=!0}}},{key:"reverse",value:function(){return new E}},{key:"clone",value:function(){return new n}}]),n}(D);var E=function(t){function n(){return s(this,n),u(this,c(n).apply(this,arguments))}return o(n,t),e(n,[{key:"update",value:function(t){for(var e=this.target.getComponentsInChildren(_),n=0;n<e.length;++n){e[n].enabled=!1}}},{key:"reverse",value:function(){return new I}},{key:"clone",value:function(){return new n}}]),n}(D);var M=function(t){function n(t){var e;return s(this,n),(e=u(this,c(n).call(this)))._isNeedCleanUp=!0,void 0!==t&&e.init(t),e}return o(n,t),e(n,[{key:"update",value:function(t){this.target.removeFromParent(),this._isNeedCleanUp&&this.target.destroy()}},{key:"init",value:function(t){return this._isNeedCleanUp=t,!0}},{key:"reverse",value:function(){return new n(this._isNeedCleanUp)}},{key:"clone",value:function(){return new n(this._isNeedCleanUp)}}]),n}(D);var F=function(t){function n(t,e,i){var r;return s(this,n),(r=u(this,c(n).call(this)))._selectorTarget=null,r._function=null,r._data=null,r.initWithFunction(t,e,i),r}return o(n,t),e(n,[{key:"initWithFunction",value:function(t,e,n){return t&&(this._function=t),e&&(this._selectorTarget=e),void 0!==n&&(this._data=n),!0}},{key:"execute",value:function(){this._function&&this._function.call(this._selectorTarget,this.target,this._data)}},{key:"update",value:function(t){this.execute()}},{key:"getTargetCallback",value:function(){return this._selectorTarget}},{key:"setTargetCallback",value:function(t){t!==this._selectorTarget&&(this._selectorTarget&&(this._selectorTarget=null),this._selectorTarget=t)}},{key:"clone",value:function(){var t=new n;return t.initWithFunction(this._function,this._selectorTarget,this._data),t}}]),n}(D);var L=function(t){function n(t){var e;return s(this,n),(e=u(this,c(n).call(this))).MAX_VALUE=2,e._elapsed=0,e._firstTick=!1,e._easeList=[],e._speed=1,e._repeatForever=!1,e._repeatMethod=!1,e._speedMethod=!1,void 0===t||isNaN(t)||e.initWithDuration(t),e}return o(n,t),e(n,[{key:"getElapsed",value:function(){return this._elapsed}},{key:"initWithDuration",value:function(t){return this._duration=0===t?f.FLT_EPSILON:t,this._elapsed=0,this._firstTick=!0,!0}},{key:"isDone",value:function(){return this._elapsed>=this._duration}},{key:"_cloneDecoration",value:function(t){t._repeatForever=this._repeatForever,t._speed=this._speed,t._timesForRepeat=this._timesForRepeat,t._easeList=this._easeList,t._speedMethod=this._speedMethod,t._repeatMethod=this._repeatMethod}},{key:"_reverseEaseList",value:function(t){if(this._easeList){t._easeList=[];for(var e=0;e<this._easeList.length;e++)t._easeList.push(this._easeList[e])}}},{key:"clone",value:function(){var t=new n(this._duration);return this._cloneDecoration(t),t}},{key:"easing",value:function(t){this._easeList?this._easeList.length=0:this._easeList=[];for(var e=0;e<arguments.length;e++)this._easeList.push(arguments[e]);return this}},{key:"_computeEaseTime",value:function(t){return t}},{key:"step",value:function(t){this._firstTick?(this._firstTick=!1,this._elapsed=0):this._elapsed+=t;var e=this._elapsed/(this._duration>1.192092896e-7?this._duration:1.192092896e-7);e=1>e?e:1,this.update(e>0?e:0),this._repeatMethod&&this._timesForRepeat>1&&this.isDone()&&(this._repeatForever||this._timesForRepeat--,this.startWithTarget(this.target),this.step(this._elapsed-this._duration))}},{key:"startWithTarget",value:function(t){m.prototype.startWithTarget.call(this,t),this._elapsed=0,this._firstTick=!0}},{key:"reverse",value:function(){return r(1010),this}},{key:"setAmplitudeRate",value:function(t){r(1011)}},{key:"getAmplitudeRate",value:function(){return r(1012),0}},{key:"speed",value:function(t){return t<=0?(r(1013),this):(this._speedMethod=!0,this._speed*=t,this)}},{key:"getSpeed",value:function(){return this._speed}},{key:"setSpeed",value:function(t){return this._speed=t,this}},{key:"repeat",value:function(t){return t=Math.round(t),isNaN(t)||t<1?(r(1014),this):(this._repeatMethod=!0,this._timesForRepeat*=t,this)}},{key:"repeatForever",value:function(){return this._repeatMethod=!0,this._timesForRepeat=this.MAX_VALUE,this._repeatForever=!0,this}}]),n}(W),b=function(t){function i(t){var e;s(this,i),(e=u(this,c(i).call(this)))._actions=[],e._split=0,e._last=0,e._reversed=!1;var a=t instanceof Array?t:arguments;if(1===a.length)return n(1019),u(e);var o=a.length-1;if(o>=0&&null==a[o]&&r(1015),o>=0){for(var h,l=a[0],v=1;v<o;v++)a[v]&&(h=l,l=i._actionOneTwo(h,a[v]));e.initWithTwoActions(l,a[o])}return e}return o(i,t),e(i,[{key:"initWithTwoActions",value:function(t,e){if(!t||!e)return n(1025),!1;var i=t._duration,r=e._duration,a=(i*=t._repeatMethod?t._timesForRepeat:1)+(r*=e._repeatMethod?e._timesForRepeat:1);return this.initWithDuration(a),this._actions[0]=t,this._actions[1]=e,!0}},{key:"clone",value:function(){var t=new i;return this._cloneDecoration(t),t.initWithTwoActions(this._actions[0].clone(),this._actions[1].clone()),t}},{key:"startWithTarget",value:function(t){L.prototype.startWithTarget.call(this,t),this._split=this._actions[0]._duration/this._duration,this._split*=this._actions[0]._repeatMethod?this._actions[0]._timesForRepeat:1,this._last=-1}},{key:"stop",value:function(){-1!==this._last&&this._actions[this._last].stop(),m.prototype.stop.call(this)}},{key:"update",value:function(t){var e,n,i=0,r=this._split,a=this._actions,s=this._last;(t=this._computeEaseTime(t))<r?(e=0!==r?t/r:1,0===i&&1===s&&this._reversed&&(a[1].update(0),a[1].stop())):(i=1,e=1===r?1:(t-r)/(1-r),-1===s&&(a[0].startWithTarget(this.target),a[0].update(1),a[0].stop()),0===s&&(a[0].update(1),a[0].stop())),n=a[i],s===i&&n.isDone()||(s!==i&&n.startWithTarget(this.target),e*=n._timesForRepeat,n.update(e>1?e%1:e),this._last=i)}},{key:"reverse",value:function(){var t=i._actionOneTwo(this._actions[1].reverse(),this._actions[0].reverse());return this._cloneDecoration(t),this._reverseEaseList(t),t._reversed=!0,t}}]),i}(L);function x(t){var e=t instanceof Array?t:arguments;if(1===e.length)return n(1019),null;var i=e.length-1;i>=0&&null==e[i]&&r(1015);var a=null;if(i>=0){a=e[0];for(var s=1;s<=i;s++)e[s]&&(a=b._actionOneTwo(a,e[s]))}return a}b._actionOneTwo=function(t,e){var n=new b;return n.initWithTwoActions(t,e),n};var N=function(t){function n(t,e){var i;return s(this,n),(i=u(this,c(n).call(this)))._times=0,i._total=0,i._nextDt=0,i._actionInstant=!1,i._innerAction=null,void 0!==e&&i.initWithAction(t,e),i}return o(n,t),e(n,[{key:"initWithAction",value:function(t,e){var n=t._duration*e;return!!this.initWithDuration(n)&&(this._times=e,this._innerAction=t,t instanceof D&&(this._actionInstant=!0,this._times-=1),this._total=0,!0)}},{key:"clone",value:function(){var t=new n;return this._cloneDecoration(t),t.initWithAction(this._innerAction.clone(),this._times),t}},{key:"startWithTarget",value:function(t){this._total=0,this._nextDt=this._innerAction._duration/this._duration,L.prototype.startWithTarget.call(this,t),this._innerAction.startWithTarget(t)}},{key:"stop",value:function(){this._innerAction.stop(),m.prototype.stop.call(this)}},{key:"update",value:function(t){t=this._computeEaseTime(t);var e=this._innerAction,n=this._duration,i=this._times,r=this._nextDt;if(t>=r){for(;t>r&&this._total<i;)e.update(1),this._total++,e.stop(),e.startWithTarget(this.target),r+=e._duration/n,this._nextDt=r>1?1:r;t>=1&&this._total<i&&(e.update(1),this._total++),this._actionInstant||(this._total===i?e.stop():e.update(t-(r-e._duration/n)))}else e.update(t*i%1)}},{key:"isDone",value:function(){return this._total===this._times}},{key:"reverse",value:function(){var t=new n(this._innerAction.reverse(),this._times);return this._cloneDecoration(t),this._reverseEaseList(t),t}},{key:"setInnerAction",value:function(t){this._innerAction!==t&&(this._innerAction=t)}},{key:"getInnerAction",value:function(){return this._innerAction}}]),n}(L);var O=function(t){function i(t){var e;return s(this,i),(e=u(this,c(i).call(this)))._innerAction=null,t&&e.initWithAction(t),e}return o(i,t),e(i,[{key:"initWithAction",value:function(t){return t?(this._innerAction=t,!0):(n(1026),!1)}},{key:"clone",value:function(){var t=new i;return this._cloneDecoration(t),t.initWithAction(this._innerAction.clone()),t}},{key:"startWithTarget",value:function(t){L.prototype.startWithTarget.call(this,t),this._innerAction.startWithTarget(t)}},{key:"step",value:function(t){var e=this._innerAction;e.step(t),e.isDone()&&(e.startWithTarget(this.target),e.step(e.getElapsed()-e._duration))}},{key:"isDone",value:function(){return!1}},{key:"reverse",value:function(){var t=new i(this._innerAction.reverse());return this._cloneDecoration(t),this._reverseEaseList(t),t}},{key:"setInnerAction",value:function(t){this._innerAction!==t&&(this._innerAction=t)}},{key:"getInnerAction",value:function(){return this._innerAction}}]),i}(L);var R=function(t){function i(t){var e;s(this,i),(e=u(this,c(i).call(this)))._one=null,e._two=null;var a=t instanceof Array?t:arguments;if(1===a.length)return n(1020),u(e);var o=a.length-1;if(o>=0&&null==a[o]&&r(1015),o>=0){for(var h,l=a[0],v=1;v<o;v++)a[v]&&(h=l,l=i._actionOneTwo(h,a[v]));e.initWithTwoActions(l,a[o])}return e}return o(i,t),e(i,[{key:"initWithTwoActions",value:function(t,e){if(!t||!e)return n(1027),!1;var i=!1,r=t._duration,a=e._duration;return this.initWithDuration(Math.max(r,a))&&(this._one=t,this._two=e,r>a?this._two=b._actionOneTwo(e,C(r-a)):r<a&&(this._one=b._actionOneTwo(t,C(a-r))),i=!0),i}},{key:"clone",value:function(){var t=new i;return this._cloneDecoration(t),t.initWithTwoActions(this._one.clone(),this._two.clone()),t}},{key:"startWithTarget",value:function(t){L.prototype.startWithTarget.call(this,t),this._one.startWithTarget(t),this._two.startWithTarget(t)}},{key:"stop",value:function(){this._one.stop(),this._two.stop(),m.prototype.stop.call(this)}},{key:"update",value:function(t){t=this._computeEaseTime(t),this._one&&this._one.update(t),this._two&&this._two.update(t)}},{key:"reverse",value:function(){var t=i._actionOneTwo(this._one.reverse(),this._two.reverse());return this._cloneDecoration(t),this._reverseEaseList(t),t}}]),i}(L);function S(t){var e=t instanceof Array?t:arguments;if(1===e.length)return n(1020),null;e.length>0&&null==e[e.length-1]&&r(1015);for(var i=e[0],a=1;a<e.length;a++)null!=e[a]&&(i=R._actionOneTwo(i,e[a]));return i}R._actionOneTwo=function(t,e){var n=new R;return n.initWithTwoActions(t,e),n};var U=function(t){function n(){return s(this,n),u(this,c(n).apply(this,arguments))}return o(n,t),e(n,[{key:"update",value:function(t){}},{key:"reverse",value:function(){var t=new n(this._duration);return this._cloneDecoration(t),this._reverseEaseList(t),t}},{key:"clone",value:function(){var t=new n;return this._cloneDecoration(t),t.initWithDuration(this._duration),t}}]),n}(L);function C(t){return new U(t)}var j=function(t){function i(t){var e;return s(this,i),(e=u(this,c(i).call(this)))._other=null,t&&e.initWithAction(t),e}return o(i,t),e(i,[{key:"initWithAction",value:function(t){return t?t===this._other?(n(1029),!1):!!L.prototype.initWithDuration.call(this,t._duration)&&(this._other=t,!0):(n(1028),!1)}},{key:"clone",value:function(){var t=new i;return this._cloneDecoration(t),t.initWithAction(this._other.clone()),t}},{key:"startWithTarget",value:function(t){L.prototype.startWithTarget.call(this,t),this._other.startWithTarget(t)}},{key:"update",value:function(t){t=this._computeEaseTime(t),this._other&&this._other.update(1-t)}},{key:"reverse",value:function(){return this._other.clone()}},{key:"stop",value:function(){this._other.stop(),m.prototype.stop.call(this)}}]),i}(L);var P=function(t){function n(t,e,r){var a;if(s(this,n),(a=u(this,c(n).call(this)))._opts=void 0,a._props=void 0,a._originProps=void 0,null==r)r=Object.create(null);else if(function(t){var e=" [Tween:] ",n=" option is not support in v"+i.ENGINE_VERSION;t.delay&&v(e+"delay"+n),t.repeat&&v(e+"repeat"+n),t.repeatDelay&&v(e+"repeatDelay"+n),t.interpolation&&v(e+"interpolation"+n),t.onStop&&v(e+"onStop"+n)}(r),r.easing&&"string"==typeof r.easing&&(r.easing=function(t){var e=t.charAt(0);if(/[A-Z]/.test(e)){var n=(t=t.replace(e,e.toLowerCase())).split("-");if(2==n.length){var i=n[0];if("linear"==i)t="linear";else{var r=n[1];switch(i){case"quadratic":t="quad"+r;break;case"quartic":t="quart"+r;break;case"quintic":t="quint"+r;break;case"sinusoidal":t="sine"+r;break;case"exponential":t="expo"+r;break;case"circular":t="circ"+r;break;default:t=i+r}}}}return t}(r.easing)),r.progress||(r.progress=a.progress),r.easing&&"string"==typeof r.easing){var o=r.easing;r.easing=p[o],r.easing||h(1031,o)}for(var l in a._opts=r,a._props=Object.create(null),e){var _=e[l],f=void 0,g=void 0;void 0!==_.value&&(_.easing||_.progress)&&("string"==typeof _.easing?!(f=f[_.easing])&&h(1031,_.easing):f=_.easing,g=_.progress,_=_.value);var y=Object.create(null);y.value=_,y.easing=f,y.progress=g,a._props[l]=y}return a._originProps=e,a.initWithDuration(t),a}return o(n,t),e(n,[{key:"clone",value:function(){var t=new n(this._duration,this._originProps,this._opts);return this._cloneDecoration(t),t}},{key:"startWithTarget",value:function(t){L.prototype.startWithTarget.call(this,t);var e=!!this._opts.relative,n=this._props;for(var i in n){var r=t[i];if(void 0!==r){var a=n[i],s=a.value;if("number"==typeof r)a.start=r,a.current=r,a.end=e?r+s:s;else if("object"===l(r))for(var o in null==a.start&&(a.start={},a.current={},a.end={}),s)a.start[o]=r[o],a.current[o]=r[o],a.end[o]=e?r[o]+s[o]:s[o]}}this._opts.onStart&&this._opts.onStart(this.target)}},{key:"update",value:function(t){var e=this.target;if(e){var n=this._props,i=this._opts,r=t;i.easing&&(r=i.easing(t));var a=i.progress;for(var s in n){var o=n[s],u=o.easing?o.easing(t):r,c=o.progress?o.progress:a,h=o.start,v=o.end;if("number"==typeof h)o.current=c(h,v,o.current,u);else if("object"===l(h))for(var _ in h)o.current[_]=c(h[_],v[_],o.current[_],u);e[s]=o.current}i.onUpdate&&i.onUpdate(this.target,t),1==t&&i.onComplete&&i.onComplete(this.target)}}},{key:"progress",value:function(t,e,n,i){return t+(e-t)*i}}]),n}(L),V=function(t){function n(t){var e;return s(this,n),(e=u(this,c(n).call(this)))._props=void 0,e._props={},void 0!==t&&e.init(t),e}return o(n,t),e(n,[{key:"init",value:function(t){for(var e in t)this._props[e]=t[e];return!0}},{key:"update",value:function(){var t=this._props,e=this.target;for(var n in t)e[n]=t[n]}},{key:"clone",value:function(){var t=new n;return t.init(this._props),t}}]),n}(D),q=t("Tween",function(){function t(e){s(this,t),this._actions=[],this._finalAction=null,this._target=null,this._tag=m.TAG_INVALID,this._target=void 0===e?null:e}return e(t,[{key:"tag",value:function(t){return this._tag=t,this}},{key:"then",value:function(t){return t instanceof m?this._actions.push(t.clone()):this._actions.push(t._union()),this}},{key:"target",value:function(t){return this._target=t,this}},{key:"start",value:function(){return this._target?(this._finalAction&&w.instance.ActionManager.removeAction(this._finalAction),this._finalAction=this._union(),this._finalAction.setTag(this._tag),w.instance.ActionManager.addAction(this._finalAction,this._target,!1),this):(v("Please set target to tween first"),this)}},{key:"stop",value:function(){return this._finalAction&&w.instance.ActionManager.removeAction(this._finalAction),this}},{key:"clone",value:function(t){var e=this._union();return B(t).then(e.clone())}},{key:"union",value:function(){var t=this._union();return this._actions.length=0,this._actions.push(t),this}},{key:"to",value:function(t,e,n){(n=n||Object.create(null)).relative=!1;var i=new P(t,e,n);return this._actions.push(i),this}},{key:"by",value:function(t,e,n){(n=n||Object.create(null)).relative=!0;var i=new P(t,e,n);return this._actions.push(i),this}},{key:"set",value:function(t){var e=new V(t);return this._actions.push(e),this}},{key:"delay",value:function(t){var e=C(t);return this._actions.push(e),this}},{key:"call",value:function(t){var e,n,i=new F(t,e,n);return this._actions.push(i),this}},{key:"sequence",value:function(){var e=t._wrappedSequence.apply(t,arguments);return this._actions.push(e),this}},{key:"parallel",value:function(){var e=t._wrappedParallel.apply(t,arguments);return this._actions.push(e),this}},{key:"repeat",value:function(e,n){if(e==1/0)return this.repeatForever(n);var i,r=this._actions;return i=n instanceof t?n._union():r.pop(),r.push(function(t,e){return new N(t,e)}(i,e)),this}},{key:"repeatForever",value:function(e){var n,i=this._actions;return n=e instanceof t?e._union():i.pop(),i.push(function(t){return new O(t)}(n)),this}},{key:"reverseTime",value:function(e){var n,i=this._actions;return n=e instanceof t?e._union():i.pop(),i.push(function(t){return new j(t)}(n)),this}},{key:"hide",value:function(){var t=new E;return this._actions.push(t),this}},{key:"show",value:function(){var t=new I;return this._actions.push(t),this}},{key:"removeSelf",value:function(){var t=new M(!1);return this._actions.push(t),this}},{key:"_union",value:function(){var t=this._actions;return 1===t.length?t[0]:x(t)}},{key:"_destroy",value:function(){this.stop()}}],[{key:"stopAll",value:function(){w.instance.ActionManager.removeAllActions()}},{key:"stopAllByTag",value:function(t,e){w.instance.ActionManager.removeActionByTag(t,e)}},{key:"stopAllByTarget",value:function(t){w.instance.ActionManager.removeAllActionsFromTarget(t)}},{key:"_wrappedSequence",value:function(){var e=t._tmp_args;e.length=0;for(var n=arguments.length,i=0;i<n;i++){var r=e[i]=i<0||arguments.length<=i?void 0:arguments[i];r instanceof t&&(e[i]=r._union())}return x.apply(x,e)}},{key:"_wrappedParallel",value:function(){var e=t._tmp_args;e.length=0;for(var n=arguments.length,i=0;i<n;i++){var r=e[i]=i<0||arguments.length<=i?void 0:arguments[i];r instanceof t&&(e[i]=r._union())}return S.apply(S,e)}}]),t}());function B(t){return new q(t)}function G(t){return v("tweenUtil' is deprecated, please use 'tween' instead "),new q(t)}q._tmp_args=[],i.Tween=q,i.tween=B,i.tweenUtil=G}}}));
