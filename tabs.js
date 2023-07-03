function openTab(event, tabId) {
  var tabContent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  var tabButtons = document.getElementsByClassName("tab-btn");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  document.getElementById(tabId).style.display = "block";

  event.currentTarget.classList.add("active");
}
