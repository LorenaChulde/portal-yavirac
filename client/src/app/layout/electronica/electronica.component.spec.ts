import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicaComponent } from './electronica.component';

describe('CulinarioComponent', () => {
    let component: ElectronicaComponent;
    let fixture: ComponentFixture<ElectronicaComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ElectronicaComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ElectronicaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
