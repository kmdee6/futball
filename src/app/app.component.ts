import {Component, OnInit} from '@angular/core';
import {TeamsService} from "./teams.service";
import {Team} from "./team";
import {TeamList} from "./teams";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private teamsService: TeamsService) {
  }

  public showStats(teamId: number) {

  }
}
