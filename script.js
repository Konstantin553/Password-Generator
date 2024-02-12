let passEl = document.querySelector("#password");

function genPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 15;
  passEl = "";

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    passEl += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = passEl;
}

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
}
