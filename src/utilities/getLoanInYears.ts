export const getLoanInYears = (months: number) =>
    `${(months / 12) | 0} ${months > 23 ? 'years' : 'year'} ${Math.floor(months % 12) === 0 ? '' : `and ${Math.floor(months % 12)} ${Math.floor(months % 12) === 1 ? 'month' : 'months'}`}`;
