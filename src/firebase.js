import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

var config = {
  apiKey: "AIzaSyDt9kREPjtm9RdpDV25Wk6Al6IWtyStP14",
  authDomain: "man-city-d1904.firebaseapp.com",
  databaseURL: "https://man-city-d1904.firebaseio.com",
  projectId: "man-city-d1904",
  storageBucket: "man-city-d1904.appspot.com",
  messagingSenderId: "588725878225"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}