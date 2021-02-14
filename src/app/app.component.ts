import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarMenu:boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toastr: ToastrService,
  ){}

  ngOnInit(): void {
    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  logout() {
    this.loginService.logout();
  }
}
