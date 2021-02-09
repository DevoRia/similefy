import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../models/project/project";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  project: Project

  constructor() { }

  ngOnInit(): void {
  }

}
