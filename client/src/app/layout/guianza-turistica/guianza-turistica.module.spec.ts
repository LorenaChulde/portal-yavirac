import { GuianzaTuristicaModule } from './guianza-turistica.module';

describe('GuianzaTuristicaModule', () => {
    let gianzaTuristicaModule: GuianzaTuristicaModule;

    beforeEach(() => {
        gianzaTuristicaModule = new GuianzaTuristicaModule();
    });

    it('should create an instance', () => {
        expect(gianzaTuristicaModule).toBeTruthy();
    });
});
