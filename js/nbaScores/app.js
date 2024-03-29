const warriorsGames = [{
    awayTeam: {
        team: 'Golden State',
        points: 119,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 106,
        isWinner: false
    }
},
    {
        awayTeam: {
            team: 'Golden State',
            points: 105,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 127,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 126,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 85,
            isWinner: false
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 92,
            isWinner: false
        },
        awayTeam: {
            team: 'Houston',
            points: 95,
            isWinner: true
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 94,
            isWinner: false
        },
        homeTeam: {
            team: 'Houston',
            points: 98,
            isWinner: true
        }
    },
    {
        homeTeam: {
            team: 'Golden State',
            points: 115,
            isWinner: true
        },
        awayTeam: {
            team: 'Houston',
            points: 86,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: 'Golden State',
            points: 101,
            isWinner: true
        },
        homeTeam: {
            team: 'Houston',
            points: 92,
            isWinner: false
        }
    }
]

const makeChart = (games, targetTeam) => {
    const ulParent = document.createElement('ul');
    for(let game of games) {
        const {homeTeam, awayTeam} = game;
        const gameLi = document.createElement('li')
        gameLi.innerHTML=getScoreLine(game)
        isWinner(game,targetTeam)
        gameLi.classList.add(isWinner(game, targetTeam) ? 'win':  'loss')

        ulParent.appendChild(gameLi);
    }
        return ulParent;
}

const  isWinner = ({homeTeam,awayTeam},targetTeam)=> {
    const target =  homeTeam.team ===  targetTeam ? homeTeam : awayTeam;
    return target.isWinner;
}

const getScoreLine = ({homeTeam, awayTeam}) => {
    const {team:hTeam,points: hPoints} = homeTeam
    const {team:aTeam,points:aPoints} = awayTeam
    const teamNames = `${aTeam} @  ${hTeam}`
    let scoreLine;
    if (aPoints > hPoints) {
        scoreLine = ` <Strong> ${awayTeam.points}</Strong>-${homeTeam.points}`
    }else {
        scoreLine= `  ${awayTeam.points}-<Strong>${homeTeam.points}</Strong>`
    }
    return `${teamNames} ${scoreLine}`
}
const gsSection = document.querySelector('#gs')
const hsSection = document.querySelector('#hr')
const chart1 = makeChart(warriorsGames, 'Golden State')
const chart2 = makeChart(warriorsGames, 'Houston')
 gsSection.appendChild(chart1)
 hsSection.appendChild(chart2)