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
const firebase = initializeApp(firebaseConfig);
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

const db = getDatabase(firebase);

const app = Vue.createApp({
  data() {
    return {
      message: "Hello!",
      title: "Hello mom",
      click: "Click me!",
      isActive: false,
      firebaseData: [],
      movieList: [],
      musicList: [],
      booksList: [],
      hobbiesList: [],
      successList: [],
      habitsList: [],
      goalList: [],
      dailyList: [],
      lockedList: [],
      passwordData: null,

      showAll: true,
      showMovies: false,
      showMusic: false,
      showBooks: false,
      showHobbies: false,
      showSuccess: false,
      showHabits: false,
      showGoal: false,
      showDaily: false,
      showLocked: false,
      none: false,
    };
  },
  methods: {
    FindData() {
      const dbref = ref(db);
      get(child(dbref, "mypie/"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            let keys = Object.keys(snapshot.val());
            for (let i = 0; i < keys.length; i++) {
              let dataTemp = `snapshot.val().${keys[i]}`;
              dataTemp = eval(dataTemp);

              if (dataTemp.title !== "password") {
                if (!dataTemp.locked) {
                  this.firebaseData.push(dataTemp);
                }
                if (dataTemp.movies) {
                  this.movieList.push(dataTemp);
                }
                if (dataTemp.music) {
                  this.musicList.push(dataTemp);
                }
                if (dataTemp.books) {
                  this.booksList.push(dataTemp);
                }
                if (dataTemp.hobbies) {
                  this.hobbiesList.push(dataTemp);
                }
                if (dataTemp.success) {
                  this.successList.push(dataTemp);
                }
                if (dataTemp.habits) {
                  this.habitsList.push(dataTemp);
                }
                if (dataTemp.goal) {
                  this.goalList.push(dataTemp);
                }
                if (dataTemp.daily) {
                  this.dailyList.push(dataTemp);
                }
                if (dataTemp.locked) {
                  this.lockedList.push(dataTemp);
                }
              } else {
                this.passwordData = dataTemp.password;
              }
            }
          } else {
            alert("No data found");
          }
        })
        .catch((error) => {
          alert(error);
        });
    },
    menu() {
      this.isActive = !this.isActive;
      this.FindData();
    },
    password() {
      Swal.fire({
        title: "Locked!",
        text: "Enter the password:",
        input: "password",
        showCancelButton: true,
      }).then((result) => {
        if (result.value) {
          if (result.value === this.passwordData) {
            this.Locked();
          } else {
            console.log("wrong password");
          }
        }
      });
    },
    Movies() {
      this.showAll = false;
      this.showMovies = !this.showMovies;
      this.showMusic = false;
      this.showBooks = false;
      this.showSuccess = false;
      this.showHabits = false;
      this.showGoal = false;
      this.showHobbies = false;
      this.showDaily = false;
      this.showLocked = false;
      this.checkNone();
    },
    Music() {
      this.showAll = false;
      this.showMusic = !this.showMusic;
      this.showMovies = false;
      this.showBooks = false;
      this.showSuccess = false;
      this.showHabits = false;
      this.showGoal = false;
      this.showHobbies = false;
      this.showDaily = false;
      this.showLocked = false;
      this.checkNone();
    },
    Books() {
      this.showAll = false;
      this.showBooks = !this.showBooks;
      this.showMovies = false;
      this.showMusic = false;
      this.showSuccess = false;
      this.showHabits = false;
      this.showGoal = false;
      this.showHobbies = false;
      this.showDaily = false;
      this.showLocked = false;
      this.checkNone();
    },
    Success() {
      this.showAll = false;
      this.showSuccess = !this.showSuccess;
      this.showMovies = false;
      this.showBooks = false;
      this.showMusic = false;
      this.showHabits = false;
      this.showGoal = false;
      this.showHobbies = false;
      this.showDaily = false;
      this.showLocked = false;
      this.checkNone();
    },
    Hobbies() {
      this.showAll = false;
      this.showHobbies = !this.showHobbies;
      this.showMovies = false;
      this.showBooks = false;
      this.showSuccess = false;
      this.showHabits = false;
      this.showGoal = false;
      this.showMusic = false;
      this.showDaily = false;
      this.showLocked = false;
      this.checkNone();
    },
    Habits() {
      this.showAll = false;
      this.showHabits = !this.showHabits;
      this.showMovies = false;
      this.showBooks = false;
      this.showSuccess = false;
      this.showMusic = false;
      this.showGoal = false;
      this.showHobbies = false;
      this.showDaily = false;
      this.showLocked = false;
      this.checkNone();
    },
    Goal() {
      this.showAll = false;
      this.showGoal = !this.showGoal;
      this.showMovies = false;
      this.showBooks = false;
      this.showSuccess = false;
      this.showHabits = false;
      this.showMusic = false;
      this.showHobbies = false;
      this.showDaily = false;
      this.showLocked = false;
      this.checkNone();
    },
    Daily() {
      this.showAll = false;
      this.showDaily = !this.showDaily;
      this.showMovies = false;
      this.showBooks = false;
      this.showSuccess = false;
      this.showHabits = false;
      this.showGoal = false;
      this.showHobbies = false;
      this.showMusic = false;
      this.showLocked = false;
      this.checkNone();
    },

    Locked() {
      this.showAll = false;
      this.showLocked = !this.showLocked;
      this.showDaily = false;
      this.showMovies = false;
      this.showBooks = false;
      this.showSuccess = false;
      this.showHabits = false;
      this.showGoal = false;
      this.showHobbies = false;
      this.showMusic = false;
      this.checkNone();
    },
    all() {
      this.showAll = !this.showAll;
      this.showDaily = false;
      this.showMovies = false;
      this.showBooks = false;
      this.showSuccess = false;
      this.showHabits = false;
      this.showGoal = false;
      this.showHobbies = false;
      this.showMusic = false;
      this.showLocked = false;
      this.checkNone();
    },
    checkNone() {
      if (
        !this.showAll &&
        !this.showDaily &&
        !this.showMovies &&
        !this.showBooks &&
        !this.showSuccess &&
        !this.showHabits &&
        !this.showGoal &&
        !this.showHobbies &&
        !this.showMusic &&
        !this.showLocked
      ) {
        this.none = true;
      }
    },
  },
}).mount("#app");
