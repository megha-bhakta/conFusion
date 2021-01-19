import { Injectable } from '@angular/core';
import {Leader} from 'src/app/model/leader';
import{LEADERS} from 'src/app/service/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[]{
    return LEADERS;
  }

  getLeader(id: string): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
