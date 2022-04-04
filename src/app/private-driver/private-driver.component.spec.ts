import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDriverComponent } from './private-driver.component';

describe('PrivateDriverComponent', () => {
  let component: PrivateDriverComponent;
  let fixture: ComponentFixture<PrivateDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
