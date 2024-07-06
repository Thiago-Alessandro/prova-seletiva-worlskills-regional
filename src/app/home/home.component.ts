import { Component, OnInit } from '@angular/core';
import { Celular } from 'src/model/celular';
import { Usuario } from 'src/model/usuario';
import { CelularService } from 'src/service/celular.service';
import { UsuarioService } from 'src/service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  celulares:any[] = [{descricao:"opa esasa é a descricao", likes:0, comments:0, dislikes:1},{likes:0, comments:0, dislikes:1},{likes:0, comments:0, dislikes:1},{likes:0, comments:0, dislikes:1},{likes:0, comments:0, dislikes:1},{likes:0, comments:0, dislikes:1},]
  user?:Usuario|null


  constructor(private cellService:CelularService, private userService:UsuarioService) { }

  async ngOnInit(): Promise<void> {
    this.celulares = await this.cellService.getAll()
    let email = localStorage.getItem("loggedUserEmail") ?? ""
    if(email){
      this.user = await this.userService.findByEmail(email)
    }
  }

  redirectComments(cell:Celular){
    window.dispatchEvent(new CustomEvent("comment", {detail:cell}))
    window.location.replace("comentarios")
  }

  async like(cell:Celular){
    if(this.user){
      cell.likes!++;
      cell = await this.cellService.patchLiked(cell.id!, this.user?.id!)
    }
  }

  async dislike(cell:Celular){
    if(this.user){
      cell.dislikes!++;
      cell = await this.cellService.patchUnliked(cell.id!, this.user?.id!)
    }
  }


  isUserLogged():boolean{
    if(this.user){
      return true
    }
    return false
  }

}
