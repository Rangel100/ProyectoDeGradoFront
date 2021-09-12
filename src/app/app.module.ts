import { MqttModule } from 'ngx-mqtt';
import { IMqttServiceOptions } from 'ngx-mqtt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname:'3.16.75.9',
  // hostname: 'ec2-3-16-75-9.us-east-2.compute.amazonaws.com',
  // hostname: '172.31.11.52',
  port: 9001,
  path: '/mqtt',
  protocol: 'wss'
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
