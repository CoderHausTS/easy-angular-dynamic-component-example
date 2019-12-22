import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-injected',
  templateUrl: './another-injected.component.html',
  styleUrls: ['./another-injected.component.css']
})
export class AnotherInjectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
