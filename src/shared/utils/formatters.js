export function name(first, last) {
    return `${first}${first && last ? ' ': null}${last}`
}