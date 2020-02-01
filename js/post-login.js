$(document).ready(function() {
  $("button").click(function() {
    event.preventDefault();
    let data = document.getElementById("form_1");

    const formData = new FormData(data);
    let jsonObject = {};
  
    for (const [key, value]  of formData.entries()) {
      jsonObject[key] = value;
    }

    if (document.getElementById("email").value == "" || document.getElementById("password").value == "" ) {
      alert("Enter all details")
    }else if (document.getElementById("email").value.indexOf("@") == "-1") {
      alert("Enter all a valid email address")
    }else {
      $.ajax("https://admin.topratedprofessors.com/api/user-login", {
        data: jsonObject,
        type: "POST",
        crossdomain: true,
        dataType: "json",
        success: function(xhr, status, err) {
  
          if (xhr.status === "101") {
            document.getElementById("invalid-login").innerHTML = '<p class="p-5">' + xhr.message + '</p>';
          }else {
            //console.log("https://admin.topratedprofessors.com/site/api-login?email=" + xhr.email + "&token=" + xhr.token);
            window.location.href  = "https://admin.topratedprofessors.com/site/api-login?email=" + xhr.email + "&token=" + xhr.token;
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

      
