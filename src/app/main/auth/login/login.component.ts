import { IMqttMessage } from 'ngx-mqtt';
import { MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  //mqtt
  private subscription: Subscription;
  topicname: any;
  msg: any;
  // isConnected: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authh: AngularFireAuth,
    private router: Router,
    private _mqttService: MqttService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'usuario':'',
      'password':'',
    });

    this.subscribeNewTopic();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  login(){
    if(this.form.valid){

      console.log("login");
      console.log(this.form);
      this.authh.signInWithEmailAndPassword(this.form.controls.usuario.value,this.form.controls.password.value).then(user => {
        console.log(user);
        this.router.navigate(['home']);
      }).catch(err => {
        console.log(err.message);
      })
    }else{
      console.log("El formulario no es valido");
      
    }
    // this.authh.signInWithEmailAndPassword(this.form.controls.usuario.value,this.form.controls.pss.value).then(user => {;
    // this.authh.createUserWithEmailAndPassword(this.form.controls.usuario.value,this.form.controls.pss.value).then(user => {
  }

  subscribeNewTopic(): void {
    console.log('Me subscribo al topico')
    this.subscription = this._mqttService.observe("test").subscribe((message: IMqttMessage) => {
      this.msg = message;
      // console.log('msg: ', message)
      console.log(message.payload.toString());
      
      // this.logMsg('Message: ' + message.payload.toString() + '<br> for topic: ' + message.topic);
    });
    // this.logMsg('subscribed to topic: ' + this.topicname)
  }

  sendmsg(): void {
    console.log("Envio mensaje");
    
    // use unsafe publish for non-ssl websockets
    this._mqttService.unsafePublish("testSub", "Mensaje desde aplicativo web", { qos: 1, retain: true })
    this.msg = ''
  }



}
