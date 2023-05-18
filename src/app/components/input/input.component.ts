import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() placeholder!: string;
  @Input() label!: string;

  @Input() control: FormControl<any> = new FormControl();

  @Input() inputValue!: string;
  @Input() type!: string;
}
