import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsDescComponent } from './teams-desc.component';

describe('TeamsDescComponent', () => {
  let component: TeamsDescComponent;
  let fixture: ComponentFixture<TeamsDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
