import { test, expect, chromium, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly paralaxHeader: Locator;
  readonly pageNavList: Locator;
  readonly infoGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.locator('a', { hasText: 'Cedaring.Art' });
    this.paralaxHeader = page.locator('nav', { hasText: 'Installation' });
    this.pageNavList = page.locator('li', { hasText: 'Guides' }).locator('a', { hasText: 'Page Object Model' });
    this.infoGrid = page.locator('');
  }
}

const localEnv = 'localhost:3000/'
test.beforeEach(async () => {
  // await page.goto(localEnv);
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto(localEnv)
});

test.describe('Home page', () => {
  test('should verify header elements', async ({ page }) => {

    await expect(page.getByText('Cedaring.art')).toBeVisible();
    await page.getByRole('listitem').filter({ hasText: 'Artwork'}).click()
    await expect(page.getByRole('link', { name: 'Writing' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Climbing' })).toBeVisible();
  });

  // test('should verify loading of threeJS scene', async ({ page }) => {
    
  // });

  // test('should verify visibility of info sections', async ({ page }) => {
    
  // });

  // test('should verify visibility of images', async ({ page }) => {
    
  // });

  // test('should check the footer social links', async ({ page }) => {

  // });
});
