import { test, expect } from '@playwright/test';

test('Login fails when username and password are empty', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/login/);
  await expect(page.getByText('Your username is invalid')).toBeVisible();
});
