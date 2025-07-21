"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {
userDrop_down: selectorFile.css.ComproC1.appShell.userDrop_down,
logout_btn: selectorFile.css.ComproC1.appShell.logout_btn,


isInitialized: async function ()
{ 
var res;
await logger.logInto(await stackTrace.get());
await action.waitForDocumentLoad();
res = {
pageStatus: await action.waitForDisplayed(this.userDrop_down),
};
return res; 
},

appShell_Data: async function ()
{  
await logger.logInto(await stackTrace.get());
 var obj;
 obj = {
userDrop_down:((await action.getElementCount(this.userDrop_down)) > 0) ? await action.getText(this.userDrop_down) : null,
logout_btn:((await action.getElementCount(this.logout_btn)) > 0) ? await action.getText(this.logout_btn) : null,
}
 return obj; 
},


click_userDrop_down: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.userDrop_down);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " userDrop_down is clicked");
}
else {
await logger.logInto(await stackTrace.get(), res +"userDrop_down is NOT clicked", 'error');
}
return res;
},

click_logout_btn: async function () {
await logger.logInto(await stackTrace.get());
var res;
res =await action.click(this.logout_btn);
if (true == res) {
 await logger.logInto(await stackTrace.get(), " logout_btn is clicked");
res =await require ('./landing.page').isInitialized();
}
else {
await logger.logInto(await stackTrace.get(), res +"logout_btn is NOT clicked", 'error');
}
return res;
},

}

