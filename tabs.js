function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function saveSettings() {
  prefix = document.getElementById("prefix").value;
  if (document.getElementById("fdname").value != "") {
    firstDomainName = document.getElementById("fdname").value;
  }
  if (document.getElementById("sdname").value != "") {
    secondDomainName = document.getElementById("sdname").value;
  }
  document.getElementById("saveLabel").style.visibility = "visible";
  setTimeout(function () {
    document.getElementById("saveLabel").style.visibility = "hidden";
  }, 2000);
}

function displayHeadingAndCount() {
  if (prefix == "") {
    document.getElementById("firstDomainName").innerHTML = domainName;
    document.getElementById("secondDomainName").innerHTML = "";
  } else {
    document.getElementById("firstDomainName").innerHTML = firstDomainName;
    document.getElementById("secondDomainName").innerHTML = secondDomainName;
    document.getElementById("secondCountLbl").innerHTML = "Count : ";
    document.getElementById("secondDomainCount").innerHTML = "0";
  }
  document.getElementById("firstCountLbl").innerHTML = "Count : ";
  document.getElementById("firstDomainCount").innerHTML = "0";
  document.getElementById("totalCountLbl").innerHTML = "Total Count : ";
  document.getElementById("totalDomainCount").innerHTML = "0";

  var controlDiv = document.getElementsByClassName("tableControls");
  var i;
  for (i = 0; i < controlDiv.length; i++) {
    controlDiv[i].style.display = "inline";
  }

  var tableHeading = document.getElementsByClassName("tableHeadingRow");
  var i;
  for (i = 0; i < tableHeading.length; i++) {
    tableHeading[i].style.backgroundColor = "lightgoldenrodyellow";
  }
}

function dropDownSelect() {
  refresh();

  document.getElementById("fdname").value = "";
  document.getElementById("sdname").value = "";
  document.getElementById("prefix").value = "";

  document.getElementById("lblFdName").style.display = "none";
  document.getElementById("fdname").style.display = "none";
  document.getElementById("lblSdName").style.display = "none";
  document.getElementById("sdname").style.display = "none";
  document.getElementById("lblPrefix").style.display = "none";
  document.getElementById("prefix").style.display = "none";

  var dropDownSelectedIndex = document.getElementById("dname").value;
  if (dropDownSelectedIndex < 0) {
    return;
  }

  domainInfo = domainsInfo[dropDownSelectedIndex];

  domainName = domainInfo["name"];
  var subdomains = domainInfo["subdomains"];
  if (subdomains != undefined) {
    document.getElementById("fdname").value = subdomains[0]["name"];
    document.getElementById("sdname").value = subdomains[1]["name"];
    document.getElementById("prefix").value = domainInfo["prefix"];

    document.getElementById("lblFdName").style.display = "block";
    document.getElementById("fdname").style.display = "block";
    document.getElementById("lblSdName").style.display = "block";
    document.getElementById("sdname").style.display = "block";
    document.getElementById("lblPrefix").style.display = "block";
    document.getElementById("prefix").style.display = "block";
  }

  fieldsData = domainInfo["fieldsData"];
  saveSettings();
}
