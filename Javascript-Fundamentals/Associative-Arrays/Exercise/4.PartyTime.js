function partyTime(input) {
    const vipGuests = [];
    const normalGuests = [];

    let currentGuest = input.shift();

    while(currentGuest !== `PARTY`) {
        if(isNaN(currentGuest[0])) {
            normalGuests.push(currentGuest);
        } else {
            vipGuests.push(currentGuest);
        }
        currentGuest = input.shift();
    }
    const allGuests = vipGuests.concat(normalGuests)
    .filter(a => !input.includes(a));

    // for(const guest of input) {
    //     allGuests.splice(allGuests.indexOf(guest), 1);
    // }
    
    console.log(allGuests.length);
    for(const guest of allGuests) {
        console.log(guest);
    }
}


partyTime(['sdfdsfgv',
`wqeasdferf`,
`4gdfghtbh`,
`dvdfefdasf`,
`456ghfbh`,
`r45fdfg`,
`3dgvfbbhyth`,
`5gthhgfgh`,
`9dvcfggh`,
`sadvdergv`,
`PARTY`,
`456ghfbh`,
`wqeasdferf`,
`r45fdfg`,
'sdfdsfgv',
`3dgvfbbhyth`]);