import { test, expect } from '@playwright/test';

test('Gmail homepage loads and shows sign-in options', async ({ page }) => {
  // Open Gmail
  await page.goto('https://mail.google.com');

  // Verify Gmail branding
  await expect(page).toHaveTitle(/Gmail/);

  // Verify key text appears
  await expect(page.getByText('Sign in')).toBeVisible();

  // Verify email input field exists
  await expect(page.getByLabel('Email or phone')).toBeVisible();
});
