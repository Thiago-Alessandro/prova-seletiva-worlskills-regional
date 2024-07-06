import { Injectable } from '@angular/core';

import axios, { AxiosHeaders } from 'axios';
import { Celular } from 'src/model/celular';
import { UsuarioCelular } from 'src/model/usuarioCelular';

const API_URL = "http://localhost:9090/api/celular"
// const axios:Axios = new Axios()

@Injectable({
  providedIn: 'root'
})

export class CelularService {

  constructor() { }

  async getAll():Promise<Celular[]>{
    let result:Celular[] = await (await axios.get(API_URL, )).data
    console.log(result);
    return result
    
  }

  async patchLiked(id:number, userId:number):Promise<Celular>{
    let result:Celular = await axios.patch(API_URL+"/like/cellId/"+id+"/user/"+userId)
    console.log(result);
    return result
  }

  async patchUnliked(id:number, userId:number):Promise<Celular>{
    let result:Celular = await axios.patch(API_URL+"/dislike/cellId/"+id+"/user/"+userId)
    console.log(result);
    return result
  }

  async sendComment(usuarioCelular:UsuarioCelular){
    let result:Celular = await axios.post(API_URL+"/comment", usuarioCelular)
    console.log(result);
    return result
  }

}




