import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  outputChildMessage = "Hello User ! Send message from child component to parent using Output"
  @Input() incomingMessage: string | undefined
  @Output() outgoingMessage = new EventEmitter<string>()
  greetMessage = "Hello Mr. User";

  sendMessage() {
    this.outgoingMessage.emit(this.outputChildMessage)
  }



}
