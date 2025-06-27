// Renee Arthur Synmax qa assessment

import { test, expect } from '@playwright/test';

test('user can add a new todo item', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const todoInput = await page.getByPlaceholder('What needs to be done');
  await todoInput.fill('Buy milk');
  await todoInput.press('Enter');

  await expect(page.getByText('Buy milk')).toBeVisible();
});

test('todo input is empty after submitting a task for Ming', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const todoInput = await page.getByPlaceholder('What needs to be done');
  await todoInput.fill("Clean Ming's kitty litter");
  await todoInput.press('Enter');

  await expect(todoInput).toHaveValue('');
});
