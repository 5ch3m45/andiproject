(()=>{"use strict";var t=function(){return t=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var s in n=arguments[i])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t},t.apply(this,arguments)},n=function(){function n(n,i,e){var s=this;this.endVal=i,this.options=e,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){s.startTime||(s.startTime=t);var n=t-s.startTime;s.remaining=s.duration-n,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(n,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(n,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(n/s.duration);var i=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=i?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),n<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(t){var n,i,e,a,o=t<0?"-":"";n=Math.abs(t).toFixed(s.options.decimalPlaces);var r=(n+="").split(".");if(i=r[0],e=r.length>1?s.options.decimal+r[1]:"",s.options.useGrouping){a="";for(var l=3,u=0,h=0,c=i.length;h<c;++h)s.options.useIndianSeparators&&4===h&&(l=2,u=1),0!==h&&u%l==0&&(a=s.options.separator+a),u++,a=i[c-h-1]+a;i=a}return s.options.numerals&&s.options.numerals.length&&(i=i.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),e=e.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),o+s.options.prefix+i+e+s.options.suffix},this.easeOutExpo=function(t,n,i,e){return i*(1-Math.pow(2,-10*t/e))*1024/1023+n},this.options=t(t({},this.defaults),e),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof n?document.getElementById(n):n,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,n):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return s.handleScroll(s)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return n.prototype.handleScroll=function(t){if(t&&window&&!t.once){var n=window.innerHeight+window.scrollY,i=t.el.getBoundingClientRect(),e=i.top+window.pageYOffset,s=i.top+i.height+window.pageYOffset;s<n&&s>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>s||e>n)&&!t.paused&&t.reset()}},n.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var n=t-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},n.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},n.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},n.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},n.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},n.prototype.printValue=function(t){var n;if(this.el){var i=this.formattingFn(t);(null===(n=this.options.plugin)||void 0===n?void 0:n.render)?this.options.plugin.render(this.el,i):"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i}},n.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},n.prototype.validateValue=function(t){var n=Number(t);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},n.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},n}();const i=(t,n)=>{t.forEach((t=>{const{observer:i,counter:e,data:s,element:a}=null!=t?t:{};i&&e&&(n?(e.printValue(s?.value),i.unobserve(a)):i.observe(a))}))};window.addEventListener("load",(function(){const t=document.querySelectorAll(".wp-block-boldblocks-counting-number .value");if(t.length){const e=[];t.forEach((t=>{const i=(t=>{const i=t.dataset,e=Object.keys(i).reduce(((t,n)=>{let e=i[n];if("value"===n){if(!isNaN(parseFloat(e))){let n=0;const i=".";(e+"").indexOf(i)>=0&&(n=(e+"").split(i)[1].length),t.value=e,t.decimalPlaces=n}}else["startVal","duration","scrollSpyDelay"].includes(n)?(e=parseFloat(e),isNaN(e)||("scrollSpyDelay"===n&&(e*=1e3),t[n]=e)):["enableScrollSpy","scrollSpyOnce"].includes(n)?t[n]="true"===e:"disableGrouping"===n?t.useGrouping="true"!==e:["separator","decimal"].includes(n)&&(t[n]=e);return t}),{});if(e?.value){const i=new n(t,e.value,{...e,enableScrollSpy:!1,scrollSpyOnce:!0,useEasing:!0}),s="is-number-animating",a=new IntersectionObserver((([n])=>{if(n.intersectionRatio>0){const o=n.target.closest(".wp-block-boldblocks-counting-number");o&&!o.classList.contains(s)&&o.classList.add(s),i.reset(),i.start((()=>{o&&o.classList.contains(s)&&o.classList.remove(s)})),e?.scrollSpyOnce&&a.unobserve(t)}}),{threshold:[0]});return a.observe(t),{observer:a,element:t,data:e,counter:i}}})(t);i&&e.push(i)}));const s=window.matchMedia("(prefers-reduced-motion: reduce)");i(e,s.matches),s.addEventListener("change",(()=>{i(e,s.matches)}))}}))})();