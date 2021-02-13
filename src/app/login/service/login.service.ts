import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { LoginDTO } from '../modal/loginDTO';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userAuthenticated: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) { }

  submit(loginDTO: LoginDTO) {
    return this.http.post(API_URL + "/auth/login", loginDTO)
      .subscribe(
        (success) => {
          this.userAuthenticated = true;
          this.mostrarMenuEmitter.emit(true);
          this.toastr.success("Success", "User register with success !");
        },
        (error) => {
          this.userAuthenticated = false;
          this.mostrarMenuEmitter.emit(false);
          this.toastr.error("Error", "Fail to register User !");
        }
      );
  }

  userAuth() {
    return this.userAuthenticated;
  }
}
