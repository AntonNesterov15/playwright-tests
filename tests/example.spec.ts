import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('найти элемент по тексту на google', async ({ page }) => {
  await page.goto('https://www.google.com');
  const element = page.getByText('Google');
});

test('найти кнопку по роли на google', async ({ page }) => {
  await page.goto('https://www.google.com');
  const button = page.getByRole('button', { name: 'Поиск в Google' });
});

test('найти поле по placeholder на google', async ({ page }) => {
  await page.goto('https://www.google.com');
  const input = page.getByPlaceholder('Поиск в Google');
});

test('найти элемент по label на google', async ({ page }) => {
  await page.goto('https://www.google.com');
  const element = page.getByLabel('Поиск');
});

test('фильтровать кнопки по тексту на google', async ({ page }) => {
  await page.goto('https://www.google.com');
  const button = page.getByRole('button', { name: 'Submit' }).filter({ hasText: 'Save' });
});

test('найти элемент по id на google', async ({ page }) => {
  await page.goto('https://www.google.com');
  const element = page.locator('#logo');
});

test('найти элемент по классу на google', async ({ page }) => {
  await page.goto('https://www.google.com');
  const element = page.locator('.gb_1');
});

test('найти элемент по title на google', async ({ page }) => {
  await page.goto('https://www.google.com');
  const element = page.locator('[title="Google"]');
});

test('найти элемент по комбинации локаторов на google', async ({ page }) => {
  await page.goto('https://www.google.com');
  const element = page.locator('.gb_1').getByText('Gmail');
});

test('фильтровать текстовые поля по атрибуту на google', async ({ page }) => {
  await page.goto('https://www.google.com');
  const input = page.getByPlaceholder('Enter text').filter({ has: page.locator('[disabled]') });
});

test('клик по кнопке на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('ввод текста в поле на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByPlaceholder('Enter text').fill('Hello, World!');
});

test('наведение мыши на элемент на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByText('Hover me').hover();
});

test('двойной клик по элементу на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByText('Double Click').dblclick();
});

test('перетаскивание элемента на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByText('Drag me').dragTo(page.getByText('Drop here'));
});

test('выбор значения из выпадающего списка на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByLabel('Select an option').selectOption('Option 2');
});

test('установка флажка на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByLabel('I agree').check();
});

test('нажатие клавиши Enter на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByPlaceholder('Enter text').fill('Hello, World!');
  await page.keyboard.press('Enter');
});

test('скролл до элемента на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByText('Scroll to me').scrollIntoViewIfNeeded();
});

test('загрузка файла на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await page.getByLabel('Upload file').setInputFiles('path/to/file.txt');
});

test('проверить видимость элемента на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.getByText('Hello, World!')).toBeVisible();
});

test('проверить текст элемента на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('.title')).toHaveText('Welcome');
});

test('проверить атрибут элемента на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('#submit-button')).toHaveAttribute('disabled', '');
});

test('проверить количество элементов на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('.item')).toHaveCount(3);
});

test('проверить значение поля ввода на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.getByPlaceholder('Enter text')).toHaveValue('Hello, World!');
});

test('проверить состояние чекбокса на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.getByLabel('I agree')).toBeChecked();
});

test('проверить URL страницы на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveURL('https://example.com');
});

test('проверить заголовок страницы на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});

test('проверить отсутствие элемента на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.getByText('Not Found')).toBeHidden();
});

test('проверить класс элемента на example.com', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('#header')).toHaveClass('active');
});
// Инициализация проекта npm init playwright@lates
// Запуск тестов npx playwright test
// Открытие HTML отчета npx playwright show-report
