import { updateJSONFile } from "../commands/saveToJSON";

// Object containing a route handler for scraping a page
const scrapePage = {
    // Route path
    path: "/api/scrape",
    // HTTP method
    method: "post",
    // Route handler function
    handler: async (req, res) => {
        // Extracting the 'link' from the request body
        const { link } = req.body;
        // Regular expression to match 'duration' text
        const durationRegex = /duration/i;

        // Function to convert a string to title case
        function toTitleCase(str) {
            return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
                return match.toUpperCase();
            });
        }

        // Launching a Puppeteer browser instance
        const browser = await puppeteer.launch();
        // Opening a new page in the browser
        const page = await browser.newPage();
        // Navigating to the provided 'link'
        await page.goto(link);

        // Extracting text content from list items on the page
        const liText = await page.evaluate(() => {
            const liElements = document.querySelectorAll("ul > li");
            const liTextArray = Array.from(liElements).map(li => li.textContent.trim()).filter(text => text.length < 30);
            return liTextArray;
        });

        // Filtering out text containing 'duration'
        const fullDurationText = liText.filter(item => durationRegex.test(item));
        // Extracting the duration value
        const index = fullDurationText[0].indexOf(":");
        const duration = fullDurationText[0].slice(index + 2);

        // Extracting text content from 'h4' elements on the page
        const h4HeaderText = await page.evaluate(() => {
            const h4Elements = document.querySelectorAll("h4");
            const h4TextArray = Array.from(h4Elements).map(h4 => h4.textContent.trim());
            return h4TextArray;
        });

        // Extracting program certification (assumed to be the second 'h4' text)
        const certification = toTitleCase(h4HeaderText[1]);
        // Extracting school name (assumed to be the first 'h4' text)
        const school = h4HeaderText[0];

        // Extracting program name (assumed to be the first 'h2' text)
        const programName = await page.evaluate(() => {
            const h2Elements = document.querySelectorAll("h2");
            const h2TextArray = Array.from(h2Elements).map(h2 => h2.textContent.trim());
            return h2TextArray;
        });

        // Logging extracted data to console
        console.log("Duration: " + duration);
        console.log("Certification: " + certification);
        console.log("School: " + school);
        console.log("Program Name: " + programName);

        // Closing the Puppeteer browser instance
        await browser.close();

        // Calling the updateJSONFile function to update JSON file with extracted data
        updateJSONFile(school, programName, certification, duration);
    }
}

// Exporting the 'scrapePage' object as default
export default scrapePage;