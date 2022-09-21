function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++


    for(let i = 0; i <= openTabs;i++) {
        let currentTab = input[index];
        index++;
        switch(currentTab) {
            case 'Facebook':
                salary -= 150;
                break;
            case 'Instagram':
                salary -= 100;
                break;
            case 'Reddit':
                salary -= 50
                break;
        }
    }
    if(salary > 0) {
        console.log(salary);
    } else {
        console.log('You have lost your salary.');
    }
}