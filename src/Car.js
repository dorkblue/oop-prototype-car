function Car (make, model, year, color, seats, passengers) {
  this.make = make
  this.model = model
  this.year = year
  this.color = color
  this.seats = seats
  this.passengers = passengers || []
  // TODO: add color, seats here

  this.running = false
  this.owner = 'manufacturer'
  this.previousOwners = []
}

Car.prototype.sell = function (newOwner) {
  this.previousOwners.push(this.owner)
  this.owner = newOwner
}

Car.prototype.paint = function (newColor) {
  this.color = newColor
}

Car.prototype.start = function () {
  this.running = true
}

Car.prototype.off = function () {
  this.running = false
}

Car.prototype.driveTo = function (destination) {
  return (this.running === true) ? true : false
}

Car.prototype.park = function () {
  return (this.running !== true) ? true : false
}

Car.prototype.pickUp = function (passenger) {
  if (this.running && (this.passengers.length + 1) < this.seats) {
      this.passengers.push(passenger)
      return true
  } else {
    return false
  }
}

Car.prototype.dropOff = function (passenger) {
  if (this.running === true) {
    if (this.passengers.indexOf(passenger) < 0) {
      return false
    }
    this.passengers.splice(this.passengers.indexOf(passenger), 1)
    return true
  } else {
    return false
  }
}

Car.prototype.passengerCount = function () {
  return this.passengers.length
}

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car
