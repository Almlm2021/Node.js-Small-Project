import { filterLongTitles, filterShortTitles } from '../utils.js';

describe('Filter Functions', () => {
    const mockData = [
        { title: 'Short title', comments: 10, points: 5 },
        { title: 'This is a title longer than 5 words', comments: 20, points: 15 },
        { title: 'Another short title', comments: 5, points: 25 }
    ];

    test('filterLongTitles should return titles with more than 5 words', () => {
        const result = filterLongTitles(mockData);
        expect(result.length).toBe(1);
        expect(result[0].title).toBe('This is a title longer than 5 words');
    });

    test('filterShortTitles should return titles with 5 or fewer words', () => {
        const result = filterShortTitles(mockData);
        expect(result.length).toBe(2);
    });
});