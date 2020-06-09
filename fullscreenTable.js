function fullScreen(tableNo) {
  if (tableNo == 1) {
    if (
      document.getElementById("secondDomainNameRow").style.display === "none"
    ) {
      document.getElementById("secondDomainNameRow").style.display = "block";
      document.getElementById("secondDomainTableRow").style.display = "block";
      document.getElementById("firstDomainDiv").style.height =
        mainDivHeight * (divSmallScreen / 100) + "px";
      document.getElementById("firstDomainFullscreenIcon").innerHTML =
        "fullscreen";
    } else {
      document.getElementById("secondDomainNameRow").style.display = "none";
      document.getElementById("secondDomainTableRow").style.display = "none";
      document.getElementById("firstDomainDiv").style.height =
        mainDivHeight * (divFullScreen / 100) + "px";
      document.getElementById("firstDomainFullscreenIcon").innerHTML =
        "fullscreen_exit";
    }
  } else {
    if (
      document.getElementById("firstDomainNameRow").style.display === "none"
    ) {
      document.getElementById("firstDomainNameRow").style.display = "block";
      document.getElementById("firstDomainTableRow").style.display = "block";
      document.getElementById("secondDomainDiv").style.height =
        mainDivHeight * (divSmallScreen / 100) + "px";
      document.getElementById("secondDomainFullscreenIcon").innerHTML =
        "fullscreen";
    } else {
      document.getElementById("firstDomainNameRow").style.display = "none";
      document.getElementById("firstDomainTableRow").style.display = "none";
      document.getElementById("secondDomainDiv").style.height =
        mainDivHeight * (divFullScreen / 100) + "px";
      document.getElementById("secondDomainFullscreenIcon").innerHTML =
        "fullscreen_exit";
    }
  }
}

function makeControlsInline(){
  var widthFName = document.getElementById("firstDomainName").offsetWidth;
  var widthSName = document.getElementById("secondDomainName").offsetWidth;
  var widthFCount = document.getElementById("firstDomainCount").offsetWidth;
  var widthTCount = document.getElementById("totalDomainCount").offsetWidth;
  var widthSCount = document.getElementById("secondDomainCount").offsetWidth;
  document.getElementById("totalDomainCount").style.marginRight = ((mainDivWidth) * (47/100) - widthFName - widthFCount - widthTCount) + "px";
  document.getElementById("secondDomainCount").style.marginRight = ((mainDivWidth) * (70/100) - widthSName - widthSCount) + "px";
}

function showTwoDomains(split) {
  if (split) {
    if (singleDomainMode) {
      fullScreen(1);
    }
    document.getElementById("firstDomainFullscreenIcon").style.display =
      "inline";
    singleDomainMode = false;
    document.getElementById(
      "toggleDomainModeSwitch"
    ).checked = singleDomainMode;
  } else {
    if (!singleDomainMode) {
      fullScreen(1);
    }

    singleDomainMode = true;
    document.getElementById("firstDomainFullscreenIcon").style.display = "none";
    document.getElementById(
      "toggleDomainModeSwitch"
    ).checked = singleDomainMode;
  }
}

function toggleDomainMode() {
  if (singleDomainMode) {
    //singleDomainMode = false;
    prefix = document.getElementById("prefix").value;
    main();
  } else {
    //singleDomainMode = true;
    prefix = "";
    main();
  }
}
