import { test, expect } from '@playwright/test'


const localEnv = 'localhost:3000/'
test.beforeEach(async ({ page }) => {
  await page.goto(localEnv)
});

test.describe('Climbing Page', () => {
  test('should verify the section designated for each destination', async ({ page }) => {

    // count number of sections
    await expect(page.getByRole('heading', {name: 'Cedaring.Art'})).toBeVisible()
    await page.getByRole('listitem').filter({ hasText: 'Climbing'}).click()

    await expect(page.getByRole('heading', {name: /[A-Z][a-z]*/})).toHaveCount(8)


    // open first section
    // verify loading spinner
  })
})
