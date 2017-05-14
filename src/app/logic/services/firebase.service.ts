
/**
 * @file	Service to manage app folder
 * @author	Jordane CURÉ
 */

import { Injectable } from '@angular/core'

import firebase from 'firebase'


@Injectable()
export class FirebaseService {

    private config = {
        apiKey: 'AIzaSyAXnD7q_CNrG2t_30lP65SMmXH-APoL9mc',
        authDomain: 'tomemorize-df0af.firebaseapp.com',
        databaseURL: 'https://tomemorize-df0af.firebaseio.com',
        projectId: 'tomemorize-df0af',
        storageBucket: 'tomemorize-df0af.appspot.com',
        messagingSenderId: '308208341616',
    }

    private firebaseInstance: firebase.app.App

    constructor() {
        this.firebaseInstance = firebase.initializeApp(this.config)
    }

    public getInstance(): firebase.app.App {
        return this.firebaseInstance
    }

    public getDatabase (): firebase.database.Database {
        return this.firebaseInstance.database()
    }


}
