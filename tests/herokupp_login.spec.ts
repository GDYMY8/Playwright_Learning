import { test, expect } from '@playwright/test';

test('User can log in with valid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});
