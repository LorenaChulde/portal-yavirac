import { PaginaSecundariaModule } from './pagina-secundaria.module';

describe('PaginaSecundariaModule', () => {
    let paginaSecundariaModule: PaginaSecundariaModule;

    beforeEach(() => {
        paginaSecundariaModule = new PaginaSecundariaModule();
    });

    it('should create an instance', () => {
        expect(paginaSecundariaModule).toBeTruthy();
    });
});
