function arenaTier(input) {
    const gladiators = {};

    while(input[0] !== `Ave Cesar`) {
        const string = input.shift();
        if(string.includes(`vs`)) {
            const [firstParticipant, secondParticipant] = string.split(' vs ');

            if(gladiators[firstParticipant] && gladiators[secondParticipant]) {
                gladiatorFight(firstParticipant, secondParticipant);
            }
        } else {
            let [gladiatorName, technique, skill] = string.split(' -> ');
            skill = Number(skill);

            if(gladiators[gladiatorName]) {
                const currentTechniques = gladiators[gladiatorName];


                if(currentTechniques[technique]) {
                    const currentSkill = currentTechniques[technique];

                    currentTechniques[technique] = Math.max(currentSkill, skill);
                } else {
                    currentTechniques[technique] = skill;
                }

            } else {
                gladiators[gladiatorName] = {
                    [technique]:skill
                };
            }
        }
    }

    const sortedGladiators = Object.entries(gladiators)
    .map(([gladiatorName, techniques]) => {
        const sortedTechniques = Object.entries(techniques)
            .sort((a, b) => b[1] - a[1]);
        return [gladiatorName, Object.fromEntries(sortedTechniques)];
    })
    .sort((a, b) => totalValue(b[1]) - totalValue(a[1]));


    for(const [gladiatorName, techniques] of sortedGladiators) {

        console.log(`${gladiatorName}: ${totalValue(techniques)} skill`);

        for(const techniqueName in techniques) {
            console.log(`- ${techniqueName} <!> ${techniques[techniqueName]}`);
        }
    }






    function gladiatorFight(name, otherName) {
        const [techniques, otherTechniques] = [gladiators[name], gladiators[otherName]];

        let shareTechniques = false;

        for(const technique in techniques) {
            if(Object.keys(otherTechniques).includes(technique)) {
                shareTechniques = true;
                break;
            }
        }

        if(shareTechniques) {
            const loser = totalValue(techniques) < totalValue(otherTechniques) ?
                name :
                otherName;
            
            delete gladiators[loser]
        }
    }




    function totalValue(techniques) {
        return Object
        .values(techniques)
        .reduce((a, b) => a + b);
    }
}


arenaTier([

    'Peter -> BattleCry -> 400',
    
    'Alex -> PowerPunch -> 300',
    
    'Stefan -> Duck -> 200',
    
    'Stefan -> Tiger -> 250',
    
    'Ave Cesar'
    
    ]);