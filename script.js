// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgycB5VJ7coJb1h0BzXBJdU-aRb1JAAj0",
  authDomain: "mypie-6fbc8.firebaseapp.com",
  projectId: "mypie-6fbc8",
  storageBucket: "mypie-6fbc8.appspot.com",
  messagingSenderId: "203610763028",
  appId: "1:203610763028:web:7a08f1e1e68ebbbd02dc01",
  databaseURL:
    "https://mypie-6fbc8-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {
  getDatabase,
  ref,
  set,
  onValue,
  get,
  update,
  remove,
  child,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

const db = getDatabase(app);

const menu = document.querySelector(".mMenu");
const head = document.querySelector(".headerr");
const main = document.querySelector(".mainn");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const movies = document.querySelector(".movies");
const music = document.querySelector(".musicc");
const hobbies = document.querySelector(".hobbies");
const books = document.querySelector(".books");
const habits = document.querySelector(".habits");
const daily = document.querySelector(".daily");
const success = document.querySelector(".success");
const goal = document.querySelector(".goal");
const container = document.querySelector(".container");
const con = document.querySelector(".con");
const para = document.querySelector(".para");
const cardImage = document.querySelector(".cardImg");
const svg = document.querySelector(".svg");
const search = document.querySelector(".se");

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let columns = [one, two, three, four, five];

// for (let i = 0; i < columns.length; i++) {
//   for (let j = 0; j < 7; j++) {
//     columns[i].insertAdjacentHTML(
//       "afterbegin",
//       `
//       <div style="height: ${getRandomArbitrary(200, 400)}px" class="box small">
//           <div class="image">
//             <img src="https://picsum.photos/300/300" alt="" />
//           </div>
//           <div class="title">The title</div>
//         </div>

//       `
//     );
//   }
// }

function bar() {
  head.classList.toggle("off");
}
menu.addEventListener("click", bar);

function FindData() {
  const dbref = ref(db);
  get(child(dbref, "mypie/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let keys = Object.keys(snapshot.val());
        for (let i = 0; i < keys.length; i++) {
          let img = `snapshot.val().${keys[i]}.img`;
          img = eval(img);
          let title = `snapshot.val().${keys[i]}.title`;
          title = eval(title);
          console.log(img);
          main.insertAdjacentHTML(
            "afterbegin",
            `<div style="height: ${getRandomArbitrary(
              200,
              400
            )}px" id="${title}" class="box small active">
        <div id="${title}" class="image active">
          <img id="${title}" class="active" src="${img}" alt="" />
        </div>
        <div id="${title}" class="title active">${title}</div>
      </div>`
          );
        }
        // findName.innerHTML = "Name: " + snapshot.val().name;
        // findAge.innerHTML = "Age: " + snapshot.val().age;
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert(error);
    });
}
FindData();

function filterMovies() {
  console.log("clicked");
  main.innerHTML = " ";
  const dbref = ref(db);
  get(child(dbref, "mypie/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let keys = Object.keys(snapshot.val());
        for (let i = 0; i < keys.length; i++) {
          let img = `snapshot.val().${keys[i]}.img`;
          img = eval(img);
          let title = `snapshot.val().${keys[i]}.title`;
          title = eval(title);
          let category = `snapshot.val().${keys[i]}.movies`;
          category = eval(category);
          console.log(category);
          if (category) {
            main.insertAdjacentHTML(
              "afterbegin",
              `<div style="height: ${getRandomArbitrary(
                200,
                400
              )}px" id="${title}" class="box small active">
            <div id="${title}" class="image active">
              <img id="${title}" class="active" src="${img}" alt="" />
            </div>
            <div id="${title}" class="title active">${title}</div>
          </div>`
            );
          }
        }
      }
      // findName.innerHTML = "Name: " + snapshot.val().name;
      // findAge.innerHTML = "Age: " + snapshot.val().age;
    })
    .catch((error) => {
      alert(error);
    });
}

