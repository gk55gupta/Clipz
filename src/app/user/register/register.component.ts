import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl(''),
    age: new FormControl(''),
    pass: new FormControl(''),
    confirmPass: new FormControl(''),
    phone: new FormControl('')
  });

  ngOnInit(): void {
  }

}
