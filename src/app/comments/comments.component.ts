import { Component, OnInit } from '@angular/core';
import { Celular } from 'src/model/celular';
import { UsuarioCelular } from 'src/model/usuarioCelular';
import { CelularService } from 'src/service/celular.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  newComment:string = ""
  selectedCellphone:Celular 
  ={likes:0, descricao: "Descricao", id:0, dislikes:0, imagem:"../../assets/6643bca0d214c.jpg", usuarioCelularList:[{comment:"comentario", user:{nome:"Thiago"}, commentDateTime:new Date}, {comment:"comentario 2", user:{nome:"Thiago 2"}, commentDateTime:new Date}, ]}

  constructor(private cellService:CelularService) { }

  async ngOnInit(): Promise<void> {
    setTimeout(() => {
      window.addEventListener("comment", (e:Event) => {this.receiveEvent(e as CustomEvent)})
    }, 100)
    // this.selectedCellphone = await
  }

  checkTextLimit(){
    console.log("opa to aq");
    
    if(this.newComment.length<140){
      return
    }
    alert("Limite de caracteres atingido")
  }

  receiveEvent(e:CustomEvent){
    console.log("oooppa evento hein");
    
    alert("opa")
    alert(e.detail)
  }

  getBackgroundColor(index:number){
    console.log(index%2==0);
    if(index%2==0) return "bg-[#272727]"

    
    return "bg-white"
  }

  sendComment(){
    if(this.newComment.length>0){
      let usuarioCelular:UsuarioCelular = new UsuarioCelular()
      this.cellService.sendComment(usuarioCelular)
      alert("Comentário enviado com sucesso")
    }
    alert("Preencha o campo do comentário")
  }

}
