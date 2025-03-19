// Car Constructor Function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar Constructor Function (inherits from Car)
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model);  // Call the Car constructor to initialize make and model
  this.topSpeed = topSpeed;  // Add the topSpeed property for SportsCar
}

// Set up inheritance from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
