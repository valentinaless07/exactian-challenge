export const getFullDate = (entryDate) => {
    let date = new Date(entryDate)
    let hours = date.getHours()
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

    return `${date.toLocaleDateString()} ${hours}:${minutes}`

}