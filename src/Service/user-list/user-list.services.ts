import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../Models/User/user.model';

@Injectable()
export class UserListService {
    
    private userListRef = this.db.list<User>('Users')

    constructor (private db: AngularFireDatabase) {  }

    getUserList() {
        return this.userListRef;
    }

    

    addUser(user: User) {
       return this.userListRef.push(user);
    }

    updateUser(user : User, uid : string) {
      this.userListRef.update(user.key, user);
    }

 

    
}