var fn = function (id) {
    return document.getElementById(id)
}
function CreateAccount() {

    var name = document.forms[0].name.value;
    var streetNo = document.forms[0].streetNo.value;
    var streetName = document.forms[0].streetName.value;
    var city = document.forms[0].city.value;
    var province = document.forms[0].province.value;
    var postalCode = document.forms[0].postalCode.value;
    var phoneNumber = document.forms[0].phoneNumber.value;
    var email = document.forms[0].email.value;
    var username = document.forms[0].username.value;
    var password = document.forms[0].password.value;

    var myDate = new Date();
    myDate.setFullYear(myDate.getFullYear() + 1);
    
        document.cookie = "name=" + encodeURIComponent(name) + "; expires=" + myDate.toUTCString();
        document.cookie = "streetNo=" + encodeURIComponent(streetNo) + "; expires=" + myDate.toUTCString();
        document.cookie = "streetName=" + encodeURIComponent(streetName) + "; expires=" + myDate.toUTCString();
        document.cookie = "city=" + encodeURIComponent(city) + "; expires=" + myDate.toUTCString();
        document.cookie = "province=" + encodeURIComponent(province) + "; expires=" + myDate.toUTCString();
        document.cookie = "postalCode=" + encodeURIComponent(postalCode) + "; expires=" + myDate.toUTCString();
        document.cookie = "phoneNumber=" + encodeURIComponent(phoneNumber) + "; expires=" + myDate.toUTCString();
        document.cookie = "email=" + encodeURIComponent(email) + "; expires=" + myDate.toUTCString();
        document.cookie = "username=" + encodeURIComponent(username) + "; expires=" + myDate.toUTCString();
        document.cookie = "password=" + encodeURIComponent(password) + "; expires=" + myDate.toUTCString();

        if (name != "" && streetNo != "" && streetName != "" && city != "" && province != "" && postalCode != "" &&
            phoneNumber != "" && email != "" && username != "" && password != "")
        {
            window.alert("Thank you for Creating an account!");
            location.href = "Login.html";
        }
}
function LoginAccount() {
    if (document.cookie.length == 0) {
        location.href = "CreateAccount.html";
        return false;
    }
    var attempts = 0;//for number of attempts that is maximum of 3
    var savedData = decodeURIComponent(document.cookie);
    var storedName, storedPassword;
    var savedAccountInfo = decodeURIComponent(document.cookie);// we are decoding the info that we saved before by createAccount function
    var username = document.forms[0].username.value;
    var password = document.forms[0].password.value;
   
    var dataArray = savedAccountInfo.split("; ");

        for (var i = 0; i < dataArray.length; ++i) {
        if (dataArray[i].substring(0, dataArray[i].indexOf("=")) == "username") {
            storedName = dataArray[i].substring(dataArray[i].indexOf("=") + 1, dataArray[i].length);
        }
        if (dataArray[i].substring(0, dataArray[i].indexOf("=")) == "password") {
            storedPassword = dataArray[i].substring(dataArray[i].indexOf("=") + 1, dataArray[i].length);
        }
    }
    ++attempts;

    if (username != "" && password != "") {
        if (username == storedName && password == storedPassword)
        {
            document.cookie = "login=" + encodeURIComponent("You are login successfully!");
           
            location.href = "mainPage.html";
        }
         else
        {
            window.alert("Incorrect login or password. Please try again.");

            if (attempts == 3)
                alert("There is a problem with your account! \n Please set account first! ")
            location.href = "CreateAccount.html";
        }
    }
   
}
 
function validate_field_login() {
     var username = fn("txtusername").value; var password = fn("txtpassword").value;
    if (username == "") {
        alert("Username is required");
        fn("txtusername").focus();
    }
    
    else if(password == "")
    {
        alert("Password is required");
        fn("txtpassword").focus();
    }
}
//var dologin = function () {
//    if (validate_field_login() || LoginAccount()) {
//    }
//}

function validate_field_Account() {
    var valid = false;
    var name = fn("txtname").value;
    var streetNo = fn("txtstreetNo").value;
    var streetName = fn("txtstreetName").value;
    var city = fn("txtcity").value;
    var province = fn("txtprovince").value;
    var postalCode = fn("txtpostalCode").value;
    var phoneNumber = fn("txtphoneNumber").value;
    var email = fn("txtemail").value;
    var username = fn("txtusername").value;
    var password = fn("txtpassword").value;

    if (name == "") {
        alert("Name is required");
        fn("txtname").focus();
       
    }
    else if (streetNo == "") {
        alert("StreetNo is required");
        fn("txtstreetNo").focus();
    }
    else if (streetName == "") {
        alert("StreetName is required");
        fn("txtstreetName").focus();
    }

    else if (city == "") {
        alert("City is required");
        fn("txtcity").focus();
    }

    else if (province == "") {
        alert("Province is required");
        fn("txtprovince").focus();
    }

    else if (postalCode == "") {
        alert("PostalCode is required");
        fn("txtpostalCode").focus();
    }

    else if (phoneNumber == "") {
        alert("PhoneNumber is required");
        fn("txtphoneNumber").focus();
    }

    else if (email == "") {
        alert("Email is required");
        fn("txtemail").focus();
    }

    else if (username == "") {
        alert("Username is required");
        fn("txtusername").focus();
    }

    else if (password == "") {
        alert("Password is required");
        fn("txtpassword").focus();
    }
    else {
        valid = true;
    }
    return valid;
    location.href="CreateAccount.html"
}
//var doAccount = function () {
//    if (CreateAccount()) {
//    }
//}
