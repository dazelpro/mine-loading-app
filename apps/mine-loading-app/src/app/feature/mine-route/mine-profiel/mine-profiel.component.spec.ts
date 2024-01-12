import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MineProfielComponent } from "./mine-profiel.component";

describe("MineProfielComponent", () => {
  let component: MineProfielComponent;
  let fixture: ComponentFixture<MineProfielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MineProfielComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MineProfielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
