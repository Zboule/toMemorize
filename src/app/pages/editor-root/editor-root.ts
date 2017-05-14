import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

import { FoldersService } from '../../logic/services/folders.service'

@Component({
  selector: 'page-editor-root',
  templateUrl: 'editor-root.html',
})
export class EditorRoot {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private foldersService: FoldersService
  ) {
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad EditorRoot')

    this.foldersService.getFolders()
  }


}
