import { VinculacionModule } from './vinculacion.module';

describe('VinculacionModule', () => {
    let vinculacionModule: VinculacionModule;

    beforeEach(() => {
        vinculacionModule = new VinculacionModule();
    });

    it('should create an instance', () => {
        expect(vinculacionModule).toBeTruthy();
    });
});
