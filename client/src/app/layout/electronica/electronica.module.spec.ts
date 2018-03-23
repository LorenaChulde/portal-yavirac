import { ElectronicaModule } from './electronica.module';

describe('ElectronicaModule', () => {
    let electronicaModule: ElectronicaModule;

    beforeEach(() => {
        electronicaModule = new ElectronicaModule();
    });

    it('should create an instance', () => {
        expect(electronicaModule).toBeTruthy();
    });
});
