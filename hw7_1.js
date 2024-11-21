var guest_house = {
    rooms: "5",
    room_size: "25 m2",
    distance_to_sea: "1600 m",
    distance_to_center: "10 km",
    
    displayProperties() {
      for (const key in this) {
        if (typeof this[key] !== 'function') {
          console.log(key + ": " + this[key]);
        }
      }
    }
  };

guest_house.displayProperties();

guest_house.capacity = "15 people";

console.log("--------------------");
guest_house.displayProperties();