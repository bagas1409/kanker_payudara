import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Doctor: "Doctor";
    readonly Patient: "Patient";
    readonly Diagnosis: "Diagnosis";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const DoctorScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly createdAt: "createdAt";
};
export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum];
export declare const PatientScalarFieldEnum: {
    readonly id: "id";
    readonly patient_code: "patient_code";
    readonly name: "name";
    readonly age: "age";
    readonly address: "address";
    readonly role: "role";
    readonly doctorId: "doctorId";
    readonly createdAt: "createdAt";
};
export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum];
export declare const DiagnosisScalarFieldEnum: {
    readonly id: "id";
    readonly diagnosis_code: "diagnosis_code";
    readonly patientId: "patientId";
    readonly doctorId: "doctorId";
    readonly age_at_diagnosis: "age_at_diagnosis";
    readonly type_of_breast_surgery: "type_of_breast_surgery";
    readonly cancer_type: "cancer_type";
    readonly cancer_type_detailed: "cancer_type_detailed";
    readonly cellularity: "cellularity";
    readonly chemotherapy: "chemotherapy";
    readonly pam50_subtype: "pam50_subtype";
    readonly cohort: "cohort";
    readonly er_status_ihc: "er_status_ihc";
    readonly er_status: "er_status";
    readonly neoplasm_histologic_grade: "neoplasm_histologic_grade";
    readonly her2_status_snp6: "her2_status_snp6";
    readonly her2_status: "her2_status";
    readonly tumor_histologic_subtype: "tumor_histologic_subtype";
    readonly hormone_therapy: "hormone_therapy";
    readonly menopausal_state: "menopausal_state";
    readonly integrative_cluster: "integrative_cluster";
    readonly tumor_laterality: "tumor_laterality";
    readonly lymph_nodes_examined_positive: "lymph_nodes_examined_positive";
    readonly mutation_count: "mutation_count";
    readonly nottingham_prognostic_index: "nottingham_prognostic_index";
    readonly oncotree_code: "oncotree_code";
    readonly overall_survival_months: "overall_survival_months";
    readonly overall_survival_status: "overall_survival_status";
    readonly pr_status: "pr_status";
    readonly radio_therapy: "radio_therapy";
    readonly relapse_free_status_months: "relapse_free_status_months";
    readonly sex: "sex";
    readonly gene_classifier_subtype: "gene_classifier_subtype";
    readonly tumor_size: "tumor_size";
    readonly tumor_stage: "tumor_stage";
    readonly patient_vital_status: "patient_vital_status";
    readonly createdAt: "createdAt";
};
export type DiagnosisScalarFieldEnum = (typeof DiagnosisScalarFieldEnum)[keyof typeof DiagnosisScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map