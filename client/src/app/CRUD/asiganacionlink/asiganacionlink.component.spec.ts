import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsiganacionLinkComponent } from './asiganacionlink.component';

describe('AsiganacionLinkComponent', () => {
   let component: AsiganacionLinkComponent;
   let fixture: ComponentFixture<AsiganacionLinkComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ AsiganacionLinkComponent ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AsiganacionLinkComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});