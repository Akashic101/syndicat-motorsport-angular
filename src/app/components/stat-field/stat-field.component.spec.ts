import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatFieldComponent } from './stat-field.component';

describe('StatFieldComponent', () => {
  let component: StatFieldComponent;
  let fixture: ComponentFixture<StatFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatFieldComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StatFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
