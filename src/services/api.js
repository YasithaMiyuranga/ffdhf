const BASE_URL = 'http://localhost:5000/api';

export const api = {
  // Fetch device logs by type (e.g. 'call', 'sms', 'keylogger')
  getLogs: async (type) => {
    try {
      const url = type ? `${BASE_URL}/device/data/logs?type=${type}` : `${BASE_URL}/device/data/logs`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.warn(`Failed to fetch logs for type ${type}:`, error);
      return null;
    }
  },

  // Fetch device locations history
  getLocations: async () => {
    try {
      const response = await fetch(`${BASE_URL}/device/data/locations`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.warn('Failed to fetch locations:', error);
      return null;
    }
  }
};
