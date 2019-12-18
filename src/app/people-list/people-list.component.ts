import { Component, OnInit } from '@angular/core';
import { PeopleService, Something } from '../people.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people$: Observable<Something[]>;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people$ = this.peopleService.getPeopleCached();
  }
}
