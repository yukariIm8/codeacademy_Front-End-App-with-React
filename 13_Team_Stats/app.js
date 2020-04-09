const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
        },
      {
        firstName: 'Pete',
        lastName: 'Wheeler',
        age: 54
        },
      {
        firstName: 'Nick',
        lastName: 'Hose',
        age: 33
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Giants',
        teamPoints: 51,
        opponentPoints: 46
      },
      {
        opponent: '49ers',
        teamPoints: 36,
        opponentPoints: 31
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
    addGame(name, teamPt, opPt) {
      let game = {
        opponent: name,
        teamPoints: teamPt,
        opponentPoints: opPt
      };
      this._games.push(game);
    }
  };
  
  // Invoke the addPlayer method on three players and print the updated array.
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa','Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);

  console.log(team.players);

  // Invoke the addGame method on three games and print the updated array.
  team.addGame('Titans', 7, 11);
  team.addGame('Jets', 20, 19);
  team.addGame('Redskins', 34, 25);
  
  console.log(team.games);
