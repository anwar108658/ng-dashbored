import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"

@Component({
  selector: 'app-button',
  imports: [FontAwesomeModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() label:string=""
  @Input() type: 'button' | 'submit' | 'reset' = 'button'
  @Input() className:string=""
  @Input() icon:string= "";
  @Input() secondaryIcon:string= "";
  @Input() variant: "primary" | "danger" | "outline" |"success"= "primary";
  @Input() iconPosition:"left"|"right"="left"

  @Output() clicked = new EventEmitter<MouseEvent>();

  onClick(event:MouseEvent){
    this.clicked.emit(event)
  }
  
 get colorClass(): string {
    switch (this.variant) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'success':
        return 'bg-blue-400/10 hover:bg-blue-400/30 text-white';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600 text-white';
      case 'outline':
        return 'border-gray-400 text-gray-700 bg-transparent';
      default:
        return 'bg-blue-500 text-white';
    }
  }

  // Final classes combining variant + user custom classes + default padding/rounding
  get buttonClasses(): string {
    return ` ${this.colorClass} ${this.className}`;
  }
}
