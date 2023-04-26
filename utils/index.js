export const sortByDate = (a, b) => {
    return new Date(b.matter.date) - new Date(a.matter.date)
}