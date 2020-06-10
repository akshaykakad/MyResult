function filterColumn(input) {
    // Declare variables
    var filter, table, tr, td, i, txtValue, inputData, columnValue;
    filter = input.value.toUpperCase();
    inputData = input.id.split("|");
    columnValue = inputData[0];
    tableName = inputData[1];
    table = document.getElementById(tableName);
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[columnValue];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }  