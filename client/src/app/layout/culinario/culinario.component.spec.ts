import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulinarioComponent } from './culinario.component';

describe('CulinarioComponent', () => {
    let component: CulinarioComponent;
    let fixture: ComponentFixture<CulinarioComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [CulinarioComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CulinarioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
