YUI.add("aui-aria-table-sortable",function(e,t){function r(){}var n=e.Lang;r.ATTRS={captionCss:{validator:n.isString,value:""},captionLive:{validator:n.isString,value:"polite"},captionNode:{setter:function(t){var r=this;return t||(t=e.Node.create(n.sub(r.TPL_CAPTION,{captionCss:r.get("captionCss")}))),e.one(t)},value:null},captionRole:{validator:n.isString,value:"alert"},captionVisible:{validator:n.isBoolean,value:!1},screenReaderClass:{validator:n.isString,value:"sr-only"},stringsSortable:{value:{asc:"ascending",desc:"descending",sorted:"sorted",sortedBy:"sorted by",notSorted:"not sorted"}},tableNode:{setter:e.one,valueFn:function(){return this.get("host").get("boundingBox").one("table")},writeOnce:!0}},r.prototype={TPL_CAPTION:'<caption class="{captionCss}"></caption>',initializer:function(){var t=this;t.after("captionVisibleChange",e.bind(t._afterCaptionVisibleChange,t)),t.get("host").after("sort",e.bind(t._afterSort,t))},syncCaption:function(e,t){var r=this,i=r._getCaption(),s=r.get("stringsSortable");i.text(n.sub(s.sortedBy+": {columnName} {direction}",{columnName:e,direction:t?s.asc:s.desc}))},_afterCaptionVisibleChange:function(){var e=this;e._toggleScreenReaderClass()},_afterSort:function(t){var n=this,r,i,s=t.sortBy[0];i=e.Object.keys(s)[0],r=e.Object.values(s)[0]>0,n.syncCaption(i,r)},_getCaption:function(){var e=this,t=e.get("captionNode");return t.inDoc()||(e.get("tableNode").prepend(t),t.setAttribute("aria-live",e.get("captionLive")),t.setAttribute("role",e.get("captionRole")),e._toggleScreenReaderClass()),t},_toggleScreenReaderClass:function(){var e=this,t=e._getCaption();t.toggleClass(e.get("screenReaderClass"),!e.get("captionVisible"))}},e.Base.mix(e.Plugin.Aria,[r])},"3.1.0-deprecated.2",{requires:["aui-aria"]});
