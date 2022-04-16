import firebase from 'firebase/compat/app' 
import 'firebase/compat/auth'

const app = firebase.initializeApp({
 apiKey: "AIzaSyARZgWfmllxaQNYyMChYnAQdpNIcm1fTm4",
  authDomain: "cosc484-web-project.firebaseapp.com",
  projectId: "cosc484-web-project",
  storageBucket: "cosc484-web-project.appspot.com",
  messagingSenderId: "491746716006",
  appId: "1:491746716006:web:0dedbed786181a528900a7",
  measurementId: "G-BPXPQLHDE6"
})

/*
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMEND_ID
})

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
*/

export const auth = app.auth()
export default app