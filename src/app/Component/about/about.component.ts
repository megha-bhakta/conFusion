import { Component, OnInit } from '@angular/core';
import {Leader} from 'src/app/model/leader';
import {LeaderService} from 'src/app/service/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leader:Leader[];
  constructor(private leaderService:LeaderService) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().then(leader => (this.leader=leader));

  }

}
