export const cutText = (text, from, to) => {
  if (text.length > to && text.length > 5) {
    return text.slice(from, to) + '...'
  } else if (text.length <= 5) {
    return text
  } else {
    return text + '...'
  }
}
