import { Component, OnInit } from '@angular/core';
import { PeopleService, Something } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Something[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeopleCached()
      .subscribe(p => this.people = p);
  }

}
