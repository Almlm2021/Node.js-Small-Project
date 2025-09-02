import axios from "axios";
import * as cheerio from "cheerio";

const site = "https://news.ycombinator.com/";

export async function scrapeHackerNews() {
    const response = await axios.get(site);
    const html = response.data;
    const $ = cheerio.load(html);

    const article = [];

    $('tr.athing').each((index, el) => {
        if (index >= 30) return false;

        const title = $(el).find('.titleline > a').text().trim();
        const rank = parseInt($(el).find('.rank').text(), 10) || null;


        let commentsNumb = 0;
        const comments = $(el).next().find('.subtext').find('a').last().text().trim();
        if (comments.endsWith('comments') || comments.endsWith('comment')) {
            const n = parseInt(comments.split(' ')[0], 10);
            if (!isNaN(n)) {
                commentsNumb = n;
            }
        }
        let pointsNumb = 0;
        const points = $(el).next().find('.subtext').find('.score').first().text();
        if (points.endsWith('point') || points.endsWith('points')) {
            const n = parseInt(points.split(' ')[0], 10);
            if (!isNaN(n)) {
                pointsNumb = n;
            }
        }
        article.push({
            rank: rank,
            title,
            comments: commentsNumb,
            points: pointsNumb
        });

    });
    return article;

}
export default scrapeHackerNews;