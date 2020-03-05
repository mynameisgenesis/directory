import { Department } from './department.interface';
import { Team } from './team.interface';

export interface Employee {
    first_name: string;
    last_name: string;
    department: Department;
    team: Team;
}