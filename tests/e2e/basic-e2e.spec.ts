import { test, expect } from '@playwright/test'

test.describe('Onni Basic E2E', () => {
  test('User can register and see dashboard', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.click('text=Register Now')

    await page.fill('input[name="email"]', 'testuser@onni.com')
    await page.fill('input[name="password"]', 'TestPassword123!')
    await page.click('button[type="submit"]')

    // Expect to land on the dashboard
    await expect(page).toHaveURL('http://localhost:3000/dashboard')
    await expect(page.locator('text=Welcome to Onni')).toBeVisible()
  })
})
