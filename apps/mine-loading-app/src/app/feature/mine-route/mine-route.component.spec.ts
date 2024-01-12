import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineRouteComponent } from './mine-route.component';

describe('MineRouteComponent', () => {
  let component: MineRouteComponent;
  let fixture: ComponentFixture<MineRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MineRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MineRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
