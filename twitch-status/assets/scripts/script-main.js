const CHANNELS_BASE_URL = "https://wind-bow.gomix.me/twitch-api/channels/";
const STREAMS_BASE_URL = "https://wind-bow.gomix.me/twitch-api/streams/";
const CHANNEL_LIST = ["cohhcarnage", "cretetion", "dansgaming", "esl_sc2",
  "freecodecamp", "habathcx", "noobs2ninjas", "ogamingsc2",
  "robotcaleb", "storbeck"];
const ALL_BUTTON = document.getElementById("all-button");
const ONLINE_BUTTON = document.getElementById("online-button");
const OFFLINE_BUTTON = document.getElementById("offline-button");

// Entry point
const init = () => {
  bindUI();
  buildChannelLists();
};

const bindUI = () => {
  ALL_BUTTON.addEventListener("click", function () { openTab("all-button", ["online-channels", "offline-channels"]); });
  ONLINE_BUTTON.addEventListener("click", function () { openTab("online-button", ["online-channels"]); });
  OFFLINE_BUTTON.addEventListener("click", function () { openTab("offline-button", ["offline-channels"]); });
};

// Gets called when user clicks on any tab control
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
  channelType.forEach((ctype) => {
    document.getElementById(ctype).style.display = "grid";
  });
};

// Get all elements with class="channels" and hide them
const hideChannels = () => {
  let channels = document.getElementsByClassName("channels");
  for (i = 0; i < channels.length; i++) {
    channels[i].style.display = "none";
  }
};

const buildChannelLists = () => {
  CHANNEL_LIST.forEach((channel) => {
    getJSON(channel, "streams");
  });
};

const getJSON = (channel, urlType) => {
  if (urlType === "streams") {
    let streamsFullUrl = STREAMS_BASE_URL + channel;
    fetch(streamsFullUrl)
      .then((resp) => resp.json())
      .then((data) => checkChannelStatus(channel, data));
  }

  if (urlType === "channels") {
    let channelsFullUrl = CHANNELS_BASE_URL + channel;
    fetch(channelsFullUrl)
      .then((resp) => resp.json())
      .then((data) => buildOfflineChannelHtml(data));
  }
};

// Checks if the channel is online; if the channel is offline,
// calls getJSON to get channels response from API instead
const checkChannelStatus = (channel, data) => {
  if (data.stream != null) {
    buildOnlineChannelHtml(data);
  } else {
    getJSON(channel, "channels");
  }
};

const buildOnlineChannelHtml = (data) => {
  let description = data.stream.channel.status.substring(0, 40) + "...";
  let html = `
    <li>
        <div class="logo"><img src="${data.stream.channel.logo}" alt="${data.stream.channel.display_name}"></div>
        <div class="channel-info">
          <div class="name">
            <a href="${data.stream.channel.url}" rel="nofolow" target="_blank">${data.stream.channel.display_name}</a>
          </div>
          <div class="description">${description}</div>
        </div>
        <div class="status"><i class="fa fa-bolt purple" aria-hidden="true"></i></div>
    </li>
  `;
  document.getElementById("online-channels").innerHTML += html;
};

const buildOfflineChannelHtml = (data) => {
  let html = `
    <li>
        <div class="logo"><img src="${data.logo}" alt="${data.display_name}"></div>
        <div class="channel-info">
          <div class="name">
            <a href="${data.url}" rel="nofolow" target="_blank">${data.display_name}</a>
          </div>
          <div class="description"></div>
        </div>
        <div class="status"><i class="fa fa-bolt lightgrey" aria-hidden="true"></i></div>
    </li>
  `;
  document.getElementById("offline-channels").innerHTML += html;
};

init();