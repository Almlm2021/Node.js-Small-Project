export function filterLongTitles(titles) {
    const longTitles = [];
    for(let i=0;i<titles.length;i++){
        const item= titles[i];
        const titleCleaned = item.title.replace(/[^\w\s']/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
        if (titleCleaned.length > 5) {
            longTitles.push(item);
        }
    }
    longTitles.sort((a, b) => b.comments - a.comments);

    return longTitles;
}

export function filterShortTitles(titles) {
    const shortTitles = [];
    for(let i=0; i<titles.length;i++){
        const item= titles[i];
        const titleCleaned = item.title.replace(/[^\w\s']/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
        if (titleCleaned.length <= 5) {
            shortTitles.push(item);
        }
    }
    shortTitles.sort((a, b) => b.points - a.points);
    return shortTitles;
}

