import { test, expect } from '@playwright/test';
import { herokuppUser } from '../data/herokuppuser';

test('Login fails when username contains leading or trailing spaces', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page
    .getByLabel('Username')
    .fill(`  ${herokuppUser.username}  `);
  await page.getByLabel('Password').fill(herokuppUser.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/login/);
  await expect(page.getByText('Your username is invalid')).toBeVisible();
});
