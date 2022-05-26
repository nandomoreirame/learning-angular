import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tip-calc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  block = false;

  @Input()
  label = '';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const _baseClass = 'tip-calc-button';
    const _classes = [_baseClass];

    if (this.block) {
      _classes.push(`${_baseClass}--block`);
    }

    return _classes;
  }
}
