import { test, expect } from '@playwright/test';
import { herokuppUser } from '../data/herokuppuser';

test('User can log in with valid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Username').fill(herokuppUser.username);
  await page.getByLabel('Password').fill(herokuppUser.password);
  await page.getByRole('button', { name: 'Login' }).click();
  
  await expect(page).toHaveURL(/secure/);
  await expect(page.getByText('You logged into a secure area')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});
