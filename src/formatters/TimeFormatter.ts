export class TimeFormatter {
  public static formatNumberOfSecondsIntoTime = (seconds: number) => {
    const countingTime = {
      hours: Math.floor((seconds * 60 * 60) % 24),
      minutes: Math.floor((seconds / 60) % 60),
      seconds: Math.floor(seconds % 60),
    }

    return `${TimeFormatter.formatNumber(countingTime.hours)}:${TimeFormatter.formatNumber(
      countingTime.minutes,
    )}:${TimeFormatter.formatNumber(countingTime.seconds)}`
  }

  static formatNumber = (number: number) => {
    return ('0' + number).slice(-2)
  }

  private static toStringZ = (value: number): string => {
    return String(value).padStart(2, '0')
  }

  private static getFormattedDate = (date: Date): string => {
    return (
      TimeFormatter.toStringZ(date.getDay()) +
      '/' +
      TimeFormatter.toStringZ(date.getMonth()) +
      '/' +
      TimeFormatter.toStringZ(date.getFullYear())
    )
  }

  static getFormattedDateFromTimestamp = (timestamp?: firebase.firestore.Timestamp): string => {
    return timestamp ? TimeFormatter.getFormattedDate(timestamp.toDate()) : "--/--/--"
  }

  private static getFormattedTime(date: Date): string {
    return TimeFormatter.toStringZ(date.getHours()) + 'h'
    + TimeFormatter.toStringZ(date.getMinutes())
  }

  static getFormatedTimeFromTimestamp = (timestamp?: firebase.firestore.Timestamp): string => {
    return timestamp ? TimeFormatter.getFormattedTime(timestamp.toDate()) : '--h--'
  }

  static getFormatedFullDate = (timestamp?: firebase.firestore.Timestamp): string => {
    return (
      TimeFormatter.getFormattedDateFromTimestamp(timestamp) +
      ' às ' +
      TimeFormatter.getFormatedTimeFromTimestamp(timestamp)
    )
  }
}
