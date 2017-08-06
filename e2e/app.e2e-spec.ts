import { HendrikNgCliPage } from './app.po';

describe('hendrik-ng-cli App', () => {
  let page: HendrikNgCliPage;

  beforeEach(() => {
    page = new HendrikNgCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
