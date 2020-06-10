function startSearch() {
  clearTable("firstDomainTable");
  clearTable("secondDomainTable");

  var searchCriteria = [];
  var searchCriteriaFields = fields.filter(function (x) {
    return x.value == true;
  });

  searchCriteriaFields.sort(function (a, b) {
    return a.priority - b.priority;
  });

  for (i in searchCriteriaFields) {
    searchCriteria.push(searchCriteriaFields[i].name);
  }
  //for first domain
  populateDomainTable(searchCriteria, "firstDomainTable", firstDomainData);
  //for second domain
  populateDomainTable(searchCriteria, "secondDomainTable", secondDomainData);
}

function populateDomainTable(searchCriteria, tableName, domainData) {
  var table = document.getElementById(tableName);
  var header = table.createTHead();
  var headerRow = header.insertRow(0);

  headerRow.style.backgroundColor = "#4CAF50";
  headerRow.style.color = "white";
  headerRow.style.fontWeight = "bold";

  for (i in searchCriteria) {
    var cell = headerRow.insertCell(i);
    cell.innerHTML = searchCriteria[i].toUpperCase() +
    "<input class=\"searchBox\" type=\"text\" id=\"" + i + "|" + tableName +"\" onkeyup=\"filterColumn(this)\" placeholder=\"Search...\">" + 
    "<i style=\"font-size:16px; margin-left: 2px;\" class=\"material-icons\" id=\"" + i +"\" onclick=\"showHideSearchBox(this, " + tableName + ")\">search</i>";
  }

  for (i in domainData) {
    var row = table.insertRow(-1);

    var createdblClickHandler = function (r) {
      return function () {
        var cell = r.getElementsByTagName("td")[0];
        var id = cell.innerHTML;
        showRowDetails(removeTags(id));
      };
    };

    row.ondblclick = createdblClickHandler(row);

    for (j in searchCriteria) {
      var data = domainData[i][searchCriteria[j]];
      var cell = row.insertCell(j);
      cell.style.verticalAlign = "top";
      cell.style.textAlign = "left";
      if (isObject(data)) {
        cell.innerHTML = "<pre>" + JSON.stringify(data, null, 4) + "</pre>";
      } else {
        if (data == undefined) {
          cell.innerHTML = "<pre>Field Not Present</pre>";
        } else {
          if(searchCriteria[j] == "id"){
            cell.innerHTML = "<a href=\"#\" onClick=\"showRowDetailsHyperLink(this)\">" + data + "</a>";
          }
          else{
            cell.innerHTML = "<pre>" + data + "</pre>";
          }
        }
      }
    }
  }
}

function showRowDetailsHyperLink(id){
  showRowDetails(id.innerHTML);
}

function showRowDetails(id) {
  var modal = document.getElementById("ModalWindow");
  var span = document.getElementsByClassName("close")[0];
  var textBlock = document.getElementById("resourceInfo");

  var resourceData = jsonResult.resources.find(function (o) {
    return o.id == id;
  });

  textBlock.innerHTML = JSON.stringify(resourceData, null, 4);
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function showHideSearchBox(iconObj, searchBox){
  var searchBoxId = iconObj.id + "|" + searchBox.id;
  var input = document.getElementById(searchBoxId);
  if(input.style.display == "none"){
    input.style.display = "inline";
  }
  else{
    input.style.display = "none";
  }
}
