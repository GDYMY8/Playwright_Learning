import { test, expect } from '@playwright/test';

test('Home page loads', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com');
  await expect(page).toHaveTitle('The Internet');
});
