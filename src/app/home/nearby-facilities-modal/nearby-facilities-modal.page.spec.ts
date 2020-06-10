import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyFacilitiesModalPage } from './nearby-facilities-modal.page';

describe('NearbyFacilitiesModalPage', () => {
  let component: NearbyFacilitiesModalPage;
  let fixture: ComponentFixture<NearbyFacilitiesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyFacilitiesModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyFacilitiesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
