var password = document.getElementById("password")
var confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    document.getElementById("no-match").innerHTML = '<p id="remove" class="frow p-0 m-0" style="color: red">Passwords Dont Match</p>';
    //confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    let child = document.getElementById("remove");
    child.parentNode.removeChild(child);
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

$(document).ready(function() {
  $("button").click(function() {
    event.preventDefault();
    let data = document.getElementById("form_2");

    const formData = new FormData(data);
    let jsonObject = {};
  
    for (const [key, value]  of formData.entries()) {
      jsonObject[key] = value;
    }

    if (document.getElementById("username").value == "" || document.getElementById("email").value == "" || document.getElementById("password").value == "" || document.getElementById("confirm_password").value == "" ) {
      alert("Enter all details")
    }else if (document.getElementById("email").value.indexOf("@") == "-1") {
      alert("Enter all a valid email address")
    }else {
      $.ajax("https://doctorateessays.com/api/user-register", {
        data: jsonObject,
        type: "POST",
        crossdomain: true,
        dataType: "json",
        success: function(xhr, status, err) {
  
          if (xhr.status === "101") {
            document.getElementById("invalid-login").innerHTML = '<p class="p-5">' + xhr.message + '</p>';
          }else {
            window.location.href  = "https://topratedprofessors.com/login.html";
          }
        },
        error: function (xhr, status, err) {
          alert(
            "An Error Occured" + "\n" + 
            "Check whether you have an internet connection" + "\n" + 
            "Or Contact The Support Team at info@topratedprofessors.com" + "\n" + "\n" +
            "ERROR STATUS CODE:" + xhr.status + "\n" + "[XHR CROSSDOMAIN ERROR: 0]"
        );
        }
      })
    }
  })
})

      