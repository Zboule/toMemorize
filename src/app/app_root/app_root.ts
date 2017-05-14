
/**
 * @file	App entry point
 * @author	Jordane CURÉ
 */

import { Component } from '@angular/core'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { Platform } from 'ionic-angular'

import { EditorRoot } from '../pages/editor-root/editor-root'
import { Questionner } from '../pages/questionner/questionner'
import { Settings } from '../pages/settings/settings'

import { FoldersService } from '../logic/services/folders.service'

@Component({
  templateUrl: 'app_root.html',
})
export class MyApp {

  public pageQuestionner: any = Questionner
  public pageEditorRoot: any = EditorRoot
  public pageSettings: any = Settings

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    foldersService: FoldersService
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault()
      splashScreen.hide()


      // firebaseUserService.anonymousLogIn()
      foldersService.mockFolderData()
    })
  }
}

