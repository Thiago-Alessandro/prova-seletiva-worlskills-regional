import { Injectable } from '@angular/core';
import axios, { AxiosHeaders } from 'axios';
import { Usuario } from 'src/model/usuario';

const API_URL = "http://localhost:9090/api/usuario"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  async login(email:string, senha:string):Promise<Usuario>{
    try{
      let result:Promise<Usuario> = (await axios.post(API_URL+"/login", {email:email, password:senha})).data
      console.log(result);
      console.log("result");
      console.log((await axios.post(API_URL+"/login", {email:email, password:senha})));
      
      return result
    } catch (e){
      alert("Login inválido")
      throw e
    }
  }

  async findByEmail(email:string){
    try{
      let result:Promise<Usuario> = (await axios.get(API_URL+"/email/" + email)).data
      return result
    } catch (e){
      throw e
    }
  }

}
