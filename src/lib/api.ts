const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export interface Attraction {
  id: number;
  name: string;
  region: {
    id: number;
    name: string;
  };
  latitude: number;
  longitude: number;
  altitude_meters: number;
  difficulty: string;
  description: string;
  nearest_airport: string;
  is_verified: boolean;
}

export interface Weather {
  temperature_c: number;
  condition: string;
  wind_speed_kmh: number;
  rain_mm: number;
  updated_at: string;
}

export const api = {
  async getAttractions() {
    const res = await fetch(`${API_URL}/attractions/`);
    if (!res.ok) throw new Error('Failed to fetch attractions');
    return res.json();
  },

  async getAttraction(id: number) {
    const res = await fetch(`${API_URL}/attractions/${id}/`);
    if (!res.ok) throw new Error('Failed to fetch attraction');
    return res.json();
  },

  async getAttractionWeather(id: number) {
    const res = await fetch(`${API_URL}/attractions/${id}/weather/`);
    if (!res.ok) throw new Error('Failed to fetch weather');
    return res.json();
  },

  async getRegions() {
    const res = await fetch(`${API_URL}/regions/`);
    if (!res.ok) throw new Error('Failed to fetch regions');
    return res.json();
  },
};
