import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent implements OnInit {
code:string='AAA-BBB-CCC';
  constructor() { }

  ngOnInit(): void {
  }

}
