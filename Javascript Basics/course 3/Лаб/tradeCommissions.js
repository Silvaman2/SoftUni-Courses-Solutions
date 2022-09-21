function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);

    let commission;
    let result;

    switch(city) {
        case 'Sofia':
            if(sales >= 0) {
                if(sales <= 500) {
                    commission = 0.05;
                } else if(sales <= 1000) {
                    commission = 0.07;
                } else if(sales <= 10000) {
                    commission = 0.08;
                } else if(sales > 10000) {
                    commission = 0.12;
                }
            }
            break;
        case 'Varna':
            if(sales >= 0) {
                if(sales <= 500) {
                    commission = 0.045;
                } else if(sales <= 1000) {
                    commission = 0.075;
                } else if(sales <= 10000) {
                    commission = 0.10;
                } else if(sales > 10000) {
                    commission = 0.13;
                }
            }
            break;
        case 'Plovdiv':
            if(sales >= 0) {
                if(sales <= 500) {
                    commission = 0.055;
                } else if(sales <= 1000) {
                    commission = 0.08;
                } else if(sales <= 10000) {
                    commission = 0.12;
                } else if(sales > 10000) {
                    commission = 0.145;
                }
            }
            break;
    }
    if(commission) {
        result = sales * commission;
        console.log(result.toFixed(2));
    } else {
        console.log('error');
    }
}