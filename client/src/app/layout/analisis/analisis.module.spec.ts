import { AnalisisModule } from './analisis.module';

describe('AnalisisModule', () => {
    let analisisModule: AnalisisModule;

    beforeEach(() => {
        analisisModule = new AnalisisModule();
    });

    it('should create an instance', () => {
        expect(analisisModule).toBeTruthy();
    });
});
