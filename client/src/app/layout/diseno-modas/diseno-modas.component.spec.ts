import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoModasComponent } from './diseno-modas.component';

describe('DisenoModasComponent', () => {
    let component: DisenoModasComponent;
    let fixture: ComponentFixture<DisenoModasComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [DisenoModasComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DisenoModasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
