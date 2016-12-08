import { DataEngineWebPage } from './app.po';

describe('data-engine-web App', function() {
  let page: DataEngineWebPage;

  beforeEach(() => {
    page = new DataEngineWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
