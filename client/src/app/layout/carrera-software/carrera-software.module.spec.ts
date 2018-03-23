import { CarreraSoftwareModule } from './carrera-software.module';

describe('CarreraSoftwareModule', () => {
    let carreraSoftwareModule: CarreraSoftwareModule;

    beforeEach(() => {
        carreraSoftwareModule = new CarreraSoftwareModule();
    });

    it('should create an instance', () => {
        expect(carreraSoftwareModule).toBeTruthy();
    });
});
