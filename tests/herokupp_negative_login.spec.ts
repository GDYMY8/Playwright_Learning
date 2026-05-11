import { test, expect } from '@playwright/test';
import { herokuppInvalidUser } from '../data/herokuppInvalidUser';

test('Invalid login shows error message', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill('invalidUser');
  await page.getByLabel('Password').fill(herokuppUser.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/login/);
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});
