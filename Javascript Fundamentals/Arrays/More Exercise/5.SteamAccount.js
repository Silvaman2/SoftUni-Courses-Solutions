function SteamAccount(commandArray) {
    let index = 0;
    let steamLibrary = commandArray[index].split(' ');

    while(commandArray[++index] != 'Play!') {
        let command = commandArray[index].split(' ');
        let action = command[0];
        let game = command[1];

        switch(action) {


            case 'Install':
                if(!steamLibrary.includes(game)) {
                    steamLibrary.push(game);
                }
                break;


            case 'Uninstall':
                for(let i = 0; i < steamLibrary.length; i++) {
                    if(steamLibrary[i] === game) {
                        steamLibrary.splice(i, 1);
                        break;
                    }
                }
                break;


            case 'Update':
                for(let i = 0; i < steamLibrary.length; i++) {
                    if(steamLibrary[i] === game) {
                        steamLibrary.splice(i, 1);
                        steamLibrary.push(game);
                        break;
                    }
                }
                break;



            case 'Expansion':
                let baseGame = game.split('-')[0];
                let expansion = game.split('-')[1];

                for(let i = 0; i < steamLibrary.length; i++) {
                    if(steamLibrary[i] === baseGame) {
                        steamLibrary.splice(i + 1, 0, `${baseGame}:${expansion}`);
                    }
                }
                break;
        }
    }

    console.log(steamLibrary.join(' '));
}