"use strict";
//hTML-dnd module required
//var dragAndDrop = require('html-dnd').codeForSelectors;

var res, res2;
var message;
//base action
module.exports = {

    click: async function (selector, options) {
        message = "element:" + selector;
        try {
            await this.scrollIntoView(selector, { block: "center" });
            let result = await (await $(selector)).click(options);
            if (result == null) {
                await logger.logInto(await stackTrace.get(), message);
                return true;
            }
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    doubleClick: async function (selector) {
        message = "element:" + selector;
        try {
            await (await $(selector)).isClickable();
            await (await $(selector)).doubleClick();
            await logger.logInto(await stackTrace.get(), message);
            return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    isEnabled: async function (selector) {
        message = "element:" + selector;
        try {
            let result = await (await $(selector)).isEnabled();
            await logger.logInto(await stackTrace.get(), message);
            return result;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    isClickable: async function (selector) {
        try {
            let result = await (await $(selector)).isClickable();
            await logger.logInto(await stackTrace.get(), message);
            return result;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    isDisplayed: async function (selector) {
        try {
            let result = await (await $(selector)).isDisplayed();
            await logger.logInto(await stackTrace.get(), message);
            return result;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    isSelected: async function (selector) {
        message = "element:" + selector;
        try {
            let result = await (await $(selector)).isSelected();
            await logger.logInto(await stackTrace.get(), message);
            return result;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    setValue: async function (selector, value) {
        message = "element:" + selector + " value:" + value;
        try {
            await this.clearValue(selector);
            await (await $(selector)).setValue(value);
            await logger.logInto(await stackTrace.get(), message);
            return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    addValue: async function (selector, value) {
        message = "element:" + selector + "value:" + value;
        try {
            let result = await (await $(selector)).addValue(value);
            if (result == null) {
                await logger.logInto(await stackTrace.get(), message);
                return true;
            }
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    getValue: async function (selector) {
        message = "element:" + selector;
        try {
            let result = await (await $(selector)).getValue();
            return result;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    clearValueDefault: async function (selector) {
        message = "element:" + selector;
        try {
            let result = await (await $(selector)).clearValue();
            return result;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    clearValue: async function (selector) {
        message = "element:" + selector;
        try {
            await browser.execute((selector) => {
                var elem = document.querySelector(selector);
                var event = new Event('input', { bubbles: true });
                elem.value = null;
                elem.dispatchEvent(event);
                elem.focus();
            }, selector);
            return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    moveTo: async function (selector, xOffset, yOffset) { //this async function needs to be enhanced to support offsets in percentages
        message = "element:" + selector + " xoffset:" + xOffset + " yoffset:" + yOffset;
        try {
            await (await $(selector)).moveTo({ xOffset, yOffset });
            await logger.logInto(await stackTrace.get(), message);
            return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    dragAndDrop: async function (draggable, droppable) {
        await logger.logInto(await stackTrace.get());
        message = "draggable:" + draggable + " droppable:" + draggable;
        try {
            var actions = {
                "type": "pointer",
                "id": "mouse1",
                "parameters": { "pointerType": "touch" },
                "actions": [
                    { "type": "pointerMove", "duration": 100, "origin": await $(draggable), "x": 0, "y": 0 },
                    { "type": "pointerDown", "button": 0 },
                    { "type": "pointerMove", "duration": 1000, "origin": await $(droppable), "x": 0, "y": 0 },
                    { "type": "pointerUp", "button": 0 }
                ]
            }
            await browser.performActions([actions]);
            await logger.logInto(await stackTrace.get(), message);
            return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    dragAndDrop2: async function (draggable, droppable) {
        //drag and drop using perform actions
        await logger.logInto(await stackTrace.get());
        message = "draggable:" + draggable + " droppable:" + droppable;
        try {
            var actions1 = {
                "type": "pointer",
                "id": "mouse1",
                "parameters": { "pointerType": "touch" },
                "actions": [
                    { "type": "pointerMove", "duration": 100, "origin": await $(draggable), "x": 0, "y": 0 },
                    { "type": "pointerDown", "button": 0 },
                    { "type": "pointerMove", "duration": 0, "origin": await $(droppable), "x": 0, "y": 0 },
                    { "type": "pointerMove", "duration": 200, "origin": await $(droppable), "x": 1, "y": 0 },
                    { "type": "pointerUp", "button": 0 }
                ]
            }

            await browser.performActions([actions1]);
            await logger.logInto(await stackTrace.get(), message);
            return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    waitForDisplayed: async function (selector, ms, reverse, timeoutMsg, interval) {
        message = "element:" + selector;
        try {
            await (await $(selector)).waitForDisplayed({ timeout: ms, reverse: reverse, timeoutMsg: timeoutMsg, interval: interval });
            await logger.logInto(await stackTrace.get(), message);
            return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    waitForExist: async function (selector, ms, reverse, timeoutMsg, interval) {
        message = "element:" + selector;
        try {
            await (await $(selector)).waitForExist({ timeout: ms, reverse: reverse, timeoutMsg: timeoutMsg, interval: interval });
            await logger.logInto(await stackTrace.get(), message);
            return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },
    waitForEnabled: async function (selector, ms, reverse, timeoutMsg, interval) {
        message = "element:" + selector;
        try {
            await (await $(selector)).waitForEnabled({ timeout: ms, reverse: reverse, timeoutMsg: timeoutMsg, interval: interval });
            await logger.logInto(await stackTrace.get(), message);
            return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },
    waitForClickable: async function (selector, ms, reverse, timeoutMsg, interval) {
        message = "element:" + selector;
        try {
            await (await $(selector)).waitForClickable({ timeout: ms, reverse: reverse, timeoutMsg: timeoutMsg, interval: interval });
            await logger.logInto(await stackTrace.get(), message);
            return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    getText: async function (selector) {
        message = "element:" + selector;
        try {
            res = await (await $(selector)).getText();
            await logger.logInto(await stackTrace.get(), message + ":" + res);
            return res;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    getAttribute: async function (selector, attributeValue) {
        try {
            res = await (await $(selector)).getAttribute(attributeValue);
            message = "element:" + selector + " attributeValue:" + attributeValue + " value:" + res;
            await logger.logInto(await stackTrace.get(), message);
            return res;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    getElementCount: async function (selector) {
        message = "element:" + selector;
        try {
            await logger.logInto(await stackTrace.get(), message);
            res = (await $$(selector)).length;
            return res;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    getCSSProperty: async function (selector, propertyname) {
        try {
            res = await (await $(selector)).getCSSProperty(propertyname);
            message = "element:" + selector + " propertyname:" + propertyname + " value:" + res;
            await logger.logInto(await stackTrace.get(), message);
            return res;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    findElements: async function (selector) {
        message = "element:" + selector;
        try {
            await logger.logInto(await stackTrace.get(), message);
            res = await $$(selector);
            return res;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },
    
    findElement: async function (selector) {
        message = "element:" + selector;
        try {
            await logger.logInto(await stackTrace.get(), message);
            res = await $(selector);
            return res;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    getKthElement: async function (selector, k) {
        const elements = await this.findElements(selector);
        if (k < 0 || k >= elements.length) {
          console.warn("Invalid k: index out of range");
          return null;
        }
        return elements[k];
    },
    

    scrollIntoView: async function (selector, options) {
        message = "element:" + selector;
        try {
            res = await (await $(selector)).scrollIntoView(options)
            await logger.logInto(await stackTrace.get(), message);
            return res;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    switchToFrame: async function (id) {
        message = "frameID:" + id;
        try {
            res = await browser.switchToFrame(id);
            await logger.logInto(await stackTrace.get(), message);
            if (res == null)
                return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    switchToParentFrame: async function () {
        try {
            res = await browser.switchToFrame(null)
            await logger.logInto(await stackTrace.get(), res);
            if (res == null)
                return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    hideKeyboard: async function () {
        if ((await driver.isKeyboardShown()) == true) {
            // console.log("Keyboard is visible");
            await driver.hideKeyboard();
        }
    },

    waitForDocumentLoad: async function () {
        await logger.logInto(await stackTrace.get());
        res = await this.waitForDisplayed("[data-tid=image-loader]", undefined, true);
        res2 = await this.waitForDisplayed("[class*=rogress][class*=indeterminate]", undefined, true);
        let res3 = await this.waitForDisplayed("[class*=MuiSkeleton]", undefined, true);
        if (!res)
            console.log("Loader (image-loader) still exists after timeout - " + res)
        else if (!res2)
            console.log("Loader (CircularProgress) still exists after timeout - " + res2)
        else if (!res3)
            console.log("Loader (Page skeleton) still exists after timeout - " + res3)
        else {
            res = await browser.waitUntil(async function () {
                return browser.execute(function () {
                    var imagesLoad;
                    let imgs = document.getElementsByTagName("img");
                    if (imgs.length > 0) {
                        imagesLoad = Array.prototype.every.call(imgs, img => {
                            //console.log("img.tid:-" + img["dataset"]["tid"] + "  img.complete:-" + img.complete)
                            //console.log("document.readyState:-" + document.readyState)
                            return img.complete;
                        }) && document.readyState === 'complete'
                    }
                    else {
                        //console.log("NO Image :document.readyState:-" + document.readyState)
                        imagesLoad = (document.readyState === 'complete');
                    }
                    return imagesLoad === true && document.readyState === 'complete'
                })
            }, {
                timeout: 60000,
                timeoutMsg: "Oops! Page did not load in 60s"
            })
        }
        return res;
    },

    selectByAttribute: async function (selector, attribute, value) {
        message = "element:" + selector;
        try {
            res = await (await $(selector)).selectByAttribute(attribute, value);
            await logger.logInto(await stackTrace.get(), message);
            return res;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    uploadFile: async function (localPath) {
        try {
            let remoteFilePath = await browser.uploadFile(localPath);
            await logger.logInto(await stackTrace.get(), message);
            return remoteFilePath;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    parentElement: async function (selector) {
        message = "element:" + selector;
        try {
            let result = await (await $(selector)).parentElement();
            await logger.logInto(await stackTrace.get(), message);
            return result;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

    keyPress: async function (value) {
        message = "key:" + value;
        try {
            res = await browser.keys(value);
            await logger.logInto(await stackTrace.get(), message);
            return true;
        } catch (err) {
            await logger.logInto(await stackTrace.get(), err.message, "error");
            return err;
        }
    },

   

    dragAndDropWithPath: async function (
        canvasElementSelector,
        startPoint_x1, startPoint_y1,       // Starting coordinates
        endPoint_x2, endPoint_y2,       // Ending coordinates
       // intermediatePoints = [{ x: startPoint_x1, y: startPoint_y1 }] // Default intermediate points
        intermediatePoints = [] 
      ) {
        const canvasElement = await $(canvasElementSelector); // Ensure the canvas selector is correct
      
        // Scroll the canvas into view, if necessary
        await canvasElement.scrollIntoView();


        // Get canvas dimensions for boundary validation
        const { width: canvasWidth, height: canvasHeight } = await canvasElement.getSize();

        // Helper function to check if coordinates are within canvas bounds
        function isWithinCanvas(x, y) {
            return x >= 0 && x <= canvasWidth && y >= 0 && y <= canvasHeight;
        }

        // Validate starting and ending points
        if (!isWithinCanvas(startPoint_x1, startPoint_y1) || !isWithinCanvas(endPoint_x2, endPoint_y2)) {
            throw new Error(`Starting or ending coordinates are out of canvas bounds.`);
        }
        // Validate intermediate points
        for (const point of intermediatePoints) {
            if (!isWithinCanvas(point.x, point.y)) {
            throw new Error("  Intermediate point (${point.x}, ${point.y}) is out of canvas bounds.");
            }
        }
      
        // Generate the intermediate actions
        const intermediateActions = intermediatePoints.map(point => ({
          type: "pointerMove",
          origin: canvasElement,
          x: point.x,
          y: point.y
        }));
      
        // Define the full actions array
        const actions = [
          { type: "pointerMove", origin: canvasElement, x: startPoint_x1, y: startPoint_y1 }, // Starting point
          { type: "pointerDown", button: 0 },
          ...intermediateActions, 
         // ...(intermediateActions && {intermediateActions}),// Insert intermediate points here
          { type: "pointerMove", origin: canvasElement, x: endPoint_x2, y: endPoint_y2 }, // Ending point
          { type: "pointerUp", button: 0 } // Release mouse button
        ];
      
        // Perform the actions
        await browser.performActions([
          {
            type: "pointer",
            id: "mouse1",
            parameters: { pointerType: "mouse" },
            actions,
          },
        ]);
      
        // Release all actions
        await browser.releaseActions();
      },
      
      

}