import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Estudos Angular';

  ngOnInit() {
    const link = document.createElement('link');
    const script = document.createElement('script');

    link.rel = 'stylesheet';
    link.href = 'http://127.0.0.1:8081/tip-calculator-app/styles.css';
    script.src = 'http://127.0.0.1:8081/tip-calculator-app/main.js';

    document.body.prepend(link);
    document.body.appendChild(script);
  }
}
