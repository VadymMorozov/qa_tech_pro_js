var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
  
    price() {
      let total = 0;
      for (const key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
          total += parseFloat(this[key]);
        }
      }
      console.log(total + " грн");
    },
  
    minPrice() {
      let min = null;
      for (const key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
          const value = parseFloat(this[key]);
          if (min === null || value < min) {
            min = value;
          }
        }
      }
      console.log(min + " грн");
    },
  
    maxPrice() {
      let max = null;
      for (const key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
          const value = parseFloat(this[key]);
          if (max === null || value > max) {
            max = value;
          }
        }
      }
      console.log(max + " грн");
    }
};

services.maxPrice();
services.minPrice();
services.price();
services['Розбити скло'] = "200 грн";
console.log("--------------------");
services.maxPrice();
services.minPrice();
services.price();