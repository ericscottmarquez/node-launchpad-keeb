const express = require("express");
const { autoDetect, colors } = require("launchpad.js");
const { colorFromHex, defaultColors } = colors;
const robot = require("robotjs");

const app = express();
const port = 3000;

const lp = autoDetect();

lp.once("ready", (deviceName) => {
  console.log(`${deviceName} is ready!!`);
  const greenColor = [0, 128, 0];
  const redColor = [255, 0, 0];
  const blueColor = [0, 0, 139];
  const whiteColor = [240, 248, 255];
  const pinkColor = [255, 0, 247];

  // function buttonNumberToCoordinates(buttonNumber) {
  //   const x = buttonNumber % 10;
  //   const y = Math.floor(buttonNumber / 10);
  //   console.log("button number", x, y);
  //   return [{ x, y }];
  // }

  const buttonNumbersTopRow = [51, 41, 42, 43, 44, 45, 46, 47, 48, 58];
  const buttonNumbersMiddleRow = [21, 31, 32, 33, 34, 35, 36, 37, 38, 28];
  const buttonNumbersBottomRow = [12, 22, 22, 23, 24, 25, 26, 27, 17];
  const buttonNumbersFunctions = [
    87, 88, 89, 78, 19, 29, 93, 94, 95, 98, 59, 14, 15, 49, 39,
  ];
  const punctuationNumbers = [16, 17, 18, 28, 55, 56, 57];

  // iteratively set the color of each button:
  buttonNumbersTopRow.forEach((buttonNumber) => {
    lp.setButtonColor(buttonNumber, colors.colorFromRGB(greenColor));
  });

  buttonNumbersMiddleRow.forEach((buttonNumber) => {
    lp.setButtonColor(buttonNumber, colors.colorFromRGB(redColor));
  });

  buttonNumbersBottomRow.forEach((buttonNumber) => {
    lp.setButtonColor(buttonNumber, colors.colorFromRGB(blueColor));
  });

  buttonNumbersFunctions.forEach((buttonNumber) => {
    lp.setButtonColor(buttonNumber, colors.colorFromRGB(whiteColor));
  });

  punctuationNumbers.forEach((buttonNumber) => {
    lp.setButtonColor(buttonNumber, colors.colorFromRGB(pinkColor));
  });

  lp.on("buttonDown", (button) => {
    console.log(
      `Button pressed ${button.nr} (x: ${button.xy[0]}, y: ${button.xy[1]})`
    );

    const randHex = Math.floor(Math.random() * 16777215).toString(16);
    // The Launchpad accepts an RGB-triple between 0 and 1. This converts the
    // hex code to the appropriate number array.
    const color = colorFromHex(randHex);

    // Map the button number to a specific keyboard key
    switch (true) {
      case button.nr === 87:
        // regular copy:
        lp.setButtonColor(button, color);
        robot.keyTap("c", "command");
        break;
      case button.nr === 88:
        // regular paste:
        lp.setButtonColor(button, color);
        robot.keyTap("v", "command");
        break;
      case button.nr === 89:
        // save file:
        lp.setButtonColor(button, color);
        robot.keyTap("s", "command");
        break;
      case button.nr === 78:
        // cut:
        lp.setButtonColor(button, color);
        robot.keyTap("x", "command");
        break;
      // case button.nr === 54:
      // terminal copy (linux):
      // robot.keyTap("c", ["command", "shift"]);
      // break;
      // case button.nr === 55:
      // terminal paste (linux):
      // robot.keyTap("v", ["command", "shift"]);
      // break;
      case button.nr === 19:
        // stop/solo/mute button: stop server
        lp.setButtonColor(button, color);
        robot.keyTap("c", "control");
        break;
      case button.nr === 29:
        // bottom right first caret: run last command in terminal
        lp.setButtonColor(button, color);
        robot.keyTap("up");
        robot.keyTap("enter");
        break;
      case button.nr === 93:
        // left arrow: undo
        lp.setButtonColor(button, color);
        robot.keyTap("z", "command");
        break;
      case button.nr === 94:
        // right arrow: redo
        lp.setButtonColor(button, color);
        robot.keyTap("z", ["command", "shift"]);
        break;
      case button.nr === 95:
        // session button (restart terminal program)
        lp.setButtonColor(button, color);
        robot.keyTap("c", "control");
        robot.keyTap("up");
        robot.keyTap("enter");
        break;
      case button.nr === 98:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("3", ["command", "shift"]);
        break;
      case button.nr === 59:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("backspace");
        break;
      case button.nr === 49:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("enter");
        break;
      case button.nr === 39:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("tab");
        break;

      // ========================================================================================================
      // top row:
      case button.nr === 51:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("q");
        break;
      case button.nr === 41:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("w");
        break;
      case button.nr === 42:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("e");
        break;
      case button.nr === 43:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("r");
        break;
      case button.nr === 44:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("t");
        break;
      case button.nr === 45:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("y");
        break;
      case button.nr === 46:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("u");
        break;
      case button.nr === 47:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("i");
        break;
      case button.nr === 48:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("o");
        break;
      case button.nr === 58:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("p");
        break;

      // middle row:
      case button.nr === 21:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("a");
        break;
      case button.nr === 31:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("s");
        break;
      case button.nr === 32:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("d");
        break;
      case button.nr === 33:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("f");
        break;
      case button.nr === 34:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("g");
        break;
      case button.nr === 35:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("h");
        break;
      case button.nr === 36:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("j");
        break;
      case button.nr === 37:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("k");
        break;
      case button.nr === 38:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("l");
        break;
      case button.nr === 28:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap(";");
        break;

      // bottom row:
      case button.nr === 12:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("z");
        break;
      case button.nr === 22:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("x");
        break;
      case button.nr === 23:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("c");
        break;
      case button.nr === 24:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("v");
        break;
      case button.nr === 25:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("b");
        break;
      case button.nr === 26:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("n");
        break;
      case button.nr === 27:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("m");
        break;
      case button.nr === 16:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap(",");
        break;
      case button.nr === 17:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap(".");
        break;
      case button.nr === 18:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("/");
        break;
      case button.nr === 55:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        // for (
        robot.keyToggle("shift", "down");
        robot.keyTap("9");
        robot.keyToggle("shift", "up");
        break;
      case button.nr === 56:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("[");
        break;
      case button.nr === 57:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        // for {
        robot.keyToggle("shift", "down");
        robot.keyTap("[");
        robot.keyToggle("shift", "up");
        break;
      // space bar:
      case button.nr === 14 || button.nr === 15:
        // take screenshot (user button)
        lp.setButtonColor(button, color);
        robot.keyTap("space");
        break;
      default:
        break;
    }
  });

  lp.on("buttonUp", (button) => {
    buttonNumbersTopRow.forEach((buttonNumber) => {
      lp.setButtonColor(buttonNumber, colors.colorFromRGB(greenColor));
    });

    buttonNumbersMiddleRow.forEach((buttonNumber) => {
      lp.setButtonColor(buttonNumber, colors.colorFromRGB(redColor));
    });

    buttonNumbersBottomRow.forEach((buttonNumber) => {
      lp.setButtonColor(buttonNumber, colors.colorFromRGB(blueColor));
    });

    buttonNumbersFunctions.forEach((buttonNumber) => {
      lp.setButtonColor(buttonNumber, colors.colorFromRGB(whiteColor));
    });

    punctuationNumbers.forEach((buttonNumber) => {
      lp.setButtonColor(buttonNumber, colors.colorFromRGB(pinkColor));
    });
    // lp.setButtonColor(button, defaultColors.off);
    // Release the key when the button is released
    switch (button.nr) {
      // case 88:
      //   break;
      default:
        break;
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running and listening on http://localhost:${port}`);
});
