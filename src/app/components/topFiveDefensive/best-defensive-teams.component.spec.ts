import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDefensiveTeamsComponent } from './best-defensive-teams.component';

describe('BestDefensiveTeamsComponent', () => {
  let component: BestDefensiveTeamsComponent;
  let fixture: ComponentFixture<BestDefensiveTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestDefensiveTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestDefensiveTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
