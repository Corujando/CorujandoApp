export class DistanceFormatter {
  public static formatDistance = (numberOfKm: number) => {
    return `${numberOfKm ? numberOfKm.toFixed(2) : 0} km`
  }
}
