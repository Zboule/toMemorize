
/**
 * @file	Service to manage app folder
 * @author	Jordane CURÉ
 */

import { Injectable } from '@angular/core'

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

    public getFolders(): Folder[] {
        return undefined
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
