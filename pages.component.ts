import { Component, OnInit, VERSION  } from '@angular/core';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  
      public sidebarShow: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}