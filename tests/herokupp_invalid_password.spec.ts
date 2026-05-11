import { test, expect } from '@playwright/test';
import { herokuppinvaliduser } from '../data/herokuppinvaliduser';

test('Login fails with invalid password', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Username').fill(herokuppinvaliduser.username);
  await page.getByLabel('Password').fill('WrongPassword');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/login/);
  await expect(page.getByText('Your password is invalid')).toBeVisible();

});
