import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  image = "../../assets/image/header.jpg";
  constructor(private tilSer:Title) {
    this.tilSer.setTitle("LetsChoices");
   }

  ngOnInit() {
  }

}
