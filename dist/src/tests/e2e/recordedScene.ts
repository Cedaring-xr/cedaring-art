import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Climbing' }).click();
  await page.getByRole('button', { name: 'View' }).click();
  await page.getByRole('heading', { name: 'Needle Rock' }).click();
  await page.locator('canvas').click({
    position: {
      x: 830,
      y: 238
    }
  });
  await page.getByRole('heading', { name: 'Scroll' }).click();
  await page.locator('div').filter({ hasText: 'Scroll' }).locator('svg').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('heading', { name: 'Noddle Head North' }).click();
  await page.getByText('south platte').click();
  await page.getByRole('link', { name: 'Cedaring.Art' }).click();
});