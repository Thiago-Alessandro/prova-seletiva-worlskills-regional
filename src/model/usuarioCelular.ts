import { Usuario } from "./usuario";

export class UsuarioCelular{

userId?:number;
celularId?:number;

user?:Usuario;

liked?:boolean;
disliked?:boolean;
comment:string= "";
commentDateTime?:Date;
}