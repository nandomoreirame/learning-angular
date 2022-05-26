import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tip-calculator-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tip Calculator App';
  private _message = 'Hello World!';

  @Input()
  get message(): string {
    return this._message;
  }

  set message(msg: string) {
    this._message = msg;
  }

  @Output()
  onClick = new EventEmitter<Event>();
}
