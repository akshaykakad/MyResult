function initializeSettings(){
  var x = document.getElementById("dname");
  domainsInfo = domains;
  var i;
  for(i = 0; i < domainsInfo.length ; i++){
    var option = document.createElement("option");
    option.text = domainsInfo[i]["name"];
    option.value = i;
    x.add(option);
  }
}

function initializeData() {
  inputText = document.getElementById("jsonInput").value;
  jsonResult = JSON.parse(inputText);
  //jsonResult = testData;

  if (prefix == "") {
    firstDomainData = jsonResult.resources;
    showTwoDomains(false);
  } else {
    firstDomainData = jsonResult.resources.filter(function (x) {
      return !x.id.includes(prefix);
    });

    secondDomainData = jsonResult.resources.filter(function (x) {
      return x.id.includes(prefix);
    });
    showTwoDomains(true);
  }
}

function initializeSearchCriteriaFields() {
  if (fields.length == 0) {
    for (k in fieldsData) {
      var item = {};
      item["name"] = fieldsData[k];
      item["value"] = false;
      item["priority"] = 0;
      fields.push(item);
    }

    var field = fields.find(function (x) {
      return x["name"] == "id";
    });
    field.value = true;
    field.priority = -1;

    fields.sort(function (a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x > y) {
        return -1;
      }
      if (x < y) {
        return 1;
      }
      return 0;
    });

    createCheckBoxes();
  }
}

function createCheckBoxes() {
  clearTable("fieldsTable");

  for (i in fields) {
    var chk = document.createElement("INPUT");
    var lbl = document.createElement("label");
    chk.setAttribute("type", "checkbox");
    chk.setAttribute("value", fields[i].name);
    chk.setAttribute("id", "fieldCheckBox" + i);
    chk.checked = fields[i].value;
    if (fields[i].priority < 0) {
      chk.disabled = true;
    }
    chk.setAttribute("onClick", "checkboxClick(this)");
    lbl.setAttribute("for", "fieldCheckBox" + i);
    lbl.appendChild(document.createTextNode(fields[i].name));

    addCheckBoxInTable(chk, lbl);
  }
}

function addCheckBoxInTable(checkbox, label) {
  var table = document.getElementById("fieldsTable");
  var row = table.insertRow(0);
  var cell = row.insertCell(0);
  cell.appendChild(checkbox);
  cell.appendChild(label);
}

function initializeMainPanel() {
  var firstDomainCount = firstDomainData.length;
  var secondDomainCount = secondDomainData.length;
  var allCount = firstDomainCount + secondDomainCount;

  document.getElementById("firstDomainCount").innerHTML = firstDomainCount;
  document.getElementById("secondDomainCount").innerHTML = secondDomainCount;
  document.getElementById("totalDomainCount").innerHTML = allCount;

  makeControlsInline();
  startSearch();
}
