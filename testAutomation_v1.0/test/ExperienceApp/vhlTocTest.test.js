"use strict";
var tocTest= require('../../pages/ExperienceApp/vhlTocTest.page.js');
var sts;

module.exports = {
TST_TOCT_TC_1 :   async function () { 
sts = await tocTest.isInitialized();
await assertion.assertEqual(sts.pageStatus, true, "tocTest page status mismatch");
},

TST_TOCT_TC_2 :   async function (testdata) { 
sts = await tocTest.click_tocLaunchBtn();
await assertion.assertEqual(sts, true,"tocLaunchBtn are not Clicked");
},

TST_TOCT_TC_3 :   async function (testdata) { 
sts = await tocTest.click_tocDockBtn();
await assertion.assertEqual(sts, true,"tocDockBtn are not Clicked");
},

TST_TOCT_TC_4 :   async function (testdata) { 
sts = await tocTest.click_tocUndockBtn();
await assertion.assertEqual(sts, true,"tocUndockBtn are not Clicked");
},

TST_TOCT_TC_5 :   async function (testdata) { 
sts = await tocTest.click_tocCloseBtn();
await assertion.assertEqual(sts, true,"tocCloseBtn are not Clicked");
},

TST_TOCT_TC_6 :   async function (testdata) { 
sts = await tocTest.click_tocSelectLessonBtn();
await assertion.assertEqual(sts, true,"tocSelectLessonBtn are not Clicked");
},

TST_TOCT_TC_7 :   async function (testdata) { 
sts = await tocTest.click_tocSelectPage();
await assertion.assertEqual(sts, true,"tocSelectPage are not Clicked");
},

TST_TOCT_TC_8 :   async function (testdata) { 
sts = await tocTest.set_tocEnterPageNumber(testdata.pageNumber);
await assertion.assertEqual(sts, true ,"tocEnterPageNumber values are not set");

},

TST_TOCT_TC_9 :   async function (testdata) { 
sts = await tocTest.click_tocEnterBtn();
await assertion.assertEqual(sts, true,"tocEnterBtn are not Clicked");
},

TST_TOCT_TC_10 :   async function (testdata) { 
sts = await tocTest.getData_toc();
await assertion.assertEqual(sts.tocLaunchBtn, testdata.tocLaunchBtn,"tocLaunchBtn Values is not as expected.");
await assertion.assertEqual(sts.tocDockBtn, testdata.tocDockBtn,"tocDockBtn Values is not as expected.");
await assertion.assertEqual(sts.tocUndockBtn, testdata.tocUndockBtn,"tocUndockBtn Values is not as expected.");
await assertion.assertEqual(sts.tocCloseBtn, testdata.tocCloseBtn,"tocCloseBtn Values is not as expected.");
await assertion.assertEqual(sts.tocSelectLessonBtn, testdata.tocSelectLessonBtn,"tocSelectLessonBtn Values is not as expected.");
await assertion.assertEqual(sts.tocSelectPage, testdata.tocSelectPage,"tocSelectPage Values is not as expected.");
await assertion.assertEqual(sts.tocEnterPageNumber, testdata.tocEnterPageNumber,"tocEnterPageNumber Values is not as expected.");
await assertion.assertEqual(sts.tocEnterBtn, testdata.tocEnterBtn,"tocEnterBtn Values is not as expected.");
await assertion.assertEqual(sts.tocHeading, testdata.tocHeading,"tocHeading Values is not as expected.");
},

}