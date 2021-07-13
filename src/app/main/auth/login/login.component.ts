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

  constructor(
    private formBuilder: FormBuilder,
    private authh: AngularFireAuth,
    private router: Router, 
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'usuario':'',
      'password':'',
    })
  }

  login(){
    if(this.form.valid){

      console.log("login");
      console.log(this.form);

      this.authh.signInWithEmailAndPassword(this.form.controls.usuario.value,this.form.controls.password.value).then(user => {
        console.log(user);
        this.router.navigate(['home']);

      }).catch(err => console.log(err.message))
    }else{

      console.log("El formulario no es valido");
      
    }
    // this.authh.signInWithEmailAndPassword(this.form.controls.usuario.value,this.form.controls.pss.value).then(user => {;
    // this.authh.createUserWithEmailAndPassword(this.form.controls.usuario.value,this.form.controls.pss.value).then(user => {
  }



}
