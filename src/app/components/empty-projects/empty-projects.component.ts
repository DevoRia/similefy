import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from "ngx-lottie";

@Component({
  selector: 'app-empty-projects',
  templateUrl: './empty-projects.component.html',
  styleUrls: ['./empty-projects.component.scss']
})
export class EmptyProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  animationOptions: AnimationOptions = {
    path: '/assets/animations/empty-box.json',
  };

}
