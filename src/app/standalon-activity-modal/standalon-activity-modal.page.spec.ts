import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StandalonActivityModalPage } from './standalon-activity-modal.page';

describe('StandalonActivityModalPage', () => {
  let component: StandalonActivityModalPage;
  let fixture: ComponentFixture<StandalonActivityModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandalonActivityModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StandalonActivityModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
