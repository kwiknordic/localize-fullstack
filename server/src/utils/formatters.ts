export const formatLocations = new Intl.ListFormat('sv', { style: 'long', type: 'disjunction' });

type DateType = Date | string

export function formatDates(date: DateType = new Date()) {
  return new Date(date).toLocaleString('sv-SE', { dateStyle: "long"})
  // use options and send back an object with date AND time
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options
}