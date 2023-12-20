import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'obtest';
  posts$: Observable<any[]>;


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.posts$ = this.dataService.getPosts()
  }
}
