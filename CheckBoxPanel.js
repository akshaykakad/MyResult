function checkboxClick(checkbox) {
  if (checkbox.checked == true) {
    var field = fields.find(function (x) {
      return x["name"] == checkbox.value;
    });
    field.value = true;
    field.priority = ++priotiryCounter;
  } else {
    var field = fields.find(function (x) {
      return x["name"] == checkbox.value;
    });
    field.value = false;
    field.priotiry = 0;
  }

  startSearch();
}

function selectUnselectCheckboxClick(checkbox) {
  if (checkbox.checked == true) {
    for (i in fields) {
      fields[i].value = true;
      var x = document.getElementById("fieldCheckBox" + i);
      x.checked = true;
    }
  } else {
    for (i in fields) {
      if (fields[i].priority >= 0) {
        fields[i].value = false;
        var x = document.getElementById("fieldCheckBox" + i);
        x.checked = false;
      }
    }
  }

  startSearch();
}
