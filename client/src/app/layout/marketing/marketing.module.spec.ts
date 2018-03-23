import { MarketingModule } from './marketing.module';

describe('MarketingModule', () => {
    let marketingModule: MarketingModule;

    beforeEach(() => {
        marketingModule = new MarketingModule();
    });

    it('should create an instance', () => {
        expect(marketingModule).toBeTruthy();
    });
});
