import { test, expect } from '@playwright/test'


const localEnv = 'localhost:3000/'
test.beforeEach(async ({ page }) => {
  await page.goto(localEnv)
});

test.describe('Writing Page', () => {
  test('should verify content on the writing page', async ({ page }) => {

    await expect(page.getByRole('heading', {name: 'Cedaring.Art'})).toBeVisible()
    await page.getByRole('listitem').filter({ hasText: 'Writing'}).click()

    await expect(page.getByRole('heading', {name: /[A-Z][a-z]*/})).toHaveCount(7)

    
    
  })
})
