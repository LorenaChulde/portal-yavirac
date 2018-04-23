import { DisenoModasModule } from './diseno-modas.module';

describe('DisenoModasModule', () => {
    let disenoModasModule: DisenoModasModule;

    beforeEach(() => {
        disenoModasModule = new DisenoModasModule();
    });

    it('should create an instance', () => {
        expect(disenoModasModule).toBeTruthy();
    });
});
