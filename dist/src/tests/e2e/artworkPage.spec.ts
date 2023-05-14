import { test, expect } from '@playwright/test';


const localEnv = 'localhost:3000/'
test.beforeEach(async ({ page }) => {
  await page.goto(localEnv);
});

test.describe('Artwork Page', () => {
  test('should verify the list of artwork cards', async ({ page }) => {

    await expect(page.getByRole('heading', {name: 'Cedaring.Art'})).toBeVisible()
    await page.getByRole('listitem').filter({ hasText: 'Artwork'}).click()
    await expect(page.getByRole('link', { name: 'Writing' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Climbing' })).toBeVisible()
    await expect(page.getByRole('heading', {name: '3D artwork created in virtual reality with OpenBrush'})).toBeVisible()
  });

  // test('should verify loading of threeJS scene', async ({ page }) => {
    
  // });

  // test('should verify loading of video scene', async ({ page }) => {
    
  // });

  // test('should verify loading of threeJS scene', async ({ page }) => {
    
  // });
});
