var inputName= document.getElementById("username");
var inputNumber= document.getElementById("usernumber");
var inputEmail= document.getElementById("usermail");
var inputDOB= document.getElementById("userdob");

var bloodbank = localStorage.getItem("BankName");

document.getElementById("cnfrmButton").addEventListener("click", cnfrm_btn);

function cnfrm_btn() {
    let name = inputName.value;
    let num = inputNumber.value;
    let mail = inputEmail.value;
    let dob = inputDOB.value;
    let bldgrp;
    console.log(name);
    console.log(num);
    console.log(mail);
    console.log(dob);
    console.log(bloodbank);

    var inputBldGrp = document.getElementsByName('bloodgroup');
    
    for (i = 0; i < inputBldGrp.length; i++) {
        if (inputBldGrp[i].checked)
            bldgrp = inputBldGrp[i].value;
    }
    
    console.log(bldgrp)
}

function validateForm() {
    var inval_name = document.forms["form1"]["username"].value;
    var inval_num = document.forms["form1"]["usernumber"].value;
    var inval_mail = document.forms["form1"]["usermail"].value;
    var inval_dob = document.forms["form1"]["userdob"].value;

    if ((inval_name == "") || (inval_num == "") || (inval_mail == "") || (inval_dob == "")) {
      document.getElementById("cnfrmButton").disabled = true;
      return false;
    }
    else{
        document.getElementById("cnfrmButton").disabled = false;
        return true;
    }
  }