import { Employee } from './employee.interface';

export interface Team {
    id: number;
    name: string;
    employees: Employee[];
}