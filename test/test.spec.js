describe("First Testing lot", () => {
    let page;
    before(async () => {
        // browser = await puppeteer.launch(
        //     {
        //         headless: false,
        //         slowMo: 250,
        //     }
        // )
        page = await browser.newPage()
        await page.goto('https://google.com', { waitUntil: 'load' })
        page.setViewport({ width: 1920, height: 1080 })
    })

    after(async () => {
        await browser.close()
    })

    it("Should run right here", async () => {

    })
})


