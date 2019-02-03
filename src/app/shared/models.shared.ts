import { Teams, Positions } from "../shared/enum.shared"

export class Player {
    name: string;
    secondName: string;
    surname: string;
    age: string;
    jerseyNumber: string;
    team: Teams;
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