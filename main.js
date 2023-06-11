var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  document.querySelector(".header").style.height = window.innerHeight + "px";
});

function submitForm(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert(
      "Please fill in all required fields (full name, email address, and message) before trying to submit."
    );
    return;
  } else {
    var messageElement = document.getElementById("success");
    messageElement.innerHTML =
      "Thanks! Your information has been submitted. I will reply in 1-2 business days.";
    messageElement.style.display = "block";
  }
}
