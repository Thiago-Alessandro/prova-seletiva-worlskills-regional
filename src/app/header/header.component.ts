import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/usuario';
import { UsuarioService } from 'src/service/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UsuarioService) { }

  user?:Usuario|null

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.findByEmail(localStorage.getItem("loggedUserEmail")!)
    console.log(this.user);
    
  }

  redirectHome(){
    window.location.replace("")
  }

  logout(){
    if(this.user){
      setTimeout(() => {
        localStorage.setItem("loggedUserEmail", "")
        localStorage.removeItem("loggedUserEmail")
        localStorage.clear()
        this.user = null
      }, 100)
    }
    setTimeout( () => {
      window.location.replace("/login")
    }, 500)
  }

  loginExitButtonText(): string {
    return this.user ? "SAIR" : "LOGIN";
  }

}
