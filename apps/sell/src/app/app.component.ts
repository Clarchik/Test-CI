import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NxWelcomeComponent, RouterModule, AsyncPipe, FormsModule, NgIf],
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  readonly title = 'sell';

  test = of(1);

  constructor() {
    let b = 1;
    const a = 1;

    console.log(a);
    console.log(b);
  }
}
