import { test, expect } from '@playwright/test';

const localEnv = 'localhost:3000/'
test.beforeEach(async ({ page }) => {
  await page.goto(localEnv);
});

test.describe('Home page', () => {
  test('should verify header elements', async ({ page }) => {

    await expect(page.getByText('Cedaring.art')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Artwork' })).toBeVisible();
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
