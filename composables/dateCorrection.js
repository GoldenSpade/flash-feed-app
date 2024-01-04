export const dateCorrection = date =>
  date.replace('T', ', ').replace('Z', '').split(',')
