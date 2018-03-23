import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraSoftwareComponent } from './carrera-software.component';

describe('CarreraSoftwareComponent', () => {
    let component: CarreraSoftwareComponent;
    let fixture: ComponentFixture<CarreraSoftwareComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [CarreraSoftwareComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CarreraSoftwareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
