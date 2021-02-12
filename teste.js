const puppeteer = require('puppeteer');

  const getInfo = async () => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto('https://google.com');
    
    const info = await page.evaluate(()=>{
      return{
        title: document.title
      }
    })
    console.log(info)

    await browser.close()
    
  }
  getInfo()