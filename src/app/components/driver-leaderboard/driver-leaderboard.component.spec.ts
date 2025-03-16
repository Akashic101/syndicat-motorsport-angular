import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DriverLeaderboardComponent } from './driver-leaderboard.component';

describe('DriverLeaderboardComponent', () => {
  let component: DriverLeaderboardComponent;
  let fixture: ComponentFixture<DriverLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverLeaderboardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
