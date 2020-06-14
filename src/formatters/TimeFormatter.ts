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
}
