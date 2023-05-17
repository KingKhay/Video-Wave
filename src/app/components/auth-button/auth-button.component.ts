import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent {
  @Input()title!: string;
  @Input() backgroundColor!: string;
  @Input() textColor!: string;

}
