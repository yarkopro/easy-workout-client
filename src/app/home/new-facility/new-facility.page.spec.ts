import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewFacilityPage } from './new-facility.page';

describe('NewFacilityPage', () => {
  let component: NewFacilityPage;
  let fixture: ComponentFixture<NewFacilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFacilityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewFacilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
