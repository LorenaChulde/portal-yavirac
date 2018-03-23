import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuianzaTuristicaComponent } from './guianza-turistica.component';

describe('GuianzaTuristicaComponent', () => {
    let component: GuianzaTuristicaComponent;
    let fixture: ComponentFixture<GuianzaTuristicaComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [GuianzaTuristicaComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(GuianzaTuristicaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
