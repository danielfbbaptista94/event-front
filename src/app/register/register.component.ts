import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../shared/modal/user';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  registerForm: FormGroup;

  profiles = [];

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clearForm();
    this.buildForm();
  }

  clearForm() {
    this.user = {
      id: null,
      name: null,
      email: null,
      username: null,
      password: null,
      status: false,
      age: null,
    };
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      status: [false],
      age: [Validators.required],
    })
  }

  register() {
    console.log(this.user);
    this.registerService.register(this.user).subscribe(
      (success) => {
        this.router.navigate(['/login']);
        this.toastr.success("Success", "User register with success !");
      },
      (error) => {
        this.toastr.error("Error", "Fail to register User !");
      }
    )
  }
}
