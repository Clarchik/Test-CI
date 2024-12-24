import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellUtilsComponent } from './sell-utils.component';

describe('SellUtilsComponent', () => {
  let component: SellUtilsComponent;
  let fixture: ComponentFixture<SellUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellUtilsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SellUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
