import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

describe('NxWelcomeComponent', () => {
  let spectator: Spectator<NxWelcomeComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
  });
  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create component', () => {
    expect(spectator.component).toBeTruthy();
  });
});