function filterMusic() {
  console.log("clicked");
  main.innerHTML = " ";
  const dbref = ref(db);
  get(child(dbref, "mypie/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let keys = Object.keys(snapshot.val());
        for (let i = 0; i < keys.length; i++) {
          let img = `snapshot.val().${keys[i]}.img`;
          img = eval(img);
          let title = `snapshot.val().${keys[i]}.title`;
          title = eval(title);
          let category = `snapshot.val().${keys[i]}.music`;
          category = eval(category);
          console.log(category);
          if (category) {
            main.insertAdjacentHTML(
              "afterbegin",
              `<div style="height: ${getRandomArbitrary(
                200,
                400
              )}px" id="${title}" class="box small active">
            <div id="${title}" class="image active">
              <img id="${title}" class="active" src="${img}" alt="" />
            </div>
            <div id="${title}" class="title active">${title}</div>
          </div>`
            );
          }
        }
        // findName.innerHTML = "Name: " + snapshot.val().name;
        // findAge.innerHTML = "Age: " + snapshot.val().age;
      }
    })
    .catch((error) => {
      alert(error);
    });
}
function filterHabits() {
  console.log("clicked");
  main.innerHTML = " ";
  const dbref = ref(db);
  get(child(dbref, "mypie/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let keys = Object.keys(snapshot.val());
        for (let i = 0; i < keys.length; i++) {
          let img = `snapshot.val().${keys[i]}.img`;
          img = eval(img);
          let title = `snapshot.val().${keys[i]}.title`;
          title = eval(title);
          let category = `snapshot.val().${keys[i]}.habits`;
          category = eval(category);
          console.log(category);
          if (category) {
            main.insertAdjacentHTML(
              "afterbegin",
              `<div style="height: ${getRandomArbitrary(
                200,
                400
              )}px" id="${title}" class="box small active">
            <div id="${title}" class="image active">
              <img id="${title}" class="active" src="${img}" alt="" />
            </div>
            <div id="${title}" class="title active">${title}</div>
          </div>`
            );
          }
        }
        // findName.innerHTML = "Name: " + snapshot.val().name;
        // findAge.innerHTML = "Age: " + snapshot.val().age;
      }
    })
    .catch((error) => {
      alert(error);
    });
}
function filterHobbies() {
  console.log("clicked");
  main.innerHTML = " ";
  const dbref = ref(db);
  get(child(dbref, "mypie/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let keys = Object.keys(snapshot.val());
        for (let i = 0; i < keys.length; i++) {
          let img = `snapshot.val().${keys[i]}.img`;
          img = eval(img);
          let title = `snapshot.val().${keys[i]}.title`;
          title = eval(title);
          let category = `snapshot.val().${keys[i]}.hobbies`;
          category = eval(category);
          console.log(category);
          if (category) {
            main.insertAdjacentHTML(
              "afterbegin",
              `<div style="height: ${getRandomArbitrary(
                200,
                400
              )}px" id="${title}" class="box small active">
            <div id="${title}" class="image active">
              <img id="${title}" class="active" src="${img}" alt="" />
            </div>
            <div id="${title}" class="title active">${title}</div>
          </div>`
            );
          }
        }
        // findName.innerHTML = "Name: " + snapshot.val().name;
        // findAge.innerHTML = "Age: " + snapshot.val().age;
      }
    })
    .catch((error) => {
      alert(error);
    });
}
function filterBooks() {
  console.log("clicked");
  main.innerHTML = " ";
  const dbref = ref(db);
  get(child(dbref, "mypie/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let keys = Object.keys(snapshot.val());
        for (let i = 0; i < keys.length; i++) {
          let img = `snapshot.val().${keys[i]}.img`;
          img = eval(img);
          let title = `snapshot.val().${keys[i]}.title`;
          title = eval(title);
          let category = `snapshot.val().${keys[i]}.books`;
          category = eval(category);
          console.log(category);
          if (category) {
            main.insertAdjacentHTML(
              "afterbegin",
              `<div style="height: ${getRandomArbitrary(
                200,
                400
              )}px" id="${title}" class="box small active">
            <div id="${title}" class="image active">
              <img id="${title}" class="active" src="${img}" alt="" />
            </div>
            <div id="${title}" class="title active">${title}</div>
          </div>`
            );
          }
        }
        // findName.innerHTML = "Name: " + snapshot.val().name;
        // findAge.innerHTML = "Age: " + snapshot.val().age;
      }
    })
    .catch((error) => {
      alert(error);
    });
}
function filterDaily() {
  console.log("clicked");
  main.innerHTML = " ";
  const dbref = ref(db);
  get(child(dbref, "mypie/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let keys = Object.keys(snapshot.val());
        for (let i = 0; i < keys.length; i++) {
          let img = `snapshot.val().${keys[i]}.img`;
          img = eval(img);
          let title = `snapshot.val().${keys[i]}.title`;
          title = eval(title);
          let category = `snapshot.val().${keys[i]}.daily`;
          category = eval(category);
          console.log(category);
          if (category) {
            main.insertAdjacentHTML(
              "afterbegin",
              `<div style="height: ${getRandomArbitrary(
                200,
                400
              )}px" id="${title}" class="box small active">
            <div id="${title}" class="image active">
              <img id="${title}" class="active" src="${img}" alt="" />
            </div>
            <div id="${title}" class="title active">${title}</div>
          </div>`
            );
          }
        }
        // findName.innerHTML = "Name: " + snapshot.val().name;
        // findAge.innerHTML = "Age: " + snapshot.val().age;
      }
    })
    .catch((error) => {
      alert(error);
    });
}
function filterGoal() {
  console.log("clicked");
  main.innerHTML = " ";
  const dbref = ref(db);
  get(child(dbref, "mypie/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let keys = Object.keys(snapshot.val());
        for (let i = 0; i < keys.length; i++) {
          let img = `snapshot.val().${keys[i]}.img`;
          img = eval(img);
          let title = `snapshot.val().${keys[i]}.title`;
          title = eval(title);
          let category = `snapshot.val().${keys[i]}.goal`;
          category = eval(category);
          console.log(category);
          if (category) {
            main.insertAdjacentHTML(
              "afterbegin",
              `<div style="height: ${getRandomArbitrary(
                200,
                400
              )}px" id="${title}" class="box small active">
            <div id="${title}" class="image active">
              <img id="${title}" class="active" src="${img}" alt="" />
            </div>
            <div id="${title}" class="title active">${title}</div>
          </div>`
            );
          }
        }
        // findName.innerHTML = "Name: " + snapshot.val().name;
        // findAge.innerHTML = "Age: " + snapshot.val().age;
      }
    })
    .catch((error) => {
      alert(error);
    });
}
function filterSuccess() {
  console.log("clicked");
  main.innerHTML = " ";
  const dbref = ref(db);
  get(child(dbref, "mypie/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let keys = Object.keys(snapshot.val());
        for (let i = 0; i < keys.length; i++) {
          let img = `snapshot.val().${keys[i]}.img`;
          img = eval(img);
          let title = `snapshot.val().${keys[i]}.title`;
          title = eval(title);
          let category = `snapshot.val().${keys[i]}.success`;
          category = eval(category);
          console.log(category);
          if (category) {
            main.insertAdjacentHTML(
              "afterbegin",
              `<div style="height: ${getRandomArbitrary(
                200,
                400
              )}px" id="${title}" class="box small active">
            <div id="${title}" class="image active">
              <img id="${title}" class="active" src="${img}" alt="" />
            </div>
            <div id="${title}" class="title active">${title}</div>
          </div>`
            );
          }
        }
        // findName.innerHTML = "Name: " + snapshot.val().name;
        // findAge.innerHTML = "Age: " + snapshot.val().age;
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert(error);
    });
}

