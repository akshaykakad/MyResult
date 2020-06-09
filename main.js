var inputText = "";
var jsonResult = {};
var fields = [];
var firstDomainData = [];
var secondDomainData = [];
var priotiryCounter = 0;
var prefix = "";
var domainName = "";
var firstDomainName = "";
var secondDomainName = "";
var mainDivHeight = 0;
var mainDivWidth = 0;
var divSmallScreen = 40;
var divFullScreen = 84;
var singleDomainMode = false;
var domainsInfo = [];
var fieldsData = [];

function onload(){
  document.getElementById("defaultOpen").click();
  var domainSections = document.getElementsByClassName("domainSections");
  mainDivWidth = document.getElementById("mainPage").clientWidth;
  mainDivHeight = document.getElementById("mainPage").clientHeight;
  var tabsSection = document.getElementById("tabsSection");
  var i;
  for (i = 0; i < domainSections.length; i++) {
    domainSections[i].style.width = (mainDivWidth)*(79/100)+"px";
    domainSections[i].style.height = (mainDivHeight)*(divSmallScreen/100)+"px";
  }
  tabsSection.style.width = (mainDivWidth)*(20/100)+"px";
  tabsSection.style.height = (mainDivHeight)*(90/100)+"px";

  initializeSettings();
};

function main() {
  inputText = "";
  jsonResult = {};
  firstDomainData.length = 0;
  secondDomainData.length = 0;
  priotiryCounter = 0;

  displayHeadingAndCount();
  initializeData();
  initializeSearchCriteriaFields();
  initializeMainPanel();
}

function refresh(){
  fields.length = 0;
  document.getElementById("jsonInput").value = "";
}
