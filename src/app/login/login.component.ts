import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth) { 
  }

  ngOnInit(): void {
  }

  login(){
    const provider = (new firebase.auth.GoogleAuthProvider());
    return this.afAuth.auth.signInWithRedirect(provider).then(value => {
      console.log('Sucess', value)
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

}
