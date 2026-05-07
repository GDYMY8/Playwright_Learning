import { test, expect } from '@playwright/test';
import { herokuppUser } from '../data/herokuppuser';

test('User can log in with valid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', herokuppUser.username);
  await page.fill('#password', herokuppUser.password);

  await page.click('button[type="submit"]');

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});
