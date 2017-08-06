import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KunstenaarsComponent } from './kunstenaars.component';

describe('KunstenaarsComponent', () => {
  let component: KunstenaarsComponent;
  let fixture: ComponentFixture<KunstenaarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KunstenaarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KunstenaarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
