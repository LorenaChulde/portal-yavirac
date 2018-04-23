import { BolsaEmpleoModule } from './bolsa-empleo.module';

describe('BolsaEmpleoModule', () => {
    let bolsaEmpleoModule: BolsaEmpleoModule;

    beforeEach(() => {
        bolsaEmpleoModule = new BolsaEmpleoModule();
    });

    it('should create an instance', () => {
        expect(bolsaEmpleoModule).toBeTruthy();
    });
});
