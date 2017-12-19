import {Component, OnInit} from '@angular/core';
import {TeamsService} from '../teams.service';
import {TeamList} from '../teams';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  timelines = [];
  selectedTimeline: string;
  games = [];
  selectedGame: string;
  teams: TeamList;
  selectedTeam: string;

  constructor(teamsService: TeamsService) {
    this.timelines = [{'title': 'Previous', 'value': 'p'}, {'title': 'Next', 'value': 'n'}];
    this.games = [{'number': '1', 'value': '1'}, {'number': '2', 'value': '2'}, {'number': '3', 'value': '3'}, {
      'number': '4',
      'value': '4'
    }, {'number': '5', 'value': '5'}, {'number': '6', 'value': '6'}, {'number': '7', 'value': '7'}, {
      'number': '8',
      'value': '8'
    }, {
      'number': '9',
      'value': '9'
    }, {'number': '10', 'value': '10'}];

    teamsService.getTeams().subscribe(data => {
      this.teams = JSON.parse(data.text()).teams;
    });


  }

  ngOnInit() {
    console.error('Time line', this.selectedTimeline);
  }

}
