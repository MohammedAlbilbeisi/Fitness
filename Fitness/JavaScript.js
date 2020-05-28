 var selectedRow = null;



function WhenFormSubmit() { 
     
    var  GetDataForm=ReddataFromForm();
//console.log(Medicinedata);   
                 //insertRecord(GetDataForm);

    // ResetFields();
              // ResetFields();

    //  update_Info(GetDataForm);
     //Update_Info(Data);
     // update_Info(GetDataForm);
        //  ResetFields();
            InsertData(GetDataForm);
               ResetFields();
            
     
     
        } 


 function ReddataFromForm() { 
     
     var Sportdata = {};
   Sportdata["SportName"] = document.getElementById("ED").value;
    
    return Sportdata;
}
     
     /*
          Medicinedata.push(MID, MN,PD,ED); 
console.log(Medicinedata);     
     
        } 

var MID =document.getElementById("MID").value;

var MN=document.getElementById("MN").value;

var PD=document.getElementById("PD").value;

var ED=document.getElementById("ED").value;
/*
var option4=document.getElementById("op4");

var Sc=document.getElementById("sp2");

var Ul=document.getElementById("ull");*/
/*

var btn=document.getElementById("butt");

var Medicinedata = [];


console.log(Medicinedata);     

var Medicinedata = [];


 function AddMedicine() { 
          Medicinedata.push(MID, MN,PD,ED); 
console.log(Medicinedata);     
     
        } */

function InsertData(info) {
   var table = document.getElementById("Sportlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = info.SportName;
  
    cell2 = newRow.insertCell(1);
     cell2.innerHTML = `<button  onClick="DeleteItem(this)">Delete</button >`;
    
    
    
    
    
}



function ResetFields() {
    document.getElementById("ED").value = "";

    selectedRow = null;
}
 






function DeleteItem(Item) {
    if (confirm('Are you sure to delete this record ?')) {
        row = Item.parentElement.parentElement;
        document.getElementById("Sportlist").deleteRow(row.rowIndex);
           ResetFields();
    }
}