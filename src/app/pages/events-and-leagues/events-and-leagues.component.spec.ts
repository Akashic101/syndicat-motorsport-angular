import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsAndLeaguesComponent } from './events-and-leagues.component';

describe('EventsAndLeaguesComponent', () => {
  let component: EventsAndLeaguesComponent;
  let fixture: ComponentFixture<EventsAndLeaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsAndLeaguesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsAndLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
