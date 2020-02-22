/* Alter code below this line */
class Thermostat  {
  constructor(temperature) {
    this._temperature = temperature;
  }
  // getter
  get temperature() {
    return this._temperature = (5/9) * (this._temperature - 32);
  }
  // setter
  set temperature(updatedTemperature) {
    this._temperature = updatedTemperature;
  }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
