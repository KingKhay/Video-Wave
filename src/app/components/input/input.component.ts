import {Component, Input} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() placeholder!: string;
  @Input() label!: string;

  @Input() control!: AbstractControl;

  @Input() inputValue!: string;
}