movies.addEventListener("click", filterMovies);
music.addEventListener("click", filterMusic);
habits.addEventListener("click", filterHabits);
hobbies.addEventListener("click", filterHobbies);
books.addEventListener("click", filterBooks);
daily.addEventListener("click", filterDaily);
success.addEventListener("click", filterSuccess);
goal.addEventListener("click", filterGoal);

document.addEventListener("click", (e) => {
  console.log(e.target.id);
  main.innerHTML = " ";
  if (e.target.id !== "none") {
    container.style.transform = "translateX(0px)";
    const dbref = ref(db);
    get(child(dbref, "mypie/")).then((snapshot) => {
      if (snapshot.exists()) {
        let img = `snapshot.val().${e.target.id}.img`;
        let text = `snapshot.val().${e.target.id}.text`;
        img = eval(img);
        text = eval(text);
        cardImage.src = img;
        para.innerHTML = text;
      }
    });
    // findName.innerHTML = "Name: " + snapshot.val().name;
    // findAge.innerHTML = "Age: " + snapshot.val().age;
  }
});

svg.addEventListener("click", () => {
  console.log("lol");
  location.reload();
});
function myRegex(text, src) {
  const regex = new RegExp(text, "gi");
  let result = regex.test(src);
  return result;
}

function searchFunc() {
  console.log(search.value);
  main.innerHTML = " ";
  const dbref = ref(db);
  get(child(dbref, "mypie/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let keys = Object.keys(snapshot.val());
        for (let i = 0; i < keys.length; i++) {
          let img = `snapshot.val().${keys[i]}.img`;
          img = eval(img);
          let title = `snapshot.val().${keys[i]}.title`;
          title = eval(title);
          console.log(img);
          let answer = myRegex(title, search.value);
          if (answer) {
            main.insertAdjacentHTML(
              "afterbegin",
              `<div style="height: ${getRandomArbitrary(
                200,
                400
              )}px" id="${title}" class="box small active">
          <div id="${title}" class="image active">
            <img id="${title}" class="active" src="${img}" alt="" />
          </div>
          <div id="${title}" class="title active">${title}</div>
        </div>`
            );
          }
        }
        // findName.innerHTML = "Name: " + snapshot.val().name;
        // findAge.innerHTML = "Age: " + snapshot.val().age;
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert(error);
    });
}

search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    searchFunc();
  }
});
