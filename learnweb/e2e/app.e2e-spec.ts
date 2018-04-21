import { LearnwebPage } from './app.po';

describe('learnweb App', () => {
  let page: LearnwebPage;

  beforeEach(() => {
    page = new LearnwebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
