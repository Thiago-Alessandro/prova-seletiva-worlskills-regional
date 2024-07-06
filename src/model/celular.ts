import { UsuarioCelular } from "./usuarioCelular";

export class Celular {
    id?:number;
    descricao?:string;
    imagem?:string;
    likes?:number;
    dislikes?:number;
    usuarioCelularList:UsuarioCelular[] = []
}