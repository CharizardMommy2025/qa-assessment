// Renee Arthur Synmax qa assessment




import { test, expect } from '@playwright/test';
 import todos from './fixtures/todos.json' assert { type: 'json' };// ← import the test data

test('user can add a new todo item', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const todoInput = await page.getByPlaceholder('What needs to be done');
  await todoInput.fill(todos.default); // ← use fixture data
  await todoInput.press('Enter');

  await expect(page.getByText(todos.default)).toBeVisible();
});

test('todo input is empty after submitting a task for Ming', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const todoInput = await page.getByPlaceholder('What needs to be done');
  await todoInput.fill(todos.personal); // ← use fixture data
  await todoInput.press('Enter');

  await expect(todoInput).toHaveValue('');
});
