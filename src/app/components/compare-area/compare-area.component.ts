import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project/project.service";

@Component({
  selector: 'app-compare-area',
  templateUrl: './compare-area.component.html',
  styleUrls: ['./compare-area.component.scss']
})
export class CompareAreaComponent implements OnInit {

  @Input()
  private index: number;

  content: string = '';
  disabled: boolean = false;
  loading: boolean = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.initData()
  }

  initData() {
    this.projectService.getContentByAreaIndex(this.index)
      .subscribe(content => content ? this.content = content : null)
  }

  onInput() {
    this.projectService.changeContent(this.content, this.index)
  }

  onChange() {
    this.setLoading()
    const update$ = this.projectService.update()
      .subscribe(() => {
        update$.unsubscribe();
        this.setLoading(false)
      })
  }

  setLoading(state = true) {
    this.disabled = state;
    this.loading = state;
  }

}
