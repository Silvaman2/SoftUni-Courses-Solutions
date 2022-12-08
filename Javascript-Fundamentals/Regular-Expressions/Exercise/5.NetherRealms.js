function netherRealms(string) {
    const participantList = string.split(/[, ]+/);
    const asciiPattern = /[^\d+\-*/\.]/g;
    const sumPattern = /[+\-]?\d+\.?\d*/g;
    const symbolPattern = /[*/]/g;
    const participants = [];

    for (const participantName of participantList) {
        let health = 0;
        let damage = 0;

        let asciiMatch;
        while(asciiMatch = asciiPattern.exec(participantName)) {
            health += asciiMatch[0].charCodeAt(0);
        }


        let sumMatch;
        while(sumMatch = sumPattern.exec(participantName)) {
            damage += Number(sumMatch[0]);
        }
        
        let symbolMatch;
        while(symbolMatch = symbolPattern.exec(participantName)) {
            damage *= symbolMatch[0] === '*' ? 2 : 0.5;
        }

        participants.push({
            name:participantName,
            health:health,
            damage:damage
        });
    }
    participants.sort((a, b) => a.name.localeCompare(b.name));

    for(const participant of participants) {
        console.log(`${participant.name} - ${participant.health} health, ${participant.damage.toFixed(2)} damage`);
    }
}



netherRealms('M3ph-0.5s-0.5t0.0**');
console.log('-------------------------------------');
netherRealms('M3ph1st0**, Azazel');
console.log('-------------------------------------');
netherRealms('Gos/ho');