export interface CreatePatientDTO {
    name: string;
    age: number;
    address: string;
}
export interface UpdatePatientDTO {
    name?: string;
    age?: number;
    address?: string;
}
export declare function createPatient(doctorId: string, dto: CreatePatientDTO): Promise<{
    id: string;
    name: string;
    role: import("../generated/prisma/enums").Role;
    createdAt: Date;
    patient_code: string;
    age: number;
    address: string;
    doctorId: string;
}>;
export declare function getPatients(doctorId: string): Promise<{
    id: string;
    name: string;
    role: import("../generated/prisma/enums").Role;
    createdAt: Date;
    patient_code: string;
    age: number;
    address: string;
    doctorId: string;
}[]>;
export declare function getPatientById(id: string, doctorId: string): Promise<{
    id: string;
    name: string;
    role: import("../generated/prisma/enums").Role;
    createdAt: Date;
    patient_code: string;
    age: number;
    address: string;
    doctorId: string;
}>;
export declare function updatePatient(id: string, doctorId: string, dto: UpdatePatientDTO): Promise<{
    id: string;
    name: string;
    role: import("../generated/prisma/enums").Role;
    createdAt: Date;
    patient_code: string;
    age: number;
    address: string;
    doctorId: string;
}>;
export declare function deletePatient(id: string, doctorId: string): Promise<void>;
//# sourceMappingURL=patient.service.d.ts.map