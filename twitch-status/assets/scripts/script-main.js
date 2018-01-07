function openTab(event, tabName) {
  // Declare all variables
  var i, channels, tabs;

  // Get all elements with class="channels" and hide them
  channels = document.getElementsByClassName("channels");
  for (i = 0; i < channels.length; i++) {
    channels[i].style.display = "none";
  }

  // Get all elements with class="tabs" and remove the class "active"
  tabs = document.getElementsByClassName("tab");
  for (i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" activeButton", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "grid";
  event.currentTarget.className += " activeButton";
}