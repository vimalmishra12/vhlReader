"use strict";
var action = require("../../core/actionLibrary/baseActionLibrary.js");
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var appShellPage = require("./appShell.page.js");

module.exports = {
  hyperLinkAnswer:
    selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperLinkAnswer,
  hyperLinkVideo:
    selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperLinkVideo,
  hyperlinkAudio:
    selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperlinkAudio,
  hyperlinkActivity:
    selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperlinkActivity,
  hyperlinkNewTab:
    selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperlinkNewTab,
  hyperlinkAudioNoTranscript:
    selectorFile.css.ComproC1.eBookLearningPageHyperlink
      .hyperlinkAudioNoTranscript,
  hyperlinkNewTab:
    selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperlinkNewTab,
  hyperlinkGoToPage:
    selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperlinkGoToPage,
  hyperLinkGame:
    selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperLinkGame,
  hyperZoomHotspot:
    selectorFile.css.ComproC1.eBookLearningPageHyperlink.hyperZoomHotspot,

  hyperAnswerReveal:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerReveal,
  hyperAudioClose:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAudioClose,
  hyperAnswerClose:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerClose,
  hyperVideoClose:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperVideoClose,
  hyperVideoPlay:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperVideoPlay,
  hyperAnswerFullScreen:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerFullScreen,
  hyperAnswerExitFullScreen:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerExitFullScreen,
  hyperActivityNext:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperActivityNext,
  hyperZoomHotspotClose:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperZoomHotspotClose,

  hyperAnswerQuestion:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.hyperAnswerQuestion,
  activityGoodEffort:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.activityGoodEffort,
  startAgainActivity:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.startAgainActivity,
  exitActivity: selectorFile.css.ComproC1.hyperLinkAnswerWindow.exitActivity,
  activityIFrame:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.activityIFrame,
  activityScoreCheck:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.activityScoreCheck,
  activityAnsElement:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.activityAnsElement,

  HyperShowHideTranscript:
    selectorFile.css.ComproC1.hyperLinkAnswerWindow.HyperShowHideTranscript,
  hyperAudioPlay_pause:
    selectorFile.css.ComproC1.hyperlinkAudio.hyperAudioPlay_pause,
  hyperAudioClose: selectorFile.css.ComproC1.hyperlinkAudio.hyperAudioClose,

  //   click_hyperlinkActivity: async function () {
  //     await logger.logInto(await stackTrace.get());
  //     let res;

  //     // Click on the hyperlink activity button
  //     res = await action.click(this.hyperlinkActivity);
  //     if (res === true) {
  //         await logger.logInto(await stackTrace.get(), "hyperLinkActivity is clicked");
  //         await browser.pause(2000); // Small delay for UI stability
  //         console.log("hyperLinkActivity clicked successfully.");

  //         const draggableItems = $$('ul.elements.pool .draggable.drag_item');

  //         // Selector for drop areas (assuming they're empty initially and indexed)
  //         const dropAreas = $$('ul.elements.pool .drop_item_zone.ui-droppable');

  //         // Loop through each draggable item and drag it to its respective drop area
  //         for (let i = 0; i < draggableItems.length; i++) {
  //             const item = draggableItems[i];
  //             const targetDropArea = dropAreas[i];

  //             // Perform drag-and-drop
  //             await item.dragAndDrop(targetDropArea);

  //             // Optional: Add a slight pause for visual confirmation during execution
  //             await browser.pause(500);
  //         }

  //         await browser.pause(10000);

  //         // Close the activity answer modal
  //         try {
  //             await $(this.hyperAnswerClose).waitForDisplayed({ timeout: 3000 });
  //             await $(this.hyperAnswerClose).click();
  //             console.log("Closed activity answer modal.");
  //         } catch (error) {
  //             console.error("Error closing the activity answer modal:", error);
  //             await logger.logInto(await stackTrace.get(), error.message, "error");
  //         }

  //     } else {
  //         // Log the failure if the hyperlink activity is not clicked
  //         await logger.logInto(
  //             await stackTrace.get(),
  //             `${res} - hyperLinkActivity is NOT clicked`,
  //             "error"
  //         );
  //     }
  //     return res;
  // },

  click_hyperlinkActivity: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.hyperlinkActivity);

    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " hyperLinkActivity is clicked"
      );
      await browser.pause(4000);

      const frameElement = await action.findElement(this.activityIFrame);
      const boole = await action.switchToFrame(frameElement);
      //console.log(boole + "1008");

      for (let i = 1; i <= 12; i++) {
        // const selector = `li:nth-child(${i})`;
        await browser.pause(2000);
        //const selector =".draggable button[aria-labelledby^=\"content-\"]"
        await action.click(this.activityAnsElement);
        await browser.pause(2000);
      }
      //console.log("1008 ");

      await action.switchToParentFrame();

      await browser.pause(2000);

      // await action.waitForDisplayed(this.activityScoreCheck);
      // await action.click(this.activityScoreCheck);
      

      //await action.switchToParentFrame();

      // await browser.pause(300);

      // await action.waitForDisplayed(this.hyperActivityNext);
      // await action.click(this.hyperActivityNext);
      // await browser.pause(2000);

      //const pageText = await $(this.activityGoodEffort).getText();
      // const pageText = await action.getText(this.activityGoodEffort);
      // res = pageText;

      // await action.waitForDisplayed(this.startAgainActivity);
      // await action.click(this.startAgainActivity);
      // await browser.pause(2000);

      // await action.waitForDisplayed(this.hyperAnswerClose);
      // await action.click(this.hyperAnswerClose);
      // await browser.pause(2000);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "hyperLinkActivity is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_hyperlinkNewTab: async function () {
    await logger.logInto(await stackTrace.get());
    let res;
    res = await action.click(this.hyperlinkNewTab);
    console.log("val of res is hyperlinkNewTab: ", res);

    if (res === true) {
      await logger.logInto(
        await stackTrace.get(),
        "hyperlinkNewTab is clicked"
      );

      // Store the original tab handle
      const originalWindow = await browser.getWindowHandle();

      // Wait for the new tab to open
      await browser.waitUntil(
        async () => {
          const handles = await browser.getWindowHandles();
          return handles.length > 1;
        },
        {
          timeout: 5000,
          timeoutMsg: "New tab did not open within the timeout period",
        }
      );

      // Automatically switched to the new tab
      const windowHandles = await browser.getWindowHandles();
      const newTab = windowHandles.find((handle) => handle !== originalWindow);

      // Ensure we're on the new tab
      await browser.switchToWindow(newTab);

      // Perform actions on the new tab (if needed)
      console.log("Performing actions on the new tab");

      // Return to the original tab
      await browser.switchToWindow(originalWindow);

      // Close the new tab
      await browser.switchToWindow(newTab);
      await browser.pause(3000);
      await browser.closeWindow();

      // Switch back to the original tab after closing the new one
      await browser.switchToWindow(originalWindow);
      await logger.logInto(
        await stackTrace.get(),
        "Switched back to the original tab and closed the new tab"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + " hyperlinkNewTab is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_hyperlinkAudioNoTranscript: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.hyperlinkAudioNoTranscript);
    console.log("val of res is hyperlinkAudioNoTranscript: ", res);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " hyperlinkAudioNoTranscript is clicked"
      );

      await $(this.hyperAudioClose).waitForDisplayed();
      await $(this.hyperAudioClose).click();
      await browser.pause(3000);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "hyperlinkAudioNoTranscript is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_hyperLinkGame: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.hyperLinkGame);
    console.log("val of res is hyperLinkGame: ", res);
    if (true == res) {
      await logger.logInto(await stackTrace.get(), " hyperLinkGame is clicked");

      await browser.pause(3000);
      await $(this.hyperAnswerClose).waitForDisplayed();
      await $(this.hyperAnswerClose).click();

      await browser.pause(3000);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "hyperLinkGame is NOT clicked",
        "error"
      );
    }
    return res;
  },
  click_hyperlinkGoToPage: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.hyperlinkGoToPage);
    console.log("val of res is hyperlinkGoToPage: ", res);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " hyperlinkGoToPage is clicked"
      );
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "hyperlinkGoToPage is NOT clicked",
        "error"
      );
    }
    return res;
  },
  click_hyperZoomHotspot: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.doubleClick(this.hyperZoomHotspot);
    console.log("val of res is hyperZoomHotspot: ", res);
    if (true == res) {
      await browser.pause(1000);
      await logger.logInto(
        await stackTrace.get(),
        " hyperZoomHotspot is clicked"
      );
      res = true;
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "hyperZoomHotspot is NOT clicked",
        "error"
      );
      res = false;
    }
    return res;
  },

  click_hyperZoomHotspotClose: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    console.log(
      "Selector for hyperZoomHotspotClose 1011: ",
      this.hyperZoomHotspotClose
    );

    res = await action.click(this.hyperZoomHotspotClose);
    console.log("val of res is hyperZoomHotspotClose1012: ", res);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " hyperZoomHotspotClose is clicked"
      );
      //res= true;
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "hyperZoomHotspotClose is NOT clicked",
        "error"
      );
      //res=false;
    }
    return res;
  },

  click_hyperLinkAnswer: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.hyperLinkAnswer);
    console.log("val of res is hyperLinkAnswer: ", res);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " hyperLinkAnswer is clicked"
      );

      await $(this.hyperAnswerFullScreen).waitForDisplayed();
      await $(this.hyperAnswerFullScreen).click();
      await browser.pause(3000);

      await $(this.hyperAnswerReveal).waitForDisplayed();
      await $(this.hyperAnswerReveal).click();
      await browser.pause(3000);

      await $(this.hyperAnswerExitFullScreen).waitForDisplayed();
      await $(this.hyperAnswerExitFullScreen).click();
      await browser.pause(3000);

      await $(this.hyperAnswerClose).waitForDisplayed();
      await $(this.hyperAnswerClose).click();
      await browser.pause(3000);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "hyperLinkAnswer is NOT clicked",
        "error"
      );
    }
    return res;
  },

  click_hyperlinkAudio: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.hyperlinkAudio);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " hyperlinkAudio is clicked"
      );

      // for play the audio
      await $(this.hyperAudioPlay_pause).waitForDisplayed();
      await $(this.hyperAudioPlay_pause).click();
      await browser.pause(1000);

      await $(this.HyperShowHideTranscript).waitForDisplayed();
      await $(this.HyperShowHideTranscript).click();
      await browser.pause(1000);

      // await $(this.hyperAudioPlay_pause).waitForDisplayed();
      // await $(this.hyperAudioPlay_pause).click();
      // await browser.pause(1000);

      await $(this.HyperShowHideTranscript).waitForDisplayed();
      await $(this.HyperShowHideTranscript).click();
      await browser.pause(1000);

      // // for pause the audio
      //            await $("button[class='plyr__control playpause plyr__control--pressed plyr__tab-focus'] div[class='icon--pressed'] span[class='glyph']").waitForDisplayed();
      //            await $("button[class='plyr__control playpause plyr__control--pressed plyr__tab-focus'] div[class='icon--pressed'] span[class='glyph']").click();
      //            //await $("div[class='ctrls'] div[class='icon--not-pressed'] span[class='glyph']").click();
      //            await browser.pause(5000)

      await $(this.hyperAudioClose).waitForDisplayed();
      await $(this.hyperAudioClose).click();
      await browser.pause(3000);
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "hyperlinkAudio is NOT clicked",
        "error"
      );
    }
    return res;
  },
  click_hyperLinkVideo: async function () {
    await logger.logInto(await stackTrace.get());
    var res;
    res = await action.click(this.hyperLinkVideo);
    console.log("val of res is hyperLinkVideo 2: ", res);
    if (true == res) {
      await logger.logInto(
        await stackTrace.get(),
        " hyperLinkVideo 2 is clicked"
      );

      // await $(this.hyperVideoPlay).waitForDisplayed();
      // await $(this.hyperVideoPlay).click();
      // await browser.pause(3000)

      // await $(this.hyperAnswerReveal).waitForDisplayed();
      // await $(this.hyperAnswerReveal).click();
      // await browser.pause(3000)

      // await $(this.hyperAnswerExitFullScreen).waitForDisplayed();
      // await $(this.hyperAnswerExitFullScreen).click();
      // await browser.pause(3000)
      await browser.pause(3000);

      await $(this.hyperVideoClose).waitForDisplayed();
      await $(this.hyperVideoClose).click();
      await browser.pause(3000);

      //     // After your assertion, you can close the new window and switch back to the original window if needed
      //     await browser.closeWindow();  // Close the new window
      //     await browser.switchToWindow(currentWindow);  // Switch back to the original window
      // } else {
      //   console.log("after pause   old  window ")
      //     await logger.logInto(await stackTrace.get(), "No new window detected", 'error');
      // }
    } else {
      await logger.logInto(
        await stackTrace.get(),
        res + "hyperLinkAnswer is NOT clicked",
        "error"
      );
    }
    return res;
  },
};
