import { TeamAchronim, Positions, Conference, Division } from "../shared/enum.shared"

export class Player {
    name: string;
    secondName: string;
    surname: string;
    age: string;
    jerseyNumber: string;
    team: Team;
    photo: string;
    position: Positions;
    // stats: Statistics;
}

export interface Statistics {
    points: string;
    rebounds: string;
    assists: string;
    steals: string;
    blocks: string;
    turnovers: string;
    minutes: string;
    fouls: string;
}

export class Team {
    name: string;
    city: string;
    logo: string;
    achronim: TeamAchronim;
    conference: Conference;
    division: Division;
}