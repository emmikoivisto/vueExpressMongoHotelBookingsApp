use bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Harrison",
    email: "hbooth@cc.com",
    checked_in: false
  },
  {
    name: "Emmi",
    email: "Emmi@cc.com",
    checked_in: true
  },
  {
    name: "Andrew",
    email: "AC@cc.com",
    checked_in: true
  }
])
