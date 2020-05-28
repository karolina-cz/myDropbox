import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { User } from "../models/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
   actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: 'http://localhost:4200/main',
    // This must be true.
    handleCodeInApp: true,
    //dynamicLinkDomain: 'example.page.link'
  };

  userData: any; // Save logged in user data

  ForgotPasswordClickedEmitter: BehaviorSubject<boolean> = new BehaviorSubject(false);

  AuthSuccessEmitted: BehaviorSubject<boolean> = new BehaviorSubject(false);
  AuthCreateFileListEmitted :BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      console.log(user)
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    }, )
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.AuthSuccessEmitted.next (true);
        this.AuthCreateFileListEmitted.next (true);
        this.SetUserData(result.user);
        //this.router.navigate(['main']);
        
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail(result.user.email);
        this.SetUserData(result.user);

      }).catch((error) => {
        window.alert(error.message)
      })
  }

  //Send email verfificaiton when new user sign up
  SendVerificationMail(email) {
    
    return this.afAuth.sendSignInLinkToEmail(email,this.actionCodeSettings )
    .then(() => {
      this.AuthSuccessEmitted.next (true);
      //this.router.navigate(['dashboard']);
    }).catch((error) => {
      window.alert(error)
    })
  }


  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null ) ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        this.AuthSuccessEmitted.next (true);
        //this.router.navigate(['dashboard']);
        
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['main']);
    })
  }

  getUserUid(){
    if(typeof this.userData !== 'undefined')
    return this.userData.uid;
    else
    return null;
  }
  //dashboard tests
  async testGetUserUid(){
    this.userData = this.afAuth.authState.toPromise();
    console.log('jestem w testgetuseruid')
    return this.userData.uid;
  }
  getUserUid2(){
    this.testGetUserUid().then(() =>{
      console.log(this.userData.uid)
      return this.userData.uid;
    })
  }

  FacebookAuth(){}
}