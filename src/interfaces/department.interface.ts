import { Employee } from './employee.interface';

export interface Department {
    id: number;
    name: string;
    employees: Employee[];
}