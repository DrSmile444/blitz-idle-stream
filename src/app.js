const puppeteer = require('puppeteer');

const SELECTORS = {
  email: '[name=login][type=email]',
  password: '[name=password][type=password]',
  submit: 'button[type="submit"]',
};

const PAGES = {
  login: 'https://ru.wargaming.net/id/signin/',
};

(async () => {
  /**
   * Start chrome
   */
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });

  /**
   * Open login
   */
  const page = await browser.newPage();
  await page.goto(PAGES.login);

  /**
   * Fill login form and submit
   */
  await page.waitForSelector(SELECTORS.email);
  await page.$eval(SELECTORS.email, (el) => {
    el.value = 'test@example.com';
  });
  await page.$eval(SELECTORS.password, (el) => {
    el.value = 'test@example.com';
  });
  await page.click(SELECTORS.submit);

  console.info('before close');

  await browser.close();
})();
