import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild
} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements AfterViewInit{
  message = "Hello World Message From Parent Component...Message to be continue";
  greetMessageFromChild: string | undefined;
  receiveMessageOutput = '';
  @ViewChild(ChildComponent) childComp!:ChildComponent;

  constructor() {
    console.log('constructor called')
  }

  ngAfterViewInit() {
    console.log(this.childComp)
    this.greetMessageFromChild = this.childComp.greetMessage;
  }
  receiveMessage($event:string){
    console.log($event)
    this.receiveMessageOutput = $event
  }
}
