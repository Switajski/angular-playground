import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count: number;
  constructor(private counterService: CounterService) {
  }

  ngOnInit() {
    this.counterService.getCounter().subscribe(c => this.count = c)
  }

}
