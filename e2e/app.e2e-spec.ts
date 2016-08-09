import { VaninPocPage } from './app.po';

describe('vanin-poc App', function() {
  let page: VaninPocPage;

  beforeEach(() => {
    page = new VaninPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
