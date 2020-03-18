import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output('register') onRegister : EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }


  register(registerForm: NgForm) {
    this.onRegister.emit(registerForm.value)
  }
}
