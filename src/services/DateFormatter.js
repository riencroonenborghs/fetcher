export default class DateFormatter {
  format(string) {
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      hour: 'numeric',
      minute: 'numeric',
      day: "2-digit"
    }).format(new Date(string))
  }
}