import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsASCComponent } from './teams-asc.component';

describe('TeamsASCComponent', () => {
  let component: TeamsASCComponent;
  let fixture: ComponentFixture<TeamsASCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsASCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsASCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
