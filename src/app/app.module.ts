import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {IonicStorageModule} from '@ionic/storage';
import {SafariViewController} from '@ionic-native/safari-view-controller/ngx';
import {TimeoutInterceptor} from './timeout-interceptor/timeout.interceptor';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AuthModule
  ],
  providers: [
    HttpClientModule,
    SafariViewController,
    StatusBar,
    SplashScreen,
    { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true },
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    Geolocation,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
