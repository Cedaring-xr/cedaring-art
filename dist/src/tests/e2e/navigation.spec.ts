import { test, expect } from '@playwright/test';

const localEnv = 'localhost:3000/'
test.beforeEach(async ({ page }) => {
  await page.goto(localEnv);
});

test.describe('Page navigation', () => {
  test('should transition through available pages', async ({ page }) => {

    await expect(page.getByText('Cedaring.art')).toBeVisible();
    await page.getByRole('link', { name: 'Artwork' }).click();
  });
});
