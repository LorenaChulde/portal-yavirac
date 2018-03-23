import { CulinarioModule } from './culinario.module';

describe('CulinarioModule', () => {
    let culinarioModule: CulinarioModule;

    beforeEach(() => {
        culinarioModule = new CulinarioModule();
    });

    it('should create an instance', () => {
        expect(culinarioModule).toBeTruthy();
    });
});
