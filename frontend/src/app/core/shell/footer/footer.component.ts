import { Component, OnInit } from '@angular/core';
import { faEnvelopeCircleCheck, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faEnvelopeCircleCheck = faEnvelopeCircleCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
