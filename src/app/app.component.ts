import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';

import { LinksService } from './services/links.service';
import { Section } from './models/link.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public sections: Section[];

  constructor(private linksService: LinksService) {}

  ngOnInit() {
    this.linksService.getSections().pipe(first()).subscribe(
      (sections: Section[]) => this.sections = sections
    );
  }
}
