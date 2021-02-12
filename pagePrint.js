const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://g1.globo.com');
    await page.screenshot({path: 'print.png'});
  
    await browser.close();
  })();

