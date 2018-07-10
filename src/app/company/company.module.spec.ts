import { CompanyModule } from './company.module';

describe('BusModule', () => {
  let companyModule: CompanyModule;

  beforeEach(() => {
    companyModule = new CompanyModule();
  });

  it('should create an instance', () => {
    expect(CompanyModule).toBeTruthy();
  });
});
