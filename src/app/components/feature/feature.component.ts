import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input() title:string;
  @Input() subTitle:string;
  @Input() description:string;
  @Input() linkText:string;
  @Input() imageLink:string;

  constructor() { }

  ngOnInit(): void {
  }

}
