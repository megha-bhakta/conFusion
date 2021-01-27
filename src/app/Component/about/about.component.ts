import { Component, Inject, OnInit } from '@angular/core';
import { expand, flyInOut } from 'src/app/animations/app.animations';
import {Leader} from 'src/app/model/leader';
import {LeaderService} from 'src/app/service/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leader:Leader[];
  constructor(private leaderService:LeaderService,
    @Inject('baseURL') public baseURL) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(leader => (this.leader=leader));

  }

}
