import { test, expect } from '@playwright/test';

test('example.com page loads', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});