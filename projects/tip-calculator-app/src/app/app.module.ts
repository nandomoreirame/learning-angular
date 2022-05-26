import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  // entryComponents:[AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor (private injector: Injector) {}

  ngDoBootstrap() {
    const elem = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('tip-calculator-app', elem);
  }
}
