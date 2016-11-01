YUI.add("aui-dialog-iframe-deprecated",function(e,t){var n=e.Lang,r=n.isFunction,i=e.getClassName,s="iframe",o="bindLoadHandler",u="bodyContent",a="closeOnEscape",f="contentWindow",l="detach",c="document",h="documentElement",p="gutter",d="host",v="iframeCssClass",m="iframeId",g="key",y="load",b="offsetHeight",w="offsetWidth",E="paddingBottom",S="paddingLeft",x="paddingRight",T="paddingTop",N="renderUI",C="rendered",k="src",L="unload",A="uri",O="uriChange",M="visibleChange",_=i("dialog",s,"bd"),D=i("dialog",s,"node"),P=i("dialog",s,"root","node"),H=[D],B='<iframe class="{cssClass}" frameborder="0" id="{id}" name="{id}" src="{uri}"></iframe>',j=e.Widget.UI_SRC,F={src:j},I=e.Component.create({ATTRS:{bindLoadHandler:{validator:r,value:function(){var t=this;t.node.on("load",e.bind(t.fire,t,"load"))}},closeOnEscape:{validator:n.isBoolean,value:!0},gutter:{setter:"_setGutter",valueFn:"_gutterValueFn"},iframeCssClass:{value:"",setter:"_setIframeCssClass"},iframeId:{valueFn:function(){var t=this;return t.get("id")||e.guid()}},uri:{}},EXTENDS:e.Plugin.Base,NAME:s,NS:s,prototype:{initializer:function(){var t=this;t._host=t.get(d),t._eventHandles=[],t.publish(y,{defaultFn:t._defaultLoadIframeFn}),t._host.get(C)?t._initializeIframe():t.afterHostMethod(N,e.debounce(t._afterRenderUI,50,t),t),t.afterHostMethod("_uiSetVisible",e.bind(t._afterHostUISetVisible,t),t),t.afterHostMethod("_fillHeight",e.bind(t._setNodeDimensions,t),t),t.afterHostMethod("_uiSetWidth",e.bind(t._setNodeDimensions,t),t),t.after(a+"Change",t._uiSetCloseOnEscape,t)},destructor:function(){var e=this;e._bodyNode.loadingmask.destroy(),e._detachEventHandles(),e._host.set(u,e._previousBodyContent),e.node.remove(!0)},_afterHostUISetVisible:function(e){var t=this;e&&t._host._fillHeight()},_afterRenderUI:function(){var e=this;e._initializeIframe()},_afterUriChange:function(e){var t=this;e.src!==j&&t._uiSetUri(e.newVal,e.prevVal)},_bindEvents:function(){var t=this;t.afterHostEvent(M,t._afterDialogVisibleChange),t.after(O,t._afterUriChange),t.node.on(y,e.bind(t._onLoadIframe,t));var n=t.get(o);n.call(t)},_detachEventHandles:function(){var t=this,n=t._eventHandles;e.Array.invoke(n,l),t._eventCloseOnEscapeHandle&&t._eventCloseOnEscapeHandle.detach(),n.length=0},_defaultLoadIframeFn:function(){var e=this,t=e.node;try{var n=t.get(f);n.once(L,e._detachEventHandles,e);var r=n.get(c);r.get(h).addClass(P),e.set(A,r.get("location.href"),F),e._uiSetCloseOnEscape()}catch(i){}e._bodyNode.loadingmask.hide(),e._host._syncUIPosAlign()},_gutterValueFn:function(){return function(){var e=this,t=e._host.bodyNode;return{bottom:t.getStyle(E),left:t.getStyle(S),right:t.getStyle(x),top:t.getStyle(T)}}},_initializeIframe:function(){var t=this;t._plugIframe(),t._bindEvents();var n=t._bodyNode;n.plug(e.LoadingMask);var r=n.loadingmask;r.overlayMask.after(M,t._afterMaskVisibleChange,t),r.show()},_onLoadIframe:function(){var e=this;e._setIframeContentGutter(),e._setNodeDimensions()},_plugIframe:function(){var t=this,r=n.sub(B,{cssClass:t.get(v),id:t.get(m),uri:t.get(A)}),i=t._host.bodyNode,s=e.Node.create(r);t._host.set(u,s),i.addClass(_),t._bodyNode=i,t.node=s},_setGutter:function(e){var t=this;return r(e)&&(e=e.call(t)),e},_setIframeContentGutter:function(){var e=this,t=e._host.bodyNode,n=e.get(p),r=e.node.get(f),i=r.get(c);i.get(h).setStyles({paddingBottom:n.bottom,paddingLeft:n.left,paddingRight:n.right,paddingTop:n.top}),t.setStyles({height:t.get(b),padding:"0"})},_setIframeCssClass:function(e){return H[1]=e,H.join(" ")},_setNodeDimensions:function(){var e=this,t=e._host.bodyNode,n=e.node;t&&n&&n.setStyles({height:t.get(b),width:t.get(w)})},_uiSetCloseOnEscape:function(){var t=this;if(t.get(a)){if(!t._eventCloseOnEscapeHandle)try{var n=t.node.get(f),r=n.get(c);t._eventCloseOnEscapeHandle=e.on(g,function(){t._host.hide()},[r],"down:27")}catch(i){}}else t._eventCloseOnEscapeHandle&&(t._eventCloseOnEscapeHandle.detach(),t._eventCloseOnEscapeHandle=null)},_uiSetUri:function(e,t){var n=this,r=n._bodyNode.loadingmask,i=t.split("#"),s=e.split("#");s[0]!==i[0]&&r&&r.show(),n.node.attr(k,e)}}});e.Plugin.DialogIframe=I},"3.1.0-deprecated.2",{requires:["plugin","array-invoke","aui-base-deprecated","aui-loading-mask-deprecated"],skinnable:!0});
