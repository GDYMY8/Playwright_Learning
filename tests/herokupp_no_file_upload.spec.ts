import { test, expect } from '@playwright/test';

test('Upload without selecting a file shows no success message', async ({ page }) => {
  await page.goto('/upload');

  // Click upload without choosing a file
  await page.click('#file-submit');

  // Assert we are NOT on success page
  await expect(page.locator('h3')).not.toHaveText('File Uploaded!');

  // Assert we are still on upload page
  await expect(page).toHaveURL(/\/upload/);
});
