import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamsService {

  private TEAMS_URL = 'http://localhost:8080/teams';

  constructor(private http: Http) { }

  public getTeams() {
      return this.http.get(this.TEAMS_URL);
  }

  public getTeamStats() {
    //return this.http.get();
  }

}
