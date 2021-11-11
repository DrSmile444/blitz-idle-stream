const puppeteer = require('puppeteer');
require('dotenv').config();

const LOCAL_ENV = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
  streamUrl: process.env.STREAM_URL,
};

const SELECTORS = {
  email: '[name=login][type=email]',
  password: '[name=password][type=password]',
  submit: 'button[type="submit"]',
};

const PAGES = {
  login: 'https://ru.wargaming.net/id/signin/',
  stream: LOCAL_ENV.streamUrl,
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
  await page.$eval(
    SELECTORS.email,
    (el, local) => {
      console.info('before close');
      el.value = local.email;
    },
    LOCAL_ENV,
  );
  await page.$eval(
    SELECTORS.password,
    (el, local) => {
      el.value = local.password;
    },
    LOCAL_ENV,
  );

  await page.click(SELECTORS.submit);
  await page.waitForNavigation({ waitUntil: 'networkidle2' });

  await page.goto(PAGES.stream);

  console.info('before close');

  // await browser.close();
})();
