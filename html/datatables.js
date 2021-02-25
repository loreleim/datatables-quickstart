$(document).ready(function() {
  $('#example').DataTable( {
      //data: dataSet,
      columns: [
          { title: "Name" },
          { title: "Position" },
          { title: "Office" },
          { title: "Extn." },
          { title: "Start date" },
          { title: "Salary" }
      ]
  } );
} );

console.log("testing if connected")