import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/usuario';
import { UsuarioService } from 'src/service/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

email:string = ""
password:string = ""
user?:Usuario


  constructor(private userService:UsuarioService) { }

  ngOnInit(): void {
  }

  async login(){
    let userEmail:string = localStorage.getItem("loggedUserEmail") ? localStorage.getItem("loggedUserEmail")! : ""
    if(userEmail){
      alert("Para realizar login, saia de sua sessão!")
      return
    }
    console.log("logando: " + this.email + "" +this.password);
    
    this.user = await this.userService.login(this.email, this.password)
    
    if(this.user){
      localStorage.setItem("loggedUserEmail", this.user.email!)
      window.location.replace("")
    }
  }

}
