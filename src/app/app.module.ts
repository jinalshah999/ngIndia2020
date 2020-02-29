import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClipboardModule } from "@angular/cdk/clipboard";
import { GoogleMapsModule } from "@angular/google-maps";
import { YouTubePlayerModule } from '@angular/youtube-player'
import { AppComponent } from './app.component';
import { MapDemoComponent } from './map-demo/map-demo.component';
import { ClipboardComponent } from './clipboard/clipboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MapDemoComponent,
    ClipboardComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    ClipboardModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
