import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user!: firebase.User

  constructor(private db: AngularFireDatabase) { }

    save(user: firebase.User){
      this.db.object('/users/' + this.user.uid).update({
        name: user.displayName,
        email: user.email
      });
    }
}
