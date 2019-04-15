export class Earthquake {
  city: string;
  latitude: number;
  longitude: number;
  magnitude: number;

  constructor(value: any = {}) {
    Object.assign(this, {
      city: value.city || null,
      latitude: value.latitude || null,
      longitude: value.longitude || null,
      magnitude: value.magnitude || null
    });
  }
}
