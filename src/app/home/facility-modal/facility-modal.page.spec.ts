import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacilityModalPage } from './facility-modal.page';

describe('FacilityModalPage', () => {
  let component: FacilityModalPage;
  let fixture: ComponentFixture<FacilityModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacilityModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
