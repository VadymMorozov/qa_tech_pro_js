function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;
    
    for (let i = 0; i < count; i++) {
      let randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  
      if (randomNum % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    let evenToOddPercentage;
    
    if (oddCount > 0) {
        evenToOddPercentage = (evenCount / oddCount) * 100;
    } else {
        evenToOddPercentage = 0;
    }
  
    console.log("Количество сгенерированных чисел: " + count);
    console.log("Количество парных чисел: " + evenCount);
    console.log("Количество непарных чисел: " + oddCount);
    console.log("Процент парных к непарным: " + evenToOddPercentage.toFixed(2) + "%");
  }

  checkProbabilityTheory(10)