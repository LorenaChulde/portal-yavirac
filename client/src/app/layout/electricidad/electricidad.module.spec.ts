import { ElectricidadModule } from './electricidad.module';

describe('ElectricidadModule', () => {
    let electricidadModule: ElectricidadModule;

    beforeEach(() => {
        electricidadModule = new ElectricidadModule();
    });

    it('should create an instance', () => {
        expect(electricidadModule).toBeTruthy();
    });
});
