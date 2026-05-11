import { test, expect } from '@playwright/test';
import path from 'path';

test('File upload works successfully', async ({ page }) => {
  // Navigate using baseURL
  await page.goto('/upload');

  // Resolve file path
  const filePath = path.resolve(__dirname, '../data/sample.txt');

  // Upload the file
  await page.setInputFiles('#file-upload', filePath);

  // Click upload button
  await page.click('#file-submit');

  // Assertions
  await expect(page.locator('h3')).toHaveText('File Uploaded!');
  await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');
});
