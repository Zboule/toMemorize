
/**
 * @file	Define all module of the app
 * @author	Jordane CURÉ
 */

import { ErrorHandler, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'

import { MyApp } from './app_root/app_root'

import { EditorRoot } from './pages/editor-root/editor-root'
import { Questionner } from './pages/questionner/questionner'
import { Settings } from './pages/settings/settings'

import { FirebaseDatabaseService } from './logic/services/firebase.database.service'
import { FirebaseService } from './logic/services/firebase.service'
import { FirebaseUserService } from './logic/services/firebase.user.service'
import { FoldersService } from './logic/services/folders.service'

@NgModule({
  declarations: [
    MyApp,
    Questionner,
    EditorRoot,
    Settings,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Questionner,
    EditorRoot,
    Settings,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
    FirebaseUserService,
    FirebaseDatabaseService,
    FoldersService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule { }
