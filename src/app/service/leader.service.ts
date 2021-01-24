import { Injectable } from '@angular/core';
import {Leader} from 'src/app/model/leader';
import{LEADERS} from 'src/app/service/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]>{
    return new Promise(resolve =>{
    setTimeout(() => resolve(LEADERS),2000);
    });
  }

  getLeader(id: string): Promise<Leader> {
    return new Promise(resolve =>{
      setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]),2000);
    });
  }

  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve =>{
      setTimeout( () => resolve(LEADERS.filter((leader) => leader.featured)[0]),2000);
    });
  }
}
