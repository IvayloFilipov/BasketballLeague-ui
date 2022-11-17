import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOffensiveTeamsComponent } from './best-offensive-teams.component';

describe('BestOffensiveTeamsComponent', () => {
  let component: BestOffensiveTeamsComponent;
  let fixture: ComponentFixture<BestOffensiveTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestOffensiveTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestOffensiveTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
