import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CategoryPage } from '../pages/category/category';
import { PoliticsPage } from '../pages/politics/politics';
import { PoliticsResultsPage } from '../pages/politics-results/politics-results';
import { ReligionPage } from '../pages/religion/religion';
import { ReligionResultsPage } from '../pages/religion-results/religion-results';
import { HistoryPage } from '../pages/history/history';
import { HresultsPage } from '../pages/hresults/hresults';
import { GresultsPage } from '../pages/gresults/gresults';
import { GeographyPage } from '../pages/geography/geography';
import { SciencePage } from '../pages/science/science';
import { ScienceResultsPage } from '../pages/science-results/science-results';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyDataProvider } from '../providers/my-data/my-data';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryPage,
    PoliticsPage,
    PoliticsResultsPage,
    ReligionPage,
    ReligionResultsPage,
    HistoryPage,
    HresultsPage,
    GresultsPage,
    GeographyPage,
    SciencePage,
    ScienceResultsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    PoliticsPage,
    PoliticsResultsPage,
    ReligionPage,
    ReligionResultsPage,
    HistoryPage,
    HresultsPage,
    GresultsPage,
    GeographyPage,
    SciencePage,
    ScienceResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyDataProvider
  ]
})
export class AppModule {}
