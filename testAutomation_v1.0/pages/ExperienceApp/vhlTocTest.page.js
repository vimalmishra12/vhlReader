"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
tocLaunchBtn: selectorFile.vhlToc.tocLaunchBtn,
tocDockBtn: selectorFile.vhlToc.tocDockBtn,
tocUndockBtn: selectorFile.vhlToc.tocUndockBtn,
tocCloseBtn: selectorFile.vhlToc.tocCloseBtn,
tocSelectLessonBtn: selectorFile.vhlToc.tocSelectLessonBtn,
tocSelectPage: selectorFile.vhlToc.tocSelectPage,
tocEnterPageNumber: selectorFile.vhlToc.tocEnterPageNumber,
tocEnterBtn: selectorFile.vhlToc.tocEnterBtn,
tocHeading: selectorFile.vhlToc.tocHeading,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus:await action.waitForDisplayed(this.tocLaunchBtn),
};
return res; 
},

getData_toc: async function ()
{
await logger.logInto(await stackTrace.get());
var obj;
obj = {
tocLaunchBtn:(( await action.getElementCount(this.tocLaunchBtn)) > 0) ? await action.getText(this.tocLaunchBtn) : null,
tocDockBtn:(( await action.getElementCount(this.tocDockBtn)) > 0) ? await action.getText(this.tocDockBtn) : null,
tocUndockBtn:(( await action.getElementCount(this.tocUndockBtn)) > 0) ? await action.getText(this.tocUndockBtn) : null,
tocCloseBtn:(( await action.getElementCount(this.tocCloseBtn)) > 0) ? await action.getText(this.tocCloseBtn) : null,
tocSelectLessonBtn:(( await action.getElementCount(this.tocSelectLessonBtn)) > 0) ? await action.getText(this.tocSelectLessonBtn) : null,
tocSelectPage:(( await action.getElementCount(this.tocSelectPage)) > 0) ? await action.getText(this.tocSelectPage) : null,
tocEnterPageNumber:(( await action.getElementCount(this.tocEnterPageNumber)) > 0) ? await action.getText(this.tocEnterPageNumber) : null,
tocEnterBtn:(( await action.getElementCount(this.tocEnterBtn)) > 0) ? await action.getText(this.tocEnterBtn) : null,
tocHeading:(( await action.getElementCount(this.tocHeading)) > 0) ? await action.getText(this.tocHeading) : null,
}
 return obj; 
},


click_tocLaunchBtn: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res =await action.click(this.tocLaunchBtn);
    if (true == res) {
     await logger.logInto(await stackTrace.get(), " tocLaunchBtn is clicked");
    res = await action.waitForDisplayed(this. tocHeading, undefined);
    }
    else {
    await logger.logInto(await stackTrace.get(), res +"tocLaunchBtn is NOT clicked", 'error');
    }
    return res;
    },

click_tocDockBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.tocDockBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " tocDockBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"tocDockBtn is NOT clicked", 'error');
}
return res;
},

click_tocUndockBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.tocUndockBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " tocUndockBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"tocUndockBtn is NOT clicked", 'error');
}
return res;
},

click_tocCloseBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.tocCloseBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " tocCloseBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"tocCloseBtn is NOT clicked", 'error');
}
return res;
},

click_tocSelectLessonBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.tocSelectLessonBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " tocSelectLessonBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"tocSelectLessonBtn is NOT clicked", 'error');
}
return res;
},

click_tocSelectPage: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.tocSelectPage);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " tocSelectPage is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"tocSelectPage is NOT clicked", 'error');
}
return res;
},

click_tocEnterBtn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.tocEnterBtn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " tocEnterBtn is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"tocEnterBtn is NOT clicked", 'error');
}
return res;
},

set_tocEnterPageNumber:async  function (value){
var res;
await logger.logInto(await stackTrace.get());
res =await action.setValue(this.tocEnterPageNumber,value);
if (true == res) {
await logger.logInto(await stackTrace.get(), "Value is entered in tocEnterPageNumber");
}else {
await logger.logInto(await stackTrace.get(), res + "Value is NOT entered in tocEnterPageNumber", 'error');
}
return res;
},

}

