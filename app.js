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

let clicked = false;

console.log("test");

//Toggle disguise logic
const toggleDisguise = () => {
  if (!clicked) {
    //Profile Image
    document.getElementById(
      "profileImg"
    ).innerHTML = `<img src="${dog.profileImg}" alt="Steve the Dog" />`;

    //Name & Age
    document.getElementById("name").innerHTML = `
    ${dog.name} <span class="age light-gray-text">${dog.age}</span>
    `;

    //Location
    document.getElementById("location").innerText = `
    ${dog.location}
    `;

    //Banner Image
    document.getElementById("bannerImg").style.backgroundImage = dog.bannerImg;

    //Body background color
    document.body.className = "dogBody";
    document.body.style.backgroundColor = `
    ${dog.backgroundColor}
`;
    //item1
    const item1 = (document.getElementById("item1").innerHTML = `
    <p class="stats-header">${dog.stats.followers}</p>
    <p class="stat-desc light-gray-text">Followers</p>
`);
    //itme2
    const item2 = (document.getElementById("item2").innerHTML = `
<p class="stats-header">${dog.stats.likes}</p>
<p class="stat-desc light-gray-text">Likes</p>
`);
    //item3
    const item3 = (document.getElementById("item3").innerHTML = `
<p class="stats-header">${dog.stats.posts}</p>
<p class="stat-desc light-gray-text">Posts</p>
`);
    clicked = true;
  } else {
    clicked = false;
    location.reload();
  }
};

//Change Disguise Button
document.getElementById("disguise-btn").innerHTML = `
  <h3 class="disguise-message" id="disguise-message">Click here to disguise me as Steve the doggo!</h3>
  <button onClick="toggleDisguise()">Change Disguise</button>
`;

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
