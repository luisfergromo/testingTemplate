describe("First Testing lot", () => {
    let page;
    before(async () => {
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


