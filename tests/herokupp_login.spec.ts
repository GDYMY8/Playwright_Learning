import { test, expect } from '@playwright/test';
import { herokuppuser } from '../data/herokuppuser';

test('User can log in with valid credentials', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Username').fill(herokuppuser.username);
  await page.getByLabel('Password').fill(herokuppuser.password);
  await page.getByRole('button', { name: 'Login' }).click();
  
  await expect(page).toHaveURL(/secure/);
  await expect(page.getByText('You logged into a secure area')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});
