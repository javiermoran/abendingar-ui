import { GurdgieffUiPage } from './app.po';

describe('gurdgieff-ui App', () => {
  let page: GurdgieffUiPage;

  beforeEach(() => {
    page = new GurdgieffUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
