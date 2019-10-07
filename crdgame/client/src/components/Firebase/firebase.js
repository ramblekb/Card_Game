import app from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDOBvPrJuUHawwyNFZdNLhLemnVgng6YPw",
    authDomain: "card-game-79e96.firebaseapp.com",
    databaseURL: "https://card-game-79e96.firebaseio.com",
    projectId: "card-game-79e96",
    storageBucket: "",
    messagingSenderId: "364338738749",
    appId: "1:364338738749:web:69238393859c4c7cc81c54",
    measurementId: "G-1DLH13HRHW"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.db = app.database();
    }

    connectionsRef = () => this.db.ref("/connections");
    connectedRef = () => this.db.ref(".info/connected");
    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}
export default Firebase;