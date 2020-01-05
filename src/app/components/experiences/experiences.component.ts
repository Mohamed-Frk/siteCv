import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  @HostBinding('class') class = 'main-container';

  constructor() { }

  ngOnInit() {
  }

}
