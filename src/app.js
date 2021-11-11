const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  await page.goto('https://ru.wargaming.net/id/signin/');

  await page.waitForSelector('[name=login][type=email]');

  try {
    await page.$eval('[name=login][type=email]', (el) => {
      el.value = 'test@example.com';
    });
    await page.$eval('[name=password][type=password]', (el) => {
      el.value = 'test@example.com';
    });
  } catch (e) {
    console.error(e);
  }

  console.info('before close');

  await browser.close();
})();
