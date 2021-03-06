import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getComents().subscribe(data => this.comments$ = data);
  }

}
