
/**
 * @file	Service to manage app folder
 * @author	Jordane CURÉ
 */

import { Injectable } from '@angular/core'

import { Observable, Subscriber } from 'rxjs'

import { FirebaseService } from './firebase.service'


@Injectable()
export class FirebaseUserService {

    private authUser: firebase.User
    private authUserSubscribers: Subscriber<firebase.User>[]

    constructor(
        private firebaseService: FirebaseService
    ) {
        this.authUserSubscribers = []
        this.listenAuthState()
    }

    public subscribeAuthUser(): Observable<firebase.User> {
        return new Observable<firebase.User>(
            (subscriber: Subscriber<firebase.User>) => {
                this.subscribeUser().subscribe(
                    (user) => {
                        if (user) {
                            subscriber.next(user)
                        }
                    }
                )
            }
        )
    }

    public subscribeUser(): Observable<firebase.User> {
        return new Observable<firebase.User>(
            (subscriber: Subscriber<firebase.User>) => {
                this.authUserSubscribers.push(subscriber)
                subscriber.next(this.authUser)
            }
        )
    }

    public anonymousLogIn() {
        this.firebaseService.getInstance().auth().signInAnonymously().catch((error) => {
            console.error(error)
        })
    }

    private listenAuthState() {

        this.firebaseService.getInstance().auth().onAuthStateChanged((user: firebase.User) => {
            if (user) {
                this.authUser = user
            } else {
                this.authUser = undefined
            }
            this.notifyAuthUserSubscribers()
        })
    }

    private notifyAuthUserSubscribers() {
        this.authUserSubscribers.forEach(
            (subscriber: Subscriber<firebase.User>) => {
                subscriber.next(this.authUser)
            }
        )
    }
}
