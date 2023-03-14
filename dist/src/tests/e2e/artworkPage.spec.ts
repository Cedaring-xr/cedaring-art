import { test, expect, chromium, Locator, Page } from '@playwright/test';

export class ArtworkPage {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly introDescription: Locator;
  readonly artworkList: Locator;
  readonly portalModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.locator('a', { hasText: 'Cedaring.Art' });
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

test.describe('Artwork Page', () => {
  test('should verify the list of artwork cards', async ({ page }) => {

    await expect(page.getByText('Cedaring.art')).toBeVisible();
    await page.getByRole('listitem').filter({ hasText: 'Artwork'}).click()
    await expect(page.getByRole('link', { name: 'Writing' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Climbing' })).toBeVisible();
  });

  // test('should verify loading of threeJS scene', async ({ page }) => {
    
  // });

  // test('should verify loading of video scene', async ({ page }) => {
    
  // });

  // test('should verify loading of threeJS scene', async ({ page }) => {
    
  // });
});
