var inputName = document.getElementById("username");
var inputNumber = document.getElementById("usernumber");
var inputEmail = document.getElementById("usermail");
var inputDOB = document.getElementById("userdob");

var bloodbank = localStorage.getItem("BankName");
var apt_date = "2024-07-01";

const calendarButtons = document.querySelectorAll('.datepicker-calendar button');

function handleButtonClick(event) {
    const buttonValue = event.target.value;

    let selectedDate = buttonValue;
    apt_date = selectedDate
}

calendarButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});


document.getElementById("cnfrmButton").addEventListener("click", cnfrm_btn);

function cnfrm_btn() {
    let name = inputName.value;
    let num = inputNumber.value;
    let mail = inputEmail.value;
    let dob = inputDOB.value;
    let bldgrp;

    var inputBldGrp = document.getElementsByName('bloodgroup');

    for (i = 0; i < inputBldGrp.length; i++) {
        if (inputBldGrp[i].checked)
            bldgrp = inputBldGrp[i].value;
    }

    // console.log(name);
    // console.log(num);
    // console.log(mail);
    // console.log(dob);
    // console.log(bloodbank);
    // console.log(bldgrp)
    // console.log(apt_date)

    const donor = {
        Name: name,
        BloodBank: bloodbank,
        Phone: num,
        BloodGroup: bldgrp,
        Date: apt_date
    }

    let donorsData = JSON.parse(localStorage.getItem('donorsData'));

    donorsData.donors.push(donor);

    localStorage.setItem('donorsData', JSON.stringify(donorsData));

    // console.log('Donor added successfully:', donorsData);
    window.location.href = "confirmation.html";

}

function validateForm() {
    var inval_name = document.forms["form1"]["username"].value;
    var inval_num = document.forms["form1"]["usernumber"].value;
    var inval_mail = document.forms["form1"]["usermail"].value;
    var inval_dob = document.forms["form1"]["userdob"].value;

    if ((inval_name == "") || (inval_num == "") || (inval_dob == "")) {
        document.getElementById("cnfrmButton").disabled = true;
        return false;
    }
    else {
        document.getElementById("cnfrmButton").disabled = false;
        return true;
    }
}

let existingDonors ={
    "donors": [
      {
          "Name": "Varun Trivedi",
          "BloodBank": "Victoria Hospital",
          "Phone": "6955 5555",
          "BloodGroup": "A+",
          "Date": "2024-05-29"
      },
      {
          "Name": "Neha Sinha",
          "BloodBank": "Sagar hospital",
          "Phone": "26701150",
          "BloodGroup": "AB-",
          "Date": "2024-06-09"
      },
      {
          "Name": "Virat Kumar",
          "BloodBank": "Narayana Hospital",
          "Phone": "27835001",
          "BloodGroup": "O+",
          "Date": "2024-06-27"
      }
  ]
  };
  
  localStorage.setItem('donorsData', JSON.stringify(existingDonors));