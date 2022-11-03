    if($('div#calculator-1').length) {
   const
      range = document.getElementById('range-1'),
      tooltip = document.getElementById('tooltip-1'),
      price = document.getElementById('price-1'),
      
      setValue = () => {
        const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 16 - (newValue * 0.32);
        tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress-1", `calc(${newValue}% + (${newPosition}px))`);
      };
      
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);
    
    let customers = 0;

		
    const setRange = (value) => {
      if (range.value <= 33333.3333) {
        $("#range-1").attr('step', 666.666667);
        customers = Math.round(value / 666.666667 * 100)

      } else if ((range.value > 33333.3333) && (range.value < 66666.6666)) {
        $("#range-1").attr('step', 740.74074);
                  customers =  Math.round(5000 + (value - 33333.3333) / 740.74074 * 1000)

      } else {
        $("#range-1").attr('step', 6666.66666);
                  customers = Math.round(50000 + (value - 66666.6666) / 6666.66666 * 10000)

      }
    }

    const Calculate = () => {

      let baseValue = 1000;
      let userOffset = 1000;
      let pricePerUser = 0.5;
      let finalPrice = 1000;


      if ((customers > 5000) && (customers <= 50000)) {
        baseValue = 3000;
        userOffset = 5000;
        pricePerUser = 0.1;


      }else if ((customers > 1000) && (customers <= 5000)) {
        baseValue = 1000;
        userOffset = 1000;
        pricePerUser = 0.5;

      }else if ((customers > 50000) && (customers <= 100000)) {
        baseValue = 7500;
        userOffset = 50000;
        pricePerUser = 0.05;

      } else if (customers <=1000) {
        baseValue = 1000;
        userOffset = 0;
        pricePerUser = 0;
      }


      finalPrice = Math.round(baseValue + (customers - userOffset) * pricePerUser);

      const numberFormatter = Intl.NumberFormat('en-US');


      tooltip.innerHTML = `<span>${customers} Customers</span>`;
      price.innerHTML = `<span>$${finalPrice} / month</span>`;

    };

    range.oninput = () => {
      setRange(range.value);
      Calculate();

    }

}
    
        if($('div#calculator-2').length) {
   const
      range = document.getElementById('range-2'),
      tooltip = document.getElementById('tooltip-2'),
      price = document.getElementById('price-2'),
      
      setValue = () => {
        const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 16 - (newValue * 0.32);
        tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty("--range-progress-2", `calc(${newValue}% + (${newPosition}px))`);
      };
      
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);
    
    let customers = 0;

		
    const setRange = (value) => {
      if (range.value <= 33333.3333) {
        $("#range-2").attr('step', 666.666667);
        customers = Math.round(value / 666.666667 * 100)

      } else if ((range.value > 33333.3333) && (range.value < 66666.6666)) {
        $("#range-2").attr('step', 740.74074);
                  customers =  Math.round(5000 + (value - 33333.3333) / 740.74074 * 1000)

      } else {
        $("#range-2").attr('step', 6666.66666);
                  customers = Math.round(50000 + (value - 66666.6666) / 6666.66666 * 10000)

      }
    }

    const Calculate = () => {

      let baseValue = 1000;
      let userOffset = 1000;
      let pricePerUser = 0.5;
      let finalPrice = 1000;


      if ((customers > 5000) && (customers <= 50000)) {
        baseValue = 3000;
        userOffset = 5000;
        pricePerUser = 0.1;


      }else if ((customers > 1000) && (customers <= 5000)) {
        baseValue = 1000;
        userOffset = 1000;
        pricePerUser = 0.5;

      }else if ((customers > 50000) && (customers <= 100000)) {
        baseValue = 7500;
        userOffset = 50000;
        pricePerUser = 0.05;

      } else if (customers <=1000) {
        baseValue = 1000;
        userOffset = 0;
        pricePerUser = 0;
      }


      finalPrice = Math.round(baseValue + (customers - userOffset) * pricePerUser);

      const numberFormatter = Intl.NumberFormat('en-US');


      tooltip.innerHTML = `<span>${customers} Customers</span>`;
      price.innerHTML = `<span>$${finalPrice} / month</span>`;

    };

    range.oninput = () => {
      setRange(range.value);
      Calculate();

    }

}
    
    