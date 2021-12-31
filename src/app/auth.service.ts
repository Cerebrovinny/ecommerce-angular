import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: firebase.User | null;

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user => this.user = user)
  }

  login() {
    const provider = (new firebase.auth.GoogleAuthProvider());
    return this.afAuth.auth.signInWithRedirect(provider).then(value => {
      console.log('Sucess', value)
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  userName(){
    
  }

}
