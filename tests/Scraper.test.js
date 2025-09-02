import { scrapeHackerNews } from '../scraper.js';

describe("Hacker News Scraper", () => {
    test("should scrape top 30 articles", async () => {
        const articles = await scrapeHackerNews();
        expect(articles.length).toBe(30);
        articles.forEach(article => {
            expect(article).toHaveProperty('rank');
            expect(article).toHaveProperty('title');
            expect(article).toHaveProperty('comments');
            expect(article).toHaveProperty('points');
        });
    });

    test("should have correct data types", async () => {
        const articles = await scrapeHackerNews();
        articles.forEach(article => {
            expect(typeof article.rank).toBe('number');
            expect(typeof article.title).toBe('string');
            expect(typeof article.comments).toBe('number');
            expect(typeof article.points).toBe('number');
        });
    });
});