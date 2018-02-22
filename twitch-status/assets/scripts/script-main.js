const baseURL = "https://wind-bow.gomix.me/twitch-api/streams/";
const channels = ["ESL_SC2", "CohhCarnage", "DansGaming"];
const allButton = document.getElementById("all-button");
const onlineButton = document.getElementById("online-button");
const offlineButton = document.getElementById("offline-button");

const init = () => {
  bindUI();
  getJSON();
};

const bindUI = () => {
  allButton.addEventListener("click", function () { openTab("all-button", "all-channels"); });
  onlineButton.addEventListener("click", function () { openTab("online-button", "online-channels"); });
  offlineButton.addEventListener("click", function () { openTab("offline-button", "offline-channels"); });
};

const openTab = (buttonType, channelType) => {
  removeActiveButton();
  hideChannels();
  addActiveButton(buttonType);
  showChannels(channelType);
};

// Add an "active-button" class to the button that opened the tab
const addActiveButton = (buttonType) => {
  document.getElementById(buttonType).className += " active-button";
};

// Get all elements with class="button" and remove the class "active"
const removeActiveButton = () => {
  let buttons = document.getElementsByClassName("button");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active-button", "");
  }
};

// Show channels on current tab
const showChannels = (channelType) => {
  document.getElementById(channelType).style.display = "grid";
};

// Get all elements with class="channels" and hide them
const hideChannels = () => {
  let channels = document.getElementsByClassName("channels");
  for (i = 0; i < channels.length; i++) {
    channels[i].style.display = "none";
  }
};

const getJSON = () => {
  const queryURL = baseURL + channels[0];
  fetch(queryURL)
    .then((resp) => resp.json())
    .then((data) => buildChannelLists(data));
};

const buildChannelLists = (data) => {
  let onlineChannels = buildOnlineChannelHtml(data);
  let offlineChannels = "";
  document.getElementById("test-channels").innerHTML = onlineChannels;
};

const buildOnlineChannelHtml = (data) => {
  let html = `
    <li>
        <div class="logo"><img src="${data.stream.channel.logo}" alt="${data.stream.channel.display_name}"></div>
        <div class="name">${data.stream.channel.display_name}</div>
        <div class="status"><i class="fa fa-bolt purple" aria-hidden="true"></i></div>
    </li>
  `;
  return html;
};

const buildofflineChannelHtml = () => {
  // TODO
};

init();