const puppeteer = require('puppeteer');

const config = require('../config.json');

const SELECTORS = {
  email: '[name=login][type=email]',
  password: '[name=password][type=password]',
  submit: 'button[type="submit"]',
};

const PAGES = {
  login: 'https://eu.wargaming.net/id/signin/',
  streams: config.streams,
};

(async () => {
  config.users.forEach((user) => {
    PAGES.streams.forEach(async (streamUrl) => {
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
      // Configure the navigation timeout
      await page.setDefaultNavigationTimeout(200000);
      await page.goto(PAGES.login);

      /**
       * Fill login form and submit
       */
      await page.waitForSelector(SELECTORS.email);
      await page.$eval(
        SELECTORS.email,
        (el, localUser) => {
          console.info('before close');
          el.value = localUser.login;
        },
        user,
      );
      await page.$eval(
        SELECTORS.password,
        (el, localUser) => {
          el.value = localUser.password;
        },
        user,
      );

      await page.click(SELECTORS.submit);
      await page.waitForNavigation({ waitUntil: 'networkidle2' });

      /**
       * Open stream url
       */
      await page.goto(streamUrl);

      console.info('Page launched!', user.email, streamUrl);
    });
  });
})();
