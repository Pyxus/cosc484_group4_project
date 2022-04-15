// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARZgWfmllxaQNYyMChYnAQdpNIcm1fTm4",
  authDomain: "cosc484-web-project.firebaseapp.com",
  projectId: "cosc484-web-project",
  storageBucket: "cosc484-web-project.appspot.com",
  messagingSenderId: "491746716006",
  appId: "1:491746716006:web:0dedbed786181a528900a7",
  measurementId: "G-BPXPQLHDE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export var url = 'http://localhost:3000/'

export function reguarlRequest(handler, method, body, callback){
  const http = new XMLHttpRequest()

  http.responseType = 'json'
  http.open(method, url + handler, true)

  if (body != null){
    http.setRequestHeader('Content-Type', 'application/json')
  }

  http.onload = function(){
    callback(http.response)
  }

  http.send(JSON.stringify(body))
}