import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  @HostBinding('class') class = 'main-container';

  constructor() { }

  ngOnInit() {
  }

}
