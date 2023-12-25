import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;

  loginForm = new FormGroup({
    userName : new FormControl("",Validators.required),
    passWord : new FormControl("",Validators.required)
  });

  loginSubmit():void{
    var userName = this.loginForm.controls.userName.value;
    var passWord = this.loginForm.controls.passWord.value;
    if ((userName != undefined && userName != "") && (passWord != undefined && passWord != "")){

    }else{
      alert("Fields are required")
    }
  }
}
