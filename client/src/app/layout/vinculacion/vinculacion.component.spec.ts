import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinculacionComponent } from './vinculacion.component';

describe('VinculacionComponent', () => {
    let component: VinculacionComponent;
    let fixture: ComponentFixture<VinculacionComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [VinculacionComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(VinculacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
