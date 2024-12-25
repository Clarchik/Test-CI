import { ComponentFixture } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let fixture: ComponentFixture<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [AppComponent, NxWelcomeComponent, RouterModule.forRoot([])],
  });
  beforeEach(() => {
    spectator = createComponent();
    fixture = spectator.fixture;
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome sell');
  });

  it(`should have as title 'sell'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sell');
  });
});
