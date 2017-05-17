
import { Injectable } from '@angular/core'

import { Observable, Subscriber } from 'rxjs'

import { Folder } from '../entities/folder'
import { FOLDERS } from '../mocks/mock'

import { FirebaseDatabaseService } from '../services/firebase.database.service'


@Injectable()
export class FoldersService {

    constructor(
        private firebaseDatabaseService: FirebaseDatabaseService
    ) {
        //
    }

    public getFolders() {

        return this.firebaseDatabaseService.getDatabaseUserReference('/folders')
            .map((dbInstance) => Observable.fromPromise(dbInstance.once('value')))
            .toPromise()



        /*
        let subscriber
        return new Observable<Folder[]>(
            (subscriber) => {

                this.firebaseDatabaseService.getDatabaseUserReference('/folders')
                    .map((dbInstance) => dbInstance.once('value'))
                    .subscribe(snapShot => snapshot.val())

                    .subscribe(
                    (dbInstance) => {
                        dbInstance.once('value').then(
                            (snapshot) => {
                                console.log(snapshot)
                                console.log(snapshot.val())
                            }
                        )
                    }
                    )
            }
        )
         */
    }


    public writeFolder() {
        this.firebaseDatabaseService.getDatabaseUserReference().subscribe(
            (dbInstance) => {
                dbInstance.set({
                    username: 'test',
                    email: 'test',
                    profile_picture: 'test',
                })
            }
        )
    }

    public mockFolderData() {
        this.firebaseDatabaseService.getDatabaseUserReference('/folders').subscribe(
            (dbInstance) => {
                dbInstance.set(FOLDERS)
            }
        )
    }

}
