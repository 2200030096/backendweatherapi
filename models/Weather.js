const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  // Timestamp for the data point (required)
  timestamp: {
    type: Date,
    required: true,
  },
  // Temperature in degrees Celsius (required)
  temperature: {
    type: Number,
    required: true,
  },
  // Humidity as a percentage (required)
  humidity: {
    type: Number,
    required: true,
  },
  // Wind speed in kilometers per hour (kph) (optional)
  windSpeed: {
    type: Number,
  },
  // Wind direction in degrees (optional)
  windDirection: {
    type: Number,
  },
  // Precipitation amount in millimeters (mm) (optional)
  precipitation: {
    type: Number,
  },
  // UV index (optional)
  uvIndex: {
    type: Number,
  },
  // Air quality index (optional)
  airQuality: {
    type: Number,
  },
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;