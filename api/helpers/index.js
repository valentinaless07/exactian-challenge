export const diffHours = (date1, date2) => {
    let difference = (date1 - date2) / (1000 * 60 * 60 );

    return Math.floor(difference);
}
