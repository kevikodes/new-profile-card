let dog = {
  name: "Steve",
  age: 1,
  location: "Japan",
  profileImg:
    "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
  bannerImg:
    "url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
  backgroundColor: "#00FFFF",
  stats: {
    followers: "1.2M",
    likes: "8M",
    posts: "2K",
  },
};

//Function to get default state
const getDefaultState = () => {
  const defaultHtml = document.getElementById("theBody").innerHTML;
  return defaultHtml;
};

const defaultState = getDefaultState();

//Reset state to default
document.getElementById("reset-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById(
    "profileImg"
  ).innerHTML = `<img src="./images/profile-pic.png" alt="Kevin's profile" />`;
  document.getElementById(
    "name"
  ).innerHTML = `Kevin Owens III <span class="age light-gray-text">24</span>`;
  document.getElementById(
    "bannerImg"
  ).style.backgroundImage = `url('./images/card-image.jpg')`;
  document.getElementById("location").innerText = "Los Angeles";
  document.body.className = "body";

  document.getElementById("item1").innerHTML = `
  <p class="stat-desc light-gray-text">
  <a target="_blank" href="https://github.com/krowens3">
    <i class="icons fab fa-github-square"></i>
  </a>
</p>
  `;
  document.getElementById("item2").innerHTML = `
  <p class="stat-desc light-gray-text">
    <a target="_blank" href="https://www.linkedin.com/">
      <i class="icons fab fa-linkedin"></i>
    </a>
  </p>
  `;
  document.getElementById("item3").innerHTML = `
  <p class="stat-desc light-gray-text">
  <a target="_blank" href="https://www.facebook.com/kevin.owensiii">
    <i class="icons fab fa-facebook-square"></i>
  </a>
</p>
  `;
});

//Function to generate a random object
const generateRandomObject = () => {
  //Declare variables for random object generation
  const names = ["Kevin", "John", "Edgar", "Annabelle", "Brian"];

  const locations = [
    "Japan",
    "California",
    "North Korea",
    "Hollywood",
    "Texas",
    "New York",
  ];
  const profileImgs = [
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1602178856779-d57888ae2f8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1555760113-2ff3079217cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  ];
  const bannerImgs = [
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFubmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1531256379416-9f000e90aacc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFubmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbm5lcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  ];
  const backgroundColors = [
    "black",
    "blue",
    "aqua",
    "teal",
    "magenta",
    "yellow",
  ];

  //Get random name
  const nameIndex = Math.floor(Math.random() * names.length);
  const name = names[nameIndex];
  const age = Math.floor(Math.random() * 100);
  const profileImgIndex = Math.floor(Math.random() * profileImgs.length);
  const profileImg = profileImgs[profileImgIndex];
  const backgroundColorIndex = Math.floor(
    Math.random() * backgroundColors.length
  );
  const backgroundColor = backgroundColors[backgroundColorIndex];
  const bannerImgIndex = Math.floor(Math.random() * bannerImgs.length);
  const bannerImg = bannerImgs[bannerImgIndex];
  const locationIndex = Math.floor(Math.random() * locations.length);
  const newLocation = locations[locationIndex];
  const stats = {
    followers: `${Math.floor(Math.random() * 50000)}M`,
    likes: `${Math.floor(Math.random() * 50000)}M`,
    posts: `${Math.floor(Math.random() * 50000)}K`,
  };

  const newObject = {
    name,
    age,
    profileImg,
    stats,
    backgroundColor,
    bannerImg,
    newLocation,
  };

  return newObject;
};

document.getElementById("random-btn").addEventListener("click", (e) => {
  e.preventDefault();
  //Destructure the object returned from the random object generator.
  let {
    name,
    age,
    profileImg,
    stats,
    backgroundColor,
    bannerImg,
    newLocation,
  } = generateRandomObject();
  document.body.className = "dogBody";
  document.body.style.backgroundColor = `${backgroundColor}`;
  document.getElementById(
    "profileImg"
  ).innerHTML = `<img src="${profileImg}" alt="${name}'s profile" />`;
  document.getElementById(
    "name"
  ).innerHTML = `${name} <span class="age light-gray-text">${age}</span>`;
  document.getElementById(
    "bannerImg"
  ).style.backgroundImage = `url('${bannerImg}')`;
  document.getElementById("location").innerText = newLocation;
  document.getElementById("item1").innerHTML = `
  <p class="stats-header">${stats.followers}</p>
  <p class="stat-desc light-gray-text">Followers</p>
  `;
  document.getElementById("item2").innerHTML = `
  <p class="stats-header">${stats.likes}</p>
  <p class="stat-desc light-gray-text">Likes</p>
  `;
  document.getElementById("item3").innerHTML = `
  <p class="stats-header">${stats.posts}</p>
  <p class="stat-desc light-gray-text">Posts</p>
  `;
});

// //Profile Image
// document.getElementById(
//   "profileImg"
// ).innerHTML = `<img src="${dog.profileImg}" alt="Steve the Dog" />`;

// //Name & Age
// document.getElementById("name").innerHTML = `
//     ${dog.name} <span class="age light-gray-text">${dog.age}</span>
//     `;

// //Location
// document.getElementById("location").innerText = `
//     ${dog.location}
//     `;

// //Banner Image
// document.getElementById("bannerImg").style.backgroundImage = dog.bannerImg;

// //Body background color
// document.body.className = "dogBody";
// document.body.style.backgroundColor = `
//     ${dog.backgroundColor}
// `;
// //item1
// const item1 = (document.getElementById("item1").innerHTML = `
//     <p class="stats-header">${dog.stats.followers}</p>
//     <p class="stat-desc light-gray-text">Followers</p>
// `);
// //itme2
// const item2 = (document.getElementById("item2").innerHTML = `
// <p class="stats-header">${dog.stats.likes}</p>
// <p class="stat-desc light-gray-text">Likes</p>
// `);
// //item3
// const item3 = (document.getElementById("item3").innerHTML = `
// <p class="stats-header">${dog.stats.posts}</p>
// <p class="stat-desc light-gray-text">Posts</p>
// `);

/*
    let dog = {
  name: "Steve",
  age: 1,
  location: "Japan",
  profileImg:
    "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
  bannerImg:
    "url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
  backgroundColor: "#00FFFF",
  stats: {
    followers: "1.2M",
    likes: "8M",
    posts: "2K",
  },
};
*/
