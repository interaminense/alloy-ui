if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-select-deprecated/aui-form-builder-field-select-deprecated.js']) {
   __coverage__['build/aui-form-builder-field-select-deprecated/aui-form-builder-field-select-deprecated.js'] = {"path":"build/aui-form-builder-field-select-deprecated/aui-form-builder-field-select-deprecated.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":52},"end":{"line":1,"column":71}}},"2":{"name":"(anonymous_2)","line":72,"loc":{"start":{"line":72,"column":21},"end":{"line":72,"column":32}}},"3":{"name":"(anonymous_3)","line":114,"loc":{"start":{"line":114,"column":17},"end":{"line":114,"column":28}}},"4":{"name":"(anonymous_4)","line":133,"loc":{"start":{"line":133,"column":26},"end":{"line":133,"column":37}}},"5":{"name":"(anonymous_5)","line":161,"loc":{"start":{"line":161,"column":24},"end":{"line":161,"column":38}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":184,"column":78}},"2":{"start":{"line":10,"column":0},"end":{"line":22,"column":65}},"3":{"start":{"line":33,"column":0},"end":{"line":177,"column":3}},"4":{"start":{"line":73,"column":16},"end":{"line":73,"column":34}},"5":{"start":{"line":115,"column":12},"end":{"line":115,"column":32}},"6":{"start":{"line":117,"column":12},"end":{"line":124,"column":14}},"7":{"start":{"line":134,"column":12},"end":{"line":135,"column":48}},"8":{"start":{"line":137,"column":12},"end":{"line":137,"column":104}},"9":{"start":{"line":139,"column":12},"end":{"line":149,"column":15}},"10":{"start":{"line":151,"column":12},"end":{"line":151,"column":25}},"11":{"start":{"line":162,"column":12},"end":{"line":163,"column":60}},"12":{"start":{"line":165,"column":12},"end":{"line":170,"column":13}},"13":{"start":{"line":166,"column":16},"end":{"line":166,"column":66}},"14":{"start":{"line":169,"column":16},"end":{"line":169,"column":57}},"15":{"start":{"line":172,"column":12},"end":{"line":172,"column":64}},"16":{"start":{"line":179,"column":0},"end":{"line":179,"column":50}},"17":{"start":{"line":181,"column":0},"end":{"line":181,"column":59}}},"branchMap":{"1":{"line":165,"type":"if","locations":[{"start":{"line":165,"column":12},"end":{"line":165,"column":12}},{"start":{"line":165,"column":12},"end":{"line":165,"column":12}}]}},"code":["(function () { YUI.add('aui-form-builder-field-select-deprecated', function (A, NAME) {","","/**"," * The Form Builder Component"," *"," * @module aui-form-builder"," * @submodule aui-form-builder-field-select"," */","","var L = A.Lang,","","    AEscape = A.Escape,","","    getCN = A.getClassName,","","    CSS_FORM_CONTROL = getCN('form', 'control'),","    CSS_FORM_BUILDER_FIELD = getCN('form-builder-field'),","    CSS_FORM_BUILDER_FIELD_NODE = getCN('form-builder-field', 'node'),","","    TPL_SELECT =","        '<select id=\"{id}\" class=\"' + [CSS_FORM_BUILDER_FIELD_NODE, CSS_FORM_CONTROL]","        .join(' ') + '\" name=\"{name}\" value=\"{value}\"></select>';","","/**"," * A base class for `A.FormBuilderSelectField`."," *"," * @class A.FormBuilderSelectField"," * @extends A.FormBuilderMultipleChoiceField"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var FormBuilderSelectField = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'form-builder-select-field',","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.FormBuilderSelectField`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * Checks if the drop-down list allows multiple selections.","         *","         * @attribute multiple","         * @default false","         * @type Boolean","         */","        multiple: {","            setter: A.DataType.Boolean.parse,","            value: false","        },","","        /**","         * Reusable block of markup used to generate the field.","         *","         * @attribute template","         */","        template: {","            valueFn: function() {","                return TPL_SELECT;","            }","        }","","    },","","    /**","     * Static property used to define the UI attributes.","     *","     * @property UI_ATTRS","     * @type Array","     * @static","     */","    UI_ATTRS: A.FormBuilderField.UI_ATTRS.concat(['multiple', 'predefinedValue']),","","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type String","     * @static","     */","    CSS_PREFIX: CSS_FORM_BUILDER_FIELD,","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type Object","     * @static","     */","    EXTENDS: A.FormBuilderMultipleChoiceField,","","    prototype: {","","        /**","         * Injects data into the template and returns the HTML result.","         *","         * @method getHTML","         * @return {String}","         */","        getHTML: function() {","            var instance = this;","","            return L.sub(","                instance.get('template'), {","                    id: AEscape.html(instance.get('id')),","                    label: AEscape.html(instance.get('label')),","                    name: AEscape.html(instance.get('name')),","                    value: AEscape.html(instance.get('predefinedValue'))","                }","            );","        },","","        /**","         * Returns a list of property models including the `A.RadioCellEditor`","         * model.","         *","         * @method getPropertyModel","         */","        getPropertyModel: function() {","            var instance = this,","                strings = instance.getStrings();","","            var model = A.FormBuilderSelectField.superclass.getPropertyModel.apply(instance, arguments);","","            model.push({","                attributeName: 'multiple',","                editor: new A.RadioCellEditor({","                    options: {","                        'true': strings.yes,","                        'false': strings.no","                    }","                }),","                formatter: A.bind(instance._booleanFormatter, instance),","                name: strings.multiple","            });","","            return model;","        },","","        /**","         * Set the `multiple` attribute in the UI.","         *","         * @method _uiSetMultiple","         * @param val","         * @protected","         */","        _uiSetMultiple: function(val) {","            var instance = this,","                templateNode = instance.get('templateNode');","","            if (val) {","                templateNode.setAttribute('multiple', 'multiple');","            }","            else {","                templateNode.removeAttribute('multiple');","            }","","            instance.predefinedValueEditor.set('multiple', val);","        }","","    }","","});","","A.FormBuilderSelectField = FormBuilderSelectField;","","A.FormBuilderField.types.select = A.FormBuilderSelectField;","","","}, '3.1.0-deprecated.2', {\"requires\": [\"aui-form-builder-field-deprecated\"]});","","}());"]};
}
var __cov_OmLdRXjcEjNW4Fh5zsna8g = __coverage__['build/aui-form-builder-field-select-deprecated/aui-form-builder-field-select-deprecated.js'];
__cov_OmLdRXjcEjNW4Fh5zsna8g.s['1']++;YUI.add('aui-form-builder-field-select-deprecated',function(A,NAME){__cov_OmLdRXjcEjNW4Fh5zsna8g.f['1']++;__cov_OmLdRXjcEjNW4Fh5zsna8g.s['2']++;var L=A.Lang,AEscape=A.Escape,getCN=A.getClassName,CSS_FORM_CONTROL=getCN('form','control'),CSS_FORM_BUILDER_FIELD=getCN('form-builder-field'),CSS_FORM_BUILDER_FIELD_NODE=getCN('form-builder-field','node'),TPL_SELECT='<select id="{id}" class="'+[CSS_FORM_BUILDER_FIELD_NODE,CSS_FORM_CONTROL].join(' ')+'" name="{name}" value="{value}"></select>';__cov_OmLdRXjcEjNW4Fh5zsna8g.s['3']++;var FormBuilderSelectField=A.Component.create({NAME:'form-builder-select-field',ATTRS:{multiple:{setter:A.DataType.Boolean.parse,value:false},template:{valueFn:function(){__cov_OmLdRXjcEjNW4Fh5zsna8g.f['2']++;__cov_OmLdRXjcEjNW4Fh5zsna8g.s['4']++;return TPL_SELECT;}}},UI_ATTRS:A.FormBuilderField.UI_ATTRS.concat(['multiple','predefinedValue']),CSS_PREFIX:CSS_FORM_BUILDER_FIELD,EXTENDS:A.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){__cov_OmLdRXjcEjNW4Fh5zsna8g.f['3']++;__cov_OmLdRXjcEjNW4Fh5zsna8g.s['5']++;var instance=this;__cov_OmLdRXjcEjNW4Fh5zsna8g.s['6']++;return L.sub(instance.get('template'),{id:AEscape.html(instance.get('id')),label:AEscape.html(instance.get('label')),name:AEscape.html(instance.get('name')),value:AEscape.html(instance.get('predefinedValue'))});},getPropertyModel:function(){__cov_OmLdRXjcEjNW4Fh5zsna8g.f['4']++;__cov_OmLdRXjcEjNW4Fh5zsna8g.s['7']++;var instance=this,strings=instance.getStrings();__cov_OmLdRXjcEjNW4Fh5zsna8g.s['8']++;var model=A.FormBuilderSelectField.superclass.getPropertyModel.apply(instance,arguments);__cov_OmLdRXjcEjNW4Fh5zsna8g.s['9']++;model.push({attributeName:'multiple',editor:new A.RadioCellEditor({options:{'true':strings.yes,'false':strings.no}}),formatter:A.bind(instance._booleanFormatter,instance),name:strings.multiple});__cov_OmLdRXjcEjNW4Fh5zsna8g.s['10']++;return model;},_uiSetMultiple:function(val){__cov_OmLdRXjcEjNW4Fh5zsna8g.f['5']++;__cov_OmLdRXjcEjNW4Fh5zsna8g.s['11']++;var instance=this,templateNode=instance.get('templateNode');__cov_OmLdRXjcEjNW4Fh5zsna8g.s['12']++;if(val){__cov_OmLdRXjcEjNW4Fh5zsna8g.b['1'][0]++;__cov_OmLdRXjcEjNW4Fh5zsna8g.s['13']++;templateNode.setAttribute('multiple','multiple');}else{__cov_OmLdRXjcEjNW4Fh5zsna8g.b['1'][1]++;__cov_OmLdRXjcEjNW4Fh5zsna8g.s['14']++;templateNode.removeAttribute('multiple');}__cov_OmLdRXjcEjNW4Fh5zsna8g.s['15']++;instance.predefinedValueEditor.set('multiple',val);}}});__cov_OmLdRXjcEjNW4Fh5zsna8g.s['16']++;A.FormBuilderSelectField=FormBuilderSelectField;__cov_OmLdRXjcEjNW4Fh5zsna8g.s['17']++;A.FormBuilderField.types.select=A.FormBuilderSelectField;},'3.1.0-deprecated.2',{'requires':['aui-form-builder-field-deprecated']});
