import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightMatchComponent } from './highlight-match.component';

describe('HighlightMatchComponent', () => {
  let component: HighlightMatchComponent;
  let fixture: ComponentFixture<HighlightMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
