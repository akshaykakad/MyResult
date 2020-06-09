function clearTable(tableName) {
  var table = document.getElementById(tableName);
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
}

function isObject(obj) {
  return obj === Object(obj);
}

function showHideColumn(tableName, column, show) {
  var tbl = document.getElementById(tableName);
  var col = tbl.getElementsByTagName("col")[column];
  if (col) {
    col.style.visibility = show ? "" : "collapse";
  }
}

function removeTags(str) {
  if ((str===null) || (str===''))
  return false;
  else
  str = str.toString();
  return str.replace( /(<([^>]+)>)/ig, '');
}
