$(document).ready(function () {
  if (isMacintosh()) {
    $("body").addClass("defaultPointer");
  }
});

//Script used for giving a starting theme to the page
if (
  localStorage.getItem("pageTheme") === "light" ||
  localStorage.getItem("pageTheme") === null
) {
  document.body.classList.add("light-edition");
  localStorage.setItem("pageTheme", "light");
} else {
  document.body.classList.add("dark-edition");
  localStorage.setItem("pageTheme", "dark");
}

function isMacintosh() {
  return navigator.platform.indexOf("Mac") > -1;
}
