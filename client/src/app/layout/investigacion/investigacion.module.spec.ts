import { InvestigacionModule } from './investigacion.module';

describe('InvestigacionModule', () => {
    let investigacionModule: InvestigacionModule;

    beforeEach(() => {
        investigacionModule = new InvestigacionModule();
    });

    it('should create an instance', () => {
        expect(investigacionModule).toBeTruthy();
    });
});
