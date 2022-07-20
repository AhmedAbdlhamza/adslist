(self["webpackChunkads_app1"]=self["webpackChunkads_app1"]||[]).push([[443],{2094:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Mp}});n(6699);var s=n(3434),i=n(8762),r=i.Z,o=n(2240),a=n(1444),c=n(6669),u=n(144),l=u.ZP.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=n(7678),d=n(4101),f=(0,h.Z)(s.Z,a.Z,l).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(r,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...s.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||c.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,d.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),p=n(9582),m=n(4886),g=n(266),y=n(2118),v=c.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:c.Z.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((t=>!t.isComment&&" "!==t.text))}}),w=u.ZP.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const n=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),n)}}}),E=n(5352);const b=(0,h.Z)(w,a.Z);var T=b.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=(0,E.sp)(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&(0,d.N6)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=(0,E.z9)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):this.openOnClick&&(t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){var e;if(this.activatorElement)return this.activatorElement;let n=null;if(this.activator){const t=this.internalActivator?this.$el:document;n="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;n=t&&t.$options.mixins&&t.$options.mixins.some((t=>t.options&&["activatable","menuable"].includes(t.options.name)))?t.getActivator():this.activatorNode[0].elm}else t&&(n=t.currentTarget||t.target);return this.activatorElement=(null==(e=n)?void 0:e.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot(){return(0,E.z9)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}});function C(t){const e=[];for(let n=0;n<t.length;n++){const s=t[n];s.isActive&&s.isDependent?e.push(s):e.push(...C(s.$children))}return e}var S=(0,h.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?C(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let n=0;n<e.length;n++)t.push(...e[n].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}}),A=u.ZP.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,d.Jk)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}});function _(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function I(t){t.forEach((t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}var D=(0,h.Z)(A).extend({name:"detachable",props:{attach:{default:!1,validator:_},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick((()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)}))}}))},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver((n=>{n.some((t=>Array.from(t.removedNodes).includes(this.$el)))&&(e.disconnect(),I(t))}));e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else I(t)}},methods:{getScopeIdAttrs(){const t=(0,E.vO)(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):(0,d.Kd)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}}),k=n(6878),N=(0,h.Z)(k.Z,c.Z,a.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),x=N,O=u.ZP.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new x({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,E.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,E.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[E.Do.up,E.Do.pageup],n=[E.Do.down,E.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const n=e.shiftKey||e.deltaX?"x":"y",s="y"===n?e.deltaY:e.deltaX||e.deltaY;let i,r;"y"===n?(i=0===t.scrollTop,r=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,r=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=s<0,a=s>0;return!(i||!o)||(!(r||!a)||!(!i&&!r)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,E.iZ)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,n=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(n,e))||!this.shouldScroll(e,t)}for(let n=0;n<e.length;n++){const s=e[n];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,E.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),R=u.ZP.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout((()=>{this.isActive=!1}))}}}),L=u.ZP.extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:(0,E.KK)(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,n=[this.stackMinZIndex,(0,E.KK)(e)],s=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let i=0;i<s.length;i++)t.includes(s[i])||n.push((0,E.KK)(s[i]));return Math.max(...n)}}}),M=n(8856);function P(){return!0}function V(t,e,n){if(!t||!1===B(t,n))return!1;const s=(0,M.e)(e);if("undefined"!==typeof ShadowRoot&&s instanceof ShadowRoot&&s.host===t.target)return!1;const i=("object"===typeof n.value&&n.value.include||(()=>[]))();return i.push(e),!i.some((e=>e.contains(t.target)))}function B(t,e){const n="object"===typeof e.value&&e.value.closeConditional||P;return n(t)}function F(t,e,n,s){const i="function"===typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&V(t,e,n)&&setTimeout((()=>{B(t,n)&&i&&i(t)}),0)}function U(t,e){const n=(0,M.e)(t);e(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&e(n)}const $={inserted(t,e,n){const s=s=>F(s,t,e,n),i=n=>{t._clickOutside.lastMousedownWasOutside=V(n,t,e)};U(t,(t=>{t.addEventListener("click",s,!0),t.addEventListener("mousedown",i,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[n.context._uid]={onClick:s,onMousedown:i}},unbind(t,e,n){t._clickOutside&&(U(t,(e=>{var s;if(!e||null==(s=t._clickOutside)||!s[n.context._uid])return;const{onClick:i,onMousedown:r}=t._clickOutside[n.context._uid];e.removeEventListener("click",i,!0),e.removeEventListener("mousedown",r,!0)})),delete t._clickOutside[n.context._uid])}};var j=$;const q=(0,h.Z)(S,D,O,R,L,T);var K=q.extend({name:"v-dialog",directives:{ClickOutside:j},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,d.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):O.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;null!=(t=this.$refs.dialog)&&t.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,null==(e=this.$refs.dialog)||e.focus());this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===E.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(v,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,E.kb)(this.maxWidth),width:(0,E.kb)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}}),z=c.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}}),H=n(4324),G=n(1713),W=n(4390),Q=n(8846),Z=(0,h.Z)(W.Z,Q.Z,c.Z).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?this.boilerplate?{}:{"aria-busy":!0,"aria-live":"polite",role:"alert",...this.$attrs}:this.$attrs},classes(){return{"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile,...this.themeClasses,...this.elevationClasses}},isLoading(){return!("default"in this.$scopedSlots)||this.loading},rootTypes(){return{actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text",...this.types}}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,n]=t.split("@"),s=()=>this.genStructure(e);return Array.from({length:n}).map(s)},genStructure(t){let e=[];t=t||this.type||"";const n=this.rootTypes[t]||"";if(t===n);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);n.indexOf(",")>-1?e=this.mapBones(n):n.indexOf("@")>-1?e=this.genBones(n):n&&e.push(this.genStructure(n))}return[this.genBone(t,e)]},genSkeleton(){const t=[];return this.isLoading?t.push(this.genStructure()):t.push((0,E.z9)(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave(t){t.style.setProperty("display","none","important")},resetStyles(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),X=n(7394),Y=(n(9027),(0,E.Ji)("spacer","div","v-spacer")),J=n(7148),tt=(0,h.Z)(c.Z).extend({name:"v-timeline",provide(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes(){return{"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse,...this.themeClasses}}},render(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}});const et=(0,h.Z)(k.Z,c.Z);var nt=et.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon(){return!!this.icon||!!this.$slots.icon}},methods:{genBody(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon(){return this.$slots.icon?this.$slots.icon:this.$createElement(o.Z,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot(){const t=this.setBackgroundColor(this.color);return this.$createElement("div",{staticClass:"v-timeline-item__inner-dot",...t},[this.hasIcon&&this.genIcon()])},genDot(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider(){const t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render(t){const e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:{"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right,...this.themeClasses}},e)}}),st=function(){var t=this,e=t._self._c;return e(y.Z,[e(G.Z,{staticClass:"mt-6"},[e(g.Z,{attrs:{cols:"12",sm:"12",lg:"12"}},[e(Z,{attrs:{type:"card"}},[e(p.Z,{staticClass:"mx-auto"},[e(m.EB,{staticClass:"blue-grey white--text"},[e("span",{},[t._v("لوحة اعلانات شعبة الاتصالات")]),e(Y),e(K,{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function({on:n,attrs:s}){return[e(i.Z,t._g(t._b({key:"bt1",attrs:{color:"primary",dark:""}},"v-btn",s,!1),n),[t._v(" إضافة اعلان "),e(H.Z,[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(p.Z,[e(m.EB,[e("span",{staticClass:"text-h5"},[t._v("تفاصيل الاعلان")])]),e(m.ZB,[e(y.Z,[e(G.Z,[e(g.Z,{attrs:{cols:"12"}},[e(J.Z,{key:"tx1",attrs:{label:"العنوان",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),e(g.Z,{attrs:{cols:"12"}},[e(J.Z,{key:"tx2",attrs:{label:"التفاصيل",required:""},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)],1)],1)],1),e(m.h7,[e(Y),e(i.Z,{key:"bt2",attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" الغاء ")]),e(i.Z,{key:"bt3",attrs:{color:"blue darken-1",text:""},on:{click:t.addAds}},[t._v(" اضافة ")])],1)],1)],1)],1),e(m.ZB,{staticClass:"py-0"},[e(tt,{attrs:{dense:""}},[e(X.Zy,{attrs:{group:"","hide-on-leave":""}},t._l(t.adslist,(function(n,s){return e(nt,{key:n.key,attrs:{color:"blue-grey",small:"","pr-0":""}},[e(f,{attrs:{color:"blue-grey lighten-5",icon:"mdi-bullhorn-outline "}},[e(G.Z,[e("h2",{staticClass:"blue-grey--text text--darken-2 pt-4 pr-4"},[t._v(" "+t._s(n.title)+" ")]),e(Y),e(K,{attrs:{persistent:"","max-width":"600px","retain-focus":!1},scopedSlots:t._u([{key:"activator",fn:function({on:n,attrs:r}){return[e(i.Z,t._g(t._b({key:"bt4",staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"green lighten-3"},on:{click:function(e){return t.getAds(s)}}},"v-btn",r,!1),n),[e(H.Z,{attrs:{dark:""}},[t._v(" mdi-pencil ")])],1)]}}],null,!0),model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[e(p.Z,[e(m.EB,[e("span",{staticClass:"text-h5"},[t._v("تعديل الاعلان")])]),e(m.ZB,[e(y.Z,[e(G.Z,[e(g.Z,{attrs:{cols:"12"}},[e(J.Z,{key:"tx4",attrs:{label:"العنوان",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),e(g.Z,{attrs:{cols:"12"}},[e(J.Z,{key:"tx5",attrs:{label:"التفاصيل",required:""},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)],1)],1)],1),e(m.h7,[e(Y),e(i.Z,{key:"bt5",attrs:{color:"blue darken-1",text:""},on:{click:t.cancl}},[t._v(" رجوع ")]),e(i.Z,{key:"bt6",attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.edtAds(n.key)}}},[t._v(" تعديل ")])],1)],1)],1),e(i.Z,{key:"bt7",staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"red lighten-3"},on:{click:function(e){return t.deltAds(n.key)}}},[e(H.Z,{attrs:{dark:""}},[t._v(" mdi-delete ")])],1)],1),e(z,{staticClass:"blue-grey my-2 mt-5"}),e("p",{staticClass:"blue-grey--text"},[t._v(" "+t._s(n.desc)+" ")])],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)},it=[];n(9669);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rt=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&s+1<t.length&&56320===(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},ot=function(t){const e=[];let n=0,s=0;while(n<t.length){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(1023&c))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")},at={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const e=t[i],r=i+1<t.length,o=r?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),s.push(n[u],n[l],n[h],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ot(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],r=i<t.length,o=r?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(s.push(h),64!==c){const t=o<<4&240|c>>2;if(s.push(t),64!==l){const t=c<<6&192|l;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ct=function(t){const e=rt(t);return at.encodeByteArray(e,!0)},ut=function(t){return ct(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function dt(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function ft(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function pt(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function mt(){return ht().indexOf("Electron/")>=0}function gt(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yt(){return ht().indexOf("MSAppHost/")>=0}function vt(){return"object"===typeof indexedDB}function wt(){return new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Et="FirebaseError";class bt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Et,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tt.prototype.create)}}class Tt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?Ct(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`,a=new bt(s,o,n);return a}}function Ct(t,e){return t.replace(St,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}const St=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(_t(n)&&_t(r)){if(!At(n,r))return!1}else if(n!==r)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function _t(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function It(t){return t&&t._delegate?t._delegate:t}class Dt{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new lt;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),s=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(Ot(t))try{this.getOrInitializeService({instanceIdentifier:kt})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:s});n.resolve(t)}catch(e){}}}}clearInstance(t=kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=kt){return this.instances.has(t)}getOptions(t=kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&r.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(Cf){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:xt(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(Cf){}return n||null}normalizeInstanceIdentifier(t=kt){return this.component?this.component.multipleInstances?t:kt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function xt(t){return t===kt?void 0:t}function Ot(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Nt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lt=[];var Mt;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(Mt||(Mt={}));const Pt={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},Vt=Mt.INFO,Bt={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},Ft=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=Bt[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class Ut{constructor(t){this.name=t,this._logLevel=Vt,this._logHandler=Ft,this._userLogHandler=null,Lt.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?Pt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...t),this._logHandler(this,Mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...t),this._logHandler(this,Mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...t),this._logHandler(this,Mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...t),this._logHandler(this,Mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...t),this._logHandler(this,Mt.ERROR,...t)}}const $t=(t,e)=>e.some((e=>t instanceof e));let jt,qt;function Kt(){return jt||(jt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zt(){return qt||(qt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ht=new WeakMap,Gt=new WeakMap,Wt=new WeakMap,Qt=new WeakMap,Zt=new WeakMap;function Xt(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(se(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&Ht.set(e,t)})).catch((()=>{})),Zt.set(e,t),e}function Yt(t){if(Gt.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));Gt.set(t,e)}let Jt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Gt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Wt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return se(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function te(t){Jt=t(Jt)}function ee(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?zt().includes(t)?function(...e){return t.apply(ie(this),e),se(Ht.get(this))}:function(...e){return se(t.apply(ie(this),e))}:function(e,...n){const s=t.call(ie(this),e,...n);return Wt.set(s,e.sort?e.sort():[e]),se(s)}}function ne(t){return"function"===typeof t?ee(t):(t instanceof IDBTransaction&&Yt(t),$t(t,Kt())?new Proxy(t,Jt):t)}function se(t){if(t instanceof IDBRequest)return Xt(t);if(Qt.has(t))return Qt.get(t);const e=ne(t);return e!==t&&(Qt.set(t,e),Zt.set(e,t)),e}const ie=t=>Zt.get(t);function re(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=se(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(se(o.result),t.oldVersion,t.newVersion,se(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const oe=["get","getKey","getAll","getAllKeys","count"],ae=["put","add","delete","clear"],ce=new Map;function ue(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(ce.get(e))return ce.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ae.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!oe.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return ce.set(e,r),r}te((t=>({...t,get:(e,n,s)=>ue(e,n)||t.get(e,n,s),has:(e,n)=>!!ue(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(he(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function he(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const de="@firebase/app",fe="0.7.28",pe=new Ut("@firebase/app"),me="@firebase/app-compat",ge="@firebase/analytics-compat",ye="@firebase/analytics",ve="@firebase/app-check-compat",we="@firebase/app-check",Ee="@firebase/auth",be="@firebase/auth-compat",Te="@firebase/database",Ce="@firebase/database-compat",Se="@firebase/functions",Ae="@firebase/functions-compat",_e="@firebase/installations",Ie="@firebase/installations-compat",De="@firebase/messaging",ke="@firebase/messaging-compat",Ne="@firebase/performance",xe="@firebase/performance-compat",Oe="@firebase/remote-config",Re="@firebase/remote-config-compat",Le="@firebase/storage",Me="@firebase/storage-compat",Pe="@firebase/firestore",Ve="@firebase/firestore-compat",Be="firebase",Fe="9.9.0",Ue="[DEFAULT]",$e={[de]:"fire-core",[me]:"fire-core-compat",[ye]:"fire-analytics",[ge]:"fire-analytics-compat",[we]:"fire-app-check",[ve]:"fire-app-check-compat",[Ee]:"fire-auth",[be]:"fire-auth-compat",[Te]:"fire-rtdb",[Ce]:"fire-rtdb-compat",[Se]:"fire-fn",[Ae]:"fire-fn-compat",[_e]:"fire-iid",[Ie]:"fire-iid-compat",[De]:"fire-fcm",[ke]:"fire-fcm-compat",[Ne]:"fire-perf",[xe]:"fire-perf-compat",[Oe]:"fire-rc",[Re]:"fire-rc-compat",[Le]:"fire-gcs",[Me]:"fire-gcs-compat",[Pe]:"fire-fst",[Ve]:"fire-fst-compat","fire-js":"fire-js",[Be]:"fire-js-all"},je=new Map,qe=new Map;function Ke(t,e){try{t.container.addComponent(e)}catch(n){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ze(t){const e=t.name;if(qe.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;qe.set(e,t);for(const n of je.values())Ke(n,t);return!0}function He(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ge={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},We=new Tt("app","Firebase",Ge);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Dt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=Fe;function Xe(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:Ue,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!==typeof s||!s)throw We.create("bad-app-name",{appName:String(s)});const i=je.get(s);if(i){if(At(t,i.options)&&At(n,i.config))return i;throw We.create("duplicate-app",{appName:s})}const r=new Rt(s);for(const a of qe.values())r.addComponent(a);const o=new Qe(t,n,r);return je.set(s,o),o}function Ye(t=Ue){const e=je.get(t);if(!e)throw We.create("no-app",{appName:t});return e}function Je(t,e,n){var s;let i=null!==(s=$e[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void pe.warn(t.join(" "))}ze(new Dt(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tn="firebase-heartbeat-database",en=1,nn="firebase-heartbeat-store";let sn=null;function rn(){return sn||(sn=re(tn,en,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(nn)}}}).catch((t=>{throw We.create("storage-open",{originalErrorMessage:t.message})}))),sn}async function on(t){var e;try{const e=await rn();return e.transaction(nn).objectStore(nn).get(cn(t))}catch(n){throw We.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function an(t,e){var n;try{const n=await rn(),s=n.transaction(nn,"readwrite"),i=s.objectStore(nn);return await i.put(e,cn(t)),s.done}catch(s){throw We.create("storage-set",{originalErrorMessage:null===(n=s)||void 0===n?void 0:n.message})}}function cn(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=1024,ln=2592e6;class hn{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new pn(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=dn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=ln})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=dn(),{heartbeatsToSend:e,unsentEntries:n}=fn(this._heartbeatsCache.heartbeats),s=ut(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function dn(){const t=new Date;return t.toISOString().substring(0,10)}function fn(t,e=un){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),mn(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mn(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!vt()&&wt().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await on(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return an(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return an(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function mn(t){return ut(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){ze(new Dt("platform-logger",(t=>new le(t)),"PRIVATE")),ze(new Dt("heartbeat",(t=>new hn(t)),"PRIVATE")),Je(de,fe,t),Je(de,fe,"esm2017"),Je("fire-js","")}gn("");var yn="firebase",vn="9.9.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Je(yn,vn,"app");var wn,En="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},bn={},Tn=Tn||{},Cn=En||self;function Sn(){}function An(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function _n(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function In(t){return Object.prototype.hasOwnProperty.call(t,Dn)&&t[Dn]||(t[Dn]=++kn)}var Dn="closure_uid_"+(1e9*Math.random()>>>0),kn=0;function Nn(t,e,n){return t.call.apply(t.bind,arguments)}function xn(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function On(t,e,n){return On=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Nn:xn,On.apply(null,arguments)}function Rn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ln(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function Mn(){this.s=this.s,this.o=this.o}var Pn=0,Vn={};Mn.prototype.s=!1,Mn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=Pn)){var t=In(this);delete Vn[t]}},Mn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Fn=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function Un(t){t:{var e=so;const n=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function $n(t){return Array.prototype.concat.apply([],arguments)}function jn(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function qn(t){return/^[\s\xa0]*$/.test(t)}var Kn,zn=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Hn(t,e){return-1!=t.indexOf(e)}function Gn(t,e){return t<e?-1:t>e?1:0}t:{var Wn=Cn.navigator;if(Wn){var Qn=Wn.userAgent;if(Qn){Kn=Qn;break t}}Kn=""}function Zn(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Xn(t){const e={};for(const n in t)e[n]=t[n];return e}var Yn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jn(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<Yn.length;e++)n=Yn[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ts(t){return ts[" "](t),t}function es(t){var e=ps;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}ts[" "]=Sn;var ns,ss=Hn(Kn,"Opera"),is=Hn(Kn,"Trident")||Hn(Kn,"MSIE"),rs=Hn(Kn,"Edge"),os=rs||is,as=Hn(Kn,"Gecko")&&!(Hn(Kn.toLowerCase(),"webkit")&&!Hn(Kn,"Edge"))&&!(Hn(Kn,"Trident")||Hn(Kn,"MSIE"))&&!Hn(Kn,"Edge"),cs=Hn(Kn.toLowerCase(),"webkit")&&!Hn(Kn,"Edge");function us(){var t=Cn.document;return t?t.documentMode:void 0}t:{var ls="",hs=function(){var t=Kn;return as?/rv:([^\);]+)(\)|;)/.exec(t):rs?/Edge\/([\d\.]+)/.exec(t):is?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):cs?/WebKit\/(\S+)/.exec(t):ss?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(hs&&(ls=hs?hs[1]:""),is){var ds=us();if(null!=ds&&ds>parseFloat(ls)){ns=String(ds);break t}}ns=ls}var fs,ps={};function ms(){return es((function(){let t=0;const e=zn(String(ns)).split("."),n=zn("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=Gn(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||Gn(0==i[2].length,0==r[2].length)||Gn(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(Cn.document&&is){var gs=us();fs=gs||(parseInt(ns,10)||void 0)}else fs=void 0;var ys=fs,vs=function(){if(!Cn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Cn.addEventListener("test",Sn,e),Cn.removeEventListener("test",Sn,e)}catch(n){}return t}();function ws(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Es(t,e){if(ws.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(as){t:{try{ts(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:bs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Es.Z.h.call(this)}}ws.prototype.h=function(){this.defaultPrevented=!0},Ln(Es,ws);var bs={2:"touch",3:"pen",4:"mouse"};Es.prototype.h=function(){Es.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ts="closure_listenable_"+(1e6*Math.random()|0),Cs=0;function Ss(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++Cs,this.ca=this.fa=!1}function As(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function _s(t){this.src=t,this.g={},this.h=0}function Is(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=Bn(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(As(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Ds(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}_s.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Ds(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Ss(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};var ks="closure_lm_"+(1e6*Math.random()|0),Ns={};function xs(t,e,n,s,i){if(s&&s.once)return Ls(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)xs(t,e[r],n,s,i);return null}return n=$s(n),t&&t[Ts]?t.N(e,n,_n(s)?!!s.capture:!!s,i):Os(t,e,n,!1,s,i)}function Os(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=_n(i)?!!i.capture:!!i,a=Fs(t);if(a||(t[ks]=a=new _s(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Rs(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)vs||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Vs(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Rs(){function t(n){return e.call(t.src,t.listener,n)}var e=Bs;return t}function Ls(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ls(t,e[r],n,s,i);return null}return n=$s(n),t&&t[Ts]?t.O(e,n,_n(s)?!!s.capture:!!s,i):Os(t,e,n,!0,s,i)}function Ms(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ms(t,e[r],n,s,i);else s=_n(s)?!!s.capture:!!s,n=$s(n),t&&t[Ts]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Ds(r,n,s,i),-1<n&&(As(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Fs(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ds(e,n,s,i)),(n=-1<t?e[t]:null)&&Ps(n))}function Ps(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Ts])Is(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Vs(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Fs(e))?(Is(n,t),0==n.h&&(n.src=null,e[ks]=null)):As(t)}}}function Vs(t){return t in Ns?Ns[t]:Ns[t]="on"+t}function Bs(t,e){if(t.ca)t=!0;else{e=new Es(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Ps(t),t=n.call(s,e)}return t}function Fs(t){return t=t[ks],t instanceof _s?t:null}var Us="__closure_events_fn_"+(1e9*Math.random()>>>0);function $s(t){return"function"===typeof t?t:(t[Us]||(t[Us]=function(e){return t.handleEvent(e)}),t[Us])}function js(){Mn.call(this),this.i=new _s(this),this.P=this,this.I=null}function qs(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new ws(e,t);else if(e instanceof ws)e.target=e.target||t;else{var i=e;e=new ws(s,t),Jn(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Ks(o,s,!0,e)&&i}if(o=e.g=t,i=Ks(o,s,!0,e)&&i,i=Ks(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Ks(o,s,!1,e)&&i}function Ks(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Is(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}Ln(js,Mn),js.prototype[Ts]=!0,js.prototype.removeEventListener=function(t,e,n,s){Ms(this,t,e,n,s)},js.prototype.M=function(){if(js.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)As(n[s]);delete e.g[t],e.h--}}this.I=null},js.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},js.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var zs=Cn.JSON.stringify;function Hs(){var t=ei;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Gs{constructor(){this.h=this.g=null}add(t,e){const n=Qs.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Ws,Qs=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Zs),(t=>t.reset()));class Zs{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Xs(t){Cn.setTimeout((()=>{throw t}),0)}function Ys(t,e){Ws||Js(),ti||(Ws(),ti=!0),ei.add(t,e)}function Js(){var t=Cn.Promise.resolve(void 0);Ws=function(){t.then(ni)}}var ti=!1,ei=new Gs;function ni(){for(var t;t=Hs();){try{t.h.call(t.g)}catch(n){Xs(n)}var e=Qs;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ti=!1}function si(t,e){js.call(this),this.h=t||1,this.g=e||Cn,this.j=On(this.kb,this),this.l=Date.now()}function ii(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function ri(t,e,n){if("function"===typeof t)n&&(t=On(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=On(t.handleEvent,t)}return 2147483647<Number(e)?-1:Cn.setTimeout(t,e||0)}function oi(t){t.g=ri((()=>{t.g=null,t.i&&(t.i=!1,oi(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ln(si,js),wn=si.prototype,wn.da=!1,wn.S=null,wn.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),qs(this,"tick"),this.da&&(ii(this),this.start()))}},wn.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},wn.M=function(){si.Z.M.call(this),ii(this),delete this.g};class ai extends Mn{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:oi(this)}M(){super.M(),this.g&&(Cn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(t){Mn.call(this),this.h=t,this.g={}}Ln(ci,Mn);var ui=[];function li(t,e,n,s){Array.isArray(n)||(n&&(ui[0]=n.toString()),n=ui);for(var i=0;i<n.length;i++){var r=xs(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function hi(t){Zn(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ps(t)}),t),t.g={}}function di(){this.g=!0}function fi(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function pi(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function mi(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+yi(t,n)+(s?" "+s:"")}))}function gi(t,e){t.info((function(){return"TIMEOUT: "+e}))}function yi(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return zs(n)}catch(a){return e}}ci.prototype.M=function(){ci.Z.M.call(this),hi(this)},ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},di.prototype.Aa=function(){this.g=!1},di.prototype.info=function(){};var vi={},wi=null;function Ei(){return wi=wi||new js}function bi(t){ws.call(this,vi.Ma,t)}function Ti(t){const e=Ei();qs(e,new bi(e,t))}function Ci(t,e){ws.call(this,vi.STAT_EVENT,t),this.stat=e}function Si(t){const e=Ei();qs(e,new Ci(e,t))}function Ai(t,e){ws.call(this,vi.Na,t),this.size=e}function _i(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return Cn.setTimeout((function(){t()}),e)}vi.Ma="serverreachability",Ln(bi,ws),vi.STAT_EVENT="statevent",Ln(Ci,ws),vi.Na="timingevent",Ln(Ai,ws);var Ii={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Di={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ki(){}function Ni(t){return t.h||(t.h=t.i())}function xi(){}ki.prototype.h=null;var Oi,Ri={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Li(){ws.call(this,"d")}function Mi(){ws.call(this,"c")}function Pi(){}function Vi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new ci(this),this.P=Fi,t=os?125:void 0,this.W=new si(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Bi}function Bi(){this.i=null,this.g="",this.h=!1}Ln(Li,ws),Ln(Mi,ws),Ln(Pi,ki),Pi.prototype.g=function(){return new XMLHttpRequest},Pi.prototype.i=function(){return{}},Oi=new Pi;var Fi=45e3,Ui={},$i={};function ji(t,e,n){t.K=1,t.v=fr(ar(e)),t.s=n,t.U=!0,qi(t,null)}function qi(t,e){t.F=Date.now(),Gi(t),t.A=ar(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Dr(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Bi,t.g=Mo(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ai(On(t.Ia,t,t.g),t.O)),li(t.V,t.g,"readystatechange",t.gb),e=t.H?Xn(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ti(1),fi(t.j,t.u,t.A,t.m,t.X,t.s)}function Ki(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function zi(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=Hi(t,n),s==$i){4==e&&(t.o=4,Si(14),i=!1),mi(t.j,t.m,null,"[Incomplete Response]");break}if(s==Ui){t.o=4,Si(15),mi(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}mi(t.j,t.m,s,null),Yi(t,s)}Ki(t)&&s!=$i&&s!=Ui&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Si(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Io(e),e.L=!0,Si(11))):(mi(t.j,t.m,n,"[Invalid Chunked Response]"),Xi(t),Zi(t))}function Hi(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?$i:(n=Number(e.substring(n,s)),isNaN(n)?Ui:(s+=1,s+n>e.length?$i:(e=e.substr(s,n),t.C=s+n,e)))}function Gi(t){t.Y=Date.now()+t.P,Wi(t,t.P)}function Wi(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=_i(On(t.eb,t),e)}function Qi(t){t.B&&(Cn.clearTimeout(t.B),t.B=null)}function Zi(t){0==t.l.G||t.I||No(t.l,t)}function Xi(t){Qi(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,ii(t.W),hi(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Yi(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Pr(n.i,t)))if(n.I=t.N,!t.J&&Pr(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(u){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;ko(n),yo(n)}_o(n),Si(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=_i(On(n.ab,n),6e3));if(1>=Mr(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else Oo(n,11)}else if((t.J||n.g==t)&&ko(n),!qn(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(s=1.5*l,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(Hn(t,"spdy")||Hn(t,"quic")||Hn(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Vr(r,r.h),r.h=null))}if(s.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,dr(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Lo(s,s.H?s.la:null,s.W),o.J){Br(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Qi(a),Gi(a)),s.g=o}else Ao(s);0<n.l.length&&Eo(n)}else"stop"!=u[0]&&"close"!=u[0]||Oo(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Oo(n,7):go(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Ti(4)}catch(u){}}function Ji(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(An(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function tr(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(An(t)||"string"===typeof t)Fn(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(An(t)||"string"===typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Ji(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function er(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof er)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function nr(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];sr(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],sr(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function sr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}wn=Vi.prototype,wn.setTimeout=function(t){this.P=t},wn.gb=function(t){t=t.target;const e=this.L;e&&3==uo(t)?e.l():this.Ia(t)},wn.Ia=function(t){try{if(t==this.g)t:{const l=uo(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||os||this.g&&(this.h.h||this.g.ga()||lo(this.g)))){this.I||4!=l||7==e||Ti(8==e||0>=h?3:2),Qi(this);var n=this.g.ba();this.N=n;e:if(Ki(this)){var s=lo(this.g);t="";var i=s.length,r=4==uo(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Xi(this),Zi(this);var o="";break e}this.h.i=new Cn.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,pi(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qn(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Si(12),Xi(this),Zi(this);break t}mi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Yi(this,n)}this.U?(zi(this,l,o),os&&this.i&&3==l&&(li(this.V,this.W,"tick",this.fb),this.W.start())):(mi(this.j,this.m,o,null),Yi(this,o)),4==l&&Xi(this),this.i&&!this.I&&(4==l?No(this.l,this):(this.i=!1,Gi(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Si(12)):(this.o=0,Si(13)),Xi(this),Zi(this)}}}catch(l){}},wn.fb=function(){if(this.g){var t=uo(this.g),e=this.g.ga();this.C<e.length&&(Qi(this),zi(this,t,e),this.i&&4!=t&&Gi(this))}},wn.cancel=function(){this.I=!0,Xi(this)},wn.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gi(this.j,this.A),2!=this.K&&(Ti(3),Si(17)),Xi(this),this.o=2,Zi(this)):Wi(this,this.Y-t)},wn=er.prototype,wn.R=function(){nr(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},wn.T=function(){return nr(this),this.g.concat()},wn.get=function(t,e){return sr(this.h,t)?this.h[t]:e},wn.set=function(t,e){sr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},wn.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var ir=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function rr(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function or(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof or){this.g=void 0!==e?e:t.g,cr(this,t.j),this.s=t.s,ur(this,t.i),lr(this,t.m),this.l=t.l,e=t.h;var n=new Sr;n.i=e.i,e.g&&(n.g=new er(e.g),n.h=e.h),hr(this,n),this.o=t.o}else t&&(n=String(t).match(ir))?(this.g=!!e,cr(this,n[1]||"",!0),this.s=gr(n[2]||""),ur(this,n[3]||"",!0),lr(this,n[4]),this.l=gr(n[5]||"",!0),hr(this,n[6]||"",!0),this.o=gr(n[7]||"")):(this.g=!!e,this.h=new Sr(null,this.g))}function ar(t){return new or(t)}function cr(t,e,n){t.j=n?gr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ur(t,e,n){t.i=n?gr(e,!0):e}function lr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hr(t,e,n){e instanceof Sr?(t.h=e,Nr(t.h,t.g)):(n||(e=yr(e,Tr)),t.h=new Sr(e,t.g))}function dr(t,e,n){t.h.set(e,n)}function fr(t){return dr(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pr(t){return t instanceof or?ar(t):new or(t,void 0)}function mr(t,e,n,s){var i=new or(null,void 0);return t&&cr(i,t),e&&ur(i,e),n&&lr(i,n),s&&(i.l=s),i}function gr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yr(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,vr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}or.prototype.toString=function(){var t=[],e=this.j;e&&t.push(yr(e,wr,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(yr(e,wr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(yr(n,"/"==n.charAt(0)?br:Er,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",yr(n,Cr)),t.join("")};var wr=/[#\/\?@]/g,Er=/[#\?:]/g,br=/[#\?]/g,Tr=/[#\?@]/g,Cr=/#/g;function Sr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ar(t){t.g||(t.g=new er,t.h=0,t.i&&rr(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function _r(t,e){Ar(t),e=kr(t,e),sr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,sr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&nr(t)))}function Ir(t,e){return Ar(t),e=kr(t,e),sr(t.g.h,e)}function Dr(t,e,n){_r(t,e),0<n.length&&(t.i=null,t.g.set(kr(t,e),jn(n)),t.h+=n.length)}function kr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Nr(t,e){e&&!t.j&&(Ar(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(_r(this,e),Dr(this,n,t))}),t)),t.j=e}wn=Sr.prototype,wn.add=function(t,e){Ar(this),this.i=null,t=kr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},wn.forEach=function(t,e){Ar(this),this.g.forEach((function(n,s){Fn(n,(function(n){t.call(e,n,s,this)}),this)}),this)},wn.T=function(){Ar(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},wn.R=function(t){Ar(this);var e=[];if("string"===typeof t)Ir(this,t)&&(e=$n(e,this.g.get(kr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=$n(e,t[n])}return e},wn.set=function(t,e){return Ar(this),this.i=null,t=kr(this,t),Ir(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},wn.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},wn.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};var xr=class{constructor(t,e){this.h=t,this.g=e}};function Or(t){this.l=t||Rr,Cn.PerformanceNavigationTiming?(t=Cn.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(Cn.g&&Cn.g.Ea&&Cn.g.Ea()&&Cn.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Rr=10;function Lr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Mr(t){return t.h?1:t.g?t.g.size:0}function Pr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Vr(t,e){t.g?t.g.add(e):t.h=e}function Br(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Fr(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return jn(t.i)}function Ur(){}function $r(){this.g=new Ur}function jr(t,e,n){const s=n||"";try{tr(t,(function(t,n){let i=t;_n(t)&&(i=zs(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function qr(t,e){const n=new di;if(Cn.Image){const s=new Image;s.onload=Rn(Kr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Rn(Kr,n,s,"TestLoadImage: error",!1,e),s.onabort=Rn(Kr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Rn(Kr,n,s,"TestLoadImage: timeout",!1,e),Cn.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function Kr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function zr(t){this.l=t.$b||null,this.j=t.ib||!1}function Hr(t,e){js.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Gr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Or.prototype.cancel=function(){if(this.i=Fr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ur.prototype.stringify=function(t){return Cn.JSON.stringify(t,void 0)},Ur.prototype.parse=function(t){return Cn.JSON.parse(t,void 0)},Ln(zr,ki),zr.prototype.g=function(){return new Hr(this.l,this.j)},zr.prototype.i=function(t){return function(){return t}}({}),Ln(Hr,js);var Gr=0;function Wr(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Qr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Zr(t)}function Zr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}wn=Hr.prototype,wn.open=function(t,e){if(this.readyState!=Gr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Zr(this)},wn.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Cn).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},wn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Qr(this)),this.readyState=Gr},wn.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Zr(this)),this.g&&(this.readyState=3,Zr(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof Cn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wr(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},wn.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qr(this):Zr(this),3==this.readyState&&Wr(this)}},wn.Ua=function(t){this.g&&(this.response=this.responseText=t,Qr(this))},wn.Ta=function(t){this.g&&(this.response=t,Qr(this))},wn.ha=function(){this.g&&Qr(this)},wn.setRequestHeader=function(t,e){this.v.append(t,e)},wn.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},wn.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Hr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Xr=Cn.JSON.parse;function Yr(t){js.call(this),this.headers=new er,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jr,this.K=this.L=!1}Ln(Yr,js);var Jr="",to=/^https?$/i,eo=["POST","PUT"];function no(t){return is&&ms()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function so(t){return"content-type"==t.toLowerCase()}function io(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ro(t),ao(t)}function ro(t){t.D||(t.D=!0,qs(t,"complete"),qs(t,"error"))}function oo(t){if(t.h&&"undefined"!=typeof Tn&&(!t.C[1]||4!=uo(t)||2!=t.ba()))if(t.v&&4==uo(t))ri(t.Fa,0,t);else if(qs(t,"readystatechange"),4==uo(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===c){var i=String(t.H).match(ir)[1]||null;if(!i&&Cn.self&&Cn.self.location){var r=Cn.self.location.protocol;i=r.substr(0,r.length-1)}s=!to.test(i?i.toLowerCase():"")}n=s}if(n)qs(t,"complete"),qs(t,"success");else{t.m=6;try{var o=2<uo(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",ro(t)}}finally{ao(t)}}}function ao(t,e){if(t.g){co(t);const s=t.g,i=t.C[0]?Sn:null;t.g=null,t.C=null,e||qs(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function co(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Cn.clearTimeout(t.A),t.A=null)}function uo(t){return t.g?t.g.readyState:0}function lo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Jr:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ho(t){let e="";return Zn(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function fo(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=ho(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):dr(t,e,n))}function po(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mo(t){this.za=0,this.l=[],this.h=new di,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=po("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=po("baseRetryDelayMs",5e3,t),this.$a=po("retryDelaySeedMs",1e4,t),this.Ya=po("forwardChannelMaxRetries",2,t),this.ra=po("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Or(t&&t.concurrentRequestLimit),this.Ca=new $r,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function go(t){if(vo(t),3==t.G){var e=t.V++,n=ar(t.F);dr(n,"SID",t.J),dr(n,"RID",e),dr(n,"TYPE","terminate"),Co(t,n),e=new Vi(t,t.h,e,void 0),e.K=2,e.v=fr(ar(n)),n=!1,Cn.navigator&&Cn.navigator.sendBeacon&&(n=Cn.navigator.sendBeacon(e.v.toString(),"")),!n&&Cn.Image&&((new Image).src=e.v,n=!0),n||(e.g=Mo(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Gi(e)}Ro(t)}function yo(t){t.g&&(Io(t),t.g.cancel(),t.g=null)}function vo(t){yo(t),t.u&&(Cn.clearTimeout(t.u),t.u=null),ko(t),t.i.cancel(),t.m&&("number"===typeof t.m&&Cn.clearTimeout(t.m),t.m=null)}function wo(t,e){t.l.push(new xr(t.Za++,e)),3==t.G&&Eo(t)}function Eo(t){Lr(t.i)||t.m||(t.m=!0,Ys(t.Ha,t),t.C=0)}function bo(t,e){return!(Mr(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=_i(On(t.Ha,t,e),xo(t,t.C)),t.C++,!0))}function To(t,e){var n;n=e?e.m:t.V++;const s=ar(t.F);dr(s,"SID",t.J),dr(s,"RID",n),dr(s,"AID",t.U),Co(t,s),t.o&&t.s&&fo(s,t.o,t.s),n=new Vi(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=So(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Vr(t.i,n),ji(n,s,e)}function Co(t,e){t.j&&tr({},(function(t,n){dr(e,n,t)}))}function So(t,e,n){n=Math.min(t.l.length,n);var s=t.j?On(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{jr(a,t,"req"+n+"_")}catch(ua){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function Ao(t){t.g||t.u||(t.Y=1,Ys(t.Ga,t),t.A=0)}function _o(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=_i(On(t.Ga,t),xo(t,t.A)),t.A++,!0)}function Io(t){null!=t.B&&(Cn.clearTimeout(t.B),t.B=null)}function Do(t){t.g=new Vi(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=ar(t.oa);dr(e,"RID","rpc"),dr(e,"SID",t.J),dr(e,"CI",t.N?"0":"1"),dr(e,"AID",t.U),Co(t,e),dr(e,"TYPE","xmlhttp"),t.o&&t.s&&fo(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=fr(ar(e)),n.s=null,n.U=!0,qi(n,t)}function ko(t){null!=t.v&&(Cn.clearTimeout(t.v),t.v=null)}function No(t,e){var n=null;if(t.g==e){ko(t),Io(t),t.g=null;var s=2}else{if(!Pr(t.i,e))return;n=e.D,Br(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Ei(),qs(s,new Ai(s,n,e,i)),Eo(t)}else Ao(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==s&&bo(t,e)||2==s&&_o(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Oo(t,5);break;case 4:Oo(t,10);break;case 3:Oo(t,6);break;default:Oo(t,2)}}function xo(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Oo(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=On(t.jb,t);n||(n=new or("//www.google.com/images/cleardot.gif"),Cn.location&&"http"==Cn.location.protocol||cr(n,"https"),fr(n)),qr(n.toString(),s)}else Si(2);t.G=0,t.j&&t.j.va(e),Ro(t),vo(t)}function Ro(t){t.G=0,t.I=-1,t.j&&(0==Fr(t.i).length&&0==t.l.length||(t.i.i.length=0,jn(t.l),t.l.length=0),t.j.ua())}function Lo(t,e,n){let s=pr(n);if(""!=s.i)e&&ur(s,e+"."+s.i),lr(s,s.m);else{const t=Cn.location;s=mr(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Zn(t.aa,(function(t,e){dr(s,e,t)})),e=t.D,n=t.sa,e&&n&&dr(s,e,n),dr(s,"VER",t.ma),Co(t,s),s}function Mo(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Yr(new zr({ib:!0})):new Yr(t.qa),e.L=t.H,e}function Po(){}function Vo(){if(is&&!(10<=Number(ys)))throw Error("Environmental error: no available transport.")}function Bo(t,e){js.call(this),this.g=new mo(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!qn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qn(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $o(this)}function Fo(t){Li.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Uo(){Mi.call(this),this.status=1}function $o(t){this.g=t}wn=Yr.prototype,wn.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Oi.g(),this.C=this.u?Ni(this.u):Ni(Oi),this.g.onreadystatechange=On(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void io(this,r)}t=n||"";const i=new er(this.headers);s&&tr(s,(function(t,e){i.set(e,t)})),s=Un(i.T()),n=Cn.FormData&&t instanceof Cn.FormData,!(0<=Bn(eo,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{co(this),0<this.B&&((this.K=no(this.g))?(this.g.timeout=this.B,this.g.ontimeout=On(this.pa,this)):this.A=ri(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){io(this,r)}},wn.pa=function(){"undefined"!=typeof Tn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qs(this,"timeout"),this.abort(8))},wn.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qs(this,"complete"),qs(this,"abort"),ao(this))},wn.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ao(this,!0)),Yr.Z.M.call(this)},wn.Fa=function(){this.s||(this.F||this.v||this.l?oo(this):this.cb())},wn.cb=function(){oo(this)},wn.ba=function(){try{return 2<uo(this)?this.g.status:-1}catch(t){return-1}},wn.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},wn.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Xr(e)}},wn.Da=function(){return this.m},wn.La=function(){return"string"===typeof this.j?this.j:String(this.j)},wn=mo.prototype,wn.ma=8,wn.G=1,wn.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},wn.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Vi(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Xn(r),Jn(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=So(this,i,e),n=ar(this.F),dr(n,"RID",t),dr(n,"CVER",22),this.D&&dr(n,"X-HTTP-Session-Id",this.D),Co(this,n),this.o&&r&&fo(n,this.o,r),Vr(this.i,i),this.Ra&&dr(n,"TYPE","init"),this.ja?(dr(n,"$req",e),dr(n,"SID","null"),i.$=!0,ji(i,n,null)):ji(i,n,e),this.G=2}}else 3==this.G&&(t?To(this,t):0==this.l.length||Lr(this.i)||To(this))},wn.Ga=function(){if(this.u=null,Do(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=_i(On(this.bb,this),t)}},wn.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Si(10),yo(this),Do(this))},wn.ab=function(){null!=this.v&&(this.v=null,yo(this),_o(this),Si(19))},wn.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Si(2)):(this.h.info("Failed to ping google.com"),Si(1))},wn=Po.prototype,wn.xa=function(){},wn.wa=function(){},wn.va=function(){},wn.ua=function(){},wn.Oa=function(){},Vo.prototype.g=function(t,e){return new Bo(t,e)},Ln(Bo,js),Bo.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ys(On(t.hb,t,e))),Si(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Lo(t,null,t.W),Eo(t)},Bo.prototype.close=function(){go(this.g)},Bo.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,wo(this.g,e)}else this.v?(e={},e.__data__=zs(t),wo(this.g,e)):wo(this.g,t)},Bo.prototype.M=function(){this.g.j=null,delete this.j,go(this.g),delete this.g,Bo.Z.M.call(this)},Ln(Fo,Li),Ln(Uo,Mi),Ln($o,Po),$o.prototype.xa=function(){qs(this.g,"a")},$o.prototype.wa=function(t){qs(this.g,new Fo(t))},$o.prototype.va=function(t){qs(this.g,new Uo(t))},$o.prototype.ua=function(){qs(this.g,"b")},Vo.prototype.createWebChannel=Vo.prototype.g,Bo.prototype.send=Bo.prototype.u,Bo.prototype.open=Bo.prototype.m,Bo.prototype.close=Bo.prototype.close,Ii.NO_ERROR=0,Ii.TIMEOUT=8,Ii.HTTP_ERROR=6,Di.COMPLETE="complete",xi.EventType=Ri,Ri.OPEN="a",Ri.CLOSE="b",Ri.ERROR="c",Ri.MESSAGE="d",js.prototype.listen=js.prototype.N,Yr.prototype.listenOnce=Yr.prototype.O,Yr.prototype.getLastError=Yr.prototype.La,Yr.prototype.getLastErrorCode=Yr.prototype.Da,Yr.prototype.getStatus=Yr.prototype.ba,Yr.prototype.getResponseJson=Yr.prototype.Qa,Yr.prototype.getResponseText=Yr.prototype.ga,Yr.prototype.send=Yr.prototype.ea;var jo=bn.createWebChannelTransport=function(){return new Vo},qo=bn.getStatEventTarget=function(){return Ei()},Ko=bn.ErrorCode=Ii,zo=bn.EventType=Di,Ho=bn.Event=vi,Go=bn.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Wo=bn.FetchXmlHttpFactory=zr,Qo=bn.WebChannel=xi,Zo=bn.XhrIo=Yr;const Xo="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Yo.UNAUTHENTICATED=new Yo(null),Yo.GOOGLE_CREDENTIALS=new Yo("google-credentials-uid"),Yo.FIRST_PARTY=new Yo("first-party-uid"),Yo.MOCK_USER=new Yo("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Jo="9.9.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Ut("@firebase/firestore");function ea(){return ta.logLevel}function na(t,...e){if(ta.logLevel<=Mt.DEBUG){const n=e.map(ra);ta.debug(`Firestore (${Jo}): ${t}`,...n)}}function sa(t,...e){if(ta.logLevel<=Mt.ERROR){const n=e.map(ra);ta.error(`Firestore (${Jo}): ${t}`,...n)}}function ia(t,...e){if(ta.logLevel<=Mt.WARN){const n=e.map(ra);ta.warn(`Firestore (${Jo}): ${t}`,...n)}}function ra(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t="Unexpected state"){const e=`FIRESTORE (${Jo}) INTERNAL ASSERTION FAILED: `+t;throw sa(e),new Error(e)}function aa(t,e){t||oa()}function ca(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class la extends bt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Yo.UNAUTHENTICATED)))}shutdown(){}}class pa{constructor(t){this.t=t,this.currentUser=Yo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ha;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ha,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{na("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(na("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ha)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(na("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(aa("string"==typeof e.accessToken),new da(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return aa(null===t||"string"==typeof t),new Yo(t)}}class ma{constructor(t,e,n){this.type="FirstParty",this.user=Yo.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ga{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ma(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Yo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ya{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class va{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&na("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,na("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{na("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):na("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(aa("string"==typeof t.token),this.p=t.token,new ya(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wa(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=wa(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function ba(t,e){return t<e?-1:t>e?1:0}function Ta(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ca{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new la(ua.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new la(ua.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new la(ua.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new la(ua.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ca.fromMillis(Date.now())}static fromDate(t){return Ca.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ca(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ba(this.nanoseconds,t.nanoseconds):ba(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Sa(t)}static min(){return new Sa(new Ca(0,0))}static max(){return new Sa(new Ca(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e,n){void 0===e?e=0:e>t.length&&oa(),void 0===n?n=t.length-e:n>t.length-e&&oa(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Aa.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Aa?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class _a extends Aa{construct(t,e,n){return new _a(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new la(ua.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new _a(e)}static emptyPath(){return new _a([])}}const Ia=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Da extends Aa{construct(t,e,n){return new Da(t,e,n)}static isValidIdentifier(t){return Ia.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Da.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Da(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new la(ua.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new la(ua.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new la(ua.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new la(ua.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Da(e)}static emptyPath(){return new Da([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t){this.path=t}static fromPath(t){return new ka(_a.fromString(t))}static fromName(t){return new ka(_a.fromString(t).popFirst(5))}static empty(){return new ka(_a.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===_a.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return _a.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ka(new _a(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}Na.UNKNOWN_ID=-1;function xa(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Sa.fromTimestamp(1e9===s?new Ca(n+1,0):new Ca(n,s));return new Ra(i,ka.empty(),e)}function Oa(t){return new Ra(t.readTime,t.key,-1)}class Ra{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ra(Sa.min(),ka.empty(),-1)}static max(){return new Ra(Sa.max(),ka.empty(),-1)}}function La(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ka.comparator(t.documentKey,e.documentKey),0!==n?n:ba(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(t){if(t.code!==ua.FAILED_PRECONDITION||t.message!==Ma)throw t;na("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&oa(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ba(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ba?e:Ba.resolve(e)}catch(t){return Ba.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ba.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ba.reject(e)}static resolve(t){return new Ba(((e,n)=>{e(t)}))}static reject(t){return new Ba(((e,n)=>{n(t)}))}static waitFor(t){return new Ba(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Ba.resolve(!1);for(const n of t)e=e.next((t=>t?Ba.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Ba(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new Ba(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ja(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ua.ot=-1;class Ka{constructor(t,e){this.comparator=t,this.root=e||Ha.EMPTY}insert(t,e){return new Ka(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ha.BLACK,null,null))}remove(t){return new Ka(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ha.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new za(this.root,t,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new za(this.root,t,this.comparator,!0)}}class za{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ha{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Ha.RED,this.left=null!=s?s:Ha.EMPTY,this.right=null!=i?i:Ha.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Ha(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ha.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ha.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ha.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ha.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oa();if(this.right.isRed())throw oa();const t=this.left.check();if(t!==this.right.check())throw oa();return t+(this.isRed()?0:1)}}Ha.EMPTY=null,Ha.RED=!0,Ha.BLACK=!1,Ha.EMPTY=new class{constructor(){this.size=0}get key(){throw oa()}get value(){throw oa()}get color(){throw oa()}get left(){throw oa()}get right(){throw oa()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ha(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{constructor(t){this.comparator=t,this.data=new Ka(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Wa(this.data.getIterator())}getIteratorFrom(t){return new Wa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ga))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ga(this.comparator);return e.data=t,e}}class Wa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(t){this.fields=t,t.sort(Da.comparator)}static empty(){return new Qa([])}unionWith(t){let e=new Ga(Da.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Qa(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ta(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Za{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Za(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Za(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ba(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Za.EMPTY_BYTE_STRING=new Za("");const Xa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ya(t){if(aa(!!t),"string"==typeof t){let e=0;const n=Xa.exec(t);if(aa(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ja(t.seconds),nanos:Ja(t.nanos)}}function Ja(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function tc(t){return"string"==typeof t?Za.fromBase64String(t):Za.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function nc(t){const e=t.mapValue.fields.__previous_value__;return ec(e)?nc(e):e}function sc(t){const e=Ya(t.mapValue.fields.__local_write_time__.timestampValue);return new Ca(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class rc{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new rc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof rc&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t){return null==t}function ac(t){return 0===t&&1/t==-1/0}function cc(t){return"number"==typeof t&&Number.isInteger(t)&&!ac(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function lc(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ec(t)?4:Cc(t)?9007199254740991:10:oa()}function hc(t,e){if(t===e)return!0;const n=lc(t);if(n!==lc(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sc(t).isEqual(sc(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ya(t.timestampValue),s=Ya(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return tc(t.bytesValue).isEqual(tc(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ja(t.geoPointValue.latitude)===Ja(e.geoPointValue.latitude)&&Ja(t.geoPointValue.longitude)===Ja(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ja(t.integerValue)===Ja(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ja(t.doubleValue),s=Ja(e.doubleValue);return n===s?ac(n)===ac(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Ta(t.arrayValue.values||[],e.arrayValue.values||[],hc);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if($a(n)!==$a(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!hc(n[i],s[i])))return!1;return!0}(t,e);default:return oa()}}function dc(t,e){return void 0!==(t.values||[]).find((t=>hc(t,e)))}function fc(t,e){if(t===e)return 0;const n=lc(t),s=lc(e);if(n!==s)return ba(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ba(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ja(t.integerValue||t.doubleValue),s=Ja(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return pc(t.timestampValue,e.timestampValue);case 4:return pc(sc(t),sc(e));case 5:return ba(t.stringValue,e.stringValue);case 6:return function(t,e){const n=tc(t),s=tc(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=ba(n[i],s[i]);if(0!==t)return t}return ba(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ba(Ja(t.latitude),Ja(e.latitude));return 0!==n?n:ba(Ja(t.longitude),Ja(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=fc(n[i],s[i]);if(t)return t}return ba(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===uc.mapValue&&e===uc.mapValue)return 0;if(t===uc.mapValue)return 1;if(e===uc.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=ba(s[o],r[o]);if(0!==t)return t;const e=fc(n[s[o]],i[r[o]]);if(0!==e)return e}return ba(s.length,r.length)}(t.mapValue,e.mapValue);default:throw oa()}}function pc(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ba(t,e);const n=Ya(t),s=Ya(e),i=ba(n.seconds,s.seconds);return 0!==i?i:ba(n.nanos,s.nanos)}function mc(t){return gc(t)}function gc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ya(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?tc(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ka.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=gc(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${gc(t.fields[i])}`;return n+"}"}(t.mapValue):oa();var e,n}function yc(t){return!!t&&"integerValue"in t}function vc(t){return!!t&&"arrayValue"in t}function wc(t){return!!t&&"nullValue"in t}function Ec(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bc(t){return!!t&&"mapValue"in t}function Tc(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ja(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Tc(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tc(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Cc(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(t){this.value=t}static empty(){return new Sc({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!bc(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Tc(e)}setAll(t){let e=Da.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Tc(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());bc(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return hc(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];bc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){ja(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new Sc(Tc(this.value))}}function Ac(t){const e=[];return ja(t.fields,((t,n)=>{const s=new Da([t]);if(bc(n)){const t=Ac(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Qa(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class _c{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new _c(t,0,Sa.min(),Sa.min(),Sc.empty(),0)}static newFoundDocument(t,e,n){return new _c(t,1,e,Sa.min(),n,0)}static newNoDocument(t,e){return new _c(t,2,e,Sa.min(),Sc.empty(),0)}static newUnknownDocument(t,e){return new _c(t,3,e,Sa.min(),Sc.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Sc.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Sc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Sa.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof _c&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _c(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ut=null}}function Dc(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Ic(t,e,n,s,i,r,o)}function kc(t){const e=ca(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+mc(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),oc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>mc(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>mc(t))).join(",")),e.ut=t}return e.ut}function Nc(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${mc(e.value)}`;var e})).join(", ")}]`),oc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>mc(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>mc(t))).join(",")),`Target(${e})`}function xc(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Kc(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!hc(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hc(t.startAt,e.startAt)&&Hc(t.endAt,e.endAt)}function Oc(t){return ka.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Rc extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Lc(t,e,n):"array-contains"===e?new Bc(t,n):"in"===e?new Fc(t,n):"not-in"===e?new Uc(t,n):"array-contains-any"===e?new $c(t,n):new Rc(t,e,n)}static ct(t,e,n){return"in"===e?new Mc(t,n):new Pc(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(fc(e,this.value)):null!==e&&lc(this.value)===lc(e)&&this.at(fc(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return oa()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Lc extends Rc{constructor(t,e,n){super(t,e,n),this.key=ka.fromName(n.referenceValue)}matches(t){const e=ka.comparator(t.key,this.key);return this.at(e)}}class Mc extends Rc{constructor(t,e){super(t,"in",e),this.keys=Vc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Pc extends Rc{constructor(t,e){super(t,"not-in",e),this.keys=Vc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Vc(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ka.fromName(t.referenceValue)))}class Bc extends Rc{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return vc(e)&&dc(e.arrayValue,this.value)}}class Fc extends Rc{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&dc(this.value.arrayValue,e)}}class Uc extends Rc{constructor(t,e){super(t,"not-in",e)}matches(t){if(dc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!dc(this.value.arrayValue,e)}}class $c extends Rc{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!vc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>dc(this.value.arrayValue,t)))}}class jc{constructor(t,e){this.position=t,this.inclusive=e}}class qc{constructor(t,e="asc"){this.field=t,this.dir=e}}function Kc(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function zc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?ka.comparator(ka.fromName(o.referenceValue),n.key):fc(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Hc(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hc(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Wc(t,e,n,s,i,r,o,a){return new Gc(t,e,n,s,i,r,o,a)}function Qc(t){return new Gc(t)}function Zc(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Xc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Yc(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Jc(t){return null!==t.collectionGroup}function tu(t){const e=ca(t);if(null===e.lt){e.lt=[];const t=Yc(e),n=Xc(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new qc(t)),e.lt.push(new qc(Da.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new qc(Da.keyField(),t))}}}return e.lt}function eu(t){const e=ca(t);if(!e.ft)if("F"===e.limitType)e.ft=Dc(e.path,e.collectionGroup,tu(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of tu(e)){const e="desc"===i.dir?"asc":"desc";t.push(new qc(i.field,e))}const n=e.endAt?new jc(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new jc(e.startAt.position,e.startAt.inclusive):null;e.ft=Dc(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.ft}function nu(t,e,n){return new Gc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function su(t,e){return xc(eu(t),eu(e))&&t.limitType===e.limitType}function iu(t){return`${kc(eu(t))}|lt:${t.limitType}`}function ru(t){return`Query(target=${Nc(eu(t))}; limitType=${t.limitType})`}function ou(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ka.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=zc(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,tu(t),e))&&!(t.endAt&&!function(t,e,n){const s=zc(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,tu(t),e))}(t,e)}function au(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cu(t){return(e,n)=>{let s=!1;for(const i of tu(t)){const t=uu(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function uu(t,e,n){const s=t.field.isKeyField()?ka.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?fc(s,i):oa()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return oa()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ac(e)?"-0":e}}function hu(t){return{integerValue:""+t}}function du(t,e){return cc(e)?hu(e):lu(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this._=void 0}}function pu(t,e,n){return t instanceof yu?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof vu?wu(t,e):t instanceof Eu?bu(t,e):function(t,e){const n=gu(t,e),s=Cu(n)+Cu(t._t);return yc(n)&&yc(t._t)?hu(s):lu(t.wt,s)}(t,e)}function mu(t,e,n){return t instanceof vu?wu(t,e):t instanceof Eu?bu(t,e):n}function gu(t,e){return t instanceof Tu?yc(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class yu extends fu{}class vu extends fu{constructor(t){super(),this.elements=t}}function wu(t,e){const n=Su(e);for(const s of t.elements)n.some((t=>hc(t,s)))||n.push(s);return{arrayValue:{values:n}}}class Eu extends fu{constructor(t){super(),this.elements=t}}function bu(t,e){let n=Su(e);for(const s of t.elements)n=n.filter((t=>!hc(t,s)));return{arrayValue:{values:n}}}class Tu extends fu{constructor(t,e){super(),this.wt=t,this._t=e}}function Cu(t){return Ja(t.integerValue||t.doubleValue)}function Su(t){return vc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof vu&&e instanceof vu||t instanceof Eu&&e instanceof Eu?Ta(t.elements,e.elements,hc):t instanceof Tu&&e instanceof Tu?hc(t._t,e._t):t instanceof yu&&e instanceof yu}(t.transform,e.transform)}class _u{constructor(t,e){this.version=t,this.transformResults=e}}class Iu{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Iu}static exists(t){return new Iu(void 0,t)}static updateTime(t){return new Iu(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Du(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ku{}function Nu(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Uu(t.key,Iu.none()):new Mu(t.key,t.data,Iu.none());{const n=t.data,s=Sc.empty();let i=new Ga(Da.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Pu(t.key,s,new Qa(i.toArray()),Iu.none())}}function xu(t,e,n){t instanceof Mu?function(t,e,n){const s=t.value.clone(),i=Bu(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Pu?function(t,e,n){if(!Du(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Bu(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Vu(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ou(t,e,n,s){return t instanceof Mu?function(t,e,n,s){if(!Du(t.precondition,e))return n;const i=t.value.clone(),r=Fu(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Pu?function(t,e,n,s){if(!Du(t.precondition,e))return n;const i=Fu(t.fieldTransforms,s,e),r=e.data;return r.setAll(Vu(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Du(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ru(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=gu(s.transform,t||null);null!=i&&(null===n&&(n=Sc.empty()),n.set(s.field,i))}return n||null}function Lu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ta(t,e,((t,e)=>Au(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mu extends ku{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pu extends ku{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vu(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Bu(t,e,n){const s=new Map;aa(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,mu(o,a,n[i]))}return s}function Fu(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,pu(t,r,e))}return s}class Uu extends ku{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $u extends ku{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qu,Ku;function zu(t){switch(t){default:return oa();case ua.CANCELLED:case ua.UNKNOWN:case ua.DEADLINE_EXCEEDED:case ua.RESOURCE_EXHAUSTED:case ua.INTERNAL:case ua.UNAVAILABLE:case ua.UNAUTHENTICATED:return!1;case ua.INVALID_ARGUMENT:case ua.NOT_FOUND:case ua.ALREADY_EXISTS:case ua.PERMISSION_DENIED:case ua.FAILED_PRECONDITION:case ua.ABORTED:case ua.OUT_OF_RANGE:case ua.UNIMPLEMENTED:case ua.DATA_LOSS:return!0}}function Hu(t){if(void 0===t)return sa("GRPC error has no .code"),ua.UNKNOWN;switch(t){case qu.OK:return ua.OK;case qu.CANCELLED:return ua.CANCELLED;case qu.UNKNOWN:return ua.UNKNOWN;case qu.DEADLINE_EXCEEDED:return ua.DEADLINE_EXCEEDED;case qu.RESOURCE_EXHAUSTED:return ua.RESOURCE_EXHAUSTED;case qu.INTERNAL:return ua.INTERNAL;case qu.UNAVAILABLE:return ua.UNAVAILABLE;case qu.UNAUTHENTICATED:return ua.UNAUTHENTICATED;case qu.INVALID_ARGUMENT:return ua.INVALID_ARGUMENT;case qu.NOT_FOUND:return ua.NOT_FOUND;case qu.ALREADY_EXISTS:return ua.ALREADY_EXISTS;case qu.PERMISSION_DENIED:return ua.PERMISSION_DENIED;case qu.FAILED_PRECONDITION:return ua.FAILED_PRECONDITION;case qu.ABORTED:return ua.ABORTED;case qu.OUT_OF_RANGE:return ua.OUT_OF_RANGE;case qu.UNIMPLEMENTED:return ua.UNIMPLEMENTED;case qu.DATA_LOSS:return ua.DATA_LOSS;default:return oa()}}(Ku=qu||(qu={}))[Ku.OK=0]="OK",Ku[Ku.CANCELLED=1]="CANCELLED",Ku[Ku.UNKNOWN=2]="UNKNOWN",Ku[Ku.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ku[Ku.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ku[Ku.NOT_FOUND=5]="NOT_FOUND",Ku[Ku.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ku[Ku.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ku[Ku.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ku[Ku.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ku[Ku.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ku[Ku.ABORTED=10]="ABORTED",Ku[Ku.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ku[Ku.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ku[Ku.INTERNAL=13]="INTERNAL",Ku[Ku.UNAVAILABLE=14]="UNAVAILABLE",Ku[Ku.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gu{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ja(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return qa(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Ka(ka.comparator);function Qu(){return Wu}const Zu=new Ka(ka.comparator);function Xu(...t){let e=Zu;for(const n of t)e=e.insert(n.key,n);return e}function Yu(t){let e=Zu;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ju(){return el()}function tl(){return el()}function el(){return new Gu((t=>t.toString()),((t,e)=>t.isEqual(e)))}const nl=new Ka(ka.comparator),sl=new Ga(ka.comparator);function il(...t){let e=sl;for(const n of t)e=e.add(n);return e}const rl=new Ga(ba);function ol(){return rl}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,cl.createSynthesizedTargetChangeForCurrentChange(t,e)),new al(Sa.min(),n,ol(),Qu(),il())}}class cl{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new cl(Za.EMPTY_BYTE_STRING,e,il(),il(),il())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(t,e,n,s){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=s}}class ll{constructor(t,e){this.targetId=t,this.It=e}}class hl{constructor(t,e,n=Za.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class dl{constructor(){this.Tt=0,this.Et=ml(),this.At=Za.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=il(),e=il(),n=il();return this.Et.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:oa()}})),new cl(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=ml()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class fl{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=Qu(),this.Bt=pl(),this.Lt=new Ga(ba)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:oa()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,s=this.Ht(e);if(s){const t=s.target;if(Oc(t))if(0===n){const n=new ka(t.path);this.Kt(e,n,_c.newNoDocument(n,Sa.min()))}else aa(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,s)=>{const i=this.Ht(s);if(i){if(n.current&&Oc(i.target)){const e=new ka(i.target.path);null!==this.$t.get(e)||this.Xt(s,e)||this.Kt(s,e,_c.newNoDocument(e,t))}n.vt&&(e.set(s,n.St()),n.Dt())}}));let n=il();this.Bt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const s=new al(t,e,this.Lt,this.$t,n);return this.$t=Qu(),this.Bt=pl(),this.Lt=new Ga(ba),s}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const s=this.Qt(t);this.Xt(t,e)?s.Ct(e,1):s.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new dl,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new Ga(ba),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||na("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new dl),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function pl(){return new Ka(ka.comparator)}function ml(){return new Ka(ka.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),yl=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class vl{constructor(t,e){this.databaseId=t,this.dt=e}}function wl(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function El(t,e){return t.dt?e.toBase64():e.toUint8Array()}function bl(t,e){return wl(t,e.toTimestamp())}function Tl(t){return aa(!!t),Sa.fromTimestamp(function(t){const e=Ya(t);return new Ca(e.seconds,e.nanos)}(t))}function Cl(t,e){return function(t){return new _a(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Sl(t){const e=_a.fromString(t);return aa(Gl(e)),e}function Al(t,e){return Cl(t.databaseId,e.path)}function _l(t,e){const n=Sl(e);if(n.get(1)!==t.databaseId.projectId)throw new la(ua.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new la(ua.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ka(Nl(n))}function Il(t,e){return Cl(t.databaseId,e)}function Dl(t){const e=Sl(t);return 4===e.length?_a.emptyPath():Nl(e)}function kl(t){return new _a(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nl(t){return aa(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function xl(t,e,n){return{name:Al(t,e),fields:n.value.mapValue.fields}}function Ol(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:oa()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.dt?(aa(void 0===e||"string"==typeof e),Za.fromBase64String(e||"")):(aa(void 0===e||e instanceof Uint8Array),Za.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ua.UNKNOWN:Hu(t.code);return new la(e,t.message||"")}(o);n=new hl(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=_l(t,s.document.name),r=Tl(s.document.updateTime),o=new Sc({mapValue:{fields:s.document.fields}}),a=_c.newFoundDocument(i,r,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new ul(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=_l(t,s.document),r=s.readTime?Tl(s.readTime):Sa.min(),o=_c.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ul([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=_l(t,s.document),r=s.removedTargetIds||[];n=new ul([],r,i,null)}else{if(!("filter"in e))return oa();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new ju(s),r=t.targetId;n=new ll(r,i)}}return n}function Rl(t,e){let n;if(e instanceof Mu)n={update:xl(t,e.key,e.value)};else if(e instanceof Uu)n={delete:Al(t,e.key)};else if(e instanceof Pu)n={update:xl(t,e.key,e.data),updateMask:Hl(e.fieldMask)};else{if(!(e instanceof $u))return oa();n={verify:Al(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof yu)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof vu)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Eu)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Tu)return{fieldPath:e.field.canonicalString(),increment:n._t};throw oa()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:bl(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:oa()}(t,e.precondition)),n}function Ll(t,e){return t&&t.length>0?(aa(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Tl(t.updateTime):Tl(e);return n.isEqual(Sa.min())&&(n=Tl(e)),new _u(n,t.transformResults||[])}(t,e)))):[]}function Ml(t,e){return{documents:[Il(t,e.path)]}}function Pl(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Il(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Il(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ec(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NAN"}};if(wc(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ec(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NOT_NAN"}};if(wc(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jl(t.field),op:$l(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:jl(t.field),direction:Ul(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.dt||oc(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Vl(t){let e=Dl(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){aa(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Fl(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new qc(ql(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,oc(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new jc(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new jc(n,e)}(n.endAt)),Wc(e,i,o,r,a,"F",c,u)}function Bl(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return oa()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Fl(t){return t?void 0!==t.unaryFilter?[zl(t)]:void 0!==t.fieldFilter?[Kl(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Fl(t))).reduce(((t,e)=>t.concat(e))):oa():[]}function Ul(t){return gl[t]}function $l(t){return yl[t]}function jl(t){return{fieldPath:t.canonicalString()}}function ql(t){return Da.fromServerFormat(t.fieldPath)}function Kl(t){return Rc.create(ql(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oa()}}(t.fieldFilter.op),t.fieldFilter.value)}function zl(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ql(t.unaryFilter.field);return Rc.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ql(t.unaryFilter.field);return Rc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ql(t.unaryFilter.field);return Rc.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ql(t.unaryFilter.field);return Rc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return oa()}}function Hl(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Gl(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ql=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Zl=Ql;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xl{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&xu(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ou(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ou(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=tl();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=Nu(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(Sa.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),il())}isEqual(t){return this.batchId===t.batchId&&Ta(this.mutations,t.mutations,((t,e)=>Lu(t,e)))&&Ta(this.baseMutations,t.baseMutations,((t,e)=>Lu(t,e)))}}class Yl{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){aa(t.mutations.length===n.length);let s=nl;const i=t.mutations;for(let r=0;r<i.length;r++)s=s.insert(i[r].key,n[r].version);return new Yl(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,n,s,i=Sa.min(),r=Sa.min(),o=Za.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new th(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new th(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new th(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t){this.ne=t}}function nh(t){const e=Vl({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?nu(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sh{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Ja(t.integerValue));else if("doubleValue"in t){const n=Ja(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),ac(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(tc(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?Cc(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):oa()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const s of Object.keys(n))this.le(s,e),this.oe(n[s],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const s of n)this.oe(s,e)}_e(t,e){this.ce(e,37),ka.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}sh.ye=new sh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ih{constructor(){this.ze=new rh}addToCollectionParentIndex(t,e){return this.ze.add(e),Ba.resolve()}getCollectionParents(t,e){return Ba.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Ba.resolve()}deleteFieldIndex(t,e){return Ba.resolve()}getDocumentsMatchingTarget(t,e){return Ba.resolve(null)}getIndexType(t,e){return Ba.resolve(0)}getFieldIndexes(t,e){return Ba.resolve([])}getNextCollectionGroupToUpdate(t){return Ba.resolve(null)}getMinOffset(t,e){return Ba.resolve(Ra.min())}getMinOffsetFromCollectionGroup(t,e){return Ba.resolve(Ra.min())}updateCollectionGroup(t,e,n){return Ba.resolve()}updateIndexEntries(t,e){return Ba.resolve()}}class rh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Ga(_a.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Ga(_a.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class oh{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new oh(t,oh.DEFAULT_COLLECTION_PERCENTILE,oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oh.DEFAULT_COLLECTION_PERCENTILE=10,oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oh.DEFAULT=new oh(41943040,oh.DEFAULT_COLLECTION_PERCENTILE,oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oh.DISABLED=new oh(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ah{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new ah(0)}static Rn(){return new ah(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ch{constructor(){this.changes=new Gu((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_c.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ba.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Ou(n.mutation,t,Qa.empty(),Ca.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,il()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=il()){const s=Ju();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Xu();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ju();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,il())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=Qu();const r=el(),o=el();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Pu)?i=i.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),Ou(o.mutation,e,o.mutation.getFieldMask(),Ca.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new uh(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=el();let s=new Ka(((t,e)=>t-e)),i=il();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Qa.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||il()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=tl();c.forEach((t=>{if(!i.has(t)){const s=Nu(e.get(t),n.get(t));null!==s&&u.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Ba.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ka.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Jc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):Ba.resolve(Ju());let o=-1,a=i;return r.next((e=>Ba.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Ba.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,il()))).next((t=>({batchId:o,changes:Yu(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ka(e)).next((t=>{let e=Xu();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=Xu();return this.indexManager.getCollectionParents(t,s).next((r=>Ba.forEach(r,(r=>{const o=function(t,e){return new Gc(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,_c.newInvalidDocument(n)))}));let n=Xu();return s.forEach(((s,i)=>{const r=t.get(s);void 0!==r&&Ou(r.mutation,i,Qa.empty(),Ca.now()),ou(e,i)&&(n=n.insert(s,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Ba.resolve(_c.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return Ba.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Tl(n.createTime)}),Ba.resolve()}getNamedQuery(t,e){return Ba.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:nh(t.bundledQuery),readTime:Tl(t.readTime)}}(e)),Ba.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.overlays=new Ka(ka.comparator),this.Xn=new Map}getOverlay(t,e){return Ba.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ju();return Ba.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ie(t,e,s)})),Ba.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Xn.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Ba.resolve()}getOverlaysForCollection(t,e,n){const s=Ju(),i=e.length+1,r=new ka(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Ba.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Ka(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ju(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ju(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return Ba.resolve(o)}ie(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.Xn.get(s.largestBatchId).delete(n.key);this.Xn.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Jl(e,n));let i=this.Xn.get(e);void 0===i&&(i=il(),this.Xn.set(e,i)),this.Xn.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.Zn=new Ga(ph.ts),this.es=new Ga(ph.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new ph(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new ph(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new ka(new _a([])),n=new ph(e,t),s=new ph(e,t+1),i=[];return this.es.forEachInRange([n,s],(t=>{this.rs(t),i.push(t.key)})),i}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new ka(new _a([])),n=new ph(e,t),s=new ph(e,t+1);let i=il();return this.es.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ph(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ph{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return ka.comparator(t.key,e.key)||ba(t.ls,e.ls)}static ns(t,e){return ba(t.ls,e.ls)||ka.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Ga(ph.ts)}checkEmpty(t){return Ba.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Xl(i,e,n,s);this.mutationQueue.push(r);for(const o of s)this.ds=this.ds.add(new ph(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ba.resolve(r)}lookupMutationBatch(t,e){return Ba.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ws(n),i=s<0?0:s;return Ba.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ba.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Ba.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ph(e,0),s=new ph(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,s],(t=>{const e=this._s(t.ls);i.push(e)})),Ba.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ga(ba);return e.forEach((t=>{const e=new ph(t,0),s=new ph(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,s],(t=>{n=n.add(t.ls)}))})),Ba.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;ka.isDocumentKey(i)||(i=i.child(""));const r=new ph(new ka(i),0);let o=new Ga(ba);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ls)),!0)}),r),Ba.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){aa(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Ba.forEach(e.mutations,(s=>{const i=new ph(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new ph(e,0),s=this.ds.firstAfterOrEqual(n);return Ba.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ba.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t){this.ps=t,this.docs=new Ka(ka.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ba.resolve(n?n.document.mutableCopy():_c.newInvalidDocument(e))}getEntries(t,e){let n=Qu();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():_c.newInvalidDocument(t))})),Ba.resolve(n)}getAllFromCollection(t,e,n){let s=Qu();const i=new ka(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||La(Oa(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return Ba.resolve(s)}getAllFromCollectionGroup(t,e,n,s){oa()}Is(t,e){return Ba.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new yh(this)}getSize(t){return Ba.resolve(this.size)}}class yh extends ch{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.zn.addEntry(t,s)):this.zn.removeEntry(n)})),Ba.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t){this.persistence=t,this.Ts=new Gu((t=>kc(t)),xc),this.lastRemoteSnapshotVersion=Sa.min(),this.highestTargetId=0,this.Es=0,this.As=new fh,this.targetCount=0,this.Rs=ah.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Ba.resolve()}getLastRemoteSnapshotVersion(t){return Ba.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ba.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Ba.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Ba.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new ah(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Ba.resolve()}updateTargetData(t,e){return this.vn(e),Ba.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Ba.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Ts.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Ba.waitFor(i).next((()=>s))}getTargetCount(t){return Ba.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Ba.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Ba.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Ba.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Ba.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Ba.resolve(n)}containsKey(t,e){return Ba.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Ua(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new vh(this),this.indexManager=new ih,this.remoteDocumentCache=function(t){return new gh(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new eh(e),this.Ds=new hh(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new dh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new mh(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){na("MemoryPersistence","Starting transaction:",t);const s=new Eh(this.Ps.next());return this.referenceDelegate.Cs(),n(s).next((t=>this.referenceDelegate.xs(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ns(t,e){return Ba.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Eh extends Pa{constructor(t){super(),this.currentSequenceNumber=t}}class bh{constructor(t){this.persistence=t,this.ks=new fh,this.Os=null}static Ms(t){return new bh(t)}get Fs(){if(this.Os)return this.Os;throw oa()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Ba.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Ba.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Ba.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ba.forEach(this.Fs,(n=>{const s=ka.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s,Sa.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Ba.or([()=>Ba.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Th{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=s}static Vi(t,e){let n=il(),s=il();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Th(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ci(t,e).next((i=>i||this.xi(t,e,s,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Ba.resolve(null)}xi(t,e,n,s){return Zc(e)||s.isEqual(Sa.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((i=>{const r=this.ki(e,i);return this.Oi(e,r,n,s)?this.Ni(t,e):(ea()<=Mt.DEBUG&&na("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ru(e)),this.Mi(t,r,e,xa(s,-1)))}))}ki(t,e){let n=new Ga(cu(t));return e.forEach(((e,s)=>{ou(t,s)&&(n=n.add(s))})),n}Oi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(t,e){return ea()<=Mt.DEBUG&&na("QueryEngine","Using full collection scan to execute query:",ru(e)),this.Di.getDocumentsMatchingQuery(t,e,Ra.min())}Mi(t,e,n,s){return this.Di.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,n,s){this.persistence=t,this.Fi=e,this.wt=s,this.$i=new Ka(ba),this.Bi=new Gu((t=>kc(t)),xc),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lh(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function Ah(t,e,n,s){return new Sh(t,e,n,s)}async function _h(t,e){const n=ca(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=il();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function Ih(t,e){const n=ca(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Ba.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);aa(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=il();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}function Dh(t){const e=ca(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function kh(t,e){const n=ca(t),s=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Za.EMPTY_BYTE_STRING,Sa.min()).withLastLimboFreeSnapshotVersion(Sa.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,r)&&o.push(n.Vs.updateTargetData(t,u))}));let a=Qu(),c=il();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Nh(t,r,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!s.isEqual(Sa.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Ba.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=i,t)))}function Nh(t,e,n){let s=il(),i=il();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Qu();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(Sa.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):na("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Gi:s,Qi:i}}))}function xh(t,e){const n=ca(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Oh(t,e){const n=ca(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Vs.getTargetData(t,e).next((i=>i?(s=i,Ba.resolve(s)):n.Vs.allocateTargetId(t).next((i=>(s=new th(e,i,0,t.currentSequenceNumber),n.Vs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.$i.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Rh(t,e,n){const s=ca(t),i=s.$i.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Fa(t))throw t;na("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.$i=s.$i.remove(e),s.Bi.delete(i.target)}function Lh(t,e,n){const s=ca(t);let i=Sa.min(),r=il();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=ca(t),i=s.Bi.get(n);return void 0!==i?Ba.resolve(s.$i.get(i)):s.Vs.getTargetData(e,n)}(s,t,eu(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Fi.getDocumentsMatchingQuery(t,e,n?i:Sa.min(),n?r:il()))).next((t=>(Mh(s,au(e),t),{documents:t,ji:r})))))}function Mh(t,e,n){let s=Sa.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Li.set(e,s)}class Ph{constructor(){this.activeTargetIds=ol()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vh{constructor(){this.Fr=new Ph,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Ph,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){na("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){na("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,s,i){const r=this.oo(t,e);na("RestConnection","Sending: ",r,n);const o={};return this.uo(o,s,i),this.co(t,r,o,n).then((t=>(na("RestConnection","Received: ",t),t)),(e=>{throw ia("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ao(t,e,n,s,i,r){return this.ro(t,e,n,s,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Jo,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Uh[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,s){return new Promise(((i,r)=>{const o=new Zo;o.listenOnce(zo.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ko.NO_ERROR:const e=o.getResponseJson();na("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Ko.TIMEOUT:na("Connection",'RPC "'+t+'" timed out'),r(new la(ua.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const n=o.getStatus();if(na("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ua).indexOf(e)>=0?e:ua.UNKNOWN}(t.status);r(new la(e,t.message))}else r(new la(ua.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new la(ua.UNAVAILABLE,"Connection failed."));break;default:oa()}}finally{na("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const s=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=jo(),r=qo(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Wo({})),this.uo(o.initMessageHeaders,e,n),dt()||pt()||mt()||gt()||yt()||ft()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");na("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new $h({jr:t=>{l?na("Connection","Not sending because WebChannel is closed:",t):(u||(na("Connection","Opening WebChannel transport."),c.open(),u=!0),na("Connection","WebChannel sending:",t),c.send(t))},Wr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Qo.EventType.OPEN,(()=>{l||na("Connection","WebChannel transport opened.")})),d(c,Qo.EventType.CLOSE,(()=>{l||(l=!0,na("Connection","WebChannel transport closed"),h.eo())})),d(c,Qo.EventType.ERROR,(t=>{l||(l=!0,ia("Connection","WebChannel transport errored:",t),h.eo(new la(ua.UNAVAILABLE,"The operation could not be completed")))})),d(c,Qo.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];aa(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){na("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=qu[t];if(void 0!==e)return Hu(e)}(t),n=i.message;void 0===e&&(e=ua.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,h.eo(new la(e,n)),c.close()}else na("Connection","WebChannel received:",n),h.no(n)}})),d(r,Ho.STAT_EVENT,(t=>{t.stat===Go.PROXY?na("Connection","Detected buffering proxy"):t.stat===Go.NOPROXY&&na("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t){return new vl(t,!0)}class zh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),s=Math.max(0,e-n);s>0&&na("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e,n,s,i,r,o,a){this.js=t,this.Ao=n,this.Ro=s,this.bo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new zh(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===ua.RESOURCE_EXHAUSTED?(sa(e.toString()),sa("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===ua.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new la(ua.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return na("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(na("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Gh extends Hh{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.wt=i}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=Ol(this.wt,t),n=function(t){if(!("targetChange"in t))return Sa.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Sa.min():e.readTime?Tl(e.readTime):Sa.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=kl(this.wt),e.addTarget=function(t,e){let n;const s=e.target;return n=Oc(s)?{documents:Ml(t,s)}:{query:Pl(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=El(t,e.resumeToken):e.snapshotVersion.compareTo(Sa.min())>0&&(n.readTime=wl(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=Bl(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=kl(this.wt),e.removeTarget=t,this.Mo(e)}}class Wh extends Hh{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(aa(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Ll(t.writeResults,t.commitTime),n=Tl(t.commitTime);return this.listener.Jo(n,e)}return aa(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=kl(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Rl(this.wt,t)))};this.Mo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new la(ua.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ro(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ua.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new la(ua.UNKNOWN,t.toString())}))}ao(t,e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.bo.ao(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ua.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new la(ua.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class Zh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(sa(e),this.su=!1):na("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{od(this)&&(na("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ca(t);e.lu.add(4),await Jh(e),e._u.set("Unknown"),e.lu.delete(4),await Yh(e)}(this))}))})),this._u=new Zh(n,s)}}async function Yh(t){if(od(t))for(const e of t.fu)await e(!0)}async function Jh(t){for(const e of t.fu)await e(!1)}function td(t,e){const n=ca(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),rd(n)?id(n):Sd(n).Co()&&nd(n,e))}function ed(t,e){const n=ca(t),s=Sd(n);n.hu.delete(e),s.Co()&&sd(n,e),0===n.hu.size&&(s.Co()?s.ko():od(n)&&n._u.set("Unknown"))}function nd(t,e){t.wu.Nt(e.targetId),Sd(t).Qo(e)}function sd(t,e){t.wu.Nt(e),Sd(t).jo(e)}function id(t){t.wu=new fl({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Sd(t).start(),t._u.iu()}function rd(t){return od(t)&&!Sd(t).Do()&&t.hu.size>0}function od(t){return 0===ca(t).lu.size}function ad(t){t.wu=void 0}async function cd(t){t.hu.forEach(((e,n)=>{nd(t,e)}))}async function ud(t,e){ad(t),rd(t)?(t._u.uu(e),id(t)):t._u.set("Unknown")}async function ld(t,e,n){if(t._u.set("Online"),e instanceof hl&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.hu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.hu.delete(s),t.wu.removeTarget(s))}(t,e)}catch(n){na("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await hd(t,n)}else if(e instanceof ul?t.wu.Ut(e):e instanceof ll?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(Sa.min()))try{const e=await Dh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(s);i&&t.hu.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(Za.EMPTY_BYTE_STRING,n.snapshotVersion)),sd(t,e);const s=new th(n.target,e,1,n.sequenceNumber);nd(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){na("RemoteStore","Failed to raise snapshot:",e),await hd(t,e)}}async function hd(t,e,n){if(!Fa(e))throw e;t.lu.add(1),await Jh(t),t._u.set("Offline"),n||(n=()=>Dh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{na("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Yh(t)}))}function dd(t,e){return e().catch((n=>hd(t,n,e)))}async function fd(t){const e=ca(t),n=Ad(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;pd(e);)try{const t=await xh(e.localStore,s);if(null===t){0===e.au.length&&n.ko();break}s=t.batchId,md(e,t)}catch(t){await hd(e,t)}gd(e)&&yd(e)}function pd(t){return od(t)&&t.au.length<10}function md(t,e){t.au.push(e);const n=Ad(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function gd(t){return od(t)&&!Ad(t).Do()&&t.au.length>0}function yd(t){Ad(t).start()}async function vd(t){Ad(t).Xo()}async function wd(t){const e=Ad(t);for(const n of t.au)e.Ho(n.mutations)}async function Ed(t,e,n){const s=t.au.shift(),i=Yl.from(s,e,n);await dd(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await fd(t)}async function bd(t,e){e&&Ad(t).zo&&await async function(t,e){if(n=e.code,zu(n)&&n!==ua.ABORTED){const n=t.au.shift();Ad(t).No(),await dd(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await fd(t)}var n}(t,e),gd(t)&&yd(t)}async function Td(t,e){const n=ca(t);n.asyncQueue.verifyOperationInProgress(),na("RemoteStore","RemoteStore received new credentials");const s=od(n);n.lu.add(3),await Jh(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Yh(n)}async function Cd(t,e){const n=ca(t);e?(n.lu.delete(2),await Yh(n)):e||(n.lu.add(2),await Jh(n),n._u.set("Unknown"))}function Sd(t){return t.mu||(t.mu=function(t,e,n){const s=ca(t);return s.tu(),new Gh(e,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:cd.bind(null,t),Jr:ud.bind(null,t),Go:ld.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),rd(t)?id(t):t._u.set("Unknown")):(await t.mu.stop(),ad(t))}))),t.mu}function Ad(t){return t.gu||(t.gu=function(t,e,n){const s=ca(t);return s.tu(),new Wh(e,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,n)}(t.datastore,t.asyncQueue,{zr:vd.bind(null,t),Jr:bd.bind(null,t),Yo:wd.bind(null,t),Jo:Ed.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await fd(t)):(await t.gu.stop(),t.au.length>0&&(na("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class _d{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new ha,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new _d(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new la(ua.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Id(t,e){if(sa("AsyncQueue",`${e}: ${t}`),Fa(t))return new la(ua.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ka.comparator(e.key,n.key):(t,e)=>ka.comparator(t.key,e.key),this.keyedMap=Xu(),this.sortedSet=new Ka(this.comparator)}static emptySet(t){return new Dd(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Dd))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Dd;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.yu=new Ka(ka.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):oa():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Nd{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Nd(t,e,Dd.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&su(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.Iu=void 0,this.listeners=[]}}class Od{constructor(){this.queries=new Gu((t=>iu(t)),su),this.onlineState="Unknown",this.Tu=new Set}}async function Rd(t,e){const n=ca(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new xd),i)try{r.Iu=await n.onListen(s)}catch(t){const n=Id(t,`Initialization of query '${ru(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Eu(n.onlineState),r.Iu&&e.Au(r.Iu)&&Vd(n)}async function Ld(t,e){const n=ca(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Md(t,e){const n=ca(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(i)&&(s=!0);e.Iu=i}}s&&Vd(n)}function Pd(t,e,n){const s=ca(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Vd(t){t.Tu.forEach((t=>{t.next()}))}class Bd{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Nd(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=Nd.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fd{constructor(t){this.key=t}}class Ud{constructor(t){this.key=t}}class $d{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=il(),this.mutatedKeys=il(),this.Lu=cu(t),this.Uu=new Dd(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new kd,s=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),l=ou(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(r=r.add(l),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:r,Gu:n,Oi:o,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oa()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const r=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new Nd(this.query,t.Uu,s,i,t.mutatedKeys,0===o,a,!1),zu:r}:{zu:r}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new kd,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=il(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Ud(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Fd(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=il();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return Nd.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class jd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class qd{constructor(t){this.key=t,this.Xu=!1}}class Kd{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Zu={},this.tc=new Gu((t=>iu(t)),su),this.ec=new Map,this.nc=new Set,this.sc=new Ka(ka.comparator),this.ic=new Map,this.rc=new fh,this.oc={},this.uc=new Map,this.cc=ah.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function zd(t,e){const n=hf(t);let s,i;const r=n.tc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Yu();else{const t=await Oh(n.localStore,eu(e));n.isPrimaryClient&&td(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Hd(n,e,s,"current"===r)}return i}async function Hd(t,e,n,s){t.hc=(e,n,s)=>async function(t,e,n,s){let i=e.view.Ku(n);i.Oi&&(i=await Lh(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return rf(t,e.targetId,o.zu),o.snapshot}(t,e,n,s);const i=await Lh(t.localStore,e,!0),r=new $d(e,i.ji),o=r.Ku(i.documents),a=cl.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);rf(t,n,c.zu);const u=new jd(e,n,r);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Gd(t,e){const n=ca(t),s=n.tc.get(e),i=n.ec.get(s.targetId);if(i.length>1)return n.ec.set(s.targetId,i.filter((t=>!su(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rh(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),ed(n.remoteStore,s.targetId),nf(n,s.targetId)})).catch(Va)):(nf(n,s.targetId),await Rh(n.localStore,s.targetId,!0))}async function Wd(t,e,n){const s=df(t);try{const t=await function(t,e){const n=ca(t),s=Ca.now(),i=e.reduce(((t,e)=>t.add(e.key)),il());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Qu(),c=il();return n.Ui.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=Ru(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Pu(t.key,e,Ac(e.value.mapValue),Iu.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:Yu(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.oc[t.currentUser.toKey()];s||(s=new Ka(ba)),s=s.insert(e,n),t.oc[t.currentUser.toKey()]=s}(s,t.batchId,n),await cf(s,t.changes),await fd(s.remoteStore)}catch(t){const e=Id(t,"Failed to persist write");n.reject(e)}}async function Qd(t,e){const n=ca(t);try{const t=await kh(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.ic.get(e);s&&(aa(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.Xu=!0:t.modifiedDocuments.size>0?aa(s.Xu):t.removedDocuments.size>0&&(aa(s.Xu),s.Xu=!1))})),await cf(n,t,e)}catch(t){await Va(t)}}function Zd(t,e,n){const s=ca(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.tc.forEach(((n,s)=>{const i=s.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ca(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Eu(e)&&(s=!0)})),s&&Vd(n)}(s.eventManager,e),t.length&&s.Zu.Go(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Xd(t,e,n){const s=ca(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ic.get(e),r=i&&i.key;if(r){let t=new Ka(ka.comparator);t=t.insert(r,_c.newNoDocument(r,Sa.min()));const n=il().add(r),i=new al(Sa.min(),new Map,new Ga(ba),t,n);await Qd(s,i),s.sc=s.sc.remove(r),s.ic.delete(e),af(s)}else await Rh(s.localStore,e,!1).then((()=>nf(s,e,n))).catch(Va)}async function Yd(t,e){const n=ca(t),s=e.batch.batchId;try{const t=await Ih(n.localStore,e);ef(n,s,null),tf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await cf(n,t)}catch(t){await Va(t)}}async function Jd(t,e,n){const s=ca(t);try{const t=await function(t,e){const n=ca(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(aa(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);ef(s,e,n),tf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await cf(s,t)}catch(n){await Va(n)}}function tf(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function ef(t,e,n){const s=ca(t);let i=s.oc[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.oc[s.currentUser.toKey()]=i}}function nf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||sf(t,e)}))}function sf(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(ed(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),af(t))}function rf(t,e,n){for(const s of n)s instanceof Fd?(t.rc.addReference(s.key,e),of(t,s)):s instanceof Ud?(na("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||sf(t,s.key)):oa()}function of(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(na("SyncEngine","New document in limbo: "+n),t.nc.add(s),af(t))}function af(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new ka(_a.fromString(e)),s=t.cc.next();t.ic.set(s,new qd(n)),t.sc=t.sc.insert(n,s),td(t.remoteStore,new th(eu(Qc(n.path)),s,2,Ua.ot))}}async function cf(t,e,n){const s=ca(t),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach(((t,a)=>{o.push(s.hc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Th.Vi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Zu.Go(i),await async function(t,e){const n=ca(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ba.forEach(e,(e=>Ba.forEach(e.Pi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Ba.forEach(e.vi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Fa(t))throw t;na("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.$i.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.$i=n.$i.insert(t,i)}}}(s.localStore,r))}async function uf(t,e){const n=ca(t);if(!n.currentUser.isEqual(e)){na("SyncEngine","User change. New user:",e.toKey());const t=await _h(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new la(ua.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await cf(n,t.Ki)}}function lf(t,e){const n=ca(t),s=n.ic.get(e);if(s&&s.Xu)return il().add(s.key);{let t=il();const s=n.ec.get(e);if(!s)return t;for(const e of s){const s=n.tc.get(e);t=t.unionWith(s.view.qu)}return t}}function hf(t){const e=ca(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Xd.bind(null,e),e.Zu.Go=Md.bind(null,e.eventManager),e.Zu.lc=Pd.bind(null,e.eventManager),e}function df(t){const e=ca(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jd.bind(null,e),e}class ff{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Kh(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return Ah(this.persistence,new Ch,t.initialUser,this.wt)}_c(t){return new wh(bh.Ms,this.wt)}dc(t){return new Vh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Zd(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=uf.bind(null,this.syncEngine),await Cd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Od}createDatastore(t){const e=Kh(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new jh(s));var s;return function(t,e,n,s){return new Qh(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Zd(this.syncEngine,t,0),r=Fh.V()?new Fh:new Bh,new Xh(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Kd(t,e,n,s,i,r);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ca(t);na("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await Jh(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gf{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Yo.UNAUTHENTICATED,this.clientId=Ea.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{na("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(na("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new la(ua.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ha;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Id(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function yf(t,e){t.asyncQueue.verifyOperationInProgress(),na("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await _h(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function vf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wf(t);na("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Td(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Td(e.remoteStore,n))),t.onlineComponents=e}async function wf(t){return t.offlineComponents||(na("FirestoreClient","Using default OfflineComponentProvider"),await yf(t,new ff)),t.offlineComponents}async function Ef(t){return t.onlineComponents||(na("FirestoreClient","Using default OnlineComponentProvider"),await vf(t,new pf)),t.onlineComponents}function bf(t){return Ef(t).then((t=>t.syncEngine))}async function Tf(t){const e=await Ef(t),n=e.eventManager;return n.onListen=zd.bind(null,e.syncEngine),n.onUnlisten=Gd.bind(null,e.syncEngine),n}const Cf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t,e,n){if(!n)throw new la(ua.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Af(t,e,n,s){if(!0===e&&!0===s)throw new la(ua.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _f(t){if(!ka.isDocumentKey(t))throw new la(ua.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function If(t){if(ka.isDocumentKey(t))throw new la(ua.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Df(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":oa()}function kf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new la(ua.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Df(t);throw new la(ua.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nf{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new la(ua.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new la(ua.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Af("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nf({}),this._settingsFrozen=!1,t instanceof rc?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new la(ua.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rc(t.options.projectId)}(t))}get app(){if(!this._app)throw new la(ua.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new la(ua.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new fa;switch(t.type){case"gapi":const e=t.client;return aa(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ga(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new la(ua.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Cf.get(t);e&&(na("ComponentProvider","Removing Datastore"),Cf.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Of{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Of(this.firestore,t,this._key)}}class Rf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Rf(this.firestore,t,this._query)}}class Lf extends Rf{constructor(t,e,n){super(t,e,Qc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Of(this.firestore,null,new ka(t))}withConverter(t){return new Lf(this.firestore,t,this._path)}}function Mf(t,e,...n){if(t=It(t),Sf("collection","path",e),t instanceof xf){const s=_a.fromString(e,...n);return If(s),new Lf(t,null,s)}{if(!(t instanceof Of||t instanceof Lf))throw new la(ua.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(_a.fromString(e,...n));return If(s),new Lf(t.firestore,null,s)}}function Pf(t,e,...n){if(t=It(t),1===arguments.length&&(e=Ea.I()),Sf("doc","path",e),t instanceof xf){const s=_a.fromString(e,...n);return _f(s),new Of(t,null,new ka(s))}{if(!(t instanceof Of||t instanceof Lf))throw new la(ua.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(_a.fromString(e,...n));return _f(s),new Of(t.firestore,t instanceof Lf?t.converter:null,new ka(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vf{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new zh(this,"async_queue_retry"),this.Kc=()=>{const t=qh();t&&na("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=qh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=qh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new ha;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(Ln){if(!Fa(Ln))throw Ln;na("AsyncQueue","Operation failed with retryable error: "+Ln)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw sa("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const s=_d.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(s),s}Gc(){this.Bc&&oa()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}function Bf(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const s of e)if(s in n&&"function"==typeof n[s])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Ff extends xf{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Vf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||jf(this),this._firestoreClient.terminate()}}function Uf(t=Ye()){return He(t,"firestore").getImmediate()}function $f(t){return t._firestoreClient||jf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jf(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new ic(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new gf(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qf{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new la(ua.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Da(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kf{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Kf(Za.fromBase64String(t))}catch(t){throw new la(ua.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Kf(Za.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new la(ua.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new la(ua.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ba(this._lat,t._lat)||ba(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=/^__.*__$/;class Wf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Pu(t,this.data,this.fieldMask,e,this.fieldTransforms):new Mu(t,this.data,e,this.fieldTransforms)}}function Qf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oa()}}class Zf{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=s,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Zf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ta({path:n,na:!1});return s.sa(t),s}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ta({path:n,na:!1});return s.Xc(),s}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return ap(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Qf(this.Zc)&&Gf.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Xf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Kh(t)}aa(t,e,n,s=!1){return new Zf({Zc:t,methodName:e,ca:n,path:Da.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Yf(t){const e=t._freezeSettings(),n=Kh(t._databaseId);return new Xf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jf(t,e,n,s,i,r={}){const o=t.aa(r.merge||r.mergeFields?2:0,e,n,i);sp("Data must be an object, but it was:",o,s);const a=ep(s,o);let c,u;if(r.merge)c=new Qa(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=ip(e,s,n);if(!o.contains(i))throw new la(ua.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);cp(t,i)||t.push(i)}c=new Qa(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Wf(new Sc(a),c,u)}function tp(t,e){if(np(t=It(t)))return sp("Unsupported field value:",e,t),ep(t,e);if(t instanceof zf)return function(t,e){if(!Qf(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=tp(i,e.ra(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=It(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return du(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ca.fromDate(t);return{timestampValue:wl(e.wt,n)}}if(t instanceof Ca){const n=new Ca(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:wl(e.wt,n)}}if(t instanceof Hf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Kf)return{bytesValue:El(e.wt,t._byteString)};if(t instanceof Of){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Cl(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${Df(t)}`)}(t,e)}function ep(t,e){const n={};return qa(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ja(t,((t,s)=>{const i=tp(s,e.ea(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function np(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ca||t instanceof Hf||t instanceof Kf||t instanceof Of||t instanceof zf)}function sp(t,e,n){if(!np(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Df(n);throw"an object"===s?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function ip(t,e,n){if((e=It(e))instanceof qf)return e._internalPath;if("string"==typeof e)return op(t,e);throw ap("Field path arguments must be of type string or ",t,!1,void 0,n)}const rp=new RegExp("[~\\*/\\[\\]]");function op(t,e,n){if(e.search(rp)>=0)throw ap(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qf(...e.split("."))._internalPath}catch(s){throw ap(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ap(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new la(ua.INVALID_ARGUMENT,a+t+c)}function cp(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Of(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new lp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(hp("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class lp extends up{data(){return super.data()}}function hp(t,e){return"string"==typeof e?op(t,e):e instanceof qf?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fp extends up{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new pp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(hp("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class pp extends fp{data(t={}){return super.data(t)}}class mp{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new dp(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new pp(this._firestore,this._userDataWriter,n.key,n,new dp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new la(ua.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new pp(t._firestore,t._userDataWriter,n.doc.key,n.doc,new dp(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new pp(t._firestore,t._userDataWriter,e.doc.key,e.doc,new dp(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:gp(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function gp(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oa()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yp(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new la(ua.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vp{convertValue(t,e="none"){switch(lc(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ja(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(tc(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw oa()}}convertObject(t,e){const n={};return ja(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Hf(Ja(t.latitude),Ja(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=nc(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(sc(t));default:return null}}convertTimestamp(t){const e=Ya(t);return new Ca(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=_a.fromString(t);aa(Gl(n));const s=new rc(n.get(1),n.get(3)),i=new ka(n.popFirst(5));return s.isEqual(e)||sa(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class Ep extends vp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Kf(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Of(this.firestore,null,e)}}function bp(t,e,n){t=kf(t,Of);const s=kf(t.firestore,Ff),i=wp(t.converter,e,n);return Sp(s,[Jf(Yf(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Iu.none())])}function Tp(t){return Sp(kf(t.firestore,Ff),[new Uu(t._key,Iu.none())])}function Cp(t,...e){var n,s,i;t=It(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Bf(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Bf(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,u,l;if(t instanceof Of)u=kf(t.firestore,Ff),l=Qc(t._key.path),c={next:n=>{e[o]&&e[o](Ap(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=kf(t,Rf);u=kf(n.firestore,Ff),l=n._query;const s=new Ep(u);c={next:t=>{e[o]&&e[o](new mp(u,s,n,t))},error:e[o+1],complete:e[o+2]},yp(t._query)}return function(t,e,n,s){const i=new mf(s),r=new Bd(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>Rd(await Tf(t),r))),()=>{i.Tc(),t.asyncQueue.enqueueAndForget((async()=>Ld(await Tf(t),r)))}}($f(u),l,a,c)}function Sp(t,e){return function(t,e){const n=new ha;return t.asyncQueue.enqueueAndForget((async()=>Wd(await bf(t),e,n))),n.promise}($f(t),e)}function Ap(t,e,n){const s=n.docs.get(e._key),i=new Ep(t);return new fp(t,i,e._key,s,new dp(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Jo=t}(Ze),ze(new Dt("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new Ff(s,new pa(t.getProvider("auth-internal")),new va(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),Je(Xo,"3.4.12",t),Je(Xo,"3.4.12","esm2017")}();const _p={apiKey:"AIzaSyCOfGAHEiRbIE4WDN2RKOFUuWU0SIxaTGA",authDomain:"addlist-82a2b.firebaseapp.com",projectId:"addlist-82a2b",storageBucket:"addlist-82a2b.appspot.com",messagingSenderId:"937605911532",appId:"1:937605911532:web:a2383bd224df2e7836a6c9",measurementId:"G-HP7YR6XTMD"},Ip=Xe(_p),Dp=Uf(Ip);var kp=n(6455),Np=n.n(kp),xp={name:"adsList",data(){return{dialog2:!1,dialog:!1,adslist:[],errors:[],title:"",desc:""}},mounted(){Cp(Mf(Dp,"adslist"),(t=>{this.adslist=[],t.forEach((t=>{this.adslist.push({key:t.id,title:t.data().adstitle,desc:t.data().adsdesc})}))}))},activated(){},computed:{},created(){},methods:{deltAds(t){Np().fire({title:"هل انت متأكد",icon:"question",iconHtml:"؟",confirmButtonText:"نعم",cancelButtonText:"لا",showCancelButton:!0,showCloseButton:!0,preConfirm:()=>{Tp(Pf(Mf(Dp,"adslist"),t))}})},async addAds(){""===this.title||""===this.desc?Np().fire({title:" اخيك ادخل عنوان الاعلان وتفاصيلة اخيك لاتبقيهن فارغ",text:"",icon:"error",confirmButtonText:"اغلاق"}):(this.dialog=!1,await bp(Pf(Mf(Dp,"adslist")),{adstitle:this.title,adsdesc:this.desc})),this.title="",this.desc=""},async edtAds(t){this.dialog2=!1,await bp(Pf(Mf(Dp,"adslist"),t),{adstitle:this.title,adsdesc:this.desc}),this.title="",this.desc=""},getAds(t){this.title=this.adslist[t].title,this.desc=this.adslist[t].desc},cancl(){this.title="",this.desc="",this.dialog2=!1}}},Op=xp,Rp=n(3736),Lp=(0,Rp.Z)(Op,st,it,!1,null,null,null),Mp=Lp.exports},9669:function(t,e,n){n(1609)},5448:function(t,e,n){"use strict";var s=n(4867),i=n(6026),r=n(4372),o=n(5327),a=n(4097),c=n(4109),u=n(7985),l=n(7874),h=n(2648),d=n(644),f=n(205);t.exports=function(t){return new Promise((function(e,n){var p,m=t.data,g=t.headers,y=t.responseType;function v(){t.cancelToken&&t.cancelToken.unsubscribe(p),t.signal&&t.signal.removeEventListener("abort",p)}s.isFormData(m)&&s.isStandardBrowserEnv()&&delete g["Content-Type"];var w=new XMLHttpRequest;if(t.auth){var E=t.auth.username||"",b=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";g.Authorization="Basic "+btoa(E+":"+b)}var T=a(t.baseURL,t.url);function C(){if(w){var s="getAllResponseHeaders"in w?c(w.getAllResponseHeaders()):null,r=y&&"text"!==y&&"json"!==y?w.response:w.responseText,o={data:r,status:w.status,statusText:w.statusText,headers:s,config:t,request:w};i((function(t){e(t),v()}),(function(t){n(t),v()}),o),w=null}}if(w.open(t.method.toUpperCase(),o(T,t.params,t.paramsSerializer),!0),w.timeout=t.timeout,"onloadend"in w?w.onloadend=C:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(C)},w.onabort=function(){w&&(n(new h("Request aborted",h.ECONNABORTED,t,w)),w=null)},w.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,t,w,w)),w=null},w.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",s=t.transitional||l;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new h(e,s.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,t,w)),w=null},s.isStandardBrowserEnv()){var S=(t.withCredentials||u(T))&&t.xsrfCookieName?r.read(t.xsrfCookieName):void 0;S&&(g[t.xsrfHeaderName]=S)}"setRequestHeader"in w&&s.forEach(g,(function(t,e){"undefined"===typeof m&&"content-type"===e.toLowerCase()?delete g[e]:w.setRequestHeader(e,t)})),s.isUndefined(t.withCredentials)||(w.withCredentials=!!t.withCredentials),y&&"json"!==y&&(w.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&w.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(p=function(t){w&&(n(!t||t&&t.type?new d:t),w.abort(),w=null)},t.cancelToken&&t.cancelToken.subscribe(p),t.signal&&(t.signal.aborted?p():t.signal.addEventListener("abort",p))),m||(m=null);var A=f(T);A&&-1===["http","https","file"].indexOf(A)?n(new h("Unsupported protocol "+A+":",h.ERR_BAD_REQUEST,t)):w.send(m)}))}},1609:function(t,e,n){"use strict";var s=n(4867),i=n(1849),r=n(321),o=n(7185),a=n(5546);function c(t){var e=new r(t),n=i(r.prototype.request,e);return s.extend(n,r.prototype,e),s.extend(n,e),n.create=function(e){return c(o(t,e))},n}var u=c(a);u.Axios=r,u.CanceledError=n(644),u.CancelToken=n(4972),u.isCancel=n(6502),u.VERSION=n(7288).version,u.toFormData=n(7675),u.AxiosError=n(2648),u.Cancel=u.CanceledError,u.all=function(t){return Promise.all(t)},u.spread=n(8713),u.isAxiosError=n(6268),t.exports=u,t.exports["default"]=u},4972:function(t,e,n){"use strict";var s=n(644);function i(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,s=n._listeners.length;for(e=0;e<s;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,s=new Promise((function(t){n.subscribe(t),e=t})).then(t);return s.cancel=function(){n.unsubscribe(e)},s},t((function(t){n.reason||(n.reason=new s(t),e(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},i.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},i.source=function(){var t,e=new i((function(e){t=e}));return{token:e,cancel:t}},t.exports=i},644:function(t,e,n){"use strict";var s=n(2648),i=n(4867);function r(t){s.call(this,null==t?"canceled":t,s.ERR_CANCELED),this.name="CanceledError"}i.inherits(r,s,{__CANCEL__:!0}),t.exports=r},6502:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},321:function(t,e,n){"use strict";var s=n(4867),i=n(5327),r=n(782),o=n(3572),a=n(7185),c=n(4097),u=n(4875),l=u.validators;function h(t){this.defaults=t,this.interceptors={request:new r,response:new r}}h.prototype.request=function(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var s=[],i=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(i=i&&t.synchronous,s.unshift(t.fulfilled,t.rejected))}));var r,c=[];if(this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)})),!i){var h=[o,void 0];Array.prototype.unshift.apply(h,s),h=h.concat(c),r=Promise.resolve(e);while(h.length)r=r.then(h.shift(),h.shift());return r}var d=e;while(s.length){var f=s.shift(),p=s.shift();try{d=f(d)}catch(m){p(m);break}}try{r=o(d)}catch(m){return Promise.reject(m)}while(c.length)r=r.then(c.shift(),c.shift());return r},h.prototype.getUri=function(t){t=a(this.defaults,t);var e=c(t.baseURL,t.url);return i(e,t.params,t.paramsSerializer)},s.forEach(["delete","get","head","options"],(function(t){h.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),s.forEach(["post","put","patch"],(function(t){function e(e){return function(n,s,i){return this.request(a(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:s}))}}h.prototype[t]=e(),h.prototype[t+"Form"]=e(!0)})),t.exports=h},2648:function(t,e,n){"use strict";var s=n(4867);function i(t,e,n,s,i){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),i&&(this.response=i)}s.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var r=i.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(t){o[t]={value:t}})),Object.defineProperties(i,o),Object.defineProperty(r,"isAxiosError",{value:!0}),i.from=function(t,e,n,o,a,c){var u=Object.create(r);return s.toFlatObject(t,u,(function(t){return t!==Error.prototype})),i.call(u,t.message,e,n,o,a),u.name=t.name,c&&Object.assign(u,c),u},t.exports=i},782:function(t,e,n){"use strict";var s=n(4867);function i(){this.handlers=[]}i.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){s.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=i},4097:function(t,e,n){"use strict";var s=n(1793),i=n(7303);t.exports=function(t,e){return t&&!s(e)?i(t,e):e}},3572:function(t,e,n){"use strict";var s=n(4867),i=n(8527),r=n(6502),o=n(5546),a=n(644);function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a}t.exports=function(t){c(t),t.headers=t.headers||{},t.data=i.call(t,t.data,t.headers,t.transformRequest),t.headers=s.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),s.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||o.adapter;return e(t).then((function(e){return c(t),e.data=i.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return r(e)||(c(t),e&&e.response&&(e.response.data=i.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},7185:function(t,e,n){"use strict";var s=n(4867);t.exports=function(t,e){e=e||{};var n={};function i(t,e){return s.isPlainObject(t)&&s.isPlainObject(e)?s.merge(t,e):s.isPlainObject(e)?s.merge({},e):s.isArray(e)?e.slice():e}function r(n){return s.isUndefined(e[n])?s.isUndefined(t[n])?void 0:i(void 0,t[n]):i(t[n],e[n])}function o(t){if(!s.isUndefined(e[t]))return i(void 0,e[t])}function a(n){return s.isUndefined(e[n])?s.isUndefined(t[n])?void 0:i(void 0,t[n]):i(void 0,e[n])}function c(n){return n in e?i(t[n],e[n]):n in t?i(void 0,t[n]):void 0}var u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return s.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=u[t]||r,i=e(t);s.isUndefined(i)&&e!==c||(n[t]=i)})),n}},6026:function(t,e,n){"use strict";var s=n(2648);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new s("Request failed with status code "+n.status,[s.ERR_BAD_REQUEST,s.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}},8527:function(t,e,n){"use strict";var s=n(4867),i=n(5546);t.exports=function(t,e,n){var r=this||i;return s.forEach(n,(function(n){t=n.call(r,t,e)})),t}},5546:function(t,e,n){"use strict";var s=n(4867),i=n(6016),r=n(2648),o=n(7874),a=n(7675),c={"Content-Type":"application/x-www-form-urlencoded"};function u(t,e){!s.isUndefined(t)&&s.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function l(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(t=n(5448)),t}function h(t,e,n){if(s.isString(t))try{return(e||JSON.parse)(t),s.trim(t)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(t)}var d={transitional:o,adapter:l(),transformRequest:[function(t,e){if(i(e,"Accept"),i(e,"Content-Type"),s.isFormData(t)||s.isArrayBuffer(t)||s.isBuffer(t)||s.isStream(t)||s.isFile(t)||s.isBlob(t))return t;if(s.isArrayBufferView(t))return t.buffer;if(s.isURLSearchParams(t))return u(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var n,r=s.isObject(t),o=e&&e["Content-Type"];if((n=s.isFileList(t))||r&&"multipart/form-data"===o){var c=this.env&&this.env.FormData;return a(n?{"files[]":t}:t,c&&new c)}return r||"application/json"===o?(u(e,"application/json"),h(t)):t}],transformResponse:[function(t){var e=this.transitional||d.transitional,n=e&&e.silentJSONParsing,i=e&&e.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&s.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(o){if("SyntaxError"===a.name)throw r.from(a,r.ERR_BAD_RESPONSE,this,null,this.response);throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(1623)},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};s.forEach(["delete","get","head"],(function(t){d.headers[t]={}})),s.forEach(["post","put","patch"],(function(t){d.headers[t]=s.merge(c)})),t.exports=d},7874:function(t){"use strict";t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:function(t){t.exports={version:"0.27.2"}},1849:function(t){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return t.apply(e,n)}}},5327:function(t,e,n){"use strict";var s=n(4867);function i(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var r;if(n)r=n(e);else if(s.isURLSearchParams(e))r=e.toString();else{var o=[];s.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(s.isArray(t)?e+="[]":t=[t],s.forEach(t,(function(t){s.isDate(t)?t=t.toISOString():s.isObject(t)&&(t=JSON.stringify(t)),o.push(i(e)+"="+i(t))})))})),r=o.join("&")}if(r){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t}},7303:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},4372:function(t,e,n){"use strict";var s=n(4867);t.exports=s.isStandardBrowserEnv()?function(){return{write:function(t,e,n,i,r,o){var a=[];a.push(t+"="+encodeURIComponent(e)),s.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),s.isString(i)&&a.push("path="+i),s.isString(r)&&a.push("domain="+r),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},1793:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},6268:function(t,e,n){"use strict";var s=n(4867);t.exports=function(t){return s.isObject(t)&&!0===t.isAxiosError}},7985:function(t,e,n){"use strict";var s=n(4867);t.exports=s.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var s=t;return e&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=s.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},6016:function(t,e,n){"use strict";var s=n(4867);t.exports=function(t,e){s.forEach(t,(function(n,s){s!==e&&s.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[s])}))}},1623:function(t){t.exports=null},4109:function(t,e,n){"use strict";var s=n(4867),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,r,o={};return t?(s.forEach(t.split("\n"),(function(t){if(r=t.indexOf(":"),e=s.trim(t.substr(0,r)).toLowerCase(),n=s.trim(t.substr(r+1)),e){if(o[e]&&i.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([n]):o[e]?o[e]+", "+n:n}})),o):o}},205:function(t){"use strict";t.exports=function(t){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}},8713:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},7675:function(t,e,n){"use strict";var s=n(4867);function i(t,e){e=e||new FormData;var n=[];function i(t){return null===t?"":s.isDate(t)?t.toISOString():s.isArrayBuffer(t)||s.isTypedArray(t)?"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function r(t,o){if(s.isPlainObject(t)||s.isArray(t)){if(-1!==n.indexOf(t))throw Error("Circular reference detected in "+o);n.push(t),s.forEach(t,(function(t,n){if(!s.isUndefined(t)){var a,c=o?o+"."+n:n;if(t&&!o&&"object"===typeof t)if(s.endsWith(n,"{}"))t=JSON.stringify(t);else if(s.endsWith(n,"[]")&&(a=s.toArray(t)))return void a.forEach((function(t){!s.isUndefined(t)&&e.append(c,i(t))}));r(t,c)}})),n.pop()}else e.append(o,i(t))}return r(t),e}t.exports=i},4875:function(t,e,n){"use strict";var s=n(7288).version,i=n(2648),r={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){r[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var o={};function a(t,e,n){if("object"!==typeof t)throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);var s=Object.keys(t),r=s.length;while(r-- >0){var o=s[r],a=e[o];if(a){var c=t[o],u=void 0===c||a(c,o,t);if(!0!==u)throw new i("option "+o+" must be "+u,i.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new i("Unknown option "+o,i.ERR_BAD_OPTION)}}r.transitional=function(t,e,n){function r(t,e){return"[Axios v"+s+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,s,a){if(!1===t)throw new i(r(s," has been removed"+(e?" in "+e:"")),i.ERR_DEPRECATED);return e&&!o[s]&&(o[s]=!0,console.warn(r(s," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,s,a)}},t.exports={assertOptions:a,validators:r}},4867:function(t,e,n){"use strict";var s=n(1849),i=Object.prototype.toString,r=function(t){return function(e){var n=i.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function o(t){return t=t.toLowerCase(),function(e){return r(e)===t}}function a(t){return Array.isArray(t)}function c(t){return"undefined"===typeof t}function u(t){return null!==t&&!c(t)&&null!==t.constructor&&!c(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var l=o("ArrayBuffer");function h(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&l(t.buffer),e}function d(t){return"string"===typeof t}function f(t){return"number"===typeof t}function p(t){return null!==t&&"object"===typeof t}function m(t){if("object"!==r(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}var g=o("Date"),y=o("File"),v=o("Blob"),w=o("FileList");function E(t){return"[object Function]"===i.call(t)}function b(t){return p(t)&&E(t.pipe)}function T(t){var e="[object FormData]";return t&&("function"===typeof FormData&&t instanceof FormData||i.call(t)===e||E(t.toString)&&t.toString()===e)}var C=o("URLSearchParams");function S(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function A(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function _(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var n=0,s=t.length;n<s;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function I(){var t={};function e(e,n){m(t[n])&&m(e)?t[n]=I(t[n],e):m(e)?t[n]=I({},e):a(e)?t[n]=e.slice():t[n]=e}for(var n=0,s=arguments.length;n<s;n++)_(arguments[n],e);return t}function D(t,e,n){return _(e,(function(e,i){t[i]=n&&"function"===typeof e?s(e,n):e})),t}function k(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}function N(t,e,n,s){t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)}function x(t,e,n){var s,i,r,o={};e=e||{};do{s=Object.getOwnPropertyNames(t),i=s.length;while(i-- >0)r=s[i],o[r]||(e[r]=t[r],o[r]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e}function O(t,e,n){t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;var s=t.indexOf(e,n);return-1!==s&&s===n}function R(t){if(!t)return null;var e=t.length;if(c(e))return null;var n=new Array(e);while(e-- >0)n[e]=t[e];return n}var L=function(t){return function(e){return t&&e instanceof t}}("undefined"!==typeof Uint8Array&&Object.getPrototypeOf(Uint8Array));t.exports={isArray:a,isArrayBuffer:l,isBuffer:u,isFormData:T,isArrayBufferView:h,isString:d,isNumber:f,isObject:p,isPlainObject:m,isUndefined:c,isDate:g,isFile:y,isBlob:v,isFunction:E,isStream:b,isURLSearchParams:C,isStandardBrowserEnv:A,forEach:_,merge:I,extend:D,trim:S,stripBOM:k,inherits:N,toFlatObject:x,kindOf:r,kindOfTest:o,endsWith:O,toArray:R,isTypedArray:L,isFileList:w}}}]);
//# sourceMappingURL=about.bfcb69d9.js.map