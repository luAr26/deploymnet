import { DeploymnetPage } from './app.po';

describe('deploymnet App', function() {
  let page: DeploymnetPage;

  beforeEach(() => {
    page = new DeploymnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
