function pow(number, stepen) {
    let result = 1;
  
    while (stepen > 0) {
      result *= number;
      stepen--;
    }
  
    return result;
  }

  console.log(pow(2,3)); 