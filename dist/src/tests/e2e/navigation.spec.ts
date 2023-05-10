import { test, expect } from '@playwright/test';

const localEnv = 'localhost:3000/'
test.beforeEach(async ({ page }) => {
  await page.goto(localEnv);
});

test.describe('Page navigation', () => {
  test('should transition through available pages', async ({ page }) => {

    await expect(page.getByRole('listitem').filter({ hasText: 'Artwork'})).toBeVisible()
    await page.getByRole('listitem').filter({ hasText: 'Artwork'}).click()
    await expect(page.getByRole('heading', {name: '3D artwork created in virtual reality with OpenBrush'})).toBeVisible()
    await page.getByRole('listitem').filter({ hasText: 'Writing'}).click()
    await expect(page.getByRole('heading', {name: 'Exploritory writings about technology and the future'})).toBeVisible()
    await page.getByRole('listitem').filter({ hasText: 'Climbing'}).click()
    await expect(page.getByRole('heading', {name: 'Using GPS and elevation data to create 3D explorable layouts of mountain areas and climbing destinations'})).toBeVisible()
    await page.getByRole('heading', {name: 'Cedaring.Art'}).click()
  });
});
