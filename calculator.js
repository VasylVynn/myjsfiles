    const
      range1 = document.getElementByClassName('range type-1'),
      tooltip1 = document.getElementByClassName('tooltip type-1'),
      price1 = document.getElementByClassName('price type-1'),

      
      
      setValue = () => {
        const
        newValue = Number((range1.value - range1.min) * 100 / (range1.max - range1.min)),
        newPosition = 16 - (newValue * 0.32);
        tooltip1.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
      };
      
    document.addEventListener("DOMContentLoaded", setValue);
    range1.addEventListener('input', setValue);
    
    let customers1 = 0;

		
    const setRange = (value) => {
      if (range1.value <= 33333.3333) {
        $(".range type-1").attr('step', 666.666667);
        customers1 = Math.round(value / 666.666667 * 100)

      } else if ((range1.value > 33333.3333) && (range1.value < 66666.6666)) {
        $(".range type-1").attr('step', 740.74074);
                  customers1 =  Math.round(5000 + (value - 33333.3333) / 740.74074 * 1000)

      } else {
        $(".range type-1").attr('step', 6666.66666);
                  customers1 = Math.round(50000 + (value - 66666.6666) / 6666.66666 * 10000)

      }
    }

    const Calculate = () => {

      let baseValue = 1000;
      let userOffset = 1000;
      let pricePerUser = 0.5;
      let finalPrice = 1000;


      if ((customers1 > 5000) && (customers1 <= 50000)) {
        baseValue = 3000;
        userOffset = 5000;
        pricePerUser = 0.1;


      }else if ((customers1 > 1000) && (customers1 <= 5000)) {
        baseValue = 1000;
        userOffset = 1000;
        pricePerUser = 0.5;

      }else if ((customers1 > 50000) && (customers1 <= 100000)) {
        baseValue = 7500;
        userOffset = 50000;
        pricePerUser = 0.05;

      } else if (customers1 <=1000) {
        baseValue = 1000;
        userOffset = 0;
        pricePerUser = 0;
      }


      finalPrice1 = Math.round(baseValue + (customers1 - userOffset) * pricePerUser);

      const numberFormatter = Intl.NumberFormat('en-US');


      tooltip1.innerHTML = `<span>${customers1} Customers</span>`;
      price1.innerHTML = `<span>$${finalPrice1} / month</span>`;

    };

    range1.oninput = () => {
      setRange(range1.value);
      Calculate();

    }
