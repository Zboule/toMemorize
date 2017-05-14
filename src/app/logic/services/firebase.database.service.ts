
/**
 * @file	Service to manage app database
 * @author	Jordane CURÉ
 */

import { Injectable } from '@angular/core'

import { Observable, Subscriber } from 'rxjs'

import { FirebaseService } from '../services/firebase.service'
import { FirebaseUserService } from '../services/firebase.user.service'

@Injectable()
export class FirebaseDatabaseService {

    constructor(
        private firebaseService: FirebaseService,
        private firebaseUserService: FirebaseUserService
    ) {
        //
    }

    public getDatabaseUserReference(subpath?: string): Observable<firebase.database.Reference> {

        return new Observable<firebase.database.Reference>(
            (subscriber) => {
                this.firebaseUserService.subscribeAuthUser().subscribe(
                    (user) => {
                        const databaseUserRef = this.getDatabaseUserRef(user)
                        const databaseUserSubRef = this.getDatabaseSubRef(databaseUserRef, subpath)
                        subscriber.next(databaseUserSubRef)
                    }
                )
            }
        )
    }

    private getDatabaseUserRef(user: firebase.User): firebase.database.Reference {
        return this.firebaseService.getDatabase().ref().child(user.uid)
    }

    private getDatabaseSubRef(userRefrence: firebase.database.Reference, path?: string): firebase.database.Reference {
        let reference: firebase.database.Reference

        if (path) {
            reference = userRefrence.child(path)
        }
        else {
            reference = userRefrence
        }

        return userRefrence
    }

}
