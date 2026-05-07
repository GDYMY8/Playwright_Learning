import { test, expect } from '@playwright/test';
import { herokuppInvalidUser } from '../data/herokuppInvalidUser';

test('Invalid login shows error message', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', herokuppInvalidUser.username);
  await page.fill('#password', herokuppInvalidUser.password);
  await page.click('button[type="submit"]');

  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});
