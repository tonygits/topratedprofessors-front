$(document).ready(function() {
    $("button").click(function() {
      event.preventDefault();
      let data = document.getElementById("form_3");
  
      const formData = new FormData(data);
      let jsonObject = {};
    
      for (const [key, value]  of formData.entries()) {
        jsonObject[key] = value;
      }
  
      if (document.getElementById("email").value == "") {
        alert("Enter all details")
      }else if (document.getElementById("email").value.indexOf("@") == "-1") {
        alert("Enter all a valid email address")
      }else {
        $.ajax("https://doctorateessays.com/api/request-password-reset", {
          data: jsonObject,
          type: "POST",
          crossdomain: true,
          dataType: "json",
          success: function(xhr, status, err) {    
            if (xhr.status == 101) {
              document.getElementById("form-container").innerHTML = '<p class="p-5">' + xhr.message + '</p>';
            }else if (xhr.status == 100){
              document.getElementById("form-container").innerHTML = '<p class="p-5">' + xhr.message + '</p>';
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
  
        