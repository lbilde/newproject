import { NewproductPage } from './app.po';

describe('newproduct App', function() {
  let page: NewproductPage;

  beforeEach(() => {
    page = new NewproductPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
