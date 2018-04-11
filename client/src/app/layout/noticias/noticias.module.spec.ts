import { NoticiasModule } from './noticias.module';

describe('NoticiasModule', () => {
    let noticiasModule: NoticiasModule;

    beforeEach(() => {
        noticiasModule = new NoticiasModule();
    });

    it('should create an instance', () => {
        expect(noticiasModule).toBeTruthy();
    });
});
