import { test, expect } from '@playwright/test';

test('Invalid login shows error message', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('button[type="submit"]');

  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});
