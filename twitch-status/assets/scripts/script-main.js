const TwitchStatus = (function() {

  const init = function() {
    bindUI();
  };

  const bindUI = function() {
    document.getElementById("all-button").addEventListener("click", function() { openTab("all-button", "all-channels"); });
    document.getElementById("online-button").addEventListener("click", function() { openTab("online-button", "online-channels"); });
    document.getElementById("offline-button").addEventListener("click", function() { openTab("offline-button", "offline-channels"); });
  }

  const openTab = function(buttonType, channelType) {

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
      tabs[i].className = tabs[i].className.replace(" active-button", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(channelType).style.display = "grid";
    document.getElementById(buttonType).className += " active-button";
  };

  return {
    init: init
  };

})();

TwitchStatus.init();

// function openTab(event, channelType) {
//   // Declare all variables
//   var i, channels, tabs;

//   // Get all elements with class="channels" and hide them
//   channels = document.getElementsByClassName("channels");
//   for (i = 0; i < channels.length; i++) {
//     channels[i].style.display = "none";
//   }

//   // Get all elements with class="tabs" and remove the class "active"
//   tabs = document.getElementsByClassName("tab");
//   for (i = 0; i < tabs.length; i++) {
//       tabs[i].className = tabs[i].className.replace(" activeButton", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(channelType).style.display = "grid";
//   event.currentTarget.className += " activeButton";
// }