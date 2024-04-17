"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.assetHandlers=exports.configs=exports.unload=exports.load=void 0;const load=function(){console.debug(`${PACKAGE_NAME} load`)};exports.load=load;const unload=function(){console.debug(`${PACKAGE_NAME} unload`)};exports.unload=unload;const PACKAGE_NAME="cocos-build-template",complexTestItems={number:{label:`i18n:${PACKAGE_NAME}.options.complexTestNumber`,description:`i18n:${PACKAGE_NAME}.options.complexTestNumber`,default:80,render:{ui:"ui-num-input",attributes:{step:1,min:0}}},string:{label:`i18n:${PACKAGE_NAME}.options.complexTestString`,description:`i18n:${PACKAGE_NAME}.options.complexTestString`,default:"cocos",render:{ui:"ui-input",attributes:{placeholder:`i18n:${PACKAGE_NAME}.options.enterCocos`}},verifyRules:["ruleTest"]},boolean:{label:`i18n:${PACKAGE_NAME}.options.complexTestBoolean`,description:`i18n:${PACKAGE_NAME}.options.complexTestBoolean`,default:!0,render:{ui:"ui-checkbox"}}};exports.configs={"*":{hooks:"./hooks",doc:"editor/publish/custom-build-plugin.html",options:{remoteAddress:{label:`i18n:${PACKAGE_NAME}.options.remoteAddress`,default:"https://www.cocos.com/",render:{ui:"ui-input",attributes:{placeholder:"Enter remote address..."}},verifyRules:["required"]},enterCocos:{label:`i18n:${PACKAGE_NAME}.options.enterCocos`,description:`i18n:${PACKAGE_NAME}.options.enterCocos`,default:"",render:{ui:"ui-input",attributes:{placeholder:`i18n:${PACKAGE_NAME}.options.enterCocos`}},verifyRules:["ruleTest"],verifyLevel:"warn"},selectTest:{label:`i18n:${PACKAGE_NAME}.options.selectTest`,description:`i18n:${PACKAGE_NAME}.options.selectTest`,default:"option2",render:{ui:"ui-select",items:[{label:`i18n:${PACKAGE_NAME}.options.selectTestOption1`,value:"option1"},{label:`i18n:${PACKAGE_NAME}.options.selectTestOption2`,value:"option2"}]}},objectTest:{label:`i18n:${PACKAGE_NAME}.options.objectTest`,description:`i18n:${PACKAGE_NAME}.options.objectTest`,type:"object",default:{number:complexTestItems.number.default,string:complexTestItems.string.default,boolean:complexTestItems.boolean.default},itemConfigs:complexTestItems},arrayTest:{label:`i18n:${PACKAGE_NAME}.options.arrayTest`,description:`i18n:${PACKAGE_NAME}.options.arrayTest`,type:"array",default:[complexTestItems.number.default,complexTestItems.string.default,complexTestItems.boolean.default],itemConfigs:JSON.parse(JSON.stringify(Object.values(complexTestItems)))}},verifyRuleMap:{ruleTest:{message:`i18n:${PACKAGE_NAME}.options.ruleTest_msg`,func:(e,t)=>"cocos"===e}}}},exports.assetHandlers="./asset-handlers";