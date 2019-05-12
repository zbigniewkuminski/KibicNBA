import { Team } from "./models.shared";
import { TeamAchronim, Conference, Division } from "./enum.shared";

export class ServiceShared {

    constructor() { }
    
    public teams: Array<Team> = [{
        'name': 'Atlanta Hawks',
        'city': 'Atlanta',
        'logo': '/images/team_logo/ATL.png',
        'achronim': TeamAchronim.ATL,
        'conference': Conference.Eastern,
        'division': Division.SouthEast
    }, {
        'name': 'Brooklyn Nets',
        'city': 'New York',
        'logo': '/images/team_logo/BKN.png',
        'achronim': TeamAchronim.BKN,
        'conference': Conference.Eastern,
        'division': Division.Atlantic
    }, {
        'name': 'Boston Celtics',
        'city': 'Boston',
        'logo': '/images/team_logo/BOS.png',
        'achronim': TeamAchronim.BOS,
        'conference': Conference.Eastern,
        'division': Division.Atlantic
    }, {
        'name': 'Charlotte Hornets',
        'city': 'Charlotte',
        'logo': '/images/team_logo/CHA.png',
        'achronim': TeamAchronim.CHA,
        'conference': Conference.Eastern,
        'division': Division.SouthEast
    }, {
        'name': 'Chicago Bulls',
        'city': 'Chicago',
        'logo': '/images/team_logo/CHI.png',
        'achronim': TeamAchronim.CHI,
        'conference': Conference.Eastern,
        'division': Division.Central
    }, {
        'name': 'Cleveland Cavaliers',
        'city': 'Cleveland',
        'logo': '/images/team_logo/CLE.png',
        'achronim': TeamAchronim.CLE,
        'conference': Conference.Eastern,
        'division': Division.Central
    }, {
        'name': 'Dallas Mavericks',
        'city': 'Dallas',
        'logo': '/images/team_logo/DAL.png',
        'achronim': TeamAchronim.DAL,
        'conference': Conference.Western,
        'division': Division.SouthWest
    }, {
        'name': 'Denver Nuggets',
        'city': 'Denver',
        'logo': '/images/team_logo/DEN.png',
        'achronim': TeamAchronim.DEN,
        'conference': Conference.Western,
        'division': Division.NorthWest
    }, {
        'name': 'Detroit Pistons',
        'city': 'Detroit',
        'logo': '/images/team_logo/DET.png',
        'achronim': TeamAchronim.DET,
        'conference': Conference.Eastern,
        'division': Division.Central
    }, {
        'name': 'Golden State Warriors',
        'city': 'Oakland',
        'logo': '/images/team_logo/GSW.png',
        'achronim': TeamAchronim.GSW,
        'conference': Conference.Western,
        'division': Division.Pacific
    }, {
        'name': 'Houston Rockets',
        'city': 'Houston',
        'logo': '/images/team_logo/HOU.png',
        'achronim': TeamAchronim.HOU,
        'conference': Conference.Western,
        'division': Division.SouthWest
    }, {
        'name': 'Indiana Pacers',
        'city': 'Indianapolis',
        'logo': '/images/team_logo/IND.png',
        'achronim': TeamAchronim.IND,
        'conference': Conference.Eastern,
        'division': Division.Central
    }, {
        'name': 'Los Angeles Clippers',
        'city': 'Los Angeles',
        'logo': '/images/team_logo/LAC.png',
        'achronim': TeamAchronim.LAC,
        'conference': Conference.Western,
        'division': Division.Pacific
    }, {
        'name': 'Los Angeles Lakers',
        'city': 'Los Angeles',
        'logo': '/images/team_logo/LAL.png',
        'achronim': TeamAchronim.LAL,
        'conference': Conference.Western,
        'division': Division.Pacific
    }, {
        'name': 'Memphis Grizzlies',
        'city': 'Memphis',
        'logo': '/images/team_logo/MEM.png',
        'achronim': TeamAchronim.MEM,
        'conference': Conference.Western,
        'division': Division.SouthWest
    }, {
        'name': 'Miami Heat',
        'city': 'Miami',
        'logo': '/images/team_logo/MIA.png',
        'achronim': TeamAchronim.MIA,
        'conference': Conference.Eastern,
        'division': Division.SouthEast
    }, {
        'name': 'Milwaukee Bucks',
        'city': 'Milwaukee',
        'logo': '/images/team_logo/MIL.png',
        'achronim': TeamAchronim.MIL,
        'conference': Conference.Eastern,
        'division': Division.Central
    }, {
        'name': 'Minnesota Timberwolves',
        'city': 'Minnesota',
        'logo': '/images/team_logo/MIN.png',
        'achronim': TeamAchronim.MIN,
        'conference': Conference.Western,
        'division': Division.NorthWest
    }, {
        'name': 'New Orleans Pelicans',
        'city': 'New Orleans',
        'logo': '/images/team_logo/NOLA.png',
        'achronim': TeamAchronim.NOP,
        'conference': Conference.Western,
        'division': Division.SouthWest
    }, {
        'name': 'New York Knicks',
        'city': 'New York',
        'logo': '/images/team_logo/NYK.png',
        'achronim': TeamAchronim.NYK,
        'conference': Conference.Eastern,
        'division': Division.Atlantic
    }, {
        'name': 'Oklahoma City Thunder',
        'city': 'Oklahoma City',
        'logo': '/images/team_logo/OKC.png',
        'achronim': TeamAchronim.OKC,
        'conference': Conference.Western,
        'division': Division.NorthWest
    }, {
        'name': 'Orlando Magic',
        'city': 'Orlando',
        'logo': '/images/team_logo/ORL.png',
        'achronim': TeamAchronim.ORL,
        'conference': Conference.Eastern,
        'division': Division.SouthEast
    }, {
        'name': 'Philadelphia 76ers',
        'city': 'Philadelphia',
        'logo': '/images/team_logo/PHI.png',
        'achronim': TeamAchronim.PHI,
        'conference': Conference.Eastern,
        'division': Division.Atlantic
    }, {
        'name': 'Phoenix Suns',
        'city': 'Phoenix',
        'logo': '/images/team_logo/PHX.png',
        'achronim': TeamAchronim.PHX,
        'conference': Conference.Western,
        'division': Division.Pacific
    }, {
        'name': 'Portland Trail Blazers',
        'city': 'Portland',
        'logo': '/images/team_logo/POR.png',
        'achronim': TeamAchronim.POR,
        'conference': Conference.Western,
        'division': Division.NorthWest
    }, {
        'name': 'Sacramento Kings',
        'city': 'Sacramento',
        'logo': '/images/team_logo/SAC.png',
        'achronim': TeamAchronim.SAC,
        'conference': Conference.Western,
        'division': Division.Pacific
    }, {
        'name': 'San Antonio Spurs',
        'city': 'San Antonio',
        'logo': '/images/team_logo/SAS.png',
        'achronim': TeamAchronim.SAS,
        'conference': Conference.Western,
        'division': Division.SouthWest
    }, {
        'name': 'Toronto Raptors',
        'city': 'Toronto',
        'logo': '/images/team_logo/TOR.png',
        'achronim': TeamAchronim.TOR,
        'conference': Conference.Eastern,
        'division': Division.Atlantic
    }, {
        'name': 'Utah Jazz',
        'city': 'Utah',
        'logo': '/images/team_logo/UTA.png',
        'achronim': TeamAchronim.UTA,
        'conference': Conference.Western,
        'division': Division.NorthWest
    }, {
        'name': 'Washington Wizards',
        'city': 'Washington D.C.',
        'logo': '/images/team_logo/WAS.png',
        'achronim': TeamAchronim.WAS,
        'conference': Conference.Eastern,
        'division': Division.SouthEast
    }
    ]
}


