import brassQuintetNo1Desc from './descriptions/brass-quintet-no-1.txt'
import dropletsDesc from './descriptions/droplets.txt'
import heartlandiaDesc from './descriptions/heartlandia.txt'
import inTheMachineDesc from './descriptions/in-the-machine.txt'
import isntItNiceDesc from './descriptions/isnt-it-nice.txt'
import lucaloxDesc from './descriptions/lucalox.txt'
import secondChanceEncounterDesc from './descriptions/second-chance-encounter.txt'
import sonarDesc from './descriptions/sonar.txt'
import steadyBlueDesc from './descriptions/steady-blue.txt'
import tunnelVisionDesc from './descriptions/tunnel-vision.txt'

export default [
    {
        genre: 'Electronica',
        works: [
            {
                title: "Steady Blue",
                basename: 'steady_blue',
                desc: steadyBlueDesc,
            },
            {
                title: 'Sonar',
                basename: 'sonar',
                desc: sonarDesc,
            },
            {
                title: 'Lucalox',
                basename: 'lucalox',
                desc: lucaloxDesc,
            },
            {
                title: "Isn't it Nice",
                basename: 'isnt_it_nice',
                desc: isntItNiceDesc,
            },
            {
                title: 'Second Chance Encounter',
                basename: 'second_chance_encounter',
                desc: secondChanceEncounterDesc,
            },
        ],
    },
    {
        genre: 'Contemporary Art',
        works: [
            {
                title: 'Droplets',
                basename: 'droplets',
                desc: dropletsDesc,
            },
            {
                title: 'In the Machine',
                basename: 'in_the_machine',
                desc: inTheMachineDesc,
            },
            {
                title: 'Heartlandia',
                basename: 'heartlandia',
                desc: heartlandiaDesc,
            },
            {
                title: 'Brass Quintet no. 1',
                basename: 'brass_quintet_no_1',
                desc: brassQuintetNo1Desc,
            },
            {
                title: 'Tunnel Vision',
                basename: 'tunnel_vision',
                desc: tunnelVisionDesc,
            },
        ],
    },
    {
        genre: 'Vignettes',
        works: [
            {
                title: 'Every YouTube Title Bed',
                basename: 'youtube',
            },
            {
                title: 'Every Synthwave Jam',
                basename: 'synthwave',
            },
            {
                title: 'Every Investigative Journalism Podcast',
                basename: 'podcast',
            },
        ],
    },
]