import { AbcframeworkWebsitePage } from './app.po';

describe('abcframework-website App', () => {
  let page: AbcframeworkWebsitePage;

  beforeEach(() => {
    page = new AbcframeworkWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
