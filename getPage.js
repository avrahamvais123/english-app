const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: false,  // change this to false
    });
    const page = await browser.newPage();  // יוצרים דף חדש בדפדפן

    await page.setViewport({ width: 800, height: 600 }); // Change the window size

    browser.on('targetcreated', async (target) => {
        const newPage = await target.page();
        if (newPage) {
            await newPage.bringToFront();
        }
    });

    await page.goto('https://translate.google.co.il/?hl=iw', { timeout: 60000 });  // טיימאאוט של 60 שניות
    await page.waitForSelector('.er8xn', { timeout: 200000 });  // ממתין עד שהאלמנט מוכן, עם טיימאאוט של 60 שניות

    // מזינים את המילה "תפוח" לתוך שדה החיפוש
    await page.type('.er8xn', 'בתיה שלי אני אוהב אותך');

    // כאן אנחנו ממתינים קצת זמן עד שהתרגום מתבצע.
    // אפשר לשפר את זה על ידי המתנה עד שהאלמנט של התרגום משתנה.
    await page.waitForTimeout(2000);

    // מאגרים את התוצאה מהשדה של התרגום
    try {
        const translation = await page.evaluate(() => {
            const engElement = document.querySelector('.ryNqvb');
            return engElement ? engElement.textContent : 'Element not found';
        });

        console.log(translation); // print the translation
    } catch (error) {
        console.error('Error:', error);  // print the error
    }

    // Wait for the button to be present in the page
    await page.waitForSelector('[aria-label="האזנה לתרגום"]', { timeout: 3000 });

    // Click on the button
    await page.click('[aria-label="האזנה לתרגום"]');

    // Wait for a certain amount of time for the audio to play
    await page.waitForTimeout(3000);  // Adjust this value as needed

    await browser.close();  // סוגרים את הדפדפן
})();
