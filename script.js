const btnsubmit = document.querySelector(".search-button");
const input = document.getElementById("user-input");

const avatar = document.getElementById("avatar");
const userName = document.getElementById("nameOfUser");
const user = document.getElementById("github-profile");
const date = document.getElementById("joining-date");
const bio = document.getElementById("bio");

const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");

const user_location = document.getElementById("location");
const page = document.getElementById("page");
const twitter = document.getElementById("twitter");
const company = document.getElementById("company");

const errorMessage1 = document.getElementById("search-error-msg1");
const errorMessage2 = document.getElementById("search-error-msg2");

const theme = document.getElementById("theme");
const themeText = document.getElementById("theme-type");
const themeIcon = document.getElementById("theme-icon");
const wrapper = document.querySelector(".wrapper");
const searchbox = document.querySelector(".searchbox");
const profileContainer = document.querySelector(".profile-container");
const profileName = document.querySelector(".profile-name");
const profileStatsWrapper = document.querySelector(".profile-stats-wrapper");
const statValue = document.querySelector(".stat-value");
const bottomIcons = document.querySelector(".botton-icons");
const profileInfo = document.querySelector(".profile-info");
const themeX = document.getElementById("theme-icon-x");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

btnsubmit.addEventListener("click", () => {
  getUserData(input.value);
});

theme.addEventListener("click", () => {
  changeTheme();
});

function changeTheme() {
  wrapper.classList.toggle("activate");
  searchbox.classList.toggle("activate");
  profileContainer.classList.toggle("activate");
  profileName.classList.toggle("activate");
  profileStatsWrapper.classList.toggle("activate");
  statValue.classList.toggle("activate");
  bottomIcons.classList.toggle("activate");
  profileInfo.classList.toggle("activate");
  theme.classList.toggle("activate");
  input.classList.toggle("activate");
  themeX.classList.toggle("activate");
}

async function getUserData(username) {
  if (username !== "") {
    errorMessage1.style.display = "none";
    errorMessage2.style.display = "none";
    try {
      const raw = await fetch(`https://api.github.com/users/${username}`);
      const data = await raw.json();
      updateProfile(data);
    } catch (error) {
      throw error;
    }
  } else {
    errorMessage1.style.display = "none";
    errorMessage2.style.display = "block";
  }
}

function updateProfile(data) {
  if (data.message == "Not Found") {
    errorMessage1.style.display = "block";
    errorMessage2.style.display = "none";
    return false;
  } else {
    errorMessage1.style.display = "none";
    errorMessage2.style.display = "none";
  }
  avatar.src = `${data.avatar_url}`;
  userName.innerText = data.name === null ? data.login : data.name;
  user.innerText = `@${data.login}`;
  user.href = `${data.html_url}`;
  datesegments = data.created_at.split("T").shift().split("-");
  date.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${
    datesegments[0]
  }`;
  bio.innerText = data.bio === null ? "This profile has no bio" : `${data.bio}`;
  repos.innerText = `${data.public_repos}`;
  followers.innerText = `${data.followers}`;
  following.innerText = `${data.following}`;
  user_location.innerText =
    data.location === null ? "Not available" : `${data.location}`;
  page.innerText = data.blog === "" ? "Not available" : `${data.blog}`;
  page.href = `${data.blog}`;
  twitter.innerText =
    data.twitter_username === null
      ? "Not available"
      : `${data.twitter_username}`;
  twitter.href = `https://twitter.com/${data.twitter_username}`;
  company.innerText =
    data.company === null ? "Not available" : `${data.company}`;
}

getUserData("AadityaJujagar");

// if (localStorage.getItem("dark-mode")) {
//   darkModeProperties();
// } else {
//   lightModeProperties();
// }

// function darkModeProperties() {
//   root.setProperty("--lm-bg", "#141D2F");
//   root.setProperty("--lm-bg-content", "#1E2A47");
//   root.setProperty("--lm-text", "white");
//   root.setProperty("--lm-text-alt", "white");
//   root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
//   themeText.innerText = "LIGHT";
//   themeIcon.src = "./assets/images/sun-icon.svg";
//   root.setProperty("--lm-icon-bg", "brightness(1000%)");
//   darkMode = true;
//   localStorage.setItem("dark-mode", true);
// }

// function lightModeProperties() {
//   root.setProperty("--lm-bg", "#F6F8FF");
//   root.setProperty("--lm-bg-content", "#FEFEFE");
//   root.setProperty("--lm-text", "#4B6A9B");
//   root.setProperty("--lm-text-alt", "#2B3442");
//   root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
//   themeText.innerText = "DARK";
//   themeIcon.src = "./assets/images/moon-icon.svg";
//   root.setProperty("--lm-icon-bg", "brightness(100%)");
//   darkMode = false;
//   localStorage.setItem("dark-mode", false);
// }
