import express from 'express';
import { scrapeHackerNews } from "./scraper.js";
import { filterLongTitles, filterShortTitles } from "./utils.js";

const app = express();
app.use(express.static('frontend'));
const port = 3000;

app.get("/api/all", async (_req, res) => {
    const items = await scrapeHackerNews();
    res.json(items);
});

app.get("/api/filter/long_title", async (req, res) => {
    const items = await scrapeHackerNews();
    res.json(filterLongTitles(items));
})

app.get("/api/filter/short_title", async (req, res) => {
    const items = await scrapeHackerNews();
    res.json(filterShortTitles(items));
})


app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
  });


export default app;

